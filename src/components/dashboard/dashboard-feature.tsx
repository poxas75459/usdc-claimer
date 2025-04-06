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
    "2N6sbuTRBfvbWYZjhmTvjAYrwJFDV4Ein5M6oNWcehkDQS6RyXc4SBmLUkGBYxB2Y2JbALCEDmAagbZkA9UTtXfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KTCjk4DCJ2tMm6avk48SEBSdhsfYkCVUymAc6txUGXXAVk8nfpVWyQrbGWMviN8bUaT1BDDp7cudjrWsYi32xRZ",
  "key1": "2FbmagPGA6ZDWbaAP5rbNj4RNjajhBeYZf3gkma8ihx1isJb2uZyrvWviR2J4GHVY8hbsWbtbFVnFMmSJ2N6c3zg",
  "key2": "47Bn5qy8CEu45HpbVYR5sGxWZ9Nuhdiphe4PVdfYyhnaVKHknw8qZ7Y5Ktc6qdWdSkG2Bm8iDYaS9TAPKQwN3F7M",
  "key3": "2BrAmZZPzjp7xWPuvDugoUCuYMgYppwH3WHU4LcrtZaBBcsXVzUyJd9iShhMFPVFh3nzv2Eh7hexXruSeT5Z9jX4",
  "key4": "5Hv1n3v4yWT4qbPeKDLoVZn7LT2cn4Pc5mL8uyh429TyQt9HtTpVNnFMBguEYUZ7skavc6LPsWgDupK9MS5LTdeN",
  "key5": "2SRZ37azbKaDbMkTJiekURsNCXnXZqzyr4CzGof8BvAtB2ZiM6YQVLoE8ucrvDWbrZNywbDboraw4abixtB1gwc3",
  "key6": "8HE3ZqFzhR5UVDWfVYKeALdJNqomuuXpQZZNnXFtuYc5WwWkrtFvXnZH8XWB2GNh6DJnt6hLPemmh2pXDVoBPVV",
  "key7": "4Xh1F4WvSSYdkZXHibR96iqTCGg5p9qeEhfJd8hyXfuDBzNarA5o67PVTm4xEqunzEuSRoaqYNHmiYfN38qiiUyb",
  "key8": "JiJRy2wHXLdzEZCrAyq7HBDYDmJQ41zwMg85z3m2XQt6sfUKYodCepaAN8ZgLx3LRszMovmvHZzQAzEvd9hM7Av",
  "key9": "3JbYb1YjvUxmcKEdhHEY8sfaMehCJwZdtTppumb8vewJ2JuE2jzaDheGTfiTQy5MDExne3PB4pFaYhQTSQGG7Qoo",
  "key10": "uzPU37k7MkLx3Bcn5kwjhsDr8jB4RMiKTiHuGJZ5Bw7z1ygYvmbVUYorPWUtkUKixDAwoLMyvjGBcCwxXzByuBR",
  "key11": "4X68sPehYQJf46gmrYPmbmXf1uCvSS3acEmZWY365Q8jCrRJTAgcDcQ8ZgHSVBdnM5verNW94T4VPpuZfZ5EL3FS",
  "key12": "qKkptnurF7E2TLZsssaX5ap5SAvuDHsT3eV2w1XtVwt9eR1MM5JRJjpiw89RfaHCiXXv1LmUL13ePnDr5jKmYwW",
  "key13": "5DvVADFxGNNEShUbXcofaUz2B59tWg1P2aszKbXMSCy1u1vzq2VizgkdnREcPfRHZ6bGe2qehdRnpEvHCkvyxgg6",
  "key14": "5ooq2EyqWkkCpE5zDzH4gTZHn1uu58zhEZsEUsoWFEgkWm92EzLi3Ldy6TJg7YWRwrEXJa58ATdynRTMSoi4jMBL",
  "key15": "22HsG2ArhgyJVsXT9kZo2fSJh84gkZNgLpYucg4qAcxyANxjamdo8aSXn97uTefSL9v9sFMrezpRFbzy8KRGpVfU",
  "key16": "Gz7yUEV2BFiJbpomMWRfy2p7aXjuCSUKpku6gTcgGfsbLoctKF2Go5xFoTw74MZmr9UzWck7kVBBpigdUrCrL3j",
  "key17": "24VoK1aEhm3GBLWcHT7TpeQ6VvfdR1txxztNBf68QAxqzSwjnCDL6pXkYXzUNru9tFkbW5Y21xyrdBWPqqk7fsh5",
  "key18": "3xDSwfMeSA1NScRyf3reEw4vYYfWp1eGj76mKGjTCpZdAmUeuhYo4Pykqpexs2xVW5oMPhFTHDvY8HmEt4TEWUVy",
  "key19": "47nsLx4m5Lyqy9VGxgqfbbNocPh9gETF7ayVxdaaBSEyQsvaqaxv9X61o9hQ6t5ffKxtk42dqtp8bCpj3CvkKhrF",
  "key20": "3Euw94S7TF54NiCFrRtJpURmBJGYEUkytJsZoS6LJwXakihPhGi7GGK4YkFyycCDeaDV9GqHT2auawbJjUW8zuyC",
  "key21": "3GrpFFUsC7NPRQ7xiEFoodXQ5Hy3i3KQPeUB1NDBarLEochyhrUwRMRifhm3F81KRPLbixuisdEGT7YcyCJfqxFf",
  "key22": "5SDy4R5XX3yUPbEHtBmAr13fQmxNFWXVpEKkCsrSMTaskRHmfTXDzRnpudX2KtoYXXgDvvfyBadZLzpKFMYbBUBH",
  "key23": "SSF6zYwgW3Ty5eujUKCcwTasjvjc7UReyeAGSukqRcMw9PGetdmrRVG2CNVYiPDNNa85RA699iL3QmwQiMmmKGx",
  "key24": "2v2wDebdosfkC8A41qWf1a3wXpbFZPa4jzYG5SXqpTWMHd15kooK76uPS5dkwtqJqbDwM1CgzgDuHKvXVEoq2b3M",
  "key25": "4n6W8AuX6eUJuK7ypbHKDMVQfG164HS5j1PUCqyRRzqWF1qxH3Up5XYg7ktu4PzcTpEorGoDVJFVsyXe9P17SKqx",
  "key26": "utNEsh4FfwUKcmnK74HakUM3Ckk2wkceeS5wp3L9Es4yLpb3kfjTYiyxCyBSnYH6eV6y5ctNrCBKxTwZGt1LoMM",
  "key27": "4VqPniCCeSmcv9BQJEvMVh8EZywADzeDuHHUV773mJc5x66FoyEnq6gpmUumBWSNtzPF8yX7kJvQXsbd9c1rbCGu",
  "key28": "2cdqcyNyu7qbWCwQJMhgdbBhNQ9fgXn5RHHNsREW14cTZnPmE9SVEABBCUgQuN6eYkKShvxk9CsNriXJczt5qfi8",
  "key29": "5qzZavaRNXB8mGFMtMk1RxJH66oq1UtKrZnHH1SNHUwTM8Kt6tt7xr9TQaG3xzc9icNLHkQyKcUtYsioYG1Aky9s",
  "key30": "3P2R5DXNBQJNQQLXiWw4r4RpVf8fxT89NnfEEgFUQEvrD6xm2LYE7UUz7MNyHM1LAv1cagxnYswBZUoyaxLDDXv8",
  "key31": "496hy1Kg5SboS9ZNJ2VnED2AXwvtr8tXcgmHmLSitDKoG3xBCQVqjRvzPVAjcgtzHg7APG8T6yXnnW8gyKDvzbhk",
  "key32": "TGBeyqMMGPQN5u5CJ4GyLLzgcmmDb1YVuziPbXzcZEPtGmFeeXePzisQVkLmftfPNnjTMEXhknYYhnV2TyhCfFE",
  "key33": "qiBTUKg7MxujjT2JBpWKeYPrTbkYbixxRZ6LEiNn7onFg5bvBhJFfTHuP6uzfbdzEyaXztibkCYsndFZfQWS4wt",
  "key34": "2E4T7Hc9CNBWcsvuJyEgPCsFXdKspK21Yt7eVCgFH8ah4eNufBC67fRVkBGRBxQas5rApdUBwJXpPsnDX47jtcgi",
  "key35": "3q7XEUGPCDYds6PLrmchrX9UQWe1ZeEziLDBVrsDkWr1fgVs9h23dEiE6mSVkCQqCaMB767u1P8KRE3yhYUhKGoF",
  "key36": "3RvTmMvnNeQhh2E3SRorwonmi4qHsTf2kMvCQX6zEJxeNRLnbLpzXFY9S4nMRhycft57228B9Ur9DVQDRrJxCA3R",
  "key37": "48cP1wKssDwJeWinDtnUY3sVZ4Z4yEcyzd8GkjBsCFHgVE6YfFuDAudss2smTa13ggK3TmNM4Tjt3JBjojWnYChn",
  "key38": "NUMvqBdR68aQqxCn7Q37GrfiGmAGooGbQRVfJ87nz5bNLN1uZoBkPZd2x6gUVrU6yoEieLrD2DTeBs5Jm5tVxME",
  "key39": "2Yc2ZiWRyDfCG91YL7AyZfpnqtxwpafNccDwC5Mg6GEtrEMJgomatfgFSGdNL8oUZCBMRFUYrKCaX13KGhr8UU1z",
  "key40": "4zBxdxV2DeYx6jB7V7QxS31CfJMjY8jNm3NKi9GccZM4LQUsYAWon93r8FPDjag1wUM7ePDwsCWnyg1MGnh4o5L5",
  "key41": "9UXcD53XxMheyjqrq57gv5bZUWt8a6JjG3HerjTKWxLE1j8p3YWDKKTZ77nNfJvAopDFx8akVQeNvvWyTogy7Y7",
  "key42": "3AAXzBuTNm7n3MzPxs3Jvs5RyHtpuhr3ht1V1YBVDcWZ5KJrQ2xfTd4CCqrWXsnvKdFaZnw4Duvxy2F2JR4tE38e"
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
