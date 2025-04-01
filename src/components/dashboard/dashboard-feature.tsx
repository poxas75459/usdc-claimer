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
    "5ZNkPKcA2DkrPDcT4jcLBT6S6WjZ9PFgrpKDpjUpecejbL1bPECobHykaLqiaPgERhXThMqVQRp2bYhBa3ENjTKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yeWErJJhzXEySn41zmYaLJixTRHiH6b8FC9FbD4sawV6t7RQhwPBFEQtH115jYez6xsty6Z1BvJCJKzGniYws2d",
  "key1": "3UxdEDsHckRdXnD41RtQRo8qmuWh52pFAR6eGy8SnAEwy9MapV8Bb1M8NGYgdCV9YQvoT6pb3KP3PyHM2GZaQvj8",
  "key2": "4k5TWLj9Y8pHUZQV7ShXBncwAT4GccQeihWd1KgTCm9BvkgQjju7vYGsfhn4JcGDJYzcLAnP2tZojyDmHajxpMV1",
  "key3": "nLwkoMEp1KNrh5MaSVL4AQQjsgMtXBpiyRAE6XJVafSPwdy6c72CYdfcj17dcf7AKnPXm3VcwiHPpBWshNpNuW8",
  "key4": "53wZ66NPsWax9xCFzU81XnxiysFGXUKv1mZb2dDXfhu1ZUvm1NvhYwaekScK3bSV4LasTnj7N5emAk5WDjLw8fb2",
  "key5": "4V9tVhBaaKWRWkPj8VNP57j3eDiCCivoa4RpTZHzvLXf8DdEA7ukxKWKDVgDceMoMpLCabssgdLnd2GYMe7pkAQZ",
  "key6": "321RJrqtf56yBhAzroRsnNGhPdN45EhQyMhSKNjjzkKGWP2nchGv32pw6G6HMj9ykN92DoHiddqfqMx7BNx8qnYj",
  "key7": "27djwPaphUMDeHr4jjYn7xj3UfrNEi5NaHxguWTvMSJWrYDggNGQpwvx8PJMKUapvXhishsksEvhaWXGnxGDiqYt",
  "key8": "4WWf4V1eMZdMonzGvkLXH2H36js4nxzRtzdRVAR3VioGo7GoWjeHs8eEtfcKD8PN4ML3yP8idiqbZytY443tKJih",
  "key9": "2zLfRPgxzLzSrwKNEKnSyqDDLCjK4srRwuZhuWSdkHZLrZr5w9bmyKVauX9PR2bVbr4TTqv1E2D32XJM7KB8GHMr",
  "key10": "rEDJwhbPzMvmstbb6zFXP3uj4an7wWJc8eXCuMRi4SZtNL5TFDFXZp6bVtkqpQJvYc7La5yDNg4PzdHnuV3Nga8",
  "key11": "5kBzda8YRvXdZ1VkNmu4oTvZfL2rpU6KYsFyhUfYGqPLnw8C5xcHMqMiTd2zNtFTtHzcZ3fTiwiwnr7yREivrJA",
  "key12": "2AC61WdmeKuT8QRiJMyZmvhcdRUAcukFNRRbUaKpiWpLq33fuAiLGpFGVJC2aufEcYEeji94NF6DC58nreeNKWQZ",
  "key13": "2tYyWE9psq3487Vv3SQN7msXsVQg58QbCja3Jj1LqGdfj3aFLTY1rUeg9rEWTMGhWHhru3J1dt8U3GBZw4SLKoku",
  "key14": "hRdM2HVQLdu5WU4pA8LUvRu6NQ9LP7kA5F5Ujh8VjWShMeJsF3eRzB3uZGZHWUYDCYACxNP3VKtrQjWZ2HzuiiQ",
  "key15": "58fhwM8kRqseNc3LkSHGh5HqHr2MFrDUKjGmQG5nS3SqHp9C45M9PQsjuTujd3PhRHJYV6zyjNVBuXjaVSNEX3Ps",
  "key16": "3eG7vjYheJKiaz5QB1HMq7aDnUgLNKq9459XyTVJr8FXr3r8tPB4mscHuL2RgZnXbCovYo17MfdoRUXG2YtQd7Zb",
  "key17": "2fC4EBN2muzEP39X7ehrGPFCJTvrM6ywCcCdjcajT1jAfeB92oS6hd1XEmvERoqMrhbZmqTj2cYqwZGc8CFnP2He",
  "key18": "5xpQinSp3urXsmPipbBoh3VaGkMQnGvQVRa9DcmiqzBWeUD8zf8G5NG383J4c651PvhZp8V383H7dvueD44ZQjed",
  "key19": "2nnc7hNhWL8ieWVgVXibGred1uD5pGkPZ5GSpahRNxN8mBJeVYDyXBqMXna8aiz1trGEjjanJKq3W9xBaZNtP9XA",
  "key20": "3vbmKB9WR9Bvwxypj4v5CXMiFWKt6HHuZ1nBQMocVnocyeHUjgHSbD3S3phwUTZeE2iJLnmB7GHRbyQ4NP9KLUed",
  "key21": "gtCZgN7nCdxQSYWuSxPrG2Rik4GrPR8BuYw8eZ4Rut4f41bVvu7ZEg8Uve8L5wrgjH3R2ML8XRYxJhHNfQyZskC",
  "key22": "2wLMt4uhxutcHT5smTKvDtTA7WKwzbcp9huyjHJdHfLDhQUmo769gwEHnzhxxFzYA5DDdHqtTkGwpu6FhUCwvJbG",
  "key23": "3GKRNHG8yqgNXTXzqWbbu65LVDuuG4Ynd2REZrnfKc3ZuMouCewDhLEAQSuAR8xYzpEfCDCmc7XW2771zBkGAFns",
  "key24": "51y4HtmjTYW3KWZNtyys69p9ZjaQy4YCx5FzcrftMrHC5DPG5JxYZuue7CBj5yx165xVftrDVEPMLkc7LNpBCX5M",
  "key25": "PVsPmk3YToCzjaMFTRczdA2sjU6QiGazFVZcqtLpzQUGkbfvhjoZe1QkFQHw3RWnKjPjURDzcPgbSUbmdRvk4ve",
  "key26": "2NwdZQiJL7EBw2S7zNPQ5whTZsydx8KQvuX21HEa9ZjLZm53vUk2cDn1dSYPhaYm96XHKrpPyaUTQXPuAZ3Vry2X",
  "key27": "38Rjxewzsj42DYBJtdztU6qDMtSRVSEtt3y161jA6smdCdxybcZLgZ9SXwiSaU2MRZhMkcP6gfHW9wJPzmfpbqYR",
  "key28": "4mdVoKh3Dcf2fWcd3C1ZwVo7Fr4PPevxQST98ACmt9NpeT3tiasS9YrijhXgD23ahhZadG2ruTQYs6iEvH8fAD3S",
  "key29": "4jQZzcFqeU8rvRDyqxyEy1u3XTRkw9XwqNxXnSasMjiLdxZ6QUCz5o9Fq9yeLEX9rHysCxFoTMoPjVmmQdskXKQy",
  "key30": "5u58PwSSGGJnyBG4oEZKvqJbNqKMwbVRCQZaoeVgUe1CaTSES6UU9uJi2M5SxLuKnNV9M6Kr1eWMo63cMJvVRXLL",
  "key31": "5Z2QQbYpW5UqTNAAKmxeKjZemJDiWYYhFgFuJQnefAhfstzEHkEEo6yCUgwDcrvbVJC7vLa1dHVVngKhxCazpLBv",
  "key32": "3nJSUJ8NesdxisLQTigcHhA6mb4L7Qd3Vb3DyiaPKQnh162zDNhJ5KjN5h3cXNW9dVyHDPrEQtnczwEjxuJvYRLb",
  "key33": "2p5W4v6JyE99psFuwn2MbDxPwtnEtwU17HbDKrLyYRCBhYrgnKGdqp3rcuB2HuS67EZwR1qbsKbrNfdwSFSDoNAS",
  "key34": "8eAYmL3iXjZwY9JQhp8BrDwLbmzgYKLd8WfQ8jJVaXryuARCmQKwGmYdhfYCPFMQ3kgb46BsDT7PSvUfFpoc4WZ",
  "key35": "4hVnWDzqZ8s48yZ6aaHDbcMpSMxYT5UV1iqCCUbThKFhk2U3k4dkT1sQ6wB2V7nMA24Q4EZ1iTMRHxoKmqPyThqV",
  "key36": "4Qqj18KUbq3owbKiTp8EiwxhN8JzJJDQuQUMV2rACVV7ZxwwFn5MvdYvtXSTxAYk785Q4K7TyxCJRS3LuuPLTxsF",
  "key37": "4dX9UW2P3K8AfCkEWK3dZFe54rTWVTdYZqM6iZtLMiWJiFMa2frua7WuAoNVTs8CNBSKfbM8xppf2VrY3JwK9YE",
  "key38": "2sc1WZCQ8BZZADpnBESjSdnrKTZBsJ5ytPZKtwteEoL6CiyYazVzuJkmvXfbgoNubV8Gx3CXGzRwUgeMD911GC51",
  "key39": "3J9tzrjzvHQBihYg8GDuaMwHBLGgpXa9J23Gk1bFpPTn4HY77j6rMMBQYTq9egRMAJFuHVvb5DAESrvpba4dHzgB",
  "key40": "5KWyJJzZxLg662mexZWQxcG69GWNe65YcKh4VpA48u4uqE1JTEmQFF45zQPYQS1JLfUoGxTXoTqB9yxmHn81rqz3",
  "key41": "Qmb9JE8yBGSYhotHbSEur2rqXTsRu5qQywFEYj7mRspBnen1m97pKdTJ1sujr4EbVPEE8n1wKUzmhPxYbSxW7Uz",
  "key42": "5PtsjTwnH3UqMfjhak7QQTudemoFakPEj5hKXyRiFEzP7UnWER1uDmKjRvvso6FgKrg2mXUEFFDFG7U1UfU1PPyU",
  "key43": "65WawFuqCXdyGERwwQ1iUBDFigyeQkpwEFXVR9ACbK9TcBfJW9L2tiCvTa9o1YdLyUE7XEMGJZ2dX14ZtivWQo1B"
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
