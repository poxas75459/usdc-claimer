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
    "5HAR7wsBHtuE6B7rhynVGuhbVqb2FW3QcNJH3AKHGe1jAZsiqr6d8kCr95Mvdn162wkNbbimANjNJtcZ8Sj1YzWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wpEqSMgTiJnAuxJdUFQnfzqhrNcBy6Fac5j5xd5FsSbKMYg3yLPftTiqzt9ZHa97BZMRCSVN9xJgADZspqiyuyh",
  "key1": "4ZX7qbYppxLNxzrNPcGorFNpB44WgAcRsftFwxRv58Srd65qfXgnAHNDpLd5EwcWRB7JsbuqtQ1vEmdLLB8kxRmv",
  "key2": "V5qL9hZ1gbNcX7MK2WmY5QcLWWytFhKgWMnT6wZSdgZx6XZGf6LdJJ1xeH2xLECW4Hrp8CUHNNeWoDgdcqhs2tN",
  "key3": "gqGCMXRyr3KMn9TgmZBFTFNbM3EDr3HpsL3MJQGLBgfiNQbCoL8hta4DqcNa2XHdm5TNYnhLyVnWrQyX4aDpqCu",
  "key4": "5M2M8r9gkP3JyM5gpPSEe84XycXW4TqfYLrH7RFoaLe7BtxvjVei2cngXn8uBEUDAqdh2S1KZud6tQbinBC6AsFP",
  "key5": "2hBazhrbvpzr5zt3xwHT9tN1TP93buKhVJLRYuTB19n7BzYUPatunwdEMcsavcwLwdagYLmRbfSjWBk9yMR7xq7z",
  "key6": "Gw9HPoGP8NBNC3ve8XcM5DbZ2yNUPpTGvqU93UAeR1dFinmjvSkBvVPbNfQog3ogdgUFoubYd74W2AEB3LcVyhu",
  "key7": "s6vbFAxkajMHkAShyM8GRYhQ5SagvYrAS2rroF6XPfY1CLJkDETBCNXZ9nfXmWNDeC1zSdhzChC2WdpLJNc79aN",
  "key8": "4SvkGFpeNBZuurfmYz2KBP2zQQcvdfexsecokWn1VRgv9saCMfmufwE97nAT9crA8MJLpTtequJdccsNekAAZiVg",
  "key9": "XJV8zbE7BipboWgW8nQA62akMJy8FvwFcK5iJPxuVuLxAGmAamjaFWQudZWJqKUEvzDy8sYLUjge4o8e4qnUh2Q",
  "key10": "2bRHPM1gwPxEzjoTuK6bwFxGQCTAdjCtDi8u2RfFY2dUrrSuuR4Ck68dehjHW3KZ1UgzyLSnQJAauTrs5e4cumqF",
  "key11": "3evpxxT38Cba4nTJuQR1cwoe8tUNqiAysykzxYjjG8CLabtD3iH4sbiZZiZGPhnFsbFFiSKen4dQRrKxhdhwiDP5",
  "key12": "5FSSiNy4eneXvhzZg2oMREZ2zH4FCWu4R8G4JiE18Vt5Fjpin8PrwYqJvKBKXTxWGLCjDAMvq3SLuokeG22xcf4R",
  "key13": "256T7PVnYu4CbKFaN2KvcRWxSqD1ppoMgVReFJevKCQQWLTPGLrVAo54Y2gdbSaiTxrQb4c1QvpkJUMqXJKkZGgS",
  "key14": "57MyPURbcz6uZVG1KezBBfGCSUwb5GsryLueeXTSMeFGy1iZtgNMNvnjZNXyqqzq41CGid4tT7UGYyiryiEu8MZB",
  "key15": "3NARnrZX2gDnT4EKFYP7KP6gvL5WAWnLhkNVtZEnYvkvmM2sqAoW8wPAd1cqoHF3tCbhGZPRZX5CT7wHNTC2B58e",
  "key16": "4im88dfqjtXnCpXWjSC2xX9osKsAQBqkCZo9J99JEQEiC3DUyFBrV1dvJvxMAxCcbHbNgBTZiit2kuzJP6uC59sx",
  "key17": "4bdCRgZRXZb95dfRnkV58thHhMVXM5HbhmWryW6bDnRsGZ6tKeiY33x8iGPHRqgvws4SvfxEvmKJuSKEtbKtxyYt",
  "key18": "bUSSgrRQ8rWeyUZVmXwnhURT5J7JvdbmSMM9HFecwxAWnrDo1DyrqwRhTWpdjypUZkVmNiQSQQFDjmzEWs5THzG",
  "key19": "3muLqribop21ndAWVt94q1WySJzfxZJ9K7KyQmVTyF4uULfintkzWSNtihMnrt9dXfVn5h23qdhvGVo8rcww4sxF",
  "key20": "58h8a6uCqgbSvJfoF833pXZsFZnLaq7QMbGSF69LFrizx9WLir4gX6bmUAt7uNHxtRYVNKPZuD23VMr8GMHZoh3t",
  "key21": "FrY8y44BZuUE4je9vVgPJPwpS568Zt3YZT79kRshDgEZtsjadEH9GEFGMWd4BRexekVdGRy5vaXrdKRieYDyTD7",
  "key22": "4YYKm2SdQoT8QpaQNW3Ziqks9stNrZPuMbZgMeKsiT89Yd48E8BjMkQP6qip6LP9TGMGzEWA3DM7sV3HrpypYpmW",
  "key23": "477QdyGpKEidsF522unNdKrowgL16j1P8VoHSJn9T6Wtp9SPmzXQvtZumBAkHRsCdM5coU8UU7KizhjaGh4gucHm",
  "key24": "5d5PTqsKc42mPjRCjHEb1JKwwUg4L2odBNTW3apqJMouxizN1HGcDrmXxjtxBJyTnPy6ihbiw92EKGC4xyouXfeC",
  "key25": "567LiUAU9ShiEd7Rn9E7e2osqMsMaVtcbzZeTtmyTyvnt42AREEEUJhJEvs8FNn5QboXYzwzGraa18xpEMWFf4Ro",
  "key26": "3tuAxprZBXrSqtKominVF9tFZtjJT396XpFSWCdWmZ9Cd7RtVj86YbSQu3z4extiebaFmQ8y8Y7qb6HSLmGrSBbH",
  "key27": "3vbJK7Db8mLE2L9UZJJQRMzBen4soSr9EqJ9QwbRk6kGek2vbX97APh95UsAThdAUxUNj3AZ4ZXQUr2YFkoTW1S",
  "key28": "3dcaJSr2jZxVccyVR7xuSKMtTuqMrYGgD7MKzWkCZFHBnuS2rZKjNS9qnaocuWfE5rVT1fppKF4oLFjmToJZxRWH",
  "key29": "3e5f3wqKiQ129AvgGipFShhJqBmY6NEef81ZnksZDuQ2Uutcj7zzPes8LCmFUBvx1kJgPx2NvmoEFr378bg1j2yk",
  "key30": "3Ycgw2aMJMAQp9pkekQ9pSP3RYJFZqeiYvKdAe4BQjyYveYcrS4DdwNxcgvv1uzoinoctCJG8eFUJ6xBRJsL9Gs4",
  "key31": "5kSfLAnAEVDtdAYqg7dwYXmZgJBbZgVtb4cnScLqFYhzxb3wpKbpKx8oc3a4d5tMAu3YMndrmtgBZ2MxJoX8qsDu",
  "key32": "86S65CfCLFds7jkxT1Yakyk9rwhkfLQhKwtZfJZy3jsh2UWqv9ZMDbkZX2Wz4w43zxgakjaaHkzigPvBUpehBpR",
  "key33": "5fu8GMeHncYfRqnjWqx8ab6iEpaeY3YrvYKBUSrxsNZtQV5MpMWsdX6cRRHHHyoeEfRGe2nvFkCDMReqgG7TLtEJ",
  "key34": "PJtVXcEuX7HxD1AsVs9a9LZ6jk3cFWUeoaVF4Mfi8v824qm81beDMcwr7AHNF48RW8RdwUC7dX9cVNE68uMHSXi",
  "key35": "3MSoknusYu1zTfQwWm5twDpDJiyFo5ofjoKrHeT93f8bfFKuTTUMDdUsiYHHVHSZLrDmrS38bJrDBNxK5G9Xa7m2",
  "key36": "GxA6X14R7L7caAGe4yHNbSDNgvjvdadAM4tQaLo5rNp9Pi3CwBm1THqVacr8n7B45iTLq25HMEWUiYwLEeqoaGw",
  "key37": "2QY9N74YoGzv4t5NkMNFhxBX18CsKEXjraDajqCR1oN76Q2F8SHUoZK6NHHC2oSDNZqvTh5St3i6vhFziNRDrekd",
  "key38": "iSuwCQK5ztTMzGJVNyg1sss7GrHmTig926Tcd658zG54cE2CvCtTeuS9XvnpDdsn9ef4vXKvWtF8r1PeY64CmQm",
  "key39": "2rYmVvS7fwJ1jJBUqgj6y1MfAw6FpzVqLycxEEv85zgnGWELwKUUSqRhJpsRfty268stmMDmC6NavDdM2VDEocVG",
  "key40": "7AT38Ms43PGWWAAn9HGFULHUvpwcbpb2rZiBS1LUWED9dm2TqhJfRwG4YYP8tFCZcQTX4RNRtJYsLuTws128y4N",
  "key41": "55uut8jqZLtpTRir7QZHPa3YTnCCUTjkpLxP81JnQrMisbMw9cgYRH1FrA3Pikc1q6jvXdnVAR7zbVme5RYiKQnE",
  "key42": "2dcpby8GwFG2yfUHZR2wEA6cFu19LMBS7LKvrmNbfXrkg8rz8gxxLwDmSWoXeS8nZyaXMwcrtEf7GdXNvbB9W9do",
  "key43": "55SrvLXrFexmfCUy2SsopuVxkRLwmM9yU8eY3mgTWpQdrh7zrkfdqiZekUgthnaTuJr7RPeDbhKVCbNp3VteUZF",
  "key44": "4CDYE2fWiJMqHPrP6CVRkSH49uTpFsB9t4GwQj2knGMeugESqE4GNdCCnvWoQsamUAPjG1YCdqcY5m8p9RXXvvWz",
  "key45": "3yDng1GY2gz7MRse7UvMfYBqQXuLs8yxz3o9Gd3ji3WBfE1b6ahCJpbe4Vx16ALCDdZAaqdxWkzHwMPwJnWkEVWr",
  "key46": "4cuNKnTRJpabivZGbwvYhF2GnfXawVS4zcX66gQjjsVv5cfu49M1odBKcvqrXi1kgEWYNTeJAY5LUmuqQkNz2t4Q",
  "key47": "5KDFaGbG1DoZEKEkViuKHdJHY1MWQ6KeJmiPmiRzpA3TAyC3jTZGwMrUTTdWR4A5HXwbm3Xyva246DkfwsrCoAQj",
  "key48": "3Svv9UFjzMCNA1dUC4GU6uQtK5HSXURqYZp5BVRXuC3xqznHg1MFeVngmQsenavGEJm48EsN7ndswXiJHnYoXcsY",
  "key49": "28kVhMMDjo8HNqiqKJzyQSGhmGdbYLiZqCVieRDy2G4DerMYbKL67PhWXFoXg5uxSm1dWRtKV6eXfy8TDifBoHU6"
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
