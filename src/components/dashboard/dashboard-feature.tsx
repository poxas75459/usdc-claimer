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
    "5ARDg1JUCe8RSya1K4BaPpFvZSgKCM4wRuU8WjbvzwS5AT3LeYai27Fp2mhLKbJ5sfALoAQ6Fn6ZthsBB5LE8s4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bB9u8JLjD66nYyYHC2nYEJbwWSNLJniqEnPG8g1LMi8bZH4MEoT5C7ZTNb8EdFDxh6zuE2DmVMtqmLaB4X6gGtK",
  "key1": "5y6obNpu367cNaxxkRuetRHRncXv3SivhoR85AFETXk9oBYiPWJez7u39rq1jEyXp3hM8tsS494kGpABFzVG8EB3",
  "key2": "4XMh41MA1KFpiHEyYATnMtB86Jfsi2nHW1CFCp6EV8QA68Yex3ysFFbo1MYYL9BGd4qi7mHEWxcCDRGWV7zKCtBD",
  "key3": "5VFQAJiMyao4BkmGxDbJvWFfyaQY7AKBCzqkghQrHMcXrLgzEHqT5D45ExfhzBHmSTgUbBcV2NrtPby6eNPPShYq",
  "key4": "51i1NwV2DbHkRRCeegPKcLsgF3uR9aFK7cesf4FWFmTYZ4fTz7ZvWB67cak5tL4UsEogM4Xb4NbAtmftEjjf2BBs",
  "key5": "3RzmpJXAia3zGZb3vJ1Q6Eu3tXpYv1Nh8k24rjVWyvzdkYzokZHDsHH6RjVxpPQRBwpZV9c5JfkPcFFDuDgqMNeY",
  "key6": "57P6Z2nqX7QS23eyYViRxSG97htWfmRM6j11EzMMDr6EMb5PTyTZLaVSNKVbuevyPT2ASEHVhccTM3BSwFjgyv6u",
  "key7": "4CNzeJzR1AxzmnwgMqSQNczkNhdv7wmvVipTMs2pJqoJacnBS2qZxG5aBHkhS5NhHk7tvHvucrRakWxhky5h47j1",
  "key8": "5u6JUDPLbU9gmQC1WWaCE6VZi6HhjRijQrj9ZJmoLZjS9ymnC4W2qYSp422sPqzaCDir9J9GRwSaKUVJrS6MAjPV",
  "key9": "2SBLTbDEyaTHLSSFZiJWyGXzcwRZnE3EGRAa8hJFwQENXdKcN8aKLj3hreSZN2TC2ayHc6ShRBka6NgwKfdDy6N9",
  "key10": "5toU8SDzU3d3xv3xFArfLFDL5qAw1jPhRnfc3jS5LWt4WzVxAe5TnLrwo3mWjnTU1oNQWN7rwYA3VvJ7b4oFD9uJ",
  "key11": "5zJZye7TRtZSkWat26yB6sjLPuRJYt3VZZwaCHtaVgYfawhTEPdULxSzxrS5aWPmp8tbHDvfWrUfBbg3Q2W3tTwP",
  "key12": "2HBwmcv2tXdwwnGYy2hFediRPaAhds92456Wm687biU82W9ZW2g9Jt32Vqzzc8DX4uMrgdXwAbGr4CQL8DtXHSD7",
  "key13": "59FKz8d8NhugZC2N5hpuJYvJXCikWjvxH8cK2DG977UnQEoxiJZU6NNG8zck66rSNKPPzCL7Dcuk1TADaJvB318S",
  "key14": "5xhTgM2TfZ1s8XgPmeDdMVH1ZZnNyMKR2UAEBoriSmDhdQPBU4Duxr2EU5iE4Aj8DX7WyqSzMtiU2mzqkvQJmdKU",
  "key15": "45AeWPknSeyho9pAatNyzkphbbfsrhVv1NZQ4gjVPZZUus4tLBh7uRBpcFSHRimdDJZa3ifVuDtidN7aKhYxkCfx",
  "key16": "mQuVdtGH1Xbw7W6LUKXQFgcXhkAhfia7i4tGLN6QdXVVnkb5mb2xjPJrRm4RWRaPeo824mPpuD41W1sjJ9HjHep",
  "key17": "5tzP8s5jJ7aA87KNd48atR4WcbGhAuf36JsSH734mkPzi7vAsQSmDiNM1oZBxpSqF8rpu8VG2rqo5mJdskkCRQyT",
  "key18": "61NkSuLjB6iKkNTt64xY5PjqypV2h3UCxSCTKgA4mViNYx4J8EknYm4w9YukFfmgsWrEHbztbWaiux6pxnLVcGXP",
  "key19": "2vNWAUZScGKVanqtriCcMhdSwUSuyxY18SmjvF3NcE8j1hbnHdyzBFsYuP6zzPr8ELgQc7QXDA9we5E6gbQMzcRY",
  "key20": "3AX9vZHe6zn8ztuwBYU7nU4C5MUnBzaxRF5Z1RvabqNJUF1Nc5dUSfcMGBq4JQoQxHFhxEAdoLo6NcZK4KVmicsj",
  "key21": "4dwf6fwkhgUtDQDJJCF2ni5RAtqsB9kaRr5XPwRdhsmP3Yc5dbijZoH1B2XZ2gG7EYaAyEMWZmz8WCBzpsL7uSzT",
  "key22": "2LRMkR9MqpFRsJWJvd5iWjxGCpj1oqGrdSsjo5LWQgT6bqdrUcFGA6NjeooXZA2eQaJ9ahVi7o9kXaA6iMW9GJsS",
  "key23": "NuuTcsUPNYufZr4TNcdt8fMNBUuUJxhNHVkaGYdi8vG5cDBo6aLPLQ6RSEdusM6aNCmbnnLPdTMG3m9pPd8vbNP",
  "key24": "53hN7rGJxwsY9TKgvT8hY4H5ac4yCN1b89xrqipRcDMQ7svZ62JkK5BBUs2TCK8J9TkunWs9cbnErtsBqpYXH4xi",
  "key25": "5q16eNTzwArbvE73Ujnpv15csR4QMf9s8zgQzd9GaVYMSuwuEAVzCt577qekMCUA3VxJMNsU64sBuV7z43edmhM9",
  "key26": "2riNNj5JJMEYwGVonurUsj9RpwfMrL8Twmkc4fAaadKcGR8KipPY7oyq2YkvCxqT4uDCsMV9sqgDhyRzgj6JLUua",
  "key27": "3UpfdYgAhZ16BPnrKm1EewBTYKvavsh3XFbjuFWeBffXVeivkH5T5f9hk6hXpA1VJvK5uKxmfYbw69Ttbh4924fo",
  "key28": "AKL8Q7jyLE2V81eNrJPBGaN3AoaSB9pyfJVD74aoBSjZ5gb4geeCmNPEjkpXzevrjLRt28gGbcNrtkWkR5i6Zze",
  "key29": "45YMicc4kPE25SvaDLCbcwL4CMemmtJGXWPFwvYFhix39m539N9zJvcjKYej6dvxR7AJCdXveDFNyLubWZ6sDhLm",
  "key30": "3Y2EY97ZJFzJB5RRBAqLPFunxpCorC2x384sEtjzixeewNV5zrgXLpk6JPWkySeAAiQdSZNoUXBfPLudbLBQQ543",
  "key31": "7y8w8Hzk4NcAYT5t7BozNiExA2GynEcGRMjSZzSj1VXccK3gWYBhqNpf7vjiWbbGX7BbYX8Dx9iUWsiwMCkfNAE",
  "key32": "4mHHzbpiuLmJdeXiUf8sGdKLoDrN9M2QkjeSTp3KigzeZNrhLsrgj6StaK43pSBsp4dG1uTKaewdTFrZ4xC8tpzq",
  "key33": "WhXiaKZQQBGSwBRdXe9qn9ymet5epGavvrnHAxLPV8cwWHndXmpUZYcZ9AHHFVtpvQHajkQuAtR2ypWh2ysttxK",
  "key34": "3J1T3GFJ7Lg5FAYe3M4yPZqWY9TEeGoZe1TXv7t7tHfRA4q9Rd3LFk2MvSeim1saimf66P567Kcxao25bQ9MAKpg",
  "key35": "64qEC64zTapNmt4UXbQczdqDMQDHb1ocKxEqqkBbrDSXQnziF1U12PdCnQTjoSo5xfEi89NE4Whc8Uj8ZZYBV6W7",
  "key36": "2pVgMg8nvp498qQyfbSCDR7YhA96fha1KX3dHqyQgFFjpJ9CoYLFSpy5tJDrjKnEhi1DPpPqT6vSViJMqHZFChQ5"
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
