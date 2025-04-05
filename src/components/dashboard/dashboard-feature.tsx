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
    "5VpqB187zQ89Kb3wecvMJExXWbSgCjtyZ81JJKxMQ5kKL38aiqBse1Sn4BGXgqq1fdD1CpTES1Q74n7xxLaoe441"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56D7tGwQYhwpVjAwkghr3EcExdXMRbhiKGyd7G29bYfoRNdvU9uouovXEPnTazjSC9LiGgrSkWx9icyMPDGusVB9",
  "key1": "SUb9d7sDU3Rgb46DqLHusVqTpT6PkMMEMw3jX8Gw2YEP2AeuePBskzzQGuS7Wkqcy3z72KPykXYB3Maai9oWFN4",
  "key2": "2PAxsR5Q3ixXPue1jeWqgZoX5RfM6gZZ2jkJS3tStD5uGYPPRrNZtQyRxdXTA9mT7T6QsjVXsYNMoFbh9k7hzEGH",
  "key3": "3G1KBTYmCtcsHzr4yyd8JBKeWjiYfKWhxyuZg641qftxpzGgAi8YpFQA4YmcwcRzC6kBmFw2LhQUxvToRxr7PW7",
  "key4": "4VCAjW5ARk2kGcrANUySVNJwWV3awMFDmoDoaQPevkPJDVLrvQufAcScUg36Ct5FsKso8udRf5zvKRUHdUYhFioh",
  "key5": "2So13CXMezAkXoHM411Joky6imdVCUwzdbN9sPmiuuFYQTw8FGaFrr7FfzV9ipjDGmWqJhJSm8DhzSa6AAHExEmA",
  "key6": "2qjAZDaD9T3zFpLiL6HpUVJD6CpCtF6nPwsq8TFihwNCDCK7M68az8VG8JBF2M1hWSGmVTrjF2YdjWyZheZtbtU8",
  "key7": "3xtnA2m4UGwtbXovTWrFymShN8XfCEPRX4K9PMAdsvWibeEmURsF32dKiEKgCHCazyX2rVTE5rmQx7NkgG59rpQx",
  "key8": "s3cXpwcJsY8GBVKUtSQD3SqYde1rZjq1RL2wasnEeR9ALCkVnyabQhpjaowxGo8XjAaEKQ81WawozTbwD96GrxN",
  "key9": "41soy6V7VmVYVNddHkYrYQzwWwf1G1y23kHA8LuY9X8cnGQgLzVmDMSesSacUQ1cN6XDRADdd5thh3K4i67AZPmM",
  "key10": "4qTCkG6MQZyHwdtmt57jwoSvL7963cLEdsnjvTYXTuaUYajqihAXyPVqRumdmq7YE4xyJU53N4CHazT9TY3e8ug8",
  "key11": "36a4qzRoFPtza7rrABfcA597NANaxxozbD9HSkTj9ygBfJpqRD1DBo8mUNZd74YmcfLG6157pUxeZuNWX9zcHoLP",
  "key12": "436K3gB92gmbqnnEgeAGAwQJNGoPrndj2kdXjgZbR6TR4XdfasteGxRj1wczLhLc5c7ucmwv7RkEse8vrk5fXrn1",
  "key13": "3pKEeyqaAowcySUKbtUrvT78aJXMiSCrxCWhJXHtf79muQMifu7YgjkYvbVsQkhne6UPMZt7gLEkZLHqqchyGefp",
  "key14": "57QySHdDZiWuWqYaP5bqa2dZtsSG36SQxiZNqNvvQSDz5EkNTWYBhfewAUFAGdpwNyTdzZ2ssJEH8oqbtHmar5d2",
  "key15": "2T1ZF6ZiDfxpEbpoQ1WNXcXyGfkAcxQKmn6R6HkZKxag88Dtt4SrgWQpzFgtyQoqryxKw789UUz2m82B8WuzG3RG",
  "key16": "4JsfyPre7u1fmajG9rdHdHqjeJ3n9Z5PYKNXEN6uKdJjzs7Q1rGf8x4VZJcDLQpqSs4KxDFaKYte1ER27oWY8q5D",
  "key17": "5N34fzyWQQXGXW59qVBB6NCxEYkawsAJsFHC5qfd78Q6Dk9dfsAa5NJKA1PQjq9jRv2L3EkyStcCN1eYczjmaBb9",
  "key18": "26RXWSRrzohXSHdiquZdS6EZY6g7yzjdtCfYT3Dw8e4LtTtu7Vi688nQhnLyhuUfpeDJuEbTNBGNS3tyJok3woZN",
  "key19": "4XtUHkMarAZqFZh2AqC9yU6WDZz29orvX2CYspP5wTJXb6wU3rvcCQ4HMU3HQ5TKxGKy8suHbier9R2u36KcSdyj",
  "key20": "3K4ctx58qCJhRej2jyWVteX91XXrc5jenfpjK49b4xMUWbdKbBfMm9FVgdnToT43GQLaPse6XchFuBxShWMTePXh",
  "key21": "2RoveBHh31oYkmyyxxnibxYsWRXdJfiPexgrfBT21ju2Hq3ndGEfjRJmMDpU8pTV4GytBiwd535Zirf5a2ERFZVz",
  "key22": "2JwTtk1PifBpDWpvtfK2cc8YQf87k7GdvwC4NgpLEYL3tFaFf2XQQw9xTjU1n7GHSSxjTuuhefYnHD1o6azuurfd",
  "key23": "2gtFtTzghzXwMWpFgVHD42R1PhyhvumpTNUPW2dT4SB5gXvsMo1FRr5VHw4vaf4piLwFHW3Uq53Amz8inRFEryiR",
  "key24": "4tRYVdqttuxZi426gShphvs3Aky7xabS7iQMPdq5kN2kq4pqm7h6gaa3SvRddFU8aEpo8JkUkEwPKJFJaQcidb9i",
  "key25": "44J6oVuJR5L6tn4GU1p8eQukn7xQbVmQv7th4Yvu6U7n5HRaxYXaNGLxbws7TWqgrRXDg4W1wvcuFikknsU9R3pm",
  "key26": "a7BfJeds42dWjSVH4jao9y1XwLVYbdQWXB3P3Ze6TFit1HZdGwFgQUB1cpyBCRKfSbmkdzFrGuBB77F8SVqcUDy",
  "key27": "2zRjzHq9ArfnZfYubNX7PMn38jukFyCaZ8FgEhg1Y7obfrVWZNcqWMQPiL6EbfaF67hqWbpJZDYwLfJSUcGwDnWa",
  "key28": "4oSePyfFrUeWsrBFReZsPJHk6xXtjvWTu4Jv5oGCrzHCEenTuYvoBiwXToVjVkFwxVFgGi7yrZYBKFFNFWNuxBLn",
  "key29": "59rEF2J3JSBFpizMTWmp7xXpVBFdUDvv4BMGS7bDhSa5suDoZR4di1P4hWvHRytnFjTgrNvhTXL7UbieRoLSrRuo",
  "key30": "5Sjea5bXfjQKoT29Nut8nNBmq2oQXnoQDMuEZHmDgEqJVDiwKGt6kQWZBL5pWFVaKG2hENw2EFK5PFNUBAUBys3p",
  "key31": "2wSPjbjyakXkzj6wJW7XNGQcWtrxicV7vSzHb8MV44QFFNawZamcj3CeYJUndxqQeSCmLNtenvP7xVAnBbRma8r7",
  "key32": "66T4gM1Vh3NJGB8UhW7vH17onhFQD4tzNSRiEXZ7bHxZrxmiybTPqDiP1ZFnFZ5wFL4bDCnpiy69DZF9uvT8vgYZ"
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
