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
    "3aapC619HALzmk3vy3ZLwVvQm2kd7zE3GsBmRubBHEe7Tb74pufZAYWuL1MRRyYcHPM8Z7mNx9miiEj8cZUZP7Va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vjTt5sPvw6AmbZs5ek9cGRzj2hsfNmeTdkU6bUt6txCpmxWKTMkqQWRU5npPCiPc3y64ELgGrEjPuYLrBkXFAv",
  "key1": "4GZixYTy7KyG25xpgdKWkUwD64yLGV5BSbY28dRFUwgQRj5dbvqnBxZG7rVhsi7ck9ZyvB46mwtfuVmBZfyyXk4C",
  "key2": "5Utw8pRqzQHFQnsq3AE4b8UgqV2MXZYT7dEsLfuV9mjtpz5urQ1Yqq34XTw1LsfYeWyByQaGNVNCBDXVmQzFbwSQ",
  "key3": "3qxz6xj82koJEmXiXLRf19WJXnMthZtmsHTe4xHsVkhjwFMjRbxGaqevx8scQsLKrEVhFyv1tqDg3Ln824QYhsR7",
  "key4": "232JeTkDmc6McCNzg5J74mWwH3DfmtyzewRiHj9ABP3hvr3ymu7qP7KpFdmyu8XuwREtsytBUDrhue3bFbp59PNb",
  "key5": "3im7ehyq3jGrEyAipjYh1wtzMmn9MZHZS3jLZshi6J72uMbaoQGJ3LeaHnw5hTPCj25nRS56xU69yGcFeX9cG42Y",
  "key6": "8Y1HMEgbmXxMHjti9fmxUAmVLPsgpcqEwsF1S3vQAV58o4VUM5jxJD5unMbbxnMEUokgf97nxa4qGx4TYW54WPR",
  "key7": "5MEjUWPFdLw9uYWY3NEu79jr8zvFPFfuqmiqTKyuLyaPk664AqFStYxGZo8MJSkPc8rC3riKv4HG12WfKJxU1g9d",
  "key8": "5by9eFTxdVywUibGqu84QamkCMCUj6BjzesfwgqTbnpL6zqYr9qyx9bNyZiibZTPb43etr69duFzdkH4NG1Bsvrm",
  "key9": "ic4epdUR6352ssxGKjiADHh5si9xkzUywSuXWhxUBQMg9EoU47TwyxxxazxCaEoHrY8B1tg8hk7sh7u7kpqnFjE",
  "key10": "3rEgUs6N2v8YMv1QPgtmfGcqmW4QWCXSvK5yt9hY9AhS2e3JumNWNzeqSJWG1Ycq31aDo8e7RHc57thX7QSfvgUJ",
  "key11": "38xKz6VbrUt5Fv31WHpWnLDqtEbK8rbpjM66o2dVujpQHWqjPYUkGmvo4krutg6QZXVfDuJPEsr1JNe287pQeb7c",
  "key12": "TPoAaHFQEYUBJ5xq4c12i5J3QedwsS4oN8HbJ4V1ibnSKqdB83G7QyHKayGLPGD6RPXxpWWAKGvNLPYqE2FfDoa",
  "key13": "3TP1mSpt1PKWL8Hg4bXakh9hkiNBPhGAybjR94qQ8nRKDvd91kf89F6Db42a6fucXj6fQUmZxD7H1WbniE5ir55P",
  "key14": "125qSCC1PVQqpUnv3FsRE6qg43vSgWqymTRmrJ4FCVkQqdzVSo71psC1aASERqXXaT5mwKBzqdZdQhz7a8akf4ha",
  "key15": "i3agdnp5C79tgJEV6mmaP3qQXB1AkodsmmnU6ateC1Qnf1d8zYHNbHQu99eCUV2Ch9hNyxF5NAPznqsZqdquBua",
  "key16": "2pv4oD3R11cBG4yW8Yu23mGzbRRv2A6ztUAYKjaAhFpfvJFMiJ4RFmNStTnbBBM8yi4q5mm7HCzsFZUi6pJULND1",
  "key17": "5mEgXNbjcumF2m1Eio4ooM9MNHJZkCZ2wGXDhoikrHBwAet1p7iGgey4Dwu2x6yPzUyESxs5kojLgBWQxmDn4dY1",
  "key18": "5wRgRWTQ3hSvLj2EnaDwdtMfPRLyoYYwc7E6TWURj5KDH1sBCQyPkHw8AfFr3fYJuLAwjHhW7SgGedPbni6VeYV5",
  "key19": "4xwCdkramscXwMdf8uRriafdhVUhGWabY2GnNgh6PCPNHtoPBwMhqvznejVT64X3ftFZyMb32coQQKoVdB2DT3sw",
  "key20": "61m8PoM6LiFAbZBrg9aNwN41wRL9jXUzYueAzqPZuERvibN4zvhkFWb4hkLL13gdXX3p5x2YQyZzHb1KQg1iH7AV",
  "key21": "2BEQX19ofkTzsXoibnLrUQ1AN7p3T9Bhvtt6XZhQ4XcTtGE2Zxtpdb7a96xLuNc2tD7vUKtA5NpUdcxrcCUeLdsm",
  "key22": "5oiLEev8ZghL6gYRFYwYfJmBcXmoBgfgWEs7Pd4h2mPzwvE9w8VyeoH2q3m6jBxhqcQPdzaLuRUhi8Urvwswq2Fr",
  "key23": "4PBAMAweBNG1GhxH8bQ7pCx4vJicydoaxHvNxRjGfaPT5yFyZQFSsyMyRD5gTak5MUxBe4arNfhD4sdptDbxpkps",
  "key24": "7z1CkXSsid3aRYNqehX4aG5fyWseTrB9zfWC5jLe18Wm1qcYnsi19HGEw39WmfBV6FYfmvNSzt4P2ePgJhRG88J",
  "key25": "ZPzmtpEMySeQDSvgSgzUZv5NnDGUmQk5P2nbqJHTTwgrxsq4CMEAMZ5JVK9heRJ6cHwWtywB2Aa1s6KPokWPJsw",
  "key26": "3WpjrG8NNxdAh3GfqFQW1To7jn9Z9mRCRHRDUkm7M2sv4KbQTapCy4ZYZMmk1vv2E7mwyR1Kp5Q6NrsmdZuV7N1T",
  "key27": "2ky6Bq5Z83YHbXLKoZBQ8dmE5wYRmcbyEMv3WT9TvK2AjGP1yJSUkywDVsdjfavfcgmyCDVffUJDPZUJTCTkuMD3",
  "key28": "3v4Sjp587RSJtAAi4vnSseXvh7LkYwTb6XjSzmnjxpuBiqCNtDE1vKtWKrNj9HCrTsQAg9BUxWBAa7u8uccYrTsx",
  "key29": "4YuPuwNg5VKn9HBGv2BmAsR985bpSn5Ttme1iuAixJ8TQJZz22qg4YFTNMT2W7HrfDNGu79rGhXYNJVYmLEFcAEG",
  "key30": "2RFuZMGJsivmCDAzWp4EChGw57NGt4k1dx9JY5YCdzX85pHFvbAjdZMcYWCD1RGzckZwppb4NWDaNVMCeHtbNeMU"
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
