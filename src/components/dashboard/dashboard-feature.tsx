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
    "65XEHosdSHNByNFF4VvRaBzcb4VzDAXeZ75x6XYmkRzHcdL6ExQeySx36a5TWdsmGUL1aEgGCjR15UNQWgGRD1tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n73S6ZNPKBeJWVoNyMZGTkhqpX7sJ79e3ujQcH5wFfX8sVbJXpjWmi9jpJ8y1DQWS1VtMcE6CAmyRkBmVs2eF3S",
  "key1": "3DczUxW8vjv9jXwqifmLwSFPciFjuCTvaWV1ZXfAo8tYtNUGKHj9tSgCrKQWBkFaDXS6RKJubpg3YcEof9LJnxEe",
  "key2": "5744AWsciohtov4JusEz7arGYsEPgmzBzfYgLwkaNEtcUPgRBx7wJgkwbTz6qPvr9Bvof9ecHm674wJh84e7L9pc",
  "key3": "2gZ1XbRjsswy4qxTJ6s79jCY4gePQn94ko8hjpCWGcofHrvag5zmvt6NvUrqyChpoqqxMtsHLZmSXEytF9oHRK6w",
  "key4": "54B5LddLx5XnQWnBvRfvYKuUWBaWuDsXiU6gCYNnNJdgBjAYdS6EtPevAHb2tgHRGABTxCLeUiSNPnxDY2dU6WR4",
  "key5": "QkFxQ7BijMDznMTVwGftstccGLG6SPnXBQARbGhXa5Avpr9koF1AsgFkevoUq9SAUAK7wfzKadruerhos5i5ZKT",
  "key6": "3bkwdHMjfzGJ4C9PsUVSros3mnVZFGtuggWM6Gx6ANL1iYSf8Avps7mvF7rSn1UYdkTn6urkxZgg7AyZzDPgjLp4",
  "key7": "4WEfxMF2XLJ9TKEYqYnMxmEq6CxpjBPhjEk2ZciQGFHRphv4ZkjS8cHbMLijmgLfZakjCqnMkTMmqrALPJQRci7U",
  "key8": "EvNkF9bqRS6bsL47YjDZaa6s3Cpmh2eD4pQe5MaDUQzYMCQMdpQzypJNcEvB2wWyWoYAQPwM7ZCngcDSRnQiCRQ",
  "key9": "4ZZdBr4CZYgAvR8RR9m2HSH77hQKjoxgwN2Wcz1z7vYXTCzZGAhXJajcb2Rovakk3Xr3ChaPBhBxR6xdU1oWQNo1",
  "key10": "4K6KnyZYQ2dtvPXuGhVTNVPUhwx8fUZmXeiiQecR9SWpoP4ThTGF5PM7mr4YQhZG8eN7eULAwcF8fvUmcvMn8szx",
  "key11": "5H8ayhHYYSFXwSZJCMVUGPvgzFEC3Gdi3z6peFPpMEi8PFmAVCost6nZxZQLR8gcZJZzc95oetwpbBPCfsS9PqzB",
  "key12": "3yn4yJN1qY7JFy7vkdqj8RcFryEjq8vd83C1mMuXpFhVeQtNbvwZ9rj3iRDquQQntg1esai2mFUDyf4M8wcoefZ4",
  "key13": "EFUQiVoBjMMCUsCCF43Qwrp2XCncJ1iSx1uqJYUWW9yE6Q9fAJ86TfUMEa3jeLVwqC1eNyVe86TxmtS9aEbofFo",
  "key14": "3dT9ktJz5gShauXtL3dRgVYvkPC9ych4MxsdWxL2WPfVVEPaNRVqgaUMjVGLpvAENQy4H2hst3RinakeY3qJfGTw",
  "key15": "2pAAd812B6fVet8ARtBq6CZnecoszNMCactzf6txTQqJwLuiRFPcjJ84KnKvYafnxKhQPk2h4mdpzfzoSnro3wYm",
  "key16": "3w6TgcHwvMAxManriPdmeTTVWwnzaCtbZNyoUCsS9Y1yQKfiFmQyAmaqYpcomYJXRxqzwoqVN57ThdAGabsJ57Ft",
  "key17": "5Jp2GRsAqGc55BAsueW2fLmwGSwiqfvcM77qp84Q3gheeLWQ7FJkZdsahrpk6mQbr9rHJ3rEVy949VFtFzPRmteu",
  "key18": "6sqjWvdZvLJQyNtob99NSRNrhFVtLVnYmV57i5Wf3Znqrgin2RsE2pVXDi4W2tGMA5x31wWC7wjbT1tUDdVvRpH",
  "key19": "3MEN8fcxoX7oBATGJRbPKdb4rxZWBbP3aBkPhwUFEDRNJrcmTm83shQs3aXMgMsyVcpbcXyxDFbkF44vWVfb3MxB",
  "key20": "2EtN5KiR1atTU3mpbbeeR6H36KuwJwtUeTf9AwkXRaCPWNswyzpzfUgQGY6qriy2KfxVkMAVsGuf9sk7mqksZNkg",
  "key21": "K9TEZUyPpuaGApeQdqsBfSfydzYjJrNkbtRTdBLZ1BL1yiVupRoARQ9Je6TY6c1TZK5z5kRMicj5AjaE73y48s9",
  "key22": "2Ntc7hhaeNqpiW1P3CDP6d7d7Z5MnrBkj48CiX1TY5kHx3qLCurStHp9uRUhTKmaJqea4PEMbZvDv98by1oS2BP",
  "key23": "625U4SM64QANee5tmBk9L8S1xEAVTXEAjNfh9npGMLZEjSsz1j3HBRXKcquByGD19RNSvbupC3bN8m5ZhG4dmcwe",
  "key24": "2yxVwudFnR5L8K9mU7ARgAyCUPNUALKsqjTqFJquTkwXtMt6HbEUU6ZcpWEz6gJWh2VBRz4FeMScSvUCFKLhtYVU",
  "key25": "214ShKPhYiWNwXVpwY2LV3FzHNzE361esRM9yiqF468n9RKa8J3DJT7F8YcAThiSvuNQjG5axAHgGqpH9R1uwczZ",
  "key26": "4ccWx484zdPUaa2AF9C26FxQgzQjjEesRtqYjSmtjmQqiNEQwnJohXX6oRjhrnioC5Ev3WHuvevNe7dN9va4NKW6",
  "key27": "XhGJpXYEGQKe9iHANL8m9SqpSQhU5sWBAA6tUZbk46nDQvh2YtLtGSthKrynkLzYSb6HFiAaJ884UJRiB3GZXQa",
  "key28": "y6ifEHNHSCH5L3NQewQj3R5XK9EvEUDsELaketmZZidNM4QXf8SmQC7JEwkCRrgCBqd2xSTZcfX7U5BedYBWWh7"
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
