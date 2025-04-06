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
    "4oRuBh5gYqyY4poRGBGiaw9TyVLwgFE9TeNayvxHksJHHfnu9q4HtJSJ7GLmof1LyePSQUx5rxeL9QpEX1pbtHD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fe15PiH99wqTnAvjXuqX9bLDgVNV58K1Wmw8djzb4KNTaCo1si63evEy3Fr7zAu4vUr66wBmpSqCqbCvVtRWTLu",
  "key1": "3aCGX2PanBsup1Akx1X95MqfbDpXVQQkUsn5pWYQdknhK1CjZ6Qs514HJTmEFmmNPMS7WE6Wa9PXyMBBNxL47aRA",
  "key2": "5YQGAsKqUqHjrnWpgwRrvsnC2RSbyg3PLUv9jeo9KYmffRTbKS4UaYhpZt9NTPoJXLyibmLTUUWAh1chofZk8AXB",
  "key3": "rHbt5RUEL8GYucGTa5qQHdcfymtEj7RdYjeUWUB63BcoE7b8Cp2ZMjkRQh3nHqbBNhcTiDW279CMvzouioTCBnG",
  "key4": "5ZE8Wy3SMP33RrBjVxqaoz6aCxAz2qb6m2GaxBaxK7XDC3VedeHuFpuQms9ssD9mWxtRZpoZW5RdUeSDGNmKEmSj",
  "key5": "28xRyvaK5APk8zZLs4QATGZ7hMTjiUyBwLJJa7rQhvG864gskBLaz47sJK3geHtdhPKn6kCpbFqjSbJ162ZM7ngE",
  "key6": "5GVTzkBPyTGZ181asdv8a79hJonLVmq13g3t9t44HembBMgirKPosv3QCh2DUbiD9GxXptKREmLP8uPWzF82mX83",
  "key7": "3t5WdkmMBwKRT2vJrjreWyUMgZwXoqyZdoYtU3ycjZJjtd4VEhdMTi322cmLfBMsqLcsT1frP7uNW2roEK8rdMvX",
  "key8": "CsTD3DTJCVjoPruc4vLPJzx3yNb3pEREYpqjQJzt1Yfh2WNY5fmKFegcv978hPEAduB41oabpkpbKHh8DJccBuW",
  "key9": "3FpSd6iRt9VGubrDE4rZGP6irAcAHaPqYP6EC5b5Ucah9XZBn8aB7wycSgwzzbKJ3oqzWsFfWod6mXyFny1ysBWx",
  "key10": "4qbvg2iTmWEqbbuSGvaRtZQ1q6tAfGCR9EE84YzZymtt74tsDZfaFJidoSNpPgB58H3zEmJ6ESwQDtKnJVDcdg4p",
  "key11": "m9ncKEma3zG9s2QCdZipwHQUFRNBd8aeybs3E91uMmC7geGWRRgfFiHQiHc87WMk872vuvKH2KryPx4UTNaycQQ",
  "key12": "65AtSuAhzdWRYYYLU6bkjTHD9NhhtX9UYiE94J2JNuooC6vVBsHxYreuXhFHSi9HPEHTMqgZvN3zfMTJ4YzyN49k",
  "key13": "29rA86ZpaEas3wQJfcgQXQB6KEuUwMtga1kmtFhC41jyk97nVbHrpR9Uy3aJpAE5jQiSJbyrb53Mt7C2WLae69w7",
  "key14": "3X37LLug2N3KvE72ZAXzFe2drEoinbCsLJgCAi56wTCSLTavtKa3osfXdKzmv3LPxzMSXamd5H7ZPKjmQbCE7zxe",
  "key15": "57mPjR842sgzRE8GHZsCDaqjZokVFqNGpDH3XgB3dvNc7CHPrD7oXCx9yMQXcbHx1pHG7c7LmqsmRrkQpqJvZFJP",
  "key16": "7m3c6GbvG2n4godnz6EoR751c6ou6eN2giddCS58kQ4MYPC9ubTQmPkVbEBWJhJexKriRtPnM3ZBtaiYkhsyPgn",
  "key17": "fU32M2hXBJiwHsxU3NxtDeNKjctpnrrmDa9E1H8Ea5kBvVJnp9pZFZwHSB9gP3Zj5ZwjbZ7PSwbgzaz4EgQkR1d",
  "key18": "2LC9rqwpsFceVNgxsWZpVRKAiY9ki8o3doybQJijpZUN755tz1kJd2wPFB3df17yxu3k8pP4hb7zBtJZP36HLVx7",
  "key19": "2XSsdn24bkXc42vr5kxQAP6Xw3LxTyJLdokNtXTxt5hkDQicGjcDe6gAEkZUGYxPq4wMitxoUV3saKnyT4zYgPD5",
  "key20": "54WgNL7QgGppJ7f98BZVCPVe6ZKMg9Lvf4agk7zgjrruvtRwtgihQLyDSUJQqAzewGEZrZd1BmQLvMi47MVZmwPn",
  "key21": "4xjjGLZR45MQwRYyqnYUgkvjzLSiuiWz9GKH44cRF2yrbnLMsmtYAEZTydLMeU1kFERoq5NwuwUNf97SpK2ZwvfB",
  "key22": "4boPneCZibVgYB7kr6jrPQKAaiWm2GcwU5wiQH25BaRKJSziptX2Ki4hAbK6qVU6eUKiMYuHoRGCjb1VUJS9aRT3",
  "key23": "49yZLMWkbojkmmJPkmfT5KMNPBaEAuemY7dJJiTKYpE7BNk1FpMgRYMjn8fsfQ1AMQ2yYVp8mP3UDN23Qg6ePv5S",
  "key24": "2zW7Mq8bXhjBQmjn2UPZEsKPrrLkzJsFncKrWwRKd5eowQn2RivdPvbviV4SDCzEMwUYy4giu7qt2KUwVRLhbHG8",
  "key25": "K4a9xk3i2jS829NW6kYmXj9UKFDHD51c2qvty6S6mhZJ4tLypFxgD8Zk8JRnddwfMG9dpFsw6uLC2y2BZeKAVvp",
  "key26": "5XDmhSAsXcGdZcx6PZQBZNiTFRPMMsCFiKoEbpoXzFHtHfznrsebWi6gMXn7T53wwsa3rLnQkBqULc3rYR3PE1V7",
  "key27": "2Ra4o8RcSs8aLr8LfsMU4XranarZQf7pCDZtjtYE9vwPUXJkWsTcmXp2We8TmrXRjYJtPJ9AQtRJNu1j8xV9aizC",
  "key28": "33hZC8rKueD89aJ75Mdvjt6qnPVcyenRpW8Fw9Gqm8SEm4GMoHvD6vKjacxkHdMncq1tQ1tBFcTiUmF67gjsDn21",
  "key29": "2suG4oqaAQnUFnMVL7EVxYy3HTmqah9ZwyT7etwV139VQcvvMrrEaChtpJwXusr3T3YapoytVtNrEd9if4N9ksAZ",
  "key30": "51fGwL1TE7KtVBtjDYbGsDrZLzTPrigU3SrTwUJ7WSp4aUuSCP5xYgki9HsMjj7eMirCRt3HxKuJCjP6E3a4VXxy",
  "key31": "5B2G9nZjPAE1jrgr8wzD23puLefBiDQGjHaw6oQYcLh9nuZED6PxRfg1ziMmHHYUUBjEDR8C2bkj1pmBnjSywD14",
  "key32": "j4U9Zf2iWWYBcm6QnnW5mp8ARfuN4mvcFi3svieHEtFuAj7deedYFUrjs7mmfj9UrA837uPC9Yd5h1JFBq5Cwi6",
  "key33": "3poS3h4KghCt8K9VFbGaQBLLfThAU8R9fV8bK96L8ymR6qgPmkcKTb2BmPToN89Wa7yrT5ss27KLUH2rTkShpqLX",
  "key34": "5oHKKmVVUnrGzXR9PB8Bz4woFdVXrn4DhKN915eBKYiU3Z6JRbBdF3TVRctKi1qpPKJJpck7BFn5sw8xJCfEwU8g",
  "key35": "nYDUaFEgq6viexBsybJD2Ti6ziqJeXRab8iAWevYBrqd2uwpiaf82G3yQMmvh65DRi5DSRPCXEsrH2bFztjChD3",
  "key36": "38QWPtZd9zXAaAYyJ42LicL28951XmfHhmfX5gdNvyLfvGm3Sb6j6N3enGR6xcNokSDxps6KN485jdguHb8LCQZV",
  "key37": "2sMJ4J7Vj2XqzFWAyfZPmkBnFEoWmsbtsLjbz8p2uCfkCuNbvhbLWTaz9pjBfeu5YPGP2NSc7aWtw8x7rX7X6j8q",
  "key38": "4xdM7otm32N6UNTms4UeQmhprCRc7i8vsDwqApPyqwc31z3thNE8f6Wwgs5JPVhEgtPHqMHBhMRzrArfWPDyJvaT",
  "key39": "4D1nJLSQyLY5qiB69kYfngoC71qW9Gb4H78wbHE7ZyrGESqce9E5vpPja4sCdxPnFSAYDfRFuhS8cxNTYYbfhKLK",
  "key40": "2oPC5FDeDr7hFduWL9w4wuQjsBaWfs6EeZUTWdzx5W3jTA3szLy4XgQW13jvqA6Y86cgSSBYUkoxFiwS7JqXg8r9",
  "key41": "2pDov3hx5hdbaZe5NjTG9sgoBQcN5HD7Am5coaCzz4e2QBcAgx6ULvzCVCz6LonVsk46ZCDFKE3SoZy4HrgbrojB",
  "key42": "3rCLHH75wqUoUMvH8DE3wdamneTbUK7TAuaH5S9CKYRpk2YYV5QZhrUxR5trSnG4w4NPicX7U87M1CVrUaTpCmj6"
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
