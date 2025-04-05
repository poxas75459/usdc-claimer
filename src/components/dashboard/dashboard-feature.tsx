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
    "62ou7UAVJj2VNYgekxWHNAXM88J7As6ZfTUiguSu4nbR3St3KSUFxeyX9SfRW4QPy32ewFe5KTNJFQCWwV2yP8tP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5juj9ZySnQy6PgsimZ3727z1YRfjN8tUnZPcVeg4DsudMceKSzFqq33ujGNwsQphqMv5RiT7dMEGwwTF9PxwchdS",
  "key1": "rBjyy91HrbFUhsjhcvBqDeZZ6LurN85vDEhPNmVyd3a7fNMBDas9TEBuajD5z1HUoLSKdiwEhD48W6bUNPSaxMB",
  "key2": "2edEdhik5SWprovJYQCiCKUNdGLCzAg3UjPLH8rJkHLxSuRq7QcTZ85wpbf4dUEsAadUzj6TKF51w8zbngVLSRPC",
  "key3": "iEdGubkfvsKtjfR6d21qYCjM2EhruSR9HevqR7YErmwYuCBMLVXVVhCDJsxTfG1z2T6HqKETAZmfWd7iiNyjt6G",
  "key4": "4M3cDkf8D7tYhpHT5MaiurJJ6nBRWSe3j3WrELtqAiSMFxRh7edehBxKxSy4yKRFpha1qYpKbFa1qayFtpefKs2Z",
  "key5": "4tXnwpQoLSk51TvKoMGPfb9ZA1UJMNnhQgJZP4nU6doHmEYxbjfa76am5DcWm9HpaX6yr7n1c1NwaCmnW7hRBuak",
  "key6": "3xULzU4BHwVWxRtPPrTXRoAwjqeJG3r737y2k3mxPEL5EeeWLVF4zU2SnfBHaRGJ8JvSDU8uUoJif8phCAzxv4yJ",
  "key7": "WytrFYJ73FwjAZWxSSdR2aZQoePYoCPAjFvtv5KuMu6nexswE5PJWBbykVcJjc3WwSdZhHVeojvYphEaeX7LMtN",
  "key8": "3oqfbFjex2Q7NAfTAEMhLrZcVdRuG5Kv1yvXGg4X1AuMjaYCegmwz85TWh5XbijLoaKhTWD23o3hqVmVBPBfg2ra",
  "key9": "5qeq3nHryByXF8K3hFryT4faYG1EF99SfZPLc4SG1W15Lq1bGhy7doC2r46GjMSymzEhSGBD7rTbUX9RiyyTjskN",
  "key10": "3sKLNx8J9qNtJF3emuRA1NqByYqgbtLK98R8kwmYJRTpKUGUjM5PFUGf4SGVY1h6c9Ry9Stb2Ybbg8HjB8ed4vZ8",
  "key11": "2XVg2Bnnnik6yBEpEBP3SXCAC7rpZ93QjW6Hur7cy2jTRfTHwi42QtxzznCv87AsvzsJLa5F7S59h5rb2Hvaspyx",
  "key12": "kuKTYxebVpaCRqsy58NY83edbWA1MtqvGKXWrUpuoj8sUtupLkkaqipwRUq5Wz2eG8XaghKNrBgxg1ue7QbzUaq",
  "key13": "5c1mthLw5saW5jcHAFkUcy21v9SJt1JxPabgSJ3YsZTsSYXh2yd1jWgmZJ3x9PSJLNSZK2sQ9Q4F6iMZgYLDpyoe",
  "key14": "5aC9FQ1PDwTZSn92FihHPkAKqhXqtzihP56N2KjmAt4kzXoGJy4Qe8cMwsfCQrZkgt4jdhVPUbPh3fpJcSWWcEtW",
  "key15": "3hsChykBrpByUnaGiPaky73ANRUAQ7NbLdNs2XkMiPskhB7Y93dLLaKDAsQHGhrtL4ABoCESGdNnVmeJURwRfKfA",
  "key16": "gAUuPcJQ4qxADZDF1rEMFuZFdZ9DZ5yq7AMydvK51Mqph5KiyPKzeD1wRWDt3Xs6fveS7sP3ZfVuV9dqerW4KLT",
  "key17": "64Hj7PxVJZEEVN95toLPDAEfEDmiCLt9odpzidEe4kZAEDb4UE6GHhfmsv6B1478UpVUbgJ1GtZMUAuFVN1SJ8V",
  "key18": "2t1ieFwPXsvafh1tM6NGvVoSYjr1i1yL57ycgfSmqtzNwaEEk5CsTv8t3kwRf49JwgpaCchH3bwNvBhP5TWBmZYx",
  "key19": "4HCNk1GtEENRXHN617heePGJDxiLAXrvxf5VET6vwiksuVUtCjCrEW4HKpSmhKJudmCc2dmurj4LbiqQjasYrT1M",
  "key20": "5BMwjp4Yam6CTccDv3qvSJR25uMEzCggADKxEtrURGUzPsDZM1FRv8tyxJjWrRdBqUMhBVoPsNt9mZ7B6WMLdGRN",
  "key21": "3HEtxEeHdLWHEC5vH3GzzGkqYjRSLeAWfYHoviU7nX8nQeP6LupbfdUJftnVFXFy7x8oW26s4zhjMfuTLHMaXYem",
  "key22": "2dTKGkRs3hKyz53z7AGNLCTSUhsA2vqWrUxbTjTKaTyoJTWpPT5nNzWEYw2XxNQ8vTGQWaKLRkYRgmJqipGtdUHo",
  "key23": "47w8CVGseXhvPo1ey9mznNhBZKv2k1qEFB8kMKfQWsaLtEpzyJETcFZji7bf1hAY47pYKm2CKP29EN7kYJQCherx",
  "key24": "3wzVjizF1PykzGoJ1ZiRV1SKFRgNvvYB8fhSsTkVeaKM4WfLD4xVwgBV4iDFwUjqq2vTDvecd7t9ZjYqzJ7bRrgB",
  "key25": "5uzKFQtTQKLNFBZo3r1EBi9BSMKCkFdg11bMEo2hPEwNkxemVbprAAf8CTyQk66bvkW4t5KJxXYwEBtQ5o71LAot",
  "key26": "2vFHoH59JNdEewB3v6RH7zmCFokqtTCf9WLLupRLvozHMNEWRSYb6tTYry8UpZYVuToXtENzuDpT6D8F8rCSE3cL",
  "key27": "36Ks7W4oUHXLZFeZP5DN8v8B2Xn618vGB7JGt4tEstchLcz1J3qDNTUuoQkQE76Kk2aeyAgQDSdL55eCgCefQdkT",
  "key28": "3ipTBgVSTjGGQRVUZmymfgE1uEaMGVnuKLHFvPmipgSMP55ZhDDg7JDrcrjffTUeL2ftb9dw4j36B9SW3AqgYFGK",
  "key29": "3tQNSehKWZHZCmP4EDVhc1q8fFrViN1uwBnf4btvwYPLaM2a48rUz5BbeVjNWLwho3whrHiFDEnU7NtviDw6ZcfJ",
  "key30": "4QG4dAQqtKBFKchChk3N8yBnuMxS1hpKaLQ5hrxp5KrNszeBqtz5oEoxeg5azYaPAaTPs7NLDqGshqh1DdETYWfr",
  "key31": "3qXrKCwYDypLWgbkJ2zsLiPLjVqrngYvAj3vPFQbi4jivvJpR8qSqHH9BSqzfYSkd6dpdw1GihrGaLXPPioeVQJV",
  "key32": "2JEyPmFWn8f8Nb2rNhxesumGtxno2twCxus3eHoUBz8VsF4LzRMmy6UfxCBf5WbNDcs1VzHfBW2iAYvpZxAkXcgc",
  "key33": "iHoRhjb3TapWePs3gvfgueHZ7wCUdrCtejzRpTL2NpHrUancp51cNnwYMPZWae4aW9M4mNAUxWJyYBy9HAb4fjR",
  "key34": "5zCdVobMnVcvn6LKLEkjw2344aKBympSEpbzWwt1QNWKxCxpJJxytdH7jHjNK7G7kwon7p3PrWFKRLAsocka14Ne",
  "key35": "3djF4z1W1yAMKw4HpDX6YjcXFsFzx3T8mjxQmr86GvFW33HJSa7DrAybev6zs8ZCMeq5vK5UQHeAVrX72oRfEri2",
  "key36": "4T8mpT1NaJCw8sKB9UdiKRNpRZpfFBGFNKQovF7DvgKFQUNHv5BTHzsXohjgRnCCi67wHpUkpEn1PqsrYN4992j1",
  "key37": "2VbSSXfDxTFP3jMHVBWrEkZbVFPF8iMtXL9d5BUDBFCqAkrQU9Fqeb7vwe6JgGkySc8cp1p1xnKk3vYqTZnLLdBp",
  "key38": "5DnKa82FMWLsTkA86rzWhRxzgVNkDpgtfTaYQCnCipsAsCxT2yYE5KvxYHH8kGyd6he7Mm2D4mnW4YJgLJXj19L7",
  "key39": "5Uu9NLkx2b9RTroygoGEWqAJmY8CEPagRjZ4VtYtT12DcfvULNFUjiSuZRGdqtHdByEqbnMPkQz8rhup5ZDvoCca",
  "key40": "2zNG7tp8JNP7TeyaY7ZhSnHTBkPb5ijdh2kBmPJt94V9rjmMW7Lpd5QF5WZ6LsorQACcW6VVujztJWEoLppgFfNd",
  "key41": "2ifXfDpYuu5VaLMXNzMNTHTd3U1tydLxbMdya8mYmtHMAj1P4jxaoCFHY4gWizodgvFmhJZQD9FFo3oq2JAFqHjV",
  "key42": "3TYLAoRQN5zLahsjSTKHiTWxpegW2RAkdj3hqr4fDzMCiLxxfrL6cMURw1zwmkLirDjzRjxNUjwzEFCpc5XYY6Xn",
  "key43": "3LFUrXjdjRVTxUN8DntThgvfuV7NsWvdrENK5VyeyYatdTKNgtdviCgQmHC18fgwaEhUX4C6GmKJKHjkyzD3b2d",
  "key44": "3t2Pjd4ezJ4NH551Yo4rF2FFbup8qDZk8tu9kBj3LmMWyMbXRC2F2rt8H8ogtMNmNdfLsyHZo3CyzLN5RCZkzgDR",
  "key45": "2qESfJ159gFuT1t4eFL7Duxi8UzXr9ryBz6qsPe7uhTyxiFZxCTcpGjSFq2ZEWLJEfD3v8KYS6tXUYTGLrWuiUHo",
  "key46": "65z1A6f6NoE1xtNBmko7vhp1ZVw61A3Z3U8z7XapV1TgKCYthh44uvdnJNmACuzizwfGqnyn3SZjj4gpJMmrLtTs",
  "key47": "5rycZnPaqnGQkKcdW3zN3CmKCjdyS3rHFLARhvyumke94FE65C448YzxFDXgfjrwiH9HZ2qziCpNPNsoSi4ivr65"
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
