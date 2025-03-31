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
    "3bfDoRZvHsiZwzcbDvJ7feh4m8pihusqDVfXnD6g74HStDBYDjw8P8um4SBw9nhpEQso9ki3PMUfzvBsUDpnmjcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PfGdmURyzv46dN4fVCdaLmiQ9Kx7qoHWUwxR4nPPmWLv2dMi1YQDf8yi4vMi2VB7L5eyNjpfFq7H4Xd1qFZQSbQ",
  "key1": "3n2Erob2pB4dR7EaENijZtN9cgwCgVdVkL1j4JzD5Ftm536fNAtWhSmYznH6D2mXwUu7DbU6SFy3yAhfHGEwKYXz",
  "key2": "2SJduFSyMAA5g6oyt3tRbogtbH7WvHdifffaEN5GpVBn9wAQnuTi4A1yf3mehgvFzTfWQoQ2brAGHiSgovD6i3Wo",
  "key3": "t8DhFDq2B7Uz9YZhkV7qkX5oTJxNkzkAeoUgCx5dcPUUEMcaGB2eaGAqDvxthq18tcVrrrpxYWqbvtjN5mPn2bc",
  "key4": "nU1YFvNJp5i2aKCYMfr4bCuCeM5FPCpWgWUMQwDzteKsihkYG232LhS9b3cQeokR7KV1wJtxvq2Mq93pMDJytLg",
  "key5": "2446SrPZJtukWMH9FPv7iM4wv5G6hbdXC1juZrVfFDr9ofKeY5fsWNNEhwtKmexWFogbBUh6kkPQZJHCv1YwhvYn",
  "key6": "3VNzcvtBkea8NGTL9cAyGzQTMDxEdApBaTpD8YWx5b8xpmQCBWauqTYMKvrweVJ4WL5xni4YV8eX9kYz3a8cLdaZ",
  "key7": "5GxBD8B79SJW4B76XPpmrxbhVGjt6ARQhwcmh5aLSnjfxpLTJQAJ9fwbQsT4McdKZSLUTvdAaAJshPUxQqMhZqwn",
  "key8": "3Ty2GCdA68tbK81Hj89Ns85A9rQwCyX6Do6fpLPxvfNYKAYcdZkdu4dygRPxXzwhSPcrjFTz54JAyuQi1gNoSMbW",
  "key9": "47YBi8wy3GRjrv4Z3rpoCwFHTmNp7ZqJNWmDEN2dyjBgfsMNM14tjjaAtSBCXCjHS1jKenscn3bjYmFrxct2okAP",
  "key10": "3p9vxZcERX2dRu4VPGt7wZFHq6akiHYYCKWtqausGTSoBZkpqziTjqykbFNd5uwB8f1hGwXF6EfYkpiBR8UQh8r1",
  "key11": "2h1MWMLQts8KJgnZsvWAAmyS55ed84SGTzjCaJ29ScjQ3EGn1pvCkTPMDCbfrZLueNBr56bqY98SUBqKZmix7M6B",
  "key12": "37S8nFichFSYXNLcBcYRBPtS3NevURKt6nbU5ocqUDYzN4wXuyzQRzQFKxB63jm1WUcS4K9r2r94PgGy8Lu2wPRb",
  "key13": "dWdGtA68sxDys1ouJmhtcjeo6AWKZr4gVC7BuHZrpbB4aXLmv4WMtjYsHbXatU8FtNBbAcG71i4yZswuRANZNEw",
  "key14": "5GHgZqKYMwse28Uib8wnW9PQxH1sHx5M9mFMbu9gcmcpytfojdkvdjDcird24GoU9Jvh5dqXESGiJ9PbGfswfWEc",
  "key15": "9csuy9RL38H3NS6xxfKEkREAV8VXSwFJXMHmuimaJ37guHRUHP7VQmvVU9RtfRPd2y5XquPCwW7EjtYzRQ5Nkic",
  "key16": "2Y69EcBT9N8wbHvcax6JZXZ9UUYoUfMkLh3zEc6f3Psx5eyXnWfbhWoaTqQYqDRfGB8H4r6J24si3a9rRLabsbQ7",
  "key17": "3yZEuxEB56TCRLGUYdCVfT8MCwo3jS6c22RpxDV5gy7xjJzq7D5mghwue6rPLrRPSdCAejrnmU2wVcPG6YFi2qph",
  "key18": "ewErKszfGazsCvTgscpehGuNsipxLZ1ozR7Vu8WtJ91Dn36tgEm7ZRHZGT2GsL39ijnxwsvSBNxg2ifbT8bFpwu",
  "key19": "bCEb3Z6UskUdZ42wTE9Muyw1dgDDMRYormokDKABKt98Fh4LMrhQcnCdN8VQkh5Ra7hz6SxHGE5eSE1r811R8ED",
  "key20": "2dqEQJZeqZL3eSGsMzuXgDq5JNyyq5TFeR4LEZMewK4ybAgozgHhmtB9twNpVRZC63Uf3x2Ci2zPMzAtJyFPYnhx",
  "key21": "49sbjjRnGrff1hLVXjWaYNq3pL8nQ1WqKMJBJZanUVuo24KtSBVbjHirHxdnZxBEeeh3aUqWmw3x17wGYPk81PXf",
  "key22": "4waovSYVFjYFAr3kiBJqzAb5JsDCPcvm9jqCz6yUBufMT8Y4BoEsWen6BAeH5DoH67Z97yeKwhY3weceUjexnXYN",
  "key23": "4MXQPCs43WGnveZN3t64VbZueyz9pb2GwEvYeTaRP3PCcMw1bv39R6ktdp2gvGJEGqdrhZmNSh3BVGzUwvihVwbm",
  "key24": "3fJKk4mjLPNmvxxdiXURkz88CDwaLKwNatKtbTyhuYAP3oL9BhUNPRBE9ggechgZ7KmYRhMusqKS8j7TSpoY4mqq",
  "key25": "5EoCbYHY7e4jn3BT3bxKmBJZg1iQixtA93ZWxaLUtBFvzKJZ5ccD22aHxQrq7fmDpW6yss6vcWtZqeS3c8JXhqgE",
  "key26": "5SysH3GqZJafiJsJcry4PrnFqny1BVKZgEQev8yVxdLmGD7V4JXEwQthS7aMtohSk9oLMPRwPzCAERCWzUtSsokg",
  "key27": "5TY2wzuKjxDWSQ63iBnQqf1YXZ9jy1m3sKhnKDJZ2B9XcPmbQETKYttoYfjiaiMcCCJzBSTdXPGA1id1aEfkmH7X",
  "key28": "55heRyzS7VGjFor95cd9gouGWrXXKu27Z1EckfZqvjb7uxz4zP7Lp32EsP7P8y76k7yGyrovMYxzjJDetxfpfpZh",
  "key29": "StnjxRiYvKzBKsc8zZ87Hs1M28CFGXRapfaUzxw1on3ktw4DPUHa9vtwCeMNhj4c6miWrHytnCJuVerU9pfZdPj",
  "key30": "5WHnkdm46PFQcifKSqsPrZCM1DkMDb3RynKTYG9D52TeRYaETfSUM7fDixscksSv9mjc8AWoJnxPRRWuaY61brrp",
  "key31": "5qAtJ94eWvjjFVZ8UrWh8bpcWGjVHADRCK1FJ2oZzQUXH2JBfjdJcFWhWEKMFu5JwWBj6TmE97MpzLGu29rzp3TK",
  "key32": "5QA7QFUHpfB3hkachicq1iueFUn4tKisQWR9TkGJPaYSKzG31jtmb3y9rGU685xJyGGQaEdKUZVPcUQHV2m9s5j9",
  "key33": "3MMnHANLF62P5K9iX9bjTrgPvHJ8LMsqDdMY6uvRs9iaSnA9v4cNU5GmFNdphXW5ZtaCvfW7KD1811KxnH1Bur5b",
  "key34": "2FBmn5K9ZuLRq6371p3XnJpT3VRbQnUTwAWXor4LWyes4mGBwzt5a31pPuuHkiat1F6nJzU9WidcYKwnS8DhciVB",
  "key35": "3R35o9mMiBma2JxmACoxME7Db1d51eQL8PtKrPBYNtP4iAuqkM76GCtXa5ckczAoUtfAsu3k5jW8JsQ85NnduAjh",
  "key36": "CzEbCzRGd1qm2SY9B3Rhsf2kkmrohv1QKbAw16Eda49hM5iWXBbz36rBFwfvrctC6RLLc2rxpGNwnZ9GuvHx91L",
  "key37": "43iovX61XzcsXu3PecxgF3NzJsCQshMEfwqsmXBxyx7p1oTk6b6zYYW91rHbzjBFp3rDwZ3gpNHtdh66RKjw4UFy",
  "key38": "2YqQAEGCaq6fheu6aenapcAsatbm5a5xxSJTRkLWJ6F8CWgv6JKy1L1TqpDbkr9A7MGi1BLEXtnX8QQLJG7Vn1xU",
  "key39": "5RtNJ3X848qxfkkcLqZdmw1WT2f4iLFFaHAfYncKeXQqJBdhmvorUKjXzhdybZV7B2NowwTWKWo29JHokRKzV68k",
  "key40": "4uSj5wnEYSkyucsMwaJxHnMDwrcimbpvAcv2QrZU3tMhgdM7Pj5M1xVAePkeKq5hidovcnGGrXccVWKtfX7tmxNR",
  "key41": "5SZsdYQ7nvNTCUeEwqBxNDeqGVoYKwfsRMzmApZhQDhpoMJJvkUqeQTTTpKahGZvRxpnYtV7K4RXGL4NYpW9NR1E"
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
