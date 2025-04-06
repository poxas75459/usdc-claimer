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
    "4b4pJFFhLrVnhgRgf933bWfxqzFyEA9h1ZBKSuYuAC1fPz1JHgrt43QgkQiUpvcPvsgVakU68q55VE2j2xJFvczY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KWbRa6jLK4DhK4HKTn94d4u3trNSTAWBxd4YNBsAvboJJdyUghc3JCuRNdthcrXXZW7Y3KJtJjYK3JpWDQcjMWj",
  "key1": "42p5Gr82yq5HWNqXta6cBxgyQxJtESRGdg7Tg8NC7HBbWx6wynjspKSP6J1KG2FdzQ9sK6zQ72x1V2LTFfVR8ypz",
  "key2": "2t7mv8EQi2C6Wx9zL55sXExpGyrMdfrm1gp1ESeKd3wQAPLcu8LSLbk4PgBciZL43eQvG5jWY4RUoNA29hFTbqck",
  "key3": "3fAKsdsaTr2ufNQwHo7czJtJiuU4d1BsDeT8qvRCbh6nZczvy1sjSPVEDpybGf72dYRiyMSYKJh2fisP1AzfvTSa",
  "key4": "5hh5EuZRNzBTjFFP7q7xFMrpde5qkBEwEV6CA9JnhYWtUw8FmgYqCexcZmE1ptTVt6MQnTt4oszunoEubT6f5ZY6",
  "key5": "WLmymyG4EhKKUh3fhK2UH5Nmdco7kWAoc4F1ZeAJDYB34A9Zq4qiCGfi8iZ6sbHmQsfDLBRgU42DS3JA6npagyg",
  "key6": "KmXhH9Sw3wZCNB1LTrUCW5yDvAGKqyXxGrwG5zBuhQMyWmsE9SnRmP6KZqTUVZgDycc1heU6V5CQXpTBVGTQLM3",
  "key7": "3b1FjtFXLNyE63oY1Zg85kbXbdX2QvpyRjBi599aMW1GiJFdZFe5e4B41gAP3mq4ZX1FnkFGnwPnsky3dczN9eev",
  "key8": "48PDZUrfEqvhwkdE6gvNanSqex1egipzqZKCiuuaUoMPtGfv49RuHnbrkfMjdb7BMgY26xEdd8CV8ascapqZGfxc",
  "key9": "2rUrvTsezJJZwqSjqWVEsMQrwmRZ65svAvidDRhdX3bLa1MxtW6mD8Q8oefKa3YssVNEnnYx1H5dXZNoGYQsxaAH",
  "key10": "am9qv9tAdQ359ADyzStXKBmWJ7m4MWwgLno1qHHMBcM1H8WXU9r2AMKERfaWSFT9x3Tvx4vXYtMG8VEoHEy8358",
  "key11": "4dMBG9zU3tG9fbmJYkCVXMGYa5FVXP3WQdaPG4qpF8dhDARLzzLT2uPvw3srtVq3ybmbNY7JtsjEgG65Hqx6wPsB",
  "key12": "3sbFcQaotdQX8uSgidXq2hZWUjy4ywh6ifSRZJAvTrRoEkKh3BqSG9mivaeKLwnSwXhhdDrPzWiRunMKkEoDWyNc",
  "key13": "8sGZm7bY2CDEGiuyy5DM5GsYLTLpuPZhEjHxe2MjfvLD9N3u3y9XmiThi15xyMsC44DRTX1wn1aP9uJsZGytizw",
  "key14": "2dsQYRCo45pJH2VfASGhCzFvQgKxX3tHUzHiTSgBCVV47GnwsL1JM1zM33aPifFgxAtkbV5TJ3YLo3Lsc4KB7jYH",
  "key15": "4mjgjwCnuCfC1ZCGa1GB5P34GWcq7i17AwP5c2TBossQZLFZkf1dZtk6DV8sQPps6h1AngGqevJAQGmnzhs7DBZA",
  "key16": "5eidmGuHU9F6hT9K2SAygAE8VQ1gXorjp5WMf1LrNUq4bHZwWGHW1CQaKWwKPcAuHbPu57QLWNQdopQxWJvkfcKz",
  "key17": "2jhdaPHNxYaZu1bFAqLVR4B6fH6fJ3NP41izbfbrapxdXCFA13XKhuEFE8u5nNoQLBZqQ2uJtt4vUj5ykhrPKy2W",
  "key18": "1PAfRbERvVb6bKLS6v8tb9pX89CoBBxp5LGzqsD9waGTDHfw4Mvnxa6MBGGWcBm37jCpBEAXYdJ6LVx1rJA7JsU",
  "key19": "2FvbWT2qBrnTjfzU5JBvzy4qP6Z3Rdrpy2spFo1QSm1NJnmwuHq8SbJxczVVxkyKDxPDWZ3pzjEzTcSAJ7vZ3MXT",
  "key20": "3r8WvT4uXnXNgd7WsiHAb39bDxdJ5rrA9fB7EJJdBWTwke8kskGJ9qaj23Pan2ARfmCYMTDegxKBcEJe4C1VeMMH",
  "key21": "3A6DwNYYHCWXGfua8aUBfYiNwrNrK8UqEWK8XT4s8pem29RZmGJKe2nbbqbT3R3GDg8Sptmt9uDs4k3fEfTkGdKL",
  "key22": "54s5PSRSdVxtyVsa4sToePpQQAZaPD8xD78peaLisXUqCcoyzzj4FgLuoN48giHQnoknM6kQAZCY9Gme6GpaVJEB",
  "key23": "r7tYD6vJnL1VHG4d994XMzEzNbhvFFP4eofxXoJJxswZdMvQH1q3jz1pF5RnFcT2BFT1YrDV8Mm8EQDxMmFaM34",
  "key24": "5ZW2xhjGDC1yG9UutkPvw6zFBi3bwBExUPqWkGGBRQVtyrWz1nVwiqvRZiTXiPA95X6sUaWMJQMzBGkdMsuQEQML"
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
