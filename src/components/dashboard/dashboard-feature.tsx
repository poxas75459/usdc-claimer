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
    "4vZHMGj8J6SFExEVo6xJpwqBrHW5rcoCPdSbNugQvSmzfiiFKrkSDkvktJn5mpGqN7Ni85GdGZ1dSpuTwTUxDfkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z5GJk56DBbjLngJCf4nFkAeJLNo85M4xviezSuyqDafGxUhkby9Na7A3uUko6WRxXp616bDSo3SRtKcihiyGRvh",
  "key1": "5qyRucyoi6ea6mWbSbYTmxVafRD2SV49pRiRBdnGbfDzfqMvkU9K3i5uzDX21rHiPLQK1vvZykLMJNRbD2FpByH2",
  "key2": "64k8P29oUrdzXHgT7Pn58Gsh8J7THuXSCnf8eX3XY8KHbjR2yU82Bb2QiPizN92SpWUdhBTpZDuyVououn3Nssjp",
  "key3": "2SYuTsYF5ZLuMTjupdJ7h3vSE2keh5wiHNkvxA9ZzKSNXidazXfAxQBeZg8t5t19pkF515DBbfbmZso5cP1WCZTu",
  "key4": "2duuDCSYwEB5RtgPiXtL72HgLst1XFvs8EehSLAwDR5uVG5MfXCeXMM46QAQd8HdVGcy9qt4mDPpBff1Z3g2Pw4H",
  "key5": "3XMr43RYLJQKZbbgS1NvDuhsfkU6T8BKcKpVMLFmRrVxMTXRu9w8VvQSpjDVb8ihfeYo59RCV2KaJG4S5jLngBte",
  "key6": "2GCHEVEPHA5vNFdjSzKvxvJLpUVyAkF4n23qEPzhbzVHmWoXUKBaA14v9e8o4QbAo9Xi2D8rLiQ7pHGn8YQZr6qg",
  "key7": "3ty2Pf9ah4qB8j4BW3J4qkGLEvHXtbo2mGjKvNuzCccX4iD6csrrQtbWfJDh2GrZCu6DEj1RRq9dKHEZxoFNe8EH",
  "key8": "4ZHa8dZWC1XhEWnp2vE7DXTgYdjD7j1Rn1CP6Juwmr7Bg79fmunPMVHhZhRw7gW1hdeADtcW49DYYqNKXUPAhgzQ",
  "key9": "3taDUwPPd1SgUn2Sub2RjmgSbD2T2KrhcRHgyLnZqoeA9CGfY9p4WU6SLmR4o4hFCSS2NZ2Evy6MNETtWKRA9yAc",
  "key10": "3yMZ1YtmZ8QcLUgKswXdFRCvYYrGuxMFJqvLgBXh2uDPhXUhfrGmGsMSHN7r7pLCXFuYEdwk4enmnU56GUzM5w6w",
  "key11": "6fU6iZd1hhRapy9Z94Q4tsbBSNyxc3oXvp8P4UnySzRpbvSgjxXoaeDxag3XJ3q9D41UHQXw3o86HbNtR9sRwjt",
  "key12": "bwTSyMaZ6GvNYivWfLSbyprNjmkCKuA6ctHYSA7LhWXBid4g6iNGYnFiUQY7atHwQBuPQnpZGAzfuduZ1zoEfFZ",
  "key13": "5crLXRWB7m1qF9Yy45FH7KeszbXgCC1mqrcNG8ARzGDiDGk24kzifi4HhHYFVkhCDs3PX1Qi2DeQKhoMKbfnLzH3",
  "key14": "5D76ZZ7t7EovwgsLJhGkPYoxx7CyYeVtKDCuRSVoTFg36UMrM4HvZS1wN8Mh9YtrrBRRqap5KVdC7GuEppDS2NhZ",
  "key15": "2tSdd5N8wxSkG45hhQe5LT1QbeP1vDQLeR1Cg3EEerRNiqoku2NXocBjCafSNBGNpdMd1oGNTf91PmHQ1gLP1oG8",
  "key16": "64a5YB2xrevNwjdAS4cug6PkmKQbKHohGdRNF2jA6GWJ8YexvntZDfDcqgVk4L6Xho1rcpiuKcA6XghWH2VsU7WZ",
  "key17": "Uu6QrdMWN641cGLukBnMSAES635sDwcAsnvGoxMG4gzuBk4angwzAWeWTuHVxAfoseSjxognnXqu8opCH2PbTQt",
  "key18": "2ConVZz4CvzzQHefxSEPSntmVeoNAZh7nAFDSDbYRNq6FzQ4tiRQdsFDddYr5CJegG6A8Xxk1znu9jRcKf9VvN1N",
  "key19": "22hW3HLJweG6aQUe4hCdQixMGjDWvTKpCytCAiacPaGmZoz68VC9u1aAT3FUMX3fw3DyH2rsTRqCwNATjXp9f7Ac",
  "key20": "5jRSwA2LGQseUbfJR3qBmp3i4t31jmQz1VoqvigcchgPkWMAJwzHPxvQsGTFSxsbrG7W8f97h6iK7H7SUwgxHbcD",
  "key21": "3ccvLjTcWVpL4FDAAAzE53bWukh1yhKm3oDxXwPkSJEiLcHJndYp9cPo3hDzt1jEsSq6euPChgm5svExLXDoNrt2",
  "key22": "2oQuBfZoe7qxrqUjLrNjkypFoSkmpdYtVdTe11BD4gbPYpUe8Rw2MWdRZpyUWmqKCpcHsdtyrTFcBFcWPLEU9Yo4",
  "key23": "5ajXqtGwXzXDTMqw6fBH1fdg5SPSdxdwEaFKb1jhHPLz2tUonFSoEJq5dMgMcrnqQUzFXgMtddKF9mX9PzXiJcqU",
  "key24": "4ddEMeNNw1i3pQCj5attzSakGZ4PVVfPC7R9CJ6k1x7TAawQ4oiVb2xqRCh5iFjycNhfdNU6PQ2KgFZt7ZH1h2uN",
  "key25": "3b1kqLqLKF5uavtdgwFuxUgaLzUkHzYQXtLLMPYhzg3r12DPa91twdsu4YZBgN7MUYA82v6BugXCrApiJwiTscq5",
  "key26": "36aX5JVPuoKQb64MAmCkrYN7Z2ws2bRVkqmXEXWxpb6fzT38CtPRsDwEeE7offRyd5jvwE8P5w7v7PMpxfHvuyUK",
  "key27": "3grBi9e785ELtVv2QNydfvBUW55uP4Qt81zNzDBTEUHT2gLQjxCvHFCbnpppF8Sp4pzE5H4S3YaYRgJxn3T8xPG4",
  "key28": "AX8dBHfzVUCv8FMft6PN4GpV2DcxpGw37JVwE1o863xzLvSH5w63mEdAC3MTun1eQ8ioCiJWw8djAUpPTqC9hU4",
  "key29": "3oYxdQqiDFQWfzW4nPWwjkZgdycs9p2QWntf39rPRM2GYoDEhvscDFsqKgS9YVrmV5T81BcepmzXDsECADr4ySio",
  "key30": "3kw7Fh1tD4LdrzKv7qbkybqneccUB1pBW5pi7e5MMs61CRfQPKRfFiyYSq1DtqVY4T7Pe8dQU6sVt9qrJ8GVfdNB",
  "key31": "aJX9XSL7HpS8qFcUAtyqMNmEfhWGEgn1qe3wqffd89VS3eTsUru3zeyEq72Cbead38ehf3qYE5KiHAwwktatYZW",
  "key32": "3f1tHnroSFFkMMmc6MqyPfctBpoeALWDEfHx8bpeyVmQHPEnCFWS8kGPXYUiqSFXBr4q4MkrACEmGoM1dC8Mn1B2",
  "key33": "2wi7GnkHuFXAG7Vm52QJ7PLL3uzu4mrsrvqXstFWE4oZRNSTr4BDLvWt4kvGvrWnjC9NmCTvLzY6u5imG8PgYzer",
  "key34": "4kG9AU4EQioC4eeeaFuPahWFxFYSgqjNhUtTqjgRk6KSpus9mZAUF34AfNgVwnKCJV1pnQD963Nr99G4fKVVvTTv",
  "key35": "Vpms9fMXvx1fcyihDaT6j9LajZuKEcpfFDPqngaShvhyjjJqyq2XKRcF95yWYCTsEGQimCRD4CLpuLqa2F5xCNR"
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
