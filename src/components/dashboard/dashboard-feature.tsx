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
    "4hfJRDDwTkGf1hoBK1yJNqDiwWuA7sDeiRCzZ69DoLsXpj2V4qVqVjYmPBoA36vNaZ7XLHeJSnwE6qPCqsq9DctF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dxUPtY8FRxfskrNoYxq7Gkbw7BtNog8kkvtBAZsirqjkBVRmk8MZeePBqXZC3S8TXrDbEiCP6RmTXtrMKgRpJka",
  "key1": "3xmY5zRXZWwB3Mn9uzPeCbT5P2ad7McVxf1Ug2H19JYMzbycWkbD3AMpxXieMo8BbGBffDqG9FUd3oYmEtMWn7Kv",
  "key2": "4TuP3DBPj6qntcDJEF4xSKEPdoEWs5ayvmeFih2fYaNSydktHDsEMv9WqdLdHSDGPEGDpj1GpUYmbKx8SoAwCXnD",
  "key3": "rgvCdAHdLyE5C5s3ezDNHBSWfvuzuFB1QTfmY1CMnF2wydV3aptctN9qs4oHg5ukmh2B5k9mnV4Gb3fkJNxKSJr",
  "key4": "4tH9bFXHxN3BMqZHutkBwRz1CSNHLYc7gTfAYE4AoLKSTGfbwVaUXdbr5gJvrpbzdTv4mofjZ5rHVrKEebGtQiuD",
  "key5": "4pZJ77i1frVoWvmrZ5udAiKJ8LSRPR1wx7sonyCK9K8omuxThMS9Ew9ZXs6DW7qTBMnhtyi914soQonnnq39jJHt",
  "key6": "4ayjrdjEvgpFJZvaXREir1MbR2ZJLQhE1BHDmvTQsossDfz3JbE9xtWs3YiZzgVDtWg5iQyDpjz34pZHjukGB9wL",
  "key7": "36y2caRxR49C52fkfuLgbzpkmjfAbQLmEPooEV9iZ2H9qpxXn84qKeYJHXWvnZdFTtzqn1HPtMT8KjbJwsBgMHgg",
  "key8": "3ewq4ZwkXxdftQ6BAjnfMxAV9vZrLasvsAen2wXmWzCR2KrYuk2uB6Dh6Hhu7MDDLxya1bgDNi75CeLNpaaLS1pG",
  "key9": "RVvUdgaqkwz3ZQLUFBKnTvCE3AUMHr6QBAfSxvhRrxgQKzYtGd7L6hW8BEYuKHdBxa6PvLaFC6w8gxkx6Gzu9NF",
  "key10": "2LMCmK26A1Z6LCUzoT85PLF8EEkzm4tBPGkKXjD25ZzV57TwMcNNesiaQqrhiuwXPrABAZ3FbwHvF3BMArU3Vn91",
  "key11": "5hNrhHHXoVjYB8ntv3aEzCXwwp3b8FVqetJHT1CzKKeNfwWZDbmT4Gng5YaGvbiv12kYVKZSAYYBa8Hpf9oVEUkU",
  "key12": "TBtYwsRDg3xhRWgDoKSShFkUR2YvUfMht6MK9NVVsbYmrxjYyCtB3QvaB3HW7cYWLD5HAtrV3yvsGJFjs2aW8bD",
  "key13": "uNzNRKYpbRJ12o7kyfBLR2yxdRU2dTAFaBVUkzoPj2DeSNwTjG9LEZ1dAkaEXS76uRAkbdFHdN3iVoQxMzw7a44",
  "key14": "3s85hmVye3kt6pZxubMBhLHiGgbLTvm2WYBu9AEwUf7oSo3r22jSmcrLrc7GeDhSqZ6MYmoDwrp77wxmGo9Gj2C5",
  "key15": "5Fk1PpNaDof4YSi96tP4kwiK2AFq94iagUJbeGUoqfhpqxkyoy1TUUnCpMjRrFzQ56ev5Bo36mdaurBUYPvkwskU",
  "key16": "VGetennYceX9VNG3NzP6oK2c8kDdCWrrPUzpTXLHLcrDVHo9beMsRXsdvRxFQo5BX5pK9x2UYD1ikdErWVisw9y",
  "key17": "5EyaWHVQja3RVpQCuivSwzHpRN6gTTMCRDrT1DicvUpgwJDfJR825WMoXH4NWMZrc1TghqfvEbPAcMW1kuQhFFYR",
  "key18": "3om8Gd3vRU1oqZGtjrYf96RQ9xoectqWx4gUrufKFjgq5TAvyRMTzFXjzq1ZJ8UE1rqDqAvYjSQGhJsSddgFYiwA",
  "key19": "4M5YrcQ6WCNmnSbZp5tzJ5zB4nPUk1zrt9wiURDLMCWNRJ3dzaSyaWTUcYr6m8DfwA5c8fMbrhy9eTuGgyDJh9Ci",
  "key20": "4Tom6Msowps5pM8tLC5HSufNEyoTcL41u9XhWnW5zoCQCxq1L25t6bUoe7aUJo68rgL7zbvTReMUg3QcKJnCAN8S",
  "key21": "2Z4ViVr8sgT8RMbD2yhv2ky17b4aNFupuzEMx7b2ksUjPKsnt5AwEog9zqGT8CV3g82Q45QEXu73dsF3Kr3eQ1zE",
  "key22": "2q2X1ipkMs37hwGH722wC7duBE9UFXkmKP63CMU6ibYLPBX6GaSDwmE17hQkbcLfWeGR3f95JwCymcmnMduhDCZZ",
  "key23": "cQ9hk8Dyqiwm8ZMvZtnikPBJmdwxm4qTHrZrvwAmG5HdEk4qukrXduYxuSeaxgPGwiJ5RMVRCgwhnjmDhPLZurS",
  "key24": "15QNUutJXq6zp25kDoeVbZ2EzicKdrMxwTWgoAJhxdh7rtPheemhnK18Hech3T9Z5nj4zC1XjhiJzqnomJ8Q5e3",
  "key25": "3CWxfkHZbQVVNS2yysvmzJPVwEZcRbxvcdGfbNSYQiW2GzssAYThNrxrAhcUUPxrWGGGN4JU6PjhJ7p4rHkGPizq",
  "key26": "2fgNS75Y7omoKng6PNQeE6AdbYRh3oM8XoA5adZzMcq5g5YbSMHxpZGgaCToXmGJ18VkwMtLUqEVtuVEvKDxFdeA",
  "key27": "2Lmp4HL43ZmQVDpp7Gx4VFe4YUP9GH5ZumGCSwAkpNX27J1RZZ3tC8drsQtX4Zd4ztuxGhFPyNVY2TT4T1yCgCfK",
  "key28": "2xormNmWzx7FUUQig375eTjvHzhCLDR4fqVQWvx8CceQhB66iS33EhXQpmBKWjSd87vDyJPLgd6x3cPpPaKQbtrT",
  "key29": "43ghGYmRcusKeSRX5cu1d2LpLHGFLuAQP9TDEShr59zMVAzdftsFhKFWKVeWW9xatepsUWZPeQgtWZ2zP5eoQAYk",
  "key30": "4ksCMnqEjrG4kWZY8yxe2tQgkBb6D1jkCKFfX54pfU8dfLASJxRiWBjJQer1JKhMYmQ69paz6GuNyatiQfzM8bZi",
  "key31": "3A4NuNTziCS7hoi4Xnw8m4LFZ2mcZT8xFNTmtDRehwqYQGJRGAbGiMb2yornznV3g1ftWDrhwVgebXoTkt1tizW2",
  "key32": "3tWg41Q7QpjbATcGHWzMKryy7A6wCrzaxWN9HSVRspR1KFADgziQNV7mJbvXxdur8mU5wL3SAQB4DS2pLpTQSep9",
  "key33": "44vdyzZubfjdxeRLwwdQsofzVatRRsgN5nNyZR8GZX3iLJJ7Yg9oUghEv76PCjMz1hRbDzsUoa2247vK6Jib7AhU",
  "key34": "Z7euqtMHLsyQbFznVgWDCCGpBFyRxYhHg26cPvkQhCcfg71vZtsk2WSfBWijjFD485iZF7phSKaVuZvVcPinxbi",
  "key35": "5Ur8BT34qs59SsygEk6Y5qd6QH1BAqZL5ENjJYEeTyRCfQXqU52e3tYVJiZqEtQyHMarmz6UbJGfed7GQaoKMSU6",
  "key36": "65VS8ZUzpPnYWVpTDsvucqwiH1A28GsuKxwqHGE1HPWmNBzbo2s4RpCnumZrkuNmuAeaaGwbL7b9wUW8ZwUtHT85",
  "key37": "3dqQ9feZwvK3ZPYJmN64Mw23gTHmfsk7fq3nW3RLa2BKjQctUjLMez1XoP7xV4Eworm8rdE34VekqbU97rdDLRGW",
  "key38": "2HuRLfAwTno8zv3P9aXdBYZEXssRiH2MPWDHg1yRZZrccgrmmJYgqaYG5ZjbKhfjetChsJkwsmDY6KAMB2tGrmdL",
  "key39": "3X7MRUnCiH88kK9YNw99g3PS4d3ZZ8YSD9KxspC6yWDoHVX8TBTfGk8T4GkV1eS5SxHD4sQz5tbXkUUhMSJzSeq4",
  "key40": "2DLjHhV816YNHLLF4MBZFf9NPRMJKiYPVFLa6ZcGSjqVzmBtFpTdFHfh9PN92dmNyvU6VzGMpwiH2xnNtRLYDtR9"
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
