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
    "2qptoqcYH6LVVR7nqBKe6UhRek615My5FyKxexAFYQcFG5K7Bi6V63U3Pn9VwxYcaco6ew68YEmMZoZge3izvyLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S8uxX1eJJeQ8EBbnkqwcdF4nvsBd19Luy7jy1dayM115PSgCDVG4wdk4E881frbcPT2PH3LY6VSze5mcxNbNKW6",
  "key1": "36qXSYLtXXwWavnBK3cnNn7JbhmcVpc6yxysi9CckBCuv6z4HUd4sqzPUXRDp9rKyyA92gWzioAQyCUvJioF1VZk",
  "key2": "3VPfjuZnpgq1tz6WmedxiJnugHeDVg2FyBkVShitunNz9TUYLH3qmGrptd28Tw8HyoqPbahxdRCMtQRcb3Embm8e",
  "key3": "2zjS2p6pqBvYhGv9ib5gh2PPCxPH6GJo4wkuFXcHtszuSjvCNoxU5mbbhxVeFiPuF6dAXfD1SyCCGfqStqkHmMGj",
  "key4": "2fXqsUc8jFNT8JNYg1RrUMw4AfsihLSug2fxZTChJks1fzRdcqxKuV6SNJZ1qqb8yxnpt7xqD8hDoMv8s1Uaxf6B",
  "key5": "4HcHu2B2ZasqoQBqgTK6RqK1emiJY6Qrhy7FazvFEZF8rGs4jC89e6zawocKum1tqEpA9UCgML6bqJAR3GgmfVD",
  "key6": "67X6UQcMzKQH4QkFbUsoZgaZdryUgtb2162yjCq9DQ86Rrf6vw3oW2DRHrm8JJCTk2S4Cx7HRrnskMfjirdhViUp",
  "key7": "3dKrSZ8Qe6ATfz3yXc6hp3FAkZVut3NmBvFUF3d2obHN3p7okZtGNpBh1xPF5EqRwEKceSi6MJzyghSs8PqyP9Qj",
  "key8": "9Cba4NDcCDnFcYvuAhEVtPgPHhmSzE9TrFUzMEoYHvHQ3KxhVmhTcGZ6BdpzbE7MymYBKhkbAdYVZVfrwCEffaV",
  "key9": "5srjoEm4f8AVnezp8KAmz6amvLJSR1avdeSMAFy9NfvjSRD2yAqyQa6Kx9HziBxRjZwHVLdfuY1AWHPi5AqxFoJH",
  "key10": "4GrTCeutH1S4C1m6PauLDuTtFbA5wr2N6MD1dJ7L7nZ9zT8UYMmGCQBZMTLwMQXF1XYYQYs2Sf5tjeD3msbpnHrC",
  "key11": "3Dd1CxYjSbMxf7BtEpVcCHVPL76QvcLth2ZRE5sy1T3QD5dYPQzbSvjXsCjiSKSE5cQyj9xqqvhe483x5QhLyiJL",
  "key12": "5j71oBVYSFxLPZ7EnMhVuy1QGKBxFAcUcFL6kA6NW72ERsZxPAyf4VP2uhWiEfXkZMsDcRRHwpi7v6WQ9spcEPeY",
  "key13": "4F8vETC1devKySM6phjSTfPftXo3cBizWCVJxpeADn5ckTuD9eA9aX3qXGTBJZ6rUzDvrfmiP3QWa8njCMxGAXo1",
  "key14": "5mQS5Pmr9SFyrhppUokvUGnCMitAoRABET3NzDiwXaUKDNGCQ58KJ33deSdX2j4sBtG6nMbSQcKMPLBzGacHGEqj",
  "key15": "5jS5gqDj2QAopynxa7SbUP3iANKJAu3hBdWqT8CAMRXGYPHKHiDMNNwR67qDDjGsfcktaTqVBhwnpzof7tQpcdMh",
  "key16": "4tKx6gmTwWiGFbQZKNSVNB67ZS5RhNHECQmyQUVyNPDck6Nk2hhABaFjqU7a5KKapabQ1d5pNS6TiT2NDMSRcwM3",
  "key17": "4C2ZY1qPr5yspaqYfnPqnQmNqRNvNCWZJfsyaEG78izVPpqSS9EZpzSCvvUaR21G959RoTXTzGyLYxeTNnJawTPB",
  "key18": "3a97KiXFyLHj6jFiSKKscdWLQW8N9mr8uCHecpS2vvF3vBQVqx92EHQe3jdUFKfqsDwM3j3t8NN5ywBzLwTkdr68",
  "key19": "GGc9wHSjBvGjCppMkGNeYbKUcm3CL8yzkVFRo17jgi3pUBsFBijbbyYBvtLDitYQP5CCxoxsqrhTR2YMokRwMkT",
  "key20": "2sV5QZfyQ3hzZF5RCKaThFhMc4xHGZ2mBuwc7bhm8kJd41XHQV6jssWgxahu7eWnwQvcBnXWHdcWSaZEbfk8dByZ",
  "key21": "x2dS31Ysam6KkQKapSPw6n4fHcfgtFc2G2ZNQABpkCYFAYFxJMdk2QfVsKEsEr2nxLwwf9F4seZkewmnQ41NV5J",
  "key22": "4z7BNpZVg8F9pHDtbLcHGWx25VJfu6xfRnkrWogFmi7dwpSEZyV2Sdu8NVRCBhgLyJnaUqhZyBAckEYn3LuvmYXu",
  "key23": "4Nn9GppcYzecrBNCcQtpbmzmKigSkzH42EhKyNaq4farCwSBFkw94BGVQMK9knJYxFJqfV5uL5twJPMXBMF2hcpC",
  "key24": "5eDZKn83ynYEu6syC6UUGdjMsEk3mY9BHSBjMYD3v5en5rkm7GREj2sb6dpedY81ehxtSAxdHV3Lo5NqKstiKKzW",
  "key25": "4NkdjdhEdvZndodeKzcQ1nT7zgSC6tMhLaJCSgxSggDBdMWvtr59Sy7JCu9RewZ62RViT92ainyEVQjpmznFHZxR",
  "key26": "4DaRPtSGpZCXEmxxtV11X519hubP7XkKTTrfaqxCPFNPZVfSqigkaizwtnpdGPJEQrR29s6FvCf24BadHMG25QTv",
  "key27": "4x3YeLNS7YPMNxRuBknSADoSCzkydv6SEA2m4EY74e5jp9Aa1wBk784xcUNPvzaQ4mjGhoqjaiFSvjNE5XRGRc8h",
  "key28": "4e8PC7PWZtbfRc7KP79uRYNJsegpkv7Hvw6q9qFM3MvJiqSfyimf1DSY6aQhLyUQDknPSDYtJP4fJxHzSfAuEk6Y",
  "key29": "3uDLVq472w1v7oVT1wkEjCPyT5JVzKEqATtYgMGpEWH6SaTdhzfXtK13V1PJfntVALPLXyPuh2hicW26TxtpXLR",
  "key30": "4DRB9aiycgt8AUHcxbZRZeEfRPijM5iqM1FVzMRQ5ygDcMcKFmT97Wwyn9Z9gG51TZmjkkddn3VtsG4C4Tv9keUL"
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
