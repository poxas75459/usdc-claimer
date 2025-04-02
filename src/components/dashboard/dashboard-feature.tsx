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
    "qsu2gRE8ctemW2SCDZxq1tvgT5bLWJdnmqsrZ7cL2FfwecpDauspG8xik9Rn92zjVv8AM6t1TvgTBaZyia1cm8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dKxLzk7EMw4QbwgC85LTAJNB5avFMbMstj4HDongexsKAJw7v6MujVfo313PFa45eT3SLeb457cPqtrvYaLsrMK",
  "key1": "5NCwwoZrgT1rnAgHeq7vRPxRqK3tK1kPxpP6Yj6DrPP9cQiaKdADV86SXegizcpCWAJ6UogbdYdtzzHC4frvoCvr",
  "key2": "ngRp5BrxK4mfBLT6SK5796yLxY3UjKkS2o7Qv9KR85QbJxiYQPPZ1edLg1vb9GuM6ojfL3BPs35AN6z5vcmQU4U",
  "key3": "24B49fh7sUi7sw8AC77KPqoVYXBV32yzUUyt6GLt3xMAMMY1nnDMpyjCJ1qQs4fmDHGrhJhAFMBnqXBuL24MoEtg",
  "key4": "tHbFnts8RUm7AFPYbpbnZ4s3yYcGKviQN4WDB9Fn1xu6iuyu1s2WrugSmhKf6xfKYCEUvRzJbq6VYr8K6CXTmpa",
  "key5": "2jxES8h9tfv39J1mCX169LrtH5eWpPdPtqXrZA14gr534koRBpXpmwCobgYgWQgPqSLHiKC3pvZJuk16VFJgYUc1",
  "key6": "2GPB7z2RpBCSESYhkUpbrvnXxtQCXV2giTEfC6NwRyyX7Fkv9wp1Pnwwy4VemptGLUcEbhGWt3bntFHmBqw5uyhJ",
  "key7": "39sZ7VBvu4rekyBK2gaEJC8LvFXthjcQdfYysbAqwBfRFffR36CRMdLjAvCnigzgfSbDaBbFwFR11wdMCshRmLHa",
  "key8": "RUN13EbL1ZTdUbyNyYuMdHJAuWsS945vZiasB1yBYjk93nxuaovvGDxKFTAjjJtHPTU9uMnXTtz2qTcc2dFVyq1",
  "key9": "2QFJejq6aHUmae2sNz19HMeQPcDhdDi2P3iRsLQJvpNom4WHozES3iaZaLn8WnPhJ3nKSiG5kbtjYnDywypeAarg",
  "key10": "3fBwSXLppXYgpMBuJoB4rEMdVVZ2WaU8qryizHQTAyn5tXsn7XcLXA7BKSn9HWqkEFZV49Cu4HAGtVRXTEe7fXw4",
  "key11": "3sXuNfKwSnarayKgVc5tN6GLajYiCAuSQitDGgiavb6DkHTeMNvM1UXLYTrD1oV5DLP36KbPFuqtZNuN9Q45AZze",
  "key12": "52eAwdwC6K2324kiHZ8M98Q9MVHzfNdkWc552tnXEy9BRgeBg37AXwYSAa53sYjr5141Zv3mDcme477kA4y4yR3i",
  "key13": "39TfBo6wLKAveag7X5ZsKWbCFy3Hng9SmjD9budogvuATmF1ZebeHM2v25uyJseMMwa9MM1t3MWwLmzGHwkqrQ9e",
  "key14": "3D3MedzNCc3KSSSbBpxuiwCCLXJTQ6YyVDiH9PReTYGn5rLPg5oUinwAqD4LitA4ziS3Qmmm2cXtL8rmp9qx8UQt",
  "key15": "4VNJZ4GYxgUgt6CJrCL7VZDskBJNyW3GtdoJ84m4A56THgb3gK8cLoVPeud6uTEj3nxC1pHLrgnTWsDQYCnk5yif",
  "key16": "2568iLrMU4xb5nGE7b9mYEmDmWggFnssWcgF3ncQ5rtt5WjRx9nbVzBmWZaSwcg7RjFbEbuMxS1KqMwDxnvJpRM4",
  "key17": "56Lw3zyo73TYj9BQCP55PLokjX1QV2DD3EL6YsPDbgR7FfWom9zMZ56CYUaZiBC1DPq33HzkMyP8Bc68iUg6jNRV",
  "key18": "zAsjNaDuSxYT4izSuCyw2v89GYkynoX4B3w3yssFX4VW7iF3fWbZzjnbFdpLWqpcnc24zXwwacDURgoMaacakwM",
  "key19": "4SZhad2zn2GDg5z8G617W3C8dCNfKRRLVdLZq2X96KvomZ9GrGDjaeYw2WBCyUZbXdhR4r5egqDfCsRwngztoyrV",
  "key20": "4pBDoPUs77qhYVAMqQzMf2jzQogmwdgfUSyRsrb6oASN8t81WvqXD6WRTgj8tSLJqruKyVkCJoNtnSHCwPYjiZrQ",
  "key21": "MQLnCdZEdGJBWRGLENNx3s7MBqnr98HtBWXncDdRsoCMkPNoTTEqoa83SZVdeeqU4UatGLqafm9dXRwxhEqr7TM",
  "key22": "4ENTd9rW74jywyYPJQMTNJDtG7FkxE39ug5jjYBRYTW4zump37mk8cJdSomAE4tQSvLbXw5xFsvsjMW2BLnu3Vts",
  "key23": "2MnU74QkjiBbjo2LryEbBi9L38PzpfKmwNqyY3vaPv6KgmwmbjRd4DTiCUVfbSwmSqWU4cpweab79AqEGuy1Ei5i",
  "key24": "5bJGgbUkWKBHrNCDKKJ8KEXP1QkYkJVZF2zBXKf4zqxNYpgXmpPQywKSYznurYe8m9g1YyuTvQWsG17pCcDpGh5j",
  "key25": "3Qy4s9GPhZqrZTwz1TMczRqpJAPagJH7PyxfnzacrUkc4CGtDQvGTHhoXX6u65ZZ27jy1MP7q7YWE6xW7xepXGdp",
  "key26": "5A1hxexg5hNyvXcmjboWPN6q8ttCvYkeLXjs5pFQNd8CtrY6ycP7RV9f4Jo7z3wciNhCGysRd1hspZnZ4NEDT3Rv",
  "key27": "hvCwMxjk9MCLC96Lhq5vyXH2vjHEfbkYYwtXfqa3aH1nbhMj4vA3j5N72LSgvVSKEtaEAA518PbDCpm4XabFdXX",
  "key28": "5VDzsr3SaNvUjPLqsUsQSsAaw4qo2tRECrEbT8kE6VrhWBbH4R4ibbfrQ1JzhTmEu5uSKjBVPcCHmhYJ6tJsN3pm",
  "key29": "4fvTsX8PL3rFVToPjncFajtqDqSCWyEsTyGWSJJ7nZxd6X7o3XmFTZfzHCD7ZZtS4JQ6VBMu7C4qoagK2vfnVsDz",
  "key30": "24hhCHZLb5fNYpR3UtPrHEoMyo8GNS5pGedVoJLezUhyNffTaVQXasqNwxL8MRG21kCNpfBaQ6figYtyLy8qe1v6",
  "key31": "4E3iMiKKnJfRTQuSw9EUVm2iterMFWDgHN4jNjfWeK4q2pTtopRsucuimrQ5UqhUqX9iiEgpRSJuCqQ1FiboWn27",
  "key32": "2hPY6vvfjWmbpygWgYT9d5m4Xrfz3g9VADudndj693wmr4L1BmLZkKgCxsoKww2PZwjDHyCehTHWShhWY5Zop7Vw",
  "key33": "2TDuPFdgJ2q3856cW2Y33EZVtCVoCngwNU3Aa3H3VPTdg6GcBnkdy61dzofEYx1LZbPavxcgzE4a1CcWeFYpPMZ6",
  "key34": "5zVjZJj7J9Sas33HtFYpZBhJNUhGybmR92ekQGP1QYnn2msazTCQsrmNaHeR2xBz5wCFTdmj5B1pXn1vEvrHrM6P",
  "key35": "5i63FvznTz3fAbFXPq35dFD9w4VL4pdG2Atq63zg59E3vDBc8Q3KQkpppscrWt3NVGwizCKGWz2HpJ1kQUn1amdf",
  "key36": "3Eg4RVfA7fSWzneYwf4dTbDFmz3vUjYXaL5U5ax5ycbNSpofqgxGBobMDJvNrSQDdAkTRnJ5oUhT4dDKzcoyvomj",
  "key37": "4JZwqjAXwVFG1VbGE72GBCKPkHVCWZVZBC368NPpBKFNiau7dhH3hBD22aEvXsWgoMsSd2ZXMzPj5pvUEDFzvV2y",
  "key38": "2jiVJ6tStnY9fyrKvCMEowGYps6DVat4o1iPHyDtqKJhAvLC2gekkyTchfqrJnFZ44SQdjugnLPb4jZ72oiwesET",
  "key39": "37Lvkopab9gw8UrN4EhkN6jwTJ97h7cFQhvTTyQp9b2zTcWdoHVj7hXvygXUVthtum1SQa3JES9WwLqynjVDAWE3",
  "key40": "5bmvkC79dHrJS4SG2T4JvBz7YDuww7KDiJGw1KixbbLX9f2YoftJyQFw1HFCL7YMbWKLr2vSV5wSZhsc77LTqzou",
  "key41": "UK2cLyVhPSiRsJZKPvrUagbkymNZ18sNQDDG8L1G2zCWU5VfStvmFshP88Fwojv6GXazUdK2W81DnhruHcwJeAm"
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
