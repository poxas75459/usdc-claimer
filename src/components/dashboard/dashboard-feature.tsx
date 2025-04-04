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
    "4YPeWWoHSo3ZduAFXMe3nJN3puAHmAcETnjDs349TFie6LVvbkrJMSD1PeF8Hy9j7obGsLFM2Vshf1uXeGvgK2gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WXYk9SyinUii66xcfdUG3H1vGfcdQZpabJBLWJdBPHPdBfa6QZ5EFFXs6zyFYad1YzyYwqryTxXcHGAihvEAz5c",
  "key1": "39SrQJ8VtZbA3R8fTyerZ4CmCjGT78VEszjeWL74YPYBUr3NZERP8qLMTeUshcutyDvAFggcUhkqJQrnSxXNsixa",
  "key2": "MvWPSzREVQZFNbqK5DYGbPFcqNYkQhbCYktvxUy7Jb2DTxnnPAGUCagQCKUQ5QdsdKtVfv3FnRtPNpAAfh6BaWx",
  "key3": "2pjeZpY9bjHJMFBBWWUytghhk9wdFtRmXCS4cyz9SVxhLkDse6PqAMN6CeDU3A6VCFdfQvrg7xupBzRrMVunGKek",
  "key4": "4hKqNHEjZ13ykVEw7MvC6bnkMgRzBGpLWtn3pyv9hzzBnq5SLFAMPfE6ZdAR7VbZbJtQp69H6L72vXrhzQ7oe5XL",
  "key5": "3PkvJQNZPitE6pR7Ten3Xno166L5UgfFPVWZqw3LP3sRaZ6Rvax8y2gVuXxsSUh6JDCMY1hizXSrjrgS34kEbJJe",
  "key6": "tdA5cDu1Mj43U4a8znBpRuKQvyLpE7H7B4AfLgQ34q5s1uB7MNr2DKcfzDMnNvLD65LQqCrPA4czx3oJECsCcmL",
  "key7": "ufe9dKAgTRBxz45qpNHH4PHNQmJXu59LeVPZtiJQurQ4ioLhoaXrNgL3MPtdRaFHN7PJ9SfgmFp6h46onB9dYZ9",
  "key8": "41QzmMb5yy9fzbJLp39FB6DA6XAKp59KsM7sAUQwGxwDFhox4VrDqyYQnRNzX18jLZ2yJY3FSgFACrGrGYipFNyi",
  "key9": "3aw6yXsy7RLQdHt6pApEXMBfT5RBi2TVJoG4aNPzX84ioxUuXhAruqPePgd6vWLSWs9JVLCq8qCPA6hsT8nF3nNS",
  "key10": "2149wDcfEfnt36H3qDWnc64aj6Z7HA66PRPRddcqnbJztnSeGodxp8394QkjFXQKNQpn2WJkDqXbErDgMbV6vAqD",
  "key11": "5VinfrexduRxYY4AAGpqpXLtAJcfR6XRx3YHNReBdyznjoDWBoouuCQ9Fyg5G41MaeAqM71SaF641TnYCpCAbued",
  "key12": "412Utf1vXHNk7udTgTnHMnMrr97fbSgLRmEfUsesKGGKAcACBNof9Q28qs51ADUFJ5bXtRxiVZgD7gKYeVFP3JNg",
  "key13": "5yqdNzXC37rps9JepBq4YccHRushe5fuMDLc6EqUKPcu8tLr2vVouc25aGtuYy6RVZwAR1iKtfQDoTRn2TCfA6Cv",
  "key14": "36qSko6Gr75VvBg3q8HmQRnWZZRyzFaFpdc3jJPdFuGZgvyjnY7EuZ3hb8DtErNBZ9tCP79gr83FKGQFCN3Qe38f",
  "key15": "5yLuEkk4zSQmQcjAnwoKDLmkA9aDyMFdKvJAe65WMZcu8tqiNM6KzfWnCcCjXBMBXvfnsvCHroipvYqaxKh96V2g",
  "key16": "3u8NLeXkhdS3qmoSvZAMaY9aFFFiEC8ZG66Pi3H9mWrYShAHC2iU6cih4p4MR2n67D83fBjtdyN4ubuDYHmqz1ep",
  "key17": "3i77Ecrs2TNnEqZ6RXXHAwwiSzHohSP2eUH4DKbSnGmJXQPGQaiygp4NrmzspbS93YL9zrUPBtmxnZHuPwkU3UK3",
  "key18": "4diDe8qJSu2connDmqciuVz45B7dum52SJgQ3vvW9dHE8kfA8J2n4nsT9jiqTUWnkDbXfuSoXMcmohGZRs4aeRaw",
  "key19": "5RWHbiY3cFgrMM9gYz4wLY6ZBsyxanrnqBUya2gT2PiPc9H4ey2d8cr5cJ4JRX3FxbhRyHSzNZdS5oRpsmFiUUm8",
  "key20": "Ex52Hh7fkcbHqUFE8xs834jG2SM1kiTxWmUjkVKPiCDLV43GqbwbytPnXViQDTE9BUHrK8TYxgvdV8E7uPtS3f1",
  "key21": "vtNDVtnkUSJU4C7EiJdARBiLYFATiAm71TCA9ouML4KXx75M85vdhNi41bycM22cRZwB74dDMC4ggVsAVY8gqLJ",
  "key22": "32UFU5Anq3SMd8GKe6Mr8KSP8KG1iCDc3S79ujQUwP5k5wwjFtYotSwfHbJ3pTcx7c9wHWSQL5WGhXQkdRXR3DdS",
  "key23": "2KCsv8jc1f8utUEDau8pctT2KrcMRNRws2ZejQpCq2johNkjYDiBmtUowpoyC8K8DGgaMEG6iELxzw6qZfLCQNMK",
  "key24": "2dLCdTQi2P2LUSvmWRENbuJkasJyLjbU2AEZoZKHXxAtJAozR7dWfyLDDkXpBHbTNwUjRq1eURqjtdeQK7jMxK9W",
  "key25": "3Qx5JnbrwrGA9kGBvUXvQbkv3HwQmx6cEvUxVXECtg31UDbJ8gJ3EaEub85kC8tQ2qskRGkuSjJs6fdmjErGDoGU",
  "key26": "4isFpDhqPVGqr7LAGWBg41eybMQex7u26y3QyyD2hDoxf4qMAHmpkcSccz6qbm7fowEuqUSRk31SXDdERqQCA8tU",
  "key27": "3EMyQUr8vR1jAmhaVvt5ULacKe8eMprpxLQckLDzsUXt5piVYfNw3utUZgTmwG8u3MWASSQGVvS9JkCM4txpMkb6",
  "key28": "2SicdLdQ1MgZ6VBa3vSAn9d4Egn8V3xv5R66RhUifYHk93SR2KdrSCPjyBYWz3E34PwjvWaWh9qqnrG3RXrEz5NE",
  "key29": "5HNAV4aA3ebMjXmHFQu24x6h1xvk5h16sQgQNpUHLub7dmQiG4sjypRZ8Kwgma6faNncx7wkRJ9geLqEwcGoXmcA",
  "key30": "KfjQnVpB3puKYBod7qyLKWv5HTANgMqNdQpU5G3ynJ94xrcDquVJrxEpxMS3JmxBvZUzr1gBfGr1Z12v5pXC4Fg"
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
