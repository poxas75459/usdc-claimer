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
    "5wW49LbSAkgeNL211QRuqP49Lt1AB1yoVXEiXnAjXw2q4s1aEMeZjgVfu5kizKAggftX9AWR98RxsbmAQUFJx7eA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CUUdgDVb79b73ew5Mmqm56JGbvdt8dYzTXYjMgk9d7yTMcgpx5RqtEPvES2AMr5yA71BQUNqXz1h365xfrivbCN",
  "key1": "mXSEEGYQC3AeLvX2S3z3xXgoeDQkivqe6NxjMdkNuagBGJ9bTTj68xJtudHKriWA422ukMvbibUGdiM5CDSVX3T",
  "key2": "2P4zVR8k4jKVaoNPiBJR8DPc4GLhrexn5bdBGVWPxMu5W3kMcqnY31PGu3hKaPESomxrzv9MGcmo89q2zkbZB5jJ",
  "key3": "22RBnQPADr2bt6PL4jzjkmnE8ChCsviWHQZWQbovRCXDCWCoi8jdzojQUVUHw9Vo9HZEz2ReepnLhTt6iZcDPWpv",
  "key4": "eDqtZAR7NexoMZKrXTaK3qbfuq7sKs3XawfihUbg2YY5JT1KLAxzPehjxTDkCp8zx3SsrHwd61tUxM5U3hL1byb",
  "key5": "4WZwoFWjELdDUvJAQ51SwTXCMu6DAkVnVShve4fQdC8KZCZMwrJcXSgALinXpqQSrwhrqBuqYndZsu3FfruMsebK",
  "key6": "4fLFPfYgjLGWiquFjjnppDDTPQZwQrHcHvWzrXZLR4hVTraWPT9RB2WHyopY2JHoNDZLVcubfm2ZWm1ykKmaCHZG",
  "key7": "45q3SmPjumd6VYFb8WQMxGBi2EhcE9nKMKFrfX8tMMebTssxeJt3e6YZCNEHQTxwuQY4nN3XK4JpCLpfCANzrUgA",
  "key8": "3LZmNn7RPrcLiRKBiU6jLfvPRwVdZ72ySkTiupwcUVn7dTStB9GtoKJNUwWgQCNxDTXMYizJQgMee4qZPnHJb8HK",
  "key9": "5yTma5Xk5RNchNBwguCy6eL6rD4KgUb9RG7B8QrvFYQwe8PkNryVc7rLbTsLasXt1GF1obanHhxkCFAdxdihPeCf",
  "key10": "4ByF75ynDX2gbDZEqhWpKSu8jS9DFBFmhVPRejFi1C4SrxhW39A1TrT8LzGLFKpPfpf9fhcQQ1Tc6Bck11L8kc5",
  "key11": "iLu895f7F75HLgcFbfnSfBh7jAHsXnT2mmFmMRwwcTAdg876YYcoC5dWR2FaujYcnRsUrTY8PDBMJEUo8Yb3RS9",
  "key12": "83iYPeKgoKUHczvFZ41vDeLW3zxeZqBqVCkYS1SwjcMhfZpWcghJbLB4jPDX2KCp89tMBfCzGFpB9eKWJHUzZgp",
  "key13": "4xzbwY4XVwgrGHxeR6KHT194UaxBo3JwtkdcKK5UGpE7CLER9pPfWWJ9ftEWhJT3FiDCf9Wa5BExUC4Gu7jh2fkc",
  "key14": "wurFeKk6ZesHhwZvNrDVcXKAjyw6TTjp3D2hhSbxoMb7wesHkNB4crQKog5r9XZFwj9TQLS4Fi6iBTThX9ocXYu",
  "key15": "7rSATYXHwP7fq4M8dq9AoQJuxjKVbo9H7RkjSyKnZyNpCJzgvT6KRjLn4kYNEB5sZTMefzAd8Q3JDS96oscdyFp",
  "key16": "3JASyCacnEPaxDdk3se439q9WTZEjZxS35iZm45t7CmHr9i7uRNRdeBCXMnuw2mSgYmC3MFHkPspB2ZFHDcFqoPq",
  "key17": "4YYY3b8cDYY9qiyRwfLVhoubdQZdW311rCrSDj3tu5SrSje11G6dGhv3PgRMSb1iAoMUWRZ83Nipnsm2q31bjkR7",
  "key18": "4Cm9YHxU83nnsE1RTTSaUCEcVCojGCBYn3iDFX6LvX9GBDGpCCsDj2TfRR7UxGb6MmNtVTEoSaTBWxgr1G7yHRjJ",
  "key19": "2hae4KjjJUyFdgEXYAucqSki2pWJweViBxfcnLgAH6LJEG8QPqty8KcNXr9GBDjGY1FUm8ncT5yd4KuHQKVcXz8n",
  "key20": "3RQhVge5j6BYRVUQkFBzNEm7UdrakiLpT9YaqQEoj3G5n8YwsXEnLoZ41gBx3NhWaXKh7osVWJaJwtefjwNxKWpW",
  "key21": "2g6EES827r56nDRhrQh8GFV6KbJXJz8udFrzvEJZtvz6qsg6iWaZnB7Cpy8TVbKKFHeWbXwp1gvmzNBHLRTX6ME7",
  "key22": "LefEvspBE1xuchGE3xifXX27e6YHAC6mqsha7mizh81HViT6cyzjbfiYMusup4va1deweuUPRG14faxjDrRe4ts",
  "key23": "SDnzW9FYjzdmq2AW1aGrry3us1rZ7VY2fG1tPUrJHydrppkQoxgAyiRRQj5uHT7Ev7YtzE8U9vXnhQcKLUbZTx3",
  "key24": "5Jk8fm1JMSwiAhLwAeg7ERr9y457qdLZLrGdP9b6Q83RpgJPuvHWv3xZBaV9vqpKnV8dgEknk9cmh8HfvDTSsHpL",
  "key25": "HBSPHbeFNTKYXfWKyw6XMpZC9yWD9ygAQrXRiGCbT6WwHh583mBiDUWAGk4q9pvdPajocffwXaVEwJULeY4BuZ4",
  "key26": "3A8kURgzZDYQT7Puc7dT8PWpAoMswPVWjBwn3dvXJUwdgt5Cksra6dM3KNGDyPawrZcwcsadesghG5ycwSRp4vbs",
  "key27": "51YRpMjCLRF8tLyEaCi9Ho99NDV98isgxKwSbPFkQnVegbv1KpJL236fXSi5Nd2jHobU64qWj6T2kUYc3dLunM18",
  "key28": "5Pwht8cYdDRkKcWqe7fpwVbs8t7P4bSG74DzaytaKups6q8Wa41ZJSC8doUgMtB9pu8sYHMapD4SxLKYFekdSDor",
  "key29": "2tRviGzbrJSe42hM3BPb9v1tqAtqomEmqXiySCji2TeTW4VcqiPRGYz72NboVRqWMBVa3S6bzGt5cvZgyV7MbxU7",
  "key30": "ewVtnLzKCHGhuwZpjhUSuoNeubZvVVV5nifTXaF1f1BDEWmqoZKfwPhRwfzkkYnUGCfwEQ6EZkv3YAA8MUyG69K",
  "key31": "2w5URMSR52R9SkdzoYoBthY1v5dXMbmseE9YVigARrK2pzne2oGVYyk9kkqBzhbHcqeekwjPVPTb6Vu7xPMxPvzQ",
  "key32": "57Qi1RVcZHRicdgbknMeCiBET7HsTgLrDKy7EvwGZc51TKEJuRzXcGftizngsAnsquLzrJCirC9D6cyt22GgmcqF",
  "key33": "3cTdhasuiYQuXRsk42e2BDfRpvc1PK6733BqECCqGGrHn2JhiTfLhZWkBTbnWUXFoAeoVu1H7ScJVWzZL4nLrtEC",
  "key34": "zxpXAkNrQxQ776odow1U4Rog9kuCSTw13LgTkyJ6BxnJdAmpXzRu2T4FAL3hi7ehjmoJXRjKd664qVwVfdfk8Pp",
  "key35": "3LscqxK87yNk9fSMgzu4Ma7fd486zKLuhoYxvDFUzGocXM8raxKtqCHsHje9pegg9ztpwsnH424CnzdZ2bcgcwgv",
  "key36": "5oHzF8rayQBY1Hq2T7wmAH4PeMrSf87KDpEiK65yGXFMKymoFBK6nBDLmELeMyo2T7aG2cttJTDT2CV8VixHB6FF"
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
