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
    "5dwGNa2pu1K5sjW66xbXX96BRwWUHAeG22YRTmi6ZbdU8uxdLGHN7XypHxhMNgcNoYw3954DEzE4UfJfCgA5kugn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zFs23dkXdzHk3X3DLzVe8SzsVMJE9kvKSgUr77qfDmDFfYmV2NFdbZPawWSDymTgqh19kK1YMvZkieRYcQTUbcg",
  "key1": "tqgMsc8QbU9a5LcMJ7EE9nHddYoyp3zMH8PNiDxrbd7epf4ozKvDPeh5faiLUT29aKVBtgSCbS48XW3Qwv39BWb",
  "key2": "4N1hFZLkSmQ6CgnXsLhxaPoncFUXiWToJmzc5iSBhmw3V4qk2SJ5Z8Q7qaFZHue5uFmuSRqVpFdLDvWLakaqvm4r",
  "key3": "5KemvchUMLMyDzuPcgHxPfedkGWWyoYsbJZ7CDfFqTQwRp9v56Bvu5k7gAoVETUR9yaak1kFEGfFpmPEXKqhgNV5",
  "key4": "3BoeAY7iZVStTGCGnZUYPxs3iHYZYuiPhBurNTGtAmL3Let6b7dDo7TLXMwHdkrVwr4PjvWpCWbahXTzddJZA63w",
  "key5": "2R1sqCKMP9crkWmFA3y4KC3Gvheys7gueouTmuipTMYU5ZKaoQbYN6fa7yZrRY3AUE6dBBStHg5hAFCSJSHYSJqo",
  "key6": "41doLB9TuxEZJwWQHsKtoXUxQragBybLs6Ge2tut9aUg1heYxCn3MsKSCFWLf5yVLGJyZojk44P7h8tbyo8ELuNq",
  "key7": "25GUDfvNoKYsvXBGPSFxMYUmNF1whGhphJiaJ2yxc7RCovmWDTEhcCruc3iaNPv3aeWWXKXXJjFpsFRqpZaVGCcW",
  "key8": "4N48NP1jXUDoCECcsHsDyrLwFi9PLtmsc2gXJ8A6EJrwAvHGrdKT5FqbBr8jJzaVi2rtwmUUc38Qh3VbkeRDrifJ",
  "key9": "4eDXNpX3gRQkFHS9YeaGC1XWb2BakaeyYbGedYBoB5QNYobUvFpJmHw4r6QHuCTBbzzPEBpymzcNdURyhiSEAVCS",
  "key10": "b3XLjWCrafdVu9NyYSWpHdtJE5Z56N3LKdCd98c3FYLkBRya447FuzFfTxEVfono61NRx9xqjZwc9AtVhxzXKAu",
  "key11": "3Bjosj2BG2AX3pa5dW58JZoTjC8odKw7KR1Fmyfz4NWKGQF9UABZPdnKo6DbYvcJF3RNxPntZEuNs1aLhYRQPmST",
  "key12": "3XaAMDKXRJ9jkR59rB4w6qTzda2HdeFUcrXoKytMAzZTBceiqToQxGNgqmyvnh1RuXnSdeddoxsNaTKx3TgsPdAx",
  "key13": "2uhFmrE8i4SC9R9EfBKF7okdRQ2Lhq4xNgUzpNDMH5ojWGhtmvHR8rubikz7U4CAqrSccaMJoSCscg6fuNF41Rm7",
  "key14": "2ZaG4BVtEgaMBGBTyY9r5B3BWLLskwtdF5q5fQjCbmk9pevhXwY5vCUSyqUog1nCueLXqerzw5qNAsfcAhuxbfeE",
  "key15": "3FLZ5JY63k6aWQyMbt9iNduUWTCY91McbqMx3YPLW9DWqLzzKaRuimv5u8pvXvjjGj5aq8BqsGawabnAG8acP9LH",
  "key16": "31cfGFfT5vQmtv8drH9YuhmnTESfCP6Mz7mXiJ6aWegdYZig3KfhhHbQKB7TCEVm2NKK8CTaNtc5SQvv6KzY3yvV",
  "key17": "3TaPdYVpkJRU1Z86pUnSQkb8dV2bPxYxq34bY6UQjGdgkX19jygixL7oWCd4WRHxpog2SQfNthHLwxaZpVwEMhi6",
  "key18": "4hjXmTboqwKfVAJhXHyUbigGE5ThhZ4fQoknfkxEtKzFYQi5PKnkQVt5a3TFhfuUp1pnFP16kFPG9awN98LECpzv",
  "key19": "3ouMHE3ruNf35yDj78nxR9dLs6nRkqHhpMVH1FT617nh1SzHHxnVHjzd39V2XKhV59E1B9uRKxhCBF4ptDWjAGtK",
  "key20": "5MtNoDyPYeatP2LLfoXdQPiwoGVVQo2jg79VXF8gKiLSYk9qLbffoH8udhp7Xo45Z3GFqbCtc4x7ywdWJKcDJtTy",
  "key21": "23CidL3kbgJfk8BCTdF27VnVtjfE8W5mU5yNSpMJNxaaS19grqWgG2wogcNMGyzAVdUXz9YNiC3nmXmPPFdxGZQW",
  "key22": "3pRrEN55hsEYeDcZ3qpaLCZNuY3frpF4JYjeQTrFFN5kD7YeSA59BKBc7nRpzbLpmV16Rab2D9z2cMfZDe6ZasQH",
  "key23": "ouCarDnnRPLpJGFsyPcqeEvKq5nwpbMfJvBBaKnCQjE3NrBSZ3F54EDbHQE7L7avBi5hdyCgsmR9W4qmzmTS6KM",
  "key24": "38V6Be7xR79VXcYAT1ogSNCnbGVrJQCf6LReBeevj95V2jdzR5mjDAucjHoAtLNSpPDwsbRF5zwVrdPbkJsrgB6G",
  "key25": "n2aeatryf1aJ1tSTe2q8QhWL7kGntzwzFpF4WEzfdWYn7B2ubc1DdFCeLTY9w2wqrwUdBHhjP1VJi9yJ96jzBAN",
  "key26": "2nsucXUZHf1WVWz9wTFHVTAmGiPtW98KX4anDtekPNRfcUFZTbuuoxkjdhGaSAcet6qoJcLkLM5pBqEdoN8FQrjZ",
  "key27": "48KWX4V1TRiYT4c5Wfhsr8YojEeBvr1SshgbNRKX8Ys1jvzApqzMQESSDibYYR7eVEPG89RmzA4sumKiv9Wxzuwu",
  "key28": "2LqZvSZYP8xLo2LoFvqju1E2ZXjq7dKjm65qZKT6nRVhLYWdCqAqD6UCvhzmdTVwLVGXCAdqkuNJK7tGLHxQHACB",
  "key29": "B9SfXAsn2oQfNRCHJTgnyDsM44N6q6qGK4uYDaThaoDL3VTSDyGXKUdQQxt3qGiXH6EBfcV31M3mGaFD1zgQJWm",
  "key30": "2euuZLpnS8by84ug4fhrEF8kv7GMwyAauzGxeMbQjFZrxDMssbWGzVS6jJgcvBL53rbqcK8b7e8fh5rNesHjcvLa",
  "key31": "2ahLYfTRyM2zgwk3yYu8bxvCMVXgoHFuWu1kb6ry6szPSxcZx3uzfGappo46aSME3jTKgm21hjaFkN93XDRP47PY",
  "key32": "2HwsAkZCjKAXm8DEutJSjFNPh1g5S1hBLcMgA2beMkN2o6C7NJNAXDvZwrKouauQUsSvoYsqNK9kycmFMRKVKctM",
  "key33": "561JM78a1MLdEaDevkAw4PLkKFrUJw8vyrkhPviPY5hGEVaQw9Tqsnpbg2xHrpjxQ8CVhuHQzyZKpysbugShVmur",
  "key34": "2NXcEyJjenzMAm4Y5PXfQm5q6SPdGXbopNK1E4qsFGna9hmFboKdQgscx5RSud9QNi8etp2fTkvSWyqoAyAKwKeX",
  "key35": "28rGEiyF4kbKaTWKohzkvr4fW6jT2zYgxrZbQWvacs7my4M7NKVQPEXzRxaywbbRt4uKw4jU9HX75iPH9v8fEobx"
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
