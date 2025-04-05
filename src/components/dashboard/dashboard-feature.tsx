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
    "5YJj8xzWHUb4AZvE3VcjYbh28bpqfteTKnFoHKLuuniT7PMNZzYrP9mGGSxAEXS6ZVSTY5C4nXumMocLndizHmGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rj9bXq6SPypn9HoDduFEktUJD122jwJ3CSDxe7fjkruVSX3micvMReKNgzkgLVoxqU8caTpuwgnutXjgo3r9xzZ",
  "key1": "3sFoevveHSGHozeUtDCvDoAFZ6BpCt4uN6ZvQqdxbfQ2FgvijHdfBSU3cKgBApNBjJ88o8fbw8tEDsYKt8GEcprB",
  "key2": "64jKCh1weCtTjJwvtgq6z4cGWH63XRw7ffURpNo1NrhNXFNtuDF5ASZtAmZ2Lj2DDy2H11yi1pRK2Nsg3nVe2nyE",
  "key3": "4MoWr5NXhDNfkknsyFqoBYqstdY8MgPujCkZhvuNd8F8U3DvToMed7sAJwmubR9idcxnihsG4wtWPPtoYNedDqii",
  "key4": "2nFzdZeXTGtNdAFJYRqcLekTfZKbwjbxbujavZ3DJooBse3qhuM1zuCwWBmxNMNqVswFdz5yhr3y2GCDt1A7N5EM",
  "key5": "44cUj7SKUGtaFSt41D2Ls8XfChA9rsLY83r8PmGrGYANL85Mu2N1wfczRjP9m29QWWTkZ5hM5HM8TRNCjHdryhTo",
  "key6": "3X3XE8ptcG2VzRFmGod2ktpSSAt1m5xoGo38a2E5ZTW1G5KTYHoS8Z5m8CbxeDFuqQmFrdtsMd5yqoK8BcJmj1ez",
  "key7": "366QtRjztQWazAkjmqZvDGBpeLWRiZVFYkTCP14Jzczn9BqTR7rZHfwvauZ86B11x7v9LoWyK9ZEvFYQ7bWb7nLT",
  "key8": "2F7tPyjbQQzia8UVbFb3nfemyropEUfWZW1nuymiuPZDyHRR1vhy3fVatmuV5MQ7rs4erAoEXmz4TqFdFJXsjyKQ",
  "key9": "xiaHPALVN3ek4t22KjtfH55DPpqqHy5ytS2ij6pChaNAz82kgxEsY2rGhiRj9RA8r56tZuFsnAeo5a8h1zBvZE3",
  "key10": "ncnLZWeUVt8edA9RYny4XYuQcTQkLFPGZYY9pGBhR6Tv5qWDQwmwEgyPgFkBnAfaFwqAyRAAKHGKgvRJ1TQShdj",
  "key11": "2YoCBAk65JKHKnP2wmJ1yGLQ2nasn2JEPHtaCQwh53kKJUK9EKNbYKXVtHW5TZuFHrerg6NWnQdsTeJBSDZesPe4",
  "key12": "561pzgNUneEMkE6Qt22EEphvFCwfN3uoLP74sS6pZDkMuhTVsrUExJQxoXjVyNm5SVDpnNJiS3VGRA7eC2ndsHei",
  "key13": "3zN7bWAUeJBjH1pBzuXbGAgU2E46u8mD8S1Rq5aUZKNL4zVEm26GJiSG5DECTynAiE8EBw8yxkegmbh6ZxVEBLDs",
  "key14": "5gcjnUBTc12BRvvBPNLZXdSuokibcGMYzkDdntiRsmN5s4wstdxkJYgL66WNt4NRHrKbtC1iSJBPS2jEQ25woKyv",
  "key15": "5wY5YQPxratUW9djfqjEXZhA81FpWQg5MN6RHw2WowZtvdXZQpWtP4E4JsjX24aE8dpwsLHWuo23rpS4hckbomXJ",
  "key16": "5wwcitFp4NodYYhADDJj9i8oMpFVG8BqpCMdJWd67AQEptbcMnsKmWmbQ7WpuzzoZuwvkSNY3XcDkyPe3wsscmPC",
  "key17": "4T5jPv223A9oRe4nRBAfgiddS3pAWoVV26hDcHkuF451YRV2sCA2RpqE6bbFt8HW2pnPVq51j49sX3koJHhYQgV2",
  "key18": "5ocjqNq6gzykq8hS1EH1r7ZhsqAhyRXgyGHza45PJmxsVtvSJ9ghBBAtdCVRwNj4sUn1if6xf4D3dj2CC5n8AKGH",
  "key19": "2jaHpSrwx3PkA1p2RptiHXAgGtt5TVLZxs1KaJpu6G6gSyFR87pFSECAYciZUTjvUfLqCJMYAYwkBr7gYcZ9VEYj",
  "key20": "nfakWTLFdYLCBGTWmMp3ccfAVqHgHABqcHHF44f7scYQc8mhAXKJE9G75gsotabEzc612zAgcHPyAREcwabfs6e",
  "key21": "62tch5QTq2n5x4uUkuCcFeVfJLFgsXUXRLazvjxnSDnTTe1qAczfa8XmTE1extuhMSFKEAbziPNVGDZhr8o8dQnC",
  "key22": "5di8rnKC3ApWwrmaqFGuF81LCjKk1vvQCdCfnYhdVM5PPtJdqo2ws9F65fR5yGxJSJ963jUDkhNZxdP4XAH1GCMV",
  "key23": "5SiYac5z5eRRZM6R3mmi2uc229FJd4hpDyxdEyGY4LCDmnVRCKQNgzjL99JNCPmAgShT7KcHGAaj3a314M5EKxFK",
  "key24": "44zwG5tK19NaCL4YxFTqH6nhewrNd8BGEibjnU4xf6BVfLmHqdgVj6EwarCQnGRdFUywbLibgFgwQBXpVC8cZUwM",
  "key25": "5JqdmPyEDa4PqVs4KjjTRpZNSXhTQxtYiRjdLKZfKwePYqCV4so4hEJWSK7SKdVEMEvCRj73YkJGEVmzfJFctcHS",
  "key26": "5Lj6U1d5zrxB3q1SxjNCR5yy9aGmptv2sh5kB6VAnFDMewoJdHyfJVRrjgyc6jYbHDBrSRSJMB3z83fsLUdLrJ5D",
  "key27": "bVhkZVJ6ZgoAbDXkcrDM4Dm7h4brpJAqMPrSWRudQvbnjSKHfq4g4pELg1xNT5sRqMBixmfy2pVXtYRozVW6QmF",
  "key28": "UVQHQBHhtyG1YV73tDH9zdKGYZTHYihYj6rntrdYBWEmri6GgezcarNgs1ZEYGrFviXbhyQyDBUrg4bT2LBVo2j",
  "key29": "5bdqMuftbpmfnFcg8nM4bGam8gnpoaS7swcugngShXbYVBYAUDhfBXrgHt8xAGzPwyTMMpKMSrwEmjRZAx99nfMM",
  "key30": "4TzjTeH9VWePeECuyBB7Nyu9cVZLMz37gsut1FPCga2m8tpzRtAas7R7n4JmaFoDRpvVFMg2YhaEkivQ14zmCkJU"
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
