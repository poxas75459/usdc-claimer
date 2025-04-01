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
    "4JqsJb9KJBq7uS96GWUu5cBv8dUReh2XCBUV1rCz3L1tCAmUMcq5Bvd1LGWYasttEAH7xkCexTrAMLGQkMSvGTzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Emw3bb9dpzrH9VzMyWbVYk4gDZQxw8sHf3jkLWTFHUfT7UG4cncZae9YhLBqkZVmr7ugF8KmE2fZWXtjiasJfZT",
  "key1": "59TF6EXPFjQHguT1UEaaayTmVmxv6cxUfdgTcpZJAq6bzBHowLaox75xZ8ip5DSnRmZ26mo5dfNdAKP5jyikqumZ",
  "key2": "2oYUDSGQH5JkkZzG8NWfxZYKNUz69i7y8jX19jXjaeNKjjvfwA7zJ4GzPVzCp2uCJprUUiHLrytDyWZFaJhUndG9",
  "key3": "3GY28zLqpZjBJFydAQ48a5fhCcCiFMgPm2fiyiWt174txoZX7J1ybRrarmA8aEHJErpqvLCFps5GYxv9fMjRUtyT",
  "key4": "5tBEMrLZQuy5TLqCg1d3XdnAHmrpYLBwshkQWkYJXiJd9NFMM2CjKsVyAEF1p9A2EHf5stMnbz22smrUPiWTDU9z",
  "key5": "5BqNJErXjB8GEogdyzo6MUCbYdoXVSVUP4Mj1afGwMy56i6kPNwAvWYyvpdJTa2qBXXXKAMYLhnsS2HEjYLzPuRC",
  "key6": "4jPjmbA1rSeRf45TZjdeBAR5BxHmK9APUAsSKTVeYbrdEDUYQwwPU9MYBtsJxd7X2gU3SBR8VGQ4gCx7W7d1wzhi",
  "key7": "2DLQq9685S6HukWWrhqh7dDeH7YLA7rQdjQe8UqsZRUgEfbBjamEt2e3cowYyPeC1fr5FkXv4enbMdniZj8kX9tP",
  "key8": "2RuQipECXvbgA6mo4115ujLtVaph1ui6kKXFwRRnpe5gkHDs4JpU2Fjod9JTLPNB3cFt1STgMkTnQ5Vo8fF2Nt74",
  "key9": "3cvqa4PN2GE5XtA7VijGDnDsAuPWbPNNaDiExEFBZps3TnVTsHBY5usch1Pie6A9GLHJfwwSBJWVJhBYNH1pewQ2",
  "key10": "4cDEUZUUb24HgtC1sPk6tLJyNsX3et8wdovAtaJH3dHdnzBHdBKB24MzZ1e9hf7u9F9WVKXBAZRdjPZ6jaWEMaee",
  "key11": "3WfDt655WDQDFfBbwnuqbdoyo11VKjZXSC73DW49Kwmuo7UNYfT62qxqjSVvifFpen5mpH5FA38zeto6AgCBEWSy",
  "key12": "4UE35M5YzFbWKs6XEESCS1VBjtRqkg9wYGGaYce4Nkbwybqu2NoZdp3kWULgcMLbvv5d9eeVDLCwM7xLQLqwiYTM",
  "key13": "JNkJnKBMAmVjgYEEb79KvSN8a5e4FuDWzykpZPfkvhFYxR2GVeJe4NYQecv7yuDZoYMrBJ4TNr56MMyEPUe8U7H",
  "key14": "66ZwsWog6p3NTNUDQmByfC8qyf1rDDCujKwCVTgiXovVRndUxAgJfgXpSvosFdTqQhWdkRtpKiQREg34PfUy35Gt",
  "key15": "oxdQpbXgALwgvSnieRTxeBoiL4kECUpmDbo7L2UPgYEGAzSYogovDyJbaYt73DAXt8w9pETbGMAYRy8EBdqn2YK",
  "key16": "4vZkk4fJsWYgynyiavrfcd35FHZMYyxqvMzrWjKZyvbtfWC17NL1NKGjA8yFSMjfa2kdHHP76hiSppei4TDxepeF",
  "key17": "5Kd8wPmVeMn572NJ83jvZv2D14SENjrSf36MjPBuiEEkG38Us7DbiqdRHR9U28KoYs2F4Wv9tVTEJDDT8UXBdTY1",
  "key18": "2YuNvjizNTozS9Dz2fBPonztJRJeaZdg4BT4Py4XqV8FPymbcrPAqcdHm37wcS4759jw6UnUAFJgUjKjTiTuqKSj",
  "key19": "4pJMrpzwmSgwMYpnAKSau9XTsupdTwodcmKzdmRNBKGZkBMUEb7S2oxK7zesWnzpXtroDJdsxWWx2t6gDGU1regS",
  "key20": "5fpPPj6BxLnDQ951LT4aSm6bbgr8RNhbXs6qGoS8VutNKsC8AHCog6oryEAbWgRQ46VzCQN4BcgB5iL82bqPc3d",
  "key21": "4ncTFhrsx3bYv9tMb8bAwWADTPrsr9yeaqDocpyB4tnGPPjRuAUe4DSwhUD48StjH3c26sLEJ7EA3RTRDsq8RJqq",
  "key22": "5edaGbdNZVabDZjau94dzKYVFzs4mLeP3i4CvNpRLCtXGRpxd7rAF6HoX5F55hDqMr2q9yvXrwej5Eaoquw8G6Cx",
  "key23": "2wyBFUVDNLxGQZMCnpaZGC9gQTnhVBqxa95gL8486XbEsX52XRTCjKzypwd4DxVoRvxyynMLokn79ifSj6rBMSr",
  "key24": "5371RGUsMMEkuf516JFrBf9ZdmwTPWuvXDUAHVJfDuigbRXTZMSftxnjqPnABq2y3aUzM9msgT72xn8dCrznaQ36",
  "key25": "ebCrKffSw4DiwrB4MSPjarDCVR1z1sCjBC6sfFJAyWti1Zua6ueFMJgaHdg4WqXcRrgmgqjGTRjuWjFbjiBd6zF",
  "key26": "9SzwcC51kS6qs5ECdqXVaraK97bwTb6gsxzqqoqbjNpCBvUavKBEd5aXdzPgEmvGbDvQMpsZ3vWaSm9rbqNwfPm",
  "key27": "rfozeyRj4QRELyWM5WVuVCqLoT6vCk7NwXG3fwLxdHhj3jhrmj8ZuksZF97y6gSgiwNV6kGnui2bptJhC1zJ4sR",
  "key28": "5Z6xmJXTnX1JEgNMX5AsNM4Q2LX1XHdMcUUZfsMvkfyybfkAJfVWNbGDs8HM5VUhjcwngsCFbUaGzKobvjHw1wDM",
  "key29": "3WoFWBfmnY8F8KihD1jusd54dZvepZjJege2t61dPqcN98kueVy8RgTTnnbBjANdEGvjmvyBAS4DHhwwJQP4ZTBH",
  "key30": "trURVwA34qXuVSJHAv2D8UsEhm3PuWHwgD49vZF4cJQKmuVtegYV2U1UMtBLjv88g4S3w9GwNCBwtVrPbV1CRok",
  "key31": "UyuMZHDca38nb73G9VgkNBspceVGZSwUVC4QeiYqwVDLqkn8zwqbsd4E2Eyhv3anf8HmoVGXvBFAWW8Gnma1SmK",
  "key32": "2mmvo6qcLmzHCUgD9uj2n48HswT6mpRn7SAqZpCzAAsfSL2sojJRypsG7F1JijhFtHwqWEEXbmdN4DXSAYJHb3VQ",
  "key33": "5ffMMTk12LeoBnmtKQwDENomCyMTanR7YkXgsRJvvvo6YjCLcqbrgtSDZuX3RHLK6jPihr8ws6kvBwGDYFZpkqBT",
  "key34": "4GZnrXyhZ5HnDd8v8Xu4uoCzAgTFncEVKv1TwBYKf31ZZms3LcwCJXGDAeeoKpiyqYnq88bMf4WZdXJtPLuySU7j",
  "key35": "3hXqWuw2QCtPqhPTSeGWxe9KdYbE3SPewRmPjNjxoYwnzL3xph7tX8ckb3rroGDy73jZ1MZbLPXvQPq5KUK78LcL",
  "key36": "5CUUAAa2AFfjGhiEL7wWhMu182Z7BDDd9Wkcvj4K7iRhb1x15JV2HTHdNvPELpEiQWyrzsGmTPcBUmFu9SWcDjjD",
  "key37": "T715fDej6HXUcT3VDWQNWDVVefVoZaRwwMvr7RVVy68fpDxQCtq2NVEApBAy2wFqqzXzXLwYZepG8H3uUAN3C6x",
  "key38": "5qQKLYp1rFX293DPoMdKv5NjEQtpCnXrgfdwTDtJ8w2qLts8kqLptwZsjkn3JtRCWrkcFV3mW91nD2M4gwUq37Km",
  "key39": "5e9cmzTPFq9jSPdTn42yWoARcNoJHAoByei5n7LopsnsVVKNRDdY9efEAVZxgms3prEa85ajfQ4jio1HwKkd8hoL",
  "key40": "3kYUe89YgqrhTzuVCfm4Lu8sv8EqXkT9afUuAT1YAYs4aznyoRU7YapANa86pDAoGaeVyWryQLpBLwjcXu7FimSS",
  "key41": "2a1T3B4REv5hHyasP48LFNwu6Jk7gsZw6wDGgXeRAnTpuU8nGFrBSjUAjEaCctgGyiGtrALCtAQR9mbccnktknBQ",
  "key42": "3wPviiQChMSQvJgV3aAYUu6jaceiwnm9SiYYctus6271tteNhwDJNoFcjyrjjVXS4FKhifcATzVgPTxZZwoGy7fs",
  "key43": "2KAZg81Jc5LBbJ8AYwZmMSDqWFjykkUkB1szS2qeZEFUiDrp9Zeuu3KLQ9h8JYwaJDMoFQCHsuLoGT5iZtYPzwXv",
  "key44": "5y1CCTfRbGG8arcpQXwNRLtqEyMa2XhqmBzCMuKpXERzJT8Dv1ydbSEuncNP1qf3iwb5adCoAN1SNrH17WnKD6fo",
  "key45": "32b8aeZzC4q6NQPoDrovyHU579pNwCPzwTj5ogXWRUZoTutdC5eoJtz3BqtmskaJcU5Cm3E9sVSRnSLmKc4RdxkS",
  "key46": "63QHpBzxfdADo7pJ2sc7opt8JvJFospzDWDc1F5dK69SZ7TBA6mAs96ZkcY1oMf6tfGKerwqYzxJDGqdAeeGCbXY"
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
