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
    "2aAQHHhNDXpdz9Gv4zZXcejWyFZvWbriqWDP4kQednG4bGXtzKcHqeijbYju7HAu1GUmvEWzvVEddt6Qbht73GzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F2EjvkZLrbrSUVEnEgj5ghRT7FyPgp6SKm48mPRgbcmzY5xop9bS4aZGy7cZ3Hst9i8Gwd4ZSghkcyNUT1gQMou",
  "key1": "2PB9bprDFuvmj7V6eBcfpp97GmR9MbrDgZW88ZvNUZdik57eoxWRmHCreiWugdVQxcHYRKUU8iWgwHdYX8RbtAFg",
  "key2": "3wnmkaSZ1r4bQrPavWRaP3jjGDJWzykzkH5G3YW6M1pyF4RUiyMAs54uQL972LHFVoiLUv8ey6JqEyGwTkyP6JDb",
  "key3": "3wNpNcL6HsCdkYgMeGUCgHbJhsK7TgBeSXohTNq6eYF1h8Gh24uvpHZayCmYwoTDXKKtWmVzzdkz6WnSzE4dSWkj",
  "key4": "2rKKZKpbzk249XKKsJfCzGASR5Gpgyz5tumRKRsL9dUi338K9E6pPNaCwMZ1RjTQpwjDjomaJJ21GXLyKizL4D3h",
  "key5": "2imkZSg5axtHdBVzLZDHex43ewPE3DJfjDqQudrY6fWRcjBUVjfWSncA75aURuzGUdJy9if5LLzSdwjrjcD8AMto",
  "key6": "3n7HtqmgE1NCrwqD5QgRWdq4s4CP3fz1KKFGMbLdrDWW5ok52puYLxCUEjgmzgJRK4Q7sfPYzAi45bLEdA4PF1Yt",
  "key7": "2tTwH3NgCteDoYJzCuDkAsVSid8dG6hNi9BW3CbQz8kJ45Qcb85wCesCVM3Lj1qyMiKrzCVhcGzysCDYED1kGkdH",
  "key8": "5N7GJxRHVL1NQsNNVhdMmZaoEzV5ZjMtQtmKvxjK7mzdF7Ez4W6AH11mNoZEPR3z7Hde4Bi7binqUd2aaUKGy1YP",
  "key9": "2xj9ca4QerAzxVraKsy8a1fffj5vJFQAurAkNLNkUQhX9BKSqPBfU1aenzCajBbxgJfPSpqAkcwPSpPd5dvJs7Nt",
  "key10": "3eSDV8G5PS5USAZYDvBWcjb1ufB98nto41RiQgiELZuDUPnYNCNB5n5p68NSVX7qu8p7DzNVfdhmrpCVvbNGG9wj",
  "key11": "5U5DxUbbpCZSV4XHLaJJUbD4MAcDFinaDTGkHWGE3GSfAyRP6DqS212g1NaYW9pBC4bdmq1ursSxevWMTEy6zmKH",
  "key12": "4AnLpUQ4eUS1GK4rBHJTTPYrjeb2uYNyuNhnYfuv5uHUyy1M4U3tHh7tQEq6ZLnE7q3aNUVzcGLNVnxr8oZYxY9A",
  "key13": "2P6XCpjr4TKv5o1iux2qNpJw9ED1GsjXYzCrP8vbLNtTYqTZPKwiGyv1mzfvSqdMsipapC8jyP4ZBEbthHTpQmuS",
  "key14": "2rVGgxH4c4Sv68WxPdk5B7ZoRJxpdZ6v8jcHUGCevW8U8ezoVJ3ZR495HEVYUyjAAkmRjjzWeYdgUfEEUTrJofFg",
  "key15": "3p1dpzhvsUPEKuTW827yMu2k3T9NPZxLjF5Hf1YGcg6UFQasjkZgHeiFG3VibiGbYR4g4SY72eepPAwxfvmHNvXt",
  "key16": "3hNVRSLi9iagAkDYWnVZs1yiPD7nPQxh8NL8ejMbZn9D375ajEXZ2HEAySgZqveEBUq1JVdRaFhr1ajhzvkMxCPe",
  "key17": "49UhTbWnHYKiWURLoCMhRPG5FpQc3QhYXfbEA5FVMwRr62FZ2PjY9VKps7eHmCNm9sYLLEhG9JMKh3jtMiqYfqBJ",
  "key18": "3bJTREw8V4KbXXbRxS1yQJXNttbKPVGYKdhLNaXqA6iWA4aPNTxgkLe7pCw9f2tY3QXizL1aPv6qhQotXor6yscS",
  "key19": "9t55FYwg2bAEYciDKm4PgsJ3xbQdK6AN3KgqNWpBuQwQ7MczL2X3qt51g1kGEMFyhjGP1NRsRrrYumKDUNUPsHv",
  "key20": "78rnH3aBfpg1zkyePYMqbfEjaLFTmPbWKANkBG697hwmqQh4RcgRAT2EmNMTDmCCXgq2eVNwJQ89CEf4F1YVRPe",
  "key21": "Py4edYeQFrZ1bTTq1KpUmb7NSia5RzV6yVmVrMEMwjT6u5X4YueiVBzQGgH6HXUuud6WbtjUK385D1nzdpJQsW9",
  "key22": "4URT1AJQLsJwBhAh5XP8v9YqWxyQtAGAPZ97gTEfjTtzc3aFSieLMENThDQb1WoB9DtZpAn9TFsKtBk44GE6Kb64",
  "key23": "64bjJcgwom1hDnaHLJbRHPyp9QQdsdCqBqDPkLF3hocJUS5rnhvWuBvLEqxQQkLjzWfBKk1dFkGvjX4WrZgN7heQ",
  "key24": "5VFGz3rVrx7MW24M83QnMb4imaz6tQgQTzJAoRy8s2gMa9dZwpiuTvPUszXJ8Rr6rrcm2NWpPgnEv8aptD6TY7Td",
  "key25": "4sKk4VgqsrNqNduHxiPhTCzjPYGTu3XXbHcaggmKZFo7wrYSqzyf6DN4sGgAtNWNp2yuNYEcXQygQ9QzCaKSmko9",
  "key26": "2ng5EtTieygsytSYfnkKzT4YTQWCVeKmEtKHUsci8bTCvXNMU9sufdKZvzDTUBoSeUDvoDynNwHah5SHFearq3P4",
  "key27": "63JPEj8f94MBjQ9QjcK1pYqF2KWonRFBtyKZHMjZSDQ25R9wckSmcZTd7eFxxraREyFrFztcjrx7J6PAcRDd2UA8",
  "key28": "27FQ5NVDZb2QNHDUTRuMGpKtboWEbjyS5TA6mVpgjnixYtZNwYHjbzAuF32VYZKh1UNK6ZjDay9xrnJmbruRikze",
  "key29": "3d1mtQ1Z6qkVBqPUQ18VTwUQXYUE3kC3t6PWhqiUR3q7G61MfYoJny4nMZSZdu1YFGJeq82qnc6bk3Gj5XJeAyWo",
  "key30": "5mG5g857ficsNk7n2FBoSsVrhrtd59h6m7eRPNg2ituRpnyhLxmcGQArK2GZ8ayDAie9sNyzuGz4JhCYEb1hofS6"
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
