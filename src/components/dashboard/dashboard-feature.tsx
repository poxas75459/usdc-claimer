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
    "4Y9g3LfR9HdBhovSboenvEXocg3MyXvfBvJHT3kMv4BTBUVziSxwu8p7wvup3hyj8QTwQ9qPuQXRUCbZApPSKUmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EZM5dPMwLjAHKQHizt7nuLTCm7SHfLTrLERJmBLv93NhZ12TopYHLioQstoyoEjiL4uo3M8LLpkApBL9iQ4GoaQ",
  "key1": "25LciibE8eTv3fjGvF21iTaKSqh9hqjAzi2GjhHaPGtA9GB9Y5dGHGiWf9HHRrwEozRN6KjR199yDprMkxUkeJu7",
  "key2": "31jdBQb4MwvhswBHZBKMk324DsnBzB7ZshgEsKgx6SMAUmdkjzWSGfNr39SNaCTpMm5kLJkVDYJLwQgPGYZDaJkW",
  "key3": "3utmu1wNFeYfUSdkw468T6o4wwaDA96B13dpdXDEEwm9fJ1vWotmeS1UgBuF8gyD4LiudzaUipyNKX9GvzToMdk8",
  "key4": "4yiKp7dvWk4DBR269BWrGKyfLj5NdH1wLndwpgWUwnpEKUFh6VrcBkGEnhEc1YRchFpp9UJDaz6fJPAVRDKX45rC",
  "key5": "3reTW5ZyBZU4iymVa37djaCbcQ11tfLHWZUMNtRbgXBgg4QQrqnag8k3VKJ2RDR3dsWHNZZ6g3TqpznLmUGREmu4",
  "key6": "3SBg9F7sm9QoPhZadpCmAMSw3LyJcygP5xv3mXJo6BzQSmLVGiqPnJjRDgqviRTBWS91w9DTQudiWpPUKhMzX5XC",
  "key7": "46Jxd3SFGRrf7S2M4Z4KJqP4ZDKmqZNRvjqS4nDFN7jsBr5TLaqfeHXxvActU2Ekyd568zTjFyEEjKF3FSpcgUPF",
  "key8": "2T6PMtsWcbBZsFut3wdRw46ZH4HjbDhD5b5jk3iSX72epmSxV67skfDdywEwRHUnqgs4A5z97jgQcUCik2VGpEcR",
  "key9": "4drn2zHk85Y8mm4sAuoyiawwEn8g8iDPmwJJGrRZLgenh7xj17kbJGQ8x2sHaRNg9w5XRGtcExF3GsJxiCviWLNe",
  "key10": "2GioPeUXEzWVzaAAWfxupPF7GTqpLt7ULq4qECBzZvXu7TpFNbSMuLeMiFTmRiHfhrAFxf6VfyUrQ4JbzyRM3gQv",
  "key11": "4QRrkrCJyPQbAEhxd4wXQc7iPHVR763VigV7bDyoRrYmt682NAHizPjJSL7aSpU4jdrT5v1CiqtF7w3RyVMZvpQw",
  "key12": "dUSTcoYhn4fqtNvPnQBY3qW7jRRhYE15gEcUScvahsZV67LDmtv1vwj9nyhGLQE6D8Yda5Ed9SBXoHYrtnLxXse",
  "key13": "63pjACtx2h7xu6NuDt9QioAdEwtpdnUJaDvjSg9YgznadBka7SSq72w17b3VsaGoDUy1EAJLYejJLd96mYnXkDhE",
  "key14": "62RRMd9CzQN8p1DLLd7km5ZvTkzuzyktGAaYTzAxEXpqkAuuXtWp4QWzU2PDANVwZVm6mCBpGXc7z5vvsbdPxVbq",
  "key15": "2tfs3Y1b2LXbAkkRQU1uetfVD2gazWqN7H4RHivx4kpEAi25XCv9CgNEejStKSrHmf3hEiXQFhsr7r62UuiQcw82",
  "key16": "5dFrXMJoCo6wznrjAem3Y3LMRSA12g3xDEJ6AR7ujPhu2Yh9o9vuEkngxxjzoBB7JacHM6twFfPwBseEggcDTYNy",
  "key17": "3B8QNoEPtrqcT5UTwdBGWqeKi2Q3WSvbqUauD7kWEj8Qp2pY7ztsdwNbfppeTvjgzhNRmgwy3VJHpgZP6Mqz5J82",
  "key18": "6CBJaaDYDDNerfZP1jD1F8e6UWUhiZNnGG1vA2PzvSRCXXhnfxc8g5DHGdkU1JpucLUnuy5sgoTGoSZYGknLqNd",
  "key19": "48aNpk5poGnZHjNL8n8CBGTfq4jr9TEiGkQJuHe7ygeexBXAEMo1AFZ6rVzDz5quoGER2frALxhkLQKakXtirFJo",
  "key20": "32d6LdhsgKgJSKLY7TeKaCKC67uWKJMJR4REyxBmaM4PqckrXE5eesQY6S8LTJQQq2Ym568nSPoAfxB9aXRUUqWR",
  "key21": "5XrSj5wQweZV5UAtmGGhnRkSEoWMozVYviqrCpkGaB1ikcQDctuBE9SUTjqqK9aD2bwbK77Y76JAb9P9Pws41z1C",
  "key22": "QxstP3JdK3J1H4pJucGL6MMSJ7e7bo5GEWJP2Xc9fstqLHhWof8tBW5tfws8EqQaWNTZXjaVncjpDTS3mqY6cZL",
  "key23": "4Fg55EzyNuuNSRTS1WCZv7AUoqq3MzFHk6SGvgpaCVW37ZHVSnDGiizKRqxFhajpMZzM2eWeuj5BasJhieC93xs1",
  "key24": "RrmqwyN5pF9YaHtzSnGYRE5HTLUymRqR6NVpXX1Uj9uryTAg1a3mZvEWzrqbCoccnmdTDsfEv9m3VRctutYAQKV",
  "key25": "3qwzW9ViNwyWEVjUXpyWijfpar7JxCkorjRMtrJtQT5E4e5nidR9de6ACmXF5CojXxrcHme2pFEHr86oJV8mjQW5",
  "key26": "5vtofwFQdWEmgPnzxYFn6rb4ydgBYNDywbGdm1AF6yVpSGNWuNguV8qmBvt4jCCZ5A2FcDsYWoBZYsfhtYgWUr4L",
  "key27": "5Jw7z4fJUYCym1uJ1HeGn6uJ63neBeTp2x8WKXqJsSRhsytpPF4N1tyoqUScakNreKSQxHEcfy5RBXakm4r8zV7n",
  "key28": "4pjj3rLGtZ9xd3RkiLrVA3j4ESpj5n1HMGHzthGcwgwGR38i1T7w6Cs71tLWqsPsyHK6RGEyZor6SyhXwK7GUZJ8",
  "key29": "2o2yAFpP6jqMFAbP4ZxWNdgksatiSwyoro5MJw47z7FmQxUjG5mnGNdsMzMpqr5UNm2j6wEL2hWcHUhXVRY8jome",
  "key30": "2e2MG2YJWiADbPmpdv9u8xeyvRqeVVH1ZHhWzrQYQ96ZW4EAuoBtgghJHNwESJupik1rhThnB6n15Z5CRK64gzdn",
  "key31": "A8tJqjFyg6ugE4xY2RTnhqSURGGiLE7hoPc9QdBqMxxyXYv5KYkw7AjZigkfufBdfar3T4E8zYV7amD2DYUK2B5",
  "key32": "2jgmYL2qrKM6cbrxBjHWwqi2eN27X5enP5X5gb2gxpAg9ZSYxgyEVaGzLTJuHk6LVpv8SN37ph41jA6frjsWku6F",
  "key33": "5KgYagH5js67e5mvibLxzXyDUhzUKADHELPxYphxSr8FhSwCtqtR39PPz8U19UY8sji6KeFaphVRDNXpM6CAMXdK",
  "key34": "4gxBpXVdrBVEssVJARMcoj88fib7dvrfMmV26b9mRXGb8TQCWSyMsD7iiCB3kUZuSzD8QopyHse2cEwjU6EdHKwx",
  "key35": "3bsJ8gFhDy7pYohCEWyG7tM44ZC4qRum4Wbu9mW6DgxXwBvvFqyzzK4VgmsJhZWgfzKzQS4ztfNbrSqMvJNu5qhN",
  "key36": "2U4scnm9sB5Je4P3kvDYj2P95t9EMiCC8wp4WLrZ3riTgGhpUtHmUyjfhrVq2UQ1FyEisfUUFcSo2GfRv3eyvg6Z"
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
