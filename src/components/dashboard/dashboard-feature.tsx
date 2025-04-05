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
    "53RCDc1zCYFAPo5aKvQPjRvA2Y3Y98NAtCX8NDcBfPiy4CMPNN35PU9wUkgwUJwhLec7MSG7dzBRW1GRAjezNz59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gn4Bz6GwijvjFQAUDLW7GkDeKTrQQevzfn7AisLL4apgagx98c9LAyz14Sg7JbuS5rCgqnQHAnj8jFjZeninJt2",
  "key1": "4DZ2QJLUEiEg7xVE422fP7YjkgfCCgtzqpr2kYo1oAc5TWBeHbZxA5FX1Rpeia2JERwzesdMihaTqBdzwGt6gsWk",
  "key2": "5tkajoncjmaKw8L7zaANSDnrEEvPAF7ejd3pMWuLR67apNhwcmeSpxE2FAxQeSzaL9BgxrPGcT8UWH2wbyR2Kkr8",
  "key3": "2mAS3w45FxHgr51PpUFQo1JJRmxcefGP7HzQ77reSGkjoLMcU4GLbo6QutE3avGRhSAJG3pYsC4bcbJAcpJsT5UX",
  "key4": "2UFVWKDtLwzCPsZUo8XPFCWNh1gCHKtMKqtttgZ25nEAuCsZJumaVD2ockM4xyKt9XtGEx72yaF9KVGHHGy83wB9",
  "key5": "3z4KfRxJZRKHaJ2g4FiU8yuyv8ZnsGpeWPCmjUXpBZnSvxUaXd1FgjCdBFkE2nkdMmD4q4Y3XMRTYeQeeufpvpLi",
  "key6": "4ABqZ2UKDziEnP4VT99tx5wVK2M6gEe3AHWgKLrjfG65cwHdBLjjSCH8zqRt6VP7HMs7EBrMWKK8NNWimzozg1Pu",
  "key7": "3kiiLYwZMqvN99WcNCFNqJ62qeh8BwcBFqu8QqrrWrtNnCbve1Qa9wjRdAud4g7dbDWhcwMEKHomjHzzFCGPPq52",
  "key8": "35z6aXNFA2xd4yJF7CihtEfUBZ46DERT6LswvPo6BLBzZ3VwypPdw9BiwV9oRRfkhW6atTuD7FuHp4thS71v5B3B",
  "key9": "43vrBNf6bRepm9m1WCWE3t6ywyXvTuZuBCMtXozJpUkUxeRpdNHBiSTuyKue8HH4PMhmvUBQNUFi6J8w4T3Fymdj",
  "key10": "5pZJYNVTE8qepsdVENBaqaB8YH44XUarV3wfGjkAHpSkGZ3ZoWKiG2gb7ybngvFaaGGvhUMDZDJQKZfJwbjn3Xdx",
  "key11": "3s7GhJGd2EnMnGbUerEGpRmLM5dhm6mBn8NjaVshnvhVGv255rzxQHqMrBisZRuTvapG4nLoesgh8gtraM6qb3tJ",
  "key12": "3oho89ht19j8ynUo6FTsjAG9xsUsDEE5DkhvHXE3vfBwVzwFYBUzp8nvCTAfoFidpZDDa2oC7TQQCiWqg75qiuqG",
  "key13": "2ffKgpy5A8S3REV8wRMAmQrhxXPUhY58i1yRcxhXfeXXjZDHXUB8eG9PyfEeh9vXHkVyuLHbxTRpyCuKVXpR28CP",
  "key14": "5utFUSSEwDGrCZpdXAWKgQAqqTg2oPzmUNjoqAjy4JgmXN2rzbZJqHwq1trM4S5gnsxxdquR8hnEcugnrQjjdqHa",
  "key15": "4BHdVVgzbNKLJvjhv3fQhrZz3EbwFZjvLrzmHHXJnHWUw6xMaGLtBK562a5DRXTBjS2ULEuscrr3tBQsBnNpG6m",
  "key16": "4xZwbcrGZd15ScNyeKzT8ox8UsJki6ZVTWDF7Y2qJWJb4oAJfd1nCdqpwkxWWdPaQSm6GNr4KambJ5XNgEtGuhEa",
  "key17": "C29V9U4BePGtpJqZHtSTV9Js3jaVN4XqxTBwHytBZjMfZ8BXegC6fJoDTW2gVBomixEYiV7J6xjc6XDWQ4wEj2F",
  "key18": "5DuECnzBmkTD6fTv8HyoGHzN2h6mxYCohBkwgM2ENkmojU4KctcWHuHJN5CiJfur2nUiv19uRHz76xYjyFaCAy6u",
  "key19": "5rzH4Yo9CTX3w8Qo29tdEjAt655do8PWztwgdSe5T8dXuBQmpTzfTsb2N9YFBApf55TEAnriLrMjUmsrBZZ8ht5a",
  "key20": "2Jp69PStDfBeQiLEsXnxdB9EfTjKGhkMtp3aZ1i4RoGmSy2AZLomr5aFBfyyuaB49wAcihynRy3RhqC2CvqxLNum",
  "key21": "GbmK5t9WVLQYa37CTy49uLvoq5wFeEhVxFyXs7pPD2ESjaFBpZuTFc4yHgAoyNMZBEbbyWn5f15tXKMTNBAv4jP",
  "key22": "3yMXSbeLEQYqAyxeAYtB5Qu2s4UPv4vxHYotMjtad9hMkETy5xHqhGj7FBdmRDorEBgNdUyQP61FWqYNzFQuLT9j",
  "key23": "3gzjqwiA6hZA82sN7prWzQivaWt8z6pgVCrRNihtfMDewF4eod5MQGcwuGm9iR2ebRoX4kErBTyuYpNALfczJhhT",
  "key24": "4NctdPXU5xWjKc8McnsqY9rwz6nVhuDy5BU6JrQTngEH5NvDYaTfDgwhTX6sRtgGYKpWN8tDs1UTSQaE2K35wfHP",
  "key25": "4svz3AWANkpZSHQmqEou9LdaadFnUBZQBrtJqtfE2qYjXBrQoyuugxmqJsWAJx1nJdDbtThgNqgTW1JYaRWkjtz9",
  "key26": "2B7HDwncQHmR2Pq7RvEfmGbGmrEsqkfevG922ByyBZ6wY3bUw2vKTAgf4wd51EDWUDBL4svDXnR2YN22cHuvHb4u",
  "key27": "tDPu38ESCj9HLaCBRmPQXc6xCX1zoBEpx4hXKcVNSjG3HNAGJh6R8BoZzffTkJijbe5TFZLodsX8PCggJSV8CJS",
  "key28": "5Hmewvhty3bFZq5xzA5gS3wBpVgBd5BAbdUkunARrPm9agpTYzkqc7SgpwUhmG72usDT5ZrDojDekCWc4A5DWYbG",
  "key29": "4hwP9R8d2p6LeSfHiQxg2btwSE6z57fUhrXVkHp32bs6wVY4ryWoDyno3Wi6qpQi869MdL3HUCkmmgrzgBMCzUEJ",
  "key30": "4JkhuXqtcshDcefAcKMLB2hHr3WD11oEz2nsU9NojcQsxQfXhfzS6cYU2K3BytqHb5hknR3Y71KEArRqzV2Koy9q",
  "key31": "48FRZEEquBN879Vp37QvnDE5ME9LbiSpgdM6gk4ShhQLa1bVoNfeZwqtDYhVhoHgriz3Br3sTUuUgRD8pnSQ1vwK",
  "key32": "31TzZ9JbyDP45d8rCqk1dpvTssj89XLwtWXx4Lt8zgcFzGv85LCyWiusa5PssWGhBfH4ZzGoNgR5v5C3NkYgfkkm"
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
