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
    "W2ocQ3gfWo6B8oHoSzgYQovxZvpCLQNHSDuzzxg51B6PHtzWVdbXahd1sn4wyHbqFkKZ9CWep55vbF8WR1JdHn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LCcEyawFWprGNbRLjnZYMoo9sqLcBZCJUNovqMeaPWatTvNMRufboSRTTKJZm6r7jHDCKj8wwto6rsCztYQQXMP",
  "key1": "3q6N68wdhrpxpcGKomfhp3vVJvkwZh8cH8pMNgg2G6xqbGoz71uBg3Zr52uiCDBjMd3VK8ENFDbvwGndiPJJKEg1",
  "key2": "51TFwDeFhrKrvFE3WbLFojNFBGJ6greYgXSrvptB5y6QtY3J5dY95QQXbgjq37Vfmm78qsQE6RDUZKdXR6gWfnwG",
  "key3": "5k2EUAvUw5JTKjt6jtf5DbEcHvnWmLsJKqj4N7xE52QGkBEsoGL5NUksnMSM1u7jRUfWZj5N2GpkShaMSAgMhLhQ",
  "key4": "XPULDoTBDCKNLUHxEakSJMSyAXFvi6TScB1a4wLLVyMHPG18j7s8Q2qEE2sdFTMV7EmT3cR8tYTwRvjbcyjSjF1",
  "key5": "5aDnJyyyhdRZkqPtPh8kRSheMfXginWnYaNsSWHg5XMN2QWBMXnCXwbWpikuEdN8ftDx8EgnMDJx1uwB635gKXQ2",
  "key6": "59qws64Jq31TYKvWmAa1CyHZBGsB5QAXUEBV4y8NBSfpBo42cd8v2LBqDWjcPgBaxnSdpqNBU21wqPKp8v1s2i7f",
  "key7": "29xkWmQMv6hPz8a5mY6c73izb4GE5jx8JrmsFhcxun7nYH2aN2kbmrYAVf1hN7wiAcRdppJHyd4Dwqc6LB15SLRa",
  "key8": "QopJivf8w9ouDWxWWKmj5KDoc2yqDZa4RFhFJshYt96Fe7eFp32mXM9qLSDmGFUGJH8ntMsL6y7S4jr1hDw9zN8",
  "key9": "3g5H9z2LUkbKzNc7eADQj6H87vwtUUx4gQCG7h6M2YGsJamBQae1nzVe4f3xz87YV4ouf6WwFGm9wxGRf1zSVBTm",
  "key10": "4kkmqHRfgC8ejSG3ivcJS8D5NY8gT4baqyEddoy83ZK4nxr8TKD4bQiAwHek1hKCtJ2LzZyFzNFn36hRg7nBYpma",
  "key11": "ioS8S5zuqeEHYHd7TGeJxTp2PFUKmSaJqn4LDu9Yps26SP3Bn8KSA4SVGuT1cjKnhYhCgpYbySMh73KUfif1cEt",
  "key12": "VtVvRro2uXnzdy4d4HYDWQXSWwaKZD3x9dmn3mE9S4gskSL94F1FwNRh3MWX3dzpR1qFJFdee1bgkXketoibGMH",
  "key13": "fEVLtTEkihTEANiQY1fVWH3W5mWtsxjJbhaUeG4us4BEQ8YyeqModKbhvMC1i7KGbfuPW1e5rNdeYi6aeUi5w39",
  "key14": "48bJuUR82WtkBmikESMtXACARaGCjeZAttaYrsWvifno2rbV4pHQ7xZUzbmtwtWg2sQTV5MxidgmyGLisdqFFgQU",
  "key15": "5zKR4FrVNtYu4s7Vp1eUvJb8zErdFkpoV4rhGKjtDHDyL6nrCm4hnys3LiULYEKqf6biGZHEMxdJ7mpax4CkzP2z",
  "key16": "5rXyrtMkcNHzFj4XE1oDjiNLEuwUcyJD5XaE3A9TpXRJWLa9eD2LbHwtEMfmZZACrsFgiHJEVxUEDj1wiUzEFVUL",
  "key17": "3uCxbkj6FMJoGmA6BezKRneoCKjDrSzjEnJwc4yyLkPrMShj6sVQQz2Yfb19xkV5yap4euQ3Xr63mWERbdERpjTM",
  "key18": "3AfAS4xakGmxwSj43DnYHnhNLmFDrwaioMAJWAutkYGJ7C7MXjLy1M1WdBH8Bbuz8uPUpcxbstyK6jtv7A4FePMJ",
  "key19": "25Jw7VjyVpBaFQBc2Ts6WJqAejkD5QVFwYYKyCbyCkwA9NqoD6PWDeiFwTMusbpefZvFq7gMbxXxZXiF8RskEjoX",
  "key20": "zBnz1NToP2yg9SAW8SCHU19aaQuUFJdUa46ZmnRtLPHzLhuPSHnJQD38H7m89TeSMuSi1TCoQV8njm1mTQQeaUa",
  "key21": "NtVA8E2vncZ98VHNKEtjDLuM73oQ8XeDf9tRVaPRzeK7HMMzu4ji1JK9Eu9tcXq9qTjDb73TCrphwAcagk4FMLF",
  "key22": "2YHMGFzqhnv4Psns7SGqhYqVwYrTDjkJsaajep77L4cEkpx3Nhd19ojFZakBVSpAgMMty97N2dzkXj3mBogfAUt3",
  "key23": "3w1WM27uzfEH2xopB4CchKEZiPovdH9PS8JgauvMwCzoavQVkpgUYVEj2E2Ld7WSrLYmrdnzki5qjMxgRGfR8cJc",
  "key24": "2tkUGY3smy2Dc8kziynrrjgWFotq3UG87ogWk9uiJ8vUCwm76mCzb5y5LcREzWZ51fS3SUMzSbCXUVdHNbSiSiGT",
  "key25": "5QosVh9KV4wRbp648ntwFa9p12SoES9mDPvjU2jmLuW6MTxtaQFCDG1iau4NYuDwCMeJnhgJTVLgni2xy37kAmc2",
  "key26": "2h7tSPmHusGNAQWmriDxj5ki1QiHcpgBGm5BaoPpa42snBFtEbZtoqYEZ96SZ8X6HnGg4oPWb7SMeamAFfz6wRVi",
  "key27": "43hy45QTFgCk236k3wE8dNP4BwdXFpp6ugbNSWc8mXdc91hsmxLT8ogE4sJJo7FzuQJdQKCnfaHRMEHNQ3LXkAJq",
  "key28": "7BpZjLAtxiur1wfN1hqikYbVi4jb9Rz3LbgJBwurgbCiursEmFMbcWoKTeScV5Hqrp2Pj7hEeCtFN1tatQCzhSj"
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
