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
    "oHR4z4f2ibNNa63u5EXrfhx7utWdFp7rCT596RyTLfDHjf7tFGUGD5qeCPMY8iNaKFwCjW8T2TbYKyyQFYzPWKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dqTcSCXTvQ88BekGH122eoFUEXU8vjFKza1bZPNCHrsSmPYpXKgPahkuZiiePCVJNZGSYg7sELDts6pcdNcGTaT",
  "key1": "4CC6kgoBJjMSHcqe5yzMXj22KzvXobj4VVciYgirehNkqJRQaL7fAZRJyMaHpYdYbrHwjuP4wRgTnxTwP2GdPniR",
  "key2": "4mgg2bDytH82sZezdSApFE8ZSz787Ybp62WzDfKdLwTzzr39rSX2ZJeGhgG9UT9gY6usYF2nGK38Shw46R48qaMT",
  "key3": "545vAyYV9CcRomfUB8a3TxX9NUfVcar5ZBLh6U7NBrNXjxZEZvDsU3oDfs2X1Xro3DPtsWbfNWAAtB91A8xRg64n",
  "key4": "5UZSfPkqkDw4j6LDjaWLVHoXefNbpsHzsTawbsGQdDEMvxPxMbSYNP4L3BYaffXFUJ54SBEjBsaMJboGZs55QE1H",
  "key5": "4RsCfiku1d7DUhaXa29ASb11UMoZDeLDVUZw8fqo44GPH6nAqjy4rWD5tvchCvQCz8eDU9RJvqhp6fB5GSP6fUnY",
  "key6": "5xMe9uUhWY3ufydjK2YWv3WMsLNQHDzE5F6WHsddMrW9nG4JjvQ9W6zMRtV32UyS4Cw8arGbK9WVJRXnN7eDysie",
  "key7": "2w9LjdzmPtN4wfhdR2JeUHnaQAsf5LjnxxwPeCRMaQHMduCiqLoz8mM5qTAQmsbKx3p8j4dWLZfWZnfRdtgBRaNg",
  "key8": "5V3v9j8WGSujyPxCjYFEhU5y8yiuy33QPbNiyPpWt2t4P1sAkhnRpbmz4jAnkeVC7sinz7QTqVLc45ebqGDxPWKi",
  "key9": "dGFHsVR7ekZCLZpTSJLgn2aNwkYtFnthf9Np7T5vWsJMMDjhqeUdbkVGPxgXkCvDE7xZnsuKxgk6oSGuRZvJ3zD",
  "key10": "49vyxdoKMVsjdrTPKwPHrZnHDsqoxNaQ3euTJNuiiTkZZYCV5bCCvGiBjejxLevY2kdyQrg4hmW7NiFQ9d1pAnzW",
  "key11": "td8V1ZFoKQgNNhy4hgeQ8YLJVpv6DCbnevbP7cAiEyYxU8Bbe472HFuVq7TK4vMsgVYC49VwwxMJe1gqtg1dez9",
  "key12": "2V5a7UYdBRrd7nVm1753qsrweiSj5gBFFWfE6HCB3uUBMwxV4Nn3XRrj9eGxGpyyreRVYehwuubrvPRrdSbJfy9x",
  "key13": "4131idbGHiuyGtfBL1RtksW8xv6NyaKcG9GUqn5JLEZuTMK1MsEzNc8XrMUhJrCWL65F694ARWb4PNCY15SZCKNQ",
  "key14": "3otbQU23wxEgen5zkB5wmfATD6t7e6WcNDs8jatVN9hnGDJmuhJp853L7Fo63K8J8RDmtCsHa2acEP58okqN2mTi",
  "key15": "296a8HqiTFnCYfZNsVycsiQR4o4YMYgQP4TtNqM1sjqJhj6KnkLLCb6ocNA9xnm7oEGzxKVr6qc1MvAMfeRJTWKC",
  "key16": "KNLi6AGUtJrumfLcfwTj6c89BDquc9sefQaSrS2uRsev87ReDqE7JxQRWg1VhnBLGPRk1xrBs18Euo2rv5vRS6U",
  "key17": "5Sd9USHYaUHkmQFTXVhtZh4dK6WuRYW6TrtgGvhStiMYCrEUWjNkSvaZYPxH9k6L6a5aSU4ZDbT3TSKRPTwFtTD2",
  "key18": "627aRRzRMieh3aqUXLyuApTbsERVbwd3fcH9qs8CSa5DfBpuuAWryAPSGaFw8SgXHS8MgC9nTeY7zWzR2FNLUBsh",
  "key19": "5RVTZaRp9MGYRas4SMKDa4Wrh66AaDcK2o7Y2MqtMZbnGc9tANsAvSYBcLLaWJJa8VzdY65RWCsjTymAJfb2tAJy",
  "key20": "4h9CbQkFLBTGBY6pn2ji4XL2DHTKz6MWWjzYBXBuzJrmJcwd7cMtDd3cp9GhE4uHEbgLHVcRwCgMYxiXp5Bc5WvR",
  "key21": "3z1pPjo2GrF2oKhxVvEP41gdzNbiLDYrjr8a2imRaoCwp3tugAoo5toxSoJj6rs5P6VPB5nEEEzQigsTzGDdbNfG",
  "key22": "4MYB9wfa2heQSVay3dpgesaBNeVwoMRZF9v9T6BUziD3jFvDQGV949Jdj7XoGd9FEB9D4oB6iYDKfzF4a7tvUWdN",
  "key23": "w2LX9NFAXrTZUh3WfUMfHdGgLKHSKeW3BPvtPXNHTBayXbL5pMzqDHYq1PV4pPfu6v1WprQ5pBMB5bkLuRqNoak",
  "key24": "212Bw61RR6vjynjnuA4rqaXppPj4BEBAzgeuZfGJvnyw4h3JTLd3LbraQS1cwD4LQHh52xQ3Yq52ybGJGTwJykhQ",
  "key25": "63vqB6hSwU4xprqfMnMyqtuncsXMvaus9Y8WKVWaTzhYH27qvYDBTEYL5spyk2TaA9D1nygwmSEnUM27XqT61JwE",
  "key26": "28dWFqe9JYaKhgZ6oBQ2z6LWUc3DzYp7cn1wAmi4bbTuMDy64GJKDB31voe826txyjAFs9NNwxmG8BvsokybrNQQ",
  "key27": "b4JTNjiuwbSCg9TVAdVpMfsgAmXUyMXNWvjN2DEqPCHoR2mDUTctRtoN3gedyWZW8dXFoAbhrKbUk1KMmFYU6Wx"
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
