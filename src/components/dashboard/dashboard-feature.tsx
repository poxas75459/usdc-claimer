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
    "58KyxT7ew52XkrqPUJe1CoPyVQy1FtgW3N788tH1iiuqiYb6swSqhaJHrDDuhyP9YEKUvYnkpEVchDZrQMoaTzD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qy2CWyFcMkV4PS97nZczydV2bYRMTA1JqhK4kuv7Bs13z7qF6irMCFDoy28LsjnTYiRrCPyQuoy1hPERoBnFo45",
  "key1": "4bU6fge9bMHDi1Fc5g7HM8WwUJYPM52B5SccfQ7e9wkJK7d8u7cnxbK4ipuBUtsnbQf3hegjc9EuuiQtgwEcAeVD",
  "key2": "4pCwREHSFJSDU1mGQFTyNg6c7v5wsLFfVSKaH8DSfQQzL5t1m7AFEf7GBqgMufZUNx5BoewRFktkRRvUKEm4Ydvj",
  "key3": "2uou6jNaDiCGFWrttjL7EhrmJb4qdpenN4x74ywx9hvreJTNoDMPMcRpmAcwowUFP2J5XAdpYm6TEcVqRZTrHDXJ",
  "key4": "58UXGTrf8fXaUJeQppWh9B3Gd2dxg6pNVXjKhd6AZShX9eCr7HhnzpUqRR3arnYVatCfEzUtapUxpmmhJo7i2wy2",
  "key5": "5r4FtHCgJNqVriNjExJ1y5UaENWLJ1wVHhqEVbc15CHsvqkXRa9vLrcpQ1agHgw4cNqDttXKkhCSoHZFDkH7bAwF",
  "key6": "33CBZ9XCqRsRbdEaeUcSTkubjJrku3rLKYBbuCehV9YjHBfPaW4CGegReHxc7muJEzmxiCxKuvsa7tn88uws4Zpy",
  "key7": "4zUV6ByBhbp2J7FC9x5YiaYkruiJQBCKgmVUACvsJ7fs4zCAxKLYzqkkTYk8fYi5WWeZ2reEqsZNeKbTvrqxNjen",
  "key8": "2cvrY4FY8hX1CMMzmSjDZ8GX1QAk3fHjXyoaKFDEmDK6nCBu9GvSnDC7F4mb6vh8vSPPrMMvYiAJ7srkfomT2vRd",
  "key9": "4EZh6RfcCodmnADasFTSjkesq8fCiSBHHXVJogNwtL9Uq2BwtujF6FGF7sQ6hG8Bt6gFi5jZfQ9bPjb1Wx8WFK2K",
  "key10": "XGsnd2msHTUupbAqPtLzDHbkimFV8fYZ7QoxdFgQiCUiDp2f9dVEnXsohES4JnkTJ4scsi8uZym8k1uNqcRXUkM",
  "key11": "nEN2cx9SNvmYGvsYmvfRMyxsrDBRk5Njx4HgFfD9PM9zbWsbk8DittmgUqo7wHh1wRu1D3B6CbaGAC4ruFaib8i",
  "key12": "31KnWaAnS69vqv9dRa4hBKzDBvp8tPxnJ4otSscabYzmmB1JmNJLXJMQShQH994WshNYdUfVdZS5YRC1vRkW1gLp",
  "key13": "2sH6H6E8svR6o74PKMyHGWQarsYGVpDke4cvaoZn1CpuM9iFuKJPtvawhVzAEbW6quJpzkv78CMSsAWxgeYeTkGt",
  "key14": "312Ur2curehtou7PjFZnn3r315jNpj1NhBt2id6HGWJxkhHXek31wD7A9tFKRLuxxbsdMijc6SFBAabKCg4RPrGn",
  "key15": "23U3cxHtHHBS6sq3zP4FTSMMufCLzm7mhSJb5z2p1HvcxfpaYajoCKpHBMMaH74uypqgLx9JWhngWs8cPGcFH2Ku",
  "key16": "3jjSo7qKmY1hFAwYpyaFuTmaXn6ZuKW5KpRBSgNt3ccfZWBfsA4V4wtrLFoZJeQYyyfZviA3wABV2AMoY6ENRrZ3",
  "key17": "5o9CjPDt7NJtEiGM1szgBmLtqXp7pUr6Z8RhQehJn89JXvDB8djSoHX79K17MT4RG8jMgA5yj1Fp9jHj2eUk3tkj",
  "key18": "5U4cqKRdsS2uRWQJSDCkdu9cH3uoExPzg9oyiprTRYxWSdfirF7hWoBeDH8PvEa71a9xWfeARLDuNw6ArVCCZka5",
  "key19": "RVNFQMhdBa1SsHMKMADheKsEJ428PZrd6CYaYMWEiu8tZkScGqKwPqoVudjT9waygy1jYVojrcGsJmjNKahZaLL",
  "key20": "Yqzz7QnK79mNRaHohe9D6smevNDahCfxoyQ6rTwQMvHzU4t4W1b7ZESDVzYnmcCHtrRdbTDhF3U5kjGB4jz2XB3",
  "key21": "MZpnZBrW9Pse65wU5DYhzuQ1h1GqMqtLVjMrpNqmvnkgogKLCRpWQ3KGRnQUEKKLZ69HCQgyqnsZieTzDHtj3Ab",
  "key22": "5pYAFYnmJiR9k2cjzBNQqaAMsjbf9oezFLunn6yBbuYGHFEokYNgy2C3TBKQ1CGbPEtznko4z6YkZgswTL9usLy7",
  "key23": "66jTFh6XAoZZzippheg27jXa4AysLffvS2B3ea9K8SMkUohKtxnPGZSYeATLJkefbExeA8rjBT4ysCnL7m6Xv4vu",
  "key24": "4wLRzeWZ3XcXUURg1DVwsYup4KaWa42zQnZGhUr48Af1ShFMEasYKvSFEDxWooJnMsGj1zGRJN8MyfnDaB5Q2SCo",
  "key25": "4Pp8NwPc6xNS42Nf5SBFEcnRrkx29eNGF96yWQobZaLB7HxHb7YjPV7xdVJSqssfjV9fEbzjkEfDuquU2TU2jedo",
  "key26": "4mKWYNDbgcSoeyDjZYzKj3tLkPLHhwEwMkx76zQfoFVNAEyMJBn7uVYFisiky35G99qG9psXejQJV3yoeEVmPRF6",
  "key27": "5B5qgbDmfDwfYHh7m28h82NZUj94G2Q7smirLVCJz8pe2Z6g6W9UMJbpWgc2tMToMHS64xageKod3xY8JQSrg78o",
  "key28": "5jix2gwLmrDtTz9Xi2aiLTvib8gpxkjHjnRWPH2LEnkXxkoGfBFwoqo8wS69xhsPWfhP8kmuBKa1GZH7qA845dYc",
  "key29": "5HZaUNTf2hAcafHkjFvpQH3LLENA4xohY1BnXaa3UMHYa8hqVgth6HGT8Sd6j2s4ZgkKVqab3XG89qRFCtMroZqG",
  "key30": "2zyqY3BU9g2AVewPrYMSE4669n3CkDJnc3DiAsSw2P5U9wbgN8FQFqR8AsuD7Kiuvtp3HeWpjpqcH5zFGpaRV1Y5",
  "key31": "2qhAdu71s5mYpPKpYa55apa5nfA4q6raoqQBTNYMWLGPDBY27vYv9ipNpLpHo2ZWnCgbEnknCXKmT7wdso2PNXCA",
  "key32": "4cNweJkjBRbvPZucSqMyunsK1uMZ6GQ7oFZ6RM8zF9T4qV8Jm4ZuQfCQvsSM34xFCvixExS6796x82bXk5cJrRSL",
  "key33": "5bPacumkSM2DEhuQ4M2vJGK1K8V9pM6v6gSLtSa8hjxhmJa69xf1AH7jjf7n1HcAsRGRuc3Bou2gG3ADR3u6zQBV",
  "key34": "5XryzcJqviEd92SEjLrAo8MYMF5RYQii2Z4MbLU2cpbHWUGnJiKUVoBy5mMT2KzFKsXAmeeaW142UCjJadTAaRhJ",
  "key35": "3gA6NiNSqPquVcQzrWvPcTnUpHnxiwsxRz5Gj8Nfq3aCvnmtaNVFA4JHBHTgXBAa8UomPqM55jdE196ELSbTxFaU",
  "key36": "4txGtJ67mPWdWALQTzGyr6GSkSt9GoVVCzA4Kk49AnNJydcca7k9xg9APSZYKkJZNSdizDsxQeKRi6o1Fr4vSgd8",
  "key37": "5oF2ZTDwmTHhZdtkrmnVMX6rMCNp3mgRz6QTiqHAdrMmYvWxCzYCBBLW2xK7njtpcn72XZuBbPmo6g5fsqex3bHe",
  "key38": "2gsrV5d5mdeXJ2vGGhEzfvRmBN47XTjbSutfPk9eKidXaSxXX6YhevTnBSqBuUyFKnjXKYE3LU2vwcaocGGgiT1u",
  "key39": "bT71yGSFEUdWaJ2P1XAoSuPKSNmSs2Xex3pQEK3MP9FLiBAkyQKN4Mba9Pm9tRuxJu4yMMFqpxeR3s7gzJnVdfS",
  "key40": "3rxamHx2C7vGyBSz7pqmRymB6y8n4JZGYpNMAAk1rjnC8Az9y9cBWVNcacgoyuVRUL4qRdnFtT6pVn2YzeCTPDZc",
  "key41": "57AmSqQnebDjAVDGhVfb8YQHrhZCP8gjmcZ8DZfE1p4zMAVthSwANqRckCuWimX1BeLCWdh5pQXUXsJGcyH3w79p",
  "key42": "PLWDADMd4jBDNmDPu5AHxGcEvT1c2oc1C3hDhD4kJnNCmyrYzDittuhQRpwSAjRp5safv1tumCxoqe2YaMW7afT",
  "key43": "55ohNGX9qLswNKHmYbXUNMhDMPGLQPoJooTLpMBbpYrnBrCZQxRFEnTYUwBm4eoXUnj1nEhFfLpk5wPuT3vQ2rWR"
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
