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
    "4BRHh9J1veYLfqCpR2FpETTCApBGB9Eiig2xGDkjGDWJUVDjtEi6PkNA9ZrHpNDFvvX2ayXsoit2ZzFZXMtr2yp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37UwCgH79wzKxK9PCMMnMibDRBsPybtWyHrbgkKSpzJb8cNPmdBQSBAGHxSkoZ58MJKLPc1GMc6uCGqfpFwopWFT",
  "key1": "4xMXCPWQGaCZiREswCSgnQMcsNzZY6v6ojz25uT95UeWRz4DCkRrjBJ1tJKqNfhM2CNgyKnFFwJjvsto5KFKoJTR",
  "key2": "41qem5JeUF9rxpqbSDcHqxu1QwZRi81kyoWueG1dy6EZxSYW1GA5vGiqQPxdTsA3Q2RskSGALuLRXowt5xZiGMuA",
  "key3": "36N57jHeNCiysHWCH6xy9hctat4dEZofXv6LBBSKdzcyqjqJ8YiNKGb8bejvzqStiYz5cyUu91ASBZvoohDA241M",
  "key4": "3aLKiQqA1GELVEa6yM2yKBdrFtHPF1pG5GbAdGHPMtdXNBM5xHYH2mhdsDz1Wrou9Xa2cpi2jUTs2DafqTFavCuk",
  "key5": "48cATxbT1ZHHDQUTi6GmCk8CKocZAXQ4PZqFfHDgw7F1BGsCVev2wV2gZm3uERd7oWL8hJSbrM4uJoiivmB2iB59",
  "key6": "KAdf2p9GGd5HqecoWzTcXE9cvAAd1qc1rpvEA6cvPdZH9USbpqmwZT6RURQgWT91pV6RdkijUz6da1fLCHo5Y4c",
  "key7": "2jXmjinFk8zUM2q777qc3foLe61Swcrk3geiK5qu2UigouTJy4USRtDnaSxCMddYPLTMTp4nWLeCV1GuKr3uqf4B",
  "key8": "5825JFVnrzTifeT9rGyR7A2MYWgDxQTH88DJkK7bPwifshkDSkRmBbU2vXUZkW1ySmr2FFjffHfLZgZ4iYSkvwME",
  "key9": "5MJZsfYDVZXVmWHRkHdFrEPSDLEkMoh6VBV1VNvJk8r3weJ69Dcx4ajUbBZmXc4rnEVt7xbLMWBg9wMK6QBFrU9R",
  "key10": "55HGZaDEERHQz3ZWMqNdmhyFsKMnpuxpHqRsoTLVyS57WT7oTmcs4eSkoSRe6JA7D2w2nPSfxAKFqoRMjcNxqGHP",
  "key11": "5CqWcLCyfiRLtcm1WDMevTTiztY9F3jq8QHAasxnDEPGjckSoisojyiv4BQM68q5FVVtpnDDU1EgWdL54ZYGYZb7",
  "key12": "3zDG7bafZbXGH8ctcu7ckaq8JZ175tHfnCzTgdqpjdSFXuPWrtcddwao6c1aPftBZK6DRXQpcPNGLMExRV7NUPH3",
  "key13": "5XZffkFB6Zm7X3SbgmD9pTu9UFq4hrbeNmocErDYF4UyiarmwAq9bMGqQkvAfqs3PYyAHF2oTjhQJVV3kJSWztTY",
  "key14": "Mxs1EzDT3J1FNVr1oKYcCM2Nrv4dzncgLgwecnLciRVmx2yBGTR5yvZFZtvK6jM7NECVqCwXb2oD81jFGobHQtg",
  "key15": "3zqkDjrMwbT1EeqAFmQHBHtSJtkmXLnGJhfcuffD4ZMvpCmFyewNDKLxfAjjwS88ehorhiwQqLXLeCJuPaneyUJ3",
  "key16": "52W3S7qg8UteDnWqpMTDGkadAKXgr3fRW4EbZdTPpwidQhVLqh4uRqgQLnMUfG7NqDviJgUjALRaXhmiQnEN8ViC",
  "key17": "2uUmoX35mBVsWqsJqTRmYst8yDufgFGjA5ca1yu1JnYUnUjgKvK2p2gY6ZAkqD67HVMfJNbMmeG6zUd2rhJZwCJJ",
  "key18": "4o9qtzP9swGYuZZCiaLyYAxfMJHJpfkmWYW16S3g2ScCd8S32aCDzPvuEuEZJcnFUj6AzFdgAH3XCEn5x8P1PRaR",
  "key19": "53qqR3U9CuaMYY3K8P8hFn2ecysgGXjTvNJyH8reKiKYj8TEDJJbfty4jzmeGf1SP15RvvVVcjRNixBZG4QgFCnN",
  "key20": "2u4vDsidHhEcMVarGNyn4xnYLRhcGZmGBfv3Nq1mf5gbUSCju4pwDB78P3aRq59x93XfrfzsT5aPppC7buHX7vwV",
  "key21": "5BzT7CGNiAEpuUeC3bhbZrNym6APKdPDdbTYv9FFXwuRzSw4cgadJRc5HHnm6QduakLv8K25kuxQGNHGi8pKK4ZK",
  "key22": "31XsybZ3WgifZ8BQDDxLYXFQ7DhBtAriBwHU2R1mPqoLNeFxKRYT6yp25o57FdK4JZHPUzuq6AJmoU9bTMaxRpcY",
  "key23": "2rEwvWVfj7jEy6oPt59R57jaV8jzEx55n3nzuDBLjzUoHCaawPefvFpLnxNPsp42ZYrEzbSFb3ERZ24Yft4tvGcU",
  "key24": "WnpTQdRJSEs27tm1qNQg7DNAzG713FWvSFBDhimkdknoSMJTemRdgtEyPLJ1L2JwvnBBhQC1UGGEFh3FjdtRiv7",
  "key25": "4JfS6z841TbnxWY7tUmNWZ1ucwvbUgRHa9KdU1d6Pvx1jSyDatoDuK2VgkpmiXWxfCfP4f1bYTc8moPSaHvqdfna",
  "key26": "2copVnx3MrWGKqD1VfQZGpRyTUo3YUZESGQYMCMTFz4j9BYfYX9NWHEyCRcUr4ePG5XmetrTqD8M2x2PXjEV9GZd",
  "key27": "2isiDZakjG59YVk4VZr5MUbFLgRqcxqN29jGRVyFGYkhP1mQEGAdtMTng9GmuBT9k7dqzHKrV8AhEwc6mgQo8pEi",
  "key28": "5NQAQiXRSnNorY14ijPsaNytuUWyk7Zp7cA57omBExFkUZFzh4qTtQ1VckY6JQownJrtgGQipdXVfXxaxBbQgFZm",
  "key29": "hNpfwbJiXqKmQtmEtvfAMpPSjX1SZDXfBijaEfjkRcbecgyRBGuyDoYzYJhMqGzFmCXqfXjbbW8FT3vFx4Gxscs",
  "key30": "TJYL9KqHc5nfK3NqPFpR35GQGZm9KYJH4NTR88WYkTy3RtXQxggvoq7y93ob8bgNPyBT9QemLbSfkczHD3eYJex",
  "key31": "42AuwHQDXvCmviLfJaZHgLi4cXFt7xbz27ujh5hnuShkJG8GfnrvYUWo58QTPBCEqrNoXAc8YDHEtjfzvjR4Cp4J",
  "key32": "3a1mQKfX22gs82fkFCLV9j2Hij9TNPQGapKeZD8RJyRgeJomBcTwQ44FbVBjWHCqVCZpHCnhm2wTJx2AbCAff6CV",
  "key33": "2UvNU7uDPkBqyTxzPNfijwG91c3UzK1Vp6yTYDXFTCHtzDeAWqyZNpW2JNtp6qW3atGEMBbXKyGQSznG6WSA1Hzz",
  "key34": "4qyphieZmrbvvJq3BpB6WkNMMCgV3recdbUNHPwTB7XRsptogQqJ8jhSbzS3PZVPGPfcK2L6XMnWsd1QqknZi4Wb",
  "key35": "4L36XY7PUurhKh9M73jm2CiNdmbAs6vU4bU3j38Tgaj5dvkX51DZETqmGa4aGTb4dK9oEsytYYocNdSHjuihqt4F",
  "key36": "4gGVUXD4aEuzssYzxnCqXjZJjZyF251KnHiwJQY2wCG1tAbDi3cJknebhUVVam8txJKucRfHKTcCXKZDiwUR1aDU",
  "key37": "GCUseg5TfkdexqRyNWs311gAUbvTqRcAxQxVFsKZjrXySC8G8CTuFBMy3RtijsfDfBcJ3w5qpY51svHwUQKhyqp",
  "key38": "3dpFsQXKGdKgRtqVDCL3sKkXeFP3MXVKRAaNKs2rZB5NHixA8G6mjgABR9Q4zrrwnQzrzS8Uo45PDQn846d5vdG7",
  "key39": "4pTdEmVYe2raNsZ2uyQz1exEHM1hJovCy47C1MEUwMyAeo3R4qy1ZQxWzk4kperypDyBbuhzpj5F2r5bMX2nx2AA",
  "key40": "4aJKxmF6NmE2LrWuwJaT9z9R419TgatDoHNZLzdPLazGtuEbepyZBLfvi2Mk5qG7SXSZKmcCwP5CVDF4aLHbjTbo",
  "key41": "4cvic4SPzjrUmTEyKDCAJoXkYBnVMdKgbjLKxL415MHbkRAPjuTbJGd8yf5Crzhhd5xoRYmVedjVHVmCKP8uLfnt",
  "key42": "56feheiMg5jeT59FrHSNEyEj5L3gPkVYTaXtCxQxXTkpWhDCD12ghtPN49NbnKYz7M3Dsvi2JUKddEyUh9FFAf73",
  "key43": "631kTUSh6GWnMqhf9A4r6vzCmwKDDuz1edemHmbmusRFbCsCWpnYHsfHqydSR3pct8YyrspM8U4QLVYvL1DhJHAj",
  "key44": "v5JYgRgzauwriGAeGu2WRHNr3CA3W5jGEMDwizpTpqD9gwNeUWSFios3kVaDTdkwCwmA6S8B6NUTZAEHyTrqW6k",
  "key45": "2neXQAs3JgDEFAvkRjR9hvNfSW25sD6i9cCn1wVWe1zz8piuCpi9RLbv4SYXbZuF2qaN14nLZHPkiUBaBMKxoT8Y"
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
