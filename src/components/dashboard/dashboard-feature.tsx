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
    "27sVR4UyuFUD8wZv52VqSDbxQnubBSPYZ11GMiv9c7q43QUyvj17kRJjM9uUWB5Advxg1iFPYyWpeQN71uUNi4AU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rU5zMzFccoM6FT7W7G6DuBjMXFAge8NvzF2UDZ5mDMXVdXQAZ6184Tj6QMhZrJKtXs5veKNmasDuXkYzsZzk6rM",
  "key1": "oTKxHaip59tYZDCZ6zfBQ7weNE8MozUDZWwXAtEoUquRrs1wLgc9oPS9arAwHTj9SKsRZMFbapC2CMjgUA99xEA",
  "key2": "2V9F3RDVfuWGgZcYaDnkRX1XwaUaVBoZYDGJeMpj9qBNeRKWCLec3WEhtDLh9Arok4MtaX69mcXVBRct8PY8agtg",
  "key3": "RZyyAh69wqi86jh5zf7iTdupCR4BmnmgcQWLt1nwSrbp2ejn9c9mHvS5GyUWAANhRPdh5qTnufcKy5YfVFgyLxL",
  "key4": "2qbAEWzjM8GobEGhCdyPv5YVPTcTgEn65ZEUb6TsPEbK9kxYJfaqWizDdxS9Z8KiKoGA5hBqLzPht32RQ1P6mXtm",
  "key5": "4CBrR6kZX5RZCZ3ikdN6RjjvzbSNd4ZAhr9HEkdH8duRpCiEPW5HfDreAqQeYJ2oht9bBKAZxTdS7xNWUqsvNZRD",
  "key6": "2HLv43aFNm4UvTKEN5idXk1tCfiaCJhvdWat2zGsannM2LGTppCHFetXHQ7xdT7uLU4A6eaw3M9FwpDDuL2UKPm1",
  "key7": "2NkJW5tRLtPV3CfKtW6r5trzaGRK5oaXjBCKXdFDYVESRqD9rWCoxjRxnK2Wzkm8ZQXMrJbi458kEegAQGHLydZM",
  "key8": "49r7W6Pd9dcxmZT9ryXgUZ2HrFb7h8CE8oDzbjJiDKD3Kc6hKiaxBnhBdqGDXKsXyfRYQYfebbYeqDMMRjDJ9UDK",
  "key9": "5NjVMc5o2am7FZCo1fhCiDRVr6WnheVdD4bUNPADK4b8VuXzLCDo48ct9bJxijEVcyFH1JbWbTyM7YisiUwoGjUm",
  "key10": "5fMTHoFjD27jhVCz8t6oivDvMTJahKPR8zLFt8SCGqbRNCoTXM486it8VtM8dcP8zHUyz6QZ4aEMXn7ds5p9qNvh",
  "key11": "PCtStBUkyPnd468BC3HLF3DyRCSAN1WmmxudtBraWKFmvivuSqcXevtW8cwRWLDz1FDhf8Xyh2xrYfBff1XuoZv",
  "key12": "5pzWoJNARjDCuHR8f2c713ZHnABNZs18bgb5VyhjAMquzrZqmnAKvf9px3f2kVpxRP9tGPEZuZQQx2VL51pmeKBX",
  "key13": "4oxgsyiVcUDsMg2sjaPgseWSFFwaVBNwjUvxBrQ9w8vgyyPMecSrgRCibdFyj9m6D56QhqTMW2Aw65W5u6k5RVEH",
  "key14": "3zRH7TLDRfc8Zo6zLhzZ6B6Z9qjkjMkk79XtHYqjxb7jfPaKTYVV71bp8QpPGjxUJ3RZnM7dciFnZKExSK8RgfZp",
  "key15": "2Pd2UzzdnKzw3UB3ZAn6NwpV9yEs3tFpMfz1oMh3NHHoxrwbbnfFj9MhS1L1CGT3EXBPERNwSZwchk2imBC7siqa",
  "key16": "5vauGpZpyCrxZ3yZMkCPKi4t58xybxuQWU3BS4msgtF6eDnacSB3jNyDa9GZ82K2RR2ZJ5PNsLtYmq1Z2hwsrodW",
  "key17": "2YLCryFzZ1vfp6JzXyAVybUVQgQTyT8mk8EcSFQZUzkMpkPthqxg8W9PCRmjtnvGtYh66Jx1YA64h4bkUhtLW8B2",
  "key18": "WYSZjv2mdSxzU9dBcmQFQfCaP5KFfeHUE9RgAQdR8UoZJmMLgjf2v35LybHKphbCxERxuNv7hN4B5HZn3xv7Ynx",
  "key19": "5kdE9zEf5FKRiP21Ph95NkbnEzfQQCKkEWviXmVHyrGixJ8QkHMhG8ZBcrvxCm5q9SfesLer9LC327mdo7kMQLGU",
  "key20": "2mzgXdpcp5AD6Uq2HzaSNdWuskYKTmTa4zjkrM1JVDb1ECv6H6CeFGyNTWMavn7f75SMaPwRZhBCgjov9QSTWdqL",
  "key21": "2qCH8Sfd9Q1KroWihAJcuH8m2VfxJyYyUz3PZArVJyH6CqTswYe9SQmMgCHzBhw3zncMua1tRbSx6ZtNwVSWADhy",
  "key22": "4WCpLZ7rvYTC385UcWW9scMiKtGdYEBd3oAzATwWbDc9p1qZRcp4Wy1uNDMQEsEcJSpaJVU36214k7qXqujZDHuC",
  "key23": "3cdirCctjHSVJ1tmKcbhqcDkzWeyBd8KU9bBsaubp5RJ1QyKarQAkki1DiUtEyJHCQhSYYdEQEqAm3UTr44gMFhc",
  "key24": "64MFcZYv1eWy1dsQzssNX5oRKZ6UAL2N3BARZssNKEBoVxPT3deCxgJTbFpB93Se31gAJGBr5h15wdV15CEPa79X",
  "key25": "3HmCDa9aLJSGTM6EKssJsfJFCFpwxv13tHZ9MfzhRSzUsoG6nkoinCXfYMMnLAzrocZxj9qw8neTqqtAMFwwJK9A",
  "key26": "2oQLivUJjvz9xSYeLxAgLxLFBYo1BCwJMdnZjwMRAJoaKzC8eeVuSkF9AUPKJP66M2KcupUQKHVWJ5Rg1EAytDJX",
  "key27": "2kQjB8xqmGGN6H81xEH3FBT9Pyv9e6neoFUddi3J6HjUBHjCkFBRP23GbV6UBdWhdfSUuFZdiwuv47LTL8YLvEvF",
  "key28": "4b7U5vWANw7qmsnmeiJcxRhT4uNZ9ESc3c5FYBvLSPP6QY3qKopaVPUoYD9uEyu4ypoR8YWwsnN4a5PtL887D4SX",
  "key29": "2U6B2ekyya2Rc9KGuLnrwH1yaBFWNx6TAGXWB89ptzK6QTUvBkPAhgnFJmjjfPomK8Bdd3KBeutbf3gVakB9xgWB",
  "key30": "23LRe6zj7i1n4NxQsPvNGdFwakwJ7Abxm9vLAZApN6mAYtBFKiSFJ5m1TG35q57dX2q8Qd8JWpF9UaNadTkkBcyG",
  "key31": "zkGjFsCEYREuZK5eBvqJ6sxFVpqjjfSB8aAaqUrdLtNVY9uapz7cpgFNQoqpR1x7gzSEvFHsYmnaPqJBK9o9nRs",
  "key32": "44Zqxbmd62sccCwufgQm2KTZE29rqHuYNkYmb8CdF1jYf8z4GNP9htpxfD9aGFdRZbNUarHm7syBww7WkeHz2qvK",
  "key33": "3ks3fWY7aSMkHqD1ZRcrz2gjHXrhmxQ8asTsFoXZWTFmuZzQhvLonKr18dkbd5fp6JLM58hYW6n8ij3MYGLGtfDs",
  "key34": "5uoXmXe2orw185zbnfGx6Ar2MURKJtKP2rj9mxE7SWdsQMrVM42jkwE1EbLBwizh7KEji1tLQEVYUKn65CxeAXHp",
  "key35": "h5NcSimMv9XJZRVRx8feQqZdQDoeYLiZHRsdwY29iogsfgyaDhgtMfk3zRTzYrsZHvn665Tgg9oktd4ugvS3eLp"
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
