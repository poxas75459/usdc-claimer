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
    "cxwM4Ccujc96WPqrxAu1hqLodckgEkoJn79pwiFzNWuWGEw4yNW9fQFqDCa7NnCR3Kb3n786hd2xd3hFSTAQr3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NdTqGMTRT2k6zufXS9PQKdYHvkayYDbzHR6PYCiXtapMH59ETRqUJP51V5Tov9PrCfoaCRefTAadst9rbFq4zWJ",
  "key1": "5BYVQN5NbdXFeajZtoJNEVU2YvA5FCExFgDmZggDWUURPr1VJz2ZQtmceAS4RFfw9nXZv1uWjr21cDPDPLMNtSQ8",
  "key2": "4QeHdERLcepPkk4eh1mdUWctLT5pMiFY8juDdBYQc4dXNXTBTgPQQtmCXNGSVCcmqgNQEMQub5CiB7Fa9SNeT67G",
  "key3": "4gSfgiiyCEsEFsswmQ5CZCyjM6ZjWXaT7xCa3ZkxZ4osSQW56WuRdpXSeGRhrjJeVfqnwXJsAzNqARrNKMH3dESc",
  "key4": "26asN84f4QWxu2S9mWsyV61Pen2hNNbBZcukrChP7PkyfeUUxcUuKF5q3knEv5FZn81RSikdW3gKEkcyXBHUp5ww",
  "key5": "Kc8e81LyrtJEo4WH8cap5gGUePxuep61jevXu7WBKmLTgdyNcHeDjX6emzaQwxKRB2Qhqahb3qoJ9tnBbKRXVyE",
  "key6": "4FKKDL79VvB67b5SdamNMFvumVTaz2Y3wYjrtWXHSTrvu6VpRfsprbM3gcad8bXfbAKvbi6qfqYTJmGJRBAWBaqT",
  "key7": "3wbmLJtBPh1MM3txgGrq94nxqeiZ3bd6e9jieHhYJk8Xzb5AUTaHGgPcnHacbHax9i9gwqmzKdZ7TPkYnSfH65ai",
  "key8": "4mVeHK3XZoyeuSNEYjACqHHpCqFQGBUjkii9dpe6yCTbMHHqLRNV6uaFZvmoszNhcZ11iWT9jns8nTkQNYrUa4SD",
  "key9": "61ZG6SDgBJZnSAv8izYkfCijoqCG6bWXyifCfTUjguyXZugXR963CfAKTRBK7GxF2mx8igNp5yJKHdvJ6F6ti184",
  "key10": "2oaeSRH3yE6BM6LCGyL2PXqPBKSwcZdB5qgPAYFmzzSn7E2LVVhMnmPpcYHMKyMFo8u8eDMJn9ZMtwMPppwwr3Qn",
  "key11": "3u3c7b3K6hFaK62XLaGBijp4CHLHssREmHWYQh7HfH1e5S4s2tTG3izURh1yRgdKaydubB56o9222Wb1rUXaPsk8",
  "key12": "3F1w1yRguM8NmoRfxXVt83b8vGj6BycEJRdGPkJvjn6o7t7GHzVjkosLsY2JLUGXW1UFXsWEyggPxTzHQeaEYYLZ",
  "key13": "5vFrS4uXYdtPXiEZ2nXiVdicsGuZJKNg2pV3kbt2oHc6svfKREY9uckHvACs1s1F6j57bHXZ3TUTnQ9d75jWZb5G",
  "key14": "2v5ZWGiqAwHeKv9ejLTE77GBvy5dyJt352UEVsSUa1h3vevWZz4jLi8jVcPRBJ3KWFYiTrTKE31RW29rNsED3Huy",
  "key15": "4cSBkeo41RcWuNGHLVuaGczJCiZJHSYcdTVHYZtRhoUR9xwdPWTMLFjZHU1UzhtN1R3HEyJf89E6HTpTfPtKSuDi",
  "key16": "3ey4AF4PXmKip8yExHN3q6wzZukPGHfo35stYL5E7Y4g6PVhrUYzeLCjv7EnnMQ2kZEampF6EeqeLdBeBy8yTfkJ",
  "key17": "4f2JEmCwbm3S4K9neCJissBrTtMLeCmNzREgHE4qPzBcZcCemqqBfrFLQHDMVZDNWJsD8xZRTKALXe8zpJ3a3s3T",
  "key18": "b13LfCaeYWkFZyjvfL2wTTRq8qufxLhkRid5UUH4tR3xHvs9GGDfbQ4YQKRkpsaAsZoefcDcG1sJgvYJf1crk4v",
  "key19": "2Bo9JbxLQwUkCsCAB5szM59aBgquqdVJNaBTfJSnJ3SwdJKX6jNf8XTstB4va16JLTV8Z6wVPB53RdmVeEZBwVT3",
  "key20": "4mWeKvf7qST9S2B3qDEdMnwJGEEWSc6PzvCeYpWAHooJp378EDXNR8krcmhU12jWnthq3pNXkWXEyu9D45vt31rN",
  "key21": "2mBzfGsNP1Nx1wXtdZdXokEbLPVqvyQwh52suwMCXo8MKzjjd3yDS9aaEmfJBhfaC7zSwCHLtcdyafQ4PBfyWsgs",
  "key22": "53xBHVoYePFRsgLCpzp3MYJJbzcW5BakYMpCPGKVLkZEbofRK4TnuFzaR7qePVWDjF2qxRStz4i4NR8aFqybe8jp",
  "key23": "3o6bZ8kEyCLdZhsMn5AJnfyp7tf7PzSPqKwm9Be28r5UqjpDPvv1wC2eR9kZngAAqi1hMuD2QXBj7HsT5xh8sUXe",
  "key24": "5jTTwdUEzBmtZss9qZkxucHL6vPBmjksFq2upu6A77xsdmjsR6awRA567ZiU4LzJinQhNsVsZpZ2g9mY5FA78NSQ",
  "key25": "3MiRKnzoAPNUmSz6gLg1Ai3WyefgVY32zh799PtwoGSDEkNDE3MF5Xp87njrBRY2AniBycMavHopog86ywdfWRMP",
  "key26": "4ZXByzRmaHbrDw7N3FgsR6hUK8KTkrtpp4Ki1r8EnMoCPwbsV3bXpkoLFm8joGvbGqZ52QW7JCeRXDkVvbd1eh71",
  "key27": "5LxoL5p7QQa78q69DDDrXqgpTj2R5EC5uyGCLScKVSfp81VZGobvhnYaRFfJccd51Zaqxv4ag5Qr5RHjDKeun4jf",
  "key28": "3ViMDPvesG7QvoJyfjhTaQn6xjdGimYUhuGYEQz2k36WeCWYMTLMZp9krZw18HJPCVc4RP3JtCp9u4QYZqqXMsoV",
  "key29": "3JFoFq1eQMYk8azEDx8F2djD1BYszN6i95ogtkU7tT1f7HumayCJzcbGm8todLqL16MwAGdAaX6szKhjNMQfk6fu",
  "key30": "4evDmaP1QeGDZD9aoDNUbiP6EHn3QAB7f3pcuCe9Ke9bWnE5eRNtpQdVfSc5RBn1DV33uc7Mq8brKzXD4KNz7oqb",
  "key31": "W8mxBoeBNme2hNxDdLueJKiSoCHzLokSEXqEjRtgaZ8CRmSZPLbJRYEeupV12Y1bDFsGXPpqDuakpY8WVeVYjY2",
  "key32": "4N1ntUTViwppgw6ZxAswVxa6Vse75jtxj5wtBHjV74uUUJ8p9Qa2ZzqzzFuwqV2bNboquPf7vuA6k33CUAPgtPyy",
  "key33": "22NYj4QUVHf4LwWmN31oitGNPx1JmhfsiE42e3DCUHqg6yd6WGTatpHP9TDJUw4U6dca7riXBguHRcbqZ9QCewjs",
  "key34": "5ZHRnzL13Nr9dLxkAQGPFGEmqucVJx6iWna6w6LaxZyfWZ4Qu3UPGVwsz2qUt2VNKrUAFXKQ4uGGqsUBdjDDd9c9",
  "key35": "3g2cAyRqn2M7WCBQp3AmLmAGMxdkVppNuEnuQFFRGpj5zaPHVaTUwKsufxpQSkdKNW1B7yHPGG6KKydBa2Zo5KZM",
  "key36": "3QdCp3Y8K7Fb7CjfjR4UdvPiUuknxNDLiqFBTrFcXWYGMJDuvFMnBbUbLJBfXGizWkL95zRWNF5b1Ks5MNWkspPe",
  "key37": "27SEddfiqMt4uXgCvpvJpBp272jQKP9LikbXSQXzgEkgpnhgGMZZW2wmpLMLtzkUXCFsk9hfY41x13ScyzZPNyny",
  "key38": "45PqAW5KjCXmRxqKko3rfTCinewKVphbAXzB51XXfCPD54A9vCSzEEkL3XuqT65SpVFCWSMHMBQLpjrZCNjriLih",
  "key39": "5KAYFuxiBWbDgbW6XkoMCqiEzEYMcRygaDAoN2wMvKrAurHiPVMUmPHbAk8VrbkTzNSHE8VfnKoZ12JwN24dp3dp",
  "key40": "2ABGTG3mVxkTQGPi73x9cyRQEgXG8mZXAQCQJwjbtKpNMDwHwvu4AhJpFuY1J7aXdf7vzJhAGHRKZuPs3cSa7ET9",
  "key41": "4gN9QZLreYPeXqQa7Eyn8uxFu2CAH3t52frF59owSet5mjQQTgmkhSBsmCPbNYsWmmNA6tphvkifYnMr1sj1Laxc",
  "key42": "qWn9RSkR1PiYWkwjT77dFkLjy4fnbZGdnAbgbevSmXosTrDBwxJPnJc8fSPHNTXM6tHNZH5oGfudqAbzvXJZqb4",
  "key43": "5SHB6RaD7fSxfUsMVPFqnsx5mZYK56pKjKoHoWYbyDCoiKxMjmoadwDF2kwMuBvYS31wbzdTM1qZzUtds5tvR9kB",
  "key44": "3G2suP5bN3mSGRbqC4TuH1tFh2Li775gq8ovZW64z8YZk8g85XkXGhNBHVjwhL4VcuoXmA1kLQ1cNsFNhHaPWEQQ"
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
