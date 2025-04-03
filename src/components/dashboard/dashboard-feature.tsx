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
    "8ytjzTqJvcvbm46B2Da9kfPATAPcBNYE2xuyVs1iZMeAmQcN9p9eE16dPnSHmLgYtDiF76rxJ1RSRsM42oBfBey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yiepRhvnyLjHDf3YVzG9spRj4ChbJiXo7ixrLnUwkcUFCmYPDN53gEey8DaTqtLtxMGATC9X4KeiNEcfmqVknqg",
  "key1": "2ZsUkeMfpaqnSwaQRj2fcgnELC3Vn2rvMbNJztmWe1JF8Pk5pFWasnjHLhA6ydk2xJ1dALebv5eJeRgrJAucRuXQ",
  "key2": "5zNXQDXC1X1H3ir1t9V6X4QE93FweAAink8v67gYB3bNoGffzTiuVz7JC1Wxnj2gzuX4U6R2qcPsCK5gMwyevktQ",
  "key3": "3cGUxe82oBrc3qp8AwdyttGjt1a1whYqJaZvqgBF2XSoYQNiaFq9BBohiquUo1jyfCHtFFQBkxF2whL6yN5GGCgj",
  "key4": "3tyWKoJHzdUYnNDGiuDLkdvEXoWH2HFenBNa1thHBxM1JRzeTDHB8dC2ssuzGWYXixQjw4VMj63jPEZmK8XRgbmN",
  "key5": "qr2SyWW5gaDpvikybLGJwGC5KXTeZYM7T34naNDt2H5o88epoEW4KJd4ELpzQfvwWyC1Wh94TRphQ897TZGLgCa",
  "key6": "25YaqHmbHXDUiW8it7wnPNwprHfy3BVDAgqvPqKgccZU8sHiLmHz67JptQibUDf4mwJ8419RXAhzbqjQh14bUgNh",
  "key7": "24nbgsamVhxHLMMmXSXKJkbRJGhr643inCjEHn2L5yTDQ57VDmFgNkyL5DLhaAEamfCzvpzZJdjYbQmtixAekoA6",
  "key8": "2JqLXxmiiFTzFHQyCrnJuq6Z3rMgv9minK7i8fuAEDXh7ihuk9QQUKfnBd9Lu1YwDhBs6rxtbA7w2whCvsLb36Hi",
  "key9": "5kMSgFJwtLkC5KrhDod9Grc8SAwkMqFYtLRvArSMwwzUsYWwEuQCQunoTZ8ZBkidu2TNUb3AGZM5GQNPcNo6Qb15",
  "key10": "4J6YHHb8eA1LV9vikWBabAyMg1Qk7oCE29bzqVmokFAxrVW73kjHwz8Kd2xPvDXfeZ67Asko1ckLZX6iwYgdesbE",
  "key11": "2wutZh5nGpFLXHFm7qJ81juZ8zF7sPYDm3XrqK1ZaMrruNz6qMcqD4sTzk3KknERp8jjtFNy1LjzDiuC7NZD2ZJ",
  "key12": "5v6zrL4RxJBx4AsvfisD73gg4TKqfs5CjL73Uorodv8wdczN4c9cLVMX55x8bqpeHcdmBQHBPU9V2GcwHRUvBaxQ",
  "key13": "3kNV8Q19UJ3CXEeo1mHXseHyNY4c4wy7YohvDRMTVZm2Mkr7aGRNRfwyeurjTWFJi3qt3wQueEzKsF33X2WLNU33",
  "key14": "37a9x53Jj1jNq9iiQ3MX3xks9GTkUAhvfKXKHV9JwBwiDjZGE5ywV5MCsAcy4qKRm8UAgKde9q6YMFJKdQtjhCp3",
  "key15": "BygDij3NGcZPKqxmWYvc9f2fJT6pRjsBZFpNsWZrfp5to4rZQ9QDa49kf53NGBim1kmyg5Ln9smxxKrAcZLGbyz",
  "key16": "CAECefRr7ioSKHdot4krRsQrSdbFqobHavt4ggfJ9USCH3L1HR2A29FoAVxXsCL6UBpJv4CwxftjgnHur5xyxiu",
  "key17": "5XLFaEzjVnyhZu9wfS96RBgqZrQrY2cxAK2XkZPUjuvbb59zJUvS5HijFAPNjtrMGz2AMm1EhAsAjfErixkVqrfJ",
  "key18": "5NRYwL1pRvv7wcZyk6PPcrbQ5Ac5Yh4MZdhigRi9GRqQr63AKkvcnDb8gC7aFvSMsbXJhiCuGGzEaNxQanDh6VYZ",
  "key19": "3xp7HsTpgdr7ga5gyz3X1nKfFmwhu5EgJyC9GdNLU9UhqH3ZkMsGo6nrQJuR4FfxWqJ6RteoyyWRL6UFCu41guN9",
  "key20": "PtR6CA33ja4w2h9bq14hJJej49jkYYGUXRVafqocqtM8ri4UBYiMg8DGvXdEDoB8pUgRiEqjMwhBGzypYE2BKdy",
  "key21": "2YC4PPPrZVajtLxJ376RT3ZEJtGJDo9KY81xXHx6cG9h1h4HMeFcr7BiZsGtmNYfFoYqcLhmb1bjixNb8CxB4s9E",
  "key22": "52BBZbLCFzRNtnuqFJakKAZyHtqHW2UfFfRhf9yuqqUtwGfer8wRijQ2rUmHz6E9haX4TaKHWK4UTsnf3XLoksC9",
  "key23": "2Rx7Z96mDEQHfKZzUR9WiQ4LenEYSwKrGgkdF46DuLeMdQAeJmmSY5mafcuQmFzWsS2DqoQb3V2W5SG7fygbK9GZ",
  "key24": "DohqJie38dG9GBUyDsEFGDwunLs1PNrHzsJaSD35EmTVUNdPVVdaYCPfUB8FaAKC3u2XdDZS5D2E18yUGgkdA81",
  "key25": "5G8fgv6JfHYUw3XWxEybam2rLWtxWdj5gtxyxLXhqMBp9HLmRhCCQ7PSvAAkkMJPFLNjkz6mUB2SkLAa86AhswfM",
  "key26": "4YbMBYxbW1ccBJ7pVZ2g5dq44DtmaonbDA2QWHbeygT3nm2pgDP74f5Mc4UxWcm3P3ZnvJttJ1aDaqYzx91hz5mw",
  "key27": "rr41prLZWsa3RSKHgaW67vUVDjDvrxTb2RZLtFjjDMfwuz4fD8k9JDVwVqyiFevjQBK3ZqT7eJFwwijnBjRMUWR",
  "key28": "3UGB4zpKo7RtH9J7xfB6BzaaJNxxqRvhTE569x4e5SrVD9WEP7wW1aya6ccXjqCWA3csXpDMeuK5DWJFxeFvDqyQ",
  "key29": "B2LdLzMKAJyP65MJFzpsji1yrEQ4ojopGmcnW9c6tsZTsqnisbpfWNU6pessSPzYFSG1yYrX8SVPQyY1kcb8zMJ",
  "key30": "V96AR3Rf2y6d8BBzmdW2RDjFFBR3WAJcWMPBSKyXnzDA37NiLha8btD7M5QNCtiEQpGgeiv34hwmVZn1hXc57Su",
  "key31": "5rxhSZvB1wtKLCFjSbpTUCBaYCiC47rqX3S2yA82gm3mEWC3nTmaoGiNAtjT2cMG8dD984Gf9jVTHQaEBvrV3bEh",
  "key32": "3dykpeJb4cdPQSzZzeLt6gweidwZEMAUin3hChpQCQvW2miqay216j8ezieQjfLV5698fPk9ptzjwsyVtBNnczR9",
  "key33": "4yX8bn7TRwVq439stSntL1MmmvziEEZH4R1rzNFr1RYmw2MG7acU1mZLAzf767yJFAtDi3CN8Weat2rvTyhYw6dF",
  "key34": "5Pcvhhc78EzhyHCZRdPXAWYvzocrQGS95N2tDFKCzCEbDzReVCA9znz17Y5S4EJjGMsv83ht7Zqrwc3EJPF2oyj9",
  "key35": "nochUxRdeXNpRA66idvjmd1X9y1wBR51bcThW85oETfBEiwMeYNhEcYTjUgkL6YXCjip7RRcGK4NhYWHK2VnLYb",
  "key36": "3XWYSeKRe7YjumXbSKihhnbRqdqnyJ6aCyMwPDYHhZKkZxhSGizw11hyvcFnvfkoy8bxLh4WTo5aHBvwXJ7tw7eU",
  "key37": "3nC2NacGnduKnAnMLGJzAYo9ECG8wHZwBaAz3iZV49ifKnsvd6ZN9M9MwmXn4RZLzy4EDdNwJM5rburyx4FrzEU4",
  "key38": "29fSZQCJnvQgK6TdXagNBbEV2GNCgexCEyegG3qun3wZjPiDVLfkzydrBbXMxD27zTN1waY2qdYkcvus86bPZUEA",
  "key39": "3dSG7b2k9zMDT5ttuMffVRs6NzQTButmgWWpZaD7rRUGGqY99Uxi2Q67ks83EY4dNRxEgjaMWHUJrSA2vx1f8Ph4",
  "key40": "4xuQsreti2GvhKyiLb9D4yb83HhfNasDpZPRv5n53LEkRt4MYNMgSDs2BphoXcyMjSajHtzkbQc9ZoGZgxobZMjn",
  "key41": "3P83v2odwnDU6qvKRoGk8iFm986YYpHQjCBBPFnajTycYwsgqY5x3xDxRiZUuP4yNWSfmAhSjcuDEVw8w2tMsfuC",
  "key42": "5ZrGgnHySQBvX4g2FoguSQGF5wceYMEKFJb5mgtg4rghzUZkEKFjYPacjdExj1xbHB5YJSokzEAC8GJwZziU1TD5",
  "key43": "2LctYcMeMSW28cCkS1wV6FvGpCkKMyyJJcQkpCSeUSuzJJ5ogQJ1pPbN5yuYWW9SaaytD4mEXLNzFHzxXdAejbVn",
  "key44": "2rYg6NWujvczrnA7soS2vrpxtgXKmeimS5UaD78Fi4on2vZZiEinhoXgFpG2XypRLY2QiG99T6gBH7yUUU7LVeLB"
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
