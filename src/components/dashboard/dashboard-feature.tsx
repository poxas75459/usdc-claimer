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
    "2x3TdQQvXXTCuc2ec8WqLSQot5uS24VdTUB4GzVv8Hgh1aaYoYDK7sfL78EZk5KyhWbpSVjr6ZtAfxTSNvqGWGiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fz2wpgKXb9vut42gwoLntTczjTHSAefE7RSPcSjsS1Vw7WdncYLXRyVzko7aoKbMYXq8cR2oU7F5dimYoa2hUJe",
  "key1": "2FXgi9Zb6WeWe6CaeqyTJ2BtFBpnTzjDJwgDE1Uq785qUMVZrSSHW4VrmxHugSwoPL4XV9VgkAjSDxyaT6ZpR9EN",
  "key2": "2UXY5cxZsJ38Tc41WA1cBNzFs6JdAGummVCFLkvqRjvAKieWEt3cUYn2RJ8wwLuWZdEfMqmSfbg77EKKckZRYRcM",
  "key3": "4eJwWYCZiXHxMvnSqfuJ7Fit3BcJ4QvkyT2kMh49xjzSsPhNEbpPqJpqdjgEv7rKfFTKambHwkC6iFgZyDYCcoe",
  "key4": "52fosUBUyoeCNFwAzErgWZzjC7B81JK9LBRkLfoB4SoVRmjebUzk4ugfA65r8m2hRtbqU6WTd18Ktf58fz5JF9Ny",
  "key5": "2NTCb2wFFBvEnrGsKX9WbqjTWT4qLEN9d5qQG36yfVUSDqy9HLXNi5KaVd1wUjcBmRJoephUcXPXsto8z3cbtenT",
  "key6": "3Nj9AYTh1moPmYiui9WDQNZqEiz8tY4ap8x2yGTvZcbdUQLQPGwwaVq5AXzQiDdqkneraTNzJL6UqKhZ239rLqrt",
  "key7": "63Y9urfguzJmcw6ArSp8NdqfZnT838Di4aeJNTfHwTLUtTWShz97VggrGsgSrBiGkcsaNtkiY9QbA41RfthvFCCt",
  "key8": "3zboXtpyL4hn6TFWxsJCaEeNRNKTVRCM5ybXnzLsD6qcsN6rozjW5iJPubGU96J36r4969Goo7YnYE63syiSAvPs",
  "key9": "5SCfo1igqL4Mit9kdK38spABVcko3gdw6NHJ8DdVwYV5akpkX3fMSiqh1aPLovAk4sUHLJprMHGxxeHPTNBuPg2j",
  "key10": "44jfcbK9tSN7kiLZJ5qyurDsHLhppeBQcw1r5nRPZBch7qgif2t8rGqfpStfgZi4T42cBPseyF2vVVBns5aVXvQ5",
  "key11": "tko2okaTSBEs1cHB4Dq5EL5fgyaaSQHPbVt3sg5yphXe1zhfgEpLEp4wL5cnAfU1jKiwtRVAyesAqHNjUX1BZtr",
  "key12": "4B7L91mzLcbLKuXYR7oiFR2tMSeaTYDX4Fsi9kC9Yn8Hi6n95hu5UJeM8gUCuEC7tBN4iGvVAFbEnxgwceZrBcUC",
  "key13": "5gH8egtemZk4F7CpUFN8GdYJFhqy9qHcnh8rrV4KhpyZdtarYWgKpYXZUNzo7ZFCbJBCa5PMvbmAFiuiwpj7P4q9",
  "key14": "QDn3aGXMrSyAk3ymmkPypYAmjaM3YefuQ3cmTLS6VFXosXvP81cNzm1zQJH9EV7CUbWA1YPFVqKeUNBGwUWHsen",
  "key15": "5TTpeUF9vKvptsurbgDdtZWMDtqEyVkxMRSrMn1iBqecskVRDs7Ym8WLhq1NVYYZNV7op188Xr4icyESszKiQGYB",
  "key16": "2FjSm2bp96z6gu6v23xG2kAoVBw9HQCTmkhbDgbXffV4V6Ke1GAwi5mKmwozxLh6hXA75kka3UjEY5qeqDNMHuLx",
  "key17": "5BvkEiFTzFggzdBuYz8yjGYj7TGtdEXQLfMxpfRAtVQA4rsfmpgX9WM9phKjP2zE4fzeLfw1gpvWfNbbNZiGgtx6",
  "key18": "2HhqhpFeZn7SXHscguHHkLUwwoVRofiNXGYGjNWZ8i9mypn2MsSDr2pAoQ2SSgc4nAXuMp88tVLyhNjMvgE2ERyo",
  "key19": "4hmpeso6qaQMbH4DcDzeMLab6pK4n4Wz7i7X9iHm5yoFe7pysERauJ7su3VvwD8s2iWX96hDjNtmtp3pJCnqAAvc",
  "key20": "3igBkQEu5aHveqDTjQFfPpaPdn9PLJgzbiJwSMxZSEz83RUAWLqiaQHhxgcUbZazqd4Yf3Q43PZnzCXKJuK8PYZW",
  "key21": "3KSLnux2tXbrQGjG5o4bK9MqiVGChv3rovkQTTpZ4ht5rVCTFReE5TWPWYzttWbbShaRMDmA9yjH9BnkYHmhq5ox",
  "key22": "4ymCspaBEGuAhLyBcMgWSE4tpyHEQST7WMSHmoeGm2otFYSR9WuvhesEo1x382aJjyKn5Hv3bsfoHAxdb9AA65NQ",
  "key23": "4Svm9Wmn6oc54wEjpWSzoo3an3A3WMf4a7smoxx9g9bfjSD5QwtdKEGRhK6HPADwM6Vs1aPA2TysnKZcratnGJbw",
  "key24": "CoPGEWvda3xSsxB1nRymTZNjfUAqnXLm7xKDEpTRR5VMTCuy6DhBEF42Hym2fG2tMkk8tGUPiMahaqE8gpb6Nao",
  "key25": "665vnyp6xMFxbwfjNkxsJ2YK6hVZ3FhQmZBjQUoH1weToSfSxD2Lt2Yx2YQUEvQo1br9ZNzXzFdzQsLeBbyGtLhK",
  "key26": "5xHVu8vNJw1qBjraALgh3U3XVs3BvoeMCjyA8uYfyyQrQJwuqRHtrsiSGdkrEj1NR3GqwoegNrZ1Wg1e8HSMNacS",
  "key27": "34XLwgzvaUafs74WHrCkUXvZ8tmUSBaj1vZBFW6nctXyRNmcRRqLy2KojXzcyCV5hRjLXA4ZbnVw2vJn3dnaF181",
  "key28": "64QwfVdReWJCAbbs9M2PtrijY7pPF4UePLCvtPJ7K7N9f9G6Z8JdY4QEgFF9s9wouTuuQfBGZmH2djx9hQhYbUV1",
  "key29": "64JwrZHLpR9ZkTsRZYfPsdF5yinnxUX9BUchfzgfu3uzypYxgNdsk9J355zkLpxmnDiYMVxuJfYffysx81jLotov",
  "key30": "634CoaS5xberUzBxEvk8oHwdh84BP9wAddBZ65iPArYJxNDFdWZK84Tay2ZvpGRdxiHJ86Nw7WSqSZzCTbFSAAKT",
  "key31": "2aZCfGsWBYg69qxXhb8Xs1RuNbvtp48vnm2f7iptMjVvNrcpTGuZq9CEfyufDfoWn8XfLuC7DBw13ru5Rdm3hYP2"
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
