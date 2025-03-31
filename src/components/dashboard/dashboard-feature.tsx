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
    "293mFGYBSkFoRWbwNrAUZzRTnYGYekNsHbnfotN5m1FuVDPgghWNpwUAH9A3x4g5kkUWKfqQKpPcy1rQj3Jt52Xa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CxXZ9pS2xtV7jaDNQmo2xNiMHkkXBE14oqCi5r7HPnTFSzHzwntKRLY2pEFHzQNWESfmoSm2ifZDC8XWxsYTCK5",
  "key1": "2vHiDnnFHHjXHCMMkA8JsDujLYbLub6Dx1Ahfd4in1Rorfk97mVKp8fBsUt2bsC2AZCJKPwaqBJYQ5zf8P9fhqQw",
  "key2": "46L3rN9vNcYC2mD1TdvwWksj5cuJqJbPqoc7hKsEmEgSNhPSmWQ9iMajVDmbXQ6kFmM1gPSen33gthU5gApH3Vz4",
  "key3": "2GN28DYHrtvs45yYJXKcK95wJyru8MW5GDKdck9gRKGoo4roTmLkrbiJK9ZvHhr6jaPbLqdCt7sjuY4VTaYYb47A",
  "key4": "3JFbRnPQQShT6Ku1zqVvPTwjknvhH8Y4zDQ2DrJ5hXG61c9KkHSiWBrqSAgQR6sSBiQot2DAoB8NtiLXknix4QyE",
  "key5": "2JNVXSAk7iD46hj2o5VyL89zJ4isjoJV3JPLMAtidbBmis72ohXS4Jj6Rt9j4KdaEy9D3S74YyQ5JgBbCGMyjd95",
  "key6": "264wJvKeyoKwvxNksdMpt49tgk9oPEfvrBGQ4hdT1GPAZyXVeQSTzBN9gtvxMhEKDNvknsyXEYScBnMR6cySA2T9",
  "key7": "3nQrBubXVyBEHoi5JMmJ5hBZaLrswHSDET2psUBiJwg2ELDuXPzgdvqJwUXzPMgmnCaZ9y7ZENHR1p9JByqeS6qb",
  "key8": "FLum3vNrhDYE6BdmiHJTrsfsnXupGS1ZssZo758JDwPEVP76xa4DQvMfqqfKUzjtAWhY7GF7p23H7PhHRrPS4mx",
  "key9": "2HAD16PS1sXVjQQbuHqtL6SUPKJGMEwbJUnPmtxB6TtFL6YUp6ZKkcYjEegCXgGGHt7z3E6XgvpzmL5GdYFQWcNo",
  "key10": "567faD9bmHPGbWV7bjVKWxPvfHsWA9vM7h6LgARCM4WRJP2qc9uLTwcZD29QFPt6nvjfqGgViSZwZRqajRRuL983",
  "key11": "34FRotR4z581yadhPTvfVgqr3sh8BEgunbM9HMCaNe4Jvan8se4hi9jStbYcse2wW2KtFW7rZFdK5v7ovz2FX9K9",
  "key12": "5MGBHUTTpp6N3wUSdK9tG5Z9SzNuomkzvFbSCzu65toeoKYhqKFimg24rNmHaeQ88EZAiTzizP5LtfVdFik12nqk",
  "key13": "4qEbNp3LWWqArc1H5v5BHiSnpvYwTYk2RpVweesBcvP28TzHY62iQ7BP4zp1fLA1dJei15o3bnyvoD88CkuLoXLS",
  "key14": "2zvScYnDfM87SyYcwr74pAxZR6S6L2bvW3xcsXLxRLmPFBtXxBF38X7fQbyuPJBxeHifJEEwBfJyRvScSM8XHAAB",
  "key15": "31Ln3X8bsZ1TxgsvdkJPebKXF27j3SpSbWR4HH3nynxN6NpBohaqF26t1u78XjgKck2ZbyDAqWtRjANSMybm7yRp",
  "key16": "2Yk54eSXKe6BVsRnGCQPdV2k4j9PDGL1eR1EUvzLA88iigoohLmAfZErHURUQ6n8gtzuptkLhZQYEyiDPHzDRCTq",
  "key17": "3PsbCPdpijv96XsRPW3AEz54XK6BkTAecb8JkEQC4ubgWTzkZo4CqQEyacxSmnNUbCc2VoYUJ85K6z5SxHKifd1",
  "key18": "4sVeXvoEJrUgSjgkKKeVqW6D3oo6pd7urAsVR9VKFw2Fv83mNRuW4qkm4U6TpkHnpmaWrSKJ6KXXk3c2dq9dKf6h",
  "key19": "5kXTGCoJZFBNy33eWm4Yez4ES41jv42xzLUsDfMkVsKUaSE9tjgGCrXLA6foQ7ntLQChYfsVyFF7xrJ5riZpwge",
  "key20": "4kigtBgzWW5pcm2AtsLpsJvDuCu8WGWSfnhCWRvETWEC3D2f3vFV2e2PsCgQvKyJm4mZpEaU9X4w8R3HJoKBWqrT",
  "key21": "4knYRCWEfRvXvYbTYFWPvL5V6SqhjGhvALwztC7BTzs4gfH4QgDyGdzZCR5TwmaJssGjsG8tjX8wJPBMB7zxf6ia",
  "key22": "54GUxB5AZSYYWTssZhis33oa531jZVRNRgsBdtmSZUT7pnHjCc6idhrTHxD8V6vYb8BXYmWgLKuhkPHWfeVjArg8",
  "key23": "o2Tsi9dTvWUuXu4Sg6GBYVcMsMz9dGQPLmdwotKTGonqiJ6QWNpW7q5KWmxRqp5dn7nGzCcW9kbyN3rgbxXrfZo",
  "key24": "4HCJcKC6WJccm5rm7DLepkfBhSk2PQh1Z83N9BsEVgbtNGtg4moEvP7yR6776W9pQi3cEwqeUoGh5gZ1F69DMHCx",
  "key25": "FneVFpcYVjUuedaXHMPKVqiio6nANkBc89UTbe8TmBABmMd4vfWYJFid1K3g33feDMe41ZaXJfgvZ2zvZ2CrGqP",
  "key26": "4iEM2gKQdwcbrPq5NxQPzbPB8kdMQPsFG6BEYMFAtybmA7LZR25dY1eNb4rFkV5TWb9LrjqMnTcJcF1YDt5B277h",
  "key27": "3qPmq7SiKXs9h3ZiAHQvE6RUPK52MmmC69WdMQNB6ZCkmre5mw2eJrbixnZxD2eCKuqyiojdF5E3xkmdojX8t138",
  "key28": "3oMs2ZcTywzKitEwq5vxphxhMJjEVeAXkmMT1ynUrPPuXbgghq6gpKwxWUJHtrZrqxPGkLatzh6kdBtop9iB5HX8",
  "key29": "2DcNMXoq1neWSPQeiTztainp2Z5qqSy74m8EKzFMzFf3Ew6Nb5uXtHvas4P11GJQ4pWbjpPpzKCpPLP8WAEtju2V",
  "key30": "tpniFMkqHwPukaPUwQrRkhUomVgnWk7CZHBPwvzsMLQJVfnQT8jxDbRfDgGD6uV5ZMRySE45zbSEjPyb7pnpKAP",
  "key31": "iGUEkGo18v6WHQR7ZFPJJSLYDfPTPwn5jJ9MfijT4tTAYWBUBQQhJS2DVvZbJR4XCTWTSRkiGJvme9r759U4B6n",
  "key32": "5vL7fyTicYMPF5d97F8KujVfHk5GNHREExzowHmKVqJXHNtg5dAQqjEX5hn4ZC4aBiZN6HGJ4UnSmS9bBVBWR1wc",
  "key33": "2BZnRm9jKwt3Agg7CmefqFcSdu3zin2gzWDFrCHgpjBJiSFH89dyJgc7ncU87eKTgMjNKgaRBwEYP6D8viKEtqtb",
  "key34": "phT8BcGsz46bXGBXRC8UUZHtUWXc1qit3y89qHhgGrAkwQsxFWL8mdqTZbAxDcj6vunnrQiMHz8Ef4xzLw2TiVe",
  "key35": "2Qws6jGCnzPoMXDH6cijGjwWMBcvT88pot5EDinPmzdrZ1H6U67DG86NY8HMLmqfBFB9oEhvXV3ju9UcGnYBmXjg",
  "key36": "333xxYRCnUbrMEjjJF51UEAsrEt9bne5dWiTtotjxEK7e2y4ZvrpxRJMRfuuDkbgKoGJoUgeZDz5byTitoR6HTm",
  "key37": "5wMxdQy9zC9QC5dcUjrGhVt5zqiSBx1nyXBYdtoDpAX5MCCy8kcvMsdFQWPG35N6A7A4A24F1yYE7b17yWhAzSBz",
  "key38": "4QYQSgZ8esuPnNDyvJDQ9kpLicvvD68Bew6KLtVqYHvmVhGjTYDVLHPN7E7PMdaDUyJiiQUXgzyfFeRxTR5rj63q",
  "key39": "2VGfDGSoM4YRMiyCkhodTiJXnUsxgERiaSQQEM6YNnJZmRaHor5oyDmDLjCp5bMr2kHhRijAFjDXkhui9AxYzDAs",
  "key40": "4w2PQo34YiK6o5QGLZSuXbDcqjxV7YU2PhBRja2Hb7JZ1P13N4UguENn5wSH1xSqRfgvokbmCoNeh7oXsNmvxAPe",
  "key41": "3PXSWUnzE5QuPdG2tKiHHDRoYsLZjc4MBim1uPmQzg9Xegcao8Cf5bxApehJ3yhHuQPC9AJuHKPTsauXequZwWiq",
  "key42": "2hCA6Fn55cFTHJ8awkz6TB2t1FENiuKZZTWKffSSP8FBgFDnsw5ssmbc3fgpEm475nhGeRLyKZCQMuakNtB6BML1",
  "key43": "3QuuvXWr3XfwLVF5W2ccvoVPo3KG7knNXNBNkxMAtR9jNtefSmatzhECWcGzEcQ5U6ir5ougEmLDMCiNorAA7TF2",
  "key44": "1fmxdYGGQer2jdi2KEEDnZCrmWN8CcjPbkQZyBB3hCLbiDPmXg81WBKFsuUzoy589ZQaAAsmuSw6f1t8rPDAd8u",
  "key45": "3zNJK9mkgS6Q4auQFh943tPSA25gefffyCBmwtwbgvfzVdu1oyxemcb8pQ1wi56KQ2NN6THbpdUXBD8VbuVGpJvN",
  "key46": "2MY2qDzn14MAMKPr4uKKBKzjvysdVpzEa8YqZKa5ZrynAqqBpPo8LqQyNuuauqdipzYzQ73YrUyAsSgPbEj6sWyU",
  "key47": "512aMT6XmiEv1dwyACc6Y5waEEj3j4PAxxEypgUWbXZp1FThq7ZLm1J7LVxSTtTywdKgw2Lr3Xut3uvQXy24FdQk"
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
