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
    "2sYtYZC7pp3QQagWzdXfNYuvNnywLHgpebhCZHd24EeceSYNjLyJeTdhhim8VQsJK5tEeE7RANCVEw4tR9eC62Qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jUFCEJNbGbtZ8Ph8yyg32X8oqVB1iAbuQyJQVohEpFKC9M7b7PsUbrWtsfUtoC2T2s1tyatEexuKVXz8nnzLumh",
  "key1": "5C8vLwopNkjwBrgpLBFfz1RxXTphmmSVpfSbQxNXh9pMDhaUuE8YNoELdQ9woq357cM2uXqjFu1VTWmh4AA2tx4F",
  "key2": "5HPre2VMTY587dZhrRNFMJJJMxLTpys7EVa37QMU5bzeQZTEaUdFagMofZyDdsak2dbYKGBPsbLFSvUwrjMmT6i3",
  "key3": "2f6Mk7LfxxaKuuXfZ3v1Gn2dtTU3v9Z8dXfvy2EuQBh3iXLN13oAtHZnSYBk4mqnd3mrn4YxxmAQh93Hzo2s8ikn",
  "key4": "33RpedMwYM9BSoEH3qu5z6xXy7Nemsoq885exFDLF25UGPMyHHRPhucjRUR2psNmoeQJjkKSpwy2nxdVMz6kEP1g",
  "key5": "62YEh9mohRtzeiVcC8vQ94qTKidKf1jrZaUQ9JjuvSPN7bdFyfYC34g6bUUCA7GWdaHU7Firs4o9Ugw3yKpBk1hH",
  "key6": "3BrouMy8jxJsLrofQGebJeFxt562BFfEL29KP6EyVHdjSjDJUCobkJrdCpgVobvK8nb1e6UPav6XuvYJBNHJAe3v",
  "key7": "4951rag6F5GqkWFTU5kp1jcu9D6STmGqRgTGGqpazgTKisQbFmXTPcy5GiuKarbgiyX4qJUweWpS8Dnv6byrMobG",
  "key8": "Z1vjQkufJDSnGqYa5doPoVKtjkoHcW6Qg9gyYMdComnpGLoserFkWi4nrU2FxrD3xV1AANk53f27YU6v8APQmCc",
  "key9": "64JyS1zZXwoKSGthw3BPDa1xsAGi16NHPCdcqEZ9a6EmNJb8GeAXH4tL64N45U7H3Hj8frHP7nkfpQHz76fzyt6C",
  "key10": "2qjpbD2i3T4X7puyNBpG83GvCER9fa192NksKetU5A4Zn1rw1ubppm3qriegiDqXSqfS8Bg2YHSUzhTHqudQKTQk",
  "key11": "5iUqKdtnwTkqarwKjVipAoWJrrQgqv5SygrebJfrNXVhLpmegvhzkmKa1yhuQiWAm9nzidUhtWHm4k71JrvuRxJU",
  "key12": "2oyn5yjTHok1X9uW8hKUY7rwS14UWRzj9gDhmxJ82ecNZgo7yZbWdciriPCaMuZvVYHnpa7zvGmWh7ECEHjPxPkt",
  "key13": "4MYCJA4LDa39bRTrawYr6Mi9EBfS9ju5cCXNmfUeRt6VGRP4CSkpWF7wFo9WwsuqLTZdykGc3gUKzsbB6C5wnnQn",
  "key14": "bshN12BVwQBrUYLa8qk7jNkgzqFYQ4RCHpoFhMT2yvV3xPXz9qp1RMkN5vzyRQQRKZKpzrKEsKaAf7RZXRLoyDE",
  "key15": "5KbDnNPXZKMaLwujuWwaeRKECrTZMcMEBRmJWoyXCgptxHnF2t7UAydbEC8rj3nhtSYs5wAjg1rwK6p5peBRD4aQ",
  "key16": "xNsefafnPowRD51QCoo4uV11EV7c2D4kMssToEhpByLaP2jKgVkgEYUcXFfbgHy7W1PV2VWdVRc2pT2dVEsbHou",
  "key17": "QnjTJi9rptD5Gn1FVCBPwn9LaJtgUXz6AYddtbxy5WTfi9v7S4nXwPhwSjwaZS9mGMSgetT2FLKkcbmoBTe69dM",
  "key18": "4grchK7GjwZxobaJz2bw4P9PGmn86sHffZoAjy4R2bXVqybD5zr8DLZ3bR8URSVRjST6wgRAo5eTxHW27iaeKoWv",
  "key19": "3zhF8cEqdXCZtZ3jGsHRXPJs17PAMbuaPLCrnwjHt8P3JGU5JxHXuWzQNGvP8x7udmC6K4hvNGG4AYdcsdSGtCPF",
  "key20": "HkZH29jGmF5BG7EgLKkLJebEJHKPY251SsjSqHf6bo7B96J5CZhjvGztDtLF2XyTHgz7CMBkGxN1nphDfScBbvW",
  "key21": "2ZgTSscozNrG9ScPiC7F1Yt5RT8ncddR1QnGP3EpENVwrnBXFRVSP7SfwLB3yDtJE9Cu9bMY9skGbUr9soh5K6s5",
  "key22": "4SPfgxC5e1FCDWSq1BC8QeHn8mFEgpddEHmTLB6357sNypVQcqRLxrisE8PjzDfVpVAddWR5XcSSRwAnhw6oXvaN",
  "key23": "491UQ6BHZbHozJhaUeiYJvjBqJeEoAwddxKS34KfH1RgEnWTTfUzyxEw11MaKHErnXXmjzTxsSWzsmHdbx2RrRy1",
  "key24": "5ci7VSyAoP96hcYf7Jvx2JjNn7jpkRbFrP66R2kRbLUJdiJfdGnXph9BxBQv2MA2qed6Q7cTJhkB3s4MPh327FrJ",
  "key25": "4Ssn9QzaZDYVorBfqqS9XhLGqm8XtaBZYxbMEQej7yvsTXFJj1SmyZspauYiH96ZM6MrnppyXteGPidV1111yXRN",
  "key26": "2mX7gQA6pZPrkGJ5gRydHmw8rKxMneCrfthiSVwaPQpfWV85GJ4NJH7xSmRAxwkyWcAHKcBeGNU94oWif1myifRQ",
  "key27": "5zqoT9FUZLHDqisMhNoSRWFMWNe6ajgD561P5N2ckaJ3j2Uc3BaPqqsXrcHpJVxHr6kdgw4BGdtTVavxtTHTDmod",
  "key28": "3wwiHvFAj8h8nvCuErzGfTaN1eF9opu3VFjnMae53WNKwmXpynC4WXvda1ZnxWPWCBwrWHYELcjZMeWfkry6WoG5",
  "key29": "3ooPEv2GUuwsGApL2RmuVP52EfpxaxQMixyz17NxnUdGBCVpGLrZJjba5PYyN1pDn5Jnr3913Cy4w1MkdD279pZH",
  "key30": "4AmFW7G33PfWHCKcqdLETcoGCiYvWu13LtZVm6cTBwxzKYjHTavwZ4WQciW5fMuWMkqKgmDUzpCvJiHhCPjxNTHD",
  "key31": "5DWEN6KNAoVbJWoXy2W3WqoU9yKDJARGsyKq6sbsdue7rrzSnxh2oYxccnD7MoSDeMREjJLr2YcabSJMXVPBNekU",
  "key32": "2bXJqqLUCLsF9JzQydJacaFxebbbqDf7tCuJJHoNPxfdwTw3cFJ2tdL5NwC4AAFSp5sMmW3KogWfMyhWEXsNBHNi",
  "key33": "D98HQD8RwMeBXZ5U7YV25sn3473hHtK3GA4ziJZRsTkBdhjsuQ64WgcLjSUatDpkBLz3qvKjY5MNes9w2k7eAJf",
  "key34": "7gwybBddoHc9DN6PLoGX14exeRj2oBEKCsHY6gZuYsck5LUAPbNu9zgBVwVHTj77hVyMmRSdaXyamBnhMNRmSco",
  "key35": "FGqSMojnSb63buSBBQC8heVHHGRihcN9AueF7tLssXcoiuufjFusgEhDPriG5K6DM6ZXxckv8nSLEeX2x87Et1j",
  "key36": "5egoi39fR19vziMXPVinWHwX6X4DbFAfW6apCUQE5nngKHR5ixo8Nr9afETTsGmfoUjjWgyTVPdQKWU59DQqkpTf",
  "key37": "dh9pfjogMU4LyeDnYQyZ2SVC49M9fAWL4K2UQcothihRD2ARbgnTqkZhwJsM2GJTetGbRoM9iCZZi5jnSi6K3QP",
  "key38": "4X1h2v9UDzJiVgfs5cJJdkC36toNqQ6rNa6xrpUPgjwJavzZDf7v5N56dsQBjrcGbd7rQmwELvATMjr1r7Kbfxbm",
  "key39": "5jaQUCtvXCVkZyvAwWRX2XL7UtxW96xYwrXfm4ZMMyrqWMb9gcnQbyRL9e76wzdznJz37EcbbKbfZ8L68MtjbEma",
  "key40": "593SAroZNioCbF2r13jvCS5fL7LypFGbdnHKB6RgJ6hpQiBuchMbAucw6W35RfhyFEUmRK1H7fqi5Ccp4Ech1PhH",
  "key41": "2j9BaEwabrpUMAurXFYv5aZWCKopURSJTU6TfkAKbQACNYKg6fdps4XMzrkNRWy7ToVgSTVNgXEyCrXtKRWD1r7q",
  "key42": "26YGFtCYUevMNfR34BEE7xQegvzxy5mGwrfQmKN1iUSYh86YCKhXokUYncb7khudVDHZx5vfJBdmK1D5XZHU5Hsw",
  "key43": "3KXYZasYzs4soxwvHb7eVCZyp3jWwht9wVRWiJDYr8M1cu2HXWDrQMoQpWHgjs3mnx4rxy1rjPmGk1b3zi5m3qGs"
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
