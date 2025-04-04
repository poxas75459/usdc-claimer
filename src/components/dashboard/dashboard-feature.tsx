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
    "4YtPSk6QUKknMnPhKTyYCG3AV3Aojizn8WDAyUBhNj56gBoEQxmobgshEavcZxbL3g6kAybHJ4kL1xNEM5C4DFAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pCqYsRP1xZiYeVYHfiZkXFZqycdck9GgKmVnjgCHhXWGr7JyaQtEQfVYs3VJNQTy5wEdgVrKAZhTaUmxDisdN2d",
  "key1": "3V5xF1ujfWmPTzDbHqAv8f6LBTnhha7CtNnuBu2CZFCxSQ7gkEEpurMEL8hoQDhiRNT6MFuVnzgduEn9qJkUBiyU",
  "key2": "DB73GYeb4M4EHJMQPa33YtrqmFKGQoUPrMtwkQVuDoPCjsyGMy4AmqejftWtHdZFXJNsiovRoVprGZVB6YRP52c",
  "key3": "43mNghJdSm5SXu2ZaPzmf6nwj1j9WA8EKYXXwUgzcqEVXfNp6a6xwY5DaLM9YvnernJEcaZTaNy6bshedoXxPcYT",
  "key4": "4ew9NNn1TD7E4G2Bsjq5xk7tFwgqs8RfrJyUz5XLmewiuEtXGro15EdfvkBQ4Fxdq1Cducwf3UfVq4XAxHnwq77v",
  "key5": "3thXq1wtxaUBNurjemuWrWyp3WjuFNqLQY5Nsjz5t4jhp3f3cvfWiC3AiC9S3NHc6AeBWZb1nEQwbgfuWQ4yLvv7",
  "key6": "5QYLDf739RkjaPouwynJMXD1GfsKg6HdYhZ2ZZnBCvhrdUGFy9u8MjruHphK5QytpDPuiFC664gKBPWC9a8JPYoK",
  "key7": "B6p4Y52rAxP22HLXr1AKnwoxXE3P9T3bd1m8W4kHCM3ZrZtSq6FqDkxFozGtde7ZGSaxx1nLDfSynvVQcTzHt6m",
  "key8": "e1hKhmH7LvQhiL63Z8fZmU1QJ9qvY39tis3h9H4PuQJzBzwbfNMzRAboCC4A754SxWAA28NjtpkxYdy4Jeu6Wwy",
  "key9": "5hzyctyMRcBAnGT4kvyrgqTM3tmjF1zC7pb5DAaLxd2u9Pdk1Jyr79mNrLE4zqupFa36QLNobkAdynkqvC81ookX",
  "key10": "3J4MytV5sWn9VaDsywTpqnVZeDcc9R7VnwoeXLVvpvYQ6WDe9RbrCcmy3GU9ES7SUMeKtH8HD6wXpNcqNiLNHVPC",
  "key11": "8ozHs6PDE1vYTfCuXx1h86gyB82ZzaYYeVBmbXkmy5CYTRMitvKGTHsVn1mMhGzoKs8ZMs2vnyFsfiKd4nu4qim",
  "key12": "2zH2nsLyF3fHioew6GxGRKishwC5ACmvxsNYrPJpGr4JfxphqTbXk6bnDiZCDRdWKJ25Ysw6ovDzMH34QbGoiynw",
  "key13": "5sXSZ1D5NK6BvRGvpfkJw9CuLWnPMTioP8EKLz9LVBceCVN8zdFCWUpQXCkTcbvbLEpL3L9BmgjAasXvfAm4tBpd",
  "key14": "5ptSMkdC44xPUPddYBP83eN14yV6Z3m16uzpNCHTWc6R9kNak7EJj9VhRPjkjVK1rgT1ndjgvygxxAK6Pqtf9SAs",
  "key15": "2QHuuj3MoqtoXwbU5HvL6K4rHfEQsxjTT9inJt6i7yKbU7fSCzf1HHbm4bisevFk4cudNR1tYZLuFsemsgY2MkkL",
  "key16": "3vkPh1Bvub6Q8yj8YG6Hs1n6B8sEU8p7U7kXaMMKMkVbAh4XZpVv8VgXAXrWdjzovyMG9ijXPtP8zpq7HX6mva9R",
  "key17": "22DGmL4nnbhovyrK3HqrgpYRduLKdZcNE3q9HCNRxrh2QCM3YapqCKWWGfY4mNHirePQPFqALaHkmwDs7eQTFrKd",
  "key18": "4R6rsrsby2utm1Rpcc58QqgMdrkC1k7CrAYYASfUUJmSCtKE12Wa82CQkruNnf9RQLwZCKQ7VDTKiF3GyaoKi3DA",
  "key19": "26sMo17THGxQJpgH32gjV5B9UwDUteGPro8UEUqinqMDBdsakPrBNr7MvPzMPS5u8BUzRmTEbsrqZVEFRTpvCDZu",
  "key20": "5gm9LkukRhm5g9c3qpqrbnqnKvZhxUJpmoMGiDEUXiHwbfoMfLoa9oC8pUaVXBm1rRdEdneLP3WEZfbXvXhLQXYs",
  "key21": "2CuHefKZnrz3Ud8nXhZmLnzutN4Zd1jrFuFndxWeoya7UbaVCLvvAnrGdoSWMwmQ2w7Q6NrAF5BQv6pTZMRuetU5",
  "key22": "3W9owKh8i98zwRXK6eHh9SYgAs54KqAg8RinAn4Sfc6CshUrHyhYy8UewNoQMSCM3ZYaZFYKn5qBQGk8cs8Wq1YZ",
  "key23": "7YwBBmuUz2f18wpk1t1Z7yTTyTxA6eQhf5jVDYyooVw1d9FpU4mfg1i8pfG9eAjkvvBHR6wYZscsPZ8sXEcRYAE",
  "key24": "6AHUmScurSFfSrsdHVnMHnnv4BpbJ2YZm7nBD8Yf4MJLpmsTvznvkSsgQJ67KVyiA7svxKLP7ynE1VGvKsBxy7W",
  "key25": "2GF39SyKnEFL8dq3T2sPV8fntSrDbLF3koyH6MhtdGDYkDxEhhTReUekv1kx8C94UaeC2AXa4JsNHXbzGDUxwfjQ",
  "key26": "3gbGJd5J4oh9JkTmZuo3WDWVYgVFE5JekHjmmq2oizpXqWRs9sjZLRpUQF2Ni9sRPCGmGBG4L2NC732APvLWNHXr",
  "key27": "KBwtazFA6DKVH5tifummpM7MNpVZEFe6gFEu5tmbtqv8ryX587QitAAXj97VDMVwAtsiwv2gt8LkGj5ZgwaupdG",
  "key28": "5N4icDQQ7hNhMuSmF5DBdUXRtZ6sTxfZpBJJgpyPtdbXJ1aRReNG3VZHUwh1aifyjap74T28DfUTPe1ddzs5xta9",
  "key29": "5ss8CQw5TK76nsfBKBFDHoTnYaAMpy7t8tCtC6umDNbSk2bs5e4Z8FpBAG7sqd2azD3gcm6p8kFXuHfdKBXAum4J"
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
