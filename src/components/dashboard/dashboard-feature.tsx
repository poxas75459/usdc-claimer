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
    "36jpYZH157TwgKY8bZpGabu6tF4BrXU8aPEYDtZZDi5EFt1DYFBAriT9u6d4gKv7dYZoQvqaGAqetBi1hL4nvibH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MmiZR5w8Q8i6gkaQv1YDPh8i5MJVhvrzZfDNyaxFm1SUPHA1wUrFhrFGqmXCfhGT1NnHBDcBEzCVorP2ahu7eWR",
  "key1": "5i6BcBnppNnf8WTKMdSwG7bE7C8mE5ZtCsodce1NcccCjm6a4EwG2KN4BoMSFa5dkhVNYSz9pKrw4Sv99v19Xa5u",
  "key2": "2GmfpT8uZyUrtDiMeE3ziEayNXF75M6vmYLpdZgmgxWvb5gE2XNibijy9fJSzB3DLPjRvTxsZwCJExcCAnuvHRRq",
  "key3": "2pEKA54FBTmq6MguNMvbV3gTTHn4JShfv1mwegHX42GazNcTaK5eo35s4WgExksGEcQj71NaBPgkjAFhJrMh9Po",
  "key4": "2KXZxf1X2RWvnGaVFWW4oNJymRAGTGWVR2RTR3wKutPmehHwCA481nC71ViPXT5G1XuqvEZZHysqqPSKRT9Lcnhn",
  "key5": "4uESC8CZMm9uEbik1wam1YqiypRTDp1KHMhJozH8id7s1jnKyxwbeR6DNwT7rvDUwidimjfzUys9e8ey3Nyh2bgB",
  "key6": "2Epk8bP7EyXcf67XqybdfnFd3LwJaUe6uMjUqn981ikXD6pnJFinyuAevCyYTBFbaBxjxaX79gYXYFW61XQVmbgf",
  "key7": "2ZJsWhg4o1WuENfujfqvJzLeDndMSugWwNobQsnL22g4GYigVfL85HKXuXRN8BoawcCpkqsCePGMcfExJ8dCuhxw",
  "key8": "3DcjMAKojQy1Br5YTaUah9s1P7hSG8WDSqiFHijCm8uVcAhtF8TecgisZkReQWpZePvDwdr7XE5E2sExkCCMLoqh",
  "key9": "2xCkHUFPRT1xHWwKxSj2PYoHpFtpCedB3tTwe9eQmWEaM1mzxvvoQwdW4RSte2p4qpyJkuUg5pfdDfC2kQwtVpWM",
  "key10": "2oBWH4SXphiot979zLuCfJb2aRhXTxWx9X5okVdEjz7Y41476RY4kSQQwe4q7dtjvhUWnkuG9DCQTCdhDsiKdd7i",
  "key11": "DU46cBfWyRHfba4kwEu2HkUELRkPeHnRqQugwNxucZVo1yxuMDWj68R7bA8GYSxV1mndZMLWpVahyygnqEaYQ6B",
  "key12": "2nbiq1fTmH3mrvBUZQasKQc1A8ZaNNq2khN56gYvs5vq1gJxN4zb715jYnAgb4gehTbMdRNu1bQrLM8m1Vcm2PML",
  "key13": "37mtyVm1VsHPsWEFqGivLbBY7ubDtWsXr2y8AXBpWrRUtSLEzr9bWYVqWQVxfKqMpjr3LkAH1eAua279WRxWmQin",
  "key14": "5j65pakV9UkhdcJuAZ3N8K53Y36yNAkxbWNjgJSJh84gkz9vKLZEdoB9MbwJquNpjxERfLraKz5Z7Pw8Y1Um8Frs",
  "key15": "4tbdTnbLQrBwzPD3QmK5Pm1rWVeimyzTZdAy2BRdTu8xhVRYExKyGoAH76GnLqPBAicQ67crtjVJNS9XH2a5tuNi",
  "key16": "2Q4X5jwVc54RpkmBh2qmSKmH8PhdVoeg497qVTDsDJorpiVrbFYz5Jwbjs528svYdF8bTjNv5St584Qc6tTLwULd",
  "key17": "2gsYRSre4yroqp3mX4VmDouJ14gFKemPB6GqdqCKfjYj56oeZheheuwZGFCro9eR5bqqbEMjjK3mjoTftVn9ucxh",
  "key18": "5HdZe9cnwCw7Jtg9rb6eLeYzJ5BcTwfeZqenUxPt4DpT2NM49JHJZyXABJ4ej4VKJJXXRJciBnxwkMB2uCodSfzq",
  "key19": "49LrLPiifH6vHjBkvjqe5TMS48mzqUHvUHn6JSu99gzrVKdDwF37hTAcMnMWnG5noWQZz2YL9zqPbS6NCjMpLBkJ",
  "key20": "2pNfE2BP64DAUX2RkeaFBppcDHU1bjWJaxrVKfnv6E6ztLhzLhnV83fQx2pZpiNS3QbLg26Kz4wUoUwNV4joDu3K",
  "key21": "3i5eFc1QKucmywqS1b8ABWEr2BwSmgPZxR9Fk1Qw79fh48XZ1hrPt2way3dNHyMwnARbEqZHewjgx3qXRrdhdbn",
  "key22": "2UXsR6sHHwd9pMKEyKMdy8eQ36jgQTxSCZ6ZHc7hn3fergsFxVSxJStXwf7fsDRgWGY3UMAhbEPUytrsVDVkeWAn",
  "key23": "JzpGgCaJ5RKBhe63HfSBcgL1GPaFyqyVVWXXwPTYijW1cVwY56oEq68FCYJF9jXTbLJUDGjVcbBUN7h9HekXptE",
  "key24": "4EGAQdyPZzSpdGWPDaThXS45UuDbFoq9LwRq3N2qKRTB5YEJp6QyWJ87DthAZBsdzAdJeZxFL3izcYDK7MK59PJ4",
  "key25": "2BazrdoMn14XZGuqyzBM5S4SJdMNPFkuCQyVEhkt8utGj3gqiYHy2xEjBn6spck3VRjgLD4HGS7LorzstzrySjqp",
  "key26": "t2U2GCp4voV34Zbh9UxUYQPyxEZYZ2RcWRh8A1oji394V29TVUDUQJktg9h9patShqcThcLVaNwXNxweEPPfN73",
  "key27": "5kJ41bBoi6yH7T9ft9N7zaFLks1KnrTCPnRQ7SGEbMh18kkYJLMRfYY3M2CYKqsU7bMHxqBmhG9sFtXW8Qxj4gVc",
  "key28": "349Baq75VgdpkMAmgpESfYxg7uVLjn1zf3okAqRFvEFxv6p3vmk4mnj2hpfcHahomPxVF7fGyV8j5BHrysDc65VH",
  "key29": "5qfDzmJtoVZCNxAvmTea8DvTXoF7dQyu5pAXeC6Baa6uqRu6ZmFZ1nkhtUKnKoyvKc4dmxi8AWSekMruhip9Aq2z",
  "key30": "Z5h4CNeaGE7HSY6mAsPRMQxP54wvj2iJQKvSguWmda2AESLUPHmHLN7dfkKYQypBbGGwur1Vjo5b973UTyMVXhb",
  "key31": "Unpy7wdScy84XQK9NXPk6Qz42vQW7qLZKJhtgsQG4rmDvQbQDGAyZwcT6onV85JvefK7qynPTR9yb6t6m3aw9Wo",
  "key32": "62TdvDbYnNh8hpQ2hXhgudCGLqFpkE6FyuCry1TNxCpPyZs1vniLfpe6wxMDabz2hp5EZQ2RT9JjDXhuV5mhu3Dx",
  "key33": "qKmbcGKCWVKSSVg9NjPS7pzNmf1Frs9XQHpSbtjDa7nzTcKTcDRQ7YRLVw8UVWLUmyacJc3kaSVqGhPJ8TKYFLN",
  "key34": "sqpqvJUpbZ8M8U6tCiBC8u1BPzmtMAvgE9YEqMa1Uqii1emLHAsjx42ngfy8zHxkYmTgTTYSTMxTj6nZf2xX5Ux",
  "key35": "5YfQo1y7h1nsx9GWLhA9j2Aq3B5wAcue1Q8aT7EtFp8H2yAUA5Ptbb9gKXKUUsC4zw5kxq5GLmxXR2Vj5FQae12P",
  "key36": "2jrawdqVjBh9mnPrhM1ojzDGxKic8vRAoPq97qCAAjBPD9vvkzmzpSh3TQBBcmMfmPsyNGCcdg1SpL247B1YUuEi"
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
