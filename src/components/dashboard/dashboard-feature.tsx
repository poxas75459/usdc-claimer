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
    "51XGaHjnaTFYoq7HT3SJedJZzR69kV3UeQULrhwomGHq8jo4eZsYhYyaHSAvU6efB6en9LjubGgtUND3uFeygUEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CM28Wi9HzatkHVVxVd6KqxGcBpfzqcQxgxZhHrP42wFgeWrX8vurBQyMf2vKVSeMrZnQvf66gpjqfLsNZN3YQtN",
  "key1": "pLu9fW3eXAp7QRBZEwhtPXDCp73RVpUMF6DudqQjFZvGWHZUWRCwKiX7zjiU6WHgk9KusfAf6SuudJmemuEfo1x",
  "key2": "dmdQUftCocuEgTZG66fWkR8k2vqmda85EfutEMwrQjc1uG6gVtJeXw6jPWN8esnEA6ccEabWHfWpBSMXPUN8Dwr",
  "key3": "pXmEjMgXEfJ9wzMpHgpAJM62FgertVHY1SZZz3r7qNi6Z1vw1SdptwhtTnAZmS1eyL9iSHJnEYZZkiFSsjHzQ36",
  "key4": "54FfFg4xgjpsto45LDyRPbawkqvfFk6baNM3b8BP9fLborVH5nCzQDLYd8Puuf4E3XexBVkCZ3G3bi2SFrrcdqcj",
  "key5": "4vmxf17CL7eyWuxriRJ6MUtkdNg5TmP1UXqGsrwk98DjCeBo4bcNP85XZyaGgd29c4HhAJbwFMu9GH3bKJ12v6N1",
  "key6": "5ptbaNTG2LUjAJ4UjARpS8iPB4NTzQ1s9hChahvjwwmfUuVfCoqhC8SHoPz4bDgFgyEM9tKcTYi6uzYheGwV2nfE",
  "key7": "3iPqQZuNVoW2uWa79MieQ9EXDyaebA5KmqT4jnQ9sZ1nW67cQ9TWSpdXeKM3EDk87a45QLZYHzUG7Yivgt91xGfW",
  "key8": "xdXQS8scJggv6UopeNp1qJAKapBoLLiBZFxfsfMv2LJobgKjqxueC5jwUAJGX5kw3QwAq347GxPiBm22spnQ1fb",
  "key9": "4CYR5Un6bBW8MjFdaDHMuZxDmtXAUcjsPit7nAvESwPFc2j45n3EKaayJzTTPz499DNx1bFX1N8M8WABEp8pVDUY",
  "key10": "4Nd8ERN2dHooVXKbKpFNEbhb2RALyxt6mJggb5bQWM3GwTG5WpJd16SCHjCca7rjJ8quNSfrqCNd2r4RHnms6L6c",
  "key11": "1sKh3Lm8eYJXYvFQ4hE69QBeu13EHvTwzn8PrPcSvdSkvgGMgA82RKN9Dtw8ytETUE64JaEwazH8dXdAwyg8UJo",
  "key12": "21zoGnsqcHazLubkJ8HUzEdosVgffhJrDS9v5mBZb5eoRC2J979TV7DBNde6PPWM7876ZPTDuiTHkeMxXn7JWYWy",
  "key13": "zDkcmnAjsC4kr9jMYSYV4fQy7BQcjoiToR1hBm183gHHUY9e7gUGzC1EYcRfXf5Hn3Vnfjd3bsNB3Fm5iDUPyk9",
  "key14": "4VMrEUt7hBdmxej8rjyLuJb9tXXq2a4Mw6bbdYsUjG2jvkMRdrmqUNv7NSZwxLeQn9jsjtPiGidJ7MLCuw5efoFe",
  "key15": "4VoYcheNRR477NBygoi83H8vhiPpwXeQ9SmebUgf2F2iB7GBbXjdK2i3FThcX1pLa3xWkVLh9RqVV56XAavhqy9u",
  "key16": "4T5gwanQ8FK4wL1qKXikxP7KVS48thnKzdDTzCPcCf48CA8kdxvPrPbwuNPSKDJWNARuXotpXCyGXTSXMbqdBKKW",
  "key17": "5EXGEnH17bGuN6aSGU3mEbyNUqHJ9Pxfdxqcqmw1ixHViLpT1dPSu3TQb76mSXPWhBVcR9AFwYfpWbAnkPfW8jdF",
  "key18": "2asxY9hpxgyqSqLoTiGLojZznDHqtWqLCJoX7UUhFAq3feG4uxzuHvvPiUHtaPsKx5rYCqdH8JiqPWAwnVBHLDkw",
  "key19": "2tA9jNymw7nzfEt4rtsSQ6mWweU7wRWRmWpj1VfFCgD3wAHqSRBUnUPRUcFvcwUNCRaa3y8B25Lyvf7iijoertEk",
  "key20": "wsiQQrDrmcRUn5sRWqGyXniG64BQVymvff6e1AD3jDfwg3hGG6EEWjHk9kNZ4ByV5BtP7FjQarBJqDUnUhMda7a",
  "key21": "55tezaZquLqxFetUM2qXAioefDcQ48vjJmiHy5pKuRqtb6FtGoeUWrcurD8bdmi3rcyTLwhS8PxJd25yZaRLMLKd",
  "key22": "42x4azpKoKVG4Xk6VkGWpGkwDm78HKR9bRm1X64rdTRGbaNEFU9PRLwQv9fYLdVYyCNemUmHcSY5RLHZLDCvbi2c",
  "key23": "5EMSvUP5Pf1y9uH1ZDdXyZ4dkD98PaU6o1BAM3ckn2pq3W9p8Lhz4QmgK5HxUt8zbde84AghoybsHGftRxZB2UAr",
  "key24": "5YBjMX1wKczJkErGk1Nxs3G9PPzuYVvEUvJA96pi5pJsv67QsenRH1gnhbQBgskHRsLLnba96hYgEhfj5X2fkEdY",
  "key25": "jj3Sk5SXRg7tXqBYbaL1eB5D67sDMgpgEeFjEpJH2anNRTK6fXFsYe74Dm1Qem9cmXPWWRqEL3kpYPgk6w9FNCd",
  "key26": "4p6xt5ApU5kxMUq1Matm4JZyCCkxUYvmkSghii3Ju3ode6eEsp31MGcKjeXtY3XYWkFdtgvA8yC7Nc5ZU4z7RDBs",
  "key27": "67CPB2fwJPM9GXbXr9VWYWk4GwBTwsBpNnSoQXtjvyshHGmRPPaNUnk8U9Mevur7aYUT4wwe2KqFtqNoUWHV54Mo",
  "key28": "4omfiXzfqos61CXEYougBJCaw2PSZhuypFtFWQMVbB5DWpzViTwziunrYErM1V3zaXnujE522yYk9ZsUDx5qPV1D",
  "key29": "2zq7QkDb8Z4uZ3B2zYUr65mziytub5RNWcfFpJQUc4rJLCTuSamSJztBhGfCCtgz4UV998CaVbyDMUndGCmC4wQm",
  "key30": "2wrbVugaRDDYJc7zsotQmmPyBDPZYGcLYEJ2NvxrikkLNsLd5gc4WPV6EW4mwu7w9qWo3v3Mn82q6Y8xjfcemd1d",
  "key31": "HA6Zx2FeA5vjGuVcahmhkh16r3Nu3yHhWxXKgNgYGunqWajhkbvioeaNWoBPUBFJyvAGhbpLdHZgXzgafvZAQzA",
  "key32": "4hRfuCsowfxfgYCMFNP5JWiGjKYdF8Hcm2QDTCTB6fmwgaZkcfcocVz7SQpEYmn1yZfPEjwiYstJKHgLhWufjxaQ",
  "key33": "3y9PHj1JxxLpPkkB2LFA2a8KVHt8wskELPhDyLcQoSmHoUP5rPrBFL7C7xN6EVAumeaefPW1UD3nBrTwNBEcHrKM",
  "key34": "62W3LYv4maXpu5qz62SXdyKkGvJGWZeJexoZtq6L8Zeiw6yqufuCmi7kyPxhW7s6iDnfnypPhpbBHxzfpkCAtxqf",
  "key35": "2b5dDXq75GyBxXLCqY2KtV5bKqLrybVUfEd1tRYnbdbTYG8eJLahPcnEAERxg7vxFfmoNefnrJoto84i7qwNS4Nm",
  "key36": "2iE18Sye9JB94JgdJTCTorVVZ64mBmiUuYAPLuNTqVVFknj44eatj1ek6WsKUA2oPSWDcmosTnMo2cUQkPp3zsNm",
  "key37": "2ndzttFediNv3Xf9yn6bos9iV73meoZF2KAPenxTLrrHPwV1k6BoacLQsydWh4oK672JU2fhCbQcctBGwGRJbZc8",
  "key38": "2GxEpjTotMGKTeheZe5bp3fw2khQWb9XhmD8FWisYjvcrTE1GCBNpjF3bPhibJ1SkbX1BcCZQzuF6h2TRm5BB4KR",
  "key39": "2qr3AQaVo7EnKUeQWNza73XE6PACvfkgPxp4SkMvAHVdRiRyRTjwK7BjjhvxbmgMB2cc3D36H3Pu4c7Ffm8KcT54",
  "key40": "4crK5TtUD7AiM1R7pTZ2VAzAe6mHRABdKtpN4m7edZLpU1kBjiqQPZccERtDQdHN7ZCMdJJuhzynzdeL5GXGviej"
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
