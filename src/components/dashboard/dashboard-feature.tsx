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
    "5mWHjbbe9kuS8HLy3zpzhBC7CTG1UcTnaM8T4qVRuReLJAPTuRqySpEYa9pwiFPyV233gvfZ2anNh6bqSjVaEfHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qWXPjVyKGEc2gPHo2W8YxeFYsi5qbdQ2j9u9TvMbzHMTBgtPkQbTLSNXow352q3iCShS7CBubJuV1DZCJHxKY6F",
  "key1": "5ykSpkoNPhKnBCYD4d33qifHZfJGLio8NtAe1oXXi1khdoLKYVZLjCLdzjh7A3eq1MiabtocphFqPePmWeLEEScZ",
  "key2": "2ZvEa8PQfeQ66rNphoQtzAU8ZDHqtUNbRoFAty8hk45h4hxyrVLuPfjgLCPSsnUGDvaEqYtPovqigXtm5eQRWZyf",
  "key3": "4vrxozxJrfcEoqzfck8kov4D3thWRLPxq4yfnQ9n5QAPgLHaKkXZs175Jjziztice92E9ABohfwVnkhCw2tARrrV",
  "key4": "64pRMvXpG3dwiY2dKawRjRKVb8x7E2556zM9zNSfq5oXiGQHrd8CXH6quG2z3G8itDcdt9XffZaZnp7RnpswuR9Q",
  "key5": "5DZnYFaB4q7E1ny1zU4e212wcdJBvGXCUF4pQJyD3qTXBL5rfyQTq433URgqn4AGg3bsuKnuVJGNysuiF8bCQTZ",
  "key6": "43gVmAKD7qLGLYS34d5TaywiuH3iK5ocf7pFFQcN7DgK2Ki92AAbuwySqtC8By3P3NR4oCGfHZ4eTTCbvVkoEabm",
  "key7": "4PxzHhAZTSNuQsng25fjuDSM5MVF3vwrE5KUjMzWrbGTGqhXYyUZiQsmwKvQ2Av3Z4m93tZnU7KYvrobS1bJ8PNx",
  "key8": "27KR4qk9XHMfcRVtnWAEvaGofjXEVHnuSHijGgT7FLEeZ86VNy52hszmZkAmUHtRU2DBSTFyWCDR7wfA6XNNXLuv",
  "key9": "4PGpbWdCCnCbupXerYkVrJ3ExmC6NGooLMSZQkmzgRBSuLWAyNMSkGx7sbnf4QwffmsBAYSPKcm91SdmcdgxDAct",
  "key10": "2JW1Stg3gpWfoTb1AbPZpYfPgu1T4mud2PHojEdXCy3QGZXzQgtbDQ6SVRT1JaeFZ1UneAU5mKivZz7NtjrzeCDa",
  "key11": "2vVFvzzTfV2mApXjhHb7j1fSUoLbuhDiLoEBMnH4GwrgbPRceNcGNuVC7wvsupKgBdJ7UHHJvz8kjDGEFMwT2Eik",
  "key12": "4hitCjSLroiST1vANrf4xfSuZyRhEpy6YjvTwMiHwmbYL3mZQdYEbnhArZ5VNGVj7n19gXyotajCuNS2FLv48BfQ",
  "key13": "2bq21r3MxD8Zmg3QYb8mRQE7H3x91zBzfqrWZgX4BZk1pNST7F8XPgGQ1FAjivzeXJjJ9sL5ZP7hM51gu7ft79Sv",
  "key14": "3g2Uy7wZUep6YR9o2omMC9nDWheLgd9GiHN2VozD5qheDVkYYdHQKawr33NaZ3vPQgzabFVjQHkc1b1wBG3QAsqE",
  "key15": "4sgYu6MneqtCoSu1B6SzNbazPhTwTAxfEGcCNmG7PbWzdVxf4okYXkk8vbYwEvajqMMSVdjmyJGqha7TaHyaaAh",
  "key16": "2QGBsCoVoxgCFxP1TgwTSfcV9ir1Yw9CD81wgmD8r4BkB2PYWeVD3Kq8kCDouHHJSgA3wFTYM6UpbouMhqtG8Drz",
  "key17": "5KPBrmrGGVGRn1xTv7j6Z8aE9B9uM7JrHhUnybqQBs86YT9pDXUuSKHCyCrXWRuQfjj5UWehqnRHJeU2fFH7zrux",
  "key18": "5Z3bQvRoTbwbGTG19TxFK3HR5nf1ksHhRK4rXXrH5YWc24he5ycFhgkBYSBTEvuvVeFnJ51mzVLifNyBvphFVCFq",
  "key19": "29cYpofcaEJvppo8RzRhxVYyBha9cSVtppdDaFzKzYXWGXCvSGFDN5o2xwWy6cUHcaJyPctKZygWhdAr2EkxgutX",
  "key20": "519FHV1AGLWSKMMQsBW6JXdZfP2h6gX5McXkMkNrfe96ZRWEa54WcTum9n8AFS7qBwNhqf6KzJyJs3LeEGQBF9Jt",
  "key21": "3pH9SFJDTb33j5bQ612EFvjSr1vWg2eXTzud4qSqFsmLp6mDkRKK3FdEKLWJjm8tRMjXnHjWU6nfTXJMVYpWXg1z",
  "key22": "2c1ALu3sLhhyfSA26JfbsoSiLyNATYJkX1fmxex9zAtToEayUyybutkW4RmS8vuU4zr2PLy1yMYSdGLPx2QvLrww",
  "key23": "54M3FvdEQe3BuJ8YMJuhTHRyHXZSgWxuU2p26YdouEMqE36HZafr8KbyN8urG2nDYTDP8YtwiC6AGRaApQkmFFDq",
  "key24": "4YFvayVZm2GEAixCKvKSbJC388choGGNdkgBpEm7H8T8XnSAjTEQF7oWfRRGwtJY2m5R42VjqMSZAkTXgHK93LzR",
  "key25": "3cVqjhXFcH24DjPDPdB3ZZpSPThwPQTtuEjonAGphjqG1XUEf8PDML5XH4Xymj7L4iAEJr5TJUbvj4pk1tw9vH7J",
  "key26": "3kHGVfXPkyWBZUsQ6EwBNmWQaEUAWrPJkgr1gUWsNRMNw5rtSyw4p7RUTe1y1FiC6tYfrr9xqa5DjpS2yWkcnVEg",
  "key27": "3tkCygsZMzediHK7aEjmGevAD7WiMzgdowrmiTHJ7co9GritRsNz419kFs2Yj6VbPUaS4gb3hEaZN8gw2qtBc1oq",
  "key28": "4WBU8QphqpKf3edZ7NDfRdnxYG6aoQ5Jb497N5jL84GXXYVs9k3m7tijwYvmjafJmBtyX73JcvzWoWKoLzdkUsFS",
  "key29": "p3TiuujHnv3msKxa6pwg7ed9htQrnQXo7r4choP3dcLVdScLMuvgjvvkqxQLh8mphgbQAkzGuvDBqeAVmriNcCf",
  "key30": "5FKEdfDxcVVmdCK7EYxWcL8X5hJe49us7r2by2EwqTnYb7PsV6HU2QKbkh3TroXbTLZpP6YAV9GARA6ebA5SNFFm",
  "key31": "2jsjHmeeFQTsAmT9X8K9gh1wgYFWmBn6KWsKEjU7Xe5G3MDwveoj87nALorNi7rVMC9k5xP1xmniq7iPTdgy4kMe"
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
