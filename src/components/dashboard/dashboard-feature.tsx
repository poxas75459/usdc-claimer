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
    "22xR8u3XHsp5s1VNQJiSKu4VwZV5DWfkm7FPCdjEKRkPe2egR31xk5vafz31NVjJxDu2nogyCp3NdDCFpo7xFZkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wsd2EyMCwDbtbpL9UzBPXzR5T68zLYtogsZgtUndah94SpMJdByXnyN8SsPxXoMpHpzhCKphDGCvqcJami9dNr5",
  "key1": "4sivjiQH5uXELvEnuxXWFoUjSPAjdDLcCSMs8WufgSjwLwvC68x9znsex3cdcNFVrgBJQtnwjiccyYH94okjnEqp",
  "key2": "3hhkendUdJCnNvEmCUAn5B6ATVKbwdiZwwTxuLcQCQeeDwRr4gCUTJqyNspinU1nGT1SgVA6nj46i6BADHduifD3",
  "key3": "5kCaa59Tw9X2RTYvw44kWLp98ibyXt9JJH3X2ux5em6JRjPHuG2zq3TioJB4NTXdG5vGGU9NF1hipQUkCTLbBSyy",
  "key4": "KdBSCtXVQompdjpwdZGC82fjv2qusYjZsnjffrjTZeGqrjrDAB3Y69DvHtndQ16Pu3KbmniPfUk7W3gkzJxM3ym",
  "key5": "DgqgsFjrQ5diCQiNJRZV3xAPuzyULfXvsZKqW7WVQtfpZPgc39VNgWrsogiDtWRYuACncC34nsuyT9ANDx2dqxN",
  "key6": "BMDvvYtoWtbpEzYfBKPRpjvzGKk8pyzVRidmJZjhiUFoc8NiwxRkbs57zPt93iBR4Boxtzc1uhKbxEeH1PPQFkP",
  "key7": "42f3cajwu2d6rCAcPohpnJpnDLMeKV6qPER1uE23b9t3h3ywEaDL5wPQjgndjtaFZS4irUNjg9uonKvAzCzGbmgJ",
  "key8": "5SqNv1V8wxpH59JHmPsWHySiZHwkA6ne6FQkccUSbtuoKTrzEE96mcgzJScsN8K9k1cgmSA8SUfqgZmxkEKnmA8R",
  "key9": "3XtmAwS4vvcgSJgkc1UQWEjQxASnYLLu45TWQuTYbkrZuBSzSoAqysF4bLgCysp5qd6YtBj6NhbAKr1SLd1PZs2y",
  "key10": "29bnjZW4sMVks2NViLk473USPZZMHtw1mCGkiJVMfnW2bcsSoXMJAnSwo9rquMtj4CcSZACN7CUKW7wrQtCPXi36",
  "key11": "2QWbykGxQ3HNydJNRr8w6aUQrxqZVXmrtP14q95LJuPxGbZSCJL8gPhV11yzvyE3uAbnsedZj7QkaCTPqs8hhe4M",
  "key12": "3VBaUGjCouauDkJ7Av8YGAUjRdkrvwhLmvc5eL6K89DUunLkDjnPZtkX8au6Rfpm1gUoMRvTEqQw33BrB5DGgziQ",
  "key13": "5StGjFj1Wd1FpdM6PGPvoQq16aahFr3WeXBkCYT1eR9LfNZXvjW4CQsGSzuoCxXPoJMATp4x9MnVT2rm6w9kMoKr",
  "key14": "3w9C3JhtLKWcE6cfoNkWnDxUAhhqUe3CH1Jz2sVo2vPzoCGi1k4oUAQ87KMThXNmjErkxkQFgWG6W6eEbM5QwHpS",
  "key15": "2QptYoSeXVrRnpijBY9LoYy2ZqdXTvFWwgVViRWzL2vfDbsVvSYRGZjjrgcZHonLwLiPiceGusAcQm7qCUyETa92",
  "key16": "3DfaKZVDzC8A1iPfcbhYYMYf9bhwvBUH1BYAkVKcnBecaxcyDV7W4GixBsFNrxksFRWz1c14p1f9MnzW3YcJ52z6",
  "key17": "4GgaFKusZU7VtVAiUrfQiPVZUB9p9V78qzgDSXb4y7ZCsDtWQCSksjSw4yG2HVimb1MwHEBELELtbLFSS52oc7YD",
  "key18": "5dqGJfGZNhEF9tBRKMqJrAKVhsDgH1e12x21DigTQ2c3AJxBhfYdNm4dPxEjf5oQi8cyKst3aHnGxh9nTt19ZPXy",
  "key19": "4jAu7yUKHipxLh3NCFYrTM2dKXkXJqmVrKVM6wGgiFtWq1qXWYvS8ixvn1H6kt9mn5Fb5Gyev12CRbyPcnrUaZdV",
  "key20": "4jhaJjQLjNX3kiNqSqakf8XYzYHkhhmdfXGM8EZE7fm9sv6L2sfMcboszFmLqvPZnM9kDVMgLG3nVrJLZoVjAqd5",
  "key21": "3WQAeGX5MwDsS53uWEAHhetQc56nDoKtfUpX3NC3GsDvVVKFGMoKzafiHgMyYYVwrva1UWRzKDXsRWTKdsKxUnsm",
  "key22": "37Yu962v4jHA7JNVp3y45Bz1mr3E9ruixz99LLYfeGJk9XuTPCtYStspkqsKX9xYsHWMQWAXpM8R9NxkhZDXKRW6",
  "key23": "3qKQfSw2GhZ4qcWEsFKdNZbxFXNTLAvzFyYxYUUEYUq6gboBovyyq1txPdF3siW8v3Cpw7KCmz4JCMLKmbtaZinD",
  "key24": "6BXJitUEpW2dLG8suJX9zDSAdHC2Qe6yj3Je9TGURpK8vdiwfDGULKhSXHQJEk9SGQKSL2um35S1YpaM23EWu8G"
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
