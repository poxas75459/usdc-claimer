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
    "WgEekNhkNXtTfk9LrCCKKNr8TMU1PwEyngPxzvdNSqSytq5fGQT15iZDtG1cW6N81LcJVatJvjo6jdLPFzrjNmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wm6DQKtBY8gfYEmeCrP8fbyCWYCUxZjKNLKtviRqLnYju4xkMcPFdXqTDYUDZXihinCMe6Bz1vhNZFcGGHsTxMf",
  "key1": "3WnTU6SB34qhQwZFvaFRvR9FhnLWCyv7LkTxAM9TzeQr7QQB268tkzo9uaXgfv5MFx6pRqXAuYkKtn3X7xdSXEVJ",
  "key2": "4odXMEKLDi77i6qaXZHYRmQnDophQHwBUCZL1ff9gKcApYuWqdC9f6vhzghV5UdjTJZhz3oQxPiXsELvjkvoGAv3",
  "key3": "LiRkEaYuiaJi9LUBRargswsZwV2t9c9sm544ob6Msntg7r2erJ5YGq7y9extxKVR9JhWy16D5oAw51SnLUmRsUK",
  "key4": "3UnXw28RELwDCTi7oYcZRmrhsZFUUFfSgLbV12EpSr6kwJzbkKbJJUjC9csXRjAjVq9DxCHC7cMkyeG2e5pFXqL4",
  "key5": "nLPXaWM1ZN5mbmgN4Sd5sesfVE4NTyya9AVb917TWhzdFnrUESSqbExMUyEoTfzrnkEiEEqiQuTvkFLektpGRL9",
  "key6": "3FJiaHJbKQDEuNBdpFHK6jstMm3CXqnNVFmJC1P7GVmDiz5iU8vtE6tZQvYunK9DVT6SKFbqhHFqpR36HQBaK8x4",
  "key7": "d7wkL1Gpo66LDxsgJD3YMpHbXJKYDoMeFsXmLe88sHsJcQsVKnpNS111q5Ts7EFsFwY5Hrm4iUN6kG6DRGkinyN",
  "key8": "19unATq8VpxAcV9YciT89EnvhKfFpPnRPffSvQ3n4LuJv3raXntVQrYh1AUVj3YJZx7azJbSbHLTzLXD7MjEUjD",
  "key9": "3ecFzG9DSkaa2tGeW7t21mx3sP585jBNYd8JNq6V77vpm6CP1RhhENjEKQ5KrxpJSZVMZyirivfqJjZAojrdAxJY",
  "key10": "2yi8iEN53VN98rteeBBTGqASNop6Szj7ehTM2e5VoFDSDq7QJS5uk4p2MbCmpCtDpn3PvcUYPtjdLdCtnCq9KieP",
  "key11": "tx3fsKAqYo4wU8Z8Q1Nepxcvi6jKeutJSbNVJxXAW4hXjA96eYwDCYUM4KRzhsFy6tw8wxvLZsWw1DkbkeMifTn",
  "key12": "42nTXvEaDXGHcqHMSWN1zKRBRKFCjJ393y71zGo8b1kfBZsVZKX8FKto43dpXWZzitfNS1JKWSZknTss9ewLEMvM",
  "key13": "4hVN3cSjXZAzEw538JvmRbPvP8qk5ZENNmYGceCBiU8vQ6Y6ofdFLXnHtM3afgtxCcVf7fWdQJvbo4wpRTibsK4G",
  "key14": "2fiwdq4vvZ7Sk3n1iFE6rU9XPZSgsq8nNhQbhQAcQ7D6PTjHXPc7bBsV8AUJWXLBj2rkNp31TUZnQji8ZCCZCSBt",
  "key15": "4oNBkev2qMDeiqiEHsAtK7W5ViFNKh6szagD3UUTsdxhWSPXjHjxQN12tBwJGqD2coQBcNStivKcNuCcqrkGNgpj",
  "key16": "5MbcFnZ7yBya5UesqqnBS3fyTa49YH7mBYVv7yjSoHbwYifJrEFBvEbYTLDwx3u3zaJ9CAyWgm1khn6EqsU9NFtX",
  "key17": "7HzqpnYRSKq3Pz16zWBft3WyqyHNkr7YCMfoAPSz1Z4mgTqegLdPa4ZAwrTmWUCvmuU7mZEycgt9sHtQT2osvLQ",
  "key18": "4FaA6YL28QEfedW8sedXR3DM88saGWaoTPFJx4un51PCAohBfYdTCYR81N65w6zH9wibaz7gkaW2UFnat64sGwNC",
  "key19": "345xp1BUmpqo9SKSUep58UpfSYm8UQSE53VZErh2PyyzAxEThDiAH3CeLaJ15HUQGLDoDF1YDaxjpnZFmNHYVgTR",
  "key20": "34GH5XWyBsAZ6VWA7DMZ1Zc9yRf1ZXCwQtSzHggZCusPNLN9LmG5NGKqHtXEVgDgAHJSKA4sW389Er6GHgPVF9q4",
  "key21": "5PNnrcwskMQnLmkSwDFZ7wKk14tyRWr1MbDZ7pHoBLY1R1XT5Bv6yaF9L6FxW6FcesbzxUBELJnJwsKCKL9ivQSv",
  "key22": "5HNRFwE8juYMzfie2ZekjWFDJDGMzxbVJks7wxD8v6fPRW1qHfSKicXe6gwqbAdTeFGaRLcxo42r7MvFVAM3B4K9",
  "key23": "AfUfMPAv4kAH3VBuuupJmQMEKwbeMfsEdUYdN6ugRVF9BfQDCKWEZoJ867hBA8iKBC2j58tdhmNNt8DHTSdBpyz",
  "key24": "51NgfW3qmc2EZxP6EDz3k6dSNtFGsSa7PCXBwTm8rtoxAV3V6eHWEs6fwhwVR5io1whqkmR6Lg4Ykr3kKgi92eZZ",
  "key25": "33xD61DmVtjoW9zYP4tBvbveDj2rwjiXzmyRH9goMVeWJFgCvB7nsMYtmeW7Wx1oczn6x9P51fMPDsLVrmb285M9",
  "key26": "5JnGcqeDTmXoV7AoHdfBJAZRfm4bPmLj6FMja1VBPLFGZpgYyZnGDVfbaTfuuSWzNp6jJ14cvBq4QH9WJWSpfGfq",
  "key27": "2LXZELkSkW91PixsqN2obz2CRqHi8AgJPSqjkJUNe69dcyjXooHhnuWWRifa6JR7VPYYqJBhdu69jubfb7NGKzX8",
  "key28": "Gj6kSgAAUiTjibXES84U9fT7bAHr1uxarQGyzARqVbUDHEEP9NfBPsXP7q6HWNrdX3NUqBSqCdbw6efECnShM5h",
  "key29": "2GcaUQB5zFEWgaNuxobJww9Xrn22AF4QGpycAVpFUU9zCAZuiskWApustA8F41UQX2ydT7gvastZ8fRrFV9CtqeE",
  "key30": "4u3cVVnAbdiDC8MmAu5hfy2FHKkZWxeDYbE2iFzprzubLLhL9Mp5PcS9Wiah4zJnUm4zR9JiMuZ3DYa5zy9LPThc",
  "key31": "5WLRBAXfAH3iLjPR3jMw3G3L4EyMGNc58ibZWPv81XuZthdPX1iPm7To6nkzd4zVe4Y65t5UtTs6jfs4S4ansfXY",
  "key32": "4joNSkq7aQXzdnqgY59Bn7Axy63ja371ixChsBYSxD67LBGXMYRz2YdQUkpUXjHG8nRCg93u5bz2hdkYCNXiadtS",
  "key33": "ofjnQtm9FC5RrN2wZ8Wuxre8WBoyBiSq3TvpzDRZRCNjfcBagH5vFzNFKgDqPCzvtrGuecbV8S5CBWmqLx5zAoW",
  "key34": "4BxR7U4aYx5RcqN9rZn2RXcBS8V9uxRBkzNEtVMuGpuD2UJ5LsqgngxjMqGsk2Yr1WgK29qAf8ybqG3dSBMzg72K",
  "key35": "4W3t14c5rsFmyh7nEcfqt6Gh8ecikKot76iXBGq2KrAyVLKfNtNGsJTfh5YPHRvHz37BbSBiWs3FBUm2yTCKrzL",
  "key36": "5g9XZyXGBHSCYsVxYtYy8CYF3FYv1287L1ygQ8qNoobSubACExbBK8dkucSahtwWLXHeWB8Ve6mNfMi4kPb1YW5u",
  "key37": "37Xs9YtNatahBCX8R86KytGmpYbXanWqPxka7V4G92LZvQ3qjJZrsuyoK8fFFmGRivCoBiPHPsjXPGWv9peXdByx",
  "key38": "27qtnsQxkea6f1PNQbuGZBgLL3TRZ9L7XHeFU7ZAx4H9en3EvkMgudnKH5KruDaacT9B2ck86GP52G4eL2jdVXRT"
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
