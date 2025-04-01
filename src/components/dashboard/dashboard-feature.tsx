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
    "NtJ1de3N28GJeEzUVG4vBJt2NhDLM7EaZY27KkJFR3AUNRXqoa7Kk1zKA7cddYGWb2B6EnxCiDF5qpmJEaQKCBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d6M9mirSMgLorDb75DP4Gqjr6s7q3sMk7q3AFntf4WD4Yg7zFq4Ns21jz7KBKXuc7WuMfZvLrgsDASUH4KNgZrB",
  "key1": "2xg5yZLziXUsxLuUceUU1hHFbvAomqpGu59PdjjLX7PEpSNFKoaL49ZuuPw4ZGrDKLuQBAVNKrGEJPU9GsbYU9XN",
  "key2": "4YrHWUdb9qqPcm3euXzJv5rutFVbKFsZJnkSNebgUnD8asoT3yvffjHYv63fTbPYBoeZFveZFmDDUVLki5P5aypp",
  "key3": "4swwuQ41L8C2ErMd7Gs2WNTGX7NicWL59L1USEMjTdzBwfmg3AXwzfx9qrguKWd82rWdLeYB1d8pkxtVgjxFZq1Z",
  "key4": "2jbwGwTiyY8GYABKHWEtdsyGmLb5emT2S5DCbuUxqZ8W7BBgftUbN3bVWzAXQSgyH1vJ2upu7x7eSGeU2gBkkaXC",
  "key5": "2i5oMbe6RJ3ZmdFg3bPNCdBUG4tiMhoZMsykW3iG3dwbZhrnEpz8W1CFweZop7BGYjFULEnsqFuoDHqg5breBpJB",
  "key6": "3NhfE8z6zDKpgYGhmS2yA42eSYg4c9eX9QQyJbhrtNXUQwRTVcvZooxawwJyZE9vjkjtHueePNQxEtuHpkwKTbnf",
  "key7": "xU3MV1nCydkmVEAqKTyDSWE48pLBiit8Roehmrnfg2jHkGjBJq8RjUsfNTKHNiL9AZRczmpJ2Yhhub5yypHxC83",
  "key8": "3eM6eJ56xuoLgiEkPFgUNyGx8TAiz6Uky8wCNy4rpH5XMtA1YrjyVfdmFSAv3J6pM4zPUtFok3C4GodbvFMziode",
  "key9": "3cuJmfaTT6WFZcc7X2c84HCxM8ButeZoUU5QmaoD1y7udVPnJVF6Jxk4jSGMiXwQAiExkZvgFk21JTqkyZi7TWB7",
  "key10": "2AiiLsGxxFKRLWU1947f2A6Y5T1BJbZmBeWiwevhZ7omBJ5ysqRvj72zJEURjV6d778b3i9Uj4NXEQ4dijFqfwJ9",
  "key11": "uKiuQirNGza8Kd1bhYRRVQsR2MznqWSDajpBZXHoidopty6oTVRrKbeZBaNcpnzd86LYD9VqMLjf8QkZr9UWgtv",
  "key12": "61ch2aj6E5eN9ZgamKk5heZFHbg4JiVYzRW5oFew3BmfxbJ2VA3YPMWBSUSt1v62CaSKdZsFgxLQt6whoqxgRdGX",
  "key13": "29JEUCVRockgtEKcZapjwmiHY4fsKUokDXB3x3e7ZHXUSEBoxw915sjoE9h48ygWWsf7sRtQefbAKLKGgCEiuNbC",
  "key14": "24BZDToa1ZPqouYkbTu5QM9fbmx4CqTyMxWSZpE2t1cxUsjBWctGS95CQH3DSNg1kkqb3wD3wTHNRKhPXKXmycZT",
  "key15": "6EyrkQBTPT1Tx968u6Tr9jb2oJUyYkn2ECtoYVfmY4MjCnZDKcfbiXjKUUchZg5VCut3L7tvsat5qkD5pXfPqvn",
  "key16": "4hkNRVsxQ64VTMCY6JsR6rftpT55tvRGCnnduAFpKcjMcgqkaebqgEjg7KnA1oCdrqvXsHS4Ji7nodUKn2vaiFjK",
  "key17": "31vYGvsxDyHWk79L1uLk4nyLKbp5fk1ArCPpjs1YpeotXDcJhsAXyrr8ccYLRmjeN8Xitw97v6RYtzuqfUdzFxW9",
  "key18": "4amW41Kvnw9wv5h3QXeh29KdPC36JUbAB1cMRsNeTTzfCioxmyocSfaBcyrqqaKadqg2Mp93hAiLk3CkM6MQ6gZR",
  "key19": "66jXAPpxDk3j1XY19jpE5U9jvLm1kcNiJE1M3bDo4pAC5sGFgHLKYsQEKYRrqrXM8QqGuMnqTPrNPM1VXkAJSnt1",
  "key20": "21v6MdtxLbps18Urrn7swovUseyKojG43ZShv8uJTWJbT132RWZZLVjLiJ64w8461nVfbpjVbvkTPesr9TrMKcmL",
  "key21": "2cWGvjmPaazTZ139m8EwTVbJVb1Yy8d6mhXBFvCj8LBdgwKjDTXTeD3oaXEgQYFJ3gVq8m1gEVwDnc7gqLgRba8v",
  "key22": "5Dcd2wtYnuMLrtjFnbgkTXQbPUZRuwhSRLZcUnvoNPKGzrKXjsxxXEQBRm5p3b5xpMxy3Effk3LAPUtg3q3QtKtZ",
  "key23": "51iCuYyybW8vxNTb4nywF4L7zv6MDfk4b93sjwpJ6PxBe5YfZPXdpAVzwCNCQRu6QLUBpFzfeTyKZuJuPAQAuSPG",
  "key24": "5r4TcUdUydMATwFYDJfa7nD3q4g3oPtBzGiPxBaPKbyFnrftfYBMVSt9VtPYDp6uKWbRGfuvF7KorM3VHHAvQBw2",
  "key25": "4daiJyg2qsh2dF7FuWH3ESERjZEasgGxQgpj1HzBZthVCAehdEmJDPmbu9eHKUu7BTfauqy9xFPVfmThNz13j5yS",
  "key26": "2k8eCtCa2uYH6zdKiMqqCfkYu1byBg4ShA7pMyysBMc2WKj5gdqAc772EuwmZDuWkBk8FyDyTL4Gx6yh8PwDDkp5",
  "key27": "3tNp1Wdi5rm4WUXQRdaexdF3UZBNGFL4TyUT8EhrCVRL4HTNNJZhGoMQo1g6voewaWWkfDb3jdA2TMMXmqfeRGCj",
  "key28": "5xBDnkNso4bYs5r4dR9w2nYQwtGR6wZaAciC8bPqMnbRNpvdtYjx51dTRMHjiv1TYbTCXBjmyp8BECBXZxJ6wswZ",
  "key29": "r3DBs2TY96bnSXBBkyVRZrN2vUdf8U4eEcRo8cqkS8QQS4YmcUbYnDn7K2zTq8NFgNfVxhyiiZaJpXosTv1homF"
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
