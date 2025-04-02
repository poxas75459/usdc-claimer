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
    "4GXFN2hYULFRhemHfuyEqUSgC6ncYWpH7hf5GvbJeYWYbABjqVUpKpAM41HAS7tAuiSjzJw8T9skynV5yRjSFi4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XL82S1Yyoa8AsLmvaF8DbCbrg36N6ayz26HaQLbss9yr7CnCyneRKcckMf1qW7SzYRqwJ9x5E56wosY3gPQRyUW",
  "key1": "f6ZozCCgMyNupSFhsWN5DnPa5E4FnqJdH7WUHKyAMwxwepNyKj8Z5R8oGi3c2UZNPrF1FMN3htZUYdquaJAE1KD",
  "key2": "5VjpyMap2VtfXom6bviMYZaEyVPH9QausQsG2GZAkdJ4Cswpesk4gTc39o9MVKDmtFjrQMzMW1uP3gXqxuWjdFnW",
  "key3": "3DQUuA8vsuv21fGYwqf3J1MbRGGS4baorstShqwLqikUVXaVKuR41Fb9P57Xy7hsBRFbJx8MM99Sbf7nLAhBSWcj",
  "key4": "5AGiojVnAorG44PzdF5X51c7NNFWPS7vqvAMsHdzQXHd3qrtkxdo2L4cYeQxaHCLA4Zty8ifvkvdi3eNWqSjL4BH",
  "key5": "4tT1ww931BXY6XuojtcbCJF9ZxDbVxQ1SjtENdxBqp9vKkmtAcYeHkMTgaxv3fNoUpmKUKEfVyHsmBpbaA9rkQyN",
  "key6": "4ZZs8rWUQ2f7MeLQHNxYgchNHLG59mHmoL37Miu9ewk93v33e9hXh3Rr3q3svCtzDAiMPrGMZhUsw7juoBsbjufG",
  "key7": "4QVfXARL5DvwLGMQ44mTRajXpm6dUnaUZVdqJYB1CR14mZFS6EQvauHSUkHLgnY4cbhMNh24iWfEBLSJQGGFhUh4",
  "key8": "563hEToKTMFgWJzVwRBUHmzaw2R9kAZdAti55Bh249icDmnyDLKpTgY93Xy9rLBitLMg84WNE7Xjk7if5C5mGXfq",
  "key9": "sYYXuiCcFeENpHKso2WiHwqH8wGu5D3bf1F5MDhTqku6JEpDE5W92bpB8ckCH5qdF2adPKzfMo9K24RZPxV5xjj",
  "key10": "65JSZfCKaBFGCVaFf3hLRVD5FZnpusQBDZKanJV93X938aHmh4mCX9Zne1Vp5NjP1wTH3tJUomNUBC8fsoPJgHfh",
  "key11": "5vmMkKwR6AYPT893XzFoCPhaC1pbNoHcGDhHLqDBA76uWEuyrSg9uAPagjt3Cu2fKE1ovDfBd1fCDxwpM1FtHTyt",
  "key12": "2xqD1FkJGqCMDZ5zfUb7zaEaA4iCvksqzEXXchQmWZJFPduomeqnmRh6UpUb1fH5jiBLJ2Rtw7ejgKmSKGTQVRRG",
  "key13": "5VeVGNxq6rosLZeAC5dZn59KJbfYJLY4NVBpfWZiXoC8hQoGKgZ81Sa97aZMP2xgCYbnxA5Ex9htao17cBwWHLx3",
  "key14": "4xMrJpzuBah8kKujr23DfnXDJPQv6msLfa14U3BayHGj8R9BRrHeBrioXA77pmTcJDXWAakYyYVvaA7PhwcW35DL",
  "key15": "3yeCCBGS2pZzQsr188dDQYcCB35oLsCifHbme7nZbzEstsBsJGxJPiG2ApsQvj1byXegMaJ2nvzXqWMjbdweGVem",
  "key16": "2a2p6EUtDYGKjrC9Jjn737xuiYZCEh25Z27dKvDkg7wK7BYHCsdyGWeJ2TAn1t9yBFVuAP4Ky7K4PywZkZTnueZ4",
  "key17": "5mm2fuSv4C25X9yPnRMLY8Yqrw1StaPfLbUQvgYHGsTpzApaxcCeDoxVpgKgR2M1knp9AEAkuZjCdLyPsd5YN5JC",
  "key18": "2e6ubS2eC3F7Tbeww8z4P2GU6fq65UixjWLrjyWsCirCaqytb6j6NyboEtJR14qejDLuqpb1kX5ccRPzSaHowbQw",
  "key19": "2gP7JTuWAmZDf2JM3Sy3RVEHCV7PuAg63nB4VaxS4iXZohd9JefUMwKeQ7kR86mZSv5Xnw38V3bm7zneEd9ZDee4",
  "key20": "5Wr8GrHdBu5o33HYPsQDgHfbfAuraZGa3bVKmmvFKcfcCDDdxxF3V6Ef2ijpqaXCR3YJNV8yt4yWeYREZiVmzvE4",
  "key21": "wmUe61L12ynF4wBuoBC6Nz1S28cbTHCrfs1KQYjBr6XnNt3EUhDX8YnVKc54PasWkkzpfL3vbXXxY3CXFy1urXu",
  "key22": "2agJBbYt3ZhKsUcF5T8EZ7GGcWSh5LiUZYqiaBvyWuVdb4HNTZ9MjvjjGoFV5H5YwE52Y6gsmmkTJkGeQyfUpXZA",
  "key23": "5SNAHC8m4Jaz5ShFBnef2Xk2Fi597ZyXkvxCjZaCXAvBbYQLr3uJSzUhEvv8f8QUoDotMszKvTSykmy7xvhqFwrj",
  "key24": "2XJwr76eQpFhgoGGQncbMD3njrgvK6C7drjZPWsHV4Kvo1kq3rgnM86mdLSrdpJnaYrvDHtuXrS83eDNDsAinrud",
  "key25": "2thwoQooiKJ7zasCMFxKkeB9cry6QnW5sZJfMSqHMM9W5Xm3QwaBNUkL7fVcr2xiosAtJswXBSDXXdhqvsXVD6Hq",
  "key26": "67aywgVtXVK6eTsD6tq9tPP1DSrAcMckjDZx7LNhX4FhBvEXRisuratf8nYHHPV5xYvAv3mAgy2c1G4jKairMPvT",
  "key27": "5ys8EDQzxevEDa1UjnkeGoEtKmLBF7R5d487nkaa6yW8gmk2RPTdmuqnb8qP95TomGX95cjWGkC3pN5Pvkt17omY",
  "key28": "4XZqcZ5XdAnHVtmj7kKXTGZZas3HRGLvuWszDNWhbi6B6orYxSBD1wimpRxGMfPC7Je1rgQHXJXqaZMYxC993X5m",
  "key29": "GdFQqL36z6YavvdUTgG1Z83JHXV6f5c1u9gt256ntJT1Dm4Zh1RWH2gaQuwxRdVCge8oyAuQM7mRmrcodmQ4i2j",
  "key30": "5GUYy3HjrpAveWJoxKigc8sBycmQ6gpoErRASNzyn2v2aiEzFKwMUhf7Sb5g4TRmvSg7jp164HepaueBey4PMDtz",
  "key31": "5b5yMMAcA4C2qYYb1XKPwHi6n6NAjauMQz9VJmHBWPq7ZpbgkaRRDQWQiYokLkiB7kRfQhCqTmyyEfAYZxH2zxcu",
  "key32": "3r5sY94BC23fbpnWPZ62dKU1boYfaYGMtyvYw5WeDLfpTuvniXDEtswEMcfgYBrHrzmhA5y6NhHX2LWkYLJ8WpQp",
  "key33": "2GD8ePHvK5qigJb92BnhzZpJC414vW9tzHaG42CrEDYHpsZzMapij9wYFkruqh2TNKuBSWXxFftiH7iLpaVb51fc",
  "key34": "5WPSZ7gWdiq7gqQSVVrdJTxTzkNDQFSFZBSrLiu1Rh43JqgNECifrdV6thC7Pi2jXudrtkEjTQnjtUZxxnnd1Z4D",
  "key35": "5eg35UbbHVedZhYnNbtb9hddwf6QXRpjju26U7byHjxBS57cx16auXadMaKmaWsJGFeNGafqUfcMD9o7nyb3juj8",
  "key36": "3dAnMV69HpxyjKvrYUZ5J3iRDzydGPT5A76cpJJPBZumZK8wtZoCaSJ7oGLqqPCKQVehXf8KtLJTmoRht6vhwnWe",
  "key37": "5KBD48AmArRUF3jw1WQTbpfAPMu3UBTNTZXoV486SqsAfXBnsdgFgKH7xMDbXrTKH4a7NUpS3MKiQQKSQt9v1snh",
  "key38": "4WXWCZ6tvktDk8BuoA3tYy2DPC88joKrBYhXoTMoCqSc33viUxHfs1zRr3KmsiyAszC8amSseX8qcSFVRptXY1EB"
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
