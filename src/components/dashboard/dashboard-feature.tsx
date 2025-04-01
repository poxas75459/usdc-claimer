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
    "pgmcY5toftKuADhR88FYYwcoPwGsLwWZUCHnHt3fFxxDFBy8xu5oSETuxwzd5ytd4vU45Gu5bxvKzpwrSiXr33i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L3Q6MKrxtkZ1yXShywNLcRYovcRGmyNVkPKcJawYCd9wyk4pfqe7fhxgw8Z8gj6A7Uhur6VjAwVCtpMZe5raom5",
  "key1": "3scswHemDVXEiW8QH9FQv8z7Hf9DvnYsmJfZeZNnRNzMQGP7pUEt7oyKC1tzTrjeUGE1VUS1USMDxevgMFzKNW6u",
  "key2": "2gFUBWj21BgNP2vTT2Wdk8EHqnD8UXrKASmSZZUsNMzqeSPHDGjMYYUPW1tYKCUxZQFTUqxFMoax1F1WWjCDe4pQ",
  "key3": "BKs4eCwM8kYoxG8Z8omYUiLFDoQ2pcP2hoTESTHH2BADboPabmmdvu8dCPb7q7bP3qMQ1U5yPDxhkuQfSVaXtgh",
  "key4": "554aEHVtNhM6kDVQHxHgWtorSmvP93Vegvz2LbEwq6oF6kBoavcnpMGRVnzCzvgFY4U11V4EzE9MSs8LdFoN6A9M",
  "key5": "4ad5jaE6UEkXc1cSPrMqTpPksymWb8qgHucwP2shnNPjp7wDmHB1e6XD1YrhraRVfvLKpAZW1RSf8LvfZL4wtMuc",
  "key6": "53jbg89imVKATzEeNmGzvaL64YnVMoWRMnCmPgzRBjqfAn8wqnpewSg38ex5G3pHCcJJsZWKMWNCEQXDv1J35kDM",
  "key7": "2SMef1p3mgF11oSF8bBMknsBGm6bjesoZ6Dfh8pPKvcEc6hoZgNznvaDpQ4s5kjNkYqqNx69cmxk4DeFxNH4nCt6",
  "key8": "484cPKaq492PDc3WnsPhtvi1kw7TES8ZLvp6b6dmLvsqtHQ8w8j6GWpvNvjmGRquwCh9uoD7WpPBG2wpRtZQJRd6",
  "key9": "4gDBhK7rGJiLWfmFE1TqngUJ7T6rcZnMxrDmHcbSBcPTHTpWdFsDfSG1KioyzzViyhDQCLKyrGAmLxiE9yrYvQMY",
  "key10": "73THLqcjVBCevF1oEKnfhkhfN9qinXQZnEwFr7XPMhaPv14Qj5ivbCDCqshYDuBodX9yMSdEpeTGR4yhJKPa5tm",
  "key11": "vge93cN6GkTAH5WKbYweRFSCgM9LSBEjYoMkb6Fu6NaFC7tZGXvYfkJaqueEvpWMZsFc4z3CD4pfbCFSMZ6ZMGs",
  "key12": "2abbvQSZHLQbU1nKfn3V5caM7HPDnkQqB2js2LVgbJ6kknaYkocWahNM2CxmDLCQ1XXx6UFCVfaQafwmii5Rcj4K",
  "key13": "RrVbqYrXLWp95CihdXPC9hBvHAnkPqHdKV6y2eS8h6JiTN9LCkviB2Hw7aiZhxrwDiX3qG9RmMF3umQxyDEG2e6",
  "key14": "5XrJMV8KLgtnMrhMbaMW6z6RBAbhnS8KDE83EGukW8qoi55DzUpWBb5aG5M2iECBB7SfgrYXDkUJHv8vgm5K1v9j",
  "key15": "yqtR29cgknUeoQzyNQQmQFbJrp4ANDKH9g1ZnHr59SybNnJc5c1x6J7hqhLEiwreYJ9GUVdzj8Ni31ARTFyrvu5",
  "key16": "3FDwCqo5hVDqnbHCYJhdRGq8UspWniEc2tqBDrcfdafZnDfz97nHREix55hdPfzAHuSqcsYmiTSgcmKDYvDhtMK3",
  "key17": "Ujsx8TLsorwt4QYuuZMA4pSGpccQoMLjhbTfWyawKRhbXK8mfK63VhMqMWRK1p7ymLTdCGjW3Ljww7oHgJAw3ZW",
  "key18": "3GLj2ziCQb8WaZD6S6CHzG9HLa1uuMNLJbv8GfRaPiKNupZe16DE37NFSUfXNCcRZAc6whCU78r5Ja5tntMhe7xH",
  "key19": "2NHusz3r2BV777WZBAJFbsWLT3YAuPgrGfUN6SJn9sF9XgUUbJpr7CnEnPXT439wTwPeSkDY2eCUDdwd67fhcafH",
  "key20": "5aoEFcgAoV626Ln5R923PGrXTvGBeSK2zmniKJP41NhR1NxMp2QWWrppfgj42vhpZz1Dggy2oaX3b8AW6ASNj9zA",
  "key21": "5NZbdJv5YD149SbeTttZoC8JCJ6TqecE9oaKJgeKBYUjXvzUQ9b7PNQCXGEZ8i5135QtoqEnweJqskueMAgmCFom",
  "key22": "5cdkU2U4go2VnEanXvv1yvJ657C2dCP3pwoBCxu1j61ZZQ3Sh7t2RtM2v15LYhxdhpwurCjebrJWM2JYiud1WnDf",
  "key23": "4ggGesVAdvxZM6CEPZAsjcfhXTrx6bEQSjM3NhsjprY5dt7CUfdpCBRJtLXJjsQFtE6fgd65dSGsciUCHzV7FpNF",
  "key24": "2W4esMejMuof3uYgHntAuefQWhrfk2gs3VmRK8X98j1M7RBJz11MSqzSQo37ayqvqiG17L5QkBxsrYnSK91CBtNF",
  "key25": "38EiJnaGZ4xWsd1cFfPok9Hs1UWGnrbUoh9nSrEYKo34nHs9SkpcetKdeu2xCc33nV84PfGLbRxjYckur9S2wnH6",
  "key26": "3cTu6xHFdab4xE98c5etG5KnEb5X2FtxcBm59kqP5TLXT4caaLPLFoABst4wFKoJazCGvg3TQuY7EmJBKPRnwbYH",
  "key27": "PwSDDSUhRPsA1Z1hqcBvhQyt8ZHNkwMVC12xB6ZPmuK7d7mrk4oUZZMorNV1EEWstpEYqT4EN4v5VkJ1kAyVg5Q",
  "key28": "5hHbDJj4Z2m4CdzmmUNgXLPKhgJJkRwG5m8VSvqQbrHERZYWLbuwu3BGV14ftFQHB2dJ9TYQFrYGjyrctWQABskB",
  "key29": "NBPSEFBz4zFqoW3Ux5hcraQUg7ZweVFK9rLLEMvGJQC5DHdER2K9wLEGWmop31i9CvRgVh9EPffGYbgGMEuoL8H",
  "key30": "kqp5n6qbu6zFENSFSXLAYDKB2zqy2mFxoYcX7BUW7mojvf8KkhGazBCAWzYCS2d1znzMqjugioVUSHE4oBdCviB",
  "key31": "4PzLiHvrjU1nHFMScgaQFDMbJa9kJZwUM7ndBNChzoqodehkrTZpgrr1Gmw96RPCiPQ89jfrQLKmvptUPvtd16Ft",
  "key32": "1Wue5Tfc7gfKRbpiZWp1o6MzDt82NZUBkxseJh8jehbDs7QqGm811n8sLaZS7WhEjTuZB4cMyz7ZtMmpHcuXnWZ",
  "key33": "4Ydb5HWRJC8sEhYYByHXDHJPujbAy4cG6pAErF6dW4pEQyTUuCxHDj1KsyeoZ2iCwUGYELEywLpzKsbsKTeFdB6g"
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
