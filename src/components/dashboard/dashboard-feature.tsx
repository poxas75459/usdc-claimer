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
    "3i44Em6jDUoDeEiTXJ8nChDiQUoSY76xKZ4rLMYreXSW9nB6TtVv6Y5FG38jAxTRge6HEBeEsKfiWfe9guY7JAJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2irY1ADh1XMjqRNxnRfiyUTvF6FrDyy4vVhLzkyPUJN38V9ywQBagfr64ZErkyfP3TfFG1wRba1dDDZS1Dtg95wd",
  "key1": "3twV5xXVtaR8rz3at3UdKoDSbVUJ1vcf929ac3PQBD5J33wfFpLQrQLiiTqCV3FGSgxs1ZugE6exKXm5aDcGmb9N",
  "key2": "5cR3NU4tkNppjMjetgTPUgUCAh41PJTcXsPty7ckjhasVybvFKNixEZtRqLF2bZh1gdk1TqycH1dDRxzCkLPhJE4",
  "key3": "3QiHGApZvaVrFF6HEEZsnfnwVLp79Bst9e6q1kqUtT2Q5okYhBcrioLWTNobiyvPs7ghf2JtgbjhArXeacqM8D8s",
  "key4": "597bnE8ALc4SvhPXMerTRx63tGseVrSUEFsZcQiothewzq6rDZcVaMErpArq1MiKyYnoBdmWeHKpP4JrUjXN4PaB",
  "key5": "4rSueserkmarqKdt6BXchLooMedq27DVusJ2W6vwHZJ7WFGEZs4DAq1FJFK8N2PW1LW8m5vyRGBH7H84NoFP1CLG",
  "key6": "4HWh9Fhb6e8m3c9xPUDD1F2Ck2xddF679MkSE43QEEqPuGqNoMFmxPxwnhYqxYUtPtbX5rJdGMdWFbmntpeSm3yv",
  "key7": "5XKLBy4ZwJsvVyQWqrDdAPtvb96xNkiz4LwkvadoGK7X3kif3KEvvcCDtz22Rh3Z4Ck2gooVsrWkSsdZBt9Dd485",
  "key8": "NtbSWCybTWgdvEjme3x7WBUBF4WTztFjvUUkm4ioTfkAFMoSyNv6ixU8g62CXu2hgxGkvPdojuCm53Y3ax8Pkub",
  "key9": "4XhjHE35NCB2p92DChWBMRX9YNMbMmN4ntoep6yT5detk1sAVXSU5wqU3TtyipZ1b9PLwur2nAemBhh1mmVCsZfi",
  "key10": "2c4hvPwE37owMZ65g7PuzNxHXBgKQ3jAKXQSGJz4PLoZwh7vx3P6EWbRknsTq8R2RRPp2s9PknyS3mU4bDJBYnyE",
  "key11": "Q22yJ2q8mM2xhGg2B7ZGvXtfHqm8BN3QZuHa1DMBVJRLTNjvcdak8pn9MKWar98LRUWKX3Q2JgsDm6nNQabnQip",
  "key12": "2XAzzRNSkHF9Jya7rP3QGn7uABkUBg3TG9xNtQ1RPgQvodUTbeSGWtXB4zfLZ4NoUP3yr9KDrc1a4ojBrZEY1WpC",
  "key13": "uq4Hk6THQqLpFRcZHpasdMh2nnvR93vvBvcqwx6sH7u2Y5CXMnWr6GPFSsq3gjdM7zJRhqsesYTAuWPWesw9FsF",
  "key14": "GpsEcWRNSBpAobiLby5mMpe2NN3yL9TBhUvMRQPbw5a6iAqbTL72FAhjZ8hUhaPz3zYfALES6WPSSVAEbBA4saE",
  "key15": "4y7qNYiqfNt15XCTbMSdh4AKKT1hGStcvJtgdMbQiSrYVhS1A33WVVWmRXeFFeB4zpK8HXbFtXsTHPSxRAY3ancG",
  "key16": "5rjhreUaXVN94b95T6LgnvhfJa4avuazJJ54LEX6kN6fYn1Ty4kZBuNk6jAWqshXJzQaynjEdTmYKaqbvxR3oy6Q",
  "key17": "5t8qZsbME2jkjDvvYhUQs8V4rUPtxPPueoTEA3mR37MDSJuubScro7oeaseTFMFfUoc6vuakfzHrBCGhTCKuyANu",
  "key18": "2v9hw7PeJ2Vhqp9TMR8zLhh19yzyYtNpffSuW1DoatoWMrqznDgafT5YXYR7nHByc3dwCz7bSTpbN1HW5CMms6Ds",
  "key19": "32Xu9ATUX6nioW6BoU64u2QFj4DN1VNP3qzoF8s9bh5K537gadaH3rtoSmJQBQ6us5iW8k9qqcinarNjFvd4RKUJ",
  "key20": "5iKUSF8p9EkfWePqReoadCWASUKyvqAWEPFPx2E5x4ckUR8UcDAxnjoPqY2kwMwqRQMwfq8cSq7owDWPKFEN22eN",
  "key21": "V9JqMNvmBxY3A9mSLKUf9S7nUYqdjhZBujQchkbc72TgbVWA6ZZs6tRwhBu4j4Nf4z4qTEie6ja3PVpS86CbB5X",
  "key22": "BMkHmDqi9yaneswKcowAvtrqQEUV6iyxQab2hXvk22Cn1gWintughqKD88CgQsuH4QVSCLJQh8Pw46peBbcfaRA",
  "key23": "4TpcJkXRJK92msPjgdPLo3U2Njan2HjWDs9vD3pkdq3GfMmyVvxsLP4vwnPwxsyfMSpRjcaUMAs7Q5ux56m5jgTg",
  "key24": "65Kgo3vW9sNZVoBAHSuE4n9bFGeeeQiPGBQ8wRNPTt53W2mEk6gii84539SZAMyvvBiR8itguZSLYzZyNLLbGcHM",
  "key25": "2B3q14nkhnNhArezk11BsQQr2AbAoT1bM7QWGN7vWShUHuCVaNrGuHw1LrXSFn9KJDU67T1LWDm6XfwdDu2pg5LD",
  "key26": "614WAtJKXkYhPwTmXSwNisqZ5K8ohqrtKJX7gCJdb4HnyRqhhzAunrLsJ7Dj2iqmKSGpLJVdGYvtCkEZekyS83yz",
  "key27": "3Kiy15NwqEe5j2VNpP6rdroscSEkZNPeAxC3j6S3hrG5B3maYcRd7VV9KXRLjf2Q1VkQ1q7ZVwbBD9vq8mCdrRPv",
  "key28": "3H535j3RSru5DRQjasEMijJj179U6bqYehYz4hFDVVEYQwwuRbmbaMWqVSaWT5CEoXxX1ZKgrQ6Xz1vHTzqGHzND",
  "key29": "2FNpe3ZGDreovkwsheqz8PFFe5UZUnrHsX4FfGipRE5S9Mofzy7ayZDyKAtAey1QpEtTgJZrj66F6iqjsgs6NPS4",
  "key30": "2R8oMN4S8vX1WpH2kzbA2ieCXLidXv3E4EnoxJmJv146YqPKtCNfmZfBYrWBcEUp3rdXEd3kAwnJUSzqUcrgeDqm",
  "key31": "5TEGrWdeHH7hTchYCGeCRczXQ2ftapGjU8jhwgtarN9atfvvXBw3Jeb37SjYnmw4yUKZgzxMqfyJ4rvkPnGEJKcL",
  "key32": "2jgR3LLHM5s9hLdPZwHxE6HjuweYVbGQ2EjqM1rED2guC87zMzq1woEELarNQLXRLgsBGGT7a84AjWe4fC6mUmNB",
  "key33": "4cT7xU4wzNvEnCWJydEEVwG8kUh3DkUjDtwZxsMhdMCATYo7uMHBpcCdn9TV9XHdRKtUptbPieoAnpCNPeDmsFYL",
  "key34": "3AxuZ7EaE8MNQvX6UTqWGSKAQcG4dQoA3ggQe3qc4PKX7i1ZsJhFVVPz2rExQbe1N9aYsQerBsfTDK7WGj6cnjzb",
  "key35": "4eQR37iwC18BUfpQ2Tq23r8igKg8Sh4xExLCxWYjzuATWByRvKXug31nC3t6mFhMxN4GBjhpZhbQZ6nMViu1z3bX",
  "key36": "U9NyNsC1ujRNnMwSEtV12hzS3pvC4jaGT1k4mfvYHs7ZwsfdhM11ycvUftMExWjcYgP7XAsfYaCjAoXFMkTtvqV",
  "key37": "544ntR3jrSVX3dWAPRQux8bi3vHWzmbhpcvQXrtD16fTxUmB4d9wcx8kbLrnLbeHR1gCnBHMVcmTfaVefyKTjGdK",
  "key38": "5e97D5QtGZRMMznQELEKvJvsTQFLQ4R1n36ErGyKVv9XNzeT7TiMtYo12rmQmuWtyQrk8so5U4xV4iWKtnxPajw7",
  "key39": "2m8p1KoSSH3S2fe6ijfWgbMmBJJHidwJgAArJXox8Ueo79mMJ42w7mgHeCyT34HXMkkAtKPMNduMb9Wdty8eTzTr"
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
