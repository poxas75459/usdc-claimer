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
    "5YMNT1obWKXLUAHMpjJvgbcUEVp786nKGL3zY4Ds7baAFZ9ap8tResRUwPZEc3J4h1eqnC91fYh8C51gz2M8D5pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e63ShXTR7EcGmk6EebeJuSBF7qC46HpkBX2UxwWE6f2H8QrjRAmcQeLgLyAXmfbp1yV1phuNtaZxumYwqy7djtE",
  "key1": "ez3rKUzNB6vuxuD6LP8akweXRU6m2wECqrZ5PLpABSWxjBN1RByPBV21L5VFUrz2ekDsU4XnK8JeWR8v7yFFe9U",
  "key2": "yN31FNK5cs8QV4zxDFSsYhYKtqjdwsHC9BurhyDReqcWz7yQgsFmQr2de69minEfJf6kjvkkEwU8jJpDN9WXDMG",
  "key3": "PF9mLyzCcD1FjNtaKJ1h5JDUx6MhtBDaxPAXurtSnzn7nMb3FmeVkogvQc7iVsmR79byRySWmNPxV1Q4ykTzCtW",
  "key4": "5GkZYHdNZcj9LJAHSMWRKCLwZyeE453JzfxvBqYXDBZeL3rBJokkfx7aKJAE3GLjgG9HtDxRisFiBQUWhSG8bfe7",
  "key5": "2Nv7mm7oMFK8c19mEMAzMYnEJXzs8Zd6WnJL4m3C9WaukhXg4Q72hBJLTe5VrskKuLyKBAPZEBpL25fEWgXXdUZd",
  "key6": "33xMYo5XgZfAjYAhtn4oXUJNgiHbp9yP5e1agDgTboHVESiBP5hnVSKpHWCh6bpuGKoghiYkqyfRe9N44KUzWNrm",
  "key7": "iKydS4uZc7627LqQBUk4cnUuxRzS2SWYRxbfZFW9c7beJajLZut3yvNemVu3q94jczJejMroYmSE9u2thsEq7Cv",
  "key8": "4nFNN6H8v7iQk9vgJkAi1Bw313CMs3k6oZ6gYLhdgCzhCkU3ncY4y8pniw544GCxdAxCKVaHYupkEBrdiDcAxrUU",
  "key9": "2VGhaoYnvJQwxMjx4otNUs7yyhtkVNpSowf2k5s3aak43G314uSepujWcH8bbKP8FhDpQvLJcoXc98RyGEQnqy2N",
  "key10": "2c1ikyCe66b1yZ8dNqeHoFJ5k3C9GbNRbzasGpFCPMdzXwdcWi8yJKcorS9KfsEHgTMxi32eJvLgrzMC7CQtpcq1",
  "key11": "5puni8yJrr9LvWWZYS1Sa1Px3n2vGHUewUPKkXr5gp9RkePf4kQQ6Qr2LSW1Rq5WGnyAjaWRgu8Po2zHA5G1yaMz",
  "key12": "X8EbZsn1P4iNWym5x2ih5MRFEaJFKwMxXkbihx9vbaYkjb3xsPmjUgkQg5Zyz37UbP3yfT2abxL111Vz9BKBJ6M",
  "key13": "5L2hBfYukeB7bQXr4R9HPeTYrz7ezF3wff4BRwUJk1U9ztSZ7jXA5S8XHuU9A6j6bkzwrzRiXWrobwni7yWCza3b",
  "key14": "5J9gdsCukhzeHbBi3Dzt7dXYoiGbm9mJC4bEn24G43zmfDbk9mCwXFgaW8SREdeM5FYpdnTEbTmiT3P27jjnMn4L",
  "key15": "539R2YN6RwdcjkfPZhCYts1JWbiA9KpuaFDc4o8TaJqgzmGdzMtSpNbaVUu61vZwso7ogxng1VeAGXEWY7L7388h",
  "key16": "3ecCoZHBBoH1WHntvAVzf9gr3B4zQTbzDn19BaiHD1w6B97e2hUrkXrge9d5Bta1Gh8kK6QVcG9WQCq4MkNjzQxF",
  "key17": "46aYg1tXhihSED9xhwGtPPQ5sc4H8MF5gA91rnx2wuvPjoHoeTK2sA6uyjLQV7PtMHXuwQA5qjEDW4LLe9hj5bcb",
  "key18": "5ZyLMCFh9rxbUwhMKs8jqHZKZxhEagQo3dzQre43zSdx8r6nnFUroRHvhJU6NitQ6NRxiTmCLTEjDw6HRbt1eXGC",
  "key19": "2aXR8PKJ7Ez3fEVPpSAegZ5T3JVhnApE56cjHSUmGXiCm7HCZtEFsomzy2837oaLPVNArMzZfFUPnnmTuW7enDGH",
  "key20": "5PWVPENRShr4HJRqcHEzXNHxqFEjMaiK6FnLnkV4dHf7vTu6dMqfNmDPes2GgXpXtvKTKXHmGYo9mvs8AtPA774S",
  "key21": "52yvZykJxcDXCwdwbzzNWnQrhysi3CXrxRCfHzCRUEAQhZKGA1FpWSKME14izwnUNsGu7PfVbPUPGjDMoUr2WgiK",
  "key22": "3MSjrWSXhtg5p8sc1xdJ6Z4iLcRa4951Cq4sLeE4eg7xy6hLTUZkzBfV2PyNFDuQoKnFAnzwSWZaAGqkDyP8hkf8",
  "key23": "5zXKT9tCNBCHdrbuHqBX8QQym8ignqY5C5uG4nLgNxz6XJ8Zpkc3VBznKUWHLqDuqGs44tVMQKcMC1HFyVZD1bY5",
  "key24": "39kyZz4fwxZyt13TARjUazZxxrgVz1hAtkY9WpdbNJr8eaGCUW9kuffGLXhEWm3RZUE5huKSdx9bpRmA2NMtZkXa",
  "key25": "2ms3k3vARmezM4tKgWpb8BEMnUng1evKbTFZF6Hcy9UMHAcExPbuL7mmS27oi2KubxEqrf1kTVJAEGuSbFJr8pdZ",
  "key26": "5M1HNJbZFK1vQu3tttvMgExJLCa8gL1w1ni8JDGJQ1G3Vexq9dEJKPdRwJcnusNBwixC8NM4bysVYybTnQR2a5es",
  "key27": "5S2KSfRm2jVk4Mvk1JxAMExd4TrRGunawh1RrtR468mSxsXSZvqAiGoEUGKwgr7GP3MPpo69XgF8N8dKBSwdho6q",
  "key28": "37QfoRXewBfsFR3bhkuQPAWCi4KXKB4CyoFaDJbt5KXE7CzL6qqHYLnBGpHNUZivXs3h3VWhxPcgVo8WtqtwhTzE",
  "key29": "55ZTNw3Bahg39HfrpHUF8sHRBduFrRBh4HMM5Uf7kUHHn6i5W5u96Edpc1BEQpDgDrcqxXWs43manEoTbAiCcgg",
  "key30": "wNCj8RuWSnobEGTJdUWic9iiKVLqBRJufYLes3mctCo2XCNTmUHM6q1RnMWmAGdrfUVYin4db3ijGE1roQZjFps"
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
