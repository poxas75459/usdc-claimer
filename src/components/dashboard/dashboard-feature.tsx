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
    "37gYRu1JXZkh8QmBUCUXaR3DWLxAT8R3wMukRgpLoPD8Nvi8r4HVLGxG2Qa8mDGwxwh4Rt3CjHP36BfLcHuvQ5ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YtgJXx5jRX2HzUfggwXiYL4uNyvYHxiWBKTEbfvY5NSFQ1mZGCZYc7ubbkXRLL5TXrCYyURGapn7ARaumS9LyWm",
  "key1": "5EeZhRurkFKd9AJ2aC84Nmi9AwtG7Zer96NNA2sY8zq8qB6XAXiURJreLZU8yq5x52pWBKucSqwA5nFNusVkw9fR",
  "key2": "nfSYFkmhbumCyUs7YzWCFdUmtVuYg2cfGxfKM2CsHNeGGUBtQ776UP3JxpH2gjuStnr9gFBvT7kuw5jMDDDnPfn",
  "key3": "41dgz9WrdDESX9GAgJ41JouuPCvpYgLFJch2GjGdwqT3exmpPAkjX6nmdMhdoYdo5w9GTUMrNrJLeqKauZngRSuK",
  "key4": "4FTJDFCXGM3L1dSYyaZnJcXTvtKh7HSm9vWHXFbkHGHPmG8MubmkQSC4zzwSQeqbD9FSDodx2YdUniPWHfWKgir4",
  "key5": "51UQkm5TMNhWeaEc2aLjqoP2za6c7MJnVRBnTiCXkJsdyTk9WAQvxAjTfNJyntZsefcbNruDMQoLTxkZasc1u7GF",
  "key6": "5QdWxmuYdjBoGaLfWCXR8qxWPdUuQY8p8jmDYwoCzHg6mk6KqjpXpur6a9hsU6RVVV8RswHXQmaPEmpcvcZP23EH",
  "key7": "4kzeTVpPutmGFqYzrMw2rzBBWmfKV49jbGWiaGU8WzdwygJv3Ntb5Hx9gMLGZR4vXFGkzqNn1XSw7BzF87G3utjs",
  "key8": "5ouyQ5qmUvqYkPGc4td7mcLSieRexAHyxxEcxxgUp93qgDMqm3wkdD8RJuqry1Y9oh7DaAC9bkgerM5eSKGbbLUM",
  "key9": "Cm5VhjyiCq1Ek9snnWMjmirWJ1nhA2zo4kv71oTBiEbfCEByJax1m3dYCegjK9UTfTE6R9aqJxvUjeErdg7KnfC",
  "key10": "55CxUHuA7MaZgWQoJ6fmCkpJUnZnog5hzMFwzTzztvUvtRvwZtgQ37YD5MrwKvwcowZ7hbu36SktnNxfj2Ybjfhf",
  "key11": "3TdbjkFkbTVGcgtxSncxoMNmeiYkLWZ4LDfopFvGvm5vm7whiBPm1oiaCr4zMaqEjtUXxVKf2ZRjVj8ZW8hKzbzy",
  "key12": "5ZLccs18QzCmqaixDxUTFcs6BQTfghT1GdG5aFgiG34zckVRuHodcMWpcpnGuEwXJ3zk8zKU3Lsw2hhtmXZ4hwN",
  "key13": "5ZY5kSY4aD8HE4RMQhft4DcisNvhEG8WgZK99rJeXVkZTyzyEGpZeNQ1BRcyxiJvm6bUVRb37XnvFaVrorTtLov5",
  "key14": "5bWnCz7gpS6yrrrJn18GeGJuCyw7oQvXwTUciELqqNcCoemjuv5iL8FsR1J4UWybjx9kaLVRzBeR5ZZLbb4eWVa1",
  "key15": "5EXSyJyDHW7MG6bmxgJ8PTfoJ8dXxxQnW2BpRP1ECFa4FToGvcASiaA4HH4qr91yhDTSetKHCkCXjyA9UR97bb2f",
  "key16": "XEqPNroPgGTicBAXyQL1PBawd1JBQz3uHmtnBkydmvwUu9Fum6MMcoYV1jQV2j5M8v66WmPDjjLu6nAd6Un3BGK",
  "key17": "4mCN7ZpB3mF8bJsizaNDua1bQviLERUva8hpc6XFo7vvvYasf1aAaJQCvk4UMrKcjpuJrFircaGSFi3AexgysA7m",
  "key18": "3y2XfvA5FxfW8LavYgSiFx4UQqhfnw9t4aa22D8RUmwP6XvsqsS9ivd4kxFeEZFSzmeoQRLogAceTu2Z5CEdpcoh",
  "key19": "TxYqy19UtDFxuJj3jNw9gGFi6nmpdHDyd5LxaDKMpCwet8qJsPQn5bUXgwRBE41Z2tfg2Y5NuoDxL3nG1sxrwJF",
  "key20": "fhtFnEgUqpT9mFidy16JPXUDggGZQKB322Aigf4QydpYw2eeNBGnp1hj3ADUtqnzYNjGzZk6v4sjPE6WhhftXG3",
  "key21": "4GAXEcSWYhHdtDevbqNFAtME3c2jAyY7mdK71nT1PYPsrxQZrvUMbPVNEkUc6AZhc4tHwNfWHdoPu4tdZoWLKKfp",
  "key22": "2he5iY2De9H7NE1Sn4JjumBnY7xmEM7BbrqcPsH3CUruy7rMpmYgKzygrX7u9Gxp7RkkvakjAaMB5KNkRLwuB15T",
  "key23": "28bN732UbN8vzsnDYiv1okADCeLRTKLzYX1wF5foBEFBCHZZw2a1mGzbZZBUAzE3hZDpK44eTnE8dYnceFHTgqpg",
  "key24": "2U3TjS5RkbhzoAePYu9pYBYVPYkpHzeTzqyMigTv8WTwjLiq2tdDTcEzoiKfJzpWFSDQBVjXzmu6QKVM4ZokxhaW",
  "key25": "DhgKQTq1E6GnjtEYpgh3H3TmsEfiuezAxaB2kXuXjAGaofPFBhfd2dVsHjTMvrrws7GfwhF6rmL9fiW4kYbgnZp",
  "key26": "26psXErTspcA2gj3YBnvs9rRiitDwiuVGz5dN2XX4QeirtUB63te3iskDcEUQAyrYW2QZAo5Rr2GTQkEPFitoSRX",
  "key27": "5M2aWWsTcah2jyqhtxJ5d1k8e2kXTKQEoLXDnoegZ9RdyDHzbxH8mYc1m5DAvPth5nNJFpV7fs3PttbwyX1oDqV4",
  "key28": "aDMMJZixdipLZ7xR7cunyRbNMw7FjCSCjxGMaQ2L6Wh3UGTpnpM1cJbCa16SP7mGDqiEx7Mn5Y9XFwyiCiiW46j",
  "key29": "4NGyVvtEAzFbonfbBu49AM21Q8QrnxMpi4wZoHeweQCrSm8nUiwzgGteqjSQCguVvptYj6NNizRhrFmBszhJxCqZ",
  "key30": "2Quek9uAD5FpWcArjmUfurbtWtcTXnvwcVacbahtVtUqEdMpbsCd54frKBxxWdjyGj8mTsbpPKwtqfdHEpT4UkaH",
  "key31": "2dV7VpFJRiMcS4PhBFEeCvJXtL4CjGr4qdcAMxuNsTjQ8xrokqLhYAuwKLsZs5sAbhpzD3bfQMbFvKA4qyzyVMCd",
  "key32": "3jiNwLNUn5aT58RuRRVywN1EtGgkTpQCFRwXF92a26rUngWNF2tcK3DKDXfJpfPXuLpjQYndfR8Wd3MHBdSpCMH9",
  "key33": "2qU798GmsB2s3cP1oJNkg2iMk7HBoD5sYrTmaoHKjDfKqLtHrxAdz9b6edNLi6QG4zjNpvgFapUob1hgoDxQob1B",
  "key34": "3baref1zp8jusaVDptjAwPbWSuSDyVC4X4CKqzepN7mcJ4QngbQNtSoT9YXH1EXfDv4JkVAPm7PFQ1dZTMXEcBqb"
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
