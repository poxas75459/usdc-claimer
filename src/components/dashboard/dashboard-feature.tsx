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
    "5RY7YrbRbGACmCqr38BsW9WruroiDur5iKPViTgxJDp3jng7MyfkFAgFYn1SF9JqzDRRhbtUPjRQs8V2jWFDDz7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQY9ereRXmmg4NcUjBVoCTQvWi92pvEc1ko6xbGszDXTRMiNkgkzUYwCLpt2gxqAz8qY9ZgC9FghsCFry3hangg",
  "key1": "47W9r3tDcGVYGyJyHr9aLxPa3BMhAPgC9F1fgUugDZSAeUQfnn2Q8zc2dQyZjYNiZmqQpixW4BeW99hkpBikeaRi",
  "key2": "84dwbSDzFgAdScG5k2Vti7hz9sJxW4tnVoqEDsFTumvr8CGm4txiQh8WKUfbhffX9jCHgo2GyuSzUyVKsx3EDci",
  "key3": "mbBWZY7AVk3mmQQrzh4KZp7fWqDF9Ckv78ttEKgvL1oh5EqQhSWZNKkNRYUxec1yGFicKSYGfcc4ofkaXMHtuv6",
  "key4": "5cuNjshDhitbqSthVALhiK2xHxurXBHSDxDLXipqmWc5maZC1txeHECkSY8CX5JMwGrynbH29zbYUCnFP7DAcfNe",
  "key5": "3dcYR2EMRN76iPjoRprDrAYoEx1Xwef8krUtyA1E7LHB7FW3E9U2FaP4CW1TUTiQa8N3B3yrDuGLgdrZwKWJWufU",
  "key6": "4ituPKeS7WTrsZ2J6UDTcRjGo18XJryhxtBWDpFZvYtVELxypuBGTBJ3NX34AaiiKdLxtrxPSWLhogArThVfwftW",
  "key7": "23sjDgZ6X5pFNU2et1SD64amf7kZ9rMhkPvxRB4uCYxeEoDTgwCUrPgqcTn1E9FaSGMQz5kQqKUsdwcv4tfGmKxs",
  "key8": "5hXQMjUjNuHHSPUbYUtZU2g2A9n14gH4QLqHQYtYCo9C4PSXYVq3hpaBNJZhnY3JAJkgvbJBCmoDq8kGFqWz88bG",
  "key9": "4wiykuSoRtdt4v6zVtHQiaBJ87fLsuCkC6NnktoLyvrpEFXiAfUEAfbjVQHvpG7hzr1wVPknuYwPXfryFQd3mkCu",
  "key10": "LsfRQEp4jcWrryKGzWnq7Baz9aLhnhrjchwgkWVs3qjHcJnTcAByj3KBV4Jq65c434Qdr7JLk9H31qtGDqmJXfx",
  "key11": "5yVdhrdihzPUKsF1o7ju6psTMKomYv2yQ2TPvWxh8XVfhwsHU4b1tfU64uhaeY7uBKWthiWvgUW7Et4PVuBdQgKU",
  "key12": "5G6YJj5mbZ7bbb7pNp3AVK5DQcHmarv6ApHPCu3v8o8NVu927zca92d4sdbNUYpFbvb464v3yjqKSLrfc7pkM5gm",
  "key13": "5y2u9kat2qxaPhy9FvLdLgdgZQRgGmDjc2NDUUirJBnsLtEqsdhKkB2CvtPZr7n5dwzMSektjbunPkwgPyrQTXLD",
  "key14": "EGai85fP1NTjnZ1u66UmeiedPzX45bPhDsHAVTVQZw3qE9uDHYF9rqAScLxeFRcc7HzdvMgtLTdXKnuTZsqcwMR",
  "key15": "mrezgE6hsmYSZn4FRtamTok3hWzX4qvcMQpXE1NqaGWS4AgtSygs5kbzmGDsGUMRHqq86PBXaMs9LyyUF1EH5KT",
  "key16": "5pRvscoNUWe1kW2GkX3qpnMA7NHvHd1NVLLavR7qseaFg91pwpzZa99EJCAg6j6fkLnsf5qjgR34hz881n1U3aXZ",
  "key17": "bPPCd3SQTrrR5NmY2J7xGxq9e2GUZU6GWxwuMarjfNwgaymT59bNVVPxKtgUuWEYs3FxXNv892FFxtxXx3b7Hn1",
  "key18": "5W9Tt1WBnq8gaCgBbfTT7HchV3S7xyQpb4CDXpQsDiXxrAHF63BVjYrDSy3B94M6zmHBN9m23R2KdjuzfEtp19du",
  "key19": "2RB5sSLBgbqtcHK34ofKUrfS4EiUYrpv3nRiHok5N7CaQcRg2Yb8SE3mp7wqfhV8PpTbBpwyP24THbxte5cuBYyX",
  "key20": "23hMYqqCdrZHxrSP7rZLVXUvAHQRqxzoyMk9cu7mofV77kaYpZVcSA3LMCePNnUya5iCZjyNaTk6q7xJxWJD327f",
  "key21": "5rTqjos5rKZDNGYe5avtgvpuHgHtSFLskLbn3mYjChbdScqdeqXFZhXk5vHuSQmvP9RkP4R921Eh2SkrEuGKJoBG",
  "key22": "5th9yTjF2kHFGXk3HNkoUYz93Nrnb2pB3cxZ2mKhoqmJcUem7Kkh6rgxuUrhJYrFr2CvLNvt6rnTUVjaQcMG8DMx",
  "key23": "QG2PeqaozBCKdrbwhFxPcNqzNihVPzKxkroJwJPQsiF6CWKP2H1hDWKpYDn1n4SCgFiNGVRxM3mqoWzKy8cP5J5",
  "key24": "518nDFfzuHu7fxrXUs8bVkp5DPa3dxi4Ykckk5iXmS4deVEtGe1vxpvfmsb9PLvsk36oWWY6y2JmU99eJYVcWcCh",
  "key25": "mRzYgoFysux2brsP3UKgt2E93prUZZ3nzBJF58eZenozMVJfstCsR8zpK4jBeiUBLnm5UQ7rFb6tdsvkoGhxPri",
  "key26": "26ywjELFV8hJzr866n37WqqaXfMUHSF8Hm3P8zWZcWRsUv2iQtzDpsjCK1qrQWxk9MTfByhhVKESrW4ZkCcKX93g"
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
