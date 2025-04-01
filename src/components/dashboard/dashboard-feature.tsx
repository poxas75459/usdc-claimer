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
    "4hNiFU86bAeuoTpm1i5RLgjwFD26cZEYf7SmZRcSVX9QT4L6sJKALjgu7ZBkEjgyUwcHP81DhjwNvS5jN1xEygud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fqTMnTf1mstXWLDVbZL8guM7B7wyWwaqjqbdVY2JWMBXdqSyWk3S7upSUBR3HhqUQj9o19cQVckSe95oKvRCme1",
  "key1": "5uLEUQ14XAb5CUkcyqgXtx2TfG5NPnKNBhZNcoPTM8ezrqukMqAonoUHxbforoxztdF9u1zn6djyEn8yZQurFa3h",
  "key2": "2ibZXbPRhocn9iPqw2ctin6nok9bwzbrnoumqr4Z5Mhm4gZAM6GSBCF9QTwJM1QiE1SD6fPLVxnpYZrPbatNCEk6",
  "key3": "5BRzrmpaG1VSzKHbSzTbradU2mGLegBcdRpmGQLdV1zCewDTY4ycQ5KMZKTPkh7KM8w2NnbaBKfyx5hoHhHUthv8",
  "key4": "36k1AFp2Vw6nPhfZtJH7vAtFWiNTurcg3s1XQBpHBfJwsWRRLenJR9ANnCRGufbYmBii1kufuXdr9DYA2Dfrep68",
  "key5": "2VYuAcW97uSLnt32UjxtM19rRowgsUrc9TKXoYgfdcfTdUxwdaueimndtu49Y1n5NbF2y7AuQbmdkD92pkg7Dg7A",
  "key6": "48ov9bgJXBdo5wdSpbJX8x6hkaCCrytQD5KjpdKdw1mUTP1uhc5tsX1fHLdnuZhyxws3GBSJHHvhKY7NTfJvK5o",
  "key7": "3zeiodzvfkrntKdw5K9dt1Smt9CeuBvjhufsR4ZXh35JtFG5eHrLMFDmaWBBjnf2TkmX8KmW8JwRSKpH8vRuzUkk",
  "key8": "2Qow5ygHYzTLD4ojf7NKyJH1TqrBBYUdoeBC5KCcbwZ46d4yig99QoZZvohPc3H5fU23NdbjTG7DKEKz5Udekrwj",
  "key9": "2HJiT3DzXuMQeR7CT7fQuYHUCPqSWBo9x3paKs3SE2z3JsTnAc5m6hGRipXkaJpJXfxGLcgdpeSm9WqXyLH6zt8M",
  "key10": "3k6APUgMFXKUZQtXhRzpCTYKHhWvKWiXE5R9oR9A4A9QhdZc4mNSTL1FaHi7dTbjidN7hMtFCGFPe3nwXNpPhnE8",
  "key11": "2gEqpXrNDZHYXZhKpbNvgezJfoTsJFnWCbRYXChPc428zSuroGVxiWvV5vBZpwYccYm7DJycFiHHbrAux2eWfgE8",
  "key12": "4x21BPCi19vLuwASCd3z7kkyjoN9mze87sjEJWh1fTKCkW7A65pKJRPNgn3pL8iyHcMvXJMDa8LSJoTr5Rb79XSk",
  "key13": "3eerYGKEWcavw17qq7UJt5ZNY8AkbEqU4go9YA3q3VfoL7irQLWrvPZsjaAB18X3zcsMtEYX1fX4Kb2A151Tf54J",
  "key14": "5HLGy6fyRJmUcBvVFvbkwEMfzMrLH6pRkJ3ksWUmDFGt5fcnXp2eLv6GPiK7gkPbQH54kG2DVYvwRu9mQ8RFfGko",
  "key15": "4YY1dFVEr3XQSfwgq3bnXxMoC5RgUabMxyAamHANAJUD742cP2a6WnfNNqExfUzTCvrPnj5qMZSZRSeuhDNapes8",
  "key16": "3sw9iBjqWTueZ3c8pZZh4zQruk8y52jRBKcjH5QUg2u3ciFTifSbnJQcbA1XRrbHxb7XVvnzpqCGfLZQRUhPfBjh",
  "key17": "3f5f7tW3magxPLPdpc79sHNpKUyXEfNFC2zF1HdeuMyHWh2HLHKMRrFq5YyfhPtmzWKX7oj6JrwPbFFo6esPeYuz",
  "key18": "Cb7VMTNVoXFyY647iLWmNKJCcmjJJoYyuzwNxRMY8oEtFnxTn6ULNDepVpWAdnpN2unQLrG5jkSvXRuUHHJdNUz",
  "key19": "Xt2icK9H2A6Pi6ggnVsWA2W7dtLz1RZPdWRuAaCrKYdY6GZJagE3sXE5YomgUssrgdfD7Joit3ZUgJRW1CNGYdo",
  "key20": "4FFgsjt1NCSWaqrcfbbywMioMo99ykDo8QbwKFg1wswCYaA1Z6VV2UEMTLxNX1WMebPvthvmcijY983H453oertH",
  "key21": "zR9aS3P7yc5jLEnKcMaTGFgvGDyscovtDLLa6xfkt57PJng9HMj4GzvguV9up1MD576y9UB9cP1zSFww64S6Ed6",
  "key22": "5gSozAMTshCk2zV25yBNqepnQPF2c6NkF6FPG8GVZY3kbebFxpD6YyjprhP9bMdLuoJPU6wbHJFz6EJy9Px4qUpf",
  "key23": "2fCJBrgiY1hhdmazNLUfwoyKCqevRb3mt3GYUmD4NuG45X5qPRnh59yHJdnat3wiEkY7NFeDpSsirmDYmtFCCZEU",
  "key24": "3iXjxiS6deJpmmvJoTn1bYK1zkuvqqFh4LKWgbnBq9UZdpL2PP5Cr4aJjuxroZajBG7mK8y91xRQuQVSjSRsKnyS",
  "key25": "5ViHJPNgh8meNVYH1sJpVaozf2GAQeGKZY9vWzaGVtEJo9JNYKEiBDB2Z3wAAJirvA4o27y7M3QZcAwR9npK25oN",
  "key26": "31vh22FH1xNvGxmfg2N6mKuuevUk6ccQMNeVDtkmqrxpVEpmdkkPmepZ4jBRBfHzbkAXzNkDatdXuHtJ222JqiME",
  "key27": "5SZuJXjTYoD7Ndu89vAhaou1PTHZh88enjWKW1jN3FZ61F1obDeFKtoTLxjFTVLURaRbux4t4Ws2FgTc2SjfvoDX",
  "key28": "3akzRuxwFXtwBEWjSoeQoPtiYzDbydfZcGmsCzTJWqHzHCB9tJTmMH5XWMCK5kEUuLvEMEHVrxvAaWyWUYjiUNxJ",
  "key29": "3oD8K1yf7eh3W9XjT972qeYWKnkh57y5DuMYFAkRwj41ATmF5RybStPckQvu7VB8Lc1JvsFyweQQgJrbFUYMHroc",
  "key30": "RdxLgyAdAjBDwiJWRKdqUkEMWhJwUuNs2wDH4hpcr9rYcHRpp9faVNDaHLupaSKo5gY37rDZQ7hCPqrCC4ZQKWy",
  "key31": "35eVTkrGsESzTuFLoMDxsvbj11GrSyzrRbxH6upAXCaYcUQf6ep2s9zyjnjd2MhGLYuyMhG2Rdr1YzhMsQegR6s1",
  "key32": "5CqJPYCWNLtV3ZmjYxTPBF8BYb1bZqss9gqGzxhcW9XrrpvMLBn88Tak6e59Z3TqhEY4JsNuutP9Sr3RKgXZesgF",
  "key33": "4FwnXYPhLXPy7z2R3Fa3XqUDQfqs85BJG3XXQH7qye2gzGUf9zqZr9gXdFtwyea3T6xNuJqZochCyTKLYdXD4gSD",
  "key34": "49R8LJK4ZvWPFJkrjS5VqjVYrZbA98a9Uvo6xPvCwUny6bdE4mJT2PPbDWnHKMyKEbQBkugKX8q5jdE1SXbGabL5",
  "key35": "4Wtw6u5jPQWEJZxbJFH7Jk3RcThpM33W47pxBoV9cmhUiTWrJ2KVn9i5jX3FQcjjfVibXZDLWZfBu4jLhzUdwPDW",
  "key36": "sTyNJH4bRu2FY6xaufmwwJQWgUtzEuTHFE7Uh7unKXdGeXJVGzeGEyghUpj3NZsovdwgcp7Q8CZ4zExLTKPrFex"
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
