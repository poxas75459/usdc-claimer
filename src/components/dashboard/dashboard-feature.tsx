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
    "4yuikC9c4jTY1qriW4BxVnFNnGcV9HSPWPLa8qrAEjzRk3GN4gg4YioU6LUHJWvzURMfWVfaXxJaENUkQaEoomni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Air9KZDrhvEe96JAVuGdG47HLZuddVVx3QHkidw2Eny33ZuoxLJvE5dt1jsmxvJkgLa6maRnfradFRxkrh8Lrnw",
  "key1": "5Qqfgs3rKdp8HDP4wtGy7mhfSETJ79HYev34wNfmHqXAKMW7SoS28C4nqPY9TNGvz73KvU5iwKKo5STEu85u1G71",
  "key2": "aVkSpqBRYm6bFXyA6GaZjsBpZimiyDCwTRWvy5vTdS4LFykzZw6jbnDjaeowGe5PqBY15at1rxh9oKSk3parcog",
  "key3": "2aAJbbnarz6QVEiLy5Ch1e6HCb4B29SxAww3fiqs5QcAPtebpmXvgdXAT7QzDcGZfQeQcwiFeNAXNqCUpgQFBJ6E",
  "key4": "2uwNxa83oT19E3YWvXouwzzoLNfHXwJPHM99d424SDG7uHfh6KPcHLkVtDBxCVum7HCSJnYbbYNA4sWGV9cvCn56",
  "key5": "5wQQyroefUbEWnGzKUhPky8PfcNKohYTDL6uTYoQs6vSScLSb4HKu87WwVzM6329gu1rkU7LQA4tYZResprwFpGg",
  "key6": "Uz1rFrRUs8rKYQ3NxyeuzoR9rLZ2pi5pocY9HJ3hw1ezf894wUNFy9V8gK6fbZSWZ6qkj8EQVN1YovRVDJJacmp",
  "key7": "AGHShDzpJ5TN7V4GVKKbFxmzDUGqcgXe5ShtkibxS8ekpwVzp7zweYLkmWcDXB6jK4Xwvcnxd9Ae1VbEGm3u1gz",
  "key8": "4KvGmTUfcU9EMYkDfwUVxbaCG9mqAeQD4iUuD5s96WwXFDPFJngiTCzch8yHf7BVo4qPNtNm7itVmnRypjbPkwKa",
  "key9": "AmXxV57EMTRpfT5pZ4J951C6462usdM7yx1uMKcmNxRCk27XiJ3ZdLEFwPYBzKWVnWeuuJFvYH5KHSCbnsKF9eA",
  "key10": "5Bz7k8fFPHKp4AnZv2154DHfzoMrJ5FexKCo9joEhZ3FMEvPeSVfSKPHx3qBViBFSCPGDT6ZcGPSdyRUtAENx13n",
  "key11": "RARX5oXY9kSyyusCtCvToGMzJ7gQytJSd6iBbrGnoRKuY8Y1gNKCYck51wYK1QTchnpjythpavWaAJQJgn7RXBF",
  "key12": "5RjdRdcYac8LCaS1JFGFkKht2YCHyJnjXSn5YZvDetRx8Q296tqoa6qxtX7SvT7ADuitvv6TvAkwAn3hZqsZy1dD",
  "key13": "5GDcxHifGPCz2mVBSn17otGrgxz1GxXVwNhHSmmbUegQa9puykzVZYPLPs17KGZzZjMBu3AHGnjxsgYWUZ3Pw7sA",
  "key14": "3PnLVXWxnj31EU3Mdo6JCZEJ7XSds8vKNA7dtX7ozpeHnfxDzEecXAXnCJngWRXmLvo19rGENNF4RcU4KuYLyv4j",
  "key15": "3ryp8LV1zYmCoN7r8AgB4kRfi6e77XAZNEggy3n1rjJHctf5qQ1jCyfBeJgtjeQfzqox44RJZ8Yih7D1oYcw84yZ",
  "key16": "5XyyFPiSWRD8K1s55KApHzjJP3SieQaG2fD3oGURFu8gE6cYjDavwq16CkcVH4DKSeK7Y9w75fMmoaLf3skJsohA",
  "key17": "oT5wjq5vop1yp6PACwtfZpkFKHUroDiX5PSEgz89xim1CTWuQg8hbxBLX3TWw9kj5UUU8XMb9DEmM7o79PGJ2dq",
  "key18": "zQySmH1ZfPAD5EbqTJ9K4tKBuPcBXuSRm7gCRhHYVWFgnekj9uCUFTx7yUQz9yfcGQHjuoVyjm9rtp9RNv2oj73",
  "key19": "5YKKJhKZKgaRE6uM7w3kxr2d3AHsoqT1g2R2k4Cugqrd52ewi4YEF9aV7d26VdF2VL9LBDBqx3xttxiBSYqjeHGm",
  "key20": "mKja2rzTdmGumERTZYrbrzSoBcAgrEsXvp4FLkrDYX3XHis4uWWsdd6fnXsmpyLixHjSSbH5Da5LL1uRVg5zfYq",
  "key21": "38EsHqLbLh4wSqtsCsJddjBza9DpiQdyKnfheo9behYExZ5a7oEM6nk7GjWPZgwjumuUNQh7u7QvGet63SQXgYNW",
  "key22": "2pDH95D5vD6W4vuK5G8YqWZGSqSDqYUvtqRbohL5jW8uHZA3B4adRK9QzuLBg4fa9KnookGjFL9XJ4A81QyfHJUb",
  "key23": "2T7LzEsLvVthfNyx4i7bF64rmQRWwJybtFnf3ofXxGjaez3FzvHRTum6gTZo7J9zD4uppHxfyjUHoTXK6tmHXSnt",
  "key24": "4gCFKg68TTWYi5MiTTtoPWJXjZJcNwT1oxQV5vPnMoSmE6jw9udRxRRdqgDzWypq7XZygBNYp9xVj32soECLaJqi",
  "key25": "56idg3yxCb5W9ohRkwhoCpeqjxyViddSUMUkzG1ZHbjHtrDeQdjKnZBsuKpksVd2YX6GQbUXxNtovcweDvPiekfB",
  "key26": "NCiSx2Fjb4DfBAxjfiWrgQRLLk1RUoKAV3jEw4LjaQRCvwqfGsUEPLfdnNYB8464mPgRWKFSkju4KisxT93sDiE",
  "key27": "28J3SsJr1pwuXnSbB83V1fqLBm8zdxVd5AZY92xwsT4HSxNuJpF6tLHHbKjpkF1GavrqgHo1MV7Bv8gJHGNUScVn",
  "key28": "67Cedi8tnpK99R2foU4HEpPssJCUzcyrgPTmqyDHbrLpdfds3vMd1BA98GKHM1JcVLMTjjGycW3yUyUHZzbB1Akg",
  "key29": "3jEEewBNYkpSMpMENtV5CjbCZuHCoW4wQi1dTxTaSHa2fAPWjbwfUGx3FGhk2nW7YLGCqTPYRxFBCUHDDuPPW7wF",
  "key30": "3Ua6qN1j7RE2XNpZEek8eG8nd7LFTqTFwGWWS8WQLt7C5y9EkuToTfYtQRBhozThwsYcxfhGVKgprZmdsKfXkg21",
  "key31": "5GW4yCQeWn1M68SCVYUSZkuSoMD56rz1QWCh5tFfzhbtVfys8rXWBho1qVffAHY4ATp27m3oUVVb8CviwtbX6xnC",
  "key32": "5khmitDegtZ9bydZZBCDETVYRP7kr1dgBZFmpBQH372XoPwNRUyBDGQLxX2j46nGyEeP9v6aMXV8E251nSyPhRNd",
  "key33": "3FGY8gaSUKSp4i26uUhXUm9XSxNPzk8RRKVzcBDxcc9gc6ePXZYfrf4MENaFu7LydwwduD1PVW1jM72nyHwLDGru",
  "key34": "5bDPDn1rHfLqspVLq6R445j4NbQvPBazrBcLxF6oSVkm1rjNUYu2Vou8aeNgwAPbbfKgLCVBBwpFXPxjMth5dMD9",
  "key35": "3s5x1qSNbw944c98sPMmggy55saMiZJY6AM6vRRembJkQJTUMTabQzfSg2AXKrzH2Mus4FDSt7LGzAM5iMJcoytm"
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
