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
    "5tNuGXmsd8WwkSzDCanR3mApZ3xNnu1cZF3v4epLW2DFoMRhZy3waXfbFKDFmqDykUUGpP1chTAAf9cirVdrDvba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WmdwAMksmjnBroMkZrbJEWggLtJYqourMW3FXiRmb421CtGTeosvwMzZXkqyLoGHgcjNKNT8VRn1fRvvqqzAV4K",
  "key1": "4FaiJyuSBYfNeMHq4XfFDFDuNiYMc8jEPb3Asav2acLGPs9Pygne93QvPsku9Y8JmzVpEgWLbPR2xvjzoJS2dqbc",
  "key2": "3oQhZ6sH27a1DJ93pbxSEjGFw6xxCHs1x7hhan7oZA1axJRWTeBrcJt4gjuWnLqegETvrDjSCszUMiPN5KwT73K6",
  "key3": "4PfM5zDV8y2S2h7YvSuhpmm4aqdpfkaF75M8eq4H8ZU8fd1n5ce35CyfojRx3GQFB8HUQRaHM5ACpSg8BUJfJiWb",
  "key4": "3CpSgeyEC1PSNni57nFK6CZAesn21p8agnfadj6876JBbYrQXT64Q4BeW2SwG3RFaAzKWnRyWtK9PUW6FHMECsPK",
  "key5": "531bVBJyv6sUCyKNU4R6Z78CpkPxT1y4tPtWegVkTEKyg1uaASvkDR6C7Qkv8CTJPWz3HiGrBh79ehxt2dwGihfh",
  "key6": "3gDmydDN1B2eTRFoZQrSGFeNi6irWC5oK4hxnmNKjMfvxZVcH89Kb5DH2p4VpEUaFQdVBJiADSBNf3jAfT1aSjn2",
  "key7": "2EHyCgiMwq5KgLQ4a5G6on2dsUq124HLXFfQ6pZfZFUY3fnoaf1KhfNw7u1QpwoBXvnnNMxJqcMRDLTdaVbbVSMc",
  "key8": "41AfGzmSbd4NZB2ysTdYA4q7LUuLdS2r2VBrb9UP3rJ4crqNpzSkqEuuu1PwJUNH8TgouYB2odS7WYeCG5psmSZ6",
  "key9": "2HGP67T2cgLXiRGzTjNHbCZtYT95QrtFFUWjBEhmS6NMr3wXJY8ntQeFaLGyYn8VoDiAD4cdaWRNrVXEQa6JYxmw",
  "key10": "54riTdqfedvVptqEP7qHx944rdfqfDzrfjSkPjhjdtJ8TgeAZFg64E9zgGJ9RQwemEzi5U7fvE2r2c7v9garY8Gr",
  "key11": "2aPJio4vpScepfE2APgGQMC5jkyBgk5D5KX683VNcR3bNh554S6ZYdzQWr2E8rygaHBxughz4LBHmqdee6kzpa7H",
  "key12": "3U1GaWaskbzK9paevBAShNLJcouc1uqcMaPsaP3QhwWqPnEfHo2Y5ZfAGVshaghJFUfCr2PrLCAuyxRgTbUtURcv",
  "key13": "wt9bqTuYmEZU6dKB5QnvZ7BtyTG8utoxXcLxFEd6ihkqdPEpXcrwPeZ22wRXV1D2As6s7zgBv5htvrqPnymBcfe",
  "key14": "U9qWFsLsNfaLJZK9CHoDTGZQR2ZURDbRV7nhSwdAMKuAYBCAzc39JZjwrFJ8ZTNkFVXJMGZZEJ4aEj9VCL7FVJp",
  "key15": "5ZoRxWqnddymbWcbP4UyzZFDwEhHvSgHZ8bWVPzEag9yvtjbdsZKJiyLrH8jYBTBrwMduMhtK5atZaTx9HFzYuyF",
  "key16": "5fiJQPbEFxKyRDTS2WrXYLX6WxN7ADBDpYzpUwaTvp9gWQ8j7X8C94brgbJ7ndKVzXSbad5i9vv9AJex6yxEdn6Q",
  "key17": "62vS4zrbUoy3YAc5C14EZbFJ6R4vqEcG78BWz1eFBrMQDkLgjjBY3q5hcSo5gtjHnaHcnjF6ZkH2SukL8SKqymP4",
  "key18": "3FNXEaGfo2ycMkRsR8ky3iMYY826WdK2sGUXwYpeSf6o8v6Bb6zku3U8RSV9XzZZatxPunWDYZadzJYvdzSbA9K1",
  "key19": "2TXDPEiDf748bzYX3MQoJsBfUcKkTGRvw79DSzMSecVK1SKZxDY5i29hM1yrPj4yHRvV1foZLXVu1nWiWKYJnz5R",
  "key20": "DqDv7iNgcBarQZXCJPbWPuv1XoxXT5YTZQ2ZVeK9cNiASu3Uz8wqJfHXsQdhZhwqWdU36yHamGeiXyvLAcUUeKJ",
  "key21": "5nYQxnbToxgPzSokpqszvu579UyzEFcJXmtfdkcDLai7GuSuR8S7krGEanmhyQRJq3FxU5X2i33K5XJFcvB1ic35",
  "key22": "cXR7MMSLRGgNuC8HpyqQt54xA84Mn4ib31ya9puUnqFnj4L5gMJmMibpitobhdaKUkFMhbyNTWCdEARiVmuQRD7",
  "key23": "5FQijsweDhEj9ye4RtxsM62yMgA5rWj1fSirWuTQBAzFw3afaVoNvxYftEgkPm4N99p31LUAkQcwyDLZE6GhME6Y",
  "key24": "2fSKRzVmgvGy9aXHxXwTBKFEr5pBAyLkoz61DLB56P8qztFWEGpwZFZSXhJmUjhHB4zyDLxP2igZotJYF74yZRcu",
  "key25": "3tgrCBgz7R92tGskDr3vo92B8QkpxJ3mEzm4mNyTUY4KVMdz2Zwk4R5cWD2BGnk3DsRzEbbGXD1XrjPR3nYGhoVb",
  "key26": "3SCmJQRwo3HoAyD19jsiYJukzBqNKMRQ9eqxqm4bj2mGPEkA4Me87KVxbKfLjfD3EAB6PBTxQGqq5uc3GyJ9XpET",
  "key27": "3JxQG86yURECgE3BfUChWFYC4UatMfD3vr9NxUBFGtoFqso16hJJykE29kqCgDxVc6gY99ViTnSva466rkVD2Aq9",
  "key28": "mNGXZH4v7mpgEDziYKFxptc2qYapCKRzkP365NcVJ26fhBYEvt9WAnCEtKL8uafBa2p2seAnWcVPw1VwRCtm7wA",
  "key29": "2CSB4Y875Eep9CoySMuZumWLKanRwBX2TAqqMhbXFWR4jCujWkHBdhV8DNmDtrdtyfq7bG4bTe1n8eoHAPPNHBQT",
  "key30": "5EkKGv2a1PWSz2bnZAWDcoVwSLFyLtx1guoZ68Jk6QqbbMVUsSyMiNKBDc45d1YK7VzZ6H7qxAFNiPFj2yooyWud",
  "key31": "2kNPK3N77N1MEVrMXQXKdGx6ESzPdvmeWxr6vDJo4EGa2sDGWgJZVUdcRA2xt2PKQG5RvaTtG2dzEvzFSj9GeLgK"
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
