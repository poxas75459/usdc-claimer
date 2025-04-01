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
    "5zPomaCUj7p5y11ySpjJG1FxBNBxJFbof5svgzyoMrrx75ep8t9x2hY3iq9w62pa6XtZTc45KUfBqcsmvN8hgDoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fhTSv5jYaQytbdVCUbTVnSkoWwSdR3ci6T9hQcRHKLkNZvGaAzxP73JLkrjqRYPYxUMSRcgCp7CKGhjCQpvMP3Q",
  "key1": "253tkZ4eMCjUM6SAS1SfACC1F2hk1WnX7LN7BjayLLpYfLj3zTjyvVmsVDk9aEcyUDgWuG6frML9L9SfvYY8frpx",
  "key2": "3gyttLjPuMzR2Jy3cEXsBbyEx6SYw7fNXkAB8dMe2Nfh63saVGv3jwG8BefJRWyHnjTn9BsTB5jwJGRKZk96dXia",
  "key3": "4UC1k7UN7fLEVu6JQTD6KFoPDaUA7m53D8mc7bY2RYSchXBDJJa114pa1eyNAjWQNT2BjWEb9JjPyhWg1Qsp3dDL",
  "key4": "5rtQhXqPYg9iMpqhayRaL2fsckL1fLXzzhrDqK4xKGHeLfBr2YUzq2gMgnktpcbDSh7ofuChB9nrEcmnFo8tnr83",
  "key5": "3S8XdF2C6VuV8YYovXA9fCRUFoGoRqLZ4nyeVTpX8VmTx67wBqj6r66oaFjU7xHkncCey5xArdV5dPWG7n23ckjF",
  "key6": "vpTGymD5im2pRLMJAna8kFHcg73Bo5zfehPFq2zU2mwQX9WY6Dy1iknRhgPuNzZEMjNAZJNd9th6Z7Rw3XeYczB",
  "key7": "2SEsXEpagmXdUvHT7UVDLHgCBw2SEdfwMzdW7NUk27MQS2Bj5H159HaCjtiF1For4Yef9xPVsL7yvEXLQfvzQ5Zb",
  "key8": "4iK8JYqgjcZsKeyqaVexRsePwUcdu2bMK6XRwiUZzCnPLDoWatEgmV1M8m9Lrg7TN8gNFhwEugChpgGz7Syg9T8",
  "key9": "4tEcNSxn3o4xFYxaehr1NMtMLZQVLvLd1ibefsHy1pESyvTmAkeQTCHSUW8WLpPvtN3ckY5BipugK7eC33FeYSDW",
  "key10": "UjcpUzAYrJuoGXBx6sEmkrG5mNnJ5i72xaMAAzq96Mb42PXjksCEE36yqBv9emKYwhRLT2V5vdckj6FyTSRzyoA",
  "key11": "5KqtdkKJgEW1XS6xdaRUaosGuXHtprvhjqSWHUg9Qscra54yy77q1ynq1GVj3UAB2iAwAGhBkfRG5c1TNpSNS8uh",
  "key12": "41QZodg2qNoinC3Ki9t89eJ1wMUnwPMBFNA1CFYBePHejuxYGyR5DmWyrpQCExsHQJYUDtDLXq3qQ2xYeqXMvDJ5",
  "key13": "3ioGpfkEoY7avf9coUU429Wv6wj4KF6tDt2LwQ2vhYSBMhNf3UhNe3UqGbqhJVvLx56EPaKRjVvcyAYMd15YV44a",
  "key14": "2sZh59VHUJjC6GFL1vfuDq6hrSwqptsbwCNvL8QXfhc7wCdrBwFHnb3X4ztNh5MLhmYy6ioBqhgi3SUpwa8yzAa1",
  "key15": "5XdsWdkZabiVDxhuaJzVjsMHzeJqdPvdBzuuT5vY91gFX5MdZYa4Bwv1PzcakahECHK7yptrUdU5FN7mF7AtpTrG",
  "key16": "48PQ1fw8QVoVuwgFoHNKSUTi7GiwC8GUmvi8WRQfBZ4xJQugRGQ1dxKBCUr51eGWoK228vPSsyvKogKkzoZELqig",
  "key17": "4vVEvxDvazPLG3JyMxrQfEmAKVw5bnzvuTzAcqtKaDi2CiqH6foJ9zAZLhcqzyrYF2k3i7pyWvttcUvVbAwk6kaM",
  "key18": "5DYzRujs5vPTrT1UtNLff1M1ZWk4uQxYcXymuNNYKb32i84kXS5oV1yoaAXQZLXfNdYVaiTqPcMeZbtrKMc2WwAw",
  "key19": "5dSYL7Qvp2Qk3N6ENSKUdFziDET82Hf4F2JuyUWFjh33rd9rqpyFPEPpxJhUh3cecCQ1tx3iLxVBJPQkfW9QLepb",
  "key20": "2U298aj4ZqLvoLcXKFFCbMEWkd7hYGiqV5qMCHChz1s1aqEL3gGrtQKZ8tG6pnd8LE3bmty2B6W1wgfHyZiPscfD",
  "key21": "5THc8EUQ1wgPPvEZHaNvCA1L8J2KevXqTe8YZQ9KEPZ27aMzZBpwPZ5UiSjq7UduKSaPmhjSwBFVjiHCr2G1DJVq",
  "key22": "hDBoMVP8QysFpRKnyLpZBTfbqpJTrJRy3kafeDaKA5m7FxbooR6pFLD1CsmFUXw4Ni6UyWU6HR5FutNHFpn9azX",
  "key23": "4rzyrQoQSVZteY5h7z2KdzRaAmFYg1x58eDhq85rKy6Hz44tydeTKbZ3TJPCsLwbCQ9tqXDJhCwNjsQZN1nPaNGB",
  "key24": "2osmXJDz12bkLWnkBURHK2SrKiWWMwXBXJkVGkNwJhbFekE7rRyYCTW1Z6ZesXyahYNotqy5FxRSSjm7V6PVomgX",
  "key25": "5iBaB4wTMjGWmTFNvtDoTw5dqpn6pmm37pDnZiPjz4Eza4PCxkNxkCjjFnx6or4HNX5inxewJDCGogufeN8kPDSr",
  "key26": "4876Vf2UqVcLQYzieddhB1kFRHdFE5mkT7vAcfhFvfJJri7PDrvBFeQVLPAmzJWz48Hiko7pvZBiaZwoGzr6BX1W",
  "key27": "5q1zjZPkXiicib52yPu3rTji3T1xSWvrbLbBqh2obwxeHxKwpYjGesXg7gfdnm7NKMeUcoS4T54jJKUdwXwXGe9J",
  "key28": "3my33XhzMvsmEY8omPvCNgSgbaKZxuCdZaE4JGVZcYuzC5DjGBoq7ks6tBiCKZSC4SzPsgAk77BCd474sDVV4PR5",
  "key29": "4Jvrx1QowZv7V9Q1K8JQv8ibY9erZyHqN5gqToqmr72NDQuqHk29AsjeJbGERBuBEwimdYfTJQdbZRmg99d3xTpd",
  "key30": "3BxpUwBrH22i84qB84Jc2K1HHmh5JooYTp6QYNzY29RMPdSuisti76TYKWsJNdGmAoMvqs4L3k7e7EV2nMYsKXuZ",
  "key31": "2X2X9MBcBLkeSFXywu8XVakJUBHuEbnYU8Gb5hCuopq4LRPhryQs1aCijS76METCQmYUcgNcQBRnAz4FFBSqYviA",
  "key32": "3LHpiaqHb8kXUKaeUsZCLNya2RvSoWYrBW3CWTp9Yq9jFUwSqyyvAEdan5ii6yC6bgg9oxgP6BThBg7CVJDhXem4",
  "key33": "34q1hVgh8EVrfQSNwtvMgmLXJds7v8ngksmDSL45AH4bVcuuxUyLAMpbE4FsVmevzYSvKm5tZT2FTUZ78q2htp6m",
  "key34": "2zznxKnuFzLhH1k2YmqaToGMpV3QUAVT6tadSe7evZ3XJ8Fm26UPKhwD3TfYzpRJvK7jWd1bSjNBmfJjB7hk24Vx",
  "key35": "5fTpgPkBsrdFxFwPhLd2FoY327xRugeFPzUwTQyNG7JEkxTB52prDyYZyfJ5Vaz8hs6gRRwFdNUpaeBuzZuunQ9v",
  "key36": "4taPeq6Dc1JbFC5YWY5Waz5iuPTNU1iZKvKQAVNGPhVKEJuDYLGpHrozacpWFqGqWCnsMSjHhVydUHHXK6ckuec6",
  "key37": "fFQwJsRMbYwpk77KnXN86Sd1yR6FknN3v7cv4UknSnrpfw9SYfY9K36aLgNyVz3ord2BGJqafzPRJeB8Y2tXR5u",
  "key38": "4kYN3zEFnPN661UHfuAFXLtCHK7V6XkWSGLxXuftxMVZpHwSs8LzxWpCBrHiCeXNUCAbGQKU4zsUg3Z1BKPCpePE",
  "key39": "uU17TNCLCUmP2JXvkVgqGNHdjap3rTPvUbEXxXV9mpcff5NvgdDCEQj1davsqUgq36PV2Edx13oZvjuSCW51mLS",
  "key40": "3m4eZR9iENx5WEGy9j5e2KtBNEThRzSGShdYfgKcs45vZ12x1mKjNTs8Lehb5GKoeTCVaK4k9VKFfdfzkQLPZRF8",
  "key41": "2cmWcTLi1zSYjEGecrSBASKbfzdskE5UrAXmSAPbzKpUpN82KMwmxfV9tG5oopxXm7wPoTo4RVyPe3SrPVWwK2rq",
  "key42": "32Gt8uSFVZnAxigR1hhdwr95TFSwXZYQVnMBB7mC44nBrGLq2KdMunt4Upvj1htfmGBYmzXYeajgBHEXKo6n568r",
  "key43": "5Ws3eubNHh1Dh3H9NsbGy47Yvn4kbPkGRnDD7PzPPnUdNjNfdJcDkVki3AyC4E4zBAbooQsGyq9wVwjev4vehkPp",
  "key44": "o1YwxndUKngP5uhNLVS18sNE74nj6ARoccAVtFD5JvF9MtwTezmbpRzER31zZtFECB53Uix4jwrrBG5JTwSUeJB",
  "key45": "23YEgt6bnBUMUBkj2W1mLa6Dm5ByRnQJcBVFPA47czEywb7naViU1CiPU5gx7ymqAZYUibrWKhVVqTABvK5qD27g",
  "key46": "24ftprkRkvBwu9tNHnDkny6hLUR79zJboBaTxaw8BaQKM4ASW1Jt2NGptVq89AtBePjc1StaVs2mfFqjVSkGkCiu",
  "key47": "5xy8M1kPXKh1JRtrieodmhgRjf6HdTbSepdaku68ynEvYhY1LFV8wHFgfG3PeChJWrTGefzyggEyqWA2HuPkxRzR",
  "key48": "3sPwVuJ2NqCnYgj9D5pbMZm8i1wLyzNGqu2v6SQnhBZnuGSxuXFcvMmKNGE7kr2z7WTrSEMtGEjLumZbskEzWLrm"
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
