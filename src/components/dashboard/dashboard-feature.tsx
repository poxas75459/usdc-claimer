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
    "43FyGfG3pscGqaAEvfHTZqm2aktTUmvEVCXuug4kvgbfgBK5N3Uv5UvRf9L3Cw6pKNWQAEZ8yxEDXDhs5ZMi6cTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gt259DDdxHGNtpc8ppP9XiFZ6obgfH8ppGrCqLsCCD23oybv7orJxeS2F1D3ksQnY5WtUkSHA36tWA1tVKjGj1F",
  "key1": "66gvcDKXR82hYJ2u4FkvuP2veoMPWPtYUNmdbQUnSZoWGxvDM1seia4nLwX2ddToeeobWdnvcW3t894Vwudf4NQW",
  "key2": "4nYg672CbSHUvzbU9coAesyXLEHwKAUH1V8q8fX7iNnjKDyNJpszzZBqGqcjKUBfhtwWjq1AVs7ckpKpospwc4GC",
  "key3": "XqdaCM223zpp949YFyFAd6B46UfrbCmcuFAEiUsQjr6CqZg8seoRfDE2yyiCuSZCiyztxGxQ2fddSXm7aA4q6dX",
  "key4": "2FU4ryDFF3n5zsGUq8C4JSxAdn3xGaF3FaPprDrHYDGCxuF2FnE3FVgHZ9ADARNpL6FqdeyW5rpmY69Hi3tafZuw",
  "key5": "3jj3BXaBpwfJ5XZf3N723dKJidJVNUufAJG733ms79XGynsjQXSvzgNAR8K2fZxwbHdSGTsvti8sbvYBwGC8fPX2",
  "key6": "M5ZoDdQ4vTsbrnKDRP2XLhCGow7PWeiDUP4sCwLtjxKVqx7KADRjY1UP7AvVoLbs4kx1i63yEdmNBy6GADAr7rA",
  "key7": "hYSwzNnUDhPCYhoA5kVtTsEqC8jFbwzNvw5WGEH41UoWFd8vKKyWBXG2EfT2FNZQ4QUC6KjRZMtpND126gQgnAP",
  "key8": "2m8ZtaTGhPuyVZTj6zbDnmw83nAJkaBVwg33avhMkCaXPaE8MdXYWERzCgVfVqdW4kwd8DCq1j7p3Np7mcDSy2ke",
  "key9": "3gs1t7sUUVScem9tntaVeMv4JsV6Psip8WPifYudKyFNNKTiDZL41oJcESJFw3RzVQA4wKz1p84dcefNAFQM8hb4",
  "key10": "DXJEoFKscvC5pcMy6uqWG5DgUAQ74QdstEgQM973CaCz951dSKtTGNuWYc2fZjg3PFoTVySpw9KbZ4wYbafCgLR",
  "key11": "2wiDL4G4tRPY1ixmAuyABy5xthfc5XjqZRBRineabZruB7Q98ZDn5D9vF7P4YvSpwiN46J2BP1DsFRQFXsWaS8Lz",
  "key12": "4qXLjFZhmrvdhtuHVaxvL8wE3k1wgeEgLU6iu4nT9kPwhULmWJXx7kC5LZu2JLxPbojEfH9bJBg3SjYPFEt88xrM",
  "key13": "4FC5EcMWDcP1WPagguKUCN57QXuWiZCxjMqHetPCJet9HfBRzRHcW9XGQ8z4mdxZBjexmxo8ixu5a95CvSpTQjvc",
  "key14": "5DM1wEykYYWcL9HqCvkbo2UT7QCXzTEuGiMjfoxgn8vL3qy8ShWMBvWLKWDNSEdQBhw2Y1ny24ZYjtkdNt7cBa6H",
  "key15": "j1eBe98ZqTdr9HR6jP67F9PohXwPKg8ECXqo482ULtRZPyz2uGmrV4vPZZh7goinF25t6GZEf1P52xcQE45B1pV",
  "key16": "5yE1uYikRK2qhUwp7Y355TQWTz5xtADH8B7SXXtggoAfF8RUBmCAKKxhVLCqdHZL99ZhfiY1r49Ct3HqpTeBwLaE",
  "key17": "23snxnb3DDBuPqnkrGa2MWXpZYQKB2sGQxpsFTKfM6Q7qattUBABU6b4G6aaay7h6L8aiubdyqtneYjCV9gw2Ntz",
  "key18": "38sWfc2UyjNiy5bzt9xB4jHMVKRaLzwbkeuGZ5eNtCQ9Z6DpJfhoddTgpuxCZBSuDLsBjyskC3GgWkrtwfmvyj3b",
  "key19": "K6M585qSbGKGbAGmV2QZeJtMSq5z7FJ7vkzZKCFfyjmGigstHFED77pjvvWTCnKL4EAQGphNuZwCF85RopNXEEP",
  "key20": "4nWiqv4Yt2hUvU2k6cHZds6SfAyZ96A6iPHvmk3Yh9mhRaBCuBtNyymF9uTM9EwfDpJFKPakYN9FtrY1Ve98RB1",
  "key21": "5FDJTnknh9NkaYGRmyJqZEFSmcfya6LosKw7idpMbByR4QPNpNSS9HtzND5t292SAm89aLtYwuyGkkPiBsFjKzAh",
  "key22": "2SnXcuDBkAjJyrJZCLAdPoogG44eibYS5WfJPUTYEcBgzEhA1wWkyhDfXnmRUTnKeWLsZDbhSW7f62t4Zk93bT1d",
  "key23": "3YLkHfPrsmDvUSkfoRAAQ6BZLfSEdRSBNDBLdfZsY6e6DQP5LeavZYcUiWfdTRL5Sqg8nbkf7pPD8vKnXGo96HeU",
  "key24": "4u2x9ShMzxmzCjHUgCwsuMQGNMtKevJo26VjaxAk8yFKRA2c3itXZK8tH68EUu8V6cQB54TghS3nNoEv24oqpypA",
  "key25": "2uX1CERnnL4SALZR8UVM3R75Z568BbAKcqBw6xvafkoyvNvJmk5Sz1iuDxER31dfcTfv6oUpkDt8hUDLU3pztYwy",
  "key26": "cfyBRs8dJGPgtmCxRUky4jznWoQM8iu8XmzdQUtJ2ng49XUy9MQtXGxL1uRLFsjb5w3tnJUy1TyoVfngYJftSat",
  "key27": "649vrRMPraotsdxkKNGDYtWbEvAvHVzhjrxScKMwKKzj2Ddsxan7cmUW9qVwT48XSoMSnQPQSaqmahT4tFG7ycBB",
  "key28": "3cY7qrVccac4VKNTftYwwQHkYvVKXbNSkGHszrGtG3wJxbr7U8Ai59dkUAYqoNwaXXHkBuXNx7nqQ6yxwevLiU2D",
  "key29": "2EVyhuXx55SJp1zbduFS7ZjeStHHERhGTWFWucYdSGqquGFj3tcWR2isVh5DGBdF5hcLA93nLoTWbjebbxGf7wj2",
  "key30": "3AJr72qjDL1hJTT1xSQMB851ZiuoTWKWGNyRUY9T8TxPY2ZKTCW18YWxGFr8o2jFXrJh1LjXmhiGWMtcrtoauR2b",
  "key31": "GjNbivWVVhRSS1ihYrTYW9DcRAQaNPfup2NQ3QHL7aY7HjBXFcv2GmndnoJdUcwiXCvSVqwqQAzhYd2ziGhNmV8",
  "key32": "4ak6tGgySxMziV7ywHeeeLi2AZD1Mbt69jQkhA4UjtwxHhDQ4MwYxknMa5kEfaXyR8J4S7XiobYmTkN2wooXvVEz",
  "key33": "5HAciozB69htH1Q72pdije8ssr2pJtHHGAfC1CMP9mzT3fKEcnLxtShrVueb8VspEbnbokiKEXyj1SWzdgYWjHQf",
  "key34": "Hv7uxcE9G3TtdweGMDthgfEdmgRvPMvUrroKTgzKoNM6UN6iRF81RdGJkafcGDgcUwy1cyVmfx2jvPwE61d2i29",
  "key35": "3qPLnMyexg8vwRg1hbH2mZ4c33ZEvLKcasBb7xuHo6sd2dnkyqbSDJzeKkSdjmxRECBhcovnXrJ39EfXNkARcFoV",
  "key36": "BxkFxFTand9fZw86BgNdZtX6xm6gVByPjZatmR56BrGBNHy9HXb42YLX7MwBMcRkYkS5dUTeeLVzQivv4TRsWHR",
  "key37": "5DdJKkVCvcYMiG89zfQ7vuu48hcoUen81aE6z5yGhGTGmhRbGyyVoM9NNqoMrERccw9hhDDbTpFiceKxED3PwNSZ",
  "key38": "MZt6ER3p7D9mdwbyF7iYzhirkdRSNBzvPSyv7noZ5MrkUWJ52BjQpshCyowuvhtyYKQYPekfXCDVo8JZksTs387",
  "key39": "hw2ZfBFaF3j8CAqtgRynZW4bPTxqMHcRtQDs1AMZ3R5GfErEAkHfjYk8Hy2CwXAmkN1ienK8rdRYzuazdZkAbH6",
  "key40": "365bBgnjB5bp6v5N3vYpdArsz7kWj4Dz7fShYJGZiDYSSdRXRi6F1YB6TRbD5EDTgy81Znm3nH8JSXs4za4ATWJB"
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
