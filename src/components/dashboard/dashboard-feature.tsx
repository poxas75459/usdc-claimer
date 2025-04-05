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
    "31XcZCaWoD63cBoUpx9Mx4QcygDnwFUw9NoqzAzqn9afmWLLPYHAPreracKV3wmAy31X9Aryoy2hhBnJw9czD3z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28uG2sHXrMiKEmcLUbWAUvwpbkNuYUaeiSPskfdTxovtoUoqBKMX86UnU4583FyVpwRQFfWxkPSmMEA2WYFhKNK5",
  "key1": "5qTs6NYfRTfUmsrLoo9sHGaQWVw2ei5naAuvSzn9vmKQM9AWeGMu6XWM7A49FE53eTKPym8Dkt7ziUw5bjv3TYRU",
  "key2": "4nqyZr7tJy7VJuMXJpKUgAHtBj46K9vQvhXb6wPeZHMd7HKX27PXV6eUWbpCbfj7FM9C9w5LUPRWXVoi5DFEYQLd",
  "key3": "rMp26RN54N3eMTRrLA6kYYQoMavX4DjZ2D7hAFL9x5BhjncUvZVTL8J94aVWgNW1hJ5E1gYfkXCnawTf9RM1QSK",
  "key4": "5GtoTmHsZo56TBiaPZHjMjotspvto13KVXqtvLmsxny7eHZrGiS4JRwKzjxVnssf5pPKAFgPMvCzFpJmdAjEeoCK",
  "key5": "5G8R6yUE7vRdpQyXjyN7i5FBPpd9ygHSwHRk7QSUKE34wYuEsEvTCnha1gMm3qots3ghGf1s6bKQjETyysfnuU1d",
  "key6": "5r1wTKfDErZuFWvFmq7i4qHfFXYMEbmaSh3yeq3Z4uatpBBkJ9dEWZ8FyHfB5YfAQJYkaBmgXXPueNkd2mLcqmeS",
  "key7": "3Ecu7YjKjDqPU5ZZFmKihaDtSRNpzHMffP1CP8RpV27di6dhnAzHPKyRiu1t56aG96xDNZk13FzB75e3CRsNeDei",
  "key8": "4S1AuUA2BCZmfpEPd66pqgMQJ1jxchhoNcG9Mv2zPf9QF5F3ugPLFcddvxkKeotmLzvcmmmzi5VpT8gANNpU9YkM",
  "key9": "5fwfZtdBuJQpQEZkPzRzuLTeyFWJMhnhs6wCTdaHfMwBwtz9YoSFpC5Jy2dAMpZoXZ7vidgDyvv3uJFR4NmeacRB",
  "key10": "4kduWYeGvDvJEjXdBpou5wcbUkqSQGAEU3HYG1cqA62Cc5nU6QUvTMuDejJmGCmbpQq9cwGqKGtTb6BnPo6xqyV1",
  "key11": "XzW8KBB2LAQHie6gTYQyEqzKHwQSPzNDaDruguNbzm1WqkmFYaYNSZPAd7JMKet1C6w3e7nVU4T9H56gzf94qRe",
  "key12": "4LpGuE8ng7PU5tvwtCeSEJ4PQfckJmL3uqoD3q81Xt3kkNSEF7cTdEsjpmbt4n2LH3EwVvf866Nfx6Qvoz4bq7Lb",
  "key13": "317FYqRpdQY2LaXyWZkj9gwffDwW5VRHW4Zx1i8Pi64QofJFK5JQSf2TbHQTL6c9sEAAfmbk2Sa6F88tAff73zpD",
  "key14": "2w8gXRSJbaeRWdL7nsqxvaZGutviW7P49wowG8Qy4GpQtyQUciZwApR61DWKKtSvxLQxqpQuKRDCqMfn9nQ3b7aU",
  "key15": "5DybpPv48jRhKZmNzjbKu6wUgCm6ADLH1EPXMtHY7vXtdJa1m94nR4VKhaWZpgoTbUAvuAZSEp8KgNJ9VGRJrB8x",
  "key16": "4UBQ6bp9CZV1V5CKqTboJ2EDHEBrdcCuAXCXu3uyJmvXQCAJWiLT8XxS59qNTY4qFV498sPP244xE8EYFRkbAT9v",
  "key17": "3sspeFpZcFTiqg74VCZCmE9ZhCzygR5N2QTsrkDQfpX7zVeiYgzizYy1NR6q1mECnBFbHTjCR9xP7JkqzBTgxZfy",
  "key18": "DMrmKNgoBh5kmtGA8qHZ6GDDhMtPQJaHtgVHgyFkvQyTMUrz4fsVDAj9vaAcDUTsArLiddSYTagLdpkgXtHLZXh",
  "key19": "3wKcgiNzVDAs3L5KZzE8DxiRGHCzJ36w4h4hBH76TkEKunAiFJtbeadoKsWezf9atGkbDMiRL4HrG4NqUSEuk7Yy",
  "key20": "3V3WskfeH3RbC1TMQzVcB7HQVroSCiXxRX7rTx1euZgBDhWQiVtBCxXrrMrDenJNMNmA3hFJymYkWK9TbVG2xpwS",
  "key21": "4AppD3GxWh3sKAaaC1rM5HExBp4kReREAF6LiDntJQ3FecMq8GGx4A9WLKXTePuDoKzMgxfLjk2K7GCeGuwjYLF6",
  "key22": "4S7aaL7LDebUSVWXhEMGFL3bDQGVm77CsogUd9HRekWR1E1tBZp9wgtNzoFKi6QEDdMd89AhxLXa6RsdVB2wgaQJ",
  "key23": "3YBLS8u8zwHFvfSnUpqDGw3Xy7ABnGHtyWeB7fbMQKdpcRK7Po827Rt1dTeufTxEmGXsXSk236gZGWzouS4vdehi",
  "key24": "5eSKnssDaLzFdHS3mfap5M4RHQGDKpN7KLGJVogWpmWfyAY1E4EkxcUyBPwA4G5r7CcqxvzCGdHkT6EPP6LN5R9k",
  "key25": "NTveKABZRB8TApqyXMB7rJ72oV8cZByck57AE3uHuCvHYGP5gDCxXxYneSAES14jC5RGRwerrV2zPZL4bDvjmUt",
  "key26": "2d6zu6a8pmtPfNqLH5XJDNuWnrH6YSryBzzsZiCr1PrTLzZvAttvJuG7wJuo7qVjq2w7vFSw19gnccQiHm4n8EzZ",
  "key27": "45NKYaPFDbd2x52dJgxsMMrGK6SuVvroRz1RJsQ9FGkMSob62YV3hEUM2CEzF5VRZQcVXFmwyLAndEssvnbBQJk6",
  "key28": "5dij9h2qHd8ahNqERysTU3594ptZiGrLXyaDeAMweZm9ZkypyzbW8kvoWswMoJG4jYqbo1y4AcYEvKEvJwkBDAQG",
  "key29": "7qxXgzeZaWanw5ngRZnyFs9TosCo3ggH7Gs1vanmqaSrp9ZfKSieEQg4mCuD7QZ2DDzb8UBeEoPyzSfSLZZWfz2",
  "key30": "2XjZUZEFgkSy88cedt5xGL7y8ZSkH2DHzs9uLnXrGWRxAfxud3xPjCZ6AcopRFuLtzajJ9jjpqcnu9AoRvBZsSev",
  "key31": "2qsiCq8zb6qJPZ7DdSTYC4eWM3W6w26HxxUbCjzAfU9s2q7Wbwd6vtodV9MjgPRjeszCQwLs26tu1pn9KzcGRTWE",
  "key32": "2wgpq2kLfH2a1JbgEq8Z8MQztf75gXk5NQ5PXkG9LeqaRX5DYtjoApiAaL8B2Ute9DiuKoFWrvgSCKNrgiUoDJKN",
  "key33": "4QL51oBSEncXyh43FVXGrRRkXp1MnppYeDMACux7C3TeaybmodmYfwnPhvd5mbgdcKArbZ5KsqChHpXdZyT2qaty",
  "key34": "jD2s8NjPSCKp4X9k8Yo3ytTWbuHRtMmsjvMq2L3QXFuG9M5FLf8BU2a7gbKwb5EnQVmSKzWoMmudsxHKejWNTpg",
  "key35": "ZSp3z2EugCrDjQpzhCcy6wrxmHwExkkB7bdRf6uGMz165VjtdsHJxqcVxjMFFFGoy5QJ93St2yxw1koU2iuknPg",
  "key36": "4tz22eNDUrnue8Na27jAmQCMhN8ogYRRtwdGLdvPeuFD9Y1ghBRezvb37nF8E4r56pEDS1FZsxaHzdvbYEpMb2wp",
  "key37": "g3Wr8LzvgNEFRJ8cwboKyqrakmDk3tVfnzkYh2SenT3nxQGe5NsWNZc6CKewXUHuxpoYDUvGPFc22e2S48WT55j",
  "key38": "2SLU6L5qGLg79PsU12asduR3q9LcQrrmt1px8DsQ9Bty61NZvgLuXMZUBs24Nbrg2gQhVsh7xu6ENTtpgUmZshmT",
  "key39": "F4YwBqdukLHkNhwyQJuqPwoY37eaZ5KPPKv5xoYrtMkdFaLKT4wm7Lccxpgr1NLYbdRVk8K7ezjJzddDTqTagAb",
  "key40": "5kyVZMAPm9xPMKjA79tA1tHMYTsURxHkvaQYcLw34wuTsRqBfErkSTxDyB9dypzR9PTurf6jeKVV4Kd4UVvQ2XcS",
  "key41": "4f9d8mApfBHREX8t1KbJFao4Jn57dh9DMiMX75sEodDiiQ7cGf2AKLZsPjH2Ardc1budVDPBioqLwmZp5LuxsBou",
  "key42": "5FXyVKT3wCX9d3a2eML48oKQdhk2HhcQ9UbjeL7qqr7ykNieimXxFdmTwoZASEnJsnnydSC8B6eECVYLiZafp7vH",
  "key43": "3qGrri1WrrHYEjXRvJnLUW7RnGi67WmSihJWoo22NL3Vb5c7UgjdZu8EaNGpuey8qAwtyn4jy544NtrQuFCVESXF",
  "key44": "8LBadToLFQFj33Uq7M9CW6r9B4wJTQ6fFvvSmi7B8LKKqZ7dJq2GsN1S7YLmjg7HXeWuKy9m4aM2gsZthEXb6w3",
  "key45": "24uNMq6H3GtUVhVRTPRhRxa5U5aZbBMoQ6xBUxvwjZVL5hpkSMXB27VXoxrWV6oo7Zsn3u7NhB5dQLT5e81eP3sW",
  "key46": "Rr84RDFH7hJwcg3SoRVLMNVwQiTL9wqD5SjfmXcxjgcXEjGJeJNnMQyrtxMucN1HBH9KdTt1psEsxFkMHNkMxbh",
  "key47": "3xRuJGBXG1KwXPPn82qXgNCbjNF3sfctxyZYLXawBzCaXt5MStZX8FF2gUuPeVbvH1kMWhSfZoqqjTEh93M6GQhd"
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
