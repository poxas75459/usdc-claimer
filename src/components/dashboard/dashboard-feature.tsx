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
    "5bFrWydz4AqtcCGEKyuZAtE7jeJUTeLwSZe96CjSeBrX4z2a5wVTCPRctVoetCKathLMqcAwn3TTSt78oFHtTt6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m8G3NDPDnwYNyrocn6xkW3RcpWzuj5xm57hgmbefWVCGsvvWHoQteRu1WjidgmFrnwhSnrKXZ43YFS2oRYp8phT",
  "key1": "57BLnfF88TA7pziCBWcdKVCQrW9ABCi5k7AJ3Dgo5pp55WBTb5yduBnf5gqQHbqrVHhm5Erqe37ao8eMqu2cvYvZ",
  "key2": "2Pr3kmwutBmdLRTzijLZeih5Etik9UpC6sf4sP3xjGywLCKe3UBzfrDQ8YemnJDDrkrc5n4AQc6jVmuPjBgbmj4j",
  "key3": "5dhZrJmXAvapFLUYUDjSkCLQZRRwLSxd2qrXhKV9L4H2A6BexY6y1yVoApRMrU7zRKFx4bUSRaaypJN1bL9iUkgW",
  "key4": "5omqYdckaL7kNtNHPmPVaEWd4Emz3SsLCUkVWkbK3JzNqjz87S6dJ214Kn47vijSNQuYZxNRPAENes7xrTb8ZkUm",
  "key5": "62ajLU6VHAwvU97CkMHaqZbXaafzBvWx1FrPAT1FRQwbG1FAKLy8Q4ZcBXApEMva5V9H8xnZGYq3jRnps6bNCj2h",
  "key6": "ZT4mFEtpfktzxj3g9GPUNwwXToo6vVJ3Dj7bX4ZPRpTTizwLq7q3jNvBxFir7yHxPER8hXqVD3AwAgyUTz3LnqU",
  "key7": "3yyKUPg9RbaJyte1tBADgHrUTDfCEUGMnZV9yjMKUrZ3RoyhPYKAu3DCtfWW6ZFzf8B1LjNJTDGhstVmVvhxwRcU",
  "key8": "5T7kzCiFJGMPKt1Z9BbGF45RCxJGQinFBPcg6gAd1NwahVxNwejFKXwf1TLST4ewTGBHsX7oJpb5Q5LahS4N9Uk1",
  "key9": "4MjUFbrD6Xq1CVVjeKfYVZr9AR2N5Ateu8u4L4bYPrqpNpegJM2QPrdhbe9JHa3Kpk3JEEczsiPY7bNNW2tVbZVh",
  "key10": "5raD5ENzGAGSPffwExQWPFMuKsuW7mN383FrXtqKgoUDQVdPcDNLg9ED32r8RGQRmvXFVub4voNnFNLSH4iTwBgK",
  "key11": "3gjJv5KGJw7cv2pdaKG8bCStZ7NqiwcgtZPo4vZy1LzTjnVpjc7iAyBLgUEDfgNo1wP424E3Uk2iNM1JGBrfhCJ6",
  "key12": "3wymfF8gDmF45gz6PFQwGrNJPeEpWUogBQhTjHTTWREHdrptRSJFaYzY4DPQfsUN5MopruUnDdbU7nGwgpbGSuK",
  "key13": "4XeGRG9bYu2gnY3zbsfa4T8haUpoUxo4mfxthSBimtqCTFaznr8RiqES6oYE5TM3kp5aSmsKDoaUYn33NzVjBzaF",
  "key14": "3Ew7VtaEVhyswE1KZHmwNuwALnhxfbk8d6Hh6hTsnJaLCNxugCXMX5HNx48N5KZaKGBpEvnnZw6fMNA7XdKhe1EP",
  "key15": "YXvEbQdyXmHy3RHuiZzTNLah3Q7FkyR1KETFVidnEWdv8zT7r9RNa8bzmVeLELNLeZH5WE9N94YzEBX5UZ7gktc",
  "key16": "5Vdw4txciALtsdYDpnoivKpn5AdQt4ZBp6MMD3NAdGnvuxNXo1Dh7F6LVXVssnqPRkr7xXdvcEcCyLx4KBsKcqG",
  "key17": "vto7yDEfQF4gJmQmsWdsXvs5U1xUeAQNk7xWZYkzVKTiadMHh3tnEwvBLkMRTcuYrWkQZhfJaqojuRfsxVp2YNG",
  "key18": "2GuyH2GbAXvedsTF6rPMzr2EFDV6TRKKSesAjb8znZcx9FesFyyJP3G1Jt53FwWELTe5NYA8kVwPN98DX1fyqXH8",
  "key19": "5LsZvxrpCswLyRib9GSBHN4VBtsioVk92rtLLnqzX8UTLRsjhaFSFfp4mu1bjqS2e51hery2yFro7CQBfpFrCQQK",
  "key20": "4yrzyL5K7eoBpizSrKX3Z4XzFw7QWJ4WRZ6sHtXs7o1STZXxe4Zs1nXNRqHE8Hs1bb2zPssDEGkYwC5uP8Y7Divx",
  "key21": "4w5eMSvtKK2suxoKvEqJUXzynFjJ32aHReAcofUV5caJFwkwUcfvT88SXuimnM3hi1xxFHEwKZLu1jDmyMb2cqaM",
  "key22": "3A6gLFQHQuyFMV9MxG7Sb5RGTMuwrmS17xyNo3gSkUw5TN27mnbfeqXALRd88Sbn1WDhu2QiXQcw6ywyykwgR5xp",
  "key23": "wMHW4sJtrrZ78WJ7jtJRXmYbLVhCsERHz9JP2CqTCabGDeGz31PfNgTLKKoDxntar3E5ntzF5U3d48gVWKTbgYN",
  "key24": "3dsZsXmCQSRhFAEJWJdSZUqWSywbPT1mt9BFKsNxNcjrJG9aLALcegBe64AyeJtJXRR4e1xvzAhGAtGrZp6Jb8QQ",
  "key25": "4F9z6tp5sTDBYXJHrBu8TRRR9VvZV7UyHC5Ru1bfdDwCYv4JgKgC31RDAzpMh9oTfZj6ZskWCfMBphQZpE38rgVv",
  "key26": "2XNEPCjbEqVuYQ1SkG6kvKwiiV5TxFncVCkeNeC4sLYCUsm9ndy31jN7UGvVtWFoWFdgGfMCrFqo7UZua9Awg2Wz",
  "key27": "n6uJXERR8CBqSk77Te5R3ivqEuLRHjsN1pimD8UbuF2ZundXAvG4UGdKzayFxfAJBW5cRaYJH74iAxK8cq2eBWd",
  "key28": "5jZi62zw4UuPQnW4hvjV9RJYXKHuKnrPsLk5tXtkpaMVELQ5548MQZKQWrwULXQ8GPiLpBvFjCeMAbwwwzQNpAq1",
  "key29": "SH3f41TiLo386aXzsWBRvdzu5J9iZM6w2ERsg8ESHT7zJWttrBV4cvmptjSRXTngGdhY8zL6ngKZHLmeu9hhsSX",
  "key30": "3kfZjWVmVewJASkvLBU3mGegWYuFMTyRLWmM1qXxnx9s184FFgfupm8mgmKiRjN9ht9VWS2pq8Dn88NmKkuMb5AV",
  "key31": "2DMF1fz4VmtzYXmfgX9GfiCTHjCqpRrNhBG9VUr7EGRtxazbKV39ymCNif4MXZnE8yZL42ybVqBh6Hb9PzCo7Fsw",
  "key32": "3fYussAkUeWfEkyuRsjqJuq79kRE6R7SWj8XDfsHDfipytTDiKTLYwwP7yUuGNdyfuQgguBvydZCZ3qP3h3BVutx",
  "key33": "4WgFEGtGiKa6gY98YXaZhRBiQbNuV2b3bBfZ2RXptVLwU8SfQwAtSbptUL696Y6uTWcymgKGmDePzRiDrMF8K5jh",
  "key34": "3wWkE3naRzVUctYpv6M7qzJQsZ46nDh3pTGYGy6rNUwzSny33tsTpurMFrExQ5ZuRn1F61eftzuu3Lx5NXiwjyMk",
  "key35": "4aYcXNgsyciewjajb7yX5nHLcaWehnEnji3Ry5uw8G6W53Zh2qk5wuQsFBRxSuoQhmBTtTLcBi5jzLT246Qrsf1b",
  "key36": "4GVAd3Hbr6VDZM5sqQ7HSQiPyDgTDEVqkz4XekKJGVasjFRxUUyyomnSLcNFbyRVvpaQwjrsHRDVG1rtp7szmN7R",
  "key37": "5pZVtmjazcSDAh8MDszrv4XnyzsZpvB91L4BQyzqUZacJTPQP2Ryuok34TG9JjdiKsBGcTZAfkjbW2YMqydrZEbT",
  "key38": "TYD5JxeLLqezzmnfFyNFCP6jBj8fZ6tqii63F4quSsZbSoVuiVJteSJVYd6LFMw48bhxchuP8PvSUiFgtaJGDmx",
  "key39": "SwvD4dr9aSU3YaMUp25cJ39pAhoNnyKXV7ZCSx2V5eJmYC5JngwJH1fARSy1SnPMCC7kJYiWkHojiLqFnMoEeCR"
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
