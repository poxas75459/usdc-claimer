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
    "4Z1nKfEaSNeJmSFaq3fiGD6MxDQaxTAsKUwZQs8szaq6jw2Nj4eCjdJKjJpMPCUJRLNLuQjNh8T5H9z3c9VMTWHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZxLgqrYzL94N7bfmgtGQUfwFDX3wARF9tkSmCZZ3TYZ5Vwm64drB8jw9gyWv3sD5F1qytZuvqd3u6TDEEZM6My",
  "key1": "2B9p5tmTLreHuevincwrvaJMwyHSUiduANkuhLZgZbahcXshaUDCxfDzzKyhaWoJSfsTbXN2Xw1eXQyPURewzLRu",
  "key2": "2uRBxDTddBi1K6MPanNA8EmumCzkXKPgmnEdbEoQkCRDS6yXtM1dxPA9x6BCHtLaJL4LcXuNKdc6ezW6UF7mPq5Q",
  "key3": "2SmmzpnL9LwBVJHP3u7dM9n3rLusW5gCHMNjV5P9VhsvQSC7hDBirfZJUP6jUxV2w6nP9pzzA1m824XT5njTfvq4",
  "key4": "2ArFrxMMf8uqkDWdr4HtfepvzYgqYrhZxuEvR4o1vAqJ4oroKi95gXdPws2mWxiK4Ugzc4m8mR914Lc2XyBKskEP",
  "key5": "nbPdCp4bUQbjgYCnAUuYe6uoT4A2KthDA59cqDqBjFRLCLkZ3DtAecon6AtBeiZVM1LttFdsMTfAuSSTAL8R2s9",
  "key6": "4AsddMTVBLqsMiu21gKUcqQ2eBQY9jLQ2bJ49RYnHE1JRsfR8eVnSNsMZT6unXyqmBBuf4d4gyvXJZwK3P9NRYon",
  "key7": "1PswgTAGhzDaqaco4ZjijrWsQQSbXFqGdYKZCreFJW7QS4Y72aMbLF6FDfhhrqvpsCSRFSrasrpwB4uEpbQMjc3",
  "key8": "2dmKoaa5muqNpb7StV5oGcVy8Sv3vpeJ8Z9QacmpMCYvVoWZ1rketx9zwBSN2cy1V6xBetTDykSSpG4co4YUo3jE",
  "key9": "5rWsXoFbjqGDhDwCYW6YYnnus59S88ZVUv5m1526cDk7L2JDqRfy5Yho8djaDDW62LSYGVCJ1NEeNhv23TY5sb8m",
  "key10": "TTch6cZWqfEQmyEGkcKZGbvKv3GFVHcgS9Aem5ubjNXs6uCZrhu9NmZWFdeGwLC58k1m7HPLpPV7sQRg3Mo2RRu",
  "key11": "5DftgvknyTk2J6V8oZAZmnuMKxbdj6yXNkZ2Ljbac6rbR5VrcUvaCrxEjp1o8toHVSABYTf5aCVrjjTi6zsJjxt1",
  "key12": "4mfH5rwbj6WfGMJcAKsdk9dkkYhsQqaHZwkDjctKEnsyD7264uGqQ9683J3nSswCXPTs8NbfqE6fCa4gipAk19Nk",
  "key13": "86oM6qLyRFvVdRXEcHDYoT9k1o1YshT2YBn1pT3rjzDzZXH7oucfRrqCX8u9ZcRys59SM7L9E3BCuNtNxDFfyWo",
  "key14": "DMrWcPPQY9QNHktknQ2iC3ESApRk2JuDKfXTz1qcgxrT9q8fTpkXwKrZ2NCiLS6i5FEbwAkjXw5Av4VLQM7Ro8R",
  "key15": "4Fo8aGpaki74wngqpABGek7nQrSKCzXgpEiQ3bN12wuba3w5vAtXNn54behTP5ME3bWydbrwNajYwb2ZStz1RgGK",
  "key16": "3z9EvZKg4FEGwvYwCNdxd3gQVwwYSxuhBurB4TtHpvjZgcMBY9NqMPWMrAZT9nfVAaWCmPJvAH4wCiVVJ3oszMqB",
  "key17": "2yCgcdXXggmw9Wmdd5QqKur7HFBE9G7LoMVL1eW29jZd9Wvjz8HDDBE2N5oJkHFCC9pJJEnPEZdGwpbUG5W2tGqj",
  "key18": "RFHfL57sPnR6Hc7q6N69uWonPqaiTnLeKi5e2gHFzv22m3hititw5mtJda5wRgSSVxUUtVyT9NzAqAFWHsNnwZ7",
  "key19": "Zhy1UcZ945Dj9No42K2bBT45ktRqR2Bnrayc62hdbPL76QdAdXG3ERvWRQka6RHQ6eArkjejXxQmDT7YQjDJiJm",
  "key20": "4Q9sNgCXbb4Yca6AqEfDS3AtMn6ebmGj18RLt96UjBtgqsjrCr6bC5gnqqj2STar2mHdXJviE6vndey5prJiMB1U",
  "key21": "23TjQ6RKbFgUAeAypHne94Wjb7E94x2reSJwuDD8vo2ig99RfpYcPxtDa1WtvYcgo2xPQYJCLNU4uTAXdQHiWyTm",
  "key22": "eoVPXFaMndUS7DiJT3wevxfHMJARwoijSEgwWXsvKVwt1Ts8C5WwLsprHfUKrfTdw1GJtbJpLit6yz6G19JkU7K",
  "key23": "2rYXrjBfYUnzvZfDumhDx2fyKDbrMbYVGqULB5m4LUhJDX9Cv1ccUvp1M7khsJZoSZKduEE697HF3FzkTonF4iwM",
  "key24": "2jV53HXKXBeUo7BqkdeFNfMkhrq9oW1cxYKsVyzXEooAd1X2cb1XrRj6RvRccEnP1Wb9BcXpbrfDP2WHRcXSttB9",
  "key25": "5iS1ZULkM6LtKhCWjLhokrZn9XvZS8Twi62yzzyB8iLSzEYv8nme8nRXx76XLvGYpvkwJ5sBszW4cvV9spKGZD3z",
  "key26": "2B5shNKP5uAjabbuTMEisxYy3Z9QKM973yTiPvhmdXBiwBWHryC7Ee2hN655nMKhvWTo9WLueHym4YaHhd9bAVm8",
  "key27": "Q1W4RqHwBYiR1DiJ5nh77VTFh1Ebg1rNdLSD7eGhskVeRYk1AXxEEqn1GwWZ56ChxNoyGKYv1QtEzPkYcrfuoGU",
  "key28": "prNb1H7jZei5QE8kaz15whbsfKMA2SGktzPeKzrXKieZog8F6PEias5m4qPMxWYWJvwX1RvUXWYzYRpweTswogH",
  "key29": "3tzsboPPo1boHUDNKUGJCL7gRwwDAei1Cf7CB1cBbE694bN4hSYW1sERfv6wPyxni91pDw68hciamrVPr6cW6Nqk",
  "key30": "3fzaU2TNbkuahmo4rUUCHa6YNM9EiqwfCLzAPoQnxsEve2TmsgPdiywDLBK5RfLGpwyW9Y1a8ZFtPP8CG5GEou5F",
  "key31": "4163bF5hjBe6BNeo28T71Mkc8XnPwBE54EvP84eqQGccxikFjZ2itfPkXExNsmygAj3C2nPknq3H6CXRHWzJMg2u",
  "key32": "2E3B7uqopy4nLpQUbprmvQm3SPPdK74DsoT1YfufwULXPvTzieAkrnTeJF3xGpSHuJekrLrr3imw1pj6oJWdMeRq",
  "key33": "QSs7PbuR9gWQfiYMrjyes9t2Hu7edt8qprNBRLKSJxwUTbbnajCNR7UJCnwumi18ubHqz6BQLiW4GVxuVJeDm9r",
  "key34": "5XSCLpGcQYfyahs57V7oUUoF1sWxxBtrhALs5uzs9eu5d5Z1mDAhsb6UonsksRLEht4GzVCLZuYnkGpkGpva2yya",
  "key35": "5Gyd2SoxR7q3CXaUMKjT6AtttVDtnh7X7FEqMqKcfJ7iqgJiAhaKBJGStdvM9Uii3DVSiXStyMCMbKvaHPxtdxWh",
  "key36": "J3mPRgnpszE7Xcjg48pDHBeH14KDpNsGtWF7yEFToxmzoUfuyFibJa8EP7wAHe6rdXvzWJtrJrhE3XSP61tyMfJ",
  "key37": "5o3pP8gpsYupjotKotqWvsisNpNdi57DwwPWA99WFkF8SFUpmWutokerMkjaVVs5BXDK8yNB9fbDtp5eR2VLyhMy",
  "key38": "56Q2iSH99YndqrGD6UYd7WpUw1P7jnXVk4E2uMdAXjFqR5g3Rb5tPmbC6DHsooghdP9QQHA8Nbbow4yp8xMKeJDB",
  "key39": "4o3Jfzau7PkREaSGK3NqF54Eq7uYrrps8pzEcgtgke2LmBy8K7WEm142r9HpCHSFPz19dAGVDUt5HsZoTpozsZHF",
  "key40": "xc49yxLrn7QNXkmnWDUVN29B9y1ifPAVgRxAe4ssxJKXjhG7bgkzvKWhbnvF1aBwBGvMF8jxAinTYfAEtd2q159",
  "key41": "2qYWoVq99NV2K7EzvxWT7qu5qepEaox5KMKm7r5HB8gLNBFzuaihNLgG4wPfYkTBbsVZty7EZNG5rmjCDi4rWByL",
  "key42": "x7FNfyJ7kAtNd46TTgai4rJ21wgYpiAJMpq8uUhEcKctRXcvXJpbbnNudLQ2nj6LXCf1XiXTtVu1btsQUBtZ3ZB",
  "key43": "5FfQBfiJrhbPpxTwefgdASd11f7LPeP8181KyiLTDmPeiREL4UwAiW64rfrHRAkfh5bjmSjmt8dUnTtaX2wQqawt",
  "key44": "3USY52af4BwFfq4qgtmbuUrkA8KWbxqXNEkFDYiw7A17cbhhWmcJ7z9CSUdzkRHnWvEp1C6KZEWxfcDVgAcFgC4a",
  "key45": "5HbwPDQJWK8G8SX8rfec4sMk7QPc2Pvx2iNZnzLzmmGyZwUZMerc5HYmPSMRD31PaB68egwY6jufqS3UbU4z8PY2"
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
