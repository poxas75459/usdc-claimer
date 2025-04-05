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
    "hcXNK76w5fQyC1qGag6t556AiMV6TocwQfteFSBDPo4XbuKckbeWqgNWWvpXMgRLc4vvfaGfW39xqLTsU5uoc6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U9NhgAfnsTo43VMMi8AAseaYxUFK2qsMmgzGMn2Jgt4MXEWhbdnQPfqd3SFjrh7cjK2YgLqBqAd45o4en5u1YmS",
  "key1": "57XyA5EJozcGhdpMNnBijzUFdRTra97XSmb5ZD4SPhmuJWPLW6tcCERyGDcQA8vfSfqSHuPBNztgMEsxsnst2CzX",
  "key2": "4sSMFiQpQXs4W9oWpFqLzkum3QfMctxeG13aMdvyKNvmfADYr1fgHDdR14qdtAXvq8Xr3PqdnWwXGDwBnWjtYHbT",
  "key3": "57WD2ohxmfc8K7TEYmSPLhCRFSmZjP13i9wD3MFcjdjx53VTrakjmKwFmi9uwVAMeTfc44t5pidiVNkKXwQeRLBW",
  "key4": "2HHgFUC4H6B6NpZqR8uD5an8xWyDk9b3eSEK6eFno8jyTumX5iggnBucMJzckjne2vhdzE3ZuoeDtBshKcW21bDn",
  "key5": "4R3nCsfd95khdP1m1Rt1JgfK8GUv6gj3SeH54MybNFLQKcMKS4mnbsSPTPJyRJZcegnk1qYCpzSPxWsU4xt199Rn",
  "key6": "2wxSWwXAX9dAcmiaZoqXxWnMnGefGUYWvQ3m4mNSZPMb8Y1xjzFFp8jdCqx6UuUKgou5dHmzXyiCngKGbuBhxH51",
  "key7": "yVLB4vAqvT78jK5rfb1WJ4WRxTRxTv39KWsPR5WBfDF2YQqYYUK4oerciSE5zzYcWMdZoD2LypWCYLK7A63idM6",
  "key8": "2FSkjQkALLn1q5iP3DT4upBByUcxTrFLf3r339toFF2DyBTz3UXvSsxodpVdSXwGHxPdsnsjT1FWQzdUibUi2M3G",
  "key9": "5Qv2PpgyA38bseHLegmonxKADc8JX17UTncryHGLgXuz6feoJiYoSFkPNjTYAP5XdedqXFz3XwQNXQaK3kBwuMEz",
  "key10": "57EhecP9XQbn9epU7kE1caRr4sy9LeuZjE1xWT3T9sah6goq6Si6f3Y7DgsgVertobfGnFt5NYUw2ts4cAHEUPbb",
  "key11": "4GpfRJYjVnKpHXgahNtDu6orpAoUSSfoe5GLfrgB2Ec7NrjybTSV984RW8ftAbv1tduoRK8Q4Hi7Wvrwzre9knrn",
  "key12": "32PHCVRs5yB2rBUkNHz42QffFXRZ4jbtADqe5WKCW8VmMsF1xt6hMbRFhtNAJJSoG2nhPqcYdvmiSQhTc77QP217",
  "key13": "X6z3UR71e7AVZqvNrGhPSmdZjB3UikA842u2TX21vdonDRrSHCzVVAVUk2YfrbMsEcRC4P5NaKC6vmN26xUSngU",
  "key14": "4xTFCTWqHgxAvEeQXmRsAhRPULeYymqUk6jL7ZQvpmoTvvFgPipRt5PdxNmSd3PrDnBhr8WQWsvjkWEdDqUGxhts",
  "key15": "2VbN55iPgSgBgnUibbSJQsrsSPZSwkgxqkNTj1fKgqbjiBXy4TfYD5egE5insUbWeDQqSSqB8r51GHLKr73arGmN",
  "key16": "5TEMxzS1rZfc3q9dskhxfrED7DB8gDjhqxv1zweWzeDvSEh4Bs3qVX7ofGu1UZtDwrrCjxUgRUBvWQosKWnHpxbB",
  "key17": "x8eAranW3nwA23qu4RRQ7UigMbBqCoiX6VfZ3bvEu88P6ojtJnQwZ6oKjBbkD6HnEH9pcyKsWbsnzcxio79KXfm",
  "key18": "4FqvbUtQ7y63KpUFQNH1Ad8BKvjzgkeeA1hENyPyDkWw4GyxbY1iTbATgE5aYoKQGLngZBYgVPTFywNGsJ5v9yqG",
  "key19": "4xrZ2kVjJF53capwAPfg3scrhT4mv7wGMidU1maMiF7DnvgfQGdZKfFucTtdNreBXW24AubEb5WoFMA5igDSZWPh",
  "key20": "3Kvd1Lk8Q8EV1FCToRvbLwiQQCAku9ZPZ2TSShocKDZqNNZmGm32f2q2AsT6tTVZpuvLhkeWnnUGWPRduz13HmpQ",
  "key21": "YuucTHdunb8dD3puXrReDNKG2LCtLU1cbxadE3RKnZ645A5jom4wsNgKPvWDUnXGEx37sZR3yRXpLnEMPfpdT4p",
  "key22": "5CBQajjngc6JET999PMEqV17Nwqid5ku4Pew9LDnQaZXeX2AvXfNRRzX4N7DHGgvZZtyTFN5nrf6v8V9P1iaaeic",
  "key23": "JZ29JAiLZ1ZH2zX4pq8hSBZ98abeXVm18rC23kc5dB2DgUaFDFMTo2MfrGyPLSTZDHuBE77ZBE5JNeWhk1ts9hX",
  "key24": "2zKiL5L7zwyPjEUhZ9RXf2bC7yPqGTfWi4KtS4anckjBD1Zh5C3qjk3RqBR3zzfMrKkqDHiYgcJtGeuALVTMRZG6",
  "key25": "iGKYr5omXfbyNDdFmhK89Ju5ADuvjhPuNNLqyFgUmztLBRAS69vsdAdcc2pJnec54SJj4yU2MivvhwwspRxCV8J",
  "key26": "5dhzZXfUSNLgyqiEKKHFgkDohAWeFfDJNrNKLsN77eu29sJt4fMsB4gWJrhbXJomWVziFoP4DKMAYjqeMoeHd38Z",
  "key27": "5WQnyfJbKePsTj3sEZkhVDVwykSwgyFAqYUmHWu9WNbd3ccHmGFvXMfBiNpMFB2gz4o1NLSq615F9ek1bHKyL2S",
  "key28": "39kb2W6UtoXAs3SZtDvVgaKWNEvgn1dVQv85g9Q2QsKaGmRLMbxEtJrz6T6sH6SXWprJebHEzENmFFMW4t1SmZVQ",
  "key29": "aXgHo3YRrEZLfN148Gtid9W3tm4d8Pb7atZHNCanaU9og4t1kbuXeA9V12uCQCqwuwP15nb8uqfT8HYbAu7iu6V",
  "key30": "3Co1ShVvUyLmqWz6YNbamzaKN4ygixBwKSLZ5xiubNfcE5DcS94VLiRjN3BR7u22fXsNiEqgjAF8RUMnrUD98keZ",
  "key31": "2WfTn3RqTBBhE2ra1pGDy6C98E52KJ2pwG42DHBoeTCwZYKGjXUZWyQ6m5RVn85w8h4izwthdfiPKFcBf88QvYZR",
  "key32": "4uk3kfABgUYnac8dun9emZxecYUmXmXjZfDoDZNYyydmRfipFPEG4XTnPJHpx6yLSb5poBp1Z475EsCDMunszuZv",
  "key33": "2nHooDxhh72m7s5k2uhW5VrnQ12FxcCZyqtV3A2wFxf85Z4e7sJ9jgPcRFQpLtvnq4ay9JJf1hPimekFGpdnJQjF",
  "key34": "5aSg94RojL7fbiELRWkJ8mrx1h4qpcmTuRAbhNS3zxoQ8UJCU1UZRgJjgoTsm57nem47gTRei1wE3ePfm88r3PMx",
  "key35": "4q9RsHySiFAyRcW87mqTuEvehnTkTaU1mnUyxwzSkcYQ6Yvd2PAzTdFeqVzQA6hd7AyStjbNBiyGaF29quccpC6F",
  "key36": "26kF42SzoDTVHKmGDN6xBwbkYqqC7x1Bjo6CYVRgFsDoBTjmC9Zij2VPMUZUdXLHkxEUQWfNtNT8xs3JP1ZXwkQ3",
  "key37": "42kc7aFsTecEQe6r6sjpBNeEumabAg8i3LVtdUHKVpFPMvzS9Hmz8Z61dJnMTcBfKt9BqNTSTwheU6qawDiW5VuB",
  "key38": "63UuFemXB9pQMgySnUzNy3QQaV7u63oKz1RT7FSPjZohqVQAvMuZP3xacHQp8kGjMAYVGCtgcgPbVSzifzFsG1Ue",
  "key39": "2Aonq9MsDUvLSHa4NCH5FGx24uJG4CNhLHpqfNHqSWUpCTZz6K7NzRf9ppGgMP22Yrk8QCRg8x8THTeb3Esk2wwr",
  "key40": "4sa6UyjhRPhrvFvFyupP2N5WDVuEH9PxK8aUTbv49EmvQFpHohs47ajoyoPr7J18haWYWMWw3WQwE4S5qHKSNd4i",
  "key41": "2BANGRobW457z3csCrQ8sS2o2Aj4F3TckLgjXbsFjnsgU56n4nMpNu6ew99YtvbMfLU2CKacoZBzZav6D4Tg1mG7",
  "key42": "D2ZV7JdUcG5VJMLMff2ixAXNm8htjtAe4uGXDtvZAUqWqL6bo7ohhELDr4ewxQcKDynsaJeMkQ2ZcjgPCpnHqJC",
  "key43": "2u7fWZNpQxhheNSz8GPgBeiXLEW3aLa5bgAxymyWdRo7q6dsy2g2JZY8tNjsNAi7s3ue2SRanbjvyyyYrGKgUT9r",
  "key44": "4dYKKtpUQd3LnrKmXbLPyNpbGynP2hSdxEpZLcwXeFecpBERzTgCQCxCVw8F21sX4zDDRzVRmyJBrmHw7X1TsQ45",
  "key45": "41qFCKp1xKg3uzxwJx49VycydkUdX3jxsnzK4y4xX9KKxn2KYouDestE6EYeTqAMfzEfHasKEyHdJrwE9sxPhMAS",
  "key46": "4qULxFF5XrZvH98yA96e5tbGapjcschkntriB2b1t2Lqkzj217TXYeGUo3WvAWE7JVrFWhvEpVhZ7YetN2vXdZU3"
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
