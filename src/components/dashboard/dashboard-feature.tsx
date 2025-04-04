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
    "4q8FCfXpeGHVoWL7CF4Qfmdk9DrDoQck187GQ3bmVUAj4vYdSkfpjbLjGCuBf4Ss3knLG5xy3CMzUfZU1NwstZiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Lnvfm1nbMGryEfZQJPBCRJrDEX4j6CP6BTeBJQ9y5XJZr5bNKb1SKqBe2SwVBWAk51Vrh6JqBEFeEku8pJiKMb",
  "key1": "9mTHPPSHxYcTVAaJUfq5ZyBiMoarte7CHALdPmLJGsEvC4fWhRNdwEG3kKZqPrJ6aX8RQkndGaWexVFW9tyMmdc",
  "key2": "5pqSv31cXo697UxcJLAdkirLNtG14jr8BcEk3SCZBoUYRk3YiZM2yme84qLfPjKeQZXMDqGWkoVng4p74oWrwD57",
  "key3": "64Xm9Rh2cGaoHs9tdzNtMQKdZ8MkHcRuTjwXcHQRVdqxr5myseFCZHLJrPKeBF6Sdc24c3DMi1JWVSycJeS1tdFe",
  "key4": "4HMXJzXy97momiKrsq3ZU8HS5jfQEu5rRiNqTZ3MtgWzeHQRwy9Zb2RWMfSKj4Ur7Kc5UTdNGiph4JNGpeRjWgzA",
  "key5": "2doJZyjiqGZ3X4VHvdsBz4Abheoxgpa4hNs8MZmP4Jv5f6CNPcSDFrRdeV4CJnBg7bUQ8f6s5c6CRQzkRcUucnn6",
  "key6": "2ytRk77sZHvjqVfpVQf2pTdz6N5oEJkrjBfD6vixqAD46TUMDjwWyc2gSutSVChGWYKMuUsb1AY7yAeBKxuhQoWG",
  "key7": "rbE6RGVaDxmNBTGTsTuCD25PwLpjGXj6CtWETZJ6UWN73wAqwhmj5iwz7FeyQY8QMpsusrSr1wE4j2P5qNLSkGz",
  "key8": "6q6RnzzLVHCZJroBzmfekodmWkpgefFTG7434Qi7grudWqmj41RWJ9rRbuAFzrkwZMVeGRGW43tepbzY3LvSikr",
  "key9": "3c9sVh4aWJKFzQykevosfhurrp1rNZbtvNWK2KvcmBchWZREVvzzuUaubGCMizBw8ob9GqBNPgNHwSRSW9jkcGbF",
  "key10": "49cDNYqWt3UV4cSHUMg8SaVcEugFYjb174F7LWyvuiaBb7FQxKBQ6x9yL3to8omZEmoxLRFYQ47eaS6AwuYX6ruZ",
  "key11": "4EoNWA7SqVWyPGnCsVx7g1Fg1nhyi5nMygUABrqUAE5G7XP19kf8iqHKYKg6GoLBDzx9aP7gL68g5pAjMJy9pvFM",
  "key12": "2wdLveAoodc1rFKABEtxmkeFVgaVDpBTSqXNLwFk7BgTmkjaCagoba7vyk57CG2bSmL8z2SK6qQGZB67W5z5a3vx",
  "key13": "5TtLDuQpjDeUmBwdKvW5R1TGrgvg5abrZKcs62bhzP4mzrSGqafovge1t9Jq6MeoJyysxpZhaziYGSdtync3TEy6",
  "key14": "2Ud2Hm7CX5qmfv8wtf5JLJHaSA5MvvkeyeVPPUjbhbkoWAmUjqGd3f6uTpw6ecTg1pVeAKu4oFxF95cyHqSiguuM",
  "key15": "wCK9mfQvtfzs66Exqc1kNHKmtx8HU53QMQ21A9Z9bpLPwEEvkcbN8bKerwNQuQE6vwVT7GP7K8mXcbVvaZ1DfDa",
  "key16": "2SNkZ3eZcq8z9uQDKphnpTuunzj9VnxprHfKMQ4P8wLaDKoSfVTJ7PnhzQLg3YFZZJVviyVS9A7kZjkFBkpb2mvs",
  "key17": "5EVsnn39BWPzfXVkeZKcAtAWyMxZTmC4J1LM9638B3qFZg1vwUfcvpSUUmiLVFknPKgRAD56TVnc5zs7zhvyxspf",
  "key18": "4JPHqUepGWpyCfaAT5r77U1SEPHymnYyqCSJaoMgMTdXMKEEKLGMZCxu3q3UHLmuiJ7c7ruUErDFMCbdmEfv75CU",
  "key19": "1dtRtRwhHJ6aCQxuyRc2ssvpgbaLfCgwGrkX4dmwPbqNuLNkMe2J44W81oGH7qZT7m4BVjNRc4VB9CrmSN44TxA",
  "key20": "4jfo9nsvsaVW5FG259oMjruriomWhrLUoS38K2RPz2NjuXEoNjszGomFMdLG93hwVqWRYtuUpNjoA76m1HSdruLA",
  "key21": "akQmnfrEKixvwtsRRK7b9B4aYeTvfVEV5CgYeBhYCsqmeDdh2yp3Bvfhot1kGjowH5adxbN2NRWH5UjjChLxe3Y",
  "key22": "5pHKCeL7Pk7YWEKVY2eUXxPzDk35VPxy7rtjBrotCQprmTCPwQ89GWHSde2gZKpxcu7PYH7Q24DXuPpGB8WZp43M",
  "key23": "5FTnYSAai1mdj32S41ia91f6AYTi87gdx89ve4omM4iY2hcu8WosW5Cb8ZoAR1qQw1bsZpWEPjLZnGQWGF7yuHLC",
  "key24": "s8mNWSJa3WxWX52bzdEsKnrzQQcnVvcmYf3WKMMibVsceBa9XdsvXypiPzWFRmoVeKweWjVz1ycLA4A8SnCraig",
  "key25": "6mgRPnGdswu1u1NmSwHngbrEMmFrihssGf2WcwFw6pj4EKZ7squPZX7hFcdSkgDE5friZmny6LXM8eKhGpb6fZx",
  "key26": "5rwqyGTbmojKh72hf7ef5Rf6bMBaeofhxxk7GGhtqPwTRkcbNenGCLpdTiPBWFb1qE9neXwppp1DT2mQveDKuiCP",
  "key27": "5wrAacGHdqz1N5rANLnHU9nXkKWAxGmKPEKfDEfUT3vUmGcsuAswjcM9Fju6zxYcJtPbPFYND19VDAYrAboHW3SP",
  "key28": "3odDVQ2SZg4rEpUzMXiEPbv2umk9dF3paQGzqBzQmRBJDdh5bwPkGP13BYYj9ehNtyvd31AikUFdvUnKP2kYN4TF",
  "key29": "5vwE2wiXGHCKMnPZVWjTYKW84uWwzgS68FfKaaZLd8SBiGF9utpZs7h62fofHe6nuVBkWESD3gzUZzJeQpADR7Kp",
  "key30": "64W5kfwC2YPWsJxhRUF6JAwanQxSJStTPS9iK9D7Sp7yyKL5tRKrSv6xdwcvfLHcTFmFRDnXZAJJDLJHVEsDd5Xj",
  "key31": "3KYeUvvZcrwBitTukbQ4ueFkytUBZ2h3cU6uADKaFhq3J4andWytbNnEQF2VsarERW3XCDJSRPREnLWokfZkUUGR",
  "key32": "3f33XEGZeSkUipnkBTC4jQ7wSVFk5cdPA2JMmGi7HAmUS4t8vGMnjhmjnjGm1qKDcJu9cuJicrB3paXyV5KojAib",
  "key33": "5c2J7bTrPUsvvocMq5fSiz2eAgwsrz8nqSETmgrp81VYwtTbgPAabJPR5vjyUi5Xg6H46vZS7nwZDKyKkG28kkLv",
  "key34": "4uVmRoCGoemnq8FHSAVkQGLx1cteY7MRJaHWMa6xSfRixYLukxVAaFUYYXobBXud1Gm4i68rcF9UMEPaJn1yZqth"
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
