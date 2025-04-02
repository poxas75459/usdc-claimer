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
    "4gggjx9Ng2ujzZsKHdrrPXZzk1MaGJRixc1HnBmNRAYpcLPoaZrru21UbWGz1anirqzUF5bmPRbYWtjoWUd9HJjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hxpq8rBi2nyeMv5uFUD9tT6J1UCtyanSkEJncwoCFFcyEqUTZ7GMQSwM52iUiPywAr6PGZPJX8dL51sktgjgK2N",
  "key1": "55hqKoXiFg8MHuxM6kzdAQYNz2gT5wHdNr19RFCk9gg2gKc6Zv2iPhbbNfEpRAvDF16fj24tJFTE1KCDyhYSyhAN",
  "key2": "28AiEb8BSNT73eNzJoxE3goycNozfku8AWSmhLHJE1syh4HwQfHnTZ4c4ZWs38ArBqQRn6M7gMbQJrddwNCb6WJo",
  "key3": "3ZDfjR848A48zdKzoT9ybdUVU1zep8h5cV2a7x7RFWSTww7K8YGibQYT6GdUFXnu2TZx84HiqT9eb3FTnLVYX37C",
  "key4": "2QVbmLya8Xdmw4k8a71nqK5PKKEQ5esyvUZqxeHn4m8UpESdiirpjmYWp2R854hfKqKZMttbPsSf8MQ4jTqAGvtH",
  "key5": "5QTgLPdsHfNKwuCq7EXxraoDyz3jR4TsCkz4rDbWAJdGGaGrqaLrXu1g7gLXdUKy6uXqd5iLHuHMgNP75zb86QK3",
  "key6": "5bHNjjAghVXAk47BMWCQeBBTbS2mTDsM2opNnA9btRvCjDpvfxbWoS85oQSjZDVF1axnmwyfDtkdKWyVaNtS1Lvm",
  "key7": "3WNz5arze2t7Sz5Lau4YegebFK8XQnQBYeXdBYEKzspjqv1vApUCGWXo1K9ZmfDBoG2ej6a5zWPbKhB6C2Cn48pN",
  "key8": "59UJ8STde1YZi8KsgH1YHLqEesrSnC4jQvPJpV2UbqZpC7P58PzTjrJXKMXX8HKJhu7mgZm3HtNaX34jcDm4w7qZ",
  "key9": "8yFgj96wVt31w745PfN3M5mB9VRxkKHCWjfx1hJ68qpyadCbhDFEBJp4NrU2aM87JqukBnhVKEyAtpvTwPgQy8Y",
  "key10": "aKei4iZtkP2iysMFxa9Rov2mz82S9VH9Y22buPteTdLYReU3CMU6oS1KKVivacEP4wRRCjeqQZoJzrPe7mruVqJ",
  "key11": "2sTKmVgKQsdUn6K631963evsGsgAcyd5dVLS4R9xE8ypqcCWbtChrrkgLtEdguuPzxJVyiuURaFTnAHVqVdMrUPM",
  "key12": "5maYWwGf5K6t8zWtn5y7RsAwT9YpVnXqCYa619jemFKEnuLzQWYZjUXNqj2zAedTpJJdoGdua1CDG6D9tCFkuEKK",
  "key13": "38cMYGbvwMpYKWUkytY8vHHZSgaySKCv9w5ZsyHNnY91XEst6nD4998m5nHhjP26hNrAAnjjgj68D29x6LyegM3A",
  "key14": "5Rpt4iUY3ppTrogH1aSmtdwYk5HfxqvnGceHJQe9gBJ1wzwqrjT5GNEPyY5ZiqjXQxNWjK594edTq34HZc2XmLXY",
  "key15": "5TCtPBjL1iRvMPYrm6ffG4HyV7LBVuYqs3aDi3KGuJuA7tZqKFWbvAK3iW6HFofA93m3L3F6Eb3F1LWfzHWDHSg7",
  "key16": "5fo2o9SeBuRiQPHswvaAqdexDMiUxWAwM6dJ6vqnuwtzHkmVGzG4dUNS1dSAoTJPhdi8t4qsfLhpJi8kqyUjYVcu",
  "key17": "5a68REQ6R3rLZGgoGVuufxm97z4ZePbRTRwXbYXgEFaLw4Ss28voUPxCBhWR65B3taSvqWc6FdBSXyKY2rXeQ7PK",
  "key18": "2KGz1Q3wKAarpeDVZmQg61SmTG6EmxvNk5v7f3enaA4CxeHoVM3TPc8euJns9cEwWkrFNnFFYq7Pu8jbARQGrgsS",
  "key19": "5mPKQmLnLMByowZRMK252446cTubBDCuPhkfFXGa6zxmpFJqncPb3YBQbEkGYoWm5XKQuCWBdaqrEnpR6XNy8aTN",
  "key20": "RSysc6q4baM2RA3S4M4b57SuKSRZVFFWwk8LZo4UKLxZLk5RLmY878qFv2yaxnTsuygQ6SLfaypjpTiuXTVjA6p",
  "key21": "2SKU14qQcd5mtr5X3uNH3GdYPmk5GnUXWtjAYzzmtYwKxeB7mrAoHnZFCWbY6LAhNoJqnWfHiG8MLz7EJ92NVwYy",
  "key22": "3uexk4Pb9c6UkiyjofS9uPPgUckiFXZThWFKZh74SGugoueVaTHf44k3jgYHKEpiTs4d28fKVbGGJCfvZyLoLTVQ",
  "key23": "4m4eAapszdVkdHEriehWLMM5o8E9FYH3w7cB92asWncEcF5CeNx9WXo3dzDoHGtVVEWCKR9BQE5MNbDyipwsDFnn",
  "key24": "3atxcnwYvrE7wEoLd7XPetQAUezf7yzBUQdWR2wMynrQ7bTopsPv4p3y8MrWzuq86PSHCaeRDuSwCTdgvf5FU1N6",
  "key25": "tLMVRTVRqAoALKwQQEDtzoFy7LAjXkntSqgcUyZ2uThtC9aqcrhDHijFAYPkn8haKC6vvi993a4jMfeQntpeoBf",
  "key26": "4GeMQMZbigRuqsCBZw1cjEDrTevpPn3bZxYsGsTUEiAchnh6SwmPhhVwik7X2V8RguEqtgzNCFC9kruxNmEGoy39",
  "key27": "CTGUAg17L2sDtHC5EzoW8sQv6rb1TQgRTdgbkJBfT58GFYnWo6aFC5JVD31wk26YHMCYLQRr7h5U6jHC66vFCUw",
  "key28": "3VsmJmSqX4Ho7ySLgN5DymvVc527JjvTS9bj5cszEnwZskm9xTWskC26pXkS1Gz1ohVTEReusxj85D8WkH63CcPA",
  "key29": "3vi8QKwLceox8a3ENWQ6DmaoJwv11V8tYpN4cLPuVGenENhuzuZyX8v1S4UZQkuGwj3GKgYhAFAFHdfy7FyFbFj2"
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
