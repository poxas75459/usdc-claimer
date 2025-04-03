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
    "3ywFgjVgkofnsjvMdeRLs8gbpU4exLKPpFr2bz4AqwXZKDpCdYf3VhiF16vjPuoCoWQuunS2EtsFkgFAyZw5kJd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43LJCohruC6WTh4RwjV8ndoyTcqg6viQwABuy6buVHvo4VJ8dbrSs2aa4ZNjJmRi25LWcmFjxn4DGMwTaWvS6evN",
  "key1": "3Hmf2GJgcwSRzjCTXSzBpUmJBYQXEwKMJwFHVQsMTFemAemCFPmqy5i6VAXRkuYVyvVMbv8BWqBfHZAvHQFFSc2o",
  "key2": "2GMvYQ94T1gG3iUc4xbFjVraLcTf83Vm1716RBUmkcMLpp2VAhYiWu8wazkav7z64sRBECebMtnW56cCMg7wfJ5S",
  "key3": "4qnsFE1dGUm2cNR9o8SPRUQRUbHfyCKaqHtkFFXzFmsHCnGqhsTywFNph82WYNDczKURhwKCWK7ApcFXEwnJWNAh",
  "key4": "4ZAhzMpdiKRsS9XPz5AfSCbztfPWwcbCu33ECJBFzrN4xqfVkdPZNJ7FpzmFxnX6xBxQpsCDCA1yHC73afTW8rQK",
  "key5": "o18b8f4sFNevEpSWgNeEUV27qcRCrG5LYdR2foBnmLPAAYwgF6b2P1Uma4Wr15dQZH8D1HKsLhPpKZxjN544VgP",
  "key6": "GMRbSSDZUyqZGxbH8kdqTbqXes7hkxTczLkiWjjdpgbqQNxRnTKkv7h2vrkctM7PZoWJ8Rbg9tK8PfWNhBDDqmG",
  "key7": "4DRzv7rTbxx1FeFtwDESRRrkrC77JfqgjwNqfvQfgnAjs5uXbjnSvk3qUhVbYepYV9Foqgarcz4w4WE1QPaaibox",
  "key8": "v9tapemMMYB7V6j5bmi3PsH9h879pYe1Xynrah7zJQcCqvphkVs1xNWJth8u9uB6PHEnZkRDQVXW1SV9gWhFBpc",
  "key9": "2uVH5eFfRpZMoHYCx2jNhyu9twd18PAHkc1w28cHM1zuNfMU6hwSmSevjfh4bSnVdVDgb6QudN4hLj51CVEMNFWe",
  "key10": "5yoTTAuDJkknFqKCurUwFZgNy4DzuaeG6K9c5iWcmKbRQp9GhgjXeJLtMrkF6bChdW4siejWkgF5Qj5XqqjEDpfg",
  "key11": "3vDSrXgtJw2w4RLuswRUERSdmYEHK7k1quQmqbbKWSkfB1UHB7xeeNTWRggoMJgLLG9CxwT1YotrHviLGY8mBtSK",
  "key12": "59vMTbCMyYLFHgtrawhhPsTVEk6RS3mHYFaeCcysr13tDTK7q2zcZVa5sZK6nJenxmo2xF4c7UWQNSy3EMuvKNsQ",
  "key13": "4wTFHCWpLhdAvTJ9ACSBxj2eqGzqMxAbry1aHJVKiwNB7PXpkXBHj77evjZDLRzp48jvTebKWvPySWuw5EtFxEGZ",
  "key14": "2JaqUSTnioGB3Hj1xdxMdG8SJcZb6dFMQ6b9JDxceeZT2NFNZETgMWp36M248WxuNopsgwdyFME3gsx7nX6dT6En",
  "key15": "3ZAWjfh8H1MZcpEhcApLw3FbwWA9BLp7j1cx3feHKgzjMnTSGhnKMM7RJJt1P7qCnk9YExawqb5D5uiGaCzX7nMX",
  "key16": "u3AHemb153ZPQV3cZrxM6Y4fc9Ns8Fvqu4Fafqg1RbMXPjpnPPFXWAg4YjHdMa1eBWUVdQyXhxKkJb93LFiUVet",
  "key17": "oWSWqZLj3kmzcFhAsdAw89gpozVcEVvVZQEXCQSmeiUMh9GFzekDbvpW5bieZfV8uv5XPU6JyM1xKUkn3Jxjk61",
  "key18": "9MTLyCAN7982ddZCJmdQiWyk6RsycwDRq6a1NsEj4M1zKyWJ3hZ8iE86wFmYbzdhrh7TYZ9GREHjpZBdiEg67B3",
  "key19": "5rbJHdvATcEbH72ZUKEW5iWbAKXHtdgrCtW666fgtrvvTMpCiMu3fojJ8EUtbgPkGpRw3GRkR34RKD1zaMkR8APu",
  "key20": "2BBj3X5sEGvZ5dFUma5frPtE37EctptRDsTRoUumjiG4btVdCjLQQJKhbuS6KBZH7PDsBjvaYYbWZjbEcD9YhoMB",
  "key21": "kuLrdZZfPmKFME2ARWuUE87ztgtqRy7RNJ9h2Zp6BqwD6mcEs84TawG5kPv5VHuiqWSAZ5u43d7VrNjTrAqqby7",
  "key22": "4ZvMW7fqQaqWx2wKFyxAbCgzL5k1LLwyERrhjHYCMLtwZXYsetMWqoYWrnHVkueXcFG9E4cDsc23m64KC6hCfLJc",
  "key23": "5kwFGaMcY12Z941ZfdxrUBifQvGvQxMc9TWsWxkyGDmX7zYgX3D6kjuMWvxH22xSH5C5Midh7XHwzUxdoyNfzBJt",
  "key24": "45s3T8yzAtz4HKvLKh23QL9jKZgk5b5vAKQeeMnU6bwbCfVQB4sdzoEFg9KAqtQ6i7yBxEqe7YwkPzqX8UtWsuzD",
  "key25": "5LXpFE6Yb7iSyYG8R9ryhcbFtTbkgx1PEKWLsHYHSyFdmnVd5En7B4mbqgKnRbL7vbEtJ6zXWXovLiT75Cn2akn",
  "key26": "d2wr3PBz6LWky4LkAuX575Mx7ispSmeCWTizbjWCjRwzrBVkPqKvSBHEEfHdKoxcrSgZP1nZ3Ef36AztDNd97dk",
  "key27": "GHVxXkXEXeNV97KcfhYDZof7JsQRyAvnxsmwyhBiEFTLqyVAWKYHZbw5KnYE3m8VzGLNdJK4Q7BkNgwkEL3T1Pz",
  "key28": "2UohVsVzqjyv9hHAhMVtucjygSD3F7Qkzc22ikAHE6TW2v75CAP1LsTpL6T5p1W9ySyWD4uApZLTJmUyQuL5Rvhr",
  "key29": "5idMNRJgetxKYttFMCZbtMjKpiJmFtTYrvKagDjcJEhUpNnNFMZubKagBBWsyQqFj6xPu6CC73DGjzNomvVpPMPb",
  "key30": "37DnD4jQjihB28CCpKBJ7j2JjHnzQSda7Zc5FtYo7pVY7iWcfDAWm1WfHUg29PaWKawbWijKhV2Wh1qFMXmawTd5",
  "key31": "4zRH4tHEbzttGZMQBFHQCtYoQPAvZPbHi6gyQnaYqBxt18ADY3LYe9xurUVkueNQA6hoFsF4NaSBiBGhZ8XvppDN",
  "key32": "2kQmdLbjfQQgzxoZneuNh5sS6Qu7TZZLtbxFkEtcKUzkTVgL3fF6NhvNfRyAr5pfkBuWfBcRHYiVdzHbPg46e334",
  "key33": "3uLwu9r24MRR1gaJPseHy5wp45auXSQKP1NMSMLVKoZsoGmHK2MvB9gBbtqiJ3Uc7WHBguv3yZCmZThjZjXHY1yp",
  "key34": "3rxDnTfTdAdpXYxTbW26ebTezVoqDLtBiBWKWPCYBu1fU9T7UhKBSguo2v7qqGN3zvEZT9idyizq831nwbxDjLbm",
  "key35": "3qmZFX8SpeQawRe8aNNNP7qvVjDXFgJCu55ZMsJhzNsQ4Fx1jnbL74ycezmUNMePaSKMU24hMov3idnkbq9GE9vc",
  "key36": "nMVXhz63cz7rXfDypphfpCsX2y9BKpoudvFZs7uNhZ5ZJ5Sf1PQL6ysoA7uXHprrMQUhu3EJjnoCGtqUpVFBFaZ",
  "key37": "3mYR9Fg5zAVBhCNW6rmQoV5dbFWHM9F11xAcVdVTDfMsmn1dbXjVbg4RhrPPYG2r1G7gd2MFzsK6ac2Nh2WkcXfL",
  "key38": "2pD2gYsd4MVqqkwNq1CJAhX7R4wYVLeZ4YHEVyn9g1rwnfktC2ACV2qcDNZkQYmrocjJS5bbYkKFkt7wVLKvzi2w",
  "key39": "5sZM88KWhaY1THwZvJh8hS37cWtoF4JJavg9LNWZffAgAoQumeZaqWC17Az7MXcrN7W2ZJePD4TFZmnEHtKmAvNH",
  "key40": "5eXgJ1g6DBiHfrQEFQ3tZvxgBTC1jBMVmmjN3y1owPLQ7HhXYKYmMbJwQFnB2VJMHGc7rGBL7yBht915vuBuZjwn",
  "key41": "WRccixxcmrQ6YicNvMFDA3CzXaVtgtf8zJibhazXRMijMGXub8tPgtdEGbjorLdcMUPnm6Pw8MZsyuHgMmiRmfK",
  "key42": "3UsiRhWqcJh8eTnk1RarGgRGcBuT1xTxeTqidSSHPDmRpkLzuoKWhgTeummHBwr1qMEAVUiG7oNpQF1NhfYUv8fz",
  "key43": "4paJU4iPTVNbBGp3z8aGKx8f9ZDM6B5gdMMgi3HBBxQSVv5seWk7wMkwhUFYGKmmSe21m9HLaeogPjaKttG8vuQX",
  "key44": "2ADY4pUv2ftYL5tbAX5TKQqVTg1fBhaL4AhKNEAhXejfCXDj9d6kEok9sL3iVwGJ6Afwf6SuzuVGZBkKhL3Ta33J",
  "key45": "3L879P9b1qi1VkpCALL6nNDwhcfoHk55sw2EMch1jCfGtw9MWw4FUyEUVXBvqwMc8PmkUiSJ5GsMepo6AT2PDejx",
  "key46": "U4FCig8J8MUVKoQQPPPVF3XhGenyQZdEQJ8ocP9e9B1HnkaHqZ7acMTk8jXLNX5aCVRu2EVGUrZ7fqiAvF1GyHa",
  "key47": "5fzC7RD1vqKabAJTUEp4ZR8ybQFHSGdzABPEbrAcEVyZ78gq6GYZPLRaXE5j8CZ6G79tGCMqNW7WdKVad6rPdrA4",
  "key48": "3StPYskxKfwH7DpNCHszPSDfjgbAi9EQh6Pq9Cec17tu459rTEDgUzRNSPhNpK1HeDUofuFZyAKGoJBRGDb5Lu3E"
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
