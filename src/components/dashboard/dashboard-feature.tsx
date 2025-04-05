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
    "3QLamm21aWTxmoaJjyjVQPE2uo1EWH8HGppzbpjctuzRmxQGAtb17n1Rs6uVkbwBPn8vLBZCPAzfy82i2Z6xWgop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dbA3sFkZsBMnNLNUpiCBJQkGeywa6MoBJz9a9jx3XCWcRdwFDp4LJntXsotGZ12KHbxbM11Y9mW62YBwNhFY9nz",
  "key1": "cpGywhmJfMYABHjCj7zgZLkBLh286DMyPeUQb8a77i8RC54TgmmV4brfuP3jK1byeQsa1hJaq3dXWEya42R5zx2",
  "key2": "eha9NKipGYhY2jso7y8eH6qNPkwQb5QhEA4eUqR8ayqc8PsCaqkd2Rv3dyMcP8FJPTDLSEshvCELqMTwEAtr6wx",
  "key3": "3m9KoiHiv56q5WQvLPpxQ3hFtDwzHWNFMY8afQJprppVZWASUTH8VkFQ5yXdxXMTpTwpMpQvQzfqzqbsn2TCSTPv",
  "key4": "myDbcbFSXMHsnGLcpFFcGJqG6EcseERWWU2MyBJvsX9sPbRoJY4xCyGRvV14t1gU6eKy8rkcK4ToSshCfHSFGNe",
  "key5": "5YD6jnGkhxvxtVyLiYkdsTLQJsmi6VXn85uodAxs7VqfHZChB2Q1XghQ6gRnMhbf9zT2t3uF8o2G3zPV41bxTqd7",
  "key6": "33UuzHUWHVQVHpFwFC5wRLV9VtjeA4a3EnU5wrDkgQfrEmPgHQdNXv2V8hQEkb7kquNd7PEvepaDw8aqEvWtN7o9",
  "key7": "5gEB6hREGPQ4fGpy2fUxB9yRcmbtPt5xZuRpeGVNrxxXh6kny9x8wNhVKMKJcd9zGTjom9WzExtVD4KDuRw1VUmj",
  "key8": "5Te48DuhHv5JgS8AVeFUmBLMhkDwVNFzEKRuhW2NKdjZ8cEiGUn2qRZ5NFtGvN8rFQPdFDntRu7Q6mWheege7tHd",
  "key9": "4X2sXH5eHtDnBczhPrTTX65NJPsofzSioEE1bFmDqLhWRuvQTPLrZiQQngM2CNUx5pTa4y6bBAKkbDoQWcpE44e1",
  "key10": "CkTFGW87A2QG4vnRAsEJvuDcM9a68YTvKDeNZnHisYGUMg5uVvjG8K53DMt7BnmBSExB8XmkaFJkvxtYakVH9MG",
  "key11": "588qRrPqwQxi1A4rNSSQpFKf8X1Ey5ja6jWfBRsF18v6aaH9Mu8QgZ7R6RTwRQoFvhetest5L4cuNwHHmmxA8J8J",
  "key12": "3qeR4rMa2czLRZMKWqYp9FvKmfF32wJVzMPbYJwaL483ocih81QMYXFnMQL94ao2ZzEMmeMypZfEsKptW5Q5mwv8",
  "key13": "5kbgCXH3mX1o8EK94kUAPKr7wpvY2C3rYjQQmtWHH7X4FhWEphJwXjNSJ3CqbdvRCM9sHAWS3L5PHSKv8hU6Z7VX",
  "key14": "utTJDSoAbHzo4Jtq3oMKyLrM5H6v81769pJvLS23w74b4GXDCfveGvTJLtB5AQH86gkkFuxdK1QijKKyZ7TLNnb",
  "key15": "2y22WuMNuhnw7c7FFU2h9ysNzBMiEBZgqM5XQbZo2aBq17PEtvCo9csBYV6zRq3owJDcFdReTjTxXZD66aXE5wJc",
  "key16": "2jLhmqRD7SBPBL9sBED8VEJtQSRMQdUhkUjYdEN44BVJM4WmVYHKRdaVtmCW6vmqs3gLGTEV3R8BUHvCT6HKtBof",
  "key17": "2TFKC1mnXJPV9hP1P2VBfphSX3QnQyWT3p1Q5JgrEXXDcmJrEZLHPMrbrb8ttJiByDgmYVGBgiB55TdavSgzUMwG",
  "key18": "2onpQ9rqn9DLaW1WHpStqSyLjTTSXTWVvYV3Ka5zpQNmuCJnZxDHaJQtYhmYpk1RuC6pVWRCWBgCryxd6SQ3ocqM",
  "key19": "4cSd9eLJJ6VoPVHtBYnuFhtx9umtL4ja4UB58pGwAcVytePxHTKaZ8FAgjZE1GrbJ5KaJDJaDid7b5Hmt6GKmPD1",
  "key20": "3vz9cMPJ4twgAjbHrKgcWjnZHqA2C6BiQkodLFnYY834DGbEUtTo2BSkNuXaomEpS4zThC2iNPJK7TqKYPrLamGN",
  "key21": "4mPq6HdMqbfykv7cDdhPdX5epnFH3jtGNTfvLK9VWb13k4d5RRWgEhB9wepX6xWK7A7WgQBxobQESBtDx4zyG7M4",
  "key22": "4VXieWakYzwUUx35jaCjDu5bQ4Bdvzsdiy4rUaVxZsPQ6HyCLqxKaQNCAMyYEbKXqUH8YYamnDES7Ti5X9eWJr95",
  "key23": "3Vjm7YgWaTP6wyg4MNynwZfWt3yF65VrAQ6aU2rtdQervNEBhUs1SnGHQZJFUoLvwLCrfVQBRdZGeYVoBpJtXtYC",
  "key24": "txcb4NrnPz5Pn3txz6P4mYG6QeH4vyheQoKG7VwzrjCUPBY27ED33c6D49deuGw5yiCZo23TYk8RNJHDAmfpi7e",
  "key25": "vDznG8FRfswZmHyHgYBUDTZHprxurSURhnUsaqjZe3ZR3YMoqDikMZaqWeVzxqw5WwUsT36vA9sTg8xWFEruEku",
  "key26": "2pxLdxX9JBqVHNmST5Yxnuh7Krvp4eU3PPqxyWJeUdRZreVkFoiifaifonRaAofK5qnwqfeJBQeLK9NhaecbBxWQ",
  "key27": "3fV6voCBzD33rE2TzWeBH4ooyr7FAg2d2mjWsmkaGsuLHgt8AYVc8s42eSvRHspqVtRN37iScASpnhvRqoMbva29",
  "key28": "2V65u7EHtK6ArwFqm3ycjhUHxwKaEmAvGsdV7Xsfigdid69H5jfPdkRJHjDptsHTatB5qHK3pzM3uz6j3Qwo7LQw",
  "key29": "5hbVYxVzzfU3MzQzUU8WzekN2orFqmY2mbHEAu5yD2hSJFhJu6AV3TFBeokH7KWTct8m8Gw5cPdcsFFKm8JmXjUW"
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
