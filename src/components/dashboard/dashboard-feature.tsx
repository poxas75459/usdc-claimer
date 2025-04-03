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
    "2CrM7bxggzwvFV8MN6jAFYKpMh4R7ubV8BzCu9LgTgNdpyGs2D1z44VoNy3pu467exH1zJSfdK1K5pSU5pPTr6EV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q48tZp8ZH2iQn1jkJ7Exv3Vx66N2KSYbUq5vhRL3rmDsvynJQ1iukvXJ9Jc31hzDdrbaFNefwLQXQwKWx7hMAtE",
  "key1": "41T73Jqdyt3qeD3pBSjWw4nCKkHX6oPtG4gWdFFkAsKyBdVJe3FHkKFxJdrMYrrVKKJ8RdrdvEjdaYZrrP3KccTZ",
  "key2": "2FAEJhg6KL8F6e6WMMZhQdXtRC7NJboxKvryDkiaAkV5ucGwHbdQTQ3q9Us5Anit4Mnm1hXUuFxCQwL6MuqwQnwn",
  "key3": "ChE6Rj9AtBvvYXa6JyXCGKZQM8fPbRKqGCcXyiENZgW3K15Zsnu9hdayzX3k1ELtme9DbeKCKrZmSbAt9QLyXQQ",
  "key4": "CD7wfxat2MfNfiWBYxpDJ7a4PPe4Du72SjksbMyrXZ4TUaYmv3qXvu3vmwn2hoitKTDfKxDdVTbaF8c9R66VA8r",
  "key5": "5GsGCc63BgqLU6h2jGy8gk7EjYN5DYzuNsgrduVYf9V6zNSNgbdyCHHNy1W4RHmjqzH1M9wJ4zu9vuUz2feCMj2p",
  "key6": "51wXtZ6mbHZugXjgTkfdMUXf5N3q7ir4KPkegBwnARR2EUeKxHge89G2P4MxoZcjdT6oGtz6xCcXYCXiw8MfJwYY",
  "key7": "4NohP977pfyHVoMgwHVwTJ13ELE4KoTp9XZFF2EZEuaHoQoWs5Q3pRhUDPQ8tqzHiJ5ykhujWUV12jyunWA1jLiw",
  "key8": "5sz4ac3SyjVm61pXtkjwQZqkEJxhLSszEJJj4HqgMiBJrLFzkSQterbazh7vo2MAjehGSsMFGxpW7JUCXyM1NSC5",
  "key9": "VKAo5G4NC7FjGmagntih3CQEa6LbHw4inF6DXEG3TNKLbuWVdWxy3qQNhRpLCwDTUuP6YWQ9CcK8pGUSRQKv8fv",
  "key10": "55reiVdA9JeUAbZvzKPmfVeYAotjvJ272d4a5i3PvWy3sYbNACEUimTEBLx4Y2R7ZZNLitCvLfF8XiVzQmcE85RD",
  "key11": "gh8Qwzjz4jF5YWaQ2pRM7Ey4vVTrZjUZWAVzGo5JcnjiKxx5RHpQ5hGaAVHT36GMzpKTBLtVb3ByktWyoQabuud",
  "key12": "iTuZDraXcQ7Fui8aSXDDNDBUpWx4YT4GxhYzzCJDpYy3tCJx8HJqNkovaCsvHLTqoHY26ycXwCY9eGwEhMXgtrs",
  "key13": "3tX5GitBHgvEpBwaswtkCXBSCaLrEZkiGKzY6mctLFHtdkbfWf9Zi11V3MGoPE3KsQ5R5atJj3dLquUsnz65qFEe",
  "key14": "aaqZgDew7nokoGqBzn7nFvxj6j8JfcvNcNk8E7Abp3qA6QAZq8EohWiHGEWpDb114cfABqWfj8gQ9cQAVz51MAE",
  "key15": "35VSr1aDEw3YZYZqS9puTDfyoW4ufktYuD5ESbNUVUg1J2pKz3Ja1T3FzjQ4ikuENprSmXhMxTr9ZsxWKaKJ4ERb",
  "key16": "5M3dCq4eWbLLiUbiAJmVfr1nue3fHcJ3mfvDrFr8SpebkZYzSVPaXSc1HVqhUaZBVwDSoMZH1qHWaV8T51TwGisP",
  "key17": "VPUs5P8Bn6LGW1NMBawC4enP1RnabHxSVUDcy7sQt27PAMqHLbAi9gdV11DSkN7MnTsSWCCNVVApja3UKJAUS6m",
  "key18": "26g6uTAKUtFwzo9PU3vPmLrG5WsyWtsQFSPEByzfuoSktebNg72pyeiN7wykywToW5qX8gYAss4UMhcmfva6YmEN",
  "key19": "vMV7Ve4VaQE93WPcxwgkXw527E8pX58nbhvLXSZNRDVaNxegq8C6urqmqgv5EgFMvxQLUaPbXobcfjJ2pEdwZhm",
  "key20": "2oedZAegiPADvM53Tkpp8NNJyJ3YtA4kdeK7U9y54RDtv4BEoDhEMhfG8iKStxrFv8xiVZkkF8SnYHXzfp1SDryB",
  "key21": "PL9UrDwCuWN92PtcXUbiHSHEGAyJkEPkPv6uQAbB3WuS6JRjpY3BHR1Ldzhvc35mkoZK3H2MqJ7g8EuGQZiY6Q4",
  "key22": "2BzQu5HDpjBTjy3tDNb5AEmZM4tYqrf3kenbGTSh3KGadqkHb3c3ZoUVeVVeJbhZSfN8HSSJaVK7pShpMCighTS3",
  "key23": "3e58WvDwXJv1undtVUHQ1vaYgBmU6tQtQTPY5qenKio5Pm6aBpmWmNPTc5BqQBN42orPjXy3cfHvxPrEfZsHj5Xv",
  "key24": "2hd5FXJ3axd3AoeUft5ouHSLm5iKqsYXNgutqtjqdrJSNLkoEzey7XebNGNrakx9kedozNgGNYWqHK8ZYVXtPXEH",
  "key25": "4p9ZaEQ3ov4xoj6UPk3sEoejNQNYgesuAyXqC54tAWGFEW384yfXN1y4qKdpigKcLg8kumojDrtQkhoY61sMmWTp",
  "key26": "44TeHFFJWbD5UzrD8Fvfmf6NzapgqmHDDSkzShcq2ZSkHH8RJ5nB5WKymzbfJvoCwjTpALgS79CcfA39tcBYs2wL",
  "key27": "5Jie8bwwrEei1oErET6eiDkbxhhnJLAdXzuKkxUCj2gXodeP6poqeKgwJNEGdQbKMZcrCBa7ErvgN4gvWePrAoLu",
  "key28": "4BRTtswyLyBYCJztpaHv4hBRUf2Ra5zeoWtEwWuKmcEgs6Dx3ba6kRxWLT8E9p5zueBG4uA2DNeSe6wLdqU2ourh",
  "key29": "4BS48AhCNjUZhUdtU6zqucTpgXN3rWJoU7E5HUjrRvn132NrBPKUuztXAxNsPVrmXXhzvofkZesWhfjtrdcvXfCA",
  "key30": "5EooUV13eWqpjKjE38NEEm4HmUGiZ9FiY7nxYbouGUujBs74DKbPq8Y5QaS7uDLDE4yyKqvfTpEsCXrG5UwmK764",
  "key31": "3UT7dSahTD8YkAR3SrLED1Kbguy43aD6iJMLrTasp1nArsizfJ24S6d9gnFgLsLPUrQpky3vuyKB6hamoPdpV593",
  "key32": "QAM71zc11Fkhgd3TFdXbDWPSup9EwADCFrTytdWYCG7CTw1K6FTeVSiq6RMeR7JzR2pgqhaErK7pA27kMuoHeiB",
  "key33": "WVDLrfxKAywSbU4EWr13EfTuNasd9yFXjxKQbXn5XN1rChGjemjfQuzoV4dCKK7PnYcEKhn5FZeHhQAsSKHTsPD",
  "key34": "4RxxXqyWWbzrDHFM7fyt45sRnHz2NRYFYCcNhbzLQr6RjopSaE2gAWHSwuJ2v8JmyrX5m3FJZ2SZJvD7SpQYqEMs",
  "key35": "4qXGeuksk2YkQ2QPNbsKycDxP9HiCgwMcPzgiuZw5oHUxwebBNzDMTRki1zvtNwxqS79hvycfohYi77dNEfhYSJe",
  "key36": "UK6xqYNynESyKD7j88Sei5NZ7Yyz1MuqH4KAK4JWgpJnb5vTZGeZnuzMp1SDiNjP4igHpvd77s1k534igUdqXUu",
  "key37": "4KQR2UtTTEPyhQep9xebaFMU3vMoDXWyDUqfPDN23TNyEzm39cAwdLJWV8mc4NwfcF6YMC5edjZd7fspYzrZU6W3",
  "key38": "4hUMZGYwGYMT2iDWfE2mio4w5pyVNagbbg8Rx5X2uTXXEZFbnci2Mex33DubebnKGv4hM1HtttDocV8r1pND8hVa",
  "key39": "NAhNoo1ctLC8feqJNgT2k1RpMoFdqBTM29otVE3bgGfA3hWmRQmyben8ggmjDeFkqGvF5Bpw2a5Ppd6572DaLsD",
  "key40": "2B9R2dzZDL79jz5oUkpE25S6cF6WM4rNHNWgJwHLzNb6bPeHKpZasWQZtAtVhmzLy2eVpWyxA34XnsjoY3TpksNy",
  "key41": "5QeXdU3nZTvRuqA1c7R7RrdwPCZuvoZiYHEmFJvAZeACMBYyghD88sYZJRd8P6bMQez2MQHctSK6XSgGL5k238P4",
  "key42": "4jAqaFa147A6LTxByCcj9uZ9wt5VunZZwWVjSGfe2QiZK4bzuwASXHR3YxyqLhVvA3FC5ZzuKG8UETDgMjQGfiRd",
  "key43": "3vkdb6ZpuA8iWJK7YWgdBUoANEbwCg4YRSdViTjMmzP5fR8SNas9Md7iPBw59ne6xXgZSAtBCeSsui5GaeqH265h",
  "key44": "586mrdTUvrbhkpGn3TsUbdUJknViTnLr5DzqimmMEqn8ySqscg3G7C5C2pNmWjGSPZMneGF2iCNRxbg4Q9Q6Dgy4",
  "key45": "2Gv1dcUPKMJ3pPF7aWssXUAnxHEBPPXcs2tQE85vyBvP61cZz2eDZnNKazut2wt6PN8ZLFVYQrE1Li7yLgHWXuFG",
  "key46": "3Qi7sGuLRyAPApQZH7YxyH66WXeWkXZ9YYw6zUnoSsyc3wT74tNXFjepKyW5eN34issEAkYEvanRCwmnCWfiNgiq",
  "key47": "AKqJwVBv3gF7AsuBbYviYDdcJN2PxTGpeBbiZZhfXB9SkQY2KhkhhgawdJYk7fJXiFVrMsnvq35QyDedCBUqSA4",
  "key48": "3mbgMQgrGHfFChS2WmzhfVdcpY55NNbZ7sjdKbfL8kubjCzd35xXFngNd5emdf5vRiJpVaVEWRZc2ipMqEzDGeXf",
  "key49": "5q2MKLAhCpTWn5g1Hb6jHStYZ6hBpq8byi1pG928zkSd5oVWW88LZDEPzqEScR99UmBaDLHWc1n5bHiezdb7jqaN"
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
