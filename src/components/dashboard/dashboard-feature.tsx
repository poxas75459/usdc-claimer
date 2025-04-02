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
    "8raQph9CHvWfnjheefPZ77ab2LV2Kq1p4Ci2mhpGnGm2RsK5aBJCNvhWpcKgPoT5oiRdn9MNhAj7wcLAdrDf18n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WebuGuRgEfTFSUYPRgbAJh7jojcxwab6NJveE276nh6dBKmdbpBYpj461DdkT7BRiuUxY2V64KCBq58DhSZP3S",
  "key1": "4J3gRQyjpcMzQ3NxcasvzKV9knSp4ZGYtQ2tSsgvHsnJUXRemHuUWj6bEJEjGkc42SsFwUHi5aSYbQPN5XXQvBj4",
  "key2": "2Sq2HyTRQNvUsTLBCABqgEeqFtVfPGF1dQjvxdENUYFfUdRXMef9ovq8KXtMZMPWGbvJxhv8eyEfzVB4JderNBCd",
  "key3": "4A5fxPWpfqNahbPXPKCDEag9ZetRUyiFjJDjQgULqQHbiS3ZtAsdoCVSCZQP11eBASVCmufDx1UE72eX2zstuY3R",
  "key4": "4952iqAHfzepgGVUbqppqqeGxgbfhMCxnroKsGvzgh8adrgdaneQ8ie81B41wR5yc8J1PakXgxc2Ad35GEF5Rt6X",
  "key5": "5EQSLE6FpQ8tBsuSo48gDH4Gb3Ena6f3HJzY1wqAdt1oeeJ1EsLDsyNTXV1Uqgv5Yfdv6vJqB9ZLr6KAumQsM8ps",
  "key6": "9yfsGPkUaDP5XsNBo9sX6tc4ngfSPXhvA5emjLNp1BgtJjskAq99PxwGH1sBbECLUZdYV3cAPA973AGyg95ztod",
  "key7": "m6AEqUaUKLHDTCasVAndCsXB5HzNzbf53XFAoarz4j7uTvrSusWbBfFmGiAHpwCL5cmFyLw9sGKWSpAyssLm7sB",
  "key8": "2C7BrdQanfVb1ETwRkJCtakGVM9BWzVPQukD3k7Z64NDn51JAivXQMGNRBbUbwBrTU3gBMMeuPHeru8i7BQB5R8Z",
  "key9": "29D44YakP6twT3rtuQXGP1LF9ZPspxv3XdWKcnN9wszLLaRxbNQ73eYVpGA2nLQXqN84vGaLd1JHDidazCQweJJ4",
  "key10": "5k9Ddf1aNrNRXQYYJ2Ko6rCBu7FAiVdZp9qxzLt6DEietgSANwTiNTvPwrXzdbPLHuU5s3xUsxPSDaiiAQNEtBnr",
  "key11": "4K7fmzFr213Wr8vjx28yepv5GjTVoj2vm72VqUmFGGUcMiEuUqGNWvU4BNabuHfGYcBb9QP6gDksZsdwwuLaEn4e",
  "key12": "BU3phMZuP79z5V4K5NrG23BdHUJYdmGYXogKDCC8APzWWQuomkZq1oDc7gnuyUsfRh6q6XqhHrGbTffs7qmJTJ6",
  "key13": "5mhWn8FhHgckdFiw53didULjM6bDLbPoMj9pmGBAKRMNKjAhMZpKTaJ2QyXruSSumatJ4BEyAL6tm1G4UexV9x8J",
  "key14": "36gSp9SGrUF2xB7yhyp3xbc9jYwyFXmkwgxhaW3Kwce8FigJDh7mUdtLAFjYykXdFoZXrC4DYtiMBbHtFxqYVQac",
  "key15": "2JZmcNrCjSqCR5S497EojcZmcUw9w9sqHzDBQSV18fwvMe2V1PxDjGS9pE8dDqRqQUotGjqWNC6nXkRsM2V8Y3HF",
  "key16": "4jqXPZC6Wt57bvzkrD8TMYwintvXEU4cqxzCKBwUQm2jwFJrvJg58joQBrbgQPz7BHDqLrNp56bQM6A7MjrdqnmC",
  "key17": "uvaiHhh2femBSYcwj2XXm9difNkUoKbaC9xaWLKwc7oy11HNsTzNa47X6biU6bVxhYmQC3MrWbjwjZZGQTRyq7i",
  "key18": "4SSSXvyw3L78dpgZvrbnuZ7tPbkYakmWEH2nmDzBmkbGdyP4WydRsdTphXUofJpq6kggWhcPaXkxix1eghZo82MB",
  "key19": "61uXf2QH6bGbrDz6vKjLpeFXdcgy3nFYMfRFwhPURd2NvhXGStY6GbA3E8vfjPZPwmf88xCD2JRaUd1ePCq9VYQp",
  "key20": "3qmYuFn38cSxRMhi4tyGe8GeXbh7U4Sc3KVEkrapeUrPN1CJuaHczmD5amoEQ3vT12VfnHVRRqvaygvLUzAfEpzb",
  "key21": "V5xs9Ztz4utNwaGLgRoUv4m2QEKh71q9SJpipqe7G6bM5benXqYy3sEqefmn7A4gPMquWQrXUNEUJzLuXx6P7mN",
  "key22": "oFHdq4bjw9e1oSd5jrgBRBe5dNYTBer2Mkj4pv9tWMywSokThgqrz8wL8137GTkTaq6KHQarhURPuLPs6HA7uVF",
  "key23": "3ydwXdhjqb2SyfGtRKq8LvrE3QYvBe82AFnjkSXD77yQmWDjHKQUgbQ9UhYYafaX1KwyWD319Nq7j4jgz2QcoYwn",
  "key24": "4t2DV5jFdmLqL2jHQdbMZb56P9KB3jtQFJttcJB6kMgrym86cfbZ2pjNfXoKooqfm3yw669WUXT1if1rcEGu5miS",
  "key25": "5sHLzzKXiTiM48MN11jFAKVz9BFGsNDKFcd3pQapRyEMMKhvvLdtXKcayW2cR8BnJNJDq6XhK2h5BSvrxmWawZXT",
  "key26": "4zxWYfSjTZMz4XHTk33idGJ8wP45WsQ9Nze7c7vRzn4fscGb652M4iDxwSxqVX7fj17hUZ4Zpr9wuavXKp2ammWX",
  "key27": "qQXfdPxJrLNSXyPUAyY6ZY1D96Es4XoGtZ9jYxxQE1h5NpgAPneVJSujPwKsZsFAxHaNjk5zFP2XN5cWhgipuWR",
  "key28": "454HF9LJotVkbU6qZdnP88AeAVcrv5pWyfEabgZhN141JCu4KtVD6vJVxBnbtvnBDZfUDfuHumc2Xn2fyYY9kuVP",
  "key29": "yA3ntG9Jtk1eazP1CpvHPEtBYDVhpyY4HuDXRBkKiNNn6WA4fDC2upMw4ecLrYXeokwitv73aRTQGbVGqVKW6PP",
  "key30": "2sKQKefDiDxLrQaFGTekyxSi7GnfC3WrQ2FK6Y8MSiUysqeSe2qt8ui3xtAthQX9cY9tWNPzkDn6AUiGcYeBnw4G",
  "key31": "2YcMgv3c7g5QxHwaq8HJD51e6DDi9176SLp7BiShesmWgkwey1xLDUs4NURhz6cGQgdgjayhR1TN4N6bDG1YtK1T",
  "key32": "MbrAqLSpumCADRHETsztHfiLzjDEFeBCZDUoBchejLqDdEWJcTigeE6yZpk9ibtNBkC7D6rcPgtoENrwphbKdQ1",
  "key33": "4TeD3XUzjWQLWbciwx96kDFQVN27iZ2weddKQtmefCdwVMdV3Ccr9btEFisJvheKbbmD8nmCMCYsX6tMdqA9GQeG"
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
