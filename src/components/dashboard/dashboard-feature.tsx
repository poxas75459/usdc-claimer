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
    "7wieFuypTK42hQGGGYKQhZ4f81buELcXY55Nv8jcH6gnbpSQ9Wztnq5CLrXwZwCXjmzpV22vqDBt7NbPjE8vn1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EEq9pG6JWCjzw2jUJGzF7vJFD3oPwVwEiH4nzdjLLhBPi3iPmKRu5PCCbfNZvLhEaj9NPtEgcBSgrRLtU2mS7Kt",
  "key1": "2S1B3aVf7ECqY7EnCZaMj3CWa2MX6visuR5TfEqrkp13m9RH9BotaRZ7qqERyoT8Y9b6eYBppNNvD7KKPyR3N6R",
  "key2": "2WWFzeLvtL2yN44e7skpYLVJpLvRFcV7L5p177w92cVbGEoG3b7TirCSuj3rdTyXA3DJ2FEceqUQvQSAoaGsSHNG",
  "key3": "4gZAuXSkR8G5vgf7cJs8LYxF8BZ6wdGk1U9frQEbcisJZ6hrSAhpsNpc1mDzxR3isVCsQZkCfHfGNCHWHANeB9jv",
  "key4": "5WTZ63wGugvFmjFmqmnGwsaTzYkYvhkAHBtueFzXYD4MswKzthrG11nSCRDw5oBLaqcF4hX2sXY4TWVhfZXpuVsK",
  "key5": "5X5GoVWabzUcx11R5oSTwsBBnT21RwtuVdAH8LtvvL5SACgKDu7KjUT85DqeUxGy7kBBfdJCxTcpK6q9oJdXvkQC",
  "key6": "66VnFvixHFA4hCjY6bHg4kgeZwdmxYzAceemyLAGzoNg68irFjfanyvkAioNjcRQW31yyLBzS1fgYGpY7X5QXanv",
  "key7": "57QpNfbeik6Rk8FNEryYmbCV8JvsmVZRYnrXEkaEShJHcjFZ9kZZ4Qjrw3qDDHs4dSUnr9s56rxdofiWvUHVsCnY",
  "key8": "hbE4fRAorpsMi51PHSfY9YMFDQNpqNRPDx7GGf8L9GR3joJXJTrP9jCZaQUq7CShfZH8w9DrXAEdviAVVLF1NPb",
  "key9": "4FYioqCavbhZ3HPQsegdV5hbzGTY2V2DJFfAUMwQHEhrahiHRpsHhdZBofRJEqmxaEqHqvvTHhRe95dD6GHqFJem",
  "key10": "5b4ahpCwQjQC2oy8ZmA5ZrJ77ZVXvanvLLKmcU5YcZU6ZdGy4qvF5Szkn9ANhS4Mm3pEvm9se7K4uJjaYSLQ2arK",
  "key11": "2AGJcjF6Bjq5L6BgyMum6Ny5uKoyUdDxVKUj6hoWLAM8GXZYDYppM7eGGU8C6oNNSBWfprABeiij56rGnHoJuNog",
  "key12": "HJnNqEtkhQD1fHRfZqfD5jMLKtPQKhR8jLbKZcpeLix427FiivJtK1VNcS7SvKV8gh3veRd6vZ7vJfBPAC5MDt8",
  "key13": "3SAgxJCemXBEjcziEfyDXn44whvWsupSvJ88zXokoU98MLA6NX6qzRDgtu3MUpUhmyTvEdtrC6PjzksKUGytJy7",
  "key14": "H4vveSjSJLBkMQVM5Zty2sApZUDL5daWQdN3Xdr752LzyiiTNoC3YiQA6H7FqYwomXSg5xGxyaaSAKstK5dcKJk",
  "key15": "2EuGRrshb9qQcobWYvgFvscFfH3XBDWDmVwVn6EmfkKgHiBCLRacwRdjaHyBGemGyYno5L6YFB3FS1zBxdj3JhE3",
  "key16": "pDDtmwKQi71jHzKnxb6bbvi6Z1eGJR3VUrkNqcgajUockxuJaYCcmZs3EBgJZBkcwWhqJJwumoe7JbQMgi1eyxd",
  "key17": "369wvzs6BbwPa48zgfeKuSGg9eLvZ7o9yfj3Ddr7J8r4sgoRSzXjbYb68wCGzeqhXiPvrja75hq7oVVyHTQ2YAr",
  "key18": "2fkA8WWBZ8NDgCiZbq5MJUnPdoJhTxHHkkcemjAn8oZ2PS9AAmhfniQzjWVxemkSpPFjvzPo3c6d1Dqe8bJG3okh",
  "key19": "2VWxdxVAn7GJnyyzGNLb3ojq3MGJ7meKm4xCXjMZppn5hDm8cUCNNiPVGhTKsgwNxyzm2NRvPACdoTWWPciDCkjK",
  "key20": "3BsgydpyZf2Qqpxg3zsi8tzojJCxuwduwP5FVwxK2N3uC7wh3GNHrBjfXWPuwh8BuaEKpwSeFPyiuMQzyDhu82wa",
  "key21": "8S25EDTkfnkz4cA5fZdqsyfBPBErR8jrJWGBvwwEh4zH3cKdkPqTAaCaN5Xwr2dXf7dpLLYpnjhhwowzx5sZaxQ",
  "key22": "3LzUiap2BW4Goy1kjZKsfVpNDDwhhaccgfnxzQ6dZosL6BVvy3iEpvsL6TKdHsbYic2Vrergb4XvEn4bvBnv62VE",
  "key23": "4u9QwworwGCJKpwDd4xJ4KSVAdCqq1hGi3fJucyLoDJeoGWYcbVmzG1mTzJXB93LCcGBVWdw7K45LaEvajEWqdWh",
  "key24": "2igULPQFxQnvVtyvHdvyUVXUk1iVzv5MeAYKRH7D5pz6SUbxY3Rz4WpquGeeY9P58ZRPEUe7nYHvBzsEYXJADCX2",
  "key25": "4SD9o6GTTyBCtUtXxXj5sjRBAxKM4FpfomDdT8JmftFakHoyG5hzESPRikDJiPyRT8TpAfuUTmwG26YPMM8qbiaH",
  "key26": "4YFFhnZUMzKkftZ88x1MbxiydkxZmtjv4WS8v83ZPMsAvTv1eL7r2ZUJgLW6yyj6WJ7h2o96SapLj2jexcuaM3B5",
  "key27": "YJmEyq5ENrLCYcNkRioYf2WrnJWPWZgKafT9NCt1S7rrARERTgjSK4G8M23XkqwA75wZzH6xVWEKE4gtFRv56QG",
  "key28": "4PKqKjkqjkRq499cXSwPRHdqeHWx6ratGnLWXNcSWGTdixD7sgdQ3VbLkb7nyTYKKcXAqAZFhvJWL1XCb74d22gF",
  "key29": "4AzmouE4WVbFvdtL84tgdNEAoFD7YtqYMzguQTVkAduC9EizK429gAiDcXVLcC2dd7f821yvL3PkQ46kEhoe4npH",
  "key30": "2SFgbbnTeNV7GB6onwjxvu61VV9BfoDvC3tmh1tX1aupt2oPzxgVSRza4PdQak5PfPPZwGcCxRHdmF4stBQm5Ahh",
  "key31": "4koQJZS1A6GBdBftHyPypmeNPVZLUf1DFSQHJnsqCe32Swa6RsCAZTXS6rvFtxaWhLg9LmpBb4QhziCqosRk2RTG"
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
