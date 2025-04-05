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
    "2NTEQDxG3nUqih8PZFmRAUFFiTsvPsXizMti1N5Kc9vaYuHzKZMPps844dbUwwsiG6hPxijaniypWhc9iDcnUJmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UuD7n6Hr8smJW7E8EjkgA6zNVpWLPsnGkGgih6YkfkmishEPpnPacGrAy53bNMv2Ha2buTAKH1Gw8wNqEQ1CYdV",
  "key1": "6EYMwN422NQHiBfT1PLhR4ZJdEF74qfrZQY543KN34jKryi3MUPtw3drBSWVgCmDPQW2JEueSBhEVuHszwrbiyy",
  "key2": "5FpZFBUDwAwYdQWv2m87A7udR5aKDjkajpLTDG2ubjfS4weaUctWdyiDwwtrsgaYBjMnSfFz15t3sMYjno6DpMSb",
  "key3": "2EWUr2sdHuwKuiHZ9tr8tWRVbaVWSGcSL26qQtMHBq5geUX1w22Aqw4B8iMu5qJYecgdwsaxTkmicNc2Vq1oK5vL",
  "key4": "4dQNKoN7TfzG6wqrewdqkRCZz6PtjGiC3P5CdDsUJiy5zSj4uAVK27kquRiJEGDY59ckciyqnJpJeXEqecJ48ANJ",
  "key5": "ZdEqP1onv9xw78Ez8h3sarU8kVb3ZwqDrS95rDnfEBi3rftTtz1mwsvWq2gQ6TKVtvVzzsnejTCrMCRcjAtcf3s",
  "key6": "5e9xPh3w4ZntsfpmzbEgTxW5gEsKnZbHwE6xXeu1YyP7WK9ApaEVyiTZQKz25Uc2BtMtufmZ9xpVhvzMjxoEqRjy",
  "key7": "qnBL9aSkR8Q1QYQo6vKQ8CGX55oYHKQmdZuVerhopFxcSo5s6ha2DsHzwKgBcfCBwxR7GsNBwg14n7PWQAP1MUP",
  "key8": "5XPJ3etc7DEkjkUvu71fZh2DhNh4ZgSHTeBNh4y1kQhZv84gbi8yh2LhNjMfaGTA8VHGviPRPpVfcFT8NxPAoxda",
  "key9": "3hKZx3bvahqyTR4ruPwduJo32pC7wPADwLm5bjZq9vSCUSF1oEjL5FZCpe8JuqhJNu5QLihEcDktZ6nArLkWb2NW",
  "key10": "2tpDgLrghosFoZ1UV6yhgRgi2rU3m3crSAU5wB8BCfv7gpRqQfj4bKJmxCtU8xWtTt5axSN7JJ2H1uRCvafGBp84",
  "key11": "2N3Jx2Zm76nfEnKDgay4h3fywqwAJ4GK4AifThqZf855bN9YoJJi5bPE6e39vdHMr4eYAMJCm4K51oGjvgMpXvqY",
  "key12": "3yRVYvoJ1vwt2kwdFDPSX23cB5SbBo5NawJgG5dBCX5fCWEeeM2UHHQEYgPqpbeRzjshZgbSBuwyHopLgnPzvfWY",
  "key13": "qDhZz2P873J4FvqbCXPGkGjnAWPYFWSHFTE8reFGhTXjdpjAVGyV16Ay1NrFgWpGjrsrLN7FCe1RcXgZJqFaynS",
  "key14": "4ToENnN78efPDnY4iuBbZecP6KVU7G7GgY2oweuyuU3pcVF9rTQvVBExtHi2UXiptEaMHnhjJ6JDQVh8qopiHhNV",
  "key15": "62kjPAnTRFbcjMVLf3xLJyYvYj6kTbTVivFpsbEbo4hh9tFxd9S4AgoxYZG5AtYaQ4fJgmPJVhvMQQ4eDpj9yd2r",
  "key16": "4Af34HPickiJiX9fHRKbgWwzSFPT5AeLE4Q3N88Prcm3aaXvMrRPWkVNFsvmctpbTqoQic2cWaPcYvjx3Mbj59R3",
  "key17": "5XjCL2zkSzmtWy4b8RJMS6wi1at8qmxcK7nDFzkvpP3gys76ecryeSnvkPguGeXKMgbSK24iL4oadfqQuNHZ5rJo",
  "key18": "4QWJEtxGaXx71yyU8EatmvsdFgptM42a8Uu37abUDez6aHeMiReWuzuJmUMeyNHGN4S4XMm1kRPfEN9jGqSC9oZW",
  "key19": "3bYvNrdmPYHfmMrXTmypcq8iHiFPxRQuP5nZVTNVotMSHW76H6qeKZnqUULZKGh45eKWxCxZ4BncjbbXRpMzR66i",
  "key20": "3kDdXwNfjHKnStMo81cD1trD9YeT9Gm4T5V372D7BEQfqYJNiFDygpMS9ph5fkZvqN1ENCYzSnDWJpC7cGwZjQ7G",
  "key21": "4ks4iqrFTVh5sHgM3cmcaWG2dRKAkJXMF2R1x29YvYmfbaxGb6s2ZM4VME1iCB6zo267KxriUcZB4nHPexBbXcpo",
  "key22": "2viSgjr3HGGJCbeqNoYeoyXzhTMRr6SiVGoBCCnQ4wtAUrzR6trKHSFmih9P2Us3GtYSgUwvCzrNi6UC1z6r4WC1",
  "key23": "55tyP79oHSUUhcCJqsstMFeoHKYDHkbVASvLhJ5AaLgZsXWvZT1MCWiYSeXKtpFHZe3C1tst8xoWYn6Dsp3Vg5aZ",
  "key24": "4Thh2zSGTuuT9wUnaVoSZ7715HtY1Qh1o379efnb52oAeMkLma6gbVwojdeYEGPD2nGYyw6qtC9CEtdxjy44ziiN",
  "key25": "4QdHVAitSwHpCZNLWnEC3KLNeWvYZR77XByx1dMbeb2UgJALw3vVjUxfjSV7eWvnyC6KFxGLLJW4kNQ8dgdLF8nu",
  "key26": "4as72qy5izpSsKaeNJTK9tB3uquhLRhbXjEaThRdnuNn97nmRhhFtS6SCYb7M1jFLUy94WPs7gVfPduHddP1XgaV",
  "key27": "4TqpYMQqDZ6duEhWEMU1UekFApiixBKfvMXXAT7KCAgygf7UnQsFofuj7dJ2uLMKivSyC2NiNbMEmV6PmFR9dLWx",
  "key28": "iCvo3niXXt1zZ3LWKLYLDvNPZJ4vHEfiPAXDwBLVt7Xq3RjACwynZ2We5SU5AMZR9e9u6xRuY3UCqcfqf585jSw",
  "key29": "36mQoYZfJhpQ18TzrRUFkn948UwoxRgP8TbgVyYFbY6kviQ56EaBEYiQ59sYTQ7pibCsiREyBcgqGbS86X3tCNKe",
  "key30": "3w49UTjwzmrt332FvdHKYZSKxGAKze2uSTPHZguvXyNjtKJeH8SCFxPkJSTb2Miiz8hZUBu3rczxLb5FYjy6yst4",
  "key31": "4spoA1hWuYLijWvQBgnRs9tGzknHE4VeTYZR48YGDCQoQpcLkUhzSZ4P4W3AbDfHCBjQnwzjm1q4kpp2LmbfHfZ3",
  "key32": "2xSD3oWEiByAmLdsxGsvULdKUXmtG96ftgsCYdx2wAHdDaNsot1s7uLv7vpHE4Z9shrCFVKaatanbHChJVCzNcsE",
  "key33": "24eURQmTpiA4RziwjuVaaoemEHJavWJ33QKUuNEk5ANjC395pNxB7b1oFZqHxnLNdnB7wprgoDRVXNmEzjaj9yiX",
  "key34": "5kq5fHAWqMNsWbvg9RQ98UFRuYrAoNxRkFkEs8euP2y7veE9wSAzKJbDtXqGsDHjXKEbcDDMo3m2fCdrwFWjo5LM",
  "key35": "4wzo6bPvFAnXvxmQa7NVJ6rNGgcp1Woe7prtc5tqEFG38kkpAm69t4d6cDVXNVogKRsU7fGJyZBjJJqFe79y8ViH",
  "key36": "7eiAAU6wNaundVrbXpYmw7qkgwFfigtaiXEWko58ueWH6KBbi8Hf2atAyc1Z1BeoCXWGg1LsYxGMpbEUfY3C7ZZ",
  "key37": "2bKgCNNmtrcxGm2qXWx9QGcJFW2fw9fhZeizSUjpXoWUyb4EVM2jzPXz9VTtkW3FGznQFjisoVKcHTQtZiT6zvxe",
  "key38": "5uX7A4o8fFg52u13qE2Tko43EJyzQz2HVb4xSLQv1ukBzcA9osPa1pnka4irAiAf7h5rKgFEWqHQFXVuqhctXf9F",
  "key39": "5u7JwFvmNz4ofLkNgdJyFFrXJgbkAdFcZRLgPh9gCisGQLmSKeNBLqKBPTXQWZy3DobWRLNrdYTc8nQtWv86zAvx",
  "key40": "3ZGVcoFeNex7Kjcm6abMcoP5wm4Tje9YA7gQhSYnJkqxwiZETkEes3qC3wYK1DdVMad3M5UnNYANUjyF9uHcZcEE",
  "key41": "5QPHTJ6q5YCpDMPzhJ4B2s13KxPTyKjvgWggKyfpsTAAT9P7myGM5UT4rnu7Ui5D2kscoTZx1D91WCJwoUn6vQya",
  "key42": "2xnbeNkHJoHHrmkpJYkrgJzajLQ5MMdpDYRgXgam8RydW8kqWmaZm1CkBJr3xN7rAVMJKEeoSBLimW11qDXyxQyt"
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
