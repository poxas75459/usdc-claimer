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
    "5zyBSHHgjwcK4gUV7QzB43JxkXGCVTb3FgNHd7ZNzsbpfgAo6F6dDDLUchMzuD3MDmtaVJeJYH5ZhU1LyC1KHXkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BegDsuGXp7REyKCCMULksBX4XZaKstUcUk8jH3JCWvG9dcfr5yokXiZeEqnDY69yiWrVusVdmzFfK3DMCjgEa2A",
  "key1": "KxXHpH4iWnUJDvohuAmTAjTxxsHs7frEGVCNSQgR72JnbjoRZ42KYUDWb8Rg2bFiL1nKGeygQXDLhSwGyf215zP",
  "key2": "4UpaSkwy992eBW18wp2NHA8SVKfwM4zEXrB2qKbeiFjaQNcP6xBT6mZ3fiX3GJqhd9mv97Yx2zehynqWd8N5mNm4",
  "key3": "2o7xmU5R9f3uUQFAXh5zmBUMwyyyQzAcAGGSDEedPamFvTrz32uycEjDpLy9jmQAjcMzUMZhowPT5pithzD1VwNn",
  "key4": "heDf5gskK1bYFKU5aXAVtKjVkHS4tZhWp9t76kvKtFdsdaDr7xHycLEA6pLZJ45bL9Cc6wSj3oBbDbuDujWiuVV",
  "key5": "63vYE1DwoXvU61JPyXZuz81iYqT8PD4f7PCbyfAvYwk8ZDWcJpr59c36mFCh3DEdpD6cPCv3nPsGq69mpeXFzWCr",
  "key6": "8fr8e7AYqd3YigEYb573KRjT9C9WMYk3cLb3eU6KgShtXXuYPLxvph37t62TKjyNrV4WekFcXMFLorsbvvgtTRa",
  "key7": "3cgz8gZ9buGgv5aD4onfyX3fdPAYL7YjXr4VwmdkwqTrnv5qTxxcGZmhrmA8VJAx2EsVJ5ZbBmyE54xuis8uydhg",
  "key8": "4y1tan9shcQmjwanyvAxsAaCeZAoUVYYgiRL4ts49G5vSxKceWT5Aaf9gUjDVXW5tJrJ5xVjVzoDYEYyzJ65BA9r",
  "key9": "uSe4H5iqqkboEvgvzNQpMfmJVqL14SnEFJzimrsqRSa6QxUvKuMLmjU7CG4z42tA7jo1UQKfzXTQPCMeTpU7XBV",
  "key10": "DzPJ38Lw65KVor8S8MFFAyCuqregbyy3joMDZgRxEFuTF49kyX9pgEMJCWyi9eLqsduJF9gwMmFNBrJNJya38Xm",
  "key11": "3fZcRojtwDtepQbj8rU2k3nyv8YybxCyUGqrwF6c7WdEwzdShZiy1sa39oaJpDytzc53svfPrHp8DHngrxHhC2iv",
  "key12": "3H1FpPKknsoNbgZQc788JgKLkYsvgSUfaQqZ15yhRgurXC73x1YqwnRVaimXhhc8LouLMKH755DEJzFx3VwyonGF",
  "key13": "2MsMsA4BdspbJvSnDofBHdcFNRfsoWuJxY4gdRbbreba3uxJrjrNAPhwCBeyfaR8LiNJHCZHNXc6HU1xe88aSvqJ",
  "key14": "yX3PzMih9Ww8XY4yVne895qDfjcKxv2ZTSidiD5YFhwcgWD3n2QqEbovA2d5JU9GAyBJXVMZA3F8gFJFosz4FDq",
  "key15": "35x7ZYA4okc8wcuM9h5zB3CaXjq8xgf33Ytvjq3ML9dpHLcz5csGi6LD311VkFHbdAAqTb4WTjk4gJ512Q5awMkx",
  "key16": "2QsQDzr2Yz3caWsRDsECwnPQ4w4SJqRPPXSVYT9aEEWfc7qe4aVHyW65ZtUHxC2Egy43wphHTVfTPZAPU3u5AKyQ",
  "key17": "2gSnksNCou5yb9Tr6h4uZ4NhkHr4DYEYPPBfQ7y7GNaNs34t25MCBe5x3zuGL8QfBykJGEx336cxakgfR7RxnoLz",
  "key18": "hVa5jB4M1Gm9Puyb6FFMa9tnHkoxy48BFpQNia2CMh1wp76FmpnM8GbxKa4XV3xQn7DtTcQvg9fpvuEyB9xSNcW",
  "key19": "5qzi2HNLZHweQH1NpYcRgK2UBx6FNgNqjR6cvg5bJCZH6kujAq3aM47PPw6t1dQXUaytvdQcpEsvkQF4bxdgb7kE",
  "key20": "5itWFLRWCnbGgkwD23KCTjKoZ4QYEV2JHSiGJycxau4enUNsabnY2XQc2HXwb4fGpLitZ92c9S2fiAV7aCBuXxVk",
  "key21": "67ezztBGCMkBhcm6WzkrmvHe4DLAriMUQQY4UcnSQCXzZotfk3k44LF8PptNavTE9BGrBcwxMBdti4UpGJjamJqy",
  "key22": "4zfvc1qj6aKuQz67mdvuLxLkM541aWtmJgMMFY4NHwNHP9SZAedfob8iDipNX4pU8tabCULRiQ83nGHMhNb3MzPD",
  "key23": "3LFCSFEQwLPELBdk3Hfkc6HyhtesPKYrh5xX6GV9oksvz5wUHiXxr3VfWBchZXaBCYZBF54qtADBWuB7MG7b2FNM",
  "key24": "4s6HpPiT6oNRP2wPWsjfU41HTvYbhrVLeQcFgPvgKcjZstYamJZYAS3cGk7ZWgUpY6PHDM869DvKhWqkxRDncwHx",
  "key25": "4LbA5y3DJcoZDzGWwsFux9vVi5VYMDFus6DTw3moFJ9ygMTxTVNBTAQZP5MyrNinS8gHFDnXhnRPxNSpnEdynJFV",
  "key26": "43syLXann5ksY74LYfMttRihx7aYygXmsWo6uXQhRJgcSDURCThRMrYUdam8C74aPZufsNGsJTBqFAjQBCeenKaA",
  "key27": "Q1BtRg4LWjy8Rmgit5gCYE27p8VW8UXx5MnPMq9ukTHzGJdY6SmsS53TGc4JkJvqWbwAuxTfnMmDeTsSsXtc3dm"
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
