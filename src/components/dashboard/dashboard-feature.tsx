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
    "4iAAvoqQuHpgwLkAiZzXbCNixeJqid32mQXigDu6zkU9BAkXzJR4oTT6UUyjS5fCJHQAffMFxpkYKucUMEPWajA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u9fQz1UoFb8JpcA9gs9EZoiSt4FDStASoKcQyiRZ9FjAGsLLhB56eHDRvT2zSRYjfddoWtyh6AQ8aqrpSsUkFXQ",
  "key1": "5ZGJCthTGqqj2XL2uosHmxL5PzmYLMZRSLAug3R2uySed4GZpebT3CZgoJQv94a5pyKmMm8K9JUKkSgSoYEiwCXV",
  "key2": "zaRnXGQebFb3wFDgzLuTWW1sbHt6HhASR38JnAwaZVuucB7gnifd3R1M6CK76jc8g97zxh5LEiv1vaF4JvPLmNd",
  "key3": "4WHNVUscDBYH5g4pw7uiogX2Znbwm5yt77y6dSDxXPBhvDcR1m1YzopSZvEz4dLTHFztTjocJPYrU92eNe39uo5s",
  "key4": "4MKMdVrknevMAGK7jS6jqYRgv6eaW3UWEwQMD6KPycR4Bfg6p1A5bAcxnvt7hNtvJf7SQZ9adAisDzcUuyWFuzBs",
  "key5": "3teDPZjQtRRB3UkxFgexr5EBQxXJc4RnzLnic439KENgYFxQ4xdwwbJZnctQiwoohrNX7FgqHDAG3kSnuipChrTC",
  "key6": "34yW2KW3DvnJqY2NcdMwU2yhgueHspENwsm22YZkFX2TxdvUpuZcwytwPMXRmvwhcgRajqKccK6w17c6qL5r7SN6",
  "key7": "3BqGBXY1vueon4gpEVrLYRBMLSyG3MaT5d1d1HQQPW2GSLheTsGAjgfjJvGgSPdpk3GgLWwHvTYvNAmM4dGzaw7a",
  "key8": "axwbcNajN428R4YKqP5tCP6PDqKS7agArTrKfNPjVzxZxihv3PBChQDedtqVAK9GPmbntPA8AfRyaf6kLhPybyD",
  "key9": "xRaCCFvWmccAYifFdyYdfcSNusYy8DrGaZRstihGePFkzKCPFwfAnRgx5VtZY88JNMrqEy1Mb811fdQ8d7hVnSy",
  "key10": "E859optEV4zLqEQH9U4ULtgE6uLzCtknSWAeHwdXmv7PAULsqPEvnmAZPwPMpfZZ4K9afFpt3j19RiedkDuhvWB",
  "key11": "3934TpojadjCgRFcA6kr9eYQ2sn3Sa6LXiVM9BLnxgxW6iKsHY5f8detNWeU1qiobKSSSZkA38TZC7pSCTLyCrDu",
  "key12": "4NXXV69tH7bXhygtW5oNC6nYsHDxWYhkmNCBfwUpxEmYCEgTPt8QwwbvHqrFZ5PRfprbMe79h924C9fPcQvmKwer",
  "key13": "5V4Lj4EQAXMCVHPrbGyBXZTQTjBomwNeG1xgUbACs4LWMKUU1NXivRynXf9kajjmvbQHKRVtCELJM5Rn9wtZeheF",
  "key14": "zpRnUYExvwgqoXjfb9BzG12nXLhmS4sJ6CsbjkeRoVwpu9gAcrxnhCjaX5NpQ3yBRHX1qDwk4SPYrsp8Ki5xjci",
  "key15": "3nD96r2zBQLj5t9trfxpcSgVS56qt4wmjnFouZkRB2ft9oCGuc1PWguPTWWVDU5eRdi4MoZ1UvWPdU7vHBhyaYfX",
  "key16": "2ejX67pJZHmur6NGrpEHgWfn7jbJBPfnSgBnUsjcKWsHrnZLMao1W3kLghgee3L17Gx7AtYw8RhQbF5773vJjwbQ",
  "key17": "4q9LUw12df1LvRxpttR41wDu1fwDhoJPChACZcH7NcKdngDT2KXLbT5KJA2yfHX9VnDa3nwm8rGtd7cwaCKRYT3s",
  "key18": "heEzMmyUHQX6Q1DyvGCUNA8h2v4Lttgv4uF1Armm6uxGytw5zrhjkB6LU1WTtEPNvMcAgNG5QWLYPjhcMkvwQzz",
  "key19": "5UG4G3N75ZLuHuxjoErt4AvJHPC5fmAUxcM9LhCLNkZR8ZJXs1ZMsSbSzb9purYWwUz6N4aqyKgX6gyRuzD3A3gJ",
  "key20": "4MPneFAYebeSovQYCTu9nJ1AmcMS3fMB5aVvn7jLQrsX3XBPr3gdhj7mFHk1whWzf4sV97WwuSzJ8uGvUBkk6e71",
  "key21": "5NUYAY5AUaHxmrJuqjo6h1tiAX91BJP87SBqGBRjnmERKUsQECBJ11U6HDZxbNYJZwqMLUKz2UYYjcFwqEAXw8BP",
  "key22": "2QbtgzYuMgzBFjw93yf5qaXKf3TeBVez6qQTqyAmRRytriWEWkchmeqGLRsSob7PVUXZzPNkwLeZd28Pz9F26ZSn",
  "key23": "2VeCaeLqxEMbhJ1iSL3GvU3uGAPb5YRYfaUUhnbTUoqUVrwWdLjZqbSWUBAdYkk8gAaRJmcNYac4DDFhmtVsipoM",
  "key24": "NKCdhW3U9ZK9Smd58kXpLPqm3vZzbdLwC7ixofkjz7s7j9GTgsyV2ked6i2yBaeLgJcqiftqaA57bxRG134dscd",
  "key25": "a57wvLA2jT5f4YgWqMKfT6VJ3TNx6Md3rffNhKdqdgrjq2mSRw2VrnDJKkUft2bFwgZjuSuipNDKGhNgTKfDtUu",
  "key26": "4GkJfMHgqZCLAV5Q3KMJn8qPECtPgKY8wJnWa3U8B8zWAqxwG8R89d58xf7MYnxz89Mab4jDo7VB8DvivfBMwiKt",
  "key27": "5X3Ec3kPnmbUw4e8mxcc8QSQrMzd21mYFtRtPPXctwDeomhdAqVeraCq18mNkQWJvpXfnVbEMrDk1kNTYGQDfevf",
  "key28": "4B4kRUULXmNmPaFc3WnzGPRtrEtWGdsYfZmzCTJtrnkCBQwiJt96TH4wzY4wPnUCem58VPAnuHYjUrPpwYQ1o8x6",
  "key29": "5UwNQvXtp2oREt45F4ALGmTjsUapwNddyDw1o8wthj18E5NjD6U6QK8u7AHpPzaa3ur3QxK7Y5DgGzA7M3pZZE8A",
  "key30": "3GxsZNACYTHHyJ47v4oXLsgp1qJfPaHuWzbnuyMrwQuhUbYCSo8P6Hye6iN7V3PQSGJoFwBKgAaYgC9Yvz9mqvoo",
  "key31": "2Mk5p9qtjQc47bv9c6r875h4n5eZ46wVGQMCw8Diz4J1KLHYbhtDbG4FGnNN83w1Fb3z1vTJRMzx1KDfB69yabUD",
  "key32": "58gbsZYi1RAzyW9NZwv9T6RvzXZoEuVoajz6RjpKqVrnMWLpTXr2qwjYJmhN2X2mEGgdktnatKuB6BC5eMfCK9WR",
  "key33": "3K7fDfnTabWXjuGEuZNYQi3XRCaMadF42AtPMh1j3oEGPxEsY146xJ3jXFP5iCvz3s7N115jMZJvGh1okJmvSQXQ",
  "key34": "AP4EXi4NZe5nB53ETRULTJcYDo2Q6Dwv3G3hea7CrXG5TWRNeHak2HzhqDLR4rsEJeD9pkHhuuUQN6U848CXeS2",
  "key35": "4wwQMp1zS3WoJgm6GEauixuZxsRh29Xmy31KjWACEY7yp6tZ5RNQRAuvqEbEHg3eLBj416eUz1NMfUQYJntUrw3H",
  "key36": "5fFCQqUvWy4XRySQPQkuwucvZm3MfNFQRR98Btohi4U8NiAzvSK3kKRBsvsuUF3y2TmonANgag5JdvmhtbFMHeWL",
  "key37": "4BeiJJnrAEmJbG3A8tokHKCZJGtKnZRo5YDbChDo3ww4gZPacUbLE8riJM1HPiDm6uHUvU72bMkUwZzTzoGVZYEf",
  "key38": "5wnhMTp6NvtRYPWfcjPXT192YVQRv2BvugcUh5QS9Lt6SNbjAnMR6VDEyYKQk9AGdFBudE8Eyve3ohKZLMaTA3mi",
  "key39": "3ZRNMrH2KEVNJzUgDdRGQtzskP27YE4vUPZDBCubpJQyCk1R8XZ2fYYuDnKWPLoqdQ9Bn3McTyZQvYn98pY7B1M6"
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
