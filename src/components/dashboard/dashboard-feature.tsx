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
    "qxeE5bq6RwdVRnktDoTAPTKSA9VkaWusoGuEtKLZqw4tcdrxth2YGpYXxsfs44mN4nZckiEGvrgMeEKbv17oSFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CZX6Bi9iPTKHEEv2td9SBAziH59iuQ8xvno7Pt3LyEDWpFHYd1WBob9WtWym4sknwu1rruzwi13Rzsky1tibcuo",
  "key1": "51YETW76QeAEkGerUJu5GmLnZUyzyDYfJv9nJpnJeQDGaCi9Q3fXgoTaDWq4vLewsG8GNUQhnvGJ4i1c9BmCMnHL",
  "key2": "2DH7UxQKxFTTXuK1vNqVeTuD3WbajmZGtbxXE1W7913Hgq9971dRRybhqADSAhr8LdCAn2DZx33UUzGMurkYPv75",
  "key3": "3EUXU21rpYPaGr6hHwmQmKByPncA6VafmhLSAJnGAgjDN9dggXzs2wb4k7aGnwrPRUm7jpNnHEDJqAPmPa5ybm4W",
  "key4": "3WWJFrUoeokn3Hy8bWRNFbP9pqvuXwvjV2aTyHd14wuM8jMAeojTv1R9WcSmr8eabUk19sfvKyJUhjoGeRFAkGEA",
  "key5": "4vQ576DKLtkpethheWP8h4JmDVSdfp7YhTE3ASU6JUTpHhkrpF5jQZLirtVHFnxSWYDp6x1pGirpfHMxqcUwtN8k",
  "key6": "Ex2jVZg83Ahh5f3jTdbAxuQHSRSiEmqShi6g8UaW9AC1mhftDa89SFJTE39phHFNs1GZmH2o7MkKhvVZCh8YPop",
  "key7": "2UeB76fW4667bf18gSwfEndeGkMr6kyjM2sypxcj4D6Gs6xidbFhvGAEvBJRhbotasS1P4GdcFVotf7P951juoPL",
  "key8": "5vwUzHesZAMunriDYkYes3GgsFSCpVD4RAvH4n9CsSntbffxxJdCMrt4wo3r5cbGhUkMcWXGYf3ByX2jeQexDEMi",
  "key9": "7T8HpJ96i2fDTeKojnYjSmjSFzHURFew1eiJJKrsVJWPuT2U6XhejGYS5ghFrWnajBMh7HHUGMwWA8Xb3X2dc9f",
  "key10": "2ZYRJyWE97ob3pZWUK7DiMohN13iHGSwQkw1wVdGye6Xg5gUvkjq2o5svAKLGeefWpvrsKV9CDh3jvEP1i8hbK7J",
  "key11": "kVVa7gkVPyxPQ9WftSTxCcZ3qaHMj6nPJNVbNnP6TEw3RTu7GS9UNBc35gW7oB1EugTv5xYFZumz9dVYuGNmLVr",
  "key12": "5BM5fikM6vxotTT33EqGJrmoFD7wonD3yLFJd4Lwi9cDwz9wEMqmUekDz9ftg4yXHzdf9RW2MBWjYsUB9SLz2CBH",
  "key13": "3nxqpFcoLHZt7mdXVcTjBYk4effSmBcfjNo8qttM8odANSpALGpXrhD8aDQZZtjSmMTXvMxzf2P2wTecWyvtbtJf",
  "key14": "c6itQm4ZHHC7aTTen2tngkNrN6kSeVcLnwgVSBbnzWWKRMz9qsK7bEoyDVxvHmCu5Z6bHJDLy3SaQTg2dRX6R7C",
  "key15": "5nMtVheL87s3G5ELDRPPHVsZ4oy352WYqKcA3VaWbUUGfrSrZpRtt8xcNZZabd7QQQ9nxQDZEGKdYT1L1oM71GsA",
  "key16": "2Sw1gSYRYLrMfT2HbpbJq9PBCpTGGeqWvpuB79Agfu3cZySQKnJTVYuXgTQ3BR6wYE3qguHjcxi15TwAJy9yoFqf",
  "key17": "57NvjVZJPfNMrUuypt36NFCaEW5WUVsVnnZsmYomw2epz2Lj6iqTqhxNv5r9ff1T3s8wHBD2Bw4KJfqLb1mnJY4X",
  "key18": "3JrGq9fBmB23rLVxkcPtedQPMNFuVQbZohdMubfQPNs9CzgkaFCLVPNEFSJkWL57ecvQy9oCSMKUdCLThqeakAF4",
  "key19": "3ECdn7qNA6oRPcFsrYEtCV9qciVERadG5vxFjnDkYtgjK4EdGX6MmWtqXeVrF7QsvrNAQcj7KP4Teqcxp2A1Rzpj",
  "key20": "2Zb7vb3YUpLfT67bAVioaCQSzF6X1cuEqPqXaHy8w2XfQ3q2duufARzq1wmEoZrRvag5tXPbpSGhqVuLMCRLtJMp",
  "key21": "3kFftqabsM1wvdqyrYXjtPNfA1247HEjgi5qNqQwTFQcRNhr8x4fEVyb6fhRH1WN3bb6yY2GeZb8jwS9fs5iSnBq",
  "key22": "5A4fZwqKmsLowAnhg4ZvPoQDGK9hgFT4fXK85s8eiWjLsvMxQMgxcQjzLmPYu9dthHHCD35ER7FvPRspQSWX7N4K",
  "key23": "ioewH3JSQbpDFvM2hQAefTAr2oAwdnqrazCdazGEVHkJQ7uZs7S5mAiropz3AS12oP5M3L3Ri6GZKM43jhPpBzR",
  "key24": "3MdMh4NKCuq4vWLNAAUtttgjPXW5fJU25QBeL6Wa67Wboz2nGZiFvvNvpRG8vGKPWnVNVeKWF5QWkQ5x6Th7WPtj",
  "key25": "35M3xpv5wtHoN53FSJbbCKP7h3VXb3BWqxfsK82rbK6h1Hx7jkZPetJfLuVCH5HrUU8Vpqgk98s5XpNey49v8Pof",
  "key26": "3tA2c2dNvsuJXuJPQih5tH2ihtb4Bxs2ZQXvXoWnyDzsBYHn8YioYxW7AxgTzs8gefZzxNrt25f97ivh1ADb7XgB",
  "key27": "3ZBsEwBjhJjgDJcV5ydRh2aJi6juVrT1Z93SoZy7iKaZP1BNx7Ygu8C35DKQiujPG7XcUFRDH9rDsswbDFTZsffV",
  "key28": "3ZCu8yXf7F6bhzTtNiMuqHTUbbi1v7WpYfqm4QmBTdsDTDb6z8hYyfuyABLLXr3GTjVnHttMZ7G7bJukgexs6aJB",
  "key29": "51G6ZpkgmAJJNgjCxqnDfoDkADW6jpBoFFVdF5eTk4iMMQ2aAEbQN3nscpRACxhwh8WYcQP24EMsofJjbamDuHqC",
  "key30": "3M8tTKxHxrMnbANmnA8RKnsphz6ictfX6mS38pyJvDM4SJ6i38eUQ3176yqHBLzBVDzKMrBZeAJL4gakUsccF1nE",
  "key31": "3MVgJRunGi9stkAfns5aHrw9bTuNivUz3tfWPhTWx8m46SabYd5vnLJzbt79xudhu1RvBPNMJd9xqF9WbjRuHYX3",
  "key32": "41FSH1uS6ZGrdfhCRcLTqcbqJv8SFghZRJqQcKxpUmZ3sEJxAvcFN4Xqds2NWsLHY9P5WqM39mYneyYTbTFKQUn8",
  "key33": "33vbuxcq8GLcnDxP1e4T6V5h9uJYVT7tAFMjVDRmCAnhWLs5tRS4VbSJm1EXNxRhAkNY5eB8EqZbWW7LmtPEzhpf",
  "key34": "4BYxpi5dNS85YibVywW5Bg7dvJuujuQ3xeHN5Ts2FDtGHhMWViG8DmEnXFDDx74acaAfhXurugDpFSHXpUKqFMje",
  "key35": "2Xu2eBDu2y7qUqSFbKDw1whunACvMpFzciQKq1vBB7i43gKGMzp2Vg5qSzoi4sLSobsVeDzFpJ4aYxCQPGX8iYJQ",
  "key36": "6763XY9mM1KQ3Vy6iJ8LSjjp8wbZ1pdzqPh3WJ7gAyHRC1S4sbRwqJXtS2VEJ74veBHaGivibM2HtLVW39WAG3SS",
  "key37": "3rmqNBrKnNW4NYVDM6rUYQx2XuvAAUQ3Xa8k5sNFkgPswzcajxvSjaxCZqfbBnvVgqscBmEg5mgwHyYjqQ47Zk4K",
  "key38": "tGL268Lkb79P5H2ZF4GX3WpEL5E9jfY7EuEUVd84UBVBqtdSQrwSjPveeBDTeQq1VS7GuUKmuoRAfJsHpfZNs53",
  "key39": "5b1xAtRoD429PcW8ZxhYHawFUrgkQmPgDtsxS4GyJRMLjyh8iPNZPXLFvHQ1Ktpkxtv4VWSFHjmgdPkUduLcSZdZ",
  "key40": "HbsbEpaATTcd2PUNZZEuuvZnQTDwS8hyQo991GtdGsUvPSidip4vNFT4tphtyfhaWBNtxVaBgZvi1y3TvhVsKvS",
  "key41": "KUFLVtHUq8Kt68c63Ka9vUsEeSAfrJAw1mVbd3CdD9kAxPDNtEGxW7tXKKdTMr4SHCkg2tDkKG23VgUQ8542Rhx",
  "key42": "4oY7mL5UDvbR2SsK2E32UDi8T5AeszSVet835AVpJJ2J9xTVJnynDdWyenmgmM4xGVf2YSMSTVmFcT9M2QFK3Lh",
  "key43": "ce4Fim3UPyuWNCFAu49KwNfbrvcQvtwNDPoixPxYuZWFCWTebt4m6Pgf1YmSzNbHCrBvi4cCHNmzDFSuG4XffXU",
  "key44": "256uCgaxEHq7EiCC6L24aHPUcoBGsBzq5GCJrcQBvKeKckZPmzWCBaxva2jaZ4aKHAXtBGC62oK5YFBpZAvMHgrC"
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
