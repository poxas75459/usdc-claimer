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
    "4YAcB94mQmLVWht2HBjTec2TtWYZKzmZphYEPQA35yZ1EYCHqw5Upw9WijfijTvAQWiLBZumoqupFSGi215pDC3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1EVxLQq9KqHZFuf6fV8zX57J8HGJaTXQV7n9XZWr7cVUC2zFjKVSHnnhRwGttjqvbPJs4kzkNCvrm2P92MRPGcX",
  "key1": "dJ6pGh5xQs7ojL3UHt8CUPswPX3Mx5Q8tkGvGzju4nRx32fxhixNiDaosHAAP8zu6MsyQv4JC5aMMtHivKsBVAN",
  "key2": "4Fh8Phvh7tmro6C3eXa3ZowM9CTePZneRTbSTj9NXxFxeEnBiakbvXH9C68aiLKAEt58DX154zxi3oepsnTA3kJS",
  "key3": "4sbEDUTPFjEMJuJfiC6qkS6ndAJ25kv9foUCdSoXjyR68Rrfcq3uZuJuu4kELjwTS6EzNyB8dmGjpASZXKC9KfYN",
  "key4": "23Zt3YAJCFm1tZRPoCaT4qLfsmAMbmYYvLHiqkxgjQRFcWuwpCyCSnxuzo1xwjydQNR8bDbs83WA2e2r3iuMoAD1",
  "key5": "29M7rt2H1naRij3xQZg1Zazxefybob1mmLRouNuC1b4ea84ssZhbnhpFcABLTgeVaFihT9MtjyFJhfg6Ui8gp9Yh",
  "key6": "5bqgQCuZ5RtmzA8sKtYNE3EgEkCLrZ3BpAzBtZzDzPbwsKmi9dfWVRkJL3QR6eZs165CYPjrVVpKeKHiikQutfzP",
  "key7": "3GxuuXze7WPQTsW938WB6A1nxhiWNBcJYBgtzc2s79ak3n247o5rksn6LjJVFf4b5oa8yUexao3wosZBYZ5rZJ4y",
  "key8": "5cVkkRMA1KPiaikPxMrZd5R81rp4wVJp5yRCfpVk1XZxfyyqKr644nJREYbwGHgdXj5fdDan7C36KiX3WTVdc5an",
  "key9": "42JnGpmq9VJMvEVBq4p4c8egJXFEQWbpgiEBXbouA7bDbwzbWTaBjiLsCFoxdJ8ATu35TLLWkmU1c7PwUPpkJXuy",
  "key10": "4guGZKLLTcziDtkHkGE7gaFTCMBJgdu6ZEjZyfvvCWRruVokxqTfo58dMk4XeLs4EsEgDA9udFNEDLqeBkWBSpWo",
  "key11": "7KvpoCQD41ADZo8MuC3y1whzhoBiCGQ31i9nyMYbC5oWDERQFQpCByhMCogEr8Lh2ugPJLRTxV1m2CTHmzMCVDT",
  "key12": "12qdwnzH69rxHZaeKBpViiYAbnwhyUUWRBsTiLerVNBiRpEoxEHChRZyJv4JoN6NjKMp8hRhy2TNEqZZTjYUmGW",
  "key13": "4LBtwEKkeRHKAENVZMFcJcdyvnnWUEenFFmgDXq5WwEFRk1MyjJAaB2PgUGgetQSbQhNH5BrpSux8EXbgPpM56sj",
  "key14": "3mv1wn7oiZrMo5BWtrjTr3wjChiNRQjjzQSf7MorK5Vth1eDTs4yEPys9hHMsn7sHCuQS36V8WP5ywUoiLFRft3b",
  "key15": "JMCWa6VajpxJ7Dro3SbiPLvwXTDn9KjpRAQVKiRiWFuvUCtCcRHttXTggi8YedcEY6U28quRye37pyXWM1GXnCe",
  "key16": "3nvvM52ZqifpFNQjkNA6FkNNMWCPxtpmYg34yUpwJnotwrebJscupbfNCs7so9WJ3EF93N7mBmrLLzCcWakLD9QC",
  "key17": "458jxCEWAHqji55CrxHHV3pSbU2acVGsMw6HfANAEHDy4zPswZ7crJkpf6sX4Vqy5Pfk258pX43C6k7Lk7BC413u",
  "key18": "PkodAPz7Q9d2x3KWpncfAvTizGwjatsV3rrZYyBNxz7NFT4UJFGU9mqE7PXckyFMzZmAg7XBL3hCbYJg9ucLyXx",
  "key19": "4ym7zARKhPaCcmQLAY3p45ZSbMx9QBP3KVdgbSxBymMAYdF6hfaaWbBnVuH7evrJdbesr7RVJp8YLAcGARVwxTXX",
  "key20": "23WpGY3MN16paoyvuVZyVu8W8Xd79roQy9KkTxtfqt5u5C4mVbfrHUZXLbyjumJ3sUDrmpbVzRHBm3kYVdQxdkH1",
  "key21": "5pT2nsCUDEBuoLQ6rzBMS5EPfimSYFNPF9w5x1p5cr6QFWAkqaXhJs9HNmLWRKhWUZpNmCQkNn3GwZc8GpAny61X",
  "key22": "5veNnRW5qNYNavoJ1GKoQ3gNrChMM9obgNf9LvVmStT3LzrbufKjnqApWqK2nuL3gCGbTsYod6J4FrEuEqiCMX6Y",
  "key23": "52UcrakdoqT9CtraubS8dSEJwhwYaNFWjqW1SYyyFPbri1qXWkAuAakcUqbbnfzSyZ5pAzyFytrNcbWFRNWrUx6q",
  "key24": "rTx7aB2jfRBByjt46r7J4ULytxQwGeK2f8CvSc1axhcfBiRPY4h87B4ZgX2yMvXHd7nMzaatEy7pMESYxcdqPKX",
  "key25": "3B9iwzTBjCTe4wKYxEysBhPL1oyXZsp3TS8Dk5FdQvGv3kzpjEniwrugQcuTSKiBkgLCuW3ST9GKxkchjGpREcKB",
  "key26": "2UQECyAAB6YvekSZNRbNWB8a7PERrRVAAAmiKBHzzAqViqfid6oSJY8MsbRjmRk5VPKMxGBsRa6zjtGmyuWVUFrb",
  "key27": "3UE7RzKWcNUZTtXVATYqFDoUVeEmoNLgxS7UivkSMapJ7nrSsCrMMp2GatWnHMe4STWdNCJ1jnJYvUjtyWkzaddU",
  "key28": "5QEioCZHngcFQbRPAxA1WT8Hft6pBbvTDv8A2ERdcN9SHput9a6WZDTn9MrUgv16TNSoiEZR8A7p8T5wMyDM5dfK",
  "key29": "64A6AAQCQWgbSPWEwQ3FN4NrgcJnWgnW8aipWNaaPbefwqoTNS2WRuJQmp8sweC29ZPBi6xausTssyJDJLsVvz4g",
  "key30": "rQ8Bsrnctkzqv36U17f2avuWheFTFLR5G17kaKPuH3mLjUh288sEKWNXepa7KNHYkruHPf11r5E8QyDjnU6UjcF",
  "key31": "kgegpv3RttM6oAq8tAfALTYnoWMMx7xeHPLJ6FhbDQecsCGVmRx4PUC3d99VLFLf1izNcCHLYNhLGs3JRPTmVbN",
  "key32": "5XtRVKmYHYEXJyLfXyvfzk8dRkVS539boZeCzXSyajc761gwxCfkMjTEabCGHpRXgEnSr6Zf1QQnPXcJvRx4R9k3",
  "key33": "h4iNC1MzNf2BaSfyjx4qcNZUQejipZUasmTTPvDV76AWDSucFXbpgnp2BCsYSchb142LwjdAYsLgWFgcVtHQFUL",
  "key34": "54DBJeQbQxciP4KFcDB5x1sB2QjhMK67FNdQMYb81P3wggskbDCkxe9XnYa9TGPV24NhjnDhpJBSSZmRT3nUnvjW",
  "key35": "4eD7DxxZweKYBQ315XMSXQm6ajBsbnLhZpBqtTG2qYfG1H3FQQCuzMueuYRVKzidrPZWWzFC4HVQLc2dJDiraozA",
  "key36": "4BqazYEmBwyGnWGrn2zwK2vA4ZoJG1T6aEp4X274ewi6NYzvCmbj2QkSanauTneo1XEqupT26YqH496wPn8dE4hU",
  "key37": "4EbxX9RtGALyUyxaHY3XRqLJgHogy7aunPMcnGPuN6xTqJ4YMK9tKkv2MvU9forkUqz7urVPbRpbdfR5V1w7esJT",
  "key38": "3Uf6CzmGCG6gBa12QHNUwjUhNsguSc593evSJiVSuUzVdZL4vRjL9j8SaaPr1nx42v1Yrrnb2nTunWypruR9ZJRk",
  "key39": "XpQGQaJFsiNZxizXwfqSAwaiwubhP96EFURZ8RE7UM1axw2HKoUTjZk4RPmeU9ewpeeYwGFCYz3YWBUk6CsgwQV"
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
