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
    "24C1XBMwHaT488DPMnyP5WTmbJA3taSedE96JGoHdM5VncVYdqtsT2Y6PxruzshNNzCgR9TvHPSZ947nX7pKAfs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63phMh4k3VvWcMCAwmqqjWPvBzd5sQf3vGtCzQLVHtvuCKNwTTPUNKRnvKoQDNkyx2aJMZ4MFmAQBNtigcWy2re1",
  "key1": "1shCpsNXt3s4ssBVqbWTpoX6i75z4tc4qk49BZMjBG3XLkpwG9myJg5jpUXDCfmxRxvnXBaXSGsns1HfJEz9P5X",
  "key2": "3nJ8WypEc3LLEPcMY43x1YouhNyQFE8ntBcELSP4Bx8sg1GYG1UVvpn41Y7enQAVMGxJoBRuePtQ5W25RYWCSyxd",
  "key3": "3pG53AE3eVDtkqHGrJWsegyJBJr5EN72gY8V4jiFXKhLadvW8C8SJb9FTxDuyc4Ppfi8d43NL8t2sJqpuuMJoYoQ",
  "key4": "4Fzaxk1vTFEquVZsdHJSZ2FkEP4hUXi3gC5G5wdrkfYTujqXLSKB5VkXp8ArxpkVCruvVE4EaYjKsMt84UmrC7Qu",
  "key5": "1HkwGs4VQP1M2tFt6UeJuAKLFQ4Ke4dDHCr82zMecK1Wwv4og8kRuWU9ptiLoWRWvt363V89kkNRiGwcFDGwsdv",
  "key6": "3brzpXKXegVivU5HSDFt46sHQLCRBpt3Reoni57i5iVvvBxqj1yd7kAhPCT5kD5SfqJ3UiT7ofYdL8Y48uVcpb1j",
  "key7": "5jsE1rQfBbLVJSQormaNADMX23UMSaeFjhM3WgR1q5nk5T1p535scqWCoR9VgHDKgQAyf6boESfmCfYBQ62dvqVP",
  "key8": "3c4FpDQ1si71gHBHZY9kcTsxoMBQAd9Y9HUk9LL91s3aLxDw4oBM4KusifaUqVaVag1oPLXuKGH2WLixsznrgt1o",
  "key9": "5ME1SzEhs8E6F8UvMxuEwWggjPBQubsRS84Ukkvf7t8Dnjciy4nhuQyQZRq6ynnNPEH28YyFwKqTko2bQZDtQCC4",
  "key10": "5hadcAppoJQ34ZvAYdCtiR9EAMWdMbHJXnRAAkWL2x9UASfqgffC4FeTdDZKT3RGfPkMhQysVc1E8E3u54JrrxaL",
  "key11": "2jkiqsivfdqaBtYj8yMc4mQX8KgASPqXhcAFgBme3NBXA9R4zpEzJJqBWdS5sJ7ZBky8WGVX52Lg5MF5EmwPhV22",
  "key12": "57RxCmPo46XejZRJEkcMTwWmJugkPFo2Y34ujP2iiioJDKoprXD9AyQU6Umcfr1z9Y4TMxtkU4JVdcGB2iQPsAEU",
  "key13": "5vL55Qr8cd7Ub2mCNp71aHsKxhNEarMzKUSm8zbkDS2QS6FNnW9Rsb4YXsmg9Q2pJCJJ4FPkxfnvkJ3t4pdtL4KE",
  "key14": "3f2WiQCtEk6JWMUaNBGf8dWwKv7mfNgd243tx97ABgzFUPy2NC7hDqs7yW4NRGXB2ECnGLEpvNNd8LpT6ehhbbLF",
  "key15": "5Wp7jxUbAj4grPmaoRvHAZyNwVcWX3U8hTKd7hFqhnc198pNdbh7rj1ZQknrkkQEakZUcUVEnvUVxJnBHmMruhZ1",
  "key16": "5dtuX68p5igCqyuwoMCKq8m8CCXWgRvoYJvo8qLs5pULjpxgnsuW7JU61p69pyB8oayHdQ31Cv1Ex63CSE2hgHTj",
  "key17": "4DhbA8hhhzqTSUnFmxzPMvmP8o88cquYsczj4h5WcgGjV2wytMM7fo1NKEjVnDdWs69aMnw7MZRV5pWmfFxT41V1",
  "key18": "4pJ1BT8LDdoaiASjXsaKHS3aYeRebqXvmyAMhTWkpugAkKyfi2aRwnrJQDmHEfuGNEigKNcWZ2bdZewhjHnMXVa",
  "key19": "2NgXTB4Kywn1KywHK2P9194DA2Xcq4v31EAvNAAwignf9uQyfp1xrTUBNKLJCmi73iuXWALfgTEZxiKT9R93cMYA",
  "key20": "5Egn2wPZ9XB5xzjFYEw7u3bjJBUgc6Af9qRE4MuFwiHK918dgBCysvhXb8u2q5cUMNoe8YWRg8aFPew8BE5vkpxR",
  "key21": "5nPH7rD1wQgSjuRCWu2Zu9zS58aAZuHgbDSr7FZ3fmkRe9DjrDKzGUBvRNbcuAQSZXVYbv3nqyEdWnAHSYcjtfr8",
  "key22": "4DjTUY9jEfdK5LnQxukNwJ6aCrPUQpRT1uhyDjDk33GegMyXdcXf17juchFQJKGkpaN1VBz4GXquU3MkGWEYYFAZ",
  "key23": "5Y32X2NwZjWcwS2Ac4kztNdKDzBnAyTSdn67opzmzdKn1QtNUAgvXSvXxSmXCpD7ZYtHYrUxm7pnbCBsUVN63F2d",
  "key24": "5VrL3BtRSCcvdL7x31PhtnPz2tVcrnTQMUsp1ctnUv3eDLNTJU6FDgMZAeX2vJcbd9agnBVFzwLuMxFG3uQ8fEdD",
  "key25": "4QnK4JBaw1RfC2WWzPgGoE6DNG72KygMkZn93K3drh2iWhaDPjke46HsqyL1u3oMpzMoQz3ysbXnURLqnuZPasj9",
  "key26": "67Yw3L3UBvYUswRHawmqhDm4jhRXJAWxsMeUtYXDjrg8XVJcv3oSZaqAwA88TYXbExRFXfM4wU82ZMmW3Eb5Rcpn",
  "key27": "4zg25XJEoB5hWSHwQSUxfR5DsqpYJEN3gqEdePGevwBWcExoLhB16k9icUZN5TuT2kJim6hwYHXmXgMxFtDxCDTW",
  "key28": "4hhRTd1HXNL24h7f8eMPAEtaNpMBhjnQkNjfD2N9p8Gv6VLfd8Jh9AbCAfByNum5m24puuadmvZtHG7r6dL2MVeJ",
  "key29": "5cc85JguNrasEdRfqbzmW5KQKBrEdxzmMyA9a2rypyotY1TzK8u5P6zKAGKWReEyzcfAbgUvd33r6gGJ3bgUbYLi",
  "key30": "2tnSMXGU1ntEvoNRkw8mYAMm7TpHGqYoZHztEHpsRrUXhiP4QUCxm4epiWBDWPkWtpH1djRxtKqvcqjTspSqDBx1",
  "key31": "31kF1maPUXrotctPHWoJtyQiMu4NwbPxGYZmJG8J4YiNpuGYgQHN7ETwzeDuVejeY7wFpaK3c5gWhxTCofe5wUBB"
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
