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
    "5FUp7Z3VicvaxWy2hypcgkpBWqNAoFLcrCxrA1zJVdsD1Rhgs84cvZaQGghgJPeeEj3AZnGDhjagPn61DAdfmhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDp3sCwC5uREEWd6cBPPdWotz4JUWXym3NUMtoBAe7cxRye6WMbJsax48wDA6fsJbuj8oi9LjQ79btGJgVwcMUn",
  "key1": "3bha942E5YGR21ckW7Xxb1oNUCbh4Vf4Qrhr5HfqdinPt6nPe8MhmXWsGhyZgLwL6XhzdVcs1hNpmGXdT1nL23cS",
  "key2": "2PpeJtULXW3sjwYEJsxuuPM2X219NjraUn4nh7SWgtRmXp68neSsHbE9Zw9AuHKSHKbyfWYKnDn9Qi8MzbR866c3",
  "key3": "2AntrQro9bTBmG5sg8TVsRJsrVTAd87549eVH95XVsUfUQUdmZZfrhaMadZ9ufHQtzfhqaLrndsjWBDJTU9YGF33",
  "key4": "2G4wufxTVeW27eA8HVUj6W6P12DqGdTyDdtzUCXknRcgxRVaRWxH7EjrXHNiDHwx9tRhrC2wUZDCL6XCwfn4dbqs",
  "key5": "JxgepqKmM1fEn4Wu5QZwqZxMw9p3aEBQ1DhE5AktZsYsBApkGAWyR6iniynwR8QFPyLxgUnyeJZubo7pKLTpotL",
  "key6": "4zEkXwcZwbJ3N7P4g52oLLiByNscgdKykf3z6Q1GocwreSaQf4UnXesahGQC3o3jq39CJEZsVr5ze6vYnYvE4G2b",
  "key7": "4N5XySViaZaxSErET5NxDYjgM8FpVXRVS1YLxFbUE5z6rGUggxoCLDF376wMLRucrQdp2T4oPXjDugBJdRbhTN6a",
  "key8": "57B2ToQERni3g2b9oSLdGcqTAzW6c81aTAi3DR5UyCNQicZTLwAvcqwXt2EkVuXbaNJEJAzFDjuq6hqPiwrktqRJ",
  "key9": "3V2EF1zTEqUSDJ4MrQx8YLhqadyi9W3DWz5k3AHLGPFHPpdgDQovok16CuVGzMvsiwvxzgzT7tBHcBJWHc273ivz",
  "key10": "3DwpPHQ3k4JwvtBNA1mVZmTUnvMzxPfwCbyX8sMqwLb3uDocJPnWxreqxdcqW1P75cpTLJzV1u6HuGXWLcKMQ4Sm",
  "key11": "JaUEaYwkRtVWYGqu5zF9qrYK3Yh3kx6Xyod3vHqVHQ8h2jvhS7rL8aTyrZiVpYYfJ8VsiSt5Tm965WVRMdBzK6u",
  "key12": "2dtFsjprGtpNLKadTs5EgqXMYudCNvRGnCTKe1wSqzAR93V8e5SRQRL54dnEZJiw9v2qWeFHgiqrrhZ75oStck84",
  "key13": "p7VseQzyDayFjUSUcXymu6ADXZ5PNU4WjvhoJ9kbUBgjvNfQ5rrVNiAh1hFEVXaaBzwJMBG6TLBK1mQSyx1oCWC",
  "key14": "519nFPXNWZfWBCADDu4bvx1Cut42Ztn3qHZWWBGG41q3Hy4qdHtbAUz1mQ8wx7DWES8hNcMc951mk8rZ1goRhdcS",
  "key15": "5Tvmiqqpy8Fz8cCSTLAuLWBf4uPXTsF5Qvx6j9pcmEh3zWviUiZnXK3199NSn2RgYvSD7J8W1DFJpC4RUK3zsRhc",
  "key16": "zywxMLSZwmD4hPCf2MZYqu4Lw7RJt1MAGnSyk1cjmD2ejHFjp9YxCV8h7JGZYs26kVUhWBFrk3tNjByNX8kPy7x",
  "key17": "2e7hR4bTSURAGcNrtPC5F8CUk92SXF6uTBLyYp5EGYqJBTkZjpLwT9F5YG3UyUZjKfponWa8tu9kPnrcg1pDsLjX",
  "key18": "5wFE1uXqHQZAs6NUBwgXyCVN9UzE1Gq4tiPYGKxYUCvQ6JeP1DXNHExcKork2DSdQzgcWe7ZD4pCk4Q29TJLVMZm",
  "key19": "3PquZVkfDpJz2wfEYy8vV6BkHNCddYTfoYXLz4PNNukADHF2XrSR7sUacTWz7zVQ1pdjG396LKBpecdmv7K9F4Jf",
  "key20": "31DrsxBXqd2E2Zba3ny9H9cksNCG5SEEiWgs7AZRW8YMmAJRG1pi89setqQjNrxSFDpkvKCDPTH8BhK2bQJCtqte",
  "key21": "nfRb72Xq1JL9ZU1oep8tG6K531LknUKR3Cg2Ma5CZX6UeR7pxXnuAaoQRkbwNC5S55jeRCWDgxJaWpsBTWpwhHF",
  "key22": "5WaijiVcmsTZErrqrjYcxP6NTFYnqhnUhFfoBB7ouFWceyGXveGNBT7PR3egV2ysMh5q5A8ppW7dTQ6k65bWqv4o",
  "key23": "36PgNQbVXMVTn6J6mdgrAMJcqCDpuJdBUaPbGWjgK9vFJwpMH6zPpCQtV4X43MucQ9K6B4UjU327oK4Dkeqdgkd9",
  "key24": "4c6ZscFpvSP3GLhJ4ACS9tgRYGDy8Y6qj5ZbfBqyG1SoDZUu1egYqQxpBwdt4NVrukguYW5SEJA5kvhDNK51WBFg",
  "key25": "2FKesup2EQ4YMnZLgSdTox6ysuZfomUYVDjX1MkatXwwH7uz3EBTMdpAXGzSGSV4ncnX5xhU56UHyQyCuW9cqbDT",
  "key26": "4SD5rCmFiN1M6wjXamC6L9UyxdiGCcmbGZeHJNzXnuXjHhr4o8XqYQCEG7E5vXtviEgLMtGTHoD4BYnKUAx64PM2",
  "key27": "3wkJci4ztzvjukmVtWdb9xdw9MXeJs54g3hbyYw4HLzqtdnUmNse2cYoCuq9X7NpBGt4HhbyADErKo94Ywk9Bp83",
  "key28": "121nLdux7E83e1cxZZZf16jZjxBayZK1oG7iAFk5LpBZ88TAiQiQaNGpdXTSm7HsB1FdyBeca6hLUqDmQiWSvkfg",
  "key29": "4kKyo2umNZddf7neiZZkv4f3uyTsz2deYwA1kfYb8FMT6YmeFGvjMnYguvLcZsSC2xd4oaJxiKZMrUGEP9W2mezw",
  "key30": "2dhV9eGUda1JpgVyhtCo9KaEQ3GaZnFAu99DaXUJbCNEd2nVpnAMg6xoKcyLUaRPuCaKikjUAUCxNG7KonhB31RC",
  "key31": "4bcQfEPBxBNLnTWSoQJcFM6U61F2fkFw8vCQu6pjrYj9PDNDmwQxqB2Cb7qMGKYysnSYCLrZCg2kBVEUUFRcjsb2",
  "key32": "41nfXcqnLLHGgQm6Jc5RegiYF2T22DFrTg9D62XZ1QkeZBUbRyfZgY7R2S4pfszP5F9XnVvuFNhzFs7xSuEU6wTb",
  "key33": "3VRLBfyhF4xzbwiSgKevJMmJB31w6CkmyemgDRR9yLEFdtmufji6aH9rktJzmKdSLydKsp3c5Gi5iSX6fAvEAtko",
  "key34": "35kaeEzzF9hGKFEowodGetTQVrCNi3mgFGRHXiAXEeV44ZaneTSNym87WQMFMevpeizpExcMbtvRMzN3bvM4WNL7",
  "key35": "2AtTfUa9m3LdY7U9GEsbACp8vdGhyCThbeS3skZ4FktsmG6Su2rMBmsqbd3CabEyrUNerzt1SjSJnZCJdmeGZEXH",
  "key36": "2AyYY52o2cfEUwG3dczZpyZ3KCrWAHrJKSffW81v6YKvtpvXXMCN6nucmZusvFf5WhUuZJsUrMvWmegNj4x1rM6T",
  "key37": "4xHMDjeh5ggDak5nLDKNWoqEidqpmRe9zokK1tTmQvvq2whn6ovXStfRj4gnpyCWhUD8zbVupLgKfi4hYsrhoHDP"
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
