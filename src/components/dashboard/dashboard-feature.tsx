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
    "3aqjyLKCnTSgCpSE8PdtdjhDBQXCfJTBkJWe5T4iYXy6iQyHKo9n8A5J3fatA9g1mu5uimdKYY8KVpjif364KSDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wu1gNcy4PbRHcVoZsBqy4Zo5hkCReSN2RTawbLGX9V7g1nWWt3m1TTUtzK7yMzz3fxCbgApRR5L36zMacXydKhL",
  "key1": "MHFM2KSKECvuh9WLihqeRtxxZbmnDSBysiMmsiqgQfXQP2jX2MY1TX3c6BJbHsq63sMLfgAFtU98bVYjqbTmMrG",
  "key2": "4tDtbhxyYXoApcqDsfaLJUB4t29vhAUmEi4iZriR3p8Gx2DrmRsTSUNeFXNUF3hqEmDuEYdk7xVJmFPXKCk2RRgd",
  "key3": "5dYfJuYX54twNbNb5rk431RtRD8Rmh6As7MBHMFsUrFeUKSbhh5SYu7ArVRmS5H2QakeSsCp9t6NAwAmCsrtpgf",
  "key4": "3cUoKF7BqdUHhYZsYM52Lf1jV6B6z2aShKKuVQqEimP2BjEnoki5vPTo3LTTJVDaCHd4T5nYAE4eyiYgPmkCWVnK",
  "key5": "3nNG5tn1Vts4ohS78rd91yYoAhaY8SFgrFFgNLMysinkshSgi46aDHA16ja2fufQWZCNc8USarUrmJ3oqHXfuNTx",
  "key6": "3asMeHBqbYmZ1pqRzRTDVyoNuy6A1PPmmT5LsJ4E7BNEUDCXeBBPitPu1hCLYfzgdi3UtZZKd9ny8joKc4ykrKdq",
  "key7": "57QjKqgSU73xSt9AyA52U7oZUW49AzNP1SpE2uvB2DQis5doRXzV5fDtdHLuztqsvUoKEeeoZn36TVEQQwVaCGRY",
  "key8": "r1NF1zYcvGzCkbdrjZTnHf4hp4SrtyrvZSHPnJ6xnHVAVkFnqS3szxkZvJzQTtfuYb7vThQJVX2XJ7ajLgTay6h",
  "key9": "4KsWTiFyHcvv9HNVf5y2xQKgzcBApUP5Hedb8o9iKUbuctWgRNVvvkRr7srHjognVV43to5vGrZTf5SB9CyAPvcg",
  "key10": "29SMPhFNW8nvDz32HBdxYSmjwKPNex5MWjcHaqMAcgvdtnq4eNkHHLHZddwrubCCVnqjUjzEDEbP6zoDkhhdTcR4",
  "key11": "4ZAhNg6RurFm36rWRU4SxbeTMwfH1KD9pEMaVEqd2pHUaWrfgg575Xrtn9fSrS56QMKHe3RMBoYRF1ybWXkg1Jgr",
  "key12": "4Pxo7QasuqskSbArpTWSVogosTpNZsmo4nzSRj171jcnUNNUeobYaczaLvT1Dgf3bCPCsuuzuont9x5s68onj5hU",
  "key13": "5Sh6fHGAN8EiWHvMjAuL22NLSgzY6RLPXc6J9tk1m31koLrghfB9zY6iGUyeF7Nmx5wnGotpjbHwSPno16uixVRY",
  "key14": "3pHDBq2jurcwWW7zmyxvUSUrd7Ln7BzqvNzEkDqNfQQTjPi9Up4XgHLjrQgxn33ZpCvh7sdVhP2NjbvdcnY7VUhu",
  "key15": "2zVMgwVSFYxX3wXzNNRZPrCyHXuN3W8RT7CvGp2REXok4rpy5bsRuDUhh7LxQiaCPYxU5hw2zGMX8CbyyeTLbx1y",
  "key16": "8LNzvqX1aR6M4nFXK4jBkxjxzbXFTFJ2pdewPrx2QgGqGxhktCDYr21eqQsNjSH28C5kpXRYmGf9KrCRM5YpeWU",
  "key17": "4ZSUPZk2gFCxCitwUFr5k6k28azuqKKPaP2StUaQnpY9bER97HV5BhLuNQFnqCUzi22R7BAohua3GWgEdwdZnicb",
  "key18": "4UZc3kLYghhJg3JZFFJFpt8uKwV5ww2WHUJKJqHg9mmzhBeRqckFm4V1q1UVKirk4SA1h928kMqqjw9LnYpTs7zp",
  "key19": "5jps1XEJ5Rku2fx6yCXqDnNhCo8NeTji7zmwPDnwmoZtWB9gmWvvLtEx798pD7xySgRE49mPCjaRfxsrTuw1xRT3",
  "key20": "2XCCn7uKQuBPwwkMHdh3XDKtuLTyVyAWz7yXKysh6fau97nRC7o6EUBWW5nC8Ju9DCsyK9yZCMFFN33dwFaBRoyZ",
  "key21": "bSy3bQdBPKHd4bTxr7ZqDjGGvnghevoQ24kgqaS26TQ8T1tzBCAX5k63fWwJQ7nq9FgTjeP9xef5jg2nR5tjvHV",
  "key22": "5VFYWGtNd9KHQNVqJu3YkK7r4uHxBBWCVfzQUQmpr56rPmJEgWErxCn7XYESLDVpkxTfJbh42sxKmPLiqQsdA8mB",
  "key23": "4VzBDaGmLXS4oXudjSrcwsVoRiq1REELBCYnry7UJBZcLd6nQwKgPSAAsDHFDupftjPmtbCWkTW5Uo5tJsQAJRvv",
  "key24": "2hKmjQxLpzPrzGZ6P5ReKqPt5zjJHhXKejVLDExTUk9Ay6jZd7RYF8QrrUyfzvQdnGHeLMJWjRARaFExbxQpBgmA",
  "key25": "j7MKRNVN69iapkvTbEdKgpQDCDdg4UAcb9dxDsCdXYdRXM5qQEo1hWYeeEvEwziZ9ec9sowFQ2BKtsTdmUT9WUJ",
  "key26": "3qEu3eSEfEvy6ruQYneRuRJm9sbHdAT1Wgc3dbKDBY79LimX3iYzgcZfcHaDzubLWrvHnLSvYthxTJuzrkepcWf",
  "key27": "3dhsnhHQbJAWbd8EK5UUi3isaEQtY8ZU7C23DRXKH9BuYXaxgVhWxrxvgZb1Zyf7saQUWtMNgSuTjftQsAHToFf8",
  "key28": "2X6e4ptkecWdcNbffx1PJpJdZ4t5uRUVKsjrxrrdFbEeFucnYQpzQpvTZWB28L38Cj3SXK5vqf1deyx4QZRFiJJ9",
  "key29": "4rcjsbFAqTRQ443Mx4zgSa3rZcrX3ggpvFLehcprdRovab4vWRsBp8k6f6h8h4SipvbrAXjJ3YhQWZrbuZYgSHLc",
  "key30": "3YXPw7gynbousbToYYQjsxfbmiFv1iYhAYuUDV5etNVa9675vDexV1LuqmQZfBc53TUzVhC7PRWpuYoTidbAVef6",
  "key31": "3e3rwuyNrJu9jd3DNZntdxorf4CayVSZWoCmcN5QNWMYN3gvMNFtgAtW9s9Qm1XdAe23cvdbqbuQXPQYWiGVM3qS",
  "key32": "61Qqs859q4UPYnGfVhscajsxX6jss3yoNzFoV5atzYFjaatcVCUaSyGfndEVx9AdWoFoLGmt3UcCVeAxYhiLmCc5",
  "key33": "4Qcu1X1eSK8Dh9whpPgGrGuTMP5awPR6mqfh7JsKnaoKjCSRWHRfWfeCpHi5JMmJRtrVyQ9goeQnBSWC2fEwhkTm"
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
