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
    "2GYMB2T3xpgbR84nBynnLaYQL22KFdom3zZCFEL3ewzQRYxKm9zetVpPabmabj4qphtkCTWo2BCvrUbqDvng1uRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1287mnPHErQnguwUeT1Vghzfoxk5Ng41Mx1PmLP6FHEoech7z4SHokA1qgAJoAj5dp8RkrF4MA3eVRVe8om8zxKe",
  "key1": "2YRkb5Nz41qtDaPDG1nJjw2BzsLX3MgGhNixUe1AfoE6XBggqZhUdcXrLfRFGJK3KDeHiNCTAf7GRYPA7P21RKgV",
  "key2": "2jadapo9aJBPkCNEmPsoyiBLLNyYcq4L6CnfXmnnmhb3nMx2sPoLEuhRCm1qYttCSD12KU4LMVuThU91wmAANbRQ",
  "key3": "2un5oh1cGQSp3fPSEpLZWukiTTy9h8NmvzNpcEoupPJNiEa4bSJz5Q33kgKNYdbcqQBhq2hLowi4MUq6a88JqaAo",
  "key4": "vSqzdNU2GZJurZmT3R5NFK8gUx7vJ2MfQp4QXT9RuzkEHexXLWJ31kjmeDsSaEkKyTbUDddEgxe84N9jkvL7p44",
  "key5": "E6dxo2XrYx8uPcqcCqP6zergNCupnYRo7B6SrmnH7BipdutsJU5cyS4uKt1fxdQuf7FF5GzFduRb7nUThzj4rMu",
  "key6": "3beSCRpWfbL83217QQeLvUxLcvaXH8BWfhkLD6R2Ai9n5FM1qjzTBUFNPBz4mFdGUas9gQKbFEGANUXCAgKwdxxE",
  "key7": "31J2hnqrjBpw9sx21pR3r4kR45tvXKPaB4bkaJZU1njkC7tpRCpCPWMgECeDC6JB5C6728KMqir8y2DFHpacss3H",
  "key8": "2pLP3nakdf33Py1spKFqHQousnYQKCpWEEENvjWvT7Cq3UHr5DKLWpe4UF3BQChyEhR2nhGQLV5pGbfze2Kiqmy6",
  "key9": "mUgBuzqe4xwA2GSCWSHM5BKcmrG5GRYe58z1qd1n3EXriQ6zKEYFH2n6SnwqWXmwzMtz1htLEy8svXVkp3gWBMD",
  "key10": "5L4BAJomNyR3D8RezEgozYkeHzRFzhLWae1KypARnqHEJh7n2pjyLox7wBd8udxg1vobAw9P5PDK8Ev3Zg25iVFw",
  "key11": "6232thfoGd8QrXYxGPn9WbHY99HsYz6TTPHp6S6BNBZ3wiYWdYvbnZBXH5SxYYyWP7FwDxzVCmF5MpyMZGZWxDhH",
  "key12": "66rDQAvzsLwKxdp6du7CN7abmvU2WnPPxP81gHDESqL6ZFQgVsABQPzrjF5wTeMzmWcVA2zimXgBc9aXTyGvQspF",
  "key13": "5gEDnSJQxjySuRZxp7gozadgSL8rS397eUvUdJki2KCLEsv77hLQkHyyqJEHiAy6yBzffPXeYV5u2hw8nbuZphmn",
  "key14": "QtThwGH9EHH5U1367NBN1gcQayQxDzg9drWg3QkkBdBrSSK7onbq54xtZ9oDns4g1NjJPpwtB9jqZmG5UqsxuZh",
  "key15": "1L3mzrA8UYWyEWR68PVukpNoQgbd3zzXcGTUuJYKEmhEvygG9dF9PxKqJ6NRSvPer6PCV3DBW8bFMfHE5u7QTk5",
  "key16": "4c8eTH8Tix1pFUG87yMJyXFFkMgbKt5ZdzquRp3gLHVgR1t4CeuCXv7jv3u9g4UkKArkvHUEeJCS1Rrkz9b2czs2",
  "key17": "49EBLX5PUV2x89NsHqLsUFKuwZf4UkFECwD5CKKvXSirkkxRNCzwhKfdXF3vtUUJQ3Z7XPiTMU6p6gWyCP9C6noD",
  "key18": "4ddya8v1FobzEj9LvpvsDJdiPSuQN2LVBf2v92Xbf3tmT6n5DDgyra5MCV2JxXp6bYL7TSSN1tgHQdapW1o6XfH3",
  "key19": "24AsrrxWPPBgNyc52p4XqrZa8PBrjjDjTVbZZpeybDtvvAxJ7zghDY5dkVb46XcgyMuvBXMGfCg6ZFNwYx3DFBrW",
  "key20": "28P1KWjimKyV5puqXrnq3pw5ioyKSKHHPqUnpsVmF7MgKb3k2bHENvvUWcJ3Tz1YiNGK73Bo1mW2F13hkiuBEjjF",
  "key21": "EFSxpGSKZxU9x8oqkNfbmCVCNShE4DLXEZYZXB5vLDmuypq77ebL44Te3WcjSvUJZ3LTkp6hks1AdTtUXDsgbok",
  "key22": "5YxAgLh6wBZGXeYK1JYgbQgVEPEBbqxq5zDfEiRPN8ZqAJXKdnFfn7CNXEE7U4ozMvm6TeaNqAs5EFcqPsj4bSwJ",
  "key23": "4GufwmXvZNU1kdToAKV6KaC8Zf28Ys2LcdJBvMkNQRLTtTVQJmLKPNgXBTJcLzEKHRxVH7KPH1ZW34ba8G3x4F9f",
  "key24": "5KvmRFhzcjeauvabANiAUGpAaTvyNEiyYih8K3QVDMFcYaiHrwJ9DjVpKJdFz6oaGK7Da43B7R9tAKUWFqpLh7CE",
  "key25": "2ngPpVLaMizzZ3JCPvKw3pZMvAXoA6j5HcDDPoCkHwDuRsT3KUBgYLTSkNVYoTYnh6yuLcKN8cJ3r9y3sB9ZnBri",
  "key26": "X7QaYCvMmxuZpW1DK9jRpSHkUvfoHr1CJ5pdo9AT7NdjvJHX2w31TZKN4awhCVqU2CtHoNHoAeDQBQbemnvdqkX",
  "key27": "4UABzKyLrgDiTaT25pHbw7hz4gecMGqzyF933NNfWBbwjvYBbPcX3kmJuebDmEQJFcEFXqs9mAhSRect4SJY3Gfb",
  "key28": "3cbRzXaTsqAcszDF7whJrNwPyjKQkHWNNZFHDoo45DsRxgtBfBnRN2obogPwC6eBdGZYNfdExuQNqxcAPFE4Sy5p",
  "key29": "2NnqPR3Qdu2cPbfnVGiB2nAmCo2NHeeJ1qxVqJsjsrKRzYjZrU3qi3p6u2hnW91fLz4iidjHcDrzkxgWUsxL1zJE",
  "key30": "2V5z8ZHzHD5BENRLuWqgmiHzoEHSUHxeP74mRHQJ1RDtvVWRjBRtA3bR9y5rkPjZ9siJpVuW97hvEoPPSDdAdvMG",
  "key31": "62GoTZMjBN7mRGs75RPQEKYmoeEGRwzUYEa4ezTEmG8NufcKqYU5eqQzEpxWWCrLxBU2ebFVqYDnKv45Q26ZQjfC",
  "key32": "2vAFCdMdt25Gn5Row1sACFuUd21UNf8cw1EYYYfngFz91Uxu9ToSknj48bWdF4e7bvC2rLgxQ57qHr2MZn3MCwQW",
  "key33": "2oQZJ27cWUX8uWezBthgFZELSZ2hCGTU3D9UoY2bSdx9E9a6FZFocc5bn5aN4SsM9DPxuHSGXD3F7AYoki8BBcku",
  "key34": "N8wvx2xnHWQ3jYDcyGfswwXtiXPm81NF7FX1v2GWmCHs3uWvngxJeMTNK2yiGmcBS1BNj3tq7tE4xxeBWk1yzG8",
  "key35": "2dgdtMCC6FT5UAQn9mPSudANuBCy6eBmiF31w5wWLZ9cbBSWhyTi2ZZi5avnnzGVCUuxZQeufiCdsTGQcrKMDm8Y",
  "key36": "53emc18EHupjboqfW9zzgEpJssA9U3dx5MKDJ9SyJk6XyMqq7FDb8m4Ezd7ELtrD8W1BSvpCbghoXLp5MJ9JKSCn",
  "key37": "2PzPu36RWJKnunp8o4hULAU22Ejg8SziJC5nG52U1KpBsAYHyDmAUpbS3JGhaPZRnGyon3fNnYxoj5VG5NNrtfY3",
  "key38": "2J3AgJcGGUh5zXU7qbyGn67N8vLKS15MtkstgVEYHJSTMcKKTJ6qDNupM74SUb4V1t8AAV8TzaGEeW37rtkpVt1i",
  "key39": "N7oGSsaNVowcESw9PCr4tAt3mkXbYM1BwGxcjbcCTyJ1sYParm8VMryMZhjpQ7JGauwFKkfWsgS4vC1HTwREJtv",
  "key40": "2Y1UzsvNSCyg3nTv556iZrTHCumWbeDA6dF3YNqU6ghcvGe8Q6BVnYPygoEMqTN8YuMe7sTYKdKTic9CxKModNbd",
  "key41": "4gYHLzk3wbDv7kqQfT1W8cH1vdkDTkWjnoVXjJYq2Xk1XBTedkshh7QCewQkdzmF4r5y6EnqmCvK5pGKMf2axfYt"
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
