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
    "5jT16LEUHRv1t1oRmSRsXonBAE3vEWEMxfiucHoueQAYF9tUTuY4y1B2kceG15kkbcbL5kF8vZkpcGASGwfN9byc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yyv3UsyyS2WsSpAY8S2fsxryuCxWHLEYS1LTFq3wMYAYALXU58cqBbupDdoueDeLckzZHR4iyxXcEQ4K2vY7UZm",
  "key1": "4xwsQWVzEBQhatqcMgz4S77pEXgzadZ8jUvkHsDPuY2Zu8PY23HR9t7unKeiUWLEmgjtrhuSiEPhgieWrHsicRdQ",
  "key2": "4H8BZ74rU7mCSqgyjdbDQtjrR5jh5qXPyfskgonwMEbgG4t1vDkjwPGxYP853mPBYbnQrxBDSRZoJRtH433sqwLv",
  "key3": "5spSyAehtezFirL7Jt1UFWfsjq3mNDvv4fcggsZDPG3SvBeuFBzbr74p8xSN7RcaJPQBa9FVf9Qw557d9a5Bi32V",
  "key4": "crLqab6DmQEoAGcGz9BKbFiLNYnSEqCnCkfWFQHJNb6PuALmFh8HBLA8MRAwHLyDw2PDU8LchRRVNqRRZaDcdjX",
  "key5": "5vJvUUdkhZqgN3cQ3pvTdTHj5x1s2m9JRen9WQdRUoy17fPiuGQkzZWiGbd74qxZ4AbHzCHNMXKWSUyZt4GJ2bRB",
  "key6": "5UgJuu3HnDEWK4FJtwQFQ3ANiAvtNqXEo6yRWfGcykAnQuadDnXRPjJnuBE6UJqgAtUMbfrWHSqab8T5KWZnjELz",
  "key7": "f6x3MJb4LbUPSVz1vRW5yUAgv15AfG1WdMiTRb3PNT6cjeyoB3K4vjcmyh2uBsE8unFmoYH3BCyjG6s9pnT5Sik",
  "key8": "4XfmLoYd2gJxNUzi1oK4qhX2jjw48mevsj2nE8HvLZ49FdZm3L65ZZDTQVjToRCL6vi6qFbLjm72iL175fVY2y2P",
  "key9": "5cPMZzKaKnMuKz84oMtA6bzsatnnc8J9bKCpScPkfRMJdmrWz32UPq3CRExGJ4bTKFBhPP391wEkUgBZEjvGSq6t",
  "key10": "4aez5rkR2c7dodfXy2tC4bb4ynuH9P15L64ZQUWH1sDCpCspsTC61VctjXQXSj3uTUPeAWkpwPASuZnCRaLWGDjS",
  "key11": "5yYbASDbBo8SRP5nmed5nLDX83pDoEZfwJVbc1KwrKD9745AtgcrSR6PGavYKCXEy5oZgtYDd3FJkfwXzSuNgYGW",
  "key12": "3QrX4cHYA3Fs9wBGosLc5C4J3NLTU68HKsWW2hGWNnAZcXtZGRvSVewKGXGpjszSh2uCpN8XLQUgEsZ35TtCCwmJ",
  "key13": "286ZpSAJPjNf4CcijiqdpBPHQx3TNL3mV9oK6ZbeTEHsMqqviKwtmQRwktqR2xRxcF16sC9xPvTVtEKfZGknR64C",
  "key14": "36N9SZiJoM1nfinNmmD4trJEWVwr7NvLyx4q6e8ns9wKqzMkrjosnCr8npTkRiF9D63STRLbG9W8qUiPVuA3mLVa",
  "key15": "3naC47ArzR36pDoFu6K2XpwcM7qfftJ1AHwgfffs1k96fMpwkPFQ8C8xoLCPavSpgXG4neLvkFVemMgoJ86H7Pc",
  "key16": "4mdZ4aP7EMDcNiEi78XmFo48LE9mjaf4okqGHhJXS6cPR8NAzUhznRiVQJGavbQwrmPj6TSpf7WtJ6BKUtsAWsdK",
  "key17": "51K1YPFBosyfNTuQkGkuCauYJg6xQAryy93Zb8tsymYvAjmjWat2Jy9hJBWqU1qBYNvYMWdHvXWFzQ5mcixDW24E",
  "key18": "2dSbLw259DEfrKmRMPgVRY2tHVrRTSmt2r1nVJhpRqsG5nbpv15ThuM7jeTtqFeexrTNK1Bm48AG7gayCsP4jBTH",
  "key19": "5CBRfbQgaoqbWzctAmhitK875GnidLYEi1hAiCR1RJqsXFhQjQL3LUauQ7a2dXKirLWFVF2cGbJyAETpY8oKsCiC",
  "key20": "4oQJaenj9q2xsjHJWvpTTbKVCHpASQcZnqJ1dEWKvtieiAxfmoJf28r1D2YzBjCL9kSh6WsCaoCazP9Ke9hdK7Hc",
  "key21": "2W9d59QDmVhwmrqS9BobCxuhY2ZsuCb1AJxnpnLtisBBBDdYVbnSCCGk8NwH5yiJFagmqTr3SxzpAbKDQiF2y6MN",
  "key22": "5di3kySQ9JWrY6oQp5MEA9WLdsQEJ8gSmYobhZ3RorfDkaM6kDT5tZUk1zQaaS4sv9DKmRhKQ6XBs3X7Q4QZKJcW",
  "key23": "5CMjUKkEECgF3MEUSM44tiqRUPohVmXnkZg8Vyy5CvkBJKMkipRy6tHToer8nzDqiFErRb99bQBhvDkBq45672d4",
  "key24": "4WygefHnx9e6wCQtqNm7sviC19YuKNSRWiWF3GDe6W3WduTWQsrFvzTgA3oNPuXrrWVZGreDQDyuarswaeX5NdxR",
  "key25": "2ivhp2yWaSzvh1RTfAxcRzv2mMANJk9gdJfDVWMmBFpCBDLeqsjejphi2PP9gJK2oD9sBbwziPMUAS4TmnSX12Jn",
  "key26": "4eML9eX4U2ZXJTQaG155JwMfzxSkVDSKGgxCzpjAeA9djJCYbdDwpfBn62TzdWb2KsseDy8RHC2atpyuXAgVfJiG",
  "key27": "3XGTWA3CJFPJDb4bZV7V8s15u3L1gxoTjZfpnD5GNtasSXaJZVWxUqnUwDxLureMzAhFovmW2FtMCZKpVrUL9Ges",
  "key28": "tyJUxq4HBjCfW87MU89ahCFBVHaLV6A1qapruGsB2cLCD79NrcEoCMr8RoRjPRFQLvX4Uyk7Vs9cMUHq2F6PjMG",
  "key29": "5vR6oAzEiJTXiCfTkhxKKzBPczWDdTL9YHHRE1NH5n9DUsx5FgcCTxVa9GZ6JR7BH8Jmi6YLcib7QiBeqfuY99tX",
  "key30": "uJWvSMGJBvc4CyqJ7uDEwM6grXisU75utff2m3qQKcmpgLSUjqq8xDWYxWbu6jpuNfjhKLg99w6LamUS7kQr3nQ",
  "key31": "3hLadWhbEx1c5ZEj9dAdeZDDfZfWB4P8Dg5GbENbxYco3mVhJT58XHikMhMJM3PTi8RibvNFw1jaxWCfZjjzgAT6",
  "key32": "K4YfLrfwrJ3dkShdJwUy9uj2NwyCZFyG4wNp44W8H8LcB34nZbf3ii9zp4RbskHy4yibpPQzboW5uq1cVubGChi",
  "key33": "5kj42ZAQMmsC7UAmxm3NLbZNChwBserc7MTbzJ8WwCqLkaWuZmqq3gJupgrWwEWWzML4AXobcfmJfnNfCTZLzczr",
  "key34": "66mbtRrNupupLxUtA6WAcXdsMt6zZzGUGnFGAaS8MybHd5oT5EAvu3QkXveL294KvzsuxpxVrPd93YTaZbZi4Evo"
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
