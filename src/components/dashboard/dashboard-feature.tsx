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
    "4JgcNHsUXgfY5Rvo8L7VgZvvAPLG7DxSCn5pZFGkNTeZBFP5ivdG3b7EzHPArZb9TAYQ8mRVtAELvXm6Mm8uGd42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65b5U4fKU4td3uqh3FcRoxWPCXSXLvvoYYPQ26SCtGWddYuyf9BVHh9nj5z7UaWwmy7D1G7fH9DSTdtiBjhn6a8M",
  "key1": "2mvm3TbXWWW6eHicmmpgREkeGHdM6KZ5mH5YVjNCSxXoqZwqTN2XkRzgXLiyPRUbyfMyAJrfRBDeXzPgRYVRG86C",
  "key2": "463eqBH3Vps6tHPe6AD6KGCbDBTYGmCp3pS2Ro1kz3gRPfpiHibB4qTm3r7fzKWSPTzJA4DRXEaStjtt7BbbBdh6",
  "key3": "3hoC38WD7YnWm6WgKAMcrvHtzQ2TwX7so6vDupmDYqsqfiaTJnbpLQkSz2RmCs7USAuXf3ewJYn8oA36YNGP5QYR",
  "key4": "4wRmfHymzFTjJhM6U7rW3YQWu1DWvmZiyWqDYQqK6Got1AxurPPGycKS2N6gqdCSjhe2wwGgjNPV9WpL4cjCCYAE",
  "key5": "baf56JQChQSKXqrihwgubMHdjgz6obqzgGZXxij2RuCP5sqstv9CW9SiPgQf6uQG2WNjiV7Ehw1pnAzuWdAh8Ld",
  "key6": "ArZbwYGwMxbJzqektXyzXsohiGkJVCarg31MucsSk6z26jWTkF87Zm6ZhG3x2jRkgc4LKMgDxn6wSFFzeBZYFwD",
  "key7": "5WKvfuwGu1VABPCDm2xazXsCzTPv5CY2zrP72fF2CGm6WLaHHc7KZQWvmnvu3jXiH41C17ExuJ9vTAh3mV245ZGM",
  "key8": "59F1LyP1Nt9fUFqL8E6TP6nsZz5jiij5eF9tLK6xWjbeQtXfeL7vPeCJVRTrSZASixMxVEAwgsxn2E2M8eStPezH",
  "key9": "4icDpYSb6Bh5jz3QNJqoikKPZS1jLw43MNqaCuxmaKPECCWyKEwx9ZQDNGNHATFQwe6jdXgVCxHpUjWWTkrwYk2G",
  "key10": "5GtRC5EmjHL5hQa1EN8CVJWf4TTuBSLQa11AAQy3jwhtJcTF8WUrV1jeRiBXPHWgXKvH6Zs6b1ybX9MuKQ4HqLE6",
  "key11": "4RZxN8LwjhAzoQeX3GmY8vZLwq4eBc7yCKu2twJ5bUnvb7RJFwXkUGYwNmHJJbTBKCRr95DpqLpiupojAU7yKa5V",
  "key12": "2A1a4NHi7QbDZaCkLBCJKiX9DJ9z6KomdssP6SuU4xCb5MBH9QdcE7rTW3BgExygpNU5p2MVzpz77cZtQvZJoPCn",
  "key13": "3MdpG6RdhBLAaw7MjqiRQq2mW8oQDMmPtzHR4sxsikKGXnSr1FmtYZ48bs6VyKyKJDjeGve3m74TBVT8wCEvdkgd",
  "key14": "3qHb7xbDv3CTntRb6d3KAXQR8dKPUJjmWKRssoTEHBKgQ9HEAQ8tvqhebgN5mdPSLi3ybnTVXZuMohbwokttkiAB",
  "key15": "4PWVXPSBHTwjGu2NGq3zg6Hb8fRr9R8EFkdrhUEWXPj2VJywj8cqKi3cwyUy2ZADcYBidui3LACo2TRqrRt3yura",
  "key16": "5Ek3eQrnCwcYsFaqDDhK4knR3FGvFQ82cd2DV41HkWFvusyqYGim8gyJaKF9m96gVmbaYhGBFSFtXDkVqzzCDWaf",
  "key17": "2M6VjiJushABA3iUg2UNT4xELfS3vrZh2wBf3n6G1bZmR7xU5X8BjLVPRfU1PFUTh6AeTgf1nAor9vmrgq21wS3M",
  "key18": "2ZyFmoCoqKKxbjeNb4EUZuhNcBc7AXLwLEYkVkgcwmhngrGUXM14x4R8GtjTwSC5wLpCmKRQEC51G8NPQg7y79bF",
  "key19": "2uZNVwByZaG4kyn6bnD7CiJuEStGCPeRuxq1zCwSCDRDE8cQYRKmaBUDzPLHnXBvizTDAtodpomXAyw52pfN69xB",
  "key20": "55SaDd5AopzgmSzgWfTxVBBAZk4gxLAzyhBVtXudz88ew6cgdzueXEGJyUyMyWVTyHQ3A3LoxC1jaCymAJNHTA9Z",
  "key21": "4LUSAZrdAV3JrDH7rez7cRa1uBGDVi9qaTHHZSiqMMtMwHK2oAm9GDSiLFneJeC6iTRggjwfhAtKc1ye9kEUa8PG",
  "key22": "4Uv1TrNSU39ZMxiVtURs4NvtMXpU45Lzio1TQQgpkRSzTezfzyvWUtoDJHaUaK6SXL6iF8SXbqqRjjE47JiQ8rmD",
  "key23": "48cArsnypqNMAz6rfsqQNaDPEKH7fQSXn6B8URShrHwtaUpztsENTmaqg2xToeUfwk4exMpRj4NWfxGegegQ4uFQ",
  "key24": "2DRstuzQmnyNvntJ5R1dqhtLqTVgZGAJudidPdx2aXFtJUYKxa86MgVgMGpb5Ab6MgV9a3GqMVeQ6EJbTtnhKcUx",
  "key25": "3KEoeAmP3T9xQcUNbVA3bS5g79QhKUu4oLbyZzS62j3Fzh4SfVCEBbdyNwm8t4pZwdrcU7VstpcPq75zBmJTiUeb",
  "key26": "8L7Dgo8BXQ9DZvFKBcNXPQqRxjELt85Qqquy8ggSYUmUdh7a6NhJhHrWu1saTRJEHza1gfNvjuKM2KCEeVWN9pD",
  "key27": "2MoHD8koRmicXuk1bvxjbn2aQwfvQ5cBeZjetJEeLWgZZiF4efktTPiZZbnKQCm1RWBnySVsEUAviVPmPf7eitWg",
  "key28": "AcfSsR5vRpnNoFrxm2ZGoTku8to3nDUEXgHbngYgP7qN8zXFv4djYmD25KuzhGW3MZptcdWn6xFB6vqSBt8xuti",
  "key29": "d4vVBp578fynwXWaNDsAFYaQ1DgDhEhqWk696R2MGiBPtnQxrHSmheiYFykLFVp9eTuUMRq5K8av21V2YJjLzaw",
  "key30": "4ZgBCjq3CUpqj1wQ6x7aTy7v45Qp7h8vUJ6vwy3dgtZWcuiT1gf5rBp1DXnytuaKW69MC5s6wZPk9k2RZcwBeJJV",
  "key31": "52Wmkp26t7biC5TT6TUuw9Z4NqLxJRpYFraVLmRaaoGeuEztuVY8oZPPUyuEpouMaENRyyCvXWZuQND3w39v4T1P",
  "key32": "49x3AVomCvGueMcwhXGzc8UHBYyQDEVtUi1yG2ArFAXbdXZvzPCJpwv7xrirc9NrxqjHs8P3YBp5v5obUTxCLx4Z",
  "key33": "exhgrxGqsLJJdLDWRs1WfVq6LvsqLpxPJrvLiXpqU2CAUpUeJ4fK7UGsDW72eeYtDBoY48hanJdXHY3puTiudhv",
  "key34": "2cpmPoerbDndVMW8REPLfu6iuBrg4A3EJXdAoer9Vk9isFTjEqjBtUcu7AvTyvFL51FPLc8AWTarS4U69JXBVFFL",
  "key35": "37oC4cBccrN3X9W4pcRdxpbFyMhhsipwQajXXGrirm1Yord84bZZvcm1wTfTs9mzYBjzyE6x1Z7PEYBDF9pDruT9",
  "key36": "2Uf1yoJhUCj5eTFrKLYpfdiWWNRe4RJZL635E8iv1V3MeHefXswxybrc9dJsy2Lht7XuGcL8EwvrnLi8QnZ7szEC",
  "key37": "3A9pzeYsqCQM85aQDhDwBhp5imkUHkU6NvVG48jB1wrK7LN3dW1TK75EiBzstMxZ8MYmpUHf9kv5SFYgxYFEfmto",
  "key38": "5TA9upRhQMWsHWSrcnAK7AnxcLbJc3mFo73eNd3s3m3sDSLdWRtU51u9zqaMmFwpSV6ZHbQdZbYA9B1rDJcYN4zi",
  "key39": "66f7ma673zGm6e4tbV1a3NA7FmoDVhYRAMuWVHUePdTVSaV7ktrAJQ3KHSqkWdDhnUHkq22eEs35NHBw66qrFoyk",
  "key40": "2AXv6GMRF4GN2g6Sqicas8GNDAx6UWz2MSNqz1SYJtcMGgGmDuTRYyFycJwb44qy5rPXiG31qkAXyvFRvucC5H6D",
  "key41": "5tF7ix5mBcNNpyDz74VY1dUAdJRd4Twh2sdz3vd6fFhAx3CAAyjRpZ1LZw7PHL1saX8GsJF4FE8BKjwdgNKn4bgF",
  "key42": "2jEVipYmKyhtSKeWYJpxEokiyG4xYjWEXPmm9qnEKFU9nrpYUt1HKKCKFahAjoFrQRiL4wkKkeNtV5sKBpNae4Y4",
  "key43": "5D6ruz12sQA7dsA9N2R2F5hKWqy9qdXubW85gpJR8eAeQS31ns2trv29LvT3vo6jg1YKUh6Rou1HGbEK8zpw4Kkn"
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
