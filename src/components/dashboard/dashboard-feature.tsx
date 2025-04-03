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
    "62UXVjb4hwX9htNf3Vps5QkRpNKdAkvmsbNiXYfMhfQethSUffxHGdt6vAPfp6pzXkvSdbNX57a2mPbGXoJU9JkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dkHxxddfXtPAbSKhnKKb5uJM6JFkdAN737LLFzh16LWoaQjepkyjF95tEFDUUsFw6DNjTcKb5RgMMm9crHCwgbD",
  "key1": "3UWBr1MmE3W9x6gyLC3195Sg9QP7Yij1NQqjetbSxzzfaegnhV1i5sHYBmF8WiKQ1SrBBodGv1w7cRVGu2jAUdFu",
  "key2": "3Z8XCa1StArPGGck7JRivsrqixg6ASfUpzb5sxBvLeKCVC2mMgTipkZdgdJusxBBX6fak1TRLtuktBagi8VRt23T",
  "key3": "8eiQmYzaiMTNCknALRvjHZpvh8gxKDSd13kL9sKPVxM7j25jBZ7bbMn2WRGX9D5paJj2T3Bi3zQu5HUYGBzq2tA",
  "key4": "5kQqWFTKir1NrtZMfE2zXeDnVHFosUqobKp5Wjmk3xdswdjqkKdtTsmZurqeSEdb7zgtdENmTDDZkohgQEu2nctV",
  "key5": "2nYfGYbpWzEmD4Q8dXVtV375jg6cSnGDFUpLReyivP565n8TNvxFhUYpifrHuFENK2Qo4EPB1ULuDyy7wfteLt9e",
  "key6": "3CfmrAvZdTgKJPDhHV11npJE5Xu7WiD9WGX9ZnBDP2urSpLzx752dp3jsVdfSMvxKC8watrppYabS1kfhmAQUZj3",
  "key7": "2mpE7DDGTfVeXZTpuV65M7hbBnRvWYXvpWPYx5dPHLDrZwmPc4NRLcjeQDnwrBxyksQbgUNG5tN1eHuMEXgYZvoZ",
  "key8": "2wp6W6UfL6Xg6eoAAom9EmdwVGMVRwrePvvVpmZeFneLLVUhn7GNBdcvuHwTiRvk8mz2AcbTVnuwPexwqyb34WbG",
  "key9": "2F91hySgogyVVsmcn83nQep9PSnFEXV2GiiRjD7mxiKA5tkVX6WMGEvbPFxRhysUbBiQHifkfV9ezj7ngzDpSD2f",
  "key10": "4q7EspE5bAgx22j6JDHTNojNDFBTn1qkNeiXFpvKXyQEEKNvY8suZq2rAy3QDinroWwsae4RtoYj2UBvkEHaab8N",
  "key11": "4ndZjrzV7gtVsjmUWkHfQueqhfZA3nzzPHAdbPJDowoqz86Pv97yUJnXYbMkmJb4SHwrPhHpMsRF2vbV14AyXVCB",
  "key12": "26gUpvj2VsDLU5zSnktUM1bPiD5MKqiLfcFGwYGf5TCCup8cByKEFwg24LnkX35sVh3aaniPG37TpCE5hWxYcRBL",
  "key13": "46YwgHrpdGYpPTgjoffkXfNwXbvzvJ6vzuXjTfzLqirivE8YzcUNxNam7G6j7Z7x65i9wcjGgrurXZrcBggQKbzb",
  "key14": "3skJN3bYbjYpxrjrkCccZYGZndrts3xFGy8DE9URrXaKn7NNPEbYXFyAL4S8EAMpx72Xdvtr7QTeToKi4rzLDq1T",
  "key15": "YRQWRF2qqd4MqHk7u1m1upZH9STzMysqLDg3PYRdPLsyMG6qJ9SVGuiVFDdpFNjMH5khgvq3mef5FAYdKyLS66s",
  "key16": "eNRqbDe1U2XofLhcAU4WAgiguY6NHaK8VmodZuGGmsA2H1Bsae7rTjYuNAwfopG4BfSviq8UssRj6x4MpMyZdZP",
  "key17": "MfG497rYteQDamQ2EbJSXYq6wFDJmV1ykSrjYuU5XCY9cnEoZkc9AGzwG7tp4kNqzechjpqwEowqaZqSFhdnN7j",
  "key18": "u8AXKTJGSYsu3yxoPPoqE2ryK1RfebUsyKhuMtCqudnd4cL8LPAs91YmdbiLp87wvKymdVn9LVjzRR7UPVWTB5x",
  "key19": "5wN83B7NAE1tiWHochGWsX2EkXdhcknoERAv6D5wmkCLVsachZSGvE5T95PhkZNwor6oavHReupWgT3ktCQjmbYv",
  "key20": "gwsXqY5oZLAe626mngi4mZFn28PZKbmdNye4ho3PnukcM6VCE3Avq2S1evAA5pjwJkt7CZRGAQWJ3xsxmKzbRtr",
  "key21": "5SvoksBVeWnKd3DLNXcqS69g86bpQy2f8fniGP3N92SnKYoMkcDiggiQHxRdmf5Nski9jH2kDNt7kaNKwC5reDq5",
  "key22": "61ntRWBj8W5nUVtR5svYnD5Nibdq1gHR2zLhZ6MvWpCnS9bzdAE4qUyn675fgtRZwez8WnaWVwh7UQLay5QsEyzp",
  "key23": "5621of8DnNkUfoCR6HjwXT3iyrGDJ81NivvEfCGYByQN2t7y3kFJERGCKPqsGXWAnazxfYrEJfi2M3RVprwdaVwk",
  "key24": "5vo42uPU6tXjjvpEZu5qf4KXj8Wct5JKpCeU8dUSjpwrmg4iyrShitxbjz3E4h3D25FwvVWW5nqGmq8yNR25SGjk",
  "key25": "7niSu6NN4t72BzKGJGAJYpQVk3hjRMQNoo1drLdRZgcFM4FCnczEdqX1C25sLZmTjQXRqGcoJnZ99cg9NVrWqpX",
  "key26": "4N18me4LeJC8yxntq8ZZMQMz1EC5FFPTbnTjGCYeGySM8gzjQEexVBpgsUSeZoppNFqQ8KaT8trq4Uy9M67bGYqo",
  "key27": "4eo49ZTBjifMYhUvx5Xmi5rAGqXBzwJmieLKVS9vRh854sDEck86o9PoTbGi1b3wFixtF6juTLXVhamj8VJEvmoB",
  "key28": "3suDPAvLco9rBdY5TRYafXr2wJj178eP7uZ3MeHC2c35Lr1nsmFaVvLkVpigefBkTqMiTsCEagtb9HruJ1Nahu9e",
  "key29": "25TcDnhzEQHW4wmef3DNFndpaPNxHqjVWwjazXTEV4WDquj3ruXUw45732eE4QPCVh35CUUs1vSM2TDzJtahELqx"
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
