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
    "5pafPmhjaCrn1pB9XfwQELDHsS6Mb64RHBayeDegj2uQ6DvKBhxUiQYJMVEmQTUYBncYeN37x8YcjXNmge95gkrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tTN3YcBPMCP76zGUMf9aaM6jCjRvuswLaG4zwC8whkUXAas2BDVq77vEHVK1ymVqth4ttBApbfAbCT1TQPGM82Z",
  "key1": "Sqxx2o5wJvSo8yF4ZXYfVnPZnGwzJZ3hzbTzThDC7m4JaokMxo8ddgTA1A9waAqi1MrkBzc1x6tFJwKejiLxfCx",
  "key2": "5gkSHXVSQEGa8cHUGP1eaPpDfenjuxUFBTNxk9KfyvtebCu2k9bgPeoNcmU1RvSMLEAmGCEkHbTzm5Hf624wM6af",
  "key3": "63ZtDDpGGmAzJGg2xsGnZkJ1h9LcMsvsdWjRE2uHPdF2Jw5kSCPmEHThs1BPZsWzK27iQe86EmTjAKQJHoy2JXQw",
  "key4": "5zaJ3yP5KQqB7avyPDx51VKRsM9ez8TfUHtsRn9qXfLhVUA1AAfxY3tiwmYkJgHyYg1M5dsXEtc6ZH4HuDsKJjDM",
  "key5": "4fRRzVGvpSKhGKhx15yPwoZueaBu5NbB7u22yPvnwy4FcnXCCRyg5viEQ1ZCJdzaFJtwE8vR3zmuRArGy6pZ1PXR",
  "key6": "2rWnPqPwfxWTLWbcSk8yDvcbeUJLDeAuGH4gGquz9LUwuYdPQDoBrRYS7VMkR9Q86uZAQYNxebawJ8EX19tUVdvg",
  "key7": "5fsHmSxHuAD4ewwBz9wkWcFH7bZK9tagwDD4EmPUTnvpXi1Q8AS6E7QtkfvkvUfNSUdGrnENGbYjsmETwidBShDd",
  "key8": "5xdf9nGUDwHUCKspS2ExLrgQLLAaLvvD3qnGGqwGavs2cpzAmh7e55KA6aVGdks68NV6K3rfj4fspJeMyVFmstPV",
  "key9": "5RbGQKtGDmfuXLgfGdV9MhFg52PDNLJEhFwqF7FZhkjbV1EaQ1kSXhu1ZRpHsV8MLy3Kht72pV4jM1hHrYboB2oD",
  "key10": "2i8YXJg4FynjhUxZdztcwsRQroRk8ZZMjYSRmCWf8zqEkCNgr1ZmufTjjTLWoLUQHUMWdKqtay7iJ84NJw6H7s83",
  "key11": "EjsT1eZR8NCxEEmGg4ZBUBk4uG35ZuaXhN9FF8QRMswsE42RqRvHSmdBzHkVaLvAhia7zpX1CaB1t17xmMsXKM5",
  "key12": "wojrwPkDAemgmBTfbYcy8Mnz7TRWT8Jt7jmLFDWvXJkXn8yveMVTSJ9EZZcwA9SNSNHrUkjnpthaDpZZLB52CsG",
  "key13": "2PnwGDmrQm9SzrzmzvPjLWYUXGQ94TRTbBwnAL6NyfYPn24DxMMX2Zr6XXbP6fguicS3shauZXkZAq29hxEnwitC",
  "key14": "3eAHnLZ1ZmN1kAbtZY6uAGn5aXWR2K4kpqJkc8JAQbDPL7a179oZHCpC7vZXQrGrevc8BhxwGetnq8Q2RE1182kW",
  "key15": "Mc9nF3mzFDEnrK8Q9ZZaR89y8HUUfaxrxBZzy4V65UADuEy6XQfE4ixqkoXLT2xfzaYwur6jFoGSh9jgpUn3rN7",
  "key16": "42nSj98ueKBF5B3MNv3Kebqxa5T9kNfWpTUyVmCbk6ukHZy7zvH9AoAc8NJCveeGBCNA4FT1jGjPitUx4P3zckW5",
  "key17": "64PB6KhQ4ttpefitEfqRjNv2FitMkPzqPr6tu6QhYrVjX28b4jXVkBFUAnjWuSAMwdYDbMWyd9XB14zi9iAwzMWe",
  "key18": "zkxF6ZEgm2UdJFy5kGyTKMdjZwEAVQHeALQULMRPYqLpXEbcVhZn4BEA2z3YuM5C9svyWt1ddqN6fPfxnE9jaCE",
  "key19": "33qm6qKnCWmqzemQYSdTNL2V5za5kjGuMsdMgwcJFVjzvi1anYQa5AWRTBTE6ed2rjvjXvhb4d6eLCBrnW2JrVxS",
  "key20": "4McZH6f9XUXpkMf7rda3Sxh9PR6NpCAuosHKsZbvHwcQY59odb8bgg9JvgahZacwY4mkAgXytHL64Go8PLXtpqdv",
  "key21": "4fiUinQ5AWcMcnWZQtBTbtUAEMcqZxHuR4bPg6VhaUzrBPYK5Ry3PvPnYhjqGMTUDw1tP2HPBgSpi19G19HszNv",
  "key22": "5947KTBV6xyRcpy47S9Fjit6r9BJ5LvZjuZvDnTyc7jg9atzarQa1m3GYNq4WyAy2fkjtcUNVywqAkQTfLSYrtEd",
  "key23": "5nPukdww1nLx7SE4paM9X2dvaW4QATYuYgpLDurFjYcYn5iQawaRi8t1qnFrxCWsw2Xu6vaRPeYRq83EixNLDcax",
  "key24": "56QuDNqmMi5VYuf8w3wWSUGFSz4RWWrSMWKzChwnsj2vayAKvAJiaVU9uop3UKeK2YwXJRsAek9DuAmq3auRfdHg",
  "key25": "4itsQVgQhmYNp9u4dDSvMGt5rLgnxhWC27rFTpMpmQ3gzvkr3TpywfYD2tLkXrWMYM2BBe7wCxXR4TGaVw9eowqg",
  "key26": "4mRXAJHmRAnW6i5RzWfLrF4sPH3SdtTUEpCFK9iERHYBshkWiDpPNLsB9sCydJ7Kn3P4EfFZ1WvVhHzioQskJibU",
  "key27": "2mknEzcMfwigbM5XdbZqrJVW2rA4RkW4JCnxQh4UAvxrk3cvSY25vApYT6KYtJeARWqF6FiBQz2wsXPKHdeUa2yC",
  "key28": "2mKx3ezWPPPakrkkkCXV2TsbYvjPeEo7TvyUr9Bn6kGBFPPk3yLss5YxMxrxCkv41srSgacEtwTVppoRM4dJqsLA",
  "key29": "2zMXVxeRjjXKnBZbcGneTavpThYB7sUU2iApBTuN8XwAJN92w9ByHa3PmTq6njuRoCf8s5SwNxFYak9jAzddkfyL",
  "key30": "22NDnvRRTqhyUeuTJWQys96EeqzooFfK1q3h3yE3WP4EPYGYhwnaGbfQgt4aHhdFrTJ78n3pfpBbjVMY4uLbyFEq",
  "key31": "4ztMfiZ8Hb6qhuxcwMDWHBeULBiqSFNURN6y4mcgo5vQ7q8YenMQTFHxugXK1u12oW8NALwHH9KZCnkPbaysNTuZ",
  "key32": "4jVKncKWg4RCz4NgzygCNQkUNGUHMfY4bMdtvM41iAQQ1TQRDsnydb8L1KQywzJ2QsuZCpLLbLtTc9DwGkeXLWEQ",
  "key33": "UiTMpkRrfQjbKnoVeo5RwUquHyGSKRbtgkHDTBZckWob53uSMG9qamcGdHZKdqoPDM39beY6fEPwMC11ZnCs3bj",
  "key34": "4NaBBA2ksYFr3jkZf497z13FFWgKTWRTfajNn4Jm5idDEYqof2AbkQBgE3ge7Qm9g8QHpL76CkUNLPRApnC53HU1",
  "key35": "45vEnYLrVXQjL84iDmqrV1MrVE7GrkMjXX8gvhJHPx7cwGaaj8T5HDUcSqNcUViMbcFqc8oYcFdgjNP926cuiYKm",
  "key36": "5PaysQSNbpfH77TxfLF4bv3Jx9W6wYFHPSLJMDsZaHPtMEhkbXFJcawWcyEYmeLH5bcsWFgb5tcKJoFN9NeL1sjZ",
  "key37": "Wz2vbYukQf6W7jL3XcBqtaAFfiwMjUjrrGzqVxm9SuRmaLJdAR4Kj3MnkyVoJoMthy5MyexPptv836buE58GxEm"
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
