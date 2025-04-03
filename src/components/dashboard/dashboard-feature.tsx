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
    "2gbcfkzUZ5B8A4aNyKFVbRhq9NRDADntWbvHrowwovdNoncFk8T1fCNW7ZoFE4399DfQnApBQzNcvfA2resjn75C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5difTSGumn5UdJJAzSPuYSKriGUDAg1mq3F3zfhLg5bygrwSmZDBA3YsU2SNnrMewWhtJcqmhs4eTiXVWFwYziFj",
  "key1": "5tRysGx1WmzXzMUJhfwRRZsKhpKaNeXycTQSuamCa5fG2qv34RGywqTuXPhfZyhnTNmqDq2mMtZd4Q5nu9RxdYyK",
  "key2": "ioMYEwxFXzBDutmd3aEWJWAmdhepf5Gy3AB77G6TFwhFqyNA65dnEf5E4U1xCJ6U9Bkor1H2BAszCQr5oKgrHdt",
  "key3": "3dCDHjHNz1ubvh8bFKgr4fyNbYfxR8LxSqB4koXvgzrjcdaapLJddTWkkfavQpruUSNJQGCpWX7g7f2W8EnVjDp5",
  "key4": "3zFXWucZBG9AwMS56akguUjzqfqQP9cVoiVStVMYi1ZqBGFpMbTasAcdusUjQFGE67oUF5vgPFZTckbQguwLRmh4",
  "key5": "3HiwgB3tHYh9j9fMUsSbpeY1pAKNJ3QRjkgXosqq2nCUTQcDQY23uGWsPPFSdHrUGSWyALN38rG6ey9hhK8R9kEr",
  "key6": "63tyumX4Skx6X8TC1inMNDi9GnJ1164QhK34HChVkys6aZox4jR16Wk8hkZM7mVHxnhu2DNpHg4emWBosdAfYqZ6",
  "key7": "2sUQcEmjmZzt4XsMdHzfrBXkUmeGSq8Si2DFx4oLz8RoUrd528jR3NjkHLecDg7CP4wxsFnuFY2drSTp8efRDDxa",
  "key8": "5zA4sPvDr6zEzNH2WLvCgJoqqsPPEoZryj5zV9WSmXSSy5dVHJn8ErKgoYKmLv9bN4V2PvMFBqScceFaMEgqgpdc",
  "key9": "4yCkDHdTvCuSguTrWLh6LZwbz9DAW5z6zSHNUspMD5iyrTSMafSEt9r9LLUjPX3hpKq8PhzeTm7DYqnGrBDAMd37",
  "key10": "5RAVYQihVQPP6av4SNCKu2zk2oqrVXgvzGdrnjf6ZtEafWWRYwjgrwRLU4wwVfrZzsz8AMCqjgf9GbCG84k7jdYv",
  "key11": "4opXf83QuDZsdJEkQDkCr7e612CBTZzHJGGdVruEnKiGwUQ14WACiPgybLVSfedDSatQHa3qQTQZuvZsgPgNMQ8G",
  "key12": "4ruW6cEhcpvKpGSVnc26n3rSARazUYTp5hiRxcTz9YCxcvv45S6xchj9v5DLHTNWTb3ECRL4iC5C52sdyGkfgEHJ",
  "key13": "4tsJ1mw5RnV3orX93cyLFuSwnVLBzbx4zzPp9XsjfD3AGhi1BjSZrFUE4JTCYJA6eMYpSMCrBJU1nyqzxe7uzFwC",
  "key14": "5sDoJETDPkYwTuaw2q6vqCenbNR56odQDVF95vDXYgEcCGRTctJ4qtas56YoKrNNndwEJvc8Sm3DwD6oJV8aRB2M",
  "key15": "4wZ1hByvDhXQYRerVA5dRoqwZncqArbi57gYfjLU82wt82ocHdbbShraNHGoa2hjNaeQ9RTEjvGJM5SztMqf6WXX",
  "key16": "5khhQgF7bCk9saPwPqGZo5CU3b8VGfvpytRVthQzgLDDV66cjfduNekT86vp9WDJKg5XkPfFmQxPN4UjyUAGkyqg",
  "key17": "i2Pkpmx6JqBsiNyoKWELesTvN5d793EsRvQgSZ8W6FxgXubL4TJmG3ZEmEvKDxejdnvCm7YR7mUhe8PMtWRapvb",
  "key18": "293oerk9LNUcFoRsdCPDVyYSDm9eSbWgbzp5vcvMxGpBckrJhz8pDFCMj1PZqKuFeQrfUsNpHTTUF3nKqjJTUpj7",
  "key19": "5RKGnmNUMWef7ToSHVxFr6DcoqQ8wZeisHFQcCpncdfLY6A8H4YsbZPBnQCZqoZa2vGL2jeB8zGds4tFUrXUKGE2",
  "key20": "2YQuSjTHAcgo38FFtEErU8V7nkUw3CmvpNWKc15bE9v1wqhA87w9Kbh8K1gwGZRQEEd7rFq683Ksgf2Pj8VpW4JT",
  "key21": "XuFyy8o6ggJRoY6w8SzZbvfbwojWz8N2yxmH6EhVke6C4CzoWqEdKxnksiQYLmgit7gyny9f3LaE4fP9Uj3RuEK",
  "key22": "58DYtAr4RwAak3rfoS53gvTSHhV1pEC3qJgZCZmgqmry2QXHX8TjRC35dJtLggiLi2bw8NFJToFV8nkeiSbR7Agu",
  "key23": "4bpQYgX3NHkNrNeDJh7t2J2gC7rkmjTyaYQDweEuyHGXDv9iAPhB8MWdKWMYRGzS2aXDghN3Mmai9pMHauoSdikm",
  "key24": "2v9p43HGgaNi6frT4zZSfKkBmpcJbP9DKUZwWTN3kyyLMWSVLwN2RdM1RB2aanN7CNbDEyZjztrXWKjJQoN4rtLU",
  "key25": "Dq57wpTS9q1gxjN76fqqQ5iU8dmG2Nz32pwi6ehbRU2V1vUAkx5XeyM5awcY46dkvkmZqcVwuiwUDt6e9wuRUxK",
  "key26": "5jPAyJFVL6YennLC1H1WkcHZPGt6dwjSQ13UhfRBaGHtEY94LDoX9Wq3Le7VffdRvM6AGhVSFCu16riRR5rcH5L5",
  "key27": "5V3wP6qWt32RMTUZXvw3FTe3RUc67aVYvbhKRhWxSwnVRbWfiBiet2G9txAbwDkMBUt1yQYDmUGwEkMoa3ZPXyrF",
  "key28": "3rJmipS8PqhCdKLutHfnoXPiW5MKhJPnaPnAPn2H2iy2qSEVHpafmo5qkpSEguE1g8QFHSEUDX5yr6CnMjci1VoG",
  "key29": "66HtjoaWkALq8pb1hM2bPkpybHe2ozjDPBzwBcLy2WZkEZ7rmFCUyyzMiMjdB36JrPbp4uiEfr6iCzdAVtofD8gt",
  "key30": "4N8Ky6d5Zfb2q8m1AZxQ3gSFgUS8Y2u8hCW27RGjUHfSQTwtYU9Tqm6w4CGzcR28nNGaqVCnMh65Y7bke5rPz5Yu",
  "key31": "3GmUDqTmNN3z35KjB9m4ma4ZNumz7iVePAMp1EwLVhXQpmGFXEVVR49dC8Zj3G9GTcF3H1T43rMft4vHzGfR7E1U",
  "key32": "27zFsAE8AGab5Ss2wZa4qEZdDTFLUc7irG312c8UCdbuGEPwZs9QFNMFxcKMmhufBiUjhDQMktJwZx846ftYbHzJ",
  "key33": "337hyXrTnUvpCaJ7ywu4ggWXEBZJvu8xdEnao7nFgXXYu5oK1cECi4aW8uEVfGk7MGk8oKAghF6ye4kivb9YoGK9",
  "key34": "5xVTpL8n6HgakGvJY3JaCJHpcT7ivhQKKERyUKDdniRNnXWgqETSze2yvibtXN1dGhgarAS4Q2Bac1ruGAb5Dj8t"
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
