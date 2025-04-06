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
    "3bPjR5qkRGUcBHLPNV5VnMeG1U9MKqY4QCHitGmZhwrSyH6tykDYM8CTJVkskCBR34s65DyY9wvN8cv5aQewcD3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S9bmmdexiQASoL9K27Cr7X2FmCk5gEF7UqNVj3Z2DRuc2bHQreRwXScnfaT81yjcQ8hNeaCf3q5i2koZXJxf4xn",
  "key1": "4KvYggg6vfQxJxLnBZucZybe7tp47cfjmtMyg37qpvibhvzr1L72GgiFRC61xAhkXNUzokxNZsTkJg5Ysu1EYAHs",
  "key2": "2jr4LSE451rRktZS6hm3ouAaU8coLGNA1kveatxzb4VJfUg5bUcLx14Hd55cnPZevDaaK1TYZmdZ2UUzeZKE89sn",
  "key3": "3SmEhVZZ5JcPpRfcFn7KVjAyCNVk5fhkmHoW8Kv34k37Z8rqbHeBgMRmipYabyFFhfoVAWr7ngn6zAE6wvXJ7uVg",
  "key4": "65wQ1msP7vGCeQvbRRsoy8MRv5X8TxPfnm4JM4hNJTABki2LoPppEETXfNv6nhZJjDhkfjUCXgSTwTcgrcwJvdFT",
  "key5": "2zJwdLrAKuA2ovmPnv9uuS9JDg6dURvPj2X2N9sVMbM8QfefXmwi6mLYrFyySSJkY8ug6Ha9KiyiyFKRG2tes2zq",
  "key6": "4ro8XWNz1ueTH2u9Kzv15jdbUqK6qryg2Dy35mPmkVsCu8Y5j76eJsoMNc2Yy55xcUZeGUfQTSi8UGaEBGgZ14gs",
  "key7": "3ThAG6LwfM3JMyGgG9bFpDgMYkakY6ZZgMJ5PPKXMMWhuBYUvExime1rTRkHxNCGWq58p5fzos5H4pzipbRu3ANg",
  "key8": "x51LBZoMFWpgLRMiX3wVywmcsEqFNmHEQKn5hMUvM5dxTH2VD69TU4uPfxPW5ssjysJJXhSZsntCJRW1vwBQrNG",
  "key9": "4jjXRp6jKgt9MiZ9F2V5sYwXJw62WoL8wQCpahpcVRd5bKFLr2X2KfkZX6ob9LxJnC8qdZFLvePYHxiwnbYpu4Bo",
  "key10": "YikNFkNwnqWTTXJM4kATXCGDmvPKz4ZDYu188i6DWr2Dg35Qg431Pqkx3tmNKRcPb7R9TuZjpGBQ5dzqpJiZuZi",
  "key11": "2msk7xEmRo9WGMeSyKwXqRv8vk8PrpkEK52ipQwPCKjFA7qtLbnQH7TXPYjVogiTW7p7nkpk442q6ikvi5z8DBtd",
  "key12": "5ndL7ePZT9mPQPdyB32jyhWoWj264BabwE1Fu4RmVh7onV29mjaaphrGRnN1zevHFq4BzuJZpLZUaW29R6vFE4jC",
  "key13": "5LYY7e6dq8LT3tss8cpLXyAZwmXBBeFZLvXGWuC5SvMPXZ6ehzVz2dZgsPNLm1FnVH4VvGpdoXFHw9LFxmnVTCE1",
  "key14": "LmYPqN9rRXmmVUHnut5v4W1QahqsqpKaYUB7Ad49azf7PQPaKFKPqzqG8gGrww4gvftxZdKeamhfQus367sRPKZ",
  "key15": "4KsvXoastDvSYs8eeN1uMACmvFmRC84x5YixGKNv1y2sWwFUeDp3hdZKGo8ZtxJ48fgE5bFaFCEvyFtLoVCEmRid",
  "key16": "2Hqp6ngJ7esPkKnhPyWCAHd8iBZaYTErkdZieQ3jxmE6QiA8fYVu98HNt8FCYFzNBvZwQP5uoVo26SLzrirP964X",
  "key17": "3YTvrsemwSCFiL5zYhehvY1SwraHae4kXQo53jgijc6ss4GdhzbhyKsXsQ5bgdyzGfWDxSQgAtjirpkKTJ5G7MCW",
  "key18": "4A3RDyG1dwQ8LeHVuoiFXeiTXuP2oBhrRMqK4e1RALXY4t8hdTD4jEoX6THowYyWUeCfyVXpu6XfdupnhwFvLP9Z",
  "key19": "22auuvbcEKTf7xAX4P6c9EHKQogWzMhCMtnQ8nV1gXUfnwogKoH8wzVRCiuP4sUAR2gngpn3q5tXWCTQK3H1WroD",
  "key20": "2wu2u61YcyoUubUUa8GTrkNcDCvCouYm1cWKTTgjjNiEDdQtzGGr9GdQJigG7Fz6Yj3rvgwXKwKN97Fn6K1c8drC",
  "key21": "383DQnJRbuzSpysD6gWdw5QYCvRxUn6ZYb9M4ixyLgpdV3REUqQUEmwdgT9WFBktRoT4GFSc51wUPXGG5c21Sc9s",
  "key22": "2m2arhCW4bwfa41rmkJ8untSLGKY4cTqNE63AGTS6NPbjHL8qL3ge9DHpAqDp3eu4tQoJwW1wuNVgjw2Zg63FGxY",
  "key23": "2gyaGZYTv7STVLkKL3S6yA7KjeLCr6xm5HoMer3opCs5gRB4dyLxRCdYc1oDPqRK8oSH2MU47eLZuHFwaQr8tZ43",
  "key24": "Emg5X5k1srLBsMPiafEkb44Yevzv12Bm741DZPkMpG78ojCynDgToNLs1bQr1WhaUGskHYTqtQuZC1j2kHzS1iS",
  "key25": "47tK62WPT1RncQmtBZCPBBKcJJpcvka5YWo4W2pwMAYrpjyy1tYFq8NBLLbqNStJwJvoiu4tKke53VnvPmW3d8Gw",
  "key26": "3Vp9D3FvMzgV9S6qWW8qJsYLW8U3gmNBpqBA9Wuz4rHZy3Atapkw3UN6z3UvrxqRnusiSxAicwzBaJmdDvCqvqbS",
  "key27": "3xCg7fS12ggaRpah7G9BKTi3eSzo8N62Z1aWpZvbHbm71J4LBJhrrT1v3MCsEdincjDWi5NpoZ9V38UgUVvDGQtH",
  "key28": "35JwEUp1D1s5PdMMRNnLbj9KPXhoGLa7CJ7MMxq5eHNBEiZcKrRsLrZfJe3EDeA13r8k3nETFip4XJjneNpocYz8",
  "key29": "46F7dt4qHkstGUFzVP8uoRV25cWbVG6TYy6FitJ8weXaXQngRgF83HMxCq3QMMYm9YxYjn6LBZmaEN3uWXqi4mJX",
  "key30": "5B3MjJoAeTnFscQ8fkekyDCArj3UKLXCQjz7UVmQ6DPNYoipFt8iuCGArtBGtU1UCFNC3TxUgWhzPzcXGJBZ26oG"
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
