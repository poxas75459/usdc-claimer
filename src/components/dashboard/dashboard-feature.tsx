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
    "3DPsedi6fq1ATMdVUowBDniwBN5tnzEsHNMaooUYx8crdyda2P3FMfeSCGz3dVLEqfw1tgoczKxG2MSYYidGkgNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v2ecWSCN4PPzJQFZ9ZNuyMUXH8P5DVzkbZGQdR8G2cyLrFnNwo1YJNsGtpSpdTmgGUeqsayhShVdHtLyj5XAT8e",
  "key1": "HUoYox2EnuQrSjdKs1bxSvtQunjatQLKn4ZqSJScJd3toGKLNLeP7ozKrChgYZojAUxE7CSvBQEpmK8X2qPvPDv",
  "key2": "MpJMDeqcG8BdpYMmXxfNxpY7mytKXj64b4wffjdgSZLGLZRetEgUUpuymLbyqsYACvZwuc4ydHE8DfcSTqY2SQ8",
  "key3": "3qPwG9hkdKyK7VnJc65iwEcwUva8ML1JJwRXpMVbmQr4EYJdJBgHFmobYRdgaF7iUnQHMnhEE6GBiM8h1a749dX3",
  "key4": "5zCFCvn2LPKpwYMwSRBwFjmanuL9RtQwZudBQVreUrvCfCKTS8cQc9hjnfY3c8Xq7fcuNxN89kJHCdxy959PJDk6",
  "key5": "4gARaskZWcNmYMWoKX9YEtdr3y2x4gJg3BydgLvnjxLYdS7CUsMqoJ4nriwGaThniQA5aAMWy7Xw128TAMpRHf33",
  "key6": "2LVWioDjMS8FGDX1ToLQRKBaboqER5WSYApw19hLU7dL2xQZHPSczCftEd6c3vQn8ebp2JjHRpDzzTMVuZEy4LYu",
  "key7": "5UNSrvhmDeackNPwFV8gchbsihh1FkawnMeDTe5ayMMKwjLqqT4NJEL9u3QqH1yjX1CdJKhBvjGMAGqVwQrjQBnS",
  "key8": "632ar9wR99Qacj8edNNSZ7hsNS3UVsePdrQn1J6VPyofAqesh56Bh2s38HkamY4AyQu7nBAqK76QpBcfHAika5h3",
  "key9": "4qmueCr7bwbfpjN6QnqYzocxi9uvRTRdGa2H3pJ62ERZQ3QpgQod6yY8TCcmgJ7ugiozTndekxamS27pQj4CUnjr",
  "key10": "5S9cAG4xwbV8Qe72igoDCTpVYDGyvSCS7CNpKBT6nPjCHfeyHgqq7m2wGpfFRcAT6mY7bJCzt3DiMx6zqLBZJ1yw",
  "key11": "YujHdDiC5gCx2YYpJ5mQTe5nAk2a4wanyedBH3YDqnE1vhcgfonfMBSHPcpZv5rkDvz8mVh7gPDWsDT7JnUyUXm",
  "key12": "4tLank2ET34zrxGw9vjBcz76P9KjL1zMt3cSU4byw3ZrNAv3Ry52tuBcVkJvtFMH2fTdZKUUSx5VeUL1CESMBmpc",
  "key13": "3iQa6xkp45bMfyz2FiN4jWDg8cTecJnsg4efwJZkPh6urZJU1jgkF29CpbKQBBTihCKMZpYb98LUjy9H6ifwDA8K",
  "key14": "44Fv8JaowgVe8sSsy1VwZABpGtPVKZBJbeiLjCr9GgpJkS9AzhmEUkc29Q4T1uo71M3zaQsKxpyxwM7epYp5sRDz",
  "key15": "34jJm96ekvyBZKepwqhBjyG9oWi5te6dUisDtUhc96JJsxScZBAVzjoWhuhMSow2ACfr5pMicwsxXY4yCfHep7CF",
  "key16": "3WicG2FiTdsKFhXh2gwHsZpoY3MsuTyzdH4SAL2Qwwc17rTr9XURDAqnTLhU6ijFQiamDHwdVYKKwPUN7vbPJ2a4",
  "key17": "3wJFNsmvYyJjiPA5tzr818Pwj5TFiqLcpKD4EoJKvggbX5q7XFzbvyype37nbfvRwogRF5PFEvnDLqiGrt4bPPEc",
  "key18": "2wwGn2aCmYjTKLuTWQQm4Dq9eeYKMtWFVpxSTU9hYynsejTTGNXfQfgzUQDDWswBqXpXSqopJ8ngnPAfvod6NrpF",
  "key19": "2VYtFcjhQTipLo1EHjhpM8mT8bv3BgXssRPbnUdMet3P1r4BtLWyaZL3JLSZhF1K4N6bzoBs7sFEuAM5CiqxzABa",
  "key20": "2YUsyC13z2F45Yom2UV4ypg8vHzYG4GV61utbTmAdxubfpK7HLqZkDdHsqqLsPXpBsVqpRphzMwYnTJVs7FuxfLM",
  "key21": "3vBTuWNTZNB3KE4fJvRu8HCuu4AFUSdiJbAcA3sNr51vt7GCDJ34dFR6kcPMGMNkLYrk53EZmLNGtP5moh6XLhao",
  "key22": "5S5g3k2Tr3N9Be1ATckxrCh1TKcgBYvquswC2oW2NMhzYjmURfCGPKp2Q4XY2vEAV4zwBn6x9aHyps32hVwZi7SD",
  "key23": "zXCU9ERLayKdv5fZmPbtsDJCwyMNCTKkq3mVwFWTeZ1BD1fjGyqThfsn49LU1FpwcWSF5GyykRQSKCSUuBDfuQM",
  "key24": "25rKTtxLxmTPwFULH4uSkQqc7ZFJcNhxq4fFZiAC2d6AgC34P7nR9mgLeQm6ZYqU8D5qHvmAMKRBpPfqHPNujyUx",
  "key25": "5ZCUUUhrg2HM4PBJqNVjUhy2QL8ojPrSRSDSFVrC1HdsogFpPY1oDkkA1F1US49jMDdDgP7W5ksDfmcTj7wiSwAV",
  "key26": "4XHKsPJGf2KDFoMXWiCqriZywG6Yqsyx6FQXvzB3U4LDH78xdhF3sV5ebyBYrWaz3dbscZwm1SG6AqSgxdCoVRJC",
  "key27": "x3JoAic7G9VQiahpr8JfsfxGg3Dn6SBwb596y2JRfYtpActcyzuDbaMjvnuwBNuyR71YgkvcE6eXBSDMF2TACMY",
  "key28": "5Q2Yqdj3eMjy9RMiXgWFCoYk4v3jpxrMeeHJmDKuPkLFet8QYL1LAMzSBW1fjKVwz8aq2tHEUCzMsbdPV646Dv4a",
  "key29": "62aGnzu5Y5Mp48F9QjCnPL7b8BEewtF22kCJVaYpJ9co8YGNZYYtsYEykefiQbHDWXNxQSXbqifFnZJa3pwRZPFZ",
  "key30": "2fc1JoxuXHeyA2DDpi5P6tsxzftYnctsgmoPZetJXLkLxa6gsofApAXokxhsXka1LXVMKGxBXKtdBez3DSohxazX",
  "key31": "KsUT5L58jq6BWCAdmV9f1u2BfN7L4o8nGAxH1h4vPVhUQmuNQjBo55C5btjFWpyPtPWo5AbYarJxYiWiFBUafr1",
  "key32": "45bwQRrMwr5csS3Yft6pRiLDqesHL3mGWUiTrRPXm2Ti8QJ1WMCYVpGnz4qAbfBZqGnneiCat8NMqX9VenF348Aw",
  "key33": "5ivqQnowc86ShTxHrmaj2xym2jAwEv2JExh9915shFW4ukFbSpY7AT4Nigam3eeaZNikb2oHfyPgzQQXntr7czWo",
  "key34": "5z88vA2myeKt9ZTcQDTnFbJy6zfw24ctyJYqmx5SAM4mSsE5ZNF3ws5NiJxkQMMAMxaEndmgFZSzftDc9GgpVeZC",
  "key35": "X79MctxZrWjEkXxgsKkEqADMiPniRvrfhzQ2BnbFDB1Xd62aTvFeDgcpWDL1ehrXF5tuVcewLY5HoRDj9jXTAqY",
  "key36": "3cQbihkmDpyABZHYKo2XyRxn9b6xXC39Y8yDmoUMXTRJa9emS5b16dqo3ZkFBqwu3Jiw2853RtBXARzrXgLL9EQo"
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
