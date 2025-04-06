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
    "g2VCohHrLptxQwWjpLPXKBnoXQyQbg7WXYe1Agvv91LuZGTNgsxTjRK7swidkVjzs4Rcg9jGX4WokcqtdaUgPm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ym7s11a5AzHVKPjgGsw7yQoC1f573M9881SVejCWatQH6XD7irv8DGgHQieaWScDMVixuik8tSWSwJydv1eb6v",
  "key1": "gkRKBWCVvk7KnrTMWVC8iaEHQ1uXkS8AaSio8HcP6PxxATP2H98vGJafYBmk6XwW8rso7XRbXdZdsdjKEEA3sWi",
  "key2": "3jaBtgzdQFTsRemdUToRtuS68Hd2sCKC3oYygmiMHifDaJCJcuPb2PmQ8M8C5j8NBwKkDuR7jgquoNaJoYyJHNEX",
  "key3": "XeSmXWnjmVRRzk8hGRxrWPxgFJ2Bn5Cfbut5b79PPKKK9JRgt18CYA7gWcerf6aaipYdyAP7fwEukXMXfJRJCjT",
  "key4": "4qSKRbk8BVwZQ63dzVAxbBk56dAbF4i4M9nmEhDZHuazQeFErPSF9kWA2CtHGbERsSok2VSGhYK4HJ8ucwLEZTum",
  "key5": "4MtJbWrZyjyQcYnU8z2AmESAiUDYBzjAhNsRUkqVxaJmnCJvxspQSYNH6GhtxoufBx3FwsQaXQHd1FfvWZhQr84w",
  "key6": "krjjb1eivPGJiwH5Uy7DaGMrC2r9cXojUaoATo2NEiBK2GNivTV8eHdp8f9vpRVAu8LpTsanRWDk68h4PRTVz1w",
  "key7": "2srf9hpDFNFSQFU8srySWHzYbfWJrrLwtV6VS44SkpqYStD7NzPrJNjP1o7fKp8BQzp7Lfkp6SLxaGXcZv1K6UZE",
  "key8": "2XsrfvCH7JFbV2kQU2KjzXkADnM9ezdrTuPPXgh2mEYUjMrHTAPLSAJHd4PhfgdnhjrnGwfFaPRsunhKt9dyBnBn",
  "key9": "317YXddYDmaPjBHCM2mFiVUSkWmi3WAQ2J8TwyH4cRM6dMgCocNBjTD8TRxVqFQKHCMKrFPS6VNXrAZqfBWqGJM6",
  "key10": "q4gZV6bJanvifaU2AzfTBicHxb7xKvQFgvdA15x6KxcBvRhi1oWTCwTZW8cxorTrLZeM2vmvxbkmwkSkAKpAHPs",
  "key11": "4r5Ai1oV3NZwzo1FJPe3j3AASPP8cT51vfdbnSmLW4ErDJse9pEuHXaQFvwTKnn7pevSpcZ9XW5p3sK32NXcrktv",
  "key12": "3K6SfpjDguP3mnQ8NDCS3D1kiE6KPARJxNv6onBecVRUzvC82n1sxwEi1BrT8662SzH5KaBDkLgTSWsEDP6SMEo8",
  "key13": "3cJZjD9BbJXJ1CeHL3MXCHHnwetgXvc6piVUUshmqCCyMuEytfLejsVZ6E8QyoVrFiG1ZWJDYvWjjtt7iuuxFERM",
  "key14": "48GAch7wNAAemKf85W9hTzZR1BPPvLLhfC3DjRmRamFbJPvzZk55gUGt7oezDiXbL2Px6uzUZuYoeZfNMMZ4wqaG",
  "key15": "3qpKrBxuNPs67pEKEfRmYkTTumMv7TqrjDtXCi5AhSX5NkyZ1ZTdLihSUPdAoKkKGYyLev3HusZ5uWEarcCyJJz2",
  "key16": "umeXGE67dpkm57pZChvKriKN8pdHzAcWV3zTHPBx28vG6vKfme2mGeRpBJjF3nPhw5sB1EK6u7SwKKcCHAvs9Yj",
  "key17": "QZHP4YeNYtdyi6J6Pk8FPyxopAckF7LnDZV2axrT6b2CTZ9cquhdwrhVjpbsCuGtkVtoNCwjhbUn4VMawVsM6h5",
  "key18": "5YHAXV279tndVmS8yr78BiN5kvWTVYLXLZ9GW2smXtkqep6mHhGVMptUDMu2D75Q9KpHRiP5wPWLYXmg32Z78Gmg",
  "key19": "2oLwqEvqYEHy28isgKKwt6hhnj2xqpqygwSvWtSgeT6jyLmdt58kriNMt6BbafZUC1DKL3BnGEUNupe49aY4txcE",
  "key20": "3faUsZvWthnaUhjS9ChPc4jZdfd991yFqmxbjfnx7zmaDLCaMDEH2pzzMe6eUEY6Xv1TD6xx97jVhwgHjyieRx95",
  "key21": "285ZGWnqVM7HDfPmpL15HDw9BSzC54Uk9FJJgPhWMtqiH119GhiE7SwLGAi1cKEsSG2Pqww6uikhDqQabubtA89R",
  "key22": "3UP9GyWfzPmmPWb6ndzm6QQQKdV3ZsTUDhnDv7ig5AMkZfqB2vYR5N1ZjJVmtQ9CabiFHGs9LoXG9iq28R7t5Xvm",
  "key23": "4HfLGYbxHsXXd1T5S8fRXbC2DbV4cbkXzWCNUQrn7MEqr4CXfmfKECN7V4G6EeAmSr5F3ur43qsQj8MrBC2g6fre",
  "key24": "gRPdDY2rmeMUkVWB2WdmvQKD3aapCJDvLLdFsyX3uDCg81EApXrU7mgvBqdbXxwZ73Sq29z92fnJ6JBvjZjx8mm",
  "key25": "5uDzECAnsM2jBnRUJDjhW15TU1hA7KcZacNbLrVjQJMKgrwn5JxiDBnz4iPwJajhu8j8bBZzkV1UXcudEzG1YbfE",
  "key26": "3p5Dr5bqZhmXEYkHDPA437NGZy2s436qkyuKfUFfN2dYvCochcLRTbdVCY7WPUFgGn3LJBcafGZBQUR5h2FSAFds",
  "key27": "3RbAkWGLdAH6XFoN3yro7ZJNgBSSXMUqL4eB58E5a3mGmwJUkQnLgsbgAuMz8EH5Ut8GEyg8qYXNEdMPnqGdHhZA",
  "key28": "5RDoVAgxTh9fqQhc6xEzBt6mVc2mTSDvSgj4Bk3KnFBUMRe2s1fLRSjpaU8wjBBcniWD5xmCt7Rg2jj56XFCQaGZ",
  "key29": "21gAJY8qDkKTMdTpEdn7nMFFTquugbioVjtz1npyxqqC7xxK41CxtY6ywSMSv1zso43HmadCtzrneeAHy5xfnXY1",
  "key30": "2fVUBe3eCVwQVDLPW2tXQJy6srAdu2KeQSazkQhXw7JhCzgzogH4icqpLyNkY7VpKYMp6qHLFwUXTx64KkBDCTD2",
  "key31": "3MDqn6uKgLW4eXeMBKbiz5SQUpqLzFo8LdZmTV4UUBMW7A1Q3TQoZ9zPGRa7hq4GQwG7fSoxQgGF2oj5ERj8GceG",
  "key32": "5BcGXLS5YuEwH85r1y5J6uovY6sbnmmRTHA64CedSxQNdcSVXp3cEwX6S5Qc2f5SvyZiWjeqNMvarYrB5kTjisyT",
  "key33": "3HuP2g8DkVGYcG36YW8e6ukTMmLWhhHmmo7WNK6ZvcLwnCavwRkPM5dn6qMGjJCCRNJjrmEQJr7L5sujgUfugvHo",
  "key34": "4dTxb2nsrGpjbhWBuUwjPHjqh2B3CmW5aV32zT9YH9xZMJXdemDUJgCYCQcWUSRo5J8ePH4eKHbUGHCPemCheLam",
  "key35": "3nSCT8f7FXjynnnQuzVxkQuKyf3fFhWV1Gx4iQiyNNmWa8fHK8Fe7qqyEYKHfAMrB9ZXQ31hBzu6Ui9TRZursG4g",
  "key36": "3T9iyjJfTqi5aLKnwe9W7GbwBRsbGHGZ66prxVsqKXBA4QxQqD6p7JYpio7feTEjZVVfoaEz8ZMipiV9TieAvKJw",
  "key37": "3kVGuMjWFci4jxP2hXhFqsTPnU33aCWkRSKYSqwnXdLyft4P6LrEGUyR2EGmc4yqy3WesKxJbs7faUPje2cuGY69",
  "key38": "w5FCJ5s5c8MFucb9CMVtGmH2Km2v9Y5ciYSjseCjfAzWWjkbC96QQmVq3cME8J8jPCE7xgMWMQMHphbLyuBvpT9",
  "key39": "3VvDmTtVpaq3qFko1g6BQk2kWFHhG1fqWnokUBDtznUBimv1xatXbnBBtnBYtfdgxwb2sJma53ifheSXaW11aN5y"
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
