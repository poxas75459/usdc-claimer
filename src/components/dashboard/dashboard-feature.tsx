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
    "xAjYQWQCUKwj9TJD7rgLVUb7E6AAMgssFTLgrWfe3PWsXyPNYbLfZR3DVoFD3nvN3LQbeQEAcLjVudXXhmt6gNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MwpDMiwRysg7izvqMD3t2Hfusk5uCbpDbnwwmyzMGJkdvkgabnJdqpAbnpQUT1gcwDUAV9WBdy2PXYHzLjxQUXs",
  "key1": "4sbf3GqMA28Ec6tAYt3DpWbEf4Cp86TqwuyD3rLbwhNeS6QwdZCDKWnooHNJNXPRyDeLkFsVDG6zfceGxijXU9EJ",
  "key2": "2jLcJCzueoZjQFMUqa4RLDJPz37hUiDh4FUhSbX5aqKMC9xgAbptMAFGrewVcd3ahCVMTvCnkNtoNqJwr93PWvXq",
  "key3": "C7ZHmB28dwchmofvyznY8tCH1KyMLzcVMsQKatXrABH6hnGEbXzdJSpuvgJ99WCtgu1XVwvqgHPt4fdQVw2UFWg",
  "key4": "pk6DNGRSSdrZBX37kM46h2w8B165GgNcgpsMaK4V7hKPWweUbCs9CaoCFxR8GRJZqkkBo9drpoq9eAj3LaZ1cEG",
  "key5": "61WvWsnpntLGFdTUtPW9LMnqSWGZaQvs1du2pESnFKYsijyQKGqGLs7KcxAyqcCBzc1NFnbZ6JpUFWCVPFj8KZZi",
  "key6": "3eZpPvPhCBGgK84KvoiDgdhLtExXBmbeZV74Kp7d2eoEVxbP15QqWqtjeuWJVQni9FXAmifffx9PKGYxJFjpZTFB",
  "key7": "2MMYiDL5P6h4BauykLND2bouR1pJKVriBwUp3x1xja4oJu3Bz4VnFEJUFQsgDmpazAVAxwg8DkYxgGGoaMERTn9G",
  "key8": "aBQzpumpNVdSvkTQfYknxnVGuSjsp56BknYAjDndoxrAit3K9RaUi4JhvDTaMa5EWLGdPRGmuvpKTRyEfHPJPE1",
  "key9": "2rJiC41znwwSd4XtwqoG3qxrHc8qTsCx8o8L6sWBZw2vJbzw3GSUoZz12Tf4euWQpx9st7AVqK6eAX7xCDTbdSm4",
  "key10": "3kZVi5CrQm1JHmaVg3BvHdnM686jTKTvBhnGmcTreJNdw3NbzkDuNGdAEk2Nw5xRkwetJcdGF5Ni6Ba6Mv8uA8Ah",
  "key11": "2hYtApJmuMhHqQp5pgzmTUsUnnES6JA8JsTfMUAgU5bkvBjPhQ8jBWFKP92HfcTVWYqSypPgrKzyYZ1hcjhGkeko",
  "key12": "4AaezmAxatw7BAdzVAHq6JhQGFpuyz9aPRhd8Xmk1PcTBEFxCsEpPguCzHcDsGyGsfVokz5hL12bUVYM4TsT2uQS",
  "key13": "3Y44UybnyG59VtefDMveAwNrcZhaLREAYJyE4XChDKPi6Cdenu1pxRPpN1iKQ4tn1ErY8pdA2arJwp5AnENet4HM",
  "key14": "5LXAuviJfdmMJDVj1kueRmUYkZKSHL4fnP79jWqngqnrYs6WEvUpbXxJcpe5aBYyqzxBWxupdmdYUtUwnZAp4y3F",
  "key15": "3DaWWnndVRWmUAKnoY47VjcRdzdre3kK5wL2M9ZwQPD5SbnvocaejscCT64vsRFiow7TdGqZrbftv1jyxtsASjb4",
  "key16": "359qqQmiyn3GxWWLuuA12jxG9vW42nyzGgTaaVepXgpnoN8G676Wv1tciQ2oWCxTTJXHfsg7v3Ho8Hc9gs6eJ4p8",
  "key17": "Y7SpQ7GQ3fGVe5ZaVpxAbDjf6fJP6jsyCSbzprGuF5MD1hiZLs7SpJjjuhGzYcPcUctBxXoCWM3YacWc6RC1hzM",
  "key18": "4BKad67Qi6Qa5BiSf8r3b4gbGidrYxRR9uec59YyY2vXaF4GhdPyGs9HH81T3L5JAtsmS63tFjw3EokZBcXMWsE1",
  "key19": "5QbCYmxqDqxwALET92iDhAQwQVAAxRGaNqshDdtnymHPGpTmDXxNLRvpK9dqVyhvQwG5Ta1A5idVa8LNfrD9gVXd",
  "key20": "5UvyJzYe883otomK42DW1xmCwJmvuhZcMLCsj9PH22dSnjLYNaZzbjoX6AZu6LzBpJpJH1Fs6KjGHuDXUhQfsD4T",
  "key21": "4D4eXYcDb85oH4eP7qboX8a5Nqo5c5ypkuQvBvqpaTYS9qgUFvKzn44j6ewXQHhiqXivfy7PgPgowS8vp5iTr4h1",
  "key22": "2gn3UQJLUcsjPYU8Bnfisk7qLBz5on6qYdoWVKNn8YYGxvTuwnGC9eMv8abiaaGbywBcSkmrbGsap4wKfXmUkjc5",
  "key23": "3DKVTtnGFwG8wv1BEkAub9X2n1ouJQYJ892H7fNoi6auuxNd4kPbzysEhNbemJpcrA7eSJaE3Mee8euR5bEJWzMJ",
  "key24": "2THNuxaJs8nuSfng3VWzgi95K9JeXjP5iZda1KBTyR8K2ekCF2XH7p2M7AoAQDMb6wHcxQF2d5M297GYcpiWAxg4",
  "key25": "3J6TCQDNnhzB9eZoLr3VW3hRBDUKMM9BvziAP2BVRGfbhpxfkE8mxY4fY6cnuESD2joEaVZyitDfMtUiir7S2LLU",
  "key26": "RETAkVT4q4Y57fG1Xj94wuQqWgYfakVHXq2nbszGe3KDGCC4aFkjM5ozQHj93dsvxY3TR2KV4RpXhr4LeTSknWV",
  "key27": "2MUnGUsnzzxorPDApzhbqXAKKx2C4ub1qm652DYQeD3CnD6H2QKhyumUvrNNgzAosE9fhfePpMJ2mi8YuCRdFYWL",
  "key28": "2cpx8RczJd2ERiwPYNHuAkAf8YY4TzAgNdAhcpEcLpDG5Nc6gLXegsogBYHjivJkhB6CkfMuzwRHZ9Qx9jUfHrqk",
  "key29": "4YkPfV32h3j9EXYmwHiiCqkRwPRbtB1HgXNE32Tk89aRDwPgZen2eChCDfCPTx8o4sCkg4ckt29X15e4Br5B1T4Z",
  "key30": "34frHrBHTHAReFTSC7W3SKewnuvehHwyUzfVWr8s7ySshzypjPJduZ1fx7gVTHuurRAnVvvoeaxyrNz87hrm1rhL",
  "key31": "2jAzr3jG2owbvm3SZhtimAdjZL6k2LZa4TjSyJYg2u2Bha1c2tSfmiCpB3VsM5WWjTvKbNn88WwwuUJ956rQBP1n",
  "key32": "5g2J6Lw95k9btiiYdp8JyC1FzvVFYgeNxogLKAanSdboShUWZ3qecHpSXomnvTFuDMbU1HWi8sHTBAFRSM5yiaiq",
  "key33": "3tQDyLn9qKExEEc24GonZSPCEkegchLzFMScnUkgfTwuCsjFnzWtSXV27viMgb6HLzpd8gGjgc8FvsoC84AyREvh",
  "key34": "J4gL8RShuCcZjHRSpN5Ym1uWurRqV8goq7EG6xoAhQkRRope9QcbjqdiYVXwjMSnMrvNrPU897dSCbfu2MTEYS5",
  "key35": "3hRsnNx6uLoePKBbnLWXXWMD9WJ4ViqfqDiagLY9xtwAyezyFA7zidtWCPggd54HvEJVvmNXdArvvf8FbJg81XW8"
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
