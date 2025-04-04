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
    "4strReSGqj3sCenV7PNaJshFhe5fZZis7KzW8TyeoppFeSdpAZeazF7UbQ62o5NdAPcg4P2YdfMTcfnSRbu3aZnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kkmakLFPM3BDFbswJtJRrbxFJyyzdWXHXgj1r9ZA9xCH5PMLvdSLz6BkKp6wCQkRexkYfHi5dkjtrNfPa5qM8AB",
  "key1": "5EJvPqedK2CGy3n3S1JJUw9k6iuacAWqtGaqckBNC75dpJw1kSMGsx4huZMDf5gVqbxAgA6nKoBnQAUuRN3dYXxK",
  "key2": "28XFRzUkFuFExGBonEqGavsizw9uwMpinJZE5hhMjhyW3wn1Hvqw4fNfbnd3TTzYnTKrqCmiFN9PrxU3HHJYuUAj",
  "key3": "x5SawkbhUJhF5Tm1jK1UAotdCi9STbdKYQavpeFMxUnuYDeUAheoHyrA2F6NnRP8m5rBR6KWjUnnbDSLPaSCMML",
  "key4": "5skqJxp7Gw9MizCX8cnkj5m8uBkAYL1CWq4PimKGmSPL7WenuimzLBiKD6qEY1tpDubQCCzXdZtnAkaFZDLgKq5e",
  "key5": "2HVpPRnmcwESvyuJPb4qY3Uw9vthd56kCqpsvQX8CgWyQcdeumbBeR2m7QbVG6b9AHp95L7KUAqzcT6FAyGzzV6J",
  "key6": "2DeWLU4bnYwTELAys9rpc3QfktoKSh6VTK7NVVLPB55DbxHPqhBinHvufMYrSTA7fAAwbz3UUne4pCJhi9rHitVK",
  "key7": "3gKv6x36rhsZXtGLug5q2eZ7kigDxmR2s7Ca1PqEqkU6APCBzoQyGYUGWKydNxhcNzwEzugxsAAUtRbgv6H7WyhB",
  "key8": "3gb3gSQHbRix6A6eGKu7VxUqfSGM7GGhvoYT4wryPhdCZY56W4UbzQbAhMHXWCi6sSq8EirNz9vt9sccHyhRJAYq",
  "key9": "Yg7JtoSxTBrho1kiXkK2hCEtN6oSpgQ1fyK57Q9kcrJ557sJjs3pMEtQYrfoyNDmKMxZWA7yocpiHteohvR6kgL",
  "key10": "28od4SUZP1priNwy2psTkoithbryzKCEzRw2P1UM2wKoySXiadEab9JE66J56wQ37outSnkTKgeX6ZSLF7y249Ks",
  "key11": "2crS1thhp2JuHQnHBEXeoKhxbdLCni2PZZPj311SXFuwbY4rs1ks1rKssnkpQh65Cpd93KJX6rxMAgBtM3M7dEFR",
  "key12": "33t89UTb5sjTrh29VebfWnYdvQ7bETq3vRK6v9GA2LjvtC8RUdYYmnMyUNZ2QDDENysPouKRaDzJQj4MNjhLFJqR",
  "key13": "4CdiDEsWoR9rVtFtW1xk2MWrQMQ2HGQYxTBmLSZ4YzHBhC1NGxQZBHyjoxfs4s3BJC5fjQuBN1zJAeYur6AuGi4Z",
  "key14": "52mHf7BFmyp8dPLNmsbAGGaBaibiRJvxY1suJWQKdFCPwyxv1WkQJj35fW4ZUWpugZhkx5oGzWS15bR2i9GNTuqx",
  "key15": "BShBBvxfF625hH1WmV6x3aYo5ELUVX8uKzNzgN3mSCGN1UMAiW6P8UssZ2C6gTBpdiEv1DtdBetUhqiACzrppC5",
  "key16": "5tKeoNbP1ibbRTZpmUpdAB24S3MYVisXn4HcYeEWCnnRQAfYpSTM6mitr5FePN2ZqN7PsPQZfTkZQnNDSXqjs6Zj",
  "key17": "61T7BP8MC3anzRioZ6sLBvfX3nfu2UMiz7ijCXdpZJGN5rxGQw54KvnEiV3pehjDfstn6Z1TavpRyskuVz8nm6dg",
  "key18": "5EymQgG1G9ZEb7amSbPc4pCx8xUtCkgiwxeAhQhsdWKWk5W37YWnq77AhGtoWuQ5hM1r7JnRSNgsZzNvLZNqiKgA",
  "key19": "v6vDdMXQ5QCaSEd1RtET32uq86usosBA2mtsSd7dpsg972jKCKs4geJY413W426MxUYjHGmSZ1chV1X2ibrkUoe",
  "key20": "3XoK3LQDSwCnoFkBcKTi3KjZZMhJPAnu7nXM2rDYy3u316YUZr6rkMdRjzSBxxkHWo9CEEta1cmAqJDeARFdHvNz",
  "key21": "5LDhM3mUWnAbGGoaWBRQCBptnYmMwYhkptLKQC7ENmxoG3RoFRQCgZdfaXxowejQhFew76o5aAKP7eDUXjdTSYyA",
  "key22": "3pqwacHLfdDQx2BErW2njn9MFwNrcy6pqSf6HgvuxZFWdBt14nh119JsT3PyfKjFs2EUdibUsRZekMKow8DSxY8N",
  "key23": "5NAzpkmxaCQqQEroqoiWZuuxhQS9gcaRieYSFpwXcCvGgEq99DXXZPoaWtmRdgtdXy2nZMZRE7Sut7ozzZHMbuhA",
  "key24": "5VDLKkcDeeGYZzATNXxmGutctU1kqz5VkSdgWAbE7JBfbM1cZTiwVZSxnCrZA3GF4vgnEoLktgpLFpFAkBskaZAB",
  "key25": "3yF1EMtgzj5s8SFFp4Qdw5mnRDdfWmooZnhisUw5edk5c6EqD9ukAhWnufbtjYtr3XRusfqnA2RZavrwr8YhTSZ1",
  "key26": "kXNrX1fZcHR5z6oGmC9AvGqUJWGf4xdcQuUrCcu9F2JE2ed6hNd8gHkLYkKmiA2ERBG4gK8Ut44bfEBvVRCP3Jx",
  "key27": "22Ty9vycqQjZs2jkKCj4CJ48gD4wJEFZDnrcai5F91sgYz3MyXnxJp6arxZ9E3J6THyzd9iyZN4hxxTZJYtoDMSC",
  "key28": "5ScS6oPwibejpkmZRCRaG9tV9sUzPRuCjh2Evs9qJmKiY2avUmHu57qr9Gi7aUspYgrxeFn4d6CcrMX22sAoapjD",
  "key29": "3ZNe14gCavVVxS5JY1YSGoxWGmJjC9aKAGVmD8zTBowPmtDsPBPv5CRwEkGrqy3MicRBFvQUb1ZnzY9bHALwMzJE",
  "key30": "5tz3hNYzDjjKzzGm5HaT86JscWaw6cBb7UdYHHHreZXrpUhkeKQLRF3fTiVZnQnaDsLqVsQ4fC7TG3ssdxAXNaa6",
  "key31": "5HYCthNqYYQCT9yG8eofqsk7Qi4JCrXM3EioqFAmnsj7uEgR6hJ6L24RJPtQwdgw9UzA1tr4HPjVymKBHvmTf5jn",
  "key32": "3BkCAHr6StQdEyvPNVBDz83AqGyBHWxFaYgZarDknd24wXFpDrun2Rk3n28Y9QxRYr2UsFwfyZhum5QTVCmT1zYS",
  "key33": "5zWMm15Sjs6xLCqp36gnJnvHFtgV3aUtiv3h4y2qEuNRtV9i1C5gk7PLyXjevtXtqjuCLarrsGV8inZstQq3kcM8",
  "key34": "3cS2kv7bg3sywh3L3awXC4SSpHzJkUtEcoMt6WgWM7hjHyRgPtpYb1msCzrk9opq6U6nSeT2GRz8vJHZgrHnmGqW",
  "key35": "22KqA7pEb1FZrFvPMLjaqawopGo6yW2aHw8NFVzjndXBhqSwpgMW6dXWABShB8XSY6z1yWavgmBLZrX2tE6KHScH"
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
