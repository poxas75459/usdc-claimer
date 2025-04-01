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
    "4DHLmERhwnHunMLkfHJ2quhqcQb97SAmrdNXDK4yxsqtwowwghrkux1QNHCuVpQtELDpgiRh7kb1oXzEYG3W9dV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RHQhzWP8EGj5otZRZXQz6pm4S6pEeLMNkT6Dn5LNuNxhZDqdfC9H24W8ZvbANjpJShTLhSbT4ydE5DFKBj3iJw9",
  "key1": "3FEc3mvUeyhdjUNCJHtNhYs5PjukZFLanmtSHwkgAAkqXKdmyf6G2TWPk4UusnMrgCMsxMLvNc3LjigC4eekUm39",
  "key2": "2rBRm9snjGHkMG5pfMGRfNdnt4CpQZ1jJwzb7J5Vzs6YR93YRb92rstBkfXp5PfVbtQQxUN8hZtMx91K2V2Cvu5G",
  "key3": "5NKrW6qhLPwqHQJq6BeEXaGvMUqYqDPXGQdGKQxRGzip1tnp9eyttCBuNt86gAN5e24VFnp8Qf62AikuwSt2nuCc",
  "key4": "24jUL4ST2xocRJgFQc8uTh1Knx48Lb69A32g1MVSkcgM91Vf7KyAaPEpHWToa8F7mvwe9rgjp63pGyg8EPek74Dj",
  "key5": "4k1juQi7tTNLT9ofxTeQMuxNTCMXSw8FwuVUnP52fVu4eVdN5thBuqYrXY3jsHCoBhecWaFp5S4PdV8yfQxPBPUe",
  "key6": "5KAxypsWtoKZ1oVbd3vXjw85bSLyDPuqPX4keCgZ146nwvfDkkxr6AKgKLgyFyYQbSmsjjkA8TyBdJU6EchUKCxm",
  "key7": "71jgDRSCwSegXVe3uL63BP4yT7Vk2bsWnDxJzLKNP83W35Fx3GUDTLMfYvRC5wP22aEC8ZNZzfA6jKgzGDvGaW1",
  "key8": "2bueuLd8vzxNW7nDifzcarQ7m5wemwFfBEP5gSFAZW3dEKmeSFer2Shqr9QZ8uNWEo6gE19jjD63anrWFQnGDWxT",
  "key9": "4dzA3Eb5SduVVL2vtZBcccGKJ9ryg77z1cy9AMGDd8GYUhjKXXc56zBBpyo8zDp1Dvyqw5sKq9BgYpjxTwNBJfCv",
  "key10": "3d9F4A4jrMisgaExpSXLRZs4p1FwgE6aG9PGBSSyMWxCUvGaxNXjAhHHE1HBkNXbdPgPpjMiU8tP9gNko3QGzDLx",
  "key11": "4V3yvL4wzBiqgKxfNJrbypWY3dwu49tamEc1X1ovVX9CGKqktxmPwCJYeuVFrAWGHEc5jfMLaVXBD6ftBsoE7X2V",
  "key12": "35GCfBfQR7hj1MmwganKzzf1vFcH9xxcJ1qWDBkRwa8Byad1jAQx8x9c2Z72RYMtr12ceaAaFr6727gz9smZyKyv",
  "key13": "389evrYXVp7mcF6B8FLwiMQRFbzLsF6UAHEkYRw5mxThpK3evpHG6aBZJuUjA65wEYjPBdG9jQij6xb2qg7RGVg8",
  "key14": "39KYPCdjcsX4qBhcZFUQfwe6Q1aTsA7QpaQoE1sxT1PBgTdkmo6q4Q2NhQkcWnA56H81ghmGhqGa4EqBxRPUfV3L",
  "key15": "uHKmRNHVWp5hkX4ds5eYRHHX4pBmN6jwNFm3ki3drt5M3j5S8Xj1WAegQAa6PxLMhQQ3Z8yDkkyzxVje6fd8Lqm",
  "key16": "oS4LdL9t2hY42W97EdXCXkySQztVWSGWSfQptLSTMg3MzkJk47hkbLwzNh8xxdMLSkA83Yn5ndcyycJnn7hFBtP",
  "key17": "4J6odhWv1ve8EdjxXRx3ievuoRj4Y9K2f8x1mhHuqGEmdi4xgZx7jmYmQGxphJvTjfxHhExRZuWJT16Nyiepdq18",
  "key18": "5VxnGW9vBegNmcPURZG9LAvZKX6qfFcv4qYLWb4KjCXDYxQqZCBQXrJGiSSKUpNRrtLAYDAfujU8eATqni7PXGup",
  "key19": "3noFcRtyin9MDxgxTJPWhtTLSueVi9fPxuYY5MFn7kB5PLJhTT2PUNyHMkiNSsStm33C8rnJCXzLQ2QxYDBCXmfk",
  "key20": "27F9wKGQGrdRFiJ7WqsMe9mMusHt8YDc3XMjzk2fGC9DqRw6T6Bf92iLLcVQWfydojN85oFr4GowLv2ESvz8Pjjy",
  "key21": "4sucoh47DszvDz4aNE6EEzaCnMKr5FAt4QoqonPAa5JgoFLEAy6pA8WYm1JNkCfH986g6bwqx9csa9QaQBco9pXy",
  "key22": "2NYLFhZkt3y7qAhXCwueUH1UWe9dqyz4NAMdwNNNgss7gqGEzCjddeGUuAD6jLt47bkuYkA1y4osMJRSzVreFoyv",
  "key23": "3dabHSpPLqV1meMrpRX8aE7DQyJTWqeDt7z9Li6ypqATGEbHNsbokLETY34Knnju6wZzFJsxpjY5YQxJU5Wjyqh7",
  "key24": "5FsqtVhqM1hacrWBtgJBjJgGMAgPZJnzk9Av4y7w1BofB4nvu4AogFtUZ4prssYYHJ1mECFx1T4ufNYJDDjMPmWj",
  "key25": "5VNGBg3qjCtfgukKYVrMMMV8LVRqc4NEYyGh6pQU9EXWbNGSW3bNSwZSbHnK44pfEdHnTBtWEuGTpcRy1y6rmpoU",
  "key26": "5ZA5vP8HZa48U2seeEq6XTSaHCqUGFjAYFxGt9eixrxyey7hsCqafe112CdT7sZTbH7re5HSbwnVU6TZzsCuoE9K",
  "key27": "5iTrWXLnTgyjHVhBCk9TBbHmfcHHU2JWhWhv9zVPZnNALw4Zq3v1qLGfj6xjd5ZFSidFNDFjpECY4r5mZ4rC7p5G",
  "key28": "5UHpN1tWXLfLkUB4gpdp7A2sQ2Ys5Y7hmsQnRMPuyxaVUav4jKAH9nhUCm6goENNfua8mkTNdqCDKVaryDe336Fu"
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
