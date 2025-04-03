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
    "5aHr9W9uGq87dkG5mvV8q7fMBVb4u8g7WGo6P5XxWYsZ13e4zTCXcme5fYdSooZgHkA82zVeiuoot71HGsfp8wHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s9QEu4ridiQtU4z4kPRxwjSxzghPqLSrGeBZEgmoWirkCLyLUkJDLawsozPSCEQiSyUfsTMtCzMkHKyGyQEGyUR",
  "key1": "4tYar4XaFrjNPE4VPqMmTU59dnr4dbB1arDEz2uthF1y1ugAaYHQC7g72QMaQyxPJLndEQVqKGLovzBhCovCu9bU",
  "key2": "2PyWWcZLLoPRQ14KqapPEvAM9sbodhzUWCLf21fBT73pnmZrT6ssn1L4EFw7GFmx4TgsnDHqyuioLTSV456zRba5",
  "key3": "2JEg9FzwAkcaKWkyYDGrLiBEJKybjCVcC4x5fdub61tNQbBv7p5zEZQE3mMwPWXoeCmzeLCYt9J1tEisCm8H8X7K",
  "key4": "43JtUFtvDDvLZcEzpXUFZv4LATZfiwtTKjYKw37UxefNimSf3izgfcATpLNNHmzWVYkT1oSDWjHncJCVbmGWXuo6",
  "key5": "3mM3fzAJ8gmqXUsf1ACiCB3qbjNNF9mY2irzZqPbUpBF861hGCV3Sd5TDVyyuFkESp1WUkoDWeP4xZtJw4ZaqJYa",
  "key6": "2MaJm5M4X9TatC3raQWhgv599t7puggMghAoVkAAuJaLnmawFvJr18yDFGHPRAAjBK3TXK7Mvv83WEriQEKMDBW9",
  "key7": "34r5Z5EGjjXwMaQWwHK5jDYyuPB7938RtxtiHY6VL76ZjWbwAfPgdTQ8uzEz2WfkyqANFxMcQkRYpEEn4bLUYysW",
  "key8": "RKnB5hvJ2dNUTtytDyBkAcWZkYpkHu4kvGUS7gg1a6nC2LMPpW5zfKLvR6Ugj8f1zCYJyJGDxXoYxVXLLGPCyAg",
  "key9": "67RKA8Cfwo35FqgAM3NyRFTvcpgDdnFL8EfgsqKciFwQND49K9XdkZyAx9XZYbnJykfG7cZy7MmR25SCiPN1sjtw",
  "key10": "31T71VE1arChT5TLomDji7mJr1pP7bBe5ZQqf16sfTbcwvvLe1wi4JyyNBeYQD5i8693jnoepXDjXucxNctNiH1A",
  "key11": "5ZPAJuLb2o972pscNPETChqGhYYru1RmV71r5CyAR7RmsSUsiL1wQeF2qfSPYhBvCLziGPRsBoUfQg3KxzBcChic",
  "key12": "y3iUJo6o5umZg6ckUfSUEVzNGyoUsd6BKmS7osexZ7VMqKKEBY6M2yU7kGktvqbdvbgtTf6tC1D7E84ZiVCWha8",
  "key13": "67QWp9XTFK8zaBmkzX27qiWNbijW2SLd5AaviADL8TXWMCgAEYhBiivnWBpQTp1is6fb8xwUj8o5SU7YbkSbYwo8",
  "key14": "4m3ZnHJoPuxJGhBZqLApfGVcpudBnnU3F8pgGE7AgpB17w48tV9X4BLxdVGLJhYr1Z1xieUfbxdUQcfgcQxDF6M2",
  "key15": "2cZaSEQw3AwErsrQ8zJe6t2jnqCJ7LH3YxmrNGHja3mE5RhSNv3FXXqa5cki6x94DVuqGvdhvaVnTX5LsESse2hy",
  "key16": "3UZt8Jry2Bm1ygKUGj2CTP5xMg5jdt26daBxtfNGyntGs4e6L5zsfSQT3DM8byiMw45nMs7vWvvh7d1KTeidZubA",
  "key17": "4R5GSXJwXgrKXsvMaFt7Th4U8jwm5s5iCf2zShJT3scEuy5omCj3PxuLMzC7tSA6Ww6hV4AcjryAJ5JnAG3KQaHQ",
  "key18": "5ksQuopGXVCJQNMWzcyRmBpM4rWgTLLoJ2XqLnLhL6joGDdToAkHh7QuRYrWyTVswWnfZQF8mUT5zKbGHyUBRMSV",
  "key19": "5osukeK9LBeXYZrzkfe5bwKdQUthtt8gASTmTvmANfe5JGYZjegZe7J77RpJ5i1YQfCbEEQJR3uWBYwCFJQCC45P",
  "key20": "4rmLRZWnGgTEr71TgmLs5fmGd8dGdj6yJHbP9cK8pzZhaPJmy6TdBpYpFL1v6CJxwxtcykdKVovJwh7seJMpvNAU",
  "key21": "3YLmuZ2nh7PwgRMBWeih267XmsnxFzJjxxaWxERLHxxNMx7rcoYVcqDvBVo7azQPE535eCKNeRpsTrT4Reb6qmVW",
  "key22": "5Dc6TdGLSbADDztxAdcuKBqvSjNrAfErLKs4qKf9iyJYQ4znzATG53zZRmrkkfMK3GZ4btk7tbWYrMrkZpoYbtKU",
  "key23": "3tFLdYkLoAR9VFZFRaD4rNnDigb5NqcwNPV1o2X8j79CyqMDAjxW5i2jjMTSkEbqhNNeYBj6AwSRcEYseFxr1Tgq",
  "key24": "67V68Mbt7u47U5tUrrCxhpxxT92JdVqibarVn3U368Z39KBiUpvxVM5vGbJry2kqs2MshJLY7cK7aEUExDKRmmP1",
  "key25": "5nTxmtk7zfk7XzBEZCQeurBN8NufBcCP1cNgangYtr5bihuE8ts3CNe5XQN4fG4LMr8Ap7iimAPh2cmKaSK7gPdu"
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
