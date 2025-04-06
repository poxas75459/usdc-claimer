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
    "5p86wv52tgjQR3SuxQNeHKtFkgDqnQS3fNHcMjYcvRdNeQHLMpj9AnU3WvMPM1JVGNBsZccqfUyGc2dZSN9niML5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tvCak6YqCHPwfXdAGTbKeeK16pqbgk4GtooAUm9qygrEbgPVFGBcGLxfymxUKuFvoP3HV2zHzTeyLN6BbMr3tap",
  "key1": "3hasvxnbNrkGbmpNxYDd7vNFqNopZg55Kw1BnxATiCE6dhJtNt5mgaCPauJRWZyNdyPNsYtpRUd3dUvkAaJxUig",
  "key2": "j1YzHuUHggbJhVaaPpMXVR59Sdov3xg3HKcAvikm456CfTrsi7MrD8EWgBoiPyYCcYnJQ4JzJWmeSQDdfAYQqWZ",
  "key3": "3gu8y1JkhqytFF9NRWe6U83qdWZTAQ1B8dEkSS7tQttxtiK8xatcs3yi62RvcRjao2DaYorkC6cYSrJVm48oWvPW",
  "key4": "Y2Rbm2JvxN8TLntd5dJKX1PrWJC1Vjm3Ur53JB3PWyUsPsKwy7ZzmXrZkcgAVxoi8neetdj9rXg3zsHPYBgUyin",
  "key5": "4awxYXZKagqmzoavmt5GPCfRUmSLhkSq7axYi6QpakXmFNTadY2TPcmNJt3NrvT8s4W5VUNQbNuSJBiWTbkW87M5",
  "key6": "5UUizz9q8h8mz1kdGjqvnAQeL1SJN5ytyxESzs4hdJ8W2dVpn43Tq4MwaLL7EgtdnqLf2kYFUiB3KmAzsQixVN7X",
  "key7": "5kgs8cKQ9ke5Fe7nUVDado8RHqtyWomgjEBh2ZcV4Zes9AB65kRftimd68kYP2UM3nuKaFit8cDWVEZutqepN458",
  "key8": "3AKmrEu5PTN6MjxirTGhgQQfvVFEuWmty714jJWASmRBM7BPDNAgwePHKp6AUWi8riQng4hK5QRkdQoq4uuj1Srk",
  "key9": "5Pe9z98VixZLd1kh7ErAB6KgBxqTf3RZhTjs2qNj2psTT24mqUW2UiQUbxSy8eFsJAZ7Kp8Ai2DEZzcEoL7qoSA1",
  "key10": "5FijnkmobyBq24CvfwBD4Yc98UhhRzME7gAVdYF9MtupemzbTh6uLHQ3H9oACxbpZrkEvqpRggfcnfsY8hmMMyxG",
  "key11": "4SyTMiCHRAz2BH7BEUfB2e5sTy2xAd9TQVoLesomUWY4rCLMMcbw2xPqWPJKeuCnL2QgUqjL62yCJ1jztpoaa11t",
  "key12": "3EaVAPso5GpgwEC8WVWfJ2PhbvDU9KBbq9J2JXxinD79pDmSpV7hkUxSE9EZiLQEo2q4NtNNDZCQCQ4FHAuJGFW8",
  "key13": "6YqxRHUzbY621Hu9qtCKbxME5d2Qyix1hmJNRPRdypPsNtNG5ZWcNFh5bxxhtfDxXGJtEWntKPrknoRuVybJWs5",
  "key14": "4zuCE4bsF2XAmHkEjHzvCkB587ig8e29oMVQPUc7a9F4SbTJF9S9v81RJ8uVZojr6cfVHNLzkxJtwV8PVs8ipHZp",
  "key15": "56hHatsh2GStiP2683kkw649W41BDET2CDwDzSpB8rBqSA9xRWLSh4k6TGnYAM5yDDkAWChhUCkjv9PvByhjwUW1",
  "key16": "3hVgLHknPKr2NAKALvqrFUaZeGBCQxhehk2nYLh4G9bN89mscFqiXK4PzGo7DQD5JNF4yM3mUDAd6eNjLXv1VYnK",
  "key17": "4X9jjbyc6MivW4NAXba2jME8Vq8kPkHD6P6eJCWV4PcdJ3C1fYRNjc9K4zmrHCPCaCT7LUevPDZ7oARpnEzKuBgo",
  "key18": "2bFWLdYXwAgxgUMKDkzKZucB2eLvHaCwtQLaCpvX7ZCwt895F3okUmdKPhok3kMwhMzDmyUnDe2FYjcKxWbyLMtU",
  "key19": "4NBAzBV2f3avuRDypzxVuHWHDRibz1rz9xm24cioPrZNG4FLtBzox1ZjJJJMKGGt4vjp43ZX8fC4qrgfJUsdVhtC",
  "key20": "4p4mBnHfPyTqdyneCRihFfa9rx4jg16XC3NttVezmLy6nbmAYSRN4KqRY6PU1Uqwwn7zTnZ3ZAw1xBbGNh3VkTmK",
  "key21": "2ZPo9wcmjL9NQsv9yufcSFXeKRM8s52oLKZF9pqxnekEiUGBuGApz9NmGJ37t9YUTPRdK5VMPKpeseHHcBTxwNfe",
  "key22": "5NQJVPVWkiCpA3N5WeBmc4sNpbb4CjENab2erxFM22FgHpxBngJDqh924a3hQMb5wTXzCTPYi2mAHVp2AwLc4EZL",
  "key23": "SPKAmndXL5W2estShjtLZUHZ2hhS3fq16WroHDbScSp7Uqp4RPGcj4Mxg6ZFgCVrPtTmw9szyofhJtRvSPeshyT",
  "key24": "3cT2wFcEKu662EWwjA6RnFZ1b8dGGMT3yEhKPsQmi77ovVumxYtqxCLHWb49DGFFcNmjNz8bdYQMFmq5enGrE1qu",
  "key25": "zEbdsNoHiLfdqpwBDP6fhpE4i4wTCPjtCrrAN4siLv8tRfwhUE2VW3tTEzfpkrdmSXebqsEmYePWBYhVHP4Nk95",
  "key26": "4V5mFYgKFpWSTJugmnY332MurCftkCn8aTwr7Gwv4hhrVCmgRvUtioL2jAo8CyFHpKq1VHwCP9a1JEumQzD5g6Cr",
  "key27": "3hYBVWWb9uFWuuDXtLjPSscoShyqnBAzHh5Geq7ScS2i477SE1Cgbvaxx5tKxhKzfj2tZBcxTNm1Ygg9rvGhHRxc",
  "key28": "53DQUHvgADBtFRycvffoVeGK4ivNk1B9uu4ZCBGXK46K8Xn19rCDYjEg1wNKz16TDkFeRzEw2jYfVr5UqUUMTr9U",
  "key29": "4To1kaTdfawr214Chxws5VvY7zPfbNHanHgqFdWTkqfm5guPV1XQrFMttJM1kr1jtJDCM7j9kuqvcUQxacnykhf",
  "key30": "2edvrAP1ziEhs6Ht1siWikrqQnPMFZcsgFCGuoxHbQSAX2c8VpxsRKviwuaULCD4etHr5JbEjdT54xhBbmshvrtJ",
  "key31": "3n6r3imR97uzMKWgJj8uaQKX2VsMunD2HXKXNia8j1obbJHCc9XMqodg2m79cqa1zDRseAfA5HND9AY9GrA4s8pW",
  "key32": "3JMFwEdUKr94Ka9nxmbSS9JXhMSX2AQo5FGH7VjzEe3UWsPrxahaFzCnE8Ro5dxtvUbRcAzqLKoapFovDAJ5cUHM",
  "key33": "5k8R871yVLxhf6gYCjXWEHVN1CaYwhEBPU88CFZwye5ah2WidWetHvDvZNsay4unYHQ2WSrUAfSRWqAQSmFY3VKf",
  "key34": "2dxSLS34rafiapa96KHNA38g54Nhy3ghmrP3gyDWFAP8y9EvXhV9eujQdJCHV3H8cWrXXFUKBqn9cEep7tv8mHYb",
  "key35": "2VCNKPkPhj7qgMJCUQ2CVXtxhwf2T3XdcTL1wYa7WHmCfyNrdqDSVNY5zdUkJkyvFBB5A146YoGfdczbeyzf5srK",
  "key36": "59N7ewg6mph7GSXdexwQ56zUPYUTN6CCrJw1CkeCwX9hrCvVMfqfhRAbU7zroBhSjnCssZWqxEdewn7VFpXGEVbB",
  "key37": "58VyQwUH9UiXAtCx8VYBFPLLtJUunMdECgB6fBat9qoT5yiJ1bJyd9HVpbw8tN1idnDLBM3oVNLidrcMtUA9EcAi",
  "key38": "62tbWuD54A8KsPCNKcquqRobrdZDtdQwUh3i4iKxky9iFuKnEMgPDLg3uHuQvjzAcTrxu91Yd6KUdSbZJAK9MyN6",
  "key39": "1XS1Kw3z7SsGpKXBGB2TsfuUBQFQvWvi5RqevD1ZJ5i3Qv5oTbiaiyNyQGmba5H4PFSwY2Ehe7TeoJRYkqjwZ3u",
  "key40": "5hcSBjRvSfCF7cEsuWMGSqLyhxrTGKK3Bj98L3PgTDVjRj5BvEsfxo4xSbHeQCLhZMWLXfgx1q48LiHDcyAbyHRW",
  "key41": "XaAmQ3onZiEeSAsihMkgkqa158oxeDfL62zzRpoRPCkMLyPWe6WjYR2x9Dq9bjCtnv35tkzwPMQCxjQwopbA6gR",
  "key42": "3r4g55wdNcUtYtLyGGik7MpWoCxdcyd28ZF23WUcz4F6myNKspaJuGWYznXdJAh2VKyuaYhey5VxiYKVXHZsVTwk"
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
