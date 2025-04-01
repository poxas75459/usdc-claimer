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
    "652xCUvd81UbZox53wz7Zb3oyTQsWmnoNzgp7Ha669jZJYjMcmYhncc5LY5BsDYYTermCDPQUpAiiuA15CCPhPyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bqDgesTjYnmzs7DVibAk1moGiKvqaUY8VxcmMDLrp43WZD27gWtd7KiusNqAJiwaDsRSTdfA6TjfQk1s7K7jNa1",
  "key1": "EGZXE69NBduAtJaHcqV3y5mwWL7SCZphQCsXcZY48BJEmyp2yFz5dTKjnBd9uk7ppYsHzu8aqnC9GrLC4pWww1h",
  "key2": "5cDaewLbiGNsJzZXXw6d3D13mY3bc9bLQvzA2qkL9ns51UK4KSgRuknX89NCMDK1cC5CsULkkQ9WRuHdR5YPZakJ",
  "key3": "3bi3Yb6rod6Y7i8Up6uCPGcQe39p2yyH7MBcZgDGK8XyDenXuPvKkvB7BCa5ADZqch92wo2YAd9RfJSqxLgCuvJY",
  "key4": "4GCMjZfSi32rTTym4MHEWNELau5pmPEKZmfQ9K8tNwfLomkqi8pPcibP2uM9L4QKiEytx5WhavKvUBWqJgPzne7V",
  "key5": "4KuiZV8X2LcXEyBCEVvqPHwy8EXAkwJFPCHxDrQPzJk4QrWczsAk5uxHJ4gMc2U9EQZjh9qXrPeFxaJSQSV4djFZ",
  "key6": "nDBZVs3gD97TfgXiysqSVCbWzZYExqdFJxwsZHbah9DSpgmYcJaGKVatwRRnZaJwjZpjUgcMYA7CzVU7sYFWAxg",
  "key7": "3Xm1ErsGSDHDvDyGUgyVwWXMDJTktdTjePmcrMAPVPoM4XgYCEwpkWPJuhQzywpdxLLM2KfJSGf9Bn3qkgNbQTjB",
  "key8": "45cceiVxdjni1t9GRTQgYdvWGeHCj5ACBg5taukbB9K8X7qVBBp7STZZs4Kwh91yFkRz8coqcPY9aJC7bPREZpoD",
  "key9": "4dm3knEWEVzJMRtJ8LEyDKLekvFGBn7KHrRrYwtrosEWEYwn1zyTP6h97TDWwupAhSvZ65QjmNPmM8JTDs1G7PsY",
  "key10": "5jyuznqrStswbsYSsYdYcrCPxccbiERB18R3dkbbcyiU3GThUzvnwvg3dHfVyhBVUXEJDZNXALjC5D6hKtAufr4Q",
  "key11": "DPqLiAUM3H7eTjXh68vKe4mcm7Bv9FRM3FvgxvffFTSHRPNPPiBMzDxRLon4oPsbiJsH4xcXXhk3qzRcbG4wwEW",
  "key12": "65TLKM75qmdmuSVwr3AqAVfCBP83qVg8sMyCHYRatUTxvXcQnWznvrLXRa5CLRKacAu4S5LRESRXBMYihnChynMX",
  "key13": "3gRuhDYCXF8esXiUmpjjGuSJZjkhMsPLxdLLcs4w5J8LTpwDZ3R7nPke5oaMghe6UgwDkTk2r9ykC1wrZbcKHXX2",
  "key14": "59CQkAiEkwN5h9vN2z2PLAN288zeURGDmF5M9HNfF5jmkUbPPVAJYq3qCV3xSfGUehoyqKayFZCag6aUesRRaZGq",
  "key15": "3u7DWHJPqPULK2jDXVKRwa5YuE7d9QUAGqJFj7Q8ZLLYLwWbpAuVrb7aYgBnqvAu6q1KKp2YepGu4KLsciUVumN8",
  "key16": "3AsbXYcZ917LFTZVPEqUC3GpgUQLpUi1cZSNTr6rEbXm1wGa7YwbCfH3chMgm8yLkzGgsNx7rJN7PM8GQCZqfvqM",
  "key17": "3711iTWAdcLCw9XnWwZGjnm7FUbvWggT4z4GCWWxWppYCKTgdVFguairN6cKbEzNWztkxeimZWN4Uz7wyJP7MEuV",
  "key18": "3sbKq8nkCjAQFsDyh2t9nHEmbnywZkivSVwDu1rfHGtxA8ECqSMeDtUnzCX1pQBVEFEZnk7vWQYrDemAqqPzR6h7",
  "key19": "4zD1ULkxME3xTrEVLjpRB8sD1sBcxRHyM5DzfXRWEDPb7GQpobSQqxVYLA8Pi9btL2xySsyyHh4uaYATcbT1dqjQ",
  "key20": "4AsLKdkgnPkRVHoanBdBNpY1WekyyZ13CzPVzEbD2Nkp4nCPZeGqvAF5wX3fPDx93LgdJ4RtZdXDP8ok5MRrR5Fj",
  "key21": "59GvUcgwh5Uz69yK3thLhsScDnwL2K9MCUxo66Ba5XyZ4Un2TeeSD4Zih6z1udT2V4HsXen49G9Qqxxue8JCrBPa",
  "key22": "3ziswVTSL8b4A9347runTZgnRqDXHTD93dshVH65CbHwh7iP7uXJiJkwCuNjZt5voo5fTMijYoVCxBdq14rdRqq8",
  "key23": "4HYmGLiY4ywwe7LYGv2HjS8p5WZ5jqkUSKqMsNR7kvTvfyemeHJt99zcdbUHGW6Uihnf3vz7SZUKcVbCpj2qkk6p",
  "key24": "2dzSE9vSCJVHRZjgWSy1Ri3ZzXd2Xjr4NXvg2coRYJiGQy2kTqNQq6usYJ6NCiNMKrpY4C2L3pWQzQ3kbzvaTBRX",
  "key25": "s2Z9kSmuyJsKG8MNaeZTtFGY8pAr5H8kdFAjTb4AKdGBm6qySEPUTY9e5cz2KQQRan5iEGqotEXy38Ruuo9cYek",
  "key26": "4TH9yCsSM2eT9tJWUtnrKqf3MJfrFhg83i9AtvQq6yzG1F3XG6LohdspwPKmWF8rMi6VF9jECUQm9Euaw56KmPi2",
  "key27": "3QhQKWLJq2wArc4JiRwoJeHjvz4N7fgkaD8RcvA9GTaMChA7NEjoUdcx1CumSA9uuQtMYgpeWCS7NUryAvrT8ZEr",
  "key28": "61b3aT3sKfQ3QNYNA4PHSfKK4fw52j5R4Yi2mQncpmEtQxEiuxreKeyNJEeMVg1vjW8hDmLoQBdgDSZEXC6bGcr3",
  "key29": "2MhNj8s6YZEcFwnKYuWA4LUT7kpAseDgUdEMSGiD8wJ1bqYT4iBgos9XNRqKEHuYS6k66rik8hAVassdvwU6vL5w",
  "key30": "qxopAJgFHgSXsd3mfg1iEbARrVxpeDi35fdGx4BezPBpWEjLWpkEXYergLG1jqLLhhEJ8669KZDDYLLM2b5G3KD",
  "key31": "kQoRQBvwEPZJeHtgUhNRigVBomQQrQWZxpHJ3zzCcXQNP1xM5bKG393BaMT4S41VpPg5ikYck8g4KgCrNzjmua5",
  "key32": "4rD7Hrwem8ZjHMPD8aDe2xAacxoPVjMxMZAQwzc7LGE7CThXVGjrXhda4e2o9b5s7H212j16NSSTWZ9scDzoZnFp",
  "key33": "5Nua5QKhp6MHwKVUNrBeRbg7krFPAohT72Q6AUSzrdcbmdm6G1L3wBFzQrigwQP98SkKsz12c82YyatMrLHa4LBs",
  "key34": "LqVZeRRxNr51NvPN7L9utC34DkpB6MstLkGM6fp6LYmppxTMXvB6MeqrpTKXPMrWBqSmfJ3JASjvrpYzTiKt7sm",
  "key35": "4cQtDrwAcT7AViDy2d8s4NcdLPPNLfgH1X9kRdNBin4o5vbAmrCUbHxq5CktnHjdKuQsc7tqazhWYbDx9tiSJoiD",
  "key36": "62JGQNtX9SGsjnB9ARvpknbviQtpqfoVwDuHQTL9idnC4thkuY9g39VGBZA2wbYe3eRocxWK6QsXVd3sQWxxMVah",
  "key37": "4vu7VoCiouGUn3MS8X87PoUrmcwbp3WyrWJpLMhKxVc8AXh1rmhXuWNMssgachmxP5TrAEWRC3SeQyEyTjoE4vLH",
  "key38": "UopazDwPWmJckcf7rkECBe3Ubji7CZa1N4ZEEkfqf3K59ZQ8zuKEHZkyJmN4rVxHV7nrNMqMTLXfyLd2ySEPvMa",
  "key39": "258EmbEHXj8SRV2UFUgw3K9KK2eweRmd9V4puhuCGwmZvv9MwnHeHt59FM6tiVNi5kKG3stWrF2WCkxfZ29yFaJ8",
  "key40": "4SJSR8QQzkyR7HHuHTqTpCRfAbzssEm9r6DQkQzSwg9DpDEX2agETN8HxhN35Q12Dejzn1ArFMWGa1thmviiroG",
  "key41": "3o5Hv51TLLtz5ApUZJzgd3utjg4wEeF3MzMrADe2M5ocQv3KESPtZuhhPDoKokzhhfoZBHQJWeQejhaf59U3UGMd",
  "key42": "3uqH3JSH8r9cqqoyZXYyTAcEJpThH2b3xdhRGBoUKLX3Qr9xSBQiPxNfyJc654TJbbQDgPRKFtb52csKirWwi7hb",
  "key43": "RZjw68uZtK5qeCAHdRBJX4KxUBEdQYHedLt3jTSCoAPArYGpffp1tzrDwThcumTdMn9x3hakLc6EiXfprLEQ7fG"
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
