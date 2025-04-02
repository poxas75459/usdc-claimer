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
    "4Rywgmr51cnKW6tk2PoKv5uCQqG6g7gb6yxDb4JLyV4Sdt935eGQQr3n52MnqxSZzF4tPUwnrt8Td9dA6msHRHZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EKvYaWSEkUBsirM8tBEwznmf45qSi11HheMAdJNy1WQUVDxRYLKJ7k2ecaWgUCZuAazFyYnpgVBmV7tSPh5bB5E",
  "key1": "5pnWtpbeEjiE7AEASWyr2YvRmGmvRSMEmjzHDs1uLuQo4WobjcaUqhDdQGaQm6z8KgbYB39nEUUVyNWiejEu6zsA",
  "key2": "2ynwWdKm7GoMRTy5gKYt88WHRfRt4GYRdCoWZhJAb2PvcwJgPtw8oT6DPRB99jktmSuAv4atcrPmNWkSNFDHG95L",
  "key3": "vd3HgFAwXU1o8KUqnGYj9QLA66d2PhguLTkaXLWx6z3WeYAA5QRSJmeptzoQPAsCKCWnDage4h4iTXqBQo9rMAz",
  "key4": "637NULgk5qnGvpGDas6rdGx6szHS6EZDbc7qgWGiF9xW4TP2Mmf4joTX4kxXprMszUbz6LMmTpg5bLj8V1K33QBh",
  "key5": "2JrpbmiFUtn1CW2uk248hyQRE3fDqiszyodnJEG7DTo7tiEFNbn7dctkmeZvK5AxKiEB39NYmEzyAoZciWhSkeGh",
  "key6": "5yDw7Fn8pyyfgp7ET5SPjyH28QaN5r2aPV852zJLsUi8nhs7Usq8Jrs4X6b1cHK5zSQng8MAvRiKziFmT26mRtVa",
  "key7": "3s3ou9Af9KhcHJKfoSgriJXxQc2nQH7o9nfkByczo6WH3K3YfAKTsnsNqAXqi2BURifXwpkTS3fVEHZekffHcq1c",
  "key8": "NSe9XS9UHTmwbDcSPC7eU7BfeKUNdZpAGP7axX4ZNfKFB4SDWmmpwst19vyLAgepvR5FnoEg14PXjAUo7Z2Ue9d",
  "key9": "FFYKJF6TMHdiiQkn7LvixVnPaTmkGErVAsmMZPYgsppUYLJr2KYiqBSW5pGhRJcSSEFGbRi1ij4rCeU59hToGt5",
  "key10": "2fRAaLets4ck4vAfhsMp3w7EWXfj62CeKCj2d6Yh8E5cBgYg4VW8KMR9QYx14DgAhqh6RQXtADhSTpQCnow7q835",
  "key11": "JU2qHcEL7LCUtc1j9BG6SJdAPCreA3FPwbBzgXfgrXRsw37V3z8y56W1u1uTgJ7D9C6jA1D4HxMt9jnwnN6goRB",
  "key12": "28H4pzZKzF6VBb12Js59N4vTd4V69yjje7cmEMPRKyk9R5TzXtj81XK8zjmi8hfUUGMH8NoWvUiFxFESjkeYZU78",
  "key13": "4VpTboDHrUj1YZNCKqgU3rh68gd8Q2ew5RuRCmhFVWAvnNv5R2gWvtbBuzsuDtke74nq4joRD7LD6kBmUp9yEjRC",
  "key14": "2ticVR7xKFLGSv6kq935MWJDPHh5aZASdihmiXWMGTRZSaDr5Y3X1wdpCKoBaiJpPTCmRA32XTmFicTtedChuhRD",
  "key15": "rJmX5Ch5p7x5Qx7vgKNKtNpyDXYBbEtFifb4r4UKdEBUtjwpKWu5JZTLYyxFGTEeYQ3aNHXBinJUPx3KEkAGsiJ",
  "key16": "sJvv55e4RGMugKD5x3mSuZar9r6DGtPwvphF6NQarHECY1vB2XEtdWaH3sgHJAtsjUKUM9yJhemTNqL4Epg2irA",
  "key17": "4BmVdDFq54hMCgTVwWevwGb5pdsoUUoTzjsxK6a4sJ91jeGi1guLsZaJdprTPx8Wag2zfPVZKgEnqhEb7CvW1kJp",
  "key18": "57AMCCHJDaUNC3GjZnt8K4vuPTkuTMd8cqQ39w3WfTHpHbZqSi3YJc3253cgLhjqREPDNd5an3XfrM9NvJjaXTQ2",
  "key19": "JF4mDJU9tb1Gv25XzN9ZuNoC5UY2ofVzBqgKDVV6nSExt9FrsMj5ModKHrp7FCxni3AQvXcPPj7q3V6Kwi9jWkZ",
  "key20": "AGTCbjv9b58PRA74iqMxRfRvTY1wM9pS5KMPVn2PcZYTPBcij6ixovJemeWintkMTLB7W9upVrRMwwnuvrGif6f",
  "key21": "iRpvgirPup4AAMbCVM6dsxmzV3uAuhuyjfoHKa8KndW1sHk4twMZAHiNHgZAWNwryT5h4581n5C88CavfQa8BwZ",
  "key22": "4Z6VezqmqcPhh91bkLBhHj4d6PRUydxPbBag1c2xkjsikFRnfqZpgHTMhaPS1drXtkmK1PfyqczckyrcsXcGeKG5",
  "key23": "8wRJCqgjRnLruKxKpJsnZp64ARY1Tn1h4sJs8YEJxFkL71ScZQfCbVet41um9fnYdSKWHj859oEiHajDTmPnete",
  "key24": "rvC5piLHTEkfPASntH881RVahdX6HfmhXoirbg1YUxG1rmx5GTLpC1E6wgBPsDr5oFV5pPea1f9ji6yxfTFD8c7",
  "key25": "27HUgPoiFfXgTdYJYn3vAWTm5ubuVfMiNsa5rEk2NhhpRT9Ygjh32uczA9EG1dJBonFSd6uHUtp2SNs35QQA4jFp",
  "key26": "4eNhFCMC6CCT9jQeSiv2CHBx2cyirckUxUu6grrPstaeEuq6f1XQFXJRaftMXcLmRoy58pxjPv34n3tufoDws63T",
  "key27": "5VfRLU48MPUgvPr6S5mmmF5VBKyBqBKTe4XX3kgzCZ7pqfX5HUFU1uTDr4y3w18SP2GBQrW6eGwQhYkmrs63peJB",
  "key28": "5P3mkFYUeZmc7xhXJc7fFFhREe7drdUAQ7L8JU4TebgjHU4dRHF5U94fmkPYVtHihJdvfbDijaZVXWfCy87K3tBX",
  "key29": "26zaLmvRKKdr24cMNn7DqLZP3bgKnumgeKhwo4eUH68amVXwWj3mZqw7mPbTfpKsybs9uxr1FpS6FU9WkCVkheaK",
  "key30": "s9BjvLnjSLDVP3JapuUirDZUwvHTgFfpxpcVcp9NZiWtrdL4MA42iFn9h92h1rU9NeV4siGhMiQneapxe6kqWne",
  "key31": "56MeoZqkC3ysuhXcA9YRceQn4HeRzAjw4smSaGpVbradUJmq2B3113VLioxo5XfdHK8PPGehEn1dtUDkAx2b1F9T",
  "key32": "gu1YUzrGggR8Jff8WSAb8PZdSfDTPh4EAvoWfePh3Cb2MgKVXmg1VPvhqUNDni1KgYZu4AL8gqFvcGAtGh2QrmS",
  "key33": "2rciVu57pQqZTcPDiSnWj4ssKQSw82j2ZkuWz6CUfv91vz9fc1RxKTS9eoWzCSyh2zWMjxAQ8gnTHpayPCEmA2ti",
  "key34": "3qjopDrptcM1Q5eXgYyPYy9p5vB9tR683mW69aVMPMgcnHBzvWnYZU72AA2MK6EJdH7wUhsrTUoRbavBmE6Vk8A2",
  "key35": "4eEuiPesFStsCFizSXpzSDdQjX2rHrD1cngb2Dz9j5phWsSLsqd6RoFzarXap6mj4MrVMDRJzbcFimbZr5SGapTy",
  "key36": "4tit481oZmYywcd61VNEmDuozGp7KkzYxXvgc9riP4qQfnxbfujGPK51m89A6maQ83voKcQjrn4yZyXY16TVj3dz"
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
