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
    "26LAufJk5oJzwhFEpnqGw2P1bsdnmCeDWNWussp3VVrjhnNmJNxDsKAivYbJjpwferp2TLSdpAXdEDpLpp8a8EnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ErB5cKVuu5mKCERuSSdWbgMoiECXQKk1xTLgbPoWzCwqBCFf2usYurMZBDh6mMRwdzymTusQzzbJKTBEznQu7Bu",
  "key1": "2xBQHGicxZjUKeZsEUhWYoCaBhHzAu9Ur7sx2aNK5xPZryovAbnvtZE5u7KJ2UthzsqViQmnorKdcqvXiGxPyban",
  "key2": "4RNrTDQ1gmxpUUBqoCjDBpMu6DhKyrcSHU9Sf7G5pU5XnrZJsnsbLq7tUFkvSANyx9vfJeD7im4ZwkDmC1rwB8ck",
  "key3": "3xgCHBzMUeX7Bmhs2TcpFgVNtKyxDU6iFnZawv6dRkp7Dg1PTTF6rqiEUVYCRp7em2MuEtA19D3CHkWzFvP9AHka",
  "key4": "58MVU64eMANY4uKfvWkv6CKjRkxkWX8bwMcR7M91bYwZiCHi1gfqtXeiekeTTTeriQG2rJ9zcBcLkew9EW2MTfgk",
  "key5": "RuQhRzDXsCTwRtzYEAcevttFNAC1kAv8JGkN6mrCUkbWnHbApiEBohMfyL7XYFLLFMkmEoD8ov8emUUEYwFQYKj",
  "key6": "3Kmn4B4ngFizHYJAbSvGqiCqoR6aXuWgsgHVQnMQTbH5qM4LTWnAty2F8ShYoJvzfcUzoxz7hPYgCmpoyJcSkBBY",
  "key7": "5bUyfDUJcFLPf6kgQ86sAfmCSdFnsinYs7FcSkrYRJVPtLsUbMiaU4Bh4r6PyrY6SLp1H6EB6pDRjkjTcxfw5q4R",
  "key8": "65Esrow7JKScodwFB7s4ZP4SzWsErQM3D1SWusfpeuzTAXwAXST7Kg4vXfjsdhzyc1LWSyqQXXVuvEXJuGPZvAUM",
  "key9": "5M1mvccTtNtSabWCcv9QizhsEhQNd3raf3bWZi1Qb5NMTE7wx38XtqKTbNHREh4CXMBq3oTEJrYHEtz9iErCGYSh",
  "key10": "2TkBA2beShgSrsGAroezyrFqnPYtAR2MGcvAobNYnfuQdywxof8zWh28SCdbVCZyGwRjjkn4mM9yqPBMnCnX1z8m",
  "key11": "4wPQds8R7XTGXqfinEUPukG6WYi9SrCt7DnnWNfN9t4Bz1igAAWvEuQNyv7np4WXC7FhhHYd1a4S53D8w9mf3HDB",
  "key12": "1266gVbVZTsc1wrFYiUAMd9B33fZJtUumU4SbshUDJBngHhiYZeUXJtC3RURdcuKwX4uodktpRKk5FyPpeZ9nusk",
  "key13": "2a8UgyXbX8msY41ps2YH3TspNWpaAmrxReuueDiZf2MVv52erKLq7NqVcsdzz6oUvwCbftASSQubYmhyTHYeNnKf",
  "key14": "4wz3XvUDnq3xjXfgF7kvNA6YzPueaY8oUrDLruXHUuv85PeLVHG7D2WGrw4LBdcgj8L7qk2e7rkSLde4n2K7U6Ho",
  "key15": "3h6hjwc9oecqAzcyNYSjZzyZmJLUH6RCSdq4YghAES5QrJXcq1tPnuJoM8U9DhBbBaQBvQqpnr5f3SFrBS7FqH7T",
  "key16": "4KhqabyMzkmkHTSyvxoqsFQ5Kh7odwnvt9y94VfWezFs1b7eJz1ryob2JB3Vh9d6oUnwWEJXaHhP8bibQSz4qMys",
  "key17": "2nJ1FG3uEAEn8gYBwsENng8gW8xupbN8ZKApJ4MK2U1Ysnz3bXwKqP18F1e3wsUvwV82rssK2YFPLbmpPjkyuuTs",
  "key18": "2DAMmjX5Um1AUCeW4yqFireyz6erzpkxPxvuS4tDWBjwwb29WBYwMRBtMKJUgTk8aYtDrWyCxiCV7BDksNrK3wUg",
  "key19": "4QK5sGAYfS77MPXSyvwH6BLW3gZpRk1yTvYA7pXht3MQDqWkaxVZaQFfEuoGEPM33eSJhHHUPvqrE8nNWYiQ19y7",
  "key20": "46nbbygZQ2Lx37EozaEhRJFwKvNXD5zpAhRq6C8MMAefLt5XLTQkAVyJFLpUyMZSrzsoTtCF5pHMMwohgVooAX7s",
  "key21": "2SCCaCjY1vfFRJ8TdBBBxbxzjitSUjVrQ7m4cGQLroBJCTGHsyDrPpcwuyoyxWKK7Je4Eco1aMfJdx1Rg3Q16Xo5",
  "key22": "46XTThbyjXjw2vrTakLnLDyNXeUwYvRzhJ9HcNH6uCdA3ESYZHuVmMDcEf5VVZf4YoA6xbXAhiH8yWUCUCsPoNp",
  "key23": "U28WpbbRZXry1XPBjtUF45pBkcDLPC2PJSkEmAks47hh6BC1RTyty85TuFzesUSHwMgXJAmD7agvJmZHcNkvTsc",
  "key24": "42UkaXZjszN37jdBETeJXtACreEuRDi1TuxrvxwC52nDs12K84xaNuQQQouWpajRjmG1mK9U7LinutEbkrvR3TEq",
  "key25": "3frWbKxJcJdF9f2dSzuREeqZwcpSqNgGrAv76tVWGhX6zuNggQYVodX42dCjDRZNeiaCtqQdEbgujFiH8QqhAGQk",
  "key26": "3tonVTdYsnuMzoK8aVXACDSfFpqsATQaCWw9bveZjpJ1roeCSbphmoYVocSJQxDKEKYzWcbWt5aLzTY87oVVak5h",
  "key27": "NCjhALsjfxXDTRes5AqUJGqQGtafVgwTb2KHWtExBxt6dBuhFhWhtLiZkDrgfwMMQSrTFrEzqq8gMM29u9W1XyT",
  "key28": "GHeBa6jxSD4FHuMUnXZVjKsY5zdLgRK3Zz9xmJZZvEAdDWRW9apwCDh2YYj4p16mJxVgjZy28B7FXPY4qkdrxeN",
  "key29": "2N2i3fJ4PVVGMx7rsUQqrZWAtWsrxPy5Xp3itS39TjghLWxZUpC6oSQNQgCiwbhdBrSgEKAHprbhM7fsTP9b97C5",
  "key30": "4K6WwwnnvUA8AQywVr3sufpFNsXjcoaAEGuYsnq4HFnJ7z6fKk62nH1pfqcfYXmYGvztxEkstUz5EYHE3CQPKV9E",
  "key31": "38L4iTuRFLEVAYrfKn5LnqsbV3a9bLKgYiSHvM8e3pKM9AaRkWpCqz6T9acVHsmXZoYW5pqEGpGMjg9YFRoUpcab",
  "key32": "LuusHg19teCcco2wA1TJVBBdw3BooU58VV7g1HAmUw9kmrSk2Sjz2z9AGv4VwDhyQ17bqoVZ8k1sf26qhba3vsE",
  "key33": "5ieZ1ii52Zp3MNsae8imqWa1bn7UDMWxZe58B26vuzZ6mtgpj5bNy5V4sXi6uewfA4114KXK5D1ZcNtQp9YRKB2D",
  "key34": "2NkQ1RCGQRUqZwfyannKtzEgHCMTWHmJzVfhMxERMGB1Wje97iyoiMqzRpSfF6E9NuXL7o6DKQpTjrZKSa3jizMP",
  "key35": "5NdofjFpmY5DuyPALp5SkhjGPVK1qUCeuK4JpvEoNtSscuszBC9Ppt4gPLCTpCkr1c5mUog89d1gP3Ya3sWHFrib"
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
