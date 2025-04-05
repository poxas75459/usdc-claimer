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
    "JpwF1bYKwPn7rB6JC1tixMu17DCPr6jTQ4FipHik92TQ9mmJMur92FHeDFJj7ojhGhyUfSND1Q9A3juEKYZFULC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qeCkxSK9Kz6ugS288Grei1rE3b6Z87GPWSS3GoEjJkeJqotvrGntCDMTHXQLyxqsT6LBRfpFF6dzSRTfMyukhgs",
  "key1": "22iVuDrgzvyWNbN8dGh6NpR1XtLj9WGviWWPVAXAFmdBdi2bX51BBTzUEHSPPbpMhj7N8B8B77e948SqQQN7y6Vz",
  "key2": "2Eq27KU9BWRU6niJjfKKbAAuVRfGoxEhTHtxZo4DVdkjPTZgMST6ETaqX6aKqr75UkjChPmD6fPffFH3eavffWk",
  "key3": "3FVfGg5j5d9d44XgzTDuQJGhrGaCKZZ5neSamPeb1VJzQxUHFLuRbkbNptSHMkbfb4oxf1kd8GRDdy3rgYwfkQrU",
  "key4": "2AoSSWDNqUjagZhF4TZfFYkS2nZYiAKxaTAyxAYwKYfGHZzybthxwsYf1927XMyXaF2MCbLmA1rjaScLoFrTLxKt",
  "key5": "2mnPHuHwE3F9kfUX6R8wpTCEv9F5YcVeG17MrDwGT65yadapxVTd1tPqJdaaEnnqDgwkzgpvVEqbFFbcRBtb37oN",
  "key6": "4MYQsXoHJbF2HBMeisC6k7NCokGqV44rCCNYGbd4zjyyUkUqzgBFqBASaMojZ9t5umtn8kPY1gHBWnxuUfSFV3gN",
  "key7": "5rVSTDFy2hZtDuA866ZQnCTCnkF2X7g6wS6HtQib8r4dsb96azkugmrJecSkMJAwsbnKa27g5vq2cSTvqFcEx63A",
  "key8": "3nBX8XZoRbf3zMfQCX1CTkXKBTFKaLiHNyUkDGLujQvyrQuph3nHNvSPPJM1gxkhdAbnym2fw83GL38pWLL34YG4",
  "key9": "2xXntcBwffAbUC84oVwFh9aD73Qa4BrWTBtKdXdsPZc6aU1428qShDCTL37S4WYB4mDxa41YSM3HqDszJNuPfiuQ",
  "key10": "SVuCWJkbPfZGQdmjnP4cEpnKNxHGNoLh6CduTGvnS8sMJNxv6GcEpKJBcQmfCaXm37APZ1D9qMy2MZspEoz9KzC",
  "key11": "5EU3dokrgnGju6awRCgPoNxaYgD6zQ5JjvzoL4yhPmHWLhwqXxJNHja4xAgNQ6USoyqkB1ethgV3vn1ndWSm4rsc",
  "key12": "3DZXrWJonMbiDCY3WKz5ynVmdaLSDYNcDvh6LqUmfwaa49vrernohMea3on4Fo27Yn4VaE21uiMN8NdpMDCzkdfU",
  "key13": "3LjeQcc3w1bjHRsxTkSdMZrukx4LUVZcui1h8G5i1acuZxADhDydikZ7XKAU9xsFEmUtLa9G61Zvq3ucugBfaN2h",
  "key14": "22nyRCTaVQTNRvoCh7wfdHPN5guBRTKU2NoknkdhXXZV5JbfTmVU9UtRWwjtFmHP2u5ZdDJprtZfWxX8jS4bVcfW",
  "key15": "5X4q46fQQ7X8PxEZT2nhde5CDR48VSQP7E61zKi68aHBzHYJmT7KaKGCBtyd87ZeiJQsnCpjTvpQ1441Nnx6tDqn",
  "key16": "25ndcKqpEQ1mv7nB16zkwp1GXF3Y5dPUSGkDJCyGJayWVtV37FNwWqeR8ryo8L4GCwKP34L8vYBp2uiv4gqkzJAP",
  "key17": "nkN8kSg5ZNVDrG8hJryCthEm9yJXwP7N2MkcXinXSG41ELjkaNxuiscSVXPnDqTfD7yhDqjpGgmu7uvJciaHQQx",
  "key18": "2TDwyFdVc5ritABN1XeUcorX6WPHBtpZcZDNGPsETrVXNTn2guK1HkUWm3AMGFdyrWs9zTFAGHnb15t9ZTzZmqiS",
  "key19": "4F8oTcD7BfkSDx6p7S4DLnduMfurugkquXg6XzwJPeifJqjDKB1hiVcBKGW6TqYBAqpgE6Rkpj1WwXUD89AXTKyL",
  "key20": "4yWuu7iuuY4aZBUC5f4ZQ33ZPTq7F2rvbcBtUKJxpTCwnyBa1G4rNWRcjWvEscncXBPeV97aaNiMXdPTWrBciKy",
  "key21": "3w7e1VqtAs9GxzdkeaSA3HnUK1hBy5DcK92hy2iKcvrJcdLZMNb7bYYcS48UhL1iCvXiXsDPxbNsN2yZgdQTVXCh",
  "key22": "3Dq85fxHKok9aoDngXNW2UyLvA4TP4N5ExnT9P8wr7VrpUaLLREHAPeCmbXLPt3ar9arxhhbg22vjE6Xk2FkaJxz",
  "key23": "4Ck6vXLjLYs2dHjbG5bGcnsvRbDEpbMmFXdsKE7mTbNpRDsgcSGyWvgr6Di3w3WPaBV31EfPpwDfKBBAg2VBQBkT",
  "key24": "46RK6CPXAgXhJCALGLDrZjSqY2pCYeUBt6sWsdoUbsR6WfmbjDpdj9QpsuGhHc2h4bgnnxKtY6jogyQMSzABu2tg",
  "key25": "a6oeaCYne11x7KshT3AGz4W1JFNmriREEn8YXkuo6UchtdrDLp3sm12UArb5MDAdnmtFdCnk3NRZ5AvZ22x5p9j",
  "key26": "56fikmTbm1ccWYyfMRiMwZJNf9bnwGvLRtF5efTSEtVRG2f1EW3PpLtSiPpGw8fr2qcaq8iLHyjxPbjy83MvyBbb",
  "key27": "2u4cYagz1zGE8XBDtJ4Lo2nMjbpDB3zfubGMjpbuyKgTJkoSV45zUd64RXLFhvNiPMhyaGtkL2KUSMYhkGPoTkMB",
  "key28": "4hFiKjVcpEdzm6i2esWqW27nPUcMR1wPXLP2kZVbDP7mRuQie34gKqq5wNeAv37BFobY3CjspYbEqgbDcBv3a4g5",
  "key29": "tNbLrMXd4GUvjXo6TcFoUfRDEQYTsY516sF4Abjj2QvRVGuefgQMBQnfQwiBEaWgxx3xRg1CvjTWxdVnR6A4E96",
  "key30": "3U6bsvG3oeKCQkyxpBSh8oNxozqezuU56iqw1xWbHdbZQYnpDmfNPQ2g3Eaf2bXGXiwKriVLP7kDH55SUcGsaw8a",
  "key31": "3tDfTs5KbFga6cG1cwxQHExhCBPRD2tpnTBVv1WBkxx5iFthMU87AxAPxt3on5mYsCv4H8cSTztTJPTxZXMHQW8B",
  "key32": "65t1AGhERZs3XJKxMd5yEqZUDBTq37f9mYoGLcXuzKpuTF3mtQXEaRg7ZH8dFLA6Dz35VN9SVL61BPSQfGkjG3aW",
  "key33": "sCqkoGqfiNXYdq9k345ChTrfGR8n8SV4nwfc2DqwoJiM6sDzpB2MxdcrDKBNf9dPMk6P5DgAPHdG5ThtKWGp1ZA",
  "key34": "29fuvxhFoZfVtvv7wJ2Y13LMHX9cEeK7BFC2NugDcweouMCBo4BH3fJsP5hFTnLSTwdTGjm6j48D1o5n3xXQN3Kf",
  "key35": "5v4DdFGcWPRtBVvdCbEPyq5hQZmEiTeoDcCWcYKpFL5hCgnSzXo99Vxr4T6anFyPvokpAGkRS4eWfdX97dyRuWhC",
  "key36": "2BLEcFffKfNN2NtDwJ4QNu7zFLnSR4tdX8ofpWwx35gAF1GqDw55ZkWci5MMf2LLnEwsjcWJM5PP8ji8jvpvh9Un",
  "key37": "3YGMP23tkEMA5YzCqR1kt3XP7P1fGYnnQiUNck3XKCkQNakMtRuJB9wnJfqsH4Hxgcxkrre5NRTWpekr5LQFWkxm",
  "key38": "FZ5XYB6JR5oqM6NS4XEhy9zVwjDSqfQBwK5XrmUkip6TDoD983PqsjBUaPd5VicuxUXkLguoPvxMGAE7rW2pK61",
  "key39": "5oJbG8sBduuZUXv4rxeECj6hV378FbqsooVNNHMzv2RHJs7AGFBVTA2efFjj5oVpfo4cBnZvoPv3x2i23GrxngbW",
  "key40": "3yXYo756kK59GrLdTdVq61HVpCfaQxVesQE1AccnxhAh3xRamNJtayGyThenH6EW7r8vctA6tAHUiSbfzrnKU9BV",
  "key41": "4BCVMvienyALnVhjr1sZpJHTkpZMn12RrkSVUs7UisEmhz4Xq6bXyi1Ynpy4x5xRm3xgh7Gevt9WdqunmKfATexX",
  "key42": "5A9FCJ1tg8tVGMQChPhCoeV7MFMWvYXt7KVQ6h1o8rz4UbFJbyqg1mHFNabGh5TryyfcdUyXjV5PDmp8Fb1xqZ9J",
  "key43": "4mJGBxmSqNeoMdnrHDwYMAUUdTxsNMQEBD9WGrmX8PfBBuuvx19c2wv786XrbHn7gt2Wa1nmgjGvwTTF6nFJMk61"
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
