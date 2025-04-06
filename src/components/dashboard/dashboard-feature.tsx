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
    "4Yrzq9poGQ7YvGvKcoWNaCzMb2kyoEAi9rpJhCyA4cc5rR7ANp5xuaYhfGLAwoVBRaibs9tS6AwMBHUShX8KWtJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zFQdAyMG9726iwycK9i541UM8QpGxuRFz6P79kLXZva2hoF9RAdieJgTN7xt7NSKfyFwvb5DXtUASratcXz4UhH",
  "key1": "3LwJ32FuUbAweevQw6QJbPHGgzunGTqjsCLuD6CdWZYwMi1rSbbFE3bkLU32hHSqFXQqNoDNnuGpeGDGEGECydG6",
  "key2": "3DzARu24Q7AtAUBQEEsJT9CUQjeFCduss3g6w5HUtB4d3WvcYgmj7q6DRW2xgWdFGNEFyvFRRNfPmfJ89oE2J79E",
  "key3": "3XuxVweJcjGr3NKo9oYbd94dwXAnjFCwkFTLXd2bEWJ7rBenqmQ3ko7zXcSmt88jAqdeGRbVhWY8cWWD7z3eC4xn",
  "key4": "5cBo1k25UXVxEeMMbgjEwc3df72vsvMBNv4RrXEgzCoEamJus2BM3fCnqxi1feJrh4f83KguG4jtgAW3poawEbrn",
  "key5": "3J42FrLNUqbi6mRihyjDKJCs9hnepmax75EhNL6otVh6h3hJo32NtfBPRAhzbbPjynhADox8NVQtrpCig1LkYuGq",
  "key6": "3L3rbpu88tMnUEm3XYui3Bgf9hjqVTuFzFMyh8RAEMQudZ4ZHEhcp6BMyvuPmh9Cfoj5wC5PoKG6SWQLLoauJkyB",
  "key7": "3T97cEdjYwmz7Vy3Tb3zEvTKiA1UHh4GsAaZMsduUNaUjg6NDPRL524Fb1RLRyv33ozyP6BVZ6EBN8rH4y7Cmjyg",
  "key8": "2kZUdZh49bzGE7aGq3ksr978nuk2KrekDWPAP69woQhyka3iyNAavjir3QWLpkfSsbgmtVwHyY4bRH5mUK1CSyv",
  "key9": "k5kjSPfm9jCA4G9ZD7Xzc5o56SXrqNozMeXrYNk4VX8shMEKTTGpBP5Npcnh99Zk5eTYSSjjj9hevQ7dX16GhQW",
  "key10": "3NpTBcDuLqvg86prWuBaMiCMeEyXedVwpegrmhsxTFaY2RnNg4afmZnmWjzC36vXduUnVyHQfYVjA5Xw42iZ4Fxb",
  "key11": "28jDw6278TwnZqfjdn18Yocvreyb3zxPA3YaBaxgLVqsgDjUtQ8JUUfemT28Bhi4zzqK9ZasnmrynJJ1hwoUiZnv",
  "key12": "27v2fhEvGGVJ7JaUy6n9UKFd1e95qTSr7gRJSZJ6qKHcU4whndckvfVAMr5KezwLHXa9ufDcsjc2cMF6BkcKtwbk",
  "key13": "4RxERipCzPCMab7jfQekx65wPhB7Lqj2zKaxvgtAPPoWXoCFDjxdDuguuHHU462VJdSoa7qZyDdCmT1nP1wzE16t",
  "key14": "4iJiugjxuDdhbq6WD7s4kzMNk94SqLrgaow9gAg3ZBhcp3dVDwM5beRxWCAmkWKXXpCa9azD1vFTPTdbzBVstpn3",
  "key15": "5Va6DvrxXQ6CrDDQHL2gdpdBY2y6ezjW5Lq6GLgkPf3jS1Ct3cQmBf9YvhuWHGBGhmXfzwDKd6Tiu5FkWRMZrNCk",
  "key16": "62dpzLFdVYpQzpFXejYfghh7pri5CgR7kTothVU6f6ktzBXTV3Mqbtz7fGpSL13a2z56i5UJ1ZKiuchvrfSa73cA",
  "key17": "4RzpDEA2n4Yb7TLE4TUBkBfGyNg48RfvMSnJsgnewHK4iWdCCmonRP2n5HjtN56iPZCpr2tXi93ysEjq72o6ZzBD",
  "key18": "4jS4Y8w4QAHvRDjpSfgQd7BGzjmJAT9MAApMSNUULCzg2xxim7wtakqByGGZ23Vh4nj7AABXVwD26jiRcK4GZwN4",
  "key19": "3kNg2qdhTi5v8h9PyR9LvPm9k1kSzFUETTLQ3FPqnCMWCnBHxCHfvGhdgvUh8FuTj5egoDbS4DWdx49jJ4hjUMTk",
  "key20": "mCgTWGjd7BDuooo9z6qt696kNnizvpz9gtnb6PktwVrwN8DhWE75ZgNjPAYPPxPEDoduyKEH9QsqXrz3u1j1Jue",
  "key21": "37W34RBLYm7QSAVsDwHTizJvFDjn1LKZQz4j3EPjq9NCwBWPD3Z2xoaqFDJETNoA6MwdgiS9VTQzBSsKUf5szthT",
  "key22": "3szUdE1UkKQ7fCqETXnSRW9axg9SXCrxDdcsyX8XT9no2tH9s8QqPtJUXsJhice3USzHAERvCdBxmCvRaaXFjL73",
  "key23": "4dNCjNiz2KuWDwp7MUbtCYFQeNRxM9aJDsKzwA1P4R5uAicx3W9QGQENn1qY5mVrKaQcJ8xJ2g8u7Y9f44CHyzrw",
  "key24": "4Ja5h5LR5GCWkzjdry2ZJYZq5NxMHJcZ7z5bv75tVqFmYaCMSK9tSUFb4qDzMWrkvvyeVRbNiHtsnDt9SCKpM2aJ",
  "key25": "2BzkheSFuv2u3ffUMHP74Qb486deXbJdAvbu4TAhx8RoTYAGoAphSRroP1jzwVtYPzqio1NLbmhCo81RoqvFhidW",
  "key26": "SGfPME611rS4JnDiVzsQPvzMa7j3nMuE7KUXFgVKV9CYs6XP3okVbEZRxitts5UCTNVYQpuu9rhWtXA8Gw2bros",
  "key27": "yVGNhm595sjVMreVQ47ATENmpcSXTn5bYuoLrFrqvqwtsmnN1SyZbo15DQEQpudRmRz99nk6NwsfKN1k424qTfD",
  "key28": "4x1NJxNy6dyUuLRmKKu4wfoQg6foD1FP8gkU8TL534oQ8mWHZ7PDfD9uaDZo4pZRxbWBA8nbtuMvgxiNRnZxJfjs",
  "key29": "2m8BiFnCAu9ctqCmKD9bfyahMZdrT27fAZYQHcs9Drpr171nJbAeNxeu3sXoiB5h8bqVZcQ2uX6s6JKj5nbrZZqC",
  "key30": "3tKRoaScqVddr4JJRVAdXvPHh1YsBgkkAfZAWvm2tweqQNeTteK4xnfSkx1EKKx3fh22HRrgEiyUBN4MDHsRUnTb",
  "key31": "4jzGaAD24EHgSSbrQnqpzYkQekk57tNd7T6aer5C77pg1QczDHSNsnQhx5pY9CNCJsrpeHhbcAnCFdtz9tZDPobM",
  "key32": "Q85nrA33qYZD1AHwLZSzNts2oqTz2dib76R91htESBRfiRS1jjNsas9fH9JYsYW4ji6hmhvmep5HmkcAEiWoxnn",
  "key33": "v5VqbB2GiuuyW1u3W8mGJHRu5wmfcujkmjCvDjZ4fVi1j863gcdWAz3JhDg9TkN3VFXESHzmmafdRTL9Yqc4xN9",
  "key34": "5pSgxGgYXZzMa5DsFZ4paGVdKVGj1TE6H6ULavQiu6KFzqCphYxuM11LiUGoTRUMxZvgcS9x5J1davZPQP4ocG7d",
  "key35": "4QP473wQqoHcpRVfWyc6RB587vAZAsxfyiPSKSwky9egPJJwGygQ8PnhPC6gnUmKsBeXYMGqc5PHixEvJ8BrExK3",
  "key36": "9wDt8oqwQqoYzoftxY18UftAGtR1iUvx1Z9F3usWmxXvMU1MCQn2SKYNkcQqUEYSaUzY8MCoEybi6AtAGnwNmmK",
  "key37": "4LvGBmfPFpyeB7zi4GshGRpBtMxMotukqWr7sgS56MnRLsxuNMW8Ku4xYNvVieEP165BsrRhf4dgn8g6bBEbqmvg",
  "key38": "dNAbARfxeZEFLa7nkcDVv2LCyu8pCdTgbAewNxUsmXRMH9HFZKMxmh6egbcHypwaP9jVYj9s2jSxMKGK2tkN5hX",
  "key39": "5Gu1iqgmUqY7M6Qg7eJzCHDQ3XeS5PwryhCWo4WdAEkEpiZYPo98N2CZM1dydZMKFhgNrXkCfYg3XcqgsuPpjDTi",
  "key40": "2KdNQN4KZuh8FNpaScL8JiBYcYo1HfJiFsAJLWgeXq5nVgt1NuvZf8jwqD3KscYkxCUkjmrq1r5PSAtpFwro13oe",
  "key41": "2MRrXRURePaXmY9RAkH5K64auLiiqbAaiBwkMxBRw2oNL4kLyECNRwKyh9H7ny8LTEfks3pKz2iYimwGc1wvXaez",
  "key42": "9aXm6er3yPvPJYnHoRN7R8qbTCuvDJJpNTro5zXgfkdr1wWtcCwbea2YZinerXnsdCoq3qyL9ZuKTTcqsNgWJqX"
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
