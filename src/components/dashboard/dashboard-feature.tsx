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
    "4q6XiiiMEX9JvLabn2dHWvW2pK21cRNTqQFJer3nqSzRHq6GqbwP6EEAqgNvwBH2GF6yuafCR8PWLiQ67gseFEtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wF7Bp4u5UoTHE1XtrHV6hjaE5DnSAXVyKeJjqDnvWHE5FuXXs1btLy4gsMw2osSCjzjoxV1pwLawqWaFXNZRKNr",
  "key1": "31fSZbXDga7Z1rUagL9euG8gaB9KtXLnMi9aM6wZRSQt6QaTPQTXqPAUeMxzHny2rdGey7xMJSCV9cussX2jaTM",
  "key2": "5rTwfQpB6JWkjAMu92QpkcQycbdKV6LwpwwJWZpDyR9gpHucue69uNeBgqm1NpRQ4Yx8zGWwuBdiZypgBEBXPQrY",
  "key3": "gwadCqTMyNMa2C4ATN4zHih2KojJZnExuJBsc2sGkCB6HqfQeFoksEQdCVpqmniGbaWqEXPyKAKiyx6tmYDq31E",
  "key4": "rgX9HpWPshb6Sv3CH9uvTrsuPppTSCnpSMTTKT7tJ5E4xfXpjUFS9ewDxhzrsHpviD2mz4ogt7RXt5MqP27T8yQ",
  "key5": "56ffK9Tth1eRoABpdUaNJ1FGaxa2VwvYUmyBnefeGwBqqjU3LXuryx9MHADpbJo6DQEGR8jratH9nYM34cTPYS6J",
  "key6": "5i65Zre9tRjaEAxcMvftT74iQacceNC6wXShcaC3TFGTXK9aT1XaGyR4k1CesSPvWE84CgRPAAHd3isAGCnVokRi",
  "key7": "hdZTwAioHmaxwVUwkd8PYAF8zEEyLXs2VeiVSGULJj68yikH73D1qLnGJkmmFjcRKhYwA9shWiqhdfjRuvoGmh8",
  "key8": "3Hdk2SpcKHECBijRAKBpn91bdfberR6c29tza51wNSC9j1pPNYhnS8qcyZAkAhr2nskMJin15qMXCvE8jhzYTG4m",
  "key9": "3GMpSP4McN6wGBSHVg6fb4mwNM1z1jhuUimNFMHcfbTyojq2A1eTqbRK4oe2j9GuxaM25pTR5AFFSNAL8y18hAXd",
  "key10": "3CviQr8Q9XmUsuauyQ1LmZiYiJuE89tjWmizBg7X8tw6fAfmBb6hVAMQM34fTB1r88snDT7k5zfdkWMbJK5cD76a",
  "key11": "gTUedNGKwq3vG7rqVseHvcCwoEXaotEwKtbqLQ4uFLZzwTDxmFdMwLeFcWhnz8gVcZu31cMAWADsWPZLzpLzumy",
  "key12": "ZBPhVo7CDAnwyxBkucNjoWTEWgbChpXHvK5ZrnGP5Ugar7bop34cQN7QXy1X7kDmcFMSgtJg2ebBVKAcMcJRtCc",
  "key13": "3qMgfq5xZ6LLuYK4bTeux3e4JEwcL5RySeCkd5EVRDob8UMuPMDrA6ZhztwE1gRPCCuTYkmgT7kqpMCiAsHveeNo",
  "key14": "4vshqG4dLAzTGmTxo5V69oMKyBpHFLDF8VmDy9PEyNg387MuJiskMJxn4kjZ6oBB6CAM9Y8eHcqQiQDBXzozWstX",
  "key15": "5xzb7Vz5mErnn9SeCdyLyiJsUEmKQxeqzrVuVyfUpEdXpvTM5juH2FFGzMnhdB34N4Gbv2jPVWRdfJZ5pZYg4zHT",
  "key16": "4coDQRmqACKaYJGF7tHNyVe3KvvimVoayzicmrB4B28GVCkjY3CtoMreWCfeVxzpSzPJoVhr9ce1QbN4vHFkJu3B",
  "key17": "4jdiRARpzH3n1G1kNQScvydqaRUxhY4y34iM4zJy6RDRgBe42jcN7Tnasp3SJL6qbYCpQdsanJKV4G5zd1wLGkA6",
  "key18": "3UX9wwu2LoTY9ZQAfutY7zBuovdyheFvCCCiWBBggvVeJfaKnBfXnBRkJdLMQMbq1gthEZBnVAKr7AcEspcVFrNu",
  "key19": "rEkdsGXNBDfgEh6Mxmkp5NDvWxBrcuEDtf2JhHyV8N7HYKAiqs4UeKbAoPZ9csL9Dn4TViQWMMjorKmyAegRV9p",
  "key20": "eF3c1LmVdFVPgqHzP12ZbuTyNUa1wEbTj3KSDpn7wQLPH6BEG5pApDrBShYQGR55a6DH6eY2nYWMRnM5EKXRRFv",
  "key21": "3teVVgf7WBQFnpCTcvAjtkN9uLDoMEVN87wU8nJw8suoAcgSCh2x8uh2hnZkfmZb8DNqPteq2Y1WRQa72amS8sV1",
  "key22": "44Yst7tVfQ1WcGaNsbukjjGq6DHNXRiujgV8jrqYNSVZ4NNkSEgAQyGcefMLrVQWjVYv8dsJJQguCFiuL7EGZGz9",
  "key23": "5CrB9DP3esds42G35g8af5TULBjeiXK68vMyN6gBuUvJGZr43H6o4p3csFXnSi29MePCRKzEZFmsXrmLgDCUZRJD",
  "key24": "3DW7Fi8PV2zjADFR7f92E8n4xRFbLHjic2dfuheCujc3TyAhsZhET9FDqUJRideC6RJbwbC1b9a8fwRAUL7oS9uD",
  "key25": "5m2x3mQDdrkRncUVyzMKBpxDwSgXfGq1VXZYk8HrMteZ5vzTCW2ScKTKpPxnGYiwan3PshG9JqzBBvupo4458iDF",
  "key26": "3SdqXHdDBsjyoCzdeVHDxDFhj3WhTnUoHVTe3WXrdhg74YaYSvE5B73ayXbALbxQjGZK7JpaeR6WGdYxuRXaqwnH",
  "key27": "2CBc24qfUitNGjPWxBLewcZASaSK3uLGzisarAzMsxqWXsn6fpBkwkCy5vj8vwHJeDYGiA3yoSKqe4kRqD67pmgc",
  "key28": "3djhrsb8wNJ3qmCxaSXwR6QkERLAGX1CMNYY21JuqJ2CHGseF8kp5X1D6M6KmLKf6MGQSjx7iQshTqAvGgwMH1Zh",
  "key29": "Pq9NysiUN1rdk6NLyE6y6RPJW1aRykhBgdJAKoKW6tc1Gk5wzbGKPLNib5g3pPkFhJdeEP9MsC56as5L3kKCYgS",
  "key30": "4fw2nRxTVCS6U9UbFWCr1KzxQuwv2vDtL6o7YjWwnamHou8AtmE7w3gYCoEtaFt4bspFjWGVnD26yGmakKUdrWwt",
  "key31": "2YH2eP1aXoHhDuGvJjJcuoBBigWbf8oivoeTKARgeWcoMUq43FuDTuGhPR73BvsN85unhhMniePYWFWET7DU8yS1",
  "key32": "dnEQBbXX7ULSBrU3Ka3CqhaWRUSh3UicwEfNTB3FEZQ7c6hd8LYAQibRATqyMYEVbGains8YS5f2fua5oVur7q1",
  "key33": "42TVvExXxG346qdN4oZzeDfUkkXUBJA25FQ4BUv5o9VaA4WEtSqX4SFJvsHvfQePsw7QFFw9KbKKvsqTjHVuEZvL",
  "key34": "NmugCQDb4wXxi15gxseJnRpd2etHtpKDkx5nMjK8NqiVRmCEf3f9WpiF63v4zpZ4oQXkQ2f1cczXRtbTbqoLkLP",
  "key35": "5QNfvA17KieQ7ZZoRJJpVU57UWbWG3y8wmyvXx18aGYQ5tz55j2jk9ewzBtTHsEXLhxSyuEsLY7w5zSGXunFhT9k",
  "key36": "2r1n9CeoZpq1Pun2S1sYvW2vGqCMh6GWKUjGdUZgWFMJRbXdwQLvUsWFZaDXYRWCs2M6Vc7634qM2aJDUbZZk4JL",
  "key37": "5Cr5Vk4junLU1f8zrohfd6YZZXhyCuwL5usAdvuANj6JzBVF5spiTeAm8oPCzdTmgMqnE7YDBymvqcVPZncjgfFd",
  "key38": "5pZ352sh6e76mL2cK4WRMLaXN6zeNpa3a3z9wLWibCfubRsZpKLLKYFY5ekUZFFTUGUvy2XvJDPRAXDv2LyqnReN",
  "key39": "2JDc7vqvjTA5ZdfQNPqSDts7qXsiw2EHsFZdJRNkGmzEtmugTa8WiETkGQrHGCo8anQqMpBHP1aSzo2mS2RWtoeD"
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
