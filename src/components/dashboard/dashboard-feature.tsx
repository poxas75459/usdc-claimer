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
    "2tp3NjurDtH5SVMeyRYsZt7pQmi5Jhmf8ByqM6CUrjmfcEmec4JmKFaWKcgTzr9jNYj3gn3exWu37Mq4H3ACXGA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XgMhr5QVbebrzsaADACcbKUUAU85KdrqApuAe4fVZGdpMB4NsA4XoLKTB3NdUTuhXbNkahQUhCcfEDerVU9beve",
  "key1": "3igFngYhWo73sTTtkumt1ccVy2HqaX3GADDT8CBViPzXPnZ8BQmeEVq47ETWHRDvyRLdEzbKTezj8fZ4gN2BwJah",
  "key2": "4UeAUFDEA4nDCYg6tfEQzebLvf9H6m9wtxhsMFZAyxQab3efYXjzwLM19VJWYap78Vs5oEPGu1mXjSyzSRer1vBH",
  "key3": "31htLULA12URoND5ABTv9Xde7MgWyVThWYcWxwakaAPtBzWrpeQ9CwkAEiavUukCguHto5fgTu6qx6fx43VuboTA",
  "key4": "3LNMP1rGwa7DuvgapQpHnkKvUnQqx28VR8yivUCauHf1nWi8GefsKA15axRgrUksMw73tZGVEJzrVfGhsX3m4UK5",
  "key5": "2FMbxGo4jhnFGPjP1h8kmKYtFjS1vjaajE2e872jJuxnZBCMv51brY4pngFxrf5thAqQnSXZJtYYBXv14o1aCRmG",
  "key6": "4UofkoA38cCzDHGQLWHv6dA7VP7wsZjCpPuDrNSRbwxNAx3RQW8JQcKpPVqdhkEmKM5WDB6NsXzTTtyjjUmNh7e1",
  "key7": "5VMR5FFVKooAGN3QJEj4Z29Pe2fwbkpzsqT5eN4tLuuu4xrRr56d6oyjwH2RZTvQEjx7FmVRxJ8yg2uiTLfZbEx",
  "key8": "2EvwTgMe3iGMZCCs6HTDbSPi17oKYNnHVJbVamJcJX1v15xPWhe2CFDkLEBczcB7rPExV1nhNQ7t7YN5YiHG1rii",
  "key9": "2MDdUALKkTBKQNGjLaZC5JBqLdUizTDrrCywkBSjg5nU5sqFMBJKqyXsaQd73UKXn66m1GoWBpMyFNrRU5YvpF8W",
  "key10": "4zyeNoVXdZfi28kPMyRshLYu7NhCWtmHDiNbeyNQBkFznbNeXUfGyNp6JMHmUKt1MQeCevYAKzVTURDdpWntpwRw",
  "key11": "zNnSrZ8G6MrUHHTJBKyDbgYB6WW5gi4JejMvQ61fqb88hag98GAtboh8tUfWzgmtuDZxdtGustvmX7K6FVLirBS",
  "key12": "kKM5GyVZ9Gfv6Zu3rfEd8gV6m8qYakbVRLE6MmxbCVCZH6d1i2KAnQUVmQjooZq6ApHPSSbgS9uoCW2PvrqyJV7",
  "key13": "4vwBVRD3Xh46nvk5LYEVWcVWDrHGjZPnF2kWpKX19Vun4vGsaot7bcn4X7nyYyjgnALpVwkjYBgJzKsPiwNEjJif",
  "key14": "iNWzrJMCf69SLXVBFMaC2LP2Ngj28WY7nGr2ADsfuvb6ssU7z4YgQqqtqjs3bWqGa9Vqn9aLZ2eL8UzqmGY23KZ",
  "key15": "4HGNbCU4oxRWcMfN4Aa5DWQfb8hK7RLSLiphraSB3ksLzs5Kj8oqiRG81dnKdrqopBsgY6qHHb4njpQdcheobGMR",
  "key16": "ALRVAbm5cnhxgmtnZs1rx9wJ2gFND8iByjwHuTKopvbm115Myn6rGLe6A1tq2mLohKwSrgt4p8NQPVUu6A6HTH7",
  "key17": "xLRXPXJNAe5T8NVbpUNNwxE59Lg8vbuVTfPMnPG6c2vfEyKRJwuZoNrq44eqXpY7VhwqL4FD12ZdmQx8Q5Jf2bN",
  "key18": "2MtGwHHF8Pyor2dddwKh6qtU5RfFy5ALVZiJ6dPPU4mG1u2yNuZUndxDCrJbwMfFBbWLNgExfFgFS6fFcbRigtkf",
  "key19": "3JvwSuFRj5U2zRRPmCnfpwn2VwqYP4vnLq3vesJub1VwqzqF3jUg2Sbb5LuCSJPVbxYqH9bXcFpkSptWye2E3joo",
  "key20": "3wmGt66QhJd1mPgJH3R6ucYj3RceDAKGNrpjAD4RTBT5353dKkCqwVqy68Chi8hNWVBVripLmxhMNcpr5ccn4MRa",
  "key21": "3JuiLwDFPHtVhLnktZAMQi3d4jodBWFwE6bR2WkL5aSvYjXCDHaiPc33uSb1ATpB18oqffZrHKduNAogiY2bM6ck",
  "key22": "34Ld9wpGeLYjEKbDngNRkAMambPY1ZYRCmmS1ZspJvz3ykv9igojUYV17ALFCPQxqFkdjKkzrBvRGTjPQCy5LD8b",
  "key23": "32QyQbXxJ8r2K86UNBYcXuDRdDKtJQYXHn1mb1c6LPgvoSeT1MH8VRfztTXUXwnDMnokHpvYW23YUFagVBJxqjYW",
  "key24": "5dCzrn9Pww7CqGdTG9izvupCcEBfiBdQCvAdnrdnvn9MhjBYnNn4wGregKFwnfhdGuNbX1P38M7Tig8X4py9pHXG",
  "key25": "2657L4VtjxZhn7QBysdbudVMPGa8YuWPU4FkVKauNhWfE8eTdqJHGSx532oAvgwq6tW4M5jUosaaYgMLdcqThpHE",
  "key26": "4ou371WcAbZtz3o9PS8zrR4cDZnT2ZBkc2QnTeghzrVDUA1aSePQAcv4jybCWzE193m2PAtBAmFdk15i2wCT5e93",
  "key27": "63tKdSsq5gFdSLs3FNZdfnkZtGDnsBT73jfANPYcsDtcC5WzZDCSNBpYmbZMDfbiReataojKBVyZz5QzvwUCcepQ",
  "key28": "3frCRvRDzLrMmkuBLjj1aV9XG7xAca28QRQYm2XxhNh7oYbiPD72wccwFBxrQWX39r5YTBws7CNFTB5E8VFeVCt7",
  "key29": "VJaTUzhf9EtShP8urhbpBZReyP4DFsEBKJXEtbyoDXSkz8texp1cXETgiDxAPH853QW3sobJJbvaduYR49Beav7"
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
