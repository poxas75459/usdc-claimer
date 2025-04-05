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
    "4ao9mLPhF6y257fugQmfnszKgKbx4zEv3ygcyQVnHUDSnsZC3vwG95vQs8JRf51iyojjVGqkbZ4toY4mEVypJFB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqKyzFDwqC7x8yVjv4DAUkDWjA3rhw4QP6vzdCpe2Rycpx4jh7XE3ot3vVwxwGK7wiC5DQ9uxPLi56eYKXVXfFh",
  "key1": "2BRXtMrxQAs5tVK9S8GVuLJa3VdVsFCNGkT3nqxZWzdd1c44my5nCxdGudQ4WM8UysYJTsX3zMvrx9NX8zgBx5eM",
  "key2": "3MT8TfM7mbuNZvi5BjsvKT2mp3enh1ZMLYpqrRkf5mCF2D1WkonSqTfjY869AjfNvAJrXqWekBiJPRrqXkdY1DJp",
  "key3": "2RMGPWcw6aXy6bX83ux6XkPKEox98XpAziQTxqaZmhuvD8b6pgrN5FoHMuydgG5izUYoSgyywLVQshWFeJL1DizZ",
  "key4": "46UrzMFhd7qU8i6suCp8gyPoZZM2TtcEvWHJVhm3uWrVmLakTPLeU6xS7M8xxZGE9qzLniAuc3PxpPipP8BH3byB",
  "key5": "22yZjki259DSqTDdd3W3u2GHrDBy1Gez719Xs2c2t11cgRx9z2zGcx8SejL4Q4KmtSKqNJ8XtHe6nF4KRBjaUZaU",
  "key6": "52yXFmrF25MktqqmPixHoH4KvSZgJJfs8RSTt95Qe2xDnmd6FDyLk3bGwAzcvhbcmJW4UDryxgNhnGbu5Xd9D7HK",
  "key7": "2k1QYjJvvCmSHMQULBirP4BNXGec3jA8VSprWhtx91PunQot6PdqMD8Tr58eMVjroARjSQTJD7NkyYuKqtcuPrYy",
  "key8": "gvwuKQeSu9ZDWUPN739jxKXmRuD7DCAkrfXm1EbwtEg3nv28ars8AP7TV4ymmp4zunRnfbRQRnqKutA5XBonaxB",
  "key9": "2fV3w4WQfmhavJ5SiGPhA9JHi8nBrBiDP3HB2d48xe8cExBsRt5BWE4AiySrNg8KfKVmckbrTEoT1yfKypGLBhb2",
  "key10": "3jBs9GZWJZfNvVmbEj1MSuMWdHs4pTozMujfT4kLkgNtEXYPeYuULrsXL9MrtaR4Lhd8kG1ez63iKRWsNJXpq3xN",
  "key11": "4kTABUejzPEGgtXYNLHWKrCPoZdn6t1b6UNUAT6hPnSqsQyULXLva7tF7LKNcqitjNpzaapC8do24uXHn3NFUUsA",
  "key12": "ts2SmZWgbYBN1xnZAjSbjWhkiG7XTtNowryMW2t5rYPrznecPctVL38vnsaNTNWo7Fsycz3FMt1NL6V39PkJcXy",
  "key13": "2X37AvfRatcpDrLJ2JHLWNc45RNwVAaGRm3iwA14KbmYehtiwYUdoDVyqwUf7K1YCwbksmXKzJPNHLHvEXxX8xSV",
  "key14": "QyEvqfVBty5TBh6Teo2Qk1qV8cqZKwYZfAvob9h9xPZZbqDBUiD7FyM42MLtFPEq1Ej4qkMR5ZrkjiiFJvq41VQ",
  "key15": "3NKKg4VVXNvvebTA8cwietW8HLJg1hdc7Zvy3XAjyHYLmtoMXNb8cTozoMePMPCBBCvSKxcGfPe4qHXY8G3HCrtW",
  "key16": "diYEnZEiUKPQpdhZHr24ymfUjsvAGDSmfu7rhQ6GryV8NzRmzcpVmWRBmjjUresnA1EiUbM93BGsPVgTCcatNKP",
  "key17": "2adQ5cjjVUNiiNhi8AypG8D46raX9v3vyogcH1DqYzfA5JTkx3TzeBXLZV76hS6bNWakLwWXEvodDZuKzz5yXDYH",
  "key18": "5JwZ6X5PihcFw1QfjAiLiQdVVAKnYTVsLxGS1zN7WDp6fVTYb4PV92r2RxTWUVZASn8C63rzTjjKcKNh9y5iJjFk",
  "key19": "58BMKxh8SGah1NXgrnjprwyARnHXvQ2Ce7rAoRimBBniyucgdK2HWcPDmTvEAKJjHN3dtEdPpFJ2G9SC6xHWGA1c",
  "key20": "4PT5L4ggaAh9HTk1YTVWazmSa2P5yQyeDg7wubHvYmon9ScesmJScenMzhVVXCLHHdcaju87geUZNpeorKNtnAaD",
  "key21": "MAC4c2VLs2JsWJbBDaF3tBsdhCHJR66an4m9aRVECUAW5WkgeVVB1XawRWorpANGN14wHbjy9fZaep14DvAGJAV",
  "key22": "59XcderKQZXpb6yyH7h2mPHCikwM5rnTmQKxP5jvAwyV8xBBUCABKp6c8M2zrQZSx5kcrFY66EUywHi3h3Qretj6",
  "key23": "1XxRU3XBzmRKZNMiYSFzbL1jS2JMSbgRV1LhhYftt4r54TrVmYHADJukfTysZwRaDCi5KWanymKVmwBbqQ7a4E1",
  "key24": "3TjSA2vbTN6gKrcveHzwT7o7nFbQMdqKmxS1iRpiAfGFAaYHzcPwPcnSJFBSDgVdHMmzMhw36oV1KejuppQn9ZpS",
  "key25": "5PKojvAMiJeLwKsMvR9neYTjHfmRjnr1Tqm9dnuifC5NHaEZGGuE5CGKNq5mjfJWMVPvw9EkdyzAJCAKTq9q9vgc",
  "key26": "2dYJFQAUUNnKjmhgsqbiiLgBxCTrAj9cTBqEnhx7dabhD7THwCJqERZ71QfHwv7LkYzW3VPb8PbF6ifQnumEdhBd",
  "key27": "2wdHbU26TGpx3VcQMCsEJdr4MdDveSEc9hES2b3htAF824HiiYPRHPDBo576NaYSvzGkf7tMVq5TTHtmsStyTDcq",
  "key28": "4g9VJDWWAiimbvyMGZi8nGV1gChcNotd4YdzqsJGuxFLT4sbkwmWJUEb4ieV2SQDf27iYJovNUGKyphagN1unVfA",
  "key29": "4Y2W16hYbAQYjr8qy6M36G6oiC1CB7aSx25qmnqSVr6zpusw92VDVrAp4dfTTvqwCnXd5ELmHPwNA5R5HbGNQhEg",
  "key30": "2uzxcMVSbooicV9LcsV8SGVCrn41VNypVxRXQpXGgY6usDUUYXFzhgpcA4vnwgkwasV2DdhyGsCHooj3HjSbiJ9k",
  "key31": "41y9MyT38Pbw9sYzTFV6ZF84YEY3DPorj59gEyJvNBM9wP3sNgZEK9mjZcJHQDXSxhYNyTy3QNaUPZxDBsS8nWLc",
  "key32": "2qtS6JomN2Xo5rXi3ZqJmWZGSFtSzpvdyAmsbmxKx6uZ4oCz2nvHzDVDxy6gdYaqtRxrE34hqd9ZJDqqB74Xexu9",
  "key33": "5w7o8Ek9gJZNBT6oEi4tWjF3X84yWegJaJjWH4ur92NMVuY7YLKwQqdN5UCXAe1j7tfQbEy5WjyFg1vH3MXs5gh8",
  "key34": "3vtXS48z6NGeqXHyz21n99yeyfyzrnYraKhbWeLwhTSyaqR6X4fxwCeaAKC8DwVueNN3GhNsDp2kFq9FRFSXDSbz",
  "key35": "4TtTiwJZFbfZuxDVttsd3wn7MFVGCiBV82PAAPHeb5aeF6ZBFbJbgT3XrFVUTgiRQRksLgVxAgZZbFhCGZ8cEmFH",
  "key36": "825hpMeH427iFJmUPm2EtFuyQQxsmMB6ibEAUmtjCjeF3Gz2KAZ4Pdxmi7RZyqLsCdseJ7SB7MxjuQKJMh5p1Tk",
  "key37": "y3VJxKHqbkTgEP2Q28z4nSbeoBhHo72EcGV5dqEji8Fc9BpJDSkss1q22MNhnRDngd8bdzaL8hm9ajfdnfBLLZJ",
  "key38": "3oDnTigftN3c53AsYKnT7JDcRFh5AUKdFHneW5h6zYADW7AWEPUWzNYQ5NJ8rx5HmHFH6fz9TakFQHGqvi64osxD",
  "key39": "3wQAZFb4avg84B2JTwv1HS3gQs4uAFwbGt3HY4sAwsnAQsVd85aXc2MQdFsoUij91yth2dDFLxQG21y7SpHYv5UE",
  "key40": "2tVesjfzv7cBzvDD4mVD6NWWZgkFkUEiXoinM8rbAJ4GPUKBTrXNJX3KrvaEDwTeBbMDQyHMvTBXSQJogJWUFwPh",
  "key41": "2uwVvJLePZaDjNXPQxGJdCFtuMgSXUzHeb1j533PYUGJtsZdgnmUaBJLzCwhVKdBXRbpjmL9RjaFC8vaUQ6zpqai"
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
