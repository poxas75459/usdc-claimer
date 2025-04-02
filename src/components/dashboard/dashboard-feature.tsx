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
    "5QfJpwrNGrycyaPSP6kkjXaDk8W8NK6hcYhWsmW5zpjnZ4BcBZcLup2oWHEF5V8YMX3GzaYtztCETzdxEJAtZKdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1y7GpJ6xiS9g6feUTy9ADv8gCHqa5zmAQPPqyzm8xn3yAFn7ep4iXKWpo2rb67gT8NrhUK3g6s1c2boJ121t2o1",
  "key1": "3wgyYiMHMV3z57e5cJiFKT28wtJBHeoh2aHVTznn31BMNzpbKoeMXCENS11rK4ztqA5Go88LUzZHRwjXvMsAKnQa",
  "key2": "2pUvVKQMcEWcmK5zRkoHYGecbHuA7n8ooTFnY6qtrkTmFMRvHRxpYLez2LWXGxKKXYxMG35rhak5HD6jRkaVjHTB",
  "key3": "2koSKygqy1e6bTbbxFNGY44t6Hki9Fp4wH7YRWZF4Gna3C9m3sQZ7myh1pZGCdgB7Dda2Ga17vb4Jfbey4Wn4m7w",
  "key4": "617XNBnBVU2YUQJq1Rxji6DKD48mx6CJ2QBjKe8uy2E3MYCGh4posVxn3k4NbsvN9ausqpdTpEQ2zNwzAqPj5wvp",
  "key5": "2aFneN4BQ31nHYSLSpuJYUW5V9S7MsPA8G3vLzKJb4spf3qbZ1byr5H6kgp33pxiF59VyJsHrfNMwefEjPfRQFT9",
  "key6": "4cH2TiF18BhMU7cYLLUgEuYm5P9v8zLyVa4eabYHFEcmdQ4dnEbJEqYtswUZekE366wDtdthpjtBzQimV4mHGLS1",
  "key7": "47JVSQ9QNjPWd3ewFKgj5y9GrJnPs2SJRbhtfZxk9qny1SJ52jBdLKsCPTG2M6uSHzsHcksKAu2RQsdsxahykaVw",
  "key8": "4P3F2EEYYprUzbiRWhceTy5eGy4eSyS3W8SFtQSNKkpfofdz9jjeqH9LYJ9wKAx3PE8hdB9dYEb6WEEvwdybSwBs",
  "key9": "2tNQfazPoc11SrkZFiVxo3k7FisdmsymdXBPiSpKKvfkEsKxzZATkkH3edhbuAVXVd1PAGmq6GXSaFf5QwTrwDnc",
  "key10": "5FnWP1HM6s9xcMFethtU2iUndSeSFiPSopxNj8ysePR3SkSpU3FAPEvFfLZXz5WUdwbmPjAZRzcKdHNbSQpRxWJ",
  "key11": "36w6BcDigy5T4candjft51JwK5mvv2oa3uAbKCEHch9EUitmAPSN2RP4BC2qfQphaNA1BnPWVg2qc9pJHgQQBeKL",
  "key12": "2qp4HazYSSbQfHBme7NP3aGFrpsSAba3adyWjBnGivGanJnAA2EX6YjmcMFWvCDSZrqCC61inHvT7Rpn1yUpiUBX",
  "key13": "LsGoDJJ9esVeKEQgQ1WNZmfoujWtmQVThnq8znLrwT73ha2DHjZNibZaDkX3QExqVDoNJiteScXKdsorh5gRybm",
  "key14": "BFbfotVpAkTjTbHxHxSX6JYXdZGiPF1KbnS7umPsrPNidMrb32mx63xFtq9Dn5E7tHxWFnaXDwmk1AZBiiyW9kt",
  "key15": "3CQkmNLtoR6Fr2FiARjVRkrtoKEC4ng8fwMNKpcUzZC78iqFYTHJ8V7Y3Gr5BzLBsbTkTMYWLqrF29p6AT7e2v3S",
  "key16": "psQM5DpqZZMDjLYgwqk47ecGoiURbuuyRWuPHxhEfE2RbGzjsaiYrDDQRUvALo4jzCHuuVh8KwE9nC3tY7owmsD",
  "key17": "42Py1ZTbBvfH51vLAeA8DW5pJVvq6tnkezj7DEwtsbxjsDg2Mu13aGuVD18WXupP5MPmPJQ27tzZGWVuMZ4RgJFd",
  "key18": "3eP6YkVNBe1FGP6BhJ3FH3SXqfbpjBWY5kn6meHLrSj2c9P4CbGtME4uyJKESmLqs44CUSCemodGLcmajSShcFMZ",
  "key19": "3PP5Az3B4KaoQ1m8tnk3vU7gkYU895msBtSSdc4X4quMBpy93p3zTiVQa7s3UASTjDY7NcEXhyXnhNmXc2YQtJKG",
  "key20": "2zqaJrgm7v8CV6MZtHGyfhBEtwe5LcKAk1zqRKZ8qgP2FVwsuPXZipdsqzNQ571af61QPPpdgbYBxxoNrqPW7XB3",
  "key21": "2qes9M4w8FNhRrUBf9fxxYCRaPf8XUvrnjuD5kPFd1qt7NXov3uaQFwB2741ppnRjyuPSpSeFs76BeHnWBGqiN5U",
  "key22": "sJDEmiX2AqvCZwDp7R9GCURCeSr87tHK8e6n4J5ugZjbh4L4qSxB3TNptvuqoshKnjt1r6esYkAYwvD8kDAMy4G",
  "key23": "EiUAcrFWEB6eos5QaEwaTr1S86f5Cw99ZhZ8FSHhgxjQ3z94eAi4PAbuXwxShzDEB2B6Gi4vxXTE6ytoXN5E4zt",
  "key24": "42XZfsJE4aqKhbuZ9s1tmTuJfdV7BbZNbFv5uz4onaFd1AwXuV6hPr6fBGCibwWxRhcRwK7kiLmpuWqFNP43VdjP",
  "key25": "5vevuU9hRjYAbnT9DXDZvjGpAo79CRsM9XBARGxyayMj5sAZoYB3nZ9v9u4UFWvyMYwAGznKmF2RM6doMRcF6jn8",
  "key26": "2BqfXK54WSwBt2yLRmSyXDpUiMJKynRbhiAqDzdtpCskUx6F9dL2oLVCRdMkN88QH8mdRsA8gVvrb1sTaSRNmJhL",
  "key27": "3oiQZabU3ckC49tZWXuESe9Jh4kLoqir3p6mj2QVfXPWQYbzz56ET8n13Pj2RK7nrbaonhEPprhdwY6NkswZJ7ey",
  "key28": "5EHkEWyCekxv1rL8dn1vMsHMUYfCrV5bt4qhjsPt34PLZNAuLw86hDW5Lku2ZzThAFQHGgzCiqCX6vZ6TtbqeCzh",
  "key29": "AHJkd4dSYseQmyr4bEMPiW9jfMiytR5pig54WwSiNnPoYpFEB4Wi46Xk4mChXJzLmJXmCNdqi2Nx6UTwjs18SBF",
  "key30": "4DZFU3f5Xk86BsM3ZTK3gq3qci4qVt1cdxxysbcnS1xVd5CEY3QQ18mcAuoT9FAuLQ36DdLyHMDQaW3VXm2Xp7mJ",
  "key31": "44o3hui6fBu5BbJLg6fWCihpThcCVkHufGc7TtqCHGjtdC6k7hHJgaH2B9bzjhvcowJvBvbgD5G8vwbvjGiHwdxT",
  "key32": "5cgqCLyhA3DzgKXZFUzCDyeer4dSbCsaf6JUhwkcgmmDCb3wTECsEjWj2AzabRXVesy4cx7gXsUJCWf3A9aAH6bJ",
  "key33": "4cVGttmsttMQsAaGRHGYZTUdr2YLwFca4QcXwWi7LAbjPRsvn1bZvZw1yg21H4VvKDjfJi22QBhDXNvbSWSTEbLK",
  "key34": "3zGWaDZ7nkA27joN88p99psXYn52pb5b3bcaxdu5qXvyV2xyooFjUDcKfvyncBZ8DnTbeqAS84FJY8rt4cYE1tAn",
  "key35": "3r2x4GwbXjfD6QaknZMCa3y1f4xz2MJS64ngNDrqGK4B9dLT5dXY91uZJ4niobNz5SunUQUFMAu4Fq571GEjCFas",
  "key36": "5nYrV3WEzk1zy4R3z6XvhgFxHvUo6A3H2PsAR28s92h8znGTfcTEeDG2guv8gABSttiMkR3EjUJJuFB7W1fNXxrP",
  "key37": "5SHyRBo5XVons5nn3SfY2gHXFJRSazni8bJHvywxggMJ6hSKJUkYSgfLsfQzPrBaYpUFAfx6vUX2KjA7CQZRWwDi",
  "key38": "4VwDFrabUkMGp5cp3pUoK7Xmn4zJrWkejYr1Q1TnX296UNUX7sCkyZ9tdW9DaLnvTPRgu689pKnyg4MtgEVcLzX5",
  "key39": "2vxkHtedgvDq8WqyFfKwb4CBrMETrgHLHrntHxQZN74tEgdmF1jnqNkSoD3BTF3Cvby31Sjue8oBPMxogqRb5e1e",
  "key40": "3qZMXLznrn18JQV7X4pR5RXguA7D3Lj6VCPLpUUQiYu5ZGpP8sGDKawuwTAbmVAyuo221vEsiMwvCjhAJxQwo9Ms"
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
