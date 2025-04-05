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
    "3NK4zAqX5XmykNu2sQVWmKseKjEP3CjfAJHmgNgtHAwTfideRfZRePKF5cTCgBH97HitswfaVMt4rKGmgba9uktM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WDGPegmoetQsYCRYyWBAkbHGfcaDT6qSzU9HyhMxaKfAv5cwbZqsdx9BwKFGqgQfG3ndck4ZDSSu8xMBrZK2g8i",
  "key1": "4rwQZSyGrVSYXx5qAjxFR5KPmpS2W3B2TMrSW3ukCB7KoJ8mLgtXnjNicmra1ccNP5jcbSidEaaU5hmEYpwy6QQM",
  "key2": "3EXnpVNnXZ8dVGnhb51Wya3j5vmzyLhGBfCeXhkvB6DafiTqYHKhNgaBvzcivNimuAUdM4E7w8AARtwPCfc7JKyN",
  "key3": "581z3NWLEujDw6ySxLaC7ytu3WALXGDqFdT4LuDjAdEW4quzpM3aSrktZM7dCwHdcDyDrdsiLJTjkGCcqVUNNeJy",
  "key4": "4TiBYrzmxB4djuszi2JJfLznpBSFib4PQweswBQZvK8xsR68DiruDiw3TSuEYz3Gkcqr8eDHqRRL4jrJ71PzjbyV",
  "key5": "3yLRMXHgK2qXpvRstEVbx26RaVoUGekPVfQ7NwBoxobQXHeDcQLg1AUA7cxz7FGxbDGdwGVhXyrzPd9H1RFfjzYc",
  "key6": "2uHxJ5C1ykXTHKx7b4PCCXW5MgBBLPB5bVoPS3Lrfbbha4hWr8P3covi37r6fUKKA2KyJP9Bw1Vj4z61joqafsXA",
  "key7": "29frdy3uGewhyyeFzs4MvidHEhqVFtUfbb1MaRcn3oWRqR98rZuCffwD2bTgttkcYwemcgkMiQj1djmXdpCUMvxz",
  "key8": "4VzrwWJJskkHxMzSrhEtrW1EgyYZ5zXArU6oNZcDJEvubd8Cw4otSACxWia1c4wAWhVFhhtXfcQNw1axWgstsBnj",
  "key9": "zVxz5DjBVSFA78jtRrhaWXWuSweofDhnmyRKVMwAE3qAMauPWwP3jEFphBFrsHYoMvvFJJS5iNAab5rkUcsa3iN",
  "key10": "5wST94hHHaB4q9HgqdP34dBktZQS1uP4g523ai594TAqBLnDTxLRqhFM8Y12zRt5e75NiPu6FNF6Uu3RAVTL72t7",
  "key11": "3nH9wYLv8PhTUYjAHfZxmo3LNd6PPECaWQjAsez1Z1ybnuVuuGFcDezpkqraWAYy1dn6MvFYii5x3rmEVBCvU1cq",
  "key12": "4s9yR9Rd65DngzkiEJptdMzDtQmbzKVwKvWdPMy5bHW6y9WyQ1MJRsZMHntZuAbUqhJMTjoCdWCqC6SUmqN9LnrQ",
  "key13": "2ybwqcwkXKkzBwEQFrAJU9JJ1x65jCBQzBsRxqpaKeQzhT5rtVhYthMPy3TRNajmCLyzWcAF2wP2ykgG1GS6Zpb9",
  "key14": "2riGRpysCJ83ctp74FTrXzGuF8mFoXFj9xrRP7joTjEccztwqoSSxwQkUMfjZcw6bbKPvccxfCYiRtNX5tVAMpqE",
  "key15": "3HzmxThnY2K3esdmzV252DYKJ7Tx8zA64u52wAtNYYpKPBYSyv3rAMJSwHZMFkeJoFJhCiyMwcLhfHbLJx8Ktdak",
  "key16": "3wrwhmeJ4pHqQZC6J6M1AbYn2Zawa4U4Pixu1qnNtaf2WJn6HhnekTE1NgbSxNM53ruzMLauGq1o3KTXdgC9H1vh",
  "key17": "4EmbX79sZ91NAsuRVr8sAJY8E1gEAWDLBSzCeVnSHvjD9NmrYKWKvcixPCt6z6H9tZuaXRKRVhtuKMbYFW4z2VPR",
  "key18": "owdedb6rL2KLHQdVj6j5QqbVCxbCKMb6DWUNSz7Y5EzH23miHj1A2XkqHWfFXpp1P2mkw8ZTgFauJ77pqx1v7xf",
  "key19": "3vdhDVsZSyMxM3fAGYNF9nv9ataqmPJMtE9hTs7p4HJPs4mnNavnzh7Vm3eCVn25CjPeMS2qdF2GU3em8DdxwZCN",
  "key20": "57LRmgDfi44Rds3UnLrUgP1V4HDbp8t91E9Hnuk6NmNUxBZxcTzVjMGq5ovW66c6CeEEa7hxWJefRSVtrtjKGAxA",
  "key21": "4jfbHiDXfxJRXEFW4Zac1iuCojypmioCy9E1FP96ycrYV617nG2YaNo2NApkQ9ZetcivEhHjzoW4DVfjnmpY1GHo",
  "key22": "5NDpfjJ25CfJPqvdoeCEG8Rjy4fgm921H6ZJc5eVb9bGyqXHM7L8BygSUxAARJwULF7h6xDVW3SZnZKrSYTJv9cm",
  "key23": "39ZqQZ7Evp4ySFg5siGg1g8vM68NSWJudmKqvDGHJLvwusv9rTwVVCyYgYZGt3ZFFD6U2rWZcuGxpFbaP4uVtxBD",
  "key24": "3ECJzrPW4A7xdf5pAPnWyBs4czcCUoZgg8WbnxUbyrJNiwzf2wfaet1ob5SywqHvxZL7WXFL1AHmdXumyjcaKRtV",
  "key25": "3e6F9KyRpStryGBr9Mzj4nLYJNpQJKfBeBpSmBi3f8NoKmnXTxZczGQ7JznXpFrViuRygPhFkET7Z5YyaK3HdEYa",
  "key26": "44Frhh9SC9nDvMn11wR9X47rJpDivqcMsR372LB9nDwhSWUx54oyB5FUZrZMrvEMMvx3D3xkLqcqiVMa78AaqDZ7",
  "key27": "4dWEQLVTaPsJRYAU64HZBhqpZXfYM714WG2CXuL6B6TtivZ3XK7Va64Z4DnuukGnuuK4YxpfWVgzn9HZH7LH31Cf",
  "key28": "377ELbAdn5gyjWDqxBMf6m491sAW4g8juV4AFy4ZRWctdYy8Z1qYxRKgeALW6C9owPftCFhRNZdyUBFMjD1YvAjA",
  "key29": "62UP8s3MvvzxNBJcBDDeuVkHjWsqB1fK1G5TBJc2y39Y7cSGVvsUC9u8snXZ7itKDooSsX6RUgFFw2eAiKE6roH7",
  "key30": "3zdaAEPEN7SJYe3k715Xb4ksSRyW8gMW581Y1o9gVMibpcZThESfaygGS7fbbfndWVxzbE36dgSuYtmdoyRvHcQW",
  "key31": "2BoKzmNRG19HGyxR1AhKu1BebGPQyWWvjjms61cLWLLQzb97qaDw4EsLbSrLiek31fJiJyKMthBTfKhJDhktZMu4"
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
