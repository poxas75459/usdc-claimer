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
    "2ck5D3LixLFDxpdJnmtdAgFjndRfejuMx7UDJHMckKwjWcBYHvxFd4Lsn4gne6m62nWciWw61VgaDwRJaMaBGmey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bbTVLrUkN6jnrBr8fvQMnTjCR6gCBTsZVJE7pCbV3YBXQaWgs2WSZBWfPVA2tdPHvZFMBkzF7XtzfyK3Pk5Ypt2",
  "key1": "5ae54A74mxjVYoymCRgmwBhJCjLmyMpZZhfJvqk8ZmrYZDSf7D18R8wrMMdPR8vAAwxN6npg6Y7Zo5UGjkNsCPTh",
  "key2": "3vupanGYxqB6cbujxo2TMJjcB6XT7KTYQrVrCTgsm1untW6PdMXmVFoUmcjPx1jRuSLHqqhsi4B4pnqcXmDLcJUz",
  "key3": "4P46q1BeBvxTFSP4hVtcEfiZjoRTcBKt5UGUCas7QHVEZcrLyBktiyYhFhyPN8CD65B9uoMQj4N8sfXik66Z2nZA",
  "key4": "Mg5GUyesxPxkMApxTy8DWx9v8jdahP49i479fEiDw7uYFSESPfuBpW1QAZxY69JhnTqU6NcUyAytNDKbcdxGxed",
  "key5": "gt8qPjeuYkVfVpupB8YjRgJH9NTKeWfe3JqfRzW9ZtFhd7joLmsje3m2LpvebehHM65iH79rGdWwKY5xiowtkeH",
  "key6": "2McRKwVEjfqcZzfY87kYMSGFRQaHdQB7EJhR6wA51mMJZgY4kaaqhwWMS8ekqB8B3xUQVznUgUiDKupu3H2W2XUi",
  "key7": "5iWjMkuboqWQr42gwNpRcajoBgnpeZ8u8xVh5hYiKLomybVAZ4BWBvyepYGZpVFzuyorKy3LJHvNsMMeJd7LX6Qg",
  "key8": "u8khi2q1DqfAmDxPvvCj86spUxHz5bbybSTF2tYgpehANN7A5bLBXrqESP8CF7sd6XV2SZLCP2tSzncGjMcBrNq",
  "key9": "3AsjSFPfTXcDJRoSrkXB9HtYkxhsnauQW2zsfFdz1E3oATKq4g4UdcpdrhpXHQKt1gv9W8ai1d4ki8YtAxjB65j4",
  "key10": "3iqwqmaP8W4rsYrtMheRYmHPCwtHHMLkn3jDSCfpx1HhasgmhzoPDySFMcsDnp79R8oJZoVs8qWbztZXRdk7UWT",
  "key11": "4yBX7Q2atEd3RYRnT3jgdtfpJ33SmQbV9cMbLg3mXXrAoS3U1FfM6NwyHmL6yt4JYsEuDbJuTkQBM9sEoBv8H1oR",
  "key12": "4kaQfzWxY7WfktDJjbvrmMwu5785JdSDDn2vpNjcPPa3VL8iLbz4Upqd8T8iVZWWoH4GoM4F3yWeRYpEhXyBERe2",
  "key13": "4ipaXHp4AL4Kqpq61RSG8KUgq353BpUhSoEfo9t2sZuTdaj5UHxLrwvUq81CebBhdrtnRzPWUvLJemrCXFT6aYMp",
  "key14": "5Ydpq72MjnCMrUvxftwyqahmSD5WmHkxiKaTwGrMeYdjWiEK3kzQed7GQf3ZcxvTH1SirzWimf6mV3F6RwGJjxmj",
  "key15": "3i11h74gX2G7r1WwZDVRmam4KdhmJuch7vDezSn9r6trPveanyrPGMbF4WPCFaH3bT4gz2EVdSQXVPWqre7PivPh",
  "key16": "3iHRExgqPdSSEBFzqZddTt6YeCccjGmkTDmzsoVKTNJSyxRjt7r4Sppb5FWW5N8jCqXvZmXwQEjEbfu9KvAbitKW",
  "key17": "2Xu1KxrZUYfuLQzDQLNFGCa9Uj1Bh76GPvnA9k5t9EwRzeGBrd8oiR419uZDniNtaUdz5f88e6JfzgrQ74HRurr1",
  "key18": "26spLwvztfk7j32aEE3kYUoneFqb4gsgsgc7Ecudv52w4SL9jZyv6jAQvHYGzgNtTaAQoacaYMUAywC27tB4UVuv",
  "key19": "8Hv2EjTzzaCeVTm3s6pucWf8Zsq3FtanipErP9r8KcnN31WqPfai7thFckEbe1wuUWhQzDynRF3eQZ5taN74vDU",
  "key20": "4QPbMxSTSRVssuQhez2dpte6zdDU4Xftzn5Xzo29Rc9dDERVyixbkJ3Lu2Q8nHnqm9An5DUYbZrSCR4nnLK7ygTD",
  "key21": "5EN2iNFWTRFdJdJuwBbraYKQfYjzAMT9C56b3BBy9mmMe4hDj3H8hTZGbfzLztRGa9vjz71fyvuPjfLdFFSXEM3V",
  "key22": "9ZKXaf6tAwYtVFnpVFx63dsdAXb4zoyYH8aH81B4hAgj14mcaysx6mFgvgGkZz18bAEncuVLf1k7iFgmb61wsr8",
  "key23": "TYktATmPwh2htPBx4eb3m8ahHcaPNDE7eeFpvJKfRtqHKyusrCpxF48XBTHihfU7deN3AFDXahRxofqWK7dvpae",
  "key24": "bsK3j5YEELGAqZDa78U5PT9Tfdw8SFqT26uwFdMtDHfPZE4AwFQ1aLxDTyTzHFN9pu6ygqaev51ox47U1HzhMfC",
  "key25": "2p5Zs1gZLqbNff8j2xmFzAFVTvWFXPkNwq8F2dVvBj4vsqV4XBydkgBbeYGnJNs77Z7iD5qPSnLwDCYom4uUq7C3",
  "key26": "2P21fXvjjriP8DQFTpzACbXEKGjCLUuy1ztyZHWgZzpwe48BxXQWVF7TNYw5qW5nGjhSPGokvCfycp1Pc23iV5nR",
  "key27": "YzFJQJdU8fixgpCHYmw9NEbR7Vf893c8g1UjZtX2EL4wkkmAEt3tojs2aKL7bYaskXjLibJTjBtHUAsp62sqVqK",
  "key28": "623o5quaa3DFf4a2mhxPnXwNSQiJJwVHBsguozo582w6biLKHbRg36aXgpHsoqgZojwzdc4mow5ereMtoJoYcdYu",
  "key29": "2sabPNgQbUeWRyRcggEj3F55DEJhKdn93h2Pb8gx8iFksigvA9MJZZiNCGksKbTB2zsEcfsnJLmf7urZ4yje4h7C",
  "key30": "2vsA9XQZ6mpJMTQcMSkhDGx9GWx9uMbPVWCHAs6LZwztbesCWDcuf1MaXXkGcYM6HPF87Nk5YDvy5z8a8MNupovH",
  "key31": "32UfnL2BdRgziYpebbwwNgtZ1AjBy7XiWh3sJrHQGVZ7Ko7i9HqLoAy4dN4owVZhGgwVDfgs4zg2Hz1uWpyGdpA",
  "key32": "NBzatJUawLv73SUcNnk3XgTsT8Rtg5qcSxsT9Cymwsj9dBjR5hvif59fboWf9Hsqcr448xjg8zK5r1rarpNBuYB",
  "key33": "441sA3AHPW64jJGoVvM6BHBzKute4qdCYHY5KkXauBjapochxMfEh7JsAqTLjUx9Q2PNd5TNU4qk7ayQZtrjqQc4",
  "key34": "36P9gNQ5T6wyU99zaHcfXtK2biuBTPdXiinU3CDLjY3yfHhfsuXwahuMNmp6A8vAjxKe63hPUFmLktWTJTimy3Uo",
  "key35": "5KqahGfwUqebuYsdykpEzFK3DsvXqZEt9a1NrgZocL36fZqVcZPQYB9KA3kbVLZgTmXS3NTW233p6eTGepnTZmLr",
  "key36": "5g9KRc32W13SohM2r1vvct2onQSzjYgbtVPDFCesHYASGThF57xhrhAmYKAGSzqspaXZJtze5LeV4j1x3GwtEAsi",
  "key37": "2yzXaWGLUzfVo45RvnJXKNjPjo7BwBanK9U9WRWRACW83jp6yzfcMQpF4zvGH5VzHhY84LPbBRGEHqngLDuBjBmW",
  "key38": "mWJLnueoYws6EmZsDZb875mTaJsLwA99W2VNmfkZaHYvoFSSnrBz6kxg949efiFehTHuR1Rif4s42boKMWQMpch",
  "key39": "3NJNcQ34py3YwmgiT4Ki2Qj4kGi9C991RqkYP53jrvJaCABt3DiJ1DSDPMkveFwvpgW8kywuh68esmN945CxtYfc",
  "key40": "ioiPQTAdsZcKuoa3Q4GLANoafKrs3MNes8i2c9Ws6UkJi2CeKvYsgtM6BvPzsrHKJqPtZ4kJzXimYRBHE1KV5wq",
  "key41": "4Ko6dbwaZr6JaB41qmNRVYt5qNTGwbhR2G921zKf54kUgXjBWbRauuJTSXLr91aQrHGHRPhB6na4LVb3uf3oJf7X",
  "key42": "3KBGGkT7SuS37wvHTfxh94nFnvnGuuJjPTUHad2tK5P1pzPYukSodZi7exyZGhEkaaphGfmADwDMggo3Az7qa4rr"
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
