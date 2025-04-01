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
    "54Yue2hiJwXNLTit5cstthAiLvVnVTA3FEDipdkLztKht6G33eqMNfCZ15Rn9mhRBZHP4KKvXFWjNhquRQE9kS6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UKJadSw6AUSocFqyjPMEwaJAeJKuDXeF4wJbVytHxQ174Vehny2qkURmuwDGXx3F7CiQwY1gg9tkdttfvT3eD3",
  "key1": "3EJQC4jfvxqpE3yf83iNqeHP9h8nyHHkxzZSEALMNoFYXE2y8Ff416v7bVxYpNASBd5eMZ6eaahPjdJd5DQyJNVj",
  "key2": "SGkKpmtPHX52SabqVttVdJWeeNheH3YBQzAave12bhQn82ZrJPCyPDK3BHsVhAMYc7X2yBa1fqitKw7pxzPapTc",
  "key3": "4WaYiH8KZNqQ72h2Zesxka1pVEbxqG49MEuioVirJympcgchK9uYpRUJBLnumW2WwAZX3pMZPRyXBpzHgH3y6qwr",
  "key4": "3rFxnELATgVWZxL5J3ExnhhwztgZKWNnfMQ8pBKkwciLkX1JfjyS4zxjVK1NtdVg6vCuY5LHBWssoQ7oFHZFBsJT",
  "key5": "MGjgJQvUjBLscaMc7d1iKQxoyBiLZeZtfoVpFs2JTM2EmcaPK8zzK9Wt7q5ezicE79t1NFc52fovV2y2p4NTEvP",
  "key6": "2usNFhPmFT3jVZAaubwWdAcwzPj3u1AVvzJt9VmV8eZLJTSeG4daLWmhychL6g8k8JDCGtRWzcFqeY2YEKzoG1g3",
  "key7": "4Av1UgA8cKP1s8JYTa3H7VuFo9uAxuCR21S72DUmqPRY9T9dCWMd3u2AnWoNAo36Gf13UcUNuWZ9cDFoTng7gcyE",
  "key8": "2xERmCPhormntiVcWo8pzVGpBh4UqMVRFmbWgrN3jXBTs6H6rUQXP3TeMNE7TxLFRHW6cC7GYh2zbQdawFasxDn7",
  "key9": "3pYuBrq4z9bEceyxdoHuSVMYoSbBzRFjUerYe8TjkHWZcdg8xsmgR8LG1pNmDfVg8JrwHqz3mZHGdXyh15EcJNbq",
  "key10": "4GF6o4ygu5PBo3S4TMCMHoo6v6G8QFgzFUuTfuEppqUwHEQiWEZPVhjJc5t3v1nQcVmCWxKMAmoqYPav8oJnwW7p",
  "key11": "2rj2oBqtuHkP6mXRwYQKqTSSG2A78c1TRczwtAnwettvNde8sA6ooCAaBmHeszfXa6VEFVtYxLH9E4VYuYsFRCSH",
  "key12": "4ZSX3KMTCGZnX1qRZ531f62VoF1XgWbX7ZyLmw7g5VR3nNyMh59GHrNiam5VBmQPc8s7M9Lkdp76uhtVBkaJ6zsk",
  "key13": "4bgbHfrCTdMq2PK5wNZve3YwoZANczsGeSQffLQs4NbxyvxebVj5da7jr2PsZT9kxX1X6RmAn8ezc84q4GyRb22e",
  "key14": "gY1yRsZ1gLvbkGdYA4iT6R3eZMthkFVvzXhUo9PQbGTRTEJSE5hqxiFPDysXRG1952XxUvSWVeSdxigWTUZbscL",
  "key15": "3KtRohNgxdqz5CxtrggN6eo3csVMrtsqK2x3K7Htt4cxe3WTf6zwjSRsna3igVD1QqoNLGuTCTk6FEL8SUx8Cnk9",
  "key16": "3da84gcbSqX8xSTSKinVz2JQMXnJtrDqCAccssjg8BLNxufrrE3quTi7r4arzZKbA5NmMjASvLZGV621xy8ZjuPh",
  "key17": "56AVHCLS3KqGKzC2qy4MiShoD3bAhCkQfMAYZ2p2iKmvuT4XxR4NBRv8xSE4YSjbQAYzUyByiNK9iSL8JYE1NG5Y",
  "key18": "5AGaq29YHvdx2YNx5piHT6cekJZX1FvnyetCYtp2fhvLEGc7Q22JHv4AYYUUYX1EWnQSKAgLadzr4d2rCZ6nkzgJ",
  "key19": "3hy2zNWASFSHXH4H3psJagqcxdZ28Vimfk1ufWpWn4gH3QVPHA2kUtZLjZjAgQw9bgsQtv2VwicyBavr6yegWMFr",
  "key20": "2fEjZHnQyLcgoQa1AwMPEMgsb2ZbA8h7LYdZUERPWXsCob2iAfsLv7847pBvvmX1G8FwhTCmPLuvCMCzrE5tGgWJ",
  "key21": "2WszJTvEzRuEF9TrDKja2gRGuHU8ZJJYdAxT4GhSoBeeMuH8yjKdTtNxFLuS3jB7Dv2ptfWq5JgymLcFiFRZw3jw",
  "key22": "5HNrTf7cpGqecTLwvWUrJDF4Co1Ms9ry92T6ZZLnAadPVsWkdUroSthUTh1k6VhDa3mzfKgWy8ZpnzHkNACDaQhw",
  "key23": "3kgap6xy7PKEzTcxzWD356BUjqHeFm251dhJAeRsNTV2tsAPaEJuwFsDGarD3gZQ7viKj9DUVjchyohf7UyBhwcv",
  "key24": "yovXDgsuTDEScGhwujQYGY4ZiBxEq2qtUPXBwwkvMwBzmnt7i37xvLi1LsAfnaK61PGZmhaKMC1LcC7P7nAVfiP",
  "key25": "cCrLJaZuseQfkg172Mu3azgtnKAKysKDunqkmJetXhxLFcTkQNTtQU2mYUSSn4Yz3sY4wX5uURhwr7mpJr8WWYY",
  "key26": "4Y2VkwbK4PZHqVQBxXafKAgrXRsfv1mDpykxsEKYyhFEFdNS86CXgKBaczfmNTL3ApGT5Wz97hYeBbTNndeXgigU",
  "key27": "3MyAkCpWLSrFkMwHEqurhfuKXTSbUpkM5jV7PfnYT1uWHr1ikWwpsYeSpdZv6A7r3bKgik7KC7AKfq6w622dXWDy",
  "key28": "2AkkimF2MTZiKvK2WgvFczPPoUu62RHV7aFrGvxG1PN7KdmtGa84FGc1iG7QKLx6icWqZCR2hZ3teprTvUw7yvLG",
  "key29": "kxcNGmqeD8i2g27KCegJP83qCib3zbddsuGzkAjxJz2QcjVWMRboJeqNAjgkQPDEUut2DehpCGGYMfL17Z1fXaW",
  "key30": "CrDPcPFWPS5gYUDQnHuNi6xh3rQpq5nPzJ9T8KQawdBAgxy7bLx7HcfRz756ouqgvobFccMizHrhMEmssemVmYH",
  "key31": "4gkeLC6uc3GbixbyFCjWybgQqGBMnnbSB7wbVNxw2u4jCsh2fZu8auypSi2RMiajbCnGMF8XTEiGrdgQeE8wXE6A",
  "key32": "63UtCFdCGBLgfD54pp6SyFzGfYPQRGpUxnw2AkvuhRQAPjWYNEKmQ7DZ2s2DdHebxC865EYKtSPm7rL64SGas5y8",
  "key33": "2dMS7riLub9JJZg26EguE12gLaRni4avP2MfWVmdxcemoAVciWLYkbWAD1fkcKd7aEbMjBbJDf68XYnwV1DYUrUx",
  "key34": "3atQ65XxF47Y9H4PMdUUVG4gmbedLDvct9TwnYFiLWwzxfnUj8PBnnjPDe9j2VA9TjDmHpojkuvSdPcgVf6JYe5B",
  "key35": "3wsYDMwWgYivY47LZHbb7tSs1XGAQuRrr8sRuuf9XeiV6FPZ7gSP1padZ7iSL1JNyT4JkQaACUePfZSZiWm7X4F",
  "key36": "5r3VinRECwPVhxEM1zahhegFsmJRjVvHJYsPcAY8wonaU2tE9d6QbUQp5v8gTb8nD8jYXxiXLqHCHgNLDZ86f8Su",
  "key37": "Rwf81eDxctJ3aMAX4UH6mXiwcqrRukGBLjBYNhqN7LcoQr8TFdZLnJnNxBnXg1FAiKmRKDoXw95DJVHqPdAmW6o",
  "key38": "iNmrhUAW43VAw52wsxHdeusLBYqeY9wyuhpyR9jSWxtU8oA4ziBjvRLPebaZD3CrsakQAXXez4udzaAcy7WNzYv",
  "key39": "3DVC6aiRZ7EQg6v43zFpMoKiVLXWwhc9ehf8PMznsypewXgTdHk6njHbxBXxrjrUy844HwmSHY1JRtDMSRC4frvi",
  "key40": "2Z7TjjjxVhuFkAKD9T8n36XKsHKMULXYew2GnN8685vVkGxabMgGGvq3C71pK7PuGMnahMEyH2P5chuqVz6MW2ra",
  "key41": "PpAf1gAZcC8rGUVJfVkXka7sAL9AiVxrztEVMYZ8eb3ppiDz4Ze1Nj5LqJT7FBrvcsZmuAKabUBz5pu9YQZaFy8",
  "key42": "2fRk6eFbqSRNf9q1ozpPKpPSJDEevYUNPEQ4GzKPiJWVuTh2eqT5pbzu1kEwphAksFzNoPeCZAku2FgPoZsVa7oU"
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
