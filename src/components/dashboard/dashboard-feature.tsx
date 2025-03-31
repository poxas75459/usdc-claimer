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
    "5h9xeGnCgWp3SsbqNQ4TKcJmsJWjdFhytTXMiTiVnjLmj8KDy5q38bbpMdo2m9ibgJRFe3dpFGsDgUtU7H4T6ncP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yhZpF57hETpGgLQ3AcyAMrgrhkv87UVcynP9heh3Jm7xs4io5WpC1JsWX2Eq4cAPKdZC6aM1mXwKrspyuA6GZeQ",
  "key1": "pHb2GazLocM2JK9MJ8ujocE5ZNRuM8PeKoiiyHELEW5SsRtfqqbckShXG6ar3gdDesRnotYo5arm1SDEZMRMnpD",
  "key2": "5HnnFVSFgBGMq6Rd2sB392pS1ZgYrS4U8exvvkJXt8SiWexXKtYKhanQ38bbZsGUsMVj9AF4bQoF2EqafBUnXqJj",
  "key3": "d88hVrRP15d3DrTozTwABAV8D1azEKnvgRL43JnVabTx3dLs7CJbmTVnek6p3zu12KPRRW2L6Fxy69RPeq7ChEb",
  "key4": "5nMwsAYqQaGjKLrgJevRpWpgjN9NVp3o5X61XBdK4QsJX5NfBadZMKCfNwnMFQrzvJ55bJv82z5m9Ldpi9ivtLac",
  "key5": "2DJ6qD272QrR2XXzqKu3daHgG7PSwPZJ9vArumjwqA83e7hkZy4FWxoN7tR1E4VxSwncE9P4DZ6qKZ2qiqxu9nPb",
  "key6": "5ThCPFcPvhTZjd5cLDVV7ZVCpwArhQS67kjr85z4XzMcihnPPWaYCocqaKnpS1U7XorYRzXF7rNYyXnbZbfky1D6",
  "key7": "28cpNzxsFGuTM6ipcK2dDaqcwZs4nth99wV2ERCmaYvAArc2ckxzxJrawqR6uQZu6yExNsNvxmiazBK34Nq6tgbd",
  "key8": "3c4rnZvTHZCHiPSeeXy2VC9p27eq8GvG7ecrP8RnMaPZYALTmAyPigGRTUmRrXqUxiiGUsnVt2VM3QyJ1D6zK8q3",
  "key9": "35Mw6maHrCotL92N3nHEPzmRYnjTUNV3HHX9eRbHD5DJ4GP6qct66HSoUNpa8UvUxYo3Z5WD7rPmKZMAp1KtdE67",
  "key10": "5t93vpX6eDvgHFXvWQxZXq4f7Ybz3YYjY51JhNHohVM5LD6GQbK9cPAfwEeSWovRno1JygcKj9pbRmuXKgae2tws",
  "key11": "52Uz5n7C79HeZrjjJXrsNExFZTErCdDZcRTmypnQuVf4rMbC3Tc3afYUu7PxZia379M3MHtMAe862U17WtvH3gzK",
  "key12": "5kvZWnsLd6X7sWPLQtk8ghGo8U7dMrdRSsUn7Z7obD6yqqTytASc7pKJNPBZaHJzZGLk7Nt1fp6DA2Uhxe9J5bXY",
  "key13": "2BqpGVPJjnf57AoqodgkiCUFZZaeYwyRdMSAF6AwthAVbm8QZA4jSH2ZKW5XKZeQFNgLHe5xpNNg2Bioo9SmQWT3",
  "key14": "29VevcTuUeKziakZhCURvmGmwLnTNSA3akzskwJYoGF7hpkwTAkg6Mwtxv4F9j7EWeDAnCtKxdBqCrEd5UauGXeL",
  "key15": "4seCEvk9bVtUMasiX63MxWUKyKotwWRCXpU62FvfSCTYFC2jqKKxbD41PQKyKd9irfwG43UmTiJHWskFaqnPEBdd",
  "key16": "3BsG9cvYEnqBUr3XnCFksM9GyfhfcWocRzyHG9VZfUYD8hZSsY4GzoSB5oGwajwavz92NpwRAFFMcrGDEjxhi1pb",
  "key17": "3YW5qSUjuL8wPYFXGSYkBgZowRetE7Pxyu3tTzU6J8Nxp11Qr9s6U7oLq3NNjjaAY83QUtpTEsPesxdGS4dpexNp",
  "key18": "3TMPCF6LKM79jPWapiX2jmgSLccWhMfevMQU5KhnvfNP4DPCXCvaF7cziUfjjAzuoNiC56E1PQnLBtZFp3Jr7T35",
  "key19": "4nZthT8hpvc8q1yoVD8Xpp3WikujWv1rVBVXqiMCkpKy2ijiD4BhU1AZUco8WWRyEsSXhzFScTQ5mevz14kQuqAs",
  "key20": "3MiFL9947yBYHw7P3XcUbJmTmgzjvj6VKoBVFh7iLyYzEtunCWz4hDFZjS2U4kwBwrCzhLX3QNpGQpJyXcQQCNsL",
  "key21": "4fc2Th8FLYQbsPqBdm9JDbppPUaDmCw7SvNJmjYhgkMrNcRKRiyjGw25DP1YbmsskT8JuMC4kcUrsrTBD6ms8nm1",
  "key22": "i6b2xWWBTpXBvMBSfRNXPiPksLHW1hmBe5ygvGpJ76TQDTSdBDhuY2vPrEebWbH1Jo3jD6P2Fra1BMJYrX6UrtL",
  "key23": "bMxEBvQdUzpX7UVkWSbduXSQRDdM5n25dDSvshuUiZUcqs2Y6Wr8aSKQRH7xoSKKZEbAAm5Qv76qXJvMsWkgxkd",
  "key24": "3Zsasy2XtT6iyMkBm3JkFhd4S8dtgefvQZd3bxK7djqgf8ivmQGHTr1LqwbyKaLeScATFErnsK5yFWTXWNLB5HFD",
  "key25": "J8JtxWJAreVcXR2VeCHg3WsUaE1BMPpRS3FJk7mPQtnwV2L7usUhszG3hEqcZ3N76fPqZyFump9d5i9ixqtByBm",
  "key26": "53wxoL7UySj6ZEpnhv2RtDx3uR3wLxvxwJoxKKvoTdKBaur7MRkJa1bTyNm5dAajQnKAqKVAN9NF5fHCeFu38dEF",
  "key27": "2AEm9m8QJRojGyEPsQabEqDgEaafC3Toqnspj2UddR1ruCBgUhKCPwnNkYmGD86yujMHGmsdFZ39t7Lq5FPupZtp",
  "key28": "5jxn4TRZZkffccikzw88pAxf7bJAXjF7q1Ta7m6DkyaQyxvMRVNdnFPAmxMQ9R2QRfo11bFmqjuvBg6ofQ8UqMTk",
  "key29": "YMeSV1hpmdpHrFcLMmyg3ZD9mBebyKQSWrRETRj8o9qUQ2hxS4f3M1CLSoidBgeJBNfiiBUEpcYLu5YG7QJb6Rv",
  "key30": "4xsjwrozKMpNZbntdkavr51V9V6BUwcodyWRiqm3hmMMWppwST5WEf9YLjzUYTzSZnm6X4hswVPyjoLx4zmoXAKF",
  "key31": "supfWqbMmvmmDVfEMFY2HyoZb72HrvtHHFSMsswE6EX1Vs1mL8tHRLPV1CEJqeWJecwvWpuGUBgNiqMAcmQ9LaL",
  "key32": "5ESq6FK38ixVMdCVCmyBq1xD8ysserraJKirJthhYGZTa1oQktgtU6Dx9eEFU8JKm9ayQ9pRvjmg8MtE3SKFuzAi",
  "key33": "3eGEyV3HrxHFNf5FvocJn3afmttAgAYeSfH7cjj51BUzKPUYrtziQueoStiMgA7XArDDcAYK46EyoHdJ4U1hCH8i",
  "key34": "4GrwvxZ6fDdc7TasBQjXMKT2cQzxq6g5uoYch4nCeHTcsBZbhkky9dZEo2YEWuCU7T1gu4GexcwL2EoTrJcvDLnp",
  "key35": "36XtC8tsty9pvPbDDxu9hCcEj3FvyEQXthfgKc2opiJa4r2pyHGm7yD65z7a3CyXR9XLa1pzV1k19BKEhzU9gQ4v",
  "key36": "2DAFdcpGooX5Jqtmg9ECWhqCgTErYdWHPiGuaXLYLspRH6i94niy77miUjPqhbmjdv8Jf5FaGTPuXBK2gGVkQQm5",
  "key37": "2TsgH2BJJgNucUPWNacdeb6Vg2ZTiJXTQW9ERq3LNmuUMoQPsUbdwHT818MEf8kDPE193tgKXezhZMFX5X5FfqHE"
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
