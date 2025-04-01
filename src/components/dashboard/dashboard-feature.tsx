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
    "3zJW1eZ47tTyKvwWMwPyjSMbLmPtKQ5JQKXrn9vu24U1aARevWvWkj4kkfuLxtgt8fQV5Vwvz9HYThucCVBgTEJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGBCPLw8LZwMPgdRWL1gQyaGMjs4cF7uHndWYd9rmk3frpy4DN4oS4mWDuGk1V9LSLFYsFa4teCU257Z99t3zXp",
  "key1": "2fV3NwWVXBuCAzaQSMrEeRDez2p7STSPbjhsmf3nuwUuuaHeJn9Nc8eZdmmchMxpzmqpHuDcPJu7LC1X4QCJdWRX",
  "key2": "dzoZ1rapzStAn7Ktn7ZFmN1PxBZKidWm1fYb5WLQah5wCfo1fBZbtPaLdDze15PLHWuS7b74uMToiTdePGZWGGz",
  "key3": "4UcvesVr1eWmGUhWEXGcAihxJNtgJiu7njsRuEFfdvAUrnexzj1rwffXq7AFwwmpkgYBdBnEWqCSgyh6BESm2D4c",
  "key4": "5Rmi96Vid8hie3QQk1jfVGgERM2vNuESpP2kBip8XaoJQRNrHeaUC47x4ZCL9FMmzxLsMyGx7XH6w9m3AGZCQ8qG",
  "key5": "24qvHh73uvRSpsUSXuKrx34yCZAsaiXjVg997FTxUFENbH6p2cTavv3KEmtbJNBzJ18GAWC4hu9A3j2Afd81fvFS",
  "key6": "2GogCMXu1c6KBs77vnBTQarcopimtxP8N2V5tyVBdSqCcMuiseEmLqzWEWmEQ2uGkPzXruSZN8aK3vqMiKQLSAAb",
  "key7": "4bHe2JN6JHNJC8HRwsbApZxhogofgzZA7sPFmeGXFF9DgUnB6B9Xpq5Y7w7t6q3MZiQoEP59xdvaZ9zbZm8ZoXVi",
  "key8": "6B7Stwrdnc3LnyYVDpdFXhUkxLBsdLp1nsyKwY1b3gdUVfvk3ChQBpZRBnighBrpZavtTeuxrM8LT9SXpbbTEHF",
  "key9": "XHimzRUT1PAWsr1ypy6CwS9kFAwLae4xg3NcKmfojQNdvawNHvb8XZBXEiEeUysnVeY2MfheLkzpws5aweG8JTd",
  "key10": "Q1ZdM2q1oCn2MtyXiDpjb1SygF4hsM4rFUvYYuwGRCC5rJsGCYhE4wFKiWVrjhHoykcDgLZ7SA5XCeSjDtpcXuE",
  "key11": "3NrbZvJnBPJUsPTWuvLGdQ3NrxCEQebX3ivthM3dWPFtsjs7NkMrUu9hmNbFQeNcBqqFhrpQjb5PQiuZh8EXYvRi",
  "key12": "5y26LNFYAhia4nbET38rhhSTYXAMJ9FYCTEh7QN7vnwtWBXbm6Z1rHcFuGLmHSQ7o8zZQjC46FpUPCbzi7oxZkQu",
  "key13": "2xjoVMSsmm8XKLUQhFVSEN1k2aDft8Ty3HLqzSNa47msBmmApb2odMK2DpbMWkosK1Cjva73SRVBcUikkc5LoRC",
  "key14": "4TUNT1EZUbkd9Gv1XJQ3ZNHLQrarZH2FFhPeAswo96Ub7eNzDCykcUoSqmPZEKBHLyr7yNhpsMe8Pj3bWd3bs6dE",
  "key15": "4n1VUquMi6r538AWpVJUmSZdmwtQ7byDsqn8CmyeC3ECnyFrgJKY3KhY6p7ydvrVVujjnKNBevxnZkE61bFQi8MN",
  "key16": "64vXg9oLjBd14gWfhb6wnYGuX3LMq8hu8wAdFDs3Wcg2nFks15dTKKPYvhQYQm9WwyeuLhqRPeRmCo5FnR6e6hfC",
  "key17": "aAYKvXR9NTiLEJ1V4NLzmQwe85WUnUdm43sqonLnGxJ44wZyck7exACXeRMjh3cn57oLXudTM37eRgsANGyGqgU",
  "key18": "eB2b2SD53WxbwkRttZr2xFZBWKo1LemZrmg3Zx39YpBK2XXUfbdXdo94HZrRfUbMoh6yZR6g3wZuAkr22hAx9oo",
  "key19": "JCbtRKmoBdTSCyrxUEsswU3xckJBQgsrZC2y66HaKJPY5cHEDsnfJYm62n3cXoDDMhBsXTbvx9EN4ZCdooQ11zz",
  "key20": "6kfs15Xui2q7TFE2Je8D51LbGwV7iPpsJXoaCRnsRyRoWgfnr1iCnqbgVzFJwBUkQ1btYvu9w6ZuVsp2WS1b8Xg",
  "key21": "3fPTJCLJNKJMt44TscswESzM1cb6DSwnvVXVpyScNFvGyccoJMGHGqtxLhoqrD3uWgFwCsCetwLUvmCqk2b9SpMV",
  "key22": "4YuHcMjPfbF8SKzu39PQeVmzFV8xBXfvNoYMnTPY5KiRJaToM9LXX9DhWZaHQ3s1FfMzT2DkwkX7npH26jgWaXBN",
  "key23": "4Le1h9nhummXDqVn3XzM92MdHNcq4mGtXQBEdijAAzmTZgFxgniUjf3wfcoHCXddWgtuX8zCkjNihZ8TaXAV56hE",
  "key24": "4zzREkdBWxrRkbjvDb9wU82srf6TpJDMkjWWt32rpT97CX8Hcndd7gQDiDemV1LDJ92krCupL8tyMQfkok5TjSB8",
  "key25": "4RBui1pKkDQM9bejmVgr2Nwr8zAM8yTMQuZEjS9FNTdK6UXE7VqdmYtSLx8bHKHC2WnnaAi5HF4rW7WrwdXANgXs",
  "key26": "qqhbUrqFV5LRTvLh6VQnKd17kYf73hJmmgaVCEgZFjSQwitVsUDNCknf193pywF8wV8KyaPpQKC9unLyH13bZXT",
  "key27": "4njJRNLSDNLoE9DA4htEeQMVyXzJMsiB6etFnFwsX24b1hCuZxTpyX9zzk2wfHFUCdtdQBubfvhAZEVwLVSwQLwV",
  "key28": "4rfQYLQdhbmNiGt8KUCnfVDRkwuvKuD59ptUWR9i6twtLj5AU4QGanB5x1nEDDkQBYZDvW4Y7QbeyehBpWJ5HePk"
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
