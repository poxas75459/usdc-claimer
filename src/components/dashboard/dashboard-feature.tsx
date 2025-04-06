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
    "oh9N5wuxkv6LF3RMvW8gWo9WGvR4bhpQsjmFfyjjVpcZ2NmuCJvvEGhLjhLtDqdt8TvAXonBoNFkwP9pPvgmhnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56hzoMJyHXrzCRL2zoyo3i5rsn666oXWtw2it8fcVbiNKEHDV7cEmFBioExZqBZQdJE3UfQSyiRCL5HYjfxUFg5m",
  "key1": "5wPskJwuhLHRsLmGwBckH199BbydHvrzG4JT6SkfgPeqAQ7fdEWajvgYa5HLR9LAA4UFSKvvMb1Ufy2NwUmwzdtY",
  "key2": "21ag8v6UMGotivKc5QXoK8q3QB9nEhbxBFWSihPFycCh4ZN9F2Aw2xwLgxRhZBXk61JdsbYhjEWQMt7PjwySNyyc",
  "key3": "JTm3rrPYnaRAmLTjiDcrAGZfbMfh1w2udUieJQdgPX6UZLwfY5Joc3hbHEcmd5fvbSaPAcgAApR6UtVvCb5b72E",
  "key4": "2PHMkAcE2gRb4VMXUGYuk3rKCYCVYGwc1yZwxYbQEKx4gdF4WLk2PZkSDQRH67b5dv3jASvmasduXZy3BeaogoH6",
  "key5": "42fkL77ACpKv6PBCdBHqvVVQ4ZNpB4L3YGoZkJr9x5p7QGPsPkZtrD9i1KcNWvhZgGAsokEDnZxBZuEv3QUJyA1P",
  "key6": "t2RfgyyGjdHBcXJgMPZo7BFYsGorD4mw5DiJdhuB5SxGzCsDypgE5dMTuzrw2zvhekG7jm6EsajuBPkvmDJzwVX",
  "key7": "5h4rCpULpYEGtdEdqDoufDK7hFEoJ4L7D98zqVwt27TLjBkwYbzde4UgaYJQbMStHLfq1ZAR3hDxrJwCf6rqSuZ3",
  "key8": "2uxJXM1KTEPAVcHXWp6v7ty7E8V9oPUTqhxdVBnqpfSWXRztAg2Edn7495865ybik1VcSEPXBQxN6kou7oRwR4jA",
  "key9": "5QjAvzUvUJcHkLy5Jgwk1hFmY4LNsHwyjUZRMqZWChkvXNs79Zgd9zC926KoHQAXqouRSDqBDVXgADa1pyKSL2GB",
  "key10": "3yVgj3Waq7NM3DKa4DZvU4Tt6WpfksFc8JMdCBi35cneSDBQ7DENQ1PG3wm6w1CbCP5WZC9mkdUsTxrXVcHunQtq",
  "key11": "2zCJiPYjWe96DRqvknmSmwynuCg1Q7XRcG1vJntnK4pV8jsczG7asgGZW387KS2fnTJBbfgT5DEG5ZXo4az1NFhD",
  "key12": "2Lkv1FtUHxvn6Pb4bT6SPhXYQgkgWCQReLWcZH9sASy8QviUeQVCzRYTj8KNH4JZoii6Z8BfyTxMCkd3jZH9iBNB",
  "key13": "3hrFwK44zAXTXA7QEMhSniLqATRFdhnv3KJhnHJHc53zSoq7zB7gi847fCfqNi4n9aguPcTYJhEQomXPjXpukSU8",
  "key14": "2uNVAWcTLL2xqmNyPTZ1NwBo7DZNWvRKd89ZBRBZxWYkM9uMckdYdr4vzJRKXSJSLoswZ8kgKK6zrNW5RujZx6Th",
  "key15": "2aMeXMBVqfJWWjHcWMatX9fswoGT6ChwpsRJMaZtSxWHgjEivfLmJsZqzV3hpqTejX686w71mpssQScayBsqsPd8",
  "key16": "3tdvBRe2zMdQKgin5ZLe8CJiPdmNTV57tTaXUfdhaQboucWc7K92E82c7vdWvXf7BjA3giwmHogm1irUe9gQfte3",
  "key17": "4E6mEzSbrXf2Dvokze6N2G3hP4V3MMYLJBeLZrZM6PvjFbTxTK3F8ZjBTmYgVaEEHxrv5WuTBMBKjNgcTzSRkS9i",
  "key18": "2oNzE3NfxiKxYPi8UkvPutjwqgC3XbM6RAi1pnAZ7QxaM8eBvr5T2PvGEBefB1dUWRBXcd23LB9fihN72uZeRyGn",
  "key19": "4VfMizYnADXvPve3aihWkU9StJxxZ95UpFF4JzLNqcWqrFdn52GzzGa3DRES6zUG3acfu8N9yqszntMB4UR16kLE",
  "key20": "4uXRHxarKQbu7RDSHBtSXeT5HBUCVG9Q3yXoUNQNunyf2rAJCUVJy2ddMmvuvZ9d2Rm538a1Atje2uY6VXvCegGa",
  "key21": "2stTVDZthuEyinAKAG9sBxyh5PdGiJiuK5bSfff7TQTadXWtY71cgBigzPRR8XPDa8Nn3M4UwUWUyRGQ5nTAZmv2",
  "key22": "2aaFwxQzLuzDLFM6x78iCArvbkNhmV9sMBzbfYXJFAsZUXLLzY6CnkQi7xweDZsGZbLVLZZajgFt6CmXdzf6NT1b",
  "key23": "4NEsr7K9wBhXC2ziQpcQvrc9AEgV1WjgF8tTxd94YYqQjd3DbdswJ7gpePXiotoUWJjE8nEZ1C8aGsoBswacbsev",
  "key24": "2tGmxN5fUwAN6JwfUPnYHBrjnMkJSdE8gavjMSSgusGtD17kU8CGyCZZJyS9zyUHWgu4wNnAvyAiy81XHXxoyK5E",
  "key25": "3AtQz7UU8AFJ3giFwaZMGt9CqXMMvxo91CXuQke4UQ234gzy7e54gSrAm7LKZTNTRUUtagwG68jRJcUr7LM7kiYx",
  "key26": "4KGFLkkgGufuzYeCtyHZiqLMaPPLMEctsTiB1zVA7zrWQRwd1JJ49UvMCiZuPqiWe11VBbWuzE2aojSY2qcs2U1s",
  "key27": "2PcUzNwntTCae6zjRknKVLVorDjLiiBkwEnLhcvX67s1ejY7eAZTZRf95zgBY2VpGiX4ULxfvutpapfPvwu28xAs",
  "key28": "4ZgC3NHzNm37JqsUHWn5Mdwb7sEoZ9P1htsZUBnokHHqhn9xEPT9nyatmWvf97r5VaipBNfJrmhkNNV1nB3ky2St",
  "key29": "4GxrPNUwB39mLL74PR7zsUq9pVL2Evg9G5BadbEtbstVSzuSsRfzfNWwCqLen2Ubp64NdDgzhB9tXFppK1fZm14y",
  "key30": "3CVkFWF8uKZGfdqUfHwFs17bVirc46mWAXfeC8Z5Nw8aESZsmS9UCphjYUcwTzv5XGfsh3XhR7MQm4Dr4NHvbkXG"
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
