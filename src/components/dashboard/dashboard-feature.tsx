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
    "4ijGvVZXnaAQSGjYVVQpwKZ4pcizEK67XNGwBMaeTcagPwX219ps8HFsmY7eET89ZLfu6ECgMj38vZsyhRsf2BRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jkBSDGJVoV3ZooBro64JdRRf7wTchXfT6emANhM3xQFviEyHBBJFuZwtMa1PHTurdwdXECbEHCdj8jsgExrriFw",
  "key1": "8rCpJycE8xWvC8FpUsGvk3KycKSKVt5x9FUnefytwCScKrUWSuGr8qrX5cNYeDM77aWDRWYmeS9HWhRjdThyv6a",
  "key2": "61u5ruroDrehqCo3Yiz42fwoEGozEVBr1okbxAUCHQhdXHedvdi1DoFZsSh5M6dy1roBxNB14kKYC3ixnj3askXd",
  "key3": "43GWXXC9TdoXb9gtkjrWXzdkZMJbzi21yw7MdiUdMMZDujAsdeAh7uWkPfXxGsWjFWfmMz4RvzeajoM1GYrX6Emc",
  "key4": "2qBi2DJtupYVvbLxPERzNrvBVBabJ5LQgqvu8f2pCMRGqapDKQau6nrr696hAuW2VyXz4gAGzi7qN56JvKNEwC1Q",
  "key5": "3G9XzQkuaCv3oZu7rDZQeZ618nNyUcGjxW7AH7VqrBpxPn4AWia7GypdMZ2qCy8uzbGK7HBnUDupzkSsEhK3ZPbN",
  "key6": "4Nc4Fx4WSHfoKtbALr5w4bX7nzV71BitPw583B5a1dr7thiQ1gqvvjZtgRsEqmffBDwxxnyB3YsCiw7FDqfQKzoo",
  "key7": "5SuG7SXfpGHTtPYE9NfvYJMs8kq4M88Ny85WVo7BR3wWek2sLCqFAKNXM38xAEBknzfPpxyS7sbWjy3geLmbRn9i",
  "key8": "5xnScuz8N5zcTYWrD6rdLh2yBjvf1mLVWvjYNxDS9Qcx8TQKaSCMc9N3CYc9H7xPQXLQivCHwx5371vhgXoyGQRt",
  "key9": "5tUsg6m6GjUCvYXhdUtoccd26LxpzKRFktx7aQLbeXh9WzHg6drVWiC5Xx3WKTQjbkGG7VYK7MBzMygbxAP5NZ6B",
  "key10": "21hw3LAta5xPEwfnP1ErktGYTZxEaMKowMk1FjyX8KnF5EGnNy8xyoicuYE2Z9UtVv6UsHK6MN4rKnNBsVQyxBoZ",
  "key11": "3MJkiswsyeaP391dCQayuQG26k83QbKVg7iakz3a8rSkQFc5fsLf5Dw3fNDxxyti6bqMnwYdPJZMM2Cwfhg3BehF",
  "key12": "4xwUEuwKD19GpvH3q1VxRnNHdFCLQHzd6mdjAWEbeqSbHy5aSS214zaBWt5Y6FSy4Vhsrusfn9nDurbqcvaYU7ME",
  "key13": "2wyNG8aaLZEddiAAESebehVwdaHZ41vDiWwoRsH11coMuPpAmJgJEeHM5r7q5CzaRHBp1e7c7tT3J84GfRxP2nA1",
  "key14": "oZuXgmE9ioBSkmfo8BN5gQiLxbS5uN2bEC5mGmAmYyHVfnkiazpvJKVK8irhxHuRzQaBoGWZ11zMnj4sEGGRWUX",
  "key15": "efU8w5DUaPiTZAok1KvcYzLw2D7BmmLAJ6nby5qXfhC5syZRWMwXy1Kw551iyq5hLLJupHdDmyawsjUMAQKaWhi",
  "key16": "2zHAAy9PNG3ukUFuWKhxgMWjvTmJeEzyi2YSg6cfhqLH1T4qEguxR3AZNjhL4AJN83cK5B1gUVi6scfgoZdCwCf8",
  "key17": "4jQ9UYGaVGrqDVFU3DvvdTbppEhFibnq8ajXtNm54ykaoUT5Jd6SaRRWpbYgEBQusUXgSXYxrtobpEGbH9qTtCMa",
  "key18": "2FG3WiU2kujz3WGrnm1tZZQRz6HPPGgytEx4aogALnrJHdAkfmUkWcVqpEc23gd1ridMueLXy8dSxyNouzzBzEzd",
  "key19": "5M5tyudsc9ZdUqAp7Wuj3HXtY5yxNoAgGGiQb7dkW2TR9sNnpCLBvRGhruXbksvwcvnqDQGLScaKAgPDfQwnU9YX",
  "key20": "5qrZggZnXGneDtH5nKLTUatWS4XcVWFtmgzqhHJvi8fK7XXZeUqqvucmgaCuakJ9eaT2amJYPukRFeNwTM4wqfTN",
  "key21": "3MqoiRWVbBbeyV4DQmbknP4ZRivKenEQuEfWvpnZWoGB3WeXTsgRzD1cTcEd6zqFNNRHCY7xVjv7AAupcQd6JHbr",
  "key22": "43H3qKCubBHAhqGS44YECEX43TXcFq2a9ZbaF1dixGh9Vr6WAVQkBKeQLYKtg7hVjJx7wgnv57HxmY2DN5u5APgb",
  "key23": "oaKMdGXpsfvtEUyW4h1mt3gJ5RwnNLNgbrqnH5Xeayd9TNMgYGW3waL3QVQ7NWUPFEbV7PTgryZkf9qp5WUZ56B",
  "key24": "2AGP4U7RUv6Rj1ATPbLVsSSa3CzEwEhbVeAEe727v2MnwT9dnAS8cQysNd1WBkAgUZbRhDqFk7bwy6WyuSy8gLLb",
  "key25": "2o2au43CVJoYcCr6JJgUU9fBUuWbdKKYsd4eayjhY6zFk8BMKzf8rfApjpb9P7n68Vi7nebgNQw5BJ9iWdMoijde",
  "key26": "D3byjbEXfkPpnARywLxZVEzFtvp1Kt1rc7piL83GEauX6s2sd3Qms2Qh1Ccv596NPM2ETwYmifkEzFroogicRM8",
  "key27": "2jWe6A8yVjuXAKMv86sekFneWH12pyzRA8eeS6B2HSQnvXKRb8JhWmWRxG3qW2FQgCA2y3N26Mtiwqrpt39Upon1",
  "key28": "3V5wMRETQGmZ17TpJDnMLzdcdv6n9rt9Z2CcPEa75jPXwi9yJV39UgNQKuuVpwCJ2cR1uNARACKriWHBNPSZxocG",
  "key29": "2DMWbXmJr8dsKyuzkDx7Auxr6diNka55i22dSusYbD9RTXvoYCgBetnihgi6eM4yfJjHMPbeNCwq25m5pnzE5BkE",
  "key30": "3uSrU3Dx7ErBBEqHvvpuWA3vy5QoUFnwj1RYpmXDhSRfFhXX4NnenJrdLjeQpucXqeqsXQRBbDYmjQiqPefm4JeQ"
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
