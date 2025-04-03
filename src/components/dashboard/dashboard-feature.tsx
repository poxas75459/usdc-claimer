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
    "4S6nQ3HCZ5722vBqR7iWWBiDjDsNjQuG93fgLzanJr5wkUMwN6m97TB9yjXD4FfPgkpCZvkpAiXupp7Ha5Qfnnsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQK93Fo5V7ivu4GN5KDu545a331gxhs6Xv8qXYWfFdGX75RuKTegSB7BTho9WTkRQ5tYMFfSbhtjnzy18ZAZGJr",
  "key1": "j2bQDFCdeam76XpDBaDFQ54EkhdyxUvm76uJ1UvZCaWkbLCe6NVC1wQ816S6YHWM5bj2BZmNFTMhg7shS5Tov4x",
  "key2": "4j5JdZnxUqLhWw4qzZsHWwZHpb1C32npk4GsC8Wntx6qpqmXmyTonR71gU6FFwA2a9DWVrpy1HFYcEkwzXesCey9",
  "key3": "4Vm3sAsJaouocxy6Km6tWc1KeyrPJRpsGBfCQUFcze2RWKUiMEx44WxDRtPZu1VAu61NrgxfQhUrjGj95aDZ5KC8",
  "key4": "3rvEsJ8pdkubex3vMCtmzEZhukxuqwJxgLPhGB83ToRohZfGjoJBY2cmgco3BwFjh9TjDbJcunqiCPHqVjoyGuTR",
  "key5": "2wjmqepQySBeH1bdZch7XNTPpZNdmfCntmRXwGog95fu46bLW93r5mWv2XkQ5XND77Qni9dXn44hbQSrd1JMstQf",
  "key6": "7AL3U7SsnFKtd3aabgcWueeTFbVcPejftZyf6vbcX2iFQWXTwTMKie3HzALhmq2oP63ZhycHw6dR9UcJKvZn4Fw",
  "key7": "3iicg3G9nzssVMyUDy6qTscQJWamNF5LawfEkbP7Ru66UV9YBbECbNGvAYss11dJFDJNqHipByVvxW3bd8VA1xRJ",
  "key8": "3bWP3cEWTH52GVnWFKWj7PGizZJwPhMLPoLYSfEoa9n5Pf8bHsAxvkZhKZBU7m9YoDYwvsRYujXg5seT8p71sush",
  "key9": "58CGoBS7btX8txm5qMxuyfzsaJP7vA6N2farJS8fnteTVEfUNhhczzoJPtRPciBKYr4y2yUhFZai97pQ1a62vR1n",
  "key10": "5LXfmgMsVdZVigeAWwvCbL1x7maKHYyK78HUz4v9EwqhqhsdoWBqaGmhHrjmo4GUTU72hjjdywt1bEGuDH1LZTLp",
  "key11": "5f2TxsrSw3e3FscFoNng557aE22jWBrc7xL7f6km4TbGnn7DfLVvwUArW8x4wbjupPhDgfCSs6Dn9cVyGStrLfNR",
  "key12": "5JtEA6oiGs41NiyWH3JzKoeadVxyRkMUUpD2auFbJQe6qvrE7Z47mYpZsmzg1jicLLUXuTiempFM7YtPxNrxNiDQ",
  "key13": "3MvggK23ZzjM1HxHThX4zsZZWsaABWLg6VmZMyUVwyLtAZQN9QtBXBTPAG5bZMAL7v73BwWTeDrHDWBWaDXMMXMC",
  "key14": "4Mk8AeCC9twHk8nEaFLcJotsibkywUmii6y4A3YiNpdBi6oezFPtXATKSh3nmcd623TvN5bvePF7xZxk7eXoT2cw",
  "key15": "4AwJzuNFLFfahrXztdvEakkckuFe9u45UxHPDDFcnZgMCLeuJx5AQXvYBgFHkN2RHf1UHpUEEZo3ZCwB45HyY25Z",
  "key16": "4gNc74NfLarYLC5aeZxNygGpiHUEb7qndJo9VuGCPuY91z3V95Ee9ZqBpYTaGngT8p3y64SQCCnuG4RwUdhsRPzP",
  "key17": "2d8K5cfQv6kjV9SFbKYBcJUvxNMVPL15wYHE3BsYuV988rNLieaXzm9zgWYn7vHSrf5Jqu2jhkSvUSBfeJzkyPv8",
  "key18": "2cpGeYhH4W72jkEWFf7APUUgtH9c1LNZkipjNGUr3hYgfMphJDVhwG9y42Lpjg1S8HNF4uC1xqBoZRRm9jV5DPcF",
  "key19": "tAKd8m2VBZpGe2spy9EQevj9DCiyyQhuY9cUHboeFL53Q9ZcHfmNpohdCe2YUYzX22cDFxZ8enhzcn1q2fEgkok",
  "key20": "4YihCnB8GVRkA2fEPW8h9wpeHxaGeky25TEB9FGQxEd2atQc9iPmy9FAvQFg2g25U84YyWzLFjNqtcSrtHrQsnay",
  "key21": "Q9XNSLMDngXggY5fkmeL6JLh4vHpNS8zLGdqeGe4zcrZ3d8P289znk2tZbyJSQYH3rHPtg4kDg8ntwKFQV2MBp2",
  "key22": "jC3x5T4ySWdnw3UgMyBStKm1PpH2d9aEMZSpt1XYYUuqUDNrJcV7L62P3XMpXSHPhujJJY2wrw9fdy3oUuZitAj",
  "key23": "3M7edYfnD4Mni3rreAJtCzU2uupiqxaCTZ1Cr5i9w5xPZvJY9huXnFVLyspyvoY8x32E63J89iJBfd5iR4MxrTNc",
  "key24": "5ikwEgUmHJTDTEuxn8KYYnSbExJ5FoJCVwarckRNMghFCQ1RCTTBHf2N8Cy7g4nNqEgQtpbSQF6kFUKDLTj9U281",
  "key25": "57t1HmWDtqymMpSNJTuQ5JvykqKpkDHzhLXidfAPdgQJ6w1DFboNTvPbZyFP15x8SLcxrvMeDMNYATqG3b62evLv",
  "key26": "3hC4fKZTyZG8ZarXAiUZhAoxyYsWEPiCikTVbhCaPqWd6bLH4FAAiaVdFgabUqcCZd2ALm8daE4SeaCDkdKuWnWR",
  "key27": "2MtZcRpN1B1egCheyJTSe7xubNGK8nmRP5VpdSr4a3Lhkum2qvHJTX39eqCipuGUs2EhiCED8tbyeGaUFphRjAUN",
  "key28": "5gEesnjx9rSGhF7nyJjLpipmFzfQQBTEMNKKmtBvPbbttQuiRjRQnGbj9kG4Jy2TRnd3Py9kx2Ht8DFMb3BtavuK",
  "key29": "37hV6Kp8n1UGc7opfVbY49Mm6g5nVfGBsBMiuDzAa2EuLTR6rnkhZRTkpbVScAYtFJkmETY4jJ1Cqv5ho1KZytb9",
  "key30": "mjxCRoBLZb63Lr31Eidi4HXyJ6JG1JeQu5vy2wTyZ7yPWi4RUnKHSNLafFALYwTzSVq7RCmmTMpfXmFJ96xvbEe",
  "key31": "3AgjV1yQtwSBXMF5azFzPQudxpS5bNS4BFY5cHfRhohXyE6DC3PDz8ePKPBtJ5L5HeZAPHq3PvfEEUk5ixPddkmt",
  "key32": "4fVnK6d5MrPxN3vARs37VPZc65ZRoMohoFuqxN1aAVeWQK288qxcRW27JFDdQbEB6288LqRMe1CSa1FYcKaXBcKu",
  "key33": "5evDQPp4rMPtztEVMb1RqMQ97V2FP1SRmDEL8xBnx7zCz1rsK2CQgZK5UTgwYgcBuQVhgmzV83U8dSugSevttgbF",
  "key34": "4QYGm5LHaWt5mVfLPEvLuz8q9ZwD9GzA6n1ostanLEMbEtCJUqgBvbCE1VXYXN3p9vYymJRr7xkwxagg554TYYDQ",
  "key35": "5R3KAsdx9hhaLoWJyXp5v3oasaQPXV7g7xi8ZCRMapgzuyAPXyhsVTZmjAXdPmdabSRb9J3t2wEF5u9nv1hgdf7a",
  "key36": "rgUr6MrFyGFaJNBCFyohpELNh6W3GPVnua3qgLxynncQ4q5hi7H7i3sBQ97T97i59FF96E5fGN8UNXA63ibqeoV",
  "key37": "3RSp83AqULdQ6ywrDgbUtsZ65NJqRNdLaDv2Hknxj5eJGSAu89s9xa8J6sFGwhXawzfwJbgQd8gg4TquKxY4Kbcr",
  "key38": "TyKJpbPHoqjiM1Y2LcrXzML5oFHSzZwcPKjY7MdCvxh1FvNZtiwd82gokurtqPpnhJFsMUbYRmPog6pJHJ22KbV",
  "key39": "5ivoKKvWoJat8uuMPGvqaaS2Pg8NdvZyBgbfaxjwqnbVByb8JMZAgma8WSAWaZpYnj9tu8FyXLdCq7ozgHNotCqw",
  "key40": "GCxfRKL5j1wGhUUYkjEC7pF7EDPd8YbLTGiPMXQdnz7CUtFM44rsBkPBshd9GtKrCYfNemGixMZBQmVhsCWLcH2",
  "key41": "4jtqL7DM4ToLiMBsYQ4dmGGzqBEtT4hZENx3eRdZgsJwehow6aWsft1NDcxGuW6anvvZg8aCenQ5tASeTQNQrWYo",
  "key42": "2eJCGy6CMicAM9eNYiLCtUGqqYjWXwffp1UQNi7cbb98T1exXurBPi9eUwv8sRgvc1cBU98qdPmNaD94NqSQcMug",
  "key43": "3qAtMp9Zp3NXkqr1XQ9fLtyu9XuzmcjJ8hGEyv31spJr3LWD3Zwz2B9eNK3h26JDW6SxCgUStrTCG21zMrR4w7TE",
  "key44": "4Yf5pTanjfsNhUaExKAAQmLeo9m5a5Feyqsxpigr3qeAp4u9b3gqa8poiQCsAGtQP7DzZoKgt2DS6Mu5gm88kmC3",
  "key45": "5oxhKmajgNvtGLW9FYuZ2nP1SLueRLmpD5VQE5pGdBe7sfH6HRV5syrRigRUdZuuHHBDekFTszmLG8H6MMPDUNiH",
  "key46": "2PXH9jwZcDp9nUDPmyGXdK98kHy2cSSd4QtcZU3Jb9J6bJH14DkAeEcpb8VGnR8dbfwpsUMp2NHZuYb9VnJ1L6ie"
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
