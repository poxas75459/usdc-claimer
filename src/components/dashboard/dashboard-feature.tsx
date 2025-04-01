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
    "3CEAspZ2yvag5q8hnFb7HtXbtTdFKooPBjUKkPrUiLRY18TA7o15mhKp8FN5bTvfu1qpWpM7c8hpWd8fYxnKTcc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nXguPiMK2m31XT6sp57ZWQSAijaXrPFFe4sm7agHU2V8rSMNQjbm4MR1XdqxDGCKity4aZpBbzYVBHmeSmorsRW",
  "key1": "567AiZAfj8KZgS9PBjfiZw3SqrMnjKzqLYMmts7MUoyHyAtEUJXzRoSsHxsUMKRdN9SsT6WmYe9Kg3A4YQgSBdyJ",
  "key2": "64g7j4pQSZHnJDHpvNDwtdGHk1ri4AhrpMmZVxj4QhHQA8qktbsjNRKG4xbe9ExdgDeFoJQodQszktGa15hz6duN",
  "key3": "5hx6UK8v5bJoUWJj8GjxbSS4wLvfGhvdJNksberCueauB3AHoQXw1hJNxi4ixMqXvQceAFMuhTYE2bGCDbNXzScv",
  "key4": "4rMeKYwe4mLqmzAbB4UYCpewzNu54vr3SXyBFT3wUFyZTc1sjzdAQKgGgkeTom1B7HCjQYbXvHLvvriRKQS7xspH",
  "key5": "4y1aLv3QekUf9X4s1VdzpKdePvz97UjDvz3GjQuw98bGb6Kq7gRyL3aRbwwpuA5M5NQxYE3pExhRqr82bBSMHUH3",
  "key6": "2fPzmNEiqjwvZRfhKSUjuJuLrHDtpKdxoibxMZtfvCHGQ2uKiKJVTrvZhRUg8Lf8TWDAoFcN4YDQUf1FcUvAeKNT",
  "key7": "2bmyDkaZNC8FpErmWuCpfPcwQQ9zgdCcSUyjaaK2pHa9BUM36LV6jVDyrPdL9GTu7b8ZLcqgQ3XAPJPYhNgjvDBR",
  "key8": "3epHVn63VrrQ4yrdBdutTiGuZwQSCMVG3jQnvpuA3iw55aDjeKuppthSUxvq9pX8fShqRYDZKxcWoTsBLKYNKESU",
  "key9": "46ycfDKT2Ba1JMJEccwqmiwVZsSSeECXFpk2Z29M2fgbbkjKaX6uJUSEtJjXsDG7DoXmoyxQE9dXRU17YbKpmQry",
  "key10": "3zrJrY8q7hB3DkKz6rYqzNuDoSXanGZKK8Z1aSWBUTtsgHVvkuAyxaB9jB7LMsBumqePWiY7fttkDfucVKEJeQ14",
  "key11": "5W1SYUBWYDXZuZCjruHLajGLcjLbXeLoUUtbf3SGqQmtR2kSUVmnSx3x3uq2fbBwAjwx89KTdZppfxgogTtmSjTd",
  "key12": "4rMYn8surYn1u9H1HESeDCFJSrJgZYNQbMQQUrWKBgxhcuD8EcEfWU7DsMQk1TtEusCBH9727QWNBfn4UB18gn8D",
  "key13": "dHB55Vs8G5i5Wadjz8jCD39GH9zoQv8cmMHr79QiGeQZJkU5kkmVLrLUwy6dP5pGpcfPMMhnWrJPVxUqjxMd7tY",
  "key14": "4J37jrFU6pT78N2BN2C8WZLfeSmKqQG1uvZcUwG8kcZg3qj7DKTskoiZbhzeA6VL92u3ZrzXGrGMc9CD7jvdDKEe",
  "key15": "26SFayy8ZhSAiyRhxhPXxpLP1AdEWDpHWjFWfvvekPpXDwK2couGgQNJz2qo4phem5naSq2JjdCHmTszpGgXGFp7",
  "key16": "cwkTDM7ZQQi6FzBEMF53C1QqQLVC6VFgZUTecsoHtGxhYpsS7LPQK8vZL7YCtoJGRBsAqBX5Y5YzsqVJjhQHfcm",
  "key17": "uz37vCskw34GsCLFrCr9fi38MgHUWsjoJsx1s4qHV9xzwZPNddXuYnaFbB7oY2DGNeASH2CBdQpn1s2nzXw9uRg",
  "key18": "k1zYMwRh5nb1V611r5sFxfK237QJFkgAGFjVx4WZGdsZunekAzBvyY16pzBFdHeFLExcziM9U9zKdmBBCct89Ya",
  "key19": "5aYcfnQYGCnouKxuwY321qMJ5jm2Z8JXKDWjZ1qNhWiFGBKXk1in85mRAibkoqY7SABuWNSBTxWxipcQTmSvAsYS",
  "key20": "2rG6ZZk72rutdhp1JRg2UfFh3CwzKk3z67hroirSpMmkf1N9PxeR3MQCD72PYpqcC7XAgUH3gNqLoAo2pJMobngC",
  "key21": "5DxFNonJxPGMFgt6t5XjT5B1Dvf3MQAgUxRrDwDUttjY5ry4LdKS2TjKb4p78S9wMoeV6JMuSEZ3bf8kfueJ8ccK",
  "key22": "2HW8tVyRc3erCgV3qyxntjw2MprpkNWPYPeymwvbRmympoaUNPU4vzgcPanguH7GaDPwtihRqQdvAnthEpu6xJ6g",
  "key23": "dZvnbzBw3QtxygxNxWz1nJeRT7JoBQpaskXfdHcJxxrwdxGuHXSrJxEa6adHTUNkdTnBZvEePZyjSNpJa76HPZz",
  "key24": "2s3WFVgDJ7Fg8MG6wupZQE1DaEGrMLg8uWE4nsRnt8t8uqakN98nr48gHQwBhKKEJSjAv4AtDQ3ptFEfxPEPhHgS",
  "key25": "5nha4GyLxEuK7LVAmjPp9qaNceSgSTm7d7nntwf5AiaB4RS7YxNvuZ2LCdP1U6Kh2WZ71T9TerzotmUjiiFt97SE",
  "key26": "51ZeCBkYvxd9XHuy9CgDGkG7H6Ksqv6Gvhpd6va7ofSicj1uUwiBh5GyK7vUYGE2sJMZM4F8yQEM6fCDxQidCYcD",
  "key27": "36uzpRZzaxcpr5gurmXy9PXYBFDDUGKdEansh8xfNRAPcrgyYPW6wGhZX9te7TV1YawSNPDv2xcx8PLZS3TdAqsA",
  "key28": "5cTqtN3FSuLYcWZYhi2SSxj8icW266QVfY816mxMt5ajxNJzcB43NmELYk9FTAkYDonvfCB6qfL2vtoDU9nZqebt"
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
