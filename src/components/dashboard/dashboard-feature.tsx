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
    "2n35qk8sPtt27yTqyBFP8M86yfjeJxgdxyXrioG48YXip1JRTn4fTRqvoomGQ677mvojfC6TR5WHnpJyiPt82tnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnLh3qA28dMg4NbyWx96CtL2Pfj8RRKKiHbYHWmuYP2j32HsKJtKFVj16B3to5c4sV57qdqWGZUKPVUiUa6pr8H",
  "key1": "5kobGfrbkwJSLqs51ZwCuAKebwMu6Ken5hZPSs2WxETf6R1LH34vY6KawbTW6265y8hpo7Rbtkzddyw5mrG4or5v",
  "key2": "3tPYNh4QxjibaaEVd9XkePdCsVN6Mo81FPsJ7zQ6HYK83euuMfUKg3KmXejjxEg3EvrFPZokybZBepAbA6Xf7FVt",
  "key3": "awKYsZ5U3Ury4p11TmT1L8Zx96F2JfvLLBAQRJnDSDJ7Qfp3SR1d6aWjh1Ng44Ksf1GZgN8Swd2vFhD3GSEmcXj",
  "key4": "5jk6mg9eY7jhJ9HhdhaRm15u5BxSvZQXeVTCjB9xiuh5Fo7wjmnzoYS9MiGAFfBennbJP4AEe6NFM2qVZumVhww7",
  "key5": "4MkMmLRfCJ2xpXXpQzYyShgnbEoYCwYt2W5By9ziMq8XSymjWGEJnFMx6XCnQBVi9UJw8Yp3VoDNuBF3QcVFhvxX",
  "key6": "51EVCLgtwfckdwu3LTmozpQ7dua6Eo3MYsNZcDViYg4YTvwidK5LzZLqypvGxWS53S39SofGaXzv8cukCyH6hhZg",
  "key7": "31FJpUga3bvheEG3qCnZF9gksrgAtFzwKwWqf8h12Dir7LUQyTVZAX6xvxfvXPWyknzF4BAmJS3oB2rfUzeWGmXt",
  "key8": "3Sj5SRuNWfwncR9xDYi6vztjzKdSJDwmZTD67tuvNRvbiZE6pLtFuTUWSjww3jY299EXyo3E3orHSzGggVBcd2JM",
  "key9": "3zxYSykV11jqKVCSkHuVJGNmAKCxhH6Cj4eXgxJ7mmKNMfjsbrRbYtKZVTFCazxqSFtWz67xsSZHYC3CfaVTcpsc",
  "key10": "4L7DGUcMYGaXyDhnJnCso9ZJNXYTDy8yVjFw7cEHqnoNtk2UoNzBzi1jTkFGqRnfPoCStLHLiJa73N39MA8fVq2a",
  "key11": "36RxGREF7m3fEZdN8iqeCcUmpj1rJFdARm4nBTFcsXmsEkyLvtRVJivEN3CDUA69CVRuJf5EpyikdaFhNXvyZYy1",
  "key12": "3fbvjQvCH1PzDC9UhCJbgTevQphTmebuMkXFoznRSRNRT8awNE43N3326LMsPbNp24kHnK3jYcce5xhjFuU3vXbc",
  "key13": "4SrgWnadMEWF4xRoe4cHFUuH2Q2QEkYWnrfiqmkkqqkmJFvyuLY3BQNmkrDZGfQnh6zKicK1FXD31seCVt3WKTvb",
  "key14": "5hGwgjqgtYdHNvN6Ft4n4XPoB6Wp4brRh212etmEC2vYcFNVzaYh61DKv8TNGjArkFwq9hH7pe2GvvGHArHVoaQ4",
  "key15": "2rLwqD7yZeL47RKATJxmgejvMyxfxQxo5U4J5FhCvXoBt2SLidX5DvrdC5isoswVZ5hCkTYubaBpEgTaKNwjGhKP",
  "key16": "zvjNcv3nydNbh4ybiFG6WUi468akkjxuGZ8ME1mzYqEGMb5ndwYoBZ9Extc3ivRvWkrDX4zZD8M1oJXR4fjEejv",
  "key17": "4oE6Zu6RELouAJSeP1TdaaoJhvemtySffTaVtnsxVUERcEAhKWFmTzQrbSV4EgYfr1ZqQqV8gVT1qRyeLsmAYSxR",
  "key18": "2GrQXCnXvfE5ZVkHjY1T7CRDy6UH2VXBL9XMfknnJtQXDjBhgzG9CRiNKNJ9JaFkD8BZryR9izv8tSeJkEhVSSD8",
  "key19": "5LNUZyfXA8V8M7CZKrVez8ugrQCmG42CEPRsANZDHHeXxUsZmSyeksUoYdWGHt2a1Xv8WyVG8196dLofv3Eaadf1",
  "key20": "4RhmMtkLzquxUorKaY1nkdWpRJiphNmP5UnMbq54Xqx1vPayYn7yhmCthN4YbttCtBdcn64JRbHoBEyJCE5rQJE5",
  "key21": "29rWzweWvfksKbRkPr7PaB2ZjeZDUJR6VYCNNxDC2k4mKjmMKXnxg4tuvhbQTGZCvpQ7kpzuPZhitBMrs6SQSpXi",
  "key22": "5Z4Wjzg7rjERYJ1PQFZ31jc9b75WS9JpKj9auFjTU7Ug4jC3nAfwuHx8xWr7GYa5uySXXDrCLwTzn6A1UTLj2Gya",
  "key23": "2PhH8DUSs6mXNDbpfYQZBTUye2LE4PPEjYVLqD97iwGt3QdNBJr1wjAZVnWBP136zNHtra6WzBscFLmoYXL3CcL6",
  "key24": "5vjy6raAGRaf5ziPkA2YNve655LxbVzj1WySQF3ZD6WPVaM81pkqm8ceW85HJpXhG6iq1r7JCMNgKzdbBFKHpV63",
  "key25": "5y7CpckFor9hDK72cCfiBunKQjFZFti3Ex49DUSvW9FY2bV7AGJn9788bERoXYDmcF69Tvze8L9sPwCmh3ru3JoB",
  "key26": "353KDMZAWQoneTKCtpFUC6bmzXRx7VVTFroFHwjx58jKgSMCurFWy8jj5VvdfYfhJ1wLq6TWVY5p9EtGJv4oUXVg",
  "key27": "3jSXFP9B5jczDkM4UTYBKqmM9UmbAd9pfnx1JunY7QhuZVXYqPGm4jFb3RpMpGTQRJ6ngi11jCgvBxXqKj1ucxes",
  "key28": "2XjxvojCrDi1TZ7bo7yxrxhJhnXqzpAmEvBoZVTf2ZL7XycDrHPw1ZC8rJ33UdUAuo1PJ7PTPnd7GkkRVRQnk4Tn",
  "key29": "5ouDP59P2kjLckp8LvWzF621dzcSZ1QuQYHKm4rARW8GMTRQRmny5yrd6RtwpN7HthJpsNEWWfjkrPsuhB17UYGr",
  "key30": "3QEdFf8deHSoa5qcd7fu2yNmvkjaJ9Yisv3Es8bq21tfLrei289DF5wfzMU35itUs6sAGd8p4MJ5Tw3gAALzv8b3"
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
