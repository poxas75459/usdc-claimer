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
    "pTCTkezpEU2DoNNuDjfV42XZuYvEseAJJ8r7BL74WKHvRFGjvr94jkeqUgtvF4cbrWEH3Cn3mhC6FicBumsM2GX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pPatHbbtQmztacD82eWhydNHHzYAX2siKmr5sby4d35S4zHb6AxaoWRKsJsc4CBsUAhdEHBkqzESfyWkhDc6mdR",
  "key1": "2pGSxUUcbmXWja6mRgU8gW1AbXtcGQU6gz2nm8CWwjEMxtxpCrCcfAibjpdJZSNKrPLt3Yurh684i3xtVmh7FUjK",
  "key2": "64DyUgc2roagfRhGPURkYEfKVvWz5haMQaAD3sM55RnxYY8SEg9YqYzaU6ERKaJeTSTA69bfLs1BWieYiePJHWQb",
  "key3": "bhq3QNQmWuE1UEsSaZ6XmEdQzf1YTpNGjH9WURH2fLGjYVJTcSYBkUy4icAdprjUqgoWwJ38bDexGqWC1h4cd7p",
  "key4": "4xdxanntgxUJjxSL4RTxe2KQ5zCe9KnWWJKmyQuZgM4QDgSQWLM2XnBNTKii4kfsDzzqvGdJH8oXDUE31W4c7ifH",
  "key5": "4wCuWKw24sbAejp55Hd4BJxW8FjthQarirJhMjSkkzoEhEKNyg3eLzPgwECmuxwAKc1nnA95jri8hwU2o1sKsr3p",
  "key6": "5Km6qE6tFNbcxmhsYAaq8zoxowHgtgjkUnuxrh9npA2D1nkTUqtCs3JZZagSzbfXQ7hg32UgYGqsJLKPXgEP2aNi",
  "key7": "4SxTZCQxN1FB5kxZLPTBDquy7vuoAwz8VReQT6bQrT38tn5BAJqVPeBoDkBtUY9p9tdHwAU7PjZkMDnJJS1Eom4v",
  "key8": "bdAyxUM51nXgvN6AeEkmzMVE2vs7LNG7L3sqVRFiQ3PcWXtmLUt22gzEktzjdzxu9vRhyiBns7KoURZ8drLJ64i",
  "key9": "5UNbVNtu78YzGueejF1KTV1H5raqcembuJMpVL48oWbTj6fFMfM6ajxfXXDpmbkkXBnQcSVtzMLieYQbXgmoedS8",
  "key10": "2XzVHsJjVbNBzUjnLT4rRBizq5HFREN9iPrsLyynbBsrhb863kF8eEjr6ZVV3eK1YWwtSePKpDevGUSbrc9gEn1n",
  "key11": "66hjNeWWD6RoWknPgou3HhvFk6XWPWhLSwzybHVxpd4JrLTUdcJp9bPxeJocuES4xVbdnW7KVM7tRCeUQuphkmDF",
  "key12": "5er1gvNaKE8Kid9NYEQBDX6yqTMM9LrRbEW2bgEJEkRpSTW7ZL5WRvNM8rDpULy1pLP4sS1t9ycPGiNsCiQWoGYC",
  "key13": "5JghRxkLNPjPrUqrKPWTCoGmjLbyswzxABdVs8TNCYqsr6zougtEqgBZB3JSUunYnExVz5Zkp4ru7WBafRyhpHXM",
  "key14": "4rZYUdqZkhmJVhuD4xquCoTv71n9WQDoX45WDmKyqN989MSHifnUW2xXsecRPY2tWRkmyjWDudYWFqSzTh4Q7Cjc",
  "key15": "LvKoWs8xbJ4D574V1AgcrgEFuirgqB73PRx5u5TK9MUPh1Mhw9iQhw64WrCcSu2gKpDutWMkL34xpfKMFMULjk8",
  "key16": "4qVFvJyHuBNtSrP3aYviUw93z4hDuHGRZxvCMih7RtQPxBJ9nyEYjFwTFAPUGBkr7oSYscFjPwXCVeQ9AaNhRjBc",
  "key17": "5MqwSkn8V2kvaXAAJ1ep2ucN6vcfT2Kt41QbS28567DdJpjhukoVUbwqfzgVvv87zHu9mbiX7oxmYap3aK2v1p4Z",
  "key18": "4PxWymZ9yzoLef3RWp5sWUCe1uXDcG178NaiCJZV3L33JoUwKvzA5aEBQKVtKg5GEuMf9hH9RE2Qb8YPVnBvZEeU",
  "key19": "5xmejcbVvtTu6BTZQ1epwek3Dos1Z46WfYbGNsR5oYPXYofkj3aSNhCysDYaqNeXH4hrHVqL4NioHq5GpLapvp3H",
  "key20": "5LmDZ8fnfas5DGUnJeRYJrjN6ix2JvJUkNzHCUxq5mRVCK1p5QnQ1kcdYcDfxDDuqZDMvYVPVSMXBmqXYbvDYLP2",
  "key21": "2HUziDkeHryvNaynuQjyu5StvuTb2yriN42YXtmbDAiesCe2Fodu8qPVZqojrrAoyCg93NLLmsn1L8V41mXzEG5Q",
  "key22": "JGUa9qt8Zk1KdCcmJ6w6sf5w4QTCDqSzRcPZsJ1qMqDZ8jR9MA7aQyoL6yPsgBay2FzopkMVfUVhGcLoiyaUKM5",
  "key23": "3MeEYUTGMqiBt7jfcMBtMnDgEU5vBoehn1rjmV8BckMGShB2QWBBYeQvQyxXLRDU1FTXLBah98AFbQb9ZsxdD4CF",
  "key24": "24RDkat3QC8puxvRi9NUHFbkLurqJbQaamw1bm4kXhKxTdrzUH9iqcxzAd19rksdx1AxqhAvsfeH11CNccuuPUzs",
  "key25": "5mcYLXCMPDjLWEJoEEdc2pgq9SmmSKbri52owS4dnwW5cqxrxGRFGSvgAL8LW2htkxhhH5RBuF88VqXYiHonRSkF",
  "key26": "2tN9megbw6tyNEF3pgXwzxSirsSww7GUbqPQH52Pt5ADEsE94NX8Uj4oTBdWQ9wckdWy8KcExkMgYndcANvGq2vZ",
  "key27": "36iGeFrauNtmGBnC4i42AQ5XWuk7cuWSgbb9rJQbfSKXr2eebmELZWZmT4CY2HR6Beeoy5M5B5fV6RonRi1fAAd4",
  "key28": "4cCMFncUdpufdjb3PTwznKz8dvP3UCLojtnEniAPFzP25rnCmZXnByYVaGTj7NHyFkT5RjzLmtkAAFbMPY2dh2YT",
  "key29": "4Q2NsX7ppWe3YVfFnxxVgATt7R2aQp3HDfuXVpr6eySY4DinKm48fX7jc1qHvAbF5qNym49J2a51q1ngjJQt9mtx"
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
