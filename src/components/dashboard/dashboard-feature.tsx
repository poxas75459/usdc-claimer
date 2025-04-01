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
    "76bHqt9MN5RLKKf4RNgvMHh2E5hDGM8gfoJdj6saPHphceAgRDCwSvv3YwYcgJmomorRzX2i899qezn6qtipiDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pnQ5QciMvNR2Ara2H1Ss7aGNUgHiXkw1hxREYP3CnHAwqCPRj5U2j4L7NRbpmbdRWafr2zfcw4aVhDuDGrTfxcm",
  "key1": "6U6vY2VogfBrprxogwFoC1qmQHywfiMU6WWZhWeWgYLzkkJBzdusg1oFkceeEMrmkRptx7cRctNi1DSLFjinRAZ",
  "key2": "2gy6LRUym1s5QiQp6LAxXHAB1n8YwpBngBkDRSXm21tmjV3YSwxhDrHw74qct7GuNNZZk91DSLHCpXh3ea2UjCgM",
  "key3": "3DHt8EboHDvBJ7ECYsS14N8P5LpoukuUEE3HhRyNWx2ZSjF7Xd2ha8qmxSTASVdffgBShZ3VqGnki7U8purk1kC1",
  "key4": "ZeAdGvvf5pjGmV5M4zcYnUEtdfWe4gFfaKeFyjzBQ3baG3G4GAwTLq8FiiMmdxDKJtVqHEm6dvMQgg6borppCLs",
  "key5": "M7BfN5L2TatecHxBjYjHo4rVWm2U34oqfy2pu7evrZYCmqVbZTutdDwrwEdZUKfaWizKVaPQufoHcpskS5cGqG3",
  "key6": "21fdUwFCg18PABm4dhUx2pRgfAYyNQuayzA2rD6RmFyMt9S2xBZVPnajdnCnqfewJs1KX3jaQKjWADsZJ9AK1VZC",
  "key7": "2vy1hw3xBeffbzJWPb6WVimrgetPHQtGnkUt8vLeMM5uSX77VcVv5B9z7ZLxXyhQvV7CgWseva5VRNWE14QTWEDx",
  "key8": "2DVS2rBV94GwWvp4sHmWSuDiBrNkF5Ay9x5vF61b2sGvmoTgrmX8e4pNjz52Vxgu7ZVFhCa3zXsnMEadSdxjAm3Y",
  "key9": "3Hr32fc4Jw1BA76qgNbTJsQeS1q3hgcBKPwyS4chyEbWjBeQXn5jj8NoKEzoWFAqHuCEmoH54FaLu1iW1BKE8e6J",
  "key10": "JWQavUDNUptSGuE2BLJE38Bhru4J636GWMcuHSkJrrZ32xNQukotvA5GFqB4JBzUAGH5wfawGVmJqLrsFVxaFAA",
  "key11": "3bUzsFNHsfeZbV29wuK2j8TJgvnmYugAHAQofejtkus4eCBuHNf8bXiPwi19cPJi3Bfpiaszi63ZC7CrtG8czpYJ",
  "key12": "4keK3NfGH7qKubHxPgQnoQevNmwYGhxLqtRQGGJAEPhibWPBy4hALpXJTWWURxV8FqXYXBrjfvRZa8a3qbUJM3tF",
  "key13": "2QszXzEuBiUpN7FN3EB5YhLFZWfuT8QVvpN3E464jegWuAsJykcwRX9SLA5qZZrQTf9HqMDxpmJ34sBZLWAK3XPc",
  "key14": "SzLKuhfmvVsLCQ2ByB1bgmAgMAZSNQycA8UJPnEyDSNAHmgfUNvn3ZD6L2w2RntDTjR1aSjExGM6MnsKu2AQ3xE",
  "key15": "GgcmMcBDWY7m75bMN5UPsuFwutYu2D2nzx8xqn9zd8ht5jvShGvBZS516Ltw17K4xrXAjDMczY8tFstXRHM5S9f",
  "key16": "3vxoXhGeDU7N9ApbpAF3WjqK6fmEBAX2VM7T9KWJExzssAv1P7FuZHrxLiv2zPXB8GUpGum9KXHFAZ7SsMBAJu2d",
  "key17": "38TusnQeA3Ku8SADX7j1yfCKb3QKU9Hy7j6WvkULPHaefw2bEwHrRtQHcyFJazaqhhcBAhEmiQUAGvAeSUgR4pMF",
  "key18": "3ah7VUaNNzvQNLEm8VVRcMQLFNfEEZJR2KyF23jeMCnfcszouoggD54QimJXM3TPqtcardEXo6KcpB7axPHHmZr4",
  "key19": "5ba711mg5LWPNyRd7NsLaB35DBricgCRkugp8WoCjUdMC7dD2VY3fwyDMsrgAB9nMP1nedhZCn4mh8xdaR3v7RQS",
  "key20": "H3mB5tjo4mZ7ytsosCTMywBMBVL6zrVswfnYbg1trYA9MKYgWQhY5ew8H74KqSGqVVCwdrdR3vSWpopwRmCdLfm",
  "key21": "5mWnJ7jjdhCPVyRz8Xjc95nG62iS8WrQy7qwnqA5D99ZxgZG2dqYwWiLJBHarLWVYaUteFJd7wqaRjYefRn7Kz7v",
  "key22": "4AX6tTSbbQ5xaEZmkhRLNgQBb9hFNunf5hRbNizTAVr3BGgJKY7R6tTENF1rJYCneLch7XW1KA7dQQnCft8cRAyP",
  "key23": "2etTsG5mEWcZJP6CVpTfK8ktR5WZX9wveTA9FR3Nco8MBRzuP5uKEZefSWhzuDtT7GZvu9nhH6DxybiKptiecikG",
  "key24": "4z5KXyxvX51k6zWQRaugY96PCorjGCGHiZEEvkLQECQEkKBUB3rG7nymfeFsx63gjr13v5WY5c3dG2R3WfNaMwQm",
  "key25": "rtkkxWvvmKagwyBJ3ve7g61aftzTtJJh4WMc53oifrj896ifDtxovuYjjXVcoq2LrpeafxLTj2mvoBcQ7Q6KHG4",
  "key26": "2zHTTqpDdvnpvdMaTLLbmXXmZWU8vfwZw893h3nmugokicVLXsLocvXyDVZezPtfnsrwdNnYdtrp8GTwkURL6cRK",
  "key27": "4VDbXGHUnuzXtQo87AwSSU5UN2oNQu3Ez17mVjnQpR2bhMCwC3L1kqPwP5ThXPskXKD2YKWqtLpxR26dCnsQFAVh",
  "key28": "4MwTvVs5iZUUvXQyqGM993uZYZsj2vPUY3f5Rm5qQConSayXncz2UZqsJXrDzX5GuWhhCmK6iLDCQ6uc5TrQEq1k"
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
