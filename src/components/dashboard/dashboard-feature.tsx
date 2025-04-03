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
    "2s65DdLasKJo3h8zy9BjaNN3ns4dq6NHfm4bJiNXYRmhcGu1ciTCEmSf1AWVfs75QpXiWPRdvsrswgphb16jfFtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43vd4c2YKMYxQe1TQgszEEeo247qs98fRqStwaPp4xYv9YVj5UGeZ2T26ayaMpRsaCAJraPpkQxTQbUpEo8fiXaa",
  "key1": "4Uy2fbVvW5ccwFopLPeBpb8Je1BcDRwx8a4FHyEp4MKZYaeVJLuF8Bctn6c694MP6R61bkX6kiRSJeKSUaFbwruH",
  "key2": "4qmqEwYYEcpygq2tGYhAp4rLsLEoaxe6uVKpf2seNM9SqrR6CBbokfPtYkcpHwpVbN2mJHqUp7ajKntnPccCdvfU",
  "key3": "3qCnjY7e9NHVAunkgGWLNnNRZhsJFSh3kQqA335S7VyT9Ut52t62V3VHd2a3vSH5P2nfFg5EEvDsvJgAJE8PnSsf",
  "key4": "4MpVPpg86ad6Bs8c5WKeb5o93TDo41n15ckeyUxjbiQSn6xsUvQoZNrT2DaqXvETscxngdcqmCHu1Do8HGXqULyt",
  "key5": "5M6UvBhSHJ1LpNKW42tfoaWBMrTNyNn4nz3jU3ugkqZGi2zAY9iYKWTvYz1n4yDoGpAUNUUMTe2BBC7ZTRMuVkVL",
  "key6": "4KAsFo3Lqv8BPbx7ShqX8W3C3aMVF23exyg3b3tu6K5eEdWGW3LzDRx9suvyjEpc2kiHVwUTM4nJZWuyzGQp6GD9",
  "key7": "5D6LjK2WY73oTBKWQGW1jbddsozpMypJDmreBgnAWnAzEjgWETSa7zxJiHidW6Z5EJnnFCxeUD3x1413AddR1zCN",
  "key8": "cddYXmquTuxtgJxsPc9yzyfD93VV5vudYWUQYJpq2h2deiC5YgKT5636jnsGFs7wVTsc251SLSR4WWRcqwGsshC",
  "key9": "5MGziKz8eh2UWLDE2ywbrzFv7PNdUw6LKrawCMv6NpPFBquFCQcb59zbkwQyCBBw19NGqYWwCU2mP4wcFfH1RcKo",
  "key10": "EfvCYwEpRGWEoyZBYeVp8CBT4Fj7Yvwz3C4VZcff4DFJ5csNxmYHEveYC53ijBCzWfraRUt4dYXpLz4gMW6r1yk",
  "key11": "E6SVWcNLwn1LzgUBnFvQ4ZjP95bpNAurx2khZw913S4sSLRWB9TWvcnLWiYo9JHVyef8E1rMMDPz3nHHjQhzETV",
  "key12": "2HUL3VEjVw6e88EDYRj2sAnF6MkhVvyHQr5sECKYHGDmYtZKTWkcyjtNXG7ZCqXqmPoGEimQ5YbbQ7rowPD69gzc",
  "key13": "3nHYjJU1E91ABz7bQryYQYzSgtsRfJmNjAkLR4eWtVDQJHFUX74RD5zfdPyHrS9M2dBgAJF9k36PeT2qqKtgcxmq",
  "key14": "5N9T92JPFsQCb7BvnfYu1tEpQAJNKWEtCc9fB2fSFWnyeNZ86EmxLzqpwBfT5BMFf1Xuf3Jiu6QeB8V51bBZ7hMQ",
  "key15": "5WkHTxmPVVsrM5tVUW35TewXMZB9y85uzD7jCgMMaAs6V5oGFEvyfbzfi5ZxLee1FMdpA9FBx3aX3PcqjWwSYyJt",
  "key16": "2ws97C3dJ9srjhBjKaWFxAZjQRraKshKxJEennXyNrTJLTcE6jiLskdkJgfJBv2y1QQTokqCL6oJ6Gp8RP3daEYj",
  "key17": "2Sh7Z9vyp5Xh33x2uCincgRM6EvpZRphABZ1j6hDSDEUz3ctyzY3rUFwt9wBv6iR9mpCpegksdS7iyPp8eivcTwq",
  "key18": "2wEJiv9w4z4MZn3eqLuW3KmAN8QRZ8f7ZDL8u3sSMdJHFNxT3XWaywPHoBfxej3BAZWXLtSACsk5ju9oEkieetFt",
  "key19": "AKj1sF1hyeCRAGdwEdUZRkop8q1UK6CtFPSj3CQFfX1obX2MViHVm7JtaZmAzyViLfXFjnHzajxdaX3dqXfqQgu",
  "key20": "5Nnvw96SzXAbv6nFaqtAFP8Auwpb3tYx8XU2sYTa9qVGhf4L4Y7e1YUBZRncudxdvnEQKTP8cwmpnJxfBZyuPEaV",
  "key21": "3B5UuLexy1qoyNBLzi9KHeQP1ZG5aL8iAQGgXaP74hptNV3gygNR2hhFSz4tHvZ4oM1VSpPf7zf5SJGUDy5D98Fc",
  "key22": "4uoUFGe7rmckZ1DrzhZEEnDM1kUyc9wHtFv4KUi7X7b8tJxYDH7n2q9vnGa9H5RBew3bfqDLoNiVqkCEcc3SeiXi",
  "key23": "5S8XeJczJ7Z9Ect7EwXrxsW8isQ6fTNkts7GmAN6RMP1Pv2XqYQwNBDeaWCFPU27S8NJHhDdXu1MzhVw8PNFpoQz",
  "key24": "2EdHTyFxXoCjKVknMuybbfgbaZqzrWRix3tZ7eYJ2AoERMFLST7kWdHZ4BvmGSvtaEAFnQcUY4nQAB7ZGyVfS3QL",
  "key25": "XpqWBs6G8yjpdu6AbtGixgFFihMXAd3shVLcZ4hHV9t2DTsy19TyEfzAYxCgfFWCadAd43StBqjZ1D6zotVVLv5",
  "key26": "2PJTsjZjKy6hqU1djUWDgN9SFDGZrxf2bEyPVvnnmBsFDAqX6hDto71TVZtFTXsr6HeNAhZRAyE1zt6suKqPhSAv",
  "key27": "vQhxPzsAXgFq1PQ8dqdUhBBP4K6XJGnLGkPw2H689dYj4DbJVjyMzh5D1FrnFRGPaVuZDQWDE3FkBB8JVgKmRNY",
  "key28": "4TvZPCVm2cNRDi3UxUxuzETPnneAcYQmmauFXqv5od1wQq6LJ89Y2GR6vZVKqcxNt7C6ixe4YEY2yTXnDGSQ4327",
  "key29": "2DhDXZrxzVtyuewnreN4SFgjpWTRdtw9LxqgcSoD6kMPxJsK7qgknt8rMgbRPpJm4fH5xKawrZ8y2VsFBhegLonZ"
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
