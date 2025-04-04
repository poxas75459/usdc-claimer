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
    "63bp35ZDry3ge3jAeKvy5MwJXuYgnHHzKtRoboMCJ6CwPMt5M9Hr6k9fCMwLPXX4ofwdgpWQxoUzXZ9gZqMd4Wqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "19kb6tk98nCoBvtSaQ6JRKAStAuycH8ksHpppbrqZuuMpSd3r6MzfJ86Nj5vghUc7GcNmhJBgthwTKGefzWwKec",
  "key1": "35fTma9gL38qe5gz1atFVZv3Pi2Vadpavj55cuDrDpBDQQGY7PfyZbxxTjmtfKuXV5nmFXfo6TEFwkpihfMJ6r7v",
  "key2": "4Q6omvQge9cW7MjCyHtASLbaYi4ahH2RwBXnk7sXHNpM1u8VSf32EzkpJruQ426ox1HLV8pupk6daWxZSGzLHwFP",
  "key3": "527xHLMGcXr8957ZUeM6y3cZXFJgKQiNH7ZDxFfpbhg1u8EinCp1PLtg6WSY1byvimpzF9LW8o3F7UDQGvkjCJgs",
  "key4": "2zQTyi39wkiguD8rgse2jMwrbwXjxWRUUawcqWiNDS213u7siomFTVTEjiejHi2s27gb7u5RMsuFj2tnvV6xZCcN",
  "key5": "5Soga5MhetNy8hjJ8GbQmV7VkNyrhMTr4Uo7dmrvd1uVG3Q37iLQDatJyU1Dqk7GvH9NNUJ3SdpzvRZ2Pe9A9bTr",
  "key6": "4QxhbYZCfakjKQBJ3e6JWU72cRiBNqjrW8bbwtsBm2udHNGjzEpnc3TryNHU89wRUrGxFSMzz7xBT4n9QWvcuHzb",
  "key7": "2qffXUBaHS5UPYQXt3R7wi1mzcytfu1uHU4YiXBnwSH9RSqUTzSwQnjwCeKWJP28i3S9heKPToyy4MwsUpw2Ripc",
  "key8": "5S3xvLQmsTdWcQF9UQK1ZwafWN4TE99APtTPx3N6bKZmxXj55i5VTSanQKdye6WPG1nHEtMDhstyZ6tpk95wF3G7",
  "key9": "emHtUCcpQ4yzJYkKBWfoF92SEhTztLUpziqPak47HwHGcUKDjKtJBZf8gtQh3msh8qUbcSXLCY6kvikpR7x4XAm",
  "key10": "4VmfT9shghgxsSXrRBo2KBmjo1SPbgUMwen3usDg4U9BztxijHW8NsV5is3CAUGTEwxoHkMqt4qgoQb7MmhQNFii",
  "key11": "vfGnFuEsFWREeFZ7ymGiE3vqwqHsqgoKuN36TJ3kmNZMXVJ3K3bfmp4h7oGwNdXiv2YHctXEx3nZoGWoTL3AzT7",
  "key12": "44BN1xhbf5miydfKUueH4uynKWCsvSncqQ9VVUgXsdF5DfbNCkPChMtdB66K4GHU3omKjBcNniTfyPSrBJ8uSQEx",
  "key13": "6X1LzVaeuzESQSzLzKuQC5WJmFFJwmSa7tkpUZ7KEtGwW1vLrnMbAbiHbtynsVaz4RxxVyEQj9tZhD2ZK1DY8Pb",
  "key14": "2jK9kUtyditZLzdDPDtdt6QZS4MbGAxoFUf6jECEBrGFedXzUDutHG9xSUR2PmdqMw5tjPF7sFkZdcEHXRF3G7sp",
  "key15": "5YbLUusjJ6XSoEVXEc3UHvLRc4F9oHHYRMqZcMASRy75rtx8jwc7zP37HjW9X1uMtjbKyhSH4QHL3XTY4CE38mwW",
  "key16": "35wFsm7foSbhoiDSEA5zAPRwKqJP1wPnThY8eTLc59qGZg1EWWiSr9A85G8J5iSS7fvBA3Cu7gM5UZ63yP5SKiAh",
  "key17": "x46yvzQE2EqkcT512GdTtaDsMTZ8M7VTTr13N94Bzc5sDKcvhh2AJwn4FpStXsgsU3k5pg7SwYeKpYoyeUCi8Ns",
  "key18": "4mrYKJGxMpY9SDQjKyYcZcNjmiJDYrDNdsxgXCguW4ZrxZteFM7TJkf2JrfWGSMUDa7rEgx4JbmaRnJ6NXJrjVCU",
  "key19": "5upUaHKGLjCcMi38nLSGqqGKPHCexenryevaW6XY6sxmouF1J22FkGr1rBY5toWL1NfBJg6TcHeurqtpXyztuE6v",
  "key20": "S4QnWCwNs2RWNmmWBW1hWWYTyxDkoaU6djraZDBZ4Co399V7dJF2YXpqJH3XMQwwtmnX5Jy81sj6HN35gKnte8v",
  "key21": "gcvhUrNhASW4CgC8LQ3F4jiKL95b3qN722jfWxRdUNtzevJ4mcLWVaKSzMnuXFYrbRVysbiEv6Ma7jLnApi6fjL",
  "key22": "2Mw21UTGJZNt3783Dav3KkjaMR4wx6GzNc8kjNuGtuBY1TiLc1GcKCTnkfQPc6PG5Lrq12yxNTeUQNePVoNNjBUu",
  "key23": "4DhDa3HU3jdHSyT5gmHYuT2AjSvykEndNKHjJsegK3mEmAjYHanyyzCzgekqAxxBjAYLV9ZxaE5K8VhDcZVPbi6u",
  "key24": "3TzYzEsCmAHhmujewcqnFw3wFVpUj7JmWG4Y87NeuartKmBB8grhXjgmic5JG2HHnDTmkjZCUm8GYRApA2Lai6P4",
  "key25": "4bTQ4SnjNcP9TcdfzTDYxRCYhJK9XfXKzTftd77VZUhXuma2wmBuXSs6SeumBHTUbVWsBchAUwwxXnpiaDGwBvhy",
  "key26": "3Pz6Ke2fYdCXcLyxV116tpMQ4geRf6pJUk32bL1xEFkkqZihusKNCcfqUYqYfVDTsjTtUkWsi7rpntNTyrHEjiu5",
  "key27": "4v96xewAPrnbTCJwZhQ4jdeNjhG7wzu2EMjpkPkfJZ1TLnRysFJKQbeRJcd9R5z7qSgxjLAVn4nhAQvguTsg65aC",
  "key28": "4Rex7HsEbtwb9t6xCgrWrN9L3dYWk8NayzCdhA9P5dnimhkNYQhFTWfZvo8nKSmMJ79PSnnr4ZvFqtM83SUYqHj9",
  "key29": "j5XKk2PpcRpRh8TtoDr5HaHByGfwp41DCrUi8yDoUjryUK9PKE2zta29TcuWeWUe7ye9i5BauaAWUDAJ6tLD4DT",
  "key30": "5ERrMMPHXLp8Ff9hYo5B5oRrmibAaeXCGf8cwTVPye81H7V8waGZgRy3HbrvsQP4TDAJFmfgoRuwtkKyqscjWy1U",
  "key31": "4KpZZQbow9vMKbA8AAGPoyv8eaTvvEUvrBmXtHXU6AJtXHAeNiax5WEuy7AdfJm1vfsLpGQL4bfz1bKcEW1YG1iL",
  "key32": "2BtHZyELeK3k497xToG5ZFgP9mMLdjZC46UjXck5HmqgdR8SZb1Fb3gqqJDtmJY52hQixiSUgLystgR5ts16MPSk",
  "key33": "5Xh4zFMQm7GzCEdGtDcaBUW8JjwpZd3H6h52i2EiKhVSseGB1y5xont3V8qXc9xTNtzv19SBGxoZ89MYUG47EANs",
  "key34": "3tsEdzZuSn7uHvUH73abPaqXZh12wCxJgRrAdk9uMrA4Mo2PTh3Dr4N5UHqU6HyeSScMfZyk7UrTjkko2JpzJBq2",
  "key35": "2gMRWfj162nUXFMwhLBHMykgGRkwRcG2LhDxsqANiYrKNFwhMYvVhDnXfp1fn6ELLh2oc1p9YBQCuaejUeVCpw4o",
  "key36": "24Rrg1C5QG4HGpkri2NVVDdABiGgGyvdABeRdas1Mw3iLc1HVMsuq2wUb3uWtniXUn9q4dy5ixfpdca4tZpvdUXC",
  "key37": "3LHEKBgUsTzp3b2VXq2roShLNJycA47Pcx1HLZsZHRj6aPX6gr3YJMdnYTD6KU5G6ZRmNZaJDyM2r1JiFYxZt7JU",
  "key38": "4hU9PVYL5oaD22oxfLNcpT9CsKcYSnby5iaPxZn88NEVQQKVzoWKh4vskf626u2EQp1cKWhkmsL6YCLiuqdNMPdg",
  "key39": "5RqtWBXstpZqu3jRD8Qmq5jmyAxfD94iM4rQTsdHjYFWYSPdzxRsVtBwFTNhLuK73E1pRoGBLVhsD4kjq8yVkg1e",
  "key40": "2mafNffqMhjLBMkCs4gdS7vQNeHyQSQQ1Zp7voeB5fbaJYWW4wgu5s11vujTbTY3qFKVUcsTxMikBMdXhghhTvu2",
  "key41": "24zWv2FqDRAvQTh2JK3RUzi9RGn9UhunAnDYY6NoXB3pFuJnLT3tp7LJEZhiV5XPjresFhcaFxHrdfjr4Z5kNxzW",
  "key42": "2z9YvWJygChWP2uRBMVkcNTtns5hL2afxg4TQciM6a9i5N4B8FVvChwCoASNwDjtT4TemTyi8uVs9ERowRDnmYsH",
  "key43": "3eo2i2YV8yjf6mqNc6Tr2aAjP92YU8zxsNVZ1eRbHfCtRU76MqRu1fuVZcPYPTi6WuuMKEnQ7twSHErNKkLUfCv1",
  "key44": "vjLsBXiHmehP5ncd6n5i5pAHb1sBvDRgL29Vbr1HvuQvKBKFxiuwBgGJzwvtHuJ9dYWm7Jc8PR3oyTMjNsksutr"
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
