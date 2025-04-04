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
    "vAMWJDRq1HPSaYM5KcLvCmjBm7M6uyp7FtK8ueHyKtLG65nAtZswMj8W8iRRBJUcJMvUv96QBqfmRxBb8R8CDt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mtzqB28VQUmP815JwSShCSwNyg1LHiFkSgXjx7wDCKRGggzAuR1sKx8FtV6rtMqtQndwbFBsRUjcPn9bhW84RY8",
  "key1": "gWZiwLhM4hSko5jXSuXXzpKcJJX3GWqxnrzADgsJGL97TV7yeVEh7QW8NkHVEkQmqTbmq5dnPBNBzonyrbZj9bi",
  "key2": "2WY9BhTxjZ8rtjQWJE4xmfbjkwZ21vg5Ag5BT328Xo4qvf5e9c2yZpSzkBg7nBzMmB9tTLZSd3ebawJECmdAk2iL",
  "key3": "xTvvhziFFJ8uap4d4PL2AebpceHWSRJk3oN9GMEWY6HBAjY5vna62u4DPu1hjtT59az3DxWwBarEMkhSg5Zjx1R",
  "key4": "3K74vGve39bqxeuurwyuMdaJrK5dsRW9FedndjbX87RFF4bgsnEsARSAoigSYXgUPsTohWJTCCjzWJCR6HXuvb9a",
  "key5": "3zRXLgVjx6uE74k4Hfp15H6N3ZMdP1KYFcV9aVtnT54hYG1vz8KgKKGPpyYxFXVSR6QP5A6kRK9a7D2pfP7PRvLj",
  "key6": "3qkb1X32zyjRixdqAhUpAxaDky5yf6TJGNLj2oDTdJMfyCfjYQpmTQ4w3nfgUYCc4P9dYXZmmRQ9HZQXHjURBhfT",
  "key7": "4pyR7djvMiBnKHN2aCdPLxDsFkshDJLSCf3qrVLcLquVThCiynTmBhGkcwJC2c1MvA2HgYTeDc6kvFFNPUmheXXQ",
  "key8": "34gXRwooNxZ7Ey1HTTVsmTfvGjG1BXnH9N26xpTBYDTgkcPZ2F6YwwpUCRDSs4bo1v3nNLYYCdfmUqaBKbgMyFjX",
  "key9": "2Bf5S6ARQNdMucgmDA1qKph35Kk2mit6GYGkWTL9jH71NNgJZD5FkaBNkUm6Gw3QnbzjsPUaurSYPJSJcxysz7B1",
  "key10": "yKaQ7bqRdWa9yWvJrCKXZ3si1bw1vJkc4oJZ9D3QszF9inyfbaAKjWYu5VmxMbocUrotDPnrDc5x4Hu8Y4NAwRo",
  "key11": "63w5Ge2a3NjRPRCg35NMZSmQK2eZiYdBD56AFkRs2UWqjogGyq855Tqjxs8yqERsot1HHEmronuwKs7sg82F1faX",
  "key12": "vURPwhukakyFQkksaJvENsmFJQPCH7QEB3FHqr7Sqav8bMSJLebggHS9xyTtKUPnugaPgM6vhVZQvPA1PocKS44",
  "key13": "5axAcePwXD3RsB925qcoRYNYktNDpGGfLY5vPFt67QL4hikBxDJC8CrdFLjj8Pxb6bV5S8YLDC9FKLf1453UTQbf",
  "key14": "4iNiSwaULupLKBr7jsRdQgFp6FfNSbXs1mhY9hCNJiMFqpXN8qxyLXhWq8acFfCM6p6BKgzdNSSRLUNfmaenXX3",
  "key15": "5UBuZ1aBNUwgMx9SGacSvCwhj8yQtgTa9CxM4ZbuRqNBPBWjh11XqyXGBdHPzhi8G3iu93N1FJR1KH4Rm76KwXLv",
  "key16": "2bFLN6P1f4PiEs36Kq1bRnSs3Zwv7T5ixih5cEUBQcEH7jEcxwbLKSWAnDL1kAEkPUthgfPJjZjLsziQJG3JTB6",
  "key17": "2ndrnbgvmUB1UpdW2SRCQEyY1tfKC79MpTiVo8XzMxvFGdiRGuhx4DCZAMWQppdV44KEB2abpmjEHnSx8at3xZsp",
  "key18": "2bvfcW4dHgoW3A8W2rJ4VsMDHvaLGKSC3vz3db2LiAC36e1AcrJ9KYgjxZ718EUe73375JEwMLZkBPqFp4sK8d5Y",
  "key19": "5jjKRinyMDvViv6kYwGRKhHPc4mnTapcy9WNMGSzsNYiG17rShHunp325wDvjbLMZvbUGbKkbRRPhFpniMvdvbdF",
  "key20": "5f13ythNoPpAw7JTjY8N1L81bX7AHscxp6GubpGKJFfTwUQK43NHsVDpP6r2MuKbSv4rz4dTHBUE66MzSQnZsy2p",
  "key21": "23Y4SV2EQqU9UaJrDFfs18JJ5YtQwD2xvGPDwxBikymK7P9ZPfyryenMCbBMYg3tekwcyhEbcqThu4xQZGjGvdbG",
  "key22": "3ix2UeVR6vEqcbnRPywzrKv6MWLaehpNt6xnGtMLEXbfd8dEnVvc3CSffKG7Ap7HsqzdvzqupRzkQHD6U6Ns1JZC",
  "key23": "2L8Avx3XvXxTr8tweNob9Nnpt6KZXdJVusoKvaN6SCmPHcyzpKfGmhTmn9TWvGifcNEB2myeJmk9Cm6KHvaa2GPW",
  "key24": "5Uy3R31HdW9TRJyE3v1sTfJ1XXVAsBiPbSRgyQdqtzsSQJHZh1enUvt1E82GouAwDVyiqq4y78DxauRQpnmSu2ie",
  "key25": "4ZeTuTC3UuQDHNEJfxgqmTLCbBZC1yRXJXSfJcdFv1wEwzf2XUoyzExknWftrmKFCXuifaZMjTWewWQp9YxVCiSw",
  "key26": "3ZJ7KghtKBBr2GMPXkxMDbZmYzqh1CKz58ZsQbZ5aUBQXz4GJkcfDZSdfhHmR4HZYzjyxnpRBgfeB1uSW1xiV9Tg"
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
