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
    "3xvWRwL3s58fs25dBdNvttqwqdHnnRa9upFBWAvndx5NfcpRqGiQp3gnNX8VVdMmAmrSr9YuDVgtPy5FwGR82nyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43XAtew8FpFkafrnnrhSQBCtKeDryTshdDLNdzzvyQtKDZV1PUpM64yyccxJVuhETKbNMum9Sbsgy2vEdA6YQ59s",
  "key1": "24KbPWEVV7qc6jozFQyNEkFhx84WahDA5YikeLrmAEen1g6gsDotD6xwfE5zxBqNjwS1V8YMZ25yEtFMdcxsxt2X",
  "key2": "4CTZEf5yrnKbmcjVNmrXv4dEaEELTY76TCCmTjHy7FSTdrr4HiPTpPqAv7sqe229co5wAQ8jRWRBDRrwT3JHKqSy",
  "key3": "59XfouzMNHidmoYKLmsCbgfdQXQTq8uajeBzUHDNeqwtUzpTDQxaQFmFENENKmD17QzP3SXE1yJJE6wphVJsjkSk",
  "key4": "3ZGWAjp6VmLLe4qKFE6qMn6DUo5kTi6gZb5YdvzyDwsGBbgyPAAMizPHFT38hDXQHN8QzQhJX6Md9Jk49XdpyXdj",
  "key5": "26wfU11Lna2dEtkwssHdmQx5sv7D4KMTJxV6GQ3LFxQFLB63Pu3cgH4NEtU9mfkCdAomeXRdQ1xDaXnxWhwBU6mZ",
  "key6": "45ziUaaVYUEqzn3i7LRHbkUWauTJQtKZKeTsqnw1Xdk6UEEdiDafdtYTmjMtbVTWCkkxjyB39f2CLSY4msV775LE",
  "key7": "5gAQNzFPU99CnrUaX1pLXdEEGSMAMZvxZQY1uUZYti2F27eVYqoFEBvoC4DP8vGhNXkbpcU3r8cbjcmqeJEHuR5Q",
  "key8": "5wpDHNqvDvqfFJWuj1v3eGgP7qEeik9WwSbXDfD4VFD9py5BQ4tFb1E1s4A2c6n9ps1gP6B5a6e5bESB19w9rYqf",
  "key9": "5orWribGRWnLFB8AMGgo1CHhHQSJPWnQ7bzf5fNCVSie6TJDfWYdRDHrcFrFXPKejpi5tZFPE3xfWrpQndFS1jTH",
  "key10": "24262K5qgAU26v4xgrdTVAuzxSxykVy79bYu4Ux6vCw8uNeBxDbDDh4AnLpBqkwEX84LuUeC1tbMS9cGJ3dwB2mG",
  "key11": "chxEj1D7XoWgT6vy7hdLsdb1sw9M6QUB18RAfe1YjZjZ97yexmFqowmUE6eNiXpWrFoQi1oJ4BaAeSR2veq2PVh",
  "key12": "5jvVe7Gqh4HwFDcBf7MrLuX3QYWDyCzPWMeCYu2D6aBknyQgutztFBoBsng1bZnvuH4S6iEni9zmCdBWAL2iuQD8",
  "key13": "5pGqoKckLvFk5Ec4zQxhsKGPWP9nFY2BfbBAbkS33ox6XJ9cA1iCxVB6HkJcjDa6uccdWVHejc4JPDQzDLJtPYdY",
  "key14": "5hCZUFnevTAsFqjy6T873NJrXqE3boNr6weEvD56XuneL9w9YfmTQdeFBSHx4sJQ1iyYLbGvBqP5oj7qFnxj8NkC",
  "key15": "26Rj1bm1gi7moKq1KYgsaGNu1Gqnnm7dpHzMKnmddEy2hQaaRg5swnwXn9x4s16Qk2R4DXS3CgKSD2hn2uofRER8",
  "key16": "3aip3NPrGRkBzA3o4UWE1MTZFcxka4BsAGjbP2Sjzq83M5V2SvRd1CAsfD9KVHxHbRazuNwhBtgQrok84Xt5qKQq",
  "key17": "oR8ZrWsyDg3c7pv6CpmTgXrKdDW1ju8Wi4f33EGHpcawfX5a1fGQ1XR6BvHEap8QBGsgXkN7xh5w5jgQfVQru9H",
  "key18": "3EEYr47o9C14i7QAs7rcvida1eR8BXdvqPkofKzkidYnETHe2BQYrH9YgXKkxM2fnEKSSrxx1LH8SYHcBRusAYb9",
  "key19": "48rFxgwxs6AHwbazQ8pe42BRfPHLzkb3D1nKcnP6UXGrSp3VPDQntNv1ZpQMvuopjpEfqBLzehVexpd7MsJYGsX5",
  "key20": "3uqkoJesDGrC1UQkPNzeuLbwffuThve6R5LRMQuP3fQNhAecGT1thGDxJjqBsgobUd5oczdgsx5zgwxX5bAv3Wsi",
  "key21": "5Gr1LhgnmL3Ddt7R6CRVU6poU52viLkLdWXMfjbzX8keZ3ijpP1p5WRGZXPguzpxENm49AEzG381N4tQ3KdSqJFt",
  "key22": "2Ci4UzyU6mprNj3ZGzxgVkaHAPDRxLVVZQKB1QTRkNWARUuccF9P112XcmW4X8DUb1Cj5p83i5uWhbAB5a9XewmQ",
  "key23": "kKGeoxqvXAkNyuH7tAT6NctxC1NKkDL6nsEF1yaA16aTvVZzvgf1E1wPtbUTM31Zm18ynBja8iKJx1aPgYJnuKz",
  "key24": "4HArqQuFygH4tMiUhZfjKyTuZcYL4d15xJkuYqBpuS12inLUSx6kLQvc5jk118DSxZx3rZLEqtAEGLP5oUQbKgco",
  "key25": "4j2N5ubzZENyBJd24B8peLKzgjkx6KutMb3rAWNNpdFvRmrtkF8V7G6VqX1q5aghY3dDjVSG1GVc2EgNbKkU13Xu",
  "key26": "37SfJR1zVLzT9Cx8iVbfpQgwV3BAxCDzuiKJb1mWmBHusPyPnjYFT39Nj61FWPrtbFWwZdL3d8bome9b4RZbYBT9",
  "key27": "4viLn1B4kZ7knPetrshzUCg7kFykJNPqzo2958RQbJgkS3aLnLsVNr3Xd7QtsfXjTBQeFJ7bWV4b2Bi9Dd75V2hv",
  "key28": "28UQqE4LzkTWmNL7nwJaC5zqhf68Vt2Tp8tS4LPgA6XXzppCs1PhxCtXh6JR31hst4VPQ4stNueSX6d5iZL5wws1",
  "key29": "D6z2TpZzBjTJ5ogbQuy7rpzxYuddbXAucYn5BSbFF7afdZ6hBMjA9skg9uQUUTWofZNREkyTWdjrZ8Q59hKuyEY",
  "key30": "JSLgf2RhtMVHQkKtTjMhpd7cu4TnpxaoNwN6gLruczjyTRY1BjDADoY9y1deStoiUDgde7wfyoLKADLcAZzgLGz",
  "key31": "utQiEhjyeHd6AXgK56aHpzLi6FaqGL74qfPSbcqtEdWU9UXTR7jFkePFoZDbpKRq9aKx7tPSptLRbo9ZQigpUcW",
  "key32": "3gqSncwoch46TJgwAAPoimz6S9rdkRjAAKRNHAW1jcbiBGzYBzHu6qNFQJgTcZnkWzdQCqyD3GhWAj1Rbedf8qzN",
  "key33": "bGXfBV7cmpkyYPsMepb5TB6UzdSyVehQe4dxG8GkVQND11fgc5nZmoyE1BzbfGzULJ5FTVxt4tXtqxXXu8fAm4c",
  "key34": "3VPnoK5eZxZjPHQDGpEYHVWndhTNBf82NgvNQ6kR6XB3iur3uHCZKeUGnGSgGtGLU5n5kMcxzb8muKzkpLV6GSJn",
  "key35": "R78MQngj8MJD7dus7QWBvneb7aLXrf1CgbZGsK1eCD2GQaRTVFRSsKtiW4QLAFSZKRT1q49XnBeqCZpwNBAWYXC",
  "key36": "4P8zoeWEntRGRx98sLU9iWYDwmcusnP25iQE3Yf9Hp2WcJj8PRSSVys1EjPYQUSd1qhhQLE6VxeiD2amN1sh82TE",
  "key37": "2VANSZC5owKhpyGHQETx3sBhjn8HCz6abZkTVMnuf3ttQgJNMpbPntf8B8zJvPRobcwFNpytDMbitfR7W3xsE1dr"
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
