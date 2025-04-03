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
    "f2SU1CbYPc4f2cdiSjggReVNp2jK3tG4tUdNBAhMuQVQ9R1SnZgoLDYUcCaYNKTwy9PRLp3RT1t5SYp86ago96H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "551LUUBFWryECq95j3VuNqsbYLRc54D9pt8rBdq2aYtE59gLE6wZ5awZwujw1AbCFJcQwAgPW2QfqAZk4W6CHia2",
  "key1": "2G6rtYzje2CBbB6Ve4Sh55sr1R9NyA9YHwmuDLTYPeD6jWQpn4i3yxb4NG8ADAanAeTboYRCYYpje1mVzpYrmYJ",
  "key2": "7dfRYueSgM6aRErEJAuQYsRXUb9DPN4b4dSeAXjs8dPR4mMRGTBSzs891UY2GTtoVJb3wSd1pxXiacxyMpLk9Q3",
  "key3": "fxmXbRi4BJ8efh5R2iUgSHbTaekwzyL46D2uR7Y7gTHgHWbvT6omXQh85PHjJGGvyp7tzfCFpSyFu3SgRZHVvBz",
  "key4": "rEZfmPG4TzXE4mJw6v5WX8zvv1JJMFRdRwLcgE1YSPLB6Mr2i2ya4hdapyAh8ySjNXXWGiVbaFWUZptPypwkpdT",
  "key5": "5Z22cqCT6i4TFv7f8NMzdzidMAozhJFSMWy9P8Td7qja5xTdSmT3dW6b9D82oMe55KWensUWqVbxqhXTCHB1LSpB",
  "key6": "24oNBEHFNGEp8XnpANMqyexw4DRE8tY1pg5mxZxbovC2CZUbtD2TcP3neCaBB2fhnizwZhYcHTeL4KpVLYBprcCZ",
  "key7": "5pQjHA14BK6dUo6kF4e4XTE1PQimbvS8EUagjuv51nAf68tNULAUZLnoejVSsTyWtquqetAuVExEsRL4ihkSH9GX",
  "key8": "4MfahnAjCJTg39Tk2eTr8FfgBmZfVPCamsUrezaHCdRpYcXSSaty6YnjfmzxFxWzY79rkdePAg2czPhtxs2vzdw",
  "key9": "C7DRNfPZPezLSMZsDPzbzvYP8rTx8HgjscnL2HtEomE4x9R5DxLjDQUmLciFCN5eJCT2WvVKfHpdRaMXm45md33",
  "key10": "C3jKmF8QK7LAgRsZLVZ51hVVmWX59R88WhAhPuEEeg6sTw7SWorirLcnVP4bH7HnXggxrS6GVD1MyDT35oeDw4W",
  "key11": "2S1qFke1rnRWFVKwX8aABKddnfmWjRv2WqZxuktoBnPFcZan2i8Tikm88sijijssq3aidTbeH3bW7i5rpSXwED9m",
  "key12": "4J9MyZ6sahceWUtLGn2BYwRyf6tRfRySXVQjM7NKyJc4XpXrhdkmdmdty3eZ8H74MQ1KiwWUUnhWjBTfzgPXhjtD",
  "key13": "4vJUAfuXN8wZc28CZYJWAJuRUkBafiY4wJjTtHKSnTZyu2paFroqfe4v6tV4awgLMif7XCjej9Ybderhh1WpQEqG",
  "key14": "4WEg5KgfJURTzYP5gWmTHATN3zJuDJTD39paAwMpmb3GWYLhvgbzCWuyKvg6UJzc9ERrFoWSYW4dDdtzJMzdDn2d",
  "key15": "4SSeztCbPcLVevmQvWaCeVtZVw5NGHgbxCe5D1Ce9yfUGMe4Cm2vo8rKwnifeMCHandWRx6ZZAu8PDxnEk1K4wDz",
  "key16": "2XUsJXv4fCpt1etsP2RofqkXYhRZsCfDntDJ7LXMFrppoJmwimgQqT97NHkBY57bjgF34PGFWb6o2SB9asbWpoGG",
  "key17": "2wT2QZ9QmdfQrg82BcqS7Dun13BqV57AidUX2vXm7ZDaAXbSjeyCZCRZPc9h8eGpUe9zoK4R32r5PEG1JEXoaYZC",
  "key18": "EkXD2M5uVdo4jLzUT1wYAusLTZvqTiM5L1PEhUj1uVzbXvDZ5zzc1Q9YGxheYrGN6dzMorJhygpQAj4hUhsut2A",
  "key19": "2uHFtS7jYPZX3jBrwb22WixPvJvH5Lzft15y2R1fiHYGBwUGm3mjg3JkfP81gNDjuWkE6MaqzNCwdDJUafWhcyAc",
  "key20": "4fkkeX1nqnF6J6ZE7U82vg8jqLvhkftXhGksm6SanX1erCNndRwf9pT9QA1WvDzBEgw3Pft3kqmAU6xQaUCfZsPu",
  "key21": "8NJj4ANHoutVxvuDM2kW2RrZs6Twqs2cpfSCKAGvQi3uYfzeCPnCknaZB339zd4qkm7j7CvzMAaPjcU8kzGQqwV",
  "key22": "2mofXHJF3E4qS7HooUsxY4RjLtNZSnYyT9a7jYEvYMQduBdk7yDjRdeFdR3UBHPfm5tyYgx1kPCC8dto8nVeJxeN",
  "key23": "5xAuHJMHJm6vPnJ33Ppj8PNt8mdsoFKPBnQ8Uv53MqXS1Pq35bVRbWuXfUoSdNFh6mb6QUPN7zU5Pt4aH222ZBD2",
  "key24": "5QD6qVJMJJDg9ZckBeE1kXnCN465YncsqD7h6uEVAFBzHcivisVhWULbdLYeURtvMYnEj3RfjfgbzxMhUoSVxzRr",
  "key25": "vfSbTLDcEHAGva5Jrmq7sB7q5G8Bt5CJwPhrGEZNs9F5cDdKsQCLNPf2MgZM1QKSVKnZNUGxDF8KVWh4eDG8NS4",
  "key26": "4ibozqe3zitVmbAU8vxwN5yUhJHqhryL66bSrq8t6XxxEU4iTNFfsQuRKpaYybUu57k1Y6tihZbrxH3msW6dRMzn",
  "key27": "52v46vWCtTkPD2JHQxA7tw1V8Yv252JTqBKSym3oHkhcFGuqmHbmsoko8KniHmdmYyJ538gy3o5JRU2RpxFrBswZ",
  "key28": "5nSyhyDoQTXhWguDCoLzLZL9L86v9vfiAqNhMVHxoMQxdJWS1BG1feWDtBNcETt91Hd4MKsVpLo5mFZmADKrw3aS",
  "key29": "4DYZkKf2vbfUW5vrGNdiQj3v5CPkzJDW14YmK3wyocL2bjAFDEnamfYLqcWTFD62krHa3XBGYpmgdkT8PXtgX8zN",
  "key30": "4j8QjhhjDaAUJ3cHV7UkLv4C9UGwjNgsM8yAGjTg3jpWQyv76LfUWh11N43H97p5QqQj7sTWiQnbizo9SAF9DqA9",
  "key31": "42UEPZ7rUzwPgeiWHoKk5uVpmbqsFCDYpxVRDa8baZ993VJv7dRNYkTXHx3B3AJrvgTsAdC9otkAXR7Mtfu3afdq",
  "key32": "3Tobii2YVxjJN1Qfw7MVJvgu9mfCar21H4L4Xc4Hc3Uir3zgqjgBKdKJTKBRDhuNoeKMTizqc81E57CrgKZkUUg7",
  "key33": "3UphCRxbWCSin6Q7B3Hnj8UtLhKYErZdmgTRxaP3pM6zDpTVPwJ6J7mZ6zj3oxu46pU2z6FXDhGtEspBKsj5jT4e",
  "key34": "5yrB2Gb9bvdBj8JAVdDQdByuhFj2MXoJSDtr9UtNxXnvb8vPAgTweq2ffe8GYRQYxNrpvWoMq65UQPRtuQiVxtyR",
  "key35": "2b1orV2D8TTNCS6qCrQ3kBXXJKm4pZqApYkFuhBPMRhzyBNCz5MsguyxMMT6vpzdCnXPnTVCgcGmvFUsjxo4Ja2E",
  "key36": "FR786tdvni1Ee4NpW2Z1L8ysC7sr62eu3yVBGFmkrm22AGoxwfVUD8KALNSgJ7SSgds62i4AawTgW5Bgx7uMpr4"
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
