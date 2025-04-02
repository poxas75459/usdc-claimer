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
    "xQDwen9aJpD3yvrGR8ryHomfAqnBZHaHkKjnEZ1pJpBUn1om7Rtv4cu6ibNwCFd8E3pd1ztFLZ3NUhcWWnsmL1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46G9dBc4pkFqasJXyHNuWDmCgkF9BXtMP93kvJhsto58THfHDDFqyJ7AsZtTaNJqn68Cpw9TBkMhdAwGPMbge6ZS",
  "key1": "ps6CqnoCMqrhAkeJfBcgVCX4DZs1AM6BjQXwkyEhutAewaPbLdJcXJz6V7fBm59yreDy8uYdaDiX4k2arS2muVG",
  "key2": "t2ve9zkxTNoNRD7Vu9UxRgMZnVDsHEMnruJtHPKn4XbwyzMw92RQ32GEEBrp64b7zRyMnQNdpRArE8XPdgM8bMr",
  "key3": "4KxvrkAEsABAvSSsUinMUSseg4TeJanz2bdZzm14m6ghterjcA1d4grY3qy7UGfMqJ1KUrJbB5oVFtc2X3YeVaq3",
  "key4": "3STsDjnZSRZzfuYDbYXsEFsmBXZV4r8wSjidVkk9EKAT6WaY7XLXmkSsDVAh3uqYMfjTjTKzLSLz7DQHc57dtFxL",
  "key5": "24ZGJtJDS3nt4X34WU2jfcyR6yJ3FnMqxjTdUtav6k3k6PKCvxzJRPPhCb9QSQTWttTu6QLrhtBx6K1Pr6hPf55t",
  "key6": "zjQRQrium1bELSYad7FajfmaQyqiwAXUMEi7QJyvCmF3acRaSTSYHJDhsPzYeiCSwAxAknpxBntNjvGVBT5koPA",
  "key7": "4EXRLwgSJjTvtNGt4JXc8txNXPw1dxcyBDaZ8T49HCFVj2netW1KYRsLiPosKckWRPX9kSqscKjrngN898iY8NDN",
  "key8": "3csHLEuYkyFXXkNyAbRw6tLHNKRpzawKdfeVJQpFzEjBQrRFTc1QgoS94tXCHNFAzAHDvArgnJxbS5i8hYnRy1xE",
  "key9": "2aAcP8vCEvQVpvPNhQs2HeonN1gcGXzCU5onzu8CHD67ZN8uwV24L5er6vBTKwXemuQJ4cymnBCiJpXS768zXGh6",
  "key10": "jkom34c7ts4CZYZD2U7KLG3whNrTLnz5qaQxrWiD8SLA8MDYeTnJh3RG4PSM9pCb24SMagfp56E3zjvPVaGC4ty",
  "key11": "2W7PCJEcBit7XTe368zZMxtTbSVHog4phATYno7biGtakJ4fBbDzvUkrjBK2PEYCYMAbiWksQ4y6tqwdCZgX6f9i",
  "key12": "3AzrjopbSZk9egyCjVn4bZckToSrjH6vffNor94UGxD94Nbgxu2mhKhKBnzHMpyA8HTVA3MRqcMLjSDkVG4k38FJ",
  "key13": "51n1LgWMb5uSiLCpJc9rJaza7yNkJZT25n6VbuQdKdxR8yV8minAvnoekCdup1LEdUQt8ZwvVMhSeddAJMLqn6QS",
  "key14": "4SXUiLunoNihSR8Kjd9Euth4zwRaMdVJV4vYUR9wocRRBA1PFsR1zckZ4Ddv5NN94i7mWstYvTLMq7iEDuMvPQSB",
  "key15": "RZZ6czRjiMPx8V27oxGmqmhnFbnaob9pn5cQ4HP2LbeRJyDRCd8jSkJ99BAr5XrajpfVqHaHr5Hdf1y2bXVUNXr",
  "key16": "58CDbLj193HX8UFGCRiftDT8bswvx2u17xUtbKu27UDSSBDGdUeFuqLZ2NjGRz27fhypvnoSsKrypUy837HXMV2D",
  "key17": "4m8QEA3gufMJeKJLMEK8GcqpppgQSephgAzNSxRT5zgaEH6ZvEqmRwjJXxanTyJ21nTU68ysA5yDLWr4Q2RaFmLj",
  "key18": "5oTsqLgyvjFZ2SAg3zn7FEVv9K9qz5RY8Trg5W3PrLLHS9iAFMbQhJ97bePAyFieXPreyEXBvRvLfAvsfE5H3cRT",
  "key19": "2AR2wdEUhTi9JYASqKZ5PkffqjqDhrQzDWrqnJq3n3bKJR23xaqgQ99dPXeMjrH238h1zbwTxq8wy2MQFaBrDDYj",
  "key20": "2BEx1RNAPBrBtjYbNujQTAbEoWfDfvttvzA3QmcmR4yZckjPyTgCSzpfV9g6hjMdnftUGDQHQLhjoP6Cmvdwtmfh",
  "key21": "32z9pA6fiEgTqDZ5D9DB3QYiYQR6kzbdwiAMdDsaP9cBqhphEy5NGWbHpHPM1b8PnCvtRbB4qqTCQaoAtg9fvMcM",
  "key22": "55otzZuDg8v2msjnXMNpzFymMKUDhkW228dN9YBRu4XKTfNc7G71eVbq31H4Hm8BRn8Dg8EhU3qCud8EVMKcGEAc",
  "key23": "2nhYLKhYYHRJBwrCMZPPGa3MjqptrJGR7ZRxdkcoaCGJokJDcGgKoe8SU8NbKMtY5ecNqJLeZVSVjToPMRKZQEVm",
  "key24": "3Fhr2duXCiLffFnR2CSz9GwLLj1aWURiCdtoFb4j79SbA7A9FfV2D9Q77zDWLRDw6tdAs1SP6NrfXEbw1SWcUvhh",
  "key25": "3XuThE8JLe2H4fgJaaJXi332rqpieRtXpyGcgewVTV2QSrgDRsz3JDRyw5WkraQGB31Lppk4SxJxYZaGn2Swc9bx",
  "key26": "5MiEXm3XsjfnobUMotUtFHAmb1qZ16YC5NABTtVpUWESPbXB3N8Gb9WEY8g73ccaHxYMxg3L41E4kzJHbbjpccqM",
  "key27": "2sdurupL83FDZu3WzFkHV3rmjuYfNmo3RForbU3QCd5Ej5BQrwuWuMBBxZjzgTVKBY6Jzmkhjgw6XYyR1FLraESo",
  "key28": "4NrN1ir1M8gjda9iSYT5NNhBgwpr3fnUkvRZYNpBqL9d2ZPvZh4jBnzbCXZvpJEMhUwrW82QCrzon3W7wzJmQyWS",
  "key29": "2FQsgSuAGx2RCuXerxaEi5q2dF5kxrCpsUMXqhbzFuLqgKQ5NnwWwQP9S6eBth4qhTfe2R74XU6AgqPNiVFSWtDE",
  "key30": "3aC738Sv6DYMvB1FZQxidRZ4QnvYF9UDJkAGJFPPMxnzF9qmynCKWw894HHqXSQNUZxEeZhXfoc4j5BUz8WC3sSr",
  "key31": "5eymHj9kpGAB3ro6wLJ8XFi2kMzfWoKWSYxkfwQv5pWB7q8ZTq1TZadJYz1ocvu3nL7AoQRCw75Y4k6YjZbqSJGg",
  "key32": "2obd4oo7LF7hCYEwEm6DczPYyo8NkLuDQNXynK1nCiifzvHmNnCa5cG1P462toSRsu3zSdR8X5RjhmrPzyHqtDfM"
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
