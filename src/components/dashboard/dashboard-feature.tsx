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
    "5zcaiBn83BDj5CctJfYQ9p2JwnPJMunnPQqSHsu1A9ZZbxFBg7pwjACsCQPqwCKuXdenzACt1M6yUbmJNBxUqTqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PnqeRg4dHdG3yxTfJkmCNNN4eWXmettCUBDX9usxSDtAQ879rPxYvW3w3Rba3RpLKbU3G6r8sGbR1qiN6DeG89n",
  "key1": "6mA2ttrjksZPeSPdqxMUMUtjxn6SjHRLRT6VL22mRqnfzNd6dz5VmMoR1hCZwm2PCZxZLhPzHwPKVAK82aFS89f",
  "key2": "3uN6j1v759cQPKCA3DXhAHtPS4GLgBcqWUnGtgaZPVj6zs8xUn6tsMwza1Qbs4RkNTbACgdz8sbCTSpKEAKXynAe",
  "key3": "z9yw43ew4Tgib3yumZjtPdnUPbhs6UunJwJwJ9ADD2TdZWqdbDv6LP4btkpiSzaVVAsN34krCANBmoN9BPZDhgr",
  "key4": "3FatCYkRF6vrQf1fyCPjRdupXmhfaDbh89GSuJQRXYwVWfXXGsLCijd73jJxRE9Q2nRTDxC1QtcuE4YG5kyx8iP6",
  "key5": "3koxfVgmny49XkiBSZ4Cep6UkHtATHNQ6kw75BVt9tQh8kgjcf7X7oJg9K8gM68ybSWfCST5G7DSamBFiT3i1wns",
  "key6": "3LjoskoV6FvZC7UizwEs9d928vYDX71oRwaV3hRBvApF7NDsa1xnMtxt1U6uv32NvwiTftHWj31Mjr2G1TaDhmjq",
  "key7": "5ZRr4bC9uCjYMcBv3gnPL1wayUmjgGbMWTxsErpMHuU45LLbWHvEuR2nJVdQKDkUwbn7D8sbrFdpAL4tSYsaajCP",
  "key8": "abSjr1VFDCCwSe8ZrGjCaWYWhsaYF97R2A6MV9Ep9LWNuGNpbx7XejNwbfAG34i9YgqmpMTMaNub4Mw4LvNR9DH",
  "key9": "4rC36VqnENTqh3fUGy5UFSEgFBq1WRpdLATSiXwtoHR8SYgHq37RquY25euqhmhoR3X5cV1XpBB3ybZbRxuCJKgH",
  "key10": "2LL7xYWK6LwWLkMZqeEfKYBsstdhmLJVuXFSSs7S55CjSuQFPJ4w585Mr8nXGZEXSMktoxAiHTfEb65LqBuQmTLk",
  "key11": "5MjMoN91XzpGywd3foHAznYwa4PMSznopDKfLpTkbUDc36aVZbhK9eTbR4zSmYX5k9LHyYdtbuL6DBddpVxVVfx",
  "key12": "324wHxtDFjKHdxFUBMTcpBSuz2LPcc3BpEvsXRfsY59pqshiWSpQRNAtpeigC8JAfWPPUghTQCYy9Sdeps4vtZNT",
  "key13": "48U31bXpZCchjJARcVz6LaUFDmkxgBA6jRogiNHFeAYiCWxDx9qyiXZFX3wmWjLncr4sAMGgoudguKgV2wduiWHq",
  "key14": "3LYoo1sASvfqkMudqwzXsjjGowB669q2j6gK76TLyCmx9tUpm4QJ7bYUM9MSrMN9uBzwXCr9473u2f159n6khPU6",
  "key15": "5coFHQjVBC2baJT8w7pQgaoTix9LwKo8gVPdnSHF8B39vfCqYtpEoz958pnYXQGQz8RTDXKEr1uPP2NKNCrxLkon",
  "key16": "3VWpmv8uMWxNqGFxTmemNoWZij8b6kP2WoiSUyaZmrxMe5pXmcUoVTszCjU5PkmVmtokfBohacN3gkx4Q3UojsBx",
  "key17": "3fukSZU5RQMyVCcrELpMyjpo9mk4BNuz8B9n1HjmZpLgu7z4JXEknRhA2EuEe8Hof5qitrKTftJWwCTxxdTK2XwM",
  "key18": "5oXuAcAt1GfciUpCnJvDm3befTC3cWpugTxgq87vdugFir7DVPqiccSBBQeDSvPoD1xHn9uy3CfoihqZ1CFCKvaR",
  "key19": "5y21kTCPEoEoqycdYcFhitUfNPpBVvLQrbmcZDjJ7htC7E6tfGxeTQjXrzaCXwZMKqus6CrRoVGtCkS7RtGUrm2q",
  "key20": "3HsTNoZdx3Go33pMNssBBsR1x2AVAk6pa66nnifhXcYZAWBEATgZCGGH6Sfopf5rsqTkErDqSXm3zgCLucSFByNx",
  "key21": "TrtRc6b1xY967Z9YrkxPA5VyJ5VjJ1TTJmEvc3umZfdDNra39AaYWBscCAnNKFCA6rqvHd6SRtSPSECz9MKWTuq",
  "key22": "fFSsjcGZkjFqwgBjenHNE47f5YTSSTbQcJqsDtLCsnqK3jVNddstAdZWWbWWgMr9fBbduyHEC3ZXE3kvynZvAEp",
  "key23": "51u2sSjX1PmFAoHDCqFuXRGgLnrCpKxQKHZovicMg1aGysjHUyqmHx8kriv8fGRfCr7S9aB3Va8iSRAXxABi32GW",
  "key24": "31K48ti49jMUXsYvJV4jiCJSrUrME7QkjKepTHaKaBangfRUwQcDvVtUcANrC4nG9XwP92QRcoxxEaXyqa7WFUWz",
  "key25": "32zN6wwz38DNKEQb85vfHihby9ZzNRgQtjafEAp3SHg2YgmDEwMDJN5fyo5L1GCyRBfmijdcqhzEnHme29AcS5wK",
  "key26": "2nYGMd9EvyPrkbNcD2v871bmiHE5AMMc9XjLvTpVj1gWgaWzuNpgK52FgHXpZTmW1mDEiguhzf7mA9soBPqwV36q",
  "key27": "4uZRfVqnpdEFMU81tggKQVm9EnN1eR946e8DB58yND8avY6PM3oefry6SDQuWt9jFKVXpVP8d2kTrYbWkyu6RV8n",
  "key28": "5Jajz54HpPMa7cXcgckLGGhjsrGsabuzDxV5j4tEk8ZwRc3rFoYRN7LSagZ5vadYLwTT7hqdDkcLW6xuLScmADYg",
  "key29": "59DRwXqg4gj4CQ2qujiZT5WuN9qbUcrVATEWFHenKvfTuyU4nNnGyPDL7fcaymj14rcBY3XPg9BpkwiWMGk7WCfm",
  "key30": "pPrh7HPG8x9EcQcbFLdpod2629HyFBxu1s94bvuM83BV3jmmucCPtwQbFjjegcc2QYiLKrzpAWdk5T7FvpDnyeS",
  "key31": "JaFgYjnBxZZZ31cWxmzcgrwvzCiyL91ZiJyv8nZxuAukRRjYGuW3LsAfeS4UugP9cSNFLZy9sgig7XhVG7RoQ4A",
  "key32": "2zyNM2W6GFj3WdCwT5mF7dudebyRebJoATF4Ru3QrCi3e7FEUqX6KsNh8yYjwVK74XwJiVG3D2zv3bcJZTNBnxQe",
  "key33": "3dffL53SYwUe3TXyS876hjEZQ8WHv1KEgPM6B9UFoYYM2noHuLUZj7aTcTk7VgJJFL1zrYiwnTaRGnh2rkiQssGS",
  "key34": "5bFYV3iuxAJosUVrorikaSfWbzAYaDuCY28jQks11BHTLRzcwxx8eL4wnU4dtDUgDCjZ3ofFPKXYTmQmh5A42kFD",
  "key35": "p7GJJzsPaiKhtwtp7x1S7UkEBcUvfAQUDdgdxoeaaE32Shb8ZcDg1NMBoir6GXZNWPX658TpwsLS1Q8XYCAgAkD",
  "key36": "584htMXUqJGXW8w3xFpe6rVh4hPmvkUPt2eQzJVvvpzKYmfZeZfDGRT8RQjyMVnCPtj7NYzng258MuGWYJuigVfM",
  "key37": "3hbn5GkDwrYisKg3nejZF1aLAfDP7sLL51G7zZYV9pymTT8x1zQGRzDK8r2dPuDyirdN77HMs3uN7bmZWE8WoDNo",
  "key38": "irY7yUZtoA2bi5D6ZcCEM9BJ9G92fpSQ8wq2eQRRvqsumK8N8c4aoZ5LdrMLpN511NCw33FDhK6kma2Q7gUwdrP",
  "key39": "3GJgLqTc9SjcYjC3nppi9VJWkfhCQqdU1T8e9SXj62vSDHcmoQLWDPWnxcjaYdbACjdYGKZQHP5U6RhtXp7WMfCr",
  "key40": "5zoz4ggp8WvreKrZNrNKyvfeHk6RwBx3NhxsahskECJ2dVN6UVZTxigh7yLDQffpt71s5yLPiSF6KeX7yR87EE2x",
  "key41": "xb5Apj5tPBbo8Svvkp3mxXRHsH5y11MUoUyALQ2Untatrpabi4XWgbP6p6ENJ4i46uuR9d5AgTKZZHUPj88UBA1",
  "key42": "2JVCvZ5713uW5tdKy8qK7PByzXigwcWBWyHJekronbQbBLpRqwBNNNgZvNgvP4Mk8imFvDK7dsjkP2x3GSgm8YUv",
  "key43": "2dTgwNGCtmB4LYzLKncMFBAhsNUaAtx2cTDhDuchHGKaxjj4ZcYWLSMoiBAC9sFPR3mZXRhzbvdSGZyXYrwTAJuU",
  "key44": "4NWwHsFMM3zCVkUMZFy4LMvVoTzm8by72yawX79Coijrv9PudHaxKDjzco78TnqTYdRQf2kvHqrppQP4s2dZ9jNZ",
  "key45": "3AGqMLCCsru5EFUbQWhnjLrU5df6CcwnFbwxrKrh5KvEWMTNnXfvMxkR5n36WZjHrRE6RnQkH8MFGB1AsThnBN7f",
  "key46": "5jxf7wZeqJ97X4RSnTYoMs2G8teZW8oPPuFZGAQrdjpckutQuFcb8zPvvKUUQJndd2pBZATRE1tBw8jrafy9C6dA",
  "key47": "b7NPNtZMUBrqLwnu8iegYZT6zXvskR56n7Z4u7YEhBF1F3gE2kLJFCHdQULTJTjrtEyapR8vetRExZoRGGJNyPe"
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
