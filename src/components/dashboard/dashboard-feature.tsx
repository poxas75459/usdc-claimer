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
    "4GJmv6YtnnCWmaAUNeM9BDECWLussPxoUk59kmvHJ9WvHhtBCwemDc5AXM6w9j236WL61SwNTcBaHEnBC9K9k8vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52YJZEgyMiyJQe61DareiiKDVdTJdte76wH9ktaRkQoPbAfFuBVFQZVwCC2Prjv1wqy8jdLuEJ4jCf5hjHrFz5B6",
  "key1": "baUVs9745AqLSmshxMfxjjmv6PR9AQoGCeNJ83uszK4oSD5rBNJoEh11TV46PWnAGy1H5yf3uWtAxHa6zef5mUM",
  "key2": "3LXetfMEcJqJwbDWX2A8h2X1TZ4mhLYjPuvWABH6TZqZpDfN6CkScDS7Q5Rf2keEGAV2nDxJ3yGhDBzwEmFYwVXH",
  "key3": "5UFaXqDcNWxmsdnWngqAcPf9iSP5UUUrhXikhKgcpzEUYhSuVpryqQU6PE4LyqPHZ7PjongZ4mRsPE5A2L41FHzb",
  "key4": "4kG6NnEw5gw6SqBuuTREZMA1wez9YzzBriDtTXBfjKHFsjUy9rxzrUD6L8ZbmPxShjLdfdwnsiFrH7DL2oRyHvE6",
  "key5": "54z13w12Vzq1gjpZPgEwaR3iHq8s6ki87SYuRFrwXaadBqymL6azabSA1Y5ofmGuARTWQnJZ1rm8U1QoQMA5Mvop",
  "key6": "3CR7mRE1AymW6dm1GaxGwzDdn3vkVXKFzgFxvpGfWQWC8XggFwkPotuDbKx6bizx9sbST5gH5CSaNBVGdDGR1wNF",
  "key7": "3KCR2Be2QpQfxkDEeND3tFx2xfjnwzu4JoJDGGXkV7EqaANRRPQ6SpMjPhFXjfa2vPnjvEYdjvoU79wKiU4J3eEV",
  "key8": "3x3CqccXJ9wvyh13JNTU9HTLGdHSZdurrt17w89DmDn2Mn4cMUUgiiM41VgAJ1DwGvLLcWMhvqvMicLCsToLkFoq",
  "key9": "4z1M2ut7VEyEcPyN3Fhvyaj4bBsJLWBaewfc3VEGF4JvakshkyVnwxDNUsXni68uTy6fKHCxDAJDT3BXpcpK1MZw",
  "key10": "23GH3piZNfnNSVEtbJAUqoqoJ1rR179eKv9fwf4NK7P9NaKvfxCANfmyHW72WrQ5QcZoLxEWBiAcsmMKCNQmJDnN",
  "key11": "2MG2F4qX2ZAePAqd99yHCYnW5bUa17GWr2CS1FahczmNVhquz9abU5JZMjt59oSPktwxgq5Jx78uoesJ3qhkv7gc",
  "key12": "5qQA15rCG2hDMXkqF2zCk2suCfPPcNs6eGuS6uL23JNUxJkaRSs5WTkhtddrCXwesb9XnSdRfNqBtZSYJmeYdoHQ",
  "key13": "3T2HR5BP2zE5BPaaktnHRRFBgNynEcVZFWegWiLvSGheR2Rc393bCtjEofLTUkBCR6M4XSuQ9CLz6LnzicYH1vyG",
  "key14": "ydCVkWkbjkNbPRfcV9KJMh4KAUupyU4YCmiDuxpWS8dAoxnmjGxsivRyUQwFkpDkNVBXeg79jjh2XDQ3tchjd9X",
  "key15": "3zimw2Z9vNFNcZkJn6zMcQWxWRszg5pm7xovR3gVqsmXWcbF3gett8c1SCGFXDVYRkbfHBD3qQPMx1imoVcX8gEY",
  "key16": "2TiqtoZo6ooXm6ucv9HUR7LWYGXdJKSuT7XrXeYsNguaLM21BJtcnyytiEVDVVi3VC75J2CGTffW6S9jQGR3tUst",
  "key17": "5wVN8tfv13vvo2FJx2WuchaVX8ac6krnyLw32AnctE3vLYckU9mRmQPM9au2JQqpfmFWCzKpY9oreQT7yHbPcQZd",
  "key18": "gFGZwKNhvFsxDkJG7hXRKyGv1uD58XqADmPRPSjtW5rtt2tJqULMWC6QKdrFMjztopBtoPBQoGHAjQLyXAeuCKE",
  "key19": "2x1kRFfbocWDpnqgV3j1jevWjbt42VWStHcPoK3cJPXfkytjYTjBJp7eYktdUHYaL4xDGNTvzWr948nZVVRVHvKi",
  "key20": "2r9A5K9TqsryxoxHCtcrA61N8iBkHBkfb3MdwRPLejgBwaXgNCAkLoejiTz2RtukEMtfhzSitSGX7Q9iMd2iPSY9",
  "key21": "3R2FTSKr8ePL1y9bZwffxLn1iies8Yi7aeNhsY7m9bvf8nKRtFVUkrfYg37HqTetExfU5M6UonYVuz1gwVn6cmct",
  "key22": "5jWgWryvSUxNYBtX2KN8agiTDRD7DUUzHgTcBJGvtKYx411RAyueenD7AWpkh62bSsPfWT7VAYQJ6hFnu2Xzha62",
  "key23": "3hC8tuTJhCgsLpD84wcGgywzqwnD28KCyKMErq5EbuhA6TzQ57HfX8prKxZwRCsG9fYCNbrM54qy6YdGJEiyfswX",
  "key24": "4vVDDaWp44Xs8Xs2BYUFa89EgeHZBqvWtUTaGUGJedsgQB8RtVKoeZAQVDw6KvZiw1ugi9drPGRa4Pj7SraCuhua",
  "key25": "XWGSHi4dkpmkwzCnxnjKPmDCBfAq3hjcUzofrX4G4ZP9Zebo1e3JjvK7eyJCRxyPUEexZhJSbG9E4qkRbhMvCi5",
  "key26": "5VDKnqnuTQCRQmWiqRqVgzytQeGcNkRGGhjKkFJHmrp1Xb79eATGVXdQkAbontbfUvtfR59Fi5q8k1Ws5R7zuxbh",
  "key27": "4mXjRtQiVHGFa9zk4A6sEjNRsT5kGJbCqYviCsjo9EqER3b9VJeYun8DxKxxh6HqgcwGtqM6G5RZnQ2897CqggWQ",
  "key28": "4qiN6AiATMiXRARHcreppy8yV7hQbTLXedPh9aGJ4NoN3AaHbPbDw49A2ZEzQaQKjTnLKS91a8EDbsLxvzmKi8xp",
  "key29": "4sNUSwP9ihPuD1sx5YXk95NYn3N8FzzGwQzgVWEi9C2dkFKJu8rToW2cHPc3QKnvzA1XrLctTD8xyh5gvV2r5MFD",
  "key30": "4GfxfKRVmAZTiYfCqoJ1SL5AM2uBGcpBxLDBnMZYUCJmpyEqwPKDNjq6xpcPWCSWzVvPgC39DdNvHAoXctjXURAn",
  "key31": "27wDS2vBGzj4MBUd5TauqYPjGag3vNyrQnwEHZ8uzd8YiPWd19Jp3FA45jcoM6kfBuEyAw1jwx5VHiAroNy5WxE3",
  "key32": "2tmdX6By8enRzr1VPLh3oXzU6bQqSFQKZ9GQAHFZtJmLxJiXQ3h5ZhzRekYmpYGKMS7D532e3L3KNc2UZNjPUGVK",
  "key33": "3aJEN8Vv76C9y8GB2gJQT4yfhCh65nLvVJEmn1fDo8A4PEJL6mxxAnyjeFYW6SLKFdaFTCZJYrJzx3FwGkp9QVB1",
  "key34": "5WboaRsKaLkwe7KmS852b1uXnJff9jRsrjP9teQJkii3HmAdvcn3BrdExbijYieCmdRow8poY6mupA4o4cLEjgRC",
  "key35": "4k1LduRgzpNxXntKpQM2ieJEP8FgenEC4iR3p2FhbuA4HrR1Vba3TtqmTibKywqFdjdocJ7x7Js8r1mWJ3niRzg3",
  "key36": "5tTAf9uaEGgvfecdgRPgQ1fpTesRmaVojarJ5TL8XR6owDoiDfvGm9awXwGuwhxdya8kq9ApAQXX2URddRZcTwcK",
  "key37": "3yU258JNhxssBscDkpsge3oG2S8GpBdiqxnd7a9wBp6w83Rhp1NEpeFzJzJskYKooUdbDtRcA2tC5VTxgFELJGHM",
  "key38": "3LYiQMfpzEuAjJTX3e3QEaPM5XKbQeZCXPFFMmvxzVFEenu2xcafsHuP5EUc7NhhZDcQa8PVhy1Y8AFfVc1t8RfU",
  "key39": "PVgP3errY7z3m9vbcZ8a4QfSxgXAM2pdUMLnzme6czmz57Cam89PCWGCFkeuhyk7hy5SHRaiC1SgB73SdteRv31",
  "key40": "27XfVCMf4wuFEpUjyCqyKYupzo6dgHU3BaidbPsVPNeDu1VNWKmCDFQXJSkNeFPsj7Vj2kqHxzhQV6oHB85V7qLu",
  "key41": "3dWWustkfzseVcXyM9G13tyLhqQg3QWUDZUa9t5Zp7ja7cBwE1SdfQayqJMPD61MJuHCXKRuDFu29on2JHAvJvEg",
  "key42": "6P8MqdULfnKohMhfCFAdRACwAMMifefdAhGGeCoLCJskovzbBDxRxux44G7cjZ7yPmQcQVpUndgbXtiK1m6o7z5",
  "key43": "37rWMCnbn6depjrVzRLRPuPVyrnkJ2EgMD3wjuZgTD89u51NyLD1vQwVoMY84gwgGqfw9KnRB9ABrZCfUPVfpnBK",
  "key44": "VoKoyQc5NqeagrqFcmJsA9jdRBBZ1FyotC3JmUz9PSns3dWFiFrnUVJ1QN2VB8Xk5bsQsv5tGBGx8LVuRchhrDQ",
  "key45": "5SnXTSDfKi5mc9jX7f5CuxxyHUkd64872699gyZ4KQqUdmG6QssGGpezmuTQk1ViHLeB6dxozeScNji8nDKkgbiE",
  "key46": "2Bp4VrjcyGUy4qx27eAeRkAN11vmvFWBPdiyS32ndbUsLnDJVrNvkwLFKmaWw1zXrprHR1LVkazJVPASxGoBA441",
  "key47": "3EFJGWS6dFn55b3VCPTh2LnTAg9w8Ah6GxXBBWTRzyyifgg7VDD1n2tz92dNwGvZDjxucr6Mw5GEbcZuYrfK8hef",
  "key48": "4j5fSYqAtri1HounUQKfZNZr6LWPRVZ679EzRvM5wdbYZnUx6nWJ8LKDGW5ugoodSz8v6ngNiGW93dx3Fuw44Dz2",
  "key49": "vcvvpadfFnsc9pvgZ8KuM2USBQfMXS97D9PAzdYAxrBULqjcuJLVCg4nQq6ojEN6ZJMWY3uAbevxyxfB6yCjqEZ"
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
