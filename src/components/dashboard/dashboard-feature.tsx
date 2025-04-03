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
    "5F4ohTshJs5hkFArYwHLSSuWpp3WzyKgabJQacF9edrcDJBf6WPmDpmbZMT5QCczfHyZoy2AAor8Efy4Cn5zFcBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bUXnNGfVwM9ZTBCSNwQAqXpJWJHHzERTc4Gt3kEas4ewPJBmhXGwWa3VUfcYLgbnZntGedPgjmHsF4h1EmhCA77",
  "key1": "5mCCCFbEbGghJn4CrixMLeVB2NHr9TwCUjasBASpvngqAQ98eJ6SXoJAogDC5VrPdWZgcJVkM23b2nbCCdH1r98M",
  "key2": "2NGNp42PrMftapeRN1wxf6poSSoJSh1gFNBbRNWLnnnCz4gHQ1hrSc3obHZ4accNP7Aq9XSimyctTfy6mSfxgSk9",
  "key3": "4TJscM4uo1tGgpuD4sxzgGvzo8MTGHHRRZoNpNjgLb8TWbWjc6PYBXSgUUojMqGabpNhogCMe7tfQpmjf5Q4NMWg",
  "key4": "3SxkU2gzVANRhgyRMgik935q5kU1DkKLAKweAmz7t4fD43ReZSoeYoDYg2ibbr4hB9yiyS7Q2cVcevuttGo2xSgt",
  "key5": "KezVv3ugdBCgXwvTx1NAPBrZJpJsMB8qu6hvbNLRtWz27Rhde3rkq7j4oSrDPp3aYufdKyUTcAErevgaC697u3Z",
  "key6": "4wN4ujeCbEa2VoRajJ74tHW9QP9VPJYb51j1XatpEwZTp2mUN2Q4xx9GGSE5uybX7o3tscaQjS62yuEFmZLXD2oK",
  "key7": "2dHi41Xd7jYEvjhZ9PYnNPH1jb3R9e6JY9s4RmBrKfk4dkPPGmDgXiXFbviW6pjU7uoK32dVUYWXAP3zbUgvkJqF",
  "key8": "3KUb5UeUoAgdiHgEr6vcCYF2kBEvKythHNj5h77otSRyHvq6tyWAVPdxsZjNiesaEFapBfESuRhZFF87333juNL3",
  "key9": "5gs5mnoDfFMApRdHVaA6UyJadhSBXEgBHtZxsSAajHR9W4yjURkBDBuk2y2TMPshD2gzujCe4zvwApWLCUy2RQRG",
  "key10": "2UX5D56RboMg3dMLCzUZsJ2gRr2tL7pammDe8x9bNUcyUN8EcXm9CVZr3WTH7XpKGiQZe6N79VQpdeGAmzvXWEBd",
  "key11": "36tYJQUPNVZYCR56hDpQuPEX7Xu5MHfhk1smwbSKAeFsvWEcEuM6RbYkotWEgu1RZUb9vBFBZmzDFpAgGVN7e21f",
  "key12": "2RtKb51kzY1rD9RPyLdismEazVrubXCtNdHf9h8uUuRKEuGPqK5nwkG7rQaPzUPgZ4FkHrgQundmbtQiRHUCN3zr",
  "key13": "3NS9cnnwvE5dKHERokjwynAq6wvh5wt2QPRsdCZ92FLVXErQdySVWcqFY5yHSwWJcQELpQZfNtYxo6GLjxLYqK9T",
  "key14": "5LXgvnirev7eBjRXy4zHKwVM2Nb5Ff1gnSdNUu6Tzwh5pASZyEqyCDA6KG2SBNvjkVVNuEqzjrHCUVUSEgwQA8QV",
  "key15": "4FEtsqKdvxCkmXgapEfqWJQGEYsQ4j5TWdgwodWuQzC8DbPrWgdTu2taQZnedbxvYWRec5HWmN3cgvgsrMZy3esn",
  "key16": "5CHUCo1269S4Ea9sjZxGYVRHrFXckXrsjhSPUx3YaAhByhsp1SP7vCARoWLTo3je3gPiZi18u2o3M7eVpdagdM19",
  "key17": "wiVhuQYN5aXhX6rqvaED12C323pAadef5yAqNL187245rhpFjRuPdfQck2X9GhgP4QBaRgyNRcz9P3HLLDLko1F",
  "key18": "2HQAnYrTQHD6pUqYyXpHSuFEskS8ttsYbPgDjBTN8wLcNxSw2Wd1bz4gdjBL8KMzPgR8mwK7ToSyXmBfEMVNVo84",
  "key19": "2dWEuWSeGR8FpKqHpqMHobxwB6nPbZtBSaUaRjxPb6sAi7gim3kGe2ZB6UnnRs6t8gh93AENAkFDuYXbZz1Spdnx",
  "key20": "2GYuZ5K2pr1A9vQcMKetnanq1ZwW5aSmH4noyaNRUsqj17meKb8NBpQEZ3ZYdPPyfDm59chMoXM5L9HYf2KkyeEE",
  "key21": "5cFxNPvkiZT3WEGtw5qn8JuCpUmCykYJBMF8kEatZUPnBJoy1jSViSYwmT7nMWgkvD9qAZ3udevKYfxsztmu2Bi5",
  "key22": "2R696Z8oXESRwSYTVYSDuLfu5e742T3Sa3KejhnSvReDv4iapdbPAxRQa3FsFhsSqDhUpBKWUsTaC4M2shyumpQY",
  "key23": "3aWDHQz2m231QCqPKs9p4oVxarjq1JE1YQHSAaJmjdCaao6KpzCKqeRmuz9kZXoD9XtdLnWy9uvGsoH3yNsxQJKN",
  "key24": "KufCH6QKdVoY2GCQE7Dwhh9aYuVwYweVtx33m7e73QSYbAvqy8cU295ig2yV2cZihK8BEZ9AtBib9t1ALdsaqxE",
  "key25": "BMbd2PWHSPj44B9fCCbNw8vg2GmyU6WEVY5xm2PBHoiHyqkRAoCdvKRb7UMMfmgEchJzuBhTrVRPCSUGWbfLji4",
  "key26": "51SrxMnr4gDkGsMVmVEADYUkzeJF9EwB4EdHK774B1qkvQk1YV1PFuv7TrJcSUcyPGrigL2yGrG6UX6dbaLMfi6C",
  "key27": "5YMLVGfzxeLNbti58qfDTXEPR48wKfPiTGbW3pPzTUvaWZ8tQXi7VVN4Wf9ZRhfBtYAdfodZjufMgVeXdho6ZZge",
  "key28": "3RbX2LbjxcwYrw6UoRzFHzYbuPuLenrCjKUwiwPKcq7oRiiRHoZ8gD4DGDvSoj67Soj2sRogv6wVv4nbbtLoTM1a",
  "key29": "3FgpJVXEe5bcSCpH6ETTqCkbTYf9dPi3ABBiufQwVLm6uBo6JT7xzDWvuLHLABodtsvpgTW4bnFTimMYd3U5116T",
  "key30": "4RHCdhnDqarctHhPbW1FjxS3Z2Pc85GyW4bu35c7uXoqkAmkDRrxbHrXpsFnNCoCGH5ByFiyPpnj61E5Etskzkmx",
  "key31": "2BajQPGRFhHA7qqevozwvcGN7jAuiZG2UYcUxH5szpqvA2vaEYvQyRazsGQX9XvXN4rjhC77zbzcsquc9WrcWL8c",
  "key32": "4wxDFYSkG9kNF5is1AkYyRPM1T8sme4SWjokpdkHNTpnKhxHBCuQtuji9oXiBH1ZiW6jzD5hznSJRw6ERUxLM3pA",
  "key33": "4M8kgVHvAM5kyZFtVgnRXhiZPFmVucWnc3RPmhjKmG9Ncq4ceLoJBpNPqhJphznEyTZHbvnQvQts2qAfxe9j4iCw",
  "key34": "4GjGeRRRmUTZydJTjCPJqtgHa1S1vM8NdBhtBnhRUNKJpntRKvaViskxYUhxv9cKriBJXKsL1JEHq62hfw3t95ER",
  "key35": "3BorJNSokynBFhJirAvq2PfEdrJesAnNt6irWuaRXUHKEkgPTgoSxncMSXkt2SFJg7gGnSVmNyczaa434o7gMVT5",
  "key36": "29E3chPMX8RMZsYShnc1Ygh8p2tPWRLuUfGfMTQa2C4naGAErFp5mZrYQ6tiugCFJmMeoznktnRjzwUwgkBTraAm",
  "key37": "5yimf4nuuuPARvEcBf9k8A6d9GDohs395ZC1U4WhCrTQN6fzpiT9j3FbgjXAzKBav4746vLqT7V8cv6qebexm6rx",
  "key38": "4QePjc5ttzoxB5Sr1FLZ4w1Dx5mif5M2Uzwf3296ko3Eb6rVfhDyC8miRSmSH5fogDoDdFkxhtHc2BoHKw9wbisf",
  "key39": "BTovfV2ryH4TUnUXfGr5TkwyhXhwkpaCgbN3QQHBQifyhTTVQziVBuiciQhZBsjZoncC16GqfgpACy1tX2v5jYT",
  "key40": "3W9DEqpoNSdkktEF6oJkpDbajE1mspzjYe5EqFRs4C8wQqGxxG4383nv8cqLofx5ng2YFphns1rE16QZreDMKzgo",
  "key41": "4PTW6qP4Bh9Wm6xuCZotoY6Ars4FexEXw7VVurZ9jg8Ey9gRptHRRKB9Bua6AC6HKU7z3hEi958M1B5cMELTVwG8",
  "key42": "3RfezcngTGMyPveHwk5G2AWmZ3RGDD4PNrXXPW5njmnSV1UZ7uN2542E7JQbGc8shHSS47MEwBiSSK4xGnBJmEXH",
  "key43": "2DsnrFGQBdj3CYfGAKDksznDNNEEY7qrQbEuNVdd8hHUQEtuRebrcFEYoyUCyzaGJpo9fmyFPcEVqgyfjsyRQpRq",
  "key44": "4sftki6DPxkSiivWgjnXVP15Xnnw8BBcn66WoHh56BHUV8xS3BDTFXaJ8rZfzhqqHh6q75cMX9y8ssQEVePoU2KE",
  "key45": "5rSMj6Bop83oKp5jWxxNXdJ27JdP4M7cxdz5FYaF26AAKEeWWB24STs6nQHfFzuU9nVe17zXJWf6W5LZyBGxBCjo",
  "key46": "3oJFSxrSLRatadbfMWxDcgxMZnkhBcWYfsu2QfQyw63W7Fjgxo1kebr2VKPJRaPLu39HGEp4DAuVuWS8ccq5CDFR",
  "key47": "3H9dERSUA2MWiGSZHRoJFtQJDsf9jdv4fU2a5vEEuFHWaWJB5GEk8hFB5UaDB4pXx3S4cQS5wtSF3W4YV4RpLcNW",
  "key48": "2XMdSiw2qwaYLviaHLZ8Xdfvm23duokGHkhm2X6B8ygTDVw4PoyyUUgSrFgLw9LGhSqQFxSwXNzqxFeYPtvcKxDu"
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
