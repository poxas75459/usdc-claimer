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
    "2s5wR8dntrDPQFiaRfGdJeMSpJPqNxJPyePfWXHmzCL9eq2HF1atENJWQQm9NuzHcMzuj5Pfswi81E7p9h7Z9Yry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xiWqhnjBmom8pY9HhfdKCL2JDNiN3L6NVzqkWN6XzBSYDmrRDodKH366mJsUPARvekiyYNNaKvhZXZ3hza6cJQD",
  "key1": "3vxx3o2nh1WSDdRyWWQu3ojPWii5GvcixqHXdZBfxWDCYAchsLiEe9yjwL6QHST6Ls6y7aX8vQWSV1brTBQh6YXy",
  "key2": "5vXq52k55TCSjL3rzQ1ynvr7cQeecYdYqqg4tYtxQxX7ZHiqzTYpdqGjLcTepW5fczfsKJq5ikJfT7TECAwoatX7",
  "key3": "44jiUxH4u3FyAh6mSK2GYDf7KCVXUarvQNB7aYxHCKkLiPhSvvozawrLowFgg5hoFo71RESLfhZ1fwG4TeMUTD8X",
  "key4": "2BxApsv4f1ZMYNBW9KAxTuvFwX8iSjh2QtH7KZ52AEPjh2b8jScUrwy43zfHGd7b8sNDdX5MtE3AGtqqDtMp5Tip",
  "key5": "47SJfPn1ufkuib7La5hDcPC9SARqqKs6W8CSQmYschUq4V3kkbCH8UGzxVtbq1DEfq8VC7VyPTiiJido9n8vHwN8",
  "key6": "5uVc3CK5ErmPqJynfqANweg4HWSvtCHBgZoffNcyzj8sXDMiLaZ896c3eXKtbMVyPHKdG9GycHT397XBy8kYY5mj",
  "key7": "4BpPVakGdBn8YNMPfoBsBes5dcycN4b7wZoYCeFZgT91C2AVF6EwpEaQWDTuGbxzByHXAYGvhkJEbyLRt8fQZQBY",
  "key8": "YtZermpkLG6yPtPvrbyJqq82bcDQta7NvPtRDdff8xntEukBuPCSdaHL89oC8VFoPmLZQ8CaNdD9tDCgpaLmS1Y",
  "key9": "4pMECexffHkz4L8PohMqazk7CMJbnxsHQRLwDK7d6Vs7JYk8UvjGcNbSedmxoUXhN5AZ8w8HpF97Ui1u2rcudFrZ",
  "key10": "2VibApL8EvbNtLsdsPxJ7FZu1kUijvAgoK3h3B7udruxXiwNwmpZmcdU9B43yQxfCL5eFYDbKYwhByFg8vZXsLCQ",
  "key11": "2WP3xFFmoArQ4UUDtHdL7qkZVR518vMro2B5eJgRnDFLXnQmciqp2aVQyAeaeT7N4aA1w8u3svts7a9vEnauj5Rr",
  "key12": "5ot981LzpJwivcFAxk6Ho8PVhBAyuU8RKeFMeQMSSNH6kBkkgcZzGXZP8XUrZJeHZgrX54NVT4n17yDKpWUgPKBN",
  "key13": "VYniaUBiWjQJ5ddDQEinNNBheXrnL5MCoNuEwM38TKU3vMMU9HBTAGu2GB4c6ofPaYm47Dt3fAtyJejCwwnnywx",
  "key14": "3EVfoE3NNVpxXukvgggTHXpWU3MStq3Bjkby1K2F4wHzRkSSBup5eLNVzCH2cx1GtRFAsWCxovkhbkLfaPBt1mTX",
  "key15": "23hd48oWnXW2sKqHXo6kRM7sgvjfkWX6WvmUtjeWPZAPDpDtUN16DgYnXqH892MNcTjVH4N5RXNX9j9p8o25FqAz",
  "key16": "37Cwub9VyFkhuGvaBhzoVQU86WDscaHdW1QgSqPeL8gGwR1fMkvtXWCAdUtyaEAguf8we8DH11wNCz3o8CscaDXk",
  "key17": "YDq6xV4BrHkb1hvDhtxSDTGtrXivqfLCXcht91RaFNp5qJ2bgLrzH1rbRcw7ChdfJ8qzEfZR9au3nMx4rEJ8QD2",
  "key18": "5x6aqDmqEceydpCmp9xEa4U24W7yeRWSnS2SSguA5eC2GeXTHAQEBH8BSRp6Shk7BngMvVMX63mwt2Yq1n16ZHVB",
  "key19": "24bxkaRB9N4Yp4CyM7qWbUZVAczaoV9rUehGTJmH1Zv5HJHQp8VdXQSxnuUFAQBKVopanij7o8uVEuvqkpDuV6dC",
  "key20": "2hFcG4WFpJcNUC2dNj6t9tCSP6WSEfBGJMGLuF4yfYJpXFw9qyWGXRUgKqabQW8xLkjvy9AkkRTGzgvTSAyuEubk",
  "key21": "5GKEfDhkVtPNoTn2HyjsvrQbY9NX752fY5qrTTY4jgQeQtsJnHCG5dyWvgEpYUUz7GVXkgy1z8eKkbnuKhdEJahP",
  "key22": "42CDiG3rvhsDX7exBNaBnC7EQcYTPZJ3ZK7JdEjouaPqMTpuzQj3FswPew2LDAAc2pd5F7vPmHLSEbLGgy7H3X6Q",
  "key23": "5uwLdbq5D812VxNfMDabTgp1Vha966pAvgfQJKr1kBT9LRedDiB3uDr2G3Ch8tBU3Bcj1Bjs2bkgpVVCXMqQowpV",
  "key24": "Bs1Go4qzhiBvBizPxthYVKP7kbYtrdc5bdYwv23GEL9pnYQmmBWK7C6c2ozmFsGgsbzL6CrAd4kZFAJA53SW3vm",
  "key25": "4ENirxA4SnaswyFpTHXGUH8wv7Yi5pzuD9URZgkwsmy4eXY9CCqSUksrpFxoe2GhFKJfRokTPA1N5sjEzXuQ43B5",
  "key26": "4EhPgBKA8BxGJqT22z3svNN3SPnnWqKGmakdtMwEdC6VsauoASEtnZH1fXGGPSRWXWgbSdq9TEcY4Zt4cDavEgD4",
  "key27": "251WXdTSqp3QiZdvgGZ26ADr7aXVZr868f5nUk9dS7pGhSNp4fMrGyhw9JPS3PvzUnKA5SvgYQ7qnZ9pMiY5maq1",
  "key28": "qP8N1YvdVFvcT5T6xJHcY6pnt3kf6GWbxbmRh5KZzKidUuP2Km2ZwXwhsDWXmW1kU3ufo4iUdWxtjvj9t4Y6twm",
  "key29": "4H48DV1xoAi2jrKhnausSBrmhbuphtjFWfLHzFJqruMYgJYsspDVZYptCgUkFSf1KHutWznPJPVRyt8znaJ4ARBN",
  "key30": "25qzxjxrqrzuV75cL29ooTqWJTUchYKhBmjb7PcrAU1toPAX9CNofj2A7ZaYL3LGydJQKGRSo8qyzZ5HmXsXvCg4",
  "key31": "46cHVS7tFxErMZPniR1qNkRMMFVJsxQstGKLAipoNug2yU2Bm1dChaRSJ9Wi1VnWioirMawYLQDFRgB2ZYyR6uJo",
  "key32": "2ywwApLE2S8gUijnN2apGKWmPyWd79VE1r99M8fhwkkjxKTFmrfnmQoGvXfBiUAwCZ1wLr7kawzksMT91tuhFGqU",
  "key33": "zgk4QCq8xFXxPiJb733vHWXcvgRfZBz4a4JgEHt7ykA7fvVMadnazksq6YTjsWdCyrFVNrFFMEhSxVYkbGCaj1A",
  "key34": "2tGMSwtryyWvwf4JDQr9p1Pg7LKEApXVXMikmc9s6znPRgcw97NMyhgqzxpCLDTQPyXwdAx7nm1Z8SeS3v4UGcoD",
  "key35": "XJyEVpfD3an7cBFRzxKHziTrDZYkc9JnJJjwXJPx4TtjBCvzYwEJyozbnRBYt2KZZpVA6zcWJo3TExn8p6KCj7Z",
  "key36": "YVsXVoYTBJh1fhrVUKBvhTictSsF3ycFBfRDaBv11wrfNA2ZxZDASvQNDxNWLYu8414XbDGCbi2EwbWWQURmPoU",
  "key37": "9aUVZi1GdGCpSmbDZBxpAB7jJx4bkqAfjYimpJYqmds9egeMsxHxTnuuLbKNTaQQ4UZLViFLsoRznQEkyUhVoe6",
  "key38": "3gCfxJ2nz5DVFWwGXHFoxE67Yy21nDSbazZaEgCjWF2sMvPC9YvTzUjsjnnbfCECDMxKZ2p9cCNmSkSeH1HgbApq",
  "key39": "47dZAamXTZsuhj8rikdf8KMcEUyZ1Jg1bDs57z4dpuCyMtHSjuN2Nf1CYeNQieDxTyXkAmUL8FUtxJ4udYeWcSQZ",
  "key40": "2EoPFwZByHnfLUQktYHDwLgg3vT9pDQBN9ieVMx1KMvSa77cUSc4qqcByjLSdfeJgWjgVSMm6oegK8D55437G95w",
  "key41": "3YcowN8KpdJXzTjxGHv9e3Bu6qm8NxWQ18VgQQztB2YEoHgacQWCGFQfCXqjaxyYFfsUhd65wKcPGz9M1AeTCpkK",
  "key42": "3os33jtmHeK1qhy7t2SrYPFpLmtoncaj34Na9FNw6mCSxk9RALGvkYgPFtT7Kh95P8YdZsth2AL6qBWeuvwuMpG4",
  "key43": "43qeDn3Jxg4wtpYDrJWUDuJAtPYtcnfNrtnBXZxM1Fmae9f1J9aNvnvT3Exmr83SnpTXAwzdaqB6s7mwdn78EumV",
  "key44": "wLY6iqoX2oDPz6mVpYbWwY5g4irAMhVUxnvWACWnQXhikyaCCWgcnt8FbgaKAsNzaxhscnPruLGQGNv6Zz7uFXb",
  "key45": "5mcupUyiLut5j7tvacyF8MmX8BY6ENARrfnxWqXFwUm55s2kzp6nVPcLvHn2ZoVZbYs1XArd7A99ffecUEQHLND1",
  "key46": "2i1Huya9gsnSRQiCcuR8NTSS6B7AsdRkLYDDsEYb5UK1J6wZNXFJS6gDRSZWoAWsrK4GKxAhQXwxVn7DUNYmJSp5",
  "key47": "HKvPXw6dd1aQwy46dgYH1n5BdkXxFRiJFtkWnM7ZMsDqW1qijq3cTVn2rfoet1J3bBTjsb7JEpmhwbQj6Y7AiK8"
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
