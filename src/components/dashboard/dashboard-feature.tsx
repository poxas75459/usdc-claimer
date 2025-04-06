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
    "4igqWFT69k5ya9iskJrYdD1emU3GwJ7bTemhw8qFc6e6osjiJg8FWjGceP8JmeGBMYjQCjkTbrQ7Noy8QYzfeKzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27YDXgs43eySBJCMb7N3QVy5UY7PBwqTEg2fSgtSLEB7fhnjytfGWHYwBnXvddqW4aCzxFfHijxDWocDkQcjddwp",
  "key1": "3uo9ZUACweV6VHLqC1RurS3y9YAAJKZAZ94sNTP3DA9ut9RKCgkZy9kYiXTDDas2yvfw5xiS65KN5jmF1sP4FaUi",
  "key2": "29UbTc6EkPJwSEvbXegYeP3nv3EXETuWGHaTC2Euh7JbpFobX8DVdcMT9bgrEBVeQ8PVRyVybRLL8rWmr5pjjTnp",
  "key3": "2Un7a8cDWq3g6W5WhKHcDFpw3bt15jkaYYQ2s3uyG1zG8Wh2pv9TmgNEFGd1sDgbEE87NpkzpxSqbm97buMQNSPN",
  "key4": "4TyMMNudWWFfUS1r9tYDNnVAYzGJc4QZHzH1y1TfQAB1Pju2b3DB7A8k3XhXmTABMxWZNxatZpkyEdHfuC96janR",
  "key5": "2DZqN1DRp55RjcQEjhaBcuoPEv6Fsq7DHjPrW3yHCbp4KKvW9f1idUWYnfEso8cBfTm9rUynmy3NkdF5daWkCYnp",
  "key6": "4v7DW6JLs4BpRaTa8L9DP8gR7YiPRXNZBXg3Jj2ghh7vLyACGDE7gfYeVnhXn9xgJYX8zCKzaTSDZy1j7geZRZek",
  "key7": "2ZeXxLQXY78JoxhDtqZsiSDT2sVhQXJi7JxNko6HBdjNwbA8CKxQ2dUhqkc3stepbhhkBz3NZrRZV7XDfwp6o1CB",
  "key8": "7tDpWYsmHCmbcL2LoTLVazHYT19edXw8ruw5HJrheGAiwoBwHyC3vDdGQme95XfkcAvfyfacjiVGr3y2veQMMbU",
  "key9": "2GYJk2V3x7m1wXQEgPk55BfriBuY2Tf2yk2mRnov4w33dqPMtR9YNJ2QHm1jzhMckARtnh9zDaRqscrYi4epKSCa",
  "key10": "5wY2vWpiS4BKScLfDBBeZHGakg3zsdCwxV1ywirSKvABH7eXEZ7EvtUm1zNBD18j2mP3NHNXKBiAJhaDXW5VXRj1",
  "key11": "4fb7TUr7vXEAgRpbTKooXXzcHuSnEA7E6aVmRB8RP8Y1eVcddgteEBXWjCNt1kqVSoVj1o5fp1KAhmN7aZeErLUL",
  "key12": "2vt2ZDqooiZqJWxdFCNzk6d5rQwvPztYQvZePqVXNwnRUZoKJroXKPFkLTe6zdbQAenGh1y8Y8UPY2ndaNQCBZpv",
  "key13": "3y7yG9eaoVM43QAfyHn31HZs6ZD31mfDk7zFGc5fLBPaTtxuP6q7yhhW3g9RpsMYTLuupxYJsGuXRtUaWRws7LXE",
  "key14": "3UF1Q9Enya7P525uhweWQcZvujU1V3GK3Hf8Jq8SYvw7ZagRByT2xucVdrWdixUngENA84WHxvGdJmEC3NkxazhG",
  "key15": "39itX48KwcWLEErv4fHyo8Q8J5rhqxBxNbuujnYj5J76joMDg4QEWBmRcvvVSenPJAp3RDFC2UVyW7TUeD7hnbGQ",
  "key16": "2DNDGr3vDm4X8wZ2HY55CKZoxxLCwBwXvtcBgqbNodZwjEMZCfPTH73yTcpwFLcAsw2KJhKh1r26WUJmD6XVMyep",
  "key17": "3LVhKZ1injFV7RSSUE6Vb4DsJgNQUFgjBVjZtahZoqVDyRr4PSxAHU7i7wcs67sN96z5g8pjNhdmuWyfPHQ1uLBZ",
  "key18": "2sgzdMZ3CqaSozptVdoZErFz572heyhYJgNL9zGw72fvVXpGsw84qzXw6ZMiU4AFyCPMNZ9nEUtp2sLB63CKuXvB",
  "key19": "4xivu1EZ7fCsAAyyVgHqCSNtnvYMUctNf4TAWc7XztkuL5CKHWyTsP9CsYQDSdd79vcjkgRapZtxVk1fFp6nt9kM",
  "key20": "3uoEAXrjcFLPZdea7TPEMwqirSKfRW98aeSbzvDU2Ljo7nJofF9f6yy9ttCpYexe6JqgUpfFegVGpkrCtrS9cte2",
  "key21": "5tBpBQiAhobT1TEgAhtZz9ayQLnAdw7hhqZYPM8UQJKxLijAp4ggFQy5Rru9qXYaQQW6W9twvdiB5TU26kd7A6bb",
  "key22": "3wNai5fHCxWxPw3hXBrPMNWGPfsGjpAtmiEUtiScRbnUxDuMyDMNVEcXq2QgSQFqyKqnEdhpCySuwzWvBidacXUK",
  "key23": "2SECEVRFT3VDXHjJMQbSsGezSGds4aoZyFCt34qeTXN5sgasYrFkHTWmbK4iVrZSMkQ9rRWeDH9Kk7C4FPckCfbJ",
  "key24": "YihgBL1VJBULqx3RtNuZqyJ1zix5rL7JvttRc4HLb8ZzjHt6HcqXgYw7u5hiqbm1zqcKTgzLQpmH5pPTNNQ2pJM",
  "key25": "4VfesAX1jv9JxaR7EPw71TRJA5wjgoTJPFzw77nuGug8w56bgUJJiRb33svM3TN8oYJq9UtBqBfJ8cVeYRQWMgVZ",
  "key26": "3Y969LKH7JPop6655D7VxPjKPq2WawWqxxowJXpPFPw44hP2A2i2q1oEDBjfhaJQ4K2FNj9CKzydEVLaMXMQkzmS",
  "key27": "2ANWcJknfnfybay3FdPAyXjSgAT5cv3GtiveyYZFtJp8XFQ6uW3hM73dAz9sWmGdT7nnvcVpRVALQpg52Q6fybWN",
  "key28": "4Bgnf3yxoCTsLnihzXKBCPjpEcvqqSQRkLYNokt2o6ZMVkSc23mExJE4aiStLk3BSCdRXSqi2L7Tgs1xdh4GGxSG",
  "key29": "2SfoH2jSjtTay5B4zVSZCM3PPjB4QgPyDTAngGnVAkQNeyemL7Fbb1NCNKdhy1xuaLJ3cL2SHXG5iFb8gvRiz1Fc",
  "key30": "HoQHW27HmseBQuP8G4ReaNUDZ5LZEkXdeRpLgn9A1rx1XHwKMH6R5Ejue3cnRpsrJfZibPYh89RqqXnnDPpJkLF",
  "key31": "39keutGn81ByXHHUwXtF9rornN7HtzA1aEZmrSM98SeZgR81ptCNZc3fTDJ5AMj68n8EF9RC8TyXDwqoQpuoXaMD",
  "key32": "SXNfnexxbudjE12atN8KEp7zDyoYy2m8nJyzj3XBcEGmfjwyiR8qHchNzo3QXsLGMtK26FrMzQBDwcCKdhvn2H9",
  "key33": "99RH8jQQMtTBv7hGZcR1jZzuqiganrZH4qEHRjVGJB8stDev7dZsPqPcZwVHudTi9PMBp7ihkRqwutjMVSAbfcs",
  "key34": "2nr2Ry3r5zn1k2dfdSrJEsCmsrFapr4G3HbvFoKmqPSxJfFTovkXnwSSwdZzzfMhn6JxbdD9Mbb5mJ4CcvsF4Ejs",
  "key35": "49SbMhXX7cEVB8fZWbJyLK8iDuHaSqQ7JHngqy1mfY29uz7o6aUtnwov6miFhqesJe8Tb21AKs6HTnKpDn7WdgLF",
  "key36": "JSYYS72uwA74ENiQB6kFgrCWjWttjFUshhrWPfmSpvyotM9DyhczeEJnSeTe57Yc8PQeunZf9nzQJXhMUwJo5H5",
  "key37": "5Xy24LsPKdzDZ6ZHugFsuSy7yMEXcRyBFjqrqadtGRyMNvyuEDdnttc4zxJUFCjnWJmse2Np4h6oeuM7iWFUjNzn",
  "key38": "3Q5DKy8ujqKeDqmLdD4iHJri4yK3N4c7mBeEC3XUnqvD56LAFtmmzVbgN9jaZcttt7wedV3bnyyHkDKZngYjzexY"
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
