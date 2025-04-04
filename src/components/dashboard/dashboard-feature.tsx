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
    "3JyBJPYYPoVuzJzMS3KToJFfbvKBkTe2zQE6MhPHDNrtNW7ux5m9jfV8HZ8WMAkR92VFEGrknHnYYcBfbkAZzKnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWMjy6cd7579apKo1KFFbKtwP9Etz8oJMc3QPP5t5jfkVTQjvCoYYmdzeEjM8dFBNsXd8uPpjtWyBgmxowSTdn7",
  "key1": "5vAxKTCzDMhATYzfy2QXvXJ9nVwM9xgw3ooGcV1mhYxpbuu3gZsCxF9kWwwVeDr6Wd2wenRNEP8p1fc11eiHaa2h",
  "key2": "2dEuwAkoRU3n5nKMPvPSyNXK6XrdZqmh46TKgAg1uj9REphqfqjMYLVs8P1t7gRur2FFuLc8mVWo72YtyPtJBAPk",
  "key3": "3ezVRYY9CPp6LqUVj2RNdHDbkS1nCJj1Jx5Kx8vBCHkh5ejMx3expFcLKLdup4RPz9vzyNNKVEcDcnQBDe8o8nxu",
  "key4": "4y23zc8LEGJ2MMTiyLA4cjuGoSBaVoPZyCCa5q8PZcfDCUmosSGrDuCJXRnY2jN9VhiBLxK1edZwTnb9ivNvSDsa",
  "key5": "5U9oHLjR1vW1S4REJPUPaHFLQ1jYHFA1eyiw4A1qcWiYz6db6rAmdWwjDK556hK1aQK4BhLbqBrsgDUuACof7Ema",
  "key6": "tmw2dmkFWhBsPBGoHMLndMKL5utiemfQivh6YsBeLfdt2RSfauHXQEhJTSeTRjmddUfB5rJeXP32CgozkBK3txp",
  "key7": "vu5yuAyBSNVyG3x98bbkHeVTeSQ5o9SBbskZVwCqaz1dtCmQEoL1wTABzvRmCEuVFsc1WCDWtXGEFaVw55rhzMf",
  "key8": "5uMAvypva4uYgK1sMNGBtAR4PXy2qaJ4Ta4wZQRYWeYJXgRfboet2wNZpMx68xUUxdY58D3fgEJDtadV2QvtsWPK",
  "key9": "qz6aC3PfQs3iwggErUx1ubvwToQ9RvmUpe4UvngjJjquJfa9EjHCoXBb5oZdsz7T9N8t7bi7X8Q49G7H3y4sATf",
  "key10": "2tuFub7twphjBhyAxnFMrA6T2rzyFfwJXW53fNizUPMAzEgQZ2mesSkMrw58biLDWobsATS1tfPcxuNhD4eMHVy3",
  "key11": "3PXZpZUtkqQ1Lv7iPAtZkyo9d8tx2YV8L5euAuNsW4DfFNwN9bsd2xanQ3qFabxHb7Mxp6MW9hhFG4R2kaWJC6Rf",
  "key12": "PY59pP63ciV8hqsjdewKgcyb6Ja1uNQ2qvCPu1r9pYyHGm55D1Vt7Cz8mXWPaTi2Sa8DFdn7eDcb8d5DmhfApWd",
  "key13": "TspExjqCSXMaTPCzgnyvB9Q7NrhnHvenMADcwfrCjD3kqmJ7zaTL6WTKQEvM8K6VX7DqHiRi4Tsp4gR1p35hSfi",
  "key14": "5uX6s1eyaJcbcbU48vxRchZFpP4kM2zEgNpDzuooXDS9YxYtuq94Dpz5Dm7pBbLN5CZeGds7K5y14nzAbDVuc2jq",
  "key15": "faDBGKUMf4otVACzpgUcMpyFpCZ9BzAwPQRf4GD8jR9gXwvFvxJ9vmg5xZoqLiWWnEGrXRhJYYvYxLtmqkjkdMY",
  "key16": "pUS2esBZpvFn1h6R7DJtDKAt84QSb8iVJ1mYfxTssuCbsQiERhmUmFymbfYt4PTPFmdH3SvBgbXqfr7c5m76RRW",
  "key17": "52EFBfJzXfKMHJXJugtYoeynB2x71vaLJMEjXZNRczT2uXfPC4tXp1L53nKzEyFJjjVqzoWwJqHJXi3Hg2GpHxUc",
  "key18": "3Mc1UiK3AL4kYcPfxstXmdyZQ1nzFKzmfDKkpLPDk5izRWh2mhc3CswVn7xrZNf8SAy9RRivfSCYYsAfFZiW4gyw",
  "key19": "VHve6S8WFbAajohgrxB2TaWGBne5toFub57EJ9m3NU2QccmouNhvbRpLQNm3ZDPWaBtTUVc5XueRM6o52ZbWTtE",
  "key20": "4RuDkQcqqxFiwSVBwxJkd924TbX999wFEc9keyoBpfW7DtkrS9B6brKy8BjbqdQLucW6vwBvsLtFiVGPfBUkBN2P",
  "key21": "39xWPFyyfVZo3rW2KwtzAsFQ1umNQ4pda8u4eRg5GwgKU7HzrEWceiifgJavGomNpHLRcebU9GFJCcU9uPjFNWuP",
  "key22": "5RBvpRrbp97sGXRptRovY92rB6dLEYfSFsJSFtPRRekP4zs438ThqxENrVF1iJSZe9eycwz9R89r4uNjWPfeueMP",
  "key23": "5D8mmBRQT1qfYea4inbLPpvToyxkgM1mqYFrcdSBqSjaiHhJ4JG6mMzDSngSyxbD6STDLXgPFaq1z4L3HShf7PHd",
  "key24": "4W6ioimGJPJuzAmYFtLhcKtcVYVuWe98qx2C99LgTpnyoLQWcVy1Y428xjG2GN6RQ2GKd36bt4j4Qxbvg46T8R4d",
  "key25": "66uxyxbopCNM688WvTeMciVaqioByY74k4miA6ndeLWWoCMTWsF1CfhcaxxQNphSp4BdeBmHVsHwrH5qvY7Qhhgs",
  "key26": "VPyvzr7YMVuoLMGtr2mnpCuPCCKQGtwZbitBwBCiu6uhTKEuAWgKrpncwWV5mZQqYAyjHKTtM6RiX6k86unni78",
  "key27": "65KqTqEeR4959gJSXNrJ6ni28u8AziGcegYoCMYQXusCKziuMpGk89Uby5PBgsMHKTJtEG33t8iDBau4XpUY2UPa",
  "key28": "2FRhZHFQ1Dou9MbapmYPPFqryHvS9AB7DUoMX6hCiLhG62kv7K18gU3qzTP1V51GugTMPh6yMhyKU4SZ6esNpkKR",
  "key29": "648qcBDCeZ9NzfxqhQLgaPmgTRFyC72zRC3kmFdgJjSvJK47ui5Gvg6qyAfXTDT5Xm9Ke9QHQDQmHCfCtsfQtw4Z",
  "key30": "3gXFdjkeZfTw379Tj9yFmUx2HCTQewXLFZDgEW8U7A1GEFA3NuMUYJwC9JdoTqqT6W8TdbURxPpp7NmWZVGaWdUL",
  "key31": "93zvosGdU7AKv7yAThcfDknvGMwZDuxvq7mUphhpV1KuMn6hS1TgDr2n6x1LnmhjCNG9ehsstTRt29AY9jQcXwd",
  "key32": "5NYpyyWdNF8cn8G8it6sfqfqtv3wWWCeu2wJR8ZBDrYMqDPAXXfkxp3EvayqrKZX23n9wTTX6bng9HK9gpQo9hDy",
  "key33": "4AvYYniGFrthDQPXN8zcQ8ifXHdbm7BDc2etGu415YAmMvENYkqDMfQ9vf3QMaws6aPy5V8b6Q4tHvFZMMMVDiBZ",
  "key34": "42MnRQJBzePPxpovFHgu9k7utwpMY6n13PFoeX9j2V8ipYEHmMCzdkh8DVeJU7HKaWJnPoPVtPohyG9ftJj5Ehma",
  "key35": "2Bn5e63oQTFgkssT8pfcqzLGi3XLfKgu3day9V8Z6RbfCELPX65NDwjwu2nhpraGC31AjSafvV6gmkbXkFJYANfY",
  "key36": "whmAbFytUqh18fgrRz54L6AjvgiYNw9iqrU27ocdCXqM8aeHU55eaXGQbE2r8QhnnmnYLrxAUH7dote86rYyFgJ",
  "key37": "38RY7Z9ozaCRaqq7Y77HZYj3A6SVyzwUYe4N8d6qYDpDoF9meyLYNdBBekbQZLpyZZMrdXdouSAaHuusLEmLwepJ",
  "key38": "3gANvWVizkNRyuqpbkJKQBh3YPZ4srs9VRfzisk3FfE3SnrVLUAeUqWgbuScLKkq8odH1R86wDzeBNKVyrmSyEyY",
  "key39": "2cX94cKFygSe6hWF1cfsRtgSXoiaxLTXNZ9FyNocgJ7BwuDxiatgmHaSqgnGC8QG8kwSkoXT56iTFi7d1E66RMhK",
  "key40": "3Dsn3aajfm5JGVxmxQ8zF64rFTLiBsTvAPHfRHs9SuoMcEZgeLLFcNuPPn8Tukp3wFRuVCAbyKuK8JUQbaybG6AA",
  "key41": "2tTEvwwYvytVffLBuNR3CTWmR3YLyZ68AboucZCrY6ii5KbzYWkR45phNfejGMAametmiXSbEaXADovJasanUX71",
  "key42": "2e7EqMNsukP4aQxtvM94iZD4pwwKjABNzSXeZYE6xjpdWVkgPuMkWFLqKBC4Rz66AnfVwU3ybrA9tumeViGxh2w2",
  "key43": "YYUjB8fGGGwAb5ucrpTz35jLqcVv8E1yyhyxURX7Q5oUMA7m5H2tVk7gmvXZw34maNXfe7zwR9hbkVKqRQRY52r",
  "key44": "3SCZA9zaGCs8eNkiBLGCBbqSo2quu1zeNvYnACZFweH2U7pKtwfnpgr9Di5FwFK5j3tqcmBHuwbi2hDmaL3BT9QZ",
  "key45": "2QjQKCjfA7thrXQsnR2ApWRHzpV2KwAh5S5KhcA4osYbrYbDAYK4dwEDR9GVYaXmEHoG9btxB9ddQy2p3jCq88Ei",
  "key46": "o9mttSshKxmiFQcCtrg7WU6zhDxQs2LLvRKwy2wAf1y199Vo1bq5CTt7nU7saQ9xrzQQyZA26HkjboJvKueiw1w",
  "key47": "46tB3GMUN9cvqrAqmjZkrWHCJjgnsDBqBVMkN57QBz8nBM5a1h8syZRAPEBdiNmN7YB27GuE2MPKpBxYnnHq5qKZ",
  "key48": "52MB8QSy4P8ybK1UUmf6fweN4jwq3ee5QirBWhs8A4Y8uVWKiVPLw3Yir4DTpt6GnZnSV9UuMyqqaSkPL2gE5wNq",
  "key49": "E9Vn9TiWSEE1nrsGSdTYv7VvFJ2nMM9JozrFDaUMoX7iD2nsoZnAb3QaENF7XrnQVPpnhsXU3SdooZjinFN1E3L"
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
