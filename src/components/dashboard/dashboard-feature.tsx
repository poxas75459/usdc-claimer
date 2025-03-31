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
    "3SRrUkUZVS7b6FPjRWRCZaDyb7FrriBmNbXAvgaE2QnZJPbcHaG6bx7CPoHJuA8x3Bn3ykvKchwwnAcJa9ydojZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srEwtuRfiu7x4vAsuURfafTL6K6nqwneJNxMPA4NERWFZeAsfzak5AnotTD43HjzC4CYWsJ7rQq9A4CF5z1LtZL",
  "key1": "52fvjtWoFxL8ku22DGzwX3TvAKGPndTm3Hm7vzYGhwsz6aiZbk3tJfUo1erLRJ2h5H3yJT5T53V3jFgfBeGhAZcq",
  "key2": "5XqTZd5khuqCeouCSNUNf7PVhwQaaKR1N3KtXrNnamqTVYezecKhtDSGjGAWrPjg5uayRWu9BCL61GapYRn5nEeX",
  "key3": "3VFWFgPMqc1QngrX4ozao9M5GHqZLvEaWXxaJfUXkJQ2fZhuFgCL9BnbW3c7GZRZ4xPrCgPrkcLYg4dZS1fWprFA",
  "key4": "4G3KYapoztfeeKbGD3ZDozKuS2dmspoWA1Tvs5AtdrxKaiDq3EY5FEm3QjcgACQrHmKx8Xh24YCPorQQKd3XqDt8",
  "key5": "3n3wUswG3GCQmwagZgyxgAiHXkVPujjPJxcquh2yDatb5CtSQ7C51mNbYGyFSqfq6FhZL2bFs7xCDvWMixUCtKwG",
  "key6": "28vvKjKiSgb24o9QJYrqSwLL9yUvyMPe8ANVjTMYpf7xFSVEFFtxzvnEVVTTfXG32vorfJp2DHF57w8gdcqVj3AK",
  "key7": "67fhBUguZL1Q5S7M3FRxiVziQ2DR23pFX1zBirpHVkotruEg2ryA5SpQuyNdzsHc8FaQZfD4aPeoskuSUVjWjR9h",
  "key8": "4SVg6yP6Sr1e7G6i4fuv1mHFzdm5Jtc1f9mUYD18yt3wy82M412h6VnnG8rMw72juzL8sDECNZL5DTcJBnRPQwX9",
  "key9": "3qzKWy59PC3VCsMhNMpJ5xnapc69b4A8Q3dgK4UfU5k5ahS8rUxdp565RdVUoPjD3Sw87fiR3wh5UYDH2vQPmydj",
  "key10": "224UA23hsnxRpnGsKC1CJFsfmb3BSdimbjuXFNHBSB1nby2PxwoenLb976Z3MCTLB5K4aYfr7ytxij8yjEm8m56h",
  "key11": "4rfBjc7BYTJfjNUVEnWZw16UmLq7YUArL89ootMhr2jnyY6AEyEJBJ2oXms8N6yvWdDnmaUJfdTSod2t72DpzMow",
  "key12": "tFLzw97ettD8Auia93n3DhCCPvqLof3CxCdPdJbbjm7nsWdhpmJJXRVZYzaQYpAGCkE3e8JW3MXwz51RkkJfZQ1",
  "key13": "2cHVGdA9tPuSDGGyvTTvFrhJsebvCzNMa2CEHmV1hdEZRnNoNkvtBbfiGoDaQNc4hBz99eNHm1XDkiqWX39Kw8hB",
  "key14": "2TrfKNq2ochTUAYsNoHWrc1veFAyyDLNQMQxzY8MX5dHcyVHy4iRwJwRQgj9DwDXMRBcq1bNL5RJHAqD4TYAVATw",
  "key15": "GaKJ4BBhrTyVEQdQqh8nBrRWSK2VSwVRPzBVUjKdydfqAGm8Lcvm1wL4yoAtvPuDddwSGDCqmZEWEfBLvtLHMt6",
  "key16": "4CEpFHyrjPoGwPZtyUWo9c1Hn5gMsXZX6vVT8yAS1fD9rGrcT2ogaM4cH7eYCippw3HBGVipvYZL4DFbRm67aT6G",
  "key17": "5wXG86M4JiAqCqPEcSba9isRXvJ4snouacjKbNqy97gtBwgtYS58RP6GNvsreRQdWaxLjKDCFsQ2RdU3ELGFDtbR",
  "key18": "3nboF15qMwmoA7XLhRr3aRRGM2rQFUSnRLwrw5qjnDQW1rqpRwerw84yJU3PdxMMa3Tix7RkBX6YoRYP3eWRSdQU",
  "key19": "PVi8Ai9HEnHpyomwsL4VEa4jrL32TR9piuq7FyCTfYLJ3vg57kfQ9VpdgCL9mG4ctDPbCFmAjzNW51gM8St4tnC",
  "key20": "3K3Yu8XkDMzLAz63GoRMfyJexiwLLoYef3Zbj9N6wqmGTAZhFS53BKr1neVQNoEJJHuvFFc9xBcMr25pjwCUwDmh",
  "key21": "3yBSPK5J28cAzwYumnM7Bqn4x4qjmq67LRAVMiv8vXcTtH3iM2zArXxa3JbgDJELHMF3vNQjn1YwEGqjhmNhgYZe",
  "key22": "2EPDswkXKLDvrMZLxSEQD7jqGfqnscxgQdsXAYFv3VjhTBCpJ8Ps5ubWD83vn1rgy1am2dYA6NdTRM35C6GGgNUc",
  "key23": "2wiHE84dLbytyERocsGNkGR3ahTNnBw2NbyLh8TDmRjzbrnG7r7gr3VkM86aYxQqUpXE6RYX1bMguNeHZsfwjogX",
  "key24": "3FRFY5SDDYux8226rmB8xtwiuifzUuLU6erH8GL1BUzZ66R7jsAdinPNcA4sn9X3sHpKw6hVTCNk49ccY7A6KpUi",
  "key25": "3ctTsXXNaRsLVJA2d6KvcjZ1cp2bv1rnddr8xJm6zSGvizxYLoGriLm1VBuyZz5DhgsBeRbDFDV1LxfXCT9zYG5z",
  "key26": "38K2SLbtz3LeHiJ63qBtjvwkq6vsqjN5yaP8jsuQ3VTpmztwLmeTFcCXw1aQh6ukQGaA6Esyenh4ZCnbJKFd2fSu"
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
