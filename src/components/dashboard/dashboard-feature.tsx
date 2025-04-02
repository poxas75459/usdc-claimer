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
    "2cQHVvh7YUq3sxQidtVTkcQz8qHqUZzK2DtMWG5kBzGcdgZLHDGZB2VHaVud9M83rZ5LT1qFSfLah1u32WmqYa81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hYvr2oSyQ3ACL2Z4eoxjzUuK3QXXE1BwaEaXiiJf7jbrvS7MMpk2UkkMs9xhfh1jN9ZycyxHSCsS4znUxceeeqL",
  "key1": "2nFxYcQWTpLb4vWF1TJtivnpMBhhXeZT5vAxrogNFu5Qsau68DocCcph91rML7ArcY4BbJFeHf79D41aKg3cXM54",
  "key2": "2QScDYkG1MqMfi97GGai7FJGH5JAzButKjAbuth6KgvaAkESzvMNjnhLb8gRwk3Hr9Fg8eHQkNm7BoPbaJfUKDCd",
  "key3": "5gxWiNdFhyxZWy97VqYk88ffbJGX4s1EwwezouCNQGKcPuk5cgHsMPeizZsBvevJCEctWQFMzoVMMWMVhSyCQQzr",
  "key4": "2bSLaGZBZUD4qr2hWpXuA9FrrU2YP8c3NirjCaAytqGGoVLSn69JgHPPUkCJax1smXY7ovPJMX5NpmKTaD6Xkt2h",
  "key5": "3E9Y6ynP3J6JJ8zSJqyWqwcJSQMuFVRHN1nty7LnQFzDJySnWHenaRbCsfdksoadHYsFxoFYE9HTufhttkEbyMx1",
  "key6": "ADJPs7MMGNrtwFjtxQSh2txmpH51sgixVgSGKbbh8uaLoeFCFT9WDvaiUHr6FNhTzVjGsSoqQAFhCSBnSwzCdX6",
  "key7": "4PNpz6sQUTFsDvd6pN2e6Uu2DWWMJ66takA7eMqqS1qR1tfbXghHBGKDRDAbt9KNiqfqTsuGGSJ7UqBAAiuAfkWS",
  "key8": "3CE4BCyZndLqcF4tMPMHXrFGYhDYheRr1wKtFTRUXi48uWUsnmsLWEJ7v2C1wJZD8ZoXkypU6R185c8pJJRPwgF8",
  "key9": "5tEQhDpfrrE1GawFFTAEhZyEUtGj2a3vP9n9u1cFjvck3xMq1HwGT5awCFBWhZ6mdMxyE2yvL53pB4ioLNY3bCt4",
  "key10": "5PFHRAQXmbK2EaREwJNE9dYEtmeuFRNLkAa7Qz9m3jC8UQ2Z3pZHqLW8XiYT8MZDfZk42ySdLGGZEnsW85DGyozV",
  "key11": "3H6CZvjo2WjFdz6vccHFncc1idhog2nhggSnCcdRvDycDSj8jnGXmNby4DGBKgk7fEfDhiMaBYX4Z7RcACT8LkgR",
  "key12": "5zLpcW6xcgotcrsKyEZXoxn9Vk5KU1MJmmmWTTLFYnkpyxWkQRPgDuoRjYq5gXnNFDjvYvuhCtAXttqcmxLN7PAc",
  "key13": "2NdJhytFJL46f2P5yZvo1yyRAimUis7nW2cVgeDn6fM9oSvqL15qUixdXsMeZcLMSa52gSfuyDVkrMnEpuvtssFb",
  "key14": "4HbB8fauQKQKWuVossWqCzd58yaCwocGpDEPCAa6XUgxop6mhjbdBhLrGFpu15H9GMdu9ASkryUaVykS1p6jvdyY",
  "key15": "3Ba93emNLPssN8mm1fCbWyUfpzaeHnVGW4mJ8nY7sUW4YxJnDXn1uRUqLDyPXaqg98iaVs499nk53R92t7c4iZju",
  "key16": "2x6SkQsBBeG3rxDJ4eAPjRe1G3U6pyyBAqaVbqK3jaiMcuuNkWopScdSFTJuAHC2FpaUMuDKqkcAmefQYpGjrrFZ",
  "key17": "2yFpLtAvNn5BonDYKjDBKbKph7br16j2y1ykrE3d35bTk1WhGdbWSE1EWE7Ja2HSvThG19jeEekb7DbSLtMUeTFo",
  "key18": "55oFcc3sLQK4JEgnfXRTqVYCaXHShTCExxZ3tX269DphFR84sr391ZVjDao54khcjkLBf87Qbhcu9RmXHCA3Knof",
  "key19": "4WPUVoSXco3s65gAsvRTN9CzYMknQU2bFeVqNBCSMvFuwCR86ymTt9DhmgZr6aFPRRTduVQqgiBC62iY6xzNfTdW",
  "key20": "54Bfpzb5vN2PKD4bHRW1LKZZcWi659mtrLwcNa8KAGnyizWKktsszQnj2tcVfpDVudkdetuzKcTQ6PhdEt9z7JHD",
  "key21": "5GcENmZsurGbNgFZvreJSaU1NLVAJh6RnmoRtuVFjw8zJvLVakpafWzfiMeaDMorXWkhnYE6yEmm1REVtC8zWtr7",
  "key22": "5oyZmvW99bPv3gKnnxzgZUR1eCVaYSokEuC2RNqY5MgBeeRQgA1JruUQ6hBYE99Vp73RBwbRf6SmWDu1R7EeSprR",
  "key23": "3fP8e48jxn8ncxeSC6GA9hFVtrS2TSW6ip9TTSLKNNd2v7ynaiKGbG82jFHHuw6Tp24AcwhJt41TMLgCARUr7KYT",
  "key24": "2iJ2MW98zgLvymNMnXAfgBxhLjvgbM6FKvpYNFyBiyFr3SGwAZgC5a4pYeciEDpGRfjF2YwKSpGq36GBVhCGuE3A",
  "key25": "3TarJe39SWPDRNnBewFxQHUwPVrGwUVfsXmcTy5XDz397M6cddkxueDc8k8bkGmgTi79gvsj44NNtJAqWXyPRVuW",
  "key26": "5HYuDCs7cXp3dm77cdxp3N87msjFsotmPpG8Y3f3AZSXgmCyfacF3rNEpEg57LQXMNT5ZCJ5BN3NRzGKCiEeuP75",
  "key27": "29pEGKvbE8hUHJ6NWTGrumFPHQzqmz4W7yuCbHpHBKK3pN9sjRDfJKBvLxtZnuuVXj5bUB7DWb5eX3zsdjBKdayJ",
  "key28": "5bFZcTes2NYi5ufkZTE5QyRMn9YjcfSbBtM374yffHxf7ZVHfCAJbtEcwcKyMxnwSKh8HWMKxAXgYtKS1X8QvLfD",
  "key29": "47BNecQQF34uB1wNmV2gLSoAVqzCZJy5adRvRXA8PpYCFdyPkWFjRgXCaKqX37EcLsTrxB8MK8U8xEVK89KGER1S",
  "key30": "26kuWoyqupausxmj1ncKoA1a39S6i1JucYvusYx5ysaSUKjhp8FaAgz9hzvzYAxoQfPnDXxqJSgr2A7KjmmEsEh8",
  "key31": "4NiyykF2BCfxYyCV3Jd8D2dskNiCPYWSDYcMBzAPSd15HMMu444onKiegd8g2A6BrHMnPvzMoADFjdPuBsMTV9BY",
  "key32": "3iDW3QneVe1C7qRcS7DZrPPHhB42wrWMb3Dv5e7yoXiqaguknhDqxurToQP9KkGUxpXoF2ebjJp17eK9k62uS7Wj",
  "key33": "cedamUjtKvqegQCqaXTjEsDHNCCaJhS1opu57wuY5vttM65sDsB5hWamvdc8LR28LyUqLZgeYBwZbBVo7XNz2A5",
  "key34": "4T51M1i3LeLttJnTuZEFFR4xaurxwKLAek8AAmaHAVQzsFMaDzPzFvHZX9er1SDVnKV5JQCerfp2SfoHiQnEC2C5",
  "key35": "DA3pqoBzW2YrXwNoG2jKjQPCkEtzhifjnwZ5bThMrUKgLx7YSMg8H2NojXtCJPU416a39dwRoAzYhGVa4i5iGNE",
  "key36": "4y2kZmFrzL93RUadbHBgCEaN4pjvRJCVPAZfB4bMS48a14RjMkGDpTsqWWQvqgYp4TmPcgP89gr4hNYumoVYgafU",
  "key37": "2ghzoogFj41rBRebkF1WMC65Ag9wPWFBzwXhpHu2wzYNmQFitdaZSPdQtHdzFoBMt5Y8ZUPXGsx9gMvHT8ojQwoR",
  "key38": "2GXDCo6tmi5ZeC7d4dScGuhEs2YcBbrYd4EJQh6PxjiHrcXVH5JPZeAUxBoUmdhxZ1XjVyME9aaeMgk3PKBBcz5L",
  "key39": "2brKyyzyXqJiyA1VqywJj1J4EK2v1Z3owzSTWeBzrwdNo9J93DPj82dYkrZTZ6naJQNBELywPf6cDwkmhsNuE5fm",
  "key40": "3EF1DqJuDFWhbX3oRCcm68FEmtaMpgv2iRWGzQt8XtkcYVSD78p1urYjtQxtosGJrzBQwFHi9usEyZzCMuTuQCVa",
  "key41": "4F86UPuJwYdUqjLJNWmUtkbQ3CNVs3LVZoEdVEckqHqixhJnB2qHuanwS3zvXybv1fU5XH2Tr3X1QgdKmxqP8Rqm",
  "key42": "c3bYKdpAU2NCgnaXC8LChVRRotZeWRcFK9jtKep36BsPa5ALeY5wigpoLArkB7i4JDuHzDttriGeKBYcPFf6ZxC",
  "key43": "5268dMWHXoqfg11R8v4Xbovz2ztyuVChoxB6wixaGnBpMxeEGkfwQAnG3CkC3scpcNXJQnPTrkUSXgd9XUFwfHKp",
  "key44": "YXiZvdpJxCxpyeZM6N9Lt8B977euBtPh3c1yXnHgitRESdtHJp3gokAjx3SPHrdSTNfaEQ75Z6F9jVPkF529Wwx",
  "key45": "51fkQUUEtNUKnrV7vD5YFGUAzm7sjJMMojg5LeWFNLzsADuBa8jqhvktZY9gxXxLxTk2h4gGUvF4HunWEUr54TDP",
  "key46": "551tHn2gTSTEJtB7DPsvwqaxDE6fYRZ1Zf8egMUXiPznEaZDEfPU4r68KSUUJWz3h4P1A7w2mNrqvJn5ux4R69TL",
  "key47": "2MrFEdYCYqzidf8T7ZsNiNdJAcJxL92cobNVwcm1Cgk2SUZQKGtAwC76QpmWtrnGNUAaYn3FqdG7xkW9ZgPeT3Uj",
  "key48": "2fYqLpxZApejpJWe9zpwZcRatGyu5FERg6bqpxGBFcx6ZrWyAiP53TVrXyb4yoa1CHapDN9JsZ9X6feztX3g4cch"
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
