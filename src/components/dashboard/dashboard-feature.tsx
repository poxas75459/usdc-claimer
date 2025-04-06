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
    "5YEZGFEQtn5XbjPBe2o1EYtKmeqBNHRJgriCA9PCWsXVyWABnYdpq8u9xBSqAW4zBLjyYAb1aZyfqngLBmifUtxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "514JmygBzhgsrx2PsPM59LatwfvFf67f8ntTRUPTLihT8ffN2tEQBMSLMDNzqBQdSzz1Qwy2VSv2exJNTBXgrPaC",
  "key1": "26RwmuC2F2htXQrtUGYNEQAjg51xRcnxig3tuiZxhba6aAcoXTooYnAxLDiLx46pSTJobVQoeBpPShdP1DpcPmE4",
  "key2": "2WJDD7omUPd7zh1BFs2FF1Tb2fn6mzomW1YDHpoiBv4dS6pfM1gR3zQNM2c2mdHcXnHWE1SAU336B8foPx8Grm6y",
  "key3": "Nu4YCiGWj4Mp8tMVVyPhF7xECMhox7oW3QX2NQfjxm96dz9srGYBg1afwxyDv6Q2UJT4Ff7jJCTCBsJv5caDzTC",
  "key4": "2sV5cd4faEarrrw1CHLzMdwzVqvQkzHbdKtaTWzJb1WeA8cFKGEi1muYXjDpbuWdXFD8K8XXqEqXdUpPQ7F6C8h1",
  "key5": "255YVkndK5DXCQbVxeS16NAQZDXQ4tCHxtRbd1nZznpbYLr3VQ5RkduxoZskknb82nf1o3xR2A3wQTGg9t3D1gsn",
  "key6": "3mCq7LcbDkz1unFrcEV96Lrkvc8GJ3xVeHHShjigX4cUUr6zuTxPCB9pM8uydxEHsdTgLPcSvBrGSZBb5nCb6LNT",
  "key7": "2uo8cB3Fiwg9VSMXLSxkLZR4nnxnejtQE3EKkPbUPchX8ztGnbFoS4roPfGA1GDeLAXay8xguaiux9sYJHdiMx24",
  "key8": "Gyhr6dXYTZRJXsCvKERuwrLnGPsmd6PtmmGFQ4z8o4KZ8uNmMZCuYLQAaJMhn4PDRqyQQRBnKVNrMhvPTP99Dcw",
  "key9": "3u6nHMwX8Sxg7Ld9AV123t7xRRXtjxNXqoWWtTKcnXJ9phmEkMFiR2ssvezFKUTZrXyNhLc3MHbrZi5PmPVijhis",
  "key10": "5iyZwpbrPfR2SHvb4GVnnaNjuSspufntH2FUHPuaGi3y1uC61q1SApH2Bo6wrn8BaxazqSXJXCXcX4rHzKFdcNvw",
  "key11": "214VX7LFasbsMEXboR8twrDLsuPbEChZxeXJomxJZ7UCYexZdrZb5ppvTUMLVfWPJ8bvLLmhKYgm8SC5JkZ7CVWV",
  "key12": "3QX3umCdCi6LpDXMnR2MqmhQ4rSYKeCJVUUe9jy17RmD1yH9n8EWnnWVCG5w8Kx1n3vG6vuM18XxHFTCk5QHT2Va",
  "key13": "22yvWv3AXntXLxaR7WoXXwAz1tf75ffkDtFz3TmYDWHQVvnvh5hEfcehnLZ5bc3vNiDXyMG6gow7odSgbPb8tgth",
  "key14": "4Qqfbv8cTC77L1kB1WZb4Lfe5t6ERD3BEVgp1DXLuM2U7Hop3Jy4sPfSBoCK4bSjZDJ6X26afPshFdn7XWMpAdAD",
  "key15": "2yEF4FDj26zsamTPC27TqgzzxzSqCj3P7LQYfLeFGk4rURJBtkdnbE9AR5tNmitMyceEqEvwwfpc6fwMQ2AuyYjB",
  "key16": "64oBubUVAVuNsz3uxqV7mWjKvLByR2onVJ7LbpqFVNS9oEdG4T8vz1tbdphS9FmuHYdCQM86pJ4PwfkQb7fJXCTp",
  "key17": "4eLjc7t74cL6PZhKzhcLiYaqcC1d5n1FyNVr1ZaCRLEXerogErQ9cTTMUMdEdKxk8wei2Vic4cTube8fm8r8dr5F",
  "key18": "5RVVbDCN5ujVUxgL49du7bZjbsmEXLQCRYbavx9H91QH6oeX6GVfyYBCQafidzrrqVZJGiMUPA5K5JdtRUF7kj71",
  "key19": "3spXgTYuazhTMRT9C1UYdCHWkBzh649QS9Re3W9BUyxcr3J6WJTf6jaXorvZmgcedtxyxyCj79bGU5jBMF6HzPWd",
  "key20": "3mjsdJ5zZKga1stjuWBUdyr3M9D9RNRd1iDzKTtfeoeWibcs1WXSVsZ1dWHk8zGfmnkyHqsSyWvRTwPkhxDPE1Nk",
  "key21": "3QDz4gmb1motTqPLs24Qmz5F7PMuSQQmzzKj7PdFexjWSFNPVroVvsd6Rkawm4rYC1k75A9RxXZVB7Ytffy8rbeC",
  "key22": "46tMmW7Vx6S32kxoS5ZLznJ8FfH8bCYiYyCeqHfhZmsxidD6sqS5s57Fg2h7ugz9U9ERkhxvY5uTduiBNyWzYCTr",
  "key23": "36mx6CgwohvQ2D3Tv79vrUunVQU8QFNY8wTrnCMtkax6NBLkYNrhhBv6vgDoZig3CuFQCp2sAuZRm6HsQZVL2kkf",
  "key24": "9u1ZVNdax1Sf7RwmvBorN6JzEcdsBhLBK1wFR5aFpb3Y1df48vYkxW7U8hDjSyiu5RmfGnkfKpA2iFwizFioJZS",
  "key25": "5hZffP5ixRDSV44LpDxcf2uxqfVLqepLFoC5E1eHAeQzEguFcDsWbfFyYHLwuqmsmHDz486cZbNs9U1nyB8qqxQY",
  "key26": "2SmuGBRL44eZqTfFqg9gtyewm3qe68AasvoiayvrUwnM63iZG4nPN1gc4Rr1QvrxKNy3tDw8QeEgGaHSchjjtJUf",
  "key27": "TAcuBjenUPVBNxiXgNFxAkjUBC2p1ayTmVLDW8eHbZGktBLCh9EyjE1btUBcRuAhQAt4tJAKk43KWBDqN71Ttt7",
  "key28": "32aVJq5qRgivSszovwunN5mxwFjjjqeX3e4r5NvCQGG5ZL3eLfyfL7MFMYWnAyDNcTNiYGtH4YaXywtR41F98V9V",
  "key29": "3bQEneuMfNkLgS7rZWd3XgWigNjrdVj8t9ipijZMMxak8itbAYKMqUZfMNAg7EifBJ7uHsYHyZDsH2DNxHVXjVLM",
  "key30": "2PTeXBtBQCPcVndcPm14en1meQZozKmPe1RWS2AgmkfTujKk4n9SyrXf5ojrtCT5ZAmW9nYfZoL3xQ3fkXjsHSdr",
  "key31": "64oH1SzJVrwcBNXD5VNqZDkLd66KSNamA4vexgSB3rJnFThe7HJqdAB44cAcSTgsATbGoNVNU2n2VGSmJ6NKV8gi",
  "key32": "2oiXAghKh4AS6rqBj4ja4tdA6rz9JEKdQsAV4uZ6K6xWvErYPpW2iz2rwrGraZRVHN6jZDroGpACRqkHgahjZffi",
  "key33": "5F8b3X1A7hw48Zj6KujQ8tdfD3Q95hfVMcVSrPVQCEDPRD3kJYhZnBF5QDW7gCi12AgLE7T3T5MyBMPyp3PB8Z9M",
  "key34": "EHWvWA8jZiDya5iSTKStf8FufQ1zsBkRsEKNafneE4WxxjUseBvZyH8ZTiNNGJWq8kjsrTpqP8uwLvjYTkrebmt",
  "key35": "Vvse5e2DMJDdnQwaPgs24U11Hv7D2WXYz3yMSyCZCDLhuyEn4m9ghFj4wL7NJDdXzADzKvoXVNqCAVAKbiW3Fc6"
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
