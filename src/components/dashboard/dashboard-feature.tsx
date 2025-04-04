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
    "oZmdBzHKKcMGa5St2S9uPhfB2aPUMUxg8G5C4amy4yTmT7CCGevkC3MYFhF9HRQCk5xvt2xJasdxs7QDAjP3puL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pZWaZD1Pap79vXV5P7DMtCNkN92qw5dNPuEkNYuCZLUCCkUrmbcdkECvdvcyjEUG6j7wb6pxh7ZtsfZCGBkGwe4",
  "key1": "3utqyhAU7bjp28yw2cLa1bTLxRLntohe6LuaSaTrTuU8JfKEED42B2HSDdYGu8LohNNaTwgGNiU2F4QUvEPaHCZn",
  "key2": "4etmzeuFp19jyvd33yHTy9W1uGAFfUVTTASpZ2DhkJj7nQLj6TZGp9xz2qvdFnMDv1538kTjyTsC9CFjWsU2tCBr",
  "key3": "21u1veRCrS6Qi8enwXWP7ucWXu5wyvUHuvxJwHxqz8vQ2Joyr6pgpJ6CV7wTeGn9KpC9BvCU1G5uuhySECBWCu8H",
  "key4": "46U4uSBaE6sxoXyntGFmruGyhtyzAYVNjyNydYKcqHQezVUmVm7erq3Yfygxn6856hgRsWE3HGwA77syEjqX3XSt",
  "key5": "4qNn8dGW5p21ZeNZqgWU3pUHZ2yckUdRaWGtsSa7HxfK82ShuSbb8P65183YskuL11pPA3knWZ41RCY3P2h6d8mH",
  "key6": "4UUJnomx7T5935QZGHDzfmSLqUJu1ypqhGKUhBicdhUn4iDk7bEot92WK3sEHdFGswgqs7LyTHsm1Ho6npfqKPvw",
  "key7": "BfzpuqbStXKndo4rAYFJziXiKXeCBvU9a58NUaGrdfwtxXRduRTMRdfsP1kHE9ES3B1kyVYceo1R95eux8eC5aT",
  "key8": "3rRMNBBXZja61mUydpaNHWYE8Ru8SSNsXFpuYwUpDSPWPa4Z3MXJcUkn3eNL3ZTYHBMMb6xYfLwBomdmtXJLCTGt",
  "key9": "vW2Yf7jewb9VyrHW16rz6fn9xsfSJsVjDa8zWkxqPJg4DYnvezTcubM42FhWG3SG9xucM1p9RPLu9BD5F9JfxH8",
  "key10": "iKFKFQTipdUPHvB3pc6HfaS6oKE1VUNzX9EMY6w4zHKpW8XPQukC7MQwwxudTtFrhDeoPrvaqyfxVxpYMfwgovq",
  "key11": "4fofEo6WtrkFfxvXSKfaihnHP9QcfwxV8EbjATnMhxRZjH512zC1eA2vPTUfngc2Feqnee1C2kge57E6BGKm7pi6",
  "key12": "5shRkCQbfiNRZYwJJVt7rUi3w83e7StH1s27bW2dp2G7uJtnKdiipcipaRM4b5GHKESzDxQNQmDjdMx2STJGBgoH",
  "key13": "3atNc8SRykJsXfN7GUFF77KChPSBRMBS5ikxVpnMuYPssoGvdHuFEcaJb7SxKVm9xi1RAQgpvVufePdVnbZWWAda",
  "key14": "56vGWa2wRupLuwVGthDeaAL6EfF3ULyF2cPe7RNUKJp2Rpdm42CgFg3j5hNuM9QZj28Rv79A9NzLN4ZhAhqkAB4s",
  "key15": "3Q9GmofeMRJ68nEvSfP2haLrkeDytWq3URBEv7zZmLkAv5mFUWTUu6kEGk94ax5rwRjaw5anuTqaCBfBhuR9kXQK",
  "key16": "55795buM1XEsompbq8a3KsiHNFAzH5arXvBnduZy82M7cNsWoZ4dZ7J32tCYmVMZ4g79Mu9U5cct9ZdkLhX5ty3b",
  "key17": "3pgKMzzBx7T9atq6mtiyUmidLamyzwYbPxQu4zxJGvzvFn6nJ1yatNPcGHRBwTVA7aDmJ5Hez8P35KnSFNGrcKzS",
  "key18": "RcHTHfQnuZx6ipjpAa1PBHziB44tEeDMWRAEhLtK6WzmWzTv2tY28Q54TAZVg3Yh3YPb7TVY9pA2qqDysKmbHF4",
  "key19": "qyDN6Nhrbv8rxBZq5Z2B6vcNjbVtkYwg7ogrtHw2c6178gHn8K4ogFVMPxH58uXxHK4yJLmGpQSqBcH39AvbQXU",
  "key20": "31wRcCAuZ6BX7Je9cdsNkA55tuUhwBqQcaoTPENqPr3CdSqaAeTSB6qb3PS3UGZpxveYLVxbrEvAhmmHttdQWaRv",
  "key21": "32nG1pEUuPqFbkYdzeBj31kyjL6ZxVj2VchYVdUuS6WF7tGd4cYTTsPtgfq1UGSTeVPGHQcXmc6CfF4Qyoq7SqJe",
  "key22": "2fe9h6Vp6t33Ag6EkvsSrKrWT5WFu7ZCZjHPVn41pAJNL4dcDFcvcChgJ5K35wuE5BszsZ8aZJV53MQTDhq25Uex",
  "key23": "3KvGKe1xfMDoQJSrk55ZfDzkKVJR2Ek7itTb9c6TyU8ojqdBi9am4TyXUVpaiDtSyZdH3cpmRNETzqjdwZKa72DE",
  "key24": "2ntJLN892eRQHExtRV5W79AUbgutJ736cWscB41ARNmKqNC5bFuucAmNS2LYYGYCNSFCq6zVXxYtSToqHCCvmZtB",
  "key25": "459ywyU1i44pFgzY7rHEqWAij9qNXyTBkXBbvTVyN7A7Zd9bRnaCvQkeFeh5DXdBHfoFzKvZS49pDPoLnAYeRnJ9",
  "key26": "3xngKsfvFva3feMFaacnDRsdkGwXYfrw8NcK1AsWGq3sGhRh49mzL7w3pDa3carvZMwsryhgw3rTjAKY4WfDsQKK",
  "key27": "3eMauwZT7iJi2xGxiMyRXJcY2k7GCikNcdmTuNoqZfxe5Dn9AfPC4pGRjqjHdKRw9WAWGPmSnLWBwRQ6CBDkGyYt",
  "key28": "RZ5Q4itNQPUXaNEjGaHKtTS181xNbeej6bz77DTkVxK1eHZ91KQKESM4aokoB1Pp2TxmZRYAqEBcL9xUo49gmnx",
  "key29": "46fYvqyr3yUpT3RZVS1tgLdi5SbZMjVJu5DnPykbsuFVWYL3ouW4G7xH8Uv3wRQkfhVaG5acJxq8w7H14zXjJwEw",
  "key30": "29WkAhzzorJEuJ8X8tcBhrxahej4tTHFvnsMbfST9XDDbVJqY1JbeBzvLRbZ2RKFTEfJuCTBCKfDJ2dLDBiZ73TG",
  "key31": "4XV6eKBWUpgoR4vPwxeechsf2PU3aumrZchEedCp4FtrVEpy6FoQiXV7aXkRwaoEaQKsSqZc86HKrfCtqfz6BWLj",
  "key32": "47GbX2HPCbh3jsxs1zpQMy3tpjqMk5vGyessbg3ySiznB9H9P1bYqRFf4EThw2u5ByUEZR9YvuVYjJjW5SetR9WC",
  "key33": "SxVWzsNiYEdxpvrJWiV7KFeuQwVNpWRoLHcaw1gmrnC8wd6w1q4Tqx969SgGvP11ihtwu3upPR9hBiPC6fYnheg",
  "key34": "GwqAaVeTXnGmHp89XqAgS1byoYbNraYbyYakWLUG6ThQx3oQ9m2wjWRLRfGnxt4eqdHBLXVWLAxAvky3qNQxsT4",
  "key35": "ubsN1BkiqHwhNLTMGbo5kbgeLQNfEg4kwmahyVnewDV63GNdCGfPNx3vwWNmWmhRNi1bnLLvpKypjUdhQuNRPHe",
  "key36": "cWH4DHXC6hfab7FUYEeXCqEmrYJDkjtCWGGpvH7cyHFQ45GoAM4DEHHmzYroz4iryvXhTTEjtUgcUR8ykGkKUx3",
  "key37": "2CpTDHKw7P1WQ8wsHwfb4qWMNiJAemtzDhqihFF426R3v8Tz6J799t5mKtvQ6bG5r8GqxA7ZP7sNxAPkk3DeetPB",
  "key38": "5VmtQd1xk1DsagoP39jUKoQsHDaN4gesioQiAKkkpwCbZTze9jbwCevWyzyVEZ4sCqQyypx4JBHkLceYYZMHB1nY",
  "key39": "53es2ZoCV2TA59UENmnCoSKKPAx5YHrwJQga7V42yyqKCwHEKCurobtwMu3iDmQEaHxp76H9awQ8MERdpQHZYRyJ",
  "key40": "2yuLpXcYuiZyT9Zki9sB3Cktno5Hy5iU78a3dq5fAJQg9FZfG89QAayYFSWu9cVkj2euitQFRPx2fJT1Kf91Wm3m",
  "key41": "5rtBhEsziBzSyi3yhX7bB3PTJMKTmXoHHCma6pBJRQffspuNHrVz4cU1xVPQ38cB6X1Poo3tyDqc66grHxTCb33f",
  "key42": "3eajn2XZJdQXtafyk4mZ81iKpsZwNhZkCcKbMGvpAiLGqJ9sgF4TyUJGuGeYEKrsyJqZszWb7k5sDLjW44EQMGDC",
  "key43": "2gmsgHgmrFkW1ojt15Vo8WMELYj78tMFvZ5onW7JbWQdWUg26agJaevWSHAY5bWwNQxPycBJJaCRHXZwaZBTrjVx",
  "key44": "51awt1XpBjXj72fZfBZYn4uB36BkEdXVWWaPpzYH7VyF51XbN1gbVtVGAVDgsy65RCLaaRhWjhTc4vSYX2bi2dGR",
  "key45": "4wb2icWZwCDCXppp1PpzeqfMSUkVhYBuxF4d8hf66DjvyUSZ7nbUJ6oypSRyu9AFBL4XjBa3HBDNV7doibU5aR1V"
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
