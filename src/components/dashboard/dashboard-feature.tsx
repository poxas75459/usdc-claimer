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
    "5MacrumG4vaJ41XwVPZiJiw9zstMBAf2UcxKXNdXvkpRv5Xphe235J33njq2qeb6zHgLGNA1wcdq6GteynLHEiEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ygomcyccXUo1iywPmZzZLoR929rWpZPviVZLkrNAfzmrMu8UsGiBG9z1J9eCggf9xsfpzHqDAjHVVFBajARmkgN",
  "key1": "3ELHUkAZ63SX1x9xBUbnYdh8icLWXjyS3pmL5ZHWygBRgVh4tQtXD9vUv453kC5h3X3eC7XisVbL6DfejPUKf43E",
  "key2": "4MB19233wXeWZvH6Wchio4WwfitaLKrftfJyjWP39Qh7nsDSjdQwBhqw3yCSBCvdkt8sWtkCctnErAGLvxNs7Exb",
  "key3": "5xDtWxHrB8JtPGAKwpxBCw1pNrBi9jKp4h5GSNcEj11YHHWC7JjbVBdCi3FVUUGdfAjhsxDbDPcNZ7NYPGyVZ2dA",
  "key4": "3UoXaMf2XcdpjsF1zw1PJ2MsQ1SRbqGrMpRNgGLpNbe7npvTDa1Sefx7MdYvmrwja2tdjyHvWrhFh7BPTFnKUN6B",
  "key5": "4KfiCM3cAL8QmsNh6pVYrWhgSLCQwj4zUXdnaDZfoZpHbB66Tbhnav9iGRec72V5aFRzYYJH56f7ySRcbW1JAXr9",
  "key6": "3xZJaaRFNPUYUpNHafs89Lfn3WfULZSajpiHRqKiEFW1dEthSVcDakJhTX8LnnTuifdMbXh9ugDKv1XqR5cG2gdn",
  "key7": "2UBNPhvqGqnXizrn1ezyZEH1YHkTkHVAcVLURmBn9DCABBPuqadXf22en86ReCm3bFcZTmUc7z9QFLXBGzYxCgXV",
  "key8": "4Sjx19idcNvMQx53uEwcbJyGUhnfgbWKkVHkLWBusY9JeZaFrau8oE3xCaxbkJ3JGhUbMbThYYugW5sspmGahjN2",
  "key9": "Exb9DZ8MS2K1BgbYPxVEYL9eseTBdNqiaU6MgJeeRi23YnpdN92tSAEsv9zy1DXNMzgvTxr2bvMywGpz5hpGNMr",
  "key10": "5y9p9hV2B8PhcbZf9w7nrhibJu4UKEMExcaARXSHMxoxWsMRM5vgFiqnwgYoaFb5xxLcwHLU6Qo5y6oaDTKfRRj9",
  "key11": "4FnSx7Fasd5YzoYEcePTEwN3jfkTZf7bYAmLxHtKKpukDedq7j1SkTnx1U4YQu8Xs9DSwBv6BvwDi22qRYmvKiUb",
  "key12": "2Ak1agTcuunSMjDPANFoHpaVzNC7DGGcWW2bKpn44THt463WfWd4Pd8p1byV6dRNgz69eB2vcM1XTPzwxUxsovRE",
  "key13": "4kR1goL6Kuq9aSeFVDe5RLkD6Mwa8CozpCqYyFxsbHN6wtv8TYdNdmmXvPf7xTzF4qbus638rb596DdJ7ZayArZk",
  "key14": "q1VzxngsV8KXUf2zwcxDEHHqQdeAUDKUf75MATP6PbgR1EDwFhwnAPTk4DdfX5yNJTvFvPhtmMQmZ6mfXPoW318",
  "key15": "RtLzKi47t7PNsQTmjiPrBJxdFptGVWLs3vrjVffSWrZLvGjeGKsDhxBJ8Gnk9Q2U2LoeTAevvD6y9UKB7VBbTrX",
  "key16": "3i8sgirvPGFfTNiNebYsyfqTKhuLxb1XPs6bVjc8VyhzexQxeVV8kEHqCmSVDLG2qjELPghDwNwaxGLoaZRG6Nfa",
  "key17": "2GugusuKhzZMaDSbFADrdJxGSbNjzZbu8VtQdBVhzeuNrdWwoivVYvc38p6TLbKtvvLu87fPQYvqJTNGv5bE1sep",
  "key18": "4QzTHMfCDKQSPdhu4KRjYCHa4vgK7CYX6NffVW1CeRkF8uciNJrrnoDT9SKiMQUduX56sdXxZeFq3zo1Jc1VwTrU",
  "key19": "2Z8UeZ27Zf4fipK4tr15PBb42xUooysyj1g7yyNAdiyVnbaPikPgz7fsXWH1XYCK7NCQKQkL5Q5MHGksTYrFsxKv",
  "key20": "jEr9CPSxD31R38EaVMdPcBc3wPC8BhAiVgmesKMhEvZaLbeTiHbx9vHt6uoKpVPhwo2tWAtqUTCsULWbecUK9NZ",
  "key21": "bTByBNKSiSohfJYNqsivmq7i5C6Zav5nza2nFfRw7o9aonEg3RSVDcbZwWLAQ3jshJozXfSxADxQKshi3EQSefX",
  "key22": "3XVS4BjiaG2nyYS9DZuMCVj4U5KHsARfXGm3epb9KReXizyQNButae2y9uR1pBjJcLVHJA8jY2schZQ4MfYhwdXR",
  "key23": "4rwxnMBmrgtmRMpUUqag36KaKgbMg2FMCWTj2fg5ksL5Uqq1dKzoyXmUTq5Y6EQGkzvUeB4bLUq9nRcHkijpxnNm",
  "key24": "4YpQHwVemsQ9vGWUaibDSMjM4qg4EsTCDV1KyPuyVCav2SusN4sjxD1bvizJXNfwDjsDZW5wrge8YZLP6onWLVA2",
  "key25": "4Ni1Q6SdCkR9UM9XtFot3jkbv4FgmfoTJxF2nAQnNbQAAGzpavx9TxfzZaAjjiZXQxs3htXpXm6h1cY8d8yLt4TW",
  "key26": "5vvP4KFGp6ooX8mYAMhzacLKyDPbCNx27f2XoUr4fTUz81aa1xPJVC3ocypT23oNiK3vctjya8GjTMaUGrMhKuEH",
  "key27": "58WQ4yFfDGH4MgJE915rEr4bKZHKiHgYvES1wbkzhD951FkS875G7mYj7jcpvzZfT1WaUBjb6zoSZiWCyZMWCMue",
  "key28": "2tX7x9goRqmUJnaLyLLcxGTxYWPL9HNbPzLGwfbw1NRuPGdpHJA5FaZmo8hzvMEjusoKr1PKjB2nQ2Fy822GDdYx",
  "key29": "gGpURK8PsBsnBbWAnSC3NkPRYEPcWJ7bnNfuzbzo2SNsMczBvDn6Ev65vwkCivAv9EPu5f5XX1ZahAJ6HATRBz9",
  "key30": "4EAsbSgcZddSeh8d3LXpwEwT97LQmfpRVdd1RvdkFSJu5KaqekhBWHCivxBsTUog26Jz9BxgK6zAUvdEHfvY6bVF",
  "key31": "4HWipHB7Xszvvnyzetv1g8aeMcBUnXY3iJMdZS2jMJTxxLMqT4R7sJKMXzZi1tmkVxy9qAnMMB6kUy4LMM4cFafm",
  "key32": "2KHXDV6sw1BmRDjMM4JHS3SsDpR7WtHYTbFw1J6yvVgphVJ3WxnyF9mLsCjphcDPFd8WHan1JvkAhWgUN7ATEBHN"
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
