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
    "3MjiRM3C8GVjcG2LxiTimyTXFTFGi12M6Mi1HFtJZ5k8a2wCBg7x6ihgpYhxV1nZuuzMPuuv4ZASZrKEZ7ex6hgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "397T6dbWX7Z44WrRqHpNQUv6RrBngwdTnhpub95FzfNpQfQDGYCMXfZqgVRNeW4uazedqZ8yRct5HPDsNnzKXapj",
  "key1": "3Su61nHcYR7G2WQEkaaNhE19hsmUpMF2LQNLUcEoUZTcKeTcZiU42ZMfWpkxNxKmgQGAf2PeJ9AYov54bCMKFf5q",
  "key2": "4VCUDhoUR82K47ZWtxuuJU2yQdtuinkeZ8BwgXbYFn4VXq1WoWvhYXSEgRy6NeHqM5RAQz7kWioe6LB1sjuHCSuH",
  "key3": "6d7RB6V3iUdBq1w66HnbjLd6xdbWJ5aKfcDLjiWvsyB8bEeR3gGeoieTKHWYm3bWobVjBczwWQsPrGKvDbtz4Vb",
  "key4": "4frxvNiJinBpY7i7RHwEmoa8Xva9u6mf9BACDoiECVDaECNkCMN5g924izEjuZ4T1ninyqc2gDvZkTFXSJVtMfsi",
  "key5": "3bYXV3jAE1MSEkwPHjWjRWq3PNcrBYM3VuyuwhQCcEccXdDPQ5He41LozWkcawzTLEAS22qmvAmAMhbkKtnogptR",
  "key6": "2RrkU2hEJV4aaBT5o9CHh4N2sqz67MYPYDcXtLgr8jcPJG5tbupRcm5kqxrb5zpwwReURPMEvk8du9rhMaVQTjFi",
  "key7": "2ikyoAeZPYipWnEb1RVTP9A8uDbNnZBUKzVu2z9uYicJr2VqH1b7TREYKJGK16Ebu2Z9dy4Aw6RRVm8oCyqfBNdj",
  "key8": "3mHS6SqVVUCs2hAVCAmR18fftxVzcHnPwb1jGpWAHs6ewYBZ8B7ixnRMSAFYTinModWt9qVqTJFFLCD2zC5mJwz4",
  "key9": "rTGVb4VSK9e4gGF84FtxCYc8SoEy2tjdvzBUi4chPMgBB2U5JVeqkdRP1NWp2nQxhekPehDPxNReR66UD45KYaV",
  "key10": "5VC93zBhMEW6qXqtxcD3EEj89Cy8xPCUtyeUr8SmZoFLEKbVZwiMW36oBLDvvxxDJ8gC2JH9fx9rtnBCrTaYPNpa",
  "key11": "5VnSuTSHJk2NYB1YtEorL3qWuNi7WLHDuw5snF9wYiMYkYJaX5kkvXUGDSugtiRZNGAejAWMQ1BsBDSU6LyBQ4o3",
  "key12": "3P9Er7YM2cR6NGGEUW5DVSVbCYW85z4ZjBuRB485tBmSNMP29Vi8AfzZgv73HYUM2aDTypzYtWqKWUtXmMgYQDcQ",
  "key13": "sssJYcuENrG4bhhBgkUQXyrRf81Zzafs7MxF8c5B3ZTff93q1TSzeXbNYsoQ1KLStZczs3rRtQjoezuKs6sWByw",
  "key14": "61vDr2QK7jAxNBBvRaS7xTGeYpGrCQNjmWM1VS2jdnDDh7AwEijxvYAqSSPMk61JGsqoJNQR4NWomT3LbUQaSJ9X",
  "key15": "5BLXTb6xf84kuLde7hJ55cpV9j2vzRPMPBWDvX83yn7pQBL3bt5YmXZc3nnEVWH6PdCfTfbBqwZe6e6zo4aPMjz3",
  "key16": "5hdBU2JnD8L2XSaYC2noanPdyqAjpYQuqjyJsLz5Ef7DqHdGyDhQUyLQqbP9Cz4Jp3cw7fhQWf1rB4y29uYqxXWY",
  "key17": "5FPuc4WB98g6cXEdVyTMMZ5Xic5nguokKMWcj7r1TvnwRZ3RyLA2Mv2JNtZGq7fh5rhNihkmj8mu6zjK4S5piqRA",
  "key18": "cWvFHEJHQczvnxJwsB561edd5wzzdCTv1bacHnxHsUszbuXC4EqmEEVevgskgDFjJZtLjw5JhuLDgJNyNjyNdft",
  "key19": "55dCBDLM2SCECsbofFfWtDR1ytAYxe84yxFK6Q83asa7UxYMxG6KVDQeMS1mNYZjQsuVcao313zKYAGZjCG5Q2K1",
  "key20": "24ztj1JhPvCxkqfhrMCqXiL17RsC6SgRaPGSrqfWmFf6M8Zfc5xUnJyVuFJmDD6tEQo9AZfbwsdhHkDaUcAD2fKv",
  "key21": "5kMnHXek7haoM37yAAWBGiaDAqgNCN5iJmQTroWRJLXRTLz4mmhYhk6eg67pmPWqr1NiiLYZPvV2VshHREJSN968",
  "key22": "5PzztuUwRCPE3W8CKsk4WyctDRYFVvWb5vJYWe1VqZjZ2qpvspxXXGVNtcr5A4jJ2h9d3tKWnb4hc5Xw4sPdYqyu",
  "key23": "48zhRUM1Yvf9r5GNgKAj6vM6MCBZqAsryTLyrJqyZpiiyEUhkjnA1SUp3iQT2ALKHNCMPfKH93HVMLP2dQPXbxLT",
  "key24": "3s7pFR1u7M6kxDETben1jrcQ8S6PsNV46ehPMjzWo6VcK79aUG1eAkxjb9VCBfQC6ddNuPCgUkvdqJeYrAaa8SkA",
  "key25": "5dEKQ3fKNViogtfDJPh2eC8rFmEJwhD3zZPf2EnmCV2DCfWemLQEHFLnztCqJzKKCPbhKU5cWSZSQA1C2Goo25Bb",
  "key26": "3rTeqXbiLKYTppAwEHkCjBNChn21PtBqNN5AgwPCYVgi2QYoE3FERnFiztVFQ5NvRiLjeo2SpxskgyBfrk72REEv",
  "key27": "31u8dMDPA8jCh3gbockuVjhRYdRQWL5XtCBkqQ9BWHDpW3jzuNPz2m1XT4f6ZG913ivcbkF5apVj5d5HwkVQjMPJ",
  "key28": "2pjDPsrGAj2Q3171nQ6tbc8NBk474GGP46N7kiexo9vRxRBWm22bYgqP6fKxnFoC8n94SGN7rwq3hgPhQ25rU7WU",
  "key29": "4uvQFVskey5RRQX2YE99wLE9AU6pTCWQjhRE4jirKZiRQRpems7MustXis4N4CXMsoVU7vcXzm4vk7syFt6DyY1Y",
  "key30": "U8f1shpWVLCLXLcqjrwNkTWzQMswyaKgVuJ8PGGWpYpj9qmfFbasjwJmNfFocCCQD1gapcjdvbrvZ3urVEbCaN4",
  "key31": "5xnRhJvQcbdk2QTZyebgKyqu28hHeerquDhxR8uZjKkvXGrCQpUvRj52DVkCoFWXEjnm29AnkMPrNgepSsnRqJW4",
  "key32": "3kTHCXA5hMZu1JstF4boTHZGkPzU3vaqshW9wBkhx1mqr5o3wxFJ9YD13XQRRp28JZYxnfM3N637Nyk5HBfK84MK",
  "key33": "5SpCMPRDJEcCoJAphTAFh2hmwWh1G8yGGD62hMB1TcBFH3T3vC8ri9sKnHPdadn7daEKS3ddRu95k28RU7ce4v7P",
  "key34": "3qQmjNTUGA6Cb4DbsBZe1PdFEmQuzz67Le7TxMhi3Ftgmsfgr7c4HRqAARNCH88kQyRtj99MdvCnzaJ1rRpxxPfG",
  "key35": "64TYQMgqzZnuGRxnRv3FH4jy3JShmdFRqHbjPvMinvgSizeNWXkfYVRafxsimYfxAkcRvJ1hKfwx7Ezbv1QRBUx1",
  "key36": "3g7mvZjcgzZ7jBbwjEnbV7KawwDsEvdiboeMcoQs62Kzyd5JqT9ouJnuzFLuQno49mppXm4zr6keVavcJRrAHitm",
  "key37": "5qj4YdQxwkauCDyX3BzxAEqq6NyxqRmX7qqYMx4z8vhxKQTU9uuF8M1GW5xQr7pM6z7FeRR1ipJkLwMRnztFF8Mw",
  "key38": "3yfUBFWCBvNnfXrZgFQuuqm2DJhrAd5k8i7w6UXY9x2ZBdaBwCvvfdbL1otgh5Lrrkb3pc9EtiaPHBwrn9MYGg9G",
  "key39": "4gsmbGRRi7iXrzgnEuJkM9wGytvNU1EoDLAUsr6oMcVSTxTeh1BHAbr7TcyRacrVyTvjQ9JkRs9GHniXWGBSeZ1V",
  "key40": "3WrJJ6bHyn6wrVV6Gb6qWsmLgqdGgv8gfhsMCdsLushWrEtBzkrrKKGUgf5xyt3nTdfYdCy1tAsvahUpoJMHJXFJ"
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
