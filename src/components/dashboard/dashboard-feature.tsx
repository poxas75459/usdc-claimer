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
    "2L9hAPuq9RR7KUxfSGxSARQs6A35ePHpThFzkHrMLzK5RtNXTdryHNTDcXuVDjpSx8HeJQqiNbf187Fg5tGnKs7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "93nz49DZ8LDmuMD918tMdeW9MH6cHnVcqKc5hVyB2Lfisiiydru6J7cZGMwdytbzazGfiLiPHMwmmt1tATBLSTB",
  "key1": "5DHvCW3mzsPWcBJ4vRUjNLCYQ97NASFSKztzyDngXBbTNzSn14YJtzK4vPmvUD1YWighQLNwcUo8zDVFjQudNtPZ",
  "key2": "4njkFuBhaR9YqS4dRC3ZaszuVKSSXCv42ky578CMFBQsvcHjXAAfVEaMDpeVg8yijwhvdTXbLb5R31hyzFmbsQMB",
  "key3": "3KZWNJdhsZZjLTZvVGjXdgqbLMeA9QzAds7tYkWfTeHVGyLqEh215zEt2ctiUdhuwm1mSBdxADuGwckxi3ebugEM",
  "key4": "3eRJFhYZhLbViwgCQjhYTFaNWQucsSpy8adZfg1MB3ymD1Mg4VQK84a7eZ48XacEb8LeVgREFNoRW5ksZJFgCx2G",
  "key5": "5EUqPEuFh6S7XJ2PpRCYVBAU9TgUZFGBs2vZ6vAE3WykD4NjayvLQjL4oVpT57TzhkMxNbSNSQTtSZuSp4g8KLbo",
  "key6": "5DphvMS1wMcRH1wni9U5YDXm9PFf81BvWUb53CCyhnn1wxKdR5uz9rkmemwJ5f6tpYj5xM5jWg4ELztBFFLpybyy",
  "key7": "4TwHhVcHqb7EKPckGeXUQje9BGHdirU8hp9V9b538o7ZF3beXzHY2VJQMB5sBGh8Q6t8YDniXnjV2dXUp84GAmYf",
  "key8": "2ghPb9zonR8HftHQ1LAg2bYUv97KRFx7HTp7BuGtmfdgwUr32bB9uwuZb8WV3iSLSFyMNkvrg6LaqwbWzFTq8REk",
  "key9": "2HmwKFMHd5iRjRAJGT179uFKvFqpASaNEjreo6jQGFjhw25ALQbjRzz2xcLFdnWiwEsCfPyd2a8iUDv2uzu2qnV3",
  "key10": "4K8NMysMkRJax1PDENjDzCXs6t6st7dqiwhDuNbfN47gnoJE2zUKp3sby5mCBAF6sA4JBQWanD8TXJz2Bf4rAcj5",
  "key11": "5KNGVMENL1tLcoUompX4XVTNtAz8pviY6fMjxpe3UbwYc6TNQWAXAASaPT7u8GWcihwWzJtEtvxKoNVdAPbf2T7Y",
  "key12": "3ZyAmEtFyzTQ7bDCbRp91jRBr4kK3cE6TBcdQzt2oxWMstvAnYmpZwbayci4LgG4Kmj6wSdW9Mv4E6dHPbwR2ade",
  "key13": "3ujSuJdVGSsSrGXuhAhVMaxGBW8CR7TJm8hco9FynUCvn62vKX8Hbwgz7Cca2sVMZRfY1887qKE8xWJ9CFVgb5zW",
  "key14": "3VwYJHxCLxTmCF4trPFxUbjLGHco5XEuQdL3MwcHukzTjk6LpbF93Emrau34MaoWXnrWXZ8zfaARE4uhQ4KSSer3",
  "key15": "4iV2bCHqEx8NkB9A6i65njZ1k6ucyjsr3NMVdwGfpHFkEYkkUTJMz1L3DAf4Dhd4SSpwwDSLiDSyjqXmh2smV1Sx",
  "key16": "4S551v7YMQAg68kjb6MBYwL3fN9hb9GruZiqQ2mX5YdPQzZD3KcRVMneyiM7J4pZWhPfaSAELGEBP2MubSqcpeCY",
  "key17": "ncrHVPUJeDbgGYgSmJarvC8doyZYZBbR4c9A2avMgUppJPBBkG9g7Yy5bFVtuA2MrDz3kbv9ifDkU9GGShjHD8G",
  "key18": "KehXJqDguUtafYoxd1fGYc6ZENqb1KB4xs7j1dUSwQz7UMqN32dp5x2EWNAciqrjVuEca2sbL7ekqkzg244uCCz",
  "key19": "65Pygy8r6yQsXoK2Li7HiZqsbGLrdv1EXTW7XcSjK27EGAE1vKVToqEXZd4hVxTpGP8inFjajHNhY8LSctt4caWm",
  "key20": "3HZeiJs2JnZrENAY9kQSvjd8315TmSr2sZj9mvB17TXVRsTKVkQZd1TdrPxULbm3Zvjb9xJKt37HdWNAdLbAgfuP",
  "key21": "r3mxEdT15dG6uZQGdX5QwSZGqqR7R1dxwob2RWYtcWvfR4B2i6cGuVH1q57pmp4UUKWNPezjVFgYJvsVKU4AmSd",
  "key22": "2gHrp3JanUrTmSbQ7b5kBPr3yDCJEjm9bhwWYR8f5cxy7HQYHVHXK6QSGPDWq3wbnoAy5aa2QueBvHzDtXCnGAeL",
  "key23": "53uPbPHEWK4E9EZxnXvo98vkC2jppYzKSoj7z7JVMSxXPEefXHXP5EnQ9D92y54sBDQPcVsATLdJXqXQZhUHt6V7",
  "key24": "4HNEL5c1Jm43NpfFpWPoe5NLWjB2EQzHikaTfGta1G4UNEh9B7r2hao8BxMtJQb5enUxhTprGSqpqQtSzMBhFHga",
  "key25": "3mWs7vDfK7qBcQuCNZdiin2odgynic4LEvDWm2u9uohnzH4WjYTQRyZUG8HCwD8xPRqTz43KFzGZ5NRen3e4wr8Z"
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
