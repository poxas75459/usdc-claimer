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
    "4eq3DwZDTy7c55g3G8YGQmA1oehDZpk4zXzXeiZFoFodS7FRWD3JSd17sLteFBnekrVQzjajSHeK4E6QaHnaN6LU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VMm4PXTWmocgLG4TWzT5BPUNZgHEB8k2r92M6iV5mtKrBiQpS9SU33nVQFKysxB77FZz2b1tzwsNd6SUwThzikf",
  "key1": "3hRtdm5oHi8miNSyUCoXu9WBNg33QFFsGWLxkHGUX8JaLB5t7Ds2YSxjaBU9XaHWHzLQFhGZntD72wdij5pgvz7p",
  "key2": "3vythi3kRAmEttSR53v75yjQBL6Tb68t7kmDu1qd6jdB1c9JvCAamfBbovSV4FRJfCL11wdQ1fQRD5TjEdrE28XW",
  "key3": "5rwDVNyiRn3PyASwsVNHEHuuNn7rJEdUmD1L9dBeimCPn2BidzQfzeznHkDA3Us1ppt7MqXtR1RTYMKEGQC9cjiC",
  "key4": "3VncWXmsoB24ZbbQ2xa5GRmjp4HJwKYaViBjUuinj2WpGRrm8TS4JYkiupzaon6eneUgeihGJ7DYCdsoUkabbJ8W",
  "key5": "2qcCnXhtaLnaRgYCNNbUXCJ6YthAXeKohupNCU15Ucc4CieGk78t3ofWrdSoxQd63fBegkFBbJc2KXDjphKTpGb9",
  "key6": "4WVXTYwTKpGRjJAJpqkCewXcUSsPuZFixkjVBhGtxFAqE5UHq4jWaAhFpZPVGBPbjs7aYgTrDVUGSrNukBjx4oHD",
  "key7": "NoiLQYZ1W3YVaykRmJYn3pQipPNkrgHMrwntigf8zJrq9MbuiKufZqBMBzUtHnBUwfgrj6curyM95NSHGQsy1C5",
  "key8": "2u5e1Mu2djPWSNZyxQKX5bKjiuB6Y1kXRPwMHT6Suwp3ye1qwAK96GbYXUWPubtp2BpY4iguVoroLnhx273jwikJ",
  "key9": "64RAqyfoTUn1ogdkX9PkvV7WFjpH6XD7KmF35Ge5J9kTgje7HYV4pFDNoPcEBPzgGG2X5RvF7XLz5ZfDxBKuxCXX",
  "key10": "TrH8u489J6ZpakK5brC9nrBQ5fPSZhBy52mH9huYUrdrddem6oKS14brRTTCduuJAMz3nDRTMUybnr3oGGF1Xq2",
  "key11": "2Tmumb4CEae2sY8SNuNDhbZ6R7d27Hrw7XkUsUezpWmHKhvo46NQeNMkj8oZjVbNZtkMg8C1oAS3ExrszxnJk6Xk",
  "key12": "4vWo9KdBPiRYNNqiShiAhnpkc52Cv6P9hYMG8dychZScj3NUVzxxqdb3kKuh36mH8oUqcw8SCBX1J7Td3fTwKWHA",
  "key13": "3njJbG7hGkgkyPPNqbnRbicLAk7jkjBNaLzs7YvWDtVMsuiFz49JfanH5UXRqcFur1rGJ9Tjqfyug24UXdtiWvUM",
  "key14": "251LPJk5ekuuR956caTr2Nnt48fD5w81WrY7jDEWuH3ys9o6enbAS8t8aG4yRmpXBPf6ir86s1DyuxZeRWkdFaPF",
  "key15": "5QMMf9mYUWHVwnS1tQUevpSRN4BmsQxRQBwBv4YdsE73EraGbHVRbp4yBGgv228J8qXvKV9XjaiVZtU3npMA6YW6",
  "key16": "sYTfSs5tWC3EXrxxGxh9D1r9MphQjNQqKEikoABsk8i5g38CDe5fM3jwPv9w5XVPNwgeyhLVetd9bkbnat3VARW",
  "key17": "KY4LJnr7kYE3oJdNr5YBxejTEaDf2tq53j68kcU3gJ2rGRQwAzZbLqahdq3r8LKvQ4odPuy5WSQTNxcZhD7qV1S",
  "key18": "3nnLpEDnNcAtCxpMWQ4bSh7gULev7FTU8ytmBQycHPLxcvBFzB67KqsVoikkXsJzi2GawAQLxNMRidGNP3sQiPf",
  "key19": "LEFMZcvZf4xzoxoQhe9w4QrUqFXRKs7JvDKcZ69UcDGBKKNRbDzWWyxuHvQjwV7T3bAx66Jectat5R8g27EZXAy",
  "key20": "2ar2m5nNNhSG3XtoZgGKwRjEzQaqnYoirQZ9Kpac7wzw6q1VE7cbikuyYFWybuxFWJJyMua1YT3rkfC5teeFfUQT",
  "key21": "4zSVYNFTcEimvRFUSu7f2idD918h6hQFVcmV5dyfPwV9BLt1MHK2mCarSxfhw5bBHWxBnzMbLJL7uSJcpNgXvxPQ",
  "key22": "qJyiXqBL4TKavYkVzjRcasqqaQnnyB7zpiCUznEtj6tVKNBSPc8XyzDz8ds8uESNZE8CGCscSzsrvdtwboQzQGW",
  "key23": "c4nArATcgYta24LiE9xhiP2ACw9RQuwkSoK2wsjNUF6kL5u9vj1zDayeZ7G4w4a5XLQMbqNxnnn8mn8knyQKxgv",
  "key24": "2YtsWPRxdxJTL2fb3nLoGKd8GZ1bjMkRPvTu8vSR9notXweofTopz8onhtynw5HgdjbhcGPh4A6S4fLqU5bKXPiV",
  "key25": "4LmmmpWoFniV938UjWztESoeb4YM8xRYb3wcbmz1BoPLDfvVrGF6sBKuNWsiYP2FkLuJYFjibuTLGvDUHuJZPaz5",
  "key26": "2UzWByDXSGkAaodS5udBpVM8PBnLeGkcioyMzePBhutha5i571sSD1wuYzQo557zkctqiRro4tT9H6PYmkKVCd6e",
  "key27": "3xrDAf64ztSmPUfCCfCMpvXi1NfEpfz7VHt8dXHD44GfFWrwUiE9LtfkzsKWZpxGYEGUBLpr18p2Qgt79iE4hSWt",
  "key28": "4P9b56EhdNMpjV6Q3oabJBKQiDpWGm1uEMSedYZdi6gWVYM3pbduVUQAPgpUubnDNzEk2V5aKAJUQk62DMndCTKi",
  "key29": "4XXKhjrnTAefWkysJLDqct7xXXMW9VB9qNNuE2WvKFKqgMpnU5PAZfkwoJ93HAgBKgF6FsyEbrTf9Jn8dwbxQP4F",
  "key30": "5cs6E2uf2ceCEChfxSXpMvGjgmGQMFj6FcEWDWFuHzYkwToUfqHyRCiGZyBxhFpCpdg4B5NYT6NNZDkTD59ob27s",
  "key31": "4RE1VHao6u9yhUTzRnu6KBvJvBRnDtWhpTzyEMFBVUoB4cWRCC2QPwCSoGo9DW8FyisjfHX8ZAqfDTkWna6vidnS",
  "key32": "4xXj46S3ZUMqnfwLctv4uaxkoM67Vf1oNbDMZ6HHzjm6wC6H4TwpRnc3xqFnrc2n8DHbVsJQmkPggJMtbUHCoa9m",
  "key33": "4YyK8ah74HyDpf5gPYybq9KrRQuyzPYPGQdYudWu6LYHVxhUeviAbQkAitGqej2fmqqqKYefKSU1UMLQJpbxMaFF",
  "key34": "2f9xom5nqYVUB3TfMzHmaJofMKLfsig6CwBrcW5d4HiuMZR9wtX4RG9PjieCJsRQL8Ebtf9hTsJeatFMoPG63FEw",
  "key35": "4nu9fMq4LcuJBAwLsQ3osRxgLwB5wDDt5jdGcDdu8ZU8wNoWBqZKAs3LXvguEytMYmV19qBv5qBeGfYx5WRjq2U2",
  "key36": "S8WacHXDNe4PDEcjvy7VjHpwwRywKX31MLeuGf1QdqCfBXjdcQKK2n1U3DDR4DaaVSfwVbnE7TYLXzGSHX3NHkT",
  "key37": "a8fDt2AbFdcgaBYdZgS5SGxgzybDUqUXi9NbeXwCozhTeQGRqHtwLShYMLxec8o85nE5KM71mpXU8b5QA8JkxQw",
  "key38": "2EXExDt7xFhuUfHDfPDHLV8BixVaw5NQfb3MJapqrE5H1JKhrZUnZf26DKv9Ak1SSADZXPJj98fYrYnjgoHuetAh",
  "key39": "3TrX5QATs94eu2khKLJbsF3GkLDRyx5mQ1MKxquuMtJ5vEFsRhuyJezwa6zM2anVSUMCL6bi5jPy6pf1MhWLQxjV",
  "key40": "5idZ4mB66PAWaZ9H3f8rc4dyDxEkasWvyTVwmN9XcnxkHDRbt96AayU5K7PTt12YjvehpKhHpXuEdzyo28u7r1xv",
  "key41": "5bZ3ND5MBfzBV3qM99L7CYcuEkyBw26zE7JD1rDu2YwhcZxoxPP6dprSBECz84fjHV3DVJtPJV4eVM1xCmDqm5c",
  "key42": "2rnBnu4kxsTkpEephUWGWt8Qvs8tMUbKKSe2EAzZc5FxZXoax91HT9Qi9qZYx2k8LqZVvAcYcSJKgiEBTw9MGney",
  "key43": "ZCTWtGmPQjT5fPBPAU2mmtDNVkNzeo9xfrfyAgLjzyDydSFKfhiV47r4eBqVEEiRqxDacXG5FCv68JCAyhbgo5q",
  "key44": "32gvLboboySaVmTD6NBEpRNa5E9YFUjJdYjUsrxzKY8TyhwuCeXHKp1iByFNGZfNFDhtoZu3BtLnjybPNDLwVvJ"
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
