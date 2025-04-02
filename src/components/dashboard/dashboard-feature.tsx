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
    "3PTjYrJXndKYgGrd7gR6HpfJh83e6PHqB6oct5H2g3kfnsW9CaJCACpNXGGrXTP8wGLf6e3bBKbgnXkUi4LLwnYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42q5s5n29WRy7F1cWc3jk4vLLxJeukq5utaCKcB6TMgzffQ5GY7mndQ4x3jWvxPwSDJBKEiGvHSvjKv7TZq2KAPi",
  "key1": "2M38u6QNykwZ8D2q59M5iQFTsNEDMsesszUsRLX2BM9nVgPKBg2dJwTK8xeCAgcpb4XMRJdozjQJMKsGiDi7H7JW",
  "key2": "5QA4zP49tktqAfLc3UFYSLpMMNz5jTHvzaBFLvJTbmkfDz1V6LPTmzoJcQr7wsa2ejhbGAjX6n5tNg6SXraRiYgw",
  "key3": "2TEao9QzM1G64BrM5ao9r2ZvQUfRdLswPwZ9nk7Hni3yK6K8Rnrk81dHh58tucrofj9RxcdHDk9bgce2LabPNquD",
  "key4": "67jbrgUKEGzmkhANLqgcNBJY7JtHs2oaXsAeEj84dT9eiEnapvDU3RKE8NFjGnnyLTsHN9FM9LsXNe89UvbNehdP",
  "key5": "2oMavjAagdpHdEREuHxAJkqQSYa6tPgZF1Pcq88nzZMVtRsEYSrZF8KNC6VfvjSXGywDdEDBBZP4mEg9z4VrAiv8",
  "key6": "GLaDCQhiMaqFtNboQxyANyWCbFsHD3VivYb1WXei2iJVEaJ6aKXoF7vsp4dtAKLNZhkPzTybfVmz66bkb54So8a",
  "key7": "59346CdqRDBJvnfLkToRdVJrcHBan9chLk3UNxNFtLQZEbZDjzpoDa3JSnY7va1JyhqPbKU8qUinrV8nHQqZNSRq",
  "key8": "Bhf628fcRLJEg6Bokq2p3P1tCAVYHURbBY4FYGrbu7rm9ukrURWiL92nSRCGsTdDMBHWY6LmLd9hkgTs18D42dt",
  "key9": "28fWj9fT45HQb8JxzxnYANLLJ5WSFbbCNAUSq4Y8Qr2TQdJLtLytesnCyC47LasqkKSPC33nYXHT8gssYcRnskwd",
  "key10": "25PaAFtgCU2FEZb4xyWEvAqV8JTaE2D8QK45g6ppCRGjz1E211bZHtGNaV3fnes35qrtDmeKV1f6XNrfXkymoEia",
  "key11": "2c8UqKFDT65TUwKNLpr59isS3BGJKok1894zi9KGkiJdwFCJbVZDo5ocBoxPmo6Xb28kFk24sPX2oiZZHma5rLsm",
  "key12": "Nd2ogS7JvxJGHir8YGQRx5eekE8AgysqcxsiLiyJm9ZyD7HMi4uHZQ7CmH4S42mXqrudT8zFppixMt55XTdmmZo",
  "key13": "1EuUA8jz8p81LyPDFgCwThuJEB3EFstM8sKqoqaEcSmsJn8wcXpseCnhhHABxuHAVKsPqYLV2CwLiA7cx9So71R",
  "key14": "3wjFAU7whbSnSt3QTtBivCDRctUay1htSLDXNsYr1fbDCqA7o5H8m2r62xLzMswcnfNZhzrtrbktX1WGao4Vow57",
  "key15": "5b6rEjBS5nTQCfkWHuquUA2cSCH8H2W9jXx3VpTRY9zPRmf2FtcBJ3xfebqXcML48tQssycqzog9jw9ikCtMUSq6",
  "key16": "3N7eDrfB1B3ZdacYtMWA5j4auKs5cYJBFMzGaCfRSEGa8EsL3xHgPmVChvLieGHBuHNJwqFr4zCP7scbieKE6NJh",
  "key17": "5zEnG7ab8t6Fk7S48MZxy2XqXkz5nAN7QY8unGk5EsaJJqTiNPACFRpGa1E3FK5Bimj4gCwBWJq9ssE6w1uL3vUY",
  "key18": "rTUQYGGjHZ8C6fMWX9f8QzPBuQ1ng9wRzp4B31mV3qU3BxGMMLjjK5Ei4u2tM7dxRJpsTAgfEK3pwRcT98pLqMt",
  "key19": "2CchBoa5q9YTpvLvv7bkBdvjKinji6528nzsKna4WEzmgcv81rB73murf8UGnBK8WJKuHqQ3ZvgW6XWtq8thvHME",
  "key20": "4a6fonKQ6JLec76PELqfTSFPsGbPCDvC8quABNuGtFppVycqCkdFceJL51bsVDuTUKeYYJF2u7RFL6fzbJskQLLh",
  "key21": "25g8xS1Tdn4RD5JXEK9m82AzHeMpHgdUvQQYinscv7AjRDN2TxP1aDfqSpBLP9gY72vX7MAop7MFh3E74aELLfBB",
  "key22": "2jiaHsDnwzw7KQCEz5btuMuUrh8y3z5yQCFswEMGEeV8xbZdmhvLAEMfxa6ZbLvmFj776mjzSTGcnyLryKBfpQXz",
  "key23": "2YtyMEQp7My218ejLJn3HaSGb96ZaWNAw2C4yiQNHwF5oLaTVbAMwRYpwK8Mf9kCPATUq4JPEHMgoRWWFaWNdLQq",
  "key24": "1YZnzfXD6Lz2eUZnAHJgVeDNEAXw7ygjGqievr9MUgNsLB2EBu3kPRLWnpoK2wG1ueLB4PRzE9HQHLc3jTt3Pqa",
  "key25": "67YK2jrhhjwULmE5VJaFHpaLW1UvFYUghKwT1wQWrVEESecLzoB2MiiDNhnARa2kyExithPSivX1kBbCY87HrxJG",
  "key26": "61ua8D36RdLMriwDA1wHUHgnVXBrdLjLsBYh8fxtgbFm5foySuC6FZKW6JoxpVey2cU3m8m6CCMV5FpHg2HVwgGE",
  "key27": "4kLHkazcNYrRSMHnD5m2DLT5Kmk45zE8pXNyBjFXh8aRqnWa1Pr6Ti8LiGJbj6Zs2zPFpGMp3gBweHYz63SxJdpX",
  "key28": "24M13NU3R2NVPP4F7GhyWBgmPCa23QGMtcgRnt6ji3xBWkRfDRqkYGj9wnTwP7sTVnvAd4M8QVdR3VbNjLk8P1jG",
  "key29": "66qHLn6FEFPBhvy4x1ymWoWpf8eJb4sQeGW1rPFuUEZhNvp4qqqJdYj8qLZW3sTjGb8LfbwxaMkbSTaNX7PEGwqQ",
  "key30": "3Tc6gurzBKSpAgGPDynkt6pDCntRzzENH7bvWJUzKJckP9spjK6AdytBdVKXn49721ynQDg86uE5YjNqYZNqMhoT",
  "key31": "2D6iCNvUkXDYspn8tG8jbV9Gwv1AiDBj4GGAnxNduVXzDqFCCbL1BcwYWUaSsw5Qz4ShKFNBU9dQHUrK6xahCfNa",
  "key32": "XpxVxKzRDhgXuD4YcRtSgqQFVfGoRaSQwUpPY7G4g4LNUCPg8cGj2EuFydCbDMXGMsvCubpXDANAfx28wCgqsSB",
  "key33": "3ovEnuSeAjes4oLNdocwvN2ynzwZYuocgPcmr7rCN7w5P19oMD6kn2MZP1Qs6ATdQnwkYgMhciBgMQQXm9pZha2K",
  "key34": "4CfFKxLjZxinZ3N8f8yTZk1dCjVtbSybN8YDSD4iAXf2KbuAVHHMvEb627F523tq45oZ44hQi1kQrkk2gehSpbEY",
  "key35": "LVpWnKhmUnzgQbxVB5KGmFgAR3mjhhLo3Nu5pvZV9t7qtSVt2GP5mQw46N48tWuMQLkQHRSuwr3vuuVBL8JSyVe",
  "key36": "frtZm215o4p4BEwBTinCgBTJ45TmUuEQaZQvYqq7QQCNfAQrUQA1cPqZRqLdkDLhhGzzQ7ZTeGnadhCaraF8WNe",
  "key37": "4LJZNB8GjBkT9arAgLRfrTcaEpDGFwmwLmb54Ak3tTPBrU6M2eemqkox8ZrLfFMiV5PpTw3w44uFJ4DMX2jEY579",
  "key38": "51v8BQyUz111n8HzBPgxA1LyzHcX3Gc7z8zhWJbxR7BqTQgijq6cji6arW3LTcLR5sxu1VKvnHCqcikPhhU5cH21",
  "key39": "32gbojtdYDJCA4upokpYfeJPGpcog6FoVTLpT6caKdqsyXQVo4rFaNCxECT3HccZb8YMzNuxQPoBJGkefMakSqe4",
  "key40": "go1yKMdS5nwYF3xZ5ZrrzVAsEiygHbTsmCaqKfGjWKvtmjiaxywpW2MEDv9EzT4mHAd4RQn2rhU8VU5QFjiA2q2",
  "key41": "2nvWWxZyuM6BbCA63PUQiV6anLTkT93VwecYe9stCVoLafYZTpRutBKA1aYfsX675Yjr6mUW3pqR95aoqbhtkV6m",
  "key42": "35TWSWaxohkvSr83p5wEfLCwuVbKtkkCaKeuRnhowgL8MfqGHXvUrFiUNkVJ9E98QkkvZN7GVR4K1k5aWv8aRE8K"
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
