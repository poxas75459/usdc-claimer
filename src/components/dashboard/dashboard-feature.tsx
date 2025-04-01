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
    "2qHe1dWFPszmw1Z5JouvEZynUCutRejRgQz87HEsYVcftx3jtKQcWCKpWWnoN31cofZaWHegFpS9P7hCxg7R8ctj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4neeAKH1L2uZU7JTwyqoaoteEJ31tSCh7vnxNE4YcC1i25n6rV6heGQhWCkGTLmt3K7N2DYwyC5nVaQQLL6zd5XZ",
  "key1": "MhSGRMn6UZfSYvGsp6yBAomYDVaqZPYkSgnFkx9eijDE4EeRikwagSSXfchECmBvnXy8P6c4oUX9EU3SHJHQEaM",
  "key2": "5jSwHeisLN6r2TQnqoAqPJUTxZWUdmMcov3dC7qBFyRcys6mewqVc1LU9o2jjqX7RxWX9Xx8NcJKZeBp45ENcic6",
  "key3": "wAWjhJEZ4NWhzkaTsouQqiMhrWPVDZHCCbLQLKnRpnNygvWkPxDY2cT5ukBECyopuuwzSrVjcBY29tEjPmqT2wk",
  "key4": "7WNPWhE6eBoqpxnYLif6UXYzSSVFS2BN76gNZejMDiBdG9ZYqfvjpqZsbsrsLbwH1EFcYgzaZXUkxmkQxRYh1Xf",
  "key5": "3xgmFqRAucpgkHDZZ4TK9fbawDnDTBEJnAqx9e2Ahv1psUvdZ6L3J1KBC7LgGWQq842LnZdeNEgVUjRgiVprk5io",
  "key6": "2d9tw7DKqazxF2SpotefhSwtcjd6hjDTi38s41r64behy2uhjrhbA1V6G2v7dqgGHQ49qNjkCDLFxxKybE1p4jJn",
  "key7": "3T6EhQ5Q2UDoPbZ5xYCeoKqXs4K2XZuUVivKEDsVsxnstnLwkQ9zvLNVrKt7ay2znpXdVGoME7rHqtsBHpFNSMoh",
  "key8": "ZsAPThYywWQNHbJC8bbmLQJcP6etU1TYb1MBxZ7738JD2kmKaQgrS6zdcxne5SsfndNp2rmUCtudyh3zeZpEFDd",
  "key9": "2kQt4gHsZrmDiudoJY7eTNbDTAXEaUq2PQLH2dMkp6mgeYyD3fdcaKqEn84vioWKfCxCgJcENgzB3yNEQgEmY5Eg",
  "key10": "216jqJyD15z12xzcEybXXcqPcMBNu1iBQVtoQRFf7Q67F1K54S63uX21NanVx7baJ3srjoZ2M3PpNNj5cbADgWwL",
  "key11": "21X8DPMs6UGd5kUTXonEYceS2Wo4SuRBWSGJH6uoMvZmopj4DipcmUKgRrdrQRmGr5S5Drt6agn3zGU2cj8dxRx5",
  "key12": "4UZeBTtDCjFbZQj2WJrsL7RyPCc52jsEdCGp7np4zK5PNfNZovY6tQhhnVtBd1xGgB9Q6e4Qwu6ha6tE8C6AfKXn",
  "key13": "31U3ZUS8jb5j1UdsvNPNMo4pWK1Ji4cG9u7xNsvixUHiLBcuvHYye9TrsN4F7Wa1Txi9nZBRUAt48LrNueU2M4Pz",
  "key14": "4Ejn1z72Jewu1dnGcHfrh9c8ikEjPGk54Cx748YjNRCRwDRJoKebdqfL1kwxLJBmuaQkNyNABGMVxGQckipF9bSh",
  "key15": "27NKgPSNUQzLD6onSo4eS7GicXtS2A8JKrkdhhTbKwjq68cs3gi4TMSiwkczeRPxwdUhF1MhC6RUJoR2yehs3HS8",
  "key16": "4QJmA7uY8ErQcrSMjhNfD5TZXHxzFpcjVsfJaudxRWzbX8234Mqeqma7zC3xY78CapoxeTn7KUsryrsFWsQHMYei",
  "key17": "3jiVYLssmmE5mC45X7qv3gZJZGdxTLAvoDWLB1r6djiXWJGdJhoobBX8DSrSymxBWKi8d27eSQUweHnFrJsMunDz",
  "key18": "4BFmdQ8jFqriKYZwPGyryMuxYcrct2ormHgupoMJBuv5oTysKu51A3hFySPwWyHNh8aNtjHzW5abn432WZkF2ak3",
  "key19": "3JHr4vq9qFSdsSZJxQCrrQb5jNGpdD6KJpUuVjRnFvUSw3nvgZjy6anCovDajawTDY7ox8g9US7RBXPgPhB2AAY4",
  "key20": "5yT3t3gYzjKAGdq6wwnEmvEUArU6KydicDrS9Ky4Y1Y4fBvb4SaHc8wBJdSnvEnGQ87nu1HrfCZWtgeAhxRQfdpZ",
  "key21": "3YsftcV9HNYVNq9RZhvnBJRbLTMU6Q5wKsVXP4pmH7C9NPBuLmG7FJ2ZXM7yta9299GuWtw6KwD2aYiQaZ4NX7Yb",
  "key22": "4LAw2yYPzpwK4K5azJVRP45LPrekQH31BC9MzNEQZNeJFCHbJVJkGZ2Uv48oxz6E2fDLjWr4VXj4bVBXLM6jcgHw",
  "key23": "UVcZfUkVQiY9D9T6cTcGdMCvi2seRDheEDWtvNs3AQQHwrk692JNtDV17hpge5GcnWnE3gX3GKVk7H77VHvNtL2",
  "key24": "iyY1eK8MzN9DUZsQKNBDqnubjCHoh9tbfUg3Bd7kjU7Mp3e18sD6Juv8avBLQtMgpg9gKXDm1qVdNHaPmwgdTrN",
  "key25": "3yvsiub2eHuzPJNXWzffQNRqhUBaxbVBgFMeNQBNVzrMoD5yk1ZRwYjhB3wKgzGDiEfr9yXxH3Fb2jnEZuFscK3y",
  "key26": "gLcYsU1UHo5ycme3X2x3hWG62GneSyHzUCfzkJVqpRDBGqCcXiAkXBd5sAFz4ZSYFUDjZpe2pRkUj6vHJXWkSnH",
  "key27": "3Wpk8EgFHUiRp5XQZhkSmco4MkSmi8u2w4JiZGzra28m9hvYQ1795jTbPZ3PNmkkhM4cueh924Mze8kWptC7uoHw",
  "key28": "4WqLqtXwg5YPx7szhvWDsGaQCtkGvkqmrD4e9cdDLDSuZvEEiWTE3caG36Z9dbisTjvsHrNianvVyFgqcFUFLp9Q",
  "key29": "5Yjzxa7ET4r72xL7F3MVujHh7WRfDLWiarZQ42CPstsc7iznDD19Rrvx1onTfS8gVMdoHNXeCjnCJ9utuUjhboTP",
  "key30": "5d1gSY7mm25ta2xw9g2WU1kuyY7rpYV1rfSp4M6MHXFTaULr85FcVhvg23ma4N42Jrz3t5Ag3ahMDN3TCrpwSnYa",
  "key31": "cE8EMgsP1RerS9uwKDeZuAX9hrWmQ2yULKSvkETq4hhNysfCzrUeqx3xnfUmRkr1LRNuWjK4hrDdat1PL3hbP2Z",
  "key32": "3wpvCz1KdgaqafWnC8tsjCxkUJ4cLZbiwHmqyW8LN24K7m8BPSfUeHxYXRsVDXCEYTNLAWPhSynaswP6YLX9cEUP",
  "key33": "2ejrAiohBGNEeb9q6TaEpqKBiRzYm51kWHZtMeyqZd6HsaKMj7MuhZmxZ9q1qrqvEQSd9411K1edp8fiLxgKKMK8",
  "key34": "28RnYZbeDcyMf1FaM2kWrcmNGhXvfnRQAnuxgeRrWBpgK88aGz5Z7koGTynPUMnJDzk92HucwCHG95tXPQDX4awt",
  "key35": "2QSmcBJt1rPYJGR4qyiHXzfCmPtDUv3qNJL3gdt5fqNw91XXJ2PoJcEHXipzQzCUwYFZqkahfSX3viZ5pjFamM4m",
  "key36": "39T1QYFujc6MrVRrnrSFTToC2y8fWRQTLuyGR2nusVAAFFrLQoSwckuJVRqqhJQoP8nZNVy8tP9bybiDVvY3Uekq",
  "key37": "3epF5B6A2kDgwBg6yxhM11QgZsPRSWHAbSeMa2cR11VPyL7QQa3fkdAvDovA7D4biw4TGCzbxY8Q5X5cEzXJQPG",
  "key38": "3ucRzUWYmXUfSXApqXPpbuVUVNGUaztnZDUFfVZH6RPjmvKEaEoFmSGFfSWMAMN4wHfhdgBh4vXQ4Wu1bxnvNBWJ"
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
