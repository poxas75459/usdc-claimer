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
    "mq7MzgPg67VahzxH6uabSsrnXgTJ4VWwmdEYunT3qzy1joPysNcSHe1uXaDQvBmy5DDLocjvN7hNYLhKpYX6hXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45D8hWmSHmPExZJbq8gRNdgNQC1bWxHrHBprpM9C4BQLv3zPKQtpzUQyE3zJ8gEkEhb6pcW9fSg1bHsHRsVZ7VjX",
  "key1": "AmRC9un8D9VDeHYJPAnvUhNjTXX6L9zGRr3kD197FLNJXFbpaPGmrQb9h3hMMmMdG6Z6zKGE64tLyKKZnQ9AC7T",
  "key2": "xeMJ4jV5xYaytyp42D812WaFH1aYDMuG5w7CRjunGZsnHGkJZH2284nwQFkj84M6bo7tZrKuqK6qdFw5ijbLrML",
  "key3": "3adyZRHg9p5qMzDC8VQ6szFdgMFBVjxZq6hR8HBaLATbbuqLQUgb7BW8B5zyKcYSpre3iQVS3uVkDJoyPNfxm4Kt",
  "key4": "3JTMiaZ7mms4CAu3YRwQDd7geimcTnczeFgQQ1i8x69dAR5idqUTHawdSsdMwfq8pnh8mHy9iQCMZb8ReVkehnzy",
  "key5": "XnE8D5EUBu9kn6tvrcGWay4yFccLUTFFCeAP56J7FX5dJpsXAXd1efB4L7g7uCZ43hFZZXLbB6bV7rDhCtexXcr",
  "key6": "3Rt5UWh8Rwie4TWHkxqMfc9da7jEipL71kFF1mEtMB14rKWT292bKStfcq16LtAoWfAPu5J5DFwAepNKnZNFmjfB",
  "key7": "2Pevhokd7k3482gAZvQHEtx4ZccMLA7YDBGMkD3dbz9gqyQNSuU1fUiNNdZVYDgrSHxqrafjtbuf3wPX1Ms1YYWN",
  "key8": "62Fwo8upPRzVFfcTDBcgVpjT8oh3tNush8okwjtedAHV5TGqqCgHgUmvMkto1tEnZhecFyEzQnhgoR2EZ8VvC6DH",
  "key9": "3Bn7h2omdLLj5KjxEDDiojwUwgkFqoQnkYmtR9joiPutYCepexKoSNhxCFSSS6Fsn8t9VsSPpixjeDzSFfox8Yqc",
  "key10": "66ZCGKBQPX6WzB7yJB2HMeGs4nSBJuPRMVGPnC2RS4npFKeqXhht4KqGwA6hcHCtMGCMLeEdj1aBmxxNJxUVuCYZ",
  "key11": "52xZojBGGDgJRvoWgzxat4tjCFjxgbDPTH7z1ZvLRwontDFazbmDZrLdBb8jTz9mPV1MNVwq2W9EZF75BsPU6rAy",
  "key12": "2BZwGVAfQmoL9pmj9sCkTaqCyeHL4Qa6jnk8AWHv8fSNYCfHuckA8qDTWNxppkyr3i8qeS4gsTPfU6MxPETLsKXt",
  "key13": "4zfXv59bdyTtykVckmVUUqFoz94UX5yK6Xwuq7F7BXvuxJEDViGRYxvbsjwi3yd3zLm7TKqhZdyaE5YGmki3rx4b",
  "key14": "2eyDaDM8dsCteWoxtVV2hNgybmM9U2MWA37BthM8kKwHR6Js2ECokKNfSMD8oPo6XYodEtW8VY5D3BPXnfdQTpHF",
  "key15": "3gnFFzgSkzFkcaVjpPvmd7mKXUcuU5XbZoKzVhbLUWyJSQNFQem1at41bWHAJuGP3V6sGZxb7AwJWgauvH1A6DtK",
  "key16": "w2hyEF9taxW7GJdVhZcSGkDddDpr26Gitop5KjbNJr4ZiyE6Wd6fWKtztuvSWX5DaKDdn1xmZ3EAfRjxN4QgX1M",
  "key17": "5bb1rTJPmgHGYfUEoCMwmuUdQP3sG38wakHSHw6ceA2kK5oFVyesC7xjoS72oFci8foaT3eEej4rQwa6snnhueF8",
  "key18": "2gDZcrydL4QD7Fb5Jm4jVtd9teFzhvmfphc9aHvJBnDMnBYvtrw9zUg1o8hQKVC6uV57yiV2mZx5Kf7yqrUsSpis",
  "key19": "5NWMTMZcDSjmdfpc6fMzjT9e4ZsTcoQJ1qS8vPKtcFGDjDQ3AgPMcRRoq8SMPe2MJ5RphnqLzc8SqfE4NPcXEx4y",
  "key20": "3LX7TLcSYkS6NjYn74toRi3K23Zdsa3QfrR7rLEChjnM1XUbM6cVAptmRkEyNyWj4DQVWzxDcUuheXgzZ99yStkp",
  "key21": "5b76yAzbRHooebPcbxEnMv4kDNCHuqVy4zwHMSeshwmjHt2tu3527yX3XohvqDmNGWg1W5qtJg7CUfLrc5dPmWbN",
  "key22": "4RXUQUiP65yXFHp27MsdQ5ktBFH3YcjcyUKNzJb9iQ7vF5NGCA36qdAx9MqL4LoBdbgKkeBE9yn1YLcyaySXC2Je",
  "key23": "JzpQpn49YFsHf3texLp4942wa6zMdKnMaF1JMFZ6Mi5Yt5mW6renDXSEstKTnGG4QwazfJkdAN4APjmyw2F7itP",
  "key24": "3d2MyQapMbHULuu32f5gZ96QCw7fU4HqFANL42HBxodcnea8MC7fqHzHjofSRbYau7uT8VPJgFy4kH8RgVsZn7Gk",
  "key25": "2phBoBAzpmafNeuGWHkoJzUPKfVNgjM3XEwUiU8LysPasRZHVvyV8id1ntpgBbb1U1P2eiSdyG7AxR2eqtDBCwie",
  "key26": "nuxVarjZBALYE6TykJ1C8sPn3kRbaUJHE2z7RDEPUbfBBGt1Adf1BqJg6w4aVbe7UqRWK2taiDWzwNTkkK2VyVg",
  "key27": "5JCVCFGJJyUY6NZyBKNbErt4wsHgQ8dnYrdbVGNp8TGhb1rKop7eVX9tdCqsbEUmNizA4W1x2bFwjHciMJzuX1mJ",
  "key28": "9YmMdpfY2RVFgXktVoQR3HbyNLd5iZbifX8JXWE5aXqtWwH4HqkFSCkPiEhDXfy8fdR5FqQfMMHiLo9UFZxqmZn",
  "key29": "aZ2mR7azVNkbsQXyqRkY9N5rTEX5wT4NnKMrjMXh9QWNw328Gax5jKNoA6crv9izgSnPnyZcD3BHRqH25YA5HLN",
  "key30": "4NhNvNXs4zY4wvWTT5w5rE7MddX6ifDCEZmiPQJJJupyrCKk5ZhZa7ZebsxnXb1TfHy7fipiRGbwhc4nuh9xheK5",
  "key31": "4pHgJ9oax9feWtFHKGp699Y3XvarDKQS8r6z3NiZdUxNkCGMmJ1V9Sa4Y2au1BShUNk1S44SQp2gUfFXMfNdJug",
  "key32": "5NHFze7ZkwTiSjA92wz6mMWYYpQQbqKooGfrEzSGeqQyXtuvvX2iFE4tixRAhfdLoApfDczY4wHNUBBv6q2BDGNL",
  "key33": "2T4fqZY8yXtjab36wK4RqSCEWbuSPuao9ESMbMhjo732aze25BYuv4BTwKkUfTVTfbbzZQr4qTjumFYJcmvFQHuc",
  "key34": "5dEzrWThjzpaej4BdhrM8bVzCmredJ3YsFjXHXU26foct1dPUbkA9VPnJrnQ8dmRAZE7EX39BVXqRP7pGJQ4hday",
  "key35": "2Rh66ZRJYhrzAjqJS7k4W7pESBDY7ZmyD5wT7VCY8jcSL1HPrcebahR9Z2gW8PAij2iXsFmsTQ1H79YveDYbumj3",
  "key36": "3XTixV36BrJGcBkiTovnTNADYmEtQGy6nbv25KbqaKZbCTESxpYkKECmTqTgGmXLBAvbvykzjGuoob4T39CVPtrC",
  "key37": "CzjbnzLGNKYuCtLvGPwEfz2F9Fswb5HpXkKeUDG6hrST2CmLdqw1WfMoE72mBKu6y38cDRWETwBta8HJ8aeXvJt",
  "key38": "sVPEctNA82XDirG2DtERXZ22t5n2twKCJfKzKyxiDS6255YbXTpXufT8nQF3BvAvqc5uwjYta65eGNHEyChdYFB"
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
