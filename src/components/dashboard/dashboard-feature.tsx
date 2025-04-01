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
    "3R6fRQpJyToSoRZLUAcjYW1d5P2bzReAATJpw8X3VsQpA3BzxPFogC27Q9NPwMjTwMmqm4MdzXYyLw9vtTq5q7Vu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LTW3stBydLwAPceBq2iakxSMRrgjR6FhX8o2QEbkEozQ67KxUrsxRMSbhxFQYri4zdVZrugRuMSFH1Nfz5f51Fn",
  "key1": "5XXPM37UYWLnvLpxpVgvxax4zLJkmmPscKifpeXxFxPh6W6bMSf4mhDd8tCegVg7nGHxdfjMAaRqCLkGA3Ce7BSD",
  "key2": "2fb3LEf9qUjyiN9Sq18pwM6xBrNWpKiWrC6jwr12r71FkUTiTbbMFbdUvBGMMUkPL6fPKWJwXVYrwQnFPS98sYtu",
  "key3": "Q1QWkftuBVcQzPge9MxeNySSJsQZmBDAyVrWypLMngph9itAxLaihSYrBNzpjomp4EUxWMALbsWssRFJvRo7Zxy",
  "key4": "4o5fsugpVUDSCE1ngLTrdvcefz8DZmtQTwo9aZHPafMfPGurysWUDU2rKPmgJR8LQu7pQnNKjjc5evTXuk6VajvN",
  "key5": "KKu4SNiHzXjPsuGUyxQcHX9Tgy911R12vWLGTeCp1okFmeuoQVKcKd7cPStJ3Hadg7iNZDfqpn3J1jRDg2cgmHz",
  "key6": "2nKmrTGHnhnWZJ9VADhKaXZSdsN8PTxt2vHxNaf1jGJmFyYBwyjx5oHNBUHBvpBqFaWi6BEt2yqJHEz1Zid8ymif",
  "key7": "5zFL6DijDKvT4Z3jVuvrnzhmYcu4Nhk8UvVLWbFT4moxSxs5Z1nqe7C6qk8UVSqb9MymX5mATwLd5dKrFHdxGk2g",
  "key8": "SMNfMQkxzrbFLVNYqsZtTQesFr2eFRiRWBctC4u1NrNdjoBbNr26GxaffGrJuozrBuA2APUrQ2mRiLT6x7Rik1c",
  "key9": "31n6ck6WgBHfK7LU32MUgC3xnrHEcYEmwtxJMfovpA4y3D55e7KLjQSLzgW6ZEZCX2kL8RJBjCj4hVt46iJKf1wu",
  "key10": "5i3jAJzuaVXiJKaanfJXRnrsuvRZ1UjAx2HnvceovTttSpaohWpdC8mtiMuAVK4m6878vfZ5nD35NGzej87kvcbr",
  "key11": "4ZYvow2QCjtUZSQsUsgvhK7jtgGxUQTgtPNEF7LLCRCZp7UtGhSSPREEGUM1ibRhqck2cis5a2FBwGcmFNKA7YPb",
  "key12": "JoAX56TVEfGpnAo6jhS8bSSWXGUeexe4uKiP8s8P5kwEy5wFbjnhhqKKnF4B2H3E7odj427dHDjYQoBNSxmHhoy",
  "key13": "2odQ4UHBanPJfQTYGdDzhYQ1TS8ekhrx4TzS7fXTLGaT1kXR5QfjfnkpWNhfRz8Y7KCH3dzAFMxjPDVKK8kvVHmb",
  "key14": "3GDRDcWYYwKtTLmqSLhnywkx8kfeorXNv8uKEXuNcrkvFMYFydv7zUPiRNJeM4Rj4dGtUHa93q8GXA68TncRvcUV",
  "key15": "2J9YecrEEhai6TZuBzPoTZndcNtfNAMQoMcT75XKg3vbi1KhdXK8rwNUi2pAnSSQHCxTCQL1uWiUFdsYR1vSiRHk",
  "key16": "VByK78czxk7tssy2x2D7Lbubx9oZoQfUtEgYpqLYdKGv4wAaGtkmC7yLK8KrZKHP7HGp2eaf3zH1FFkA5ZjkBNi",
  "key17": "dhbetPyviGQxw6ksTjeErPRRATKQuw3EUvt16Pnk4p5xQCB2Bp89MRshY3t9mnzbr3Vq1bMfH584mv73aNHC2FF",
  "key18": "4efHrkiHo97SyqhD7Srk2xYrRxbvDXv1Gw8MvkmP8W63hrPomVonWBmG6qjSeaFHTmzHCHk8JuQHnwqwvWRkfXpJ",
  "key19": "2NAcdNn6AvVTXJ5tcK8uuERMQhSsjFrBURqSzmFYChLVsjivXV9YKCpHkjJWwuukWLRAwr3uuSyhU4YXpNn5GqpR",
  "key20": "39SLxz6LCcTZWivd3i4hFj7CxRpwcYbBpUfjZiDsqNjJMZ6BjuAMACsrSLTdSxnyDVh1j75hexLFwpHKhtJKvQvh",
  "key21": "4hZLVYtnYQv7RKqsbikgVsKgHSg7ycSgsnksUNxQgnaZpHTb7bc3XtnXxSU1F1a83wB4oTT79j4MB9wM1AsKQdTS",
  "key22": "4ptf1pipd1uozmvZczfR5VnneH6uhm6AY1kAuY6qs9twYSq2u633tK26yxJeWYajnbTHKZqojoR7HY3Fh8HtYq3D",
  "key23": "3f7bukzjfWJ7FAb24x5L9VVD1EEEsVsXJA1BQU74iFTiLRKdD89LEMAEviAYieewRUhNthiPE6qZr8CpZXLoVWKg",
  "key24": "3Z1PZ4JGtaAb388zMkKukmFdxgxeCpKfPYHTSHQz7zJmEGAi1XVErJzcAGXWyBWr887HY3xFUj7BSGpdf9C4jVeT",
  "key25": "5z8qFXMhrKAdSN4QyBr3gxicQC83wQSUj13k9RTzTJHzcMfbtD2GQ8XubhHi5xauH6BwYL3s5sUmJwtZBuANsBvC",
  "key26": "5sg2BkDcbmGkdrsf6rptcf5pb47qXuh5935bB1hgrdQtETxPqKqyZaBuKUBvCEE1Y6x9Di7i2gLrdnXyKaeqnry7",
  "key27": "uGiKgMoCPvRngEUjexWTCNS7udvQqikhFpo4Nu9LzvbWtGiS9F1ETTwoF6WEfDTbp9vUJEyKY4npT7DWTZSPjGJ",
  "key28": "1RJ7irVdNQWvAeNgDoYqBhVwRK1Vo8vqooR2jFb5E9bcFmyAi4XcdSt8MBADqYrPvy6rqQCxtjmm3BC8qNqqsYG",
  "key29": "5XLXymS7RjHfdP6ssAxHGNNDm1vYCybkyy3w11YCy5LmXnjXxBBN7D2KC5n42UaeQFQaL6ugmt9MCykvyEW4jb7G",
  "key30": "5WscfvjdTKYcTuAjVp5b8gLJej3TrBk3FCwiQjFx71s9FcBhttxKJqSnAW4NKzSUe5vLbZRujZvPy8nq24vsTjdS",
  "key31": "3UtmAtXCPQMn27ibxr9U9FfpD29RPrZsUkUVa4VSQoQh1jiGecKoLDXUYXbZnee1EA2myzRk4FGV4FPvSQ2R5UV7",
  "key32": "37FtRJfq5EivUFh3XxYLyASScremEk8rF8LLprcD3saHpzxawWvct9oUAEP668CCd1swi79dBk1anMQrjfuMgxxX",
  "key33": "2tEPyJBEhWTDeNSFKSUhYoKoqwNUe7G1YbLu38HAWghTrWUygqMSt4HWs8XYsURAUEXvj39dGRiGumNYuiKKoAL",
  "key34": "2Uw3vkyS1XZ3XYCLsePVQVfB3ytenPnNtTKRejAakoEDyScZGxqoyfrdrZD32JZrMZkdkSHv7eL8VHJHnPxm1J3i",
  "key35": "55kWRw9yJRnnhzNzPUf39hp7d4dw9WgXeaBMMxhrQoUYaBeKTbPCBRSGtaipr869mXj3cU2UtY2BHUHr414TXsm7",
  "key36": "3M4FHGWza8DLsrcF6UpvKCiQ3tUd8neeVGa424k6h82auKUvxjkdLPEn2H2xzUux291LntyMEHPFQ148pq21SBpn",
  "key37": "39kev7WzJpny9JM6hW6bTvyYUbEgWDDuK4N6SiJZ6x7Kmcx7ncEHHBMzJQuhUKN3hGXPbudA1YD5KkdgXWxbA3uv",
  "key38": "4uFrofYkcT8MvHTx1oM5rXTL6DxKPbiTE1NegL5hSgpVJjuqDptcY7ZUJTW6t9UknrLVBuGJ5BHGcoWN1NwveFXy",
  "key39": "4tau2DRRUP9oforxT9cQPGkuxMY1RY2oPUU1hWW2mq9DxtsNC4E2LEBLajUXFKpasv2cLLJBQx9LBfq1D91v4aZT",
  "key40": "53QhEgqarFUdsuTmeH1k5KpreVKjWnPYPtuzcBaRXmFN3E8Vh2R7oTtve6kqHCjCd9XMXXSVvSeJmkaFAxcTpYk",
  "key41": "3Y7KuBnkSJsV7FMM9P3aapr6XHFqvdCdwqyJBD5imomNqeo3sHjWwtnbgUfAYjXd7MgpSnbvNXaRyrDcjBT7DEzj",
  "key42": "YPo7AgyCBcf17m67n5usSaY489dVPkNGC3usXe69QBxpRh2inwE1dmvr6BLLbXBQMHeN97DCVkJD9hX7sTiaMzx",
  "key43": "66vnd5vqucvVPbDvwf3Q9ZbZz8NCLCkNwFMwMdbWLTZvtHzmGFhXftmGSWqSNk8o6FmEaeMHAuGXbJTrPFWTEdXH",
  "key44": "5sQHJWvhN9hQQBrsoaJUb4jLHRRBsVyYDxnLsv97A6TTduxq3MhntWXS465s18H5LjjChqnyudKB46QyNJR9vLrf",
  "key45": "4sw6S9bVWjmuykqk27YtP96H83w7WJudoCSsrtgwPButh8Zrq5ARCaPogWehTgfp9kCdrq9MvwSqbmAVfsi12Vqy"
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
