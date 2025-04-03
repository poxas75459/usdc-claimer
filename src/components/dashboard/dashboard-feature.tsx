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
    "3saRJPJiEpcYYnkp3sYgPUTxRqg7MjVJT1wZEz4fvxBDE6MUz8WLiqrjHDuvkJEYK2nMkaGvBYiDASx3dJrSFArS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KmGnyBbQdHLXTdFUKgZQAYLP9dS9vStmUqH62HJbaWCCu91RS26Lg2iPE1eQyWuYbHq2XeTVGiW12MaoNMC7EG5",
  "key1": "4BULwabeLYBSNTKCdULggsFK6jH9KPymJB9HXHWiNxrDiFmCcMLyTmogu39SzvNwJnYkFMojgh3mmk26kG9PgMEF",
  "key2": "54RSLa4peYRg48yQ7SLnGgm8HsjvHhcEd2VXHsEsyDNwBYEXBTP5R5yrq1LXXXi58YqKYLwx5DCo32BpW5GW5hSQ",
  "key3": "4pR9uz3LNEusU9kojjLbYaY9iz31QU51YxGsCLfZMezd6bTfuyz3gEV5pwdM2rQx3gAbMgoXwxVMhLrP6Frcu4UQ",
  "key4": "27iC1cz79TcXEhnREJqfVQQnEkUioASmHGWez99KDCihrEcjrC598xCqsafqEmfhm1F5uiAwNy9Zr4a4GhxaZbzV",
  "key5": "2XmXuAJbkDifBWVA2NMbbVGy8QbRZ9GSPfdCpbp2jXZ7rYX3zL6uE4VwsdApJUMfez9WqPHHvpByicin3xxyBCu6",
  "key6": "5BjKFHeXitEGuGZijsVe7wRJuh79XVUFcnsUfYFKAJja5z1Dk97M4zf8GUFhhjf1h6qhqsgjiYQCtyTuAtbofRos",
  "key7": "4DnRAWDz95jpmtsHAzHBX19fM3q3NxLSdt3wG8zQwu9EjWFDQp6D6UdcmVMWzNPaWFpARMbq6y3j3Qi2tvR5nS9X",
  "key8": "aDBUiVDZniRu6ys3zjgi8tUQymtfvZNumbjygF841XWJB3GG2gFwvkVQC3EgNS9x4DfPET9FpsmWa9v95QbLH48",
  "key9": "hr2GJZwpbEwgWi6bDMCMA8zrZBF33RfpmhDZQLLCbtR2wELxfVVbvLaCUNk5Vxyvert7mrGhEui4V55BjX9jh3j",
  "key10": "2giaYmfC2qcfV9sjDcXu2XKai3riT3rwLNQDhyu1v3845uJyLiSAggQUdU8qa48MfZNhvjUfhKEvBMsmkUwnFGFB",
  "key11": "3bwxAUNNQV8RC7jqqayiyGuM9sEcpvTSCeGtffWHmaZffyu4Tgb29mf1Knx2uXLhFm7RVGiG7p9NSChVrAPvPgPm",
  "key12": "Q7mx72PsQCgnLp8o275uWFDTqC26JfJtxNkvLDqXexf7oHGnaA21XafEzBp8kEUaxGEaUmcefuAXZ3qV6WdXZ5C",
  "key13": "3UesAyAgnG6BmH86jhVqDj2bGBHCZrdDkXHP1Hiw6cWwLxsDtrndizzjtnHwbGsehRV8UTFoMkpV8GNiBSiCYDV7",
  "key14": "tCzFUQsgbxahEwJuytccATFiiKQ1E3MgnPi8wvLiyGDMLWVMSjXPoCAizBHmqLWFaKTyfCsLoYMTWeBrKgepxuq",
  "key15": "3M2FPP3PyqkYAAjs8R7kMWxbNo7vesmsY55DRpEieu7WM6YChv9ws66NaWX4BKbn86s3XMhCFEwVU284Ri87fn4t",
  "key16": "3QScqHzqiB8YFWt75c4jwFgUAZ4Y8nAZwfE3Hp6vD55SgHHeTghvWt2mjZp9KHo54U68ewyn7PVuz26JEFYM4nfq",
  "key17": "5RQhgtK3StXFJo6i5rt3bbobZzRQv7aGBsTsFeD6KmcwpsaBKYRnC37h8Dp931UEZYU2jm6n5u11HaTKjznCgocK",
  "key18": "3fBRw6aQmLSqymJgnZkaiY4jmZ4q7YmmPMpH1mcGHajdW3HiKwRPNqK76jW9fPKPytoRoMkUimUgjg5kDwAcxpMU",
  "key19": "2Bc3FrqE41ovkTFpKu4docvmxLQeEHjZ6kZvZRPCWpYbjJc4ZtS8KV4PgPUZAHgEf5xjVXJDafKGUBLqk2hLrVb3",
  "key20": "5Jcz9fKxc6BhtxbUGVgCR1Dh4JTp9DeaQ8mhQmNAiAcL6hPNHqQan35aKoqYcfQUJs6hCYNNBHLCxmUHSXysEvBG",
  "key21": "3gSpawvGoiH86gVvV4GpA6866aPy6ifTn15o7NQzWt7WmGgie7j7MsRZnWT6ipkFooz33BstrUCzHytcgGR3GWLj",
  "key22": "3yC7xT8gceHbmLjzpza2STrrrMXBX9C7eRbb6RnJZFu3TiRwCrqzdaoyE3AL9fsnD5mQpTWryzJTZ99QxtBVpTAG",
  "key23": "52PQMumfECHBVQTBBArVfRwWTW2V4Z6ZkoDfDu1hHyB6ho9swR1WgWxsVQW5vLa6VCH6GxTr43iqW1vrEGqgA9q6",
  "key24": "4AHcdjRSSEHiZq2HKREbvSrNC4PKffFQqyG9mAy7zEBCgQFeV7T8HLB2s8bu6GHP2Lt1Q8HTefRgM5u7UKyJv431",
  "key25": "5HN1rZT63Tq26ECHF6fR8h9JRKacFN41zTymBvUSZ2BKXcRRJbUJRriFnxMNqBEEdfsywXc1M5aWt8sFL5Ljvzy3",
  "key26": "2WR49hweCUvcU4ecvZzHXi5KZuGfzunia95h2KXBmoMfhMjFNDjEvB2jUrNGDwDAf2TCBBSzM5tEmvtBMzaGEF7g",
  "key27": "49BUHT7mSq7JK8T5QMyKiEqx7RPsKkdaFuCvTGMbCnNxUuCyMd6joAFisM6N7if6aKGLPsa8XD6aAAmXoAWXJCz8",
  "key28": "2WPiQzRhbdPKJYyFi6cnbpK2sEE2urZeyJWkvsxb79uXr7Yy1dFtuYkyLJZ73NuUSfreCHsgUxeJr6PEerASRmGh",
  "key29": "5YL5zF4BY4KS3vLjoFMPTfTbewEcHYsMmx3zPee6MT8Gevhj5UdavyWLYjnXzyaKGZXHUyYivURSqvMHBgSWvCkH",
  "key30": "2eSoiW6ujAfDUPq8WfQ8hUdngRnKn8Q1okDHcG2fqJreJpduQdbrNN3hKfVtad54G3kZ96GXsZfBuw4R3HfwraJ8"
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
