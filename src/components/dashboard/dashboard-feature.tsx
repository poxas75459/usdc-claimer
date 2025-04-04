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
    "4WAXnvrzzrsDxkFMipfotsFyuXoKuYeSDf32LhT5pmHPC3pS3KcHLx5ZZX6jqq7AJrYYMw27MCH3CoJ7jn7StxR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ANLd6ZMgSP1HhVFWpFL9ee5DJgwDrTnkK7YtLqUS38DUqJy4e9cZzxbrDrdQhQWguiuCJoEqmN24x2T1Z37A5jW",
  "key1": "zrPqYhnCdwGbFx7nS6AG7ZeAZsj6bCS15txzu6zYx6s1ucnDKVv3B4ApEkyHsfBn7WSqHckscRdJLkXZYQ5N2zS",
  "key2": "2ttCsrfUbRoTUHezN7H6UWeuCeHo7XXYnfGqjVnjoAR6H24Vc5jszZWyz26Tg6JvjAgUaw5PCfntPrH7LQp8kAbm",
  "key3": "4TqReCed3sneqoSa3jSzkpfDLTK7o7cDzywzUk2S3A2q5PZjQidcXQXnd6aXrBhbLvY1kaU6Rjdo4ZftPPpgJy3c",
  "key4": "4u18EaJFm5P2XpiGGM1owC86868Qa8jQbfNBxEKE6gipHb6aiyKrLmGVmVwm25qYxKeifv12SRt99bhQ8p2gSdQ",
  "key5": "28Jg1mGcGb5gfGUoLMtc1EWEueaLVNgUFMQgo4tQCoTDsYEYCKqPqA1qt8uvLtfRanZ6sD3ptfXqsDeqVACqCmZU",
  "key6": "3mqv1uMvq4YvY7cxqT43Nq7B8ntjtiSNq8LQc1VxCJKTEzDRVtVj54JEKwPRbKPqpP94SWuKHuv8bxRacKGfGSGJ",
  "key7": "47fzMRDCHgE5R73jBmPFGA8MCHpEpceJMb5kwdrtNi7nwtAxND9Xmc3p39eZ3DVFg4rxkEA2w7z6xP7LvUmGXRsm",
  "key8": "5u4Zrx7qCgrTuSyNmVv7F1iR6NgYroPk9pTZvwttbmnCnqNzcbthiQn6yMXUMJscUW84mK1SpMiGsoZoht4muZqy",
  "key9": "2Bxw73fxrBbJwphmk1YXhNbNBgRjCwLHgvKsVK7XCrNQjazhpprAjLj5FmxMkFTHnXc7YcPWRZTkdUNiQhJYyygb",
  "key10": "2z8sVUPDntuFuFwxw9bhhxBDnrVXrqy9m7Fm21TcuapbJmbQimpPpSstsKUQB2y4SJuYcFgrCN5R1HxiLs15RwNm",
  "key11": "axw5BjnwUxV7ccSJDdbe5beuisKHT8819EMVQvPx2ujVCRAv2tANz186yCNXNqbq5qTupkFFyRunoSwCbRyW9Yg",
  "key12": "5jHnftshTafSJzmFhRpT8UMMfAPSXn47BWRiRkQidvbhqQmuHqHnharKdn2qGG9nzQ8bB4MA81bweNCBcgjJsX7T",
  "key13": "2rudZWGNHjQb7p7Kk2bCkYgyisSxyAwyBdde7EeAqhCH5UM6ehASzyqsbFo2hnjpJVGDWbV9JxRyzApNK2x4nkXW",
  "key14": "21PQXHYbwxBxHsBtUGTMUshXHnc9xSGAnrBTZNrNsuqD8gy1Guede3CZwe16FLzYyN3M43hVGx3zFnSmz8fvCRDk",
  "key15": "4caKCAJmTNVXhfn2AFXXZgpSjoYZxiUmmygwoLKneaMFp6SHQDLD5zCU799tuoyefBZgsc3gRBe7Nnt4b8rVvhhi",
  "key16": "2gTaKCPeFAXfTMCHv64T6VHavT1pH1M1rQ5TRHiExjcostE2T886WVhTwA3QHdALXBvsLoM1P1LjxLz7Q6Cvyp1R",
  "key17": "62DUU6usyGEi8siFGNGh1NgGcPcBHA4UPXHHrUvTzUnDfgJcXV23EukDbCUEB454dKwWsu7Xe4DNcXeTyQb7QYH",
  "key18": "5xjqGqRnVgABJfjygy94cieohG1KqYvKpTbpFhVWax5TceP58pyxCyfs5YV1rMR4Kz1V8ivzV9pdpRUH29ys8wKN",
  "key19": "5yZ3LDDbF7oBj9yn9XbVG4Ji3Nf5WekhWsdkTB2chrxNPYAewzSUhSLcmSbYDGaxhrfsMpi2hJGmmd3Ew5sjoP9g",
  "key20": "iEtBptBTm9mEMa6a3Gh6WZaThELHRVPcoMwXpgHoxT9a5M2pRSctUsoRhWr2HtPEhP9uLqsdwCxWLMsA47VuMmy",
  "key21": "5MKLufZzzR1nAMrv44Ei5idEU3urtcr2WDcgEcs6AUFb1fKEb7eFs99jdkLv5f49GpEgC5LVFpXMuVHTrZmDNHTB",
  "key22": "2SZctNSx9rgDHeL1eWAAZAMgXKg1PUYKM8ZUEaAKcot2HUUdATdX4V9sWK2ebC5Q2gRbMqFedopbX3mRMoD9Fu3y",
  "key23": "3uiW6ven4ipCy9t7BbczrxskoFetCfixqGbFbRrGpGhvidzgeRirEeNJNFTDCvwy4EBzZwdmMnQmC6UpKivM9jop",
  "key24": "3p3ZqbkKpHrm1vvNAvf3CXGqmKwBNpSuEmyxTLLM6bjPwpkgyGav3HbhTsUMK8ak2HebfXS68EStJH8KdhBtHYxQ",
  "key25": "24c75cH4CT3m1apz8TikiNQVsvMeEWdmTaJpkcP4zabTst6wEuFiMMnMvDokBpirc45diuSYFyrjVBFXMHkPqa2E",
  "key26": "CMt53Lg8t5vkoWVtUwsr58dJUhjwhEwSXXf3wsjJ4uzWKY7uUSXA8oarDW4W6WwkiR4dU1nH7wrXzKQa4HGnjRH",
  "key27": "3EigTJwWaX7Dbi5inkPkKNKFPz4iBvp7gaYsnsswKhPAaQt9w1t65qHPgYpGFV37XxYF4AzGVWJjTa4LrdyhoQgB",
  "key28": "46fgZpKKgbWHio6RtrbdzDxccwBvidbUwu5ZRH2sh5GfzNuiW9qrsf1AB4PSDg8mquUSf4E18LUyZNMxSzX5c57Z",
  "key29": "5CMGNX7hvpgZfp1UhCZiuVfd4dcFUkLQ5MnEBQtp41koap4ynCxMUQb51VHN2pXuWvPQJhvUL4Dy9cQFCxcL7Jf9",
  "key30": "2wzu1mhd3R1iRpHJSY3BdXKu3ZyrCUgmusYNTT2bnhTtJU6AnqPhUsrMj7g7NxnzbWZbNaqgeTzJwK4j7UHstPCf",
  "key31": "4gosRJp2vL961Ps14awaznp8cCSuizM6SukPaF37zT58Q5mgLA1ciD8RgT4yE4EbosdUvecxGo7U8kXk9zqK3qJt",
  "key32": "4bSM8kSSGv9RWzDV9EBQ9Rqp6e3deJGbJNxKc4BMV9XyoSUFEMRtrHUo9KvWASAm4yXfLK2uzJujKLvJdFAtq8Jx",
  "key33": "4yyGyspMGix95Ucr2j5njT9dkGtFXUhb3ENhg7cd3paZsCVayUZNYgau1AHGXTCfnFhPijjNnqwJncyq5kDHLJ8T",
  "key34": "hCGyo2hk2unuktHVL6wQHkkWkhf81qFBdaWANPiunVqoRsQAb8HZpHFxX7vhtAWPWHb7qQ2GzKWn6j46PsT5c3E",
  "key35": "2FwdhC53ug7MRELbJnTDJYL2Pj18yg4Pr3j18xTdYxYR822pjDiKASDhvt4FNQ7YRpVKNtimAXXAkX796btDkUTn",
  "key36": "3JviCeFubYizcAfGDMR7qH8yTSpjTV1cCkbUVrkD5MeYgpg1WccrurvULSeh5TtXob32kcYEb8AY7HE74r9XcUhj",
  "key37": "3YErwqpDRNxLr2u6J3zacbfWutcs8E1PYtqTqxzwagi9kbTwSiWGGq4fxh35b9owySGHGRBJiD9SM2DNtjeJsgM8",
  "key38": "5WrdvKVcCa7kVEkYb59k8pvyVvCFnfHUUqJFECfwK4ZfH2tHm3BKPe53pdNots3iLAwmFtdf7bauhZbabys2Pwd2",
  "key39": "AMXxk2nprP1U64NzoyMfaQkEtcLPN9DPaBFukFM4jipqUzvBe6UXpEigAq7REr6CbvkLiQW9mA7nsZGFT4Vfqzq"
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
