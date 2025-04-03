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
    "3s2t2WQvmD4rLuYFq6fubNCdQD5bX57YvnqwkWNLSFdnCPtDyEcig3gChABwV8wFejgMCRsRzSickkDtFK5UhuLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24SAGnuJmZLh4WMubsTjGTetupqavQ4xLZck7hXmSXwJspvM12RASmTdr54RZ9zcMjKn2WU5m2fAJ7MnyRNLN5hV",
  "key1": "4DHyXmWUnqEz5bqUVaEqhTPGk9vk78oeyb3d792JMsAr6PqCNaHYPQcaHFNLWTo8qe6qTMbCS6MaE3n6UaBcR9Jr",
  "key2": "4jkdCVbLvcuX5dZbMGWTMwVqUycETyCBJbBBgNodufreQe69EXoXp1kUWjMcUukUVSrFJkNuK3FBqn5oRAxpoia2",
  "key3": "3UHDRUE54zW8moFoeiFWDrCkBEThbHR1XB3YMiZ6NmvehLSv7yoVwpEawaNeqLgvXkvg3DbJvKagLRtnv5dYNSFy",
  "key4": "5Z2vBGgLvMjQgAyaictfya3PccqmP1pQ4HDuNUKvF7PCMBLtqe1S17uFZs1h2ZYHG7S81AvqvPi7sYEpPmQmX3hS",
  "key5": "37d9n1VWjfpzVqAJSjNwSkJKUgsqELQ8RU2NxLvw3d6cokmkr3gbCdeVnxLts1zx6vVX7ZE9B99FDBoppUQ1VKiG",
  "key6": "5zWekASzPwU4xQLXjNxdtwVoRsN7ad8YafiXGVXENVL5rrKAW5W1YiTZtujgTJx4JH83ME41e5keFvXntk2rGXdE",
  "key7": "3H7hjuPPoRiUQXJSQYUYtk1NTjM9oZZSC83cg3WAouUQCznLXyf9y9R5W46fbZngWr44KPQfz5Em2ARRnY5ExC96",
  "key8": "4gRdLjjiD6yRLx8ga1SYF1vucCwLMSUXs2uEkczHa8ZTarrwDpCUoQXmZqwsQsKeT539VAh2BatUxT6CLk7RSVN4",
  "key9": "26ziCV8hcBnAJGexnBptU8JwMtVnZ86DMAuLT9Mcc9XmteFwY2kqzr85SLgEu5i3fwB2zcmsaxBmERApEzZorccn",
  "key10": "2qDLQXApPH1Zz2hpcDa4oj5aVnoR5BvF6o8VUDw4PhyGvFf6HADLthm3kUSgjtWB9c5FpQ8pzxT9uqTCbbNCR88",
  "key11": "5UYvPUciTJkmyVbYcpNMf9FvQaHY6USnRXdrW8itHvUdLc97XEadTZTxmqiQoiUn6wihA2nMh5nvj1yDEJZZyHVn",
  "key12": "5xHvHdmHhYgrh4MBWyA2MgPkfQknDAZ8XTuiG1ayJ7hWv8fGB8EpwwKSkC3z5H6tE99tutwVryiJVVfJTWjJ4g8y",
  "key13": "5n6Voko39ScZSe71cNvxn3b23YpwSd9DbAHkhGpT9hM65CYAEakdr2JNQBz8xFxtSv5TdzeMrTUzpy8JYPs5u55w",
  "key14": "66fs2baghH9CMx5XxCcxL9VQ6RdDR5ik3uPj6hXXPWLeJWY46AeaBVMe6hhTYVnnCoRBQYHsocVTgi1ZoesNSMrR",
  "key15": "4PqpZnRba81ucnmVBpyBpaK9kSPAVcGzzi7NpMc9prsYko1CthaXk1gJgbxRm1HSW1NnbQqceKerhFb9uYqeeVot",
  "key16": "3gdRAv3YcBYUnq5phob6fPwgxZ6n47qoYo6Fu8SyZAXqp1yJugqdcDB51FPPvNrwY3HryKE6WSmsjKxjAtV7eaMG",
  "key17": "2jtkniq6Xi6Ut9n1hJBurcGut9FBgjDpkNxppJU246nePUxAFTB78UwLkkei98LjnkTRPoV7XQ632ZSk4YqF7Ebz",
  "key18": "4NPEWE4veHPdhuTk6FJDGCRzqGWbu19G7PpLBs8GymteDxTa9vqT7xqvJAENnP4Z2d9Tjh4mDrFeboreb4qEGv8H",
  "key19": "B2gDjywN4JgbeQyK3raiJkne6RsSHYMadpQpYgCU8yeHX3yBkURixjxMvjk3tiRhBxeB1niFSfuJbN6BnaX7hPK",
  "key20": "32DUtQSmed5kogD72S64aTJQqhZYFG2Pe46ftfh7uNp2jTNmt2DaiUGiViU2BVzoCLsfoiYR3cEPZbgRJz4nRjge",
  "key21": "2FHYHU1BTBhmcrrCqeaHkcRLVpq7v71qRL8tBLJssbZZGpaFn14WY3GNFxBEFnchpnQu62AVBgnW78HAT1Ld7LEh",
  "key22": "EKQ2gjcSD3Wy8doc22cACNFFc1KiEfZgC7651JMBEWW2ybUQu7SXHcpNERL9X4dc96B1ECf6865aU5eg2xRjosL",
  "key23": "cHN5Mfc31b1aTPPajBuUjFf1qpjAhPh8qr74kWzg6ihWUbF2g13KaLaRbsfa5Q7Z5FNmAYfeqHuSyAEhNm5hrCi",
  "key24": "489Kk9XWyxNidAaFwtxFoeYSkaHfoNKufiTzFmJh3ho5ps4eJCzt4YhfBwuRrLC3r9Lyh4xjjj7DVSQeSnWeUvwU",
  "key25": "Nqxokjxpthht7yrW74U6vkNXfkh15i4ojFz9oQr5pYFYyZkJzzEk2zA3RSKtUVKQihE789SDEe51VgNe6QHfjMN",
  "key26": "gzQwfNP2xtjgkkqUbbyJwFzFLBdvNrkuzYF52tBuKh36d7XQxHePaNYC6Y6hhy2mcwEbGFxDryQYc5F7tMmHM3W",
  "key27": "3Bumq1ZtQcPZnNG4Far8TSZHDpN8AUe8MjfmC96Yf7fh8wFsE7aaEBLMqM6wyV1dKB6JtE1JCwCHQXqkHuVJ9hqy",
  "key28": "2sxert3DEeZzHGk86vmw6Q4sFBEmYWbTpno8XHx1sPxu9yqNid66i29m4vetKJ1dNqb7W4bx9zkA8E5uyk1nEigm"
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
