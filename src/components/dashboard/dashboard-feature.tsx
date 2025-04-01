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
    "4fydxgUTBCUco85K4MzfBTAPNqRHNuAVxsrHcwjr8WSZH36DAB1y8eMxSM7d2ZpXpuMLoF54Rr5nVzCSD97q7KbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wZivM1xzPA3JR4AtENVPqfoeKHtZvapLhKH46A5f6JWyoFyqNefv5UN2WKY6JJu3wZUcVd8VVe6jnVrEa2LmqBu",
  "key1": "2kJnXuWkhLwKTKQs9xFiZHTuLCSXBX3Q1yAz8VvakWhof2M91cQ4xXmrkVZR3C5u3sLfgtXMpYXRckG76U4FE5Uq",
  "key2": "nUWDVtuf8NJZc8DWk69CzaDsZcN5sHwX8wYf8MUxJBz9XTUCyQKBiBwPFBinuxb1vp2TcuRcE5FFEuEJxh6BBE2",
  "key3": "3YytHMBvfnA5tV7CjGHiFtxwHRMooCYmMBG1QY7EwKfBYFAKPffCs1bBMASdegQgtscwVakjD7kLHKqnyLXpeSRj",
  "key4": "4HS6vKqC1CpZnmhxmTRJTc1T6oGGtqZCsUqa1BXEeCsBCZN7iEfjkVFebUh7rFjXQuVpa51jKid9t1vAezrvDFuj",
  "key5": "3DMx9MU7SsKbBLMAuWif7qRn5LJcFiSarhcsH8CGXpxkwR3z7Ei6TRCeYSeetKmh9xZihAnZaKMEMoyTP8mLMasB",
  "key6": "5cnHTUx5L1m5sCBCza4BGkpfxNpb7RrExNRzLogMEVoKda3gWbYoaabCjzTBZESg4s58rki4Zs9VUbSCVeDoQZvb",
  "key7": "2dFZmxFucjgnZdVcByxNNJFAbZPu1mSBSqhXsUngHo27AFHFjiMCGi6gBaAnprESukffyNUnTtbtc6nEQhpKgysk",
  "key8": "hsuSR3ZC5zo3BMG9bEdr6ArerX8aW9omCfHtVGAqwdzNa4Nm8ofGbStGKEACioCVRL3KmaL5mKhkQPGVh2cFMc5",
  "key9": "5XkLy3anZ6R2T6YsGSDmMpZiTquSPPQaxVfgbcHLLJhbkE5Qsj4dBqCrVJCkTRmpordiYUU6VwPVK9cRRcpKmtuZ",
  "key10": "4Q7mC58LTrD93YtycELrRD8kNCsgHmDw72PS2RXNF3QigCBJe3cMrR6RU2NiNTjWQ8TRTdLWmyptrTLPCyFWtUD2",
  "key11": "xmX4csLTYPnHZCyZXKLrwKSWsWid4zEhRjDCczcXgndzq5Gencr8bjf5Kba5pY5kzWWto2t3QCC345JTkaNuPP3",
  "key12": "T2xS1kMZkr6B5WCbdwgE6ynnhoMssupGmGSSJkazT7yxfsgfRCy3RRjC6haVQyqdhLYqEP6bB1LKe6FhiwtsVed",
  "key13": "32CbV5gMTvKhwuPc3WRYBCuNSwFeEWV54NFidx3KDjEZHQWmUHtX7yLkgD4tvfZWk1VWJqauVopw8QJxoVAEPTQ1",
  "key14": "2AeRSpbouSfm4F67dGHSzT62Fxf4Y9rm9H4WeqfqTbttH3scCLwvvbTLsC2G4vQExfsSj8h8mSCeBgqjAuGGz9qQ",
  "key15": "2P9aAtL1epo6JkStcNHSMDbCnyyLcK3w8GAGyJZ7ZtHLAF7FSBzrJdi6ETW3KrS1XeSPUnn2zgBWDYS2KeXcX1aB",
  "key16": "44pxVCD8canEvmLTK6kSDWenzs7apuPYywkonk7qMwG8WRGEbJ3mvcUj5hPsSh75e3YQXoBJ3feYGAYLZ1RwGsZ3",
  "key17": "g6jRaqp1SmHB7VyTVMYtAstJ295v3kMxPp2LbapQtP1dnQkBAK9TSqidWUdy94SUPH7XJvHAoN3AiQtNLocFTs6",
  "key18": "5zw7d7u8DgDrCag5gPfRzuZpfMEd7LTnopRPWKhVu3cbMWtC5LZgHgQ1HbS2ZqhWaZJh6VvxfPGE6QRLBvD7rYpu",
  "key19": "5AenTpCitchjf5whZphesha6fgAPxbTgQkLW2EkbS4L3j1QJ5VQFeJr4WhWuCUp7Uhmnb3XswqLwTpENPSJ89hwc",
  "key20": "5zmyDh41RREVEfu9zjZC7qyjjf1WA6ppcRNN4dYMtajoCuz9uPbT4mvQgHTSbzLKM9p1z66DRoJpe5ULF7CgGwPf",
  "key21": "2W3tHhX9NooHQZfEkhSWRUdKz87PtwXXTgDNGgoPrdfJsbhikxasmktiDWMSTHJeoT6BWayEzv721weRMvhNnX5k",
  "key22": "386y5RP9iv6XMtuhEJG6UsPXU9PtKHWWQsWuxRQHHJer7BZUwBvQPkm2zxpukikJbHrEWi5f4WZQVcAFJYAFmrGp",
  "key23": "34sMqhqYxYLPeNbeNVKQCJ4H6QK4jHbgbJcgUa6eHLr24ojnqUid3qannMeZY7UDBQHorVUzBMAvpNZkm8awFiro",
  "key24": "4ywwpgAgkZndyqwLAr6EzDNSVnXj43YTxVX3u6KozBh6JQmSUMJ5udn92cm6vDRKK9dB8noYHfAH1tyYeVXSRNsT",
  "key25": "3MDUPuvfgykeh4bLGZS2shco9AFxnAgxWyTETTDszZzGeEBpjyd4Wr9ic6x8meSTyHyunyp4Lb2aW2ikXEtAz2ER"
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
