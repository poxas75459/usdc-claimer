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
    "4ftKjLeixL3Bu6joif5z2eSzfNqCQPpgxZxUtMeaWwJZXLsc9p7WuLrd44fr68adoyxHMCJ7BmpBnu3TtqDwPxPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WgCdLWm3FRjQMXqut1LvHLjho7xJyrKobakwMjNWBsuzd9ajk4UFecSPepV8e9hWT8NrfqVnG6Z8uiTxzQyPfsU",
  "key1": "AUHhECasVgcT7bRyrdYe7rNRq5kLbv6ZAnQLWfRi7EwX4yCXcsxuMJ5J7NxkiErfCS2rkoRe7fZCJjkW9B4VkrD",
  "key2": "2GY2JFGfLJdTXNbR3b6iL5XaSCyevWe7QXCqvrn4srq9RtwYZS8sRQK7JUPy7LnzBEAabdrf45KGXhEdYvUVRD29",
  "key3": "4dUwWy5Ps1Ep7JQ3SPa4YkpinfM6SZbmho8wAJPgr77gH1QWot39i2JUhbcegJKtWBKeX2XR94tpgsBvLJtYHfrb",
  "key4": "3kZCyJHiSP9XPnHiauuTZ1LHc5AXdq7XQf5m1asqMSpy6wi5zQtNfUiNF2MaNm12MdE4nVgDZgYn7yiyrtwcM8Yu",
  "key5": "4fHxi2rDgpndFfzj8s598rg8c8v1bQNiSxM9ZqhaHLX5xaUuyaSEgj5q1oqkrEyeyeqVn3v6QDRHUhCNPpGkgna7",
  "key6": "41syuxxUUCRoZk7EFbhtKF5XeEL2zh7FNM8qQHgm1VydrnutCiYUnZsLJhrQ7gsxFMTLvk8XASmv7To3VwJRm3bc",
  "key7": "CV93uucydyRavoe3itveaDx2xj3aPiLtaJzCZJJoWDpZakUPAmn9ntFzzHRYEm3ZqNTmvCPpDGhH62pNABqk4tT",
  "key8": "2asygs5QMmbijuo1QekGpm7SQV1WQEER81yqV5QTmF1vR7o6UoTCVySB8CRcnQYggKUWjZ6qRQC44KwhC1jVrxdz",
  "key9": "3D8r5UFDHCJdEgC4QVRD1Crt8WYheS912f7mdc4da7DeEp5ZLBab2AiZAPiNhwKu5z9VutJBug7piEHrZnCHjQR7",
  "key10": "3pCMLykb71KELwaiEL3WRmSkua4y7GJEkDVzpWZpKkRabopB4RFTmCUKJifseHXK7sa3bfpRuorCwc9Chq9tQeAR",
  "key11": "2hcNLpPc2qZXAAZ8322ZoX2KL69tJtFRKg5DnGgkQRHCG8CaFjFShGonuMfBTgzvRBdhdqkRyRENAPcRiV6AHaaL",
  "key12": "WXYZ5SwUA15YUwq7dtD41A8Z3t4XVAPvqnd65NuGjg2Aj7FRYnY67Pk9BXhnaSviphP5bHbjjFFiKBSecnovLXU",
  "key13": "yx4nBoxG7m2Tt9hMAD9SGyiySEV2UES9pnLg8VfQeAoygT2ATKi9P6AeuxHUmDpB3b5UzweCpzWi3N45WEvAizG",
  "key14": "2dMZjXgws1keVAdYR9JqnuRxq7iGWqfpxvd6rb54yAFiUAJVNQwVYqoRjC6jiwqFRf1eeeQvp8myDbf6pkEX19xx",
  "key15": "5He1BhaHn8DaVybewewheKs74JftmXCoo5GZfRUv3L6kxrsbZqh1iBMLUGNf7CYddXyJWQWg73CCG4B7F6S6bHmb",
  "key16": "2pEzYXWcnGUNgjYuSVGWjQJAcqpkHhtFGaCjV4ppWeRAoJRzMMZN1ACpm8ddj9nHceb9YuXPEDgNTK7bahUhp31V",
  "key17": "4F5DeBJnDvhjWFW7VTRdURAWtU4sQxsVa3od4mzgR21e72PkVCCUA1btnefVqtJsxGpfzuApuWvzA9HnAfAEnFMN",
  "key18": "4MvDFpUMrdqTAqobXtm9FARNhZWQY48fKzDcySFTbMmfRVhePLr7sT1GpeYhkBu5bVX8J7kySjzqMyJw2z1Z4MBD",
  "key19": "6R4qxJiFG8pMt613jShh79ZGy2Pykc2UveP2Qa18n2hr374naYhAssLa1q5yo7ijp7YUsu2RNrU5FejQ4Vwrsnf",
  "key20": "4CFWndGm7hdVBggKoMNrSHQmvTCgqjmZEAY41aHwpG8aGs7bXUoTVpDhgKZ2fYjk4kqPNWGhNA7edkVC2siE1hyZ",
  "key21": "5Vw5XmY9VAAkND9vnRQwDnTn7hAdGEPtXHfvQVkDDjgudskuPqDBZ3ugybsWhywpXXgqWha8rdPT7T3jnoMj28fs",
  "key22": "4gYKiWTSUeh6KePEDeaVa1byWfddkqgnodbkU71HNSVp1LhSMiAeMWkxVBuj1WiPMA4mpobmJCYAgJDBKpnvdG2D",
  "key23": "BNVCFJg4Wr6DKZJ1DkjrFHpjpbduqxniypA7ysbrYDwKEs3iF81L4MuSf7Ri9Ry4karR7RYAdfFpQTjhrfnQWof",
  "key24": "38W16CjBk5YHNf87K5hixbdzZCaj7QTxzMjZqGjx4wso9pxMnckN1gPzK7dDT4hrEp87WYicEBGYcULhugsWPRXF",
  "key25": "5Fzk48qBf2KPUhWXSc6WEPaUrzsYFA1xe89nzmNt9fC2UMzeveeUd2KAeBucSt218MpFanCgZT12HaawPYmbjk9g",
  "key26": "5myRSnXeXu5XY75eV56SsHpqteABfGHSGdaBXUcVzYuDSoUr12673J2gdNKXgtiEayKc25mzTxGhhU2CCMGn2nhg",
  "key27": "3ti7S3Vbjk5JQSWukmmfTQJeFtNYoNmMQMyH3pe19wuD7n2bbeLD2gC6zSav38JsVdtxBz8G8UvnfaV6SJMbauDY",
  "key28": "3abU8DsU3f2tTVXpEZ2cmzt8YWZdhtWUbxWmhAtCgQruiurxpz4H8uxH3TdoCfF8i1HycxBaYFRVzTtJcjvuJXRJ",
  "key29": "3HvLZDVf9AENExowg3yq8BePBUmaumGeCf9Ash65nB8WSen1gBpbpVNtgJJxNkgcwYKyavoKbbxYNrqDfm3RQdwG",
  "key30": "4p373mQjE511XuCcXfznUQ8a8JzyB7bCoK8vGeuEnCsZr1zHYX3Ta66BVkfpuEjRA2mpQrpZdVfQcDnSfoEUyL3v",
  "key31": "ipgazEFbiewXbSNtroVkJRLri4DApgGUs8XidhZx6KXGybLq2u7R2c49SJdXwYxu18RZ9qnEjYYoBhbWJBwfvyf",
  "key32": "5NRhDtuk1iUtaxpwkT8XCyeDgx4RXtDya8PMWhvjgg6gHZovNj7xtt5qRdZVopRVkc26gUHKmiYec2mVkA3rmHZd"
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
