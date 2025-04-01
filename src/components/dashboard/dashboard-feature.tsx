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
    "4kA6kDajxnViwq3hda2nBZzahP1BS8X42S6uEpiCG3xw26cY1Aj2JFeKTx3regMzrVkscisCwW2LKpaTBRPT8fQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46bRenoKkuc8YK2LG6KubvKJKu5x6V5H3mLjFX5xTmuAN5xV8GMHvGBDoCkNxwrwWV6f8MSS14SKYT4j8xfJeL7u",
  "key1": "3tzc7t7UFc8v7N4WJiXJagd2HtJEhAgf4M1Psuw6GxqioK7UuemSC67nHUgbr35e2AYxMojroJ4Se1dWBxkDgFUY",
  "key2": "5gXharuQjp6uJGMsmFXPFFyYbKposNNriPfekYrJ62ThX6SmsEDXVPXA5w6MbQo2MdPwP1QPCQsJwzCuLkLythV4",
  "key3": "3Q9ghixNms5brRQLqjvJZTuMdmZhyuS5AePiAWkXhMSSboibggCc8PBLGfs9BP4cTD24BF9U9SLnpKmPes7kL4o6",
  "key4": "3Kt9sS7yqwsWM5nL42dMxGua7EUsq5JrMd1jXtosRk7YibrDLiBnuZLRQ8eFsufVkRThPvjeWMNy9WYgporKbjqn",
  "key5": "5AruemYCvkNWpKStM9UExDegqWxZseTNmU6bSvEY8agX64bcP89YSn1T773hGGXn4nRvgJVhi2YMk85578se82tq",
  "key6": "549caC9NtqCHDAwCBTRSbtSM6bfi1fHtd2mjLJBNZd6Fep9uZTjeuuUaJ7sdJdbLCV8ETbReRTJbyJSpbhuHvK6C",
  "key7": "3CMGXMoua2iCrmwNiL8YWkxKurHCGpW672ANnVavEXaaRTSXEJyVX3WSC18nbzq79D6E7W5e7XNxdxgU2fGbfY6J",
  "key8": "3JHsuUQtsPPA4vtjk1yLTHQT3moaBo1fEMRjFrerFHKmmNtiTfmQ97uU4EV6pqXFijvF66vhTvVkfCZ7y4yHcY8M",
  "key9": "cmiLY8c2HXqNruYB4bnbraUbZyLQkcU6EvDuDdim5XSx2d1HLhiDN25v33UpFXPwy9281XsJsXVLhAvMSFMqPWE",
  "key10": "5ef6dCDGHaPcKsa6vshMQjYVkmMoR3zmBEjBFBAZCAPGHStVFNWoXvLWrTnwMPm8Pz23uRiYszLp871bd3KS1LGE",
  "key11": "614XBcRdwpxmEA4GCqpr4JJtGzCyCjm781GgYGBnVCi2kcFsusZY4Lniy9GKFWZZjzSyHg4knBcV6LWAPNz52tqS",
  "key12": "3jaKGW89yZEKNvhaA2Tx2JyzxUj8hPr3VCXDQKwTHeqpY6F38JgpyjTPc8q8TL96mmjSeLV1efouvPvpbXHgxNRy",
  "key13": "5JpiLPqKXftWfaSNTo9catLvhKx5fZLrKfRRn9JP8Eqp9i285kPRrRCNQUcupTPE6ywxGnZ18pgpp4mxvB42uUaK",
  "key14": "4VhHNbFZcLKASXgsn6cDD92xgE5WJisuDjQiQNuRai6gV2nx3KUczLRvVvnggijHt7G84HvDjqb8Zi4DkwBCGeH9",
  "key15": "5Gc1YhSpXXtjtmwMmgkenw7ryCLG4t9dWDu5H8EkCUkLp6mm7ccUdBLG5fDPAe6EZz4C7tsBy878eQz5tB5kuaQw",
  "key16": "2kAFUacJf7YTL3dKTgLRavTezuE4bxNh2QPvw6higAkn9RJkHJjSD77p8tLjw9ty4APz4AfLy56VdTf4dZ4Gickx",
  "key17": "8etL4CpYEqGdfncyBNkADpSxUAfHRVcNT2QQM2VWSMzNLc6cn7mwNsiZ4D9XG3codLZWxuhFHKxUps5UWASLqce",
  "key18": "46b4KjUSviKaMQHdSiGRu8tPCbsSjVa4tXV8wSWGRA8MFzNy5jUSHrynu7Xs1pKcddq8ZHTuQTwUPUZ6tFzj9Nb5",
  "key19": "4S7awF4HAuj6Fr2b2sY4zM2jJUjfo4mfRMJQioTTfsDQ65eTJj8daZfViP1CoBgAa9z5WCJ8Qm9yVFckkN1LYi1m",
  "key20": "64fBfVRzcDPSbcMXntd29mThUC6hCH7cphcKwyCkMWxtDM5uab3PxQFgezXa1RuKh8bqRshprjn8kEbgDsb87mzW",
  "key21": "4Z8WgSpW1g6kMziLcwwGR2ZyjhD8vDYpisPPWhutGqVwVzFuBGuKfVmEwMuaG2wWp7JEaMsfNqtSX7EZ14nL2ThZ",
  "key22": "JZE3MXJ6Cx3hEFKr5ku2BNkauLWVEHzUydubec6ueoQjYUJrUJmiQs6GvkpszUyCfYxr2bFc7ayBqj7uDYzJz9q",
  "key23": "4VCXX2bHuTs2ea5M27GkYz9KCDgfvezbNeSkWJZNg416ubNB2PVnbmmzvqcskr9vXkrNXWQ5HxxoZMtxdqSEWXko",
  "key24": "2kyxwS8zVquQG5K9EkzEcaU3yCnwy4v37B6a4uMA5R4ZVUjGzXpsZ8mKuAoFqqZZgCAZJUXyedYxnV6TEv4qVUwV",
  "key25": "5WmUUZ8rtiuBrkbxzMv652cNsGToqC5Yp8dgNosau69b8AXzShY1amTPdStSjFnNt474JxZjwYQjC8cJUkATqvcW",
  "key26": "4jPEPo6G6Sa1hUbuEspT9qTq8Poi5kZcQoFqPBw5eq6LE2fXquomicGMAtcaiecaWKuQ7hgYLbx9ykCYtzFzpCyt",
  "key27": "59ot8LSaJ79zi6aVEWWhJGRbCeSMAdsB2QsXLYdUhZCpCYPe4BZA97TxR3npWu9uocjNQ1WJGpT7ckQySJBQawT2",
  "key28": "2MCK4RiA13XR9kXVL1AGKDsxXnn4ZBU9roMN1cJjjALoAeCEGYkQMyA515zCTm9FjMCgqu43r2mLEeU2d6b51BLk",
  "key29": "5Cx6YjbxDiTCRU3FV7AQqvggaMMoXpwgz9ReNLLEv2FidPY5gK1Npr38XEDB6mWfEhnN2KAeqvRY3VLzMxkxjiD3",
  "key30": "3TNgZmsFNtwB9LdouDUHiGp3wNs8XMnL9xEaFpytfnz6jHZK3akUUNC34U91BKj6nbrJ7av6iqCEnMa2cf1mL3bC",
  "key31": "5985oPKkd9pbinoqapFZQ5BA3UVuf2DXciEqQNGyHNZHircpXzhY1G9MFCQTQgth8HnU9891FxoahBtYxK6fHzYN",
  "key32": "6MgNouWKcSek6LNLt5HdgVsD4SbFhatMenWgvU2rKVSjjEisNvdrCtqFHgmHLbRStjVcu4vBkWM5t4JR8eS1x6T",
  "key33": "43rqo6r8dtpsrYMoh9tdbRYei8rtityeVuXz68k6bcY1w3FYyJ5bZKPvYCUCZcifnYwwJ4PWMnShTDZmVZt8H7EV",
  "key34": "5j7s17ePTcyooVecngW2CiN48kxBavZg2KR73fcKfftniPUFu23pLuRv2h4RQVzwTBF9EM4mzfpw7SEcVfzEpguA",
  "key35": "5qesgUxXAD8kZTaZNhP3yggbaKErTRnBWC63qu7sAy5C8UPPdKf5uNvh483uuA9dhFgqKXqGEm9idfMT24g6zfiu",
  "key36": "4KnJ77CmbGH3dSjFt6Vmx3uDhTVGYEPoFTpt5UNaR9W1t2iwQVRrwSQz8cH75jw7KHKa5idzStfYHwdmevyMSG2h",
  "key37": "GxphiTj9spo9RAExLKLqHzT6VGo3mpK5YAC7SzCvCkGg7gs2Szqd7Cx1Vcem9d62cLj4ZpVCAkcyzAU9jwJZRwK",
  "key38": "23vEBXXJxAzXtjjjhdmsfWniy9S3xa59hRzqnWL5HCeBKDGKhaFQNddMi9ySwjejppxLXEjvh3URuBy9kfbxZggW",
  "key39": "3RJgKdty6CrTczuyH8xXgkd2S4HTQwbzcrUy9Vr4k8yLgna4pFkoPXfnkQxBGtgRDrqqvL4uPmTQ9MVqBmCVCkyV",
  "key40": "44PZ7CfpKvYa8WGepb28mVsmEFNLq5f8kiZfwAijkZ15LK2r3mAfWUnEpMzMxSjw7R5L6yG2nvNPWUTeY74ty6F6",
  "key41": "rqeKjuWyC2SYfrYyoSMvNumKFLVsBhXkkdEt2JZbyYu1pWZHtAiE77ZijjpcD1VpxWnR5g9qXj8xz5257BVUrRs"
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
