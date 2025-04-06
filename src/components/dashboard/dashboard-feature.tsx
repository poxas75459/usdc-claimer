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
    "4LRKgkVkAqgdFJ4uBTTzzKk8XGarPB6YUjCwDkCJ5JgQGiocoXPoYLyjXLjXp7RfnQiB62ZTN54YkNDmYQYCM5ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zc13PzGkcEvVHnKcVJpASRQrBQLVFYK1j47UvJwMYMBQmMd7MSjV4PQt7TRo7PmX3wxS1o3hFr29KU1mwpYTiWZ",
  "key1": "Hyx9kSHzqfPau8xnUGSo8rVg8hxaBa9MnJ13a3U1k32YU6TvDVkRXqc8NUFBDFQXpZyJGuNsoeZPupR1p9B8AbA",
  "key2": "xU72bqv9EDBxecgjUeM87ffxyV5ovtSgX3pBTM1YXcb6kAAiDsKe4dww9oht7vt7A8ZDCGLaZw5DEUxKMX3t9X3",
  "key3": "3R4w8oJ4eNzsJgVThFPR1Vd56oZTPEzb9H4EAbBDLzJiMfkDLfcsLhmWaoM3mmR6Nk3bN2XLVkmu2bBWa8VbfX1E",
  "key4": "4zBxSa5NE9rWH3voyay2EMiTr6dveCJodnLqpcP7vzvWucyToTBcS11Le3DdZEhyzQduWZA9VZayxTZgbJFddv9x",
  "key5": "51yuiAuRtYziSqCVWqzjEA1JHFsbeiXKDbedVCXWc2dfPU3eur5K5rGGwCMbE5abQa8v6ASBWU3cEQyXzSTwP9i5",
  "key6": "2RHav316VLyFGjwtXG3KkGMVZ8Vdo5aEd3y7tp2ZWbvWKw2MKUPEEsWuQxhAFV1C8hmjMf7SeUdz1xcPcxBqp2ME",
  "key7": "5hoSnoaRZtHGKFokZooMw37nCJnDTeuryNgaRTAgJnd9LZbkbhrsCgAKr4f9TKnNYmcTeYeNrLhJSiTxg45kHeJT",
  "key8": "55chYg4kme4wBgLqUjJYq27zcd5qecWfVKS4TF8shzBf8GtvhLZ4M3NKZDuuiVEtNVpfmuUEg8y1ouPTcrTWerAH",
  "key9": "2tTovYui84RihQtwxp4QCwdZySgAfjsxdbUmCZoZ2koSCEPGksT1MspDYyiC37ABbj1reXeP7yfkv18RFyNCTEXC",
  "key10": "36nxn5NHCBZzNdqjn8z5tUHfvkkSU1VVnJqRY51APySE7id7SFwt3Pgm3ft6CVGfathL6seRR3CocD3KpZ3VNSjx",
  "key11": "52vyUXBu9k5pdHqF6qiwkTEWesc18LBsNq5XkJND2XbWSnMPzvd37SFjYD5g47aKYi4Xpbx7Fe2nTLXK5SeiW7YT",
  "key12": "3gosFWm4ESTgS2HYwJu5fWVTX4J2LiD9jHiafNQGmQXRYGBdkggJwfmikkh7CjHun6W91ymFEiquJhXiJsLznkqe",
  "key13": "3WK3noZ5Yt2v9xCgRXHaZZc3d1v5ah262U1o89iB6W5EJP5LZiJaBdtowtkHPpCoNRurp6ibkQzg3UJ5te49boic",
  "key14": "4dzYvdAPqTeUB1LCB9oZvtp95CMw1n9VrFXQxidrnnCGVWTwsE76NADER3qrna8DU4RFvBfz15YoYh9MFfa9h3vC",
  "key15": "3rDSR6efNPhsi7JwiohaaB8ugCNWyaoqNCzKQcnumDmgP2WS7HPFDcKYLjQaa3tEuhARqGh9gURA7X7KXWGfijQ2",
  "key16": "498166kwh8SsGUyrbNipooWMDhWm43F1fJrtogurMpnqxAAt8m2T3pJeqtiV6mW99ZtRJeq6vfApat47YGG1s7vb",
  "key17": "3pRD96f8Aw1M3k126eER2QETiRC9v5736Zwj2RhkgVa6SyJCsTWTNAwKR36FPQovkhHPMXfmuZktMkk1TMGmG3D3",
  "key18": "4k68YTwRRWyPZahwUGwXYr6i5q2xjP95oPEYrMsjwK3xaYqVyn17NdvXFj748Ek8rn4nJMf9E8avCXhzQRPsv3DA",
  "key19": "4USz4GbGmKg3aYZeuqiW6H1TqJkJ8QX31Nmm91MRaKjn9G1mH2EDfAPoHCHehwCizsu4KaMnL49ccijf4ZY6be5b",
  "key20": "4z5F9Kcm4p4ufcJCWwvjadjh2xvVnKfgK8HCWcV1LccxRfh5BJmnpawHoS12zusAGJVf7wAGXXSiTgcHQ36QAPku",
  "key21": "PY6qJYgQL8PMJaNk6Xgb2MUNTcknBWRSiht5Fme2mPvN2417SoGycUia6Dr41qgtLtrZKBAQXNKokgZ1xMA5PbR",
  "key22": "5ekPPjcL9jFZgXc3k5Nv4CFXvJTZsQHfyHTq7yu11WvTQ1v7rP2cB4nnBUDsUPfYbFzh6e6EbmXq8Y9R29qaBJBE",
  "key23": "Rp2YW6ywbeGP3AVahqvnBcd1X5qWfrd78f9eyyUXZ9GCgU5qa3cV8DHbDnJxVE3r5FLiXpN8YUwZhXrubAita53",
  "key24": "AW7HeV3YRkEiijJufpLkwFQc6ZYm8AbR2m4HvQCNCYEby75ZrGrB3Fm91EjUarja8P3MXCrFq6iA65p5PPwcFLK",
  "key25": "wJKVXnLrq77gUirXZkaphJX7ybzXJKX5nETe3GRw77Vh5dei7PQ5tRnozmiHPQ8sAqbXHDrE7GC7Aajz5a8j9wE",
  "key26": "2k3zvmPa7HLmxtsagGARHcPdNUFHwgDndtV8XsCxEuSg6y6uc8d6kUXExn3yztG1nDMBKEThQqSR2ir9fX8Q4BW7",
  "key27": "3VpSAip7qsXY6WquQspcekCMRPfSThU8SkrBV5uSwXZbPuqNq9ymM2ojodPeKKGzA38aR5QSNCqyGNkcQbCMTMF2",
  "key28": "c5v6W8xWY8c3pnhCG9Z94zFoeMRV5isSaDgBqrJ1ND6jXeY75dGRdwcSXooVXLSMkvmFTY7MuV1cMMGzrPKzkMv",
  "key29": "4ud9XK33rWuRbzAGxTtWaNQmpL7eLy3StVoaxRoBT8LPdPaoCdGo4ZzhKC4yWDs3whcJcUxu7spJ5mxzcqZuscw1",
  "key30": "3TGgJanUr2miNaiSL7vzcBzcvGttVtQhaJeYMVzmbkzcpCyvYbo7unzVkbGghyEFgrrkoQx5vRUexKFe1qzwW14U",
  "key31": "2vq1cnJpEhSgg25TYsVD97sG27rGkb6NLiRCiQGsw8v7p9FD2zBRJgPCp2pyZLXWfc55VPF2QmVQDG9Pbx8iyAYX",
  "key32": "5Zj7STA1bAkgq3DeceGS3mq3Q7WTnWGfrHMwJZPEZ46Tw9ifPKf4Kh5uL6Tm5MWQ57SjRtQu2yfgWTdp9bq2FntL",
  "key33": "3NJSRAtsManifazhHkwAb4TyQgoBFroSENJYVd513mYL1PfegY8K6xjrf9zR5zfK6WWxd4fVzE5yA3SukxAC99Rt",
  "key34": "3ZxNJn6W5dvRKRpU7Ygtk8Y7MetHgUdp9yru8niTc3fUrnB9pWCYM2LBw8HVcF6duADWzSajFxv7WsDjgK6ZgNXY",
  "key35": "3sfX54obPvwp5t99UG4wS3kRTPCJEVDQ3NxjSMuKzYHHEL4pivE1HnD4mc39J325HY5qc2hTp5W8QBWs95vuuwa3",
  "key36": "2vTbKxUCFJXrESjk2zQrqSNouGw28yRX8DJxffzT7KJcj1752XnJAS8TW3DnJpQ3gfZq5PWkVmXoAvrQLhMqrHbd",
  "key37": "4wvtyzA6KiJSqvm1bvTpWzPVWBwJ1qVLLdW3gvDUA3avWJ8YCchEPqDJPzbnVAdt59kmpGjZa8WZNEcgEzkyPTyW",
  "key38": "4rJR1Zyq5HYQL3cdUvcw3tvTV7oYaEqa4pS3Csc8KQ8tdnJh8wPjtmkZSYrN5H14DLpZPSRXhHP8dbeBSVuZj2tr",
  "key39": "2EcGdM6AugazjPJ7PFJBNN1ce83MdDzqzDpArsV7HoYQs7icVe34UfQJnaLDoEinatnMPYNN3LfSLktkevcmt3rL",
  "key40": "cMXFzqUQfTgB5KCcatmd1zyFmLJR9ZENeuGs6N8Gdxa9x9eUtR3NKjy39LVLAcsbjuoWFag3SzxuiuTGe8YUZom",
  "key41": "3Yvm9vdhFDQHEkVVWcR5ptvktKmEAhffyJ1g6cMYne93p2ne3gS11M211JYDCvK3fARveMeD76dx6wihEJ8Ud4Zm"
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
