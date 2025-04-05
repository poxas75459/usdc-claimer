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
    "3zpA9WCo9JMgRoJ36hqPUJfjgWBtQAbQisiQvyCdm5vVMDY9SmWqaf1HS8aMZqYpu2yDYRGNR53rKQbRp4Yk1p1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VXNDNTRT7SK2qMnZznckj7kweGgShhHVrK3QCCdhZJiCjqmrzm4CgqVWwu6xJYTvdz2qFWRxFssvXAJULXvLM1h",
  "key1": "3NZeY4MG4DHKzXFZ4FyWQKcmbqkW7NhzGfrQ3Um4KyeVp4oEH4Y7LcEmZDFhXup3xs1bhMrzugfDKXBhWy6r8HkX",
  "key2": "25Q6ycaAL1QP3ak4tThjSYQVYErdrzyGB8FRDF4XMS6TDbYBBUVs2PBJv2z9Gz34fN5pdTTqia2BzVw4XytGVK7S",
  "key3": "4975cNhH1XoLPKn7Uh6sv1yfPeCUupoPYerEYnxJzkrmisz9umQ5S3BHghZ1ksenwxTGqmqkfHP5K2qGVCdWdPzd",
  "key4": "3NmAA1oikaZ8ZJ8iLeiUggMFuKFuL62FuMUPu1WWRqpfjPqm1EMv2S5ShJeXgHyz5TzKLQYi1dePVXxyb4XdGvD8",
  "key5": "347525aVJtNGmKn4b4CKiwjBd1qEy8ofAdEnMDvMychmckTk1aHMMQJG5kTySyPciHhsHZMm1BKWNMYRMzN6kXVr",
  "key6": "NSaK6oDetvgWdRYpzn9QZPKLdcaGVsAu5KbeBxyhkAg2LoZwcQFaaKWrYBD54gh51D8g1zTjYReesy55PCjAMjT",
  "key7": "2wzezUQrnBZqmwhyq65R5XJeuyFyWTm9NaVsMyC5ZunWwPU5ZwL1DUjdHZJMjQW34kUyeyAw7MaatjNpBxxoPbjT",
  "key8": "GK3W2n7ekvRjzANw5sytCGXLF2QyWJrbwVet7h1MTWeR3Wc6ghanckSo6a4rtERdRU8BKwnSJvLL2F8uHMvusXV",
  "key9": "3qBrCbWYM7bTDy1FmMsG4KtE56vJdnZHLt4QrVW9vfvziz5dEFJnpHLu6NDBZ6ZQXgJvJzCTtLZAnJEkCg5NkFNJ",
  "key10": "38VAS3G8U6LSqjACD3gFbzR5XYFx316WXX44ZJ89GxPoF7ZYgdoonZ3NhCyatg9q3P6M45o4ZCzTDad6Rs7hx87N",
  "key11": "4zRasZxPZuY7AkeSCsaHcgZcAUcfdFDEgG9hWWmEGiqsCHLVwrfX82D1M1kqZ1ViC2EhP23X3UYYb5oiFZwjmbL7",
  "key12": "4R2P9mkLjoS6DuWgoLKryVLj8McJUoQTCK29qBbtpP1qzn6bC1gHSioeGbSdPx4VjgSTCor8B4szjHWo4rGHuY5F",
  "key13": "4JmVatTfNUSBG6oHPdGeaHXcAxQB4fBHY6tMd6jBYv92YVENiofut7DiTLzwLbixrsJMVUqznVgvueHTUjkp4ewA",
  "key14": "AQpaKGNsotpwNH2DPYAKbxcVoimNzTKXWHb4jpC485qxSEBpkGbkeGPR5EK6jkXoLBKyiFdsJNYSkcAGh9fGHsc",
  "key15": "339XXo2zHqUvdRKr4ZD1NCoWiYGjqt6a1r1n1ERk2J5k5MiWipaWq7zkh9yENezX2voRtezTk7nJQRRQpEtpAjUP",
  "key16": "5HfeoYDZgVR7Y9sKDctJ5jHKwheGEAukhv9SpfnP15q9rVi3WrYEDdLELn2mbgFveWtDqQcM29MYuBt19qnwXzki",
  "key17": "2BuSRUPvWFSuhdox3aZJMEDsnvWZFed74Q4CrsxBWZSEQTK1DkkoMePVqNRS9wBfNKuby9K7EPp8BWeC1XtPLEwC",
  "key18": "3nCFbBWikcBfntfociYHyHcKHqRfDxHQebPLWV3hBVC7wURTxiR3NdZRfpfKqjbPYxK9unuCRuy9naSt1QDtRaGo",
  "key19": "5Uj2nBuh5E61mbGNRksGbzw3o4LnrYw3esG81Sd4ED7tCgWFCWNNDpVLuFgGZmbZQW4jxNCLSp7TF2MJZ8xReb45",
  "key20": "4HMEYqqPerG1zCMGVU6oDaLA2GeuFmz6oWt2PX2segFgjqA4jdNtbVzxyDnHhcfYqnHDZKXbkGpSymsde5B3WW9S",
  "key21": "4Pbs5TwggQdYpAveYQDrena7b1haXByDzNSXZbFwKUsrtx1z3eeZZRpFCse8Yamzr3gwdAePYyZdnbETbqHXvdx2",
  "key22": "3QoDmYHdcZiWdMBzV6yFwttHU8TiLVqPVu91xibBZyyohD5iyTyevikCiHNv5CPSZ5V6Ru18BSZJJXBWcfHoQjNP",
  "key23": "GSvBQHwHJRphP4uhYcNB3VySavghzfHaHEmtgp84ZvwbPfFxp12Az91EoRDpetFyqAemwAd4MZjEx2Z4BFfUstb",
  "key24": "2QGpq4Sy3m6HNrFVAKDbLE8BjPENyVeV4kYEdxRJPjNhjnfwtNN91sCC97PQUpRao2RFFCxmRyj6hkRurNPdqn6Y",
  "key25": "5MpcnaKDkb6hdmwTStH42KiPHY2mw7fs5sGcDoWCqUbrVrFk37GSFgP9UxoXoxV8uP4V74ueG7FsKsfPkiJj79Yr",
  "key26": "yUXwkb64aZixTmVUtwvRCMBVSU2hF4MrxfshT6wpYdnQQwWBVHByuoDuh2H2hZXhjuqgXRb8mEjcE875adYKaok",
  "key27": "4w5GwK13wYPYopXpNedY5U58rY3CHkzWWq8MM9ebhDMV1L4bF66b8jUPnMYdAzckGMKbFCeDhPEkUuqJ6naJTkni",
  "key28": "YC7D9CEfgNaqi9MgEidawrXHEBim2UDpz1Mpi84Xyiguidp8F6QNn8GYwgdKoPECPFEjGzqvd36Eh5EyF6yAQ3A",
  "key29": "2FMzTN7ZvTKfL649fSZ1oBQYjwCwgyNoQCCWkcNhnWd3AxAmSTAmC2FNEkAsqfCCqPFoHXX8QFSmZns4enwnoaMu",
  "key30": "eP14aoAKU3hQY88JxVJaun7YKcBDKE6C4VggggNT2Lh9Er2xU6JwzxQWaLfFoMtLn37XiprWnpG8BYRZmHEYio6",
  "key31": "4KWogR6G1ZqBvWua4juiVLYKGJBd14wXEYmz8hXoicDT2STJdezNYXSV4yX9sLpXkGP6hrPf9n31pGibg1wm7mA3",
  "key32": "25HmyMRAdDrhdbncvdeeTk82vCgkbRxgcAnajn1zgQmTWKjufRt9jKusJ8N2yEpKvwKxArtrGK2bzJi5WbQ3tMsj",
  "key33": "3a6xM9MxK2cdr7yLCJYWW8fLqB2FFvVCMsr6WbXJ8arN1bxXgtq3BCqykNqiEK33bmUJxM5V1t8NFNJmpXnp4WDm",
  "key34": "5XJrJpjJemyoxCRzkozzSf4vctiniUeiPFc4jAvwE5BGgMEUWeMaD9WPMuNHsZSxUTzM31bCRH2DkzUrpULv3GFr",
  "key35": "4D9BmSGJwpQcnS8fJfwJtnnZpeD7vS6DudzU5WLqX6K6FWGcxg3UhfJgy1yQA9hfDCAJsdCknbRiTUYFnQNhLdZD",
  "key36": "4N3sZ6P7LBF9gvWzHdy7ZDNV599LRxGrMXQ1n8hTi4sygRQ3fUL6FQQvwGr3iTXV88RBcgZYcdhphro8YRpJDZmv",
  "key37": "5j1v4XEfQVDMSvyxzqtptr1gmiUzyXazP767afZBogsDuSbX2FjSV3GzTdvBihhhSnLpuaGppoW55dhZfHDdchnJ",
  "key38": "3ZmPVXuZEuqFv7DsyUXuYraTCkmvtK7EEExQgdrV2G5hyNgf9wWZoJJrxJzUbYvJJfJLSecc96ux8pc6YMPMoEyw",
  "key39": "4Bu6mjdoDoTMgLWyzN14P5ehJpQ2BQ5cVyrHgHrdXejg7wzbSwcauDftX4po7ovVAtSisqic8a2fABXmXWMuF2hn",
  "key40": "DHgTRT2XzqiypmFaMsaVSJEp8JNw9CuP3qMUDGxjHXnUMCYgoScVFB6pxZMLQvm6o4a6Ss2HRmnd7ALLHc2VYeZ",
  "key41": "FtSsTHURPTDLhoaSawDJRYkAzuY77CgTpwpN46D4ECokr4AvNrEaTwwzkRkWFofqmXHfCpAWUT3Nc47kFKUR43w",
  "key42": "4eNZYE5nzsGkrkrtzbT9rpjaxp1WUyWsSPM6SEAuaVUScnAQdxCe2tpsMeY4eEuRBPFjJDFxAYLxdGMgFh7Kycqy",
  "key43": "3zbna1Lok1zTw41NvATkALSUPqVPB4SMaMfHEhEsrwAYk31od3NyqZuHNYkySQJbjquNkVAejunvE8BGF9stbPHW",
  "key44": "2YAs3N4aHnWgESTcm1qjtBHkCwYGYeXU3UHwKNPo5kc8oXpAYQcsgFeEs9EDPL86x7vfftTmJAbnSxxynUpmWDfg",
  "key45": "2oXFCajAzepU9j3Bp6i4aNyefFkCyaw81HGfmiNZxPawAnRgfLj1FoMNjFAFA1GJs8HjYhfS3tUd4Pe3CshHanh5",
  "key46": "3mSv1ELUzF3nquo5Bx55tcYJ2Z3qsid2ukQeGgKpm5bbCc1dzwvtxC7GK1N5A9Z2NbkkELvgwsCTmEkWfPQD2P9y"
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
