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
    "4UcgFoSvRio3v6DpGeyG64sSJckMwQr45E7NQgJxfFhFUYbKQfkiU4L3nJMB6Ez7cfJbgS4KpAGgzy4JrQ8a7R87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MPyS2wrhd2qr3aZt42JsizQkN8w1ASLH6caBBYhtjvEeychLtCwsFMWUkZVqgHgDwNPey9LmcudCLyzRF7UsVeu",
  "key1": "5U3kovX4rHgAuPXK5PTnC7yM8G544EqotsAWqrcwahSJumac73aKJKG26t6w2qs2FpbR3iGpcuoQ3iWN2mXb5q4i",
  "key2": "21MZN6xuqD5ks4xu5MkCEwEmM2sfohBGZQEay6Vk13Vzig3Grcky71Q7GnYoELkB7hyzVDUJqsDgKEwhRSBfa8hw",
  "key3": "5Xu69vGvkEezGEK2m15p3cF2SQpVuaKiumTu5xXNc8nDCtm4qb8sTAQjxpHF1ZqfX8JF5vrxaHYUFg3NG3MbJhyo",
  "key4": "3uW4dPEh7GaXgu5t65NTXtKEA1W1BTxW739F4dHYgeknEpndJuhuJqCsNpCAHP12B6qgTfCrAyCJYgKU2brBKmM3",
  "key5": "uxSH7y3T8uyhfzjWNL5PsDe7aVPNVWxG7JXgqPejC1PGbhzoUAVtVhzDPnB17b4fGEVct2whZ8ddHJTKmBbXoCM",
  "key6": "V8rJcW3oumpstAcvC8pf7qqWaXzaDhwAVBwKYACKvrNxpNm8jryVfma1k9BdyBz33J1MGUccD2iC6vQTm1fhbrR",
  "key7": "5p5ikqCoFomesB6u2ucvYa1r2eyseunFbBm9m4gGfwPmPVZwbtK2eGn6xqkqAUwLojFkNtqDjYdk5cAF6K31NXWj",
  "key8": "64FfitUyi6o9TPxyvgZ1VMnF8hfLaYdgR2sy6NM1bqJ1oDawrVQkzAEeedu2aFYjfwp2AZDcVvwnSY3qfVXS7Cmm",
  "key9": "4rn2NMJ3f9b3vonVuNxsGR3xHLMdAkTkRiqJqsVQTfHWQKaxmi57mAowksMu71JcW1Ek367zQeMkgAphcPYvYyrS",
  "key10": "4HjP27BJDxaEkrGETBk3WoFiaQ21tXK5pwVZBF1eDnfdw4wK5Ry6zG2c4ers1yeKFyucuXwG4zU2uLR25J6y5Cr9",
  "key11": "4K5eE1ko3oK3CMygckc4d62m5JHER5ZuWbaC8Uh2sbRwJ9ZCiufVwSm4pGR1Jv3syC1QtDFnPU8iV9kqqUNpx4Xv",
  "key12": "5cdD3iZv1ShEZwpLoxY3tKXyWybQA5PvSHgYEUEsi8uyrx4XN2bXQsZWd2wty8XEkmDhoPMoXzSW5SfN9t9FLJ2n",
  "key13": "UcreScuZndddGL6PWPKAX1FTqigKQERf2GYvbkg4SD4AHAnX5G3gMs97213cvJQgePFKnsW6YeKHBo4D3km5k3b",
  "key14": "2DJhzmJHcAZx72RbFbymcBuoTytTWLmLYkmHBmcQEGKFrxHd3vFoDrmASWcumMo9S2YH2BCzYr8Jc49QDfEdzarK",
  "key15": "3VsjGGbrXPmPedo2ZqQ8EacTPLX3ozymS9SZjgundKb2GyhdvrA3pyJhgajpZTNv3Eyq2Ag1nYreVq9uUuRryfxN",
  "key16": "67crkUCk6FeQMahE8RDGUSWCbYMKgKmkssSBp7Jfqrf2pyWBc2Lew25WGGVMTLNoKBo992PdEEaLNrm7YqddhBVN",
  "key17": "4GVU7oCkZXftepE3wLyYdHYhnFknheQ3t2Jyww8RGEd71oLzH5Jk2AgJd3aLP4eoZosDjFQftTS19YmMzXfYwV5z",
  "key18": "49u4PbBqiL1YZG8dBYArZTx2fV6ErEnfs6wMxQKyPtrsvKoqhMQnov7S6HRALKSR2fBCEDHA7AcP9KJqi3z8Y1Bv",
  "key19": "3XikeMeHNcKqFKPtFV8hNZxnVsiJhgPP25AqwWzNKYQpD7LQ4ffGdrPZjpEqJgwVXTMG3BVUTYN7jXokK25mXngM",
  "key20": "pN2VjsDryEsTo3XM3PuKFNaaLEXq7eH9afmoL1y2oyYPiQGM6Bs778Qg452zfTkjmhGzBDwQhPA7BpL1uDDsYwS",
  "key21": "3u7yFZ1NDEFvqQ7SB4Ma5iXo2FSqP7MNpqo69gLT7djgRiH6xzki4nQ2fH7hAJo7yu9sH21BSwwy9Q9xkY9pvVZg",
  "key22": "35BJNc5zmkE7c2Xu1YknLcfiNyFsJBJsbev23cBiyp187BPos4qq5SLJZRKxV2ySEvhevZiY6TYtbiZsTSxRpp7K",
  "key23": "srCaor2HJBgH6VRVW1zbYuarHPYB8fUEsccpbCpYoUMbiyrWYaboYgVETKNAZS8XS7UjLjjMZiBdfeMJRwJ2Jys",
  "key24": "QyvH4rXYTncfrTBuFDp935XuJMV6EUtFeoSFgrdxXdcCgnyKSW7Yjf7MdKDtSrN5P1Tws8ZXSHMMdEgZjWcbUC1",
  "key25": "39977kc3x9yYJt8ELxDF89mP2Rz5qF7UFiDhf4Rnqobwf5Fp8oBgduvtLAYt53fAQZrd8q4fHTLQDCjuSViFHuUv",
  "key26": "56XhQjCkq9Xs8RxLmWC7m6Sokk7a9zGv1MrNMMfjGECgh9hLYuR5u5Z64DUDpxR9hxvRskqgGq5mWkepUwgHefRi",
  "key27": "47rf6BzMAKVUWUKYnWpqy4dwc3k6f3Zk1YHbxniYCUJEMhLbcseFJvfzdwbY84E3sb8mZc9j5ZYDShqqnKFHgYdr",
  "key28": "45ck5thGi5r2JFsBEXPtMkuRmzWaDjtpUKQGjmCwyoS8rac6arRdbGj9PisLYodqvdjJbL7iwoUNxF31n5mGShDx",
  "key29": "4Q13XzrwArwosN8iRQKRLxXB7H6XNSr92WSCQiECW5egZ7jwGfwps1NjfAWnwLz5q2NvyQcd8tDCmiAVyQSYnQKX",
  "key30": "5tfAw8JGMbvvdKeNk4iUSzwGbKN54d31HWrGBHiLCb2rxem6FYRJrEorgjfeKifqFjDh6QJWkdpZsxY6TcadUYB6",
  "key31": "4qXhMjkFXmaLftztZBHWPHAUQwkNfMArVpP51UzMvN4ovDuEigKnT5R8YWD7FHkFuvrAqnyfdU9tJggwAsK1jC7w",
  "key32": "2E4q96hTFb2wrwtF17p4fpq6PhNNug8F8NCJzFDFXgtw87Q1KfGNKgnvLG6kaWzZ7hBWfYAMmbnqgmoGQCbkKHks",
  "key33": "j3mVcXNFgQSjkSDGgEczn3ofh6Kaa9AZXytPoyAowCz8eskeGj6tyhMvRomJVhuDZXboVHaZuBH5BuFrhKmq9VA",
  "key34": "KXZWnqgtH2RJdYufWjNvuvt76aJWuvLQTB2UQgmuBRw6gbEYAoB4MhqPfL7VmaQUHJzUos2fYcWf4E1JsaxsVYB"
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
