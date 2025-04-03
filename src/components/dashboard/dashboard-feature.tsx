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
    "jG5uCVQSeNrTruFfnS4vg671bL2o5mC8NJVhfuK5oWitZAJTyPdZCHuXAjp49CUMbwpZZ21PCcdpsFMqEb6n5iC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TrUc6t7cN9j9qxnvBsSn4BKUG6wSZ63j5k15F9WHkL8MkV13W9aUxMKxEkF37rgPdVL8sqeiTUYNFG7mC78mYXz",
  "key1": "5tHq7dYBJkZSZFkj3P3GiKQS6pgSVpqTPaoBTA6YNeu4qWBq2FVr4AKBTvZELxEhRbPCCmmQ13GQ1iZWYkA2z5d",
  "key2": "Cu57DhyMQ7LMh2rPJwXeDUTmXt3SZDcDHSz8RDgAsix6rMCVyCq1egEP7Tja9xC9JCTi1huC7PhDLkWfiQVbwht",
  "key3": "5zzpwFvsgCDsWmNdd6eTvLUD78MXqqJu4L9uoEifxch3SbcuURP5ANRXRXKv94qxnfyBkcTXJvTeJiE92QG8SMQR",
  "key4": "prHT4vHT2gnJnNs4x6ta18jMtdvY36JCwCxm1R6d56VP9dyyVeRvvEigdibndMaMTnHgemTXu8FTg8Ah4secG4o",
  "key5": "4jhhG2J9gawRchX2NFgewqQrxB4m3iTw2TPWgzQ3xhHd6VTivEPYeSehYjWbJXD1ECn2MYmEyAWJg2RLBdBPo6cx",
  "key6": "5k1wRcRu31mANUo884FCkZ7nL9uMizpsXuP41egTKCNFYSxRZxTd9NhbBuYZACAJ1xvF8d6tfxNCTUYmCYrohxAt",
  "key7": "3vrKBnsFZ9h7YowNCgFT1FNcYBgJSQ2DZJrQ1q9K3CvMmHQXE2DkBZ8Gu3HBcjtgtn1skq3F4RMB4Z31SyMxukrV",
  "key8": "2ZNHi7y4wUKTz7kyp7MVXNJLHrrTkaktb72t6N2kQHEqWL9XXrY1zacDKRU6DZ6EAkY6ZJouE3ZvQxfboRxFEyGs",
  "key9": "3bbPZPpRANDrfyZv9C3JL7KDafEFsLjzkC2Esggdb4SD36533NS1snjSs2yotYGtdXRCHa7WDVQ4UpjcCysLCMxk",
  "key10": "MfyfDysDfD5kv9RmHjkuCX4RmDETgvFqWpmW3wneNdiJQtaQMMEGErPH44ByekroiutF5ebMWU6tiXyQF79jiot",
  "key11": "2tNUxCJAXnG971KJSg4C4vdSdNwzucCEcj3e54AzDLJY5vsUsZoUe6bCrBKSCgzoLdbpdYqPpGqyhBuGXD3DcKu1",
  "key12": "24jipnREs9mrbfN3vg9uAwvNRZhQ3owrkrEBBHjqvvT3WK5TrPXygLAHr32hHrpjrKkcMK8HUtQGJqrMvvrWJewa",
  "key13": "52nBuAj2Xu7sVGeHbf5UcwSW6fiWZSuZFG6s6BbMYn7K5Jx7vtwwRh9EF3L8bKHH3c6UU1oLZocBiWRgqz8M9AaA",
  "key14": "4bf3oPM7rZ2sSnjF9yu116JheqMCYKuGzXKTiP5yG3zoLhdZSKwpXtQh5XB827GEDGZNQvJLqCcTADBC19Ce8PXz",
  "key15": "5KASRf6SNWkbkYLre3twm2whPpn3B4YYrDkyoTCAtzKPkRVYpSrQNTWu8Lu7baJuKNyG6ma8AMa8cTeo253Aaw41",
  "key16": "3P74a6JutRiBzsF7AoKg1A7qmYvtJnYUPT152rGWNV43XgJhbLY932ThJ7wLhmvXvpvvQ9xTXSBR2nQ9HnwDaQMZ",
  "key17": "4JZG9vTkXMNFG4bLTYrtawqGETm22NdnwpAXa3WJboUAJBBSip4VFiu8kg5VG6imjpJcPNMVm66CPUoMEsWafv3H",
  "key18": "4fPDYWjLoEsLvK39pRM8v2w7oSJj3US6g57UWbajR5VQc6dFszdJW7opRK8sChWZj88CCceSuzouQ1L9Wf7N4YLf",
  "key19": "22XDfSQaQBJ2d4YTdvgMcghoNHDnsLFFFXGDVRNdA9pq47HqeFe28HZi6JpW83zQScoBjiweQRh3n6WCgzTmwMRD",
  "key20": "5FTKfwASoqhRTY3kVRroiHkdvaTeMer8UMSYDZyaRWcAAkt1EJtGx11aQa2BkEHFhUFuKJsKgf26rqyPoCZyDfTa",
  "key21": "5JvsgexemfPtAJeR2pFHxvm34eLkbUJVA7pLYRKRBri7pzXbFjPAm1BmxFmce8BE4azyRZR52RBzmveum2YBiaM9",
  "key22": "2hLd2WRcrHetdASAXmdTJeTPh3qbnckTeazwpZnuDzLUEqCnu6JXis2maKqFhkFaNYCK63VYLVmPVWZpH4FSzryR",
  "key23": "brfTiJXRePdCsTQbaVj46jhnVZDuqZjz9jnxKZoK3qhRiaDuujSykACaiew93amQpZQkk7tNgTaHcftF7PuhMmS",
  "key24": "d1iPAqPJCaJS5DWTyPvAudCSguXwwumMY3pvD933z8HBETicUpDyyVCjQFFCf4v7gHipYyJJbcMEX8WYLTWHYib",
  "key25": "2LXNhwQ1jekkZvW5vVxMwXz391oWFxjpC1SkRNXsVTYjpoRUx37hdqWUJxXp8C1LCoscgFtzHpRCAooG2jLGDMCt"
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
