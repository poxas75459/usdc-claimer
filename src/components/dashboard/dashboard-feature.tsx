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
    "2pZDfacrSDiicUvwm5BRPAxWmJ8mqupWTGugoidTZcSzwVojWvcFSQKR4n5zB9riCU7NBnaPpN48L3TJtvGUJk7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfRJzABJm8D8twscs8n4ATYPYdghYQooh6gJaQT3uS8Uw8U4n3VfeMjdUB8J43bS4nyJJQgGSPf6RzH6cssLtr1",
  "key1": "32r17iX9jE7LTC9W6vHrZcGQFkz9FBVTMSAtXeXjPrTdSVZRRWoSwmuYLUzpLeXcv8F3drBCz7JAyjD4yGpiUyD8",
  "key2": "3FFEULK1oF9MdnqhVMe9oQkUxn5fkKm1YmfeUD82Ad2V28dgb714QPhGCPLUaJVFzcCNPztJDaFkMQixQUynBNMN",
  "key3": "2QnN1D1aBSsPwTivrXVCeh7JqhTXuKdy7b21RKPfxtDoofoc1ZBrAmcmKSVDM6Zh64feN8WoXE6Mt9Ve88xdtHTb",
  "key4": "54aYRPHmcbN8nSvR7EwFhVa8tAKe4BkAwLq8mT8NVQeVcmPPgqLGrVD4p1eww6mLUfahssXoSz672dCUhCjbexUX",
  "key5": "4iJ1Enw5ieLoYJWoei2BUsbh52aRXZeXuoKnvzJoCfddNSLsTbzC9nShMkB6E9XfDeSQMATYx2uTxBvhJSmRHPLT",
  "key6": "ThZy1yPwDSpEEG9XU8HfUWLJNCRXqQgENtaoHw8m3MbtXVMHqHKy6BybhPNxSVSDFgJGGmhwiv9P1imkWcZ7xMD",
  "key7": "WXALXqi8ZjcMtwQhMds4mLHq4DCoZrFTUqeBRAcyyTMnrm4M1r5eZETbqk2tD44X6TC1TH7FWt7nGFB3mmC43M1",
  "key8": "2PoaD1hi83kjZhtnhNF8ixiznpztMSj4FdyV3aGAPzd2r2wEwUbyaAA9skGT3G52UTPxFnojnGEzhrHfcKca6jKS",
  "key9": "3XBJQ7D5Ltx1d6nWwVwTFhLK3MLaXbjK7pxysFFkrUjS7mthVagZAX2Udx7uHM8xkXTesz2YeQvLdm9oeXZ9q3Dz",
  "key10": "2FGg7XL6SmpJAjuUn9SrnmD44EwJojQTy4r8HDaUbfGNem5YyUvmiiVFNXoc5idk6Bh7NDNonjn4C3qtJNoxdmwC",
  "key11": "3VqZdHsd618PYsGevDNVvpek2FoURG4RwW2JtnX3uhGvEk6y1r6gdTzv1jEdADz6zNvHNtVZPvTiduUEwAVoMAMi",
  "key12": "59QGFoMsZeDQwPbJXEJKwrqwAeuo9TUGZXbWKtN3FiZLFAaeTajaB6ZE9VpPQLSn4TUGYTitaJpsKmXEcwhwo8ng",
  "key13": "3NHbyPchMnnUvuXAHapdNUDiuDiTFMx7RNeDKv1t2bi1udj2v8MR2aKUC3ZjrRjgMEUhB3fk5pAynVVAaxpgiQLu",
  "key14": "5rkfUJF6KQFsciQgr1tkbAV5kG3FWhEahbPNQf8oQJZMQBonZspr1rAChZABw4HR3Bt1XobJE47R1Hn5TpzHsowP",
  "key15": "4enEAnoduEbikLtiAcDRWaNb2rDABzeGx8WRqSwtQc4Y8X6CSurzPcdH1Woaf3A5GMT9TCnXaKLqENVqVTKkQt9G",
  "key16": "5UETvskZGvCHnvQXocbCNSWEtZ1RWhW63GnoS2gyEkAZ4Quqc4fiwNMccqKUu7XxSkwuEctvPtXTVK4MGf2rdNeR",
  "key17": "4qxT2kzBvZKq7cVEaFFmGVgYMdoQWrgq3kYF6ozqHZLj6pSWeN937vCKqT2hTRkSj1ntgbBbtkmCPD3CZ4D4GAKN",
  "key18": "3R9Y8JNcjfjKBLBAzBJqHUkU5Ez2JCdPhr48cFcBnk6Jaf7oZCAS4p2ihvB3DeJpa4byaTjVBuHZynhByKRiExdN",
  "key19": "2U7TZRPHz28P8UTiceofSLw2aErjH9TwnCAvCFh5nbCpa4taULhXsDvWUSSngdAgnfSjbUSkBqyeGzLfRp6kV1GJ",
  "key20": "5G8nnL5ax1FYVsNHB3fWoUhMjDuchhh5dPj7FY2nLyd5RaLfHWFQeVczriD23YGzqGYjk6CFms5ZknXQWMjykqfg",
  "key21": "LR2a2X2KFYBNoivhG4asFDHHE3QFPuZyQQdnduZY3yDbfwyYoZNY1GJnoYbKajFw6p47Kamo2rJqxmzTYnQAD8b",
  "key22": "3afRRTPc14S8LKcE8ryXw2HzrwQbqtmbykjc6PBqT4oeY3eqJzjCXuv21mjsXoWYADBGZBjY2o655pw3pVUbCo36",
  "key23": "4opK1yUCsfSoz99q1vGmRZCRWkW7oy8DsjYZoN4bFBgvVp42tDGAzQvBdoJ4VcZmThVqy9Va3ybPYHefbQYLxemr",
  "key24": "4MwtPZvuLToCHDPHoDGtB9TdFPXMS5KNF2uWMmk9EsYeYSMedHsS6K7jVxAd13cxAZqQKkpLBexpLxcciFMeFXx7",
  "key25": "BVMzMomFRd9E61UCX5mVC1T8W4m83yyQtawRDi2yDB53nJzddQxjaULF3DNNU3Qcy2hoBLwG2RiB4DPsNCjdoSN",
  "key26": "4ryARSCDdwxrhCR5NocVd17rwNUdLw36EsnDhSrhX3e6myYVm6Sb7HdjRKqEsXgmKU6Wzb1K2YsNES6MM58MY7L6",
  "key27": "236j1CgVWJbRPY5EevURGUoPyfVZ7aS2vgZtsF6ZGZ1PJYueKkFuLhB3ew8UyDHd45LLKcc9QUoYZEAbZ7DWv47R",
  "key28": "2EWd1wBN9F29y2hkeR3nf3Tkk48Mk1BhgcShgRhDPy3dS9gep8AuU5NPCjNkyvzyX9bX1XwGyPMnSxoDycuVY4dx",
  "key29": "3satGDMWetmmYA1B4qJs3JfUkMq4pCsbzqCRazBW1wautLMVJheuBibuCVDQZ9NeMzaQp8j7hbhwKjWWWn6prTCP",
  "key30": "2PD2tsRunZ9QjxQSZYURMTFKmo8x8EWLdwecrXA1jSaRjxrh3bhXQFgSrcn4u4pqRokxRC5ogQRTDCrJ9TkujtZe",
  "key31": "2XT8T3U7bLBrjrnRV1knspqyxZiU1E8iyFvgqn1Yf42AwHD3eSivFDNbwdryi77NGP8H8KyxgVJXTUcMsbEcnKdJ",
  "key32": "2MpRUwTqksbphGPHWYUFaAhhMLhvXg5n2NmLuhyuiX1vC7wTMmyMK5SFzYrVGuzH4VeQ1nnS8qwbsAP1P8B9k7yZ",
  "key33": "5Hq4y1PBnwxe5WHG5UJ6pQMNEQuQYqw1fBKRvg7uJvN1WhQoiisuubKCKRWp6i95NpuJsgahonodW5cj31DJut5e",
  "key34": "4Lxa8WPGRhSAYseRAshDzfaexvnAudCMfYpFrHkUHtsKJur3q11eREwK8dk3P3BBgsFa46w2VvWUT93FkeZaTtTA",
  "key35": "5rScxd44ckg3BpkfVqwkY4W4CLG4AizkBPmyKCbpKtzbaHNtRMGN1b8mMK9HERyxs1MNaxZKfBoxVqeCUjm1H6CZ"
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
