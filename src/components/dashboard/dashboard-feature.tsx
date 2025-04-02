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
    "4cvUqm1SkWvdDX4RkG8HXeSHJX3XqbbN4fbRYYHBpiBLDQ1cg9c9RthWyTPz3ZMjxaDwxB4hFTmHuqV9sRmKZiMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fyi2WqTY6zGpj5esKnRE8wRfdD492mQAT26SUPqkUiUrVd7MgcZQzPw674dcYv6XYeHqzR3wgtFwpvz21TZqe1i",
  "key1": "5AaJLA6iPz2avapRQdRfHVaEVCUa2hWeV2H4kZzX9XELRoKdZfpDqwuesX84fs4pJsu8a7snd9Wz6oUHDP2bJGGc",
  "key2": "521cAq46WkJSLLM2J7XdfD1A5pMfKxbQbsYeSgvvBFrWusVdgPM49n4iwn6PDMzeQJYihEZeZi9oYLU8hD5YTTH9",
  "key3": "HuAw2gg6vwbbPQjsHFCNUbQUA9PcVpSLTK7mjjkKVyg5keQE5z4ZQkujyFhoAC5yZu6eMFxJ4rKAcLxrYMyN6DT",
  "key4": "4rx6kETBaabJy2YDnYH791r8EzCZ93XrLQef1ybZzXXoUubbdke6TpxwNuRfs38zteUmFuLouuNmDQu3x8sbh7CU",
  "key5": "3dit1f1wzTuCCfLte1uRqUNfQ8fqWKXV7Zc9krVhab8ixqrNXc2SSZqUSfckYQm3wKMZXu1tHoBLyQPY1muHoLCV",
  "key6": "5MGz2sFPHA8SX6ogxJZyu7Sue9tW6DNKQvA4GcG6xZqqN5WzgDEh3ECoJrdCQydEyZfQDgbDknjgF3gxCb98BCEW",
  "key7": "3ijLHSzznczJvJnhUZS4CurUYjx1qtMnkvUykbhzkX3m8js9R5eFRctGN6hcUba5x8PDgritDKTNndSnfvJsA1Wf",
  "key8": "4vLTyYkbR197gfFg7T34tdu4qsY2RW7VebBRtd6pPuEaK7xhAcD9sQ6LUzKGsPLpBe2gkmxPX1chKGiaDcFV2htV",
  "key9": "4GfwoHvGhTcoou6sNDgnSexjGQ6Hmawj9W8HxnCygH9Pt9jqGPqwdKMyiPnfw6d5uXxCzpYizajCxFCeYHhW1gBM",
  "key10": "25W9J5fXuBL8zXcHQ6BnuYe7zhJ1g7S5XMNAvN1jhjVwqV3DM89LvnaBPZWTMdxx5wVixYyDzWSSJ2NHc78jEMMb",
  "key11": "3H5hRRm4iYDyMiZqG8Qf5uBA4Meo3vfn7RedEe1x93qKukgEDkTPaJ8mjWXqsPDCUakAXJP2w6SBxDKp7xUyjq7V",
  "key12": "2m7udktPxGEsYf1y5pg4G44MdjRh3Vy3AdEfvKJUNvu5K7d6Ej7w62kGnHovpJbLsmuQKRT4wHcYajvo1kwa82WZ",
  "key13": "64ckfHKJEF4LACGQUy7nFGjx4kzADEnR93FQhiHKMY8YW4SwZ5Wn6yZVaBRRomwfcgg6GvQ9QTbmuZEh67p4q5iE",
  "key14": "2MKH1p4d2otdARnHPYnTBY5vrAYtwSeDpHQMgt1VoBJwTuNaxMtZFR7bpTj6AB69gju1XhGedpNuH6ZFZgHGiqMq",
  "key15": "K44CbEd489Vp8qGfphBuTSR5K8wsj7BbArFkrMcSqSXmZS56Uvx2jXFQitiGNJZjw9Cdxsj7A6wdFFW1kp2wa9x",
  "key16": "x6t8mRpVmFZbK7w2YBtf6JmkLd8MUNoQFr2uZfrWhZfALLnmpn4oTDeRG4hxF7pAnGBfrTVdUjYCURpvzxgoiU2",
  "key17": "3jxwRyUgctJXWeVMjrWoMCRkN1RTdHa8VSYKiywUAGwms5PX2WoDQJa6PiYVXeoi7PBi6S3ZVY6odVL7zJsy8Bza",
  "key18": "4cLEFALHSaqgoPUe9F6f8rjPbm69Tjumk6BW3t4hJMTxakNHtGHDDUvDwy8pd5ZjyW7NPkEM9GYpsfcB6iTEfSqK",
  "key19": "4ZKCkPbwtvZ9aB8Q8v2SakhH99KLCuhQhMbP8MpmtPZq6vbnMzifxL9PTHKS9p4R21tLNw27LTHErCVjPBYouvBn",
  "key20": "2BBPQdEPRe3hTMVX8nvkvRuXNro49QJ7GLnLuohJ79zC7n3eMA4uyGSWu6z4Y49ugk4okFbt5HdG1CPGFgHYYhoq",
  "key21": "4a5MHpboLQPXW93LBhyTpk6ciMpBtrBg7EaQkoSaaCDcRUHQEKjRLhja4RsSuQ9oyEoHeXSx5H8fAcypSdhRi6TA",
  "key22": "yLqLTFqYn4wWVcJMf5UG5GWvdHyd9Xp53wYQoHmCzF224r4maJeU9Vb6Gqc9btkt2F7j63ViXhH6mgDGdvv6iUg",
  "key23": "2i7gqKArHsnpn7Rcu1C9EaREYZJwRSH6zfjTZdTMLnWnKh1hf2fnTu1rMMKNPm3wxf2GXp2dU6oTGGESQ9ED4cqF",
  "key24": "2GyMBWYTTAwieYgG2SDBXVDuqCANrcJ2fTuLVfjGMpJJGeL8QCNwbvxrLb2Bcw8NcBB8vjULvebn89ytvvrG8aS4",
  "key25": "HW6Qky18Cb3L4KoMXdTferVhxvnLhJ62E55jWvvXp7eypF6oHMEGMvbEr4B6MNJbJ4mVMeXKP17UjetP1tzjWk2",
  "key26": "5vHBqq6kQHCko7neuJSE8oe9ifX3Wr5ts6RH3nMHVuX5oLxdLj7pUUyeLZ9UzZ5yJ9wsWVNGHTXebJ2REm1yQCzD",
  "key27": "2wUAahZxZVrqn9jHaDuUDTKeB5th2McxADgWfFYUbKRUieX8JaMGUGtCbLBuV2Wo92gB5jRYywKSzL1r9Q6PVtM2",
  "key28": "4CSHwbzh57G4hycifwDrEZkPotQEFGnSCW3zqr3GkmEDJg3T4YiFkHx4aYRYDBmfMSDHAVH3UXr7hP8tPJwc8wfL",
  "key29": "3pbZXHfTx9ZWGGGSofimeKU4xLEhS4Qugb9BXhG2JkXv2HgvVJCVBz1jFbVKGTo52dYVMr5ZofLZ8rfwstDxVKbz",
  "key30": "3VCNw34tUbiGwgbxFeKYQMbjwrBSgJ1bnWvJwP6HRE7m78AGM4b6heiEpiGgz3UZG5GxVN8rVwpZ8NSmWjox4ByM",
  "key31": "2zqYWCt7MqkYYkHAmi1MPsdCbKdD2sdTPdBNLNXnwikAdjWHxSnmDsE82SfWdHcKhTVjFzvimW5zdjEkBsap42FZ",
  "key32": "5tuhjH8LbapW95apqSukdQ8ytUrMbCZc8T8LHaWuixf82HcDvmYR1H1v6rc58Ccaq8z2ZKdFqgJ4CFzthePkbQzx",
  "key33": "2bEQnknk4ebfD2aCDdVGqzKsyRnwDqvorhaWuR5BhY82LRikEHgFhBx8qAFS1dUKQ37yrVpT2B3MbMpCuji6UnD",
  "key34": "4Xw83xXXHNfciJpbgT6pqUgp9YSDPRqzxUQrPxBj3iHPhHqPj61aAsfXKGf9iEUosBTEg77WtRdncQhXBLibKhqD",
  "key35": "5eckUde6KLSXxWU1nx5YeobjYjX3A3TvyiiADV1ZZpXjR45BKPk1Pkso3gPqCAz51Wp1nUxKSEkSrzj48R23cdAc",
  "key36": "36zjQQy9YvJGsGeq3Rf1sXZdbxMJubM8aQ4QDHJX2FvNc4PSFjLjwKvhbJQTEbsKTPjWpp9LxEQxV2bb8GeDdVd5",
  "key37": "5mBfNTtvQbnTBiQzhkwS3Mfy2W1LgdvMXYLwwoi5LNG6rSpZ9129SE3xUwgVGVQaBUF5W1aLGCRHgfs5zekSuYXa",
  "key38": "3jp5ktdpDif3tbCsHCmjEHEYhLbz57gjf5djqcYMmYqJP2UejV26rjnQnzwhHZiBcd2EcJBrFwS3RK5a9RC3TD3z"
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
