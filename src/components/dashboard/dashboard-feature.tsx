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
    "5Vr9RA9tDyMDd7ZQR7FuCLr1CKkHZLVKbVbVUKke4VbUyNnJtn1HSpXZ3vwhVPn4F9AmTxYt5ZPTmmSDwad7gEYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bA3asrUNHLVDbBxiqNKM7DBp4kLRWxbjTcN3bvMzbC5srrfNLa5paqdTcFpmMwWTWPjtbiAYJiaJa4iV8Epajt6",
  "key1": "42qRVuqWH9vdEjyGvdJMaaJmkr8M197PM1byXKK62pRvnHw23YLbTioJuj8SN9kyV2pdAHFi1kLhzxoLNmQwu6UZ",
  "key2": "5as57zi7Dp3gi3GH9KrbtE8Mq3CCDYMEQzPfBfcdvWt9wcG1EBn337DesNwH3wbzfaQejrmWqZrjDspx4WzRbz5Z",
  "key3": "2EQUhSpPsR3MvqvyStUZ9AFoN5Adktk5PhDPe5VwgHhrFUhCCfsuopSfDDNVmUMacRcLFkze6oePSU5j54UHsxkc",
  "key4": "4eksU25GAA346sD19CsDvxgnmey1sSAtvASqxFvEJPkU5vmzyRvF5GyLfwY5XT2Hx1VBKnrUAjBmGrKDZDQLnYD8",
  "key5": "3nWrvY355nU2iqUHvoHXXPjzgtDoatYNQ6JfnWdtHNSa8dKCoxCQpbxevocTHJVnrTwtTqe7YsfQQFmpzin17rKD",
  "key6": "2zwNEE47ZEXr6AsXTbyCJzLxN9XwBs7ZUrsKV1y4noerwz2F642Fsb9zfJSFq16vpTPAAQUEqvmsZbBTTfmQ4pJ5",
  "key7": "4nDffHyeQdGWFhnSokqSSdtTpBdt4y5tjK23Vm1aMazvHCmsXnBq1aQLT13pSHG9sx7Xwc7LppryWsPWki3UYWxo",
  "key8": "56Gg7eTPx5unVQa1tdtrwfjMQwSd1e27bBDvSAk653THEQpHGUVfiGqKPYtdYNSCUXXrw9k7W9pyc5YCFNeXxmoW",
  "key9": "4QHRZCetLUNWZWnfnWHyp3TquqfiBbA2Q6cqUT6BN2fXRaCz3yvwFnwVkX3ETK1hxtBkNq8xKnvsQyvqnVP5bZqS",
  "key10": "2gCBgFxmKrkJaKe2ACFTgr5fjDZTbkbZ8239qh5bvvEY9o9C8cPsxcrfiuGwQKnAKdGdgPGPB2oKz7btGMNQgmK1",
  "key11": "3GZm8brZFdmHWUVfdUUCn5QHHcoisE9bVfpc16ZiskkY3YsyAG7VDKMRwqxskUvw5fvJYcE5qE9TYTrzGYWpKuBt",
  "key12": "43UYJiqHbeGCYEqbKCXWfmN16S8Kqidjtvjwc3LmFRyKoHWco2fhmdypitHQ571S5sibfCiWCFNTW4CXfjdM5aLT",
  "key13": "5FcBUyBjiKxmPdKKHbssnE88A2odcRne6CPkLCmPuTd5d91K7AZ2i76ggaa4wziTfSgoxvT3un77BJpGRRShzg6g",
  "key14": "4Tv2nahLDya7Fx5XdaNzwTye2tAxDXzXrckjS5FZXwyBK7KHeqe98JyzHQgWtXUfbqVyisjryq9EZT64jeSezzFw",
  "key15": "Z2vfDVCiGrmPsPWwqt53hmVimHPdjDj9FBFDDGu4aMvVA5EEJ7XHaQ58gpuKp56wPdSdGohs4YyzcS8tmsdi5QU",
  "key16": "2StsHZisb3broqamReSsBR4xmh6EQN9W6qYdhZwTpsBoSQm6VC7GCh8kEeZD4fCMi7fcpSiYiuLNZ4tZyKmUjUU4",
  "key17": "2wdBDhR2iNeQLaqVP1vo68ohK9zmv3XAfQrWB8RabU6QTDEHa2ZyRB356DGJy1WGwN3puptNzk6fmqV9e6eWLCks",
  "key18": "Wp116By5D7mhsBoA1jzBZdGWwMSHqwGRA4rg6BqixHSDy57sFchy8AMfwdNQTwrepc5KzD1jG2YKPzs7sCVkfsC",
  "key19": "4GTeh9rQe9GLb7Sm4xQaGTpitL6TgZjcAk75PfAXUMigXVRb5KtxmKdT8Tnhh2nDXTu9Yddz3VTPaVBLjWt7fPND",
  "key20": "4fRc5KwEaw5SPUauk1X4U3dSagW7AL2iz9YGqYGR7g8iP7ecMVVLdo2G9v85HfUTANLWtegop1WSgv7TPa61W5BD",
  "key21": "63yRsqYcw7hhYWvY856nVH1ZsTx7acBJeyTb5LpswB5it4kHi3zGJwYv1nRREG3ucRttdUwDj4fWEg7TVXKQuQ3j",
  "key22": "53V9NjDfLamGoN6CS58Co8cTGeSpar7G4A4WTF2aNzNkDBJRTzmQZ5qiixWfxWkd9vJhhHVSXWejAFsKCAoiuaC9",
  "key23": "BoT3yMth1Uaa4EFhSs5jgqWtz1ADt3zq3pHsvZ9KGHSp7dcm6RVXL9eh4SE8C2PXRymXbtFSyoRv7oZXSWcQzYd",
  "key24": "2mnfD7M8aekxnQGj86biGhPHCtggq9dKpZhZZGVoMdvUDvnoYFoNc5AtTQ7dyJqV2ehmnTgYMjpAhdb28ZWAcpJh",
  "key25": "44ZNvTEWghv7HDoYhdEnPUucPb3XuuYyBUK18By347v7idxvymeYyJt1iYZuM4yZjGSoHTWe5Ah55GNvQoGPn2br",
  "key26": "5SH8j4jqRBijeoCbybsixwfbq6dk9NywgaUyEZN9j9wDfirEs6iKM2T9yMkswojXHtabEAjMFJEEbySA64wfbByN",
  "key27": "5nmiGXCdsRFZsumZt7ZzxmMPq2x7PqetN3YaWMmP9mgdHZvFt5Sw96MzTJJRqes19KtAGdTJJD1BmTR5BjbAsySZ",
  "key28": "4psQxF7cW8Yj8jEmeS8epxZ92UmnwH74BhHfMvsFd45ECkUfgWUvARWuFKR5P15tpLGBtv97upVpSYUSWUKddFHf",
  "key29": "4hxNBWYQ9NqgDJgtpU16oXi6UwUdMhTmUBkjbYFHsykVzVqAwvCd3JuEaxj8VCcK4QTxwDWAfsM2b6LQchoNUPSJ",
  "key30": "rz2C9diUnQbQywTerVMfax6FG7xSmxK224KQmM1Lu7FXQ5npudXxCvVbdkxuHUrWXygJWDh7rH99LcXv2Xf5joG",
  "key31": "5asVyn9QxKYcs2GsfBXgALVojdHn1fzZ5YHAPin5i1yZCtFwH9zat3Xq9zZHGyznJ4pzcHJjgTxauuwtmoJ8LG7b",
  "key32": "2mJVNiA1SpGG3XtxJTWBSJffpDu7Cys326Uev7W2uzri2eH5M8YRxLHbggsBFC2K8FYxBjQdv6cB41enYsfYCmnd",
  "key33": "5LLzwjMKJt2pkQsFyPseMayPVBev2fRP9S5MEmfXMAmYabSVvGQSd8HjXhYUkCw1FLHx5Mm7dCwprMvj7JLrSkQP",
  "key34": "2qxfTgLgmLP3FghSkHZqnx1oeXmJsi8Nb4i1SYQ2dtFLCfAzi29eLkPpb5oGBDJnhgcmdCEoGUv22P3JqWTZUQoh",
  "key35": "3wwehhf6LKFTi6XcZ7mVSJB3HkgiqaMr3byfRWoCpwRodTJPnXaFjbabMntTsTLpbqTjMhCaLozMsaV444gfP3kH",
  "key36": "2dBYzrMoeqc2at8Q1nwtBPhZozYNSfeLPdmE5rZ7efypfmi5a3auFS3uhox2dJAr93M2eKq8evHiebM38nSPJGZ6",
  "key37": "4Whej4ViEU95NsaDoxHjhxvP4z1JYHajveEvWS1mSbRdtWRXZqtK8GMxLqDi3GsDZ2A3AmkWVbaBtcSaSGhXEtYS",
  "key38": "4NJMoSDoCRhBZBvcgp24q5vSPZTuoHjoiJZfpP3dWiVCsUrRjGd4nZD7BoSDm4HuGvnV4xUZkMu1ZvSs68E1PsuL"
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
