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
    "3dVL8HtaTe6TFi3Txugi8sVmNhiBCdKV4cFdRvtbtxKwQ69LYBf5zNY2wtAvyrFsQmKiWNpCEGe5stLfh9LnJJ9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EP2vikd77p2oWmgVrz49n1mHpM5vZQSjHYHV4aUV4sHvTBmpf5VcETn2G4JxDsDWy3ctvUVGQpUv97x8XsHx3pS",
  "key1": "TsctzU1QMyrR1HaqeFW3gHkwsTiGcE7oizHDTvhjxphSPiMa8FsXS8Bwtwgwy1fiBdSgAe9yct7ydmyhVVjFmV2",
  "key2": "5fGrigfVMsLd99hh3ZkhEKZxzPvWLhQ3ncK3egD4GmLro2vyAxcJd6dQMGSk6wrQMikV2bKgpBDGyBQ2A5LsK58Q",
  "key3": "5DYBXKDoBzVXkvK7xSwfyRviKDoWGbUTXu3vjfzrKE7WvPiqDdTfnpR89kPZWuRHFS3o9HuZjrcNzjDJ4egy3GoR",
  "key4": "3waDrqbCAx6guzGiHdbHbgThz9nuXtyR9ofv12tG1ZuK55tPqSrbXre5LbSVzTiQEMEtNGDvQTVTLSsBJpW4QkUH",
  "key5": "5AmXVMPU4hiU12fRn24rgPq9v8zgNZWZwKf7WPaQMihQRCkEojwBc8GvMLY6LvGURRSQifvDe4AmVCWecGv3LxMN",
  "key6": "44AmPSQM9meSrYvzp2Gt4vWK2B12ZrMh8fLzmMqskZg3QCrUYxUxMUGB8zdammrZW5thLgHN3Fzwbx7HM9JV72tZ",
  "key7": "4nNqf8xgY3ucoXdFo6F4yLnEwW13QNKMFj8YuRm2NaPJKnK88LFCNuZDh4qWjuwdJHeDmw6PC3dURLKFSTqpC35s",
  "key8": "3xe8q6pX4FHvQpDAMtTafe8YdHmtXvE9YS4nVpLDSHoeAoejC3TLaHGvVCp11EK2RBXTKmUpstMuhkqRiLc3zHR3",
  "key9": "z7LJi7wFLhaXiRi53A3yfubLiHKPLwCt7PPSoAxV7eHnYDvSw3wh2hj9FcWmxwtEwsZZGqRizxB7d2VrgAD2FZW",
  "key10": "3nVcxT5WELkXUr2VhHZCLV2V3mCP2G3ytitnSoMraEY2YaTdsUVAxjYcXRpqfCQdFuC9XAMsthngCayKvSWACNmd",
  "key11": "4qcdeY9ECiocgr85i67RvMEBsgvZhTgv6uvW42tNjFpjb13Hc8GBiaEzKbPQaDH3Du49tVnGrCNuWPnshUNZUhA8",
  "key12": "4mYGbh1fSzTBDUnNqbTNungUYkrEunYGHDtBzYX2275QrQWJrTTQSFjgc652VzPTJ2i8wa2gWT8K8CUuCkmFfgJ1",
  "key13": "5RvjmvbbhescpgX1EXch8Y2Zev8Z4ojZwmA5DAKEtNYjbyBQDTbAEQy1Ea9ubVQ27yLLm7Zonbd13Nviz2MfTpQz",
  "key14": "39hSz54oCbg53oiSXbWAcr3oiktwVA4AQJ8d3riGA4o4n6V55u8PMQ7eRzwGCtcrqLfq48YhYLsU8ygZMmAowPsr",
  "key15": "43WyLHGBihdaWsJL8Lck7hLdvWRMnqyKUK1B3mB2cvwzDrc4hPkBDGE3Ku4firaC9hqtG8jskMTDzLALnKCiJk1U",
  "key16": "4J87UwF2MS1GjLKLWztigEwuAbk2QiX8ueAo8JpG6HbQYR3J6DTaGBjMzV6V7PPj9g1NAvJRKV6Zhtd1vZesYWz7",
  "key17": "3c2oxBYk63um1UaiFK8FoZtgvckzRbMppVuxZfDrkQvAq8GfrtDqBn1hBMjAELEjidZLiTHjM38NVAGqv8J8geu4",
  "key18": "62tmtxh6ecwmxmF9swkqLd5euSys5ydSGTi2923aC3UofB6q1TfSgMDEhymXs2TV7SSEKFRWSgqkcAWuPEQE51tM",
  "key19": "5a9ZuFsmvhGXKSUF7B7eDhVa3sogDPtxaj8a8jzSh65PFV4AsvxMwwwhTMf3ihZh27J5C71RW7jxfNZQ1WHb2PmT",
  "key20": "4nuoKhGYmQBLPsXxvHfQC24qopEZY3pFu3LMH5hKy3weYJYQYfrwE9yyBQBXGqtAkY63bEM7nYLxEk16KzBmPdAv",
  "key21": "3ZCukD19A3CpkNEutB6YrDYfcTyV6jp1L5t2f6CuyPvoXq1XD3B8ou7VHg6oUxLor1iitesssWfpPepdbb7XKDqR",
  "key22": "Nodpm5MZmBLvpdcMjpqDrMPkDqWmeJoif46rLo6EyqkEc7RswLwUxXvvkR94ApXKqYMnKVMaSCLYfKyFuwwQeo6",
  "key23": "pR7BWvNrxnJwsFTyL3pCjDmTstLJ5FtcU1h3L4h6RHJwS39f3irdZQTEfo9BWyB5sf71sBSvET7A3QgH9mRCZzi",
  "key24": "4J1KZnxPpbrP8u4Tfv8HpmDF1stCBroikBuackR4vAFiVb1wjB6DNSPiQZzV3AHaPRedMac5kAXskNTPcq3yqr2c",
  "key25": "i769PdK6gkAbqmLDjzf1UvctgNboN93xSmDMuJhFukZGY4R8eGc3cCANTjm4YY5YyRZbWw4gkQtepmWFp1sRHvQ",
  "key26": "3E37pABttsWKi5vACTtGr3u2bKpY6hKnVDFY3dc5Rt2J3WTGMLmhkayR4DhD6m52osMWb4K9EnTzuhK62npZ1pFj",
  "key27": "2qpCcTPGTed6sDtqgSKn9RY6Y7ua63JdZ5qcW4mbBeHR7JxjV4LJFXE6BJQD4KhQGXGcecfhvkdbCiVuvr6V3WFh",
  "key28": "5HtJxBVGEnD6dcz81sVoMzrETkDJrPX3h9tNWBnsRMTrrRhFLXwMX7oLaspFzLZKmmDK5orVZG88DwA631PGgJrc",
  "key29": "3PZQBWJXptVuuETfnFvgXRzLWfZisY9NzTtywoCmme2tVkwQHvoCU7p8xkacDKcHYimbk7Y24JyoX2aJY9UGcnXr",
  "key30": "4PhRwne6rV8PkNFFnFJnAViFh1i9B5Qt3PRb4sDhEfCQfhpUXwno55xfRYu7E3Rwnrh3PLtFCxyuxcgMSmsR82dB",
  "key31": "3MyJJ31dPE8tgK1wvTk2erziQG4HfoSjfVP29bGB8F4dSVru4PSu6tS3BimqybW1h7rftFqYy2wa9XWvdsQFFgZh",
  "key32": "9BosesTsrqi2218fAS5yj1mRES81M8iryttTq24xfHakvvAv33yPXX5SQ9JjLDRKrUBNEbanVRjkHk8rtx5rEyb",
  "key33": "42ZtBPhxJuw3Mu3Dds1rM584A7ZHdX7cVbe8Csv657eXzCC7HtuPVXMCJQp3MBxKvA2e9VZ5bCe1gpPBJf7xarMs",
  "key34": "4khcwUsNBWxozHHiJj9twJNeUf3oKPRuhHWexiPTQyQjbWDtcPRPcdjC8GuTPkQh4S13JCqCUteysQrWYwwxsAAL",
  "key35": "2BHubX45P1f43VHABnQ3RtDWpmaFkSrR2ncdCbhAVN3uTzjaMFhYfSCELjkkdG4Z3US71MRcg96cWieFhyZ7KbDC",
  "key36": "36VWzzL8eDVkcBHCyHFw2RW2q7VrCnMrmbdvr5LyZMsMhpiFYLLmoCUhMF9csQpzw6MNxwcF91Xkb9qgHtB7bY7X",
  "key37": "5uKcL6jdQiwh4V9du4Mv6MV8qDVSt3TiWJwE8DhqTUShq9L4AjnGBdXKbZDqWA2LE8grApMjaUMjSGdoTDV9BxLJ",
  "key38": "4C193nCWsmatRNfM5KFfNnNiCvPCRGm61nKwvnVL9Mp7B8hGaujCQ61rzHbmp3BvYyWDmJZDPNqzacCoKuKPEcsY",
  "key39": "9KTgH6ghegvCvvKGxkv8jjR14RHhRXiiPdLGLFnbU6xdgjiSEneqs48WRpyXRVscNTGF8uHvbmNfFgEX1mKRvoK",
  "key40": "3P6VKr179ajv9NdNPLGTaqW14nnyFxRyrMb53ktYk8761KS7AxDjE2ppVvnj7jsbozVEUg1WV1tvtUhYZ3RmshtW",
  "key41": "5DnTGQ6nnJGjtdwDW6nYk52FqmeuSR37Jv8ohqnGfP7TzEdYFYGbq7V8j6994x4VzsoCKyTp94KCSjcsDXYJLK7N",
  "key42": "5P7Z7qSKozEhQfATKaEKUE5YmPG1QrXSBdYun1uypnPU529ZAPYXipNiNU6naskQ7jCZafaDWRcH9afswpxWvNjg"
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
