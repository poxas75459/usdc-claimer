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
    "3kgYFR1Wqr7uTpqK7EagcT1q5LvzW8khj6e6DtdPMnsWKHPK2tcuUV1QC4g7ftzSRV3HPJKze96y7R2H2A4pMiMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29SSeySEVcrmEgNegfPKLPZ4VZNUVggR9Q4zyTUtbYir1oh89Jh6etVLhp62UkesB5K3aYyxtRC8jnLZ6yWyveh6",
  "key1": "214tALcBrDZVwTQBrjFkec1xWBjxzei43WLML3DVg3mACQ7payx5CTXMPxtrTaEDu6317gJw99DDAkZRmDyufZya",
  "key2": "5Awwk3PHhNUha7yJcG1T8S8PjMSkzKSYBts7buwgD3vR2DxS64J8hcZumSjV8KoH44woCe4s8HT5QmbskRFMPrHM",
  "key3": "2v1fFrGg4mukVweEL1inx2NEgcf81wf738XK3QMkd4UKx2zc9X3c93yuor8r6Vjo2WrVBKFVV2KSnZc9S7EeRgSX",
  "key4": "4PA5YZcUfBKziehtxSWumZNLD5SEtuc4QxkUmhWyYCXLDB14UDh6amAyuEA3urnHDEGKH44YU8GJpQSkC1r2rNp5",
  "key5": "5YCShKzfeacgxwci61GT4xFVr9YsmRexxDFRVuyUoFK3sXeRtDARCkE4h7XLtTWDRwcWv3RPpMvXWNHQ8Gmuma4F",
  "key6": "24cthkPjeMWHCvqCP8k3o6y69wrg8DutcQnTHocjjh5j7mYkdkJ4D9cBaTN7en8LsvaGt8N5rfos7JuBHumpVbJk",
  "key7": "wUymHeAPguVWEiyoHmyHjXrdLBdaEd9g43qGfRv6NpqNk2RE7KmzRqCraJedyaeevWdPPKoJzqJM43vvKxPF8Kn",
  "key8": "UveGtxzHGsyy5a96VCrNiLJQaW2F2p5Vj8oCdoJXPCxbnFY7jMDrRXTjhNci7Ur7Bftc8BhsbT2zSjjpg9whGz4",
  "key9": "3w9dJKrQPBi4ZwLu2H2cZ3Zb4MZHxad3ismq4GraQKN8GPfA1JnyJUB5QaM3CfN7vx6BMtSjYPDgEmkd7WSzDAxG",
  "key10": "4iMCyARNGgGHrJESDhjdoNnZQvjJtSsf2Q7Z4gJwBDdQReXW4dJ83tJmsfqriA2zwdNPbjs5QuQAhXkjaJ1kt2Ns",
  "key11": "2y2sMnnk6ndWqXbgfdhojSXCSjRkRTgeMkJd9wvENC1HGbkQN138kXafz145NRxr1tquqGn2BELxbeuPN4i6tpTs",
  "key12": "5Sp1QysP6fMKxDFb7mL2ZJHWKBxKKCaR2NhLYocjdWHXKhwKHcNk8CEeP1DEjb7MpcXabUcpZzAsxmrXjtPfAJhz",
  "key13": "3WHTX8ovYW2mEWya8sYegRXnagwDdQo6YZsLpemJxPiXSbU7REiEsFTrx97XgxNhdTFA1h3VAamQDRYqQDjYxE5c",
  "key14": "2JpzW7JMfhwu7wMNhneDBQpdk4QWLvofmR1DcuVxopegzz676j313emPYCjhcrv2SJkhY13QXaQE6QSz3JzmykyK",
  "key15": "2gz5vS6UHcaKs6g9oN6nFuCtPT64CQ1YVgk2RsLZCK7SfN6CwzsZqanbcgc5Y72WGToPvd8oFa2Y2tPGr26hwAFr",
  "key16": "2FpKhBvoq1abWoCADgqR4j8mPpC5Nc1HK3uMK7beucS2SSABXKXYKvaBE5Ec33fyCF7rtLZ4bxgwbQSKZ5rdTMsv",
  "key17": "9Z6g6XupRnxq2GKq4kmFJQBgipH2ZmeMAxNaamCFuBDWUHQF5D4ynPyVgXnn1CXxVw769oM8wXFgRx46psFRiUf",
  "key18": "2VuuKmmynwCEG5hTPN1mgvviDgzkYUdwBoqyiJeZnuUCHHAp4aMkmwgRwyF2v7sGXe3CvQyvAK5M3G9qRJLsz6YC",
  "key19": "4DgHUzH2xTmSdwsDM5vXV8SVw25X758ygVaYM8aemzt6rA8R2niSSEG3efE9dBHvrSZHNM8fySRommQZN2rwqrUF",
  "key20": "2TMmwYSmfW9rLxtGwjR18bAT4oocievbmvDVuS5g2NmXy44UMSSFyfEC83ebrUzAVHoYJirWQXudPmNCGuoYtZuP",
  "key21": "5XrVLwyakwvwH8XpUjLBb9eNbjpfk6Wc9jip483syZq2jZvD1xDc8Sfk9QWcwxooCqHhMgoNRQhLvsAW4iWWQTdQ",
  "key22": "5qRNio8Fb7d3re37T3nZeTnFQGyG5pz36YtBJ4ATNktxtiFAbF6ZuQhvCejN7jRQbXS2K2HKqTj7TVbD8ZtyHGAE",
  "key23": "4VoMcfF19ceWAvwhaoz8hK9aaa3KnKNyXmz5oyWsAtw28tJkFcHYq6Grkwy8iaQUDCVCRgAe9JdmtnTfoQTjWgG5",
  "key24": "2tVQBUjGj31hMg4yTvpVCjAjnb52kiatJv9jA4k5UitnN9v8fxtuZMPkvKhV57wp4qEPbtLetoXNsLs7pCpPednC",
  "key25": "429dzF1icCSgfqFV8mq68RkLCM9qCfBTeAFKzqnX2ULS69eX9PQATQ4PmeJKV9t1gzPN2Q1H3ZJEt2aasWUhV3D",
  "key26": "67fGQ3JDcvtfYKkXUnjDGA37AoXQnJm4Waoi46uhYZ6GP7BbDGBJfgEyjh7g4WRTQkE96sheefHhWnVWBP8S2Yuq",
  "key27": "5FxJ4nmbrxVGag3i2mymB4gqjUPP829VWvxoGC1DfhQUYkEF2yzL3bUxiqBuJg4SEWoDYCJ3ehip2UmwiuEEpbX2",
  "key28": "4s9VhuMbV8wybXiGKd43qNBTHprdEqY3CfwNCDDCZMaVTwwgXC2pPHVYnA7o1aKKtS3YPePUEaNSbHKVmGSKxBM3",
  "key29": "43UaJ9grkoPx39eyYxhuSDV2qWjZwT4wUKU7HJYU6igkRnrHUT5MmBAaZk6oWAE64JsxkqwHtGKBsB5J4YnQaRrx",
  "key30": "pTXjcJpvTjBxjs9vkHxR6uGiV5bjczRGNz9c3wsq2pSHq2h3Pm6Q7JWJtGyug24kjnzmycBSHSWA3MXjH67rp78",
  "key31": "2tGK2dXUo1GnvFYzBunr1gV6ZpWfg589vDht2nW2WPwKMrRRgRcJHgsG45M4SWC44DZpCa9RYCsBeVCjdmNG84D1",
  "key32": "2bsZeMEhJYhpKfuEPeU17tZie3XateKvd5dKTVbyaHUe7rGeFh2tryAbrT3xvEFpnmNJBXoyXubrJD9PaLwazKDD",
  "key33": "3QXpdDzWkCN5n3mssUFbTQf6qoc5KVZA9sPGhuwdWuihZy4suCDCaUdkt9FBTgKRtwRqaViumTtLU62pYadRZUAQ",
  "key34": "3NoM3qvzqHdxFqT8Ef7xTwWoyN1PTgMsZzBYfdXdjwtZDFyt5dmMqujK1AGxp91YnNCMVZjXGmprBpAsSHWNxURQ",
  "key35": "2KqypGfL5iJeFTrANgg33FvrzCxqBW7WN9jXHibYxbutyZbqSxpMwT51Dno4W2hK3uf1RzhPr68GAHrNAL9TqsHd",
  "key36": "2B5FNMgFDjE9PLkSCZhbRJisKEQ8yJ7KtdPSQdey9C1equQjkAWjKwy8JBhbXsSYUMWRDXWodYGC5vnDaNJG9jTu",
  "key37": "4FvmSpJxCaceTRwwmEVGuERMDs1GoZ1XEdAQdhJDmwiM7YiCVL4bpYwbSqXL7uNgoatzxVRVEnzAvws8WCT2ULMd",
  "key38": "WwQbPzGs5od4SPCbz8oBztcjxVXCkRceXuYjVhoTEDPJfwvigTURJP7BERvhGBYJakDZ9RnjbepMJECWTQqu7Qq",
  "key39": "ddrwun8ErNfMqSzUiWXRNnxCB4fEjLDu7LfhoUx5KqqLLpVNkJFxgzayFF2nxvcispkFg6RNaUFbMdPFYqetLve",
  "key40": "4cfLtwdNb5uv3WFUg21Uki8Ara5Ywnj8b3MazCHgRzoS3QVGsazPNLuNhVNpW8LC6639VrQeepVLbdPjrkdKV5rc"
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
