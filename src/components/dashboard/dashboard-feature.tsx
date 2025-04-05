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
    "5JQq6JMfMVTuFeQCUPjfr7YtokSQHLDPzYkheXxBBkjReRQxdcsKptnFJseaYKr1cvqh5SDB1sNAavKzwNKKiYW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXYd4rtiwC8aVE9c84nswJ9yaq3ttXRuw1ryV3JHswzrGABTzHppbxJpAPWdG3kD3EPQApRdDUaLpmXwsry8J64",
  "key1": "UFyjcxN1ZaEYou6w3jYcfGoANzEPE74FrUutAaxmn2jiV5HVjKidkxzjKpyhLgxqu8ismLAqKkHazL52mUNGXae",
  "key2": "41rVWM62yZ9vZmGBAWPzGcJgdcGNXS2yc82D9a2twYkomW7sPA9dGrdY3vzd3Da9c4C4v5KANhJ7XVDLyBJcLAhB",
  "key3": "3WpnxRFmCNiyVxFZVYi3os5fno1M6oNcEzyCaDySH7SAspMBWj9sXaUYVYfmAjmaqsb5mQm4RrQ4f8xVCniub9UR",
  "key4": "4DmYyYtJ5SsC9djUwPhWM5TaLb9C9UG4NaoaNeXTqgFssMBtQfSgfUEPgmu7wE5MW7EjU3AF5bbA1M1kwCMC5tTG",
  "key5": "4B7uuUJnTEUm2LNUkRwWbYRXZEg6td49TbWma5a6MksAhfsPDpZL9ZibCU6UDK1pkpQfftUAWjzBMYH319YVwrju",
  "key6": "5RfAbfNyghTzRzFhhqLGEhXU5Y9vrc3TyEwRqsukCiXZq7muameYfmPGsQNAAsWwPA46hRMZ3n3PrtVD7wdwoAqZ",
  "key7": "2yQhGrbjNLWuh3tL3hdXDaapEbB9wmvsuj5e4Do1DeUWLcJ7kA5BL4UUTGb2dmzrNsWL7GSanAKVru74csX5WB7K",
  "key8": "2JRsU6HNU9YB4rfhssLum6NpNXdN8F7oeMeN5bY9NeG3nbF8EinVseBBe55G3kt3y5P22uWX3XLYxH4FDPdiLHZF",
  "key9": "2MvZHB94oMjJ6fTfoLDViWd5Nbd94bpCSLidU9c591ND6GEn3Q63MHAzVwWA7pQSkfFvgNfUZHiAGxvt5yuKf4hA",
  "key10": "4tKhQs6GKpxWxb9dHsh6nnwSgzSvgDufT8tA4TGiygNRPdU9tVgMrJUioqJvx6QmRF6Sa1HJhi9X5YCRvjKHcCCZ",
  "key11": "3hisVn4vCCW5SUNx57R7ynh6X2d8ECQqxdhdMH8cFXZVPZTC41sz1fqgaBA29ZmpsoYLkpd7YL1hJ86asw1iyBB",
  "key12": "2bgb9hmJLgNmc38ShF43VaEYZ2qDSo6TtdTzx6aCT98Kt6KD6sTVqMc4rzVFtYoQDVZE58St25DB8fVXrx4woYa9",
  "key13": "3RfzRLssxNKYKsR3qXroSUhWW9Xr2Ho6H1G4ZoyxdeQ5Ntsr7hANT3gwvYkjNpAx4joTqyKKwW9knfMDacvb5pFd",
  "key14": "4aZHG6qVmckLLwnd8pLqH2rcgneCV1zHJhzbpvZsV8sbX6Y4Hvd79u6ncycnBvzHDUyB4PCkvNPaepSiGtG34Hrf",
  "key15": "253P9gjFiY62iKgvn9zf4bGrsT6GcWEWwYmESGagoJbUVkgnqnk8AYtgysmhiVXfJXDEniFDp7Uhqh53tvndCUC8",
  "key16": "3RoBLV4reHdT2NDNEt3BszRSsBHQyry8pTV4keqjgTEDuXXmk9SqZK7cnnaMhwT8vautBS7YdKmh58vXWdnQRDmQ",
  "key17": "eDokiJAyYqQZWAcgZVCk5nyz6V64NetsQMi36ApjAxZ2SZdEbZN7uSvfp6GYd9rg34ZvEwDhZgBVtQgG6vnSjNR",
  "key18": "EvH7otNDhyLoR9hAjbKa12VLx4BJpogJARrGmMqaJVvmgYN87owC3JYDhMi6cepYVc1ppbCiA4hnDuUNkupMMtu",
  "key19": "4iHhS7MzZvENFn182mU4H4N1Pq9qQ7ZCXcdCU4sRGS7ZMNQPZkjTgPKhaea3Mz4pgmGjkYZGxG5Bef7M951oFGrG",
  "key20": "4B3yJaDZKMrFhxyZCDwQpzLGNr9JXJTT4SACFh9ssbrm4ufLvykfRQKvAn2HPn8NE3L4xo2BZrQcKeADsMkxuwJi",
  "key21": "5gKoFJi26k595HPD3i6DxByJTAoBTzaUC8NK5kq6d7jr1NoMhk4YQ27C4pTGv8rfjX2BHrKyWj4fYffVYhr8AzTZ",
  "key22": "5n9oBnsY3PWBsSKjEbFewT9nKAvVimweBcV2PGbBGkDn1QgVHUqDWFKm1XYQrHYYPWnt2VbjJFpR42To63G2He1a",
  "key23": "ERzAzbzH2ifg7CVPqk9Es6nGTd5wHbCVXWwqDMb3MJjfovr93DcKxrjpZzB3T8zpR8zzi2SohGX4jzmLLshxscW",
  "key24": "EzrhtTbacBCqFkzUPg58bvjLxGBaQU4N6UXxs9YhE8nM2r6BjfjSBJZ4VL6Kf8gJLGuH7qWcrAX1X9jbw4Evjig",
  "key25": "ptPQbEBn25HSzkKgzWCq38rQJePHr6NpPg8tmNuRJtq4oTWChNPEeRUvWEkCu34E5kFvm6qpthHdTuVH3BhfCo3",
  "key26": "4RKssayxMKzZju2eTTCoPyCfdGuzZKKsmC1Nio5K72oebo8wKXwx7MN5chfGmbmuNe7guVCq6MVqtnFHJ7KAsqcd",
  "key27": "3C6sSZqpedEvFE5TTyxs1kNKh5WrfR8AkHekub9VYrHeUJ3YdKatpTYxGojjBp52WspLxvQBLJHgoS7FFdEb9mdW",
  "key28": "3kZuNgbhAXStpTwVDJC1nvskpVxgw1UKkcFxxDHiDekB4y3vfxkpoZQsMydqwgcDndCNywBDuDmzwaq7aAJEysqP",
  "key29": "5WBzjtW5Y1bk2a3788f9hbG7J3yeDv1nsLEyvhAHXVUvXnJuMnM3DTQrUWxEKJ3bpageWfU67o22bKGZqMaznCX3",
  "key30": "6KznYQqvbSTCECC27xqPFGNecSnreVQgivLCHRB6Nda9g5ztJ1yAExgBwQtYJnpmxLn45Euee5HpABMCuWuXQUr",
  "key31": "3xy1Dz65ixmBRJJVo7RbfmJ6bi5kpaTTEQxZDxKDAtxQzcMWa2agABk2YFXoYh5JFLwxRhhdYWGhvK4gkrYMny7R",
  "key32": "4ufBTKdZSh4Vrns9Kg3L8vMbjbS9tQ6GxkiwMg5qaYwR7eGDcGBaQAikxz82cMCCrTzMm9AQAaMZzypsnFJPxHy4",
  "key33": "FomY89XAMkUzoAosfbwJGBDWcDQ1UouSBuwU9vQm35dNJk1g5mWpz5PPSJqeGohke47C6xtWHyZUf8xZD8VhwzD",
  "key34": "4EuFbh776xMinBuxPu3ihcNkqVfabSUNPKo7BsuJYCTTZTPR1u153YucZzW2SGBJv98tF4KdScrkajqwEzUkMFMo",
  "key35": "46rc5g2tRY11sWdHBvJN81DADWkTTJ5gAyrPWb5oNR1PcGyLZ35uepai13KTTAF13M2CWJRnwWZoPYQP4GoHP4i7",
  "key36": "5FdAmr5xtqQP7tyW22yyxuokVbW7uGzASPVWLD2DFXgKSFjNadp5GYvQBxH6GFMu8K17cJrHGSg8srtmS1RNNykC",
  "key37": "3YiUxrFgcyfYH9tyQ5VBz9D85uaS4AhWzn7Kc7uaqd7rAE4Z3i1s7cb3MA1sUmRSabqhAJ8Ui42HRTzVwaj5a75N",
  "key38": "xAwNPQgZCY9j5M8LpfRzVoepAFFNq3YoKSFBnL6Hyx6gMLAhFiXULZ8MCuzon4rFbGcksiz1Q6baqnTYzrx4bmX",
  "key39": "3AAe92a3MqzounSLJ2xVgdeoRjBkZ7WBv8rDPz96v5TeSTf9LFH5xp6pV3M72EtK8WVtT7nGzqWqvJ8ruBXFH5mP",
  "key40": "34YaypnXubwuXuAg6MH3UvdohEbsVWQY8ZPa6F95dGmbQLFNtqvxAZFsfUYTZXMELscuPGkUiD1oSkrT2ouvEh33",
  "key41": "kTDf8RnHrpaFRWzHVRAEZyiRF5vRrfWLeDhg3486GxtyipZdWDsqKKDL9nnssoJ1V1Ai11yY1abn4r3wtw5dUED"
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
