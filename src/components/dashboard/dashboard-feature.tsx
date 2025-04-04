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
    "4S5hxxYw6Zf91oQeg3wydPaFNKRsdHm8zRfknptoa1vS4kK9xaBjPa6ngRkmNQc88c28vKaToZNuDepj6Px54d7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQ2mCzH5L6uiyPH11HmKcghtNKGm2HRG1tw6rebxGCX8pcGnkvy7ddXpPgZKeq3vqxSiPrQKcYWtgrhZYtx84X9",
  "key1": "4G3WKK9KyRnb7skRX4LXBiZiW5Xvki3zMjWwkn3AiPXzqyvwNLnYiQbMxcnSnu6hW8PRraDf8eKFipPhQDbTxsdY",
  "key2": "5dX8SADBiAVoXoDE5Pkkv59aAPJhNynw6uMdXbew74S3jYTf9bU9Ci2MwtKF57AAJ54Crx6XX1GbfY2tXJoSF9e6",
  "key3": "3rKnW9R7ADnPEe6hy4EvMBwyDete6KeVEnt555FCJEbcA3kxsjPfKGeX1jVt1xb5tDyNGbAyByKzEgbZYipqPzBV",
  "key4": "326Lp9hsBLJdQpG2pesouNANS9bgDFESP4ziTXJY9Unv5PQVxVyFHme9XCzYFvuF3cbkQFZe8xCdNYd75iUh3Jis",
  "key5": "3tN8hWJ68kHGVwhSRbnsQFQoCeTnVcgqJoQPNSPdEnfXTx6DCz2xDTavgXUPVqhN3YKc771tBkgRQG1StvqMY9r5",
  "key6": "4kU5Z4VD32u9yTycVziffcbzWRQT3SD2fST1dprDhhgafQMC6vKoJH5qL4V4rC43WDk5Ew2eoKfbhfsnLVyYiLGK",
  "key7": "5JqLeeqaKd4pwXhLHkwgqaUwRpXeX2Ch9aTdfhiDeGwvuK4sZ68Yd32y5bU8AND5m1oyc2hHrNjLRDhT4bvFLuod",
  "key8": "24JFQXf9v8cXx3ZvBW7QHbBgRijMnxfyGBMgEwnTxUZcy2X7pQ6ECEBajMEx3YqfSw9gpwCW8YMEZedqL7rzrbwe",
  "key9": "2KR7CNZPHxh6P1mCHF7aHxNspgPqVWHot2Kb6a6Ama2rzB13pviecuEbhkxmAUF67Q8rwGc52Zca3Dfzu5tEhYhn",
  "key10": "2khWfdUUGe7jtb2BPTEp24UnPohA4zt3NKXQUdZcUEq4NqXUYXB1EJKvxTTQxWDvPSeDg7Uo1hgjDkGvSYeRDx3K",
  "key11": "PP3wEKjNGX2EyZpkf83e2cPHNzoHfh2XvAoiBipHMffhxBrMTJGe66VzN2XxiL2oXkB77hRfHVRH8qnYpB2oqfG",
  "key12": "5jNAhXtggip8TJ6Cvtqem4yQFCZQZ4HmfvEc1CDb3j5KKomJswfrT4DK39S7hpiJJtAhiRtVi6RLaKqEgjiC8pBT",
  "key13": "NhXLTgv9bTBd4bNtYvu1ugasXEwrDGa1reLtxpxqQcEyPShGNNrbzJPWaRbFgmm5L8VAvA9DjKQBSFW4HKeuaiq",
  "key14": "hFoPU1p9RtNov5v22c9QdfYyrdHgWVjqMaverhXJZtb6m9htx81p9J2VpjXKL49LRsCNxK63cSiJaHhYtetU6eJ",
  "key15": "YUDdy1b5NUJUUVTaK912VEMRHhR1uwbzi6U18BocjAJDKUoDj4aUK8CPJApMeyTM2FnARswcogRLvyDStGr8wtF",
  "key16": "3z6cn1keevEn4HKGVrmDzS9BL9uVY2uzkr3152dH9yfcgoswW1pSAsFTHkyk5iV45Ss6ijcAfuaxaB3swzfLXu8d",
  "key17": "22AidJXTDTUMGPHBUNBGyHKNFqfgP11r2HEaJGkv2tKKJovtfw79rCq9FdS4RsGpjM1zkg6Ycd4ZJ2V9GUqbqNmN",
  "key18": "37HddNJddQb4BrVs37HNA975DLxzRvgndr9gjdC7sy9U4YU2BgpmHr3GMvYY5cSGqQWvXmSHBoE1asdSF3qvU62g",
  "key19": "5ntyLiLCrEbAwkuCUF8G45t3rdyTHL7awuafmyvBtBL2GWVwThmierk4QnMiM1DicHeWUEjKwfbSB2UKkJvRWChU",
  "key20": "3gAcA1F7Sk39xQhxjzQoJRyqnpAYcEvRWJqwqCRd1DWcSBVBfLC1JNpMrtpwFtWMxaaPe2JcGbnDiCukShUnuhXs",
  "key21": "5W9JPjvDwVmDtRKChZFivNQF6GTB6YN6krv5z5ngCYQ74SbitX7r9rWHdzfiMmtHdiTawPkY6VidnpP6wRA68onH",
  "key22": "5GdPGrYCEPTeypPYAHGoVeytRpiYf2d36YDJAscZavb5iDhZ81iX813LkMfoNy812LJqaBK9pRvCLkmFeSUsJ2Rq",
  "key23": "2PpMnL9XmV1yTVVit2GtU7wPB1Lsr5z4MwDAAJACnrtAJbrPCefGHYicTrTs9oMsTeLS3GNBaHnni8GFEX93RJfW",
  "key24": "4yKcpoYAew8xgFFdD7JbyQwN9T6E8cTiE4nhHqMqr3gQ5hM9A4KtcstJUd8KKdspTKz6gSdYoHft1axjY7b8vrM9",
  "key25": "is1f2xkPh6Q8grVKGiV5w7HCg4mTGGuz4DanVhb1jvxYqrnxfVPrY4QLCEEBJznswitoNU2ZSYgmFrfnNhxsVDQ",
  "key26": "3UkaBc2j2zSjG2nBfaQBUP27udTgUU5Bd8LQ8Uxk9jXegUGLGrgMnuVZLcmicmTzvMjT54932FgYyKdbFpTvgu8j",
  "key27": "4YF8DepreKRWLrXbMaZNkQZZvqbH6NZVhfLiYbesmYVo3Cp7UHaEQQPfPDXNCmMfkEE2wjHtEfQE6kQWMqn3mmmb",
  "key28": "3o45Xg7BBZT4zxon5HzioyfLsHfgi9W6wthEBjUk9ufHdKCKhhRgT26wD6sZuJiPxCgxLu8ia6EWgHk9eJEkNW95",
  "key29": "2SwNPVdp8CY2nduREwtkPQFka5L3VSwBRqFyrggiCccGGuH3iXz8ReijCLfTpgtbojD1BiM95XAHWYDNUwtEFC2Z",
  "key30": "4CVxzjGBmQdayfqtuJG7YY8PJP91Em1aPqV5tPxPvg7GpmhsXogdG4h3VAjiygZqW5UoBHrzQaMDoewLocFgJ9L6",
  "key31": "67RfxCaussnBezgkDJ3wQZ9AiRhr6yJ5i2iivDoVDRZEQMKcbKHwEa9qH4koCfU2FVvL6a9UjAmVQFPJFBq1zJvt",
  "key32": "U9XrRk6edqfLSY3sqzFtDmz6kxmxN5JU6RG6kzM1oCWUsUzq7t5rXRMUsfHfJu8LngNF5DUiQyPSYUoZJ9z1c4Q",
  "key33": "36tYzG4Xppncv3p89zxH8TPPFZZntkZSs47SsghJFm4CZ9PpumzjEkV7m5UTDNKMGnKEwGKta9WcTMCQasMdRVyu",
  "key34": "2ytzk6D7LjLw96Q7Z9AMAmSYXi83WtuKt2AuC8gLaeBEyGstnRti3Fmvvv5ZcF7Rs2w61dY2XGjt9Y333JiJ789v",
  "key35": "41TrpkuQgWddtFUWRP6YofzcP3WRFA1XdQ5EEMSBSPVnheZxAuh4z8macvG5B5cZjkdR1XEj7MyVyfgfWu7A2Wk",
  "key36": "5urrHcErZo8dBfpjTcNnMfdRa4jssBM3L1JVXzLgGr4gUURtw3WPFekMfKm9amtBsbvbAAM5nbhGvhCHYsn3pV8j",
  "key37": "yUmACSy6nu2pcJhdYkyfnBd86yGkhbVJ6B7MBqVWcR8xEPuRsji1WnGoQV5ycs3BkzvbT3kQcmw4Gq16AbQa7Af",
  "key38": "2ieihZoUmfJPyGHWWxKLKRgEpPbNay2yrMn3TYG6X7GejtwY16LDQrc1FMFE4AToDbZju7RF5xEZEwR11Edwb3Ka",
  "key39": "EBD7AVUBEYiN9dGAwAWHJHK4tGgGc2oSB7mtEnx3bpGvf2Er4Be49itf4Bb2Qiy61ViedCECZiCACovh6LzevDx",
  "key40": "5UL3Q5GHvuU4ZB9YfmoNg6nJ8s3UBooB6QnNaGTZap5y7nHhRf4DDJgFtyhvUfB8jqG3zFmNQfiz17aodf7ckVgx",
  "key41": "2JXHMmSQJPoAT1WuFiaVCDn1QocQyfMqsxYfyTvdmmLT1Mozsc9HW9G5MvFmrLwdTr2Saa4ZqbZpceNkunaw7Kd2",
  "key42": "SusTNFWfAv17KmFDyjRHX8TcfJGLF1BVDsXqLLEt67coSN6i5D9ATp1Y4W53RDFvAaQcjkHWQJYEDZS6Caznn8P",
  "key43": "2Pr5h1b9zpqkfwFpji1rcrL1gtkaJNDyiNo9Hqbwu6ydYP63VWwJLuB38xMH5gzhsSKcNRHt2AJgRKstzPDVSQsV",
  "key44": "3Re2vBwyRxmBT4wLcPo894iYDQgRKpgzCtXvji6TMb9pscoSYK7nUVi1qGpdesWRza173ioVUhgUTdvaF7j5UGDD",
  "key45": "3CquhAzLKqzueE4GdyzmhCH9cYnW5AT5HTqZXh3rfVFF6DRfhfyYcvYQzpLuEXrEC9z5jnqqL6uHeoj48uBSJP7Z",
  "key46": "3xsxRpXsU6MX3XDCSRVG4ARJQUbaNuWVE3uujbjqCvRMUM15SxpDXdFHq8EqbwrDhoF31zu8BM3RGAKnmy1GKKFQ",
  "key47": "kvo9zvQNXYWPXRwE8pWt8E8w7hKKCa3j3obo3Vw7FS1raWW51TZgxAoetDFmXT7D2SQvWnogDdJ2G2PUAUENtCn",
  "key48": "5WrHpa2YGtZNe7PHZfZeDHBrt2BeXkp4zf1ZQRvM9peeMXhmQQVyKxGY4Utac4N8yeroKVbvqmr1cgtHpWGXtLr1"
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
