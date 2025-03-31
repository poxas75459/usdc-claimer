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
    "4RgLwGsmTpJiN1EnpmxW7PNshauA8eaLC41RQPSjUZaGGbpcmpqfPdf63Je7EQ4UCvsbSydzu87gBjHug6h6U6yt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "prpivMWYLwisd1RhxtxR7yikRexRk8hXuXwGCvKXgTtji9MwHNjPHAv2h89i8tBQ5iHQiNeo5YU3uc2BJVCqkyB",
  "key1": "3S7iHJhWoDPngLUcGMekHrU4kBMQNe2KrfepcCJrRHNrsrVKwJWDFnRZd4oGqPzw2GWCh4NKdVHKRP4zo1168cQh",
  "key2": "Yp4HFfLHB48uGhGuUYj5SQhRG3U1fS2UhJC32murjjfRoLSNf9zCVPFbcwCjsHLZbWTC2gKa9CxBrnNaU3ZQcRe",
  "key3": "1cfWRUTuMm3n9KaftCgxWUNkeeejjmseYw92HAuujZSRgADRvM2iFLzCAkMuyTg2L2SL56WAAk2apE22BZNGchu",
  "key4": "49qkm9MKw8sdUZLLYufVC5QtJJZHSaAiJx6WHoZFQSsKQcLx79qN9rvTRorz7xdfc2sM8cBApu4pwbznNf3npWFL",
  "key5": "4o8GWH4a2jnNptnLASrkauaLLAczHdLZ431XDALLXVTJ7QQGBC7ESk2JZ8BfZuuxn7tpy5ZGWgozoJRuzyJCsbiB",
  "key6": "4rFhnccnLKE6cUpCkujMv1sE4FaCWBBG6kGxsLAgBiPKumbEoe4um8awQMZW7XcMkivjSC5Ryx8NAJ4oKsJohdPT",
  "key7": "4Spd9QjjQ854JUm4ym7dKFhDJwVX1xXFmnXfKDhJZmbcXgPjfTUc9rQZk5RYXMCjg5bZYaLfwBUMW9CbHUZvTkCj",
  "key8": "4rajz8Kdf8ieYFFF8D6KG1hx2c9ttGmJeL3hrozt8VUvoYHMUVpb3uD5RSXxxtJ6RgMGR5jmgyJUagh6kauBTLkS",
  "key9": "3pTrrKxkezQwmH6taBS7c1c3BTA8fotMmdUsksVa2ED6ppAddAW83xYZ9UHDCUMhrcRcBnPEznUZheZE1249aaKw",
  "key10": "5cpAKfa5XWq8KP9ocYyitoKfx9FavYmAdk2DcGGBfZrLVNtVuuWvUVAQ8BwvuAbSXkR5oLeP6pjkLxeR5uA5FD6i",
  "key11": "oNzYZEANT5xdAWJQS3znv9z7tsLtwvEx2mK1VWAkS47743rvVr8RunTqK4852ZCyV8PaXX386NGAKYxQseTUKnt",
  "key12": "2UGSu8uqfxAHCV2FRxW4ALRKmzM7qJYhX85CrBoREsnnxZnohBuuM53tT4E3sA7QHt58tmmnhmBR5AG3YrTw9CsH",
  "key13": "4JrbqekE3wJ5NJTU2Do3AxJgnadNmQHdAg8eq8q5vbH5C21eXduGtMG2ELsLW14ECmasRuiMFcQKd4gB9QBZyLS3",
  "key14": "2PVUuvLzqsDfsGmomdtJAZ87oBZynuoWn9TSQgt9B6d2Wmv5Agjpn8bzJtzvUwbCEYswXoBZDcHvyMnRscYLwNig",
  "key15": "NNgtLmmoqYNiE4DPiPwP6h5hBi9hKbMa7VY2AbbD5C6Q3e5fmCjTZYy7YxuL7vJzwvVJkKYG1NdDQuZEYFrmN1g",
  "key16": "4XuzST53YkvXkxvXahZdGHAjVxyNYkLYApWNGp2C6NMzgYYrjYCLuwTEdqk3ys73CBjxHArED4znTWSGQq92Xt1E",
  "key17": "3aDhxR5zSdXXdu7ne13nwpq3GxiCMoyymWWrMZktfwyJb8SkYjYS61pVHnkqdXxR5zUwgTAtdr7xaX4nYfvAucQo",
  "key18": "62WkD8tEbegH25EnaZMAok12ZteG2PJ3W9efaSNShyMTgh49tK7Dyc9pJ89xdfLc9kAbtStAryi68hGY7SZ7zt6c",
  "key19": "5uLYD66vauxjoSp8mzZem4dCdZV1ijJ1BwChZSSRt9N4nvEcPVSnQAge4uhAqXdV1DxLaECBTk8MpXQrDqbnwWRY",
  "key20": "FNfoV7jnNXdmB8CJe4Joy7t8Kfr3rqLbUEEJbZs7QfnffcVhR75ZPHGQdcGbn616J67FzthRXYB7MMLpRGKVeHA",
  "key21": "558VxnsgZtLCdJcgF1EPoF9iwpQgHzS6DBHqudc27xAEX5HNiLGZHzwXxG7gN6nhRerWCSqQJkRawuCvjNNc457",
  "key22": "nAUYcaHbFsR3HPowN923Nkgo1SiskdaNh36M3cUyJ4xjGoRg2fRTR93SWaxW7rG5GZxUsvga699uycUmdrDEdDT",
  "key23": "5EHjtD5tREwAMYYkiy7B8GDprA34f17Uu7xnExGSS1y6pkhNXPxN8XFtb5oiWXFuKStNscR8pbDEJPvAPo4Ro3cX",
  "key24": "3dqN3r5KBhFoWuKgAXCHMoUapLFqJs4zdHkic62P694uzsmBBp98Q1D7mrjvypXMm59vnUKtjFQiL6qyRcFf5BFb",
  "key25": "25visfTo7ak1FSfJKzb9XjDtAg2J44ACM1APitsyd9Fash4ZtWn62FoS6fxL4UmsV9jwukPRBKKxySbc1YLHgKDe",
  "key26": "3m4E7z1BamtvavBbVKa5MB4kMUqcaDDZ6xtfW5bKaKFqVEPodTn6WMJvtHAjCvUEBformgfVnXG6ozi5TovYwKtX",
  "key27": "QAamSEftXvMoaoUoT4b3ThrtFShn1pmr9nP7v4MZ5PE3UzGpW3zED7ssWms8ME6se9iqufZJ1wjQzfy4yzQSVAX",
  "key28": "4J2oCsgyhrzvKAst6yvfp1orjGJzdsns5NJnGCw7mk3EndGHge7nsC5wCseUtNtoagCbtvPRYPgjpA5MD2n4vp2F",
  "key29": "2nckUt86FAkuxVZjSDPFWB3JsLnXGXCTYg5iQPYkwbBTx6AcUbTSKXapp5knq3HQKwPTh7s8LqngJSv6sYGgGFhJ",
  "key30": "22gQ2kuR9gibhdTFes7XX2mFFiFSbR9KDQH7WrPrhCX2km1gkJmMgen39TZhQJGNBU7DQVfGS8aPvuT39m9Q4Qgt",
  "key31": "dcjeG2SQev8ZCKaerijs2H8bv1nvf5YTAzmZUB5uMwsqQGy6KMVgya8Th3Dyd7VsqsATR8iphFe3mMykcmGbUmd",
  "key32": "TLeN3rsnt7J7cQ7ANy6U7GcE6BgM87g4TAin9AhA5MJSWiVb9dL9PNDif9gFmx5BfbUFNWfUcFXRAbgguMyvg3H",
  "key33": "2kGcTxoUsMSk1iBCYjYr7FkdgUvKQevPzadA6E8z4Q2yLVSV2NskDmtfqFmxSRF57QWSCXWy5eezBM5XPbbcCtNT",
  "key34": "2qi1GHCdvYAxgL39uSVUwyVXoc4U9zSjpuefVF8o9ktmsxjQQ2HrunAyWDJVT4g8i9sheFHFCrFfiRnMnPTA9eLM",
  "key35": "66szkhsgTede6z758VwNsx6XoATiy5zjgp7ZFMicB3hizrstAwPZGxXhTSV1Q3DQEa2hSxN7xpgUgzGS48c5qhy9",
  "key36": "4e11kYxiKUN54bFL7tLZvxWnVtaeNu2DRMihvyMMzr4ffZFkpyxWDL7oZd2V6KGgXnDHZeSBaY8Xq6PjC4agmPXE"
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
