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
    "3VoiLQ2Jcg8gtAQY2zg2ZN65huDFrrUfEwRtfduNSEbn9J6F8smYj8DZKFbJKtVeajQTCemYFGdPD7sQk4jTm9tT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d6nPZzG2meoYQoEBfd4mNN2zEUrzYpTSBn9DLqHRxYJEPyjBJJJuFeTFsbozFH4ME431G8TT2tzb3fCxT9oGihq",
  "key1": "5hEdwByFtbKAmUi9c9ducxdBLFFuX21tBdeb9QwQTmvXRJYYHQiuxUB1PKicfzL6tAbLcTzYHbLjGG1Xtea9ZtTe",
  "key2": "XF9oKG2YeDe9GyV77V1W6uJQfL7kA2yWuWUicxwG2JLfXJtYCgdicwJrQygx1DUzKRwc6QjwyisutY6Mh1WPwyJ",
  "key3": "2wncoZwoMKVobhHDGRbQJuDH2t9QP5cTNRrvYPwPrMcZdSPyDjqomrjsm5ipvv6x2ScU6n2xutt9jcgsS67KfqiE",
  "key4": "5JP4N7xRxuYUjtV8HxYZTPS4YbUw5EmXRNXZ4STEsHExymsder1ys7iMNcA5NA3G1kgjWSMNpGcSFJcHb7soBerp",
  "key5": "2dRTXKC1YQ7TiBNjuvVgPTvBHFDaPFLQ1eUzcNgwKGDbhP6Tfn3XbaCdhogtzVyivguC8aMQySwaMdca1HYb7EJC",
  "key6": "4uw96pY4mBDJTyten8MeQpVNj1i7jGep97JZ9C3DC5XAhNi33TA3Q8SzVi6juEDLJWLqAAqrfEkL4SPnusP3MkYV",
  "key7": "3VPX5b3nmZyMDXQkpJ4qUzidhqaiLwit3A9UrDh6ntgJ4af3SWFkGStdUe2hhKi1LzQ7kbAiW1otaVakMAhm1fxu",
  "key8": "58XnS7RvrjD47KWPNNzbQCv1wpLpzHwfjmSXoKgaAgJ9MbstEnE8xbnr4hirxGvT3PiHJWSmBdxrXd3NwRPxKyTU",
  "key9": "3ML8KMkdMTxdqqTs5tMTLqgGLTuSohcL1mfcPpe5ZS5nTwLm5qWLvp3DKGpNbEG8kNPCUXWQ8EbdDYzR483v3Nme",
  "key10": "5zgmPZhekxazGWniyooiWjxzykPX6ycu1k7WsoNG176Nkh9su25cRuq7W9fCSgkvsCwNz9PPzgzxzgtGw9UukHbz",
  "key11": "2gUaZgJeSRKLwdmd75HNZEF7nGkW9gW5JiGQHgtKVeg1ActEaVycB3zi8fJMiPaMyVnrx3FtJif5VzssfRH5By8V",
  "key12": "38mStbu3tp4J4a5EMRH9hYU6i3uFNe1YAkKTcb2aS6R2e2KDrWRyMgs1tSEQzdEBKmXQhREwSxk5WD3kh66vK9zu",
  "key13": "2txokcQw5kbo63HA265kGYMfAqPwvQtbKh8U2uMpMKCrRxAv55mkeQ93eMeoQBobbHGz4ByZSs9ZFPMzB641KmgJ",
  "key14": "38iCbGssyxosYKyWtHnQ4EcDsQXAubX4ujyGvN3GGsdk8qn6bgdUNYJB1oXjjYau1aHK81fKDqU7jrjWPSpzGyQC",
  "key15": "2jy1Hoz3i6RBrnnvmYV1sxa2dhaKrtHERKgK9opAkihHMHd1phWahhQmRUGaN4RNoQKG8eRr84VxHYKpHsDRgcDw",
  "key16": "5qVzxSsMEuMqB43Tm5sncwfRNNkqTZBQeqG1Q1rAVtMapgkXTeJogPAG6LoQUNnAqpUENdKozt262nxejq3K12xE",
  "key17": "4dowJBRbCYyvBx6CV8ZmLMkgeFTB3YJny4W3UvUGA3ZtaPRjzYxn3f3zGeDGvL7vH4ifhy4UXdkq1g8qfSvua48v",
  "key18": "5tVMbhc1hRUMwAs5rQVMcpRgJmJwXDU8jeUh9PRcHPf7wsq6d7fYxYFV3wPTdXZLQALk1Z8dFytbS4HBJEcmmWFS",
  "key19": "3B8WBpT3pojwMd5j2ic815UqabeN9TFB7HidjT4Zq4L6xKSCkPZCV7vDu4yLFVABLjLk7ohn9oZ5GToJqnCkQSUL",
  "key20": "4DdyvxjauGjFEjgBDEUDAXtXDy8CzU7XASAzYfCz59DTtW7cJezsYXA9t8wRN5s91RxzVPFsoQXkCyv2rKXYpYeQ",
  "key21": "39JhRtEoHLPYXbh4uJLDfC12CyZhEhAZkbujxrw1i46Pxbbm2cviBFVABaP1RJNtwq2cs1eMAitJCCPX7HtG8sEM",
  "key22": "mW2Gsvrecj3uLceiWMhCommXLjwLvGKf4cNPZW3K2eH2RSVnUMsnmUn6Z3p97EJkUCMcUYr7mVfkCewmRk7mEXW",
  "key23": "4bnhzqVH98A9K2Yt8roVZD66vw1Pq2t55p4YAcqsArewVFH4UjNa5kbkgKHvXBrmciSFUMWGXVa4nsUNwPovi1Xt",
  "key24": "34yZvwneSi7Ru5eRE6bbtsD2pVL2LBgQNSFFHx1PWLDbNMmgGKbyhcKWp4P81gojtGEUkVbYmkp685gbQvoCGVxC",
  "key25": "WpxSjozMJFjUEuJ2yqXKzqGdpZEjj4jTSmdTnfzCupqtr6ebMrWURTiinQgJ7D39crSxQ3rwoi8jHMYZmKZwETK",
  "key26": "JHPXHw8RmAgWyAGkjzCvG8iq4WvxpvDj4stpRrCse1zH1aKcD3m6SkXdfs17TFLdziE6p5L4rDyFTv4ixmtQ8cE",
  "key27": "66vZu65bdJXN5SBqkxxUCkeD3J2V7fy8rG5D5dzLjYwF7J2N1yvEKyCnbAbsWbWnE9SizMmwpk4MWwoz1WqDdJeZ",
  "key28": "2PJVs1s3et1Nn5bJeXcNgKigyPq2WvUmbcG17tJVAJhkoBRgzDzedu4FEXwEEMHNXPfu7gnDjyZCiUjBJii2QRh7",
  "key29": "vnPMTSH3Tjm9YoPA8buCufsEJxmnXrVGXt8XcQhHQTnbbrE4FH7i3qQgoi5qpSvSZbG69EpyWVYegj3hRXvJWZn",
  "key30": "2FgbtZ8xgLiAVK7SQ5u7GXJBLtUL5H2stVzJWph42EKkQxqBNvKL5fDmSFRaoPBw3b4W8L9s5VbXJfeTYhBVdfiK",
  "key31": "5snMxH3SqGw5beXbshwNs2dmcDHpe9jtDFfGHvG9JAGcy3ZmDBdvKizdmYnDKQMj8H26kVnD6n9CWpTAyPUK3uVo",
  "key32": "2DDdxkPbTBVE4hg5rfCfSXkvULjPtejwJM9QeJFmKxBmiDfxZMxeEZp5j8Un7E8ZYb9Ybp8h84TdLsLpUHxaT5ev",
  "key33": "XvBCFWs8SHDm3JVKUL5m4vEXkioqoYQzjaQUXQR41rPcnyxcDw7AwHtRQYmUAKL1kfmScG33UMZMokzD5uJ5gch",
  "key34": "3QZ1henSdMbriAnKSBLRFua6t7z3qgK8tVpzdVZJjE9dgZvxWD2SXw6U3bEJKfoNQHdX8XGTobsLaw2EAQvHLk9A",
  "key35": "3GYKig65MeRtGF1WA6CQt2byukCQfLRKBKM8SHU9igzuKLJSueu792mmecehGP9iZFYdneJE3JFHPbXX3ZrGncMG",
  "key36": "GZ44MbfMWgcWWVduLq8jaHmDRR6CSQUKjp8QmjGZ2WVxvJcQWdcecm2fyJW5W238nxStmwYHsAdjgdaUXssyvnN",
  "key37": "3DbEQa9KcZBhVQVmwAwuj9GJeafZr3xwdi5mf31NyoEasMB5CssF3C2QvfKYMtERvP6Ze8GyaVTKHpst1E3bj4iX",
  "key38": "Fi514cYdZRmXgj3dL1XzFf38k2C8diTg1AUhxhkdY9FFtDX5m1fmNUyhzqjwWtpbsrTHe5Q1ZJAtavGLDK64L4N",
  "key39": "5ZutkqcdbAMvvxvPDuHDMsj8QGJsnYZacWXrFGrhXw4tXQeFXXxsua1d2i1d5P4d7RgnXJdhqZVsD1X8qvUV4KW9",
  "key40": "4ECHPL89NCx7SXyYM6kPUEnisJYUqoHLJDhqLwsXxRpCwEr31tXuBcnvuvU1S7AtMN51wrXrGxkGsyk7DLaNp6Mh",
  "key41": "62EYLHRKhEnzxmQffhbHch1F34dLp5Agj98oQfQ59PDru79zUzTUn2FGzt72zyTTNUFDayr7NFWTZFpJvdariQ4u",
  "key42": "3FhFiJb9aaxxc7DhYcnxLvxUSQ4EZg4yyzDfvoU5mP7tbrP1AJA9bT3wUkpsnCDjTaN5e8fFCGZpLtBryyck8dox",
  "key43": "KmAy5Lp68RpnkBHZY5j9irs93B4TkrA2GmSi59ZLPi73Dz1A8q7kwNAYofkB6vU5dT9zQFpTNV2S1nAjaU2yUsu",
  "key44": "2kYyxDo3m3dURTYzYSmGrHGyDQ81REwLr1YSjvd3AnqxFD3wFXJPmHoAabTMywefVLDGRGMFuCgfke4J8LX5uAyf"
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
