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
    "GcApScbth28FKHu562x56P5DAGULLVgJf3YwpBjGYzHK1yMxvKEFJwHoizcAT1dgyBdyo7x1KcVhGXbipH29YsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kaSF8EoH56jLEV35tLtLYBrtRhbhkecTvYHYwemzshXHyxknzXKKjs25Zy6AfP6XxSU2yypx2BHfprfzB1kzJu7",
  "key1": "4u5XEaCVZKD8d1qrXanCYmR8jTHbuZmJZr7br9eJEFMhdiQXf4ujP7pLX9kLvUhQfDNgBochyhvuydm3gp9kQaZQ",
  "key2": "43XMfuVa1a7BUCtiwo5Tzbht14sJFJHcXsnruuCZr8Mt2BAfvgJvix9Zju9GdFg5CpZ4cnzQXUEj7VZkziSABfFH",
  "key3": "3KtY49JWsx95rG5Wuy1f8YZeESoYBBPtaVRWf6mEmJFydVPoAt3MRsCdhHuuo3DZQpEAQ2mYhvYrn2ye599ZTMq7",
  "key4": "4zCFTfYrqkaFoHJ7pz14DrPBifLJQ4GtyB3a6XJ3asep6Tj9SXoqyzUPkQNTAQqtdG3LoSE4StdqZHgzub9ByoM",
  "key5": "2tey6778pCP9UtfLGARqDDsJdDeugrT5GNrsefk3XDj4Mbwv8fUGDLVwCErMpeM3YmEJRC24etHfPiVwcZSMiBHW",
  "key6": "5LmjsTfZwjsRfrEgHwW4rUV1W3td6mNtpsChGNEvk52cBmv6bUB8Nz1Xd4KpiCwJz4QnDo7WiHfwEQQc4kGZvYq3",
  "key7": "534B8wXj1Q3yhzQUjs6twuyAULksL5DZKMxiybEBZdYCvdQUoh7mXL4vRPjM5wetmfjVTEuhjRe7ozDoH2wcZM7a",
  "key8": "5MgBLNBA3AdfH9aLxbJoxMLzxEgmoWExXcUeZ6M4tEJgG5WmzZ9uS5PheD7xM7KjLad2HfDvyHernL5X4jFYrnHH",
  "key9": "57kGBCx1uRfhSqwdy9LRbM6Wt5jyriWgFeZZmsN9uNwrNJSTGVYPxo5igz9eWDWX2Jg4e4VMKAYq4nKgKcz9DV4Q",
  "key10": "4zmcWQnTW9rAmUSGicsk7TmT1tMoLpx1KPBt6GazGueF5vCe1hkhHZgt9ghohNdLrfzqKSYekb4JrmUZRCAm1DeQ",
  "key11": "2dA8gKpjh9rLd557F4UPy3wRKrshAEcTkvEa9WkxSy1WurWByDE5ToTASxYzonG5xBufH2SkijpJVVeM6ScKizJF",
  "key12": "Rykkz4RhRrJ8LrX696vTz2wyLSPdVMGAVLSHfYVBDfT8vjh2BL6CuSLoo5hzpGczoWgzDg1whm4xoXmiHcK4AtF",
  "key13": "486BM8cxcs4vacE7JxH8kaupuRtjjgEa6oNrQAZ1unVjrsp1P9hSiHSQF7ewNo7wNZNoijBuN6wi5WfTdc5uGJ53",
  "key14": "2qC9eWZ7G4jytebFP7jXW2CNk8yt59Nt9ksBad1vCs7dj9CaeipBNRgfDNAp4ur5TFecrm9D6oYewYVkj3o1ZxWx",
  "key15": "2dzNJ81V7AhVamWuG7VSsvTzpeXF6Np9KA12CN2MVfJoBoYDQPsixHtYzE348GUU2D8FRVk9oNJvspi9WdunVEX9",
  "key16": "4Jhn6Y2bgXBzZ4mBqdGvnwBK6RjLRbogwqDX3Bnu58m74TpLkRxhB5iXa2Qrt1bcVDSH6TRJqDpjuFgYJMVoVVyo",
  "key17": "2XEgx9FRJcg2UAWikNAdFv1Bj7PKbUgB8uxGXuESxWssp1a3fuxQ6XdvZsSXTVdMYuDB6UbmSvcCaLigv2kkw5ky",
  "key18": "m6gB3cgTnxyHt6cXp8f9aQmBejSrs275SauN7M5KRebDar88HDc2uCSg58b9mb5nALpfYRR7GhjrMWayAZEbYLn",
  "key19": "3BXb1w4np3KJBRj3f4RohnMmSxYdTeXSP2ZvNRpRASppVhccgDdSJihYdrgUQnQCRdynBv2k9gqDsH718hDc7ru7",
  "key20": "2QMFKvQqxqMMX9Rt3UcWJqq344gpTF5sxP3Jnq1xHwAHEP8ZT3FjSCE4F38kwWQikVfrij6b899XyHgUJq5Nh9PB",
  "key21": "m2gY6Hw5EeQSb9WGV9MjntMHG6YxdfGe6c1RZLF7PwHKsiEbynMNvrJJPQH6CajURogh4YUjWzfNWbCw8XDo1pj",
  "key22": "4krHtxBxd6azVfLfbhryBN346ea8emZecFuGNs2vr5dtacWwDHp6uM86nDDp742PokFHkLFmm7TXrahnoVXP1es",
  "key23": "3n5gWqa1qv9xHvYtFL3jN8iUXnnwoogiE6jWKfLuKq9GSxGwbqDQPLtuVq7c6sB1LT8wTyB7rVkqiRVa3sJotXpW",
  "key24": "5wyysR2CdkYQx6LY9QqcddjZ6MpXD3k3TEdpypmoe5G2XwoeRZvfrrwjfABNRabMQy7Jn6af4sT5Bwyy8zKRQgWx",
  "key25": "27xJiEkDRgZ3yqSs2FvSzP6teHvMuVbx6nA8eMjUNqtXfzLsg3ZRMtV7uwu8w4q7aiuuLx5nXxvTRxQ74Vg4kPEv",
  "key26": "2U8SoC1Qj1U3AJHhhjiTtyFDJF1EVQrMMmMrgCWTtm6hHWid8P3St5q6BMcZFmTJhFxZB65EyAXUKuj8pNzLAxpF",
  "key27": "4DDRBQL3Y1QLCpBJfRpLDfR2s7DnKtG61vxJCawv371dNsx4bcYVgZ4K89J4bygsSY5HjrucALzhLbDXg94Jm2Ms",
  "key28": "3EdxkkDHph6kFqTakX7k5C2YcBkwuSWpZHbjpbao8HFkv2aofuuaK6xjtpHPMAJg22p18chFWRZ7zobgri9tc2zi",
  "key29": "3omxYTLJvqFMdUTEnLmk5ma89ciCxFV3T3iUX4PGBj46ZrJsCJxeZjQUuy5L3JTq17B5wYBwP2QrJVuWAq8p8E8h",
  "key30": "5c8tMq3MHMdU1JRYhqpZc1oG4L2qAjDezoitP51EeChdvWLgkEK7vt2zGuHZHbrJar21JPhKsoratLPV97S5F3YF",
  "key31": "2cfziTGZwF1meWBcbBpSWhUF3h26Qk7Xr4PaTWZGKcfip7kja1Q2HYhJjPuz8Yk7BKYARayHiZvE7fm3JNXJ8A2n",
  "key32": "cV6bFj1F7cXbeXscpF18Pu1989cuvhGPU3m3wZQRiSrPaRcqgxJoSMeJV5T2tBfMr6AfUC2ehfqAE6kUjWMy6tt",
  "key33": "2xuXCEA5Ca2aVnC2upAzLiWFapXDC266rAZS3mUVnNE15GJv4tQPXFivmbiGsYdUpBjtUDjX8smpPcqrBanRY8ug",
  "key34": "2yW9Gr5XxEcs2uvEumCqdwY8XoFQ5eohADfosM9qpk297KHDfY4ELUZJex1JkoA1TyM39R1tSvNeZfpaAPAShwEP",
  "key35": "4yeed2txpYHXKCRrqVK4pYSDJES1uNSQBc9CvDwLwKkqDJFb69wTQuhcVAdffcUNfB4xZ5xPy4EBAPhKnsux5gEh",
  "key36": "4Fm3n1K192kHa1t1diCpZABNTkFK3UckczZLYZ1StggMjzkJnqCQdL88rnD3gZ4NVoARipQGUSKawmZFEzZXwM9r",
  "key37": "2P3aXvAiwM5XbtA9aFvka38S5fPkgnCtPUB4NrsDgRuaXWhM9jk6iyfZjb2C1k6FdTyEzGU516GsepPh9Cg4WcDV",
  "key38": "4k1xGTkF26v8Vh6pS7GFnaA87QQkFjb5ynbnuQoU4khWfaHxp5oxynHafBg9tMG2J3MdJkgJQN3gEQTP6Y3kkZ76",
  "key39": "mpjLscFfBneW3f2nMX4ud3nZcxvuBSiaVCKFbsMqGfKPKp6j1x99E8v3FkNrNT1D7L5PL34F6vqxSQ9rD7mPfwK",
  "key40": "4VjNqFbGpbGCTYpcGtewjCaG134CwQ7uSL6Q6bK2MdT9axR6inKd5MMX9TaeZsMQc6bDm9rH5qp1bDoA8chGG59K",
  "key41": "Aqc4pg2AtGVqvJvV1LiPf2NTnqUH4xZVEbft9LoWU6J58qEpcLr2Reanrc6avshAdqk7AvAP2u27TAkM5ATcfMQ",
  "key42": "2nDvHoAQ2xjb94H1wwRCKBR1xPrhJY1e1wCQwT5qxET2VkKdDZQ9EQTZFeWiXG7KCrFz7SJF13sCwSqhNHkUrKzE",
  "key43": "otZxM3gZYGgmyzqDgaq6qT7fe8yR2MbyL5rAjDkSPNWDNsmamS6JgJQFmdVkYKF9vrrbFZStxmMhuZn2ZN7n7yP",
  "key44": "jkWbur1JmrkDF63QQ1Kz7aXbbG2RWJsnF9czDsCYbtGcR7xvyrZV39Dq7PpUWgX6VgPNvYPNvjBXUBfP5SAoVhr",
  "key45": "3u8zw8fvYb6GkG7avzNmZfrucPT3kzMBmqs4pdCUXYFVax3TdSYmT6YzseAgSZhd4HhQBUCoWG2jgsxizbydzCQr",
  "key46": "5H9DVQD6aQJeeWosGViVPY9MNqPYv2XaTPSSiNUBxNENpjdfWcn3bnHyQoQaxQwzJsF9AVCNHWJesb9AY2BDMnQh",
  "key47": "5TKSrMsRu5SJd3YmWMUmEFztAGNEAzS6QMbrWs861CMtBd4yhcSwJcvowHCKPfBPnRdcZk2TK6Ac27rxXarhPkMq",
  "key48": "3UBnA9jTsq9uDZnhmwnmx5Vfd4pi48DW8wMvTeNrsYiPSSsrEnYtqM2ubnNsc3Z4JxkvqHy3LouPWMVRwqv34idE",
  "key49": "3HKhrXKSAbnHqa1w7C9G495WpBR4vEw1FTorqvQwLHi7fVEZwoJq7W9mg5BRkGdT8nLs8FiherM1HoxoQrridvFh"
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
