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
    "122dfMKP8ekKekBnRnfuQ4LVHneM3T2aUciusxiDWiTozzGHAVRKAMv3xYGvRqZehxrSmzvZpeeqw4XRsMCaaXRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DhQDqvtEE22KTSm61E5iT3ZtF3wmz2noWFNzUUfFBXZrUYVTbfvcLWZveo9LNpEk2bz7yrJoaCHShYUy3dJoGfd",
  "key1": "EUXw8PmPJmKzwAR4pLJWtUu4tCSUHMyzHs9v6oScaT7VzAqNzZyToK5RFEfn8Dr7LYPF7ttpc3crRUR7eFFvMza",
  "key2": "3M5EuYuB69rgQmjtbxkFLmiGkqyEZxiH3vq2MkN8WAH7xvKz2ejfKeCbicRWfzb1whFdagwDaEREEqgyLVUHCoJq",
  "key3": "3nFdNQUMrAykyn6yLhRqX9tfUSh8bkZ2wEV2Q9YZSq5nAQesDMywaX8s3ZXPu4orTUtJ5wnhvwXDzZ2gK1K8ub8X",
  "key4": "9w1H6nP2gf3N1ua2YWFiZDfophM8k3smSxUacCTvQvpptRX3byzkdzUJU6xARt6WkzANXNop9Q8egfY1E9F6dQY",
  "key5": "2ExMqKi735mKZVFS1VU9T4XD2NoG7FkNc8i28KPwHoU6SfQZNs15DBvUQc4zijS5WoHKtoshCZqdcZuP1vkm5cDt",
  "key6": "4fqE66HE7SjggVT4cg7N1bJnTZtECc9EJZFBWhQNaf85f17SfcmtuqMUWLMvWRsgZTaa9dCmu89Nsp4eaQx4R65h",
  "key7": "3C7GxfCKrnCjnCnqBBdi7Z59ZQ8MX6woyszJKBGDFrA2c1tgtAAgAazcPiM5JUXUUDJf8komB5aZCkoyVVYVAUDj",
  "key8": "4gNp59a1bsr2F3xX9vqKZbYk159NEvgnRB1kvC97AjnVZMx3MqkTE8dqu47oN89rBxQxBVaswjaybusnyNbnb1am",
  "key9": "5fm8haKmr6JdonCk5GaggdhTGjXcgu6hMejhjQpG1dfKAEGHLcGasZdioRXqFes8LopBp6AydhDn9BiJXVZaW71A",
  "key10": "4UMSgsfWn74LSaMGJxyyFU6GizgC3W7BJAuPW5nVeYvV9mCbRZfUVt15Fi9CEDzgvj3991DoxGGurSgyY9F4JyRC",
  "key11": "2CiFRtwDnfnm1xMSnjPWw7GHK6JjfbCZ6cN498MzPxKe8anKweNq2PCnzVzgHTJfSbW3ETDCdGa1xQLuLnZVAPip",
  "key12": "2Ua21jZRnE1mBGo2tCzCWDyRM4oJDVZ41GqwrgWSfVjE15uTkFzQpuZfRXjboTUAEdb3qJxa9tGqT2WL3Gu237Aa",
  "key13": "2Vs2LcwZ3psyoPCNzd9m1LCxuExFjrzxs8R3b3kHPAt9sUfAcP9wSb3X7CzfWwivMGEQbYbiBGZKxasDdYhUnE2e",
  "key14": "3cHBuizt56tGykYXhmD2ywC2robhpN1vxinvX2h3oMWpBpseg3JdwJ3LdMmCgiKUu7TYKqjnwhgjPa5dM9QUNniz",
  "key15": "4WGrwLVjVZsYmokF1gmn6As4T7rcSeJb5nRUMS5vefeDtUGn2RcY6VkS8XxfJYxStRTJGPkEyvpHwuADyzvm3Z3A",
  "key16": "4qZMjW5YxAJgJmxxcN8YpVccrDRveS8c5YKx5Q1ocnJdFjt3iavVrysVhAjwk73GJzWqJHpG4qRi7zmxBYj45nV6",
  "key17": "5QuP9X7MzFqjC6qHDiagrhVvCdCsZcZJzXKsxzpZrpRLcbv4im6RFGvX5gthaPX9UNcHVJNNwY3UAoCvfSLPjXwu",
  "key18": "5e8nfoWpyrnpo337hawXRWpJAY8mfFaLxq68nDptWYvNup8ATx3PzMFywaQ2EyA9nNQE92r1rdkKrcQ87fQz6qeA",
  "key19": "21qqrU7ZMDuawT6cSzt5FFmeCgfG19cXhjdT5ZG2jrV4EPh1AW7TtV5eo5b4jC9A2rpBiMn4EHLMJpgNTgftoFhY",
  "key20": "3pGBb89qFE1ShbWtefaxjq5VfZ7zTrp4Dd9VaCV2tAmDHLo8Ee5gTsTmKw6DJkRzocSnSaK72543JuNDnvWqgfKw",
  "key21": "3s7BJAMb56CezW3jYGkpBsahMNxXJFpGvrzRLQnGeZ3DuwD4z7d4N9tTTJyy9BVGF19RxEgpPkzb8LkbsMvT8VdN",
  "key22": "kw9piZk9CJBfTy2kzUBxwWSnHnA1d2KQzXzjcuxWZrdBd8qnmUFarHH3GSDC6kztACmnmtb9nTZyvf9JgCxcTqe",
  "key23": "4mLuvam7awuNYYgHwWTp7vA5tWdAdcp3SB2SYjUF39gMqsBWc2zzmGNNk99WrUZhSQcJRyzX6X6Rb5ftn9ZXzCy",
  "key24": "3oAenp4twvqxRGnmqUUUGn8RQmnBhXcwNEwhskiSKnxcGBkmNTUnoYgeUYdEbnnhkvnjg87JXkhfz6xkyoXh8unM",
  "key25": "2pAXqtvYHHp1VXNp4crTHCHPUd1coA2D5WAdAD9B5oc5gWPmf5RLVRhGazZavZraL3DSjBYzLmtmnDeMyuTgwUii",
  "key26": "3YW3HNgsCr9nq7W5ub2gd35JUF9xsXvXWB6AxrivSXdkR8TqxssYKeVKYzUF3Crt5Dkad1SicbTs2g8gWDRmocY6",
  "key27": "4GeuXYcGhxPsksfgj6bfMSbEXXQSqrAtKrLeNbFLmi2VYWDC5cbAX33pC3XVhFRasG99XkXnwdYbHASwitNFx9z",
  "key28": "5Hy7we5Tw4fKTBa9huJVepy8NdjLWUyY7p4vFnGaVFb4cJCRoYWY34K4hP9f6TyiiwYu9YMXmKG4Q6aWXSFkwt3",
  "key29": "5G24g63urdU5kGMWJkXVggbYMVN31UYdd3VDZR5E2D6PmaTaaBM3hU1RKo1uUz2ggj1WJHUfP6USfSAFncuD6HWC",
  "key30": "5Jcjecyg6s7eJVuWafQD73Dn2afJNCm1X6ALMjNoxsicBzQgqWLS2s4zakAnLYK6eyDxTKpoM7jkZtF7Jz1bTLwH"
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
