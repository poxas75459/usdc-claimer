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
    "7n8FFeFzBGaxwGubt45av29zYwNEsFWfUzzKSoe9TCBu8NSKZTjDszcSsYjKcdgFD515s6TA2FkNWeUE6dJdbgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vWz9K38UUGQFjZMoijsSSkRHau4NUW5H3bTgJNxjGvf96v879p5Uda8DHuBMZqs3MudPYHkCz2R3AtLcy3ZJFiK",
  "key1": "4Fr6KPEuUxKkC1PgxVc9wkfyAHbPBZMshmnUUsxGnPftqW9DW87G8BJ9jRsBwerUSuY2bv5NuWYfMffgQoNWYAbr",
  "key2": "5yrS9bpFa7cBNQfjcP9bj4EtVnrZXewBPKnmub4hkwFQDzV2stC3XGTX535eKYvDd77XrE7PLw8bDwFkpyiRXYPx",
  "key3": "cTKByNSAr2ZRoVoGyY3gDxNWoAVPVi6e56D5weZTedGnUoD5hbbSmSL2F18KDnNSzMHuJTjToguoT6FSRqWWrio",
  "key4": "38dUy7EfQfEn6q3q8nHbrCLwmtzC8DocERkBtpcrHLwryGuR6t6SPyYvMFM7Kk7FdoNChDkwkziWK8EXVfh4WWD1",
  "key5": "3eNBKypDknBF8sSwi4Sn58ahnFpZ5gLzWWXHvoYMDhewEHNMeVxHPREzV2QsM5Dte68vSx3qhWyF89d6Q32Mjr6R",
  "key6": "4NxCGXKguC5hQJJRHP842f2qCUMjXoFgwDRqnKx1FBGpkyDwoZXZBjDNxPxh11bZxmSRXxwdvpKHDerN4Ub5wAcK",
  "key7": "5Fr5hBxk8Up6HjdsDUi8W9mFm8vLr2Rc6FeLmAvHZoeKYvgA9J3vcLR1yr9sXHdMfutKz2JPkK3nJrCDu4pHXKRN",
  "key8": "4U8k5W4dxSy2Jxp3LhHY2aQCi3gwUsJLFXgrw4wVQu1gxzTy82ReGpoSB7d9hmAsuhyLXjxDMfU7PhJNbkgBiAX2",
  "key9": "42RKCudAKekBvWwYv2QPVnvVeWpxQLQAWWV81R2BVYs47vDLT9e63Dbn8dupYaG6wfCwDmLFE9n8PT4sf775JYT7",
  "key10": "5NzGzDD3E9yvg3RZc7q8U3GwXgdxr1uoMVRcStfdjcPA2nFLxfSh83Vb22RLQhwuQ39WiDjVY9wfB5f5QBV9RNAA",
  "key11": "3HWUdpbPwdEUziLJh5zig9ocjFukiiv7ZArpfKL53D1QpCK7UyiyULwevztpeA2qCPrWSjeYqpn1W8tKrr8Zhauj",
  "key12": "2CCNB3X5EdfWkzajm2oeN6Lfr4WKcJmim5mFWK3DGoXbWKR84YMVBiHJrYX1Gc38izig7SmSKSQTiqqxuAT9PJHJ",
  "key13": "31MNi52jWc6HR3ubyRbhzrUkAbkdQVrwSQeq6y2R6bGS8gyvivmxCy9n3ktC39b68sKdEPpxHqZVStN7gp2TpWSm",
  "key14": "3cr4bVwDzfej89BBLzKfEaWsxqEbiQBD8bfWSYcaSsWi8XRMqqzgtJkdPasncRWMgPcgh4isxYhHNJ5M9y2XnTyX",
  "key15": "3mSLi7BtQW3CUKPwPkoB15D2nHUYob3gVoJo7YR6JcAcz8RM1SnEgnzq3eaRKi94CFbUS8GuhkedE9ZFuYkpxXxf",
  "key16": "2h1AqxMFv54g22qkYbN7v7QCFi6BcHKyyTUQWsyM94hSU4R5juYf15PXvKM8yuCetKEch7iWXPjCHW3rHwVDuiFa",
  "key17": "4j9ns5HgiZ37D2ArgMsD9h9dsWHM5cm6pzgVNRdPBsL5r4vxes7Qk41EpTwudNQzkn9DajWGkhV1yGghi7Bswzhn",
  "key18": "4VoLvMmduwqSmHJ8jAQYTSAsk4pQkPKkhurzjtw5mPj66FBN5wyBmEeECVK4mWo45sMKKWLZHYB5rTW7yYz76eti",
  "key19": "4Km3wb6n6eGChfb2mcqQyYBsgMgLLRTAm4TPwsiwr4vMTNtFWnC2t6kRn6E1GNu7tXmvC9Dd1XH6hCudMqsKXXVY",
  "key20": "Hg5HHfhFetsh3drmdpKSoxRBLC9vEgnJM5ycFEEzgpUXt1m3QFxLgovdC97SsMGLxj5tXtopej4mozc2atsGGoC",
  "key21": "5sTv8FZ8dpCfThUy6XBpbGT9KX6fjjrtReT3na8wWSRY7rgHVobYBePqJX9BEQGwGdKbDhnYk7tJnoZpyzh3CxEt",
  "key22": "5q1hCmGNK6TMyAeeiAtmXCva7sEZbQMo44cAhyUcDg2FLVv3W12WNNmGZD7YNtL7pSGLADaBsCqt8xKWGSjLcL5p",
  "key23": "4XfFnmmdVvuUVdttWbhRfCqeLS26u5PsfVuW9nJj8qLoGFWEsGVwoAzzh7rYecEez1wtWwEsBrg4xYcbfwifdpe3",
  "key24": "3WUV8aSAqz7fVxxktSMDzKwaHD1VAksSqUzQYEX4ziznpb5E7crfDuPAEsP84D7kmPodNkF8Q5LkG35JG8zELSUn",
  "key25": "3xamX7m3L2xyappJVzt3a1b5bx6F7vqb9cZnZqJCbaxezMxo8o2sEJxjtfhsZcXjHHMbggKJhY5KYVoTeSLSzPa4",
  "key26": "4umGjLE7btrNNtBZQup2QU234rFyZHtac4bkMuNgD9ocVXJEEejcWRUzXfuzGx5qasQQm2wNRBGYSEnxQMuqV7i5",
  "key27": "LC2KBFZo1etunKZb7JCo3MLxGRM5XHqDH2Qgib7WAW4yFTGMvQdkCXm6vWGcf3EZfrJSyPYsRJ46kHCMRvpYWP2",
  "key28": "5UmXWB8LwE9QSKhCbnHuSbXeb7zCkFWpG7QHEL4tXtKroy73u3dKPdtmT7YyUs3HfLGPy7mwMvHBRRzDuFAD4Lmh",
  "key29": "4eZFqBtRiekhumbaLEJXXKJziXCVY8q4B1U7Be6cHqLfLr4gVjvaCJC9r8VHUPBCfRQKsvrt8A1JPFhJKapPhu7Y"
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
