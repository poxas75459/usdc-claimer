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
    "26KVRL1PUrGVmfX8eZQhx3C4T2gLCB5wqpA5CnmDg9dwZMBDr5MKbdB4twH7bBCpF3v1kGZQ6wtNFK6p5a72du2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ouUWAXJ5rKAc4kRwErqhe3BCu91hQtJEcHj2DDyej1JVRPUMCozX8ifWTEBjQjFntUyjXDqnjoYhMieTMuFWkDx",
  "key1": "4kBFkjzsh79JrqS9PbXqM6HFBSRSGBVJF2MEBNVPRb1Xtshz7kAoYSsGVxG2EEVvGdpsGfTb7x9YMry6ZGry82gy",
  "key2": "5WpPADmmfbiNZE4nUsx9j62itKcRA5CJ36JjGeUgQX1yhZ6B5GY9hE2WGCD6jWNxHQsMMYQMtM2GFYpmqnLHvA3M",
  "key3": "m1r66th5E4P4i59Yk4oxxem3mMHa1sFXMVEBc63sNt2DsNfyqvdihp2iC2753NMPdDpWqQXL2Cf9j4zNDKS4oqD",
  "key4": "4TBkZzCt86n6B84Usq7R1otnWhEQXn4fZvCrGMF38FmZzE8Hoo6koTVBXjiC7mJUzraYBL92qJhD4QbtWN57xoBY",
  "key5": "56iJZrdnrSe5CxpR2DTtgv6cpRbcR7m8mpp5kKUVeiRnpNY9uSqM1otBbpEkcLo5pwrqs2u3m1ao1tjMNNzSbEgR",
  "key6": "3XoRmvW6hyzZ3sQx9eAJmTX2bgNjYuApA71fa6bR4rqnwZhuiQrpziRu48f35dNjZ9QZYKT17MNqGqExbRhY9tJq",
  "key7": "2re8yauUi2nFPoiWAsdDVs6TTXGp2gvreiGy8AL2mvEnUXHYPE6xnd5H79mE55zopbsmpAWDs2mUb2eRMtdAT7Cn",
  "key8": "EyW4N9WQh5eLLP8uYaHePWHvVaUTVWx1ceUraNndBomQHF3goQx9aajGNqmxxNaHoennPLRdFQNvN7Hs5y7XTFu",
  "key9": "k2tW4NhX8ZNSxyYPNqGX34uZMhaFTNPjfVFxb31nVU3ApZgZAbpN2aevEHJQyhnY49tAxSJfdjYeb5p1qdX9Pxj",
  "key10": "46j9fbs8bTLTDbNDzThYzjieChAf2XPqVsjvs9CMiDyeVjvrUbAgmSynVooHbA7QQywKtyeXGrCrdTC4Sxnj9Bqv",
  "key11": "2s448PL2gTdhJG4Urb4xPYo7Ab62UgETB5cZsvsSBzP16Yq16aFiKb1AzQRd4yB12yxt4AzizeL1ejUVhYzUFx4Z",
  "key12": "4ZhXgsD3FhqSWzfqMQ6W3edY13FMe7hrRmxZGiqpTakfU4Y4cGPEJgUm8E9371SUAL2iCDNoGnvRLsVSQ46jxwAQ",
  "key13": "3h6iYiYkdr9BJMdQkwNomud7JPMeq7sKGbXCTW7dLPT9FdHfgC79QEE2LY27duym57ckAVgS7mpCMiC8cBy1TsP9",
  "key14": "3xRxo5gbqExZJ9bgyMM4CM9KJfejXG4PrpWVAuwaFuWCWsPrM15pWcB4PzT8mUa7geAySRH6suGuyRB8DmvRgUBQ",
  "key15": "5pErGYkweCGNNsjESWfwig8DvJgdJJ4onHRnFjovi646Cbf8N5oMErwyhCxAQSV1jNuBetN5t4RinxpdzAumt6aD",
  "key16": "2iroY989nFpjLEjrGYwgJYMaZ9Y3aUZKqNiZtzTvcJkiKJfvBvdTmZEHtK5nZB2KDFbBN6QgZQhhPXq2gQw3Wd4x",
  "key17": "2y93G8CXEfMZDxvmXMPkijqg1jauwHYAxg3fdf3uNxD6b2Hk3e5oHMjLvDzAqJjpQd8SCNstUY3S2CydB46wSZR8",
  "key18": "4KxrmJVA7Pbq6DyafYDn4QiCsLgfaGd38ELK51wH4EXudJLLnAmrdtyAbpis32Me8rCQMdgPefVwKsdVw3NCLU7Q",
  "key19": "4Hqt5GzSaSdW3X1B4f72RcxZag9exGTzZJ7CcaRCH4J3Dnnjr3LDJoSEREoJABrscwYx6eq9XQdqEBzbBeRZrHd1",
  "key20": "4HFWeKw1yuFVqhrq3hnQqSzXDkvosBKEkraTvr4om5EuEx1xXA2YPnfrP4frcbuQrYu52wHwPKwVMwJZJS4q7oYg",
  "key21": "4JEUd99Q77Zn2m4oW6K1JyzXvk2REycYWQXEWmofKMqDBrgbpEpRVwTucAAHAmNooS7GHNk7weDJzeTzGwoD195b",
  "key22": "2ZC9WKEr9dhcCbkKvKGXeynUiWEFXRGwzv8s4u5WzMTsyxWR8ZZAe2noVTgnZkpYHBhWoL7uxFw7H4pNdL5Vq1MM",
  "key23": "5dYcCPFzdr6fD6i1nDKNXFvbE3YMGkXYezvkDFuA6DLazHuY1GCKF9T2qccvYAf5iqVeoDrmWkxgPduQYm4YeKKk",
  "key24": "4vPkXQjsR7nUdixPSzDM4ZUbeC67jZdY93mo1kQjGLgVHvYvk6EkiWWtSWWMUweguXUfYNRdoNazodpvDQEcGqx2",
  "key25": "3wP6vVy9syZS6RHj3w4XB9XZW6xnoz8W9SH7Y5hUMMinb8w8Rzotq5jZJ6p9utYE8wuRndob1W4MZQ8RXRjbBoh5",
  "key26": "5xYF8eZuwobMjuW18v1zWyEeqqaytkZAsMRb73eCfnyJWvNob9J4PpsGiHefAkMoVXGsG7aHdQtkzeXg9QLCe6Ri",
  "key27": "52m9jhx2jnBXHQWRNgze5Z58djLnwPPPFZs5oi9vHnG21QU3L9wE3g12qu5j7LY5Nf1CnSDhnyPdj4bvPPXvrPST",
  "key28": "4XEuLJpUxtnDfjrM4RM52QH71ThX8JwQRyj72hwkyGFn2eAH2tBeuiUWStqP3WySV9U8FHxJRWJsJ68hnv1a5Wxp",
  "key29": "33jzHrLrr7eFewq9P7rkh4vpMZnTGqQFjECj771os3j2xvjLb8TPWF62foXJLLibhb6pRg8zGv1PV9Yw63Rd7Xqx",
  "key30": "wfkSWzW7CmjTVLsaMMg2ewyPt7jTstdn33jhLZgUWaKzD2YinYYJF8sNk2HbfAdpwyFBHFi1CqDkFgBQyoSS4GC",
  "key31": "44zSdMaqr54K3qdGQdz7NhThhjR3Tuk6PnJKbDW14GPE3bfd5iQTWmQgKdR5AYjN5m8bzuFLQv9UBtsxJZLJrqv8",
  "key32": "65EEZgAok8pNKaSWtDFW3KjRrKGhvGvS2fwiuZheyrwpkfswGQMZCjY649amMAYpqJuTowGv3gAVHXRm8T3ZntzH"
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
