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
    "49HRF3K8xv2JxmP9tZqCQ6q29eTNhPqyvZet8wcoQ2yUWFMRWq2NsG34ykXSxKzmWgZZYUEr3qhMfXQpPmEhJBbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mChrSzDQFn8s328bMUFWosxVjnxzX4rPyhvyymbAQ7X5AA6isBBew5pkp9RZZznDQ64uNG7TQGfYHstdxpvS4qF",
  "key1": "3Hqwy2p4ZXK98Vc7RGASPjsuupd3Wkuqrv2FruBSUu2SJV3vAoWFT5k2rP8BYqs3cDqLDJqhpUSgf3DVkobUE1m7",
  "key2": "WWbw5xpZWhcj8eyCbq3c1iDVoBiVv4E326QNZWK26vHN5qG2WCmxschmJrHcpXnXDPirvnkWLtWqwLGCCbDG591",
  "key3": "2ijNvCfGmteUSev5CQXgdA2M9afd5gmpsJS7UVPJopecsxJJaVgCVXMiTH1oWAFH27Fhen25MSApfsSfk8keZ5rT",
  "key4": "2kZG5Jv66cZYgva3CB7bemcUpkLLA3yHEPfiVRvG4adapnTrypz3G5mx1S9JevmN5VzZrWPYaq7Drp3NJWQRLrCm",
  "key5": "5w1wT3FiZvc3jDxzM7Su68eE6Faxmv27F9sToiJ9yaRTSdrd57s9dh49J8mAcdh8PCqpawREMfGd8CDc2cH1SpEm",
  "key6": "31wSHYQE9z644Jpv9b7G7CP6bNEmzajDnGCy4Vjp2rkP7bwnVwQxi6157ekbFjKwoJ14vPLJjCoyh8ZpP1sq6ai6",
  "key7": "3Cba2xFGrjuB4Mzg7XbpbYrfoZ5KJTeUfPkkByYKpEZncVSnCV2yiXzTgoAo97ZKSbwsXiAG8mxDhaGw4q9ECKn1",
  "key8": "3qiCeuFt53VpJ3DokPtfKkRqYJ54dLYKjQCtEjAcjdCZ2qa9As21jdU6hnq4DkdDVQ3oZhhCrKZdXQxmKSseEcoU",
  "key9": "4VqbMdpYSiL9A7YjgaHxQjw5owAEFb6p2XcHifUdJnsC94f3BShUHPog4TNe4tGgdFcjM3qRPBaziL44JSPsWScK",
  "key10": "5JB5nZ1duecXhLMnqXftxM3LkFsN7pbPKFm8XMZquE8SgwZR3uZ9ZvYwY4SsmwnxHgfXgB8sj4cmdy2x1Q3cvb3S",
  "key11": "3JrtPqU7uKZsbxySrPCneGe2mfXKdhVe8umJFTWYuza5t9fP4fvisBJY3dEFdgrszF6h95eTFXo4wBjrGWrgaWEo",
  "key12": "4ejMYbdeV25ZfoHBtScxVY8NyonRRRbiYvvBbqF5FRdKEPEgHAHWtdpYyHY6FKKLvtJZrTWS7AaghKi2kEah25Wp",
  "key13": "4WWfEdXkMSrV9N4fdXCyPNPNv7fsUyfFbyx2MgtGPUbeez3qB9j7Bpa4CyiEHRRNUWVq6vLKoN6VRkhgHkae5ZuL",
  "key14": "3Cr4do38NboVsMzVFvNDTBmdpuSTgLFUYsiGZdxzuVgiGXeocoB7vcArvCUbvtrKJDRTafL5P5N54JiGvp8rhNep",
  "key15": "4nPqW4ksKu1ZmFf2AiGvWUAPu3JGxNEpVjU7cgot6XE2dTW6nnircQ25FdaYwaCuCHC5WSXJEX487TD5hyP8Gy9n",
  "key16": "4WjmjH3M8nv1fMaFzTg64uCeXvHbtHUJTCkU47pGMg9buCfZbCUwnmjv8kDbfbLkXTQSqkSKyMiULDunG5zc83TK",
  "key17": "46sBaux8BuxHPD977S6vxYDHW1jZxQEma5gQyfmLRX3CqedeGZABRNiyZNKyYccbmDD3nXsCUb8DHmYkQ6dRqzGy",
  "key18": "3xveBKcWjKobizrW6atqWD8vanFxfmziR1fm4Kc5kFaPRAN881iYwfQ4kiABP3oWAMYK57bPZQzh1nrDhMTdtWjo",
  "key19": "4yUDPU8YeBsKouteVvo6bRzkMDoZ1kMn9JCV94rhMVF97JWHMyza3babQfLfT2icsBy8u2DnRM5hp1mNy5v66F4t",
  "key20": "4uPPt1TdoWssEHD6nNy86aoKhjSrNaRZbxRxyFhaRwtLjRFrLWLeJnrZSRsRfZTY5HQVAMAgub3drcLYMG7NN57m",
  "key21": "4GzqnEh6fb4jVXPexXMoktAgHN3G7jPtMaqjbxw21wa6MhzZFN8wmyraLC4JWsWUzPDgDag8LX5XgroMky6MjZn6",
  "key22": "4y7WydeCZHa3CixtYhbRCLQozdcUhBisuZW5rkXEFJ265dsUSdsJZrBEnkhK9vvnbhWQLDFyDMkBQUSe3r9oXgoT",
  "key23": "54jsN5RrKu9FCiRX9Q9HZRpxSbLsH5T1rmV1VNgrx99AW2yX3o82VPXiZk4XbEKjqSfG4ucjX8Zp3XAwsL1Ao4Du",
  "key24": "uR6dPpJWSb4KtdrSXqBD4MzjUbdcKtq9QCnkLnjKP9fy3QV4qVnP986HaNXxpnQ61wWDLSqdb1C45pMktzvf2c1",
  "key25": "3oHU26US6Nz58c7qcP8zKan86QviS2YvqCjsbU87U87WZ6KexXnp1ejMWHSXqdvE4ZTrBma1X2sttx8jf55j6tW6",
  "key26": "4tcZ746VZfbmJcrreGJBR9o2jJUPA23DyQfLerLZAfA95MvmC23ckDrYRftskqmXrEN17VcnspwxdesAFy7RNy2j",
  "key27": "pQA499kr1zFgLYVEpUMnrTTWpiq5i1223o1XzdiFUmDQakbhi9U9qwguZdsbX27pQPM26btC4RyLreZyNmUWi6t",
  "key28": "2yPXQmWWK6dQLFhid2xqrPsrKS8Xa6WmXpd8Kj27M3twQcvQ5YDcRWP4rBQWJSGK6pq1mECdxw635dwsQVV8SA6S",
  "key29": "4RemAqHJEJWbF6rNhU44N2QiUvG46SXPuqiuvsNbNyHdECgnut2WrkNDzUXL6F1WA3edw22jtb7Y6MwRAPWRVLX5",
  "key30": "5LS8Frxcf7qmByQjyr8iBqapcDbGfnsxSWKzHxLVV55oAhDv4jukAtupkMvFESAy5SJiodVzZMuUqhGKAvB48dzZ",
  "key31": "4Bn3VVUPp3DJEZDjjjvYddKRBVGaLrVE9Hnx2f8nBfp1n3gYaTgNe3hmMst5J5CDcwBoVnCXo9LfjxjWsmaNkbQR",
  "key32": "kjRi7qAtrkuoAkfQjcjCy5rHncXZtHxUsm2TjV5qJt6LWzUfzR5Nuf7UUHQTRDLjp5xhjAGdmecuKEVETjEfK1f",
  "key33": "4kgfB4kjL5zUw2ZJzUsBgq5PP9NFZxnGDswCyH971WXJuNkcB4ibVJjMKTxmoAGkWiuKktSe5THcw5W227iQQf9z",
  "key34": "5n4gwTLR6Ktyo6qXvTcHXs6VgvgiJUFVeBL2JthZPHiUSXvVwGqR4FnP52jRrapYtGiLXBU6DVpb97NXVi9g9VYb",
  "key35": "5ePxiHMA5JtGrN9T2r3ATuqaDTQxEBNWpML5Vk9Y5a5kjfUSPa4rKB2vNosMoX1SqQKe4qmDCnBv7R5UuKv95UpF",
  "key36": "4NV7d74GGH1Fuuza2e1ac2UkuqhBZ87PM81eP2QrLX9AFhm5qHfwqHMKhCyR7a53DQ7iGQbFEpALJtkq8D5msbiE",
  "key37": "5TwbE18QKPDVoj7RH8MRWGFfrLFbwLzpTPMNQXagjVjsSdFy9hdzCNgWixDZWZ5cbsQ3m8zZ4Hp794LT7po3124v"
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
