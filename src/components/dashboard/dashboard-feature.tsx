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
    "3A7FmLnBnBHTqia6QfqkwSufusV3GpYxke5sFzf3BT3eqUbuokZHa8FG65emvc899WkUpeg68YyRkwGG5SQpzgG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnPU6MWK8ykaLvudBJ6iTbtFaYNY5r7bkjUhioY1iyZaaou61vGtF8qv4QrezB9Mx3DoNxuXjGgPZZjL14cQn9d",
  "key1": "2rCghmvzrEhwifudoJS9drmdsXotoMu49tQdZTMZxAYATuiuFLjfDCAH8D5mGeNcJsfXht4yMZBNzPcJGQh95sXS",
  "key2": "f3fshaBzX4yrgXuxXvcuo7EZh8n2PbWZr76k4tfEAoQU5gkzZtXxE1ahcwg84kueA3jfYPk3c8jXKTv7SawdE2k",
  "key3": "4xhe2sBzyzq6A24AaqMiRN9payhLMh4imsM455CAM1NHDQ3nG7zpsndGzvyCQBnkZwq2cBbYFC5o8aKYkMYrvpYL",
  "key4": "MszBa3SPRx6nfzhuBjTVH2TrBmDpm3CNJ9hA6iJ6UsftTaMRUrnFQN5xDo6TACcy6HkT1cPSUxeYtQYDCHQLV47",
  "key5": "3Xvgmsmr7uGN7Pp11Gmd6mYbe7cMbBKjF5V3cxxv7rJkmtYdbWEC8UQnrG99TkCVSxTtnBMBWjfPPtaedY3Eqcpu",
  "key6": "2mm3T7eJZ9nCknu24JwxaVPNKZpenzQkiCHbYfqvxAF37bcrPwDiTceQG9Sm1q7QruX1dhgsecnZVFT7UKAwTKD6",
  "key7": "2Swr27pDCXZq21adkQ5cGQWAanzqL1WGAQDmoAWHwfgLbPMn5PEs1bm8xRcKY6an4U7HGwRmGjButtQ5JAeiDUdM",
  "key8": "3gbnRZSezZQmLSYqQsNDPaN1u5WbqY3VfvYH9MeBvxzP8pAbm1fKq2jBNA23aaUF2uwAEMeKM6LA36PZ9dj2rAq",
  "key9": "5W8ind7zVQfaTdA9VYpY7iQhKn8FqyZXbcPBhtNgGJoLcpaXiNo2rLBK4F1QJmDut84t86Yu7E6zKx75L2L5JDwD",
  "key10": "5MYFVk6YiGzPvQRZvJjMMehSGFoYX53cfpJZuzMzoYYiR7GV9ke9vDCjwrQu3T1ESGjFd8XP31EwirNTzAafRTNS",
  "key11": "2vWvXs7frh2xfYx1VzpeArsD7zrVk4y9oeuYiid14nBr1HeNgnBb2Zg2AmN15EU33WyfEVM5azUM1zYff5WaBJGR",
  "key12": "222QQMDFCUPSGhKBg2RDM1PXkYBExJ5eggvUiKVPogUJuN6AT9jxjbE9LCxTGZnZwkt9B44vjiNHhfJ6zpDg13jo",
  "key13": "VBTLdSPmVJzB5oYkiK7SLP94jMCSr9MUiEuS7DNqdCsNxRt5ooeSv8uHhKyHLGFZ1FwuJnZZaB1LrBCJu5FahSw",
  "key14": "5v664TTYEebukSvP91fq4oY8Cr3rt24Rfi8WdHXBmwhjvVz1UFWDRw3CbA5WJju4oyuBkDDBfshaRQ8xWbUhzquD",
  "key15": "2mKFYfhuuSjJGgL6jCvNDxSXqCbDm9cCGkc5UibuXBK3gXyUinmEfyRtJH3EwLgvYtXgDnjNTF8pgYVpwFkf9aDA",
  "key16": "2pYAxuz2fFsgGFgp5nFySuztoX1NbpN1D1rwtUwh7nN2kchowuCeR9M6xsvPKjkojjCBQeMVFLHmt5it5eriCpmD",
  "key17": "5QkEFe8HnKJRrSGDopvDASR3dcJyMBjSNDV13rM38qN252dHkhuf9YmnGt8aCuWBtBWGc8B7VyQzHthaLwRGUuEq",
  "key18": "5LKzgmJXyoD4TCRujKH5QcQVmJfk61mwSTDhKyvxmjXJr8RvDa7rWsnJ1TP3M1zkry5oEXCdPxGa7byQfqWhnEsv",
  "key19": "4kFy3NGV6gKEDgdMTBCdcWAbwi6oBYS1GNtaDCihRDDz2JYNGa2qr3YFFwAn84aed8ELXbX7SG3d5qdiJQwjo1M1",
  "key20": "3evWdezK25vXQcE2aBkGxRfAcP2Vq9QiSFJA4gwwxvYVV5T1ZxTYCLxnRKDsCHiki5ZrbwPeKpbzJ8anygP1tiry",
  "key21": "toBwfe8F9jrERqM17q33owu3ftpWzPRWAjS4zJ47Hsr7Y7r4Bpy89A64Wq3XbVVLdPMnu9Fd8ZB3cm8gcPMxjhh",
  "key22": "3g4qZFznBtJxLpRYbHkX4qysqv23LB4YexCCeMPbKByMG2A3jzUNvZ5EUBHEaGarBT6wMyJnoRFnjp7PXJqm1Ltr",
  "key23": "2f8qCuAp5jEE88FacMJ4yrqKSn1JoJLb8oh5TzcCXqq38Sajt4LfDTcDHYs3mn5gJ8maNMZWBcpqWbHY9ocZteMX",
  "key24": "2wtc5Bg9BkNCa5zkoqQqbQaYs4HhoNiuMGhD3rayRY4PXYn32Nk21qj9J6orLHF9w3FxNngf54LrkGKKPuKSA3P7",
  "key25": "33KP1nZuXh1WgxA12btmF1orumk6aJp1qp6qnkNCFkBVchsxQgnoPFNgtozREtx2jKMknUr8ydJpmzu1TXNFfAcV",
  "key26": "3uPBKsaQdQS7LhvFEn2LhxgUKvV2X3k8bMrz8xaJ5skifRtXAohJYswMEsMU2PqfCcdKAc57zPkwvHqz18UxkDNw",
  "key27": "kALghx38r56mQEhhzBtuBXBKdaCTFtSMDWNR7JbGD4xwYikZNXnM45t7QJ6LvSLPqLadFhqNqMDBqVfLzPyoJPA"
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
