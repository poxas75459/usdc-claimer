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
    "45i6W4J4G44FvQYdfwUwheDuBufC2qWHhKwRbMpr3tp1vUHT7stVdzmndEksRyLmmVZkULQHKS8iZVvwF6LKTxxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ch15MQJVYo2itzTChpkCpv8ohVxHEjaBBjeRP7TNJFxCKchXsm5WAqKrRQKzwLJxxknJhmYpmyC5moqMhbWnvYy",
  "key1": "3vmb9MQPsWwyPbn1SbSccPB6iPCqCDwmdufnpkgNyQ52ucHLnrVvvmVm11uY4EKt35NGNrW1HPYypQmjcH1xXz8N",
  "key2": "fUbT2Y7gwt7ywWZYEB9sMf8UTN2sq2jJn4vh3CpgbevKqHHnGAAbsSb8SmYt6pUJntTHsp8qBS14tYM87EQDeW8",
  "key3": "5Te9sGhRngrrhzbb7gAYpYSPF3QNFzmGn6WjdLmbFje7D4kEUvjuZ3ZTSaTeRN7VhGMgXp5JCsyBoRbrBdmzMam1",
  "key4": "5g6WA7mWbh6ocTLZyzq58SZAYi6GtPSxyzFMUrXAoJRH1RPr3y4cQKrdB6J4aj4Rk1HkiVfQFZdxNd4XXxxLcjZB",
  "key5": "2CwN8PKZ3Gmbq2Hz9YBKXuDweuQ42Zoa27wmigAKrm4gGYaGN5FTDkVQMfVzHHGwfERJfFxUw9RR7BCqMTt4rWM2",
  "key6": "qv48STJs9jsBaQAhGCenqJ2oWfUDnqEdCb2uMyvqjpS1ZvkRuDPKuYizX72bL3X7ASXMkZr5THrhMCMEvbqUZWq",
  "key7": "2s6DvA5vfZKXawipupa9nMq7kKAvoxUjgyWwSYJ6XiptwhYf84D4qvc9S3g3ohiSGsWmmJoygkMRgem8nMYSgfKY",
  "key8": "cF3enG6Ught8N4weCUiBTgeAAFMqn6La4572XeuQRgf5jcWSkNtFWYYjXQFu3fmEfpyqgq4pvvWnioqJu2ree3j",
  "key9": "xVhLWYeD2ZnDogyKx8t5pwN3wH6fmmy3e8VmT4soh6syTc47s3WYyuip4coGgZt9VGtuchziRnfFxmqz7z8gxt4",
  "key10": "49nkhHWNAhNJ5dbtxuTQRrXqrnEbRhUCAjnuAt3bQn9kNmceKEjDdFqXJSfLYPHWDZAzEKyFQtnGHZVgfLXBN28k",
  "key11": "5Z3ja4ZUyHkEHVe7HsJaAZzhYTB9TcuLbcQyiT8Z1ofJesfVhkjuVG8CDAMU9H6hhxWmWpY4HmXneQYWCWNqf3WR",
  "key12": "NmAL6EJHvRWEcgctiu4yLGC17io1Ds4NLBfwzoE6RMfLfZLiXQL4ayxaLAQmeemww6KzdyTxcJWb2SddiUgLdr5",
  "key13": "rve28nybc2oSsc5CtqbLKX46a3HzF8Y3mHhzs7poSiPen63Cqc95P6DtzgSWMBorLFJ6r29R87oaBqQFqfnBPSR",
  "key14": "2AE38g5pqc2VppW9YVKfBgRKSqht36UeyRAYXAnFKWpiWu45zQWuLv9ENNQYPdqUSJVipcxJXBHtmnMdcpPb2h77",
  "key15": "4WHn4rhjnZ1YJ1EuBjWDLhLAMfXMpr2WMyPmCvsWCVaRRT24KY48w48k1mv5wqzQecpQVQs7cSxkUDgprUgUcX15",
  "key16": "3jZDDZnCSwirPwJsatt6fmJiNT1AqRNUrd5KsAgHKP2AhiYHVE2mUaBTuruEV5mjBxgmuZ3wyoh6JVFdGCjFye6K",
  "key17": "5gUtCmhEUs5KibDENE1wPMWvkxfWAwARvwtMqtCSypEx8sz6M4TucP8LDRY7sjsKF4Lqjmhk1q7pyFU1hWh5UP58",
  "key18": "25RFvLjFjCS61m91hT4pLuVemau4ZuLBcDszK6NrUz7cpj4iBjQzZghpYG6dai3zzw6nmYPjMJwKZbnQdXmyVS5S",
  "key19": "Qe4th1iNiQZYBWL8h5fuapUojK57zbqLJkNAJTypXgtHYefvFU2g9Jayz2YjDt8Qqq6JVaoZo9wwqX13dVNpYjc",
  "key20": "xXm146xZDK3iAWcTsdvTLakhp7VBCV7NWrbrY6CJF6WKx1Y5834Yx8cAj2tHNPiB2b7QVqQG4w2ZVr4pAgzQFMr",
  "key21": "4WGbfwu21xNTcvz6HgxDjoXzB6NYYx3dX8cwxur1X27CweVFZuEtVnxV5D5BbpDP6SgKwA1u6YpV5ujY35BcpU6N",
  "key22": "f7vL7HfAoiBhwppuJfNhioA4Sw7GtSsZUCUQTxr8jRVDRRJExaZti26xSoGGGJ4GHD4NMAdd6CQUZjywqyYhkE9",
  "key23": "2bPLGn8ciKAAfMdA6ZrwbVGowsV3jCqFUUpXpm5NLQyzsCGaLHh4ehzpChLP3KCyreryKajdtSaKgzM7RyFMU7Ss",
  "key24": "4ybQiucJyGFhWbkP329k48f9bo9W2SbM3VS3zT81THK472dQCch8cG5Ptox2RgVH8VwgQEozdvb4GcfcQuuv6SWK",
  "key25": "5cvwfjtxWPLykWJB6ziYho5hLVMKyYDbcaWYbKPSocCedEwdkUtpQZBt8A1NnytGWb7Bj8pcd2k4ER1jpXEnNwWD",
  "key26": "VAfGT6mD9cwUoWTv8z82qnKKGe5RGFDavohua4PNvtyFKuUrt8mCgAyb63PnZMQLnNbrwSrMo6XrSMQDDBZuZ8e",
  "key27": "5pmiSwqevRXzJjYzqkRmUU62zw8tDnEUKy5iiBRLjnkZY1n1j3NDKKd8RYCNSpqtZC3YX6XDMhDUjtUzjXDRvwiA",
  "key28": "5d76CNKWLNHCTAd7LkpCXS3SLYTKM7NXLtmk1hSFmTjJpVHg9WeiZad6tTH7mDZ2phPQkYe35s2FHL9K6ZtLXp84",
  "key29": "Ja5thiabqsRRXS1nymTBgXmdWVCJJBPvEyzSaEyCaLL7NkGmATKshBbyV1J3rryyGyntWbMVbUcyZxR9GNuwkBD",
  "key30": "4jNHxWbvGLVz2krZFrZM7i7ky9VQB6rgERMuyNiZSXkxceXT5J33pAiGiC4EFgV7Pbwb6BW2CKD2kx4P37sZ8E4b",
  "key31": "cUn1MDdMAwKaDqJmMDcwPfzJBHg6ZxGmyNeqgGgtkeCSh8m1cbcMWR6xaM6DBFhoURYx9nfzaVwZCmZo9dmd3vV",
  "key32": "4p5HL6MRp4QngZ6o6vxL7xiBoZU4HApL7CrT3HcYKRUVq4rdaB7NYhBoVGLYinSc2QcK7BYHuvBRopufcKuQrXj",
  "key33": "3si5ZmEo6ayfYxu27Ku2nvcupVnoRZfocnyvLpehfCQUQoW2Gz9RkWvJmm3QeKqAh8WXZjMqX418R7g4vRUtpWkn",
  "key34": "2Ho7woUYGNYUsp8V7cV2Txj9hLGP64r7Usp3mDBRKP3Y3kMx5izt5f4vJLH3G8G6R7PX9FooGTno9XjwwxFyQuje"
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
