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
    "4zRS9ZJpNZZLZPEjmxAF3K4ferACAtogFVcDBv5oZT93QcncXn35T8c8zfbbDYRWjZFWVEKg8EQAGFLT72MXDtwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HFEBctB5LX9YT1UBNNkGnMQXKNDZscfYwcbjnrv7Nur9yNf5C27Tvx6i66hSmkNGN1FExxR2yZhwuork8cZEHRV",
  "key1": "4iRFedguQZEZG4pz6KHnCv8DwaTpaS3299EwWHnoMmDp4niNp9CfofzA1bAGTfhdBuoeDR16CD976Hw7Hw2HuG61",
  "key2": "5H4PBsU45pK4cjA3YkG61e5YJ6w3URQ6aai2ZxhA9Zdzp9eWH1H1yTvVfAu2xhoDbVozryaBWUCb1scEYsCYqrMn",
  "key3": "26RRhowceoCohG8XdMtdtHE1HRcpMEGLk42RCUeLxwsTDVx2RAxUp6doEjoxrbMnHygQKREsrLhVTD14qcv8jpPt",
  "key4": "3FeLkYeDECn8jQsQNNGfniaTU85Q2szdHc9UyzT5XM9cscW9A1aPMdUBp3yx2tGkAb3s18KYAjHmQ6a1QUG4Xhk8",
  "key5": "4ghyrPocQMb9jGH31V7epVE9wZWSyJawPi3PRpRK3YWfE8VHhdzmsAeJvdWjoBRUgqSH5ecr9vyVmpCmiKTHikQS",
  "key6": "Q8QdY6qwSWBKrrC3ZR2aTn2yVRAxLUGWZ1TYcKbes29vV1mf8rW5wYfteK7zQqv8ePYLve2CGUiKG33874nQwCE",
  "key7": "5NGpuun8DErZmtFCw6BCmPFfxvFtGkwKEAazex6xNp1r2zYQVuGMBb5fccB5UdLqGtBG8jumWMqVXjKS9MWpUYX7",
  "key8": "2fJrWm127ZTkFp8AqoeWimQcPMRoyaT3oPYrB6DBZLhJP2SnPBfb3PwPUx7JGssq3uKAjv9c7atNu3iQsVzaDvsT",
  "key9": "3Xp1cEMYuMRTe9rWoQCZK5RNevM4mxaB6bFmJwv5nZj6MVjJU6saGPpvLSzRX6iy9RkiKga4oTfe6RhuRujL7DGM",
  "key10": "5cn8PbMsZ7CNGaLSprvajTzZir4m8tzqTykpnDKT1wDAgjBR43ju4kpCaT4t7NGeYWtGT2rm1f4Pq2SFaXDz5Nsj",
  "key11": "4PXh7y29fjApFF5iAkm4uLTN7dxMbTUSZ7QJQULX4k66ueKWvzuy4aNENdFbLDScTBD6zhpSBgvUUuxB8aaueks3",
  "key12": "5cUBKesUwt9mDZS4PzKecxGkqvThRgrSKo61FPUPpJkVdYBf1ndzC2at5D8diEskvwPR2fR4YK51hbxU8pSZZZGJ",
  "key13": "216ezsXAtmJuYjf7ahg66sBPqJGYZeNECv8csWbzf2QnN7D4hJFKy6D4o2u63Kf49YhK7X1Fur3WQUZ5JPqHHj7Z",
  "key14": "4r33VdjZ6kjvkvZYZKPxmC7fCQCo991PiQ6KzBUATnRExJSZP9XXLgg4RUNpY7PNUxej7ib6QSFF3zkHV7ieVwMh",
  "key15": "3RcR9nwKNPJyVSPuD6FdeZW8UpvftJMhxmSmgbB1gg2yVN3EhAcULoEK7G6jnj9n6zU4GVk5VzdAcGMhwjxzRS5j",
  "key16": "g8YseAtxfF7qhR4k7aULhVf5oTt33U2kBLxeCS2xcdTQkEUQmenRGg26X6K21NFhKmRVsGxWZJDUEJ4irAJvdPj",
  "key17": "4saiKSdB9CPy6C9L8wYqrcg2kpFFEVnzMaDBBcVB91PbNe17nCASGCtEXXFmRfFrz18peMSMF7EC5HDLKxgZaoDM",
  "key18": "2Js4CQNKNAE1urNfEQgEkePBAMZuTjShzn36aqBa4YBCsmvTnbW8vTZwHmnduSw6hFXni9EcSigQUEnYx6YXtSfm",
  "key19": "448h6Nai2xgN2j5CPtyk1sHyLKCB6ahsqEXK11Q9B1Qhan6XFJUG4gr3QWgapgJSr7aALFMbQSubb5yU2nUu5mkX",
  "key20": "4cH13xCDbsgbDFnBTRFGVTGzwW9XCiU6S7S9R5B47DS1bDRYoP81ZjdzEUfutnuvFAw4vz2cynU85a5m1JpEFhHq",
  "key21": "4xZP2P4qRRP8uQNGAT7Z5R56TS6QRWmAy1kYUmU3xrcFQqDDMKfT1aYoMK8QJAuUwH4aMheBLyUCmkWc3FszRzDM",
  "key22": "2ZBjRD3ZGz8iE26yVVDiSwoBFToWLYGZdD5Uyy6LfBucj56xd9gWKryi9xRfcgyktXH4XD6wbLHST6XCHb2bPVJL",
  "key23": "DPzC1XxQoaRm2aSULnqjxgBHwttsnwssezpmcGVtqnAuKFfkZPHKdrdEhsDBhRupHhySPv1CqCEC68ynsG8Dv1Z",
  "key24": "3AgDAYHXsdXjp9YXfpMwW7dZTJ1B7K9M7eGCmPnxoYcd3KE6Jtdb1dLKpWVBTjtDwJKCDhGFh22BXLvJmqmf2Bqj",
  "key25": "2XyMtCkWbKJgicfgbybm5TWitkBwkTUg5bLqCfNnjus48s9U5w1jvZLPcevANcSErE94wha8511ca4uLYUk2zTYS",
  "key26": "2v9eQvdwEqrueaYdg1eTZHGPwdSFvoXTvJ314pcWBP4qRgDmN1JUH51B47rV9P8H6vhL1vMmXCbRHaNPczy4Jde8",
  "key27": "2LPDwnTaTPKJfXQKLRaczQNcVzmiyFEyigLNd5x8veMXQz4b2oiv5SMxKR6ogYAxj5wboxsTRk3s5ducGMiAPcKH",
  "key28": "4wkXwNsN4sXLe2Bm2Q7FhHPC3Ji3TAtKaEruEzbTy67MoSVxjCsLnDQUPXqFEYz7GQFBBKLXB6Xx3bdDFBH8rX2b",
  "key29": "3JBjf2JXCmM9m2w5udPJxtz38NJ147KtQXzBEMeXf9FXRCEsMv7om7UCE6tu8B6sp9nFuSgwmuwgg3MJv7jArjuY",
  "key30": "5w5muhVMkcwLkvXsE94HxvmF2NaEEPGjW8JQ11wQS6aTQDfaHiaYTfY9sJDELKGdCpeU3ACQzNcSFpxpG6L1AWHM",
  "key31": "457khfQu72yvMxnssRGuFn33yn3xpWowp7Cr43gF7CDCbVBuXjcckf6g1CVYbnrXHJvixDeY7XdfwPab74YNVXn6",
  "key32": "5nJm397uw5u5RGCSpSWTdDi8kuLGXcgJS9YhgebMxPriQUJrAjz8WAav8u2ZbYMgaQogSduN3bCjCwUZS9mb4JoX",
  "key33": "3p6C1r4UwL4sttCGh7FQQjh7GD9YHLg3wpkEASezug1Hp9M1NLspdqWoepJtkUVuyje3kUvZbeTW8CbwbS4HR2Xx",
  "key34": "3R1XLcKpZsmWhGaEvf2VCFqwHs2eqhXkBvKdkqMCeZyph26fX9XJPfzC1bR8tZ61qZzZfK5jssBsbwroXjWzELny",
  "key35": "3WdZL7fxegYEa88rUVsVEzRfk2XNSGst9o3uFsBUSjWHyyy2wFEkFEsmXCeB4aCXNkhMdghesawrZS7mQUStt5L3",
  "key36": "2GtngXGJJfsisi6SD91wMw4Nb5TQC61XGk3158rmQgoEvRHLd88SNVXfaHMsGuzi5aM8crg3exvFku59g4En8ryJ",
  "key37": "4nY3YZvthYcKgASpHgMe3aF3H4vrW14BHNHfgcpTzYB3RuFR645YmyuMgc2uFssyYMmLNeNYSEhaQ5iCGeVbsnUA",
  "key38": "CsnVa1UmFAarC7C2tYsZoubC1dpvDNunssg5g7hThes7UD2QjgXt8YsMKXjvoJT6hdKtUmcoJk9yxbkUQieJbhA",
  "key39": "4KjJA2aqtAAQ57Gyy1c4fo6eKWBZBJmb3ePnqbeRNXfsa9vt8VgetsKEqWaJng52XKVxnkvJzpSGyAnwScHUB1g1",
  "key40": "5oT77qQaw9ECgT1maALmYaTfUndowf7yHoBUKCgRr8tLPMz2faQwAHzPkn4unGMe7pc3qjeXk8UHbpawGMe6nZAE",
  "key41": "4wS146mZbsSNrxPvLvVuak75VxVbjwadJScQpLKib34aTy7d9Xf27hhBwP6sU6TTruZwfXoSA1uha9jAM1zeS9X1",
  "key42": "2Fjnc4ekbvaaqspwdYkUFg71psthKTzDsyFp7WrDpLqmhPyMFFyp4JjL5ttYF1YUMwWWPZBAJGyjZkvGiA9wQ43o",
  "key43": "5ffY7KPi8AWDQvRbquXt3F6icLh7qCrz2Bh4ABUHASdCRWHRgC7NBFkHKkp88C62JP5mzaGHtPtp1uhZ8BtP9uJh",
  "key44": "5xnC9r1HaT7u7kZoWb4yEsrHWvT4FggU2eMbNypLHGMvkUkUtC8QvXVwuuKNCJ9AajmR2fx2kfrYhgRi5kmWbDws",
  "key45": "5uv7MThKXSErUisKfiEoSmDWGgGV3nwRNb1d8QXi9fijRig2s3Hp5uQvyrmPFFGsXrFxWohodEwMPZ8AZB7Dr3xM",
  "key46": "2vdfequsgviU6TiKf6Yk31GaL55KdCKRYTHfuW8Zn62SwSt6Xw3tyKeKjiL2LMfKvBD3PSy8imXpC8Adc6EEaxvg"
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
