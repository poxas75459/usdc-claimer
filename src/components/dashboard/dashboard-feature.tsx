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
    "58yobQTRVEmCHY4ALiwhGZmdLZzrRQ1xTeVXBkaqZjvKg2hQQWHSWWHrrFzZshwk837GhaqsE5n4dL4eyFAjHLyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ePxQUUZHsg2WYhkVegqab8BxVgGwyM43RvxZ2o8oHYtBTEqWz1PDbuAPivJmja74JZnRiSWNDnzhk39xWKE2R5s",
  "key1": "cjRgg8cYJf2Ah6B9LJzpVWmdeNGtmYmtrEZ9NziEzt3uovwPdMsvLUdnpXMBJ4d7Jj9xoVWbCSBHCEKj3yiPQYs",
  "key2": "5j5A4we9TUViHKcGKpFjEbG7XKu56NJiF4wVz2AkQ1jWR2r6VvkhQcEix9T4fye3gPkY7Pmkv82DN5PWYN58LwwT",
  "key3": "4uxxqYCMGLchdEeNgrHR4x4erfuMRUQk7Kzvx3eMzdWL1kmG22aqbaqBapgBoVUdBhur5FkE5i8ksPXJK3U3GBTS",
  "key4": "K742r1Vk2tCAgMaGHLhEEhUTSVAZUtnhxiuQ2arXhhtUCbvPPNe4GmL3wZPoLj4FKehzDCNKeKjgm8aemtaraAu",
  "key5": "4816exgwG7RgUM2oUqo5SdhDz9xrQw8qkCuaj98qZYoUetAdHPFtzbNkqY22TKvjjwJrQpU9ygTfLtMj3LDVq5i7",
  "key6": "3Aer8QGx6og7pNE1xCE5zgDietA2A5izAs3NTT8tJ8khCNiUZbLuZr2W7CsG44npDTCvWNsG7o4BYBfNd6up4h9A",
  "key7": "4is4pBumnqNHhp6ycELM4EkS7ytEJawEgDCMinBpwgPBaGHpSCiSfwS86pKscC3F8q3W2MHbyMzdWjoNcxrUZd3k",
  "key8": "4bC8ZUyTH1SJgVvPo9y5MBMvZqzUVX5dDSjXfh323hkE3gWk6ntwvrZBwKz5ec6i16pzfrXpBuP5dY8Wu5yfYjsE",
  "key9": "5XE4Y6xqDm54AxYewpX9tcCXQjW3VtDJVVRqwwZF8Caqw3X3oy4XPQmutrCobjs6uUcf61z3AiyQFKUjU9pvyiLC",
  "key10": "u1rnMgyxqqHKZUiBfbPEQrpJgqXSABDbA4cZMrZbY98td8qNgaEcsA2vkXRKwLHRzPmL2gLSbM5kR2YgaVkB78p",
  "key11": "1yw3xq9r7NVEDwqMyu8Pw5HCVdiX9iEHf955mWS4JVPMy91j4KdZkNTwjDQSBoQjPkFFN3fvAQsVcxzGgvyi92f",
  "key12": "4XXm5uZoqKKPuYJEPAkPJdB9pRr4bEtrU7dRJ7EVHDmuVaj1r7pEFxVDcbAqG9cz1983sa9tgVCEt1ZLrTHsnzfW",
  "key13": "wpTNAmiEf4Ls1Ahz5juG6pbQUUD3EKUDp9TuNZTzmmHhazBhggkRXayBDP3qHxRgZ6hzKSzypeZCcqVqU7SzmqV",
  "key14": "5W1EjhQJKej6r9UtgFGpy7WF9S4mCGagYA9VZ98fHp1FwCymNobSHBSadTemZrY4GXwK7ZV4JPn7d4LhfwFZJz64",
  "key15": "3qkcxqs6c9TmchKnVUxasKsiqFYyUeXwuCLEBhnNzPZgs1kMaVNueka5Zo4BzijXKihEK88yZVS7WkBdJ62gP1Lu",
  "key16": "2tSrAJ6H88Rmq7v8gj77BEzXNbrFCK7vLPyjRYHztjh97zwWrvtKK5bsQdiVk4RXQRsnmSaee2sLnrivxpScgicg",
  "key17": "3Dzosn21tHEGu7p2iFhnUSxiustro6eYM5u6VqSwZQbJb4GWJTiK8iWQjAiTjXzqYvittCXJq5py6GnPUvdcUT9n",
  "key18": "5SbGQpMBTX5Nw72smnTk46tBqXMVzJu7a5oadLnttQTMgcx1qDVxXT8mjiQnAafgYReveYKhkkvP8LLgnaprzGsu",
  "key19": "3XF7yXHkoXdeB5EcHyZ81URu11kK3YaeeyyQyj8dPNcV2HunH9qivNGbkuDo7o6ZNodPfPvd3eJ5jqvaMtg4fL85",
  "key20": "2DU97GoHcVGgX8xtbD9CfVbmc3wLJVBGmVg8qVY8vzkPVpjAeQjPR7YVumEQ4rod8MSo676Sne2aaTg9wdtwUwJb",
  "key21": "4Y7uo2x6wyqsdToZYVhB35ivmjozAEiiSHucSbxPhRygjX8dvqmiRUYetqx9zJ5PBvD4CX3q81zsZYQjq3aLrHgr",
  "key22": "2DzKTcdSpeMVoVZEfYju7yYaYpZdwuXLgnH7Krut4Pa3L7ALTLNSirteftp5wzbfHJm8Dd8k2ygDbUAbDEoYzB5B",
  "key23": "3basH8S6hvwoDrJH6fu8hBpWzfsrdrLFJTTjDqcFcKfLoaiiTF1rcE7JuDu5NYqx4yZkKkqQQy9PByZrUFwHN73F",
  "key24": "4R1NKKHLzafcpGCPxX47C7E6uw3RQs9F6vpLAffSNTqy634QcamsoUEMP2Si3TT7cXy95r1sT6EgX9NVCHdCqNpR",
  "key25": "5pqZVka7x4D5KuCHj2DPGeC41qVcmRLRUicBipd32eLydsU3G5y7hRjiAPYroPGbRr8fMmkgjdqJiFT29jsTkhtR",
  "key26": "4GwDwaLkmU8XuPU7SXpEET5XwjQmLHCv7qC4FezriKpu981LKgqCChCkDgg4oj5T5rLtDjwEa5Do3girh5DZWrRu",
  "key27": "2Aq5UUzbtJZMEwCvutwaZoSwbmLE8sW5iFHR2wVjzHvVdZNKRkyS8pTKfEbqTawhuSGKzEnfR9HLkSgPxAm32JY3",
  "key28": "2ab3Ln4MgELYSNeT2GRbmGxBU1QxdxktcLnru5fuV5fLcaRdxnwXzQFvmo1fL4s9G1EBDLPLoxkWTzZKpbzB2rWD",
  "key29": "4LrfMkRDuQgbg4dC5PcMpBDGW5N7TtbQkHpoJZdd74yW2HpCipwRYVpB3gT9wfSNTapk2ro7bNfVC2cYQb2peQQe"
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
