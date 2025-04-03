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
    "5pivey76hHkekNiwEu8KGijoqcbeGxBPDNLzbcCU6zF3ujpjirwDF6NrquMj7jLRXNTTij1YYiBu6syfpSPT1w2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AM29r48eyrTzztezcCH6tmV8y5QxN9EVVQKaBuKMYn6UQ5TFgJQTBPbqX7mpD2kEJy1nEbkX6SZLd1X95eWUpPx",
  "key1": "EwHH8pWTrEe2Nb7GNXxHFRa3pP4dbzE2cKy5iEJ1fVv9kTyniUh823mxEm17MENgBVGct5J1anxZURwiGXvY5sV",
  "key2": "4K21RgHc5khkMwx4u6q4MG6pqiRVfnwjPtdd5Z84Af7XZJq6DxhSgvib921Svge6mLE2pAmfSw4KCvFSDdTnuEMf",
  "key3": "4V7xbsg5mF6oUeuufQ1xZena7i5bVXDKDhovFxJ1VELJbYBYeXvUQrSrhRQ6KgxkKw5cSAhgpbeDgahiipz5yYVG",
  "key4": "4dwpTdnqCfzB5E7UXr2mZAr58F7ytXL8Ev5HXZg9vnmqSRp8U15KXz1Z53zbVxrD6peCSpZYQfZZDpXSMZk6HwPD",
  "key5": "5cP5CY4eujLo8EUmro2RUU6DHXFrdsHY4sdW78jG439De3bhcygjQPjZtMdNUMtDma1DeKXbcWTTFPmdXQ8NtjCy",
  "key6": "2sv2usuTinNUoYYnvzw6TtiQQ99cXz6EaeUL9MHEFgTDAtq5wny3ctPNdsc7hdexb6G671akFPxh69km1QypRKGp",
  "key7": "3TbjogLVrLUo1vcXjUM4KRyJiQcpVNWCGHwLLDweWh1UeJnGZFxyvHrEhVN8upzdqi4taXT2VGogqJDr2Bt7gFqE",
  "key8": "5y8DnXX36f5eVmovgoTbtGZALUTHPfpFWowfoBsFxQ4ysD5toZU7y71BXs5Nx1nYyQccV6MrGUFraHWYVFCWQSP3",
  "key9": "2Zfydxu7pGBFj2icKL2wYNGhkjGycZJFDt92wH8CGDGWMW1r1fcG4PTxUAZL3oXRnzBvoeSzvgNo77D2bwJTP2W1",
  "key10": "4h9rqdf7pyKFXVyVGQZaaxSGfvVU2LvScws6S7uUtciQVmd9s1XeRiXntbwGD2qW1CA9XTcbkQCxHKkoEiTfKE1s",
  "key11": "5DUUY4oNFQzrsfqvYmxdKohBvwY5TiFtbujpu9Vd8Egp1CT3hmMdcRyNuVGPaXd9HsLur4BP1FxWNKqGf3Q8XLrS",
  "key12": "5Yr42ZPuCPcryC9p6fseqmPyPhEKwahcpT71Jc9Wt8xkWF5YssWT54VD1Hq7QjHHM6V1oXHjcgqvgcfA4PntHa73",
  "key13": "4JaVSg1cmnPcjm9tfYcyi2VzUxJSjzHiwtCHtMmU1HERa8wJLzVCHHdG5XdErPTKwsMdFi2Kc7Gvu2H76vQau4pA",
  "key14": "3NDAPh4e7fv3rfN7F3zMrUkF3UwBmc71UBszzGw5aNWFYy1Xy3ouSijCZqM624wHKPKe4b1HaoCpPoSqRfJHG386",
  "key15": "3qD5cVXaneGYf3QFxk3oneoBMjaDSadLsMZC9ioYtB47BPPT8Y3H89AHWnn6ZmuJKHWxz76iAm9zAaQuyCW5aHHL",
  "key16": "3J4vWdoYhYLgNuqUM6nPgFT258GqU3HddZ468JTuwbpHygxeHEu7biCb47ttqfponLmEPVh9m7x5XBppza2kJ998",
  "key17": "3g1bFWQXXwRdsqfdZaw284kvuQbAgepir9MdhBntiqDYDncPkbDDZ7cxWnqUKLVgUtWSSTT8sqbpCbwmXnwm9s8d",
  "key18": "51xU4m72AMhwRPpt4LCrofU5NmzE9bJ3CNhsB5qMPY6xTJ1vGdS8UzvPC4VfXniSeQMxj2XcYXNvP5gRvLms9Hyu",
  "key19": "gKv9cPby5RRHKmHFscZfpTZmDkpkepLdPXuYUFSR41jyxqGsSqi4JjV4bn6ee9FGyP9rDNCQZMHfapYvyjKrxkE",
  "key20": "g9zzfeGnqumJqUZVpLrTmVBH5Dcc9He3n4er4zxeAkvRS1k6WAwbo8QMV5o8QokfHY9kkyXgGH4Hzz58GSbNQAH",
  "key21": "1sRKGP6Hwr7UGZfCxtorRrMKQDUmUqoriAmKTyLT7U2Jwct7dYz9S2rWZ7DU66cPnZ55Wt8EYjgBjjwpPPLVhYQ",
  "key22": "UhwZakA7BVAiuJnZhGjTn9yHWc8mxfxJfga1rTzF71EJbmvA4tUPgGdkRQEHmUMehygjNRvh32Ai58dgXc9W2rA",
  "key23": "34zGrdKpRs6bD9amSgkfdCztktBBRrZas7oDBwtnVDYojqPUvYVK75NviX39g6B3WN4EjgzhZFhPYaPRfFd3tM3o",
  "key24": "3t3dzRNTeWhn2VT3YaN4FxRCnGbeeQsjF4zeihRB73io32pJP3d5CSTsVDRiXvHnGyaG4mD3CQGGmWHS3kdj6G6J",
  "key25": "3NUUVQaBLWCKTghq2dmzGh7nXb8QU7ijXag5QCbj7GfEe4qTe2QKswJeAj5kcVvpkW2GWJzkBQeiKBYjPkH1pHY6",
  "key26": "4wtX9nVhoHjjUyXRZA93RodhDZ2PS3FK1yGfPgp6sXikgGPvWFjAjcKzKMU4vaoQaGZuuJtPvJmpoPm3xNfSHhu5",
  "key27": "NHWezvYDFgPvmQq9LUAcPAQoA3tsbQwypNq7FAHSNQ2FKcd4zkhrBJ3GqyGrQV6UBWF7hnPv4MsGxsgRct37pU2",
  "key28": "5RJUzic5X8tgT4oGuznmAj6DNihEAJN98LUwEjqEpAddJg1tgpTq9G7eHzpQSWCHUNJCYopW2Gx5WvHKZxnd6qua",
  "key29": "2b2Lv3xB5tFLV5EMiJequqdPWAaYEEqq3EJRexkcpsjPey3wuR7dnDJ1PTckksfzMvD3vMDYLWYFuskTcC4xmBRP",
  "key30": "RoLuaDiicN8xryjzw9Qyq8wsyGHCXxmBJuAVb8ftKUbGYxFWgDs851r89G7sq92hiSvMHh9MCotSqMCeL1UsqEq",
  "key31": "2aNN2Ba82EJzeV2FnUoPs63NVyEiAZ85FuuEQNKPEnDnjU3hUBwzQ4r9sQ7sJ17RKtwH6V3wXJbDEUR5PRMKD71Y",
  "key32": "wSPgpWdFsNnGk5Ho9XEhWoQscDkqjWCe24vxZmsFvAWhdchMZVRAfssFEjcGS2PRZShex32tyeTzw4ZZKUsCQKn",
  "key33": "5sLSUVTmuMKSKnnjBijweU7LihscXXTGMgpKMUsxoriQJZAmtvgU5r3Pt98k93AhHeUL8pR7UkzCC6QFf76ieSnj",
  "key34": "4Tqt2c99aEWKjW6qjBBg2wBPg12a8Ym3hNWprGuss5ks6YQ6KuszascTimB6ncAPjnn3FPYs1iQwbEqXX34zbQyj"
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
