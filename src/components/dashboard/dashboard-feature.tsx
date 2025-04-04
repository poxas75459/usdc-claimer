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
    "2LV19GiDpdFTFidtZkh8qpYHp6vCmSYKCMxuQ3d2xjAGvtM3rtCwhyLzioZsoQHPJfGjZcyPs7WUq1tpVqTSUbaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ud3jte4g3puaD9HLZHHJrqQHoomt1RLVXWADHG7AWxEnSpa4m6piLTZMCYruWwHgr1BPVQEXS7kXymwNiU8avRn",
  "key1": "1Kkhsm9nQq6i7GQZgES6XJE8qhmPvBYU9m1pjcWwB1sfwjVQmtG3uqdU3itsvk286XUijSxULR4se3jxmQD19e1",
  "key2": "G4wMmTNQKsZUxFSquc64Pyaqn5k2q21mqnoSKHZfR4ZXhSkzYAEhT56rt3kCrPfeirtSSEk9KzMtjgF7LD7QwQk",
  "key3": "4xcAor92FzjocAL5zVw2uTHcxrn3SrEiyDcczUiLAGiwGGvyV4aAXPiDV9xJavLCEfkb6TQdQ2w9mRwit1kEowkP",
  "key4": "48oLYqHKrFaBjwfiYcD2HTwtegUnrXYMPyDeMsZ8B7YEyJEBZXXE2JszgFaUVbQGBMz9wRoi8xDDNjJTp5z8HhA2",
  "key5": "38PRDz2iNrps2SiFd9qqkwvb1DJPUSkYm23NVdSJZ7McyiwRyd96At3CYNk2Thq2UShKbGH1g3LE6JCmzyTHi2me",
  "key6": "5XDwkSKfV9oMYsz7LwrcWhxnXV4MnbqdaSq45sEHR5KkrzaqwELuEMznP6aMkoxtncQjnKPb7x6H3eX3EgZa8jTp",
  "key7": "u91PEy2VaZ8K2P2tWJsxMMvBdSr38RtD3pXyBwtizPqNb6XPqshKMdNFd7WjcEwwCmk1Evj8AHAtyNbrnzah7Z4",
  "key8": "2BFzCEu9MkmvEYAM8VJJFzfn7tJewaQdCqR3DN7WYNPheV8dMZt6S4H49f6zu94Ck3ebbuop3gq2wx4QGkf9DuZU",
  "key9": "57iV4H69WzQssCUommVwkdLm3bxRC9Src8acatztDZ4PPZKVM7zVmD8e3Va9Gh4mEs8D94gh5Q8U9qqHNDqBuUUS",
  "key10": "5NKbyRjtyNgqn2eERtsVeLygYcz4Xg1uERiFMXqXk5U4HU5UoVTsAow52S1iJCLHTYPcmWuRNTms4KVD3rrpUb8E",
  "key11": "qdC2xuo94p2xdcxaz1Pb6yYZjm598khjwVwz9mxAzKiP9es4YENvGS8S5Qzr84fiKxM9gUw131xTbkz9nBaiCr9",
  "key12": "2pYi6AKER5YdGLMBwhgSTkckntFEzw3FvKx3qwf6CyB6Pg8z4H4rzfTbStaK2VVXA8gEptRW1iuJrbM677wgnp4n",
  "key13": "3RdqWZjXPLcpodmV1AJoeCCuq4Wx4Zg3EcXYaQ9gH7xLjyCFBt2BMczq8oAhfciNAkZdgabAeWr6ykfKLE8uqHdN",
  "key14": "hEBjFnAHqXuJUjdhR8QHepSeepS427MEZNXk5s7xzXJyAkNFmh8jT8RSgJnwcv3eaXRHdynTSgY33NfTYn2evzY",
  "key15": "4JUwZJqWDrLJ4SpQEerbvBddac1AR4KzyiYEQ12eyyZFeF3GwwWNv4iAhwrdayUDf8dsUzvMUK8eiesMACU6SXa3",
  "key16": "3HkXAxUYUSp4FtFx1jPxyNv2kEL3DsptxK2nAo7sfgg8AyJrPVeo93kW23AtnyzU1GLS2fENMVdViMfmGLzijspD",
  "key17": "457uxj8oJHqMzeuvPosR5ZHBJyNEeTv3hn5Z92L2VbVfrYdW6Zc6PyDv6wDsaZEDBHrXohNdfeBoincziCCxYAoK",
  "key18": "2wgZpYQwMysE18KdrkKcZUvM2ZSjUd4r6DxBryhFRYgRSRLddshnp85wBKJjykQS5GbcLZDFRsznwBhH1wFyr1mS",
  "key19": "4Pfgq5oLNPaYzNZm1V4osznvM7tdhZ9TxHzhgJjrFvc33i5euL5GmZJq9ncVFoepBQLaMXgrp4KDrgDEgsvCFFo3",
  "key20": "5QNUHb96LVmbsRgHchRak8E1BYwuxF3HxuLtKUTZBEZkQMWfQ6H8KLEjijjNU1bQiLB89U59G7ExVEFvwTr14Ci",
  "key21": "2UZZNuhAgukp23a612TbYJK1QRXhvpSxh6YZrHJ6HWMESCWc5vQdHQAuYYWeGFS1wvPrs92xoB2nsYpC59UTYjBz",
  "key22": "4ntD2jVxtEFcXXianor7Z2kZGhHEakDzWajcEB6GsDriUKuH6h1RhYncWUDaDEPTpWGynxdaaJR6z9d8SBPR5SPS",
  "key23": "5A1J3JS2BCaZGYxrGfhPnEygfC6CSZ4kgBfqNrRpPsFPuVqQZtiEyP6Gc5UYGhyab8p49azcH3RukkpG27QMyaCK",
  "key24": "36jtFJGLfiJ3nJRZkax5tMXVXWX1ux1fUUGpdys2S2CGBL4eBEKeKgAzzjmTTqsSiGQvKR9mRRcJhKG3XJfNhG7z",
  "key25": "4Sp5sbNgFLGEkwfcQPGmQexJwjNnEAXbayViaxemdeGbSBHaXcK5KB1Y6iffcftBXLBZwWz7kSgFiCq1s8dDCB1y",
  "key26": "51P24za8YnoSczDKcHKRAgN41xogaSEx6qCL3Nxzy84LAUFun71mNPgwCsuHEBZbeQQEFBd6LVWTZSYxSJqk9HPi",
  "key27": "5Pw1RnPCzvNEMy9XzJRz3sAoup7epSc8SujUdENnA89BLYZDrKZjBydNMFPUkhu53A8NRFJzn5LiTkbaHdfCPXU4",
  "key28": "TXWLpibp1P5Qs47ZgoLVddPZip1NT3SqDL9xvkxTcdFqk7qfKg2kQSRFhFvxxZ4athQj12YxnEE5VhdwEpyRLwL",
  "key29": "2gLgvxfCXrSaYF5reWCK5DELsvHxkpzEhjAQ1YsfthpsSAtUh9SoTmDnj4fydkK7wjNv81oZ86UXx2ErKLB2EC8q",
  "key30": "3pHTrWhcVLkia4zogjtGcw5ykUj1xUbjztPa2nUEHHPEnQ4xKv5GgjCmapJHVLiUzHeRMowQXD7nsdmVKp33UW92",
  "key31": "5DrGoPiPGFq3TAce3jYLQqbsi68g6gCKwN5tHnB1HBiLkFBCnwTLUkL6nfHdaU7X1bMeDEzZSZ4YdQTbCkQQqx2G",
  "key32": "3EX4tbZCZDgC9CEg9fiwLYBjYnc6PSaECQCYWxwzVK46Atx19ws5La8jXwq9KfjNy5EGRsxWU6w2f9RKftPJCBnj",
  "key33": "5yHex5jwV3Mk8QfZUeT7ZHnJcuiPUQSuth8JHuPpHpN4Zftkgw164X72Nsi2WNFsuxmG1Kd9oCpseSJyLoceiS7d",
  "key34": "2XDzxWwZeZ4Va4vz1Z52g1WDpoQSeg6qVGA3K9pnjKXurGjX8b8jffJ7qF8GhZPHBo74e1MKFSsGPHE2WzUTBXXh",
  "key35": "3Bhquhv5crfp5u3LtzexeGX4yFUduwVd8p5qnagFSPN8Q2U9Bf5fnfuzG7terqyvaXqaeLdPDMWkRXLWBcFLuKRu",
  "key36": "5yqx8a7XBK9YQixyRBAKEXELP4qLKAuiRnsUwtiNLpQmup1ftdc9mCCu5K4TbuxYqMT1BGh75jb5DubTzj5xGvXN"
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
