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
    "4GTDv6dr4EgLb2vAHAoQBVENJpuB7WhojJ47FsKRJvAJUqhkQMd3t5EhAw8daVxWZrSaBL2QvxDNg63Q2cUJykw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ap3HgdZbwAfDEgn9dzavs4EvKmzKB7GZQTMpBRWvfADUPdwy7R4Cn9beEDssMzLYJHE7CdgcvWwKJJooY4CiG1o",
  "key1": "5SDJie8AK6NFioUGBHuma8TkJ88TzUiT16eQ9LBVjErKfsPUmc1Xic8F68EQ6xhmR5ABpEW7yXu3Xmxm1tEyQWb2",
  "key2": "KywUcbWi5qGv9BFcELrULtqCVonLrLVHAQqxacLMz72fN8Ft8HXoWsdEfQZNWMGBKL9DKKi7WriEFapnV3XoBKZ",
  "key3": "38CimpHXBUC8gDi7DNVBEW7PZ9HT5XCCic8LbBBDGKGioudDeYVo8e7Ewcdt5JRybqDcTDvjhSboJoMBjsA1D8EU",
  "key4": "2Qmbje8W5TevswhVUHtkYzV2dzDRirrS6vyRX1tMZaMdUVsKL7ykWvgVqP44v4VhhHjvmop3oRvNcqu4eWaczjJF",
  "key5": "3KfnfdJ69CksTGxxdbcpsxW5SPGzS4FiHqBqBxmFAC2tPKESvzkbw6W8QuVwEehUjZqCq65NK1qfmeunUA531gch",
  "key6": "57cxWem1BnmW8hNEVyueESgkd3m26ThNkZrnSryocCY18zSfiXdWb1NHGNdhPKTJTv4qYoohX1prJMSooX32j362",
  "key7": "2fNRva9LX9py59TTrFZVu1tH4Tu7NxQ9b42bpwXverhorfU5ifTeskuXprBKBCmeMXLPDthgP2pZH5wBi9isc8XT",
  "key8": "4kibo6tCgxTHxFPPDCS31tBkUYzpUPS47YFK5RZ16uRtGkbKpSovonZ3oQMJE4yNrmrRFjTjyHdtt2jcmciacN5q",
  "key9": "3gS8YRnSK7ECjKBZa2NEe16birMdHi2uaWNH4mntkpoJqtQz7JZrxq2TQNUN7YJytVQ7h88L5VCFUQa3rCEzHkYr",
  "key10": "4YjqYfnJuKBWi7LQ1RLLQLZG2w8wsmxv2doCx3VgpT4UUCCDtmh3r1ZXCCfd8wyVCLyYtjmb7ZE2XiCKpUUUrZwZ",
  "key11": "57fUHqiSQgwPy4MZFnB3UYJZfjN7AdQep5ds2uDCbM1RJWNY2cz2HzGFzd1mmqF4pARL92dbjhgEEV5zsMTNfCHh",
  "key12": "4mAAR7PzpUjHRpegzUnwC2jomPsyVG9d4BVRz53KS43TzBHMpkUvZmruCJTqJLSENCUmENbbYo6HTVySgzW39Z4z",
  "key13": "3wLuKv7J2X7zF2m7R9d4iDwSD7qk1Lc6egUgPD2vZEa2KTpV9LnPCCmEVzC4VgtyzKNAAqrp1oTe2eJP1NXUvf1r",
  "key14": "44TNMWdZSKwguxeqzKwBkC1wuFMKHxndDSAjd7badfz5eh3GBLsVUDsXrG1ipgPzrG756NW5uWyqDc7AWrBSZk72",
  "key15": "57GbFpZiLre6tykEHC2Un2ytvJzPsSNTJKQ2XvEPYepS9dUtUHABv5wC7CRm4LngoxJiveUTNJvLmJJS9g5voswY",
  "key16": "5m4h1xNW6hjpGw5AEiYDP75K2ST2WEoizPZB5L6fr5pZ7zy6MxmvJy1TEjhLT5SFCmLWEdqtjCDTWvEFLZTrN4HN",
  "key17": "4u3WNmc5LBwfptWRzwSz3Zdps8LGCtRDt2Dou6GgATzMQoypEDQWC4AzkbTRSCA94Vjfj5NitHUtXGyVvDbDG324",
  "key18": "5EWjPhe38rutXhz8AZ3x3dQSyuqDBSZ9N3nqwcywrN89VucNN8c6zGYiJ872gxTnPatk37wSvMYE5ssnWwfHNiQB",
  "key19": "5Lc8RxEyG51yC1GGkx74h9xcFMMHK9fxjLs4LmUsPSBbfhVjyiNvM13SKX8jZ3wEB2o9t4TDnUGbCD7cXQ3jiR2u",
  "key20": "58Wam1goqdhTTnrsLraroFimXS45d6yCfrMsXmUwgmuRwe1eJnhdHrtPffT6PzvGEMaaFv6dMARbbxab8kgdUsbc",
  "key21": "3hJaYBRiyen9f9yDGuDKkmrNJBc2RawgSaA8DNvuq9pNYYbn2mVU5gGgC65FjUyVjVXRPGYyJjga2dBGGMNxm9GZ",
  "key22": "2UVg66oNyX3HpyDdYxZZVgDJhxcEzDi2x1NqELu91THJPJuMtdt9MNi1ft7FVUfvZKG3bnPaQqMkXuZjN5DfE28o",
  "key23": "3o471kS5BVeKfZ7dPByuXveyWowMNmCN4zo9mEzVuyFcY9ukVVz2MU5SLqRbqkbrErwEPDJVuU8escitPoK9YLR7",
  "key24": "52MLYCyTUXkzMpk5eoJjHHVJ7xsuUtF3ZQZyBF15p4onMAS9jcnywY8HBdzZCtiYUbDS4FN2NDHYL13u6kfmtAun",
  "key25": "571TZhGafXMDwrVvQ76QCcDktL2ajXvKPgw7jiqJWDGSW57u6L5oEkprScYTC6cvfCndS3DQmHXFZa7n4pLHjp41",
  "key26": "43pL1Qtoard58wuyPSHTVWDUZPkUcJsmMKNZTmYQuLP2KPxtcPNPeKhSE36sevq8co3XZaDjVRZ6LpfXNJAm3kMz",
  "key27": "25TMENKqNWCeMBDPzbZJC3nJ3sWceoDYQkmj56U4ECkeEZt9EQtt7jDXSyj8Ct5iFv39YPtCbT3AuyaFiKBFgVvf",
  "key28": "2bGQYqvooSH6WDWdEvphbL5SwojZJLqGXPxbNfYVEdQZFsAT9DnQyGiWZFf9m9za6LgTvuqge18vn2Lo54aLaRT5",
  "key29": "5qGkbDKXqn4F5npP6NgJYk6HKaYPd4QND6aoAqZYVsvSzcfgrFne8cbK8ehHNJX6ci2iXZ4igm7TfqBZP1LTYxRc",
  "key30": "5EPYpHKtw9PDpTEs6Adj7fxM1ZQjXAmYLD7WK3dcVL2ybxE5BBegeUQKr5qrsd61SkZYpvvX1RQh9yaMaMSsc17x",
  "key31": "8uCYB7GG4eWoAUBmNL1izVi3esEBv3zHQp9BUKggGugDEN2kGjUD4SkXirkvMrCWz7WDNEKkNRcZqAKQu9rQHEV",
  "key32": "59XARxwFT3gqjknuN1JF9QW2vcQnLq46Q8Lgmxv3waaYFUaWRVaiapjcCrzT1QGku8Pct9tqU7D31R4xUbNYdAuD",
  "key33": "2hRcgWnRAqsgFi2S8wkZnBmthE5GjaC7xr9wHbXMYy1kbUn2wD9EnnSQ4scKXbJitsEUR3vTWAHuBzxmZ5mqRgcu",
  "key34": "3Ubxo4dSP1oAdSdbNX2eUhZMz9vCHr3Z4u4FKv7HVdJoYUyBMHueKEzUqskuUYqVdRoGwv2qUox23ja45i2Adjw5",
  "key35": "isMNxy3823YcErvYGaXMyEogxGQXNb6JZq82X8LoyfKAeDqWLi63ny6r1XMnPEqF53LbzCKUzPDgDtqr9HShNZp",
  "key36": "5nZFVK3N9CMQHuvMJzFtzvSn86XVPvKf1EBZjA8Uxwx36yqQpneQKGvCuWcxDT1NyVQgYk3bZaCTXxwyzCzWhkeG",
  "key37": "2kAFtMvju5yDFh54uNBVez4qheSSGWQ89cLvmsyBuVdeAx3kwrzpY1HEjbHT6mSrgmvMFQFGkTAccEXaxF7e6LMf",
  "key38": "4zsWwa9phgyfNyUUZ4SKZja5pS4yR6aphM2YctTTsSbnjGrterwwsRW5aLqNKxfuVPn35XsDxQXvUdBpvggYZnJx",
  "key39": "5V3EUZKJwxAsKF6SC9v9dkwafe45qLWJ8bqHpVxdZz3RKBGs2Z1vNYppMweDDCuwzdEbQ3VhZ1AdUnoLvcb1SEK3",
  "key40": "72B1cHZidcMAqU3j2s6NnixkhK9gpcBSR8XRzvC2q4Vw9qkSF9UKxwHb9JGKpVjckCQHu9b61x3CzZBF2tLG497"
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
