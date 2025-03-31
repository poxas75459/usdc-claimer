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
    "viymw3AQR82mfb7Q9Mmcyrnatt3gzeA3ZU3F8uNM15QDf5xgPMcPNwxKiKNntaFxW6UssuGrcMFjUexT2FN4VMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41FwRY3526t678HubGd45vEBik5y9ckSzCNzkZQSQWEHzMUVB48AoRzP3rDGkEyKWCMg5xErUbEGyWXiHGGvSCoj",
  "key1": "385mVd9HjqNrMuFPtsG9hvie3Q872wC6Yk9QvpVpwpBpkmog2S5uzVc7Pg8ru7FZSRxeQ4fUqPawi5Z8S6E44mnB",
  "key2": "3BbwuRPZSjAtwjexeS3mqCzRtKS1J84fscimF2hjcNEBLKMXXDcGP7pKBEj6f9k4rLNopM2L1b5QWh551c9bUDG1",
  "key3": "2YNFrsPetpdt1bGG6dsdxN9C2AVLTYR1e6asM4kutHb2ARWK2GabyGTehKYCzNULgJDLpnNMfei6fWBxCqANkB7S",
  "key4": "5kpBCA3gBwnXht1sZXAwLSqhsKe7NY1PhR416gRqjDJL9bMbK7c8iYBpzSH147ERzeG7tGbH5hFpXZpVn6u4oNqJ",
  "key5": "3tQKgKFRMRNG9mPYuYG8gnBenwqmC9KePLD4Dj2e4uN4DSCr47dpPe1KD3gQUEsjuKwiQYGsyhrdukHohBpjY3RA",
  "key6": "2GSMb5HCZzyBxvzraCxHbn8hpa8yT6w1YpDfgCr5cbuCfe2JzY8dGH7CGkxt6DE7jy4ZHdBXMhLaa4DBX4BNmmD1",
  "key7": "2DQEDEDHyj68UfceX6TW4zwCEmZBu9Rr3daJMBKCNbw2mQoGgs18rUNEvt3boH6Wgy4KX5dGvq6eiyGzUMjLUEkX",
  "key8": "62dDA16deUVzGq74oyUm9nZ2CqKQVi1PWxbLEirZrysGP2amGgrnaETUiPeUxbsWUajatQ8Vamy16bHFvkSqkyUc",
  "key9": "4FxTCtk1h67eDdeigKLs7vxCdgDFi8S1o7MCWHmH7ESk6h4NhQYCuit6PDV8yMHcWMiKpxggQb7BbqkNF1JDzJqq",
  "key10": "3VyVJGaNngVPCgTuMaDunk41xzya3fokXDtQgG4PeWRu2Z8QykncyEYSEmey4zv4P8YGoHGRgiwjMcd3Jdf7MwKt",
  "key11": "3QxFjTaSQyBhDF1nUdwtEPG36GTXdNGUuqwDSUAC6anuHALpZCmn3gcre7Don3y9kNE67Fm1MFVNWCP3DoP1ZreD",
  "key12": "5X6fiaDiNagWfzUN7N2eayL41Uxr88wgCMaxkisrmmEoRzGDUKZzPJNXvaXLVrg2pmqrnmpeLDVhW4GEf9dkuhqW",
  "key13": "2DeNJMzbLL4RiMEXjqTGm9HyySczFLNmbNFHVx9C6ygwFnJEou1egUzkqgbay7UZ639auHF4Bz6BmNNP6bjyEP6Q",
  "key14": "E4xqSpXJzCafYPxDCSsyHzGu2UCqiPwpV8v97y3UYZbRk5FxNYtSTxY4RWvuez5ioqCXjvck8TwFypsw8TT4uVg",
  "key15": "3V7yTxCVQESmaU2XMKwub3AcLWVSjnuvPBrgYBFYtyCLfWz1tvqc81NE4fADjhPZnKhqWBdkjjiEnUWbKUxR4YAk",
  "key16": "64QWJqnH81FJiiZ2Md5tDa5YmD2qH2tWczeiA32gLMayUBR2qvRkwdDUk5btwdTL7YJQgiAHpMp632tcZgz8VYyF",
  "key17": "4n6M6b6j5vRgVJiWo4qkTfyEibhHe3XdGJytcUJqCRxKz8j6ySVBc3dhBEH3HqoTPMtSUcufndiaWsB7T3EZKLJy",
  "key18": "ErPU61Fkovvhg6e1UAG4hFrjz52xHghviKsfPuyRhsjHQTuBL7yzVHxYqk7CkMeCfNyRghc8y3QNWoM3ZxbfCMc",
  "key19": "YNsHNAXD5bmh6E7V7K9Skk2AfEFE97s8Z9G3TmiQNTRx1iXdhsQZANE9qLeaFyhEqok2YSrN6CE81EdLyvMjWGS",
  "key20": "qhZuSfLhcPjPQMnuShaPm9xR19AjAcGsarbMHmA739twyqHMtd4aUpb82aPuVEtPVSoufNhcHt6cH8qgStFQKPw",
  "key21": "2P1qoaWo2QMcfw1z25s7ZHZsYZ2gfptzMmy8XJQbQqZ6oMXk1Fw4KLcmgmD2eLx39S8tModntAbEBLE1pPHSyLou",
  "key22": "3owEKzv55NBaVkt2U11CrNYqF74xUH7NtqQD3ucB1D39uQvvKsu6NfFLmNAhfRR3QZS3BgZXg1T8Vwpz9JdPRvcy",
  "key23": "5FzMp36TcVxx8Cpp5A6DUd2fUVM8N1PJMjr1gVoWaqu7pgMDmB8xkXTLS6fgxtT7UMEqmPNTnVG8qw7QLgdNwz8x",
  "key24": "5kjkihd4tNupVJ9KkEUZo8Gaj8zJEJLdHZUZrmmYJHz5HyBuwR8vcbTdZqeumKh7erw3GmYgGXtjqVtW7TCDysQi"
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
