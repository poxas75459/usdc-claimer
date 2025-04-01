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
    "531Jjr6UNGQrpVqhhEgDXkxqDQB5RJ4FgwQZ1Tgf4sDSKNZ2qxrHszxTbwsoWQHfUgSVgppG65AaTbpJxg53Hkps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31k2krWNjwgKttaCG1h5hC8wzNnifiCdEjsFdES2iuFjmfP4gCUpyokrtn46d2pbvkoiad2KbLeSy5KrcbAxfFBW",
  "key1": "396tcXVrYTNd4gZcB11TLZmwDxqSU6R5sdebNLH4qRjWHnXZ5RmKwbkVHdhr9t8HhgFejTUzgSaxgBUxo6vc6icP",
  "key2": "5RdFEqXS3kGsbJY3xtVmUeDbHjT5XvtioWxous5ULw9UUju6r1qhd2gV9whRvC1vJp4Su7SBmrNwuNtsXAnzGd3R",
  "key3": "4AmBkzsGyjPZemrNiDeLbyC5iXDuSDyLrT4h2n6LEP2k4eahdrF9EFv4BXZzKJkaucFGu6CspbmwKRPiUr2ip1rz",
  "key4": "jVJnjik9tXnpp3Npi66PBcC9mPo92eUJE9TjZhbvjPzUmcM6QqbG1DV9Zkxbe8fUvVxdUfps2kf8YeCr8DMuNnY",
  "key5": "2eGnbo2A4Jw9Lar2E5nhRii7GyH8r2zYXcmM27zSNTrRZEM49YRAhr4q9HWxhFTGNDC6haPv6JWWt2xDwxsLzR34",
  "key6": "43iGXVE6Li9BfzCWTvffx9WPzwqu9QAbHnTLui3mnUZFezkgpCpAnDjY8C4Aje1qdEzdAwrkp6sE73K8HRCa7vGA",
  "key7": "4b2GcZrhdDSWKv4aYq8uyBrCbvynvGKkc7e3EcUrucAqBYpgSYMRg8C9sFU1VEPcnB3AnjoKUbsq3R99UrgCv7gu",
  "key8": "4FKAR4Q5xDHyK9U1ohvPmvMKCMnGG8oUqhaymSWrQRBH1e3pNk7HWczkTMCPdJwuj5nzFNDvajBf6gA1jCLWKk8w",
  "key9": "3dpfHGTER3PNNVJa3RNwW4m1u8qCEna6rSADGzCnaD22uzPs1XfZ7Nf1EJSYh2wZ4QgZLXRoTXAceKWDFMdupFLQ",
  "key10": "3XG79UD4PxmPLX92a1ungK9gWYL5o8FkpC6Y5QSx31dGQUw7Uw4P9QpwxDepDqrsEcaSb6AECPP5C4KUnnxZFoFQ",
  "key11": "X7DGVt3isKm53fYkXiXWKZX89Veg4fRbZ7ZdkEXAcaTn2Z7ZdSWNqRFvFgUnrZhcjsHskvdVoJuoHvhHMAu9C5r",
  "key12": "5tFGLwCMXHJk4tPdYKYF2yxa8zHVi3rka8Q6NGCF5efanqS7QogpUmHXdy7o8WpEwkGwQEEX3SoLfRLiDL83ujYL",
  "key13": "3QBTvoVzCvYgGTL7AmmvgKQ6TTpZevPXCWD8QdwXzRAPPBuNts1FndTbvtm3hHrSwao7rdRvUhMuKC23ZSumFbG6",
  "key14": "3schg1taLCvxJMVeUeniE4zpEvfxy7tgKSaUQhUFqitBU5ChJqzWcn3pnobK9YkMZVxXKyuU9MpM3fC9KAaR3Tkp",
  "key15": "3vspYkFYGGu1uspMr9hyriWMiFrzTiB4e6hovueKaKnLPVimCQz7RKwtD9qwSnubaNgZVi79rm4ghTuXfSgxF9xF",
  "key16": "3aCtaaruroYMDX966ZdPkecLP2TJUM6ffcF4reFcRt5HQiULbAfhwQHh3dxNcCJBYMg76AmJoNUhhoFy5R8A8FhA",
  "key17": "3NtK2wxC3drdhxY82U6MiVoSsYLZsY1DrUevuMyk74JgdJe11QXu93Py9SirzHnhnwwCo88vQneT4AyHTWvBc7cF",
  "key18": "3Aeg8ya84XXTPCS5aQSxBr6H2BJiKUPXUyfftJX56nJhHXFnM39pi2hpXCaCeA1BAmUM5dZJbRYuTXwemhmFVufA",
  "key19": "2WHWWRPaKR5keUtyhohgR4DxnpXfoeyaZQdLFxzFFAkctBedeENMj4zcKALXxvjmGjPU3uWx5GxbUxCpdav92VXE",
  "key20": "3TcwLgAftvhULm6GMopwT6H7SxpbD2KNKgtvwa7MJdhBcKYb3dqvRfPuDT8hyMKVLjfYVNippizM5HW3cbEVVFx2",
  "key21": "4kxLbBtTtRoauuHiNyjX4Wo9BWyqNtpTUujUL87mq9Z1RQ6SdQJfLhPawE2EQ2wAxby1uahWfQqeqCTDQQ4PhaRj",
  "key22": "5zp94yxzvYqSoK6ETFJXMJjuDNUhSqeCyTSrnA3m8CCj2475KrtvDTDBxZM5X9AUrArLM1JXZn7W3xFNLJCgSgvy",
  "key23": "2AHnpjFtLDdPjJYnakWL3CoY8aZCmgEU3AfdyW84S9gRPXUesWtRGTYqikDksrntzTRCqAPCsshvNRVdE6sgyvK3",
  "key24": "2b6AHryEYX1xSFLB2yYbvXgqC2f4SuZRFp6HXt2VLUxR3QVPzVuttJhJ35bt8TdQC1QcxkTbFDb1tX99iVqRak1t",
  "key25": "2q5dATW1Eap66ckUqDYVxgs8rDsMRAPbsnrvMxSaJ5DA1rwzovKtft8D3CvLH5BvwZsqtTNDBCLHm4Q7sVTEXR6Y",
  "key26": "4Dfc1G2ppMPkLXTXNscF6GFNFtmsT3jGyL8ZykfncsZDmj5pHyZaGDK7X2oqDqCXXaFqFLDX5ryKhkYmt4Zb6Ugt",
  "key27": "uwgAxuHKrxnvrHaY88vGvuHsQDtw2BHSwXM2UZz55dnfYJ9dhAUxCHCkzYDL54SxusLnoJM15sPKapvPScVVbUt",
  "key28": "55mpnAFM2cEF7JrLD1sX2EXTFJVHUV5ZPjkFNeGHBjH1FsrZSdPZ4Xm7r74m9FQd7Ph2EjQiLKUwNGaD7zjrYdju",
  "key29": "3d9UdAUYxob62XKSPbuhDm2K89p8sfb17BcTvLjmFu8FvjHKWNzV98Vzn38z8V4QZAuc79HrbE34uvv9Zh5Eqsf2",
  "key30": "2fj8U2t1qm3CQ4hnJwuTAJWSXvAMJ2KctZw87RCnvppAKvzRfTf7oQvKyKUKrHEmD8WLgzBRQ4TXJ3GdQBLZS8x2",
  "key31": "RpwPtDeTXpRFgsXrTXC4YTJtGoCSWdAocvyZUUVHhy66mFCbLKa7mWXVrrMNgaYKRaFaxKNJhjvR1eSXFzoWrrx",
  "key32": "5uUesT6GmAexHmBTm8YYTUmauSLT7AhwsrKCKokMd2yq47hMqYbXjSX1ZyjLnVmz6kn9MEH4KjTjKJpMFL89qJfr",
  "key33": "5XsX9jcgYyyqcCjtPQsRJPwsraMxjsvoGsGmVcghSa3CrQyaBDbZC9XsnGi6PSLafKQeJvsFMymtuTgRept8nsqE",
  "key34": "5dnZ7QTosJLP4VEUtiWYcLRgw9uHJ5ybk1WcE1g8zpU8a65GxZDpdX5bQUyoKhpa52Xrk1X6KvXPCAgMkknym5wB",
  "key35": "35VM3qpe615LuxLtL8oY8gpZ7JN6REHde6tCMV22zyJkoYKTCGMRvcbTiMjPWSmdfvJCKVLLhbgMDdkdL5mcKFj6",
  "key36": "J5y61Mk2xTPHVnYYMdgYqhdE2RjAegXJAg7x68KdjWpXn2WgSzso9HgpEBTYTDLpyeuJzSAy2xCpa35ZgBpMRJZ",
  "key37": "534uet2ZCjHkBYkFUTHp5np4fw48SzcGmjXHQpE2wH2RmV4Sd9BJTBUL1y9BC8R3jpgNZx1b26ZNzrnuz2uprDQa",
  "key38": "2CZk4ufAU5JMYBV2oV3ngABQDufq9XqzYzR9bfTwdvuxXDU1kSk3x7vp7xV1asiNSSfvfmZJ5DB4MrYLh1AkW6dW",
  "key39": "3EnaKQA5T2xESjBSP6PtZVoTwsirrn7bvUDqmAKdYZCfy2iC4YEsTdo7Pgzhm1hRsXBWTXKehPY7jTN9daWkAah6",
  "key40": "UyQiXK3qQnTubjb2iiERpzjxFVFTa7mEAxqCfuSRXgRqV5gq5wYaPBP7y45u8uftTwPYSryCMCsa8M2vBWBywYB",
  "key41": "u8zWZjz4DfDMNJFE7vZ4jMHV8mbD7k25qqgm8vN46FHiw74b7tiXHNfTVM1uZa2NsUQpwZNzb5EAti51Cxx9bwC",
  "key42": "2iz3o6mWTFsor18mndcSNPESWfyV83ozhYzAYogs3pXhkrCx9bme3XvmXKXrS3pBT8FChZhrJYQdBVzZP12Rvjmn"
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
