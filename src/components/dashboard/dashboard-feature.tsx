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
    "5fQxhBWuSZ9G2HqvZX1urMGQqdbLbjfMVYki4w15zhajsQdG7c7Upn7pn8BP76cSQekhSGepqXh9KuPFkFsznuvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F7z1Y5BWmrnoP9xgNGQ2exHtf2QhA2VcVKCg4pVkUviuZuii4PyhqkQa7K6Z2tpZ1wunTS5eZysg5UUFZyPZnvg",
  "key1": "3DDg9Thxz4Z8e8QkCofTRUo4xXgKm2uzJBTv7S3N5CyNoz1sx2VDH9yTEBP4bf2Zkappqy74oSQ4LEvyhPk9sc71",
  "key2": "3JkYQuVksTYiVDuuUaB4gez3Pzh8s5RkX5HzszJY1qUrCHTmNj2S6T5p3rD3pGZztF5d8YSVhCs9hzFXsGFXXgyY",
  "key3": "59iYdnYbU9dMVst1YQBthzDqKDYMLuqhrUkCBSZFceF2n5z88tVjE9Nd31TQt9116nVe6VUNq7Gf7zjW3uAxborK",
  "key4": "3sKfx2tRBYi4NPTT5deXk2ACFBCTpvFtdJ1UtSPECdHPyoVxC57jjN1hmqYvj1JKEgx65W2zkPqYVaefurH2Hjh7",
  "key5": "5ZfEaPWk4isgPgYsiShHZoxe5BXKYzQZA5kXXbyBRsAo79Jsb1jrrjb24ZVTYH11i6f46XrZTDU2HtvL8NQCCvcn",
  "key6": "2hLXAcZiWMPKrxg1oi7zcs7fV42FtyJfFS3usAB4gqNTKTo91VNVf57yHQBWhHxgcvAFY8swJtF8YAo9aPMM2Gt6",
  "key7": "64gLT41RUpA83FQBaEdtUXWNe68ZiyF6PsyusMrQ1K3qhyqfrv8JTV6Wyz5oYCbjD1Y1JPh1nEwqvDmtfaqnN9nD",
  "key8": "28FPjLxC2QxeJjeXzJ4Td8zDnAxdwESaeb7yW8KWbsDPxSkeXgjRiEse1mrs9NhBugDYP57kkMGdVaJQ3vxauogu",
  "key9": "2PtX1w3bhrg5WKaFbMjF4AKtP7hqaA1xWoFt8errbDwY7vbJQ6Sy6Z5G7wiBw1L8yRvwWFuJzcojfecigNhRvoMD",
  "key10": "3igWPUQSoP5c7Me6WV4Ddcsf5n2x3gZ6xK1aojyCqjtNpxETu3rJcfAyPmTkB24D3wVM5C7CfuDoqAmvGKZNq1VT",
  "key11": "e69DTPveCxx4hoQzUvmMa1Cxk4kc3qvevvRr1o1JrUSJP7iYTjXp6jpDWmEXMqpkHxD6gnQLUzYQ6AzsF6vDgwJ",
  "key12": "n5gzLoPKS1yY8wk5LdFL2rW3BBrSg2VsrXYH1msEVzRm5oyMaJs42p4YHFngWQygxcG7CkWHnLbbQTuihVtZ8Hh",
  "key13": "3DSmWLeKqREch6zgJBwM9EgD9gXMEQCA66ehwqGndUFDtr7aknsmWNQdJgCWGj6zsU1R7HJDfTWhEf7TE4hxvRKr",
  "key14": "Z6gnXg8qezDzGcMfoqWpiVGr4w2VUaqHKkguYPCFTRSwJn7Eqo93NZ3VwYjPDup2XxrEd8caZLTiHmwmgAZiSk6",
  "key15": "4EatQbe29xnis2TWKfBawqY1NsdDyvH9QAEbXKDi1Mvtu66b7zYNakePxXEFKdieMTVgXaUPGLDyNJPsCanvqsxX",
  "key16": "fniVWdnc9kZYGjNaiAaqDwriUGVxuFp6EJfxP3FuqREt7xByJ7UfraaoTnMCouQsRBxHQDTrP7d8a8aUf1N9NrA",
  "key17": "29bZpzQoZ8aWDQwQL67QLQ2o5AaCzkXou2vQNcg77djdmtEV6wEnBkPknn4otVyrnzp2ryyDtDAtnisSQfVjQxLz",
  "key18": "55Je3AZKRHqYcxtNgvo4ZXsRZErehiFGsrGYinis8XNoHcmqcygKMFZVqxWvp7BfWAr7aAmTYpn95VC1ne43ut4p",
  "key19": "ewdTJ2sHMrt2yS9ypN2U75p5rQKb3E4DLJhx5YCdsLdreMAM3h2HCCdsBcQFeizKxzVUFTnDCqiJKrucJzZcvwL",
  "key20": "5sDjNAMbt6rfLT4V7TwCbtnVbG1VMGcCoZAVLmzGAjr368kui5qGh265pBMxxWVrhYZVsJLvQQ3wYVgnPcYLmpGP",
  "key21": "2RjEhkWDiqEcNpFsuwxbj7qsqVA6KDuq2edu6i8qf7KU7E2AdFRmXNxZMC2G6ppLcjxjF8LqAzD4x1uksamSUBik",
  "key22": "2AkUrfVkam3ZeLESjibHaizs97s6rYapwxveysC7dAJ6womLTqEQYLaQSNd1LPsFbPjZshuwvjanFoBnqv6Joa8P",
  "key23": "4tfEdQs3KKKf33GCaaSQy9GRxd5WpYtVE6pVuQ6HZEm5CkPTBjDbrTd9r9h6fjWn3ieYvBdxBEEabZkwexkNAzW6",
  "key24": "22SnK5KtqoSKjiiRQnSV6nMQXJghim8ncobUhWBWbfCX4nVwCvsKWkkSxH98dbsMUC2wT2BmpvEPvNS3Zs9UGGXc",
  "key25": "4H3M6mHErxu41YShD45rHmEBftY7SuArdBPJ1XfDgWPcxKieoWFY8rmdAYbiQzupoGdhUVpvYcsBUYqqWshVT7YH",
  "key26": "63yfep2Axwpjhh6MmkZ8fSSMZjjC3ZFbyPUyiwKY983vkGbpbU8rVuo37RujrXmx3ncJQzc6CLindWGY4p7j8ezr",
  "key27": "kbRyxkoH9fsx5yKLDiN7WXtSj8E5VMfJ9NtvJQbneDS6iVPVPWjdDJrG1EhCw1P1sKvLkiqwCHzNZsMegBrBVWW",
  "key28": "4s3g4J2ya31d1QnTodUmMuNGKmbzoZZTDu1YWqDRUFogpUcqVgbKHBZPvz7PPeh9GLRzQr3VDpS7eDD2ohSUGzhB",
  "key29": "2RFc6NV5EsLYng6zF5L6w6s4pQjtLowJ38TMrQPKUHQdFDCAStxuVT32Dx1JoRoFzXSkRfLqZezQN6T5wLJh9CgW",
  "key30": "5WZgqwWTjFMZC4rnCfF3wT6z8r4cz9FTU2B3ZWtKfPZMvEMeWprzS6bEmpM1edw4W9vWTV5xsC2XosJsaAd8Qd9S",
  "key31": "5PSAzdei4h6qpogNzqTGXMqBvXf8RCNijLGMGiWCywhF468K9cme9ax4p42FApzV7A9jPW2mMLh1MckXphgQMN6q",
  "key32": "HHhok6w6U67Kw6ZA5JnwDaTS4n9ocMqH92ddNir4baKKzsm6G4fTW2Txeyaz1xhwewMdwUG8vGL6uXEvbgVLNsr",
  "key33": "65io9dKSndvxDQy2yeGZqQ2DZ2qqJU8mqDzownXy1rsYTXAafNAWZQhEKp24vKcSQbPzJ23Bab1NF8GyLP8zGoFG",
  "key34": "2h3LVbCuutukr4SMMKprrPCaCCTcx4wu6AoWuz4JXNqYj5zCegyN3GanDeT6G5Drrr6LBHDRLzZcss3yTgqBGg4v",
  "key35": "379ReRBbNMGRkpyrXnTovuRYsyd4iBS2zpH9NCyW7UDSLEmvSqe4ANS1erccCR64idRhyybkNzrn3XJHS5qi68hg",
  "key36": "Nz5BpFXQirCJpUCV9uTS6uLTdoJa8JpR45piMJ6p79sGZPUwcEhU8KvgAmsqcgePG4QRxY7nFnZeSvry831a5vP",
  "key37": "42KYUdhTwMXeEEUrncsRksPh5sLieRXpgQiCfF6wHDWZ3NZLrwChMpTjExQdpbszQWK9MktUFhBiMtwnbYk8krh6",
  "key38": "5sSMvzXbUzHuMZ9wnz8WXY2hz2d3kWQhWiSHCTnyMEsodAR5zSkE7zi9pVygoe81rAPmxnKBmJK9viGv9UhwLrfu",
  "key39": "4vf5Kj359er5hQ3rqywUTzyqPU66aAHBZL592C8oLY74tJqCUs1rUcvSDVaVjPyjZ8VYSaMDVFekMFLWbJyGnGgX",
  "key40": "5TAPhQ4Zk8bSXCwYKNgN7GHUy2vy1Fz9GV5LgxNtHUDZpGtB1oQG14WaHcHnWrfcJ1pT8EVgrQZthtmRRFnvcfe1",
  "key41": "5jNU6YG9Qszvo12oBTbnng9P6nMEwLBzZ9y7TYWGfbZBV4aq5QJA4TAXJwPwLW2ESgEktM8jvf7171VPr3CKt4j3",
  "key42": "5WPndyq1zjyvnkphhg5ZQzCUT3cxUA28XgnLpGMNMof1X98XTxEW794VUYdBtQx8mKbTPCHBnPftairybExoCX4u",
  "key43": "3QQqZQiJngXeNEE4Z5FdrqfteQdFb6Z4KCPqknxKoxZK5NE21E4Jvd5YAvNThTfZ81qPBbQr2ra3KAPdqGuYWSL6",
  "key44": "63htm5kVCEpVjgwpud1XthTLCSvT7m6vAPgUhU7GQiK2cfm3zrwv9Z9rnYvjgiBad2fyYL2iVLyxm6JSewiqT5KH",
  "key45": "4rFwbHV8eb7ZELamEW79ckdDkeJs1qW5QEc3GBBeQ9Akik9ps5tqLEip3hg9qYZ7bVKzSV4gVHLbAZfam4F21136",
  "key46": "5Xy5jwV3GTbXoqEPu7HurCzVZqnr9FupfWTBBz6GWs8Qsj2sJHHFCp59pns5xKbDBUuqJbn4VSgupm1zS7HwcAS3"
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
