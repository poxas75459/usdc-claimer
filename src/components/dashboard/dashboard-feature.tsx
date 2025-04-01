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
    "2YWxwrNbMWeMrvrMzNiTmmedZzg6MbYZDyfe7UWVreLEzsMH4kt74x8n3NwN4JnQphNXYNdYPifneZABvn2SHWdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPLRVxb56TtGhMreLwYGQw3UR7JxshzUYMvwobpDSbcu15TY7iCPxkAKSwm99vBFQUSBG2U9z65TKTGUhLqj5Qf",
  "key1": "32GcYTDiF9n9EfiFDwjtQpV8NZ6wvVZc2KpnzwXSLiB6QQdCVQckT1amQbghjQ5qXgKX4qYB1NnWhiZY6r9wVb4m",
  "key2": "xdtybj5Cns71Y4raUYHvSyPKVmwmgxt4cdF4GEVyGW4qHyedZJgY3ewVqaex9z2sttAUTqbzBHcFxaV81f4BJkB",
  "key3": "hRF1w6SHJBfeEWAmodVJdkH582FH3KDdFoG1NVSNnK54MbwhCdXHwH8ZtTN65jFseSo82VvPGRzrtxpYmrjAVWG",
  "key4": "un714nCFNepzPwZ6NPH7qTk7tKycz3U3NowhhZqH7Vkp5iBfdc3LyJbcubpSgQFGmtwnnWH8wnCnz5TBpouhH4V",
  "key5": "9G8Xw9MrRH11DZ6ag3ySDuTpenFj3qMq3fV26je6Uy8AZcWmj3n2LrUJXaYMNyrnYnGrAXqEnyn9A88FBenJ73g",
  "key6": "2N8hzGsTpuTXA9uq5BeKipdtYMZepcre9bQyBRgFdLejmKcGNnzmwbuucsbk1FXGt1YUpKwVrBKqqYqTZPx3rKHe",
  "key7": "37TYK6G53Y3wGwrog3UnFVPQwYmRH7gxUpcj6uc4AojTybMnpj67EnuK5iymg1mKxhA6H8n4j4t5fw2csqCCbqLG",
  "key8": "5JTL3H14zaF75DEfbuP7JM3rD4eZMNLQB3RZ8P2W7eXZyctWTnMVN5pKzto2LSt73wrvY8Y2xg7KjfYFctdsFMyC",
  "key9": "4yvf1h1QRZqkVyLzADtoxFBgNm3fY6vYD6kvZX5y8p5W5FaFCRNht4PtPqMoeYioVoJPwxpuLQQZRBvZFVAdEKVN",
  "key10": "9CNvDiy1ecBiXem6YNSFJA6AgtoaZoaFVQNS4x9Pto1HQzQN559b85LEhbFSNZxWPBBqpKbzo63QJY6Q1b7Z77i",
  "key11": "4u7EV1ussPoqMu4dowwd8QZV8Q7doJBgxBBy7eTvQYqse86Z3su1bWjrArSgvUGptMXpQMi7WoNfVapwyugLsmUj",
  "key12": "2biczpBpKsVHnxFcA7tz5VmUd856RTtVh2ePVFo9ebPRYq6bDB7Xq34MnaDykY8guRDFfh5DQw1QV7tk2GMmSKaB",
  "key13": "3ZrqHmrXyv5NxdMxhJ2q8LHXuyeUdi3rqh8z33rfd4WAn8AX4ZXFEie9gnQLSXBxCmbsUieRuNgeJXZDMErWCELC",
  "key14": "3avTDjpJQ1d7zJsLg7otSQAsvZb8jvTVu2UzoW6RiEuFz4hhnFY5ZXF4jJGTmkbgiumh37T6P1tWeB4hVt58jiQ2",
  "key15": "pSnGuMMCUjVHHzvRKQiwVq7KXfnCP5enHD1DktX6NRJ3qQmmKuDvUqzEX5xUvyH7SDH4AdzMuTKJdTveKh56piq",
  "key16": "4NPqfkRVhuqKsJx4Rw26phpSwKzeQoyChX3fhQDR8K6ceC4mRYS3h2wESVvCPHFXH1AuxNyj3iD9XnznLRi8Ww9P",
  "key17": "5kPiayZc8RrCQiQtb9tfG8NctMD2d1e5JANptT2xkHjcwKXJ7C3FyZUy2iJjzrTTndWgxia4QPhTPFckTidpaCZo",
  "key18": "5XMNsDvEQMmBAsrZQFj114cuKU7i1Uy3ncapPAadaPQwXs2SCx2XJ7CePPSYP8R51dNUVr45cB65172fg8ipLHNr",
  "key19": "3U1GWS5r4kALCJpC2A3BzA5CnbLJntBUtDJvBzWW9eZtoPum7RmahkRazmSuxYBPwkjwGJvoMMvhxbdHp5yhEfp9",
  "key20": "pviEUZKuEWjWV9RthEVUMTZmfUc3o3SS1tXtVLUTEEY3uXF5qRBjgq9JNNGseLboU9CE5ksrtvJzsjezQDkTLeL",
  "key21": "5ikU7zRoR6ZzTiuYLp6FkBrcmAZt22XxXo7c8nsuqi3ARb6RyHNSLgcCrKHpvDk6wNX2CgjMQAZVV1gd7LfGNizg",
  "key22": "66Sh8yybozSjYEGbxZNXcdHMkfLrkZH4V8nEe8mdGmPEQqQEXdrDAgzk3v5HjyTPxoN7wsQJDpmvhE12eh1qup8x",
  "key23": "4pBoyn64MbuM8mFctecjyqZ6xZHLzC217coM9EpsTtUNSCdceAEho3gmpHLd4FM26Hrj3GP3N3nJ6LsxnC5FqS86",
  "key24": "3WHmizUHhPX5h2B719e33R41W3Ti7H5ew6DhDUgPA4tojdfST21JwySgVwTucsMq7APcS1WRnX1jJmhwJDCGpGpZ",
  "key25": "57nBpQ5J7xkA4C49ecDYtbWQPrrVkQwZ4hCmKqcjBWJZLznVv1FcCa8ZoG1Q1CtjtFL4BYUS9Cs1vzf4Tz5bWyiC",
  "key26": "xNK55HSFTKLD19ZKXjXUTJY37mYNAmQrqWyWVPcMghe318jzApoFnG4jjVtPwDdmzVqEhb4Hpn45HDVAfTJBBwm",
  "key27": "374TWgqrCBgGDq3zoyfjWhEwqNS6EszhcddM3A9d7W5kKYExnaE1LKs772DZzLT7XfjoF9KcaoDoSSu6UUZWjJVC",
  "key28": "5381yhpE4WYmoJFGXaMBhLA9QEnfN1LPxJtezNJNvDqwkgujAzeeW8U3RFt4pnBWfKxiVg6U5LY5JwXWmKmTPVF2",
  "key29": "4WjTSo9Rbr3yaao8HJwdnXywjEcgVWKSaathpLFSz5bnCa52fCmTPxz1hXnsum7usKsTEaL1Nc3RRNJYVtwHtA9t",
  "key30": "5uH51mYu37hkPeXhbd9u1ooK3nhhc54o2q4P6vEYUw4dgVy2PoC44E1RS5isNajrT4q3QNghUCv1whc39c4v7wLL",
  "key31": "45maBYRVCKCmE9DbSRSuh2cuYn7JGEgnHaBqxDu6oyConq3zkXirN3LnoZEtBCBzFyZ4bLoNbj1j2ivWAKcy4Jwk",
  "key32": "3SLCiYkhvzG3gy8Gzd3LRH7igusnPUiMSc9YUHEMfxnYAsgCW5MDfc8r7tzi87QCyAhuDu6gfi3iuZadGoQLvJNf",
  "key33": "eLdp769SbxDGd9NTiN6Rb5urtWim6DReg7RkkNe43kE9kxBWXG8p6yCVad8ayiapqLoMJw78sdUrB5fbZT1YXQj",
  "key34": "4PvxxvtnfrPEZUxjmUoV8Y7QjeJfL4N3Rr5RdU4TBGYCQSkpz9AT8Xy3FbeZ6EevFM9FL8Q1TH78EXttrhzCX5YF",
  "key35": "3pRAwrK3xrDADdcbrZoio9w4niMrCM3LzGqYPA55xauEqkyXVzuqLYCckhgcHUtQDsgpyCiiy8NNtVuvB2wUWj1T"
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
