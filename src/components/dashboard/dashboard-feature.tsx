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
    "2Q88eM5KYTvmpjAkgT5ULSECVHjoBuww2Dhfhfun4X3Yy7UirMpP7ciRkiEcQ3hxVUSE8QTN2X1MhXsBCqTsA6x1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A8QTyDeD6v52EotCFPSBU4quFLdPdB4RQTVxb3dYXWobuGK5E51rmTRRd3xqrT56RYv96X2aUFsqnEweo1BwPFw",
  "key1": "4dvAp9mAaKDzZiYNgCt4JnT8EkLGjh69C3mqyyS5bJqjLPuQagFxFiPxm6c1pNCtfD1HwtSBqaqPM3F5gydj2Dth",
  "key2": "4oLwvFqNi4GDwY8BC9yneK42bW95n1X5LwXg1rBYoXrn43qeNvVFdgqK6Sdi5Uicpw1vX6P5KZ6iHLB9UbkVFjq1",
  "key3": "3SwHWx2NciTY5QatFVaZCp7CkXV5avXnp5gqCA7gzbo37DWV8GmJQzRVRquQ6VHKg1yR2inuuV1wkWh2CnKkBAEt",
  "key4": "4gy5cTi9wCkdQYjSfg14hYr538g2Md4AeJoUkjJQXnZm1XeJZea7HAfh8HawZpkGLUU4sS2DHarfeQDoqtEazFGC",
  "key5": "2ufyRw1qaFAFgjRStAXQi4epvEtJV5CPAyxaKDdaKBcCEebF7Sk4YMVupZKjorQFWLwvsU7FwfBBd1QFxJjMWDtT",
  "key6": "5bK4ijq4KkW3a2nPbeLnoyvdZS7vTnSWMXQiSuVif86CyjaLZ52zqxu8ypiLE5rJF1zrFqks8JtEUo39nCJ5StoJ",
  "key7": "5KH6CN92J1X49umi38zANwHyHYX6qm9rnTaX5PKaAQLS74q155yqpF1CvkBsvUc7NPv7iANviubyq5EfpTr6aJHc",
  "key8": "63YMeApfMotBfWqorgNbvoBeHREnoFCzm8vkehnp8Lys6DAK9w23hy5pqNbgUd5dkf9eTrxJxHtdLR82QvVT85ud",
  "key9": "3sLi69t3FhVLeJbQqQsoeryAnsz5V4gNJ41u7iYwjw59BhvHnvMjikVkVfawDcphaf4s4gtt6kbsd58qYF31PmEt",
  "key10": "5CQ3Sbd2SB17HHrRzXAnDoHdcVv3djW3LrRVFr1BrRbuNSdPPu3BWNMcTH4FLcsEH4gw1N4QrdrZ3x4mejLB24V7",
  "key11": "5Qy7A93kE6MgkRQBVU1fWMLGsVRsmihGxAXibfMAdQ1nCXZ6xBrsANBqY3ZQ32gEUpCZUd3sCnT5ZsDPssjh1e63",
  "key12": "4NgH72udBMksq5RWs5cFZQDef7fWm2eEm1faiN6BJX1MPJUtJG3refS4LkHXJPgrVhxVpkmFN5HMmjq9xPFSR9Aj",
  "key13": "kEzfvzKvMDzVeYpmjt3JwgwPc4WLg8Crgy217wmDnhvEwT51qsypifmiKNgvu3XuqyunMmWqR3sXJ6jAXj9iKwA",
  "key14": "42rHGXZ2oGU3n1CNLt7tYJTTDaREcoPpFDjujtGsqZibAT7niyagjJuJtZikFLF2LZzUbf5Hw9wBX8LsnDv4Ne5x",
  "key15": "3RNkJbBbotHGaLB4zwj3NjMbJ6hkmFPW1GjhCXsHvo57oqGLXqqtTytQpiLdrwi5Gmcc7XhVtGGfegS49THwuJBU",
  "key16": "4zo8MQu8KH9vQ625dCVc4EKragAYBZM9HDY83XHXo17178iC3Sr2PtgXXBaZhSd11W1u5FcWHqqjEoU7orPRJJcF",
  "key17": "5pYDCpTuroAJgUw3pF2yERA5dJuQViFN4yyCQ7uPvnxfusHx1X3myuN4gs4WSqtyNbKNVeooAi91GcgMwNVngerb",
  "key18": "3263sjrdL75PFjo6BmEgMiod29zwJLaxq61411rUt8ZmRp1UiRupgarDvYddTd1xz34McAbQv3Z937JFHf83x2Nh",
  "key19": "2k8wEPRyqkNoVAki6Af2bwPcomTFZCR4UgDhhnuSd5XmuEuNJPcaeDpSPMvCTHzM9VVmH1RxDk1StN7mACEou3NE",
  "key20": "41vMG1LfUgARwzTSoWZLpfVw2tgdqMShsHyaL43YygHo6B6xrk4fyGH6WDdV3MasJ4qLxnh4CKsdPEAeaJFgjpMa",
  "key21": "5WLsdK2PWhQJRuLqvDvZdYbUnJXZ7Vxfq6zx5S9Fcs4bwZPdAWewu3bUHtU3C6iyddcyoUFXiH5cR6uSXHqUVC9Z",
  "key22": "3XyR9tUbfsWuERRrnxxvGcCiM9Nnj1A8j4xh4YoDJFiKnwEo2hLg7GzuFdDnnTqkyT4Nu8shvztDegHQskAfD7uR",
  "key23": "49aciQNphV1z26bLVxJFLoThYfBD6gpgG2jno25CbV5Utjnrbbhtz6q4NaqFgsYmY3J9Bo1ixkMRA12JkxLqPCSv",
  "key24": "HsRHW874swzUT33sbxJkaGxf9aQ1PD86R7J4cjtbMckkSh3igz29yCGaVkhGsnGLt6bopwz8hTcthcHjAQoCLNL",
  "key25": "51efCEZpFZeERJtgiwD6KLBzoRdB9pLumzoRE5smiWdMVMHXM5XQabgoFYxhTL1SJ9MophFwXLmawyJkzoFKirhk",
  "key26": "4Ybz8CujLoAQJcKsraBVzzRSnSuszN946XS6eGA37iPKXSkdSsdiA8QteDtwNJsA2AxSvz1vDtbauCoDvnuh6cz4",
  "key27": "5XE493sBbK9wee4sBmuXqkPUvRxZ4jJPaY3kGthVgp986ebPGLAbXk79orSzjVSEAPc3rXbZaAL5ZnzWa3L588fq",
  "key28": "5yRePArRGB1BZeu3r6yoC1YASDjfXDYwv1GXAPmH4RKVKg1rL1bqh9nGq2cEwnVhBEfprJueyJnqV5dqwqeNUgh4",
  "key29": "3QzvWiBYwo256vogMspKD2w3KoHUeX9DNqp3E8vxYTG2JBpoqFioLK94DagpuxYwREgeYTUUBeqNoUfSrwZbgZG2",
  "key30": "2GcuzEQTjr2UNHgcumep3oYEqoSGfaa16huStRXhi435LaNJdGGzXeu7Jrggjg3FiZVCwCXqQ7HrPUCgd3QWyNmv",
  "key31": "4W2jHDTHEbkG1r57kpQzCLdGjkhNHC8BWaQFbiTwx5eLFz1Jhfoea47RDhrEAnjssGPZVbmb5Y64Wqnz5B6gv3Um",
  "key32": "3mD4gz7aMYWzyU9M9LbJDJmVqzXeLuy8gvdzsot4BHN59rVgoSYDQ5cT3nR69VrM39KrLkbeXVax8Lbjvn9oTmMc",
  "key33": "21WaNWuohQD8AKJeW9x6YFmkyWcxNDt1kwyVWj6SQNk3WkNyU6pgPzR9QjucQwwZAWyqiUhdaKD5h2hGkv5tBYNC",
  "key34": "2LMVvdJYjSddZvu5tromRLq4TXdzS6EzYDEoo5Raj6dgoLNtkEjXzLtyKYVvZefPBhq5zYKUEUewzJFZQAkUTK9n",
  "key35": "2G9ouBHgrr3LKV6Xg2XarerP96GoQR6vLQF2Y8Wz6C7mogkuAjB1ubd14oFsqSjpEvMZ1e2EUUaszYqckFBsYwJS",
  "key36": "4qrXum8caowNdip1rmAz2HyfrsqqMjQ2dUd1wyENk75FahdYPvqU6cMcHrxQC8BGeMrSatiLCgePZEM755Ejp48c",
  "key37": "5kAzeCh4dzr5XPycgyjuw6pMiiqpgyEZFHpAo4VHnbwXzCAoShRfRUUCiywiL59Vth4hZyrmwhod4pG37vUw3wAN",
  "key38": "34ov8BVpdCtpNsxF8dzCmq6bpiCC8z5HWEEMjz9Kxq4wNp3dPUcNdeSraSAyqf2aJ2DLHZ2D72qiEpzGKUCLfe4B",
  "key39": "CKfUDicsyWuLGaH3ygMBhERBrS71kpR2LarEnw3opTgWMUEZkHewrSw8eatVuDmy2QRQ1B23WMCKLNcWS2511Hu",
  "key40": "31CEhEeRq2bTUKXWsTXf8FBJr7P4Vf9vpiousnoULPP8QYmDXujpXmN97L2HFj7F5rAqfgmXzB8FWwxWCLJT9rcK",
  "key41": "5Fm5bNGZFn9CL9r193s6G5ATVbRQkDMU3UCCw27GwenxH1CjEEYhkgmcy3JcPDUkEex8s5ABpa9BksER8pq4egTd",
  "key42": "2x342C3h8mQWCqmoNPu81SrkENLER2cZAmBZpvckQWaYAUik7BKDHjquy16si1kL4YqY8itGYPHFi1oe64vqG8F",
  "key43": "YnayN1kMgRQdPr193DcZ99ZbGMu5U9ZMG3rbGEDVe6FJ1Yrr8x5WjRP5boLqegeLz4DVWAQomFSSiCm3JxtRvsp",
  "key44": "5pHQU69FkxE2zTiM76xZTKKpsVpCef6JojtrGqZwh7dBm14CHJTbGhP753vmwK3V9MUkb2UidFvwnvwD63r7Ttbm",
  "key45": "xREQy8qqXCo8bsro1Bpbrq3Y3jDS14Abn3DXHQrTdr1cqHL64C26te88PD5Wfcd99crKLQpPkdxJaLrGThbyfy6"
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
