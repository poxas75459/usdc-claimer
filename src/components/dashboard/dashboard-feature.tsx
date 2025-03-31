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
    "4PzCRMqi4jzscqFyLaZN58doyYEsfcKt17XULzVe4iitazUnFcvb49Dhgqc9EwYx86fi6wHuHVWgttoPVNvc8huj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VmD8wGFf4PYmWoRKWcDN27ALKj3VvnRd2F1NwgnMcuELVbvQfdRrzqFScqPfu8CXjxVDrKkxMVes2Jcs4Wtciak",
  "key1": "5FBCaWoURE92t2cUfsE9gMv9a27spMVrckchhdt6r93y89Ws4eFqVfyFkpKhsPXCTbdicLH2pjvc9xwBJwKuQ2rm",
  "key2": "5NYDgiBQCA41gdthxACyPTbsq8AAgKxFgBm4E9V4q2jfV533Vq1Mov4oChRkYZNBpKQgMSEMSbwaLChGhGLUJ7nB",
  "key3": "4wksJRQUe7tT5Wp1kwvHccPWd36D3JXxYuGpuXuoSc8Te2kjEiiyRxnA6EwDbNfJx98SCHf9epAzgxWezdQNw6iX",
  "key4": "37J9NALirihWxHLZPufMgMJ3aS5whKw8JCTF3Q7JjrfmParyoPzRg2FwduxxS55MTnWDDgjFa42QHDBj6GF96Pot",
  "key5": "34bAytijsdNgGkJpjdQVovgjkiCviPUpC5fhX3MWxmTroiL2tYx5dstEVUJ3B2w9U4xqLNAyrG66HtvsdgH1PHzg",
  "key6": "5Z86uuAxMKPiNhxyY55Wb9JBTWMdVuuwJcRWF6oV7QxbTLhJswgtFVQT4J4ojerXPgHn8kgpt952m1U3ELoJEPrK",
  "key7": "iDQEZE6rUK4HB9WsqbEtGJu1ht8guhFYMnjmp27uRfrMUmQ9Epz97WHZNqXhADMsGLfikt4hA4hoLVGPfCDrZtv",
  "key8": "4DqWHWS8zezGQePQDrK1QbULk6ztb4K7gXAZHUCgBD634DucYdYiUvUMr5cE8ea4Vk9dgcBaF5Y3qLGc4YDTHSV4",
  "key9": "4Euf3hzaDgCqQwDbKoUvKvQsUQojAFKFxrwcKEPR2CsYNhvKsAFL4hy3UTHpSnNYWmLL8KoG6wBcoDkp1cZeNfYF",
  "key10": "2x7RQe7EoyAUZnjiGn4WbdYbYWPjxa6Fq1vvk1L2Ux4Caoc2DJ4ViE49aJWxZWKiyS9iMkUeqWeRyXcJLUS2RfBR",
  "key11": "5UuzzBMEJrxx1sj3aVsAvak2wAjxdJng8WMf14daF6yk9BKSJTvYbd84Y88844n28ykM9BN2KoBHXWKKLcsornD9",
  "key12": "2DS1Wv3RNu6gF6J8y4Gsd1uVnw27SSbTFzsScyKzqA5AaJHK1anp9uRnzzvkWpg9s6zsYzdmqNJvaJXqfPJENcPi",
  "key13": "5Bax73csp4gcemowLAyaav248PYaK34hD7gJoxvr4EVCn8R8FYz8gv79pP8EpYzrRHHBWzViD8oFH4ERE7cNkgyS",
  "key14": "4MAi2c1jBzvzCSHh4HYqiSe2bbfqz3TAGe9dtgcdMNrDFu9sxNztWVovWctoY3G5hLdEuxZVGL5gnykKRserwDjj",
  "key15": "4pUgq6TuiMZCJPjfjmnS1NXSg3fSsJt4eFSx7mhYmfzdREJkYv6gy5qqmHjwtGrwqT7FW4VXfRuBYUTUbN1pLYhH",
  "key16": "4DvkERZLXWtih4dATzB57UKAFiUsbiU7kYPYH3CkgVsi1f6tyq3zZGcHRAtgj6sohEH9MY4eyf3SNq67JnC6CatM",
  "key17": "uVWhjVKEcs7LsFxWJnFmKejDNAtrgNu2pQ5SXvxtTnbbdTzWMRybcAmBuz2NVpiWqh2XTXdnTCGpSPFGz7V4rWT",
  "key18": "RWSBqonL1NeLteV7256jSqpCG9Y7pDFQ7Vu4nJc6RWYGzmLxEciS8ZzXk7itUiTxV3mfGMRDfk9JPQuiMH1spGb",
  "key19": "8zJ7WM89c9WQcaahg2beojRzjwSrxt54mEVfEyRgvDx4wsLUPDC8K9MGXLY76pH344fU4NNZ8ApiLxdsnVnMmdN",
  "key20": "JinuQ8osknmhcE374jn9RgVYkYyMfNufdLpFbeVLQDcbd2CQmXLR5yKozcaHgvRSP23423TBi9ZdRLfgt1Uqzk9",
  "key21": "21wBy1WYsTmNSNh5c7UygwTPZACC5ar8bdFxgiqQuEF2s5ygwM7JdbtGcJ6wK9BSdGXKqjeeEyCQ8bPVmBFE2Prv",
  "key22": "2S2xww8hq9iYQZZ8r1L5f51uK7SKFDfbnPRk7ctCcbjHHKTfqf9HYQGHtScDHwtayMELj7D6FjfrbpYwSyAYn8u3",
  "key23": "4rUE6XA3AuzEMFbQwbkaAxJCXkn2AGLaDehS4hraWhMqoF42eU881r5EzDJ23yu8TEmNpnMTQ9mSr46eHtTtGLrJ",
  "key24": "2ZwUvTXBHCgSrm9QKM9qakTpZVTMbfY43jYaDMf9wVJpJ6bWC3vejbCaGQzewU59SeA6quaoE5MaEJJsoFF8zoH1",
  "key25": "44TtgwRQTejTfb8R2ws5kwkyKQ141b3phGfqPKwHoPftwHy9FdJMTH5bVdp75BWqPS5GQRadWA4eZjP9dWdhZt9f",
  "key26": "3AXA5V2JF5ARbvfQZahMiB2SA9nVnGvk7iHXVTJF7qQotGF4avy66ZxjR35ChxmBysSeeysnmrMTT6TZyNnUkLJF",
  "key27": "5Jvo6pPYmi5qDRgszre2eT4PCqBVcHfMrLJ8EnqE2VymJ7oSX2n84Gi4aP3HVG8xX43KnYrvJmnvQ18ZEGWY595f",
  "key28": "2rVBhMcfR3SvgHd5R4BtSdAhBxN4TD7WroTg9ajRqk1YoyGCjZRSCsdbjdWcd9ZEbYUHiPAi9Joq8217XY76pXcG",
  "key29": "CdrfUBD7g1EG2h7TZDFax6iWPi3dSfktKNtYFXoePVNCsDNDYeMwhVQ6h8BWADkGaW9kFsrossHNk298HPLE75p",
  "key30": "WQwjRVj345jmfEnUUSpSdn4iNcK3zQyjRwwbPcjjk9XXcVfHeXDBchVDWQ2dLGXVDrMvB1c9vUkjBD6Kcrcw1b6",
  "key31": "2V4i7JGdbQJZh7jWVMPQPTm2bJkuY13mjsbz1wLypge38Qu1g6Zi9HGubnqfgrjBA2RZpaBGcRZRcL7QoKSqnGjT",
  "key32": "3BBCUbpTwaxBdgjjohsPTyBxLNe6dEBGAxkisUJLRrJm3RgKmukmMfafuuBbDwhZck9xNw9XHrSQherbSmHn879y",
  "key33": "25NovcM8tj3yfS8DDL5C2uDuKszT4xZNzotBUNvni79unBSMdfMFFTdo1Pkg8MenxkHDunhGPEAgeRMeUrfFTvpq",
  "key34": "2cpbTueq1LonXX5B2MMPSqwmVFCnEj8tu1AqWV5DfEiYLDGYoV4Pinq1QWw5H2xWRFZq5HWPkN1Zvkd6daMMcX7T"
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
