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
    "4n7KZHY6hdQVeY9k4ktPntwfCdd3BrFrd44rxZqcmEiRzxJ7qA87y6PgPo6cVDYa95PR738XybA4Q6FR7ad8W2oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HTJNgXtJJEm6aYRU1BHrjJzHWWcZMjmeRdVVPdGF7xyApbKftditYgJxux7r21RSpmrRVB1N7aoj42snp9TD6jq",
  "key1": "384Hgv7dA3RB27NV8b8xxjBHUQB1JAsmwNqgudf9VGfUpBpJ5RXWKWwBypDPkaanWnLnbxstNDrmYcNuQA3CdSoB",
  "key2": "5rptjJQ9fXpCd3JQ7tsFuShEwwTzVoi5hB3GmuHARJqMUHRxCBcJ7Eop2A6hskBpv271YuRXsddvzMryFm663WB1",
  "key3": "5XkRPui6a6vsA6HzgWzbDXW4MauADq817k4Cye2CDDD4YHNA1meC6Kp6pj3yHh6LgaxULdqu6wD31RhoiCwhdRYr",
  "key4": "3NZQumpiafhQWWRg79wPUwPu78Y8AwJpnT83e5rNggAebcu8Ndzt1Lu2eyNp7s5p9rXY8RpVuFbwMV37g2sdtSi5",
  "key5": "5D29iYsMN2guALBkd3n6mCSXroxZCewUtKcv5DU4bh3cfvgVYUN8pSZvcBLFV5axEpnBKVoaHvtczwHm732q3a5P",
  "key6": "64wHZ4KzRF3YQpDvgGjFYQUUE3Bo5BANwfDKPUd2dTw3Dwtw8zdAuQTKnXmCzXUGzxGSbEzzM4mRoqYSn6g3qn91",
  "key7": "5bMUGDUq2ZdCgoWvYK6yg4DsZ1yZmoZ3ZJFuXiKhGrAgh31JbcLengn69knz5xxsxe4neMKkwCtZ3Wgn9qzpRBTe",
  "key8": "58iSrXoGipbjEqJKtz77SmbE2prPQcB3ZxyDSPQr1pHLdx5xNgxnyRVVM1i8UmwFex7deTdTYVLF49bBC3Dv8Zt",
  "key9": "25FDzmQubYtTfZs8bBfMgcHa8FSCCCz7pkmksdHMSNuKK5FfF1HUBS7s5JDsZi81eqhRh8g4Kjswfi5is3xE6oXm",
  "key10": "3nFN5gdNkq7efgwHBTAFBmXjja1bCDiEc7ivR7CAL566fDDQYbMKzJhwJ15hzivyUWcamb4J6ajbahMGD4kSpBK2",
  "key11": "mCNcwwEtmQKT2abqtbqYkYN45jkzcBYZPEYAH3LVDv1vaUN6wzFpFXPpDuB4yz3tjA9HH9FBJzSMHKBakm8SrpX",
  "key12": "o9Et5oi3eAPpvHGhSShvviQRUiY7CVoRuSP1d1Lr7WTvfXnmnjEur3BiWLEqsnt5BYM3EQ4A7Ch5iJZc5YcBQWw",
  "key13": "2vBHYF6tzo3x2vAGg4QdngAEmfMqy32fUrjHZiQHDYwmRGt7AkKRuwt1NefBDucBeQNnTMv46mjdz68wjpBd5PDV",
  "key14": "4mCjEWhF3FYAVF81ieYMXsQ1gRJxGTQBPBeYfANEir8H8Pgt1qNedriMPieGp8gURbuQU4p5ocqNgreJgbdzf37d",
  "key15": "P3Z9ZmJgJUK11N7yCwrVyN5u2GRrvKvMaiZAtcS6q2DNyMWchXqt9A7JL2ZRqhnfd5oGo1VhfC8FFniUqMfKREa",
  "key16": "2PorR2YV4mQMnZfcQMCZFPfHTYnjYBGVdaqHpj4itMEVFysXsgfwK29vQWuRc5rXz2nfuynAAiQJqNma59e9k8jr",
  "key17": "hFh9DgToKiRsTHk3RYxQTKu5HJ6VCDMXXFRoMCvyD1Kk6j6oiyvQeSe4JE2mbzbo53yqSjYgz6qL9PJWwjZ8k7K",
  "key18": "4M5mvTAAKp9uMknGhPaBxetMaFCHPYKtnsGMVTFuXkLGEHnLM8syjdHDvBajd6xphrghCMp4F6AeS9pD4MZLyMKJ",
  "key19": "5AiLJ28z7uxQBndXoFQkCRdTzBGjfg86jnc1FmFX1K4jZsHj2hkrPsQEhaGFBBhBKQDLfUb1NVQcAXA1dbyRf2nk",
  "key20": "y1JTEXrW8qaBtZ3s8gjycQVSj8HR8UYDQQw3sWyHcHk8H8PmLvQi6h1E8TukV7R6r8MwLhxrnVBnX1XdfAFkz2w",
  "key21": "5wHo5QiDhQRGdkwnsQYGRfzg93iHYZShJFSkfSKRPw7ng2YnPHfa2igmdxie4dx6J5eGhcSySVtReT65sUw8SBHZ",
  "key22": "5rSfFdDq1uoFjNNfCAaqeED3PD2m4YUiCDZAxJxYnxZckYgsQszgoyjXfiwRxZG57jUz8z4xwv4Vv3TgabRoUFri",
  "key23": "64qAMm4h8d33XurXTTsZ6JGtGJV6BDby2FLk7jabNGAKozMYY2qeTwZ9kfkGx3pPSyVy9ZEGZZiGicd2ij4CuZdA",
  "key24": "4AjzZphbybTYkVGn5wF1rA29mScfcWJhj7q9rZnFasHQdhGLPgvNcgc8H83rYBgGnctTLr6huTVNj7qEXK7RL2ok",
  "key25": "aFgoPrwAzjkdKEeE3qAYgXcYZTSRdrwo3rSSvUB9wGPF3ge7c8LyAzYfsyBjHbSw96LV6iPP5nz8PJj7BMGArMJ",
  "key26": "7nmGQPUtG5CcJwZd2J4qA9MA2qjiZ8ssSoRhGmU7EvjWA8mWWWjmf4xSskcXirDMX2fDZnN3mpGxs64StTp9ZN4",
  "key27": "4PRr8KWrB954zMcyxazHiajnbPyngDrQ8nW9RgeKEsb5aqYyWNdRgGY7c5kH9pNypxsv9geak7e6vMCsyzEqmHRs",
  "key28": "2ruoxsM7jUQnDorV7PuxJWuqQEw4zkscrsnoa8Z5XuUtVvRmwdP2HRktLokLzWJ7bA7d3SAjygDW3V2pZFYBCCZf",
  "key29": "48Ew25mEHnR3zGumhLG8BUSfrnrEeT4WwnTPopEHCMyb4n7yrMty8wuYVPueYauULjA4osSwCqFpKNgBCmCFpZkC",
  "key30": "3XZg6eeJSBWtGJYGHQry5EBCEhpvrin2c69jeSnpaBWSQRXR5fBuxymz8C6WFNUhSi2S8b6EffqKNKjT8nfqJKLg",
  "key31": "4rykJBi4yZTdnQNkZadHat23bJvPCmdnhjeLNaru8PTu3SVFd17QxAdvdaaKVgbZqbxbD1dyWtCdXV5cT9x6jq5d",
  "key32": "3RWCGsajRXb4SSDCdadhYG9JJeQR2Ehdo5waqUX5bT3VXHgZ11zUtmW3vZtpwi19MRgn8GREEzJdE1rGipTsnTNh",
  "key33": "66rMA32iXwRz4aUJVbSD38UVNDivuNZ9GcLKNa6TVwr6QZU5F9pKbCh9FLhGbbok8nyBmc8Nc8Tu4ZBCaFFUedgN",
  "key34": "4jcvUGT2r7VDryNqTLigF49x9RZ5gYUdPCwKi5WybDbxbyAHjs28JErsngRJ3Vy5gA9vA5LLBFeZtSmEbnavMbVP",
  "key35": "4tkdaudSaVyJHMgviZ5mTZi5N2KVpXPCgUHDUEtoDMSA2HD7kzu7P1mMtbyGg1XGG2QvQ7QvttoBz95TSfo6kBEk",
  "key36": "5A7Xc8vx8iaRRAn4ELnjhMFXFETx5iMuh8a5YuDkCSBdXcuA2X8t8Tz4xDA1d1auiQz9BehKsnSpHiT8SxodbanR",
  "key37": "2zbZxgkRHu4v2RQyhX22ZTHq6ZC3tnAuvvYkPXGHz1mVXkhuVkcKaTc5UPJUdoRQqisV1NTMhWCBZET6f1PYfmkW",
  "key38": "47hR3VhjYMTWbw6dLSbUnc3BoQpv8jDJY8Yq55my3oWTTVkKiXRR5bu9FEKiqikaWHo7EsrkZtVsRYdzM6UrN5dS",
  "key39": "3HLP2QeevD1C72pcHDLdBg38XDXxrpvsfFAZbuYnymaks9kcyj58ECFv3mCMqTMUbuBbaZLotbsVPyPmritgJAXR",
  "key40": "2AibjGwdUsihq4UVNmgkJqekUrfsyL6u7zgg8W6fhQXWRBhzGWzBvTQbtjVThoTgzn1AYGEKVNAwnU7oGgPp4nXw",
  "key41": "5vQygkH9n2Gq3ajHhJp33SAjqGW5gbYi97SRfiv4DzsuBk232NnVyEpUBVb12z55vWWyApLuPpQtygLdoKsPKids",
  "key42": "XKqa7RoA6drx9R3QepvqpPC5P8uS96iRstbxgkrzggAq7prKxGQLXBa7KPVwt6wE49ZCyVPugJygN38brNtKVLN",
  "key43": "5GvPL7EARejAHG8MXpF6VTZ66g1YzVGPbsuiRfCekLK2cKggLRqAWEt4q7qhJx7dYRma3fXG73cxu75WUgoTuByG",
  "key44": "2ubR8DxLZDA74Rwz76gnB4RgAkboPVKw1G76io879TijxyQ251b6KHpntgvaRyJkeMiDDWug3icWLR7PCfboYaJz",
  "key45": "4UXwDQ8QeYsb6hyFygD1MM4jcvYtNB9qNehoRZkNsvnSVJFChEbueYLS4VRH51fWz38DtQVzHJrpmmptowsWQ6a9",
  "key46": "2Y1JCUhaS1MtGba882gCQDagyR67hWqMXX45eLZBWTUFiPNaEicX97QWkodeGydraDQdmyfWLmXhaBusrBzK9GuK"
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
