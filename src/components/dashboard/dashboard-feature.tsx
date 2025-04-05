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
    "5uno4XQaxDyS6FaadC5UeoymQrYp33YPnsZGL4y4hR3JuzWDdjuomwxMW3Yxsuozww4jYvREBYQYWHrkQnZmBRJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PYq87qyVeoPpgMGHDELTYHaJSLyLyvZS7LhzKWL4YYMkNifFadGhjuFL2qAmrY6guFqhJh5NL5RfaeLWabzALw",
  "key1": "w5HJtqgsSXZYYHX582ihMDv2xtdDSWkWXEq4yzDBTaroMe91JG79KDkGQ1XYVGxRGsShKqkEVWCmuX7bErTpaCw",
  "key2": "4bv9yrvDP4CFqEwRh3TCtVgfexLui9A487uWwS8wHDaBJ2D3Jp8pJGKGEdqeLoamJ8vAGRUAeKisVSzgX7iaVoXy",
  "key3": "2DYgeGneAqbQLbE2dF8a2Zj7j4ohkop64YErYFUtSye67UYWqLLTMkJUyHiVoFpbbBXCZ4fXfQUWcuPCvwsP7aee",
  "key4": "2PS4wpZhVsj3GjPgTZE7KbQs8QaFqw6svCDZB6ndeRV7taVeN4YKpVsDfNeo3fWMXbmRRU87ZNeJTEDQ9PqrJD7g",
  "key5": "PY49gxZrrdidkCK3pt4CpFibzseS2r2YiyJmnx7TcQmD2PLdTXcdEXkJeJtBzNPVz2kkHh6meHXsBSqUJCqwMTp",
  "key6": "2S5iSy8wQDi869dKYh7Y2sKRGjq9HbSnCNTRVLmzHf8K3DqKPM7zfDNYFdJaFNtqLC14z33aNVusxrc5wpVbSVsW",
  "key7": "4HKz7k9MJP3KCABNgKJgU5aQe8pH44TFh96nt1V9NipLTwGC9o7KEzwkLaFpr1hZEkVTMkAT8Nj11qdyLJt5zdEd",
  "key8": "52swMYyfdVPyz5UFuWNZRq7xxhX51FLY8EAgoyKLNqcSxXAPYT7bmchNVCAPdya6ST1QMr8gV1kACdQdzryn5zWA",
  "key9": "u6NSy5oh12YxDwt9kQ8ujPTHHnm7AcuK22ydYUmDqF3zejRgoQy9ShmkVmit7oZ2TmYRp4k5SEH6eVPF3z3Cfpk",
  "key10": "3qKh4dYFseJctRFmdjkCktWWHpYRdGn5phyPRDkSj4ARRStXBkT3snHamDKuCi1XbxeVvXkggCB1B8Eyrpazpfr2",
  "key11": "2RMrphsMcAPggdQ2RghHGxMEbPSPpAPKG3DxtBDB1YAUPsCzmfa1vf3zeJdKzv2ffzchi8aFtP8d46rarMynxdhV",
  "key12": "4d5eSP32rWAdcwbmxbWGUPp8AjPp1RDjPmW9L1NCEHjKYMXnTSeGJjxuus8JsV97VRKgnbngrjnqHZHw1VjBVSEt",
  "key13": "4Kv1yyK7rXCjztdxKY3hTzxm9tStYCKoBNSZU5GPRucskzY2ak1ND7w2FpRCD6u3d1qFEJH1E4Lxi4YTc1Sb5Rhg",
  "key14": "2D3pxwnHLu5pVFF8QE2UDXoQYvQzCC9fGYVfUcFLTdhPR5PKd97qs3Dpmtd4dfavVZedJRsuj23eqxvX2isLJqWE",
  "key15": "46RKo1xEcYoTmrPeYmJMDkAc447xSuyDa7mPKf2dWfqFtN67uCH8xWwKjsFqTDht2ZPDuAszMSm4ofsyrADVJxLb",
  "key16": "2Dw4hKDb3PGNuXrKTBBm2iba9qHULsWEtxjNfCXASnWbCFENe5cdQVr61HK7jA2SnE5XVp8rkieYGFXujPoMCczG",
  "key17": "euLxjyDThHs1MShNEdceSS4Ebpieu5ktqH9qgTxTikPjr3AX8PzApmG8Gc9NPQAL4JND8aLD4nPSUqDZazK3pWU",
  "key18": "3hfnrJeWwN6rThvAw5T2jhNQH2DQT6ckSAbHukEfC32PmFf5whFxx5AY1QU9eCef5gD5C79JCdscUNbXPzTWBzBB",
  "key19": "4PfAp1c8t7HxUp3N43BkUCRK6HqnNBPYZuv3NBzdMjuqdxQmD7ZemYPARKHnY8uZBFKxeFjymGAdaaBaLcpU9EbT",
  "key20": "PmNKJihshX2hxM1ftMZaSFzCJc8UqgqvHRqEfwoWbiYUmD91qLvN8kZqL54R1cQetvJGKxZjPM7nr7UXkBrXJFs",
  "key21": "jrVxYcN4NhaAa7jaPzbQT3TNHpQVFrF61Exx5YL1XCStjB7JHKo438nbWmDnNJpS3tPEHWJ195gy2hrc2RDCUyY",
  "key22": "5aQjVsikzL2D1Ta3jEecbwHpczAiCoLQhD35AYcDY3VuFphEwr3eN5AwEdJAXDmDuUzJF8DPDWUt7YzgEPnS25e7",
  "key23": "62Sd5G1A9vYkKSiL2RQ4VV7bYbuwAvnvoKvkCeU4oHqegJBUppr4gB9HwH2YoFV2kyi2wfK9jn2ZRsGA6CNf4Shk",
  "key24": "5Nd6xCaaUzxi7vXHTVLDZfLNjNr86YkAS4sHbfjgpRP9KN9QihUKnPFUKefSpat1RA9qUzM4oUwwrMP8PjDVoQ9N",
  "key25": "2wFjQgKg9mWGVS5NC7Z4iPYXiiZH1KDzbcMWv1kaQ2B7yqiS7HCizYxDfBF61h56YKjb9QTzHamubexGzEgCi2vb",
  "key26": "5ywCMQLEwAhhHB825z8aJBg61pEf65inpJJB87uRi4foJx2ZUSRzDygNHkwAgrYRHY6ZRxMUt4Zd4egdu9WSAPhC",
  "key27": "C2KgqeXa5FxR1yeNTgX5cso1a8WczbQSMa9my4hZCV5HaKvDaW7G5uyhwztkVtWp4CdBxDyXz9rp8JRaYfBKh7k",
  "key28": "64WbGzkK6CjRoit58PaM9QR876ZNZ6TtALkcSnPT7g7PTYzh7zFYJcpXJsqu4APXewxPjHxaxdyT5i5Yg3BNjAdY",
  "key29": "4hFUWu9vHzxR2QnhWmCzG2kgi5nbtuwSbzC583j4Szfus9F3KdCcExkQHFnh6s4duUMzJHEqkmVjr3tNiJYSjjfE",
  "key30": "2dvHZoG3Ue7TDyx7qBZ8wdCeP4S96giMArZEaHPgwJzqgfhrGxA2X1Azk3KqHaRASCnmvuQ8Jq5BCCcanwNxVUyP",
  "key31": "3nuJNRsb1KsQJtXadx5AhAkgsA43fmx4bhnckQVj6WBuMezc4TpvsZDr8Gj31Fk4KHKrFwrVFWngvewpPKU3PuNR",
  "key32": "4tVJGPR7Yr3A97q9YaeCYtpNbeLq8EUB37tZc4QMRcoRV4ckARywRr2xe3BdQuq7mE7wbui9akixs5tuvgQ1Pgf5",
  "key33": "5MRr9FwercpewZ3TmF2o7dPJMuaotJFKBiMVBUzHoyQtebU6LG5bRpHAjaKMPAYMX1ZAwTwzvWWuhd8Pk4Z7uy2t",
  "key34": "3bz7qEohAfJEmEYV7MvcRYfFzeELrV5SRMtQJ93dUx2n3EALraEXTEoDTqYXw5EUZUo6JNpKg1pB2kDtitxx6Dfm",
  "key35": "3iRsKSR8VXgwfC2r5tMaGttCVftjaVKekocPYf5hc2q7pT3sf54ixaemeF2zV7x5rG5wFNQoa2E1BccL7wLVyjZZ",
  "key36": "23hbey8VmxauEeo7bPUNLpJARt7K2XJDEF6BhMUjJKjcWnumb2R1BqEUki6EoRjGZ6nso39UrH4qFGkhm3LqnnLx",
  "key37": "2tDkCsJi8LYruTdmnuZ3ej37jzJTDceV41mCL5MeYFV7njvJRGRQFbV62vzAVSrDLUYFsggFp5c9hhhTwqnMhQmK",
  "key38": "4QctSpmLu2QWRuPh4tiDPWLeY5F86WsLWMgDfN4afRzk48KmjC9wkorRxgpnVCqULUd52NEXQG1FfJpWuv5G9AhT",
  "key39": "8RRVqm46tcuDbSciyxpd74A4oU1tWCBD4bnMyVxEQQGnamW3Fd5TsnV6JHFJ5jM93hngQnJdu7DNw6pM7bn49J3",
  "key40": "25Uz2QYtADLHrRVZzf9QYEWDWVRyFDR2hSdnYt539Cf3uuiZTNLY6xhzhfbBVUFZK21ywUpXBUak6Lv8QNWejMKX",
  "key41": "4D21q63DkTLDaZociAzk6PHrVMm7dg95wo1V2k7DSBgcFZGoVjsKobqEw7F2Xx1L6moDww84qySUCK6fKWYJMVjJ",
  "key42": "DwQ7nJWzFQXswGNXdsyvqFmZEzu2rG3NhbD9RamD5gDEtcMLz6DPMCxQ2fFDMZNzCNURNEwXhku7gYnAhQ4A82R"
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
