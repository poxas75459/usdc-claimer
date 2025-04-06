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
    "49LPHv3ZKhv7ksHbMi3TL5o5tNkHtK9ZvJnFpDYJTWfztDWL5CytQc1q66GdmpECAwC8jqAXZ3Qw37DGrfVyf3nU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39yYrK92vGvEgJkqJa4RCxUGd3WQQzQ8DTgo3qNFhNx962kN6C642V1vsMkBErquX7hMoG5jrdwQiMJ7vEEzXSno",
  "key1": "3nrHx1Fi8n4LnkW2JHpBF4HCSVK7hDadSzTGC6M4M8ymmAhe9SSUiS7ueu6Mzx4c7HvUAeUA2G8aLXMnkjgPWHJ2",
  "key2": "3HPwfGpTatmXNKFQmPr5XPAijVANhRq6XX1k5Q6ytWsW9qaYNuRsanXGQgXyto3zdTnK85Y3jcjPqG9Z2aNxC8cn",
  "key3": "2qqu7scq8TztQ3Go1yNJAoQPg6scJb7W5qfUXGP73wPbWvJjz5DmWDp6VMhfgdpTqVVg6yU4GC5XqKRzZvoQuyGJ",
  "key4": "72kqf1KocXwvfKbKrce45JAitivcL76BoahQ9brvCTJETcgs5Jmps56wgPgNqUuvSt6wZa5xudKdhxustExerjD",
  "key5": "5MKamqqiDsjo69vuF67SdmFMNw1Wg3LcrBW36eMqZ2p7g63bFhyDXLAU2NmCuq85FN81yKc46hj5EsAicEBEm8oG",
  "key6": "4xyMnranvqGoqDYbCY1VFD5w8HGviB7Tui1mq8yHePmpPQ9LSuLUeeqxHMG4hnhveWEdNiuCxyXdfJeJ47psXc4a",
  "key7": "22kLtCPuBsDTHYwVNuvfKapsSdQxicHFAGDTL8PYFerZVQrZxkSCWNzwEhWhcwDrMnacEJEAPBXLXCDze5aMmwQM",
  "key8": "3RdQzawzBGxmkLjLBAD1zEPbEoQkxz3PxcyJqAzq49L8t9hthjPR9gdz2NCS1QdkxpCg6FCMUR76pBWxmAKWBvS2",
  "key9": "4h1ZVqGtLNCwgixSDKbcEwGVx2jvVXvNwKY9RDq1uJXZQN3GxhtgXyrjEeWCTCLmV3Xg9sht7Pqa2u2EcWBEpYJa",
  "key10": "4NMXuyUC7CAfmh8998cNJm4mWuVPMaumjskFMn8m9xzuoxGKy1A2cRRDUHFbSuAMkyKN5WDT5ouBCUpY1vE4ALsG",
  "key11": "4XJruCeaZnFHhmEXWuHwyqxoUkiaM5P8W2QKhgtyPATg4Rhcv7z7Rhc5QffwzTStAVn6sqVCTHw5rw3fXNxxX9gA",
  "key12": "2uC5PH3TBYDZzSDWuqZyBwHmSvi467YcFekgrcDBmiyTEXYxnQdGD48rVqBAKgKKVUdp4FjRL6kKJdUy3BvFtwaQ",
  "key13": "fN3o5uX61zm5ps3AN46WbkMsxxweezT6xS7UMhAZQpXfaMAnnYGUkXBjezfYhjGTC7MzkiDmSNy6vkYAfsK2x7j",
  "key14": "2wyWxbAdQFG5WjY8kavbMDXQT7KCCdgsGwN4AW7mVvEDM8mXGseKtc2MxCaM2KzQQat5VYuxxgVnPxcAqGUap8cs",
  "key15": "4uHWX1sDmAfpizzk9sbuYXLSdnAGPabeuJJjYsK3aeCLQChA2o9xJM42cJnCU7Mw4bJHgzQLh3mvsetDJWv934LL",
  "key16": "4Gp19REjP4oLye7qMCNWreLcoyukXsGkZjX2dVskf8MvtzJHWwQKVBmKUaCKLdmbouzc6GgT4fusiNCCZVEpRYsT",
  "key17": "2qGCXraDHMA89idimv5VkLn9dKEG8BVV2ezVB33xoJpisVCvPM82jyRPHVFSnhv6CJ5wqweFdPW9GP5cgq32Eim8",
  "key18": "4g8wDfRuMhKZPTxCcbBLGkwhxSx8rXdKdFYDUeBKMLxQz79i7Z7TSNa7oSVc6gD27A11D4wvdG82Fm5zwvtKbCtg",
  "key19": "v9nBqJoipLSi9efBL6Di6PcbrVTMWPQZG89MmzdcNrdhKkPfeBpWFjUNcziTfwrgHtW4mSt1yKPgS69dzoVf1Sq",
  "key20": "4TdQPBvYvPhgZpokaixX68ubGNrH6jANusLWHHm7h2GFAUg4fyCWPbPH98U38kP9FwrZYdLYjfDs6GAWtA3TsfDW",
  "key21": "B2XXKKzN96wgFSAprhgjozMYLxpJ4zJdj7KnJ7Kp81mkRRLavKDvfXE8iwqBx38VfNA9Ext3gEc3S9sV7SRSapW",
  "key22": "4kGtfnkW9dZiSiqnxWknVeBNre15ouqcXkvtP23MVjiAs8nG2DcWGhqhALutT8Bjkyt2ahzgRRNXLj2Ati7QziaN",
  "key23": "3TfUjsk5j8nGAuJ2DRoM6apcBtvtX5ZcbBD94fcYNDGZnHKNi3fQBFtUzDZxSnLbB8eyfQ4eefe4AKXtWASoLu8B",
  "key24": "3qfKMDADpSzWBUB1Drirx1LUWM9NmDG5isXyQLZaeqddXe8EewcD3T4DKnJSRDjULByFAMRbfnmC5XrhMgisAXA1",
  "key25": "5YGTi4bcq9uCXR8tcxKMZ6Ns7xuzyH3xMNRkg56YYAwBvpHQ32NDjbfoUSrLRpwJ8svWvSUyhvoQMCAbHFYcbit7",
  "key26": "3yYJTgsspTQqS9PKDbMTEzpktfEKQNDkUG25tEce7HPvXDdNR3F93jeqBpda2ZKHb91utKudBXJtW24CrPv9KBEN",
  "key27": "3pdxuAVexqdB6eTrE9KV27FTSFa8cEeNAGneNdgCXy4ghecGNtASqsXSw922LtZ9c6Z9ZacWeuv1RZnepLCPFVWG",
  "key28": "5wDDGiPoDHPzFuuyRWTCw1NFmKb4u3MEm8pDzfTkqmKRQtLJt186r52JKDKgLxrYQqS5qPrX7K6Fg9354bMnva4w",
  "key29": "2X53SroHzV8rcdwYeXZpQmdwTQwpe1F7dUmBXURPyau8JFAUzuftx5KKzfVJmFkpNxor4MeCTCSNtmC2bkh9JgU8",
  "key30": "4kNGXZkDnHCf5tPLYTmNDqLnNY7tRXZDdW31Tky6HC5dxVSg7V3j3KCqdsHgPwy7yMFDkuW3j6WShGZYkmemwM9k",
  "key31": "5WCN7TkWfBUpRPtdfjWhG3koVZ7ySm55EKdhYnQG9dRMbqDdBFckD7gxmSNdxusen3GHaBiga7Wo7ivDme3mRKSk",
  "key32": "5yirRcFxGDu8zxWt5VJ95WcnA12L7zNcPtduA6vE6CQDtwsCEqXCXowfW7sqno8oXDz4G17GieAaRpfa9etBBp82",
  "key33": "5w3AVZNdT7Lxiv6fDSxkAQXeKp9Nt46KmEMMcm2wJeET1Cykvs1a6UdogE47Jj6x4kqWtr8CYyeDKGcxND2VmHG3",
  "key34": "3brrL1swZspgXbSw8LENB9XXrmh6QrFapi1Mc22JnhhXAZxP7rMrbns29xsmBzekyLTRv1vKwxNxutMcrv1kZeTZ",
  "key35": "Y7rrYHbofhU9kHi4tEoQ8DbYMPStULQx3qCZ5nHMfq6a9cEDJc396w98aX7V79ieawtUPXFjM9fr4nduGS4rSp8",
  "key36": "4KZUcedCR9HctxB17mzcXtzZnENv7QHuqHGqzdhPnWN2UrcJvj1h9EbKvWaW1JYzrtB7WtXzMkXAMoaQZcVY5Tha",
  "key37": "p8dgEyDGYuMc1escUJz9aEKGwapQoCzwQAxzPgooeSV7Y55Ued16AUgNUqJHswGUZ1Scdr13fzwyZWgWY4Fh4zV",
  "key38": "3EQZGyJ5ezhZtT76rReSuZ4gbC1wHTzasw5UGvdvaaQYnSh1WJAiW7ATYUmhcUK2CEZHZv2iRXr7rhz6SGVuV9Mp",
  "key39": "4sRuHdEd2xXeBLuYHFSpPMsndiMthXGxQfV2qBmSNjGD5YexCGYoMEM3FjhXaxcGz4duB6H38GT8aWzDryLQnfPt",
  "key40": "5JkaNffkfaenAeJu3Xv3vUDAgsDBerDTSewGM9KvgQPBytkuiYBqz8VeKU7HMjiMU7CorMHWPR21zhZFSkrBxLc7",
  "key41": "23HSCsy3AEDkJkp2cjpSge1dDwg4CNJjd7Qtn18EsiKZPH2b4hpk9yKrqjgFBVX3FZZtBjEcfHEyGA7ATmQZ1AiJ",
  "key42": "5Z1VvcCgXWfizjV22o2HU9639ehmzHf1faZEipHDhLnBpPon4ECuNxMEGg8zt1hLmqwCyFopdWhchkiSaaW1XA1C",
  "key43": "2UPACHWCtbgPsSjMi9uJVgTYpyyD1Zp5orUpLUgqCVRHG3oLNH2hLyVv5HhfA6Hd9qzionXiRjuT9JJrJDLamdbJ",
  "key44": "TVw5vZa6xseAMMCrZ8wYQ6XMj8FhJb99MEDxqpwsj5RxuWwr8EcTEKnAxS8sNWUYGit2JgLAoaurTnCGd4A19ko",
  "key45": "2Qwa99W5pGPCwZfgQgK34GTvVwLvAde9f8eJ9AR4sZtxxKEHGcVRbE2nH1ptLnaUJMScWwGFaFCCzUgLSmDZzd3u"
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
