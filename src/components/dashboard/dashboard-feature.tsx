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
    "2WX6Vi9j1anpzKnJVTrk7YCkaa9toHdALRe4PYq9yfK1dZdpm61yJ33f7wXRcFNaJrtY49VgQSPLiB97pe1V7xkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5upWfU3AVGB6kBZx4dcE89Tg1LfJqhEnetVGm4g4JTE17SG6U6D3ia4R5iHTrytQPMvUUCzcmWzuNxRi7bRLFifC",
  "key1": "3WD8hTXNwaUUUrosHzyqGiVNxoiqof7RmXCqT5vHFFWAzioBzJ8grki3F5zT2PgpHSysNUzTd1Adry2Y1bb5ZLc2",
  "key2": "4nH8uwNBcyP9xtcVY8ujEqBwKHXuARJsReczuNefpr8iJsDiXYxrSJNF7damJQaJhVu1KtGJsBhtQ4nuVwH8KJf9",
  "key3": "btJ7HBT9iwU6MME4Rnv1gN3uRTMzzAywp2H7BjgQZ32iPBYgUMsJc13To5CPnXZUkpVm5jftgKQRDkeXoPB5fZE",
  "key4": "4mxhUGkXEmd1EwrRaT2Xm1sYdjwNkZdFM8s3Em8m33AJLDvGWUjNJoH6GxTevbfFMiNhuLH3smxcsuFa26R89xzg",
  "key5": "3oKrP5j26YXsMd8V9NRVdekHSknct6Ttwtejy511KDQdBWWewGJFLshtB7jsxhLZzTKfnrfbQMKrouA5Djs8D3jC",
  "key6": "35r84wVSnCnsWWTWk7peESD6bi1ha4WKUjpYTQzPJtXSDZAuDUfKh3D8n4fHsbTRLtGwV4871yTsfsdW1QaTKSNv",
  "key7": "2mvrfbHDVeXBJNvznQR3eVMh5CezonGuSU1mQ6FV27CK5GHgvet6oskFREHVanRWT7NA359Ls5pKPpNDV6hJHRGn",
  "key8": "5WhcxhsDZYUCbVduWxFGAcM8pdWQ2GtyTUs39qn9BEQDVg15Rr88y62mqW4RozVz5fvMHdTHaK5A875Z68bE4Zh6",
  "key9": "3FPg5aZt6gMGcAQyndg8xuxdsLswtD5m9wWTmRx7Vwotp8mnM8D7HS7bLz8ZMRyBXveBL3npMskHbu68r9xHwQrj",
  "key10": "4aL6WNjunHUYNJj8G5a8qzqaQfarfnqTXvrvUqM6R4BiUtDKH41RAK5T7UXpoNEYy2RkugKvYo63NtxDRgVNq2UX",
  "key11": "53SZe8J3HA8pUyfUxgX2AneUN3kW1hn6d5DHGy1Y7HR3sjqqx2D6D672sDUonPtz4YqeYxicujYZVuDYNjZTiNek",
  "key12": "2XdjPyap5H3WFC1muwzSEFteSzYiR5ZR9AEmrVZDtMFVDdf2S5LsmwvKTn3B7SzaQLirpU6jYS6B7juVYYNyFMuU",
  "key13": "4STBGnx1abGsPzbzRe2NEXhAn5zmrhoWh2Hx7ummYNs8c2eBapVBvh3PER5RLmcezE2ojCY8RS8p7oQBv225kgsQ",
  "key14": "3mxS8dabGBDte1MWaSvQQ21kvV9a3etdjN7Wq7oZtWghnrjHBXTdoyxzaWq9Jgho7KjMQsAFLqnuWMGSDtDCbGBy",
  "key15": "UX6cmT2qTFL4JAWEj7EstoPPvH52iJwGchKQ7Z9U2fRhfqGXMBJ2fmfmXvCgmyCimSoJu5db873HU9xjQcgHaUH",
  "key16": "CUT4WtFy5ux2Wsmy51gsaCLAzTNbcivJBRUCfuRL49bNesFPHighb4xbJLk9wzgTKuWPbUnFbPEMdbg8FXcLYuH",
  "key17": "49aApXEErWpcvd2WaE3D5ZgiwtZXaBEsAtMwc5rTKnK3tRdCwoDvdNBCEgxt5icCLZ6RxPD7NtikLcFb2yja8Bje",
  "key18": "47yykas3gvb7B9V3NtJDfH8RZhRoTZHMnACZfs4hDhpiA8wJEzyay4ULG4tMCmZSL24UP7jgjXySUtnJ5UqjKGvc",
  "key19": "3Ggh1coK1ugdribbDcSZB7Vummx8rkatE2oiN7xhBNCbAgcUNB9e9bNZr8Rnb41bepz5D1qEnMGo1bhKtQ8W9T9b",
  "key20": "B7wugvWBkEasXVATVCqRJjrhGQzS9VCt5ACuVaQmESv84ekQgVtN2WUss39q6ZrTfv8YSDvyvDSs7D7KrtpfmEr",
  "key21": "3BCSL6cebbLMq5hJynVPvszxweV1cUW7zv1SUR4mLowsKYAA7SnpXMQte6Ys6oiP2dXfA9xmuePGWjX9HSwabgqX",
  "key22": "B6Zp6JjCy72Vvxd822hsJdxHniMbFMZLYCkuCUhPsNFvpqruFV5XGPjv7ieWmT611JH8Np5Ey5wcVE1xVnoJsLR",
  "key23": "4re1xpJ3kZcqpaqtL7nHvhLdQSaR7mYmEjayuofFUdaPUZ1Vdb52995S1Wz8zj7ZH81X5YpkhvESQ5FBcsvA5HT9",
  "key24": "9DKq4NqA2VnYeaUdtXER8HbQs5iPRzVPPXKUg6XhpPTK8sp65w95kjUJVTmFH9Jcv4MprJ5FbHVPsvgctAfiYbZ",
  "key25": "2f6zXL6j8ER752zaxzgRvLWMnVC2dYgrmt5uMgwBMXZJScbgnCHF5T3GE1aXfHXz9AYS1kicPZJgZBeSH8yPoXC7",
  "key26": "5wQSdAXNgDkseiko9sgmRoD7MHbFxSv6xg8AuF9BqBU5skrCYqGkCfKWZXkV5Q3vtFvJ5UfZartbk69GinwcY5cs",
  "key27": "3Ng83ZBBAziNrqrX4BYKkqNG9xjitNxtM78xGwwXFp396ys8bPnYwHT3TsMNEUszZ1K64g1ggL3UBywjxMPppaLe",
  "key28": "5GbSG2XherSGjBCtKXXoWJfDVp4jWLhTYP7ZHU4SGB34MmCpTYdTWMR42uLGF1NA3mHP5xDsczzA4Qm6yWbK4PbE",
  "key29": "4U2Yxkp5eB7RHSYYUi7eren17PiAqhoZErJhCm2UoFLKLr1pKaDg1ChSS2QNkw1rz8VhFVVEAvuh2VhVwbaHCVEg",
  "key30": "fAnGn7wvKv3SAg9WqLxJSzktMiGTJXtVyiGQbarQ1UBKRR9DxpEBUv5NdF2UopFZv6FhKPEKPSGikzW29JWT7CV",
  "key31": "2Aeuk6cw99R98wPDJyYH4qLEq4zX2pxX8gAEeGCdrxoHfFktmQHQn7DMubTV2cofC71XtXWUbz2SkmzzcRnwWS6k",
  "key32": "66T6KCJn7rGhi2zKfB8wUeS3iPJKKb22n7pfHMTd33zEou86jjFSZVxY9ihZ2v7DNorFayrA4XpY3WQAbyiZQpF8",
  "key33": "4oVF9ogt6e7pJpebZC3jQMneiWhPaufg2r7yJcmhCeziCAztJDgix2g96iwSEJTr6ehT3potjEJ3ii3PheFNLVQ6",
  "key34": "kXLfy9rEiZnXnDg8W4Q9iTnVad61yFVSBNoqrCX341nmnLhBEmM7fHS9GFfmUhtJu8NDqun1QCEL5xUdGJrG6wn"
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
