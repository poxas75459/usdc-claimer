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
    "2gLNZXmWvFbA7td9dWzBXPWexxNUwMUZKeWKygc7J5dJu27xqZckibS9z5YhHzYETqkB3NsukSFTnTkedus75yc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kEhzHC3ho8rYhRsMkutWHVWN12NbBgk1YSn69RTNNeq939bhiRuh63WSKvQqQUW8waHG84ReFw2iRnVcYXN1RYY",
  "key1": "565D9hXfg9ZGFxmgniBLNRst8HfybnsQvwkFfVRzrM8tutdohTE8DXsSvFiW45W86gr8S9rX3QYnU1byxaQKLc9R",
  "key2": "ZNTuz68jqP69cHo6w2k5QMW1DRvWjm6dFnRHNthZG8z8PS8ZVi3HiFonU63QnQyGBguYktL3tbtUXogqkuZXxUN",
  "key3": "4xjFwJFWy7Hik3LD7ogWKjC91cVtorb2TEWqiqXAPFCkXWZqF1XHxGJAWzzWB5QejbU7hBXtb32yrSTazMptmXTY",
  "key4": "SHsKAX1qBZd4rzKJcoM7HWqeNUHCntdEDbsKbmRy6DXy8e1mvVqt53D8ePPLurVosYnvNygSJ766dF34Dcz5j6n",
  "key5": "4YkwRPbBxZPqmck5D8diu5RNkJmiit3K2Gw3KNe8qC4Tv5QqzBeBzLhiH2ouoztb7TWeKTGxCXA1WQeYYyvG29yK",
  "key6": "2AKF2EeoqLinVPwWUhYyBLAswq2nfnA7yq6rWp22pkiUYaDAjJGiStwFhk3Qr76iZt7ZeAqYHDok6z4skwPaKhKX",
  "key7": "fhRkNEA6zwnpr7PRv66xadJEfY58B58LezftiXLmKePi4Ex456YPPtpYq7kAatPjdLbdthYKPmPo34HjLsxWTrn",
  "key8": "3s4nhXjqF3G3pKVcHuGoGCwYo6koefUY1uBrJxfJuYRxBdHAtKj1aFXJF5KwhsqEGKEPWExJ7xf8CM3M6rcvWVx7",
  "key9": "3JAp7riyS5RJYU3pNhmnNDUb6UDvGDKUtdJ93oRiczTeztSjw2Tzer1621im9S3jzpwxUZHoS9vpCE9NmJ2w1oJn",
  "key10": "2bQbizBhSfTDs8woBqENiY4HSPZg2v7hrxQw7u8opbGH86gvVNMr9JAw5dd2mx5WAP2gWiAAyEbXSGZ8FLVemPRm",
  "key11": "62noBfA51ZcHi4Q5ZYRWYja9g7qKASmUi8xaAi9i3CiMLXggWcc78RsE2Z2izLPYp9WssTbzPAeS4EWujXJY6Qnt",
  "key12": "3ah8QX2MfBL2Hwp9WNLjqZQjm5ZX8PqNDFDXmEFDvbbd1HwnbkRwT4iptuX45JPJpSxTHexnGygGsqZbba21DTga",
  "key13": "3frcBfMeKUPfGwxRht7t7A9opXTU4iJnVPx3YVxMY169Y2oAHXrAcNMRfCC1b1x38y9eKbwhhptiGHytoyZggrRu",
  "key14": "62rgGCiPtPqLZQBuwU9xnhBW8BR4CYZiNTmXGg1cj1oq5cPuNXkHSJLbVAAGpUUbrYvcH93qh5oshMqY6G9aCVGj",
  "key15": "3r31oCP9pKC3GGvxvwwpYpdgTZkdfhSvAHXqHV9ryTMMp9tZ2z41yY1qx35Lvztaco5LSkxb3KSRWDLLKBJD8r76",
  "key16": "3RZXiS4rLD4cnCxWk7kF4Y5GZPoURme3SKZxpjKbygKbr85RTcVKfStNdq9ps8tXhu7DZGi1rN37n323vg1egGLn",
  "key17": "3cDQ72efiwh7VJ9vfHdAi1tgW1dyNLWdyKjkCNVcVZEsiRBCqu8iqcq34kUMziKVfwnQzVFwa3vMuWoYMqGagnaY",
  "key18": "3Bm1YX5wtttFuSV9ns1HdaC9hBB4nC5n3RaoaBUEZWpgufw9qLQgWGfToQMQWVh3ZSu9rdsCLo92DQc9kgwL38ep",
  "key19": "n7xE4jx8YZJpevbRXfuC1HCh9mMxBSz8uD29WqZPqjd2eYwfJakz1NNVTWevnQnhGuDBst21565eLEA3ZGt5dwP",
  "key20": "264aRK9aAiiNSQWBxbKRTxAGFpqx4yNWqcCwsnXr8YBqjhjL3AJQ6uLsXhhnwPSJkbZ1zqwQoNAQNYhPJbARPLFY",
  "key21": "5yQcs12bxhkTt5ccpJNiTw9TmicYbW3CBDCFiqgPqPnSxLxfdMeh4C5Yzyr3Q6NefCSCUo9RcJcLxVxwGzNBcZW1",
  "key22": "3bc4VejHViuxoKAM7hVFD3rwz94KZYXY3P9ZHkPu5hhi1uNKwCibV6q6R49Bgh5rnGmKwH4k1mK19ezQSzDd2xNB",
  "key23": "2qXRWGaahNn9TJxJ8WDPDMT6jnkJqYy9mNyg5YmQQXsNYT29q95AkShzFtfCTyrNtjXxWbKhguM5exZqfL6LUsEz",
  "key24": "pBYtMX6XUW9sEHaniBjdKYuY46tCwka7FMEgSTjdQuTkjM6eDBUzFognV9uCSfACkwpejThamKFv33CMbVZsA3Y",
  "key25": "Sztk5n3AK9UsXzr8RREyxNeXMYKpjCXPYdXgfwS8CnpKqCDXzgoPoK5DyZfoHJHZCYeA6DLN3At5tN1o4z9MPeY",
  "key26": "4pFcUaeHBRdhVxXGmHjqL29MLgsLnA6k59iKJbAfWLX89RE8aAZmFAu9ZNL6yarMC2dZxqbgfs5CLEAAayigeUUR",
  "key27": "2PqUkFPWCjdSVMSrPao4SpmcRbktSVqqxExQABbunPscUU5j6fqLSrJkoiMGVcKLPLn87We7ne9ScHT9id5kBKHu",
  "key28": "5xW2S4wNTaMvLcqncVhcnNmjkthDSPnzvEo8HrvxJXuudqNvtGvXna2HJbC6rsk7k6WKswh3gRxM1jHYaUGfnFqL",
  "key29": "5MRH23DQxGZHXxNuBovkkuUrYdYd8aQ74uktuvdXRw1vp3erUAztPhzFFBKAKNwH4PxBQ5jrEjjvX31uRmmUFAjJ",
  "key30": "51wv3gC6E6EWSzF3mzEKKf2i12G6kZwyGjntgm6u4auuLHa2sA53tdtBANKouNn3fANMjYkhnAHjEHUrAhpxkFR3",
  "key31": "47w12UWR3v16kaYvtHURHpKwFw5QwSVj3LSPgnmUihMy4CRF6JXeb3F9rucajuXnvLHEpujF3aGvX32SQj2BGSk5",
  "key32": "3ZaX6dX6cryo1FP5eScFm5Hjb9NekFaLPkZdVQoZVC7y7qNEbu3pF5SphgbGVymkNNMHbPnxNgjDNmirZsJvL35M",
  "key33": "3BjvGHxghVUFr21N9U2kDSpJ5LetrPxSTZtVLicQvVxYUVbTmUAr6xwS1YPZyYqM7ZSNX42uidZ2GEeCoLKsX7KP",
  "key34": "2iBvhBWNNSuDVcwWSozLeuSMRtkfnA57va96fHynbQC4AEAiv7TRpett7B853tKWaGx3EAab8wbPC3821aPfnjAj",
  "key35": "1h5vtR2wLsuVEVuAcGZFNyFjfcLSEeNweUH8CvApcMWMMManwEnbXvwdWkrCpV2hacZFqQpKHHHeja2toubpp3w",
  "key36": "2dxe3j9yhv5c7Rj1cSGKewNzcM4jin6yNrn7Bx8obePGqtrqgfUMjaB491GKQ49XYb4a9wW4TXFPeEGkduBG2rXY"
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
