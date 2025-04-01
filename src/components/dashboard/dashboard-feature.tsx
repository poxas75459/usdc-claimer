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
    "4a9ACaJPzmdq9eQPaQtPAKv9Cwu3osMCoNyCWbELxFdayAumjXBBfu9S3o2A7jFVSFvDEc84xtaC6uQgrghQdU8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5orinxtqxuhWuECp91zJV2S6m2tSH6FyWYFadjQJv8vMfKnjxE7eHsY2jSNMQuJA2qRLoeMziMwAJTq85nmPQ88Q",
  "key1": "2QdAAYF9CdwuBG5w6zpakVF1GWHjuESZsLTMPGAoBGnig1aD28BTJrrobUQz9FQSJHvkxqk4zi3D1m6KPLMXBjkK",
  "key2": "4qjTk5tV5X4buqfK2Mkf3LSTSCwZukjy9eN7nE7LVjxMsAQifQsmfMVXLJi4wpPS1fJZhaKAuUQQzh9Rpxxsf75",
  "key3": "f1mA8g1F9JAZChFGyMroMqgH6W3J1rCjbxfB1uQuqXKJTFyh4UZKtp3odkQujM51GeWXiNjNRexFX6mzsZMbvnH",
  "key4": "3MoiAB9fZJELAUdYsqTCvQn3PJEdjYw7dKncwsFV11j9mdDPnd3uyMA6VyRjyLAVFFfVyTdvCFtkAfSUYthDyrmf",
  "key5": "5q3fKsVwhDwKpjBtuZedjKVRzaQzXTZpUnvHbDi2isQbwLq4s4t1mcec3Z5rv9A5w2k4qfzu414QUmLS6nusCD52",
  "key6": "5j3Qr8NyeWC3q1Enoc7qNeKR3CgppvghZJkTf49r4u24xxxs88YvkQa6ufoHoijoh1Q31xiQAy1nyzFjZq4rt8vr",
  "key7": "2qsxT7oT33eXiiiQGwgsp7fztm4w48hrmCT781UTyT5g9ruXwE82DzZ2c2cv1Sa2daudrSKsm4Q2Cbg59vzdCtDU",
  "key8": "33ey7Va9kscbjYxUusNDtnoL5vNJT9zGcCxdtCRQFJyD8NuFwtzGjnHC1wW8W5kABhFJDfCdaiTGGyPqQhotN1Ei",
  "key9": "3DxJndk3MHLiwHzGe5z8z6ENdwG4T3oFmj93seuXkiYtWwfwHBVZL1uoxMsgPvDS9mC8AwfK18hRPToToxWLw4Nc",
  "key10": "3D9VbtKZ8Y5nnhPXy3YA66dEjuifbWCykdtjLDoUz6i75YJU7zyHPW2NQDEckVmkG41PCBmyAinRXQRAo28Wenbg",
  "key11": "FgwPBCKayXvxBPoZCChqTVWfNkCv11AzinC6s32aHobsVedHWfNjbGDt7XAmdM6J1DYNHyeJUDuWzmpSXSsfwDR",
  "key12": "41j1e35NhTfrSKFjF4tmr8cgpNobsdY3UNFjbGDQ4uhCtTJ1N8M2R83WpbmwJWoepCqwo75wupbmBG3Z1dQxs9k7",
  "key13": "4TvZhCwrtQyGALEcuQdzhq7az5hJiV9HFWQ8qL1dAWvV7CgeRqKXFKCtqop2dd33Tz17vHgoPhxVFNA5viPRmAmD",
  "key14": "4RBDFhin9S2bHhZ8Q2xL3dh3amTFQXVnZcJvNX3jDC113qyLPjoN4MHxLuvoekkEPSVPf9zpJVXicDv2i21QTov8",
  "key15": "2anaJCeywR3JXdb9y7eEJrtoivMDyfeQ11kb9V2MojHJvxBzFDRwxAFBnymxk6towKgF3MJVZ5hP2MZyaVainEmE",
  "key16": "47QmtBgx4LxRJJHqvWEkWo87vbTRRk4Tzm5cg6cu29zwHGZoNDyAtRaCd1q2AyUSDbNSjjJkYEJ3vbXSghf5jorP",
  "key17": "4hKVB85txEzFK8AN9jXPS7YHAzsvmfXw9qytjGzoWqfGepoAgDwyrntWMqZXwsDCwX3nHkLXrhWmXF9r5Xb49p9B",
  "key18": "5x7FafgfWNmnY9BH5HAMXBmkhZRuE9uVdZhTgHpmawjQ7rz4iLcerkknUdnoHKNptwBgE3VTwdQccBbfnva2Juix",
  "key19": "4DTjnpd6tWYqVDHFi9TsUsg4DzKGE77ByYhgqK5LKUwDDo5DtdJckDagMFY8f46mTyVhMmyGYWrMAp7p5on8x4YZ",
  "key20": "XJ6KCxQT6T1dj9xehTXLNKSCsXVFKMsig6qT8DaCm8KYg8EimDuvz7WCZekAoAxJkJtJXhfp3VRyySgyqn3WY12",
  "key21": "8xuS5eZ514uh2ry19kzqDKYEWSCvftZ91GCd6LJZGynWVxtEYFnQaH6waAyZuFCdiYmeho9qgUBtPa6kfsy1Byu",
  "key22": "42YZgPcoMgGAkEiYFMuyzccdPLQbXhaX7QCj2XBtfjF22haDnP6spdAHFmouM2avV8K5jUW76XsTRFJ7HAhbtwqj",
  "key23": "49uu7ouCNkenPivwY2bEzk78t2SxZSCFmPD3pUTDNQgairvZDZP2MqwBuNkr9tpTMBPRBjMchg1gWGPKmweCDy1D",
  "key24": "2Njkvy423sBmgpJneffrYX6A3KzP9ruPEn4j8CX34MsMsNM3K6Di1sFNVBdjq3vuoqALTpjYu1cixrasdRyLK2i6",
  "key25": "4BCmY1bZPe5vFPuLJygEmkxPvceYvxqfndTQq3PvN9Do6ASmb58GtAdHnRMQiFLFCGuJYxzcqg8NhBtQjTJeRDFt",
  "key26": "64kUU7vpNeg9y9AxdYAeTvEzpPXE3mxS9q7z1EVGTrNFB14qnCPXeRATeh7NXpmrCBHcpbjMU4A8Dzw7cWkPmBH",
  "key27": "pc8Vy2Y7TFtEAVND7zECtTeWtvy5dTvmQ1YmWYzZgHvmntd8f3WnJbRXkJkGPNjPerSSdkqEJF8QEdjE36c6zYC",
  "key28": "CTQZkfXfvVKNS68mK7XGD2jXxQRG5i5sUixHLBRrA6zLpuWrCXZgBCQcPENgKXiY1FrVoqxaDtcQ52BhdfEmmkX"
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
