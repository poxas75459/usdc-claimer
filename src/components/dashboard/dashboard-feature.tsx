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
    "2LMvKjhamXEgMmk42wsRToozi2yKBJNw6pnpuN5WVrLEaSkQ8cAbgaLqWFYc85KSpSMCWcb8HhSiRbNmRHwHQAQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nBNW39bcpH2z6VWwmmqvvGJ7oH9mP9vsJyaZSvakEFdvMk1QzbfvFqTDpxmWRKNUE5UiQqiAzJ3A8E77rEBoVfY",
  "key1": "4DsCWPijujUSEeiYQtUXyTXAGLP68FnLC1JyvQGJfeaPHsje72b37EbXxHcA2JyzS8z42tNyRwV4MkFxqRuLzep7",
  "key2": "51DDwW1aez4jby714MN6DHXPL5tW5gpbGfxCrr94xhtXdLdnCpe47duNGUW4ofvBnrp6W9XeXmWGHsqz37r1Zkrm",
  "key3": "5mUqzCP7ARGCDPB9fnapUs4XKL9JU4cQ2GBSQR6JFdjMXhhDUr4ixnqyPzZFE7PyLDrX19utFxCqr83g4djT6kde",
  "key4": "aT1LiS34nv5wZXKPhCkgqZfjUuYTgkHsFrCSwsYy1JCiJ3tSzoqu4VsHV9ZbjjYH4VPoUHBFKvnfa2A27XYfA5J",
  "key5": "3xGAKeBiJWRYkPmJA79AxPGYkuLb6LDdP4BmvrS9Rw9e4vRzf9kQVMgqDtSSHKycDBNYbuEx5GPwHkhJE16FXw1h",
  "key6": "5a256HqAi5qt1S9Cf1NHfacuhBPy2VUEBaWQLQUkMneb5anoGmDMXAErxQiQBbXay4qv2iLD4joTMrzBrZZwEfSs",
  "key7": "3FoFcx9FAVymzWwxSQdARFAbJmQk6fmzrvpsA1dcYHiaACWAHg1BKK1dT6ATdFo5APgBfAHnwNck72zyuMKcykW8",
  "key8": "3SVGahpMCjRK4ZtUG5Rec5ocJpPUtba8FQ7vhhSKZMvcy59MfyFcFHEQqZyEqZ2ZvGa2mXTLSsBJYGUVsuNbizWA",
  "key9": "49bVDr4dyU7Nr5rvtBU8V19C5bUGGuzoYex3GgZGZbvcpLwTytca36j2MmMZfMzW78WybqnM487NSZjdF46ZnitW",
  "key10": "2BAkSP4jPPQGYC8JctFt5MBrQyRxgbkZbmZugV3hFU5JCC3dbsdk1KxAb1v78ETjsx28Atoj5yoQd4kmua8hGMzm",
  "key11": "3mLfyvpyKxjAHFkZYWNH3MZbG7HzFjH9Ls9RCrWhzD8KejEDE7Jv7NwDtRExaSTUu6ofd5oRt1WACkFLprcMBVgx",
  "key12": "3DEqHbVQ9kkAfbLeYFmy7XCBquPy3iurU8k9zeG8bjVtBk6zZzzqvJ441F6JHw9mmmWtJADJTf1Xw5UkJ4FsqHNJ",
  "key13": "3tQYFLyWUnBdVKULiiVyXWVT9onycwuac5HtfPgdW9FowFetn5SeHm4gwV6MqC1qVrq91Fkrhsmg6q48o19dZc1c",
  "key14": "3dqJ5z7bKQtxqgqcMRjFCNq3PzuG8Kr9njuYGtKcSjrFD2BCgqAc1wJiTJhwsL8t3anxRHVLJx8qJiyTmYZnCdqE",
  "key15": "62Wen5ECXyT8MC3h7rQwCWomn3hJMEWosvHLyrQvW2RShsVSDt375qkWB9bJax8wfELFoPRwEhdnEsR4gfBH9YSi",
  "key16": "3x97ZCHk2rPBBaFPY78v6UVsEEgmvGxyUmpFdoTbpgkMejQAeUm2HyjLvwVE1CLwkporFbqftedsessTExLdyAe7",
  "key17": "2cZFjCnwjcoBqgVhG8rTdUNUZSsM13BSXaRqUeABP5dK4ypF81562eUQtpej7vVWrnyHhufX2J17hpkdYcbd2Unc",
  "key18": "5o2giUwGzYzq8hhhJBaHg7vq7zygZzDxttPx3HVcTfLpEJ92rCxJSLXiFxceq9Jy1gjEfArg4wWDqvW6Qi5aeViW",
  "key19": "3Er9PGb9tDtfZzszBgf9xcPyJASi888W8XozTGi89zjM4rxtXdVrsmPdrZohnNQpyPZvjWpvjzY5JaQBE749SYuN",
  "key20": "52Nzfy1ffjZWnnSgzbQTvzFXBaAFD9Yv9rogQhwVgmvt3ddB5WDDRjfzfhCyuG4FHiA8XiP1H8PHT5RSM2PGzk5h",
  "key21": "3eAZnRF1ncE72AYkA6puHayy7CLDKQdQz2s53VgRgeEYQqTD4FsjC3EBW1ouM7CmPirFRnyp5KwDRYXT8ZQVYtst",
  "key22": "3hAjmEd9r8hgJyTLoTJa5NiwniheDu51J1fJS2Njb7g7Be4Ycbrf6HRUTSbG8ZRyX9TgMCV4pZJx5mCBZ3jS9x6r",
  "key23": "3eyLXnmeY7di93PLfeBeh4H5oY8CiBAYBJ6fZvHEYMyYtAGXv2haFcfbJWpGur9fJaaTNzUgoMpx79gcKWJ8cyQ3",
  "key24": "3Ftc9HHACjNz1RnQnFvWPpu5psu4rF17dFNDYg5v71sGrNiGwWfAET7HmnwDZXtNHi2NEDjZLtuBYpQH7WHpsfeR",
  "key25": "2c8wWLCQVwXXX7SJm5czkAGwC5zWtnYEzJhKwmEn9GpWi2v9J41TEGJFt9xyYhbUXFZ7U3FZ4McQbKuweqB9m8Qj",
  "key26": "5vVt4fHkcXVhqShWr3Q3CSoYPGnRhQqAocSYcdweDoQCUF6SGvaewatjJCc9Ec7LMshNs2evprE9iXg1p4mYojxo",
  "key27": "cHE8h3yz6Br5Vxwum2gD6NuPPNR3dMowbWMaCCf4uFszA7SjqzQktqhxVeagsAScPpkpSX88cfctc2qLD43k9zU",
  "key28": "nFjAFRzHMQCUCbokVdC8ppE8ZewowmGsqrmTKXuhRQqzTkrj5KLhMNMpjiWFXr6z8cjGx6H3hBVBXfkDMLsDu8a"
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
