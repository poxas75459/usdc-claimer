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
    "5auYUMKasfBGp9nVcXeecHygaPKEskKhMXQMrNt4sA5SGHBzo15xf6ZwjceZdwMz4SdRLZ8FAMEXV1ZkAm7tzC9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pdAAh7pKEeoXfmFCz62UuSLbLpuPFkPVBkwSQcYF9eaea3MGHyepMyZBWVqaJDVKkryWakzgz4vLZoJQJj84eAg",
  "key1": "5EstkMxymAMnMgZR4HjAB8yr25JSgiJAQ86bSuD5wf8A1mnUk8biQdDXropKx33svmFERP4QCtXqYDBcpoRhAgwd",
  "key2": "TrikVYr6CnyNYnmgi6E1Wy9u5rdi5iRJ6PjoVct3Yh4WYBywE98o3uzaxTXx4qu3fpD4j8E8vg5WY2LA5K23XFh",
  "key3": "3e4y5cHJDU1jz1TSjTYLDwzf34gmgE5kL1SEdF1LCEEbciUaMHJHiP6emPvpDNbBCQYng1WwMb4r3Ashxz16cSq9",
  "key4": "6bV236P5oE39T9SXHpB9PtXvkstnGg5VwUD1UjJ2Xat722U4gEAX8yMu8gnXVuJiHftXH8ydSPaL4Ba9McQugeK",
  "key5": "fuH8vk1x4XGumEo7LEuNBKEg8ZSU82V1LxSZ4irUYkrte4JiQMwCigbVPUpc9cMHRRcTqA7qSxqUmMZajEK3bfG",
  "key6": "2MKvVoFBimjwjDEqL5TUR69guu7Yc3uzPBNFDhu3tXbioTEZKAZ7pgvBKGCvZBigdMXWcp4LR5L8EiqdRX9whNvY",
  "key7": "5navyb1vM45yFMehwUCnphXJCg19ZYReKBnozes9ZWP5tym6Z8FP93hHvRArVoKNsw3pxQZ6LukejrrzDo9nxEY2",
  "key8": "5QQbxzUoU4pnz68synDHfvm7vRuB5XF828twNeuVFXg9uoYwRKgqQfWNU1WJi9MERoKbu6tMJmYzfwZ4H2hHtVWb",
  "key9": "5H1ns8moXRmWbfECUNsT1Pn3UmPhsE1eRbXAJVmqtKx1K4zvTQHnZjykaS5RpnCtGK1WgoiVNehcvwoAdiQQ3651",
  "key10": "5zFQsxau3wvjZibVHdhK1r4cMmcXSr8xKYxqAeEPDuFUjtiQVgSaVFXxLtASZc1q2Pd2GjGTNfXcF9f2HW2XHVPq",
  "key11": "5rUozxsPYrYF24gAGeuR5zK5rBGR3pKJ6W7GEbyMmkPHPWVpmWU4Bw2bkm4gzud4vGJ2k2FiVy9D4X69Ci5PWaEE",
  "key12": "BhVqXxRRKFfvNjnz1nXc65j4K4TbLsxTE7C1dhkQ6dphCxXt6vWJkjQicztsJJKAHwWnp6QNMpBnXyzfQsCpfdg",
  "key13": "5NmtwNhRqBqFUyA1AZ9jcAKRaYF68r6PoVMec7rDQFituxzFN7kMZx9mhSLLZvqRJmAPgpXJu3tiH4G7f76m7L7T",
  "key14": "5oRangpj6hBqNnHmpqYpZWJtWbgWeGvnZF9P5SUJYrkEeYpchoLx3avVdqvJM9odc9HdhhrXjZLAeZK8CSn8udkC",
  "key15": "gCgW9gSN8JRmzV9C9FJaDPmyBfadGYUXwciAVxi3mwq4ZcEPUzRaPLPQCfgNXARU5bFvWfpwEdvp8o76fXd3xCv",
  "key16": "2vjoPUketcoX7bpFEvoWu1AD8eCud82aNAh4KiYiv8afwodvV7RnvkBne8zZwfRohtGNLtPyHtKJHnTPjnAsnaXa",
  "key17": "5syZbjFVcHQcBXQ3iKpE57exMwNcidg6JiQwm2f9j45WBpq7ddXBo7gxTsWz9AfFaGZeUuqgSgvSjg9QEL9QqhWN",
  "key18": "4UJ3Tshs9gnJDhW6hqy54yB9zkAcdKVocNLggZRRTdiqUixBRKD76m4XfBAE8FKSXPcm4BSjUBprzNtQYAr84U28",
  "key19": "5jf4ngSVoR1zfSLjYA2qqkektec3vVPxMuKAz1ab5cQsbKKfo69X3G1Q3Wjfyg8eWPpEGvJ1xxY5eBFoJqgAAc6R",
  "key20": "4zGJHHP7UwbPjucf9bpEyny3kbJfB4goWt1QqoKLNPY67rwV1h2D5L6Bu2zGNv9mGBeqygMewudquNnFtbruj5uE",
  "key21": "38H1h7sHdwUr9uYeszYZPrELuKbFkdcUxozrM8gYRd3eb9xh3UL21dhJ4zpUcXwnLsFV3EUci7Tqw8TARAwEea2F",
  "key22": "KgNiWQ2mHcLZVwhhDNQiCMn2ac1HsihFdN7dztutCmY82bQ63NPunoSLRdys7ibbSACwMpzNWfWmMWszbTo97ny",
  "key23": "5RBgELiLUEMrNCQCMFcUrhF5RnFZ33DbbngYV9jbevMZp2VvNQ1GsR7NLBfvuNcNLCVnzPMffLhr4UVEuN6Jwtr2",
  "key24": "57YidMKwrgiww6MbyDc6n5hNdZfFPMhHjZnH2RjQhFxG4DToQt7bP5eBHnZ4hbGrGctSEfshewubGq16Y4W1RSZt"
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
