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
    "35g9DrLEH8EX9tpVgndUs2523Phm9HNDvEKCT7zGi57t2bDZKjLwExYmx2L6mcyVgMZ1fYFDFKSgBmhP6rhfyiGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qc4ZXb5gduTcGb2QPBgabE175bgJhZJ4gWg4zMXWWexAgtfmY3HYWqpDkfAJDox6oS1RFaMQ8bofU3zUWufLr3g",
  "key1": "3kY5B56bzSHyUP1jBMYGQ6sRkhEcTk6dMuvjPR4zhKqQbExLnyuEt5CMFgUSmettUDBMpsfoqV22s62RaRUaMTc7",
  "key2": "5L4STbKHRoE1chdDf3Jdds59VchwWEXgMSn6AWZFvzKmmjoQm72PZ1Jeaex2Aa2zroXfMn6MeDCwfDfAttvCSKkk",
  "key3": "2nWaUBSrsAmMsQm8z3DkZv9QuWQDxcR8SEoo7C9fMpZYGCNdEJeBkRk4Cz7mbhJBsBfTXeHAX1BqgDdxyoZqQaJ2",
  "key4": "TDWmVXYjNBBXudxWaQDBLziEzcrqgNy98zpfHwL9uPiUqvJ2JoG1AZcYhTCUUANJFvQgYEB5tCTY7Coq9kRiaxu",
  "key5": "NpGCHXUG9VtiHg38oRn15coy8m4GbiRNRyyJcDdn8fPQpShUpA54Rdq1dNoiyn5yV2AVScgZPcSEB7ab8vooQCC",
  "key6": "5Ci8v28BUfwgo3JThDPkozPG3YoMJHZKpoDdm6kwhgwsR4ToV9PxmghRy24bbMYNDUb4b2yrZ9mvEitXaHmuNkb4",
  "key7": "4ZTNFe3mPqhZX8hfoFrcFmVJKaRQQqKMjtQ6o8h4eKVQcFA1bd5n1cyfMmtof5GAdDACAXw2Z7z2qeKTQwbUbchm",
  "key8": "EGxeHKhUdgh8cddVR4har28AztiNUCaP4ydre8RJijJB2aJAxVzgrmTSg4KKx1eeb6uMYiF8586P4F7WHJo7JdS",
  "key9": "5iEBW7xxWDJYL2wC7bbyPF3SpGAPKB5Ldg6VZvaoYToHU872BF5ywTT1Ta3VeGYG2PHc3ApceMDdraWCXDFkHvxN",
  "key10": "wXBtVCyuiwz9aXoRzM6LSnpwuaPKmo9SLiRTbq5nnTKa7knYk3WR1YomMfjdkDSUb1LKJN1ZjoWvKkSHZt3Nn2o",
  "key11": "5ME2FWv4tGVJvjhNizLtArgrzdKL9zfo5UKdpX3yFGD2hUka46PBot4kkvjwbyA4HdfiPywcsJAyFrWdxitUDwAv",
  "key12": "1LvHayscQ2QP9uwAUieZrCFKBxHjaEDEW1jwubBBLkGnPHDG4R6K6dthUXMZcnMt1XvPJPoUZxrJzhj4P5tm8LK",
  "key13": "4rWzSiCRRTLn4TgkogCPG2kUiHbn9YM2gckmAMFxE8xkZuFEbixHYjTjBWFW2pRymA7LwhsVFLHQ7dTiPkH1NxEp",
  "key14": "29UxVW57TQG1wvWLNiW4fq6JjXpUYW18eP5Z3asVxAVhHqrNTFRo9h6kGRvwKRg4zQXCaie1S4z4P2siFEyrLjgX",
  "key15": "65XeNiXphCmvaA7WqdT52tnVzgaLhnDjHZ8RaTtXdXjEEx8BRjpcatSdMmegA7gpj6eHSwu4bxMXZodxg1tK3gFv",
  "key16": "5dkYbHAEeHggugmfbNEDLu2wuVzBs7WZ5ES1ACv3aCVwF4qE4DqcKbLR13BBdBCro1rADAhZbBRxDUShdnSYf79L",
  "key17": "2xoMD2a3bU6puYtRAfJWu1wK5vWa4M9BPL763UJeVDgQZD6n5ozU8nUpd3kSQ9Dh4J71XuGc9eX6N5LUQigzwebo",
  "key18": "65jSudhjnnrmpSYo65s8F53qRcNHkADQbtMqPm9QyuKRxfHnx4RVTpAidzbDX6RnknhRDfp9g8WUPmPt3n2a1S4t",
  "key19": "5zeX9FjjQA6oD24bShoUiQkRkoMZwNa8paCP7dqhCxedQf7ie6kXEgtA7H3YFca9cDToZX7zGUnYPu5SVeUoYNLt",
  "key20": "232LCZhQeA1NM1Xq2Tf9oHyYB8fjqcWzXxexaZGckTu52PXL83msGyuWEQhBBtwNJ1qdeaCp8z5LMw1pVTX8xHZy",
  "key21": "5NDxpLtvbvrdB3B16SLPMMBPDH9x3o2yRSSHhv4XwiSXbYLHwfEideK9rvSmPEmCwijJ1WNy7S3MN2tBtY3oxmaq",
  "key22": "3BtBZEYjRYWG39yUipvdkXwXVBRacSgin4RJaoyqpKBXL2GW4F8vx4BMizebMssyfAWJVHTFCHjWFzZ3iYfpCZes",
  "key23": "4rP5iKToJEUukvnE1M14tQGmMzsFT9zZe6QqoBP3x4sajX56wEXcuGuE6QWXCHiDdoYYwA3kvbgogSdzSdF5LxLE",
  "key24": "5DkRqpegZQVF6hTn8M8aF8Zzxmb2wFMD9L9aP6bmTsHfVS6ML8oV11Usi8Ro2d81Z4ZGt5VMxFt4BmTKQ64Gqxfj",
  "key25": "3SNp9NVcLTVQr96Mx7yRsr6Rbpbg1KVRQ3vmKx99mDCmwXHStq5hZaoQSJrn4xVfnAXwYvxgYPN64GwMwFDLXGke",
  "key26": "5kXJn4Y1543H51ryg9SfMPZN2GZk27eRJyXKdPk4jxfURUBnBF4R4JLAbW64h4tK5F5aDpJa8p8eNtVztL3jMSYD",
  "key27": "2HDRAwbJG6iHiPE3xcB52cNYCVUTRGXTHrCuBe3krGDPXwDmTvTgCewYtS7eyhDsTmdZthLojGd6mtcuxmW3m1EB",
  "key28": "4C5udJ3Kc6xL31k3uPsCygSEYYPuTP9vifQYQpfSiiRw4mGnLvgktvD3iXiZqgSyTYhjgDth3botWQAgHeVvabB4",
  "key29": "3wMuURxTUitkdaTaT4ksAESmW94Jt4HewbmR26X8tJEpeEFyy9vEhbisvkG32A3vfaGqFsbyoErLo148MquioTzn"
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
