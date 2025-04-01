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
    "s323EzyptSaDx3Tp9vLk95tgBNPxeFtdP5ps2twpMqJ1yPUJELkEp6b5r14QghDk9LcEJNtWXmfRgJgMDYzxegN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m1xoRnuHZqp61VrW5L13qY1ezio65pY6ZnppEhShtnVmCeY3rvwaJAJrV5YuXZDszJe6fCm6XnzgFPCDQHHu52s",
  "key1": "3kLknj1e1sMrTU1hCr4PCe72mEpkb2qyMe9HGjvUPDq4ndVBVkP2fx2nBHBgK6JTuJuhhwaxbMnxSaqSh9DXMQAj",
  "key2": "MqoRazxJ1JR8NxuEGBWRTa7FqBMayrr8jzdn5qRxv3b2rpZ9tAc7E3wRMgUuG4HfS3WMRZi4a9MxMcW8aa8zxgT",
  "key3": "5ptDPTa1S5LwNZv5cf8RJQqiJAtbf3ko4Z21336tJq2SaNeia6E2fMZSrbwVfoLjgbvTJURuAunr5trqQYJikrxZ",
  "key4": "2kDaMQbczrJcxGaabLdhFzg98XQ9jQRiRHWbRcW5JkK3gnZdSCtFMA2n872NVMGthLzXm6dKi2uJUm2AuSk2nFvS",
  "key5": "2sPp7j97WKK3uNaYSfab4PNkMFAtWvocYLv1ceXFA52c2if8TGA9yjbE99LTNbMDEbRH8ULdtbk8v26WgTNogHgr",
  "key6": "4mYqYCuzZtjzjrajoPwRDG5vQnMkL4u3U7KU7QoiQN5tPbCVYX9Cwy4zo1BgoYvHT5SqizXjKiLJucvpaAYb5eBy",
  "key7": "5QYzwSnuM1ZtwLkhnzgxs28vnE4kQ8Gp6Bfqtqw3beeBBYQATDE8ip4X5XrrWkByXNmaFRHL3XfEUMxjA2szLS7h",
  "key8": "5UyxdyHohNBULRfcsN5XLvgFcMrYVABa7SmTsKvepc5vKWwRfVCnd4dryjFD27u4c6WZHbVicTVcidM6ZrzwBq5L",
  "key9": "5QCrRGNihrnCVWGGQY4g6YxHgiZ2uFCwoW722NqTzmmjRVMjLGCf6nxiHbNAumKwaKHZgSqmHbQrmP6fih9NpWVb",
  "key10": "66mCxio6xWPgojWF9mtRukQdqVnbobgNQE5crz7Uehy9FTFR4D1ePLL18Pc3weExMab1qPwHcxLBZixjcAFc8bEK",
  "key11": "SYZZSkBFotduy752dpH8bvMuC3xcoZAqgdrgK6qpdDWBTLLo49NWfZroKyTUf27CC791H2A5aMPai7ZU4x1G88i",
  "key12": "6c8dn8S2BMpSQbQnDPnDAiRkLXJi2zeAyFdDZUKY4Jp5tQVcUj5Ye7iSQFRpde78LP3Wg9KV5uK7UuLntvcpDJi",
  "key13": "4ZtsP8TWjkGbPHpvCfacyd3CaFHxY9jhtwmyv214PeGrqT5RRLJBVkdhmVxRqm38PsKg8gV8cH7vWJbWnxmYGTkd",
  "key14": "XcYwYxNuTHQJAdTMALqMkSVSk3eR4sKvf9UwfRMcHgwo6Q6zxT9jgzoKCM9geE5t488tWAsfpT9pFvLagAXghwx",
  "key15": "4VY4wuCHh3RFH7LKW2rxECiKBHETW41rUa8zq6S3N9wKkY3CykKufQPVNdXk5k5ZwqAvf8jB6ATCe5z1V3yrSTbF",
  "key16": "4BGf2gWkMKVP5L5sSR4mchJRnHwSp5Xw9Yce9WEuDhLDPgTWWF4B81wWA4XrA15oekWbuVPm4fQdzXG5MLNeTuW7",
  "key17": "hwowPrk5RUWe48Ky3Efe8aLW7aroQneiBefJ5sFcu2FPrbASrdzg8ShB2mhMRKuU6emL2h9pBUMYAeDo94NMpaB",
  "key18": "2pwxDN7CRafUoa2kCoE6LXwTSDkfmcBE8zYamkDWkbakZpaXnGknobAr9pFrTC3jCc48ArXCuN6k6x9NhF6ykxxn",
  "key19": "4E2EgM88jMpL8eAczb6N9KBa5ChAzCTG8qWJmGircjcxQ2GVXHbLf9FA7BHFjxNemyudCe9RCEgWzUU1swNEKusS",
  "key20": "5oWq3vt1crLQ2HVCv4VUz6LHbgN8U2aNd6fhvVaood8E5qS9UsvkEpvxUhTmkRmBVrWSBVsAXC57rFWr5a9M4SRv",
  "key21": "5JZobQZ6FYBQWB1nPtFY5hSKqMrS3BNtnJ1WKhyWFFKXA7vxmjV8DyWsu2QQUz5b2d2MuSBD6icgT5xgSk5LWyio",
  "key22": "2L5jcHriaGSCn3BK3CMtkPi6zDkoqx4NiZs8FHK8E3Wscd7KjMnuVn6BDUZFafd56gA13Rx1UysXdzvwgqwiP8HH",
  "key23": "31aaojCrXsJdncTS4kpmycwQYYHBu5dpnAnEZ9gdmbkHPTxWKj2YhsV6wNzq5mM7PXJG2KgtymDJvVJE8XwidVt1",
  "key24": "4qraE1yFSKKME8LuPn1EVJRjmcE4Sy8n1eyTqmj4GtmNdVJXGLiBm9PshcbRhk3aKCr9s9JmMMH2wgHM31hptSMS",
  "key25": "3tsB2WnMayeMNvYjRSzG2VxPz8ggJLs7Efaq2TFHJBnmRPL7ADy5CdWAgkmXvrGGR3wYwxJv9C8EH32CYJYAFDUH",
  "key26": "5RFD1NbNFPdceUQ35n2g5oRT8q5K9Jnz7W6uxsAdA9sH1qDvycGszbW9jakWn894SPcbMy1weJNQJ5uRwd3bcCyT",
  "key27": "21Z7AvEuZGstZK4APDEPg7XHUbqQHQ2EpsReowPzJhcgxBkT3AmVvT39yEJTcAkhsWqHAXCnyGwfcRRdRjjtATEZ",
  "key28": "4k3747fT5HcjntCcX39sWjEkzpF6XJVvTsuBqRwpxodLXqSVJTo9pUc1zQ3dHr4xAzDsRxEFs4WrC9rDoXoFNnBz",
  "key29": "5sWKzVQaaiwJBPQpBFTvwSH6hdr2xVErXnvLytd2DtbhyJUrL12cbHDyaKiYHm9KPYXaT3M4hd3vDrWowqHP72f5",
  "key30": "4BRt1szNVZnffryEJ9JQHVoD8LpxbUMhA3Z2Z3AZ8J4EJvX4WrD1eGvhhkfugamu1wGAg818nrkTDCDfWu2GPJZk",
  "key31": "5ayB3KD57zF21qAKhtEWrcPyFkaQCzznpYM6QPy7tAkf8hpcUmy9LLCSFBLWDh8PB1aAsJ71YG7hUge1WWd3zpFp",
  "key32": "5p5bTVMdv44iE6p1WYajnyR1SG8RpTaaK1huHyu9bFB7ds8aRiZuxU2C2auQCrjqgdgK17LjLfzjKFknRFbaWhiN",
  "key33": "5Rw3Rz6NwP8ZfeNj9KApr6Eh3qYTk9WtmuZggPG3Kig3MUSwnwo3tp8BXgGNMpCEXNLoF6yepRKTrCDWuQV9sPDM",
  "key34": "UskX4RppUm6owk8YpFV1CowiiCEYG7yDbKiYboLz5y8zMqwnA14XUH5BBq6LaXWTuG3m5buDFyS2RFea8diLnWK",
  "key35": "EU7jggurkqwfW6VW7Gkpkaue5bw9XTKusiZonQBgDT7pGdsAuAEPPpYBTUCM25BjFY7qcZGkDzhVPc6R9J6xGQe",
  "key36": "2cJ4dTnRXWYemPHuNouhDq2mJWV5EUqxQFh98eCrCMfkR4LcitLzJmx6Ndy9Ej6wtBYnPnhj8M2m1CXdECocGzqF",
  "key37": "2eE61aCi5512YzdC23CKfXRwKkrtv15BSuRe9UqWLydeH34auZfa8boUb9vesDMrz61yZx8Ls9PVsQinXhQKubtm",
  "key38": "2AW83hmLzgntraNbDoWuDt5gEeax6EhgUNcMMP3WgyGFpRvj7cBf3yDr4MKVah8iDGR6fnLaMeFxq4uU8ctfsCis"
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
