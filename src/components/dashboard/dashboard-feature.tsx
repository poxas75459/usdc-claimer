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
    "3npCRg2srLPRpSLNyiAzPoPUBWqVNcCG2Rbqsewef42xEVAvyHzAx3vwNgk72XNAooiHt2S974KiHUET8KTwaUN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oqoXrKwse4CzMU1yCKpRYjWPXYZ2K4UXee9S1uTZJX5L2b2yrDd8hcE2nFwLjaDvS1tAJNnDYRwZZyWwcC7QpfU",
  "key1": "3u8uPHQhcLvYivV2vJDdLm4UJzJdmrSbAkUQrhVBFv9kuvVnEnwdzQupo1yWki1QWEeVNPDtQpnEk45tZQCXmZNc",
  "key2": "2rBSNvTyTvPXuAhoSAvMqf9QSidgaURehkCsqWY6H5u8PmPUeo8tHcnkmNya9ybZbSsESewyX1sJvvbgyhptCMXT",
  "key3": "4Aozaj64g2y5kRKFuxjgUS87SRwzXSyPn2ctK1yALqeoL3mAPZ5ovpjMSf1cwm7SY7uJcYR8GLPfrL7DgkPBYBsa",
  "key4": "5poBeomMfDaytAw2KNSgwXphRWXjUoi7jL1hkUisdmX2uQebt6in3qHcVHQVSoU41YwyXH1WUMsGXfxgw4jsuPQA",
  "key5": "5cK9QUMKboL9oB3MFaw83ppQqC4HZ6C84uCJfcH7RdWLteMwCayiYRHvtBJHWwtj5uapotdkh4yWw1Uh4fbRx4Tz",
  "key6": "5Cbr5dSLesehFXrLcdm8k5ZhWCR13byryjDRHq7tdW3tUbJ2gf4c3dx3zs5HXd7z5ajXEE4WcT54sQSeoreaGBi3",
  "key7": "3n7ys6RZNdNpSCZkJPcnMYjc4yM3QLewM5AP4ggCASknquYArK5S8uMgXRjmZxp49rGmN8n5aarGMaqAGxXQ9HK6",
  "key8": "5mkGPegbZPEM4LR1n62pNExH8jPfG8CinZC1vZ5G4FPPBNu4BbnvKtAWDy8DyGiDRBNpKqzhtz9QfHjgPgr52apf",
  "key9": "zPkp888a7bRqr72YTrVvtHigvXWCUMUy3kpF2K3MuE85x2CipR17mHmV6TsicLy8dTwuR3CQTXy6Hr2DTzBBXgz",
  "key10": "4v2H3LHwaAyrLegdFVSfo9hpmPEAc7xDRScLtf94X7nZyACxz8S4DURYfcdJDdWCV5wkCTTMhKiG8aTjqir326uH",
  "key11": "385aUECySP8MT4jAqCk9qAhyTTkf7N7erS9swhwNidfE6s1WuWEgXudG9WLPrcBMruBs1nZkSCnHC9LPHYJSmiwk",
  "key12": "53Wi8PdWKErj1pXY1EQM6nQirZbvEYonLLK1LnGxTgpsB8mpRJLjkUNEytGBgbNZVF1oaddrFq3GPtrv3QAS4pT",
  "key13": "mWB9rzVrMeFJCebxJmim4E126Y6c4BjsobW47fpA6Sft36RHg7qX7CAvanNU6AYCRU1XKYzPRLWkNnHUBahf1M6",
  "key14": "TSPYV7nXef41LbxTPuU3wWduD2rHL8aWfxm6VF9EVxUNaMKEaTzpq4r5736HkgHgNPSHRPg3YCy6Ci99Wi8UzEM",
  "key15": "3XqSrXY6bUEx5GqxEFTtZ4GqngxUfg2tpGPA6B1tXVfUE3kRGC2RpfLQLBh91E8HF1YWRB1JbNTBSnW1ghvFrVPt",
  "key16": "3EJFirfKTF4G31xDT5X95Qo9c23unmxfaJQNKBg4J3ii1ucgWTcrt17A7JrUpV8DQ9R7U7jT3kyGfxdWnVJeW6ht",
  "key17": "4C3GJJ14AAUjGDvwVmZGDyLHdehuGEpLJY7K8GP9toALkDgQJxVcyJsXdSXiPtHuwgaZr1svP1AHaWWL9Aa2AE6Q",
  "key18": "2Tp2ASP52E8ZdCrY6efqk269Dx1UH88WCspBdNsZVhNopNyRwzYrpT9Trpvnk1YhdUG1cwYFrzvLEY9q5fAgDWaG",
  "key19": "QAiujqUk4FuwMPrrkzcDxdsKkphxrmAvYE3HqAUVycwKyixttBqrJxNTZWb36KjYAg7YyQkrG9vNvSWRHdT2mjJ",
  "key20": "22aDg9o5G7s6SGJht8yUbAos3mi3S6TPcsmFbBuLQN61pSohVt98Xrv1kADHwGDMHfamHmK5d1dG6dExj2JSG1P4",
  "key21": "4jQT12rENFbEUnDsQ8SGoLvYo6ivH9v8VDAsdpexiuQWmemwELcJL4Xc4Zu5zqrJke9NRwJGzex83eugnFyZCTei",
  "key22": "9L7fpqH6WBjSAs7aKxQ8kR3YTQ1RMth1tbxTRv8yuJDRztXgx3spAoQmRRuvKbmN9Wvam1iSa3YYPNRbfvYmqEk",
  "key23": "ujqtwd3bP5fuxeb4sEzg9qHGrTiSSBcJfhhd8dd2bW5gAhoJCnafsyuQtxhkJ55YV1gAkeef1WZYaSidD277A9B",
  "key24": "66udZi3edHJ3vtCPWAaUKKKYUKAw3wHryhK9A2m2AEB6Xzz3dcNDVXqrPjRCpsiyWQFsrS7cgwbTVFr6YE5GANFm",
  "key25": "5q7ErY8MQSJGYZmGKkWYyHYztivdW291uV6hwagS2cXtboeVx8W2db2Wd7x2k44zgtqYTy31jvZHcrpjX8FWDwDY",
  "key26": "WVbRiQp19dRc5QJx5xHybSdTJwzt3tGmThPRNCgPmSY5WighcotwUZpbNzDpU7SjP9c53SGw4Mhvfqpox9185VU",
  "key27": "XMKpeQYUkUayN1Xhq25steaGYmsH1zB7wNUteiAKFhGbCW1VBRhcZVknJVSFTUYHNHiktdSumZureARfF6qtAgD",
  "key28": "3CvpQgVKfhS8rmSwyC5JV1RenVV63Xr7rEsgZffJxUKwG6fiG3atVFDxfvwbusvrtsV4GdxWt9rpy6y9E5RNKC9d",
  "key29": "4g9Uss58b4uzLgbVjpyAyhgLhw87T1tvoSvVS3azoREUrbXFkxVBpR4mZ5Vok1jZdMiQkg51hqnjcHBCt2bAkMZv",
  "key30": "2e1m2q3xY11FFDfX6FpTSRrAQJ2KbbtFSJNVeHbBhX4Fg3BJQQnELKm5Cxr5ETXBji2GAC5BHvcGUmWENgqb7gUM",
  "key31": "5SQ54emkc48vcFQYNJjwa6vgaNPAJkvLXN919xuFXdxxBBmHaveqHMt2c2HJPyjmjqwsPakmWn42cxbiQVe36Rrj",
  "key32": "4AEhvdYppsiupTesNK9ULTDiQTmEeLcyTaFh9CRsuXibov912uzwLvckArgBYxLkMDuvretXvUZqwfYvn6EEkVKu",
  "key33": "2zcjZ1r7o5AZD7JWtifkjvNu6vpSb9UubMviMTrS9xCVXzPN63Z9sbzh1WLdasTHURPx68SnVTLY3voH76hRXjeB",
  "key34": "28ozfjVJKoB84SM3ZNdZAhfY3xQ64KNyVFtpr17emk8Lg2QdU2z295ogJNKUiQsQwY8C5bEZcNZ61E2nu93MS4fg",
  "key35": "2mQep8PeHDJAkHNHVsiB4MUXxNizbm3Hg3FrasK73eLg3wvjyJS5QAE9gBaKsxxWaWUki1rn3AHBXVnKFgDFCtJk",
  "key36": "2mAuc17UoQhbi1TGdzfT1qijDXf6Logt54QFajPW7iHuagL7aYLNV39DdQ4QCiBpBAy8SG4D39prdSN5PYLrRtVw",
  "key37": "5SS6REB5NMXJJCzHo8NikCc8tQVkyJoHd8RVzyMQ65RVLavDVc5jSGDP3E7DTCwm5buXrTgsHvQp5H3Pcgt35dsV",
  "key38": "3uwMPweoT4JeY1G2M8nzoVTayt3f9DTJLiRSSf74NeRaPF3PQjeR6inoyy81ztijYbmUP3wwSN8yDwC5xJAom7Hv",
  "key39": "47BM5nraxuNGHrb3BQfzYYkiEGXxKsUpbJcZhXHg8B4uMST76x7uYbewHjBpYsdWNgJNmJ3b5mDbKycLdP4dwM6q",
  "key40": "5R3zg4W7u2pjBrz9Are6c3fLenQmnmbVBEPiKXx2bEqeWGz3XaK1WjWxoWtkYndgdbHeHiSvENamWqgLL45CU8qf",
  "key41": "2BcTG7ZRjzEYxY3VdaF41FUV1bR6H9GLPQL6FyS1uyBpqaTjE8BHj8rhA2YWbHGRh78bW3PG1MKbie477qGNQNHw",
  "key42": "4xW1FHQ8ar9S942PLQ2S62v2JY4hF9qrfJ4btTw3YzY32CQ14T48kz3YABmZA3hsTWST7c4HkDqMHvsYoHocgNqx",
  "key43": "5H6pY3CAFKF2LCE1AYkZQG1GQusDp9YsYy9qJX1kpZCsTpB6GSZsrJS2hdKn8rryyEMMvynihMLVeAtMxCkZSjRk",
  "key44": "5HCvKVBzC569LGpsuGiQXyMdCzRpSdaQpbZi3AQpx9547UTdYgpsYPpFoM7QjpDtPG2xsACq1V7wqU2GaRvvgL6V"
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
