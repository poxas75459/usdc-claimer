/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5MyYKtGbMuv9e4BdRjhNuUoirmLMAdeoasV8yXqs2TBYpLvQFyZGYYG6VQrL9ySJghT9va2m9nEJ3aKhAznP6WiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xB2k12gBD76oQsYWh8aK8SKHNJQ1JNHMKaiQoJgKMmsVtSfDSkGPkMqmqRxhaFnX1byfejkeD5eV9ezoahVghTo",
  "key1": "2dXQL1adXrmPVhXWSuevn5om9SvGiqpYzTyMMtkdxC8RDvEeBqKeRWge5Qvr4EVVG8fqKteTwao91MJF6omPE49a",
  "key2": "4xXJthyvBhdvNCvoc3ek9oq4mAkjnAkwWW4uSnYmfrAkkhAKtPsLcHuwRzUCwB1H42Aro7qBnUrDP76MGyKpakqk",
  "key3": "5M3K1kAQFBjNkYb9kMLUG8CLTfApn3wBCNTqdMyx2i7BPEzfrw7oJBiWgX4ThZQ8HRLWvbW62231QcBJ8DF2wNDN",
  "key4": "h9QvJh5yCDZYm3jFpTshofGwEp6zHUNbDEaMVKV8qU8efmzyES6vRJwGnD1kK8qFV1YJeoPdhhGDnw9jBoQJ2tH",
  "key5": "HJEVyeakGL4nGUcvc9hyQbyddXtLJ1XQ5aL7yfgG7QPtQxDDWCmHFjKToHnr4JFwGAiguRwwDKCy1zbjkT9pUxK",
  "key6": "4XRWqGFVXBg5r3JXqLLAufmQ8wnaALubjsd7QJDJJq9xaiztr6ScvSt32UDmbCF3ucdaVmcwHaYqk4a1peso5Mei",
  "key7": "4j7xsJYzVY7fmAXvNjXwMbJ5AVD7YbDtQrmqcLthXNRMjSt9LTLjASEYzEd6pbgKwbDwgerX6Gi2mXFV4HYEjaAJ",
  "key8": "4mf3J1LqmnNhqgG1mAe7iyCZJLkpHhozSaMS51QY1TXGpfqDqe8GYHSWg7kLyJLmusGF5Tcs2d9xyKLvaibK9Yzt",
  "key9": "42Gsey21wzoK676EZtwHYheQTQ2U7YJRBvPh2HGGZnmuJadr9tRngm42BGvdk1Fk3WsihSVnZ3PAWDmT8Kw19HaH",
  "key10": "js3CoSzJcvfcdsZ51JYVt24VUezhCvwZQTb7tAMw2GzqveoW7KYKUm3kwp6HdaHwnUjBv4KToQWVSrhtwQDRJji",
  "key11": "3jjwi7h3ww7TBSCKLg2kEJd2x8ZkoLSRNP58DJVhsWEQo3wEpEau2Gg38zTuZhqzZTaYMnnKLPr2RYkkjiaL68jx",
  "key12": "3ug15JPbMLtHhNb3uTkdNDfpK8nus7g4dNUsRRVHuYuW8fPTY7bpT5fQ9mLsPcyXbDPRtWTr1vz4suosAb7cLHX9",
  "key13": "3f1Cz36e2dxSd5CV1KCLgW5vZnheF5Sd7VtRcaTg64JvmoNLvmmMWEUHwG3hcR8ujCwG6GC7DcezmCa72gzUKUb8",
  "key14": "3erwGeTZyA3CMJTBCj7mpzePgTCbfy3q4ErfLydLCwXKeCZo5TeWvmuYcTo3WcRN9iFbE9bAy5LB7CUeigNziTH7",
  "key15": "5ckA3LfrHKP6R5iBuMQWeDWUQCHimGgg3EQCsadF3C3ddoTkCk9evVe8jxTScKea5eCKwo2uqaFMRKCmNyhNwFZT",
  "key16": "635khDe3JKyMun8FAZbzharF7EcMHmYPr6PacdptY6MsUQ3NvNEZudGN5ESya4MrvV8wz8pVCSEGTMXTkJ3TxrL8",
  "key17": "489UvfpVf15FYn2Fa1YbVQsj16Ppt3fVNgwv5KvLVFpSa9fewzPu7cb1XhiAm1DgqFy5k7aowaj4KAHaphtfZDjh",
  "key18": "3NVPGHBdXFf1ZdjRigx9bNSeyoZ4BFWb4Md5Qwgkt38BY42PFJ6BsXhfTtD6exhx1jN5KhZuFmgPaCqo8wW99eE1",
  "key19": "2rQV6NcuSnt5tRieX1aimqW4u1giVcfKtznM32Wsumd88QnN4SES71N1xPuSWvc8Mzvb99jDLXdwFVLL4t56yLYc",
  "key20": "4FmmMprd1TAdotJBE8se73GjkPgtYnTA6bx7VUuYLKbZbxkmSawpKgACaNxSrPJ8XLastNy3yzUXVbww2Yvx2krz",
  "key21": "2x2TgDzMWe7qC3n5WHizxk5YfooaoM8qRN2WEQN6KUe99BBT5CcWTkvfgqCcdmbqhfi76zgf6PpLoAuYUgT2A5mB",
  "key22": "4ditjtzJskMbsXbSSXvfNrZG9Jn9DkJrfyhapwDieJmUswvM7BR7jJ6J3cM3BgXuJJ9RiuEd7zjmvfEoRahMDcYS",
  "key23": "5fLTQsT7pLvkJwjfWLiDgM6cF38e99nzzdwtGppJS3zk9M6oBAH1ecmaqyF3Gtt66vek33y4jFN8r64ys9932q5A",
  "key24": "5aq8KPsbjwcGvYND2P1rVVaSEQRENAMhaQaC8LYa32o9Gw4ZRAZaeUJoiF8ffURfM4KdYotQqMwpzC4jXQ73Whfe",
  "key25": "4dRN2trzpNba59gSTfefjkCgVkxvKKzwsBYcQTGnevAUsrz3vjZcjpMQ9Fpara2NEa5zKUeTAzJWcnkW7Jv8BBuV",
  "key26": "4PiqLa9RitScmvE7eGN6tRzUprysinZojp4Dn3mMCcjMob7nDbzaF52moq5PJYKx6AQhbVTzHDu22H9sGUCxBmUQ",
  "key27": "2AX5Xave9Zs4FBJf9JcjxUpG6Xfk6g9U4kVWHb7dBZDZEE8yME1RWfdFMdYZZY6cMbY4RFsteN4ZNi6hRzzcfFzG",
  "key28": "32jJgeVDYx3QQDaoNRSwVAsTDP9jYNWJb6tcsaz5QSzc5eE5fV1QtNTRrcZnYsmCrcSAPfD2LG197ZusCTkqv3F",
  "key29": "4FKMwWomZvfErpi5wwMKgTVETE3iJmuahEU76geZvZ94LR17zNh45ybGNhcY7FMD2zdv26VXzrmJZeiToa3hUEmv",
  "key30": "3ZNaaAZVejgyuNvkqSFSusL9u6YtmPibqqqt2MrzjwYUFMHM4Mq18vwsh5yxoxg65HaAQ6fJ6APBKuPVCAXZCBHm",
  "key31": "4xqD3j4U8E3f6Mnco7dvSwav9hFrRA8kXmm9VAJ2aL2Y9nqXdkAUdMod9aEVm5WtPf19EpoMLfkdeJvPkB7tRUbF",
  "key32": "ZTL3UsuW4jmpkcdc3m4hHvr2wrr5kXUbmALQGJR8NCpTuPx14VqzTyZmFk58e6Qry7BqvSbRMc9f49DLRqbNDmo",
  "key33": "2H5AspamzPr9mxy3VVgqK1cEXZnUHCishuRMZxCYCDkivugRSibTwcvwuHqWN4BUvZYGcr2VeBbFTytoGegKMusr",
  "key34": "2r4zSgRJbQD8dXtYDHEXHZDgMK679HNFkrDJSKiDvg6r5XqB17smvmkzC8LdkgFiCAqmmx38TxSSZXgux9MQiUnG",
  "key35": "2F4TJGowUkCqJdmEsW2z5ggUGVzV91C3rcbjzhdWvcry9obEmrWL7mK5qygob33rLbmEZJodP4knJLQbJ18PLF9X",
  "key36": "3CBsbG8fDacsCPWcnrhEWVsmkmbZiguxHTdAbgrvQZZ6NVSkhBn2vFtD8xqPvWYTr86UvtFkiu33BaZDRXwbvbPJ",
  "key37": "2yvwbyPwwk2k5jUo4pMwgeWfQM3WgZAyUR4L3rKDA4pyCXsvnTJmcRcDJCGh32Cwj1u2VauB9y6pCSoXAUwQTCMM",
  "key38": "hZJgJMK1rfrz6yBVZ6enMwLrzP4px6VPLgt95PqGSwpQaDpuxNrQ2Ra9dYF8myNwAhMVipUHt6XpULkawA3iS4X"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
