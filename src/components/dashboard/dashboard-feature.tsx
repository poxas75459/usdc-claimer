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
    "3q1TKHUZjqbRYJQekUSqj1unbMCuT4h318HiMmtW6FV2x9v2P1aoMH9PVbSj6ZiVY4PmYzRWR4id1wKdgL22wjK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39PKk4Qt1WCvTVrYv63EQ8Ypxnhkthw3VDtavRRYry8mCdniwZ5vkaq9kVtMXFE2cgTNFSmaHbgjhiWSiMbLohhS",
  "key1": "3wQd6BWkWNzagJT3Rcqb3YAeHH9xDaQYXWz4bC42ae5zhS951LWtLKzTMzVEUq8XTsrFJv5Y1cPb7vcwbafx4sWX",
  "key2": "54NMkKzDZAhhWzGnXyWTy2ZK4DVHeVTP5tsZ9oWMZDhKazkzF4M4EFwWEw6f1VSx3NaWbUuartrVuWqSR8L1nuHq",
  "key3": "2KBhWo2D5NBv3KbKSJN6LRUg57oN18x8NfH7entZ3pv7QcadYCXhuX1BqVXjDkE5x33GbDFKxoDyKuU8pwRaFkr4",
  "key4": "5P2MerNVT2zNM9LcNc4zMaApTQyoXkSa4EFPKQqxAauxCv8WFkR4DY9Km6Buk5JTRnJ3WAsHCoRkefL71BQYcHDA",
  "key5": "4Mr4rBLCuxZYL7TkSUajYkaUomZcPK4cVxCxyzvDRju1h74kj8xaBECMuM7zQy4WS9FLM2devEsd61XnnUJff4m9",
  "key6": "yiXKSqvEkbN7jqsSCmWD3sSC5qvxDnUTRDG3EwymhbTYHeJJJvp1YZXgchJqj7mpN4ABDRkQK9tkcRJ8Jn4w6EF",
  "key7": "5YSWNT9xRjcaF5H6NmHqZwTNVp3csfeNHjaGmqeyhE1KbF3v5jUqUZGz3BWVjRs8ceYJwD39VgWG1TGcSYSae7KC",
  "key8": "3SQJ5EbdYmVHevt3hu5KLunuK7eqsEZTVmkYnKvkbR18ZKVvKssiYmtXB5zrmqLYgEYgyNX3hzmSNShhDFfzJrXJ",
  "key9": "3x4x1n1ttTYmqH7nsLGJD1NoMCEyD4ZybQt9L4v63fXJ2x29MvMvjuw9NowisbJ9qf7fUZSnNWw6xJqGkwv3LvgD",
  "key10": "2GtHegS6SCtZonL5bfRfUQJQj8UdLXZ3MSngaj8wMwRjB4rwAAp8zj1QmzCcCpdqC3PDD2CezPEHw1fbM9pF9f4y",
  "key11": "3SXdBjLhfgojHJrokMBXysT1FAtVxMXEYL7JNRFWEn5mgeusePNoFLhC4fEiBpMfsgZPQkuF9yyEPQ7WpwUBxnim",
  "key12": "5wd6dtQuhtv1edH8oh5qDVPAqzoJ9m9hg15ExKPxjHZ2zMduV2hir9ugbzkW6oN62f7FSxYhge41WtZ4QLXcrwuc",
  "key13": "1NLyX7YhXB15CQ7XeP76cKP34x3xaGZZi1bDPrEd3QiYWSuz7Ymf2vhiPdY25LAaQCHupzisBVmNnXWMefyRor5",
  "key14": "5tL1NQpJbnAyn8PFnE4sNkSQQSRLr2MyKJM6NoPEiHGfBrhUyPLZxx6b9b1Lwzn2hbg88m6hG3xgxnhrDpiDzSg9",
  "key15": "5q7iV369f8tQaUntFNu7vJATVjgsXM6NhbX3yoZykn8kAFDWHQM4M5r8TGef71hc4geET4C6JCXWjDJLn1xAG9ut",
  "key16": "4jJmgaMqNtqwR9ZPCbqKujoqs44EA8VpbyDmyYTXp95e9mKm3Hig1ANxJbkQgZDQAoBtKQtGd9dF6HYcnKEpxCmj",
  "key17": "3FaPxjJs3YUkTzkEZx7EueG8zWJEk3RdeSfvGTToJdCZNvVbpXpCp7StFVbR3ueQQzmFVqQkT9wjLbpaznHaXAgq",
  "key18": "3YTiXQnUJU7Njf9c6qAsU37Qikc1ydNmdfERp7b5iK7gBuosjkD8xNUgizogX9pJ48xx3QjuLFrFiUkxhWSVMTjU",
  "key19": "3tBTB5aY2ccozq452Tp2sorir7mJMZTkhHSnj8Mt1GjvHeuoxY5rfXxNgYtZ2Qty7R6U6SdFqxzbS1dDnakp1gTV",
  "key20": "4dKJooqbDsSDMHPnCEFmW1hKL8xjTuTkZqguW5u1ojJysMPBYW8sp1hmtYp9HppFXEMvFEiAC82BxRRMpG4ZhoT1",
  "key21": "35YWpFt38kLFYdNgm3i7TveoBVjUxs5AJusHRYKNQQpx6bCCYp5X2byddRB4stgsuz9w7rWHT26UZxQPYfBjNLcW",
  "key22": "3Fj4SNjs7Wun5Mapp7yrzSFKjfxUm34jw63x3SuW6QFXUyyYz9yWtq6LLwp1pU27NzgGdt8K4MrGzPJ2LmXzVBDp",
  "key23": "3xswPbGe7NBgoHQd74cS9UDUN8y9NynBYPK97oB88PpeYFRGhYfRZqg6BCcSKPUbZBwig8PrhMGbD9YodoGdkbth",
  "key24": "oDZfFnPZ1tHgZCCkGzr32Mpui5mFfsiTpbjwxva6f7D4SVQJ7sF3pUC71t3A6j6en1pn5PFKsPN88dD6nzCU85C",
  "key25": "2MVohWboRwRjK7aTyKBnDsArjkD5BMcBQGVFwhTWn2nWMP4UypwV4zBCX4SHDJ18gMUA8H17xNMwZY8V37SAu4gP",
  "key26": "2hMckmswN5DxhGVtZaZBrYNTVMYneQ3ujrVDVGfnG1GjV925osAbtL67mip3hvaZ8s2vJiLzRSeQHU4GQBdfon5o",
  "key27": "3BycCqcEXakQzgqJtg1ebVi2cSNXRRBEGSSYZcQtfyvqRbeqdDa2njXmjBhoGgYYFt1fSWnoSjSkUtedHbDyFZFS",
  "key28": "5QN1gdt9npF4SVuWfCngNWSvPLZ9NBCSbowtxPzES6zXQfijEa2akp4mHHWYpvzdBuKETGbfx8U4rTPbb8Siu2NL",
  "key29": "49KNHeCLJF2pKGZw9tGS7mCrFnuS9ZUXArNak9QMkhqDwA1txrMb22UyZJULBCd4J8LPw4tkGd4EeghikaKLkzBB",
  "key30": "ztPZPCnwf7br1Jvdy7sRo27xn3MPRmZrYixnwYrkmK389tvKRt5RwGng8VWbqX6PXbRAbPqvvkJVrWq1WdifaCE",
  "key31": "5GVrTBjG16Y9YSpqDGS6RzFaNqyZdGE88syb5snFtgjwxwDuSZvfy6PD5zHvGhzYRZoPr6FUMhgDvo3dDB7K5ECT",
  "key32": "437yyuuNYA5i6t6vx56SxERvJoBGLg4p6wm5PziJoTVJVdEYqYEcf4GkaJHe8ftYaMfkuMpJv4aYLxGDRiHj3t4H",
  "key33": "4FnffFEKTeEZZikBuH5MqvAt6WcyWWJfv2xdnZjChqWAMdFhmDuTCUUx6YLrWXA2VH6gzg4DBydA6bTJMmeZ7VHM",
  "key34": "3zMebmpuRkdCm8jUz25ziLgR742wU4MZ797Kfkt35zFYA3qKaxjdqP33PFpUt3rkaoSgiT9VWcNrijQrDmnQrCRB",
  "key35": "5ApDdt6UkLbYaZaPzgPcsCxcHWXMgjDL41UHG15Z46jmaZG6VtWBLfFjasZc55e9YDGNKNdpMa8MtBSxuYa6h1Es",
  "key36": "3wQpc5h7xZHopPg4dTf19Ngv9X92NPMkWjPk2V7menmz14gYGXsS79mvuYMaZkXquhqCDqxRKhnKEcTn3HNq7JLa",
  "key37": "42w4YH8pkcKWMyf2DdC4JYHaoqQTvqFre25qSCiGa3MBdpSVWPz9nqPPve6vYEYNxetWDR1KDePY9iecQVCn2GEF",
  "key38": "32XniqoG37WpDQy6VgvzEdMiPWGqQHBuu6wjSs9xwzYeNjKsJDhMbrZuvk5Xt6GMmXEZ1Ki6m2jj34JY4ZiaTTfW"
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
