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
    "ZxKKWCQfQgNBh3UES1pYSWKbL1X9DceKLh4F4KdKW8nS4WZwQ6uEeJ9qT6k3Ce1VHkGDowcD4pRtj9o5ALeZdm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "osqB96gCSSgUopgFxXaxkVawwjj8SvY3V7JiJVWM1HXnHxLksAeoeSrdHmaREosTFAXgGXZZPQ5hwaEGvrkhbpx",
  "key1": "ysaYuW7KMRQBZptW65m4vErg1UZt64oXewgmTzM6YgtMyfYF8KfVK1fYJZi4kQMBkmsWg1kqx9y8LoedhFa9dkJ",
  "key2": "4T8Wwa6jBXdrC87tw6Mu5Nq5c2FiM4VK4tRPXCpVW1WU28968z1cte2Hb3LDpqojsyDMchr3cbksLvtcYpf1sajB",
  "key3": "24qWb2DVDWxsKaQ6z6GP6vzjSnv8BRHDVWakZVVdGqPpvk4nyX2Hye8DMoY9UvSRYbsiiXhVx8ZvUowBYy5bufi6",
  "key4": "UFM36Z7jxYrZNrAc23ska47aryfZaC3jpcVj56dM4HcQ8XZEHvmoyUUmoU917ZyamuMUZQhfPh7ngMr7E1u2SRf",
  "key5": "2PWqLvwzcJn74Z6qtvvrE7E7FdrxDfhokQRGbGWkZj5s1SvgfWTEnxgD11k6cNZg8WeNAk9zHyKb4gPqbxshMvor",
  "key6": "2QKgCozqGtdhU11U5HAbxtToXBszvnjdMUEYwXAnvn3KJQ63WBtJ4XtND7jT7R3r3QANHfrBuAXAqo7xKqCcmvUr",
  "key7": "48WK7pzBSBfh7u2S9c2WhnJryFrv8mLtYVGxopEBNt2QCfcqUCCh6NtydZwh8knLJE9siUJwER8XNFiTSDfiqMeB",
  "key8": "4yzNWGYMwxXqXwgcgKtSmaKEbp7RfWL6J5HuKxUqWZgrC3JTjTT1RvzMWMoguC5J4KLbAJ9mW4dDpxV3cNvNeu9B",
  "key9": "5UdcPypdtx18xsDJ94WjMFgENQiNsXCkuzo9gM5op8dA6SPv65f44BSqT4Rq39XAX2jWNThicEBLdywT4ezBj9rV",
  "key10": "62hFoBNFeyGUTmyeQkuyp4DUL7P2W4M3fiJoqCExmuqE1tp8W7jJofMaftWyvckxxhPsXrnqbYzBYqJFjLrgXH9",
  "key11": "2i1xQxnthZR6TwF8xLbqgZAgmK6FsVCR7wSnZ5CNE3qF7qyjUyoAdHeD7FKidF9FTv7beBxnXKaoifPkVnV67WRx",
  "key12": "2Rh8B519YGqSakzn4UJhVKPxM154dcBC6jWt5EbL5PBv1w5G8CP75nary6Z4HymNpWXVPsjGw6mF9zznNVxrJGVh",
  "key13": "3qt7i1hv7bYBEaDBQHva8CRTsKhgtQJFyhM5NF48c8rYMyrRk1DhjBpP73Wm3SDPsz8xCksvPwm3Sr1jcxFwpkqb",
  "key14": "2Y7zwscGUKhdX3thNCGfqc26C5HWuWLwvT4TFpHxz1vCURWsuih7wXkZVVCdQ52k5gTDVWGrNvVscRz6ivBPZjcc",
  "key15": "66yzkiXtw67ppvKiDAB6g8tLVS5K8ZmPxuXfzogpJVPYksuYjzdAxx86s4VrRrCYHGQYeY7b3G4V77upRdfHybvF",
  "key16": "4by28aWKEtfZtpYGe8xxhrtWmDSisAhvQN35oKTTrTNfEmkJ2rog5hUxLy6VkMwAeP8BzUbFkXpLHDt6oj4fAiob",
  "key17": "26eLWfrXZ5jgcVzrTc5o8t31NX1o2qkaEnJLMHyNj5uyKts6wZsdo8xHAQpDhqHAD6HRaRXgUDMhgimtS76t3qU7",
  "key18": "2qPYVPUtBB1hz5TFLtWiyhBF26MfcoLXm1MwZZAGVXjVYZHGiFXR3MjGWBm5KBasqgzbn7AgGzXBYBqk1Sba4CGQ",
  "key19": "4HhvrttcabHzyGqkA4PPh1nxQS1dA8RskSEyNHD1rcrgTZhVe3C8VPdPELPLE8mTKvfH4VUxQdGx9EsKCtRcjgYs",
  "key20": "2ZHNzXjTR7PeJoD8d7zG7F8Mx7wteDfgr5RrEm4n7AsqHBLZScKL1Q7WucDChR3C1e7BkaB1oc5asZBvFfSKFoXC",
  "key21": "2H4QxekCX7g8StcNoqJGcFYShr1QffpGmKYfwDTDVCEdiG5uQfxZaacAr287zUbD4dLDSydqeptwghNfYKsL2eLC",
  "key22": "2TcBnW1VAR7GXPmPejgdkpo7AcFxgLQT6AfxMK4xoo4rDUX9RRujcE6zTEsviirzFHBaxyLVc53E6rY3bkdNom8",
  "key23": "XB6ttxTmZ6Csz2oSu9gpUKmwABkEbLVZ71KMW1KL18xjEwVaf4oY1rF6dv3qMcBFab8BFJfzHqq5R1mREW3RvsX",
  "key24": "xyK2P2RSZop2CbhgXXAM4c9iiLwyw7k5D5dDqkQzV5evZs3FYe7Cocvxg47dn2atzj8EDD4uZjhzkHWWT7k5Aei",
  "key25": "5YqSPTsfjypKzbXLAoyEEs8wGaknqVUzCTpK8gsTyCtZTLjyAHmB8bcfhV9MNkxw8d8wEwKBvuezjbVxwTpMyg9L",
  "key26": "54bwatFoMKdnsT5mZXxNaMLvhXC5yUxmGz8KXN234y6tRRsqUWeXJB6aDxhUDrLmQCpLvYkahwmw57yBtAuhthCM",
  "key27": "2ymWikwK8dVYuoqBpLsPM7krVjT1La1ZQRcTPTLgF621VsSDusHyZHtrzVrayK7VDozXMmbuEuFcpQ5u9XuSxUpR",
  "key28": "5MhSYqa6Dgk9aPHmm6srQw87q3GK53EwwRe883DqcQSRMiokc26KwSHDF7cn1KouZmYbwJnJywGRruC7TVpF8HtN",
  "key29": "43JD4bhJfnpiYCeZmVZE6p6XgYcSPweZxRAbppHJEyzhiiFq5Ttd3QZZqquY6PuojATPioQ2LXX92axsAzc9xc1o",
  "key30": "3gwuXun2CVXDpFL44HRkYmz6dWpH6ujhfCU7be99cww1M9uwmG5prpxDNFznxkpUdvJZTzWLh3XRk16MXtTqPeE2",
  "key31": "5Dh5LG62NScMy1djnn1eTze5A8rTfiWRnY3XNXwASPHUx2UCqa8jEowa5UJaTA9S5xtBCZuwC5SPnjkDfsGpDBN7",
  "key32": "2RPooSWzuzhkaR3qnXLhM8L1aGsMe2N9YZhJkkBo6oyhP94pY7gh28ADT9w4UjpGE4uzytz5xNbKw9ih1vEv2awY",
  "key33": "CeyXffJXtkp8S3oCXoVbNaxKUfYYs9bdbLWAVK6e8GctfeDYjtH85QKAmVj86aYPt5R7H7FqCBHkVKmz8Urbhnf",
  "key34": "kKMt328SKfBgNVYHTcd8oz11hzVZqR4ngBVKWmJWecSzXnAWMUpSFXyhYa8qk7zacCZXTu8KHtN2VU1qpgGQk2u",
  "key35": "3853KBbRM7nRtBHccBugTk6gj3etUka3MhuFY47c2wwRjhgYgJEzgafSdqrYwPdK8hC3Bmpv4r97Pq6F1198uu1F",
  "key36": "5KT1YNNqN2CEQxJnghjBm9s2uXo7WYKwKvw7UnZe8WbrXCdfZZuscKUMwCfFNLeKMHtWturAWxa81f7reV9FW5zC",
  "key37": "118UFJ4RLrbcMzvTKqs8m7vH1cRpgE9or7qdXFH6AW1PCTWYFYt65MFkDdL2jxrVwF5FdpLeydJxyjexSEKUa1Q",
  "key38": "1CZcfMF5ngLi27p8ViNQW6wTGzV9egt6p7b5BUc6jAr5j6wFMwbY6qvXJtY5HR8k3QS9enkw39x2w6yJjrcjcHd",
  "key39": "3MfWYy6h1vvuhiXbd2F8TFvDSut9fn4G7bGYnnPhVLVBwDpD1HEhwuP3RWsCrohKBUpz8x9Dxty9U7SZja2KmKjs",
  "key40": "cnWmX88Qx9v9QNc6TKyJuGnXtqM7zP6qgFfmX6nyo2PLmJpMLtbB2aQ1fzPbLVe64dNjiDvoZgssXhfoUgxjEfG",
  "key41": "57HBE5zwCrc9BM4paf3s9XSivCy8iScubaJnUnS4sRFiYMsGi7e22SNXmqQB5jz1eYJSQ257RXaUwJASB92zhejn",
  "key42": "51BvuMg3hE1XwejxHEVhcpxfFiTKhaKvBudMp77MBF93CWrfGtidUxFoSBcRj9bZRTqiULLrsB9UqApnYxLQ9DU1",
  "key43": "4jHWTqb7ykZryXvoEkJ2ebtZbWfCgZyokCGkxXE4YDFseMm668YqL33B2t9NBzCbhCj9ztu4QNhYPqZuayQiTZtt"
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
