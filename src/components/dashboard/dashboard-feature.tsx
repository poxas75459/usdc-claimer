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
    "2HserQ5kfhJr7JgDNfQQMWZF3GLNGEirygS1XPLPKpg842EVeWmSgoro3ocwfHLxxv2KjMapCxZvxvgbahqUWw8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tKCnnW2MU43gCMdcoMf9cDAm5ARYyxLpJUco6gm2bPjUEHdumY64wezTVXkMuJxVnZGoyD4kBMnRjihXGP2GvyG",
  "key1": "2Y9gJPVk6UHRcdAWo4QuVcCHc1ygeamejuhspCYmRBgHBjf3QQcp15p62SncBCEsZKP7bTi3Te2G2ujw1RHKD5Xa",
  "key2": "54qjAXZ4yWpnuQrxbEXQffGdQVBz45xeuU36ZDFNoadEqF59CJrTe8yEtj3b9fwJ8zuztwXARBZBbUQ4wk2HWKNe",
  "key3": "5s5Wwp99ZxSzmDaEmv6FPUqfo2vGHvWVfAA53z7KnGmjH7MuyBvbg4QaWP5Ksg2tcun2XSXEBm4tHtkJfuoniEgE",
  "key4": "5odbcAa9axRcyLuq9DWuGD6TUhLFv9ByFxM4goANRhHbc9V76wZnBTR54EemsA1kMJD8JUNmhgJGuQD5AcyvFJJG",
  "key5": "4MfPSp9beP1AR6fhE6xTQ12dgKWjWA2LcEa63qdqMmf6wBiGfuCiWeub17jMYuuADMwjrKJKpShT1VUqSPExFBdJ",
  "key6": "2regenGBnnbND9TRuSy37jwNDXxgEz6yFH9wBchQc8rQyHTEZKateUpE1FGD3Myfv1nXAAsYjt5J3kh5qmP9HKFZ",
  "key7": "2wCCLCGkf71YBK1YbCF4gda74iwEtWoyCVoi4u7PsapSfTRdR1v2HWReHbf46VFiEXpDsd2XJoc8ZUpLRQa91zX8",
  "key8": "JuzfipS8HWCoMktXPvTt61in7AH3MxCpV4CoUyfAw1zMb4ZE8gVMHjCygm8mrMxwXiTWkKhZpuM3buh7F8usezz",
  "key9": "mCR5sCTjJPRTruY9vHbxcMGTZu3LhRw4oGHCRYysHyKZyxYVtcvcKVmFsSCV6NXCtLtn1H4BuFEF9W9HcLrpt6t",
  "key10": "66PR5eKUNurQZCcKA8hAUJGjd7L2KBFK2JZKNkM7ysULVhLJjiRm6UaXGJJ7bwz3gUSkMpsB7TYgwc2MVLHTg9eG",
  "key11": "7z5F6k4NNw3ZMVa32uAgc5Z8ThCQxZnczWofgEVehct7FDpBNeN3Fip2VG8WkdX9K2tg2UaGHpe4zZvSMv8y9zc",
  "key12": "3f1qybeUSaP2txVFinXG72tFpcgoA2pJdVKVry6mkZqqbCns5M3nkWbVhu5iB6QUW2p6jtWYQ9TCnJsDhh8TXLAJ",
  "key13": "3kNfE4T7kUBeT9MbZ2j8N2YRrmMVGjKDH9qrC7enakM7NzWDBGnEHowYBi8dVrAZQraRRbgPww38pigofArp4ZdL",
  "key14": "612io3ZwmhDxpeJ51q1im8iWGPTyegauXzNddaF665FuhH6T7BBUqRcGVrjXy7xbnRcZTTQu6tzydfvNAwJDCPm4",
  "key15": "4G5PLrHXs4Doxo95Lid4z4gfeS3xs9nj7nwUXEs3iMMz1QCbqJQPmA7LD4oXTtaU1EEiC7ByvdHPBQofH69cEZq9",
  "key16": "4r5bPYz5UxtDJ3LCeYH5wceV6ZDyLWUZZchRDARcEQaL5GjHLAmkdjoqmZU8NmU3khXGfkaVDEKexsX8JKxS4HVy",
  "key17": "3Vcxc8Z8AChzCitYhM5V9gZQKDtUS3wwjbUHUdDXfJqZ5mkAWAumT59DVjjSNbS67P1GbDJTx3BDF1hP3P7Kd1ym",
  "key18": "4ehAPWy83ohcXY1ALDRiVSi6hZvDjEdDSr5B1EZJsBSCSTDw2QBgcMgUqWQNJAAHSGAo39ZUF1ZdQaSN8bZnJd9E",
  "key19": "4zBLpaFtrHmWYMgJgZdMij8YcqAqES9BU3aKmFxuD3qYXPQequNXkXGm8tXan8wh8QVckUz3iua4sZRx6iS8rqru",
  "key20": "3qU3vGquPuSh1oAxXW681UqkvUdNNJTKxejHhp6Urj1u2PqcQpM3ExQuaaqcwUBgKMdPk54iFfJcUh85n9RtAare",
  "key21": "3goNwRmkt5wAWafhNsfwtr7w7DBjXcHun1nW667vsnwuSiV9H3Y6CqVd4w9erpfFLR6qWZWRy8GUs7TBJy7tbvXc",
  "key22": "5Qg49CByE4KzUxYKpDRuf9poEKfgB9jJc37yosaJL6TxqXV9vhA58RUsJEEqrBhF7ZdKw4g8uHv35rjwboLSvQTJ",
  "key23": "2UMor4VNxN7YQgFFbz8f7LPKV4uwyZiYpWCPXKFodLVxUpZBB3uPB1Qtja2ddz1Dp3MRMrL9kXviJoPpXQgfy716",
  "key24": "3jHGrnjsuniZFm1JKUpx4XwCwJiKRWNB1nZEcu6f2y3MBvGTU7H4YtqMjRsg1BoutGGdzW4NSKM67bPsjUaL8kdu",
  "key25": "u78kRYn3GsnQxXQ184x2rNjtrkmrHqVydJ1wDuCY3aDUcLx9MvRUR3E1fpsCVcB4QWrNJQZoPyxC1ndfdu5uxu9",
  "key26": "5QqZDZ1A2FH1UYaQmDHvmnJXCA8QjumZTu3byitLE4UHYF92o4GkujuUjaZDeYrstpLfoVDB5ZkT6Q2CP5CvjBQ8",
  "key27": "34Sk2whwCoQxeee7YpGX9GVcbrhb6vnyqBoK5PWNYe1xHy556cBXM6x8gLA5CMK3FMaYhDVenqMBvyAC6vCvgaCQ",
  "key28": "5ymLZHRYJPwuebx4EKpDo6i8jexQ33Dc4iK3yPaTevp9CnYiHbtQMS5tiPrdVZR1U4R96bZSGBpar1f1aANfuUns",
  "key29": "o6McBWz62yYE4CvznszTkwDBzeFZpCMvuczPC6fAa4KSyHjVeR22WDNAeQuNMKHavXr8YiWLB7QMz5FiFCVZQBD",
  "key30": "38EdrFuZ9tv42xg29TT6aeR62jaiiATdyYZhe5gumv12738GwzdvcpJTp6dygaC7HQSj4B6V7chCqgWHsxsAJunZ"
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
