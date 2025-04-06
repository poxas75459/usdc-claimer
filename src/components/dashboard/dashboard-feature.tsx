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
    "2m2VV6vye5fyYKdauenuXxTRLDgFcirrqMJUWosSgBdbwc7FtkeF2CqD8F7QrR4U3sX29Arqo2QVFRpqtUSVRffK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ns5X8T9RxjstmcmZ5UZJ1racyor3zQRv6uLme2tPGdxFzdRwzK4U8ByKMnpvoagTKNSwZm4qaNuQYvQ393FdXtn",
  "key1": "ywRCSmX8egVUzr3KNPahCnwoKg75bBwGvZqnQUPiEjk7hbADZGiQu8SyKbH8QFq2VzDWJMzGCepEitcAtUK7DLm",
  "key2": "e62bTHR3azByWrSeTWCdRBe9FxKxb5Z7nQ1BgdmY6UVvfihTm2yxyhf6toVFGBwhv4zaM2h9H7G7NLusLLpFRwW",
  "key3": "5HSKpwaM6ivZG379cv1YJXsiNAu4YFT7JRZXvCxzYnCtkXvj9yZfMsQ4NNr86uN26A1BRypQpUtwxhnJj8dHLw5D",
  "key4": "5aZMj2vuKJyydYYirdHv5vVak8SjiRwMQun1QXxefpECmBg74XFDqxAxK7uxEkw8Sejysyt3UTV1mcmwBPLmaTTt",
  "key5": "bnstfF9J2cvFYmtS1wqYXY1oqt1nXx3SPVWAFhHzX6F16DsgCrvqUjQwa8Cgk2Q7wEK81JyRHwh4oGYsVMNS8z1",
  "key6": "5jDF4r1NQZPE4VCyvt1vK2xvp1DBvPM23NnzFkXW4kug2V4P48uFDDbAwkD28pcG5aEX279bNi4PBbRPAwMr6usa",
  "key7": "2S5zrXjuiyGpqPG9mMbQfDdjodDMtJqS8qpe7RCNrEz2YhnkuLYznnMthR4RorVGjD2Sfd3cocZEgZW6QF7TW6V4",
  "key8": "3JQzNt4fQPhSM2wqPvrQyFzk22h1N9m2tyEiB1ntfcbWR4M3vvGsRMFRBBK7YahfxaZScK5Emt3bRZGNk3hrLqFg",
  "key9": "3rKaP9L7seUDn3dzfzN1se9zsZ9NJaMzCsqNiFuxPqEa8RuG4GdbejvGRinsfMzS2HGoM7b5N7cZoyTgJkMMfp8i",
  "key10": "HumH6hCcfVtYUFuqPgH1THiRm77R3p8PsXw5qkXymMM37URzMt5WGNPWMqY9Zqb2f4jst8PcCn59ZtG2Stxbaqo",
  "key11": "36Z8nGcs8jdTtXRqEB1MT6yzE9Uy4r9SxkcKvPFNvEJ5MB9iFjHiGFVp6WANMMtw4M7WMxNQ4qmHLgjV1nHqWw7q",
  "key12": "3agbWLhfJ8cumnSpP8m7DPy8xvbWVwjivwW5STmLcQRvYGXy6gM9D2GN214Gy9Hfw7JbnxDeWtoQ51JDXRJ2JZMg",
  "key13": "4TMd8EJtBCRkmNqGRtYRhYXbMPeQcCCHqqaLTywQCYD8ptfhkAS3ePUH3f6Dyz6BHA1uwBoZfcY9Fddrjz7x3Fbq",
  "key14": "2oQPBEYueeHReaxS52UrRQ8kZ4YYdM2grf2YqrQS45RGdg5QE3XyPWBM9LcQbZKN9pLZEP2xcMvzpDnUZi7opmEL",
  "key15": "WNJ13h9kWmHJzr46txbXyiXJmiSY7xzdHSEZY5ju2ZQVPVWYZYZsqJKDDBA6bgMam5SYH92YSytggzjzvPnarke",
  "key16": "Cc9yCYzNC3WQcRR8uMsvNS8CjwhgsE732QvJ2ruXW7mDve9HGushmD9xz172Kt3jQuZ6TbhEbYkBF8cdivKtykS",
  "key17": "5vxpfZXzdDApsHN937x9AAwbyHNRfCqvjskXD3aqupmt92ZZoqmDZJMxteZYmgTQpZY7psKZ9khEdHUDMVt2XYDn",
  "key18": "5o3q741uAW4qow8YteYVAG2CWk16YXJjQdx7zijhfHHXTNYMp5cz5qkiB5uUgZYTUpMH44AY6W2wXBAzcnzJqiE8",
  "key19": "3dbRzcU1yfXzhbNo8jWnQpjFsJVV6HCPAb5ewP2Bi4wtvmLaHeHQH55kcwahDHpRTps7BaMp11cCawEp9tNsrJtX",
  "key20": "4dWZMyX3vvq4d3NXm6aRGk4FxxPQdh4tw9WpwRe2V8nYL2ufwMcsnKdh4t1p2VRQghnBwaANHiiubutJNHiAUiXe",
  "key21": "4MeU1TrCuxrUgeQku2vmdQBsiXc2g4dbQEj6EKgjWXfammT2UkCagsNz5qGtEnYxHA7NwQu42o1J3eSLw2JWuKp6",
  "key22": "4MaQQkYoBGGN7STbybtbkrQL1sh9BDa9RAQ5ELt5QwNR5UAyZ5Y8AMwteqFhQunHMLiLyGzUJxeirs53VAuJijk2",
  "key23": "3eT6HzYvQELTTsGvYqwF7aVLVpNHjxmEgtLm8Qoh7DZXPucdvScJFJYs4peN1wXAQD1KUc4AnaS4GVZ6cL35XJUF",
  "key24": "3uMYs5bt4yonSeUJwakPrscZ66rdDbNeoLU1sfYBSdkykyPu2mXJCsCn4Bhib7dKrtTVXzAnzAe5ZS8bUrvUEfZT",
  "key25": "7DDAGe6MnkGxkqp9LYGAN3ksD7jbssnEDLHVvzwb1tEm91Wpfjjmtc4pAcXFNnizvA8Lm7wca6mag4wHmaGYokp"
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
