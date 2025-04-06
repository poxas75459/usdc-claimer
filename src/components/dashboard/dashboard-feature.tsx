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
    "3bAb5smdKrHuZAebpjQx1cdgQX6eRWSVH4n63hw3BT1MVZ7iLNWFG7wo8KPFgCGDoMBJ3UpETo9HqzB4aivv4qrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f8myNrz6TtEKEwzv4MxYhYm2UXXVjvDeZ7X6KWhJvfoUgiSAmCSbKJJj9NtzoWCpFvwnn1NdSvceW96yeNPbUr2",
  "key1": "55SVA43Ag8bmh4vBtXtVeJwfejLUW5mLa3kLRooEyC2fe7yYjfVJ3UKwBVK6exGPhKarWjr5aweuMtxNDzsP8mmE",
  "key2": "5pqWgD5cxPW2Q3BVWA6u7Ub6S5SAA5KVV8QbryvPtMTScBQX2P95XLCmPCmupbZ4xfTgf4wRWhKP6ndg64w5ZCQ5",
  "key3": "415L2KeVHG31SQaLK4cn4AZ1mVb7Vpd2nk18cAmNV6k3oZBeRB2T1w4FeXMRbCSDhfTP59KoV8DVPmQzbUEo2uDz",
  "key4": "4kWBdirYbJnDSS2VBDJLZkbs7vQ9enjRRMjq6wYNifoWU5LCJinYp8eW5E98ddaNCTknALPAkWh2i4UXf5ZnuktD",
  "key5": "3vRB8UfY2AzFcMLgUYUrmoWgkBhyadr8PNk3cuuQ6bEHbFPQfLLFSS8oXWNQ1tLJz6qLB3L5sczm8fJUfMHV4Bx3",
  "key6": "3Bpxgp5Zq8qXLNSZXSY9foBLJjs47rJ21VxzkXpgn6CYoikTUhtPu4BDPuDqvkdLaHFBHLiLnvjfyFBDS7zHqS8Y",
  "key7": "4KvVS2DbnHmXvUEqqPiKcDmkwcY3FXqVWiuBkHjeXf8ECzAs55SL4B4P1KieGisfNVbGZjirnSJVzYPgLj9cuaFQ",
  "key8": "5omeH3aYrBddRwLZoNV7JxKRVSxbXazfVuh4PcgqJe7sj4Hasyf6fQE3B6hmqN4RoQsWNHhyyR1b6p33ms4c6CMN",
  "key9": "14ZyrqbBnoU5mwr6EWWYZ8g2op5iJWgcQ1hmVhQqKCDakp8Kew8U7gT7UPJfdZQFKe1kRr569qHKcXJfgek8xJz",
  "key10": "5H2ypEcRpv3wS8jZTEsaJQP9jFu8n7r7DPCQ8VxLjdjoqr1R2zqFuQS1sqgSmdoa4S4jhiVBa6ynr7qy25uPvpz6",
  "key11": "3wQ3ZPvQ8S2BuFpaem1zy7QUpPxVaBxJ2dmNbQN8N8rh7Nw2Ud37FFsZUYFfUuKjB7gUdndTfrZCKdDmqz9ysK9X",
  "key12": "MbkA6fSdeuniH19MwwjeroFzHUprZ8usspWZRdx7acrQ725oPdoq9wLwEHuRaVLkVCjR8WHwkUw2qvR3iqqunri",
  "key13": "4hfhcnVLYnGBZNv9QXMkaabGjuni2sapcV8oqdw3wapv7i9nRx5mqBXvcxM1VHHGejWowyRZpez7DHWLdcqAroXV",
  "key14": "3URefixXb7j5CQoJYGka2cqGasqMqpM3RQNgDnGu3NsvkzBY7FyRRA8zARmzRETg4a1roztoHa7AroWjdwa8gYPB",
  "key15": "3WZxAyzZtmd4VKNxRTJ26oKKpvrU7eCwamovpMffi6MNTFwhCXm9EzkWyVEyKJBV2ZmbcbKXbz8W9tHHEcusJhxq",
  "key16": "2wBwWAk6k4Ydh1n8jsqj4ge5cces1vnNJ3DSRYDYVmL4NdykBg7D4gsAFpmxa2LkeyjPxdWMPRLoDL4pVKFuGDxi",
  "key17": "3a6WcncorVaLGzfhsRtqK8s1ka3yo2msLmftL9pDnio27W7tUp44ywsRtV4tz6YKwqL48qW9i7svRGmqQQyPJN6b",
  "key18": "2oL1SKx2rKVQ6Ao1hvNr2xsu9vnYnPD2DLkEp9WhFg3WsiajodXu5ctDXD1emj6Gstt9tbeTdqmMPqBad2K6cmTu",
  "key19": "3AhgvrJfHiedMnUnvpQ8CtKuSxPEZgM8RUpmbCVnyMRVtFnVpqX6tqQ4GufMsw1BqGX2cSpYb8a65unhcAWCogVM",
  "key20": "3scWnPLDBnSxfHwNVPnRXYRiYZnGm95Ao6prakxjXVC3bXL6SYuVKfrRFGLCgMJCYJqLqu6DtjwFPL7BqpA4rKtH",
  "key21": "375sY1L7a3uNZgEgzJxiELFGUEYAKZwSVjmdrhn1WnkkKEDR1i8j17qCTQHX6FCfeafWN3pGgHDonZMsrQv9vQUV",
  "key22": "4gfNVWCFv3Ssb33iBTdvgaJeTw4eobgKTc8PWSCRYjJuhnYgq7BnZeQ2KdNQZo5oDPonSjZqDinQ1fMcjwZrrvDZ",
  "key23": "4D4vieqiV3Z3BvXRwH78fpAq2RyXyzkjZsa1mRJLznhu5dToYE96ccmdZEcbmzU2MDds6zcPhjEzD82bk1Jp5ZJR",
  "key24": "3zMrPYEfszaB8G5MezHT6pBjiZzCNpr7reakPRp7drtGXAuDGrACpAZHhKn25zafMLEKXpmoEzzrBn3NZsxPo2oX",
  "key25": "kEucAUq8fmXTYkQWBTYcmrDZ69BKyk4Bkxc42w8znLrYz9zAhdynngKxTzngE9j1VJrouT1PYg238JSuN7BVXNU",
  "key26": "2WnQaDsn9VYiKE657yZFNGbir8pTXH7f7jb5a7jrbWX1uQk3r9YPNQh9ZKhdcUm59kLxJtnM8EBS1QE5Vp9jmAx3",
  "key27": "2yCTa3sxvJ9N5Wmdh62H5LBQz32FMzgtCC8yeydVNDfsFhhATje2iNrVhVrCcXbW29gUXpqW47sFFCVwYaDDEqtD",
  "key28": "2pvBZfzRAWrad12PT9TMtPcQzdjr931dL6oHzdRzwDfPCYVsqKTbrVX1guADjxbU892tGapjfen7ZisjqBhgbwQq",
  "key29": "5UrLpQ6ghsXr1Azj6vNizfyZnLJs8FHCcjUnDYRx4b9uYgWGsNHABCkmYeZKEYpR71f5hUurxZWYB1P6y6NhSWYW",
  "key30": "2pKMhfLjmPK2xAGetFDULw99qqHy712r7ufhDJBTTdAGux69eSLFpezFtfY688AVRD38oKa23p9xeJnEYP9QskYL",
  "key31": "3RtdKzHkD8iQAW9FnFZ9ytk8XnRNw8DHyGaVJypmUFGp9k6NPw9LYJox8jphNq3wZgH4ocHWYLiUwpvLPdeSrHUA",
  "key32": "HUEZQCxBe1E6UE7mSi4joErFY7N3U4eguGmFpdo2UUWn9eh8Ryu9cAmdQXX5Tfdvb6wK96hAcDgWBJgARss4Ek2",
  "key33": "3Nbtdh5rXjfMGHgWEftDeDeFrLyEgNDQYXtsBtW7Adnan4ZCo5dNeTfeuSrdiPxBJbkKqZrTJRTMpZeyzuhWPUgy",
  "key34": "4x5Fv485s3RiQcyfCmKRyPxd2uqaN3E7Dr5dUFoU26oRWHWYuQJBkZ8HdaUT1gP4dNdjkuDoSiXYQ8AKL1KdxzD1",
  "key35": "RrC5ZBCC2kKoUBKJst7ptEiqzWm2aydoAr5MxCuyAF5j6b3T7paBCdbx75PHdEfEUM9kHg8JFwm5sN6xy5Xwp5A",
  "key36": "3c9i473Q4waQHAHTmYzwMMZLoPnBd8uE3erbKieWabudp3H2k3FWFvtjBoZ8euwyVh389xrCRePnPr1QD55L1scP",
  "key37": "2FiyNmLQpHdgp4gmtjVMm32tJcB5dWezhbfz3pfWEGeUcdVQFjE86GxAhV1YsNYtxH6jWZmmowEhJiPgmR8rMZCu",
  "key38": "4hwpQcxyFptTAhdXv5PTqofzoLKtiYW4PLv4UF3wpp346mYkxPNPZgoMCKRMRyikNJzn5PckcFNf8gD8kVJpV2ZY",
  "key39": "5JyzmA8Jtg3pmyyB9nLGvoK6LBqBsXkn8NWMJY4P1H7iRyrgQ1awPF7W4YRBcHpSofxVKVQi8QXj1CadD9RDp6zv",
  "key40": "5L5rmZoyhGkJBQi5W4Nkhx88fmRJqP8haHRWtemchpScx5tLhbPQdkuesoYuE3F5nvabMhhzt88KKQbU4YNgEAPe",
  "key41": "42QHtkP7MkS5oHiS6iQajP1df45Q8GiWZbVaSVay9KbnkTQkDoPjhftDtuMG23evyeFiD6cfbuYUcY9DSroFHzDR",
  "key42": "4j9GsBbkVrbam54LR3dki7vzGbNFVEE8yixmiKyzpWW9VJjK2u9Vq1H1kZyEYugACZBtNMua5k9cKeNa1wAVcfVP",
  "key43": "4o326MSM4CszHbX9kKE9p6VnxJsqVPLSAqoGXKRNKwrHCkF8aEbkTTF9C6tGxgxMLqDssRusaoHuFZp8oWz1DLDF",
  "key44": "2pZXMV2Sybfrkskf5qUGyXqx3c55MzppokgFwisjiQ3TM3Mpe57TqM8Xt858cYVtE7XE4Z2KVRMyeoPTpYT1DZ3",
  "key45": "qhd7oWLj66647efuCX4G1AjimKdrTYucbge5oj9vptqYyC4yrDZZhCJEsbmP8A8sx6qE26Gwpj24urkiuWiGhBR",
  "key46": "36qJBovHcTxRJdeVvDpCmzNHmvaN2rKH7GGF1eaoX3gswS2aWUrpUM5nqrNd3XMEJQhts2NBxWKHPrD1ewvcVkd2",
  "key47": "28nuaQQPoeq9cqRHy9L2Br9MNoUreNWFWC7ZyCy8Y5oqZMAM2u7HnLNSPxrG1YoqNrjJwstR1GBbkNv3dYgjjPLq"
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
