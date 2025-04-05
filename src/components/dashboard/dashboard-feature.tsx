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
    "91wMZpTz5bJMDEsFi9yfXtYFiZ1xhmBPKmEYCEx4PwNmwn1PmKhaYL5srZKSSft27c6ACTXBKPY2iRaGwRzEijo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yEZcRGR1xJXrCgT3DvBwBmCkGyve2PqRJYohwCCstcQDiWMnNVMY4RXkbEForgGqc77d9wESTaDqpBu9MgMS8kJ",
  "key1": "35z3cmWz9iTzmYvNjj2qRWVqDqJXyiqhYa256zn5MZHCWEhnBp4hmzzbxfQCsMTs5gaAZAEn6197aTLk3Ysrko2L",
  "key2": "2GvMi8mcAwtg1s6mF5DzUPRVHy2aufZx2QwgPQgG5WPnVxr5PcnHPzh9XphKVkPBMnEkhmWe1JaUSqNnN1wbwvpd",
  "key3": "5fCBM4538JABcZkizPPwkhegRpGmZ5mfeo7aettVEr8BvQtPoszFo2qQEFt1BYqrrUxbdVwhVHFA8vZt8PTUEXjy",
  "key4": "nMyBnFkHY6ETcxeFNyparpgVTA2haTsMnUfoY346vPvfGWWXtBc8npYWpHgdaNMXHvsnrfvBGQbSJGRHEspQRHY",
  "key5": "3dsDcYz1wxBtVCS77nGXxAsa4Tanod9NpenBdAvLcG1FNFMNV6dNKvQAKMfaSCcy9aq8oNRk5Y2trJRvv1Hi97aE",
  "key6": "23WDkigrvWh9heBiSggzdPiFeapzHZLKtsXDyayMqkygPZeqyPNmtK4zd8oSwjs5EArin1gqmYf6vC2MzMzL8cqG",
  "key7": "4byrbTa3wvnSABzG4m31MMEN3GXSrJQY3Bm2QEdvD5n3DPBPBtKDyqZZaNn9KELSc9dXecuLivVxsubV8TcU1Xyu",
  "key8": "5vMXJzeXhbwq8FkTR5Yb1MHBmh9znnBAYow53xNiNRU5LhLd9X5VCe8itocjAHTa5oqKeyutPEzSG9zzSvtdVf6g",
  "key9": "4dTVgsnmkkV8JxXaUgsFjhj1yvotVDb2c2WkHLKVW8a5qbx5BSxnPQb69bYZrod3zXVaZCSYjmiKyzpVTkwoBVUV",
  "key10": "5CQV9nyK5AdC72Nzop5kJfNqWSyknTfEdshQTa4zXZ7sDssx9ZTW2XovNUK71pR5tM1m7s17nY6ZGM4H9MAyhgjH",
  "key11": "4MFaZQjbjR97Gxxv5KFMEmxYHzSYha6xWMACq4GsJCGTYGLTgXFpXQS5ddjABtCErDEpytwrjNk2iTMSmqbwiCU3",
  "key12": "37PzJFgpBxZoz6HhZcrxkZLRoaNyfzs7hqWQNgK1tx7D5wLy1Zcz7pWbqHH1T8ZcBpoQQbEEALBu3N74BLoMYBor",
  "key13": "531qj917a87eH4Jk4eLGbs9daonFaTiky6xbk8YjUggVx5bjVovU8s4tox3F94z3aW6SmX9WVauYDBf6Fe3q3R93",
  "key14": "6261tMgfnEj4fyybdkHrVZh725b7NS9QsqZQD2cKyQFzm1yd9SEwzxCBvdXHmPr81x1r838ntSn7dAL4d8r8b3Ye",
  "key15": "4L97yqqNhPmFu44u381dykqHi9BEafJobX4zYiwmTFNDwsYZLsnorLeeHYZ12DDSNajqPmth7vsByL2hb5mTDQKW",
  "key16": "3BuDKU9JHazY3Y43HhwzRQ47R6QPdqxBm9RVkHw3Ne2YAPS2MWgnWmZbdbaki5bqBteyMnjZSSP6PEGCH3Y4bkYA",
  "key17": "2HYL47KeBwDwuwA3txPvTrGwP2bjim2Kik8ZHTcss5RdzVxGW3b3hb4Cgoy2mK9YDFZp1DsN5ruajCjHF6J6x5N",
  "key18": "Q6MqU2DuobL5ojQPJbQJdYkVDxrdtEnWqtxN6GLS4M9uWYBH2fUjwoh7JSpx8YuDpeAJcApTKviu5KRLqsgxGBk",
  "key19": "5sBbHaHA17k8PYv2TeMsvwc21h4HuDdhhwH5tGyrFNxY7sEnFH49iY3NeymR9Scqbniz4QjYsENxMiQdLC8LsyVJ",
  "key20": "4wUSEXhTsrY1eJG7x1CXpRujE9vGgFvXs6W5UBs7i7UCqHMNmHgedLUtVkm48cijgJYaPiSorxPuwmxWtnjMS8ta",
  "key21": "2KyjgSLxEhxc1yo8emDpFMKpJFqEnuqCpL7Tb6SBLGtbDVj6ddeVvEFq9FZZsCPXcAEXTu6ZBWRXeDAzyy8FKV5A",
  "key22": "SSm7SynBSrKrPs4nFHW89hcirQDcSucMzN2xxRqQR4miobHj5UdXe481uy6N6HWHyyF1KmRJdEMkNuP3jZmUVfN",
  "key23": "2DUwWkG2jxu9ngbHheFFfwnV5qaPspjGh2Ryapjn3ABhY4d1DP1ocbcv3ybUsKB18UW2fj7Ny4Q6CHDZ69rGzYs5",
  "key24": "4Sm7p2wbaHkrmarFpnEvZ7MWRdYT7eAop6bZ5CpoUyvZxQ8ebxedQgm6AU93XxXhdCSG5iWNAGhZyfN4RrbQ3Xk2",
  "key25": "4NHT136oUeFZHzB7svFiVaYk46Lfe5YbJr7LmR6v68PvzuF4sXHyyP6p5NCQfzJKsvoJQ7VzXhH1sc3gWFxQsnQz",
  "key26": "2MDAMvoApZdWqbpoUWJ47zzxtCHY66zQr11JRdmTVkjyFyP9wSftxNFzmFH3HfY9pewGzin3Cfg2scYvSf4fVp2J",
  "key27": "7zyG37P7uKV3ifpAyJ7rED3GkYvxQ3Zx8ioNsbX2jAUEfohk4uDL1t5UYy4WceBiqbKapic5BdkorpSeppxkfzK"
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
