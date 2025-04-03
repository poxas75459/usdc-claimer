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
    "28sA5VjpAwT5PXhhh1tSsDk1MXnytTk2J6K7No6cJxx5Hm6q97XqeQCrnSFAezmXseRk77wNgbptSLygcxvvR6tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KpD7tMRJxy7T791mob6BcxaoUoaHmnqr6Qr76pd9YBXkbHLarnCjLJ5UoNXYzh87aNRTYcCotZS38ityavyMgdE",
  "key1": "HiMNvaWPAshDR35cpsnua8cd3c2nMnvMx82EGnHmboHURkV8iudR6B8ouoNCLmZrjpz8EjvdA29d2rgriNKYwWs",
  "key2": "aqqsTK9SNFYpH36DWYvEMZc5jNxm3j9ys72HynzusApzkXZN5SgPLC5fbHiJgp8r3mhyNCdHyrXD928zeUWNqyu",
  "key3": "ZXqEFAsXi63zThZt6gfSMNTyWNSvnxuBZ9HkMjuQTGqiXF5VUfz7iwZN8smW2oR1w6cuWWkpQETrGScRzrGjbJJ",
  "key4": "MGAceR1Jnv1fhcWMGeBALqtDMEQHz9thVoNwfYtHDXQt77bj4AHo4xCmPYQPf9emhsVaVmoPrVsqJgCSKpejXP6",
  "key5": "3eAWgWtp9kzH58pH37nVVjgcWGFsApMW8ubqogSzEDBp9CbK7aT3qF6FmGrq9tGZCdZRiaDUriH3PnpVxfmrFRNv",
  "key6": "26acDNJCxz73eYmYVGTN3ZLayzPsMDz282rdB26QX2DiNc3nijEAm42pEHV1ML5dWwZCqp1EMPswbkw7dp9Fvd5R",
  "key7": "5Awa3AQfg3iyL5cTqpTbxhMmGFYaXqKUCnbEyy8iCktKjJJ8pQy8eUmviqgTky4XdoyoCMJt8v54zGNTHUURbVm2",
  "key8": "38JJLvx7u3UUgfpGC3DdMSZJ7rNEHhm4MPF7qHn3RrwNtfPnnWEit3M8pgLf8VtPVdvpVZRZQFs1sjaNVTqj2YZY",
  "key9": "5s718nyV1hbHrXxS7k58q7n9zHmCCrjw6uv9pJC1aWioFMBffRPLEsR36GE5PX8ZnvUMXDt4RqbmeFjwvT9g44ee",
  "key10": "64TfMyAiCFkTChLYnV8d3aLYdUgKGRVg4eMxWHAVfE9g8pdZgWQjVEeQcMk8fZXRdjEdNNM7duE2x4Qyx7L5UahC",
  "key11": "yx4VY2Lt346jrHbePBayoQGXUt4VYwv3ExsGhibmKxNdAzMp5oyatNQ7BJRKTpKF49iGBVBcvAbfoWsZ32BP4Ny",
  "key12": "3PRxUWrh11bGxHm9Dr4LHEZ9aaXL5eJ8FSh1UmAkbBBpYxkdtnKk34podRTXjZQGXFUbe7fGKJKJdPxWFCqTpg9x",
  "key13": "55C1qHi9Ev7yAkeaeK1TG3HagxUzwympi2FtMHhHkDFyR2XD2AJSNJuRmDb5nk4wLLcJnqjbgvSrKdqqfWkx6P3B",
  "key14": "3waUYzxDVu4VLFDsL6ZtrJdnodTM4Rc9BLCHieriR1n8A389urSShFwchXDWKhyYRxaDDvqAdsd675VcDvkZ6Unx",
  "key15": "3VCny456eqEYJhUZ9BMjhhsuaqbHsutYcivXXPbQSfSQiCt6qv6e8683JVxp5WefUUSuBDFFnLA752THM97mAYeV",
  "key16": "2gQCZZmdc9nxp71v2k7pNgucYwLLEMQCFSZxQuntwgvH392wCBPcqfkVB2yL7KjNErQ8YAGLFZmDpHLEawJCNANo",
  "key17": "4CMBvbmy4URXyFGDBmWXLqeJ4Cf576k1V3tYFNaguVmZgJ3RvZtRsXdRWhM5uvDvuxtEhmhMKWeS4pqUGnBRKoXG",
  "key18": "3thdYmRWV73EZNXEW3TQXmv3fi6KACXkDL3BBmnDfP1MDriFP5z5i8HP8jsujwdy8UgXCc186troFPfcQ6Etwhnv",
  "key19": "ff6BnRZJdgRunWnZVa8wiA3mu3jVWUNQw8RwouZin1YoFCuk5JYhUDA9mr9ygFqLm3tXpDB7EofqZ3eb7J9myt3",
  "key20": "6dxcEW6jRQJtY3DbXmfqKQNK7YeH6Y5AqW9jjA9hshWpanGNHfYPaQp3H8FdmvMzFNJerELyB8LFD4HrxacMKAX",
  "key21": "2Qb9JpkNqffAw7KtHnYAo5m58Qu4WmKquexK2NyarAYAySZUeo8nYzCfoBeMi86fhLDJHwdosfYYceioSpScpHCR",
  "key22": "3LU7CAXTekcDG1cQNTkyapmWJp9fXCUrJZpqsTscabEwKTmGCRoqdGRhVwZuEzNy4136XwZmT1J7Ap8UhZYQWtdn",
  "key23": "4owMXyMtzioM2pZA2HpdLJiMruNA7Pm2cUKFyX76sGVQqx7SaDfww8A4PhCKA3DzHotu9PPLLGcCEAVVBG32K2TL",
  "key24": "26N7rfjMTqgMFCn4GSgSKUMNsf38hpGyCaph3R2CoWJcc4vY4YGr5e4uRhJfqLjVBpjkswwoaBV1tMoChpNfFqSQ",
  "key25": "5LxrVMtnkfPQVm9CJE3Eg8eYCg8qYa2EmKpdGyvhhwvonyV9XkF7XMFzuGxoTvCJhAvbEcBxSgWu6k5gXm1Cerzh",
  "key26": "24ytVr5M9nLz7fnojpYhRv6ndQWVyrRxCPiJXmqzz1ki18dXDTqYhsEhXa3NccUj1yFkUM7QzGv8vZF1nqVk3N3L"
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
