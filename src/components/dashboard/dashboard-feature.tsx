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
    "k8ZXQYbzEdXdqiwHxRFf4USfpXxggHMqWA7ZHQrXa99eqKrANKDR8fE8XcLjq1CJMPyFifARDy1hGGkZSq5iRzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BVs7au2Yryyj2AC3bDiEHhFirvpp2QBWzin9p7AdeK6otzXrqYvTFq5druG1uUJFaALBqjntnncL1dnWe8xepAy",
  "key1": "wyTmteuuJXCbiU4Ee44zNwG4CeDpfHcNHoqBLNhTcTvwNaTGJXCtH4muP72Xhz4TSwuQgx7NjWBE83v9FeX9vGY",
  "key2": "5Hm4ZxcZUAuFP5ewkdFY1TuqSdiLvzpJyqDsvD33xBqVXU3x4HVZoBierdtfPaKFcfq7MwEjxJppgm1BYbmfLxqx",
  "key3": "5QjBx4TGawsRHrniZ26EvRLAgSnjFrVkyorXefSGFfY99rdC2SG8JGECrS8sdzXfi32m9vztb5P71w516U7QJLM8",
  "key4": "Uj6H5FFfBeLdn7WoBz9WtHVAJ9f5FDRhE8RKKwYF6RS1prj4xcCmqodG5vbyNxA4YX4wJRiJRKjARSJ5j4uzb5u",
  "key5": "4cLXqZ8KojpmF2ybwehRLrUwwnbivaqXrucdHSYnCQCMucuaQKoXiYBrDYp87iyYauEVBmeBjF3KEXzCNTZXbbHq",
  "key6": "pUa9fJnZosX3bg9kwQiqCnQeVqXgBmDjHNDEm88EKzShyHiphprUG1eVBJtwH2VTfs8aqkcZL1zHT4qFCbzTrFS",
  "key7": "Q9QJMcJFH5tyUXz8jbs9hAgSbcTemm2QzHSZnv5qfaS9PV23fq3FHtPA4xcULz8rdjnKP6RwvLAPSSaEwbgpXG7",
  "key8": "2YgNDbZ8EA3qYWxdmqbERUVGPxhoM4XMwCUvnG6HTT2CE7UuAAssXfcKR8oDpmeVJLebSZQkcthUZgsK6WLtyLAA",
  "key9": "4ZY5nFK8xmwYBdrYHppnkQz7kTt7p9165dHLmkPMDBhV5kUEb2kqkNxK7WAHzpYyGdaqk5CgLwYA86r8e8soVWrE",
  "key10": "2L1TruRTgFavEtcw7bPBrVwa2fX4cHvLVwAPpFHhiCCHnhXJ6FonDcZL4XUcht5Nj4EY1fYC6zAW2b5DYTrVpcqk",
  "key11": "3nhCypktmd8H15kq98n668DqSnrTMhwJvYZKfsG7WkgMXZwTpVTSvWhptbgaadCZ3245LwZAWtG61zvSNnNb3TER",
  "key12": "65b9GsPuDJfpFwBePs9hXPwtm7LQvPokTjPbEDweHwPkaUk9jWd8Y32vmPFwnqgSm5tHN2CNUD9XF3ff73ZtQyaW",
  "key13": "mACRpyFECoMNHjd2fAanFU8Vgifvmfq1oeDQtRbnVUHNKGx2zSM7xgoNvAQZ9ECuCGFgrR5tLKmw61zntmNgfP7",
  "key14": "2Gi3nVKSMiN9A1PTRfjqgZs5FvRnW7X9cGs5J67tc7KBtrwYLJB2WKbQ86CESMpkoRVNfwFT9x4XdzE3e2VJQiVP",
  "key15": "4XnXYBraHkeY9Kkcwxa57qv5Cin32oMRhWucpExPtRnLMCpLicAUvxEF557AkQicDcDKCBihYD6DsNRbvvg3R2Wi",
  "key16": "45Ca8hWq698Eo9Pfvg2SBcEiaeYnenhSRjQUako4EKvJedHUGQWDWPgMWuRf1GzRRMKho55x9f5nw4bWKby15SL5",
  "key17": "4QNzcd5dSVJgBaUdNcRmbkidNcnzX1ieBGwC1erUMNgmhcuQKtSQvgSSTfSEGmmM43jCQWMfBZLLVZWNf7Tj5vCY",
  "key18": "44DcYKjNbNQ2A1msUEQH6eU9hYZTzW2uDSgjao2Bak3mBNpHhT5SNaJqcE7vCcpYkmf1JgBdxeRD2YHcxLyP9Hoi",
  "key19": "QwMhAPZqVLwSu4MXPshprcVQqfksF2AKVY87NsNi7uEgrjxF3w3yd4xuQ4Hvj7z6Fmnu9ZZpZq8sDv7dYbJHUXh",
  "key20": "Ma8pogFwjhURvzy2jam6hLshRnhZfAVALFxgieqAoPdCoN5K8A8oq3HMGWurqQRohDMX8XWipzUmTDsCmSEBz1b",
  "key21": "2p2gGCmDBvZDk4mKsefXT3nRaacaLbsKAXbc5uApaMZWcoAYTww5Nn3k2Xsex3iuv2gAykSUePAjyUigZqSR7ewg",
  "key22": "Q49eAYcxowpNfuhgPaBjtgEWhjxDdaAMr9jMPS11eSEBxYemLcVKVFABU9otyHD8xnBXqzG5NpCtxizqLRki4oE",
  "key23": "64YPNqM1ZSHHTCnABrHSngmcdQH9yJcWeZxMFAtD2QKk2N1xjknBECH8ZgUF4jiekmjHZmdfJAJkuvghWwVPxEV",
  "key24": "4g4Qt7S3qHZ8VAmE5ehsQ3zFi9kxJTDDH7FTCJf6j7CmW21X6BA3MuoMEgY1PCnJFCDvizC2BGZm43zBbhmcpqhH",
  "key25": "3nw6qu8sZeGYhRqFDptLfwfSmNjqCND5NfnVYdFDd2raDuSxbzRj4oo78TfSDPZD9uCxEALbTmo3n5dSg3KmEeuJ",
  "key26": "4ZbU5CngTiXRdwGXkD3c7snhZrYKEMr92jFErAKF73invykXMC77davCoTR8yrXYPxCiXtigHAZXW25CihLfzguz",
  "key27": "5DvqbGornJdbbSSLeouCxf8gGpGWvtexWwakMoU9fLvyJSWPFDRwx54TV9xuP264Aor6gLH1JgvDzTWYDUn4Rbt",
  "key28": "5DhT51fJtfkHKNwFUqmQV7TLANeLiQivNXTrrDvxNogGdSUfNraaHVaQpH7HkpQYvTt4YbS6nCNeFB7wZqHu5L6F",
  "key29": "fd5bEw8Bwyar3rqo9LzzJyy9PiJWuBkrxsHtYWXWwiyxbRpDK9NBQ67VdMTrGtUQ3nqLYXCgfBs6FpUm6Nvx3Cs",
  "key30": "5inkJH9uBSHyw15cvdFs2wfgLw7mKPMRUXPKRPjUU4r7JY11jmcRR4JE5J6cmaU6pGE9VAB3auD839fZLMph5eHS",
  "key31": "55XwzCtufUGhTs669sXj4nS8wAbAHzcCKvUfVeRev3HyQmWBanszBHXRBpqiJyFQFEdgxrufa8enGAhYcPc9csX5",
  "key32": "25LnBX3MKimykBgLtAQAGWuvFrqN5tMJBM2r4Jq58pKceHQ7MNHQsZiAHrf3GFwtJzwa6S5nLsdR1zGqMNdDJpg9",
  "key33": "5dizHvnU6cbeajymDCUpcnaWJtr6kBaW8eTTFiYhFGpgGeKV1pgUbN3jtx4bvZ8c5oxsCSuYohQEmPqNKu1McqTN",
  "key34": "2NU5q73P5DoHEnLL8Pjo7SN8dbdM6CEkjm59AXojEo5p2Mw1bEfjEPuez7fDqSQP6QiRzX4eUwBxrn7vLiSTtuAk",
  "key35": "5ffo4gYG63thHAjJYLjVfzVZs3XxwWFaMdtJTiSYyXWDjF5QeavoK7CDjLnzZZqCyDpLs5iubAMNXxKgGzZJh8yt",
  "key36": "57v2Le4a5685gFkBwMaQSUWVK5dX29bsiWzbPQZc7pxKHxbR38FNGyVc2kCA3THfmSr7NYPkTWU8vb7QmQBrWj3J",
  "key37": "5pqnt3uYCvUPojzxcnp9FNbcaepboUWVRTqkPBgrD9ef9SbeLdqyNjXWYkY3XgkjqZmj17vrMhdPh7EF7yjT16qh",
  "key38": "QGfkBur53B9YZb4yp6f9PpVX2XAwKNt9W5vovmJAtjpiawidiVJzSNyQAwBhDSvbfo4ZvCRYYs76p8dsackDyzp",
  "key39": "2WR5YUzEyaKFea5XFfPTwEaFbcx2xzdH33q9hrttqVxycZgswy6UjT4ApT7X4mUyjH7htijgzV7N8YnXYbvXfQ4C",
  "key40": "35NtcNgoaieS8ZyZHt8w4Y7MZfMoU6expZyJDieFJrUuWeD4P5W2AC5vtmjFefTwdcJUZxfuqHLQNWu3GmpvdN8w",
  "key41": "5nqX5DJmWCtJ9R6JsysUpHei2saMwJ5jmTvZHCFZfcYptAo64MwPWN2FYE9hhgFdptrdjstCfLmiHSijh1ApZwco",
  "key42": "5yUd8ak7rdt3D4eZzGsVuCotTe3EsB681do42LjMSArmoGMHHf32u6Nmna8cs7FSQ8StTEc5sU8g7Pki1MWBVNak",
  "key43": "3uvLqdtCnJHiqR7u2Q1YyFFBcLYVg3muu16erCbexMoCxNQnM1ZoU4E6W9nFGXRMpPzYeQDfXZwEqa3CApPmrYzJ",
  "key44": "2SzdLdCfNW7yKqbXFr2x2rJpLAEs8sNau8Pr1gNyEzw3wwhUg1oAmUFwLBB24CZWCewpi9XUu8QaW8tauLtmQFgL",
  "key45": "4HxttdPJH8cLtpbfLkzdfMzotmyBdah3iJg31ucxFifywSn8rzDxaoMJYBm2X4NuJgednVq2bYSCakwX2cMzV5Xk",
  "key46": "5b3PPtsU7cVZMKkzZBc8MAeqAbEqh1EKQb9H2vRQPNisSKNtJbf5y4MkEfnT9rmMqFwHej2o4CxZdP5iPcu3Z5mS",
  "key47": "xLFs8t32AoSFKVhiHLc8GGzc2EPKHksWyCb8X237jeX1PWKkn5PEEH3nVTELoMqDBprWdjJJTmLMxQAmnZNcHmu"
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
