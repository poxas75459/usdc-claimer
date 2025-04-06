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
    "2qcRHWJgNZZ8VQqAtu9zwDmwP9t2cvGUmWF5rsnYTM5CzRJYKwu7PzbxxpUDV3wm7ZtsMS2a14b7vJqHDK5SvZG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DuCy1WepC962kKEUHMn41dZEoPtK6iUttKCSxnX6MbSZcBHFiLwxVTQ4DUKT4CipasiKbtCtANkRaTFMofu6jUC",
  "key1": "2BaaEMcMAqfvPqU65Fmp1WMt6QSVscNFKSm7dT8B1pDGte4W5PrfHLAiPZKe1FreEVCXnSaEZXnhSLbHdc2MUMQp",
  "key2": "2gXt7Xd2BSTFeJYcUtQBC2Y6QjbB3TzDjrBhzcDyLc8t2FwAv9BHRPnzTKx9tXMDB9f47oYEbJF1F6Fay2pBnnrg",
  "key3": "2k1HR4WVJRqU81QY5RQ9GzjFH2AsccxYKxnfA4MvXtcLQ3TSSwCNgq3FNKHve3qpebEb9rxUbFBuJxXGXseXbieP",
  "key4": "2BeMw1LP55T64QGrroHAT4P73ZRLrBBPMjrkFdqxcJqnqeXcQ1rm88PxzD1SdZ4ENg3aqGDo5EHrQSXuWtXVHufU",
  "key5": "5EzRBP8V6tnq59MiujCtLHCTZFc3sEpLrxJTkKQCgfBUFmbFCpFMicoQjnUEFoFy9dNDAfhm82MnwRQBKtutmvxH",
  "key6": "kq2d167jXWjjKEQhym6YmRx4PDHVyX1J8prnuxGVArFKenbS91iPjxcNRBR4qo6TY3uy2fQ7PxQu84QvRLJZ4RW",
  "key7": "CFNxs4qDs2yuNScm6iHbsm6rPKU86YDbjnmnnioQqhJhURPP75xKjVk4iD99dUNLVH7kj32pDXjruuNMqMdkcpf",
  "key8": "4N7P9bjau4tdqrmqzP7tGFWRfRvAYnU25FxsWMw5YCMmificzm8Xubzu6hdgiWRRzAnJpqKuqGc6ZGto5Yp6g37j",
  "key9": "5uxAXJWH8oRZ6Jc1WNzSut8SckWiDqqpYFkw2YhqSU8VoMCBAnnsNBZ9TqBxdv8X1yJc5PzzppNDF72ZS57bk5FN",
  "key10": "3o8CMcsWXor8DAMrbDyKBN4qP4w5odqbJzXgQARqgdMraUEWdwdaCYMrMnSCJQQmfQGNof62QJensqrfQHqLjCbE",
  "key11": "6pjbCqmYdqawTtcznJUwkupehA2ytoZmGwtc5g8irtHpzFmTMvz8xC9WWbZjHLRPX7BqGMf18LeuexTogTLqXQN",
  "key12": "V8nyUmAnKR1mfe6roqqZTtAeyy6WpsazLgPKVLsVwY7MrkoJSxsxkJzjy15TwKNNtLLh39JqFxuH6oeNjtxeqsy",
  "key13": "3qwmcJPsK3sJS9T4AmFoY8Db6siy2a3f1H4GGLaTmoLk8RKVZ8vcdxJufbqXySd3ZVLaYke3cUZStarUEkXFniuL",
  "key14": "2EVgTbpDW8eUDygen69ciZdG2svHVeKY9qMAx47jwNhbimtHcWBoYHCyYd2C7s7hoMhcJHnkykJS3QY4uAsqof3t",
  "key15": "jmuzxGAxfkxC7ZX9DUyTq7MefYe5Hz2gsHRjobTzFyJJhU4bvGxQ36NzQrb8nByeqkhLf8xSoxgmJqDXRCcCNaY",
  "key16": "53fd5sKVXaLF2U1cX4u4hhoo7GL53pXFVz4FJwrAgT664RzcsgXLumH3VKKm7GGQPzjFEbNNKzFBFPhDWmErFAm",
  "key17": "LQVxyMzND7xT4bbmuVu8uWWkDpoPeqFD9HriUmdDBXBipvUH5fPDe4grMsV2zah2wpWLaJYWi3sor1hLEBKx5co",
  "key18": "2p9Um1FfZvQqspkGFeiRKB5T6McCy2sD12W1souCjL9Ln1P3Mg9cTNjgfVV458PRH49M6DSjjg62otTghksUqNL5",
  "key19": "5MxrUZeUC57wUwvEGGUBEfwQQRmem82cJqMgSdr8ysG86pXsLVXAhtr2donrFSWDZg2fUnprmX9DiWpeEKVgWer3",
  "key20": "32uSzwXConw9SxRM3iA8xskb4uskbPFQdPYKP5oyDMrRCiShkNZKz8WKQyAzsy99hGvEPo97gYF4uE3n7SFAZMdz",
  "key21": "47j8VRmhhWjEVG4bGtNCPFJzd9PAygaAA1LwaigxJE6jDqVxqaXDnzVSZk2eyCShun3WxGnHuChENF1kaNRehodw",
  "key22": "3caUhfeihMmuvCeJ8Y7DWnk75Tn8i22oXmd8z3Kzsud2MqjnmFJiH3hwPWv4C88vxoDwM29yS4hbmG2Cd2UHTk1C",
  "key23": "4ebsApjSYrxTPcqPdEKLzv698aeYcM9wiuF5KiuhjtiDpdf3UtCRSkMHkhJvFqNgrv9p3tXsAJofqr3BWGz3tfzT",
  "key24": "3K6YB7g6wY9jvBuuSX9Dzk7gZ58aWek7hrzbW9EunfhGqSKLTdbq9Km3BE4hjfBV137JW55eMGagrpNkAQjNjb7U",
  "key25": "63ZwtZkDGyDsQieN8Hu5Pan2TRXL7ZRZKWMqAmheQLvTrdhVNNF6xLUpgBWnUKA8gypXXZmmcFm8NfvYNfFZVD9Q",
  "key26": "5Red1LpNVQ5FsekbEEx4HCucNumxPMi9a99Z2rQBg9kjBVGx1hg6ExsfKULoHXceATfASVa4KZJ74k9X7n1CoocJ",
  "key27": "2Z4cZG4BReUt5S2shQqiiqD4eutF9bKpwX6bKAAenwACL7t6ZW9bUeafJGugsoikrfhZkw1Aczo3WRhvdydM2KuM"
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
