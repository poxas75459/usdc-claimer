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
    "2t6r9e5xukZNqsHBfgVoEedL26K9m2i5EC9StezDSzafTqoCL4JkcHsLfpqkvcSWhcvHEvNrwUKLji7abrwqNTKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hrUDPS3CehHGKHZ4myrufFGLKwM1wnYbL2Gb2rj9LR2UEPVt7jjjTwtq4RyB9kn42TVUFACyqdmFbqn91mMC4ox",
  "key1": "4BSQxiZ5SQHtqoPc4RmbcqmGyosdtxdDdQJd1uY4rbSxq4UhxUF3Mg4F2eVpjZhoAhZ7DmNCEQCxtf4V7X2fxpLW",
  "key2": "4wqYB8zsp9sp15PnGPfpQz5zLLPmwp2SuMUS651Gowo2KxafdstutGD3QH4ayXRa76Kqe5bTZvD34Vo6Yu3EvrJu",
  "key3": "5Bnq9Hz7zBZeXkeiXTUWau5SKjowRdA3hS7Jr6j4uvHN4zUe5LsDZPiPp5qYGpfnq8cYrPrL9SUixzcwHEzP6xxo",
  "key4": "3nNxwaUqBmAyYCMgFa3ZyEH5uJhQXjLipPTYm5H65f5Ph2eHoDcCR16NycHEdPxMGuQc8SpmuhqupWDMCKRq9vJQ",
  "key5": "LZDyR4S9V9RRtVL9pRdP4zrQhzVHN49ktyMKEs77oE8YJyHYpwrqK3nL3aTxwxq84Bqoqio36RKzPRF2dqxmFfJ",
  "key6": "3DgJ58ZJuNqgmiFe8ts5jHQqhzPo4GD9hkyiafC7oGh3KTsxTjeWjAGGNMTDzGLGX1PGwDBNtcpSPPnGXVTw6AYp",
  "key7": "4JpE7zciEsLo8UZpywy6ETPDAhBJFyJb4o73MfGEtsCEyyq9tmqG98YevkU8pBEszgj2dHsZw8PNyYmkjuhD6GWE",
  "key8": "5Rroop1pJwgdzf8LtHeEm6ooU6GFdKzNkfyUVJCjA8Hckj4TmVzs1pej4tBgbdFeMwZrrdN6QMbfmoHQ5EFJnYFi",
  "key9": "4arxdNumdP5sP1oGCbmGiH7iT5KbVdRzyTUgooqZ69khbWsXgKsQBxbHFGEghKkwGi7jZF6nMz3PCmTNvSLQCBvh",
  "key10": "5K9vSfUDbUKC7UXPw9EGqwrqxTPPBBV4J8gfPEtLX9PK2FkEDxTK6DMHcN9rwpVnMG2Z9LYzxXowqRxxoY7hYH9L",
  "key11": "TXTh87w36YT1VtEeSQtJs53guDmRhfHvStvZfeP8hGn6Karor2SAZYkGMuSbwxzc12AobbB8ZNnuTU25eXmq4BH",
  "key12": "5zPjbE5dRkmpXLqZFPy5C9HbfmFsn6CmVCPyVWMuR2uRKzM8ag1aB1BVNaMGaEpCFiFvRfALuonky2J8Fyypy6J3",
  "key13": "3rzNd2hqcayfUEd7tZ8npAy2FfGTDxZYGNvBJSWHuqkne9b2YEmt5h3oMABFoztxsKcDrzNPR4D6RgUeLZYHeGM8",
  "key14": "DV5L9Q3Yu1FpDWtd5aPH5BUfqu3DLerGdHz1rYTrvv27NDEq4SMCeRkguDyEYCbLixWjBNV6UdJvtNybahjfMn9",
  "key15": "3W66fJ3dxYK4nuRzTuYvbNGB9QReAcTYbKzrLqnwjdLNz1Csqti7UJxkBhsPLi2LZgEo6PWAWwd1nBxMJEaEtdoP",
  "key16": "5My4278vCcW7m7bbw98QfFWzeGVyYHYRm8iPnxnprPQjtxWR9ZfvF59RV77TWkghePM8WC6BNcpyUXEfq9PdaVdv",
  "key17": "4Nako3gLhjRvkJKMh5tQkCeor5DGnip6uXvzWg7wD3cawyHfhmQi5HPiQy3WxFDD2m3aAivhz99jKzD59uoiGmou",
  "key18": "4YpzZS8E4KjQT96K4Szr2NBnU12R6Ly3wvi8ehp2bqsd7Abp69dtkLSPqeteV5VjSH4QWsq8aKcz6xsSsYkLUJAZ",
  "key19": "2VL2tVJvn3KpaYcX6naj2g4vvZcdYe4GnwCQUFHTbG119b623hss4H1a5wEjYjdSG85KY4UEDLyi2aH4HrqNkCS7",
  "key20": "5EiK3tc5c1zZeVpEggM5Br2iEuMX9tZYNeTTm87DSvLCQ7QArPDzndhz2tmuSd5PjW1WiuQKnRwAcxMUstDuHdqY",
  "key21": "2AD64NJqbTN1BBmCE3R5qTKJEWwQtzaEjvcE5ApJY39VG6Qwm12aoK3vFMNQG67TEgr37EzQYyriNYzVB8yVE6kz",
  "key22": "46ZKWawvWtqv1Jn8EnUCvpfSnAmjpcq6pS1SxFfMs8pt2uESMcwUfbvyWrdPojVAt6qrD1HN4uj7Tic26DH1nByH",
  "key23": "44eriEAaANeLRiWG6W2C1YT21UfVPaTEBRmidzx8HD4mGbF4L77MNMMuXAF1tFs2yvJRgDcjU47oay5V6AwfebED",
  "key24": "3gGTpfQ2o2wSKbJozL8vMAxu6Enu7RbgEqvDwdzCZjsu4s5nrHZb331EawysnLLyi8irstM4QQqGbZ5xABfsLxpu",
  "key25": "2uRtty9Rh8iF9LhxWh3LLbcrojQQvQMzvHiRwqEgQWrjqiMgaZYZpDC6bWHXfkw2G9wDvtLSXfdyMFMVGs7dRtae",
  "key26": "467vAb3jLYeHjqQsULe9uAaSr5tyG9aUHFcmWRoZhcEsWpFkXQKZDx6LWS6iZUfzU288JUGhj3zpSiprtduE3DkX",
  "key27": "5P3pV9PZyg35dHdApFETCESejYj9j3o6LfKgd7z2EDyz4JK6m3MaVgaAR3eM5ZZyy53CmQ1ChEoR1sXkGkWyjYJ1",
  "key28": "69hctrnNCNLsx1kbuPXumVDJvpq9CNqMedp47B2jqzpzRV8UWXN9iQZaTjW5HahR5Leaj4GAFpNySMgXJEA5A9p",
  "key29": "5RgxUTzYb9Lxw9YKhdFnzx9xcRHZsTwwSKZD9Q5SDxDvCt7ex5UKuEGmyQh2U2kAZ2HGb6dY78zLAj6qj7QWyK38",
  "key30": "2TmjhKYUar2pBZx9Q6PZeeq2ET3mc66HEepc5hsP1e3oP8ysiFDfms1ZGxnFGb16kEKrc9WdXTXtE8X93Ag7zh2K",
  "key31": "2WCfQcNJF3jGrCLWA8NV8wDfBPN65TrW6KEnikh55HkpWBnXJW9DBABygReCcArpT9JBbkKoyB9TgjiUoY4gcgyg",
  "key32": "5EyRtCZrXkeL1stQKeb3VaMX9dYmg6WrmHv9iZJVF7WY7gtKVSRFYYJ5zPUy1vwTXPaWrwwDpP6oP6Vk2aUZGAqJ",
  "key33": "kEBd64NaCb7t6AEVDcSn8oiyNYM2AoCUZ6oHST1kZQH6SejV65TvDcpLuEPHCbAKTGS6S2SDHx52MNxsf4dEeYz",
  "key34": "4QsDexCBLV5TUuvFYmVSPzUk8x7NiextXaFtbGLy8BTHRTkAaTnp5Xnv9o3gSJkiVYgfBModweokKzZikKkGKNuW",
  "key35": "4r7KqKRVhRSzt6k8QoqMXi7TuEGmJvr2zkWzzBvzKAi1FgDLioFLQKLvoVazfG8eKQ7AXmUZTq742MCss8hPvpbw",
  "key36": "56sw6B8AAhqcHupUgfDFpNqJP9XKhH9EjFgYEGGTBud52cd83thdiRoRZ7Uw95nfDyZFD2XyVdvTMF88sRZy6Fk",
  "key37": "342FMUgxkWv4HErf4HK6qDErye8bYpAgHwdLx9TLxZRKDht3SRYT3gFgRY4qXTmbX8bUMWvgGJte1R399WnTaKG",
  "key38": "3j7EeHCny6iwRMJa91BGn52bXU94EjYfMUBYu98vYc3nChE6SNiGuVjH1uSeWoY1uE7kZ1vh2uHtSj51YAzjdMG",
  "key39": "2reVgCyVFukYCRRGxvPrE16VmEfukvhSmF6oojStRraEPJkDBpLKtf1YYhCiUkfQUSXa7CWVeaLVmsXPg3CnL4eH",
  "key40": "2vsFzKF8HnEeg4F6r5SQ7Z7Xad5F8zWtUujLJa9AmTV6QzeVcyuwbdvLpgVzemFemUR7HHV3G6ER5mNUdzP9YK2n",
  "key41": "2MqcC2KocfktuwTb6fYbvaoY9Na3qvgM7GvymMmqAEKrU9zXEA13E6ST2wjSQVwwC3c3TqjTHcmj3EDYJ8VNorNj",
  "key42": "eKrPyyXwbQXaFSUjcrcb3RVSFMpbpuF14L2DHTuZtP9w9nacBtdkDKCsp6YiLEMD6KeNooaAHmUATJBY716gXYN",
  "key43": "44cLRHWfHFtg38Miki4N1X4492gYbj1sAKMo6xHp6njygqFsBDDrixTrTHG87vGqWGC969QrV8aaPj7goWwTGgjY",
  "key44": "2f4HnuVmgypUWHGUZXAhhG8DbKdQuEJZAA7Wygn63bwdoLGu1Ga4gWkVqxn1jcDUVTP6QoAJoVWgErAv6bq97uCW"
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
