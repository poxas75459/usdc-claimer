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
    "SWkgwRdsXm7TLGCss4r64Km7jtktu6GuKg28JHaUg27oHG9HQfbL53rQZuktRdwcaqxA8jgohj5Zx3rBtvn5V2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y6pvxBTjTJEwm6hCD6hXxAr5azuQYKTaQ6JYC319snBhgn4XYwUnDFR2Vh9wjg8EtQUS3dJfDe9atzQEG5cFtLk",
  "key1": "5CEqgTiuYaXKJWmjP4AVM95cUBgT23USdYy9TX2XtuaFAq6J7fQf1q7RRvLCHaJMqAqTLidDXzWc4GSu92kYbFWQ",
  "key2": "54oQoZzkY9nrrZ6HsBTx5SocUictoWzPP9cWJPdrz17pxcni7hGPEdxr31Weq1AVT5qQUFH65KZNrg8rNwVfNBMk",
  "key3": "3auHxdsdJHZWwLWnZ79H87PBVkKjRFxXuNAXy9pbQMzF3GpZjVrrwo5HdYnXQhZfkH8nSG6W6D3ojH8xaM8925eh",
  "key4": "5keUEvexokTE6nvT8PCLDMNpAeKUGVE99JvNUioVWSaTUaiZwQYowB6YHxBEYM57rEdrfXwxfERrzWMEfY8o6VV8",
  "key5": "5rv2ZmKG1VAy5pK7Gmvx4UJeZ1GB26RDxT9uLycbjzFbfoZ7RVvZVgBY9XykpS6dHS7ZChbDv9S6iq8SyjJhWAMb",
  "key6": "4YGPg1siUWqfQHwXZtJSSuXDQKySZbKFNZwZkKjj3nySHj6s88EWd92ntVSHc9mnQrxAw1ViDUYK5jjcG9AZ9vDa",
  "key7": "4LrAndcXmm2WaQGuhHcMkGAJZ6AxJfXk2a5ue8WBds25HCAcgR2UiM2mZ9BXNQpX4HB55Gz8C31zxHTbkArbYWqb",
  "key8": "561YwjkeHehiVyjjG8rLHbKeHamSDxDWZcEJ9FXzXZwt13T14eLcokTMgtMoFqf416h5j1TzRY4qSPfSRE7oSTQ2",
  "key9": "u6SLLfGtmcWfU4tennX3gzyRhfa1x53JvfJa8pH7fJ81cq68NMU2ZKSPNZrGfAW2jTDmtLipwHmjJSYJdd7yvVr",
  "key10": "3QapzYLGVmCQT9PLLsWHfrnjSkQ7Tni23W8RmQJtUyC1sGsLQ5oSDHVfPCLxSRKxFca7WDomTucEe8FgdPUgRh9V",
  "key11": "3FBUabYRxeKwyBevZcrkmbgjhbvFn5c6rFMPxmyUZtd7A6ZcUSg1KHrbgiuu4Qhw27BGtSPjVanAUGnfDi5s4pos",
  "key12": "5nkAYZF8Zq187L533V5L7go9X5QkMMScSsMCvdFAU4sxLrxyJXhGbRFzdYBzhxYYs1C5RnhkmTjQUP5ELyaESrNB",
  "key13": "4B7tWqHmA1bsUySShNyiEJSZAGumMbGdPwF9st421wzyZ39wvXXpSyr6GBngYeEY7MPYEuVwp4tRQXN5anihnxwx",
  "key14": "2CW2KF8EFviJJrTXWL7ixK7XvR5G59xGRAzo8vrv1hUdU6hshiEof5NiUYnnX57C4YczADNwdZjnw1U4YqBefFtG",
  "key15": "YSEpmA5dPxiDdtMuLcQH9sVhprCv1bivXAL8tJrVawtnT4YLjoMpRvb1dGksof1F5uxfkjP7C3ZgAyLGKUs83hL",
  "key16": "3wpNSyDzT6o1eMT9UtAU63CKwKfcGsmfiL1ysGCFXsV3Jja2dfsBodpm1jnReE9kbbuYRQ9iaiXYLRNHjfV1XQP",
  "key17": "2XW5bPKSjy2nMEWo3FMxvcok2JCERaQFMUw92vfYb2tuT2uwsaa5w8ZwGAmg2wX9kjfxXKLfunUmU4WKLCBWFTqR",
  "key18": "5BeWXRHf8VSfyQDos2Z3jMU8wx3ToCXRdJVtCa6xrdk2NTWMFX3TBAEgkjgyYiQ4e2ACU5kkVtVE8gSTrfpeKiAc",
  "key19": "2jtaRUyGBptqcVyLn2oNx5EPsvQW5LoTJtapAqa9kQfuwoBfBvT5GSHYbGib2FQQT27dE9PyJjmuJz9z4FkKkRgb",
  "key20": "2gfaTPFHqUKcybNfK8X5TnLLQ8F2NHZ1z9ZSv9iynqqXRAoEjCrcvg73tfjTmV3b33xsAirD3fcMFW3eEjRP2YqV",
  "key21": "4EWXSdJyuckWHMp55BYhQuH1iJTxhQ7X3oxY2k3mHoUoX98GdMfsTuSipspxRMjDDXdZkozuKtGxKL38UtCos8zp",
  "key22": "34LebMNU9MtokwUUZNGanTswyg3ihXbdXaUD4iSDvhKLYrzgd8DMQ3z4dpTdZHACzmY5V6RNJqh8fZckntYkSbR8",
  "key23": "4bPuRDQh88bimdyrF4BgoWNHXcPM4YwYFts5it2uwJXEzVxXoAShuC7BgGvKhfeLtoVPdb4cvR1fTudwz1M5WfED",
  "key24": "zoC1RMZa7VuJ53mZqUugby75WHPbWiuZAK5DcFhp68AX7PYr5jkw4GR5Q28YwrdGd31ejtfRcJ7EiDv5viGaUJk",
  "key25": "r1R2KF3kXaRgwauuqeScyrsqZD5sT5oHKSxyJ1pLxLpUczXqA6AZDYufxgm7N767rWs4LqWQvGBEdnRunUprcFr",
  "key26": "26Fsjox8y9LmnVdHy4WthMwRk958fNoyMY3tXuhQZipQCZbxwrA9QZamBvvQN1THLopVz22ng9rSsHbmfRvVqCNa",
  "key27": "6dbjg7cEGBPEAVQR6r3T7atR5JDY6BLszHpf6RWvvPtkdEbStQp4jozamBb665rQXC8PjtEDP5Y7bfD6yU4C6GV",
  "key28": "57xteNg2i8EzJk5kx1qKgmW6s9M8ZtuqRvaX3GZ3pLn5h57MDjhcy3fBoECrB3DFuR9zrh6eCar3yQF5xVTwn28d",
  "key29": "4uis2KYW3ogyFibaWhiM3d52xLkpk3f6hwnQZbKbU1gRm4XLJfuzLrH1dUSBRrhnyCAYfQQiperGTrYeK6yrQzmq",
  "key30": "svjR3XyzpwXWgiKvovJvRmJTRNhbpMT6rciALE6CRwqnZdhRoFhuXjnZVNYvzVYUyMFZmk3KyJHwWQ14LpcgMWn",
  "key31": "5Gtp67xQFbbYnjGLnqkT2Hpds5QTmVc3GcZgmmuCsURwnwhYxYXhm3MPpAejzVgeD2Kxu3VbGNjg4D7Mhdmun8VX",
  "key32": "5Ym9V35P3Eon5zekBKwbmSf6Kjxt872aSnwt1NzJ8Gq4TaKMSBJWFjarHH9dF8cUWSGLb69f91ykTQz9Cgz6XwTA",
  "key33": "52771XPZ9EeZUWAtHnV5TdhgKP3pLiFR8tpnoREGjjMALseNYwmS4zvKxh4Zqa9RYQtzvZqgJX4DZ1SrjQTRcgYg"
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
