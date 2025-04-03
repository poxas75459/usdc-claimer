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
    "28DUZ6jNtVoLezigAFgiMNLE9iiqp9dHA3ikpsBzw7kKZm2js8dFkRon5zayAWD7BrvXqSTf5zotYTTQxskRGtUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39CTrX26x2EyuzHNdauidK5z5gSaZHwNC2UDieJX59uvK81V4A4WTNehXA7yqTfoHNFFcWyQScUwg8HRK41jH4Fa",
  "key1": "3WiCiDeBhYzxxiZWDPboU3nduGkYgJM2cyjRPUdZ6sF15DaXBXPCDY4keeSxwgVuNcnTpVCMmJ3AeJNSfAu7KDtH",
  "key2": "5M8VvPMErLUJqDaJ3iysvNws4CVgxEYZ79FS7uW6Y8MijKuUF8yHoKPbZy47QHdfUMqAApv1YM6ggvoDqVARnuy4",
  "key3": "449iH19aBDZLhWWgjyfYP6oZgJnHyqHcCJwuUPz67fYhtW7i997Zh5qq9Se2bUfCNFg5msWs5MF8UMiVhZpq7ovj",
  "key4": "2ehPU3EwBHgTC1kCPxhhwENof7uU7ZdMy4xiw8nHZvkbtGp3seiqTE7S2Yaqhkr1TcPaMmaVdMP1tgSWqHSD9jJx",
  "key5": "5LabmWLPZ76vxHfSVmiVquXPJ8wrYgXpFrH7naMQE6x4PAhfzaJCxYMmGkzeDRxKX81VgwwJzZNr9BQbATYDH7rU",
  "key6": "4D6aCqkRoLZi1M1Ddso1ajXhE4uXUhEeWEEGPBAUb4d54CNtFqjxfNgBJK7tto9qDYbmbcx7wdRANPqjzfdosV8y",
  "key7": "2cHoRNCtMN3jHK881wsHWUfFPQdAY5dFv7ZeT69As5aibo6rVyZAVGrKGWBLocijt3wMvaz7DAGV1LMQVgEyB4sx",
  "key8": "2vqHUi68ooJfmFwqA5cy9SMy2LkJowy9B8iUSD3hNmUBJzCY7WoeNJFsF9X42EkJ5CbU6bG2B2MMpcrway2Ni2JB",
  "key9": "5Zg7aEzVazSDQ8zMis8SGijw2mHb6Sh3iMCpLP8gbsHsQpWZHDqxyqryFzUR85idZCF51u6km6if3dFVVaLNouPG",
  "key10": "2tAAAVJjnFZtKbAfEuLXHRZ5D8HaHLkPsRaT6YmjJvUQ5wFmVCkSMKTaaa45wwAkAeRHpZXQnB3CbmpECNBwLcCt",
  "key11": "4oVMvhHESPYyaMSpvtqcug3ZHUFHjAFzoSviuUVa8VTSgAGKpjVduwwUcaD5Q6FBmWqCjMMZmSRFFxng4CuXpZkG",
  "key12": "4vCbjiQCNY4PvQ4NvcndkucNzVjMGZxsjaZeAw97ZeXmgQtyEhuxmdiQMYDA5AwXYGVS46VxYrZgvzWTDicy27M8",
  "key13": "24F7dxMCPX48Z2UABEKjBp9xeWjpBiviQaeAQJHVgvE4h4rp7Qk4KRKp7yYcJGRvjiMYGmowPjhEQB725PtuyN3X",
  "key14": "5hYgcQiNWXhyDE1cTLgJn52zve5dgy3eJhRJiW2DpMfXobzSNpGTdQcYU3rYXwtduJzokDPAywj9XwpAiQVGtv8z",
  "key15": "2ySgLFPfxr21jSM2hEKn3dJPi5b7pF3dJoFfkU8yKqEKGBr4nbsAEKJEounXR9WJdqvKsqH9BCaXGqo4yJ5T96jn",
  "key16": "3wqoq3PrGQQGCxAtyftGwwhakHSS2erAR9CKNjEatHirXVKqyHjf2Lf1yk5e9kovEmxqV6jovFUvjTx6Z7fT5TpD",
  "key17": "ycd1Mu9TFeKDTA8N268mBMoytquesgguyagsTN1kpGpcZ9GseQUaZNv9YzwsmxH1tR26iyJPYt4BA7NnFLbPuJa",
  "key18": "2arKqT31fbi3PwqBy9HLAz92D7YjP49r5zRuUoDy8TZbMqCKkwkdS25nNrQM9w8Tdzb17ev3XDZH7wF2PgUgMR9E",
  "key19": "pXihK9mx1pDQxS9g8toPHUHnpFzskwzk2S5jqgdaeYcnyozb9aK3i1S7dyJFJszUd8YdKmvZZnCooGLLsywppdS",
  "key20": "539bDh9H6aiVvokQ64kTbFFPaFNgaHk8duSVWzirqyktSoLEh39cowna6WcKtT9kGM6mP2Sbt4bMsE2hNu7DTxUb",
  "key21": "4nHcMYxBfkEQgXRTD6xbh7Fdm8g9uHRhCmRK4f9oWrXV3hNDUrKP2qhajrXo8KNnoGrMAXSxKfX3rheRYauoFfxi",
  "key22": "HE1xCYLqKqEe1j2nqC5npVctqsWs4FM84S3gXZ13k2B1k33Lrh1aKPKoTPpUNeN2XLhkrsbZYfaYauoEYDmqmtR",
  "key23": "3vFfdoUqQceGJiSh11QWEEzDkpVye9GG9j9hVpxsaaJ9WSbAQfL46xcg9wrrpBQiYXvbXqW9SMR6AmxVJJLF2aKb",
  "key24": "4RCTVyWQyvqnBwJzc6658FVMKkqbFdsza9Fdu5Uy4BZJ4ubKDY4QTjUi6d2TwiXftQ74zxtZD1HuUj8d5Zg8iTXR",
  "key25": "nNFfM7Fuy8fLYtya6xZWhhLVzWtKmNZmxpgpFhzFY2b7J5K8aWyV383UqXTr6k5E1744G7uu7R4Kac82PRX7rmt",
  "key26": "3j7RYy2BMS6NyEhnH9bRkovJDE3wjPJZyPuNmkxm2xk1Kd7cY3HhVS9KChfyx69npLuAL4eeAFt7ujoWJyKL748s",
  "key27": "41AUUXTBhQWiwXe9aZvdnMPgr4d8oQBoYi41A8KCBGQutfJ5K5QyvXMEz4zEFHF2U2Anmx6G5NP8GXsHTDjf1Du8",
  "key28": "466qmnbWCxHCGKevQNLr3t57oZTUPAssdsU6ykkP3rWRJ8bdF99ySxCK5a2FWrdiwZcVdGVyBFmvGADadqWUNhGu"
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
