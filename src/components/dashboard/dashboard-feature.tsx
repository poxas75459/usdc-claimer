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
    "moVSFUwNjY3p2goNgQspcaiR899d6uJC6gkVMLMosoTvnUC9roQeqNcVDXoBmQfC8hGz4M5tMosEPhYaPafeQUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YzD4M865DQpNspnTiGRCwwGqQGre5HESYmMHCSEmJfevvy6A1rY2jv1TfcXoh4Sodfq56CabnYujX6oqyecScg6",
  "key1": "4oZEHYjqNQZy2fJJS6psCsSm9TsEVVnzYbz57Ez9iq2rJqeAWYg9jXmjT6CXxzsP64vqfnKvwZLXUAgGY7UZZT66",
  "key2": "5cyqaHVQwaBgj77AgzxqsL5RepNSZJEgkN7EbANn4FPi9DJJ2oTF3Wz5nkyFVfR8HFwuKpT2aFfufo1a28ex1ep4",
  "key3": "5C6SJpcRNcnH6VfHG52At2L4B4JtfztUmk4DxH68VfDyrZQJwB3FNyJF1RrBGbavNNjJwYvyqkxKXBwyBSN8KcP7",
  "key4": "4RES62gRof58T5rDKaCpgK8Lhi5pFskMQHTNZhu8oAjStfTBJnjykhcB8iQrvuf3t85MCHDPXoRKiDbjeXHEoyXC",
  "key5": "3fCXJtcH8dTC1ozRVyCybc3R7wtUD5Sxviwgsjy9Hqgnd1JcS3DvcYXeerFEgXi8yxduMKpNGSwgVuHq3btWCE3B",
  "key6": "5sw9d8iwgr5iRJ3LepWixFRem9x7SKXAZHhjCwTzpb9Pnijnp8fod6YLHFWCWaxgk95xqoWuv7SaYraBhDRvq9bS",
  "key7": "4ALzS7n3ukMUHoZdtvHh3Xjik6gaemDxdYCZ6REmBtCCAevRiVCV9FPHxsL1CKfHs3VscSrHN12Re6SH1wgfS3Qe",
  "key8": "4z5n3VMHpvV335KkadeShvtLXFGgjudP27soFQQu7Xd9UM8aY2RjVYUXM9gk4dzZmGKmPXMbHQceiNqVgVHiuG1j",
  "key9": "36siJvrreq9UbFSJaP3qDLdSkdF3iFCfTtAYzwGVzDht15UTV8vMo4raDXxFSB84eSJmExc7Jtmdfvj1JQJnjStV",
  "key10": "4xMc8hGfkYe3YLmUM4QLumnCBLzj12s3NJddRffy2YKsA8P8ua3fZgWv9LtnTVdYWHo9qLaKEk6nrSqyQVyMWS4H",
  "key11": "2ipJ1zkcynpoQByqRiQ4zg1RYZUouaVwC5zphcyDtmBcVsujajfqT4JqN1dWZDwKViKBzniu8dhZ4UC1cCfoVVc8",
  "key12": "4h3tUUGPEY6fZsQtDkDKvC35gBjPpLpKhjfEdqL58VtPhYXQLiM1kspnN6Y8E32eUAohvJXJqTwsZ2NHQV1qF5AK",
  "key13": "3YBzFue73oBc3zxTCjbRfbbDFrreqWMGTJWDvBz65EdojSvkP2iFHum5Zw6vRzq9PtWk5Wg3yPoSE3NLXqhsQKzU",
  "key14": "5J7BA3BHBH1ucmqjXzaJQU6WXbVNRLzTQUVyXoGLVt2oEnDT9AbGxmtVdYaHc5YVinW4SFEGA397Z3gr8JbsyYDb",
  "key15": "5n8fWJjatzX2wxPr73QE9G32cB5uZpSdKwSPK95ERYFxY3g93gSzkh4DkqvyR5sMDcgD1bRSoXQ6BJ7jFr6aJjNU",
  "key16": "42hb7pcVtpQuo7wDEcwtq9dsCdUxuUztzDWN9trfsPQczKJGhrQByRyvZn13qkozK2VjotYZSGWeswN8vueZAKZU",
  "key17": "4vrYsJHGUmGpGENTfTPFyJF9SPD8pjXu6GnhwS4fJVKGYsBgQhx8WJEA9oYhSe2pkfU7U4wQ2s7mHm8XeDcadJrY",
  "key18": "23gkp8SdmNzmX2MJTomomiuW2S2v1VgPTbfqdVCDanooBuNPLcfmVpV7Zwro8CfqGcMRw119hC59tYPhh9rYKP8f",
  "key19": "84udioyEkrkiwCo3Zbm6oVQL2CLABbPpdaw2uPrDP6hoKoVHWdX9cPGXsADuKCZSL4wA5VtdnZkRgBTswiFPToK",
  "key20": "avABQocdsGiNGARbWVHQvcPVpBzphMctCQHpUPHjhPwkUM65ahDcK4fQKcb9M2367Bo2itzTdbQtJLhMzgLwDUo",
  "key21": "5u541ezmxzUHu6wWdi1QANqLWSPdHFJkT2pcEYy4s4YTPQrd23jf8mSizjEM9pKUuj4YAzD2tkJp2LXBYrDXAAFB",
  "key22": "59j45yjYANRHzaaUrfG2cdPERbuX2yTrDKFDPYVz5yQmtu9PPckoyncoexaiVq3ZcmCWTYUXCegnb3Ya4P6bAYPA",
  "key23": "3oGjsdpcUWTMbAnzNuj244hpG2wv647h14QaSmVcj5ttu7ezCXArRFWSWmWgq6f62gNHZ7rtuQSDdcGnDoHYsnwv",
  "key24": "4nt14ArSG1ZeE5zKmQkeXhabMRzxhg3HNn3pTjPfLN16DBnt8mx7vajDCRYJAZx6W8vtNFyvM7DFkioXzHLYzmkE",
  "key25": "QaURGQpjGoR1BEXgZEidkZd5mimB4vJ1k9EgohNbqBg2aBjEnuNebHbK3KJEixzspoeMwDsLncufzLFnE9EXEfW",
  "key26": "3XaeTs9bqaxTmTper8HmAAnD3Rh4Y11GKr6AJcjgjG8bP4oGcmfS7qcSnqTGZAVHzpCgB2QdyGCKnifA9MrZTfUN",
  "key27": "5etJGHMSKuNnEk9hBYWHvcunBbKEgw4TctbmTxMsALTTKCJA7phmRaPuXhKtUTJLu8txgUoXic5dZVVrNRkwMwn",
  "key28": "2rW2gnYuKhCK9Ma3jH4J7wHhGsXYq7eCFHkppdsMDmvHynvFxkF3AbgcAERX8y18VaPMf6xzKcAoUsfj9fkG4WGH",
  "key29": "4b7tZG6P44mLm6c6pCGi1ftQ4JLNuxaR3z6cxovXqxgzPjorH56k76TocdDmu2j55saeqwyTMFhUybEBpS3EMhA4",
  "key30": "5zgphcb3j2LEXpokSjjofxDibZevMwktCy295AJCCzXiVJx26GzHSGbyZEr8cw4ixm9kNWTvxjLt9GJSkdWMonD1",
  "key31": "q6hnuaZ9fmtxeqDkM9iZM5ksUjdgyPex15ncbogHxoaxiUwcqFRUqiWf3roEniyNBoW7bzTQYuP8HLBSZcFVQGa",
  "key32": "2fAq412EjwWskZhxqhaen6fjkP7LrTJmnCwgKV8AMnhRRmpoDauda3ZuMUTHmkJ1HKib1YMWBmEL59rauUdCEgNa",
  "key33": "5cD2D3ErbeKJmEhnSs6Bt3E5Md7KrbuCaXo1fB7QiNgpm7dLisHaKbwBqmywyTRZUBiLuWhvVwNfVTQ6RjRKmfCA",
  "key34": "3hTs21Z3J5owyUHgDvxqx5Tq9ZgD4AuDDRuskAA3T1oka5G2yqMK7gUmCSDebrzWQtRVGSYnm1eHp4vqs8554k1c",
  "key35": "xPE9McpUybB5zLLHxzcVNcty5BUE1VSrEn4mWprmmuyD1r7MDcaa2WUJ5p2vsUXpCoVTh594caboyBg8A5Z8S2B",
  "key36": "gxX17FfwEH21HPH9tCh88ZWB7mGjW7QkLCBAeVo1QB6Xg4noxMc1sCG1bMu7SjmJX2wdsFKroqAbj6UnwEtHf3x",
  "key37": "J53yWd1hz5mhf9T11A4Q6NKizPkFiEis7syD4pisAhMwJUS89FxpeSBvoJUtDN2Zb3sEFizUDDsqCViqeJGHQDB",
  "key38": "2bBkx1jYhW1fjXViKqsCAvpMMAepo9ETqSAtCbhh8rYUYqorvA6Y8BXi5MZa4y5brxrXxAegn6TYmeZrLAVZ7uex",
  "key39": "5ZzsaesfYy1HqZTyaFHrezqWNExBW57Sneg21PmR6RPoS1SDQ7CAsBG5HERyRRsEegPaRUHLmkCsUE3angxxwoJZ",
  "key40": "RFVeWTvWC9zDnmXhiP953jX8NYRMUzb173qu4HNFQ8Cug4qjsXbYpviyQdQx8YPaddsvgr2USWL4PnyFG9dtnmW",
  "key41": "47Qkox1NpUzJopC21ZD1Fp3PKGJacT133UP5jMH51dRTjB7S4FbKGcp5SfUAqsbxVA2smSeYiZxj9BphDKn45crU",
  "key42": "4JNfmY6dT3g5iaA5sd3B3rpjbzJERoRtUubjdHWDuFCfgV5iqYbRe1d9sSyRtG9jVTY67zTGFn4LCJKC27vY62cf",
  "key43": "3NnJD8GjzpnrKuXUtCNn6yB6te1emUCBUy4DufkFLHxt8XcLBYDu1xYhhsB8usNVN5hpk6AGm737HK4vqiL28Nc3",
  "key44": "3m5eefme93iF62Q7DS3xywLPh62FjXV3DvhZb5qJZUTFtrKBD69JLtGV3LrzXz8N3DZ18KpjcvKJN17kV4S1HzcE"
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
