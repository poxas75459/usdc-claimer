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
    "4CDiLQKEZRqdNDhmpFvUNLvbytawYKpTPoHQjevio7pe2bdUHai5kLYTpZdN9zy1PP8vsr4QVcCuxSjLxFQF81XN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TnBK7e51jM3Vub7JenfxhLERdKu3EATEeRx1wUxHY9vDE6Dp61RZJUVSTxkSV8rzBs4Ahh4pSypXiD5YnYcG7j8",
  "key1": "3YjVU3pZqPbvMFvsZ9uGm573iqhMM3VhbBoz8QnQwk8Qc4qzYph2ZG3X1DVfamN9DNdaGzLCwGxFYCWVLuUiZmCe",
  "key2": "61AHVf5mAbFg6viFgbC4UCBiPGu6e7eeDYNBtG26x2SHrThZ62ZHkfLqZU1n8rfjMgnD7JRpmS3eizy1hfWF6n3q",
  "key3": "2uWk3jvGAn4v2c1h4Wbkwu6sccETwSQt9bdsB5o3yS1UECkaSiextLneWmCvtvhZa1qUGYKoTzwBovYia8jaYZmf",
  "key4": "45ohvVZ9uGpEf7NViwEMHdx6og3P2bHWVR1LMLqAGDo1xwuSC7821WHagRURggEpWW8R32wvxFVKKJsKomJeS3Yu",
  "key5": "4w1Qe3EMx9snU2UTtZC8sFAnp9ucLZCyoBHze2fe6eeDRziXyAW9vtjQK3zf29ee41CFf6YmfSisYmySFDjWsyD",
  "key6": "677M2M9qrtJADFExMxSWvzhh9KCK1vcuuzSHYbpMr2vnha1nsC5uJbB9AL2MrWAWziuxzUrGEZhpENfyJjzdCibE",
  "key7": "23B2gQMYb5FjKZy7sACnwTXmC1hXQ5Cfhh96ngp77hU6ZiKcyQvVyL2Nc5jRJi2TKnzDkNBvPs3fDz63Ywdi3atT",
  "key8": "5YPuhK6RGaDUHr2f1E7EFfqQp923HX7F1UMqNAMx29RHHv5QKFQjFNnYtG6hbn5XVFNzFjUPrMWGj7XwYfA8HmmF",
  "key9": "3Q7NjdFH4fEH29GdtZEKwCm2APyvGsAFpnZ1cWswx71WQFT65ezvtgLM2boE32p5pbbBDcTe8B2q4AW7M9bMdMMk",
  "key10": "3HaW6XJEF6ZJuadZ6B7iGPbE6pGkxuwFGtCgpyHKBTC3zqakwZXcdUhSXc6X9gFQTh7zaq2b1GiDu4T2ktvijq8t",
  "key11": "hNJjeM1eeEHhVweGZTHLATHUtfYhmFvgzRcNUufyTkvdPeApFTgR97sJhPeHSQwjfuoDZtYyQ7i1M3JUDW8aM4v",
  "key12": "4nvqomzcmk7sGJRsZDeogr6P8mZ8PPXenrDCQfBo4dCSmfUfuzGADyTh6137vZWDLYQsABVExkFp5jEfAPp9wmKS",
  "key13": "62Ztu6cZ9C1G9vFWtioGBr69sdQmK897CFq4kEqq84h5tvojuigCA4CFNE6abKiJx1jhSt3qgESYHkvXUo2mFwFM",
  "key14": "29PdRnpxsYyDEZqDw7jMw38eXfqFWiQjdh3frKN1ZDKZpiSg3CZA3VFz8RMSncdvoTzHe8Hp7nCxQK1fEByJgWmV",
  "key15": "nswRM2G1PhehBsv383ynoFSGQ22bVTrfphif2Uo3eGpoNYMDdEMB1rF2Q2obznrrPYDsFiKrWWz43Z1x1f4V7Yf",
  "key16": "3PPDREJqhQHtRYnXYixB4kzE6ZmskEwmYRdk6r7LCZrkcUzeTwiwMSQQ9K4FrdGi4S2tj19oAQG2FKVWkRB4ULR7",
  "key17": "47xAgNBjYVLhpv6fwQc5NAmoTnPhegRh5z9tobKnKTHVKsgGqhqMbT7Ctz54KZGLvdgnk8NoxxNmbr2DWujW74z7",
  "key18": "5ZtJzigT61p4BjB2XF6sEaNQZAkfbiuhV7ESzATwnjzXsqEt1TG6pcGK62U4ZeMx7vsVb84GkVeoYwVmFEhYt2fc",
  "key19": "LfuroF43RbyykQmPWbHSWPRDDW6YYU5yebsUFW2J8zpVpd6Ux2Dd7X9cH24vLi8DJCaH8kP4tkqqtrphScsyDDa",
  "key20": "2Fh7VSem53us5W1ngVwCQJm4Mqb8dVvh4TkJEGuyJPRP92S5Kp4nU9rX9BqZcGt8yzoLVAXYFZsJkCQE6fAtpeRz",
  "key21": "3d9nqSCdGmmNuWCBAFQjK2GW8xNKCerChn8EAZYMbCgDrBargHHijG3QsojF8dmvY52UzVdZDToRowsHf4MabMdN",
  "key22": "4bDvnXSY51e6E9AFELSQn2Hp2viXFeAsxHCMPphy8zvQqyRLumAUb9diRPkrTEDn7n41aTMNSY8mWByfw12dXzRf",
  "key23": "3daU1aUuNYtjtDNhxbBBX3NVw12kqvFbnrrspKEENiYJCLzJ1nhTHVweuS5g5scs6bRmqAYZF4EMkF6xtCW2Kfso",
  "key24": "2fpmeghnv4iCd2pSPuPiW9NSBvsEFSTJf1RpudkVD1nP2uJbJNfNWuvcN4SkjuHErG4Uawt5D5RQv7eixjMKMDg",
  "key25": "3XnUagstx1uJp6rK1xXDsSwCo8z7swHigfZLEX4XKkVxNo86Xd6orUfPesEc5iJQH4DSXnbHp3Ug2Ticukg2S494",
  "key26": "3Ewh8c9FEpniDoYYQ5FSycZgjFr4y9ef77xPq3RNVSEk6WXrgQKEW6qxydzaFvTfEGxRiJy9wG3Po6eMvdTF2byA",
  "key27": "4SD4GzpHEAkFNrbDV2mUYFgUQ2cgGSSMH5YbWfeodVDq4KmECnfRX9EWwauCqXStvnHKw949bJffWRJTBzGuyiWZ",
  "key28": "53xSseHmS8jv53MCkbTho6GQdbAHwq1xymubTKgKAQwkyMiTMb1Lb4CjdbVC93P5fND8wuegpzK1HGwkfoMao1oq"
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
