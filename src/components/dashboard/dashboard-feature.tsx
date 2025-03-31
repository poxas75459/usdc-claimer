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
    "EZP4zr4NzS9ApjZAGWrMWHqq3x42hYfayiQqMs3yD13p9qvUarmgoVqpdMQC8PHtWqSkEKMfR7xaSAuBPJennYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jYUGCo9cpjCz3QyJ93cr1szc6KhZFA7jj8oiZVxAx4q1EKwsDhGupJHbZpek2ocWUJcVEZMyt6rV2mXLKQgtd7",
  "key1": "4WZEgAGg7YW4MBKrbHYiGvzon81DmkyHrzmvzj41dG6uSGT7EebfYGY3BkowBoDDHsU1FhfV1g3EFRZ5bJhjQPia",
  "key2": "4pCDqUhJtAmUZFXYJ6AjWCmcvH3ZvGEYnU4xkVhBey6PmAvwn4SqxSMa41G2BeUem5Uoq8BQcgHwwfDMzopdyG8h",
  "key3": "26Uczu4FhSXALsjPcNe8gtVknSRZBwKXHKqc3MBTodQaJe7ayXSLGF232mSUueLfBxokg4B3554DYm3YRp4NK4b4",
  "key4": "4usFiFajMRBBrXoMo94kGJez6TB9VDGKudLr4iuXng9tCKsz2bhq82eTRSdh8d7YDLEr6eTZXvCucrHQgqt8ZWG5",
  "key5": "8LyNs23zuLVAa3Wodx1RCkuthJHeZiNHWkJWw9c15ES2Qmfr1dLBnfJmTxGmtWUuHaGs33zPiqasdszLV88s4pr",
  "key6": "5dTrrPoKTbHhJThZQDgMuuqRytcA9pCDeNXvsWvy1f1KFA6XrTUfZQL7ZXmZyqnyVwyCDc5bnfoEpfupCwY38coS",
  "key7": "5Ytw15kfuPfpKEdTrcujm5ZjKrWAf9wSNCR7mDQMftiid1TsihWnzyFrMELckes1AeftDppe5JihDXApPZqvTWPf",
  "key8": "uK3ZRXxXaSpNyUBDRQc1DN3yAHjJEpGfZxc2FjMSkRRwi2qFajyo1n2ZS9ndd3EUiVAdhPYqK3qkPmUQSUXas6y",
  "key9": "5gZVgp5GpiEw5aYz4Sv92Gxtvm2JXMJMLq1joJzYbCNijRk2aphWjoRBASj7V1ZSvumV4oYUqLRFyPpwTGkDTA5W",
  "key10": "3DQNevVSPPhzrP1Z6ZjjrjND7FWdBqonAoz2CZv5UJL2XTv3eQieL7Pv8ZFB9QYLWY3BfPXQVWwZ6QavcRSvQ8PQ",
  "key11": "2eFHpht8Bz4mo49iex8Zbqy7qWHUwTgVQ3rVV8P3XNQSggzUUj2DHt8iZ7MCb2QbZ4bQDm3A86huJnUbHRAAc6vn",
  "key12": "2FT3HuYBsyyVXPR9GuBKUJcw2Y4AvqakxcaLo8B6zrW3eDW77vPAbhogG3KKckCBMkuDcUexsFSP9jth1YMUaLBJ",
  "key13": "5amgQvHmKuKTQZKDjz8hUi44her18jwGw8mHrkZC1c9AvtCp9YqaxXbNhKPmL1CSK5SmqVxrf38cuVM73Eu4o8s9",
  "key14": "4hdrXmbECEerwHogCiYYcRewYx4nVpEi3KqdMneCt6nvRoWhE79sQmUjpcvhNyCF8D36RR9vkcW7R1Yf5AE7fAHb",
  "key15": "34EKd6FMEdjavTMPva7Axe71LMZo7hBxPDGGzk9rvA8Z9VZM6z4anz5sV4LhQkKRuMRnxAzfopAxrHYhB9ZhEisp",
  "key16": "4pmqAYQYcgZPmZq6tqbCe7fR2njSXFCwjc4EeGhdw9JjNiBvwgN2wnULqn3NMRp16TNQ7BW8HibQENhX21v1hvz",
  "key17": "3j82o9qhJq5YmU6wQwLh9gdqcN8wgLh9XsNotF8ao4PmkngsYb18vktmgGpDm7jJzfb3zrRHo947wW7qCRiiVP3s",
  "key18": "32ix5ZUbPZJZc8y71fCe2g4cMcVcVsSyLBmmEhwb5G5SnhJdjKHYyim4bZ7RBQdcxVCDumnVJ4rHSLKY3e3jJxMY",
  "key19": "29zGAKhvKnz8GFp1fW9CaJuNvXALcFdmXhWh8TVVh7XFYyuyv4zPxyea44hZBQhdZc3Vcwb3cenn6B54RC41No8n",
  "key20": "2jqZdBXPFcbfkoYvXQcFEdBs4bGiqm1Jf1PRdWujNDLhDy5D4AFVrrEmcwDet2ZXdLXNBsz4oCSptecFy1dUY8tS",
  "key21": "2D4biBXfTVhKEAikjEB8ZHhuYQCMnXmeJQ3p65tAaBYNFZHBE8XVWyM6TDgFWErqEeT2eoyQ8E2riLxwSH8kE5qu",
  "key22": "3n6HJCBV7AEAZ3EmWxXbuCMuYmoU47kvXP5e1zeHqg9bH5SdQoF8dMo4fbd2dgLsUVJjbfFxapbMgZ46vVtovT51",
  "key23": "2BSJVnsPeYgJRBHhbirELDPk9zVAf5Fv47rG9CDnLjSiVpi6ZyXg4yNRGvbgurzPkFZrctcernrum2boQXm35fiC",
  "key24": "4ED16DMNPhQkq1HSsMNRxAjyiwuv1THcv7nJUdKJrAR449UmaNHQ6PoefAK4T7qpckfhYMpG6bHBFbFWsA9NgUwS",
  "key25": "4T2dnSARtiZaKABXBED1o4YcDi274adwk5dqx92XneHcqXNU8d7oSYNEaCGQxuiagaPQM1WC4kZpNBYbqukGi6fW",
  "key26": "2PngqJxhDveQ9QWFBQnbHrp16AYHe6y2UY59nq78qVmsUkXBqaDKcfwJV4v56DpS8375VeC3HK4Cj7QqbDGrEj4p",
  "key27": "5nnyyr3DBK49TAFAq8YPK83XVCgGsXLfiZdve882pqHhZRnvDaGBmZsQD8ZR9wa7oNdwtPXuNTiTTknW5TRAzX6D",
  "key28": "XgkuJbY3axhMa2F3xEj8pWrT3Jz1uwVRp5gTf2CoUC6yuVad2tEHcB1u98xJh4hp5aTPZGuQW9Lf7is7U1GyAS4",
  "key29": "3HnupaGiiGo1P8gwQp72P5nbun2z2XSpncXF4164t2GvR9PDw2bwaHKjNpcD7T2QvZv5LoVNDbPuf43Ra6aFZFEb",
  "key30": "3rTYVQw3kNDs5bUoSJm7fpzKbP6nCBfk6PqPUMerwThxY9SL52PJmGkqzzR6s6AzmnuH7Ziasqjid5FCgjYcGGAd",
  "key31": "5T6hJ4qBXXyBcEQEgEo9JoJy1wifCuJfvAqkkvfZrR7fCzXf4jgWHGJacxdrS3z8hwFyCSyTDGGoCeja1RbjkPeh",
  "key32": "2bMQJZFh5VWydVQkpKA5RaF7JdjHEjujMa8oRWqkXicedieTioVFsH62gmf7zKQjM8NhS4DTC94wRTo8zsKzUwJf",
  "key33": "37xt7hGqWKvi7EtTjVoMbXXvZ3ptmjLGDVPwNkosty17X7VeJb1X6XWH5yxYzKDPYxxZU1wWm5V48d59yZsXSmZq",
  "key34": "2G7iRadEvnHRjEakBd8XWeEUEaekbZVkicotaRRE9MnfrqQF7zEviuaLie79WxKwy6NaRp3TfEf2ZypiEjjJJqtR"
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
