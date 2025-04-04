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
    "5m8NYLYLrXWyZmy7TXB3odPUs6feMnuh89d4LgGXs6fXDaP7cEfRJTrzDEfvVkBUy743sEAcypvPPCjMhXhjisjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J2q4Ptryuhp7En7LQcS5cyR6gir3n3vUze4uKdbdoNW6kbA5davME73GWHFXUqtmGyLZAWMdtpWtYcVHRqnTb3M",
  "key1": "wLrggTqT9ckWtLcHGSRKx5ougY8VLgi6eAsqiGgQaQHF5FQFkdJgFap1iLNSqpddswjq9d9hHjbJS2mSbSyUw5f",
  "key2": "NpyujKJKs3DoCfXeKzREGUox2v1NMciRJjhpUv3iPfJFT9e5zUauXCmuFdUnWmKVtSXKRjQBU5gfc81UcEJsmWm",
  "key3": "55mCgDwP4vnas1b95pSdb6YTV6xZd4GzkzcWedjXzFh4U8LrzSbo1QkCrDA8K16X3WnZdoebyq97uzXQLariysDh",
  "key4": "4gCPqYZdYtX8TnjoLdNHrZiTZNdAoA6j6YkR2KTHuPGY1Jc9eeR8fKPNgH954VR6GawFK5Vnz1U3s2uGU2Pax9YK",
  "key5": "4T52qV7T7u6r6wWkRSkLd5Gv4u3NsopVD9S9Z63v7WjuFRcTCcgLpTx5j6amkNotXfVmDgnArYFP71Bi7yRNwFe",
  "key6": "2fdtUeo4dnh7hz4mmRKoJPafzj6xJsy6qXw6QN9xgipt4rACsNhbERNGXvr3pbDLfB8TB99kG6BpxfxukjsUrEub",
  "key7": "39FFzKPMqfsokbcNWZAcxWK6mnGxaS9GtA1vwpsKFcqxb2FXm71E15vJY2yFAZa9D69A8qPWhVXe5BqTt5Kc4TqP",
  "key8": "3ZQiMabMifEfA3c4vDiKbvvLadKecfrB8y3C52F3fX6jp1agnGYZy4bZSvr9rVqSnQVFwdjmFWxMX568pagddDhU",
  "key9": "656dSi98Y9kH3ZAUpQAr7e79mzVkhuFUcrbN2gK1j6YxGvoenVHV6UUPDyzeu97K68G8D2rCJzY7rdduyP5CzZxG",
  "key10": "4o691bHwRet8UiSDD2P3BtNZryRthxTfk59e62cbXdYWY5YPr4HWMqVc2hKsEVy7XNAKWsh71TC4VXkHKq3f6pXb",
  "key11": "3oCZi1WSz4kDKRs3dpqWDPB5JJpvXmfpopP9jfURLmUdbuue8EYa6bJAFEdCttE5RYB4jQ7S9Xd7GJyLrRpZKZxG",
  "key12": "3fWEaWtWVssqPiG4BfMXrfzJgFJgkwghkjfM3MYwxBvfyLjHqzitug2drMWeDCDedf4PoXjeWuBMNfgotFRLKQ6V",
  "key13": "3RkXtvv4ByeRy4wuW3x5tvtceKvUz8zBmqs1mupznpRfkG7AyEXPtP43d8SXL2SZhfwwjVBmptMnoqiwmRnMPUAR",
  "key14": "5BFnUojnmGBvSNzK5eX8ZvMTjYGa8dbvz2jz8uJFXawhFNkPn5ch3BR98ezLGurYhjLmDEnBLfR88tNEB8U9aPhY",
  "key15": "65ptgSXYx5GS6dwBrDJop46q2GutSXYujT8GDM1MXwwbjMoYvVkrGbZxGiF8Xcy8ondh3tS6Xqu5qmXFQGCKmduP",
  "key16": "22yFnYKw5P4x5bZHNfBnx1v1s13AgRuaKdTEtJt71aaWNe1SwnvTuMUByqkHXbpk7VnZab5P3uxWSqFg4tUR4EiC",
  "key17": "2zjLUXmhyZ99XhcHEHKMPTP6a7FqEjmmErg87GPQztZ7rcpHknvwbQywJBah3arY3zCGxY3ta7SCSoRZ51uGFEPz",
  "key18": "4Z9YLtays11VB2EVVp1K1HdChgzutTDhjiEEPJizQLFSJuBNWoBfabZ957BsciRAMAfb3yHUVsHPUvUEGChgpZ2s",
  "key19": "41LD4tyZjCKetMgGpob7SRaBphDcxeTEv2y5wUhPSvvzhoqCxyYgaT9BPEz4FVRCucvfGYtLafNhX38CsTyAHMvg",
  "key20": "4BQZnjJ734ADFScQLkGXa9Z4sQZYw9pSi1fKm8ZqAwLkEd8YyXfMxCtmLoPvJHjJvLVYVEZbi57q25GodQ6nRm4c",
  "key21": "2wc3AVgjVWfQHuhwC3X9sYBByT7thvD4ZVqYrpZG7FpqaWnAe5dZe8B8GvryJgiWa7KQZ5EqYge9nu6Gvsn7UFek",
  "key22": "4vRPUECrkSjT5hudS7eUbMxscAK4UhFJ5xHXCsheCuNmyf4LJfzCewcMGyScQqEeey4b5GyJPbBevmNUgHNeS1xY",
  "key23": "3LrNkTLRFdYNB8cFb1rHgPmVcwxkQBNmhcqWhXrogRubEGbYfE8XnzVPBHzhXmPzSVzVkQvTxyPYj8Gu8StyzTSx",
  "key24": "65zJofhnoPoatT6Jhriy83pqsVrHtiLP6kmz7SY8Tf1XN2RX8HATHNQ52mTCe2cxz6eJ1wMpt6xf8BMjQ1jTbxQK",
  "key25": "2uaATAGJA125wHwVuKsAWpiaz5mQ6pfGVrFQrbNnY9EvSxhgnPxg6PDap4JGH1n7iuttHjCNQ51pChwYWHioL9MR",
  "key26": "2Xgxt9hwfEM3F69DrCwtVYiosa76ciKQcUNpMfzr6WWa3cPqLRPLGdwoRCbt9ZU7wuKJUSbVKdaBvsBJ5U2cNzB7",
  "key27": "5u6MSxtVUFuaPp7gcHasjjJpAAMT2GBV4G7TJPCJQgRYC8YMuhyrDpg9gzLhDFPcyXLDs6PVN2jgwcdpqNfVFbej"
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
