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
    "BV2cuFcNWHT9ho29yx3RRiknnvaZCpv5SUMtgGgT8B4yuM5VUCvmzuQUKcj45ao6Zf5syKV7if9Qj1ADtmEGfd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YkVfPT8DPDwNRfEHGKEoWHFqKi8G29qZUHnWJ7mdpNeSTtcPmR7EjMuqym4SJiCM6tMZCmd96sPVUD6adz2HJQj",
  "key1": "2DwRfRKXmBK1tqMrrHK4qDzHcczuEdj5XsM25wapprFx1EZP1XjMu8ASKXquvXHFNiGgjHj8xuDon8oHJQij9Gay",
  "key2": "2RtpDY5WLyxCMUSoc4jerJh1B5hrKV38cLkeDUXTdQ26pWZE5ZhrU6CFdjTnMWAYRKQYzv7bF51WKkNCAR2kSyx6",
  "key3": "3eebpDqfaWQWKq2MxRQp5ZGwTdoQDCrsj1oHSR3hvuDPzrAaC2hfPujSA1JfR1PrTAHk3HDh54a4bzEsGSpBinte",
  "key4": "3DZQbLdUP3RYEAZG4WP18VLbWFJS3tvkWNKP2THf524e8SuaEjAgPP2z8uBeAYvhsEC2Bpyva9yZR5Y2yeqvxUGQ",
  "key5": "3GCAHirqt37kq8AoF79r3A9ht4hy4TbpsVFE7jZmDdMh346X7PhwdhFwefA9mYMV4bpSDhr9VeaTqnJXWwtNvazP",
  "key6": "36Uz5BLVFnNwoKdcBSkhLmcUiWJ4W1wjqaY6Ar29DNFsmoFDfCkaVjjQEGoVC6xVEYMv5ifG9Ey2T7YBQMrCz2hi",
  "key7": "TP5pyMTCo5WhbJRDf5ZFrujVQNjqNu1ehEgedg5sA1dUBNyNxu2n2mWEjJ2Qy2FbeEv5Nrg3tBfn3Lppr7nBAhj",
  "key8": "2SnLywcCq55ovXiQZ5xyRQ95CDxhFN3qn1sjNrXAWq9fBcW4UFtxUHd2AHpqeJaSkV6KfqgkRFttwfrvXZrsCGmB",
  "key9": "4sambWhA1NLFJvoFUTVwtP7se3tNQd2Aj9vh17Wk9PVBs2v8NqPR1xpvoDqGJwrGVjN5DKTc5sGbnzdHPdWbcek3",
  "key10": "51AQWUt2Q8DRwKwiL5rVJFYca25jyH4bdfjsFhmaHE1o2Bt7eW9D1ZqWebkq54bTkMg4GEE7JmEBzzDaqi2hvfXB",
  "key11": "26V24P4K7vNFwBJKsuJNHviAmRrPo7EWd2kfpzkaHpNyfwicnLLX1K6H8RoYzn3iN9GZhLTE7r1GQX7Lae5KND5C",
  "key12": "4xnyTmp88K9kKGFcWZTvLRxYHzZ8dsJVwwDYvok4trRptV7uVAQgx8zBQx14s4DzHqpF98i3L5GUTybLxxJ6HkWV",
  "key13": "5roBdBeaJqHzCz2VfJNNvdoMJs1S2rymDuDRc1oWQ4eNVHpXFYxGTC43sd7mRzmwG2dKYowad8KjyAy2CCKfXR3D",
  "key14": "4RtZVs5FJ74pqPnSsoUcQU7t2kQVRM3Pf6cyHW8Q3Z1mVekttFCmMmy5ofgkpr37ygds4Xw4yzbVQFp58m6u2FK5",
  "key15": "4xEkpi3DmavD8Q99AgQoFrwLrk1Kb5qZezqeoKdAbdS6iEzW6voE4KmmFVUnxF4ZFUoptMW1t1tpSty62EuMrjwm",
  "key16": "3DrAByTfYHwtTaFPRpBstbPpM8ajty7mbDs1ZpTbcacm8u3oyVAJXFMxLwYYuqVCtXtAAR8eBD757RgaPS7SpvSV",
  "key17": "2dBLMRP32r66uCkdV4MWLJrr1j1Bsgn9Cug7LKGMWKtASuyTvwvxtxZn6DxoG1oTb1kp8K1e1TEMTdCJPPRMP5gm",
  "key18": "vnmUb9Qs45tWv3BqXBjmNzYFP6XSJtpx6gEvuBPVeLJ9gL5fvqndDTdi3UkQvgSHjpQdS2xxnLQRjZfagRU2Zzs",
  "key19": "5DQqC1eLMzp3e5ChsVM5mwmoxKUCoJ5tFLViyfidUjoMQjs9n9yCjDNuUDAfomLPr5zEAc5f1s43HMuPneSNTCdF",
  "key20": "34vGBdyz1hCyUMkW3yMdg7ah81x4Jb2NL7G7vRDu5h5i8JzVvPKv7Zn7AsfZPcb71YDa24J3xPtHvwFzqWRndkEf",
  "key21": "RVyrTwzL8EzitSVgNN3DGBDK4F3hzBFDLKRD6uAvdC6rfKdNekdHtBpv7Zqj6sdMqQW7LAXPdrXcDHMsyB5Xyna",
  "key22": "67KyMQmpghN84FJ7JdZdZRP45mLQYzG8GXurT91PRy6sTsMduWHwzNc2KTJK92WHi3agwVfCV2KBXfkjSaeyNVug",
  "key23": "37nPeH4Wb5mSJnYFgwwNfNsY5mnVcYeDQ34yddbQJBs5emkmSWL6JS8eND4f3hmj8p1ZF8PUbBjJSbi5cUeH9Uws",
  "key24": "rL8Mu2aPWEXX7jXTw3VFGoA42VMnkvNSfL31o4A1iLYRH9w5KTHcooTDMDpuwFeevUDGLST1sFUW99gRQ2SBzq8",
  "key25": "CYM8AyaxknBDkrwNQ3VKCaYSziUVnBd86dGbbRDw781EkR7Qj7sXBndNvCampHkcCNrrRsM5oxuBrg2ZPc8g6E3",
  "key26": "cQLwtFXSE7VdKLoakryaoebytqX6f6E7auxDqCU6Wzv8asQLnvGfSnk2Z1RP7pPus2tdNL55kHtPxejccFmBw1S",
  "key27": "3WhyVv9tX639zxW3FntcmHVh174ZbZNqgY6iTHJo3cCbt7Kzj17p2ZbA15pK4BV49ZfRVrYnfSqoQsVeQLH4sPsW",
  "key28": "4oYNGxDZRGTBPcJzMbGtFja91ezD67etrdwSAP9d42mYZuuYzRDGL7NdMy8QG8NTzTnNTMHQMpE41jieHLbJPPgS",
  "key29": "4oUr2nRFj7AeZUD7QSvgX4tXGWhEVCQ5DWwaE9L3CVu5m5Ja5TFrrSDjmMUNHMVaPdNnzdY6rqSLSj4H9P44huSF",
  "key30": "3jncAYjzbzpkY6wqESJ3FAZdHVksJNi6EoedZ8GDSqEctTqyW43dbd2xv76HuddZhcYwWf2txSq25v3kD2DruDxp",
  "key31": "4D8UkrKCpCZTJxJLDnKCM4bfMpQQd1Etdb5QAd8tRe7nmo5KjZgLL8XBZxgrwtcbyb3HiT9uQnReRbFnSUbSjUeK",
  "key32": "532YT8EfArUUJw42LhtuQontZCbzKZmTu7baDjHEt9o3zBhQM3j2UjHBxQiaG3ntbWVpb3oYkErLGoEap1wc7XuQ",
  "key33": "pSWA2ATdDUoREntx7evZhZh2e8Db9qUy554uMjfmxL9rEk9kC4xhPDNHozF9Wz83Kz3fCfzTAnBNGmBs1XoxiGf",
  "key34": "55CGWM4R9SCsNzgb2YuH71bfg886KkyDty7N5PenanKffWnfuM28crZhxZbJS6GRxG72m55XyY8A3XsVaFHerMH3",
  "key35": "5YX7xshSnQqRrdCDEPnwgbsXNjpfRWQniKQZ3YkvGpYTnQ7FErhjs6QCtcwP3MZ2R9zo2pDB2BH1toHMppLFe65r",
  "key36": "ruoT5ukUqDA4w1Q7x7hVvSsxyDLdqiytmSvmVb7ZgYjff3we8mXV14EK8W7mh5aD4SJJhb1uuiBGUkKtFMx3MVx",
  "key37": "42LobKMkw4NRUqo55nRr8iu75634G8qwKE9Bnc6uHaBns4Sx449mm1kJUEUubpbQJsaZGn4WkWELZKfDWu9Vb3UJ"
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
