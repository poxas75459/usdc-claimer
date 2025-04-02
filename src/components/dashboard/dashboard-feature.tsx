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
    "5WUADb1GMub8W8GCzbPZWb8LVswmsHUKWV1gLVtg2C8LFsjWeytiufpFQwaY7GSmTmPYzav3jay98PjRfCB6VjMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rC7VTBm5av8azvGezTDDMju8J7b5MVkWVoPf5bYnHNw9DewtoxRjjGkMqQ6T6uiKHjrWc4LvDqKddRohyfNWAwh",
  "key1": "627XQrQ1U1E5H93FrBMTJjuGhF7Pq1ehTF317k75nMt5JkwxqNDbhUjE8DFrQvjxGxZL9Lf12nW4sYqMUmcBqF2U",
  "key2": "539vPmbBU9tEcmpcv1su3nTP8PEX4gGtPhHcRp77ZjN872xNUL9H2TVEWuiWwNtHrFRkGm8yrFYMGcGExupzvr9x",
  "key3": "4cowcX4MyZt7PsNf5n5zj7v5wGEAExufXVvRY1bqTZoiwf81BangAVpYedPG73fDFEJAfepD35CyFEoRAPsyfWbR",
  "key4": "4WEenVotTAa8V1kWzY8mQ3znJeZx445cit5GDEa59EzNYBroqNdvqkJ8EcXMggQhXupCjCWmkTyw1JMiafnz4UrM",
  "key5": "5AW7eeL1gtpttNoYjvr9jVznCtZ79wXfQsopEXj1jmQAb6HrdVnAoSuUbFU2KJJTFLffwV9yzS23dFzDTtq2xaie",
  "key6": "5dw9GeS9ET3knNeAjMZ2SbEXbkBJsgwoTkmqTgFBir9XeQw5Bur3NGYBTgfXS4W7wbQP8evp93ypAbrY5i4W6Qj6",
  "key7": "R9b5cxhFWtJtCJWePXqij2xydCPs6rBdqBi4RnQP6c93cKBFVFnsDyfWaczQLGjy98wvfafZXzEeGJmpmgpoLeE",
  "key8": "8R7AeUnYnkDt17ARAfMhwjh1AmZJgAJm5oKRi4rzZe34vjerumTc8vSbgCG7a6X7j167jRsuBj3WNyYyhtbhDcK",
  "key9": "4e77idCvT68f1inBAfqaCRkkJjk4WVNGK2aHDtCHz33XXBySmV3JDP2p3jqNdgX3EKvHCA5mPppQcTJtCYyNkpcv",
  "key10": "5DHbXPhRdnYjqepPN4UTdYe3GZZ6ir7YCsDxWZvua9nTCi68BUW22enHDJkf1xMQ9n3HnCRAbgVfg1ufbK8mr4a3",
  "key11": "3JgzGCP4uxX1P3guz63HV9pQBUVAqrTUde27fnkqLTEMEFXKMd1QVdot2ddHH8bkXmuBjcueTpFZ4UqGJtzZFWf8",
  "key12": "2CWhgXqWhbKR5tpdg76hcQANLqBApbb7tfeHtuJmND5x7AQfEnvf1TvmayetHxcfcWeLig7yp9VudJtkMs7umyF4",
  "key13": "29bRVAsfZ7YgnrYsCwwYFMXv8wdWQRHttU8qTDV5adkyYAXzi96Ee1JC6JvxTLGBmZqNcaYJwzCCfexYDKxyjUXk",
  "key14": "3cmZWAzR5fc92JRK9gr7fSNCQGNnc5SMfmyy7WjGNjtWuMzxGJ89mUU9kARzv4D2vDjscazVyBD4HHdUa9gbxraL",
  "key15": "4bV3NaLkSdzTZBY7HmFMmNX2RiAQ47WpaSEEowGx1CnLnKZqVWnYxwpPy731inn65ACqga2Sf8QKr4dmjmvjqGey",
  "key16": "4RWrmPYJUAKA2FVuhvguEoevNFhKzK6hNY3ZMMDwUwjcsWUP9MkAzFMufmwcGtwC9WU3moFmheCMAi4aAQ6vUb99",
  "key17": "5uLpav37LfWjYD3jJKriuo7Htyd8dziHW9FHhPyBSCD7pWNyUE1KbQBxU97MXtnbFxhRcBAG3ncXrUqxn54N9Cu9",
  "key18": "2cRY6THwWKLqnwVHgAVt9hBWLT6d5wg1FhMCYjjPdXvhWsig6u3jhnRfSiYijmEkN9pUU2B2wUjMFnP1HrrnTPb9",
  "key19": "3qQBEzEav9muSrXgfM8Awy1new5vPU2Rt4vbdZppSQr2gEpHP4pntxW2wZSZbcMfh7rRJuSoLSzTn6pRvMW3bJwR",
  "key20": "3pQDRn3nc7CQyEw3U65Y2judp6F3RL3R3P6a2eVyZw5SgUdvYfMdqn6YhhPLThqWSyJZzN2HSLFuvtv1BRNWd7Bg",
  "key21": "4giXtnqSjdX65tY41vbd3RhZuw7mQz8jRNsBQEqW8bsX1YJbKhY8kaasxdFnm6JzVf4NEGpUHCJiufjtzZ2SykoZ",
  "key22": "2u1L4stAeEqRZDErjv5NHk921tBePLKm2sWC6HfJz1ofnEvN3MgNCKH53iwJdtegNxqtpABmAhFtC91n1jFPqcrP",
  "key23": "61vkQbKcLiL4WqjoaDCnMkKzBMZ4cXgKUCZw26HxNgHzQKU4dxjJEq3A6wY1SRtrunfVRpWBrU7qBDW8pQiEAUp8",
  "key24": "64eg6fQioSTVkixQnyd6ryqH7fegzo9ymrZR8FjZhkGcLQadDLcN2dZdxg6Kj7VbutZLFHtwnk2Yz9ecUxBCCdJY",
  "key25": "2PorinUJqwCKX3RU3XLorCDTDds3FzrntW2jT7VrX3iQK5cqPNNgCXn7r4TrbH5kSknkWjQfzqyJDyhqqQrzw2mE",
  "key26": "3jt2DM5aVvUkWrTtT6KC7aT5BXjk2PziJn2yU8yVmexN3QR2E2GnAFaRm7amWw5kBJUyjcSCk7RAMKeQSXmEu4fJ",
  "key27": "HkuFy8VohGyusW4LRdyQgnWbsErvxydbdSnWsQxtpWbgWzLWouhUss4PsrZwq3Lm5bXC1KCt2YKRMQv6jpXy999",
  "key28": "3ZCFwEpSK1H3RZVBabvRUoF1Q6HkLSDtZmoh4Dyns9QnCCi5Q1yJxbJaqidKWGaAmaeWovnnFhU4Bmc9D39T52DT",
  "key29": "2AYkZgfWkEvHkuNjqbRTJn32Zg8DRNJGtgMfWP5Gqfh2QeS9vu33TUCtYxcrXSuZc1fsPHuKSnSSUrggCCU18BYZ"
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
