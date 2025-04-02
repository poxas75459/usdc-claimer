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
    "2KGYj5FkvtREYkpRRxCnsiW75vHgDBU43oB4FPVKHQRf4UnNUf9mi7Kmcvw91wEwiSqKseC8YzotVPgnjXF3ZECa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dckAFdTz12UZGaFCpuo1QUT5zC65T1MP14JGvuZjKr1tSp8dbEep63g6kva9aCVraao7LiQ5Uf87aikPg7yXpL4",
  "key1": "3egeAWVqfCcxAQ94TFcAPyjkSSBtkrU9F9CsGNv4KD5Fa82xn7HBPr6tSEbMcRaQpbTiZLxnwtFSQCuDeLjbpx2j",
  "key2": "3oaSzPTTHg2T2XKRxYAmcvb2is8dFqc8hMgPGGrpy3EU1YzxsdHRS8kuRoMYgyQGK5VgpgsQXLdsBJTuwtjpMwaa",
  "key3": "27vYpo3dTEwWrkK26UXitZhXo9F5CV5Tvj7j885Jh1jYsesbLmypEAWbikHhtss2vgUxKiHbzQjssYZzwYkU3rC3",
  "key4": "5wNYaajwnkiMhMyS27qh1C27gXvmwu24sUgXTZercWq3D9KqKoY2StZx62mQdn3RbDaxz9esn8WcApkW2URzUQxU",
  "key5": "4wSmrw7oJLxB5aUAufaTiovCw4Rbz2XarRoXzSZHKWH11UknwAVBzVDECeHmvTDEwvyT7moPCp6vavv8X1JG5h8f",
  "key6": "5mCighG1kNYTrsMQ2YpDPeND8HSkJPsyyFa9Mcp95o64YJViBRf8Gu6qkhfA42u97MGeWhf4nJpPimGUyNYVfKKF",
  "key7": "5s67Vz7hyfjEQKVrtwk9c7HR8pkcss25uu8jrk5FQHdBtvVLYg5chxJf15Af5nYj9fKAvTLP3ambQLavLy8SkDDL",
  "key8": "5mkUuTSfk2hEBJWJ7zRXHBg1mSkq85E4A7TH4LrEco4zpRakNZjAx1JXztwQunj67GspXacRsoNP3RsAUCqbiSY4",
  "key9": "3d58uNLfU1oiGC776XktUTy7PJmwsgCRFf6TuYa2fY2pkuJMJtqZxA3ZYn1bfAn4Lfd4jf9Ac7LGyb3un7j35TCu",
  "key10": "4FfqHeSv5ddpwwAUp6Qv6NACzDn3yGGmp4n3sBEMvqim1yAzJ2mh55h5sWHtHs14uMrZ7GkmNTcrzLFFxozk2DN",
  "key11": "5vRptA7CDTSHdQdiw1gr5ia6ASbYgog8kY5jp8PbALU8qLfnA3h6hDpiWPfnGNsT6W9tCKbrDohJN8kKNvUu93yx",
  "key12": "3WXvfTwizkewW5vPow49R9PbUeMKcxz2QQnKRNMFxJaSLhCSHPX9hAE8we2YAbM7e9wMvvcS5sCkFYq9n1Sz4wTe",
  "key13": "5FJQLqVecnXrCs6WzGLKjgvJbjzR5vGxvEossQVUjJRCnVVoGjLcPXhoUZwjVxC1nKbaNiJCjMpWkpKhfebMaBno",
  "key14": "a2SitVtBSFt5o54Y1pvyfpLNV1MsNbmbnu85VV3CUqV9zq96T7wkRRs6Z32DDPWszht8PMKTBfybEVukaYCHtkd",
  "key15": "5EHGMjCdUwzEgsoHX3md8d9ywMTWrBcD4QsFW6XzAie7T9pkaS55Rf34QWfWhG6saxdEryr6FZ4QUeuKnJrekcrt",
  "key16": "22uFrAkQFmYnXSoYoH9Uczs2LEomTMTRiUbMevvtZGioTR46pANpszNk2pCSSbRDic2RAKjuYYWVMCRWZ3R1gJ4e",
  "key17": "5ZxcauZwhEUR9AUf37Q8ssGatEoqCK3T9wHxVScBoemkfA9PsBsojNb1iEy3ve2Pon2yafidbStsCqywC2y4JJT3",
  "key18": "4UnAPpWek96FkXwM6wb47Ez8oss5i1r1NSz7Gu8LFxwoXaFCFyPnM24iQtBQ8ByS2pTBFvxmHoSdzG7gV6UoPkzX",
  "key19": "3ppsv2nJed1NcGQdo39U5Xrfg3YECGMY6HftYKr69Ysu5SxXBLLpJR5HhSyP8FKSdgo8rbGcDqZEEs2YsG6mqf1h",
  "key20": "2D8nY5x8C4uVZXsqf8npqEokZ6FGPcMLXn5oHR3PUycsJHExFtuhxrKfktgHakB9fwkbPCN6MxoowycANzipxMN3",
  "key21": "SGbRQ2s7QUiPfQHEzHnccvKFZqyj8EHJH1qEba6VFfusXznJ3ZCbiagzqfn7fnLa856iRcPovkH23Kb7zmRhji3",
  "key22": "3nFrfFJ7skQTDoRELTC4x2ZT3Dru7FgUjkKKazo1f9obqAgxAQPMPdwXDc2Fn7SMh25dsD76Xy1DQ7cnvykAV8vm",
  "key23": "5o9x46gzZj1GfH3ZV5t89sDCr6nMYYfGWSyfSiKmGTWENwsEFs3DK8fXYwYr658FB1dBbpXPUt474dnAhTjThsxi",
  "key24": "2tTvha9wCdbAMxmqLDRzxXfgYQwnkv24XgrQRTBtDfSGaWnHmEqBCEN16mxMRTcvVqM4myG1vaoChUF7j5nDoGic",
  "key25": "5yCK6UvLpxxYeowBryU7TLJVH9fFNt2V8kSjZzy2pAGiYLoCRXpqCJZSwS3s2ovZxqHJE4TXkY1ZK2g7Fou9mPp",
  "key26": "61m5V2FfwNZS3HXGF8Fc8Wtm6CHR53hrjjGAwocPjv2uDw8e5nhxYw4CRCTxnB9KqbptGZGe3uJwDcNs5fQMeVWQ",
  "key27": "5g4dudhuDS8DbDVvZqop7VGJtPjDZKhFzTDpy3S5dV2FU2Cppd8v8gnnvUZ5R8LuuTb5471qhqbZzxyBMQNoEuMi",
  "key28": "4tB5y7Dq6EBxW5FbbQVmj1nXitoJZ6NobvsrxCtm49kADJP9LxQYCX4UbD6aSPfXWtEKT1m1s9iB1g9rAaWksyvg",
  "key29": "22kLmgKen1EDCsZ1mV7AxtJyf33o96nhyx6ZpCFuB5E6L7UDHcQUsWMyT6e1xGrA1ZT61wW8Jk8nBgJhBgxe7bP5"
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
