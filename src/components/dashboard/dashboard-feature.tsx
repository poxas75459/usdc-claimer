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
    "me3v8qnTWnYNafUgffUnnaBVPA6ggeqqwoUyfkffQGVzEgc5SzNws2zG2GjN7BsF2hdqvvAY8wjft3W6UerUvE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZEcnnq8rP322rdPTtCnpczfLM8S6rB3RnNqiZiobRR8c5WsmLAbvLu6hHeLigEJ24c2MvDekerb55XyMpV3x2P",
  "key1": "2MucvEjBzf9sFYawB3hDAhWTqQuETDjkcN9NiW3vsAUbk43aS2mvVhxQEaKhGCUc6CEWMe9p1PUczg1REtEARxML",
  "key2": "2VwyqwuNwXMiUxtB8Z2kFgbWgTZyNzWifLYgNbutiHvz5WJAKMiHC6imgHy3ej69Vyccmtovt5LSbUhyUUQmiQUF",
  "key3": "2fgagBW21jgRauNhHay1eAUhv6o6sLHDM8w5p92CTnew5kthMoSUx9XqwA54trjxn3LX6hmg4gGSjhRzwJRfSThu",
  "key4": "2e1H5WApMHCzHAwbqrxyeebq4Y6fcMyKZPQoms4C1QBR6nKQHAzWej2vjdpBHid6dRqgEv3vmicgFzgCxE2mNzLM",
  "key5": "3MuX8xBNKsEU3NzjHfgXDnZtnSyF4mvkmWthwkhpxJPezaWVwutZrNYYmC5TPf55fSos2L6XU4TKTjmcLyX7z9vr",
  "key6": "3EspEoo28tpTQjXZwEHZmPjV5CAxoqKQ8PzWz4Lpwbj6RGA5NPs7sARZHv8n3qzFAdYYuEXDAqm8VxD2EJRAiQoQ",
  "key7": "3McVxJyRgSTDbZpFjzv7NGqdLkLE7au8ZTTQ4FVMXD3pVk75wEkMswdnZA6A9WUsY4QC8dXydSJ7MJLm2k8CDgW7",
  "key8": "5pxzg6msN5EsaZ4afAXft9i4H6KM8Y4JMmWZXEZQazC5rCjTkbhYtSXWgcDMc8RV2w6aT6DFZkRusTNKrjyxpg7a",
  "key9": "26kTdH9nqTLG4LG3LV4tA9inS59diLAyjUwv2c3metT5dqd68v1jsvrdSWbFTFmyGPPD5FoWtLSvaQPwEtDPfeZm",
  "key10": "2zYkDVVeyGKUo5jPQ5gVLdxhQhaEYvYQiDV5chR1goi5Z2tESS2JaiNVbzwnwQLjJ6iD7hQJrWDJH4d12eWpkxBm",
  "key11": "53AaS7NL3wno7W1WCkqCxxq5S5FcNf9fQrW1XBZb2nfUoyov2PgNdmKdzj2g7UsKzFmy1HjXTDYn1Yc8ZyBJ5ig2",
  "key12": "eyXAwav8ziytJ55ezCi99xnFYFL6J1uyBEc32ztXrsGvcciaRk8q1nq712LbhCk3HAtX7gQEwwQHEzCwdvCbreT",
  "key13": "5VvbKG1tr62nQ4Uf8MxRxZc652RxGijqS2fXPT7QWQkJcwmcaDT56u7kDmc3CcaDH2vjpMnHjUZ8ihQgL2Qu4VAH",
  "key14": "4bywNYGZC4Cv4KRddg9TKKAPEpA1wioNT8Yj94mWBkTj5d5KqyfNUAsn8St9uDa6Sd1DswRx9dBDqzbyuiVsWdGA",
  "key15": "4zEFzMFwBy5yvaPK6kH3fgvTxub4yADs7GR14DXCZkZvSHzCfnSZ1DZk4idpkLfopxjpPKw3U2EuaxqNXPG4uVY3",
  "key16": "64yUvYawKwgJXUyuzUW4YukV6yPKuMfoCxXeEJ2hkxXzeertVf43YMj4oHg31wjhx9fGrdWftkYp37taSbRim69Z",
  "key17": "3Z1XHtV5fexEFF6FgcJrwaSXgnWTuvY7dJhSfM7sGqK2muNQbffqSzih1infiVyoDDhCfQoGfpjUhrqU93gSFcfT",
  "key18": "3H8SKGc55evfxhV8PRN7mYm77KfyF8cgu6vW4YXLieosYZ43iFaUS3g12vj46WXmxyLSC3QsX4gjF4Z5bQrqNqJP",
  "key19": "3YoRfNXvRCPhp1GxhA61PRC1ucccYNYbVpdowffSViTzukfcrKbcCwCq9vs1pb3iTKpfud367ot7Z1jzEihVcasz",
  "key20": "NRjDEgYqNdSakRRHdWXGTN1tiLerK7fFSRQBcEJ9AMfbMPh8nJ72WHcsDifV4Sp4PoT5u9LNkQNhigLj6mmaZhz",
  "key21": "3RM6nFTirXAb6WqDykqtzsXqccpX9em6hjKkNfJdJgmMT9WQeyHiSoQsiQ3EM8uEd6oYLnp9fyRCYmS3PXXrKJ96",
  "key22": "4h8qXxEtmdsGXdCUtcPbxRSNqJnYqY4nP7NoCRr8LQxYbWPGP3DteaaFhdtXehR943sdJmDb1BW721heo5kP4rcZ",
  "key23": "5C5pE6JyxEwA5YwiFW7SuXnnmW9GXau6YcV67xPsgMNnw3mP7iZaMDJc9DoKUyLzsviFnFW28U6LqyGiyvBtUsk5",
  "key24": "jPCmJxcLrmwS8Ez4TkXnU7zGJ31bUfwgXy1MfCT9pLFgZtDtrw4mTYkbCxK782magZCUnTuFZDAYA7PXYoegChC",
  "key25": "43pUb32k19AYqJASpmdUZa3Lh2H5FfK82xSqC4ZuxY8PC9An8mJjfkrj5kcwaFkwUCqTcYfep6qdV9mxHBfmmwi5",
  "key26": "4Bq5zv1bTiPQdjkcohcu82U6DQVU5Tf4aLAvzPUuaap924aN4VDZ9j182yFoGLx8PEegRiNQYvYkdS5xiitVjwZ9",
  "key27": "5GkmAt91k6xfDEvux9rCzLjqs3nryTXGskoyKbRM6tzcTk2EY2uMsQxddvSPTjf48vTJUu2w9F9Y2zYs8knrSgaW",
  "key28": "2P4B4QVzH5pWixQCvKm8Vwo6eXufug8kcaT4BmnRDvbWp4cQTcAsn65Cjb5KS8GqwwErc6a7QEEdgUiiebNvucbq"
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
