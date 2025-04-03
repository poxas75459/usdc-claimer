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
    "2wVLfUrdtE1aNor6XJ7bYeQaoC4CanyessvjfUuLBkRPEs9tK3dSKL1Fw6unSpzUM9Ge9kLHx8A38Yus1fCS2y6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nJcQekbgnVREhf9MyEnwAmQuZzvtTCxxvaeqgcU8avhfC94rCZyrWVLcrjBTBU2j4QgFNPV3dknk6LTDv54oZrS",
  "key1": "4hewmmq2bKfxDxWgkJ5a6jBu4vJERhNP2Xx9yJeeC65qDe1nJi89UP3xp3RgBTZzNZCcq3vTns3skoMVsviwxZVG",
  "key2": "5XeigMKATwkDJqYAgsEPWZfjU2fi7wjzPKsJe4ztr1KJNip1zvGz3y7WiFc6Zm2Zzp65ZWyEYrULt2a3KAxh7DtA",
  "key3": "3a1TzJZa7BE2ESeVNpJPr5qAoG18fVcgchFQHVWgijMHKFhnhsozocPEDFr4w922pi4t2xwaXCZYVet4fwDNX5cV",
  "key4": "3sZ3sodAvFtM7XGvSSknXYhe9PqVC65iJrFSohiLekzJ3HrwTHGVM91ABiv19KmKBnRtnoobERHMqLH9B3fm3J15",
  "key5": "TPFcZCUGTRAuS3CXWRRm1VKrfr3EmsTUM3vQg8acSQKvVVgXTh2KxwUrJNXGjgbBSpTPL3Wu8EjAQVeUrFxjkYD",
  "key6": "33ymLXweCA4ikLejTT345uGzo97p7nWR5RPqgvHeZEPXAP1zczKKC5JUcjqVF2C3Ry9gtKmU7BmU5NJMdXkmCre9",
  "key7": "2KFQqj7DeEh3GSXftMuSg8f1MSgPnxjV58rcXnT8s6Hhq6KGyn97gY8xP2sjFJRwAXsCRy9EadxpgqRxPKu2wLUx",
  "key8": "2tYsjeV7RswTL7ipG1QZYnvCFNvCkFnqv4LRNzSnLv7FNzqzo236sF9MK1zGhUjfL8X5971As3XcUKPSRPfLhcPp",
  "key9": "4vUr62HRjjoecpZymQ2T9yPZKPMB4Cj5HmLSX1MENGrg4x1jfGyFucX6XqJm7rxJSpeMLzNb94XzEXkgNG66EEfj",
  "key10": "5A8TmDh12sPRXjRCof75oQLrXn2YWdFsGLxZHsASmpoNu1YeeF5kEsJMMunXoZAQadDKkuTQyoBSMfmNmnXh4An4",
  "key11": "5W8MNDxjPAcLcYFhq6Q6YeLRYvL3tZxTmx1zDYAGcxqHNazUqwndNS2YDbiHGBuPuRAbSmbrXnCBM94FVgD1NUxV",
  "key12": "3GNt5koPxyLDnk4Mb54cPmc58hA3jewWYbCoZyHA98MJrbjoA7qmaKxQMeWhpgc9Z53Hoghfg5DQ2RyXP1pBLWLz",
  "key13": "4qute4KGrjXabSRZXovxgCibLWaEuwsacmMPykLNFtHXP1apCdYzZe1a3XhcQ9yJa9rdprSRpzsLKkDf9Sz4GeS6",
  "key14": "2bS2bQsdmBmDou6ya1aLVCBnry5MFkmwQd6hPXimXQqwJjAf84Qk2eDz9WMdHBLucZSVBAwzULTJpBP3nuomD5j",
  "key15": "3tZ2EDeqj7LPS97cL8s93BBJ4B3Ppc7fRgq67o6nF8Lw5t1Z5c6n6yZEsK2FG2Z3FFifio3j8VS1qJx9V5kd1epP",
  "key16": "38yfHEnrtkUJcHvhGiPZppcwXNcMidwuEVaajRQSVJ98p9YWahjvQ5wPSzeqBbGcw89ChFoxbS5c2iht65Rro7T3",
  "key17": "4rBV2bVM3kgm9pifhGyjsZkxvL9DT7YQL2kzrgou8GjmsxzUNgRLRuR9QGiomC9tTBYbpHxwJUDXCMUPibJMqHiP",
  "key18": "5NTBj4QuvD3gF82rE2Tad9Kos8uyH9Hijv81e8ZXSZNbzXFWtZ4CBcV6BaRGFqsSHMZ2NUg2VbSgbMoBATAy3Muq",
  "key19": "65vCoSUgTjdxBuN98KfRqdzW2JSVf7p7ysJQRYCGBjkDNquGNQZa9U5tTUYbBpYoW6DJ36tTUDxvPUrJWmZBMRWY",
  "key20": "3NnfVx68QFqfLnFynTvzFARmRqLeUWmy1WQyq7GBBMAoEpYzoaJ8mk2B1bguHkpuUzCjFeXU9hbQYxeeudrbJh7T",
  "key21": "42bHBLj1Q6GpUpBTmmxBHeTYVRZKFtMqeJb3mRyEUwVsjMKAzF1nTJscmo6EX8E3ASQ1viR7SSCE1cDGtU6N4d1H",
  "key22": "4Z9HeTBsHSSrWrJapUKe2fitF4uyckhpP6wMyjVoTER3FmCKRsjdhebSvAFaJtj9fB4xVuzweVded2GRt3NjkqH1",
  "key23": "4GNmMqUGoThpPjLjQaWGTezhfzCnDW2qxTp2YAsQFrG8wV3xD3K48rayzbr9zpHpLMsAvYQnb6k9vZsmf58ugMRG",
  "key24": "31H8ZwGBf9ToZWvzdGXmWqEvYJT3YWEJZzwZFJPxNs8tqX8A9tc3xiPJXtkJYofmVVs286jUCYVj2fztfLeBWmfC",
  "key25": "4WnRhwMDDHnoXv9Bguo6Rjwfi4jUWRs43a5LxbLiT2AxpzSoX1mppqpp8rZMPUButyhb6xsHS6XjBVW4cN7NyWfk",
  "key26": "3WaR6XmpXEqgcWpy2BiayoEX2uhkCci3p66f8VY16ZTHZehtNjuJ796vX8YC88b9azDjwpnqDhYJCbKRT38WGhyt",
  "key27": "36Hgjmz4Wwm5gXVRjtNiWTsztzvtEF9UxVjHpHZpDmSsN52BvC3sswPy1mr1XnBHWNE3FSRucd3hKEUkbzPVAPPL",
  "key28": "4pU5ytSAEFDmYfEmEtojiCWvMk2MpQGyGGZ3fKqdyzrVJWqQTUEtEo6HNnsGiVfLesB7dZoeA1N4erxJB324Lof5",
  "key29": "2mhT5uSxkVL4B3GeJFPZimCd3QE3LHLiyv8gNpBhVxK8mSzP7K2CGfpqbAbr18Fd9xFxa26qr97EKSBCmzpTaDvv",
  "key30": "3VM8vTBbhnyfauDa6XhiDt6pwS7u2oY2pgnDy93663kcPSq9fXJDmEiKNYCFqX2EdafUATKyLYW12NJBBEaUBuGm",
  "key31": "28dLBaquwJEtvkAnse6RgjYvRm1pyN4TCd6Qcanx9yBRbtSYKVezyt5RjNMrd3QvHWBtfjV5WWhmF8v8of29ExLs",
  "key32": "51DL6mvvTYmTvwfif2RVb8mrf1U8AVDccCPbk2uaj4f3rf5U1aAnENLbEruSyfkdMHo6hNiW7tg8UYnBnGcVtJPE",
  "key33": "3y6quevU4L3zCuFLGnM8Wpin7CeDmzFVUQe9AHNXiPi45ZGB5j7i7WHb1JQVFGzbRBZzG82WRe6A1vpjYwyVUymy",
  "key34": "57EAC7Ru4AEU8q1gZPqwfNUackRH8aPe5X7nBTMmkiEEi5JBFcgXMKDzFbNQHmF5A2y73WZpp9dTAhSm9bpHSisx",
  "key35": "3PPiySxbLVB2BWaGoB8GuWsk8xhurLmsDbXwQzeEPsCiWRm6oJW5LJT4b578hotRAukNbQBmj8PKhtPuZeZ91SJr",
  "key36": "4wc22jxiS4dYtLz6qbHBvthvesvv7zYrEwKxXsREfy6PhLQ9RnBuXjK8a4pbMq6KUnhm6tpiN2DeBu6mXhvkSZxi",
  "key37": "BdtfKnrg7cqBRuBrX9SEKB96JSn6JsenodKKA9PpgK9okTJ54EKPR6D1uCtCEu8jtdmhWT58Lx5j9YDgLBKAKgU",
  "key38": "yadY4U2MgLY4qLV4wk6mdkFvAzhAxmCFgRJZDHmu1c2RjFmzumPWpdfqsUJfVSmGYYAYZ5zr2MWNXh2XvEoUKHE"
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
