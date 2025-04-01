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
    "3M8dTUyUduM1uBvS1FvDMWJa9bQkJyvL2eJ2s6xQbi1PjE6MvvHnjXx6sr5P3SLqXYdk1jxR6qc2TXnH9b5eGi6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z1HwdxTps18uPagmdVd1vHGr7V88Xq2RJ8GAWWLmon6RGf4JwF8KtbnTB1Govq4cY9qNs8xjtgHwqGeKxhcNtMV",
  "key1": "5rajhZ7BawtGZoGNbSmE8kGELdfqmKM7phk2kYPtg6VgYzoP8vWTkew8JafnLX1cYGZxe9M9nfVBFSaZCs5NnEgz",
  "key2": "5S4Xtd7L9WdrPWaqk4e8kdcnw8iMSwDhKNSMZkoDfHNcvXdkru1LB3RSgPAx87q3FrQKSSfFG9j6nTntUWr7dujb",
  "key3": "2fa6Ws5bJo6wbKAngQrWkxGdo4svRjWXGz1r1s68LU6o8n7WdJ9kMSsXQba73cJb4AC9Ap7xTyKxLwzeoh3PjJw",
  "key4": "RNmvQEU3v46fYgBhFJ6NgE7kR2J5D94YRD3PbwPfjbcy5qLAKokyNHKAnxEopgwDsNJB8R8h13VeKhSkoAgewMW",
  "key5": "ux9mqRJTAUxZZJhhbuSzSanF1crm7siB3qBSuRCHDydRQS2MagmmtAXXhvitVUxqFhzHUPqumxS6WNHzFUytEYW",
  "key6": "52JZ8xJ62JPRFgGUu8KY5KgXXUsZ8fUu9zLhCyc9MKBZgD3wbd5exiQXQEWArCnsCEbA38X8romKY9M2nuahLZX6",
  "key7": "3FB349PmoVoMKJcRFmRVc7z5yYLRCGuFErot911WWKeKH212vsmG6ETxq8RU8Cw8FrSmeKgA5b8pxWSqB83UaRvQ",
  "key8": "23n371ymmEkVnrtLJL6fXreixcExEbQwsVnjCJNoUZLo8r4RnbM3Ama1fHc1HM2NNu2MWbYeaXYn1SskSpZMWeMa",
  "key9": "3Tm64M7LfpmFVJHwUykxRDX4aJGvPHZcMim5v8qWTsa1PZcU9y16Pv4LBCwXts9uqcqqnEvK6uHLYCK4YWZExExf",
  "key10": "2f6mqm8xAUSRvB8kX6MynYSwE4Umz3jEfHGroaL7jYv64YNd6psFNh45p2qPcw8PHa69k9rsb781qpx9cB9jEGqX",
  "key11": "4cgMt9rTfzWNAUH8KwtSPDLesri2tfgCnT1TMRx2RiAbNX45HZETLskPmEJrSNZFV3WdgUNJqJR5C9uqGHDK9qZ6",
  "key12": "2Q4NK3EzNMoEMGWr3f73es7uidZqe7cQhm6mC8Wa9kDsaWB7zqa3vUL3jKB8wyLSRh8xgzpTuvBek182KdAmfxYe",
  "key13": "3dYKFRiDekDFZmGNawDnuCPKSJo8VS4fxyhCN6ZgiHYA5B7xE8xNDE3KFmo1UL1dLfnAxbVW35VgzBhiSPpdwb8M",
  "key14": "3JPVA4gsriCYbEWfwBNeeYJkYmMCcR7r9n6NpJ1GYD7VxsevDkpQXsSipm1mrJfPxCSKWD6DzevBSTUSz4gcfiBS",
  "key15": "3ZHjWiZFwDpHqJoQWcLBsaemj3jukut3XhGBxvmpkdu7tJZ5XZiLYp3xj8e8PLXMQHMHFVqEERiHrrK1mCG1bvMy",
  "key16": "25iwAr4PrGMPZhZuud7NzRC5Z99npecTBZHnFivNF7F1SeRCucspkE7JCD1xQnyVudUVLRKLrkNsiN53C2pWpBYY",
  "key17": "4LvkzjRdochf9YazMa5tYcDKEYU1g8iAbQ2Jk46T1Ea8t6BSw4YU9TjukBKmdMtbzrjdQMzzykqUabEcFmpW9eMX",
  "key18": "3dWJ8BN7EEHMTkeGD8gJToD4PLXfYxx4rUJ7tc7gTYG6LfZHpzHcJtuFXd3zctw3qGx1YchJPSjf7W7q2Rhbv3hn",
  "key19": "YDcuMquevQedFNGsKSWRvEyMThcvYDs3d7DbuUwqRXKdHwdnM82WD8W46XtzknwxdWJfxXEuUoWaV4GAH1PUJBW",
  "key20": "5jTAnqvaCg1kcui6XgiupfiiQZXsZwZzXrZXzC6TYsgfwcUq8jCfEmUEcLGbfcjLmfHdBUm9Yepp9YsWc4kRUkxf",
  "key21": "HAWFSg9yKcjHSvPSmEEAKFdcS5tBZomASCn9c9JjYqWnwWfoRAqWsv4wEqxCtac7G4wLP5scmnJ25BYBrouxGTT",
  "key22": "31HYaKAfN9Z47HWwGk2cxJW2DjF9t4dFnyAkcwPrtRyudbd4agarQHLDEeUMsSxZjTN98a147LzsBGuV8Rpo7o25",
  "key23": "J9v8MF1MEbwXmaBQFHztq3U9tHJphLBDAVp611DMXC9YYMefjAoXbzb4wfeash5MNDVdyH4uzkDUZk4XYupRUFZ",
  "key24": "5gcyMiYqrhz6jnqLcyZPGv1hLLH25Akpgvn8xGtanpxzba3846nGH9SGFPyGM2YUGjhQTmqvRo5hUzwocBVaU8RE"
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
