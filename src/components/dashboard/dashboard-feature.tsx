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
    "ZbR1xLkoa228ag1FNjt7zXRSBLCTGM198qgbbGji3ius5TEhMvbukfWyAPdh3zu7yjTNdiAkdQ7Hvg7Ei2ewKXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ciixyaMumxABTqMRjnXXHS5WbkXgyF8YEPTMwseRyw3d8RUMV2y9C91hdVr2WQ5TAAhjxUMAuSitjVmd3x7EyiV",
  "key1": "5YseepfVpBNrRahgXUYXtBLRJFHF1EbJefCyHt8yS1DTtL881k5bKXwoKubLjpzkFaKAwADHYGb8UupbGLp84Kix",
  "key2": "2Dq5NSG4ejiw52wNdYikZbEwRbcBWobcpMzaWNxHqSghfzD6THEL26dJKNyTyzwTmB9dhVtXGNsWKNi6qhRRJhhJ",
  "key3": "GhAzAShVUusyEddNA2FevKM8KPufcQezKrTT4V76Dpj12oKaKs94x6LxevbedJ9xio5QnSxnZbRL3mUDVgmW3M2",
  "key4": "5KNrFLjQTE4CqaVKFrbp2QbGVZUERYcubLgEPKwhNCgJGC5b5cpo8hLoTn2sBZbsNdvvsa5tiB86VwU1Qn9rXVnn",
  "key5": "rCddc9Zg61BMF7uCuNgywc2cCM1McMEY3WfCjkFS7i2jc4MUM3o6aVacRbyfcE1oWuJAxLBokG3CWB2ySmeH8g3",
  "key6": "42qiSKkUCmn8svoh487kouzyFKHDiohMXViptbioUjBqiVsJdAeGt9SPWU8i2ddnHCPNio7E6nHCDJrHZVTojfhX",
  "key7": "mqEWTtk5bcGV1wkD5CjcdYgqJUkLCkxXigK1RWAt1gquXb5QWrYDfLSvhwoMiDS9iAuTbMibNB2AyEc5Q97Ybkc",
  "key8": "36GKZi3ibvvv99oZd1QDu8qyMc1BuADqcqAAKbcRr1wuXsmJNgxfXEoba9TprfVBDde3q5pu96tbXomfQaC9Bj5Y",
  "key9": "4SYLrMVsanNpvd4xJ1Y8tvpQxJZV4XxyxhHAFZz6coNjirXdogdkkukH7sfmMYQCYm5wmEQDTF5VcgCAfDPkJB53",
  "key10": "4W3poYqLFjtfcg3KmBRoZR7QbNkFSLMUGqJZe37FMFdzNZGXf8u5amXbN7UHgtWmbS6CTcf8hZYbpjcepaMVg7Vf",
  "key11": "59AXWKqKd3eeK4GpnxBGoiBqUQRmGmAKTWTQ8GpCVoMB3is7o6XLvHhAYYtty3VCHD5s8UYKRNxF2pHQuXE9hn3p",
  "key12": "3Wg2S96usrzN9Fp8yBAXXNRpAe1ubj2K2bt97d3TU69wiw21TkAB2DpDmtmGC7jvp9KJ73vQqWMSgwur3ngsCxfN",
  "key13": "txnztuPr8K84a1jZL48jihiWGgVaYXoRAHhgiE9DZFYg357Ej9b1VxnudyTdvxJusehj4ZN73F7RSkattsZpEvp",
  "key14": "5QumyYTm6om25KCY8SwBDwNbmrLsLAgzobn2q7S4GbBevnk1Mbh1NG4YnusbYMzLpECiq2PijZFCJJjWB3P8V5dJ",
  "key15": "2vPqba9kiihTeJFKsaoQtgWePLQyZmSfxifHc1k2wN3ezCV1t7iUm6eirrCopiPjdKZrpLQiimPiRkV5gLU5jp8S",
  "key16": "4DmPLb1oGCsDTj2t381Z2tsKJB6SPMCJ5mKtvx3rvH5qQiCeR415vyuLNdLzLcFSUmMFw2fJ3oda9dumiV6Ktb3r",
  "key17": "4Q4kVstB6j5JqvgmHr36gSCYpxRnHkceTue6jiTEzeCDzkM5guEjUtnaiQPk2R5Kp3PwbhKDPMitVU9kWy6WzGc1",
  "key18": "67kn5tPau6LtPR3WfySUgMugoxnrVoX4ucSVt7CtcE7pPjPBtnf1CgxPX6aGjNu9rv1LhQbuUZbq2ahUHB3jKLp6",
  "key19": "2VM41sT8enFQ2DE5qbDdFH2fvseox9DN8zhkWTfCJuAcXcjkTGg1dSLCfhk1GP2PRUJn8PQqX3akGT1N9TAJ2knD",
  "key20": "22nFtK2LPSXp1z92Lo9HuHRrDKPNf3n2NxtApwojxn6799egpyWt9f9MbSAFqLPMwDwmStxxBhzP8ZeGXV9AxCaD",
  "key21": "4Z1gon4sFzAeFKWnG1nT2TaxrAqcn9dne41UG6oMoA9qLh5DrEc4HnDnPRufc33KjJjpA1D4JVtrYswmk4z5oZn6",
  "key22": "25UPybhs3E4KkBK9sps3ZUpLnxmJ8nTYVgUCfUFng7hWSWpqBFokZSRd4gDURowW3EiFi6NGsZWhEimsE6JT3dth",
  "key23": "3HDZpW5i9gJkv7HPUW8P8XcaFCqVZyA5VySaVQzpU8JCzitQhKijN1A58VrSiiq3qucV3xLzyzw4YV4qyroR7Qus",
  "key24": "2XJRX88GhmBnB5YseezGRbdRkoM8rWrvfBZpucnVnCJBYTVJVqo6VCNvqStqW8mCUCjFhiCC7WhPNBrorCsc84W1",
  "key25": "3aL6RnKDV1AtzMWYknGNRwwSFTYNeKzi72ECVwPRZBtsTnNsJAGZRuN2mQRjbpDgVZLC7qFiZQNbtXfBriE3GSCX",
  "key26": "KzMBaSsjUYwaj4t4HXZ9gPupkUY8ZHvnEKNWzysEsQCKNgYkYrrEoropJGUD5iMa3pUYnzehtc5tVDkuNz618Mr",
  "key27": "3n61vKkWWuLHwDs4qfcuyJjMxpUzKEbELTnZefERT4ijRN3K3q8nHCvYVeF1C4oZB7nHemRMmns2jZufUqTKAJHP",
  "key28": "ot1pKD7jUsS9NSxpwEeUbMJv2B4wz3xmjXcB1TiWbNaCW4ow43TqSv6RYte6rZ5oKLieqB4nVcgGUFDiMzF6Dyy",
  "key29": "298csRM7mmXgEPBueab4f87ittPYvgJTLrM3VTqjSAbkWgQ6GuHVYqGVWcZMJHYe32zbCCf5uRE2991dLWX2Vrq4",
  "key30": "5PwPhMGhx5zLLmDbfAxKUfYzqtoLtea2RKjFo2968b3K4ifZ3KkheFqoXRbDtLg9CkbQniHuY9gEzJyUpG14oPjz",
  "key31": "2szQTGHzxPKWKSNU6U9VKchA8yM8Zkk2J2efuK9i17vsuzNztvBWAHo8JtwGkYmhTGzmvsNvvjiLs7LhrSK5BB45",
  "key32": "WgPBvCgarPBJEaX7abQxGZgnocJeZYJkoF5UpuvVo1dgEUjuKKNFaSxEXQRyGuXhisNVhk5ekHsiDPzoM7qZhUN",
  "key33": "5sXxYmDjDoFMAQD8Xgw31m86jkeUEo1YdVmefhheTL1a2R24TgEmiTkyAGCiUTTrFLhaKDN9CVBu4aJXaPUinpnW"
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
