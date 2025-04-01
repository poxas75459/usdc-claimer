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
    "3p6nUhscgR6h66UntARkt1G5kQMtkYvGoxQLGxg4xR6mxVkprxjX9fhMEdLriDu7Sfwu6ny9ADNjGAwrrLpwQGuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46xPWa234ue69RQsSEkpCBeFeVfv2ACYjcTCL7cibQLAFY6TVyyvQSNM3EqwHEKq3M4C8bYsW4cZo9mwz2oN8kTH",
  "key1": "2DcxSHDAcBLvUn6UZEox3FsSwAtDNdBbSQjDetUXfrJdoGJKEsm3QKqNdLCxfkrirKYBi7JZyVTCfrfRx7RRAjWp",
  "key2": "5RvUoD4TRt7979GZeskMWWf7xUeFcQmD9LuhgN2Pp2UUdCM5adzLuXSBAKPZseLuekQ9XAo8UQXv9yQchUy9QpRG",
  "key3": "23XFwiz5VC1ku8qMEGRjCitQ5V1owpuXcSP8r8Rc6ty6b8Sabr2F3m9ifUUAYvJ8iQQD1k7tCr6aw9wD2CuAeYvk",
  "key4": "25kxLo5MsiH3vXBMNZmd7X9vDinnhhNXxNsk11YHbazL5D1kwAgyhRXo6bryAFQbGZfgZyQ2jQjuch1PaWqEgae8",
  "key5": "3TvqvJRquc3HGkSzpt4qgEsDoGbdcswP3Psznq4334cugbnwDHxdhggjDaJSfyNDqrpQKQyHhbZ6EryyK6Hsnara",
  "key6": "g41EZgcx6EyG4Tw9kcJXUk9GidXNKEzMJSAttWDhSNE8Y9Hp7tneQC4GLDZHr7wmmNgaYQvcYAmJu6FW1pL7Q4S",
  "key7": "4eSzTg4scLFekCSjbRPzhNwRdfRn5vHALHmtoK6h4vETwRYXWe8h3DTMekqSthiDUVY2EvLAc6cGFJ74uBhBGwgX",
  "key8": "22oxdKptTt5WAAys7KajKkmGk8Tbd4Wof1cNcXbb4MLXGa3iNEebW91efe64XYgZm1VgJuL2Vc44dES8yGpXnC2X",
  "key9": "72e7BxaF6puBzxvQJy6xiQN8LPe8RqLrin1FyXmyzHoWv55keXdQrCY35GTQWwXCUmFmbVBEQVgoedyvC3BMvAb",
  "key10": "5iGMRQ42YJxdUTNrQfp42r7Amgbn5p4QxDZQaQSUcJX9X5DSGU1XzSfj1tSC68nuAtitN7u4CdEwZHLJxzch5szU",
  "key11": "2AjYcA6komCyd6nEGAMj9FSXg8jYhqhrQ8HUxJ96E5Jq6XhJL6QRzLTBcpUGm5F5pxPNScRiHyguSfQsFtcUEf7H",
  "key12": "wer5NJxKCYBCowUMThwTPULDmy33n9UVNfHzZrMKcQoWk7G12hLtDYcuahkRvBM3juxQFA53Jre7uqn9LJKUGcK",
  "key13": "5B9PVyfLSVgati2yQvRAfqEf4YSx8jP1HowSehBNCTb58TGmiU72oz8YEZMhTFQLfsevevknJntnQNydD6ysAeF8",
  "key14": "ahRJg4UGcCmHn6itE3GpTc48igHN4TKvX2a32an6HgcAZr8qBrRSTek9zt6BiiDfeyRPo2K3e11QmDcDmMUzve3",
  "key15": "5NEET1KVAQQJR5FVaGq6bDvPpxEZ4WYbCfgqNqV5jTaH4DsiwyJeUuBrgxnEJpysbrUVCjz3rGoz6CXvQwvbVxx6",
  "key16": "4wU2wrTY9LxoZiRcdENWpL3ZrBKHzJwCkanYYV5522fyjRGszNgSRCx1tWZmuJ3wGbwZ6XVL2yyV5qLxGQMyib3i",
  "key17": "5eZpaPxX5FnkyRPmz2btG6wyh8KjJUizq74AkkZWGV5GjqCrWF1ky7aUSQddkMsrz2NSqXc95jRJUPBX9jq72ziA",
  "key18": "3Zdnyxh2nDoFeYKPxoPbZnuTk8buNguyDksd34NQRVnNcr5XefftzKr9iSDx69FeTamksVfAkWMUaR72D3tHDhwZ",
  "key19": "3o8Yd7sSsnkncJfJY95dWfuDGmQ47hhs8fZGHWS5SA4UjRgG8Fd3FgL8vML73ajJCMEyQe5WZrYT2wDZCQXytSFM",
  "key20": "YM63ekM9XMnLFJCdN4sQPns2T4iMfDfggKygJRBhNUNaiwhUqb666Hg7WipG5SqHLcMKRJueUU4hQ4TTp4sjf5Q",
  "key21": "4z5kL9BUgv1WGkC5yj9yNTifGVYi9Tgj6STRMw1PAwsGt31KRiQeN4CF3YZsAMfS3NpYRMFdHbedpz88AhkptEc2",
  "key22": "UNVrQwcoHfD9GSyYG1CPVZqm12Ln6SJUeGnxaz1ABq21S7spKsWgdajo6tPgPwpDWCmMm6V1pGsR7pLrJQ72DZR",
  "key23": "5HrYePv7yGRqep6bAc1GqwLr6aAxNVAeNrUSjfWXC7quap8HugxLADngqWgxUwDYwT5ry4pCswLJYzGgTLWQ69fN",
  "key24": "3Na1Eo8Kk78MWUUTvJ6UqQxRH6hZ677Ci6p8RAroSSE5jAmn2FU22vHxUKpULxHzRrgJ32CdRLke43uJby6R6zK8",
  "key25": "e2VRnnoqe9v9Cj4Kydd7arGakP9CW8VAB37NtxMTJW5sNGwuMJu5YvPJ63EU8c2BZ7KhuMT5WCLQUaTumAE3CdS",
  "key26": "3m5rV3ay5E2xJ2RXp67ywY6wrSvU4b9htinoUXKLLKyrGntgJAwqQPbfd5yGuykNPdawxhmYQK92F4s2xVrBUGNK",
  "key27": "3M2VoJA93yGiknzGcZbUgZfRrtBS1ypNZQs1bvHK9dN3DPEBh5bRvLKfcPXW88ruxubz4uKwMTcELrvB11TF5XtL"
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
