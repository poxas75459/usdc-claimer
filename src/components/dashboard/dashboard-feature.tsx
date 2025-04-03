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
    "5jvoSH4yaAUx8BxAwnjqCqzHqbWHvu6P8zbQqzM5sYQK1x1ywopd9BgVEkEp98B2zSSGZmFuXT9TV3AQ5ti5UHod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "278dMphcEz8NXGZyqxGE18ZY67L135v2kBdm9BpqUXWiEFsYKFKjC1f42BorvamoHLLeFwiujA1ans6At3CZq8Aa",
  "key1": "4E4bmFrVRKXNFawANjJiZJ6bJJ3U6FAf9i14tsV4c3sRrSAwXmbRELBVQGDW3M9DBnnjtDphQXqLcAJpxbZ9mi6T",
  "key2": "2MJgk1ezkCH9Q6x1JfWTbZ2hvzVSd887xZxyKXhaPeym6u2nrGmAQCwCc6gy1TinFHKsMVatrJLGVJPCsfRL9hjo",
  "key3": "4YP3CahsGMoHb684Tjs5ZacUTPv5GbwB8LK4tAy7QmCPhVDYNrHmUZCShjKpHUgFRN7Pp4CTMFy3FJGQPVGFVQgt",
  "key4": "cybWX2Ly4yqf7m4nvi4qCUoEs5oyBCPUsjzkvpV4K4fcwHyrZ7bP2xMLZqGuMpzAioLiBL3UekGuEJVcbqe4Eeh",
  "key5": "2ecucwDE7ZyDpikVenicDjaYrpLVsyPEWzj2E8ngeQCBaskNLSfSBLcRtNezhVNY3oAohK879EAvYmrPQe3SGk9B",
  "key6": "5eipCPq1iDccyzD4L8fWYJxGNR1Y5DC65YzutegXUBLEbZ5F1nQ7rvHehXrUmL8fPfk8DgEmopnpEBam6aMS1aGd",
  "key7": "4J4ZspzpjPHEdoitzXxKSqtVCrxgCD8mxVu1Z656hwsBXwpHvioi66LsTueV6G52q1X8CdybfiMPiDhe4X2icTuA",
  "key8": "48C8SNvFHVtVkT9iF67qBPE981zt6D2c89CvZdsmTG1drs8XesGW5jLxbZ1Z8b3zPawfjWJUYtZpBiKPbcxGcuix",
  "key9": "3GWAbAZUE5MYBoif3w2kK3PktsoEEF9ZUd8w1v9YonWv3W4u5xMcuyRb1ooTxfk6PrVm5PSAYw8F7AEkNFj4W5qd",
  "key10": "4HiEq4w17AwCV88EnZH23Fr4m7oQc9uyGXAjh5WVcS1dX6mYf2xYfeKongQiFAdvCnEJUX5LaSuzs3H4KeFb3swh",
  "key11": "37pPu2JsdMPL8VNh6rzF1YKNM3TkGxwhqt8mTiG7y6FLucUjHw4VLoR3Snvg3aNwYirxrvwwxoDjrHf51NX2cLhH",
  "key12": "4zXnrX7eWzwpZtithBg2CpGx8TWWuxGptBeGMqhvYQA7kLv4T3w5HQbHdYkTcEbDE7ttFmFqssa6oDpr42U9wNFJ",
  "key13": "3H8Uwppnp6wdGZdzKqRNxDp9HJEjFvR1BDANP753g2GMRgL1Mvn9sA9WBdveYUN8ubbPr3jomAMgHgCfdK7ZkVxu",
  "key14": "jEkc8bE6WUoMqcVDRngkeee5TdyHouwf4zFNNRNZtJ9qNSyTnJsW6vVWNRiBukFeeZaUUHTMkwELWtJDHx2GP9G",
  "key15": "62qL5pqRCF9SsWuwxNBfpRi8KJzPoMcPhTSYCUQ6rRGxDG3HiriNkoMZ8pPpYoz3AVF7J4ewh3tsiqKVpH6YJ6uQ",
  "key16": "5X6XWMqY4nowCmQo35Rv7wgwqwAiTmWVCoFPfeqoe7v8MHFuxyxcmkwTiHRTjeoZS9BZCsb78ZeUAEupWGKaNfyg",
  "key17": "zAA3zw7DX3wCb5hXsp53AZg38pyMHe41Mfq7GNburAuWmtHqce9KAo4jCTpWqKUhywrA2CXvsmV57EjzXA7EQZr",
  "key18": "ewNzLAwj5Jxwx8H9rVHE3PTpEE7DbBPFfX8sgiD9UzoCPVikuZVdED4bkPUAA7fsKHty6UJr66DwnoYxCdBYMrW",
  "key19": "3R9meoTrn2K7kaNzV8h3gH3CytNLbjvuHk5FPSDtk2RuL95uvAtPrAK2hk18rofbm3Gw7uUcgQeHXAEoLxrZojid",
  "key20": "3si8UXHXGCWr9RHBdvt7JtJmTQS3ZWuX4U1H41zbAQS49rZX8Jzj4KLDvQuBwgkxDPWJ9jr1Ls8hHcRBSFPeXdDw",
  "key21": "bx7ZAdoGT5g4dSUT5oT2vRxXtca4fc6vsY7qBkznowWquT19LMb36WyZm9NZNmfAZ1uhY7gZfkngrDn6wd1NQ2D",
  "key22": "5sEf1AaA3ai41uA9pTxzJ5RhnxgPXhhxq3jKV2ciSp6xC4DYggtRFCWDX4nvKJSBKFEpJuWGf6681pVE4k6aFrij",
  "key23": "5v8bqJy4gDSzxHeZ7y8avpaab6Zne86WrjCyhE4r98H9996K7kayyYvGCnNmaobkc1k4N7YeD4BoyWBf2QsR1kvY",
  "key24": "55Wk1ocbsLxvPJvTRT1o4C8d9QfpomQBb1H7t82W49zZXTMwRMEW8Xe9dTRUPK9SWnULxqmvVYFsV5tL8bEpzHTF",
  "key25": "2pMdGZo7Sk8wtW8MLGHUL7cwuFYe8YSMHacP1nLPKUYhhHULxZuMQMN9DRtjRmsFHbi3hv1ZLdnNJUKZfap8ibb7",
  "key26": "5cy4jEqByzjUeMYaHxpLsTJqk4wRBw2Yi1yy6rimM1TDNrfCaoMY3KkqsbcUNY2DZHmnT1jfF8N9afa983dc1xWg",
  "key27": "iLNwvwZwATmQLWbojwNg1bAqmyABjgBBGo9AytzHBcawyq3kGc3KnqshPzPU91wuXdh9ab1yshoW5iVrYgwnw9s",
  "key28": "3vfEL38HBQDDju2DJMKGZxfyNnZ9bfTFxH6KLndN1Jpvu5k3Q23RnakraxRVyt34p3U8AGJscYhyt8KAixztmyge",
  "key29": "64gvd6MnvQvynhMTqVG23ikiHi82r3ocyrU4yRcVFEgo19eXhnwZevW24JRfGtnmSitExicVh5RdTNAeKkbjuWGy",
  "key30": "DyxKd91SrT96jGF4cKheaVhre4g7PtCSBsmhFPwxtYHXNHnSzcYWoD9C2MBguX4FXMDqYspd1wxuN2cjawvFuPh",
  "key31": "5wS4CbfaQJ49EHGiLiKR7rYmNgXKN2mzG2XRawMQVMxL2bBB8TypMF2Kn5gsdaHhb34SKSHnJTsQbr9AeJTBC96",
  "key32": "4MBcdhAzjtfjwbfS62eh5cHcFgc8eHJWR3UwTiyZRiKUg2A6daZKeGu7RWfBxZfNmGfLGZDzJR1KXvxy4Xp4aW2d",
  "key33": "2nfV8QjgTSMPVk3RbxjhSandxzDQe2R6WwSpE5pwHH84R7YGpDpiQeoErnRhqWNwxEiYUCPsHhNqHJqarXmCLv3Y",
  "key34": "z95k5pu4E3ehGhZJzPk9nQJguaV5VUfLKTwjTbaxH4o63PhhgA2byPQdR9FtmKsDh63wurLCqiAjXrN4XGKkFGU",
  "key35": "5Jt4TW9TqxJ4Wbh4A1MNM8fzHG3SeUPcCX6rn2DscextFUw7s3RHW3TfV4XpvjMEiTFgRtk5ndkegVSsKk9GybcT",
  "key36": "SZMLE9vnw6fZbXjJtQWRDxN3s8323HU2QbQP169qKq7198u83JHN1pPuNKaGL6D1G9fwpsUDFB5diiuz7EjYwHM",
  "key37": "3uaJJFgvSRHM8JcwQ7qH8CDk1PhuEj5GSrMLZcUEUeoPaMCet2ougQRzwPAzWpwoxegkPhYxFy7m6bWeiDSAsXC7",
  "key38": "4AYYwcQTTVvSkgAqFTsidCFZD6qYmRizFLCGGwoCq6d9hSiBHAN9qTN2EGcNMph3ZpDdUVWzoJQxQ23E7FEB9wb",
  "key39": "67GXCAm4KkVXWFZXfosQhcmG8AG5CXJw6UiBaE4iNJQGdH4XDNRpbnN5SzXu1r9471Sung8K7aaM6mQwmouWbQRW",
  "key40": "5jmTbxbYbzNaSjD6fzssHoRLDhfa5aAKXH6433xex5V5LeRD7zALefg43n9rJnJYsg2ieGPMkKYkgBuuFTHtzVJK"
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
