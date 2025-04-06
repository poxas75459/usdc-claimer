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
    "59F9pRP51n3SdQkX2nXhXmb5wefcWVH7zqbrLTpTqcPjp7CGESbyqGpFbTzYiMuG6dHGm5LGmCzmerrG5ZK2gCxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wsWCsVKnzpxFmAYKFWjUFoTancX1uZ2rRBDuG3J6GpNb3H6K8whbsaxRjPrAua7Edinc3FYPRiBaATzG5hf6Ddy",
  "key1": "5JPUST1T2ADtmZEMiEGaaYf1RBFB8TfkKYtPnczJ69cpPs9HwffUFEqmGQ1xewKxmd2v4bipQpmL6sy5mB1qUbca",
  "key2": "3URVHvnUCNpe9gFCuwnnMFdGv4ZfiUDmdJZ5piCyFQhbN4Rh138b1xrbjjvJvxiHnbRNzTeQEhuKiGkzwp9TnzTj",
  "key3": "3QE8DkpwVtbosjWkVDnKUpK5TCjz9M4mAMiLht9TeUvXbxJ3KrAheFjcYmVBGRuy2p7fz2WrdcnnZ93a21iWkDcT",
  "key4": "24zhjsN7xaFq5KUrYX3YXGeUzarH4S3F25vCxsCwTbiQmGLDhCmux2ag2fBh2tMB1FiD4HjxqVUc5uXi77L7qCsc",
  "key5": "5vATbBcaMgC7cQg8avYsEEJDf5YFbAyjAf8iV4taox5u6kmMuVe6ZGsEorgGSTsLdkXhaANg4G16krudHqEhk6jv",
  "key6": "69YBz9nN6vYv88XN9CeocgaVNnitQeTHBMbDwK8u9hWaHGHpjZBQYJ2gyfWQbqhH9zVj125hqbLoekCna3dGCbH",
  "key7": "wcVLncfcLjLS99govQmaUCoeAdtzC1NmggcMzfYm6QZyaNxcZEkpyt13ituzMcqSxSK6fXbQqMDgJukk6R96cXh",
  "key8": "vofktvQfX7awtuy46JfLTYZPghnFMNPyirpmJYBgFR9o6T8QfvUrS4kM63fGdKYZyBr88hDQpjtxhUQNercoHhC",
  "key9": "46nNXR6pp8ZS9cHvtsCT6AfseXijuGEeWfjLAB4uRnkHn8tHCvo9oEwWApzSKzTWadmoavraxPRzAU4kZNm7QgBd",
  "key10": "5mRSSig446ExKy84phLJ4mgg6rssyNF2Q5sqb7shvWNK2YzUz5ySANu4WhNNiUhAB3SRCUEUjH73vTyMgpsKZykd",
  "key11": "FLJih1xYJC5YoYGo5dPNb8b7xSjksh2FGBZyFSfioGsEABRNrWss71vL5RbMe8EnQgqS1o2x7js6QY9Jgd8kzvt",
  "key12": "4P8oh9wroAyfFC9Pwj6HX9B1pzSQ715xt6uTJRLk7aWMed3zJYZAXhuTWUU2JSbU3P4bRanQ3Uet8Qwv6jVCnjvs",
  "key13": "5PX5yyoTCUFc5RoJcm6Uuw7GAB6gaUAc2ZvfnHnQCM5gRpDgpwsUVe9Aa2xyHzM8xoh3Nmb1g2ZG3rg5T6S1kkuF",
  "key14": "4LCXdjEzK8pfzsUF9yqeFSWaKQDANWrJkQ9w6ofo2d2w5udBnkoTjG7T9u7VeCWNQ1G7K3yBqS8vXTyztvgDg5z5",
  "key15": "4H3xKrGMUeiqjzBqzpQLTZKSyk7mwGj6prm41RPJWGkurtTrdCwENCNwS3DNoXYZbehryNSXxwWc3nRWnaxeDTbC",
  "key16": "qYDbgjHZ7tweQ69MD2mtZZJTpESN1ke6wnCqnb3CYKRihhZBRhmpNTuXZDGTuRwojb4uSYSCHqNiv8fTvpeJuS1",
  "key17": "5A78h8TpcvgZAYj95pmP7f5dkK2HQ1oKHPetpPJ4HTYyjYihQbNoVHvWpJrb5tz72J5KFXVy4E6FACQVyodWNboj",
  "key18": "2hUf5qSbzdwr7pyaY5WNCdoNyDofwDF7wfXgLZo1AnxXgVh5B7tS6ys51D8msiD282S7TbawiEHgGZNwD5tfgH4o",
  "key19": "4CKiXQ5igKW94AZWesK3LZ2wdoJyK77sGk2tDyPxzUTcZLwXXgnQegBh5BzZZv4Zj8CZyEKduHjoEnVK2Tf8iGJo",
  "key20": "66FN8DMuaXjZYgM4rR12MKZrMUzgmX6V6zTgqY8pezLSWK8rnLr1AKTrG7x6DerUz8SM5m48G55aaJDQL483jPKA",
  "key21": "4aNh2hrzcvPywuFCePYR9JFtxTGQsav1oNg8kzHfGVkS34jxdh9MwoVm6V7tgoRgMiTcSBtGzme32qJ2L1Lg7Qvk",
  "key22": "5ESnhuEZsxsj51oFs1a41d4GAX7ZiRFnvVszzu5BmRRmwu883TF7LPmgSHixHA3bRt3rVDfagEfep3mwQRR9t48g",
  "key23": "4snjZsxj1w9gbwss9iCJ89Gj4hgj1E5Wpe9TZfkrDs9GzfbPVQ6fYXFPgZ6nacwG8ic1dqNn1hsdLumE6DnHRSbS",
  "key24": "3NuYeep1Nao4DaoSZg4ocuUAuh23MuA4diRa6ZCeUcvNpMFAKp1ismikBipBRe3m6NnhfBY78NuRuHSrcF3yCa3f",
  "key25": "2mnUJWFXZMUpE11PaLgntdaDpnp2N4sitK7UGvm9pZsu1zofcXuXHznpdRgi4xZhz2ZMoAAEuB2RQxJtNrzoamqG",
  "key26": "3x1jmqQHFNWzkGFqd8jAg2LoWMBUdTjrKz3HazbH9qgMrujj1uduKVj69PsZnaxtZ9dv3fyjcR3SBkzCb2euoHft",
  "key27": "5xGsbywdqF3ESPJFLxfVFoVaCmaFo9omkgJi8dUSvCSzuj33tNkpxPexhJaR8QPfF8yWXdFzZSqwEDc936iX47U8",
  "key28": "4e6vejpLTnRdk25TA8Tv16WxaeFmTWLJP15FtoeBfU5HgjJRALwSYD4Qy3GGQ5vyPhmiMUexMxeqeBNasEmNKgXk",
  "key29": "3kRWkkVQHoJvdkmLSkkAn2JZkiHHbN84kPVB9V87VMePpJFHEkh9gm6Aijwyzj7u9EPGEfsFvnTYR7bP8M6YMvNn",
  "key30": "42XFLooxwUKFenVsRKHmEeq5CjhifKXzSnBFoidbWbEE41bH7J7URYZwWmqXrbUHUW4t6stfdWbsVEDRhA9iaC7t",
  "key31": "3FhvNX2zQV3yE6c2VXfJ7eayNDRg7vsEvoJg7qE76u8XZ2C5cmDNf2Gd6ron4f377yBJKfKZY994nt427yCdJh4q",
  "key32": "36d9zFDtDrWzuPX8BsEm28r5LKTDACi9omZ7xs8b1cfz5sZDAWe8ntKzfMBoYne9KQNJ8mAfQvHhhPVvH4ZQoDLU",
  "key33": "4xHwywGZtb3SHJ6eU6sCThCEQo2EpYg3qeCaG3MCrXiU4Kqic6KRMLKZkLnS4CJSBhufaPp1P4mZvJr7vDVTh86E",
  "key34": "2VRC9sWVdTNAW4WkN98hKyazTeFj2VupXoJVWwByVBThPNnnkpBFge9E4hHNeu5nMU8Da8E26HXds4rEVL8N5LGR",
  "key35": "2NwgEWxdAr7GvmMxHMh4JHdSfeGB4psenvDV8UZWYdoc38Ao9fCcVL1kNrLX292wR7t2hcKCWuUBQ5Wd8eQgACes",
  "key36": "3QFJcbqZ32Krd9rn2gaP7xVzDhYNWz15J6zYyE4BoehPL9pSPyp7vN7jpi2mk43MiLG8SKVMatA6cVbGBanVn4fy",
  "key37": "2q1UwbyZWcgVLcYP5mcsuGibRMXxYV9c83kCJEaUYreQ2i619NW4PsaBgHte2hASBWqne8feJMP6Edh4hcRj1EMR",
  "key38": "dwwzaRMGRYvtgp6rTaWrMrU2WRnnL1oXfR3bctMaJS4PVpMZ6sdPk5pzGGbgLKPY7PY2C15oTfBmCqKBjBSPD4M",
  "key39": "5hoAzxgm45X6q4G2bERvJqW6PoWnXkfvWe9S24rSWJwVapwwpDkwWgjaxedDf9roeyY4ufYYvjpRztsydYW686Z4",
  "key40": "2dTRNfxq3VvSZwrJWKP9xKjuNQN6hjDpUonBD1Pf7Jr3Qzk89amDy4JGHCciQ85SXNRHPzP4MimmGMx2AvAtGMz6",
  "key41": "2RAjaLMzkdw4QpxqesXhEihMoSmfWMxyvRNgsKucC13JDCyRyEnfhoG1noDWN56ae7QR7nHK2GiYFmJXycpeH8Ht"
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
