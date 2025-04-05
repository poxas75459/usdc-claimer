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
    "5tjYdz4uuLZWU9P3i75GFmjtRPLfZArFtZwpnuQjmDAqomL9omA8baMRYuE66jXt79zLRdUZxueGvtcyeUQYfDW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58QTHM49zuyKpqQXEXfLRjptuBPXFJZkSQNC7RSsY66dfesjpU3LMZp1ccGCt9sFZ95xCoXadAy33XxFcDivoywd",
  "key1": "2PnMeEBLRiGHkCgENAT2qwTZmhbW3EeQ83oBjeCAraug8zVSgq8CSdHdLbgfMgZBuVTSj2NQvzPWvcP5AKGiFka",
  "key2": "YKxybxp1DdA6AeNUiqGRZQdE1fSQqJXAxoXufLfb39icMrQoG2yjFwwwkDVcr8tVyf9oj9iNwudhaj9WRQSzkzT",
  "key3": "3wQVkfsDP5aYSkDTamPND693cRKxPRyPE55feVdZks9KfJYfUPXox9gsBvoPN5AmVaBnScjaPwVm4hnUKrnSzWz3",
  "key4": "5A8UQbhCjBHRHfK9wNZ6Zg5h5MSGHfvHeo9xELcXXZFUiN3REaogEJ9kyEtNM1nMhN1RLsRJHb7CjhnipEYRto5e",
  "key5": "5yeYqRCc4G8uW3RfczPjV5q5CyNu2XHB1oR15ksh4cTiC6TWTjUdhroHbL2K8NvGvgWe35JpPnTS6uh39Q7oPAof",
  "key6": "tSKLuCxN1G6i71u4Gtk5FNSi44shXEBQqFua2vDrggUikAU1GFUKwAWz6vt3hCvULpAjqxMH9mYvYwTLmcG6M79",
  "key7": "4vN9d3KMoRGUUxfs3CmUDtHq5hQYVSsGLSnUqmfzx8Rg6v5qR6Ld7p8gP8Z9wohwisd3o5XaRa2grpVvwADeXofg",
  "key8": "34XQdhC7Qm5DcN4P7gRfMVABrB9LcRT6izWJTkMzRUMjtH68gk8N2KvnfHeQQU3KTXLrLbM7UY9xSHVKjiUzFCmU",
  "key9": "4t6X6EAjdpYHHVnmLKLgmLxr9kYwUp81i8dh6Kg4XqaranbH5E6Bt4ojJwMYGsqsy2wfvwCcZokBycebEhYY2Psu",
  "key10": "5kH2NAJ72FkfXVBcxGeeZthb34yDZzeRjKkjJy4D2rE2g7mJmDgdMHa6Kjm4HxzTU9dt1Qh2hPwiT18NLjcCEZZ3",
  "key11": "U7vRcnrNFvQeTsmwwrRjhBtjVcnNUHqFNp6kDJicFoYoScooaxzHAVqnmYhwwi4QfbHF4jLfyow8drqr2fWqAG1",
  "key12": "33CFaaBeCMwSc9siZL5i2B5CmfP3LmcMXKxmRvYV7qgh5xbXctNCKoQB1UwfmmRCx3QTbpfF7NqAtoR1qnGZs4eQ",
  "key13": "5cW1YkR5GLyRkZZMKiZuEfUFWiKXJ9pbBw4p8wdVCahn2dotzHMwzTMFHsbMsFasa8ySzmYQC8bCog88EZYbAqyX",
  "key14": "3mcYD1XevuDCV1TP8bzths5gy9SBeX32KeK9pztoRLYt8UyiKKSdD7XxpnLsRegdnqbt7BwPHhrejXEg7JBzu2Dh",
  "key15": "24cFAm5tGRhSYNbhgvXLPBxA4bHPy66adgyeRH9pJbub5w8nbm8eJkyChQXoagE2B8pJqQg9EGK1UTB8gpxHFjU3",
  "key16": "4Hfe88D1cLmp6EmJMgMRYaHGRSAAqDbNAUSkiYcVPRzZVzaMBDEpsFJ1VCsoMJ3c1Yx98bE39eQbE8r8S33tv2eB",
  "key17": "4P2rhqmLPLGbG6vU7g9FzpyaMjvZtHPeCH6TG7aqvDiGBLgphUgyZMiUR9hh4u6sqxuEos5iFgX4xDTvMSz3nD9m",
  "key18": "3V6i2ehDPpQrtJtpFCDhH3o4iuq527W9TBS1zyi5QfbacFH9mmJ4uNP5WcBx7SsnXzEb2xxTwZftGiHAY3bv9G6J",
  "key19": "3ZxMqyQ2EkFncFZKartt2mchCzBrFqaNLMbqs2qW5gUydndgYqBsNJSn3Px7PLYkPxPXw2Ags7KCHVfJmqQ1DKo8",
  "key20": "35gmWwXMpzHDbRg3HuJtazTSHdM6YrQnfhGwyqJMfQK7EwJNGbbTJKoTV9p8aNKAbks2GJaTYAeTAXWfKnX2dPxw",
  "key21": "wcKUEuAH19QZVMjXS9KwFAtvR8QU6zYW14xG851EAhcjnT9dLR4Zr9Lp2jF3mrCBUH3p2VzmnUcu9os6b34dyh6",
  "key22": "4Uv38psXWEqpyChSUqsGzFyNjP7jrYgsGtfVcqsF66QdHTGZMFc3dBafdxpQ8e5Ahw2dC52XGCY5bhUB8uA5qMFK",
  "key23": "2TMrjLce1ZJuvu2uW4pzmnP3XGMbpuUiDZ6ttCNfeMAFkMA29hT3hyEMGq7dvXXGpv3adcr1t8z5iA9QhnUhWHwR",
  "key24": "65Wzrdwf9CV7GseRutcUZJQmoCzveB3gp7ikyYCoXi5knn93vmkH3thBootLuBUm33kXiRXMAovmPZMETefyHjDV"
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
