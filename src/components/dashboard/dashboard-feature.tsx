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
    "31DKRhqtsF9P4GWsysNVmCuTU5Q7T46AYx9xVHNXQgt3D5yB2GaRYUJcQU82Pyt272gm7MYyfBmsNbMi8NVNFxMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lr8C4kwMw1D8CFRUkrMkPAMPuWoVgdwtqxs4xPuyhEqsCf2jWhxYgxEumiu8vgfo44CgWzAMEBgkkTChumfSFKM",
  "key1": "5zm7xjLnFsm74sGYjKQqdEsvBxGuX8FWFtT16ptm6XKCg5ThkaHMMgvMkFqU8DpSeirdMkyb3baanrSX3uStLyNc",
  "key2": "4KLX3DtuLaPXFxwQjEtPwxSvEucLLJfyJbk9drWsszKVaGgihdhPBzSw64wEVgvwExAsQAj5atuCUEui8RhWRUGC",
  "key3": "5BWmKotVAUufM9PoeH1Cxyi2LTyxinqwn8QCTxHqb6DwDdbnkwkFMjtYpM6KitfEWzCeafVdD2CmzXMt9y5CckVv",
  "key4": "FvX7VuPBCbTK3zb4ufVng8vKWRnZta8qtX6ojjkQHXBKsm7gFk1ZmTVsaC9m8C7ihT5aahUVqHaMxNJNjWiCMth",
  "key5": "2yYytahaSJFZyyQb9wtpBZ8RnCqar4qUSCuPGE4CCcKL8ECjcJkWYyRdASTappoigWDsbc8oR9ziX7q1DcBuCAn3",
  "key6": "4p1FcUHTNKRzS7kb3wZKPd9ma9ZjjzSxp127yBrGfmYAfC9qdobSErBnP5CJVaebFot4ypCwkm6Kq1T8KKVsTvyL",
  "key7": "3VNMoUZazdfdqzSEwtCwZ9i726WTb3kE9Xxwq7QSrkdptKjyW3XbdL9AKF9QfbE8a1qZBVQGHdjrcDgBMFqA1REr",
  "key8": "P8d3znTAXvuf4QY96GczoC1g66DdBJTf2Qt7pxjjrqNDhUmhzMYxcRG2xAF1NjEu4Ds4v8mf8Qoyqx5mJwGSCqL",
  "key9": "5SbyJfFTN1oeCcTJbuQoQv5Mq7n38RJ3TtfvwyEvJJAuiF7EEwSfBPezqomjRUSj79mE4zGTzDuhi9kkMX7J2zj",
  "key10": "56ik7wGabbaURvUM74gwYH4yKuDjrDbY9T1RP3M6jg7suMS9kkgQAuogWQwJzGCrcPVAWGfeSLx5XDVEu55dHhnw",
  "key11": "2sWGy3iXMeqXCLmPKbMDL5gTiLocQfufbq4j2Xk5uDEKbXpyMBqCyPignYpioaZDzvdwPAWNjQV6kXnQFnCpvjDo",
  "key12": "2RD3T31Dt2j8aqaKqWLqE4R1e7f5yrgmQUSaR2bLhHzyWX53vYx1zYnfRFhTpTg9oo8PFZs7FNmqWRSTtj7317DU",
  "key13": "zESZRpoQiajZcccvs5YRTLBd7wiuhoTj3TFoAwGerZNcUTfUNhqUPoa7nqfb6CG5QGbev1jxQadtrfwJrxnBGsM",
  "key14": "2fJmWrGjZGEUefFH3sBAfjhqHkSx91kh2X4HekBYz8WeZNT2747fJnBxir4KfZ9VYhrx7Drs3i21GmopgiCteHqz",
  "key15": "5pLoPZtBLy2c9n91ZFEwhJF9sA9iZGg3nzkwNsUnQDyzWEE2uWmFyRJduUpsqEBd6uggmsYcem6Di1Abcd6maWv",
  "key16": "RaMoFphMhpA8XLeoUun4DKybGkTfR4mTLrQ7EnXkHh427FA42k66sB5V5uV6vrRwC1ngruWDrc9VeLkiSdB6CjN",
  "key17": "3cY2iErPeX7stkeK7zYR9LvpvvtoujyfdzNtFCQK7GfSSFtz4LwWGpFxTuzy5dNtXNKdQhJuxagibK5rNJH65CjR",
  "key18": "4ktS1HkG5FzZNF9gFNzkXgS7Y6qfrjn8kQJcabFXLNHLmarVA3KYQZjiUzJ8iabRt2TXEknq7mQJMFUKLNXWk2L1",
  "key19": "2hyyeQ58Ng2qNstU43ok4ipbHFiVhF6s6CtVHxfYy7eLVGBA5J4g4GPLJukssKroDUx8rgBoAbTtYLy5TMBnHPt7",
  "key20": "4btkyxTcLSFd4Jrh6EoueEwJH7auT5wU3t15w7Mzm5fsWeYzzFDYiK4RYxDobPXFJGEDScp66rcYbUKR265tMzhC",
  "key21": "4MTGLqprv11aTf2GpCb5Qmnn2K5R2qKAoKGqBJbhvrNc2G1uC9Usbmo5EAvYvGeCsghQoPYVRhXNxpBTijzqLKRB",
  "key22": "oMJTrkcv9pSkXeCKzNQkYL1AwZg5Y1nuTG2fX4oHHxrSsp8BS9zGya9ruuWD7wurMMcqNiUratdcQmBpGY3sYue",
  "key23": "oFtj9haSim3rRWBrnG1jf1s6oTKGjPuLJRBwN7cZ1HkCJJAbrVVa5UjdnUtLF5QmUm2UVpPERMEkE7YcQQcJcya",
  "key24": "canox7qHfrLuMzDsztT2HNGX1HhH1kJtNR9aEARYihcp5cREtC3LAAi4g5nWhNvvB5gyBcqWxV77ceXPSCCQikj",
  "key25": "5oCZfueqPdsJhsee1z14mCB1pXiA1CK2nDXfJhF8VhEo8ribeziUKCoHPhhQJ1aVzQMF7ChpYqT5JUHuZdaJ4xZr",
  "key26": "5nQzHGqKiJTvexkR9bRkLpgJYGjdZT2pCJJTD6hdZiwYSvVdrAx1gwySCvxZUwdj2tZZ6tZDuX45C861sc3Ps7j4",
  "key27": "53a4fTf1wf2d6BLqHjSMTcdzSRHLYbpiDTKRbpUsPBVsm26Xerz5f6CVuZZ4B9ABdiPFyX7Ud34SSTLMadBQNLYr",
  "key28": "2YEvLwGsofBMiGbyiq3Es9UjeyhGh2oTNKiR8nFatLPZwBKfztwe5ZLKPu1FSABWPif4c3YbSsgng2fBPDkUqmxD",
  "key29": "3tcXNDH3UWMcYWSX7wKTRik3p3BhzZE2iFpQeGw8vHYrraGMDzvNkibSQx9ZLk49UhJ4A3MpnV6GN9ei4BXBAcca",
  "key30": "53Q7EdNJUphJ1QUSLs6SWj1uKGF6XZiaXwd3DTDjudo5fiUfaqcm8MvGoTWcG8QhJmgoCUYXm7q22AwVBhw7uBqe",
  "key31": "2rC9XZwTiPsvHTKsMXA8EUBu21HN1oNhEDEQZ5TCNxFGw7NoUVfVgvEThpVXrsNqJurUmcm3Mfic8wGHaVUChtro",
  "key32": "5vB8ULZWZoYHeAfkfvPf7DwCwWwahQnsLwK6Wu8pXVdvJ5VMu4EGj3TRgMB9BiioMrktmJznjV6tuTQr2UxDdw96",
  "key33": "kBk7oZKsKdnn444i1JWP9VNFodpmx4hpGPAPbWCa7Tua3GGdrkEqxmCTNpUARH9wi6obhMT4Pi9h584Le85A5uk",
  "key34": "3mnNCx682vZM4xK1kc83vLvACF9jTuenpH6wJGofPaBvy3BW5t4TF8iWSigSfuwXmc2fNixpsf8v2jpKp7b478Jk"
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
