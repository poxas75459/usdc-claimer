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
    "3AnKnQPJCQuwGzGmR7ecE95yU8AfPtntXP75JaMBynZcRV1mLqW9GtjcbbTtoVjFdLCMLiJCTWGbtZ5iRJHqSrDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KshdEEAEq6d2k1uhxp21UUJdVSDHxJnJrhFBiwtGNRfKPyh1o81DSP1Y2Mcpdc7MJczBZgiLsWnEeyY1tudz36m",
  "key1": "47w8wk96cQ8r5vacsoSymFVZovCyCh3uiaWiozYXsMtqw4Xh9RqgGuiTNm7XTe7SPJPEdbtr8RtYDCy53ikytLja",
  "key2": "4pM9sWXu4LsAu1rQva6vdh8CJaefU6JNq8RhrD3pbjuzN4pgonCp5iHKanPndSUmi2YegfrFr144CxjTbag4yU6Q",
  "key3": "GjEZ4Df3EMMw7kHu8SQaCnbr6REGeAtQyuvUJtWkun3g3RWBMvAa28cDAToHre8tncjvWoe1Bq9S8CvPFEFNLPF",
  "key4": "3U2AHJdfAz2wuRzKpFL9BHn5kQ3BnzE8DZ9McLt8gnpz9YjNi7Am86eKWyfLHpSLzSLCL2HXNexagqZW57evGf5",
  "key5": "2VNnWRY15eeFEQ17uNGDWN8431TERzHb2JdW2g6nQkuc3XkXv6CB9cARXL6J8TcrVk53Luujdw8sGTvirwCKchLC",
  "key6": "58qFgTe81XKrHGTmSZrMLWVi9y6SCMDD6dDbmb87h8rqhgQcHFWucZatUGcQvvmiWixz8PgkaNmfRWdDdCSQmR84",
  "key7": "3z65MErPqFcFYdByurPtELUQuqwawgYwV3F34oWenURHNTGf21WARpmv5cTBDZELYTBQvuBtvm5LgftSMwtwsTrc",
  "key8": "4xndNKGdsRQLetFErrApxj3HSUDhDBKAHeguD2MFo2NxYEWmKVFqfBk2jQVJ2FaEcUYo4sfBe3ejLhUgzuyLywr6",
  "key9": "Ys7FqUqmp66w11kduZ2bcASukN4MZ1oqjsnpBJXTDQ14tdCxEM2q6Uw7LcFfsEjQuhG32jHrr6Ufggc5qL4Awz3",
  "key10": "5TiMqTCR1nZ8G3x3Bq9USQ4VRKo9xP293zBR6j4imbNufq96eMrym7ETf8NoAyiBoAt7TEKyY3u7XNv61wpAx5FZ",
  "key11": "4guKEMCXiYFCaY4S8xaUy7cipihERSAvFjgLUCyqgctdnUz3hMrp6ex2LCEvqKv5e7q33aNagyR4t9PbLunDT7nW",
  "key12": "2wA4Let9FAxE6ZWFq6oPZ7vAg57chPC5vb9QfqPUeH77NqprpbFgQTZzdi91rQ1pWeUUW4jKzfEepd2kHpZX1y9q",
  "key13": "52ZxUypTBU3kQrgaoqPQBrcY3oQmpXufUCyVB5zvJKNkj9Tr99iea7eenpL99qoviL5nTz3v6czoKwfA6auLPrdx",
  "key14": "28uCjk1H5wqpEQNfp9VopNyrHjSrArcLkRkN8s6cHgiEtsGNkwUPbebD8YUway4Cq1BPeLfbhjo1oGLwfhvFBV6f",
  "key15": "2BzE9BbpZJqQVogTTXPn7zd3dqbgCz2g9zxEnNqkmqCatiKMCLtWRjBfZeqfQcECzzMwZ1DXwfMmysmw9LUxSJKB",
  "key16": "fdWN1g4fnDMgLoLy9hSmNuPtMiw5TB3vU8AXNeLQHDGnCd3Q69Jzc9CuFbBiBGgAaDj9WxEgo6dhTGLr37z5MqH",
  "key17": "A5RG5oQiRBroZsjb6wa4jH2P9pjKdUZWYZWVxSfgByZAqUjVgh4gv6g9EeSntr3cGFxwCj947GHeMWu6PBLcZ4e",
  "key18": "ZWRqNMyVRznNhCMAnB2aufvfbiE9KdiUwF2hgA1bSTkJPqPBx6qu8M74oNcqQTrECxrNjvNyNnm4DLN8GvsRAaF",
  "key19": "4CSRbYpSihKUssrtpQAdATrwHMKVryFtq4pZV3g4QrNM4WVFWBaPV8LnerPqDAAVnnd24TCB2mqtQuVVRzjTWdxb",
  "key20": "YHhcTDuF2oVfF75ceEJsep5M1gPyoVkjUqber3wuifisyPjB6zqLAZnSBQ1mS3MC5UaYGbdFvc4ZEjhHZGkh2bs",
  "key21": "2zcPT5EHfAAsSVyGF75SHXkG2Ef3i5sTrgjBV4G8rU6YUAC8sHPodAutTDyhLEfj1ahjjtr7XvzdM2LUnHHoRU92",
  "key22": "5cZhUFPZgUeXgaTsxA4P9crasqmg8oveezTCzctXj9mshN2uNpc8nU7qXzYWg9xZdReYgkNtKoHTUXiJtTDaV3gv",
  "key23": "5iEqx93xQeatFbCjbWivJT233jh9hcL7rzGVp7rv7qXvs53xbs4dbNVBc7C5znG4qF5aQC1EdbVHNHBdtM7tjWQR",
  "key24": "7WR5JhWe51UxkMibQzn6rceZSxyq14icJeHncrran4kUGybfwQDREgkcEhedeYJCQQTBvmvtvFJP6Nf8WQNbJTP",
  "key25": "3kGzMfEiQMhtGXFUzyCa1RYfZnjK2jPxT2k6E1ogFxfZF5Mx1YK3zDJjcyRAM1JUW8CFbWfEAhWLrTjz9aCqwaBM",
  "key26": "wnvBhp66jqkzECjR3HHb5G1fY8eTsb37bVH4ioASFSDL632dvzuWqGiujnm4ByVo5MhR45qxZisVDuks32CPeFv",
  "key27": "2zvDFJATjj2CbbhoGsdGhukfLyGSjt5JGmR5x3mbGeUPKCpNSqBptfvqtdcndAw2cxdCN8kLrrA99nUm6dq2mENp",
  "key28": "3TULrBctv9VmTriTkAgFKkK39hZKDyNcKfMSEaCzy92kXxQE8pTk3m5dbt1ZyffgUFRwk6jkAomR7cxm7kFWxY2s",
  "key29": "4ciWy6vEndxQnDTsrnL9Fyp18mADZs3LrmsKqsqmuWcapYf8aC9nZcYoqgpnQYNqXM8aYCxodebiLKzEeFCiGZsX",
  "key30": "PNoriSWcjYoHbP7phzo9ALZEjnbLLSqQS7v3sxpoHzMJq9GAC6yrWCCh17EA9dn5kJRqBtatjyDqtn3Edc6Z15Y"
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
