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
    "4Ke2yckYaaL6afAj8CAkBXkhnECGr5ZPLxfaHNX8bvxe3z9MMww18QBaAMpGqLoPBSeQgVrX23oYjqNEA3QXDWFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GaLsQdGTJ2GqA8ZkSgYboN5LFzi1vy786dc6WJPt1x71HbgUeUZziKjpq3xxgZa6xQmATkHim7Bfe6Ei8cDskSF",
  "key1": "wg7oev3VMDqur4tvzYvYmUGme3z7oxpDtDSTWnfeNkWkgjfnqBQ5ku6Zg3SwCvTNLfT48T16BEqsJrk4qCnAA6J",
  "key2": "2vPBArmPLx9Cbe3xQwiyoaWaUUTBVHpfVGRvW2Ad8XgikDdKHJVxYaZhE5E7Ya8PqzZM2qCkt27QvqW52LzV4kSQ",
  "key3": "4aY6s29FRbCBjWepQtt51raRgJdQqYSFakXASj26ighy7ffwncmUoLShGjs1QoGaQY7ffb6UbQZyvnUaCXJZUBnk",
  "key4": "32VvVpeGs5EoTe9pvRn5QkdowHhHysLDJs1xAPvHxaHkTGqGJtY8NFARqHU9g35CZinkgJShqKrC7jWJozxmMPh9",
  "key5": "QVqf3MbboXRphvsRiHK3GhvFYzsGQqcdoodKTshy1jRoTvKZXtDcb7G1RWegDwLF4BhxSK4dbRF2bHPxT3WAMjL",
  "key6": "2dsWXJixTLdCK2gJAHTJK84mvRd8SY8QA82sYKJgWM8fkeb1DYBURPecjGf1GKk5qPejbG1a8VmgnPyq3YSp79rH",
  "key7": "J2UEsqZKsNiq1tvZ3XsLpQLpBiM1vCrsebarBggdnbfyUXjbaH6f9S1icAdNDeQeLVcKSksvmsmhDTmR26Gczfz",
  "key8": "5jhig1R2xw21m1WVsE94xeP4zV7rFxrBEdm4K611MtQK7Xrkwe5N8N9F1iAjXfLv8JWuF8PC9QYvoavPaN97qxxp",
  "key9": "3xUoGwC4Qr2gRZZZbcfrU5AzmAYSyooUWs6RNHhdTAKfqEamGEWLbow5sfFReZA4fWjYJ7jEPEdNNJu9CueZdFu9",
  "key10": "3vPEQu9KoWSmVXNYPikzgjeXJVv7u2FaRSNPaJxdAzW1rnoxy8Kjued7b1Meu3D2AdCQewHXdA1WCVpaCGm233aF",
  "key11": "w2E81Ug9wHUUTxjYENRmkN6PbE7yPL7JkjGNf6zJW9DEA49fDiKjg5Ea5v47NsCmeXNUSSXXZBrpb4DFSLrYdRy",
  "key12": "3ARKmiB97HSog6FX5NuQX8vBBreVZCCyRXLULPpgxqAe1yiE7pre8tBbqBZCgW5528XKsCnV3AfGu7946KVEbXcN",
  "key13": "39LMpD9ayjZ2JCTNk7guooeqSJn6T8995FPwuwrmJFp1kWrrknQw46fXNL23hwX5eEqBujuSUgHrpsfJUbpcggnU",
  "key14": "54xht5xykZaSk9CRSfK7x3LDYGc1GwCQFro6tV7Sj58vAhHAWUwWF4Y2C7AfSbP37hpemSDY8EdLKypUcng888re",
  "key15": "4VfkBGb98C3fVxQhS4cpq9VK1vFJNGXFDZkWroqNZ8G59z5cxocPq58rrf4oRw68CFiF4UCjprHoUWj28GxVrbBF",
  "key16": "ZosbdipZBqTWnVudyMf3LvPinvs3GLaDJgAKNn1ZS8qG17PgNgnmxPxGJ8AfwKhAzVmnhxG9Tgh8mRZCuMUoGjP",
  "key17": "3W28jbR5beS58QBQVb2ffiTYeTYEKYBqsRE2vkyaC6mHL75RoGspQnP2QREuCMYGDCiPF1BFpaMxPCwx5qGzUnzu",
  "key18": "5ZSWNroJMqhZ696ZFaNx12i6R5kc6GFJX1M5Y6W5uY92BmSAx815v7XULEN5ZXWTJPs4ELw8VrAspfAFTyVZmm6T",
  "key19": "2ov3aYzT4PVCCGPPp8SwbM27wt2ZUP33KzyBDPHaTCABLo7kPMrs8G3rzV56cwz83CusAwJzwjpxFbNLsgYcKxms",
  "key20": "5mW1stcCC4T8hgqDwhQhzBk2xAQVGo8U1qs4virWzMD92azKysgM5v6dmTiNGCMog9BAs2kgoqREBXPnnBnZWtkH",
  "key21": "TgsBxH1eWXAXpJo2fP6gSQhrMZujWTdG2YLkczNhfQDweCSZScqAVDAhQiE9eBGYkpWMsWRXWLPXCxrxzqRH5h8",
  "key22": "5Jbx1uhdYsoANcsSkGRfxy2wiQWyXPyB9B8468tw4XZCbNmMAoPMTVtAABBsJtu4GeWtt5SXJjVubNqkzYmg7Hzt",
  "key23": "5a1xAG8beDt34svXGR4UeUCUkhbMjJ5CpRj5ptU7Xnytj23RGgXTwHeaGXCWeEMBqPHkjHFg7Sj6JF9PaG7CQVGF",
  "key24": "wNd7cJXyaMWeqDFCCvJvTf8hVpd2MQU5yadW6FHEMvhiEqevNtgwEA3GnQwNAwFUTh7C2CpdyUYdC7rFPvSAYqF",
  "key25": "4DKCLMNJHhva7jiuMy5k4cNxxFSeL51HxM3RrjhM3q7kjMZaFzofczWg7rtyeKgghTfticp5rks2L6CjTKAYbH9C",
  "key26": "4wXdnFDd6q3VNLMH1jLJFjt5XSB997wcrBr6EaLEZvEiYxeR6q3Gg3c7YfPsPSyG5ZTuBoVc7DBzXUs24dM2TzhM",
  "key27": "2ebtGiRympSZE1PxSVmA5xoLZ3Wn9UxvM22XLA9Apktvh3r2BouTNxfrsfBhFjEcwSkGTwts5U5MmTAjAa9J9NyB",
  "key28": "65DEo8rj9mGffoDQPpana7QLrpXqa92eCiZ2fcJ8oG6HngmaRE6orKcuS9ihodrkQNv83gAXTT3ztrZADteEkAgN",
  "key29": "55xRdFELU11nQur9ggWVgZbnHAkyuU38Ye1Crx2dMsg6fRmWJwGh7VfAW1XWquML6oNHNWUDL2o6JP8HAJrKDjLS",
  "key30": "5wkxaewg9nThLuBiGMiyPHZrz6TcMgk6TsnSdUYriPvN3NGfgj8GyDwPupaxQ7ggEioNdbxZNjs3tsb69FVL9BBu",
  "key31": "4YggWFqyp2ZWBJfaCF1W8C4ETW5ojhe6YVY1B5p3Cd8WNqmhQbsDgDaB7WjcrZ6fQtUTiZxYt7wFKz3n8FQ1Yzt9",
  "key32": "TjByRzwFdjvvU8U7yoDrzk7Jmb8X7CQqCZ9EyKEBXMfw4xq8eX7gKC77s7mRBcBEXfrxhYwdL2XXZ1ERBc4Dx5z",
  "key33": "5bJMQb1b9UFuCPEdmmvKHmvuJXHykALuwoVdWdmG5ybjdUyNyJNkq4M9diJjWAGbqtYXiGS5CD9JkGM1e5fYWU8E",
  "key34": "5KQ7nj9tidb3BFdG9nNNYgZEWPfTpXRcNj6cbSoQXbZiBfkS3uENZNkmPxvcsfvUNMkfVamPjaz55gRM43Zwpp8w",
  "key35": "PhqNQGEXUWirjJmRFWJxtoNy9r6HL8jyNsgMuEFk8jPb9o2F651RhKCLRRGxPLyQp1rDTM53YiKNHmhLamERpQc",
  "key36": "3VKRkAK4Zpe2QhKeBYTarF2hJkzSxo3CXP5LG2GPLYeAPxXznXHvH5rCyfdTi9UcuVenKL4xoewqPSDWMd3wsT42",
  "key37": "SihjRUW4QXJz6moTURhibkMFo8Q2WYeBaH4Y5n1g5UMssZULUx7Vp3Mx2HhVMMNVH25jjQAQ3YexgmmEe9LHgnL",
  "key38": "3AVCKt4WnhcQK3f2gQFC24th4pSXYXzRrCF5jM7ne7yyJDcCCA6Cz5i3pE2rQc9JbdmDjjg5896toZRVuS2F6696",
  "key39": "3E1TvyCHDvvCuGwZd2QVXtNuW9as7eZW2Wpo5YmB86nSgTXpJWzUnEma7Hfko8QcVMceDCdHmKfem77RvUb96CJo",
  "key40": "5Jb5iJ9WvGtDjsiU2wUXudbYDt59RJMwVHZnK9ssikuyPvsHQrrqMGdb3CH1EnpjYcsTuncGHehzwdvi4F9mFRpo",
  "key41": "4zBmCEFstGZbpQmRxRAEej3bv3BME6xdpvzJmPZcPsGoFN4gcBXWstsNRw4b8ozfLYpFr5obzs56V3kciMm3K9jd",
  "key42": "5wqrhgxTsdjBjm19e4txzAkvLwvHbmih9G5iYAsLWfBybhh2CXeXWHjtpqCq579btRKZpcfEAwCTaqvLqxxeZVWn",
  "key43": "6QLQ2Gmfezxxza6SjS7P2SxPcQvmjJUPTkAh8v9KwCypoMFg6w3PKT2QyFuRAQ5v5G5kutR1zEZX6bKzdfGCzgz",
  "key44": "5aXTNQ2oeofU22DCDJD649Pen55RYzuwhP4SKhB6FyBumVeBDL4cMMoewbSkWSxzPxWdXVZndNt6r44Wa4L7tQDj"
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
