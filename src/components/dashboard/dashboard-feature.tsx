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
    "3qBAZvqFjggBtxWVGDQ6gtLuWb8Ke448WP8848MyaJR5NdhRwraHkM9EbGDyopEHARvR2miYUAVufPcSRLUaEmor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4joLXXiWSLm3aCDWCusqPwWAxnrxxirDVmsF1TtXUUWWDNTErSjhGkkyY7BdYtN1DZ9ykxwX4ktB78G2GrX45JF4",
  "key1": "2UThFqEcVa8r9KFbTMWfZ8rWSkuUbVUmaiay52Bq4uFmH9RWJnpGiM9fbzUPc6iqcT83trqqoAm5CrbFtFdwreWu",
  "key2": "2dZhpZftcypggNhKz6GwS3VseR7x8VnjLDHC229TLrQjcmDDCb53dXqqgbVZXPXQFfk8ijVzkb2FDBjkoaN37CCQ",
  "key3": "2SzXQEtSnwe7NkSTPqKMaGoYtdQMF6Jn1whz1aor18yeyDYXLjKwtD9pGhAkdNX6n6JyT2HrcWMsshwE7P8fFrgX",
  "key4": "3fwbvhTiFirwcqVquwUyzTUhXd5jVMepsuXpspNUnmueoGt34dV3C5a85orT775u2ZdBTjsY1mxzR3wxxzbERFnZ",
  "key5": "4dtNzX2EMhwS3q7tr6HreucZSwivoNZF9PLQtkpb6Tco5716RGXA4h5tg54fm1Aua4nEZactghZDUTfkdPm3F2GH",
  "key6": "4HbJrkgCCy1t7wUp3WyWQhKwCtjybLsHHJXHJ4ivYdmPN8XSbJyroCarXqEFaNeiMSXo2ToxkeLiUzBaymQgPrq",
  "key7": "5DSsvoFpNjC4fQA8h4kvLFSwKdoiEQyQhkBcqkTFyN9JEiSbNd6ucvcJBNbwZgrQSEnDcMUeAkHSa2Gp9cps3zQk",
  "key8": "4oacetaiS9c4GrRSSLVSSUesEA7Ehk1esDCjs115xeayWM9MStLbtWCx6baipwYP5aHTKk8pUpoNvP9Mkscux9FN",
  "key9": "5ukUx8ZF4pyiieq9X64qbDjyomsyf3vV1UeDuzKoLdHXMb7xbvWERCEhk3oipTUnFmLY6U5Br2WLgidNNypQW4SL",
  "key10": "XZcX6t213BD2zagduWQhctaYuvhmhM345iaq7VHMCXej49voXuy5wfYQesLRifuRwczGH3Vpvgt6fu9CLXEBkqb",
  "key11": "3VeWadJ8StfsefBySka3MxiNDiq1uvznesgePFQBAVHsDmHhaytwxG9bch8cB7XmyfgtPxRAw8SJT2CB4Kv2tBYX",
  "key12": "2Wby7tHi84SonXTx8oksS4SYnB1Ad8qepbRSmc6rCmA5naE5f1THLKEtmhejXeq1Bic44xYuUZSQzfLYiRLTeRG9",
  "key13": "fQTpNXHHPp4WTJRjhGhiB946JtvZdecUewGbs5Jrg7yDtYR2h41LUhja1vefkcZxRHBbvuRkzzTb4NkPzfiRP96",
  "key14": "5A1KbceRT8N5bCAGE7GdByMTXjyxfLqp8csWEgAyR3JFUyB85zAXMndww3bBaFzd5FZbbphwGjbL7mwGfwhmWEi3",
  "key15": "i3Ns5PduFNFYCFmRXEUxs8FDj3VGHXpQo1DeqAuTmhbATnKAdHJBVd4aL3awPRdr8T3VadXpmYsGw7VMgdgK1tH",
  "key16": "D6TnnXo6YGrgoibgpKvENS3isCJs2ywAue7uLmdkFDt4nSv4RQVQabZs9tqppZGHoSpLrvS92SxoLE5gUZJzNCC",
  "key17": "4vFWvNZTawVsvJs19CEpmkw3dokD3HYiFXhFvXuKHvHXMDJEfW3ALuHt4nheBisCFwvkwc49mzjNKSjZDDwwo7kw",
  "key18": "3hV6iVmDVXrz6vr1CM3M6dzrw2vne3Nb2jYa49pdxcWChRqgAzbbgVrQifATht1eRoji46r91JLYMVH5HXnZ5s5r",
  "key19": "54EebDsGZLfeKJCHdZb1TDr3HeBbW2X8FMWkjJb34muJokCYiv3BrSm1m9k8uXGbzMfSRbWLHkGR2CAiM2gh3ozR",
  "key20": "4mUknwMawX9Ukd8j7yF46qZL35hWpLpgyKy95U9tixxyt7RJZoW6EyC3Rvc3Vo6fThyTzoD94Hu4fgsMLmBSxGu1",
  "key21": "3jSDvx1NxC1TuFM8abkntiNoNvz4K7aKBSwpU27AU8cQ5X2S5Q7TU8p2UM9VsNMbdS8DHkESfNrrSSd9uNvwoARf",
  "key22": "31XqT9PyZPQJ1pbCy2rQ86s2ENkB4QUEatAWGCZtcbUTcxXWes4Y8XaKJPdxkPN5hLYeGQUKMzWfSCEKHWCEwMX9",
  "key23": "SVYwydCnUzrDEnkAtonjwdSCSAZw5na9Rz68tE5PPEZky43ktq8jDMeYf7wPt6zVQTy63WiUmhDAnkdsHvfZdCe",
  "key24": "6YS7quMVAE7axFiJiC1Hv6JhbcfJQ9uYLHpQURWuWMmn5sZMB9wz5UtNmGQAHv8htgZjrtNz17YGaqQt7T2tFmo",
  "key25": "4vVA3oo2YGBjtK71vvWxTzpKdWqg61UecKLPM4igBcbSgiSSQgymXPh5Xoofq6PzuokPE8SpyM3iUWJANEDCyDMA",
  "key26": "5gtUzNqEydtsaQaRWNWbKjdrhmNxCxS5h8DjroQ8QuvdacJUtUKdLRvKM2z7V8jFcevopoQMzMEZQtzsJxCXmDoM",
  "key27": "4CcnVWwFNyS39ioZBQUpQxc7GBcZVxpQCca1Y8RX6cyNLe5PCziD9VfRfGzj6qqbmcyXF6eVvn28ykhqckRZoA2u",
  "key28": "2ohnerNSMr2DpgkaHJpdAeYZceM88JFppgtKN9SSWzugLNa53zgQG2kjmMGqc1VHJ8et1R7PV5gkk62ZuaBibarx",
  "key29": "4xppreg3go4sVVeUWoPUbrFBRJ7kKFgJTarnnoP98uyomZQ2Kp8VngabxUrkvRxQwQHxkMB3BfbGG8KSpQMhb4Se",
  "key30": "2QmYd9GVD76WWF3WXJm3C3WeA2BHvCjuypK1nbA63YExjFJ1T3uZpT8dFKFot8dCsAc8GaKRJUrDBZikh392ojTJ",
  "key31": "64YoGsgNwcNBPBZtDZRk8pCDgnWhubZyya1h9FZrQEwZdqad26CKQjAFDabmz35aHyZbkzDQVrHto5tknsHXSGZF",
  "key32": "65VSbgdvgPMAeJGQbRq3rRiR9q644o49pGzgsK7pxGGK29jh4RRg254WHiguBD4sQcUE5XocPeSyWmqg2btdogUH",
  "key33": "2YXsiTuAf2xiAoQLzQMScg3z6sscv1HLGgeAy9Y6bij7wBorY3VVwWXHFK8YJxNy7bev4Uz6uLKFWUiPEeKoTNd5",
  "key34": "4TNKriJZuRD72HN8bERdV8zNP5V237x5EDJpVLqrnh44ieZnyN1Nw7TVqQCBKDaS2BZqhdEM9joTMu6LxerHJqyR",
  "key35": "23LJ6rkzCXKUZ8snwWA2KrCK27Yc9NxHX1kKrQ4ke9aQAWHdW8TZrL1U4ijqs2CQJBdkLKTGWt3kaym6WYY4Dj2L",
  "key36": "4A9i95an4FY18f7rnsaGZJ3777rDdiAvf5zi5QVbXTJpEspiVRZjK44sr1DQDnHwUAZA5GbHPR9cCgoGSeftn2ES"
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
