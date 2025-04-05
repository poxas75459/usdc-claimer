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
    "53LjRaGCZR2bWogMBr65ic5rUVMCfkatnZjbTR3ZhFieegfcV8cHtCSJggkMP9Pgw1RD2UaEvEYrgtxP1ZdtFvXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58L7wjvFZH72xx4XPvYN4Xrjggv6DCphbbnBvDFctPboprJtUbbXBAVytBVaBma2o1sQMHzaSMHXRUMMD9EUce13",
  "key1": "22dJyhEPXARiUTgfyTpjjgpVd6J4zj4mCmdSB71mTeWWBNQiYYiQE5n4AzqEUnANCiZXXEAWZ6BDb7hoTKRzSx9r",
  "key2": "5JN5sPHJtrqv9fZAancVRpYSggyYE4iMbDCzFicri1oPKcKjnJWaVg2AWgZaDvLJqPUHoUr2NqkoQwkY4t3SHVUQ",
  "key3": "2xmWHJ21itm87mC3ANZ3zNjRWYMUfXstbj36eQYzbVZrKw31ddQkn38gkBed57PYSyq7EGCxkXudp9gbo6R5VAVp",
  "key4": "2eGwEaWmBPnLAWQSzpUyXemk7NJQVTjZjYVtf5wuRPrrpw6D7jgTD7uVvokWfAnCKu1CrmhtUSCtMmdQyHTkRtD4",
  "key5": "2L4LRB2RvdXpv5nxPQJ6N5k8a7r6CRnJWe9WGN7UhjwNRdYtyud8bPQwdkRUuHCKMbdoS68unRWYBGswMtAbbeCu",
  "key6": "rpnSJpv47HwmaJ8NRijdLVZjjbqWwcR6PdYqE9nUdVZjWqXyjHH8AJx2xadvTwC3giNSybXeVuyn9p92BBT34Zw",
  "key7": "TEZcdjgR1XJoFVsUMHFM1rk1RNza3ggsNwPjZectKhB9pHLUtwSKUabMgQ7kbTf1CkGEbJRTaMgZLQ2zvJ5dsnj",
  "key8": "3Ro21Bibo2C7vGNe8AMPB9fpNymdoSA7m8eNSYfRNMBAnZnBcr8Zf3wBXHFLtg9Y2Arsdbf5Jhc5bivD9rDHfHQz",
  "key9": "DM1hsVDTNT5Xwm7PH6YLQXWnUGwiaTqpSULbYmbpPb2pU4PhhAWhGxeeHzTMbW3p2rvFBoTNefxBtCNHU1yRCGY",
  "key10": "5TnvXkVQBP8UwoHw1yuxzDAQkUdMzHucQYVnPGu6mQFFqM8zjKfs9Mp7s1x3RPFbv8i3t9tpLZY2CkmVfAEqnQ1N",
  "key11": "3eB6pxuRtMbfefu6y2Vm4mrEGxWCkgtMw5pkmycRunaXide3GSsEu2MUiMDodnNhRCpptdt8R8wSZu7yJ3DH9Vz6",
  "key12": "4dLmLunop5xLNXmWmDzZf8B8GfWkzamQ3UmLNgJGbsJKrxrF2TqxNkTBA5juC3181n9QfDFrxU6U7KQk1BtfGfZg",
  "key13": "2KRmGFWfiB2KxSHyWv55BV5MJcAoGtNPrNvE4eStiJwid4w6KmGsjtx9mHstQ35hbYFrMR4aEFehFg1i5zoiM6qo",
  "key14": "4jQ2kKY9GjhF3qPeaDkYDSiv2cC1MNeT8au8FP5GGYkiTpF643AG8Wsj4AaAfWs2e6QKRxnJduJipu22btyDiffh",
  "key15": "mxKA19KBcRDrg3sLjSfUaLsLA3MHeNASkiFDkhMvFketPVqzmeXyDsgt8KknEanNGdMLthWZ7QR2dY9BZUtXjTz",
  "key16": "53v2nN4azveEwrSuK9sDAFryR6bUUSFpfQPgk4rxjdVfF5noSfb2k3QXv1Kw1RdnVf41UXPLpiYZf9qBkMSHbMVP",
  "key17": "3DsvvztsNmobFNm9tBzEfHoy4x5Mff92NDmG3eeMJmT4myEJq8Rx51UEV2thApt9CuGrG1emqE2uUzPHUQovDNyL",
  "key18": "vgkJ33XudEkofg9azBT7Bmct5siSe4Gmkmayg3Y2a5jYPyLQUdTkHLcd5jXpChYqt38AD4zanarbV238AqrWXq4",
  "key19": "3ggornCYz1g99WJymEu3GPfEb25smmnrobCgajD3cAfNNkAid3AYGABhTU3Xg2QThDpoAmTCyrwYN7T2eiNqzMrp",
  "key20": "5uAgC5qjsTe3N1xFk8BvXs7eN2SUU1JLPE9UCMuK5wcRhC249WE1b4YGczj6AbgDo8uFgtaRvGC5PcXRErKGyEAW",
  "key21": "4dH5346WEjYkSLo9VTVjKdMMruGJH6SP7b3UFuPu4pmFRVWYEL1XFHHawZdKGimE9yAcw642wGXK4j3b4Hn3CcA7",
  "key22": "3hfMf8py4zZ3JoEuSG3mW1yRp8wba4o569XFo6tXGvAneT557aTWqwzDQS6PPu8eVnMXFj16nDUqDBi1YyhJCwup",
  "key23": "qX8U7qa829NAXP5iSf8oF4eyPhJK2ihbqY3i3vH8fjwRVB6D8fzzEmkHtRhkMpGf45YkyL6VMrCvqUfR4xHprJk",
  "key24": "27HVKVbY9QZ83SoC4awPP2qLtJ6FRuBY6vZVbgTSMNyFEWywby1EVWpeyfu9j9qjpRy7YJkWHqeHFd7dXFvcXass",
  "key25": "4PwCiYNrWmz6vGVTDyLsFvozGuvXXFXq7Gj5Hp2ji5UdKSsn96QyvGEcpSSyTWxjPkaKsARcs5j3f1GCbq4GRLCu",
  "key26": "615sLKQiyAHettYQKP1ewGnRfYBPDECqnvGjVAXsZHu5WADuKfvuDHtZ9DppDgGRcbCBWaJJfGkwpPWhJRm8Wyof",
  "key27": "dRhhis1LEEXHXcLaXngcT8CYFA3yt46J7wUYgGP1mdWakGXk3ZBRsKVwFmcigknMkRGJYnWk8LZkFcFGEf23XZn",
  "key28": "5L4TbDm9df62XzEDJi2KruU6NBLK4PSk87iwuujiBUjptL1qC8D9rBUn41zoVUNwknGn7QxiQAn6ZeyqrpP3kZiv",
  "key29": "2cxZQYiQtU8oHLYcG2BYD7pSAq8GqaLt5r41LoYBkApcBhWPuk4ZSqoSKbaP9WMMLtdrSsswNWcWfmgwUapnwZjN",
  "key30": "4xFGUvmJTR7yS5mrL1wR9VDqxCgAYeD2b8ewdpHj4rWmdocBmXeMQv35PB4KX5Dn8bwTfaiEgKFXSPgqexMWbvxB"
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
