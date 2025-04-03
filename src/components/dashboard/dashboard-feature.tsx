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
    "ZwVniJKcm4s9NaHjjV9UzXp8kB8YYJtbgWrmGjUaMPUEusDxo9uoiUf82Yn9hJ6bfykuAFUnd7nvxm4qW7aW2VX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6PYN92S42oG8ig94uqv75hNZLfFjqwh19eaYPiZCoTubsncw1nixg6YEjZjFXMGyx23Kg3bb11sf5CK17VLzE6",
  "key1": "33Am23HPSPapxTCdzNh2gm42Vmksono6zfxFUzPUXX1PYpZ5MKLo64AqiaoFDinB1zXcXSVtc5TG7ovaWCzRB886",
  "key2": "5Z9serK6kFmwyUmzjKKe11VqnD1T4FSesPteJg4YTo12v8TvxDY9d7B9uarsq64Pp7GjSVw8Y5xaUpexMRDbHAVc",
  "key3": "42ZG66LsvC86EzK9TPScpCThBLXMZGpqoMgMQoqg3vFYJXigDWesG2QWuw6tZm3Fnhi2mewMnEkEnxtS9FnE8Pu8",
  "key4": "zVz3BWi7DDEXU2srbgjNWA6mSdnytjXAH7YyN6awozRu3ECs2mGP3cJ6SEjG94S8ppWvFNoiRxoj2LQ9ETxU6jB",
  "key5": "5UxZZrXuZFgCzn5Gp4gJfqZNhAaNYufXePDELCv12cYicZVwic7RVVtJXDw5AvbAo1Yhaz4y1GT7ZDaSmUssm3Dw",
  "key6": "rj8EkPGDK6DrhdTFrxhJNszUfLwLnnVbc2JtMrvA2Mk576PC4GQXsHyTv4777SdR1APS85n5FYfb5rkjfp6U2PS",
  "key7": "xzh4nNrb2yJ7Gt5PJu6MA9aDN6WEm4CbmwYVsPy62gv4gCkCavpmqQ7zGiMFBkuHGw76o7LfctGAtPuwLkcvgSx",
  "key8": "4ePY65AJ6ifrHHBq9HmFKkJy9GATpjkHMFQ6e5NdXKyLSRV8AsG8oHYPtHVRynKTvbhmk48unVB7QwDmamPX1uZs",
  "key9": "4QVePpe7myzxsNjsJH3ZbhzpijNmcEvTYSHErb6FDMfWjrHmv3L7hVvMqtg4Dpch4Wnv5GePGHfm3nXi94qQNpF5",
  "key10": "54vpuD9cdebR6cehsKpEnbsoNEdBjdmdYzZvMJsJiSYv3X4cBTbCoqWFfHnbCnpe8YBfhJ8QShPt7DwtvsnBsruW",
  "key11": "3prMPU8SbRWPSEmGNod8PHNG4dVjxXvkjp2PdrJDXmS8tV838oa4o39TymevCEyJknh5t5tF73b8aCLxjqjJzBRJ",
  "key12": "d6MnM4KkG9zBpKgjcBFgUsizLSeMaA2wPCAUWbngptD9uhdYUb5WoDgZU1JwKRmTk7HZAUxasKVKaL3Qm7h4QPP",
  "key13": "2ZX5Ju5xfB8hh4Y8PQgxQBwYkS1mbRFA86KEhX6mQQGip4L7zXqoF3ymaJyno3xyEtkaUGfevjsQikrToRoHcEVW",
  "key14": "iEjtQ8wM4FwN7BNhrvErQYLCmMJjtaxFjkLA1DzErHbfz5TyD3LKqkgJSWiJNtzNa6FY5cvSdyXppZj2U2pFADg",
  "key15": "5X8j6evJbwkQVfkpRW1CMj4HwMAW3YyeHVmJdza9PAgSSobYo9vAYikBKzoKGmHQauBikBitr9pkF5B5VR7Zr5Jk",
  "key16": "5E8udxRxU8EvpX1oG2C6qFnZYb7DKWeKHmeNAziJ2mqvPFDE18KPhh7Q4XkRpbuoJou1x1aRQSsksBKbPdCa85RH",
  "key17": "VuiVAAeZmRa1yyx6seL3qfL2VQNNMEuBrfRzohHdxULvV5VqAjy1MJDKuG3q9c3Dz6BNttbBrkKbd4f76CWEDyz",
  "key18": "4C6KEMtPkkAZoMStqgYvsEQRzPjGeP4eUyPRq9ZDscV6U19a2kx8DjskhTfs5jrAbKskBs8egVt23UQji4hUULgw",
  "key19": "HT3Jux1BNa9froAb71XannfnhKah4Twwb1ZFxS2aKXSK62bKhGshzWbFzwy3zFeDvPXfZHwHqQtSNFQTZS4sYie",
  "key20": "4BvHfbB3Pv6zZ4mQ9Ea12AiTaazxRmfZDDoCn5vFkKvCfXsuaZ3B5EVZb3MH8SoeMF5zzm1xXsdpubqxRKuk7Y1e",
  "key21": "4F8N6Y7EgDWLYpXXjLLkTCyz8DSzAyxgEJk1DLpFi65b6AbocwNoxwwCeJQKvj6Nu7qt91VttVuPWFjFYG5odbyq",
  "key22": "5RwqkREfUhtdMUrJCFiqujDRjXk1gnvTGiKH68vpqJZxdZuBPUgmqGgoefo8NjWihAj1U5YKWRGGCay4DTszGpMf",
  "key23": "2DD1tawWtzrM4ZwNpo6fqH6pgVnJ5Cd1rSMAAYMUxogG5Vz4qjS2PfQhiE47MN9xpegm515uZkmg6bkT1VrYnWvU",
  "key24": "4dBHdCn8MD48SyRTwsu6EvZUH8VvQ7QjY6NFfAZhm8QfX7wkCsEBfexateCyW9ysihVmXAqZKnKhuN9oQXUCUQuK",
  "key25": "2RgiEdgMW1NPjrbtN19fhYydk6zsPUUaU36yqeMe51LLtPxMXmbSf1z6DkE56TNd7fkERxNAWWkWw5Lca3F8Crzv",
  "key26": "5SDAaKYhb62EjrvB4ENqVZZ3cY3rn1V4KGU72WtwNxHKevZMq3TZMsWpo6c9njXBPd9fTucPetRkHZAkwjAhm6KA",
  "key27": "48mo8aay8xcy1j1MWok3C1aU81jucGTLXfpZpzDXaujn6ofN6kc3RRgZhxHnnW3mMnLgvZw6rWJEgTtNYs2SvekG",
  "key28": "4JJUPEMQRYNaWgMuA1wCR82iAuKQPFPWdUMKPdYLzu98svfhM9P7ryLa3BMqyc657b4K6htReYht21MPnjAwTRfC",
  "key29": "3Utdmtrx17NRs2d2nN1z9kmPjxHEVnqLHwZRPoogLjMeL4ENumpCmYi3AXsAgJWLXFZSGbT3gEu4MWX4Yf5gGmzW",
  "key30": "5mEdzf7VGr1cXPRa812WDPHKnJDtEeEEdH6Duh9sSDohtdvxh1iYzG642p7JmWMHUV7CJExy1LqYbDDMEHRHiWis",
  "key31": "4sQE7vKimBap3NQpaumvvPLPHGrjKoB6yqo8EyFLXEbJbjhjSUaNhuPyHSVFea7PQxjxheSSRSRLa7mpuJPsSfnE",
  "key32": "UDZDPbTK3ns17Gw5636maXbtVzzYeaPHGMZDkEHGwZEHsCHLNZ5kfY9id3fRHb1vN84XT2AQhpLLman3My3TCUk",
  "key33": "2xCkxsQJpGrXhKj7mt6MCDzCaTC2YVqFCQS9YFPjb5MUXKyjMeLXjGNFKwMB6EwdvggcJorArkYVcwZejNDRJq19",
  "key34": "4YwjgdFC32vG5sPcotwhguPAE2r4bLKLo4kTY3uMDuTR8Po3YQYfvyKFvC4XdCa8g6AFwpi6dzEjuGxpcHo3btyE",
  "key35": "o9kfvrKu3AJFZSgZAcc7gVkWyPCaKkG2t8uBBXQAQTViGQu9kRpYrSjw3x4Pta1jDaQ68kv8yr82n26uLmwQPaQ"
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
