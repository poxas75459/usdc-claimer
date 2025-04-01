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
    "3rbXtXJxJuMz5dCFPuw2Rrg55TDqLpAGTLW4xPHwQrb8CvUrvLoyAuNZ8ed5Jc9oSFLQE8hVDrXDw7ssbaE8pLnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52XYYwkQxgHFbGQ8Aj7GaVZntvCFE4KR3fY99XmBPPbf1VUj62qTqtqvNSuZaeFPLA14FntG87q7w7MjFcsyYRdM",
  "key1": "23NFefHuXpNbur5Jwj27T4XEMyCqY5XY2x273gt9DMB6pzDfB1J4iYX2c43miq2KQnSjJ7m3MjoebKAWS9LhiHUv",
  "key2": "2317CvmHCP51YQWdXowrxzFYSpqdBNUzjwAhU9tE72UbVZufeczgkB1e2PHGC5amd7jBsfPaXFox3X2GZfXuRrr3",
  "key3": "gSCmgDe8pSAbw4Z2zuJYNJpmkonNZJdQp5CAS4aZ9fKpuT22usNQxnVJoY1pj112SZM4mgi9wX612Gis7aivp8L",
  "key4": "59MikAQvLfK6nhSbbZPbGfEUTj4HPkpF9Se2QPHRcrAZmiARbymcwXXLCgEANPjzVcpc2PmFbn7c8TvxwdxMsP9t",
  "key5": "2gQcaXZNVuj6US32WufsfteLaPoz4zNwprGjohopjSEeSp4hEiLerpkTfvamxhypKfKrhiHUiPrRbxRz8tZfqjoA",
  "key6": "5F75vvbu2Y3A6zmjN44ZUfvcWj975piLe8Jyqr7nQrmo5CyYEjH1Wy3W5rptyv4gi199WNWuwRZuzMUEhPAm7xKQ",
  "key7": "4kQdXJoRd1idXSuVv8WVWvuzAZn8vzgZEYJCreNtESFgm2ruVp9tGyxMcLdoRf1eCX1xNbB7eBotbeA39da3UYSx",
  "key8": "2eM9vhVHPnAuMFu2rcop3TYLaLWea8zzoA6qX6u4KbhHkUJ4yZLyuxkTWbCnfu7ryK2gWox5EJaSK56NMoDwH95s",
  "key9": "58PcfJzKA3nmBs9iUopjhdyRhSsj5dC8bujaGV73pXaQDGsroBFzYWHqMvRtLWGhSyjuAqaS1eF521wk51TQjES6",
  "key10": "42EiGL7xe8vjg8M2gjijQr6ikmpTPEbgib8x37kJzDACdwp5KBcW9gSHpnULXhpvz6CgNNEpHVb3FRCFsTCEEAiD",
  "key11": "3MGkoKtP3NovrKh2kHEPZiJcEGCfUTwUsuTssYL7utMWMP7rZRN9hygSEit9kCqv5NSCXBF9qeoti8n55su7d1g7",
  "key12": "31xwRxkchcgeRcimTM5f4BNfr7BnT4Y3zrizrc2YcnBzXuwuymXtesqTPLxPamVqWTiux2JKSPQi1WE57BmugGjt",
  "key13": "2FEF43qETDssB9BqDDfpqdQd9KA1GAZ19gDv6q2bGGMe411cLZJbwizbfa7o8aJUnKgZAQKZ5mCAHdKBmqGCBRpT",
  "key14": "4w3ThhHuAQ323JfFkejQw9jaV4aQuPTkfetkyfvX7JiR2m6pL8KjNd9WV6qmHKHZUzEWyqhXcMbHxwAPEX6gujiM",
  "key15": "y2BNBqGfLXnJQ776p6KHybp2v8V61fTdrVhGVNQgeymdgBxm35pegVRyZeeZ3jcPRsQpw4XgZaLPUVD65Xg57sz",
  "key16": "2dhRowexi5aFVa83fiPpYm1A4o8KkLZUVxe2RqikJ1V4uHRy84ctoM2VA7Dm2mvMvyZzAwfJ2pCFGeR8TyFGsnDD",
  "key17": "2Ry1YXaVXkRuPLYrchPSmH4Rx1ASbeREUXnRVKXPz19uhStLLnGgub3PRsYgnfpS2XE3t9UjDfgpKhAF4RVsZDvs",
  "key18": "fq5hgFhfsrTnaEf9xv1UwX6Y26h3HSN5LDKuYGVZwqfHoju36fB2UyFDQH9Cqa3oBug524BWzzfSAC9CZ4sgJUC",
  "key19": "GgtZj45dx9u49JBy5J9sfcj6ukczKTk3nrPNJhhqbw1bGgnKXxbyMCv5gG8AETdHN9RDWDkWDuE4SyuaokPmeBq",
  "key20": "5LW5HbssqG9nMpo1qcNiM1pkkReeupQJA5LEr2v2yXVaMshL3Wt2eyfKW7DRLQ5ydKR8quHpovamKDup1491S8Gj",
  "key21": "2H248fVRcrpVccHDAVPudvpQYNbkMvBN3mqP258B6MCjsgQeDC5ETXT38xAru1namsYMrh7ZCYBc6zdAVe8T1CSn",
  "key22": "4RwjuCjg8oJDgPLkE7VD47qomeWScxdpkwJKYwsV5dW8EW1tnXRX137Xz1Uz52t6GTK7acaVmKsN9UdrPf6CW2QP",
  "key23": "3R5MMLJqTADjpHKnYEWkjThodwHYmorjW6EsSqefe5g9wVLvQoAtcwvNq6K6WPZ3Xi22FHH7txfUyc5LEKSqrxqd",
  "key24": "5eWNV76jACEgB38tdTtQATdUsfuA1mfi98KcfTDJ3zsVacqVpuKHGAKnwyAkQEkfVioGRoEgNazsANpA7su7bmC7",
  "key25": "4iuELzjhTBrTT891MR4Wde5WUbyifN5jzo88HtGu6zmAVaisiKQpz9JQowAKL5Cds7jkMSE2ixP1sLaDVedNSwNn",
  "key26": "6139ZGakiQJ2eyZJacc8MP3eA2B6iVWdZfdeb5iUTrEk8Vozf9ZYo46dCRkXFUpJJ8reprzM7UGGDw45tFZiT5mR",
  "key27": "5wpt2dxc4gqYiRpgMvJH1dZ33ZTsug8yQS6umh66xne7SNxGGxpTUDbQHrHDc1PTLfc4Gsyb9ZQkLWQVJUNU2qFD",
  "key28": "5vd2KpA1HvYuNqbuqy5VdtVXi3tcE76i8NVsgg66dVuPqqy9tfTwyWLeMTAU8RYHuXaFmfFzB72qNxEMvRRQtreb",
  "key29": "59qTo44EGGz78xp7xqHWu4Q26cLamTW1m5Q2fbv1FEt5mWJcKKjK1hP18gGWv4xksbxvbjarAQqsieWugG1PxMU",
  "key30": "2xaMgYoWJZSwr7H8z3diSpMDLC6SV6s7vi3MSovmZNSm6Azf7sTMBtzTpPm38pMjtJSDKhb4sWMvWXfKPFKManuE",
  "key31": "3vFZZMBEvq2nfjjuexNMXkjprjMdrgPrUYwkjVTdwq4Z8qd3eLfa1EhVtkbLnwPiszWX6qUFeV5vwh3bCCJwV6ta",
  "key32": "5UJXDXDkn3EJKdFJK91eonP7jrZqt8EwkmrEPjyX3ws8RcAd3RNZHMDx8GH5RfyjY9osDMGW7iAmzTMmgmCy6nSh",
  "key33": "jdNJyxcAT2ytg88THxctKnw5C6HT56BxhJmgydgK5EHiRD9CAE1sFzNnc9Qh5LyyiZedAaE25XegdPGSWX3rXhC",
  "key34": "5JinRBFdUFC2gAEfqFA1faCa4qvY9fSSBt9VWFcNW15RLKyJAX3a51v2g5HUMqguhWAtePTLdMNpgeLYMGqDTrXe",
  "key35": "5xJkxbE5hedUm4C1SGKZjaeGwhum3WuJgKmBJBrSVjWH8zHRo3h5HAbgCeues6vBKKHMufRAwUJCJx5KAAighvVJ",
  "key36": "2pZRpy9v2k1AfWKq4ZpxVGtkykjuQX7VPFYJevKNkwwVtomKSQEHnMLSEnM6DRtTigzhYyEQTA5otnmdKx7Ajc7i",
  "key37": "5235tpM9UzP1WCEtLnJeqLiHU7aNUJjMgXFFS7beUxZwtSizRHYBnpkpQcbvAzw9titAv42cBRkaREEXG1iS6ZXi",
  "key38": "3oEKcpMxrzoYAcaRoH7f7RXyk3opw7nEzWhpa95ExcHwmVqU3bhxQaDLeoUKeo9zegBu3qJf1BsZK9M6cREPg1Vu",
  "key39": "5Lp4RgW7sz4WQuHU59EBHqMKABvUZFxr2CeMPJAqsTqQAffXAXzzMjhYiCJFtKCQnrnT4GhqPDjdMWwWswog5t2y",
  "key40": "2n6frnVTLyQv8nZSoJ9UPnR4bkBjguHkPS6TUW2E2kBDFhmVptHCtJR7CQqtz1WBTCUGLJcgRFqPNrhiUXYEoojS",
  "key41": "632wdh2B12v5BJKsETDxyNbQGVRWWib2D4inUocPcQavYB3XTQVFBkn7nZztkweEeadwKMPdFVArHRd7kprixiPS",
  "key42": "37q8aYrx6kF3ckYPo1NkNPKZQuvUWMkYAZHq5MbpHQ5186idoLsF2nk5LbLxq4yvu4zbehMCo6MpmHcooa5Ljxxc",
  "key43": "3qpYJcdFqmy4x9576r6MVcJrPqLrPU1RhPDQFmpdMhKScrHnhZzvxWhmTiW3AXfAwc5jGw8QpEP5LeDZ9vrZkyc",
  "key44": "trRgEd6afy66XRcgqtZgaWPYEPP4dFxjEznrdso7QU36uj6pn2Kvn9P7Mwbgyvnpe77AbDbYDgKm49ePaC4tUtv",
  "key45": "5iqkSceqgNeSzw8pcWVQS1nfRxtC2sah9yWqicnk6iLa915Le4rfRPVXizjc5J5naus35fiLepkpFKd4ERYZRd99",
  "key46": "4Wzc35sSEQC5RBCuFBAHKT3Sht9g3Yrc2hN3S9o7FScLxbLna3QQMkgdrfKgQp9Y2KdNzbfeo1FHD6idew6kX9GJ",
  "key47": "4ygXXN3WDXX8jyWnDsUBXCQeU4KnkKk5392Z2HfC1ifcxXajw9kbHrkNBeGA476pDvXn5pQwUZ72Z5p8CS3Sob92",
  "key48": "2RSqStSAcAndxubDvdRk3rQdQrjMH6USVyXePiT8d9JCncwZPDnwRapULCHfp2tq5BennqXGmGuK3RBusjEgQvuK",
  "key49": "3mPUhf8akrg4RhF1k3ehJ4hMg8ThSvyEknGdT2Ap23oBooyJq84BcJj59iLq72sYjufXXvPXE1j9hwD1o87i1Qzd"
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
