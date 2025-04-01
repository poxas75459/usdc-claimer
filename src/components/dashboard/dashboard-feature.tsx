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
    "2mnzSdhFZVPtyzjhAkG1Kq7cLQMizB28cxXkDVwYoNw7PRr1jAZXDdYwmpS2KAxBQL8LJcMd4UAPfA273BN3UuzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KNgXtwZW7HStbrxxohxJdptnXdsJi5X5VGcVuQq3nUAypRGTSoG2YsmLbdJ5wtwaJ2jd7WArMbWVQ1x4MWQwS5w",
  "key1": "3nrz1EYsY1sPd9XboBKZif2x33kms5n92Mhm79YhtN6StEjdh4zneKhkqMTpQdTCu9j9HygvXyKZJbh9T7Pgn3UD",
  "key2": "3yTnb5x97jHKKZJ5Y7Tgohwz5znnuPaCfFY7gtTa4TczjRDo5M7D4uBqGA3hSC6xszqoYfHf67723mgFoE6camQU",
  "key3": "2h2m2pr8M9rRxJm9WdV7y4wdBxWBbhevkjcJQqCXhv2a9cPEeBMJe2HsfkSizZT9NvQSSHDxu5nsEz3RKfcKKw7t",
  "key4": "4tjQpCB926ZgrqYnVxp1XXWd89RKupDfXzmjipm287Ds1TY1xnVZHGeEAbyxxXREXobsv1Au4MkDAi9aDQXmYtXm",
  "key5": "3Do2XsVzVgRn8hTFcfRMwRyJm7QfxTa5t8i14YdXKF9Y5R7NkkJnbpdL19QDZzdSxTgV79X9Grz9gLiRSv1tTFHL",
  "key6": "i2nStst82sBbNNkUAW1nEmYqvvsUvLPNa2eV3W9dFjHbsyoG2BN4pvyp3TYHJMPZhm6KhuaYG3E9nZ2r4A4dvfU",
  "key7": "ymqvowvtipmSHw7JxYg4HibuFJHn8sjwP4tZaERxHKuotsd4xLMSFujz9rRLKKW68wDzzZRdok56GWF2AuzHN6V",
  "key8": "5UsRiSecWwR5E2cXUfWsM7UnuBixjkLkTzLNRcKQyFdRuuNLLKEpXtuiaeWHdUaY7c4vbzE4xutEWQ4pZtcBgJLw",
  "key9": "4vuQHNULtiQwpDx5ZuKmc6PjEPpAh4fL8fiaMs7pWTrChxTg6gtQh6odPTmPMNF2CxeaoatyaraUGRtqkZ2micsH",
  "key10": "2VfgH2XRCNQhyjixa7xBhjh18ukMqydzkSLZNEUBEZRZtcHoeqUrk9szLQXfYu13H5bXj3GnmmK6vPfpp7yvwaGH",
  "key11": "4d5MYQ3JHYUNgbnrkVk9oNMmxSZ9tNxMDmWoDUKsHiAy5grs3EvZufQW9FQZDrHKeLuVx1NJSnz2rDdubL5TrFwG",
  "key12": "5MeBB1SybjieTkfLCLxxdhi8ni3muGGtDKbK9zp2wnaCMLxD5oGvt6ApWNvyMDQZeFGKbT8Y11ESXR5LGaJBfix1",
  "key13": "5Tr1tP5MUsWiTxppT4cKjL4VxozqNgC63MrQUfr8pNHQLMmtrnsAEFywX4V43yovbP3bh8A1GTcAVarxwd8iR6b6",
  "key14": "5ahC9TBfhf3AsucgFDhFjrn2iAuAA1BtXsrtHY9xWkyVBGF9pr6HKrRY6CDzgJTdyLfweP6dwvM7Tb65tXJxsEJv",
  "key15": "3CYGKM76DVf8kCzoMudDj8ZtKRmb9XAYJzB7efSNh3x1J6prB2RBsDcUGzazQW7iK3uELLxT5Kvp47F6V75nQvBM",
  "key16": "4tYTHkHpHxRkcRnUmmAGmu3st11Qd3hYkh6bxGT7yDvNTyQiymmqJNttJR46mwEUkm5Nq2jZQTUBapy436wR2TfJ",
  "key17": "3a2UTn3spepZukKiFS1tDQRjbGcxfAE8eEeggbaY38Zwuzn9a3LyQsJj19vuNQYmaB5LYDYokMxDFTyBwUNXJkL2",
  "key18": "5eTLDpehYwb3cDw6gJx6cVCrCx8bBT11QHUC5bA2xmN2x2LsuF73r2nNQgH9Aof8uoobwfvfcZbg9a1AUVQDk6tj",
  "key19": "2FfuXqXcgEjBa4fB4fZouA7nT4PDWfLZdcpb3Y9SQ942UyCwwFutjD2hzZFmsXBQESsHQGAHpSk1P238jN15oNp9",
  "key20": "3dwTNMt8hZQYbsRX1f6RrjBgKdtXKr2jHZKUdi7VEFz6Ev6XvajfUMttpVqH5g57h7TLngJA5te8hhGaNmED1NJ8",
  "key21": "2kBT2Zbyqh6oqUZvUiVNnF6NGLUEAAbXMEsQroxh26hy1GSYvZjYNqbkxh8Mqp9FWZqtjDW8GsXCZ4t3rWW5fV7U",
  "key22": "34RX7Zvy5oC1GkmNDZmdZwLgbiPE2AJFLAFLigqGcKpjSZEDuQGrYa9Jkxsf5CFhKRskm8gxtTcg6ax5dB2hUxki",
  "key23": "46daVdhyeMQAq6iY9LqZKEWmnE9y739rKpSuy8edtWdarhJduPZemVdo9M8po7eqCqM3RY2Q6MMsYvARyXrWaxq8",
  "key24": "3fFVUHKfd3zDNo1bWX2mBSAcTnxFpTyh4ARHm6k4jes6Db2yWHT6Gmw7VMyCArRLXBTcMhpEnKaXxK9ekpacK1xG"
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
