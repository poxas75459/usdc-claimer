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
    "R1AD2AhQdcbrFwhadn8ajzWgUjWwFA8DqJx3xRpJ11a8nHa1uxqLQU4w8deQwc7rY61qUcQuKV3JGWzbsG4XAUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EJEcA62pwEoLRKJWQq5seuMWkWsLqLHoK85X8pRos9PLqLfZCwKmVbUwQ3bB9K18dfRdspdLMH446B3mAPdm18s",
  "key1": "2Ef99eMN3HiGNaHNAaYyPqGR1gfXNrwyrdaQ9tHJ1KxsPpBQVbFHoLwzMYVgV81cefN5YWcHRvgBK3rUKykjJTj6",
  "key2": "FRmrJjB4gVac7FNegP5P2W2mRWhpcgLYtigr3fLG7ku4WYrzxRGVqP2pvApzi4YdjwHUsbAmxTnLWnBww6tjhBL",
  "key3": "5zR5Em6jCivpjXCZzYriBfxVj5wai6QkQjtFvu3SpuXZSoEmUzmcuhj577QY31BWYU7rAtt4sTEzEFfvHibb8Qce",
  "key4": "99Z9wJWYky2xyWXqeKLADGDx4VQmqgu9cLay89pY2yAK8jVywS7G2zEK6QZsDU1emaxPHJNxrUYU6NAJgWjk2Bx",
  "key5": "4zW3x8tPJLcBmPo2k8rLjUKhrGcGJ1WrcdSwdLUjnkHwcjJLf3WTgSCzKdfbVUVJ15kBrnapZRfhxhYf9FCV8VEM",
  "key6": "5KPHqbbkU7j4K8PYkTeZtzd3ATocTusFcMrATQ4KxYGjRsss2pNmwpaABQRjQ2P8xLt5AMAJapEcP1BdeCtNiWbL",
  "key7": "2rc8JzJfyRD6F74AuUuyNZNAUeuevjXftrai6PvKHFY1E5sbauAGWEujXMW8VQ6UFBahDUUQjtw1ZKGmAjSZXu8T",
  "key8": "pxTXZRxG2xz3XdYerFZy9AyRP9TZh45AhyMbasvu9Yk4Y7rjni9ymX7SK7hRDYspK4nKEej6ubmK5raUWCsTi1e",
  "key9": "sn5oxLyDzMRwWF6pn5gYD7gsbuYF7GDDsGJPZqScbjhYL5nTh9xmLVPvSdjdtfm4qHujAHdmT4BM8K8u8cGHfAg",
  "key10": "41SsMxpAp21az1DoLPYW4zRbj3BzVEKQauBAyJZLZybhxUvkaDMfqP2SwawCj8w8QQKeAXdr68z2tQ24yD17bsmf",
  "key11": "4d4VgMW5MzW6LCoVcZ3qMJyiWP91rDtcXibnpJZ5rWK3rN9T1cdfP1cWXBBpnsW2TD1neJj5mBoQS2r1dNVZMtHA",
  "key12": "58ny2B7JX65xapxeeZaA7muLmFZJtoSDZkc2FNPHSLVDHQR2pA4xvPU4h3saMZXEmUgg7bdaCEKdsh9Wgfc3DnGQ",
  "key13": "4QvpcMvwQzqUmpPGNqq4q5Hz3uddbpqpWEWSdfNVPizrKXBjTfntkYakA6LzHZKkyK17VXPRd5TbQb8xggsPbW2E",
  "key14": "3sGHyoAyzkE5L7qGj1XCwQLmJxPPdep2MpGLBBp5MwXZ9CXQrqehsFaVKPV2GvqcaXFfZrnxiHyUHPXHwuYF6Sd4",
  "key15": "4GWBRhnGoeLZypnN96ZW9mzsSy2JdeX5F3j6XgBfkm436tRdQZo1wUUpj1vxXUjz7npK6da9fkMe2qCwjMFdHxjh",
  "key16": "2P7k36B93w5Wv3mJYzfJQLFtmtLDH6NSMtwVp3PAfPWUEGUUMPajjFgaYUB7Ny9mdVDivbaJFdDriD2uwGyWCEZu",
  "key17": "2QYnrzWAKfBWdaAVPCmzmtXy61B4jaSCj6UCscVaaZsCMCnqW22TFkQfXcUVMZLxZ3TpaJGwfNssx4HS5dUNSURt",
  "key18": "4tUmwYcdsU9UiwRMT6FbiQSn9Gp1uxeaHjNW7Sftshn57NumgFcemvPvqEQJUZAx3rhW31559GAVWveqCyqVh3ak",
  "key19": "4ZUxUj2w62XWwZbpRmgX7Wv7bxpSyvLd8FHwcnHPBhzgS5dvscsec1t8XpFDgoXRCpz7dfNbtRqbJZ7bJ95WyAEw",
  "key20": "2buVUNFeNDkidCrSYV1bF7LQb7SpryJWGCKVaq9QbpXCgU3GSBDavsE93HWtfkDUEciTCXzj8NXrHfwftqGnUAWp",
  "key21": "rB5brLc4a1iUzvP7AaUsMvcA2GUCasWwucMyjULRj2WXMs16kTweCRTj47jEv8Ay1MzRnjpsHh6muqMPAYQNboT",
  "key22": "5639SPouXmQ847GTMdEBnKQjiR76BVzawozGA6xNQMyRFxbMAtWPXbPHCjfFez2JAKJRGSJUXYSDsLNyWxRsnA9m",
  "key23": "3a9oD9wtb5Jgv7c1dSh6Zz53ZWkBrzy6JAvSSYFiPWGdRH72VF2o4sWYWKZ4f6u884TuLiFZnhjPiPkUWTUpqgxe",
  "key24": "3dw8RFo9gWjWKFA43ZBcPw8S7PYWgkLDabGPA8FRLF3cDjcbkt9KfrF5Ne9YAnWvKWjVVmKe3nniSQjAtzhe8xga",
  "key25": "4mkFsLb6ENMoKuKxGsZWswSC4SEm528hgtCVsiuhZiG4YLkXymHCEYqiqvoesqHny6uA6hWieMdfq2yQM8DwoUKV",
  "key26": "294PPMwHEU8PSfJAdSPZDvSe4kV9Hst8xNDcu4wjY839gPKwPdBBNX54iwTt24ggkNG3cCUKRTbUMwLXNnzEZ9ws",
  "key27": "25FEQrEnS1prZmKpdbswsDT7faN6uaS8v32K4odmJHFqCHzTY8nTvjXzicCHZefq6WHg6LE8bbXBXXvjgrG9wVx3",
  "key28": "3NQouUVHujZHnq1NgU1q9638Kgf1883pDrf8yEbEsZPQSA8Ku8vYDYHKZarSyFhZH2cET3p2oK8steKCw5WSWymK",
  "key29": "2YDnyivQsJoRFGegbnxe1rsfe7fa5FDg1j5w3Mx7zrGRop7BhJL5t4xmXkX8kt1eRquxG4WGDDmhE5LzFtFwE8LL",
  "key30": "5RC12GrXNNcAo3saCfXpVvYGpJQBmnoPxBT7WEbU27uFHE9L9gwfbV6DsoYwHomGUzUgFVezpNaAsazMmoZKqiZm",
  "key31": "53DVzVcvUSUExATJjoV4jg5Cnzor7F8uXHFwkXZQRcRRKGxX7qcHKgYAZ5sysbCQrXLyExptHuiVRwDZDgTPCT8y",
  "key32": "413nS7fogRKMoz4QSgVjBvNVRrF8Be1vuX9n1tgovf5zpMXXm2v85U2XFoBMQ8BoHbmSrvy1LmhYWfXXAR3ynFyW",
  "key33": "5X7zsaJyvGseQeJMNah5wx3wRBKeNT4HebQYjH8fkiL6A3EABHydj3jvPXzvQMPj5dUAaizLaampMRQdcZBVGhwH",
  "key34": "3J69cQdWkRCmAg89AB4NBjESJhnYB5Td8tURsAsTkEgMqXyKMJ8XTbbaKQsFWXMD6oWwr9bGyu1QGhc9RJQu8jor",
  "key35": "h2P3Xs1SSGHo75rLWjhGDU9whieRYuGVniD7HVAaCPRrC5ucy5vggNmsvDo3kagxs2WaNK2188fS299rfugrHDg",
  "key36": "5iHwG8wsapSPCS7HeC7dT9i76fuJuXEvVd4BRFFswhyNLjnJXsDm2mEVHCp9YAwX8RdRF7yvb7jLuNi7rafEHLdK",
  "key37": "528zfebZSpFjNLGM5hd3YLrTF1d2DbxygzDx1Fyf7VjypycyfXmW4zbXoA7tBR7gmf9uNLnEYNwYdnwceTaugVg8",
  "key38": "eAiGsWKbmDpT8U9wAsTtAtACDF7Awqud8PDTtTP13D4FyhqocGN4MEVRZjci53j9LA3FDCPwKn31vucKz7Li1ys",
  "key39": "62PmzrUKCniXwtJeT8ExyzrofNJdDghKNf4xpw6LGdnFVg7z2bP99ZC3rvLZoWYKMXNvrVpVgeVQYEUWLggXSDr9",
  "key40": "5tjsEfFKebLNTpjzn42Qvv1JePBVFJYAiLpiquznQQYniAbSDPv1jhJkCm8Yt84JRo8CrfqTaYPZ8vJzKxRcKunU",
  "key41": "QJ2SjrpgUF6NrwLPfVRpVCscTUN3sjBNfB2UUvzRQ4Zej9fJzPLjfDtknpiS5iC91B1V5zUAHKGLuFyza61JYQu",
  "key42": "5zrve6M8RceYMV1MzfzB8XummGRVVC9ee6XgqS4yksHQ6H9kGAkaS87UeG8CcvWSktkag6KnYgFH62NnaUd6He2B",
  "key43": "5Uij6J6zXw816UJasggX76Wu7vZSuD9KX4WdMDdgoSxyJe2fLqgyEKtiLbTkeBJ7rfgqcvsokqw4Dki5QEJG64QT",
  "key44": "5nVeyuCkWwQ2MUMttqWoazDfuAPsCaxpe3Vc5nxAdkPqH29Dt74qqxTSzusTvL8C75j8kXPyiVtVWwR3YCRuf3Qb",
  "key45": "Aww8M6RspBcWonZmz7bVSTuqDnU4No3R6z3UxRWYeCdoFBXc29Aq4bczqJyCdR6kzSRRNRgYrysXZZwbbM37o5S",
  "key46": "2K42FyzvZ2sDaMVmsr4iHXUm1svJAoj2KWGzWyreTujWbm2gVJhE3JTgFR2qJR9dBoUmSYHp3HDqaLNJhEGA7r9"
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
