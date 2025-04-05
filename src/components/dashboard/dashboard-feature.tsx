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
    "LcvQTDYssvKNmb35dy4WnE4gZduyqifHNcTDXMkAaWtfwtMomf4biVa61gVoKBkaYACrVb4ywf17pKxj1mheRj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AtYkYf3CMB4Qv9FAPoVfX81cwRhgQxYdSUdESyjMA75SjpQ1LWEA9eEsLVyZLofUVTHtkVPPjUHA632AeaHMXi4",
  "key1": "63woMFzzawtop9mhgaF6HC6u4XV97Duh5kqTGoyxNfy5gVns7aB24EjdDBQybpWVCnsGHVSZEBvb6e4qsVM7voo2",
  "key2": "3DUV6pBW4PzyRzb3WfAMKcqK2rc7N259yRuW5ATba4NYPUesCWWQpcPp8hcQDoWBxn2bYyA9KkdLBouEaE7gMueT",
  "key3": "5PEdXBYrWnd3KaFXa9JifyHSas6dUftZnLd8Yar28WygUf1ufAwq3u5RQinKRn5r69WTDSrkNV3dfzV1BZUnrj8L",
  "key4": "59XJ6XyAt5Dw4EbFF4Fpfw71WRN7eFV9PPovzyT1z3h2z4o4C11gpvR2EHZ3FkzPhyk5ca8gUnUZr6auzeyi833e",
  "key5": "dC1MzqL933uYs59rCMxFYETLNHVKmqb6U3xTPXCzZ1BNxhWXSaomnkQ3rr3EshKQ1zsAfFEB5ipEUsHQZZBhV7b",
  "key6": "42ho4khSBZLNsxC5VKU5NDFGPcBFcyPweNSy6enU9C3LoqKQc5Nfc8Zrmwb2jrpBoKgpXr6gQR4E6D1fNuBk4Vqk",
  "key7": "5L1KHhrLB9zesRFdRwumJ7kJN6JgB1vK97cFC8Xq2bLLvvX6uAcjGRYEKpyacENTKm1it1tbhT68F4bGzReybFkM",
  "key8": "5JSA8qf2UeMEy8T6RAPYCCWpaapZwXzUYngPwUnJCGhXKcTfDttbMj5z2A8W2YnyT8oJv1ogMGfwTtzHakj86BCC",
  "key9": "2zSxPgCQ3sF2QuNRad32JdY99Rbq1JGFM96Usx92EDa4PP6YsWzZz17JnSUGUjYUthwgbtUJrocSGMduJ3mBYdY4",
  "key10": "48NhTq1862GsuHE3iYsrhXf4ZQ7LAErZ6E6PQPQ6nGoYZC7tGMP62ZFQXsmAMD1MKwHpCf91xQdMSTrMZDZKtUSS",
  "key11": "3DWjuNtZcyJuBzpte6X7a249TgZjW3SUrkaJ3ajieUE8n6uafamgM5DVvfgpuWuVom6HrSoh9JJKQbk84gMvjhwL",
  "key12": "4YEzyVVc1n3a4wpt5YKDuJ4QBbHbYTxeFgtEXi1x8PNLNoEkoD9u1F11xzoybZWZkjcvq9NSqEAoFYGbXBJ3JVqB",
  "key13": "5jhRKiTKKtYsn7KohcVCfg1tt4YshrBmgXsboPTBHfVKm5Wz9WHUR5yFxrFUMahub6Dgtk3gLqSTuAptbWtnYVJd",
  "key14": "3766BuG13Mo16zuDDAA6njR4GMHDcqumrfYrg4CDHwnGzyNwMAeuJjiBJkFwCGwUYnj4wcezrwRjSQjYhkR75HGC",
  "key15": "MTKnY3z4asnoKr9zsUcVS7xJDdgmfe7zSNrWbkxKH9htSxBun9zURtdcWzWnLrh9W9Q3LUgoSP8AVwwofKdXJfJ",
  "key16": "2Uc9PzvJetKQQPLrL2mGiadzXpv4tmdaVPhDMmM1yoi23HCeGtbAx4m1PribV7EFMbgsQ7ZMwCaN2EUnTQ4kE68W",
  "key17": "3fAYazm65SWbWckYqWqEuuusG9LP7VjHZdwHhBTYVAckt1gvePvHnFivh7CCfabyvcb3hDtuLKE4k6fjbooD5Cgn",
  "key18": "22ZzeMUz7K26mpi5L3fU55FShAXpvmJsLvTyueutS2n5xTCBWeyCxnJtvbAQkBaiftHFUjzmuoy8i28DFLgKPGPP",
  "key19": "5tH3CXFYhvDrAoP5C2ce4VhBvNALKcbe95KTZePFrFTKum7eTfjTmyqPFcj7Kn1KGqUW3XRjsMTPvekqDyw3dJVL",
  "key20": "3eLV3x98j7anPWhvz9z7eWXtWaeNPgYzKM7vi9h8FWo71e8N4iFNbgD64DV1nN6cb261C2PVkdwGrz1m6oLCPYPH",
  "key21": "3QAeW8gK5HhvuAogth97DgwdZAisSm6LxJYpGkro5enCPmn7mwwW7X5MQ1DWxZPSBH7c6Micpgz44NiqYYos5o4r",
  "key22": "2RkSiZkPgnW7jq49yPaaDGzzPhMFZNefctJadHQKwLUneJ9VtnPDgHHkCVZX9MKUgrBqQsYDswJRocFrag4CyB1j",
  "key23": "Ptz9BJsUUH9by178mhf4SRueFjbBiGMn4nsob3aWd9gjSiEbs5wfSRT9Y9u7wr71ax7dwYaRSQ6hPaYhF5Xp6KQ",
  "key24": "4ypyxX1VoKx462SRYwf3PLxvkmDztXLVCGyMC9bcWNztkqy9LgHHtiYyVS93bVcNRQqWVwr4fsoDWXi8xTdap5gm",
  "key25": "5WVVw3ZXmMK5mygoKftjoy2xaHLiu8DpGUtHhUhYzzfCAaCLZSCR5qwAgyAqKfgJHwiuhzhDRoDZTa83yWpgTzk4",
  "key26": "35NacHJUSU5RpkBGJ6VQxcbs2jtTEgGTQqxhGi9Xiq3YBMt8jQ2i2QkrLK3NckxMQCcZYkXtimMFNcDBkjm11qiq",
  "key27": "34yC2h7DVLi1KfXLqk49mHnnBhPoyGj4yA2YWBE7ja3vCNzTZUvr5aGi7CePuUcFxdj8K3nH2vEtZCo9QaHyZFz2",
  "key28": "3tSD89hhfLXFVsRBrKZMeE3FooJkcPzxoAedrmJkgerVMtvtb3MYL2UvVb4BJ6PF75nQSJ4Zgp1GegJQXEv9uyNZ",
  "key29": "NwN6JVXjPXV9U97vg1KQjtVGXcN898jwKmewsQYFoofCSH3xkjiGovo5EyVintibHvEQK6JH5vNBHiP5ereCEpp",
  "key30": "WsyDrATrQAeGW1KFFe1RXpiQvvEVyCmXMUtHBdT1Ea8NKYEyWixT3VAX97iCZWE7EMdHdCwHrejrGnEUAMUZApu",
  "key31": "3M1H7RU5YS6yUfinJoSJEYn3wA9SjWq9sCSJtdRisFhgHteyD89RjvJXcZs3bD3RuNMAXH57yG25Yym8mpMJxk95",
  "key32": "aczzC15GpiRxnJTvY5iqSUG5rR327y8Rde3ikfD1CQ8hGifWdjgd38EQJZ6KZshKwL15tWgEU1FUcbjWZpTV98Y",
  "key33": "4JZEQbfRBRKR9PP5d8s2yYNPjjksRUgqp2x6MfzYqNzPbpdcW8dhnAjj5sKTisG4YLWnRX5Ak8VXoQE8JUUmYQt3",
  "key34": "amNWXM7A4m5M4LwKpTqGnfkK6orq7XbonwBWHRPwpacW4zZpXcLZj6eswhXNRrEzACfoWq84Ca4FPWebHBdnpTz",
  "key35": "61DQsAmg3CYsLgHzjPkFuXeJPAZoPwK7YquuQf5gLzWpSK62jCKfEUqgp8838P2MqiWYpP8iEAkdYcgVDH6M2t6R",
  "key36": "5eEdXJjZ7uw3MCGVUWVEZ9GLEGCGgsAMwfhmUa6iDkwmbJCYZSvnLEvs7EKTy4fYuY1uBhSCkZMBEHpjKx2ju5Yp",
  "key37": "3wxvPreiE7Ndh74szeGA4JKYjS3RGhbdF6VDg23hVQ78QwJenFm2o4eESnBcqfYhN3oWmmPpatNQEwqYrG22jH3",
  "key38": "FNTcvCsPhDyjqFnQQnimeS4QzoVnN4sy3Cx8tFXmCYomsCpdehTCS5oLari6GfeB27iX5z4JpoNq9ML85cP1cuy",
  "key39": "uAVyHmghqGDpb52q7cUJ2D8sjw538nwWyJxaUkmPB9ikgR7Kp6NKsToJoyK1jeTkw3Yhf7taVMZDjxisUnNQEvG",
  "key40": "5vQGidvw7h9zagSDFgwrZkvNX3bw72EX18kt6vnB26rAFfAm4nQGHdJ47m1FGLdExHKPp3HTwTAscNPHGasxXD1F",
  "key41": "22yDFWEBU5sH4krtU95GKrn29KCRE4xnuLo77Hi7u5MEUsS3juF92xsAepf74wgtsLQbVJQbSqFnNzQcC3ENXvpW",
  "key42": "5JKrgb4Ea9Qb7pe234277YfKseZ6AEqeN681TpDNrxKG86bkS2qc8oQjxFJU5NgATYjckmEcgS9A1nMXp7Jh23Ku",
  "key43": "4cPMXc1TvWF5vDoWvHTXSXTiQMsmHXZN3Mt8Wt8QB1AXUBT1Z6RXPi9cdwWTh9uJyncSWRrMQ3NvdHTQabPTVsVx",
  "key44": "7xrU8Uhz6VgM26pkbswAmXAGQVE7Z4uCyCRwVPheh7Vgne722bRVRVACHBUvCcSqsotAGCsKoBDmtmnC4wXsp2N",
  "key45": "3fcxamrkbYHgiGhz8j9ni9sHc2qqZbyhFMiZLiP1YdS5e15QuByKsREr81Zbo6PA5jvgyKbwLkoQs5drF5WfjT1V",
  "key46": "2XrWbnzCqAEiM6kKJKVEhFWRpxaSXsBg3k9fs7Dm7Hy3yinMuX9v74LcSWmoRT5VxNeQa1duimNPpYctecmybnHU"
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
