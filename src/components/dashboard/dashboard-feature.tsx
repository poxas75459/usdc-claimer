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
    "5E1G6sPHuqhntyV2QQkUQSUbp3jeNfcFvFdcbwZtG9WENmiM6gMT8BLEsN8iP8CFMTPJNRwf5KZWPwjEfwHDujPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bXAywCuTmLFa2E12vmh4FYCTYn6WHkeCQBiLco11Ve5dQgJCwA9fncPXAjoN3qYhTBWG22s3XxGMvPYH1X1Phcq",
  "key1": "2ULbKc7i2VwjGZe1CJk8T2dDzAhGauzrRTTXZLn8uVursXLieYdtWVush3ses7r7n85E1UvU97BBCodZK7ue2C2F",
  "key2": "2evM7oEk47cFAX27YVXb8qESwMDrDYqK3wZsJv4JSLnKc5Vy7TTHsPqaZCR5FcHSKNuD35NUgr75Q3oVz3Tq4j8R",
  "key3": "2WyCNp2TYTJX43i2WJYnqYb9mszatLnGjNAg8eTZNirfz8HR1vMPWVHFMJAMxgFMUwQ4abmWyrvhLq7LMhuEeoMe",
  "key4": "5XQu7nj6WgvpNM9jrNCHDbESVaUiRHjrScXgAK5UurcuPRsuz99mCPjhMHQwQZ1S7c9gwEwDSydgJmPN6B3TnvBE",
  "key5": "5mpXftp67SxFDX69eE55WUugrGAiicnv4LzU2bnCQakJYfrHbizMj23HDT1vKDN5SZRuRybE6hTziaRivjUPk5HG",
  "key6": "2rAbuhn7gk286WGnZP9GRqcU8yebpDhpeUCQx9DJmBA6TcGMhB3z1xSeHaWX8EoasyYSwF9Urm1A6qg1JaiegUMw",
  "key7": "Jn83Zw124qBNbAJWmhouXpD5NAgmZ4w6d9pj4J2iqL8PhfaUgCZZeZ6kdDWAjEJkwoshEV63PWb5zALqkJGqfbt",
  "key8": "5WN4f9SPdVMpFkv2VsJjWXRD3k82owtvW8u7WzTMTXXgrGV7aXaBwjqeFf7Ps3RQTMLErAC9SfmfTyiisq4HBig",
  "key9": "3ymLWwCJtCbgMkMbLoxWFQpKnR8DH45a3nwktFradndXMPUV7w4McVJG8Yt4VAJfo7Pnm9xEiJBq78jjftFwY8YP",
  "key10": "MA9MbX8NsnkFYwsjZLARSjuL53jHxRZzpkCytqHtDrUS2gj4xTnFyqHAyVkN1WrA2AEXZ94uN5zS2QdSzcJk987",
  "key11": "38fyztKqN19NCJLnD9QwWYS5SNiacHD2Ef1noFSPB2KkfVfnB5SBppci9FjcW1hsbu1Mt68yT96MKgE3DcTRoka1",
  "key12": "4bBNnAR8YqhGWSnmJVxYY91Xk4ggX3WgQEn6SYJxhCihiypM467QMpabPreTkYaN5o5CkNBs5nHLVHsmbQoG8uyi",
  "key13": "4d76LuJLDU8jAydorrxoeb8ACqtsYaqYADfLouovDSKqFcA43m83NSKNBTHRu3SQpSodKDyFH4ZDu1NzSjtEmCxm",
  "key14": "5Q7k7ed8aitwcFa2LTeby2kwzJSxhRhBKhzyngmNVzFyzAvmNUHzCrHwZC1EmGCUEnEPa5FVgCfvymx2oCHM3qap",
  "key15": "4KXmDqtaVy4eHYGMVeMgMjtjxzuPW8S8Jn9AkiHWmL2aAwDWtBA4frMqxJxZ7isdzzJLZfq3WbQnp7ohveA7dQti",
  "key16": "4qrRqZysmQV8Mnq1JqUV1DZn1o1BWWJrwj9bvWFE5mNrMxDvqvfjwpWqQ3f4gXMVVxyCjoFotQWD8MyjTxDHM7vk",
  "key17": "4J4WirRXFxbW8LVDu9WuHH2FLyvh4eiru1cn5jGzbZKGBn47ebmiqBBB5GvFB5EZ4YnJuY4bZVGhXJrq2NAgbNhY",
  "key18": "2vTQ6YMMYzQCkydJQpYeSs5rUZN69LUTRSAsvD7VVLEJRhgeAxL86fz6hbK16reFBTEcNyHiMUJ93G5ZpZVfJtCF",
  "key19": "hSzPp4Y2LSihYwntLhPbahZL1cQSj8dViqNtBEzTe5F4n9haPA8LnNmwHKj49G4CvGcN1qo1xgLhDvrTWQ6b9Qb",
  "key20": "5b4DT6as32XaBnjB57AptjLCiqBg4L53C6sMYfJZ73s7Pgia5r8q1gKRpJi77sDXymUX2p4XrvkwtXEnh3PFqQMH",
  "key21": "75i8MWMqDSp9GwsiFMYrYjJtN5gVT8G6PwdwNb1uZGmyqw81ZFHTKLtBthxwxNn1K7V2kkqm4WnoCnspTwfaKgr",
  "key22": "5TdH6YYPy1ePeZvgayvdJcCN2hJHsbpRGaJdjpvYJWpJunRbfoM1JCGLxfHTZYUYwf3yzo63yGvc4zoAQpSyiA3v",
  "key23": "4WAmTaZLAWzhvpKj82VMje6vLBGCCgfjrkjUTyqSXL3gRHhiC56EwSiVdqcSV5y6KkbU3zocks8w6DKUEouX1NHJ",
  "key24": "3i3mCGm9x2UGarYxiGJeBFPEY82y854PpKMJqEiN49hces7oTtEp7JL885MigoJpjNYcqqjPv7gxcMk8iFvQXzQX",
  "key25": "5ue7s79nHQdokVt4BucFuoYjWzWijeFzyBMmJP5uWuR3CeqsYyGyzL3iR21d7s4kzooLRYZFrvFow5s4a6EGgQ5w",
  "key26": "51muvF6xrKqVWRQW1EkyjoYu9b2W3PXaZkqJHjrGpTvpoM84CFrYkR82FzxmfUVxSw7Cv3aiuSSWN2n1Tg99z9kj",
  "key27": "2vTX1kEFdUanbJaMsQoY3thiS4dprBxTdx96abJvD9GCoiEouAQzeLxAHNB148n4NSzAdjquveUmU1JuL1ySgbZK",
  "key28": "4L4SvXfAr3HLLJFXymTKtWXLmjxEYJBu5u7FJVrdk4YDv3KR1L43A3DXRbfh8yywaoQjfLkGLCmabvD9hLQoyvwW",
  "key29": "KjjcpyyCZWb9Zrr8gXZvwzH1gHbow9QTdoFs5RvyGVWbJ5j8wQMTRLfRnXupLzy48hV4s6pT9prENJJ5cFB6Ah4",
  "key30": "4ADNH4CZ2nrqMvP5rzJNLJHnvULMuJ2AMs7TWce8C8oa8wfFfa7zqff6iwiZAnWgao9MABgcqM1SZME5wJVAwyGY",
  "key31": "2ysridyTq7cKX17nts2YDdtS5iWFZuzcLXeZBDiCPJQkZ3nWALFt5xUSDpyzk6U1Z7o7Nm8hXyJmPkRHwftPPuBy",
  "key32": "3z7BrAYjH4vjVdgh9sJS1tZnw1X5EyzUhS4KoEew9ZDs5EEPhrQhREYC5iFPiijZY2e4Go7tXpovTtSXnTzvGDUy",
  "key33": "4gt416QNvzXdpxFaDiGYV2hNkCkFLq2CR4gd7ibDN1jCs3FDJr9AEZnMvaUYJDeX2EksgwJevufSeUkvUBzrD8Cj",
  "key34": "M5fkDCWvFrdPpp1FL8j9MzToZAMKjVYY7gBPSjSeJ9EwgHwNeoirPeoJY8k4okihHWcPCNnkqM254BYRgcMh3Vm",
  "key35": "3y6UpHgAwStqCHpJp4v5YfyhWrfzM2RzUb4T87KWV5NFYUY55hUSQpPovGwzjCRKXqwEGfowDVckVkhuhrLewgDC",
  "key36": "YYgc6CR56czvKvyaqXLS2Me8EZyQeAhCrSmBq3Xx4wzFscp7dxzeXYbJukqYJPi29M61AVvXhMovRHJuf1P5uMe",
  "key37": "4dPyaGPSwNyVPKLdkNMFwWoDeN65uUU5n6TxaztPfzPJggTevgNSfTcqZQXQZTEH7rAaJ7X83uQFNiCodN6d4mmk",
  "key38": "2RJds9KvD2oCEDaNPkUsCSjW8dcArV7mopukE83HfG43gpsJ7fSoYyUr58nW7psGG5NTkx2sbr7CjM1wAx3uAmEe",
  "key39": "wH34zTqH6jv2mXJ9RxqiztUC1tfwXd2G7qeMPsRLMR1rQ6BfxWNzWJafXaL8jrSmhSAEC4uER421E1VzTJDXQmN",
  "key40": "2ceQQoRW8dmhtoLauPtaRgTubeUFdmCjwMPoz6P26qZxJHBKSVX2EuG9KDonrdFJpeaFAduQ3pSFFN1nNmS6B8mL",
  "key41": "3c3UABF5bGdTHbfmAdLgn51GGKVWydjLvC5Rk9g3FMdYaTSwzYxU9BGcT8Dai1BkbFtBDnTqBEZXU76pQsyEybEL",
  "key42": "2QCEUkNq4Nqb16rhDR85ywbrbt1SGNWgZZnNs646Q8cYZULGWyhix8XKjFWTZ1Bva4qcX6TRUSv5iVdKkwJJg6gp",
  "key43": "2barEUbJFv6nMGJVBJR9qHQhaaCdKrrCK5dUejGHx2xyu6XHWkt18uqGmMaampecTRuqj11zve8RVc9c4erQJh6G",
  "key44": "44sbAUeiHtGRUuwUnQkEW4fSrpJqKtSGgvfHrxaBzkYTaorFi778SCridWzaWH2cXRGLzwFC1wa4HgtvMnuEhGLM"
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
