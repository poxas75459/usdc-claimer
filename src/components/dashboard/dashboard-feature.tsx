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
    "m7YtcZSMnKvmZxsGNdSua6GQ58mZqgxatTN52pVjSWxQJxGQ5AcgxAMeRxptPd9Gust6HyDBbbARV8fuegzWHG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sk9jiXjdukjn3WX7Tf3nv3qEKeafLor2reeti3tGJC9TFYbPKC6Fq6v5oEkpi9Gk9wVD7daJ7xs8ywdZCcXrWEE",
  "key1": "4YANUEiKQiFxnZU6tB1i5ATjyvd4d3n6GXYZPk6LEb4WzwWZSHSbju8xgQSEYwxLWsWCiPBb3mXc8hzwERx666Na",
  "key2": "2AEJWoHbgKKemBBTnfhU8aD7K264o9kfqS2XNxMDt7zpNpGTGGQrnbZGGKdBPopNi6XHr81LDH4J9hRXb6QB74sG",
  "key3": "35Snur8gTsTHFox7bfrXyqoCuMvAcWSYA1ZMgyWzet7Aw3B5cPaFqA6oGs5zyn6kRXeWzt3wxdP4KXnb4MkJFtBe",
  "key4": "8J5UpHfRt59wUryRhababTjDJHs58ZRWDSvtNxRxi167CNYVtBhVdVV58rmTxYxg5wDEaeACwMiexuXDzbQ1KeD",
  "key5": "t1ZgqUR448W2t8uQ7iz8Rju6P2uHRJ6VMaUFqjJq93NRcYqoXbtvhvrDXKifcsbxyqdvZNukFEPWTgF7bFQpqan",
  "key6": "5MRRCbtMaBVahL3XdQDR6gYgNLBsnuq4fu8CCwp5qsWCQoT11QfFhyuU4PhZeH9DV3s8UU26MfH1skRGYsdj2GCX",
  "key7": "4FrE3qns4Yi4AtReQD3i6yCUz5dwcoXGFYACpjoKvnQghHgNs9HZZiXDwR3kqiMYCnmbVU5hYj5TtVJmkwXpKp7D",
  "key8": "5r7bLJCgq6vESKDZHyDNtcZt5fSuKPBBfUy7ssW7EULPWZPd3vQfCrRSyap3CoKYYL13puM63twJBM2MZ4Rq1Khu",
  "key9": "2pZY9bZ5yZ3rvnMCg4UBP28yEKu9cv3tXi5cHb5T3NbhcNZtwTt2jJD9YFKSLfXfjh8Wrxkjzi74vTkSDsTesxAE",
  "key10": "4HRrdvGeGqUwdcz2rffBkQCTacBP97Z47dDyTpDLWJWndc3NBHYDEC3Fnd92CCgYfGzFGGLjhnroP7NQUSLQuWFd",
  "key11": "P4mCCv5AngHjckhwbVrAmVyWeYa1sszr1i6GZhzkMDCwtUhQuZPfS8CPceiPc7YAtaqezk5mM8tVwfcUJ1piRAx",
  "key12": "4adF6LCyXAdC6iTM6FocPX9SANg9MD9rULS2njP2pUmYGb2iWsASfe6MsK6nL8MEsBkypSbwsYTb5jpkLz9ZvMDB",
  "key13": "2x7WJj6SsqGM6Yzgh5fXjWSvdiiypQqqNLEJE3Uofe9AA61BkEe89ZkjfHXPQdQVwM2T3hy5Zwc8TDA2wC3GtGAG",
  "key14": "2iDV652oVDF5ZgTFiv5h6wsBL2ZR8EuiT6GWE4c3eF9D3BFcaW2G3kJvWHYnknukTupjQ9AQ2ppycW1P4w34iHep",
  "key15": "5kpxt6rH8SQCkJUpWRAJWLLXF79nUipBWSa7voaUYFV61XqtE5U2avRBSNn8Kn3nESw48ycDaiRm6MHFrLeZovmx",
  "key16": "Mi8p1aZhBpye3ZcFmHtNhEPVbCc5Yk7HVbJLB5YAQDaSPh4Xkyh2WupTn4gpaxa6PXL9kgFvF8n4EcEjD3yyFJQ",
  "key17": "4DPk83vVKoQSLhq18vgrArEY5pBcUaLy1K5DdcKHoL53sgbyJ38opH8U9KyNLiTWEW57EbVuoqqfN4agKXV6LRix",
  "key18": "2mCjGxnkmVRrdh5zbAk5Hy11yjhJMKJzSFXSv6d1Z6L5LYB5q3WkELZTDHnYiSTPNH26WcsPKiwVPv25QYSv1ys6",
  "key19": "bteMwF47jZpuZRjcLY8kK8ZbVFWRppHQPqjPBhbNkXT8Xv7dnDcsK25sec658R8eNRaxZaD62xWMGdqS2ptd9ZF",
  "key20": "2ucwuykm4g3JzzQ7rGdcKUzWY9vDVtPqv4see2ZAEVBR92c5Aru69KBynN3gUcheBuRqRfKG8CmtbWie7wc7RMbZ",
  "key21": "2R5ePwxXsRbgPdvh5F2oQ2zmk5aNydFxJqqw275R8aUrKzDUeCaFV9927moQHnxfi44Qi1Lx9coPo6MbX4b8SENP",
  "key22": "5s6ooP2nGXCv8zJTzBqWwzxYfb9VQ18SJ4nHK3qy3BzS4DoWn2XrsxJPuwnwNGCpfLxdvdvuqhHVjJE3RDa7KHdS",
  "key23": "67rkdVegQnjn93twLwB719gCXLWsmdNGuyoqm1HztT21MAni9cYFAYjYtdArWyxMsPW4K1ijjrkRiUtP8DUrQzWD",
  "key24": "2f8uwt9r2Q7tbJM55uCQ5z8qFzE3VSL2VFK9Zhmi2pFXkA8Rja5DcgToduYxCiTXKvQeW2EFF4Y39HhTsgq8voCY",
  "key25": "2UJf36ERgggAvdxusyLJuiEanRkMf6cqF2DRuS2VELXfxERqhRDsLqmv72zm7rFqoiC9pmerQbBFxsK9Hv9HM9jA",
  "key26": "5A6Fj45aGZH6ggJBS8J533ar6D9hatKVoBRw7umuFhnc2VgD53tevYvuCG9bYiQx41oLrToRKiKhNALkvnWHQnUG",
  "key27": "35PM6nKRouyxiSidb5ujyH6Z5zV2ykpocqgDyxEMBQy4BUc5ETkwbQgR9AFtfeSPUXXg16BFQX1tjhCmkGtyD3jw",
  "key28": "5mPjqGPBkn5aYNPhSBWVFSHLMZpQudke9AK2nFb2xcR5E7BpzJowYFMhZHnrCtfie3R4Kr3SmzjgAGJqL7bsew5G",
  "key29": "667LJYvCBeYkyvHH6FmGwiJC7m28mZqN6vysBrMqPFe4cfopa1Yon33gEJyukXvBVNqR1QDe88HZnHdmG54UjpeC",
  "key30": "2pDhVwr6D93XL65xKCbdTU6dWkHrfi9LKiRV4K1wsZWFEM5NPCtkbXPQaCaucjzsg1asqn4fbUKvg7em6hemGKxg",
  "key31": "4zCABJwFABYuUTtZSZHZ5sUZmQWERhYnyPp4Z8ghNqiVes4ZwyMX3zj2LGgSSQhRPT3Eho4G7g9vnphFG6YQHjh",
  "key32": "WXAtGhC51DK2gH5LZ5eXtmUzAZyLL31QJ31FkaDhfNP8q6nP1JjNuiKBUhhteWa6GRahN9HYCCYVhnWkeiuTTbr",
  "key33": "2vWvSdD1AiCxpEY97PPFjsLNhWRadu7QiJSYxaCVm9SczmLVorYR99JYVCZCj3toYor9j4me2Bu8K8pHrK4r4fMY",
  "key34": "4Tf5y5qRTmkfsDz75twQdZDsYaXGUNb4rg7WA2BDojLCnyc2KKLreHQjfesRoEQJ8PA7TeoytjUebPoQaSGRHf4",
  "key35": "3HUMPrJL8zKjfXjnHqTLaoDkLC2XNdjCwfevFvNkar68ZUYLt7bxbhHTWnjsd9FzucZ8nXp1qqTFF3fkupwDV4WE",
  "key36": "55Wa9xGQ6iZHm33Hfd65LVZFXKcn6xN8ciPP9VQ7sMNhZWJxP6UXHiqRpoWW97GSH2jdRWoEuuo6wjbrs9Zw39AL",
  "key37": "5ut24ZPHUFnhb4i5PbnXG2VqNqpWKCKMh9QrG9Gb5yeEmreitu8aY736eL3k17xFJPCCEKfQ8bXhRyMatyrqKJoj",
  "key38": "qpWYNhVnq8EauxnYUy1fu35rNZoq9aDFZ79ByizMiNqhzmEZJfCtLY1iRohg159hvThBG9pebBu6H97p9WeBk8h",
  "key39": "4SB7rL65d81EuH72w5xXtR51Q769tg2PpDipQ3nw7uSCXgrChtZftSzyCgQwb3TeiP8KphYMvVLtVinBxbkqdcYE",
  "key40": "51mrV7sp6SLapNCR9ymgcFNY49c7HJ64QC23aJd8ytXJ66DGcen3PUinDaLiJh2yvipFCidp8m5eNsJhp4DDAHZB",
  "key41": "4p5raQdxjMVg71wL5FCrjSDVf35KJTzkpsfGDVJ3jvYLhJnGuqTfgd5ZAAKy5dteTe1jDSnB51MnSVfXZDgYMDT2",
  "key42": "2mSRymCjYEHV1m242EbGgptS7NnSdUGixwCNs8nSNjs9N1Xfuhx3MEDM8woruwFJ3UriFaGEW6thz7tfUQXcgC68",
  "key43": "2wx98FdvdKCymbh475aXhmut1JyT24qBauaCGcHC4pjCEAuguSxVJtrXLrSrD26v9dRYfnUFfG53gGBGDVjgLhgs",
  "key44": "5ZkskfPEsndSQHFmdN47vJejRogY7zGidLnD5azRtur7UkX2zbkUox5PZfkgGEncD4Q3LiTHRVtyhZh4azmCFgQF"
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
