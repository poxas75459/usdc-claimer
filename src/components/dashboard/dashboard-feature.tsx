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
    "4g6DzpUUZwEwGznzxCWFoWKjugzo1UmduDJ7ARm8F2SkDgKW9fRW41JWB3rsqvLAkDUqAcsDYaqnmbyr6aBECxgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zYU3yeh66knXSocEf2q8SZDMLcE3Hx2Cmn5D32ozDDsNb9QR3YUbJMhDjPyZQ4yqRJYx1GbrsNoYZs2xtoxcSFe",
  "key1": "5mo887KHRr24QK3oXeuXLdnMk4Cx6iMpEddkJrKU5tFPgSpvpSFDYvUFnu5T5TRHfCBVif5gz2FasnQtF66VEK4h",
  "key2": "3syEDKq4V2n4tNRXF9biusnX8Hb53tVUMNJawkaBMkMgQr9T65WHrSotFjY5B2X6uSFAhkWb7VzPM8FXQ5UFb1U5",
  "key3": "n1PeNUfdzjB5LTLi56jC29uQHLKQA4v7LyixadRHNVMmWHK6vDJir9TmW3wmBK4Mz1qeoVNwhWZkfHDu9pdAWtb",
  "key4": "47NF75URU7dubaxsY9N2gvKEAFpDSaKgLz6XVZFco7Z5t5yJTFFjUGVSMdtU3LfhsSe576QxD7cj8hWVZjC4YVwF",
  "key5": "R5mveDVmdN2XDJMzUHfK2zDutCotDHFHcEMpo9Kv55Uh4d9Z7vZLTMWuKJSFEwGPkHNsPU3RXiAuBvpteHNxrhT",
  "key6": "4U4LmADFcKHi3UjMA61fXzVSk1HLBnKQxJKpnHwkA7tVEm2v8NMsvHFMzfxuRxPSRQeuHJyCs9JRgH8ghsbz9x42",
  "key7": "3u4egAtV2xAiegMittZp7rmQq6CNL4rmoZ5rx81qt5mu8dNQjo4YKqy8Se9Q2vkeseis2qz8znkhCR3yDr4YCteC",
  "key8": "55ufSwWbTsNYLstr7zBqAW4j2XPX2SiHoagbf6BiYd7fd5m4RTEamVdsVtyDwdKna7F8xBMsjfP9xrfrcQDjYWyV",
  "key9": "5keqdhmCu3JheJ7qK2SAHS94WzyRuN8PEHBGTz4g6HHYDTNxijWNjN8J7Pq5Zr3ksCxx1DFUBLNUKhHBQxqGtDka",
  "key10": "3Ex2LwMc5fDKyyNzvdCL8CXCmgup4SbM9uFixNoqLh4bSSwbngRmFwedkNLiy7odEu7mg8kZnRqgkik9qEBChi2h",
  "key11": "3TuRdeCNJcxLhhxUqW9THDtKNCQQjVvrbQhnqXjK7QiNq5RCEguYSepwZHP5PeFFsZAtketX8JsXBeYSjmJMovdX",
  "key12": "5fn3uirwHvyPuNfV25UFmMg3ez5Yb5o17LitprT6rifA7NnCJA3dWxSsLCU1tyeZBn2bjVvPwwPbSw3kzLsmwmd1",
  "key13": "2jJGM5BTBmQSYwt5CB26s7qdxMv16RAUe1fP34zCozi4m35ww67DWAFfzVPe9tErTacGxboPBywj5XvztwX9dWzG",
  "key14": "5nK7fpvMf3cC5f6RVgGfYHYeNrUH8QSkJvGcvYJFFZr4BXB5c8ztWiAaEb2Er8D2Qy7rTNYFAdHsCrHfwAXHFr2A",
  "key15": "3zge4vqqrKJcMpRogcAryy43Zm8FpDXJsBiUGUpkXDftJpRKx2cRX1wsucS7yYXk8mq67iTbaRk3ECSuSBkt1p2o",
  "key16": "674axsFtwoRUGu83eXjmeiGv2yzZfkJP1LYfxj34e89PKV6HrX7pSBacLWk56v4eYLSffyXoexE5rEtqWbknREFV",
  "key17": "4uU9TZ26Auc3oEtDL5BJwXaEAYvzwVcw3K62funKjPtjjeHyuyEUFMQUN8BfkDP14kN4WNVYdcJu9Y6xrQGeVtmF",
  "key18": "5SgyfwXYFH14SRASxDoWsY8GBamK44SgfDbgewJSnMpA1hCt7EEn4P7NFiJ6ekEfwXuMukbPmagdSZRhv42DnLfA",
  "key19": "5mzYwf1ezquyuoUWwPnvGwCADtBfQbpsgX2f8jPiC6eSTfsc8EFRmbQRqD1AadEyVX9L51xfQnRyqsHCpnThjYuA",
  "key20": "3d248ML2rtwKt9FiPzwYbc5w3CTv21pHWT5UnoKbrVBKPt88dM6W6bCx9pNrHgvBgjKLfw3e5LXar3JagqSDxK97",
  "key21": "2eBdqa8N7ivtkM2tuDvJY6REFgmLq7arh91jdNjGA8sgHUb2kNhEkJsGrx11UrmWBjyiusG3Lh3woFiCkNJHUn6U",
  "key22": "3tcYYpyFZNbtChpv1pEJFVpPujoRtqdHtM88RXg7WmzozEykGmRQ7ZgK6LLf1DYot46tyiCcNQdYkqfyTKAiQUN8",
  "key23": "5wViHfoKhsFt2hg1qWchb7ySrWUrs7QoaHZWh7oo3SqVDCGkYbMLGricXQb1xuHTDtU5cbmLtW9bbTos3JnYQYoK",
  "key24": "2eGAV4Bi93LJtK9NG8iYnxH3M63sw9sXhWifjimdmVcH3c5fzRa8S7tN76NMWBuLdz28udYk4VMY7SyviyxojN3i",
  "key25": "4db7XdxfdpyrixcdyhYvDHtLWdkWf34z3zZhSZ8eWNiLr8Uimv4QxMGAYqSMWD8mSNM1F7eJHmCQztRK2YAp75Q8",
  "key26": "rBJcZn7WAT84HaKXQJrz4pg3t4or3a6Nwa2pXczRJmVDEUgBjiQkxFoLKdYEonLnx4n5SQCQ8o9Ay2hKiVb8Dwp",
  "key27": "5DqAgeVzcqoruULj2ioxrkURMp4fvcBTLUgHJ8jxxYwfLZXAxDqX9BrhRXF8Y5Lt2etrc4qn8KfiFPbfEBHQa3bi",
  "key28": "2P3oK5bh4m4WX8bSEZrDk14B4FxQUDNq2UDa9X5nxjKeXYqsjFvsii3twAT7a6ouqGT1z4LWKtp4ohN24GZ6keES"
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
