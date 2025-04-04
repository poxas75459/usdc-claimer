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
    "j7gJ6aUv5JiZvX8GWhrhFPVk6q4cdofb4eu83LGQtC1eCvthAueCZb9KPamq9VKwdngHNdVgkjUMqEyXMuwn6j6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w7bbryPxZv3XN4K7qDugcnfot6nEKHTosZMdk64Ae5hZjL5XCgS1s5PdEwHj3YdrMVbuQrhWiabkoXhYCHb4Joc",
  "key1": "QBgYFcCDLggoQ4pXtm4fjdyBViz9Zf45z2wkJcWxAUieCEGdQjduPC3fEsKmMmaUL5Zpe8BgFdu9mFvJkLv9pRP",
  "key2": "1npLyusoSRptfWDmmFiypzkjaj6Be7ucW7vkuFFw7HNqzm9ofceddiigx3XYQNPzE8aiXNENbkM21t1Rx9ZXcYD",
  "key3": "2uMcXpR9ygCQobRzpBBMCY6nwjQeB8UveyCV3kTxnmPgLmmEStMEVAp83YuDNZu58cX5itLbDQzpCdDrkr8i8HbY",
  "key4": "3rYnxNd4wmdD77s4abjjgfUcuBpXJrADRsGuwYPHdcwHhRBEG5jBAQJqSLkaA266PELvUaay5Z9B6rvJe37Y5Yp4",
  "key5": "65GzUi2s2uTF6RbXvs1S73azHQtH2SfXps7QSwsZJXxEJQBStxVVzxiuZ4bSYfFqpkPKUJoLUixzzr2LRwpBJzCG",
  "key6": "4SaJg34HnDs5bzcoSxL6pSvtgmNiPTCxVruNh6gRzbfwUCMQ8mHcBmny1zxkx1DLJQuPyMQsHDrZhES65vyQXwkJ",
  "key7": "1khWNEmRos5hrJPUi3ua5qfWvH4Lr2LFi9Ru2CZ5Y8pkYcaLr35kjLnp6nATEucaPiGTEFbSafY3MaNyU5PgUZK",
  "key8": "VJToBBJBB5aEjU5ixaKzRfXe9EmgmKSLGuEj3YMzAKBZT8MkjzTCKBusExUf61nYLcLoWmhLS7cBvNw1LqzcSgo",
  "key9": "5HPcv29MEV2rNK38WW1CUYUF8NbFkyrtGn2Z9YHS7A7G2NVMV2aSzhezuR5NiffUC5q3rGhZBes9PGmzq5VCx1tG",
  "key10": "3ri1mQeb9Db2XqYAhCNWa8mRnd9QtsvSFQiM3XghYiUTUBPvKAakqp3jjqmdLaE1RSzizJ67kqDqJVeaavYtA68W",
  "key11": "2kqaZR96zvX32HRwEi9tFjXWHkfFU3TUey6g5tN7FactiH95DGwBKofF1Zw55djHv3FLD5CqDotmQn2V7abwpCJr",
  "key12": "4mXMf4Mt7ZJc98bYnZ1c4sbz6QZWr1mpwM7ZqKasbsdRewgNwtGRhAWturydHsa6gnTFykJuGZjR5gno3i4tB8aB",
  "key13": "37W1uvYzpWfkyiNehnRpVqTP3riKVzD82aMyRzWifS4JcVVYterHRisS4z6Vdcjjtwohx5pTrYwV2PVcqytkkdJK",
  "key14": "8JxvbCm2QPSpTHCenSVj8rj2MCnJuNE8hsCXi5gszYS4h6634fvrJmZkwhgQHDCL6z4LGGTBaxmsPH9myJMKQuB",
  "key15": "5S7bszo8wqTtTH1dGiR6jvh8rr5AxNkkcV8y1qmDouS6542GgjumNE4TWFFSxbqzhEFnpNT3o9WRWPQb3S8s9XZw",
  "key16": "6B8Wvdkg3ocxNVrKgq8XYodpxUmp5Awp5Fi55Z3A4CeprX1kkiQs5vFcB1z8Et7J1w2u46rP49YzLW3LPeHtevs",
  "key17": "4A5c9tBEV6Qw3r1Rix2wt3ZP2zFxj1bibH8fA8ctFrX48hdD4oah2RAEBs4DqTw4hwJqRc992mvhar2NiLY6yMd4",
  "key18": "VLkCfrbyTgQtqgG3iFw7M1YGqa5ntd5P1zfchCpBdFikWfJU2a6yFiEsFppXAR4n2ZWZsvrWH268Wj5aFNir8ib",
  "key19": "3zam6WbtpMNbr2CBkAbM8u1dGWtQBmSwNMcSgj9GD5FWR5d1GyD8dCYRdTNPFZ6Kr2J3mrYTaf1cFeGvNRcrBNFu",
  "key20": "3b4gz7utGyesLG6jvFZd5TMyAM4RMcNAojVwph3StUR6tqSMPRq41Qb4Jmzrv37hpqDEPoy3r5ieyuTrfGnoAu6V",
  "key21": "CPDiLFwGh9vSZraUgmMghf3FikktsUrYims6vg5VNvLQUE5ioVSLpAMK7JaqbeTtXW6nksSAxvWK5RnEay5pzun",
  "key22": "571kmV3b7DRV3t7SFF34bN99i3KSH4WKxPgJoQ1da8bhBdqWRtQSvHVsfhs4SaBCucujer5nK62s9c74pyrjkPFu",
  "key23": "3kg3nNjz2akPgrGhjrQcHmpgiPSeJ1q2bMMg3wcUAD7L1EzpNSEFsxXfWSGeSw4QHNNQ55WcCfoSduHc3vvCgRmz",
  "key24": "LjHYs8eiRbcDXPTuWuDRu1bkG5piTQ9cXvjpm32Uy64aCBkRV1qjYQ17zNm79E1vQCtVh5bENVSFpATUfVtNcmq",
  "key25": "3NXBfd8DSY93BEwgMuGnm1drLkuzwVSTgN6beA2izUiyiRJUXjTZ8mPLa5fNrrXxnK71BCfGxBPSkB2s9KXb3psV",
  "key26": "ByX5Q47shpznkXvKVr6EGrzvF8Hk1wBAGejt3CGjxDamc6ykWXJfUKS93syVJyGFWAGQpERc8ibgcC6jxKQs49F",
  "key27": "sE7x1bqRrmrVsWE29rsHfPCXNr4aCHfZ9wEXJSYMHi2648eZSbZySvHDuP1V1XrXk95QHSxQHt3NarR4tvcnBPF",
  "key28": "H7Z6SWYDfQJZxj24uj4MEJNVzvGqDPt5FqVinpDZkjpuVDiRmQEtXcmL9hVeg4NbgTbZZxGh6JZ2apNn1hwJRgW",
  "key29": "3oBb2MxZRvBrKajPtiCop569Cqf4LCLnpsyPqQLU1WZdSHYKu1u1CFVgLru4p8rTWAfN7zHzakcxyZDS8Gdui75Q",
  "key30": "5UU1JZHh2UBPUbZryyzB45Ywsa2DZSrz9VLMDpnPKVkj8U2nTHVvbyiWEtpzUF8AuvcH5kx2XefSprAxNdjgRqpA",
  "key31": "3zk2qCBE5AoszJRp9wjrSJWMuwm7v4XgxZGVjJzNu4GcrHwpZkdhBvgBcixD2GV5bSr1GeLMm3kqkrdY1vMhKHfx",
  "key32": "5eUyMbMXwwQmdFLAPkGDD5rR7V8eJ4kGXUtUj9ThiPM1j77gWacAbv2sUUvPj1H3vQZdm6Rj1QNkQYB82uk6R2se",
  "key33": "2GQp5qv8aoE9whh8YnYWFwqxt72CSie3nde88SpKmKRZhGbG5okX7hcdrdxWDzffAALfyxRJUygvRpdVotfPXzAH",
  "key34": "5BXmCTQ5RRohhScGAegnetMUjCx3xDZhzVdqpWNKgxr4ZscKTcFjudjijznUDkfw3ggdxX7nmM98CQCPoh3YU5cZ",
  "key35": "3PQp9uD9d8rzj6tkDK68NDAfR6uqpKqdqYqkpF2FCk9HYFzbEsEs5XRxm4MA35Hdn1iDGdWJ6ZaxJf6jDPpehVmm",
  "key36": "ijBNV9LLM3btJzF2Z3URP4qfMQjrfAhdNPt2rpuKrSbjvAYkmmtZqFKj8XS6v6jMdhe8ZUH64eu3n9yV8RehkZH",
  "key37": "2CHtMjd4oaGrFnc99dtoFYpeBWxHEEukWXFSRsf6CB6ixkqv666DcWLeoCAt2mKYLaZNY3sem7mUHca6T5YkNhnn"
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
