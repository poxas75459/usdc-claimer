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
    "3AcybCAnYiL1iwQptNfiHHHEcpc1HErddKDAwszYY7j4ptxsEFbdhzV3Wktwk94VAJrCt5aTK8u5XZptPfLWNFGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ve2PNcRvp6P3sb7dzngw1NNe8uvPjDP69eeMeCY6vCf5Mi2QERx3LomD2xrdrJyXDVcDGxPfPjdh1sddwdbQgDS",
  "key1": "2LCXv7BXywcMNfMbbSgKb5PpBuQDypvQLTojbc1s7feQq7zMZuyxkhqUYvHCB8SQQci4ctiRk5oaRhYVFPcPcx2Z",
  "key2": "2rvGKBVeSv1QHx4rJkG5NYxNZgdj561TJFypjBnCaTV3dtNEaTVy1zQn7E2hNR4CPaVo2y2ZEfwFgST6TsWMB2to",
  "key3": "5SZ1jwRtnyYNvHncZfJ8KPztw2fSL1JYdjwmfZZMMz9G7AZz1f7aoMKW1FzhmubBJVm56f5GNECg2P9YG76bgsFF",
  "key4": "5xYUxARpeaCZVJdznf8wBes6RoV6u2r77vvGbNDn4PpdwpvZ11HC5p2uWkqRqvCwmPkRkfS12hEdtTn75NzSma6Z",
  "key5": "31no5YL4zA6ajgqhUrnWuLmqv1gJ6Rndzx8NPXWReVQTNEo3fBnb9Gdz6q1EoCdYPvyTfct6gh4zWo7J7PxYdH1A",
  "key6": "63rCyqeoM2UgwzrxACJnoXu4jyRBxpADuSTajsY3jLr5wke4eqWzxBRnBdBPVNZhdCWkzJEGwnqhnqbmQdCVgQvN",
  "key7": "mY4fVhGpeNtzkRkQFXrt78sreErf4m9LW3wVRwv8dYB7x3GBWaW1ja3kvKgTTyGnTeCm4TCqDrrL76CUePC23w6",
  "key8": "57zZYDeH6MkJj6Womum3fKiZ6VpNxUrAPBHsfFuWK8kaNHfqC3cnhEf7YaS4EqKanEixKrUwFX1N9UXd3vzmqKsF",
  "key9": "D1EfjPYkjLaUAwHDnmPXZueDfCyJH7eBYra7uZZuP7x5uCtYxrcQfVijuJUPBXpiP9J7q3GHAEj9u8VZgrpCcRN",
  "key10": "38GHpoDSRSDsXsPGQniqpcaGE15St3g8vEedp8srACyCXgc4junXgBqpdHftjNQsZ9bKAvUrbWdCHVSVxMnRRSvo",
  "key11": "4RRP2SFqAeGTVfSijHhYbw5FaQ7oykFzA6zqneteyo2dWpyRLB2xCYJAaULohe2dt93ytjQ8596NpyycLQWT8cm4",
  "key12": "3wqSuzLbhFnJaUacH5TiR3Lq2QVeWjgNDgxcQx9qwNEz4v5NwFrnAnYKwvEitj5WeNfkFkVMCrTAgZG6az2fj3QT",
  "key13": "3AsSmqviJ2Uzk7666iU58tTiXEFNJoeGwaSVHfN8TiZcUAm8cnQBeGC4R5K4Nwdf22rfxmdjJk34QxuRshRMsaQs",
  "key14": "4f7XHqHPvr4JVB8AGKLGwN3KBaKkqv9pDjGBv4GhFwPL7MuLuggDXdkYNfg92166uk1X75YWdfM6nHW3j1KRd3wr",
  "key15": "3B2TCxaV3dsYUw2eQ7C11QHkhsizcUFyTweq1p9o9scVRbArRbJX9mvfrKKHnNyYpQDX2dBn5Wv4Rd6WKpTGtwLg",
  "key16": "rcRQFco8UqN8vuZ9ZLziEqR4PXApfnuqYboDAhrk47Zp2QRYR2NeppH8ZEixhnukq8uBMuK4ui1tnAEiH9g6cBd",
  "key17": "4gCfHTBRkcmn8Rum8NeXHCLTTFNyFNaa1Bi72aPsdC6A63w6SFdMFT6GissJB7H3k3aj7vH7ujU8WgcmWAU4vAFr",
  "key18": "3J18j3vDRMgpWMJ1zioHFbWSKHzTdBxMGR523bgczgCP2U8dwyubNskJgQQFMtKeBrxc6fknbdVJxWi85eyGmvGT",
  "key19": "4DTWpcZE23v5k8DjMUUMcrMU774KiXoDiDP4JwrRkwooPZ23HEuf7YPGtxuPMcNoZmErSqhfhh5rsdLd8PEa5ej9",
  "key20": "3fbAQ8KGeDKbC8Ha43MPcXXiypo446fk2UfM1YeRVWFhj9KyCiEPfPJmE9z7jEf9wPfGEi3RPYV3AUEFKezszfqa",
  "key21": "2eEKohtoGGNML7k6sQXd69go99YXyYWGD5iQSgeeXEZcH2xLAidc9s7BBFmxpccn3uH8tDbounXJP3SyJdUsEH7n",
  "key22": "YYazqXQ1WR3gXybxnv6KYLSXLHM9WzsrL3y4dgVSMEqnyDdWtBr1goDXz4vbSQbjf6vdoW54iSNzS4rrKdSoiT2",
  "key23": "34yqz52WzDvqXPPew2w4AXUebhMnsZLocELeg8vE1q3ygK8XJou4RpwrDqappsNc4oxsbyK3fDVcRDB2Pv2QpDjA",
  "key24": "FmZ6Z63uAfCXvk7mUtaAvpGR1z87YfVAYi3DJ5rRov9VyHcYr6rMECDtuMixLuGyMT29HMzo9B3i96pdC2MmCsq",
  "key25": "3nzT8uVxtJoJ7g22jRKf5oUykZdhBeyRAyabpCfgBNHaYKkKMqbHDFEAsSq41zxWCmoWXLF3saUypGbrgDHYhxRY",
  "key26": "58qbjUUg4tKBYL53HnpvG2vSCwgf2qr8gx7GgtbapMtjKBsceVovMNuic7Lkd95HsQfxUJ5KNrkzmarcqUL5oTja",
  "key27": "22v9t9bW7qY3b67m6Q36sbA43zye8aVL4FnFA7EucjakbwPYADQCRd2xp2sPzdBmB1iMq55jnYYXTbyoxLyntxwy",
  "key28": "3F2As7oFD6JrHyq4zPAmhHQBrBKSXfPbHNx5W8joBfcYxJSR1ufDNrMdKnjVLPH48RfchYNTEH6m4aY19m7eyp6W",
  "key29": "3wY16YFQnWMKJ6cxP2tpHzLbZ1kuANKrjq5oxeWkoL5Xy6hE39NJV88HTuzKDHDLVTEUQL5Hbue16gpktKW2T9DP",
  "key30": "4jJYYhjj8m4WkgxVgJK78JBmMhjGqrXwtGyJJe17buhxXJwkcW1vzVgekkQdrNNGbCu456rG45x2rFUWvg2Dv9VB",
  "key31": "5xFnwG4xMJx6z5fQju1uuyUkWi8y84dTvoMStVtFMRmhrqEdzz9X6GK3S5KStW22NqEjxnj6qbtzAtwKcZkHumpS",
  "key32": "5CCvkF8dRK5FynAqQRRrjTzoitsrZzbpi43ERpfFpoo3VWREvT3tsnM6k8n2Dv9TR5a2eGW2oMdRie7yz7F3U92K",
  "key33": "AUS7sN4apZFdxQpQYuk79WdNyPa5DSxM9XSFA9NTxWvUjtoN6a2RU7DZoYFfK5yjUV3pt8mKCuejqtdep7Eb1uA",
  "key34": "dnEywpWXxneExBZny6pgaNh2ZJhqdWphyCMspUibWtmUAq6pC7AkFPzLJh19m9ANRhad9yZCVvQNAB76jxAdMiL",
  "key35": "2A7DwuvWzhWd2ERTneNqHDhTPGTQ3Qud7veJnxzCedrJvKvcMafCNhSnJZq7KK8evhdMD2rxmrf5abMwrQCArSGg",
  "key36": "2WZARkYJ9wyAQMnNw6pLzJba4RZti6M6kLi6vZbNPL6khHmcbMAFGHzSGZbYp91j5g7ZXpSJgjHLyEKxhQyjXFUt",
  "key37": "2VssrVVjF8xqatpRdowRv58rXVuYBq3wBPkXeWVkAr9xq4TB2vygN6KcsEFfLSyF4CpfkKUaKbJJdWYs63787LuF",
  "key38": "MdDcbNPuRnTj3x62RQ6v1h41XmAjSVdgKvJnzfqxpCW27kZRTJhYbY1A5SS66ySE7A5YhaBDxFuxiWEvYifv36p",
  "key39": "3Le7NE9PjHcPw9Xb1zrH1A4aJDTTSaFGeQ9nQLS5jQnWPxeQEp5pXbz1uPkUbLqYeAJwrpujPXCjPJmzXotJnt8K",
  "key40": "vRfK8hD4PEJ9V98c8DANFNnzANvwTqHdMDJCV2V8gumLhcKjcUUqLp8djVPo23LquKTrs3RGFVfT1pzf3FaATgK",
  "key41": "3uAWnk3gLR2iuHaTZxYcVqyjkfHaS9ZkuZc2Fa99ate9Ts6o3kNbDJmvoBnFcjMT7WrCdzJk9bxb6j5CjcF9PWXb",
  "key42": "4BLSTcNKN9ibytSYarjuYdkd5zjyqUmNFkSb856ypwuVK1SzHn8eNMHYnxUNo2mUQ7ae4omgktogbZkHbqBDdsbn",
  "key43": "5vp1CKbMt8TXc9Dm65Eszj7S29CmvaJJF1ibmhAk8eEe227LskV536AvrQEWyMkvgbUB4eYuVkstbH9wJcYW1QcD"
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
