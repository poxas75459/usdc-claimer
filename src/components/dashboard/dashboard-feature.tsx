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
    "EwrgCGX3QvKYvR5wnLfhDKpczxjXaPyhGHaZyjDyy55owjECKoZ9TDjgS3mJDF8nMagLLHZcy1Sc5RYDSn3MoTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KLEBVUaFYCkChD8evFwmVaZ8JsqLZah4MzwaMk3LxwA2KQ4kQ45E9fWR4TdxFVDh5DYBepkaq6KJZuZC6xoiDE6",
  "key1": "61D5fehJWZoHzSWHEkuqmqx3C3kY8me3svJSDZsTQdgWbCvWyc1spNTg1S4WbPEDrov81X7wb6TFnzAxhJz5tspa",
  "key2": "22D5TgoWae2u78eW111Lpkc7YGco49B1JABrmTsQQuoJTTZB9PngDQMQu7h5KvJhFa8bHiZGkNCBhA42NXCYChoH",
  "key3": "4Auz7zPFzcwzJvN8NAa3QjuAT8pQQGTXXeE9TaUEbGBeaUKJws7124cwNwooWRQ4MGoEJr4HfsyPNWUwFtqg6U9r",
  "key4": "FdwVDJZQGCu4KFPbP3oKgvwCDR7aY1ep6cBpe6BhHAQrayp2xJCpWcEiefGRmzhDyWd67cAdParwdJux1dkyM9X",
  "key5": "3fPYdQ1LVSgtXqrcZAfKLskfsNqyzWV6AKbG4PA4N3nwZKgoyY7gf9ZDZpXLFrgtUZkE4ebgRBSkYYExEFq79su4",
  "key6": "5ARz4Bipfu3Ys6bsFNaFwLKup9D129ZTS995KcELvG6TgWpdsgU13eetzpxn5srooQzy2ND1e3NFDNkGRPRZvAbW",
  "key7": "122b5buve5QbsWAnVQnpmQEa9a6yC4gRY9jzaWBGfppsXEXTzVWTEMremPJhXe2dBZMx7Mcq5c7vuUpJ3Tqz98mZ",
  "key8": "3PWA13WwFfjBk7bpJ6nVq93nhUytyLHq5hiASV94ijCdiXHyybfbCUG7r38WaTT7woAZpXqHeoJPTMQuuByhTmgM",
  "key9": "4aQtw7YQQShebtqeuQkE4vZPjqne8HRKMiC5mMWQ6BdADS3KV6gpdb7yD1jbtU5wsed1WySLS5qa2deSBNGdgtcr",
  "key10": "3p1MbV4PGAJysU5Yr5UaNnacmkPoQ19wJwnyPQDDuFpQqzf7bZyqNzRevvVShPoEsoNvJDRTCYs7fdyRoZVoRZhr",
  "key11": "4NreMNddjB4XbbrU5eTu5mez6QsBhVByM6DZ2bPPJr3k4cxe67FDpRkuxoHKFQ9EHusa95UVouPt5cZtxmMCqAoB",
  "key12": "2b8SqguqJCnri5FuTv1o5F7fiFztj6m9ga2XdmiSxUosBStQAMw3gf3cxuv61GygvSoN4oWaLLa9yvme2waxDjTQ",
  "key13": "5JAk8at5RytGPTxxMuoEaqhz36v1jqys66gAjCJdVunBYbiry91zBoHjBmbkDaCwpb68f882361cJikzeAXRPLL",
  "key14": "CfpxqPBPnEqPMeLkSVmpW7nrzRRSqeWs6vTd1WiiXsmmmyxMxoYcNQr5tfAoTGZXaPbDg9Yu6zPUkAE1HLLihE2",
  "key15": "2XJjwkNb4iJQCdgAAizunT6ZRTtBsFfSGxRFdGWda5NPGFUFgNjxMxZwx55EqwqFu2e3SpDGSuy2df7L3hYAKDBh",
  "key16": "3XSAfSgW7MEifRynhe4oSN5i5yshge6o2gbC9gjxKyXuqCbusa45QuHwES8C1scckYh1QpxnmphCcEaMj3Rso3Dd",
  "key17": "2LeGnT7af3z9zpSRNxxYHiBuds2xcMtLvum43gsTbhBtMrP8XHVBiHjDokGJz4JQQahnx839N7664SptCoWZNVeU",
  "key18": "2pWLPjqptvtHNPjJaYQTTutABq4Nf9pkxr85aV5ZRqTtnqvM5MBYLJab4SR53W2L5xy7DxUGcpVr3xNyrBDrkzie",
  "key19": "2hU6pjUeg8FemGb2Kud1nfuGT9P4RehfjfaxLMY2knD7LCUKGJcYYeTL9XqP6cjzTnAUi1XzuPDFuao78WbRzVYK",
  "key20": "3gLBRkTPwov5Lk3BDnk62J312JvJydLrgfeQ3svvEVYoQZvx4rUiTSwvGrF92RjzSR8aB74nBYUvZJL7Y76JGgfu",
  "key21": "4CUWyd6wVizCLNEaBjk9hwiqLwQt3HpTGk2j6HvcJAdsd385ACRnBFaf8bASVegbXPBZpD6mEajDt91DBCJfgS3t",
  "key22": "4eiJjP5YjgB4xacBVKqAoxHdjpeKfNUhbBcHvKwMEQoKWXs2muB8NKg8bNH7VHouM6ybHQmMYWkN3ddhSULnHNrb",
  "key23": "3spF7TvH2RZ6MrZt26nJzsyhCFzuBHoWNjnDTL32FPtrBVGriCouVzqcqeTLW9ZpeGeEibLDiFr52eNLAe61R7Pb",
  "key24": "5ax7qdSvvJBBTjQiNpokYDenAu3mkjPDyfCe8Eht2UG68YsLonPGA35nCXFojNs3VwhS3wf26hdhxuMrnpRnsCAJ",
  "key25": "5bxirHfB9mLgGF1Vp3qyQUgfYkku3bXXkgao3ntmb7z34GedABj775PgcjukQ6VDEBTPNadiyQuc1mdLjqegTrTj",
  "key26": "42pNmRJyFcuMXzmL59zVVLLwoD96oWRTDRHx5a2cUQpDuFaqu9R4AWymKT259BK3KMBmp3orqfaEuEzWhooGonC9",
  "key27": "5xmQnFsUspfnFTq8PrB4PJ55B52jj4tDApp8PgMFDDFgETBcYv9R2iuDKWJScwEEGpBEDRbEpUsN8qfQqZfDAHfZ",
  "key28": "4PQxJPpWkXEFJuLHguPoe5kT48RVBeHKxKGwGU1ZxyifHazF3bc3156spqWt1Q7qaC6UREZkNKGjk7LmjkQT8sfa",
  "key29": "2AUwRXH4BfgvyaBbhkef37mjpyu6PNqWtd35VCNA4r3zH129pBfYWXm1VH6sLMC7uGLEujrfGdG9W8DsPrdazvmp",
  "key30": "4BdwSLQB8LMxBdQFNz3snmm9vHh7ZqX9xWrb4SeUywLGM3uvAH4pyDFYxpDwS9MEDdZBjjrhGFMrmyGqSeiH45qa",
  "key31": "5iDKdCnRooZz1UxK5XAGvVo8a2NpK7aGqBzgQ491RRfgLeNT7fBMEKAE7hsnmApcerrCXPHaSsDZwdmtRkVtyqJ1",
  "key32": "326i8NcfzKSg2UacvWbbYBys5uRBy5WL6LEKkzmn63o9tdCGDxgaFtTyiPLqfcrHdpUrSTVJ1UagosJNxBDJAA4x",
  "key33": "63FbjGSkqSSNtm66CN2noYZDRAAD6VDF9px4Cs77f2TCuf1Xu3GiB9dPfrPKmNEefDuu4Ms6waMrKwWTLGs82kdb",
  "key34": "2hm3ZaZvYzieHdymE3DiUY3QurhYvVd44iqXGFB8PU2C1tUsZvqdqPyVNuW4xRjKNRZoCkNMP1QXj9xT8sFPpdL7",
  "key35": "CfBkuzn9oA8erRSBSMmYqJwxVYNfwwU7oTdKA4fnTGWZqYJzqq8x5fp7hhN1Fh1PYsRJJxmfr2QKRSvoutDD2Nc",
  "key36": "2wFR6keokuEfCfx4AcFKkPLSU9pbkxT9Ea8DJea7jcjX61iE93hiCphnu7PqWCCfsUB59pXzRNkD8NYQmpER2Rdr"
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
