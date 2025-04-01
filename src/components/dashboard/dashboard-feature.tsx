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
    "3c4Ty7mu5xjwezsuqGPz27LEwHMebaGh88bQr4HiknJGRiPCRNJtadLqfymujdeBFvBF5PmR9aAHrQh4mbqQ2PHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzkAzEFC1LtHedvEjKpa5GbihyfuVD5LiPHHNHRcRb34Jq7AbidhwxoGN6SsWnUfFAkPXnKiBXFfqbMKVd3MSur",
  "key1": "6oJ9ZcBU1qCkajYnhhcr9QxMgoF5QqHBCkY1VdaABgcK4jVU72ZN47UM3NdYWzzao9ogj7haK1CC1GFB8eeKu5C",
  "key2": "45epxNaSygZXyrUrYgU6Jbtn3WopFdJdMjXJU9QCR43rjrvfn7zHomQmbPCNK54E5rYHrHbPR3873cjdL3HxDwur",
  "key3": "3oMUxdrsSEiTnAFzbjceNYzwF3Anpgx5ghHcfTYTFrnBSyn5HqgDDdZ65mAM7XfBdjfh8YnRYzVXCVHTwzD5SHQt",
  "key4": "q7YZXKyjbwpUnaCGApBqrtLPuzMhfQvRMHcR2uXpxeBPRPMcMThU1R8FHCgC4m7zMnU351YGfm7NSXA5Zudg5mR",
  "key5": "3pNHWgiEVyiw1UdBEQUPeUTySQCogNBHrVe8kk1CguWgugEdpJuYxjv3GUSthKFoR9Y2bM18T8XMMAK8QAhcokjP",
  "key6": "5GF4PWAN8sTJEfS2TZTs2eJef1zum6ANYX3PmNtT1yATxhzte9EyxbQ7eM91hYx4TJCjh7iYmSMq3T8bHTtRkGJS",
  "key7": "2YwWwPQEb2Jn6AJTqpDgwVG9S23y65rTtF5QPnrNAyx9M6S85xifCJfrvt5rPfd57GXzzxDJf8MPEWXWJLJRRL7A",
  "key8": "3jqyWKK7Z1zY54s1LpxsuYE1aHFYWpnxtX2Dii7vGw5PbEwmwhVvAeEo1PXraBVno4b9e2ExZLgTBN72mLVLFPQ5",
  "key9": "mExEEKZvMBZZTziew3bkccn7zBr1hdJ91Zs65s1yVc9MNnVCCdUeinRfY2Vj6Zyetj2jo9q38rqkM5dA3xB2oVE",
  "key10": "3zqMkRkaerGkWSeWj39GLpM9bdUsSMySFqZRv16BJvrEBKE1NQYtmDeMgsn33WHdzgn9ae7fhHEhz3Vqtuk1znpe",
  "key11": "2E8tMSqXGvqGoNs8uRQoyVDmYDypRTRzpb5yRjLwgKJg87aTWkmmM9MTQzsW3xWgfoAF6dsMsaUZYawgdjEaSsCg",
  "key12": "sXpSVvjsNCbbFVjZrunSYXPEsPEJSamZBQxg52t5hU7zE1JiaDo7cAucDhdp7m3ef1U4gYF6ReVC44KffvR9krH",
  "key13": "DASr3u4jPYvQkdX3t8m5Z8UL2vBgEMDiGuu9pQyFqLYNqVWtmX2io8XtC9EJQZXENV1fjRMGjGZhTrtAxZc8CE9",
  "key14": "2wtuQ38x3FZVFcYm5AEDjseUbE5Cdunq3dZAJiWMmHFL35FEzMKza66nhtnGcCiqsEwAQWkVFMQuuThkekJbmS4C",
  "key15": "2UUywdRiLuLKGJkTX2Wydj4P8Q9Eh9RgJWzgCNEVGHCa2NThFLRm5oQz6FRELADExiPTG59GjuemnsfVvtxVbH5a",
  "key16": "2AHQ34YdphSt2nckkSKyhKJ7gbiTQ6Mf3rpzbRi8Mk3Jq99oDWWJFARKXqQ6CTt8AAhVdptGtbsyVirLTPMNWWRg",
  "key17": "ESjQ9vntVSTz49mWCxwUjeh4Ka5fPTgxvg5KFJz6grsSNcCS8fqka3u18tMMnzm6LV6NbKMp5qrhfpMBtucg4XW",
  "key18": "ideTXucQNVxTF4oyDwJ2EfGzq1MaMWeyAwpNbUUQiZmtH3fLNsL2PrThGisJ1YdNdUSBQ3dbyPhAPGR5WbZp2rh",
  "key19": "35JkLMvaZcUdvqLy8tbPLLHCwrZMLm5gPCW29AFfy9ZheY8SkP5bghiE2E8cWKP9hZYmxwFHRr94igobFwJJxfQp",
  "key20": "3pirSu5YLXTMKajfNAUjJQALjZV95D3xuEZJnFnNiAmr5eheN5tT1imTR89HzpdM67pdQsqccXM3eNyN6NcJgcFz",
  "key21": "3rjQmorUhLWKrQ56wMN1Hdw6oKnVvkREGLqVfjTcKaUpk1B5eqD5VhqBcrwaPTwPNQykJdoZgedeEajxoMKLX3KY",
  "key22": "5GkCB99iA4twkBqPnm8D6VCNEdQy2TrnQdDW2BQQrY2eA2WYrkJ2jyinW65fHu8qQZwAeSpf5aj3dzo8jJvnA4SU",
  "key23": "5fZSkgEk8LrxkXiESYgcG5eAGxV1DgnXoMBXpUFqVd1PTeXNjMwjmA72KXKYj2QGgw3r6ybc2XTqnutjZntnkwg1",
  "key24": "9TUpoMPt5zR7g8ihSGswMwbssKGHi58MVeUhTr1jMjN6i55Gm5m8n3pjpmk9MTy7VmQ3Tge8hDr6PWoYRqaSJj3",
  "key25": "5wPR5WwKrrTUARNS5vyoHiGUNpWEe6LHA2BfH5XSV24aJoWywTmdGr1GniUSrQ45FBupbs5cUuovbZzcFxx6nBFQ",
  "key26": "3hXYJXCqqbfxDUibT9DoCWzmoFEDb8xRgvwfnipeYmrXxmgXnTYjLZaHqwmaQGhDCZ1S6FDC1wAJagP464sEEamf",
  "key27": "37TgvxmFBpUjLGFM9okZxJCA3cp6ZZhwThrutRuruT7rzvG8ik75zLNg8VTLcycif1XHQTBg2vyHEV6xPENAMxUZ",
  "key28": "soqjkYuVuLvHkfNLyKXEF2MH3QuDyH3wxEmxpFmiJ6ysiurwkcNWDtcuaY3ExkvkGQ3qbPscCoyzxScWHFy3RNK",
  "key29": "4v1QnYBwYneLjQfSEPewPXvkAGnfbtpZdQRegunYGaYStmqckwue1T7KZa5vDVGuYxD2W8csJuhFmefnwq7MWJny"
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
