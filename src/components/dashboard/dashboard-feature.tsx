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
    "5JPyzf98uYZMXWTwLZkdJui2aehmeXzpWNyYgvX8b9uxsNnasAHoq49KboY2qcoa8yY1YP1iganr5DRi665pLzQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nThQg5fwsYjeJ9DYrwqPVNf7WY3xJaAEgyjY16xPN6VdWptMVUH2kjk7KFgrhkAw15wdxebZ4ANeS82hiKwS6CV",
  "key1": "4ons6FJxYmET7YHyDNdQsbFWLbEjx8bvbwJnPhqv53YABz42fyfD4LvkuSnhMX4sKW6zwSxcKUVoJJ9sw6Ae2VDi",
  "key2": "5ZKGW7FQzoG6WbDeRknCC977HjiVSwjmSdW1uio3mUJZUshL7oKvRbTmeZpJmSBxWwSmCyn7fqB1NZFg1TvzDvZB",
  "key3": "Prnm2qircBuB3qnna47CHSqQKZ4cLCjKtFEiXt59tzq7PcLaBeLCFkPrJ1ZTQcvZF9VV6r8MGKwD6PdAQZ3duXZ",
  "key4": "4C8QVBzZG7bhtewdmT9yEyV4qC2QRXsv3my1EHgiEDQcdfUsgWqm4xA8fAgGgjc5yaE6nd8diSyhWwCsVacoDCh3",
  "key5": "RVEZFVfZ8vYmp34ckN39MF5YcbMGVBxNyEeSPebDfUjmx1JyvSuSk4bv3YmrtGen7DpeVU2XDj6P1QzGXbJRYf5",
  "key6": "3NxKCS9y3pDpWkD8Zebn7d5zY3vUMjQK8xo5S2QN2EDNqus4tyaCcu3tL1gPEtcSrvxJMsKFUEHTe4569P6KBH1y",
  "key7": "SNzaArDnJoJTKNQet6bCvJZoTVCZ9TEnRf5CsW3PWLETTYSpSqFVVLRivZLHjyyzxQ4aj9BiT44RAvJgQKx7JbD",
  "key8": "Zt5a4vxuqHtuAn6ZR3u4aAhTB7A7BK6Q3wRLB7DFwuUMVczxAvn5D8GzCXDHEiSWZyzKWGRzv5jMshbv8CRFYPb",
  "key9": "5eJAy2zs3U5Bp569gMkJgh3K9GrowyQST8coDNr93gVfff7frp5cKYqpDd8mQmzb1eQSCa9VNUE4Ebi4WqZo2GxY",
  "key10": "2KH1Z3vQEA7EvkbHp9qt1PCfFTs87tukDjP3jQapUDF2YX7rDicZDxYuf93bJr29zRnSfWHB8hUJjvKU4MrUcsvr",
  "key11": "35rkP29Ta68az6YUrpyX69Hs6dzwdvtED2Ai9X1RHxmhchAdkRKrjbmUcZPkozwPc6rGbfVM36Gvk5AVfNGY7cpU",
  "key12": "6BRRWFszRAhzKPkGFq3AHwfYZYrKELWbjmq7eEmFJJwsdQX1mTt9mJnqqMSNntu2EuitVbjvXpmin4U83aFf8uJ",
  "key13": "2aXoT3kCruqHneT5D37m3oRAurSFqGqLqhEP8xvbTfaUF9qyQBT91tzL4vjLxwgUEomtAzeXdecy45h2MwAHwEMn",
  "key14": "2AwjUZNbRNyom1PSCYwZBqPw2ifCcTFCfTc5dwj2kTzaanv5sFkjEMfUJ77Wr1nnrvqWXBXy8CF5Wf1bLve5FsKn",
  "key15": "5MnUiCGQkr5GQ2XG6T8xGHFamMpQHvssjpZbs7y23GjAT2dXACt2yLzAzijBhPjDcP5PJMRLtE91xNgGLKtX1Dx3",
  "key16": "5odgBrdKFxr464G1vmMq2xT1JULkKVD9Qn6YrEKCuvKZkwyhzZGHLHY9dZQ35grAo1vrifqGHtZPXmpfYx5ZytRV",
  "key17": "5tkFS1V9EbcT32Zcr9VaZ8MP54mpA2ZyGpfMkiBKpnQVUG2Za8cJEvXFVPHmAVoRkJQntEX6jZADXacXQyqSm8KM",
  "key18": "5TNAgCDMuZFVEEikg9EheFR8NebC2CZd46qDqEh9VqmG4akjs8XCGsYn1fTKuwxi1MZtS5dKiYx9S2zseuvS7x1V",
  "key19": "2aqGRPQJkFpcuUCtQLrh21Bo82xBp9PZJWdXoWfFbbBiRq39vT3X6xFstBoo1Lk77YGsZsUPYePE8QBBxQNuSTNd",
  "key20": "DWr6ZmTGUokaM1NWc37tCd4VDVHpoLNPuh9KRWVFURyUgMvnR3b1iq5AJ7wK1tgj9HaPCkZySktcBDMQnujRbTm",
  "key21": "3bimiPVqnNyVYAKVAPtgahT3riGNy2uRFcmexvrpyXj5fApgTxDgsWa6qzsJjcdKAwKSPXa1iKzScznU6oqm6oEZ",
  "key22": "5D8X21XVvH35FFbn2ZUFhFPLcycrsdiaGpnqKmeMVHUtXcqZuMuezqYVUbFWLDb6Lwmko9MvBJHEnEhJbziCwMkz",
  "key23": "3cif3GdwpSctBEPsB6D3LANNEg897xSVicQ6NR2nfrj4NaXrZT5HXey18V3c7seViVBurfjnz9X7KvKB3LfdUfrf",
  "key24": "2GCbQ8PazzDTPqkCy7JLfEEvW3fygNMXLFUFwSwzePwVZxcP3BufXPmzPgAhtqba8yeovjs6XwGM1T6uMWeLgu3"
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
