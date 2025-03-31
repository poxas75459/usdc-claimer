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
    "2Z37rfTKJbTsRa9euyRqhtKBq2VQxZMfzEdUpQcNN85MpNB8Cnjsdfbrx69Zx9UtanFL9Ds6sRvCkHWF4jLPM49W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qUXVV84aa1xqHFYJHbUvNh56bnzuWKNJudERWfdH38kSaXVAL1VhTwnUFKPthMBeUXqVVSZ6LRK2wVQEbzrNJLg",
  "key1": "23zzwpNjDt9RWzPsQQh1ntJjyGJtDkzUrvgi7kNb9YQcxnMz9bFCprXBJ4ozLMNm3TgHfJaL16eeo5b5YBSE4t2x",
  "key2": "sVUEni1huVMKe8kH582xdwzXXsHBQmhDUf1PgtVcSBBNPduhrcAU8P7bBbRFRvyaGf1uJLQQvJXpW3U2a5wFhFy",
  "key3": "3thGC2BSJRQd1PLd8PE5bCFHcbZajzwBqNeJLFvWhtmm61p9L5kAya3QD65d9GjHbeMmjtAnFyzKSDXzrXecNEJy",
  "key4": "ksodHZNqspTCsfgJARawEfLu24wFNFz4EZc3qrDrk6e5zzSTAGPTYVmdobjMbGEZ7XKcL62YFgLkvu7YVjT7TMw",
  "key5": "5XyLp4k6DqvkcMHuHJdu3T1RPrQxy2q1wMx67NCqW1Uhb45s7XfUVmfyQeTjr8T7jf4GfMYd2RSFubPPMnWzSXCN",
  "key6": "bxFp9fJKuFAuzts7KybVaSwfZyV7D3ekS7FCTFkPm8WvN5an5mwvUmrZCTbX5GpctVYxsfvfvXNdgGBgZBz7QBV",
  "key7": "avm2Dv8BKMS6B2iFTF9fiDB2nK9TUVKFXVhKREJy7FC1KdX6MTfGfvB9Sn5uXrkQjDaiAXdAtVn3F5VNdok2hSk",
  "key8": "3KER2fTDkcKcAHnj4p6wwb6cXKve3NthGiWf41Hb983942SokiKHB7cgnFfhb99wkcwyrqmaNY4NikouoxLSt3bs",
  "key9": "jskooe6uLfQepJaP1RgDToSYV8vZLAxUY23AiQ2VXoTrRfTfzPKpjw5Nr2xpVBrygR9UFU6pH58RqwEPKSJo473",
  "key10": "37h9meAdxk9XtH39qawdnJandyVhzYdQ8uQnukqkLMPVVNJMtxKbQ2z5tX1LYkeKnARr3E3WKmmKKvckYiBkinun",
  "key11": "4oBLysapWko47mS6jRWYmUxZNKCBbzWUCQp7BPVkXjc4uGHqHbwLTTMaJuoZXMsH4eZhmuGHbTPAeeWCw8fwa15i",
  "key12": "44sXcSHcdoz9R9RLR1DyFP3V7s6aSyP8YAk7xJZhaSzK3ojFgr36fESzpnCbR6StGhjM1UWXu1ybwfjWVcn6Gw2P",
  "key13": "3WswrwTM7j9Jf99tnUb5ySd2rQgqqqAe2ikZh21PFsmCh6kuAwprPennhY3fsbuHKBFMBMD2qQnKhqXHVkMBcyuT",
  "key14": "62UvyrrVXNLP27BJBTtd9e8XX9BiwZfhQyhz1u9sS2chYjJLVDkwvCG32MD2yGrfkEZguUYf5AZzdWy42LTFzE8T",
  "key15": "53PtuGbsmbGSXhvapYitMvENVU29Lu38UdxyRERMYZXGqrVuaZq8Lc5y9bBa7kxb82xqQbLMRosrT7va5T7dk3xX",
  "key16": "43arWSPqgRUVcWuSM5d5PTpA5QXQSgCv9kvAjzUmDSPEBjnAXMKPsaJ3uuCrmvjgiKQDeArmQZQFjJ7SPPokvrKr",
  "key17": "4yNSecqAyR7oNRA34yan5teHkshWt5ynEruNx7UhoKSP8uDbd5V8zSbNhyapzZZxLmLSxSn2TtYQbaECGWvDP1Y8",
  "key18": "4NQkcTqSrUs95ymt8ZfM6oowUqujteHt5CF1wJcEevnbLrCg3Ww6i43DobovKKJUwZKihQbqRzW63ftR7ZEKRa9Y",
  "key19": "5CjmuwFQzfRRx2UccT8whcZ68QFf1U81S1NMsWg7JG3R21e83hz3VnAZX84LsvYJTXXFa59N6KLK3CV76qPitMKP",
  "key20": "3A8ntR2DAppBhopiVSM1prx6a4SbLohZrU3Dio34vMPR3cNtet6Pm28mHo1w13R45dvUHTsuaGPuPANNRyL9pDGm",
  "key21": "HcKnH5zvFSVgmxS1TXSNYt2jd21p1ThPAAtJ4LLqbxgur9GTYDzdZh6anUZiVSdUvD3tTUktG2u43y7JSfnpdHQ",
  "key22": "23qLixEXf4gxWYNxxtWf6exgCjPWGVUjWfMnW7kxofcYBwRjM8go2We1uC2TUkHhkUAVHN1bmkXkjMygFNRdHbLT",
  "key23": "4uAYstQd4zRsrNmfH7yd7Gy3eCv3ziGs5zgLNpX8ZRZAKU3tf7fpHyDHugDkvUh2xxChAN6kqPcTukhP6NunGcF8",
  "key24": "59RzV2LYBztjh9ZXBrtqcvWZrBA61xCGMeYCYEeypcVd88L6CFrRhNcsP9ZtdyWDfJpdVSuyt7tUYAN8BMDmDQSk",
  "key25": "3ycX3VD6AK7ndNxLsf4dGYd79FPVMyXZNphVpRefnAmbDrsfCujGWUs5mEpn7sdYaGqFbUDM7z3FKGrhGrX8V2RY",
  "key26": "qChyBkjNz4UcWorDCgzweVuPyXRAX3ep9iNq6F7pK5VtUJMVjxTCY9gbs5notwiu9dqCZ41Z4FuK6wGQg1wTCUp",
  "key27": "3a2H9s8nioB9rVBFBTNcDmi21twm9xBmix7kqozMcGHvXjf3neczbxdwBpSEiPQz3rHqnrogZ5tc469XnfWqEsJ3",
  "key28": "2pcErzZ5BzysbBo5rA1jL6TWPLiG5vU7Rck98HTNNvD3SXBwVT3gBJ4GbePNQUBAFDDgKg33rLfyHV9AddQU7NRK",
  "key29": "48U95TZ1d2aLLj5V1WGrNW9mptqVSJTNn1wxb4YfJPJZV5JuNoAd5BHsNjUiNLKV9fzPSV3z6ckmpNdNFe6BqYRW",
  "key30": "34ALpbHHTQguNtxaQBJr1sVSweox1xGjX2MPupiLfy7cGWVijg9i5RoUbzw6EqpmiLh4urk57NPN5HDPnbEwXZRh",
  "key31": "36C9JQbkAg67SmfSVZQiqJuDbSepwXwcbWqM3qYjTtGDzuWXnQyJ28BoUpcE8JfvJwzL5xEQHv5RvsDXmMBfRV5U",
  "key32": "3AokSiKugTcjTNzPfXM2rFMtaxNMUtg58EBrYgmtdRBrtiUon689HL6Ed92zAMUyrBua3wtqX8amgEDSnfq7i17Z",
  "key33": "3ieYqKMLTo16Lm7vLDa3MuRDnF9HzT7Y3jBdxxtcxZbh1pXWdrc1NqVYxpmizVEWUwvb7ZHVgRvXG8k9VuoaSDP9",
  "key34": "cwBBpAQvKUrMQxeLTLYCQHZhf3eX9ci3RBk9ac11s2mecCHqDyfnqzsrey1uPwb4BiRSq1EDyegJSW5uycL4SS5",
  "key35": "2eSCAY9RnsJhBQ3ahnKq8HH8DPSsJUtnMf363HjsLgdReyCJ72PUdRxXtm6VWa3BC1zMpkmF4KgfMyPevqffVJGV",
  "key36": "Q9svc46pEjJAA2jQ5on1HtntziiU6zA7fgqXjz4gQzUwqZLTUT2o4oDXV8PBz4F5ND9vQ56queszPeJJTr3g2sd",
  "key37": "2Hynco9SVz3XgLFLpHtrP3fq1ztU8p4FgcGLeS5B12RXn9yHppNehsrgw848bimStcFCCrzBCsjgraSz7rQXJ43c",
  "key38": "67nzzMfKVYEzVN9ZjLNS5dHPuTtrxhEnyobttuS6jQM2repfeSccx9izu5v4PvKKahA9rdUKsJ9cG2eXCeKvNAS2",
  "key39": "2DrBjp9RRBimS3KCjyRqKyftNgNdiC5KbDxTq9LucfPaHJUiSnsC2q27dUE2qBBhaTTPyKYud3Ujod5WEuer4F1i",
  "key40": "3e6xvXWNNNftDMnfCAGt83XvF1Yp48Dda5Ab8BJSJ4ZcDyJNNvNjcQXiQMQJ18Qo4xZBdUj9x8kid7xrzFiEm7WQ",
  "key41": "p1eibd21JxpKaxMR89MLikgFr545Wr959KpZyUSc7wuyD4yzrwSjAMmGuEME6M52jUQyc97rjXtL1347498tHX9",
  "key42": "5kxQsC1MdcM7kzEBhJiV7JVJYKrd3ncGjM1TQB5317kKagKZCWhe4ukueLr7PWDR4ca1Nxwb5TGtPN2LH4XfN327",
  "key43": "4t98uALSfcRz7R7SaYAKRtu1Kn4rGyd79vXgxDczEpjJoK5TkRR8wRmuADL7o5R7ToQgJFMtoPtmmwFUBSaD1ajH",
  "key44": "4ayxYPZQtiNr5ABm3Ww5aUKuTV7hULFLmFNkqWq1xPjMYAe9J9Bz9rJxAG3YuYNezFwDnSyo2AYN3GDP4zUP11F",
  "key45": "4gjQffFKAEXfFqFcz9qu6ko6u51mAkhW4TmdHeBsNAcy9GMsTpdYKxCk8MhZv1wMdHCgkGXLYQjdu6k113LP3ipz",
  "key46": "4DjnsYjmurCpNQvbJB9HR2wgvU6m176VrCZL1NjSCNU22NdVTgbeAKRjsZq85uaDNHGYQatLS56Aw8QWDQ7hGty2",
  "key47": "26N6DLzxhyLKzAAZZbiJvtxcNVgWcQJYmaNUfreSjnoisHpnNh2VYpaBHnp5arUKP9Ns8XCY7f2TEDuhS7ai7syk",
  "key48": "2iCewvyh6HkWcquYXi6SE6TeBWC7Pse2sRF4DiQ8aq72DVBJWsDHLW7myg9uE2tzt3R5hPnKQsJSwyuE4iDR6E7k"
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
