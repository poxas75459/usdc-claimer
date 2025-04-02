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
    "4zKFEKqN61gVBSnLxKzo5Ed3HuVtfjVodBZqJf7eQtHDEVkMLFT8T9KEUfycK2bXz3FQmyhYcNTvXqmNHYk2WBF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WcDVHMXdfmCpiPTo4METhrEJDAk5gBjzfhQBRCL4aVGnk7v7X7uLkJwzTeMGoJwVv5hKo4YLh8AmU7dUsFsewB5",
  "key1": "39Z6RuwB53Ap4koPzTYpsZYqYPxS89zMQ85XRK9AMicB6BBd2z3CmRP2VUdyFCyeHsiHxnfUrACtYqfz3iz4hA74",
  "key2": "PNUvXTQ4vcUedCoTzQKFrMo5ms75AerXteRLoQXmG1hxxXtBySBX5qdi8aLqDyLCEWP8zhA2YGPCTiD2psZV3oy",
  "key3": "3djEKP9iUsTi55UxDhmgg2hzwUKQbJgiM4B8ErZuQQxEHHZnotzo5NeXQUE4xUZ8oLUGcNRnh3C5zFhhSD5h6Pvh",
  "key4": "5LQDCzdW8sgYjK8iwEc2GBkHJRRKZm7PF3aifjMXDrk5CEVn97WVPWnUcBeUjwZY2B7S3gFihGEcaHDZyyL4rAWL",
  "key5": "2s6kty9R9kQJ8ATv4LBkwHqBjF6hH47eZeuCQAJNyUBEzWPyfBeqYWrkEjmBfWkrvbFEXh1gjoV35evwDcy7smVE",
  "key6": "4YA6LE39w3Nid51SHja6wGcCMhxP1T9srmBiX2EXP2GqpWqPqYW512G9caT9FhP7Sdrjr8Y3hxWXPoyweKN6F6Ho",
  "key7": "2fqWz9ZcksRSz6MwbnXHz9ApC2NSgT9PjpkZTG6AKJo3QRvEf1YvHVcJQmGgub4ADctQwTuL1DhsFNmPFCr3FzAT",
  "key8": "BcgzygKm2vH7mKtLiD92TUwDk7u84BJD1GmKXK4Axqoyfz5TAN2b85s1TB6Vu46preegtmEWUEye3hJqdLz6uS5",
  "key9": "5XLVu6XsqVbfDXmgMU9em1tRCueKgMh5Y7KxrqG9DtCMwF3MgL5RwGDNddHo7Lc9AX4pau3btRtEdvbKMritBJX9",
  "key10": "3LKj4rwyGkU6jqUjoGsRCBjSTpKohPy2As1LyLhCztLdL7XBaTYi4G4xjmdBgpW3tWQ1r7cGmgRctS5c8wP63Rm",
  "key11": "2srgfwoQD6bvZ7Vgi9FTJjfLRfryiNE5g6ujJcN6XuhXVzS8WXC5YDaTLToaqUud51ofNUgrRUpSbaJzFnehd15g",
  "key12": "2AjK9N4x3W38CYdKjjef52gG47LbbHLwoavQqE2cC2BWusCjdq15YWrtStqPbQWdxP2YEkmTSWQ62Ma8EpKTS64R",
  "key13": "32Exzu2HDttGXrF83ea5rUxfSZRjsfjNxA5Xn4TVr9oxZbZ7ehzzzTKU4oxY6CN39uJ9QNph2vFKafMrV7qTK1Si",
  "key14": "3wonxuuvzzFqBg9dbjqyqF6D4t67ug1VueuiprU6N7ia4iU7caTDPVDVe4cSiuZWqfCihJUTDwE8dpKXd6Q3vpZF",
  "key15": "ocx44HG39N82x17TuLzztUh2zFknTkgpRjCjw5TSiCu5p19pjPi7bbxZEzzdBnFFRG8waHtrixXzdsdLpk9FJGE",
  "key16": "eDEVDmXEWS577Ckfm5LKpR3KuWqRTgtgZEuGK4ym2ZDhbzj4YSxVo1R4v7VcTF5WSiWs3ZUZXmjbpm3jQ2R6Adt",
  "key17": "G9P89n6jkaRqzU7gLbVEvSgxakscN4TB8iEMhfvtFCBNgtRqeLxZwCCgorGc1hQ2a7zb8TKR1gytmSjKiXQLU9p",
  "key18": "5VNPou3PRip8u4Q9wSAAhXGdwXsmdBDvKj3wuELT1XrnXbQxtHTaoeiKfebXp6rhTs79MnnLws9E8TQErxvX944o",
  "key19": "A9LVzZBvKzkyyzi5SunMAVi2GPu1hA2zja4UwkpP6c4LNt4AhbRgGtcMQAByGGHrE8uBb3b55X4kv5rju8qs6KC",
  "key20": "3oZaGj5zPcQPNntYZvsMVikTZRyJwFNKrW6MkSZ5NTYGjbQ2WGuNgMkkZoWsRsnZEFeTN1a5sWk3vzmRwFrPewsB",
  "key21": "3jbRKbLkVmLFei9nE1ESYJ4HfB9Dqf9tPKVeSmka1HmhWXe5NA7WKEGKKgEq4tWien76vpbdo7AVZzrZKwUcG8PQ",
  "key22": "5iRyJusYLbgQh7ygs68Xh2ADYvs4R8QudebqofmUJgH8yvBiw5Ao9putM4BizkJye7dVJvbpTrXCKLwRSHrJJJLJ",
  "key23": "5hyUxTa9sVYGZgYjVVYWNmpeepgVVtohBLBJC7pfTYyuWLq3GZN8DHHATxmtTUxz2uDey9FRNhkyhuMVFCmvCm9G",
  "key24": "4qXREHutCyMkJYf6hNxzTdw8bHguyAu2ZKR99dibMfMLjdN2qCM8zTNwmUggt45y5QpbboMks3n3YtrEv4Mr38Pu",
  "key25": "5qHZMgXu7b84aHQcHBM5KAo8whWY4P3cfZSdC2qQsxeWJmzARj64PbhtprUrEvv8xENiZVo7XLiscQwE8zCFWwyB",
  "key26": "5eYFDULejkZmAzz68KkEUEzNz7L67ayRwZmQ3Ndjo6yT1v3pySHR7CVkBTroMiDj12iUXHLxRXYjPEf6RGZ39QGD",
  "key27": "5rYE55Wc6J25cGSrfpDkh93U1vgZSqEcKinaLcADhCpxvfwPYKmgmsqeH8NsB14zcGLBrPD2fnr6Xrv8bQ3ZTUCL",
  "key28": "31wCXgHfHoTXQpGmia3PHs5CjYeDFDy4Az8dVGBQzSFrBPVyn7YQtZFLcv5hvz9v96WZwzuF3v1Pv9ps8HuYZSbt",
  "key29": "5nW8PQWGn797sn6VvZ1ZpnvWPdaZv38XBgCfcXzZipr1uFgW8QtRPNBgGwhD1jTQCeLUhLszpABcPGqYbuDwuaXh",
  "key30": "23oMNoJuFhHMJ7AzEjbqGYnGSbb1bRddSp69mBLYyJKdfpLfXC3184NtFegwim8ndMFyNa3aggXN7WKdABDQE7Tu",
  "key31": "2V3kc5eXPTDgetAihRyKtQsKh2PyGgHxfGRJusgbuc2oNv3Xu2XyWAaoLZWx555XEQ5XpcYSm6kxKM2K8rMz4xPT",
  "key32": "3newCLhnCksYsm6KURfm1b1LfaaHumxFhhcvZTTAFR9frLvxiGEN77dSwDNNrqXEw5yZZ5eJ9gFjxPHbRmbHDVET",
  "key33": "3KyBGpmo3hJfNqpK6bv5Rdz9rWxPqvdKbooj9AxjzPLQX7efstZ5DyfuSswahK3MDs43x8rbQqMjjkpjGVamHAVq",
  "key34": "3g8fjmTDqNXhTJGzV61PbHKMuCbjbA2qGpAMEBZs7s9XJuHr9yy6cNo4S69gESVWD22Vp4UqDUsFLbTCXGenV3CS",
  "key35": "3Nfy7Dr8cswuvPiiq7w9MdJK4AwhWiAjwE9Xgaqb4oyWAniJMVj4yXU2WcoKU4GWXsfUQ6muMW5oWRGFczv1bgEj",
  "key36": "z3UbHbjPk1B2HETjJVhb334a6Add3MTAiN8MoMprXubPTVj5E9uiTBcD3ap9dvaXTJYpm43VwjLSZ4dGgLct7PA",
  "key37": "2wxy2fsXEHLXPn9P7cHfRSHrMrD2JhiYR6yhCwqELUWTn2HuzUdi8PGZJw1FD3Af9bHzAzbBBicG3jLn4pPZpn3v",
  "key38": "3nojatfGrcvHxDcxzDkwtMtKbaPRcnNou6jkg6RowrCTgs8FMEg6vUyFg3ScDnugvgTT29ikoJ49Fam2oJpvkLU3",
  "key39": "4Warx4qCgj7p3MkHPpNSWHvE9SQq4fJPZX9kPcrCySjG1nc3CevLfTwu84EaK4PeigqSxkegwv5efNzgjb3jev2N",
  "key40": "2F7cbsMTTPdJnsaFKiWtfwHLN8NaaoCoc93D8rrr4aKwPt9xqihybqhQAQCuihbDRnVd5ipHj7NQc6tFWqaHeyam",
  "key41": "6gEE2hFcngbxAMoAsM4mLrSUUcSBkX372oCQ2UdvGWjtuX5XULY6a3a4q6PxEQPQmeg626XsD6Kem8pXph6HNzy",
  "key42": "Ng8mBhuLAMqrnqZHfj3UPaNPMpmcz8ReWRvqL8PBAUjRhx8V7qs3D7B3drwhj8JLfih7TYGT6E7QiD1WFJMwG7B",
  "key43": "4ARqx1Yc3AAYNj8dWdc9rC9pEmUA3VP73q8Z9osBrubBfpSg1zoHkPUeAyCkRxUkCU1K6Lwg8CMt4LcYv4bL9Rbi",
  "key44": "zh4VWJ44aQx8yeWu7kMbR9F9eNrmBbkJRwhzm6gKw1j1STL5aTzE8Bp8DdjCFEVt4w8HRdf2wNAaCwyXRq8meGF"
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
