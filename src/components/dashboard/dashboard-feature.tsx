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
    "2F98opcX4wsYU5GzreRkLNedVeJuKJMCHaQf9S81aFMCSTbF9sjavAS71J3BQ2aJkmUAtWrzfzz8RAjDKKdBv9d1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66cxKb6772Cnd74bkuLsMAkhLRJALai8FoFwgX2i61Bp3USsFXJfkV1NYxpgabZu5B9reA8r3dxn72sFKCaTvggk",
  "key1": "26Cot5eUNyCFSoL4ayhX8zMnuwMmM1nxQmjDhG8psuJUGPCnqGLcg7Qnu4tXmZMMwY43xrz8DBpaFtYsZFLgMqW6",
  "key2": "5SP6fmNyBLHLcodLU7UDG2DrpKFSbx4T2EYc9ztf2u2oP4aXry46j7FDgcqPoMHZ8ZJVVvyVKZp9HE8aVia4fsNk",
  "key3": "3MF5ZwiAxSFwox2JLog4EkHSf7RbxkffgATQLe7gmEKdK6obAQPzrZF72Wdy8LSedxuM3Qmwj8VGmHuSrzq9oNzs",
  "key4": "5rM8Qvp3o9TqVgub1C5nugw9yVfetXKi6rjPdMfkx3oBTRMESLFb3uqAZ6oqDzDEdMxt2KAaAMr4bGpzNMv76kgS",
  "key5": "33aMJf8kMwShypNKzc9o4DwgZkBZkKH4aedDXkbNCWFP1WeQUuJ2eVSQgSakhvNkDZZ4Cg4DGD7ov8GosZSMgVp6",
  "key6": "3Hgj5kzYAcmwmHgUYaSzujde7VGB7hBwfCWkGPznoeinMzYcXgazmbFgX5znC71j5ZBhuRQzvkBZNczP4B62DdqF",
  "key7": "3HbS6Vas4ehMVjVvcb8K45KrySD1MTLaJP4pgzSdv2ydVy72qtnj48NbLxP2QdVKs2UbDPFATXtmzd17yYgH18Ja",
  "key8": "4TUdf6FyvDZYv91yvhvV6Rx4t9eBPg85S6NDTUBScZYoit89E3qC9cjebE6qA8VjisqyNY6LZRGzAKpoWPzTu7iA",
  "key9": "zbi1HPwxn7vjCz4h33FkLDGbvcSEBBhBRLs8TZpV4GVRpENo9FTaVfvW1gssJJZmd8aCoDkNAQZ2WcjAw1oBEBz",
  "key10": "4u9VEKzkWzB724RU7z2iqsR8D4Rjec7pFHcb4RvCDs1Ma2om5Ku3KyvzAfC1DZJfhaFjmGSBD4RLjWiKacMiTnSe",
  "key11": "2cfXdhKMMhv9fRRjoeyfaXuXKWsDQ87WAHVjVdbLMzusVhfx3je1D3hSKorD8kA6knh7Ce2wFo226s2CYbt3nvuF",
  "key12": "122jUSGmH9755EJRzgSdga1RaGQ3XthinsPRSGtvmZsbu6dH7M1k2ECUF5vNfHRGZvwqoZ7ZXBZgz6LhGrZ1z1od",
  "key13": "4JcCMKFyGLkKhCdn7JMRV93txmR2LLBgtKXCfx7VX4uXS8LBDYnSrumJhBTNxJ8ft4KpRH2iyfowpREVyRsgWW6V",
  "key14": "bPDZcBaG42GXW3sBXF2pHt52RxteVaK5721DJt9W2FvLsYf1bCaW1yxjnvR9spwg3zAA9CFAxb72W8XB9r4sxZY",
  "key15": "2zkPyY3FodASLkkcKUaRJFLVEfDLPssYNieFughBtZX7nuf7unqGwrVWaM7ogAtKfZMz7bsUcRxVoUx546wY51Sg",
  "key16": "3vxvE4YdFRygty1QZKhiNcTZyTk4cx7Z1F1CPEyr3zReGSw3cFJFptD1UGnnjfSDj9oiLVworYMDCy5p5LwrzhgV",
  "key17": "65Dhn4DmALXxEU86fcHevpi5YW7WFfF4HN7fYiMoY651KjEYxwM3oAevThZVNmvvejKAAdWraEm4gtgHrLLoMuDo",
  "key18": "jKo9ZjjgUcrBdtZYovsf1EkP9CvD9T3LPzSdy3FZJuYjwJVjn5vsz6PvjJXJZUvW5H3yCkn3McQY32nPGgm8CfB",
  "key19": "3qbHFgfJmgrEziqQMtNCAfwWoUkVuDKBnhHYrVSM5jhrFfzP1TvWzVbSCYjVb14Qqffkhj3AphGnoUEZjECr7z1N",
  "key20": "2kQHafApiXpw9L9KVwAY42sXuL3afDxTLFDezdQ24QYbxCdT2PS1k7XZURe7CtvQdJbaFCEYtEPcFmugm7TTdy3X",
  "key21": "4DwGFwgG6paHhjnn2P1swr4cK5PzYcivwUocmVNfjAB6hmFuz2FJFy4RBX7enbLSTw8PafPmuheyRTyBJMtEaXoH",
  "key22": "3nVuyRTr83ytvP1Gbk1RmS2fyMpSb7BSaAvTc2FSgPvqrtpsgoF9xjMisTFngkBis8qnrTDSUu4At7XQRx526Udp",
  "key23": "2aEcUvLGCSsZud4FQkSD7eTMKy1ESvdadzDupXf5m9c1wkkySoUdo2nCmhhuhc95UR31sWoRe3esA1Cz4DaLfR1a",
  "key24": "3UJkP4GQX8iJGnK2C1qFceMsphbPPxg9z1Zu1fgcMLh6q9qeDsKJr8SgRuavVkaTsecUCxuc7x4eYUG9DePchJwj",
  "key25": "2iWeTcseAf8eaawBctaV7kxHyRp8zKsJsWNhJkeG3y7xcJHPbYg7X8E94DiKoAuSgdcKYBwBLh8Ls5cVFP1sAoUK",
  "key26": "3yxUYpUjMWktD1yYDPK45AhPC7NVw4mB2WDCWcEhFjgsDNnfKbgpUFdiF2PUTwwC6GWvmKuBorM4CnJpo7LTQJSY",
  "key27": "4Yy8snVegbeEPhVY8g8KVkpb5zTtRVK9FcHHkvdtgjkaUvt5Qk737ytZV3Z1ujrJgCJbDZ3ZkDQx89a9vphLJ5T",
  "key28": "5igh5oGJnFStVbgjBTgtzYE75NdLFxj5vuUtRsS5DFC6LKmbUtBvKNjmyfRnLcTn4KTrLk7HCwEy8wepWUWLrHtR",
  "key29": "4NJgcpZgujkZVfYVz6BRaZizR1YKB6F26Jkk1xbYS7TpzNm4v4fcixPAhdE3eETHVgSZuRRQWWqb2wRfHc5VCjnu",
  "key30": "4FiWFDNi1gCACpq98ppUNe3feR5kBgpGJn3sQJLSgzFz75n5t4yBG9up27A37HyvWj5hVcUCzYK3GLqxzyYPb9o1",
  "key31": "4qx6mtMNHQtqzEx7GZM7KTbnRJJqmh2Jepk6C9yG1jUBHR8FBNXtZjPr8vNcESbCnrZdxAMdxqLrjomC7sbCvtnA",
  "key32": "5fFuxQnFHVkC6Bo9NEdRNaFJ7sRGBs4pcYQ2Nh4K5ypEXBcCJravQjRhQ2RH7ouTFb7p5UdUVzDHVkpccUC4euEN",
  "key33": "3PcJed85nwnTBSdSMQoeCwqeuYj5fkyMCLGVxvVRMWwZFXzrpsJt7bX8r14ynQYNmLWQ3CGFLtFngteAn5qAZEdZ",
  "key34": "HAurSDCzikc55H224nsPkRWoXTsBNAVYA1mEzfp2fiE4hm7VLFZR8hrRsiYRMXa659FWkTo5VNDM6q7HbywkAMA",
  "key35": "4nsf1aGXGG9pvaaWT65ZrjrsYW8x7NLC3bf2H6dnhunc5mr3bsXrtxPpQ1uajsGjVk2HgxKhMKNFKtmNYeT2Nfri"
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
