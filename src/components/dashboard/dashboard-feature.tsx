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
    "54GcAJ31E8HZ662tdYAWXhAbWTtQE2LfmeAwc8NcnAKGk32qAQBMvV9gr2soALSV1ZYme5tanK7L8DHCCpgNL5Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mwH9iNRo1fu84UPirY7E53W9PvYb8PYy5negJ1P5LwEZ6UbyD4e1d2vMBuiKJnCMULCdw8FJDJsf5BHtmurVX6q",
  "key1": "4rrWk6c3QbwXuAsqXzGkjXA5PHz53id8SfeVDy92b8BVD7dQzVCJtBbPH7RjuFhpJeR6uFWsKGkSQgwyXaa1YTeN",
  "key2": "4uUSEivKVw8tHvDrowCty4xYescvq8qVJFapAPaThttkdsDdwv8UYFJBBHm2sdvQvdMm9cm4AQgXmpE6tLzEzrso",
  "key3": "5FWg9KDVaciXRLRz6m5Sp8aRJz7v2io1Q6tPfqvcYyGKQpofL5VoN6n1sMELCe7fB5zZLVjsRAunnhauHvJXy2Qa",
  "key4": "339ZQEbqLdhVRpXt7rJjsvmV9raWdVaS91ZDFWMkRgLiZyESGo1Z68FHZiYHm9YWJXL9vGaMRE9YftQgznN6Qojd",
  "key5": "4MbfgitKfSr8pebtNKv89efQ4enLJayAT3xDHZCWbn63VAh5a4QZnz4bAqDK94aLFRL5mwP3pGgW86Bi6s84g8tP",
  "key6": "2rQ89PTYRMeiAkokuWZc1UMNXXGjRwZDfwG3qFnw2x1LBbTp5tEuvHG7M5CQgGYc8Xe9xPSQVFCEyamqLP2JPH5y",
  "key7": "2q2HCDJCjMHR21NAPwUR3GPoagwpFCXKGTTpwWTyokipU1JY6NDyeFiEBCNh9BHXSEs1jjbUcCAshiDWEPd1whTp",
  "key8": "3JsmnFpwLPExkRWeV9vs7o8xBZnJwx3HZy9Yd5aFu8QSE6r8Law5incxyGRNpM8SbHL9x5f3cTnNc1BT4zyvGxaW",
  "key9": "3HRE6Z5DAHWALaSF7WVZp86yk5uYsUr8gUoHk3sk7p2dtbZNDwUaC9NDswirF2VKuP4BPcHswZ3FA3sbLVprU6r6",
  "key10": "8dW6L6u4gDmsw94jWpE53CKziiMpprGnh4SvksYVSzUzWtYDBKqCR5hQtEDbKXDoq62VY6F3okJJbjcTUf41W4P",
  "key11": "smBK1jGKkYFQMsf4uY7vc9DB5GYv3QD35oVYSioA1bWBvf73Jt2ptibnP11gMWK9antAuZVJDjH8dmrdhQXGhem",
  "key12": "2xcaL8jcsxNM1taVt2Y8qCXaocSGkqANzpWXQAYMrZ9sqqnUuCrLW6Np1pcCxA8WkTF7zfgmLYBGY8cNdUT2LhvB",
  "key13": "3TV55XirAUcuA2cJE9ZoKsMWANNt2Mt1jm4WT24jQouZPb9gfzTqx4paKMBQ5Abu7eWbtizvypvMpeQ2sTzdvoQs",
  "key14": "tFgtvktJBCsq2sGaHvTGnH7xaAwbM5iySsSke8K8pHBDG4YuZSjzxw9RiZFLXobgsWMz4txGstCcy22JJWuQ1Rs",
  "key15": "RptCaaqk7NXjuNF7tLbkUobhkQLzCSeRWfh2smDbV2tNaUgS9NDoQzkaQpnFP1RuRcbsPfGxCTPvEGNUeh3oGbp",
  "key16": "38npE7wuEw5kAWNxcCQ8LexNQrPCvkqCY7XocxyHKtUh9G9mT55y6JKa9AvbqQDLtysnHFH79sL5qnAR7W5FXK5M",
  "key17": "2qmXDCAVJTH8UX7Ha6SfxY1mDLxmfjSZykn7oZU3BfGEPcqLTu29K12pmiDR7wEKSYVt3LQYBzGi8AsrC5JxQxAP",
  "key18": "59V3Dsjc1rMw5hnUDCPnmDPwG3KVUzjYb9GcWZweqMwgP9tnvXdDZtsCKc7AQjfPrk5UDer1Pq3qxj2QLdGNA98Q",
  "key19": "2RjXPdBvKqYbJSx9Hyzjo3PZz2QFEaKYYfzXtHFb6ngS6Go4beD29pa8ntuFYsrWamkYCskCZEqDQV4HnNhVTHKc",
  "key20": "4od5DJPH5f7YJvSzLJFD9726NCwJcpvjMr7mXBzqSUEEfP5xXyKSkbxDxkhv28VTT76eHPfxqHjBiY8brzpsBdjW",
  "key21": "9DYeb7uJxJo2nVkHsmo5d9zRYd6o2QpjrMf1XNXi1mG18yuLMePUEteSqmZzFR7sn3WgyDXD7ktzro7C4faJWNB",
  "key22": "uzqa8kbP9tj5vFLpXXpy9M6Mtvksh6fWoaNDrJKwMgVTXM5Tk8zuj5Re5azFrA9dW8fXHyPhm9w6mtzCcF8sY4D",
  "key23": "3K2xZgbG88UCFAtBQ4Yr3N62AGZbpqy37FyBLLMDXEDNqeXNHQM3X7uFT4GFWSauADEk1qqBc1pPS6tM31rMuui2",
  "key24": "471bimHoxRv2kcKjiA3fLM5gJo6RGjoHFT2L5n5Yq72qkEYrCr5bguK3QAex8TLPSi3S5FrLgru2sBurhCLMMtym",
  "key25": "3rfCLvXN7M2XgM6kuP7F5x8dpnD8KUv78UjGjuTpCUckEnk38hrWRRQq9UJRVKavxiirnaucXk9HtrD1g9Wci6ae",
  "key26": "7vmLTGKS2y4Q3jR3mGJBvdoArkR8V28mGYb9ZJgWxi7yvrkUgYvhyD7UcCoN4NSKaWC9Ep7aWeL95NjzbrmXmiC"
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
