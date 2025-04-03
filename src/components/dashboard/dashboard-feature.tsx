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
    "D4jU2Wd4zvR4rPS2e1r4E6PvrGt5WvjSerMtWrXByiPKdPU8FtYj7mUTusrFbvhe8A7DQ3Sqp3FfxDXL5GRma7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H1hrEonQLyjSjgRvQGQHMFjuSXBvGkgzsKFrin5KpczLeP6p2D2qhGn4RFP8e7d5JeiA9D2yM1AtSAw8aKXhMNQ",
  "key1": "5rFjrPZXWNxxJd1NzFQ4PHtRqeTQ7CV1GSKKe2ZVuTkhMQWX52YEsdKxSBnjJ8gtMYYSa3dcVt7LRDGbAM8fRJah",
  "key2": "txj3BfantJaoQEGwXaL4Ke6coeJWzyUvLD9myzsM88aG11imJEU2ayav5haJ3rAMoXgZWStAmGmrKbYsZAzo8S2",
  "key3": "4vUu1eVLNJRk2ESTx6HAiX8C2EZp4niWbWb3YGhbo3L6cFAj79xGDCxHgREEie5ifsa8DZTGX7HHeff52QKeu1z4",
  "key4": "4MaAKgYiHwzuHCgNdMytk4DsKdXHtJUKgvEfiVQF4RHQEnDQ69sxBNrxZ5j2mK7CrixBZFRH1NxMWQccyhECuf5N",
  "key5": "4Kmj85gqBXTRtiwbqrV4JYNSqjcqcBHPmmLZ2tdoJ76kA6MwzXqkQkNtRxgkARYW252PRLzPQuQLHPkcuGmKhdaA",
  "key6": "4jBMH3r4ufjL8DEAn2D9nGjsW52mdjBjk75K5LYJjZQitE7AioMuw2gVufu3zoWzcmgXPuREDM7Bn8odhZQE8gj8",
  "key7": "5mzgaBWDL4HUEEKERkX9iqQeZUUazr2Eyqg3Xbha6ejfK5rkLQjk3M8pmsdGLhBoQ5BmsfH8C9bBBdwNVMmauqYU",
  "key8": "2EPgHDtV7ALyDBAJt563mrxt69j32ueGgvz3sW87YZEndg8ZqUgfcPW1LXZLb6JctXJD7wxmWNGhD8AKPur282gZ",
  "key9": "2TpZaNqVmeU35W651hCXGfSPE53bxm7Frsvdsf5KKfaoXZe92vFGH94jy4CtGmDye7yT3SnxYQv3ofVnYZofKaiQ",
  "key10": "4WwFx8DYFx8NdjhvMxMTTEuW47ndfuAD8VNtUnSJD9qVfTJuVXZ95QPrqgWtcqPxTXDK2DcnC8XkfqeCVtyCW9RY",
  "key11": "4R61hyoYyW7spAEp7cd4suNVfMziaRfg2ajvJvqCXU96c41FwEbsrAeANP2yD5AHM6juWRcPWoTW9hjhfMKV8eKE",
  "key12": "2qKafoSe3iVMBvDwrZa3ARswE1B3bKTrYJqdvfuP2WTstvpWNLVz98BHaCA1A3Ftq7C1vnCSQ91KqrLQZX6d6EHb",
  "key13": "2gbcPMuEsUGZF2uxuegVgvATsNcw1Ks2XNXbmmRkgyiQToJqveLJ4KQvfNZw9WDt3Ey6j9na16YaRDnLRffYLKKJ",
  "key14": "hoLo52euB7rH7it1N8x269Dv59GyzxRrPzaGYLxnc9pMFzMzQLZVFuyHW7xSckxxPcKojHc3VwfjjNpNZH4v4pQ",
  "key15": "zi1Yxnam35TZYxLEQaEjH38kn7LYtDQcEpPCaavCmxDscJcvVtAWWAFDJf3vUeD4SvdFDTd99nP2wsQcUpQqdRV",
  "key16": "3rqcwmBVdbbbo752HnigZRooL5afiSqdgSRe2jSdMbqKhTTYwedS8XxHSEszEyGu8SG9DhwNkp82A1HzxosJfco6",
  "key17": "5Js9U7Uu7nMLEN8ve3dd9KTGm2zCR44CpsGPmy44cW5jBqzDhoX2o6G7suGo5yRjcDzhJbMBPMRJuGvCYssdwpcF",
  "key18": "58DWYYjsCo7hNGovSVkvkDmGBnhB6BsdWTWWw1xCDwYZtkLwTYdWuf5PrHBTXpfMWZEQJD5tDDEbLUE1B6KGApae",
  "key19": "7yTaGKhdon79vYMqYCpB8Cj8pbbPtEqeZZuDGa65K2NnLTMkTzA4fHhL7dNAJstPxqsQG7ysPEiKxNPkeeQSZeY",
  "key20": "5KmDPLsyDHukifMZUTD86QxtuBxKUSwx9PW7Cxp6ooJk8BJ4QdTgWbf1smRT5dot3hKCKP5gpAgxLXR4MMXY248N",
  "key21": "41kBERNLyArkSHU2ih5jjXpVTZyBBVxWhNQj8gke6GWiTDBRTDXNTEdNSye3EKPvCN2Mp34ooijfnK8TxQ2mNjhT",
  "key22": "2QjYEshN9GCNMXWe9bcWYiR2vSe9YtwBcCpDxLLy6H1x5L477kjsRYSTCj7UMv1gdtDFCXfdvisZsKmfToSYgq7p",
  "key23": "3JwunAmhMFtEH4vGKj4priVbnJ1a3hUvEo9Ndp5St7VGacAgQsnDdikpTwAxAB9oBvdZB23qS2XcdjuoXmgg4TfG",
  "key24": "21nMsbGudik589g2iA9rMbA7FmUKcFigvdhYsV3tXXbxqwW596DyQX7HBWVvYEubGMDWNqEDdoU1XyPwNajTqTE7",
  "key25": "snJAgRaj941MKh6xVgaC24FX39rSWEKjDbWZX78NqDs8zVpkSCBePEGVyctBmcB2Pe8SYZwPaEtKjoVy3EYkULZ",
  "key26": "voUHXsWoSqU1wfDYNSsYaTsGkVHNqSTfSVHUfeVxtGpphhEKCXH1Y3T1E2omeZgHER3RcMhHjUyECcWEcHCNsh7",
  "key27": "DfzJg4FSYbDQti9c185s7qRJ4jiheTQgN1Fxi24QX9GiHqavEFtUd26k3u342QcxFeiSMLNLfQL4sAe2NpXFhLk",
  "key28": "5DXyeAQMxdnPwCWUMgGudr2hcjX9WschmByd3rnTJz5t2PrRkXuGRVf1SSQ9ajhedYsDaJbFbjSK99sBcvKQL68j",
  "key29": "3CgVB4KpwecNVyqtchUhSXpL8PdyUL2FXwC7ksLsEbfsDCLUamSjBDk9zsDHCt84MQPDsvoTcLrLvBK35n1mLPZw",
  "key30": "31QWPwyRkKcWBwzeKzu4iC2ZJd3e13bPLaTko3jVy4AgJKdKdEjLArt1bXdrWVVBXHEubMsv2JmK9hoQX2PjCgNQ",
  "key31": "v2jY4juy7yDmK8hVCcpw57VCiRM4oueFrH43PUENDDJo7VF1zdAsQrKrDPbxGWpnVb2GwXALuFNrTKiiGNzL9H6",
  "key32": "rkXA5vJ5DmaZp4GFd4r3SAamdHUFLVvYUtKhuGsBxPcnKVVyy5GA4AS7GHSCTEn4unCcvPXW2T7EAYZ1KYgdPNu",
  "key33": "A5PbMBZj8DG15ELrdYwahvSHhXjVvA4xeNUVcK3kmVAcz3LTQmRY15o5QKaH1JgyA62NrbeJ2BWykq7t2xDfPV9",
  "key34": "4KJEgRW4Y5KdwnWwYgxpLj83kh5mUq5vxbnPoJJciBm4LH1TWSR61shT96HiwzaifxJRvX2ej46HFp9LMQhMeyFV",
  "key35": "5NPuvnz3Ga3uMbcZmrMogJY8w4y3xBaZSogJPmzMeBZtAztarQHzGCVZVUKCsBPhV4dMgKEUTFQ3B1rzou8rCH9V",
  "key36": "2iherhDBghQAXQtYW6n4dtuwV1snto87mm34Bi2L2ikUiFT3Pj4oUaGtGdC72UPv2sdDBmTyLaxvZfKR2XxcjnmT",
  "key37": "2v8Qqk74ukYiTtu2SRR3mhNqrBUxgLZ7daB45GWKENCs13DSXde9dpxEa4xvJejCz1zRD4FfoU2zKkLCkYJd3we6",
  "key38": "2VyJKCmkuz9DP8mT3Bju22KUSndCmak4w35y6vAMKSYFWVzfaCEPLzWvorwGHLvHVLRLVrEr3HdgTrN7hZutfV63"
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
