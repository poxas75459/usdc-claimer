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
    "uB8Go8pxpSHp3pUibs3bgK5bcFNJtQxXet9Bac83y6bBXp2tjXpi2tfLQxZHRurC3C7ue8BvJ1RLmNtFBJKE3rD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46uDAsWe6EMSipbBMBA564Q4R3ycgbgzpoUQ3YTKcAVcdq3FjhfUtBk9bmjRnW8y5kFE9bkGhzxwqRWFC6q8eMGb",
  "key1": "jTKZ3fGvmsJM3DARq5JiC1H3mafX1bxcrKojxq9dLmQu5f7Ek1jBWfWvYSt1hmsJ6qtX4pGXW6VbfrZWCwU9weJ",
  "key2": "5cGKRaQm1j6L5ctLwGNG2h4CSLjJfnd9S5S1vTfaWsi3FRrdssbG39R3TP7QChbunpGgn4W9YFtvJDGahYwXFYMw",
  "key3": "5VjXmC9fSvUoWmjqmzJqzU3FruY3hnbSZfMreL3eJf2BB4cPYNemeLM51iLH9W27ZSNMFoCpxsBSkbWUDZhzjmJg",
  "key4": "45sy4FukLLKVbZC4iZ2dCYuzJNmYtpC5A1A1cRujHzFChsiCZk67Jz5SMBrV9TUxSZG9uh5Ph8raDTudHLfDCnpw",
  "key5": "3egv13Ua2AGEh4UxQ4cAfZmuaswJatnbH4dat3LgMMxkxXcxMwETmGTArW8Enj3p5hijcgd12qphWrZNhZ5LtBAw",
  "key6": "4VEEqRma6riMkAh8SNSPMFNX7ea3QwV1qBXrWKDBrYf5o13VZXYLweV4U9PeWeQWbcE8fLN1azwr4FyEynJ7e4KX",
  "key7": "ec6qRqZWv1GfnhP3DzJAJ9G5qXmYTpCcMw2bSkY2or35Gtp6vnNTb9wy5iP9fjDXaeohneBhpRNKFESYmf5iEqL",
  "key8": "2ARP9C4AzZEDaLXR5HRNyg6XkLea4N6eAjdGFZunPnkcRTuczcKmW8hkokuzNh6RbJobMgU1GE2c6zmKcMV4Tm5z",
  "key9": "4zbmuzN3Cf3spFiP5ihdTFbQN5dQNryGV8dHv7QMYztenTAq5kZzx3g2uy8GsiZFcv5Kok5w3iyiXkBa1LXE95os",
  "key10": "KZWgE8WsdsuTs1VnwUpRwSKBcCoYjZaPLzApoo12imdgEVu1jPKFgf6ynaBoXgPTTb4k8TcsxMrdTBYgMPNTHLt",
  "key11": "Fi3tMsmqMMv48fEhoZ2tU4MEfwcSK7CKFQVF8iw3GjoaaL7EbRC7wkkkUQZygmjDxvyX9VBCu1zidPaMjam5xfn",
  "key12": "3r8JjdRhv8LkMHnAz3jbwe8RdzvJ4PwmbTjKGUoDBnZtZ6Smsr6a96pEScC8YeJ7gSLnR8UjmiyCY81Et3ayyJZQ",
  "key13": "svciB7XxAvn4apC5quTKMWNK2hHKSaGqzc26CUEHt5X6vLeVQcR8hP1X4uBbYGhNjJaawSVy3LFbGEmWp7Xdf7k",
  "key14": "JR1zR2QnLU1YvTvNDpMrUaujsW4WyJa7xQxHpWpbXwkPo3bUwCzP6nKbXb99WA9eeKD4zYmWrkGEHp6LdGMoGVK",
  "key15": "P7d9iKBHq5XjULji56ZuADgT7t8atjDGMeSf2XAtqGn8BhwaTKPTrHQYgREjUuYXSgYjSUV1VMMkVMz51STc3yd",
  "key16": "2qEVnjb5AVnXmkBvhQhyrpSF2nk8TPhtc5mPik5cc7HAS1Jm5DrRCj4XrKcsUKyYjmbDo7RACJ4WvAG62cg3LKoj",
  "key17": "4Uy8nAxtfiz3Qups3BqJskR9Q2WDegkG7gpnv9wGaHyrJ4NYmcWAcrDoJsPiLNk8QdUGPXr3eX52Kh2dMeHmqTHV",
  "key18": "XAJX7GrMXf2Kin1cuUf7KEdovixfuyJpdc5DJVMM2dKgNbvJMVRTHhYpNzDkMzoRktcGXSbEax7g7kudTLiaGzu",
  "key19": "3j8UronsdaU7QJFNPeLcnYGMfurUr2FU3XFDjoiZb1P7HehJQVDG7VLXyRuupLU85Efe3aRatvTcPqwXYYUPJdUU",
  "key20": "4quN8RkGhtYMV8KxSuQbFxpWfQfu1SvAhak3UxwLNeceXWKNNsvFDCtoyL1LUE329EyiGksGKizfgNksTJziJrr9",
  "key21": "3345Jt4gxwNpqaLt9GtSvqKdGNTEoz2NATBxVvhYnmWJ9ZWHNfsSRtQxMFp1dyWtZNLC2FYGhzMggke5vsqGJJQW",
  "key22": "2o12fsKeNbzRamYhuVYnRxW8hJZnjeriJYeUgh2GoFULQQvynenyhunPyMSUUzwmspdH6Uxq4yN1eYPuREUZNTex",
  "key23": "5VZzUHFhWrtLg7VQjsg24XEWBBeCqQsA8WVE5P6QxaTDNa4u9keUu7aPKprYdU1hG2jwZyRwnQAJBaBkjnhBbkrN",
  "key24": "8BATwKLBszmnU1UkMSQTq93i2RAaThuoLqkSpRxnbFRxvYryjzgt4SH7tEQdQh8x9yTXFJr8snP3P8QbQG5he6P",
  "key25": "3Xnon4GkFAEzbTuWjcA96cHpYvUvhYp9YPb1yx67wtzmoy8vUb264dUoGrRY8S6UPR6T5j3Nzf1o5rQe8NmSUPjc",
  "key26": "2kLttESccSmcxtzMEw9eYUyHWKDPMzMqrowLvjBe9u8p8p6fhApoX9U1Dr8mtcCthwCFwLaJ4AFJ6SNoBWb1oxix",
  "key27": "Dykr6HD9SgoAn6jBC5HMXVAmQTGvuHkw81C3Lj1Cv9C9kGSAWne169rUuhrpBmJzX1Sxe4NqqsP3FrvELUGn5wn",
  "key28": "21wqQqoWzPnRu4aNKLJCFJ6ewJ4wqNm7EMHNeXm8GcJee4S1TapcrjdQxSwudNPmRKxgQ5zL4CyHqmRXZ7AfwpVw"
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
