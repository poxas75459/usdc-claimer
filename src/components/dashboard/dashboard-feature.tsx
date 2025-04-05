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
    "xQ1RE8FqzLx1RvkfseSLtWsPKWa6wbKCCN9g71GepPgwG9zeYFTSz2UKRqG9RNzzUDHzj7uHzU8HzE1UxKA6wgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mZSMT62BnFWWUsGVQ4b13b8eVZBo9UP9SMTzTyKhhxLRL14LpsSLSGU7A6NWQM93J6K4VgGdM1hHnXFshn6uVHq",
  "key1": "4tExSrDuWdg9KWjVfHHUewYWnZXiAhdgBBZG3fav2jpdXujiM3kQvPFBCSdPk5DUGbrkNijtgNoPdaHRNjwNRwnk",
  "key2": "5wCiZQGUakHUhgWSi5fy86ZuGPGDQdNvkoZbZswQzfZCELoWhH41Fr7y1ASFvj6qCmmsHh49JJiWKQKwNJsp2TyH",
  "key3": "qhPWhWtjhDyR3vSvnYV7turzYpWHPUqN2JnkvGb5Noe6yU9PL5Q75PhRVBgcE8TRZ716sGo39FvYyCa9kdoBScu",
  "key4": "253Ls8HgxpkjDp1S3mZSpk6vKW9fCrm6NU8pYeQ8LcsW4U5goK6KTfYWUHL3i9uMmmo36n76nU6iw1JYK4nLpGrK",
  "key5": "4E6Zwq8kVLXFo2fUya9vuFpkz3ze8zWMUybWHArhGCLQK28NLwm4CYn3Cu9ymFtbXttLwPB5zgyKKNECPeAQ73CZ",
  "key6": "wMj31uohmLxKgXTBrXzKCmbeU7Wurd7ESAWMhGYVDzhxCmhdZaQ4QgrKcuQExmjXsEgF56awwDQLeXwPhXojLo5",
  "key7": "5SmFojN9Vmn7YwqTZ7K1Rx4Z7LhHpxx3nws3xkDetUdmovDU3Xt2iXGWtqHemiCKXwkStpd2eWeji3Jtp3TusiQq",
  "key8": "kUQ63es85UDnTuKHuY9LpzSDUgchVG1Nwqe3fYPhrWocZYL9crPkcaLoRv7kVRjBV7kqi124iz6SFCXBg46Kyio",
  "key9": "3wg7r9DGBBGXti6teQzwxSg5fD69xrjbrCKkVsX1ua5d3kF4L1XBUJevxgofMJwVCpJ4kr6BevC1SgW3SSkegYBS",
  "key10": "4HqY5YVLoiJhBpyULZ947AWV49xmMP2ad6vTemXnGDsvotqQRDGajHcj2rLJzM3WCtw7wMKBuhc9LcqFZwgJFZov",
  "key11": "5t7ZXx51zahGJPk1gYitmtmwNsBhnn1k9n7RBxs5ozi7Nax2TVMifZfenWKSsrKyJz7PGeZGtvVDe1HEAW2Dy5cv",
  "key12": "28TAS2t8tFCtiCLNUhHHkn7tx55sVyhwigxe42xUVqrkcqjpuA2Mo6fVSXHvny7BHpVT6EAoHKCgJazJWMP6h7nc",
  "key13": "313JaP9Xy9jfMtBMXDRkacP3mK7VCnYBWruFpwCU1Z19HSpvdJDcHuqJjVEVwJHoQxAzg93xZijgPLuqvXJTfM6h",
  "key14": "P9DH6LPKMw2gTrDL8CoF64yUAb3swyQLovqB2Ki6ZeAAoV4yXCKg2RSSeGrnotnKzDKs3FCMzoi2WjWuiGSS66X",
  "key15": "cs74jupUhPnfK4njHYaruMrQN43gaYfyE8u1bZ7BMyuucKmdF5s9DPqm1HDcXt4zRducpRz5sq2jAZzEMJqnqnM",
  "key16": "447yLUU662KyYyYaL1p7U9Xm9ZvoNSJNswwu2NzqAVqtvPgYQbFwz4tETRf95SpvG9juRPQEA3gVP4u7jNtKH7Na",
  "key17": "2KZa7ks1yGjBZ7uSkbh21Qyex5mKjG75KMCBnHqVynViZiqzxKR4PBLPKHXhwqJ68FPvEfFDMrc6vsUfjo9tVfdR",
  "key18": "58drH4mvzEJDhHp96unP6ReNmd74QkdEQDtrcnXSdEtAx5t6r9zPoNCiFu1E9z6p3KrpKuXwUWavDK8QmoFpKLGM",
  "key19": "5twvoJ4tfKSMn4Ly9cFYmhFNEtyv3zV7vN5LDRyBsFLbzHjkFt9VRV2MYi1MMENaB4wH62PPxBf8kF7t5AiCCmqJ",
  "key20": "5PQ9uUt7KqDypwFXCCDFnLYDEdVb6xyv1VU2hvQ2a3Cr5vvpKQMAo2zriatzKwbcJcbpEJxHLefHRqBtmYQv6pby",
  "key21": "5VkqPj1iNgGVDHNmZysdHBwCG8UG4Z4XnQCZcKy76xoUMu5gwrQ3WornGsfKFzV556HnPN3j1MiRHCxDArc5hQL",
  "key22": "2KGYQsR5rQAyjbXFzFnVYFcyptYFzKJAVUzDmXUxxCuyd88C9dFovuv9jiaTuTtXfd8KuqEuak7BHba6Aov61qds",
  "key23": "sePi9pPsym4o4HJvzcx6Ykz4SdrDJN5XC1QoCJB3vuf2WCJim6ikRYHW2UAzZ8AYbAtNYUUUX4DMMmaT5HXExYX",
  "key24": "2oSQrSDSk28J83muKddnLexDKcNq8CHRNWDbCpHuCEL2J9xCCpdSDbLYNZH7A8bt4mFgTy3TF2gK5A7dFNFC6wp1",
  "key25": "5NKxXHQHR8etD8LToZ17G5KNPSa2WfFAzHvvzqTGTmqgxFodHKxHiX3GAYE4WJ3VDycSnSjm4MDtLADdxUZGWwMF",
  "key26": "4JDzUGzvpJ9oeM2NtbxW2L61grhkFhjFTNkmeEuH8FRDxgM4j6AQ6JYcjqEqV43oV2uQ2j43NJykLsMi4RXRJkUP",
  "key27": "2icNtgvLWibUiKArSTc6cWFrJpi6w41533yvQcSZFHXJ62V8tS9npYeJ4dpUspxsyA49pgHU82AhnhLGWFAchtrH",
  "key28": "4tJqtRdPXZfviddENY6AiMSqsn7rRinpZfNrvNPtnixc2z7qRYbiaBfonhisewTEczpKEVuFMgSbFAfv73p1RK4J",
  "key29": "D5aJrfzXusrUjFreudHg6uRb3SvJEyDTKwk6es4QUwMcZFkWz6o3eFMVynP2Q2megWywa4StmB1gcXTtY1FAaFh",
  "key30": "5QMi9UFL7zAePrkDJiqG3VZVYK6bcVRiAFQTpXvoewHvrXko6QscwZH1CBja4yYrR3GDCYi8scuvFvPUu5NPkQLW",
  "key31": "YpPhvZRxdm5jC5KkMZ322JTS5LepJLTEgYRFuUV7XzCP3hg8AocV5vau5Tar9dPhRH5W2uhYrg9igGAd9HcobBV",
  "key32": "2PoVuqhDDSnx1zHMrRBB2LAyitYeDjdUcVHBX578DbGT38KKogDHnWa3iDUTW9A7rwgCiARvqQCKr21R1LV5sS6k",
  "key33": "556YBL98xwvraiQ6ndp4GPuKCdAk6Ny3ZhGwrs9Hzt6oGQao25MerLLj6ujJ3bJ9VsWPfXh6kAGSVtVSGaPZHzhD",
  "key34": "5NMA3beBJyySAYyGsnHr4WNC2NdnaGqgeCBxajx5b6YdXkHUUQn3aAaHdNmUWD5sd2Lsnhw8HPsrSzXHrkr6eA9a",
  "key35": "2XcYrvhEr1kVrfjKjKCo5U1BXHdTtfMzwYzA4ZY3N4rNmNRgwSmVanAZgXTKH4EYgy85UqzqG63g4im1SmrySDb4",
  "key36": "2bDy7ogT9pi86NouDpVEanmTT7gWZVirveZb3s8Hw3drrjNhiWpW9vBF2c29HSE2Lwq3khFQzhJWKxQo5UEjFEyS",
  "key37": "3Xn616mN9Z1QLeMVQo8ba8dSmvVccqV58jHa3AFgqqsmPgveRLV2uWHq3bzf4nFiedAuJUh1uwjAfARkqEEUSLRg",
  "key38": "cqjokC9Q3YZzqgtZFXbSLL7JwiJLSAp2HbWq6YyVtuGuh89cSCdBv3igTREyuxNJA8MuZd4QNuB9wsPS6KBvjtu",
  "key39": "ktBYoNEoZBU3S8gdasfL2f46m3x12CzRqKAqYjpt2wMTMRitVkitCu9ME4xHGo9AiFj8ckpk3axoeu22XbFBVGB",
  "key40": "55AJyCZqCqiD86qVzp4vMqTasrgUpQEikLixae6K7qZigCBykfSJzpE11wEeEgw5qaXxYoEQoR5nPq8FHRhWJ57G",
  "key41": "hwnTkvckWKHA3vCWugZReTzNC9jkWUNr1C19NsspAvwyW5hnzfATCJMdrqE2Jizc537TwNNXsGFPE3Xx84KboKb",
  "key42": "AUrWZb5kZtdetos79xYsC49fV87FfgS7SegJKzv4n3RZHyWTYaWvjS7yE223PbpxZ7eAnP1Ru22mfpTNAHi6H8r",
  "key43": "24VhBarDVWpCKK2ffA9zo9eiBB2jZnsSeRJsmWhFPVRyGhgbnosQgM6DdXQTLDcy9srRamdaAybVgurq1YUMVZTE",
  "key44": "9oSjqKYHdxViasnUwYg2QojxBMLrCSCziT9gNpivpzPCbxhEpvGDUuMumkMTgMdDjQHzMWG4WAuDcAb39dsQ6Ui",
  "key45": "3isjLJTsBmzZaAzXRT6ZDtJFcHJN7ppgbQVUsQSNH2Daa8YoLJZT4SRNbtLHBhJ4DVkHyFhPZCF2oXVKk3waVnyd"
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
