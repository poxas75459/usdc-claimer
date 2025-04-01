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
    "4rdUBLssu7FycyjzZTa1de3DfNZ6YQro5KXR68jSi5ciK7sYarL8CqFWoaUuTudZh3VbkgZZLxcZWsZPpsVgvr1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K5hJwGdtimVYueVgdCfiJiC6kAXALAgb4HvZM42jqoMiZWKtBRqazBwwtp3qv11WHFhrsBm9dfnhrXot9KBre2T",
  "key1": "28FvuWE2K4yRtanhCXsresvDbXTNR1BpxVtkmxUETnmesdC6dmgCZHcsS3FnixFoQtBkaBBo8CZ5QVBwhRvLZNRj",
  "key2": "WK6d3ARxyqKeopfHMKSTuUos5TLbipn5JEznZ46NXK1rLSNZTriMAemJQK45DfvpQenkSsP4LnWCPAHSsxabe2j",
  "key3": "5RNNQ7WvkAxm9XcZ6XvZwVXs5EfUiSa7MCwZxYfv3qwjZi3HrcNEq4Xr7pBCJmUaQRKkU4d36gUgdQc2FecDfuDQ",
  "key4": "2UDxhaUAFA6H3ajzfqFUKtEmjQjscwyYbYy32c8bYNycNgbJneMz5bpeW9SYuQYDPR9cGEqTWE139xjAHaCjt8Gx",
  "key5": "5saqEQygev8ZC2Vqopx8orXPz5Zpvod2B7SjeupEmsECbR91RggyL1d4p92548KVj5XEcTv6T1rbEtSVR35pJ2pS",
  "key6": "2FkzbAHxYAnNjkU6bACwGcwwUAfjPswB1GbKV5R3bhjS4mrsL69XHU3G2nNq5fAnJ9BCEW71N6L1WXPVX1S1t1uo",
  "key7": "5VfosXPEyhKH1TeaeVnS3q2AYrtuEWMn5W5Ypx5a9Cj9FfNdYaPVarQRWFFHoPkEHsdU39drLZpF6pbb2XzSRQwf",
  "key8": "2CbXAfPXBq4XFEnnk8oGCHA8Hb1AKwExrX9eHwALbNbMj2xzwD9qd6nmbcvhheraa3TBTRmir4GZEaBy4TX3ESVQ",
  "key9": "2HSnyBca2sCBKJAgwWZbgTR68uuZUHzPmWJMBpPF5uLJNfGBvR4Ff2ppSVUrbaEG5ZRTLMWDUmxao1WntDMhvPB3",
  "key10": "z2mYfV9xPDnvwZv7X9EPg7kH8zZNRnpHDRmkc58t4cmzsToX7tFGmKRUx4ttmyGHC8xQJdNEkCwHqwHzHP8trNZ",
  "key11": "4WgDfVgWYvSreFs73jA7uK5suXqRMu8BFPVs2oPigWY6oguH3nVBUtLJBcHwyM4ubBCr9RSAfrrpVFGrDH5coKnw",
  "key12": "2efK2tn3gyMNb2keAJTZJTVJYAfvuTRCkwVsvCg73qR3ikAm3hN4wtfqBwfEcyyJJehkihRz6FunNdD5RH4P44QP",
  "key13": "DGwuaZZiED83HoVBdTH6wcCCg66aycdwC32BhmkGUihWntLLTWYkQaWzLv74D8KnK2AuuqLb4TpcFAjDQELZMd3",
  "key14": "WR9rzGLimN9ZE7uPetdrzZ5TgHV484NVNdmMitYA4j3SP7fcuNASJoasZrypdHNAqnfJWvJEsKK4743hqxbxPRn",
  "key15": "sDXSbVQvosGRAMKkVbtGQppfPNrQ44ty6aKZjBCmXBdNNcUE9u6tq5yYWX6Xeqqydw8gdV6AzVDhbniDAhaS44e",
  "key16": "2LBKVrUSZpkEkpQiyamUrH1PxZE8B6XFRmSpmLrjiMYy2oykXxpkEsy1tNAPzFjTWuMUD5D11cBLheKhXaoUDEru",
  "key17": "27TSzMbVknkjKsN3eM6fKK53B6NBnQFNtKwbuMf1MKSgjDMqVoNVNWRx2LFP7cPUJQnchkHpe7cCNP8F6ESb4Rye",
  "key18": "36i9xQBY98xaqgomoXS1UUpcvSvNn7NkijPpXJGZi8Hnxtzfrm1rYK1CTEbnnpnk6FmyFA65q3k4NSsfNXWdJCZj",
  "key19": "5wqCv9A5Ys6VTBR6Vv4V1ZAMc2Ui9aY1tfuakTdTFiSm2NnzkMvvGzYm6qKwdDEjjHd2HCS2k56MbV5xkwiLgWfZ",
  "key20": "PWNgvwgudJrPf6UcBQ2towUqj3s1GTtpnCnrDcTyWJNpAkFQURFTmBccQmPiVxi4R17ThXRc9NxUbo1XFVMPxM1",
  "key21": "2NXxkjjPqNUvojtQZW8kpitHC4zv5GTNmpiz1Zrw6UwWk6BJoSn8e95nymHXzrMDRkXZis9UKQ6RnrBirdvYvKRk",
  "key22": "DscKb2P4Tv7sgZxmHrMipFVX9a3BQWyoAz32Q3kDKz9vgs7Gsv2VwEZUvrGKi6se2v4bbLuQjyL6BEWo2Ec84Kf",
  "key23": "5tSa27ZQLbA84T9VKonFq5G3YcdhrvftUE4s4dSfcYzRMLb9EuKXJREuKiesGiC8mLrt6dQ3B336eK9cShQDSQPt",
  "key24": "LdcZpj7VRrrKrTWW7AkdKLgqz5Py9u8oXLtrHb6wZRayUeGMGEALJANkijm6hB4BGxmXFxmz5PZpoXNKfkgzxML",
  "key25": "65i1dDHk8mmmE6y4vJpo5iBuTUYt3DZhpEwQmzi78KfdnxAgZC13PCWv9ykYbHcy41fsJKq77RFFA4jg2e3CDsuR",
  "key26": "2M5Vbp3xgAuLFXgiRQuvsGfcDr11NS7tYCCELj5C3Pp7iwuj1mtoSnHW7jba8Au7dLU8kBQCg1idtaYf8adWLVV2",
  "key27": "2hS2HxEeniXvWS6us6crUsva3zsFm5exgnqPAYqt89YpWwon4ncUkLmGVARnEKN5GG9R9znqtqsMMe5Wxo17zmZd",
  "key28": "5F5VrQCMzZy1azfakN5hkopCd4uSyJH1XhRjix79ha5d7gnZPNBC5XyfUrPCVMUBetfHqEG5wTodsPbf6DcnBgDQ",
  "key29": "gXLDordTCwbjziV3sGEimFw25QD8kGwzpuhC65ogKRGBTbz14wfZnSEkUsnPLA4N9VvD7H3tLgiWNuX2yXtUpsb",
  "key30": "3h4bb2PGmwgXUT3Cb9ogunqGUdWs8G5q2KwBLxPk9sYusSHSgyZ5tGJvFNuLVxhs3sRp3WcfQwQZAATdohvrCjen",
  "key31": "5y5humG1GCL5kEPnADuYzZeCugZ2eeY8EYpMRoNzkKRKJHpjrgHz3pUgjMVQRZBtWuuheCWxsCR5APtXbvnQ1gLE",
  "key32": "3ecuVBhxt2pGjfAPRiyCsTG36f8p9oDMEswySSjzpgtHumKWTCfrXVdsViQWxPszPEvET3dZNsDUvmyu1xJcsZgx",
  "key33": "3ma7canGJhJqhZqk4og6GCGHksBYSSrESSjo1tpQCsYGesa5zVUxrEkFH79CZnx9y53fUJLDos6sDgCJydRPU1cW",
  "key34": "4Wkk2eidtVuwtaCrTbq9YA6SqiutrjBkHsoKTsSKa4vYR1rKg6FRiNnf52Ym2V8chRD9E6gi25wuJXYg8D7WCV5h",
  "key35": "jN5dxVwXJEMSsTThDgJN2AHZbbC5bCs3ShJqXZQFmdEQoKwQrt1yZuRbiP4JqGZX3BXP6uhSWHzVE2h6wwzAuMq",
  "key36": "UDp3nnoQHzfANFZz6e6Vb8eU3u343KTjx9CjEXwSMKg675bnRqYoRBytuFE4GyNHdNeGmqoJmijrsC1qXjxqJYL",
  "key37": "3QFQUzNgENPgeNymzuJUB8rHrMRbHkZftQy9Em43kHR1EaxL3hBMUsBtTbNMisMnqvnF7xrr6EPLYb1RE25tQB5e",
  "key38": "4tQ3X2fuB85LFUH3ni7RUMafMUmzi3ZVp8KkxHkRK4wR1m3S1GA75oJcSxVoMqYSkdJ5Lovg5ab1q8Ts7Fg2b2NH",
  "key39": "3VQUkaFmSvrTu9e6hWQS1TritxG9d6eRC4TsyC837CEDWezJpkAvZArY6En5ox9XxB6K3qkYJTH72s7fJxgtr1ya",
  "key40": "4H7PkUydD3atM57JrfGfdVQaWeNSPcB3faRQeL4KVApJVrgyv2ZuMK7dbLnjTXTBFKRENKXKUsdzbEn2bRefEcs7"
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
