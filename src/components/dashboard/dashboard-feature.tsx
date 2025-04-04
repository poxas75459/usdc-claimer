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
    "3Dss8EMrrabt2rhQEHpxFpLoRQbVifvZCbNgdu5x3NtSUL37aBoFJrMuV5tjSQ3E6g3ymBQ4WZJC8sRsjigq5WAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "367rDMketuEFY2TJVJwuqYuVF4kMTrDMtwbLMzPgcSXT2rXdpttuRnBGFNxJv3Rvgvyym89AFZS6WpbwEWr8GsMc",
  "key1": "2tqNMBHcC7VDAUqDSQ1sWGtttGVZfDeqtkHor5zNGGC1mxhmcLeD2SVweVRDJkFTnVXSKZunJoEK2Y3ogGcfj3Q1",
  "key2": "5qNwcNZVn7R3knd7CFNa7uSCktRKDAoXruoySvRN2Qcg3r6r1JCTW34kdSfjXxrhJCFJYqsP8pLa1pKdTtz3sLNu",
  "key3": "5NL8jY2XRwy1a15ocGahjqasoPN8HiaKCLPKmJMe4qtvnzL5Mpw7XPe7DQrscUhYmGRHoQELDKdd4MGdqpDGxo3t",
  "key4": "4C8Mb8oqiiT7mdju6Nx6tJJVCRwMSBh4XeMN1zwmsHkksCEgnd3mgNkfhp2G1EsK5D489hodrm87ibLS4GbtFePc",
  "key5": "53EkTCKtH81rjnB9fSVTsebQM7Vswudi1NqmqFnrag9WpsL5ciPYyWp51qeWQjM8oXR27ihhLZY9WB8agEpmgc31",
  "key6": "4zgtqZ9HCHYLzaATFhJPyg32ggxv1fc9G5aSSg6GPJFkxdjWTnY4EwNgQnY4HrY9kNou2STUngcaFhWPryiMdQAL",
  "key7": "2i5dMWDyhmx7sGLg3JuhUgb7ntwCbrRbtBHRGWWosPTEHPKoXrYmcQHpPjiWkS4gePieBf4oEuo3vVfsnH8omRcZ",
  "key8": "D9gCqTwdihQR1oyufeukKYkMMTo6YGBTFeVDE9Jf3sPciHrokbcBMk4ddmXdMHjEkPzB74ZnS2XXZchF86rfJfc",
  "key9": "2fTLoeWV2NZ1m7LBrtoboVPntkd8Q7EEP2c3jgdx6WoGGKoejN7zv6EQnDQkg4JEdtMcECQc1cZ2UC8JYj6xya4Y",
  "key10": "2PbEArWr1t5ofhB6SmQLYri9uhum1d6tN1d5iLf1v86b8B49AhGCFrGVA4EBEiTKfUZRg2cCXk6HcU6gmfVuvHAg",
  "key11": "3amAuDTfhSD8HYAKPwpJcu4STYJsgTnga6p81VMtfhSmJNXXSRw9pnh2QidMtNDtjnVscoGWVmAniQV5MoBPsu4W",
  "key12": "wBLNEJos8B3cyhEkdxyi8rxJxGo21xDyxT66rSbarpju6vLWcECqtNFWXjn8jQ2eDVp7XzkcPZfqHJ22H7XBVta",
  "key13": "4JfDeq6vEafgDPfkCyjN8YsB45nvR7FywRvQU7uUDKgPhMzkxg8knmbM2mjgGX28pvJBRLsXHj3roV3T1qRj2GrJ",
  "key14": "4ibmgvRNNfjwJnGKfBwiQzdX8Zse8BceSu6Sr2ZPLRMYGTj5Zc9xoJ7QYsuEsyswpoQc4ZBCidQnKeNZVuUiwKf9",
  "key15": "2UfYWAg47GPwgu46EfqZ4LtPq8t6vs3bPuQ8Zd2aWf31KScKbs3EaQpzxQeag5WN74iijCTbPJXr2ir9mV2R49Bw",
  "key16": "53Z56pwvX36gWWonWwRhMgEjHNyztbM4vLxoGhD9qps3AUGoNWmSpf12Y3L5VNGj59Ju5wvX5FUdeThfKBWKBCom",
  "key17": "rydG9T2Ewgi57htBzcRD3aXkZjfp2156U8xLNQdwBpiRoEj2nCyjiAQK3Zjw3YwMJb6LK7AKNcv5oYvmYpRqGp9",
  "key18": "JR16yHHNrE8Dtjmt6tYMjynqBp5DT3hQHD5kwDVwe2MBRe8c93pNyCkmseqZRjNxGCLPfSLsUZUW7jbymuLbnHJ",
  "key19": "jUSzKY1aEf83hAdS4yVuQyBtBaHNwod2HpdMiyT1PTqdHhMkdw9Tk63JzqXCUAA4uFkR3N4YwEovP8GcrsUBDs6",
  "key20": "2T7h1r6wraUERumdZ81UhKSMbR8ZDot3ecwSdtwRqp9HiZyU9BweqZx4kJ2bzGMxXh8JSYT2VD6giqeRt56hyHKc",
  "key21": "43cC24oTsvvCz1HRFnyx6Rs1rrs7D3zikkK9p5Wu53rJqgREncWBonXNogeWYad9XgCyvanoG74KArXKF1nEkM8P",
  "key22": "63r7rtVNJqnAgfYCYiHLZ3Ms2nboQjLZf7dFUoTw8tD2h2kVB18WyknK79mrqLXQJ5UZSycwKYP6PkiynDqQyruT",
  "key23": "62D4ScsrgZcxvPEfd3BgcZvPRy3c72d4pX1yJD6eFVNsswA6DbnGGwJgsoHsm76KAsnLbm165n5tUpuNszyL8qFP",
  "key24": "3TWRGFDhZVMxxoHtrp2GohZ7gL9XEVEwN6gw2zaGk7Jdb91EepxQJnAvoZHP9Qig4mrMKcxMdZkdmu5HpK3xmEuF",
  "key25": "3omTYujkuy4HRdqGPE5sca2whFTZB8j5x8dTdkTamoydEWDCp2uDpi6Wq33Txjy1x9c4g17JHUGCAYtgMeGoq3jP",
  "key26": "kBeXwCEQqQeka8CFbFMW4KawkGh8fgecYcjP5Qk7b5L1Q4cKEnvXQ9jAhf7M51egxVEbsj9pcrcntTYQPtdA9at",
  "key27": "4vFjwEUd1XtHZwUW5UZtFSLYL1bbjzjHXFmaqeQPrtuRH2fF6v8boJiQdJcAMVxi49xyJKKWz2N2nPGRVGYu17NP",
  "key28": "23xz975UZBg7aESckwAzN3qBeZHPoLvZgviAGFKQuuduF9GP13hdgqXwcG2gXxRryarj1hQFhAy3nAXakWfk9WKo",
  "key29": "2DbwYmo7ocwPd5y37aQyXLTMC65vJAZueSHyQ5JJCytF3fMVMHDzJZdiZbqpy1H9PywyAxAnrr6WCzpEA4M7Nr8B",
  "key30": "4fhhXFWRAfhBVApogFQTwSJn8x4ZK9FhZ4oBXkTA7655oLwK9JHxFkJpHS9QnQvKuECFCeTtAAc1NfGssNqruH25",
  "key31": "5rs7Kqkr4dUHw7os7PfWPybSzsRUqTxCWp2hRn1EBayNEk4E5gTzGFCbEqYvD2ErJkvmhMvSAdvAZfmZvvkwCaXD",
  "key32": "2zKjPc881kw45T7JG9Y32kk7wD8BXb2waKgntCbKPhG2ZERPuYyJJ6By16nSWCLBJy5hP2dR5GkAjH2gkSU44p3V",
  "key33": "rQrYfVoMo33FgevDnwV7JPcA1gt2coj33KS56M96XwsjgxzhSVft2U7ucoe9j1voitjb32wseCtC7UXiCzHNpPY",
  "key34": "5zRNAehAguuitZUeu4XyMkwNqJuAZLiKoq91k29FabjZbQQuzKJTrd4zDmxaJGuSsrSwRXij3rW9cR4SA6eQ8ZL7",
  "key35": "3MDYzy5DcjU5Y43dCq24NDHoZ84ogEP643WAi8G8DLCMCopyJj5i4eY4UWARtHM8a2zrA35Ui1Df5dHD6RDWVUNn",
  "key36": "4HCiPsVzpd8Jad85RRm53jWXgP894PwVqtx2Np3Kx7yfsNnof5wfkpefCz6ACYuHxTfWc4sbiFWzR6oFRW3HfqeK",
  "key37": "51nXCr6qnsuraJcQYCnnkRNiFEWjaAegc1CPqvzB16p6N9dY7QwK6hArFxZo6as1nYTQpKNnM98RrHN7n1z3KCN9",
  "key38": "MvsyqcGp1LGdCUhSi8i7Hsujs7wQDL6e8agV6WE8MAiH52f8cS5CYHZAEJAQBGkGbqATK9GF8zMXFKGTQmN6vq3",
  "key39": "3nxHRrXgR8zzogupwo2SiiXr4HfmRgPLVtoAFeKNSqpdCQmJBeHvPCgSHd9j3T9NL2Mz6WEfCGTVj9sfNGB6nkwa",
  "key40": "4t8wfeH9nUXKyqsMURGapAeM5LdJioJRCMfcbmVmuqheFx8v44jPrUeYnC59wvGjbiMTWSMGkSJjrLRQS9noLDeU",
  "key41": "5dPmzYY7ZnDe4Ki9WKUUC1jgei9UYQwQiB6Utgvfhq2qfC4J5VP9XnAuFaHF4SsTBdEc5GhZsZHz8amu1J3YEN2S",
  "key42": "aiAbANmw5ep2aCxUtwzLr3gnR9BpARmnqmcc6qs6ftzLEivxihY1i5zMqzuMhxvQmyv7GFu9DtF8xFRBS9R3WpV",
  "key43": "4oJ3BfV1f5aTCNiJPgyBFc98CyRRamtLntFkiDHEKxsRQjwoF1ioCX87b78rAFk4dZntUkgWndTpjxQMbJyqoD8W",
  "key44": "Ed65mqH4fgsjSD8vcbTPUjHwPZZ3RW5WuZT6ZY624NmwgTs149tPh18HpjpYjkSZDMJh8NQetee5KKuttVQACRy",
  "key45": "g2dQRtzG8j5NhGQ61XiHZE1mzzfViC6yENGhTxjpvuDeFPVqrW5JeoKV7nAfjM28gxXX8LXi8DvZJFKFKzT5SMP",
  "key46": "2bpJSFhEMSZr6PBhJmkBpzFDYCJPFrRwnx3Q76uN1GjYd2SA5a3s6yKBnApoWfZA6GSFbSPoppdZp3D74yV9jWEP",
  "key47": "6BHYbHbhJhnQM28T2hzih9zPTmY5USoh1f8W3QR24s3yoVDSNwEo3C9TMbKJZJQXUAfpMGjCmUFcjaJgvzsUxnX"
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
