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
    "5X6A2i51oAoKmkF4cavxGrZpxKC3FDLaAAdC3Fpa28YVhBx7dS1KUUXau3vQdkYmKobGv9WRPYXjHJgkrtZNmh3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZhXA9VRDRCWkumFdabMXubVPJM9kPVe6tAAFJJgt5pmE5p2ccMENvitftuBGBqaodFj65UeJCzwULEjVAwvHWyP",
  "key1": "4DeWrcejP4GK6PaC4dPuNMCQHHNiXuJ5JkqMJeENoRTHMKaP6qVotLQCp2ZLK42ZmUVZHDqQcqzwLAx17C6j8rGr",
  "key2": "3S5tTNPkz3qEN3hMArrAX1nCn4QwCQAKDSziv13YgGHoB7QHzFwtKXXnZdL53G2v9sJs5Vn1kQg5aBh2U1QBKsL8",
  "key3": "2aff4vxb6VCETXvTaBJbkB8P7XyibZ7MDb45DmYBuVZsv9UUM5Kn9NMiAesQWYgQMMJK4QRQuVqVvvZVRAPMjWGx",
  "key4": "2L5t7g5xtYSJcUb2mpr2H1bmajyc1FP67DQv1iGVJzRS8B8ZWBATc8BgYU3BtuUstqbA5zzCozpeTfxxnr9gK6bA",
  "key5": "28tSS2qajP3kTGs6qWCTyyV6ri3wrAH8jV4LjPY1ajXtAwVz6ne3Ns11KQUuWJ8jdMv8Mzp1j3sVpopR7dWpcxAM",
  "key6": "7tMoYov8Tz2TqcQxrpPEnUxRyzQHLfxm9Lw5mVihGT3vT9y2uNxUptsopYaKe1hXATSeJRMvzHZwU4jvu93tqo3",
  "key7": "34JFvEXnhpJ8r29WoBa2SErMSmzTrEhwyhGuaee81zsnxQ3WRJAeeWdiJq8oat5BEj7VtDohRbnErmPxdEaRe7yH",
  "key8": "61kwq2K9BETx5mYnnB21tvetFTd3Za6qfPHw18NorByDcY1XQ1bfjjJ6NnEULJhtpvgLVUEcbrz8uVTNFu58aVfw",
  "key9": "AzVm9FbcVAKdDbJj9GJwWfDkP8edAjLwPQJhYsmp1EXbHTnT35q9aSXKRmHNGBRC2GPNSBzcPoiHxnR45buRUtU",
  "key10": "3bTtHs59DWjrz8rU9RfQXfy6qyFiUuB52imZjayN9jNuLVuAXjRq5oAbEr3TqeP4Uomjmq5bs8o5tH8NBSxUQjnh",
  "key11": "3pqBeo9JpDp4yD7gr4PvQGRM5Tam1zv9DMYtorZakRUEQDKMpAigorbQ1erkFF9rNJp4oNjExABP2L6ojKr35yEU",
  "key12": "3pJFkyBtt8qbfz3q2wTUPjMZJNHfMwrtFvdX1E59ZQBm7edmFjtyCShHPiU72Qsp4zwnMvtky8Y29m24UarWDnsS",
  "key13": "2VaezF4FgXPb7DXdKqFLMfusoCepmPAy9sdUdRc1vx7DnKK1U6jZwoKAB1QGA5yUEGxgjfWpuTqQ6riLQ65bhJzy",
  "key14": "2KxF95bHCs2v1ETsTDxbhbdR6uxS7yuyPgWDVgMWbDEMVCSc8cNG5GoPvxLJpqKD2MYRGCiyjP5hjwp1tYNZ2YZz",
  "key15": "ppMLzgUM6hjE1zm8SYau97WvDRPagiHtQgKDKKkbCx3exEDQx6GyvGZqRPfd5vnenwiAXVqurSxV6W79QKNWLB2",
  "key16": "2yyZ3J8zpRwCiXZmCHveKGYRhh9WmqSptZGFZvpaneLP1Gz1FSkvGJexi7CJJpS49THEMg3et9se3VrTnBpGRdAN",
  "key17": "4154x8vawYtmiAa9Pjkie1onxBTmNA5krix4MCxWpTxANWobr4fWTxmN2EJPXSQeSQBPd2JVM1F1c6b5MMtTaL5j",
  "key18": "3G9zumyvabASVbCQcFdiBQEc1nL2GwJqowLKW8jMLxpBXD2q284MZ2hjm9JCgVXAZNpo3DXreH4RHhLDSCTDxb23",
  "key19": "49a2SQthqW767ovJJ5rriR4twd4aXZB7fz5UfunX5DTAMA6gdC5P3SJxoN2XgRjy9Vj2M1HhEJpbztWadaJ1n3s8",
  "key20": "4DzUs2SbVFbgysVBii3oQo9FzNZo6qYCXvvbQP2KxwbstUG9ZvicC8ZWBfsoZqcJeBQSg2xUF7UVEzRw1FqT4SVx",
  "key21": "5YMjfPawFBC5K5ni3FyYC3kmfEdExRdxwJ9E8DuTb9K1ZVVaxdxo1MryVpAqd4YeGBAGDNcThDRNUKPRr9MPicZT",
  "key22": "4eg2Fhbmu8dakpNAYBd8Me8aTuiWvEEBFpFJHMvuLGKzvG6dE8Vey2Nr6VrDyUUi2j7j8Z3Njgk8zyMVmXgYhBD3",
  "key23": "3GgKeH6DADKLAdcdqJMSs13rULPbLZ2tq4kK7LgVcCEwGEGPQKBDFMLtpV8rbAKFsga4rKwpTXsFkjqNh7p7zU5H",
  "key24": "4bZWnVk2d293NrjYeboBgsdKwA7Db5FtigTW9G9vdBvUzeFTdAZa38YToaKaFeoBNgfxHj5zXaHE4TGcK79Wkzxk",
  "key25": "DZ7WGy2SjtMZpK57MkqRZsiLws5xUTzkP4EJjnA7XGF4PGQWB5cRviR7iyYgxv5mLTzWZB6kpS5btKNu652AGAE",
  "key26": "58AiyvxcQoTPHUPP9FfJt1Nma4cbjA1TAAr7qmJVsmNMKpajLsoJbbY99ki1xvcH91dybUAE11ao1RwpkjktEJF1",
  "key27": "2tuA77owvZmakkFp3fg3e95hVDVaBpbNzSuqsgAgLzgncBrnKrVtLcNk5gJ2K6pCYpKz5NfbTm4Fpsv1Hbhbuqk7",
  "key28": "4SKGev4u6wAgPk17QBf4zgDwHb1W34nnmoDcN5XdRXUStabF5AD6ZtB3sZnf6mh6NpATGnt9ZgCEnMPoLTKU8yrT",
  "key29": "5XUzNTayKbNMC1WJuJ3rSKd7j7Z1R4TRASjvgXobXiMJzQGT9mgYkLQe7MDjnfiW9dV3RnkKhk8voTkZ7haEoFpj",
  "key30": "52GrGMDeHXhBqbgWEqfLYqJyua5roxYmLj3xzpWWUhs9Hua5muuTkmVE4SPD6jAvJ4ThNFH8HyArbDhum3gP2qjY",
  "key31": "2xing5rXKTQRqWzVaCimnSfbqiUM51V95D19QXwEem8gbppqrxiZjqY38EgoJdiorFNhW7Dj51561tN75gicRqSs",
  "key32": "3XKfTSdM1VwnYU3h56JYLSQBbLLTBv9vTQWWsvJuAazVVdaSFxWz2jH1BqGVHqSYYADjWgqf3tLzC5Zxgomasd6B",
  "key33": "35Ujx6sZMkq4EsYZMFoLj5YUVBbuSukChyZn77L7waCN7f8vYuUu46KqdXpi8sTm7Hq6Lmq7XSoQ9bh19yMkwRZv",
  "key34": "2JbtJKyHTwH618k2dZksMZ8zsjyqutvy316o9pwpWL9ibLyTAzYPYDNEh1ARBXNUs5r5QnED7PNJmLisaLB6fams",
  "key35": "ajNoyeFYCq9Bghp42DqjVWQKLcyFSPvQSRbATuA4UxVw4ieLRgB73kdH2ipyLKf5WakPeETrkSb9vh89uao25NP",
  "key36": "4ut67N5fcnv2LyXa4Q2h8N5GBimr1JbVM4UH2poHzwf29XEJRa6BtMKVNus7ZXZzVsbtaMvaopqoa26LHS2r9d25"
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
