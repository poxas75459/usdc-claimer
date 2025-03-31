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
    "4c4WdNjK2Z4m4yZbWsXusRjb5bPutRCuzGKGhbGEGoTFFaGFcoM73jTisLCGBkBmRdvUJjuwgkKixdrQZu2B44RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rsYUiGqQULNwDGzFhoxugfZx1JkGsD8jrwWmYecR5STeSkpxcLZ1cTKMfnWzRbT5dLFwuskq4gNrR2L2UQqyZy3",
  "key1": "4e5S3MpFA2w1DgG5VGgSBqT859RcdcQK7tAgJqyTTudN2Jjd3kbrHChvJvBF1gPYdScBr7BzoroKXfD2wmBABmTg",
  "key2": "2YrArScWwNYXa6rRnMLZrB6ZS8eXVtARCM86hk1UNsezTtTKHQ4dhUrxFHKec8AwMeTys5ZTBWs8oU4cCQgmozos",
  "key3": "4pRqr6CFHKseo3pAHZzDN5H8UkMfKYQu8E4R9tr5MmSULE5EJvMgeQQdjbE7g5SMTGUxbUcLThxKjkbKjxCrheNW",
  "key4": "55qcbAvwKgimRZGdmLKG9MkyQndeBk34c9S1rYe8H132VK5XDc138KXeN5Qs9cZeybHA6utx4hhLrEwtYrdZMRq3",
  "key5": "4jfG6AzsCjLewBBdZnmR2EnkjjS7ouc1nvnBQdquAVQS1wgbFKbQAo6CZd6sGM1puQCxgoq8TDhE5KUDf9duBrqX",
  "key6": "5cKsrDuVSHSScChP6tuefB68zTjk9hiA1vtnGrcvw6PJAUyxidzrMZRFWNDksXBVLwXnB7iYg3SmssP9mK2aNN8C",
  "key7": "xhUZ9koyoPPczKojy61xWzBVH3frvqvFBtHn5HGk5y5JVmQEJQg22wftoBXPeZJzcu4bS67M3oUr9bWnra72FwQ",
  "key8": "2pJ87cse5ArNihS1s6grCUtoykuNJbgbWkzJ6rJy5VzcZTVGt8S3jPSAuLuUtbD7TDc6YPDCi2tRnVEcTnn8SQph",
  "key9": "S7k5uujKqGnR5mbZmfvbvwbYw6g9oTTPQ2SCW6bhJ1Wxq5Dv9sFBZHUV5ajHfNki3UhPh7WMEaQhwbVUJVdNPEu",
  "key10": "3YheKFxqcEXqs4UBGVDqcEfHZqqZMevPHr92Fo2uQrcHNnXLHrBzbFftHuijd1khJqVrRHahFodzuNadTs6mTGNA",
  "key11": "2L7uQnYVCpXgV37UjRsEXpp4FSzJVucrc3E8rwA2YrisM4aHDgPcKfx4YMgEMYXxZyytBhBqyr378RBQWLJTfDHY",
  "key12": "2gS4JZw1j8Wz4JKY9CiRVf3f1JBMSzUy5U2WvZf3pNJat97PYx8PrWdD9nMhD61NE56WwCLyRqByExBuiEG2ZyUH",
  "key13": "21mjTbxqnmhhnAX6dUmossfHsa9uRCXENB2MQe6miX2mReTbJp9stTUTL6Hg8rJexGVeH383ezs15vysDhWAHzft",
  "key14": "5Ww9bZa66ZFjLeqEQtvha33R8nMwpz7xAAb8S43x4z5buud4VmpbwpikYaNBAhkdvBW4W8GavD1VJXrDAi9u9vce",
  "key15": "62YvaLzwJ9GbPXD1ajUdiDCE9p6CnGd3jpuiEpQdZ8fcCU4wczjveuaYawtjTQerWE2geFKpx4BDrkajLD6XsxUH",
  "key16": "3C5cMDSuFCFqWdJUjPeCHkrhoBnJY1jJhZ9ePB2ykB6RbMEss9m5tQ8FVq9r54Hdr78B5adMFH4ct8CRKjmt2X1c",
  "key17": "4Z27uKPWGjjSKJMp7Lu2RFwc1BSmU7beRGm19jjPAdjXR7zry8K53Xo9eqZVzcYPqoaPTVgah5ow4XMVujw8cAgd",
  "key18": "5pa44X6Wz2mJHq6HoMZf2hSkUn4FnF5PurWeZynNQw4kMogYprF2T2y5BkJg14fhTeueuKQL6EeBwPkNd64DrKiQ",
  "key19": "3c4cjgUegkwLH5Pb7DxYH6tcGBdw4Wv76urptUBTVRbeV2aY2AuUEeWeE9WWM1WgPdR5up3rKJF32HUCGDvdP4HC",
  "key20": "4xdJhY3P3LFLrFhjFonzVMCMGyJLD7zrzUXaSG9qZLZJqBYFTWhJFy4cofbPrPqJgdEwKY6pZhF1qHGwv3v8nBeZ",
  "key21": "QyRzXT5McjzMfPcfnrGGMwj9tzPmrpJtfHq5wmrwMnqd1To4avb4wLnfB2BEj8L3cvmnjt7Jc2YamFz5wFXfdjb",
  "key22": "4zYr874tHeTyR4mBn5nXe1cyFZVUz8LqJBj485Fs5apPgWDtnfytKPL1PBNCD9dGY9CHNgKygrTFnuKLHAuKtqk4",
  "key23": "2HVjEv98ygHJ6HYEnDdw7JehnQqCq1G166mTXozL9KLZY2QpvZ7kUt1R8c6fWHVFJ3mUr2iJ5nn2MXcu2wn4uMUh",
  "key24": "2h3RVgGGuunFQ6QNgds5ZEk9ySqWtWFAjZKf4A2E5jyyXv6gfiwBLTBv31tqC8nCLNpvXXirfHUrnUjLjUHdsEoS",
  "key25": "pPXz1M2JnGqXfQg1GWEVpjmuJaEUqLenKXLLuKNY576cqst8vhQC6oRAAbYrg31aM9tWeuJgjV19JD64cjBecem",
  "key26": "SCzL7msShSeiR479wYTGGYva7WAWfJwk78Dew3dwmqhmjCV2rcWYxNy7vXd5QkAuMLD22f25fURWncqyMqxCRrt",
  "key27": "41TpphKhj3F9AefsdH9T6cwV53fqeavZWgFghCozwh77KqZBFTj8qz64qY75JfTYuvXHJUfz6Mi5ZunxupsErrbM"
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
