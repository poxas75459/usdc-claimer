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
    "36uUxAJ6QT8gjnBTNrGQ5Fq2ewMFiEpGfRcbUvpEL1XRDQR7U9E4YBMghuq6bH5NAx3jDm7ucxr9BSPFbNYmXZQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iotEx7g1zYmAF4K5kxEBbSUaRbecS77YesNC3LnnQFE2NCvXFsiSLo3G9e3CC6Hfp9AxusnEdCQ9qMgSYVN14wb",
  "key1": "59SEiEPkK9cLUd2SioDtiHdMrinxdLFm3uKeVh4j6tszW8dkDhRh19Vd2ozJMJpqo9sU9NAAdS64itUyGQQ92tew",
  "key2": "n1puY1XiPY5sZ82kg3z14Nx1ykx9wLYJ9FoxoHD8wcTqqkTKDnTR7ps9MVMp9X9Qt5Sc4ABWvTQvzLz118vXbqj",
  "key3": "5oHGAAXbEcW6ANf5atSz1YTaQeLtERXe3PxM1rUs8WFMDN95YRFE6rmMLALj2U172ZUmwQGy5nxhCPcCNLm2W91f",
  "key4": "E4hPbwkMFy6tCFbaXDrVJkEiwETHxzmEEwVE2ydeWWfDYgFxCz4ngZGcyQid3L9zBHithuFNXWzfdypzFbriMUS",
  "key5": "3Sk5RVye3uaPqn5vFftSCHmHfTmatbbCpXnhbtiCMfAsDoympq1AcYKzEMpRdUdvKtcibSAtCmJbpxZyPBUcuX4k",
  "key6": "xq5ViyAfS8ZbjVbVVrVjuK68tjgz7kkNaNT7wZcSKvTC2XE1fGom6aLAMhvRKG8W3hdKS3wGk1mLAJtKyggPpzA",
  "key7": "ByL4LC7R2g4AZnw6JJHVsJ7s5DL3X1Lj5b2mgVQBhYf7EQGwbhZc5q9d6wGaXrBbQZAVPs8HKneReSgVqnZgPLQ",
  "key8": "5YqigndLoopu6QTyho1EJaDmjx5DEv3dgdWfRaY4UkS4jtfaPkBtottb9mqpxhDsi4D8TPtaL6N438cV1ggqFnsp",
  "key9": "279sAeddDp958rdbQFCxVcsi4PixD8cgJfk6ECco7dBTD43szhwL3fWwpaYsncwvVyV77Ps1TJmpkDGDg6dnhwUR",
  "key10": "5zRF6YYi1PVMbzrj2M3pAbahK3sTkjZJahUzGVkmEDYs4xhwaj7acMxxYTVtQFJhCjBuH2QNVr2GJcvVLxxcaU2z",
  "key11": "2HoVXcXMYvRALrF6k6zTKxGSfiek5bbDThtzwZi67wURZCfAu5eLqRKoDQgENDyeZYPPfoBngxp3gfx2S6yCmhyN",
  "key12": "2jz2Vf68MHu7F6WcoCxkFGjso7whoX1ufi7YXxng7buzTyRNH2x3LKfUtYqt6912tmk2tH1DwsCSC4ZWms2gkycn",
  "key13": "45dg2hB5VKC8kDj9hCJHBar8628cMRDCmJtcEUpwL4WU6fRjLiD7WCxFgAnDdFHeee48BdA254rVXEb129ADEma8",
  "key14": "45nuPFiyL9CeW6tvCVt1SQbiQkG1xeiERZ21dQvoBzZtLQ9rkSdZHG1bqJcxgXCWFP3kae6TumXZ624oy6kuktsh",
  "key15": "51ByL6Fgb2RmpYmcxdrsV1ZMsAoEdhE4g5wH4oFxCXd2UZLd5KVpmrmdwvdiQzUdPkC4fWwhpzpZTKNRYgz5uQ7S",
  "key16": "2kLaRFMwe8XXReyLv6mQm6rUezbBJGQZGc3t8pQyATpqhD6JNTS1JRMc5xqFEgNdtKaM7zQFLvqDhD3bo4cGQa1U",
  "key17": "22FJieZGtexYAwxtnzN73jprAJvb7VQNA2fAxsTVFRZ8Y91ZiWQ81m8QmfENXMUJdBb9VDQV3SmiQ3u1TAG9VMnK",
  "key18": "bdFaSSePdUuHSiaGMoHiSKogYQQhsjynvkXxccAbHhwJ19XLxrWbusBYZ459gn3CLvUvRhJ3BdDXBmpuZXS7GWS",
  "key19": "PZUSya4ys4kS93wnWXugrJQcQCgT1uyTk5sybL9tJVPKMwFxCaDWumrFCYG3L1P527GrA7RkqYu4V5n6nCfe9qn",
  "key20": "4dWezdqZVcSYPBgyoFTSHKky7uEAYxH27zQqVm2hXgfjcZWrSMdF1jcDFjjkdRb3kZncd8sx6a1uzz7exEBbTzNU",
  "key21": "3hCEqg2xuLcE5xdEAG3aPGosZG9H71jabTQn6zeTzjA4jLgyjAG72gPkqsUbUARBh2d4s4LQdSA61EaZVMBqviqf",
  "key22": "rJ79Uyu5ZnCQCFi7cxKuUehZKenRVC5wrrwLC9PCpegcp9hjRmNpF9imWQQtpAJZHM9vAUuuVKYuhRL375Dkuvw",
  "key23": "4ua2eo181zoSq9ih7yDm1xbwusZPf2Ko1k7bwpLqmEhkFr6o6oJC5jxzxnLk7XxQyhFjfNt41hCFh4WqJkoiNrxc",
  "key24": "37gd44xy3eM1eNaz95QYdoeToBdxagpWn3tUu5XheHy3VW8if27GJUFfr4tkMC6SJcn1VUPSiCWwX7XwsKXYegCU",
  "key25": "2dN3sg3FZtgZUjGEocw5igGCKJRDrZp4Wecw1jyiswG6nUUDEcwP3YeCbvAnCw3tKF7NrmR4e8qKSV7hTvMdkSkn",
  "key26": "2XCq3HeZvfLsMHxt1rLYwVzLnZHmhH3JdCTyvS6kkKeFstvCWV8jm6yXpiXX6npuueZ4LyCty7DH4pUgvccR9Jy8",
  "key27": "5vStG3SrybxZtht2ymk8rZ58NePDdAjkFTWCmFZcc25EyDuV9u7ZeYAC1n8X4NB5GqEWXeVcJqmVwhCUmZmGszPn",
  "key28": "649JTnuNv3GShDzbcHNzSEG9kRmDXQZ4Qav5yhtPEfSVxo6Uxg9NY8XnfQ5xpc21yb8PHV2BcByEVK2oshBAyf9s",
  "key29": "4SDx8GJ48nABYchZmJa8j1grNUyFLKQRb2aTjL6zE9p9GXATv4EuL2g41zGqS2jrLMrdTL9Vxn7DQSWGdC8BbBj6"
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
