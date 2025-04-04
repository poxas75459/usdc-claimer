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
    "aVH6E1hbCKuKt9g7MPkzoTPtvxKZGVUfQ7UKzzXXwznMrQdAuYhUyPVA3CTAX8tyDjdzTyRBsvjCCPi2RAtaQL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f1o9vzk4dK7xx9pkQi3JmJBBH83dSnCpoZ8hUawiqiB7dL44BnDZpasTGSV1Vvt7Q3vP7FZMhdN2x6yaVBUTRU9",
  "key1": "37C7SzPnka9N15zfNqRGVHBU1YPTCL9S9NjApa6diCUy7d2tnEJuGRE95c7NeDNTzdpbKLf1iKjtEnVceAX9f9nB",
  "key2": "4CAhaeWrWCsPbaR2Zvr2E6f24sPTQJztQTo6GpzEDPr8zzvzNUcbFzwMWGxNkhD5KbQs5zXHN1e3yDHqAnxEoE3F",
  "key3": "kgEE7wpnD4Mw362QpTjuGDLzdYVcR7g6cpvxvdo5xo7Rps2BXffo2rFATsiUjappJzjzMDNGb4svXEjsZCj5viL",
  "key4": "nmyVRTuV4ACvzjyNjUU7Fmfxr6ZRAbdmV44e6v65JNwiZd3M2RTiSD8XMaeXvJQy46PEpRohUgt7N5GBRA4jVHr",
  "key5": "3hGjaPXQErvfdNT21TD4YD3sMB7HiZjuQcoLuxCXPzJeqfSdgZwtwUB1wa47TF7aeW3bPojRHnFQuUcM5TNVYo4N",
  "key6": "3jeP1G9BUjbYmTBKmamcxfYNJquYKqvAP99r93xnfj49eZgF9pYGCV78LAHBTggaHFuhX3fBTLFJsuBSkhcZ5pTy",
  "key7": "5uGWTQWBBMmevtTchLxo12Aj53RAW1rUmcnS7935GNUiFKhQkrh1S4YFLAAqdfqSQyRR1YzKdYJYDN3H5ZBho4AW",
  "key8": "4ZDZJMjmLuCYM4i6eFRXuoEWsrFc9ezbimRFbhnjGL8MNamZobuXJ1sqqSQsKPYwAVru5UciwXu7P5hBwhpZzCkH",
  "key9": "3gJ68eh5gPf3PtdSMoMfpwSzo5S8Tcav221Dgih5mg2F2DWp9dacT77Tb63nqxzyJcD9KZhKEzYu6FAwYasZrYHx",
  "key10": "5h9Hywy5wXHe3oZgP6Qkyo76NtyTZ79mT5jxwtJUX8trH2Mkd49QvDeWupkVB5pW1FzUKamMqs4ayHcTkPheqCZD",
  "key11": "3W5DJ5cCgjeP6HbCCNmdhMSAGbyK1sbCbbki3NgyYW6c33bFXMADxA3LFV7ja82P1DEaaHafykDbnszfbRMqAX2J",
  "key12": "3qMiAGCKziaKnUepMUreY3ZRqnfnvCc7gVTbHozHwc1rMnm8xL2ujVDh8ySwsZuyBzvxGa1vZ7g7FHLpz6FmJECH",
  "key13": "48a4GmxgpkfKDU9UXaftEhkZFoZzDSoTZmF8snhdAgzfaCg9CFYzBnqrsn1Vy4U3wr5GNbGm4gq137siJ3Yr1Get",
  "key14": "4p4XoRoLU1HVkFPkyA1RDhnsRX6KkqLJKb9EJkodGCSdiBYF8z9TmxyRKXwTskWzW5abvZxyaWb1Jtf5ZehjdHdS",
  "key15": "3DHvKc2yWTJr8gCAp8n1EnqA4kqb9uTJAgUCzDCYcu5kJQxAyUx9szbHYo5kW521S8iWWRihrNsZe91xRsT5eqj9",
  "key16": "2RVAByGSgJ5m659rMPNoDKJWnMw153F9J2dxFBeTMEnVTMeHfEUZPj4LfkYjmmXMUUaZNqKA9ghJcALrBkivGB3f",
  "key17": "5AtzyRuwvkYPE61bBNYUSd1a78HDkLWopK3gzkBeXpitxUoctcEDJB3WdPjmF128WQS4j5EhDJkKjfcSQGhcJjn6",
  "key18": "37bRCSBVRJ3EHJDDQomfVwx4ck35FuwvxEFYVWWerwnEVmwUbFcKRLb1meVskixhhTdVtUUTimM5fJmGNUwpgfEP",
  "key19": "VPWznoaY3j8TgdtGGV2zZcATByAj7zWp416STbr6PTHamD5LBZaYkfXiDV1sGt6qoyuXsU77NYfW2YwTLxP9oLk",
  "key20": "3E13JT9hy166BQsiZNk3eUTYpydPtEn8PPmAc76wHZ4vdD9FybfjgsEKf7cRBXdNu2q58pwLBEbjfqfLtouNKVWU",
  "key21": "4ZgjtG2tNbwc5gVietJkvpuYuvsbZCEQtHT34SMzz2PUgk5ztdYLB5DiKr1rxTh5wgounzwpCFegG1L8zY9QcrsK",
  "key22": "5NTukTbRrZWczJ9Vaoi5epznBhxcDuFGPgZgJebxW5b84XukZ7M1RFFgPbyD4XPFHKhiyG4VKVjxA8AAkbkmmZR4",
  "key23": "5ReKxFnZdUaeNvyiYYSMwNEDLiVjZR5gvPjYhExuAm9SRnxdeRiRaSntcYUEVqUE83P5iDaBs2NizFcKZzTwZhfg",
  "key24": "2EFJHQfHuyPFd4EL75N4ytDkBThTaMysRVp5tWRtKhL6JEQYfhAgbTqReMMyK2rA3dkDvPwEBz3xa6oiZrBiaMHr",
  "key25": "3ps9SGct57qexJ7fb1hF8Mg6pBtwEsVq61EFZGtSqRTZUJ5fo7ycpYWM1pYJtZ2Pqhd1CjxZwT3yKWxa6aLTtLZC",
  "key26": "2tkjXqkr22MtJ9ruJsq4s55u5uKuaRS6mv8ESoHjfe3Dt6xr33ysBbJxADUGLJVykHkQfD6RjW3fcma8TUNEhF9r",
  "key27": "2xJszMvdWgsGCXzD9WtYT2FCheu2kXfaQoKeFFMooXM5ohKa9j3xm5PumQnW2PZwaA3vvotizgumaxzrLf1h2eYz",
  "key28": "3wnbgw4zM14CBB6FN9Mq9L9PaLEN8wpUhify46pZCZB5Sq2d5ctuxwLkPLJP3TauhqYcv4LUALJksLqSrHvfJCcr",
  "key29": "576vrMuj3UuYnwmhff66hYE6WCvEE5k67xxjkaVQNz5LBhJemRi8P3mysBXtEhYZ9Vv8VNujUnrpYGAtpqC8sSb4",
  "key30": "2ugHNhhxubwLhS9CJqhuiUNtZ3QYuJecu86gkKZ9WHnhmegU3J9BxPxeGtK1bMKaQmmLqZP8LWPEnyDMMKB96m9k",
  "key31": "BEB6R3DqSY4A9v7iRGfyuaYjVZQ4oKNTUBNMF6PHsEeEPyCubve6ASZzxw2hGqGanTjQdhPKJR1G1g5mtKWQaBg",
  "key32": "5C9wd6D4baoXMY6HUGxi8wqRpPKyBmkYwhMcwNS8aDUwBa4U8yoPck6QyDayGLt8mMSsqbucurH38jfbRkJAZNXf",
  "key33": "5eBhWTGSnMaRXiQHrT6PnLdD4XQAvXA5gSYvWYHZYR5NagmvXmKb6rGajUMkcNaPFj8NhyYmvGsb7qdDa4rEsNe9",
  "key34": "2qWhfqSS6AEzHAqwyf2Rzf9sFjGjoXH5zE9mqJkYKKhGYUE33JxUMENG4Qux57EX6th3eCDWb1uMgq1PVqeeGa3K",
  "key35": "5EPTaGC4QK1mq4RLSRy7EhRL8xK5GueunhEDSPRyiDQWiBroJhe7SxL74yCh31atszLzYHmCPT2FesuerexsCqGs",
  "key36": "5XXetYXaqA1wsF6YjygeTojNn5bmeazsKvdL3iT8LUSAkaJKX8aqE7ZepPkV9WprDc1R7ooBAmfKCYrvo36R6V5b"
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
