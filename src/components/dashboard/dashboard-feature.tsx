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
    "mzsCbvxJfiiwMW8BBLZYNMCCepRD2qPnnuQB76zLWyrkGpiyPTqQckmt7dB1jNRwHPWa4Ao4bXTp8fXFGXBzNjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wse9ux7ETqsSxcQjtyNxfwyLVoLCHfaEx2yPXzV8GsSL8ffQrqU35hvVkK4EuzEBDsHkeP3sNQvLwzPtD6tNgpF",
  "key1": "26w6s9zqKhuaoYXtgvJDj46FDiCekPA8rWSBGqw3a9Yrp8L5cWe5PMLGq5G37TCAzeNGu1ZiYKiWLxQHXNrX27YQ",
  "key2": "UjbsAoMLZqL6ANHtj8gfveeXzWLvcmFsMKTYFGS1xTwmxVxeDgwkPvjCcJqqJ52S9smZSA7KKNvnxwG9Vqu2gJL",
  "key3": "BdHJ21XbJzg4xCWZGehgcuguZV5hUz5yzP37gE8cTYRKyvkqeQuKCoJnhqN3avTcNwcRD3LX6SWijsDCqbqiPPc",
  "key4": "8RFAkJGmBtRX8CATbjkyA2EQbKEn1uiBpSY96K9TuGegaRgxjE3upJTZoiPeUDBtcnzESPV8Gudd84SxXDNJXdF",
  "key5": "J8pahbvH3amvwdhXhHzBWeZ2dfuXtFAeEMdxzCqU82Jrz8y4K7GJBhuxXR21FpX2LW5zWNLddHV9unGBmPikVK6",
  "key6": "5QoacLdSx7gspsqBWo5pFnL5pvWQCQ65X4EERe8W8nMV9br5KfeRxMVjMyw8qzHLbJJuMEmJCmjExfFduUcocSP",
  "key7": "4hcMAZD6suRCizEXB5TBwdVNpU5CJFXH58WECZWEKKi82SyEWkjd9atB74EGGG7GwNBZhTTV76Pk2fbaKcx6EANM",
  "key8": "2rAjhWikyhY4d3xbH2wno2vDuCXrDBeLv5Yr9qJ2FCLsBkofRbbE1sehD6m4b97LJs1455p5gX9biQi5AsGe1fjU",
  "key9": "3Th1JYFGWuzRbMVCMajyTSGXFeeucQkRc26PcphDHrs8jJADZQk4QEVAkf4eTMNbTdrtz5LyZYBY3QKD1Gnzwk8H",
  "key10": "3oQHFkw6XnigUkLaypFQALVs7GsWbfK8jyRF1mRPRH7rYREjeBYDyGtFL2pVtAejJv4avFKYU6tCnQnBfHf3j7y3",
  "key11": "45yJ7Gcp7qNSSda2eHm4dVVB2CrQSiqqUc1bTgdZtUEf5NjirYyH7MCqufAf6y66iYkDUeaoCf7ANrmJN8nhHPdF",
  "key12": "66sYEEFL7sKfBDRv5nUPxvfwKVsMhB7T2iNCaFkoUABXZy1bY8mjWZsdunMHYeiywu1u4pDXt4tUTGR7f98k2ar3",
  "key13": "4SRHCRXmMUmMGymuJSHc5bKPxa9FzKxZWsS5wdiCE7i3ntwAtqisrXVrWZL7rTen7NB7v3mhU1dEDSxiuPPQGA5c",
  "key14": "3FosVXmygNbx3YDitJPaJ628LSfVEZMtJ4A6h1VSAvdciwp7rc1iee9vxp4cBAaiCKvXNgT1BZJrFHW8zRyrQECm",
  "key15": "4cBFpNaRUMVoTGGwWTtFb4DoyZKo9auh3ErQY2RwPwuQeTMdBodLZJoESVeUPFYYvyerJ7RcyWbivzNgC7EnGuK8",
  "key16": "3CRTpZFfA2PyFd6g16nkudgXFqVRK7kQeuQ7dnKcfMDFtW2BPvDRzN33uMbTKUPj57oaA82GjgBHf1QvCCxKSMEj",
  "key17": "3aqPSs6EhRzNeWeDkgFQCf4BLQAvGbWwTXQnxZUiRjpkN7asH72Dm9rbUnX4u56tefovBrL96CTJ5FQxJDDHzdbR",
  "key18": "5Rg9NdbX5u8oGocmotEbGnzmBG7T9UNZquPqmfzizGEfeZwEDHBpM6rmBhLrFhsv4j2jgFma8kQtCoAy9Z3AmDz9",
  "key19": "4XMoPUqow69yn9DqvddDvBWeuGxQps4KwdiKXxRJtNU9X4PP8J673wnmuhTDdGFvtmeNG2pNd8UfqKYN8NhBAwHi",
  "key20": "2vn8yyXwXgZ7vbcJrGrXYbxbd8dVZ26wGtWoLKewD8gexxzANC7nfydg3i3kYY753jRpD3hZvnZcbrrvoZVvXdm4",
  "key21": "39j2ydUMEfTbDUgu41GgjiJ4qwMytcEKUy6nba5Ua165WjMBj5j1w2MB8ecbRec4m45g7ARvZbyB7pDhL5eSwPPd",
  "key22": "27pMPimLWquaZV3UtKRoThHtNLvBSDkp4rBmTJFsRADeHuq3xkcHvQcY3fiUZyJbMJHwpe9LQBXkJcApctQw6Pv5",
  "key23": "2mgJBa3BuLMaYShfzKotcsstUMQbySRTpw1r3asUDLYiiQnRkoeLNHTodf7xriMLkgsXfDGRz1YyhTUa16kCZFLJ",
  "key24": "1rBgzpH982cxUVe6Xu5erxcwLW1g98pfCoQpb6gzNpFjpRAQm4ufZVUp6DthcqpBUS8Wox6smTA6Q8wgx3NtQLr",
  "key25": "3R4o5guDKiLLnwwNYDrGn5HmkwtM2DtCxVhfZfUuCtZZm6iGWdze7bsUYur1Loscq7E5CxUq5gxdnj94LYCJsKEi",
  "key26": "4h5yqvY5ZLq3E2UeJogbUDtFcssNDZyA5YdfYg6Gk7zxnhTTN2N8tZHwYbDgG5d6MaExsXMuUFEsR5qDVX3Hwy4J",
  "key27": "nnJbqBctNzZyYxPtBJ33pUiXnacuQx7aysSYt1QCgnVfC8Ut3BJiaU2qwDtPuABCU6GQ7BRfBc43CTmhuewYosT",
  "key28": "ZopuzWXMArBpLuT9ek7y8CbzJgRmSKP9W5ekkABSQUALyAKFCDg3wbmV7djPecPsiSScsHjVdwaWTAb1bmGuSZX",
  "key29": "4RhzkZzZ4CkrLv94ZwmQLCWoPFsujjLu3FchHz8Eb1rGJSvngs7qUffP7vxzU939b2hXFCmnzXrZCoCYEqykcmrX",
  "key30": "vpNepSVataK6J6m46kS28XmJ7FLCMijVhdbWqoDirSpS3yAdAhi6mYvKNWh8vKGvRzapxifiLMabHzbNnmD6T8T",
  "key31": "2sAsWJyC4ZLTC8eqdfrav4CUcyvYydJWkSdYhCVWXPadtq1T947U4okJp44WkoHv8FazK6tnRYxwD5mZMH1vBUFw",
  "key32": "5oknihbqV9bSaM9nmK4zQHYRxWz8tiwqE1m6PA6dZUhnNETRgxw31cKtoxkM5nmes1dHStbaFGL92CFN9ycNwJqm",
  "key33": "4Y8B71o4G8vq5e9vLGw5YTSzCXhgaAsXpLE8bK8s5NKXapVxjThvRikr9qFwnmuEiGNeJGz7xLV6djrA5b3ygA5t",
  "key34": "2U4JmNHkYMwc5VuxtXFzTQHSUtmqVcDULjB7V1wTA99W4vKtN3AnBt1sVE6whgvYetfZhmgg47WZtfctqY5ok27",
  "key35": "3YzX2qz3AZgikGMC1TguQTKKNvPr695PRXeGNbeZPVYdSwbn3YGzDH8BdSDq1xAuf9fGBVi5rChWmvhxrKfKkM3s",
  "key36": "2C2Wk5Yga7ZkCzAXpGZaFSjCzks2cxEaceTbsswxchno2G3XrSbK5FpvxNxVRvemR5fZ2NHhLJPtXXwAMhxriq77",
  "key37": "aEBB7gkPqv1PTfbPxV3LWME658Fd2531CXQLDp6NEYnxRSphfTsgBF8ckPne9syM88miHNGv7mY98nQWGpHXM7E",
  "key38": "AR3CYyChZH8c8ntzVyHZWP2mGjE9261kEFChPrZwhczc9e7QxdwCt39B66ZATvuJ4hidxye9W38tkoAaJaDhbLe",
  "key39": "4NgPLm21PwNJKrpFiK4LPnr5RPyy2LRaaSJVKjd1DBEU9ALaqiLRrpJ3hQSjsooxgg5Cr8LHKLAm89oToVbiWto4",
  "key40": "3wQPr11eVAeHBk6F4Nvi3zHLPN9oexYUWv2ZEKB6n35yAevQD9sh3c7wSdYmhyB8SNGCRxqAW8sqwWGcF7iYjEjF"
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
