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
    "3oyt7bMDeTrQSJAsGyCNZ2qVSiJWzyT96zhVwhXvhWXvedvJB4e5tHBGTV2J17KLVnESC3ngaMvti12AN9Nnp2LJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dRnbH94HiM6UAQ2zhMKxnUgsuVudGwbTBRE44pEk5Rm88YT6qE1zHD8Zq1vXYePw5uWB4CMZBTcKtTPb5CWz8T5",
  "key1": "5xWUVHhvfnDZvn64aEzkYy4n5QWiV9XfxppZBd9q87ew3Y3oTRkdZ6hTe77g4GkxkkxEoQxvZknr25qGuMm783qR",
  "key2": "5qmbc5hsfDtT6Rf9u4gHN2GS8JHkuvHvDkTtavtymd9Pi8Feo9Js7QBbcuytpRFoZnMU3ouQF84o67tvVrMyPJfK",
  "key3": "67q2gSps6R8c9aZhncokrZmwjMCrMhg1mFEvycuDZtfyCNpoT8G8MhRokZwN6gtaJipkEUHVxzYGwR6BVpSWnVEr",
  "key4": "3Y8RbwiqQ832NHwE618hMkkvNtjzXcFvQEQWNa2aCz1tAt5pS3pp4eNCCsJqtvioDSsyR9QYbe6rRDhh7456LyaJ",
  "key5": "3q3PyRZvYBn31YhS2mgWnsreBH4JJwM1XPYY1RtFcetPyg9xxdex2tQ2mz5uHamrcKp9CQ4xeZbYJYr5WUpWXW9K",
  "key6": "5R4uDB5JPmAnA1VBHPmVN4fbuy4CrUeRPBwMxBS2D7s1d6RzYvub8jfK2c7iD3y1eT1rsqdFMUm1yY5tjbPQ2XXF",
  "key7": "5kffQQxKwBeZjas3mowmp8CCByKXmssPiJLH2psGA9gL7zKWKVbSoKpjJpqVrDzj7TPosvyuwCArUysJ5t9ZuAFj",
  "key8": "D7GctdGWPEA6tiQPEbKgiYKmcHQxrkJeiimDaveAGvzfiXYGKBqknpZLpjz9GgtQWw299cK8QaGKaw2AqgixHXj",
  "key9": "3oVyeeoAYxPD5XfgrYcYSSkfSg4ScW7ofF6Qy9TVe2CfTT4ic7oLwq77jgXVEU4SJTPBscqREWxAXbq4fJQaXfXy",
  "key10": "2DDTcLLraNDAhDBPKpTvAUZZSsqajg34x5jGacs1jg1tN8JBDsbYfhcFSUhWrUUsZ4YxX57XELHDRVgBQNBPb1M3",
  "key11": "k8KNU3kmd2uXtexLEbcMyG3WucJHUmwKqmtM7aNDmxuH5qsoE4m6vwDs4qhzFdyGZfDN1DAf1gBWHtfcn4q23zz",
  "key12": "5uQJ8ksFZ8wghVFYMG5pbX771Kdtu5yd5phxygDXFhiQTX3BfghWsKmiXrbbY5FY7fiWHNie5jVPTwAKLNHfNToH",
  "key13": "4mpek2tSA1cB3vUTaLdfah82eR9QhBETt4dLTyZQ25ohyo52MwgJMTRNwX85aw6gXz46PtERADtEw7x94Kz99WJD",
  "key14": "2pTjDU1Pqh3gymewf6PxGP2CMzd9qaEJtSA39GP6VFUrgJx3TK5awBpwvSNo7nPG8tfpeVVw6xzHuuB2be7Jv6En",
  "key15": "3YvHxPJnmMnxQD571NkhZNXJRbtDMuuWP7DQbuQzcNwRnv8NUH8GQzyDbrrMGE4C4HQvofnDEyP7fWsCaTajDZSt",
  "key16": "5BgcFDesq3saS9WvQsuHzLc8ycGq9Xo7imypDqdysUUaP8eJ6d8GEfaSKFouXW46VbjrwWTi9GU9v9k8sWogiE9Z",
  "key17": "4ohtikzM3AngwXiba7YDdA7E8a6TgUhUk1NPQzb1puBBttkk1URwzS4iv5uNcfkVWPGxm6s1L5S14UmKj1rmNtEj",
  "key18": "wx89v63Z5yQ4oELyecey8yQNmMng2JYjZwdE5xAnoEvBbYyXp8ScPcAY1w7URT7qjA8yBAzsk1Ac2FAcv5Zr5kc",
  "key19": "hwikMja61NKSQCMJiKnDBo92pTf53op3oShi491wRCfg6S4EtqA515BwusxBEBL8m8fGujzfSXyw98RshRnn8sr",
  "key20": "Lo3RaTP3nFX1gqh6kZysgxfmv8MMBoPJzPeSrLcbRJSBPFcopviVoD6NaMGKzYtsZijTo5UJeD2ycYDnErrXuRg",
  "key21": "3q6p26bMi68cVbbxd4q4fB8nKXzbkip9YsA1JRTJTQrYrEmRsDpo5E2d4XUJwdNKzhsqLSGWCksqjGQvJ2UJokZi",
  "key22": "4XnQ3maPXz5m1SCRrcqcvL7kWvd7BT9Vqdrq3egjTeFwvWhGfhXbqYjsEWVDzNYnJa3pxxEyZG6Pg3D8Rx24qLvJ",
  "key23": "65SRGyes2HqQ5gRYTFpfQPrsJQ5h5snDrkDWwW9xAJe93TBdeHvaryfcbA4F2CLWoDqXwdt2zFbdd7gWdgCK7Coq",
  "key24": "Jt8hTQF7hF1bqAnDoEyfeauQ5K97gQY8jBDE2Tmbpp3PimfZtSEaafqAuvSmFKcm6V4hV8fdJDT5ezECFS1s63U",
  "key25": "61KCymta7M1jVbzcVau8aQWvetJP75h5N1QpHN8MA4f5NXyJe7UCi4dqJ8kFYjqVaH4KTpD6LaSWCuV4D4baoePF",
  "key26": "64En4q218w9SyzdbSBiq8LVLxPSk4gaEGgixCpXTGG9vdosCXYvtQmvfKpNMkxX7n9BqpneJ4rhG3ToSo5hvePFE",
  "key27": "3syJtXtur5ksueskPTLT9VhY5LxFUuWbZ2tAzCDDLegrqtinnEG3wRWCyKfW7LNKw7qNwB1HYK3DTFVy3GSuN22y",
  "key28": "5PhRHtgHuHfpuaDpdE3WE9twrNnjWaenbEFuPt8dS3qLsaSpckAW8QZT2pd8DD5yDCowK8NTA2YmAcLRWULJvzKS",
  "key29": "5nHAsmqLVTkB7hFQaNjMAsUPT7qSPe7DGFM73BvNtMgEhygU5WEeokqZQfh8WhTkhJHeNoFajqTjeQX5hfjXGX9L",
  "key30": "3Q36xFvHVn8nqF1TDFuXyiiVjhUiBrvNTxSDAruifneMY6duEBpnnKiNmLUKQKqKSXQGYQGUBDNogCi3LBw8p9Sa",
  "key31": "4vGpwGYT2YmPKQzsSpygdJEQLB4XfAcer9WN4ir117YvJJB7MdZdN11P4xo4wznKV4pJHaTR2W6EJDuNTfC6Xwdo",
  "key32": "51qEihWs8sWLM4jhvonhHhd3bxWR3euirHPtedUMB86od1bY9FjE5CHukENKjvNanAn82anqTGcZf4K3i1Ta4DpB",
  "key33": "hgtYtNZ7dxzAgT6oEk5uRhVTbyDcLTnjKQuHRdLtBUfRvwRTArXotDKzQRjdx6YMf9zcJowUwRxyxwH8eGY9ewj",
  "key34": "2Y7uTBwQWs2tdELtCthteg9sx3YXeJyUdHtfMxrNRSvxuhkaWdWQ5Vvp9HAc5CFB8XkrsRy1fKapo47m6xhNFtHT",
  "key35": "555rdopW3iaGDjWakBBGQufr63Zn4Lrt6mTEsiZw3PrnGxzJWLx5KuJ6qgjQVpD5xLsbGDqKLBwSmiku455sbg9w",
  "key36": "5hHutpbt3Hu3rtSeQuKduQKYmjMMHJp7Tug1M8DbbhcSevZxH3Z23cHMuQd8TMGCp25XdHCefLwu5AU2DL6M5QWs",
  "key37": "2mV4UTaMvYnz5rPftmYvFLJgjvwy4cUxrmJqTVn39WXeYiULiQzBxLUKVTKGKaupmsmarvzyfawPoLizS9rreA4F",
  "key38": "2M1rMEdG2PVmmz958bqbyEqwrwsyuTvRPVVrMGLGNWD31KKcHAvztWYXntCt1DkhzjisWgdFiTcwP6iPxHWncZZd",
  "key39": "1FeQQpCsFp572WkHLon31vMF7AEtMCJFkpydN6e36ztKKpiUkWhcUv48DQu6rwT58rkpoJH6VozAeqSqY5yv5mw",
  "key40": "xQoyGRQ3vuoGnLvrjMxcANomVUbbYZx4BNFD3kC5iCVLp53qLBp8EscLzFxMDZepzV7JqgKN5icC4dXciRdNKfa",
  "key41": "2YLpxet9PJ6ueRukLkkxoZYE8Jh53fYcYCffs4NmvNAxoL2yJREye79rWDd6s5DuHMx3ErHQdEko7GU94i9sfyYb",
  "key42": "5vqAFTfnnANfuMngGZqDzna9wi9BqaF8xGfwxwdvvCFxcHqeK636KtCp9cfvuF7NoUHCU7ueCfrWS1sjmdsnS6XV",
  "key43": "4zVNgfhVw1sBHEFR4PGLRMdXyihZQWDgsPVKj3UaVU8sEQWpspicatADxfVj5LiujoSH4ww2niAViuHaR7S2dRf",
  "key44": "4uNR34FcqoPAyrHZ3oCnEK5t9P3SpaL2VDfGS2aKBhpQ4mKfh5PGdHAFzqQrH3uajXP7TdChR7jii8gumtttQyPf",
  "key45": "3JFZtfTJ9opATcFewRkN8vmfJeacurvMi2u6yJSVeZnCTGi1sg4UUoqzk5fEygThyx4nQoHZz6rVTPjzxuAcAR6Z",
  "key46": "4RDgEdSansRWjcmBkaN26N92pDmpg786Mct5QQQmt2fLci3Jiq3mWiN3rASMipDKX6QmqruoAFKaej9Z6PZQ8ZpS",
  "key47": "4Z89JHfuGTMTzFC6PVBRgv5czmfcMZWJso4KDYCHaQfJfMYfisiiiBKox8ctzLTPATHAvrYCNW1e4LCCT77xLWZM",
  "key48": "dM9ZwDKrPxDWCw9bQMyuFzp8LYB95QByd2dvAzyrRyaM1FbcpX7ZGapzJHWrSRZdW7AuZKwQcfwJk4AD1MicKYo"
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
