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
    "3KKXJrc1HSxv3cc9BhFahY5iPpNxDWpVfRcLD81YgrWCt5VpAWeJNFJEc8uNqCZpQ6wm47gDdwQq4yiXcoNw6d7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qF4PwPW5pVACFUMYryxyB7NEEh2n37kMN6GHmmYVdux2ot42kXWUgeEGRBRgYDRBu38weGz3FKZsS4trLqaNjor",
  "key1": "3c1MFMtKAPKCzryE363C5xdaGszDRroZWB16UGyyTKKRMjxQ9giBj1N8WpxxG3aWue44Kx5BseYhNqnZMpqGWtJw",
  "key2": "252wY26ox6vjCzZYievU5yeU4CJ6zr4KB3YdaLxDUnjZr8xsvxQ28xLiKgBeCaRsQGUL5RoF4KaZsLNxJc6ySXQX",
  "key3": "2ktToNxZPTeQ5qv4HKZg2THYrT9uoK8r3nSz5RmFghbvBP9fD2fpW2NTcHcyGEj8XiSeH2wMFW3m4Ct5dfCWKuKw",
  "key4": "2kTGb6aTZD9kU3gWkeimpsD8FYHEU4oWX3L3jo69rdtpkC9V3RcLrrUwNCzxhNswqnHd8ZYK7sjk7iBMGCKMfSgc",
  "key5": "3uczhWGXctggmsi6WkCjvx3rrqpUtvoCd5EyYzDe8zPxZd5hCVF8EFmeSkRN9s1iMEGdMoQf8iWAkvMpxguFdG26",
  "key6": "5euU98e2wEWX7WYttfTrLcAP8du7NxDKahqjaiTWKC5Bh885R6hsGc4GvFGCphZKKn6h7rHTnxh9EWELSEnDiRTF",
  "key7": "KyXPicNJsij8EEN4RobhvrwEV2vqJKJPZWa6LEDzVs1M5egtThgmM3kTVEZCWbv3UdkEmPTrhpz8D3dpX47mLK8",
  "key8": "L6BBwL9QLn8XLFhgiEEQFCwxYbpyCoWLBTy8PYXPpK55fmTSGQgshcbuThyMtinME9QJ5ngXZcyChKvzx8YTGuV",
  "key9": "4bAgSYHPq2MfBbCuj7hU7WTPyv2nu98maEM58RcHcHW4GLX3SdkzaxnkyLHzepn9oUx5iP6w5PoWyKobaBjLBt4n",
  "key10": "5kGix8X7Z9E4VBidPcoZJCykrzDppLncoA4PGyEVuVKgk73xCoLWFs23BZz9ixf9fVs8Uj1sg4HxBz6FrmmiA8YT",
  "key11": "2q8kCXE2GsjTt49WaykRZstrdNkLj4rkUBq3H9SHWc9jzyi5TyQa9nP1JMMZ4hZMSxSGcdaaSGQDooHALjcvR2pw",
  "key12": "49u4pGnssYwUv6VjFq1TQSKZoa1xxJjdtskDzHro7Fmy1gojMVxuA3624S6CqZNMdWJq37qe6vwhu8NUeuf1wczE",
  "key13": "qu6YBrtQVkA6T4qxfmdhCimy4D2N3nHuua3mZMDVP6cGJb8JdTYYhqUEsL9VfotsERQsk8ZV47PHXiHm2r2z2uL",
  "key14": "4nNYr85vL7RKPwoVJ3KosMg95fh8s5XH4r3VyqyUd1JxrgV8wHkGrDBqkMWc71sQMA4Qp2KthijF6uAUAXE4Haxe",
  "key15": "5ittx1ViabiSJcAi7C5HbDywjCUuSSyQQH38uKCCjMo75KaH2DDGPEGjgrx5mC9TrXDQpgnRydPj18GM27VYnQC8",
  "key16": "5Q92e5A61FW1nuwBMxW4mxee82xqcv4tmDXSCKYitcf2Wrt9GN73yF4iy8J7ui99KpKiBJDVeTR9dsabdYqvZmFT",
  "key17": "3PDDrXLGw24NSQQVTLQC2UH3sBc17szMtDSU9WMg9JaWynHaJTfvquCgXS37qUdW1WitMPZsuMpnzojqRJe8Vv1z",
  "key18": "5fHf2VCBDKrKrZ8M2mpKQqqcSsrewDuuapqur3iYjzoacSDsCKbDZUahuQutsPR3LxAjLzFBiS7CUvmqM6Aubpn4",
  "key19": "vFo8CE6FCaS8oyLzUKvoDNZYeYeAC6aQv4AsEb9H8i99aJPkxmvthgjz2QupLbu7v3WHsZNsMWLyNkcZtDmLTpv",
  "key20": "AqRLYF6SeTzPLDLPJTpaPTF2MnuaR6iyzraejcGQfqnuELZvzt9tvprZ817Dhuk3DGcxNH4XfJuYBd9nKUBKUpf",
  "key21": "hEtWXvHDep95r8JhD1KyQw4Y4zJiLs9sqXhDYHdaNEnLqAQeZMcysRAjren2yYin32KAeeNjA7JuaoR4ey4pfvQ",
  "key22": "5FL4YqDdWpJsKthspkNdVuk6rM85RFMCr8vQR34VmVNPg28ktFdg2Pqc6BuoarMTTC4mZVsiUbXhYSpEnLL8XHm8",
  "key23": "3qTKLagaNCvDnKTuLZLF9gH93hTP7VhuPu9KgLedXDCArQBcfHEgwdZ96pv4pHLCWGt9PDxvLoiFinxwTPfVXBwQ",
  "key24": "2cXTr73kFFnjd4sFRmPmr7aSAkzrAErENbkmbZiam8D9M422zGRAbTpaKrsqKEiYJoDAcqvbKbbwjQxYww3BAMCt",
  "key25": "4SCLm3gNcR9bY8v9RPGRPx72EaEsAE8mqGwP3GPeJgTLm75ei9LhKtiAtxNEVeT3SQ9tggxQ4u8oU3gBJ7Y9sYYm",
  "key26": "jkfHRQtsRQP5hyf3KogdFuYPyVnnKftJZvSohU1A3s5WKeJre4dr82jHPuZ1TwLwE2qMZ9eMUpb29hVaMLASCZ4",
  "key27": "3NUQcJchNPZQs813nUGVm4Vo9smbn2RqZ7ksCS13wcic4VESzUAwgpS7f8ca2fsp2Dkk24B8c3RDEyWtczyoqCYT",
  "key28": "2RcFdHwBxfjHre3CCAGNRK7qUkkNk9M8QzHqXertKQVyD2ga8vAnuZGD1ZEdoKEycuSsNAuRFCsb1XtgbTsb6SbZ",
  "key29": "9EEy1CMgvKDa48xbVXAbgctU82kkZsmVE5CsTVpehLA4mwLq7ppp8Gjt2Xupw14RS6NkguA9ewxytJ7q1rsS1PD",
  "key30": "f4nMsJr2LWDijSExPKUKiXTMCg8rBu8DJdv71hBcaUqjY7gWWp8dsBo1ofqG3nGFuW4snCfJUvEAMPCavYAzrFm",
  "key31": "4u7qzRKtS7SbaXr4tftkdxk3tUAukuPHmNrvC6g8toR9DBnG33ZuEnpnoUn5txReNGBa6dmV7uzYC57564NAgmx5",
  "key32": "29FMUYuzcNHv4sTvvXNmUqQfNLaYqjsnD32SqMC2cVDkq9bKBisNxeY3YWFkhdvv873U5u2PASXCyv7yQoz1s9A7"
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
