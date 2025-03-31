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
    "so1zEQPmqd14mRvEkL9GYbCUfb53KPsVEdQ3QBX6YNEy2aDwqhjZ6UMrkxGjRZQM5keESE1Yv4LQnCrMaGuwhFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nz5DzYsYnp8GrgHGRYyXw1QuPQENzEPCGpJsFYrWoQYCKVxCsE7H2T8BcQVSKaa6k9a2mzwMfEmZyg2uJiuB4dS",
  "key1": "nWzroTH2TFaMDu5e9YjCsQ8DpN9TX9UeVbJRL2DNCU9zUHuysEpDSueMmpuEzVDiMJbqdc9a6auMpA6PdgSW9Mg",
  "key2": "2ipkvxYrdsx5UqKWDusUXgdXJh1TSu46kotBwuK6u9S4Z7cyWiQDE6wrJ3vPKWASYiy3VHVLrvJHyvTGzsEM6dYP",
  "key3": "poFQu9fouqG53HEnz1uzm9ybCFPPjiSirXwMakpxwRsJUKVwtoRuHCexyNjKywwMUQyPzZFQypnJLNE8RTdvvqf",
  "key4": "3Fz5Pc5VGF8H4AEFpAhK8vh3voptF4GJscR3Q7QZn7jquPK9UzQFUvvrC6iu8MHNeh8y8T9HdbZcGEf6n9PKotAS",
  "key5": "LT4puXepg3q5ynoroYgVCchrGYMQkXchnjP4DJksFYVhKoKV3VrUscZjBpjiHT15zHuG35EQ64Qcu39PMJt39Xu",
  "key6": "3yWCEXW7d9eWLs3awqWnNBLiohvazDUYro4M8E3xBiSh2dgZcaET1YE16hdmQH8eUykfdBMtn8fzriVL6J5RAFUa",
  "key7": "38F8tYkgwh2fUcnd3pNtv5FP1FY33HSfidaHE4WKobMBynBVYEsqcTYrxBxUdaPSQVJYkuvyV6sYQSWke5fpDyd",
  "key8": "d2gpWBHmfqERynGfMBDxVWw35cgJVJyFEJgUtCs4fG11jRkzSZH3VZXQfnCRXCW1f3zm8ZvayZMAsY9rU4ZcyTh",
  "key9": "4wTYWKRFwKDk7UHZWL1ZexTAaW1YL9ySA8n1VMKGA2EzeRsLoXuqfhAtAxTCnQRHt6PENHvX6Z4jKMytP5RkF8hN",
  "key10": "3NiZ7Nswj2G8HWhC85DpePkzPZaSjPpBo5TJ41pasxMUkz7FH3RbpwxvVRzZP8aaE9JxvzExPRDJTMCMUgVz8diK",
  "key11": "3AYbxxusf9mwGRNLGawSJc5HTvV7ZHh2H2C4TLH13NZmHUmHnByafVfjEvPwxukuDFf9DYLqFx5nYYEJF3jQgajm",
  "key12": "3Tg1MjdCYjQhfmHenY8KkkEPC4SimNh6Yw77isMfempwQV2nchxzA8vawZ6oyjuvZuB1Yzm6i3VJvsb6K4m3thEw",
  "key13": "65GES47j4hBU3iTm6NJVuCDwvnUivbphh5vJyrmR5wTi9r5ck6S3mNfTr8uZK3Sb61LtRHNfjyn7rWmWnEQKgNLs",
  "key14": "2sXECvRbwV8D5Kmz7VhPZrsrG4TAVJ9nKRZnsczRkm9XXWfBmkuVKhUS87KEFVZ9NAfySWkRBimBzkwTgHKqX5w3",
  "key15": "JMUUpnTXu8JH9VuBBknrTdFfKDdDeTMBWMuYYXfbY5bmRfxxQYgZN27Cj1CpimtjUHCJ3R4jNFHabnQ64AcxfJh",
  "key16": "PP3FrApkzWAsyaWuHJVz8PR7YdrnhYZU6xPLHz5h28YVNjiihfTaeCSXpdwrQKTnyuXaV8fVGxqGUFv8xMHdDb3",
  "key17": "63NbGBFDaYGr9xdRQXErpeUpXbfC3m9DP5g3JNWXFZqRkHB1aiReRCvK4fA62UoaYDof4C2Qr8Xy3NB63LbSBZNS",
  "key18": "3BUwFmLKgx9xxMyBwbvkSxRkaMn8wynXg3YNXQvvfBvBWcgS8xwx8ciNCY9coAyEh8Un8RAsKG4EugYKfRUnZc8Y",
  "key19": "2ud7Pd7FwoZdHw8JY3Yd8pwmxtfe8wcMJ5WezHLhkAHjNTLnXNp3fb5mcto7Lee5gVxeYsnY68k5f2LUN4nP8ij7",
  "key20": "2dDwzws6AWbGCTReU3BPSbMqxcHaRwqPjXMQkE7faGrytNGHP9acd3Sr9QEpjAj76uYnB73q1XbiWCLefj7L21qV",
  "key21": "53rzpSrEf2i44xMJ1JK8YWr6geWyo4af2nZDcthZcC2f8HR4gX6F1mxBaNi7UUyeP7h4tRbqhariH6Z5D6QSETQJ",
  "key22": "2Un12djBaiJCtR5SPUZufEUNv7i88zMDZKomAtQjDY4ab2ikb93iiMGFgcwcybzDgMCmjURPbbUVddqo96mdhV2",
  "key23": "3nRp9F2v5JDDXfmA3xvw4CbwJyNg39qzcjCwXrwH7MbNMPMUpuu8N76r1RkqSHCvWRMcxcLNeH9C3AtfDtn7YC6d",
  "key24": "5JTUncE59Z3zj8jCsdNoeBugUjZnuwBJfstuseAcDtystMGnjTVMToWBU6N1FMeFaEPTDbc723HgfraDe8JXTWg2",
  "key25": "w8niWgqWcEKKfRGqA3YzLML55UPQjQhZrFjob8XiXpwHAMzgdAENhBoH36MP81ovc8DB7gCdGsuHETDUVdscvps",
  "key26": "2CNZdVx2TL958E5nm1kAhjzMmJLtAy2SYnP2ejDjC398cpFHTHc1y74wEjggqKkoxkMbp7toFYWL7BY8KKAqEWuy",
  "key27": "j8DmquzvAvsKC3EqRRYbTEbfDjamvRiZzAqPkp9bEGVSocZE6puC3F9sxAGZsWGDDv8439EtgnkptE14kQW7JZv",
  "key28": "5Gah8ZtNBPdni9g6vigsgqJCd5YwjEsMymCZkenyjRBdsXhY4VrerdnTY3tErCbnaGtZUN43PM5mevMZ3N1woBXv",
  "key29": "4MKvJa7F5DZxkVuKp9cwn6UAQk8cchtqGwh8gkM5zqbVuGvh3XJj1T45QvtCGU4uJEoeh8nyX3JAQXchzqfUdSU7",
  "key30": "2CYnYeuwcAr1x5GnkMTz2gTLcWziZjt3N7PbUQhGEnvLkpjkMxbc9seoZngikdVZxyeReCtyDdpqrUAQwbaBCxM2",
  "key31": "rvavPJHcMXvAP5AATAQiAow26gxZVu8sjeDnz2auAJDp1nd6NXVTQyMvBwgSzTMfAzt1G5Mb1op5WoSMGfTNzto",
  "key32": "5VhmA3WPYnYkkd1CLbJKz5jWzEXxWQbWNStvnUu4dUU1FhXTAXA1UyUjE8f1N93ndshvsCNDT6haViA9AeZrh1qE",
  "key33": "5ka3Tr9CUJbYTKGz3xU8QNLYiYdqGdAaCNCthpTdRmFbRjnVTsDaudYPhLQWSUZobfjBjBGYfPi5EU75BRPoC6GV",
  "key34": "4i7RCNucB6XtPNHL56VRNtbNPFz57zv5UQbvLwdZCcbt3GKCP9FFgJ2kHRR2p78eGqT9wjTbp4RWbkk8cbvLKMWd",
  "key35": "2naAtWzjfi9Y9wfaW6jEymjmzm5sNz8Xs8YxvKjNcTJk8NV3K3qYayARPAxWeXv49WHjhKKXsTLmiUWJNQnSFNY",
  "key36": "63HcB4jnJbg95iSED2QsQakPWs4MEmUc9eFaBYhP3ZV6GDjosUFx3sjin9Y9ZmGWgs6nMkdsDuDPskegMDGFxiM9",
  "key37": "2tYDQPk79LrDq6BwQnUeN43Sm3GfpPaRKVLhJNwuTxDkBtDFSxiwLa1jRtF14AphWW2a9Hiyotax9PrxAKhiG6Hv"
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
