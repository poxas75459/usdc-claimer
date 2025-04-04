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
    "5Fo9GzEd8J84ALVuWHtHTfCNEgQVrsSKqV8PRVgZeVhixdv1N5ihVzXEnqbYt4LkH8cULb8dNa4fHd5stq3GTdP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C2sNjs5hQZphabQUYSoBMFihpeXvQQ1nzmLbvJDW9m1stYjsBVj4LNPtJYPjzfRo6aoYL53A2WhwA8GcjrWWQBJ",
  "key1": "Yus2pkpdbkpuWy1XNHgK1G6eEancyM66NnBepPy3fgUBz4KFX5hhnZrKzZ89mHLqW7iTctuPsK2c9mjAipguW9A",
  "key2": "2fzvvDzdJgEW2pxQ8DSo6oUHETnWZ593ZKsosiSSKb5yHAGQayWm89zHh6vn9x6VaU7RUefEkLwBHAGPd4idP47b",
  "key3": "4YhZpz8dcHzuKdALoYEE7fkM8WAjARBg9HJBautJ7LmgSsk2pzbTVMZWUbEUBBfCmsQMWVRU8LBt7wVnVn5Y1gwY",
  "key4": "gyi6nRQuyhXMrbT9nzzoa7VbuC6UbkgUdBXicThb9b4FYZAgC99XbF8AiWhvUjfhGFCk3MAC3GCwYHr9WdAfHjr",
  "key5": "5U3DUtSCXbM7RZnAyqnn3HSUPnrwzGwmW7xMie5TT6vA8KjJ4AFv6yjknctYAVHCUGdNMmF2FAYDknoT2ZYZCbXh",
  "key6": "23ie3iDYQS6D5Jrf1Li9U3BRthqXUuZmjFA9dxUyNY4bJhD1uBs2LM7R4x7UxmnEHH5iejkAUpJWBcgbgVj4norE",
  "key7": "4PNoiB2X4aAyXvEzABdJLh28PHj75srjgmq9YRyjwWTTXCmaTK2zRGED9m1gpvNjKKKrJLqpia2KSNWifaBrpjBK",
  "key8": "5i6oDeEUckadcDiYb8sW1qaAqef7LxSw2U4WDirXJi2159EsimDS6ef13aQJNH21bRgNBVbyXXSNZnAEy5dFbiCq",
  "key9": "4dwnbaqNUxZHJPLvz45UNKSLL5LghxjpPvMTmWyRbbiW21YsVkTh1fpKK7HjSwXeFKuFpUPoYiWKVSE8ZapPccqs",
  "key10": "4yxrC9Y66E5qivhpbjY5Y1JmqwbmViEQsYw5UWmhvxiS1AuxgERKsJt2xYkDfn37yciAGTUxbHTQmp24tcZVbrDv",
  "key11": "3ukho3CDHXCFm9g1413cEfy8LL5TxL8HaDND5pS7SiZiFniZoRYSkYR9RUQxz2832SPtq6emav9sBE6dp51gH1ah",
  "key12": "kLrHnqf6PQZL845Gvd4bCdRpb1vEbdkUPjABvpjTS63uXr5K6ToQYzY4E43wti9HJXXagXMmcMQxshEwWJ8iKQc",
  "key13": "8XM4kZKN7ZrW4R1cfo3mZGBb7htkVbDZNoHvpWgpLK2CaUQXGx2oCgRnKUmA3Qy6nFBHygDFWHhNwyuFzZFkLMQ",
  "key14": "d7UWfEhbi4M48dqCt6zRe3qNxg2wgMEA2TtNWaiHnPajJR6s4qz4BdKqi9Kz9WhqubUUuwmoBbURrwqRKWJux1b",
  "key15": "39G1cdfGD1dPw4hyopbQ5vQoYF4fn9EW4dwjqYNjmdYupUpvz3ZqpNrEp6U58c8fipV6doK4VUCYPvd1b2b2BWWZ",
  "key16": "2X4Hd81Rasa7mmATtigg1N8ryh1mbssjz5jSxvxWQ6guBMnnmeZzU1HAAWmRmq6PxuhP6whHC7uJRgTeWTNM2oUG",
  "key17": "4ZqXzJJVxbN5JkvQcwnB17DYvJ8SPA4owdfE3T9uT1m2Y1bQUNMjta4vPWWaqACW119dVhnnyYKWwdtS8paAxCcD",
  "key18": "2kTzBPQLqBvRAZaRrhFzrXVcn2UZNJg8Cv1aL61CKBuUTahpAx21dig4A6ouyJHfD8JpBoMUjqDHQdZRA7cKnESQ",
  "key19": "5KVZu4L4NJ1DhBaLtQbgGXa3h3HH2numkjYZYKsFA77kLiYSaNLjpuqhQjT8MD9e9ZZaNXLTVPEbYQYYUUQ5LExH",
  "key20": "4KbX6JgMyx8tCnekuojLqt2CGaE4Jw5WufNRkjemLvy164qCW6ADyd9uBoYAqSzvM52TWNchYzQFPZ9TabSLFiys",
  "key21": "4ovGVAMDJ8BXwrDaRrJFeXp8cHN1xx7TpoMW46mtJFWs5jUtYSTD55bNJM6xUu1H5M11skTqi9xcrzkmz3ofAzTk",
  "key22": "3Htks7JZVtnE2xXUJRHXiGuWP5kzmsWJbFuMpqs3e4Yixmy6ASYrqELVk1aRsUR4CNueV8xmwVkxD1sTnysKrdyY",
  "key23": "2gP5dy9aQC3kkCYRMCXwdaLLxqiHnMy5FJtuEBdUNsZkMpSZiAZmvjSHKFwq3ZVfu2ixUTts4Ez77xC8LLQc7G6M",
  "key24": "45g1kEYjof7Sd6464anZaWWvjHXReaoxf5mNc7ag7XRga1HmL19iVSRZZs6mBy5H1zxtYybsZaFk7Wfamdw5BtQB",
  "key25": "2TRJYx3tHT9kpro1DX58VG9Z2eHfJnL5cknLqmRPyb7tMRrvNoYB2WLVZdYBEwvqBi33SLfNq7pgkhGufG7SiR2R"
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
