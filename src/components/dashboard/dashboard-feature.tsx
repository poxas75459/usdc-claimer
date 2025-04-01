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
    "DTw4h5ngZBtsnGxw98jztBUcYYFtL87w5XoVSqpG3A7P931ZLFeQa1Nq25wndXWViiKtHvMqxbfhspZPiNVc7ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VaJJTUiDaZqnca5ySJxxcgSRuLRnhZqkni9suEYvPk8jPgHui3GL7MpDYYRUpeVdDXYbff9ZdGLBV1SKQUvtQPV",
  "key1": "5ewsHuLzjrV5vmbEEyNp8hdAwPi6j2hLFop1MnNRHERs3tEdY3BrjP9fafrkF6pivCREhwa3dqAqrZjhnrkvfuWS",
  "key2": "3mXbgG4Dg3CSEEHJwwRJwtELJowoP9DsHT7ywCxhNvM4ks5zT813HMXzxfo3BjkWmGzRMBKhKrKUqPrEamX2WtGt",
  "key3": "5fRi7a7N8aKsibjFekTQdj8WBGPp5ebK99Z2Asq3UMc7ggbtcsqNTUYeek139aZJMeC4S148UQjVhoi62k5Yn9gU",
  "key4": "4dicoHC6va48ZhedwPyqzBDSZhGUYmh473bpxujkAgKSsB26mUmeNxJKmrPxvstMGiusiZuVhK6zEKJy2iPVH6Gm",
  "key5": "2i6aBhp7U7GjQVkoqVSqcrUUhFryGdsCWz8MwZpfGmQYfY94VYTNZ1j5N4wDdeJJVtLHTZhcnbWvxCvYxAhj3N5S",
  "key6": "29tDyMMJfvJckDcowPpQihAsfPZF6Ua32eXuNnd7CieqdETCCGVTmhrL7xe3nZvd8tNT5ipRshJGekcaBQwT8EMR",
  "key7": "5mjDLXpZcptj1ZKTCffGEvTuX2tqqy45NA88wRgF6YDtQtUKdqkcaEr7QNzRPj5c6meB62y7LoteL4uzhCTkYPKx",
  "key8": "4pzhiJDivK7RLq8tNNGUFxT5tdXUCa6pFRuFMQ6bAxRF31DVzA2PyPbE7SyW6rKAcRanA9BvmSSB1yRJWM42EZTE",
  "key9": "4wxd358Z32efvnHMnW6NxyKeHrXyjFZMutK3XX3ge1HZ3VkRtwFtCFzDRNU2nBMRT5N3KDCSsEU49RUi9CHJ7aB3",
  "key10": "X1hH4iL7GkPesxV9TrSDHyVKWqYLqDvr9AtCi9j4ehArUH5efeNgKkRrdnVEfzTomcL4JE96jrMwx89M5pJHkJb",
  "key11": "4bDHV6weAXZr74Gdfg6tmBB99NeixMeh7uEF8EFBfnCDCajuAdWhpPZKxGdnEEbtXERSGPUk4azmWX48Vd376qFk",
  "key12": "A98KtHyB3Yummu6LKPx8BKpyDn6t4LqJYLbPvCK6zyRajFpUTxfw8bq5ZH7VZkGoJ9bpwkTRyF2pNVrWRcaDK43",
  "key13": "4RY95i8o6g7Qfo8nAG59VZBZJP3Y9VuXxUjRM9jqL9H8qYKrshpFFRWxxX5nqXbp8CAjtGhtZJgPzKmsqF7c3pej",
  "key14": "57DumPZxvBYq8dWrkepjgAiFQhmaqknoFcPfqjqLcXFP9cHB5HiwtQtCDTzp8g3UgM7ajyyuiMACstDqQi4D5YyV",
  "key15": "3egGmvormNLC4atcCgaJmShvkRzUtuU6qxZMbgjm2vJu97who1RsMpmmQRC4rM7Uf6sM3buHvHMmc1DQ7HdhRKfd",
  "key16": "3G9Wp9idTXgp8ucbhf7vr7vxofextkcMVxXAi4i3V1pPARBFxoieksjLyBAeWuyoJ1QHVNan66ZpzMKjFTUZfUqt",
  "key17": "2Ey63zpMJDur8VsnFjG4qiHkBGqDRMsAB8a8FCvqXt7yPcq47XkU9jx7kr7AHWCiGLpheKnueKdQmySdZv7tsPzV",
  "key18": "wLC65YsLv2yrwJqULBPsU8umGtP8ZjjHxcUzgywoH6K8aYgZi5CpZgXeHZrdbXx92syXGDBo1AG8iLRxt3cVwxg",
  "key19": "27Q4HChWhj5TQrDXMPR7xF2NfjdTQ2LtWWLewHqfCL68jD5QR6SaiaWg7DSzieS3KKZDMsGM7on8LDH9wnkTUkPg",
  "key20": "3s1H6c4sAh52yJU6JMmXWpCdgx68NsCLX5L8FgZ8xuSNZ4NQUFSh8mDi66fxh3NpAZ1KVWNkYgdctuPNh94Dv2L6",
  "key21": "3ypgcj99EFpvcgVqTs29JdjS526DrYgstJRXJwmoz6oSeH2wJe1SRYF18TdxQ1KRSunXu4L9iRduAfKj9i6vzHbH",
  "key22": "32vJrqQSVmAxJgkm8WR9ukvF1BfHuSdCYUx3jnSoR7V4C8um42GvDQX8LZcnPu5fge5Ft4qcLCJFYpQdK1zhAKu7",
  "key23": "3Rw1VSFkHLfWi1EtWug1te4gJ31ikt9XcwpWVF7qEdmaMmeWBpzgxmj6f7JNmYFAjzM6SfPWS2SEBEANruWSZBKZ",
  "key24": "5DRYJk6KHqpByoJJUP3eZdQmoFzADEbaCcTqe8qptgSdnGGhh3QmaaSBog86jetRoYD4EK4CUn9S1LiUN3imfgCm",
  "key25": "3LzEtj2VfSBZAVEqMEAnJUY58RBzSd3N6QsoVcjqykQ6zRaAAYtkM1XQfa3Uxw43RYU4kFCqFyCHe8Q32fQyScEr",
  "key26": "5HKcWkpfRkbRZ8Vpmk3PTsiVHmfQUAtWJLhEKHUzvvatk699LamV3GQu3Bvx2DL6mDEdxgdvpB9pruwRrEHhM54T"
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
