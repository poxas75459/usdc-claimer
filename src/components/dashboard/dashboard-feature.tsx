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
    "5v1yCEZWozyZbqNfZyH5Tyth9srrkx8TNbqB5NZN8QSnGYcNZHXcja54Y5EkovnmTtaDm8wpZzDJ4mTpgrNQHPSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vjep4yjNKgnGG5WwaDUAEKuSooCeA5ngmSFSv4v4THQJS8FtLmkJCKVsnjiBfToPtnjp77PRQHoPY4ZeqtQyPT",
  "key1": "XEHj2y5ScL9j6Q4XCgiW5s1ZJPbdp9gASe5WGD2QMqQqC181LwBcSTwsTRWCcL5oYvWbk9xj44xjm1xxyeQZJgt",
  "key2": "26mQRNf19HDHVdYWpppHUivZAMW3RdVZNVAFdS7dbYZZHLbjNgfvqsHxhcfJjmi4rC1qVXtLnVS4ZNKmPWW5TRrJ",
  "key3": "3unJgSFnfbDiLVm2tFxMUi9k4JCKb7WktdxG7fueb9fq4QE8pmeEEgVSUr9Ps2vKHcwxSU6tA8F7XMTJC412KH1n",
  "key4": "55TTQ97nZNN7stfET7xrdxZ1py9RHnsSFcTgRfby4d1sunocZBaUwdZSv4tPyhuEPQzGv26RD5yaubyvqQreFhqq",
  "key5": "3HQ6QKrpu3yRmFr3iWL69s8yHCtbXFahhqUnD1YXQMXChs1RyKoXxHyZfwCjV4G5j3sMgy1Txsoz4R8atRF3Ggnp",
  "key6": "4UiXkF9Vo7UbBAt1yBzEcZQUa4tQJr6qR22LhJMFmPmsmc21CvHrYBZMpQdd35qLhFN4wTtpnYUwFaZJDh4eRrEm",
  "key7": "3jAYMWjP2HiyJPbS1k3uR8t6eYdK6ypKMsowzLnNTJ59xQHR3Eyc8Z1W49GRrb7naVFiBQykrBRdMqdBa5qJPtqR",
  "key8": "63Ndn4n1DBvVZeM8sm3bUUp5hYZy2ttH24iv8QuJySQ5bgSnuGpsBMDbQkN1CWi1hG4DqMZbkxFSpRVu8MtYcsz",
  "key9": "5taH9zUTL8PEH5d5bYTFjLZ4qdBwjnHC5z1mgof1C6rpsasjywj9djDXziQqdp7Uh9t5nGC7S1yqkaPAQaLewoTq",
  "key10": "3Qkvhbsk9DdqwRjJ1byUZDK54szU142ZbbF9WCgz6s4x4maMX6kyAkevshUNjnZ7EevDCeemYtyuCdbc5rSAqKEi",
  "key11": "2dbV6xZz587BR1d7hQj6hHDA9V1GMDM6sweq5ec8yHzkcGkoNTeDEMxdctL12iuXwuviZtTzdupjQoXRSuFE9xPs",
  "key12": "kjBEiPwr9QZxEC6suaGbP2ea8D6BUbatQncgBeR38sgwmuqKfrVwwVCwEhvCZXWJcnvtMy9Sd9ZcNmqTCmR3XaE",
  "key13": "5rXnWYzr6T4fmzn3TdTrihJPN3XiLDAwwiPHB3F7L1XbSjgdfadziGQwRZSU9KAPHVHtipL9kFTiE3PjQtUT5UFS",
  "key14": "7eomCJ8dAhnA4amwSyUkZ3cdeQcC8iXmJjN5GLkn8LxkyDQVX36EM5US7LnwDH3uNXSGmzpJ7L7CCRiFCZuf73y",
  "key15": "5Km151Ytz26v75QPLPXLeESsXhCfWdPKgcUFwxDLpXKc3kKLvhgnyZGTgswco2DbhCqWWdYwt3eqBcxfSDhWsGKY",
  "key16": "5QMUgA7zxqT1mR2gnmHoKfaKJwHfBYQKtekQHyHVz13Baou4Syo5KVyn4K8QHHWcjMnLYiYayLNeWeeZHNe33Uyb",
  "key17": "8wGPJYcyNbSQyA2PvUE9YshRYLEMcDQMEkWW1yFWqZ945YSSLpXmStADziHm7BEeLGDuX9LvVp6dx4ZcgriaCQ5",
  "key18": "4EusjP7rzP9yVAMT3uJEyN39XomML3Xgmgj1z3VEbYi33VQVc5NBXMPRZxn2sEw6yk1dBx5GPZuWrGtARhzHzqsY",
  "key19": "287p3M5rsv2t4w9udaDynCJ5Kmw5uP3yeAZWNSeNFqPyoRZ87SjPhNbayvZf92vyUqfX8JBWDQacZgVUFv1NrpZs",
  "key20": "5LFFFsMiU2zFkt8pVR7xjDQriVLXEfWmSSivJMxsLfTvipc2h9VdrjrDXqQYSAufswA2CJmXTkgmDWgEARN3ZWMr",
  "key21": "Cr8BdugpuZE8W9DZXw6eXFKvonkixXgSfeJbG3oNfRi41KudgTfHtuD4v82Ny6RjNMxBHnv5fmWWvQukkwtGRrM",
  "key22": "4xbk3sg6NTkNPNpkQLW5zqJrMjYGpAXufYvAcagoQDs3uEgL7ZGzm4KBwgKrMGh4LT5ZsutVfkH1GjfgCzDiCnKq",
  "key23": "5ftrwBhGjiQNKdrpCtgHdQegUnFky9FKtUtTDPhDRbNkBHtpeFiCsKfYAHiftyzWu5ahWYEZzpn7KTbLpXKhjwsD",
  "key24": "jZDAKsKenPpSZKqFbS3RDNPUA5gZeLsVmJzZWBHxjzCgji5SuLH4KuFPgMP2tN7YAE7uGqvst3quaE8dka7VsuF",
  "key25": "4YgUo4C8Kimq5aZZNKxgoJKgEhP33zoTZYULokZ81idQyD1QL4h2cMSoVQtRhEyiDpTAiFpdazHMxbDCRwwHKx8C",
  "key26": "4xjJmwJSD2jQbb9GnAQeoVGhGCtS7L2r4YBy7hH4MdmRGtmTwiPHMGkw1p8CKsh5qw9MpWcs1sGZoD8Pbz3hx5cy",
  "key27": "w5A9BpP8RrEtYPwdqz7eF887HMTfhYmi8pc8HVb3yyUPrAJTXsX6QapMjY1uQmkfpRf12Ega6Y7Wrnu2kjwXKrd",
  "key28": "3NisnBJiMMRKMECLpUwFpZUWQmdG7x4zpY48ezxXo5w2xyeEaWwRRxCbPHB6t2Ya7hEvd2xf2qJTxnk1e56EyHEA",
  "key29": "3LLxvwk9doGcmyFcKN9rLsFcMcAAC2breRmwQjg6sYriofj5K1ymiN4Yx1GGu7HH8vUEY7HhLzteY54EdPJ7b2xx",
  "key30": "3gpVobNy94M4ShLPFqHpLfwaWukkbcZpNFsRaG6QFBBNaRs1K591sysEDEb2aXUKjPvBsADTY9DWiwRNQiNPbCro",
  "key31": "stuey22FtF2tDrB45JVsUdyPE62Y6ZbumJd3jUN3SD4Pj2bYfiZdm2hjzqBHUHUp46UyJBXDnWdVFc56A2zvRhv",
  "key32": "53o1DmZ7AgXwaK8ko12JezqWip9hs3PP68jRPEjCJpxjrvDgByQQv7Z2Dy7YBBRAMk6F8vpgtr9LyYhah6BFY7H8",
  "key33": "3f6QhDPH35GwrxVpbcjeLjZeqev1wsvcb8fhJt9J4xvuj1m61M9eTyhyrQxnMy4fUHAboP69vRKZT4kwnn6gvsvi",
  "key34": "PZkptmWFfdgyoiNfwwtNfNUdwrDsreyrC6UBu8LpSFdQe1Z3Wj8v6wtFtGPNJEMeq9zPx4xDCE4DxokNhNdgYXu",
  "key35": "3fo6JxPaAMejhNCHRNNnhFEgF9u1bqxTqBxHYQCURnsT2spYMrmmXZcs2urNvR3yU3VSUq3ncyQ59EPdEwAfhKuV",
  "key36": "2XHdHs7STr2z7a57tx8Fpvr6yEsNcCyd1jv4yQPardWopJ1fj5HyoqoMB7AHHQmy2M3epgsTb8z48DCTwuDZ6nZH",
  "key37": "5DoeSdC5VtyZMMwSkFTWNANkj6QZKtqyDmhPc7DaQbx7xZEmGpB9X5hX3a7QPgEjgNy8zmDxe8JDLrmoo3gn41Vu",
  "key38": "614w18njYxz11kcWX7vbAGaVQ2aQawQKjpNkBnKVFjFiMf9nmqxnFwBa6PSP8Qhy7KytYzgRcvz16R6z7q4wQbPY",
  "key39": "2guHBHmpagAerxGSdvgy24TEwSdg2MFuomQbEeP52cJzbo5bhndsarXvsDJjEiAMXY1QCo2hvDqwzA1yK4G5H663",
  "key40": "3e2yt89kDDjC4Xvd5fa5MiAYvZbLKdpXsqHc8xGpNWarh2ydP6sNpz3msqewWaiwwJXwN1dabF71JBsBPKn17HLL",
  "key41": "4q9KQDpxkWp821AJz3kxBvnbPpY7hYLjuBegH7rM4WGyg765UAcMXzvzux1vSayV7jGwb2mh3rmcvq6fmceAHZin",
  "key42": "5q3XWneZQXmu1BWG6XPAj1SHkHiKJXS6QBrwSgR6Uzir3XrKj9BUZgMxFZkPtFZ3F5rMv23QFZNPRrJpwN28fPwS",
  "key43": "4N8hKiytzFs3iXRS4Gcs2A5Zctgxn87K5H6vEeG5tke2odceafDRoKZpxvGWMAL2Sq242tjD982EEyR6Hax7xxYa",
  "key44": "2r4DP2pHmmFCc9iNEmM2vNWVMLdaryBHZJgm2vEKWWsdKYNC2pzSKGCtW7zLSSfHLsNLZzTJxfpqwNXKEJuS5faE",
  "key45": "2tHVfCsWTZkby1zoqzN3ZjQYgoW3FaEnLvYGJtzyC1QGrkFiPiV7a2HmuHN7pvyj7ofSrauvJJZPahznERmAL4L4",
  "key46": "21WydaAbgc5PLwDYaqYpbMaa6ysBZFRbzRrj8BLvHEHw7kejAdDcrk6kdfj5LUbYuUYCo38aA7HEidS7aN9Ws13J",
  "key47": "4FHsB38UNQXV6osgtwDRCQpS8tLer68k7F9kJJ8ctkpSYtQqzDX1n696dkfcmaVRuHzsTfe1VBVxriN1oiXDsAX9",
  "key48": "4wF6hZjpccrAYi3r2SZ7YbMvZVry3KHoWcR8caJPsRtSvieXhYQMsAUp6q2rhDaZWwJkJaZP6gBgEyJzJR8AVyjP",
  "key49": "5UCYfgr1sij6GECuTXYbZ8zsKamvoxyxrrXBSCmU7Mt7jaazHepUjJJg45MBFhqfZXMN7Q45Hi4QDp4ZkwGqKfwL"
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
