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
    "2gFNvJXtcBrXHtbFJqgwgMt3CiB8yn2EwsZTFYdhZ3Mc2rqLtuWLkfjfmvAmiDf3ARxcB3U5rBRJriq3NegQ6nFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TLeRz6RaaXWcu6aBrebTvMTvMyZx2vGvb72pUEErLgk1HhFxvsz2bReL1H29qZfYGf5bBH8T7uxbtgyS37xK6mC",
  "key1": "5DjREYpMAB8RPq9DwpMaqAhqFbMvHYAYQg3gYVVD88cFdYK38notxk3BYXv3a3R3esaSrqXgUSRajt9WQdnVVg7A",
  "key2": "5KW85uucZgscdjs1R83KR4KMmrSRj2YDi5vsErvSsXSHxzfY5khYejf16JryoftbXnrMH6VA4bYc8PBjHkLL1Ejj",
  "key3": "3xxvDyRJdjqsnFj3vJtyXwcxY9cRyMVPJnYhbCQFQykaMFK9DP8G4rsedc5J6REcSw4dMXd2A7RPNEvryZuVhN1e",
  "key4": "iLJnd6nWknDdfYnUWEAUytctkUKWJxuaJBSQ9U6w6pub8AqhS5zbGPyDQbc2BDPeuqsJspeD8txhPvjEW2EuYdD",
  "key5": "htwybCHgdXTbW8oSaEqm2Zrr6nkBXxH7i9bENMQ13gBcucKENXtbcx1jAaVJrkvRGpxG34qtQ1ptLxJSucgtLbC",
  "key6": "669CuxMPJBD9BzTYJoYKXCeRWm28z9GXozuvPobP3iwrHVRTzTjymuP9nq4CZTKwSjjwfXTSq2smGRdGCrJ4WoGd",
  "key7": "2KXdbkk8WB6WArAkRv5oNKCWKqgkwFVqyQyuKs5CxvoM5J5q4pyCJYayRRZkLJRTMWEvB3YuyvN4FDgrP1kjMwWE",
  "key8": "5uKCkM5p2SB1X9xNqNEEePbLP3i6UPXGmc59h8BZ7mBigmddgk9iXQHw2kuGUuTieD6enGGZNSm5FCT2pENEG5p1",
  "key9": "4maCgSfYPhakN8ktv726MHNHqkWQVveqCB8mAJ3PdwmKkPH9FKbP1LMLxFNvvVr6GNm6PtJfgQdmNdxwDtYAFuht",
  "key10": "2XdQbimnmzWXBK6JLH7WzpWPou1wLhWLu4gtcXanVwHfNUSPEbSu5xLg8vATsjNk2gKK1Tr3sdi3CDqkBTiGuSdJ",
  "key11": "Se1DpJgUpi1ENdFm7PbsMn668c89bj1LVzjLenmzAG29xeqWEsYADTqhaA8mXZanvmqsh75yYQsLGvqwECYLfuV",
  "key12": "21pnB7KZtLaGExuT9fZvfMMkvrqta3KzKwCuqZEb5AVakgAAaoXfXXqnbSPDGB8owDvfsQHyDNnEP3dgub4zLQqE",
  "key13": "2hCVzjFAchMDvewpRG36a3hJjxbMdmt3EohN87SHjUxMGzYVBQK5ZVreTysu9HqRHkcxmhtq3bxfaoEj6M62sYeV",
  "key14": "5ZB5RLZjTHGPzUPjHn22Bb34pZsWDqy6JkXLVtAmsEWSvYnhmzizQJy2rx4tGj4trMvqvkA3LPDhk195CwuaaP2g",
  "key15": "KQYM7ZgUNtTHn7bLBcT5Swir7GkS7zG4Q7kQK8og4MpysT6rcno9dHNMdH9AgGJL1sbMZHLNDEVSwy8o4WStRjo",
  "key16": "Jg8gVi98zoiqESH5CGduNNX6NYRDrne2D3u6tpH4pU5hyxL42nqWqFqPHgBJjAfC8rECmEWmWxK2FKnjx5LTsev",
  "key17": "NU46BcgVDW9zyc5sLrmF9QzK77RCDZtfMED7CD4uLdcDSe7CGn7WmatzkmGCodGmCZMQFJEbW4Z4DUHD9u3bX7i",
  "key18": "euBTuntwKhAzfMuvtRX2CupSrZFuPBuYkbbcEsngDHCnnJVyJnghTtBKrWr38JNDEujhxCqLanKPowdcQoEzLnh",
  "key19": "5X23PCQBjwBwMed6saGL42SuopkuuQ2TtH366Fpop1s4JPs1FyBrxzaNqfqi72gJReVEH5N4ru84YMfQHxW8Cc94",
  "key20": "2V2iv8c7TT6PabtbtLZnPwP5BYgjKfikGgZuzHGcYWRxVstNdZFxNfX4UpzrMjsnbDDE5XwF5UJayF1f2y297PnH",
  "key21": "41hus7hi8YDfgwGXqAN8ew4zw9ZsLPjD83CfoKhWEyptoD1SV9f46UdXBxZWwtEz3MSUFkbtT9kLB5pPbKZqAdJ1",
  "key22": "4KoMWUK7fJFwBcjfUt7DH6eRwrzfztP6EnAJigALC6ww8KJQDfu4aEfBn3oGpNBHSdzS5ipnSyMvLnxzpLbNcGd",
  "key23": "3j5TQVH8aHxSdMw1qmXZkULbM5VqRKeeJdRt5nn6ztXkDwjGrJZbp1QiTC2kvH4m8ztMojgebpjq6eXJUskZ4Wod",
  "key24": "4GKjXwsXuB48DzkEeNQ21jQuyUypVzuDLvB4S5W5hy7uBmiK1agJ461xVR8pDVikYuMZrxE8GKULXYqqfrifrVeB",
  "key25": "4s3f9AmjnqYh23nN97PKidHMZg9CB79rhhs2BeU8E6v42hCe5hNVECiAxGkC1PPHvKwHeEsUVMaiD1uCgos6tZGQ",
  "key26": "3w2DGvfRF41tfiiQcFCw6ctYB4bHejmB8LM597kfzSo51CeCZjrbmkXX7rSnKKs3rKswcr5RFTwK1PzLLuEX5pQu",
  "key27": "2ywoqR8xZHjYJs3jtoTt4kDWttq9v8R9iyHqZidrSDpr4LhK3NuUY9G8ywxJTVv9c1CFgxWSLUhR6uWBR6J24pp5",
  "key28": "4hiBwyRzTYMrmfdcc56R4fBPgBUott9yersw89fgFPFSxDjuhMDT6roL5Wy1zquPHEVivptgmNPz9zbkkW1982nn",
  "key29": "4ghRUXisB1orPm6mHqbNwNF888KURcrrnkirZ3mDKKtV2WxSruZyjUQEbR7NVDMaBaqPoy2wcTwsHYj8tiz1yr9A",
  "key30": "2ajD2wscb4dVhoqQ8qQkNRskhZKYG2LDncmoB7EMfQ5vuseDY6tmixca1YV715s8NqF5tjaqP64rfKeuUfkdfDbQ",
  "key31": "2NQD1SAi9iUq6zCGWV2hjSfsqVu6oVreqWb4qtUsYuxcqg3M4NVbiygRwn54GTyNW1ZYo6EgYQ3FaxGqgAcJLBmw",
  "key32": "26WL2Vx5BXpvWHsKNXXv14NC34b6PvjGtac6EVnG1NZuyJw4FRngQC5vUenvVtSfeq3Y2SEtv6KoKYCRyY7gkki7",
  "key33": "5LcSrw5NKERTTYhb92FBbYFMKwyxHZd6X8ZcPovXW5A2fU1aaQjxh43nDwHG56bxXx5Sn9ynNTB9s5PLacK2BsmM",
  "key34": "5rGBQrWgP4x6aPodYCNdCGXUUrU4zwt7eTMVELeE94RPK2LRejmBvit4FkNZzwGreS5mGrFjtdV4urmoTiw6vPhF",
  "key35": "5ojQmfb27rhdputR22WCgLh7D7Ljzh4enQ7p1U9WFhyCYtYKokMAMMCYPGEFkqfmCWULG56o4B5VFdu4qozpNSoz",
  "key36": "2NjtBSnquCeg26QmmEKPqxXAbuPL34tGrFkDgiiqcmST4VgtWY3vwQgEbDyQVX6awSNajwyjKJez9kX4K7XoRZoH",
  "key37": "4roqofCA4VnxnT7LYW96QJLfUyG9RGzCfkzWmKs7qhbsJxLbmrPvgDd2cVcBVgcKZXT8sn3V7inotJkKgzdwfoxh",
  "key38": "4tdBJaEQj2Cc8qVLdWTd9MHvUy2SNFYD6prcG9JdxvEjSB4dkKjPYsvY4jNckgCcRobDKip7MQn6GgCW5C6TnuJZ",
  "key39": "4Wed6rwFewrxZEA9XhVQgx9XWHJVAgR8GRuqQJTFPvEzRYKmS5Fnqcco8LiAtedRonqA1gKoJ96Q3DB3niqeYWHC",
  "key40": "5y4Cn9vKtNEEVA5h9mU4aYeJGuGsbPBZtkdPtaRAh62W1T3GQMAS5mLv9nHqQPv85Zmxh4VNG1m74gzKbsBJ8FQt",
  "key41": "FsjL4UMZwBMwbTXiSvYscsfrgUqZ9WPYeCx24XYpMo8MqRDJnKHwhavDMNYN6pPWcD8tpVcJ1ohftbHQKfVN9MQ",
  "key42": "3pcVjK5MbfLG6KtawWYR7V5UtcqtgrFSoALmV8DkS9xzo8vkUkAyGJjS3aCh9CQqAJpJwDzNbqq6AzXqnPfWHybg",
  "key43": "2h6YmLeM5cdPtWQySTV1oHbyYfMfd7fy1htr2NhNXx9HYm2sWreY9jsTxCrEBJDjnq3VmhrsrEX33uXjVZ1ZVDrD",
  "key44": "E7AsH8a37mjoZfH2uHzKhLG3F7pWMPe2WJpqdvQvvvo4oFLPN1b1r4YEmtHXrVKA34MHQN5qT5XAbssp1ci92Xk",
  "key45": "2ctKYeNV6cikUx9rpsv9LosboBHcRS5To2B8HjTGjRXfVLGp1dAdXsMMs6gfggtPr7ZtT1YcUMDGz7pKD6fXkFts"
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
