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
    "4iCmDrfvGXXauEkUyJhqQKt9dwXph4BRhc8Ya65UVCxbNnTXajfDxLKFmPPN2ARBuR8G7YjQ3FT4y6Hff17Z8Pda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ns6XHUSATxfY3oK5ti9BR5zJEfdHzE5NSC4g5EJRE1AcCZGBGWqyzEGHaEdnZtuhzi1bdAKgawWGELmNLs6wgS",
  "key1": "5SN8StCJ6a1SbwyBQkMr4TTADz5zgMLhZXcpwgtvUNiybWrb7PYfgbZbrquEcQg5EBRbXJyPsyQxSM45JDvFReat",
  "key2": "3zPi5yzEMbpLDpox4rBsSXZ5dVLtSHQ9g1K4gwdphqy5DoZ7HQAgiWhVYko7hKCqfsNUmcLJKGS9Ri8KVNkrNn4Y",
  "key3": "3bxH35rQBrDGmbU54PhwL4FQ1VvXNuNCQ9Bn5hQqRX88zTEXfc7FZbWZsDKQ7Hh9P4Guh6hQk6UzMFxuNiSS7G2m",
  "key4": "5rhmSXHLZhCecQt3shV1QSPoZA5wJX4xtXPVNWeAjk2RpiwQP7WhBDEbHy5ZbAHZLFhcWGuhxUb62iTZKP5ErDoj",
  "key5": "rS8qdHVdXqYPZf1giRX8EScsyXCEuwghVWT8tUQq4asJ13mFYcQkUvd8dct7jJamsrNmVzbcUi2y7vnKwEeLhrp",
  "key6": "5PCxVZbAutVbQ2rWtKc6GfhySbWR7sG67BxE5n7Eop4b4DHZfaLeG7n5BtA4XzmeA5AzWdVF1m7LWedtZek4EAWf",
  "key7": "3cy9Fh7GZ5XKD3RE2Bkv3jZVzdYNyxSLS5z3yE8vatBDPVxtTM1W9M8EFb8jcdN8JogiLU8L36k88aNq2cWReVjf",
  "key8": "LkeFLww8ktia81yvBVYb8PErUtNup8YuvFFrycE1vrmE4RHbwoV52daz34EVoxrC3mAYUtPd5KF6HPMb8Zd97Q2",
  "key9": "26q3Nu42CmQ4Tznc8WbcfEowQdndSc32uwuKHJA3nJ1K6MDgpECaf1SpMQ5QfG9bSaTgVcFPLFHHJnbwneVKUgri",
  "key10": "5h2WsXBtDmpMpDTQCwnLEydfhTofUiHmmMJZUNTDUkY6wxkwJg8y4p2YhY8iDmuHmwnsnYdEhsfELG87CHUnwpqq",
  "key11": "53EBv4aQHbhkMjkMfbNt363QvgJcQa1b28EfNWejxB37FvmWSKT1bc6iXiChnKm5uiMoXbYLPDWM7YerrcH3oSse",
  "key12": "35ZokbrKjboNsetJnoF32ppZ3esAdpMGEokdmhsdmgtUxQfCLsVZFwDW4PVwpc5yQxyEuoAeD3wmHZeAV3Bj8XmF",
  "key13": "5P1femvgnC1hudBJuKa15bAD2Vj5qVdLas7NuXjs113s743etdKX94QbwYQgi3ekhZK9G1eX2cma8beMsudQo5vQ",
  "key14": "hMjUHc8oFv2HPUCZdPECVbtNXF5MJHbF71BRJqXPidSzmh2usnG6j9osqqWU7Zprs64grbiD8zhjrAf7FcNgmtR",
  "key15": "5DkGqiomen5MrmAjmQrS3RvHNLWBqXZQHcfhWgQcyN5q4waZhJGUTYxJSnkNoyXDUoJJoHyoJEh1BtGAJie6ycxA",
  "key16": "2ruBswpAg5v4fSdi1oeMajRZXXASksy6DARkcxg6efTK2WjJEsDEgHcAWUemzMEaP8khpy4rN9wkAUoK8xRNBq7x",
  "key17": "2xW89ozdneHTEb7b8mkEtMNpJh9nwvQD2mKX4yEXUxgD1NZVSHpiGZN8ZFLqXpaq8VwgQgbTfzHD9ntQv4LKoSTD",
  "key18": "8Huz4fJAtc7yHjNihEeytRZ3MafereUtCPW7XLvCZuqUhEF9s6jTEcxBDgUSvoiR75WczoMvCjak2wR1Vracp4F",
  "key19": "3MmAtXsVfDRiiUSBXahbgpyjcywWJBTZHeHBCJBRg84T85yegPcRcmHzPQTA5uSvAz8CivAd1QVDqgy7jN13iXs4",
  "key20": "5tRXtReZ87FkbjBXDtS3oPBw9LWUvGYSKfpsEMKuGJXDPS4vPP8pHLDjo74CL455BsmdCLT9zXbeuQWxanYcuetk",
  "key21": "5zPSUiyR83Ph3xmYNSLdiJgsNfAPQEw3zAoTG9Ao9wbo2P4RbJN9cZvohN7RWQqooGb3K67wFxzNuvV72zpfR1Em",
  "key22": "5LWQCM4swLJ8q15xzxnDv49W2Qfuwmjz1veqGr8v64AX84v1kAUrgVjpSdJTYpoYgJ3nU6R7H7Dxm7nQSWar46Qx",
  "key23": "42CRek2CRSxPZiSGCPsJsXTKKmdiH4fQMtXc9th2Cv4fG3gc49xap6z5a4RPrhTHuZjy5hnmxAr2eaDTBT15nt4G",
  "key24": "4eSc8qVd4XHojh8ywtPjqYnVxgwAsjMuPT2UQy2Pm88g9AoMyKa372d4dd4Ux1h4NaSE8h2mGaFB8peQU8PmJF2c",
  "key25": "44yfg6DeEu3F69VFNnDfncSrhYQ4x7SvXuCAbeuN2VytRECqMLkHoUbjqiiYFtrRboP65WucDbw4Qif7L4Di48g5",
  "key26": "3F9JSLgL2EzYo2DpmgFnbhB48XM17HrHKZPDJfVrwVWyLB382rhQYLnNKFHT3WGmdHF9XELwcgHYCE5SNodRiQZg",
  "key27": "THULq6hdtAgsgXqF6DcyqV1WzWqGv6tFG6UtWfBmBYoUhxkqDoo7dBXWQ5p8nu4i7ViWUayb2HdNmroPfkQqU81",
  "key28": "2Ld7DcwdapwoP6r6nW4metTdVtoaoE8ZNNV2qTzc737DZyRDvESG1Jv5qtX17dDPmTdGZUvowKq219KkkeBJfZB",
  "key29": "4KJ18fuZ3dBnuRFWFapzZihrp1AYGxWFBKDtc1eiKL4AXCZeEYeaTWwSJYELS2d54mAurBMrticdrz72Z5TaSrF9",
  "key30": "5AqgYWiYAqXiBzCPg2QeMAYgbU4pWZWZuU1mBkt9kEWrs32wWrbSSv5tB6CFANDfZNajpRLo9BuXReM5wAv2NNAu",
  "key31": "4HwoGEzZ7T6MqAYitumqqhAHQgA6SuBNXe6KhcDEHnqcqdbEDp5Vo6cH7HB8EbzbJ1BFR3tpGNRwBC3DmRMZx7To",
  "key32": "5c5hdrq9T4VRW3RRqWBWowMjypxpk42LDeuTbAhGMWDmbwcW3bpGQXFD2KVAwjGVdK6q82JBmGZ29Eyp1vBxMnhD",
  "key33": "2eDxuyk7rQ6kTkoYzuHiU8ENBrQNdnBSGnjsQvPrPKypTKD8bvyj33VycKz2kcHw9ESou3ktwuwUKkKSpDY2aKcj",
  "key34": "4HjRq9gRdS4uLtqnMNEgRcH9PXps33vuD3ts3gsaE5jExZYWVWdW5Kaph9WBG76JBCx1Dcvx7LxPTLvgQt3tPLyb",
  "key35": "4a4AfkZjkVuExXMKYNLepVk2kDdqj4Fh3eYqdjfXuBMPi6rRPkhEeugrML6wUe818do2ZtMtqK7jjcGFkpp6gsYD",
  "key36": "4BfxEMoUcQnMtMzDsNTob99ZhTiFCNiLhHAiMm7Bq8vtJa2zA6iLFpPRKZ3SKkSCPcVEsAphbG8JT1iKHoP56tVV",
  "key37": "54kU4yFyR34XKw41roUBnUBiCwxJpY1GbnS5vUxFVYPJa214Nq98WWegp8iUuvyY5owZHy5njiY7sYzzXapjj2ud",
  "key38": "259bHJ7Uszt8PVzAW1sVYqkr9AytSkanXU7B2Y5jexxNjJjRPaB2gpMvEDQfYiVJbhdKXCfV5sh3DrW5fxGX859D"
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
