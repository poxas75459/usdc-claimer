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
    "436mj4uyj2k4TRd5s8WvjJNN73P77wTLC4Rx9KYYdRrQtfrtTghUtHKBFEz9433ySZ41G3pi3crDNP5N4bhNeBGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3hiReR5Z7xYREboncmTZaNo8zPfdpAbbs6kTedTQFnYm2c57K2bnna6e55DfBBqvUs2S91TNWu81CauyMJbGkk",
  "key1": "2hSRY7rXs84HBecqdLywDNTztx3LpkgahgZj5yEEJZhKWe3dWChckDzHqtxsyonZA3rrMeVRB1hrR1FsbcPmZqDY",
  "key2": "4HhEJxtcPUGSyYnovJPLxaQ49FGZgjJvo5vDych9KD8CE6ewdAKf4kQCe4daCQVnJqkxS257r6k8W3AC3MzGVhjf",
  "key3": "1EjU67veajqXpAUKDyAbfrNKgycZntWMxnnVSgYw2b8JSWHSGXGEq4Vxff4LmsWA1K17e9LjU1a4w9FRJwUvyhc",
  "key4": "nTuixzT8tK4NDm8gN6TNzVdP9YjFE5PoxT4xHLoQWCUxJ6SPYuYj8Z3MtHB6mFuyvco1WF4XEN9Qxajv19hxM5F",
  "key5": "499Etw93dYCio6uByLHHx9mX4BG6G7nzgpYV7kR2coEBEKj8TAmvLhQotggVV8U4XRsA8g8pM7xEw9YWN5NbHBEL",
  "key6": "Hh9mhJCWWw27icmnQMDRp92DhohEAwHxVVKxrR6h82K4bwCzPF5Xgo7S4DiEJsA5vT3cehTAxSoyCqcmQT484mi",
  "key7": "SsFVW6cFfEqGdgYxqsy8GHv275uBzhxWY4ht4ry5qFWWEGvhvkGHmKLnDdydntF7pGXuen4S5Q5H3eNUb1UNbRY",
  "key8": "1pwpbfCSQYBkNkYuJth77p8cJ7TucQxkU5tqigaWyHw79pPmphnrmfu4AQhPdhGjRExSyHYQPvS35q9LdRELYGo",
  "key9": "5hDAeYDeKvL4MjFkdGma2bEvVgETEATxDyUu9J86qhgw3VvJchpMLvuGWTWTuQKZ6VWUp7YmRHTGKDCPjJgfDvHD",
  "key10": "5s1aJSdwtNQF2F4YaAzn2WSgfiGUZ2HNUxRzBr3Xw1Rnpi4uPNLRSZHhkfduQvoVjVFtQUE8NGj1oPq17UNcpH9q",
  "key11": "Td1pyEwWXuxziqDETSDdayQaKFhvH1mKkQFXbtBD5oVT2feS3HZdcqwJyZHpMAD9hSY6ZxCkkaPr6GhPSv5vA9M",
  "key12": "3yf5KmZkVJD81axqULAhMhWAV1zNDkPobFFeLa4bXGigdQTkCkYmeVymvmyMFz3ojaTUUvmVPAFAqMHTb78ajNQ",
  "key13": "2mBJpwLwXFh3cu8fWq3i1HeqobWHaVyqhjBvBxVZyfVwvs8vUeSneY9sB4DNCFv28wHSLRu5XfzeTfPji2KijL8j",
  "key14": "4oUd6vh14FPqsXGF6bpQhwLBmAD4UoFhQbt6F9gvoC7uwCEvgJA186SAJL2c83QXGVjmcMJyLaC9vLUchEpvEoQo",
  "key15": "5r8ZeoD4NMQNp1EHscK4gxiFkE9wjscYjUET1FrVkTAtEsUBbRTw9cstV5wNs1tnHW1GyCZtNSYnnwtwmein7m6d",
  "key16": "uBxWjxkRNWPZmix3yt4ZrKmw6fUPVsc3i7eTxENoHJZZZPYZxYMWLK7qQGDnMhiUjNaTbLfXW2C1p8eUPKDuZyw",
  "key17": "5wwrzLJfuJe3tVgpn1F8MTiEVK9QwuU2wG2tyPnEiAsptGevkDqzkLxhFgXrLceeTZgGZNpR5vMyMRJYrJEFuqD4",
  "key18": "4xxb4QEVmbrMNPBqWtYrovJopyZMX4yPjGv92dNfAXtLhGS5pjte72tMQNyUd9PkQA8kYQaAhzesEZF4k7yZ2FmY",
  "key19": "3N8h6iSNCGnBz3WX1dEwr9DFojSm4QZKhUxR2GmLxG7tgyXJSxBz9eyajCXFCbMRgB9aCfiRNS7YfTV1PbTFMC5N",
  "key20": "3RvPAPkTNSbdhVUnpFqBgwsokSc52jTQMU7uofvU5D6ZusBfxM8bxobavbDmDF5wNsQ9LxoAQvk3kgg5LARiX89s",
  "key21": "29E9a2RSvivW8GT3fUJQHo28NqN3faw2NUSNnFvj9S1ZqLaFxBXjW8rDFKgXEETD6UVbwkFdpSjw5jSPNZCW4Z8q",
  "key22": "4V2CufC7tWCPBmQRKsSh4S6LURZaKDAyr8tF3erq7fT5b3dCVcqBzvEvWS4j8z8G6NnLrKEtaVw859gjKzQTtu8R",
  "key23": "3KRgrRRFwz4jpywGZaRc7EpDmYe68cFkgVDHE5RRij6bw9SAYwPA7dJcTWWQv6MZHwmVfEDRjrL9wBupFi5h4KRP",
  "key24": "2SXE1HGwHADYi4D5eFNhzH3ATeB11VohqkwJfZmKvih1oKW5itFqxa3vrC6U91tnjYU2nZcqksC9Nksqp1geK3Pj",
  "key25": "2ZMA5cV9B21V62wMuGt5hMaX2T2NPafbxRP8TerRDWzDk5o2DVhHXNkx8b4VkdYoChjqSC59gMTmbkeeUQNA1nF6",
  "key26": "5Mc28t7PLDrx141vSKwUx2P56FMJzGHWXHU5GVNY4L7VDVNqv91Bn6SynwPPFGDvn64RwGqLz5gNwwWU1UVsASLg",
  "key27": "2QwFU2p7HSJE1Sr77yrck2hsTndF3NPGaChMrpcyzzmncjpDxuSasCfUeXeGMR1P2zQMgMCYqoDSDw2N69gDe5Uq",
  "key28": "4QP7vYptmyawNLPrx1BLWkcq7DYd1NNmsrg7uP8e67aySGxm32HTaxLsi7esvn4FjVmrc9MaqcsEc2eEpWiBemmc",
  "key29": "YpW8cFXPJqXcJpHh1RSrmd5dCPXAbwh1eanENmA2M4ULCrbfXrKNfeBKENkFyZcNYVyEC7en3Qq1JM5EynWxBEw",
  "key30": "u5k7Xx9apNiqGP9cZZEp8q8KSAviMYgNrftGkTdDU8W9a25QogNDardfdavoYu1e9tGLz2kSfbPNuZZJXXmAgDP",
  "key31": "3ocEDeoFZXpHxAiwWmKQ38MsAVv3VF1csLx4JzrVy11ZAUZTttgMmtoYPWtPbW53uHUYCfsaiwMFUyMbYNqS9PrF",
  "key32": "2cQEp4HfUAFY5Ph8ykKENVaadBN791SRYqXzLaRG518DkZNhAyx83GDsGMQU8x5yxgBHfcMFZRN3ZvUs8AQZ2LSS",
  "key33": "5obPBvph3xVLMXVWUGZNDcoZAyLQNKHrj2LDh4epHfpzqyeWK7mP1LZMggmzRYdGPoyQ2KRPbdLitAALjMExwgKQ",
  "key34": "58uTXTTLuc8LgRdTb3oKPNQsrV5CCPQGAVzamRaCum2xSutL9JrRzS3NPpMx4Ty33NsDXJSTjmssc8kKfgbbxSZF",
  "key35": "4ADdYeexWJXKRyiHcZ69uZashHjbCjsNAtJMiH8EgJSzyZz36joH7CjhyqJQwft8Fbc3LkuiaVucRJoTaZPLuWKB",
  "key36": "5e5kbbww1UJ5FqpdbWgn5AEPpJ2pF3vUUbaRvGWzQsvA2g6pr5SgUwark6uAPNAr5W5pDxrSFKYW2AFjppcgwUWD",
  "key37": "3exSnyJuuqDHbqsLXnLkwXDcTnXwmRWEtMQTjM4eDLFBnbrKAXbB7bsUVxmQdTaadwHh2NSk3GoAgnqT5sQDeSQS",
  "key38": "25NFuH5r1tTxxDMSGWPF4uEEsJwFUxPJKpNcNXwfGevpJcKNydwScf22CGjwzwUYEA13yMLdXbFfVdPcjUR2kbM8",
  "key39": "5hH3uHM9vERrMb6D1Q6t1amU1F96WVuN4rY27itzot8sjftwv1UijayXJVpYkaJhf5avE9C2o1HJqX2jvJByxfqQ",
  "key40": "4a1o7w2Uujyn22mHXWnNC2in8u94yu8dDkLxTj72eSHqeggJPKggPjqSxqGmTGnC9TXXHtMLvP7qUVMZ4oWmaUy5",
  "key41": "3uUxtJ1aACzo4LScZmtu3KxYRT4QdtMcZzN69ynKbSmwx5DURcPjnFn5pfFt6MxBAy5yCV1APNvdWAMA8EEdkzUP",
  "key42": "5DdceSYcKvZfdCEekFoJrhCxNm5fYFCLKNC61tQGhutnwz2RwPgwY2cWtr1a7jsoGYcW4aBRSDyeHtQLMxqELsxD",
  "key43": "5jYHxXd9swr2t3wmg3HkftVWw5TSah2F3B6VfQWPCy2Zncvwn88r59iAbjeNghiLoQTW4HtV6RT3zYYaGTonnZUi",
  "key44": "4gxBVLGuZrgpwQjqha9CWT3caaqasohYeuy57F6AGGARJfW3zTvQy6mEJFKapnjyKRwcuyBaLBcPs7FSsqLfqpYe",
  "key45": "4hgq6Mckw8HuXkwowmc198xq3ttQxRbRn3cCofpJQLUPydxabtt6aopMJ7EQXq65jDxkxpyKBRLT6Jc3Kiingj6C",
  "key46": "2jW3T5YGVipWxyPUMT9Cr5XLusBvpeY5oh7zVUUgev6qwVS9a5qSoq1XGQFYK9LGARWJfHYj8JgTkBGUoRGmzSsq",
  "key47": "38hmUt4pTSugtiEcxH66EhidkyYXaamTaz1LQpK95LneFfXtgSHjtj8U5BQQwV1nVAjBBZ174MeLxQPBMeTTapj1",
  "key48": "Fdqb9vmQZmD7HQcUF9xNHMTPdKdyoTiNDjbz7xAVPTiTseYdnG91dJbf6T4YpSNycxTJXSehhHoGBRzJHyaLaTX",
  "key49": "3NWGs2TZ5JhvB76qUjb5Qc2sEPMDuh9J1bzcunBGD4PZuz43b4nH9tyUEjuBjti73WEEn6k9yUv4T8CVfJcPq9fJ"
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
