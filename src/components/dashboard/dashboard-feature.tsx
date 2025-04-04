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
    "xartgbJagCbBG37hhngZS45wG5pQ2Pb7MP4tS9zScGTa1rsJGkKv8tHPPrm41BbpMCZSU5PqGYvWT2jQGw5xfWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35jKo18K3RUzKYrQ2LwEW4TsqYde8n4LVtWDKNLrpyWtUc9Aec7h3JjwTP5cSKd9KKpA8mUjFNXZS8xyD9YfwDym",
  "key1": "4iSYG8h9RQWLX6NvzFCsmEFBAZSEJVFSQunmDRt2TCnFd6NTY8D9rW8cUKpW2Hsb2hbDew7vfL3dBLNb6TFnT4iu",
  "key2": "2wcJgVM6jCNT1EynNfYaX3Q1KL1XhGeZxcKv47jfn23KQRe1Jrzmmh3XCpRPyd4Xigac7A1d4bfNammfSPPfgvfE",
  "key3": "45bPWoNtF1BcSPtF68qS2C8r8BDk5ydN7ux8ju1RCku65Q4XFD7nJ87HZ4DaQ4jJ5WcRHZFmj4GMURR2UJ3DXu9V",
  "key4": "27oXdDwG1hU249j1gfRWEHLFhFsbJMp7GwoBt5N4se8vkk54HmF2GbiNwfJxB2QQP99BKFDVytELdb3sbrgvwsqm",
  "key5": "5GyYTAwFv5PfwHK6NFjEwPycoiAvZyUrWZGU1pjJvUcnFoa7iqStgSZuYKFdNaY8Ghg8HYWrPbs6TrcREgA32HnX",
  "key6": "5k4iLSKBYR2YxFjLWA8X7CE5xYX2qS2uJcdktpa8SwihHAtZrx9K3GUmDxDgf6jyTESa78dPnoo7EfHCV7UAtAve",
  "key7": "2ZDDMAXZ8eEA3tUYw8arv1ptFiNuVZNjnHvLp47qWcnqjF1cQpTkGCHGBxiFr1gWa85JJTgQuT6XRkHJuJzbDoYz",
  "key8": "3TZjz6B4KSTM2fhC68WDaa6VSfYXheQ3pDFoRhi4XM3JYjgrc9wiUr8GV4XAf69acfug3rfLFSCXS5tDH2rhw8a4",
  "key9": "4sFozosL3QSg9nM4yRZC8av7QRqejBA1s5zu637X7kJaoVCBchZpJtHSqMxa6QWbHwvaXHd99uW4TkxDd7qQBp3U",
  "key10": "44CpQBZvofcUjZK9dSpbKS9DQpuSa9BfA1Ke6YkWXBKc7aJS2pQMYxiw6GH9wnNCkb5WM1MEAhdzMCykVSw3cULb",
  "key11": "3xhodfUPNnzhY2kaoqeHGf7gmivF3tPPSt8f8fC6tbHP4D1H7paFh2QfCc8TmHrwN3eiCnvWxayHhwqJWzoa3iMD",
  "key12": "5moX1hXAeBkxk8JWBpK6Uh8GprHVcVArq7zoUVrLezaq87WMWnu1TiJ1hrLwrD9jxXoyYqSb9e8XBti1VbtpQicg",
  "key13": "4BbKSvsgH6cvbK9wtGrspDsscFVpi2TRveLC5eW1f4jPFprsCmdzStBcQ3Vq8c3Fg9oxWUeHH94WaEMKcoSyscLP",
  "key14": "5MgGTYgE4txez4cvCu89i3QxeE7jnbeAEWTD6BnTgDac49dWuANGpCrRKAJNffvKwVCjtpYHw2EtoU41bYBhWyaE",
  "key15": "22RTiY6wA2eXYF66pcCLHsmzA432C9xVLyHFmUcf45ewmUD9xy8sZhJe1g8ZWVnkaQqgxRpznFG5xoX8F78g75nN",
  "key16": "2dDyV6chch4a15mxTKQ8nURhjzvsHKzV9cGPjaQP57kUPHiTwdAZMeFfGRuJNy3WrdGRuWdf5AJ2CCjxEPRn5yn8",
  "key17": "4qsMSimKSg8WuCEbVyDGXciGLpr72L5FyoF3qF8XgjLok71Z8QPQAhft7uAjhVQtMrdQVDas6GmJM9ccMJnMLaU5",
  "key18": "464C7q6Co7noWRAdmeEcC9jucUHN1gc3TUcNBMiDptbtpUzXQWvL3UZHBwYSNEUnCGecNF7mva14cE4HSkcvfHyc",
  "key19": "2bE2oWoWaLFgGNiYHXiLbVSP1kDFvDB4xwasac2PZTuMxMLMQ7sqi84hfyAMAwc6P6MGL7vXJWvn2zidU9Y2hsfB",
  "key20": "SrN7jfdqYBxM7A9d8NZ17KJa9jAouWYvqJ2AUaoTWRTREp4Xf8jeJNk647uGSZmgKfAvB94UgmUaQ3F78vHYJro",
  "key21": "3L6KXCyPR2TqgTAcwFNuSKzMvbBakgGoX68XSBJLTj9w5BFTjnYtt8yDeWjeDhnEiwRYnqD8tiJNBwfAArSyPmPK",
  "key22": "3C4v79B8xdiQAxkABy5e5fteg9bAERbkmpGrc4BnnPYQGCAKo5qyu1RdA19HXEgLSyF2zvXGc3GdoTtvc3v5DPxe",
  "key23": "528GFgMmCiosjqLKDzgknyNJ9DbWtz7qEWgw8YaQmQWokkMioAcg45peNFgtgWRM33dytVc7r57vamLNHfg8sRYT",
  "key24": "3t9Mhi4ism5W5WLyQJVkGtToo8fPXegCLRV7Tm9ki6CYYRbwFrYKLx42VBMDj9izJ1cFWPkpYgESALRn59jZFKyM",
  "key25": "4pUNAwWgcF9poYmtvpc3uyyGAJUN73KujGWoZHtUdqNoot8fhzyaTbyDD7wWdNqFFmtUoBpEDRH21DKGbUL9dSFi",
  "key26": "BZAPG13RxyXCJmqUxgE6Z7zKzECchTGqjoL83HFU3CevRXAxB2PdEacw21TnsyU5QWD5DBFKgyYm3VxHSxSfXju",
  "key27": "2A6RNUrNnCkdYqbebF3g2RXv6voegJ3QbG5oEopifve6Xw1bYWLngJu2gW16cjzhFGJHf7FZDu3VGmpge1upbGD1",
  "key28": "398asEiHMtqjaBSWLaxVfbjYLeCYGjruSPpbp6eKNNCQhqR5mbs4fo9oKior27unuDGb22AZfwwgdxUfg4porNq9",
  "key29": "4CFTfzXkNJPNQx7Pk1LUoJG64RaRXbx866bfHXhL9kHZw45P5gwUiDuT7FrzAMF4wxgWyHpkCN1UX77WbRU4K97b",
  "key30": "53ExvSvhvHyTfFQpGM8NZjRgqJ7uzRnFXowGHpDkSEQ4nocGnqeqkTBh2gTpA3YfNo3NkX9pgNi5f9rzwuBHan7c",
  "key31": "3E4tVrtSN4cynRM8vsCEQBUci4JnXTwQ1RirEeRkyP6Bq9wYPSorbFzcvWyrBLLcgKvhY8E6dwLAvS6yyNAkPqUt",
  "key32": "4jDY24xFp9UacLcjr5iBVWnsaNmncpfa21yF7DqYvPT1cKseSY1d8k3rvyQbNdXZJUkfNAqJSmJZecpYcekYGucW",
  "key33": "4Uj3JWJucioZDbxJF4ukfANjTZ5Ldv2oUYtFSA1rb9nHCA7N23DqY47ZQ6PxdPYnfD9LZL4z4CDPY8b1ouBi9Qzn"
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
