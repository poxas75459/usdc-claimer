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
    "2FitNVXrhXb6U7dAyd2C4PsgLptXECEMaeMKdD7pRDY9fS8vX4yQK8WnBNdg79HTVRA843DfjwFD35ZhX9cpU69j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3isMV1FAYG7HrcyLQ81mY9AQNcsGu5uqZKEazjoYqTrxArzRGAbZxuUrj8DJN4caTih1rnAmukmZj8BMybdWXRdT",
  "key1": "3MuwNSDivbpVxR8JhjE2MLkQWCUYtrHXKrB3Pmn62CbxwPkLnuR94RA5KgUi8GjxC3J3BTBEEADMVk7SSZfdMyU6",
  "key2": "rP5L5H4rtE7FktXFLHt1iocz7DgejVttNd5WZEdkS8LVpJcvBGG8b28FECkhSTCYH4XpzLt3bU6QWNsTtnNLUi8",
  "key3": "3nYniQo7NhYtqHErNSP9PJxVDmjxvwLuJFvMk7GJ5wrud97BqYKdS9unkcjzDwVjJPVWvyE8PBx5ogD7g7gFbXk2",
  "key4": "2yDC5S3Ynv7xuq2jW27FjhmLpG3xfaVZqyAVcS2oF7q6TDfnVbKiRYbMDWSYM8T1Cx7eDc4xFh7NVjqRQrhJ8fGm",
  "key5": "3jGEfGukZA5zDN2PQvcgjNUnvv8FmVnGg7z2p97aoPPCun9TuZqNQPBGBkNc3GWyKtPt9REbWUB5wPh4qBYaBxFQ",
  "key6": "jBkrTokw6kGHAnwNExXsjVcn5TorTwu6AeP43aafJTmoHTebj8z6sEWR5yMQR9VV8J6avjJpvK2s3ZACwiXQm8Q",
  "key7": "2nKaM4i81QZc9SefebafSaLQHuivTWxnMhUyKd38GKCCZkqUauYBCRCg4grJL6GLpcvKAPzs1dNUP2fgAByx5mRi",
  "key8": "4Sxgt1Q17ErVL7Bvu737NYJqVMd8RT3aoNRxTvigA1FhHcJ854UNkEPKRtfEGPoRfFHogTRyoTTE3caGXMXqUHyw",
  "key9": "532FUQeLtNvJVxzcJFieE15CYt685HpB3TfC3BuZUpAsYccEkkL8AjmdcXsDjoknNXEzB3SFMZ4qfTzQx9nifVXD",
  "key10": "2xstLLGSNuHQoyCYEjpgqArq8QqEhxNKswmdpvJN8iy9LibNPG9ACShbvQQhGi2SS2mUrwVWGsy9nSXY8Y5fhkjz",
  "key11": "34H6EKZEm7kJNzgWo3LBTzd8H4YkfuTg6v9MtNBmK5YcWfM85mkRHQcfpQpnBH15NQsXV4kDxAJPinWdqy5rUZQD",
  "key12": "2DxxCJqf2m88X3nZfvjkTSCycJWqddc5MN7uYnnirJdWJoYgZhDsBLxCLPG6y1ih5QrUFtubXgXXdY3BhjsfjRjW",
  "key13": "4L6XPxyfskwqkf5KNBX5BCnJXGMsNsaUqSMQbWZZtXreEeSEmMrHsCFTSe4jfQHQaZU6G2EyGp6wjsHD2gRiT2MB",
  "key14": "5Vb5TQLzozPBGA3xuWP5nyPsGzVHCwMoS7baeQLJnpgaXQmH6EKDaw5JhRwVGqja52yYHVBwd4JfSqYhpaxbq7nW",
  "key15": "2kh2ZaV9UXFpuQAPR5X7KfQU3t5JEhV9rA4oePFeX4Ux7wycvRyphSD6gEgL2juofctcUyZ2xAMVCUoWkgjqWHwP",
  "key16": "2GF2Hnd4hxAtuQ5ZevcZPinQmogLxfv7D2iDBcZ4RTVVkWwC6HMR1SqGd7p7wyV7afBE2nvCJSnd9Jhm6oDCUv2C",
  "key17": "2K5gYBquD72MzDUgenvodKs5oytfzRXCjrLzSK5FYENB4DQjuYqYNkC3XytEVBFv9FTgMZMRyJ2EhWdxrHcc1Ctk",
  "key18": "5kRtQ21AaZ8BX2PVFhEukEC2QpZfbqJvQ36BovAX1nZkEfrK88FdtLkodmJdFSceK2sAFWgfk2VjC8oZXdy11ay9",
  "key19": "VJdj5TnNYXyUVgqEyVfGAvPX3bF5ohAv8H6hPkE4yX9xNsdMojheFZQAAmiEHWiFCz8gT8oaCqpN8pmXqpdZJJt",
  "key20": "5YrVL2wXez6bV6ZBM2PwNvcZBGRLVNc2uEGfUXd2DRAAY2avfqVg6CoXfrTashDscDbvLoGLhzrFv8gAFHF8wodf",
  "key21": "d2mqBw1D1iH83ZMX4PPj8xAhHtdubx1hp3EdkpmH1wzhJmNYYUH783gWZ4bVL7dufrjU1v7UCBZv7gmnkCppkUD",
  "key22": "DGA4bQfDHERAwWhuV3PD64cRyDFieDBQfzFyPEe7TbxZW8pXC3TSyPrwi2X5QtXApyygaJpB5oEd1ufYWJFV8o5",
  "key23": "3NYZNQk2iJ8hS2cH4mpnBqjrUBPRRXcackfqtBU99GUSU7HAD7VeGLF6ED9He1sGq5WsG9pNBKoTK1MQ966EFeuu",
  "key24": "yQ2XwpcqbZueHkrn9jjeDYsKDqxVPNMpG5rppwdC4PF6F4KY2zcJdCQivJnrtVvGp18c1AtkY38exJH2M7aqhrJ",
  "key25": "2haFCP8AKFPUDAyoFD6WyRBENqnHCyXy6sVho7BGKQVX4MpwRFWkioUHUmcjcw5dH6nZv4eTSSLrKr3gUrqKbudw",
  "key26": "NXwZYmNuf5je9dQo4sY2mfbpp7WKdj4M2dKyH6dHYBKA9q5vPnEgWgGh6NYAaCXjB5QSfd7VK2jRXvEPqavBgje",
  "key27": "2rATZHsgMy2pi3DGNJiXfPHFSbo7qiPpBMXrzatPoy6qsFPvvotN1rYGKeMkNqzZZyvxoPBAe31gVHWMKoJn1ogW",
  "key28": "4uLE3Hib7TmHTxLg1pDMpAa3BeHvZFv5ATbSSyKLVHVz3emnNgm6UMZewrt2Q7xuYNWfsviaJDkioT91N4VW9HGT",
  "key29": "2vKLFFKutY3CnkHR4DJh3tNxvR93PWo1zHYp7m6XL6KaAgKj4gZrWV1AX3idV6hZaQZp54D7p4FwvofEjRUcDtY1",
  "key30": "5ENW3KT9EAV9xx5GJsuh77dEXznQ8SCCxhazcZnEtVoCJwY3LA3xWUYFT5zgnVzPcni8SREHKeRoFGtkzZY1Y8b1",
  "key31": "3N5V1g6t57GmJJKmC4qKQKdG7ZtmAxgkEBEDs1nZh55wZbpPYSQxdJuvoS9RyXhkQnH6hoacG3VddYXDBnAiFDg9"
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
