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
    "5NpmNJGq5iX4hQhSMqdQ7QBY8n868KjdNsXPRHZszABJ3g5Mn9KH4p7jcoDwrCJdnNULNLgL9DoynFhodVFvh9Pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xMV1BUX412JGyn4ymxqLWXEiaQNUmgPKqnhrHNz8d3vaypodt1q5gHwXvPqBuELbnAKUxfozT29rWgKufxotp3D",
  "key1": "41cFya1Sq511DJRKLpyQ3JXYURTDiVzS1ixZSrEbmEu7qBJumqNENBccZPh7Eqcx4A8jDpddNEnaYoyFVy446MU5",
  "key2": "4QcYKG5WqStBpaZfYPzFGCV6fJp2yxJy7B9C27ZtF6iewPRXa6ByaFej8JjqqNitqWd48mT5swXk7PHb5fpWXC7q",
  "key3": "9jPGxgSWK8u33xkRJBJnqN1veDZ1uWBzE4HyDe6DtbsqgU3rvMZ1L97tKzC789r1scHu3fW2KL62J9417cWVzoH",
  "key4": "5yAWq4zvicBtpQZzQpQseSZF7dbRQ4JH8yUfL2hxeDvQ6UMM1hDSuZeoMEy9RcLd7kNaHtSgryW1KxFQPntfg5ub",
  "key5": "5366oWkrmxhseoTr848ycLwPxusfCsizxs7NZ5czB36M4mt59xeuNnWX9XHmUbQ6DRv6Pj5GBMnPX2tvuL9TeNYN",
  "key6": "563qsCdguNHRLNVXGRPkme5L6osMbKBmRzdW2cDuV2m2QfWBacfD3aFT3sr6S7TxpKZQKhe6tRHzs4dxBR4ixFiE",
  "key7": "it1iZuE3FuZzi5Rmyzc4Y8RpDcYYap6eni8sHh32YkGGVUyRPmqTC8EdUo7j4c1b5UpLgbS33r7VF6Jb2Nw9Pk2",
  "key8": "5sxyY5j3rywJYdajH1z737CPqeLgViFh3fn3SJPCds1singbsSzcw1L9r9GZyuyxqqwV8VrQVAJSzCapaFYiQVH8",
  "key9": "AFyLLRqExnHcNs12oMSrSBjyZb57x8i1SGuvu3gqXvjn53kjydzFPGanqM9ZcAKf13ptiNv8RPzudoWWHSuPoRn",
  "key10": "5DWZgd47GGnGNcpMEy7YNTHxkPYAT4bkAEedVRFrz7s3rzsx9P8xWh7bbpuxP2qkaqb93SJVMA3355vskkaS5iKn",
  "key11": "2fA9Kun9hiRcj7qHzLJm5xfdoi9UdvyCw4Y84nC7ewfy1PcBFD8GAZzUwToSATMEz1BJFg8bFnpEhfqHVCfRMG2m",
  "key12": "2XVbsmGBCuZhDdoss533Z5hMKFn7c4qzYbwBNtm1WVJzPaXkuvppv7YWRUwnsTsLVC1wjTi2gw8zL8VBCQ5nhFMJ",
  "key13": "67WLNBTT9XrzX7BSK3FAw3ZTMR8yHNMbLh4SJ3ky7zULHsTepck14WKwGLpm5ZsLnaxevVcCfLUBdYuAYCEsSkoB",
  "key14": "5rrhaztj8raEC48VDPoPbFx4z248zGtev5zB5pQTYyg5rcXGdGL1UMBPf1LAf1kpVbd1iGA3TzVZLEbzLNNpUGUc",
  "key15": "55GFzT2qKjLLEJVCyBoDeT26uJRk5VrfGha5TPcL6DhuzP37wcM6fG1CmBTWhcwoBDBzfm91TmqfLHnSFuPkRuoB",
  "key16": "336LP8rnn2zTfPGxXvabbB63nZnAHZUje4BVmuaFcZ8PWZTy6ZPZPGrQt4vfcQyXn2kLEfwGfGXcH7DXwuDUdv9C",
  "key17": "28i9a5rnkKYfRiABXC3Fusi7FpEyDAJi6T5XiT4ejDcWjav9mq6QAcAS2woGhVEBsUD6zY4t3ybb9Hn9AJ27fAfa",
  "key18": "5Yk5DUZFiSMby7z8i53EeT1tkSwnfXZTHfMCduVrwmzQoFittjttFGe6HQ3ndcif56q8XKuLphcGPSWh5PkCofP",
  "key19": "4NXugrD8agvSVd6S8zBku6NVgPdCxzgF5jLP9uLHf86cmEq2iYq1oxiLvQrUMtasB9cJBK8awXKTRGZ9qargJrEh",
  "key20": "zfeEGEStvxWcgTHS8v2DSdxuPYtrygG6jyed7RN12unsQx9WcruDmmKwDongZGyEuS2Y63UttVUV6gnBvgBf3TV",
  "key21": "4CZTM3qG2AKAapafPhFdkTh6YcxMoATuhTsmk4zyftXAsK6QqQETRwpMZmzmqrcykTHatTzCfY2dAhGi84fUQEji",
  "key22": "bFkPcSh6bsazSnvyeDQja3qZxCFSBEQC5iSA9AzTtBhhRf2jhVZqgqAmo4Y1cjh8oGX6P4bF7dMRRpk23NkSeRH",
  "key23": "pbfi4mbpYnmvxn2tMXtDEY9UeL9Md4cYMXc4h1qXDpYT2QbjtZ1oa7NsGDtgAssQNA9YXpecZRbJSJ6Q3hDcoin",
  "key24": "5TnFCpWRGfE4KL2AopvnQQXQoQeTJEc8u29vWVPdwXA2d43y27uXXxuqwxXjZDXtubfRGZSgyfd7195yr79GeQkb",
  "key25": "2UYtNkqBGx4VWhSoMAk1fvMAf9gGro6q9cT55JzUGsKUaNpBgnS6oGQaHBUqaVsF6qUYwniXguwP5HypHxLAR4Z",
  "key26": "5x5wkhcn7SMWmqSsnEffzoFoE4J1oXWH2Z5gnT9yCsNH6hZT755jSM4djit6guxnUg9T6jECfgABfjBrgVaDJxme",
  "key27": "2QesjaHmjD45UKTjR7VX4Z7S8V8acjDqqykazQAyyFmshV3rmfDfBwRsSDK2YUwoXpQ15YVMWZkzffRGthd6LNf4",
  "key28": "woUK8i3GzVoUeWYJpkTJXRnUKAkJk7419SuHSUR8meX7MbLLkvpJZHNDnsyydLFxAL3UMHQDHABbbtnuzXiKm3k",
  "key29": "3qTkncUCtBRV2c4k6XnafDsHBBkEZuHr4FR1KyEyqUPGrZPBQUhaeF7FwW9UQ5QTMzd5VeVaG1Q7szNzDdZeoKC5",
  "key30": "YbCfUHQuxyc23cbWVMp3YSkGv5J5V4g9GFhRTyj3fMVRgHjiPodQJhecn3vSBAMaJHvEVqoU2VwVbmdbg2VS6PC",
  "key31": "UV4gUTUAGMwcUyT8fGrotvyePhPYTFaULgBJjFkTZXLyWm9RnM37i2B5Jv6JHC6wLgLaL8YLoHMcZ78ntNfr51P",
  "key32": "dxYppqHqUSdTRBLfSPZ65GeaG2ythEnXuHSmxsoi96w77DzSTbwV1G5RXZ5KH5jG1uhjfxSw3LucZhaXv8j4pHN",
  "key33": "2asMeyKsqJTm9czBWykDAP9Mcstk9yU5ikM4yGBU8wFceKvXS4Tfp6qrTJ7XvnHuc4F3p3jutRGU12aEaCsK4EjB",
  "key34": "5vR3ShGGkRNTrncdBgDBtNs1RC5LQtCuScPYqZ3ba6qMEaPLiUn2bLExFKV1j6ChGKqN2RMK9ixQTMhVh9PadCFm",
  "key35": "2z8MasVjTXVDZ7fSNRTwbg9xcRNZLoKVn3Z12bUKAFDaP5U4bYcntDkv42PrDwzbsRMq3pkAScBhEqBLDPJcZZUe",
  "key36": "3ZPPNFWVc2i6fWLt9d7rTyzW8nsarjZjefzPT2CWMF5TiDVgMrttLrSS1ZDNdfNsJJJsmA3vaXsD4J7jiGxuWLEc",
  "key37": "3kvqnN6s7CMSBDN7JytVmtaeXQ4gzH3AVmstMbdTXKWXsQ67TWfVPuZRjZb5zpfJWEyuoL9T2JWy1ZAapkxZKNFU",
  "key38": "2hLMj2hYML8TKwVBRjuTQYcAUSJw1KZ7y32ZiK9uQ845nWeQ6bSwfSxFK1sJ8tEiZmvjXmE47ARQSRetYpjqqjcN",
  "key39": "616YyyY4FbcBkweAambePS2yetwjQNJ7kmHR1dt68YqEoqH4HJNhgJ6oQUzcmj68PFBbM2oaNQNR3btPMDbKfPKN",
  "key40": "2EcqW1zKFLaRoRriWkGLUUENh49fFBbAdZERC23ApMZjUntwE4h2ohno1UHbXfRrYvJyGozMciELtYAJgqdm2R2h",
  "key41": "2TZ6USPLV9FEFLFZK8mT68a2tvUj4aTTg1peA2aaiT9TPBTwjERsovaxHhdDcfRagoZCcAGve6Ccin4xtDeBMtjJ",
  "key42": "HTv1Tx9L8xFck4bqfHSu14fSNxVh32CzWAU1EiynbTwXu6gLBqd8NjBhUGnXtb3N59wcbNvmUq3NzCxwnwtXGyU",
  "key43": "3ZkjqkZgjhoHPAY9TTpCAWaETgmmezTg8vrWdmeXueezzjC26UFZXbBng8DbAXwaVoyhPgq84bbNVVYLBoXjd961"
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
