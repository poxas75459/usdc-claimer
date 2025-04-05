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
    "4Y1dND5ZxQrWB7W8ThTUDQYkWq8V7BWM6rbDri8sKe5oqBRdqAjZTyMS93S3Z9uC7ac9HnReQjR2Gxmby1FVtu7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ddNivZtwyV5TLfoWop4spZtzf9rgwNUrn2LjZHz2Aqp6JzaNzoSbZAJ5icUsyTDXk85EA86WpF1d8tzJZMbZuGQ",
  "key1": "5h1SKZfBWBhvFrTtyECSG4RtdvpmbP1S7ypoyY6tA8MRyW6aiE2oyx6SgrSBYscAW595YrckfEtTqGajfDKqNdNA",
  "key2": "TxGDjJsFuTKC3oLXiHeUvkxytd2ptRfnwUqxLAsqvRaTzDjRX5NBULyhY4U51meVLRgZqpcbizMxCgRBzDLzqgs",
  "key3": "4FDmXhx8qmseuqHs9nH7XbsDWvgfcyaaZQXkhqV4SBTMAzzJWhycB9M6zrMHLjUj2VFx3cq1HwMqadziLrViN2Xe",
  "key4": "5CvUh35s7U4q7pD7xyG5v7qxzwoSkSvbyzcLyQCaMSFhupvALnp8nkxDqwTXT3sBviLT4ZKwNidQpNMrn2axX1Ze",
  "key5": "5uQzP9ZKkVB9LZhxvLQ9Umfw1bfRc3Tz5udQKZBvA4pwDYuXUPXsGea3TKhxG4qafeVqUTRcTgLTvUPvsFT3rQ5Y",
  "key6": "FYa8VegigJ1WTQd8JRNfrVzwtcXMFbou9a6LkCgWQrEAxxJYqgTad7i9bHfKu3r2njUQMZrLVXWRKgJSsCsTxvj",
  "key7": "4nZQkgPKgCfN2TQ9K2ssNdvFj8HQeFX4qFZhdPFRwjnVibdEm3UcP3mzuHbFNKLwm3uMmdzEemfJ4zf24AWjuM6M",
  "key8": "3vVR39uF3LSHhJmbq8yXSgrnF4Qp5SAjkgAEZW22oPJDS1HAuMJQNDuDQy3PjFLXSKsqdZbLtp78b5YXrk5BB8Z2",
  "key9": "5iqZLjsoYxnRZ5v5zyav8GkrPYUScKA6JcWgrs5Xxe9qERV2p6w1dBTdAVyxPAgS3gVdG4HiNrWt7NcQHMv1zpy2",
  "key10": "5JuS3UM9JZrQvSESi37pcoKZZeJtTFWi6khVgj4YV8ZMHwhtmR6gDBixy2Y6gPmgSedByjKpkKacq8snoqv2uYso",
  "key11": "3AK3Px4FwsidMMYpTuXNPDbw9h3wC19hjYb1zE6Ez1Xud4LkDpUoRHYVeTRPgUQMUUQaz1xgtBhMANhMxtQ58s8M",
  "key12": "4FWh7ynAKyomgkSbyWKEMuGG7WQPUtzNHu2sre4mBqGdgUYQy8Lsy2fTu6RmSNbdZu477rW3tYBJSbdMqkNMgKwx",
  "key13": "2icNWTT6dipWmnbckeGTesBnRKe232FfnUhZRqNLDohvQtqy8K4Vwq241eHEycVFkbQuQNjLUSQuCt44bPpjkZ4x",
  "key14": "54khds5amk5FdgotVobqXVfo7ohewsdMQjopV6r4NtepR2y1sUFNe4kUr3VF7VhhNZMoWUcRMWUqRrpe3k2YTQfG",
  "key15": "4ETBJxc7jHUcyZsEW2s2uw55146VyQjNudUCvaCBVderj6D19pxqUY7eFU4a2EXuLhX33xFoK3YsNcG5QtnV8ofg",
  "key16": "4pJLrJXaMQaTRDpVqcLJP5gnJk8hbnLvYPEWzrSVfVpoX8gxkp5vm6vZgCtAP83wpowqFAbTWpt8tTJ4LyfNGEw8",
  "key17": "EAGn6vdUb9SQTMCTeaZaJJFJv53p1yhfd7eFLMDPvByyX7xNEV1yqRCYjCbQ4xHNLi455KRdZu9jPaRzNDbq5fs",
  "key18": "3gVuk6nMB9M2HPf9yPyWLL6FqKXo62JWwV3Hhrt9FgKkCF6oS81f5V1ggYg7YYY5Ek5vqgZfupCYTFy9MkwaoTwV",
  "key19": "298LGqF5G8GKtmSoLm2Zafw6bFwQ8PziCNKJLAx4xh81f37JfCes8C3npEmfHdwrKcBUrPWD8Kgsbh9vUhG7wZj1",
  "key20": "2xySxFNS2srWszZXHwR31xfj7bvdxSaK45sdBwN1pRHgAgmabbCd8CY4ZKQXPnNHMFZMqr8kDyqXRBDvCyVJSjAy",
  "key21": "AyUvN1gRKzDh1cbmcHbD8st8y35Y5phP7x1Z2i4ekZkXpNg9Un4rMqyNVmCLAh9QTDjcUNAsRZUAqYNdbXY4p1A",
  "key22": "4Uw5arL4mcbNJ1NtsbPWWYe6TemxNxSJbXeSEWfKjhx3dYCmPbw9N7Hm653SZrfZQTCNPLrC6Bk8XQcfdTosmuQn",
  "key23": "5WygF2wZbtKYorWfVhdG4LmUNV1s2BKBQnKJisg3T9RPcTpNxNor62pryGPnAgMZV89qnBYYasd6h4AsVcCd82Bg",
  "key24": "2camy8BLNYLSXjE1cofexiteswBBG6LZRPYhpwL9sNPrXL3Z2beHG2gXp13WXEXSHSGKD6NDW1YFKhNTHKGSpHDg",
  "key25": "34YSy9H5ynUkmzVQFgSfeekCCx4Pz9y6Fw7b6jjr4e9tqjBHzPuKd9SKVndviGfMMEt7YMHkpKdyS6TGimHmz7u3",
  "key26": "5yAo5vbNhsKLfEjTFCGtkRucHMQtVkDxfFz1RMMxL39s38o9MyrWkuc14orQNWBH6aAu7aBE14mQBpo9mF64n87m",
  "key27": "5ZS3oqtnyaaARBu8KKrHzocNXTBxeopf7gnEKb8Qrcky9q2LciBnBFTZv92ezEu8toc3q7zYA5YRUdVD1D7nEUNy",
  "key28": "E9Lh3QXvoPsygyZNEfTx9XNx3DJfNLFypJknZpSTkd5M6bUQNus1WnzYbRKmukiqS2YBRY4LbnDjHq7hdEC3aA9",
  "key29": "4HvXkExzXKXQtx67JUYEPo5B2pfPsbTBPbHsMYqFJZfmBpTLfYzpWGbUX5mPW1Qxi2MzMWXaUFgM8kQx8amxZTyv",
  "key30": "s47YhEzDYqTiywfV8Jb3Ds6LqvkZ1iwPCuLpY7W1npAe4GegN5qteFP1cGVSHTYVvX2fdC3nLr2tV8Cu1FJS4WF",
  "key31": "2V5rSxktj8Qr6AqaHjVkczAgi3o8Kw8g57RaN2qJnMJpoWX2dWG49AFFtggyFKc4A69FKASngdHE4bwVEqzkwRoz",
  "key32": "3ZwaN6ooDH9JaRyG7WSztx69uRCGqex7K7Pce6Vn8DxujGDT5sBnaapVQJhPpRAahTvFmaLLPATxJvr6txPFoxuW",
  "key33": "2dANt7VkXjX9kJKiV8PWo85Vh95rwCWbUjugkQepvmYeUFtnp9NvytR71CuGbRkbw1JHemwC658QhcgvpgtkYuG8",
  "key34": "2yKQKWeUarcoFkgfgZDM385yVD1uAA84UJAPrz9w1QfckqPXk9QuftKeMvMfXctAoeMcnvJEiTQUeMy7HCLemoUt",
  "key35": "24ohGNK9u7BmfB9obQuXZK33k2AuUavEwdwQEu8Gz4cydPfCfhLKMZfWYKrFfcQx4vRawXCNvmM8C9csC5g54z3i",
  "key36": "5HSM81xx1bzSyRKJYSoRFgoKZbWvTSjF36RvquZafgb9qcBfktXGyLNTvVyFvpkvDRHF5FBfNVvJ9uEkTTa6RvMq"
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
