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
    "4rgkTRDfbQFDJdCsw91kh5Qzhi932vLqJrkPEGguXtTFeJRrBvUuakyWLXxrTQobWRrFR37BeY6CzKiDGFdZEpcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26phipEga8q7TPmgMucT95nmPUCaXKs2aaqm5fwnHpQELMHcJo91Mh5jNkR4gTgbZnJ9yBYKbyqL9gkboe68s65w",
  "key1": "3VSHWAwr6oTvRi5mhPBvPCvUWoz5QdNaHuj438gU1VXHtPzQQkKmsf7SbEr7X8bxWZSFvb3yx4zAWNsK9FGdVZZt",
  "key2": "nLvYDP9WEtvvEcMCrS3S3256FB7nwm7M9mUxuuzdTaECDgCrr6Pjb2BuJkLm5aHQoDhWHLS3cM3SVX2uAGdMcF3",
  "key3": "2X7shRAnTsprvuufgrM7LxsUHu2T9K8tzghZhFYxch29XAXMY2UQxnwrv3gYFbR6e9gWh1q6cWwjoCMbMe3bkxb5",
  "key4": "5oBtcFz3YwTrhf8D3mHMukxBT5baWkpkYQPNmezYGGSkyrywgrtp8xCkHqyzpk3nz3abfx1HiYiCyTXAX9bjuYL9",
  "key5": "62hrEWVmxEZPTexbxLvEEFDgCgBBLRS2wWPPRb7r9hkLtcsVHRxuVntMnPqNPFH1DZTtazgkLgmNCQwhdaR3Fnz7",
  "key6": "2ZGbqPu3P75bfjVV5LURxVR9jWMEcHBbiC8XUGzw5zdZfc3brtXFe8EAv5rmm3fpdRLYU6kc5ymft8Qq9XgwrYxw",
  "key7": "5VnkTZ1qjhgKrCPimbw5BdvCm1EYKRYJEmLi9VWLjYomxywR3FCdjUk55Z97SP47pv8R3vcTCgWAdGBg524MhG4h",
  "key8": "37HogRp98oLL77kQSxWrLYQubZ1UXSsibF7j2duWzLj1Rm8sWPBQsukbyQCWXhsSBhRPW48ni7ga9wovRsh1YtHL",
  "key9": "5RYRptomDDyVQahgcujYENMveDapoBhRFLM9XUyRH9Z9w7x5CBDWHuHugY9cZxw39GQJvs8kkbeSyGa6p9MgiGic",
  "key10": "4Svi6iJBXTmhijeDYYLp2Uz9dQ5JNpSPZA7buwcPTMxJTfGcVb1G1HZ7EYtLaoUyxjbCKr8Ap7pnhfi7KH8Pgjzm",
  "key11": "2yVFhyyDuoTTbuxe9cN4JY6Qx12MQ4kPxBgiHr6An9xUoWKGd48Mc7krBJPDHwZLqLP4HGPbo7vf9TitBgRGw5YE",
  "key12": "5d4AjxHnLoxmsSdnimtg9Pb6yRHXqTDjGptZznkPEkrJEd9nNhJRVv9VQHL29627tr6cYY88BprqRZqeKtTTmuiN",
  "key13": "5Jq7uoY6eimmAR7iJTqXRtdoabGwef6Hrw16NDFw2nsEwuZsbXY7sq3ax3CFSp3Ndp5AoF6c8v9HqLSsAhQY9Lno",
  "key14": "65W3tak45di7dDRnd5BtSzc7HognGJ6rfDtLNixn6Mpe2gppWj2wK7QL4uxLJrVcJMiY3W2UV3pppuua3umG4zic",
  "key15": "37WqdS4KR894puBPVCNMYBQGSVHusDr4TDWUhgsMvLEbFMxvgLa9tSvMutKzCG8gLrZcaQfgpgxXKkJosKPYE2yr",
  "key16": "4eNNZycXuz3F5gh7iUfRmrJ6PMdnw1XNuFQeQDdHvZkjzhK2cgJNtGMvPiofckAo1g5aU1eH26Z4iT2z1RWQXssX",
  "key17": "4fwdtsCjyEmiFJkZmijUyYdEWxQpchCc7fdKYCDou7wdhxgaKq6DrqDVRwQtniHnuzSKgetVyY7XTyMr7b43NYhG",
  "key18": "3JmtBS6wEZG2d9JSpw8m4dYWhoMmPeitARoVdQTr2WyXJZzTikD7ThQ5oCneoX9mWUPSHWx9j6UrAguFqnfFdy1K",
  "key19": "3S7GdYAszYG74Z7zVZ4GRFWugAqPjR4BsoKkg5Fdkg5H4P1Qar79twTxYg2FimZEFcwwhFHfnJCbwsjvrmztsphN",
  "key20": "53NmyACktYuizVcNzJZyAyhUxhRSZ29emafSrf9ewpsxPeh9hX5pNi8EvoDrgvSDYow8LSnYg8r6A719TjjhGa9L",
  "key21": "2xFT8FEEP4TszAzVvYntnn6M7P25VovTy7pCPxTDhyTKEK1JGVffqDW2fbHrUmEzZ4oM2r24t7LpsGMHBiFxim9P",
  "key22": "5bhRK7qjsVCSd2UZFW9MCyjoo2S8oZAk81TT9mrS2DkbHiM2SnYRQhprwJa4iGnJMR8SgCLJaEE98c6TbWiNV8AT",
  "key23": "22mNf6Gqra1j9ovtogxBUiqmKnevY7j9ak4voGogrHpnCWpJ5vjqP3twoxnrLYT5Y1J8T7shWpnC9Pvx36N9e8wh",
  "key24": "66vtYTUyTmNio9nEDKfzV7JtFqtExC2L7X36tyXXrSB4vcS8rS4CfQ1WQzY3m78gHKWeqioUZEoBmapPaBj3jgpg",
  "key25": "4JXjvmoerp63UBCAgQdnt8kmd7vEo2zFFRcx6728JZpHYjwXp1ocWzhqRHujskEG6rD8uVp6Eq4gmMs41aaTayZN",
  "key26": "Ryf5gCGpUPrEz4G9PTNj8vyCjtZaUivD853C4nZRDjjP39jRedVqie99ypvHWd1dUg3DewKiYcW9SZRqfb8ZcyD",
  "key27": "4vYkzMwVJgRaVvcSZviug9ep5puehWjRhVV5EiJwiU5Ke2SLoyTKMLqkXRG6rAhvNrakm6oQPkjxVAuSHe9XT8DU",
  "key28": "Ve2Biw6NBZV2ieToUbhJNpTyMvEkuPPpKGuAeZEakMDawfviQAmp1e76eGJrweZEsYTSrnGLC8rp3GhhWwFxsW9",
  "key29": "2B8Qc7fg54kgksJhqx6gCyiptxnf1Wc3m5RHLuSqMQCpKKDTqLdrW5aasgDbbowkEFAE63rUTQTCT3au4ZmwreX6",
  "key30": "4haSEM86UvQEDV6R87tV7pRDvXninGzxwmNwRGBpNXeccQZ2TH4BPYjJzufjMouXNMHbeEeT4QnraZGDdoswzzn4",
  "key31": "SuYEZM4oLPUiA9HSEoBZWnA6Nyc6HG54N6ZtwNeoE9SniqodNSQcjqivV8qu3ZTvVSk3PrMXRg15PghsDa6csFQ",
  "key32": "saBNDn8ZPvdi6SDRTJySksh2M1jb4zG2j7RGNSk1Yw7xbfw79X2NjXgaQGyH7PPAwerJsd6A4o4Tzdd5kT4jqJv",
  "key33": "5ybxsHuUvxTDQAG8aucqooA1VQynad6u4nZf6pUYobT8S3AKNp3VEFNHCTwZ1e3w6mGNmCEgv12A9ywCygBZ1fz6",
  "key34": "2ubSEfKXVCM2UmShrgRQm5MqSACWjw3FCEK4uk5PjyyEJxaXiuauXFnWpjtZwHGG2ahhWUzjSVnZgcGHXQ5obZb",
  "key35": "4RLU3mcDXGt2NPxuRjW4d31AAdEuz8y4JSSakB6azxdfJMTHTjNn6n8peopVjWLo1bN9N68m8TCXVWCYqYBFsyys",
  "key36": "3Js57c1wNFbK7KUYCfzJnTGvFgM11MJPrC89DJJw2DZc3jVPGLGKMwFM7r58Cr9WJ4c8bF6s9aF6qQbjeBNinp5B"
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
