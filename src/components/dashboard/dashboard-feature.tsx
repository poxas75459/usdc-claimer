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
    "2C9fBin7Bn7NEbpMjZPh7kuqU4oKDk4ZKK1CU2ZzuMdwyNsf1GFETZ6cgxBn2AcLFxRQy2Qah79zi59ECo5HmtHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26JYVdyBS2JZKmtjEQJ5esSx4EsexYirpGHajqbPeaXpaAjS21K5rXUaxQdrUvaEtThmPSRPbTCRKgrDLEo7YUqv",
  "key1": "mp9U1zKUC4dbV63PjoYsJz8r7QMu64W1s7Q8RJFzGC8GKXNWdumbEt45WFJheC3LBpJ1We8hn3dTP1pxGVV9GY4",
  "key2": "jG5pDP31kfwe3uwdAA5SkavEg3jwGKXi96u25faxCtjywKzLzgTnX13TVZRgP24YBY9VHrhm3EoAb6cK9x3CQtF",
  "key3": "4FJ8w9HhSjeURkxvh8gV69HQWiKd1DHJTeSsrbKLnrkF4xGZKZA5m3tqPz6mxmop3iy14XJkfLQKsjxbnBN3jD8c",
  "key4": "29owML7t9g4DeTFdMunvySKkejbbS8DvKKpxRsCw6qWWigSys5sCNky2V7zbw5Fj9JiaE7UZ8rrnhbZ6Vaz6N3PR",
  "key5": "5fbi8X7rBKv9xm8o6iARGthuDaAHcLY8YowecTbfATAUuD4Y6Qn5e8drfC4TVead3VVsuBc7idFN7FRTZakw8evT",
  "key6": "56yK6iHFRAYPjWMyvv2WFyZv4xX5fkKayDdRAbvZywxZyc2hqWUzm555bysUzA3ddm3SbNagGwb1ruiUHMcYfqQZ",
  "key7": "t8x2NBgDZ39EMb5241LjeYYwYJ5eMCthWZTdXpkUpp3kVKi27yRk2yjZkwChHY2cUzmfnqgBYfNK6kjFN8tYM5d",
  "key8": "2Cjx1b9CrJNRb3DZzP4h1MzQRwTfmrYKkvXSbz9kuGvb2qwdAVbmgWENLGQmbY9X4awzADK1dydGAxv2smCexjG7",
  "key9": "2qeP443RjRJd2JQ4JHArKhbknghKbiuypAX9C7FGL2943AMm78fn1Xb33JpesPX18nUChM5YKJfmhLhyeiyBEX4B",
  "key10": "2rfXqY2Le2RsaY6CgP3MdkCwPpCPkbEM7hHKr35ijjzGrcCG7zHwnQQx3Gth6tuhPAEiH5n64NqokQAoJwFBtxEz",
  "key11": "2tVoNmiQnCf6f8mGASQqNrMXrAahoEYYcowyYtDiZsBuheWGqPrGTkk2nxtuhX4UG1krEwjG2Q2voMNn2GTGPL4t",
  "key12": "4X93DgdEy8DVVAazwQYBVKxVGTswG4GnZ2DNjfRvVuUdDyZ5YwT5rMoPFvcDMFLPgqF5b4LyYgn218FyHsJEAFbm",
  "key13": "22mNnZjEPr8hEMRxKpUzGrGcKLagDJNqNYSfYzDKJFJrohy6rtoqnP64FpcisG8oLypEE2Un8xMSM6wPVKMAtXXS",
  "key14": "5TyJGmmeThFuk2eAaAbspjjWDHgD5mU5NF8iia1oWhKm5UrRAGyjhodEPiy64x5GyCWDTw5f9wo9TAyaekSaXPSH",
  "key15": "3Ke1K2wVEg3mNMmtr7Ayk6EWrq6a3K9MaLHcrresgY9rrumS539bPvEBVamTGpn4XjtFURG6iiRSs596QiYotqk9",
  "key16": "3WG8vbHQKa9EdtJueBhr45SApQpDPh2hPgaeoRm2XRsjXcJF924EhSqtfu8CcwA3X7QGc4LucD8PtUV6QHkd9ygN",
  "key17": "LgE6aQmaWB1iEx7TBR3WGaZBVp1isTJTagAx4LJBD7JSDSL1kiM7knnBAXsV6HWEbFFC7GDxQyjM8cn6Z7dECyf",
  "key18": "5UenXmKLtaHMjHUcgjGKSuT3KRcCgw44qpxWpHBrmqYfLqESUY4JHU8BttbXkPAs8wUCV8GwU6zNuv19bwDZaBR5",
  "key19": "2pcRZnzCuFZHw2RewJDkSgahPiXCiC8NTeSftDhwpQfQqZCexKUqeopugsR2prrYSDwbJbtX5XGodTvZMArK4tBT",
  "key20": "3oV9mzVvFjitZKda3bRfuBSyhQvvKtZxHVFvZaYrGp3rxsfD981FGeFXFQkMD1PwZ2PzAZxfP1keZ1aJAKfMLKpk",
  "key21": "2XJPLu53wJTVSYjAZ491WECqdykQ62wRUcBoSM9x97GKWYeBJ5ccMaPSr73Es2tngGcFDVeuxa1nmZhGgQ4VvSnE",
  "key22": "23oJ3xrQKLJJ3F1Rdf8xmZFHiLba2caNhjURtkwzkYn949qALHBJRmcTnTsnzfG1rhkD7Uo93n267nPXv977Rk3A",
  "key23": "4NTH7AiYHjPCjNWHNqzkmnqM2PZZiZaigPxha45JppF2o2durPMVAmrk9yN94kjasc7tuSMKNiZRoFPfAaxbkYJk",
  "key24": "26AoVqpSruNVDUdkfRCi6Q6kHKJUu1r4woVAseBitXcqBW66unq5fLFUiDytzBcyFVUNGUewSrDArbcpemgZZtcu",
  "key25": "5URH7F9nEy9Nwwn2kUYiPQ9XV8c8hp6ifpe4A6WYcatSHV9YwxmP1fapnkYq4Bw3u8y57E3Jjd2LmrsjXEpBHLoH",
  "key26": "5nEeRofXAJxohvu5iFw82G9cafaYnMxcazX8Ppxyf5Xo1d8z5BxNdgUKwxsnH4VCSDkrRbky19EzAg1CpfS2HZ5D",
  "key27": "4cmXKSvYaYwCq3XnsV8NHUFb8KtAyFfr94s2dGVyfgJijEeF3GCtPv27pja9ExCnfGfKfAJpeBYcobL9gtN34FP1",
  "key28": "5u714uJ9GWdT1gm8SGLm8r1p9b6t6YBagXdtLcUBTGbF42TG4FUis6EW1nnoM2PWTk4v7FJqhvbciRPoWumEVYab",
  "key29": "3FHw25GbX8P127QHajMtKi8mE1MqwLhqQ914WZMiq6QScu2fdjPBw2cGkUZBdqwF2HJ2kxSM6qetjGdUbrwy8fcu",
  "key30": "2NVD5ffejp5MK6Vx6zuyFYC1DvHtbxsvMSCwECmZ2U9j2GMXXYxWfy95tCDyERWYfcEStQTjpMzpnHkqj3Dhoe1r",
  "key31": "2ZiwzUyAQ3UYT6kmJMJSJUcWucBkR5snFXiU3RUoaH7vyWgyA1gxHjkXwf3jfg12zsjMUzJutM4JEari8w4RUdsQ",
  "key32": "29HfVy5GfrZeKf7E94ih4gM1YrkCkYF58nARRoferPdXr2AriLSvKGd6AJk1b8N2nn34qYbrxHi9Y9XRhKpj3J1K",
  "key33": "2fJdMqyFTuLFBfVfai7KSWNHJFhfDcPWFBmvYifNjSYtRk3WzUxTnpiSwsfV6aiNbkX3oGtn4ZUrhyWSxPxVEffX",
  "key34": "3nhU2aRVioUKxqJnLVSQHYiNa983Qr2HSm3sJifuDKk2t3K1732ak3332zGeM7khDUYVibTqDEeakX5cPf56Cutr",
  "key35": "5c3KdFjEB166fVf39LPsc9yjePvxMd1dYCgxeXegs8AdDk8BRwCjAAPgS5JGRN2zutCGeqjxSMrMdWhDhw9VeMwM",
  "key36": "fygf3eHJqEKxS5WySrNV7vZyK3PGs1a9YcChEoMjvYsGCjKAcaP5Q77umzdmqC2P4HEKrqNj6QTk4P1b9GWXGHj",
  "key37": "3NzM2xnJoCGh3s9WDSFH2ZPvegN2CVAKCKnzftE5nz5e7GF6eDoy4Bd9PrBoSfWa1GkakuKPKDWLvcVzvT92W6Tz",
  "key38": "4QvwDbMzs9iJa4AMTmYY2VCVNtiNXqVwefx5uJ3baHAvnatuFrBpNpfwCRgPMbQ4SB3x217QSFDHc1eJExF7gQfL",
  "key39": "5ZivHUQXb3NswX9otbn4KEwbsraAVcu5kDhRReXcdgnKNHLir6xxTL8nxaKyAfbG33mTyHqnubRan2rWY5jcFTbg",
  "key40": "pzJcDELBBF11Hk5wRA38CJqpH5WiZ9eEMWxe7GnyvZQ4CckRsS7omVXsEAZzAJceh9zuQE87bedhHTZbbcdYUJ5",
  "key41": "59hcrx4Viwwaqd9XFmEUeDeYgroEUE6uWPxb6SDGbJPb3jFNnSmThvnk2NwyiMWmXdqi38TYp2X32s5VCb4Mapr4",
  "key42": "AKyoBqJkEDfBJ5kJ66S8vWbUezURTmYa7XzS7dyQkGo2L6pzLk4G686mMN71SuJoEBFYDazp8EmzyXhr1D4hKoi",
  "key43": "5gCL1HMTAscshzMgDXMkbZxVLs438JtEz8W5iFpGUKx9ZBy3fzBQNk3jgXcfXp6fDsLqzGAbmwkoYSfQMU3oweke",
  "key44": "67mkwVqVUHLzD1Di2Msus3rdWnqcsKeEjwY4Poac5Xf7henipojXMW4fkWWLUAitRBFjQG9NXrXh4i3qzpFGpWd5",
  "key45": "4NfsXj47fg2Aui453yrq1e9zZCp1DTJJ6xu4C8VcZD9xqsi4h6vFsn4awHwBhA265J3Wew6kJ4GkfJExRxCkS2sk",
  "key46": "5DKKrwHPyvhZLDniJMxQqhCYTckxJ52ndTeuce2uGNw9aAxwXP1zDUXxoHubrGnSDjVWsGeN5tRrS2WXqMwrJT2e",
  "key47": "5sAuqRMBb2u3gqjcTh4bJkBQPXnD7oc5gyGJwVUdCDQMt7NmTMN45N8bTf73riwCivpHPY3soSRU2bxH1ikMRkYc"
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
