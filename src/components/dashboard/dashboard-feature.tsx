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
    "4FsWxuUuDtka3P3hRYBKur1AJPLZLs5PnUxJRA74VUSpTCRVPPB6FSbEaAn1nMNdwkWu6KUFQijbj6epuyFCY3au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21cJ7S65NptddsMJiWqfhR5YP59zhCs1zYfcFvpsQBgs1MfpsYUv9BejbWcLfk8fBkvZK2tQehcWBqhcdoiMruUe",
  "key1": "5tZqJ2W9LUJ5C2Dm1MPuCMpSFJutyQRNKro43v996qHhiePNm1cadGap3igMgKgQZKUecS5yhW4H8tKync9Dj5sW",
  "key2": "5bGgxW3aTcdrP9MnYbMk3RKhGNCjWLBCTrFN5fpkP3EeWo7vHHbGtD5KypeVqKk6j7KvPn9ecuKaxN6WXuRsS7bW",
  "key3": "5TCgdPLtz3RiJXiQKQzHVPtpEXfBoNRYwjbznG1h2EqtHkwYc5RaMTgttzgc6ERSjj1shM9eLRmVN8o23CzudpCH",
  "key4": "3pYr68Qkm4CHHpzr7H8iKj6gqxm3snogCyeUzjerFmzTvTmaWnJgHXwXVLagfyTvLVHL3BxAqov6HpUxgkEtH5JQ",
  "key5": "2Ee5xNVvVipnCJhQkCQnygiEWJ9xk9QicevDUpmL2pt2RtxzLVFRigviP8a11UodAZCcEDXD7Ho2Ehv9USmgqhwX",
  "key6": "47omS24Bz2MpUKipTyaFdsPYDhob3kSqXCxL2WfF8H4eqmeNt6DCrGPMHuWsZ2pe69LEhwYEPstArFSK2rBgmrPa",
  "key7": "37hjw63r7pUFnUdsvivvXyLtL1CUDoBikRDApaoRwE89wWXtVn8ZWAUGrHYav5WzfhuatfQNog8G86kwpykAc8Ko",
  "key8": "5FSf8NW9otgSerTMKAzJAKw4KQ4QtJrHT8Bi3ffC7Qa85FvftiTk7w5RgFs3s8HJ3uQu3br9VKUitA7SzC4Ex98D",
  "key9": "56GpzqqwoeW6mdJRuYA4YpMmrunP6kAJsoPc9ovFNBKKAt5857MbzFZ2wKjyy1kPrqXyRSXzHvpKZaTsUfoJqVmP",
  "key10": "a7YE4uAaMaN5czQgmnErVNu6r5vZDc6ESNQe1noKdorByX27Dx9Y46JGdeQFyGbjtUeSPWQhdMW1aWYX2vg8Rbg",
  "key11": "5AUxb6qYFM29mPcsYEoAJnCh482sxRCwWdzNHkSSgH5wuXYLiSm3JsQNUY1YGBhqBVuHHNEWo3JxaHL7KPFG672w",
  "key12": "3kCg2yyRMkTDy8eyGfk5qANmjPd213pHmg7ZyzgJXjjWjQFgGGZigoW8tfxctRPVw2hANdSQBeb6co6cVZHkHPSD",
  "key13": "4xdmrcv7d1s83mz51gowVp3WXKxt736p5L8g8pAo1zFqfGGw2uAvGSZWm9Vd8Wb4N4qqfZ719duLG6zVcKuCMh33",
  "key14": "5QcHs2u2scc7kXkUFVMUAaMRocfp5QXwmpyqJGYuXndkT1RxKpY5e5k4dQMgNAm51TBEGR8Y4zpZ3zFVnmQm4Chg",
  "key15": "5WmPS7ovZJL226jDj76n3sRtjs3hvc6ZBShJEqe3CcLXorwAPULg3GveLCjp3Xv1wthF8tZQ6p1dsYEtXEJmm1fi",
  "key16": "21U27Vx4qBrcvUSEx9UhsxhM695a6hrrWnNJXDAr5Rxe1LLXrSLMspeW5dFuK7i3Sp4RScPJtJEUnaCeoWmP8tJT",
  "key17": "NLjaMFq1zbWQB91F1rKzsimRB4yGeRFiMzXPsGGUsm6ek41LSh9ya7PHEajkYAWEquziUAouxVyLYUx79pknSur",
  "key18": "5t4bBU395LLxybkz5JjWBfEu7t51C4GkDNeTGhAuo9aZwxoTyRCgcjnrwhcMLSANjw1V3JBESgxKuZAEpETeyGVd",
  "key19": "4sGXTUF6fj3jJwPnkynDgh8fSE89aMJUr2zSFaUH6BuRWSuoDyFCB8xquc8CTJXJ9eXHhrr3ULfFEjy4ujDQewVi",
  "key20": "4tDuCaEhRSj3Vkjz8r7BKz8xpP8uMQ7HbTkPzvBJcJELzeiFvnrdKCchHLpKEaTxS34K7pb1y48gNHgXQp3CXvtA",
  "key21": "63225Z4wBWfhs2d5GpP7ghzws4Dkgg4d7u37sm2P7rRt74uZ2qCMVPUiAXv66hvKUh91KckFNA9ppDwPEn86QFYK",
  "key22": "ed993cbQoLax1wjSwon5y7LvQcL3YvMmBczZ4XvEzEQYMdr6hjXFvVcmqVxLR2WELQ9YqdAegsYyQvZg3n2Rnqm",
  "key23": "2Wg2w7mLbadSrMn81kGKBmvdv2KjBWWNkgJXSsm1h8RcdyoKoNRjht6SfhSQFJiqP47BSNyKEqdyP3tVN8RMpGXJ",
  "key24": "5haDoLMkhGRGmyeLpoHdhGbYmd7ZgdVqePCCxqQKWFCu3D6AqfpWwCUih7w4Qr7pACFbJAeTBwc3t978TyffsbU7",
  "key25": "4e6YWW6jCAcrTxkZayhjGEZsdeqjgFt6NPudAU3PUieLy6St8LPzyHF3v5hfaL3fa4dnuQYjSJyeso5zhzRpdkJh",
  "key26": "5rGZ39QCNj3P9pJYv8TreixuAcHEq7rSWWU3HKSdY2VuiTgRWtWfs975CaMKaAFNymdfcqj7QRpHFizViqubSdEp",
  "key27": "3ScRmeU5xrNxK2r1NhFANpzfepvNtpttibt82Q3wwu63WAQEpnrhvzp9nDFFD6zmFsQoRaCP9SGY7jPN9nfquuZ1",
  "key28": "344xFAxyie6tBrNJviSUTqV8QKsmd7gEmgGGAtGUVei6JkmS5K8aQSGnihQBet5JhVymuntkaxrUjDVVR3FkUGYQ",
  "key29": "3vSm8tzPKVWsjtwECXNsogPLYpgowgt1Rb4S6Jk7JNNgKCUWuhN4nbkVg99hUvythE1w6Z7TfUHyLQHanVo1DQ4n",
  "key30": "3jfojpSWPR7pwyegZFa2fdvUFMNxEmsUMG1HQ8iCK5M4UNmid7ZNwG5CUuLjbLt4mdxhxb6JGhsGCDtXtvjytDNQ",
  "key31": "5WmHbVJM1rQd1QML399UiE6pRcNepEoDifErS1kASvw6iJsNzquWb9ubtrNFPHe6JqZsmeainMJVw9eUwcoDk5sG",
  "key32": "2HJqXYrgtLKiHmFGfr6JYqps528aQ4wUh3WeXhDogGxwwDGzEcCU3sr3aJGBU2miBt23gvZxkZSgobeg79Z9Ngfe",
  "key33": "25M2awJHEDG8eRdXji32k5kDXYW2xY7a5g95cZ77u7FmkEFUBRv7nkDwVXnYU33sQ2bWcm1WVAPre4akvGMNKDLG",
  "key34": "2MqKMP9dPQLV9qtuVUyjxuq7dQXQoq8FC1xv4FPFUL4UcT1Cj2Mxhd7LPwD9UkiWL8MP8gft8ND6tz1DL6jxLKUX",
  "key35": "2r1umGMdxKcLdFj9D4P3T1arMRUonetqte9enymcDo9zCeZmfvhY2ZAfA7J4uSvSJudBbuy1PfUYPhSVEYLPtPHq",
  "key36": "LSL1L8k37xkdmua83oyU27F9RywfXHXQLMtSdGjp9qUxYp86mbyn1WUC9z6WfqZ8cvhpiuX1H6R1YkZSspT65Yt",
  "key37": "2U4HQYT9C1weRVuD4Qe8eexxRtD61FN4kZH15GE5vBGeBf98q7JKf4a8ViyDSKY5QSjLqABBqFb8vhTzTjcH92W5"
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
