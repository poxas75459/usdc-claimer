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
    "5d6ZT1d5uCPHu6RUEt7o5fthgr5w3rK9phZRp7YhVyk8RCNkzG2h7So4QX6snJGUQdQ2YWuYM5vNutpPWtpcAmta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x7NgBjR31Ycs6pGxL8eBK92wqsevA9NmdCkE7S9SGJH1kT4WRNvr3h73niM3j24XABFyAeZq3bkWh3xFQnhBYXs",
  "key1": "4uDVQB3hjLyE8bVmCgmufJLKZ8ReuovEPx3cxuTFVmN9Aeajjp5jGGnBTB5goPaBrMNBGMkjuW4cgKgxGQFtRGTu",
  "key2": "qE6sNgqzRRT928UWpX5H5D1gcPYfcgohGe4yZ7FBm1t63qyc9qpNwjnM6QxJWEenYpq2quPxH67TMUrqtiHGyGp",
  "key3": "5pJ6cQzx9ropcN7E1Ttoj77GFkxW4DxYxjM4fKYZkx5qUX5EyPmmXLRyTrCmdUA2br8gU4MgDKHYaEy7nzm3yEqM",
  "key4": "5nvz7CbAGgPSzjdBTvhQhq6ZEYydnFAnFGZT4Kp4W17RvsRjHYcK5efzfYNanAY3b74XapocMwAiJ3uMs6nfRuYt",
  "key5": "2R2TPfmjc5xa7GhDCQw6r6fTvAMn9k8gbcdveynfQjFUPhnhTPyLZnVPLMDkt1JJgHjB8YLu4j5uk8NpGPmnnYuv",
  "key6": "MnAwiP6ETkPCqFoh6Qy1rUgNDxMYGH744pLYcAFDhVnaMTT5Ak5NaTqPSUrUr1fEopB2yzXwsduFERmGDbYSUbi",
  "key7": "4SoGo1Us4wS5CeJ1n1EwPyKWdGjoBmGPhW25J7BCfnBWK5sn4PmVYhv6rEjh34cNQWgBMHDeUzmaxwZJ1KDgALMe",
  "key8": "2zzEwmP1fJiHtPrhC7v7KZh9HodSKFBccJ7Bt4e18AxfE7uqeof45eaN3CTpQ6aM8EezWp6btKfK9rTxWdHdTpAx",
  "key9": "2TfkhZ6S7y7VkYA3YpBXXtdrNVNsuMhnBxFY3kavA3g69ues5FE8H6tLwp2yEJVuXt31NQ8CT7wx7rJ9mEaRcrau",
  "key10": "5q1hYBPXEWegZDSMmdRHvz9zGpX47m4tNYueah8nXPie5m43ww8WsCVvUzrDeDuhk8MgQDMz8TsGC4U2GpLfp6By",
  "key11": "4JuaiUQYBgD3woNeUVY13TgEQPV24cazNXKBPyCQaWBLNrxMNEpsbQkqTgunYtY54rDkNwApsmcmLR7j8EK5cckh",
  "key12": "3eSjxZFeht1Ji6zVG1TAbQ4v7E1JfxK7yYcesFjriQMkrTVsFg3t9Pya6WMytgVLP9WPJgEjQ9QN1JY8FHY4GM48",
  "key13": "JTZhxtKnZaidHXeZp9Bdzcy2WotDiJ1zd95UdPkjPSvHTVwHVZbhZ1rCLgJ6svSQshX5ioZvSsEptLFbVjfj5Pq",
  "key14": "5bF5GxGvSFnLnZfGckyooqGxngpBqUgvjjRZ2VrRXnybUEQBsGY5x8WesePWrfeS8YLFyYXPxWaRAdwJikDfaLRo",
  "key15": "4r5unUL9XTrxoks4iCTFNGyTaabCGZuyJeWjRqCfmvk699MGsqhibrT4uo5qqYSwzgkB2Qn3HgnPxLrZRkTQk892",
  "key16": "4s9cPKLQ4uwyGoZ8EiWafAniofL622wNTfYSV8wM8nyv3FXCAU2nT6ZxaXZ6WMjfM5PvuknUqC4pihgYGKwMKiVh",
  "key17": "28cZ1W5Httb2AoDEXJcRoDQ5DgjX4G9iN5n3U3WLaNs2DiZ6KjqVuDFpzCE5d2wjDsXzZ6ghwMa7vCb5P7d299S7",
  "key18": "29j7MRsZhPjpwv7VBz7TvniTSyFUeHyG2dUdkucLDyHqX3BaT7uXyHaJPekmXxEVRDBcSLS45FVpjpnvDF6qAVm2",
  "key19": "5Jr8uQH2scoT6NuNzYQcbXeAzjKDZMtxce6Q79uBvD9hmyiPUGvchcavV75H5q7DPNtfGVhPQQn6kEbM6JohUN6b",
  "key20": "3edwnQGTXA4Jf2y4jmErKX8TMJ9i5TMd8qqkp9cfzRsZDZG3fqLk8KQ5JgRTYMLs9Uujq67PpE7hBGFomN3mQAAj",
  "key21": "49mDZAhF6GFXDxKjLQrcH7PrzuAKcavmBY5P3qQnYsidQ2FjxRdWRD3DpwU5uSBoNuMTi3L4KT591NmhQcZMKoSt",
  "key22": "ujBU2qLWGz4aoASqiHpmSyhLZo8QNz8zqsoXP8pXRf5KxEmTeCwXYgWUJhacqqrrLNBRWuqbdgmS1XA6NvTDufX",
  "key23": "47AWu91ksHM7DLyGe2nxvwVsKAsDvhSFMghb68NajYNsquUUhbHSoK8uck83zRQ6qVtLYoyWpZmXbhSRMqm2WVjS",
  "key24": "1U1HJGXphACFFf44ENZZBAau2sUND8hMqDY73MzQQWAqdMjriLfGsTYj9eWVzMJmDfpUyniiNC3RSPKaEqhaQQQ",
  "key25": "2DudgXJs1CtkYGotShP8hMGoX2x8UpAcpsGYcRgxwnphcrR1YuojUj6jRkeK4rq687xwwBubYGYzDRnKRcG41ds9",
  "key26": "4YwMHZnF1iFXYanzRBgRAMxmzMiPe5V3THXfuzrrv5yknTaRjHaeAXiuSWKQtkaTEWdUaoGZ4jkAj5Jxu5hUyuht",
  "key27": "3kUsnVdc1pxSvhWq9pn8xiLARfubDeXCr8LcDf4LjuPsiwfnSvtwBc6WBfeWmFsPk8GtdKXmFUiEsGgW7MwCeHQG",
  "key28": "4uKrV4xwXMbKWZ3c1qXVUHgcU63Njv4DwL8md5Vj1gwRqqzrmioFuPipcMroFxHRgcCMXbYDicc4kohcDCo4yQpg",
  "key29": "3HUSYLdpkFJqVGF3HGZrFThwvTbHAaCDxyTPYG9ggfpFCpbapX4jVV5oF5EhU6f96rWjc9E6oTsWuq9611CvdptH",
  "key30": "388hM9JVfT2hEdU7yKbreevuPsGsBgUbRU18YzRtDDwMLLJnr1xgUD3SquYnjLYv9EW34rDxrNYw3MiLmhSN4hha",
  "key31": "dRV92cr8rkKS6yGbLgKJUZPZqkFbdNsezhRVj3DJmMf2pf7SxZuT4gzYXkodT85FdhzvuTXKRPk1E9xMCqS7P1h",
  "key32": "5oA76SeKpReSrkM87CznuZnTMFbNUnbXc88mXspYazz9EoR46kzXjGxDTDoAUcFv38WJNyLV2chyVw3rqoykaLBz",
  "key33": "5VN2cEtAoxbU9xJWW2iJTib6d43DhgEVb4zFCcuh7SYXgKSbeJ9YS6TxUB9Gd1WHTdV82pvsNugGpc1TZsfc91WF",
  "key34": "4g8biVnoK6dmooDvxwPQ1c2PNc44P2FMJZQGvZpx14LfVHUTbp1hUrTxtqZ2kxdUZs2ayNVyZAYBKPgjNK5uGtrH",
  "key35": "FrqQraWJRcjByXte7V6GzEQkErVBkCzRfaEXRMe7AFjuhwnRQtmBtDLKZFGZx45qqugHjR4rowdsgSCnhuYRRBC",
  "key36": "52D6eVYhFJfz1r425wBhQXtiVQuNMRLykcFWU41vQtKkudRZnmMdX6C1dy7DujcSbL1ZBUtQY3PDNEDiWQZeHbnz",
  "key37": "4wtMWEhm1WSu67m7GrnhsdqEMpKcXuzdZABrYzG8VkiCqA6Uq3R4iDcwagyCpLrwX5jcmphYEyTEukDdtJRGHcrp",
  "key38": "62kbxxECsomVtKjtLV4WDefa7ogWu5AAMmbEYWAT67i71vMMXzkdFpCHUiJfmVFwc9Um36AKwCZxtvEabR11zCpu",
  "key39": "wyzvGGN2HsYBJjcdzzKKvev9s7bSN6ykievWzUBG1GCQntbEThqDkPavDbHWLSxGEmAQQaNsKuxE236mFbVJFbi",
  "key40": "65czTdp82H4dGL5mVbkrfwy8ckdKbnXkULRJB57XNKfjbZEYJWYdKChw6MBnEWeMty6aAFGGH4Vm5bpuP4b3rMt1",
  "key41": "NPMt3vxNQjTYBmjCUKkkkf1DgVBxD7foZmkHRWAKJrye1tvsy9bMwe4NXuuAsmAsedKrNQoB5PAjMdAazBvQS8a",
  "key42": "5xrsPRsM47b9NqGezM1mwYx67CUaAzPGS1mb6Mkn22whtNwmwnJ3b48FMHodD9GQ2u4kCvErBFHzW71p7G8x8V6D",
  "key43": "zj1TPvknTE3WTrQ6ZF9uisXo6NZRvH2DwP6U9i5HrMBUacpZ643y5b5TqybqorLXH4KsAu7k7Fi7XBWJcAnqHGz",
  "key44": "2uRgqXKmpY9CNyBhWH9qbz23SbExfQEe9jPWvgTAhMibbJA8kKca5wqrnxHGvuWPECUSQAzF8nx2VLhiPHbs3VnY",
  "key45": "3oeCnHXo8L9JTZMeWTrYzENqHTLFjyDM2hQARhN81M3fNChzisnu5Tvmydw1v3Ay6JCj18zPTmvKaR6pfveFrqHq"
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
