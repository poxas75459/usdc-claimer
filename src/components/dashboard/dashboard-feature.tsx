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
    "4PkSZviWn9rkJZgJ3qXTvvBQgBmkUL7Ms3uTaJKrxfZUrDXfWogUgDFGjfjUhaiuiw8gPY9DPRBBTruFVaS1muKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7vDVKWzL9uHi2BGXyaKnGshQ7asUFRreTcM82L7oCqJAj1VRYAKS5hEeaaEEg7BLYxLadzh2AVKquWzPwzoUkrv",
  "key1": "3CCG2h92tM6j7F48MFHWxzUByrdryfeWtsaQ7Y44WJ8kdqBeHWUBAj9UziYqE37ztbVTiPMbC186E17yQoYa1Vc8",
  "key2": "54ircsnT8MUVkR2LWDJ5Sb48mwFWvqTDJxaEPKKrc4xgfYMHEwGUu1ZHVZQUrHHeGzZFs7x167CyxPqh2wr6DrRp",
  "key3": "2EWoktxaejcqXWBLFtHeCx6PXkFYrMiEW3r1j8QUpzwg2XHnMT66KKS2696GWy3LPcc8s79WzsvfS1jvh4tYAeB5",
  "key4": "5rhg5Rb7XYbnoinsMUq3v4vqqRdsQ61dqg81AwTEyTUqMmwRHAkqKd2xCUyhyrnWztrQjNvjynMDipdP2dpjrisa",
  "key5": "2ZNnfn8FVAhQJLKz27JDm3hmi5nZG2PUupWaaBi4crQGaJhbpwooziFWGb1qpyoL4prMbdKpdiBUrMtj6sZKHNHu",
  "key6": "3G6kRGwBjNzKirNqbXKqPthjSo8DTFGgps2B7MtrFnmaBGu37pd6HkfkkzGeccLVX6RoozXLKEMLUNf1oLMJ7d3P",
  "key7": "65KgPaNsWp7Uzc6zQJQDUjn4V1atU8L7apfS6FZfsrhHyBk5DQ6JDWFnU8jktmgu5fYBUxhE7VeraUkLz9zxY88b",
  "key8": "GX9kCSAQgJWRPkBte3kx3WfoWHE6pVuJuPBaRQZHQnpJf1ZP9rsRGPv3LvBtPA6HbmoStXR5u2zfBbn68Auz1qH",
  "key9": "4R73Q4scfphk91QFAGgMUkkNP6ferpyrmpfA1zbg5FT3ErX94QBhiaTjeus5bj5RKyaSvmxzRe4dcrwUN3AEQjhv",
  "key10": "stFJPAPuyW9FowoGG6yngzge1evfB1Jb449B6fhj9SF2GumiSPa1cHNe4zGrjQYRKHxaH29fvJfmxfoKQRuMTva",
  "key11": "2KrHrEHS5brV55thoqMWncN7huzyQmiDudhoMdAWi7FRswhv5a8C5SwQxJGXeuUy5y4Xk3BkgQgmAVWZdZzHn1T7",
  "key12": "HdVzB7nC167KRCgDRBnGT7Kviya9ZhLniUGuWi9CQDG4voznPskCH6oKgbEGECJpxizv6hPNByU7SQ9wkW2KSGQ",
  "key13": "64RNwhX8jiNMeADppM4rPeVnkLYz5xEKyfvrW9xbiQpH2F9cp1YZ5yFdZT53rAAZ1QByNbRM9DZKC4MRwJiPn9SB",
  "key14": "36JUY5Kt3RaXJ25s8k73BrcqTBTHmJRn1TJ6L8JpoER6xxQzbjkTuZbkLzQ6DYbGoTHzhexW6KqbdtUckE6Rt7uF",
  "key15": "gjxzXVCAx27GML9TS2Zu6G4RoT6Jjpyo4UY6nWU4qws8nNTwym1wphMsQ3H9yDMjvm1nmbhzPbvbGuGwb5dXx1c",
  "key16": "37NswE1qDBzc3K4893QYLkk9cxKveCT3F9W7MNnfjnp7Uw6HKGm6YST7RHQgNd3Dp9tCPHBRkQqJt7Tfetg4RUQu",
  "key17": "4zVapxS1X7kBEWrFS8tmNFf4k9M9c4HgW71t6RhSzvcJH1ncFqP9MKjKgixqD4aJN2wLfBc7Luj4qAJvM7GYTq99",
  "key18": "3nDDxgPA3BSEvDjRLnM59CrTLYMZpxAbLUFwxSG44Nr7iV6v1EiLrq4dDyx5XAyVMBddZ6LbAxHnMrEChecxneP9",
  "key19": "4aNxEArnRDrSF3qyzXzkzhVLkAFFWSJNAQ6vUm2g3z1ehTNsTNdPh3Jc3X7dP5mFGEyUDPR4qSHRqNC2qk6j9dPD",
  "key20": "264y3odRFRs95U4zbVCXCE6dF82X7xCZhuqrX3QCTshXdCy5mds2o7m1PS3VAF4W7CWAXDxEAeGLRvNdALbHmL2x",
  "key21": "2Grw9eURrDXFip9KAczsZdMuXQjUs6gQZfmtqh1xofEdkATYDD67GspUcRDK2SEnHsvDsBAKxFsPCRvZACRtqkfi",
  "key22": "Ga4RP1WWvyDXahYkowKSQBgR3xmrL8rkfP5um6G11BBbzMcqd3eHGWgSGsS8DLSTu2URJTfBPgnofVBvNoJ3Nc4",
  "key23": "5RxKByPS974tSPVtAK58d3MiTNWUXWR1JnEw41QT9GKqVuzNPXg8WEtrQM9yotFFjBmJ2gaBrZhbPaEThGMKV75c",
  "key24": "5HnRN7tXmuCARzQSZF8naZsPfFyWkXL8gyEbYuK9bjbfh8xyAmk4u1vZa252M9aK2A6HbHRatD4Tmv9yfAimEL1P",
  "key25": "4RcZHkBhzwW1AFUPJ1Gt4xECEGdr2tQL5UUYsTt8SYmuXhe29uUBXL3PxEEMGL2XDr4V1yu8dvMB1brZqs3j1XRA",
  "key26": "3bMcdgrTUX1pDNQLgv7voKTSiAR8cfrpyLDVmUpuxzGNGz6DJu1mAYoqehyr4qrxW2ULSqX1PUzoQyyXTvaCqo4H",
  "key27": "ULNvdNeStMNpuNPuwWqH2tb1epx8HvHzMzm22QEWs67MSW9F4Ng5w4Swx53BtJpDpeGX696MnG3XtR1JCAVfxX8",
  "key28": "2morYqEcaaKUSv3hxm8NXE8RL3VgyNuGLrxj1XANdswBiqLqAmaF2Fvoc8pchUHhAsU1u1XjCTsjNd5Vq1ThL2Ad",
  "key29": "521Qid7wk6F7t1mwE5M7aiQj9DZ28cANii5ibm8G3j8dfpadx9nzZZqm78UheAJqFkNtwwZU7xFiLPmDn1R2ja7D",
  "key30": "4A43Dwj7fBrTN3ezZL8ThgPPw4N8H7UFebagzbJddd7RWRC7sAs2vwD1CXfSS2BrtsSGcsUV62kZvGnLR1oe244f",
  "key31": "25Eb5suAfCLrZxUNmpvutwzNQdETNLQ48CGfP5mmaMkXExJDVpDUUHnfxA5cvH9GjMKF1xSniosoLYJRpn9sLEZr",
  "key32": "5uRX1ttSnuENfVNc7YbnU9WPvtr6yW6TFxzEFPNtiaTEyUDADSNmoKP3XaWrERyKUe3vejCacqHGxQWL36zwHYPB",
  "key33": "35CKg2VaTA7EwytNSewJrfeDy3YNbeiUWXrnSCz56GGHmgAPQkasgEiMJHBvbfqNKSXMCzqnBkg9hVx78zo8rYMM",
  "key34": "41ZmGESjW4n4xGQPXF9a6xYSXGJaANhkzYTxUTEVUGPBbU1hqwECuBvCkM7VKJis2tYUjirgMshogX5rU3YEi2xY",
  "key35": "2m4xqpWZE24Coo6TjrdAVcND3p1rbMjAqhJZZAZpedbCwZKMN3iekaP7uVavvvS1KYshSeMzG67FoFstGsMRLtYX",
  "key36": "213wdowa6EPoPVzCcWgSjen3bbsnEJMoF5jDMW99ab33U1QeDamjv5TkodQP5A7K1Cs5fmny1hVwug2EMDvZZsdo",
  "key37": "4bHZG6rnuCweC8o8J84RQYNaUjYyGadA5wKNq4XKHoBaKRPwQnLZeZ1H8YSytSsqahWt9GRVciWN2VSYCj5KM5FH",
  "key38": "5Ssb6HepWkepJXk2raZQB2voAXNCyCcoTtNsw9iV1CjoFF9ziF6fFqszqNdWsUUxBXvogQdqBk9HdbCkMGb3iUfL",
  "key39": "SUzfRxehqCcZUpKCxAKPpm6TTweUWAyPRtzo2j5Mk5YzwqTPYPzJ7E923zG4f2mm8aoVc8SfK86ZegXLguAYWsU",
  "key40": "3ohRoTBtg3fNH8LbTZBw11Bq1oSJy3buPztCVvdZK8y9nAF1Bci5m8RDcuZaqJJFjaxonB4dXBQDKrcYe5ErjQhN",
  "key41": "442Tu9GgiAx8ZZBzPsPNHCouPay9YLL7WRH1q99cBmaQNoRd2h9B7d2ub41pVCrk8nVF5WzbJdEwv9JgrprtgW3E",
  "key42": "gNMciSHZndA7ZrdZT3mTfvrKLBbpQCS2e8AuvPvCHxCWiXzKPbYwVmwHUfSj9wNNuonaUThevF4GTLsbDJbCoLC",
  "key43": "3KXvHHgtQYwrif27rNkg8t9sLsFd1Ue1zahML1AEUiFo13SrU56vLNiqozNzy2fYY1QzByccoza97kqbEtGHkKA9",
  "key44": "2wpTHQYY46XaxBvdUfUuiAUyERyMRoYuyK97KUmktECiJYKU58der6wHLQPm1xdyxW5ukU7FT3NNqZTzBTCRxndN",
  "key45": "4zMmkfJxz9TPgEyAygokESCY7aFKTXzxLjPJai9tERAaECHyg2CT2x1nMQ3QGWi7abGZHhq1UHdgkaviUgFksfFe",
  "key46": "5muwYsr2SpWMqunfTYFenKoR5bm4Tz7tnn1k8onz9QGzVMTkf7HJrUJyjdkknXJ7GKc4D9e7LBm3S2XV1MPaxdo",
  "key47": "5ratbFGQBCRoSRoobDSttigyA6rMcvVtymf9BoCkT2RhtUKspsHpuJtiqdTbHLBXKK4VNjiY9o71SghmK1ZwXLd6",
  "key48": "4MWoXkqGbWckY2gANSciXeVpWfSxohhKpUHDn58KogcRtPFPEbtkVMQfx97eiHDd4tLR4jRXigzSsdFSgg8oZvno"
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
