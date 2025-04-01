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
    "4DrFb7bGCmfu9V34boUgVfu52SSd3PjmNEkpRbgQZfHwYdHz5jpSgdJjCMyomAuCh4ex4iyFnnAqxfQmdJdERdQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KLmZWxUWBsiXKtxZttNyS3eujbq52bVENzkeyQrB5mWLtYtBFxswCU2QT78KQAiCXSV4zcCM5dC3XMPCSyJc9s5",
  "key1": "4j3qcXy5MAZb6dx9zH9X6FWygWrFUezfWXo38hzQh8P6m95oPYTc8dhJaqjJBNUgfvRpkmKByJJ9snwwepZTZ25M",
  "key2": "2WgMRwqnHobj7zxBbpafQRpBa667KQBvPSSWoNCeEDQPox2XdqehERQhsNedFxbtELhFpvXkQrmjtf4mnNqqXpqF",
  "key3": "3ekXRVxBe6fbwa5NpLzBFUu6dmM1HzqVfkYmKMQTpAqcHSzfmYxHAzNyY5f7jymcytkceAnjDakF12gm2njJV5pp",
  "key4": "2akHdYNHPG1xkkuHxyNfQetAhX1zikrUVyx1KMpZcT1VUGFePHi17SvJ1Svi95TxWPUgVZEad4kUXbjXyfyYVdSq",
  "key5": "6zsYGFGCwAxMxuNVW8aoM32kAXU48UN5cagQ3j9JCtdet3VTvNAYe5cqz8JE18NXn2KKLtW7W1yXPxETSXL6bmM",
  "key6": "2C3mtmGi6ZW7Xz8bQQ9ELeBUkjEn7bA3TXD3bR1vrY8Pbx49aS8VQYB8kf6zhQWiZH91iD2o9g2G9HWmJRhKyxYW",
  "key7": "3v5PPVPNJZoDMFmQm7RdCW2Vb4bqzedRSaPjApWr759BNDPZNQWXs6tnkrEPwHP82gAf1JQSDNGKsAfHSzruz3Kj",
  "key8": "MyxJWrtK684K3mdctgAsQ1VE1Gzf3Pv6WNsdmE6jHjM6hXLeNoBEKw3k1K2UD86zdgNdcoWhSHojk9EAo1ARDqK",
  "key9": "5nUjJLn8qopqjbKCWjoPQbbCWiTfyY2gpA6DTdLT8Ut3uAzgFDz6Cu6qpaGebBJKLUbRLqrvh1XU949BsfMpkXhY",
  "key10": "3yi4rGBg3H3zJ3fZHGt3GjhBSDun5JB9Ax24vzzRqBWGKXmuABhhoDDiYwFTSBW1eqngJuPjBUy46LCfGZdyqd4U",
  "key11": "3xnp2WZHdYe97zUygJh8b3cTzxsHGpCAaDpETBB6uMXfokNWF46sZA2QvTEfj3fxJd2LwGWKdMbjQsXgcF3v3xa7",
  "key12": "45EcRxt1jxdVTWDBNJbCyHFFoqMV2M4Yv6WfHibKQQPVAwDPN64Ktsftwsu8Lwmxj2Vg9JSswd2uFQvi4xSrGZjE",
  "key13": "5Jt2AhpfGF8x5weUEoPXzBatZhDSQVoFJdKgPYg7CunXLy97xa6GxJ2C2xiDD6wSfcVQFgYB4CKsUoAJyP6FbuV8",
  "key14": "2wjPszvdTo7NknPeKJLZY8FpKpQxSFfcD8vKLRMcxHVgV4hJefzLeQxa6Cp2WAho8KqNhTDAPRJdYbVgSyY5RVhL",
  "key15": "4AtRkfFKH26hufFgrdkKBfyEGXDYEEabroq7iWjV8L1RjG4EtgEXqtDDiphAjhwoEdCZWAvXjC6oVzJYnGLbhrw6",
  "key16": "3LGugkwJZut7MrGCXME6uLiNdF2qrdgHWC3cxkVHmtmV4AaTqWa6nzmbj7kEzCZRnPZ6BhUacoG2bk6fmcJEVEPi",
  "key17": "3bvKq9SSB5ggKUANJCQJ6tEAGjje1mSeUQNLmBcpSpf3Fo5PAHYCperHqV5eZiPKbTvXsGQHr5KQCfXE6aBB6v3K",
  "key18": "4DBXX8r4jL4BsNaL1qkRUqvcLh7VGAEgnbcpfx1ovBptDUdmA2HKVofStxcdsCDABTK3xavf6vXwDiQmvUhb44Zs",
  "key19": "4JGYXHV4EttwuPjTrpd7Uwpb5NMbMRXmcTH9JiaTfJ7UHnnseaFAcw7NZhKiJBzq7Phk8XCNRQC7jqMfyqkeMAuZ",
  "key20": "3wziZvEVxEDVCt56rA3scBDuYqeGSXcJA9g3aN2QDeWPE1KeVpNrqVhxRemKbxcX6F6WD6VP5YpD667hLcUE27c6",
  "key21": "2D2j6BGNE8sKukAAa1MYuyFYVVDvAFszPAhsLQoD4upp6D7tG6zAFWtZhC7WHrhoGwMCMozQ19YEnitfWrZ2nqcM",
  "key22": "2Xq9Dumhb17W3idYywsyCwpYvXtbibtLPrCns8M264fMppTTzdkBufW4YZiHY9yo3FzgjAvmRF1892deePZxYEfE",
  "key23": "3trgTjkBGgWKcLHAU29YkBmcpc74Qc9yRo8uyvAcUbPrfA1EeHMP6RCVB1bais1ZBoMJpDy9khtGXwqG7PjVYqQs",
  "key24": "4RSv9tJGapvikS4oYnJxdGYaMGPhPBmZqRK3Cbc5NezuseqvR7PKX2SvQEXnxPAPVYUv4z3nUh9o97Nmbt4Laq4",
  "key25": "3HCZAU7rqVogUZ3wb8s9PtpQkwFnuf6b1Xv7mE7yHXageMR5X66iFAMJ5eNnrs7mWTRPA6jAwBJB8HKjSAtrBakE",
  "key26": "wBCApa9Trw3AaxXeHoQR3p51N9Tp4cXubi9jLKuQR72642zuJQY3nnGvhzUAC2zxGoEuTH9R4WktbeLHLghvNfY",
  "key27": "NJ5P8n5midXA59kkBVfUfGRz9A8D8LRvom95wBzfHD6BQKaWvJuNLRBa5hfM81Vm33raPAzguwRQZTHz9NwdVQ2",
  "key28": "4LhgYkNVMRgfbRtZR1Kpsr92LBqT1pJd5ZWioFoCoXpfz5seZX18FpQzbkeiXAgzpCzZMvpVx4f4zXWhdRQJeKd7",
  "key29": "LXRu9C7qRg2au1p62MM1C4tLC1Phg68qPEW7daPqzGXQ9rpnvW1UivbXWf59uVvkz3wUFrWrfiw9Chn8FTdSptJ",
  "key30": "5j58XyLbQ89yv4eUv2fy5jhoaH58CBFhThfk5MVwUNpUu6YXTTToU26tRYzy25gqJXEaVJDQR4JXGC9V7Rq91dRF",
  "key31": "3hZxLYg7bevpH9JcSwERn78dQmyd6cyMhbWtSh2ETTuB58oXW1ytUipDQ2ZpMoZMFkaDRaq3Rjr4Yzi8e3BFk8Bf",
  "key32": "tZFDfKHpBvpb3Y95HFmJDNg7npv6Ff79opiyKPL6LfFU9dgSmCE2C89yDgmP7rYCcuNRS8ySnCaerfHCnkXis2B",
  "key33": "56v7gqEv3QTq1Up2Bw3tqBeVGFVxTcLWeyrhBb8YDmTwGWA65gE7FACRAP3cJeScgd3E6yzepBtaNPzrsgmjGURi",
  "key34": "2K5QubxGARgHDkNZDYgTtHUm1NY9nB731Ewp7qeYWkCtcVmMtYymNBvS2kE9mgBqrQCs4rpYRp2XfbpGsqxLh2Co",
  "key35": "3eKj82uosuufxSawzzDswi3X6HTfoW3DoXJuonMt3sgE35321uM1KgMe72sjQNmyZ7TzBiLjfLWGjmiBYm8xccdv",
  "key36": "Sjy8N3UZDFEhb55E1V7dPV3nBmoWTv3yeMM8STNVE1Z5yPnX1f7A7ZZsCSDUh3gFYHgFZFdWibkhwNGW7uXmUm6",
  "key37": "319SJnvWhctYr4ZpDJp3x6tF4PiAA3gLBFRbKqBHvTDWFHqvSqV7pGdra5XHfFsYcNvzY9fvW4qyEv3JS9xcyigF",
  "key38": "49s55miKbTh4sJsTjzACq7AMxqwCYnSHMkSRYtomvtr7KHGHvnc1PRUaiRgoZD9pzgmvMqKAuKgiLNAy3crrEYzt",
  "key39": "5Di3KwsSB52jqDezkGLFE2MedW3wp4ELeEmc62e9VZxGdhWE5XuaLVs3BTtPQSwMaTNChttBvycthDrC4cXDYmTB",
  "key40": "3Hoo197BSxL7kA5UBJ3ugEmb9QuNkquTWq9DCqJ5RQSSa23dLHvUKdRyDzGUMQRt9Xos8JqzWynPadZg1qPrF855",
  "key41": "24Qge4Bt7mHf2FpZw8Mpehe8s6r9gzBZuXn6mCtSJThpUXw5vkkFsJ2icnaq15pYpj9E7e7Yp3VBJy28NS5DSobn",
  "key42": "2nDxAjG9KraRFrTpnStQ27CWwUA6Fm9zkbnyhzwgrT6zuZu3yQosuMk1zaTAUbPwUjaMpcVUiZPyzna2GyPVCF1U",
  "key43": "4vpCX9BqxQPbFiCkmScdf3RgfmpwLJk1qbrSeJE8HBvva21PFZCNn7FsoxLYfHene48FFCYtZ5WAgMR6trjK9cyJ",
  "key44": "3fja3Kc73eWxXJRkU7bztF29S4kwbv5rdAxrBWM8wTfF8h7f6X9MtZwcd6TetxHmEQdXByLgJe2zLx3S8RxYNxbN"
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
