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
    "6Zi8No93kpfa46pT9gyWKzDGwyrJUmuMGsYjr5yr5YpeATBRd9EvAnAaVzSRzT25uk59caZRhHVXPVf7x6xyMem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mWKPX55dWxU79F6SWm58GQRJ9tfXmeLhAfvHzDhaGkDyJ5V6PrUfZYsk7gsXSse2JAcJbPBHTHNDdb8hqB8ZZ7a",
  "key1": "5AMMdDJv19dSPPAo8FUq9fQSUFd9XNFpYLfjsJE49yc4sR74xN8iub2s17kW2YeAvsgtmoK3hi3CLqVMFP1rdfSG",
  "key2": "4nFQM73fjojjVY8QPf9VLVr8XLgAUVoBWxebw1rLxPJjKZep9vCQhuoe8D6p31hgDCsUJRD2p3skLzcTwSgyUwBm",
  "key3": "2WXdFJr2oe63e771fGKTrKNc36wnjvjJpD9Ntbe89Jq6GXhNC5p1vyApyFX9DUpfRUAwM16Go4vsi6jyaeRsRU5F",
  "key4": "5o9cEGMKc6xs8RQDoT7gWDpzkHiqswvzJwh8FxhV6aAZ9gG9Ek8ojQ6ZDjuhan5Mf7d7QkGQTVUJTMQo4npq5diG",
  "key5": "67hturmismpB37LAy6yMZij9LtdvnVi37yqpJYXJmVLWipGHGEtWuwxKhkUgkgx42DCrhMk2Z2VsgF9RU3axRhF8",
  "key6": "3ygHUSzG68oqHGPonKipZnZ5LoXrN9Dy2QQUd4JBqH7eYrv6cr7SMF7VGhi1FzFaPLJQj7Vha7SwwA2AM6N2ws6c",
  "key7": "kd9mccS7bPbccbbU5y6WBWq1DR45KZnLdMN6EfCk1UgE3pEQ6Tsk5WaiRhnpd9T4cAtTvfegB2LBZrLY7FFaujG",
  "key8": "3ZkpHizbvoGkHjpJBREBTVYVVi53wCXaLRdf2XgNBF61aXfLqdu3Hkq1j6jyb2aKVt1TaC1BAhe17jzTD94Nk7jg",
  "key9": "55d6tGbZU2g8gLCinuprfr5zJ5odCgkXcc4srzmffHhD4wDk9q3gAqFWKQsCB7y2r8zVjvyxECh1Dy2bMHg6vJ9W",
  "key10": "3VBpp5dZ3qCZ5fuNSazaL86vduQAXFV7mZZeid76Q6ArwYVCYtTYLNAsuRZ7Gk9bVLVkxzChnieQuEzTPo2Qj9Cj",
  "key11": "4DptdcpsjZhFeCj8sdSo91upfv1nqaKCUcHYJnF94kdi24LCvHovdNSqZJSdr3s8BeWTG6J283g4zyiza8N2dZRV",
  "key12": "tbr6CJ59TWahRLSM92VyJYbBZ1832KXx9AnNpztYNeaXqX6gVMXC8JcLRawgKMt3r6Kb8J5zSyaEmSP7vJicCV8",
  "key13": "3S5g8AadoCXmtqe3ohM1jfBeCM1QSfbBuxMMpQNb6d8DMwtzMJbs83MH4JT2qKqsuupAVKadaBEn3QA2QtbXwZb",
  "key14": "UW8HRBHo83bD5zFFp9xG5Xuy5Miy3XUN7yEvNikLR7biFRbVhhuEBnGFfDc3EqbqpEJpQTdhAtEt9rXFtCr9n49",
  "key15": "5JJjVTrkbhMJo56uaJwWQ1qe4rCJxqCEnciSG8e97u5PmyvEso8pVriZECNQyMqkg13FVg27fBFYgeKENM7RQCv9",
  "key16": "34rtnEiuXuFkhDMRw5KmcbKJW8cngYZ5T3AEvCojhLVHxEeSBeK9dBLnDkWwTQjAPfeem3g3firHNFEbH4ioKPzg",
  "key17": "22hjykgq9tUbrU6ZchJU9FoaoGYW2uTvUpNsmvdEVbXAzNQrfZJTR3JFVhdzoJZ6Gh7TrGzZ7eQgWvKW7imssBwP",
  "key18": "2LHBvRPDHKWXcYMaJ5qo5F41LK5MQq5VpWtFjruTpWhvNQMkV8oDFGez1kmrnBPrw5yuPaWp2AKr8EDCBSMhri8G",
  "key19": "4csXHG9YHxoB35L9tjKQnVRwQbrqV7SZZ2bPMkX1JiFskM8unFe9BWhiFoWLEZpczArdPiWVhRnX4zGfkQhraaAk",
  "key20": "3DWdnzzasWmNLTSwQBQQR624fYBb6WghRxte6Fr8bBx5eEVwT2PxN2KKNkDC6ei7t9zFtgApDczGwDphuo8fSQVH",
  "key21": "4ibbZqwxEx1FHfBhrktNmJsBy4TftXpX1zyEgBNPYiCq72qVYLHxBoV6YNN8TMfu6a8PqaY4up5QvFwhp3f4Nj6J",
  "key22": "WZpissoyBiBv2ZNHoQ4syBZYXfY7LHWSLsVFkBH8GHToy3fEUWb4fHjpuGMV3wHx17QgawuYPYcn3H8A7BVCMV1",
  "key23": "5cTsBpKWeGMCj7UM8xeMPqGLnfeHrp2g6Z1gFf7tfiuTZh4mn8tVJmwHPjC6XF4mQq574jQbW3GzZK5xgXtUuC8x",
  "key24": "4hSP15S8skqj4VuGa3ifW5ua6BUD9S5xiaoEf9yuGq6kaAYuoQu6y5pnC6A4BcS65FGTXr2UnW9y1ARPui2mRCnr",
  "key25": "3e8czPNHnTfCEiPHk35YawxXWsPuZyeFnp9irbWs51BjYNrnzknc328UJuCFLyZ48qkHnYsggpkuQw59mQyFkW3X",
  "key26": "2nZrbW4JnRyD311sE7iRH6rUTwfeNjKVcK52vziGXNPW9jmmRMRd2VZVu4DDXHXyGbX6CfvREZLuyrRTdQMeL6Rt",
  "key27": "2gUbv6uCyxCKHBHSGPQMmqicdspWn4BNKnpdK9kGkt41nHRnWacmxNQcB2htxY9ocQ4xawAnzfzMEQU2SZmL6iLc",
  "key28": "zet4A8qm2znSo7Bez9oRaYP5iXaYe3T4HYr5mRp2TC3uuow7v5St1CnndMPffjEbfs2AcHdmZcmAvkS3g6YoL6S",
  "key29": "5D5BYYQKJwBMVRBATUwsbGmbruBLLuQLP7AWYne2k5j7DQY8VaQDvvPnAoGGFSSwzgoPS7EYegTEoR13ACDdBxtZ",
  "key30": "3gb5eKHLQivvbjzwgFqHbKJ8nrLf6SnmxjZt6D4u3RXL1EmuRtHKFZrV3ziNe38VWLKemDRNrGrQVwUYn9nLPax6",
  "key31": "BrETVNYyvvTmvJfwmEmPZDbeiZCHS3gx9CqQLVY8h44uvy7MXaRXARJeMbeuPCKhSU4tnXz8yeWbaheKX9zAyCu",
  "key32": "2ofbdX3t2dfYZ5KenBMZaS3XoTFicwWaW4BagPFLN1J7Jf5LQAWZPUgMU3uRabijN5w4nQD5N6NYvEdaMbc4FeyH",
  "key33": "4zM4qzL3e3jDjeJAnpKPe11kK4Z8jPeg2RNyQwe1TT21kTGyrhnjphYZFSiVKhEr4akxhMWGKUut92k32TjxgFfR"
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
