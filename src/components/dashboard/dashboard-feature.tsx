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
    "KEHyggwb11qRBb84PEXtVGrgowT8zK7JvHc8JSpRsdb8YqE3T66LgqdXe2iC856z36XMJq3C5qCFXyTdCDhZteV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CigLDJDYxJjH53gsbfVNeB6UvsFgqg9vorGZVQ3wnGj9E1mzFJd5y8uAaZJwm9AXeafL7XcJQyjsFaGK82WFbCT",
  "key1": "5GAsuHMB3A2bKda7rDm9sF9zyH8Kc7zeYTSVSjnj63a2VPuj8tcMryBDehZN3TUW4NnDENbGPYxfoJm5PS6voeDg",
  "key2": "251W6aYAnmeTjfJVEdKVr9335rY7jPJqf6drzmydrBrLAyLqhuqw5udsrEKfjUCRb4TbNvwnB3ZuANsV2eTTT2gJ",
  "key3": "5nEquvmguTtQKsbbo1M1Q2n7tuhNEDhxZc6rz4gnz48fx4UkoUtkdnLpeyJkAGPGa7PV16UeKYVZ6coStQgdvumB",
  "key4": "3s496vLe7mY7BJ6zafKPab1yGtVCAEhxFb8Btcfr9apdMopErnMxxoUzckddXj9EfNp4ig7fVXfKLGvVewEpZZgC",
  "key5": "5TV87SZM7cKdVBUpXL9R5rnqAuLMPxeRjT8oDkDUY4ihn33rx1NpDG8jeUsbd84vgH76ZSeg7moJyrwv5czATYPR",
  "key6": "3RWYNDgrA7hFfreHmQWTsxakZ7YCPwF3SACNEu2QWUwXAhmhYuVsbQv3YnhokF32727ByfiPvp5mtyWT5j56GU54",
  "key7": "ZbzgUcSTJQMxcBhyD1RA16zugm8kGULwvi5VrvTFtT2H5NTeViZbfcaabXqiGpwybQpwetcnRinxDhuiqt26Kvt",
  "key8": "22kZoexMgQE5yRfYSseiGWs4AgudXYS4fy6iDk7mXSn7kBLMpfLeG5SZirZBgaXqPzR4sQ3HNFbhLZVsVDPju4ku",
  "key9": "7oSf6piYQhuF1nM3VYiBnWDcnUNv3dWgmStjX24tjSK6c3UWwydzLmpexvDoXLTQWzZppWj9K9psK24Fv5vF57x",
  "key10": "2gkvz6bDdhiveqHdoUSmvSLaceEoQxBCbhQeYEfb1UYNguav8nr6TPTRUGyN7aqfWL5wrsDw34xUHxTLPsprmjsZ",
  "key11": "Hhx9aKXomuczCNFtLtkV98ooYqCokcT4RcK4RuQWtzaY5JKFRKLunpU4XMpmrAvh7wBUgxKHUe3RGP5tZVsdiSi",
  "key12": "3HttfGoFCL9JJR8kYM4hKWt9FRhGKBsAS788pJGmDQNkNNPv7UUQwg27WmG8MACdMZoiLUr6ednBKLRSQ8hmdhz5",
  "key13": "QHeSXod2Kn8qWFS3osoGvt5bhxJzB5n5ieXUQJY3AqW3k1D17YmYpHLuahLcRXMwAhUct914HKMDYMoLKfaQeUL",
  "key14": "3BMKN8cFzp2AjwYcWyaxbCiANaR3eCNTSVzquErbxKv954Fpz2jyN9Qb3MG7fiH7D749YTc2ftuz2ymD5ivbCgDK",
  "key15": "KuJ2KYbx9wbyMzyjnZ5uev35aXFvSD9Cn7oDLMrHjy3ftcMAQt4NGb5F3A5Ro4hdnDgQBPDqBhwqjAV8cy7j9ip",
  "key16": "2gPZpnKfpzxLozCoKTFjUf5MQAkGPgRSSPo6hXD2bYtgyjZohecufKvKcTqmhNaqBJoqicvRXkqmFNmK6C7spRgs",
  "key17": "3Go639Qy81kM9ePDmH71uUQHW6b4mg2btG7EWg1faMHjRwYH64c5JyHsg7MbMr5GLDuqN2aSEDcB95fbcN7Xsxhn",
  "key18": "3LXWbfUxHeBsAH7Kb3DoHyce9MTPMTi6coxw3aK7YZgVvZDPb1KPyiSN9RozSxzgkJBdf6hDFA3wgnE6819KuL2M",
  "key19": "4GU29QBtQpTFHiJNRorF9r1FgBL91WPpjn1SaTaKHmJmKdRxY3dqBxJYtpfaxnSmKd3uUTueqjqm8co73uR7ddF3",
  "key20": "5GLYHEYom2zitjkLjSiNf8mSmACAYeTzL2AUkiRAHVz8oqtB3NkW2JrTSmZnmdgxjjossuV1Pqc1VX8pZdC9YMeo",
  "key21": "41JtwfHzBdyKkzyLde5jSYU2szBEHsWEZcWwwcrVK6GzZWD3oamk6LkjpmC89mFr9pKYjzqKnbmetWfYCubEYNFK",
  "key22": "5KCKaPjaAeWLeAvcUtmrRUpJsby8WvSumLdSLNNLaF67Mc37vWMhPgF8u1GzvwrhYMVFrVyKcK9TManQPmjNXm55",
  "key23": "5UvLPDRbxEq7db4FZGrrAkwJRJCYiYU6CJcMCJmgXMia5Vh17sX5N3YYsd2yPPZBca6zd7njDQq8bBuqdWBPHZPt",
  "key24": "4kniQ7Y3iSbckeLf8gkqpeSkYU1LhLRadihDXgtgjx89LuUxXGiYcM3qcRKQxSDZLBx9cViu2TCMqaJiQfd6YRk3",
  "key25": "358rzcXdoCGJ5311q1aX5Novn7T4aJHd431FWGqWDSSNXVAuVVwt8ZtpNoNYreQA31WDZGKb3ysidm1PaF5iQr3H",
  "key26": "jaUJdUXc1cFxbjU1GwA1KsbgAGgvi6yBfcajF7m51bnFYidaZQsToHPvj7FukAm2AjsRYTUTf9adGqa4JSnJJaN",
  "key27": "2End19efGMmC7oPu5rY1SxW99ECs3XikEZetBG6ihgs6qJqN9M6sEgpnLAZALEcTPY353ct1xZZzZyAEdKGbomUW",
  "key28": "2jSz6pEmXV5qwQsaPdMRtuCZV8Jv9Ld2hPH4qcmH1Z6TuAxJciKGDwwJcwdxsV3tVYB4pgZbnLo4zFXTxFUC6pye",
  "key29": "67SzPYg6XHJwpxNZVETXEkmREErKs6cjkr17zerFuwMH7bN1cUEGUFZmLfAusrPzWMfStyHLMZPRNW1CQ4GmKgr2",
  "key30": "4cYHtum7BvaXerhVnM9xi5LoUJP2bu9DmywhWBW2RWA3LbNcFMFA1Q7XTNndjQ8qnsrAFn5iZf5ZXPRtLMEzKgKH",
  "key31": "2T92hUNmF4RK9zc1oSjd4ZhvGU3ih7PaJVFVRHHLgvFfaNRJWjDAAwpzH1iWHh4GnaTsTxwV5J1LgzJj5pg552AU",
  "key32": "4eHb3KTqPYDan4ufurSE2hqrKxd6CzbyUp8s1a2xmwb8cpu8umQCzQ17gmopK1QRxTNPuCaGrFsWZbCp5MwxrGqw",
  "key33": "4hjaWZCFdZegj7dmq3sixrrzqBvrvpu63xk1CtuEZQANMP3Q7SnXTPDuEEwithBfR2TqCMVVLZi5MA59zXuW6Jbc",
  "key34": "5otjbL8vGDFvUdS12qxZH7GVCTswbgw5aUTwvowmJuzArNXAfHvRuUgGMBLE1wEYtoTFfiEA68KZZybGRTNf1tsa",
  "key35": "2Po4ZwRbUdvEmYcrNA4FG2Rz8GYaC2wz7gPocgp5uBrRqdSNcif2cLXLSX1EYvx7DCya72NBGwWwQCeRSCbKHN9E",
  "key36": "2W1exG3rbf1H1ZkQuSrwRpAz3NHaL1U1bwoXarjv2N57k7YiucE2EYpQ5ffzgD5e3qtibdwzJr9zV4t4X87rSj4o",
  "key37": "59zgJLdghKm6vyVWMCJ1b5ov3Nu8NrCPn41Ey8wBcwJUkZy75tPC8353TJWbdTTGAckYkj8PcyVjV1m6KysuYxEJ",
  "key38": "2TRLZxRqdsLEzcJ5XkCbA8QQEiBj5LqXLJHGLjFVsq7UeWoSAtcAeio9P8VLALQcs2YX5vwUsWtPQ9wofb3Ds4jJ"
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
