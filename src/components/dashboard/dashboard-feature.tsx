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
    "34arKH1T2ryN2MMJpPgBgexTWRvEx28YjKxmGYWAxJ53xxQZfZuks1ioyebjWKPfgtW5WgXtWsntbno76tP3qCBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q1ShFFeyqtwWkaM9tgjWuBD7E71PZmq1T8ZfLTTzMBw133KWDXWH9rFQ24XsKpTwnrxrSi6KyKG1w6RAduEaN3d",
  "key1": "2rnovtrfvzPHsn2CLry3GZei7tUUThSb3HzQSddFJAjXjafMPmtupFvmcxUXE2xXwkEXzWeokH4Nm9TGk9W3if6n",
  "key2": "5769M5KEqHmzqFsNzZZZEjtumWGH7uVDn8XbK2hd331hvzKMtig5tXq1ju782oboq5J2qqkvYGAPx8b9KFjwsLxU",
  "key3": "4uRsExdTEC5xR4Q398MXB1BNKK9KpVToj7CQgKvwdfkxccBECGCxGMTodueb2XTUYMB61oG5TY9Gfcz4fY7B6n9z",
  "key4": "4npANmjxDiy7KxpjFDMDaUjNHrcaxJ2Mdss6DjzjDYHSt9hFS4u1csPWGfiovWKV8t2rZWapKqGXCwC74MCyoDm4",
  "key5": "2oGK6L3UAhhcD11eh36Shf31gcawFu4yvx2fvo7pyyP6QMtUYxD6yt9CYF9J7XvzNbtTd4N87Ws5PLYuym9ExHbX",
  "key6": "5z1CTTNRP8eCR5rUPvz1DtVDRN5gfarnGF1dtK76UgqyF8nurf5swTkJUYH2uHHzQda4J5fVshRCsMioe9qEay1z",
  "key7": "5K3zJbddJLnmW4bxtNonCtunYTvUvFfGTGE3ySHHC6vfauMnGjBY2aUHM7duNUNRzqNc7ZR6WrS1mAo9VHtn6Xcj",
  "key8": "65H1AGWptxReVnENG8LeDhBmavE9a8smTRBpnVjtJVyQLrpgHUEWCwM3ctFnMwY5BMswXN2xtNLJdxx1vo8vAYft",
  "key9": "mipcRdVJMWGvsq1UPQ344g1FmDV9JbXdsmCeGfRS9UEc6bJPQrnLi8tjxy8hgfWUYZuoi7teYJMkNFj2BtBqA7f",
  "key10": "2ieJzW6gdwGdmkNAshrkx7iQ3RXgu1qsU1MoX3BRbefojoD677Rb2dzWLvz9wFx7SwF8ke8QiGoEUX6HFJX1s6Xw",
  "key11": "htVKy5U8NFnf6HAVN1qePsL9fCzmKGgDzavNCEzZrJQyAbWzjrpcT9uMujwF7KmLX6Ykz1S4Pyiuw7B3XjmXVwx",
  "key12": "3AkHZJrLzQRS1N5YQ6p7YMF8FQ233GoQzmKWKzDG1rS2XsvCZcjH9GK7qz5riZFQksP8DQfx2KYmz371HZesVsvX",
  "key13": "67qZ96KdKzoS4oe5UadaRfvgsCeoQCvv3UkYZw4JueG9SZwa8s6PZwA1M2f6KxfLmY7h7GsdQD3LAsemdBr62VJk",
  "key14": "BuxEDjHGwUnD3heM5xog1NqjmFMUKksxonFQ3X5MyL8D4NJb8UMmjE7wAkNzsXfEFWf6Vom3G1Xdz1HLsLuUaBJ",
  "key15": "5wWbmnixyyEyxURtFGesRnvJXk3Rqj6DD5deo1ws26d8m611ox94ogpw9Zvyd6aXRRcs4r6xb5xG4CriD4RPGoB3",
  "key16": "62XRevuHzEJRPVJx6mG65U5RofEmuK1gRcyA88r1mHL621bar4pfcaDrh5edn9yaXvHTxLJ3RF5hnonbSjQtHRqk",
  "key17": "2f6iwM6T6Yhx7xkJjmVCGbDSoZGLsFzpcCbw1SqJFzJDvM7EKRoikWd5hYGTcHuTxNDKiJZfPmpwUBZVAUi21vFu",
  "key18": "3BZFrenKazw5dnkQ2imDKZrZEDQrVJrRhaQeAdk24id8qBeHVhwX9vCHtUjGbR3qgSuUqa7BMw9yk1mkqFsKTzCb",
  "key19": "5E42eYzkDzG4gVr8NrtWjdS9PXm95Bt1AoKfPXtUrTTb7cXFgDTTfSkvNk2LenA4vE8JJmFTutw6zmdaunEQFVSa",
  "key20": "4NC62uDnecqc9s93ad8zP3uSTGRisnVCcoJb8TBgnLcDMWt8xKgxCkvmMayGdUxe4SH1JnEkvsVXQhbr97QpieZg",
  "key21": "5D5ivkYKnqMNCMGKH3tLfrz5AfkfuXvqithRaP2nZAXS8UVebEmS51341YxoxkuCzhSdUEXtGXzrJYLBga2uiYiP",
  "key22": "3eWFnaHGD664VjtBJ8EJeDwmREHKgbCNkFG8DeTAv8H6WN37RVYcet8dKTb9yw5PpUt7oSS6bUGpXEPCu96jF4n2",
  "key23": "5DpwWvQLCW2AsLiakMHeCcghLYFvMLwQ9PnEape1ky72qNMUX1GBoF5ysk7kYseJFGRj163ATqConfYnuyaj9fi",
  "key24": "4zfWzgqU32H5rQ6ftY2LKvrqPWJgagJjWhr9PPwsAmgCsBFa9f7Uax2ZE1vgLpxJgUsh4ERs2ngTZaTabmc45xFS",
  "key25": "2qJrpkdPYgD8m7po6qZAVk79g9wkJRBf8bd4XwHsz23U4Yc2KP6waf2oB4deHZ2abogKfyufXwXMpdv8rcbfv8zJ",
  "key26": "yFMWhmsWaTkRsgFt2A5R1wvrvh7mMkgayNnVLHdGFo6X9Nhi17Se8ddbangXaTokgsvC3Aa3iUPPEwvmWZ8VXk4",
  "key27": "4NVYFeGMgxGX28hzWEUkAZo9pK9vrfDvJfkYqjLFHmwW5p9Rby3i4nQTcJw9fLadfeShAiUNyj9S9mKzYAjdoEMz",
  "key28": "63ebhu8Wcc3CcNSWL2PZTDQaFnnZud6JAyX4BFvtk5ZxjXUD3mKjJuLvfZcoDQY4SfXTagpDT9gVvYNuMCT8XnNw",
  "key29": "3P1vmHYhcRErpetj6TFch953Livd2RNFLEW6Jt5bn3aCjJHgVqWnEdaL6VcDT3ymxzwupSmyzz4afRqyhXGFxhpn",
  "key30": "3m6euFiKWEhATZAh34NASveuvgJZTcw6GeTmRHpfvT43rYopaYovd8Hs3mSV28jcrMnzvAgrezMECNSd5c66McKF",
  "key31": "4BArSd4nSY5xFSU78F5JRBafqdBMRhRJAnmaF7AE2iHAvrgMmjsPqepYdWhb4nsCbn4Z5rH4PoexDtuBTP72dDd5",
  "key32": "3vkWWuHATswpgEvJ6Tyjwkc7q1bfV1jwnm6YzsHCT2utXaRS4wEkAJU5ffmJ9zULx3fj8HzdpXphdoiKZ7tiunt",
  "key33": "12A2AeDicnAEKTeRF3MCPz4uev9V7Di5JezVGP23oky626ZyNLvjPy15ikN5CHZrZArCEJnXRAfBLQeVvXzhDHS4",
  "key34": "TWgbzHC1LcqtEa1YxR6vnh7PYiQvnqFvcqNqsMnAMNgfB6n3nXjoCi1MS5Srs3tPBGwMCUK4jj9PRZuMZu5XobC",
  "key35": "a5vKN1ZZajMWxzwHJEtU8L3zTyp5rtamisF7sugbHffm8TXAqJ2ShC4ggzsfy5A2N3egnArZvHLhFHV6CDwMKfX",
  "key36": "39FJA9rpvyJpfXWCx2kf4gwR9Pd44qLdLgWf3ZJj3h9PQo3RJ4JtFWu3zuLsqJBM4iSp2PcSFTTop2SEWpTbtbGg",
  "key37": "2Fjni5JXN3rqWCioL5NZhiTFg24eia2Hr3fYYZd3acLb1c7go5HNeYvKdGHAcFnudcTPramQNE5R5dE4sMnjNdom",
  "key38": "48HxSa13SyR5XUrbU4yASyTe4zj6ozSSph9pxepTdu2Usbs4P6gTrVwXgnuaZ9oi8mBvt3zj8vx1YdrQ3cT8976g",
  "key39": "5tvi6vR3qsrvqErroLRHJ8RiXrGsfPkwSLk3LVHmLvzsaxjM1F8obuc3rQfvFtpnpeH1sJzZ8RR5yQBNyitL98tr",
  "key40": "4ebWpNEhPk5D4spC1YuDCJ63DqJsXUeV5D5YbQZACXZ2XsH2so4UmtrRrk8Qbpb7BEPWvihp3pcTWZWJuWt2EJCN",
  "key41": "3FKqztD7zrfBiRvVhgLwhUgfqHVTsmnixRTtyb5P6Thi5GVq5kGdDubtoV2FzVZmBCiwnthpZB4BMn7hCFvBkAJA",
  "key42": "42zSiJfU74eyQVSY55XVQbWtGXo7tuDdo9MG6u68AcNsNnDWYq8D4HciNhUquLmjttQUAJMj5e2qJaku12ADQwV7",
  "key43": "3NhwKk33D9KLLKSHFz9xUftvx3sTsygNLsHUAbVDYZDhagJiRZW4D98W58oMCGXfex3Z8ZVFx4eT4RDFA77zMLs5"
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
