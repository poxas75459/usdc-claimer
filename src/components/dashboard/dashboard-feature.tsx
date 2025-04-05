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
    "2DSMsi9MSd2nLhwZU64h5Cexf3XFh53yknGfRAHGZXCZFU69kscQoQ3hpbV6JF7uwNMMj5DprxijMTKSY3ypg1QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dpCLSBLG1BpHkDKWEha71vW4NhgZesqbSqhCu3Fqo2TnuRpCe7c2FqPYCdvV21xdQ9JgNYLi3QZtqEu5ixmJiuw",
  "key1": "3zWLYZbgHW7sTQeLU5hRUrSiA2SK4z5M57yXXHigWJBwJT3hm9wendi3HU8Z5DYrNfjBqq8ckdc1H277wUk7JcKH",
  "key2": "23fQhbDmteEV2rPnQujLiMbNjvzPBB3RPLHDP86uoQ47LA4tHkxKXxo9omCR9z2ykQaXZ1cXpcGtrK4BwGBZr8jd",
  "key3": "2LAGYMwWEFFpCmHmULddVoNDBmjJLPJBw9N5Qt8fFQ65Tz5C9KwGtDBhmzV2AH6bDvcfoW9GAhZix8G9kgBXefk9",
  "key4": "2hF5oXajVTopBtkXaPrg49eQTMcZByjtH3rRtuzAYVPA4UbGMCGHBtXaqfZ6Vw9mYrzsanBVFSS7pPiJmDQC7P8q",
  "key5": "jTrzBYrXPSgVjdr1Ui2c92vo8CC2RTAeXf2MncdQhXdn69jdzUovm3Ekd3jmDNNEYgcEeBE6YCNa8HBN6P3eSFN",
  "key6": "5EZqgzXgkySi8yfx9ZmSxQL3K8jxV7tdWQXTQnGrnuL5ESvPe877y8jtb9Rzr8u4f6EZyVnrk1tirwgtvH2CPTwn",
  "key7": "44WAU6vty8DMZF2TGLRTRq9GAE95ayapLDB1WyKdurDrUcGYsHxwR9dMgnrYJZ3wLrJ8wiXiH1D6e17oEabxMuwU",
  "key8": "UAxhm2DHZrp8Wduuayxphszc8QiZZWxjn4Jrr4cEdG3VcAMSHAgaYKtFeF9werU8mbW3Xriwnq6bsbCgKVub75K",
  "key9": "57JTzKpr7eyTW23M9PTs2MbkBq2aKbXMyiM74YXsNeBah43CWhpYumG8e5GAwWouW279zK9V5pUFxtPxMD3ePhwY",
  "key10": "GSaKrRKSbciLF7LN9YfaYtMej5vzLTS1cZq9rZZZ8hXNfELf8krDDDz5UHd4NVk7yPqSoHu7JybsebiDAuLuRvt",
  "key11": "zF68DqaGHhg19ZUs8nHSL9SZdTiyQoYqyCCURrXhHUKVnTue16USJjoDqdrMvknjaAfCLmAFdNHCp2XZ78fyeUt",
  "key12": "xP8pKYKS5DfWLjdPdutiM7YotMtTjtE5aB95rED8pY9qkb26dZ2o5MNWa5c1JndGALiYJEcctfco7ZgYGfn6xJj",
  "key13": "WEZJfMn9rQZWhWBcHJ6vd2x3bq1cwqWGSDvZLtxga7kLEDYXBubjivqEsjxxwDL8XW7cgwjCy4zWQjSQuChb217",
  "key14": "64BbBJrTQ9oNTPdcC84oX3tcUbWYsEH7LoJpEVBPnw2ZSQYNZc65hBV1k6Lh91JXVgA4HthxWPeZPmA6fZ6LGuUw",
  "key15": "2r22NtaWEG7rAAKQf7F58U6ZGqoG3MZELmDa8qRbChZs2g1UVFjM6aPEqMRpLoRLgYLFKoFFxUdcXMVso463irry",
  "key16": "w2TQ7W7PTwoJPyb3sbWd5rZ7BQvmU4u1EPpqdvxuUy1KJDg3PxM6a9CfzmnvfyTRJgfGoD513FLdP5G1SDeB3Vj",
  "key17": "4A9M57oyejMzqNGuQanYRkgWze3XaQQrrJN47rLEVhKN2NLahmtBtEiZQ29iHRMA6iZJ1jf2b7jDMxHwwiUG6SHq",
  "key18": "65ABXqFbEerAbNaMD81EW13jLHxKGFWWxtZhKinQrmA2r61KA6Q5cqMFZedfooQaHbCFUwgyvNKkYCM9LEtepDYW",
  "key19": "5odioFiw1Sftm6wJhSdHmAd7qfM3zeMWvYznSAx9ASv5TgJX4d2GxnRrqjUZ2QenQwYmW4YaZbW7FiTZncmk6mQK",
  "key20": "5FRcD7QS52aULM4ZdoygaBsDtX6JZX2e9HfP5KdC5TBBiJbUsKeK8mxKJcJWLcer9yQdyXomocrGdpG43q2Nh1sU",
  "key21": "mFWVHKvSWAPjbRXtxELnTp2znSqZbR6nKDyoT349BRTCaLYvRrDVFh1ZB6mtjiG3FGDbAPTDjM6XYXLpmoQRiu4",
  "key22": "27j6o4qmfip2gQyMgJ81r6Fjtb5fJjTxkPeCJyMBjfboAGr6DyTgrUUSbiqyutvdY3d6hBuSDDCsURiA7ncAuW1y",
  "key23": "24JFLFsGqtmeUtXm9gx7YhsSK6thZeFp9DnPmy5Pc9ZEy4P6nDU8GxXqvjsMVbdDZ7XUNn4fsAa2kCFynUHo8V2v",
  "key24": "5YpquFqejdUN8RGbMMJJhsvEk1gamBVbbfTajaQQ3MQVYiEiEAatofMRex4CzvSG1tRxekjr2YLRyr6PckCNtoEt",
  "key25": "4ezHTY6tEHT4qHtDNK6TiYuQQBX65bxnjrqrwriaXLTLsGbGersGRYjxD6fh6fXUGCSKkDrLxpD6ymLYRpVNK547",
  "key26": "2gT28HQTevCoDkMtvFKfLpMyWjPXmNscEYrvQZd57ENQuD4U6PRdCMXL12efFhVAYVwHL3n4inSUb1Xm6vX4tw5U",
  "key27": "4rc8A2xqGKTXap23si7ds8ABAK9RsRo5ce3wV17HN759X5WzaZj38ZgfxnijfrVCPAB5Bq17tAuxzccBPyGGjG8i",
  "key28": "3RLk8MD5qV23zSD4vzPT1PptghEoo7RpBcCpobk2gaZQtXEzYzwkKQyiaRHRzqVwfd9ZbBYWnopDJ2oHwBkvhkaM",
  "key29": "5qd9jnWU5QcrqA7m4GFAkPy4SsZCUFQgo4wqb2JahP9vXbwwHY8ntEhwThLhForEigNokAtYXfiS2DeFcgQzf4EN",
  "key30": "5GkFnsJ7TVSyCc9EmUnyAwyz9v91dcGUnEJdtMN9VhCQpsoXv9rWg98R9PrbikmFqrw9E1U4d5uguhRZvbKHFGDF"
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
