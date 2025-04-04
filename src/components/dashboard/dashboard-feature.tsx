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
    "2KbVmttZigiUjVaEtcP5gRrhpw75Fzw6zfNsGaSvQFfhVtFJ3mM1bJxqKWw3pGR6ByYLujpr2AWJ6MgSR5rpDkFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vkVgEXwTjiSF3MBLUYnfpL7na3vvgXETgXh6oZDE8huLsVT6pk48yY2XFoGCGCrfW6MFfd6jhg1rqYSySJPAGTq",
  "key1": "2D8hmJMAeqpqohajhyhnZSFF2WjGYW795a28z4aKDHQvbhVu5ukWTuzNPrBQkxnLr1FTfN1TwpVMTykBGNCo733g",
  "key2": "5d9kryMm7Z2XDGPtTT6VtEyoBgA5he77EiPQXCLKYmDMDzHubscaDSHa5eTJwdMT2yCAWL4P8bajRAccsHakKRcD",
  "key3": "27kD9Q9g4GTp7XgkXm1C8xp35e5f6zaw2xXiJFZeASZx8o7EFtb2VKed3EFTNtAikN36DQfedBg6jeoxPZ52qjbx",
  "key4": "4x7DWRPDQ9Yzrp8g2HPT8sZkMd7ETWHqrype4WbQ2FKL4soFTsAXwVsKbmqozxVYmKBhJ3qyioLcqFsrypRBi4DP",
  "key5": "4rAdifxuJTT9nE6HvWffKR3ngSdsRXiXjY8jNUcBvAt8tWfmiGzH9VL8MDSVF8oCey8k36bXNuNGsBCxDzfRZZ43",
  "key6": "mfATcae99m5S5GxU8HeyaNjuGa2eMQwyfoPJZ9rpq47g2DDYXpJaZ3SVZYbJAJG36oQfWzLxY1JVQETkqCtRg67",
  "key7": "5h5qC7NRufiATXgdvE1J9ZRTxGGRRWDMjv6apNoRUwEL8JSvgun2S55eZgiGrqEkHhCdnHreNe4eCQM34SUebFqH",
  "key8": "P5xqkHhVewbnqCR2NLNsrA7WchvBaE5yTFPtvK85jorrrHhBTfkdakQM46DtH7mgfQWHKWqfGHXLQC8iAgS5oDd",
  "key9": "4CQVf1aWxQAMnbkWCRMMi94xXcfG3uSQ1MLLEcMVk1GgHL6khV2esGAGV9uHokzNoq2J4xRPFW3Xd9WF4EmrKz2E",
  "key10": "2J3ucFXu4t6v7XitcfBQigzZ69PQWk2BizPFG24VjyWeb1p7sheDoLGuKotmTNKR8V9x5mSkKaC3WCVR89BLCWXV",
  "key11": "5Bdrz8PR42uoE3wqhBNaYxHwLzZufxt4pHBJRoBy6kJmcxSQNXJES99AuWLymVoih6TXrs2FGkpxFkLE5DcU1d8X",
  "key12": "Q6gxdBZkKsVikxAACrMsdfZimNH1fzSLiRdPt88j8wgaVo8a69tkvy4uLcD71beDisv3psSwSFxy3MrJwmTa5Qe",
  "key13": "1fn2fsTvbYX9uCZQUEEKYQXfMjDLfq8KWtaf18SN4KZ397ZXECZFfcSgzxEvQnMwbKCibXk15jAs9AiLhh73Z1j",
  "key14": "2mqnXdKGPpEQAC5a1LpXV5dQMzNaDyjShRDjrfgFd9w64HpuoA1q8BBznCWQLMZnvZSZi5hwM1UT1gkhhYxnN3t4",
  "key15": "5JtWTB9TaqBeKjoiEmSeiJMLyoTyotjv3UDNFx5mWR9fDQ8w7NTdmEtjW41c29kpK1o5zRtfrNyZejxuW6zPx9jQ",
  "key16": "i13FsCBYvnmXpZKqwWh1w2L2TfBHkfco1GFXTCjUtJcEtJeHA6a44imNkUSfdcg8vGYbKcWDWLmfYA3jve7M7HJ",
  "key17": "5nCzuDhvY9Z7Qi2w82SJXsEQp4nqhkDvJXTzbyDU17KZ1Ttv9FL1ZkGTrSJC4bXoFNKCnnE925Do6bBJQQvqd2sg",
  "key18": "5j6PAxEzzwMgR3rooTCtQi414MR6mHdGtqpz6vbLoCXXt1EtB6MQSNv5Q83FciMkGDRhcJSpy68BxDPJv5L2azWH",
  "key19": "4rLy6pYsaanSDgy3e1zJowudB717ntRRqzQj7MERexPEUVfRCTLgLMHf2xWevujHZTebZbLr13Q8FQ9twrdE6Dum",
  "key20": "4rAE7vZ3ZARmh4Y2HkxAX7pY5teDkhWwZ8YJmQdvVxU9VHQk5UzQa4Qx7RMkQgZLPxYTUid6qBuJYsL3317r5N5A",
  "key21": "5RnNTnEQdHmMWJ8a1fpQ1X7ZrgCRkKcsEMEcUUfghHWVxE5kKu14c3NV1ABuSwSGwodhCsq2PZqw3MRhPatUCvj2",
  "key22": "3jLn9JEmNwuF7sYTWYPBFjbYjnaGj6Ea8gNXxwFVSiMwCt4kp7xD3N7czTq6s51QE9ZDuhZYrFddb2GMpUWDauBo",
  "key23": "5LMZQLRtbYixCAK1Cxxg5LSs5q68LNA3wqokhuTbi9oyuNWt7dnbEJagoAdGrDCaVKDvHmSdjsviuu9eTi5X6juf",
  "key24": "59fN1XcnVsagkqEsfmomHsQJTYJ8w76LWgUvhTve9m1KutC8yPjKWFJYpfyShgpPh8fdyUVdSAyyiCXcLovsXo4e",
  "key25": "3ead1ZtVLNKsjao3Ke1U3S7oBDioKFmpYCxN5bgHX7CVjADVvAZmvJSEzWG1jEJ8dhJJPHagNHn5ujfNxEGwWAV4",
  "key26": "oYDaaNEppFhagLukExqEawWeA4CfLVK9DSm6VQmVXK4pFeTnrrgQvzZRrpwph7diAyYG8x4sbyjNjfjnpXfW1tZ",
  "key27": "5sCVwtx7fXFHJXCVDZrHBkVL5tcSuqPiS4GhbqfzzG8dZnVZdsdq5rYr8jN7ayZLrS6LTJ6v9gBRTLVF11DVpEdX",
  "key28": "5cE37nQGypmguS8y2aSHZ86VApNYsfhduGxJz9JH7hJDuiEaXybtrK2MRp5vrTFhR4QnTGqGhXpaU2KHJuwNKX3X",
  "key29": "4WiE11ao2ixRnTVMaq67TfXNCaqrQvq5fQuSa4VAsfevwYov8idy3rnMykyL6WAWB9hprNjeTdQHmZoBypvVVWqx",
  "key30": "5LtavKZaQknqMKuE8No8qFMrUaTk6jdpoGwRjmSnAqGdQ5HARvea8idFyirXj41y8Dh8mr3ZJ6PmLm8wMp32Dnyo",
  "key31": "2zJuajUYcwPCF4WMtNhhamfrdkUfzUoQCJbvqQhUrSpEyaYvLwTXUNjQ8XPkGoZ3nHN2QufdDq1ydvQQBwkmBhRv",
  "key32": "5AWTtcvWoBmsCQgUq2gTKHMC118ne5wVUkCbyMtmiVL8K8uGrfcvdKJTKJWTLhaeJM9U6MZyM3TjUVDY1PCMMzcz",
  "key33": "btrZRaMJtgD2tH9meRFFKbRzsiYbfNa4HHTLJEbJ33mua2uGH1YN4d8VPGjAKGgFPEQ69Q1X8ZAPwf6qsUHBNj5",
  "key34": "y6aS42tKdyXEwSUdxK8sop4VF7P6TnFdwfLRoBtDfNP86rCGaACtHj5nPTQgsXUB5i7mHf4HBHitsJFceMs3n4X",
  "key35": "67cBZj6AWTZ4mkuy1HVEfdF45pQCE1dWdjTsGXGL4JfgyLXKg9b3oEntYu49jHwXHHTqmd4fC7FahtKWUVAjHNWX",
  "key36": "5c7PUWxQwnheC7R6XgD6ad4WCaAN3w8Tg74Es5JczGWv6BEZKbfZJWtiSH75a1eEHyfqwQTjWj56s9msTLpWshJa",
  "key37": "rYcWfAdFT5EW51CsAcjfwGA9GRgRSTM9dPHMWA7Js9FZiHokSNwfua8xN3Xs6j2358RZ4MTVAYtSN3GBQZxNfBC",
  "key38": "4uomErDqHyy4U8wb3PFTMK7iaaRoqFyPWYmGYmspBw8PbLu6rgGVtB1icv4qrTpA64Csz3dmvAUWttynRA1o2UeJ"
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
