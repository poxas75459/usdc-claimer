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
    "2tsGaCMMh9RT9pYBwJ4Mf9gdGhnGdTgnQPocpwNLzzif6vhyX5nwzoBuCtRYVYziQVHEdq4QRsa8APgaY8hGChNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQEs5ts3MECTLKd2tamyNWbsSqxEU6RSQxSkdcCuPAFj7ftmNibXmReYnTmKDCEvTYdw5C2GSv2vjBfnZaCzcJ1",
  "key1": "5aVQjvCLKC651SXGuwNUoF8hqcfTrekx1w7D44ojohRm29XP9XXJBge2xnVmw8q3ah6R9CqL6fPur4KThZPgAo6Q",
  "key2": "2m7PS9XvmG3a9QnhXhm9icyZDqTCQ6i5SE3LpMotPA5QcorhXa2TRnNoqSVNju3X19ZmD9Dx74TGNVx8VbPedUpu",
  "key3": "4mHansZD5xPFMS8XKN7NPwvgXg5jVar7GmvtVLXW5rUBW9fyhZbT6tQBij7r2hbPAKHHRM6F4Rt8BQSf6iaA9SCe",
  "key4": "5LAbXZSpKQESX5ZAU5AMoH8FpeL8Kgc6gHB3Qa5e45jWzK8iTt7nXGBBYK5Enj9wWpSKnkPtGH8kqzUJbrwVizXQ",
  "key5": "2tDth8Bu9oBVdBBeoqcZET1nYPjrVWmHwokV5WigqAiuPHaua3xytXY77nGDBVf3eGAFyWxua6wkD4TnD7nSGF8h",
  "key6": "6MHZYrvrPkCBVnN2UHRmHzecvqTCxo31yp7xeVNAzdqoHUzN99AksDgHGPSG3sBFpBb1eX9HmHiYWYfimu4jdAQ",
  "key7": "2TyPBSc8GJXkNYx8jPsC32yCT5UjfWXKXfdmEJgz6KR8DgJEAULkDpxYdozY97m2HipGMPzTq7uXpAU7UN96qCg2",
  "key8": "5DkwLE23UEkab9FmXoKpxJyvCXqk6GDnZ3nzWH4UM5d8VHqS9FcE9vRMvaEuqfahRDBKmHneGs2LNy5Ezh3EMvab",
  "key9": "2B8im9yQ8rNgsGBuWoCkdDNTBg6TwJpai4d72JQyhQWSyvwt83SoJk5iLBZBXTEoeGWDEMjsqmUcVMoqqj5JwdGQ",
  "key10": "RJStWMG4jtuCuRugxr4LQpFVLLGjvbvAB2UNu8SAkAm96MHFd2veYTnj7GayjD253sPGHJqjjgM6kSF3oLCnq3t",
  "key11": "33J6TjFtWoQ4hfTKnJQfCqVJDKaXGs1hDPfWo3MZTXwaomVXdDQyJ7Vcuf5p5pLn7BdwAZHFXvcWDSJz8Fv6iF6y",
  "key12": "2dbscLKkisrvcpw1XDXEgxToQJkgUNogNLf5f54wXyGUJbc5Rw7YWzUWNPBznuDG6XGPJmPs1WkMKokp936DBABd",
  "key13": "Mokf8JsiXR3jLiSSsiJijpL3CPhfu5bTU7ScSQ3LrYjDrDDzKAH8JrpLFJf5SFJJAjEDDZUQu5UzhbRo57egD9b",
  "key14": "44EuLwcMs56XpUuANKkzXn69WSLiB4yAJ6emNdj1HK39EJZTzY3UXAEtMb7d8Q2cyyr24fmSkNzLu44YEoXSh9Q5",
  "key15": "4f2fEwJk3PBt3MGRGq9nYTCyzLUqhyQ3QGrtRTMFXu2G7hGjmvHFK9jq62NR7hcRu9U7weknsdoNbCQizUZtBnCw",
  "key16": "33DNWCJ2ZfxhNiegt2g4YvX8XyM8dajTFEGjhiCydYhYampuBP4ZDcHvJw7tjE14bqYvAbwmQLjt9gt8XbWWSAPV",
  "key17": "5wh5AhWowy8watqQxZqMUbpfgwFdrLYp9AfxpB7VcAVvt8TyKeXUm7yu12pb5CTknGTZHoQZ4SgJLev6uFNiQGUG",
  "key18": "VVjZ6Z1NMd9UejkhsTKvRZF3i5TGL11Kun9iJbHn6Nf5JNgEJHD9U6dABSegKiBLiy2hCt3NBY7PkY3g56msv64",
  "key19": "5JnwxvSsxf4nxqwomGTsAp5LXv1iZo4GTGG5wKqjbQNE7KoM6mmtg1W73rWPtZVBTdzXspRpmR6UwYwHBxGY11uH",
  "key20": "5bQ8f9wdJ9V368URXcYYnc3i1VFFjtLhFpH6ukmdmQhdfrJAbRubtPdhS2mFDaqAffJZdQHzMpABYFkR2DuDEfKM",
  "key21": "3b71Mbj2GvJuKC7YcVFWaEzhhiqqnUvi1DhYQZgjXTRYhQRXhLn1XmRD83TQHjBRSJ9Zu9BduNR11HXFBQmWs9aD",
  "key22": "2uXmS1FpgmFiLA8ZJ72Z6ULaPV41dqUmYi1TJodZuaueXQygG1Rd1AJ1mraw3XnDTHYuzmwyHF8s5DoLKWda5YUL",
  "key23": "V4gMcbGffMmPuTEd7HvzvPzmHBFPzPaCnAwP2faXYMMkVvBCE5mta4BP2a8ZC8XNqEDs9X3dfj4f9dS2dxGGndd",
  "key24": "228Mbx4TmyZzfpAyd8EAQVxoxYYP3dRjR6RbxH5wK3zTWVNDQXiFBYgCVj74L29WNRKV5JGGY6mjqyzVpaKGLAyU",
  "key25": "4Fs73gJGitm9ELajxuyW5KLjpTKqFW56pt4PnPzPwHMok2ERpKqkxEt3aLsukAdcD9XhVnN4opbmrTuCHSnWtBQt",
  "key26": "2bGNHtukDoaUf4X3WB55y4mer8EA6gvAdGRJKUyFKLzavAsRZm6DQLJACaGSCduLMwjnYX2TFFPR9sFmunzrkZFQ",
  "key27": "URt5rJcVXdwnuEHeqYWhXnfyCywKj6Q25wEgMSBb6g2MW3T3fZyNva8yxnMWA2tNDQgesPs7f6pxjH3rG6qQcgq",
  "key28": "2XHzBxCGhXSy4zmFU2s6EiiEbi4WGv7hD44KfQMQiGwik2ieuU9q5g6CWVZb8x4vjKkzdxk5ECyyMozX6kqzTM6Z",
  "key29": "5GxNXHFR5vXmjsTLfsm6pC7FgK2yiFZb3JTJkbH9kphgVRd75BXKteUZyZcfatAjjWYcT75Dm28xAwdXmdGSYyMH",
  "key30": "4oGg8QQoTHAqWTKGRr8b4wnhVyhgnrPLJp9vPaZeviUQRjHwe8mjc1y24gfuJfM4KSykFVMCdMPaHZNrYG3qWx4D",
  "key31": "3igGvGg935Q9ijuXFooHDy8mM7heBejVP858t62qqDgFyktvisoy7Z2jx8mZguP5UpcG8fyctbLXnaSYQy93bn4z",
  "key32": "4HWZdtx4UEmy27A5FdJSwNNoYcSuJbBPBSQMCWjD4MZ7zFtFZXLKCAX9CCQCVZAHLicUkPYCAcNDBD8AcaSwvk4q",
  "key33": "3eXpFciDqUVTCoxVcjXDAP5YzscnfC943YYLNZfNFj51H7NAbyDkFwBPpQRrF7Cs83nf2VHAFoiWqusiKWy1gQq3",
  "key34": "34MnxCCYiivxejkcW95fQX29B6Rs1G5qPsvJWr7d9vhXPVt66MuCfEjdStc9c9PK2JFCAupuv1vcwn78jhqaW5nQ",
  "key35": "4AKngFjZM1YJ6T77QxG9ZaGWciiCLEVtmD62DCfFs1rqNbPcaUzYUnZeK1bMKZS3niC8XFXT3SdrFi8C4n6eJRg2",
  "key36": "B8bJQwLmeQfijZxJtJ9ERNwdevKyAvVgMNnW9Ns1kvvyuvz4K1NwCE8hCyRcwFxSZSobP5SuAFqgaads3i95xTr",
  "key37": "3KpZJ34o9E9Fyxb4qSeJxQxF5gr9rrmLosZBeRAphvfH75uQB8XDQvPLX5qR3kqidaLUNn2Wb5S9H1EbBYvdNe45",
  "key38": "39srTV6s6vUAMswoYX2YzwAmBBHUmZsGvvSSXE2fZHdPcFH3RLf462HgAdKCLNWfntR2DLUiY7ZtLLhUx5AP1Ttu",
  "key39": "oaxHhtzCALWXyEVHfUnDNjogo2Y5oBRy7P7jp2ZJH8VwitrDzi9UDicBTmdMyZwZXDajgyMyQLEhsf8MLbC1QrT",
  "key40": "3JqLERSVciLUsMuDQDPzTfqUPif3dDzre5b1syTK3Jf994krW1GakvU66dZEqCzefAHuf6zVyNfnueu5wee28yY1",
  "key41": "4evtt9SyydCLFUwxmK8qiFWvefptucBwqGFA9WVq5T7TBD1bWX1PD5aE7ZbM57xyNj8BX4Nt7WFnqJdVAc9NEvGt",
  "key42": "2cRwEx5f1nxTeLhsAuGxkKTtxwNrQ7JrBCtBX5NTbFuCDztBZMPry5N1E8VzpNvWVji2rZdHYPzcEuVeYuRmj8T9",
  "key43": "5qhuuzKmynDodsVYVUMcBxCNNyqvaFLQn11eamW9wHVL4cDDPE8YrtoZGrsyvJ5oEVmWQ1PRUXHUUN9RMmxfykCt",
  "key44": "3xyrUTx1a2YGm2Pva8WojYhQU9KshoaKSfHnuT4NkF8Mwj5aLzHPc5WGgHyfNi486WiUdgatNEWHLVH7GW7EGyDV"
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
