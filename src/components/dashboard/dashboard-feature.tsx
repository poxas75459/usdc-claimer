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
    "4ExdP3EF8FGTk8G6GGuh2BWF8b6suporTfRWQ1KQwEy4fcQYh35mcnoctHajtC7g11jGPN3A5N9az7PeFhmvD3wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eAEng57wAaEKp1u3EQKX4yJBDfeUfNKHV9wgeHDttruAHCuSy12egatRhuDKsgS5mimcLBA9FGHi1Avnk4J9knV",
  "key1": "3HfzJnnh1YonaMLogjrkwkEueaM9MP4fQgFWbPRyYyPMM2Hbz9Cq2nbmNRwJTxeooxi2st6BPWJZNuaRNz3Ltutf",
  "key2": "2rtLmFKZ9tVC4r1yfNkQqKTs1R9VydQkgbnDNfSN6jqeTcHd7knARPo7AWuS9BmsWZ67PUTHJhtAo1CrkTPLKrw",
  "key3": "3hwUmzkcwVwf3giUc2nusUpsvEtZXYSMC3awSSNbbWeEarAsVyMfHYcfCXxWMdxhpXFgXAuXoacpoi7tSHMo2rDq",
  "key4": "G98K9fBTfpviyQhNtmGGUAacyA9pdjaMGnEs7zpeLWaxdsA3zXm9YL8kMEeeaFwvd6Mu7Sy2Af98PacuY88mE8y",
  "key5": "5sG6zBLXzSWib7Se88ZDnmXwwLCutuyx5KGXeZvhGvaNBrpSJE41Hdms4PnWSCHxg55zAad5mB4TaDTLo4j5ptCA",
  "key6": "5j8ajJp894uFWKXBGe9m1r7rpi2H6SV4Ez3Cva71Ttymd8HFibXVWnrF3AZdbv2Y5cyTooXNAY9d4YM63yMbcQa4",
  "key7": "3Ej4k2Vsaery6zjs7Qc1XfWc9Q2juN4GcAvXCLP9szVvhM8y6hu32DmHfUwMzgdJHkbUA2AUx2d9ne8jXhSTVUUR",
  "key8": "qz1pfcQ4SjpDXJTis14skYB7SoBfirVGyWBbdNKvu4nCwaq9QwEBDhwKhK7zTe3Y36SET7AJSm27JBRYUYahi1x",
  "key9": "3V1RxSAsQdM6ag5xTJ6LtxKHv5T3hVaWLL1biLgc6NdGVjPm6c9QfC4TQWd4sNNVocb6L2s1UWn77zufSitHTKTH",
  "key10": "4ss66jqDt3DekDFCAHvwm3fzEFU3ypRmuxKieeafjCCSP6PMKxWuC37sZWDhE5PDXhGQnkrZgefQ3PVzWwtXgV5r",
  "key11": "3ZPueGdJSBe3d31MJ8Vg4PZ8Z9QfRNSk7iGkVhQ3DN5nj1fysizNRWbEgwVt7EgScVV4Cb4PkbF4zycKybTC3MzQ",
  "key12": "5dj2815JKyVvyZJhmnQ11UrhNwgv3aBKJrSJ9ijeXg3FYazBqn8jvejEpZxwWPa7zu7PnwdBtSzWE5GZkYK3Lk8m",
  "key13": "4FXigmmh3ZhEBdCtEZoMAf88sjv8VEMpdBKeChbd59juhP5YAf6KT3H98nCgkHhfrpdJ8D5syR3gTQSAbehBBB1v",
  "key14": "3WXSsFLoiDFvFpLn8QCK7mjXdtFsbjbpRZjkmXMC6CFebZtwJX75HPEhYbyoC2nXrrXRZbn8ZnHjS1jm9AGRtLBk",
  "key15": "NF2YYwLqMdX9GDFA3sLbZQSHani92byNsq7eFUWqtosrPebrg1CBFt9FU8jfoyHz5ArW1jBRcvttRpJQ2yqsTCJ",
  "key16": "5yGBwHrNXttXZ47v33uC8h4zCApfZPWU1H32nkKVEgFFwLLNc4VTLQVTxAAKnCrL7zvUjWFt7ufXFCo21DgpMesg",
  "key17": "4Mru9QvikpNWxU3uZy6uotPn6gLcL1MGqT8Pyy7SrA5fopSCD8YYgEPXP1ETSMjM2i2XPnMPvRuGvvVf1nA7AABP",
  "key18": "2VUdxK9uc6DHQWpn8XPbNXgqSnUpKEjiTCJzhHemEwpzqP7Y62icd2TpKjdJeEzetaEq9VfhKRvHoGdhioWkeDeR",
  "key19": "3GCwBVSkjNWnHUnzV3akhTtUpaAK2k2W5CECJpWuWwMb4euxX6DhSZo5J6zkCqGTairiFTXpyGzRktfo4JNCFZpY",
  "key20": "Q8p31NVrNZLP6aBfdVv4Vedk4so45g5wnXrtQ6D5wyaU1TXn6k5Xu9Hgf9YhrFzsmVMWuUEJoaW6f7vrykXcb9Z",
  "key21": "oHWJzXACtvZB296SBfU1vauBonecuygus2dJy9qbzyYV1Eh21rEPha4vVkJY5kPMuw3W3UA8zJwKbSrwmJHcCUn",
  "key22": "4eHy6jhw3GLGHy51km85243YWNQKUXJ678kvM9fHEXsRkWqVwcRaHXw7ENorL4akMMCnGRUTDmnwdfYyTx51MvjV",
  "key23": "28U88Yy2brZ8QK37yjCmhnnrrw3xTFeMDMx8sgocM11xbeTtXf7MYHDYbZCVF8rbXbjM46itN9RZbUDgddKAE2iB",
  "key24": "3zgNYVNyj1LXeoJYMiDXffJgUJfiodtVHFA6ZTzgmL9RJCvPQT96BWXn5ZEwSXT6M5ZZcojJTWdpvQLvM65T3htQ",
  "key25": "Fx8MBRG9wmP9q8qDciV1tqRv6CjYiYpRsvQ1wWUD914bFPLvLwSxyjHFvzuAT7mgssdFmqQrFQiuZFNzZvhoMNt",
  "key26": "2T2Ymq3Z9eCTb6btL5eYq2qZtzmCDpjweNi6PHQzrXHHwpUWd2g4yQzgofpT22Qic3P2zgad8Sn1QwwgQ1umZgM4",
  "key27": "389xroFg8nJTFGmW2e1tem2x7YSXjo7mGW85HbVPZ8rqhG8H1qt1Ks3Dwwc2zar5sB9BaXCFXiwagP6pLyToARDs",
  "key28": "54oLFPsEZZqFUz6dzWXVQbsjGUf1jtGbNNfvDBiJyGmpo9vqa1bdggjbXFmPnAVPzQRDoFxysa4kfXRXEdEzXBJr",
  "key29": "5gWdUFwBtmnj7dj5EMKgkYFw4ASyYG72oV3yy9hCVB5D2vtwKVLMJfe4uHRSzSv1xkcddcUTCQ91oyQRNFQ5eG2H",
  "key30": "2a1QuihtvXPQAkg5MdaXxcGmNNdgRQB2jegTG99LVG6yCc8UkoM4r9fXCk4GAtgmmvX7tvGuyVKwyAzUvaqCpEQ3",
  "key31": "3SrFxygKG6W9CdkRLkSUzdeMMZVwvexmAacSk1SRGyAZLEhbF7dZj1ZQuquoaky86xRBf743nJ5wsVRu34kvRC2D",
  "key32": "CmfDbxBsYn8XCtAkq8Rg3irL5RU7YwMi7jYVzxbmsM4M7MA9ArqHboYVuA282i1NSvLsG82WdKnhgXFy5thje7b",
  "key33": "2WKszTxQXsv2DP3SkWi1XU9WaSxtKaFTpUhSwXAiFT9VBkDjtaLrNo19Txwk3TeA5XXdwCPh5weArw9aRWuRDWn8",
  "key34": "2Wy3qDkduEXWzMeoHPX7aCNoGPz5dEChT87VHetpgJGWBiyyFnPT6YtaJBXFfxhZpanjZL96opGDcvyyJ1dzDLna",
  "key35": "5MgvFMqUV56uYt1qNAyoHJj7hn9ahEeL4UAeZVuYHNhpMqZ79g4ANkYb7YccXXFktCtzQYJbZjvFrK5Y2soay46W",
  "key36": "5MMje29Gq34Sdrbw9MfercXyRr5RR44WRCXGPyJKaYJCVGFSQGQBgYk39vEfS1swUp9pAZsKTJ73eoJZWYCSQnVS",
  "key37": "R8mw6bNrT21SazFTwWnctM5XPbJD1hoD2xNjqMi5jsGz1yijCXyZ8TXLGGfsdSRamqtsX8eyzNEh9R9qnYqENpf",
  "key38": "2YXsgtLaKtPaoZX4Z8QYntHvpt7frAfefXvupb5otzpMAwCzuwDXGsr2VYZeBwAwS2UPhMypuUTxxAAC6dhUB6fS",
  "key39": "3HYKhrXq79ouexUnUJjvoWRfmb1yoq75fCHxYkdKnS995Uw31qQ8n9DmwsHC7edcyL15GeJcaRscZhnk5CjGXHvp",
  "key40": "6prUyYVasFxTGAorxe1nKhbQhibCkQPu6itCQ6S8RUKTLq5BCUCv8pxYL8Q77g8qWXn7AUEvCkjw3hSv6C1VxjQ",
  "key41": "2dFH1pGGYFpECs4NhtRqYJw8cySMU7eqQdmArm9KSK3prEPnLMvJe44Wz4Uh5dvysUsoMajtF9G2ruoQrPpoS9cQ",
  "key42": "2v3H15BfQVdnK2ea6io3eJi1xGQKwgwkArXfbVBTcajNzH78PpMVDjDR4JRX4D4NDEHXnvk75ASxwa7xyJB8P3RN",
  "key43": "4HdYak5D9ZJgxCPQXgFGvcDS22Na8i6HjfvTKVnBo1hNRnBcT9CWShoxQ78j5cMRXAg93DS4azE3TBpoaXHRkJMJ",
  "key44": "5i5EUCg58Qjg7HrurqBcrpe2EjGQckiXh82hhyR6HJEzC53f1wvUhnSiSoBCAZAM8NixVUTkubGa8Ez5EzXKtRQK"
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
