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
    "28bLLEP7i2npZhfRBemzjFtH2Ts7svaNpjquuYbpncPRaHDWWQDvEyt1z3mSozuP874FNKnDypyjShF3PmzP1pmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwdaPvK6t2UY2jLTJEUPg7bPARWufYwE326d4ksGmyqePRvo7yK5JUVCFzFJjTwHvy6aRwH89MAwj4dHTuH7QKg",
  "key1": "5TJ7QKYW8EB3fq2CRxRtW5NjURgDQ9kaZUHjunuXzs9yKAxvgNx49uUNEANsMAamU6HUfDemcEPbaFR1gpH7eDAr",
  "key2": "2N8ax8ihLsfgTk2YN5KwwbAJrLnBGQFEYwRTqFmK928vyN8kK7FbVAZqUvg7a9ZjWydwFpi5g3fe8abt3hyS58Mx",
  "key3": "3fpFHFsD1iErKC7EnR4yxuaFiXAU88vgdQUDM7XrNQ7cyHCixHxWxMZhp2VEgwxBx6momVDpXhauDGspzH8aGhRL",
  "key4": "4H3Jp6sAN6r1hpse6cB1cuoJrgqR5tWmikTFqbbAbRnm5H4vEbszsr1Hv5JcqbHJqFmg1wghtAaCQscDGX3AdSYM",
  "key5": "5a8KbQkVvAiVLFaYAkox9ZkPeySgB4QANeEPRrdPL4xDVnpQGNHA2R7UXj5icwRAsBczTmJCdWJfrXwY7exXWLLU",
  "key6": "5ssFEeKsWPs73o8oJ7CmvuZto52pWrj7UH4kStmBdPbxGer2jLWE17yxws1UL6C6AnqEV5UyVB6NMPRskQZSH4bw",
  "key7": "5GdAhUUm42rXEE3vEXwHgGwmfKErJMuaTCVsfhj3d6g4H8wcnaQ54Bna3CYEsdQkeU4DthwDnzUzsuz16iUYbENW",
  "key8": "cN5TUNv3PcPgVLzira8ETfrCtgrDQvBmfWHskAKospkCLjtUPQFrZwpNDDcAyApqntSCdRZK2ZHapvXc1cQds4t",
  "key9": "5LDbiKweon5YLiYqA2QkQc5VXexbZ4QXZ65JHzTSUGDdWxPGSPbgaBzpuXmY4N5UPQm5JMmZCHtskybhNM7dGgJn",
  "key10": "oiyuAKsXaDVcaGMV8tPG7Nbax2y8MKXphayHwdPq9HpcNyMrb9Z28KuCcQXNbdpf6uqVw22NNWddyEftXqGN2q7",
  "key11": "2VkeL4H9rWHb6JtohJ3knYRUJmUHmPRfyJmVX5EqCpUSTxCnzpTMeT1k8aj3EsfbjFNpKKQgizZzj4FGkZQYWmzi",
  "key12": "eJvV4ZWGXpipryrqticDXXWbsJrbBpooVwMYqJ1TtuB7pqngnR1QwwengPcJvcfpPyhYWgc4U63XRyvCZKDDrQT",
  "key13": "3aftNcdxGMHeMdHApXRTem7YAuSYc79ZDov2aaNzFEf6RjZ5LzabE6pPCPvwAMc9rTv4Fwck6R4exvUee4CkaAUz",
  "key14": "2AZjfFEZpvXjKZong4xrpcyUScTUL6wXtn1Gr8cfFX8cLD24RGUoy6NN6r9ApuKQRDb7tANWCwM8oNnCnVLiDkov",
  "key15": "VqyezucU6vFx3BSxCTSD2yNGaEt93F9Jz4e3tCk1UGKq8kdrWxCWoJYdP94fQeaxgjEQ4SUbmHD4owcLBawprRJ",
  "key16": "3nm2bShzzmu2BV6WACSpdmQdGcak7QjTHNmPDAyvfPC1xykrT2bSDtd9SSN8FZBagzH8mEPqwzmdBQHiPnFYq5NY",
  "key17": "2Qz36rhWkwS2nSj4c9KosHSmfepB6esu7Vqjy5YZy3K5AGhTVWoZmZmAbAzQe4emNTQ3FH94KfBbkxCjmkHnH9Rv",
  "key18": "2xCcWhPvePtPYKDXtXyvjCLmgmHYEdSanSHvsF132Btn45jjRpFskFQKueqNA4kCXvP2Wm2FJG7kyPhQcUgtcPaH",
  "key19": "uUCmcHeMJPqx5A3QrSYD8tWscW6Ke6SmC8PEw29hNvqDygkqTUfBwSxXitj6Ge9PgQ6ziLXHBmED9m6P6QK4a8P",
  "key20": "53Aw5jBZ7sKGALXCUyh1Y7kfGyYRjLCY4y1RLMTnTfJVky2UioiUoBZaKwXhvebGX9SsSyiruHFTMHxnSdxfURLo",
  "key21": "3biCs7Z3nuwT9DEziwPDkS6KDDTVZjfe6WWMPZ392hoN47g6pW2AYvHs6faNaTrUyM5PtDdVEziwYjHSJ1A9HqB6",
  "key22": "2qNyQ4KLY9CNjrajfWC8k7qYeFi2P7TeBFfW6h6G4XwZGtYttt8RtqxDnokstQ6Wxh2rYvqJgC1cYbyw31cbjoVe",
  "key23": "5N4xM4ZFmoXMVnDNkQnnXXgsZrN3Goj41q8fKDEfkpxrBjQ3WSG1dkFRHbvKcBtUYEGDNeJpkS4WbHJqNDBeZSsE",
  "key24": "4Sn2yrVALWr7YX9wgsqbBY7dJTygdsTHZiWyuaKQ6G1eZZEtH8kXrtinPQbtUtGhxTeTAsUoBkf7xrGhaGoXGPhe"
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
