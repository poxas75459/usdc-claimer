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
    "FB4n4sLSJKTgLkAc3VCqJLqcjcazmRbDjBY69uHFcRNBH7uiYaoXdDJnnBwmjvm5jQeG6QLWgYzfJqSjkBiRuv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U59aEqJWxPSufTzX4JGivyvuZZmKtaNtMuQcED4wRHKxagxwK8bSTSoWKmv3RbmsmVfJsFks9e6AJ5LqhHdnxWp",
  "key1": "3QZoopsF1VkhUj3Q3gP8QqbecodwMrbzrtJUH1of9YzMVfp2NWm3abRs27nTqKg4Q9rypu1m4P35GSQYuBwrYRea",
  "key2": "sFDqdjqY1RPTwYEGprPBPoVMaCGnKgyJoCsr3aDGndsP7btjSeRLmGFKq9Gt5VkgsC15KnpoiCXSampEahTZkEm",
  "key3": "3Cft9dAnMQ9zm3UdfV986govueijJmwbb4cCB3VWJ9iXpJ5LhpPamhZpSQRBavF7c9uxeLrYJFgjbYdT8mu67UgH",
  "key4": "3Czbc9MaftmoFsTFedxk8CihXFs6TRno5fUFAgPbZVUZtpNAXXbhJKjzjEzzBLeVGY4BFQH8gVjmJv4Lau55VrZQ",
  "key5": "5N4Vr2CSEr8GLBWEceCu1Mmc8cRUryACkpv5Xpt1H3rt5Bw6QHGhe6sgMaRp78Hs5G8Uz2APtEptehQCpxTCYcxm",
  "key6": "2guvyZp35hXfmzzszNGKptNtVoGgp54sZG1AFq13hrHY7mQeJ6v5zwjjjgZMZTKjcu5rGyzzqiNyVtZusWzLALNJ",
  "key7": "5T84koSPieoYF14dJCiuRC1AbqHkgLXHLdoBTcw6Ut3YPoJo6dbReAV1uD8d6QPEHU8r4bKfBLrsYzkSwv52EgV9",
  "key8": "5Uph7RDpKjW9S6B98qABRTNXE7Y6UtQB7XChpZ9BXCkq8wSFqgvouP6F4Ru5XM76JcLP3cm5ZBwJ7yNwciP6WDJk",
  "key9": "3cUw5YFPPYzTiNEUQjdUCHFCFqzREWBemeuoRR1K3ovTAp6U511B3qRJDVyuYeXr7b2zBAnPCUDADmdnzFZhkw3m",
  "key10": "2qAYVaxDq1bTi16biShcnF4BhRZs4jxf7roEEjLWnm7PWd1U24VXoz41mkmur2iiTKqy7AJbWBgRSSRFpVdciJ9M",
  "key11": "5ehrimL2TW7KxtHWNknZ9mYxm4z3wp3B56uKEWMiEbbcxUiMcony9dZok2w1tiRZxnuuQCNJzpqWRUGMGUji1Mmq",
  "key12": "61Ytixsu6DAooUftojkfDAS9D7j5JksHimcVpZo1FsRfCywJc87WMztbYFE7sqZuMjWXBzfJQ9isE1J1jbq1W7qD",
  "key13": "24vtTKLg8mudJ2BozTtvkQc5xvThfY1PoEwiTwuXv662TGaKw6TKnACih9pFBvPTw6ECKjrvPLrbdAtVVWk4ERUr",
  "key14": "4cUsLewBwkBPEm65deragvQTdJzhVR3sqFPJzstnhv2VKC4giJcrLd6BcLmkmG2Pb81mCb7DaPrAs1PZFcekFCG3",
  "key15": "3FaarRvRXqGnx6RjPiMj8GH7pfV4z4FpHJug6PuXr826AafDfFK2AP5qtbmHmMgnMdUkVJV9Waqf8Ti1M9zQnvaL",
  "key16": "5W7dkcJDiY29gzgHPXPTH3aKjc7fsQoMRHnFQYrcx3xc5jDYkfwq4f7H37UeqNJHHqHwdu5Pe8gfSbz9AevtoScT",
  "key17": "4yipGXJcCvo1omnF8MnQuUEibyQNGvxszGTg9UkAho1Xq52iEvxAGfkHrgxT4B6EjjZjZYfwc8C4rTSDqsZ4YrPu",
  "key18": "3Th14r1h3Zru1shMeAZ93ne8A7jdvp9ZXB8wUnD3jvuQxPerfQvXwepEjHwjEPMnFiefmNbXbMY7eoWyFdD6wj9E",
  "key19": "3e9tQrYfYUKM9fDT4kWoD33fUPemmmE4L13croHeRzrnpnWtqsK6euZh9LhjB1avsZcKL4Q96vGwoSNWWkE1xrVL",
  "key20": "dkv3QyyhdXCKWpfqVYhWT84mc8c3fC4wnpwyv3xZekovGXecovEvg4BPeAkpSezev6X4f4s58hVLMLLfysnqJbZ",
  "key21": "3VMDPrri19AYJ6JPuNLuxy6scQZnWnhtvzccxBVPAHJygv2TSt7MWyHqVAPuU4Gs7cutpECjVoTtLX1go5vgk72e",
  "key22": "ugU19VoeUAXAJKVwPwSTJdz5HysCevZyMu3SZmQ4xAAkX4V5iJ1t2sG1xUpbvAhEv2zr3nPcSTZhPCH3xRXUYDv",
  "key23": "2bWrTUBwNHKRqCYTn6g7s86uz1yXzUWGmiLJG5knyXDh7QRfE9FN8c86hF9vovSS6wCxAFEzPFV7S8r46Pm5Q6A2",
  "key24": "35oRrdhNpViN9TprChg5fQ1AeHj3XPsuNuLJ9WcQzENYF7pyi6brREiCXj2taJ7iLtqqhfXK1r6ekTtrEA3WJgGk",
  "key25": "2A1VziKXaoynYyBxPR2aV4PFswGRvggoV8pVT45ryiG7PWVy91DavEajM5Tt6VBXXC1ZJdrQpch8BdbogcHQrKNE",
  "key26": "HKTR8Rgm4sQf8eXeCgPQBMSDBbgZEFZzAujh78pb1bC8TmMvfyHja88VpFbHxptaxcCrL3kMrJxV2z2Jq7ak2vc",
  "key27": "21q6LE43tZC3EjkQ9L6abmWqCydkxoUAXAtvwpEcZLLxjrZciK2zKHD3U6Rv973fqCNVPUV3R1t7FN7fRFLJgpY4",
  "key28": "2yQbPL3B8BMdkbqLgy4kQq3cQo7EqER1dmhzB82E8FrDR4jJpgVsnBmYyV55buHPdheLu9GURjVDb4BL3u4KsZkf",
  "key29": "74DR6eKVKN3iXy49P6d33mRdtMGbKdtvZESJf4RAMux3PSFmuYybLo9Pqrrn1z2dXwc8TiAQsfPSs5Lw8QA1Ryj",
  "key30": "63vkdE63N8J7TVkAQ8pfPQt4u9nBJ7X5iK6asmN6hupftAdwGvyniaxBk2rxHCA6QKwsErb49YMPHcM622VPaEBx",
  "key31": "2PY3yuREWBTNvw2H3po6pL4ERNPqFqW3AJrkSJ8QfASXmVk5qnwecbyZkX4GGV1XA81zQqa4q3C2sfmmQt2N25CX",
  "key32": "5uisNBbKRE1NENztWdbCavsyHJuxGturGPNVn9cLVuxH7UdCXEiDgfdtKpviy4VGKyTxxA9ApuCZWgnUQ1sxfv56",
  "key33": "mQAP7Q4UvgNCEFjpjfEyjLWxzJF2NqN7SYgUhacmeh8taCPbpGzLqMTRpqTXN9uRYWmZmFJbnS12ck9r3st7Ptt",
  "key34": "bfcfrgCkw1Q867aZLrjPXfeZiiH4bQTfqb1CHcZiX7C3jDcMEMguz6te2TgWf6yF737vbdgpBatbUZSP4rZ3ia2",
  "key35": "2nYmKiVENUyhKDekGt89764L7kwNoNbqGz6fEDiBhrvvWTtQxYitgFSWE86T1zUAQechugezJgGEM4R4xGAJtqEN",
  "key36": "5Hd2rF4bv4BR854QbxQZdZeCsCFiDurecvt27rAtD7wgU1gTs4ZKfrZYoRXJR4wseubzcQoqmPDtUdD5wRx4vaRS",
  "key37": "4pHhs4WTngfnMypWHQFGoXVskdg5kdGi7jp6ta6ZxcmB5mErX3sWkrdDioDZW3w6c9AWqCpUWqk7TVT9vzhYwuhF",
  "key38": "y9WRpJ262dEEHDyj1i2CwFT46EzsbGcQ2EBtiPCNBhB7Sb6qycvPNsUmyUE8NohRHjcxY3bnPKAT3P1K8yeSDs9",
  "key39": "5qWQGyCBHLaUgyZHgFzGoQMuM6hgnZ5ibt9UAyhPSUoWxDsMtUdhCzTmgZg8Az4CXPKcnYYzrCBXwNryB2t1tCAB",
  "key40": "5VxDuuuzD6ULC2TfvEyVFf3WUciBPjeh8PcBWEbh1ZAdY5aKvnJsfi9jt4PZmcUmycPiFnkbkWkmHLnD4Z6g7FMU",
  "key41": "2mR8uMEsaKdEHPSCEY27wEPVHv9tQjD5p5G7FyxC3jBWqA78oHEhk8DKmhSPwNXG5pSuyEPE8BKzLTq1dqvNZa25",
  "key42": "3kqTQ7LRrpGiPQ1vxFJjwtjeQyqXTCQoaRJMgwkjpq1t4dXtHVqDSg7TBqxbWWBbLo5AdEzgxUmk5sVgHWD64xcV",
  "key43": "3wfCyatV9Bn4ohJ5zH88wLQNLswAsikSqEinpwwy9jwLyeTwihsbRY1arLzz3Bd9Pc55j8MNMvo4UWujE3RVQAww",
  "key44": "5jicU9g8EABvzyGcRXzgyLbvuGMRGKSBARoVCNngjoLXUsaPpaos7gybFAmLxUwtVRZHu9TgeXmqPxUj4dNd12ep",
  "key45": "59UP7tViUUqCBqFJeGp2rTLpiuqhYiLEPhoB2gjUoibqSNfmUXRUz144fSQCxxEPFM1WDkExddYynnUbNq1o6msq",
  "key46": "5JxirymP8xEwUcYz5PGiCRtL1BYx6TpNp1xhhVpY3bmy7P9GuUwFzEVBQQEW5WAL5zqmLFkCxxfLgxVexgdQtajo",
  "key47": "3cy6btKV3LKQfAzUEgcLR8J9XLmFsu6vD9mKQBZZWF8a4apgoYYFZsK44Dg3UgKCqod4yWVr9h67F9fEWDr3C765",
  "key48": "5M6ec8Ra76feME4jYwWxDWsg89XT9McHisZ4pDssxpcAm4AKAGeKZ1tvFR1JgYsxYDdCYyNzuderLCb4ZxFHQigD"
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
