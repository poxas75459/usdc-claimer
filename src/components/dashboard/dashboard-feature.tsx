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
    "3C9vezedXFrUvMtEZcvyfN4BR2EmwpRMRJrzDSWDvsvwxoWeq9998nvfPAZwGKpsEkSybFT87N3HXCnBsvbfHNJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2byss416J4QpKD7JBmhbLboMTy7x81wMBDB7Cdcs4WzvqLVe5rZ4kMtX6q7dsaKPNs3PeDMMR9yfjYZ4etqh4cJz",
  "key1": "3U48uQrYTs1TkfMuSAx8gJmNq41FdSgReoCsrqu6EMJG8aBut2Wts9f88iJ3hSp5FDyLGU1GAAi1zfRrEQHPe1C5",
  "key2": "4z4xUyT2TwwkYuR22CRXSZkt382hxTzvckEN2opAG9wUJYmqfZBvVM7MUNjBvUHLGKhUCEtyHuapCiRnnGj8p9dR",
  "key3": "UkNgi9EoV9Fr5LhQvD8gik1cdVqpwUxhAYvoEjKFZSpEovXtBpTQYPbcmZbHkMwoa5QKKnq293dhUk563W9BGrA",
  "key4": "45cpYVQgzSWsXbZDwQ9uVSSPtE5pi1VnxneHGTdKp87s6YKf6E6yfytYvmt3JNWEMc9DXk3T4JDh1Ld5SUviiDTr",
  "key5": "2cbtgdDEP3tnzync2a5LeNXrf7edzychZ6E4asEzaDNNoKRTEWrEfCxnGemccSby6yPZpSntf1Pb5T1UCHZdshd9",
  "key6": "2sqGUW1Wus9A9WMSTtZWvVXAqYb25PJw32eA56qFtfGCZhHnSZnnD4UkgwTViwHy8fHFWggEbWDTsY2HeVNJFMER",
  "key7": "5EGJAi2MLfdLH8bGDsWckJJorB3vYiQAGpmcJrKTh4dAZJMpX22Di9Jm36bfq4xZJN6axVy9MwESxZJrrBcPm1WQ",
  "key8": "3c8uqoLN3WTonkd1mVjtYmJXF8knZzQmpXtDC456JMhe3r5pzfAEx9nApLWW5zYRUeXawXyXri6X2WKKQUQAM5NS",
  "key9": "uinb6ntKRwXurEE3Mc29fdRmNYXpEioM6mhaEPMPGh4RmiV2iXhQaTmuQzuWtYiQRqxVFTJX46GpWQU8me64pC9",
  "key10": "47Vvreihv6YqGfaNiWsnH5YV2RpboAKwv14enYw6nwpCt49HWsYQnDsvfMqATdsihz4cTz9W6xmez6VTZeeVb1Ux",
  "key11": "5YTZ9CzPBvrAWKHqT1oiRmV8hbvRMHRoop8WcRDDwBtRUh4s6tf22VwN9tpvre6C9oAWgvEyGy4Lq4za9bDfW2Yt",
  "key12": "5HsDEk1KEjDQPx3KYLHJyxoSBX48rBiFTzud1zeAFBCSVFqFRB4SmN1tKRWfdzTyLHBPBwh89Ceo4yLksXDstWWD",
  "key13": "2fUFRiqMPbVHN9xoiBiWywtPdomqh7fLJ7SP4GcN122nh59Lz27o5dJRqN6TFxExv31ttmUL5g58hbMPXd7BzEux",
  "key14": "5GSs6negp3rdUoGKPKKhA76SkRq1LzY28wtipAQcMNCp9hbHKffbSJyw89TazPe9NKuWDmhQVXDYzFCD5WFBb1GE",
  "key15": "btXZsb2JhzHZ4zfeJuuhGaNr1RzwS1MWALdjrK5f9bJbHk15r63r5aEir4i1enjQVa65ewQTyVYrtiLdsTvSEnj",
  "key16": "32GNkKmVqTqCNJwrXr9afrA4ZVRSE5KWVYJLxgBzCf4QrZKEDJdrciQnXSD9y9BKPY9chKHstxeZUCUYwxG5agby",
  "key17": "52xRedTdpbad3EJoMRKMidPmUgLPj1pVBnVU3LpnfpZkQsHGtWv6yuWM6Hf7vv87qP53rAQDBMdRgDHks12eCUxp",
  "key18": "2vEv7w6vro8X5sx68Zd7DUe4dGr9eZiU6DD9HxLqSK1oeE7H94tMyfG7hUjST8SqhRjmtNnQtb9BwuV7rQV3ACXm",
  "key19": "5Ma6z6VPAyqFT4C9yRixqThrakZ6qJrTBN4pF68ZrhsGk6TE7nxbrazVhU7D3ZipSPrgt2fGqCzz49DUFTjw4ukQ",
  "key20": "YyztvwpMvZnNrmEWuZ1KzPJYFCjxsf81WABTFUSvNuMUkKyTkWnUvFiWAkrQFC8LCFXmoqJHGCRzeK3FNwW5xBf",
  "key21": "6FjmX15yiZXh22vYCKACMqgDG4d6b1UmrzZUEc7wTgCcHGZ7CSLoy9PQa1P93xHQLWfhmWJBqw39mvtuSVswmo3",
  "key22": "43oYnWaB5ykCZefYmnjezwx2gaUcD3ZjT7T9MhMevih2QD6reiMwbbCLhZJc2cq2D2Es8grfmHYs24UCwfzUqjA3",
  "key23": "2mbRSW4XwufAEzoXNgengbJi9WuvAuNAqY9tJGMqdYuLFVGYsxLSZJ6Jrx4sLu4gu9yKmPKLGEtxjFiykkmcEPoD",
  "key24": "34qKSx9gxyJQgvyxK1AYbNpRB6vFbY2E46ZUJmTqNfhtpoUqVBuNk5UM6kb8cTzTzpT2tFVssaunzmC5e1Y2XLrk",
  "key25": "66fonTQEVR2bAwuREbM9XFBoSZn5ThnkgRQ4U49uQjpZFqy1WqWLjY73VxudDkNyP3JDB73AZivT7j1kGqqyEBsD",
  "key26": "2xBdxegvK684frahAXBv8BzTskaUtarVoG7yj4mGnxz9ucxj46XsS7aTY18FyCv9SLqT4tyzVFGcnxdPJupq2BCj",
  "key27": "515HdosnErGxSMSeci3GQNLjUTakMhXvekfVMN5cDP8Cj4w9ZLjZ7QKBZ8toiGDspq4yKnHRZ4XprQiENaEPERNB",
  "key28": "5Hm9coDdRTAk1fdF6EzdJpm1f345gsbYYAp9YwSLoQKks7gnUgKbVdWfGiP9FTBQX4JxqpBWFdhySWd7FmQtZVps",
  "key29": "4BCRr55Nx7z6Kubu91n5tWdcwphCbAL3fAi7Ez9WZmEtewQRSov4qr6nStXorYA7N4QQX7bP5VHgjbfWPm7gNY6j",
  "key30": "55RCjhHvWDDnRBEwonrVKzhP8rvk5jiQNNCcJmytx4UZBo1LzXDCXRM3szFZNyuiAFRLGssPg6R7UyQaHGrrGjgf",
  "key31": "3tzxtg3L6U3fYEjVBUkekyHvbjbjQAKfpCzKx2wXprnfwc7a8aEVFoD3JDFisuHeuqZmrGYmgGQhMtoNgo7qKotQ",
  "key32": "LY6kdwWMNjJccADxdAQEEm3GAzZRCcEYjAg8AFfMnBHVnRLgv7uAwfx2aDhSP9v8CVoj8BaKsY82RaF6MwciCSa",
  "key33": "qXJ5tQBVpwj5uu954ssbqVJ2KLXoKuyKyLokkgizTjbhZjT1HnWbgTxiKZN4mE1Ztnr27XnfpnDCxiPSPn5RbP3",
  "key34": "3xmY5uvQNWrVD6Ck28tBkTiR9K45tsPjL6os9CD2FVEcFLbv8rFgvHLQZEr1EyiJG7hX8cWn8urAGrJQzYtrszc",
  "key35": "2QpAw7Ce8UNwbc3z4opnWQwgUjokNLonUZpKAupv9GCbon5E8XdyNK4RDVhjfZH7gTKCeKBAQPK8zfEn5577beXX",
  "key36": "2S8fRLE9sTpeXvpysWQbPWnBRSFqnM9MSd8uEf3fPDev8U29ZbPLtxFnNXJrPEAJTRvCG6cFUxuED6T2B4SGvSbK",
  "key37": "5DG4CdvJtnAVdWe5QZ2bhgReyYdYEAsM5EM4yD92ZK1ZrDqch4ZgLKhxvAZPRE3AmjdbCPpzHhJjmYFMnnuptHdo",
  "key38": "5PsTaSoMrMCuY5VqCENVyAKj44Z8LTZF57NLPp1X5d1G6vsQBdqMGwHkXdBWTASp4u6LxsdvLmzbASJUwTtcpgsC",
  "key39": "5x7rFT7xARvP42aDs4Pt9q3LbxKRMyEBexwV1tVaVC3pYXWtX3QcobyzvfETkR7kg1eWe8LXPK4TyCGfFHnJwrYJ"
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
