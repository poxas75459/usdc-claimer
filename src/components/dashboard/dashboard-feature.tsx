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
    "2BdLhdqgag1inRrzg8C3yefex6smUUdbHGp6gSXasdN16LtNjqWzmAPC3shsHSn7Y4FMZuPFbNvZ78yCjVWE6NwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ms9vAD1smG8UNBT9goXy9j5RFdB9sjvJT8b96EPDfDsRy9ViX5S5vSE6YJViHZGs1Ujz4WRxSNFvPgQkSxMp2Ux",
  "key1": "2YQSmdan4CBvFx9c3AeEkCpqQaMGoxnXQPDvwv2tWWSKtfqfF3SgVop6YqhsvSkH546PQR5iRdpGkHYDMzRruMHH",
  "key2": "drEVekWv9RDpj33DM46F7ExYKnspJj7rSyQXWdkK6m42U9GyFgersZkZ1sCXZdoCzDtomF4rroev2eJ8p5wUVPd",
  "key3": "FSJMLuafh8KccZzwGWWEGGRWMdtYiMkL4zG8Hcnpf5hpeA56Cc3ruUdTjxp9y1P7zvCBgATatnBgkjMB5tbhndQ",
  "key4": "3wKez1SFfZKotD2LaeUjsUXXgkuM8w8xhv3u3YJH8keDsG56m4Nn68jgX3Ao2FVjkghcoepAc8BMTbbfdUVvzHXF",
  "key5": "2XABF2NVzoGHPxFBvRtf2psyPnvEUx9iszXtUZfrM1qr4QVjeZHHXLzoAHAW1Hbk2naug6eepUZwBY7bwxJrZZk9",
  "key6": "AyN2hLWqHWsSXfZExBm3zB6m7SywjJqxW1tzcSBB2bovonD6TkGfT7AExWk7ovPENN95328L1BuTYrvZ8hKYJZg",
  "key7": "21oQTXCsRyqqnKH7AMsXbUQ9fVSw9LxcnqiRe2hsEWQuGrpiUmszxjLx7hpyX9DnBzbS82754y4sNB1PCoSrKcbK",
  "key8": "5xhbiEfSdemreP4JewEttEKQUXb2szFpVdiE6YjkKCx8coasxzdGnE8RJoQFAcS6kM1TGLB2RXSsAAsbSiW3Rb5p",
  "key9": "3AxrX8UiGGaCVGYgjHKRFbXg42rUs3evz8s7k2Ctus32MCKEbcPANG2T8kQFSzB7mFQ7QcxShRJKzuvefpXC8RwU",
  "key10": "4m1Um2C3N3y8p8eFiUf6Z3rB5XKqiJuog2QtBWx1Krz8ibpUbkLssVEASHxni1CgQH4VgB5k6W4W5hRpXpncwE9x",
  "key11": "46BCGhDMjbDN13DbfeRA8xV6QovsFuPqnpuEbrNsX7Zy3B4uyw9dcjG2nBMUS3jwxVfRnCzgLVEDCvLX7ggb6JV3",
  "key12": "PgqDCuScyXR4Y4yR469GMNvJfU7GhYiyJMWj4BZRnpkk4mrpaNHpdftsKf7FobmBSaERXqYLNdhwKArsdyC7Gw5",
  "key13": "39u4uc1XzWP2LHQw2VWqibdrmV3YoZEp4fy4p5uh7S3gvBrCLxCHZLrFnY1XrkijbgeCHmFQ7vq2hdjccvfxfgfg",
  "key14": "2Sz68LTZ8JSW6dqKxVAswfPCnnhvS6JfikSHNjZUhTHEqc9cWkwJu8vv179erCASgHryT45GvLp3nNrzCVf4xuY6",
  "key15": "57FYB5RPVFkARjR1xqBH9N4Vudrbd4979bjBDRNV9Py1jc8oSM42m9p12J7JS8ZYkQ1bo4HGcZU76hB9JjaW5Gi8",
  "key16": "5UjqXz9DoiimyEe7H6Hy8rfSd6AiJp1jZHoGGorHXupUaeDdAfQoyjF8xzWvRdZYJcbp1iaC1svAAFAbB32rBkZV",
  "key17": "1P5Kv3VrH8eZvJD5sQgFPRBDqmvcUTezHM4jqmwnkJt5T39izSmKhoBA8sqCwPvNGDxAEM4bMeWZ66HPU2aE9hd",
  "key18": "32yitVVWiPZazSapYAVSa8JyAnThmMA7C46RQihn9Uq6MPQCE2y5Lm81Sv5KAuPZR9yCdTKeAezEn5cySG91zVNb",
  "key19": "53d5ztzC14EpWnJbpN3pgfvP7zvvdDnbSA6secKfw7GdFwqpZ2irC66sFXvPvEPWjvnMuXsDFobXfD9amoRzR2B2",
  "key20": "pKzv3Hx7hhtaD9Hn1h8Hs7HwzsVmbXHX4AQu2mktyJxV7F6jiGAHxDXvDBMMmHmQB75Y16naM7A3Nz85BWzkLVX",
  "key21": "3jd1RZmiq1NZALywJ18qydj15SJ9r52zM9twP3n71TjGyP4YisgW48mG6PuyLU6XMg6V8LmTNZn86tkCAHtQiqkt",
  "key22": "5FynZ6AmEoePDhv8bb72oFJwd5YSkyGEd4DpmZdGYLAJwsZoPMYqhkhUjKKfBaBSmETLDsrp4XMi7w44vbL4NLin",
  "key23": "2tAo4LP2qy6baydBtKTicNy758hPbqpXMDmgWy3E1LrWCUEtLuS74xx5R6W9YeC6PSGW5HbKakMEavePrRoR9vtZ",
  "key24": "3SSmpcvAUcCKqUaRbdLasqh4MWz2P8uPAw5h2zeS5zwzvF368C1PY4Mss9m5sF3wp56SEb1stFCtYV15nwFtk24d",
  "key25": "3oueY1dfbxUK8pra4U9nqbRjvC7oEBbxPMToRBx1zHsW2twW1Sh2ETcyMY8iJ9im6D2fYzeNiUYUVnTbPPRcPx68",
  "key26": "4vYKnVHEDeBjRNbH2aRGzvu5Q6uu7WuSYmti4ca3ESPuoVqW1oVuyksfapCXwfxwMeT9N6bPwnveXKDyyu4TyWcf",
  "key27": "4xpC2faCyiZwECcTNenomnVmVQ92y6tvvzjXenfCtDqYoC4k6Po5qB4nKPL2yT6rqpVZRbBLD5ShoVTt2py9KDy9",
  "key28": "2fczG6fhTU1kwudc8wGzSi7tFmD2t7qEHWnyxjRWZDeuqDrh3u26ppHrLFG6NvXmnWSJKSYhFFXcjFBad8MM1hBP",
  "key29": "3SLK5pFxAAHANDyMWQi6Rt5Z68PeMNV8LjGGLjD5drazpqVyef6NPwwK57Xt4HBazU4mhbkcb7eUM19Ar6V3oL4J",
  "key30": "5vGivAX7VffWcYPtmkp6jutD4BV49JVTWjPrdbaNEijz7mJtL8jXYsjQAVs6WjzFkic1A5pwxjKEK8J8cNkhV1bq",
  "key31": "381pVK3Fc1cCRosKvA9y56v36pcxg1QVirE1kLthL6epqWcD2AUUbehhWUSY1mBbXbbyss5kYAzkPmhRwuYSad4W",
  "key32": "E3MXRrUP51fvSWKsEuc5SaEScD4LAKTbpSZgEV5rr5nBMd3TJyVfUWFzKbPbav1njKXx5adNfRD3mWxuLFfQyf3",
  "key33": "5HDQVKWxQHktX6zodwSAQEse3m5BwHZfJ5gD8PABgea43H1aQ3YABJtMiTesp1xAVTiFRKYL8LgV1i9WPMV6fe8U",
  "key34": "hmZdGoUXsGYTMXdAJmGLfTTLVSE9TbVSDqgHGdvk2uiiQfFBAvbK4h77V1MjFiY58oAEbmxAXgasgo736pYPcqX",
  "key35": "5dCgnVrCVuG3u25rvreb1cgQ13ZVkaqXUr2rNTqeF4XuVg38xkkpgWTM19sCdBSkVX7ZFRWZA4NXwDie23cg5xWq",
  "key36": "5RSJTQdxvssdAKZrcDLYUNgec59XL1YnR8dkts2qYY5avKwh5Ja8w1vWfUsoUCpW8vNRb9fcnbeS7QUDZMqPKQcD",
  "key37": "5kxSXcSP4SeutKv9bpuynwMtDkxP1JiCTASPdRz1btZkGtb2YsY8Z9jD1Xc3tDPZQbas9tqhCZWpN6QtmkuQrDs6",
  "key38": "61dobRzGQhA5ewN9qzXpNPGuQnBD57RtSQvuKgyr1YkALYSaikuSWR1aze1iPKTSMhcsqCRZumcyr8FRYt7at2KZ",
  "key39": "4rJzNno4HwaiHWKa1AcuRKQrSEnLKZFGjcuX8RJTgXeuRNwh6Z8DadDhdsFpoY9vJbTdMt3SE79SUxyhZEHvxWMx",
  "key40": "645WhivgG1vZVsVjy8Lzxedtx2THwNDgNyYbMMEN6AFfqApnWMZxKgvkAeRRBdVrKCSY1KrEdegQAampP5Ns6acW",
  "key41": "5ymRceCVhBqWomLHEMqyLPbznHmdc7VFnvL6xyhnNuQUan6jyS4grQB7qGRZoThLzYrcj1uJig7SBsWZwgWy9D4S",
  "key42": "4NF5izAYGb89BET1uzuNWpJDoxKcugxYBT3gtnGFCx9hCUrhfMU9y8a4u2vQqWcXpy53Nzur1Nf7sSXRhMjJ7BWs",
  "key43": "4mja1hYW5EixmxvroVCSDHLCb6ALcJQWKwAsUt88r5hMy93fQ3DjSqJDEzYAaWBKTz8iBPD31zjgq4TZmytESVJr"
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
