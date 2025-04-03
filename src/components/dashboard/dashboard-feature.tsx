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
    "5wuF2nC8ZnFPY7UQLsnmLrWhTWPqayoq37gexXoYnoHGMJSZ3VudPKV5ZCsv725urJLuX2dcLrHEc1RetDiGBMkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZn2poPumDTxq3NT6djCnuSz6YGkd6eR2FqVwGL52ZXSxcf3V6ZCgdEfirXJdAFE9eXHETseKAjomD1SD4Hn1dA",
  "key1": "4DfeRsSN5AEWKwWT5V3skW7NqaLzurpzurahX5SbzpSyZzRBugyRm4Tf8BHWLB4MJ4rcN4yRSKTusidqdM1rsX1",
  "key2": "2ERbxy49VHGe7YQYq21tDH4SnUrdywkUNyoPQyqFxWjCytc83obfUX8QRuBapwJqkM9U3t38GxpR5UraLW6KKfkQ",
  "key3": "2DC6ec2gdXiDdC54vTgEfXyRkCquHffSke3PQKXUXCKHTtJSxm7DYGkYjAnuEAmsMEe8cF1q8FAcH1GeSyqo2dLG",
  "key4": "5cHiuTALm5zP4CNE7AcNtQfqQRz7N7eompX382RVzxUtkQRUMB1nq7a1q8s9a8wTzA6QKs9zefGfXzPb3mVaBAoF",
  "key5": "zF3sUf6nAZj6g1Bb5b3uXaPvyty7fxCtd6qKpARrGKPDZj632pLkFFNKMDBP8rLwSXQHWt7XvmV7fViZQkbEMpG",
  "key6": "Dqy57FGnbX3id73gtsNTvyrabmHFyHcVNMRDB434ZPvRTmsN2vMxyLtdV5xz7JSW4mWWiLkgP2ebqEJ7CrC7p7w",
  "key7": "rtx349uNEwJytDUzyvMwiFpAmYz896taYoFqER6gVegngukzY3wPGEjCcrxeK2zNN2T7wTn1Eh9eY9ygZnmFhTc",
  "key8": "4FL5YMjaWwdVg74hb9vG9QwEQVj8fR2Z7jdg2ZeA3RzrKgZCcFCrNWZpfkhJpbETrW8xwiRVZrT6idedgtxtY2Cn",
  "key9": "3Sss6gavBnk4Sqb41oDj9imZMnTsvipe2t5wCq3KZGvrJQk7mRNTMGPBHY6ibz9rg3cRH3Gwo7nxEyQSGfN9uD1y",
  "key10": "4rJvAgNtNY2NkE518WhLrxyDUx7RV5U5jxmQ4jqiVxHLpyQe4CtCr8xtQ4fGzbYHvo9xsFb6fqhxKrwbEPXsmhJa",
  "key11": "4nkNi85ndWueamc8TEn6fHZPYXufoTi4yYWbpvThaff7tRN8xhvPFDtA5N3iABRUJRrGv6nJ9LWGKB5EATwosUy3",
  "key12": "3747sqwtvhhpHoYVbhCyhmD9KjJTygGjBK4inMhe8obMVcdoGdd3uz4expM839TN2oYwq9n9uB8jzLozyH9Mo1nz",
  "key13": "5yeppERziqxgVAueTtmHYh7KbY6MdhiwuCRE5279iGLNLtqz5bxhBmS63CWgu2ubVdZipb86VbDSDVrZJVmg4iug",
  "key14": "2xsSAkaArNXHxQmdpviz5toGuJFc5A9UKsbyscbwcHPXnKnkQcSX12iCnfJXKX5ZJ9VFBU6a3T3FpKK87XokjYUp",
  "key15": "2waZfDNnN9tf9mpCJsMxNvfqH61KjLg72iZM3ERvea31uR6CJKYeQ5tQmbtwdcgZZ2aDJim4TURns4MQyfMpMsa5",
  "key16": "2t3EQjdRh2ycMwYTh9HGNVeLnWNuveUXwouu1MBCs253GUitjQQftwMtgBcGjmuUKkur3Uzik52L1bguX7vwSKbn",
  "key17": "5SxA6saBWDvXPuyDvDGd3axgeDLNAk6ZMLwnVw8EWzBAr7wA3Ch1vVBNrdApLZPzQoKzxwgEz1J6DQcJFMvWoc3k",
  "key18": "5CxwB8y6VFGcwggQZAnQpGFdfNGz4KbmCWtUuzyse8yGBnXg84ofjcyk12KqS1v59SPavDV236oyQTeZz7ZyWiAr",
  "key19": "4uwaNr6H3CvNyqSjKN96yMmv2JcisPHSZz3FDFnikw69AZa1TAUaPp9CqnJXFxGDpQ8MqXaMTDYFFikw4outBfKx",
  "key20": "3YRmMBSJvr2StbmDKXEjefNQSzYVYyQQ257eJnHU8iRdf7yfxuyyYXFok1MVvjjTnM3NdFay3rN6AG4TEnuXqKRq",
  "key21": "4vW3kqeLYUZJ4DaT88EQAmiy3xTbLzz8PYpc5XJ4FcrERSy7xsnpoUq57uY1bmVzSykQpMYbmSwec9d7znuSb9tx",
  "key22": "4E6pNTufu6trLkPFcPcMBRN52FkDcjzrcRhT4sG385eheVLShnMmbFuxAxT5Qc9Tyyr5npyN9Bgqs1yF51xWYepR",
  "key23": "2TG3EmbbNNrxe6Tp7mc1KrzV92v4piLoMN2o5LGqWHWVjBB6C5keC5D4xU6NmG9JhAexzqY53NdUYjgY595juRti",
  "key24": "3f8WkeyVQi5MLeGTuD2rJdsNvPjWLRskq5QEvchXMfsRC5ToD2GR24srEv8ZisPAbTVFBSFvYcLgmM8k87xfCZza",
  "key25": "4RLBwLAhmSbMSgsR1BeWfpcoDkWQQfGW4ngutUNd8i1fd38KkbyBFS9PR9wdr7LKnaLTEcXMT4uopUU1hAJaiK3q",
  "key26": "kgHMDgxUV3NC77r8Qu62SksrT8dDz5U6YffwMvkQKsKjs5tJnk397U3GEP1Aa9z6t2GDXtyYerAoW7r1iki3CLR",
  "key27": "4snP1A7phF9J6Jv9K1DeYWvG53Z1RU5Aobffya4zCa2rDwWSvSCn2UFB5h1rtLg77p2o2CLEfF6wRcY93fvTnn2x"
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
