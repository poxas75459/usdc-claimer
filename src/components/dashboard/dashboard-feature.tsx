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
    "3SoDnU19w2V3it3MNLekvwLNcteZZppRRjn6eUSDR7swcviAU3haRf1aAuQ2sYZMwC83mBj5bXq8o8KSDbuZgWYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YdnFqHx4Y4CJGWWQw7TcHzND1WrcVqWBdjHqy31pSEndGF9aVZGERQSgawiZTWgAuGMaVt3eVVNKqY5zzvjeBwd",
  "key1": "56iqJm1niUeKRYsitC6KKdMSpuwr8bpKBKCDwYrH2mtPSmAKkioYpTZPu3NGZkWzLNn9jXHj6XjX3o6uGEAqqoGH",
  "key2": "48gzfCxREMF7MDcdsFCwnZrU6iNDgMmttVsxqd4p6ntyyS4qDhnqencCsA56Mgb3rioNTKUzjZNscPf5JBLYVtJx",
  "key3": "ddcvoPkKghdBaXSBdM8toEKrUxG19AwKnkVT16mkXHNpi3k7uFNWP2XPT1vS3KF7UENFY81NtmGCi5Y8aKZxsEj",
  "key4": "2y7HpP3WVXUsHJ3gdPbwHk7gU3Jq9eu1RFbDZGxS6dD6gx6qj2LYmU4qtjJQrDN7HD4mDY7cKBTcXKhnqNUk7R1R",
  "key5": "MoR4pycoiQYxbwk8NLyXZUY6QDVCfuutxezbVsWz1VAwQgykZpiZ5svXqXQHGYc2t5oFPc2qRSo27aShdebR4sY",
  "key6": "LbK9Ua1THWbXV7Xatpt4GdARQH3nERKdjin4DwbrqzYHS6StE1v3FwAVn2iKivcMDZ9RrAbPBrao2EUKd1TYpbq",
  "key7": "64icgGUxXcPZkQohfv1E5Wgw55mv9S6ouMDf68ZxNwTd3rMD8iqXkgFdnHE8etESV4tgf5K1wGLduSadDWSiLsQu",
  "key8": "XakbS5U3xyXcDWtsXNrvyMtsqVECz5Dw7iThXj5YncZYbfuEXN7NBq2d7bTTcn8CBTiBrnm8uQWmsAjLEtUvLPz",
  "key9": "3XhPvUfrgsryciRUcpT5cgDC1vyYHnsu1EFPtKi62m9a4Qtzp5hfZeumxYwSRG7FtUUWPjehCRbL3ddQ5hBjCUh",
  "key10": "31KwoJppmFCrxWJz4543SmLumU8759JVbfnJFQQYYDviWZWA4V7LeCfCad1sKK3TjfBG2HjiAAqYGVtvnAjBigSi",
  "key11": "a5pvQPuWJMiUi3MHF9bsUD4qn98W1Zxta8qFE86cVDmPWEHyz1bVfFc5W2x8Uuc1m28pMg5a9g8SEDo3JDncguy",
  "key12": "4gnAVnDfxj58CrRWfXhj88U6st1q1BjqhG8g5xC6YUCiG4VRUDLCteCDgHiMfTZ8c6rtjB5SesDaJtFuqgXbm2kF",
  "key13": "479pV5ryKRRe6JGGTRfBTsK83vZNiUJitru7Tu1cPDFjndukieL22xcfibnMjCrXJsKzneniruCxDt1WNnnfFUwG",
  "key14": "mT43DSF7bQUaMeNWN6Ks7k6m3HYrVzgFuwphEd9HBxfxgyTDBa2zFhmvttbteLXko5bS4qna4V2DFvPwda7oJyG",
  "key15": "wPZbf9DSmKhvZfCNUcM3J2CwFvEBUkZiS2NKASxKjg5QFxFKhuRA6oCSVMusjT5MR4oDVr6St1fnSjwqB3b7LiD",
  "key16": "MCzuAoKoGurrT1H6e9nMnYJ5BzNRjmHNG7vt5mo3Gdao1ewognAhgLkGaaUGzzVnS8Jpg3YoZTkF2TUaqUCVnz6",
  "key17": "L8CYW59BaoXR6NPXGtm5kfHoohgdJs4nTDjm8TvLMps24V59UvZ3BkdGcXTkWHMYncFLiguRsHLtAxHNLsk6s39",
  "key18": "2L7K7ooRaxcX3K2F1P597igNYQem46XUWXiANrRpofdGLNsx8kRgc1zEweBYBwJLa9JSjkdikqRR9WBnVEHqQNxj",
  "key19": "45JzLiuhc28hPMhwqxbC4XbBiegbz2if3U9D3BcsBQ8GTBM7T8j1sM1fe7t7N3aFF3j6ESxpbtT21bMUg9Brmect",
  "key20": "6498GcDrYL5B5RLMo2J8suibDojjfcac134H6oRXiyQFrb1VxXj6N5RnvSizC6tNZRuZAaZTUd736svkmtkG9RGn",
  "key21": "3sMQcZsPhELjUPUXUq8BZyoXBHnD6aGcP3dwZYC65W8DPjFWxRSJt6rC9E7xMCphf3MD3yxm55r2vFpPH1qGNPtA",
  "key22": "4t9wiemAKf7VEiSpaM2AaV5ZyU2QsEhuRjnkDNMSisVeSjdFjeTrmwh6e4UdhRvKCkVYFTKcKXksFvzoSeNkgc2m",
  "key23": "4KurutegXcvSDWUVpqDB1p6thxRXPMaE22M6aVS7hP8jNg1TNRhprUYHgLB4CdevhQqkJQ71Vd9Dx2UQ4fHps1LF",
  "key24": "4AqBVWdPoVYXEgxfcQV4GKUKkeZd4SgM3JUhyMJGqPdD2xgvtzRj86yv9GpdZQhrv2cip2H15TMuF3bgBRM1vVmM",
  "key25": "4x7VozDk8SWFaNV63qN8QAhMWUYawU26j8PcQYsm4WeYjVCE6VqQoKxz2cYAvoJEZLf7BhxqZiwssP3ndEVPYw5M",
  "key26": "4DxmKhrmFSaCnpyySDQtUzRJqeVhtZ3Zwo3NdGuBvX2vzNkEBAFP8Eu3PBvMyViZaS7yvNPifBd81y8Kv1BTmQw6",
  "key27": "2PvboohN5YXc1MyY6FESf4HhzEYULcTyNwhrrXrmMSAvuY2EGrrAKeu5b1b3gR2y7KbFJSdnNugkxb1Q184A4MvB",
  "key28": "2ae5ZsLTkdTGmCHpE8uHHT9rm8yaCG2shGhunR3tTFtFkWNopT5kaJ7pJnhSFkk8Bk2X3EsMQDJpPruu6yDaSFae",
  "key29": "5FgLLHj1QxaBLjB6aoqb84TPKy2uEEsvzGKkX1PPKhjpPESHJDcJTc8RKdrDUhbjQrfo8tC9w4UYxcn9HvkwVNFA",
  "key30": "JfvtcAB1FN8R6MHLauaxpwzksJyMrRFsX8UNZBS66JttBBjs9iE2zP2wwmd8WJrNSeuowsHMhWDYZDKwbnAfj4G",
  "key31": "3QyzFyrJNhSqoivU1ervHh9f4vSARRcQdqGVdrLtRqCXDFt3MtHxikf3NoQ9oMyUHSbhyFdXTc5MisFFsLMCsTMB",
  "key32": "5FSvBp2GVTXjbQ7TFmUFR4CofTqUdtYXUcvpgHvrxZXZUUBd6Q5CCojvCqCidbnsJeWfxb7AGti872xzpR6seffb",
  "key33": "4zzWAtBbPh8jF75tPR2JtNKjqSvkEYHUE3G19Et7A92a8vp6CnYJD4Fs2p6DKSCYkrWpZp6QAQakFbShtMfZBjen",
  "key34": "4yHDn24orBcSfXgttXXRkeqcV65Q9MJrLxzC5tLBCuSgFBzbAmp8rtkbHzH36rVLAD2ux5cBuP7vX5zxYToEp6DX",
  "key35": "57L6np7P6kSh51zkThR5Q7dQhocTnVUCBGkozPRvKRgHkM5Q75AGXRy1VGKuvT9xwEGQ8Na3PcK1zC2BFmYpgpqA",
  "key36": "2uafZJRkqzCVqWWvooojVukwYe1NLe5WDBmhFgCs5ADTGbRqiVfBpMDk7voSEtDP9UGZWJpovfYWFbre2cfeJQxn",
  "key37": "5pBKgoSqcyySZnAqB7YaJ8fb8hhU9Gvapp1KuziBz25DMbZboDKKXgsrSpxkzuR7jRWc7PnVbdDvsQiFP5ubR946",
  "key38": "hJCzEC6st4bZPUbB4DjqdLCHnjRj8WtAjSHJcTnBcrGX5UTHCnmCbgAyPDNHirz5Tj4Et873BTF7jUTKWU7HCMu",
  "key39": "2t6uBPTSvy28neQ16qtK51dyTCDFuBnrGRq3j7ThJDd1DVBMr9vfLZxEH8zkp6XBREX2VbGBQG8dVYo4f3DWCroh",
  "key40": "4Cdfr6dSzuL1H3nMbAYTh8BoWnN4bWJ9kqeMngHwyAqbnxnnc5crDnWDo2nww39v9iAMEpTqjTR5rWCTbxz9yk7M",
  "key41": "5gt7pssXcy9UWd5woPXrL4UK2re73ue4tVjSNGFb7PatUXazUjCnnSWEeEQMzMz7B3C72RPCLwxJThvg3gJzfGQt",
  "key42": "35XMTYr5DDPASWkNCuCRfYz79jVu3SLZjLfuE9XzpNH4UviK21MKUD5FVusi27sTzu66tk8cxSSa9BPuy18EQPJD",
  "key43": "3fkJDkcbmP1Sx3WKM77mpcoeVFF95DKCtnUHSngZ7nnFsQ7dhekdmFaMxTzCnp4faEYwi7Q5ofbjsiG2H12cH9jP",
  "key44": "2bRgzDUYLuETNDhnqVFQwDS1nWta3oQ8UDKh5tfcdBxnCkaMYDdzWXV9Zg6jbm9C2SpVBYEBvK41RDUSk7imxas9"
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
