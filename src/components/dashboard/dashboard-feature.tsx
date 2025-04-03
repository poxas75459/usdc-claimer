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
    "3sQXWdo6gpEpiy4NpYaHiVH7PQ6hdoEPiV5bz48hJW3ZfRMCSX4odYPdXNqoCEZuBqzxJ27moqdaLUWSH55HaCuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "265xZ5L43okBkMk2fHZyEaJfsjrBc6n7SqqTUC7J6axmoNwJLfzEfW8qgyyB1haRBue3hELLonmVWFVrQPQ2bzn1",
  "key1": "2hJvo6ApRFRiL9FMq8GiwkQyvZXMbbY7Zd8PyE64hg5k1QFwPKTfTA6k4mxdBp2RueJjCA8NSGJr8Kcznerc5TGf",
  "key2": "4ccbnwxQusbQRs2T7KsZn8UNyPTgErxuU98U3WnRdke4ifTvLBMWX6ATqWvhpVmi8P6uyV9A5FnzkHr6SdDJDgz7",
  "key3": "5tcwcrJjCH9T5P5kQRh6b3CVUysxgb8Gxi99oCbaYn4pzBFztaMdSzV6E8CVfHg75WixtwiVmvvZHxhqJZ2zsfbU",
  "key4": "3TicFpt8fZBQw4HxQdz9ABMEpVj6ny1riHgpT9AUa44RLwqzFDFhftsrnLbFL5rrqXRgTCLeFLkLLatN1faTj4kU",
  "key5": "3TTVk2kb3oBqZwpdkLRWF4Jdtc7AH6BTdVveXVE5xZJBuqNpCA9aKo7JatBYck2ATcQLorXzBaXFjdXnt21KpaiD",
  "key6": "4Lw7F4buvyKynzMp2aBhJEG5QwVSGg9gcWycjmByKZmt4M2VmZEsjFz9C6WccTNuc49G1LPBWqj9WrmWHsAjRC6q",
  "key7": "2bb6Fhw8XdgFc8Q3LsnpKKGkpc9j44hF9iMUoB1Z8XuwEHzpydeB1VVU7Qm6judhMnoiAoUDzpkBe5hZP1jWf19Y",
  "key8": "2Q4knn65QcmkviZSko1FpPWoDxQusw2Z1M9ay2x6FJCGrqbHXsuYh2PKA6MchRWDa1LxsJ7bEud6qd1aadZx4Wz8",
  "key9": "5VqmjRBe7kDrLgDGUjLQU5ZE7G8gE2FJGsYUSR4xSXf66k2DHavofknXqdY2mq415bUPyY1WwMB1C9qVJJzsb2Ro",
  "key10": "5pjnkj1NpyM131W7qy2JwAasERYhiGPvGPfTNwqeEP477kVZ9YxFYS29R64CaxwKcUx4vhQ2AmhkPGs4xpG4mk5X",
  "key11": "322iNk1fHr5rRufqoe8jPCbDwr3JhXewGtunjUyHfYrHxpTdY4w2tXbAhmQhv9RBkTJKLu3gMVLay8AjxR53J9tA",
  "key12": "56STLJPQdmCEkSELDwCeekk1mUFYE1sTti7y5b2Cj9dVp23vdmTCUS5a9PHKDVZqQG4XCfd5QUqLW93c6p628wvL",
  "key13": "BCzb4baR2fXUr3B8kkKXc6uJfpSNL6behEmyciATwsSEntjtKEfFoExAHvL4MxTtYHKb6uB4SdiowuJ5zKZ34vE",
  "key14": "3Bp2z1omPnhtE4yMhtVBALvUcCzQsQ6FzfAu4AABjVV37h44s6rbuR7ueB9qGrYWdGZXsWqggJuWEgzqXouPtZ72",
  "key15": "5bz2ptUY6ET4ndcqBKyJ8qtN99Ufo1G1sXzzvh4wEvdZ1wnU5ehaWhQ1vnJpQcAHijJWwD5bBPBEAv12MiKwFchP",
  "key16": "DHZ6gy7SZCmePZdi4XpBtyrTAwqrTSVTBC2Q8U7t9wKf2eyFtX5ddyBn8F1msJKdaXPuKHq6LpBcmfESF1tVAtA",
  "key17": "3tycrdjeX7YZRcMdqpjrYb69Vgqv69SzUM9aTbVPKPEbHy2tLwn9yiF9KxZKDBGGmBrjdwGNJ3yjEq7ZU9heurU",
  "key18": "m7F2nTCAEGYhHLAFtvzvkMvPqVUn1Rk2C2LWNrwQu5avavs9BPrB4hrJoRwJi82YZZG6pTtqvJWsH7T15sG4J3R",
  "key19": "2apXp3ju4KZoRuWtnV1f8GR4uqdQzxYag2UP2qwtuWnZ5SNmtxx75zGD2BcZNqdBK8Gy5r4HUaFm3S5NdFdqVyaD",
  "key20": "59x7pF5FRZcV64Y1XcVqHea7QKibgiJgtj5qbZcjtEEyDUASW9Jrh9cfeSmGHxeithdJuMCcxbyt95132ccb8WCH",
  "key21": "AGbM8rsMNUSAb3UdCLKcYKB5J2716uT1ZFC5JQ1WZZ8hXmeHVL3NBgVoRoRbWC5CZ5si5Zean2fhhfKfP3tj6us",
  "key22": "6TyTs5eMjczbuqnn8iNz2kvY8iHw2hTXcRz2kGRDhGBu14LWeu5a1fyg5zf22BMUV2Up6WqT3TBMavBWHdrSmXT",
  "key23": "3PpsEpYe7MBwxojX5Jji9a7N7UdXCcb9N2pNXMNEiwFDGAjs1FJ9Gt3tK4CX6jzWB95dYoZQZ99rs8PjzNN3NRci",
  "key24": "5m1Rqdb7f5PWW66iTLTfuC5fown9TjcUwmiT2o2MU8KCMz99FdBmZFF8miJnLMyYRMH83FuW4Z5EJyZDtjEFh1K1",
  "key25": "sPUzzGmp9p5TEKUYwjEqrRtMvxh8KiTcxarGoBACmYhDyLmN7TRz1gZV13Aky9bh93D6V9rLGLBbTB69rLk2axX",
  "key26": "2zqnfLdyRSVbj9mbES4sNViy6CV4aJCUb288heU9K7ZxHQeNRhCc6q4tvuBRuzLvXubw5uYbzhBie3iprtCjZjVC",
  "key27": "5gJWdK1EEaPwizDK1ncQ6XZ9KorKWmPbjoHmTYDJAzNP4QM3HcRaJnbY4GAQAqCFJ1erB2ijZE4Zo9CoqEUdez8E",
  "key28": "3tqZ4kaNV2M7RQVhPW1cfMt31hoPVsyjdHGyspnKDEoeDUa3E8N4AeXmzTqYfLXk7G53zetFVJQFoUsKscSUSvjS",
  "key29": "3WuNjdmMfQPzU3puuFEpjpQp1yeksCj3drGyPK2TP4Lin22Qs2bmZt6Ng3ZtWn4BVm6S9hdATZ9QjYV3Eck7yoHo",
  "key30": "3QeLcG9n4HCP8V8ddAqiySMbooy72JnRqM4UkiNdWsfoLrighmSWQLqgmntz6riatoWQTDMAwUwv5vSWbnJa6Tz2",
  "key31": "37UWEPvdnH6C1eBovS34LxX2f25D6Bt2ix8UZAKW1LWjBz423xYM99fLkb7NP4GabbHgxSCrzMZLZsVSBh5wkEpp",
  "key32": "3fRtCXtQEeo12Ncd1o3BfGRcqp3BLBonrvBASseCzxZ9iy4Q9Ub9NRjXRi9GPDPWvUNtJBsqKEi2no1ZM2AFUBvq",
  "key33": "5E5pzdsmfS69qjRnsoW8ExRLqS3QQcnjrqiv8vscaBpNj9gP3fGnKPkaYv7HS9r3C8bzKGJy8Us349D4vQ6MgtPa",
  "key34": "4AZperEg5u5d5YxesU3ANbbSba3m8qbd6TjAgwc8k3VFvgsvGK52u32mNdGJaQL57aX6FzRVPWvUKDfYkCwN9tRG",
  "key35": "3K7yoZiMzJSWKxYFMeJmPAADEdaJMH91Uqrtqcky54tDrJ48fGtunQibhYYTp8Q38sU5nc5pTctGqEqjrB9zRtYy",
  "key36": "2LhGLv7Wh7EWV5aPeMZD9Xh97Re9XWrmdg9koVkQYrkWX8JbRa6siucM1NXTZyZfiiReaodHBaKLqPb2Q6rPHfi5",
  "key37": "5MGNS54hjq4zBoqJZy1mQwDAZERFGLiqdnM9XU9dBLdHNRa3KRzmq7yrQNcKSxNLExBhDpPzcq5wnd9VFDfa3td3",
  "key38": "js9q7k5phSfWb2T5tDGZtqYmcCZAThh2HLQoDyyXiF3Hg4NqTsomBrpJCHDK5WWwhvSzPQ95GgqMGNU7dzgx2dg",
  "key39": "mMXaKDk9ifkKsQuBnEb6Dz8TERkR8bD7w3SGmZ3XXhspHs45bwrDuZfRBVBhukfoQjkraBduUztZaBamp5AdaDT",
  "key40": "3Qe8kNEAC5PBxpLbezwcQiZkUpeRwuEZPzPCKz1TSU8EucaJydU8XoAYwPGzhDYpEQ8Rs5kAATZLkBdrHGKfvmo2",
  "key41": "5PehyVJNoG5FCxZLxpn98xTNgwRKssZMmyr8t6PUvPzeJy6EAH4AawJWEsazFikV19AmY69K4mbotbbFwy2KbLHE",
  "key42": "x5EKZWKUArL2dohHa8Yp9Mm6uTTQiSZffv63nEHAZTJWccH3NqC5fXT6r82BramQ33GYQQDUXrS19JBD2bwwhQw",
  "key43": "4RLuABuQuT3ResXUuVrEF4nmkRzQ6ai82Rncr2DsRqHgwGzp7V7nP7fxdyzgB4coURuQPMj4oyXUfrDqaQXmWNKz"
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
