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
    "eVRrHBySYdC7VDbrpHhWtBtLMSkhmZAX8CBbXQrJSNZxtsfePYfWoFkMUe271Q1w9MtMBNsd44DQkrsW4tRsjES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XVY5kD2pXsp4CeEkUa4tehWvjwPcktv7vJYhRQpqQpACGC9SjrqpsRp8Df35wH6zaUPxQKfNtxKDYEp4d5Xz47i",
  "key1": "TgQ8NEbKiYxqPw7CvoWahb5QAZ3zXK7yniTTKrnAF57qmL4vtqzye9PUjNDW86ZFgY49kEQ1AoreEft6HU2x2u3",
  "key2": "58BG4JAD3PwnQE6VzjpuMnFSerTJj3cF9eMfsqvDQ5Y1fkdH6uGSm3n81c6rPubbksy3PvfFAnZJP7pdsTANJYwj",
  "key3": "3MpV84QFS65LrsWmPq2s4smFigitTj89bGqSdWwh7RpBafmBXFgjUYJAsdF9Pk5e3Z8R7jxwtuRBnB8jVFZpD1WZ",
  "key4": "G9ArbMyN7tp1JccNCEJdSYDGDp2Tv7mWwZQkMVPpgkdVeEc4iCS1Tk3qzApqKXXrqUNrSXKoqosaRugcsL9mF9X",
  "key5": "2gLLUvtvpX6jsGXqMfMj4QD6BvV1TwgjYxGPBkArdsZJCLMwmvzkjWDmuQSpR7idKn3RiMjY9xNCmhHzAD7NAefb",
  "key6": "1fsoH15UEiRjFMmGuazzsxcD7vsmBgYrJmiaKihw32tJAbB7hw5icDVkJxnECK8gMRdsX3HXeU95YCdAkkyEzn2",
  "key7": "5s8NqEgPcaTbVzvjFk3JnsLRVVZ7AeJvR9kPp6Ad15cGksYv3Y6nnLXXfnDiaJg8nGRYCxEXu8pSEFuNzoX1MHcy",
  "key8": "K3aY1quNH1k3w3VaRgtQzuoCJVxa8SeFMJKwc5GjtbQjRvLAgFNAvq7e9gn73eb7zTGAb9cgn7bG6GT2LDq8ZeV",
  "key9": "3PzxjyUkEbFdqnQizLbeJqgwnY7K31scsEcj2Ya7eTwLQhHzQG3haFsMyK491dyTn1r6AgfsM2cUoHsuG1nArKpw",
  "key10": "5f5LWav44aBcLDvh4nexHh3PSuH6QHkjaECpaWR5zUsNaW7TWcP9tSYe65m4oxfofnPbunoXm5qqsNb4qdz3uctZ",
  "key11": "2at61DUYRhfJtGVvBvahE5dLz5JzBRHauz6hGne3ytbicGQ4ScQu8ib2rCg5heUdMWpv6bk89YNvJSbf3mq5PGie",
  "key12": "2Y3fpCoSuw6rNdSgZSSX5PPRNvCw5ewn7sL9VADfNmNxSo9esL14u2WBbjx3w4QjT9B2qDpwe7wz8BRktzyyZgKC",
  "key13": "34K33V8ygLmwNLYgiaswEt5yVdYfTgF2ESu3rGRv6v1r5F7LDPXjRXYA1DWZEC4GxuNNCjqSiKEjtoLwHHrn2Q4V",
  "key14": "3q9cqDH85Bgh2huj3dP3qWb1ySXSvKFxfULPc6Fz5BSpamX3xWfmhU2PiWoj14RgVRigsdGSjtqKLmYcH4DeY76c",
  "key15": "4sRuxfDME1bfx8euQbU2mV2Sq7iEj6m1xJrZpnsd2jb2knZuJ4VyYRcq8KNzM469v9gXPRJMASrhwFWQEGhs6J24",
  "key16": "3jCUZ48iBAgLBH6hozSXsX3TLQV8z1rmAMQQgFWTEyFkrnH8HUxv8J7bwWpcCAQKVGcY5Li9HBiTzz2qdyZ7MvhX",
  "key17": "4X4ibJVrhqzz351yXbUKN5oaZZ3p7S1bE9zqYacAzoXnNVFmNbPh8Gb6jrenEZDjQejLqf2q8RbJVRt571XtutiP",
  "key18": "HJDgVGUxdNc4iL1coiYYDfbxrUF1tEpuNYKstS6J2pSBiYPVo7QLozXVD2s5podjYwiLNwkJKwivCjXGF34uMFT",
  "key19": "yKHF5GDxWuUdhG5VwXe81kYUW25J2o9DkHcNQXLLBo3TseqsrnbQW6nAsBDWyrdg3xfPdXmE1yxHKSFb5VEhWaS",
  "key20": "3tVQsq9FjpFaJurvaoGoiBGPBwo3ZT2oTw76F4HDkpJzFzKJu94HiL8un2nfVKgvEskUQSRuLqUCsdThWaLtfAo6",
  "key21": "4vpFEJXpGBhfCREEVmm9eQWWnUPKKy51uJhgx1X5q2sgUTWJoPVA1bPw1i9PkF4gnqff7rsWiKtU2sq5VyhirjSf",
  "key22": "3Q6rL4y2E6doWFFPqFkSRVcSxDFNWXTLEKzdGgaet7hnD1NLxYhiFYvbyWUTwrFyXLEdUwDoP1i84yXDSjNc6Ra8",
  "key23": "3jUB6nmkWtywJcR8KLnAPYSm1NAQ17nYdi2zTDbyh18nQa1TCk4ZLkcoXyWPQtXPrCjB1hjGpjWCaC5vdrvwRkUZ",
  "key24": "4uhUxZckzkPVDdh3YLuz7oNt3AmVNvjBzbZ69QpoHCxWDhXYhqSRgYGM1bcxjEdnxjCcoA8m8SuoEEbYWGgQEVrS",
  "key25": "3d4XVM3Hccd9mEzK8WNhEV5Dpnefzz15phTb1Wp5cFoiGxWqjBTpgsHXqDaeoKjJN1qXsDdE3uresWQmPjU9EneH",
  "key26": "3MtRp9Ked7perWwp7aEXd7A1XTtHT6Q7kgKYMxMuiFvioEjDio4DL5HrvQEtsh2f1MrcihAZJpopeqNi7snUfyF6"
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
