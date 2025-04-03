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
    "3yJSAci9LgWKMGTySXfzXp9xQTJo6EShMhwKGqUhBtwPjRH3P5DKPnX1F98FDHVhQFQAfHtqVK7qmzSr4hSa93JK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u59gaWMgLVSyMKxufZ54wpetThAu2NnkL3fxthhQzN7KwrUbRAEZtFjKfdzNKGiJXnf7UXh4ztodM28WA43yGJw",
  "key1": "2YHPtrSUGPLcxtmCPjz7wk6r1ecJYjgH5v3iUNWNHVTSKqcMyn33m9Mk7htjsPDbbPVZ1LwGYxbVYyH5CNi3a95B",
  "key2": "2Dikk57gd7CW9GAKUBQZWR8T9TM1EzE8YQvUrG6idHBg5EzmRxv8LhYfEox8JeR98rPkVrAD811UZnbTuNGvHnvD",
  "key3": "27vqMT1J8dTwhFHdXsaTmFLvhQLFk9MvX7St6HLMMwVVqrxg81etRgbwvWmKKvhbEW2Saw9HYgnLoBzfDZmRTBsr",
  "key4": "2sX6FWoV6encaYsRCttCm1D5UNG57h6HwFQg33djnDeuAMfTQWznzytjmRszknnroFqyXPNGbJKN71gAPx6uWhTt",
  "key5": "5BEY3bpmFPNYh96RYkVQbXfw24TYjDs952iscHT7oWnSoaBcNP5mEbfKNqvTaV455XFY8ASCnJRvW5uWDimJjtXT",
  "key6": "4k5LhXTwBWSCCZNytDxqFx9aDEqr65vMkXkdJ5jCAmzvmvgtYMoRSapyLzqwP8xEtetgHhyvRHtfXFDq8u8wzwsH",
  "key7": "5Y6hbqMXpKVoTYUCbmQU3kPhWuRRRpgevX5yRFdg5sxSfch3cUBAEvf5oDGHptheLFgfZu3GxkNGkaRCVZg8xu48",
  "key8": "3p6PWiKpAyAaJPBxky46W5WWH9BwjPH9ZnNas263zgTrMpYmTiRPpLrGhgx7PLNbxLjThBiBPgH2fvKUVtrn1wea",
  "key9": "RdT2PESctGWjeAvNuReohxyVR6ASXoV4jE6KHqVA9dKb7gCT9EPgt77W5nK2mhL2cf2va8xGVMYd6mna1p44jvv",
  "key10": "5UvSoVjYYnGtDVXeXu4LqEqJ5rN5eQ3zDLmczHVfdGMybhXpsz5uKefEP8aZkf4Da4W67tSjf3MTZGm3TWejKqut",
  "key11": "67acFxaZ7RX5fxiJswRa1uTkxHUDQnb2WMHqmJRycyh8nKbqRvjYLGKmQqoiq3ckWpUTwmo6NQnutAJ2tHaByewh",
  "key12": "4SoGi5t4LTDZaEgCyYbLoKTkgD9UWyf6NH4RsDTJkJutJWufpmS5Yu4vCMDzkVMv4XmXbDkUCMh6HzknPUFoL9Dc",
  "key13": "2Y1gGwPfJBpGyNdBuAPg7BS9pNNUTtqFfQEcsqHf6BxJcC4GnZBcVSnZzqGhktyVTZ1JUo2j15BmRs2vGb7kdJkm",
  "key14": "5RKvs6dkELbDAo2RYoWfZ2sUD3zK5ZJo5SUnuq9aEi1eEzFvhJJG8mbbobmAmnjcDfzSQk7SGcFZ2JRpLGHgTVeq",
  "key15": "2AYx4v1xqQMEiGpiCkJvdLc8bszRqoyRSkPVXUPs2QSE1CnmbXaqGHZRY447QHjQY63HaXGaoFG5YacG7BLVdwvu",
  "key16": "58H34Z5fqwAhBCkPNVqf3yfXJruyuheaYzYepZUzBTA9UMDPs3fzENWp25rKSgbgjVH8L23jx5keAGTGJsDBwXA4",
  "key17": "rwFRZ5eYqo3Bku1Pe523MzKvmmF2Su4cb5wDKU29T74Js6g9agKLkRA57EgUF7MK2uRGKFXQnJmHwMeJTsu3zds",
  "key18": "AGPVAgomhqKBkCb1BRurz7GiFisbvg2TBsDtrZB89VtN5HRgfqxH1BCh6EiseEyHpi5L5tZndaHfJhYz5rwVnEe",
  "key19": "3xzMbvKZZL16LaLbb8EP97mePnuxMbckdvNmD8k9dc74YsPGRhMWtFJKHg9fxTE1XquevkBcmVtsrJJ97bqfQLo3",
  "key20": "4fTtThjvaZkQ37beezwkwSLLENSutCj8kNrPEFT2VhHQte2H7U2vozo9TYxx4u9hd83uisrcjutBXgBH78sYhUjo",
  "key21": "3WN3oGSUzqJiwLZ1H5ECbt8Kut6jGjwdM6mxChL6VZTAodTX3Q6ynGUbfZfk3rFV744Q2pTcxaZq2K9ZtfzhxrU5",
  "key22": "2TgC8XWaNa891r7JJnx1cqVrvRfyFUTQcq2v1BaFJpx9XoRHgb2Lcdrp48Ka47nStGiUfSzLwoetzdELhtsFqmNG",
  "key23": "5aFBN28yvwswM3d41oQ7YN46JwNvQm4bsvq8HyM82hb9HFHSHHF5HyCU92BcP9Fc2NoboMheZXptnyKV8bJacrY",
  "key24": "3QyPj2q62db9HgssQt3ESdSaAMJDcGLM8R4RLvo7bxMZzM6mR47YmdnMpgL3MuENBZj7o9oaWmsj7tDecuPjcjHp",
  "key25": "5gVZoFDmciwTX27JWV2YoJB5fmjFjLfhJK3SLsik5ro4uLdDB9jzRw3RFqb3D3NBYa96q6WneUbmeTeJaJRkp3d6",
  "key26": "aLTpQuyLND7sS9M4FH3S5YJChGBkUDzNYzXJMQEpmYctitmrLoPTRbrrfv5oAuXEH8iESvVwzZPirGQtDo7zYpm",
  "key27": "5AqVb8XdAKd2tLaqUWiKN1EHu3fndKUAWdRjPRAmTLs8aD2u1cvxXCfMxDeTGeExtMXtpsu9V7jY5kLKetLLG1sL",
  "key28": "3uFUyMgKurpSUQPQMEgKt7HgtRTgBD6NtULX4Q5YGkaaUkdw9jNbtwi8rdGvTomxc4GJTazbhWBdk34HhG8UeGcP",
  "key29": "5561BA3u2VNsb84GX1t9FJKBCwUknZvKbGKtrrkpjTk5jwJGNSoMKSB8WTmxHC5T13rgDZBf13UvHQM6smFb3ypi",
  "key30": "4mBCitjjpPwN6aE9856SzhDTvm6f4MJZSBwmQYA5TDLR1nNfAhJzWd5VcTSzw1F1vQpFjXrCn1nbYhCtTpBFUtMX",
  "key31": "3Tw7uTZwhBirrurEFEYsp7F4fk9TVx38jtFWNXhA6PNXAg5FVfBQjX5iUuwvWCGyvv1S7z7TxJcbJrRekLNkfvbG"
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
