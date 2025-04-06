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
    "4soNJBk1isX9raEG6tAG7TvYexinK5oA5oMBL2KekpA4EPAtoe2HVWsKhTXaiC1uuFfp7U7Mp4sYzUbSHEybAwzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bw4ZFWcJRp6imvXVr3k6CRMLf99ZioqUeW3B4kqGjfqEp4aUwqi71hJigwby2ZKqoDsikVUQzMVhbFYRFmBXNmx",
  "key1": "49ZzXUWCc69wfp82o9koEGqjB7gKxUjgoy1y4yNkSZywLWEJoPb1M749mDfVrPB4iyLJWPCskTMwtDeqyTcJoyLC",
  "key2": "4E85TviQkpj9ehiieNkn3GmpA2rLWduEXD4E2VBXpsQnhLFDWUtwq3LiwWao67PrdLXtv2KKvFsw9UQ55RcM3xQ",
  "key3": "3NR1yHGawuHs4vSaZenWfgeaZnKw8hmstZXFmqksdv9gCi7HyU8QLoxpTgJPuh8y6zaZDrvDaSd19c1zamaA7zKd",
  "key4": "4emxsgVdiZ3cehU2DfkuGiL5hU57VM2QXBz9g42PMg8WTjHCb9X3zyf9FPDPDTXvrcQPXU69dsutmkbmHrTNWK69",
  "key5": "4Q1Vma5Zkwwx26vry2HCJRp224UPC46ZA6hXr9sUdzg7GFwJSDSoxeh4ZLFeYeLr4tY3PqKXhHs3DdfzK3QG99S9",
  "key6": "4byHDux7enMFHXK779YYQKqGzeQoTpg78qp1zBYebRMMsbRYSxAeHeYMfTJ4YG4WqBdXmPhznUX7i6uPc1xghGLN",
  "key7": "vrc3a4R5FPsFKBAJRmbqXApYg7735paXBeURzDPCmrUyoS3enXN4g8YL5JKQYwF3soWi9UHo2bN84v72zPhbugf",
  "key8": "63x2Fp2KkaFsJEbvYB8FjWoLj5zwr63N1ThYqoSy1HUe93vRUXrVc6VdqCSDroVoJEwDubQytUYjTKFddYYjagTR",
  "key9": "2RBkKtCXG2jfWdnFg3GTJdko3L5EKGJ36xYj2ZNdQJ5ZmHU67VmT5s8syZJUjWebhW6WsT9fwsTkTa4PV9RzLVWh",
  "key10": "BXMDCmgn2qs4ovWWADCGJwmNNwW2KpHkAXM4HofwzYFy7wXmesLrhJna4KUhxPxBEYesR2R48YynfF1yiPRWztL",
  "key11": "5yCmEN286Ww6Sngr9A3KdP4QDDG5atvwRBP6HqyqF35xdzv2PVWUnDkmTGLhQPxmfiupHLL6yueRSXNw6uSRZYxY",
  "key12": "4R1xfGauguic3V3Jp7m36DwndLLpdR35atjv9XYaECR5KeqP11f42kfGKoVK62TCLB3aMEiUm4i8KXQ56DyibKHs",
  "key13": "4Ux2T4b5CtAnm4K9adM4gvPktngxHAywdUnb7tDaPr2t8JY7kmDr2LUjSfUQ8QQZSWGjgPuDNpeWBxzAH67pAgc7",
  "key14": "3YueCFwwNVGVsUd4eqZw2G1ykJqHgHUf8dgWWmbNtkAZ7sdcdyxoxFRdG7BSoz4YB8ERsjUuEtKYNNz29RRWGftv",
  "key15": "66MLVJ3PXsRwEJP4edowb1tYQ3gRuTYvhiEkAXkuUwXKeUphPyXNG92BZiR1Mmk5f6mE5SJgQ8QcvyLaJsvvNz8d",
  "key16": "5tsGXtZ5wLVeRzH42JpjoJXBmsz8uFb8LtXnti4Qz9HPBwYXghaDWVueYrQ1s1UJCqXohWdQeACNefCC67YoWTHj",
  "key17": "cQ9Did1Tyt6HNrTixZfoMpvsPxixfeodTFYMPrDRDweh2L77zhMjEbdyQHjVzp3jnayPFhQxigNHDooXgwSrJLH",
  "key18": "5KUcsoCSKmiraEoiwvEuWQB6VrpGck5wAK9Bij8JvNCbKY8ryuXSZ6D5BF3w6fzWxwFkf8aXMQxx3Pb8UTzVaLxT",
  "key19": "5oeMFpXP9ivRE6f17wa9ujNhSQZBbyQWxrMdCj7W8QF8m6Gp1XNafr3AwK8VeFYYjMtoKCWKTTrPQ8EuR5sVjYzK",
  "key20": "2iH5BYVrXJwCrKpdKCkAvKxMxrdVNN4BqeSG2ZssNCSt9NRbsJSbQB6Fp6w118PJk3mPEyExoNwEMmebSfss7DTY",
  "key21": "53gTQ1ZgFHQHoWfrVRh8T19YsNpSTUrajn9dJ31QC9XKZca922Wd2J1Mt3n4gzfs9Z5Z4GhEV2HSW7mTCkPnXZv1",
  "key22": "34dEMSaZ2zj8F8495EE3bHHqePzP5DMYJw2qMsCT46FLxNbFEZXXTSmastp4LHceLbtEWDqM2V41HFL3ReciXqv1",
  "key23": "2vqBHnEThhUaLNAvkAQKMcT9dr4haYUPETsqVR3P4VB5Zs7E7AH7pRHxU8Bu6NhTBfvpf8o8RgBavtQwUhKdqAS2",
  "key24": "2xF2fXgKcXmmxMY817bSZ7ReLFtXsiqJgzXsfcdqLmnUNkX2zQfaiPx6vgZJaY5vPfRhRNzcQxcpnhd31weUXSXs",
  "key25": "4zmC4BHxDTjqSjKCdtX5Yprh5FJFPmdNw8fAR6MBtaZT2dg7GANimQ3A21xFEEF2cqvs2abwuTzGYSnLAGpPCtcP",
  "key26": "4JdTiMNrDnLbFEFVo4Gu6xJiyKEYkubXp3xhtJMh15NTyoHhxLZYmhTRjYCDZ7A6Ucoo7TSpSPsPLDmjYze5qfDN",
  "key27": "3uJR6JJTFX788cCtKwdRcMZgQszaDL7GNKMtn5Sr882uJfQgYMHQc9rY4pN6tqr5PXLo1MEwi4ALyTGScDZtJZxm",
  "key28": "5WCxwvM34kjENry27kzTe1hxX5og33zAHzQBfq1jbWhmPkGT4HW5wkUCQKucJ1k77wVbvQtFb7we5E4HyHBpttY3"
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
