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
    "3Q8PGC8iKwSEuaQMZ935JR4XHxrN4j439joSgd3RwiZCjN9xBbjLVyCjPaxdgSLsZiYtHaAZ6f9Wap31995wB46p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fE2obCNNPHb3EZXWtry4B1X92zZRM9im668oPb1wAr67PdszFuLCLUSnr58YiEjwy7aQ16xwrdN6m4CbG9ZV9ox",
  "key1": "GjDRtUGig8ErF6m2nTTPD9ap6iBSmfkN1i5YS3DfbDAvYiiPW5gYtnj3PS1YRLpWuCm141t7qTVLQNhKmpnjqFm",
  "key2": "MXayBKeCXA2NrLWoV6Gbj6tkdJwEAQfzu2YSTtjDJ5gZtrYBQLc96Vk7WcJs9x6Gu6aqdnYUHDgP4iFWq4Tt4Bu",
  "key3": "2NjqN1P8vweKDUdCQHf1HeDHH5RUrydRA6eYkihzn7KmPEzBCBMfRxUkWqtU3puFhiScsUi1YfqB5tFJ7smjGw5f",
  "key4": "2b8AYTbBpc661y1nkMQdZfFAwHqrmMTD8ZVZWNf2chfLPtXfWnnxRqmipmQuT8BNGKr1T62LzVVL15nKsCjzWVg1",
  "key5": "uH5tVk7MTAzmh7VZXjWdN3dXoa6EiUTN8BMhM1aEnnHG2pNrVnfKhwMEMvzwF57ZcTXoWJyd1BQcPFqWaHx2zWc",
  "key6": "2Rd7MFnp1EwSYv8aDa325unUP4usweSn6ZS97PAMHvwwJBP9LzZ1UbkH8hq4HTg3WpiwiUWMJxs7et2qxbZgbFrS",
  "key7": "5q9QAKz8JDmYNqks6CuEp7kXfXr1Se8jyhChzRUKHsEX5RgNGZeLYsK5R9Jwnb4dYXc6y4Cdcywi9UkpCDNvDhGN",
  "key8": "2Qknp1RZrQg8Twk8nSzqnJQB2k6Qkeg5ULZStc5rnt8kbfxvkF57JX8sRCBCi5oyZo36C9dfDgMAuHp3fLxiKwNw",
  "key9": "3epYBzKHxBT1jwBTGcmL9LeQ6SdDh7R3miJTHgQzDFuWBqPPaEuh2BMzAaxerJs7FJ28VTDuijhvHmZqRh1wupmf",
  "key10": "54GjkFqmKPRqQhbuzk6ApRvXfyHyHM2FsLqab7bKHSxA3HvfChwERxZyy9v9o5VLEvMwJEYWBLqFJAWCUXjM1qtC",
  "key11": "5rydh6ozRfBfGXja82nRAgBEP8APLnfeQj4oZS3prcUPTMNdfx6EEH4pxijn3b3oRcP7PvUHeV7x6Myh13P6NnU2",
  "key12": "2dRNJX941aZpjCMGSZ7mNqCdxQJSFX5SoUjz8o96JiZBMBaJBCEf97ZHmBwbfsnaXYUqHDmmhPABUqHsF8g2k9cp",
  "key13": "3wg4TDEqc75LSJtFynbxFwKC6Guw4JPRxqKnGhdAeZnoPR5DqN7dcNzVyXM3rgnYETYVP9eazV1ch3J3396h39Zn",
  "key14": "2jtALdG4ubYcHjPX3tWg4Zn9GqDoz6WtBq5DWqgqdEGftaSU9KEUPFZbj2hbyiS2sNYfofQmSiSYRH4YTYYkmHq1",
  "key15": "3eaeaZ17ENzYRz644ZFqr99UvdxdyNLdt4JcXpgZf5xABWudjnJ964aokUb9tN1b1g2rAzhmSRk9H9AdKVo9nVAE",
  "key16": "5fS5hGYpJPR5rC1TWWcddjQ45CMRYxoWmURWM6pYFgUq7yiQum9yw5j5Hf9FFXgLemifZoFTHWEnTeWBvTXHE9W6",
  "key17": "3kF5qBt5E1N3WPg7jhHjnGFjpDKoJXNA1hx7ruhYoHKnHGQnS66Z97dDdK9axdRvpRYpnZFNdgRwfxNwXeUyet6N",
  "key18": "vEFgc3xeHi5ym47HR3RJyqRvJSe6dgEv7x445EWZEKt3bh6xLMN7adWCMLbjXaqkYpATJN3sNQgZHBJgNtnNk42",
  "key19": "5PARKnu4SKPvtTduXZQf9pbNzyT8bT3Sjn7AbipLy23aorv3DKCDuw2Lk1VuZrVj1wdRUNLkGu57iMbbzriEoVUc",
  "key20": "5qV1kEViJAvkDQK8jnBntQWMxW3q3HZDgeztSFhUYKFPNTydbAEtou4vzKM4nW6ibegwTCLHNLYBTXvZcpwTp44J",
  "key21": "2kGXn5baNkZsoaenXcjVZBc3NsPLR7ZvF2jnxjnBNojQ8NgZcHJw5eBVBU1HkPvEDFK3MQKTDnqMwiUcwRYFQT2a",
  "key22": "yLnpjj8NAzyHDXJXpQjezj5mS8Amxgb2YD9qhqmig5rxM5LRTAzFwF4FNwB1xi2wNni1ekcba3fx8qXgrrmtRvz",
  "key23": "udUohn4CQnta6TrEYcyvt9Qhp2u2fDYFALpKau76YeJweZ5tR1MjXgknYK8YJDrokPgsW3wTod9SibP4JdWMmSP",
  "key24": "3UnfSSQRwm2DiGKGQtEWE6U3wt1hYDYzvk4HTbdhHxrB1SRrMbauGz6uFQu1yKryJoFdqHSRRq2PXyFFyKRnUMhe",
  "key25": "3eG7SydVAeN6N9QrUzQW8QXa34Yr3R1y9tuzkQaLNCqVLMFYxnjkcod3u5Et9YyNryLUczapTxoSDkWzudkSeP3V",
  "key26": "YS2pWtv2iqZSXKJdCiee8HCEzqKiP39JutowZbYb8x56uf5Kp3KpHyX1wntYbKfKErECgrFrzsHfmsqpL4c8bh1"
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
