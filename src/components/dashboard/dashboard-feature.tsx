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
    "AtoG2hJQdjpCsDkx28jtxgKY13rbwLbMz9ULdnaiJzdqtPZ9YUUhPpZxFka25Xdqrdd9DWLEVyGwiAgVFFmc5sE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQKgiYvbMYJAmueKi2JWximFT3XJqBLVFccodMp57fxVTm5wnGXJ1Hqcj3CdKLzn4Ft5Y5EoxvFkR4xBXvbwLyw",
  "key1": "3bCt5v79AhWkZ3j3b53oX5YVBptYLtVMu9UGjCFHUJdY6ut5twUQgw1eymzLSirHKyXZ6SrSgBwtQEVEqbduKyap",
  "key2": "3fBaG3WVhN7VsRSEV4bkNB6XoTzdPjKw2YrU1iKaGz4xwsKJchh8wBPB3QSjdMqcThagpZkXWjEuV2H3KBMH1a69",
  "key3": "3Yu1rJadUeAZ3x9bCSpp8gqE5PyEmHu4yoZjKJNYVqKBMJaqLi9HxtASG3jZmFJ599v7o4qAEyQszwx8vmDvSeAX",
  "key4": "2oxyyoUEqVRX895f38ebBTRKCVqDnwFkSVusezmfnXz1k8y1qufozfBc8afSYdTJqwYU8MXCZnoV5EP7xE2GJsHR",
  "key5": "2F4UUbcV8PaZPPjXVKGdKsHNPrTSUsdyzo6c8HRb6AQXMvCEAQaMYk9kJGmo1jFxqw4WtxNs9zqh5DP4txbRLosM",
  "key6": "5SYcfrvLB3Ka3xFAXzJeYi9gT6qjc7AmsgthRn1XVY4baFhhzTrQPJZmHhuNg7WAUpPSYiLHjRsYqWmn4RShcxqe",
  "key7": "54fUCC44iC2vaJXVUpcMNjQ6VyvBma41CV72AmPrLKeuM3HYR9Njw4pEcFMYUYVmUBLraitSnmFvDm3Q7hFw7smi",
  "key8": "2hSWe8U16Yya2zZjbF3ezV1dFFzbym4E2KB94tkFun3RFqXKauUyMkZXS8qRohz7nVHUAdedcgwDwPQu8KC2pR6C",
  "key9": "53DN6SaDatFmfvKiHSq5kBeDQqSeHe5KYKXVfWAK4N6MpKXM7t2TAS5evcrewQDS5tC97JMizKqVvGnCFKB4S2sm",
  "key10": "5iKARbbA9mZ5vTKyp3Skocew2f5LTP6ffg8fpfJFkivwv8Hp9JxvpuCH1RyjRh1s4Zi9c7ica22FCNvE6S1gUvSk",
  "key11": "45FxHeEc1QedhdKATcP6F8mvn2VbmLizAAs2L2mLdkxMngLtD96qStfH6xFzvh5oBPhrs8iMQWLUbNNbuNyzBea3",
  "key12": "3NGCinchikAebSo2FSfuzb93mY5Ste8X3NpAxPVa1vM6BKEU3JqecCchbAeEkRvQkdrAkiQFo6s7X9QdvVFktq9s",
  "key13": "3XSg6gbJEsxVNXXdg2cVQw82LnfFP7XfrRGcJvKkgzmo7F4qnYbNgfjhwxgdQfLqNYsUd1HT3TBvc7jRoEghoCBs",
  "key14": "4GtyqbTamVRyaKFRMzMDYCBuASjfYau2HzraPb9Ye5wPsMz1kHgoHxuejvojMPCvKS88nvG4vJsPffNouxVhGg66",
  "key15": "311tiP6ciYV4nPLAqXerEPmcuF9uXa2BFEbXrXtpiUDcxQRPdQNT2Fw1n2CAv9raN8JQVfieq8ZyhJ4qpwmUyDhm",
  "key16": "5hTSSPdMRKFVBAPs5aLVP96VtcP4MeLcSzrvusDpjXuXsB3azmDZBidbUMk7m8vfNZ7QeDCMb6WEJ5Wqk6msuxT9",
  "key17": "4gMpYSs1QmJoiaoa1CbPp5cYvtEgZuNpTCRKfo7FsU1Njax6cAERgnnfz8qsTC1ZZ4QUecRxbNY3r4mN1XHEnMWP",
  "key18": "2pVvgiknDgMWhfwM6p6oi1uGBibbrd61eYcjUPfxGVXA5DLARfm77rAmrBsUYGMRAsEDXQPSmB9dV5pWefqMseUU",
  "key19": "3BsABcNvJFYdFaQeU2RCtYWxew72rkQDDSgdREiJnJT9nZNvbK356cBux3ticTckKSJY2jgrzDfShX99EMDR4jDk",
  "key20": "3GLfzHaT5MSH4KeYyCAGRVrryaaBG416MwSA1AaAZ49p6pyukVSwfC53u42P9WTDqV6ffvT1wt4vHQpUrmZQu8PD",
  "key21": "2KJVyQnbYWLxE9uX27qm1k75p69mUmthV5xd9JNwV54XZKZm79v41fAHdgsGbygFagV7NibWdFcrfToYBwVfEeH5",
  "key22": "2AkHEoJPjS7LAmfjNdWyaSfL5afxPmkPPCgAuxAaHyedrGXYLs1gLDiaspjUoxUGtoEYoE936GwhHGmKmZKYQvPC",
  "key23": "4dA8PbdvhVF8GV7swnU9UJ2H3BsXd19LbfuivrtFEKmxuwWBiivEZi4jh7Q9o3aimaQa1cYv3obZm28WdEJ2Qars",
  "key24": "2NRnN7pAw7KJ7HaWR1UjDTF64NEY9QVLC6bsgDZA1PuboorZyUBHwTvkphD4JiSWTc3qSr8rVEfLmt9P3yixWgVZ",
  "key25": "2WjbE2hgpBMZNj7CbnaXzMkYTaF1dj6gxbEwo5HEPhB9vM7UR1EGn4eKv7pbSBQsERZmfbxYhX8sY7qTt58hgFJz",
  "key26": "hDcAjZZ9Zjioz7xVRZtJBrxbTeBvoFpABpon6JRq4U7b9QZ7PyzgL31gRypA8kRaHMwM9SCEV3qtCxqFfRLj3yS",
  "key27": "37d3CT5pukJ7QyvbiTuPF6xSAQRz8JLFTrGndDrJRTia2exJ4yZFnyL3XbQE7h5dLzFt6bgNMV8E4JkBoWupmsgd",
  "key28": "3AGvESFjhGcYaUknvgkwbabhV6eFZDKJj66Qomd9e2TWiyRjDQhxocUjvm31vjA3EzvdGSm9B7f6atvWircC4UVH",
  "key29": "2wVX1dMmdREfkeqpeaTT9PJhqg53ZpYK7EK4Bxw5YGkZhYDqwX8AJou5eSLAXLbDe7z6fLMALDHSpNv7NYjVjfmf",
  "key30": "4Hb7URoKp5g9Phob9Xk58EWb6qWZYbehWCDrLg85BsGdnC8fFLCFcfz5LtmH62DTNVavJRZjVgWyBj6vzumQJoWP",
  "key31": "3S7oz7bGUdVpA5zAjaEUtXajXHr176f4awmM773hxuD6tLDn2U5jCLdwUdacT3Ue27K6nkaessGsyHuqRkkaTqqe",
  "key32": "1rLYdGuKX9hQwYAF5RDYFgTu2hvTngJuSLzbFHbE68eFo4WYdQfUEXu9PbLBpxm6AV3UR2tWFset4PBN7AsLqt5",
  "key33": "63oG4vnR7VMZQn7R68tgXUTGmVJLAELDyNAS87Un8Mnj3pVFozUjHsmwV1CzyQv2jScVvPSC4Bcsc1SSSLJJTgTZ",
  "key34": "2eTD6oTXR35EoTHkQarrtPziAWSQnkRrYCbdMBSRfzY1Kd83caCs8kLNk59TgPE1jRh7yT8o3XArKxq5aHoMLmpT",
  "key35": "3BX7Dv31ZaPgNh4psCWdNYKyZ37mibjQFC4BjNVELjZeKHSfHurTR1q7Tjjwfvu3AE3yWjdTcGiMVHV9WNryjg71",
  "key36": "Ta4XsecnyZ9bENVJzthezk6r5g79cj94BHMi9K9PUKhS4WpdEowfxQtc2cCEM9jKoLBJkNJF18HWoerq3E39Ygd",
  "key37": "1ipSESRvzgQWjkmBQ1tpP1rCtPcPcivWT1rMhbkphApCDFLVb2TLKGwXS1ggByDbi1zWYdhYHsquYWgiLrptrag",
  "key38": "3pe4NHuVDCcpsPdRLSGJEH55N94qm4CSaoji7hkNvwBaCZenK4DsSYeE8cGraw8ftvmbEZT7uJv1T9tJ4hErcSsi",
  "key39": "2yD2hVzPEFQxykCeSUnHm6UT2KCMzLgsXPMsUP9sUvfzgriGN7gAqKViZnycLLD3HBu2eq2b5W4o9fG1neAMTw4f",
  "key40": "4ExUPtsaiaY5VFnn9RyciEC8RkvZDzbqFCBQaGxCJgspUdpLj3zcwmmPgzGAQGNqgqmh4iXvdkRDw2j5BRnyeVYq",
  "key41": "5sw1F73YaceWt6ABU3PRxyTyKA2ieZ9hcLC6nPJDaMmXY8aR6jK4rn1t7sgqQFJNygUxMBWvkke5yejt65G9wG37",
  "key42": "5L56XfRa8vWq2renTuGxFPEFepaKd4KUHuknpMboWC8FsV2DkpDUg2r2gU4FrhNNh2e6EpS4XAZmVQuLMdSg98SP",
  "key43": "25FyfpqcD4kVPfnE5HMFy7e635TXuLvordZYdkqRSgZsRVfJPGZCDGNWBiWVgKzS41WUWySNAbVGGBhue7hV9hoW",
  "key44": "4tgsHTRsi43NYR2zfZ82ctV1RXb4hYopQNXGyTZBEs6QQ23C9H3QaeJSd5gjdfuE9vDjxpAui6EbhGfUUT6VXtSX",
  "key45": "55zfRqbqNnGuAcYCHj4fYuQX5EyxJuhsQ3QJ6ijcRKpauTMecQjBorLEc8ApxmNiA2Yyhq1BCgfxYSqcWE88efX7"
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
