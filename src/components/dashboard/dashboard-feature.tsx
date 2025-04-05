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
    "97ppXcDAKnzYiS9MRKeWXiH44Q5Ax6davRVMG6LKA5Q9DsMP7LcoUYXDcnf8GT1qb6bhGB2t4u6uH4TgC9cqCU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DW8yVXhL6gUMm4XqGa1ziuMThukKqsc5jAKMUGMJGM1tjhbVvKAezZkzq79e5ddewMiLBo7iYpqvgpz9aQctvdS",
  "key1": "4huXyHwctAkq5WZPBNWCHpm8BUGYGBZSDYxfFmRnB5bmv5FFM5URV8ykYXD8vDCFFXqNwyk4idZMn3Mj5SS9z85h",
  "key2": "5jjTNd3gkK6H7CyV784ETWiKVCKAaqk8pDEw3uoQemkM6XmBWwrmhx6Vpo8XjCNz16Lzy5ykmR68VKdJ5qquUsju",
  "key3": "NHuEnEDvWfhMSJqihK2rHm8VxSbDe1fjqxphAACqZ9Kd7DiPN8R2FyMNnvNRYjDUoBx6RYWQdkRrPxNaRtVfkUM",
  "key4": "3VgsiWbgqBxQ95ePEdHbnTN2wMbpR7q4sunQqpMmhYzWBis1Fyij7T1zHz8gfa8VzXLgmpg5WCtQoUu7DyS3M6Dd",
  "key5": "3TWhbceyESh8acuiPMHTVzPDoDesAt8yfkLi2Ybv41RUun4U76dSqUYEXx3SbjGF746QLAhALzu1FZddfhBYqssd",
  "key6": "2K8AJA9WezKzNha24SEcU1nBZe1EnJmminSzJUkTby4uVGzyyJx48qXqH4UQQeMkh7Vy3cpbAErCWm6iU436LgJD",
  "key7": "5ds41FJDyrqVJU9JBWnLTSFUEB2QTdsbxJCYx1rLjqEU8GtMqcdCGHHT7MbNuKeDAW6SLQ7dN6D8SzFYE4oWeJfT",
  "key8": "2a1UoGdvUNRLF41MChES24WqJ8VvPHgpSHtPWXNC8gzkmCPzKgfgZD7pLBYjKQYGDawPgJD6QRDbtbw3gU1oeXye",
  "key9": "VHrd2rxL7hPdmySt3F7RzaoaWZKcHh8KJAjdHjxypvFTmhh45nTJBRWQH892NcxRsbGEcwkVVZegC3kYRJVWac7",
  "key10": "5QKapT5ANsdv1nkLhTUQYULHcLp9ka9EFCuWtZoqHnwbCp55XXLF67mfsgcoL5fxMti12MQjsX16Ek35EZ67vHGp",
  "key11": "25UMtHf8HEo9yJ3KCGDfvvJusQju6evjb69sq9H2FoTo8PNXerzCWxtPDzaDQZzb8WPWhBcuCMyTSVuGtegWW8FM",
  "key12": "2R7jLwdipBbDQ5Ec2LEnLah4vpcgHSW6kjN7j9JiQWrLkaE8uJJckSrJXXp2qW18emarks14b5VSBuUEo9ZvFrVR",
  "key13": "33WHfJD6YPuNSD9yEgkTrzML4SBySupaN67U8WdZ3ZSi1P6SDtnUehLiaU8aDtn7GaY36YQdixyTwUwcnZ7X6j21",
  "key14": "6ydmjn4Y76tPdSnuPVDWuizdiiRfvrVF6gvzK9PJt1M77dhYS8dyv7faiiQw4nKM37CvdxfHGjKyoP5yKRT33KA",
  "key15": "492ZZp6wNZJRXgKEi5gqA6oW5ufZFnc3BHzrFP5xHZ3xgY5rJAv2RZ7Wcf1buNRf5Mns4rn2CvyGEoAobTVp6JL1",
  "key16": "2gF17yQSC4AittYTBkR4Y9vJTXBJ2hyvveD77B5PQCFZuuKx6zk4Ajj7yAQ8AdWbtk19xnYQNFyonupcK6RPw9Vq",
  "key17": "2NQ5DRVN6XW2MgddyhgHbvf4nK3N5D5NRxt9mN3mmJPooVcqniD43xqkHMfECbLV9AVRhvHrHwzQcykwUWKNHNG",
  "key18": "39usJRaxXUihHvY3N1jjMY4sauQNxLKdDmmGJmMvbKrKRbSzJMxa6PPspQEiYbDpah8hZYLME7Vk66dHg7kQ8cQN",
  "key19": "LFX7CXwFavs81D6KBfws95h78rT9jptpqMCJnLKLuvrKTd9BbHP3UgEPzM2kmvJo8wWzcXfbxSMtmcggmW8eVwD",
  "key20": "283VSHcXYyTEP8CoW8hjWhm8MErmKuADkriH778tjrgRzJSEayVfCAv1dWJmNfXH6GfFTFYLNF7REVdNwA8iGaJb",
  "key21": "5iQ6XGEmKPdC9P7sqojmz3keS4z8Xs2Az62it5zM77bGm1oFhaZb9RKutLs4bMtD6P5ZyqpqCf2oJ9Wzd8GVyehP",
  "key22": "4S2BuT9KxKaKFijrsZ3q86zYRFAXHxbe2waVSP8QpZPsL6Vn2e8BNZ11hGcMG37Z1tX7vi6Sp72AjENr9FTwoVpG",
  "key23": "5ocmaHvLBFSTFYykDKzbXA6mBLdVrrwvHBM32Si8oUmKRtYi3qDad5gD47insVDDSo1zaCP2f5mW59itVat4qr9e",
  "key24": "3PnddrPmhY7MBR7ojxgFZbdMoiyhLkYjgEyvAj24KJkNHZyS4ubXi787pSmKbAtzHxoDMBiVfuy8LAuD3eD9vj65"
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
