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
    "3zVG2LM7a1U6XCELmDz7CNBTSsN88YqHNsV6Y65ps664Xf4HUL56MFcddufuZJQqj6bsNyWfN84GxJhzmmcR2vi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LFggLQG2DjCtJXBtcBYXQe23YYujf7rmsWgcK4P44CEemvTFhyZuqrB6fMNQW34ppQzhHsWt2f4Gt5bppDFhZez",
  "key1": "3XXWXTEccmJL55VzBUrnHHitpXbwNCjHuAvAXZLqziWVQNtfqr7zPd3jr9qdHBFV75HNogLagCugSNnwQpEc83W5",
  "key2": "2v7Bw9uVuZnL2Yfiea1ifQuk7sBYFHzeiSq6n8ypZFWYi5mcw2ckgHsPDg1dJxEwzwGNjuqFa5BAUUkxbRP8N2MU",
  "key3": "3vhSS5MSQoh7fgW2eBVwaQwsYLDKPyrgoeKeYacErQqDDquheiSrUBwgHMMS5Q4E96WZ1zNePGTxeAYQFT1MFYPw",
  "key4": "2YQ3t2tEgAJMP8w5z6VRK8C2n3wWmcCw5fXQnNSEK273tSdF8j1gR6KNxiAHEZj8WGph7zQriFsF2kzDdWFU5nEB",
  "key5": "5c1fvwnShqPMrdM4eSD5fLornEdDmSrYbwTc7jU4986yNYtrY1Jej2pwbhWKa9LSK2sh2rFyGZ5s7wfhxKBbkGms",
  "key6": "5DtfyhQvYAW5GiRw4jNdRHJijNoCWqwh3ZCp2CbtEFzu3SjkKuef5q9tSJqzoZ8RyQhhpXRZL4uX7eAfeAEKALDc",
  "key7": "4Uaw3zj3GicWogMubpixvWfnhykWDfUUnj1smWvaMzx8p6UJzQAaK7qJVyeTe5tNJksCk5LVVgp1NZb6XSHq7oCB",
  "key8": "4KSxw1fYjgHSKfB2rcMKL17HmnbmLEvsTaLMAH2yFdRAvLChZAoaa5TsYgcmsgLY4ef1sgmf955rX2j2qQ9cr4MF",
  "key9": "47SoangZuygeva9P5497G1fd3XVm12CT2ubaYRJwowmLxu1LGCvfQsfhKMeGHCsyWZDGRR2w4bRU4ePa7vC2JcGU",
  "key10": "3JcHUbrcAt6vWL3jcdaLGLJtMCvmVCePYWJytFuRA3KFpMejrShf1mwxZDGJzNWeyBJtmvvLGY7fNkjsvHeGed6Y",
  "key11": "rRT4qFLUxTUxNJi5CQwSfB6Hc1qgmzs81B3mzxFjM2HbtCbZN8NwsMZkX2dAiG9GPtUBMUjmMo7qbRQ9gxfM9mr",
  "key12": "54UnTa4dToEnjQvbr7G4Vmd6zQ1ujKMN41ue5YbLf6fuGhunhHiuU5QTRcxmy5j2omuEqavL1KMkastbSccYqBx3",
  "key13": "3Ab9yCLGB5cVnvnnfXY3WFNMre4LrJRjF1oxFxzaJXvdGq5wxu4MsMRye6zHEW8XNVieRAFp6vZjrqKLGnzKgDSj",
  "key14": "onDqpT8XU7cUc4EViyGUp36rYas98opGbQidHqGVwHPDt3eHyogT4WiRRpxu7HAYBme8zefeSaDrrHdMmAAcV7d",
  "key15": "33fbM6EyWiHehZNUGeThbrN5RsraqTbu3k8cwmHTWfD9XgbHbV9LLwqW9DBawoD8RACWvMiKif4pX5zhmFUH1MyE",
  "key16": "35BMiwW5xLmQ62WWHr5MRbJ8kokhday9wXeMSRJzuqMycw8A9PDTE1iyDqZ7BicHbgXhecYN7TxhJ22DZRjtoixE",
  "key17": "5QGiiAMh8MehNmt3Bqo8czgZ1cyJLVBPh5VpnsPFPFxEUGRVpRewE91yUf7CS5HPTdXaMcADGKy4W1kowSccWwUA",
  "key18": "4JNaWF4eZmz6uK6uPgxErwxHhTpz3523SMvDB7kQJ9QqHa5UMF2S3nznV7KNpucrjB7CBh7XUEsM84Kc18oNg4FZ",
  "key19": "5pDDQeAzzMZdGcBWpXq9wgmNQLvBwCoY6vr9mdF6Dg2Su5uxs9mhY8XBq4NFPCZMrJSe4SmkGNs2DUre7n6k1N4f",
  "key20": "3ax7nmrrtKrijruHzsTfAMPcYeWwKfSQGp25sX5FWdPHGoPQuqUeSvW1ET78HeZNnk8qZdVHJm6iEU3UMVDdtgt3",
  "key21": "kGwqd1DyN6J2Ee74DsvGLFHz9ekSx4d31vyHZVCVahs1cCYEMrcXzbwtJKXHahSWh3165p75ZbE5Ut1Ke1mgAVH",
  "key22": "2NBNDZNrZKfCFLeS3TxgLiTzxjNgVinH4uBNxguqdikXhaSeRX9Hv4A2G9VBKm6jYdLrFBQxMxWYVPTkFLjiYEpb",
  "key23": "63qqMnbVf6tKo8iLCQdxB6A5uEiBRiYi6UR4xrXPvwmhSEGMcFbbmm3XxVJkimb8yyswBZAmbj5pyNfBZ9AaBkbv",
  "key24": "1C6kkUgbTUr3YCjDK9JUhkBTwevcsR2LWyeQCDp6V6ZYgFvC41PSJh9NBPWLKy2xq2qfgBzgjmvGYSYXMu6fJMp",
  "key25": "5s39GwaUpiEMssA6uoizX8PhW8TEhTM7pMdqg4Fvb7r6vyNzQ665ZN75YkseCuoTe4oxYL1YVvTrByxYcwBRCHX6",
  "key26": "5mtfyBiqnzCDceSWukJBYiQXPQdNeVGq5yp5xdgcYEv1d6JYF2d6XxA8nDjURYSLKPYoLq4vdvnywNq1ghYGRoTu",
  "key27": "4TFZMveAFjf9cq94qijdm3APNaRx1PjtN8dPV5iiqtJrKEGVbQemNDtTjLThBMomgnYtgNZbnvPaqGKbdFtkeVwR",
  "key28": "5GBm4Cpxj5w1RyoaEfv2dzQc1V18F4RcEwdzinWC2Rj331Vk56eZJMaGmQf9YfLri31ptqL1PKLxTnQ9tvv5Sx8h",
  "key29": "2Rg8eTRxUTAjhTrUwMJNfsoKBpCgrjnNF7a8FpjGqgLGa1Fd6vScbq8CSsj1gBGuie8UUw3ceoqMGqPqhHKUgi5m",
  "key30": "4yTie4RRuQUKKMgsNbzku4dAgQkWxyjXyTzTvMGZZv2AGfpRgs7f5pvdX9MZQU1cHRQB8pewFWXgz2C5GyZNY1nJ",
  "key31": "36CbUo2U4vaNqeZTVePXR5h9PRJnRCERdG6ureG81SLxxna3oYhKHiqNTJZtwypTA2gvs2GfnJVNVCjkf9tpqFBa",
  "key32": "F5imC7qfvEAMHNYaWYxWNuasUH7Hup3ZtTrvRrD19uawdF12MgF7dAtCv1uAYxLgYKQVjsdjr98Lai8ZL4no16Z",
  "key33": "3BS3XCoUWSwrSjZfrJPbRb71suAtPCgknoMcgKRzm8wbudPDZWFWwMaz1SEURWd8yNCncHYPjaQz58jP9aCL8dVX",
  "key34": "4uD3E6ia4MXojXY1mHqpYdPA3Lqs63F2MErh4YGyQ4xj68vJ7pUdzfW8H9Z2piDtveiost3pbP3DqzbUrnUBxCsi",
  "key35": "ofvyKUMcDUjM3HdUF6UCm7Pznb88sxisTgJBeNiMxD9ezvcYDkmZ4aM8KUb5GLoWimg7p4EEfayisgNPdRA2X5p"
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
