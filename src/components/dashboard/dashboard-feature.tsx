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
    "5tqR4ASE7ug6SqJi6nrPLgaCM3aSJ4UnZhwSCMPUaPcAYLFWE5bJoiritEyGjfBXMowVPeWDjU2MpnxgaA8QEwgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NUwK8pP4NWrVGjTui6xhVL4fKPegbeL16CUiAxajiPQxKtwSSjL1yrJL5th7QiEJ9PqXwJhZshFfFJkbn4jg8ZF",
  "key1": "39ugWqnjxZHg7mGKCATjYQb8QcGy58njXZRTYbS1r5mLb6kjytTRAXGZ9u2HZqHpnZqz7wt3NKprtzbmKztyvz43",
  "key2": "4E3C3WyZEmA1RUdw4YgSm8t6FDFUyZhJsegPg7ZZpvuUDa7F1RtZKCWuqdzsgrupLrqeCj5RsgqsVLNiiDCPJyEd",
  "key3": "2w2SJ8KzpXMHf7qE1ngrtHx3hEvvaJPiQm3Fm9Eru5ksBrx7uGtDvuU8NaUD6TCcrtLQhuDmPaSvWQnovAs15nox",
  "key4": "4dm89axR4s4GQykew6ZYy1czBK8xtZq2re2yu5wofxxtSWbVdYRGUtq6b6ePpMHc3FwPppSRdRa5zBxMvRN9fMfE",
  "key5": "2spzZajyFVKAektYLXKfxhzZfr1qreT61fUVGfTvF5XYvCtUftSWm22PCAu8UPBoXydNuddNazBLULqXw2fPFj8C",
  "key6": "3vyqyC5AkJrKv1mHCyCArimEeVPFDcUCh1yJc1hNm9m9AZJGEoe92iz38MFF2qFX7yEV5Qbfezs9bHQ7waWvt1Qz",
  "key7": "36vW77HMYqYqubMWjaMk4vqn1o2YkbcK8dACriBLgnu5YAtaqyyWAPfDLv4kWiGVgmScbiL1rRGaNTiszrKqu3U7",
  "key8": "3YTtUye55stHVTCnh7ANBDFEgJRynXdpgbxuL7EV5zQaTJN7pj9QpbkNwZvP1FPuonhY4F6ntdPASHZCc74gpjqV",
  "key9": "Tt18XaXrTTo3HwEq9wSGR31hKaoJBEvkGCJMg2FWtwRTJVGjE1VXQkbzbnfwwwVcRhx2FNsQogRZHRsHYUe4HrV",
  "key10": "3GXtF6VRxAAAsxthCZeVjfWgro2yCgt8rZp6GUudYYGp7j41J8rJKTeGiawao9eLKac7Hnbo11xZrvCqMcsFz7Zv",
  "key11": "3hSdafGzGDc9CKM47Lrc7zDXv4HUuY1sNpFfZTebiaFn37m4kzzthXvgRj6TWEQW9hTDfgweppkqftGTuWXGodiD",
  "key12": "i9gBFF46D8sg7d6gJ39ae6z8k4fRFtHK3NwdHLBAbwtFZS81P7je5kiZvosNSgH5NPdSmWr6b4AG8KTY3tQLgRy",
  "key13": "5ejFPVdHt6AM2ikvDYFnLutMRYS8Ez9fGFbfvNpHsTWZ54unczn1p8UjqYYYksWwKBvmDn4CjimghPnuHthx34NL",
  "key14": "2dwdgrVw69WJmLRqe2zKVkVCAK7kPQTgkPbp9wqBmkVvrySZReN6WwYT5MZ7hj1BdGKAtcdnbQEwhf2K4o9fNvwB",
  "key15": "5itTYHfffaX1P8DEyBC7vqRpUnFoxudWYhaVh87HKSzjdt9yG6HjFMMUipmnQWUHfHKjFiiofLqo6gtHTTSUpmsN",
  "key16": "4nQTpyVc4oGNNddq5rQsU1idTRqxvzbacz93rRS5t8EagWQCHWpkNktQkBjQeLNoLn32ezQPYDQqMosPyahANFr1",
  "key17": "5PyizskRcevvAj7xKuZ1TkiEzQq4bLFRB5qaffCTBXodMuzV4nkmNm7MNfqSFStDDwPdMrZG2EPHWapT8bNNS9ha",
  "key18": "3fYPGVgkAekZC3HmtVBNjvfLisjqpbPhnL5CVn7fJfJ7UbczJAjpRhY7GzmwXpN2xyQsXKui9W6Aewauh3WueMJ6",
  "key19": "5eUmHqtkDqNyqs8kwGDhyJ5dNADh9amVnjbJueGGn4DDDCEBCDZwxxg7poKLKs2EVGccrQ8wqHJGfgqWDnGrqqjM",
  "key20": "4T724194YjZEThttunT6mJbvTPsByGsv5sBs2PDAbtkE2V2hF55KACSvJMXtnPWNN8F6n2S6n4YAoTZuTmndLQ5D",
  "key21": "CYZJjVTZuEySp4pArs2cpcwCQsYKp5DehHUVZdmYeY61caANYMwiCJabKJ12BVsfbnKvhMTq2cHxvoFAKtHDSGL",
  "key22": "3TjxBszj92fBUhhfpKMr4XzuhuB7NdfxEtn5h73d1EA2BSbrym6jVPduEQj1P474mqB1n6J3QDkyxcSjybMD5YBR",
  "key23": "3YogaTVx6jHxExxYEfRCHrcw9eCtaohBuVYFzumZdMrWH3YdWVFwwPzwJGJaB4XCHVs9UkxBCzCDiQNmJLRZ3hVb",
  "key24": "3QGq9cAK7pmsLoQwZLiJGMQNEVVjSdNqSJXeEHuGUZURTqNpYS1q3WzzP6N71EZUt2cGHknP74pFK1cCoGvBteXK",
  "key25": "jxm5RFNYP9n5PzhYtbTLusDHcAWYYLvE6vgD67LKdLW228FKskZm7QydBsU4Ux5a71dq6UxQSvLByH71nTvxxFp",
  "key26": "4s9SPWEZX1ascJb1rmFMTCfNBPHcSC7CfQNTwVBc4BUosm6EF8XbFwGmpo8HcNTonApu5dHPzpdQwFTDWZSQoBZn",
  "key27": "2kgcPdTxmkYYRBcf49j4HSGc7e3Z71GmCVNF4Yi2TG3tXtwBtftTN1dvnaY5qNojVCP29f4usyUeBzSE55GbKsTd",
  "key28": "3uyLdXfhD9qgfo7qSwMzut8VBczE86Uu6pD7zWQUxT4mk3QoNvPSMYtQAYfoW7Qq9Pcfm1PcDYWZypkznjQfFe9h",
  "key29": "8dyY5E9zov7QLxhC6tYAhzfc7qFVWGZfS5dVQckr1Zdxnnx1BMCcMtsj2aSR4yyAz8YPK7LJdxMdaTLc1dDcUBk",
  "key30": "3pGQXY5qaGpwtcFCVxPqhCDQzTgwFYmNPTpFznKR6qSru69nM9XMbi4MT7RPfxP5gFsYmMsQc8LvpdoYt1Xd77CU"
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
