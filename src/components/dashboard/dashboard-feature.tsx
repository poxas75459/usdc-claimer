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
    "3XSvNtMt7Nqqc7t1gvk6fG5vu6DPEmHHQMehHPHZCs2uTWNcPaekbhabwDtRtBrgj4p8bb1wCKy5zLaigd9D8W2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LzDcSkeYeerQ8tiVWSqXf2bXHiPpW3yj5LpgJdaLyvU9bDSem3B4n6wDP1FTC1waY8UvGQyULJZbWQDGVgg1jwb",
  "key1": "38tFQUVg69kUwXdJtzgBCLrzYv2L9foZHtVJM2XxCvtP8pkCDgZu1179aQUNBVyRaQ8F9jKqWmHvQKfFrUamQC7y",
  "key2": "261MVLEyQ2ekWk89G7WcrwTq5zFRXKAF5oFmMs6jzaWAw4xNXZ47TxWrJCqahKHnfDZNN7Y7o9n6EjLTrRpboXXD",
  "key3": "dRYwBMYc4qjb5TtfRQbZqUFwRdH463Uv2LC5k354Q635b4rNhZjTgDJbVHqrFrNL2KMbELx5UBdNHRggBzUKugx",
  "key4": "2Sfo7UQS98tyww4QLG9VoaQUYvzzNWtJZKpLTrpX73UXuDrWFktZ6Acty9Gmgnc3ZjMNX1uTZ9GYyS81vXfwAUjT",
  "key5": "5F1z4Qn4E64zbpzRTwy68X4G2xPx6aLn1JMoQmJSdhVwc3mKGADopWE562VjKyZP1Q8HNfXLiMaQvAvygwrfr39z",
  "key6": "mosGwW8qSeU7WaL2H7pPauhZBXPYbAgek7J1afUofH32poyrBX13yuDYHPm6ZwK9GWbcsTSMFwGfeQfihmN63ri",
  "key7": "ZLvjTZeTznPVMLAWMcj9XawRWXW46DgteTXdsA16M4cF3FGZx7eqzaxs7juktYrj4emjgQ6XdKwHEEDh8vqg2PZ",
  "key8": "m4n9EME1tpFy4oaSjmvWCgCCz8B1QdUUfRLAoy5T9JAAwth9QiHbNkWhdPsJ39MgTRLKAQ9MJro1P9cxXPpMAYL",
  "key9": "5uj9pFDtx46mut69LBzgirLXGnea3wteNj7mDnkFRNgZ9hGatC2ThsWs4sbTUor9fKeiJZCaeQKAYboz5gUfaqrL",
  "key10": "2eaCLKKMFYjtpSqPYDNK5f9ecCkass6CRzsYFgqL9x87QBXNzCiK3HvXbeW4XEwjxAqZKjfnS8ShADocY7yLfGMm",
  "key11": "9qfDCcEhQ4YFDkf5VHd5xceMUAX9Fa2CwPJF8f1UzUTAHLx55aM8ps67mPYkWjmxeQSbvFD6zgjF6eLiEtNJDk8",
  "key12": "5Er4Ae3ftPBVxas53mtxJV8E9yd9fGGtaqvPoJ8VYDePu5T7yQNHbt8TnVwhzQAuq8Y42aqGvjtbHPaLF6ZGAt29",
  "key13": "3ZSTcNczJeosxyW44uT2rqAGrDNoapyd8yG9w5LghWC2R1VFmhXPDqdNTi5vmje4bxh7Eses4nwHFXNdszsvEBNV",
  "key14": "4Xo4qRyw1RkXEYM4aWQodT7XF2bQ9ZkSAjSFuj9Tz2BF3P5ZJSe9oGTDoYCZ6taAsD5kBqVzFWgE7i9qEwiQgWMx",
  "key15": "4Yyqd4JK1BwdVNMWpywBJMkograySbtbD8EroLv1pJUbVrkuuEsycs1F9bvSgXz5s7Z6wkQqLmHM7nzwrn6EfUsW",
  "key16": "KY8AtrBGkQk39YBkZmm1Ba4t1zHWCdrkZfRc3Zsek4WkT6rbYU9A3Aooy4ion1nEuwofQZ7ibjqro5SbqwY3XnY",
  "key17": "339FvZMAusKgAy9Jsu82EHQUnGWk155FcVzrMNFiRtEbvRsDzSxbdABvpRL7Ss3k8q4Ei1FQAxHybLrzt2RpTCK9",
  "key18": "5MtKcu3ipcDRna2d7sux75nEgdNZKDYgrQCNnyQiQpQW5WoDfeKDd8BUzNMbL6YGVPfbG1mrqLz4JjfkMVMn5FQq",
  "key19": "2uuQYL9VcJdU24YKTRnGu27BwuBapaaym5mZ4ZxCpYxwwDokD7Yv6Vok1rNWUxonszkPfYdMVQfQYj7cQLj8sjpf",
  "key20": "5hLdhbBjsR8nM1j7y3ChcPWwJofyadiTiHrwhaL5sCzDi34cGPNxAb4Kmzxfjtcn7ESQag7JGKKWmRzZGkoRZUHm",
  "key21": "3NQJtSN9exgQYcBkSdii1AYgert89DKYWFSuqjfamewSjjdevbf4Fiu5HNFXqmDBXvFteBhr7VCFM6JisM3cP57T",
  "key22": "24xMaK8Y6MHZAN6Tq418aXL1NExfGpt2NAgw3aMXnbxb3dWZci3N4JZ7daLLqY6bXmBtamWP5S6ri1e99MKESRo5",
  "key23": "TAhCKnao9oFumGWm5kkrQGyy9LN2NspRbgPjSoY2PU8MGfYFwJHUn5oESudijKPTtUx7c29nobmQkeUEzLfXoyx",
  "key24": "5aocVFVzHA76FVRT2S5NoKqz6Y7uzdaDuRGGaymqKQMtMfkhY7T2QG7wtYJ4jHTmvhEpEtLDN4v2sYdz4A6Mn65j",
  "key25": "5RSAYUpUjRZ7VLksYpw9rZDiQeFCCBD2hKzCekxPBziDKUsddJWMGbaAkqaYsm9AqbtGeZrEjA8yEvQ5D444w1H1",
  "key26": "Roek6iAJvhBy2gv8xfxzAUphWHVKTjcymKYigHsjyWM6EayqwzJD8zxH6rav5vwqcrFeU7MfN8dAq1VSvYLk6PX",
  "key27": "3oihhoPUNbkYUhGtWQvfVR43RSxaaNBAdRue44LgXKqvDrcmqiwwhiagUFuAsGmwhXZepJrigWv26EGZyESgLAWd",
  "key28": "57FTKttZthZFGyAyAx8pf3EK6JCExLKgBRynt6yiodbPaACqApTmSDcMaBYve2Drdujq8Cn3CHJLaM6NxWimazVf",
  "key29": "Gtu5eETMcG4wPgJEPgzzHzgZMc4c1ZvUgXGFv7Xz3bsuiNtCgJ3MgfCKHG7pdwUQ2zZX2e4zt2yxjyzzo9JbkCZ"
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
