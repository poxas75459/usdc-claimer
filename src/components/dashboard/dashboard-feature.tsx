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
    "4da9HM7tie6wYRAKBwxgUpnwav44fKGQgufGqn5K1CUhDZwJyy57gZjiTfAEMHBDehMQSD2tZj9riQcwjehuNbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hyc799QSv33ArEmYrL8JZd1S82vo19t7nyccfMSNLZm15hVmzn4LrvyZuSSg3yFfGyJfL4DYLT7KaspSoiKi4gf",
  "key1": "r7HQViUynEWrdGHHTbCi2BLtVLTyqLptfBMVH4bkQbqvifTtR4VUzRo3HMhKWt34xqWTJJEjugMZhE5rEW2nZmB",
  "key2": "4UWtdxNaRhDjz1pPRbR52iQCV9NgAnAz1xtsZqjH6uwJNU9pKhSuJJ8aeUndfkuZtUEJcfmA7vA3RWZuvXWL8eNb",
  "key3": "4zs2FWEZoLLuJXasqpHv6eyhAY1RiQfQnUdS4bRKofQpK4SZwHDXDoNgvQcnwwn9UNEVDRu2fbBiEPLNyQZ3G3Dx",
  "key4": "46pjMrtncDwzeS9HtZMhd24MJtZUskpS6emwhQdjJsWsbxkSvg1oJjA3opN3F1h2syqdZwSrsWUYfhKs3dUMnjq9",
  "key5": "3krAZG6QwePta7PVveLKnX3koP814Vuinjkp3Ci2LgwR4B4sBeRf4jz6YNgP54MMMCfgttsUw7eAcb4pe7tNa7yU",
  "key6": "2MgYoEELVB65pgFqpiNyPgh4B4Gz5CcTa3sUMo6iPm47mFi4vy1BVGtUbZVvGN9rwjCZQbFZepos1qnxF6nB5nZ2",
  "key7": "24DKqZC3UaWcRAtyy7D2ZM656K6mmmXz2SaomQJL1XC2L86UZ7CNiWK3Lwfm2dF2cTBwvnmDdykTwGtJbfdH96Ju",
  "key8": "5ua53ApsqG21gmRoCAdBJKLAVzndSGaENwF7nEfncLCCWvM9ztV7WeUxd2LEJ4dR3ohuZsH8kq9gn6ZJvuaPqzz5",
  "key9": "26DaLcZRbegxK2p2EXYYA3NDxNn3LssLMDp7LQtg35w9SE7V14ek2hjC6AiUkVURW2xySPoYRWz8hZY5Xd7oBvBi",
  "key10": "3jtCKLdG1vUwmrB2Vp9UAtUXHz13aPtwuhZMZEx17xye6DuethovmnY1vRuqVHwnk7S4YVzFnfaL4z1mzk5r1PAs",
  "key11": "34bwY7RBqKQXG1jRqvxToF2cx4ouXWWjw5s6Wwds1rPCWDyqtjZUMeGdECRaXophgs3W1eiHNNeMu7v86UCwwVk8",
  "key12": "2GLYT4iwwd4aS96tKiqPYXop7EktGDkw39p9s4oMPq3jqsWse4F91MnB48M2ijWSR87fpbi4ae1M9K3Dhd5wXZLk",
  "key13": "3BPsNiskSfocjBuqUN89PLgNqCuP6xajJmgGymAaJRoBzxjW7Fo6jVo4sw7fQfJXrATKoqRm5SKtRyjt4hjcsY55",
  "key14": "gCKMvKHKyycf3oHNecnw5dR2mJGc4zafQkdMRhr3N4fVc1SrcibJ7QJnsDWQyHf8sYAeFoFAQwZDaRXxBP5pGN8",
  "key15": "5LqGPovYXExDkM6DL5jRkM8942Hmtcr6dvcn31LD8m5sDyM4otDMEnTy6Qr3fCzs8u9kmwXbcv1tMUk4bYgBN7bH",
  "key16": "2EAxQoGsPCC3aJNaG8w5PevpmYFefVwLkfMgg1uzAsqBSiuV56z2Dxg6bhJGXtBjKJobmg3sRD5TFtpQGkvbZULZ",
  "key17": "3yyPK32DBDFdSPN5ER1r12wSCsw5vCf5WsNfZH4Qn1Hu71aPkkk4VGz1guqWdnbbwZDP2qut43SYYEQ2zQ5LFZFa",
  "key18": "2q3LtUiwirKNjreGviguyENSk1FdjQ5RZNUTJyhvDXqEGtAUEcKHYrt1fYpBjxqncPjHTpjriMFbkRyN7AvNiMvr",
  "key19": "4YErFrWCMD3ULfE2839B2p3y4KT28WRfpY1vf8YbyZKgGsyW6CvV7VY5ZS8PhqVDi1HQog9ei1w64VV5aadQeiiF",
  "key20": "FJJnF4s8NAnFeJxeN4bhUGt3UViCoNvA8hDVMXGkhFc8mAWkFnUGuKLtEJKxsAmKMmEhP9nS4RU16f1nztuJLXR",
  "key21": "4yfAQSMavu5xVssrdBb9LfW1YZcyRWRhebar7SwKKvjU4rhbUJLqNNqKxoJvQPEFTVchJaVSDsQKneEumge9YMqH",
  "key22": "4NGYR4quvccyxmZjBT2PWtvFikNDg3Sa9L96dCzsFBfZeCbqj8ZEdYZ9xnVrEbxjvtqRa7cgKXymAtAPckGs7V94",
  "key23": "3aivHLuBaMDySEWtC72QLt6xzyB6FUDdzkK8DtHyLiHstf6d3yzpqjvMyX61EDsf77TomMLoKCqibLSb4DCCgxmu",
  "key24": "5B28N7WzPqAaKVyadqNy7tjtPtYE46i8hGKPWJGQJUFxm2gvg6Vaq9YesWvFp53eerULiASAru8k5Xk9RMmANFaa",
  "key25": "4UtPDZ5YKoUYFhxbg5Ek6EkQMSGF5Jo91jfhzYX4eC7BxByuzJYzUXLsdfJqr1hW9B6ca2AWLs3WybGxpx48bFSw",
  "key26": "35KvwixXE1nE6KsSQezmemzzgN6mJpXwsSvAJXMkdq7oz8sEx4bNzjahB9SSK2fJJFgmSjBrWfsU7XBxvuuVVnW2",
  "key27": "5SdeHfT7Y4WtaHcjWo7xqUga8UHpBqa67Nd4TSSmxy1ZxAtE8JNDQRCCgsGG32X8njotG6jV5tpJmCT3YawPvWR8",
  "key28": "JEbHPDJiqYbxhyhH2eSmRK5nypxdyKP6T465r9uZy2FjBAHszRMFeiDB18UikhnJQWoqTpm9pvqPnHaVub91EwH"
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
