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
    "HVjmfUVWi58MVSkVLMGPvJpRG7K7bw1DDSTNAgsrsNAabBK4ekss2oBZTMLqnsoKngz7yaspd6DHxfSzZUzPdhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VvzYWgoYv4niYCwiircrbeizbfV26UMpM146SzSPmVnGiZkSa3D3vApqWheCf5NfYhC5fAfEFWYvP9aTxFrJZTr",
  "key1": "37BTtgL6ziygsg7EdYZSsH7rqj1Hfd1YRY5MAgE1SMRYYyBTwNYGLuqYv8zvWQbUHBXttpZta9RMJG3QDwQuvbcL",
  "key2": "3S3RkVk2Jxz7i7BjtjeEQRsi4NAEgM5MMai1nBPqKpQTxiywrZmgAxxN2o8LWk5eUUvgdUKgPN3o8DrpzbFusa7r",
  "key3": "52QrRxo1mCgQYQM85ujSMrRXnC8DPmUmb6iipXCnUktrY8Urc46pytU6cZdMhn6YdGWoYoYDwSD1A8j5QFCBTzFn",
  "key4": "FEy6aw7zkST7WL8iksMsWTmPg3P8iYQtoxhA9m66jBu1eYNgxVk11wcyJxiwKKs5cUT7eua76CGtrMMkvbLNo9v",
  "key5": "5VSoMxpPeaDepmSjx9exFt21dd48oMhphkL9ypujHaN7QQkj6pbHDSCyjpVduBormw7cJCjpZf55yyv7PLsj6wad",
  "key6": "5SR8A5twmjBBhq7nfoudyPbpPAFnJxzu1UiSFW6xq9pFprk5t4Y5eAg71ocYtLtL2GuCMLTxCx98upJQAhsW6kmQ",
  "key7": "2wgpDYoybDdAxRht8VacJZzcZwmp2YzUm4y6CcWsqBBTd5qoU674kKNCzEwvok24ijAUoJFCLCG7xp7ekRFmsZeQ",
  "key8": "2iMnhWBjGpyxPPJ2tmLax4vDkJozjogSLUJVMNCgzogVN7joVLrTbjjoXnmAR7x74XvS5HbDNChbUFZex9MgkKcN",
  "key9": "4UtRcaxFz6RRgyJUTjQd6gYcCT1Y82kghfBUM9ktqBob7qqiP7UsDxM1sJCQQz1BETf3zGNCH53ztNa1Nj2uNKXj",
  "key10": "5hrH9EP5Mz1NzwDqEPnRH8ktaambZkqbJjJhGU11FevpVRCjQ8fDKeHXPdvHcYNLMzJg94LgePdmRWo8WdHUBg8j",
  "key11": "63CQquNxRN3QQMsitiSTk8zihVrB8uVTgnELkDb1Hk74czgQzDnREVNs8r4XVQ8KvawwGyAjrcPzQr7duuWVYSxY",
  "key12": "4VD2e9Jfo5bTw1w71cdkdqjU3rxp8bV1HC9tPfzaTtsgzTowZ1H8eYZCHQc2DM9y3u25H3zrwbHbSEPMcxqus159",
  "key13": "3rSQQDoQDEeKVNAbiYwP52yZP5A3AXYeYRm2scfQxkY7UWV3x7n9HKnfBfWkqQupHw7rzwCthKus2tPcUVoSnssn",
  "key14": "2viWPLsbZL7SKejV9fLoxoGVwrH2aomkrd5jW58JJ4QFfCgVjtRd2RfQy62uvJo8HNwKYSMhrn2sPk3TSbgBZ3js",
  "key15": "3G9vrno52eNFAX6W5H4T6wzT58aexrm374xmzZwZFXcuNceMKEpwqQBsm99J6WTWZMpS4RmepNPpnAasXPABb6W5",
  "key16": "4CFTvDLDRbdJ3wtzvfZt5Dryv2eJGpvkewGG51E7KrNH4Bjc8Y9kZsTvxZDcQ5Z7etxLhbMyvDcgrVQyaGNFsyvS",
  "key17": "3zKeE24zgg1xLppLEW6vxoFpJxerTcWpZHHx42zdEAoTm77AqmsB23BBHyXNXjhxBUNZGkJGghMzzZMo67qZ9Cm4",
  "key18": "3q511CGAx3cseF5PBwCnQtryGgmpTvRxFEYFmcPES8r1BUErjtTSFeST7kymcLcy3WHfCWwoCmyiuwkbc8aifVia",
  "key19": "4gg6hvYZnziUTPU8533yrC1m97oCHhukfmdDCKYkLFUUu6tt2Cdty8BCa7ts3wBTAaof9NVwdnUaWmKnMcSzpy22",
  "key20": "2tezdSohZyU1jvZ4atkz9F68YYjddUdcWgR8U69So7S2u6u1J3Z7h3H8qTnBKLrRzPQoc9RnT6X2KYwWTzbwDb1j",
  "key21": "4UmCyckBrjRQgJ87R5ftszeA9VSt8Tzw47bPpqzsUVHfdfHG8k5rmw5LXQbMKPWGFi5BagrHq9DQGQ7aYBFV2o16",
  "key22": "26bG1eyHDwxYkV995zJBcC1coqwJrqAApBrkUGYc5P9cojVdAmwZJzpGxbQ4tLgSpSrdqUXVybyJ1rEQc5vLtL27",
  "key23": "3XML1NhtWSSfYvLBtaJP8FPczYMSWvSSC7W7CGpTsmDSoUeiRVk5EBjBXzXshfDBwyF1qouzzx9EaPFKNgJ1gokL",
  "key24": "3tmrXQNwayW1gA4DVDYUd4FiFnzd88mAhDsvnJtakTEPHfRi5FJXonL4DiTL77jyGLzJaCXCsTK2ZjZJzgVcnpkz",
  "key25": "47Ky8v3zP5icWjtLwrz42AnwrPaCDrrLZN9Ayh2aqPCHRUmV4iZMznnHYu5ZXXDkiY1KWyrB63p45rz2wQipZrZE",
  "key26": "3eq9hNSSWRHw6z9Fabiq3REKYuyBcNF3Vh4t6rjpzDWjmFAQJC47T8EkURa9znDHgfHh3s6RQKU2UdjTGa45hkBx",
  "key27": "56dG2bobkQFJg78zavcwyBYX3XrGHcPTJRaaGhs5MkTchD8XcdhQmMyNCRf8Zda4aoLEJFY6axBC8wdrAzakaeFa",
  "key28": "31QkHud5SVB7nbjELTEQyxuZzBcjgs8Fx2wzPnCEu8gctwRbRgZVrMEBYt7QupGLmcG1iYmcAuxg78ShZyRUq5KF",
  "key29": "2xr3VahttxQUGxeuJLKE8E9AE7nZghP6oWkCxCdc6f9YvJ3LReTjY2NoZYoFZonUNHkBWbcKwf3ujknWDxeTzzBp"
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
