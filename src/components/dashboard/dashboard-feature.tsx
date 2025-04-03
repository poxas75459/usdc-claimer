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
    "41eLkjL5Eo7q5ivjWpdRST5bp82h23pXpwqdheZ5QgZLnR1FSmNw4U7xvChfQeiUwdHZYGKn7zNtroNRMN5MVXw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vWpF2TfsUn51ULyP2NBDfEXsYCS35ungrzfCnSQoWrCx3R9txSfk11JkcJqupXB1ZvSSy6CYjnTm7zhSpQda6eG",
  "key1": "5Z6yfaDgBQF6UAFGPCedbqzVk3zoRQYYG6S9XaHHjFafcVH4haeaoGp7BAparbxVvDocXzECznsP2uxoekE1WyLq",
  "key2": "Wyn6dXNU4R8f2Hahe3zLSSYVoXquPQmhis5ShJWCZPmtChe3yTi1bq8WuFEuWyBgzo4pDu5uo5G1VBbMA1QnpNi",
  "key3": "DzYvuZsw6BS5gkHNMemgEXJKB8wqHBgWxXgPPAQMoDRurZU8CRCCT7REz9kHW5N1eousGCPNfiTayhj4nPGmsHD",
  "key4": "37AgXqXSQXXXoYGoYSgptZzAG1d8x22Nh56v2wZRmrhnJZeVaEBgzVLfMoNi3u6vp79Dn81rXcRRBwCcJELLPLGB",
  "key5": "24ZSZkkP7J5mM88Fm5v9fENVVwn3e2BMAXbrZFqSppY5v6PxeHwdpNsA58PyaYAbW5owmADjbFo6HLGDHB9HFDtL",
  "key6": "Zdb6cVu2Tn1G6yZGjriMwv9vGpdYYRXqCv1Q4dsXMnKVDD4vyN24JqEx64GepRnu86a4Kjvnd9wNJhqaL58TVNh",
  "key7": "5tTwj5zkU1QWvzPzeAxoYucpGcf7RmwXn3AvHSJDvsgyxfWmAumTfjREgPT9UvtufKp2PSVs9vzQHWveyU6UmwTo",
  "key8": "55Rxzb3Qgv31xVVgxJwfF1iwqGQgcxwTVSr3GxcLC4UixKUvRnbSdYJngHoxZxQmAktxhw4JRLb29moTSa8Sa59W",
  "key9": "28pcoXvtBCAFDwwJCWKTLsafMWpx2oVcWuwd5GsrtQMDqwiUsZP7VRtj2nWq6YEoQtDwnKJDoGwyQrx6kFD8Jreu",
  "key10": "ucjQGdq4S7ziB3qQnY6Kr1sUErqobWZnR5CLcsmmPqqvU7c5PY5n6gnyEd1x3kBDHC4XD2gwc4gYDVb1mTtHXPf",
  "key11": "51CdA2q8S8XRuGbrC2bhW1MwH1QoyRHMoM1KduwDJbWqRY7nrwMocPJczWtD6rpCrJSnrYpCSCKdkrYjkwxDrwYn",
  "key12": "2a6uRW1Pq2nw8gWQLVRQ3HUQtZsTgHqsJCeoxQasLiwRfYohL4AHXFNqsoyqLdFh5X2mHRTaE6RgR37QMWpDbEko",
  "key13": "YvLXdM5zRJTh1xQbp86eTWG5kzj15jwzDALfdK5kxiXMaDu6vJVfkBkQsFngorXtW7ZbYUHBGGHxfsEuenpEen1",
  "key14": "2dt2MoUNrGif3PwTGHfpv66aWwRz51d7XMx2pC4E98txZci4oTwBN2Dn6H6hveFNox35iVfFcdyJsqApjVZgDRiK",
  "key15": "3cfL1jhoTedwXtr8fa2RTR64mcAMtwE6yZEZeFRxdX2A41nA8bXtT12XUkEgXrggEXcqR1nmMfXLX8BVtyJnZHQ",
  "key16": "318Wn51pgRKUGmivtxVJCDbGxR9RQeqQzQ7gfpgxAXFghapd22DjUTyzA9X1chjfN3AoARS7yuokP7BvMJizDUvh",
  "key17": "UHdW16jziVq2MjGn29FyqE8L43eisDaNzYEa8Q9Qy2RefkAxexZk1pdyXsApqVmd9wGGDdv7vqfXkCWXh7A5o2P",
  "key18": "4zbLygVgf5zh1Wf6s9nzFzhGMRZzME2QRmukDGALJDtxcKFVBxSgeDayWGaqJu66w8dzvhBKtmaVugzCUUoXqzPY",
  "key19": "3XKxg1cGeezCimQ1TUpzJiH4mZ2r4YJSfDia9G79UWd5EqHYA2E9wSiLVCgPx8BRTaHi3P9eAsUbagzTs8cBGEkh",
  "key20": "2NNbNYAynJBgtFEb4hRrmo1kjzV8E7t9jWjUtPPJfw92jqEqVqGMtBk2AixNDhxAAHpBGvnVpnmW1uiYH1ssnoAD",
  "key21": "4VSL27jjq1PYkjSSD46nDGSEUSidCw5t5xpkdPaS2KvhewdFm54yamDcSSJEXeQwaJwdZ2dnXmFgghuFTS6ocubt",
  "key22": "4vob9NdCVujrtL7FwkotpmbAkQmQgPoUW7cBoGhary72qWwK9RirmBT8mrgGLny3Bv8CEqAhUaGkxyRciYSpATEG",
  "key23": "5qFprA3H4YtJZfsfPfSXa7vJgX4bWASe1nxpxkem3jBc5VgCG5MwKDYyLE1S1pSNer43RGYk6FwyQ8GtbSyCDvvw",
  "key24": "2pncZsgUy6PwV4oY72hNxHdKCkGUzPZBaA9CuPdf2brx3wxFp12SNTPvBoKeepc8xKDb5bbdnJRGqGC2kQrukbP7",
  "key25": "5oPbs2sb1E26jhGZt2FGLL1jea97fZSopY2BR5cqhMo5NpiQms4wDP8nvugu6YhcLMmnoNbDHwxoh8tmPwmvA2cV",
  "key26": "4ikfkYz8XNEaJxNsDKBYrQuwsZdQfoGqcKfMbNT8UXUp4eCXF1WgvSVtqwXCz33Sn5S2uoFYrbYQdnJseMwuravA",
  "key27": "4oh5DWzUejTLY8BwuwQ6UjBZhjbiwPZ1tPGoXoQtwoCHLGMvz8dCb92SVeGcmzucyzKjnpg3mAPJDuZuDNXXGFg",
  "key28": "ARV1j2y7fuBpRTg5ZHFq9MEqr9YXyHKnjheSjDwRyJghpVaGGeh4SogcGthGs6SBwxrGiTvS4TPY4BuaViWgfoz",
  "key29": "3TTKq924sjAHcGqW27WE9qyoz8SSzhsjmzZDHbQxqa6VKaj2yGDbnbDkpF9CgMt7MKU3b165K54oizwfWdBxfTSc",
  "key30": "ajRYwUqoTzCkQpaB1yHjdJ6ucnvUejfa29MEVvytQsY9557iXjNrV5H6mRkUZtB5PAinS9se5NZcVZcDHZmDLtY",
  "key31": "4t5hztfdtSBQDKRNo5bDrhAgcrLi1gQzAfoUicEK1XHmrMNjAiyQRA6Yam9JMhcbCvKYgCX1DWfPtByJ8aCT2suk",
  "key32": "4MtJVS54NUPQDVkTEkqDLoWPSVzKXDjf53jy9ZXaPfr6zybchsS9S9uZmciZZtXrGbw3BK1zHqNgNdFZJvzCtAvF",
  "key33": "2VUUYFF4gRYVQzxo95mfPXe9zXqEc6wkpEY17CxfBQYu2P8JYwbaWJVwb92fM3txKLBTpxaVXFRckpSAWn9ghpEt",
  "key34": "1gNY2FjSjMN2Um1CDpSJzdX2H5sHADsJD8kWihQpkv2CAr5FLDcwSX5itnMZnMi5AcBc4zVb8XV94NfKX2FpQWd",
  "key35": "3nJLkVQE3UnbDQrycGz1UZ87wx6nJKr2RB5rfW6cuTdF5FDH5FoKWg8n3yGna692y3Y75VewykRYuwgkef8HtaNf",
  "key36": "2Ku3NGvPRMmohyyvd819dyktF7XCyeo7ck7YppnwjrgMhVPX2n9xDfHRbSabcfxQdEqXraTtsV6zVk9X3yjfPXwn",
  "key37": "5bGc8ccRNdeDT8boS3Du2niuagqTL96hzeKTGyuVGUZ3VtX6NTVG2LfW59GAMJZsaWtfKoLbWP1HPQrbJNR47WfR",
  "key38": "c2ybDsXCRU31WUfdfoed7dnYxNfbUaKYD354TD6ajLvPppu4QvxS9uJxR5d3oBNaEadKmDTMKt2YFqvqtrQyyuf",
  "key39": "4BP8cDRUppF27NgwTVU3fzzf7QGQLgTUgZDcaHDntNkJozGgFK62wyGtciH6m8CdLUopnC9QEr88bJVVJv9dptrB",
  "key40": "34WEq8b5SoidcfERDJCqp9M5uSRuNSiszQkeiuM73FcQywGUdU3pzYna9hD3336Q8FriiUYpR3tCJnnr2rU78SLs",
  "key41": "3EzfoceUWZS4wLoW41CSW7rj1jkue51CjADrqNrdcTy5HUUyXceKNZWQnAkWktzPox6xiUC4rsAmrHeMX6ABvjsj"
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
