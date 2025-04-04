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
    "4HGvXK61wH6SinJ6Z2krQfa75vzJQ6odUbv9fC16j2MFo4KwyrR3qSZeCikCwjdYoAvQvfCiH74DK9arxkN8Gu2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LkUiKhCvx5BrAbtqV1QYLmQ2vdbq7H5cMFvyookLEJt6nHLss7ubkMH3p7ErVBZ3PXdX64J7YjBFsGNnCYGhoh",
  "key1": "2VxMevbHRQFykBK9KTn6KXpi7bQX972JaCPdhgoLYqQEf38n9vJ18tCB93NajHRdECz7tpPdcJECaWeRWscRUHJg",
  "key2": "3hu9AeyLU7aKj3fQnMbMhRk6wE3vGK9ntcR8Lcp1xc7rbBacAVAoKhzp5iHN7L7YTs5giz4DuPK4u2sEcAbaPLhP",
  "key3": "6t3MuHWv5ZKniizYicLgwzhftWhttSRFCsyTFHexgPpm7Wm9GDHvin1WZbHveqQDVLrBTvtVUrU6tto8DdyGCBr",
  "key4": "322R2odxHvYL1ehkADoNuxLkb25cTGZk69eGFGL2TYyBrg9UWbu8SNxJ3XSk15eZ4bmbvw8sZiCVMgtgNiYEwqat",
  "key5": "3T9zruMyikoAvEdx6d8xgRg4x5v1QxxtVGHa5A7MYzt6kJ32oWAwZsfVYP6JkgVBnBr3kubnL9TShk22VbvxQN9w",
  "key6": "2eSHLKRKz94yfvRmypemfUiChehNdxAQzE3F2Q4QTG1w4qjyHaM81D51oEzRrvFSkyVacEpk1RvYgxpjcJpEqY2E",
  "key7": "2fxKYBPzQ8kHu7BbQ5TLNtAC4qbYqWdFoh1AuR6y8S3mE7zuDX1AajFuksbWszPMH33MU4EAj91UvrKnzZKtuzhJ",
  "key8": "vmoWoib6wsNed5rWcJnuJ1tKzm4Zhkc8yWFE56rUaXkooycL9vGzfVugtEryANpiy7mth4trGo2uj91sCQ77AKe",
  "key9": "4iMZ7wDq3DneWmxUQmrP76hLExK78BS7B94G9Cby93LeYbytS4LxS2B9nNWbcPg4acoeyAGkphGujkop6HF1dvmM",
  "key10": "eAx2YYKwWHwuiFRZuLUWhKkij86oD75yb1JCMykLY5FPDi9m47dXbYD67ygFSuZyguway3uAZ4fH4CZmMzaar5G",
  "key11": "2YWy3dVa7Y9EP4F85iQM6aZVQs2HGGqAXXhmF9TBVuGgsZ5fy7QNnkDRU6Hcp35bt89jvmJd5fp7eYJofd2NY5t8",
  "key12": "5gpCzawx3RCFGzUK7wYDGs158bFrFNALCJBeF3Ce2TG1spERiruruh7WWPRke2B7UHvFjJgmRB5HFpsAY9qCRrmE",
  "key13": "5KUgeA3Nt9ADAtqf5UEZhzZes6FTazjxPGXruYjoEqR9mQuEymXtvjwsTvzAuy5JfkAocGqqdAHaitjG6k765jFi",
  "key14": "5dExJVtffepSgVSc9XUbAm1e9hRFATXsiuxqp4SZcbNtT57dBrC6qU1SEWCBrZZ7K4EvhCHMxBydjytRzYGTrh3E",
  "key15": "2AgsT2dEKusUgjGVF1UHfi37qrDF14YcekRUYUQy2Bt1HCDXmSi8f4z1RpWoU7E4TfsegnqZorgAyXQxapwAQd6f",
  "key16": "qVEFzCsagtQXodCPhdwfV7Bd7XvqB2N6o9ibchGQtj3vy5Hb7Htafq25iZUHWmKtGX3nSPgSy4Xo37LWsfbKzmU",
  "key17": "4zY2ahMMxQnu5ZSVpoJ2tAo29EoyGTeDRoo761AjtNisStsigep3R3XV8dojr3sH8Uhic4VtBB6SfkCoAhzwLC9L",
  "key18": "2ZtYii2QTY3qppRq4oamVzksqJKtkqWxZXUUuVxssJZvwDUDuyxFNaZxDwTgJytNJKA5jfN9USWQ5uWUdqDkBkv",
  "key19": "4RQVUmAwfkgumWFDw89JeASyQVVzwdsZSAxLpYnXhjEigFwFPiRbZr74WfTvmmQMeV1k7zeprdK2d1wMAhzALaEA",
  "key20": "5U1VogB5QC7NajcB7ti2KDPkaZmXxvxzm7Czj7yvSHHbmRzrBadxajh6LRR9Csu5pU3hU8Gj9psRX9wpdTqbgmfv",
  "key21": "4oEH4wuiwsnpFydRQuqovBb8m6vZMeDjQH5u7WjwJikc3JKMJfEvMXzqEvh6wHQyMYcQ3qpZ9MF4Nd1NdM2o2vT8",
  "key22": "3GWpFWRAtcqYimKj5tZu8e4gxfrtFY6egD8r6i3yTet8FYfP7wh8zNdjDprSs9qHHK16gqSQiQPWYCJXJ59exn4K",
  "key23": "4XMAdh49zKrvZDSqQ99spA4429zEhDHKok8Tch5LerY3DVMoWr6aefs2k964qMmMKJGu4j77MJLnjJcuSYFs4a6s",
  "key24": "352uHtw121iAqcFMwk3MBHsUssuuhs13FrUCysAJWEd2E9XhHP82FZGXM1kMR8QGP6Vm2GVDb4Pq4zzPKqGF2qg9",
  "key25": "65uYtDQcE5hPAEM8w75y1cJBCnCghgipPwKauFhwe6CPQbv1s77K3R4PVnDRA1b6ZustQZZZLCqf459D3UrjwHYL",
  "key26": "7cntqbSngMrACbKcULGQm6K4NrcCpHa7U6VgwugTcG6V3pU6kxbPtiLUfW4TkDJBFTPxHWABBKADxufy1eFHNim",
  "key27": "24Rcg1sbb38D9w5hDrNfTNoLfEFsM4m9m71ncGuLWZL6wNfX2SZM5KYcsAjT6PMpQzq8Q2B7WwvFFm9vHJwiTCn5",
  "key28": "2nPvVwV7NF4XQyEqj3exn34C2VV1iLciRADQDKr2CEqCSErcm5xNRQ5Zora7tMsQwGThxie4mvydCn6FYVb7oLPY",
  "key29": "5JrSWad1L7bcPfvjUomb1RfTCUag17dDSUaBinWsk91ZZjoU2emoASmgGwNvoos7HqMAvPdxGwLwP4jGMyEM7DBW",
  "key30": "55HwyhXuVtSWtSwMqyS7kPEvckj3ziAZM5Mv7B8ZdpHFunPFWmitwqtkjMiNux9zTNt2EGR5Hsaq6RsyPcz9BJgM",
  "key31": "62LSXjnDEHRaydrihVRJShf9ipFAJwJSJY3VNfvNZzwrUujnJvfCqevva333J1fGzkpwAzG47TfACpZCUeQmX9ms",
  "key32": "UJve1aEmX5tqQnjQNYhF5ajFTJTmNenPq82obmy5ayvZ44PxkBeUtL36wv1rtENBNGNg9wsLBmQGAexDVrcrWEP",
  "key33": "2V4A1EE3h6r81nPfNCBHTU45XKVe8TXxPjQPjgeA5Hkj2nh65Yi5tM9cjcEdafU5u7AvqRYE2CgZn5HKKAVTX44D",
  "key34": "3XKV3GuLiUAeiFFyd8kcJrb7K4Mgn38gAxeMgKZSZtr97gzuxLycs8sQyaZ6v9Csd7VKg9quozHjJ1NRFESDsXVE",
  "key35": "5DVYzgwWq1XxFH6wZ5P5vua5mK4TEzHfY2MaaEsGBJ2cwseCjNxkuwbzVfYv6AEYGAP3ef5ud8iUtzjaseWaxkc1",
  "key36": "3aMpqCRYoGJWmuzuamaCoW3n9QdAL3iJjFn6TDaxAApMnKF9MHtHnMZVrmYzgZYj3T4NyTT7RyMszGypvCXLCctZ",
  "key37": "u3numgozrsmzSvDYLjEp4MLtpopTBLoU7DxCFPa5ZR6YN9UYAuuHKxT8wnw3FMdnwVe8X5iMdLwcc5HoDYT4BJL",
  "key38": "2vPsa9qPrqmiGdxxWatyHpXPE2mnsUFMtq5HxTwLURehtxDAFdWqMhsENqrfCvLMmJjDmR122g4YV7nuiCs62HUU",
  "key39": "3XGs8CgV5MyyJEcJ2ReF8HWozQqoEY587yAoD4D7UYWTfjEShPfD5tDDzMPdmDHdSASa6uAX7cpH525m4LV8SsyL",
  "key40": "5Yt1JVkZAVxgSFwMTxqEK1BxY2vs6YxgrREi4UZXLmNaubhdRd39LNtMPn7PfTTK5vu5T8XykiyMW31AF6f2Y9nW",
  "key41": "JUb1yNv7mSbMEv4ZmpSU4EUcMNoHfsZVrTZBMDWqGJ9zwnDYix6W5eW9ky2s8MK5y1fYMFTZXZrS3BKUjkknXm4",
  "key42": "PBUDZQVzXNppP3kxgu9ZNRXxYoScw2pJ3KM7tABVsj6gvDbh9DgZCntaPAD5NPkn7yLNVusTr9Hq7NxDEmtkAY9",
  "key43": "4BSByfGn2iUJxMoCLS6zeLDp35yA3Sp1s7CJzwCCLRmNbrJ45LCEBxTwCugP8yTg1MxJHRQpAUgoP3mMsPjRUSch",
  "key44": "4rhWcYEoxpF5VtzbJo5ZiSDcGqeeS6JkfMLZ12gWLBkG222yHcqaNEZ6FFKLC6HByjXYqiVKzyM99j4Hek3X6X2Z",
  "key45": "33L6fF26BXJXnmACiRnQc155Tt8QXaDiMtxPXFNFT77KnLSXEVepmXkYTUGWMMzftJ9Jwdv4BCyUbqPpwxvijB7o",
  "key46": "261s65sC6wzCGs3LRjz23yG1a2rQZzTpssiptvKXVrQaDrJumbpG9HGVrUjHZbEHnC9JifVnz93CujdqBK4KDf6k",
  "key47": "54msup5Pkbyij8tg5a4WN5z85SpTueT87HEfsQmyxPmR3cm6jbZjwPjSe8oALd2Te2T1BQBFt1GGiKRCMd27cwAE",
  "key48": "4a8RFYZZD5u15vgNtgU5SJK99mmNWwETbw8v97yVGNcpKnDfu9Crop1NBphMLSDKpdVK2FYLTT7YYcJAbjhNZLRk",
  "key49": "zZZeCMkYj58FisyYqhrbSRQypsrN1FemkBRwA8bYRFqsM7SH2C5WLgCVztLdZbGrNcdKJ3hs6ttLY311AKgH2x8"
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
