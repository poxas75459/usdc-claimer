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
    "5sjCuZMExAwzZFeVicqoZPXpdnx8ZA7TH6XhCmWTAFuYfpwsAJEpACLcSqQVCQfuQRMyck7mroVukNSqnNuE8dZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSqF26GoPXXmunPC8qYGuu3DHRb8htPr6mCvMmiZ83unLHSWKRupzgDfT9fNxvRYUcrZnm9uzrzm3DEqrYT9m9B",
  "key1": "5HbLwv9w2isqDRqH61RKGx4qEC3uyw8QScMVKMYsKcX1brSwM2T8y37dCFF9hKfFeeHehRx8gCxZ4wowa9UGpgHr",
  "key2": "5T2kdv316mp5Q48YB1K91EASwhzjEEymarwhaWdAYJpSywQwCCtYLSqhZhoFpTS9NfSfKyCMdYBrBfXZ3fM1WJQ2",
  "key3": "24R4DKyDkAp26f8uRZPRoKFnkEWfC7Sjf6Z985s6sZgWtt7sTfnyjfLKPhU64ucibMkfBE6ZCH1PQfjo7RXsQrHs",
  "key4": "2mPRDPLD4VDudjeKchev1xHbhYsbF53GSETXvkknGxARUd2JRTdJXzsEasuhMzyZC82fTDbATLPcj3qs9L1fdHEX",
  "key5": "4GrXcqnVYQ8CadeFKMKJLPXwNPMNpsrmsEp73g3uP7Y7nxP6CoJajvcNMbv89MXN5NrTWuh93cdmRcWSZDmT4Srb",
  "key6": "4Ng5wpsuGkEHUgMaehweViv5VRFPZh5axYreSaxrJqEH4SUnnjqrooFxinRoiYMWMsnxpr3Fph5Mduye1dvQps6N",
  "key7": "4dkcBYdPhFuDKQQqbyBz5BjCgUXkAUUhKUGXQoMDewd9SNExamqfQFDkMEj54Bbsz8BAtHLHnojYChcRZK5dZXaB",
  "key8": "5x7LU6RYRCCXD1To75bqVxPS1N8keyuVVYoXkngvD1XnqkHWFdKtrGjusXG6M9iVT8imdys4viV9bQXVs2dCwWkQ",
  "key9": "4tYmGQPx6tKJrXNFQ4P67e4qzMtTUEqRGTRqQMHg9qHypQJwREkBYk8X7RL4KKD3VLrVnWQWxZZiEXkmNjRPvZGy",
  "key10": "4SfviGqNe1xpL4ruTmoMFtrcwgrMyHKEQSPRVyH5rj4hKdbdE7wqoY5yg22hyAAFFcHGHf4YJkjAEWxFxapEQ2cz",
  "key11": "5YgN7Zu5TSFKZt6s1h2TCCWMtuTw3DjHazzqAmP6aFMi9UbmwRi5q7wv9ER6ftscbUojGgiAW93S9cYbyh6hJGyx",
  "key12": "y6fAWtD2zwtiD4V2yDjdadrJDyV8iMAZRECL1kDtL7FRhbqxWkZEAQYV5ZAkKJZ8rD5B78zqABuPm3TdPAXwnH2",
  "key13": "dGiYriLMboXcbVQYKZJENWCAbPRs2wx4HYAWznuWF8Kn5GhD7UPYUeDWHR7G3xY3eJg5eUz8mf5jwpqzKywWyvu",
  "key14": "qbBTSWZ2jtzzDRxypPZ4hDkt48QsKbnd7ECvavW64vbKbEDwufxKDvu1vFg5p1NfkGHbVjY1ccg1ao9EzmAXpYy",
  "key15": "5PRKBzWdm8JeJjsa1wQe8hFxFGGhLNchJvCFUQsQ3DiYNTfELAnbR23XTPn3KU1B1UgvWVT9aDhk8fCtowZcYDQZ",
  "key16": "2iYbKnDTGMQa892dz7zP4KfgPyj16qovZXUTubRBdg9oHEadqNSWNZ4nz1j3uXnkqMf1p8rKeoNfRL7v4CqBgKrX",
  "key17": "4aHN8Z1wArcSiF3z3UJsAKvTV6wjGYKExvFCUngmmEpcvdthy1JoZCeFrW8iHoHsoNktK3N49obLChV4LotgsAN6",
  "key18": "WriyT4fB6JYckHj5zZQk6Ddg8NDFMYW4bqreCBSc9wRY6T22wt1zje6ceuT2Wmk5csAbKuQECCiNAGUSJ62XzdY",
  "key19": "2TT3gkaP7vQ6v3UjMViSn6xP12QaJ3vGLuy2Fhxk4mVtecyyXHVffxjgVKeUkdyn66PW9HhdMg7dTqazJ74VSYFr",
  "key20": "4Sp6doBw1bbharYAFFXPTdcpyMqQm3YjBA8f2R2JErexN7Fu79dW3ZeZrGBquDtknu1PG6uVHasT9iXsPJWcrJx4",
  "key21": "3k3mbefwH68RRy4gVUSfikpkuEwvkb5t7tikwST4SfXSZGrBLtSUpMyZyAsRPYKRz49LfYUcagrLcNwLvbvmcXHa",
  "key22": "2XSqEhQZeyDdj3k4CBYb7dQEnWzng5EjfmSTZ7n3SkunrGT32gsYDTW2U5mrndmab3m3k32Ec9GWUhDg3ijNSXAe",
  "key23": "3BF4gQaVVHZyY4at1XgrigcFHizKvym2zDTmJdn1fnPNEVDW84qn6MqNq85zRcULCaSXAWNrhWJ5fx2NRKaBxiCE",
  "key24": "WAJ86VUM45j4gkhBcaCqbsdCYsqeDA7pHck3xujPnu5dfBWmqdDsSbkiax2hg276NKYyJTk38vpX3wNgovgSBKa",
  "key25": "2o2X1raYuwRfQfovwyWhHR3xXMRtYtsdZMQSCYEdguEJz4dy1FJfTuPyGBjUaM7yfTydaHDsitkYHZ3fjvzYeZsW",
  "key26": "2FRGdToLg6CSYsDHAy3qbm7FkfPYwbjkBjD8nEa45WsHW7Piz6qVkGQML4FfQ5E69em5B2bAj3n8osoQhNtbpFcJ",
  "key27": "2DjtpYAag3ULG49fg9gk5a4455V7tcs2xd9RVziSfdR8277u6YGVUZco9TtM1SMYsH9UskxbsPEfziE4QBQnk6RR",
  "key28": "2x7e7YWA6wyaG4YRwXDQANoQxZKbS4FCmcPVdcSDiy2YYi6DDBycwDesemBe6VTGdzQtqsGxUzYbQCgQoZoe6MvP"
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
