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
    "3ZpcBt5kVL9eABasziTaZMHcgtVvDLRbM3kPvv1VJpNz9HZGxRTaLb2KUZiVeCw7dvwegKLvaFrsPkDgRDm9yjcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PEhTT7aDJ3HGnk7ipN9WGk7pB3TjLHyZTv1JNBLHt2AvW8WdbgD5EGbSSJmCj8jF1BorXfGJEdDBgFzz5zSwHZA",
  "key1": "5qk9A2FPYZVuEZEmsKWdZ9Rffy96f4UaaapR1dVd7wxGYKjxJ5eNb5ZhB2nn8v2fhEN2CjoDwAgkDWVWydsBndYA",
  "key2": "4tDZgnof26FonN7KPDcbYqU6xAVJRFbUtoCPRnGkUw3ho9edmYwAzvsRwHBSFMydCu5Ro5s2E5hc5dpd8yU3xggy",
  "key3": "5jv1J8Bw8APW8vbZYQdEegSbzeke7bd1Qv6hCybHWvJfCpP2Xs7ttc1NRuvofGg4QnTjcrJ3Fy2ecjex6oDUTyUk",
  "key4": "5NwyaEamREAnc9mchy5ze9KboY2fBPY2mZK7TJMv7sL89jFuoPSKMkya7ch6ZkqFjedgNrgaDR7pHbsjevxHMDWz",
  "key5": "5a43GLem8a4Z9zAsTBoGpZLQ3N5uwVkzWZJSsZpa5a7TG1gFC7JzTQqHuUeupB4DAQSFDE61nsHTfgDVo4ekaZaB",
  "key6": "5XijzcXaGrcASCh3wwjSgLWrJNNGdRUV3iGmqDAmaNpfg2M5AaF5R3kwjRZ9H4FSUy87tS4yG4cMLHZNVDi3skhD",
  "key7": "AJXUiBFe7M3ET9i2Wq9EZqzWUWM3PFsPh7guLywqr4iMRqjQCt3GgNgywpUTZP8ebBvVeeJAXnQx1nN9Yp7xLTb",
  "key8": "hmuAQB2QgeUxjHHRQBF3zLNMdn6qB1W7ii8VtuCf34aCLzQcYZwT4CsGeQ17vbjPC5UoWh7c93CNqoEU6PH6SLw",
  "key9": "61ktUfsCFoBV1db5PfsN45DtPYYPcWskFtyLabkwtgnCNPedMNAw8gwByUCdFTC1uZoGzHevG1XMTEqznSJkn3cQ",
  "key10": "5Z1yCdVC7ZvAPKqx2fsktZM17Z3s32fmiiwW858ZTeWbo4Hbfgw3pZTkGteNW6GcvkAKFpXhTYuebb6n8MW6G5xZ",
  "key11": "3bwuNWYRGTicYQ2JZrPAPyhSjQvS6L3fAGsmx1WJEuY1xz6qiMwWqr2xTJMjro3QnHMZA44bDwmsupSjZMkPzLAv",
  "key12": "4Sf2GLtRCqdouLKwwX9uWinJJqvf8gux7a3J1bG811tvaKvgUkxmmextC2c6W6Wktft3ACzDzVz9SrTWQWjAg9rE",
  "key13": "3FE3htALjCNrCPM8oJQHb7rcNFbR2ga1AvTnK87MZM1goGbAntJDWEoU33CPXgDFy2Y9yuBcwMx1Vyivmh3eFqCw",
  "key14": "3EoDhs3s7YVx9RLKvbovp7fmZqoXhQYzhN1F3NcZR9DPjLsjUQ6bP3ka1t9PAara4ychPFRBjyHV11qRpF5Dhrsq",
  "key15": "WS1h5muVbYwBpSEwXg5fuzVS9CptLkJsGzeXJjj2vzSTxvjUoBEU4mC31HbvwmXH8cN96ywb4Zm8mPaFdH5jbqb",
  "key16": "5XwMCkFCNdqsHMz62dmY5HznW4QhbX9m3tnTJbhCTKQ7yCUyoQWKBkvN6efwG8eM6XWsphnbsRwtHBDgAntRSPJo",
  "key17": "24pTTxubtwgqYW6RkVjNLfZ4Q7vXMsCvR8BegcTAGDrRfUHQSW5B7jNABbZF3dcvwRscP931BDQXMrTRR24GkCcn",
  "key18": "32PMz4xmgUEhLDo2ZWGrxkJ6LGz5UWb9LX7dzGKiPVwqjCujRjhGfKvAW5V5tmC5CheqtQFVxUwgCQjZ58BzGm3Q",
  "key19": "5Y35vWSx3iGjaVsaFV35i3kmanEQ9jJHc9mURvQ7tMFffwtyqkFPmkScNYfKAik8VSKW2nLWMwgDUECcLeiSoQXt",
  "key20": "4zV9SQAbHZwpcSep5G2m72VFkMfzqoRB4FrM4wwnQPsjQZvBQ1qE3mzV4pWcLNW1VCcMfGhGVvBMvKpL4JiY13mm",
  "key21": "2o5SaBv3W2YzvcpCPFXvv5f6vR3HKp95uo3SgPuFfKJrJGc1mFxQwzo6GuErHGKcrQfXYRUEY3KuRGsKEyKtHJii",
  "key22": "3KpQf59wvyskNmdT1cPxq1WuGebFGGGG3TJJTLGmbTwTat6z6qk5tz8TMfkgpd4AdQdMQkCu5KpBqtxaZXakeuji",
  "key23": "5QZLi43mGC7ZPyGBBYfekNbZiqA4nFi1MNrPeb7AmSMBZLFNG8yKjDbfRw4fFGVbKvpgtw2hW3sHK1zJxaRzpfDD",
  "key24": "3fonfxDJBnA4ZnULiR2msAiiCue7ue8xYyfMruXuq77iyznXUVFWthXzk5CQPYnSkmsyxiNEzL9XN46nt3HW1ifm",
  "key25": "3UmgWxyNqmDpwZr2DkZwFCGgzLqPFqTeNtQa5Pu1hDpXu7kn8Xz12zDQ79Hg7nLcEZbrRGSuUQnjVshG7CSDfe56",
  "key26": "op59PGtkC3nUh4UuA4Brr2v5egUJ1q55dDXiutAk4CW6PnoaNee1SgbapieNmfzdmAkcYrpYDGxQdBmTQb8nfjj",
  "key27": "2mptTZWCnaj1nu5U5abT8ZW7SgJT5DrTXtSNo8pAqJDJSjVBm8yXsFjriUfWenKJf6bDLQyWNwFLRFR4jjdbdTSU",
  "key28": "RSZPHMBQgNwfVRV5QmwTHQ4CgyYG9sjUrWvWeuPa2YoJy1H75hShfjDn47nMmqB1gwcGbndjVKLQ2ynygJjBYQC",
  "key29": "5oTXzn2YSp2BG1X5wXGdSGfrW1RyjTY5Xon4h8sP9i4Ck3DpoX4zM1GySZpFxFyF7dBA6x5AQ17BCW1WokbJLCTv",
  "key30": "4TokCDFXHr3fQmpywsERmWfzguqqUVNLofkJj6G6BRexLezFurApBx2vnusf75K2jEgA8NbkxjZCme4KxLJbCEad",
  "key31": "4EZasHKSRW4zZWdomc7kp7cCcvPXtALLyHwzSyWVf7QKHyPVwkRfehKqZuQoNTcoQTe4JBsHq95Qsi2PM6kpwSQp",
  "key32": "m6tdjS6iSCp4jsQpmK7wpevgB1sPwEkvxUzwKsqic42JY4hMGTYXNdobD5iJgRx9QQN8F8ksKEp5X4KUSDf2V9J",
  "key33": "2oXZ1azQ1PpUiu2uS86yJbwY2CLiwkPYuW2QwzLKLRE3bvp9KaWM1nxrAd7mEfLxEmLkqL9VpQ5qHuWXfN5JUpU",
  "key34": "3s5fajronQmNo9T3jAXge2ZJTk1RW5CfmjRNN3JpJyq4ebthurJuPchGcnMCcXskgVCfYzNWoYiSxZok86GDhCzV",
  "key35": "2y29R4wKUPQCjK32ZVzLciR5FitN4a9hHcr2QmF6Byr6Tyfok8sqxxft6ZUkq1srRmW8y4WSjoFgHGEZpCXqBGPD",
  "key36": "2PhTiZDCGLDTa1PAutVuC7YyWDSTG9mBHmnWb5yFD1ZHqeWqn8D2jKQe68gbTTaCvGM42M3wSxvsQo3aiSuZWVDv",
  "key37": "uQFuLwSfZU6EyCXZghWdxQ1AGPzGfEitygPY2hqGwfNnfLRKXHsfbBBQZZQ7LheirXpLUjtyMC4kneKUvJpYzoV",
  "key38": "3NWPVqsfyY7haNBU4bDGE7gErd6MeZk8yPUg113hb5T1KED87LGGuXkf5zB7xtQAhUNTAKXj4q5EaceGX6YtSRXq",
  "key39": "45UNDVaNupJNBjhfaMq9c5YJQciZdMDLurs19ZdF1upkXqSorJY1MvDtvoHu4WRBzdDFA8nNRgxqzsamzhKoCco8",
  "key40": "3WQcABLRe7dMtwxsD7ML6FcFGaEMjr34oEcojTYvUfQN8C6BJwmJKi68H8BEabLoCeps7vtTy8JZrMNQpveRVVPa",
  "key41": "SCXqqiCxFn8LbW8L3ftgCX1pHc54b3HT6hyMfLyLybfRWH8dKqhcUBAY8jTVxh2r9kGSoVu3zefXTzyjAA7mxB2",
  "key42": "5YfWwGhFGFAzYdbVdFnwGMLouExTRgFgvi8Ln8B9MHhyTJfRt7wsf5DRmw3phsevPDnhD2VfPkxp51SdwrxMikKt",
  "key43": "5nkhkq2xX3LAopgDuJkbjfRT2Fv4MNfoK6m5AB6VaZQtB7uMgbkJuXnQU6mXXJ4w6HcGvLh4FXJopCYaArZWpaJD",
  "key44": "zmkRSnB8sxHZWBVRaqSqt5HYwMMDYXSMBkCxn24S1MmLB99Ek9ZXB3hYv9Tcvic3tkQE8PQAmnBKsmAQXauxUZY",
  "key45": "3jyKJov1AiWxtTEhmffYyZb83eD6rP1NLscbtuWMqw2yiGgFJ9ca4HVLBYn7272378tnT8YMqxYw2UdhkqMvgBNN",
  "key46": "3C2YPTKCAU9tDgsc6UkcX7y4WdwF3NhVva8N92Au5KGgGR6MfW2g3BgHxqosyQZuhFXhTfomjVn6HFjzrsRnGPor"
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
