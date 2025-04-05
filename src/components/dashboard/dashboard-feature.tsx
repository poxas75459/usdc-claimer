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
    "iyLcByZyHaNP9ToEiprQtFt7TMhRN5nSdMB5y2PSiacNhw1A73a3xLG6tjfosUT2cp6AtJ329NAjXNqps8dMeT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c16uNBimbZpygFMEvSpn8bgFWmWtD66Fsx1YUnT18K31ndVzoCuXzEmPx58z3F4VWALGw9R6ariLGMiaUiBPjqh",
  "key1": "5zemznPjoPjXdRaD1xxJd2bXYmuBCM97nSJiQNFYgPbLmrcNvcmxiquC4HHQAPLt1D9hGJbAmjcvi6isjxZ514h9",
  "key2": "4UMo8xWu6qQK2egSmFtKZSwbmYDZW3EvQmswUNQ4s7sW4jtLYsfPqnw97peZ8XA2bk3B6KYyrZAJ2hbSCPC2aq35",
  "key3": "5YvKT687xyG8MoZZNhxj79HBn3tyeCK3np3awLLQEsAeU6cAocWFasXHN2U5fTgE8AVdMyzTF9RAm28o9hfkiFQd",
  "key4": "5AFWgtr3H1eCQn9LMJwgmwd2cuTHhdQotcw8AXA9RXLGtPjRPkFsaWjJH72jTsTYwu3VwrEKyxSCBz5Kw6ZhHT4L",
  "key5": "52DZLoGaDqjp4AkgBUnSaiEJyh3EYsXRLJHJVsF52sH4JivgFPhGpwcusZgERUSTGQSQaheJx8pk8Uc16qLaTN2c",
  "key6": "oDsSbKkmM9BcC2k1LiqVjUpP7vMa9wAXcJBHA5mMCK5J4khpKcjrDjoGBk7XTqqSxJggJojg6o5ATHSmXmFiSaw",
  "key7": "66fzKktmpFBTiW8Hd5A8gGg8TnGV1C6iTvieoHiQ8SLsvSoLuraEVfLXo3jMtuVuuR5jnkJ6DeFF1HTgWWhyxB7w",
  "key8": "3jZ5kqGLPrRETrDCCiMkBk9783n1bkXvbZAZFMowyA49tKggZJYvynU5cEZwKUrptHcCB2bZyuKPEWdgbcraMBte",
  "key9": "5crS53YEfffVv2GEKPs6uVpzhfD5mN6MF1HFgkDH4gEnF6V4CuJTNRcAeNEJLEM2fVehx7XZMrqj3ky9NFzWiHxX",
  "key10": "46EJFg6qcZwzayEncEc4q3byDm3S7b1KAxSNkyjDvfKFVzxqfMjDMFGB2orE3tNmYxc2p1iZbsa5La5x4WPYsEgQ",
  "key11": "5sUxgWNaBCQGy5XbyK4Hezeyjq3BumzcwtuTgo8nNUMjwXd72PPH3pjws49rBBjsCKjUDiamkzW8FKa83bJe3sTS",
  "key12": "5ypRZgusvod3uukHtYivmJRzPJeDAfmxxSoUzfycwVyozSizgzfeQppAkDESQsHLaJAWa9w1UPvBz6A4JuS9HWQz",
  "key13": "nKJRArFDVTtaUDFnjHiJ5f1d1vvWVMm9CBmfGoQFNQ2zxKV2xZ4orkwDeSUncLtjnzthFPxHdKnqVPbgm6Nt1va",
  "key14": "2tr2yJCaa6EmqZhZGMUAsgG5epEVkxCqozoKE8qNFswvMRcivYHtPsaWhjQ4NmfntPGnjvnkS9e5SmdJozo3EokW",
  "key15": "4MTMMMwrZi2FrHxnT1fCFLnwFxN6BjBXygtsRkEjHNNGDABKgQMHFZiBXMkzrC6WuZJvjboWJjQzgdL2Dhj3dFyL",
  "key16": "63pHhMvS2bYgM8TaxpzxCg19vLMSTFLVZ2Je9mQjs8qqszxFH6tCmT3o4jMF7vEKZfK9pt6aSyuVNLhLw1NvxMmA",
  "key17": "3MMCF7A7G5PFfYaTg92ECBQeUwRJD3y6K7in9uuNEaMNgfmMWCKMDpH1eR3nfAftq2w2Y6SWJH4BkccT99nZHbpz",
  "key18": "4MgEqUMwDVhsikSTreBXkTqpRza2RydpNTWJ7qDtdL2pRx6TzGDvoPhdc1Z4VDShTZnQsyfE3eNKUhiJ6PRdjuRG",
  "key19": "5kZUiFeq3V4YSJfemNmrPw5ZymwUVZHHMQ2ESKho7ear2SpDg4HNcPHR42hoFW8ktGkiJZLS8k27k5RChwyGyUCG",
  "key20": "iFGZY4YWJYypBRjbrQpvEzBvxSg3Qh6se3ECzi3hByzCPgfCBycnmUKFnffR6d9T9UYCJXW6u2AAsSGzyohKusK",
  "key21": "hMZbX6eGH3ebXGyYLzR6dBAuh92TYwnMJ6xvB73SqX4tscqYEgqDvK9tDLE9TpUpLz1KF5g71JBPYCTRZAXuaS8",
  "key22": "Ab6cAudW2VG8bPWEEFKDm9VZTEXrqZuCX9efg6zP4DxnP2DA4DWHNNXhVzhogPohEPv2jkKYyqfnugwYQyU8d7X",
  "key23": "51DfY3LAXHv79Kc44HckHbjddrbKwctGidw6cnYpbYb6jw5LwiyN3KenK9ULWrWKh97o7YYvoAEqvywxW1Lgn5ba",
  "key24": "4DTTM74KuscLgX245FLVcYn33JTTpMkYry9SyKEiGWPGR6tTdrSuuFA9fEDo8ny2K4381pQUNZMsUDVQF9DM1N3X",
  "key25": "4z9LQRdJtTVBcN3Q4ttsxEcmoBSQ92XaDnoFUTbCFz3mZ59KbYqfKzr3inE5TJryUmQzXTRjuGFmaGGHjesDcb3W",
  "key26": "56jZTm6vzNpABPHmeq1pzwVk9L2Ff1SfCfKKCE77t6hnU2ZBea3ESGRXHeSn7VRfHuDLWUUfSwvJgjAxKE3yxen5",
  "key27": "2ez6B32ghdiMVyoQnLeoxNW1r73MrWH255GY8xXYBiqsthryDq5ZAPXb1reDeG1VvDkubWnCGCbA3DEKwDYRfHWL",
  "key28": "3wSAfmBJoQGhqzqefhPX9wsVUQcSCqqbohzZZa8S5EPMZJLi18SnM2CrKpwkYFWdeb9kPtb9HA7sk5MfzRQZYxfN",
  "key29": "64PVNKX6bF79K8cR3tGpDy3h7LLgB1D4LWARAvP6FcFMFM7Xd22XkUQnH4nk9WsAuavb4KfF6gdpD2oGZ9B9VLxB",
  "key30": "uPFEx8Q9cN21ER9HHQKUca28Xrb63NPXDfMN4edwBtHzNqy523gUckbk1pJfTxFmDjpdup1EcPc9iSn97YmeW4W",
  "key31": "4fajGEaPaYdtKweDkJktGqY3MYeRdSuSzPREgqFrwLdT47xU35ijodk4gaPBk6hfFxy2k8wZL89F5We4Yw7snqqP",
  "key32": "2o3PSvCELaVCwiPz6u2z5sFNcZ8dkxjtkL45Npv4y3cbxDpBrz856gkdqTvVbwxxi5iwZASffMxRqL3s2haiQbVL",
  "key33": "679PmBjTPSAAuwjyQeDduHscW4zGqGCc9waE8x3r2841inkfE8zSfXrdZPAcxhYeNtEyeeDYdJi93ZHNcJKNzdqG",
  "key34": "6ndTPCkGcMRvXqQQHM6ryZjxBTu68hV5YaGFsxVw7H5Qs3ttKsWUMcLi8M56kFezozXYFKSVrcJZ1r3J5YaZqAM",
  "key35": "5cFkRUkdkJSMPsWw4BXEipRQdvjaetm21TR2QCbKfufuW1DYgmKU67Aduf9VoXzAFQBthA5XP5c2osvx7Fc6cLmY",
  "key36": "58QwAmNgtjhoTCEpXMYRoNVphQY3TDxQjqzDe2jzKfm8sGtuB6Su1VnMTXYFbC59ucVwrVN85ZGHMrTNTAojypmA",
  "key37": "DWQQsmuq8WWkXqussJEXZCWFDBKirekcAjZKx5xfRbT5t3VX8ondux2GBXamNUUKciZ86F636QkVATnxzBeZhP4",
  "key38": "3gTKNLyKkkuG7Gdhpju8jZpmRS8ntd4959aaT2JUTQcMAsDNZKf7V1jqiAkeHAvLByEPjima5NHADwnj1gMtjfcy",
  "key39": "2Xc6EaLNfboLxck12G6e6LM7rehaA1iyvAHGH4NfNNXyXrFaaaaEefvyAdwkSkb3TD4CrfK5ZNL3VBZYi9R9qBfh",
  "key40": "4FRUkpnHR47axNhuF2AC4spmE7hePTmKCDBrMQ2rcCPNJSM1mX3bgnHwVdFXLPgsBf7peeYojedn8CJESoxnpBdv",
  "key41": "yAbp94hxHRf5fcfFKZt2gNGvW8Smt9ZacgYyC13kqPuyEYyTTbsPSZBMD1heV65XTaao8DncnHkVm7ch71UFzbC",
  "key42": "5BWsww1uBcmg5dsQpxnUsJtaJQqDpLrQtsAjxEYRivNfs2morZzs7wwbzvbLWAg3ETa4qp5s7Lq1Vk3wnhjtUDcx",
  "key43": "2Xyt3nVKb5jojrnYDK38d8vFfXRSgmMoGZswTdLFESvA5tNsfeKN6tGM1xYLjEAgCcpxRyvXEA1AGZKhbzuYd5cP",
  "key44": "3v9mfqWoMcAbdfGuYCCHLxyFoi2q54o6dG7N7zz3GXEqKp2Xtdx5FM7c5wsJSuuKJJhgF8EJeDm4BJwLu8CCm1dZ",
  "key45": "5xN3UQcAm1RwjmgNJNTQudRwpu4La2Q8LBXvC8bRMb6CSBNDJu9pmre6mbMEh6TTsYGNepprTZKF4tzaGLeeNNhy",
  "key46": "b6j9F3RCgdYmV8zpVWN4eJUU6up3pPrDiFwTvefnyDE8WJBrYgq7xcHZXkfBNZJ1fFANdT3SZUcRQcV6kZ738tf"
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
