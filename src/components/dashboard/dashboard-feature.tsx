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
    "67fPwLsBoEKx6Hc2Cv357UiydstwodmvFKnvZ72WRMMyNZVGbbHVinb6Bc8BpMEpjycsMmnw1aAkQFSdmq5sjurk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fc5skimL3mshzTNM9uroEe2zWFeFQU9PQEbLtCX9a9XB5TEGC7eDa9wWjGfVyjCVqL8hDpeQQ77Qdof4iraR8hV",
  "key1": "sRkKfJrwZ5DuoydM9nhcoFG7m4RpYbXQFwag6M83FLbqVBA8qgggPVcm2rpn5DrSfpBwYKVpnGg2Bt2jUwWdYK9",
  "key2": "3mphufKpGBisbQFr9A6i3AadqKAmnyix7gLT4WNPmUymiV2smXGGAYiND5HwrDuDmKABh3Cu7WY2akMJ81JVGWFm",
  "key3": "36cctdMw2X6PsR9MHNPfqRj8ZHKFBgx4UYeTRsj6ha9EmyFwAZ89h25iQMdk9wbXSpXQxLYQ1VxRnDdGpdbr8E2z",
  "key4": "527x9fG1BzUq8yWoT34aUSzFM4sphqMn2Nh3CqkdX1g99tWKNtsRK4SSpF2HfLQ43EZ6RNXJYors8Ndohe2KAhqC",
  "key5": "34Pwqw977MBBeSjtGJ7FR4qeWJzwiB1TynpjATFXdktVuTqU5kvkmjsY5TdCH3hodahEFtFL5oEqwBaui4i9qawx",
  "key6": "5wMeZzjJ5qN5bsfGBmBVuNS1b2Jfa4tUYzGDCSBjAm9Z98qqLP2tLy2fJ1cTCMGpffBn9Xjm1YVcZjB46wQ9Lg6a",
  "key7": "2Q2R6JmUofdWJEMmRr21nYbt6P8MCFtx82JYvGLc8UhDfUWTwbqQW1AtAQBr8FdppUPgBSkRmVsNBwWvawoSLmzv",
  "key8": "4b9Ds3aPiBFB5YDm2rqgLuKV1VunLPE9CPK6WntCfpTJ6UKURqRxs1xcdFvYws2iBEdwEGg5KLRubYZm9zuWNCY7",
  "key9": "646L9SbGLisHXvqg61LmZbFt71AbpwKShsVzo4TB4yT7mMBSM7ojAcPsRr9xeAt57subwh1U7P1fTpYX7VJNWYDE",
  "key10": "4evvz7m58Wb9jmy536ZN3m93vf9Q5qCg6CxpPRskJVmnHkD7ZiDfCS3mDJbfzwbBWAFcMJxGHw97thsYU9k8ykrV",
  "key11": "3yCr8JUu1S8u7fCtyFsMD3JdfuPbcHJPN6Ee72AmpuwsNLwh98CX2yqfB3bR3rwfhapEbfnacThk33RYhd8yNs2f",
  "key12": "4w25auJF25JmxXSa1Gb9aYsGcxqdmENscM1T3tPahe3d8zELM1KM8YP7e9uAXem6Eiq3iwgY45p86mgDpPk7S13S",
  "key13": "3Ux8bKo8K8PRCnjBymNGjKiWbgbvToAimoBvTyLNs6tgK9dbiB2AS1Gf6cddot75xjVEj1etgbTxFEDsB8UKujJo",
  "key14": "4aewgnGfyxFVfP19oKuHZDn7AnpCSLdPGxW5NvVnAJGtVGspzfGAgpe949m8cvYe8btbZNULw7bDuQgnzBZgDN6R",
  "key15": "4fETkBsm8HY9XdAUcwyGf57hTqpkL2JjLCfAzYpxjca1vRrw5S8ioraqHCmLqXfwLJSc9eYysVjLpNBsBUMqosbw",
  "key16": "5kFTGNKu8j3NCBvCkGQV6wCbtjmxiVp86Ui8LRdFhg2PZu8D5D5u4oJzKayfVJ5sBuPo8e62coLNPsHKPrCvMojg",
  "key17": "4toK4PkFbpvYEpY4TJajr2tv1uq5c6TuVESM8bvoKatcJ4H3awYKJhMYrRrZwiWXELmxMcNuoxrgpRHiEC32G2Ud",
  "key18": "3dLuE8iyPYDHZAHM8pn5C2uBjeJW5cEz1FemCDRc2DS6uWzZ8MpRC2GTuMoVQHA3qaXQoWpYRuEWnY536Hfb7goG",
  "key19": "62yctJxyyWhjXnUWz11NMjrkho4Etv5BudtM5NRSNY7FAXtQJi7RN3tmVUQhATkF1mLy5zYtTNytzdc9Zm7yV9p5",
  "key20": "3HAJbzAoigvYwYaJUt5g4vt1iz2y4EeAixuyxnNNtbUaDJ5jjFDKp2J6LkiFe4ByCtXxAJK4WHcs81kwXbuuSVGz",
  "key21": "3koCB6Cyr7XMR5wmtzJ2nc5qxcPaiCXrjPVVoHCBjbxiEAgn2u3VxmTEFwNfzMSKtenQKpdY9VjthzzL7E5Fwmp1",
  "key22": "39XKKcHo969poJQV4s7zcMCYeQqnLnn3JxMFmdwE7dkL9wiWnmvbbXn5pjSWM5Sb3SPmG8eDyvKkomgzGY9Mtbqh",
  "key23": "36PcW83H8j6qGcHjW2v8CsmZcabwpCnJvwrAQjhNUBCUp3uxFKPEnpxSDFkrpTTj3DmwJdd2K6VT7GjN7Nq5hjdX",
  "key24": "3bjmheaDv5rzp7BECs41wALZB4bEmcygNk8Bmrczqh63ztzF4xP2eVQ2eyB9eQjLybHd9Vyrhq3cFnD7poBVEjJT",
  "key25": "2PWVJRafZ22UJwxJGQ2nHv4ebC4NAtPcLsZJS6zNsyddRkMbGucKymShxQMGLC6Kb5MRbtbg18kasKoGNQf3XK7F",
  "key26": "4L4qCDpnNooonpoVZtetDm7Ge1Ncsfpq5BWUUxnaoTay3ZMtLkpakPcPRpi6Zm7bVNBfaZz1ikaAqE6UyCwCfMPB",
  "key27": "2piCyxoZbVfWZ79bpVLiNtfUsGn3SiCPCsFTuW6mC68Q13ABTjkkuqTpqHP4sfrAM69uSNCVKeXfEaH7LphucqxF",
  "key28": "2SMfgQGCwzYcN5B1VquvfdQHYcCwJUV49cCWfJhTdDuQ6d1WuGpwsLrSG1E9DQYQCWh7nBBiAqbsh2bbF6gjteMn",
  "key29": "3kS3inCy1F3X8GFhjmRZA4xkhmGztCstPmVSZRR8LudU1jyjVSV1hj35LvSxmFt2jpcXNt2C4Mcpy5RQoeR1vS8E",
  "key30": "5PwmmZ4VvykQBHeZA5EDi78gVwBcxjjwh94r9dqR4hAK4Uh4QQiizBxvV1X2KUEX9y5of5koda5w9VqbkMBFAE6j"
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
