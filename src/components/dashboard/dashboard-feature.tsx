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
    "3CMoBvV7GWomFKdz8qoVh6rzy4j137xs9SsWa3h9cDV6RYrWNaWhdvaPkJAcVbjAFCP8NXWRoraCSmQqfT7NpFg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DYMhARHEx6qf4ZP7mZNYhzQGSCwmK1XJLTZnuMWNFbLCe6K6PRcJ9AxTEAm1JAHH9dzb7RXb44E74pTRB4sa34M",
  "key1": "4y7HvuhZiRz3bqE8GujqPeF7n6jZkSxBrWFJ2Zg6wcS1hSsUxU9aHTY9oBrn3ceyJbK6vpbt7FPCenVMey2hoQsG",
  "key2": "4ydeaGAt1TeNJLqCUfc1jtYkKtCQWUKCAHHxT3pdde36Rdu7Y7wuT8xe7jFX4pFv3AAezgeodsFmbAttk4fQoXqA",
  "key3": "W4VyfPyL2D85c5N7M5KokfPKE1p8J5hb8VhfMMJ1hzkLRx249UUtmFdWBVTcFQNvbbXCdeFsTrFGxdAkVcWLM6y",
  "key4": "4qSH4z7o4t5bBDp5oCRd5x8pqqgjmd1DXqJ2wGBxjkKap9xrvzfY5UJeit6aXRZxUg143L5ddvuU1D6CbnASqLt5",
  "key5": "2tdLUtwhxvc2BPq1snhKw8dkuukoEHpaKNmbcXygpoz4QgGahADddgWFhEuP7tF8XULAZj6fyPcj112JVq4kc95U",
  "key6": "3aMnoNCYBk8qLukpj5DHboitoKLCXfnBnJS7BH6ecLtiZCPLqjEgRbSuxNcXCjXBQmGUwZQUeaHDdxUbawgEGxen",
  "key7": "24BxDqGvZcV7m5Ycm6i9ycpN9HvtgKondN1bg3mLS3bcHkghZH6qBT5A3nJTVZtZHdSwqqgQQrmXeLcjii41uneu",
  "key8": "4kfwyEEmfqsreWuzycYLM8GBA4dTPr1jJzbe3R6YCnQ59okjufMsfo7Ckhxv5C15Vnz69hh2T1JRqbi15hS8fLmi",
  "key9": "3Rcz7QHSwwiGCjDPsvujWphcwDTJnaiaDzuvUxihjFAu3XaJM54cGDajD6ARtXpHFQGzgJvhvJM4qMfbbgvzyYAg",
  "key10": "3ui2T93CRQncv2m739hBQzRDPErV4dUesM2UaWk9QZTpyWKBEj3nE5ctQWUY6JZP4RRBdocKMKk28nLpjzUazhRo",
  "key11": "4k8vYh5LT3v3JtHwRzUQKVizuKUnHQthL9cLkU518tXWHJjdspFrgTaoqMqpjBHu1YbN9S47m5oun6a5eJW1prdR",
  "key12": "3ZyqyB8GQkimLwUoEiY1dym68MD7gm3s1yVBVYq9B92nGSxUFSxyrU3wdeWJtt4wDGpaEwBcM2k6z5gzYDJgrrGT",
  "key13": "5ZAkXdyNsaPZEhLqY36oSsMCjVwuQzp6WkHfGDtrVw74Lk9YVVFgKjgq2sSNWB4pEK8zxkJPg4gzB2RfsCe8LqAM",
  "key14": "kcP1SpeJGmZqe1yYzoGuLo5R5ifWwJ8vKLkvbPxeMHCoNYrAZAiDcFcxMi1UBMexkesZ7d3T3gzdiPvBiSkVktb",
  "key15": "3MXqqQNc5tYANVeNGoFi23B4sejkbucUcmWynN7wvhFya2SRZi2FtJwWCdarurdKHMc82EJ23gBT3Wn41hf27eKa",
  "key16": "3K9vQBb6SwxDH79Pit2DUba2r1f8WbzVeEcgEBSriZYvPduvg6r4fdfsbFr85ukyjJXzDGDYZRChZqDxVA5GHibo",
  "key17": "3fXvakzCoUfnrddUgP5GS32sydfEiYa2AuZPuZGdAAaQWdsF8czy9fnLhGAXoqn7tKAjgfkhc6xqVSbS8oBC29UG",
  "key18": "4uJnzpfepXKznEzbGjRhyi2d7U2NnMdSAFkx3ojNQqx5zJdWctGHTLZUNVYnyjWgkJsxEeSbZCxRDHztg6zvXdBx",
  "key19": "2NBP1h8Yo27QawyXYPt1VHWjRzB76Fjbfvh3mX5RhB7LchtJicCCbBLhUXgEfcYBnyFw1AGG6npkpJ5pWEKnxbTb",
  "key20": "16ZhqM89nZchqVeJd9mtcuW1LYxUNACbTejVVazJHq78mjX1gSMQZripxkjxK7ySyL1mtfZDNyJ2Ksidrdsc7z9",
  "key21": "3V1H8U13FpzKwFBubcq1YQyk5Tg2DqYDpHZLoVppnRRNr2jRizopBvqxmwLCz9Zb9zb4GcWwG5Z2G6UJvDKNjZKK",
  "key22": "2f7o1bK3kUiu3jRHpEZFPGC5vZccmzhV71z23uJHEvYUzk3U8cBdLwyQtSLXUXgrEVvhDdS62Y74PUksvgFnruws",
  "key23": "uMndDtFNYgRwRgia3PupU8q77b89jk99cKgkZEtQ9fqrmxrFoupEQUNDxXumDttkrLuUc8U1opbXosghzMBHQFU",
  "key24": "27Uq7gjhjFjL74DRKidSsxjXerUFfLxDMAqpwiLdvmm5ULNuTrhLnd4y7i4uJ4dQD5HNo7BJMthKPPLExuP3j4ag",
  "key25": "5p2tAo3WDt41TXG9KMMMYNFbqHjDYkMuNzB9B4XV94SKdWhLQw4GCJNegu53ZgiqqYAWc87X8nTrUeNeatyT2nyv",
  "key26": "4tmysE4XuhVou8YN72wTbQnm6xPd2czK945ET1qAc31S8Y7tFNhRoGmd3gVkoiX4e7sWM1o8RJT58eM3W5M889N2",
  "key27": "2xE1eA5c7fdcFdABmHurjFtt7fo7Dt2jMi2DpYFokAsfWrLPuvayGN9iQACNFbtQtbrG2fzugCWkn848KYBhJS8y",
  "key28": "4Kvtjy1pHPLS3NfmTcfNx3jDxkPgQziLdqgxuoH7oirtLNMy24aa8QeqNtJ4czh76vZcvpX9ZjypoMRtuWSQovo4",
  "key29": "npDaDNEJzcZUoKahL6uLoeN8F1W4FwRQPmA3AHFhmNGYrsqVsuPYMSJzG1pWEBF4fP4AJakwED4PUqvavwWLh6V",
  "key30": "GatttcskKk98HDrAzu9NGbmAwDY2nh49acfQKe5C4Zj4uZ5tVYsRENc4ri2EPpwtArfYdgQnHZFzkm6LbMqcLM7",
  "key31": "2QnmPZ7my9GQu8fWmmyAunZdrUfYgGDgNXAyZM7KW3vrrZNhnhMUFbuNyWJxEVychqtAcTF2vcAh7ME6VcKvWG8z",
  "key32": "EejUdw9X9BQxixSPjkLvZLvJGW9qU3d1csQGk2P1mKX4EPETGqhghH42iBJwiRGRz7LQADDAYyxL3kjxv8dytVB",
  "key33": "23bWpibjvPjhHERoguF7Cmk83MzDvUA7XhDdX7VMXRmJBCCpXgrvyLDPAMqcFg8mnkCdG8BeSQJPtZ3mWRqbKKAz",
  "key34": "3S8N8tbYfDPnfoNhkvU75btuYwyYihpK1g286UbUZVQfDgG6zXb1jCmbrz7zbksdbjyipM9EnQpLcWy2GdaXgXNU",
  "key35": "4si3PR9Z4hjT1Uxt8q5kPrUnexb8LeCPwro8HvaGA5Jy21Xj4F8yqnj2Wn5guz6BjtTzsvkceuGk4djhPgy76Zpv",
  "key36": "5dokjUrVuZKp9MpYLTbFM8G6QVJHxD75eRpqaaNuA9D38Z9v64nYqFbw6tFTDAvMB7XBDYQbSzVq7KdgFiGFux2B",
  "key37": "2qz1oWH8hMEwhbZ3Gd9Afand5oHDaGmRui9JoHN5Qf9xYpyWooRapFJWHMR44Yjqj65ZSqv7aLEWzfKzHa2NRXp6",
  "key38": "4nBG4xRDnm855cPXQZi3Fqkn8Mp86wYkJMjYEXhcgMQiQaH5MSakyFLTJ9RJpM82AmojresTUEu13Y1CZufEY2ao",
  "key39": "5BN5LDNgZKQG8mPsZA7Y6gZA42M4Xg5UwvtgVnwZKuZPbYctUY5mcL1qiPUrtfF7xPo1ijfJjRWzywg45Vafxaet",
  "key40": "BstyMCVBqyjipbjKLP4FwmdA71Xs3CcZ6N69eTGCbw1EmvKn44xz15C9wESWND3CDeCeDt14p9ZnMFpLmcwrfaa"
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
