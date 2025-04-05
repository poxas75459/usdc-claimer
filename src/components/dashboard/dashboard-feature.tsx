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
    "24ENSESdTT32XDyLVopa5MRtwaMpkPdQBZUyXxtX6KNZo4SHYy8CLidYPZfEnhM1Nngn4a6F9jJdTV8VsSNtQabX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4UKaahLRqMaAqtdWSmEEDkXbAMAdQ6h7zrDLmsXjVFUhrjmQ1pKNYzP5AcSRaMNCXrC5acwcHZoDcin4VBhGof",
  "key1": "3BJr2Cfc4V6dzeJEeYFFyyWZb4YdaqXidU1EKjqbRLZoG8QYxt1wSiCM7B4J2KRQwnZhV58UgqWxaD3cqQ646P37",
  "key2": "3aJcrTNJzbnM3AX6M7fvzzFzgCQyMBqZcTxNiKoeXwMAengix6PSCmVc4atR4wbLrutBhokJgJQJyv1QFxpuym8s",
  "key3": "5PXfMbb3mVV7JshCnSfkckPFAX1qjxhhU8HcLTFVUuSecHX4EfCqbyTySZ76ekjvwPXfCsLanoLvSNiRyyEnQqpo",
  "key4": "5tFQbTBgV3ZHwVubAWJVg2YFbA8B1CgAJR3kSYsNcGdT6FysAXzXxn22iLk8yGoLm3oYb5MhdMzwztZNrHtTGFB6",
  "key5": "26y1hdWphT323z7Ht1Na4h3Hk8vddi1uNZ9wVzQRNji3AA74HU79pmbNWv6qtbQESpjLNf6EAiTpBwQ7YKY1MEfx",
  "key6": "4MENk2k25KiAexfB7BvHSaVUwkrruvHN9EzNNYJNUbZyELeK4ZtdEpJBpBZCL3ejV3zHztSDoM8JmaC9TtCn4PhQ",
  "key7": "45Q3CDxNqgjri4fu7guVijVjH9NJkTQi2xGsVdkWY6G9s6Y61UCUbtDQ4HSVajr9KQz7SEv3kScrpebyZ7pz3vxz",
  "key8": "63zw32a1hP9YL72moFQxXtASLNfxGbrcGCT8Qh9uBHtR6ZfAYVgyDK2zxQfrmhjUkEoM5yfjxLC1WtKeT1Td6Wun",
  "key9": "JUqBq7TVQHeSoz4uNLrHX94QaYsgzDDxLDfjBJ2r5phVXmieRRs5G4rCb5vNdnvLzwFuFrMgf6TdwheJzLiPLiq",
  "key10": "33ECCMczKLW3a5FmAaMsgrrNw2U4TuEC1d9HFkBmfZUGgGsXxbmmrmhV3NJrZCDAh2SFKng3QDE43TW3ioJ8ATQN",
  "key11": "2Bm9dXpu7x63JZ3T8fgAPAztWVA8xm8WBuRpZdBbLyLYqqvn6d7hKY6i51hf6g24zHDaXtJDp1SKhsGA7upL3Ss9",
  "key12": "5bveYcn1t2vbaxRopwvjpGpDRFEtecSRBvpHsTXnmCPUVaAVFoQeFZdkRLg3PrTdN9dtnroAn6kN8bmvbc99b7q5",
  "key13": "xtLQe2fXGEah42bzUUpz7nts9UjgVmEChzhMvEmyS4ec6Kmkbcj5W8VUgisMoDz4Pb8HYcYHaWZQ4XJbH9dmbfY",
  "key14": "EECfjw7ACH3q4nWYSyNTAW1b6aJSChytDdoDyutKELraJF43sX6E5jbzdaN74bZAekBpYUzNBui8tdcN8LFXmY7",
  "key15": "e1P1i1eLab6MhXKyLBGSwoiRpqeNheqiMD8NaJMpG1eCLKxm6QqXs8MovKMQRFfLcKcaaSE1G87fSgis7Pm7HUW",
  "key16": "2jw7HKhwdiYv1rCz5eNUNPmNf2nCvdphxALitCqaHg58w5tR6msSbWmJLWbSfanCfYxJGKWx8yoJpGzGGwW6yu2k",
  "key17": "5HUyi1UQbfmCbFujmHwBH7muvD9sCjmu5hBJFApnnDDasPnjcDHCGFfN81RWR5aCeP3iT9WexZaQtxjba4eZRczH",
  "key18": "3XwaFVSxZfDnTE9JmJuEzPiG8ohrbuu2gZdCFnn5mi4avhi47CuMPxJtC3Tg7rxJfzHrFtNAUsiiQqtvDrK7yvPV",
  "key19": "566jXVGYK8aDoTFzabYNNzpBFFtxcFnb99v8Rrs5Px3wukThGi2ebRCeKfRT8248xgP6hoFTXLghtmNrqDe6Nr87",
  "key20": "rjitrgSi9Tx8tiRbNN8Nw6TCPDYCbse6HPddeGcAJbv8yVLyvpdwCPNtXLQPubNwCJsqWXPAo2fjhM7F42dxeuh",
  "key21": "2uy5VD9yHdfReGZCtFtawcd2dAtuwsppdvmyczAafVHyLkE94AAvtT21sSKKVcTH9NSXi5uMyoEQssfY9bUbMkWV",
  "key22": "57QYhoFxkUmfWPZtT41Te7wBJK5XiiGpC3ShfMMw2sCEdLjRm5jYQSMXEKc6wJXyyYRFY2EeYZCBywwombPNRUWi",
  "key23": "5UtWLXVsiZhMP3yvytvZpQ64nma5xcmpff1SxezKsAdBVjaJn382k2Kq9G4C5SR29oe7RjjH92NHCgwjQJpX68pW",
  "key24": "3GQ3GWQEbDPXG7F7Aj2U4ge5qbmoEPdjoiLXw2XnHgfpTH4pRjYbkcpa92vyW6Gvc2hiji5sLCc91rK5dGoFiqiG",
  "key25": "62A21MfFdHFoDfajNxnjdEogXUwFG2TN6PxXWgemPC31rtxJTyrd5shkss7F83cqHEngwgKiaLpb1FgbMq29SETo",
  "key26": "2nyUYgxnDxbwgnqWW7SmgDm5Dv6bSYyxjKK9yizVhiyuGg5Fi7qXjiWTmbFFmrFUWhcUvpmCvfhvE8zSWgf5tEiK",
  "key27": "4si9sZSTakHecgKqMmkEirCcGn2hd75P8yYVmh9T3spjJLt71aCZ9YVxx9yX1PrfqffNVtGqv7R61jb31B2xRbVc",
  "key28": "r1CMs4rGjK7tCMF4WEFtnTMkyAoYCtswfvXBTKQ1zCemta15qZ9MAC4ayzLjLLC7QHEB9Z44wyhNwC2zYLerNpk",
  "key29": "45P7bdwgDGTCEcQYPqWjWaXKH9AUmF23Fe25FgbcXhFTYKttVJXkDxYfCDPKcQwYXGyiB8WABUE7Gvc5Ew9YFDKJ",
  "key30": "5FTCbyHYEdzL5mkkX87HYnjLghTLfb1zHphbyyhDiBcdAWddonEDMujVQVD87eXv323n2uDto4FzXEF2bfTo5mn1",
  "key31": "5Khx9xLAStgJqVoE2Wa1kaVZnt6rxStJZ5wUM89LkQwWsVVhaDHaKwTVBeJzvZFRFf1uJkJAXYtP7zJsmu1kSLur",
  "key32": "3Mfkjsz47fQfTMTnBPwHQvuz95WeEoXadiXN4hQapi8B6eNMwB92hbe35VK9Wj45fgHQeEt3FvtTXrZM9nv2Mi8E",
  "key33": "3ouivmPJ7h3Zh6AzDyJxPN5JKrdRjqeqWDiNSgGWjyfAyyqi52yVLCQJnq2aW9V8GeQchmsXYeqzpbhysnFYt4gy",
  "key34": "4sEGLD63qyQKhByjYX6xaLmoPbPHBEF6xZF9WLhWboC2QaNPYBxXggDur2QCGNkrNCm8FCvH9EFuNbFrNsGHCVB9",
  "key35": "5z8d4a2sqFqyx5up9iwtTUu7LDi35e6DbvZfSq3kgkJCDg9hKZbSgHJJJTD13pxXXtfJWnXxAYsGnzcPQCDzWCXM",
  "key36": "5zNBeMsPCUGCDk1QL388pw4ASvRhVVHmRfKTc89YLk1Bx2rKPGLHqAAPEsqH25iLzFa2gmhRPNVUknZd7dmDVoYD",
  "key37": "5ffPpLJbPY2ABuxpTYBaRBrD2T8CRWHKA3U6BpFSwU8xvTvPCVapGHwXD3u81wyvNNuAogV5gKC44CBbCG4TfXky",
  "key38": "36ZRV9ieuA4ScKSCVStTDkvvsuq5qi23ZVnQyEaQnoMNwHL9GqWgtAJT3XLbBQnTBw9mrjBWLge2zsKcny52AVFy",
  "key39": "PzCaxwzGQdQVh3PWEigwifcvrmsnm35cC73oY82rxfUPxV3zzY9mAhLmgm92kvc8qabjpFaFTh2nxAc2M7briCS",
  "key40": "2NVTXST7D8JQG5HpncsamrUTuFi6eWmDTtG82XypASkxLn7mAuUn91ME856ssuKswHegNdxZssjAAqmRPRWhykjK",
  "key41": "46XfMmyhHogifvNB7ueLh8e8tYR3oHe5GnbEYNmusCrgeZDdxqbyaovwbUksmtpdrAAkSRabxKnMA2ZStF1xbxrr",
  "key42": "CLHPcTx88jPUAR7tHNGvgXovF8NKms9ixvc6B1JSyi8WgAeyaSKet562hPypDmTcJDwfE3pokCexbU4XxkEwXSg",
  "key43": "5kjk8Ei5teuFyVvkQxfKByrU5vSfsHXaBTbhaabjqfAiTtZaL9W4S2sdBgE5h6FKTQw2J5KbJUfFRNjodq8BBdbv",
  "key44": "htBsussgXv3t6JVvuNWtVuNdnuZNbN5R3SYVzudrRQV9JeA5Tp25tDuSvHji2FpUxh3yHoLBkCc9PkauicsC3pf",
  "key45": "31F9TyfGDZJrLnrJdaREXnpNfiwe1fRKeNAJ87GfJGREYHrGkYnM8Qjn2f1FiR5JHcLPuL9zZzAKnCWuvKdwQibL",
  "key46": "3V24t9VQzNneBszMjU5TyTsWc5qxuCgHGza9sN1bDprjVxrBrcaNF9xmhhDUiDmfjNvQ2U1xkEmSY3wwecQxKcFU",
  "key47": "5vtEmgW1msv3E9NFTxoURGCwRuGwrBw8k5J8vobwVWU4HW8bJE8JPb4NkmNP366PTdZ5YbW3xHiWetSLSvNfBSdg"
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
