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
    "2PHLrhT5e5yTKjFaiSBaUvCcS2R1dZ1wSieyLyA7uHtXzN7s8FJJQoZSBBV5WN8CkSYG3gy3nCRxotGvdigw17cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qXs8Zfzs1tkzWVbh4VurLgLMvP6DwQBMTTBWW4N9swcNWcikR9kuDQChqoxm7x7ntcDc8ViBN8U4g37gziUzKv4",
  "key1": "PTKeLqGFvENB3QXmuiVF9ZWEYWqjxwpzXBx86xWLYpqfchHL5RdL13ZHDn8iKFKweDbFab1NAvc2N882mrUVbcT",
  "key2": "YHP4Ski7kFqskptmH2PTwqYH5zN3Qc58v5zREf5rxCyq6PzPFDDujF4eSXYqevA93rBywtftTzdYXmAQcXCgJmb",
  "key3": "5aX8yqmoztm55mKx3pRu26Pg6UPAV3fQnyLRXmnZNmbA2MojUrEfZGMPvYyNAScpyUVz7PA5Q8vCF9fpqsCzCLyA",
  "key4": "3ZkTUwej43VdqqdxcUEiEBhd1zmDyu27wLTUX8SpWzkCHA6DNHBM7EyTfGZfwDRfVcGxMWhGWRRRscgTWjFAtS52",
  "key5": "3cg3NQ7yfwnyGf5v63mL8yAVh3Z7mWp213FdhS7UEWbJdJ5r92pYa61YL455mhSMjMnm9THX1dWraJa6ojEruouS",
  "key6": "4KvYysMXxBpgwvkp9LStE7JQsGKqx2VUGmYxNRqGRcfnVhcsgp1ApAowPLZJRSd9M76B3bX7QzRGMXXdQcde6isC",
  "key7": "39m4PstH41TSnmVDzthivSvrAwEUaLcKoKFuMDAhDQygThfpyNbAccTe29Rscr1hYEa7k1PJRc41Rk4r1C2R9qqT",
  "key8": "4H4vxr236ZxStSzhbECMZm8Vsg2U87Jb2PJzGiVvQGkTuJZCnoDh9s2S6fHataY5kvK2PuZJRr4ozeAdGS2mSrSg",
  "key9": "dbbbgXx4Dmq6u5ZmQMVg9ReksMGtVyspzYoVZ3RZp6eFDWf7G2mi4FLYPnu5nBqPMNKSdKVNs8Pv6vaDr8DiVPN",
  "key10": "g7jT81AdnP4pvDmXgEdnFAPtwGTmSKLxbyTBf2UZsYCR9SfyQvmDWYfibgDp9cBonnmsNDhQ6i3B7z3RMcjdgqU",
  "key11": "4H3mfHCh9QA57vPCRGyNjWYMQK7qS7NBrqhuRFim6R9fXfgtTpp3F9GK4XmEBr3NSKRBX4BshdicgkhEAPK92us2",
  "key12": "2JHyAC17Zn56QytSBuwwtCeWKTiy9SVN9RVXs3d6yxzwXEgSkra9rgykdotyZH79EpLpvqMDBuynumsmskt4B4S3",
  "key13": "4LkGtDtbudne3gziwo4mB4J8UQgwPR7M9onYmk46MKeG66FceAUhKL7vHy2osNfMh6s3csRBEsVyYu5HQ4teT4SP",
  "key14": "5XJCZRtmhazu3MbRMuFDnGn4ukVrDwPMXZdAH6jW4vt5dQ4HwDPiGbGtd4QQGzogEAZBoFzjiyvTfFoVhdEx11LH",
  "key15": "5tusfMuJRnBWChM7SGugvJjzbRBxvrCxyThWj71SPEiZodndGXbdMCjnQyoQR6PUNJQet8pM5Yd5ix1Ugo7zykSG",
  "key16": "24wm4Tv51zBfrXkjYHVwi3SYhRgRKJNvJZHuQnU94TbtJgUnseLGWYbn8wggosGKQgopbso5v2f43g8NhFdy445U",
  "key17": "3Kuf76iXyxKEcmCarfbxL3eJ445xV16XeCYiJAi6jQYzmnFPWhpzBZK3Q1ncAaQ5uToLWkPTasBGqZhV3DQaGZM2",
  "key18": "ai7kEMYSPwYxk7EDvNpopvw81fdjujYZMvwMcMQFjQAUYsAqe4x6H7sLLTN5DyCZC3DJkP6KVG32616A1kCoQ8t",
  "key19": "5GrEABfaWj8QtTLaETJ25oCVNPucnLN5R2QY9Q6ZwdkCaiF6KhssgcY85C9DZvpuphC5UyZNRmUxKb6MDxep2ehE",
  "key20": "2iQfCoNNxjmgscZHeVDKVQL2uGAe7SX1TfmQvnzRUNaDhNqMteEmGaWQXfzL3J1wquRRGHHQ7vvkFi4dDY1FgZeY",
  "key21": "3Rquj5nLvFgWxpYr4MBRpnTEbsgoif1m9AD7DMZgaAQFg1F2KwsjrMjZWLczdRRrfuwG2qmdWXGKB1Vu3nL4L9Hh",
  "key22": "4hvgn92YPBHEcyyEmQ2e4GEBRCVUo83fEkFeXJJLCCVEusnLBxcq7WhkNn7PpydCdRVrGcGEhsv99dYuNXKB7May",
  "key23": "65kcu4TVECUygDj5hQkEp7nEMTjgGwQCa3YiPt6ZE5fVDSNTqMQfRYFh6PHgRpyPESCxgRWfS7NesJtSida4MaDL",
  "key24": "4dkTYmBsJ1rXp7YGTRFiFZtYiNurdLBawucpekpxG91eDpp3EUqNjmC5HYLdVzgivNkudVc6Z3Kqz3bZsaBD8Kez",
  "key25": "jwdSF1PxDztQVJDanpSHzNNohBgjr77HZEgBjKGE7hmk3wdK4DesUKWwiofMNQNScEUfgWk4DmQbt9HUnR13DMR",
  "key26": "npbp613qHnCgTogxkoTzDwpoe8GhUDwXbR3jQG1ER8miuA3p2dR1n8oviJ3dBYFkz35D93FugbX9jFskw8UbNGh",
  "key27": "5KHvLkaQGj7Xm6kYDH51XwbXhqV71P8CnnXDqbUByUdSQaoTo2ziVzeUvdzvdcefx6QHdpa9dF1YCLSbnHbUGpxu",
  "key28": "4HkXq5H4jrtbZmb5XUmbhFsS6pzqrRGU6GjvospEYJhGnRYohmjcgCRMgosxGyVzEE6nojzHUa1Dmba5wjzoiocq",
  "key29": "4E1jmfr4S3VjjikFn5HwLFG77iiPppn4sShoDk5fvTQkFSAqXgJoXrKaPTvzAKHuSDQ2GPMnyS2BMvWBNawVGwpf",
  "key30": "7wi3gifbHmuEaePpNxCtA4hpicNh5cB5FPWsXK2FkgYHzVpbRtZpq7MiVwwRT5v2B4mMdWoxbwbxzTG2eJ39GDM",
  "key31": "57oCYJxkGoNwJ89zgWZnvAdk5FU5vYZmiTfaXPJFeK3BJce5DnvFYEuPBpzsCpELEk8LBiUxSs4LgpqAu7cYKw8p",
  "key32": "2tma8NJGXHQm12ytWGT4VNMrp43RvtEj6zvdfvQNL9PCrUex19iQ2zytyDRcixRiopey3csmKPCouHGdqBaAJPft",
  "key33": "28Y9bgY1tqeMxZMaB4GLMV2XHcCSpWtSAqZxkBZm5EpW3eCnk4SjR3SEBqZxGU25T5CB3Dyis5X5KHR97PhfoPd8",
  "key34": "4H5ZW4qNxNRousYxqFYsuQ66JtXLsoiHjCKWwZfhb5x7cotx4qDYv4aD6zzAa4ABZo1NMe6fZxSjkHUcsD7w3B3w",
  "key35": "3gvNeTcrFHfEZ9f38JQSQaZH9BtP5SYiQypafR3QENh2fNYtkDEBXEhTweVGw3aMG5TfHrSSCVjVB2MdUxdBcmwH",
  "key36": "Cv2ua3WPY5vjyR4kLZ5ZmdKmHfXWFTcYAwm2GzjQy3y1xfkB6CegYBc7SbTAoGn5v8cp7SSbq45PVbwgyZHeamK",
  "key37": "4mDow7BMWcb5DLAaXZtKMa5Q6jak2achEMcRiUUSgbBstBe7dKcQtaNt46gTXtC7B5Mgdoo4RtjgijKYCErLcvDX"
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
