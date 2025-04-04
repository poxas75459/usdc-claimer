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
    "3Jy96WSuYkLTqAZxiwYUSD32aXoRczGEj53CsfARqfTy3d3XajwC9bryZgvB8B5LZ85zb7x5bQYsUemUxBWx584A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31kzbC7xGcUd3rt1m1bKtx3Kx1hheVHrvR3sAcejdQ6C5yiGHdMmcQfoq73oFthrHLvXfa4hp1DsDKWAJSxFEh2H",
  "key1": "2bUWVsGHENjWYJR5JSFAUS8jttGneh9fbUKuHFo7ZfBNoqsytq3zePuE8TD2cY89DAXQ9j8XbLkvxCUVCMZHYBzo",
  "key2": "34q91NHxtqCdFvqxwdhB6YUJedNeFNwno3gLDpm3W6YfJ7qNYLAJkxu893QYvPZVp4UmXNNbqmRWPr5UuhyBarJ7",
  "key3": "5utqZXCZhxCCnZxvJDSNY55AZdKVUFYhnLhNZRv8CW9dgxq58sHjrTjAqz1eHY6pn1erUKAHoZXyrCyjaWyZDgc6",
  "key4": "si547u9r9RpEdzrT9Rx2uHFhdC4bXYTsHz74CfKdZkiQpbzAGQ6wqT8Ty9HpL5SkFbBEy11snHknDZVCkkBsnn7",
  "key5": "ki8jE9mWYFQqgGUBt8xWJynSB33ej5BBMreVsNtzYb5hwzUXF4cjRSoPWT39EypQqQhp9WC4beJLjC6Ac8sPKRe",
  "key6": "5bEH2Wq1yBkA1F2arLCVqhAP78ENLaYpLu2xnBrAR6NgR6FvfbTL5E11PZfLnfrGF3YNPGv6YJ5jQ23j2Kxq5Drh",
  "key7": "4kg6qabwYaHAxRdLLUZzty5Gm4PeqQsBiu15VTPKir4C1RhZEu46L6Nkfz8s35uBcn8EnZYCFQdUv864MerKpjGw",
  "key8": "4YHoXnMgyDut11uWhu5HrsNhkK9N6VQJ4spgSpNmypfRhmKsp359EK6V7ccDx4QS7uzRKwScUemChUrNZRZpvJaJ",
  "key9": "3MndDaPhnqJpR9e2cMpKt8zs8wGveLtHfw61juUjDPkxaw7AsVDPwWjhs4C919Cg31RUJ39EeJwCUsuPCMNsXUzH",
  "key10": "3Xg4DzXmoNWgy32EDe151iqnr9YmX6mnUdebY83aqaeGi5WcRHDv5GpjTdcDyzFR6yTjtP2P9NKXaYA9yPjshxk9",
  "key11": "WDmEjbtYA6VnfPLyzwCP2bVftkUGrq6tqBjV2TshQvRcZs7YALVxJM8Gbq1bi6ifz9RZkegZZdUa7GXf4jrLnJ4",
  "key12": "CiNrxk3fWoBxzRDk7hgSwJb9kF9c4av4CN8sDEbGkqKUrotVuuBt5KxeS1tgpnDsEwjfdHR5tLPDc5mKWjFyjDN",
  "key13": "4CCXY6VsQpcw1Rma26rdyGpSTzoctt4gXNCbMMRu5AuubYBdCnXwHHyUUugGfstTB62Vrmky7XNspqgk2wPcg3VB",
  "key14": "423JuCZcjUrBobLoiL86sif4Hh9BCb7YBP4FdDUka8FS3xYQSVffpAwq5nhnbsmWa8LhGMUyjRoDX4qtjFD5ghSN",
  "key15": "2iTMaw5NoegCQ8yTtU3fdsNM5VWDN2usnJBz1Ss8Y586tTR7ANyRS938rE6dtEQVJNp5TDk4Pd8c9Rrb5RHsnfos",
  "key16": "utq8WZzKFws3hm4k1YDia62KPgY4WmewEcyxSUwPs6CeG4hpAD8kgUbc1cmXN5HCoxnyMzYAk196JZTKxWMP27G",
  "key17": "4RSz9Sr3QU3kxHTsYJbo9AXAybRQr32PsGyKvwhfGcDZi3iaFrsGwVfTPL968T42JSsuBFnhTKnX4cQ66UFocje",
  "key18": "5v3NZ39bS5GXb1Lbqmx7oMCVi6Y24efguztYJ3r7WHrf6QjQ9VpiYvmeBqNHYUhxDFDdQ3FX99MUoVqNq3VE5gnE",
  "key19": "4M3HEQ4maUFXcVCLuo2WxGyFbiFrqaxxdxrdbfsSm4TjzAcoxAACcbXjWo8v4QsJT3pAR4DTGSQphnSN1pcA1kjh",
  "key20": "2wa5SicjApW3YxYnp9cFcYkUZi4MHGryrtLLVAKNCQUhW8bKAcGVbPveqvSr7dki9WGVtrrU4esQKnspTpPKquDw",
  "key21": "5MtTcS2k7Qk3yJfXRPsqdMJtxCy1z9MVFKbGCwYAKtTheoptTys3fyVno5AZUZGiCbW3gPQxweEz24tXtgCBD2uJ",
  "key22": "sEhwAuE1MR2sS5XLkXBC82UVuWQtnpzpZS5wd3sdwAXpN3bjUBmuDWm6PzgWxFMDJVfErT2ezXxb8iU2V8NsUHz",
  "key23": "5aSVVDZwn496PhwzCygemmdc2WgnhdR6RPBejWgFBYRKTddueRyt8rgdGCf9iCnQKe5M8QgoHeUbbTHZfdwhDcKb",
  "key24": "2DXZv5DuwJjj1aCmaA3TFW1ymP8zN2GGEAqv2C599T9majwLFNvukVuUGnwmErASYJBVWj5k6Ew1nFL1Y96Lt7Go",
  "key25": "3FFJwvWT1juMpJXotsNMhHJoDseYbFFFtT997zx1mq77nqRWmpsug323M3egSPi3CSRFKdbU5iKfPhs46E2zCJ3N",
  "key26": "kydMLePKR3BuKZsvg6BepiTmwHg4mq6QEE2Mj27Yh1Ukq5aWWNBSjNEJVvtzvKjiCacAUXJeUycemATiyfkc8Ze",
  "key27": "2zDMfgHQb9tkj7FmFVYmCsuLEozeeYjakgNqzYDGkQpMXVi6zwVGm8GY9Bar1P5Ddm7yqAQufoaq3UzaUSXc2Mk9",
  "key28": "4fcwpaQQBDVBAmk9ipoTXektH3vdswvJzd5qaNb3HnrQSvTiR3EmNMSSYgGtgJFq6ALmq2nTriiPcLULRRKgit1W",
  "key29": "4pbDX4FDF7aH2FURx7TCLpkB8KNrk6otEYrERuy1RkiiFR8hSciTSUD8Zo8oGZ1x28YnuNwVhsRVjAYwjUZxYMpm",
  "key30": "5kXrs2YirqiozMzjQKJ6MiK2jVdGmQA4FF2PhC8PminJPFttxfXTJRX2op1rj3xN9qK7uZWmx6FCRLj3ReiZSnVq",
  "key31": "2fY2HabhLGLyN5k9wnbRmmzAaffWDXCRLQdZuePzZFEBi6HgLK4A8qKKGxQpLJo1c1A2WVkYeMRiR3X9i8ef9FCj",
  "key32": "5CY2Y4HszzDAjCeafYaixEAXeXp1T1nkEXjGoJsCvDSAocHMT4drGx3T1xX4WUUrAqf7QWqLjyAt7BoRkqVdmiQ8",
  "key33": "36vtKaXAd38dMsTD3jwnUPsFvvGbyj9piSDWWcH74T5z2hsUpHU9ugTNU4JRgpcmd9dVQ5VAZv4seLYbFwgWJbFT",
  "key34": "53esdNHzKHMw5G4rE9AJDX4wP2n8im2AiPEr11nJ5dJuEs1cMi4VWdRP9L6eFBZg6KykSAx35kZeiGxj7hkLZ94S",
  "key35": "3xMBUC5y8jEtJVBz7oYdnTvrLua45L99DbjYm6sQd7Ai3Nv2Kzq6vkKgqHaDpgKZ7WqHuS2ggk2JSgeLft1sCPJv",
  "key36": "3E2ZuUWVAAbEcgPc6mZEhFHSYZUpYcmAodHGr5xTvQTJsu53LaEdjvEJm72wu3vgrRysTncStiBWBMKHwjP3eXNu",
  "key37": "2M2PwKkjD22E9KieJkNTrykpRGn9j9a2jvEzp9PEwRk5JFzcQ1LBhe7VXbdHZeEJgeeBsYSdF46AkK5kmGRyZV2S",
  "key38": "3gDYrRxNtgKRBZx5gWiVyZsV8V6fcZpitC2uMtwxg2ZY4a8fDMc4ZRUHhs1LQxECHZvN4sRGj9M2KzNRDwNydCmV",
  "key39": "CiZvEFQJ8EP76dMLgWFRei89XEu2dcPQmStDstAA9wi7pSnDBV6RhEoMKPSJvKQvvUn85YaMfbS2Q2K19Nqvskh",
  "key40": "61oatYJeGdTCKsb6Vj7iayzw2sCtGgRMsomQo7Q7JSse5pj9RAQaSY6Eda7KL8iJJ75N3TPFFfuo5wuVrcqpG11r",
  "key41": "4xSWeZVdBWBomfMWHMEK8oxJ3BwUcGqeAjDGd3XWZhVeFk6AiGSQkcxj8QSqYBF1SkUf6CpZw432KkJFKxsB4oW8",
  "key42": "5SxCzH6RwDoSqqWyYKxuuYdTMwvn4DRDGHCsaGeeTdYXaLqf6BXqhxPTbvarT81oT13NmiJeZT5EjRVB2Yo3LyzY",
  "key43": "26wxeeNiboEitqqeMkEHPfZq5hCcFoBSuJaFMuKjaXAm4vxwwiN8kjjM3ttzZ19sYBKWp9eEpCh75WgqNMRtsHDF",
  "key44": "3kcNqVEiNnJEdxpR55qbEdHFt9FUrrrYHK9X8rWwT4ZaDoPZGsPrYToAAur5qD9kpA2bhnDW6kbGLfuZTvAUt45",
  "key45": "KSujK9e4vuwgg7VnUxYLRJW9XEtCiV98Fb637Pest2LwRsVcEgvz1wxtR4MgaWXJF3qhBNRMADwQBBA4M4Jjq2x",
  "key46": "5i55SL7KKdqJuxmdXiVjEdPbC3eLoKBEyVgpQbuiejeMVP4t7oQBFZJYd39gxYX4L2kfZWKd6aVztEnsWhtM2Nci",
  "key47": "5yqQSJ7cb4BjZq6XuHHRt6guYzA1ajX5H6Brn39Ti5wDK8LUmMp3NXvCMLf23WhXJ19mP9zxkAh4NqThSuskPTxV"
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
