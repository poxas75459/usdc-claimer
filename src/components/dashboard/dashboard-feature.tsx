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
    "4Ebyq65ovLsE4JMnkrSR9jEyCof8Q9QE7wa6BHKLen1XdQdN7YsKuRsWeMCvsQn4M1BRrSuWDEjUcb3BZaDMzqU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yd7MoLSCHGRippH53u6TUZXu3CiDRPEBzU8c3wEy8b4wGAn6W9UgubDkNPhFWbZZ5fBSATrVkbDbPBCyL4VBpjd",
  "key1": "3hEeuWFvhLFcJEyVfnuP2Ur41uCYtrB2bxFdYEVhDcqqnAyp8YpYj2W3PvKCf5M64VYiW1PLLTPWxZ2EyySRjoX2",
  "key2": "5n9bJbBn3gwJFZHQTC37UwMgAuZ8YSroEnpT5Smw3i5KUqqA5JypYvKMToLizXGZcMuS8vMMM4ckE3BQBB9XVGCq",
  "key3": "2c8NGZaKYtz8gxXqU6eZvnvygwR9oiTxkSaVWj3uxhPpqLyinfpB759ERXThBfo3JAx6q55841DKh57mtnd96LxJ",
  "key4": "2zofivGpqaNxgmAFf14yiwvAbcjWdcfFUgF1xqbqzjVtmRrmVQN5AjpyZFF719PT1AAGQTUeexj49FkJc1o1Fo4R",
  "key5": "24MJ1iPgA98JserLVUzrt9twMmQZrvPZZmGV19K5V3GDA5YwyhhBtrbSypXBG3MihtezUYFmeBNvWDBhbEeMiL8p",
  "key6": "k6yTsRs5tSw79X5qaj3YMGSXJcT4q5shvonUWdRkrWDRcwusCruquBnbVxCreUsqRBpuxXQ4D35wpCGY9BFhJUi",
  "key7": "2GTU49S9agncL6r7qNMum1sV4mjVMFuDftqnvE7kihgz6NsQsuzZ1SEeboR3L8eVUGCdoFu6AGNjtNkpAMkiSssA",
  "key8": "5ESW7ARe4xYrB46GyjVyFGaS61L6mcvPRmPkRAXm6xvUngCYHBHRJVx7y3Stt8tn9To4PNzK7Zmkio9UXf2i7NeX",
  "key9": "eRifWPao9Y1qa3TZR7ms7NpTmDCy3vhwNdNBmxgx8W2QFeqbrpouXbqo93o6zHXrFNWGXaD6wSMbQjemjbMnkHa",
  "key10": "5589Mwfq7CnW5uuHz2FJULrdTCZgTBEk1xZzntqCxrVCSYmC6EyFNsfEcFMpyvbwzhj6wmsYDY5MyGgYDUoQeQfB",
  "key11": "5JdjKp5KZxpk9whhi9Uiu6WBzKw97Cgj9Jx9wRzpfHkZwe9WBByYa7eUBdisBPJmD8UdrvvD6h2r7WMFS5XP8dzH",
  "key12": "3wMJPL8qCLaovoedE13D3onk8miG9ouy5zXqgJBuMZ8XKYLKYH4HgTtFEzBjgDrenkQd9fqm9RVFinqNuQcjmugX",
  "key13": "5cn8sowHL9Ese7QBGUJLeLhuceiNHdUNB3tP9pFCneT6rPPp9FA7rRsaLXTCnQvVg9FmiZHm6NGtCYksHDyCbGfa",
  "key14": "51Fm4mFE4bUwsDq9387QGK6Ld75AVWNCpBgUsr8qGKWmfgwYy6APZ2eWrRxKjwU9pXY4rTNNKvwgxYUZaFnWFG3X",
  "key15": "zAd3K3EqA17sP3qLkv3tDHKRXooBJ92KFzdab1KgbooR97CNn9kTrgNp5n3UrrLFkJL55WCMNcZ9DveUQDdAKME",
  "key16": "5tCG83Hwt4z9BnrcyjPALpWqEakRTMEJkEeZvMRNuXnnNBYC4b8kHDTVzB49zxK1TZ42jXY6iKXhE5F8RYSzcbMS",
  "key17": "2n2A4p5YUk3BDi6er79SY42gGZJFkc3k9JrbrK6U3vQyNrpTiPydyxsjxxWQ9BQLAL4LV6ZSwriRbaGrcJKKo6kt",
  "key18": "5ks4LG75YBtE2gWUMc7S49YkGfSXK8yW1ogsswARRhASeWPnw9eDLy8bxsP8z3MDLadtFVEqYuxSaKV2r1XLKTKK",
  "key19": "5Cy2uM2Uqb2oe8Q9Kcnu9hi5zPki4z3nJiRNdbp5ztpatApPZqa2ivpC1LE2b7cW7978YwBh4JbNeDstHZH9dBvr",
  "key20": "4VKgAwj97SoBcup9ptGRgh6F4N73op1WjDjFTQbf1jYopU6vaQwErafYiPfNDKgiuv9hNZBW8rrEtyXXp2VM6NRf",
  "key21": "MhMkXPsW8ewxv2gWqEEQkDEjMNiUPJJur4GxuWzKPv9iEtaytZRKz8wBqRNrn7GdS87vHqf9DfNkcU9vPnCH3rQ",
  "key22": "39WkBGfHnBbwzXGwioWHmktdd4vqbuTuThUNZEH1xNJFj7NTJNNGMz6rqMine2qVaBcBGED2ioYJD6uq7PL6qocn",
  "key23": "2ySndj2UsAs751YwfcC7fkxvGBqnG6cspitZBRJMtkavqjsxkkHan5NK3jcqZuYMjTkdPnfpyFHXLAZWwVzXwGB3",
  "key24": "4TXZEucSL2xEgKtpp2MBWa9rxWdBxori1L1icLPM9sE3sfNSYb4wXyM2Ypvcs6N9TVugzTNnsebyg3413oTwapCi",
  "key25": "5dyD2V8888bWZM3BTLfsK7nADQoXgL2urtqMB7Jc58FjQiVTEaSYudaaeqgQwTxV6HDCRtWQRvRjfHDsxhyVK2Qg",
  "key26": "4ASk8njCdE1qUbMydhmzXzwYP9vM4yQYMFzM45zvDMzNT9XgwKhsq3yfxDefEz5zcDwEy5DBY5fLK21XnpgkNsTn",
  "key27": "2Zjh1ajmJza6QP1GnUuKVQwpwpymDFztndCUQvocAVNGJ3Uz13WKC6YLuAw2FTDkxbsTVDWVJrf4WrpFZV4BQs1R",
  "key28": "525Pa3YMTH7qjaJFQtwEfffnQXHxjBpDKGa1Qw6jhZrqyJHUZVdDEY5hJrpFLCrVn5mVkmhUzWbTW7yKW7PhZpAz",
  "key29": "rWx6ECVfgRzCsqRSVfQxwzctesCS6vdYsjLqaAvYqR3o2ouzWBzuKCFiqu6wVxm5cr4Zzwg9pG3vTGBLFRSHkeN",
  "key30": "398tT7Q6kcGmyk7iGAfxNcWqVQ2oHovAfL698yYRf3o4QGYkM4ZVv9mWkfhCsbLMJDKX6oZ7ueAHstkaLskdCxNP",
  "key31": "34mBvySivCgJsi1SmSWDaFPDD35hxPgYzJ57LjfP8F7C4yMRCrCFULrvwQYrLiMeQdnDVku7L9jfrR2xZnNjy7bH",
  "key32": "2dTbazjbHst3qNK55HkpdMyuF97x3vwdifv1jxcL7P3phvLvnv7vUgjjJDXuqDpn7aRKmCbV6VBR1izh8axbnzH1"
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
