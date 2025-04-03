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
    "4xekfEbr7Ed2TZSEKQwpkUAEDN6kYBWb1gZcjkLVpGAoMJ8YVrAMzciNXTn44hNGUmejSKbumgQSnxcC85eWSf7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wb2KTNXM82rP2t97Sz3khgCuKAV9imFHipdjgDoGDmiomKs5vguneVVQsihP8kL8vgh84mbg7HLxr93e3Cbdr5w",
  "key1": "rooY1qaeeqzibv6gxLMfzUhEDavzqhJ8wauzMzLu8bJ1BjUNvuf6iBboZZ2dYAFFZUvThDLJmcE4fqaZVro2MEg",
  "key2": "2EJFjbHNKtzETM9sjfMNRs721AGQS3vzp8MDxDyUn2NMgyFbptaaSjTbwb8zeHFTxGs2Cc8oeqdN9z99TT87Mjxg",
  "key3": "kuQHVfwqo1b2R1fCL72GD8Dn7mfDEqaVwigJ2JVTYBKn72r4c1xyjB4C5Tc9Ad4YsK715ghaB1gJFAtaXnjGm49",
  "key4": "44nRUoDkqiZaA8h8wTjkiKYMwYiA3vukiU9SGvibpe1f2kx6aS67y7kCM6XYYknrwcR52Ay1PccSudTbWGQ8mjjq",
  "key5": "3q4zXbZqP8Mwnq7n38dVMfVQ4rKYidacgvLCAcvamrTiNVW6maetLZZDFD14H6nNtkq6cgLQTFjK5A1Sm2vknLCE",
  "key6": "q8Lw51UMmcWa3Wrrs2xR5ZAbZPRbGzpepGuduPm6J86dJT4tswQbvt3wAUji7KBCFnqmneD3icKsLDLvjHjuw7t",
  "key7": "yrUst4JQuUzUzq9Mp1fHT5Wa1oH2zeixVNGx4uddakKN4wdYXfdVYorgcpVGut1Wj5vfu6SBg5nq5udLiPCjzoh",
  "key8": "2nMLz2rNPX17zdXeMr5VvydQzp4ckE9E3JhdbZzTQaFgMAtNBi4weWi3rwAcZU6HfHLRmyvGMosEz4Wu1ShPhvYh",
  "key9": "4M3dwCXRwr7T7yPNPqgGRdfLnva5GdaMWV93PYK9uWhUgGe1LFkj8i6Pq33v62CWWHxC9FHAuu7kWhNak8UWxWsX",
  "key10": "5wwJKa89QWeaa6Goc19qxcQEUyZvHQhiPMAWEKXvtepxu2vD8qBbPvDcmXgr2abw618CZ6XEDFLGzki923EW3SQ8",
  "key11": "buHeryNMPrn4AgFpAd1LHHJ8ipAEtaBt5fywArQ4qjzoxPuek3W7UrFaehkEnXn5ynW4jDKrfQ6F6KBiz3QrnEw",
  "key12": "2Lk86wJJWDHN1rTzipEqgejWuArfxcpT9C3LhD53yHyHd4HVS1sxZC37vmyL934JNzfyGeMJanBaNgVvnWJfpJKb",
  "key13": "4M61zZdvTRxuhwgYnd5c62oHeDYDyxVi8L5TymASo3L7YqVGyDMfvJjs1hFfhEQvkM9r1WtJUuTfx3eKbk1FZNtc",
  "key14": "4DuZ5rWqh35qjHQP5mXnLAPCChPA1sexM7wAEbJDycFYVycw1h9J1GEXRynbsbMDRDzzbuquqYLHRf9zZLm6H2WL",
  "key15": "3Gvjo2kAo115PNWcPMXKorFUVENpzGd2U9Tsw48oW1bYyYtyRzDfw5g2GDFjuNujaEtpUJGWkqMSb27TpezmYaDR",
  "key16": "3kaJywF4sG1s4d9SMYsW6EAGcxXDKrXBKBBRDX5LM6MGJnK97BxLYATDSkPh5XPaRZh2epirDvsUa5fU4A1Joj9B",
  "key17": "4UX8inNbMrfEUNyNTsf9AVk9StPScvLQjMqEtupPjheiKZ2pzFYEZegCWnREtuhiYniZdQ7CKSuFqJ6YCB2AdEkH",
  "key18": "5dXDQBjSwrehZPvBm7fkCYfMQzPqPqMWGV55Mj3aE97y5ChgUH475tiDnCeLgq1PhJragf3eCqnMtH9UpSt36rEp",
  "key19": "3AeJKta53HcPhjGd9Bz2ns98qN7C9YrnBE5Lvo88bhDbRi9FpmwdYXKfHCADtJX1oLHjiRQ7ukhZEUHtMwE8nvnN",
  "key20": "ziSLXmic9AfTGUB6SKEz9wuxmC94kujYs98TuYAmEdSA3iW4z1Fjs67J4c5d3Bq1TMeM8vGHuJB52qz8FNhEjhT",
  "key21": "5BF9sq8rFZY46iRsXrvS1FZGRGSzDugWqe2VoWFm5ZKwis5UM7scRxNuPJ2SJhBgkDVd347GDsiu3D3tqRHwzgbp",
  "key22": "45ubhENVLVNLjZiQBcrBmfPP9nSUJFbRPrB8fhLXWYzXTvS16ePLYjzd2fThR2miNAbWbkBYoyGDEUmUT6PZGUvv",
  "key23": "2hmVm3EuUoukx6nADNdxG9fG2h57PibY1Xb9hXJg1m9xiEwLPcXaFz2EQdhG5xqX2NNDUrVnRMNVHUhJYSEPekhX",
  "key24": "245nyUDiVh3LYnVtTKLJBSyQThhnN3TJUjidtgzduVjrbUwn7S7D66QzLasgApfHgqoe1Z6rwiJEuzDevVnELiQU",
  "key25": "4XCRLueVnhgqq31h9ukhq8Domo1mLa2oBbuBW5xEpeDCM5jR3DjiSXEcR4FiPPZtMzXGecDMEFbyAZtB7KvZ6kPc",
  "key26": "4KxotsiqAH7erWBgBEyEwRpGDX2ap4sCZnPXMBFnc7zFS4d7yfqsMCyWj8zcPMipq4Y9KqaprU4DGD2b51PWnxcy",
  "key27": "2qgMMH49yecDspetxdhHL3wf5Y9BFm8YxytLnhEokiZQS5wiZ1dRnbVByExr5AYnQsCvF5WvmT79vNDbUDdnqTe6",
  "key28": "HcLSR5XjbNT8k5cxjY9Q6WEqd76sevawBo45wWNCnuJ1PKodxY6xw5VBfbetWgHxe1jF1GMfH6EGkBXfHyPHUeM",
  "key29": "JQmULCfUNJTupsDsuRpZtWKpT9r1mZuRkYvubKgCSyAS9xTUEsEZGXfShu3S8g7hQ4Rbd3JcANk8d5HxsuSy7Je",
  "key30": "CQ4t3xGboRj9bNM78Zteg2mVrHRmUWKo4iEvD1TAdenNaj37QLP7GZEBZN2c31LVnR3C42QQas5PjSgd3tHnHeS",
  "key31": "45q3CPvV9qSfS5v4yCJK9pQ4RVuUqYUViBYDrrVJAKCWK4YDxwX3KyoKdiF8R8BLNKoymKMcMwjfoiJ7P6Hn81C",
  "key32": "42mUdThpkT7CrgsUX7PKMMGgfkLLjQJRH18h1ex1SC41JtM9E5XeAXfkLKDgdpSy7QdCjv158kCW9YtD88vGPHAh",
  "key33": "4SXYVhNB98n1Kvg5CE86BzawSdCWrsdPSPcQpo3diMm4JZUzR4yx575NfPkNyoL4pwvpSatXMeahuaZWM63JXoF9",
  "key34": "J46JSpnp125ry2a2LmPSMGmNFnSdHjkzDkzPXjs1jBcs1M6p1aA21dUGkZ38XEKfmttHidmrYcfgZ3TN1Jcmrv4",
  "key35": "ZLhKWm2GK5CntqFTQXchxecq7ZuwiDrPjBgLWVn5bHrWzcgXFbQ7CPFnLtcRTdeQNtTS86TRyK8uEtb3rJFeDcK",
  "key36": "5VHcSPFN9xZFQajRSwZsr8PXSJ4Zu12tPx8HFifT11dEx3vquKejuW5thw7qRxx6oQ2qe4NYiDzgJmYrPQxPJgdL",
  "key37": "5SrBkTZ53ktK4AfsnuGAVEaxhv89Y69aYwAZH7nMbvKw7UBwDHZbYjG9QrWo5x6JW4xCf74YmaA1kFzshxZ1TBLb",
  "key38": "3VYZfEEqAuuQEyrbZ6NDkMe3KMf6uoib1t3P9UEoaevK3Q1hNjju85t1XQ7WiFAtLvThPaBvJpQzmorcZ6R5x2G4",
  "key39": "EscnZX38F1qBTWSPH97L82Zbgcj1NrdWW65aac4jQoxSEvWSpYjbPrPnBWqkGaDvivhxqCETNmVXBgPrq1HQERX",
  "key40": "4FBmhNRBEa6FnHREAgaJFPy5U99f7ZiCzNgvYuGpA82HWZG4U9KBryhfrjmRCwuXctQ8ZTHqFKHs2Rqeq2ZzLSjm",
  "key41": "63jvVbwsTnidTWXmRNyP1NJGKfbhR7PooJvqr8WnDwAnVKjmozu32qXVcFn64fhZtXYxDkVDGQCHU89nUKMJ3krB",
  "key42": "58KtodjFEvK4J84CtEQCFM6im3bE6ZcgaU8zrDQV8vzMd9ffQmGaoQJUsXFECo2MynmthEhwLQ2qoqw8wKJtvRpB",
  "key43": "2m63D4a8DpALCbUYXzwZi31RvVYnKsuKDJtjMit8xKrGc3a6B3371fVBNcZBmqLkCd6HyoDpu7DZMUEJUDBLZq6N",
  "key44": "4FQ7gpex4WQAAJfxwsGTnZU2TxZaMjaqfZXWBPkByvf7xRzJsTG22qQj2tU542ZG9tiksb4dK2NVfo4XtfjUJwiP",
  "key45": "4G9Qqk8dvwGAZx5W6mWfh8iJQp7tWJC22maq6aBdxRXCPshnMhA3m6TnDXKJ88PBRCzcu6QN8inHAKp1t6BAbi9v",
  "key46": "4NqZmMmAh3GMMiBK8hhTt87uS52MS9D3ZsxEXJg2nL4qw9TPC4umeqHTYo7Z7PwGQqHNkV4w7i95fCFr9ZzfYNDm",
  "key47": "ZD2LHLuxBhz1KyA7HrA1mcYC2C2F8BVT5XDt97X8hxHtVApMz9Vspx1FtiD2v5GF5d8kt62NLccSzopHosPAegH",
  "key48": "2xvBfujwt3YF1y8VEf5rhhaWSCEX9Xgur1AX1f6xf7PGMPpjSUBKXFKVsnttas6CYa8mz8SiJtqfXab5SLcacFHf"
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
