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
    "5X3aHFgAUeGB8fvyTLcTXPy9ycrAWiQZmcQJBWQyFKtBUBv5EEt5Q33qWh661KhPRJAP8dDMQs6dqJeaipttvGCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXBoQWKs3JpnAhgyWN4WFZ6WZ7X1SxZNZ7w3usekAaHmR1FbRZLJyWxBi6KdUsFpFkkbpf95ihATEtRB7H6j5Si",
  "key1": "5LscnJPEirpQAADEbB4Jt66gjmBp8CnCZGksST319QbUMM8NRNR1vjNCHEtG6HC6vgVwvfHw9iTzqLjboHuubbRi",
  "key2": "4Z1uMusRQqMiZBscouXJg3Ad9E3yYmZhuxNTwRxTYp5eYa2t1hWDL93ZaahgKC8hrYLm6KbipVgJn94eQa9Nu2uN",
  "key3": "etsDfpA2ypi8mBFAf1pHJkHkYNALD5w88zqPD5DHfh68JjS9nzruuBPsajEDtRFU5z53xdncW72zLGD3qw545ra",
  "key4": "3oD9uBoyGTXHj8pm41sZa5AdY9MhY9zFu8x1BV63RLk36umFMsYfrCWSixesXXhU4JSdbuMjriyPtH6RVjN751TA",
  "key5": "xygLU4D3hvHcdL6PwYgSPBzxi5cZ53dpp7PkbJbkyvBLp8mErpeGQQHeng9GLKv4oCaWeBYsenjFUAiRcSLimim",
  "key6": "3xWTMkPH2nDvfqSPfVvXcAC6PsuqGUFb2uzdVAunCrdippBsesLxbibEYiVW8ukcDPnz6Q1qq1ZUTNtNRiSB91AQ",
  "key7": "4torix3DTQtBWVDzWKRQaAysiV2whgWnKyE7J6KNcdoeoytrwgjJAnkzGw8ZNGpd2JGquzpsLTDEAczmG3HHFyAW",
  "key8": "3cEv7E5ofKCqf2VNApZKaFvgeAGvuA4hwUJPvavqMFEF1m1GG7afWaSp2z48ptz9ss8oRW7VdgpHmyGPEtnJb9Wr",
  "key9": "swP6RqizZBYBFUVRiU85X9SgQTMLUQMSfQnK4QqXKtDn3xbykLVSatMkqbtFGsetSfkRHgF3a8cGEGiRvdjSSxt",
  "key10": "5xjueX73bnMKZonD7qkx6owPJCNCNPkV7165VFL46szNqKiACQMgSTLcLeHw8wbN8EeQMhYcsKBfPAdKRQMf79oN",
  "key11": "ZxxgZDXP9cRqX7Gzsqei1E2bBjKBshUpxdSE4JXTB72oiKru8Xiu7a36hQx54Geu1T9LTjXnVYkzTX85nPojwgP",
  "key12": "4cQ5ZnTWdhKxjqzZQy19fWwyfkRCpyEfUcf5KJcnz49B817aQJ4cD3aYJ383WYQtzhA4QQLTZPEwmKRrxrT3PgFV",
  "key13": "6GHXMNhkVphxhaTRdtvDnBx53kcEhb1wVbrDqkkZQLtmKrLAYkJmpbqhpwWse2AJBwiqgeHaXx6tnrQc4Dkc77Q",
  "key14": "2U7ti1wFm4b1VXKRnAHqaSJdEeTTH8cd2y8dEdWv7VF1s3Lm1tFnAARuZ1dbrHHLH2uELiRJMZCY2Rz6XH2UaoFt",
  "key15": "3z2htGjogGMafvuNAG45HKFoU4F3xdoNP137anYoLRh9vtAc3Bo8A2aAwAcZpEcep8LH3uXSdLLpRjwRse4uATfW",
  "key16": "5XvHSC7eQmTWo1obwtxAwiEyM3BKacLQ4DW2zZPPx5rezUAfr61QCL5fFSb8ZpDWGqPZZeardYvVBoHhPDQbFhsk",
  "key17": "5FLUPuiCFxxKHDpDvAD7GiYntmQgHK5QnsFtZeiWdqEcJqJsXJiWK89AKKq7i6ET1woE4bogZ6S2NxKFajkBt17R",
  "key18": "5xZfGAzCd27g6Tqd5gM89nJutk9epdco4BbMQCy6wwxPNXFhiVGg4LKtnLCT4pETKeDgA42fqsxn37pzmq3orq9q",
  "key19": "38Md9zLpKCw1wCq2YLBhpSP2bCRqEfaPHEZ83KK5cRo63EgibAqSC3Z2LSHnncCZGsVG3Z65rfeq98uCTLv8TrwL",
  "key20": "3BARjk55umny4De3ypDrDsiVdGhJerDanhcJVfnjXuPWLVT4JUGQc3n76o9h7uWisoUk7PoWVvvxcwEaH4Lv6gS3",
  "key21": "33VqDycLS1ojx6MXyFpxxqQupmnNEH1xZjKYKfpydvBUZnELY65JNhEm8CecRcSn5t9rEDEaVaqDyG7cH1xEomaP",
  "key22": "2ViEdA5PUiUBHEqYKxByKL2HNhNXDPNcrvSSZKLomMsHqizdz3wGtFzhv62McVD9mbV5CAuoyU17Bv85xpv9MbbN",
  "key23": "4VWhdz9TkbCHZTkJtV6NyZVMRNKTxs7Cx571CeFUj1VDWmTuhXUvFPXr6Fm3P2PePymBPfcX6hprT8h7MvaVg3Xt",
  "key24": "2TbdmMUkMYziLMTqjZ5Nza3sSHxnNFdBcvSqL1FWS44v5nZ57ExGsJSH4JMeP28ysq3vCUCwsKwt49r9s51zEpGh",
  "key25": "65GvFdbfiHJRih5XpWBJ4tD9F43J6yWKZo9cWXb2rNsw5XGgdTCWKpoftxbDJoPqksJRMEc1hHhqxhQBRk6eirD8",
  "key26": "5838U3xE6QfZ1M7w1FALnfWrYwiaRgYVQ3xmmYDaW5Y2kPy54Q5JteS3DmXpsE4iUJ4XzxisWtJtdvkhLiQCpfvU",
  "key27": "2hZpLFQwehiG6gmCB72cGVQvj885UUqpzgPn5JTnKFmseTgDzHZST6SS5T4wPijYWCLSFkjrsc4jMfZybHDRLkgP",
  "key28": "4JyD8KtwA2Xs78zx7oRnaZ4zDWHx2ZzNrzqwQ2DFJHjqY69z4Uu4GaobDbTWAmM9yXuyPfXYBNqX43XqkmgU4Gn3",
  "key29": "2tSyvYafH47aG1V2BqLQxse1sTgRkkeAkRKFsyarvm2grkhBv7MNJrMwZd7gUNEVADfcGgSCy1Nm2sam6MCwqLTQ",
  "key30": "41Z5CjbAxjdkiFC5Qzx8vjsGrQRUK2WM7qsi7i5Nw7YES6qFyok6z4xy5dfKjQ2zE4rLgCspSGepL67WtVjqzSrk",
  "key31": "21eZmCS4TMRHzCRhx6URRBZfsN4vHhaG1RoNkhHB9MdHqFwrUMYu8BNR2UNufAXEbc7GeQowhEo9pMso1mBJEXC8",
  "key32": "4KAdPjAYBLGEZC96KtXrtMZafUhH7Bv8fUFERE5986fpysNuDqKXUmV59KdLk5fZJF9qhpBqn9SSa9v5SqZVGyHE",
  "key33": "3eH9n8Myfufwg1PjjXMzTDCjkcWadr25hevAWCmLQN7Kpvc5AWjzZL9r1mifc9eZvqgAzf1Sz5WVZYgSonZrrVFg",
  "key34": "3KvGiWArSe8oqzVNoSPrDKxXUoiMdWiPqVjH3RXCh5TPUq77fuwQbirQFPywEaPjugPM2ARfmq2CTpimnxwpVc5F"
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
