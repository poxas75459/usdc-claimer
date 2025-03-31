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
    "5tgeWtDUwgebWvB2d19quwqLPBHPABMBhMftjWvzzP1XBQMvFo8pf5jxNgEqsWG9p18ocZbTHrPkXVzeZg21BPkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CzRRZWYXb38dXLLt9pgLPjuVw1pjWvzmtDSGHGs3ouRnbNX67uRHWsTeERiMu1mtoDon4mC49rrJCWPDT2XycTg",
  "key1": "2qHFRwYSVU8zosgJrTjmM8bmiD5iUQ7aWXZbhMdZjZLryttmekrys2hiRGfErXkgNndVotcsHAf1Fd2ioip5VwfL",
  "key2": "5K13JtsPej9ZqoBmdESpFynsps6xEQssW7axdAHUPajXGR1wTkRzVezbBtibPrbmL461AfsaggqofYzByv1ogexe",
  "key3": "gBQTCbuZdY3vg2fxPQTCqaEpc3tSqFedQpWzV4sUyzfNqa16YbiTJvqEYZnbEKetNcryPKPn5VJSqM1vXGaMMSP",
  "key4": "3JrisKnCYiq6VWcBWEcimC4n2wnT1qnQabkMjJhoYKYKKBtc3UhzY4GeeL7uCnctcav2gjK87N3sYCHRroQp15ie",
  "key5": "J4jkLRfs4F5XxZwWrhApJ54gbaS6no6WzqSygZaTUVqi6PGan78fmghQzQt52eJ2RoVdBTbYZXCreuS8nY7PkvN",
  "key6": "YwnmwGPna8B2G8VM4gxegQx1zYnLV8psPrnDyutrNT16m98rXeq9rw9ihtHVUBwowDo4YsQQexKN3mxoEneBsTk",
  "key7": "5MJE4qhM9PHEuBTKMmBahp3RSdVpxHbQHXganNMgsJoutQ6jsMcsm4noTLp2FnKY5bhPvTwLroAdmAfvKdxtWGqM",
  "key8": "55jVRPLpZYr3gAn4853cPhrbYhA1te5AYWi4YkFG5fWqQSAWFD3WeyLbpkeLzKVq227B8KCQoD8m6CoP4Dz87JuV",
  "key9": "5UuRG9bbkWwmU97TkPdzAjNnzvgsvFpRT47AaydWdSkkdYTADwYZQjhdhgdBybGPyejheyEzDUDdcWVWG4DsYSKc",
  "key10": "4mqkGJwc6BtviFbZ1LTF2V1ZdUt2YHSkZaWumeBupJPhWQ8QANkyCQzC6DekEwHd2FE4BhnvM9Pff3GDzeApoxSx",
  "key11": "4d8QXX8spZZNWeBqFSvnBxH9vQWmvQaRCeaToJDeLKq9HP52UbHTWbdnJPCsKFxdFeULe2rxnYB3ZvzuYM5STViN",
  "key12": "3xhk3sbdmCgikgd7cYUfC57T5HbjDZ2XPmTbWfH7w4djq6UyJNmc3C9zhdV6MjpAQr3MnejxFRU8p94WRzmwU7wk",
  "key13": "5frRAwSSBD2fcqdVZzEJraDmZ7BtRbNwgp8gQxW2iTZDYA3kGaTi5ZV4eGHhFpgn4Mf6a4vattShQBcgYJ1QU684",
  "key14": "2eQppyZiWSb9cpEQWoeeTPEt1AmmuSQ7W4G1KsfjmipAGfgxqCM4jw6X3efnvdbj4Np6gTecpG4k4MyhcYbrDJbK",
  "key15": "5RSt5gs1GLNPYVuQt43NfF35VeCCckgdah2S7AoMf5qnarJMN8XN3R2xsFfmUvQPMS8h1scrTLfAUWk4Po48KtPZ",
  "key16": "vuVpJbNJ79aXb8SmGHuv7d8QCpdmXVcfLYmuCFXiiguDHPHGJa9miRqxD1Ltf4DLvQgP9nxhoN6yve1zvJVRGw6",
  "key17": "2fZwtAySqFpXFyaqn7oLcSn8mbEaKDuQmsyx2xfvFPVFUqu4LjXtmQJrwiAgWEfiynsiydEEz5H3vqShtd38rotW",
  "key18": "zATVzAYD3TP29Ao4LZcemm6ibNU8L3LeU8V9fWZn43Gv7p8UmZ2Za7vNbTZvUY2a2BvJUmmFikfDGAUu2g8ntDG",
  "key19": "5XXWh8iZr8AuZLUZ2CmjPeGWvMb1EPxuo4Jpda1naFkyKYC8eHayrAjhRV3rXCzQwTqGy8f3XEjffSThJ6LMQX5k",
  "key20": "5Gayj1jwjp3GYiGrfLmR5BHrq1zgmPTTca7RSxD2iTsdm1vzxRWXe6ibua1jPUpyGXAvPHit3ardtnVPtUQmrqYK",
  "key21": "3mKAapj9tzD4vCxTMGaTYYzfpccrddxPuCsSBwRQUwS4QjcPKCn7nKm4gPcf7tawccK2Twp14DJKYjejWfvJEcu3",
  "key22": "GxbjaG9ndZXk6qgxmMJWD6c1E5tceDqwrHykG1JCJuQubaVPZe3TmgM8U9XNpaSSdMnu7xfypa5bTCpQLKRSwTz",
  "key23": "5a1p71rxF89JRRecFQ3jQrM3ZkzshEwMmnMJwScYM6ZjaAmofe56JcFN4asFuT7pkgEGaGFKNuWFVDEjDCxU44ot",
  "key24": "4eNFwr7czekVpwLVHjn5hn6cGACWxsBfu3bg894Lc9C7RrWC8576Wno1zyH6942RpuNkqvFAtjHEt8hBna6U4Bhm",
  "key25": "4qKLvVJ8h7SMdwq2KxYVMMNz1YPCfpfGXAMUyzSpXPUNbHvjCzkpJexLBGWNCQkKtYcMQjyPMek7aCPzQLy5Y1oT",
  "key26": "5ggjvyarZsQnLWY5q81zYAXow7XwwMjPf9xFqXggH5iztJhPogKc7EdDA9FKCt2MToA62TaEDMKWXAGG9T9fPQ4q",
  "key27": "V9GRdUpRByDpayCkkhajCfeHKuef6yxaP6eNzE8Erv1ED6mJu1BRA58CvHPVor2HCZE5Gic8fa8mBTTqpjEoUff",
  "key28": "8nfDfaDk3CM726JK8wAH84qXAoAVZm8fd38FeneS7JYUhgjZSkGrgFdEct6hNwzWQhvuBarzfKNkRXrpftgPJ78"
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
