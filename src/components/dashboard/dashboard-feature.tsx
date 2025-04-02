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
    "5vdmaQ8FbRzCNwJBVMr9p29U8AmGcZkiZcwT2V3fRyNhqJ77isq9QhcvJEwUuHu4oymMc9fvgCz8RpP99PCn4J1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yTrm9gGZ71DpnphufX38Gt5XJXnEY21S8sogmmJxkHDJ5DrCJDQ3YrFDeMp7mkDC5JfCnpj3WtYkvF9TuT6NAsc",
  "key1": "49HBFKYPuCSW6mkELR8SGiYLxxGCDPqB3W8vBax6yDXgzoR2d2yMedrLHwvc4zUKMiPYbS4w4cm4STX3f6m3MqRH",
  "key2": "2H5wfryqQtnGGjK4t2tbqFrWK8bLx8WQfP3U5fNdf4TnAYLsgV2b9fLYsq9QB3Fx21SMdCeXafvwmAQK5R5Pcv5Q",
  "key3": "21XFtpz37yt9vpMLa5z1M4J9wj54VnRNkxroC6Nb9SpP1G5TKM7NHsvRNyUb6xaoPzkXbfJ8XwmnZVCAXJnQD4Ge",
  "key4": "4fYMptY5cJ1MKf6Yctvf1NzNzQvPnz2Rsfm99XTajiZNozrLUrpuhxm3X1ntyshorDsEHX23BjXmNaRUV7Ti8B9H",
  "key5": "4wHgWTRkd7fPRUeVhd7NJwz48hCK1JqTWfVsa8E4SXUXpabsx2KeKdvDYXkUtNhXsmC9urCuvX8EKGsh3QhaaGqN",
  "key6": "3KgSk5smtf3apXkCckGnBntZHYtqphSgdNBJj2hFRPwXwo5QRHarpdH4HpM7sggZwTwKCPDyCbdgHNiR4rjU17xN",
  "key7": "3UC3CKAPor6YZMpSaHqsTH2GRdvc3bRdk5GUo84VZQDDuoovB3iSvz1bgaLt6TrtBcCButhgGSUpNK3h6jJBvYoM",
  "key8": "vwX5SAqoqGYwbpCmwkoxSSidZVsESViFH3SHXKYxkwFBhXbiYA2NEzjTbDaqBwfHucjk8ZdQiT2Bm1UvnDboYBK",
  "key9": "eZdRNium5uMJSpeG9CUb3TM6NBdiJrJFrtLKvLX1cGqqvYrE4yRDN7X11CLuV4trWv76Df9SZs6qDnqrVob6AxC",
  "key10": "wDPdaiYVHjo26nqt1vVB3bwY8JzxYUJ2pa5G5DLV67v3gx1r14NeJR7uso4HznLL7fUGMci7HBjBpcDdZWCxy7C",
  "key11": "tm5jrSKTwJTNuHCJ8EvvwDbSRWEsFi21idanrbNZDZ3mfoyhfoxyvkV8J6vTJ9i1QU1fQeXPtMTDH1W45hSe4Rm",
  "key12": "5DLt91DFsNsQBJwWfFtFDxZ7w2AJTBjQeghnSHm192ghvEzyB1qqcm9YrM3w83RNgwGzKtnQHq46wRmU2o33zV4y",
  "key13": "3nWs519oaroHYHVokfVMx13JxRjYfPEQ8fVjaho43h9Vo58WtG6aAFZkaM2FJjHZpcjTUFRjjyWwDNzoqaREGozW",
  "key14": "3e2bg8qidAqe1EFs6d5htpE2qydzPeCkKktfbNtdTPBrr9f7CSSJ2fGRQurDJqS3c8tLjgu6wSSa6Hbb4PjawoxD",
  "key15": "3GgqTzUFsJWHWTNFKaJnCpncLYC1Nfs2PLtET7cJSyhfB1ftqXrdMGCsd7Y1MxanW3y3hT7cfKs5t1WmfXeo1HBm",
  "key16": "BhTQtb48k57QrN2oLviQBKQenraMDYcd9CQo8XPigmrJGXJQLgsEZMbdPvS3AmCJH5rrDq32aA3634cRMeEmKxK",
  "key17": "3Gmh9d6TNfE9kQrhm2qMmeEenAWiEZKM8VbG7sP27eoRWFwUw8pGti1VErecUV8R6iKJJwi2muny1MKiJsFYY3NH",
  "key18": "4dt7PQv9wXLKnnkiNdubB4wvrM8QazXJNoB8mF66PB93H8mZm3BEWAbXLaKUhgAzXzt2NcV5CfL1SKt9DpNoGXHf",
  "key19": "57SUcUrx4XmQzeccYhc82isMkr7yqwXEDoL9xjXsJredNwvEmNoZ6e78M8vxtY2MENcMvBzbRvvwqMmvBc8ZS4mC",
  "key20": "25993LK5Am8AwWLHLAH7NWDUWwB3267NNu97rSzYtH4SYXthWcgTuwqbcxhPQBDQ67MkdJVbmGtTYxVMK5ewbdjt",
  "key21": "29vVcoYuZnQGE7rDbpoZz6m8ytbXu5uxTE9V7jHQnxUNDf7n3xMBsPxWM2HemQ5UQCts9b5RdFBnW7JHd9e2ywoU",
  "key22": "5JFndBmCDuKfecMhbucXPoGYceSwa6GrGozNYWUVWmjuH1jhLGxRY9GGKqDM7Ppc95Twgtdx7hjUu2WSckrs1qr6",
  "key23": "8TyAHuQJVyNYCP8RqSKuHpApqo9goHj6imSE5Y3yycVn9ravizAKT7F3ACuUoX8FswTkas71Xwem8wCUjhoibWA",
  "key24": "SKQZjPVKnKZuZcDBw9HXE7sRA36eARGVMzTRj5iNyBtjB2zERJaTj2Fez7q6RGTqt6SWUPqyJPCfV1GbL8ZNXwM",
  "key25": "FRzYBXb5XQm3ftGQ5T6qiqso26YPaYapTzLET2u2nS8DdBb3mz4icQn2Y9zgZf5Tg16TUVhsPy1XFxQFLGsp33B",
  "key26": "36qqjtkk4MNRvGdcHkPL8N21MJ4nhFteDHxsPbNL6p2BWqmFq6hxY9DrA76jKXDRo9NPd6WxhbQTVfFD7EXQsSx5",
  "key27": "3mDJrcaKQjdsFcrPUTa7eYfCudzan4w7fxYUNhw6bG3MsqBcDB6mzZyGSyqujNKMmJo34R4RW6uzVqXWZHeDMRYM",
  "key28": "5haBZb4sXg4bA3LUQF2kaWyj424Kx4HxU6RdCpXjBEtf3aKwb7Dkq1movxg6por4Asepr6S9GASL8CuhaGYPdJq4",
  "key29": "54fXAh6a3LDEEVPUowoMaYbAk792rPnGRmCDC3LqLTHXtTYMN6Mt93T2EEhMV36hyi2gLesuY66PWg3NRwSBvsVU",
  "key30": "53C6JmkPsQQ9mYyQ3LZ1dYQXwGfZhEZzHEMhPdCrRTW5phTgAsdU5caQMuvBVSRKdb2WEaXaorUEDUHiVbk2MTjF",
  "key31": "m8bxZf9VQHn7YtXvZsX8LFi4dNbTVPBWcthMqLpmeJq2WwHJBKyUwnJWkpq5E2wYD2BLKtgGtq7hSVMzo7cKJir",
  "key32": "4nBaXkHw6gePs6aXRXm3EHbZaqeWEgGg4rcH6LdAJmD15au9Dxk35hLG1Fs6FBtjZRfrqNytbdrWRFqhgoisabwC",
  "key33": "mJaMbi3epcL4XFW7173iab3eFp6hD31f4gDnGYj3CDpN8xcmXYA6BQTsdZkdFXdVhLg4vGFP6GZcpFGhxdZhkhm",
  "key34": "28R6jqjWy3d7We5quyS3KdoBGm1GxwM78jxZbyacNZGSvFK3GQH4D75xCt23U9wE2NuXafZ9GPm3unn34Jyy1Y7a",
  "key35": "2dWBCfCt3Sbbmo837ASfcL1feyzaxxj19Ru6bBSYjVVJrApjoVNUtfWfRDAMsvdgPvDyF1Rf9oRVsnTDPW4he4XL",
  "key36": "3Qk9tXxGXDeWnmTzQB1hkf8B1uPkdzEDRNhLHxXCtbCh95iwkx82BkdvMzMmT5Bryg64oA4cDJU5jZ7gjCmgiWWN"
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
