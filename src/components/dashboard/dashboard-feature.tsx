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
    "5AU6phJRC4nmwrDLbXFH2XRFjwkdAtJunjP5u4MecW1CC5DSNLFUBzWd8Lkior3zUYo8xLUoPgovFvqg8nDPh8Uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u6uprvY2Gu2Macbw3GnVUSshHmqhY44SdNofUmJcye7APDButE8AZeQbP5EGCJi8u8v3kWUZvSdPrkN23jwZ1ft",
  "key1": "2So4YMCYavpjigCuKeuUt9n4F2w5eAQ7Mj8pzSdHaLHUeSQhHA6p88F7Mp8oP48cNLstzqjoPSp4XbvLZrkqnH3a",
  "key2": "5KQcbn9nP9yeSjkuE3PSXqwg3Ffm8TeboCSNnk4xH5o34k63MYxs2xAUoZxmRQoMbP3ofqfXki3UuwCAtZQSqAot",
  "key3": "3w5D4SAp4yPqWsjnsbntLeUx7ieKZdN82EGBKL6xN4B3JWFuY1gocshLL1HMWfDMQnKnbo5mUv629ekgE3nFdYnv",
  "key4": "2pECrUBffZZjgnSykvSPhZFgcWDuqZLgT6stYJ13rzhrLH115vX3Vorgkn5xAREEA78tZzTSkTdLEzawxskD4xWp",
  "key5": "5xyixF7HjPHFmTUq1118NJzD1DnYJr2w6U6gqCr3YudA6rU9W6eCM8bWwPmtNtMAyuWn3znTaCs2YDVJr7ZRNjy",
  "key6": "ojouSHHAHQHhTVst5u4hCrfYVqGwr3b5d1ZySgXAgu6zyhNV4ULZgz1z98oDUqYSCKdZy41SUetdKUjjGijwDov",
  "key7": "25Kc59DEQSDrxCBJbRiz7oc4btk165QFFHfnUd2kpigeGUWNy2HiodZbTU1R9GCzk4bPvJQm1Nc95p7qKRTEtHfU",
  "key8": "2wbDK1SASJWuWzRmdzm96SmRMuUNR6TuyQFn4tsuJSvBsSmMoK8BqTTKQKZDp4BMVY8V5CAxuyYLEEHYiuWm1yrn",
  "key9": "2wEUrnrBoYYeQN5TE1CUZnngtB5W1vwiVQY3i6LDs1GrFhnCkTrbkG3cKBJHM3qpnfsvkei6bv7niWy5t9S9r4r1",
  "key10": "5Gh8MakXhhdcpnDB1DRovhgYpEiHeJeYYUqPdbJqw437iQWCBNhjTvvvKRK73ewzPkFF4ZCQbdZwtPnS2VGXNAqm",
  "key11": "3mQC5jD988527nQUZk5gUoNxKm84SvdksCgwoJJva376HPesSP8Q4ZBfNiAZ6J2XLGNGAriG9X9QtLAPvaYJmpaA",
  "key12": "2c9eHX2nnfTYUaAYibTgEr1LAd8xJgzyuuF1MSd13DLtM9cCDTiCV8oybpsLj97ypfsMMLBd7D1icqsdTFS6pBuM",
  "key13": "LKRUQqZibB6AzBpQ1iw8HFTHEv9Vvinoj3WVFSnQdDL9oQquojACPg62erqYiDLx8kC39Cpy5s94QvgCdoYt1iy",
  "key14": "2TC7LfCty1XxKpx8UaMot57DL9RNRGk8G5hHwh8yUN99kQaawYGkGov8e8kDn3AFxYMvB42Lmy5593dFE3VSTxtu",
  "key15": "xkbGYAWF2CDgoVZ817o1TAy9y8khLwAVRv84QHZkRKCoCAhXN596MmNvhyaLc29zfU66XqqXQpSFGbeMqjDJzZH",
  "key16": "5HsShBT6A7NiQiEywqk5VmGs3ctzeGvz87VRwULhVahm6bYA4VKcsRQ9pYPVxXyichhVvavq7QCniA3GgX2WYLSW",
  "key17": "CaMkpbNCJCNtnsaXe95fvXyvckpwyHCqY1tXn4fc5kFegYww7rPVUhk1cmY8rVeQxhiGQg2ZMPBhZBGstUWbuvL",
  "key18": "4ptAbnfN5uGWNih9N2bp9BEiZDhBgqvzzGu8344xixpGxDdUF2rC8x5kYqNXyUK9GC3wajVmb4bPt1wKF3QkM5PQ",
  "key19": "2wrwLTonjTKtZBhyZ3Hgu4S8tHcTAccgypaQJW5G3X4UDu7jxiajGsidxsxVsxTnLCowq2NYbHDCVEcbG91PCs4z",
  "key20": "2g7QEkKd5M2j9a9hcWmpSgn3nCChDrUkgNXVGBeYLBXY3SsEUCsMvmu3QsjF6id7DEtSeCUgCSf5tgxL2t7fciV6",
  "key21": "TEttq3sPmqGLp6YT7YMqXsnRcQfpQAh9Q1twmDyBCXcWYJqc3CDezLaKHMk9G435MaiiVtGGUUymPZmuzyivos4",
  "key22": "66TCJtvpziCydpLfpg4pjNcpjxwa2k72J1LypLYNJcdegy6gMQEgG3aprxtzTsBZP8xCRHVGYihVk4khrunwQeWz",
  "key23": "5xNcFKrT8RqkzutsrF72ZXXfjx9j4HwQc1XFL2qn3gyKmnw7ACghrg1DyR48tPbG1D3Sez8BNqGP5wuQkzLiG86V",
  "key24": "5U3d3Lh4uBLV6Pq79wX7keTboogkRPQRYjvAHfosaQX1HuQo44BFVvfuXuZGoSxtyBCZJzEygsB2YT4EhNnCjuL7",
  "key25": "3R1YZiVDLpj4Xj8xF4rKp1rynAqD4DSyNQx4G1z5o9CynXrPNxGYhq7dYRBpUVAj6ifkN1cTG1kYEYY1uPaBKD5L",
  "key26": "59JZ6jYiRQwb7vpYehkVLLu1whLhya2PRwEjEHw9PjWEJsH6SCkxQYTNxiXpvWSoMcuDSQjAeheiqEKKRfLaDjDD",
  "key27": "Aw2Uoy4TvNKzpygzLdTBCAGHKNEpPBJgJizmo1cirLomKLBn6zQ9ETxw7cPAXpbcixHEei3f3JvhEa6R6f7Z4ew",
  "key28": "3y19qH5mMbZj1ydaaR5VUvNy3eKRR1m4FtmCumjRCUoANXAUtxJweqSqiquzvTitHkvW8kVAgzMScNZYEHEj4323",
  "key29": "32VqxGTinQcRkvDr6bjVAEQeWgFt5NuTJDx5p1Nzc9wFjxuppU78Vqn8cJyuijUfuGavguaqkNr47JjKK21AWrzj"
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
