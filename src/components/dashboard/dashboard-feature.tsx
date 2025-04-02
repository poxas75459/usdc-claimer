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
    "2UmQ5RRGQpmCsXksnMwMwucH1iK31W9ErGGUKHCbtfANMZ73WLtGXowS8QuZMakZx1GSRmVR7w6gjfi9acTnjs4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oSanRTtkVup9CSQ374qnyWCGZVtVatrLhWk2ABsdD1mBJBkGxekpFiBuyLpUTJ1nCU7mxVbRYbVLNmHpTUv3qXa",
  "key1": "5ZhokNxmeyNHd91L4pLcpvSmvu4GwLnGFXL5BEpoGyc2LbfqLp4ejmW6nUBKPaotH2bdk8qvVLvXhbnzigjaiMvF",
  "key2": "cCoSbNY7DKqS4Lni4dywz6AsJAbDCSP7pEWMXG9nvAf8Zausmpi41UoDjATnpMmtfsarpV9cKV2T1gCSRcc5arK",
  "key3": "3XkEQQR2oXYuJz5zgCWZw3wmXZHwX6EudERpeXdWge7RziwiDZbUmFLGmtvfXzJxmrc1VcNuq316cFpWqN9QyHU4",
  "key4": "5DGADSK8wHFwzjCUL6cMbRFeNnHJwyZUcCgEKQybdaUn6EmcFb3sBTmqCtdy5hvfovqFPZwybbDRcfPFYt94vdUq",
  "key5": "Ebnn8wtegt5RpSaMUprSVCZX6cBwDrQAN1hBLk9ENHct9h8cvf6pRWLGSH3Y9LK3f3SHi5cpbLPJRcTAWhC3nAx",
  "key6": "4msi5vdDp4WyED2pDVgAtb2sXuVii3XPn4sVpW2f6i3hEAN957QxSE94cUww5CAmiHthVd64g5AZrfWEqWnNuJD7",
  "key7": "3BrBVypjjp2ZZvhSvVLsU1UnbxVvBQZcT8zmqL8EKDNRxYRjyAnBEojV616VBJRym189An5CCtF3ZDF92BX99a3j",
  "key8": "p8YcFPqUYRc7BpotPx9yAtqu9WBUbF9rk8JKFAAjP95FhFN5NDQ2bgssQ9SvtdSpphfHaAYgq4Q3HYnqku2hhLZ",
  "key9": "5BD7XAB9WyY3JEAdeZWUgn5PSR1d9b7hyYBHjgQ1wBrm3bEoRWncgyvw8AWF5egsMs5bF6euXFVH6CRzjugyTNjp",
  "key10": "4n2Gr6yaz4wbAGbvVT2NfmhuF1Nr3ZwZV3nxRSe3eB9vZuuxKiDHXJVEBQxgofUwSS5SodVTKxmyk6FqQhKdFZL9",
  "key11": "2iV1uxPUXdruBayCyvD5YLAc3PFDMwa4or8h9D6NpDYf4kP12dJLLK1GSE7kCpUXCK9pwycxquMy9L6Favr3irY4",
  "key12": "5wp5xCMg61EJdeSedk6rUGmimhAnaT9AW2GjL1nYNWaF2RnD92F7vJy4UYhFK5kedoGiWVWKbZN6eCQUdyAZ2jFS",
  "key13": "Vk7U4DTCXKikN5zLUSmMaCv3PMSsC5YZ4dz6Ch8S1qhpcnZLunJJ8TweRWaoXrDypTQsUgMEnuRaAib2Fz8b2Fg",
  "key14": "2bsty4L4km86jY4P89zoQG6NyKVKLgUHxvuJJ2wsx7SWXJwd4iGGr8oQchpnAkvwcFxw22pqxh3S6AENdE92Wz1U",
  "key15": "2LC78c6VwmgaePAxZZLFyBKFeE6hmU3NJU33KuxHxK4WxXE9dkifph5Ssb5u98pLTEhAnBCrdRt6X1RoWQCB9nNJ",
  "key16": "4iRWX8gwGrky5TTjSesw7SbBKRB4dCSoxsXHTGo2nwsZQbB4foAQBZnshT5GP6Hf7cuNEg9i7cCYigJfGVEHrrHw",
  "key17": "3XRYJm9D1BvpehV6cjFrRVUx4MpziFY4SEc1nYohQx5v7x9QteqwqyZUQ6Fz1aXdBDXCNJzJEpCyMod4N3eWWdjZ",
  "key18": "6523RuXpBWFxAD9ip1dMhgZDw5XMFmg8MVT23Wrzu8P9KKBwWcEGPZhAqbQ3Az2w8c2sSFemBtuByXPYDgTukV7o",
  "key19": "62yfdi4MTbrrsYrrP6HDcE5E5H2wVkY2ErBUzH1j1i8QyojJSbRuGjoPaThGW1fawZsp4YEy6SZsqRFQaumMhmM8",
  "key20": "3H8fCTBkK2NSdzbVUaTNju9Tcx6s2M6aH3umguUoT9TweCSf5kP1Roc3VZLRPYm1gj6rh2FXKLDNp2xdS4NdJ7rt",
  "key21": "49dgicAEZR9U9VQ1fTcYETatiSVNXnhkuM17snXooNMUkNGSqjNPNA6etX4v3gzVkKb1HR3vTHFeJkJHf9AKW8BX",
  "key22": "PQwJrsBvsMA7cy2ATb8z3wtdEw1moRbs6iXwdmYED9hzxg6MrotGXZ25WMW4tUPrp5GF33LKbr1fXMBxb1FUnTD",
  "key23": "374z9xCu5UdG7jN7bwQRJqn5u7a5BqBGaTbF35ukE7Nss5C9k2Fa43dtzRNrcvK8MMm6KV3taS38p6CsXqoKtkcc",
  "key24": "3ZSxsRZ4xtRS8SmtaNCsSU54wtpYqazTsJoyVE9vQXnP2GSd47h4y2ZbW3RuAbcyiqXQE9rm7gwEpACCTm7RTZg6",
  "key25": "5bgyd3a9ggybMyXdGxSmhDsHZazoMDD2Cnx1xfHnnEpA1hYCMN64NN6aPHmanCX8XqKy7cQKzNf4VFk4mKoRGa2W",
  "key26": "28x5eifMSU8LdfC9F3giWGGzVp7i9znK4yVsRT6wB6D4LzWSLUo2rYcKjbUoCqunYZQ6qb5E2VY8YgtoDW2utcGq",
  "key27": "4SbjDSrnknKKK4M1wfAA4TdYUtMdqUAZgCTM8GrHYRJsuxLupLVFS8n9Gth9PWonK5xcgvJgm9oF2Sp17stvXz4M",
  "key28": "zQ7yVCvThyG2kpwAZjNJ4tRZcjRoCHqFsSZYpv9acDJrBNCk2rniNDA3tm6nsAhKtLDEWTM1nQphUn83JsUJdyb",
  "key29": "4jWdUK3WGVeRhdDXRqaQgx8d6VyHagKgzptsaxDtm8fSpr64amuouUpwLCeqNrXPzqkqUMkgHB33SxddZPzYHvrg",
  "key30": "54Tr1AALVmcVAjrPUrx1X4UFPDnNaat7nGNPUwGozR4n9grLidbM3eHweNDauPocXQn1zZ9rFNnZBnJNxqKhuy1a",
  "key31": "3KrwqmRsSbgyjLzLrPXXgLkfx1V35LJEkWtHoWGfYsXZEKQd5ggtyQTd3CNSka7TjxwaqEF1uxJnhzVNcoeUxY3G",
  "key32": "5jWXty95nejDLrXc97fq2cLx8tDFHhggyHKx9GrJQvfFydAk8bUne5S7BpfLWh215JN6jgfPsGfxGnhG3KvMYbBj",
  "key33": "4jmdosgbDDkCA1tNmsqq2VUsTF9wDcAP8stHQbHQwPLsZt3uSkwDdm5taE6fgfBVBL7JGhunZq22R4o1EqrTByVB",
  "key34": "3FbUN5sBhJ1fPnxj48jhZXMmU5bLKkMCz5FTeW93Fs9TAbk5ocJdyUFS1zD2Q5rQQKyj1FhRYPfQuyHzq8pB8Qvj",
  "key35": "2JNf8jqRB8EF3iMbJKEoBzpHg6bH7ufjvofxqByX6WhYSa36dQQak2dT29XQmvtk7fGT7o8rWNRrefmMNdAcwWYb",
  "key36": "4Vm3DZ2wrqHwvpARnDZeEchZZWZjBWdP5iJkVXZbahoKjGJYnmNrAQaHE7q2yqQEyWj11iPRYYdDf2gLLcRNroom",
  "key37": "2o16UkcVxczqEeb26mGrj7LdXSzqXSQcwnfAKnejUTXduWzGzRMQ2QGXaGQxCaVFobaDoySRcPt5xjzxtyzjZNRb",
  "key38": "5KrhPmaprjRbdjh6oAxLNmqdFxvreetJzCGRRgPQ7DMVvWQ8eKwxjdAh4MrkVgmt3QnmAG27Hikzno7HBKqmESXJ",
  "key39": "SAr9bxX5KEcEj2pzxuM8wbDqam5kw76suv2c4PTBBSzVLdbSCi9mZr1poWuZ8ZFC1V95oPR6RNqN1SPdJ3C1J96",
  "key40": "5TZCcGaJ6KVQxDNTThYwLZZ35RqBtTeF8r7EJn9FJf5p6kPUmL2hxVzko9Lghm83LcCk2SdyN1xZzoDqU7zkodDE"
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
