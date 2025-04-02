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
    "4GvdXe87nPtf6GzQh3USbvYB1oDqsMuZeEkX5JXgb376TKUM5jxJLxjUj5UjgvSGrCBY5h3mMSwfQTATufymhtxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pTrXjhrXZ93NFLnNeH5o3j3juKWvSay2h164bnbChWr33iSfBVXtn67CjCvy53PqzsPWzZk5ftXtsPky5ZdGBfk",
  "key1": "D5DprasSoSndXNPTyLejcHP47Hhs9BMKvFmzRoZXAvWuTpVh84eQ5ptL9b9dWd8Nmc2MHwLzNjJhHSyZdnAPkzg",
  "key2": "4w9idGomRFZZyT74CRiL51cdy527rQ6qbKVYARG1dP9thQbqacJcW9vLyKYZ31yBDKMF5WYS96tw2kyZVZHbdeQ8",
  "key3": "5Lqa9Dqw67AgkHL2NNC1JkboTueWaDqxHqmfDjA9Am9xvAoxLeYvoLVX7YNCmQ74YenRHkhmWuSMbbmuCJFBtWuz",
  "key4": "5VcLyTQKrdA489VfSmvHmzACHXsFpac7N8fMFM1EbEB2pNodFvtutNjSoNfuzhwG3dLQfsqAWkmmV7jQPV48NH38",
  "key5": "4v599fNRfEFTCwkzBT3FFTEAnm9aRHVHDFGXxj2GGnCuHjfWxPdksawCH66HHQ9THGhrw5rZCR3SgLfEDbjXAtuV",
  "key6": "3HeFkUGiJ7BpYAw7h43Ys1w4hKeZQYUcKmGVK6BrwpTzjpsB8Qo2adLLZnWEqhcMmDYLM7riXbTcD2x6otiPqMrH",
  "key7": "2cMHYCKmmMxwSTGKSs8B7t7BDRPj7Yk6d1Az33iuF9fSt2bTSPwUHL7CoNFonPgJtbXFWHg9nScNFk1rnoEwDXoZ",
  "key8": "2txwVL5rAqYFT7MfKYsJ5Dy9SinUPHMz3PNEEWbUCPAgg4bkUwNsRijxKkubwBcvtp2aJJ2EeUUUCmKmqr34AsRu",
  "key9": "2yhLZb1MPs14jGHNuCnwVPa67wLJSccF5wjrvFxgwMMDXR9Vkqnxqt4Hjgmba4qJ8trhXk8pYVfZcRXMURX7nw8f",
  "key10": "4fA1znJZpk8AWSCQbn7XK2KzZkRe9uUqHhcy7qjYGsYS1Wy1UwAFS1PdCSyu9EFSFkgGM9nJwoa5xSLJ5vU8DLyB",
  "key11": "3r13Y7VCEYj8NR3gsaGSV4UWJtEeqZms4tQkC7ZPfuVb7CRjMEzvJUfcR2VhLsWJrXAXDtpXChTxaELqxL6JHi6h",
  "key12": "4BAiHpGpP3NZo4N4uK66rx61QY7V4J6zR8HkPiwBDH7Br2CQctWhpV9zMT8mayjyGyA7WrwFmywTSSyxBUjne2LJ",
  "key13": "2FxyLnn7DLtuo3LoWcmC3uWtF2MSQegMKjLw26XUycQoKWMpPGpfSaWDyCnViAXFxzaxG596YDn69ruxHi5GGWWn",
  "key14": "3urbtUQhQtSbuySzuhZGPmHPyfWbuYFgVu5VYiAwvL1MJki5BCDwHqfpbLZczPj4Fbwz7QmCbnjUXbrKRRny8Nz7",
  "key15": "5tiNUV1uprWoK1dEFmfw2Z7vH5eMCn2M6rdA647koY4b8by41DSCL4tSo1eJNrgMH76x6kjcu6A6Na6ifUffhBQV",
  "key16": "5n3a8GtDgdEv4LmG7hSGcbGp8C5vcxKL8YZWw9Snr86nuXi28k56AwaTx3CfeoZ3yebUEfyDKmyPhoCiQ82ivqwJ",
  "key17": "5fMvNdE3sDqgmLXYehq2dxJhoea8zDV4ifG3ygdbtsE2DiWw9tJ2c1gWJU9otAVLrCgCVM9xrJiJg3UYULfENfho",
  "key18": "3A6UDCJuPratbGJsvAd1vpEBjiHf9h1mi5dFJ2afJaVsqmyQxeLnSHMVZ5HmkfcpxfDh1JBUc5Di5QyZYDefDbx8",
  "key19": "5a3LYWcGWxcp33Hh5XXZhYJbzrZMooASUfFPrinccrwvxiMAKvCyjTEobiDQZPfZ6qditRa6gsQWB36daazdgSix",
  "key20": "47bFiBQLbYdDeASKYuLj6crxAUeYR5XkkwhZY7oDMCGGpLrD3WM4qwGVCkJKRGzEKb4roLRgob6efsVrD8xB6uHZ",
  "key21": "4zwkWLFbcoxAzgG6tZ75diRRSn9KJZ5mD6QVmor2DDWqzfi9Sz77Cy345UQwFPQT8zBnqLKsUDd4o2E25jYbYoCj",
  "key22": "5MoXUQGaiGXfR2k32eKXgJPGZWoxVGLvu1gdHLhPqEXRq7QAm6PZRfSNJfTDgRpA6bJ83K2WTzLytgU1ADwLZTi8",
  "key23": "6XVcJy65gsptAqtMhNne14PtkzFH319cGFWikfPaKvgNNAbaswrrjcDjU49qSUcCCHeky3B1DTAYASSKzKk31AX",
  "key24": "4A5DMJ1vurFSsUssc97A3n3RyKUJSkVpN5WxdT9sHiYjePdM1xMisMMF6TMeHn6KGEuajKZPxzuSDizsRsVSzozi",
  "key25": "48B6dz6nz2eGBT2Y5qUuG4XgGuVaxxTkYojeW83MYmjKJjttt9yM1j5JrsxcY1cDSkcKbj6h6vwjRRMnG7sZg5gD"
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
