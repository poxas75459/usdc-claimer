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
    "Vp8VvbFEQXMapWoMtHxNUNYGno1BPP1iGvEksamCfBhx8Y11AefTckk2z5YkKw54mhgRqrX6oVXEQ3B6rF8qnJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gwrZ23asPXWe2HKse38QfjXw5qYipDHebghhPSZheT8WU3SaPsfCjjaVJe7LzKsNBZhTMwzytzbADATtVPYpLU4",
  "key1": "7Y7FK9y3XcYsEbgXjYeruvurQNfW7Fi9FuPpPcDuGFngS9v2FLcHBQ2tHQ3fBDE5Aqwx86zNGdzyb2AaCyptvN4",
  "key2": "2D8zn6wYqMRAE6gHJtjVd1H9UA9tyD1K9xB1m3JL13ZDaZLPmHbwYVqVZJ4orX4BUHXxxwnPdZZHwAtdLpYhVUq1",
  "key3": "hgSBH6mJeHNvNX5PLRZZbXF7Y1GVaJA1Pp29bdKU2bkr8Ap9njK4cX93qgTNRs41ZnNrutbjQoqzY7o7nNysoLJ",
  "key4": "2B9paFttL7Cx1CGccVk4NuD9vC3qmAgFDKTSjKASm1JHVLFzY1ubvAEn13J4CeT1Gm2hkBdYWvFt9KTi8ohcGRUm",
  "key5": "3yJ3FUR2T2RdZGVaWcBQwU42JDZv7CmH585eh5w37ZsKWo3WAQCS3m5ecm21qTk8BkNFH6QyPrakyALTDky69Csm",
  "key6": "3gZajLaBD1ryqEyKCKLhNdmRJWb4UVsMzTwoV2EMfvp1aYvKYURPYCy2H41tzhxeEHJVKZanyFusnCZZK9cQRTtc",
  "key7": "5xvQGC7TDWLryjoQAUSL93gGHzJ55CXtkCu4NgQEVLZjrwmLRGQXffNg3cgXYp39KZEPR5eku9pdin4k3XRozUZ3",
  "key8": "4JENzy7vGrxyhPjsvgQFrZ7JaaBLMZcws63U2tj1WWPt6XWfnhMprLSRqXmH91SYwRS9WvGAqEY3vNs3c6x484bW",
  "key9": "4UZpLtuANwgpMiEhMForwLcxY4VoU3WKGdJZZzgLVwXjXXX7W7VDzojUbXTGdZopR5CVD3yxjLrohG1Wt332r4KC",
  "key10": "4EYdG8rbd2LDp3e18pxgJymkfnFKdmouU8UqgBuXdyam4MiempGTEZyxYAyaPh4Kg3grKUVnFyGtsDouCMSGkMi5",
  "key11": "3SHY8JSTGnLJoM6S1HYf6ftj9X28TS8PHuW4iS2oZp7vLhWoACfctV4hgXUC9mXm7i7JoDqyY39nrihRs6qeAeSe",
  "key12": "5G489nwJmWvgcQoWoj3RnSGdgDMPfGdA4oJUdYbdNuX7LEFwmgGhB7KpGkt2QgYaNmjdNXFAeqEVofCZ3PKVn7MM",
  "key13": "5SMFjcMnK8gqh1uooJJB6zdxfXkhssdye4K18NVxZEvNk9JdnbUWfJhWeHtUawGdiAnTXn1oVWFi4rwLtQHxSAtf",
  "key14": "3tGQSwrCQABRRoAmR37iim9UEMPi9qsqXA1xJMcwK7rRR3AK1QW8pSGSgXq6ULnqhb8FEnqdhAPU29rLeakvcUGy",
  "key15": "2vKDaupLwdiroQi8RZGuGD3nH2wHbobtSLVJVWsfCaQR7KZ2WY52NnFqeCQcqq5UXTfiUrLL6RymuU2fa1zFiyPQ",
  "key16": "SHqxsZAPUJR6sMCAo6c6vZAGkEnYpB6vK3rq3iXvzhm5M3WVQnMGYMZkr5rHQV1CpPSFCAhKtVn3H6C6EJAWLHN",
  "key17": "3wjBGTLTboy7MAUxJrwBfzGWdvNAj6CWZpgK7qmHzz7KgcnSXrTnKrjeKXz4dnL46N3S1YkT8FEYoAiGnU1qYvhg",
  "key18": "5m6NEsRPoV8UBH5DQVz8J3NWFDUFokMs5WhM8xjCm8i9gebs4VkLJx3z7Q3eq8Bjig4WLHbjkREVFuGc5eN6YQUC",
  "key19": "4BQTDSzNaCm5oRKsrSaouVmAnz8Qp6iaGA8NvMF5ea3R4gP7GK7pcdQD8A8wAZx8vB9E2wadFwHnxZxucQTWLH3B",
  "key20": "2Q2JArSxHGxr2d9p2BWfMNC2NDpEmmpq4GY2uFFzuqGTAGgHBjZkK7vjNuTqYbtCeHt4Vr39gncU1fKvJNEUquYD",
  "key21": "3ki48hwCaUN6g4X9FjvPULjZR2jTAUKEoGfsgnBKcesv3iP5D5Sss7aEGN4iag9L3QZ8y1ZUKZHgGYwXze1Q8SUo",
  "key22": "2qzknv25wzRUXfAayzVrvMe9wDWMm3bYVVBxUxeQprxFKPnW1ea4QseabupcYJd4QTmnWDAdcpg5LpkzgGLT2jiR",
  "key23": "39QSuwXXW6CLAA4v9nVk9aCqqqe2aM1HecFB1xUktiaxmmCNcQZycoFUWwrtXdot6yfSxgFvsUbCwJty7SEagVKt",
  "key24": "22MUaTxgSNXEZw1YvxhfwuELxAhbp4NKZ1N3SAd6up4PwiNRwySQxbBzkUsnDCw6p7q2XAVmb3SLDcSN4CJQQU1j",
  "key25": "3c2VhJtYb1rj12Lq1ZFAzXbxjHNvBzdUp4nVf2V8qJWjBCLW9s3JPYaW8ASQi6nc7BSGsJ3BnzbBMQdt7gYFARYA",
  "key26": "dWq2dHtAsjtRR3gDoS4ev8UsCBzwF8GT4nfo2QFgztobNE14XpsbknJkUAvsZcN1BhJwkTjxGxTbFtx7ncvWZXw",
  "key27": "63U6cizwvZkDBbXCmqZaUGXRRoz5xRKNNZotfay8wUxHoZhzfUh8KXJXLdiA2rzKff3gLesuggMVhVccyvgQRbzz",
  "key28": "C3a8da74PtCuDPfNeD5e4a22UTjCzJaXnnjKV4kH6Zrefwc6kxTmGUVKbLmYZdBtsxiYCVqBCufWVwKC1CaSkmc",
  "key29": "5H5HhyQtteUMcSFWhyDdU1tj1Y8wuzfMFfamQQJT2zjmsdYdwFqf549eWBNNn5UkWJhaBk42ArYRhRSbKDGaz5NN",
  "key30": "3mpAphjzUu9q1b721rFZt3hz4FNdP1oyBcb54e63wDQUndiL9iNuHUmcxgvxbQbgHanR89QSXAV1BkznEMd1vcFa",
  "key31": "2Ub5rkyzQjqbm4kaP6QGYhaHFA2np36ewofzGYGpjJsnkNjnDZQ6wAypdXgx8JdJXNx81HRPLQbgcDdkZJRjoyjG",
  "key32": "4HAb6bUzounLeFoZgcZshgcch16ZpyHEuVkXcgdwtvBmwkUop6WWU4tUqx7MDgdtsDYaBfdD6kA25marPYNaMduF",
  "key33": "4y8rCRJGC7Pi4Xt3xCgscCSEv5vT1Zy7e4t8j9v3tJgYQfwkrAJ28hvQxMRMD3D7eLxPdWu6aEZWw1cWAsonpky3",
  "key34": "4ZZTfa1UWc7BJ1KcMpEg1RuC3bTwc7c6WBzaeU5HSUNWyerh9MWscMQMgNPJxGnAT7pNpfZwDXYFEimuP63LV95E",
  "key35": "2CFnVNPeJ1KpW1ZJyGiDKv9aa3jTV7yVk7SyLHpFEoc6sVFmcP4sQMaH9SH9Dac5Qcm4Kjn5DuR1Ju2ED2gdxL1H",
  "key36": "FnuQEgoJLYhaEbfiEucFnrAeP44AKps1EorZu1MDnB7K1CCNmRFedUFGYrQL5e4RGm32z2rQ9yLjMEwZebemt6G",
  "key37": "62XZs8Z5epyFra3cyvwJRnozkBNzGVibpgfUfaUepVprN11kRZRNvFUs7jnET1AZHz9EFXP7gYGZ6uM9wKyCmB1F",
  "key38": "3QdAheXt2JTm2QJmcRVGgZM1HqKNainTV8L2jsijB9XSHtonkx9jYuz5W5vgQDc845PUxnyUZ7qiSny7HHQqz4wW",
  "key39": "5LAzJd7QgiNfogb71DZ4Hf6DTebk75MpUiY2RV9ZnfdJEGekSAonXxpXCXEdW717NrYxtWhmKQdtYXP67qcC4UoT",
  "key40": "2EF1FjAiaswNGreLwavnzFrY7YQrwbQjmSDvSZJHp813d7ipL7kKhw7aAxNRD3XLyo6eirgh1zW2NfaJNMoDGa6B",
  "key41": "4TxXiUFVhyvkcXTCM1qAM9Bn3T7rEKD1V6wqGwJdXPddL83dEe8jSUxMBV1HdofNacaKvXN7EMbThffLDRLoTQg3",
  "key42": "5Ro5YdVoLJoBHqELvh7awTkJcpdAikPF7zfhmQ3FGRdW7FrsfqHknnvER8YjN4VeKVbWkebWpZmMb7bh1hkHTeqG"
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
