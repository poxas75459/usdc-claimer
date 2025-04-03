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
    "3wEugLQB9gifubRkV2u3HQMRnYCHHu2G8uaszRtr2Fi8cyC2HhbgY8eBbbAR948opiPREZsmb4iESAqkDjYjiRav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1RSFfCJB2DL1CAUR8KPVwQgj9vVtC9eyz2bPe3vTAEHisNRz221S75ZJhtyeS5qU5kJqJAwEEwwxeLURaYSBVA",
  "key1": "3jXywK7FMGTcC127ZVnB3gdDVV8mzYJDkeNhYhJFnvJGSXuVsmkktKVXi4rAnCGoNCJ3RcM1tYyZeS352HjjLUC3",
  "key2": "5YSGRf3q5ErUZz65niPnyi898BmvDb1PTeD7vrsDYwtbutW9dR9HWHypuomVAfoLNzo2gLPJZyRZFx4QTSqkyX7E",
  "key3": "2shU1vZUDtvve6DAQSMfPZVue7UD1hdUQAtt7AoVTz3UTzVbZ6mHs7gpfChfgnG5NVsy8Ub8bEsUcmoJMhy2ajo",
  "key4": "HoWwempKuUhB13qUvUvbxotmWP3xmTQDyEw6H61gCcTs2kVjL1UoH7Q84czLVMwWcuvGp2xvvkVoCH3TepQTk91",
  "key5": "4z7F1hGBmPWhXURuCn8xSMRw3ELaNMeiVSe91P8EjHD2NEHg7n3t6YchpZktWCKYvU6r3wui82oioukNP8jCLgRq",
  "key6": "2X1FtoYVPPEUJvrV4ZbLc85hPKfSfRqp2bFKPsVZSqw4qRomB9sbMe2dBW9tUHDeQFxSPWCWaWaAWRactvFsNvta",
  "key7": "5RYDbGsy8QkgsEXRf4LF2yTGgiLoVf7tGfXdYUVJfjVda75z2xZcUWk5jnwSatAnpU3Sht9rZ1bZpD9v8YMDj39L",
  "key8": "2YMDBBXcKPiFrQX7p61xJScBaVvxwBfgh2qbyfXAaNhQwMaPrTADFbTr8zj1MX8Sjdswduuawipea7dq68UgywqR",
  "key9": "3PeWh3Gwq2gisfmT4FbHw6x2k1UhGwhmQKTTZ8zw3QqycBrfAZgjAPPpeS5BMNPZ8xQTQucun4EGCxk48SANBV4i",
  "key10": "vDx4vvErzqKHT1ujzqvUe9r27vGe4nxjbYPLJfwFxJcANa3WEKEywJmHSqZbBuiPdNWuLDWX81wP6NPx44gVkGv",
  "key11": "53woudvyA7YC7Uyq2n8opP6wbCuFGVvHxUF8u1cgNQsus1ckzZGeZyNdBMAoQYZNad3H8PgPSnK8Ge3WJty8tGpS",
  "key12": "2jaKnqwSXLMhHc2iZZxnNCur2SYgqss66hEX6btg8eakint99nKkoGfuGiaMZjtn3tY1WoqpkAQzHyZECvtFSetE",
  "key13": "4Ed8ok5Gbvm8xzKFxQDKyz9xC2vMVCmxQzRmwW4MnSdbq9eiiQ72aLY5mvhqP3vutjMsXq4cunnPfWfSXZWi3nCs",
  "key14": "27r6MqLSjpia2A4qwVoyC55j2ER5jdYJtnR6FyjetkYAHCEQNnyBDGxA6Nv3U6fFKWGmXj7BWf5LgV7wFp2C9K6p",
  "key15": "34cAhFYo46zp3vDeoKrw9HygRv7VHNs7hRZQi49TdLDyNouiGWsmQvWsU1Hg3p4tqmm7FHa2XJyz9DCbEnuSpsEF",
  "key16": "3LsvxG3p1rSpAVzt4SEXp9UNiGnYXfgP7hPGpRmZR9RBXXDd92PY17tzgegQnTQkVroJV1ZdA7WehkTSewDDfABy",
  "key17": "4as2Du9LVREKH6ogk6JeXfhj4oYwrPeCCF375ioP7pnf4xQD7Hih7akM1DUF1dgN5FYoZsdz3dKFdS1fbxgkzVj2",
  "key18": "3bv7aaYHGWM11dgfhyConh3FHxh4uiPsUBjjCbiZSZnPbabXXrnNnXQaDB7S7ZRL5PRZrtaUG3BPuFgQRqTgvpxM",
  "key19": "3Ju28w7sSpiGEHPbnTiVZzUJcWsQESeiQ4PRvjDomDoqFbCNcHVmdZvmCFmaTULKeCh66nbsfr2wn4GRxMwcXBN6",
  "key20": "33m1BzwizZSTbxT3XLTJLgNPA2HqeXNpSxthyvoUU1V3fx5qgkGqCNRge4wZ32CJABeWaRxBDG2LKwr5U3ahwsJs",
  "key21": "3SQraWSqouZhfAEAaq862jE4UFWX4MSVXXxYCJUkZgJNnK89gsGWFX8sYZ7HpHQofkXokz7H9RvoNkR7B9EHugCQ",
  "key22": "k7Q9BTC4uJL6oNLHyEFSSdjaFZb56BhH1uJTkn2jxnWfJ5Jwxbw5oeGEZpqGTLH8LNvmFbgaAsWB3tD1UrAtT8N",
  "key23": "4iiLqnexpYcELmVVVyQPxwGXYuKU1VmUeBaw1znp9Amm25TorVP1hLnAGArRt8ZsJHYPy8mpytMqqTxbarJZkNMY",
  "key24": "2L2o5oAA5wmkwm3go9K38YM4RovuYQJj9ik2V4HELx9F8SzCWPh1iep1pyw4diKcnueRXh8eVPFPF4YUxqMW5UHZ",
  "key25": "2mh8fNomgPGio1amXdmVNJv8sPLjD64YvpD9cs2TuysHhetFdVpLmC3pddUh122zNstNTW2msAdzwMxSV8a7ShEt",
  "key26": "2jKBCjHUV7DWM7oWbQ4gUkW6Jj1947VGKKhCt98rkEcwBcx8bxEaNvDXNab7YiEG8xLbqvSQHNhtv1Q9CPnM3iHy",
  "key27": "4FBFm6X5bEFx7AYXvuG9k3w6FSqWrKLTDXQByFXVaNnzgmz1qGuREv3wKgKQ9e5fNZZiKEf2Tpxhg2SWhN9CeTYt",
  "key28": "3NUrSDih7kp9fifyv8UF6xoCGhyxa2x69YkXKfUAQ6oE1GKUiU58Ujt9oqM5yC5LLhJrqRiY9YxapyAz88nWTac3"
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
