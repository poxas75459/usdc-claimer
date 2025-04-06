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
    "2NY2XEBeT9meoU4mqJXcQjAs4SQfAKkfbUCiPzzAo1s2UzEP2EsW3B36YJon7MawMHovngeg8UqG2i4Gd6KiznnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wgEVqpAVWcDmDok65YqraM6M74gm14FY5JWg4PxqGEH8LteZ3m3XSWijY9XGGtT9qdcG1WAzQ2KXewD37cC2bbr",
  "key1": "2QoZJhwB9BSU9H7AAZREBPPAPD23qaHexZJSKPJenXQaXRTA6tH1oyaF3SUtNdczfYxWV7RYmB7UD3xjPBaDpLus",
  "key2": "3MSscU63FzpHmHaYohc8JtcrzAHYv2rDBbuFzefwKNj7siJ8cKj8oqXCmVsLVASjwv2t74boHgV6wqQ5S9v1SN8W",
  "key3": "3vncZUg65kYef7y3gqV6NhNVFV1AKafmZcVEEyanqV3o7oqEWSMqGnRyc3T2twcyVvjM4eyYspa5ALrbA73EbwPD",
  "key4": "2zxjdeTRJNfZfcHPRCbv6uYay2u8Cj4T4GcC7MPKQm9qv1keXZrcYM5fvMonsf7AkBfBQoLSkDp4aY277uNScPvL",
  "key5": "2hR8hWxdwo86k9xa3ZoGVUf98QNReZxCM3M9BTweHx5dAeYgMCoo7RRo5Q4Zxv5NKKf9en6NYmZ6RrHR1CNDbYjA",
  "key6": "DWVaCbBikoyKV3xGn6cFtfwwbFJC4CBTNKZGPLMWAuFzkvByPrm5ZJSxVyhGagUMWEa6MRhQnwF3RqX4NgrAm4u",
  "key7": "3LXfn3sWkAixVNgeVocgwcccrUtWrLKu9K3VWtRFJgwMdL8LtYL1UKQkx7DvTFLoYpZDpQppEABTVas3Px2NXSVK",
  "key8": "5krKwv8amzA3pukaBMfgNPwjiUCovqsjNeRhU5QVhNuqzwov8dXhFwBXMo9SM5cQ4TpB5Li2WhXbR7LitrkNuST9",
  "key9": "3Nzm5NJcERf1s6EF3fAgA73pecc14ngmhEs1DxQ65uYEv3PSyd9tSMJFc9S1Em9gfTrYHH41GnsDgbsdJmPUmAhK",
  "key10": "32xDehbN51LCkfXMMarT84AkR1YTgMHrnbfFVaJxF3rFUvTmmUkqBja2cnvxouyBRqdFHmdznnLEm4uUDr53okH9",
  "key11": "2P7hUv8M1iRF3DGAp5fhJmXLZVDUdZQcPpwKPz296QVq4nLCTv3aKk1McsJgmU19adho7nmxmu5KFRJqZ91HA8dv",
  "key12": "2yF2TBYfGSLFcW6FLAhUGvc4y2yW3Xu39UXQkmRBRa8kHhLCbXpnqkkAPEp5rrbXu9AWyho5GKNC78bCFUrZHqBj",
  "key13": "sEfdBiAx6y41mKiGboVgT2RUD2mE1YzrQCvk327BB5Ccs2RKzEdeWRbjpDp2qYe47TMZsYtPnd1xGJtaUma81Vc",
  "key14": "HJvDcZeyyM1pjX8tRPM4pmdQ8kLgpq6uHYVCgKQVT55g6CrrZ7DD8m3NF1Qptp66FAwBSMybEpzSm7sCNGZX2dU",
  "key15": "3hjDsNzG59g4CHHdcuRUidzjeSaL8u9L9KxUJBqrhfht6pXX7ZS69gkXSFrCZFPy38gh6uCGkJrdGDBMfFaeqKGJ",
  "key16": "2MCPhRZ3bi8yvUU5UjJ9khGCqNCpcQ2SAM6f45db6wh6p7UxzFxYz7JH7cFFN8Js6As93vggVR8CsET8ayfK6hLL",
  "key17": "57qEVc6qh9WeiMvNnngKwJeHctFkeyJG2Rp1DRtY5pwznSnNttr6SXjwmd5jGNkY16J8qnU84HPFmoRmRWu8Xh2j",
  "key18": "2d4frZuwUdVpQxrhupXuL9cesjQe5A4DgWQ5i6UQ4SmJhoCuCnwcxJs9tck33FG45e9wpzL534ofb5dgvfhgTHeU",
  "key19": "2XUZGUk6VJsBMjqNLFH7eVg3UQh2apmQTC3VqnJbfmt4QGMYp5kyT5JDPK4x5Ch3k1Dy7WTC2JRxWfPKcviujMsp",
  "key20": "6e2KjG2gSJk4nQuFC9kJkm6U9Ari8fY8pCr6y2tvGhRhBe4N62HtBzdHnH4nk17pRgwgSTuPwCr2qqCZd9dfjXq",
  "key21": "4GfeLTAEhCcirz8nXkj5LHRVjkdteqqp8Qf4bSjGUfXp9HdjwCjexon2P5TNggM8WAwK1nd5Givpf3eoxhhxjGcm",
  "key22": "6oZeJSGjQbYpwQEmVepjryZXaLofLWgoc4azwteJruuWQnXbpkwXKund7JebWuNGx6rsrHfrpQ7ZmL4ZYnAQSKD",
  "key23": "21dsRiJey5g3FEQbn2VsGp67bbcPsSwJfyx1pqib3nhNaeisdzgPvU6tZxR99QyA7AsMFsDVMF8k7oRw7ShnxQbj",
  "key24": "665pJkv9dkhWek7cgG6xuEswduvGHnu7UKb3FqnxE7AJRe41DB6dmNnMbYtV6yHtLLW1LgSvh2iVH7PCgAwW2Pgk",
  "key25": "57SnLC2QTdBajCN6rf6dikcPSkAkf7qpgSABDYRSjMWiq3L8dAU2cs5tsgCXQoW1V5E1RXjCCVZXGKPVBXvGQ6nP",
  "key26": "62Nn8SQs3q8QU7CvnmC1E9fo5hLDBT4a1s9iwKvL5t4b6mt8n5Vwbrmpce1c2jSHGkkabT6rTsyzJ9AyEpRk72Fy",
  "key27": "29tQY6sEX4C5Xk2kegBcrvSMUB3ZwvU9PAEbrnVjNSizvxDQRqRuBiYmuMpg8dRhrpNKdqjYGLMn16vv3vHajgZF",
  "key28": "67KSLTptstQZH3Fu67NNB9Yz3gGpReJbU6QRX9Y3k6TD3RN9MDkVMsQp4ZgCQ8Ezs8UfTp2xNuAJUrJGB9g7N9AS",
  "key29": "49wQLtbaAkoC69s7WmHghUiwMT4rRXsQ5oEur8JjMEHnCJm2kvbbkfhLhgQnjZVzTxtxFqLsFzJxqQziFsTqunCe",
  "key30": "26inMncJhioLgoeRvtEo3Fu4zBMk4HLzS3ZjRUUetd1zjV24nPc4YAx1ewCpHXEG5WjGcDBYYVQzwKAcozyUN1fe",
  "key31": "2UfiKbcjwNYf8iTPEvz3rEeXb9rwcfJ9hGctbhhqu6JdG2hbc6wKaTraKqko3dXuP8FTBgtKYMen1TU199bu41TH",
  "key32": "5nuPf93b2QQsA9DuPMtBev6xt2BDvaMENU4R6KDV7eRjjXsz7yLVMTXHmEA31JqKaQyFgSeHwoThwjiF1AbaGaFX",
  "key33": "5dqYuEvZtQRSrJqXchWSAnpHj9gPLMxDBPDffMbpvcMMrhxUMW42BCoBVp5JQS9BiMr9pPRuhSFkPitmThjNW6gZ",
  "key34": "46rSrTrWBwUrFcdbyU4228Xiy9wBsceVLTjMvgXmmtErSTnvYpK1E9cwvmW7BHFsGRkyWnfejZ5rgiz4UuKg8fMH",
  "key35": "5K4MWyH3SsPfrEEuTzUDVuDo6439DZSfnYjqNRizg6iYFygX4JqBTTkVpF1xXTHxuo1uSA7J4eCF3axwpePGgLND",
  "key36": "4efAUR8ENozLH859r5Dovn9Y1gJcSLdvYbNUerH5Nu9u7Xg4eq3jz3U7TEa94Pski6B7K3B7BBTEcaevfcogLitQ",
  "key37": "5kCP8AdNuqDUeHSScRjjMKV1jm3W6k7BbYQQi9kH2pEUVbCoB8LHSLXahCpCmDC47SrfzqVYn7h8L1nPPv4nBBba",
  "key38": "3CfBr12jpNAGCoVPQZHNKieXbDUpujrmYzkA4kGL1qKyugH5HxfsCrca8gUu5R35Bp1to3JrfG4W112LJHSseHe8",
  "key39": "oGgwsF5p2WcF1emBDTCB9cc7ZoYJbWjsZxkgUcMKVYgTsLzE4ie3qCLujPZBH3LzVjxaWE1fK3QAfmRKvufRJCv",
  "key40": "dwRRWdQQ8mWTd5JUx2mfx6SU9B8XmCYRBMWDqaxLyNSMR5WPKTJH9tWvj4STAvNyZjHpTGrUrJ3wpe7LhsbeBmT",
  "key41": "2KL4mDatDVdQSY9ZgyXCGusFRa3ssacrmM2UcB1BXLeN1H4tRANHxhdgPayDm36F1WcH2btHHRCN8hB6vLCfQA9W",
  "key42": "KQstYLvrLNfe8ccyusuiBZP5L38vBFNsDrCwYJ9CgK1eoB6sdeWFHjk5UiLGEL6jVLuKqqRht8aS3U7ibKnBjqP",
  "key43": "2U7qR6m9NRR5YrWZG4XKFEKfkgLDMn7xP4c6u3j23xsQ4JqFJDrYEX151vkXTYdGH4EdvHtuWDN8HuUdBUMFZbcW",
  "key44": "5cwq4btmDEYgGWdr6EJrhfWCj1eD5C8FmVfgHHeKmxWV9vx6awXyDvrE1fGSj2B5RD8soMFjwADTHVZt9Kd7UMZC"
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
