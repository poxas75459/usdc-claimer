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
    "5KH7QXRWXHvZrbKqjBJYV4PUWEFMGjhMiFZShdamvvnZHdVxtiCN5Kxq1rtCZyzJU5NeUu3kpuL48xXqndoHQroC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29eSJJDjjydbTJmkWanFwbhRue4HE4Seks6nqs6ULZZpchcsgLCkanhNzamahEXpvmW6LFVaHu6qrZPyqTirsDjG",
  "key1": "3qoSdM8wFFL1voTnU6EwHUpnervxQrmBtP7vWpbFXDaW88AjnXvvnJZcZQTP96KKMmcSyCzEmGhsph7YZcvbTPsv",
  "key2": "2EUtPqsqZvZRA84uk9wFCxdWe29FrELZSpxnTZ2jM5QKt59ND1wH8AtCTk8Jr2QY3sBxixi1Me43nBP9g3GwkzG1",
  "key3": "PEskJVgMxM3QMEeqB8dH8bD5jHfzmnjceLdEHZdZ3WxLKgsXbEW1J4dtq2wBXnGjukmqikSqpFvC2UjaaChXbA9",
  "key4": "4yzzBNjZ2hHdE2vU1VVMBhe3odjT27kTYa3vwpShDmFsoWfs3fXpdJjyukZYD5c6vKRJpUSSuxXESVX3p67nB8qv",
  "key5": "Kzz8PLtAVREsKpCSayd2Ca335sTHjzHqbRgDRwEwvdPGth41P1eiGAzSxCF3DX5XtUAGeDov8BErWCvyNhXmQzh",
  "key6": "ivRGZnB2p2D2EUhGuG6HARqDARenQhrkTREtyikcFMwFoKeuDUKWvqwdU4kPcErXA2KPbWZdkmQWjbz1VbNrHw3",
  "key7": "2xbpgb5Gqi1Fo9ncaFkh74y37DygcMEcZh24NZq8RtbqM9KVWM7c9KY7oThyWJshEQBJWsm6KxrZpeV7xMff6Fyx",
  "key8": "Z5scB2gZLGK7bjCi5zRiVzgTFL4tFmNL9UT6j2pDdmk52LgYra2bypancH6ebSst7RsZVd57EeQB6XHzAWHEYaN",
  "key9": "48nK1dBZ6W9cfoY23RDKm9WcHpPideh4QazYiF5TgdSsZBNX1s2QoCg62tboxUg1NiLqkNtoa4j9jkmtfhPotKJu",
  "key10": "3BQPMTGkGExgEhu6TZHVvfAcirvRRWNvtd6JxASDUFGzRkRvrprRDavD7wabFyhLzjVAEURUBD4pzKQQepyU5duj",
  "key11": "3c9mJLHetP8MbpsvB9xjKzmLrf8YabnUn8ue3SAJF1y43ZyTXmRekdDWN45WRVKmREEntvLSKcL57ng4QpGEVRtJ",
  "key12": "Z8Lt6wuLsB6CWJxYGWVtJUBa2hu6U7RPzBNbwmxm8p4Ai2Lp6PCG2VoPfYw5tZE6u9GNd1rNbQxfNx36SjgM3xc",
  "key13": "zK8V2NEfPexRJX7L2EmECZJpMgk9y6Ug3QdbMi8KA95Wheac5BLSRqP8ovUjjJQGCbV4HgicceQhPFxdKqwxvgd",
  "key14": "4UUpeBuo5pqtcaSpoYjAeMBvcpXH8r36b49bqfCHRj8P6uAAwn1chDzJYHVKU4QWKUnE8LSzfEBSUpWT1q3Tsf7M",
  "key15": "2pM4FNS3KxrQ8b3LKQX8Txvd7Kx51RC3k2LXURrGjDLt1cT8A4MBBMvaDMDzvhHcN2TcNsoGf7tJetSEBpHhdspe",
  "key16": "E2A3V6UzYvTLyA6zCBSHNkcrQEtwGHDHZDfUibHLsadFai5K9KN2m94MiDgzpDBCZ4faTkhJSYc94ers4UUDg7W",
  "key17": "4J75eZMCcYG6vDss1oeG67h9G4un4ud8QmzNcSf4ZAo5ayCaCiKprZHyGzWztFw2NCTcx6UGxbgqMnc85tYPfA6z",
  "key18": "3HnKMTTXgiDYdW7H6Z8DkyXEJJyQoBGmCwLxHy7eymMMEfsxuTbkbAeMVXiTm1g4xV8UMD1z9sjkYXXAYfajk4xQ",
  "key19": "21JkNZM9TEFVtz1kjsQDL7PbJrU7baVKzzEnS1NUUdWjtFBsr5p3nRdqQbzfPhsdMJTQcfkqaKHAkudtK4Ng2eQU",
  "key20": "2oJkvDz9Vcagbhom3KJaMYxkms1JuE7tz6iqhSkdjYBBxTWaw8zu5idXi6s9i95WVXbPg9gCSQbeSWNwA85nru2q",
  "key21": "Un3phVsANJk4MDDQmNRa4BEJJcXXaGMs46GuuLFPtMLuXkTHEjED5YmkZbYNA5JokiHMq5e7M4b4wWNgW2t5JXq",
  "key22": "3eFzhH3v3ZBzRL5ckKNgaWXCWsbaU5m885TuaBnCGgQmfwBiN6hEwg1Mo4CNF7sx6BwuKNvS1NggYgEvf4pmveqL",
  "key23": "29XbZD5acVp3AuCTkd2c5awdLSUbYjJRBo3rxTkDpvGG5PYhaHxqQ9GaWn3SHx3vgEGr1ZH3z8W64hb2iT8p6SwE",
  "key24": "5nXZkeG4yyQEyMxei77vZHgaBLoXrJhDqVcqjy1yym3AYi7wpAZ35F51RkRAxxegqoDdqXjvfpriepvDHHvTaYiD",
  "key25": "37jgagE3BMVxhM46S6UqjsM8eHxymFNLhbFKeQFognvfeZGCe8kbi82hgGX5qeW6ysipFimNo6YAwprs4wtZj8sb",
  "key26": "33ZrGBkfRSupKQy3H1gDtRHG5zq5khfLfvJE5P7dQ3GYLBEETi2DZUQyxiw7TsvpSwjsjJ46gm5KLUkU9AkrKwNY",
  "key27": "2adSfKEeQy1obJ8mgfmGGUF7Zzr71nw4wHWtS37bJ2XB2JuTVq66W8BoFRhnTXYMVq3DrJasvrA2scVyfGPBeSRH",
  "key28": "5JVwnfMfygMVniNx6qn1GUHQ13JGjDpiYr8cF6VcvABNRqRDHZNopfcfYs5qTEC8RJEZeeKyYw2jXkWSU6vgyxWM",
  "key29": "4mMqRhvaZzi6ZYLL1idyezjTZG88rYxbxS8uWorT1QbpjJFb7zwX4a46VRBqy2HHanGL27mg8H31AnqUB5UXbhcS",
  "key30": "3vsZW6yv4V4QupUrZa9aCLZZPaDCSeYYNBWwr3VvGiuASXoKg8yHJqwHFPGV4Q9zjf3CSfZgiWNoDbyeYPJeQCj7"
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
