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
    "3hXQsQ4ePz97Kp8YjUYPKjzYJpgvcMNtJb5yw9CdMksTNZen5XgPjJaemuoVP3RJ8RD2AytHxGb1r3qG1uAVxet6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MS1QqUq5HkDeSQ3U4XofibjJV2eUAtz2SUv39u5UUnhjhVruQAsu7aRTS5P9Q1dffzsE2LuoMfHBES8sa5RNDER",
  "key1": "4qxB95jTs4zxpubu8sANMs9U2m3kTK6uQK8AiFdpC8GAxxxUW9BgizqUm6GP1C8ZJ8KmCMYhr85nqp5WcwvHQ9Sh",
  "key2": "Tj6gD9W6VNZtfgnHV8GyHcAWeKkn1U3KEMd5Rf8ZtjFZfQ5fGG2Xjzjk36C8ppYGBeFDZRESy4jBaxkAdodBoLL",
  "key3": "4bgymMW4YJn7PEAVzHtU1ihieC2L6vkn99sXSgNq1ddtiVkoEP9WxYTsuBy9rsMS5Rzutekp37A2iQ2nX9YeEd8k",
  "key4": "jvoLFFc7yvnYV9YmsNnf6xoipJFmVXWReUit4CXrP1KqckUDm2awiSGKLMmoz71mekp7nnSBKYwaRJ1gjY4Ny9J",
  "key5": "33HGQzQoAz39S6MxSBGEhr71ZFpCrALZ8q5jnkWeMwo9AUdKRV7uE4YNU6VKx2zRJynwL6fzkwEWUpsqrwBfQyfc",
  "key6": "3iHG5EffMFuuYbBTBNMRMgbqtNB8DmWzfH3tpZEo8gNMYBGdUUuCuzC6whyBmk7oe2HBQ1cVMhcEVW64wkgu2BxW",
  "key7": "5giNijD4tm6ZzkJYa7K3pw2BjocmjMdNtgy8EWkDtDemZDyGxhzUe9Jtu9WHj6XGDTDnu9Wr4Z7LS3uVc21QjcFt",
  "key8": "1VvPNEm7itucPVFAXrCsTeyo2JDx4GnfoEmwTFy4TZHrKDfzJBPSMMqX31mVawh1nB1MSMELNa8n24fEFe65JgW",
  "key9": "3wrnn1mH6whfJRoscbErwZnycirgqdsGabLigmndWt4hi1mXgWSmy3cjVqd13kJYjYwE69qgzbuNCQDFfAaGLyRM",
  "key10": "39iZ5E72ak3BKmNjdk48uU5Ua7h5Gwd26LSRJURteAxchTnDYuBGRgVoCAScUtX8THFhHXVctSCZioMhycy3A8fc",
  "key11": "57hRE5QB7xnKRVbfH46Co1w3aF1SsMhvBLYnbnpWK8TZBs9xc1jHrKNaQDk1f5zPeyhf6RxYyGd2DVncTngbnMcx",
  "key12": "5mmZqoZW7kSGsx4RNPXcp87xsaRjBoaq8myw5879eVhotMfwesyzhkWVEuU6xf4uk24xRZs2RQ7Af62LUZWomF7S",
  "key13": "2MybuurSZ5FPDzKr9cQ6xjqAGMjjwTzH9Gu97jBEuqTKFweKgJikrs7vPTkDCrrAf1om1wMuCiXNwc19uGSB1dH5",
  "key14": "5wQb8ftAhnpxjKz8BfrqtRiFNsPV1jiLCXDQ8YhckhQw2mY2mNze1MUhwDF7bxmoFzV5ubAikPSVzDrwx3KzYtwY",
  "key15": "3MtUogr74JZJyntt6xUKqNNfBNR9PJEzkPsN1f7AeSSsa6siMb3GmCyrnczW5V6xbVhj7W6gtdiSa9tYq96trV75",
  "key16": "4AoPghxm9SPtUpzGTPiwBmXNkywpTGjp5wPawdEaQsDKb3zkPSNHRTt3wXEDWVBcp8dy9V6PTMUbpTDP6ezpGRYM",
  "key17": "24gkG2BDdM8WVsR9ShAjh34ZepWqyx8NHqewkr6eosPfoVZ8MKd9uaDSoWbYyJ5dvoXJSntgE8qENJShwZ5YwH5f",
  "key18": "jwJSdtF1X5X9pwbbzLesjKnXLVTEjfz19X571a5mcrFht8Aa3YqogutHxYU4JnAfTCYxcvFnwytsmeGaoSW9ue1",
  "key19": "2p2TYs5hSDZc9AMmEXuvzy8NKa6zMRJikAMRsod2snCLefApmAEECodsrgQxQ4HDQMc8eki9qxg56FShQPfRSjcR",
  "key20": "2BmyX5iuqbnDwpsbU9q3CpYvmooDtY6BLEoLrTLyTq7vUe8bq1cVNbnQp84EEyWXwRmUZ4gPTzsoSuFw9Ry9Zja7",
  "key21": "5sNgudc51v6WG4TJU8TWbKGFrjguxdYaxL7rneGEKd2y1AELqNr3XM94JmwtRrfn6EXEkhvDrhgcKFhXHHfB5jdn",
  "key22": "5AbhbtdCqDJZ6pGsgfJoa9EbzNi3FZhHtcTZXKEMgWTnW9UMC1doPuxY62xPUEcDbDeWXkHhKByVtwNKn4tyZ9eZ",
  "key23": "5ch1xnXKuZZfdP4tfQ5UQ9tRhAPbr2gRj98iskMZBfuBtqBuq6GcowsSxj9NaQMujnXvb7MXGbZan99BqNNaKNFH",
  "key24": "yh8g37M1XFfH686ybWgd6EpwPNZyiroitfL39DzspwG3Abinb9c7mbugQ9GnBy9EmNRCDra3fGCYoPaNF6R5dEB",
  "key25": "4o9dNimXuNMBPdMjoDGsou6UdpvbHaJs5oZcbHVr2iJhkRfSXN2B7XVRjgeoNRZUhwehEkWbfhWZbTL716w6PvGt",
  "key26": "39XbgTZSk2h1uf4smq18KQgmeCmtX5MvD43tH4yN9CStfkSt4s1dwsHdidVx2P8xKEMNSubnoDMubHtLPZweHyqy",
  "key27": "2U2mDyQdBs69LRyvsBxroQLLbsCLyhLfmk6p6ZuMncSffMjgkzqa9kcWBekmzZVUS3q2EEtGMGrmx7dhGyUPQPLX",
  "key28": "vk3Vti6iwjCNQV3Ppi5TFMXY6t3KbekPzbz1q8NSTqb3ScFmpAGam5uWhtT39ZdScgCDQpxsSe87dydQM4n8pp1",
  "key29": "4sU3YBfMok7W4Nh2d2E62wSu1VuTZswtKtMziiutDJM7PQaRiEJ6Mse2kBg2aXnEvv28vnFd8DD3Xxox3BRqwnMr",
  "key30": "5Lo6ETVf3s8ErtdHKhKHDZj8hVckosfAZwWXA6xQPtmgAT5SnaDdHaYwEVwVCqHdKcrYwToxRodjVayzaJYAspfh",
  "key31": "Xpr4iJVZ63L7H81tjtrDuQ65a1ew4Ndva3p3dbKsfLpFZWD1DxozJaRksdhsAtfX5hyrKQHFdDZEUi1jPdPZpaz",
  "key32": "5r7my1Xn8nLaYphuUjABGd8Y6AEtgoXuhEct6dYbvFcSZvxTW6aJyxzXc4y7nwvs36gAiPPs5gGecMLhEXk7zYYV",
  "key33": "523v2CKkDn5sPXZn3wcctV1ptgQicwmBqF9M1nEWRThLbcxA3Tut8zxsNvMX7fGM4f7xQcQTchfPtt84soFo91Ln",
  "key34": "4uGAfJ2F192kqSwkxwBUvvPvPmjgjE3zRPsbBqsE21tLZ8U96DnR4qpXaL5hjh7hZGGqYbUTXK8bwEAWxSdkV6Bd",
  "key35": "2ZHgj49Ad5oWtgRGm8asbneUiYFD52fjPkJ72PkGPSv449mMFsG6jHgxF89vYpr5C5zqWXi7vkS28MGEV13nK2MR",
  "key36": "4itnDBgCokjnEC7dvbEvix9Wy5Gm5HQgveKsXu1ETyQH5jyxedtG9JktzxKh3KdEVpiiBhe4NqYZd346QbFLTBFx",
  "key37": "4fomHJtr5g7FV42vVtGwyRq1vnp548kx62XhJApZUrp5medQJfG4hmwrqrD2rHHNK4AfwcyrQ2MCbNRRZJotAzTt",
  "key38": "28FXazH9k3nL1NZF63EV7rZd7jJBTid6ce4TZ2LfPv1KSNm7DGrAFwEziUQRTdcm7LZSuhx868vL9BQdDzFHK2M3",
  "key39": "5yaHEvkxWeUauUFinjLwe53DMW4A83MPKH9X43xKW7yPuUbpdiPCZDP41344A83iCtARzcxYrPtDcFcYvnCR4mUw",
  "key40": "27xVfVuay7NJD54xZbgqLR71JfDkYQZREe8gMaCjn4Ja3Wn5pyL48ZACMRAmG5ntK3TtKDGbygPSmgwdcW5u4jzP",
  "key41": "H9h6PK1yMG2gGydR6jcJXEtUxRhfKLrhTQ8ffs4QoibegDxX5kntWF8N7NE9mxXE8Kc7WG87Rc5GxuoUWHQP5GY",
  "key42": "3QamoRXxezJw8wnJDBaH4hegkvLTVM8TCYTTeiJfG9nFHwYg5mWA5LcKoKyKqWpgfMccit3k5RQK568dqj2aFb98",
  "key43": "57kGcnzF9xraptHjGgDt96ts484UQeGyCEv5t4miqm5YJAEMUZiM1iRR4bEpmnE5KtjoBWw2zXgxn1qsWaNiTN6Q",
  "key44": "3qirE36CT9oa6VyFu8KaaEj2GrR4zPjhxKvCP2in4MpvhQpV95zi7EfS6DVqRhqAvnNS5AAVU3CbverWP3cE2DmH",
  "key45": "4CNBjmhD6KrHzYHZ1pzo5337PEsMg6XHBPApk5oZwAuJMVtpuRBcygcEBuZhRbmoKVTrkY4nVKGDEVCDYJYjpaDv",
  "key46": "4GbtNP85xiBzaL2bpL3zaLUXZ3tn7oK21Rvro6jKzzdcuHSFcwVdRddij2eUAzSrWQdswzE2PHiJ1w9ZqFNTvbUr"
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
