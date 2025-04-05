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
    "5kgKMYzXNWbKfNF3M6j6xfcMpLDjCvNNFLCsvfFd59nnR9WAFoQ3DgH9mhQHys5B6WYr1ZZtvpHRGaQ4FgRNjo8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vh4XbD9Pm6L5bsPRMx1REswTh5C62uh1yddUEE6gbimKxA2C59Y7ZbWPzEZUS57kBhMHkhaWM9UJvQ8JqM6mvRv",
  "key1": "4ZKkW4w7EkeicRC66ByBemAt7ZBm17Xu2zngjsJVGcwPDDumVHyPRLGh2zJX6LH8W72fK96nrt8GrVW68Uc8BogV",
  "key2": "7j4uB5f2ekqrVPyfb95NW1GK6mtemntR5Pb5cs7FZjZk8TpKnJyDEJH33vRBnUgk2p1fBhXenenDVuSMB4KzUA6",
  "key3": "47MwRq24mMRKQHT9toVGcA1YToStrCTx6BgZF2cMKmevDyHsJb97efGKPuw6bLijQtFsPYcqAU9WX8QQLAQ5JKvc",
  "key4": "58BSj6MZbXTwfuu9jG6QoH9yY1417V8ZYhvQh3kn9yJSBmsRa1RJn6mD2iFC5H468JPZgjRdZLDSwZSeiSsTSSru",
  "key5": "3grYdEWtwHted6G3TheUt85yeM88P3g8nDcvTbWRp4YTiJqkV5HZb9fXadDjRZ4nzLWG4NR8sJ8nPP9xFTorEzDc",
  "key6": "43dpUFNH5cCfK2mhy79vANeUeFoKXg82VvMauuLgMuiZxdXK8WEyYqCEnM1ajTpaEthC1nyRsyQqaNGFTNjYAvdb",
  "key7": "2RUcfijMaz4Bc8ikiCUhxHxRSARJ65eUW7B7VRRT9FeXc4gHmCsBK7poMJ7swGq6UPiCm4hwgKQMBtgrcEGgXGBj",
  "key8": "2qjA3PJ79BxxtSJuGUesCEC83wbeWHiRQUTSyp2h9cXh1yQnfsbrziDydVsknz4q77dj4eoLtVYEpVt9TvdkDZJy",
  "key9": "3skCFotqe86do224EaDhDW4ZQUvJhPpNCV7JnAZFAowox6v7c5sHcn9csEehruDjvSxFnhcEP4TBXLDTNiz9GJYs",
  "key10": "xX2rFERkD5kD28Z2krGdRhmKqwYGYUeZL7KqrR31AorL7JLCU2qTVUNrUNuzbPqQbetrCF5BuPyJEvWAFhqSxLj",
  "key11": "HazFoAe5aJvwt82vDQfGpGnTVUXszXVqgrCgkRhPkM4yohyPFVZQUMUdvSn2JmESHcjR3cmjD3M91b2W9kiE72C",
  "key12": "4pDBsPYmrMQS5D295urchVviGmbKXm7aLDfbFnYNwNcmHUA1HTBAqP9HVg9eftrB5Btw1jQA4d4Qy1z2F1JHArLW",
  "key13": "2jnb7hziypbVKofUcmRTKDKvhqkRPbGeSqXJRfLY2wBzKend1LWftZ1dZuckNLux2N63t6o2zFRNXpXDjRqvjYmm",
  "key14": "4eHebCv5yJwgxUvUCprShTzYGGT474qbjYkuwz2ufVg9Nn3fwSNZJhtqPBtpcHn8iyLhKN1pj6SosTCymK5RW2vR",
  "key15": "5EVtE1WEtBekKWUDBWAtW6cZzeGi2kRdkegM8c8uFiCqLDkKkzoTRfzKhYxTpZNbxRkkXY999i5bwMQjCquUmZBq",
  "key16": "kxCUh1e7nns8QF8hT1fUGsG94quauo8gDAteM6p4NqjBm18G5hbnvYhYBQBytVcodtDuiEBnGnaF98CpSkEzb85",
  "key17": "35PiBxdGpLeYsZ5gPqQKSkTeP6WmNrHZm7z8rLfHaTQjde3cEutc8Ua73wQtGy1inXUmtdBZxY23oCXCyKzY15AU",
  "key18": "2aRDetmwRzdEyR95r2uokvEHgpQ9wqcGw3ew6NHTaUfcV2AAAaVsdESVCdS7NHwvBMDrMCBRJbTJ7uZSsR8FQn9Z",
  "key19": "5EmQ9we7RzRraqZrqpAtL9Pedfkuf8wR5nsQmhFf5ERpydNY4kFVvBHAi2khuzoWLrDmeueYJSvEbnGFUGUjsfFt",
  "key20": "4mEwcP2iMF4u3FxrB3TF7NARN9KzMAuDUpQeVSSkKyxLc6CBmuiyXY6jBXsQACYfk1YEUx9WgSLz95aM3SzAJtyN",
  "key21": "3RhkKEiMqsQaNhGB9nSvVT8ctCRQ4xJ1poywa7exX8qgwx1pqmHrrkwLwjQyr43jNacZkgNAwUZr2dS4LSCvmLNu",
  "key22": "5FKPEYtNYqfmn1wVb729bXmuN281xbXnQ71t9WJjk7xeMbF7qVhPphjnV8xktC4xxQXxm7d6F4pHXMoyJ7CZXQRb",
  "key23": "2fcmF4UvGvTF7i6epPS4HpiXjTUkVuV21RraSMwGJmcQEycrBt8eH7RWnq1h8DPJrrgP9Ga5XNb9adks49uFz53F",
  "key24": "62Vt7HtKjCAm1DVXinsEH2k2YJ7YzuxZBRaV9B31pdt3VxvnHgH63p9HWpDqNdAUDqKuaJ2PAZmTfMdoXYHEs4tQ",
  "key25": "3F5LyGAXK3cGtbZCZnhR8BH4xhNzcEEKLEHRsmh5cKiMgCkka5icQwv2mMgsjWZUUHDXdYV8wB9yQgctcrQeRPBs",
  "key26": "3DoDYvwgmSnJsTzr7t9gxFmkkRfV6i1hVmLqeZVPiLzSt3iLzm1xjMHGvErYEHYUDWGwpLWc6F4MkXiTFqTep1Em",
  "key27": "2iVgKP4kJYBjQYn5NYKR1qQDmYPU5s8z7yANVsmfcw8asu2uLYZZiCCTL1n5LYipVzERRufrtGdBWLKXGwa8S78K",
  "key28": "3ZAk8Se4spieRn3qqM3X3awqaBMrMeoWr9NpYQfTJZY4xFv6WxzGLEQMBvfoaoTistqKWgd7eBqW7gjWFAVGG1qk",
  "key29": "3yJ762rjBF4cgcnXijRD15A5FuTBniMmm2avtz8JegKFJA9o5ATMEgFcgjwvkDUeo19NQZYfd6PZ5MDrb8mEJKEL",
  "key30": "5X8rg25UN2Kbrst6hbDERg8UpMjxuK8F6ZGgTDt9XEgamAL9na41U4CnH5hXpKjmxauHeYFCzAADARff6GLkskdS",
  "key31": "3GDhEoyjMnE2wYPzC7qWXosggvXhnEgksX2mes4wGuG4MNNMhisYTpGz6H7c734ryxAu8wkpNSBnpqsDdivWKhQX"
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
