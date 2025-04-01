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
    "5hEa8VZdNy2g8LuSSZHsWaGnuvc7D2Urz483839aatRxcEbd3vHGLWyXRLTM7heN5bZgrFUZtkNUap6cLemQ6f9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeKQftSiCHfD5T7gX62QoG52HG7z8nqHExXepHhw1SMqq972dTeqiP8yY2P4kKjoDgeENhFymQH1jLTEKPqK7m",
  "key1": "xsDjyR4bLrjxkVmVxyWzGsXbtXQ1c75PUXbaU8Yk7M9ZSyN6eTUdA3PgRHqQys3qzcsWw7YXNRjnRo15ruHT6ui",
  "key2": "3WCfD8H4iabzLXZHUzHfxQgdXshYP1TpqMz2aBnxtSBXQAG94XUmEjam9co616siuyLVn6wc8z4Nwq6MeRKcbx9f",
  "key3": "RAoiBiYhY1DXUXV9xs829WaxvpbDnjbHc9RVUuTfitZazbgxQyhUng2nQjhMVYah2MzSWcuUT9bFUhXPWf2sj8Y",
  "key4": "66mrym3g4RBFjqQjjq6GUcXGHmdTkDs4P3X1Qp7U4hFzSjJq7WqNsZQEq7uFH35e9CsR14fQy8dGR6pB8DkQ9ZfK",
  "key5": "3m3Fw19VgT7PrVuAocCGYbUUxnboky573zCHJTxt5UWYqezTP8cavn3ZbfkGmF1ABuRxKN5R5Q18sW9WLu7euo2u",
  "key6": "4nkYhJ2LXC7qz6C2Cn9KvQNm32wVhsbReU7fsjpVaPQBK19WVP89DCZYMZoKqUQUNuA6VZLupvg7XdyrizxdcUmQ",
  "key7": "26L7WfDrdH6rxWA1b3jr8crUgechoD2CrEYvLwMvVyHmHVnZhSLbytxstriGoFMCf1B8cDhHdGWZte7Zc9jZ84Nz",
  "key8": "4hcBa4m5gx1E8iQejyx3MaNU6My8cntNKgUJGEiQRcEbg8uFQkJRSStoK6YSNqKqmSdF3wjuVkptnsZb2aghdkTn",
  "key9": "65aaFySWZbLKWgjjuuXcxivb5Zu58srjE7QJuxkNB3PQGF6a3fmhfkMRSkMTzYHFUdhz3yXWRQQg5WJZgi4SgGHg",
  "key10": "3j6CCSdv8v7rx7vBKyRAMvtJNMZTwDCWyb5hJmjg2NWPjf9Ss5CVBfUuk4DGsJGzaAAJHvZAbEiS4a8G7K8wAumQ",
  "key11": "4h2drVsVR9xAKGQSR2ZF1zzY6cRPmEuU6Ac2EGJQdn4heFDutiiLmovNdKSqhqoXhy5967PxZTxbmoPzdzHf3HqW",
  "key12": "WQXtF7C9LrqaBKezd3DDGoPpcNnK8ZxkQc5iiiPb26USWgnaL1YYgXM4esXMeax5EoEm8M86mVGUKodKwxxR5ve",
  "key13": "2xdQ1ycGSC3LVNidhKLLdVzWKCmwxEa4kmaH43CPo8LfDnRp42AYPHxBcDDvpAPxtVLPtiQjsQTHrYwUGkVzdc6D",
  "key14": "5om2n6DKEBt84EYXHajddAKjVUAQ2XKRnidZwFdS98dFrkgEGz1fU2ekzLkpGj1Q4GGLdRjnnQkmDtRg7juYK2iL",
  "key15": "4kt9qTy6Py88buss9JN68pBJF4zxBmPVrmcmT9WUDkxoV9GVvSL9Hhr6jbpd4fXLgVyDE282z9g3VX8BsBkwyuab",
  "key16": "2YGFvUgWH7AeQ4vh4aPUR1RnKJSaSNKSBJr6aZMPqXk9aLUxyciPg5fz8WLzxHwJaTbjojDHGNNgXyAo9nPZowqR",
  "key17": "5rced6cv61B3icVgZjfUM5Kr5h7Y79RyVkRaKz9VbaCZTdzL5uPoSM6LLQyzkufgDSzSRrBoRcpPCqx7SggkeaT",
  "key18": "3zVqHSbqpG5GzuxfBkCVCbhjwVLyRqzrRi23sTHT8BACVQj66KhnAi9wbg8xBvZGPbuDjhYoxhdgnSsqmotfntF8",
  "key19": "2ruL4uh2Hrue3rCfvKPPhVFWBj7e6Jrq3RGPxtvAUBeyhvChmJdTy1xHC2cXFrr5WSU462C73M1wZrJ8sPJgGvqc",
  "key20": "mbi5yCqtjC2S1Aj8g8ELydfmDfX8XQBUxNUNgwS3opAZyRC73MCmUX3QmuLdunq29srdZ5J2Mg88qbCU1KumrNW",
  "key21": "Jz5qxspAtrjngP27N48ZT7yX7JpAyAxi9CS9educbFkNeV7potVdWZb5wMER54cqWyjcRSqPBg4dxPZkqifhsfm",
  "key22": "2bCGs7o6jd8wfRXgG1FZyN1FRYRqxnGDqxBhLe1u3jZ2nfYh89savcyoCNifLPru6nzMsmUK9FqxVT3QkaFiidv",
  "key23": "5NTD6FzgRPx5JPoPK7FsZt5Ui1ZzVqQDsdeZbfQiHhXptJpyMNkVyKVGjsKEMuR3LG6VhfDDegReqwn3SG7C3mhY",
  "key24": "2M8LVtGBtqyETsbyBVeTHXo7CBMM7iBvX6RQkDEfSWqudYdGbCkgdXDfqcNcLoyJ6BRh1QznVbKuSiDAmHQYd6Zd"
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
