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
    "5rozEdYk4WTHYooxpLwYwm8mkfL85XP7YFxCdQrnppfYgyS2nD95kR141UbdMFbYCHhAewthYs3Qe2oo61qqSZ1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oz1LPPfatTR4H9xhgq8pusztWXzduDW7MmBMmfhjuLd1rHsXfoiM9oHGGjzwqYb8k2wQTULXE7NcT2mVZhhRVBG",
  "key1": "5bzvbtJmv9CuMDXaHNyh86MmGc4J7EneNuyJddwkJzfUmB5SfD7vApWugGtfktmKmF4T3V4knhdWmigS2qwFi961",
  "key2": "43WJQWpYoHuaKgcGt7qLnotXFC3Cdgi7jYPTbsrXxa344pEMpasF63UHbQz8ToZxGYvj4ieHjH6cUwSe1siwChuk",
  "key3": "SroBzzCqE8Poe1BkfqK1HB97qY8gqtrEAZ5CV9UKocZKRNBkr3NS8MYWeby5AgewH9GZ4TobDhraA1iwKFgTEC2",
  "key4": "5K4PEU2mLdYcartzBqGE9ntgRNcvqgHDcGxQ8wUBGj7aRzxwpFj7DEd2GCexzBJe2NFAgU38ydSM5Xtjv2Nn4Va1",
  "key5": "2Zphny9g1qY7N3PYnCZjtc3JR7Ys8LRtmf3vrotpzwyNDkuNDCRTfZ1Pk68xAR37bzpmvjTb35uFXcis1myHWH1q",
  "key6": "4vt1bY4571SLUA9S7BZXbH5dBKW8z3nyZ3CtgsfmB4EcRgBV7m3HdG9pZdGsvBjh88eBopmqTaTLkA54otwnnFBp",
  "key7": "4XAwFqg8FgeBt9Vt2r7b8uNB92MgiDFGt5vDBNwN4PBXxxpg4vVZsNiUpuTTmXpjAn9A3jaWUcjEQDTs8tNS8eTo",
  "key8": "4rdrkyTUNwUcJ75kyDjwrW5L2ZQjVFURsSZv4BAyhSYcDa562bGcoK5Ba3JB1gCtbNwDMCGaMFW7epD4TXdWPb36",
  "key9": "5P6D7jeeTBttpEdHBq2oNnYi6BpXBpDdJtExUNeTNsvjeF5M7GFeowZJ4qoUgaEP31cxDS4sqranfgcdHBjCge9Q",
  "key10": "5qmETiBTLHCeXUEwPH3dSV6wCaCN9C3CVgKJGvK2mt5Y93FYBCi11zjvgctWvgA7hxMgmT7x1q1UxHyoFqQJ9Y2H",
  "key11": "2fg6dzWXwNTjVw9S9HhDsSiH17vNB7vtsnzGsWp1ThFPJ6MWjuFKUEcmkLq1JYaSsMrJJ5mQj1PKQ92UbQhuc7Sf",
  "key12": "4qDwqAxsJwqUx7FZ5Sjz7cLuA4EwVYKRNGoU7t1vNHYMXSKPY5tdDWdAQj4zingnEpnDEJxMzQg9Y7XFy1F7roiM",
  "key13": "3m2oiK1voKHJRtV8htdtUVS1ysowKsrPLKuaa92CMsuaz2xiXfMRGsrWGYgQ3eYQHmycaFSCBZ11fscYCVw1iCcy",
  "key14": "DeTVSVtKhuWRqnrLryvWQ8gimosjmc3GVVtqoCriv9P6vf7iVrWgTZTz5JG3NFz4xaiT27VQuSSxNAhGuoQLGcQ",
  "key15": "3CXbMNwLJCmWSapBXW6HhpTxQAwwDy9ggkm7a8wo2Kww7W7XGvvnSMUVj6hRJ4K8ANWyMjKuQViQrH8QWAGb526m",
  "key16": "4tZxAV1PBJb9HTwW6wDpsgA8Dx1qeB3WKQPKyaDqJZTDUWggUZwftp12oUsCBdsEmownkbkDcWeRn5EioCpJscAN",
  "key17": "37Yz7J9Xw9FR1Bev2AniFC4Rb6sUmA3iJQwoeKUKB6SdVCUQTxy8wGY4nqy9tSiokVjvc6RCtAWFKo9a4ToUtBsm",
  "key18": "3B1c59s4Jo8bM4mwAkEZxnvu1vsvRoQLya3ETwfvc5CG1cB7PLRi1N4FqBbzTJRvpVSbVjejENP1rW4H4dmFoDm6",
  "key19": "4KQ8wnpmkgHmFEcJR6ZKq58r1ZHX5jCLs1V9DhhoGzpaEvjMsrV5SBydTvytJYp2pjrYadiG67FYRz5RbovnhS4W",
  "key20": "z1vke3oFjitzv7MagefvkbuZrvs8EuKmyvE2YKhiybVxnqCNkf9Pv1ZcJbmYuVs2RyPgpRNX3ZWmW1s33pJ5KMd",
  "key21": "41hApAzhvvde1gbuvX1qWRL9YHBv8HEfqQDYYq8ZhtuyySTUjC78uFtXisnLZmLaNrmk6XaZCMwmKGSHSasutcg6",
  "key22": "3EanyFMU72u4Uc9SRCGura7egtFZm15NV7bv6vxfv4i5xuw51VfDgTRXMg95CKJzjYzcgXXCnr1u1bZ8FgixaX96",
  "key23": "2ZaQvXYaQdXqRjZskmgHHaWfjX4w48XtJC4rjYUedazDM8vpb1fud6LTj2Dn4YBnENgzJ968ZXFzKeKA5bshtALN",
  "key24": "o3PZpGLQqMLiovLXPCTcD83fkcrn7Bnc5uEY5gimHAJ3yCS3LqhSXVkvwjhynpnvuE8HUvC5ckw7UNM6UVS98LZ",
  "key25": "3U7MGkkiCX7gKyiufaEb5Qi6c7vgCqpv3iK4oaokV4GrEniE3us3eLuraFyeatz9Mv7uMyMDbTn2RPeGtxnkbdy3",
  "key26": "2hC3gFLMAQ6kYk7KG7nBHFr8ZCuC3u2bJsX56rtn8zbTdzfwAs7ihhyif2fvt7CzTx17E1qp5r2av2w5fPSy855x",
  "key27": "QBPJeRfnvoFHwMwPP7My7oznajKU7nCuL9caNhH1M752SGEZRjd8LdDWU1ReQFbWDc5hJtYh3RA9wWC1JUE7iEX",
  "key28": "4zTUyK5VpuBbSWNhiQmUCLFLe1tiy4PD9rrkBtTgeHGYneD42gNT3gTdkLoR91c6vXp3gaeFmYaD1skXr6h7Jefs",
  "key29": "64V2UgvEh5b1nQ8HZiMT3fgjLMw9wSqkbutBTPftHtPURJqgTkXgxCcSgNAquk7Gu97BZyBWzYd7Wcmtub8uCpQ3",
  "key30": "2LtG8S1KR2iN88Pd7SKnBa2i241BFroFvmemrSitenVqKuPFqDpcW5FqJuxaRUgVXH5uBNvvRsjFVgb1yvDzXvqF",
  "key31": "2Q8S8H8b5HJSvpcS4fBKdsA1ymZsgLVXB148RU1PVLZQ2HPaMob9VKBHBNXctQes8y9RwixktTawxEP3NV9BXg9w",
  "key32": "fuqRyj4ftZ9ZFN2cqKTjbZzD8mTKaip4WUeHjL9TS3brcStZ4jiY192cAzc4thRv3v6f8M2tVm4zEM2KxiQrGzd",
  "key33": "2xj8SZYRvvttmLcFPBX42UJXwZhqYuZ6eTnV2TCJXDKXdQ3WGGiUE2ntbs54GyfwptVL59rQ9Nhf2c6dCA2EDJAn",
  "key34": "3Wpo1co8UKux4UaUmFLpw7ZE8KdfmdByq1KySzaqPCze9bxQ9iK36RbwRpJbmJVzQHHJ8mVc2JawaUZ7SY5Wq4o2",
  "key35": "3vHMKguEBGWpeA6JooJYC6tLtm8p3TTjoCnXbYq1MTZFCrXNPNMM7Lv5neZzNYZhoBwUE6o3x4AUzAdJ7Bxsq97n",
  "key36": "2tUFBAtByBz5cDfCScCty1yVs5gpcE1nb6jjNdP4oXSVGDj9gwXYEsrzmn8LqsSfwFJiT49Wp3d6QFDM68acWPmU",
  "key37": "osGwdovT8ngjFE2LmWi6rrTTP9ApRjYNadodnuzwdoDJEnL1ui1b3mcRAZid9fvhviMf217UUgbm4ST8spntfHa",
  "key38": "2XYPm3SLevv1TSwegci8hTUryqmBjD5Ur3NFLKKzi3YJNSEaLxiDZ43MTwG66BNaCKP2ZUwY5Qzn81v96T9LiVqz",
  "key39": "4Kj9v1MurGtbjwMU2TxHwQ2w9yXbTXSFK8y8rcvh4jjwCJt4dSNuomPjBpaGebSJbqyvsgQvnLEQdpSqF5yQKzPX",
  "key40": "4ox4ipqa5iXf9aQbuAQQqhsKFoJd9ipuyRAmQmVu2NY1D5b7Mcw3ZcTHWvPdaAoCEnD6W13Sd47w24oNuJ7CBtjr",
  "key41": "5DmSrGpWfvJrjPRTfe3moZ6LqDj5k1qqHrVDBSS3EAiXCJA3PmsCXdxPEbfaywYYbb7pxwjq4nyqVZcgYo3ApWYB",
  "key42": "5dYeZ8cRmNDbZ8GmnJwLUkNqVodYYbmDX9tnZ8ouH2qBvdT2yd7vB8GssK78vvjoCpLHU7oFvJ6FvmcWVDDCZbkt",
  "key43": "uKN4JGvMayKyGpKstgbb8iB9JhAGSxtndhk6YbCNccPQyAhYgnMFRuM4U9m88yo67f6wXgpmmUy3nKZCrzvcVD9",
  "key44": "jh9zEtVTXCq8rxbwdVHry3WUKf1f5Wkh9jkTf48FKMz6zBQbDrM6NUFwkge6A7oYuKgUZdEJdiCyhTSuxoKeFWK"
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
