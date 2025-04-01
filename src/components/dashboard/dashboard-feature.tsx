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
    "5r6n6HUiZ99wWvPxsKxeJyhn5MAXYeyBUJTBt8Rmw8GScGMsLmE72Xb7sNZfKY5niB7F9Cz3oEvjAt5B7VqHa39p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27MfeKDakaS7uLrUJCctny81LWWiMYPn6YFZi5r2EcQYk8AGZuThBt5D7n9QVfEwmtuCc4NNcdArJaAoiVykqoqc",
  "key1": "5HAF6VNxybWQxz8XYjQ98mJFSKEoAtkAsgKV5c8UUBgAaBYw452tyXkPXUoB8rcwgekgjwJtLFvYYaK9m4RwfZrR",
  "key2": "3LUZmeRfExPNNuA7iaTELwVfDrP8XVGPsNaSiox6yNbaynU7wNrnuroXeESYQoXG17C4NYNBL6aqNYoSmyrBKhFr",
  "key3": "3rUvxRKS9sKhVaywtgQjVnsJDAxsLN7ijSP3wjg4ijf8JwC4GgYPvaxXiDMgGbgTGoXgXkS6mxDPQvcB3V3SAXzC",
  "key4": "3gGW1Cm5GoQLsEcmJWxgV54tfGvK32ah41CrR65nmHbSSvb3dTLXczPy9L56xXCMUY4nGVgPEmjXwXZpW99573Tr",
  "key5": "4dREW2g9Xy9AF2xUihatavy6ttJzkRr1LXCjRPLxrKvKjUH6uPQsUWN6Ta7Cw9phdWphGkqS6sXsruc3KRQVmZ97",
  "key6": "28NFbmjP7ivyvYbnNerTKprbifbRyBGjZWibEXMShT6Z6PkDDgSWPU1HZ3hFcRAAU6DrmH72DSbDoAyN4mJ6JYhk",
  "key7": "26xCeue6cPHzkxz74zrH3p3rqv3REgXENZNC9uPAZJHHBmxmVe1y4YUXc1ZGZtWxiXxqAxxdNM6JkmuQ7HwydgXs",
  "key8": "5YRhLxeGD7FwBXEf7cAoHFcvxkYvX2iCfF8ZiZjVHt5kTiWqDtRTXh4S9aXUyskidx6SmkD2tZYS8aGYGAqtobCT",
  "key9": "5tWCcurRFNSJ6kXpWCQk9KqndRURMBFgnXme7HEgkmBSrfdANj63FTD4VnSAWnFWwKhz8oyngQsn12pG8nVmej28",
  "key10": "5yM3VWbaSSATzxgQwvKCra8qr4K3CYc6PqAwR29Xv582mDcptCEZsJjboVJCN3rxvLb1yc3t38ZFcYkeKG9pASxk",
  "key11": "4bZpKGnz7FPLNBq1MKEWtM6s2w2tkKEgewNptL5nzz19MvXdVHQrrPLAN3rAY88uWDWRQV9kkjJC8paCmMDbpsqV",
  "key12": "K95DAVuKVYouizY4saFq7bxvT7pbH1Xrp2je35GZV2u3wm7ih9aSCTQQ6UKVSQR7fjHiLAp3vPff3SEHSgXWTKv",
  "key13": "5Q8LYVd7P5SRZhpcGms2DKfrcr8g8p8GPgeDwMfnQ7dsThntNcgFdwfKAo7ZVnsT26g4NgimRaSptSeyEiByRWo6",
  "key14": "2FZ27NUqbyNXL6VV5qWHocRvYfiHXoKfMLCCvJGQAAC6r97XmrriXeHgaeetBV3dWBB3cxUSXRj8wBDkXFQqcbCp",
  "key15": "64BUqDDic5gEYZKupjAvjFHQpktypdhgnHJoRsw8DDfznNQ2NzetyARHs9zm9kkCrFD31q4rPwP7tfkqWxfELNu7",
  "key16": "JcHCMhucuQKXEuWznnxPuFTL46LWV8nwjinfS3jwRVQXoNWXigpU2CC8JcMwcuosRFGuKqkmQscWmymXKb8hJRb",
  "key17": "4EHhsZdQCgV1ihGjjcCw6omAVZZKd5m7oC4EhyK73JVp3rcGTDryBkjuxDYpUJc3B8pKrSZFYBk9aSx5hQweWjsC",
  "key18": "62vskYk8N3QAuk9MLgQh1wNLwMJho7jTyHpVMhgG6pEr15UshEy2zenXf62uPoQVbgvJiLWoHv5qQ2xiVMkmDvMR",
  "key19": "4JQQ9uGFbGsaUwNJ3cr5u7Y6GwVZp4dD2g2zMqUdde6HGX3zBRarPJY2akvW7o2WHcf9hQi5YyZDn3Yc2eZgL5P1",
  "key20": "3KdDM4uFCKJ1xuSpLdNuqHVL3vJ93XJgjACjTtboAZEY3abaYfovb2K6SKrGb76vJWQ12npvvQcRFeFkB8RW2Fyp",
  "key21": "2aBr8zCcMNSwkGFHmjX1xADcs3m8DQcA73QFqztJqTv4WNEyvpDiTjR2nk89DkvbkanYqqC3rUSkB88fwjQi2dPt",
  "key22": "5v7pizyw2M6F498c1frjhByUxTjmRjsVc9sPjTcfFvWzQjR7gWHvVEE9qPKYERS1X8gQtBVTx8arm6ewD9y5cCDD",
  "key23": "3a3gux9t3fHxC98bP8VctYqo2eBC6vJ7UpYeLGjGpp5U9PgF1j9B9ajmbZC8tH7Un4b2ih6ahwEiU5jd4dpWrXng",
  "key24": "3pKCh8k1ag8Pk5gmjMpCcfLjLP8cHPzfwWxq4ArHXHMHYjPw2LYcwmUW2GB2wp2qZCxEGYWKuA145fionDKcYRx6",
  "key25": "2kevTxV1SyruRXk1t2L8PNLwge5CyqcUFqMkgV85rodXQiDWfwimRJHdTmZQQEuThpE3zjd6qMvjJcq2T8DPiLP7",
  "key26": "2FLP9ZWZzVJC4jigch9CL2uNZMcuP9vo9mhsrbbbfM2NxEPhZbyyrFj8kHAXgcxzP1WMbA6Y1rDnQ2X2ewkotF35",
  "key27": "44RJUXzBXBnErdDQPHBkDGSH2FeRc96S5uqo3PzQFBZSMxNB225hSL8RDxBYNndPSkh4Cmr3CT58oS26ujhZNukP",
  "key28": "5XCD2bGnLvcKr6suu41CyygXCuAMfvUk774bAGmLKCXg7dtAobdKxyg9sNmFN6sftrtVKFvFW6XrwojPBzx7sp8H",
  "key29": "65dxBH4T2bYitxtdynoV5m7J1iYSUYdxnyfsXB1tDvE9Tgu3nZC3Q92sd5cHMbUKg1AgFgqGqZJrjonSLTchz3gc",
  "key30": "32f56yXFoVL93ZZaKYKztY51fUG54bjJp1ELcqMiRW4rxYVDHop9KSQEhexNPWZ7sEWmRg3sszH5nuV9aSP6riF7",
  "key31": "5MBiEjiovq52LPPABBhyHqwQAqWgpRmkUQEfwnvEzfA9Xs6ZgVpNCQQzDtgfgR2w44KQjeYzutZYJY7q9LvNo37d",
  "key32": "2zPiMFTEG9skhoERXgESQsu1BJHhiEYj94xmgFvianizx5J13TKF61887VinzbZs1Jwihf6tpEwPq4xXzG6q1qaX",
  "key33": "JZUQJqf6dxuXPbiK9LMBwnvDF9AGdZMqGUaBVw1zcWsR9igBaELAsJrxMGstwzf155zJKYbkX97w43FU2NkEr5R",
  "key34": "9yWt3hnoLig46cD7agFkAVLmiMcKoMdTdKHnK4C6m5b9NAbPp7vvemZJXodxb38xErBeGHZ5nsGWCht9Fu6DUpM",
  "key35": "jkYJjmonAg1rDTwp8mTU1Wy9xUSk3aDrsoK4SCpJi82WktqfGtMnkUVicEUAB8bGSZeXpTrfiTE6MvgwbR6mYQ2",
  "key36": "2bDRextZqDdSFiZmML5WMrfBa67qaStkK57Q8y3AFs77qD96eBGjG9bJ89aTmuw6Yt5vwAj3iDoK5TLFcZKbSRzH",
  "key37": "2gtfcqTupN8h8z4WWF29WLT4nXVt2TyUGVXnYWHVp15XdfyT4pMDopqALi3wsUm3zKVfam95CpugBC3SMubEZAtX",
  "key38": "2hXnSxefu2qdq6VbtDLvrtaYbjVcitD79DPrAv3LL7MiQmAFmpmqmepBMt3dFw4JeQ7k5fNKbU2irDZuRXjLyrUh",
  "key39": "2x7KdVSMQiUxTux2rxo6wUiNrPQShHqkpLCeXb4JGNUprATfBfynDKLvfHp5p3wbFPwkSnWCRasAW3rdDJ69MYtD",
  "key40": "45ALQezrpvifB9EqvyCRSM1s4Z3mihFBXNUTGJvLeFscMMReo6sKFz1Fx6McpM3WBDiyDnzd9HXwARAXvf7dq7f",
  "key41": "58Tt5syxQy4BHcPfJQ55mRG5eZrHGQkDXREVYzBEhRUceskgRtsGMGhHzG2hndxGvM3rHrUgHKQzso6tD7pQFaWb",
  "key42": "3U41L1GzWoh29DXQg4vyqHeTLasYQsMTYKG9ZDX7cAUz4AfwxnacoW5RA5mNsEAwrfTnTNf3mUnzSJfPvR79SBLW",
  "key43": "kST36quA2nckA6sScZkcHYXR6LeWjGo51vEnsdF9EVhBthgE48KSYAfTa1GHenfnydb4cjurKugCtPA5WryQrwj",
  "key44": "h2JJ1RFcTFhGWRTsWvDihx529qmeX8RuxbPvxVWG4BB7BA3HzZG14P2fLxD9eW5BoGx4Zy91cBwcjseE2dGbD15",
  "key45": "3zQYFQoYXUVWdhjQhT8KyYKFx8w2GYpCgtZLRdDwYyeiXJZs5a28JngJ2PL1FXnCpT6edciakCcMSATFvHL63UGa"
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
