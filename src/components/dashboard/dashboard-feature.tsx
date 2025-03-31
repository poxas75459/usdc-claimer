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
    "BUfLeSJ6oFXiM6AikxsKZ4uEHmcBGAiVeRcuRTyiKaVUJ8EtRVcYJJwbYjp5sjkZv6kuWbQia3GoYgiMQjbKBmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rjeE5LtipqhirBzscjt9MUPskDbaiuzKznpy11j9jEpVCaGk913S6o9pJrWwcitdzjUtnJGdFZuRqRTSzqccqsG",
  "key1": "APNVnHJneE7YaJkaF3XUYoauCBkReUYDbEXehNsmFZDQmw5U8nxKUiAETCgEssPJQh1wjysU18KHh7gtgZqWUwR",
  "key2": "2gM2XHpUsTZVxWgQJkcgcjCJssbGu3aFuEmesrG1STT1ZTj2k3o1rrakj2zF7J6CtSHSeonrCWun3it7XCKQUYLJ",
  "key3": "3oqwHXzjeQ66AH4QnNLkw3rX3y8AeGkiqZxDmvifBYnZhfx3nqbWNxTKaws3mbJ1BLQ4gaErPTJ3W2mdoqYvTi6M",
  "key4": "2BX2h4tE8vgop7hRXGou1uU7LrUDVxJW3uMC2Vr257X63PddFSHdGfFBs96sJHYGBWdyvRm7CDpYFa5uMPqe6fY2",
  "key5": "23qoxRf6X8voLvz7TgMvYroTadnt1gK2Lw9Rk98EH6VLNLkm7ctMQtwCi9xT8QuGKoZk7sjoUhCkYsM22dvG31Th",
  "key6": "2oji3LPx2UE93EfHpYVTdy4HGTZX2pEy7ALyCRWiPZ634Y92UXTuDJWPFyGjgssVg58CnFoJMR5QSLDX1gtChKak",
  "key7": "A1qwnKW75HkQigyfdp8kDssM53J3rb43bSLiPopXb4sScTUr7hDWxHyhfzDrTvsCnJZeRrhNvgGpPxkScdzdwcx",
  "key8": "8vutEac8bic7thYGp55GT1jhNt8SRwrS1WPzUh41aqJoeZzkTHjqehuj43suyWhLBZCDW1rmjzcY9B5vgiF19k3",
  "key9": "4QppomjmoTJCVj3WKPcH3BG1pJecErUrn2Z5tgdD3XhWsPN9rHeRSGU1Y6yFyrDV8SFv3AkW2Kz4mr7fwisoNBkn",
  "key10": "3VWb7WWqda2Q8xBT7Pj8BajEQvnPUvpc9kvt5PY8M8mKvha5fkTQZsUrJCdPLcsvyUg9nzF2RAHovTmyq9BRGSdr",
  "key11": "4gU55F5bkBbRwJ6vpQ8jo8vPKekLRZpAYTXMHeY5kZbJz3FURqF61C6stHAELtnWPRGs2cnxTrSkwtTKQJdjs84g",
  "key12": "396ets8ZpRrSbBT7jzABbezURXAUD7PV79sMYv9NcBiWpyjPboB6LgvgMLVG94gugypgZJPr3XrLCQA5o7B95JkZ",
  "key13": "P6W9nZ35hustE2d5UGKCCngnksZfA6hDr4E36DwRqm5n8aaE8ukkG1Emkk5YmYhTdqEda8PqCc17j8p2iJikMZV",
  "key14": "38p3RYZ2ueY3WmG5HKCyjqnqX4vpB5TUFKLzGATFQ8N3Ju6suSyUBYM8D4mjs38ncM2VGv1VfuG5vb6qzJumSb9j",
  "key15": "236bphVP6m9nwy141GZhB3A7Hu5yD5J7Cnx3wr1GqqmyutkwgExuGy1z76AWDNyJjewDJjyjRcA6ENMWsatmUkVW",
  "key16": "3n3t5CbQFEhzk4hnTiJ2UqVhmg683JXq9gkjpKvNw21M2oyuxjsXWQX9hVKhhmTg33kmkCmdF78ZjTX7RyYcparq",
  "key17": "5sfNQDaGcfAe1yKY8Q3A9pQh1DqtNB2kfXne8HZr65kkXa7qSBduDHvqRguzyRhYem8KQUd7mHNdTtgBdfzSFfH3",
  "key18": "4eB6M6z1EwzKMfETHv9hVan464PRLA5QJBfHu6YcBxzkgAGgYFd4cFMkT7QueLUFpzwrbizCf2pv5grzq73nMZUn",
  "key19": "3e2G33ubkzWRestmJMdPtQSgCCto7DBXqBWYuU2Da6wWbwyiuYnFnzZF5hk5xHM58rZseQTibgu7hajGbMkDbzmx",
  "key20": "5aed63ascAc29yAwrpJwnQbSD13rxZiGDeLzN9qMTTQZnSgg5HJGKNNtEPtCh1vakDuWLMKjUymZnqM9XQjrdoQE",
  "key21": "XXVLHLa1oEbHzZu18q5JTvuQbfoQ4JGucJMYacpEaQV6REb4aL3VVXw1TRMQsSBfVaB5STfYCxmAQwE2moQF7Bf",
  "key22": "5h45o11vYBsFLJRma4CD8BJQk5G9AVEcyPftTaGUTqoGykj9m2qQqSQiQ8dm8ddpyTxRXNfdju44PK6rVVzkMpzf",
  "key23": "4qXUSSzkjsY7o7Zex8Q2BT3Zi93EhtNQeJU2Ev8qiPnuKsV6PnxTccbaS3tLXVMvGW29gYndZUsi56JQRU5ErLWJ",
  "key24": "23ra9L6HSjBhn7URC5yBtVHyiwnjAcxEDX7BTormWR8Jc2x19DsmC33hhZzX7WoDjhWFtTXA9upacFFi4NSuxVsE",
  "key25": "23eyApiyLGJ7GuvqyNnQy89Gj28zCj2ugM7knTi8T1YCTjHBUB7CD2gdR3KYbo35CDwH1cFt8mMG6QLFnXj1m5T4",
  "key26": "536ph8EAE67CCqPNfpQYYCtPuHs1VBx9d8WeCU4oLjbexkYE5xuADcDvD6p8nUUKuxZ47sy9BQdN2Q7hHBesvkZn",
  "key27": "2BBfag8ndgXAwCuqcd5uE1RwK1xoUYDJvrZctmbk5ntmEYvNvW1sAonfu38dMJog6hvdgmkyDgHLuCpKLxYEDuo6",
  "key28": "4fzPzytcMEAVppfsdWWezvE39QD1BpKMdAchCBHAABYtxuPFVMVmvQqC3yiceG322WZpFMMrSF8f78kQsZuEqNJf",
  "key29": "2p3cyRPVqiZcwm6g78a6hkn3ZbibdEE9RWbmRQbJD7TZgTQiJFV3iDDpjwNJ3pk5CZRaiRgFGXf2ebEk7JXMoNdz",
  "key30": "2vQd8c2qRTwR5W6kvnqQe2Qd8H8e8noJkdyPiszdML2YSUwaW1ZDQsLM5wGtz4f3DVZ4KmhU7aT9jVUjE6a13bQQ",
  "key31": "4WbuVNW23KS5fp7Sc4awTarFnhaz4AZHmhL27x2D7w3jV1Z4Uvi1Zmcxg1ZsyoUWrjUiL4jptzDCDTGcSaETmZiB",
  "key32": "4hf4ZtfxPaLpYkNBbVf8nk9tDyddHEHTvpc42aHcDM5mKFi3hmzusNFShVL9MBsSpPb6cVujmdBNrEw2L3o2PdQC",
  "key33": "3oUrg72dMDcXTwfFhnEYuvXzZ81evPycjLmW71NJ1hPvvcAf1JKo7NVcdebLh87N8Jdi8US7oQLn8i39dYB7NzFh",
  "key34": "5hNNoVq65z4TgzaMoMC35jvDwppcVdR5Wd3fsgT6Zyw5HByKwfgNEa2nNMtyWN1MZrg49G6W56C6C4ppS5G5utby",
  "key35": "4UP23jHztoynfRwNgHVKFxkH19aDKHwRmxzQEH4gvXCBQMSf8uFpDt6XeYFCToSS9uMaZNZ2DXeWGsdWSgQ7NuM3",
  "key36": "MAoNJkEXF15bt45SiLX9CChvRnVgHKivLfFcDt68UU2HBjUA3Nain18NEk37dckuhzGhz5GwqVQm7YNDiJymS3A"
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
