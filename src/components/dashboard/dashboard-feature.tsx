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
    "26mVQC3mPzL8fWEjwHPSs4rc4yJNk5yXbfr25cRXPJbJEsrB4wnfm4z5oKkTjxB33KxTfTTaqXR7oXcnYQ1a2xDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pcouvq82rJkKExyTJnCY88bkBL82xBuBiedioZm2Hi7mWSer7sJJZBEwrGemxEYuGN2n9jc8xBNNotHQ6QW4vLi",
  "key1": "5yFyEvSV13q5gLo1E1AD5EsBqTmPR7Q1nyUu5771vMRtoG1NEdd4mJKVmtFBM7afZE545P2jRDFGZqo7VbsLns8P",
  "key2": "3mE88goo1SmzHAEhXsEGbey4GvUWUXygoWyMwTAn3eudp9hTjru1gw6Uj6HLdeaDSDqr68E4Hkg6gT6oS5RaqyCb",
  "key3": "2MUzWmHw6bqc5FuPZVUCV8zkbPe6TcGZ8vG1dLepryzGNqBkBAKorw1BFco2s7cYkFDA2Sv797hHwu1pztaKwk2V",
  "key4": "2CKDLghSeZ1odq73Sxkf7sL3Cd7Yxn2ev666KDYng9vYNpnsKgSkbcr5KdQ7FLUz212SjgPajMmfzzrHixxhGfqa",
  "key5": "5QJZ1x2739qxMAJpZyAbAPmvn7VzHEF665DZRnnCt2vGT8fVyRvRQk2teNMc6NxXZQnCFHg4GrrSgXZeodfWSUmo",
  "key6": "5HAKFC2CcvjXqMpo4YMDnb6arMbAionEa73Pf7JNo9XuCWGoUVHwh3fhUdsdMtaMTcBVr6aaZTmgEfTLF4MzBEus",
  "key7": "3VsutzLWqqJGfdcB5ecXduwzBoYC3ivot57JjtEX3bzz2fujtJiiDEHm8mBC6Tq434pRwQ4XG34w1xiAjniqR9SK",
  "key8": "2r22cQnkKHxEpJTEzdYEiV9HXtvFNUU5bKZYZoK1ihkuP64eDLZ2uoBYpAXR5h75CmhzJ25t99vhQzokAGUcGUdv",
  "key9": "nzZwmRwHAenNuUj4NEoWvc6cv9xeUb9AyRkNRqpTrR14pV9jLNR9t54CSGm1SWBYmqxmuzoWqMLPcaDEqNKnkaD",
  "key10": "UJGqz3PTBxev3JDQ3Ad8P236FpSngsD7aqY5TERQkUG1z5UdTpdWdCq7K4jFLbK3zWjT4NnS4wSZ2R43R96tbrf",
  "key11": "2mDkfhPcxCUGTBDrZet5KEDAshUj78E42woeGhrUUdwwJvm9F5hW2jw58cfyk1YWxQTVsw9gUY7EEkDwaAs9FmvY",
  "key12": "vm1AxNT6AyS2bBDjSJq6wLpco2dpBqG5r9t6bu1koFpdecQgjrVYJk528FLi8eBYgXziWvvintfd7tgAThMDpKk",
  "key13": "ARTjRf1YYUr51NYaftBK1PnqqxGCy76sEbi1hAyLAu3qHzVYs5TnKSuPLsyvgagiLcML7inKNDBZHMYeg3v9hex",
  "key14": "2C2PymfW59QmAabGbu9JBaQnvKfbCjW993DWGpcKF4zAJAjsW6eAUbVnJUBbgMSv1CZbsyx5GmRJkcmmEUmPxzGb",
  "key15": "g7MRnD5MY4nGwdhJCrRmwH2Bs6UkB6MsoEZagLV2cGqm3WkTCFCmjFNKfkF7Q26YGQqXYrb57Qwwo3a1TGg1o2V",
  "key16": "4nq6HAqLBBwH7kYDcDWTDyUFj11HBFiiq2mJLLGFsNZ7k8g35UiEE61CS2q1Runffd6FupmfVqsmtCMBHFj1ywSi",
  "key17": "3w5H5dbwxqRgxSRYZYknLmYP696rB8rR8hHBrgrUTAFPPsX4A5g4yZdENHCtumbQS3ouet6AvVRvEGzWp3vqweDU",
  "key18": "2c1TFHt9Ctc8cBXCiJMv9jVjQk7CuQLvewH9Cupb222yv3hje4SyexA1V5sQeKbW3fC7hj1R2KGyJgoeV2TA9jjm",
  "key19": "4HxaWibvnV8wFEgZDi2zSnVatNk8e21udUDaKzx9ojWR1m2MYdR3jYGHowXmysA791mRnReBy2vmYRzc3zKWBwRn",
  "key20": "5N7bKZRQaoBRurEYqCH7qjZGLiFHYhmooKiWdcaunW28KBpo2NS74Yy8E6rA7VSHEwdawj512eApXM74U5t1K5AG",
  "key21": "4zJGZ3A75QeFzirsDLHVn3Yqs4hzgsMKqNuGzY6suTWMhKc1DuwDtSdphPAGiUCkkKXqbjkAsSRCw1bsC4ui7GVk",
  "key22": "5nfDXbho6vZUZdsGZvEtC17P85fW7NiTiBDSTHiKG4xt7GbkKyzq1MqHP1MLtYtB4byU5pfcH8t1uG2Y3fodHeVL",
  "key23": "QH79zHUTzY1ymWssQwq6E8qt5XWPtz9WNHTXsLiG8mAP3V1i5XkFtv8SAdagLxpfkCgwouejq9D4ymwcFVtXCMo",
  "key24": "2f3aeTZe1PwTnZzqhzu3bSePF9VevGBo8UbvrpkbFCTzXYtPTdb39zk6c9BtEmYwWoNDbgP8rZimGSkGgqCM3BCG",
  "key25": "1WJWp4hezKCiPEXPMvbi3AGH5igELuVcEgBfYakxc9cn3dMh7UYc7cNLf8PDTLLZzW9d7z8sNiF9uBDszXcrmuT",
  "key26": "4uEx6Z8vYKbnJT6QZubQfP3puyUMXstuV7bEDF3CuEADTuBaArAELWiLv1ao3w3MiRHcuSMo8BXUCFesxFMeqmqF"
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
