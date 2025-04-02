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
    "3QVjJjMFbGTAu5oGn437ujAenCANCfW9FXCnTKnwAcmVTjnY4t4y4VNUPrePatccMVb61z9Fqdp1WukyMwyx22wc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P62SqRpz2rhoqpWmt8YHHeKFieGvVJWsFtuodKFmuXxc4NrN1F9UzQDBJVLHrEuRfh5R9vNQTVKnmxshgoAhL8E",
  "key1": "48yjEcugAhfe9TnoTzRR5XEvfuYfchNWjHYtH9sZjTstVTgUUQPvhWdTBY9pZbSckgKAanSHViBmF26NnLaGHfJV",
  "key2": "62i3nXntHiTxhoRWzv2Mkneso98mT4sVT8b5dAiGgU2w7n58R49oMPyyvZptTNUy2g4oHovmxjbhNx6EeAhkP3Nh",
  "key3": "cLWcPojGNYLBspTvPMSMeW9TjzNjrCtPnqvfdWSmjBzJmLpSjYSvDVy7oi3eNHsyGst65YNK4bue3WvECLEmM9t",
  "key4": "4s8w4kGuuJy7GJ4ZEWzSHJkhmEcw1eNfqcWPmh4y3UxvSFzL9j9XoPs2jb68e1gh8BCZrZo6z9LodsMW9GWfc8yH",
  "key5": "4Q9CmzJqigPzwkaTdAwBHjcBBT4gcAWNkv4XDm3VMACxaBXD4v2GQcuM2HpTKJwQEiAZk4K68av4reWBxnZMhATy",
  "key6": "W2TAxmxqLHyk1K736umL3QuECJxjLGAY6SC4kzt7v57WwcrVZkd7FBHAxze48umaj8qtuYdNmHtS64BF4C7sZa9",
  "key7": "4U1RbcjN1wTRudb7WBqxW1Asp8jtUHGcs24opSSD18qxppafta4kPt794ta1Dyt7s8RenKmnFoV2MpAa9cJVUuxZ",
  "key8": "3xYwGzfoJTosqKVWFXJvc94LhwpKSgBVVvZCSsWns1zZVFQnWGVe5kTJSrQGdvG6aBFY3YzDucFXkQgEb9mvxcbn",
  "key9": "5iJRtXEQbL53UXYjNkVfNC3LwcbJpkmLNpAu9E97KZaWaFqCRVtEPFMK93poNAjNXYpnQX6AXwXhoF3mANQZqipu",
  "key10": "WJL3CDs5zy7e2NNu12gYzzYn9UcNayuxXoe3nmnTKHcSPQ6bhLQ8BeL2DqnDvZSR5eGot4wda3QsgfYkNLZxmm5",
  "key11": "PxPpPY41KgnoqrCWHyrM2PjCqL9RtMC1EKk88Zw4dgLAyWkXHEouRy7PcwgBTGyvcnb5CM6bnbgYDh7s8B6TY5X",
  "key12": "2Qs2CeiVzYUjbzkaM1NJZXCQU1sSvLQHcsoFVAhugHAFhg9GxtDSLYWgUffFZWHVkVSK1bvHUidxAfs4uaqD2nWC",
  "key13": "4VS1oY9o3nb8Y8noGsqGUAi34jJ8mxuKLRMRBtU53veYvgEi6Jx1RqSjfJsadMn6aWG7MfF4fZhGgUzN42C8sX9n",
  "key14": "2LaWFzqE578YMmtNBLpzMW765XhzWMJJQpgnGiiRkJdSUZk8kg9ZMryJFnerX8kPuZCof59nZGpgEuX4JmTmhWgq",
  "key15": "3E25tkEMvcn9Se1AFkqbsLBSLHhk4rfwKqK2VmYx5szCpSGUiTz69zLZCDcUebRZHoBuQZCso8UWTdyPVTrKayYr",
  "key16": "5S177KMHp4FLZXT5z9Vc3nwof91uv6i1o37LMa7Egjve7eKM27U6YFLw2GpJ7Rer9CXqJ2dTHSgFEJm9fbyZBPPm",
  "key17": "5bQYbDZNpRagyxcZS41fkEvf1qzv9WvSFYBkqTftZKGEqnwwKWLZoa4TgUnQVw5gFSWQ67RomBiFm8hMtExswCCF",
  "key18": "R2XWwgVjzKoEsYEJXAxTDhDzm3rh34FPecEk9SztWtto3BjvHYuH5ngogrz1MECFJXT2Qm28N1LmRV9Dz9gsJzW",
  "key19": "4XP7AqKpo1TWeJchsahV8w3KwwifrFoaJrn199dUBQMupABAKHRCWUwNBJjd2GdXpPpzdyxpSMn5NHxNsCedTnXv",
  "key20": "5kv1UWzMa99ph3YC7qH3Y5TZrN26MwHE544nTjGPQSFnDwewrRxGLW6AQWKwRbNCN3uCfYmxqrTq6u6caoxkvZYx",
  "key21": "3kC8smMXbjnz2pD5uGBZMFFToo5iNYV41sk2MNkFkX5hGexsAeqhYYpEnm7LJ4EPdhhzzzcYX6MhNCtmmWJxZTRp",
  "key22": "4dpHWb3ufBiAmDp6utU29pyWkrUqJYE4CLNQfiPW1GoM48D314MJDmGw2mJMrmCC7HmcA1HGPEe9gj3KX63idAJh",
  "key23": "4hSp8dNgi4Lzx65A1jPmdWsT6ehQCU5TzN9QUzaSo2LK46PeK5qqpFYZGUVzck5ZQEHHPHSf6tF7xyEwsRD15KG1",
  "key24": "BiFFZ1RMiTxFHKz7XdGqLPARp9px3kUMZVKWVSsk9Joe7zPKWUwTdx4kGvq3CWj3hdrYdQUVCVKsoiTxuQYVHxh",
  "key25": "2aZfg6evQdNa1zrN3T5F3EHYu1bZooer2j5tf3oJGC1qdCSH81hQZmyHczKwE5MerW23foXFj2xLyqv9cGt5gEyQ",
  "key26": "2W8Zs1wjqDF8bQXwR7yKdF16MrFXfd6R9zBuh2zvLqUk4fZfJC9ZxuV7Fo8gFXtiwVCEwL5yVrBKRfh3GnWajHpt",
  "key27": "2khn8NjwNcSQAHSgWF2sbPgfv2gF9G8So3JX5ooTQAGjydjLiWU2BAgK73q89kMdqxQoAeNHHxy6WTWo9gTSxBtE",
  "key28": "4pEFHpF88iDTUdouU7GMsyEwHtYQHd6TN6PMKWNgVbGdo8xerEyiMMTG2sofAYQu2CHYGbg882NQMsGXVSJrJhrn"
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
