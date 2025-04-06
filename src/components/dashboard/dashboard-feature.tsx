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
    "2RG4Mui8NDAcRYsjCtSb1pd3mp9vXnYYx7W8kHBqdKu6MykYnYSVQyoVruF1pHMZzeR7rs2q7Gj3ix6ybs3Syq1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EQFctnKwHMZpyqjoT1SLKtH3Gzgxnr5Tr4JWeKnHshDf9Ddu6GnrJAM8n2oRx5kAyrKPCWERgYLzxdyjcChpshj",
  "key1": "5dqPwQqeXTsExHtgQa3uM8EXYcgPcqQiqHhCvDJWCcxAcJj89HvXiNoYS7BsKnFHYAS6yAoPtcdCQcyPfPpgQz2p",
  "key2": "Mcoze9VBdiEcqvjQ1g2UJnqiWdjAfbquPW8hS3y1Z2eczbs1iMUVasm5xyiYHghmUd3ZxPmrsUaqHKYgS2Q8dQt",
  "key3": "2GQ3bsvqqybHeCvBQBUDSqH9BSyYbeTe7LNwtiBY3bdNK7ThbR8kd3DEJV8179F8JeDHuN9QDPD2BJ3CCozmv9mg",
  "key4": "Cyn7fGihGNcMrxyEzw3TEiCtG2sHXUyekusVUyksTzEM7xRqjrvdAhAMq4MBucEzb6BAygctT1ULfBEmwvuPoff",
  "key5": "5Z4qjohLZGpYwgeoMCS68N39PsU7sXK9rpJU3vH3vUdo7aPWhHnEVbxFgZdc1Y3pFusfyDV8FyxL9PcAPgryY6Hj",
  "key6": "4qXgn1baGXGrPz8S8XuzXkX42Gw38VxLCCgFo8Qf3RKm1K7BMsb68PcqMWim15jT3fDKJPcTiB4NSvfGY4rqESUB",
  "key7": "2ZvKtNuWLX8Ypo2HUavcnudv9rqAFg2EMfK8xXHRA3SqkEQHHfdvrmLZhfDWvmEgke4AzedvH3ri8JFjKhn8tDuK",
  "key8": "4XYU5q2xiSZnP4paRPEr69JRmWZTDiRUrNSc47nmd5swGXNP4sPgHitBAxUFiPBtVUP9WZT4cafMNn1V6quR5t4x",
  "key9": "63CBPH2ZC4ZZzZLWYzd2f81N7nbjGrySbFfxPnSAmzzzyTm4z4o5agMDx1XXn4MLjzSsxovksgSeUGgfk1XQpTBu",
  "key10": "3aMYbC7Wa3pF6V6ta5ijfJi2zYU5UTqNxSuVzSTswW1jqEUJpJRjrXdpBcGVyktNzD9XkLLX9VoHVBY1CaU8zv6T",
  "key11": "3bXEbtqLXsuRi3fWvEFgudfVobaAj16FbyjsFogyt67gy4EZv5RstX7Aay6uLefDfbegT9ME82uQDtc6e7Pd729q",
  "key12": "67YrMJZCFKXr62H7rLhdcacmqeaTPazQVLp5RZP6nzDgMu6zQUP1FoKPfkzz8Jg1K4puiMktKrLqFCSL232dV2QJ",
  "key13": "3LHTJgf7ebHWuACVdu4eVR3AX4JNu59oXHXYszaFiR1ehUJNKmqiWs5PqWbqzo41mTCRjH1aJ1LTCEdgFSWVvy8a",
  "key14": "5cPGQ2BXHSQvtEQMBsQiCmDBniwVTh38MEz1bkp7mkeufycB3ByxkvDbVivtPDH92TbJRmm6fMU7UMJ6JQBnc8CY",
  "key15": "3CJhhdwVFLzxiZHrZhup9wDdCHjd9ZdmLQyag5PqeeFfRV96HMsP9wkNyxptHLtfPpeyTWfxN8JPXkJyosn3d72y",
  "key16": "4eQLc2J1766uoPrgCoKojzydEEEH9nVHgFDSVkjbLwtQu2WoLqQFDkvL2d7cGVaxur6Ee1QDRsj98bTKTzmELbX4",
  "key17": "Gse3xugRsCnLRYd4uD83RkgqEBuXTU7mEbSQyGkVK2TEUdfjpewiSJ1SPYcnFovdTUUzqHxFqJPFFSHkG8SXwaU",
  "key18": "36dUnQWTYdJQTvJtS1yWbk1PtSgSmcwJfY1eZdjt9kmrnkD9U95kLGTPqKKVWDMozFwxbaFRzEwP1bvAjrmyAsfw",
  "key19": "3JS5Bv7k4VZ8rTncYw9euUBeG4xy97ZGR3auS5NFwvMy5TZHRNhVd2GnTyskY5jahLB8ECqvNsB37rVkQqC2Lfie",
  "key20": "CwxCW4C64rqh6rzCRedH4GkHkwfSrtZMrqywkLm7ZjaS1dqaJs8Dh6CxEZMnksdmNEXh6GBFDvexCDCVdwZoEWb",
  "key21": "3opsoNyBHVsdxUay9W3pH1JHQXQpXox4UARnubk9QtgKFCGpN1ZxGW2vrujGWU3gxc1EktZ3zRJPn8t8aHKzuBJM",
  "key22": "2DSoEdxs66VMdrGkbehQjvhZoC5PCRuxushAiH3dVApEGPcJBFVeyXoxttdNNrWyMBiyQXJk5r5EFrQM6j7vK25i",
  "key23": "31DeCp5XdSQyjE22wbF75GVi6qqSs5mKBc4jdrzPd7u8aRSonLKgqjAg4y862jfHGHF7WvEgDL6BjzyBeW1DPb9q",
  "key24": "psn7gKyyuH475Ve6dGxSMKpKQ1hLTuUCnsTo8wX9Zhf87ZMvLQaNe7hYxcHLmG1RBbG1yXk888rsffm9vqRbLaH",
  "key25": "3DzZ11PfWEC5faAcLj3jMwMsnbiyWNJL7W1roEjdQdLYxUuG9dLSWjqtrdgMUDaJNVkYYCRGMjhcXiVHxtU4fW2P",
  "key26": "3DWMLNKDADizbHZ59uAA1wKYfhTYPVaWqx4XFkddrMBtXewxCZMhyQsbVVjGHi5jwr11sZUKCx9YkySkMzFqRgDn",
  "key27": "Jy5zocejzJc6rjWXhSJ1TmAQtcZNKYh3ubwuBdQdBVyiAXmZTEJkMd3916so6ojR6fgx9rTwrXVuTP99KPFxpWU",
  "key28": "3cYNwkKGDZDVsWyNKwfztxGSSvmmhPuLQ7opCaawuBdttEkzuc45g539J4BK5dpu6vq4yxjNirBiESCSTMpuiNXg",
  "key29": "hkYF6nvpTRyP4pQyRbzyHGGmh6dRmn8Ueju5jn8biQFgsJanioRGW3d9b5iMwhupGkjAVepsgziGVd9wQCfH766",
  "key30": "5GLVYcdyXY8tfd2kbPr1K9ZbWFZHjNf94dwuxfyULgZSJ3H8yR4oMspQ4YSHhAXJENDkdPWzk3CCUcbZf9oJQHXs",
  "key31": "67CfR3GofGqxYb6jsJAVoXvrTaVzx7UHzSbY3wWxxZxgazSk7K9u3j7LqwYU6JfDwsbRm1LT147ov56ax3MajRrv",
  "key32": "3UH6oyYTaSwMM19fvwKxFULff1VexznkCMtLFUBGVJZmAchiRxQLiqazLY6VU1ZjLT8zL9yw93RMViVimqViqN88",
  "key33": "3YLCvMSDW58bSVioqPL4TLxhBuF6c1DyTrbYHMxWQz7TeXurto4JojXY3xDMPA4qG9rEJxeJoGpeZZRkXhW1v4ZC",
  "key34": "4qvrbJnWGjrodoya4uxksKPZMjRv4q4a2j8Taobmmq1zXpYwkjsvnYNteHzj7zLXk9A2fFC6zmDNSN6vpTTrEMNT",
  "key35": "4t7ba5H4i2UwK4bamsw6u7C19U3S35YRTcm9hFKaKfHMHGrdBF3ZCGWnoLuisvyThq65knqBNgX58hYWPUJzZ7SW",
  "key36": "28ktHJA8HMdJEHCnbsnqmwbyJEF9NMKv7cUy5bKx7UwZa1YtoT4UcGGb3y95g7sabUPo5wgfXQE9FamP9qxBhC4X",
  "key37": "5HqNJFxwsCXrnh1AXNA5ZR9W8Z7V8gJJksbNyfVNL7fHqytMsKt7j61fPwRPw2G3QAvWXQLF15yps7vmsSF2d2uc"
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
