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
    "xLsVJsRi6thCdshJN71xjVLhR6Y6UwP7xSRKAo5DU4tWZxJvrtjVfzJqNf9KvJQuWbyZ1o6Dj6NXMqZhs7CPt4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yHiFWk9REuZPg2fvkq91SHYicyPzYogUJnKonqiFYR7ZUmAptSwahBW5Hr9LbVDz3fmwvumGy7YwKRJSixKmGDA",
  "key1": "2LDupDRmdDWyirMGgBVvBsEHW4BwuRiaFPEA93qiyyVz75wTqiCTftn3zT3HmuuSqKte1vZQxiWr8QgWnfG3nYe8",
  "key2": "3FnRWvDvpmpZJZbJH1fnZ8wk1GovWPJkxW1xvkySJrD1bbputjdqP4iq7AjeE8KQ1MQEproucahaG1jbYz39H9L7",
  "key3": "22LoBSMCmCvGN8F1RNdy4GeHUDRZX7sYkLbbWCab7SXxSpip2C2hKvyS8ZF4fyciw3JJn8pwXbUsF3fTEVeu63t6",
  "key4": "CQgeDEYmox35cE5iVAfNVpNQzeFoLgDfWaDViLHKGeimDb5jGqhW39z8KhWMXJrr3mY88Pq6eVPvA5aKx932dES",
  "key5": "3rsrB4shZt9XrJxnDVfNiAep8qpmGGraWWnmWDXSadkK2SUa5gzX1sVJXqSRJXr3gWMQvbcrScjyNy77rbP5DhCs",
  "key6": "6jkiwNsLwMMyqkZNhKswYGVeg6XfHZucnV5tgUF8YMLY6sJ1EAPk6V7uGRzkpffFWiLMqEyoy2p5Y9U1kPDDQ6B",
  "key7": "2SK51Xz9EcXLsBfB1R1zVENALoDRRUKLLy1oWmhZbhrfaEjKmmwWE2QdGk6eL5PxgcQkh64x2uiAeMMxBPdU5zCz",
  "key8": "3ziMre7fWbTGJqXA9rgA5sZK2FLD7RySyfNy9K8JSFYNoG5FNwfk1sqfP7oFhQgPF7nZidAm1rRAB7K8UAa1ixpA",
  "key9": "BovcrjrBQQ9uwdUe25Auqu8FNoKGgCEv15LaUhaF6Eykmy7g3Enb1o1TmJBfdDuPdDRob4rM1XoiExAxHLFD6n2",
  "key10": "tBiDGNv8jYN9KXii9GX5D4E5uTkavGMA4CDQwfPv7hSi7CU92xsEyjJJqLfazxw5EUtMq21kHrj7viUue5RpLzh",
  "key11": "3zH1k1hN6uJ68WcX5ATXmm9YaQU7U5qtMy29MeVgsSkoEPFz9uNuiWSuAArxrGCLB6xcaPq4cczmCRrHsY6Wag7m",
  "key12": "5FS4ALoLGnx6zXZ6FyseUTszcFnoCFpz2kzii3BhWmAkjtWVwDH2cs7syR8tNNnUK6mUJ4wMxigHrYvJLbJKY2Mu",
  "key13": "63NTfnV2W2o4pxzXpHPMLA6tpV9AkdbZSsyhN5zQ98558etCHzG2qd9S9HTFEFCHREq1dBKTXCNqn3rcAPkW1MZP",
  "key14": "5i62CMvYvkbouhCUZC3WHkQyxvsdvVJzr5MgSsBnoioFtRpfJL4RNSZCqpTxt5gdSDNF3TzkN1shGfskXBQtd43D",
  "key15": "oNycPQQdMnT3sBbds5vHBE4tizsRpfxfb5NnepYsQdjhMqMjYwLMyghmUFJsPYLCndLwZ7FFtMZXRdpzgWhGjtW",
  "key16": "2UGb4ZH7G3vrQFcRY2sgDa7FLZ2vFmuMX8Zp5sr6H1fwBde1C7A5UAjoZQuFftbUyGYea4SzGEZmQumaTdXFDJtf",
  "key17": "4UJeJPBCYRLQoxvYfCmCLzuEWPpwrXZvQkG9G3sE3FXxTb9L65yZrPvwhsAR2ZDDKrZZ3eTgzScypE6n64B8SXou",
  "key18": "2nJz32QztGnBYFD5aBL5zadW6wP4gBw3WP36pfE7dzog5WZC8C9h15P4K4GPpZz45tHT5FvdGLCvvUDMQMVcdvWk",
  "key19": "58E6BkR8uGfb5SmuktqmswJQqJpxpXMeRL55rReVUz3HN1jGiARNAP1bKnzgbTSx4imn6Eneg88CTvZiyiTvQ3c8",
  "key20": "48UxxGt2kYanmAMvhFyKAue1JbyhGUPAzvf1LVFfhShMWDqhnweLjyyV8ZeTESnook3GmxPumHLAn9YxcJpvHe8A",
  "key21": "ZB88oVJoU7gYz6hvRxqyAowWXss5xGkJLKW69x8rRSbS9upVQeJDbTNxi45QUMrPx1ZWuk43q9HdNFsDNHVDrvH",
  "key22": "4aCsDg3wY3mdJ5cMKzk7qetGWymLn642KfwPmQurGcM5PsnsTsjkUogBDkYp2UUgqFQTeQUh99QnnfSAc6GmkNgQ",
  "key23": "51V5vRGhZDhxZNut9apZ8Wa1d4YEbp5vbZtoWQE8DaGn7cEGPdhGbxYhyaM2nv2huyd7r9Ky6neHbVLWnxR5LyFX",
  "key24": "GhLfzMRLhGZ2WF755MxRZDiqT8wPBv9WGnSDVzagqhNpYSDH9Mm4dwijFTtpjHg2dBkEu5NwZWb7gxXgc3HBb6N",
  "key25": "g2McFA7QgV7cJs31TeYtq8bhemB7mtYihHxnUNhxjnSSYQMCQZrBvBp7LiEG781aYLimoxSMNqiJo3r6vCGbUYd",
  "key26": "2iV6BANEmJ3N4eRgr53vLzQmAqXbHTrRouwAmBtTUF1jjsDwWoSksqL4nzME5G6ykmQ46Gtpz52CTrFzErfdtmNb",
  "key27": "65YrMBzEDTsycA7YdrsBaru8eNVSssZoVJAbhu9ubGytncnkG6vmFiT7GdkcHnRh3R19fLFxH3MDLhEqdhiFQAHB",
  "key28": "35gXLpr67b34z1nSY3MFcBfs7rcAQnaxdMiikPgM5E6B3be4P7eRVhSN5NQzQosQ1ktD8G8E8wKojaCDvRPuWg6n",
  "key29": "5pgU86qFpbzMHmNi1jmkevWnyCwgM9B9Ns5pUGcnwPaHWQKgSurqzmaN4AdEm23eJADjZSgH6LXt4JhhxpTzcvH5",
  "key30": "4ytVfcoZ5PBVxZkg8JiN2xcz9utohfzVRj95eXMfcETHaxcvqUzbQS8QXYxfoSzJjsohUVhCXDCbkvJDuPfwFfsm"
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
