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
    "6uGnPyvPDpE5MdSxf7WzjZd6q7A12oisKkbnZdxv9rraZXUsSwDsEioAD31god1Vhg7ayXtqvC199CGCw6mskLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hX6HMV1osb8ukxqAhQEE99t1WQEAUEywewouwhVbjweCbfbufz1byFQR2oxEiPkusU2cCs9TV5UiRjrsgEJwM92",
  "key1": "2AneRK7CmMVDhriaqPzx4tgAhkbKELugDnE84aY3ydsEKo2UJgmr9uirYNTLZEpSiKAesMLyB8MU5GsZaBFbJHCy",
  "key2": "2XGJK8AGeEGNTRsPbGu1P1rdZdnek5uFfKrrj9Hi6o4QFYXGQEQhbGLYku6iDfSfzZtKHmKkc6X38cur2yRkwWDe",
  "key3": "2v34he8u8fp9PUX2UoAE7YxaSEUuzhogvEgr6QskDHqbwpSMygZhJ3H43RqQeDgKQ9w5VXr94L2EKycrwHJn74DK",
  "key4": "2335tHEVV4XHNFog3D6amV4DT2b28UqTPUivtrQpqynLH5jWkHa9YpesS2K9MQn7TtHejh3nJfmBXmeTn2TvtD2J",
  "key5": "3X8k18L7LB4zUpi4TBVHdN45wFyt7XZ34skCKYaE5oPRaFHBT9NcBaUXuFUcomwB9z2PFcUYzLuvJe7JVVD2R7xb",
  "key6": "3ZEbWbPec6cKDaq8EyxC2kmhd9rns5BbJdEqJuhBXazKXtU7tQ7XzUd7n5HaB3dcbjA3Qh8VxgqeofW9qiEAPrsL",
  "key7": "2H3evwWYLm1A96mwWWudwwPUC2dkjoXfCpCLiD9xjpHujDPEyKW6QooCYd98DwmnWLc25ks6rCV1NVfqAiyDY2Se",
  "key8": "5FanYe2kV4q8TVrgPXPzHHRGgtykdyZVdYHhLXT7jtT4ah451tf4ciUSN33eDDsaxZwAPEmhcjXVpf3yzx7T5Cc4",
  "key9": "1pmhoKt6K2W2ErVpbnW96XBeBd8HXidkij3vJFpbBzATAJ2jrofncQJ8rgUp2tacXNoTz2MhuAk3EGW5ed15VjR",
  "key10": "2dgU76pDTmf4LszXtJBwV1S2avAzrLZf9Aao1zLR5qMFYSJykNj8siqQk3eM7sRv7znqjdyQpnFaHCMue57P5AYe",
  "key11": "3KkGEyt7wPP41YGqL7WK4GgNVqKschQqoWLEPtDCfkV72eVRHvxAnfqn5RAnfhDjts3T6Wt8u7n8Cc59Y5kL4ue3",
  "key12": "5ZRvrHLLRHYXsJMSMHfsbHsPZGKnXp6M84TarLQ5g1UJAgVLCkQHDJC1yp9ynYQJ3Ekzw36WsrWeACcpxgsUrRnR",
  "key13": "4Rhi2ajJucc9XuMUyPmPuNoyvtxEpThrZntBq5gUSVkr6QNu788Ah7dDoFiGGduYSUGQxQb7vyLVXv9uiue2vXjW",
  "key14": "2BkNfBcivwPXJE6EmUMEVoCuiG5YnN87B4w41rpaxqoJfVscsoyA8dSTbnL8Doh8Qosjf5p8Py9ipAFtKbaCMiTk",
  "key15": "5NgcBcQ5beshwx6ZoPJZUdbeGSr8nqjF3eazUCbUMECEWbJWnXbYd1ns9kpXGdDbb6hn3FHBE6douHtgV6rWGMfh",
  "key16": "CcdkRwTkzy5NgWmxGP9gxUYfUNtzuVXAwqN4khC4qk6UopzFrwWtfp16YTGooFQuscrWpVs9jCMhLMYTBgTtEFK",
  "key17": "2uUnCDMypJKzDgt8K8G3F3Fmoc3k3LJnZjtW7Sh1Z6R66q122TVbYHqVtrCAjsZHCaQoyaxqaVh6e8RvAS6W9yyF",
  "key18": "54vtaNGVbAGxP4BPaajQWrWp8VSjhwTaKRxt5rAmG4zmXFNqDwNdva4kUzCv1e6towcP4ESUNjgp7qsHLiZzNQ8f",
  "key19": "5KN9xMs3Df74ktYgNxCmcAcaz17LwFFf1qZ86LQHVv11aXv95sR7Zb7FJcPDbxkFq2dbp15mteLJ1M2DSjjXFDdn",
  "key20": "2qvkoyKsDgAhwSDUgGjAqmtZwt56hRsFqXW53RJ5CnMuwRyAz3Bet2jCo58YJLseik8zgQe2kuRzjcVE9EHAYc8r",
  "key21": "2iTSqivWF6p9WhwareYoa2fTPCjNrFbkbu9TFq3kWEfLac9Srr1T3ASTYNNgp6VBYhG6QCFtk4dU9xwv94oJ1aqJ",
  "key22": "4ST2EysmBMRh8G6gkNuAZ4vciZ3iWuS8dsE8Zdrsus2Dst2YEsAZYxZQgLWnnRQcELTCXThnRXaz4RBo7cJXT4KJ",
  "key23": "4zwtdbfK9nBSFVncrwpkDTT5T5tEu87EqeZFDXKhGutiAuVsM5TkeEWSC27CkCCp7ZmKJuipuG8XbHSPhuQjqapS",
  "key24": "3Sazwpv7b56Z9nV8N2xz45bk93Ua5L69zuwYFGFiYDMtiPwQhxPW5Uj1mTRKCjoXWKmeyc9TvZViWxCPiLdV62x6",
  "key25": "5SVei4K46VKm96UYzMHu3Yzne4bV8rA1gqyxSDQLDhoekU5nk1JzRf5sYCCZv6HSVKdaaAu4e2eqvRAhRMViBfke",
  "key26": "447Fg7xgKenqs7iQk7bT5uNzsTuu5kfxXaDQ6Hm9NdPcd3nr4AjujTGijptxriqCpi7LWYKcp5NDUiyP4CBQGcXH",
  "key27": "3LY9yvXfyDyjmd7owamHmtqLvUXAL7N9oEmQMZhy19GgMTkHGidcv1oxYRW8WG3UBLhp6PMKwy1X5vZA3mQPy9wd",
  "key28": "yTw8s9tQcEGgNA2HF9VFopyX47RvVfXXMoNBe63XU9tfMUtCWPYYCtHkfeogK9sHfRtW7PMtcu8bXRe45GZ6ZT9",
  "key29": "5bULjQX7CvAA7AVMuKRRm6PPT7MPqs3VUmEXrQbLpHinKPwyowcabPuL6JdMKRmrLdMsuQZA3AHrB1PKZJmACGuW",
  "key30": "67mwRWxvUrNceaZZka5ZhgkVnepgjjAHg2cqnqrShwayGY3tXexhy4pVCwDxMCa19FcdoaTAf3CZW2SX1AtK6aQB",
  "key31": "59Fm7JKio6hwwd6ivzQaPYhankxL3kriNdMJWQT4YG7ZES2JGADfya9yZ2LoCMUnSv1AExsovbRc22AvFDg47V56",
  "key32": "2dHJh8HxrGvZMCDzVfHvyZEsXuHBvDk9s4JhDn21qRV1JBi5XfA8iQ18riG2aSShwmhNFe9W4doN3RpiYsVS8CMD",
  "key33": "49DM6UDxFTCQ38BKG6xnYf64Ed11t5PJZmkEiyuzVCs2RdgHvWPp8qhJXfdkeZErF21UsGhondPCSRpTCpA3oCNk",
  "key34": "Lmpx2qfXL4TUpdMc6if98NTuwj7WfbhNEke4A6ZyJoNXWEMCWiH8jN9Pj2jUNtPLMTgcex24A6meRyNxymR8o8j",
  "key35": "4uMhf3y56PDu7ydWVDwrbZb5BJvYeiTmswNjb5jXwsqGdp8adwhpQjxXzYthSHxNmqJRiWSWuxvt914D1StgUVvA",
  "key36": "2tG9fw1ENRvLbA6nVHMiv1NaHxA2bYweL1wJSeu7zSGH7GjADgrbu5Ykz5PNGypEEVR8kW17SK66WBsCnL1ji5f5",
  "key37": "qzyPbijfo4VDaghCeLW7q4KDy7m757H1kJ5NK8qumFQPpn1yQJKHeUD7QactBZ9T6tuNhc5kfdTEsjsMPBE9Usj",
  "key38": "2vyVaxSwcvfoYJw6LoLUEgzFZskrzDFD8KvcZh8K8ribq23dM9hQtiS8QBaZ7rc8jt6j3ux4iRrGiAvEePFfcVY5",
  "key39": "2QH6JzrmrhZdvkvpXyNVNeSM37xUyRWN9MzmZe99Yso2MrxA15SySZVWQYog3jbGQsgmeLMMEmKYCGXfLevCR4Um",
  "key40": "366xTbMWEs1VZ1MB5ueGvzd7KdtnzEbyn5CCW6WTpetVxv5DQxTUJhz9Fw1nfVJMUQ4FwNsAVKm2kCiRbLRMWZKN",
  "key41": "57SU7RJpWq822pAa8vJxp6diD6Hfpe4nV3zHxBYjbjskzbpJMsajdfm7a9ULsbawytSEeNUaGEpFwvA3ph2Tb3rh",
  "key42": "43icax3NyLDR8EdwsqqjMEKa3JDwBabGASnyAiiAvG32Por5YVmZ6xj9tLXyxiB5RT75tip3WjdbH8ZwPTfyN7Qf",
  "key43": "2zKzsV1Lpd1keNdvPoN1E97U1jDkUfF21WbGyVrjwhbZrSAU8XQCjQMV8Lm5No8Wm8f7F5U7JrrKNPPNFaKvqwMC"
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
