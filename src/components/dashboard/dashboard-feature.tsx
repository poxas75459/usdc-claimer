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
    "5qBN7SDGKu57gFKZC2mJepZuu9RGtDV9jT4m6UWV41Lk2pdegbZPGAn9foz5xcWuYa1gHNcrDkvomRXXAyz1q5qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NDvU43NjuaZeLMh3D7dcwmq9cHaD7cSrLvFnNwcUmoNyoBKHWQYtsdYQGkproAsNEJ4Hj5a2XLH8d9GR2bA8ZYt",
  "key1": "2sEQnYdSdPhT18ahTBTTZNjkd9Bsw5Fao8SCixa8D8ayFZPjKMVPnk2BbUpE6AWYQCkJasvHo4X8mY3Sj7eFbVNs",
  "key2": "5FRz5MSv7xYZYWGdpQDTG9mZRAS2g6adD2r6jeTVt2JTvGs75tmr1VCybfkoqq495XkDFKtfrZz5k3GTeryNCbqh",
  "key3": "ZppaxZW5PTVXiGgufkUXjcYDrkymzZVvBtia85EtQcG87pNweeFLtUA17U8KH9SGKDyMrut5zxFiGf1r7M2dPuz",
  "key4": "4kNJyAXJdS6GY4y8vUsiBVTqCLp2TqNFvxQGfjFzL5trhAXx4ZRkGjHoHyLfSjwYrBcyfEFrFWXeQ9wZ1WHVWLGL",
  "key5": "3JACoCxn3N2AVunA9ZYZmjNgeF7iutLBEBonwfnqRQAK8qnFGW4LAimHoUYKrHJ7rwRXM6aNMZYjhYhSgFTuJEnn",
  "key6": "5HYEwSaZV3j9LgDsURLH7yx7soPoMdubGwtG6A6mdbJnAFGFG52fa3LFWbaNC7x3J2aX6kZEiPh4u472bSo5K9E8",
  "key7": "m871sJYt7m6rgvKuPzJ6hQKZ9T3Mimcgo7waYtzqMPLfCZSB5NQrnatV1Ay2FULvLW4hiGvbi6ud3QFpFNMPDGF",
  "key8": "cztyDiK9MgvjFdSWkrdKc2RWtrndhoCovN5j9dpUa5NsMrz1mwEoWBo61pmFUjdkW1knT1Kj2zh8ZoZ85eYKtMj",
  "key9": "3Z51KxdoMPyLyL5qA7ghVvWZWJn5pcS2yG6Kzd1huKuMmHeTQgYgno7zTqTUP2a7buKBtUKkun65QakoYqPoctNX",
  "key10": "p9Kt6izMpev8gScZBVxgkYU41JNojggc4q5yJiLNiku9hBSJJ4enBLtLwafeWkLuQ8R4j8uJw4Fu3suy3bFDfVE",
  "key11": "2E4K3sT9HrX6Jt693M6vAyZxsrcjXYUGZaSuSH8odKiwv4oSy8nWeYjdhNxLV7rLFWGDNk1SuecY4kuTx5i4MzjR",
  "key12": "rRH76RTVLLeBZNtvdWxsNbDfK4tYabC8UC3CqvLLskNqj61N6yDwKJtzhwevAzRNQSyMz1QteckWYFxEZiyNTP2",
  "key13": "kmABMx1orNA58sok2UYfPcz2HvBxDRijzUJJ4YqGGoRuFjAfzAYDmbebnu1TmNmDPfpcfJT6V1k4ETpqxdcB9bm",
  "key14": "NkRuFQdiDAAG4fX5kk6e619QXyXTB7iXFidBkAAco9LNDsPt57huYnE1CqUnqX241gJ3B9gFHqT7MCosoX2Sitq",
  "key15": "3XNe93P9sK26KNEkFeoqeNhQCe4Y1EFKT6p2ZQpBdqWcb3VGm8Uh5KBXQ8XJjYxYG5LqsDkMSMQ44M3Mvo1oHjXm",
  "key16": "4sih2Pn52avdUP39HxcHN84GkwdYKkX6RD1LxHRy2SqZfsh3d2iHVCewt5waoXdofgPJWFM4UttAZj8CcsEpuGUF",
  "key17": "5LrHQKDAEHzB2KC1P7aGTiaZ3858bVAN1WECPgPeC58zSFcJ1VNVRg9BeT5B3Xhza2tS6sEXoRDJiptt4BaVeSmu",
  "key18": "3Jw7wdoyajMBjQbL6TF8DvXvXrqR6tCTXjsguAnNGgvA4AZSQCtSHyZTNUEHb8mktYmLdUMemBg6VEgdqCo6i59F",
  "key19": "2VmfE8fq5Yd95g8mCrjxamzkWNU2qNhoBWsH4Xvr1YVz4YdbrGpXfhekBtPLUBzoguMNUyqJjzFwgJBEL7unxTRP",
  "key20": "4wcnLMWD3Nax7sopWRuTdgGgNrvyRUwvUbSPhntCmnmcEi6bPFFfSQrdP3S8XRnLuXWTepndboXZ2XXPEnLmEUrp",
  "key21": "3ffNKmVabD1tc35ohcSxmeQzSzNQWKqmB3gukHVYGWKvSySyS31XUpmfjrkYQmME73DcPQUnjeacyhtq77KavmS1",
  "key22": "akpHoRUcbptMnGKbMWZgfXefKYzzDMj1kfsm4wHagQFMrfh6cqbCdmLYXoC5WSzTn5wjtCzomTND5BVNjcd96RL",
  "key23": "58TEuXbg7vikZgKQNigmL8JsGYBe9kj7e6HyyYVU5jFBWGGwbNsasM2XKr6EZ7rkCocBVpX2EG2Eeifoxjs1xNiL",
  "key24": "3FAaeLMiVpi46f4mayud9NBGVCSkTvpgH6siHqP7RzDsapUpaW6ffGVTr9dYN6bMus52nMNthoj7yUwSvGHTqpGc",
  "key25": "2Fk9t9jrpvHMfmNbN3qHd2r76oEfkZT2WbAhkHMUAhuTswcYuqRZmZm7XvJ9gZjR3WrNRf1zFDLn79Xv7M5FK7zP",
  "key26": "4dN4oNaXS3419Qdi3SMpxtizxcLUXSKedP2zvf8KrpRPoMxp126xuSguduLhaWvtmwKRf1FwueUvuFHR5utsP3j1",
  "key27": "2kRyRwNVPfscQihqm2z22iTGPiRhHDBrEp3HX5BxNsjYUeeymkQFPZuVDjgvRxc2K7TLLegdedj7MfCesy9F8ezP",
  "key28": "3FfmJN5iXPF2XK84L8ECf7qFyXS4bKWTtvKLrhprSVMgXeTkLAf8Muf9a997eMbU7MJaNfoTxCEsNiaPgYPcPHw1",
  "key29": "pL295Q659pmnemJeMWeKYWi3U5xVPVCuMeXgjjGjFhmcCFZ7pZgYFoFgbHkiPWwn7vAvsWPvyykAweHqXQY1s83",
  "key30": "61WKHmvZNcWaXmcACoqRuyXgR53TWk8yk1PmTqcAiADv2WWWcvwWYjCf87S7hrG2FNdMtaPQWiPJvLVn91Znm4mQ",
  "key31": "4yHpTYURayTCJX1p92xYrWqt7g2NqvwbkPEjdQUNwc4a6bgrGtPXFSZk3kB9FXrkfqeJt9j17xpxXszKHnrzW9Bq",
  "key32": "xhgdhAXgEnNJKXXKGweMKkAFTq6avrmLwEEd567xFK3EBdBhD66F9ERtdDjyJhrrPeTnqSvTieTEHQe3piF7ugG",
  "key33": "616ThVxPfY3umkjKrp351nseurkmcm6H2wri95iE58ytmtaebbkwGFjQrsfT75noiMp8tZfu4eGAKnoFr2GpDVUc",
  "key34": "pJBdxdcqdKYW3Pc1trRr3D3i11NnFKNjRGYWvkgYWp2Yj1bBwjonwkEERaLTRgxCfKJvcruEXhzkt8KWYiFaVUG",
  "key35": "2uChPJMrHpk5JE3TJFqhv6bLE7mNN7r1t7abnLV4YiZjKBvZUwcekgq1jzs8yNr71vqXwpm9JSR9ehqw2yZdFcnc",
  "key36": "5a2BWQLvBKgPPNnnZ1vJmAEKQezY9Fm7fvVKGRADSXYvqtWuNTh8YaJaRzY2W2im2ixhg5tJ1tuCNzJNYHg3ugZR",
  "key37": "5WfymZDxyCZE1YzTnuqXZ5jMNcoQdbqLmyXUVYLzpaXc5LQvcfDQYDNVG5pczk2AxpqKjTkdQzvVMCmS8kn4x6Qq",
  "key38": "3K83XZnPmj1C3DoKD6fwqDw9kJXgSzKg9qfL8aQS9WKoRodc9CL3UXubPyUR2E8beRgbRi5ni3EsAWiJUFX6s4f5",
  "key39": "4yS3RC8FPHqxSjoSKetF1DKsGBeaksR6iq36TY1fK64TrLYu6zQByAP5EFH2Vd5rPT866sXekbcMFsBGkCjiYwTn",
  "key40": "v5gGUxbjDizfcDNuC8JoyDNwrJvqAW6cZw9DU6a7oFGpHS4FC9uu12cZ4ZwG5NodhRsmR6BZf5PsjK8S1aY1AEf"
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
