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
    "PUZddyRPSr21E778neQnFzQqdx59qAzYoS6i2QWe1SNDTkFJJg4c35ntoKdp4F81DUBNWknzrb77imTPTRK3nZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNpiN8orHksxUwPa9nLphKPArdP2nMG3bGebBT8BKDAHMnR8ZY35UGCpFSC3CCLiySAwA3ozazTCFsZ56REXXFJ",
  "key1": "37ezoSvznhPHKybgbfJf4iD4Av8eeDitwXdPpGzSCUwtJhQhwYjeEynuvtG15HX2w3Ezw8krG5ioJoga6UXs7yic",
  "key2": "5WvNWbhMhDFSsie1AWFgnkNBKpQ2DuFEUgjPBohJqRJnLhwd62ppGJnz61Erv38i678Sp8sPHTGUuZopD7cWuAUK",
  "key3": "3LpBvkVWkFYXZc8WghCQHjx6wJ3MDPwS1sUypHCoG3otVWjF2pGf1gf6isqfB2YWHR9J1rcadKt51s3c4Ymx2Co5",
  "key4": "2J9bd6xpTXVcB9p8o892XtPPaB6tDRi7ugNDQWq1CoBSV4F2VWq8yi2bcgBKGBwE274av8qLYoANvfc9RVUnTGo6",
  "key5": "3GvrXNeU21nH9Ek1d5mj1ZENePxJWEThxPRdtsXirxSL42cNkEhBrZWZzRcUuUeX2MPfJ456R3Vhpme74wMCZjtY",
  "key6": "66hQAqFSr5JbBnGxtBrQLJNmt79zXWf823Yx38q4onUkvXUCdcz7RYmNbokKJc1ktgW5qfGFwLAyHJctvahmZHX5",
  "key7": "5perY6gXaTZzjgzyYnB6yaRgg1Lf3BAa2CtogdjzP7cNe2oLtKpUT6Dn4wYvGoDGTMjZmx6kpxJXJv6fDFevGV5n",
  "key8": "3r1oZPkfBWQLPd5iR4QY2nG32n9CHAYTom9gKvYXtfBcgeNsxhCbYzzutysg3DH9HAgXQJPWuQPDFG3PvFxSsiRr",
  "key9": "3bRNCZbC4duKNQQbEVa2sj2WX14foQ3VnSYWfmwrjRtQcaEhfxjz1CSKcHBDWh6pkzqA62Lnzn5EwPhQ9FCmQHso",
  "key10": "3ndjqohNGpUFjoQXfySt1AbDCwKN9kDXNVJA7uHbVPhsXLCxzn3LQFEkBFoqAHHaRzwXbPjM4NxS3cQCoVFfV1bn",
  "key11": "5kiHuD8nvkvVRF6zAGe4WSZ4RMG8VKBcNFtFiC9fkfrm4bxFghad5vycJ6t3mg1s22XNjyt8uquKbQHvXdbhf88f",
  "key12": "3Qs6ATtPAHjatyoFMQdM1rkHTwd2LjcukVvoKxA21Hi4RjmerrrTRGJk8PjE18PBtGoMxGRb9zdEp5GSFhmDXRCG",
  "key13": "4yzP42JrQ6pSE8wS4TLjx7d74WS8AgTZCaUmXEsEBMsP6zCpAiozL3yMmbgLBPyzHffkPmAuNWMs217vv3sBijvo",
  "key14": "UKhaesB6ysrPX6tS299PtfjDM2M74jWGqJhcUmh87ctf73hevMgXw8rFUsbnhfWFm42e5xxpZzBpvR6N3kiL6hV",
  "key15": "4xHb8NCxDkZT6nKzocPnGZLBUUk8LDnviUFBr5HQoZa7xv8HKv93YdgqD8JYZSkE2Nf1ugUTtKPNPvjg9x9CxWb",
  "key16": "DGaF2NhiD7Cs5xLX7p6syeWDEwuBwzT3FYYWA85vBJFfmLuZp962jxJwstTgh5EsRSNLx5PTd55W2jTCiKvV8r7",
  "key17": "3BporudNmsgwfYYi1knnqZnTFrUjfeWxeM8qmKhzpPUDDjM8wUG1wjqvbm8F1smP62vp9uCzwsnCsjBgc9eHJghY",
  "key18": "6kW5FmEwS8aN7jUsNGe4fPAmj7uKwGSEX1VbVdeKNQwzPQqVhWrreYX3P47nXTSWbD7Dd9s2LXx6jjjPbGnkAAU",
  "key19": "5gx28rxaFTzG5gm592f7TkaHQFt7Cm51cGpryaaoxhv19PGMxGA33UEKW55yWSrAF2CZGfY6qiDePw9JFjSkLv4S",
  "key20": "4ysFhVXt5NErtEMeRuiyQVeb3KFXQiW7oY3ZA5CuczmQ8p72dADaMTEyGNCgDwTii4KhGTfLnBgAdV2onwSizfhn",
  "key21": "6U6Ys8wi1APBK2TnSYBFDm6WKxf3NTEdpW7jW1nKMyiFcFPf8f8kfbbi4NDnjArs5SGPd2mVsNH2x5se2iM7VKq",
  "key22": "4Srb91QSYnDkt7kGUnhEhQcQnAt6vUmTQS3szWL6jeKK2tL8ychq5w6ZeTbA8pcqkWX8nASmeDSZF3V3RTph7snU",
  "key23": "39oCLnfTx59GCpDJWqyb8xhVESjZP94YToWTSTrZ4jYvPdNrVwG78QMRKV7L6Et2ytGaEfTszdY5eRLB3362qmFN",
  "key24": "5hVEheiPbXsQQJF7Ps9U2mPjcVtEoixDVci3qdjFfVQY91BdLrkxy7TY2dpMQo14XFF4aPyr6hn3y7a3YFPag4Jf",
  "key25": "4Jn9T1zJQy5KnfBakG6xk1ZCjq8qrU98tsu2uoHbnVDa51r7uRUddQs4DxRCj9D7rt5wfWoFUqGsDWRBXAgppWyV",
  "key26": "2Gs1SwXofw5HnHx9d9dmZzPWxKZfN11WKxH4Dg4a92W8ZgczYcsuR54hSEHjkCX4Z9W2iFA8hYFRQiXHv5R78Gen",
  "key27": "2WRYbnzDHRsXuNNzhndF6zGxQzuX3dpLNDXBd5T7nRK8BVzVTFg7sjdAodc6MzKbYmpLkS7HSivxpZZMynGyGhqz",
  "key28": "4aAF1qZoXmnFQVdBGrkRN1TFKSZXjBYzf6BqzHYMUduSmTLsK3BeULEd9Nhu7ViUQRiKkLZDk5cR5t4QzrTqoiV3",
  "key29": "46xMSHCNRM8wxmXirEPbczMvbfRtg6hEZtHpCZdGkMTkbwp5B31AHNPeceoHri8FkmwELXS9EpSQqQRP6WrXsw4x",
  "key30": "2AjhxcPXgCCAKeESyffbukW8Zp1PMeo3dy82qVDpBzPV6rH7zN9CkSvHvLG59BbMSHU4cAxkhSBbozxziHNPuBFy",
  "key31": "d2czL52oMExhEZBYg63PCBuB3VMPKNeUbkMh9prS8LLjin4vKrafH4srACn5TvZJs971LxgcJwCrWynGxyXpz7K",
  "key32": "62RivgDMqL28S1aM2FWY9uEEVTv2J7sftbiCPBU5iLmnWDjaovDCHeS3V7RqB5heUD6wR8unve1vwgNWgFERTMUj",
  "key33": "3ABfVzVksyas9WGCc8zV74Gdq1thN2tW4rh8TyvVFW2uNKCFWrnqvmxsWJRWh6V9onHFwBJdvDf3KRN4vDojtAi9",
  "key34": "4UWTRi8Lh4dD83zMZGneZvbhgqcYEAiF7uwDE3tCepBPMer2uFWUukiWj5wmafx7GmiheARzZSycxejvqQnquECw",
  "key35": "5kBe75yny3J6rQU2WEUiqyyfUPoQBdEHLRPpRA7on4WzyyQwTWYfPY8kUCU7txGQnkJsk1jSDZJKVqfHfMjrzSBM",
  "key36": "4KLVStb5cDRXaL6FuyGnkgtyMsZHc4TZKPecnXnS1eUeK7SRS5U8B2JfYPnofJLaP7jgi232PpBz8geYi8dSPUUX",
  "key37": "3TfThVNpVAZ3RKNy1huEVUhdTDJysYi6ePb2CBAeMQQQzxHfXUS9CQgn7wrC56Ag21T5HVzEeeTPEBui1hq8Qr9g",
  "key38": "5PFanYQS5RzQCCAmwzVAmAXzFFux8nHzAeFUw4Bxh312xYPsAUsrX3ZY7ZyjcLVyvLFwrFK9BFJYrSp9KqfxAEKC"
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
