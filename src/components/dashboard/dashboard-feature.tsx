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
    "4HjAKV6jL7SVSbJBEm98ai1sZBYMs4FaaGBT1VDtvdJcrexg3RF7xS11ug7HH4HXsCwj5BEoJFEnTJoL6DeEWWLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27APPpCphiv5k3qwMoUQCs9EGvAktcuwAZcGp3Vuzxtd8BhEZw5jXvn8nr3TmdqLbhAH6ZTY1vFj31PahLzXZSYQ",
  "key1": "4tkKhRaFKtpKie7R8vMbsDV5oC8ticuVuU5bDYbRPrHukAH6HBhTzmQLXMAWaq9nadbwvYJ1EZcpW1zkQEPM9YuW",
  "key2": "nt6khiKK26va8rEEtf1pZeJDyVzmujxCQMw8sknXfr7Jbd93ec9E2Zugu5f9dK5b6donuTEuSGSNZsDRQsuYr9x",
  "key3": "63fKqjsLGVxTBLFXqairUmQ1g3QureKfDzZgZA6WaoXFsiXvy1jWUw42QNrRpNQzhwbhytrqtzNs9D4oSb2vkiMz",
  "key4": "z6HFLEgPPyqjqtVbbX5m5wzAs6fkYkJLosxmn6T9ygjXAk7WUx8pvoTAGQTHugqYr9LsmcggoyoVFCgJRsFcgTj",
  "key5": "4dFReHy9gxkjixpMTffnAnZMsTbgBzsCRsWRqTeg5vB9XMyq8yevDYJcf6RjkbFGYaKtGLbxsQik2QhZLVJrQ6Xc",
  "key6": "zdP69vcG8wxNEF71GJTFyyyxKTXX8CVwgHZNdYXVuuZcnpRWjH7vS3FRJsFvNDiqDvtsodKrXPpSbLrrJVuSmcE",
  "key7": "2WooDCwxVQRPmzwoaoMf18tnaYRHkfJXtjYJC4vP2fLfCmZB4U1wGKhQPZUJyeGMNRuZo9X5fTh4syB2rkToamhh",
  "key8": "42yecT7WYmCCLxDgMQKzqVS84h3HdtdKtauD1y4pzh96gv7xsq6e1WNH4eDqe4X2aHeRw2aSoozM1LcGX8LsWBZH",
  "key9": "5gYEAbkuUKzVhBttyqKYY1v9gP6nQrKc5PPTzjS9Kgx552gJvBGppHSypZDu3r3ZTfiPk8uwuQowquvdw4rUEukX",
  "key10": "3KkpNv1RaJMxew1Ko9JYHthdRj1EY7K96P24YEkenUisuphXjpU2WDXehxj9tLg8yY91bRWJ3oDwoop7pbB1pGVy",
  "key11": "4MML3xL5A8rLickeaYtzYXKbni6pYeYxqRRUngTGGkL3AwzaVhTGYXc3xTfMZQZjMHZxj64ktDjU1Nhkt2t88yiG",
  "key12": "uZv84jN7cuF6WCLgQfx7MUqJbqLPx9wopGodB7VKCDtQDKbQxsc7ozHju8B6Tv3ChPyU22Cdy4poKdsMkYy4Wwm",
  "key13": "3JzJtEKKmUZsKsnucgp8tRVZYM1oRnMC9Lz6JWt5Gdfxxgh9ZJwzTuKxtso9ZtnfiWrma5Na5bQnwCT5HZhuF9eC",
  "key14": "tX7HumBvLogkPEGKGBeZKBuQAFQpQxwvoSdNQhYTzTfzngx3w6nyH4b2TSQRkV6vP9chf5vHRwReMj6ikgvoWgr",
  "key15": "zdDJhBAo6JT4ouwzpHN2CiykmcqpDyHdb9itvjTSkqHfDRXVHvEwvp9KvDg74eP8jXgAqeWX17jgs8CjhEej87w",
  "key16": "2dkdcjApmpN91JzVo3pskmQAauin6NYC2KCrBRQN5HFCGc39g7xUPfmnfzxzjAKDim6mcVWiW92DUJ5Ev5BmSN5d",
  "key17": "zBM6Dep4HW23vDqQeXxF7kubJp1bQzm4q2RUwQfJJzKfK4SykDfueCFiiVyZjZAycai98xKhuYMEtNMZ9a3LU4W",
  "key18": "4jDcQez4pSHkmmk7buige2fz4AmSrp8n6m6yyHLfPJiA5w5mmiskj94MgMzzwwyxkZ1xnaqjBauc4FKvzsVzR9N2",
  "key19": "4TJ3eVow9TzfpihaHSKJUfXSBz3CpnLo6dvGXT1ztGt3GRmfMhnqWxwVgUS2rviDavhyHtJcFWUwv1QAbgvDm3XP",
  "key20": "2ynNXTGtqKwsHRCPY7DxUmPXVUkNju9ttJc9GWpQa4JZhpSgJa2iH8ER32JmuLcYBXqTp9xzpkKGnxnUW6HWghDW",
  "key21": "3BPEB9hNjWkbs77tVFKcW7QzRX71aE3hrieFJck6YD727zhzPU77MSvZ551w7H6Uw8a443pSTqC5XS6nZGc7SEfQ",
  "key22": "2Nf65fBNGYaU3yLqbcYr7YXwCoJaXxmXtSHu9hPvrPdQqa1i6BK7ANvrVFHR9jRNMYBz87Sz7AZYfKvtn4wWg957",
  "key23": "4opomHtJoNwiEpT4QAbqiMKUdQH4H5DwX3obGqVqhF4k4zAJmTjd49M7SyQ2oj1wgyBDRKqnxuDwbQvDnyU3oRGJ",
  "key24": "ai4D49kfgnoYcvc4tUVCKr5h3RRthH8ugdbp7VhdR498pHgxaYtVJL4ND3vBFuHtKcRUekycWFCPKbsxA1qSVPo"
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
