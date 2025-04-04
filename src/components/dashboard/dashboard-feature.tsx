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
    "4MrECdhZMbdAL2BatmToKuwibKHpyDUGWCj5EjeHnSdMM9jdPMgduggChPsn6ho44EjXJ5mYU5TMGTa7VktAcJ8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WDwJih2VzC4hx3BnHYJNqHGpKJNc7zCBaNHkGFiDJpWXT8kPux8xJNL256F86WCCMSar1AUJPfGi27HaFQ3sNYW",
  "key1": "21S3Jh3i6VzefLp1g27y44ds1oxJ81uqfPk7ugiphtBqJED7bvz29WNzAAJfZedsbc2V3GFfUFu541LWKwEQd2Yq",
  "key2": "52ebepfTo3qSb4dhAp7LjisHV5KH7gf3pBgtAWHvsH1PE1qaTPbGi1AY7VHvkXD5pCZY4FLUYLcdR9fXbFkHYxdY",
  "key3": "j5m9AYeNUYkZ5yxTe9hZVd4GD1s13XGGoZmdh2jtZyoLWhZkpysEDDTGMiZnWkYFsenUFyR7ysUC4TDtsBBiQe3",
  "key4": "VaAohJrn1RDTCGsynjGTAWphgSLyfQRe66UDMY4Dohd1aK9nQKbymSu2mQKc95nHewBJXk6Sy773AsWzwsfasVB",
  "key5": "7Lup4XW27m5fmwkm6P6L7sYwzChs6eAS9Cbhv4Qzc2ayefEj81iXyeThNiBgvK9gtWsWQG9zjZqCNf6gJS9JdF6",
  "key6": "4NzGwtwzwNB12XkCTJ2gLkeQXv8aaGALPoMnmkne4qETYvykz6YfQR3GYDBbCzoFmyxFw4vVQzuQBqKC4XASw2Nu",
  "key7": "4JCKwrK8h3PJkZK2kWmDqYPaCPAsRNB4rPwEtyn9SNdS2oRamGqVSeD6XXtnGWuV5RhNEWLYmXuA4ZvkBAcz9sXr",
  "key8": "672bLtcLJ2uD6esCs6VGhVf3zLLbZvxfPef5kZB8r4nW4AUNQUMrc4TcDxDwPyDVBe7pPpqEWaQrxCau39TYXxgN",
  "key9": "4ippafjLuiEvM7RmVakYcAL6T3qURkTwEV5VjnfkVicv7W675tCaefMkxRDGkXhkmLWzAS98B937MXG5ZMbqPrXp",
  "key10": "4uoFXwNbhtJWJfDQK2a8Mrh2F4aF1V3cdy5h4sBhaQm8ovRkq93mis8jbW4B4C6PBXM9xUFxoetU2fvoY8KGcfSt",
  "key11": "2ePGUgBA1hjgfdfQYfVQ1ZCMdqhtcsj38mDKe1QutNVyB4yHfqKLRsA6qf7jkXvhXxGGX4fSXy6oZmGSZyiHgyjm",
  "key12": "1abos39b2Wb3iyfCy1kiCN99UukK2Uknf7oGjcnvN2EiBaRtaF4MwB2xsM5Undy6LPtnq4wCksmnwmh78KpeHZU",
  "key13": "vGhuvyttiZe58QauqkWYftCC2fzeTcuKQ69qhSpyygwVDNDLXPJdVQ7kjU3P9e7QdpGbtKWpuHQ8pmJWQJvqg9e",
  "key14": "5vUaWWdaFBwRGKNTeqQAi9mEzxa3cRs4UyjTc8phFiBjiwSLQ9MBB46XDe5VFRwKDs9ZQKzMkVjt1Dm9Yjs7A4Xb",
  "key15": "2nPXAkotxMdfYfbievUfkoSMnRT7wn9VrK9pxFbqwWZ1PT7c9trANrrtvDtHir8g4jF5qJKmD8RB1mebNhPkKq5b",
  "key16": "4eBgw9FGYVidBf5S1Wk4uezxkER9nxUJVkcGFtxAE7kBRpUAw2YNJPwHzRcH2VcXF5NrUufqDNmsRfK7RvoX5RVF",
  "key17": "4wX8BnTHWjLBTiwFMtWtWFNXCcGuAK7HR387A4ZvtmuXhzw1bzYaGsh77reaT2sRroYfjYNsYjVue7fFiSRxxByj",
  "key18": "3fASa76DjPCgHAJiv8amPPJXZDfcBhc867N43SjoppwirXeCF88D1HS8qMwJE1k5CJbwQXuQ1rod5P7XP2f5RCWW",
  "key19": "2QhoLvjypJrVTLzaD5fX7MRZeJRqbY2GWRsZazctS5tZPirVGWPwAHDJxZo257jVQfGCAv5RRkPunAxkcPEUv1R2",
  "key20": "45AQfq1yoKQ6w9ehFGB92LyWpDXRd3HNFjtmXXNKSR7zMGTmAB2udEGNV5q5SUgsfbNGghY7dv9cTH1A5qnqXiVD",
  "key21": "4KA9D97tRVWZZstQhxioxsVBwHxXuKz3gKHKk4izfMDrozUyDuHB6K1Tv5YzmeXQSdXEbLZ51HumgL8Hb9dcrzR6",
  "key22": "3PGGjQdSVedqnd4vEyDrVSDFPMpi6BeGAvHxGCNnjiG155PAXKkgsecBh7uPCuvtayCrEEuvQk9EX1uB54V7Hi7N",
  "key23": "4V5cQ2pg1at8uXT5P1f456hS7iF7VGK1jDNUiGd9ZpbNCLFpdYXVcbnrHL9yxeqqiiNYYtbhZhs4KVCUNrbpkKRr",
  "key24": "4JQ7piB9SdgnJeGyBLHVg3xKLzfhXXGKWW4xRECFu2WtVtb6kcYgzosz16KXLw1UR4o6dwb2b9V26k4bHT54mCLU",
  "key25": "33S4EebLjXyE9JzHVUJog1oZjvrGkpqxook75NGFHbhdc5GPw1yZvzpiZCRBAbzUEAchzCysTuACDGKRccpN9vCg",
  "key26": "MW3xZqQoKsTvFAEMsgXZqczmJ3yV4N2NYYtxKyg658z5FBx9XtxeHZp7k68f3D5vLdDyHDLBEq7TSYDroWomNUM",
  "key27": "4dn7yJfPG7cZWqpsCq2CaTeGLFoEUi4TrwnjsrLE5bXfChvf62ba362oof7wQ2mzrwLoSwpsRjfLp3kFgWT6xd7a",
  "key28": "2rDyjVhVhuyVFw8K4qLPDoSv9HFsPJRojzrW57KHnDPBxFwPRd1ii4wgukk6APLjLgFwvrmvdUcCzJmdbzMsfi8Z",
  "key29": "43KxcbfCxbHNXVPqLKCmfKbt1GdD6AFkprTU9FCikdTEeSGJ6xQv2eA5c5AxF6gM1sskFwh3AmiVqD61mdjG7D2d",
  "key30": "4wZnYM6wn5t2nLDa8eaeWj73dt3GkgZtPfTMZdYCAeYgtHuHLxC1VAPghvqerjo8UHwyhxCCUUeyn8sRcaaprtYL",
  "key31": "5dKLUr6fRj89H3g1sjEfMReFn5PFmaidLveoyHGQ8qj9gZyMyUNPnSMfUoLfVQ7soL3kfH49DgLYgDM5WTkHHYTL",
  "key32": "4W5ipKEkQREJ68w8qcfXX82p6DVgzi2Cx8fDuBX3pR7hFeQvs8NULs7d6HgBVzk181M2qgamPXAmUT1oZeYSCLoR",
  "key33": "2CziWv2Eh4C9YGB3XWUMucNg9NVvKPkR95tRYsJ8pYfhG73ZkytR4B2ftbHKEEv5LPtXeLZft7FjrHw2fQhsGMpB",
  "key34": "5B1i9uv241PFM6676jhKoBMjzCaSrbvh2JDW4JNgorfdmqPgTmSs9jwyTXDaKma7LQrnWuSDHYq8vgGUuz1trwAw",
  "key35": "439SETU8E4gpeZWRVCVYKGwNGtBikLWQvhZLgkWqNPGSPGLasnVanmgUFpPRfNP3kmPDH1FzWq5neKomhxXn8LXW",
  "key36": "5GQ7ABN3FXkHaeUiX3yRoqCzMT3goDciUCzNXVWHTWFbvfFbaqsFqyh45c83QUTCZzZEEtUnMQhPii4y3kxauUVn",
  "key37": "3YTNXdqSyrS6NX7MQ4UkHp6Jd7DTjbW1eptmTqaKMXytnSFbs7UJE5hfUN4rmSYndZgAie4Pyc6CJVniyrwVLvMm",
  "key38": "3T144baVv6GsEormsTgYY4vmPsnYuZQd5sz1DPtVM8f4ucFkEUPuPkDQd7zGjV17Q9RgkTUyFTqyDCu8hjhNmkn4",
  "key39": "2cCctebF2sx7KX9tFbZN48WqaQxfMHz2vnNL3Bna2QTr8eusNAZia5DL9HKtX6ECtC3Z4BJQHGdJ8ts98wV6EZkb",
  "key40": "4SYi13XK9vHYyXMbzP4V4FwzSz7tMsjq9YTiZ8Fm1gBzCc7PoWCBtVk1S2USDtX8qHr9fnWAS2X6DN6izKv5gYzU",
  "key41": "5k4cWyL97Wkxsu1cLkrbHLMHUpPCmqd8sCKJVE6w2MMyNjrDFqJ9Ta825o7obSGcQA9dp83R1L97Sh6L3fr5z5sC",
  "key42": "5aygyBT8bAn5Bp5NCdgC1DoS9LPwAVERU65Ay48ZtoR3oJSMg7YGdokbFWFxboAzohW7S6fz3iBHRL4T3VUACw7T",
  "key43": "HEMzDbCWwCWJF3euA9XAit9VucXfBmM1Jx891EaYJ5NsUEJREcrNzxheZyXP4XSrzqwAp1Shgt2F9JQjxkfZRi1",
  "key44": "2z8E4cedooZnB493xLHxAPgXaxZnyLwLrKZvs7otnBZBe3dzE5DXVjYCq2ANHkpqoJsJSmtRkccrtxycWQmgAi3V",
  "key45": "2WpvYr7YEhtMqNXvAEo4KKx5LDWoc7KC1JaaFA4zEvjwK8xarTfoMi3yTvTsVfFRBkRbxMN2KSC5SwKf45KWkiPh",
  "key46": "3ptsEdaWdoVNNSzpShAd1HT4s4y2Z1cDfHBFZn6tgZe2WC5Wi3v3gn6Kidwqt6cW8iRvEsgU8zW42MbNCC8UA5nb",
  "key47": "2DP6Y5toDazx6GGqhJokqPyt3fRQJJnBEmSrkpjqhC12hToEsvAv21n6aExxMDMwVDMzAZeJQn1RpYiAEXKWQJ4V"
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
