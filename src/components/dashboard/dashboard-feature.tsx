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
    "55FimbrXPZUfCn9RfxRyTVUJMXWfKaHSwc1zGeVXiXxYfymHtovJAqZsgWvd3GhHagsvrGKsu3vFHSYnhupy2VE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7VgPbmA5UNUycQyJjmQievCeMPdJREwdyK7TEk1gR86i8HCgbPsR8g4srawN2uv8LZx9D9y5vM1hUPR5GsPanhe",
  "key1": "iKDnbBhQQk3pAScS1gmXFAiH7tG1acGz6zdkX8AnFtePWmdpohbthMGG83ciWiz6u8osYTgnnGF24sszNjeKbSL",
  "key2": "3UQRbKGMG51FASgJQszVHN7fXMgHjW6XP4a4S6euUVFbREDFmj5DSzDHU6bk6URhhQwKUnQTGDVTfY7hbcbmRpDQ",
  "key3": "38sfWmnohEsQxdBPCs8WwM7zEUpmXT8j2oG71iL7x1amBFjquH4JoTs24X5BeqSi31RyXxZFat4Mi5BTdpj8i9k2",
  "key4": "2eLndgSojqvw9QFw1jGfqwRMByYGet2hY1W5xGrVPsqG71V3kPyfZi6L9maprYwFKhnK6daMdQvZ67Yoc87JMdEP",
  "key5": "5NbkzwcZ2dTWCNGb1AqUGk1fvVrFTShKBMcGHT8rtGdxpkoVPf2cz7DqGVZmGAr8VxD4oUKyo1BoscsgRvsAjU1f",
  "key6": "3rrF4b9SC2ebnLNeHCMsmZp4W9CWPgVZ2hsU8N9nCoVgm8EmPJ1rkhHvXwFy7WWCJH4XVpuqUtu7WYE5WS5pxgsD",
  "key7": "4NrFPJqpB8uvuxigLGERqxSt7V1ijLRSDqbUurNP9ScxU4cqeetLMVztifW9NkTHc3m5mfne5Wf75Uxnm7rtjEgK",
  "key8": "3czRUJSeggiM5t5RmWvmXiyYN895y1QEd6GsyaUXJ1rv6NywXhY7tzDJtv5n1xJTBnH3DtztUA8hDSjdqLZkkL6Q",
  "key9": "4pvKsfNuGy8gmZsXup2npw1xPAKN2tQqsupUvJb1t5MhkUJrT38Sfj7CmwnLWmrKSdyZr3BryKbM6omiX55Lg2mu",
  "key10": "5PQQdYsx2A8cUPXsWa2sghDtvipyEvZbhpbphynEQpNxMxtVh788hVt5sK7qnnuACdCnCKtvPNkq2Y4Hp9iidJiY",
  "key11": "2mLM7jCxndFetQn3ffmyvDjHHpzaYqx5hAT9CgsghZPWGezZR8vSbiPZoTb7byKP8cRGjW54j8yQsVqNAk3vY4PQ",
  "key12": "32EJheseDg71swz2FdXNrfRrx9nCGNuWVVyxWVjBFbQgzHny4SdkoV3Po7sVGef7F6DmxuGDEYiXonyKqLutMovn",
  "key13": "4FSxYEpQCSfqXb3cYxvaFSQDwLsetQjtAKNXrwaJcqAYC9AVoedCCrHLuVsFv4Sj1HwBPcaTvfkmayvHH5MpkiHc",
  "key14": "2iaBhgcmisHTBLzUQuWzgBmiWApWxkwq9D8LDMuuSaquqH5kgQUKpW6sUqRzc1aenVsruKJ6ZkrVPkbxKyJiQQTy",
  "key15": "49bVydkpoTagm6e8zHhfLZ48EA1A4h93Sut6uMB12xm6s7qAqbyE6uXTFe1j5fW5puyhfJZFbhSVo7crDtaofaD6",
  "key16": "2hZKjBHcA1btZ4wWmQs7d7jWonPjmMUUJ4rnTirZaSNh4vHRsCRJF7GEythZirRKrBFQv8T536NShr5w6dfd3i1G",
  "key17": "3NK2C5QDAQJFoC8LqNF7obM2P3MoYmkGHM9kcR183P7MzSCFSTXcdGepXB2EqFppifkLo1UfgVzrfQ6X5kkAXMDb",
  "key18": "2StHKpTqQBB1EqQbmpNnqAq8LtebxDtLXyFeimKeXfm9joyFmBrXTaj2aWj9y1scxyiuH1GCF2jL6Nr91u7Mc5dJ",
  "key19": "2UL2GJT1c9QpVV6pGDvJE7iLrtevB7Lfo6HokKsvsLqE1hW19bZywjyvNYjxxjAfsnCLp7kApnAJepx61J2RdHkK",
  "key20": "2gL4AqT7xCHY2pZ1NHVmW3KdN6EvmcakCcdEVLmRwyUBhJVnD8i3fAjWuAdMXH9HG6cVA5HJGXw1UTKXobR8JFXZ",
  "key21": "2LPURJvUFWxNbaS5chFBotRcsuGHznN1PF8S1KZrwvxF1VicG36ZWSYRbnhCrSiZoos34kv5g41LoDLE7PQCY1ow",
  "key22": "5JNgGzehW1MqgJA85TKbAfbRMdQ1LLz3gnLYJEEmpWgqfBoRuUn8Ks3DzPvHp4eyaUK4rjUZTyE6Lv5u2CQYvbD4",
  "key23": "3Ja8eH6oPZuitrQTRkDsM8fX5hD9yrBcZHmm4cSJJP3u9TN8n7ooJHeynDZDk9jxUKNHF56vvJRG55Tiu3Jytowt",
  "key24": "5X6orALPsrayoxjNCSjSdStrByKrzfd3QP42aRsq9a8qE5AFzdQM27zuA2UHXMc3tVYHS8id5YiWk7Zr8UAhm33a",
  "key25": "5EG6y438RRZtTtjPArgeBbzjAQ5BHFtYdB5tQooEGQtQATtbFQb1ffsgh4Lo4EdgcTooxsL2sKprNWGHUxzuhWpv"
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
