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
    "64rXdhmPTycNFuf21RzT5xu4QAhXpMtVx4LCvRq2J2sgXop568TzRjhMZihd8jLfBUzRkvoMrf3MQ6gHuvShHokf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pAuEJuw1qitxHMLKdPKZTrtPPf9oep9WJZyWxsB6tkjZSmuKxngezMsK7XADhz1zeTVY4YT9mFAusi69puwWghp",
  "key1": "5roEJjqFhkSY4L7r1dH47zsoR7GquUVEgw9626pSA3P7yHoV2LrgM7hGVpGV9nuuV9SRdgqgGFQoF7ptCAkn5s1i",
  "key2": "3cGMnHqEK5ErRSTya3r4Jryon9gvBWcF7iryFnKH1nAvTnGY59KBGqNb8cXPzNn7qDFy1uwJzY8ZnBwRpZJYzGDC",
  "key3": "519x6xG7Vkeh9D1Sr6o3eCdwyPr89od46iuhgeFEzYpUdn3czPtGL8R3LtCWYN2AcQbRxXMN5ky6tg1W35xfHJXb",
  "key4": "4SUARKSBNVxizJNMSNVz37vKuxdnDFZEsCdHRHeL9UQqiGg8Hay66w7wELWwQgUFiGVKw5NmQuxjYNXJhXKXxtGn",
  "key5": "4BVksXcUirtUj3sDy2twvVTcSR4CPGmX4xVGkftrmH2tdNYFVxWEYeJhnrbfzAp4DBMxU5ez5MqiqACg9xWTDzom",
  "key6": "5J3tzpZ1GdTYFgaWKzSZonaDSe4HhcdV6gwguv57K4e7uLKUsPiU2cPXgAT637dEoW5vnwuff9netjZbD9uLW3He",
  "key7": "5Zz5g4PJxYwbr8SF6qh2E2tukNnSbpR5h885UY4JgdQUKwTS38m7TuCReFD6RWJutDcgKEy1Herbca14fzPY6yzd",
  "key8": "zxYGPjwetg3CvsEjxn3SBr8r2SkFwg1DujK9wgWjxjqqjc7mBEksw4ehZnyLL6x1ja2Ehz7oLtnM7cj3kthhbB9",
  "key9": "5xZvnhpN1AtriNfFuFMvTvon3U2JsDitEGgV4TPrjZNRaY38LRWBWNcBAy55NtJMYrKimSsR2gJFtZTP8LrMejuz",
  "key10": "2EDAWgjV9MBWp3yd8nePDMN4sty22PvMTzw68SQyNPAxBmeL7T5jzyh7W5dA3w6DRnC1qarka5YenHpKVWm6u1Lg",
  "key11": "yt4FBwaFmVQcSJU3881ndU4tnfnptGjVnsJ8ugs8rPJ8Kc5eJwgag8QEhVhKJvN8nSGQ3g1ihUpPjWPv9yeYUHM",
  "key12": "4cVUuQTo1TjKoi5sukxcdxM51AizyiEgbTmW5Zc9Kjvpn4EnJbvk2V3sv8ny2DbG8J9riF25y2epUnRabrRFQ7rp",
  "key13": "5LWqxn3EBD6nXe7HEVrzv9ye1HcaZ5yj6STmmQ5vt5QQ6w7iHTsC2W16nNEWTKG6icqFWGbD3YQbZYGLY8kfputV",
  "key14": "269WSBcms9Styp5rqfETjcywk36NGv6zM4xAZJFKYpxfYRLcUWGVzHVp4TZNPLvUs1JHL9ARkHesf1bqGHqpbMCe",
  "key15": "2eMTqikensyui39wziEkwnzQUpHqAqSF2XpLzB4LLREUDAo4mCA288eF2vgxeLfM6FCJUiWR1NV3VJHdHWA5yFuG",
  "key16": "33mpNU5nD7xkVDR2XpevJwPUSrcZpy8Y8cd38kEGJ4TfdK2H9MgvgoGsFjQbiA4agLAFcwKKuCAaWqFp6rzfjvj4",
  "key17": "2aD4dSP6mgb2UwBjxP2CPqMCayyRyLTKfP6GCHyX55qdDe37mpC7Ke1y1GnzNvPpqrPvTy4PWzPMFojS5gZUeWtZ",
  "key18": "4MLUpBTRUbkyYig5vNNipCXSxSKHuiotJrdm5Phraa4uFsXv7nHSbruq7cbrrJjAocNZqc1SqF1vkGpK6tKA4FwL",
  "key19": "2X8yE7Q8DYT6xv2n1Y5jonx25cTd5RAifFiK4GPM5hTtYKvpiMbWZVjm9f24obbxBTW2nL3sWqi1FA42fCLbFVED",
  "key20": "24M8m8YRyQ5QzGCve13zagnQWEMHhsk9Z3SR29u5qaMpRpAW5FhqjpzZ14GtC6NUhBLmHCfmpWTzLwtHqnk9115W",
  "key21": "5yTEzHKLvCG4Fx1PXuwLguqvDCc8X8gPceZezuvwiqqDghNCPWPc7pAE3RbwZKSNyqeBhxhNwE7JkxF1wFnyeeWb",
  "key22": "2MdzmoVhmqr6D1ompGXzMvtL2JryfzgYvwzwFkdEw8aDFVtrx1rJrnjNaUwcyKxYsFFw3vt5266njQ9ap1CniWTv",
  "key23": "yKShysznxPbpWRvxfnnREcaRzc2zjYSXkqYYxpdUvrri1HrYEXjn6camnJBKzAoG8QZ3owqr6uRvCH4vSNbLyJy",
  "key24": "67rBK1hqMrkxP77bu2P3AquepWpkfDHxwAKQX82CXgBCLyvp3vftLx2PkeBg1Sne6Do1aT4jwmNJ9VaRy2ffZU9S",
  "key25": "2BW8mMxPg4sswRweeHh4N9YdkxCihS41NhBm5KQybuxahKbCTSWxsaorUb6Z7u6kVfoisj5MrrgA8vM1ncDgZh3f",
  "key26": "4aSLBNHUFwbfcyknPs273TgxqmjM4Zd1F8Ue4k43dsSPZRTVXjG5cFGv52L1DzJ53i9KwC4PPETiZXyNHSR84bVN"
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
