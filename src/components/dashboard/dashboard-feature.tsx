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
    "4pqb8exKAmyAxSKueyMKbZyPMmRovsP7msVhhasN4P3wxDn2gAGt9eMLFjciwShnzbftEEDhGKubJyRUwNB3Bu1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51jTABVq6myvFjURuYy3jznmHR6mzfKExiWJNJj2BsmQQo84NA7keuwLC3HdLUFF4pGs7aDmi36r2yKh2P9A6n1n",
  "key1": "2ouvJrBqLGaBSaYcrfBFpZBLL6E342W98nmjU4kJWPywSaA4pwgUfLRN95Ue9kCU42fVgmRk2LGTcG3Msjm472RV",
  "key2": "2G5nFD7igkVGV7Bw7LSKaPetBGQ85XCYBZ24HSgVEvd8SVR7VJHqZp5jiu4fNWqWxDDeCvE9473EvPXRcyitr8hb",
  "key3": "5w1S7qJPpnZRZyeU1aS5812iF1q95P8Y1TPNfaRJo25NEFsYoujCjVHbu6BDQJpQMujvdXqCQ8pux1CGMWdPwSjn",
  "key4": "2ZtFqovXUVGymP4qBAT4QiJDdKZyJRKyMt6fTRAMHN59KpaawHx5xktV8v3gAWJ5HP6UFqp7KVd7frWk6cEgYjEv",
  "key5": "3tsawmjN8xXe5o5Ww3sasgVA8qsauEgfiLiWRv4pUkn49RQsTADPkQP3H7B4hRnbj7WLzCFMdRLM5cYMZQSTWScw",
  "key6": "5cQhzT9j7gaice3jocqsS7ggcQpUw8ffEMSLQTBoP6FK398sWTZjtu23mDWJ2QWxtK4E2r2HNUfVDFPCwcApfMtW",
  "key7": "5NMK1r7yXbWktA6bnEkTY5MqUYG6BqnZMN3Er6QggicEQYbfc1cAFDWAHAodVY4kEFvqXbkQKJqdkry8xP2qj13M",
  "key8": "4H7orcbKgk3eEbm9hJN7qeXsKfwbijUthHfeZDGPLxr3qkLieHYMRCGd98ug5LoyBYBQobpKiQE1AqT3nCJrA5Vp",
  "key9": "5fqjEahn8TAANwheBBUCeHRWU3KkqxxucRHxpaUoaz2E6ccQvVNQTuuJt2mNHmReLHWEGJAXfAqVgL9t1VNR2Y4k",
  "key10": "5EUddPRhaU8vMvgYHxNPEF4xkBP8jonPjtzsubTfdRJ9t43hhMcyVktDJCTfKXdU3aefdZuDr7tqDqn5Go8fr6Em",
  "key11": "3L5c76Vjutuvgix249ZtnzUVWRgEs9VkWggHhyzKA2MwyDB8tbRsFp6iZd3CSm3iPynSwFYPPp4qo3J95afvGRwe",
  "key12": "3puqzeQTL7uEGWQx9uMAYRcVNNtt8StYwTfCKYfVjAYg1WbnccrTZipkfzsZYef1rrge8h1UTwWdzNt71bVoVY6H",
  "key13": "uLVbB42Q7BGszQRWVYXWbZBpaEBKh7FJcoVYfzAX1TnTdhcovrvD6Tfaar49ckYsFfZWiJErK4CDFd5yYTSbbfc",
  "key14": "fToUiKQL7UA6MMY1VFs4LsDodj9TsEdj1RDnL8Gogw1mHuPJoiXUydmTq3f55CRV1GEJrDNB51bmfTYiA38D3jj",
  "key15": "C2zDjxGqtVKAumTRVPPP7cExzzHWPddEr3JcHFg3jNysd9fLX2oVaJxh6MhghUxpP7nCxNSTgvTwqU7hWEuBwzC",
  "key16": "66dYmP3YJnvQDK1Eq3AWALVzQmgrVCTPdtTMbpnKK6NiSJB45KpiXdvQCkqif4L7TGsohYPo1mdY3AasCS4KCoLt",
  "key17": "3ZAPNA1at2vEMrPfpFHKwtWbTdpUgCkcQyuzye6io3pttLJy37iqaKTh2wm5E9y7qzwpjDRuUvkPi2WMbmVjEvgj",
  "key18": "4LDNdRw2mnDfMkXZQ7o5NyB3A9e8jZSTUEicMGkgGJamzBfq4aJqVrfj8cYM7Hd9VBWfJCaaRK7rho6TsEXfqgT5",
  "key19": "2Y5azrGrRHd1pxj5Er4vMwKC5jWHSCzZkvDLhrgpy7P5kKKbENF3EUSRa5476tCALM5Q8NCBBBNZzKfRFTz8nbce",
  "key20": "3Nz8SEVYNL1S5Ek63MTksb7ZyCLkjnXVMnyPP4XNNScBJH96hAmw72Rx8MztZtcL4vZdoGzBTfQAmr8pjgW6sEYa",
  "key21": "63mg4SrD1vifwodP8xA4DeHmke24kHLz73S5AhEm8ouWYBXoQkAWm3USJE3oV7zDNvMuHCBgupWnX4kARmXgC62j",
  "key22": "vNY8qGSFAUn5bC5hVNjpN14r5vCwzywUyrZwFP6hqA7JKPsU9Ff7wyiG8HrrictRA6H6ZbKBdcKJoNdkWbVxeFG",
  "key23": "3gYMd28zTMJ4duhSYDWmzBkPf1ojdjtFhGaqaM2wP6qvxjQ5r722WdK1j1XMXNeQR1A6dmasXQFhXx6xbEn596dC",
  "key24": "3qWtiQJjgpyNGL4WLy3UqpoLvNPMhr1nPrJTJ4XB4LLpJtV1RnoDobV972qsFXPfZsUB8DhzttX2pAdgx81x2ipa",
  "key25": "4neXeZ6TtpmptCqaZRd8sBeHyvKFD1pXfQCCQapTHLrYVRQJqST5h4NUaYUv1D3w62Mwvv44c5kHszFn4GMJCMiT",
  "key26": "wSkaya8fUFisWipj5S25xoKyE3oDuBGBTTg46W4rTqrnsPj7hcWhvEr8aGz2WHcoEeuconR9ZRTzoTppb997rjD",
  "key27": "A6EuxDnk4iq9wPg9w57zJT3TqQmiCgYwRexjySgngN3oRtDchBUfGoKYQ4wusCA7Spc72d7LyvZjUKU3v8Mrp1b",
  "key28": "5p3wePvqQmypydqDrkB3mLwTGmBWSAozvHurNWq7qFGCBbdAt7NWwcx9oLL35fBwNgLPDAvbyNu4C6qLT53GEFLQ",
  "key29": "KoqEvr2tGDHccNFMtbr8b8J96uwtt5k1RgjZM8TF7qC9F6z8kxj9uy3AcKizsQ2Rap7FC3LEe4tE7Yvnz4X1bpD",
  "key30": "5x8Sa7VQNHsv3xQLdVLmpqwjmJxYcd6cNYBYbagjVRjjQPS9aVS1VHAWZSjDu21gowZ4cBjx5A7acU3cJWcSsv21",
  "key31": "VpembVakvU6SoWmpzXjei6x5s8XxP5gNHiRXaij5PegqC44gt1jWcJcxtspxXDGTsPboyQAqLroCHqUC3zcSnJb",
  "key32": "224WUcqiasuPsRXgKX1LLCf36dhziGdJXNFWA6W37YKgKojEChWCts7JS3wR7G9ER5fB8LuevSWjkp69mrbZ2tqL",
  "key33": "MTqVYCU4uAANbbV4hj4siNU6PYaoj4GA5k8PNvCpkMZU9BKjN6koXHuJArQxoAToCHZGM3gwvjoynicYL3GZSwL",
  "key34": "4czEqdUbRZHwedxSaZyGiHUxJLytvxZVLCZkzYRXd8kTmKamVcH81HvkRWXFutJHL8gCm8t4tNxvGfsM11yNHfr4",
  "key35": "2JZGwNquw3qvsCWcfU2bMfH3xpSE4ahQ7Gaa3F4ZKWwRbyLQaLfhADfHPSaV5mndAyLNLUJUxRhQK9u3zba3QNwB",
  "key36": "2h4kCy6SYAVvQ8ZmqcMNDnPUmvP3YahYaT8f973YR5DA8iqhGg8krJHXfrzHMwfq9cQ2YL5WpxiT5mMjwiGnCgoT",
  "key37": "fZkrT33P2sv7B9rp3aQZrxyoaBhQD59Dw2Bsw588gp2w2zN6RQwFcssZyQDvSP7ttNU1SjP1SZKuets1Rm6ViH4",
  "key38": "547Vbjsrzdf7t42pkF7WSfR2oBFm9n6Vbj7Kz8YWqvvRW8DmDdALqUMuuMFMh7rsnkjZsHNSRr1r1TCBAvEjc1S"
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
