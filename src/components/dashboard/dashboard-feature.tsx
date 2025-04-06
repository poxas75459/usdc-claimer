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
    "5m59NuEmLDZFrK1AwoDHqhW8DmUvT3eDMMJtCMLK9b9Y5vQThV6p8iQtLAQsA57SBSmoZvxno6effBZQXKRJrZwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hmKXdZhtrsRXYyuA8Awwu9J63JCB7hrxUSmz3X6ZTk1tuQUvUDBRYHhPEvbAVQuSEuoYXGdxHJ89dW89KE2XB4",
  "key1": "2s74TGnqY27RpPj7uipgwwRfExHHX9KRTdsS7YJWGuk7LXMwnK57DYwthq6qauvUTZjm5ReTKKxfKFHzfww8K9fF",
  "key2": "LAhAow72jnhhH67BGcF1Krd1BwXU2uaNjui2aZBxJcFN5Dt6J64u936H3jhXTvYzeKdJ2LpGoMcekR1zqCad4FK",
  "key3": "2qE5frjBGN9SPUMx5ewXiwpPNZDsJGMdgD9GbMMe4A9LQ42jsZUyXmCi2JjEn76ewC4Jug1j7coDgVaGp1a7zWE6",
  "key4": "2bhMk7PxZ2yvhEUwyPcT5u7bmBhwgPRRGZNnkkeebLeUDoPcPZ7cFgo6MPkA7m1tQt4iG5cpVRsiGyhNAkZmcmnG",
  "key5": "3wp3tAqRcytCAtx9bpysfaEhgkum5pb8fyjukPsFLS9SvQXWkW6nK3kYZbdqpgQvPHypY6VtmqqoZ7PpuqWdjTkf",
  "key6": "4jTYrGFLc94JFfd6HGjLF1G7M1FfFxi5BQNPhc9GtZNUQuR6camxnX4wDun5KG7yr56fhwYW3Kar9D5M2xyD5inh",
  "key7": "oYUWA3efCNpZ5rQPyrpkiwL1vVbVeBFt9t51T5nFcAWVKBXjw7x8xBMVdWqsrJw5phFtYR45syXSowx6qbCDw8f",
  "key8": "2J6YBRPpZKyVK8rwKdFpb6mpRknonhGVLVnKogS8N2VRReTVKnGoqB7C1ZH1kyHMDWirs65F7GybXpwyUWEgfmGj",
  "key9": "eDdWeU7hniET84aoYeukqXZ7j64PYqT8TdL7rs4QMaY26GgpP9NwhvhMrFtRp2ujZwrENWmfsRACWP8zjfKTXjV",
  "key10": "3m3AKVSsL43dgcqexHQkWfJdp3e8mHRgC8CjJCocvLRGd8xXxRycKsuBDmiptr7Vzyg33p2s4UdNKVe9yT2fifBN",
  "key11": "51AwPpynfZAjYputu9d1betbWTti6g923xmivJdkdNmoKu2QB36131LCEpoHR3mTcqpeWvuot72WMdGNB2Dbq3ha",
  "key12": "37aC23pr4YWVoiiAtoE3Z69L64Q4VG3GaeEEbaiN7iNDhYB5y8jraQ1GnoQ2GqvSKi7i4D7CdChugY9CsK4w5x8J",
  "key13": "McsD17EXTq26cCr9dcGkxMxvEAQfKqScjbDs1vDRMt5UkqedbyEAN3hDAjp3qJVWRBd5CB9tJeJgfDuJLgY4hUg",
  "key14": "gjpApoa7v5s9jss8Xv7CawhRMPHxwhoqj3nrAbuKrLj7eNDtyfSYh2TuCZj6CjKf42C5QWwxnxYncT4Q2KbK8KY",
  "key15": "3aUAMtkVG4covdm3Rj4a8Xu9CZ8VKRv3PzHjnSedqtg1PLBvA9HfKszBNEeppc8Kd9oBP27CXeqFWnpwPaN4YSvD",
  "key16": "4fXHYmw5snfPqTx3Qym4pPQjPfi2XLPtjuyjGTgEPHdA6dDEJMLRtivmuJgnWf7wTBzLWyaymf2RC2Bqs7D1BjYG",
  "key17": "4hd7VtNUHVR28ck57ip8mrQx19rLNSiXAxRrXmUH3a8W91Y4YxDJTbVCPv25JULDYggXjGeqNmmrvD8gfNSBdpqf",
  "key18": "5xWchwXpoboh2moQFnWCU93RaH2KuVPwscdCvwbm2qxUc4TXhkP1xxx6UGTex8bgaNU3HiukHAEAQn2N4Pbw2Xm6",
  "key19": "4evoTmP5JhyEe28fJyQNA9vGonxBHQW6p38ncARNisRwsAaq32VyBYKizNybJEpMXDLepRfhhDC3YwoL1y12UkGB",
  "key20": "jfYrHKdcLLta422y2489VUZ1iE6GQtE74KH93nvCezzxZngiBjZRyDjtQGD3nKW8Y9zz6gHhoax6w77KNuSYtYs",
  "key21": "MGByaU11jQoDoiNo2VuJTURjrq2oqLhR9u6KRcnVfick6NMFwVCbbLi7eCg3sQyqiV8B2WkBteBLEF1i4WV12vu",
  "key22": "2zUXa7eNM7nVA2NVic4brwpuoAo7W9Trfen62k7vCbmZLytU8652DzABnUb7mMEbtHxY9LvHcYdpXy9xP6TXhj8",
  "key23": "3g26yvqW4dFLMs4MMRUDzEHARuz2tEVTERwVG2L3NDzR9Widtkmw2fXWNaLi6KgUw6My3waZ5199xZ2gBMJp6Epy",
  "key24": "2wku6ZnArYZdizkAQwsrfnfv1j9mRSnTeXA79i4PGUiaTJhXFu4PTNen4sVHJUqMFNVrhsLy6VGjyCihwejhEp8w",
  "key25": "Ek5TjyA1RoUceXahrLuSS9PZjeCk73Z3kedked4q9ZvgFzoP3QpH2jZ2RGwCvohFG9vaF5tnz1dpQTrNwGSBCe9",
  "key26": "2V7aCFV3aaaXJEAR1DT3KZCnmxYTGJ5PfmwnQZF8f36QczEpMEitXEz1oxwyAJPnAq3MfTRk74f4RK7faX8CkxSe",
  "key27": "4YKwgc7F12h3kgejD6kWpwmr2XcCcx9WBqJcKw6ouqLk7Uf8xbabATjZsZmL5nm2hTY8WDgohyE4iyUq3ZbPvdX4",
  "key28": "5Lwr2EZhEqanSseJZAToh1aPTodNxH7dy3f8tEwRBmH3M9J2dJfnPgXj3Uxg3ChYUULJUamQjSYBxipeF8kE5wUH",
  "key29": "3Hj1VKqCW2RidqeExcG88WanLUPHijmKKJkq7ses14ZqRZ5Z21YGkf7CcHrH75X899Q9kAeZodEBoNYUi3dWCyJZ",
  "key30": "gyxrRVJ16Z4NgZi2ZGbsmKhbsoz3MckvutpAza5g5hnVeWCmnELBJkx6gBPaJQ6gXTKQr6Gxt9ucu3qme74B2SC",
  "key31": "PZ2fCJZm8uvDoqQX1Gio4pmmr5KYpdMdWy2WtBDpLRQENM45XPQET69SCqEsTx6C2RHctnzH3FAMiAB8YZuav7d",
  "key32": "5ctf4V7SjPRSSSpwXCjis6zXZEvzMxqVoVYyW9MbMU7syYU8av1G56UJevrzZGUujbssvNd2DmoVJFcf7vmfmK1b",
  "key33": "51yhmwUPSjddUxxLMES15W2eiQFmTBCgnzFo71orHPvr87Nu5Lqz4TA9Cpm98rEGzynk9GkFvx9nTD71nwEkedmg",
  "key34": "4kcrYR52LCvEK6b9pRGJygusWKR9E4umKp4WwGzB5qvMAciP6gejDbgKqfySbVGyrQbiGQDhf387LWXuETsAAaH4",
  "key35": "JoazvaB9uqRqKfhZnXdod1ckVFhRfRYKgHZDWbnMSY2jnzrTCwU5WxFrSLAo5ppejteWvi93NgcwpeCnN1fr5wU"
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
