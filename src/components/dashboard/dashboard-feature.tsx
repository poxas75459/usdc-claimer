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
    "4vVujnWu8xVTNC91VzAAFhyXjFWB1Nvtj3tzfd479Ubff624bQ1DegDZcuASbY8hFzkVZ5FH4n32V3tQbT5UvXoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UXtYaXG3LFwTHrdNEwVpQarM6Fu9KGVViYcw7pYQfLJAXM6Wfmu8EDTcYRWqdMvqXN3cXq5uW84SWpEWre6JssU",
  "key1": "4RakfRnTHcuukpJkHWpw9ynMUx9TuP2aqx2gS6jQBRkLSh8Mb8kbDzhQchk6ykU3jr62y71sHw7CHLSApTKHjN8t",
  "key2": "4gSsqTAGwJa144BdrDSTBJ48cKuHBRnrhY4dyjr5a2QasqcXheFMN5y4nJ2kyAJhj2Ptq23iMmUMGKucAcNVnSK1",
  "key3": "3BQ6p1dEGyMUPsmSMU3rBfmA7DwQskEAa3aZmJ99dEssq3Qh3hF14KdYH7L8nun8CMywfYoGmFtkNk4hu3XwE9D4",
  "key4": "3xnTa4h5vvvNb3aiXUbeTfmjiXrm6RzjABmom8nrrdyKGBCqhv7ydDRhnggRUZrzC4gWC8GYHi7qN8iFaGH3G3oh",
  "key5": "4zQRjTx5GiqAfYJeZ8Uq9PzT1f9YU5fhg2xXPhaibiFkQZtiRB1qPYsPDt5qD4uKwPmYt6JL8YwCg8wLyrcMFwxh",
  "key6": "4DH4hwjX4P4R8LsgLBPJCsQv5odyENvnYmKUjfKjZGG1zm4CZr89eksDJYizNDKFrKZrnzsDJYJduQJWZ1Tu5upN",
  "key7": "4hQ1MifxiAMqYnrsMuHB6GiaJcqp2ZAECk54GxhkMGrhJ9GeRcAy6FeBwX1fEFtP5njJSh7Kerho2Achdx2mMgxG",
  "key8": "4bt9fPqy6JDH3NxK8sN81HhCWEeSAAuDVqJm1MPjZa3F1QMHcRbWM1FWBK2m1DGhGVaTh5MLsNUFkLGwvj4JSkwU",
  "key9": "4FMFQkyaLPjp199osCs4AMzVoQp78U2SAWFBjsD5uD3aXHVKwKfVT7PgK91XbWSHHo1sTcuJE5CEP7tGhKTTyTBH",
  "key10": "66aNgBVUF1onBq8zeSfHiDQvnK4pThrZC5k68SzAxC4Ub9KDG9dBEeKoTmpWDPAYgD83WnufRb1vhaQJbpmqq7Xr",
  "key11": "5bgcX7shpi2pd3CLXpyTewKP64UdXG2AqdwRiYVMCc64p18bE3t4Amu4nTqhnCtNpUWvPbCadLV3ZNhT7AwT5kUJ",
  "key12": "3JzM1VKJYWFyDjteZFDH9gydeZAmnCrgcaZLPciq9kGQYwLSKuk6xNedMAPqnMEsLuFXmdoTT44RCiJm58aZdPAu",
  "key13": "275QK3g9qG6GfJWBtZEfVKhMr1ZzqbZFfevXaXdjYAFx2mQLHkwgtUptTb5AjyF6knkNYJntUL8EVn6L6rV8rY1e",
  "key14": "5qWwbAhZuHs7TPmC2U4SPaqRHGqc4aigtYqKx83r4UYh8Z9qi6rmVqaTGYdCQdCfp6RMCW9n46MVyHUGqmtEMvEv",
  "key15": "5ejGJxmocGAahEEhF3nH1QTyzNPRTc9dLdCkjYzE1QQmkr6hxqRbKFrmzVghjzDHxRRGwjbVozx2i73UZe3XVJD3",
  "key16": "DENWNwLrTzMkHkYUrNYDfjZNipyTQ71N2znJcWwyyKACBu6Xbs57vbP6u99xbTLG76g222vdxzjLYvavm1XXxtM",
  "key17": "2EnrSK2U7XUS17TXrn76MmqFL3GpZsVxVVb6Jtf7t6Hw427xwhyxo3vTMP6apoBDpRiLTTr2tByQEpqouFKS2Fz7",
  "key18": "2CbmL94sEBX5yEhCkiDdppBkBBrP8zmvc34zZ6xQikCnkYAwKKvCbAhzzr4vgZvQPen1JzoGX67FVSrBs8JLiNj1",
  "key19": "4jVrvhBT5Et1rgNQ2SYSYVRXk22oj8VigXGMyffRB3wkVpqkB9SYB7GF8abXboPLXAv67aNSnk4EN7qgwV1PP4D7",
  "key20": "2TcksQ7u5DRZfMcSv7Rw2CgCViyjUyVuVjBUD87xG6TVLdgwwgjnbhmVXYLBYhsvB26rMkBMLhiwgNBvcFoDY6fz",
  "key21": "nQPYXupV1GURFHZq5uUPUeiQmam1Qf2xGojhXZZgz9Qag62c6HzQ53EXk4kDymvQNYu7FJDAPKKCggDkChT4pzJ",
  "key22": "4Reea4prKnKtFymhqKDbczfYyENMwUBmNETEtVCtfev4Ptd3zAAyES8eaVqVZceoTBKTgAo8rjs1eDEQX31QbvKs",
  "key23": "5Fe24jj6wRZCNbGBseC5JPBk4gwtPBSzATDFzSckCVPX7eu6H4nxjpjYrx9FLW9c4btQ4ouWpcYY7ipJYEgNqHwk",
  "key24": "VxaHyScrk2WcJbTyCiWjc7fpgLw497K9LShqaxboh7WbBkDfrMiT1woNj9GZQ8paB2Tzv45FphqodYCShGirMJV",
  "key25": "4chYEb6RHfysnc33XtrtdaVtBmDz5gCdXvYpTjW2eUkySQB9QQQFUpJA27RZ8WYDGGRuebGqRH5dNDKZKpoaXRg1",
  "key26": "2VVkeFZtNVJ3fDmMCvn4g3HRg2HBHirTbQmZBcFQzNW7QramLKMhA9L4Dq5PkpUdvkv1xgjDYTUj2fQ1HBuYyjiX",
  "key27": "dUJ6nrjEqgyeMDLS3JU1CrJwh6MoEmEFQTEkp2WxGh696DwzRnzhhRxSSwVhS1xQeGTMUVTo8kffYZKB3wjMg3T",
  "key28": "5eYV788i1xHwdbSbwr9K3u5appyXyepkEhFiUVCa82kFCDHDDvSa3erFVZPusJc1DhxvCEzCjtYtkg6vJ6V9B3vr",
  "key29": "57a5YHhnnaxrHBL7vEtYjA3WWnY9mjFyejk87dUESCPEaD6Cc97e7E2QP9h4J2762y44y88AzKErTxhrFCPutMXG",
  "key30": "5cpTKzcB7h4Ztrcr1bvMSJx8einQS4XNM4T2DRqwi5y8vjxkn2BVzE7oxKLdqY3y1qq78kAf14KPwbV1i82pPZye",
  "key31": "Mo2K8dxbo5XiXmsM5SE4gZ9WjpcdaQCbopwThHSs77SBg16RCWbUhm6pW4yfMBZiKWAan7QbkTS38TVDvq1ZiV3",
  "key32": "23kKmcY8E9HZJsRLFLq77FvuK2Zhi3mQZWEDYmVscFdX7Zv8aTkwcdMXBe4NBkVWEC7r6LMCUZgV8bAzJgQQjSCz"
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
