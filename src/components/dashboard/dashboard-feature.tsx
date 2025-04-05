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
    "RgVCr97t4oSN8zpEi26u3oVimknuutasZBuhU3YwUQYq1vqhSnzmW4vacZ2UxnACQbZ9V5KjvWnLnGCnHaWHWx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xiEGYR9F4jvHbJYmac39FZC2cRfk4BVnBiCpTuaaFkumNL5NLwTMrgsQhTAYwfgyqHX8C1xmQhf1y3uS2eVFts5",
  "key1": "5smiGxAhHkQcYTUEpZXLhQ1N5Tj6FhMhATE1xNppRnp2fkqXcgMXnUaxf9LRThdMcw9NMoiKkPyUrug4ZMFYyeND",
  "key2": "2VG9dJQ5CsTgeu6AZm6snUAfeXKCtSvQCk9QVsWrRkS9u9q3xDhqMBfVyjCBFKsX2dCcAguQn8ZXM3obfLFxTNJt",
  "key3": "wXyEQh9fkxB1EDKMkxGKUWrnqN7c9SdzmDbaCCtbpB18gawo5p2z5xDTtDLXhBsPaAWo3opnAuTouMMAaiGy8TA",
  "key4": "5TNkFyHbhMqtNQDzRtm5dqRdCQmSBXy9TiWytbjjjEv1ybMZfHngJPLHTgi4NjYt5JUm9T7st2VrvYiQdFVuBy5P",
  "key5": "sAHj8paGm9BknGLdG5CqHgABNSmqiofTW8AuEHmhyAvdQYJVLp53QvvCAXixMg4UQbproTMmvcZHRikGqZ2cVgk",
  "key6": "LyCTJyHPNq2FYNT1xwNEbw4J5vdDn2WCGcz9cChShDcQPJU3PD2k5VrpHG5Q5yv51tYpPckBL8yAptsJsmPVka5",
  "key7": "4yrmNK5jjJGwdqmEXWN8Sb6Sw1KNkFoCwPRvBNgJopSX6nwy4QYAxsQ3KS5Ycaru3VCyG9GcqPUS1p63evxQvFRe",
  "key8": "5ecyFaPEn7X8RGHsxxzN7Gouhk5wKWAocHaPhYxhijMg8o8vq77sPiuYa2SS3MHRGZBtoYomX3yd7axQKDPmyMz5",
  "key9": "3zxoDfryX8Hc38LacZJCg4tWdFFNb4LpsSa84QpN8QpsYwF7TjdKuWLoNPFwKZ6EBbDMQ7c2aW11qx1A6wKGw996",
  "key10": "3RjxshMifC4rbQgQkPRpTq59zCqZJwMdcE9sceUDWUdhRBDc3pVYo9d788Mqwwvi2Gt1VRJmd7khh9omDR5937FT",
  "key11": "3XYp7ws3qnK9kYpcdfVTPZ3ePhzxJDXxnrXFoXgxKggYzrDaoskSbKPdKAUCa3bqFnYUA6JFLHTwhG5r44jjkVQv",
  "key12": "3uZtLt2dJhBPdcHwpWYYSkujsgJAqfKv9cbmPXvWB4AbUU2rnwowHcQnjpsYnxFfPkbU5VE6nB2twMtk6CATJVFR",
  "key13": "5asb5JtMTD14BvdkjZgbyUCQrvvnHSgWpcrgCNRYnngxSBFBhc1cbRJCqCKDj6vbRjrANnLQhX4zsMer2ZWYaXem",
  "key14": "TZ2EjqPUnem9mZ5ir4zugZB8eeeybdjK7uBf1xbUsidTTNQ8PmwYajsQDrau9s6pGsGmKE1H1thWxKGzRMVyAUw",
  "key15": "5ZmmYRFsLfhtrk62JVYYjKEKPcBVufvT5EfTVUWTiCjwpcTQHhsuoMpB3mqiGguAKuLdaTJqujdpj9bfHjgDHPWM",
  "key16": "5bte64bzRazPNquHYWDGNecP1RHgKmpXjP6T5by6aAMjeAhfZsyr1eHV7Tb5oDTVmumAW2ebzfja7tYZtrWRjL1c",
  "key17": "4gWvUiU7bL19ij9dKZ1m7ajGEBxqunheoUzjhPgG6enDXQZWrYTC3vT7g8uUW4xcMuUdN8N71LyzExeLwoLLyiWY",
  "key18": "2a1WeixWkmC5pnoHJHwUmz7ohTrzEHuiidSyE16UMcTqdTVNib6vg4Am1vHtxoTX77jznBWMJoKcUJT2Z8ZqZzYK",
  "key19": "4dk4TEjdKAUurcPhhQxRebPm3orApKpxQ7ubfpPQVF51qTKuVGhPCMioubwwBi66jXdeNzTEkaGDWEJS3ATsceZ3",
  "key20": "SNx79R9DxX1G5NF2RypuuYRerXxBWBvsqKtRnxvpRtNQxBHkX8nQ2UrXZH3VCnUE5YADmPxoaCEr8JVM5nmMdpA",
  "key21": "2ETxevsrrvU2FiGz5Cs4hN7hEnBuKztUjw6d74j9b4DqgcjHHvnQdpCTnZRjqD2MNWJZc9CTGeYqRju1T9xveFQ5",
  "key22": "3JGGv5rkieRfZBRQ9QpGjv1UKzefnoCruXbys36dfAe9gwdiK9VenMik9QeuPGATJZXq3EoNLoCkVRcriftB4p7x",
  "key23": "49L8tHpN3djTpjSaWnVq9gqZ9wqtkLfzqTofZeA17YhFWymQLh6syCZ2Vm7vhNuzUZCQU8gscFXKw44weBtLVauS",
  "key24": "43tSKoPEWaGRd8V9vUK42N7Y64q8BHvp3d58mKTeZFJL3imFLKGshLov6qLyfD2fsXxQbPFT1yADuFKaR6TSzEc6",
  "key25": "4vsi85b71aVWc15zfazKnVc2sKrm8EAygibe3W2EsNGWwpJSzJ8ocMn1y5VgiQoPaPEPk5pKVi2VVaoFq5KdcF38",
  "key26": "57Mqko3eNzHRkDEQds9voBhfneCrr7Q2BEP5yd8ApteR5pxowcKaVs14cuHKUkrHWcfHV9ys8qwTdcA7xuzPABnq",
  "key27": "ze57RSAP7eo2gaf2oJLpvFWXu7M23ZZh8FVf5pjJGMeNmkNUMJPk2uY9E1q3jYxMbwo2vXx1boGrzqe4rws8d4A",
  "key28": "5wdyXzTqYbZDVLsTs5PaSrCEV1dQx1VPoR2okJRti6xyLjY2TsUXckADTi3dqUoqUSWKPnmkPAoAtARmUrmUpy9c",
  "key29": "2zxMnMbqwavsEJXCTidu7KBkwF56sxAoqVv2TiT7Xb7m6LD92iZpTQiuwjTQ5iYC4DCndCtaxmHb8UL3gP1mT8zv",
  "key30": "3fuwDahwet9gZoq7FdZTZG1oLqKYYAp9Yw5G9UhCpBueDjQ8t6C5LcNundzATUjamwDazBNuNZJViAcWYqZpDyvk"
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
