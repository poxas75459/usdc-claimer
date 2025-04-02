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
    "5m3wYeYxBURFzTtxW1rGUuJpMZ3Xf5K5gMJwdfQBkmCPQE8cRA7W7gLZLxmhtzFLNRdjAXAQQCrkUaqhnBEjvm9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3epD8wMKKcVhsrCpfGsbE5HUFoZ6ieBEqWzqPvewDD9kDSNx9hVTT8r5sGivXS53xZ4XppQgzgEy2JUdL3m65Czw",
  "key1": "4SaenqMqqNoZx5FjxkXZnLJq8kqgNw62y4YRjdhsqgzRBbhCetEKSGKejsDV7SwfCYUXBcdeYPgJWnDTmhDWDucz",
  "key2": "3YJ8m4x8qrEjYCUNAUuucN7CwDfCuz6ZMzcnRRmLSVKJpBUx1bF8QXe4CsnhtaFUcYnzByC5nQmfgLWcy3ZP8m54",
  "key3": "imDkp2KVdzNcZW91F6RJM93wh6RzrEE7TG2TKxvu5vg4McZjzQ6eEmU4TDUjJXnGQeEYLFETsoQkNTEMAfWUSwY",
  "key4": "58twdRbxweNjJThPL5jatNYsfoPXvY6KEFkH6UQNT1sEDukBJ5xK4qQWnvmg3CHKYmWRBC3Fav3iypbnP7oonNjj",
  "key5": "2G5zRJfhpBbrGbQnf2uBi5vsxPW1C16GtwQuk59Y2X3krUqVdWUGrNecgoJQuyJ4R8ZGF6eUm5uxtkej8S8KTMo",
  "key6": "hqhjdCFsKnrWVL4nazrAJ1eFwDQDAMp6aUxf6j9t52ZTurFjkYMJ2LGyfB7bLyYYmV177Po3qm56Pnc4R83bqMw",
  "key7": "oD6zuZZtjxCdCu2RA7eZUWquJcpbjgTXkkdy9vjiHMB2NYutizTyGBrZBvcLbmpKAvSRu1FkNYrSZ15sfpGT4Rd",
  "key8": "4oCzRKUcXfZ3J9s9yoFn5PH1ZmCKh7YfFVFazhCjBKLP9Konitdtf5BMYtA1xMfhDgJZZAv5qFstorW2Nx8JHyoy",
  "key9": "mvwWgAub1pfnGUifPR22ggPoTVvaFPkQWn84vGbi3sr7cta5HAd58kQpY2ThjkqDWm5pcoh2LRmtJuSapVeohp6",
  "key10": "3KMk7boBFp1WwWnKomhpgFdN1sS57Tu7dGpCpGiUGwLtZjHdAZDeD7hBxvavt2Ew3LivzFXNoTtApY474DjAzptA",
  "key11": "oXwdVNWVpohRCuycTfoz7Bb91DXQHP4VD35QzD868xHso6aCijBNorV22x3ViAVK2e2jGq53rRX9pBTQiUyagrL",
  "key12": "JRJcWYtkCYF5Gu74kkMngivfrNDbZP4EYNe8Y7DugnZcyYnkP1B2YKWFhLWExfTJTq7rGdtTSLXZqKHZYk4Vouu",
  "key13": "zDAFi6ZcxZnaEkcxXAkizjPofG7Ggvp6gDtZk3FL3Vp9noPJVFeUCqVSAujTXR4UuJApY2vjk7WypoUNjjZDH1t",
  "key14": "5ugh9yJdfYXrxdUGzvsP7nVRK3CEtmQfYLqHevH5LihaJpwjXWwtsNuEU74g9qvJjv4KbZBoUMDB6gCBvasNYkjA",
  "key15": "oVYPxRhBzxoGqtPPMxepN1NoHxLrLf2XbFDXwTUwfAYvqj6owEcrgozAuhwMMpaWt5dLvmKqvXRb5pVf9WtCGB7",
  "key16": "4akCZ5E4SrA8mDMCGZ5VTRJ5nBMMFYqtamYB7dG4dqhL7jGBdEenFNja3iiWW7a2mDBtZ4AmUpHuyZ777Fo3dHSG",
  "key17": "3SxVD7sFhfje6fYobZLTcNnqLpBFMNkZto6Tac1hpmRTCf7ZvkbXCKHEuG9meh4SjG3V3osmc4BSj4EcuHRFaQay",
  "key18": "5TNpVgsHrNEggwy1hnhQMZ6j8Z9gUqzCsyZj5n5xoXsUfkeXD7LUHZ1KBajMdxYQmwQbkbJtpkc9HYgYmHtWqKza",
  "key19": "37wPPmNbs2KD4h4wbAoxRtwu3zZcgPTwZraJ7Wfpoo9U7kStJmgbbnZ7sqLT55TucJha1Ub7eLeDZhNUT9kUfqxa",
  "key20": "341nWZdiDUKjdmW5eBQttdteYHNyBFzsoKAVVqt1kMpGy85dPgNSM3raMgX9RMsY1Qi6ARPaydLuH3SZiMb1vRn2",
  "key21": "sDv6ARAq1PsrnPrbMpB44uTzFPy275QvdakFwEMiEfyBaonZByvEgQso3YRidwgFz7bQ4tFYDNBVEGa1A2AXohS",
  "key22": "4cjy6HaaQ9XcLYCjzsxsNmN5YukALswPJbGhPxk56wjvtUHr1r4cnKsTjNRYrax4CkbpB4dLgKFUpmov6B7T3B9M",
  "key23": "39kkfVH7Epzb6hLJ6ob9V8VoiGNb87xKJmJEmUu5BVAYcaTf9hiEyzCnBAvt2WkBMfnk7SM9nRCA1THbXfsFpfAQ",
  "key24": "22g1pSxKGQMvVRpLFHgoYzgstzfrfXwUvHhWLWLKMNB9g1DoGg4ggKwVH9UotUV1KR2B1pBedw8cTCQyYc268uSs",
  "key25": "4ctEfddCwvsxKHYqKo1a7zuuggifb11AMPmmKFvJRJnY2HgCKY6xivLQpe9Y8S8vDPHH3stvYAH5RKg85vWrwu7V",
  "key26": "PnyezAtj1N3J8eJuQe7MBumT825XCobBrBnFDxrfsuHvwUuochq8gJ6irzu4ZcwgnRogoYBU5yNh7f5bnn79mQB",
  "key27": "4HgrzRfJzjExDcdez5JwFQS3nuEUvwmypsUBf1h5WYECjmUSLgZouUQhZGmg3YCU9Pg7un6p4ew6nm33RuhXdssV",
  "key28": "59S6zZsoHTykrLkm57NaCaT2PwbUhU9pBt2BTNKUtAAwJhyuyJ8no9hU6HZstVwnR7DwpoRmPYKDfugWimrLEP8q",
  "key29": "3gmJedVKJnEHEWR26TvCfrBq1CByqsctfFDkSr5rTYHLrQEQmqPKAFKEBb5aesHbnytcLcG7nAJVEkPoJ8sKWozH",
  "key30": "38zdosousjuKVgyMnRutXSbttP8v4zNoAgeWuoEzkLc6zwxb99D1MjwKcUvqCu4fuVMaYeEF5BzfpJX3WgNTZ6yK",
  "key31": "3MDM253Encrq4JJDejEJfkebfRQbG9e3RtDejSxFg2cku4dCYf7g1FRefuxuDNRtX1KUbr73yi9JTNLQGzzDprv7",
  "key32": "1ZgCedFiF83q8eJsBFVncHBWCKg6KeFpqEcrPmpULtcb7vKBhynLtNP7QQTfkJYdpha59RVFXgaPSwPoqjHUx5r"
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
