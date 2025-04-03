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
    "5RwTmDUvYB2GnByZ4Rhng4TJmrBVPzPAp48VQQkHVwYvUVsW67PsVhcmyVzmAubWAAif29egF7d2mKPb6EU5ph2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WoRBgHLRJFBp1Lj9DWL4XTGXhPvSHzbHFBU2YS6BzNW9jEsoxfhM1eojCPPa8YaZo5YjxUCqBvekfNFSdHxhX86",
  "key1": "4SAMAYKNuxxdWawevN4M4TYWMaQAVoFwVYB2tuZq9etHQ1u3HXxBjvtz4PJcU8DrkALeUedGXkVSoWAxiA4ApHb2",
  "key2": "3FCnRApDuaHLwga7eWfNCmfXcbmdnXVayw4XzdKtyRaK3w3kfw6LoQMgHVhCdu4HhAh38uSSk6yeeXB8pbmXbPPi",
  "key3": "akscRShMLQeuzDXmfZLLWkLvdVBGTgKfR6MWNEAURzdYhDm8YEuoZvnwjaNqrB3gRpnbEUELwCaTUJo8NXpmR6v",
  "key4": "4PsFbqxPe92ZPidDTEm5vppd8FXdsV3s2S32Ys6C7jwMpGCp4MXzNd8pr1WqdMrEXLUorWW9RjjKDiaKaGv7BUH",
  "key5": "2jX65KoZvLYQctbhsHYQVnBECWXBqfVwooN7qEV6BdHJR6gBRK1YQkyrGMuhNE3gnSU3YMJbAZPgd9PYaCNJUBGc",
  "key6": "4CYQRhw2jS3gfaUd9CL5p4uLkTKLqiVQ5ygyS5FvcL69EcFpRc1FmvuqGfzLumThxLVHr5EinWcfNr1yvSukrTU8",
  "key7": "55mJrEY9VYgZ9TCA3ufubKZRzt2jXosiP8VqoFUCtKxNqCaPXs7L9kspNpuTWHAEvKDyfBty9UYZdNm9xgdAavvn",
  "key8": "375eBtmuyqb97uc8byWPL9gXRoA9pdwbTkc3b1CcSWZPbX2o4RGqp68vUa1yzHzGrqBCfBxqq25QHmnWmcAXY2iZ",
  "key9": "5ARNvUvPvGTqi8Ejdz13nxMNzLrPSHdSZgL31t4YfudRJoLhmVRd1g9T2nrYKHCAvxwXdTei9vRVH9sgtohW6zWp",
  "key10": "3bNeE4eKwqaYMp1K4SUj5XK3x4EQnASPuDiLkWmFimCw7Ey5mqh3GUP4SiGPN3s455UsEnibqJMBrykPgfVcHVhK",
  "key11": "23BQg5fxq6RyKNFZ5YEzV3u3hph4wZCACF5Xjrg6rTmDZCDKkiepRrSPrWcVFudCm32ymRnH5pdkWwUB3c3dTZKD",
  "key12": "2tsKf5h9kASDHSuB26LYq381Jbf5c17m9wzf7wveHXeibxXDXjjefBa7CzcoSyaizrZkEJq2qmjXzpF66At5wPTq",
  "key13": "64q8jvjmBEAPYHpQnhkZWCwSkEixNJM7e76QWeAkDjwCzV5qqX7AJJLFyg9u6qZeSHK5DNBFYSRKhohCftkf3beB",
  "key14": "2gTCMCqRnr31tTQntBiPCC1M1dRYmEc3WQJ6GCoLwDNN6Mv3qqJNkf9zXKaN4CzB1cHPcctFLEaobvaSU5rS8nda",
  "key15": "3jPuWDvDK6qNKhQnKFi7TjyUvRTd65GRS9YVyzuQJ9Q9D3KKvAg9XpQKp8uL1kTrS1GUNJCQXmZu4re3XgSu8Pti",
  "key16": "3eDi3aqBSDMi3JWesMEN5EMaRfQxiQhyrT8E9Xgen51qM7YpFsgXopNWp46Dp85rExB9z2DiRWYgadcXZA9gyBBf",
  "key17": "nm5z9aijPJMtM4HpLWX6dK5kHtdDogH4w6PoH1BX9VDi4Y4sB5BdhbiJqKJ1VMRMww5mBpDktZ3Kz67B3HPwyus",
  "key18": "2HSZPuyB7itCkRqZnX1KahLa4aYa14aPb4W3K89hnbWXrtCCb646ZBpiQJLTK3kqTGnxcCXh1T7AWyhJ6hzNpgzA",
  "key19": "5c6p3sX43RPBBoBMqydN3rD6daZWDBisquxmL6yiPt774vzhJshdjUxs9NWDJ4WhGekXhsvKsgBNNYFqSoMkBwQd",
  "key20": "36C2KqsKPBBmBWWr8qfbZyDBmi65z6AgxyQnNTFVVePGgeh1mNfkiXqdyZY1XRn2Lp9eCBy9mXQ3jQ2bJYpnbF6H",
  "key21": "2bWVmMWdgoAMhsanKjspR6sZc1qvzutmnD39zQ7HNxrTjEZJB9LtYnAPTx5sBz27oDBaYWA2JRzeTiPryNMYP52b",
  "key22": "qzkmxukfccxu7GX1yg54G47om3jXTN4TS1pdZApHaygX44T1JhtHw77SWYFxAq8RW9BNUvVqTY176cYxkvzWXRM",
  "key23": "44cRF7ZJWmL9i8M5BpPuQM4mGVcjPPnTXeMk3zcezEzRPjPb9FgGpP8Jvg6krgRkfpLg6GPjQfZoTSJ2sDTTojQU",
  "key24": "1Kuy8vLPs887rkSoW6HhJtjS5Zy77iRSLRn1HQhdAXCMUE1bNQWpZzPxwk85MzTQLcwR78PETiXkPVYLDwtCbsB",
  "key25": "64rdeYjo87TRtayQ9qfQbw5BLYsseWTdcz1u97xFrih1d5G53E6D6rQzMGvw4PuP4Bf4qMwN6QsMRzoX3Jf4yNoW",
  "key26": "27XbT6nD2Dc9pJCBX3RMYa8GbaF1swQgVtNLUNGQi4Vm4Q1yHCMADKDbnx2PHceALeUL1Xj9UkNF52qYTQk9nNx9",
  "key27": "286RQQwCsEYTVoracUDR62GASyDP3FZkBYpw1PPEDn1o3tHPdFSP4kFq7ZcSfvHcFNPyUTBdg2dDRj5BZBEVZyo8",
  "key28": "2p2yBM5LKnmG4FbuMrrhS3LrHVpBqvgYpESJDtCwbKMGnb9fsSuAb6U3XP3zgy6aeAuuc5dhYQQxoqkbqdFye9Fd",
  "key29": "5y3VnHZYUzopPsjiCscFoP4zc6FHiBTiXGek4GuzVRFDL4TkC6K7U7qa1dRGfnvbURtJrei7d84hfsrRXcdwfrMV",
  "key30": "4vyrWAEe1WCSSLwNnmaEr1sfrx2hsAyZcfMEZxSoZzBoyGcjn65MDBtufedLEx84pbVJ416rn5eH5EJsWThPi9cM",
  "key31": "4PrYqhiePtUkx7CJ5vDoJpUe13xAFpA2VfypgfiYFs7uVR9y5em2jWzP4rDaFfLSg81Hjh2ZGpJgLYaivdPeWKmD",
  "key32": "4aMePrAM42iK8zcanUokYXVdYthosYCN3nCza11sZuJZNgTrTVLDNpzzwKHWKYi7ad7wE5WnEeqDtuhk98B2EKdz",
  "key33": "3gnrqkkt6iRdmtYrVScj33vC7nHEQXD22wGHYAZdAZi2mq72NZS2sPozKx43FGbG42m3h6fboNYrprriwoWmpLNB",
  "key34": "yoEfWJuTyzBBxyVRMm9NYJUecYWzcFLUM4F2eeNfK5aDVt4HK8ZVzhcMSPbzZ1nchszfvRojRTPgh4f1XqaZtSQ",
  "key35": "3SJpnm7Bhyff8hdvTxwYwA5YnU5ohQVrfzVvdDQbPkwJ1ULLwD4MJdGLEoSGCJaypwUJmtNGcXj3AQwg4TM44EKN",
  "key36": "5pbrAipY1Ei2svF1jBXqRFkhbYTDQvcSSWExzRXBmc9ziNWuYhys2ZP5b1TzuHqerY9qaiw68YudBVhdTPMPL5KH",
  "key37": "4XyP5Dw22FL8Txx2Zxa5CAggpHfYe7j6YZoFyobYKeRiYuu7N5wZJgrQk2kqftoDYPVxcCVUV2cE9BivFPMjFtf",
  "key38": "2ThqBzsT3KywNPuix9S7WYCiUMj5YMnASgaobvDzEB4h7KDSTFFBYCJZ5CYELzjCbicY9cMR4ado9TgHyZbYaH5C",
  "key39": "zzxfSssU7fNww3C4fnffud1dQQuGi6vZZVfscPFrETwpmabdmU93yPgtbbuCyFXZ9t7zDJrfUWU71EmXwnJTZgc",
  "key40": "5NnM6xiRib59CR37Lhs9BxDFfGb6jBpdsLd6XL5wwxAixSsB3fYHAjdTmZHxARKeFNLENNEMjKXFxaXrZnd2teun",
  "key41": "4G56TZNaRUWCxSAWVXC4LE8vo8bjxpEnpuXrGbmaZsyYeW5ehPGBzntaPtPk9LpvwLX2NCcR2bGm8g3nBvU7ZQXj",
  "key42": "4nDvpMGJxYSrb7XBhnxWeLHjjAy8jWLJWg47zEJYE6XUgEVx4o7jcyxjesgFx17BJTa617WzNBvzYiv8bQdDz3Z1",
  "key43": "4oyedCfFAyoRbV2KWhduLGuqhmwLvkxCTVeik1fPuM1Z19dPAv9QxuE4fTbdNNnxG9NBsFdhSccRuhmvZ9U5evQZ",
  "key44": "3wzhJRSuZii7A8v46gZMnUXDHoEJ4KRXMAWoGyLVUSn1JpYa7b7RW7uDJuSP99B85jTAW75DJf5hotTszW1zGdTr",
  "key45": "62rhJqtirAihAcukx9qPnfJvTjXEchyFB7hVpwGvwa9V5yx88mJAzQ16sXg3TWkQWee6NMrWtMfjz8GiwmU48jC4"
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
