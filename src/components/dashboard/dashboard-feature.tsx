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
    "3BgH1qkZwskU3QS7YbfLAThHkwL9yrd9qx1ZNkaXNTPxusYdPjw3hEMuzvQoug8zZMpxU7Bjjw3LPLEQU7PGxLjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iLYxmSPRUo2X3EETgn3drrVgd7jN2UeZmLqHKVPMgjGmpSzuziLpH9FAydPCEpAkz3vavRhA9RtYPneUM6JJSeR",
  "key1": "23QVapAufUeDzibRoDpGAEKSdsRK8P2edg39XyKB6X5iCUEJqHxKmv9A1cMB1KZChtAY4iseoJEDAXgZWvmwTyTk",
  "key2": "KVjfCfVdewsxPGWLyrWMFdQ7pKnbypKuimRA3PLTPvsXepb5ynKUUqN9Cq94eviT5TGruZwbhKe5odxrZhjWtPd",
  "key3": "wiTLR7QJr82HL9SUadpXHEEy8qPM6F6NLx9Kgi2GGfcoqLkwAhUnsaqJFmekMSYGZj2UaSnu6SJ7GS6jpyqsff7",
  "key4": "4dtuYaNh1yRrTanugyVkGfyiWK1n9MUSjGnmw97DVRWY8eCK7rf9ZLJxJ5NN5HRbwq7LTwtWnczNwHummg676UFP",
  "key5": "4dfsWXajbwa9KBgBk3oVUMe4n5Gpmj8fpF1BZ5u6H54hQCUYTPbbtYxj2DmfkX2VdiAkGG9am5KuFUaUNAWKCF16",
  "key6": "2bG8cHoXpJPjYyA1s9mvYcSwe3U8MbfdRy2YqfnYk3crdvr27mNibbarmCX4hdMvvFpxpZpEDp7oDmhcqya5U5PA",
  "key7": "3afGVfohJ3dxUhdsKFnE7aSsvgSfcykWcFtLHr1Ha1QjWxmoN7go9B4zUWX37b4m4eynpMtvdTfZAezCFnKZc9YJ",
  "key8": "Z6cnMX7ubNu4LyR8ELM7ekyB5Dp73ovw7hq9wkTwEfCxPmasZBxMf3fbhpyzfDjgzvovgujkg6CpU6sEcvQSvYc",
  "key9": "4ZAqj1BWMpiVcwSEgubE8t4FQkD8RFGg799Bz3E4xRd3YhnYnC1pspBMzHkaPsp5hCvyr4ykirWgFYnaXKbngcNJ",
  "key10": "5hHstYE4h68jRcHLhNXQAVmtu6JNMnp8UER8piQWxAxrP9E8trAvPZtPXJ3XsBRQUsCeb18QLaMm1cxhDrMSghfj",
  "key11": "6ZZALtEbQwzsuGvZ3hQqpz4RRrFwgAuV2pY83Frso32RwXTjGX2J2YHBnzkvgj6TuT5KXoAZEb7tP6cUQeJmYfL",
  "key12": "28gedDBExEN9RHpPsNeQHa3LXoYk9G6bxnHwVCsHYxs2YTeBtJMCGZDT15TG9arKF7ufkdaQrJBHy2ksWmXhmH5m",
  "key13": "4n2e1XBeTdq2ZeXjkcE7s6DfvEhU2TYEN87eWcWx9WkBwt1YEohZenEQSKSmGQ6WY7fR36e7eH3qn1fQbPtSH1Zi",
  "key14": "3tf8xJuFjWYbiHexbVhGrto7i2hMVKTMu8yQ3fccWSkwjKxJa7hMnp71fgbbFggyf92Hgjm7EqggDrTz75ikLkMQ",
  "key15": "4M3vHUWTF3G42tqkYWFXKXeuMuka2qZkH8rze77iaNy8uiK4rTkB3Ms1LQjyaJqVrq2zcAjZx5tD4dH88uWT9LjT",
  "key16": "4LNpCA3wSwFvZXg7nNLs1C8YMBK5h6S6LAutdXPGkwztNoHFBmbwACSJyr3zw4Ssk2Qgh9B2WV3REd6eEn8JVT15",
  "key17": "fkA5Sg5684RYr2HhJGP2EzUeCmaTu7pXujAL9VXc5pCogZcEAPFbTgsbpqRwxtc3mYSNST3RwGxFwTpVgpo16wu",
  "key18": "2hcUpYhWYS5kSa8ygpN922XYUnyP3D1ce75RdJxvRYJanKKys6UxNTt69VmCRo527rWCDFYuKHQxxeYmPE5xQHSr",
  "key19": "4a1FEuw3LitTiFomDGwBKNxSc1Q7ojmLds6yR3U9PETLVbtEYZY5cpt2pyj2cLhbGs7tohr1s6y3qLMtfbjVAMGn",
  "key20": "2Jxdxb6nrkkp6JfHjWEJMozwnirFGfusDppc9oV8s1JykJrYcSPWj2C8Q9h3osa7jX7bEgqRjwF6CTrvfFFdUeVc",
  "key21": "2xgNh7UJNXKQpWycyJKGy5Fr1CNSRgpY4xS6gMzmKPEzLHDR3QnbLmzuLbkwKfyNsFCqbR3uMSBcHAaTnUSK4QGy",
  "key22": "2KSzW71H723Hu9VzbgK2dpT4PPvoP9JXDXqSFimpPx7jR9BryhRr7ScaG9MYDKpxepdD3EykVpAt5RPfWTUz4sr4",
  "key23": "5fTBUdLTQb4yaE1JjX97AJbq6FBVYNAtngzQRLkPHx3SMKVc1awtgNquDi7quK5YU2d95q1Lb5CnYCL1BTFDJQfR",
  "key24": "5hMhxsvLkaiz6R4JY2ZckEwgaFRfZ2vWLTthTzZTWzkPCqpDsYHjxmDX8Y3kW2rFJBkgeTxE5e7WkZDxdtqEGSkB",
  "key25": "4CRUeBhbQKxyBQ14KoqkkTjVUMn4wk7GQXRyCEG25zF3LwCWGZaNbR2fDM21ctfXVTby6dWNEdorJLXs2JFsSnAi",
  "key26": "5KifzJBMXVTxeK1dWCsg2rmadQdZzYxrTpM2L7TqQdNZdsycbk28ovDzeUMgjaMtKUyzH1VknLyFCwnqcuGLd5tE",
  "key27": "4UWTpRC2vYnthkw6KdZSXtTHjMYpPqHU8pYHGfPnzD3SFBmuKWKXkYWzUyFgKhm9mBG66vJuXcyxMrQtoTspWMDV",
  "key28": "3RLR6jWtb3jEP3SmAGynzf6tPB2Xin3gpnBqztEGoKdtDWjJLVz3sQe31LpSqygrxv19DoJfqbisKSEgo5XVVaJ",
  "key29": "2DS4jgRqQ5xpJP9wwJd3UUY116ZphdeT5n1q7FFvLwAX4v41kLRcWDEn1wX46qqrt4FMAj7dckbuayVeFXgbFPLi",
  "key30": "62Yhbuc4G7hgqsa27o8amcEBAB9Ubsnf7BdMnJComPs6R6apYJEVDuuRHWyoDtghvXSQrAtSWnctSNVvaSeeqVUp",
  "key31": "4kssSjdPGddpbhRLFQLEMAxxMxLWjSgRByXTNtnheWK1CfyFdh29cxQar4UGCySkNvM45j3tp21diqx7bVsrdRbr"
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
