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
    "4Lt6wn8eSu1pvQ7XNzSAohxMtE9CfaHgBEELnNeg2jK1wzQvvLRff6pMzLqV7wp5wE4R17KN7mVQEZr4oomw3hMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ld6HvY654tCr1yntXebLgmkkzYDNWsh8skbpo5cXudoXJH4uzv3v1LaQMTMcHQoqtpickuhKe7qD5373Hpr38sz",
  "key1": "3SdA4cesmFdwYmC3dZUyKM2W4shTa32U5SWxsq7PwY3GDCCgTLZQAYbfgy38YyXpTqXy9n8dJqEcYBxsyQ8JZYvT",
  "key2": "41pmg3YnYYZixPPbtXcbJYoRY69pwY9oJ1JmKfzPAwT6AubM6H21G8RCVn5MMmiu32hAwzmVA6yxSTdZerdDVeYz",
  "key3": "33qCPbBcqCV1kN5yXyfVeVFnLZaBF5LvkVymj2x95B9coJwRPf7e2Ad3DkY1GFZF7s5GNuCP3ZvhByA6jZE2yyG8",
  "key4": "4xTudCgQYrquKhzEKX5WDUfZ8L88Mu17jmjUXBgY4beKgbFmGGnW3srCCUco5duuHw5QfPiXfHz1mLkn5QWhEetr",
  "key5": "2AXQJp4wghiW2Qm8BCv2unaGUXixyiA5BMBjgBas3gns1rpo6M8JeYLMG1sLaEzoGn5QxEj5ormY1kn6RXCAesea",
  "key6": "3PuRHWAdu9XAab9gDqqsekfuidJqaJohb4o5uuC8ttkQh9Q7ebEQg1yxqX3m4mEmmNLmiaBAwYFiJh3UtqxLhxbm",
  "key7": "2X2cQRmEJ9UNC1FtvEhDroLteohRVHFs2dSkv2nMt6tq9VSs4cpz7Lj6HyALzDdwR5f7bDJnhvutC3jv3hNTNdxu",
  "key8": "2sAK2f5MhjXcvqpbj1bgcGFHUsEeABY461oMJ8j3LaZeDmvhSHvXSK1emrgptmVYAvF9FXZpiBKmzCGiGrjmPAUu",
  "key9": "67NgJWNtTm7Mn7bGvZzo2rpXQVrFW9B57xPbuK3twzgAsuBmf3oyDRqD7xZVeJpVU98Kcrg5o2UogZCnaVWUEMQ",
  "key10": "RtXJY9aM8xFiHZi26cKgN4ntMzQMXqiqjSvjAqay36mnEt6n3GREfkoahmBnvw776AhjRp2dWQt58nivFNz1p3a",
  "key11": "2SXfiXEUz4UWCqb6WSuQ2fMKfLjQKm1T5TYQH9kzXVs7UoNUAHFCf46Ar93Y8AEjGVdJ56fJ4KVcA6QoMyEVP18B",
  "key12": "33nvhxvi9qnWtDRUFTY8b7Zu1kYESut3PQZYCDhCq7pLLBf6hxz65KoU7TUJQFRb8z5yd7V8pXijj5FbcWoQ8jZ4",
  "key13": "2p3iuuMXZAwZJQkNuDsL2hX1g5ATseBSUe5o8wdZ8fAsr2AxfG6jpU39cGuyJrkqYTTnmEKhBrATk6C1pa3xNfui",
  "key14": "36gRPLWRZ4899aKYbh1iZU1NdJnhtijZhLjw1rUZqiGHY8miLQPByrPNLji6FZ2NjTiQsbBruZ5P1xW2CMHCuLZw",
  "key15": "2r867SJv24vUYfd8Y6vqkPT4ajJN1wHbGKyfXdQEysayfiXnQxaSe9sQtnR4WTVgzUDeCpc51dhUnj4G6MAPCHn7",
  "key16": "5Y6oSrP6RuyUC31jPKkVkmMeBZiEVtvceTDh7oMifsbiAYbrtGBvU4pW7R4kU1XKu37JPY6bEr8WhEBdFmbEQfwS",
  "key17": "3d3cZfB2LGXaACFZsYJY3oEAYHzcqe21d6QXibQ7Jud4chMggYEViT41R8VzBgzPZMQMfSzM5jSkPez3GZreR7q5",
  "key18": "3vAq839GzgCN3RWCyjhxFNdgxJGswwuEHm1L5ed35zDJhjbFMqeLd9bWvhB4uCYxF4ZCv8FycSbW8eL4DGkpTL3r",
  "key19": "4oYaYG9A17GPBtvyQuzqCATrzNH4kRxvgoC4MbEQcQq7iJdo5SDN5fAHgWQoeX2ACSV7WYQmEyVW2ecQYoBYmBEx",
  "key20": "5qBhwEkU1LYQTAdrSGhvEVYoU1bEY8B5wLS3YKQ47Yx44YXfQQwDadtVAvW8Sj7mBUbKgPhw648QEBYvYFNGePG1",
  "key21": "5ptfbtReVPoCpP7EDtFT9FESsrUXnY3C7bRK9YctZXzroSt2nxUdEC19jePPyerhTTwANbCBysmV2taeBiCiay8f",
  "key22": "rF1n7VmpvfZeC5wJ5QxVHMC7ZeSxCraNk28jyNERQ8AdQYFfXsTy4rAKJRfzdsLZJjwyoeJMPCEhj6ugBN9ojmv",
  "key23": "hV1pZcRYcNNg8Up3GR7VZHiA7PAkuFFPVAbxCNXM68ASiZdQJXD4hzXxvAbXqvwgTb2KXQLnMu6KMQFFW7Uax2H",
  "key24": "4bAYMTFPNUnFGhTvUJTZwd7eFgsnX5ugMKYK2PHpYZp5p9gBjdYoDpWv5xhDXfeRwG6SsmHDm27Qtr8SCRX853YT",
  "key25": "3q3dScGVrZXemDs1JfWgcmWwdk4AdQkeJpbCFK5mUZnEMfWiU6emkQemrnPwaBQp9dsCa19X8UaZXG6kYS8A6ec1",
  "key26": "597WCDjajFpV483fYNx6pQLohmAMnbSmHYPSZg53gYtuBz5o9tdJdA7FBfXoqChgWsnRHb8dvBDpDPmkW5Ly7HHB",
  "key27": "2GgCCXwD85RKxWxWpsWWWuAbcgTtYB5RBj7MSSUL1TnMpYAnqo6bptMNKTP62b6Y6X5wo2ScdyLYhZKJc4rwZVXk",
  "key28": "4osjhQXQm9hKni1zyvP5hCC4vsjmZuvopxsDyHgKoBuKMtm3a55nHmWQpKrNsKMC2bwX2TnZHgUHH7T9KLJyjEeo",
  "key29": "3S57xgbAkPugXp2FjSJkM4npGCKCDmTfc61jBekL6adQgP3qfjx7N89crhNiup1aRLjopTsGj5Chn3s31XzwTXvW",
  "key30": "5dc7r1hcbP2McoBtQ9grw1bS3dM4TLPSvVj1n2pHJurRR24xwvQtKcaqv7sj2StUEkW8GqJPiqfk6CW1FUWXrxYw",
  "key31": "3Z7fdnZNRoajiRWeR1RanQEAmjzvRRhvwAKHTWf4GBwCuNgWA7ERn9YWK3AvnjUxHQaqiuBYg61oq71zQYduLhJC",
  "key32": "4jMt9iQPPumYbZo5VKE1sUdxb52L71Ut7ChWPXzjH16rZ1aisnST6vq5RXazPfEvJwQyyzS4ZeYEDaKefFCP1GzC",
  "key33": "djSWZ5GQTgjwhJjbsnaeWpiMzS3ixUBH7oGr6zZtCBWY6MLUQ2m6RtKSqppuyR63xVDDMmkSEmdY8mpWEVC4awN",
  "key34": "4DS19CRvyzdAcuvMoMjWV8R12AxTVfuGoie13GbFJZznm8EyAi43yxbELkEZQZagL9FjfmQdoUcQazHLDJf9RNKp",
  "key35": "3Q6rbssWbFzRmtMeMoCjEk26jU6vTTVjvGh4CMrAqVyYUw53zjP11eSPz5wP55X2ymwFCyj9NRmcH5Npdj1rauFf",
  "key36": "5YqK8jNnMHfE7fyNoYJaK4UtJZHB9FBGqccxRDv1g1syhEHgZhkR6R4ykEpbDQjHNVWiZ4JgsTqhNaWUFQKNwrdZ",
  "key37": "3YbZULr1jjf3wSMCtoQ7J4rWKtktmPz9KkK4f2zYemAzkkmYQfD2gVyRFZw4NHEkgnoaSJbKgrKmQM4FHjvwHTRq",
  "key38": "58zoSqeNTcrSbKa8d4ctdyecqyFmCbFHWxoNY6m9o5Kb7LXeuPBmwg9wRz5ugPj9tfYCjP7g8frb9s8a5i8TJ4vc",
  "key39": "2cW9ALPKGEF5dNTNYn4XUwoCPmeXwF4v6cVRJ7SkvWyQgGj1NYwdzsR3L2r7K99xWjRHiwTgrvZyM9qPcv8AQkC",
  "key40": "5LaHXVschaj2ee88Ju1DEraEvqqGftu4G5jpEuqN7uXxV1fiWwQLMy1pRTTkheMBP6b5CnAQ3VEocLv7NHyJcPqo"
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
