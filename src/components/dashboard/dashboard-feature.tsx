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
    "FEDMJR5mHDdEK2NHr8iUk94BYuGUPH4bBKef4uxy7W644orrE4kPazmKdJ5FiuE3SFtJWa94osu5u3QQhoXDsJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DQAWzrKbhbk9QDAs1ZV3AYm1xDTScVKZWFRsdRjei3xsvU3Kt37o9VcYrWkU2K1YhANcVGHSCDUCTs5WgYQLPDD",
  "key1": "2qrH9jEWNhCqKfFM5QXhUeVkuhtzicsMXKgXQ6KevxHgk71HuLM1SGc8PevMNsiXHmRd3PA4XAt4oy5sESWUznZN",
  "key2": "3iQRUeTZCnB4diYEJR1Jz75VV7p2Fi1ynWFdQKFbMYdUCnsbFXTr5kHitZ35jzDnJo1L9BgZEWj9cTnSLENFP7Tb",
  "key3": "4rLyycKu3yJ62KugbtFiufLm8HeBV2koj6WmFTJ8Rd7qUgivrZpdEQorYSQU9aU9QGpprNNFPnx1Lero4Vdxfx7K",
  "key4": "jg1ZE9w3y4AG6yXvSaU8c1VGxbJYxAxcXxTYJzCmiS9UGcxHQGtKXrmpAGMV2hV116MnC2EgLaGrcqAN9jeGiAQ",
  "key5": "2cSunHESCSDZccpKecWDwtmxG4osYwhKG3c6dzF3EsHwmjDTzyqsTHC1NAEo2Kfj4Ksu2XTn6oJ3mYYoN6C6fxHA",
  "key6": "58jPBVJXwq9Quhyz6MF1pjPa4TFUqUSVhMEe8dHBcYNvXe8FvNRNBtxsUUKp8PcPn8UwYkDQuwv5D5n7JgZHb2rP",
  "key7": "43k1aNhmGZDxcpAVkFMG2z6KpK4wASGn98zowhkpQFzNUe9n9QtE5FzEw8wJMJnPabqJXxnRCeKz7FGaoDLiABZo",
  "key8": "5Q5NgZTi8xfUXoZKMygeA2wmd2iJJGrog3pKbXYUvyxwRULXAGc4PR2FLxi5FraMqjEcTex5vEFVVHY7WoR3PsiV",
  "key9": "3Vnk7mwnufLu9Nth4pXz7joChi4gtoAXRssuEWeRkNMXf8TRcRjLtVGdfSVHqZpp8jcCACEB4Zv9tud7LsqUqskf",
  "key10": "4t4J2HsjYSuiq5W71Q7Z5KCUMxJzwF8gzhTVbUjcPrdhbzewD3V8nxWJ8GVcxFAPrtkC7UchTK41umDkxgLmrSND",
  "key11": "2Hy1rTNUkLF5NiUdUjrk4kTvDfrhKug5m9Tmmdnssv13tJtKwpCoSuR2WisqnNjNmpJ1wY7SCjPjSwGrefz7wwzP",
  "key12": "4iuFMwwytt6Nk6bPudcC1K17nwU8S8NoingmM9hsH7FMVxyJnh3HvaGUSbkcaYfnxi8aFekk2ur8c23332uB7Hs2",
  "key13": "2Ba9dHBRRBgytx9mZnfQqiEkf5iS1TfXUzGbivGuqxpxRbwBSHaUFQXyqiayTDF71JCo5So14iorDJyacsv4SCaA",
  "key14": "5L5hApdURxx2icaPSph3zLoHTznb8aAzWEEVrBLBCW5MH88UUcmGuNh93FPN47FsQKPXgUQCvFHwPfwSDbPXn8rd",
  "key15": "5pdYprScH2BxdLBQU1f3o6SRZsqc4A9XRZdHvyapwHxf56XJjZXEtYdvGZ31E8Fus7Zjb23E4WiQ7vHDgpvD5shC",
  "key16": "NXS5NWsjwMhj5hz4QZps1z3saWyFdBkfw2npRkcJrErMnsYK75RoJjPCKW3CmfPY3T1wZbdTRv4wCtzD65x3M8P",
  "key17": "EbP3R7Cu273hgewH6XoCWSg9LNxGapVmNnyLP5vruWYeQmwJ5Ba6rjg1qEBrZ787qSzLAv8VbZEZSFs6wiHZnv4",
  "key18": "4fPBoWoMrEqPJYmx3Q5LaPE3ZQzwnRH3FymFcsumadavbrocgccJ67WUgVoe6BW7Srvr6nRca6hZEeBRj6d9UrUQ",
  "key19": "sTjmmmVvWEcp8ZW9W9AKJX4jiN7efSEaJMncYsjJfVbNiPGUSYAgKwi3d4C9Ts54EBgQfSRb3R6pByv72MtibPA",
  "key20": "Z9q4LRg9HCFyqwAZBdsD4cQK7tEs4NYRJ8wRqHahkqEVfutFX5jHQ3JmJP39rXUMAJaAfbun7kRcPT5sQoc28eS",
  "key21": "vvGWFa4JZ6t9i4886Wo4vqxba1yCJfuphWfDEoGcP8SKbTGGYd5XQe8cAd2VnhM7d9SAALQTjoy5ndVo4LDQhdr",
  "key22": "VUkKAvYtE3sdF3dPajzjDzxbWYuFCFeLs54FEjp6CzKT1q2Hu2xjCevSX1SEXLDEw4trSoojF7vN6eHGt9R9WDR",
  "key23": "tRe5BCqcro6m9vGyYmugSiBey2ZMHmbLgcL6wG1nUAeu5Vhn7gRTd6Ewrdh9Znhju9EwY5r8hrciF2oDdXEuSeB",
  "key24": "2QWffEXTV6yyH7zwagtChrWttxgf9c9U7Uhxya7eh8QaATaTjPN59bThYDXKXpVhyJr7aRyswVcu8f5J2uSXS9kR",
  "key25": "4UgtFHw4iCt9e6wwLgGzDRgVzP6qDacCKpRaosYQK9SMXt6L8w96CupAwVtKoQmwwpUYg9XPDe7Teia6jgwGWYWe",
  "key26": "5VVydhb9GKUcex6KS7NXjmMfibin6DT2BSdKTwuCPczn3syUpbwe1Pu9QBkRAewZe4CZs7ddMM3QsugmjWonm8NC",
  "key27": "4sRHLcSmnRh3n6CzaF8Na993C9U1MjGu5V5Mz3AcZvHsFtfG2dZFvgfRJg9SX8CvsVhUzrMFNS8YXoQuSFiPA2hW",
  "key28": "2MnyQXoWcGsJasoQK3xf9oJugcanhLS5tYjZkeks5S1m8Kw181ATkuEWdBxzcVAduJU2nwKt5TEMhGeixnAkrYNV",
  "key29": "4fowkv58RA2gTLNTTjY4BStW8L7qB2QTc5bUPoqpXwHDJ14NJx1CH1ukuUk9AHPRfPjCGwLRguqZ1FF16U5ALKMy",
  "key30": "3XaYwbQmoY3sAFixRLixQ2qrQkq8eoqbu1foTXVcxd4zMn14bxXTy7UiktsW1ogfSHc9c2fik9vo8uU3T3rFjNec"
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
