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
    "4VJ6S33Eb7ysTCTvkkTo9khfp3rTLEMsuU4SrcnpRstnusg3fe62nU4GVpHCAUwwMuW9FuSMuPhyBpfJi74cVoBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zotk8A1yi4apXF4wDmqtx1QbtuNZB8EA6BC92Do3pK2iKxFAW1o6ncUMbk2UZsnyCJRDMfQoG94tYphYTjFfmWq",
  "key1": "Fr2oE8z473Q7udcCAg7eJjAcnrT4YjCy5Br5JW5ByofaXzW2eFKCbNt6jYBrgrFKcUcBmZVuZT86b1gwGDx235N",
  "key2": "3uVnqNZWHammNX1JSn4NcYqXrFJGrdr5SLo3ok4ss5a33PX9wTN5Ns5ZuNKXggLfq4dkh6XUU9Zj7JKGqU2iGC3c",
  "key3": "6MsFyN1Fz2K7JAzJDYNSvMu11Rg8T8KTtrLFrssga71oW2eo2R5HptjTBYPTWsHuBqSaKTptfydEwacRR2Dd8Cj",
  "key4": "4h9QZxboN8ut6WxeEWZhyVRVoocv9a5MrAoq8re9W5meggpiX4cjcytxYhnruh1DQexn5zRL12YYtWvjtfZUY8jQ",
  "key5": "2pA5DCUbcPW3Meju2bxxmZRjtXj2sJPLnE5N1DbjDutfZfMBJPJ7d9uZD47AZLnm5acVkkjBmY7f8iDTgjCxpBwK",
  "key6": "5pbEHFi5B3eEF2CaTwd7pSprKetSTd5Ji3uZpKEsDcZjFmE8KJMfCVSKpgQRXWopBCsmLHLnQbpGSGXdydVzy1aE",
  "key7": "3aV4SzWqXmMLStKJjb3ZTa7cPqnjs7DT3UJneXWvzXtVVnaaY2GXtP4YxmYja7GovgJNqhjPNz7CzvCz3J6eAvGo",
  "key8": "5EWjyTxD74rejHkF3Feogs56d5vrG9zWNFUN2vJwcFxPLjGotvCriNZoj69TWpPK1UqdD7NMGXAhh9rY591euKvo",
  "key9": "5vFsYpGBBbo3wRVDYXkNWyknpvsdf1KrW7FQhqPH42rh1pUA5MPuPGWDtLnBX8y97R2HtPpM6wQK74pLEK37AGqu",
  "key10": "gLVpApxi5eBapiAVAArbZhtJPvis1cAqzndRygcLbWhmi4TyZWPGu7nQx5hNvcoy38henm5TCSjLZbbVQFMj1m3",
  "key11": "5d98pz3s4PS6roQEDh5m1K3uXhmcHEwuVUYEpoH6n9nhoEwBQSMfWifphmpPJy9z4XguVnpymBerN7wFGt9Sr7NE",
  "key12": "3M51Y6zsB4oaoyTYNWkrHbXV4t6pycRemLkzWyRor2dMzsPfgQcWUUfVYZnafQut189CWZoMB4AuiANFiz1J49NE",
  "key13": "5zkicKUzQVq9XbutgwZEKYSwxHZnzUnkgB8QXWfmsjWb8RdBwW7Dv57iVaAYGFtNmwAHcN3De8tUXSPHqqW7nxjc",
  "key14": "2h298Lmjf4i3WMqnJYnnTzCtjZcz9QYf7jWpubkJDUVou8Uf2STCXDjnQQNZnsR6u6vJ1h9q4c9AnmHSgfV1HJnZ",
  "key15": "4zqjL4cRyjtq3F2WyCYQaXrYDpwPpteoqbrY8MqyeRuhVF14y2FjYdRTzgs81Wnew6EwzXVTAeTSW1mg4PZPNAYF",
  "key16": "2eV4X8a53SJkaTHdWzueYczv4ReeDLeCZqkEkpnbk6GmTyPxETvKmjG2GjkGfLNz3yT6ExFKWUeYCdDWryKXXHJz",
  "key17": "59BhKEma3t3FaWivetAiQA8u3rdiE2Zp2rCqi7vwbWPjpFZGpNAcoC3n5Uscg9ZD1N1uxG14YeNKPcxZF7X3Xcuc",
  "key18": "KPDTDez9DqyPmyUi7LL8FpuvQm6WQY2c4XXi3XwHZGgGzVKaDmPq5RyjZ6iNq6CVzLgAL7PgaHKr3e7KZu6wy1H",
  "key19": "5HqYdPbSS57dyhqEZZFm2Ft4dBMc66v5WuLzprc7XTQ1JjBzgvsBXR6YK7JcNUN9WccQPCTtuYWWNYCN4oNRHd5W",
  "key20": "4ReWaN2EZtaL3ax1iFJJZeMxex2rSxSZxjPvjZjy3Wcss1HknPhHZ7NiDxagh556ca84GUjvKRu4EbVgmTt5EWfw",
  "key21": "2QEubnWY5jj6h5F7Xi5uz15Hz7KgT1scCQGZYT9yBs8hfKQ4T9hLE5fB49iy5qSHmvzJibMgJdhf8LD6ru7Y1Fbx",
  "key22": "4yHWpqifhSMpzK8sv2H1GcvXDBeQrCbsReMH4bMiMcfgisqBTWX2a1RKGon27AUS2f9C7AQMF7SSxgqtPbqhm9ka",
  "key23": "52vSnPCD5dR4gQmnr4Vbd6ko7bTvdPW4rdfnrQfB1qmcKhqMM3LPxSG2EoXDKVngWQu4HDhJN3e48KRo1b89L8KJ",
  "key24": "5WtGjqNWUqNawNEyNrW5U9Cn1vNLLXw7GSWcr2V5Jg8QaygYEYJ2FYmm3r3TN3amDTHRWHXHb78YP9Heeb3mMsPp",
  "key25": "3DXwmm5ucuHVD7MMzjVyzoJfjZ1ghWqMZ62F7AkrStZAqycN222VKi4nK3YbVswnNDqHyCtAdigomoKQBVjRzHrS",
  "key26": "2w5phfuGPZFQ91eZxoVUPLV9GuFExyQPNjhdDLGge7kkGADeNLSKfqwASYWR63opPJUA1wzjyXCu29XVz8HqJcb8",
  "key27": "kZdr6GkjZ5qZFXgVggBLr6CcbP5keknefrxRJmk6y7kBvNeNwQthYAZorsarcUTg6SCaMwjEFFXjoUXsyzVowjj",
  "key28": "AA5eVoiuhpYYXPNegn6SQEpLh2qdpDfi8zGoNYdsXjWQPorY8GGWiUusTbFfFaW2oQMEJraNek2NuzMH2sQ3pZ9",
  "key29": "4XkLK9FKf7etC5bGWYvgAWJtXrVFohULgJL349TK3raR4mRtb73rV9L1KgECYV3gMNvRCyDyuF5qNupRBubgBv6v",
  "key30": "667cZYCTASazekGrd4VRKbRnh1szuqXPjfpCCPmZG3ZqaGJmJdNvk8SkWFGf3GSBQHH8wBaEp8E9KoFd8j4sUafA",
  "key31": "2hvHY6T7SgwBcBxu1BzpbzN4Ub9e1T5ie3f7Duu4uscji1LhgKokTQSzoJASCfAR3cYykLJukNqMMdTf8BQFckC2"
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
