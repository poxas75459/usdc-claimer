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
    "2EX5PjrjevfZ4tu4nBZxo6q1wT3hUEbxiF2JsrfDL8WVZD8SwiCkjQmdqqB51yyqkVCxn1MF1EGrRpra5uP5p3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kfnhygr3Yf5aCzcH7rBGomggPfqnEW5NVvjgkJd3xhodNZQaUq9NXagoP34SoibityfDtPzeemQYwm7HoiCN6oW",
  "key1": "57t7xj8deQCwHkooK7JdisJBgXbaLxFzAYkTWG2kuGd6FUkaDSWATttFFfcn1QXesorVQq6T5fSxPmspoE8GTC34",
  "key2": "4N7ALJqxjXanSRfTu1mx9zddQfQAZDstk9vgzKCPJGX959qGpzws8566ndAuGgboXZFkHRtMVRSkKjDhFpDwi3KM",
  "key3": "5CTpmnrw4HiHTGLP3shCVCiaVWc9vYopmTU4BBA5H3APgV5r7PQfR8S8uNQg36eKZ68CTjRPtFHUxaXywr4pJv9W",
  "key4": "58mHbGKNd4RAux9TezUf1KDqBr9ZDMLjTAKSq1DeqDFsiXADFxbCypCG8aN3ejbCTXcKcnhJMAL6MRNYNeoMZYz",
  "key5": "smM78fYEYYxJ7prusoAG3nvc8bP8mDTf1HhNtJiv1AgiDL67F1sTKRetCcmQ8Fbjc2LKBkFhabe8Z56rZkRCb21",
  "key6": "44PUPTgA8kvxW9SmSCy1rNWyzHVhhPbq7xDmyLiTwnMLHc9tuwL3QdcquDM9xUUFjkkAoZ6p6pYsa7x6NEj3274i",
  "key7": "4vgSN8V4f7NU3fxPGwVmyuxUp1Kym43PGyxkqCvFLTrUcWMLiTndb7Tx82P6MvhUvRvU53EmkGCh6YwZo7RNEH2C",
  "key8": "5JSyhj8ttHjKnMjjofKUCBeacFBXgEJAJUxTxVWor7vwx6TjnVzsCwy5Noi8W1vsmhDN5SZxcdF94jrLNDe2fG2Z",
  "key9": "5RmVXkhGdXPAGLRguYqCoyE1XqV2SQUFJPFSigpk7pdGJF9M9jXJdT1Tb7uuecKc9PpncSHuCA7UC1BmQJzyNg1J",
  "key10": "5b9JsWMBxo9b4jQEWdT5HC1vW3c4k4rDfiqSb4RTEGc9ZNmTpBNFF6AbK6MH1g53HgFLAs2fdeaSBWsgkWhRAj1Z",
  "key11": "4zbQTTvFwrps7wX17nPyF56P8axvp9CzZhwzMr522UvBMSiXzgN9UAyYJrekNQ2zBMi8P9FqTMFCsyqhfjSC82T9",
  "key12": "2SZpd4AxBxKdwQjB5KNQQYXRq8Da1agiTppQESXNyiKSxgT4En1qfuMtAFNWpJj3xfzqNUg5DTdE3nGyJWCGnYBr",
  "key13": "2mVMsWTxDGPJpbE55WCJSvTgsLSuVhm8okSMZqbszURaubpxGyDixs2KgMNNY6ySkuQqxs31sp8DY15ebWiFnq1N",
  "key14": "SQ9ETYrhttaD8KcgnSovRcDhXLh2BapEv3TbBSDWemc6uF9AGpWoWtYWL9AHzCq96oa68UP5n95GoqyfzWyZitG",
  "key15": "4gNowHR2SGMyVZABunRYwjPxes81xW4sgbwSuaEVXVJVGHrVTB5c7xtUY7vAJ798LEAYiX8V8JLuE3sbPsoiGkcu",
  "key16": "5j5CYM25frLRJUz6rcFFPyDgxA6XsdBVvnydWeDjzXqq6Z2pg65BadBGY8P6Ysn4KV6JKQmPxc91pDNxHtmQHU55",
  "key17": "2uUxrKing7jafSb2fbraPFcXvY57uxqYeJr9H2KuVuPCd3SG45RiTbxArrWfXeFbUrFamnHQt4C37ik1zuWb1oBH",
  "key18": "55XuMHY1ddxqCGFS4acKyaHP5UfmedWRmZmfLE58QfacxC5R8wJcAmpeyoCwxX5MCUUfCRuCo3eAHB6pmKLm9v83",
  "key19": "2WxAzsv2VwBkjgXBHis1b78HMTHrJwwoFfRvQcYwxSTNNRyvvrCdg1i82ZWCEz539XLehaFfTmeBFaTUh2t1koKC",
  "key20": "2jXt7hdiyweC7UEiVZD7mPe6HJhdCSuws1BgY6TerRxmaAGEjkyExJqeUgBy9ieSdJJN3FHNePb5q7kMnweF9udy",
  "key21": "5sWkXmxDfeo4b2mZRmS27fBUVqddMwMSrBJrepZkNJMzVQcQu3nMPuU4gy7JS99Fu1EKyJfhfrVgB8vdoq16ZMzw",
  "key22": "2LMZx6cYpxjVNBgunfuwxJc4qhenk7C4kd9zY5hiQSc4UofKfP5fqEP2o4eCkik4XxxwedJjZS32PWTUpq6BPPrw",
  "key23": "3hceybUwHEm5C5o46JFTsFd82dgcxocZER1NdfFfVYNZEdRGuQtQLYocrZBE6VQAMPoYHtQp3F3s4JmSz9y5sTNf",
  "key24": "3Jvmu4fJyy2issk3S935Y4nRwviHkQT76rsPfYUx2b2AEhkSs3bi1q6J3SkmWwP6UYXnRdmrsTbMb223PDtf17dP",
  "key25": "EZG1zjMTLbQCNuyigXdon2WnnpM8jJSzv3SH6kMig5C8pNeS5pYuBHt7PtCsiUnNJXQ1HtrspMteHVg1CjkSQXJ",
  "key26": "3AAcHJysNMgGyfrzdfAoqpsgkrYtMWQF7KjJGJpWNyuHu5UQZeueP7yHvMA5eehF5ucEbQ15rHx2Q6ESsVmRLpDq",
  "key27": "ThU6Uz5NTicppqDNuFDsMYzwdvNX9wwZAyqBf5xhK12GPSmQPqbW63Mg7rNHSVofvXmZ4p22PXySBynVPd647wZ",
  "key28": "391VzkTEtZ8AaE1PWVrBLhysdxqkcNau7sXrnUtwrx4y8QzKYPFqASgVSm8ZdEm4N8txQgmWYdDY39oBhCUj4za6",
  "key29": "5QzZAAvdWXApob1qQH24jFnBsTqGBw2ENmNkMtFzRRQhEhvVYf7ErA3Hn9MCqUM2jL7GbCzzi3henaK9bApaai62",
  "key30": "s5KYfDYwDLU9qGv3yW26S5pK7Z4HCsAyGSXb6yn7Cxy6iTRbA5EdbLKhtsNoVpMMfL8uAf5Jdy1wiJEMDR7NaKh",
  "key31": "2AEzNDbCCoSCkf4NNeVaBwUFjwiu7zyVKGCbr778UwntcVJ2XDPUpkPY1oh8GZbuf9gkdu91cxznbvs5cpayA9uX",
  "key32": "3VDT6g6tsfN3MMXCVGUYh1nae5WJdsYki3mSoG4p1ofxp7hPrbCwamgzhzTbLTJ44Gky3dg1MCFLTr1xSrtoMrGj",
  "key33": "RefYesJkFEJimTYe2UJsDQ1oJ6AfTW4hPAsKt85eodZhVXqpLGx5SkKkzPwtY2gvoHyyFtztgQGXtGCFhafH5Pu",
  "key34": "5Hf68Z8e1qrBeVeeqRCNBBnddmQysWiYkymPVShLWJEttFkKFLo4ANCqdnth2nEyTg1YSETSWQscJGG7rE84Cxcn",
  "key35": "2a2N6FNo7J8DkHvMj3g4hL5nWZvmhhscsU3nfQsWqxyiDvLVZ3FVyT1zq4E5DdzCnAm5XmuprWrebQT3VTW88tic",
  "key36": "4xfuG4oAT4nkwECb187Ya4w12J39VtMLDgm5YS6YUzQEK8weHKWzF72E8nWFd7BrvK914udz7iK5865y3izqCfa9",
  "key37": "9CXdx5aTgMgZNbtnG16Z1EVEPwqXSGAZUjSikLu1YNcb8faJpec3h94fJvSmWoUEHWMRTUy7fwD2cLKzLt9jFso",
  "key38": "k1S2h91LNU2mQkGJLZt3PR5wbVTenjMF3jMKhedau3JMgsZToxUjssbVLy5E2G4eaAKUG8MLp6cmxk81dJV4pi7",
  "key39": "3HmQsbYnua9outJULGXRkyMv34W1n46RUF796QUYMSZW75Qui5QqdUsKyPGWPBVzp7mZPV28AVoNX87jFJ6jHWRp",
  "key40": "44fZ1aJPDdTXwCkGiAbGv3icauBh4LrNq4rBvNKFzaA3CuMGU2btj9qgYqom5TQCX46XDGN4rUGxM25QpTarcmqB",
  "key41": "2tsgcp2osjL1v2Gar2FHA2ST4PdXK5PRdjEaFnovfMd8i7j9QuBzrdNNhGLAxKUHJ4A2Yw64fwQAhKLMyUf3za1c",
  "key42": "3iLpFetWubeaS2PNLQtPCCW9xW8e9gkEPWUj2mVB9TNS3EY3TX5Vu5SRqVDuoFpCZNvRfRNhpSSAJucVhLQXUz9V",
  "key43": "35TvfqhYwqdAUjrKLCQqs5P7VZumbsXi4yjuDD7vpqDC7vbjPHP9bb2csz8yap84GvDqH8RsT3ZQKtNsjEtxBaj",
  "key44": "2EbP3pf2Nj5QG3Dq8M4eJRyjD4XAtkrieBLkdabfacSS6yDTTLKh4o8kPLUcwzyunvqWyj91vAUvbhgdbWwXvao6"
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
