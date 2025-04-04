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
    "3XCQs7yLazqBvM77YuG5Kv52pRpqG7KhMoM1ofVwf84YuSMEmkauhrzuLvr8UsX9zdTM3NAFoMPd6vTnsUroJsju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3azyaN2oN1CVJzvs8KxRKABfQWjVq42phHH59N7Tma9GHEMESqmuQCWEcG8NrW8pfCBKebRt4MgpV4jTWSqzANN6",
  "key1": "67MQ3oHdyHToBB8R6sWpsKprDjQvniHxhcF1QEV8MikurrKjAbPhy1QXeE2NKZXEZghTUQjUpn8iUW6fnLUS5yDE",
  "key2": "2Qj7LTCHQdihzXEjChXNBXUxnFgqKhUxQkArnKTLZkgy8Z3EKAGfGfgYpaj4f4KyrGYV7Edi5EQapjuW4aDuGCb2",
  "key3": "23R7Yku6mtBk2EmqE6sZ3EzbpSWsbcQzRdkudQgYNwqbnBaUwq6BKFCeGe7ASysLZ5JJnnmqbpK4h1LiLpJYu5X6",
  "key4": "66PGLvugvP573fQmPDwJTBsjswyTBYZj9Ts3dt9VsQ96wLFeniZRLsPj4kX6TicysCeLHboanK5LrqqjJSanaP2X",
  "key5": "4hmq4sFDp8Ra8mSbPCR9kF5tqZdDgsFUqo9BEXcESPoxpxtYayctzhKiX6TJoHzXEh8HrmMwjxvXJCuDTXQCYjc2",
  "key6": "5TKPLYkQV892d8EggJ5tYcNScjNgoTT6PaNoqJgVoqga5Y9TNHZfM4SC3bvqRTfbfchcobiwL3MgBupf6jS8EbvP",
  "key7": "36uBvgqnYN8hhyuBDkj61uyvo5ULZ9KXJUpp3g4Kub8qnbG1qamGEJJFLXBQjzKfyqUtgpr4G1wj8kB1GkGze3QL",
  "key8": "a7SuiLeGn4J6Mq1oZsea3TofW3ppXX6id9EBb13RGr4SkycRu3iwdPgnW9Ui5uv6ZF79m3L7UwMW7cKGUSiedTA",
  "key9": "38PNoerAf9GufNbmH59mhEhQNqyzAMz18ZQ4QDQrG7PmWSniirbCdndcteei1uJx5i2vMherTQafPeKVKJG8zbuw",
  "key10": "5ZbQKfTutxfEmEwXcqCryu27BJr4BZajNvL6117NJXw4U5vnNUARKzWmEfpXQuGnbDfWHGhAm4Q2jNVfyMQMUNoj",
  "key11": "F5Gfso2Wc1NAjy4cqkiwEmNGNYExhVzK3qLsNbBfj1jHHH8qJsEMjKHy2LrTtxZatJfXDeqH5mPRkAzaRrhkAFG",
  "key12": "UCoFt4pLtzLFHMC5BVnjz44SErWA2ZoXcaPmi2hvs1kwcHa9WuwS1yqVxXkhbBVwpwBa41zGMocufEpegphn5u9",
  "key13": "4zURbVvD25beWQU5MumsZdRrhp7xYecKkD5K1rhbevVeEbekkoyyPa7XWUKvJmcpzJboXMRmq3EEjetWrkoUpxSV",
  "key14": "eMDNX8LRuCWgBzMjSsTJdiZiaZAPNCVD8sQPHdSuPLQGkanxvN1dR5teKFdH712A8KLnpQnPUc4AkzThwgu8nP7",
  "key15": "2DCyGaeddT1twVrNBc4S7hAgBxAzyFYLNxKcLfQyDJx77hX6agR6qqo31aiEYqpydCPii7SEsYWagL8GLbRjQn8x",
  "key16": "3QW3buQBaydQq3E9yXWiEU8Pp3mAihwYZBu7zsBYQQWBkP4vDHHQmrvteAXfnwvLkxSwhbX7ipofhzzEHP2SqY1s",
  "key17": "2fQkm1i167FnsWLY8KKevy2rQkg82bybQwd4CYz8Pc49sNV2idJAiGJ9Jaa98sUEN2Lr8ux2TcFdfQo6zicq6AvX",
  "key18": "3LWJqnMnpGrxr7s17rsX1PBG8idJLUdsT8SX8eHcQAtu45DkZbZLKUoyDF1VwrNW9AukAomjHyytQrsspHkQwgBD",
  "key19": "4So2eKn6waEAHM6RRNgcWyDJApeKbCXyJpoY149rEJHJVAe6p7nMg9HkGNhveAFpjq5U9TNxKHY8SUUCDtQYqSuU",
  "key20": "2eQNgzFfmYP66DW6R2RCtMqrNKUgkvFeTGu61yhQxDrgrYfxSwucjnhmH2HTzTRuREXeoMPg5Zzy914vkmF3nU4w",
  "key21": "4uCt69XLzfj9QEeW6zJVmFTGwLB2QKFKRVnQ74vuHa6Uff4SPgniZvMynfAocWhwaBXCZjv3UnZBDYrCQTTmLu3Q",
  "key22": "48UpDBM5xLpFDECi8rBrV2gys3FDzn8kWhMDPBPLrkJtiYWfw9zgupcMXrFnoK8geY8AtSd28FR7TPkkyecMN7Ea",
  "key23": "Agqb1Sgi9m97jN5d6VMCQP73PRkBMp7BNedH2NSbqPuNzRhyGQ2Hi3kXTLpwbASepCwY1J9tecYWvhVjVFKG15L",
  "key24": "3mhgJRYknRxhigd2uwuqc9QLqWn91BAPoHhNkR6dgJHPKvxq8Y5rYFgoypj5vAB5q9ktRQRCu7S8GomVbWTLTsTW",
  "key25": "4FbgjAFc7CGHLHMaeyacKq58F5aGKYXiA3kFymAU5mGSwqHKLzXEeZ8dJ6yF4xT4kBYMKFQqX49LLn48JY8Wdi6F",
  "key26": "2Tz99Gco7jDSau8fcDhf9udgYX2kcdsTKE3mVapRCjesDmRNS5iTq4U9q985m9A5CzQwu2b5e2yG9si1e1LHdKtw",
  "key27": "5yZpyNG22EDsMyN7HEmbSofY6LVNY3KAp3zWs6azoiw6MUX2UFzJDbSP5v2fY3RWaLqAkWQuubBFDnfd7Rn5qxNv",
  "key28": "X9QjdqSwhTt2gxSUoY2jwASrpHYFbd2mVGAd6dLYZbVSbeu6BNTaW65aUtLkSy2ugeZhuVgdndhgktVjUQtkUDU",
  "key29": "3PkurQwai7f2BvY8mxPdmA6b2YYV5ti2W85tbTtAFDnRJ8ncEtDU4DZCiyqA7uScX51x6V3kQDUywZZB8DQKoNCX",
  "key30": "2HekF6ZquYMU4GqVCtTeBLt91X6g5QFTE4wFzJoxCgW9tg3JonTyHcCMkFY7je6edjtgz5G9ogssVF7YZy7UwXzv",
  "key31": "SCWSyu5s7swF1sBbQZQ4uvKvWt6XGEQvtTmTcuY13RKs4jRe8TaHGRhTLBcHFQwmy7jwhJrj5HFVyy45sZsbuoY",
  "key32": "btocQnh9bKX19E8rBsGqMAuK1YchVhFtJ5kfwfWkMevLwaTugKsMJCMzuA8tzg8VWkz89QrWmV1rh6wchvo29cV",
  "key33": "2A6P9v7buTwje8GDJ57heUmKfxT1Aaq6N9oTXF9JqbvVUb471hEBZZ14hSjJW5mJyDGb8TPZAdNXRJngtRqFJi7t",
  "key34": "2gwsYhzbGn8oY18evWxRB2GxXSgdgY57uD27h4LXmv5z29K3wDcQPB2aPuz7AACP1yUhUKzrQRoBpYuw1VjkTrAk",
  "key35": "2DM1KdYhrbV2PBs5Y7ASiGqYNqndWGtBddoqVTUCgSCwfdmDehYFWntf5sTXk8JcNVtxVL9n47m4y1tk3caFAt6m",
  "key36": "37r1T9UmRwoZ7ax17Jyui4gbbCVKnQfViRVQ1B3q5PqJZ53gpgaVd8tHvnLiJCoCkBn2ELX57uqD7paRs3Yeq9Km",
  "key37": "4SpjjfKcE8yhsbHVfjDSw5hddYZEkTYtuUSiNphxxu6oVWjAWRPerMxizAjzUyaEMNu3WoictioA3HWyx91Z7jpU",
  "key38": "2GjP2UPPah7ZFXY9ThypQePNZpQCBtqb33wEXTBangaCgKGTwEWkZUGM3Fbj9sh3rF6F76QC2fQwbaqLmh8VMdKD",
  "key39": "gqhDLz3VZWpeyCszjqaU34VzBuAp6iefKK8A9yhWvER7etTvKNXqP1nNQvdFphCxD3u7u2GiJSQfCibrzVs43TU"
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
