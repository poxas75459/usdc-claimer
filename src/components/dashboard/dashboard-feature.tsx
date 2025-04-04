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
    "3ZQ5B6oZihuUnaeVhyYr4AkxCAnb5QZZ38MBxSHWimiiPKvgTUovK9PWztbvjCo7198Aef9yRcY7DMBiocEn1qac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r626DVnmcPUfWRZ1ocU3iEYUAsvozaddfADw6F4fCY7ihHjP8P1BkJVFaN3eYQYsMJSrkM2G6BmBkTbgYXqMk6r",
  "key1": "3gm7EBF9RQ6DzzUGKCk6kD2rtPvK7XgdqdEMubB6mt6iEWgGS8E8BLTTLbMNn9WcC4MFGyo4EsS8MGUXnq6bcX99",
  "key2": "i7qRK4JMvvGZrVFE1K24AXsKd14QVeAvoYYuTuJ9hLpc1bpA49Tsib4d7ULfxAa7RBPeSyCapcAiQZAGX3b13qY",
  "key3": "34aMzUEJWGDEsJBEo3JeeSbtXkxEy3ffgXGXqBs1rxcGprpQ7m78FpC6xayJ9Z5jMR91rVF5iWDEjLzdKsAj1KTJ",
  "key4": "41hXUDqtUQxyputby7p8ray9dU5hE3EV48Um2w9iY4vyRMMHKotXeYorkQ3QdHCHRQvnEcK3UMcxzUMNNfpUDUup",
  "key5": "2bzBKKBtxsPY6n5yEoQp49fAHkTLiPpmKXppXpYgKX5F7ukMMt7juWhghZQ5TWVrUsxoCnJkJzL9ZmGvETwJn8n9",
  "key6": "2tot2wzj4L8AB8j6SEAoiZLuw2Jc1yhrNyETEaMqTKAtmQY837xdrSRygvtrdLxxrz5SRuPRcRchrhUjKibxMcmF",
  "key7": "2GF4i5ApiWV4yU9FuaBcJhKVMJiTdoR7TDCgGfRthjTagfaDQeXsFr9WzkYCE1vkN73R2zkR6rqiPdjUE7ad3dai",
  "key8": "5Q9DG8mWybdBsxyeocA2bSdM7uwXKEoTcxkHbJYUe6VQbBMebMUApyKmtHTgi4USsYYVARkZN9HRwB7ZAzN4xRWd",
  "key9": "369X3J84pMccn4X4coWS5mqnHrkZjHGcn6MVD4Arv43bzgH6rFPpukWg2u1ct6b9n6e9qdtE8WN5TiRm3oPB9Yrr",
  "key10": "46KiJ3qNNRnydvum8XTGfmi7EwcRZiq4wkXZm9inESV7cX5M4Em1mWs4zwGRao85wsmkq6NFKnNxx7hxL4WScfFv",
  "key11": "5ynEzSj6f5tJ2C3yuwbjYWagNGELUfdRg93RspEHpQYTbzpWba3MC139sGd5UEpXcCfpCpmG2AKuRjxU8bZhLZ1R",
  "key12": "3wcGTEz1z9ktYZzGwDWxAHfiGTFCkV9o1Tdgj2M3dVmz9kpBVZPNB2B3BSrGqU1CeXiR4nC1QJLsnFdb9URrkvFB",
  "key13": "4mY4NYYwR7CxUwe74x1VGUZ4eQUFJ9ySC7dRh8axx6pNia2ckgngSKd3pHD5ePbd2BbF4tKBuRLrYNorvSXkLi8M",
  "key14": "3Ke9MNUtGDjP3q4bvHWcn1MwbppCfEwmiLicDBfuDzALSDxTeqFC8H1fyQ6ZY4x44AsJGNfKWzyEwswXnHMMBiTv",
  "key15": "5w63X71qnzio8hHw5J3ui3iDWghK7KV4cUuv9m5Le39mG31brfgEAniUz6pkBg2gYqqsrLF3pLbt95kdL5FsUQpN",
  "key16": "23HDNEX6UhNBtqJCFk5QLKsaUoGcA7Dyb9rdhBcVDMt7vmrrM8oyZL1f3nmTokNhjsuiDaTrXC8fCzrdZC1fZmYw",
  "key17": "2ef8zrs8xmvCx99vZA9jdMDqTt9jTi3XTzBvmoNYYVm23mrpTcs7AnsQKMWUqR4i4wvMSXHXC7pmJYB5nbcH8y8T",
  "key18": "5tAyC8x1wrz1y9BBfkP853KH2awHQzRDa1URjABL12vKvDRzCw2LK5wofNkyU15oUB7kmDoQvoKo328NohPRY9iH",
  "key19": "5m1DdVvyZ6ejB3MJ816xVoPXjVPbcBA5BiuQpLYgXArGZyCyBPgTnq1MnWBNzZ9D2NRgh23eWqrZ6qPNrD9T5WmD",
  "key20": "34DQ6auDU9wSpSqZ98jnXo1t9YXMTNVxjaHm8C3FqLL863GMchZasf3EzsEs2GrLGpU4BxJrnSDs5H8pBZ63E8h8",
  "key21": "3YzEL45wqYjXcDQzdkrNi63CNM7tAdDfbsjw5B75TciFMwQkERHMe5y9DFsSngXPnvSmyhythxTKzJhWp66QNbpN",
  "key22": "45sGbadL11nQ22WzfjN7BWkVUocA3A1yqQ5Bj4m1wYWc58Av1oAYef6egAAjTZdmURbAah1yjNbC4ziT3mfWUXQY",
  "key23": "4fZdFJQ1Lp1tMTWB5V9fZ7Ww4FtVfG5u7q8chQ6oY1PPgbAXbZLjD7divof1PjaNy7v3GV4g1VV1QAJoTMzkCyuo",
  "key24": "5ACTZAbMria6gTycYp3qonMaJ45XMB3ZoWWMdmoLXRjNVKNTdgY5A3nZfVP5GPCoNjEtbJ18ahpbxov4VK4tYKZd",
  "key25": "4EyJTeQuuo4uhyeF8H9gzXA4sQbuJwsgVWj5jTgJP6g9kx9mmUfr6JdqWu6HJqMW29UWQUcB66k77AJJwJSHG6T7",
  "key26": "vpQ9L16rGCVpLYEspHvP3ky5K9o13DUvdxk4bFmuyv4VKcN2doJXpRMuqtTd3wr69hCCb4dXu73ivwgvj6MSCzk",
  "key27": "2dTDqpBrAMH44trNUXuLsvDhFaAfAKHCmWxjVkBX95CmJKToRE2DT7Tf3bdHYfYGBgeVBBNEw2bg9eGPh832jxXQ",
  "key28": "3NCymt9CahnW6v12zHsmxQL4AaA8rzBv22BLDi7oFp341ecd3cop2wjrAHXNApKFymFbn6MYiL8PwJ6oZByuGSPA",
  "key29": "3UnMANSdDJzgLC2p2SAAH3Fc8ooY7BDXks7XKJMVzBmh3bE4yZEJVvToyY12iFoHvq2Mnd1JNQ1zHsNt74JTa3Dv",
  "key30": "4hapNXXWxGRjXfoCUCANbuyqDPq1chyCuK2ywwxJprhWdLD9wYoPpeniFmnD8mBYsRBKuPnqpoC8h3ruq3rfRSXN",
  "key31": "4DUW25qZ85NV8w8wrX87yN3icYPbzXRoDVvukp2ZxfCW2bF3NLMJKDXcshfim6g6sfih57eHQ9U2NzmxTtotHkvP",
  "key32": "5ViAJy1U5XHpsjBws4QT9UGiWMTXuZJuc4undtE2smWEdux9VrjPAzBupvZCMt48xKjedSQnMiE9X67oPk9a2d9a",
  "key33": "26ZQY4CHr4ZDAk8sUQsPDfMfGD1fijtHcRoPeakyEc7J5MRwjewz9NKLLgy45JHkjW1xD36nfo37awZBLxBVLEHn"
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
