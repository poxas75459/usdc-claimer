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
    "4WM9ZiY3VCSERqJGNP3U12zJHVoo6vuRVPA7ewC5aYtjKV5iYh8x1fD3WtKn5V8GxYHuRWGygDpHdHGTNBA3EoGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cybeu3xHzuPMpeZVNd4njP8AXUWc8ESY9toWQDYFNn7dMib51RAVXUNaAJd5wthwX4Pji4uHfyZ2ZGTSga5m5TH",
  "key1": "5i5ittjqd2wjoLNv3rhW8agPXjWoMEcybFBKphpeZiaLymdNUsni8wGJe7HDLTdTYCx8o1QKjkCne8dgPESWLetk",
  "key2": "61A9Dh6wRKezyPK1frtndhjmoUx5FiRtLsLJ5yj7GAU1Jn4yhb9kdF2Wo9PMeSK4bjK1JVdcK5gM7huWrX8NLnLm",
  "key3": "4SZiug8nE9TFtBu7UGZ7joCrkkPb2GWNfjJAZimg1oxtshM4NqTQTLTn7AXA7CjBMunDoUAMD5mKVZKv8jwXRh5C",
  "key4": "2gMLr9G9JpSwrgqnRTz4vaG48AAxtW4S27mpZbjNKiAgJAVhDBfQHnKCc6Bj9SDpX4ePnvBhXdLUNdJpP9sduL8y",
  "key5": "3ZskqqNUnLhgnMrMBx2fr9fzy326Gbzn5kfWSQdaDnoyGuAnrPM9WzHwReY6EdA1s4MGcLVDmpjiBiK4DTKrn5uk",
  "key6": "4NCvsBvKZASkRqaRujBra8yg4f4a6h54orNjzLDmNf7fRQmbxsF5LVS3fvZgH2iFAkAsjuYYJuKma2XU7sVKBBMt",
  "key7": "4PYiXkLYGbnKA8kQ5DEBkzxGUUsm3be2jFn1MmaUbH1epEe6oCdF5HnN85TYgvUnPius9BUFAuxZCsucgwYhsAer",
  "key8": "3sGoGHx5o2NgmxijoRjxkxncMf6oXr1yY5ezirJJcG8tzH41qyF6zf1ecmHZwkFaJsav9GkBFHiaw3dtZzxgLZYG",
  "key9": "48irkNCSsezNqn9HCF1JiGTZLMnrVzhK1gfLXMZQZG4ZCVTpKosp3tkgSqwUnLnGRAjHXsQFJCKyme8HFWR4pkf1",
  "key10": "2A8YW47Uia9FgLjco4K34VrPt8L67nX9Khsvqv1DCocV8XEpAmV5eHgBjx1v6z7NaMu1Wg5SxUvnZVsCjAZPssso",
  "key11": "4E4iBuumEGgmNYeamPmeJ6TGbyg6rUTvWrDsPF35XxA5WEfQxPeGnx9dsknzwWUbaWsR2A85MQo4328y9Rhdkhk9",
  "key12": "4BokDZubbdJoMZjGheLG4Cob8o16ALa9tFKfEcxpju2maxaPRySgM3jJxw3dTkMzDzmoNvy6xsC3TsYou2fH2Qty",
  "key13": "547kbyTHzb4hKCf1CRjS5MkmYoo2djWAUJ4WVwX5zaY5ediRNHeQm5kwSQsuMHuefP9HkYE72ntfGM1HWqywqJex",
  "key14": "2BXENE5TxEPpT2qR5u7s4GJK5nvVXdEXnPVM7nw7SUGpk9TCtjDDW1pCSegSCaekfYhM5nqp87zwxV4Tq6rSE1XS",
  "key15": "5yWETWi2FuARTKTHQhMG5TwuQ6hX9G8KQQZ9eVWhNMR68DZh7kamRWdLp4JNg9BiVuybcfT3pXNgURerGw8bn1bQ",
  "key16": "5inX6PWNTkz3ZncQG5NUq9GzP2nzVY4nyDzktDthZi79LvGdVMf9pcNz1NnD6BJkXHw7wMSxCK94Qtm9sWwjmVsG",
  "key17": "28bt9WMGS8fXuVofHCz3BtWsyUBG36x1H8UEsMpc6HBZC36wPQDzssYuCE8x7Vk4CK4hBwjKW3emhJmcUdibi6J7",
  "key18": "joHg3frrMoQJZevg7VoGDV1eKBM2rHtjqw7YVMmqGtp6EXEFTCidAxY8B2tHGPnz2w69hTzjACgeRa2R9tErDpM",
  "key19": "4Tr5mkdZdiwSnAvKoAr36XCBKDPvDsvdn6V4LFe6abqXcGzyrUGV5UGzRGCyqSKWksbv1PBBq2StpwtDo2CqxWPM",
  "key20": "3AbBhyUPnMyhX81mLGBmBKiDsRogNSkiD3hTDX8XUPeyTagsDn6CRg9yMmQXEXEzADcg63fbB7XfP1vu6Bh2wpN1",
  "key21": "4LyXpvtuBJyyGCZf7mGByqyXAoqpCTz6tLUFc9pguDCWfiH5eZP4au7TrayWV2JxzWTnCNjNqXVwymiufbc82TsF",
  "key22": "3kWiWDE3Xs8PZasC9Z3ZfBVjYpLeB2BRyTQcWFKGgkQaWxLViZjq245uQ9YhgxNGZM8uaAGVyuVNE4p6UD79yDDn",
  "key23": "4MoayXAzhnQmDdHhS2QY616PW6o6QXyx4eMYyzyg7XuH2vS2n8dJnuwUbDUoP21chwEAghyPcq8Xz4Q2ama87enW",
  "key24": "3XtqwnoSLoJCMo5NGFXUJbj3tDu16tNKSiajFgYgETVzQEPuHr5nvmG8Cq5NYu52zXjW7dqqghsc8DZBeaSaXzoL",
  "key25": "3GuDvNDyA1TxXdRkW8Dns9zo72k2iQxjtXdiz8wopH1Lu1BBb3bUJEw39qTKaeuYZX5o24Pkb3mMNN7umKNrhDex",
  "key26": "5qXRXw2FK57gvEfRBWYFHEnWxu53hAydPBW147Gr8nVVRSCdxf9eufP939rrc1usRzZXqk75UxJFzrd2uHad1X5f",
  "key27": "B3Vq4ZZY3hHoGPn48MaH5GStQBM1x1n8tHYiUm8C5TQ4CiSwX8eKuoZdvjnQ8XsWuvaFnCGcem1Sk6QAYt3yp1L",
  "key28": "2cjEk9HqzxxUtXUkoLtuNnLjwHvBuVCGCqmb8tmFpCUeV8tvo2MUrtLd9UxFYPi21FVGkaPp8hBZTqX342eSMq44",
  "key29": "2KBdTzfdnQ5SQDZCxMmgBUgyHnCoB7SZNut9HRffCPy7Z4qjm2jkbp6V5ZxXSFtxR357EjULn4D8xdVtvKSQEVKC",
  "key30": "3wn2JEeThiiumJPrJndLLfNcTTm5Amt2UvNJHgLDLzy9WkfFoiP92Kp7guo7o4pYJhyf5doDawhxW7mpp1ZNUf1q",
  "key31": "ZEwgsPRzrCqpMMv79TsJBn7PFdqdpk2VWhLQBX1kdECjVM3LSd3x9SeAo3ebA2WFdveFCxZ69B5ZxmsgjYLv3Sr",
  "key32": "d9VTXBiTAHxZxg2TnAyoXkuNWMKqANBu9X2hY6rra2nfpy41CF4mTcka8FCrF5dx49v3TqHLt2wRVTc4JgTWMZB",
  "key33": "2Zini5crxH1jx1zXZLnmM8DHphc72gpWZ2BiyMWrho5jNjCypT1NPXBypeuUrJtBRUuyajM7CEX81J7uvHfdchAK",
  "key34": "3XH3CQLJv21jLCaB9jjPXUekLcza7pYvrLvn1cU2tu7BmxSSPmWfKmkKG9iuSRgUUd6NitaPfDf1PRQKBqsbWkP7",
  "key35": "4q9gdRWi5uCxL8bgi1vLuqC8gRLBMtaTjpPJLZqeXKkPXbZyAQy69xt8AekVwKF3WxWEz9BUtJ94PXdgC8ChLsp1",
  "key36": "4GBQKXsSz4vvjsjCzmTrAwoem6uhDgpuqMUeMNVu1YrhBm84rFpG8ETSFfj5XANXpYJev3gHY64N8ZppPiMv5g6n",
  "key37": "3D84upyaGYi5vfouSjgMKFSkBbm7zXF9UkNp1PY5cX5yobkdQ28bg8gSHa16Sm1kmd5brBiA6bfiievyieSWSYZE",
  "key38": "UEJe8d6w5WoG3K1PP8v6sNXb5Npg7G2bHM6ppLDehUdw8DubgQzHKwNYcqWksGEKrNR4Ka78s56HUwDbXAF1YMx",
  "key39": "CoMJ58X6xLGYno2THWHfXmKAUAoyvnFNM74yBKs3BeBWfiXA5cEMMkYUuqRu5LbRRgGWonKfvp16BvyoZmbS4Fi",
  "key40": "5vdhMDR82sv8wLmkjWTZnNm6UNpaFg6JGDWGKHNEZh3KPqThmpxG3yujGqzAZ8JxBvKCXykyyAxa2oekhMcMbHZz"
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
