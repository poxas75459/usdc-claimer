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
    "5fhQaSy1zdgM6ouXVkBfFvoTVQDMak9PWNKbuvx7Su6Cyh4PpjqoY7xeeeXupVqfDFzDHxotrekDLmHn2cVchvQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p1nnScoZtbBFGpy6pacBCSMabvTX1uL44voH2Aq7L4NQUU4RvNiBprk8Ydyf3hk3UByKJaVk1JatToxTjHLvUqW",
  "key1": "qrJVs3RHoNWBFz4Nz1WJYVwLodtHHqZ6oGpzYFN6fuoPHrZERd8iL1d9Dyin1skWhfXstv5ZFLAdbw3TuzPznZb",
  "key2": "uo1b6zpPjjKGdc1k2fyV7wf9Tf4GoCb7pfEHM9LogfDjnYSo5Jev6d82WfFwzBqjTwVG3rR67HKB8hdTTzeJQKo",
  "key3": "5Aaia5viMDQFXhhaTbv8UxbzXeLUcEP514gRp8KLPx1ysCxUpHzaGox4pssrGHm9xQFL6oNEm3s1cRau26cEvPk6",
  "key4": "2YiSkDvLeY1GxBUVfHQZbzRCtojTjNkv7rFHua4kAFGf8WuoDEmVaQtMwJQPoWpeCudYLBBBqsv9pd1DV1efeXUC",
  "key5": "5JeV7hkW7tCfedfzagrTinZdbDgPvp8rW3zLhFc9QTrzGCe1JT7GJ4ugo3jnnfH6Xzx9X4Zj4ek24Cx6j935ai8V",
  "key6": "4p66FfS9n5Dy5zU7iaTRVGf7DZ9xsut4kv3rYFN3ay3Qct5CDLAPxjXRj8qjrScsRXJaAcaLq7Hem7CBqHiQeCDF",
  "key7": "Y8eNd8EuHvB76pAym2J82LVCNahLaEbs4RxaDmJ9gDniRpLJC6miKNqGfPQtTFiwCCBZDRDjNqxa24YfhFSqH4N",
  "key8": "38TaMDRAdhUPaqifNwGaAak3hhxU7u7hitSwq3qZeULqMZyhWYf9MZGw8BsmMF1mgNz9wftNHQxiiE3LVc7VobaB",
  "key9": "3gsWhHuuAR8rU3LhiU31NPjkz85MeKJ6EBSFSJsMngRtJDLzQqgUFEppb1icSEXfnPfMYhi4NpBnzf68z7wuF7NH",
  "key10": "gKAo6Ta3f7enw4GDZM4uzYTXog5z2UyxoLCS7VeyVkDkKtxeGqwMr6nbN59vm7sCBK2pKmTejZVrVynFQgymKz4",
  "key11": "2LkN3RPsP2Yrvwv9BkyjK21LXDCBppdqheTXcdD3QmEshFc9sBLSUx73VhZn4vuHYquSXzSeinM4vL7etT5coMpm",
  "key12": "4bcym31VFffxBSWRfmgfmVUJgx9gXfWYK4yaVJPp8kFKChdea3hghQDP4CKDeQZbzrFAEFZiPcM7wbsxXQ86yJHP",
  "key13": "2jwYpYM4dtxVS4dGaPCaFF6SJzk3q1P9RNSMEfzhfXFFSjMYj9nugakpUYiRPzwVBhfprzyog4ZP3MSBQWW2ftmX",
  "key14": "3MnhuzpHdbAPhUK8aQu4S9gecM7NcyDT7Y8GJS2AshKY6vz6PPXG8cmhEdsW9WnBuU3w4GbTf8AXWVKnQUzXqfBb",
  "key15": "46aE6M21Dd2M8eYbgbGKU7ckFY1BrLCRXPB3nTkiDoTVCezL61ED9ihV7vU4sVnSejsxWxyrqwjty3Embj8fb3Wt",
  "key16": "4s6iwJRNq9hvKJVVsJrYSkYs9KDLJ34zZgybt37CH2viPYhkvnGpChrugaCvXKxg81E49aEdB5JADxRpaTitT1Bt",
  "key17": "YVYNAVk9aYzGz6t8cm6ugZ3CgcVk3JqLb64cb1oh3n6DGYdCA8zhFnTND3y5qqyNpePUjBDwj8eAKcYeJVnXYNd",
  "key18": "5CPKA8VJhf1XmbAjH5ieJBnZ6pyzmDkQCJpAPhysHgtYFt8KSXdG3jjUhT6rcv6ovBMMskcYVakbKtv48gzZMC3p",
  "key19": "2cqtqDV9AgzqDL1VacdQ8MG5czGqfYxY6Atfs3fHvSvT5Czd2KBYhCqWevAYj3mBrKQYz4rTMMfUu2EbdZnpoPA4",
  "key20": "634zhFMTcxiCFiigNePCiQqjWPw7Hk2HrvwaHnzyvbVoSm6iCtXTcZNPUfrvnWyCdevXAqFcbi2DEQs1fwbmxrry",
  "key21": "57tktsdNNhxHVpTXkRZh6e18PZPyPhM9MpU5KQeKCMbN1jAUQZX9NDT1EVAyP9XW1veunj1AVtW8wim7nPEHv1wY",
  "key22": "sNWJvKrz2N5Rhf9qCxu9tziAWqxeeEdZWHcagpq9GbUaFJqmFg5SJbVamEPs4se1Uct5H5133HG2ZJwo63y4DVt",
  "key23": "5qDmnoZb4J6kDXVdPAhiwV4JQ5B5KXwaKpJvASG5s7jg47sFUWsgRKAh9cosCmCWFXGeox56Vpwdhy7HW1W9Ebbs",
  "key24": "31bpix8X3wGqQJSXsa4F9E7ka5dG5YAEDXfdCsGbsX5KZHcTP6jgjLxbBSMMJektvhkNnziJcs67PJmFJD8WGiMF",
  "key25": "4z3NJMeFpNHf8vtvRdKD3jYjDthb9LV6r5CrtEUPRewUkiaHDaYCKbgHUDF3yWMufTyjrxqG4aEyuPfyG5z3i6Nd",
  "key26": "2AHTTtiniPFYD5ap1RNQ4hcKSKq1tGZtHjBbQWdDUwGEixwmgSMkYhH29smgXy62N9eTdUnfknLubYNHSHj4z2w1",
  "key27": "5JBqLuk2YiPiv7xoN7mtS7DyHZZoKNHH1bcJfqBHmQVuhGuXjy45DMjW7upY7DYxVA9tb1eymtnCh2yjyAB4881K",
  "key28": "2BnzzBeeiqqyPg944osczaJwzpQA1UoKcQLiVJTxZBo9QK2ho1LrV21VWE2YwkMKJkDGRM7ptu1RkBtoPAzFDW2b",
  "key29": "5nf6d83zLNQf6tZJXCT7RDmFqbZxt33pmqgwBKgXwnrmAXMNvL2b4mCnkQozyvZNUeL64t5ASht2W2SytUPMx4hE",
  "key30": "3Wx5dTSz6SD1yTxeTxF2HNiMPYkBmxdqmPXKiP3Rb24yofadUrEzfnZF7umWmpcUM4f6ubuSJJeTAMsGZZ8fmz1s",
  "key31": "3JiJGm1r1xxA7jecDrHKzFsmcPz7mGF3wdkhv72eQfAUFrg11EQvnupqTKir4PG3aoAv992xtaG22M1vsVeYqsSu",
  "key32": "XducnsJdfhPeGGcE6s5Hmum2gJBBpJzeQSknj4N9GCYARDSVjn3TMtUVqUBaenusvwegShYMgLg7WYS9QboUf5D",
  "key33": "yY2yaK2qTdUPG7u2Ekd2gidpp9NjdkLbGAeCXQ8wgJMJmxLjH8tdrNipvbwd173UJ6H9CzdgaCKAANCUJ9pKCaQ",
  "key34": "qtAohso8iwGMT3Y9Sremaqt54qyV9pvcn8yBv6yWd3qGkZWAwxD25Akun6C1SZLhJnYxCiWLeMZ8424UNmhKwn5",
  "key35": "3FKjiTYGQXfcgmrJnjUqtExCv4Ns5WJxug1jAhhtDqpyYN4KS9MKizqgbxgQMQW9fjyneEpSR7Yt1CgRqF8NLZ4R",
  "key36": "3gx6Jc8Y8mH526ZwFfXTqYHDW3mnR1c4gDX2mZTiqnGQkw5eV7RbEHvP1jsvV4WdUMWwiCiEXVgms7xE2x2oQc1F"
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
