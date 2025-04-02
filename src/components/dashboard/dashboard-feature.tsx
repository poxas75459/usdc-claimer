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
    "5AGaUWWgP6LY2mc6GPv9vxuP5wPqxuzwBYK5xmZTJwMp4NWHKrgGKT5hAY2byisP5JgReiywbg1M2tApkUNAHYF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dUZBkS1yyLD4epmqPQGsSf1iySkW6Xnt5pZaWCvwMLUh9jiq9ET3qA9KjNtzjKb3AQogp7sDUgpvjwxoxXMHqLf",
  "key1": "4NTdYk8tWCUJEWF58Z3dXjpk1UneTqoh4DDzjyGfVN2749rAztmtC1chxnykE1Hk1d7SBL4a3g1dvq3pPaSLGHz8",
  "key2": "64YS5nSTqxyxwkg6iz6dFFCMxvmpBJLuDrmKVSNRj7icW3Yspw6yfHHrjJnskuKR5ZPBqcRDpRe2N1KWqWDSJFE6",
  "key3": "4TPXHdP65EySgWfxLR55tmsQ6TbaLm5KsdLyLrwCS5sWnYS9ntxANrSVHMGMzvubJwJPXGVca7HsUDQhEg1raHNk",
  "key4": "PHjXaUr9tZuW9T1AVuuMKojSf6CeTbPwi97aLcX5XUm9peGaz5xoHrZFQDgJoNQ2g5GcH7sPnLtnAGnMQ8j33fL",
  "key5": "4qmytrkJJvjuP1HUiyvS46C1ezf4DbYdj62PJUnGkhSFtZtSmZfR2R3BviwRUQhiCJAsjozrHTuSzAkLsWWu4hEF",
  "key6": "2Vh9t2icSHNKiR2Wzbb3tn5iJ8mF6y1qRVx3ZCHASDsZVh1M325JqdPnHxXFR5VB2p3fSVkPKSRt8j4ZdgH84aSV",
  "key7": "5HUg2fnbtiUcrn1EsfVTctNvCBYDcuZPSHKgjAZqBWHufKpR4M6TbARgdFuLfJ79bF9RsfUwubzKMVGR9zcQzmrs",
  "key8": "2QnrYFBgdt4HTguVzUdBb9pgmkdxdMj6FSA13thTfdJDEaHoPeYeex3jtJ44JUxk4rZ1RBBy2LRr3hxXYDYrNjCk",
  "key9": "5oXv9bxL9wa6JT35i1t5u7ubHhPxRCQepz4yC8fXUyZs843YCYPYxqMzjgEKPFCDU63n4TvR37ht577saXND61UK",
  "key10": "TrYnSY5LA5bDf5xZDNAzJnq2E5VD3Cwej4tFzqwfiGgCbTrKv2b2mgivfjrbL3m6B6f33BeDGAkzPgYB8hXecDd",
  "key11": "2yXSP8jeXFBVt7599aqoafS2QZHHgMQ1Xww9QSJLh4i8wwyDV4Ht3FrpzBw2ZYDHbprZeLwhGdqtQoi6A2xgdJi5",
  "key12": "xu8cj4yG6ieyqskaauSQrMcFT4LEPgquSDjxWv54zKq9iMs7199f7VxrEM5rmMDSWJErUQPuew6iTWQ8F2QapFS",
  "key13": "F82gxUwrwgQ3Gsu7kn6MsgikxHUoJ5rgK8SgeJZrYGLcVMhCiiCwHCso3UwRFThUiRkBNSdvkMLkYsFthsuZcgG",
  "key14": "46CUwjimNYJrVusiS6z6X6HcDtnX2KPixN8oBJdTWPUsgTe8BNYBTdjswLjhHaT6F7o5wuRicTzzqHun1F1czTJ",
  "key15": "4TN4qBdqwmZQLXdSiX11VaEzrRbfiQ7aQGpRrfZra24DHf5fcz3LhwyyTU1YQymRrbKsxFpmaYjZiZnxkC4FksQu",
  "key16": "4SQX5RGV6YHhe9r4frUkVPkUKarNTbv12Sb99zSwKbKB66FmperbSDJMuPawgpefgFCeELyMMFNBiqaq7HXy1zH7",
  "key17": "5M1jSmDYGzjtxbe47jtTAXBhDAN38d6U8U4azJbdWkzGSxcpqWhD8WwETgHR18DKSisRiHn9eNit9ttRk7ZxkBu1",
  "key18": "2vEgSYxgHH2YYUknvTrTWfrPocA8xtATNoCiQZfpmmEHkPkeSZNEdQKU4zrYwF7f9Mtcw2DDFZiMWyrJhSm1Rmvg",
  "key19": "2TqpmbaM4EWbumAHN2V5AMtzWmg8YVTgrfatL2QqGRiCgAWQcvMohygWJhBa9VM8SU4LXf1Ee5RubB9Ej84dYfjP",
  "key20": "3E5NcTH2KzkBqj53z76aX2PpDhY64iunqEMrgWBxoNvdNGksWvfz1bxviMaWhEtP9EDJiKdkh1HVPBmKGgoVwEW2",
  "key21": "2nefKT77nVZVw5ztBiQ3EcLk8H3AWayYM33HgiZHPZe9v5xjjcKsmVaHoK7VRxKuc1TghUxZZBSp1tk9r5vTZVQi",
  "key22": "3vP9Fp7kodjv915FRMFDkFiihuxU2bdQSSTtpXaLFd79aWRpBQAGaeH4HvuY47Rei8FzsYuRvT1bxrk1EiB1XnhF",
  "key23": "a9NgBKkJmKpTgZCZJ8wpZtiQynwp62TiZkVERc79t18vVPpDjmRT76Jqog1CZPewgSbvpJwo1dCKQBPTWzzVCPr",
  "key24": "xCuaJkeHzXiuYNdooxt51mwe6hoR85xDtqQpQb69sb8rxK8n4cMUgr9jPyGevwQXgw1gFVWSgLXXYuUJRRyJsYf",
  "key25": "3XEdDQAvSgeAHCTPn6tj3KMSeUSyiPR93HVCXzFsugWX2RxZxZSFbJyB4cHTq9mt3NEvPLqBMQZvM2buwP2RQbyK",
  "key26": "4od69gTiTqcRGHfqwv9Ls7UaV4WZzEjj6M5jpmESVhucrD8ty34LWNMZt2ze8eXyanKJe64Ug8abQZ6UKBfPxfj4",
  "key27": "3ACtcbcz4jnyxFa1DThKYrUXrDGWvpNNgZnkcvUhKny7EuLcRs2Tkt9Mcg2iE5sxkfkovNmSLN47eQ26MKLXi7Ve",
  "key28": "5FFmiGExAdn89n613HtWxE7nmiymHX5SXHxgUNuzd9ETWqmuxbQDp1YG9wgezZqRdCJfcETtjHHctfUy8LhSfyh",
  "key29": "5QcVkh9xnusDtVjgJnvCegaQsXHGMD7BwwDwJ5NeZTkZQPPqobmrAuSYgfoE4Z23G7pjPRN5q41kVBszoeyeV2Dy",
  "key30": "51LWdq9p3GgJGjS4EV6jouUAYnLgbtu7TAHs6VRcFYm8eyHoGsSpPCGz1PhwaD48kVdkrs3sRk4k5BJD6LCMXGUa",
  "key31": "4s9dpZwLoP1aBP59MvuiT3Qrmx715C43SaaVyQQNgnqvSFJCJ9yAn8mXnABDQqLFAHoHj5gcFWPZZ2xmjsyNGRM5",
  "key32": "4S6idZT3hHjsKXPdBMsPkJ4KhbPbBnpCNYKvQFn51ng63fooP8rRu7J8M3e2WEMPFUBaCycv4G3tqNKYns8NyhVA",
  "key33": "4zoPLhHswuTiK5hesKQ4byUP5PyciPLWS6QAhavakdDNsYayxw66CZdPcDvADDuxV8DKXxg84rKk3gaiAvEjdwP6",
  "key34": "4LkVw616B6WWrtxCeqYY2DZftQ2yPkUX9zjzHaFViQvsx4kdWanYa6xRRKaF5WgVHUVtQmR8ZGezeJLjbN4PVU85",
  "key35": "mvTUpkDgyu5eLUY2yXBAse1Ea2BxGikDwKr6SAG5BqQAXfii6V9XuHTHy8qGUp4HrGZV4KQ3R6LztWFAmrSUAon",
  "key36": "4B1ZrXT2r6nQ3M5p1v1qvPgHRsxuqMeJUqiwYKSVrgWM3KofzZPDsTqY9stRN6b6j3Pk3UGyNGQ31FXvns9PRPZr",
  "key37": "55Th2fs1uCgMmimQ8E8Vnubr5KwxUcxudmUxnfyC36LL8UrTEoZswfBcWok8v5XJ7Mif4trwvsmET2yzaVgqQbRm",
  "key38": "22Utqk9erMabGXbcPKU51bbaP5JUo2uAwop25yy8FeNCY4LCTcW4iff4KgALwYbN51t9qZdEQYnqi6dyfdLd78fQ",
  "key39": "5aNxMnaaJ6JtsFy6qsAfGYsBj3wZeyEsSzVzAv8hTyaAnj41MCtXdsz8nNg6uTTqyaVJHQQj73WgBzZXTuvgYJpD",
  "key40": "4agXFz52PMTzwGLuZ9tSpqVzsZLxJnr28BHX4kmZCjZ9soX95xvQKmuJibBNUkgd1jmWo7nmavw426ZSN3hkMXUC",
  "key41": "3TCeATzVMsUXyEMnU7ycPEgVxWEtksB5nabGW4v18ZXCWN7Ur6oTwLJq4cv9361CH8J5ZZaM4Z2nYVFGjittVLwc",
  "key42": "4TTbaEDKpcU4PmQsaTLDvUNf12skiWw2Wka6kHfe84rUCwNFpFpH3jJQfCThhX5rmsMZYDpeA1UnQ6iqNdFVcDuR",
  "key43": "3JKymAkTLwSvavnyP6VQaqcF7DzSLAyvJUBYhxjtY5yyyHeN1cStej6Dg4R9DdRTsEaxctpj34tjhvWWyztAVowC"
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
