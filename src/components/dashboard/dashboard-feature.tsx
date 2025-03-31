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
    "2xLVXKRJCAwvQofRmBFerq5fkWg727qn2zoc1vYwKYmz4BPBTpArUk5zCTiHNARLsF1466oASgnwf1e9S4bhbb1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJd9dxb8ERhqB9U66tBhJXNxZC7JAgUvboViNRPEeB4UZvLUXuf37A852v6VzXnnhcM44zQNPGkyYgxAyuZFf6u",
  "key1": "ZXsGmyazzu2h3AqLQQ4ven2TbstrxG6fNuW8MzG3pdCmKK4YBY5GqvcbmAr62hYgYAcCUbybfcW2wT7F5JR5hdJ",
  "key2": "5RB5n8G8kgdmjjZNBsByHTVp3JVguZtCyeVGJBSyPdKmgSnDzn4GiTyak6ZdCw2agHUqxeGUTHN6AmQMut2cuyBL",
  "key3": "dHvum5N5fg89HA5wspPZhmSWYxkE7ZojgnozPt1hyC1X7RUqFbTZFi2XhCVx5LD4XaypfqgE6GrgrRN1iSKNw1Q",
  "key4": "anURMFdgMqpCCw5zRFygZMLkgNYZTUtU69jZASTKUKqySfNPLGEiiGvbZwcKs9fJoCAsxSBDgUUjuHzzdamF6Nx",
  "key5": "3xLyC8WYdPtMRnNKUeUinxBJf4tTzx3YF11P6sdfmKpRC762PmMp93F8Ypto2jyc7122ttfRxAjQic2FFKXaAKYz",
  "key6": "Vvzu2L2v7K3dMqruf63mwCmtAoASzrSLWanJouGRyXmR2o5cmMYPjV6FBJXcECnxAXyfobBMFX7oHy7jA5ni1Ln",
  "key7": "K3sPMoRxR83jPxXLEJ182E33uEjH7v6AKeLK4rYGK9MrspkMhSiPYfL36GEZszW2Fdmb2atPb9eHjUHCX4JTz9j",
  "key8": "5rizeKnzorUxpY42HePddVpuNySpQQceZSqW8jyPW1MKqSXZFudrukcpTQXnKQe3oURGFU1c1AkPirintPBwxs6u",
  "key9": "ukB4PuniYChdvouSFhSFtQPnVQ6TY6yE8Mn5eJQg1TQMESbrLm7mhcn8eNvrCQi7bdCKXTwnhkPgNjNJyPEgKHW",
  "key10": "u4bqdpEYVXhcZXwwKrKUoggrtTGkL23MdNV7eS6j6ydpxUQDyFxhFS71kXzDxwxsGLEkpg69RdVeYXhEqd3CwDY",
  "key11": "5576qtuuxjhyvZmKQBY9s8XuGzQWMXphwTwJU8wyujFq8jqJz5Nj7P5faZKkXprbb2StCCjZwLgdMkRzES8f95WV",
  "key12": "5DbYiphB7gBhn6rA4aZJNCjfSzTzDNZkoSNs4Nzr99i4soRCroSiQGQ8xPKQSoGuk2cZ57ze23oKWUDdun9ZzZUE",
  "key13": "64mLpQsr9oVAP7eFDs6h75exuc7aSAEHiFozuocWgeCjkMguvjMgF7ADZ9pycbftCUTKLdscFtS7DsL4Zqdu9gVA",
  "key14": "4gVRGMo77w5y4it6bDRsfFWmnH1mw5mzZdEkUzAm5F6dkqJpmbU7z9xqwNvQEJH8mAmjQ7ZDGU8KKzALQMG3mrwd",
  "key15": "62GVZqQMQxMDVDVqV8FDKpvmUf5AdvYXSFz7R6Ps2WK6ubHPj1YNcDVmYXoVVKyGMEtuZdwWbBXPftUya96x5S6Q",
  "key16": "341MHVBHyw5VwjXWioP2Dr8pkyoj7Cnrk7pAC7GXsLtPd1Rgc9RHjbPr7iJYr7yqKmtxjD8fwE31FiHEt8hqxwCf",
  "key17": "5Gv2kAiAvBrCT7LGMRfKNeGcMRZNNzUbpt9t2n44WDXMu7BAFLuamcHn34Cq8Gq6SMZxzCR6TxrgGWmGwHtaFWWZ",
  "key18": "4GfpdT3UNzPugz94awFe9EWMBbzR5C5mBoXddSHiScFULjxqe6pp5XvthDK2Yx2hZ3dzheTQGgBmK16Gdf5aSEBE",
  "key19": "kziVLqCGpyxYx8J7esjKJGkZCNDuiyUrxSVVaPvBaB1d4pf3kHSnEm43HFWBWuLxGVo5e1xNbMSD7i3tLy4uYXx",
  "key20": "2Xuvg43wzVemyznkondCzdD7jJsF4TkqdRmMezBWWkzGskBhFSw4g6P9c19KRo3L2yH6EyQ3zexCii2e5WmYgdtn",
  "key21": "U7ubAZ26BGM4iwEnPNoF9c4z1yknYF8wyJaBqLiMmSz6epFCvfJq8rVHYzWJQwa1NgUjV5NmJ4LMLmci5LkREL9",
  "key22": "5yfm7AwLA7HRPZsgscex37cA7Dj2q8wgMPGYo1P4yFjNTEeuMJkQvQeBDGDQpMQdtYEFnTmggPg8bbrwTGpF47pg",
  "key23": "5iFyGDzwYEAa4nAFkXMtgfsE7xm72P4K4KHCKmPBnBbKo4ycptqNTKzt5mSdH9rE954vFoioQ3fGxWncSrKW6gDe",
  "key24": "2SvFmbvSmkMiLkAcodR3zUzCdTDhQFZSmFWivLn9YJTdB6HSjhtTeuYbcN7jFSf1UFcVhvUN6oTvsiz1Ggv4EGZH",
  "key25": "2DN9XCUgePqxYF8g5PKdYkoye8fJzwDatRPVbVxU8S58q6AcdPHYWR9mvRzHe6ruDiUnoVRdBJ9oo9rwRubMmQNC",
  "key26": "ifqfnWkw5k4NKGwy8YQWvLdsEXWqYPZJX1Fq3D6FJQTDZaCGA6GM9kkdfEJ9tE8YkC75UGDYmhTWHdDNeVsW2v4",
  "key27": "4bcwCooNUaYtzcDXgw9gznruAGwL2Hppo73rgHPbC95fKp5Gec7PjnnxYZhX2jsyjPT5XFuyHMnTUetjBw5dBq2U",
  "key28": "2LNCNj4xuQ95jNjnEghVMX7Kmu51FigCLj7s3ng5touZAuvSzkwX92Nd7Ah2xyNwirR8zXgUUZJBZ3ZPKSrK1iLL",
  "key29": "66KNgd7nVhVuqjs5Ndg96xhC3YfZs6bos9XikXefuWLQh43jRsyQmbW5kdnE2ZsKPZ2EbkLssAEBa6ndUwa4PU2w",
  "key30": "42kZQY2v8ywXVnj1by5oFK23VQ8H7pm3K5nvNFsgzVXZK8kgdY2L4QRNVLZu6HrrQNkNRxotrNKENmMBGjGdKAD6",
  "key31": "3iwwayne8KSPyYpMoUZGwC1eGtK5bP2hZEurgxNd2dEhB7LKUaTn5jGvinFNNMrXN31evDHXJ6hPHrePmU6PuUpN",
  "key32": "4zeWDwFiBJvPk5M4gduL1GN5bhJ3USqnmsGhyeGRZxz9k8egp9aopXUAhLmBd1fENE8z7pPgmJcAByfKNSu2Nxfv",
  "key33": "EdxvtXvygSVVd55SHsfgTDVKeoiR39pHmaUUUD7zWeyrzrKR3jkGh48oKAvQJx6LUnRvxhXBqHUKZMaXpJxjthw",
  "key34": "D4kza5acLzC56PjYh2LnstkHXVu6V2rjuZ13uMqTV1wAceZkgSsHNA73EeHMJR8Ndztp2FKcckLYGV6BezE9FTN",
  "key35": "4AmRYxiBHMNHYc6Hf6Kodjy7p5KD1ojZdz7fQkGEw1rTYgqxDfRxQhEWqfDyL2wTySXRSdNDzXPRNbWwU4wameQR",
  "key36": "5PBvpbBgGpxXxdzFZmbzuJ5pb13qZZQwFEZpidRgP31yR1JNn8saKnRWVnWoeXybAguv5XknPRrcHojR8Exrtotn",
  "key37": "A8h9nz99XMN97PyrGgJmAr6UTZsK9hdjfP2UDkwAAQ3zErNyfexy7upKj9K4FDP9EwfJeiAjAQsehczgb7SPTsU",
  "key38": "3FYXNX7PEuCt4p3k4YxS3LSFyB34qWkxkM5wyTJwYU7QUjmi6qFBUg8mTpkLYwsvfApHZzpqpLwdgMp85bPTxCzb"
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
