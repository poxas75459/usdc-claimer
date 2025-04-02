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
    "3rQSj8SfM92vCJq96woGZL299kcWVDd2YWd7mhBBBLdxvVjiGV3rcaE93HXteZjE8i32HcxBZ4hA6kFU3NJDaXsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xc8zt4MFeqLiQ3wproNpHWcLYkPHfDpTzQV7eRfZS1uMYYGrUb6VDLpDufn9Z7SYTf4XfFbbpqoj7LuRJFCe9xJ",
  "key1": "5csNjbfpkFA2JeWEvmra9x5Q5ewD6k7iPWKu7WUxEwV5d6oR2LmrQ26BBZVYD4KEq6jNxAFCQhExRV2mWmQwuDye",
  "key2": "2BANfJHv9zTATERxjWK8buJsStAxN2amQFL5EGs56H1gEz3qdRKCpBA7ASSCDT9AVUojSEtcCcTEuQ2vBRRf16yQ",
  "key3": "fGjvfqqK3tvSN8gWmQ7i6H8vW2JZArNSSbKfnCF2Tu2yZ4PKMW2MV4idPgs21pUCJT2iJ6VT7CJKJe2WxGKNAuC",
  "key4": "4GxvXtHN8NyfUzAGNhZPmZ1pjXmpgjP3BXREe7p5qRTyfcRpHvMrHNNbmVsaqfCxqfakBgtxRfKGKMktq5KNEVXY",
  "key5": "xny8qq8VY35ydkzoKnMWQ6wkaFM22tr3QC5hvwNLCadouHbgxQaiNuy2pDgzmUNdqBsWw31mbGxSggQ6nKJ8o8i",
  "key6": "4TZgsBu1rf6EvsXfV3iTXU4jAAG5rPS1rvPTGvX7SVFyVFPSSZk2WG8nZFcJhBkrEBZP42rFk6DpWZpZVB5xamA8",
  "key7": "62vGFFjqVu9h3a1iqDEEbWrhqAQW1UCktmGkUCPHwCqhfChFCVR5yr7jkFn211AXgYXR3Az9PzXfpSMnqFcqvzDH",
  "key8": "4agZm7APHpreoQhmK4DPJiraXEtLPy1uLYpdRbXe5znQyqecLKiJcAMmB88Pd8XFgVjrfri8jqrSkhvhCQL8wLRj",
  "key9": "5q5QXbqwbrAUjjBRdKFa4LR6wbAY68itGYzGZhzqe8nx1EPpQY6hJjK3Kim1Ej8so1Zm1Hn7asFLS8S6ch5JVn4K",
  "key10": "2RB9nuKcTaRXuxPcukh37pfoAzdsv5xFMnyjrZaUMNM95dZ8JnK7bdFquPKFNW9mrUqVnXuvrP5ts6SotwmTqZtd",
  "key11": "21k9zMDVdiar4PZg5b3nP8fQsQXRdHZaYQm83cm4goLxDDiGHiAEQjim6XcqdCEGswSz39BUQCdeyWjT8ZqZoTYK",
  "key12": "54qy8MLeQL9gXV12qyEbXUgxxw3k57cz8XnH98PwzAiEFwcy3mqTV2mAhyf5vdF4V2Q7dpG6RUvyfAFFpz4nzVun",
  "key13": "3eQ5BKAQguKUcwZgNhzs8XyFMR1c6rt7nPVPhQBN1D8t1XmsEtYBKqNJGMhM3YZZMiVr2YbAAdBWmiaQamp5rHRB",
  "key14": "2EHxqk9SfrzQtUSQpi7ofoEjD76vj1KnbztfhRXz5bXigfN4DHTrTobYFNKi22KLbNaemwGZGxJNSVDLU4dYarV",
  "key15": "3bA62bYXXe7Ks5xXgLJEABweeq4eJDkie3FYB12jheJUcqfWWnoUCd9tM6cpU7mHyAQ9vwxcV71N12aQiRsPFK76",
  "key16": "5sbVotNkd1qqKdMbvS4ndegzPQ3URe9MHJYHMwWufEJ1o2ENKotPLEzPjzsdBqfGk2MoaWGeZumKnC2tQzUodL2M",
  "key17": "5yY8qBQwFJVSKfxKtod7WCzZH7hormYF6GgtH6ffT6kNLT59FrJBPS5A7QPB62aM2HtQ9ib7L9ryAY2YNQJVpWj5",
  "key18": "29j1cHaZSJVU2cz6buQ4uJye6Pf9c1uHknaosrzP8nKqjdi8ap1GV4fCBiL6Q3NuAGwkudmh9VZvokajXntX2Rs1",
  "key19": "62F3Lfd1qk7CYSWXk4ZKgrLaNjJNwmwj39RBh199R4vhFgdEX7HKKjuf8ZTyG496muqdRQrYJderjNvD6RZTNrcv",
  "key20": "TSSRU1UGG8iJHybuPauy4qowurUzCkENa2Ba2JrFZmnprL2qqwVGCvZgQqT7vd9AxfVtyXq8axKcrXr6jH4mKH5",
  "key21": "3v8HTxfhQ3gkS4Z5LsCyh39NuAN2nHaGuFhkHhgMDdXFjy9WxJVVT8VVhVYeao6e2cn6x4oHL3Cg8FV9RWBurDLB",
  "key22": "J59wDykfEirheMp19CwYeJnR8TsZLexcpifHGrxzDytPekVdmQXhPXxSXVMY5EuPBWMWCfEpMiWSmerGdwCtk8o",
  "key23": "5WFxtDP2eeBCVLRuxFtHP1XZnzXp2UQrRBX8yo4KCT6toxKGNxY19dPkbQ9dLQi3cgBDmjycihMbPrzmuY33yypp",
  "key24": "5dV9gBwZMPqFGAGEbPJfiwLKRzqCVAYattR8VZML79RTrSjZqoNiqybSTcV5ckYSfQy1EH2iKSUkPi5EJ1tNVdJ7",
  "key25": "4W9XGyDEU9iVi6jsZZydH87c6FuNVh75R9GNuUeEj85AdFVoJSyghF2eWrsNWFtENGEfmjUa7rRHGZByK2uLa3tj",
  "key26": "2cYrUEfkFxZm6ERqd447H7zaysweJwgsR8HwJMgy9d8FTZ6Dy4xeHf4HQdzsXPPr9FKYoXwYcfSqpQNGrAFviYyK",
  "key27": "2e7SjMQFPfxbkV32HDEUFozuk2CZ4T4ZdZ8835YCp5xNM3zZhMJPHL2eYYnRh1SJSMpUQvj2sCSZUyFfvP5wytQV",
  "key28": "4wdH7hieHdeKvcP2KqZYCWGXGDJ4t3xHSRATK9pgwUXpNBcpsBVVAcAQna6eBUiixP3EDwGUhZFRMXMX7TPmjjUP",
  "key29": "2Bfhu53dkft8wSYgTQtiQxijBPUVPrJ3zE9wduCjXK8tTfMxcL5tfBanBRcw6wBkyr7nXNZukwtMccM2osJkXC6b",
  "key30": "5rB3WcvnsiVSyDyS9VYhT68gtHY7NnD1TBq74Up6ukk2T1njqD37AoVqyzuTqDUk6Tdvv4RmSuTC1WFrizJEJB9X",
  "key31": "562HjS7Ani64aHNMx6sSAm75Nk9mhv9LbeL3dgNcyFCSzErsezNAy6MnNTuRTBQYXJhHgqFgx64HmYJsKKgZG5DB",
  "key32": "5xgJofDi9pq7SUQLVB9sjCunUieJSe5p1PgUfhdxU2JCj2XCoGJFT3z1hghuVonDM4aNNMjqa9xZTcTVfzJ9kGVg",
  "key33": "Eu1K7CVo8voYMkMdJxRD187eyPMBrBhRSc7rXvJHoKC229EScjXtcVkvHfp6qUYDPsKE4ZXxYg43r1oJXcAujuQ",
  "key34": "2M4B2APTPF51iKKNtCRKZWzEDgETNbv8JA8cayB4hRKVUpuj9RtKeM6msXCQt6MvLGt89TPgiMg92b7zY86en351",
  "key35": "3QaqGgcw5ppijLDiMMBvXft7xVXq4V2FxAFkzdRvrjpX3SonovE9p8DkGCsTj8Pvj9uEkT4X7Tt3HVdw3Pqv14YG"
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
