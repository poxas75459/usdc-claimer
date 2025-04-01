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
    "4cCauygU6Cjgmu4ArmDH88MmRvpyHkoZuBSjYkGWdS8QEy6YRVk5csVkuxgGXN8xq2uGXbBpPeMJGap6DDEh7b8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xRAkvw6dnUuExeaezdPwTKvR2ey1CNb3hSgqXfrvrF3NyzNe3z2gUiAzT5ELXn1HD7qjqvM47bzA66jDgwJ2h51",
  "key1": "2PMZLmnhvCdz89cCRXBc5EbnpZyELwDthLeMWhaDqQAP1M77rRsshLGj77vZnwpLaxyddKwJj2aGMnByfeftpj91",
  "key2": "3XkHJiWbjmXccfuavrKZZBGMT5ejUtmhRNtAxxGjeeSRKUs4H3fHFJqf5YjmmBsWwi7NNdoE8bs7ZmCqrzSGAYTp",
  "key3": "4Kxcv6wLvXNeWKCoZc1RoQzfz8VFQryvvUuZgv5N3pT8ngNXXCqV1rnM33YNiBt51i52JubvhFmfWDLPApoaXW6P",
  "key4": "63SZ8sa16p11RBtK6aNsdTixpQa9oSqspHat7WXW1sduXRPqbkEXPAfyyFaQVaySr42mmYnjBVQfz5PQdG3PVZnL",
  "key5": "2Z6wNq2HBZMCJgvo1iu26PZmdzMQ1rDRvMciNxvXce4QJiesZQ1z7SzkKEMyTxR5ZJPD5MYaGPMpaLHkZmyWe4qh",
  "key6": "2hYkBjqqKhUc9U2dc277NWeUafv5QNk9Fjwyq7bkM8vFxELdHSdzK3ZSqP5hGonqp83BU7ppJoPKVBz1kpj7TYfU",
  "key7": "fdJANWm1uUSr7ZsV7s3HwktA9Bcqeei6wFiJFe3S9mW8d7FpBSNvsGs9ZCnRcQRoTqngcv5nVdaHEdDtREPCU8p",
  "key8": "2oLzYPX4T8mpGiSFSRLHSGCrS58q7petEdViHVk9YAuAKsBoFtFTBs2xJkuqd8dSbDcqMK426hWCtTzXQyJDX7CC",
  "key9": "qMEKYqacN3efZEbaYenQrHuZtCUDTbbxLLRVK8xG3r2h8SW9jcxphm1mWAMMXB4RunJLQoBQSeiKP1WEwiTJATQ",
  "key10": "5oUH9u4Zp7WNAntYmCvXupMYx51xT2AjQoj73CtNfAbFyFGWvqzfo5KHz17YXDCPYkdFycH92WwWVzKFN5ypXogf",
  "key11": "4C7FmoC3PsF8nSPCPukcmmsRffvVbhfi2dQ3oogBXFsuL3Xigbzj3BAouYcv5vZ7fWHzLBQ3S8jYngkqQCCfxhh9",
  "key12": "2AywxevnDM3Jhz8u6xn9pMB7oVCJRCJQ9RruuLyHnnLcrrvLN7VNmU4uQdvHNBhLKFrSA3HMoVdzBH3eZVATaHHh",
  "key13": "5Kt98hgFfbxNXP5NXGmTniD7oXvnKDnEKcQ6oErzWaD87MAyre4iNZkiivcHSuQcEyqiXpUca9D96ekVXnm3y5pp",
  "key14": "zPJYJXgqZDE2txZpMkwvUhYbk3uSxzRHaQy4UhJMJdg9F9Bm9uSXJSEHn2D2kGzstuPAY8DWEUxEmFZ8rQFEEGn",
  "key15": "2tHADAtic1TJWfR4fXPxK7GmUpULEyiZUxwmyWjeStyDkz9NxJT7YeAFxPxgX7UW4Q5gMoh7dR6mANhJ37iqXMek",
  "key16": "2ty7bXDLM2od1AXBLYTwv6i848vvPaJ8Tos8BamNQct7cbLzV3aDANDHyQAvXTg94Gb8BPGdgpVPBw18PykWFQmG",
  "key17": "3wqJZces8fYfZDn5M6zPPfuHak5Z1t1NvEXgMeu7RfrHG7HycULZFR6rThXoeiPYWH7enieX8Zp26DyHvM1SQyAC",
  "key18": "5czmejoaz5WZBEibEj2mncUCvSsbn1BkrjkCmAU6TgchPDvStfPpc36RFp7yLXvb1Wv7WiVBguG4tYMrx1Ys85X2",
  "key19": "5hfc3ZD85Cz58iiAxeN8d5ZDSyTyQzZo63eCsnmA965bpTdXqjWp6R9EFdqnkZcwmricXrxmjjzhV4AvVeXM7p3H",
  "key20": "4pw8cNsEnftDXkd524YWgQ6dBLr1pdggiWZPgrPXvAVjVJUBs8afJEmvX1B1hdzfZb67dxAhcTeNjCjfBr43zXwJ",
  "key21": "65fdGXghw93mMfzEw1x1pW1P6qSs9ZJAjcfegpWKosxFXzbaAH8DBXBsdkxho5xpgPUM39ytvE7JE2BukcfRyuHd",
  "key22": "4zbftLYtxhKTvoroDP84yZ4BJmEmgXKg4E5wu5vnwAcYKFBN7TcA2xL9YSHAnc7ry6zFyKTRmg3b5u9b8k3dRwc4",
  "key23": "5mW9yg6jS8Fvt7psTTrRRCLbLmZwfEP9MDWK44ePQDX2F5NVZMwJp7EzLrLfF4oVtkDPjWYQvLzGZnFoFSYJCdYe",
  "key24": "4Ly7smoH1kbdmuLkiNvZHbuALwjDWVZeE9Hq4XYzggaXLPJEitDGDwQtvcKXeeyA8dcwiR2yEYfciM7RwBGNLnug",
  "key25": "2FMdUaC9mLTMPcYq31ByNdvfUJeGbdqSqryL8Nka5Y5CNsWgsnecLaN36jUgo7ZNLwew67Li4mvRpYbxBYGUSvjN",
  "key26": "P3ZQVGaz2KD1qNz5k6EWDFBRWp5k9byauFd5obE8RMsNZAW9mqnEqtQhdf9aoBjMxFvGuTX9LeFQHXpiMYautjg",
  "key27": "4poFFbEPgMJPjYjrSpYoVwEu2SB2yBN1nGYmqzpz6PLz1dzghFMj2QxjGxRsctzfi14xmXYEvjdYUG4fUWQyrHmk",
  "key28": "57aWZfK4CauWyu2P913TgrSUBRBfnmVG4htq6bcDT6H7nXbFeAQc142KxY94DWB4nWVgPKpWVmDsFGoS99T9Q6J1",
  "key29": "3NQJJxsZwEKg4ATGAFXnR4TBj53WfQRhQPGxhS2EG8ASXv2KroUzVm8xyuquqhW8YHHJ4eUeevvuvzk6HH69RSxp",
  "key30": "5h12GV9CH7Jq7e3f3nDSNzUjqSShu5kNGNfB8hJGP3fve4qZxVwijVRvJUetNiXAKYZsDjjtdJcGUjcGTnF7SMgc",
  "key31": "4ccP4NAHsayG8mpqTsAMcgzfKa1SF8YgUJmGsmKh8Azpq11cKp4UPQSUjYM6ETVKwmb4BqRJYnD2xvHtH65Ssopm",
  "key32": "3z6tBwvmgVkhdmYGyV5MGwvzhRiUnbpqoYqe6iTDY5LpC7ZmWEEemhnjU6ozHGwwAR8nMNxq14ub62TmuWp2kKn5",
  "key33": "4LM6j9QnNRZSq6dRt6nuZZcadNhfx1fViUQ6K9WcfdxsiM9bfEffVg317rkCNKiVEV9f7is5nWN59Wg7we4KMecU",
  "key34": "529z53x4nDfj8vPVQUQzxcqYfKjk95zPGV1g3mHy6yMQSZuEa63kgUNCo81VffidcbAZG3qY2jWj55fHa1K7XhSk",
  "key35": "4F7WmiG4J6uFqcAvkyekwKYagNmzuqTwW2gAqQfz3ubvytSPTF7VVXFC8qAH3FsKsmCGjDWJ3RxJzs9aQCbu5ksh"
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
