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
    "4AWd2nf2JbW34svtJZGBLZ2YDcxoQscWvNqgumCgXpNBkriJ6aJMx3KgE1VL3zWEHWrwgidT731AGZ2apPAXvpE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wnFjxr9Xn5WhpmL41VS3TegetkdNVJDyVachWxgS54LRKMrRgK52sNcGLAj89rTntkVnNqpH4MDTLEmnDv61nib",
  "key1": "5tUAaiHdEzryMepU5SZW1Qfnufi3znZfnwBxdFLk4ziou2nMn8hPUNLAPqKvTund7VjQRPa3TxdEWCgDYh11n2Sy",
  "key2": "anviNmoQMEu8ZJVh9mcAGzG4wZpGTm83BpRZm1Gzzhk9Hzrfrqbz3hYBJYgxoK9EcUgZSAjsTJ2fYgFVoBkSmz7",
  "key3": "3uinmu9AWHAnFJZEuqAyv4djPccDg7FHeZWqqX3sa34UiEviXKTDyEp2AXcxwZt7fweRzYQzQD8sogMs5AMPof2j",
  "key4": "2y8oAD9PM3AAZXfirmwFvKstjKkkfPtuCn1nVCAN1SUA6axDAiMpG4UG2iA5KonVLammZqeuzoiDTENm44GbpAiM",
  "key5": "rPwJJc79tKaDRyR7UutGVnJur6Y59CnW7UTouGvW7zLaCzMUpND4Wo5s9PHybT7YJSxFdVf9zNzXUnwtjm3uMFK",
  "key6": "3JPoWTtRQxMxTQ7W6znHEscCsfh5e32pfSwXZhuyRkc3ted3VnA6hum4sqoHgpbVVpVXCEK4p47qJ1pvtCcbDPtv",
  "key7": "4T1YHbGsvCuvsCRTcMyNpJp1gKey2ZwkYRUqubLsjAVwdfEAdCrprqkwpKkymL5KZ89Rp6YyQhRE8bur2En4FDDS",
  "key8": "5xNZgDPuUKbmD39YeS8uLEgBWkRUR7MqQtso4uSkpkxtXECWXfWKAU2CuViKGhL7yjHAmbcUbUMvfDRiSY6s1hTc",
  "key9": "2kLks1o4TXLGgECCxzXePnZ2pfrmTHe57Wpd8KuNHoWrfaFNCPjchK3351hgeuZFMRhtbgxmwJ4uYRVEguyahuWf",
  "key10": "4XHN2gDZ7X9hgbR3pseRAmXnK7njmgKZYp7yXadTRohWCJVD9c59mDLzM2MP4jauC1NSUu4UDXrDe7qWuG4RuJSW",
  "key11": "4UMkxYhteKdKwHKFHx3FCCVLQDzcKxNehcaBHrJfq6QXBmjY6DfhzMbjEZ6ZCZUHCXu4bhjJatqp38GfETyYtVdq",
  "key12": "3Tz664c18WBbNsQfamrGbxRK9i26RFpVS38pAqsLuCYfE8duNiZKro6HCEM7a28fSij5hVoMp3i2q242CZ63aHYa",
  "key13": "ehRzvEngjjJj8hD1U9i9zomirVdi7hTaWdpC6UW8kwUmHjudLZqEcwEbYfUaQxbCbY5oamC1ypDCb73j9aZxzdX",
  "key14": "4aDd66mxyzVM8yBa4ZeLyMFeLm2hk94R3z3VpCi5sVcfc2j7qZreoNNqyJzJTJoXMXgNFvcrCGkvCFaT2KERdLLr",
  "key15": "2HWHeQS2Q3ZDDLEmeWkjJebrfR2tdonPK1HGHWcfYx4eDhtdiXPQs3dAvhfp4FgT79cUKEcs5FQoTgC8oX31QQpL",
  "key16": "2Uj5wKZuR4XiwmbTTYkocq2xnpc6wqWfnyYAeBrdyDfwVbEBCXUpT2KBgb9wM9NxfUcTWCYYyzCbo4RK5U6FkCcQ",
  "key17": "2K2No2stKAXzzFYpSc165jFJmMQjYb7s1LmzN8UD9XDKfpBW1HdsQGNuvMrqHMV4fKvKNezuFPbeM46nvbw3U8XD",
  "key18": "2WqfJmpionTiKEeBMjPJxMVd78fSxgi7dpnUKT3vBZUz6VpNbVf9PXqofeJSTLsLFHsJfPgP2mtbF3hFMRXeLTgt",
  "key19": "5cdGUeuJ8GUJj7cdfwPNjoh8UsiojHmd8YNgxGVRiygixmMB1f93yzHKvKPeAAZ6zTTtUB1uAsGjGei1LeGQCJ4z",
  "key20": "ShWeYR2jhFVG9rQt2KSh9HAwkmZMGPXkx68xShESgiGfgufjV5NTDJRmPSYqLYcyUTCqZs6CafaQ1EgH6Pyhbcr",
  "key21": "5ziHUUaRyVn9Ffy1XK3t6QSf9MwvmfQVbwBKKXekMwUEcsGs1hKfSXXpAMBoT6Nx6VmCRHxf3HLPxwY5rkVBHECe",
  "key22": "4vuYFXomauHYo65rTMRwBMBNvV3rp27PdYKDYibaSG54MDRkWTVm4zkUhZfSa6Z1juP5DU3zSMoA4q9v9jP7Dy3b",
  "key23": "47Uh9i4SPqtW6L12yB7NeUCudKLDCb19HUYBn1X5LkXRUBQ4Vi7TtQch6K7zvi8ijgQ38nmez5e3J9vUXidsK1d9",
  "key24": "4VwDak2FGoZhWddtHRhZDa1VmdxwMn51deaRkFWfgg2kMTzZu1rc44A1WjGxMHh2F83qJMjJkXQiTbsvy9i5NZDN",
  "key25": "4onD11jDZrjoodCqNCagPDCzodAMzaNEWWZcarqUQqbrZvkR2ZuRCzV1yE3LXu8zVHam3fNjzqfesNN8AffPG8dB",
  "key26": "5pscCE4GNcUGwUvdgJz3exfzBpu7NT566UTTrsxkaQxzjAj6x8S1ERDXD4Ne3UZq3cLuqsa97tQEvoq9EKWpvBmg",
  "key27": "5qMpkT7PfwUkbKF84jPugsKA1GvRrRh1a3pHppeK2xo4cnhvNgYLVfCmYPYK4aRprUP1goRHTL748spoivYRb6Zr",
  "key28": "2Gk37YmHZ2XZJD3p6aSgup1UvhMQ4fghL9rM9yg6SgMVMqU7Kj5c8JywpVf33HjSxvGnPH6aqapixUjaRio1a1AL",
  "key29": "2eiaEaP6Y3xa2eVmRHYsg1vndoTwyZjMY2pLkQy3pWSwy7ZD4ZXpS2yTwXZLHyU7GApRYWNxMW4SxMBKzF6dgU7G",
  "key30": "5PrFvs2c4FsdqjQ2FWbQaCUfCYwg3G8h7ejjyGd3fiko38JxT1NnWLczfxyVqSgMv2xRHuzGYMJCFGPbDHHpZQMi",
  "key31": "4xoWivbAJvXEDBxgudbqdYFQgoYcZJrwUCcW2zk57djvcGrbASM9NxA8Ueu8QuntEWH5iv3mW5qKu5g7AkXwBgqo",
  "key32": "WWSyrGK1Vx44UzXvzMY3Uus7QDSwzeXiTXBZVNwAq5adNBv4176My8jY1uoXyQbVdBDjmQuoUyrkVUSxNZvB4N1",
  "key33": "3Q6GVkZCoQiGYnbqmf11TDXGHszZ5hPodRbrKd8FstiJVVhmS5i1yaaVYA3NFEtnLKuuLqy2AnuJq2p7HbRaV9Yr",
  "key34": "25tFuGxHmwnRPhY22v4WgXLdE4poWQnZrCahbcZJgqet5CZfiLZno7wDHRz6hmMrZURheBEprPDTPnHUCMf7f8ME",
  "key35": "5k3HDCMELDTuzZPJfbV6mrFi6fpUo29748fNwmR4p9YRr8SSNTfwXGaRnbZELUBKgcp8cqNGo7G6f9yXvcUJ8G2e",
  "key36": "5f1DnYjScqZgMTsWJMqwd82N3Mo12vWvHbe5U1Txs7684gwHUWQWtTUBtsQL9pT88bBqSDJpHm8ZENpxwHi2G48D",
  "key37": "CQo9FvVdy2UGNQKyM7zpsEadpufbjofd8NEoRnzNWqpr7CivC2KqBnPcdFpVAQSN5o42PycEoNVFyjpcNMgJvrj",
  "key38": "4Ngg8xBpS8n94oqpYjFo9YguK8ACtKCVC21cxw846QJKLxvSym6wiCsHk1hCL5PTi4HqnjDD1QT9rGkL4rT5t2L4",
  "key39": "4g9tQ25YjupiNmpSt3DVHsum2MR885pvBcFJcgQ7nQ83H5kwxvUxv6HS8rodkMgJ5mySPuhiR1fiairRvNRhjJTB",
  "key40": "JvHYkodT6aXEPzTxQQoSj3KAm44V6zgiPF5uGGWn3pWZvxHKtUEeG7jVFgS9zTgEjvMPFAaxFrUW72BMhdBvAXN"
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
