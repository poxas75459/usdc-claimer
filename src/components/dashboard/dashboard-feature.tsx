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
    "4hqCEiweKRZNL1r1nfDqzVVsoCDUurEzQgHt9bwRM9k7dsQhLB725aGxurSB7CdYiyM1Jx4LVKZC2WBwDAHa3J5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23xVPoQuEQSPadUDG75QBGUB5iMiEybsJmVPW2R3sbNCSXMi46QpMspyh7Qp67Kk5KLdou8SPACLqL8CJtELDKJz",
  "key1": "4fMc8Tej33Yhzv1Gt6SZQXmmbZMeBkoAvQU1dV45nNR7CSqHa7BFfrTuDqLpKY3BmT7zNzes24Fibd8NMWpKUi1w",
  "key2": "24ZGuC1qLUVzcswpJP2TMHu6xD7WP3MWbxEDhpviFAepUkHsc9wncyPZ7PfVrhXHNAi7TqujbG3gyN4XzpuFnnwE",
  "key3": "2eqyPmagaT82XXz38unmgL2Wwra4Vw6mppzEuRU7wjoCJLNE4LcXC2nwb6WCRNBXhG23XDpc2muLeogKoCriLkgA",
  "key4": "44q3VDw88TZ8w8PzTUNcnmtn4tXigpZcef7NdnqHSWfHeP4fG6h1dPik7GDcniBek2rqzvE7nLutSzAzNjJAvyQt",
  "key5": "2gAMc7RitCk4zCGqfNTe52uhbPhahxRcMMou8vxVU2w8QMYHSNvujsnitbZ9n5z2i39dVnJAbSo9m6NKjAuzMJWj",
  "key6": "55mXTCN1xP5G6kSQ39N4D3YGMyx6WqBVRUjNdZVLdT5Dt1S8vCgSfwVXUBZAwdgzC7fGubpQHr9ZgVE7kNBU9qXX",
  "key7": "3RWoCn26d94BpZBc1zxfgkuT5G7CKavinexjybn7BsQi3EbYNYGJJ96kugsMYjzt8hoDAqT2bHpgch5QZf9h7n7f",
  "key8": "5fXCxceLnRxZsFPT7y61E29YwG2uAMQ1YPtPivkzYBxSaw21iSJt7qn18J5KGJGsyPsSn9sQshcG7UGYKQpLxZaF",
  "key9": "vJAkrFb4ebxUVF1HUkYsNn3nX1LCJLjqW3VGmUw2RfZKWhrgVS9ZC3sXy71gxUnFyG7T4CVrkTARoQiduMEhtxt",
  "key10": "3tJrPNxe4Ry5GJVF1uX9RPFCzTAUbC2kL4wsyqjAA2echSwo7jnSW7QhxXEGNKmDabTUEkHj1aXuPemGCc74XCQ7",
  "key11": "8p1buSAG28EQ2ziLd3iNY8YXDzH9X6WVtf9ptbQ63JUm4WsgwEYWrcxheZkCCRV7SudB8WDKfMNbTzsGY1T4Hbp",
  "key12": "3tCxe7ceRRq43JahUksCTZz8pxEjMgPiHMSPADN2KCgNQ17WnBWmg7GiYCdqfktr3ijeocn8f9x9Lphd3XYo6tSY",
  "key13": "52FpWi46ttfVz8556JRs6dWu4UL3iUBJL49KRtbixAAuqYNksLWeM6KF48cwNsBBQwtSQCmvidGP7ba5W8uDe89g",
  "key14": "23VX6SNwL3GhiUEyoKouuVKXJP4nGbXPXcQc29BtwzDwrbxLCT68ZSJYkzuKLW7iNRfcQZSUe41qn7TZyG4sWfdb",
  "key15": "5F9BMBvD5Z3fHptZaLzEUJwDFquWeCbE47Zi3MbR8LhesYpDcfUNUieookq4NTNHYxo2XfLccL4CX45shhfkY4pu",
  "key16": "47aC2HBKp9NtdUqWbpjmJB6FKn7jX2n3jSZKo9zNDynwRJSgYrhfkw9spE7PmJRZS1SaLZujz3CK1NmzuLYfJmLG",
  "key17": "FmQh1GMQMgBpnA5VcMfghVusa9gZ4WFa6wNVdkYzDVzUoyivhTZBtz7W89C2yeZtzeScF8usvu8yQixTLqrPSre",
  "key18": "2yrbiXu9LpEjjtG3L1xCEx3mzSozHf9sBxaUQTEkauwFhLhtfkimfjTCQ4g2ohiN1oqXpNhQ8C8xdvvTJ9aPy7xZ",
  "key19": "2oP7EdrBRVQraCjk8UZtrDeuBpwFagUU9mkRZTnesFJrsRoE6djVRtFjJWeQ3tWwNisRVr8Rkm9eaj3husH5zV6b",
  "key20": "5knhki78GvkhQGDTZ2tiPrCLaSjE4b9ZxuZbDEnyD5sQhVZyfQXDdBHuBqZNBWd1L3oLcMkJ2P9GGgWt43H6DWHo",
  "key21": "5hAxUkQMtHhEWX3ZiF3zRxm5NXvmtVURFpRaUDxVnhG2ceVLw2yQV5t1WcGykDxWr5tom1JQ2ncNr1unAS2VhZdS",
  "key22": "XyJsxxx3vpCzmM4CEwDoKXHfgtSbYHHAPD9p1ZZtpxqa68pqZVtK4i8o7ifNrjv8GvzG2TeMjSPimKtAwsnvSGK",
  "key23": "3mMNu42SGhYi2hXLw49r3ADJxjyUNyMsLsKhuoScs85w7ZZmkEfjuidEBYJso5Vba7GH6JR1YRTtc4oGvbq84f6G",
  "key24": "3NG3JCmWWmwPpwpiGBrAnJrmpuyha9iPxGf2MLrLZ2fUP9vTTmhb8U7QzoPzC14RbhGA3hmKBdiBEz3yTRtTJ3o3",
  "key25": "34nuR5HUSrg5h8AAobkumaKrMaAtPSnhqctroQrVhoiVnRagCimCEQGLFBY74TWyogBQhd5tb8r4oHdbjA3NaRmK",
  "key26": "3pydjSMsoweH4u1uhjLpwN4QbUKY4j6kKyQYE8btrCdcuwV1aP6sLHhAXaAu8AUGPnGsAkKxxE3hVLbAJWFtsJk3",
  "key27": "gmPrSAFGW8cgZt6ahHQARSWPHaa7eee2eRwr7t3rayBoEVSL1kJ3kaBU5amNrwpQp9VaBhA86zuPSdiVabYk47m",
  "key28": "4uNJ5WzZiPb1eEfaEN11pqm8PYCEY8T9PqLDBDy9fZB6dyHJhE7Rci1SrAYt9PPqDgZEKmRs6iCouPykSFTApgVX",
  "key29": "5TyiJx4fk8XeDbi8tnjHTdCzC8SrhkSX6esy3RoUYyUeqGXg1Dka4faBfbexirAhV4eCD8PVdXqpof2DdPJ12S4R",
  "key30": "2ZtYdzi2FUVec9NNjDCxKzzqA8xWyM62d77BHCAEoc2VdAhVCGsvBhmPYGgspNKsmTVPMaDwk4LAuvkw1XKdkXHQ"
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
