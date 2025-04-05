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
    "79byo9xoeiotm6FgMG46nJiBqfuPH2k1Wb3P4PnkqUfwk6MFDkoBMLtMwtVi5aPkh9e9gtDGoWCiBGMw14wfjoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nQ1J6MGSMigmJ47ukpx4D3wrUfFfxWnZWDJgdQJhKdmKMmp1kpqXF6pK5QF7tnTiUM2yjax8Z1Si7SCoYyZkF5b",
  "key1": "4Yd71aD9XqCXufAXnqL41JdPK7VNtEoS7z1nWoP4DxugyABCoHFgEqquJM6eWeb8TSkZ8QyHSwbD74Uv3K1JLSwd",
  "key2": "q8dDWDaNsSv27tEPNHAtrPukFFCRwWZE7ZEVYYs22mpLLxUtNTckDoDDum6gwKAKTfyKtahWSGyE9kSFBoos9fm",
  "key3": "r86vWyQLQqvz8rsWwynhMCPc1DoUv2Z3HDGmub9UUroh2p2s1zdb1Ff2KFg37BUdJkaqW47ftnyW33kEDWYXvDX",
  "key4": "2sXr7zUDywF53GN53YkWrGaAkFxBnKJiFWqXCiXsjREDyUJoCStF6vsFL87g3NDC5F5SLNixEfGTwuLEQXYuRxeq",
  "key5": "5FPkTZCSgpcYV3UZ5LPm3ridFKSd6sW22bXvPrPwTTnzk6JZ3Y6wTVNTLJbacJyfYomZNpUxLw1d5au3xNgLYTm8",
  "key6": "4zdm8cJqzx75UBn3yg2KTjU2DAqerhKUsMx3pLqaqGzcnB9QM3tEHRRmhjsuEf5xcB1m2hWuA2hvJng7feD5Mw26",
  "key7": "2PgsYk1yXvW2UKfygiLWKrNaPdzNw8TPLfV8jfhjsUsZ1hBwQEGVC5XqrLCGLgjDRY9WAhSBwHLPXZgodHMWKaq4",
  "key8": "4FZy1NsRpu7jYQb6BbB3GsFxXV73fmjMCcr3nkjRuRktoK9KTe3S8QwYNzfQLBQetMY1ysXrosbtzVbVyrjBGLBi",
  "key9": "2m3FWrF1tfXUPesG6G3HVJikAgXYTYTGPjgDp7dT6L4QB8fUhNApUSogo7ey3CM1Rv1x1wt73wCSDxc9bqFXP1Lm",
  "key10": "4ZQ4ynxqD8o6iSyWsfRtKi16zXTe7GigHPsugYx14LRoWcPxvsczsyLnSvQ2EdJWBsRmn33h29CrYq5KskAMUmD3",
  "key11": "4Re4CM3fFkiaJx8UVEYDJX1h9oGxunfYJvwqk6WEpJg8RrupeW162SihD6fJdeNKAu1HAfHWDU1nFVS6jK2ujHa1",
  "key12": "n9g7eyUeRTB7dsL8bZcWFTaUky51eL9ibgXW712YXeLUBPGZpPcs5bpzfyNNetSM6z5tapgwAChY6ahekYsV1AU",
  "key13": "bGfYs9wbDcyejhQAe69eQpSQTEfwCo7mTu2rsKFrFpu2JXp5Axg66cbtZp6BnpTmfFoD8983SmAVCLqsxbN5NiT",
  "key14": "3YEf65cfXrSKbZqL3zayoQTgupc8pNEtWpdPJJTgfz4Y2DM1XB2c45XRt7MNXPYstuEMFMDdnRi3eNozDQG6PCt2",
  "key15": "5b6eRVtQZZCKj1Yy57KsaEgZ7H2zhoWm2iKWbUyukWBEP9gCszpFNRwJjser4t31vEKCYD4g9rNYSU7odXGXFaiv",
  "key16": "4GyFmd6sKmAAQwr6d55hU3e9UBuiL3iuTfNEgYrPHQ2zZ2V26ehsPHPNeG5K3PDCZvdzqWwwsbtTAZC98eEtjeZX",
  "key17": "au95rh3Q4DTEgMn2YnXo6tFGbjyL1rRjEPew3WBj8kjsH3Jb27BDhC1pYkhoEGv1PMCkhFA268ksujqunbPTsff",
  "key18": "5CpHtQnG1rC5TVvwS4zVboLN3SJs3H1QYNpuBDXMhitdzV1vgug5FC4Uutnygt4iF32iaxzfjKwtiAH96gsWAogw",
  "key19": "5nwBbtPqkeqmcR6sHsoe2jtATUJoUKtU1FMpGd4M2quSY8Rw6ZmLhCrshMz4DbtZK5XGWXq3r7XVefRmSuv42xjw",
  "key20": "3gYnY1yESAXwnFn2aw2WWixXCGoNjUr15mc4scr18aXC2xJhis2U7xGw5tsmeScvJCeh4zQ43muBbhvyDbRV1385",
  "key21": "3xUfDN5wUGjg9NGxasgVuSc55igrS9foEZmd2oEBnFjSqpZKHAFpaTfxsfxchLsYxBjRTHPCvR1TEWKuhVpoFpD",
  "key22": "3vBhHry7aF7wT2GgSGFfkLCLwiysFwfkABFZ3HRJi4xhH6s8d4tfPgxgtZDnirwKTs9EcGUAb8f8VkTozKCe2g2E",
  "key23": "RNzodeVDWxpzFy1Rro9myqGYPqfNc8b1DDJ6U52SVDFLMuP5gYzaiJi5r1oYaSqAKdX7j5zTadxem8CQpqM8Wsu",
  "key24": "2XTMmNWtZwv18TfrXwZbi9UgXPSmTXvUTgn5mxkGhrXPy2at1hk9ZKVyHzfvP3ucZsbSMpx1dvp9kFbJMSoubnNi",
  "key25": "3LxaSbtccZJWrrhNDVpwvYAD32Jo62nfUV49ByqBGY1k8tbGFCrGJbJXGWFDHDn8HpkU6iujrqKHNea4w9PegiuN"
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
