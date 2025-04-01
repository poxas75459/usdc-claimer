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
    "3tNd1AACoMuZzsc6xbJ2FEnEJB1seLmCd44mPdCKwtAKs8ov1mYowiwp9nhjc4BAGG7XUPt6E16g6gHp9UB7CAfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pjEYRWcsYDmEt4QxvhMKzQcgZNywBhxNwcrvoCBcau9fB5497XPuHzSkCzfiYXRQe2Mam5Egj2JJozjviakjpB",
  "key1": "KQVqtJh8FPVQnNUACgSxUwuY4DXHYjmmj3UgkPmzBHcr1kS7m8cGQY9fGiVBMrJoLyj9AgKT2UQk1dm53kz47uY",
  "key2": "54MmpAP1VYLBDrA7bGPCKCYBzoWA6BDY3aCcurqYdxhMt4QT7H4uiAY1HCB92veN4mLSYNajbPqRHTra45n28rxH",
  "key3": "5rwvUY3iGdY7n3VRYLVHiYwRXPK4KHMh4FfoNu67bCqCtdjb9pWx7oE4bQnLqM6QJJi884h3StiYJBmJxYAPpyTE",
  "key4": "2LHu3QTAy5xCYbeMmVJuS7D8vQ5tnVGHMyrfWpvTa3wss8rBU6XMkFw8e93ULZSQPEAKrK6C5XXLG7pk2cSLS1qc",
  "key5": "4rtMwNQCUFPSUA5HQsmbVu2wVzBtKbgkpq4MMQ1kQpDBkQ6QrPBdSCARa5LTicUyQ1ZDrXtxFMGr8ECt4AYt9mMD",
  "key6": "5UFGfDxYwg3SYtnQsgpUR3M38F7Bap4BUsMBFEXp3a9bCGGdWZtRtzNdxrVuFh7hFFWeJftbtcyTX3kc5bGqqtg",
  "key7": "51DqqAD9fp6AooLhe5nhAiEA6PtrgHuoN3aBPnfZskgyCos2Mgy8GJetE1dd9Vo1sf5AG5tLSfrAkMyjEHdXL2sz",
  "key8": "5RF5U49AD3dYY5ZPyFAfxXPRPCVxdzeZt5nUE76VvE8YmGVNskcb3La4wn5wHjUqHpqbWn7KgME4QANqExWCiarH",
  "key9": "3THmf4MGFsogowMLxjKCwfFQVfNCiq4MANR89XnmMAhCuS8pxxQbSy9Ku7je4x196NL69fpiyQ2of74dz95Ebhpf",
  "key10": "ob2jYvEY2tNvr8iMUp1rkzS27JgG7J3xmxUeZXtc2hGDiSkxybTEatHf184aaqjuxxDg8ui7jKWC4igcHFU8c1t",
  "key11": "2yakHQNYpvbtVChY3ymPnT43e7LfCdo3Yj1L4Lge2gJZcbK8tGU5UjxdCB7A2Ffi7VAU3JqdDcbD4jF6bCvcSKTi",
  "key12": "KEv72645oQP8LbWBrh9Lz8ZdbVazR4Q6kmQxPCTBWf65KwUdD7S4MRt3JRvhmzyGtsmK2GmQmwR3tdgDMWCFBrh",
  "key13": "4cip2V4MsAFuBwZNc9YGDs5fHt4KGoufaaMAEZcUKSnSX5A27NqmuzQG9jHdwHy9qfP6KFGNaeHRNcxFB8TLtfHV",
  "key14": "2ZzYoGysgQj4suYXkYNvJoXWZgKG23Ay5RxH993rR72DnGjrxj4rrnvs55v5WxC6ecaYDpWe3MR3RxtLK9wgGvSr",
  "key15": "3gkAK7CWAotSA5RnJ9C4D1QNxbYnDK6MNU2tzkk8wz6zujccUo6WmrqRpnaEtrASfpYhaVdFupH9EpfoMQ3EEj31",
  "key16": "urLGw5rQdF6EAA7aHSsfdsE8WUV6rb1XtUAo63wKB9fHkeQVMmPSmET8PkWgnGM9APV8bmok5iTwNdi7GM5WDUH",
  "key17": "4VgG5KYrPEF82FusiS3dLtViY5z83HiRxLnFz2GYhM1Abpc7LNJouhemWYB76ZEgECDTuQg8c9nUsaJSPKf6CCd7",
  "key18": "Fg3FE962s9JFTwosTrnpXN8YB4Pk756uQhG9DxpY7gGNPojokcmxiiiLZCYToYHHgt46RKg6qqG4mwcPuuqSTFx",
  "key19": "5ixhf1PwA8ddyMnasgykkCDD1BqSjKjVqZr4jCwNV516mZ75yZKHNc5FvSU6Uyso87c2tuN99cK8ZUdHwEUHNepS",
  "key20": "5ksmxJQRQT78US6TNi4EhJN2sejpJDq4uCqabJEwFJ3XPipK61rkM1v2rzqK4Faw9tFtCT2QF6tJ8R8uw4DQ9qoA",
  "key21": "42XS9z84mH9QPjF8TA5Q2YuuQ11wrUToZghbkPrXXvyBaNANE2c5U7v9HehZcxe28FrK7Hsh89Pocb4EHip4vf7k",
  "key22": "s2GgwyUHifeo56w1UHxTAxpsyhhQX16hEzrEF5puZLKXBGqgzh4DcBAH3pcKFePuf6niy6wuayR7M6VrqfhBLSe",
  "key23": "2zXmaMziRV9XWn9rrhzCsbpBWAyoXTzsQVAxoZjt85hGU1xLMP5GcRPXpKZynDPjSotJCzLqcofgsUeUWTeoasUt",
  "key24": "Mu5sHKa9kJ8S7yvJ4Dnx4qY3MEeCxcXPMmuqEGhCvixFxfFywQka9jPPeFHAgmqAnhBRgD6HbSTFkCEyn2dkQaL",
  "key25": "3kktCsz5BUc6dpA5g5D6HrvDn1bakakUKvfQQqQ5Nr9xCE482B1qiy59oAyZgV894ZxbL84c4qE6KYnAtys7jqKQ",
  "key26": "4pVwVrVe9LHhhEytTTmJh8G4E3djYojEGkT3T2KfHxoLkdkEzQ1yvscvVKZjt9qyVR2197mHDxY7P6uvh1xAq8Lo",
  "key27": "5rNGX2DA8dVEho5VZcHC1ZY6GREYrzXQUrStPf8ZCAHW2cpDaKd5i6ZanU4MD7zobvaUhuBTABocL1qdo9hFcpU7"
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
