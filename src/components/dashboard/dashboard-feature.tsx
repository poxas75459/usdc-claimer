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
    "2Qi57NdcB5Pz7DNRTa5FDtFrTk9ZDM5VGeeq1zEwfmLoWEt2MxCEwKkFEq12iEbUtTb3jGZnS9ZwnvzDNiF6utYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caZ9izCGcyTJrB8T2WhH2oRfXgXHFS5x5BntQNzycLfA9DVdiHfMG4iMPZHs3GqqS2i4nm7iQCtfrotYfnR48Fw",
  "key1": "3QvFQ23asNsh54bMjy5nFEDg9vG9xbgZdWTtx5XD92Btr49aZtoSVC4Xanb7NCRhF6qn1SnSM5PxQLM3d1EzG51f",
  "key2": "7YcnqW9eMNoH6HjxoZM4aHSAK5dZkAkTV2R4xncpddgs6FmdD7LEnyKuYiNpuMWMJsfmLfkEEpu8EF4HXA6B3Mc",
  "key3": "hHbayBFktonGSFpGQ5ikfEWnB3LnvHvbeydSkErHggTxFdySMZh73LtfH64ieAArg9uvq9SUmFpxYqJhQZ8XRQn",
  "key4": "2rGoQiq9gvCt9BsJJztR8VAwAu899jSXw8cZLuD8mWH8UkCKFaoBZ7EheZu9iyk3K98Mb6751N1Pk5E1ewZFwjxJ",
  "key5": "4ay2t1nTuB2YTd7hzC3WFsZjYuyDzA5WLUjmEzKAovFEWgUfAwm9ZNdqxzRj7LyMBqxxtmFPCPPSPW35cBuj7qx5",
  "key6": "28WnYCUQ9MNZpdvYdUDdtwwRaGksToYDQWq891ALw84kAuPyPhiFPWKFLeLnwdWWm3ZFR3YxnsTuigWZoQPNfLc7",
  "key7": "3dzggpAaKJQFBTnqbZUAhigNj1ZbTHWuC3ZBZ98Fmrdu1Bju8CPJXoSqNTfiyX7cFvj1VF2gzdt42wNxxQNZ3s6z",
  "key8": "4atdviHLRdS9eLNdba2qqYyjEm2phipeiQ78W8o7PUqCHnkSEBJbJe9L6NzttUecnV3oYNEiWX2ebqmuVtGs9Mf6",
  "key9": "5q31Ck7PA6BMCPit9vtMRxGJASXHy5U4NvCxs4r6wVRQacR3Ln6VAV3nFR396qEPrKxGrXFn38jjgk9uA7mzLA1E",
  "key10": "5uLqU939TwQFzWtjUF6zo5tZALLyX56Go4eBvaWdZWTQSGvCWEAZqg1Kc53EKmg6LoMPYapsArLgzETxUB154wSs",
  "key11": "5HNiLeJ24BaRZxxc6crQtQY1yGyR3PgFALGgy6XuYBdJKKBFFbq1u6Bt29itVxnwaFEmo9BM7i9RZiQf1wsbe2Qk",
  "key12": "5BG3jAsj1am2geDtScRvxxqcUMH6mtkxhbGkX7pV6xraXAT4MdGkqTupnLTwWuUv5szCaPxBM1YoXpaNyvKJEcew",
  "key13": "5HFZke2kSDohq7AkUa2PCzHFUAJjZjLwFvNT1ubkkfS4krNiVr23KgTmcfrhGYEij5wtE7A9zrPJMDwj3zY6Cso9",
  "key14": "3RwCLH2RbV5b17w9xm8JMyfAJtnzZKEMeUdeM93hVKe8uSZJuWv36FKfT2ErVZCohHN7RnsrA9d21Lp3Ye1aF5s8",
  "key15": "44B2hrrPNJi44DBh2DzKzDwJ5VMGaD4SgAPho8mGncAet9rJwtABKB1JB9ee9oamCF5mqBCF7uKURsqkqf8MhAcD",
  "key16": "DJQy4K8QooL1jVuekDAQ8ejpCTdK9Zn9b3Yvv7RApMQLEP5Xhvv8HYyKBwdYZsFvgVgqNtHirvwM5gxodru8LcB",
  "key17": "5cbWQqS2YmBE8oQd11kA4cd9FX2LUNU8vsUqgJzCQVWqjxQNoeEaPxKszNJ3Dvq8h9b5S7C2DDN85Z13dCLaQW3m",
  "key18": "5eHzgUQLTAbaMkvMfHsNcXL3hPJzy6CPscGBnf5aDEkKgUsPvnAvgAFXTjVeaCD9gmK7uN62vxhyHjMPuedYKo48",
  "key19": "3WqbLrKGeVHjZY1pKTFddu5ZMqG11sQQTPwnhua72Vu5wgANTHE4RMfnYELzQuZfM9NkYt5q42W9zjWgyRuBg5eT",
  "key20": "52YmQcZtvoJfaRXFpn5UDo8Goyi8HjTuL3K6Wzo4cWbG6ASSoYpS4oifXLo8kpQ1MJqRzAMhrvm73y2HqwWUpjz3",
  "key21": "3Hu6VA1UmiGBY3ns8TZpj6P1FSvwrfq7oS48vscBpAvv5o2RRxwamRB1cRvUZq7PoAGe8PhdfoJ5FBJxNf3Zs1Qx",
  "key22": "5tpKWQr9TUZZeFmPBhQSDifvyUjyR6UzLWDXZ6StY4JDmzMYhviFHpAmTBV37N1vBb198e2e8p7AUWcALyMxyACY",
  "key23": "3ZoSXLyZvubXcxcyACrqcbJFU2p9EXehPG3fyYXKQDdtNxLwmz7sQe3XtcvTVCf9hkpnaqSMNN9AfDeH7n68FD9u",
  "key24": "RSTw9QvHN6ggu2oEsz5bBGb2VoxXVF5GTrfzmXLXXFrotSUV4MqZCBq6EDVRiYZR6dyCJREpANo2nUDwDtWey1f",
  "key25": "3XBcBNfkLAqMi7LhG68Lckciun5LmRfrZwd6B3vrrSzKaxeKDdPN6i28wPhZYxMsTSTRi83wGAMrUopmpwLoiqo",
  "key26": "5gvM32DoiXCDDcDw6SVYbWz1iDij6XGiBJFNVNpVoixWYHpWc5jXAZGK8MYAkA5mA6iDxna7uSdB97DqyAcJSXgY",
  "key27": "4nYdpej4RdVpA7FBuodcokDGmhdwJgYcbVaYdfFAr5KY4pSAPKNL5CTHc6fiAe7DKjmh5QpYg9fTdgStTcNS1Sm7",
  "key28": "TtENU3s9JfgxgwXqSRJsKPorUYBJtd7YgSSiGnsPvzsLpN6JF1AD5HwiU2Pa8iCaaKKDLSEs2YeVXjzTPowWRrV",
  "key29": "2ZUnFsBJrZjHnRhQa78HQeUMzXgowWdtDfjY93TheX1k8F2BQ4Jjb2T9N6KLARjWxp6Nm5oh91Xhi3MYSRBbmC8J",
  "key30": "2rrGaaMXrpGGYn1wpqAB6hmbyj6mE2EtgQMLUSKkpu5TCj8NYG9H5jKsVZ7Gfnq8Kr5wmi1DoaQyqPHmaDa6kqh3",
  "key31": "VTAKQpCXzNeKDb3ZuFLvSirtNAnBuTbFr7dyRd3Qj1Jq5VDfXhWTXn77JAs5mXgNkE47QSvtNfZPXaMyFUxjijq",
  "key32": "3cX4j82E7rvasQE7oWWUgf2n34T9VLqPAVkNqFRZDnkFo7et2bUHzV15oG6rNjM6Hre3we7a9EtdhzXiswKSNiV2",
  "key33": "4872RH6MFboEPQsuT3M4YR2V6BYuys5LziGNAqRvRRX9JZHeeRudQzy9hUaNRVzaGwh8iSoBUXLc6adChw9x7SXM",
  "key34": "5PigK6qMedUnB6TLT2jpKMf6LbChb5Swn6FeJdW8ebraFGUvpHNTFio6QsjgHA8JKaAFc6jttJZheAxNkDeqpfDS",
  "key35": "2e6T5QG87zJd8Aw4KrFWNgGm83yfywjQVgQFhdgJQdF3EpArv2ceTxgBFMPWh9tetoFK1XtELZWRxstj8B9SPqXa",
  "key36": "61kdh7Nhwu93VmTDgLjCG7dt1iWYfQrzk9ZCShD6VZF7YH7xTfuH5r22tSy4aZZaxEk2LH9xq2Rj476rcaWHsDUH",
  "key37": "3rMXrQt45H55TBpJNZ9D2XiBbXhtL2GEtEFoVUyexdYkxjK8LiDKieG1N6uP8JC6gbFX7SA4coq1hcLQLEGNYfnf",
  "key38": "2fjq7TTvaiT4B2VPiNDCDhWHqMkzQYNeMGT5HZp3fSCbp9VYXuHkm7HzXJ4kAKN828HYFx74hHfhGc5eSh4SF4Gs",
  "key39": "4jL6rTBobb38d5zSTap73en24Rzrtg8DDZVGfQirHq6EPR5rJuE7GxtDuSrmeRPX26Zt8zx2Bgv56mit2QoYdFJV",
  "key40": "3ByNrSxDMhxLpnCmANm8NyMBHY9pEX9YBXoPiQHrJFFZdp1nSuHPFwMd2YNTZKcqsm5igT84nzZToueomTzSSbjq",
  "key41": "52CrBAhEkaJF3hBgRvPrrkPUuANi4wKYHx6BHJ5R2tBcTKdwuTax7hpTQDuKi9ktZ9ieF4ZRReGgoAe5rAUBmBbZ",
  "key42": "osygJnHMDDQDU54TytmUtnMT9rhC6vUCzN3sp6pZQkHy5xYnCgcY11AKLjWqNYdvJMjAeNS8vomk3QR1yGvMTai",
  "key43": "5V3JZHPUvtDWitHikx8jKcjZLwL4bxMGLFmYeVbdrC6yDYuZ6wRWVQU2PDNGsuACX24Y3hMqXsAtnhDKu3NoUvKW",
  "key44": "2ApjQfFMTToB5Jatdiqob833TZtNM6CmawsmCntADetVa3BSUNg9YEWan5DqQLUQCn3Sqf1ev1KkHc6ityWsvFcL",
  "key45": "48sJc29KeTZLvV9pTKZ9hFLaQfmDQMJjq5vV9eqNtkXw2XW3XUfrv3uhb6cA3LPqpVkbGJWnCNuBJWFDzJn75wX7",
  "key46": "5LDsV1CzzhFRFSq3s2HRjn3HApiTcBGC96um2Vr92Gy3mx1rt7qxcWH9Enru41moTLFM6BRM24CD1YeVWFeyPkfT",
  "key47": "4bkzd8eVqxPFbU87muPB7xyYruMNkW8c6n4E5dt4maZiCX9stxto9bGjmoTJSuubBHSWP4EeiQkozooaA6JDi47A",
  "key48": "4Xe5Kkr8VJyr32FCHniC5s7ftuqL4EbMdHf4SGBeQ21WUHaDncW2iphUAfPoxgRzAJxaD5r44EptNgqPsPNbYBw1"
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
