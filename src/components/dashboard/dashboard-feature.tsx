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
    "2ybByheQNEpEsweFPpbiLPz7M2sTxQWJimuFJtLyu2JMCXmMx3Uv4NawAWApwfAS3TieC8Y6sZTeksjJhQC3ko1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AqT51kcDb4sLs7qFKD6o2Z7kQpZsJ3PmT3HURsevENrK8SePKB2d6WV1qsFkJHUeke53nazs35emzL4jmvQ5Yxz",
  "key1": "5AGc4j1JxJitXyM6yWES4b2nFXPwW29aPpAxTc7ixCt4rgt3asWw7npNmzY3fdGvWJb6c1ASEhQAhjyFqiHfpi2W",
  "key2": "ZBDkRKxtG85igWc7g2SF8SinvAz4PiBJVKzJ2vNMbtCAeJqpN6XRiqxPkKvAAAZLXUTYxAcn27bZNA9EXRx9R6B",
  "key3": "M9udCPxBojsMBf6TgcaGqgJKw7eio7nUaQPkUGMZmyVb5JPteouRuh18aEdNcPzc57wjAQoQ5EfQmaLXumhsPVF",
  "key4": "5mkU9LKKR2vq9d8aDAHUcXQSh6WF2Z2p1NcQmLAFHwH6XjoBbv3g1YCZHAU8xkywcvbKFctDGVdcdXDXuKyE2pEe",
  "key5": "3UcYPqGGHVZ1s8Cxbywjvo8Erfo8U1KwMweSKEEApBRbeRgBJQfeVHmEK3LgC71yhvDzQPi9wmGVJ6ZAvVhWeM4C",
  "key6": "36nBrdbtdKMPhVDfJPTTHk1v1Z9hVfrJF7j4nAvwsyAy3vYrZZYok4qUiFTiCBiQg5QZ8C6qteThUbq3LVv4VYC4",
  "key7": "iyXEeg4CfT4nM5ZB44J9SoTMguH9Qb8WVtCoWe6jtab6yemuhNhGeWSrmVu2qd6E4anr6hQJHDQhUWUQExqoGad",
  "key8": "54HTGUW18S6CYnoRWwLTn5DkmMXUxjjRKavfbXsNem1wt3mzkZKRbMCqN97ujkg7VXRqZ8YWKkX6sw9R8v6cYCMn",
  "key9": "2RqchUto5zFG54kXy81edBneUun5Db1Vm6LLkWBBG7hE6VpwnYyshr34iqduMN1bHNEyPPbi6JLxoJWcdbv2JVDW",
  "key10": "5qxEL1wvXXqezRZDaLkHF9PiFviEBhnndyvrYooPNAF9hJE3KG7sJMqrEH83uVhLQNyxZfhs9uc7FRncUTECqxfM",
  "key11": "3Br47WSeuroK6UQjiureqreUyLnufeWwKJ5coZj9Z39gE9gy44tEWB8qr3Yym1ifLvVGhuPrddWKFYXie3mrTrqj",
  "key12": "61yoxBup482giKCFA7Nijx1ZtKAcFEw5zQdtueLpmPnRttGG66YUHM3FhiwAX8Jh8PdmPVympeXTWKNGkCZueXaT",
  "key13": "a3x148ttUiUDpYezPHzpcnjvpuhYiwRoWpcLH92uyPDfUPded5CcV5LoKqRHi2CAf4db2QoUoAcD9Zfr6jPyL1T",
  "key14": "21nXcwSQhyTZYtigv8ohGHXNPhqPb3WRYb2dFJ8eVc9WrvLTpUtGHTBpZYVReSJoKLUoKH9vcLYQmst3fqVaMLTn",
  "key15": "2NLVUa2V7u3HvKjpkw4bQFoDGvVm8usyqQ8KpQPbJZLZ7hHTrLkqoVY126SQLR7n3ME34NwSCkrfoaVgG7GmiAWX",
  "key16": "39A2PRXcKxGYzVzSKqjEiBaFU65TfLjddBvxST5myMSKsz5hnyJvNUzd1nnmRoAYxWibdp5gRMHTF73yZsPPPgax",
  "key17": "2gaQe98VbGwhoS4kwP9awvcNdw8K9SwFykQJt98HcuCRmWr39b93cFeCutFhyoWmvEn5DDyV2Akq3VoCo32Ae4JF",
  "key18": "VNN79ZedgyxGQzEWcTdJntimVtDU5z45SWcP3ZcM66JVZ6sPfeUzHWHe78ysx8n6ittDneaFDhdCccQHfoXZMj7",
  "key19": "48hkWqe8rPW1VcxMPraXGdF8CjDRawaU7twecku76GL1FpFDLmr9AY5Bg1NsKfkHiBgEYUhjBxXjM3njCy98JYHL",
  "key20": "2ZLrp5hq7GoLRLwohzP52GwBnKKcgbGeCLuLC2AeYaNKvdCK8U44v3MskF56achoXyj7LA68npgmvWKJWVjcYZUY",
  "key21": "3onKKcYetT5YzEiZ7ZCHmQ63EDAzURUwUHfH5KbtBXZXgPj1tYjeMt2d6J8CxLGvU2m66dK8bTh4YHpsf1MVcdht",
  "key22": "21QQ7FTJiPzQqu55d4GZEe6YtybvjatDTdvFie3f6V8cwFzBfY5xprsKTRM7EeTcRQ17drW8cCSk6boEciexW8gf",
  "key23": "3KtGjCStgLaRaLLQSJtq2tWqAnx5oiBDEH6TzRPWmCgDX8361eL4KEKNvjzDht9Ac2TTACZ3fKbA2RSd6AiykQJY",
  "key24": "63Pqvbb1ZD4ZQb5qoqb57NLBUsBBJoBBVLv6QinYVZKq5ahTDa16wrkLrAsVf1Z17H2eCJLi1Q9TJybYD6kMUubu",
  "key25": "3gff2mcMdsCCyS6cRXbbgptewcrRRguaNUWXnwAJgiRxgPM97t1YvLB8drgUVXdGco4K6v6PmotxcDse8NqtbEw6",
  "key26": "25tLj6ppC7fhPGTkURjqk6oMxb4JxjxPXcs4onUJB6CGQy8pV9eeqTiD7Gv6GgxLMcfhGZaSi1aJymrefmzQwuyn",
  "key27": "27MxFXXuThWxtVZK4YG4cgqpkHuQ9rVFrUG6yrFDSig2AQKfqnrbtH7ruKLahRYjsFD9SnhmudLSoKvmB9UkGjJT",
  "key28": "45VjMTxbbYt4uKK3dNThBQ6W6edh7acLVfP1YdbhYew5XoQCDxGwiFgUZSNPEgV7msfCHHw57ebm4EK1Ysnf8iHL",
  "key29": "3giw8Ctm2vsEzjxGZSpxd3hLvn39Eb6us8YhtNHbcmCDmg3uzTe4KybtjMproVZvzvTUYD5dvmjUnSSRbMKbaCg8",
  "key30": "2HCrNzpvD52HVrRjsBHrZDE988o8DamPf9waXGci7eFKG9u4R4Aw7rS785fvpz9TLyvnHCbVkqAgfYSzX7qafbCZ",
  "key31": "4D87vejiZKu6P5brEMB19qETMkdeDZ6CkQZjLQ7BWCrC4R8kecE7moUn29X3bKpPfzCF2J2L3aGSH5sNCK8Th6VE",
  "key32": "4D951NnXn7f6VKpL9FSqGwd4S5R8ZEyVWvhppVZpMf6mAVfKG16XnWNeGhAJAcnj4dE73B6xzFRrpjmFW9S9aewi",
  "key33": "4oKeP3cdW3spsoZwPWofVupVQpZQEezpFJzJrgP3KYi1ZgQZtqRTFTAtQ4F6aKi3Ygsn8o9BissA199MABx6zx9n",
  "key34": "5rnkxtRFgL2tpAJ51kxi3smjnx4VoB3KrXyUSTdnmUccD93KnhP6M8R3YLhmEYt4DsLVQQAPPDMG1AGThmYx3RR4",
  "key35": "3JTSPQVy8WXu1mpDVW1ehvgnESSccz4vPad26YYoPcphSxa7pzLL56M6BLqGmekdyTpRxy58gJTDzMUp39ryxRp6",
  "key36": "42S4HbmXoUu5XnKZUdEtSUi7uCLvkKgizdK8t7dDXiu4SCuYT5EBnwv7BfVwhZmwHH3on4tqorwwVGVwxkCYq7NH",
  "key37": "3vJCokzyyFxKXCoaTE4DJfiyKo3W6HQfiJAz4uyxPXH6e9us4fDkZJN5cXZS9W4YZxPNcyEMqrrsJTy5Syej78qM",
  "key38": "4XhHRxFn8iBc2EhgcT5QtN9LMA9i7x4ztoNDJminVUfVyd1rf86DoY4coQd3bqCBojAhubxiHogNNT3KxDWYiHNX",
  "key39": "4EAXUhNmXhnjrB8qzYJzuThCuHGyAFH9md46RgqLzv6L1GeMGb2CaYVhCnhKLYmzqnBC55D5FXgyZmSDs9bbSbQG",
  "key40": "2Lm2gQeYLEc7g82X47bzNJsatWeo1aKBfjpUNL9hv9QdHG7r2dvj62EmfJd7T756iRrEakAQAsu5doEdjaZCpf2C",
  "key41": "4SvGsHEhLUSNwkxhiP681McSMUartaYeXjK5LJ93Hq6BrTWLHm7N1JxdWfmvkLtt5BgN4rPNKp2kjGfkiy5afzCa",
  "key42": "vLxrPxZq4yMJ3ss1rSTLkeJbG2FvXBkJ7kTdPbZMtHH55PRfgyjkUGvKgEjUkj2QmbQksN1bfRk5HUWrn5zV7EV",
  "key43": "3Lkb8o9C13CuZARC6JdL9DKqW7FnDzxiZHS8LdvkPpugDmprxkti8MxhZr3uMTkfnn2yXjNih5azKyY7PSuxzkWh"
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
