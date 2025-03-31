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
    "215d7yrECuaY8LKfTa9epJbR3VMLt3Tm59jpPUDX8d8nJQocVKE3znjyBtpxvJUigAsW3Zph1dYcpM591218Tb7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wWYDaNrAL4wRNrEXJwRttEgVy9y88TkUhHWTDCPRp4HnkYW8Hq1WkMQVa7whEgWmhrtjbYZHTWKX55qU3gRHi8j",
  "key1": "2SYhmgNneiXs5hLKvHCAmnANzh5FmiHpgAdUJME2fKqdpr18W73eLJBovsTRtHvN3Yt5jWphCoCofMpo4jrUVCr7",
  "key2": "5uMLqjMsiBRxEsyPyt7DDf3kcVMQ2WuWsi1tKFWASvkTo7WVo2qXbmBQKAYt1cpXzMXVB9Tkoo2rqByLu7Rxy2ey",
  "key3": "5pRUaaQ5rhrrNgC9XKfnoQKW1oCnN7rQiJPHw1JEbrxhnEH4fjPFAeh6dpKzVYvSK5it9y3PVAwmFdkcucDvXVRA",
  "key4": "5enMaYQAxaa98dGFhug7epmK2sMtgVGGoxA4ev5SjopVuDabArc7eod1He7kCE5ij84eEkPENiZcSLQTXbv4MVSN",
  "key5": "21XdrQpgDrYc9kf6Ufi8f4LjxksWsdPvAKHsfMRCawfMNgNAWM8bNtGoNr7qiEPAe1ozGa7Rxp7ssYWVUgU4kksv",
  "key6": "JeRkQMrUcxxh1rfyrCDwLzEk5KxhNRyVmpHRJXze3EHW3QXRKaBem331aqmL2ThHjLEX2yHi63BSKdPc4d7iRyM",
  "key7": "4oMYiZzvExx6h7KHUnM7uoHWWgpeGVdPd9taowvm77cNqDyL5yjL7qfrJcLAD5x6jgm462SoipAp8MJEh5epusTU",
  "key8": "3yXKjJHGfLvDPT58t9rDDeZbcb6SA98wykS1JVcXTmSE1apDyFH4GChopR7SKU5jmYcFkNg9sS58x4jtGU4wTUqF",
  "key9": "56wgoQitE4DHSKue8Fo85wHzjBTpcwX5SaweDMFbJQTJ1Q5VsHzFZk8XUgBVWxVVyCEdfeJx8peWD3LazgvsbCW5",
  "key10": "4XUNedy5HNk6EqwGZWZ1CX37ysaCbgi3ejUvMSpNw7FAkY4TDpsbyYmK2zJegf3XyJ6D94YTaek5KjFhLWwEaZ1w",
  "key11": "5wPWQD6NzR2DLAKNKo8dhZZXSV4UbZrpkrF7b3SrhLNYpyFe2A1AketsvbNrGADTjn38uiA749VUkrhAfLKEeJQ6",
  "key12": "5Gyy13Z57s9VEsYJaW11SK1Mga666PXCr3SyHRR2jfM6wKYGSMd1YN5CPkvdaeE9AMMYdd5GSFBfJB2SUFTKqzbT",
  "key13": "5ABTjdFQ71wKMFaXZaDHxYY7N3HZb3428ibWCpHbFj8wxuBApzkJH9LdfRGB1q3MpwYSJ9urGdRjmjsiioNxic6a",
  "key14": "2NQhyMkjrXpje8eY9d32H5D18z8pKgfMjZYFTtEHzvEhwKnVhNLfNxf99a9d95goo94JDgUxqyewbEgWrn4Rc2AP",
  "key15": "5Ni6RcbxUYfiep7DHAqr6LfafeUieKQFVdv5FW3fJV6NUSN8V4SAoiQ55j5MKdTiWNULzFXosqPjPNYw4MtSuopK",
  "key16": "VxSip6f8PrGtUxiKFyNvAAkbUYvQVUMSwb3rPPo4e6bRLwM3WFNJ9YXCdBR17fP6Uz8tN7u4S5MD9USND1A53kF",
  "key17": "oehCX9cYEqHLHGXhg2tAxJc7SEp28Rk65rJ1UKvqZjnLgNx4ZFoGTUSPR5pbQRKq5vjcSLq8KTeeovQkZ8wNJyu",
  "key18": "4ZiqNfF9iUe3PAxT6vgDbCBn5vmqUucN56kdH4N59oZ19UP7GDRdNFukT87AFHe91LjMcD4gzbHAi37CsXSCViKE",
  "key19": "SGoXCxVoAtyGrePEYnG8rNyaPL6ggRQG9QP3CasbcDx8aK48BniitSnD4tgFUoKqJ8UV3sEoAeZ2HJJD5i5LCK8",
  "key20": "2nBSNpodwWJNHqvSQK1RRnSN4pbpkwi9d9GX59iQD2fYQ6uYGhuLcnfP7XDupPfqhGD9TmJzW4Vyv4A9USbdt2Jh",
  "key21": "2v1zHt3shSiLtDK7QWmWSJMLof2ztZFLSFBTbow9DvHT3JHNZ14HSgRKRgtLJVWcvCaUcqge6xzyEUnxTYfV8Yo9",
  "key22": "2xLzPXBzKYTpwKvcFDJ7zPomYDvN6Mh2sWw4RdMgVkTx4zFmJuqA946WohVXGarRJ4Mybn7vst3ZTNT443kqL7rj",
  "key23": "2Q8vUTomn57oimPReQHMXiaq81PsrhG9cEnAMLVhg1z3EK6E3kivgt9deVjUH9GAH955sL4Fho3St5YjUhhLCR3m",
  "key24": "4KUy3x7t1D9wUebfLDkzBB9wGKikuUS1CN3jJh3iDnZHoVqYB6dDBFHx7qPjgVeFsBRGvHc87sDSWbmWwdH5C5ic",
  "key25": "7zsSxj4bFioJU3ULvwEXtVmp7QkAzvGEftxyo6BvDR18Ddo1fGYH7FsL2Y86qNGJMTYwHBhnbPDknPKyLTLjNzX",
  "key26": "JNRj4GMbkxT5zv2wmpXwRtk4QVbRut5otHtB4cGYNKA8nsJBkK8WtiduQ2tvnjqKbDJLoFoGucvc9NmfPPCyHDQ",
  "key27": "57snjyD38WvuACw6KzHs1yE1RSrquSTwLR1qvsKhqo3YHJnC22tKrV7rfQPn3WassjdXHyYVHgRVXovdVeEjsUVt"
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
