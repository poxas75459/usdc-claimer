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
    "5yJvobFzjeJJQ5UUDeiVcb8K5yHQgoDgheg5bDVZatc2XsVBhKR3gFBFGxxoAFYLERL4Zo8YF9Cw6LMKrSq63XZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55PUG5HXRabGciB9coUFjrkEQxuuhG7wKRJTmhvEQqcsPZq8TT1B8XZiSUyW2STHLHpa8z8Ys4MJ2b6wALcZUbtx",
  "key1": "2URxWK3Zu9whtAwTND227ZudTm8tYtDdgVZxcLGVXGe1nzRbFbjDBJtAKV5YVmjJ3ZXS25LcJfwqDd12qpiirCQz",
  "key2": "5EgrBuoxtUZbVmYHre82qbamwxTLvsRSwXZCTwrcc6NFiQNyRTZKkBtt7i8Vmtp7BCqsWaZzLkER53vikAw3cwwp",
  "key3": "4GBqi2mio9FAGX8pYZcguKucR3zfSG79Kx9GaUncSwzU79bKqBBCK4wQZWTxKta3b1sDMeh8pgPbjmifooHKT3w",
  "key4": "3B9FXBMdnCWuJNJxeH6isiPFVUo9w4f5GtaTMgW4Z9wvNiJnzXYCE8MWfLbqmuFCGunKuhp885CcG7pxkWVHbATm",
  "key5": "5HvdeZH1iDGdqavKX1LmYZtMobBNG7FtfrEE2RZZei5r9wFkNtrcbyXg9RHWK3jyxshm7yNgLjDWZCUrUH7aEpBK",
  "key6": "2gPowVYphjtebvX6ejQERwN9spt6awFga7LUzD1GAc4JPwEfsWApy3KojPVpKMT61dLrs26svSKCRSkb59KWkKd7",
  "key7": "3W4pMvqd3jHJcV2bKZkah1RgSr8AHVtWrQTHHNr8T4vopf8UiBsqABBGTCEe6osVfAG8HWGWGxanTNGEEb45ndmj",
  "key8": "4eWeXRBWuV7wxp3QB5Y8kLmSi7Kihaxy6ReXex1FPFfRByJEyFBvmi35DTtffBG14e65bTQ4ZhCQJ6Gc9ccW4KQU",
  "key9": "5Kd81pD4tfuWA5pdhxvGoyuNbjtj9HoWiYPD72Gioc19w8xUYGSpsefJuA98QgyxzfQwTE4edTgG1CY5VLGdstrQ",
  "key10": "LWyxqEc2qxjTBUENQeyJcDWDy5MXYLTDt4Eg4bJNRdLzPJeVDsHnjVczeFHRJNkSqMWudf71ah6ugiP7JNx8xio",
  "key11": "2bAfMBV4z9F2G5ZsCGAs9jacH4XdLqgx5J4TcTY3rSVRHyxis14RDF39Ni67WoLcuiHWYFNRVMgEWa8BmpNeo5VU",
  "key12": "49x6nqcCwBmuxVGeNSyY47jdnDpYQ1giYoqhoyHbHJ3X2dBtvxYJfMKeBvrbXZoCHGZnjdeLjt8wFd1XzZXau5LZ",
  "key13": "2fm4HPVqmqF8NgzACPr4j4tciMzAcVa5WNXeM4Jkwg5jjPLion8wUy1TuQ7AdN4uzWJ8xUxpykvYZWRkGmXAGRMq",
  "key14": "5zywSKwHrjjdxWc8ANo5bsgQjNbBpE2QoLCKnt6aqrK4vKKXV1ENt3zyj8KJpVQB4KLVZ2JPyvmAxJeMoXmSLnpu",
  "key15": "4dKfTWJTErjnRYGrkLhGj9eEa6xHseTtELvoC3ZPrZc7YHNoKbJU3dqREwrBCRychHTNzG79uJPfgZN8B9aLgnK1",
  "key16": "5BaSVjzCLssLUv3h25jcErPrVFqSZrW2WRYSy23jiJiLfcav19J9GEgPaFGn1iWjEDbAdAgxrMMDUrjMT2YswZwe",
  "key17": "HKxTgXJddzv93DySJgtxka8smRxR5mpfovvyAALfAFirrpwPeeMZpZEvVLsdn5Bb4AJMZ7h9QdQVN2ajRhbkdvy",
  "key18": "2yU3R1tUnxot3xZn1qZpSqYBoDaJjWma4b1qNCZb77qbiYP7Q9C7SdhBKn6sCLJPzfb6RnuhQVNgukvU7ezi3ESS",
  "key19": "ARzzHtSEWZdLuv2u9frxaxh4nXayxhgm9P5cJG5BxvJ7Rb6iysudok2cQQWTqtJqZmSrQXPtX3dtkg8owVNLpPf",
  "key20": "3f2iooAKLZi6j67kU49GTsSVfsRGf8ffDCg1BjBeAjG1Phnt2ouSKhfrZraSTVoqxDZpqPehuJ2daU6Rb1oaaSWL",
  "key21": "VuDGJ7k7dvdcZdheEWiEKYuvt75RPKLqRTPsezUKFCpPpd4kSYKpRYXGbsAMKwjVKAUvWfFMtK6oZVgAA5dL97m",
  "key22": "vhryvbUE4CcbWmxXFYWhgNiKwzJ1WsJNhoh3Ckr9MDkBPaYY5c8yxJSAbUuGxpuwq7EyGw5ikYyET4N1CQ9n5em",
  "key23": "2fzYqk3bU1bCjfaeyDUNbhsx9fpH1qBwzgCjTHXrrTgXEp3WkuzhGSMKovpuHfCHn3BE4rhE8Za8TCJUTFEmXsPb",
  "key24": "4afJd4cUfF4stLQSxrwN3qHH8LNGuRSE2CuJ2ssC5jpfqqk5mxXSa5nxzNQ3uM5ZngpHzK8j2W8EXZyGYQF9ss4C",
  "key25": "28NVSoLC8v7eboFdyAGCsBCR2HstjSCzdeTJfAd8xRYet3Cre6XVQptmH1ZGuzHGzpQnCuZtsbp2xtAWwWGBGQZE",
  "key26": "2Z1S6TRjVubbfbbdUDsHoTzU4zpioUWP7bAPkjnpgodBoutf66N1KRVNn5Zuf6wsEUNiKNiPgXr1LqMJ5c38P1NJ",
  "key27": "2GeP7b9hfjZcg95HTFR6kFLnZ3pdvaMCGr7LwFnRyyHctGSbVY5B6mE7xDwCJWztRC9vg7d1A124cceb1PTrmaJT",
  "key28": "PuyUWbKiSQzg2gtiv65iQuDcFGvATg9bz5xGEbUR2w7uVvTyv2vfWQftvBMdfherbTun5kJF4fJS4VB6T7PVg6c",
  "key29": "TAxwbwreKb58vPSMK83DeDLqFxUmk7hBCo6GYpA2PvoT9w8hfd5r2wbWNNUDUqfRppLkb7DDawtTEZx1F24Ljoa",
  "key30": "fe7UCFfbksVvVbfMuiygmxfBANzNU7Hop1n4BaY1Q8Z97t3Stq9a8CjBqhVXxrZ2RrxsZbdMByunGxY8HhuPqDL",
  "key31": "5mWpAj1D2VsHWTk2DForhXDAvhgcvK4DdoQN7iLMgDUDJTSkVKbTsi4Huo6SL6DgCkGLHMKmmYLaaLDZ3PfvkEg1"
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
