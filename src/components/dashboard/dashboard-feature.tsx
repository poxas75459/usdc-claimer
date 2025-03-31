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
    "kBBMobq6Wdo4KYBYfXKnbexc1wbVDbggg2FtY9rdW5PHyZuAdarFaRD6PKyKuJn4KgZZDq8nNJ8Bv2HUtUWwYdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWGzoLj8wTfCZ2gdzbT7Ghzp7JC4UjFWawyTmRGadvpAvTf9Q273RdeEMzjTr1gM8K4uzfDqFwPbGdxALmDQ4Ls",
  "key1": "5U7mvNuETmXJ57PAUCWt3opcfF42tmwWVc4PHjhFBUXVZDJeb6kwzDVffMname9vnTroCYqAVc1vtki8EdLH9z3R",
  "key2": "xiFZU1aasE9UJQtWW5CtFRxbG7LQqjCkkTamwHKfn3wUsVvpou3MQ3r7tMoH4A4iijuyxVmRBdKro1jXWqCZrCs",
  "key3": "3nUYDpVL6nwgVNZqMijcAqDEKhvPfjewCKQczSAe5JeEPnu9ymLaeGyqYGwtj26F4e9KmhJr87EYEbBFrUqeM553",
  "key4": "SmjcJosvcQCcDJgZKXSjo25MWwj7z46yZETCU2NXumZe8e4QSzpztDYZwVSYsd4syiRrc9Z4wXtae2RCMnPguVZ",
  "key5": "3mxXE1PJeQXXNygBTav7L95fhkK7d8cDrJF9xG2GpCkXxDYdSLZhKt27gTE3JguUhTuox7wJm3kJbQ9i7eAktZJ3",
  "key6": "o7c7fiMZ5QuRmEcRic9F87jboHxAiEcdHn8mnaBGQqhnBEqXXMeNq91QjcmEc6xFLJZxLyQjzhR82RUo1YrLsXZ",
  "key7": "2HJsrRH8EM9huyjMqcPW7waQJDADgi98ub6FMKMQxg7ikLwqLw7rvnK2TWiohyh562LtL3cG4eye2QtEjkYTTtpB",
  "key8": "3wm5m1P73GMJFFrvMyCreTixGNBXTRQwMWwh9PMc4tyusoJSh5GgMtZminAL3KP5Vi37EbmuguQdDD18V47JpjJr",
  "key9": "5ipHD3qUEUDHKx9ap5DzZVH2JqSXGpwdZhqxMCSB9hZjEfF2i3ugjEawhF5DUJVAybmw53WWH3xTLGc3mConnSZT",
  "key10": "645qjmX5BePADy8mQYAN8piRuGtVCXY71mMZBWY5PAf1Do8ZRzaHEkQfbtaAuLzXpnAmfoNH7hSvqJ4kS58NaEYZ",
  "key11": "4pG7MYbkGZzjM8zEj5GVtqmVJY5bwe7oUCUViLNSugAArRXp26EUAoE1wo6zTNB8NioXbAh9o1WRSu4XCvctKGuF",
  "key12": "2srh1rnUF3c8aNyrkz9ZrZK7zJZYRGAq8fSiSvJb7Cpp5M1uQXsCb2z3b85cuWx3K2Z3o7WSWdV57X4oXmouDD2c",
  "key13": "fAKvm1qXBaJtcshchhn9dHBjSLjFM1y14NQ8vCavNQfGtDXmL7kPQgQVadHiSGrxNVF4wr3q7xmKLTKq6koNxqP",
  "key14": "S9LCp5CXyCAoMFV9AX2L7gjJDhwjbvaRkYkVM6LZpeQxG1jHNTEeREtnXvprfV81RpGsuCScsN9QSXqcxFHgewR",
  "key15": "4CNQuaAkEvSaiGhDe25iajwMRXXGsvFcd4AvJrR77bzG1DhPBMRSD88dhyyJ3xteiakmch1SWjhAz5Ntyuvan5ua",
  "key16": "52SPYPH1iqxzReBxVh6EeeJReY1u37VdkAq2dJ4TXAxiLxKAMHERJzxK21sJTi7Uqt5obHE8dgZ7FTA3Z6eNUmxs",
  "key17": "2CpPhcha2Rr5JRD2gjxzvWQAGaRyBFAfMdaRzsN8mXPgLZ6tRoNnz1xQjqVVt4Wb97ajy6JDMm5i3wanEk2TnQPd",
  "key18": "4RAFpuoHnmCVaqmi1M1bxkh6ros3XNdXrdTsz8R61eyezd4cA2zAqFLp2RmSsS5qqwVxSo5M9wSzZynohFmu1cPM",
  "key19": "3aWAhApPLrrvau3MZMJZo1bq4qsyoqwFZMKcAFaMG1c1rVRZ1PaCs9YjCqwkobz7V8kCieXUBVjwJJgEC4pKyVA8",
  "key20": "yoMWExRgbfpasmw8oUQ4iVmVUtLAsoSga8UHDrcnvverDJh9frmAPJ3mU8XdRCuSsjjTcy6B7dagk9tEjJygL1u",
  "key21": "62a7APhBBVP14sfNyiSNJLaFSWe1iWnrQQyvaNkvppPKiPk8SbPpQcrd5T2ygbfaLD9Q6XNpcDGAq5iBuFDK8gWY",
  "key22": "ATJJ7TvPRnUofZkqMd1t4MWdt89LMs2HG1C7qTGULVot8gTopNJj2CrCfPbCnaemZgzygfgU4A1QhwueWd4pT7v",
  "key23": "DXTCwD2HkjuVB4pC9pNEG3SCBWwRcYU9Gm81M4KE6NEHfJ8VkanJnVQuF3CR3k5C3nuar9RLmwZSdVqgUpy5n5d",
  "key24": "3ZwQwymf613pCWK9tnZt5GQ8XqdAGRd2jQDuTjBTAaSo1CiJaYLP8RDtCgjJeJkXZziu8zzUdFwtakTxvKuS44ov",
  "key25": "9NNZS3YurYjVSnjFrU5BS7upHPhT7chmbjShchvdnLTy3Uti9w3cn5gp1XwDC1LYBifQHiUK4JAqK68fhGRhBqz",
  "key26": "2XYU5HekTVhTrTLS3FL8DUmwi3LygwNKj6aqaUUhxiDqqGi1jvuRzHebdGWEUsJFSeXJwGAqRkpsLAZwCGzEAEag",
  "key27": "54H7NBqhQv8V84Qf7Exz8AiTieG6APVxHUZEpR3teJRJK4ARntYdNqQoAPHKW7aw5jRDpPbs5bXyfCZpoRo1sowh",
  "key28": "4ehdCEEaMkHbUKNmn5wzZ8ZymNxmuzFZn1fvHr81QJGhhMqZ9RCu3h6NRVN7N3x8D7W4m2xhYdmMbN1YT1WiRXaS",
  "key29": "4pUJXv3xk6j9sTCmqvymso4kwZiiCzP4YTaYhBwHdSbdbVPJ2vjSFRAM5pQcYTiqmw31fdcqAQCf5ExqMMP8AwZG",
  "key30": "4PkXSzY2QJVafHXnFJBxMQ2q8L8KDYt6GCtXs3F8jK3SkbCWGrMnhj1dCyj55nxtHqSZ3FtKAdLRKSnvfXSSQRPq",
  "key31": "35WvtPgi5WgJGXCzgGRzq5tZpvuECEURBj2QRSg7w7oxQNm5StsycbD2HtMybKkrT9aWM6xpeMB88RTd46BCaETG",
  "key32": "4yVbvrEoiKgithxqV2sQicsWpavYboRRCAhtaLbVC9Q1wyX4qDckE1PHBpKVcyPA5WKH7AbENKEwAwnBZGAr1ub4",
  "key33": "5wGXYrchgxQybQMX1172rEGawneXZdTozEb52Efbc1ARrrpFWDsqTf1R2q6g9oMqiJk2FpuqKgtMct3CJSxu7vQ",
  "key34": "2aBtFvS7g4EZUoHGqaXA2cj5bmbXcwMT76nv6fmzrQe115YUxHQEUyXGJSxVrBm6JfafNtAfhKwmaarMCo7U7Jrb",
  "key35": "4rqRDtWFr71rAaZejd5HtFR6fgRacKLDa692tWWZwqQFAUFeDjcUDE3Vju2y7jNikvcrAhnsgeHSNaRfxuaw8Uok"
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
