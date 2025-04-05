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
    "4VaEaRCBteLsnpfSQbDYgruwP9bujVzFpsuhwVnnGZkodTRFJsdoDEGuPaXd9R4CRZNypYCWDNri63GAdQUyamuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NhD896y88PYQfLQnus4nWEREtPhFEx7MMHsNL6x6fuXf9GTHXcyAXYr9LtcHaRnp4FrBQN6wc59BRAAzbpyDViZ",
  "key1": "SogqmtvVeZazWu1oUG7GYoZGtpTPJqafKBJdXGSoHPm2vHr97wyL5sizdrNvKA9FhudDsA71CZx3tZqbarqsVJq",
  "key2": "3nVfhWQMm8QUPZTRoCUrF5gf2y43sni8oQfRSYhqQcLjrpoHKPZmNyD5mKnHFcuRt9Shb9WQG3kxHqbrJPNdoUN8",
  "key3": "5nz39bcXN9p2DaHZR5XdG7dve9AzLL3htUU9PYMG2n8kxKGBLvc1NLiYqrE65xe9sFHCMjas7hd8oej8skLdYkzK",
  "key4": "AsU3NWBm5YhFxvpYcfPwbdYpFFadkHhNbstiaJa79sRHZBVxmTGSnvZG9awfm4AXop6WXeygtM8V44gNvw9zhW4",
  "key5": "3YDh8ZEF51ZKSVggnWTrG4iGf9wj4ZngLeKpmzmYU5uuBSwWgbhgow1kNQ6n4U1QRQJYxZ7DtzH3xqzcVYHwAMzZ",
  "key6": "2668g98X4BKGGNqEE5qQ8qyerBW5yvVKYT2Pmy1bZo4Noz6njPkeqWcstEabbZGLsy4Q6EHDVfhFXXN2ngB5Nr6E",
  "key7": "QBn1axUhkpB7eoTrRGYguGbMnXiYRtFpA6bfqFSgucjr7MVDzREWGKTPrY622iXBnWPj3uUJTLQLhR9aeCgaGRP",
  "key8": "3M442129owkVocTqzwf5fWizEXx7LgonQS7F81jkJRkgHaMcNwj3RqErqNzk9hJeZu4xYb3bpQu4aaS15Dk9kfbR",
  "key9": "5W1ShzLmpEExFAJF9FJWBs3XMTyuH9ef5EidN3GEFE1aJLMM5tudqwU94zwkjijJX2zExv2DEzinssQiucDHvRK1",
  "key10": "5d7TCcGZYSEdBycV8cuQaiZ2wZvvPQGBn5FG3YqSREPfnzM3isSUAAWGNsaozJ3NSst7fQNcUsLQekB1GDb5XVzs",
  "key11": "21n2jEkVtW8bCkM83LiunPbGuvx7KGJ4R9SVjRtg1jUuMccaz2KcpLTtUF942ZFay5VnHYZXWmZKyKAd385b9F4K",
  "key12": "qV56fJ3tqbVyqQN46tw9WWy38qtaxMLbsLs6XYo2UEL3fzW33EWrD7EU7yVSRje7qTipdAbJmALGDxuTFPb7Uy2",
  "key13": "2cWzMbZNDgxzm3xXyDkehXsciQ3h8X5LbPYCpPUjXmGMW5mWQx1QMb67wWPF5EsDqFWmvbZ9jSJJRQukA8msUnmi",
  "key14": "4azrFzqEVHNjZTX6jqszZJJMhKX5b2Ui9FbGRC5DrduV5c1fqRuzwKJKvmnr2YYhV5W671xhSvDrDp8CGoKrM6GB",
  "key15": "2qyYJxBX6KnRirjNU7jjHr4w8pCcJVr6m8nn4HYSeeyxir4DWLyeD8JzoVG2Ez9emmkZmpriPrSqGfWDgcy39hBv",
  "key16": "T749R5kQ8fGpfjPk72YTLTpFgoN1W2Lnuc3N2ndGRBWG3HAzujwnxkHYsvz7rX9wbEYcMZJk5uXr3FM1c4HPq5i",
  "key17": "5VgtiSQ1E1dF7837sX7vUxweyh1CLrazaedTHs8KephDbvNo4uuEA2hUP1ofB8yAL9aX2UHFkbPD6ph1bBPNYJSA",
  "key18": "1k8b8adjCUa5aL5k65uEn1kXmCCVafKcjyh1ErTc2uU3rnxnwp4cp5WiVeeJ3J1tM969hcAFXQfVMpMdnGZVBRV",
  "key19": "2Hxp75dybBoHw2Vjf8BdwwHNfToGVvHjxi3aQafrgazpV9sAiHqiRmrLQufE5jtJ532BvSBdnbACJ5eq8Q9UNae5",
  "key20": "KBPPtkoRRyAwmYNrxPCuaJQTvwJrSzEb9NuXUDmgnNAKbvb1qShD57xmgF2K18uPYWdSk8Tnizn6R37hCF8eJYv",
  "key21": "4B3Zcm3K8Cmws3t1XHzJ4YMDjjRB3g4jfY43QLZndeuaKqQYHYKeT4BHRHA3NUGnCPcNveEwQTMX1mthU5e3vR3f",
  "key22": "51Lsp6oebnjjV1e8AVZAsWYaAKHHVgxia2tPrYqF3Pz5ZGQFj3S814XkGzc3woWbxmuPiAqyy8Wi1cu66chdbAeG",
  "key23": "mix2bJGEovV2eq7TQa51rtfVgXQeStXCJqsEUK4xJqVC4FCykHw4YKBUVdJmfAcCmerDr6QjEx2dBRpXB1rCp1f",
  "key24": "3jkAkfLT2FtzT7s3WRWYQvLGfw4z42J1cSMvy4HnkXaDmzTnbrGZUPwFTvbKM5DvbzydViUsTLjXpRhjGAMVrBu9",
  "key25": "3R5CyjZsX4yQQw6ebARnWB9ehdzGfHjomLc7kDWUmicLg6ZuKXM2qpDrmvrKdhZ2t2azo2ForaYD2TonqV9r9V6e",
  "key26": "4K66ZqXC9n9wazczudnyBSEPeKKdEXpWx6vSBtcpZ4pyW3GsQWKgWsrbaTAGwUDo4qKbezhfMCt7jbx4TmzEtFDm",
  "key27": "3G8qZ3cQCvzMvMotLzyi7GaEWfk3GoTvkyiYM5hv3RCkgjt9UaKWf9WMZ1jCK5wWmuefLDFqztbVceVC6kVaNSns",
  "key28": "3RZS3RshWmmcP7vk2CCyxfV5vMEATohzYKwkoJbzz2thEzktb2C6Btju7xuKuwN29djove8f5YpbMGJSBz9DdioV",
  "key29": "d3nz3hkCDCw22HzrPhZrauoXiFUXtAFf5uaNrQyC48ziDeVAiBuECE1ByMsY5kRAn5VwLuroZ8j3SioxiitFm2i",
  "key30": "5MA18WiGgypSNA1EkaD6AUMQ5g1Gr2aocuRt2y9DSxkN5QkJkSGeUbgoRPkvpZiGYv8GfZZdvWoGWbjAj1JhAdME",
  "key31": "28RfNZiBQgZPrx7GsRXqVKkRVJCyx5xwVDNsp7dTLnJyMHVcV5oy2iduEyLZ75HHt95jhiip3NHxJTjyMiVUa7ns",
  "key32": "43c2j3vsA9o7SNECMoZKp2wbHVXcDmgvmCDs6c4iMef9E2m4gD56fTLk2RG1PxN2cAa3nzJ7qpvrFQfMA1eJDPg9",
  "key33": "2gqtcufoXqHHbtjzB7rzut87AWSwwM4XXGx1awiQUjQjqUNtuBKpLzUXKvLMyzgibZ1Xnf2j6fvgnqx9PDZnTtvD",
  "key34": "2msJzYeEHtrQCq5NicJMw92mBF6AGsQrveGc3ugBMe4AK4MUmMvp4nZA25KAHtg4NHSaCJVBiq4SxTrnXvuGJJq6",
  "key35": "4fJ23t1EsNyx3tbhnXPCqXNjVc65CC1MFDNQ3hazzEM35mmeu6dwbLgue11kboLsA5YBq4TSjuyQVPf3sLNgJ5tz",
  "key36": "3vwpQPaynbzthWpAVHkNjrhzGcw2S5tT4QikqCLD44sHw93z1WQVD4FvgvwLSrT1Rx877prhyXThzGvi2BVQcvNk",
  "key37": "39SU8tzBkBx7NJNZbZMJwJu9gqCeFmuTVMdsi84ZaiGpQt8fHQGFtGe2JxWbsZwDyhPd4Ga7a3L7WcPpJGqAY8vj",
  "key38": "Mj9WVLoqgzGd2dsUGe2M7GPTGPncNzWdt6w7bh4rBzZzQxkzniZvUfmXv6BqMUinRGhkQ58QAxNDj5jqjGVX4Za",
  "key39": "3JKCxA8aaKds2BcgRebzczNcn6k54XQCf9WRoXxqq8WwuvFfN32Vbep9nbhiyoupshccLDqgzeBNzG9cim43t4iB",
  "key40": "4jUwFsm8dYPHcUYsPQR2WdXpYA137AXrHZfcQofcwrAugznqwczDbouSLSkMNXy1JpqyRLsbr4Hwc4UyegGtgQTd"
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
