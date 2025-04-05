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
    "26EJjqesTkroyEkQXXW8niKpLQXrq4GCmnznXTUKiJTGjhPZhxeN1k3GfDYX7bebwq2Lg7vVMVFCotQiv5BZQiqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q3dgCSyJ9hbGYEuU1TodYfvyduJmUsrS7CfCPaBhqBNhdnJp4h1Zoj4HboZe7NvzrLmNV4oe7UMwuo4v4Q9ooSL",
  "key1": "4L7oPUW5HjVy1QNZAhtBXXnT2qJgDokR8vp1PXvX59adhh7SXxDXTKXdEA6Af7D3Tt5bzkTuqEaFSFsKnoDFMTLo",
  "key2": "3yDu1xUKi8znGGjrJexhwkFCTKsEoMUvK6XupXxBz5VgtsxectZUfGryizv9qYrrWfvzfZonBxroYkYGWW3GLwoU",
  "key3": "562yLPefmx5JqdsZhgLBeTFdc7rz2wvzEsYQ1spJBL9HtAWLfzwcbKhGw4jZmugza5caM3AFbezkSdVzRPEgYNbb",
  "key4": "FLsXm3649au9ePjG1WSSd1VXxU8aEDaQBLi4sebqZRMKLkWCQX6cWPNN3xnqvMycByhWbak9vacbQX6GX7SSFQP",
  "key5": "4grRzWj4DUbf8XED6MwWHBGYjDK26BGWbqTLeNwrg4sg79HQPwimkVh6ja3LuMNWRRkH9StjNdZE31P6oFxMtLUj",
  "key6": "GsTggHvmXCJ7dqVzCNdCCTKRf8UjbSNW8ydyyU4R7RabQNuBxoi9JQVQcfQ9DY1Rq3TdXDqBSgpuD5N4w1ndnKk",
  "key7": "549UxJCM6nUL39f5BSA6EBVjsFrp6SczEfpuDJzbWioo9Dg45icYZBDecUVjd1QBDUjjzBWY5ojqC1XYKwttkCNe",
  "key8": "4M6sA92L6mTFaLgcpsbpMki9isRybHhDGu7957ss6GYc5SLFrBv6DrksgNcJwixtw2azkUmKFfKfJXVqEn9c5Qop",
  "key9": "3oKW196rY4dadUiACytjtKxQeTwuVc7NJCqZX6UBANWzU4ZMWKvCxhedr2AkPPEUc5gwBK3LoQNc9zxCPn7WKFvS",
  "key10": "4oZiALZjepCQZTR43rF6udF1STPgA25nHCGgW7CjMXiiAGiREVyqef57HnBPHghP54Di1vTxEkFMfVdwbpFTHmgy",
  "key11": "4KNw76G8M2EX8ppCrpLLuG8kAvxWAJLogxsBnB68jsLsxpoYZja4XraHXcaip6Egp4BUNevup78ThoL8jc3HYjjv",
  "key12": "666a5SosshCy1CK53tcR5HJsA6PRms997oP7Rbp2Cae5Pw6Pi51di9JgiYaaoCLCwhJeNJYdrVVtZNG5NDFPAquW",
  "key13": "61nEZtRQsWtRyX3ksGLHERstBgoiXkfKaQxcTsaN27Jqat3oBbeYbwgobLvGrm2GA2AebdXtib27GDYKxWzAwf1u",
  "key14": "25s7M2ZC7wb1gYKiNm8TTLuxrLSTQbAmvjjsCpgqzCrfjiFvd5Roe3wECJexyZtf4urtknS7QWZqLzq1cY2DXcfh",
  "key15": "4JbMKoGBhTxmZ96CfwTqcnm9fPop2NzRE6fi8G61sQySYd1tZravRVhBMnAiyPmKRpYCHePKqhUAcijvS78dF4c6",
  "key16": "53jfPeHR5HHonSFeXLU2MwSt4sK6PWxri8f3h5R3pK8rCHt65UZWvbz37wBqku7KF7HAXXVivRvsVMD6AN2mdVLe",
  "key17": "5jPMyGfuVeurytJJeXP48n424TqqrrVtmQJQCCnjof14jMazryVvRpxftMxzbHRYZZE1nhCHTgnazTbNr72uJj93",
  "key18": "28Pj31YX4eozQfZjiYZHkUy78kDhE8t3kCW7ZzS3G7em4jVX8UxavLCWspwxxAWqFyagbS9arwREioDAdhejMEiz",
  "key19": "4toW2z9CScmimRAyFSNLsCvw9RMAnbqgPBMjCFkSxGqLVerHoF3qAbAoVCM4smSXZ6kk1n1g8Eg8qr8bFj5uHSMK",
  "key20": "4RygUanBLcjSihFjuUhbrfZfKQR6NXzorpq1aAWrCE9wwFrVeCo2WAGjLXuzKCeXxUwQVn2dB8fmsopqddcyLhjW",
  "key21": "5TtR9wxKf5T2HTNBuVRghVvHkxGVt8YCX2faEgdSrweEQuhHmRpqYKxgW6Vf1zXJPrhkMYHFijDxLbWezYLB6BD3",
  "key22": "43AhCRTrM5ovxLwJ7DU8grWiepDXXTqVgCn5oKiHpd2MvqVcTW4T1LSN4S5Ges2bd1Wca3Ny5Nh6uTs2CVf4bYDG",
  "key23": "3hqGfM4DjyV5WvTP4tV11tTHudsUZ2rwkcoHEnXjAnnXgQGV5w5PjASwQhyqfdQ6SctEwMzSzJgXcyn7H7nAYfZY",
  "key24": "5iLhkAojF3SnadeRwX3PfVFoy7oNMBBbLEAjd2Yqy79Z7k8wEs5zEi7uzA6nGkRtV5Rr89zEskcXs8aENnVBgn3r",
  "key25": "2FMxKgd4F2p48MU56sF7Z5KRWQywswccWG2SGoGxFmAJZLQPuYNuMcqxQ23kKs2QjZb3vx9xeQcja2NKxU3Ma87z"
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
