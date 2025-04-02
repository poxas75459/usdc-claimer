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
    "3y66GRM31Epq1F3QUFmD3W4FPnwfGpUpFHR7ESGJKn2SUc7Zw8saEz6yAW5xo2iSzpkzimGRQ9q9Ye3vemrjAyH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMh6xPgj4wxUEgGw62jgwGrRMZNFiYRGQRR59n22FjnbJGUm4iEuMMDhZu3172qEcn5mixpY1RhvT1BtmWo9fSa",
  "key1": "5GjwbD2h9Qf866qssbzcmn1RPVcJxPHFYERMvNqGGAEou1MxPKRPA7ou9Tqs5kQZ6T7BbGZPHnGekvrnBR43x2ek",
  "key2": "4KGwGA6bHH7B4fFVUffJFpNjD3htGv947VwVCQqUxRR6pXDjeo8DvTrAaasa97UJDvRW3WqE9ZmerKXz4QZAizQ7",
  "key3": "34cvtaengnuwiuoeS6C7MvbL7pcD6zautDPEZjLKdsx74DYJiL2KC6h8Zp2TfHPVz8K9MhVGQsgUv9QEEVdfHcoS",
  "key4": "4VrS91SpALb7zZBSTB95awzG7d5ALpntZoVfsPLaZknq58BiKMwmjGfrSDhbbJ657yM2yuQVrZKpcgsV4G1j1hkQ",
  "key5": "2cxJPRHdETsBaEeVGSC6szK1Tqk5hr2G3ZvFvPuqGtYMyboiEJdSJKkKmK3EZo5QTSQhzyyFpzgSR3Mf82PGRnbe",
  "key6": "3bskN6UMsJgaPsTQ98izQeiJ1tNH4C52W59ykumDnncZya6Ve9ttGb6mNgaQ43uBuKUYK4JtJou6Pyj3jmmbJWng",
  "key7": "58FNZEdWP9BuFf2v2391vwYjus6aCZNXCmfjTEPoDKULK1UqvGywMqm7rNK19E6PT6kT8jDPjf3XPr4oJTyrXfDt",
  "key8": "3mcHjQirsCS4PYsPFJTPXJWCgQ8QCiqnXnuzuAM31Y11giBCFTgiVDSwhUXc9auGJ58c9tGKpcXKHvrptkzsnBXn",
  "key9": "ukEqzJZbZv5BpSyvX6vsVChNqqrBss9k3tVXd4T9CttXpZK8W2MUshUDSgcbWFg7VyYqP7F8uJqyV1qJWKVCA9t",
  "key10": "3NLoE3AadsFxV34Nv9K5t58aGw3YSTXq5bFnNn2tKWcAchH5oqozuyMpG48XiariWGHE4rtXMenNxDrwZByLr2rh",
  "key11": "3CdWaLAxNeTKE8SrvfHfcdKSy6NJFNCWBjk3bekYSHZeS4LvGb4Lu2dxK1JT48y76BSJsZMwT3ydUn635ALEVUVE",
  "key12": "5YUFUnQYSg736rAThVATNymxgUai9LuJdfRw1zLZfk77ZRm14NhHLuQDimxxUtg2YAihNHJzX5KUz7kBYJyqUq4M",
  "key13": "rHnT5KRxi6V71DRovdMCLeZbyf8pgSinHid8m3bFs7qtDoRvu6CMkXgX3nWJod4jjXkLZx1zfpVHRy4m3SpmAPT",
  "key14": "3yyuDF9mytxkhdcwQZUca4KKBmgc8DbGGS8LgnjdwSh3GrfNXkLLxDezqGD6uwxtXLkJ7GbL58hvxqR7Zq3wm8oc",
  "key15": "3MNWua8k6QVQsbPo5WXwhBQwASyMtBEqZXLdixGSFA6u68HPh4W4xdLRRCcNKN9NP3vKBhGkNoH4UFxmmgLXpbVT",
  "key16": "3rT5wZbXtrVjbGZxv78fqzHG1QxbVMxNiALRhE7vVGVkcpLd5F51A3XQTZygnps7ttWaR46nJ5UViJ22ppqnityG",
  "key17": "5mZxrY7aczzbA8Ky3eFvyNFXtsEatTkYEHoD2rmfrYpU9mVtHf8GF3oZUdqGeiAC1VYfDeNeZ6vhnY9jpAf4MeQc",
  "key18": "5N2vFP9vV8CnUakyFQtVY4LERNSU8emnViTUmot7TALo7VKHPRGt2aRS6BHiXGPtRUXbzAYWUskmAtmXmZt2PGco",
  "key19": "A5ibDHaQLfjBttyt5gjox8ahQ21ohDEmtGNe5UnNr7SzyMGTvDrqRK4H2g5doZUrN8mVbNXkN4TxuT79JLGiV2c",
  "key20": "4jzj4tcc3eXpnZ9Z5xG2nX1vZks2FpE9yYU9CpCZvK6eTFAZMV3mBLJY9DpcdavkG7229aTJE3zuy6NftBUCCysk",
  "key21": "61wtZHeBdrJWLpqdHbYCr38n2oexfqfY6ANmyoSz2C9LmBeH2UEzcLCFmsiZiNBgSyJ5DWD5WykufkFyqLgTCN71",
  "key22": "QzGPtpLekProbzGXerycnYvvLEbTfbXwYaJuoagpF4oNwfF65mirBMmrNK2zCzkEUZxCmHyJ9fiCCgbuNt24y3x",
  "key23": "2dTvrjh6kL3gj8DGiZUM8uqRujAFWgUxm3drcQGCXnR3KimTfSmBhfRZioo2aGLQnFVJUWUDYcyCEejSNojSRo9F",
  "key24": "3XF19iNZ3VK8fdUiBvCUBkzxLMTJgP2PTV5veoUuzTxugXaXrhtrJ6sXPY6YxUMWzjZsGcny6VaqCQdkXEZUk1Sp",
  "key25": "asyHwp9vHoaSjHvenZXsJKtxcpDnEg1LuAcfVMGqATUdXkR7CZJLuevC3QdB15ojQBgtpNmW55MjP1z4HG8PQwC",
  "key26": "1MrupGopFTJ1sBpjCdGW7ghnFGSfDYJTptGfyRFvAfe6c8v32PHwdhggJbbNUyvhomiQuhHjLpzPuuDuDRifzpG"
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
