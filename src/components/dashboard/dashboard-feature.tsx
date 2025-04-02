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
    "35PY7nDv12Dd8AX3NrkgbrTTUomWpDxtnTfySTB9N4kpDiQu7E61eYKRHfamXvCAQqH5QrRKiH3Z2D9D3H3rq2Ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQnNLFbuQqJ4rTXmzRoQkhcSd7Gbi7oZ2NuGZ1QfnDyW1vtnNBCGugi52Rrcdv2w69Yc1wLd1bTRUhRfHAYwPGh",
  "key1": "3s8iEsH9DJWF6gDZHAKrBVXWypf6KTBzwLhRT4Bk4RdeLsWoHSKcHt4QcqR1R5d3AAWGY1p5ww5niFwmG6XLzjRH",
  "key2": "uSaEFJqhujPKUhC3j3o7cmuPqZ9nLpPs8i1u4iMRk6ZdWAu4UDXDMXakmbWUoB6aHsxkvEJNEeSw9rP7CQdYSED",
  "key3": "4Bge1nWAtqNcFJxksfCNG4bWPi33m8xPJ9YXyyWgqT1THVAMsQ6oDoVXpMBg1Fq3jiUo7KSZDV27tWKyQoBSDEyf",
  "key4": "5UF5ZfDCqztn6STM52q8x7rQmSRxjW9GPndsnfDUZQX8aswRsqA9RyKkteFzZapJzgvLzTWuio6eKui3UwPKNc8m",
  "key5": "2LaEP9iJerFqqd9F2XkJddEbcyPYWfLM29CC8Wz3J2LtQpEnXJJowPFz8DUPxLZFJZcqQfY45w1dm3sJWL1V4GHb",
  "key6": "2C2do8GWqaKMMPP5MJKRahbK6sBVZPCcsdiuwoDiDx628fq8VCKPbgwNVp4tA9tset2PiHzwFTPpsnvtK6EgGfqf",
  "key7": "5AWSSHcZ5UqEFDVVSZkzCpRfQe7c7awFvzzmkypcBpUcXmpewk4PYCgEugyiw8S2mogbTsTQgfXy5pYUj3CouZpj",
  "key8": "48Sy6nWgKv4CEEMne4o8L63Xq9u7852d8ued21QFuyUwyFdss85L49jxz1NrBtBNC1dYUaU9SmwsBGpubhSBmHbk",
  "key9": "62bkixxRFSL1cyBSZbGjgQ1ngLUA4xkRVP6U2jknCUHoDoxnqrXx5EYQVvV9BxcsrMrxpkiyQH8xntsHnUSiWVm3",
  "key10": "63UkMyMwWPrcqeDk1Y98tQ8WkN7PGCXZ2XsuPbLpcQRe6D4VLLJQXLkcgLBezS4w81AfrFxDjfmGKvXLDWAwLW4h",
  "key11": "2TYp7QUcZ2PJVbaNYX5L8N4WhZZhifbfy8rsGHB23JTitM6B3ujDDTibxz49XejBzG6MAbszzjQSCuNpjBqqoEw4",
  "key12": "4x6rFwGrbEgKrHvfsoze8YbFpLt6wY1RXY7UhfVu9zwW77VjsUeWjZmEy649Vskc6BRLKJFUfkGzvuUtPuW3jr6d",
  "key13": "2dFSVvB4RTaRpNTUJ6pUhQ6y8DrqiGGc72UZCci6CoaoSztyxMM5bCMfQ5NjGpyD6t8mLDfBGdPtsctdMSXExoAn",
  "key14": "5VvjS3hg1Eis5kSxgFFkPXbUXMzEpR6WuF5Q4fChK5uPtm7hjtuDb2KWPrY4JZAZQP25udNJ4MZVwgfoMPrXm4qx",
  "key15": "23FucJ84SWJSvnSfVM6gjpXwcvt4UTnnuzACfoixNopuA5eqTMR9ZoQTRoZQ2DyZUPeMr2EzJMA7JE26hzBFENGD",
  "key16": "4SkjQ2ef1cNUxVpzG2LQyYXSmpubZ4i2Ysn9tAU7KKeKwHKWU8iUk36gq6yX81Ge72mCTCJcM8ev65VCAnJpcSCe",
  "key17": "5oYSGSZRt1seUtkbCvv7Rt5k6TnSYhEsYHgFWprGNXYCYaV8JMVVdBPhQ4VHqkZUnNoxBZLzUSChz2Q9TqTig1Tn",
  "key18": "5dckzE9kWRHmWKV7F2x3Ytb3eAitP1NvfNYUbDJaDoCNMH5TLsvi19nWSVXNgHqt8MVGWZ3zAaJvNwDzzJSAS5VS",
  "key19": "34C8UiZ2okDbw3raN2bfHv1EZoUi3XeECCdZLPLcyschh9CQWbqpGmNHfiF4UDS9S1CmspvLdCixpW8ZPJJXnGZY",
  "key20": "vVQQzJujE8iHChyZ64SPBno8f4xVzFX6aoxtzTD1fVf5C6Hs5p4J4oaQKNs9WcASoAADfH3VDHCGvnHUpMH1B3h",
  "key21": "5rDwPxMHdUqsYC66EVfFreYBQ9ow2BW2Gz1ZB5J2aBf4tjYU53N7jDc8niaxPcMmFrNRdf3wkJ97GhzGWBfnvtcR",
  "key22": "271Y1QCZ8knwTs8jRxX3vpN5XZLntLp2VGwT2BWgUKvh6ZpEvApMZPf1kQq4xzMYiaCJfLjMybN9db5GgLD4hK3y",
  "key23": "5Bss7zYFuNMBwnj2VuS3DC8iLroP6E5ao2EZ6wtsJKCuRVj9vQjz1h5Q83PURtuyHa3jxN9BoYhMgR9jdKD6rE6r",
  "key24": "iDow2LiRHb8ustBpfad9bP9HHhmQyJGeKer2Dn7qdfXffwYDVoT2oRUKrJs52wSNGtjRdq1iaKJp1erac14wtEx",
  "key25": "5FVUoWuw5W4EqSUpqPd3mTyczBf9ywhXxQ5MkLAogqq4DoZCLH8ztkq1qjRMYpTLPJmLHQc6foVvCDFxHT8mgSS6",
  "key26": "5qdvYwgvPYr8RR4uP6NieW66ckkd1F1fWGfvo3uo6CC3YyAursUSmd1XEqT4nV56jaBRG4912s4hVgHR42YC5cqX",
  "key27": "3Aim5yvDS2qChHWiBSyJ71YRCTuV9sf9zufLyRaZWRqSa6W3TSB5yhvRdch8AgN4eH7utAVr6hKS2bmfUtYBjqJX",
  "key28": "585WLKoFyRSeG98KSgJdc3ckXAZ735ejQcsj52iC4fjfaW96fGNtuD21eK2JZZeBDuQzwfFCGCvCYTRTvhNza6ri",
  "key29": "46U8pPg8SKig8x5Go99nNUZ16PoKENYbM25thUsBZWTVHK2YXeAah7pWw6wTCmQejqSAUVUKj1AuKXXS4sKcBppc",
  "key30": "3jPuEeqhr68KunszAHcvLJxvtrz6EFS4tGmGQMdwFbBo3XXcs2wx9gU2QFJ1MLdaJzBZvqzsXQ4cnSKpsRWr1GQ8",
  "key31": "5XxVS3q9VRrNrKLadgP6LAZpChSmcnHxusX1Nt5T7VAW7U5aiR8koEDhFcZ3239y4poC3nUqEQuQnDmEACEZ8QZr",
  "key32": "4VE442tk7FVMGtbu5ymNjRXZfKzR34F8BiGv6BUxKUtq9MWBmnGYZjPEVRB2W64rhMY5FpR5UJuU4f9xrjnH77QP",
  "key33": "WjqPb9jENfCexipwMAwGEitwQELekxf5Dsf5Sew4KDCf41L4do1Xy7WqXZGHgB1Sorm658k61RBJYJDnszwDXMp",
  "key34": "4jrcJqpD3qViYVbYhcHdDtom24MydNxnaLrLSu6aHtEmGS53TrP83B9WumPzrYdNNwb8NJBBNfXwLAofrTbSDARx",
  "key35": "42NvSn4NhsgQaaSvdqjs1awyHa7yCbwYCGUCoxCajQGhyKWZQrsGjKdBDB99LP9qmRHSW8RtsxBjvKwfhmZMb3kR"
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
