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
    "tDpVVYoms43XH1DzumGv5i1KaDsqtn9cpsVLpM2VF6Kz8HLNtm6EsrJPNWcecSV8J5yEUikveDBLKhcgguQNYsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YvWABN5524UU9PevrSfXCg63JP4wNMhS4PuTbd4beBsjzxAppSRTUrM227uvt5XHg22cgoJDGzrZfTDHEd5q8dz",
  "key1": "2nx3v9H5QLdqdQcokBrBqqnBAhcJ4Q4PdX8X6SA3TAECmETompqAzFfXDS22QZTKxiWgdYiCkGyFRymSFAfsJc8J",
  "key2": "bmsQSmGFh7uQeAEviXT6FtbeQCsBbv7ZAMxELNb3hLgL4TmrZNuxqrfyXh27F6VjknT5EGEeYLo1w5QH1ZE3exy",
  "key3": "2jiYSUJWu7DHqUCLc6CGcnkGXaJCs5QUmx52382FEFiAMcaEWTWmhvWMTqxvgVDamAXmdQkfV1ncPWVVssdrPCrA",
  "key4": "3ydngvbBCu3gj2ZGGQhE7vwDmp4CstGcSfd6rZtHheN7d88fSCFpttx6zD1DSb1JHkXgDjYat917UXoqZq3qEoXB",
  "key5": "5qPgzZ8uUdSxFShgtQ8S96siWArWrzynrHDGKzcJUno2bswxLwogBQebC3ywDUd8TjgXDfXqN9ghcsgZTLno86h5",
  "key6": "5wXgpEsSTyoZrgQqbqzW28HBK4hSbNgWBEJ1RvCJNZcGsvsYQzDTg2sYVRA6n7H3vZZppZJhoTvDQDd22CakTDRR",
  "key7": "3Qqy7RnEkgd4yQFSXS2ABnrhb48dntKdwhijrqk9cdXS8Rp956QgcM8a8yYgSr1ZGQjQX8ficYtFRqFvadmsf3gg",
  "key8": "2TDVvUyuk36v6N24ceye9Zut6akuhak2pZVuKTQmqQs1ZGZpKPgvLGf6hfhvo4mvmuets7jxhWYzxKTMWDTMP21U",
  "key9": "4843ma68rBy3TobtAZG65vkFYFvci7PdxrhuqVthgAwJXtpLVTXMNWjUvrYZg58jvNMtxmoyZUF9HrNbGzK6JfpY",
  "key10": "4hejUUWSFgbxMgRXi3kRnFACLcWh5njeZ9cQeewF6Ksw9qyKbLGgSq9nuQDpE9uNa6rhx2pbZUor1d7DfGDaADni",
  "key11": "5eRhtVmTWCXfdtuKmTSHeQKmknCN55qJX8kXYqujEE5NptZBPRts1EcnhUKDmXkAp2mQvL9DeLJMg33ttiUnTVqm",
  "key12": "4WMY6Q7Bb9JWLWDAaJ6gHYh4sghPSU6q5B32MaNZ4FsqeGcwTLtFBHr1QFVu9HDXDHKbEywDJE5kc7TtcENTtZs3",
  "key13": "2nH22NxKeJFFiNVKFfYdZtxRL5SHC3sKvzcTQstPwrRQ4G523GPrQGrrbiFRJhYrzWtTJwHNMPLJWW7dNYSGzBNL",
  "key14": "5uU1Q8ZVuPBDUm2hYZv4fL2RJUGjum3vhGq1Mi8yZRy4h2cHCmR1CcAhuLYYbhqGNKEJA2RcmSeeJ9R8Qose9YfX",
  "key15": "5X2LBA6GAACBVXe32drQnVJmsWn9nS5wgNBmw6GFsdFUDxhsUZKT6aqGCThQpw7GrX3HFci5ZDJoXjJkeqGPvgXk",
  "key16": "5BupYWNsGUZv786kE6Fz9fie15D2auKL4Eb2Fs2sZJLKKMdGVnrCwt1N5q2rjy1hoX4YVTYMfWx6hUgZEf7qcW9X",
  "key17": "39ZoT7LashYy3uCs7hUxbesCDSbkWZBFLRv6yrzKHrHaimWeba1GDUShGEwx5syT3GJRJ3odyDpTEVGN9Y1S6yDm",
  "key18": "46DomFN19Hn3CkftK6MiN6oveccpNENKgoqyG2gh1xCPF8X6PjadJXVQXNd1JAistC3vSbKESFLAXopaTCFNoajG",
  "key19": "5zceaSkgbt4YWzNrVdyS6GpfAwTaN3e1vysBHNcNL5xuxTU38rfkxGpuCteg5PNwzRCTD3gqv6bTsuWfbeU4Wmer",
  "key20": "3kSC18ubcNjNW9TAL1i9qAFjQDeNxTbKBN9UHaY5KS131YzRJ4yqGhARpRcPFWq2RBJUVp4hjhZEU2QGwknh1auy",
  "key21": "33Wr6diu14i4ux7qB9z7NjRSh6FaohMVhdWgNqUht4BbtEakvhZiduYpAFG9KU2654eGj8mgHVeAuZNXoJ1Rtreu",
  "key22": "4K3BadXvahyuvn1HSNvpUtJymCYhgkp8oWN2WVrp6V9hxpHdivT9W5CF3XTU2djwUYhqxvd6WztiajtvBg5Q9Kz1",
  "key23": "56dvJ1GmtwmQdYmiReebGp8PetDiUz5g53HHJmPgCxR5umywBwPRvtaYQp4KowGai6VEHcVca5BpiXagHT6fvVDD",
  "key24": "3ZVhaRwJtE8GYVNqoKdNcXhadnuuCZs7CTiDb3LPdhusTTXqhq873LnccYfJJkt6fLWryUM7SQaZyh2U68heDZaG",
  "key25": "4e1SxHvgbquiqCASFGMRQxvhnb3emt2Ub5dk9bjD85vo4m2tXs1JJ3ZjAFAo7GRuRw7avGphVmDga4mxN77Hfqeo",
  "key26": "5zw9isFf5XJxaQakMjxq4MLdo5ctbW7s8GQb9N8muWAd4698cftkPgUKiKVGmt2pvvX2W7qSZQngU1oBPFcuP6qk",
  "key27": "2gRMDk5EQj8daYWLSmG7NWyiFVpk4RJTndLw8xqU6EkGNYNMDYEbWyYsaD3t5g1uDWR1KrTadQ2mBYzkuUBt6wPd",
  "key28": "4uGMhGYZiqXXw3K48nn6BGKSeXEDbTKybJhb9U8UwJBc1eRNDUV4U5jtEDE4ubMqhJXZxhgrBHHPfXHck5DxdMhu",
  "key29": "5YNkJEQi4csA16WhbfgbSr9xaNkZ8nQjiRyPeW9BPTjs9tNupgn4Zq5invnPCmu8MrhEAwBrTBPR7FkiTGFMKHXK",
  "key30": "faF1WHAyarbKTfjSo7xV9pvfhMi3Pwx7NFZdJR6KBdoNEA6YRQsyEksYqZEEgsRypCCgLBbtH3raUppgpsdNu3r",
  "key31": "33pdenpxRritwxqjWvCjjJzdxfC78JyaUnhKK5EwTg4fncFvN2EkY8QKXt5ykTHB4oDAmRjxTF5L4sKELPtDgKTi",
  "key32": "4tpvqUxHGJpajRwDL8fyihYvc2HRsepLJQNfXEeWYjcZMoVVsHwA5P6GtwNizSUejeSSVNJycXj9zmNpXkbtuxEa",
  "key33": "1pxjRgyWdGS3yiwopGq9g2GN3XE3RryT1Xk1ATXjZdKhrnN9i2jFQdVHJcL3T8fX6KMn6hrtPF8xe585Jsf4Krg",
  "key34": "QQ1uvMJEMEFDP38DmutpiogwUA62KEthTCg1fQZLMCKs35RRsmHv88DUYFxiSgEHzSztLbwYRHfr522ycoY2ncx",
  "key35": "3HjbjPF5EFhbWpcRZQQZzbYNJY5HZy6crwVqQfwyAkCHdsBCVLEeZ49ujLGEnYjKczVGvqDt5UnuG1YBQB7fPVGu",
  "key36": "ven6qE8TGQnrvjfuY8BpkBTMgMUuq8epVuGcLdeLQyYM9WCDHEF5LzUp5tF4wMpT1nWour5Edt5Fe4gGNqC5Lfk",
  "key37": "3SEDBea3XD9eeSmRBeKrpajsR2susujfBe5qvuxhTQS9mgRpuLN3XhQFUyh6bCLrUhjmUKbKQGtcN95rBTkCDPQi",
  "key38": "o6EqqdE3c6xHtNK6gYeHiwphtjczev5A917g2PGkRrDba6PdV8vzZhQg85UuUmceUso7qoSq7NLNur7JcZ2Gi1n",
  "key39": "37gVmQr453EH9yhXWjnrJ6Dggj2GAJgGzBVBrnpJKnrG83yKt42W5ybFvoR5yL5PNE49XYrDdrruHp1aNcigQFzc",
  "key40": "4ZVy1RmCfoZhZvzaW6x8FFLKJVu1kgstf6ysr7tjW6bpnbA3Y8hf8jvxQjkuV8cyvVjfn34RSRfM1gkUVedKaUFW",
  "key41": "3cRfDFkvg6okucyxtYGUBLU9Dnq7N43SSbcYxRaj45DtjRad8cQpRcaaK3KhyivrW2qbVsCGBgxtNXLcVUhvQNvn",
  "key42": "5V46ixRimaRn52Ndo8P7s43SFHGk1o1DJZz6vYPcz3jctvcZSnysDfVTHYPFpuebmpUQhhgJPRWuYmHSZuhGkpwH",
  "key43": "23KumHAqmqW4qCYRNF2bPcUHbBF8iwXA1BUb2vk3gG6fp3CKB35AX5YiPiSZfkKuNWKc7KNpM5A5QfdmRom4tTiX",
  "key44": "3b9zo1fiBxEZsA8czR2CvApKNcBrfaPCAGGj8m7D6ja9HbMWrrFyh6s8NpPFSHHfEA8HXnMYYfTd4xvxZ18y1QCQ",
  "key45": "4sAUpqYDdsUyCXF9GUtqVKzWkkoGKryE2NApRHhB3LZmB9KsabTbsADXzNVd7HW24JUTXMVqDXLkgJU4fUMm5Lbx",
  "key46": "4eJVxf4aLv2NhFi8CvZAdcEf5sTAySFcfqrT17jCjsieMoY2dyxcaPuKWdxht3HG92LLZ7xLCHBpZ674P3Hp8Bzm",
  "key47": "2ueRPnrwcH8AqEwRczRxJzu8dFw28svZuhH9S1vvGarhwa8miNezjQZaWQGLKwGHiDjSuJDi8mjaMf5VfWneA3Ty"
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
