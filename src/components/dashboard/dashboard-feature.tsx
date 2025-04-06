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
    "4fBUc1y6ujjuYXX3Suouf7S3Qy5STpYwBYoKSQskEZSkzNDCgsHdKT6qiM5oXFcXgKXbWRtn9Qbep1HATcAKTCqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rSaYEgPcAT8Gvi1teR4SfJUxR6FFuFCqcsRsgKVTGt2TYQYKRguWqfLBVAjigbuU9XuYbcqfpz6egF91maivxMU",
  "key1": "3R5navtdeQiG8TFdnMxeoFF2YKtTtQcLpmfCXAsvfvHmS58KCKt9xp7Htd25jq9SdCWUwTQYv3RKwmrDxZTRLfkr",
  "key2": "mvtvCcdptWAKvHn7aBk1YQECvVijS1dRsUEF9aLFZdMR6VAdzdnkSLXYPYWw9pEKA9fJR2xFPMe8qbFD1xsA9Hj",
  "key3": "4RYixfcy6KxPfmm1GE2RaezBohfv8xHcs6mq1RAnGrLhM8yNobk8cRHo2e1kNM83ZGeiFecXRZLnUFh2SGpdxgsM",
  "key4": "5mhGKvuwvE1wvMFw2puaYuvz7VoDV5AnauVbzmc2zvB1ppWgfzQGoXeuCZ6F7dMkXsEGNu7uyGKfRLowit2gaXHt",
  "key5": "6398zDULFeb85mmERRYW18H4m3ToAZZ7o5UGuco25F4V1t8hh7b84gMtDHpYLn7BfMfz1dzLvzr9YSQfdaG7cAQB",
  "key6": "4kfvywgePWV3xPDqYxvB9g2F9EAXP3Qi8m9gPUBmzPbPmsqwjJCk7zEBb5vq4udQzxmKRuxiMWQL1KUyxv2BAPds",
  "key7": "jqEEgJu9bEWJvRiq8QSHy8Hj9E3WPjb7Czu8GuhQkLziRE6Ju7sSfWLXQnsDAdhUSK4NvJ9wB49TmoscfQMETG3",
  "key8": "2VKr4abAkFza9Q8eA7BycYTMHZg6wZhJTtjGTujbnBWUejtp484PLWoKgXTjB9Bny47UykVqNijSLeMSBdbP5crH",
  "key9": "2LgwQNSMF2Mz5btjxwFsjbPLrXR5awVyXGALszfVkQN8EdbVunnr2Pag8L2xq4CZtjdmyQuMZkU4SJQgjcNo7F2K",
  "key10": "22nYgmFtsAYgaeRca79Nobr1DsPRWUQpcgZXMrXcScthSqSSbTC2q2Ca6dFY9oTpVSMZfZrNAedUaPrpdDNEYN7r",
  "key11": "4ipsE9VE44PjJ5TiduSjvammmepqrtQpD4aB3JnKU6irHQeNS7wSN9fBMVGfEsNLUhRKUjXX9jojzzuFnKFRQS3G",
  "key12": "4VzKuLeYMxA2dyBuxGYxkkiNSTCV35sstoaaAnxD1Siy6eNkh23vM3XF4YjuC9iQ67qyEoF5GH2cSzxA53P8DiCS",
  "key13": "HFcpf4WS9JP9GhPTaZ8fWKrZ4QA7qFJhBEYRfRdf91kdkgG6ZoVQkCo2a1yv958QACT7U4KmH3mU6cxu7LN7rsd",
  "key14": "TLoiqLpsPM3oYCJpCZ3BNDPfqSdJ4ijuuPVYEZ4mJ8JyEQA1dCsTf1nE84YSWdV3ZpSHYdF48wHFoSSt2J9JVU7",
  "key15": "2kTKVfkAQJTXznWrbfbZdD1jyZrMqiNeHGEE1zjzqVmdcgEWS8kL3FG6BP2yd2uZTybBCTZpZLnkAwAP1svzQVyb",
  "key16": "479GF3CxpS2wDQ5RNdpUHEaFEoUWqRxa4VkB5rp6sU42mEktfrxQW4R3yYpVqqikSL9DM2MKnz7GByB1gSmgfdh2",
  "key17": "oferzmjK1hRfr5ZAS4eDrfCs9ydRsyQYYX7TFPzB6AUdMAwFcXE8g9pBTjPWXcSCRzEqTb6GW1mULBAdAg5Qgeq",
  "key18": "3fuWqZJE1TryoxGNrX745TvoZjTepAMmHSdYt12ZXQ41Nsw1qyLNoDCQXPhVr9DsjFikEXnrNSiSn5wJ3msPgq21",
  "key19": "2Z6gBHUfFYZyWzAW15ptL2Njdh9oE3TV7R5tnuozr7sAGbBKab153zgnbzWvw7cuFouzRrxRLLQN5ZMUNwtP56bd",
  "key20": "49PFMhoDS3V5WxLKqzfgXQs1HNuqYfZoHHk5coALppw6EFyrLJ3xbUhgthy5Y9h9tJXXyJBvoAdHhoE4eFmi8UXU",
  "key21": "4PRZBDaBuSfEjxm5itTeUk1u3xCEFi4JrmXBe9JyR6HWH2g7Xo13MiKPziiD39yhW9msSkhpqFTNE6QyaVHEKzty",
  "key22": "4zu6C4VeUNWYVxXnbQgsioAtW52dhVTz4SWVcEDVAiYH4g4J8wVbtcFDT7ZHkJHHDzmfKXk8r6a4ZZyic6z54TBA",
  "key23": "2VgyDTbQGKzVNimHXZsQ8GGtABhhxYuLsHPHPkUtighduKb8HJyWTwLBbgKxiUDkLX1YRBzRYoF75fFozWzRU37R",
  "key24": "3Y3ULuHSsm9ykiVHNMAhyGAF6N5W9Cq8fvJm2ZFWapbhCBqWfhaAAf7HCXtcKeDSoVh531LgBPtG6VSdfBtzXipn",
  "key25": "2wiUzcHSRV6VEgYRQd3z1THnHSQ1dP37Czp9Geok8xFA4uztLpdmo7jDQMXLKoPwEnY3G5Qp51oaXYpnXmNiY9dk",
  "key26": "3F7gWApC28civovnmigBYcNMt2mpENguEvs3M873RTV4hujquipwNLx26roh5p3srW5VFqk731e893ZqzbKYF2Ty",
  "key27": "28xGZhVeB2oCXeVHtNyoiQ1RhneSyMMtE9EZGrLqv98fuHtmT8ESEkA4HjyB9aLu4eBPkKKcHGJHrN8sHdkkBof2"
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
