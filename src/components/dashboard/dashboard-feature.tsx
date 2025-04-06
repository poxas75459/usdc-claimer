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
    "6eYf2mLHqnevWz436kjz5EsAYudoHbJpMrWMmHoPcQNYbqbvrwxYRmUuL5vZfxbmG5e1hdxFZUCDWUvHYS4vHez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bfaPxVfJ4PDiCCawSjNsPeoBAcQDx3LUNTh5aZjmyCUL7RCaduXT1mhkFgqRcZHkuvZPKjzvbBUXkHNSMk52GTN",
  "key1": "5sDFE62idYSyCe5YCYmYDEiyPMFn9nAADQrpgytmH5aTMes4tbg77M9zgfUCzSynv1JN4SDWnRCv5Hn36gvrWpxW",
  "key2": "9DLZve4r6N7phUsHnEyii2P9A1MJSVi6Hdp1h5TwK242sEWSfEtHhCDeiuHwhgNTrExpGVXWQWyRpegcWceu4PD",
  "key3": "3N77sx1DUNWeA4XitgNECbExkrn5Z2NDcNSUGx6oEH9FvJd24ZGzEHnJdUcYbtiFw2y5aGnJC9TH4pPAvFo8v6i",
  "key4": "3jt6AAsfzB215rCEw6gD72Z7UvL4Y4qqXUkDQBMMSy3BXepbR73JifD495Ji5PRXoEA1mky2yEcWzohRnPqGYRvC",
  "key5": "4MAfhmPauPLDZkPG4xoaqrcZuBvcGrhQwAhp8xysWFXwN9hvREbBouRfdnneB7SXoKeEfVuyTucQ7qFYgkwfVPzE",
  "key6": "3pmCFmVr1XUSiTXpzU3saWgRTfgFG8GFbgwYPhGcXv5Y3btzttMFuuMpMN6khBhESZFSbFBgVV7ugYBEDwKPczpZ",
  "key7": "3K2AZs2k1iN8FWKSEhgn8Ku9nDt7peGqTkotgy77KagpmwGgRDt9Vh38peB7KWujE6bR4DXtX8oFRcE2XqVDLzto",
  "key8": "xHMqF7SWmfac45BYnAR1f8pJ7NBgwh9KRumV95QPRpVZADh9bwJgiuAXi4M99wmexdLkZjScoM5tDEhBDENjH7z",
  "key9": "4ZAGbb9xhF8Cn92kf3CCZUineDCQvcP31JHPE28DuFcmK1JikdT1gDEWs4v7vW8NksvJh5sD5fX8u6bP9wBQeXG6",
  "key10": "53eFYzJF2e1TZXmd8fCSUyyATKy71KtLHH8xXQCzt3UmGeP3QvjeGxaUBS4Xh7dStY19D4w2scAkALgQ8aC2ciUN",
  "key11": "4gvjzzEHxHhNYTuB6iGek2sDyUBmdYMBGF3NK45AAfTJjqkynvNQK8AvmzSdr8oJ6UxtkVnnbZGN2yVxkPkXffkF",
  "key12": "5a8oxSX9u1fAzxcCK7qX262bkoRVoTBWnZ54GwqJL35icp9NKSb2rgnQ475GHVJZHUf255VFPAo5nsQSX4Po8uUU",
  "key13": "5d3Cohz1KzYm2RKTvGfpkqMT9f1mSwf7UQ6uRyojfzZDx9LNNyWSGytR2M9dAJKTRe7NrTGDM96QRwqEGRaNLWoc",
  "key14": "3MPB5GyoLR9Vtuiy5s6QrL4p3b65c56CekLWcsJSPJj36PGAHuCwhWGvHkSwbXV5QYfJQxDjrS33jwmcka1Zo3RN",
  "key15": "4g8JGCFpWfqGq6dbvkZcSRm12rXY4W3AXHXajqc3Gx5ZchuQ1SYXqy8ySiMdn7AdLQn9cyipmFNT6Hp6FgGx4R85",
  "key16": "3ow3fyLFHM2hdE1Np63F1eiNNfckBUbePCs7bGQL2cNwrMnU1VzxCuB71oAvHgPb72P76Cu1SVcuuMdYqq2QCXFC",
  "key17": "5cGv55c22NY7Y1ZD89mp9UrrNXkort3pmkNHPpdY14HhN4DgPtsEhzEmvsMAV95PZu9mUvfLEvtzQaJbBdU5c2xt",
  "key18": "3me1BK8TMGTimNSLwmPFQZ2JQorqsc3huWLbCokmkXX9oHmHpbETf4aPmXV6LzpxQeigUma5tSAqqx31V1Ym8F1A",
  "key19": "5tCGKiALURhYiqiSmmoCT9J8YuNxzH5gR8QUExuY9W4dAkNnwdgaiGuNfzzqr9GkccQJhH8QTWbR2eUPcHfpxjaa",
  "key20": "2GATMsoNz6xEBcSriSANjp6GU83UFVE4cCK5bRfHtBcext8mxYH8nVFP7k62Ungu58XGAp8S48u6n71Zsxgjd4kD",
  "key21": "5jTxB3PaCxD3sZKGBMBjNXEaNM7S6A8uELi4sGozfrTNQwwAZYWfN2dgLQXGrGgHSZpDZxvr4YbRno1DFAYSBus8",
  "key22": "31mArhgw4rjpeV8G62ngsXfnmSeeidSvAMEs5T1bmTWrWqajRjJpdrzmwS5XeWixmV2QdxueKTci5K3P34XP1ABs",
  "key23": "2hvosQsT4bfCqRcVQ72mLRwtGP3MkWAZc2C9qNQEQPjYy7oqWs8dpF5rbaDSQJCWTBna2wZmoYi5dfuzapqUjv1x",
  "key24": "2w8d7DX571iVBwm6MUY9eGxV5Ly7GHoc7TiCnDUwt4JQAUxN9kMymGRueivfk9N4JgfMs3Mht1duHmTnFJrseVfF",
  "key25": "3TGAJSxEca2WdPJQ2Bbzg9hGrCYNpVeZfkWe81TjBGi2uMQ9Y9CxPRxmaggRfCRCvvrGD8Tz2U84vHxE1MnNzyEg",
  "key26": "2fsw4m34RbErouGB3NEnbwxE4EqGWJaAbYvFshoiH5LiLXk6nr6aVHY83CVm4TRezL4SubBQcixMoSwkrDvT2Cwr",
  "key27": "G94cEETougaNzdTKHmnMFXoCDG6nMvzrmVWtADyBmusyDUeqjqjB97LVuPJnPS8gVKnKLgLnFRUtrdZHMqsD64i",
  "key28": "4dUb4t1mj6RkHHMLYbkU4tCVkBuzHdB3VP4DjLhYBxmaK1aZ8ob3S6Ybs9sCxWAhg8QimnosG5cvmhMxSQ9ZduDY",
  "key29": "3nYw49JaAaPJFbMVPT64uVVgEv87c3H2zd6xdnkMUn5rgvEEZjLTS4DQidN4TGHqPrNt23rFAXrnpLjQaqERzESi",
  "key30": "62yWkgx32vW39HWeTECedLfWmy7Mak94NTkZpqHcza9WDSKcrvFLw5LXwrWjRKq9im5nyseV6nEE6DrAncTg86XW",
  "key31": "667rGUhCYJpEf5qAgrWTTFK7JEtGS6oafkFRWbmNVRfBQX4khT7nzk3JuvGVquQCV5QNVFgxb98cfBEgneB6wfmF",
  "key32": "2wBg4xHFJQAv7qavEgGi4HdZpmcAnree9AXFKZ7yrYDgYy5CBA6Y5y4jADyhkUECmyqXcwhZTwz1K6cag6RcqcUZ",
  "key33": "5TiPPgQCvPJuQ2doTWBcdcVgp4gfNio4NqoaipfZEAzcJbshgNCfuUuBTopu6BLrPntXh92Kfquv98UsvJiPKNJS",
  "key34": "3hNAsMYYnrbiwYDattZrgijibM1xLy2hv3SrtdvMfv7oYiSd4j4sX2dVbwNvib8rNBtqxmE26JDKRHrbk5m5EPU4",
  "key35": "3Ndqim8fShdsEKwx3g348tMPgu8HnBhxx86MumzwprZ69wrdShSfacBSPwpREkrHt7NCWrPRNccS7jg28vBsX6kV",
  "key36": "2WNXjhT3ZKd1fTg76qZUcom7uzZCTpxhom4gGXMAMW2W6SdEHxzRqBesAhL21zLjK55ZpJiA5AceBjnboS4v5CFk",
  "key37": "5dsUzgqNjLhySYg9Hceccm1zdSSfLwhba4gbLNazRFCv7UbuExED6z77wcu6zBcxr5YFYKMRGF1ETGmhFbFSt1Rn",
  "key38": "3eDEBLXmQ1v7S5pEeBFfT8jc4KcDiYisJo1nRTfz6wuaUf3cSats15NP6NgBzn8uqAY2cBzVYYgSA7zphYP6UhAZ",
  "key39": "4PMd5cuqmNwZQXqnjCdPa557okepzh6MCioy1X5KtDjNEWYXNfamYW5JvcVQTDMjb63j994ZGKnWPw82bop6fKLR",
  "key40": "3Gs3XPJsSog7mrFdHBa77Nvz1JSNncNmMLh9KyyLGJjuhTwpzGJ218zwYckWDYNpHL9yvUd6KnUQopSifnAmY4jd",
  "key41": "3KJnmMXPYm4LmZg7nGSGyVhGEaYHtxhLUKayG2us2MAf7EDmnxQtjKu5wfSg2R2ivAPqACf5HFn1iYSChEwV84TR",
  "key42": "4HqEwS6F9xZZDcp3JdnJ4t7twkRKYgaWuY5XU6FtvUbZnNH4eRNaNu49ocJcraWs3VwQ1k4UbqiAhCH4mdZsYCuV",
  "key43": "5SHrKfXPeFKCBSmNHfPayPsZZ9dkAceg6uTn6emoPmSrLBEq6vq8LYvDGtJnCmnnfDtM7EJXKVaK1WBwDCALTqL4",
  "key44": "2wCojnMZS6Sw6ZDPFEH7hUNY44c6vsMSbHUqtM1XdHo22UajPiGzSFiexeFvonusQ8FCzj5dGcWoYzEMA3MrPnww",
  "key45": "3Wb9pDAG7QZzjDHNevHmVQXQCKLtiribXgFVHJcBJP3Pay1me2dmGVmZhVZ53tmYhKNF3UtFoWZ4dQtCstiLQA21"
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
