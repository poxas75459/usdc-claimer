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
    "5NnpBp8LKBi6FA6ravhcEoKh7AMMQ1cN9VGrgzkQyvxBvV8YXnviuEDCJEmtE6yvajsXTgGuqToUqSa9zvWvXLT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oVszyTqK6oHot22U2myEXJgpYSEDDCQKo6BbZ7MXWuYepyBw1o3WPK1HFXqp2eUc6NPBs8zavq3Zfv2HahqKkUw",
  "key1": "2oENFEbS62p6HqZ44fCzCsQ5m8Nbhr7rbi6gv2p6j3UB26ZX6XWXgUDScQk8SyvbymRyCUkjP2LvHS4SPk2gurYY",
  "key2": "ZuKYuvTw1BxzzLi7Z5HxTwedha3KNj8eqsVoi5jyRokMDiYPRYFEr81Hj4zcmqQJJrSk7Sx3gZfWR3qvDt3JjfS",
  "key3": "2XuuUyxtBss4BV9JCKcFuCScb7x1CiU1LdguLjU85rrQQk1vvqfjsTR9vv1JzX3HZBoYoDeiQr7EktAdhWafmduL",
  "key4": "5171qaieh3jxEQsWTeuXXnRnfptzFkxPPDRfGp8kihEmy5RtB8vTVQy88BELUwzDKDmSRBoxKGwb15Y8Ksupq5mo",
  "key5": "5setQ3PTPudEgiJGPgHP3Mr2jF4BCmbLnv7C17i6Wd6ubGeUnL3TTpYApSEtAfGhEZSRFkYVijtYfwRJLPXcjaqf",
  "key6": "37bZL6Ru1o6V8dRc2iH7zYQWCkcNXSNe37Xuj57c8LQUHNoarBrNd14zR4W6T17SqcCktybgDcMdpTTsFFaqr7oq",
  "key7": "65iSmQhaVwSbvCqJCt5kkZ1ts7KgP2YXHZY6nU6nMVpzKpLpRt6wSFieCL3wA5HP7xJo4yc5apj49etZpkLX2yHB",
  "key8": "62TGnB2QYUVBjPvXJzs7WK2ynp5zcrQXnTorBcHg1z2HWfyarfFfbFVwRtcgvkD13YKdGCBQkchAvs4MVyHwvazX",
  "key9": "2aw5hP1Zfc5DtPheKvcv9dMWhEzdxohDjQeAMxUPpoiHc8arkodUQD1JTwxnFSj9x8bYyKficyTpYdVw1drLUqiV",
  "key10": "61e66baJWtNsrpXvVvz3zTNrxp1dWfpSvMymEfAb2awRBMu8CC7YYcDN5smApivi3t1q7JA7t8PUMi9U7car8ETo",
  "key11": "53tJikYnt5KJgat4hfjkx84hozBXzeu8VhUmH8BguLue9zq61gv9gENkh8uss4xUqPFjetYPBnash6dptcB72FnM",
  "key12": "e9y8m55YbZ7kXvLD8Pdui8oysQYDtgK8QXDwaR7tS8k6bz9mv44B1TVuqE1tW3WTWoStkLpcbsCR3Bjbi3LedME",
  "key13": "3k9mrbGUnuVzm6hAnqDXwZyCCMjb75gicB3VHYFmAmVLMgEFCUaVF6oYCj3GPHSgdZKQ6UskvGDXXDudXkxcmEzQ",
  "key14": "5nxcbusv2vjDPNqvcsrSHhPtLe6MHfiRAGinpChx2mPozo4mzLCdA37bZHjjeFtWuw215cmyCmtdeVnHB9CMrKPP",
  "key15": "1ZXmr78qt1Cw7gVgsaLthqDQuCRDDzggG5sDiHVSabgWSfJogQicckdgMn61U6YDGvLmeVbXZzHVJGHtthLroHv",
  "key16": "2qQ8aY2yZudpA4yAfLt4MHp3S49u6BwBWUB5G1H8e8yxejTZSk7iyLVYUXY344GnQBpAQPDf7HGoCnjr2P2xpAs6",
  "key17": "5VwzJJLA9poCBZbJ8GvqUrmxeVnQGTKk5fEquUuZTH9sC44iFdjunNmyxKBSYGkcWPBTvPvycS7jQYPAY8t5btCt",
  "key18": "3sjqkwxbKJZs4zF3UzpEmH5fo14dV9pv27M59c5gW4KybEKtpLEGrgRreUjeQDhbpEeThuViFTeXEdgRatgHfQ9F",
  "key19": "4XQCVURdKDMjyT98z4oyiaknSKDDi6ZF8S57vsXD3687Wd6rz5tXhAKcLv7D1Xu6WfgZNCRMkSLgacaUSr2as8Bd",
  "key20": "2EmUm24UnDznTGECYcBqMJvwMCGRsgvhrdLrWRMAo6hixfoirAeLm6AiSx4f6YbGiNxwdYKWkcti9YRNEGVQb3tD",
  "key21": "29uix63aKMxzv8MxvJ9VLwpvqrqpRNXbjSxkim1qubYzSvJBMV4gNjSQYNo9QEyk9XBkXgxtpYfpRH2D6u36A8uf",
  "key22": "3cYJe1gUGXNJBaaaUZ14E2CtCrjMmBeBRLBiex4VDirL8J23EM9MoYktiRfCndjBz9AcHNTUuhBC6DE8xnugxzGu",
  "key23": "2QLaY4mBwEavwsmMpLFpipKD76A1jGDpZ6bFa1LrjBaEZgQkqZn7RqgETQ7AAAjVa8rGQLFymzvWaKWV67dBwCsZ",
  "key24": "4rB8fLGD9v9bipebzJn5tRJH7LeYPkDQ3MbtGnTpiYomjPuSrhuCexSg8zAu7epxJpd1tfWu4Kc8NwaNwQj945CQ",
  "key25": "4k8uJudqJDtcP9wfS8yodeiTF6XCndvSMtqgGJXKPs85KchXhaXFkzKCWBFgwgEFYysHrLqwHYb332aZSJFdjRwT",
  "key26": "4P41Vop41uhjwonhUN3eu1GtWWo7r2CLZ6TVG9xtK5bjTKB1oUW3LY9zUwnFer5r6rbGugsUQU7gtQ5kcajBzPL2",
  "key27": "yiYC5JfMD9Zcf7odys6pShQUNkA2Wfkg4iYyBNEGVZ4QZdqNfsA3m4vYQPVbdnwszpkFWBsLJGmyog319EENgZg",
  "key28": "5tYscUGTfGFDWVPT11NkySiftDpFnG7N1qtwhehcb4ju6xK4nhKWanyEExqZn8MLvn8rGebAMyczq7zBbHYD4QnD",
  "key29": "4NYCsoMqqMbPMPf8UgoGaGeo2E2yvTeG8KYBSPTugPUkJCy1jr3z6sThgpc8t6wXfPnx5oSZeoA8as6Aywk2gQ4K",
  "key30": "2NtverbAoce3Fedz7kYq7bV65r6LzVqwh2etsPxEcEqJneWkud7CYXWigbLHTBFcFSSfCmPZg4JfaUXhEHZQHcx1",
  "key31": "5TgH3e11BfmZh1qEfLkvFcXg4XgtyGX18tLrU2Rwko5pfQoWnK6b2KR1zoLKk1Ueie6GVW9TZfnaMWT5XC3bN6tb",
  "key32": "2uoT3iKzeFUtfN3GsHsQG7RWvN63kXzGsEstiDoM52oa6DwPizNHJ2wvFHv6rreYjRNiSQvDMpnLgF8NH24owZUi",
  "key33": "5487BeYuZLpKLeg627rGu67292Wu2erdbk6CPLt1jQ7timqX7N62oCzYxL7jJJe2sdomKGGTHxGcgWZ85dASKB4a",
  "key34": "29eHuBFC7P2sEUpFD4UXvcp4ZNzSKzWNvm4jf3G1F6LvUYWGs5kEdSNsTPd6QSw6Nc7p2zQJSphDUFKLwCx1VXpS",
  "key35": "2p9hNjPUbmNx8cc6HbrvwsfYEb7EzRsoSjEvFmZAVSvGCUdQP3Qp4bLCfcGGrUeHF1giMutFnpU3En3wQ6bdz5rf",
  "key36": "kXwAYHXWfbaGdrYVkEcrktaA7iy2N4TsZCpZhdVS7wbAa2cKFiRoywj5chBy7NaTEhipHcqbYMySWNvHkgMMvm4",
  "key37": "FiXMkAiNnrRLJBSq1SByXJWwy5GPjtfgW1W2jaQrcpaAJuuBvh9J2SmcHAMyYW7hBkoPZeSqhjS5NWNvjLsJquF",
  "key38": "5n1YeLiMXxXvh7WzG2YfMY5UCeU4HoNbGdpytobmULCBCCTHyzeJmFEPiighDc9YV2oqq2ND7ip7xvj9xHVh64Cx",
  "key39": "4j4RJxiGGxWoVLmTRPstimXrPABarACKKxSQhGxsrkgZBx26zyF86jxszrM4GbTv3pfgn1emRwH6kCFq8ygnk9af"
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
