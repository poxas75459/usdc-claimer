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
    "SAbXSqCmGFrPLL6JzoCBUFaUYemK7kZPJFsQurzAFU32YuNsoWUentZxJvzw3ZKCazurVBs9DZpUHVCgRHdRCTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hzk2SJT6PY9Ce2RoVKP6NcAtumkNzR5inszUspNkEaiFu2tdvDNQv4rfSbHZeVaTJFrJf4dr6ntPSnLrcD8VtGh",
  "key1": "3g6Nb2b8LZANU9xAwo31ZxL9ozjdHhpH15HqZ4k2JwQjZZFXRV9inkUxhfaGNtTFpGpjY1TDkp4Fkhkfqr21Q84m",
  "key2": "pce2XZA5JGfCZEg2iLkukBhixVXy7ZHUkJ1s9fVNYyAhEHMnuwsnkzzd1YsfHLMsBnMUZKzpa9ZwczQCqcJtZsj",
  "key3": "44hgfspnqhCzyYXKJmEXDtv3QZBSuQuVkypAioFcYhTRFw5N7FrihziQVzfyv1zh2acEe3skeQwBhpr4m4oSoF1C",
  "key4": "mVam1tsgarSDjKe9hVx1dC1XctSQwtuGmHwXHB9dxy8ncph3gfEyrMSsWkXhA38WA84eoxTmXqbZCTV3a94Y9e1",
  "key5": "51FPLCRKSyRtLzYB1n2hbchzxASje5qGKmYxk1EhStPL5cHBwwnNEEvHFYc2QXhn9fRx7HdKXnv9dQ19L5sRuHLG",
  "key6": "kqjBTkQhRAkXt5eXTeQZTKiMMPxD65hJLUr8wjkhUciFb9iYRmdJKyX1U4e8neC5MfnnjkBYPPw4L7JWEDUTdMF",
  "key7": "4zhcCRtQh5afZaEAkymEMUZLC8ZAm6eomq4Uub1caMod7Acoi5ZWXXMwPfDGqGMDsRDMpcrUfJSm62X6BLQmneNg",
  "key8": "54VXDWi9BnUvFhJNbP3hBW3AZgC3GueALwwQEqhQpnTgqkJEWQQXgiAhssnxyZ4SdjcJMuszyqHczRiKzCVB4nmk",
  "key9": "BX1LKYaL5njvVPkz5XoeWioCNbCYCiAaNZjWXEpmGrmLiYqe2BRP4Qo5A6xMGf4NLButD2xJKashcbzTKdjFyRR",
  "key10": "MKEL99BnmqNS6xW5Mppe9NUty1vUEVMPmvHJpiUpE5wqp7Z1DGhBMzGxos5piM5Qb5XYkQYXjuMmum22U2fReQx",
  "key11": "4zEJyJXYPoZ7Mq2eP2pB4TjWQcW8wrXku7K1FtPWEq6y7NJzPii8qpoLBtPD3hgPQQxJgRXh121mNZpevborb7tQ",
  "key12": "3o9BKzUjomKW1xgBLqzu8DnvRSzxmomrPiJoDbTsC2dY4Tcpo6JqPmFDY98kn6wNQ5DuCg92pCKcWdJ2jhWPaFeo",
  "key13": "2XpQMsnFPtnpDJDSmupjYenMW2pJJpTdoFjv33VkZGHy4HELh3mw2n7izHAYnjGNuHPuPHYG4ab4QXh6z1kq7Lf",
  "key14": "2kTrmV7qismv6a8a1mvwwA8CdsAqXwaGL3ehv9hcHDh4LWV65Dg5FhTjwU8CZZ3KLL8WmBwYfPqCjrciu9ptgAPf",
  "key15": "3k6gH1nMgibdzcvJPjX6Kedw3KponvGxcA9tpYSBBtUrZcvKu8Dk7UjaYjjKgtpFqzYCHQe9cMykQjzKv8WNJ33v",
  "key16": "cHynG45UdES6ujGTBWNQ7QCPgxwfRKL9JiVy2XqKrTfKhkaFmRgwAzsCDJzpSMLRwHUmXt8rVdpsznf1mZ4Qm5r",
  "key17": "2aLjPKr3xBjDtmb9vXp6VsxpGiafpnkeSqTe1eS1mz5LcGnCFdHC5JGA3HBFDs988Qp3yvLzPYAEedMBhTJ9zjZY",
  "key18": "UoNJVeVhCTkEfRF5Au7PY596DhnSrBNoNt61a9QEXqF54QGxzUzmnpjnXTVsXLGSxSCHxFTa943Z8YJ7hpu1fex",
  "key19": "4b4UsfgYNXDWTju56ALRTLZS8gEjBAtwK8poyDwDvpVWgauMLpFdFJfyNztDzGS7rWs2MZ5BU6YgmwxhJUZ443Xs",
  "key20": "5DEN1cnNp7CpuoS6C5rLLSB5Nabdq3dd2QQQ75g6mVunhEsopsxdbAhtFQKTNvQPnjPtontbNWuCvSuFnvWZnSSP",
  "key21": "2XLHC2G5GB5rapUG6QWU4caeWcqMXSnCrunpDYg98T1R3bCXzfYhidu21onxoeBibw4KKuX4reeqZ9fDPp9XKF68",
  "key22": "3WjL3dKk7sidpYsPCd2Xpzxn9dyLZXz4teBfHRwBuqQwCZaw2x1gsTnQXHnKogUZsJ7VLPqbgERkyUdjCGMeTYtc",
  "key23": "4cTCcyjUi3bHEho5YUCNvmXS39FB4CAuzegXNiszFW8SjVKBaBdDLtpy9SsZLHZGKsc1nWC9jxhnWW8J99mFCFYQ",
  "key24": "2bu8Wwj5P5yPNHZj5sBvUrUe2yTu8f9BxfdqonMu5ddYR48G3gQqnTiU6qZnTNwUAE1yNLYEHbFPxNFAm9Xj9mTe",
  "key25": "54KrZrbaQaNuzgtvDf5LqW8oYP3AnDTUx9pxDMAj73VYbyD4xiwWNzwHLWt73keQ5WWxQydNjm6L68AgZjLrk64z",
  "key26": "3cEyjbwAwGpe8fYHKhynGtVNwihCFLwUBpC5hpau4zacQtbLAHHKdTrYMyDK8YHC5oeetqpxPtiSPJE26fxBY9p3",
  "key27": "4f61BxMuTMeGF3UZwEmhhYW6TxFh6a9HRyH389vx5QokFchzaW3Pq7VyWZYxZthYKJESgrTNL2aBLoaX1wT4VgVs",
  "key28": "4AmCCmCbGGVfqe1PcTm9AUDF72Fat59iiukBjrCR8sen8WtQ4gMLozCMV5nLqXdgyynqgxx7FrAqYVCZmS52Le13",
  "key29": "4hbrWNiqSRvYxR2anPjvueoMfWwR3ENcNk6GYTLQvfpJN5Cy46LxuL6EJunW6JecGJifYBGtubAcjPmemSQ7PVi7",
  "key30": "z9x6ugQ2RPKQbnfZBxG8nkbJTst5zcJVzajmb13MAcgNdtP3pq54TFu5TxZNKnvgW5kFagW2TpZtFFnmAftfKY8",
  "key31": "eWFj8QfT1p9dmT9R76fKm1WPNHVYAoRWTVdAfmd7iwHE8P8vECihCxU9nH4PaTtWNNg7ZLkoeTxV2kft8YfBTQx",
  "key32": "5v91a4DHvVgUQHP68tTqfPpniMMy1wrXknDzfj7fTXWoXo7G6P88UZRyBvHTUcsRYK3BBABXsnxBNJEm59VdhKvM"
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
