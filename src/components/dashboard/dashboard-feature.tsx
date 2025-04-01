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
    "3wV8oziifkVBETPYSqvkDMkfzWAbCKWzdh33TBDmYAm3N5tWFpoiFBXFuBnKYsNc44GyFiJgQ33NAccPfh7HEmQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27BWRVKSZ9HCHWSw2WY4fwUWEKGpiohoW1mMgcXYQ5yBSEobtJHX65F6YHFanqprArar6JyocMdfgZjVZsof24gQ",
  "key1": "2Tcd523BgqvFabyDVa68KCMM1JEdXQ19GYtVuJCCxT7wg322fRTjSeEzhpCE9P81KZioLywfZQHXwfEK7Fk5eqHJ",
  "key2": "3bYX6niwKcPTiDzi3UeNPyZF2VuQ12RD5dcBSYMZ8Qq3YT1ioP86vgLNvbFAaRerbAheNmpGugqWVZBG4A7DAndo",
  "key3": "UVNhz35bx3sqqmyhX8QjH9gKJQHnmGnv7vCNWDa8JEhhiKiZoeHMtHqHpCpCZvXTDWyK9s8rpTb2iwa6ievAjPh",
  "key4": "5LKFvVc72iGPt5WrKWNREt5jXeSXArXdyczJX4qkqCyntD3foUAK81JWcoX7R24mvJZ2LCWhHGNVhu9YjVLzUgN6",
  "key5": "4gYXnSw4YnWNsiPuHHzkJaSXp7a5515QFYxD2dvJRGwfNyE7owat7w75RuUbssVCvMrKg3fRyYuAShL8HNDNCViF",
  "key6": "4GMRKm5VDi9RD5ga28d92NFgGXpsNGoeHynxjcXcfc6LvUfwNw5TduLx5oPRvgYSKvVm88HCuZXQUwTfY1UJHCBS",
  "key7": "4nKRmaZMvAUeLz3ZMgsjv6j8yaMDtpw9S2xHcJ8rnvastWVYovxQ2iXxxWZU9gnVbuknmzwVxEKSqDYSZKMNaFNM",
  "key8": "4cLWjBs4pYUmVsquB3TPhSNo5URqRL2HD1wgm28yNf6erFTL3Vof7CJAyN9jQ9wmtjktccfBUDtpquGyrKk9aAod",
  "key9": "3BUtcYhJ5w2tLoxgL1U6RQfGQ5qua7StBP8PquAEUY4WfGahu9PuRVKR1m3HMwD1Ck16YHYwWdeaWyqQzXWDSYbi",
  "key10": "vqf2CEXaiyD5QaKkfDYSuQX7oNHhxzMGi6qz46BGdqrcVPT7tpT4eV1fogdc3NktogVuNJNfe93kpBw5XgDhD3a",
  "key11": "4DqDBf3ycwC6v3PnvWiTRjcfpH37gErrVnw7fNGLL6cRQUpa7LrjqRewbP7rUMhGXRPNzXc4xpY9Pvh4D3AvaVnD",
  "key12": "38aWXUfAoSXSukhfHeibt2yrVQo78msybbmkCjLB8TdY8oeMAdaLo91UNfUwPEVd9S6dZGpyFn8n8nX5UVUFGogK",
  "key13": "geHR7fp2x516JQFGNeZsikGZXdmKKmLJCvr4KCNW2DnkdYLCFbP5G2VBSQEnhx6TT9VoPcxnTpsUs4dvLPCfpzq",
  "key14": "HwotcwJJVcA5L79cvokFfDn37H4YNHeWsgARUu5UNmmWowGkrEpybAqNJCTdSi1uhMVDhRc64aFtsiJe9QDKi4E",
  "key15": "5DXRLV5eV76PnpDtKkbDgwMPG2Je9kbL28o75z2tath33u9YyC3nNQHbhuBoxR21YfQhyLdAmX8dWo6Q5iMUvF6E",
  "key16": "mjY52vFmS8E4UDbMV4AoWR1Pa2xvb5hcfc8eKwwivE1qt6GzTt6bhGZe2vqocsNi2NKyAcfmBUNDMi9c11hjegB",
  "key17": "3yECj2q1hkRzdLsrUDHrSC3aNEeu3g5J5XMNcZqLkZLdtRfKvXw7VxnBxZMaDgA3spuCPUPDUg9TSNsZta27p7pt",
  "key18": "43PeDaGYYXmrkykvkYrXth6nv2K482HqUjsPRmhDbje69w5CBF8EiLEbU4u2UTFHJw1wzh2c5jkmGWVWMV1HyBrx",
  "key19": "3k9kVDX2Aob1AeTNpL8yDWwnMRDNyJ6zoz3TZguFw2WdZGET4KFFeA5zkrSA2LLxTfWN5hzkJXfsnjXYq1MBFU4F",
  "key20": "3P94iEBoEZyALq5rUqSqs3U4gh9KhSsbpRRN39Z64AEFpTA6G7JpBXfYfbCBDdCHYxWwg9ikA7kbP9ymNMBqaqkp",
  "key21": "2zKv6SZz4h7gCAnPKQPjuKZawuQgVMFBoZn8QRke4mohudgLzNkLKwPRm5t1xnGxWdSqeMG8JyKGX3FuhRLNkXdE",
  "key22": "bU5huZsGxsmsgUNCMps3RkWA6M6otCYw3139vS5gyWhUn7jdX6oGCfdggQLqy2iTR3AiRfuVhRhQNpXz8nUcbYq",
  "key23": "65G2AqpTiiU5oHDgP8dretvtgosBPpkJ5nJoniwwXxVtP1JZF3kqcBrmVWXQWKjp81c3qvfrVpEa6jvyZtZXSxD2",
  "key24": "4NpdVAmDJPMAQv2NxUXEcT5iLTc4XKEagaEgYnhem84dVHbtjDLffYpdVTgTki28XqpDvbwiiK5EtBXwfux2Bgz6",
  "key25": "3iWmfZVuMw1xd2FFk4JdrMWekyQ8KemgEnffF383pX1UdsqhWL94dGzwZwjpRhWXP8LoZbN9Qu4yt8Jr9ngA4TBZ",
  "key26": "5whA9BZUqM8mb6A8yWYWz6dtkGYw6QR7KSYdEqxnmtaoFMnLFPUBGkJZLs1pp8XBNPHGxg1njxq6MtznQSuz5gCc",
  "key27": "QPq2jZvZVaJXErG8YSj38sUpPKoUsTfRreNkVm27SKxJfAQHUoNEAFvTfycs23zJwZ8PPbKz2REUd5Mak5RWnxr",
  "key28": "EroMVuhwZdGUHR65rBMfMJE7yzpijt9w5JYhBfmgZUSn5wPiU8uvAGhJddB6dM4ZthnGyNsoo1M2w88u6pa3ATP",
  "key29": "5rowjkTrLe2GYgA38nAMBAqbWAjDRoio2MzuyKTXzpkoTtDXJPaTwU6ESU5VWowPxRUcqKEbRBp4os9eL8mHdi3o"
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
