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
    "5gRdDzngSUuY6Xpr4HrNoyyMcc2a5JaprNMVME3hxupsVDTpzoG7BJzmXdshx6MGVz4aMsJDwgCP1qLezhziPmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gHyRqnSSaicrsCa7Bz1iE2GGkS78rHYZLtKXusAtKSdBY8LR4SN5wXyKLw2wKktVnMUAkRTFo85y2ncduL87g4",
  "key1": "t9gLjMgRrRKqztbi7LV8tf8w1dFXsnj2rARY5N5oSsJ4cSBDPu8fp95SCfjaJR264XTGxbCJxJ6iEDsHezSueiG",
  "key2": "2U3Vf16yduYnhNVt95LN5z7HqyuNEWWwewajuJGHyN1bYavivTeimDj5Ptv48UTcM9RrFgFRXvgDHtduPtjpTDcS",
  "key3": "4TgMGDAPsVnPNgrLu6fB61Bw8h87ddXfW73mc6UisKNs2SoRfi9QqGYuGixgHTQcFsrt7FTxLJCABteEd2UrGiF3",
  "key4": "43NmH7SB8ZtU9AmGF5K299G9zyjs1cw4zFQHZb8XBXdFu84rxeGHVm52rjyHQCr9fxdZogW8CFNg7ZTYKe96tUF6",
  "key5": "5QvtpzUnH5maWAmkQayj2Sgmfhv1QDA8CUugrUDFfJFdeh5VpxdrpjV9KHg4Mn1YUPQfEwTpT4wpjBQkDgTCraZn",
  "key6": "gcXaL3qdhVvg66WFzbhyGWhCaKb8nHsr8d997tRE8YJfuRYQDxfdej3268WhFDRSPp8KLtd3iMh2bSdBVtqGeZf",
  "key7": "2aUJCEaEXXDNqZjN8MsXwKcyk9izoQYH7cSbukzHs9Gp6ZKX4xXYKmfWq18PkjXqrUomysfhCRB98AbxwkyxycVq",
  "key8": "i7mmR9wECkG6CiN85Dysvq4Q91pRBsQstyD7zEgcH9xS6M9qq1ARZYZmHjGrNEYkHrgQMZgv7Fxk5TxwEfzKTvK",
  "key9": "5ZKARsHMDVw1kkewWYcUy1ZtZjmGEN24aSMfghEJUs14raskQY5pVpPDx1Gp4G51L4Sdvdeh1gwCPNroMQNPHZ8m",
  "key10": "4EA8qm5rEHRxAoCjQ9TufeUGxB7fhdQgBdSJWt4YutRTiouV9qgqmftdfTi29uhGE8WuBsyviN4JdmBpq3kW8zSd",
  "key11": "5BPmN1zxLPA3zyn8F6NorCz9wouFuNava619mSALgyzRs2sth2Kt4EpxF4upjqmNxntepEZAzMx5Tb8oP6TtJ6wf",
  "key12": "2vjuFwVkGXqUb1tsfif3sebZgNdbimBCjHeZDupHB1qeZtcnDcfX2Kzutg5tWVnfgZHYyx8ppC9D35E6UUWuxSjb",
  "key13": "3cCW6pYqi5PzGh3zG1MPfAxxqsJzpnfr7u9nbUKcwLacXnJz9MBwN1yQeQMdRXu2GnxdCJKrHX14dN8MiGMJwBvM",
  "key14": "3QGbVwNaoFtMc1z411D7gzET4jyoLh1hSDD5ynkdn3tyRNe6s3GaKNq2FQb7o6qBy6mVvasN4Z4BNA3M1zA7zs5H",
  "key15": "arduTiF3gfi23gj25UJqioETFzRd5VdTJ3CASkKaPmRgooZsoUrViwwhoFacKm4n7hBy6VvUGpVULG1xPr5VmMc",
  "key16": "3guMb91FFLsrHj9XJ1Q2Y946XT1kFPmvr7HJ2ofhu2m6tAgPJ2dT6E4EHEdSNLCn5hbHYwBhrJJ9QGrtTr7CC92z",
  "key17": "5iC9mnqfpi1EAAkgqv5jatgPodawzaJYJL5r6Jjvc4zmnnbbSajc2Uo56K4MF56qwmQQVAv4TzpasUqMGt4ZDPum",
  "key18": "2pkFVs742yM2BdpDUY5DaAxcUZTgRUHNRo6WEGT4kbnbN3cwSebVqbLbLGVoPqW3GtyEzVRkVQMAH3nZ41ptoHPW",
  "key19": "3XDjSkn5twJNThSLQM6Ei8hhcApNsuFkEVmxpvPvLwnejcwwwN6GLrBDC8XHgjw48EXucXGEKMnwLKQ69sggyscG",
  "key20": "5fyejGEZyyYvsttydjDNBTpVPa7AtcG9bsYcFSPg4Y5PwkmGwg4ybP5J7CuegYRzHua2zkpRisAbVB4Sg7FBtESj",
  "key21": "5njbagLuTKvrTNqsRsnenbfePzcwaSyPvrdrMeRYNGpcXuagsWV4qz7nBX3WyQeokGKLxgEdWEcBFD293uz8Z8bF",
  "key22": "5xBLfm5jUgzkf7rvLcLz7PQEwuN89WBbQM893zzFRiBdDvYELREmHn5mutrGEKAX5zyNGrjTdBXf7JTPE3U4xhKL",
  "key23": "2TmQAdKB2aEQ5MBEo563idCvW4WmtTm4yWpBW29u5Xp4RnYZwsFJDmgkipE6RoqV7RH7TLKB98Wz3wURrwMbci71",
  "key24": "VMpJ9rwGx99Syk7yz84QaB23HnjRDbUHoDi1nDyiy4mgidahpWTB1JvbV46P76TfT7hsn4iRo16nNqn25uNXpNL",
  "key25": "3x1L5D8wm26GN7D8cKNDcwXbwgPZ4kJ4XhYjEFcCQyyXLEwggDhFCyNrF3xn2WwkpzkqsL6jAF1Wp5vyRrMVpeTi",
  "key26": "XxAEhkcQHaca937a9eZTP5uKg3FsVvMjHVc6SDyQ7f2uHdAJuvZmsExgyt1QMX1fsYgax6VW39AC9SPHuZyJ7Jr",
  "key27": "5SUUPJWDpeCjMsSNmCHx2aniZqVC2iKdspUfsLcCFJJHsz9VChZbMQGhw3nqx26TaQkTvt44g216wzv7Wb3fcVDb",
  "key28": "4DxpwtBvqby29WBaM1rHHUXNvPUYpRH2ZR2xALnjRU98xaA6YMvdwyRWa3regLHnbFuwwwFAsXDhwJBCgXnWV26c",
  "key29": "4FtQC2jwJS7CQUNSV6ArYP9baYmPzb1cETiTjkiENHVYcVcZxLqqLcUMYb3PwgtcBShBgMj5NMY5ySsCdMEZnfXN",
  "key30": "42DE27w4cJTzgiZBvvBm7qW4bYWXiYhy8wpMgFkfy8uQRafW7Q7vgtjyB9ZSFxUAsLkgKhtXuHQcrqdZ8SkV1C2W",
  "key31": "4MiiUbXanQy4Ltgfic7b62huXME6oDbSUC83pvogHp2imk86m6jENbKrse187ZcvHKTSbEq9ax5xMTAa5dp5QsYG",
  "key32": "2prnXF5FwgD51J9qdMSvpj54C38CD6YuAZUMgPKqZ4F8v1TniB9QoLiS1S2WjwB5ksyfJJD64incqJ8mTYrAGMXW",
  "key33": "uGLm3d46BNNjiZLQ446aAKn1rwSz4uLPEiAJBeFdkS7yfLkGiFxBt5CoV913MRHMSxmaxMwKF1BAGptUrx7bjXx",
  "key34": "3VTvbqpNZGy4hYRD38zdoKEFufv5pz3TXmmgvx6hsDpJmNyPBgVkQFipv5LHJT4GWq15Wss7fU8VnMsoZUkoZNCY",
  "key35": "5ik5hD5jFWBBP7FfzHE7FYT3Yju6KZiwbxDPQfnv7f4qVB3YqUxo5dXQxZJ19VqyEbFVAq3B3UKohRSfwJySM32f",
  "key36": "5rLpKmxF5hjWexwWQp6LwJBig82EUjA4YNuxs7dReDNDoxE4nnQNh98Y1kSdiR7QZ5FuqizgP8cuueUTx2tGvDUz"
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
