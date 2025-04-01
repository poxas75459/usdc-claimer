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
    "3mTz2Z5w72RykSPCxkpZE6SKG33QFsM7TjtZgvNSkBQhfKc7WNdCYgWosR6A2AhdMLHhEwV5TeuXUas6v19Sna4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZJ3bqgwq15Ysegjdrcmmu8HLodMfb6CEm3UXY91ssLTVxRuYAF9rgRp8GrjFVFP9H867chYfvfwe6wBGMgz7fqP",
  "key1": "a6qqMjbi8hQYQEvXiCVxAGH9pGxcJJjr5nbawiDyLEiSbcjZpCrQ67r4XWkKC4AirxFhAxm5LyerQk7hPMUxKdd",
  "key2": "xMhZmgcBFMwMqHcuLDFkApXaZjR8jRYw88PNnLzgrQKTjb13ikiFEb47RfGrzbRJiEnUzU4NDUkXVcmRNLAkSvW",
  "key3": "VLCrQ2q3vm6Evc1RXTh9g775ewm8dCb9Cv8GdtfXsAovytfUWTcXrizskqXYxK1ebCYm3MxSZqR5eZnT1wrkdNg",
  "key4": "5VgcDPhaSq4dbjH1udCRQsKU9BSELozVKVyfsYXQZjk5rNpXhCkadBnJLq8bi68jsioNd968tUhqr8oKxREdRXLE",
  "key5": "NS43tp7B6rjrz3Scfes7r3PqsisqWNRim2G3dE4rjJWkzgrr28S6s6ghmkMMsFGnYYAma86qy9JGcYJBitL9aHg",
  "key6": "4cRmedDjf6veaPR7sFgxAGdxaWds8MnThwAusA3q6rRaabSae879CQW6uhQpEWXrjWsvXChT4FAaKA4jwGYLTxPp",
  "key7": "3bJD3Bu5c9uF6HkmXwsAwXWnKdSQLz7LK1H2At2VDq7sPP5pcf8Et3dTHM54HUKDWenmCRiSJj8dJ34cY8PTciPi",
  "key8": "4GgL8pxBP8ftbTkcB4exjcCnDZkkcg4TbtUhjKG4DMkXUtJTTYfbUbZyYRJkdrEvfLRypWd4RgZJNdFTpoAQFmZT",
  "key9": "3Vyb2bXYLMFoXY1u1BnSfgV6yZAt9mYXttE9VvvWzspWKL6q7UC48cjHe3rVs828a8J94aNDKyW5mCXoiueV8Vtu",
  "key10": "5vaHWsAcnVtFPG1nwHwE2hD3DDtrwXVy8DWDUM8TwogY1D8fLe7uubQPWjaw9WigaGRz1DisaXsE2DamaQ6numVh",
  "key11": "25h4SDmK46edNfJuN3pGUVau24NdfLSM1p6eTM1E4NahB9W2xvc7TM1gSqTJnAZNSu3RfhEKfVrethBXHNbLLvUF",
  "key12": "33Wv32XuXn8uhH5X7w4gf5U2K6uwzXfzvN67sw9G654YgHW95q5wYt3vCPKZrfWjks8ZQ955ZR3TJaYUTTH966xF",
  "key13": "33DLrmSNSqjvGEVroibWBgHFDWHqeX9BcdZaCzStA56qorAr4d5MvJAsEqRfPBqfCd9CmwPeGp8GiEgwgjsCzox8",
  "key14": "2aj9s1jBR4nNGADSdupLUGBKmpYF6zozU6kZ65Uvojn9sh7kktSSmCRWJLhZ8dCQDHSaZfa6GeAJeQDHY9zGshHX",
  "key15": "3kXAwVQ21nLmm8hFpLZ2to4E9UEUkes336nPKKDRykQZzHLYt6WCUa6ox9KhCjMjjoU7BQdMaMVFaqTwZiH3ic2f",
  "key16": "SWhWYaQZtV464GkKFLWPj1gWd34Yccp3NnwDdb7AaWCR2esjBFv9jRx6Vwm1sXkJXefmY6Eo7rRfZXfj4w3CNj6",
  "key17": "52Af8pgu2tH8RKvriGM1zWr8yQBBFBuEej1F7kGRzgJwZTH2ALLoiXc7tzNNpZ6qSjcpWnQ1KQbdKgNe8sMXZZLc",
  "key18": "5o5UZmF8jyiihibfVaQsNDFywBcHFx24dxPBAkPvBtUvhhtjgwrR7iMMeXsXsntXkkNsoCTpkAYfWQQLYo6YMoKz",
  "key19": "56w3f5ENDpDCVMkefUq2HXKbcVxTbjwkEZrj8e1MdvxDhta4mkpooZRamtpRk5XJ6KikPKzX4dUgYPCYsg6nT1UC",
  "key20": "47gXa543BoSyBvDb4Z6oW8NcafmeMMfabudVGzidcanXSQiZyekC1x9MFco3JYgaPGVrQRdRQZSxuwmoidqoVtD5",
  "key21": "3VAah16sG5kAhKSkG7cYtt6magxG62bys6aBReU6PzeC9wRfbxcKQD11kR989JtxPTWfHKMbYNTdESeeSz1fnHL2",
  "key22": "2uTLgGNLBUNiUzjKJZfzWVq81fV7jzMzKSFZ67wEKvr7ufJ7o8mcvZgE2ZhU3GUqeMx5b7vmtCSAKPDzEzRHi9KD",
  "key23": "3jVDajZ3USLLBRSfLDVYJPUVZjddEkgtnqpibwmyK2gQ5QnfNYJnR1kG8RJAUjGbCee1KvKiEAc8tcVmHqsGaQZR",
  "key24": "4qVTmEBmiT9LbweSgqxfbp3mRonho2UGNQUe4hedySCe2WaPVHKujdYUvsUBe8W1H64hXQppSsxhLyeEV8fiGSDV",
  "key25": "3sEVYkjkUoKteXqjv6Q7VYhff5dzKAeVxZrpQA8rhQiVuR8mhn3FznTT8S7rVEssLrvvfd75DrR4GTeh2Kk8avbs",
  "key26": "37ws7JUoUEZsRLu8M4QyRuPRYn4fKFTcHPUDQbiVf3AURZWTgFsCbJAdog4FFwSse4i4GsmgLaGiovxARLe9XnPe",
  "key27": "4xq7qt9NPcrLYQ6bHN34DWjqtMLJe7XQCf2LYGRk8McDkmdvzXDQ46bRELq96ZAxJBfFoG5viAy59sx6rHwamu1Y",
  "key28": "t5PTN21KFpSJ1AbXztbQfwuRXcA1kFdq6BPUSQFsRve7kfF1GtFhLoc7r5i6PGt3GAhsk1fM7h26FgjZDUp3oca",
  "key29": "3bMFPv1USUpj6cEhF9eU8x47SYyU67emGEwatGGd11GfXrJCn37vgpumKHvhcwttahnaKdusJj53N5E2BafcxCRT",
  "key30": "1y8A1ek2eASFA6hJekoRPzzcVptVvw2qfEKQCT81WvqPqYDV4paGzgfxuco9zvCPpG3hkLXQBeGfhgxiWA7aDSm",
  "key31": "4QmkzVQzQirfdNS1WihhKEHuUqq5n8xW7kNQ3RPER7xHqwfHUGUitZpUvH4MKCuSZ12J6vf2GJW5U6XHh77D4ZMt",
  "key32": "2PKYBwnhKyXAgBBoVThmDbYnAeEfjfwSVGYaCEfkWkPB4ecT5dZAgrMRkmMC9DBTumJt9rmq5PBiabZFvucSuR9f",
  "key33": "4pL8zHtGp8svgmnPPL25yeJf1FHnjLSEvrixcn6Ew2ScteWqnYkjU41eyhQrEU29ubXAXhEaRAopYyMFHxuCPsNv",
  "key34": "59CDLca1oaqAMbp5dYRT6KiqTEqGX5rE9gqZz3rFnuMRWsjdtH6TY92kKPvsN6FxkP7CHWk9MXh6TD9jAag6xs8L",
  "key35": "4YN3di5A1icLm6WApEbtisG3oDv2naCiPuyPqZT1GvGnMLGJ5zQBKQHwgC33mxbqsPSVHeS3SWmV27BhYtA7ZRxX",
  "key36": "5SQ2PZjqu7gTmWr8VVb5JatxonPLfoENWbMb9LfkEUWBdKzCt276gXvUACdHrMsZp9y6vPzej12aiGNMhddvBDHC",
  "key37": "45csYjmkeYZ15EbRVwaB6wzSzFm6hE7pRWtZktfdmi7eTvh6xXCs29QUFq53ao9herzczycxmdWohcGKytpLuVkS",
  "key38": "22fj8TJThkChRxsYvooZHCMkBW2UzRVqW9gp2PoLajeBwKR7QSjXmonwb5jwmCmF161vVwMECdFBgy2feaQrN7ns",
  "key39": "4PNQzwu5yzTmvd8r7HtyqAgHg2rxwR6i3C7M5oGDj9cH1jg75uWykXudZZgrcCZSCfEZZH7pDmWVyYAwMKJe3BGa",
  "key40": "2VTMD7TLUCE5d6fgK6WPr6z78vFMG67ReviNQDiz6K5co2e3YBVU6m8VPDQe2ARSXxT4jCHFXXcdtEMBxc5WDkXD",
  "key41": "5APwJSV6c3DEj1HVLFPNpePGWKBYcy3i28KLoYioh2tTCejkK5NRY2nMCzyR5yPf51Mr78BoXEnQmjpuc5AtNFTX",
  "key42": "262JAfwAeWrfsSKtPdHbySAq5rkvnn9mFkDniBbZZ9oWcdN1T5y4ZjDwiy8PXDr48Dt9osaGqqj3ZsDWBTyFtrxJ",
  "key43": "2UbrvyJ64ma1MgFJjvSJi71JwWuHFSFgFYNkG45PJ7V6nxuFeETsq7y7DwFrfd6HUW3UP4tAdRKAoM2k8w57QfRR",
  "key44": "2y8g6YQQzA8LxQkTofBF5GxCcoqcqwz9bAA1XbZbtjVJRTwySiT8pFVK6oxRT6vTERbb5nLKuq95eTiS4Ns42nzd",
  "key45": "5tgihaAss3nQTrkuw747dPZH6vmeBdXG3TPNxeYSfziXK2wQcMF29Pdk9CVPFkUD3dKNiFqEPokDP2ocLsHhvCGJ",
  "key46": "TKaEWLxcQNr6u1CAwQQQWqBZc2JGE2yhad6T6ooekmJafMTdTxyiT69UwAdg93hjj6VYSmSzPkmkE8hKnxbTkaQ"
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
