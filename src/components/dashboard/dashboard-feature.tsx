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
    "3uihrieSESjHGsKNMNtmPAtCz3wSX6zLdQWJ7sazmebbTAFmdBR1oaLasy4tytsEQmc65NG85f1uGVJhLHaEK8Ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZxLAC7Co9ja2T8hFE8Fwzuhq2GAuuxFh87ZCuLe2aAdn7wtHkhqxzPHzakxwKYoDU8EFfiEn5Tw2KtwbyPAGXKv",
  "key1": "4w2haeQmWx1aEGYdHz6xfmcYfxpb5GNhoAke3Ym1N3xA9jNHFyQMmbaj9FauBcRR5JXZLBGVrxcPJYvHzDwZ1FyL",
  "key2": "5gLze7vi9XobcY4NJCWTWfB4AuGeNKKeJoAGvRA6PAcfMgoRjweSm52imwZVscnafdFKwPf8gdFPpHbfPnWGX3Xo",
  "key3": "DZmLKywhNrgYzKH7MrGrggUbGH3SxUAa3LMoCMzYxk3FoFo6geYCUaGVTjbeumcXDAJnpr8QBTnijXHR2ypzaT3",
  "key4": "4qqwcJtAkjNDrCiiLEKrtEubQnCha522oxTpn9vLrgyj9wfELQCUpdUYTos28cjJdMiahka9P9MWjvSvsWbHQtUY",
  "key5": "4ULoGyTquH8cbQTeNRJPw3B7tYx9wSvEuKNTeApWyjy5sdsVsTe9mYEu6BWnaCrxcuqkau58N5AuVf3Jk4XVHoRD",
  "key6": "5BvarXogA5TgoMw5wHhUuiWPE1GBZK6Qdsm2NXpM3YfS7vZ5PwNqJ5Wkr6aRQprERLzvsR5Qu3QpvN8dGwRexdUH",
  "key7": "YCiX2FZ8f3aSd5kZfqHpcp3SxEgxb77rEvzwA15tGSqFCw66YjbpHAVHvJFCmsohGnFyJCzJRmbMuFrtdyyVMtf",
  "key8": "s1bRV7K6EPsLCD4RRynfxXGGFBPorvGMZ5u62HR51gLLVHvWYQu5RgifYt7Y2SQJQVFkQwBGu6FWoCojFuTEGHF",
  "key9": "3XPwdHRZXjWM6FCbC2tYuBiMPSnGtF6mf11M8sPVkVCiB5fQKzCptTAzUKQP8b5xuVr7kzErMG6HAKDUfWgEVdZQ",
  "key10": "3UG6SjCqCuT4NBwJzf55NeVe4UkjmGPKrLvbzzprsoXhGNwpC7qbHVPdYEjQxpEvwA7KVYewK61MtSPfH4bqBE7F",
  "key11": "67LNUNh6hBhvyak9Q5cboFeDpduXPqjKvAxsXhgKUoNstbNSfuq7Q4RSvjnLm1JTqZTikCDvbBuKT2Fzzc2L4AGo",
  "key12": "LJzUAykrCQqsagaB1HkRzoQ1DFqH5YD42cRrp6kALLLmFHMgVuW146VFA5iRJLytcgBhvxG68nFwf2tUqVUp7L8",
  "key13": "3dXMQP9S6MW3nyvB8S7u1UgkyjtC4VNNNXuAMsboVuSzqRpNu8RoJJXiCc7AjPn7bBdsRS3AFsykCBSazjZx3NoQ",
  "key14": "2SSE9DzoeD4i53RrgpD9haH2RctTnXLucxB6jan5YFFp74xwXNESGKhE1gLyJ18pW2v8HFph5W16ZGm7Sj8juP11",
  "key15": "3fU6kzuZ15AdFEgKesBFpNYcwQXsBH7dJF3v7GXxYdNJAFtSqN7yRWRVzrFd8rgRSM2jrfbwGRfbjfVkrDECzBne",
  "key16": "5fT6Wzwx7jekWKsH1tBxWi5qTB42aAphwyMo9S5wKhHti5446tTKHTac6gk9vizLiEv7jePMDtsRQXWXNnzVQ9Yb",
  "key17": "3h4rTHkvCan3qn6v8dH9SvNWWBfFo3vfzQTnmHyqXgFXpnT99TtsxGnCfJix2BDTyR4mY5uUu4MPrqAzkrM9aVRG",
  "key18": "34MARzXGuiSsj94hWHtY8MwzMT5v3NBw1VhcNxTyMmU8njxCqFV3xmHW9Y2sXZtBScxNEPb5EJe66TH8swzMtbqG",
  "key19": "2vJdZSzVbK3JSgPAuW7Eu3wS5n5fsQkQDwzg1tqt7HXXNXLyAwtE2GyMqopTAjya63ncYyK7ZGcWsV2mfb9Yn3T8",
  "key20": "5QN25apnfyxBuS8pJtnShehi7vzeK81KmjDgHSzJZh5U9oykHyYD4vTM945SpGDCea6FcUUFA5JJMK8vVTA2KgRr",
  "key21": "5v2gPstdc4sdBnwxQpafiH7bpBU5ucbweQYUaj9egBxUH5RL2MWnWoSFffXdkNcd6HgqzDxkU1WuvaC5kbJcS4HR",
  "key22": "4oZQevaE1pWHej6HMuXbSmS2Enw8jWvX5eXRXf99TWbW4SX8kBmg99FBD3GHYSrubmh7biDTcmSdJV2Xcg5Xqx7Z",
  "key23": "3Jpe4E4u2d524uiQRfjzWhsjZFn9EPGcYixj9Zu7FP9FUQVANJ1JfLduJZpi3kTXX1vSCsmTBUm7APkxsiPwzZfY",
  "key24": "4D1BregUpXkzzMnLBG5CTdWeycHVTVkZGMaZnH9uCDevQwuJvhZgaxyShBH2Xzshp8sSp3qLH5ELG7PaWZi2tmvM",
  "key25": "yQ5NZYS3GFGDeCNBUi5hcT3FJvaL8ABGdRr2Uvpc8ScxMvY6P9gqHmPxHDsRQCnj7CxjPRapr9feH9vd7BvBLLn",
  "key26": "4SH96sVb1gTYJ7DmBCWw7eZjFU4xfChFR7ejf4JCQF5WMm8fYc9ZPR6MSdgCX5ujUYQxAdDDSY4PaJUUhGWG4fZQ",
  "key27": "53sShFEXYLzgorfJX3G2XWtV73WX6dBYrdoe1BVRLKTCSzHXHLhVa1zafs5kqoyn2dwqDBzp24whQEjyMq6gbod2",
  "key28": "24K9gRFG3n5RLpNkUvttfXzATgYZkWhjyEjcC2UnfbKMMho7tSUHEbxcPrQhGPHZnEmE8T8E6ffShzBtqvwx7MgV",
  "key29": "4KJjrFmSu2dU7Z3VahM1a2ac3Z4HfB4Pc84B9wGtJngkP9jsDgEHwkxcyMD6M1hzMi6diMZt1cQN27qd2VZzafTV",
  "key30": "4DAX1tY9eGvHDKaHJcBqhiRE3D3ccQo1ZGCj4i7Utu6Whv2YBKiUCUGSckEApSqKHwdiKR3LVnqFKrGxTb4ZR9Qr",
  "key31": "41vQ2SAzCq68jpSvwvpevkiVEBhZ2tUpuV1zdxV9ur2ePuLrcYgnpSwcB4YqAG7GrMnttmetfAg2BspFnkfUPRQj"
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
