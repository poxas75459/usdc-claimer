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
    "3F2E3AJ7RjnjVy64MgXCcJ8dLMQ1B5PzDmdv3voAU23h5hp9JN5aK7HhMHyXFnz2cG9FhHA6a5NrNWu7Usjjksfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t9FT67XYjpS6GnLx6k6oEUxqmUgsAfFKEEkEqd1uNNw9ExFeRfsYb34kBzWATqPvBFxSZv7UTrGFUncej16opcH",
  "key1": "59Tfsujcdir3C7i1hwKPoBPm1mBhQDY7BvP9z9eCmbDBbUvRjPLrpFnjD77s6YHx7eQLSAeq1mmF27fTKM3ryKM1",
  "key2": "2UC5F8875QNyentGcVYicioJ3BhDtuaHGy1LzxHmZ2ssbBHBRMer7dzhJ7egRprvUUZWFP4hd6h4bix4qpWwyzPN",
  "key3": "2s8VcZ8eg4Xp4hMiVFQzArSNL9CUmBcnrVCHpzJeaiUASscmLPFobryATVx7dQd64gBnEaP8rRwU7xr46QQKoUra",
  "key4": "516pVQpHT1FDbSU7KYqhg49DvJ1qQf91ZZRZRbzioTe7c8Z1QmYp9f3NMHsUS2Xe9FWEYJJRwvz3Dnz7kVFQBWaT",
  "key5": "49RqzPvp7R7BikgPrBS7t4JRqj5UTm1KZMuhDc86qZDZbrQCRD6yR1HNE28EpQ2qGu71vEHHzUxhCCAC1UGrw2Vo",
  "key6": "yQnDuB3aU16GWaRhN7Tindiac5P637wwiCH9fywfmmJqJbRvgqnAzqLY5JMMv8VL1sdvNRD3HqTLSYXJMb4vjyT",
  "key7": "4EyVNMTWqN3NwNiRvCHAyKvfAYv6qHqSorwKhYbyfkXYrDYG1cFcUv8qaCptt2gGuzjvwV4UX19dHHZbQYEEeXbB",
  "key8": "YBoWkKvVVNowDAyHXAurR6ihGwjZ51uW36ZnvfpqNojjToNAmuQvieK5gtSDbZ1nyPtYShrWX1FXMLAHLcq9HYj",
  "key9": "45JeYVcuyrsdxEgw6Y8J4DF4tvrHqg7NtJuaa5xuuqb5cyByCQadLebmDwQvxSqvCrVsxgmHMTyFEs8NEdq867Hu",
  "key10": "4ByjReZ12wCEuKkD9rceuWuZv9vSyRtd5ENXeLJZVgYVf2MCzK19F9WDExm1UNTuEHSpqAYR1ZAEKvSdq58yqbtj",
  "key11": "3TXPrPSi1vBdtA3k36bHHB6REXdcAGdgcZi5J9xYD1ysAtK4kk9tTYZR3b16ePrXe8TW7WjNHrzxZv5KFoiLCML5",
  "key12": "hzm2eSLyMY5pRoaAtMaUBD4s31Ut4B4PTRnDrQCYbyd52iuhY2UuNk85odwQSZDt2f7JzZAoC7jyMTc4BAdHG2o",
  "key13": "3UVcnS1w9AfAV1KSpwoNhaX7g5sRpas5LhS7W7gNuFnkM291gQBeJtXMeot98NrfS1s7p7aYmxdjMarNaEZmdUHE",
  "key14": "67A1TbLGr8nFoDBU6i9DDoKVTZcfvP5gCZqZcStvDYjbxLwmT4MAThUmRHqZb9m1tEz3zZMkVVsP6PuXpohKzMam",
  "key15": "3c2UKaCJEnHHP9KCdwCEJfcqNKrNV5gkchthK9KnZQTqGzN1KaiWh9ujGd2LM8cwkqzFTTPc4dNgSWCkjbcHW6L5",
  "key16": "1t15NaFAMn5f84b9p1z6ijB1d8kFmJY3Hnm9UbNhPA9Bvx5tT7rnTX3M8XxwFaY7qGqFv8v8kqiDbGJhwzFHxj2",
  "key17": "35AWZsu5H3prdCx2iJwvzfn1nYbJ9oQ2DZAvPQonuAH5g8XZCEaSbwutzCSGV1vwstNBKoac5ECsSJRHmGpnRUtj",
  "key18": "4VxbUqhLxyPkV5mFRPY5QDzbuhLTaDsGf5rfAV5p7kcmhhRn2pBJdC8hRGSCHVYHQf2FmgAu5x3EnRH2i9wzfXgJ",
  "key19": "5LAfV1dB4fuLbwaagufgcXCMA9BuoQNVkHZwvzDD1V3JE4uAz1H4XFCFRJqt1WABtU2FetKxyXfJG59vQ7CFKCDp",
  "key20": "5VYPtHzPMwMgzueJv6SiG8pjWDGKw62MC2nMqzcTPfaKKEkTQRr1f2cgK7XAAqcTFTaMFbrwoLdGJDowTdnG96C5",
  "key21": "2b2qJ3RS4yTmdF2AoSuuZQEGoJsdGuaCTuQXMjvfLuWotSoMTykwW3jFkiAfEjGqQZ8dgLPng6BHz7mXc1csyYZ4",
  "key22": "TYvYrV7LESdn1dTp8g3u8cFdvVgJFyGqt6RHkB8wdp1raYijbKZLsJAcJYoJXCSe3CP4yu4vArEBsV7RY7Rfjt6",
  "key23": "3hqtCD2whoxvgXEgnMGgmsFuphHpqdFooNHniBR7cMcg4gNLT2UhnoEiTs34Z45Fe9awC7wjewpmktVXy5SSngLs",
  "key24": "5epe2SncMqgc5FwqeF4upfihgSxh7YsTc5Hz3FJWsGaZjf88ajT6ubw7XTTBBmvyYmhxRVJsGtGHc1QtoqHKNsKM",
  "key25": "2MCNbUBvSAaq3g7yP1aMWxkwpKK9hDghPTRLJk8mzHsJBvGZRQk2VYmXbJJHd6dUuisrGRRbCrBdCBAv5JAKpZZH",
  "key26": "3Av2RmRaiUymig62g1CvW4X8sR4DAqcTh5e6GVYpp1ig61fsCJ9ZvtJfTrKuK4mkF6WWwVVWzENEuXCw3SMmAw1C",
  "key27": "3xFkfykHJ4AayksiseeYggGgPXpLXRK3xAPo8gCzbvBp5E9NJyHyxH42gzwVuXzrZo9H4SioMgoPMVaUqB4QbPvc",
  "key28": "4nt38K3DdYiWANPxVw2f4rER4Vu4aL1jsfUeDvesxM1DP8UbRYAkZhg6XZAdX164KSAYNWWx7LyQ8XXwkav1BiHx",
  "key29": "5vPsXjfLBXcNVnALMdHR5LhYwRVoSWrbLE8SkWTNgJqZdvtuYogMwjXkJ1Z9LUW35q5pNf1MyGzhmSY5jcX3FHER",
  "key30": "61KAndEhREee74PzM8nGFBS2BQPJHpjNeyoihhm8or9ocLpYYELAThbd2kBVMdZaykCbAku3SGbMVz4xTKQov6AJ",
  "key31": "4X1oFJbwh6WLVxrKegMzHe8a3epUyCeBxQFGExqx9nfB1PSg9T25gQGAxQTKqWVkdfB3aMeMkVusnCdjhJ57FwPX",
  "key32": "4JrN8kVKn8rxSh4hXrwkpYJdKuSM8DNiZ4gSurndyPiXqGRprG1W5JkXK5Aewc3812gJdq3jbjb5tpvMDxG791Fu",
  "key33": "3eCJyeHfBd4Kd3rGRNCSRxqfpM4tAF73wE49eqoQLhrVr2xi2iBTCLFHwmUuehnfeGT9TyFAtPGgHj8C1fEtP3RN",
  "key34": "3uHYq5UVkTJRYTjvoA2mseuekDufQHUkTGi8CAQp7LrewvkspV9mcVJCr2Z5z5kNThN2hjfbJdsNj7Vfv8tC1Exv"
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
