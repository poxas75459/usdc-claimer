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
    "6ZwrR3zuRoePsSCbME2HJDYh29D7S6WhxZDN4sxkrcK81TMGgaZ2hdDE64FuTggbV8vwesH9rzfZH4SF22pDy7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u4ncPmqggVyDYkR4YNRMjGvkhphiuUdFt7z2QwjGJmG9nN9eJcGy5roXu439CKJ6LRgZjkS8Pt3xmYPbUthvv74",
  "key1": "2bjBTDiqEGypp71Dws7uSs1uC9tEr4VZjP6quPJueLGdJ9g1PHzWyg3MNvCm9rMfZKZAaP9SxVVwFWxJUsD2NP6A",
  "key2": "5ZagMknWjNKztN72JbDE3xik2bCayTPxJ5pMi4Jz8b4gSs6eGHRUNGESdLypCdGyup4n3jsuvcFY2he3bbeZdbho",
  "key3": "3K3NHeQbN8bkydhj5RANxx1D4fJaq4qvHpB5TYWWd2dYja5nEB1iTWbepBe14YkjZdyxz5TEx9ZUUvJnLGTABKxi",
  "key4": "4mH9aypiFHzviGeNp59gnwv3DFFadyQW2c2gmHFgvJNV4W9n9wEZj9RW5Rx4pq4W13Yfj4uM94oueyhBzQQevYuz",
  "key5": "5ydR5AKgyeviyrqcKztfJLHkxTFPgm4oJkqSy6XAP4vJwFcZ5g7tRoxUU9ycjvChCNAwUQVaADT8AR5J9KEYNeur",
  "key6": "4kA11dV44yXRiB8VcNBbFGgFtmMZKMP4DiPi1ZbbKPcido3yQrG8EVszQMc5zjq2dbtrdCCLT5oPostJFdn2dqKT",
  "key7": "2BAu2snbp6JWc7y4qHKEoPfDx1p1ZHZKwxniwzJAvTA6kN8DW6GXEWSmdtY2R9FYbfRbU5uyDc8dmtFGkhnGcrev",
  "key8": "374pEDzXdZDxAXTfNP5RWNGXRAfUMGCjKHnPbMCFL6e7wh4cdQcRrdkw3nUX9qwqaKifcamLr21MgS1QWvd9i1dC",
  "key9": "4MQwBMFB4yKb8GYicub2Da8CeoxLevCSf51Y452oh7rRyicCktp81Rhbdseo9RF9qtjZdjbTHFj6tvv8VSWTSYfa",
  "key10": "DZycLg9ZwxQ57eHz529sbqcWLXE6MDnA3UxfSGmUw3JUv33kczV8r8jpNFFez1j8mHcm2EN2qp2ew35U6Zp1DTW",
  "key11": "5deV1A96MHUiWUZQN2UZwvLhAz3GrkdFPmNamgYJCACpgodh26gAMVX9hTjYZy9UDtHQDrb8ErvovbxGNQJ35SGc",
  "key12": "2iDTy2vjGmjDD6DBmpNgEr2V3MTCqXM9iT2jFYHL7qPWGY8gYUmMxXgUuMJtHZwvGk4u9mWfWPRe5GvHjMzzGNLS",
  "key13": "3xiVcDLrbPWbBM8LXzhcByJc1zMt5q8nakfRVhtqN62sbeXc4PkUWDEtmUTjm6oBok3gH3UKYMqbadtN1eRyXE2c",
  "key14": "4sCzDJiyAmvVFebzx3em7cegmoTkK3sG6581pCLzD97J7HDFiEGPNmmrpURMjTX4D4yJ9QsHTvKS2xReLTKqQS4v",
  "key15": "3eNmEvji8iEYBP645HDTGPa9HSzRNBqBNY2hd6pDJ4hM2poqqYVbAxZw1zAP5EoWtppaji6S4Q1Ei9SPapzX7n9d",
  "key16": "59UNWvamnX3r8mu6YaMZZp6rF84rvmLxraiQr17ZLsLnZ2jhyUpbBAgtQzsmFR6r7RcaFFDa5A9UuGpEQNqa5zQr",
  "key17": "2DJFEPUsTJfjaEvHXfJaHJhaSsPk7D5BgmqEu3Y39RHHn6MwGfUd6qpv4SAB7Jw144NqCYpnEwfntDF5LuhjQGRF",
  "key18": "3Qv7PpkNrU9vCCeRsYcfkf1RM2ZMQ6wMvYnpy3gys5mZnVuKiSwprHps8tFDjvfRztkt5WR8KdBPGMQu5Pc6TbxF",
  "key19": "28i7vHPGzEvU65rFr69XHd3cujxL6WbNmKTJ57adzmfC5BMR7o8WnpkJon18MpZex4btv4jnADGbkfRXj52RBGu4",
  "key20": "fKHrbbUqHSgv8w7AYbHJL6xhuFFGELrbzK3QXuKADEoDRVDwojDvPeo8Sw1PL5RZikcRD1LMZf59CBGswB9ucZo",
  "key21": "22R5pKZ2E1uvgzB5qAxaY6zN42bXXDdCX6jRhrgU7R6VKZRLgnxmshrvd6Cia6BQRBT5Di6kBvbYJ1KD2fwiW3sw",
  "key22": "3unwsXAG5He84w7niJQ1o7xPddunFmtNdP3oPC6mXYwzhmKnX8QHbuJXBEhKLwYtmjpBKqaYgJrbspaYmGPRfiFE",
  "key23": "3PqXZx4mK7Vk9biSH8Nkegi4YJtL2gCZ8EeJXvHJFK1wHE2C4GHiWmPswNRkH9qSFeXXMGoEeXPBJfvNWxT4fer",
  "key24": "581EbDS6BxSwibkVDJHuKAvDXFj2tAS6zgKgdAqT2oQBJCjT7Aw5rLF446D1PaPsPWjBHMTXBbRSCqMsngcaKd4H",
  "key25": "4VzDvAf1PwkctvzMjPE7TiQZFyptEou8WYKkoJFkFyVKrm4CnmhqX9fBLgTCSbSX6YcTiHcs8Gw73Vb6Zk6NvSdZ",
  "key26": "Png6DrGBAvUkCSGuaZDFjrVb5bS7ZHqZeuRvsuJY3mmFc12JaC4kAxKJKzweF5oAyb8WSVxLBYdtUj1yYCxvKva",
  "key27": "2V3yksaLSkSHrgqqC7mwbXYqtZh97KbSAygzapRHWocac6QToyRZtQqTy5aX3tyohhyHV8PMgUWmj4SJkPU2PoCg"
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
