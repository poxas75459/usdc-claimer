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
    "4k57JGTBSnSU5iKVjBR7Y3P3jZtzJwHzztgg6kPzg2g1igvXr5ByTKkyD8YNx3DGLMfEsoySRNvBvkBKUaAUagk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5diKnxJ5qNa2Ef95ZiBGXKgmiZJPcMB5umQRS6p5yMwyzSpYKBBjFP91pcdHZWdUgtTuSXAiXAptrJik1NRn61qw",
  "key1": "2sTjKPt5eZmJCbX26bLqoaf2pU4gSz6cYFUQdgHgaV2BSAnW9gPoPKdFhVzT9npmb5t2cn12FpsE59U8qWwa1GLR",
  "key2": "5upimR2JGNfzrczCsUXCrixnU9rcUZzjNHEus2tkkMDJKhXFuRDGBpCRpgVGRmbo5TuF7UKhGKhPNMm7BEPQL7bc",
  "key3": "5s6SdaFeqGPVhYTg7kXNEnpUkcCYGnaC88WMpbh63nDHHAsoFrSJbkQYgdw6RMXZNo91TYaREF84BPweXxiYmdFq",
  "key4": "ykeTUmxDhUPJ8u5mF7b8qKmNTs5dfCKjKT2DzaWWUa1gQAfPpowtpQHzGmZHWTx3qNomcGzVn9WVi2YmUtS3DTe",
  "key5": "2Z4wgNuJNEG8D4AQBtNPpt3Fpmi2wNS1tUYjnu9xr2nPVwZPd5jMrR8spun3ytKDLk1N9Nmhsx4KTpeLsF2YkQeB",
  "key6": "5p9jWSrzEHtyfKtkrThDaz2C3tHqMhi7M11aPYP6PxKCNdyZzfTkgJH7eQzHwX2t93sXHHXRBqskS4As3pM4PPrM",
  "key7": "3aegJ4K2ufJ5g4rEPQozVKT9DWkrnPwbUerhaadhB9dWjSJND4JBrptiUg7dVnexVMJneu9FRM6kTSQBMjuf5grG",
  "key8": "4LnwyZgYCL9SjJ5FoL8kLM5KFQGpdZ5bjPgFz9KygAgSXrzKiPyZr2cCGHvZ7hNYDFTj7E4saJBg9mPMit6j3HZC",
  "key9": "4WP7AnWm7vqqC7WihkXU3QiEEwqW6kioF7p8nE8HKa4gj2SHpqBWcn2bgq1WS5NjYS2yAfpQh5UEEgXKcHGgHLLx",
  "key10": "2zacVss4iSdvpEBNqZw58nPsTSuanVsWSooBJCSFbDCJnsU5ULyuoKaxuGuDwyEsXtqCrFEdqjboFCYFhuwKy8E9",
  "key11": "4mM2ozgYFgHuaRkcAqpfRmBpED5E9cjuznNpahY8MdFrie9v6wojjHdua73LjQUijgca4U3aGneANjC98H8UEnsS",
  "key12": "3QxeAAJ8A1M3PbstjGw6EKA7UAU5S6U8cTyaajXxJcRd7nExFaDRmD4JA5y23cFKQyFX8L5qpWzWgsGNzdbGaZtW",
  "key13": "389yqWEBTKTTKMg5hkXwSgo4CUbMJzZ759v7KkJgXsSTvNofT1aP3BUyaCYt7ujEDegy6kuAsFyEhnvi1f6Wye8d",
  "key14": "nFiDZGYCU5qps36mLiZDJ9gjo3J87KexremiWGk7p5ewTJ4r1fZcSNH8obPFza6eQaQpt1FVWszvGNob6ufGYwW",
  "key15": "5NgL93GoB6qXmER3JfgpZ5QSbbouXVAw3JcGzA6ATzX2u1x5iUJJkrE3RJmaNDXQ6UWYbX4JzRgbtmMQe8PWELDp",
  "key16": "3RqPH5UXGiMxiJdRYBgxcygzG24Hv3hgJaAfeYz5L8zm6oorSbvfgqQW2RboPZHcXGKyTjX9sV8xsQ8y4szyieFs",
  "key17": "y3r2ikAqGh7mZgFoJw8xirxxRKbxrzm9btmWsRtHSNSYG7uq4tK5uoEeXwQR7TjCZ8vh5VTqkWK9F4zBPmVMcUx",
  "key18": "3D6NX6VhiYw2s9vfX2B9rdQdr1jhaF6K7PkYDpaVhcKYhvp3RZx1MAtCEbognJMEjcThM3NFEKC3LjyU43D9nZBt",
  "key19": "4rPCc64jgigDhM9SwossoHzN7F3XumyDUnvwGKeRXXK2z82mWHMgbhgD8EsU8DngMeA4CwKSG7HbA3UGNRuGHxLF",
  "key20": "4opGvcW3dKPMv8hTsdjw7dnRwUyyj9theNsHiziGRYmFTnzJVb2TMRSKrWcFbQiSHS8otdP9oH57BhuTo9DLbfEx",
  "key21": "3T7FuZrEqnyUTzaxXxLM5JZu5xV4yrGbBs6NWuAxFEGZHhV31r5fsnZiGT7MBPePZXUoHbyjhMLVP7cVHbvNR7nC",
  "key22": "3ZwH8FLjveGp5ixYja19HGTbrDZEWVqe9s3rtYcXLJiHmtPsTGNin1bRqu7JU4GTNw4GXFUrpDKsGa5oAtEuzgmb",
  "key23": "U94nRbwnuybwNgJ3bFgsfjsonv7adSzsFZyU7L8wgywNHY2BVVvhRzq8VmfdzNNJWEx4jf87MipHYTvYpPYD4uR",
  "key24": "5gcFwSTUrEFqorPxBweRuD9DHJytevRpdCSvnt5KfGmasShxvWL2UiFMF8CrZMmPSNjHEn2roPd9x7YSZ4kt5mM3",
  "key25": "2q7nDpb9TiAesnMxxFKTb8k41p2xWcmXWU4ufnM7FPUDaNm2oCPFT9Yu5fmov5XBWrzqb9o1QhH53XHUocRUfbxq",
  "key26": "qUiM2HfmtafWzSmp1AEbPdMRKNnkkaULjMYaZNV3P2GFF4ZLJ1Xcs5LtvNf1MtgS5TrCC8fAKoQMZPmcwf9c9vY",
  "key27": "5hX7r7ovs88EdkkAauwJmdTFsYS7QknQsbDH6bmf2ig1N3B7t7cTdEQM7gcGB6quMXxmYnzzjMLvoG1fEHNhQTEU",
  "key28": "5mGEifykJrNcAtzJmBKuNgjHs4ExUxikZ5EM4f2b5jqW9T46hxP1f38Qw6BEMTxQPYD2Jh5TJY8HjQiahD7bXZji",
  "key29": "3muMVcJfBd4NhGhY2iYVNFvqsPYgKiNgJLUQN9SiskrL1HwGvU9RJcoeWxC9oLebJ5LgQkLDi2e4fjTn4WkPUoFq",
  "key30": "2Njv6ZgRBzViv7cdxYn7eA4bMBZpU1oRDfTTShChAinqKUWyNjZohN9FQx97DkaVbdMhArGpDF1zKotXjVG71YVR",
  "key31": "2PfEJ1RRR8ekzDyPLmf6X7T4a3v5yV4UAJydX3ZwyAzzcMEZGtcZnmk6xAYZCsLfdurZerNZ6nmtGQoWjytJTNbT",
  "key32": "65e1v11ar5iGQdJGTMZE1Ch4PagFgLWB1sMtmEm3dfSJxPW3L9qE5LaLD95TVDZxABFPQ3WeW1xDRLZT9vp196CW",
  "key33": "BubP7dZpHCpnJiost874zsbuz9arU3znuoYpmqyDE7z7EHjc4Rg9mWvmNWzkT8J4nq63FPgtmpAbGtTEGW7sVYt",
  "key34": "3ZqqYb6gmCeKSF8RHm8VUbLFXmDLD3KArBceL7y4wDkheWummxHTYFcbixtoz1bzDEhMq5sMHCpqRD3PCMDfhEho",
  "key35": "3rPhqZy84vXgT84x8HDXHwAxYKGLkXfWAoNkgZv5TWSrET5c2f8stLuWJqAireRoTDsCRTmmerNUt3kjsWo2HjhQ",
  "key36": "57up8vBgGxU6yCM8sN9BiXNgXC4smDFPUJXLj96coir44wuRFcokEXVsfBimNXgW3RrTExbWp5pgb7BRkfN7GcGP",
  "key37": "ocpTJdNhQNDFGgTYFEJYWwx6qNkBegKLnZ8sxeBorLESL91tWgcu1Aihoz2Vmp3WzLmqMC8AUUeEMJwDgpp4wpP",
  "key38": "3jvYYrUpaSCn7jASn5QMcfwJTbKh8xgVTrfvX323ALp3PGwVvgxwpdoqdHhZH2feRJ7kRWhnz7hS4kbH7AbeHb5Y"
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
