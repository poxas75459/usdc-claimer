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
    "4HoPKg3CvEs2XgbrYYdLG6UfBSwPtMo1mVfaMd6A4YWrpAHdvgMWE9GVKdqLWJJeLcnavA7CN9wDMF2JyFJdk1bF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tRruCqwSKtJ5VqVaQtqPGcsLie1YJitKvfX2byvBLiMf71rhmmnn7GMa5U1VZvBUDd6kLL4JbtgjWLqAkzZ75jn",
  "key1": "mPYb7cgCBDg8FYT71G1gsMV1ZkbB9ZohHxFtxv4tq8PSotSE6pfcix25fvBTkTvsSpPXcm4PH3s36j6eePkamqT",
  "key2": "LKQKfZVwqP31Hc6oFQq8HJzFid22xmW9y17b8U48Gj4sef68aJCUEMF61tbQR1wekM3Hb4nTS1DRE66pRSwjxvQ",
  "key3": "3UFpVVsYex5DHeS5S7R3u3FpiSEVdpSf8hFdf67jUfEF9W4KxQfjGKmtitYUQyzdDo49KdwzN9fLJmGjERHKfr7G",
  "key4": "5JaVN8nkvx2dHi7jTWDXdRpcewWVtfvESrGR6qbXov68wUVG6YwgH4dgXgfiXmzW7idojcz5dUkhU8ZvkW2USC22",
  "key5": "2BBiMKGv4akqEEQTc1eAXkWfZF6S6ABQyY7McFynLVFPWVc1p7LvEwhQxmXBCyyyCLXrtVUtagiwMAVmhcdTZwpZ",
  "key6": "2Xduuft37PMvzKDEXX9qjarMYG1JB8JLFZhD4f3PCBb4eQjffHzYxGQgVrNhmpBXpvkK9EXDateQpKn8Wd5CrsQD",
  "key7": "4zqrwzUgYSmwLjh3SZL2w1eKF3U5ZeH81JozyQ6NVU2rdkh9Ryom3AKGSEM9ogyom7R5tZeSXYYDVvsEggCe5m6d",
  "key8": "4ZCNX6jefMiNvsFuC7sYSNG2nHED1DFCBmBoB3QjistLrJX9zs2jAGJ5HJ3wjCaqMWie9aFy6PJ29CeE71RgaZH1",
  "key9": "32QtSqRtgHq1Wqk91rkuMTrDzKq14TK4z8Gk3wf9tYD5MB6p12XqWiDUzeHW4uWFN517y3KSphgofM13PYHH4WRJ",
  "key10": "4vkBPtF91RzoMNLnf1PhndfE3VbRKBVYBygzKqd7UGUbEwfAvprPr9Fo4WsiCNKE8YfHJ6Ux5L1LizzHM8YysAfr",
  "key11": "2DceEUcMBQSPhuyTce3Tm6NTRVmaBqGdqspxE7BvXV93ei8wwMxY7kr2tyYCLgWLPqETCT1KUizRMh3aZTp9iemz",
  "key12": "5uGCP2fWaFdPRJ4w4KebpKJ7KM73TmEUXY6KrwyCej7UwpqFvfQtKjMo6QA2dZ1M9SGpkMugYAD7FxU1fG472Au7",
  "key13": "5qmng5Y94cmXLoSDLQgZ25NUTe5kCWw3seia3VRiCBWEBPrwE2qNEjQgj7CyqzuARMVTWvK4KKtjUFsmcxvZ6zjx",
  "key14": "4DF8ogTfkRQ8XmfVFE9KcAd918gAWhdm1tKyXJkz8bQ9eTCPEMPYbZoPVQyjzEAXSmx4XLxM3DB4iPSKTHiLHJu",
  "key15": "2GJAxS4w1hpgiAxqjcUfZgoapgWKU95B7JNXmYD5xW2UrWx3WvriQ78HgRLzpq9w5GCku8cwGBciL1kGnWzRmKMt",
  "key16": "rAKE6y5UPTy7inckizZaMfYk5YSd5kz6p5ykm6citEnF2rExt1mtbnYHg9QeLMQ8a54Ekn7kYBSqGJ4fPn6iU8p",
  "key17": "4XBpN5D4PfoRSR4NTjNu6oTg3fKoS5NunkxdLePjwYMzbzCVmNxFtZr4wNnEDwGtDDPUjWhUUEao5zgHAXmH7VoB",
  "key18": "5n9upLgrHnQJu9ME8MJhdfYvnZci3PkZ9hzrASicz487Cqd1sErF3XdonpRskb2DeZq7hyzqTN1d5smc8JYnDtkR",
  "key19": "4qGJnysjUtWXTfg1zLLQkZA2UTPVjkG8W1rRENQTRiEw4faXmtW6fPn2Tpjz5ixLJQUJdh9TqdD5q5tUHgEbqGN3",
  "key20": "xg9GjcFRxKGpwB2wnGY72xGxJadQeXTGnm3uriUV2fdPLP3KaJg6C4JP6ri9U99fetotdTfUDT5YDzESYzKWhov",
  "key21": "3b1UvJvhMTuirqMjCpd7yvDQQaQZwyS1sarD5HqYkvZCCJxC2crgEPPgE5DGhcioEFHfjiu9QR5vFmQnhGaHuJze",
  "key22": "2L6PMYYbWhzr9Wvy1HoVrgKeBeWEmKBPn1eR7Ms5EFcok1BMRsBXbfePZScTPn3HRKWUBJZBX9ScdRpQbcMpB9s2",
  "key23": "3fAbtD49AuXW2bsMxbQm6mbTxW9R4PsuxqPqYG4XnQfjRBg92sCLnJSj53BNy2J5h15SR2LcZnsy7rPqKE9NL2zr",
  "key24": "5ECj21vFgZAeLrYJ6PjMXWxzt55pLvQ5NVaPLMSLu7X8iZeFVVmcwkmb1LenYSY3nkd5ELbihHJ4mxXLjC7SbQ6k",
  "key25": "5edsBa1PPoUq1D6fMwHdaAoPyixpo7j26aFzt7ahr7aCWiNrxUvt41GS8kTmiDVLSofZMM32Fxw2qwfuMvckmb6M"
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
