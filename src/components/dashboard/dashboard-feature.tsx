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
    "4SMK7w73fPaDUvZEQkVSD5Ae243Df9ZgL2Pw6aCqdhHy2isFaRVpi538yXonfhuSHcauhMCLUNVW2uozAL4Gfemt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wTUxz6QUjM9SPmH7iDFZHibhNWgHKUfr8necA4gk9esWJG1mgoYpiqwNfC9dVJ8YFSAsKGF6BZUSCeEMc44G7Kr",
  "key1": "5nGZgDwtS3tyhkmzCj1WCLkGWjvP14SmFr9y4cUJ3dwadm5BR2i4P1BBn6KcRjWNpGULuC2SVNgshXogNcPxUfHd",
  "key2": "5iaji6kr5a4p1f7XVrdfnqxxWyvKP3iWXfHk5hSWQwvkxkbH6LQDWaQ9vdeTaobqmicGfGGxDYCLJp8auceowHje",
  "key3": "rdkmArwuY3pVDeAgpm5B82uFvbuLa5QVJiojY5jb8uKvKAcRVc9dh1GkHCpveaQwL86VV8Jqi8V7UWDFQHQ5yHx",
  "key4": "55ep9ek54DoqqKFHAz2MJ6WWZoNEvgoZXHhYvkHwzJPqa6JzDELg8Xp9RsAGHwSiBSac6UmZyVGtvVwwp3j5DFwq",
  "key5": "zhsGotXEdcVTSmMeT1Vrq5nXwZTtLmbgWsGm9JqmZWXDwTh9cWzbajEH8MchpnWVEDRJr6ZcFVAJivzGajbVQ6r",
  "key6": "3RTTgcVVaWqAXQZu5T7sU4TNnRjoezh35LGXsaRvTJuhTCqHzWg3W1iaxeEYkU6taXKs1tYxGk2r9tMAYpbjhX3m",
  "key7": "29mjqqfjmbJLyfLwsrhNkYhCUENY2Cdp1vrYfBUF8S4qm79PGVnbQae5sTbRUPQiHBKJ31MNcVN9a3b8VsNz3cQB",
  "key8": "bj5ZiwLqeHRsiqtYuZmXVeYLgyy5Ff2mc3QpmbTujt4wRZDfkknwZGmLpD5hqCggTU8vSYjtHhCdnd4Lgb4bVzx",
  "key9": "2LJvknwQqzQJaWKiAV8CmJtsSy611fpH3WyNDNf5dvsSBq67rs7saCUtmyFeGNR3mb2XqmnPrLeDY22j5sBkLV5r",
  "key10": "3gCTd6QeKJyj1x5h7LACp6Rg5T4fPmGMdN2WPEd5vgFQGKVXGZ9hUj8nEgiVj8W5WwQHPPP21AUSrihgEiFqiAED",
  "key11": "5DsTsMVbb5ntzQvFmL1khHURVzB75ducHYCzVrtGiqgZ8sBhF1nXVfCmcRjAiCMT9yvsaRwVn3DQZhftKzthBsjc",
  "key12": "wkFoDaGKsEsnx2YfJDgoSv63J2FuyDHuMZ8HBzLeEfSZjjWvD2knc3TjZuomhXK88AUxi9rKEkTj1oeDjbQ1bat",
  "key13": "3D3tFT2Cx7ivRqGFZYupGNg4KJkahadrVo4uGW8tWxuoN61vkr9sgpd9VwW8rhsJxs31d3Z5FSoDVgwjjvrpL7Ky",
  "key14": "4Z7FibXqWBprDYSiJCRJYvEHkmu3ohqiktVzmQtL7pjFKUbLUKz9ntJZjf1mEEJjiPs71Q6J3ndQCvP5rif1r64a",
  "key15": "2e15ubgHcG92TxuJvnq7g4oxPUL55fdysZ9Trg7vVFxMka36sPsRTXnjb147om956ihz9dB2h1HfkACssZhSAA9k",
  "key16": "25e6xuCGwQn3WgNVyVFSw8YEMUZhCmbVdyjjmmvrcVMykJrLRPYhVfQ65u4BhUJAtb9T2Pi2LWYrgHsesDr54XtU",
  "key17": "AgMGNi73T5T6JJJz5rkhksq4HQ62EQT4cZAJFRuDNa7QrTYXx12je1EMM4KQnJvuKFmhdjWha3FfmsTPCZENjrw",
  "key18": "kLQJVnWejn2xKKZjjkLZ2yfBgbpTuaUvr2fzrAoDzTC4qMkM7uPaDxPczixEpQTDzifGzPvGmRFKYGQWUcEgJRU",
  "key19": "28aE8dZKPZZBZXbWPrwXPKnUHn4JCraKoY8shjYTqzsG4V8jBuPBh6yMrWn1AJAk7ctS5ZBT4GeGPbhQwbk8FNVX",
  "key20": "2jCj9DKeE1EowpYuVnvw7Ju6RxxtXFJuUHHguVU1yU6dFSnDHiNRd7B4SEtA42BXdPW4cV33nKR8SRKLTFU1nj7g",
  "key21": "5TXK2iDtexyYgDvQ6Y9wXZBns5wB8cP7JWkddYzXx8DFyxPJehaUrNQLvkSn6Ropw77kYW9suSwUu6hzpJMr45tx",
  "key22": "5RgANpQ5vdWg5GLQhiByoEz3j9nNX9mYyujBszrZw3twyJNYzPyvqryx7pB8XBEYwnyK26UxhcPgDwf5S1UwsKhy",
  "key23": "5C7SdHJ2n7GQdaYcuNXZzuix8hMfLc4T74jWp7Xb2sw36AUGtGYZRXC7zBKxaajZYGMYDFNiCvGNmwu1jVyTBhp3",
  "key24": "4yefHhq86JgG6U9cphMUCSeepiNUNSbGnXdtsqxuLUiq9e2Avp2dbHjaGTgBbCDXXuUJN8p6nsHo9JtU1uenXrTw",
  "key25": "5bBF3EGLeeoCTjP8nv9bsyk4UawMfmbra1jTzhaXK898jVycVqh7gLKq9Zg4iAfxvxkYUz84m94REiW32mFZZGbT",
  "key26": "uDc6SpQLfqEdh2KyCzag8SnRR3Maru3iuwqBPNVesU5vycNaTyQaZnZAZnXeWCBnqWibE9T6BHKRe583dp9WvkS",
  "key27": "5KH4fs1X5SXRXUCs8eQYyth7NxcNcj3iCdy36FzWP8VNsAv75Q61Q3Af9fgb9rgcHF1rN4LGdfxL6f92Mjem5RYm",
  "key28": "2yRhXks3jMtyWrbsLa621kYa9EGZFc1UzGFZnzukuT4Fn8BspvFWkLQy1EuBseNcP164PQnYc6tPQb55LRW5CC9L",
  "key29": "jvtpjUF2J2f33NEsUTyrrt3zEDtReqSLKnb4o2dagzehk9uWkQBAjSQfRSpephDf8rmqX5ZiKYjmZQ6xGjiJ129",
  "key30": "2VSjuPhR4GSbXeA2Uz3B2tdbb6qTmXZ42fXfAQMLyLshf6SiuZe1JmT6HjcQRCNAoHYZsCh5y3fotzDR8GMaNDLc",
  "key31": "2wE9ZidZ1RHkGsUdt6FwM5gjJDNFJPypFz1EczWhBLVP1WeQe8BsNcLT2h4yuT77Qzm3NX4sni9xJk26nMS7ft4h",
  "key32": "5QBGTH7zDbng5oaX9S8eWjRXXeSyUMNnKKqPNYe6cXx8h8rJrM9myudQk7vEacVbcduFM5LzeNjAmue1XC4BR2jd",
  "key33": "4wpPn3YeJEBUx2tesa7u1e3WXmTMQqj8MDH8bDDhur5bPSEUiR1DsTJssJmDvkSFUxeQ7P9hxaLbKcB25nwvsJM3",
  "key34": "5Vd8CtxB9EooDSxFMpQewxnnzPPVwWL1mK6jCAATdu4bccD1PbvX8XnSq2AsX4L1JH9aRFQo5cFpYLRFzAnJyeBi",
  "key35": "zmRNFMpL4dSg9V5joPeKDVevMDgvEdjwRrWtEKaZLS36ezYxr5Uhwv25tvbvuYLhAimdL4xGDBWVo9guNEU7np7",
  "key36": "1eZ9dzbP6mig5wM4PtpzTX2oDX6VnUmuWJ5dwk4LpcNtoSJzY1inCWjSknaT9ehdVu2AYmpkAxXcG5wqbYL9A6c",
  "key37": "uFT5xvoFNvFAwSRmqx7NtFpEojeFdspnfCG3fMFuypt7BGQpezYLopqRePsrJbnSJzbRDe59Lhi1cCZCT68eR5b",
  "key38": "2e6cA8vHooeA2V9CoztNCB6XCjnUaqyXSJbFxe5rgcMfitbrFRJjDiRGYPHJjv5KvLGPHEogddD5ZCJyYN8EYAmX",
  "key39": "3B45uKXZnLwK9pDcBVeevnN9qJKToC8cq2jRPx1TSkrNFUHqpSpeXePdGmyxWt6gWUPKfug8QBBwUSBqpsQ1nD1F",
  "key40": "3S76gTVprXAcC2FV1LWCzEB3cDzkzWY7HoYnHxmCAdtt8B5B2XiRyQ7qC6d86B45YTKMQ6ja4W39c2wMmEZgdh1R",
  "key41": "52XRgr3JM9tkTtZSJcGKHGP5uJQ8DheUubeELEGc8HdQHqnhNRkEdCm7BhYMsvdQBxmakx3Z6w697p7ZvytAaXZ4",
  "key42": "2wDoRRWJDFPXiTCUfgLZ3XuvgGXWDDVSUKEXXxaBx7qtR17wafLPgu1RK1cUvfRDzDbfCdC9PMxE8n8a521EtGvQ",
  "key43": "4kEMbWgYVdY7UvGH5XzMYFEhSZqwWLaABzTe3vpwDD9P89UUPCApiz6PYGMwPn5RnZTpVsQfrDvp16kfqnVfXYyd",
  "key44": "3cdsYoheqgrJ5M21sL7Dg922aYYXkqpSGVzgU1LrDCE8znknfZjKR5FP9NgPKBYinYk9V14xDUqxiSvyaSPUweqw"
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
