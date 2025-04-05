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
    "3TM9Ryqq4kvVUQheyvyQGkBaTp1KRnbiJMFpigvwm68wAERivkvoHV79e9SiTdoRr3AJBtiN7ZyqhXYqpVjkV3f2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oW9gaDmhXVPhqrzYvbSAAAMS8Gatm4kwH3QXk3ZXrEExVhwNf1ryn7v87oAGGLyuPduVigqYEThu9i7bVUQQogE",
  "key1": "29V7zRYgdsrbxEXN8MoM2Bfd9dTtDguonkK11VpXB5gijkLi6dS7qKSmu8uzgSqjg9pJabYhtq9p5TKYxMviv2kY",
  "key2": "53jsgJHmrH1GTBJ5QSi3FK1wsHLnWLABUU1qiDxYNbMSLtvjQTtv79y9aiuse6zgDpRbswULKTHH1R44qQPag9d9",
  "key3": "4GUXLLTxCBS1xA7M6bvo5rLfMVJbYWAqaYnJ582pTZFWTRovFd69ZvhULEkGShuXSD3enVL3mwhsPKgPsZeZ8QfU",
  "key4": "5M87hazUwoKKtxBBbeuFLSg42zc6fLz2mUFU3ShrxCxFy9u3Uyh4xT93uULY5dmhbG2h17saYxasxPr8KLj5E3M5",
  "key5": "4F4ASsfKxeVjs2JWAtfgBzNEy5PipDu9X8vgWb5UAfPLiA6AJMtU8SwNTkN6igksyrg2AjQXsYHjpA7oFjX3GWqf",
  "key6": "2irpLbgcX57VjYHNaWFphtLyBUB1UDpEhCSmowSS6VWQPWPt1Zr9eK3UqkF6Ye6Jr6EKJsCACZBWGjbX4DsTq2dm",
  "key7": "3aGRtJhHngi5Z9jnwm8EsJsWhzUg3PfuhDVsuNB6vrmrFqr3dmorZYvxRHAf8sNU1QCLsG3KwSoi6gat7vRkFo7R",
  "key8": "X7VkokSAtM9pGL5eCdiUnnVnNRmGYLFN1wxvHR7vEqPGNhUpzbHbeaKkrtEvQe1edyf4uqLaEn6BJGUP557FSej",
  "key9": "2WpZMNRo8TcDmVD3WcsVGxH5oD9gSR2AeFUJG7Fx5xAeSGamzoUVLHsACBAcWrZZK7czEFv1jKWmactM6rdqpjjd",
  "key10": "277F6tK6jh4v45FeuWRoTxCdEfj3pzkZvaauoveSVSMJNJxhwcvR9rF9DxPM5njusZgfyF399sDuB958RvxieDL6",
  "key11": "29EeMQKr72iLneUacTYkZG6pG6E9chpcQDaP9YcMnzhxyoAF7akEKXTW4Cp423y41m9qikEMTmdUr2sf3ny7iFmV",
  "key12": "2gmE4sux4VkJjpJnvnaWUvYytzvDEnw48HaRWmrvxwgY6eG4JYNMWRi8o2H3Q6d6TpbVWmRjnLoE66ffzHH48pva",
  "key13": "3HF3H41dRHZtpcMpXPQJx4RRD6ztVkrh8AaMewes8dmDCssV3fUTX6ci4HMpP85VxfPog3mzrKSrsVSNuuBdheWt",
  "key14": "56b5Ufv3TZJJUkcRLwondRd9un4Wah8H4mDghhQ76ewdGXn76WUMX2m5RvQDatGo3EFvtWie9TQwgVJRzUbvBSKP",
  "key15": "2q2XWETBW22f2jkySXZYhLafyEsCPRTFLVuJh1fHzJWeCGdGG5oFsJ3Bv77xnJQw3TfP5CcMoF6QEe19vnegNfnz",
  "key16": "4NE9cEXkKxDGMH9fFn6EzcVjmqPtUjZ9yyuErqvU9ohPxHFSARKpcwznGn7YY2fvKC4VuBA9kyjhrT2iuQ69Ucdg",
  "key17": "2kmz58RKf7cLJrxbg9vxEHshswgtrWR82WPajXDP8344QP3SGaQGNr9SYRyoTJgGdyJJzYse1EvySLxgKZV8V6gW",
  "key18": "52UahdZ7o5KagpUxKDUcYTnkBqvhvhw2sZzSJrpAd21epqAJ2b3CfTRtiqTUi1ecSPEu4LzqCmSyPhSCqGdQgY7y",
  "key19": "abdHKs9hJXQY2JsbuvfKEwUNGnCq83eQTaKGghiG1YWdw8zsibuTFtbVby7H4SnSpnzDuBfyXBD5kENN4iXP9QJ",
  "key20": "5TQ3y4ZkTue9yfxA7vNcA9pkpn6oT887dB611uWuh8fX2eQjPWWz8ciW3H8o4RkeMmmnQaAJYT8mxYEyPWdEBMbs",
  "key21": "9gzfeAbUr7LqdKmRn4m7aGwN1QDuqT1E9Y1feZVYWeH74DDawG5YeTU1vjrj9TPKD9iaJaDLgnct78vGakB3Aba",
  "key22": "2j79vEYU1mqHKQqjuDQpqvstTRprxUYYH1M4xwxB4pLs2rwmHDiwtKXpcn9kMLZHR95AFy6imNt6ykS7nMbuBLDW",
  "key23": "2nEsAQXhDsowUfaUj1zdxvG8yqQxnbGGdiFaWj5FkiSjNgMA198HU1Zj84GWe5sp1En7tgBiqL1JjTDr95uqnqC7",
  "key24": "ZGUXa8B4wvbNaYu2De5ZWwjpPKxTcKDfiAaE1bgKAxUia5P4RbNbNAoCVoPcjkoeaMVpEZXCXVw45P1UMcmN4Bt",
  "key25": "2AcPEy8fZu5PA9jg7TAZBUbt2DTnjfYhR1saj7k3dL7bPQTtdmsBbdkHp64QX9vHWdwS5Kc7JJ4fTgKHC6hRJ3ya",
  "key26": "5SERqawCK7unv656Vvib8Hj38sXRzKVApsQ7NUNqzJmYfEKv3a3ySEjvLyFdtZNBv14tsKnBx3khPb44CG6Snn7y",
  "key27": "5RbcvUFXyMTeFcMXHHTiirVm531sufbhrfeGcSsTj4Ds9rLM6SdvEFGBvU3hNVhMRYkBavQbDQc1P7Z3kqbKUYSb",
  "key28": "Gx2w3YJmG9P9bgxEtxzJQbXhqRJKt3ZS86kc31ZwPbDtNj1zTbnsBgjjC3Kf14gqkx467mocAnNxmiq6rp5M9tN",
  "key29": "2Zob3bq1rsUPdTjJavsEy7B4j6Dd3ko22sYnitHWjg514Kp162KrmuPbtLEKczw2H5jw7emA8e2uGGWajbapsnvJ",
  "key30": "4UbmVpMw74kq3FMn3zQLENBagiCJ29UEMSrnJGb4Y7Mun1JnAu6BhMDYxFVTGmWHqXboxbdc86LwZAqzRDo8Gfbe",
  "key31": "z6S9kVMJcxuFd4JQn1PjTcp2PWSuLtowUChWKEJFhdVqCYfZtvQpFHbjr2FR7Yr4yNwHPGNjNq6zGd28BBkbttu",
  "key32": "gPyERxYADTU8hihuKjp2TYgKLPtBAEfp6bL69P1xTNkk5Qq74D5LkHHjVwsNwF3kMFkksNNeCM8vt7W2nr5dvNe",
  "key33": "iUAPkkAZFXesis59wpoR42cM2pZaaPEqPnPCokPndUJRL4HvBdBkQ51u7hpSF4zPMywY71FPBnjpRq5VyncSijW",
  "key34": "jAgyUzdDjqwxitG4JUj3X4DpgpxGNZE2eefD25Jb7tBU3xmUn7my9gv7NSuCQnk7mg8JjQJLGGRxp58Z1ucG47R",
  "key35": "J8fHTXpwUqrAGpoDp4nHdzz9tvCRXFHLxUVD3SxQVDtxfRYLZddNBZ1w4JnZi6LjNX6KnEw6nBvmKmzyTLgKKTg",
  "key36": "2f3JQzpEzR4r4oXa3kMyvfhHxhPaApZqgQSd8zWjQYkznjBSXiNYKFBYkR4DnbQ3fLoWDmMwxMvHDfD7t8kivgzS",
  "key37": "4JjiJCNmfYjRSAQNxmrhPLUzpCRhg6mVo79Ac21EXq3QJUdkHhZkE6wuvQe8a6dPoB3DL3Kda5ZRYRxqXhy536SB",
  "key38": "2KUn96UKcmXTcShueLL7EW75hoxq2XxzSj2q7uU25RSQhJFYh11Mk28bM5X6819uqhFNM9R1KGcdfzvxZ4m8YTu9",
  "key39": "2KXyVevyAJG8L37yf4FHCTZ8YFmRfKXkqVyNhc31czjZSmq8mh7r7PNnQrPj1sRF9KteGXrhKvf62zZxjXWRufbn",
  "key40": "4jXHNdD7ytFx6QdzudTdxTnLkAEaqayvCWn56pTfFAFc4ecUy5hsF37ykEA8QiwKTSmKsWKswKcK2Tpc7aQYizA",
  "key41": "pjn5rRz5geCoMn3hQ1QZQqEHhtevS9UvBhrLBtoEZZAha4chPTLEeSuSLXpQnBnNAXHTf6M5iMPp5RYgjm1pqko",
  "key42": "3zxjUCjZYsgzo83Wx6VzbVs391QsAd63zPnWUH5efJagE7VJ34BzPXhwmG7PmRgMweDZuBdCmgv9PsxbYXhJJoby",
  "key43": "MSkPsGxegTfvPK6G4Qhs8gxfN55PFfWpJ42RRB8saWKbcUNNDrvsWH3GT1BADExwxcvCRcqy4UdBwdxBPeh375k",
  "key44": "5Hu6h6VXWc8PN1pLVyLqefbB3NPcXjcMK9o4h49hHx6Vpjxiyge1wLtbdMuQxYvWvyTB3gegs8QueZLHPG7ut7g2",
  "key45": "ARffAFau35dywsJDG7Jf1Vhrj1zK4mCgAZxiqRvXMLd9Hr1o1VZstfv1RyE4kW79FsqgJhzQzZoUee8gdTQmXbv"
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
