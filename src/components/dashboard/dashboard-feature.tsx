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
    "5LGJ4YY6SG39r5PUifpCiszchWmqy5H46xg2YkwvFzSuNf5bPY2XUBkPzhUwegywhsNKtTVTw5v6UTTHdFbxtrMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CzapYJvrFS2uEFxNwr5eFM5i7Ndt6UR7Luoqm54CRz9DG4j7gcTz1T1ZThVTB6ofD6DCu9EZVDjM57ATZYTPeH1",
  "key1": "38N7zZcmnuZvP6VB2Rn55qWVMtBSXgAjxoadfpbmcQVpA2Cd8Mw6eHW8iZ1PezUkUDmUtGGJdhrwtbPnQFYCxiw9",
  "key2": "2EXzUdQvU1cVoFL8SXiq8zdAvNAnktVvepTBzKVM43xAD5XmwsPnoAULnghzk2QXzroPUU6QXkDKDJBq1ozda8T7",
  "key3": "zS3BLS9xVMxXmoYvYtkBwtaJDwP8dhYqiWb79oTF6r48Cm7Lyv5bCV48FCqMB9iv5NpHnT15Jqg1WFvpVjvK7W6",
  "key4": "7sjXB2dZECV1SgvVKUVaquSPp3zdKCyk9gsaJShR3v8b4e6ojmeVzYvTQFYytXnB3ZKUKZpBER3nqXT2xvfKfA9",
  "key5": "2LirnucXUHhpAzZF7m1zhADeg59sde3oVZ5nWuHx3J1zBo3a6w2V5kv2GAUPDVSwxNxgDJYhKLQYEUjWkx7Gz6Ze",
  "key6": "7Go56Mr667wy3vm5EniTZV97zzXc37rPebxhw8inMcP1Gn3xESAyHn8bQmAfgeHRpuAuiGdd4DamUP3xegcQJwv",
  "key7": "5oPedUZpzj6pJ16JPDguuUPcBdik48wzZCfrNkRTnq8vJ9qdyimSQipvR1pnc3NEFZ3CqHLPo2jJcB6X1y79YJ4G",
  "key8": "4j7hwaZeKBQuAv9ot7usK2GF5MVzaXqrQ7gRTvxEtqfYe1LS1w5qdh27ksQ26vcESD7EpphURYMmGs3Li6JDvtXZ",
  "key9": "21ExfWLJN57Ye717R5hoazSb1rtG8V6LZv8bjVcwJcXhhYLpUAK3ezQ4rYBK7xDYLmHdJ5QW6GSpTBbUr2pgfhCE",
  "key10": "4N3ScJyatXUU25pXrgrJB6BKU3xrx8BhQMJX2HH89om83CdCdB7VgBjNcpNuSmHRvbDTJsfNy8esbeQyQTPnpEmh",
  "key11": "5FXWrKRP2MY9GYb4tpTz6AgygYue3nM2mbygze6mvhUyb8eUeCgNbRX9XSnP4MFkKTZoLZL4QUsTWEkhwNoYcxn5",
  "key12": "M2KduahwKyvTdrnRESV86BG6EsJcU6CLFpNX2N6pXf9dcDjaUionwSL21ZiNB136sUXfJ7TY1GHZ76TktN9RNKe",
  "key13": "5u4ZhnTFuMPL62CU9xnXqP8643ho9MCVd2d2P75F6G14LEGg9aJPBeGaFwnD38s1KbLNiS5PMcLBfvyKTq4BkbiA",
  "key14": "53aLYmRyZeHm8TeZcSZfAxb5jUWrdEPFxJMY1yWKjoE72Yxxwd7H3weMM32PFjx5KhKSDtHgCjfMUDNs4jDoqoAM",
  "key15": "2MNr2Eg9hgyG4cWmktwPed32AgUBJWacrCDcJyFYAvorN8uG4tj9PW3d6Sviq7zAz2mJKzP7S64yX3MgNvjv9yA8",
  "key16": "q9xrJMofWbEQqLKhRZmZvHkUfCvDRAqLB6XtnuTUL2KqKzFk6WnLn8uSqk7gfpCbqKpmUB5GZPJbFXKhY1Tsy43",
  "key17": "4t2Hw5guBM86F35a1p3fC6TMbE8sLtmeRf1vQW7izbk3E5RzTfAEY7X2ezC5BsGWEVjVJV3KKMjhcu4H4gz92ayt",
  "key18": "4cn9AKVFmrYppfQ5djKvG3a8aubUdiXRVVpEd6TiFh6jP2iXmjDcttv27FfHUbYjFUmrsAA2WwP3V4WEUpWFkF7W",
  "key19": "4jGt9A4kHgzLUfWZ3EGD9m87spjcWfmxsQzCu4cjxos9jWSNJ4skR2XtzLAh5YkxtH15ez12JkUoqNC7VhvCmTM7",
  "key20": "3UxnWuXLSvFRPJG1SqMw6dzzTSy6gX1b93TRmQpTnguYdHXEKviwAX2fztT4kCVCjxPkcqTsfs42NZH5w3pWeRdv",
  "key21": "26NkuGkY2hKHBjYfWMDK48SnHAemTb29YogMrMHFpRJqif7jYHbVR28ahEVJ5TRArCFDzGdTKpUYPumtQKVpBANs",
  "key22": "yUEgnxoFamgqEPmUHrASJxTCegDR3694mF9enEjVEGr6ijvmhgUrrnEpjuCfLkzUzNdimtmbB2L66cjtCrTrX1D",
  "key23": "3vYZG3bovogQgzTr8HX4SsGQZCAR6aB8BvCo6kBzgUEHDAiWUsE6AtCXDGSFD1hu9sWPGd8r6iTK6vf1imfwsGXg",
  "key24": "3WKwKAFRZzoHfcFzuFm7tU9crawWVBiiM4hjFKL1fTSqdMPhQGDdcjDPqZtKKTs5YQv7QPYVNRMfBSs5a84gDoMN",
  "key25": "21Kx9YA13Ubs9xnscD692YdMsUxMmGqKGYWrmhVTG41D3a6kR8NRP1Xvz3cD4S4H7JM5eKfBbAkWefcVB9FYPTWY",
  "key26": "375LuhsfN9EPaYLfEUkdMuoV3ymgc4ZmEv44T95hXeKQwdzatdSTUWAxaH6LqnRwMZJpLPKxP7geFnZ5k4Xddcsp"
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
