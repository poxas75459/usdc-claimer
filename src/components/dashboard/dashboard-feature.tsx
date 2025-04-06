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
    "2SRttRcZt72wjMzM9gdeerAp5d6PS9wN7z5pTJagmR1636AkHSXy1uEDQ1JSCKK8k5854AXyBikAHrLehfbdysvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PLSE98vkMeZCw82fnu2sKRL7t5yo3b8Wrio9W4nLx4cdrSEikAqrd8w8AP6v219iHoD4gmES4t3ToTZtv2S1UPM",
  "key1": "5t4mjgAXLks5CDor45HwT9pjM4ZxHFhLFhf5jbLxHsc1bbXnz7CWenMPH1BaonkEm8c371EfCWBLWzicJMGpqE6c",
  "key2": "S6N7JPnY4LnbXrgp2AB9N7ytEwFoBuN98AoDYr5vtVHMbX4AsyNaXRtwvGGZ6co594SrtvAiJC1sGKhx5v3mYE8",
  "key3": "28Gxm9d61XATvoo3q9cVghhp4XnANnSCEpEBbVH1Raw9waspWmqQW5VHejJPLPtmGtwkULY6mPoZUnLzLxKPtWPm",
  "key4": "2bTY3BpP4NbnYVsBZBfFUmH8duBQNt7sDgxwDxE383iqhS6ZXkGMBtGH4LCkuyX6ozXNCxLLEn2ForNGGew8hxMe",
  "key5": "3x2Dh9EfTCZjiKLHQiZrixvbsLZo3xfAFocb83soy6wiAbSmGjyxbyPhyG2PWyXydL7Cw4KRh5n44VAhKMDLad3W",
  "key6": "428PMUqk1W5uZy688ztzKVAuKTKB8Z6ifKLzdFdtnhxxLridEi1Snm1saXzehTJkHDkVqUgRSA89JcD3TxKqMZ1t",
  "key7": "2LWkDPSW64RjebiUqA1e5AKpuFtQfYgzDofF1RtAuzxYWiJVczkvUbE8EYvzkbSTYUn6VQhAftiSnN4zUE2ETAt6",
  "key8": "AUxZA35KR9x3NBsoDx7PvrFoYKuMSNcFAoqqfZkqMpKz6UAi3RuwnpqgsPQZ2gQwbnfnjAEhD9e7GQ3S5grcotQ",
  "key9": "3vGYgjd3J1v9eULVK1VzhveTQimdN37gcGh1N4hQU2n7XQn5xgTEDCdMjYQ3KJQ2CdzJLah2d8LxPgRygwh6Uemp",
  "key10": "2T7K6iQPaqN4jpUVrgqzjPdMKyFLAYf4ESL9Xs62jXWbnU8xLEWA8rtZHZxyxxUwpiq4yoz9Qs5a1jRHv4HLSjkj",
  "key11": "5yYm2u9pjLLAvkaNVqV5nsmNBF8qgQ2p6vcjG93nWytsiAkNUbvTcv4xEfcNdVTNLrSM59b76G4qd1VWmw5R8nf",
  "key12": "SSR8LKBkccGAY4vGJT5jnEJGwbE9BC5K14Dx5ChAjXmp9HX8Ammnkyk4NiM51azY6TCv5wzgkdiLQvcZgH6q8GL",
  "key13": "3DNPaA95yEtPkFyXzdfvrMFmsTbvF6i17qNtGxJDdiy5inHSs9VKPYe8faFjG7L1DWuUEPWRShkBLQH4vUtpkPB8",
  "key14": "38PBMRqoTB5hC6qdHfZYFvfnGQme87K9mRYrXd5MC9sCCuapvHze31c8wBF59gocjdbxgfzCYWfd83hnpVgXVRrv",
  "key15": "55egYuWBt9iTapqbNpotzRDS1C54dovoPXYPJBmonscRbmMsKqdMm3RtNLsmzVjBXsmLktjFjy8Vw2YVyfQRTdd1",
  "key16": "4vg2wJVLXttvUHUQoH7YrGiiB7XCFttKdfKq8vJjgK7SV5mRfpUjTP1qEdSeaqJ5dNEkNFYeG18oHu1FRJZskaKv",
  "key17": "3sXK7F5mWVjV3AND4PZkbhjaYxDHoZAVdjTXtmfxymu8KgDEsgQ2Ehkwc3LUnVCtZu4wWAVJhScxdvjeMYWboTjK",
  "key18": "4bMK4x2yHZD5wn4qJBv27F7ZqEcfM5gBWTPyibZKkMPMd276cZfBTjQy3TuJuEUpLpu95ZNrTZHo1jK1ETRefSsP",
  "key19": "3TTfYpaHyowobKvVGbDGP12YCeJP5tpweZkKBPTqGmJMX1eijTMnhSdsjgGDSfXvZEsNBvvz9SRJHoox4VhKNmEN",
  "key20": "67KGd4s5qbh7PSbaEzMMxxZE8m3HFHBKXcv6WYedi4kxt5U1aS4vdGyWsuYHLp8jAArKT9mbsXFKmn92PwWDyLHp",
  "key21": "29Cc3TbWsYaBgntZ4gsvki4u5ti6rgb5gDSbyo6FcLyZtDeJ1vs7mwwiZJKC3SoFeC438QAiQP6y54zAgLjCeipv",
  "key22": "5jD3xqSkpAujSEdtTAJrmhm5JZchvK2cupMCZau68cxmwxwdRH6ryFHMw6HgDrP5npm8cJhPEkGR2Ea6nGtd2Ab2",
  "key23": "2kFH14niLzva9Xi2pSyQxL4LDsmofQ1GfUfTNeSKEjstvNTKZfpmmN9tvkL4A2UHiMXEHQdVZZusQXfsfDKhki29",
  "key24": "2w8NRVr6diAYnBeiXmkvV9K9Qsh4K984JHmEnrR8Gkcad58oEgPLY4gokMJY4kMrp3kq1FbXY7oE7SV6NpVw9dQF",
  "key25": "3pSMQCZERmJnwaXqoUEd2KSzWSFvbZMaN6bJxFudMhaTefWax1ghUoKSwHNh8G5cBDH7XTz1e8twWCiRovMDSpJr",
  "key26": "34Ytd86xif9GEA7xVzV6caqkHwfQFqDeLcsDni61AQjbvqdBdDEF92WMjwqNNzdMNg25SmAc4gJWLd94STj1YAmj",
  "key27": "Ki7mtN5sdm8Q9WkFLoU7wALtmywmqFbmJwoN9chmkGPtRZAMJxinUPSuzGzR6iZgf9jUzYpjWDtYMoHwi5SqS9k",
  "key28": "4KSWagshUH2ktaRbhRL6BDQhwxCXt5CLygFrrgaaFXp5ZxdgpK8gN7Si1nxQyfs9BDqm8pfL2nsoYUGJuC2AAaPo",
  "key29": "6syqiE3ykfhYvZeiaDgFh5jGL1hLH5nqxHGcXGne4arLRhtv4KJ7uZS3QV9u8HnUtXEUmk4LsryPHLTmzu1hbPn",
  "key30": "4VKmkPfYGwPVJ9uX9mKULKyzninfm6yRfdKCUuWRi3PBeaJCZDY7ivxixDfoa77n8k3kGt7GhgAqgVbo6j6Dpy7q",
  "key31": "36haRouxjgRg7Bj4F8dWyNrri6zX715xRWSrkZnxANQb7ygi86PBDxW6EjJ3QN5akYgzPj6EfuyTqLyFsj2vmhjo",
  "key32": "48gD9LATy7DZEfKtkYYVDSHa8daRNxQmugEsbJkwWJYRQ9A5y8Bp2HRioAPXXVCok8AFHimVRCZJwT6oKoCRFZZk",
  "key33": "1UBgZMXzJjznUoocJERmWFmx5Wz9xTfcG1o3K3EFN6ESCqiRzN6rELuKkpx272zYHEAMLhjhm6ncNgGFKpFj3T2"
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
