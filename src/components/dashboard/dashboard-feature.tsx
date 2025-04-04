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
    "399hnr57mdtCgpgWvomnZaD5VdgMXKNWxr69KwoVuRsGSyJz2bteyCa7k1YVbUQmXU5oSsQkQNXESLKUSYwS65EN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GBhHw2oekbEgc1wCtS2mkCovMJdUwrFXRdnkdGeKFZmVwRccr7pXDAzkbaddbEqsTWHsHEqpxzvjTMf2vu8Ki1B",
  "key1": "2Doh7giNqQe3buEEYp9f3SEweN5BYRV2gWSkt976yqBDsFyM5gcUtQ2LbqbcPDcVSzAfBcJDQkErTcnHb1imfRhs",
  "key2": "3JC6Cj2DGiBPacGzAuMx9DqEjHoLXKPUaHSafBshbgJWWUQUVoe5qXNnb718c8L9hiZN4ZEQJPt7DmH7EQoS9fkf",
  "key3": "5UaYfsKYPPtNkzmwVKGKJ8a9awvBES1SEeFfqbaZbmp7eihAKAaYrH8WHAdSgbNd9TECtfLjVpVgTUaWivnH8Bmt",
  "key4": "5q2iKcbuNy5FLMHboJaHPaBq8jxXJqqxN12x9wvpCEoVnEwt9fNcLNmWhpSm8134sHUTfepALnC5hw8N4a5PmVqv",
  "key5": "sLNGiyKFk74u6h2fh1SmHBUAcFNU63Eq4rG3oRnF8QkiUazcopSLqHPcvjnnNwK5QA8fRTbJydDkeG81mqkyYdt",
  "key6": "2F33ds1zST5ySUChgZWijaEr3XFBgGbmAidZBdVnz2eaAVZbNtJNLgRgymw3SxtUjy1f9pVX9rxdJNKo1fDEaRy6",
  "key7": "46MEHbqUbx5pKvYdFnJ2Hh1fuk42etEhjUsmvGp1iZT39969dBbkAEwud6TVcXz1K3KvoXbmU9fGwbw9B4Dz2Wan",
  "key8": "21PBnonrz8oEZbzrA36QJGEhBYvUcjwaZhMubCuEm1brvp3PdrFomJmWYxSiNcV8pUQkbCJRJtq7ANHgAfHRgsje",
  "key9": "5fXyYrHpzs11g8tYtPixmh4idJpqJYdBx25nxnmpbTnPWVKXjAr8rMuXa8cUUgz3SxUwBWsnrv8ByeVC711DU4pi",
  "key10": "3ujRRiP6TtrfPJD6bXdqw5mdqsnBRrwhg4uj922qBJfCK8pHpDDA6vVS6fiLoXMQxGRtpcaAJDHtu7JNZkfFtD2S",
  "key11": "55AxibBGUd1X5K9BycRKcvj1sBZLcDRndvGox8tQaBbeafB6KmkKLAtnGXsHsYMFyHDAQucmuRj1mD5nMFCrZPGe",
  "key12": "32BehcQLL2T2C9XRtmiZ9iruBDoqgfqg8TyWYr5dgFYxEwFytQu1eLHSMouD934boGyWmAkLquhziKSzCJhuaFjq",
  "key13": "5R1DzmG9Sjy8sPwzgbhsREr2keskHA3vRTAknK4w4jeFPrefDgprdWqmht1NXEzrYWJzUfMM4S9kApeGuMAtpBA8",
  "key14": "5gh5MvNgxMiz1T3VbaD1wZsHatWiji5PQyrCC115RV8joKjZzfaQ63nfh8cawafH4MiVLvCZy4xbTdhXj3rpehTA",
  "key15": "5sAzj6ASVbDwmxks7g4JMmDyqSDzzPJizGejqRDTUgWNqbCMxrKoYaUdBhfUmGBUc8jxGcstSQgLQCnPHuoNcQ4c",
  "key16": "3vT7udFodf9vnmzZEiB2GZ9uUv9HkERx7a4zW9wdVLFtDvKqBr4L6B7Mqr9Wd9g7jkJfd7rUt9VhZ7fM7Gw2brk2",
  "key17": "JMJDch7BmYx41X9n9VvEaPNk51VKUpBrrFiSB5m9bJWuuuEXvtBrPxtvPcXKmNYrQoQWXwjgXsJJvE4G6xwTQQn",
  "key18": "63qY6pZFgfJaikyeSnVVXZxp7mvxjnDjTdUHLpnBV6732YAY5Y5RhgpCESn6wzHpMCEdztiiwxAJVawWkWY8QzkH",
  "key19": "537sXwsunPdZQoeML4vExYTnNTT37QsMgAdDfKYTKzEMxdCFBHkQeH6CvbtMAjLhoqbc4Tynii7X9FbX9KEMG1if",
  "key20": "2Xaks91toEn54ccksX3BTzHsJG6hZF5nCWQcKFaiH8xjsXmivp83kZNWUSPTMyDU4aupym6ZSgHYm67GFuo4mUVr",
  "key21": "4LhttrMgyrUAbB5AiDnn11GWRDRmw4YHiD9s9EuZBLBxBWuLFQeNkMaodNe95yTitEJnkt9sBBw2PxtP59ZUVtmw",
  "key22": "WsnE1GPVX4YDQv5apv5Pg9Kg582tA4oXWgvCwooMMjEuyQ86bjZdrXixiPwzc4gUyvGkFBwt7QR5NTKHWzLisz1",
  "key23": "3roVQaqADUjh4u2Lewoix2g2DGtbYShGbS38dHAj4NCZZFsA2cTcxBJdg2qz5MARLC5SA3dNsXSFYdgF7xL5ZJBF",
  "key24": "25Cn4EGYX8dQ5tHa42h6HxJGrTm3DnqmR9iumsPwyU5xdFXFtFkfkQyFCL2dcxPjL7A885zPePVUo4UPsFZ9QqTo",
  "key25": "3uWRuL2SddYBUiPKYSsXkunGiGZw5u4ZP12LSFJHQeehhunKWMRa2QYnYK9oRXnfJUmEqUHnLMgKbYFU1E9A5U5u",
  "key26": "4kcb3iAS3cyh7GhmzWP81Fkuve2dgpSEiVevkqgacCcCw1bne4mZEurL1LLCTQmvTER5qLP4ABqVuKUtgivsiYWc",
  "key27": "5oXAyxz2qLGSXCmMyK5jatvfwgKu4u3kCLPMiwYDunbv93qfVju53zbTLaRoWTaVU9kGCdE93jRT1CVEiX9o6kZ9",
  "key28": "5LgpJQTdVzG7tmXqCXGVJfvdr45KGHsXgNkRPMvt47Yt44Q1HrffwXr8KYGkHpcPzmdH6YdvBXMXyvqRC4i9z77K",
  "key29": "mc3J7acctP9A5MCvRpVuYNpNGYizkpkkgvh7fisyQgxgHq6aVrhDzoTHcsr4W4CrMXedeD4BV8vUb1ncxepPPZD"
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
