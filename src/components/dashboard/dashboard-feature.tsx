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
    "3R733YBnntfyT5B4mHzpGyEt1ZNF1AY1VpJMaNEp5pvUMroiv1Xryu1gjyJizGSpZP5JsNJ4yeH6Mc8MQ67e3gko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QJYQ8P4vxCNidBrefPpdftchR1YcxFbx2G8fTgoFYyUMBJnS1K3V8fd38EHqp6gQgw9JMRf7D2Pc9rmTeDL6hE6",
  "key1": "63wT2cfXUDMbY9MtWeVbMVwziutFw1f3vkedYHR5HSBuChY5fG2NY78TuMiJ9arL6EB69kLHd7Cey6FAzTEzZXET",
  "key2": "4kTAgAGJzfHeTandDQuggJdNmDjHHNRnUNyMtxe4pYrnpFwaKPBRtjgKFZDNAbp3AoVbYH9aw5TJCUxcBb3XWKcp",
  "key3": "5ZWj9X8J2dE5tZpGMoGML2fGNHs2fJWTNtt4krrGac4axJDVgbZXeBbPRUeQXrgQirNfmyEqfyUBqmrAdyaN3aj4",
  "key4": "4WgywsKae7AKx8YXKYTFCiyfbPKAorUvF83b7cnnreFFchtNrEvwfA27fif7VibxkRy4RrM92qdCRVvWgHYyLiFp",
  "key5": "vpt7RYCU4zhJx8PdN26WuUCe3KxXPi7i5UzbZkyWWGesvHBMLqAgWRz49wZ4ddQsdaXL6Meuc7qfj1wAT9NCVqh",
  "key6": "2BN58nw5xxpjA4Vo4uRXFnUoM9mSfsKokLzUePfeQzVuAGijiMY4GuDEvTfCNSZYAroyui1yxDo2RoasLxfQsAWG",
  "key7": "2XM3ymktrwqoRSQkwY892gXhiWr4L6Xn24rsKXLJ7gP32dXkHHZZGce7Gco2hiUFKGMFnYvu7ZkGX2YuXze9R3H6",
  "key8": "54U1Lx2HU4nYXU6pktUZkzTzrWNkhExVXPSkDyib4B6Y1tjTZ1CiBiwaLCiz7UdXWDEMs4G5ghv2DBfCLL7YNKZ",
  "key9": "2Et7vf9RXpc7jR4HVCG8C7GKGTMyaJnK78tG97c5oRXN83hPx8MBMPnsxnMkP3Ed7KBgy4REekfLMzGHECXZS4B5",
  "key10": "2E1tfCXGRcb4tmKE9VjNjnQNradWuUNL2qWULYDasHyKz6vb27tpNMwVeX1mbiSbPu7UBLmhaQ6J3uQ8YwHNx9tr",
  "key11": "3zvM81AD9dw4yzb32fCeTEC2Xf7xdv5mNRNXqPMT39zeqMKbn9AFBdwEcKNVrCbb7jKyVds4EqkdVaNxPmTeNXnv",
  "key12": "Jns3boRVBoZGrsFnCpcKmcXDyHPz95pmhqeENDoNtNpCBUsqNdqCn6eNqg5eCkUPeDfLaS1bAqC78qW5hw7364d",
  "key13": "5Qd8fAods8SHWhqvxhuTFcXAisLoeNPntU78tbpGCX9QeSHv4qkTCmbwtWYuB89jM224L4MfE13GVjtZQq32WGHA",
  "key14": "3r66H3dCu5PjnUecX8wCj6Rydeshqx5gcGpN9biz31qQ1dEpd4gyz3trBsrbVVuw7RUJVjWcrXkRfFWZUoAgG97m",
  "key15": "4jqZEGM1HYCmovUiVvW2Ss99eJC5gnjFyUAVB4yhqoKjKdaeimLFQW6rdAjZV9khZKi8baWNArstocuWprWqgc6n",
  "key16": "4hUCtUjKS7ohwcefRnbSDapiQAbq7nkCq1LhcJr2FpxVrwqrHVJLErm3YgDPqyJ7m9sXjokJFtVxqCumrZq9gVz4",
  "key17": "5xcx5abP6t2ZbM5gnybASdebwVUvx9RAefHRWFWyWRLXhB2ZX2fpmC66WVN4daPWetK5epp5w2vNdU2993Dj4THX",
  "key18": "5xk2TJfU3fCRHqVKXSaDuvRWYFuU1prGANRT7BqFX1axPNebxjqt5CVNQFL8aqS3VTnXzrwGyffEByUavaNu6Xom",
  "key19": "2JKYzY2jSgQmr2jVebJwMrwzUK9h9Mo7AnmnPiD1JgEvMgTw9XMN91fEUhMV8mVQJpE31SKp8Ln1sHQmPczAE3Qi",
  "key20": "5c9yLL625ajipQLFgqSNXN2BMsoz3swLqQqVDmSKVSfo7MuRTJSy8pXWvQUhjp2koaaCDvCLpBWJDsY9qdGmJhs9",
  "key21": "4pK1i8NQ2EeyyHZeKTAwjnkRqXrjFESsi3oEEt9CsjqadFS4WzFYWWLqVwNaG9CjHVHdffHcFUC8SNYorBHJ6UMx",
  "key22": "5NygvgGQRhqgwr2LzLWRudrDgY6vcuKJmyZfrfKc9m2ufpD4cCqCb1FWM8dzVquqG2vJSc1mSNuY5AeQytvcn3RW",
  "key23": "4CqAnwXoBocNHVxQmJ5U1CjVLr1x6h9rQH1aTiBmo3PLZ3KbTWGTXVmwfmBL5w6GcDJWjfD6wHz69Ate7WCWJQjE",
  "key24": "3tFv3YrDSXykBHUimGc6t9dq91zhqf7RdCBVyfR5W3TURkkaNPcD5Rrfy62sU3sFWKWjS24kBgcp4GZBokd97uei",
  "key25": "P8pQR31WY3v7sfSLS2eV8hZmbiksVkYtJdd861Dsbg5KUuoR7hsHDFFBHsb7p3KvM9w2WPB6mhyerXtkSUPdkAU",
  "key26": "48f9vUDufnYarRjHwnMMfGeKNYxpC8sZh9AR9FDFDiobGfVuN71W3cgX85fzdEVGejAxtcCq67ga8PZSd3MKA6L3",
  "key27": "242pMkGkZZim4Z2U6V3ENiG67x3scq2qNstYB9bRCDF8qigJFaebtFGu7WZTXmwBnXNAjSMiTFe4L1eZfdNGFD5o",
  "key28": "48jr1jPWog4cWWnEB7gVMZTaYvzVRAdHhT1i7X5Vs7XfAzAWzRBKFjvnFfsGoFcm6GwzpBaYquL3KozGUcDSNCFK",
  "key29": "2AvS9ymrFqk17PtyNdNxcNpCgYdHs9fTcoRQLNaq2kNYpSYUekxWziNii7Ttko3LsZEZKawjD7GVE1L4TetCcsHv",
  "key30": "3261vFYQhQ7UmjnC3tbSqFPEBa4LpEiiJwaZQXfCX1QZnKHZQMVAP6YepKLConiGom2JxLXQHG9kzYAgmChuYuPq",
  "key31": "5sMGbujPKV9xJgadFmv1K4YSWFR2U1cd5t479w8qEjkf7BQHgoLqD9nP37XmU3ZPEBJTsmEvSjPAm2DjxBhvbESv",
  "key32": "59bs9U8zWFqQ8Yq6EuvZkKhzhcBXctyFqNAEbqWmhc9Vn6Lgx5GriG6fsjZi3cKKfnWtYrYrLtBFLWNqFjo6SE16",
  "key33": "uSvmb9PDuwvcPZBkUFiiZWA6Q2cWxJSz5X725hwsNbXz2cZ1vnsaHxc8rvCQpK3R9Mrj3c8PccDNpTGcADsxfKv",
  "key34": "4H3VJudZUcMp5AMGFBuYoXQqGTDRZiSVK8ox322eRPhgNubMTCbpJfPouhkZ1gZw6XpHPB65AiUhGvWPpdfULEUk",
  "key35": "39EsY49f4R8GJJrYZyg3rrmAayPK9KfHEqXwELdBaLY9quRJji6TSX8hiaDDuKMkoGK43pwArFVEaeLR7E2wxCmg",
  "key36": "4buxgo9QY8PiCzQ9NefUtZDqwRLUyxeYVoY7UKBfRPx3gTdPxt2jxgutUpGi2myEyAc8aSrYUVmkpMQqFcx12et7"
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
