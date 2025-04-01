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
    "5C6brpUy8dyskHEs5tyZEzwMPUjGmEViBUnW6zUUfS4fYsA1eSuUpdXoScN4dnhWKcgvMdt9gMfKbKWVd3xabe4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4crsJajBX3BMQS46DQEaRnuqp1JMePQuSdCEsUnqPtxPuF8G4tdTT9BGfvfSR37uGyBMjZZpXdWMyLtdJMBptQ7c",
  "key1": "prj9hMwZDsc5HGkzJH6chM4vmp6BcVfSJvoYmLCRZLNiTQztPjsWqLrcP33tD6FFYK6BMnFxXaquRreUXdHYuPc",
  "key2": "3DoCF8fLyU985dSpC9t1vCWH2dk1Eeiq8yYMdC7fB5VGcexAYFhNFfP9v5aknuTdaYgKNy3kojWMZHV84ebdTQer",
  "key3": "2mnHa8Wt7M1GDSDjHfiY2KYLbbtJwpoSvaQvqnWTmU5Lhgzk351S6DBvScWTBHGJJjeXmRj7skZHG6gaDw6AcWHq",
  "key4": "2NQTbwJhJQAzbZbve1Q4oSC9rBw5KwF157iCDoBtUoPxN2wMiqPrWa8RiWropXDVX14YreECJwF2tiHHZB4g6weA",
  "key5": "3b2eBSrrC8ZHBZCLNUfq7Rw9eQbX8GExSGP3zaynEaTh7JJNwNdxBMbcqLRKfUTAwRsa238f8f2qcEyqpr5qRhuF",
  "key6": "3iLk8VKzPZ5un2gK5rdx8RmH7QbBMA7NaugmVkwRbBesYEFnWjhcTjhoy2WHifhbsFqz4WG4hbX1w51v3ZyY5yCA",
  "key7": "67AYE4j8WZC5eQ86CM4Y4gooQi6ennaWK8zHgQATqPpzr8xhQHbQEpyBfGmrosmhQbn5TtfaXwTbHZEesoGDmc4S",
  "key8": "3n7cHBxpkKy5hqB4p2HeGrzdSbQCHgU5VxK2k2JzrUEyTCRKvD6CeAjSUbwP8tWv8SCDpAkJqZPSEtKxUmJmJc9t",
  "key9": "5hXhmgJ4JRZAvchm3HnjeS1RW8BoZcV1VxruNH8tchmjgehu4vGWRTDr7RPf9AGmRdgSZFe8vAhqVREoDp3fS4We",
  "key10": "9oXvX8sW9KMT5Rdc9CSa4cTfUYgTzj2KyNveqFFRA33Ykem3JYyHPbfLB7hbUQDWXowEhetmG7Wf4vVf61LsW2T",
  "key11": "45PbX9MePoYREeK7zc7ECnDerYbdPVBR7WVdVCSVEhSP4CQXLFRcD7pj7sD4FwU8KJLbyzz38Zbwtg4m9MhhPdqx",
  "key12": "5Qd9VGFEFPpZcsXW2tYasug3ZrsX1wAnTFnCZQvXUGaCqSgJZsFbcUJeDn7YFzsUvVxGPUmxAoFPYsyuee57qFdi",
  "key13": "5F14F1c5kZ9pevfhXjNtQ1iram8ZnY42crByPPwsRvVwUNWxt21oZbPLdfr72WXhZMfgJKwSJmmHJf2muLVPGkiG",
  "key14": "5Y4E29PB6AC2EKCm29JyG5ZjNRjb8SDxBtAyv1rkHQtqutZWGVbanafduaQoHPMzLw3L3ZGGWeGMxhXsnBJFsQCP",
  "key15": "3pUnbbYHZCNi3Htvk66syfN1eAMe8z7skwxDJVaSPhNWiFoGsGc5PLqneeBk1wLoCcpTGcbUuWTunJ8aZGWgrfZo",
  "key16": "4QYPF9c3FFqLXRodFV8y1JXoqJvKAzaohfKm6Wu9bHxU9N7ivp1ErarggU18aufpXvx1c1JnH3XSc3bzWQCFEsKY",
  "key17": "H3Jy1TsWsmDFwSywGoJZ5Dm8MpbSLtUUHNY14fTmC28UWafaroLwWuB4oVcUWTaHAqGUapy3NhpehbbLYvbeirt",
  "key18": "jds9vYGKzqfA16nSNb3k1XjgZg1iFUXDTsyo3x4Qe7cRpnV8tg5XeYyXiQpm1sSjzt6mmDPLFrmD4p74o8HREha",
  "key19": "39UTVNc3aRiunZ4M4u62gsAy8maTPa4DZc7PAVTntKUju37gNTB2hu7HVBsP2Q4KdiGPwsnEYy6A9mG6iMAS2Fux",
  "key20": "3MQPS4dr8NcSXk26cvWfW42czks5Li8RDQQqVv7D4jwyype54hY9KPbJnctCRg38BPDdYDGbbiMWNgHRVjboLXaX",
  "key21": "3jSiVi8BDfvJRidafbXYhmhBRouUiGHycoWuRdqv5u3CLX3BPZZsAEzYj33qH7LjVp3EiHq7nLAqHNBHR2wyQoTE",
  "key22": "3bVsYs7rdZph6ei19AK2fsQAQjbdMHwFFtmoyaKDbMvKsLv6zhnwSpSc1Zzcaa2VhehshJarocQnwEbiMDgWrbAX",
  "key23": "5rSYo1Q42RdbjavkgcGtkjszmKt9jN1z2fQQpxc4vWRtN3YHHiFY5bBf4RFsKWpkqgwGPfWYbmrmbCGfYdBHgXaa",
  "key24": "63vEyJFS9ndKMAz8zNdBkPzzAadQzyr1c5LUUw8Emyhb2k4pecoNNiDiaxhH78RruDxJqMueVd3HhMxbkwEtXDsk",
  "key25": "444mjufLN5v74NP1GiC1rNBZq3WLKTZmbGe3rsTZCgmb7156fY71gYnKPTJHxJiH6zT7KeRfDGFC3NPMcwzHyVyE",
  "key26": "LRoSGhBzzxhuNdExahkiR2SwQWvBgd3o9FYvXeWtPUvon4udSTdvBC7xAQGc7EEd7sWVZH6GLN7GFb98v6pGmqH",
  "key27": "4v6oM4qqhqVEpSmsQyBu7X63v1sn2STnVb3UtBh2xDzkLeLc2icfsJLJE2qvHeBbVEbix6T8Jg2SKcCCH4UJjy8z",
  "key28": "yvpdHyL7eRQpHFVYahGfFZPLEWezixvZr7C5af6bU8h9rBnEB8uEGZgCJEsGHZcyKp4Dc1CACvi2JW6jd7Tt8sy",
  "key29": "4Ue7apMUmSLnYUnWG7S5r2nPzTzoqKs6WMQhKugzbBcggUprEzArAoy7D5ymUob2PV7m247cZhy6MvLkuk4YDUQ2"
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
