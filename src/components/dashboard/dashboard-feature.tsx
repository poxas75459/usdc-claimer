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
    "8nbJMA1WwT8E9y8fMjTJ3V7ezYCZKdhKTf3ivJg1FomzeS1stT7B1spbRsEmimgCYNqTG6KTzejwj7HwSBzFxXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28KejqQAVAsd3TMrencC14HSbdTFVhCHKMvgMAP8y1kcjFdZpy2LTT7JAkX417obEr8JQJEHiT6VqGrrh2aqTeWv",
  "key1": "321wpj7y9v4uk3vbCrwV2UKx49qmCPD5QMr2K9xwvNQMfapJy6nGXYT7A3fM1DiAfEwqopZm4R6xW8exUdSKVfyN",
  "key2": "64Z3ePBQSpvkTFBwusoiujKobEMQSS3ikH3jk8uirZMxPhDryurfxGYRynNahoeziHgxVLBEbcNuNAJKXFPaSBx9",
  "key3": "knbsuPCSmyoX1yoyEhPZ4pYdWuh1mvQe8x79FJ1n299Ki9iBs2iqSrKXKoL26pY4mMrmTrjTKSYe1xLqGEFQr9F",
  "key4": "4QCHJiPCK1MPD7LQ5HkadPSZWg687VKNDrq46suUniwQt2sKaSsA31SmCxfTtZpZ72RVFq1LKJBi7S5hpQHg73eb",
  "key5": "5unYDaLYXqtFBZdcvUR9WUYuteGn4K3Z9nWmNPqnAUWc5aChGhB5ddDZZdQaKVU8vU9Zb9VSxnMNym1VSyv65TAM",
  "key6": "tCHpFJgKV8B1AW87rFkV6vkf2yU71eVpDPu6cMi5eJDGuRiUV6Psw36zvL9TBiKNCHhyNUE92eNW6Wxx34a71Hy",
  "key7": "2UURapyasP8edLk9KsRwFMoQEEWNVzQnE7EPa7moe1KxuDDKwY6AAkdEVg2vqiiEZgshPCkwjdirtdDys6cz6gT8",
  "key8": "JKJ2e9v3MXYf8CBhEyE8cZVBQMhUY3iuKhfZVH2AF2buZcH9rXoqYqAkXdXmdwAAbJrTyPrHePRLEy7UtWrKWNf",
  "key9": "2ketk4NVWAonDcxsyjF5XnjVtQd9D8LkmG8vrdq9FFrRFDozQ3LteEGVGFywLVcK1df9QJoEpmTECAijmXtxWSVs",
  "key10": "62fCeoPDdRCMCRgcAJ7csUazFWtnkBBDyBS3tsqJJTL83gApCu4oxLjcvZNzEZsSetFHFtdnN51c4YFbXZTfVjmx",
  "key11": "Rkhav1drAbZtqmLh7KtSUqZ2RFgx5pxw32WXcMKD3DernEwvxt6U8aNrFDm3x3Na2PdK2M1oPEd5ELy3is3ASjX",
  "key12": "3dg8yLveSQgBzsTJiY3AnMMSCGvsTgDxqwV6e1xkphKYrzGQmVdpLXG6NXZagRXajS6UaqoLr3R8jmFdiKkYoJLT",
  "key13": "5MnxjfrRzRmqA1biWf9ET1afQAbqguy7f3itttLH4jipcnRSMGTHF5vgFhqvqTgHuzqtGmU2aqAPHkaHpXJ2kh22",
  "key14": "5gFyFyemmYAPJomee8zuNz31RJTmp23kS55QmZTzX5dp1Jqf7EPqZ1yE4fmqq4dFrRMvfY1FwjfSrijN9wx6n89Z",
  "key15": "562z8erMqXSs8Y2QdQTNSj8qv4QMn1XKWB6uUXcD3q6YiiQJxHNt9zYg5whcyPeSiQzFtzTX9FKqYtDz9yVRyZdT",
  "key16": "4hhmsbTcqc5eSzTygkfWHnGBMSupK4ARxs5dfDUM2f3YNLa1BkgT594uiBHpLSudGbCgv2Xp2U4Xt7zHiR22PZz3",
  "key17": "4nExCKgon5SkVYLNWoKzkAFwGpMre5BEi3KCwh3HScjomzgMgt1udxEe3rEjcDb3AjwFoPdypqRCEefyVa72KgbN",
  "key18": "3RVuqTPnsuwbKxbad8CDSVzSqkSisEEqoVkSjKKkjCutEekcEEryhpXL91L9VUeMX1Mjc8VqmJcbCzW33aJqEzPo",
  "key19": "3PsYgig3DSsSyPjeQhg82ZxbwYkTMA1FFf7iwFgSGXxa2VfRvVKX4zkmMBQESmwCwpB2q7NAGh43yhsu2Nj1kCrV",
  "key20": "5WBkgDL6qohUe7NhumPabMgWZg2eqw6aqEVNpQ1QtwhomEhqf7PtkUCzE6NghmPruzUuXZcr7cH7sn6TNVMqRaHa",
  "key21": "XU3h11H2sScu5fr8Q5xAaJ2yDFnFMs2ZR2Qdf6qyH62pAcjHdshNLBAKRhyhJhVCVTmV8PERxci5MMYyiWfyEcN",
  "key22": "2hT7V9C8n1ZxE9nKq3GWbeAdc7VJqVBGEknDZAxbLmkHwwafL4NfMQA2AU9umb3vQQG95k9ahJJam8TS1KKhWhUK",
  "key23": "4VJqjgzy66Xajk6DzcR4qwXW6k2EzqqDYq6j7QwzDMPVauGeEdQrXZAjmZCvR4byAD2fVhkRnDozQ6jBMq7tPFcB",
  "key24": "1aZBvnwL1BzN6XP8g5QxudaFxkkr1H5wQhvroVAtSPEuNw6m3LShZULPBUHLjqWLvHMqhfSBniYU5YeXgNee2ap",
  "key25": "3Fb2Ra4SBvhgjr4uJ8uCecP1kJX9UkXdF3sBpnvjMqYV8jv4KThzdjn7CKMuJxiavXmBSuoxBsVB7sUd7NtCt42N",
  "key26": "8xN6c4MWxDAzWSQsbzoHscwFu3tvkmL5WUHjeLF4g9zwJTbBnay7SPXBa4gjNUFQrDSvpkT6UiameufWQ4perjH"
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
