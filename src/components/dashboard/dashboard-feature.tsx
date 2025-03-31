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
    "eGkzD1L7USzdYQL9yamwW4iuBgc5UGJee1Bvm45Hif5cLbL5Tks1ci8wjxGydhzNKnG9T5LmjtM99eH7j42mmZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RJWnapaDZufWoJLbu8R1PSxxSrXx23nwp5BvC5aHca41wtyf5zkgQrcuaTuhdwsNFxQ7UXGLgwNQisKjoP6fEZZ",
  "key1": "4Z2uzH5rPU9wCXUUr5WptcDWZ3Q6zwPp8Uz4LRH3S9cVognUPidYWrSejYYjnmfjVoUvQxuZE1BygRpC7iXZdhMk",
  "key2": "Kt7k1r7botGv4uwoLvVEW4H1bKrGhr9gGdwi3Rzc3ghGJYttmZYRrBiLyN48EoFTYLWjQJjuxnd8tndkSo2htHL",
  "key3": "mdhBu9CGpvTBKB2QijJMkMAqoA52p3ubtC1J9XT9vMoEYxXj8o9rgjqbY8gAzfjKc1f4E5og66vWJH8sX1gWn6Z",
  "key4": "3fNyG9NAXbgVVjGU9t1z7Gr2djJbLiDHUW5iJ6M2jPkdDQVqEijSAKjh9v1Aob8Xw2GZ1xVnxoL3B8JRDhbKWRsw",
  "key5": "2Kdg4FsBWcMxWEvL162QFzJENG5ZYWAYr1JEejW1dxCEakJqX3pKc5oPoSmvgy69A6xnTWJLLfPqfPWKVwX564K7",
  "key6": "2PtQkW7aPN14iy8LaXhSNa3cVnDbCNy9Vq1SYvZjnXeQr4nHekAjS4e9L3zKREvpC6kUTg7BQeL8SHpFA9L6hTza",
  "key7": "5Sjfzxy2KSee22LZJmvQJ71MqYLibP7m2ihH2ErfCmh5JefwLAAphoWPrqcjwPhS6LGL7LoXCNit9DzhFmpqbmQr",
  "key8": "Hgd5sYZpz87Fo5mSujvNFvHMLqtGRu5Uda76VNS43N3jbPbbXmYt3QEr7FTkkXfVLkYNpSw2YsvgdDitMbxY9st",
  "key9": "L9bXWFe5RXp5RK1qnQSXhFSkiooMgQDBgHPYJgsAr2tELHczQgZJ5eJu9nb5E7PiDk3pVsycGcUrQH5eb9stTJ8",
  "key10": "dYETnzyxgeoBnCkAfdWjjZunJua9zWUMDvaduBQPkxsmA2oBHj1wJWGGHGw8p6JB19CPgPbs94QFKpRCudKYLXN",
  "key11": "8oLTPoKUnUXmeJGo2XZPhfZEGkVk8nxzB9QHaiUXHiv8mmP5756DPXpkGjQtQvQh3ASnzwVvjUkg5JyDS9VsoqY",
  "key12": "5ujGx6DLtYC4DFTgDmWWtb7TweGnzTiy6ify24pGqaw4jYSTaoVSgHstcwcTEcqYXA5x41Zw2x6KR9ysv2pcs94e",
  "key13": "FHQdupSXLDKMLCDhhZh63yH5ZuZYas4zdLGQC6aGH4SF9QjDoJDLSzAKJkVSoENC5Ma7dSjUuE4jvdBy4VHaue8",
  "key14": "54rmGU53refTosU6oEAu1H57Qt9c9TETcfbrRSttJm5hn31ePqRbN1Ks49jQDvcy9rR32MbWu9GDphWzCerPZjTv",
  "key15": "2QoTcoGUQtTsqfDngv2mxJuZDGvAdrkpPgS3GeMa6b3hWm2bR6NXtNqGNXzBu2oqL5Eexa8SrKD6jLNh57fhVo9L",
  "key16": "3S2vkyZWnexj9DveGP8yzYr5QMsaDYumcAkV8BZ8NcaspXnHYsaL365unyqVvSQqK1YJPMjVCCktKq8hvKXJCoHS",
  "key17": "29wNyHX3sYpxvZQRN5aWjEnZ1EAUx5wcBMtVnjTNtjK4Qofk5BepvvZ3TgYWgtZ2yFjT6yFn5VdjpK5by1rNFrod",
  "key18": "orjL5gnNBBBkWQvDfeKtxtz7N79BV8bKUfMUNvBjHSHXCFMRAN6emdUNLz3UjKHnaBXzE1tbVb9qMfY6UErxtJ2",
  "key19": "txojwKSnxQxtA3FeqXr99aV3VydFd8WMdRXqtZ2GghMdJgMmqPSUCRFahwQSVecfs6tfPtwPpxLcHdApk7XQm3s",
  "key20": "bE8NierJDw6BE2cW5uSduB4uynFSeAcmWzeZpxKMhrHhRm8K4ScEfsdFYQmz1vZJx2yNKbQ7n9Tc1DFJ7Qy3ZCd",
  "key21": "3U5rMG9XveZuVTPvAbZDyqVYCz3FdYTLfQ4xP4LseDD7zGwMnM7ZxwpmVBkv1bCAEABQDifbvwUCA3WWL9ZkGuH6",
  "key22": "3epdM1tVQpERH9dU7Cz79EzpiKdBCPHXdGDZSV2qBQsqQj59nKhRH8LtMH1KZTEkbe6Fod19yK6K5etFJ6UnHC5T",
  "key23": "3nNeVS8vHBwiS9ey3t8t7Hn3W9uheYdJWsZut8QMqLjKKtVUcPLoXUeB4Jpw61Bxjrqn6hDVHTkjKZXpobk9EpLx",
  "key24": "z3hCDJCAWdstxW7aurgkNcNu2oYZM9q11VDoViCFAhnjPMaYF7ZZ5Vzd1sA2X7mh1hh7Q8fBPbDBGHk8X5huCGy",
  "key25": "A8zp4fitdyQC3xb6awchB7iUamsCRfYZsTzjPE6S6vx6RGAV6p5nARLGjwa55qKtX7Xdsvg6hAYZwfCpbKngVEw",
  "key26": "4uPTs51SzUSV1HwZZwhBmoBiksz3SbWBkMYU82Y4Y3xPPsVc9maSp6b7CnzruEpTAWPxDkrFWMxsowGdkoVMXjJc",
  "key27": "6Y2ZKxpbBF9wfWcrZcpxrotxjHirNuzP7RqPHieMXQjsx9M7DZTaLHhhZ6DVVk7ScXyykGfJFjSH4BWT3YkNXxv",
  "key28": "36UTzHLVx7ytRKqLcxmgEbbA7tFD5AHm5bBeEbABYNhv5jKHozJTja63R87TNgNRd1JnVU1D2tY5KjS63uN1D5za",
  "key29": "6BNtitHFHzjmyoj2bu7X46qoG5AuGiY6r87VKD3HBtWMHnprqvqYFNPpcSh4sMcs6kSPxqwfjDrd35ZMNGYT98T"
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
