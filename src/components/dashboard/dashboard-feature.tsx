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
    "35tVm6YwxEUTabLjfhmkvZir3j2Z9XGWTqkK153mNrVgXqQ6WkiMUYfGpTB3oj9x6misWkZsd1iWRUM8vUXHu4Nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Pxuucgou8EthGYGp1cAVKJMKmx5kpMxb1KphNty1NBtEgvSVXLPqjQHkAopmCECV1nzxLfyj7y7JMoiUwuAbHA",
  "key1": "4VnYRUgzF7Qe6wfwV5R1uU54LUfKE4oZRJ8R9cZtWnLa7zF7aCYkuEroeNLESfaZWZ5Vnnrn4pa1aaQFRL7Ma2UP",
  "key2": "1pJytVHv1NewUUYg2nzTEVJLvcmnyLMTxgH47NMtstH9UWtef1GXvR6e8UFo6Kw416JyWuCBLQQKcNYVY4dLabW",
  "key3": "24sK2USgEFM5YG31s8WWoqxbXMYQAhbR1pgxoS1f1heJdiab8Xqf6GiroRB7HJMeuvQLrV8JTZ3Z2JHFQqAFXyCT",
  "key4": "615Lq6rZ6h8FeYrFqZ1ZgQdCWdpZ75xZy1daQpL7cNtRWnz8P18A8hsT8q4wESfGCU47NEgcSeKE2ucFAKyfCwMd",
  "key5": "2aMeJqRCd8KF4Fq7fvAgrUgWujkYZYH692Mz788teKnCqE3d37iYnnjP3YTJQ3xPh4ngNGGT3qjyGycqEFUAdj2g",
  "key6": "52MWbhq1DHQBuJhrVdTFmNcBHmYAwUeZtFaGAXYSgN3La5E5KSimJf36r5kEFEeNxH3P836V5FRyR8bCmXywYzhT",
  "key7": "4En5j6c6TSWafDTNbhCTAt1Gjwe2FxZMuXu5YRTeBSutUJ3fa58cHK59pxrkyTap8UZQVjAk2uA7kyXq8orZACvL",
  "key8": "KB14EqpYNjU6W38pouprc224ZeqJmCapUotehG2fd9jNoE3ExXEVysqjjEdNb88uZ8RV9Mgqby9mspR3C3JypEr",
  "key9": "34vaBbfUHrtEK9oDvE2nA9G3UpAzLvxhansm7q1iee9dzx1Drd1PiqsvGxZ69dv9ikru4HGrdscfUZq6nBb8BY8t",
  "key10": "5aZj55fohJLYTRhaAUFNy3LtnT5ECZAAVwL81c8Uvd9MWHgPtef4SqzTqcQFkVGYPXRinKyZGewcndSJq3kFickc",
  "key11": "5Wc5yrnc5oXPxBSvvUDdcXkCko9x7hWJoNGkxtgesUNsVPXUi3NvZp1k6u7UXc96UJPxLSrDs23viHY3E8sstqs3",
  "key12": "4YWfSj9dRBbTSfcXEDGWWhfyWcmquLHhW53eMUmKyQRsHpood3SiubBKHPMdE4bCt5f3L2Z1uoUkJydsEkFgWUms",
  "key13": "Bmy3wZRw6UkvkVHXMaajEqUr4EkbFDoojKDXbyDcFR5fyRUigzugftCbjFELjrm73uQJVbPaV9gTKRfrwkFg17i",
  "key14": "5h4PxftXRgxg4CuNwURAhaH4iBMBhsgoEMo4evfy8wAtMAaiPgnitg7zMcvMDFWjqH5oLw6dGHpntXn9tLy6tBgR",
  "key15": "42oEwjnDigRfPCYD3SMwgpKa34eNLPvbSSGiCeaB9ogw45Lb3Kas4eYQpsvExVNGTHKmYDzddfpAy5JUEaHQhKB",
  "key16": "3mgR8RwjvHM8mAdchz7oRqtLnzvTuQeu4CmEiAC6YamWBJD8xt8MpDdYZVUVrUuNBTo1Xpy9gPfMkk5ZJmbau1Fs",
  "key17": "4hprQzNDHZQxvzJHu7HhXK6p8uHvGz26PAcffiSWPNou9x2MK9KGtXdf9jPV9iUNg3QNVKWTYFwZoHitvrLP9u1t",
  "key18": "2exVs16PP4PVbv31v7yFFNSCJhJ1ovf9nyQmi6GrEnzLdkxEkm9RUhdajCXPMapBjnTNoW5Rjhbgdg4B7gjT7iHM",
  "key19": "feKbDeZpcYjfcYywCkr5qDmfUeQkazPDkcos4zZNsiUS4zqbVF3iTRdPuN4XH9eHQ9SmBRAbJLHuK9uXatR1Auy",
  "key20": "cgXKK47rEER8wqP5fDuhACDLTHvK2DVdHQ6jSbQPAWdmHsT76noaNNTv6pbXRiqxB7TbPPARe1ZQxLEkGQUQ1cs",
  "key21": "3ncmqERbwCraBpvGjB8NnN2mBezVWiuCbNuBrT1xVkZUb9kpoYpaibHDjNcFWxcsZz5qrLhwiuud9VHFibeYJjmP",
  "key22": "mWAjWQMipWgR86axTZEtzg5JSaYBZnKpSmfc3sNEGD8g3MtNwbZj3VbeLT6oC3EKthDXi4qhAujPpSaTwZYFxWm",
  "key23": "mBdQhtuXWMqRxwXGwArV8Lgwy83RDkLWnvc5NZzQRQiqf43mtZzqMNBMMDTvD7mAcuDPvTm5SM7uPHrnUy4kaRr",
  "key24": "4HMNzVTPUvf52S69RnCdRSmnG64KJjUda9992AATtuhgnYXSbxqutrb3bgPRdh5wZsP7DPAAcrnSgsZq5zdVfLv6",
  "key25": "4C4heSpq56QqLBeCeGLww1GiVGKVCTwejcCmoFW6sCJFVrhXVkiTSZMK9WTqkyPts4VQD3cJDRLyb47dgDJbQyiG",
  "key26": "4ar8PRa9meiVfNdpjnXRWWQegrB74hdBDiZDAtmasDYXYvxhXt5Nyk5zST2xjktrkZdHPazchSn6qgRYofYjF1RK",
  "key27": "4ofitCtWzVBpmvkzTjAtY1hrv6GrTVxikuCaRa7MDpjrRpq9RrmFc9hb5zcDxFnB3Qcdx1FCqLeQMVW2PkiqZpRv",
  "key28": "3y1aE2gEZDiQRSCBSdBzjcFZDYzaBMkmmmGuajVqqDuZowguTG12WY4VFqrY7MDZRCWi51637iFHSV3BPhqtwiQL",
  "key29": "3ph21m1HQdjTE1HLdam1XPc2bcMUDnA1ZrRxbyMz46cLBasjN98jQCd97FwF7pkU3v6dh1EJsXcCzB7SzzTchhNQ",
  "key30": "3q7Jx2fVnhbX8D9fyXcDktQpzg3cTBWUuusoNGyKCwjwQREneZe9hRr1kEsh537aeRbJTdSUaZ1ED9k9ciqKYqv9"
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
