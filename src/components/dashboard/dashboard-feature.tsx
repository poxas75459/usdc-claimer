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
    "5FUooYKWGEFTD59J6BsMd8VGJ4XwgvcLxZTjzwTNZaDZASedbiSGC2Ch4sJkCqxkXYgNjALqmEuHb8qPRgYAQgvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YpX2HqxrvAahnkkyVy4NscvWEJkLw5pxd14GboCwaBPWBKxAN3yu9Zmjg3VsArddMLMXSfCBncez9E3tjHzQfas",
  "key1": "3fHEzTV6T9bEgeHfhMraWpQ3Ffr31TkckVdGQV3gdtu1kZdWq9C3bTKoZakSPjdMKZv9qQE6s5qBAcdRR4YSmoa4",
  "key2": "Tzk1GZLDZebeqyAToLCGJMySV5wv3qwB9FAwwqd7ocB4SfsoojZupLdNgPvjEyqvPdYnPnDvnj3BuhQk5RtvEPB",
  "key3": "AZE4TJDEyGXYDZf3oLdB2tizoij1W2zmmaPbN8ck8MQkFy4gcURWbhoAo9Uh9mpsiK2KMcrwiMuRYtKFRsmMJPt",
  "key4": "4hms15gqUqDGs5hyDpKh842FFAX82dgmNPc9AgqeRkGxPWhiFov6zJTY7a1AgrfRJh2SV3mjq7ycvsbAafh6UjoA",
  "key5": "3iDfjc6Yo2SdcM1RMx3DNX1PX6Dfy8MDichgaz3F3ciaL8nSa8Z7Q1Xw742vtKTpmk5dkhDTbSVvUqDqA4N8R6Lt",
  "key6": "4HeKryEtExETyQPfyvBsHdWhyYQNxgyUu8f668kRB5q14424tT8wM7AjAmCHqqC2NJspzYsdK16EoxEwoEEVjauK",
  "key7": "4LFuZyBCDxczWM6L9r34V7sQbQbxDt3UNCvUBhv6WYEmdwpwpbB6wJAgHZWKjXDVSRKNt7oHoQNUipeJthUbo23w",
  "key8": "3YCoAkwmHTdJijQs34wUbgVBENYfYXiJb6UX3B3ynxHLkqpcRV2grLK1sSQtWNg2r4cs9XdebFeY42yqYBuokqfc",
  "key9": "yy19KcKMzBnG18FHPDuZ7oY9M1w2aBfvYzK5WfHMwxThB4ie6r6bnkyxPuerwvd8qz4pKPMnGgcwg5EeJ7ACo31",
  "key10": "DPrNKUbfiT4Fp9uEBaaVHnvXRHwyabipKcV7ed2t7Dw7NjuKKoUGcrfQwriu4JybxoKucEPvyJePVZWyiAdXmaD",
  "key11": "RMhvBq33Eh62mwziLWfr9ESZJt3bBQ4Lebp2Y6yJa3FbRHZjMiYnrNJcR52HzJLtrj68UStdDsw8QN9bKo8jzLQ",
  "key12": "3DijtSQ5PXoybGu8eqMBWdebhohZEZkqupUBN5aebA3wvPwzGVEx7D2cGi6bWJXuzjwQJcCexeHaCeQMsR7c3v63",
  "key13": "7wc3QapSWXHfBV5QgST8m1HR3tjmrky2XuiuuW7ipMwK9VbR7fR1c3QBKCRj2EKrA5nCZjELYdDkxxXcMhHgsiC",
  "key14": "YY7ajXL7gcYYUe2v37FQnsbwYGxSoRGzyXqqFmRwzisU8YrVPA35TFn5vCwiQHoaHwLGq3R6xyY9zhHeTvQRPiY",
  "key15": "f7SHcCJYPUmLxgWPDJxZASe8xQFaHEJt4YtdDbCJAWjzHFCBkuw3d5265dncjBwpN87MwUgdm5wKmEszmX56ftV",
  "key16": "4mydGivaAyA3RL9HeZrUNqFyBwK7oJ8B5zgxjokuVATDxGhDsu1FDCKvvWsBjArUZRhUodNeMzEdEstSMEgP23L1",
  "key17": "4LSuRtiW7opNNJQvje2eqMmebeAn3Bc2kW9uKxmXMNzuFF78GWq33JoX48i9hig66Me3AcEymV22xxearfCwk33H",
  "key18": "5S9cf33urJ7jkqx5D4ddSvXiTFBssiSPsUxEYUUfMPxoYQZ5JhSfujjdkh2SuTYq85offyrEqYKUW5NWbtug4FEk",
  "key19": "2M4RcBxMfKzF1vx5UcFokE3jrn5yZwtUBC11dQooQ35nMPTajdy51cp8L6yF5Qtzozgo3oQq2rEB3UruAdWbYZw2",
  "key20": "4VqkKoQ85dn8HvUqZYv451xx952szAvHaWUbxPgcukiofAFX5e5if99XLNq2oDn3bpRTMK3ShaRZ2T6WdCbFuBg",
  "key21": "5jU1BR5LNbezbxdXgsQUP6voNsKk2h1u5iq5TYN8giCwyWB3w1PEi4Q1NLteQTeycoj2gERJHvVpiiDV3VHNjmWB",
  "key22": "2Th4KEme9gQD4xVRDwTuuwuof3ggEY3v88czmMk4gtMdoD2SC6JseMsynkghn3WbGPkVLkDXCZiXPkwwu3KsQa12",
  "key23": "2KWiw8G1fUwkPqvcTjAK2Ym24jTfnx2uszYEXRHpkTcgDpdfdepfLD77kaKm3numosyJpqa7d7sLoArV4aXNuZBF",
  "key24": "4YLpNaaAu5hqWf9CAeWcVMWEd6vP7pKm2mqmZRKphCvg1DTxxQY6J1HRSFTTw1pCMHuxtmc4uPcxdSJf7C4nXMzj",
  "key25": "56oRecyA3qJccke4VaYuwGnMgrXmKrMRbuWsDciPdQm7tgUxBbMB7jHCKX5yMzgPc9ZwTxzsvLpNMiTsNmgJnEjh",
  "key26": "5nQBVfQCaQZzxxzV8zouaXdvwM1SR75wEEH8FKSUJSfBcPbzGXvH8x8DuKzGAtYsL42uKV2t5D9PCXPAYxY73MsN",
  "key27": "58YAa9tZ9nhLpgopSs6uGUuWbRTZYHsEYiDfGtvvh1LhmS8MAbGiYjjipTEra9qbhdt26DYwYXaM4gDvQWRLnbTw",
  "key28": "58bVE5HdyEQinauBDk31qJB75HNu1H5DV8DBwTiLtE7rMqcJ1zekvJGsfbgKZZtBbEviFTgWqRRHdtpxLhofUcVs",
  "key29": "5T3rqQRMQpcR359cbNdB9s4zvQUJVwJ8yvAuufBYJGyr4vbKNsdpcxo4qzzvhcNTWQ4etBgE7R1EmsTisFQzqyCJ"
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
