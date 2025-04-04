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
    "TutpcgSAGqBVni18jZDcGhvhDxtT2aTwA7BKNQWeKRMpEjTYzuZgV8bBJvpRrzzBFrwDrjR9seeujKcPbufnow4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28rjNxViycz79izDBz7R1CJxNk68YqC67FPdwzrFgWGQ7AbkrVrKjJumV3nuHR39SzqGExjETm37YxwezvG5sUi4",
  "key1": "TpWybQBUicYvdDBRvQCzVUixoPv54o7ah4mF2Acp2bZp5QhNbAqynQnB4w7HvsjCTcbNUtpZYWMxi5dKPTkDr3j",
  "key2": "2kDBpMo6zKxVMkd6gucymkJ1iHV33KM7r99konQELeZkLoXxDfXzNekekLfB1yaED9LSeCuTkMbpsRUxL7JcH92M",
  "key3": "8HHH2M9oQa316FPquRkx2BP9fc1sEfdaxQQuW5qrMfPZKjcKNZXURvgVWwsVHzEZVAcThTHkEM8JgTp131u2D14",
  "key4": "4MtNnTCdhEE5zv7FRFSnD8Wtf6pzWKZhs9Ryb1nhwYKVXWeWWH4MKgeVRcDqUsEAkNYKzGnM8dXsUwirG6CvdVHx",
  "key5": "4rdbG3wQ76BCSuAmbXDZiXg4by3VWGLg96mAw1zDNe6VpBCSELeFybpdcBWUsd5yBpSBdbNR3taCKTfceuRYv8WX",
  "key6": "2Mp1omXcydefNdWPsAhfMhP3pZ6MLsZGmVhnmAKT5gYr4PDvSrrXj4QctPB6RnDR8csRcMTTyycwt6mnmcUknG9V",
  "key7": "21hbGrkAcqsPtSAPZAZ9LGaChfKGVfxnGdwn79emmH6dbGWg9HAgn9pVECU1Pd36pMxsgJcsuKeeaheMzG2jgz4V",
  "key8": "2HiZ4bmTZ9YV4kqU76UbzyJjbFkyuKR1FkXBuBKifHvwwEpd5deEabdx2TtjE7B5n7whM25Ya1Z991zFXLBc1uoL",
  "key9": "67EpyzJ9ctzCU1UbDzBPSDqf7yoaH3Xbbjmz39LAfrUAMrMKPAWzPYWsWV7yrH1XXn126eYHrrzV8TDRNXRTfZ7J",
  "key10": "5auVDVg5mix4zFbb1pgUsheqPkHXPzE8SXYQEVzYAzwxS2aHJo8RMrbUCRRoyKzYGje1GkMZ6qk3zAwvRcWyW2fr",
  "key11": "5QGPXwnSNWpDwa5n8cS1y5gdcyzLWSUgsLu8niJaBubD7P3eb3oWWimPuuGC4UMUn5wJ74Uv9H4kzuXoejYdcJDt",
  "key12": "f2AzvHs7TfZkLgcGrPm2oywmLtSaKvmb6f1mMtz5wWL5fpdLf18jztMZSkWcGwHVrqc3qWuoPpJebyxLEtVp5DD",
  "key13": "sokRkTmBqNpNia8M4qsC2tQkUHVExpE3VL1nEJnr1qZkTTiS7Z7fw8ytDQ79np8esUSiLcewEzxv5UThvQPtn9G",
  "key14": "364CBTLuBEjXanHE6stXNs9UJ8Zh94k3orh8CYP7DFkgak7MYm7hq6FS8G8jSiiijdgMhqod5WVsTSHV9TvmX6kA",
  "key15": "yohFTfokRpEEjhgp5WwEeUBnzaawTbQXkRJWHETDv1sPP2xLrbLGeUonGCXtL3E86bxq5kttnyrdX1Ev3ftKT8o",
  "key16": "2mA4TuvH5uMwstfLqgZQ53aa28f2XqTq8CgYU8B9pfBsC3jH5fh1udtg1nBbdgEjx3vWAm2s7mSSc8KynNgiBb4R",
  "key17": "CMxVAwz8Xpq2kqsDXhDsX8h4RfniRyuZLT8VbJCUcu4k5hup9FvEsCoWB2T6nTXMCstfwMv4fUvVkebzBUYH6cz",
  "key18": "5Zbyuk2GPq25gGimwtn3RYqMH1mHnMfU7CqW7ojdp6UBcKw617g195zcjPUnsiuUJimCrshjKj8mD2Y3tBfGcF33",
  "key19": "2v2sGCCDnZQgKhW1A3KJ2ZDgMnTvCMZQWg1ZQ1xHv6HuLskrsh3PRW8CQuTpdkYqTW6g42YDdZAoyzk1nPqk5Ztg",
  "key20": "63FVfUu9qSYoB9AcTpxRCwvxsQJbyax7goK2Y6cgQwVeRskq1oEexVhqMpvb3qZFde9tb6hh1N66qSeXCAZEBimS",
  "key21": "37TBMZSfFZipnjGNMcvQywY1gFm8BBXt59QqwunFEq51nNUexEycX7zJx8t8NxNRJPp8mj1ajiZ6iDZeL5xA2nAs",
  "key22": "2feJEnanEk7szoz8AWWDjPRJvKmUt98D3kgjZQG6nUnyzt6Z7a8xWf7zwgryre7HnQ8DogMncXSKAFg2oWocVsqp",
  "key23": "CxuA4jt3QZZng4dy3QjUubzjq2nfbqgdBy3CA2bH5xBbYjrqCQEYVQiMLzUT8qwcoW12USpqyzTRR62ztLmBx8X",
  "key24": "5rdUehNoxzpyAUWZD2dVfEKsxbesy8z5PZGXy49Jv8Xf9ud6JWeJ44MRptR5A7rLRm51QKPE1nNEK72rzX71M881",
  "key25": "yFq72izdHBZcnw7YMbRSToGPWiX9kD4faTiCXDZU6fHhN3sa8SqJ9ed6p3REBrf5WWKJF3rsyPRTjVMsXmjA4kK",
  "key26": "VviyRvTgSd2btG4m9GxbachuatEvT5AQxnXjviTeUjh1Ai47gG95NLFYKN83cR4gNjKDgKSgjAR4kE5jLjtnTK8",
  "key27": "ee2DxrqqcZHhiMsV5wQ5Xa7Y3amxjC8NQgqDgQMEYizNntrJzZJsczbeig3PUDrkVA9bczdQxfPGtmuAKwHE6at",
  "key28": "3uHVu3wAxC88gzF75iq2PsehHtvCizu3Q26VyGPKw1MPJJXeQdTZdXc5wd6Nmeui85U5gLqJF4s3pjcjPRoAqsVf",
  "key29": "41PU3EWvcRX9XGFhrfvwpZVW9fiMEmDKhXUoNfDr7BWskuYzdK6AnjHYBegX9SMwaauKErLuyr5ooyZf63iZHQH2",
  "key30": "tdAL5XsifHm122UCiBBsK7So45ukjSxbvyyv4VdZh5wF5cQJ3MQPAcwXGioTKkVgVM6sH4rmhhTe53rLzxbevuM",
  "key31": "4rUrBAxfCgJQNmVnGr58ycoFVq1JSEfgC8UpD5ym17cM8tFKgnfWGf8fc48VdHM7V8Gk22pjGPGtKUgyZoaurpAB",
  "key32": "4NzAVTzHAcGvgTTsncpkk36i8FtkK4DZdwD9cwF5ALfhxSZzLAgCk7UNyJtyNb9Gcd6phCPHMudVkGSXzWj6vvJR",
  "key33": "3zUtu56Gj8Q7M3FLfU87DoS9zTrziNwPpza5aY7xfapYw5xDMyqHmU6H4gqorMNtm2xJyxF7pXakJih8n8QW9Wsa"
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
