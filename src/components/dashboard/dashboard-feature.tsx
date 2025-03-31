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
    "SKjX6aK6HZX3zb1jpwS6K3EZrScGT5xsEucrDK1b71T2FnC7ZVCkvBMTbd4jsWunRwsxPPBpatcsahqyKvhfusg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P5va7CbS6MuGBRavffR1kFrjrStCLA2ig2sRbL5b1kF482PZU3AV1ey8rATBu5Uktkq3ye2abLW4weg2tx9PyDa",
  "key1": "RqogMDjgHF5q4amjHB67uJHNEuxFuqEum61cpoF9okazaoJLZZpjNwSijDZCgLVAQXkocBQzi3grAgadPvqHd7E",
  "key2": "2KEDNW6SssF1DRVmKaB3wgLh3ET6Z7UnteUiUS292czdaZhrqYfVe9w871vcdkhdzkwZZj57u1VH2LFrNTnaARP4",
  "key3": "miXcXrWkQfpsAyzBjMTeEwrpTpFEJC3Fq4Tq7tYsLWuTk5TLsm3kvcho18uBDbHZJX4VtfQcCELntWKrv7Uqcmu",
  "key4": "ikh8jUnXbdXxdveAuD4WnaBs5L4HGcQtV5R86yeCQXMATdrmXDUPv5EjsbiuGY3K19xfiqStAMjLmqPJGc92sHA",
  "key5": "BYRconkV4skErxud1kjuMBEUn7dvp8fJeqhXofMrW2uVJpi1iHXrzAwXH39KghsDtKdMRdVGL2gKMxpZVdB4uAW",
  "key6": "3j6a4m5KMjAoEw1ooNc6qaqypZjvzRzgkZUJ5MhcC24eAJ53Yys6pVYzFZsbZUvdcN369ASCJSRBpG5GuGzDF5W1",
  "key7": "zp8dcMTwYE8GVdgaB5exjj9dJLXZRaprzTWTaPcMfdnAJrpRg7tn2auZcUpY3CasuC5xDPQNY9oLu6LuvX5QVF8",
  "key8": "4ELBm2xSYByDRj2fNqL4E5jc7KapxcindffuTjeuxjYSVJ1EMAoL4QxvFt7646zzawzBvtggE27XyzN3uN1KGCRy",
  "key9": "3G5ZAQ1tegbYQnMoLJDLT7uNrmmy9dUXiuCNu6ymmqW5JHZRmsohHhXvi8mCGYb8UsNuZukN8LxBtffD6NJE9iM9",
  "key10": "24zACSvxuXqKbR8bXR27jPMkRjkiWbprGPh7fSy8GYM1644tXVCGgPJhZC1LCbZj1EK3hqrJTNFjkoxXFPT4KS6H",
  "key11": "5TFkJe5YFJyfdRJmGJznKZRvgnGRJXZ7feyPk9ZQk1ktvMT3rpTAS7Z3ZJpCBhTdQ1XTCFHcCH6t6MxeqiDKhUtW",
  "key12": "2FXgst6MqNzFTfWNw7iq3tgXXS5nnNr9EFGanAssEFVaCHWjXRiJFdp6rTZu5LxSRhE3DjpNKJM2WGZ6S25iWGJg",
  "key13": "2sUyAnRUa1Wibd6ez8pxyrfU9r3mDp3uSPdMsFP2PRjBuNgZLa3R9Wq1RRyjSqvxTK6RRLUdLJS5cjjpLL94JwC5",
  "key14": "5aLM4ABDRknTyBwn7j8b1wnwo5WDiRhq3aRTxCCjhvuPHCApRhvf1gdXX4dgbQAZxzFJQ9CDs4AdEM11QpDnT2xm",
  "key15": "2wFNyHzvoQSajqszpa6LFBE1ZwXqxSshy7Vw6CV7B9gyJo2NdkRnF1VdQwkn2HGDQRwMoPJTG2XBUBMDpn6eWsqm",
  "key16": "2rqa7UprE1CHRpHsGJKEfdZ4AfhdN5CqjK2uTYUaczoiWxXkCXhC1hpHABjv4Dnj6HjqRrkX2Cds4r38KmkJrngh",
  "key17": "4NBhf9fAnFY317XHG1v5LUxiJ7qDs2pgUsH5uEdZcSMRsXmM5UyZ4PLNZjzzco8x1GUSPsE5Yd27UiA3qCdbsHeA",
  "key18": "2J3yfaKZHxzBKwKHq1wgPgojzPmPLr1PnDboKGPrvJRxDaVvEXXb9xUFFPRdRETXPWJQaNK66LDTfdMdyzaGepti",
  "key19": "4b4ZigfohYbmGZGDExLvdFeLqPcGj7e3sedeFWS5kntcqGwhA6E34Kdxdhgrt3o94tGH7Ad29yiizXmueQuGUuum",
  "key20": "4B5xg7UzTW82neZ8n7536duN9VhFenskf3KRUW6852d1LqST1Y8y2CdzNy2bA6JBDHdqwKW1gHYffVKj4Nfnu5Zk",
  "key21": "2nfvwsKY9LhqTdeC55rRk3WQBzcEH3GbNMjsTDWqHqPnd5rtsDSpsXLSAFYaM1RuV4GV2kTgWrYhAKkTyXDUxcTF",
  "key22": "4cdNpwTUAnLTq6Pc1Cxw3MJBfHJjjxMiQK5Z4xs5ekWpfj5Lzk8J7RCvssjZbeCT4azpnN7EKhf3W6wHMdoVx2hv",
  "key23": "4Mb4kC9jXkZK9fukg8HiXir8gSJKCYJsuhg3Et6J6oVWTaXm5ic55EzUHedrR74NtSbfktWCyYm3f2xn5LxHDDQ4",
  "key24": "5vrY9FZhnZL4rWisRetQaeZdiBR2f2MKnh52qLXLMrZAr2VX5me1Kb9KYA3Tk7QRhtQgoW5yGLJ4TjAG19jDwVkF",
  "key25": "4eF4wDVuhE4A8ZMF5pyLmE5f11yiVnVWyfWTb1pczBpySuPT1xT3MXJgMFNyrWxG39rD3jwSvaXVKE2uo7fUquf7",
  "key26": "3AkVHtsQzwMqFa3NxNGc3NLJNT2yhQCVuqJbmt7EKRjqCsrr1ppWL1xKEtaHGK9vrbQzkbEQRkiqYGvsCkrkStqo",
  "key27": "2nvVD3AMWUM21AGg3MseFdUCz6iCRya1n2wJzMUnwLMpMvb8iNFsPj31D1qsmrYcozPY3igqyw8TxozCaxVrggLM",
  "key28": "3BwpdmqNLw8zpWWxpYKHNPegx5NiXvEVLDmcxUYZwuJEwdtSbNAwEyscwN9WY13v7gKyzLtgHGB1s5uajMmVgeig",
  "key29": "nTAQpwbyAKrxu1wzTJ9sqhkgMU77Xcodx6RG56F6XbVZQpdckSqvogiP77T454XbQR8jNDxniTBu5zJf19gm1VU",
  "key30": "3jmxjiTuPmiZuX4DCQBJsuvjVFNRCMystqpbSNi7y1LZyVdf5FwNhwTizGPHUtsCu5WS7DJrGFmriQGH1LLyqi4",
  "key31": "3VYG2Y72hNshwULJpBTWpSxKm7z1HGJxH8zqKkaPGTEy7vCSgXenJJhVfxv53YujMqWtULMD7tGwfg87d6rdQWSu",
  "key32": "33Eh9nkyFkuUrewptprG7PLpEPc4JAPn8WrQeQ4rGchnhVN1mQAKFBXxnAP8nEBbGEEm9Zh3o1HUsPD8EeCiw89c"
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
