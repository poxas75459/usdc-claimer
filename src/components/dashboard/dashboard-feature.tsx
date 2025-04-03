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
    "3tYomgf1iNcHTP8ypZEzH6ii9tuVaNocZR4VfZCQo8xanxXuR5ekYX8fiytUpXrx6RSFxLcZxUPYzMrogAS6Ybxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lz2mRta4fPSbes2HBJwjyK5XW2XHMy5WvjohzeUqoQ3bWhegZ3CfEwVoKqbRtMPUApafWfcJdVHNxcs84RCLoZk",
  "key1": "Ls3L89SZurBKLKFKDQtTRn5CC26qun9XGQFgeC3b3DBcYvdoGUMXviKi1Nq6kLRrop9pUYaRYq8GEkk8iKkkytW",
  "key2": "5Ldg4UeSoTuTmgr7SvYYDT7anddT1HrBdaLb9dbsvUZbjMMjCfbZRiFcamgbouj3qrXfY3Yqcb7UhGRNswnrTLZL",
  "key3": "5f26rbJm9KSK3vspqGrjMApkgUYQQX6TiDNvTcGrGPRXTk79GNz2UMnVJ8J6SMnMizozZBTYmBinSD7j5hgfQGEK",
  "key4": "2QVmmUkeryxh24FRHaE2NMQ4hgFGh75tCVyUQazFKEMeBdRUpvD9UimohAjdgYny4uLtnibfhSvLqP78gJGV2vzq",
  "key5": "63sY1c3RoztTR8NCyFmrskcVnxYnC39wn6swvVBJRyWeSa2KKHNzuyPdWGwV5SDuZm5MGXaQyzcHzVX6Tz9ESpHH",
  "key6": "4ogdrGaMoFZH5w1uZibtS7kerPw7qFPbRYNDeYuNChbNoX4wYWZSgpe7FXvjFU6ARsPRp8ze8aJxd7vMh6RT9DeQ",
  "key7": "5bWaiTgQg2q1ByLsgUaN5CMcai9pYodrm1d2BHXW21fs3XECQ9t3JNhnYpzM5641AJBVafs6jfJVupxTBg17UVbZ",
  "key8": "3gpLbS2EwX8zCMkW2oZ6NqiziHd9aDhzENLGdFqYncTb3BkHxCXkLLnPMwMETMUbGdEyMWvxCVUYJug5R9gxSPcK",
  "key9": "5EsLKm4q2PpjtauP9Bb2kMsp9rh9j4ET92GfSMccrcWXpTAayKX4cq4KSBNxA4Z59g9uqTcRsGYpVKh6NpwT1UyR",
  "key10": "4gjRd6Bb5CpnDjEyCK9sp8GmauVcJse38cCH5GnuFHN6T46mt9BYEJCkziJYDkhKKLC8NqWPShuYZBLMkKoRNWjh",
  "key11": "4Hu1ikJVU9QcCQNp5qUvNtMgSpHJMjgPEdssqLc5GcQZbVqYpbTrKCBzZtzLAUzwtJMJmHQZtrmsotVzCLcPBEbJ",
  "key12": "5w4bk4CfKByMtMeMtPE7T3TWwBYWcJL6QkSWFJcaV3tavYE2dwEfaD4518AxoopMDaZX9yooihuMdLWHrsoQQBp2",
  "key13": "2pqBeRdzRDLmTVppFAMLzJy3ER7rcGQFgVQpr3E4YkNWYjBZu9aSnppjP3GSQeRZb4k94hQt785yvPojyT3E3XbA",
  "key14": "2ZZENFHjiMNtszFpywDAhxnHtz1gAosEFpUoB12UuhxmC2VeWTxabmQ1ewpVk6aGZbkLN828CQy5v2hwhPvKdBgP",
  "key15": "5Aj1v77KYwv9YpfzfgyhVFrfhiVrB3pybUXDzfAiL5xUPZQEh8S8i6tcM2fSpyP19Pyvyk8g3dnh54ECEJZYKpsM",
  "key16": "4C1MQxhvzKoEHkPqmBjLtPYmhteVqmy2yQRWWLQodb4KQokECFYT9ipHM7U874tP2mgZffFrLMHVj3QTvjPxJk1k",
  "key17": "5iaJvtnAa9sQ6LPsiAiCb8KUvCeauXj3shHuo27bEaJMikmXvtvDZAnzKHoCxKf5JTq9oD9Lv7MT6KAirXJxCWCp",
  "key18": "5ZceK2RWVfzNgwcziyaQHVfKMz8dHQaNg4WmZrzJVnxCFLCu3K8kTafe3L7T6RLMj3MfJ5Kcby4debyAzdCLRgcr",
  "key19": "5Yyo4bVkn8gUNaH9iL9fCdnVWbe84G1L13ewLH4EzrvFVMhHnesAJf4EW1zPw2vBsy5xVR2sbaSv985TQRbJRdbZ",
  "key20": "2tQhMKXHp36dTPHjDAPWxzbmCTrvjaG8GkNWY7rdoZGaFCEfWPnd44QKdGjhU1CJqpcSPkk5fcAgSdn1sBrQR2vb",
  "key21": "2mK1HycrJ2eg41ScpLk5YpCBBGtMijiA8Y4Mxy3Sfz2cXaxWiCLysjSi1wrqDezCtWDGhqenA21dfpUB7uMkUcXG",
  "key22": "5GU9prEYsjaQ5pEGFV5GZ59GEW95uLZ87iGPN38G9mS9A9xzDWsoCPCMWhAWGCf9ui75LsCdVm7kK8eZqP71mguc",
  "key23": "HXGDJGGFMwfHBCdWAZBhBWrgt7DDema4zFLTPtuNk77uW8W66XHqsbDT2AQyvt8LpFpCVLeEWjHkMVzbqc6rc7t",
  "key24": "3PK6jCVPCgTUen7yo5upw92R5FegnBFJ4tiWp2BPJGsPNa7ukHuEBKG5GrVVo2fdzUNEirUeFQdWbgrHVecyDQEk",
  "key25": "27KyUAuhnJ7ih8a1VGoe1qZqbh2dvJtvRge3qNXAfd9gZ8YySNXWfpBDaqdMGkLZTcbHNH7Lz5DJ93gLHWwwN1x4",
  "key26": "3vRJSegSupQ7XPWui9XKrFg7zvF35GVnSkhPJ9uE925wjt9smEvKwHZw2tZGGi8MWLZy8iZWWsSRGwwXT3RjswXT",
  "key27": "5rvy5SyKQKHFt473VMKE1RcooXGGiNCrG3WnyWXrGpLYP1u4dxQUkCxGpNcVcw43vU1jvLbkopFsMgfWaFDc2m4H",
  "key28": "5Yb2AEAweFLZTRhm3iY8PKk1vC83Th4e1KtAnxygYBYNUQ5aYGsePvsVu9SGxJcXXcYBJv3hRFBdPX8iRT63AnzN",
  "key29": "36tHuY9HG3YyTS2XiTjFZbNRs2hPovGjur4ycPzc6zoRVu77EtyKkJCuygEr9b1qFA1bQ2zgWe737Dwfo2ihNTmX",
  "key30": "GAG8nriA5RRTHf2reYDJ6QXSW74rndSuQBzQwfw32R2dwtmPcmtG1ovQjEnr54d2wpXvsiqqzZ25rPTcwDirfKc",
  "key31": "3GDAcrF2qFanhUyUwE3pZhngESgmFoX7m55HJYfGGbMU67WoLmfDbtuLoUXSVw2AhHV79YMf6vvoeJkM4uQzRa8P",
  "key32": "r8kAwVSp9G8zHy8fPPcpmTyGPA5nF2dgotJe7jFcfcSoaaCyYmc1myUsggf9pWeDDL5aNXx6mzfVT8LtgfEzKM1",
  "key33": "Z7LvxZmTCCknckL8AGUtALqPfjWDk35mj8pgb7bEJdT9bXZY7pCohUzKE882dFSJXGh1Rr7qdWjxTcs9UcCz3tc",
  "key34": "29TLtRwLjcvBpqk6Z4ytTz5rSb8T7axkNicd6bnv7DGcCkbXZ6vRrgtoqQwUh3BVMHiC4Vtq9jaBmMmPnSw5zqp3",
  "key35": "4Vu852HPqQePvV7qRwx1ajznwDeUqMUZFyBc9Kqk5J6CGAa9SFC843xzQ9vNuZkUTfXTkz7feuBvLeQSZGErihEd",
  "key36": "2TJtZ7buSyxJevzRJUX6jKHrK4SjDMvs5Ztm1Nb1QkKkB6kXF31pZ8433Rv8fH2Jvwzuvj1bTymJxroCbhzLAXPj",
  "key37": "3uyzp91mZ3ukxELgShKdTfpw5t4FRGUAnZ8xNyq9oEYrS9vGNCevXWVL7atUja3HqjuboK5n3tXcdSeno7V5xAmK",
  "key38": "2z6amDVTt3DB56hGECcPfWXxhY227ayMeLie3bebePxUi6aqspzXtM22ZbLSjRHCRTWydnvBTuKmHoC2YZ8Zuj3H",
  "key39": "51bZX4d42iyZSJkMKCmy89jP1jSDM84wBQjuDYN6hs85JVoHM7vMhHJaPMaQ9MRDM9mmpDyhWX6e3vfTNCmAnWUY",
  "key40": "2Xk6hQR2MhLMUL7DJYycP9KY3Gktg2ZsBQ2vWhxfz6ZkJWSkjb8sve1rk6Um6xu2ay6MG78SX17rofNxYfEuqqJ5",
  "key41": "4szctQo5mWboJHKVd3R8V5yr7KV7kgiZyKqr7qGSm22GoPp4CLYEBYY3o1fRwmawA8Utj3P4cztuteBPpVQiXTh6",
  "key42": "23xMspKyLCy3q7ygSYhjx4KeAjWEma2knjRnf67X3Gr9NJnogudKNV4LxmqGSpov6kQCwREyKDRo1YCpsJ5LGcuR",
  "key43": "4cVGAA87Xx1pyQfoYRG19jEn6hmCVKPc3GzHs3umcea9sq11eas3tEoLEjmew1d73Qpz21sfntbrHz8oh8QabfgQ",
  "key44": "3u2kqmbtFhutaMuDhUGmTkZFvvEEnX6V6C5RWCqpBQpogCVi6qyG8RphgMap7R81BeJPH1FYAedCCsXaL67sssbu",
  "key45": "5wceMoEvKms9pTg7n9nYTmB4ZHToJAcnN6asnSPq4xo8ddMyHe5ugmZoe3fU6E89Wvi91A8HiYhAyGp51dbdA9ZB",
  "key46": "3xAysgxUzRzLhPLpLtZKoKA4bZsK4nF4PytE4mcVuyP3FZFUq2ogYpeAE67HBM6YYuUdYuyz3HAMhHrD9egNJb6j",
  "key47": "Wxq2iCbtUxvoQ4uwWUAPNst6FqM6HnpbMMraFS3oTNoua5WMRiMiPVnZ7ezsLEEUkHdFUZKUgwCJAtAmFLYu2nE",
  "key48": "1ewDgY2TMHtWV8oVhwSkhVM6cJYVGSrELkfP2hePkLZbDRv1hbnopXH4rhVd4NbiDW6SZjvrRxUcnKgC3bvtsNd",
  "key49": "4dWTEgJYKUynDb3LgZ7V4xMkSpuVj4tQ76GiWddifiCWoq7VwaAWQrn9syyEsSBPFcoykiCBJPmsZo5T8cPVnagq"
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
