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
    "4rzET77Nw9ZHF7MMJQN3wi18A8cR2depZY5WRUw9VXy9eWzyaeojAbxAM1akBXddgugFWoNKAivm46DStRFyPrP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3StSxTYpHbVfEvkhiQHTPHGYVaZWytL8DfY8PGWXWekVMt4oPFCT4jNei9kg8SuN4KGpLF3MVSvgSvFeSM8a3z5W",
  "key1": "3hLB288QoqWXPCsdsFCai5yCGUMkNs5XyBx3AdjfviC9WXhDZbT17YC9JNBoQAEq4ikuBSDorG3w6M1xbMBGn2Fs",
  "key2": "2bL3o1PyMqPwtEdfUjJZaQH1Wj9pmNdJ9G4VpWxaoG3aDo6zD4KsRUmV6s1sXDzQTV4BHn9cPoxnLTkUrq8N78XM",
  "key3": "37o6SWjpjhE16s29K8FRZr46Zg32v1zq6m9VwmG6oRuZrD9nVjTyZK45J5RmBzXJPpszBQpKrXs73GbhvSRBYYZj",
  "key4": "XB6iREHR4egW69x3Mbdzr4CkAq6K3RpLXcJ1bEe8ktcPQUYS8coWG3N7YqaLmVisjngNythpGNTUdH6yuSmCVws",
  "key5": "3jMRRxhrTrVpvL7wktE2Sr9bGPqArvgZxSz8pi5Mo3k7Q5BkLhVjDHgBBJU3CdPVerS7dRqAcy9ehRogYiVXmjoG",
  "key6": "657LbaPD26JqCPjF9GwhgmBf2L4nwKpcHXKiYSzo1ni2WwQFWm7ea7iPZn9rKQT354qQ5nEhPLMoaQEXNAyEbya3",
  "key7": "3qv2eJzCb14crWfBLUwwnJrrRa7QEd2JLb3KFC6ctqVCzFgAqmLxUeSBMwPnz75dWkNC75VNjYCFAz9sfvQ5wgqX",
  "key8": "2ThN8FZfuRwbMDFyMnrPFfrqxjBYGJhMbFYSfjrjLpKtnyBNYGU8BKSZuf4pom1w833FdhSo3uW4qr7fyMXXS4Af",
  "key9": "3VvQC7YvRyDsGg389rwHs7orHjaQ5jvjGrZocEp3yoU5puJvhzo7raGdEyjhxdSXEhqg2cGm5n5rmL4A3aeZtTDT",
  "key10": "5WoVrmmu6rPUJy4dVpj5w6S8YyEYgR1n9tvGuiFWHZCacWJULk1W6cfm1cYAKRYSyQc9R5dsfyQANGY3hafygCm2",
  "key11": "RxeLTALrLhnxjhCf2HjuHXQTXvQVxScncebty6e8H8QoNdu7dhV1nbWaVhniBaufy79rB2JTL8mNPstLePsKegJ",
  "key12": "49DfKU4Phd32HXB5K5KQLtGPywfALKpKw3cyKgdpt5ULKyeWcqHYWApNXZQGFqhqj1M7XWZBymmZxSFRtsW3zdCm",
  "key13": "4k3SAm5e3xa1xvWK6HWqoEjEDTA4VfJpAUsi5LD2dEZ6H9LKWTywYBzmhoYhDnH5W7y7iuFS91rXi6wyHByi9jGY",
  "key14": "377vHqAaCAH8KifgFpQJouc78ZW1RDPsvVnFznBHeVYARLw8RjTk1bFrGKaywiaPaqqKQ14o6w3FHZH9EpXGkWHy",
  "key15": "2b8rdFJBwR58i99b9Q5yg93bNoniBpevfod1JGe1ENtvH7k7Uqngbe83gnpLFh2v9xfTHGU5W6qXQj8qaa6io8w8",
  "key16": "3GCnxe7cRCXmgrLS73TbBAkMEWd2a1NtfUhrVphALJZQPG7mwfkuQ7dxetwYYSUt6AczqXPbfQhodsCmCay3j2Q1",
  "key17": "4WTEK9TbSQhFKrSfBvyA2WonmQgbWHgVnh2wggudmGqDCGps4MwyepHwdjAbhrawhct4Db1VmfYscPpi281RiURU",
  "key18": "2sQwD5r6FTYnfwEro97jnRds2g9g5FyVkYfEkGKXVmPJ15bXXSYJDesjipfbBRbALCsLEMcCTickt9TcUSdaravu",
  "key19": "4M1m9aPXDG4xEH9KHhEGsQNXB3R8cm3TfVSG36Ate4QoSNdfgkgvMUjA94mpvi9vjg5c7Jn56DBtVywAGrMTjYGk",
  "key20": "5NyyyuSjSyZXMpRCTZuxkKCJmH3bXgpo2a9dFatuQDvS2jEDY2QY6C6MEeiLr2oLdSFfJUJWitUqbKFzoSj3mW75",
  "key21": "5vnXd6YpCJohG7M4X7Ee8ZDXRiWbpwzCgSTTaf5n6QUSZjBZzHvmhyEiW69Dyy3cGRQFRczfRKJCtSFQ9hyeCsnx",
  "key22": "4xqXyVnuHxBExGTiuGj4yLvcEY6YWGdsjTWdW1fhayc78SemDobrteK2HGxtzH8Dt8hU2JhrDs15BbcJwsMzyb2",
  "key23": "2Urg8ZJaHAN9hDUUGUPcpFMpkJg1SAZ3cngDMKKjY1HH2iXcrpEVDrHifT7phf7MxeSkws55jLTMxmakFCbG45CZ",
  "key24": "2GokeiCX64KTAxxyf5yu7i72EyJMm9mkhzGkXV9q8r8ubWC42PFgoUEDxy4iJ2sZ25iWwwvYMCeAxvzfFvVs4g4W",
  "key25": "4iRnVpTpNCMaSwbU37Cq55hWcgWvW9z7PLBmFVssZLv7dd8XvfCxKNHvFKtzWcW5GWuivXB9NB8waRL84e2DnGai",
  "key26": "1hxvA7dYsPzQqXhgD4PCUXbj4UivQxvWC1Av979JTTXr3DNtdKiPyGpgKy3EHvfmkZt6XuEwNtBTApHLYLaPAw2",
  "key27": "5Ms3EYUnsZs7c1gHXzvsSCSYbrdFkg9pgB3FXFXMjEGUgZXH8AYPhVPCLx9QfXGjzcu9xdcYf6gSsSTienWgXCkZ",
  "key28": "3E5NLJDpPvnY6KGUrEuR5GT4DrRjPWXcoyLxkGT97bXVw7eGNdCGi3va25hUe6S1sXBB3NgRVTkeHtVv3hC5RkPE",
  "key29": "2aMp1yPTbfARXBxqVYVPbAbhkwhwMo5xNyMSsS2GKasV8daA7a9AnHg5A3DidHqrPmeb47jhRHq5DxPXQFRH9X8r",
  "key30": "46gUDmEDcukshgBmg6uypsaPYDikaGUqcQ42FFfrfCWYmuc35KmtF85VKUWGfV7a98b28FfEUTRyeU2cUQzNDFZ3",
  "key31": "3qmSqSXSrGaYKUsYDodLaYv92RmLK7yh2Ye9hiAPppZpauhrNuip1S5f3n7auswVR2vqTksBrhtMQqZckpwqboRA",
  "key32": "36qDLrp6FAGpYWoUdejQyf6hn7JrmB6YvjmNQCfTQ2Po2pgKxKKFTJ4xApARqR7gHFqpqLjZopautETx5r48ekAP",
  "key33": "rsuWtS6yAZTm7TQMo5ThqaYqN3XG9vnnciwYh3fEoX8agxkc3bNjbrPuGr9XHhj3jAQ8sVQfRfgC7u87JLn3CSu",
  "key34": "4oQB2HVzZVyoaLSMRFrQyakDepy83UkxYMkip8GNdEdbfDuXL2Ze4oAxReU4d5bMSet2PiQA4qPZGuqD73dP24et",
  "key35": "459dPx5t65sUubT4KprLK8hp4eQUqAS8GPxkKzzKJ88tj56DUmcZ4CFSQPBgr2zivJmA6nBhX1VeFauYZanv9Xes",
  "key36": "56FgwYzzNxQGscKgEUjdxTBQDoYvX5qA4DAiRPhFyt1h23xGTv2jd7Ei1cGeZmKV2deFmUmJFqnhZRM8jFhXZ2QN",
  "key37": "2eUrrUGswRzxw8bR91mYCZohbkYEB8LHtjhHx93QyiuPvwRCKcBXNJLxGsvfXohYdm3c48p65smmnwtwv9R3Ax9W",
  "key38": "4ZLFKB2XaCrGnXm3HqSPKdJqJRRjBGKmVEgkPUGFGKqhZ4VY2iGSwsEU5WEQ5JDkhJ8kRMX5cc4o2G3J7WyYgwxW",
  "key39": "VdQAJ3vH7z1r3poUHDGQjpC6iYCczYn9QbuTM516AiVaj9eHyNDFQJ2YGEtL5j9JwMDTy1gqQ84sVGGMaeWSJ8K",
  "key40": "4TUXaY3CF2De6ugHTNqJnGk6F3UJbPnDE7aM5yrSL4yfJJwU9gTsZytt7yKerGpFpUgkJzB22MovHdjheV5uYvFJ",
  "key41": "2SAYM71A5VX6DdbPEqSsdsZbPTDYjExRebC2PbUSzoc1UTLAXoQXvbN5AXtyk8nSvhLQHydsQG8zGhQN2KVcVESp"
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
