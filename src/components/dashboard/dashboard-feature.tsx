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
    "3gKeUNRWeds96ZcWE2enyftAGL8jwTAi7KGkwKPnc3J5ZwFNiAWDkDeKT5E8LPfh6LdTtc41yiwfiRD1pCUzRZE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LQza661jmEjCVZxaWin9XEaYLs1DziLHKgLUG8nsTEyh5vNBiUqPRPYABe1H8wzsXx95kh72rtGqo1stV4WTo3x",
  "key1": "36rdPuS5AmkTquHqtz4JQ1BYJSWAZfCdCVm4aFdDnc4MLXzS2G3yeYAK2snTssJUSxgfa68qiHAb1GB7QNFdy6Be",
  "key2": "2h9MHo94SqgM8uCvosca59dvn7RxebBTQT5kDcQ3m3VM6UYpStFHBWo4FbjHmreNkT6soktgToMwHiBiGtwtryhm",
  "key3": "3FWsfp5bP3Xn5VQQFc3A2Zi872HdA1rsB2LpYUyvdXnYVYL2jjtZuowXyRfgbsQFwUBpEKF9wrQtuL67RMiQkkAM",
  "key4": "5242ihrrp8eUsXw8gWEB6kNz5CWiNeVVCxCEgm8SVWMAsjUxNxQz4EjuGsSs2WNCbjQ5DtgmCn9LvzXJRQfa8aMf",
  "key5": "2MLoJuWNEYxWJ1b9JdbYAjN3RTJrAAfPpPu7VyhEd9M7HhqoLYQwppexjPi7je7s3gPZifZbPseRVRMbvX4ttg9w",
  "key6": "4echRYBCqNxw7b5MKC1F2VZNp2TXsmyYAn2U7mPUsJkdN14YqP19vbqjWCejgrnU4gNXx4JWKRSWJGyap2JuGfcP",
  "key7": "2qsDpLvuMEZSigohf4ea6wvAZr7uXWdqwTYNdMhJmpxTT3uZmtpcVwPJoEtcTTiwXFLe9oCHHRRK6SEjpFndg9PW",
  "key8": "3uHdQyXnscHJB3PJzmRehNxHWHiWh3tHbZm8ZX3mJ29EewEYqa3ARHhQn8eX57psYYTqwEAthzcUAZtHxgbbR7T5",
  "key9": "5o3MB43ecVua2tRyv2SKEgy98xfsrymWKuUPP3Z7oCiVsgU35DdKBpAKz4tB7b1214Hc8PHQ1b52HJD2dfMGf7zS",
  "key10": "3Tb79aRYiUSUhmRRo2AvAR9uL5YMfmXoaxx2U4RgRheZyjCVhNrMPYNyhmFpKttFKVhDFLijpu4XXJcAXPEmaXSe",
  "key11": "31nkJPESJ6B34ZA7xH63pQEKpP1zJQG2YkxM3BNxQbnU1ep3u7129uWeeFSAYr7uawer47D28xAyLAjkRFJy1oEX",
  "key12": "5nzjG9m67RzZoSAiGnXZyU8A6cfo3sWTJHgax1jALXsGFbLU6oJCTkuzgFiEJRbZqEWccZjd6aXCVqngMnPdjAu3",
  "key13": "4nDQXUcFKbYY68oGNqBx5mGmgZYzGxNgQ1U9ZdsXDSSuktnt5ixNwfksA34sZoBMrE52etwPej5HFVezksUHek4j",
  "key14": "2smw5CsieiNjQsVY1B3RfJMNCnZQ8BdwNGMmTa6qfHCs4rLBAWR8qpyu3jqqfgeSwSJC9uLKzmNb5bT3dTC29dmF",
  "key15": "5WnedAv5AQ2YshKtLZFXxY39wCKH61gx6soXSBFGWqHiNUHdNHghEK7eZ9XBK4Zce7ZNYq4zkfxu4dY8A5v74Tnr",
  "key16": "5wuqbSCFxytqidfmnLat9mrsbA3Y3tEYLYmipW6DvVLhGoRxbEM77VRg6zxgr7NPXsgKAVC1ZBAnk7pE5ZbhiMF1",
  "key17": "LEakydT8HRsGV2eutesYy7kWBBJcfmYG2wF7ZWvxHRcyDM3ftHi6RoMNW5f3Ui5Xnq4TgBWtn1bS3RPAhRXyDgi",
  "key18": "3PR8c6dY63sERC2X8Avh5WLDo8HBAu6PPKuugSooK9w9b8gyMhWE1KTB2aVRhAVzRFQqwBs7Fz5HM6KWBmPz36MT",
  "key19": "5J3RdjUqpaTyF8thABJWSF1S94GUt5ef1LZjLh3RHqWdh8iXjgCKkzLQbrLwt5D9sXuAzFTxH6H6VdA2zgfBwvjk",
  "key20": "2fQfwvxSmc3X97zNJitaLsbznbh1pCB29Zx4Z6dn3KGpBFq8FAN8eBcaePbNBNpM1qvhSigQnYZEoM8qU2Yt182q",
  "key21": "HDjPBAH9s2UgFoLTECxfA7NMJexTvVwYKVwdjtrbgGmAhJBW1GSr7M3K21sAUbhsSbAdjUWwkyZzCgLTW3AuuAH",
  "key22": "3fB7p54j6uyYGTdtXhQVauQCdW2LmEpHKVCsaywdje9ccneGXfQbADTzPMvb2gunsdyJ5xS53t5m59bzAn3qazEN",
  "key23": "4GHEkhCP4osfDmcWsaPfURJHTNgQk7mWnuuJujJUqCf1EkkpEsSLLnw87VT9hsGrtS2sX8fB98QCSTsn2PNWpeiR",
  "key24": "5x16zWkHYrcnxME9eeZ7MCsJ2DNN75xEAEcvyLEATnTR5Y19SPxcWk2jmpdVXeWekaFyMD9aiPUBvsPffE8trWLn",
  "key25": "51xPpBBEh6v6HXmKg3dk9AZX1wRQFWNH7fXZsqMSm3tmrRrLGbcQiXStyX3Cggben82UBmacDvtpYJUeUFMPcxHr",
  "key26": "3BFcQZrkPC8egeQcYaFcDsz1cEnZe2jKz1UfPgjQaenf2RPcqryTBYfrK77u57oEQMTQGYTMCzAMqj4pFAQUWqRk",
  "key27": "5GeF2XtMJW1qEkLgcFBBSrED3N8EF9nQA6hd8LicB4cJkBnFdVLPRR52X5v3JcrHgMQ79usaEzFv6Yfp6ycjKJcS",
  "key28": "hiPpygXuNiB39PbZXEjSSNgrzzBkkcbb7L26td2hVWeZmwdfrJC3vdZq1gBgPHem7hCRmvfuzJ1rDSEoVFUYy3Y",
  "key29": "3VtqwxangxoZGSp6cxiPRZpKoQX617arLDCnEj1giL95QikZf6PYm6AXhBASjXxVBYnTM3QA9pY7JDGVmHtS1qNw",
  "key30": "5KdS3cA3UPVxK8uk5oqGfv5nMBeQi2hYwsSj3AFu6FW1bg3EYgXJJhnD3k53K7WFnd35AqCuzV88y2MNkcghStdz",
  "key31": "5NCAm46XS4Bu8PirfCmvs6PGjDc2xoz9g6C2rw7MTUK78qNfmw5gbhLyJwHEHgYVcDryFP5XT4wHUhzhv3YpoxCc",
  "key32": "4JDDe81CoNYWzxer4VytXNJYPLJnSuN3C3ysmXvhKGdTCKkTr27JB5mh5XcFxMRgwmMaMr5MQHwKh1ArriBhAaqg",
  "key33": "2qHgRGb8YfTs5gwPwzYG1CavLSsx27sqMSRFVvZAUYaWLjHKn5pEot58c6G4oemMu7gJNjWrTs4Yrge5Y8uAUHWA",
  "key34": "3jWwdPcVAeG7FsfvaTEXvWRJ9WAHw3RnapHpYSwKrQWEFh8PnsfC2pGnYx3nRy42M5JpTNPmpUpRGUBA2ksGLKzs",
  "key35": "38Apdx95NG5ZtoGf3hg3XeVaWvKA4dADJ6f7gckT8Nan4TbEtDL6mCZDrXrHnZ9R14stY1bEefub6od2jCzaaz5t",
  "key36": "aoHD1GjUT5juxuxL3VokZMZDfC6NMCqwcQqw8pjWdzdzi6PnrwaK1Ax8SBQcduPVmoyQcAEFDftjPyRmD16rYpk",
  "key37": "TJ4vqLKTXr5B97EpRauCSc62skWD71UavhmjEbSfgEuhRZxHeDYs9kfS5MmvxBpZdqd3Z9YwJRsZqC12ppXu9rg",
  "key38": "4bd338odUvpcZAJmt5Hkaq9Q7WvKyKZzxDfAX3LxvbRjvXBS3Vg1yivgWNdWW6i113Db5qtpG7vLDprXGgCbuMSb",
  "key39": "3KKFnGry2wDQ1sqHQARrwBHQasL68vnNDeMcSGVMuTYjmf2UjYU1Ymobcv5kAejpxcU61ayn4BmVknMz5bsaYbkJ",
  "key40": "4GLHgaEiogWuUQw2ds5RrhcQgLHyCnzN29SdhGNo8WY9MBvPbDhqk297sFdYY9rcM8tBby2gzZErmQnAFuwEgsMq",
  "key41": "3Q7RaEZNwhADs6y2d4wVchVxJpwGpbzf5R944MbULU4rqTrxErwyGvMvH91oWZAi2DpiQos4mDyRkMyvBv9eJiJ8",
  "key42": "3hvLbDQ1hNhuFtCtFwUFMmgERmC3Wgy24CUSxTyZNdr9xTyxunbmMueCKco5pWYuGuBGAY5tWzfS4uwhh84AnUT7",
  "key43": "4hneYbL5ziA8Y7fkLXeBVgwSBcaybojA87G47HWAcYekjH5LZyzzzFXFgHAnBMNwe57nbwyD1iJnSeBS9UqQhhcH"
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
