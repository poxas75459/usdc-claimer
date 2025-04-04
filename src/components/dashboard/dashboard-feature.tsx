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
    "2EFyWK8KmkhtcJAqA3EDoxDmHZV45wjh8a9Ns9vYYtvd4nxFAX9cvxAQ2im8XaisyXaGZSL7YUg5g1TYiy7Amwkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JnSXNLaJVFf1tXdgaECXMeQTyfVJfbX3WyiXkvb5JRbiNZtua9vgE3pPLgS2qV7iusQ6zus9U1WdbzAyY7p6YN",
  "key1": "4X9nMFpu2LRNt2ZrCL863Hh9Q5jaQCKVTTyCph5GLzLyhAQfZuxqNm3Y6EJNphyVXoN4rYpvK3F77MMSct5EMaf8",
  "key2": "5cKcDtz3YcQueZwNaw4zKDJmJEKnQDoWwfC8gtAgsxNGvGau8cuNSg4PjurLoXdvKz57qSrXHssVzXDNFdRbbmAh",
  "key3": "3rQmTSoB2yNb1KBhyHHNHoEdZiGfarb4WfTEbVDfTPDSNCvQWcBBNeJGe3yhUGiuwYzgAFJxo4M827qe1gr9RXFF",
  "key4": "pNxKNcgpFJHkUhbRVnUYetvjtGnnFeJUEH7iyMGPk9Cy7fPLFUti3cxJBnY1hfq5ynacSwZSbtmHpMpXgV5c8wW",
  "key5": "4CSiJpTzFki8sBqQomCADhXm8TVpTSWipf9BThom9nNWbybFB6zGbFUdYnijzFM4XhN2w4zivG6rUDW4QfXLnjic",
  "key6": "67EZMwWhEcVL9HcYrPmAnyrbrDcVptaSk7MBnsjVF2fctDCkVYRV1x5Tq1vppr5Qzo68ri2RTE4JDisfGgHP2zGM",
  "key7": "roMj79VEoZRLtUYu1zsyK97XxpJwRcW6SAFVn72p32v8RRJzNmDndVsWzGD2QLYsoot8FZjcBbGVsNZ3uaLpUpR",
  "key8": "4dk1XgBYpETzndGR7yV7RQ3aqLQLxDoZz5jw4MZDkJ2NkjBXSwxjzar2uw1Dhk8BYDyfJmTbZVzVFfvhKvpcXaRm",
  "key9": "Ts65E8pwjSYRDRnoH5dTVYKxSzjDkJYBHgfBgXabegewTFSR4GT1UVMWoDd86tg66u1pEjGmVYpvMVMJ35wzJmx",
  "key10": "3roFoFaHHcXB2vCB4LKYGCfbmcoEB5mQFtQ68reKcsis8vsYiek1gkGfzRxBPBgL5a7uo8WH7EVWcQUcfKguTkF2",
  "key11": "3YgokPA2cNkrHGuqHBRRSdwSikX7BDwrmUdAd7NP5mnLaLSkefGqruUwBiPK4qhdPuRsKXysRDgHD8eiT3xZqgKy",
  "key12": "4HaSeMHW58ZU562ynLUSHgMqgf2NtnCx2H6TfdYPTsYBLM7ddSAmqtTLJieHXRpZszQpc3NEaQ4vr6sB93sADx6J",
  "key13": "4DKkj8CBiZ8x6LYFwyJJfaBMJDSMHy7SCxdQ81xprgEgBo3ti4dfXoifgVWYFSmXBDsKs4aup9aHF7gNJPSzcMan",
  "key14": "3t4fGRvbUhW9djyYVYA5jKqdByKfCzqBrHHgRCMKcjFVpG3SfCwz1pJGV14GJTquzrJGbXLGpYPoN4efQXqgzCqh",
  "key15": "3xX37vvQHmknsYTqZFJnEFbTTMfnBrbXfbpL5usGzVykgwU8ydkC9ZFFpDGyZtspYAQSyZkTuCTRbn2kFj8oBJTj",
  "key16": "2qbGHN5UiKyLqnXn89EQyVLJJGuJdJoK4n53YSHyLjrMRynxvB38dDctJYcmBvbrmPNysompcPqKxcbT1g4B3iyd",
  "key17": "3mRV4xYckukjieFxaxRHrWhJAoStdpUMwdjy7JgGeUK9KYAoJBc71gV7NTHFvKQkwFm4HZNwCPYW1FmMn3mMi76A",
  "key18": "3DYQXSU3BmxNb981EAZ47j1BrGpNEzGXmyuwL8Fh13FFVvVkCtBptDxN8g1tZPgBPntkccoFjQJsNMDaM4BKNUMp",
  "key19": "4HAfgWwrse2r5WLdY6NSA94NTRbGJ4eSM4EmzpFApxeBBsNZy6PJ1VnpC7iiSyjhgpgDm1q3xdhLU7DsEEbad1ud",
  "key20": "3iyqXGFqfuMBMz3ihgpF5stwXg7BWw9FjbSSEZGvZ8GtkK7s8ASTmA7y6hPGNmgYwEuUKDht5CR59NafSYtSyBHK",
  "key21": "TEwieENsXmZkg9GUxYrZKxBeuzWLpqqCkwbbPaG4ohPrqTJNVjSTpDzVrVW7h7Jc4q3Gq8cs7BePHT5Q2sgSDrE",
  "key22": "63R4qGi196ihw1wvLdwjBRmFtoGUzyy2Md8iqN9AhMKeYXrZ21fr7bQ4bg2z3Y4uUVXUXMNRQpLtYcPzxMCMBVRz",
  "key23": "3QYoCihSmkkTKsZimz77UCT2Y9e9ny66rthLc3JnuTdm3d9FnHFvFMJ6oKeCvp931Rmx5z6KsUyJyPzW9fxnsGQb",
  "key24": "5uRvZFsUKU2xqeA4S8c24FvkRqG59U3RKmqCxQjjPUGs3AbyBUgK3ZNTRDUeSQHmCiAELSUqRtWQWf5ENLzCjK11",
  "key25": "4vLfabMiP8NX9Hb1QGbCu9ZU6Hcr3TkSyxziHy8qgAfnkYLX51QgFZEqz9aocxKGFSRrZFDy6Vvccwc84vXeUWWu",
  "key26": "NunQYfbwwFH1w9zmJ4UCSPcDJAtnoo58YRhTwYj1LWajwSaRCFhfxUmWjie78eASshdaR9qYPpm89JxfhEXuAQX",
  "key27": "3EBZaFvxRCZuWaeTsGEikSg9jCH7m2bkngRYzsisW6f1hXPisyb7RUajXFr7xVpuRZUVCkHXb4TgwTuhCnpPpkAz",
  "key28": "3WdbTjztna6a9NC7GFTJpU6noM3oG5y9uF8gVgYZWXZV23978UDmj1eQmSpLFfU2gd3kMUtajHWwk8KvfuoUGLvK",
  "key29": "gec8ixyAVmrUjHSFSGVs65ZrdM52FdqATY8q5zEkPE1SsXshzKs3uoH9GyQHGu9h9bECvks4u5SHCsjB5Y1mcLi",
  "key30": "gSx2andtAuTc548R8ntjvmSjqS9Zze1VWWdhQZaenmPqqGRZfFUsdEUJLnpv6Z6Jci9xTAML5ToJYHTz6deVvrv",
  "key31": "2JMaGrtzFYdukd95QNwET5kv6zwF7zVWurgQ6Fd9DsXMFZPfH1HuV7bDLuiQm8w45z2v4JwY42uSpvbyZw2cfzJc",
  "key32": "3XCd8EMGuKDPDtjY1QE9SBWJLmNpzSJnLJKHYr8vJwWJA6jZ2r1eycPMiikFaFxXZ7SRX3BCoY17RJgw3rWj9h7Z",
  "key33": "3k5FhQ5T1vnuWvPHcxfE1i551pnJtG5SmexxE3skYUP4tVBXbH3M8EL2X8fh27j8Ma8R3eH72k32qL4T7AYTHK7f",
  "key34": "52TWDJoNVyFpH8PJSe6qYx2MsdxSammbKKsvSReyVD2NK5vESRAuru9hwtSbJAMm3322NzRikmdh7aUFTYt2J1Jv",
  "key35": "4cBaSuFHGc8EcxY91PqCynTExFwve2NUeZ9joJMkPMzHLomxE7uzVJ8SvwuCi3MRwfQFzq4gpAoQeGYQT1qnXauE",
  "key36": "cobFWEK7xGXgWxxdX7x4cuPcQ1pyTk2sfvAKn5BkuFY3Bi5HrPMfBdDq6PP8utcaBLdUW9dxuStTZbUtFXzNX7P",
  "key37": "4pnfbwDzPg9bX8bxT2djNJvcTGiNuUqj9tpVsGfcztfJs6UcX3v29VJAuH4q1P7bVZekFAeqCvccpL3pTZJMsrTY",
  "key38": "nifUiLUpYYtPzKQ86qNvhZPUS6rfQSpaMAxmphrPpDkBZyATFgRUN4NPiZ3zRHk1U3PLQ8dD5djgBy7885L1BYq",
  "key39": "33NA2rVsKykxCUcQpPWJRMFu9FWzL3FubEWtgeXoms3ZQFDvbuBNo85s4caQM9BoGPJDGAKZ1zLi5VoN9djA2xfw",
  "key40": "2JStfDVjFZmMB5MsQhB3HSUnB79ADF6FmyRSTC7GoFo9Vo5mAbZNfBZ4E822cuPBLGWBL2N4HSVM8Gj2FjXudNtH",
  "key41": "2LuUerdvqucdg1Tpdwk165USjHGVCbafi3Ecg8aEsdqA3TLXyHWv3xptH8ZSkvAYviDRLc2SY2jctG1EdyJSnHzB",
  "key42": "5D28QPSPbwmx8wsngYavsApnmu7LP1Hk7M5nN7k72ygkirakWkXK62JcUW23SLgRd66LYAQ3my6WHsaC1AdMLyLo",
  "key43": "41yoCkZNDyuX28fNgvJYJxVMrh4DbY64jouEm7MmvUobBtJyNWZo5LiJDkRb8SQqWYA4jBQfL33GXFMmBrXZnuJg",
  "key44": "8n6RXHdRJr3fkabh6bhFqG5b3FrHeFVffAskFMTjanRmnW2qRWwZokGeSWEiskEkqVEYqRUQZk2ynYMwnDhnamE",
  "key45": "5Q5riuHC9Xg85rjq3yfS1SEsYPbhwrRLDoBL8mjiTxND76AUXMbJX8xAYgQHityp9BJwSMvd6epNvZJFwQ1zMqGX"
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
