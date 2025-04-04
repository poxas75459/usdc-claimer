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
    "3DtUBLQoSTw3F3QNydnxgnkeyjcgthapRQ1L9MWChUtMENNuVh2L5VtheoAfpd9iTdLuhQQqxZa2nEGCsg9XrvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bo1T14xo2B66QZr89bn2gRRzW5AoQ1CgsiNJsdotNVbJsZ1yzGNn6BSmYLZkUw9KCd9jNvMz2jNB51aqnWCN3cj",
  "key1": "4LAVLwGyKHWtAviqAq4tUrAZgj8dctKmqgTjEND2w1vtuLkTibGkWinb5fhrmJZzrjq9d1okmd8ZDw8gdqrq8Jg",
  "key2": "45TBRp3GHf2qNRv4xiQL71tQ7gZkimLLVLu783CgJsjyL89rCJLE8Rb6Ve84XDunwWeP8mavqJ3Gqsrj9aZfyN2J",
  "key3": "4Vmfd1Lv4hvAhD3PNovC8z8pnQqz7cCshNXZxM7LEc6NSP3kP2KiK3SvRw3hRasqpFoyXVrBAh7MHxaXt3jVrkFe",
  "key4": "6395k29UTfhG9Ds8ZdSmL9im38yX4kerBVqTuxsDN3a2V7NCpYcrddacq4iAHqBCxERxvrLB4AP1xwCemTMGbz5D",
  "key5": "WGusKf8wW6v9Qi7ir8caNN4poV9FCZrsJjVrJnbbEQZH9B2NpUTZMgEv3aryDa4NEKaQHDJu6qEFCDW4pd5cy94",
  "key6": "t2N1xkAFuzhASrZnfaT98GjuHMEWY4N7iz78XuqMcGRVPbJM4KyUEurJHqdX639cuzediht9cHbHLFYeQkApWka",
  "key7": "3ptb9LqWJ58uNGyxYhG1cQvJBoD4NsBfZXVmgP7AtoScWDtQcqxJxX83Zti5v7W5VtKUmztNVvHY7a4FJy4okR4S",
  "key8": "5SbfBoGG1MRGkFmre7JzLia1PKop1A5oEK3GFYR5cFPwhzNFJ75DjeWkR5B5rPyZwYqK68eFXuFyPF173T5a2opL",
  "key9": "3WChRA4RxoAZpPoWvZdKYk9LRtvKrr5KjkoinU6uUgnWRxTNmnpLzAmed2amEMgDvQvuLRG3Dj1TmWFDHEpxE5Mv",
  "key10": "21qaPE7DKQ7sjBZneBnSjcazJxdymDt4Zd9Xxh5fFwxztQ2iagdMs7XonMmBqatFFBjnFSBYst47oMXV4MK4A1Gn",
  "key11": "3XcPMrWbxLHBKBAcvk4oXDEJHHUBb6CpzwPF4BLcd4UEfSENJKg7HWRmmJyCknrPJ76yjyiQtgsjDGHCH34zn67n",
  "key12": "4w4EMT2AaxVrUHV3VbxJqHjiXiUMeQk6PMEcwJ3wxpQQe1E9TuMcs1kTFSoERvm1oE1V91UwmhGFVuYgok19HZHX",
  "key13": "3Mhf3cfqFPJNb5rs3V3etDVCbyWgZTbNZjCLHfyn2bcZwepjHdJ89j1x57osjRhLcRQRmyaS71oGoky6N1ioPZXm",
  "key14": "3jYebowkY5cR9MpEtzrtbfurwrcsoVm9SnMz8zZjfPTJwd4vpkTBqxitFEaEssUR3nViBpsjmn8A9Q935MU6Uh8g",
  "key15": "2hRKFH8q4LXX8MfRH65pgczhTJNrGJijwt99gjpRTWuQiqnbtKkE7wUCGiUcK5Muu13xQnyLWqNC29ukLmuW9iCe",
  "key16": "4ntLasYCcUn7VWn9k6apHhJF62uMSiPVpFL5HxF1nksNbXFLcNa1QMCMqzhijCsAbu6tzUoubWxYJYCj6491u5MX",
  "key17": "4QzrbdqPeKYwGPZ3cXcMQHWpizn38pUkRzzE6m8vBRezv25ZrZB5U4ddVwtQfVCwPdnFGP1j9t6pZY3weLFPGRqp",
  "key18": "5MVTwkqVrmFbrEYenwksUmDBenSXUEEvXRb4MFVkZKD1cXR4sihhKK2vtr7yFytYegvR2Tm5zYom7zsYavBERY1b",
  "key19": "32HdDjoHnzwBGZhhyM944iuPeoMqs8AtFNvN7xByXiuF5DBiXm1Ny2nu5xnjKRwG5eix6FxcYP4DtKnc5723bcn8",
  "key20": "2SXmH728Z9fMgEzAaMLXoVXwShD5uYfxFVSbzpN85buFwyPJMEi8yPgYZREExQGfbjB4LpB2DTHA4bnGL32N3SDo",
  "key21": "2FeudwB4A79i9qYr8WDF2wQos7eFJEiCudFwRNJyTe5E8xE5Sy6sYHUxTwmdX8zmJ7swK6N3qPA2kSNbvkxPv2yG",
  "key22": "4WxvR18bHNPuyQRqGurxXv44Rsdk1SDpKGMBsn3zRHMz9bd1nz3TNtpfFb5vzu2YVoRo7ePynRgZrY1vVqbRnmqC",
  "key23": "JgMQCcxJBW7Kw9iR4bfg4789YY9z1ETpmkrZ1na8zEq2vxpJV2fAjA4HYCd15Q9PhpYfCzPKtEXvZjGVpLWFHUB",
  "key24": "47GBEvDcbhCJGfsn6iJCn9BfeuckndSACFJVneBrPNPSJKNGgfG8zEmM4YNx6xpwmnrMNhmhQ4VTHkmYRsjUGRap",
  "key25": "4gzwMSD82VAHUrmMmBAxDo3298f24WDfUxfpJ1oJjgNU9ThMwGwmLcXokQkMEABLc1u1WG6Luu74LNDpF3pTSLne",
  "key26": "KjQuiUWhh7zJQYyvrNmfZqxuD9ywocWc9QWQe5374GK2zuwNZ96JjUKv3d9vDdJF9CWY7P7ag5KKe7yac114Xuy",
  "key27": "2fMszo3GRZVDeNpdMhEpSgbrZfu5HGYrgkWUDYLfFjzXnjf6jgdq9j4xVwrWPC2VochLscLTKhDhH3WmCz6o8BAo",
  "key28": "47fL63r35wNKWtLb3JJMmtjfBe86XhKoTHNgHm9tQn1T9KtdrLt8t1agx9fDqjFkQgm6y8qm5afCbtyFyyfFd8gP"
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
