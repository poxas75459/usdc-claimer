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
    "CgmXvTuLJo7cHKty3HkEbzvWYYCxZnKZCT2NuExN5xQekkec72PP2jkci2mj7Cyrvo29uEMLfJ1RvctRBaCWbUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HmKyC8ys9zWR1rQxkJyXRkK6Ep9gRcyvtTtnbRG7Sy1DfpvTGmN7byeSgoUZsMRb9GuYkTsD1kQKm4Qa6GoqBPe",
  "key1": "5aq3wh6bDNLygeVoXheumq3DYw8oYbftiwhXJxUzoEfWkZRSVvSdEmMLbtR5us4D6yScDpN847u8NhXe8Bt9Ec73",
  "key2": "2jk5Px1Tnr2zzDuxbq2vCG9QJM2TgjQz4eMG4QPY7VVNw3gNW2ABzRQfM3CepxFiMnJZpxKWntwALnTkF5ZHqRhX",
  "key3": "5nX2qRWPYVu9N922oiQagcNLcYo3c69KUbPkZhuSD44FNVC5YkpmXsb48k5EngMNYAjRRB1MXp1bavMo56ib2GUa",
  "key4": "5RDtc9Nr6bN1WXDgWA237B1VC44ynrDuZQ1htzw5XHSpqmZe8E1CgN5t2eKvKF5NQCziMStkt61qFsaxZmHeSXtz",
  "key5": "3vyfEZQBPLKty1ZbsLcBvdtaQo3XvjVKHWgMmKRaLKMW9GJ4XJPr9wr7dup6UwUeet94JR22wRnvgw8ivDGNH9J9",
  "key6": "5f1Z3M66yKpiXVqyNrJF2NTjH2jZ13FpEfsoZNtQifSMwc7gEmXFPWXAnGAcv8eT8vMpk572fT5gtpbnh14iyAeY",
  "key7": "Vwbn5yYfXmdHxF1NV1eMD2EyFEoeNbo6beQhqg56GxSS689UPUqs7sfJY2FfqXsNw5ZrMqwgwm28eYmSUfFbURa",
  "key8": "463KpaNtyuEeYSAMs2rAVMvgbG6xJx1WJtvmoQFrbYEwouE3RzxerzVSM2makNTx2tVSWA8nC3tEZGsZfuYhNqwh",
  "key9": "4cHxsKwxJUkcqSN7CF9NgTVDNit63RSNUj5DbpHg3qzMT1xhKYJauXRWYiKK6TraV9RXPQo23ES4Q7N472zM5wpf",
  "key10": "2QZFnuEZbRifyyXf8yhGEhG9XoA5ebjCKybk5mGXKv4GGjmRHxaSBr5EDF9XdS51uQqkYAhD2rDxnCHPrDkd9fhc",
  "key11": "2guvh8wfvaKad6X2GANCxMh86zRiLMd9eBFRSXazAeUUh8gzLLH6ZcgVs3knNhN2S2EUjRZJAqQYHvG1pVJFqeyR",
  "key12": "52rYGwxWPMScET94u4UtPc5Y7EHJfLnfkoPz5m8L7QRgWTeuZMbbpfNv3Gp8KqZNF3PXZ9xtPX2zjMfpSZG8Eu4T",
  "key13": "2Bd8r6L1cZWHuZT5dD4XbvpWTXced4tz8UdnyT9SUYV3sgegkUj4XD2KcVpTvYV8x8pLzAcdfXGmDSSDS8D714UL",
  "key14": "4UrwMKkFijinW9cz9JcKjPqvxYv3DLTLJJirax5eFbk7vCdZDs4D5Vig3cavEQzAN8YAYpqXMgta4odbrFMYG3y",
  "key15": "5ni5THmLos9jJgAfQb5huxCaRYrivHmrZHofiBCQZKZLZmprsMLfqZG85bkXmtorg9U6PTzrXDxBnJraQKxwWunt",
  "key16": "2M4rhakmF3EsMV286vge9vAdvqtGVEjxQq42SydhrKQ7B8M2hrLDWDZ5eFkErJeksAwPfqgpp98mkjcFuM8eD6mJ",
  "key17": "3Z7iNMtrbyL49w3XadFd2zVPF7GeiViM4orjCfNTWNLgHsqry4RwJfkAdoHPKH7mQN4HwEPMFfSHDUM1UAcSXMUe",
  "key18": "5f6g3LPwYHk1Xw7bU6C3X2mRFPGqqzp4mWyd7ZfmdDc1QaUMZSgSgQiQTQoZ6xFAE9vBAwAUKkfeB2XWxKGywm7G",
  "key19": "3CjndXqHeucs82b1h97P4QW2MmQaFLaLHBztVBtKhi1rGRQFhoCYVHKqoeZV6cKXLW3ptDrV5ATG4YbuePvL1NZ7",
  "key20": "4Xu1WvbpkXG8i8ASTtdMw3skN7QgqW6q2b2Rb1Bm3w5EF8hVvkLcK6iGg4WLpDvVGFfffBB37LB6omEeupcwMVGR",
  "key21": "64NkCtgtdhfNgit6dEjBbdRaNXrwimP5J7psTTvgot8WL2xaDTXsbjqCmokT3rhtzmaBLAGouu7YdNPs3HDPSdiK",
  "key22": "5nW9CWeyTETzUDg1iXk2zbP9xEt1242pnckuN5gu1ikgT27bFrUpQuG5pwyF1WnrB9L5Ff5Gh2u8mMcs627kXjWd",
  "key23": "fz1f1AHsmnReNN9KgBXCyL5sW7VqxWAjmokJ42uBDK58oH5FtqjPZp3MUoek5Bf48m6eFTmuPvRazz2cHnTJcMd",
  "key24": "2canwu5uGTBMNTUwnspWJPRwYCyJ4o3DDUHNNPdQiCpWnRu2RLwUKsn5EDNXVuuqoqyRgDacj5ZDEV65STdRUxPE",
  "key25": "2Hk2DomZb2q4aMoZqukyqT5JVTGGMstgJo4uPzejJnZxjqiixhkNLpuxr8gNgzG6kQkYHBYqg7ndHub69ovv7oa5",
  "key26": "2SBUSnyJSvN8UMFYc7M6irdEyyV1tdDLv6R8AX98jimGdY1Hef7KXNnvTcLWrGD8RctRgJV2oc8fPpHnP8YEB3go",
  "key27": "3JFeGgrj22YsAdaYRGF4JrUBHS29y1PzUSwDQnWfLCCbkHeuTmUK4b4KqYSXLp87mFCuBwh2qpmu7BdoZgjQf2Zn",
  "key28": "WixLCkXx6x7NTEbPW82vYj3iuZNfAdBG1te8yop1Kt1G7SwktYzUkwjx5AsSHDpqKMJh1vBh3ucpNu9frWBiSAE",
  "key29": "4Wfp6q9phVNqZtQjobCCcunQAUsrQFUqngCo4tzDxpJG3uCDnRyYethAUTS5dWbNWDhyC7EkHKsGoHuRZrMCJ4eQ",
  "key30": "5NJqwzPJHZLi65XN8ZcSxfs1JoWiJVhz2AXev1wrHcthuGA6MD5WdT3pZcsNxYqqVefBz5Ui4fe7c9pWHUwBXyet",
  "key31": "3oqHJSa87amgPKGZeKWKPbZCSkWBDkECRmDNQvKcgpy4w5zh66PSnjAaSiv3cFcVGkHK2Hxuj9VT2e77Wk2npdMs",
  "key32": "5o2VqN8uDQzoWcJcQVkaUULBEFJwsVJmrhUsJUudUhE8tBbBWKc4z7m5Hw2Vf6QcGUrHPsDJzbrwF1FUPLX1ehZ9",
  "key33": "T97XoKnYTVHgP7QGdsVfjeoV17WenrLpxVnQtxQj7RNmRpH5LzCzxHz74uyoaBQ1LxN8q82evAidyFzFoosGXxh",
  "key34": "4LHLMjsLHehBugxWgH1ZxFgUfmYaXLYm39WRLm3PAbLZg3m7d3x3FAZvrV2oWNz6ebkxbqFurJaDAPcwSyzNksjX"
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
