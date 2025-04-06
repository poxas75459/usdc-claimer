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
    "5uyMsGm8SaQz6twJ6Y2thvphmNHBQh8oEuYfoEELgoedihWw6DCahTktSKfTvVEmNwRYVRtXE8e4YpVMQ8zLhHGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cUwTGqLtj3vS4Pkkp4nLrGFEfFDjxsG97cKm4W9skYrgqgdcuZXAvdWd4reSkzGWCNhbisdRUGLeehXx9fDUxSc",
  "key1": "46ZBNsjc32GZyuE1oyg66uHjvWExiYupDynCE5vY3FiZx5f1WkhZ5Yi5pL83WfN3m1G8SqqedugtV4ywsKpLnj3G",
  "key2": "3CcwzE5X7rwR9ZLn8TSpu7xoghogmRasiE8KULH2zZqoLBDqnaibTdBKTf6Dy5gSKY6KKZxxcLmeyc3h12WtB8uR",
  "key3": "42zMfbc5jVHKr5h8Y8iwA33Qaamvi6QuEap37FsH4HK4vF5vE6NuhgcQP2FSUooJjLuoGvv1BBAdZQP9SJSrQNfv",
  "key4": "52e3JU99ouKdyV7MiE3m9fKZ1JF4kkDwKBayGf2hhech2Bz7oz5ZvKN6n5vcrgfTGV4KBhKq8LbB157ArH93uhLq",
  "key5": "587R3oQXbGth2KdudsNeShK4nQNgcwN8DGLb2szH2TKNeuFogFaGGYYQayb95wi9e1shP3FeSa7rhjgU1PuXovfq",
  "key6": "4kSeam1Uj9aQ21ap4ZTLg3ZHvzoLAQaaxuPeiRgaqrDUTXyWcgVAUGZAgQ6iCsvJhSwvDdt5jq1a9ZCWCYEm6P58",
  "key7": "52J34XgWDPNmaKSTumDEoYzHcYcHcCXcoTS327fPmynGxyx9oa9aCEH8MLvzvBEu4o8vJvtaL7LP9yK9Bp1zkHx9",
  "key8": "55dYeqxWxSKya9f2kiBmnXMAtaUZu6pkhrtkoJpLFKihUNcv7fRAwNYtMdPaWpU5zWfosPuZiNSerumdRkU8UYx6",
  "key9": "2zn2o722JtTKtw2jqGJcbHKyDRBFJiMP4Lco8khe4vRABxictjuGvfHwNDp9qrEiWvPUPQYHTyNwzqvAFrpwnRyp",
  "key10": "kL4wPk86Bso6wPcqV6y3HiYCSpSuokTM9oy6i7rg8z8w16hAjQqZuG1yrfbq9bYLdagfxRpXynDQZhaxxE4Avw6",
  "key11": "5tH6xPS84W7ojm4kVTLXqxfEY5Yjf8cHMRm1r3BWBY81bLCuKG5YJxMedfGDghg5g1rdbRJhifbkimvUzGtMzxPE",
  "key12": "4ehueLstpgFmjYSpzufXRGMGMA3NoR49fHMfBqMVh7mZJhoFDvgnR1v92DaLoHWC5MBEYarXjcq2JuyVERdNUPBh",
  "key13": "2YHHntBKaeExxYavjmwBEdhXzTv5Qsb573oGSM5ShzmCmbsk6GdMXAsx6Met17n1FmVp14niHa3kzRrwsYg1WazW",
  "key14": "34XLBUzMyuHcsSF5Kvxp9oP5HiAc7ueHPmDvqEZKH9B1BU8UdoH32L5SXVyD8mQ4BEWyUEH4UsXqPQnn7vHSQKnc",
  "key15": "31cv6ECL52wUXuGvZURTLLJzWr7qznZ6kGqp8LXPD67mWAMVgEeW7CdUmdPXEUxBcJ4NqeBUzMxbrWidJeWRqWK9",
  "key16": "4vCuuDECZBYFGFdT9SXgzAiJUgT7wJorxHVyiU4X4ttJpnmjJ299zvvGXQwMspMhrEgjAjC1cW3zBEzVogi3oc43",
  "key17": "3e6G78Ur8qfH7Q9TXDRqM6jK9PNBrDCAXygbQb5YAgxEpLCKa6jaTYzjsDhE1haEqwPYUEGLQAzuEY2cCvx2b6wf",
  "key18": "2aSeqK63qc1C2k8wFi41jVVc2vnWBXsZw8BZnfnEHdFnENPe5gHCaU5aGfYLk2PXzNPcVBESkHzVARrhV3yWLycp",
  "key19": "4Ztoo51jfZE2asYju63S8m8bkBQCuqjUh8yFYqauJ2dGxbQR8gBfDwq8sGJ2wpLVCLvTdFa6u2sRYcDWqTy7F3BW",
  "key20": "4hc3zQmMybUG58vPxEG25PwwFFoyznwHkg6pe4ipAUJ3q21892dVUV9J81iRDTBRpCtXMbNSdAhNHu1iMCcyKRH6",
  "key21": "2a5UHZS6rDFKMWUDa5RQYq9YnS11ADJkZz9zX9dcgC4T5hsdxYsnycx3w8oNC6Pbgae6L92zXgKwUSjKY6qsAjYW",
  "key22": "4YUoVCbqi456yMK3bGmMJFkDMJMXdya5jstUo6Su4XGnmVTHesdbTD4yRJVqDwmFeE35X2rH1cDHd772vZyGvXZc",
  "key23": "59oq6dQXyQPQzH5wb9arnfkEHgxpumZh1PxEornzZ6QUGpUiJNWHQkDub5RTJNtk9eaUxUqp4b2JBwDyUk5AH3nL",
  "key24": "4ZJHWSY6x7mAJd3eDz4t18BuF4jRCoipKC1wQB65vbXeuYNaPbk14n9tfegPhTStCKqsFTSUXb65bekuZDgQR461"
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
