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
    "3KQ5vi9q42NZTaWX4cmFDdrWEbaJCKaQmqCL8oKSqU4Xd8xJeeudQHj1ePeQhZctfzau4Uy3SKvArQdrTnm6wsRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MVzSfn4kCxdMr9npELPy68kFz5U8B8zD1pnQT315DiaXt5bt6MhNjLqLp2wYCWafRjyuN4vyUHY3LuqgLPE38ZD",
  "key1": "23Wb3vMUwPj3itkRT5qfbQJi8hLBaG9VS5akXFFrE834QnNu1y83W2YRm7gfQNCHq7BFNowkhDwCCSAExjanaBCx",
  "key2": "5kNbrTWNz7K6sJmrDTM6cHeSHCkhb2GKMDrEVQQCHxkHghC1RXF5L4p6r71Q9QiGKQYrCQPUKFo1dfAowFMjBj55",
  "key3": "WQUuqbb2TezNQ4xwogctEVH6HFsMbZBjs8AMc4kBR3wDTkb4ojWLBVtg8JDcVbnjDcP5ttT5vaRLvJSeZc4FTpZ",
  "key4": "nEXdosuN2nbs3p52JWK54xKpMndvLpeJ6XpJfiZy7KuDgHnVPuksYaeJKLwTAooP5xX8LFxMda1TPMUsBjEjzbN",
  "key5": "KnXJ6sWmYSXW1rJELoq24c8RhUZkwRjWeSYZt5MifwhxZLrh8sZJsCfyUxUew3yz88sRMUs3iucsLmfgd9CK6Pt",
  "key6": "53xRR498L25T34SVur5ZXzx4ZdGtSL7z71GkXe1kFm66DizScmrMQ6ixdQmFtyXBVDEiHhPWghQF4CtAStgLLUg9",
  "key7": "2bEguhkCL1R241zGW5CADfeEXvPJrCK38cwiRWZrTM8Xb3jsP4D1xa69FFFhNB5n6SDoEWCHUwe7AR5PQUiLXJwP",
  "key8": "5kMBtcnRkXs2K5q8bPb8EHozUYhN1dTHFviJ4gxBPkjMuif2FYZspoax5qZ9Q9RPzmerBTzF36ezXQfxSbRqibyn",
  "key9": "2jPt4yXxnHdUACVULXf72qgMHpzKYkpvfPcb79LeazHoZz2gv9QVeF8fMVbFaXfyaEgrtCD4wva1qvutYSCjGCLk",
  "key10": "3rqM2UpyjTLb99op6NvJRThPGVRMhJQ1ef1Jgzx4w3nwgjtoRN8v3JHEptcmLAVPRdSKzuqmx62ZfaJPDPpjvMsL",
  "key11": "8fcsQ6xMxGesrFLE8boj4VsvZV1EuiFFKd8gfzyqPHhhjUjoeqsJNNZiWH4KgC7Kn8yueEYCdsibiXTTDLTJnJb",
  "key12": "2hBUXkfKzaPoxELfMfJVBNpdpqGbZgJaCx3yvwATamDBkWAGeQPZy61Koh23HaPee73j58dgU7Q8RpGD85hwmXzF",
  "key13": "5YyPxnLfZmBsGnoDKGuTQ6xGPxzkgsUfWv5kxZ4qLYWBknp6k1VwDZeJdq3rgLeS5dKXDMu7HKB8KuAocENipe6m",
  "key14": "3odeVeDPZUTBhozmX7KJieRbai3Bt2ay9Jk31zmXbRSceHcU14ddE3kN1teZCkCggSNYfCDfhrv2MyxxMUd1BGxv",
  "key15": "5ytnzZqyAgZ2r11fk7Z9VAAmQidyCnFkakeQfPdvdFE7hQwwVZGAw1ohZBeJ1NNv9UoaFc4qNz9FEG6uT2Gpwk5a",
  "key16": "4gJJ8kQBMLCKsZA73Fq2Pcn1ZosdWexUigDQgQNFG9LimdWFuZpBoBwvUYCECfE44ACDiG9BkTd8C2g7U6sT9TKw",
  "key17": "54yFnY3djzUCqq36jETquufC6jLkwYZNXe7HSB1VcfWxJPNm9UsZx3UtG8AsyzLQog4Hjiq7rQ3vUcHe5qXQZd8i",
  "key18": "2t4nR3DUAj4q9P1vZUZ6XDfDR5Avd77n5mtP9XX1AK51VRoXqRyLijJkhhxsDcAhBSvSKMxGANkchyQpYXAJWr5G",
  "key19": "2M47Z1v7DruXo2QwjcB6ER1gTTjYNvcheVcJQsrnwoWZzSESjSMkmwsKfUmnoeUZ2WftuaJ1gpTy5fsg3DrAoypk",
  "key20": "Jh9ArP2aGEYF32rmxvcCsTMu5K311YPZbQXzVMSB6FtRfuNCyXAPftTS1aWrnYPvKC4GPdBA3584XK5YWSaXVxd",
  "key21": "QcgWEkiGMVv4Dn77ZEvnqvZig5yhUrBMZAujer9gVemepuNT7iRpuWUTPhvQhYua9PgBUvahBK88HRLNp1PqRwp",
  "key22": "37AUtzZPzp8Ao5X4Q3hDvcYvKaai4fn9XDQE899kRHni4hmzjHrphzm3j5hbCpwWEEFH9J2q3WYKpXBUW6ZgSwiq",
  "key23": "5Kdbfw7Br5sTKUjA2ehY1KtTcErNH6iJU9MG5yx1PXBfy6wNVvCw95VEBLThkC1tv5mBh8Seod2jtxu6k76Nqk36",
  "key24": "3mRLsvhGcHwo5C8mYn1Fiy6hwCXbiuY23jAmjECaKKfBPQ1uJjE2ZDLwy2rxD4SFYv8xDHBh3YLx66WxXbd9rf7H",
  "key25": "4P5zcqD5ysTi9UcUWMbdFC3hEbBGhaxPUweQCLj8LqoXNcDhxyfohNFTTtYBoZkHTj4PT71yjykeAEZ28uCozEvK",
  "key26": "5oBzUXqy2rGqkEdQoxw4Gpi8rTL836dRyjev3gB5wLxejyjZzj65sz8RLJDdmdW3TDWrSoyDtTsyo7ZtpZBz9eQp",
  "key27": "4RwwkoZd1WoLma4cjP1KJN5NNvJtxEH4UnrEaTNpGNqTEeYtsKMrWSLjQrRie6N4ZXqAV5EtvFTxeKxcckHm38sz",
  "key28": "4BUhPcfC63Pr142X1Q1Mew4cE6S3LEZtFPyHiS2F2FRFRr7cxE8X1wzKDBQGLtu1FDx5WtC6xg812dWSjihpiPCW",
  "key29": "4sB5imHKntBD1XYcNi6K94GxRpJi2XqshjkP17syf4QJ81dz7agvk8RLykVuJNhkZpHKyivPHyS8Z1QVzpiLPQBq",
  "key30": "NB6pi8eyzkoiwyjZb97LRcGi7ivqpzh2g2h8AV4DUMbTJ7gQuRMqDmAELbJdQH93DKztXv28FHMtVpSNB9DxEE4",
  "key31": "3RYi5ETT1riPC7F1QzkkAQmTHiyJNpWpRqUVLSu6ctJAWgVKcFqo5pLhVGojcjymwFbqB7gh6pJV1V2BF9uuD5br",
  "key32": "3sjSTdBx91JwkSscZikQuXWohPJiHrGfQ4tvmyojaNLNuMh4CxWdKFwEcv6XHS8Pnb1sfjWrhL1ZcohRcnDpf9R8",
  "key33": "TMxwqfu1ev35gzgRb2Ks5izhqeWsZj1qMZ8uaAMEnxvEbS7MQBZQ8oRE47kihQz4TK63b1MXkq59EBvAEtDjHbS",
  "key34": "4DMu3UBzAVPSrTfssrYpaVDahqNFqC3N8uv1fBAuyu6u3AT9NpwkkeUaMShGXBnqr6KdNSeKfNn6fQqcRfbfayKV"
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
