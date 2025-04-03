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
    "4dxP42LxMgTHbgEUt1r1kLrELTHG5HLpxJ1CJESiz4dtJjFYRbCn67xpfBb7tfgYfz8HzCXRGvsqhKv9MkZYLkXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jkoCc1MXErzDRdDPkpALmBKC8xvxCMZuyQniCXXsKv4Ky12oBSZycAwNhcNFC95XPctFUigyp6o7g7uwuK5M5CD",
  "key1": "4epVFS3ytX1xyM9kQaZp7MwSKjvTD1EFzMtmrUk8FhhVMnr9d23KwEjwzXVBQXbQm5MwNdeEWEdGm1Za7FyhfFD2",
  "key2": "2qsSZDn34eYN91qm4z8vv3Vo9GsE8fZJzdtQgY4pMHZ7YNpi4dFavsfKP52Ap4Ue5m1NWsR8HXxnia6A4c5kJBty",
  "key3": "2yhXZr1rGAPcjsUWzvSXwPrgtNspX9jwfgvZae7qE2ru8qqGPnL3GjEDCgVuB5G5pueyceuYcZVaKDRQv2eWVqkd",
  "key4": "5qsnUzrumcdF6JebcD3vyearqsHMdQbV1ft7vcuzkmRXebopWFuhgPqKg8SQZYGWaNdHAySuVQZVmzK4yGXUnf2Y",
  "key5": "56rkFNV6v9DwBamspAE9ov5Y5NobBf21X5boQaCdyghEjnVN9jrhSG8GVQn93tS7sM2DaaUsWCqPMfJ5pBTtY3ez",
  "key6": "5XjsyhZgAT7nPAnC2WL96EHYo6sqA9t5JR9inX9R7UE2s5gRpcKYECyaUcwRF7QbZVBSmgugqkKLZ5443ofqK5Mp",
  "key7": "2Hzg5cWcSVha7kEmNcbQvFH5TMZrGhNJ3ZMvhwhzz3CYCoDpw9D9RWjGDo7BHxGFqXtj6KLAUsNkkZfm3a6mQQkR",
  "key8": "3u4SHRFJViFccKwvgkiRuKXwEFdb53kVMc7SsPBYQJdPWma8DtyF6KX9DckcN34QuLjsrTDbfkPHNaxWtKzZXnAT",
  "key9": "5RuHtdex9cjVmGB4SxPXEswWLEEqAWQ7W2JsTWy5J5CBnhJW2ER2Z4cbSbMYXthAPLPH7b3DGbrKYqCNPqS2EXGU",
  "key10": "2PuwHVoMPLQZbXJmkwZ7WmesDYLWWEmJBvbfFBY5y5S6QLPWXeaRxWHA7QeKuET2FLeUw286u4bD6KDXdT6FTstw",
  "key11": "35zQMZTpDh9R93TufxQbLkFmQ96EuzHVrUgMpYhTcUPvYTKvrT8HKN61ydHFseoR7eW43a353FQzJUG9xSNmQnKQ",
  "key12": "2DZx25Fm4vnciQ1Pua54AjTGjLQ4WTsTuPXAMt7KcZaTFdk6uXUtNKucBcSoYgmkqHwRK5U3mGDsRppGr7QBnC5i",
  "key13": "31irWSMUj1n3iWhGWmmsaCmFnGDR3ZQPkd7E592SqXJaNsnUwXuTyTLSMXLciJPZqeUV1BNnU5UwiPZwyE3WrJuA",
  "key14": "48WCBfRRfUyyJUt7ncf5pUgE1KhogJv3XhAyQgFfsvhVf7ixpU83cuCU2swT4P5n46diBoBmjmerUdv7oKwkUgnw",
  "key15": "4sTHcPmYZDdwZAq1p76i9p53WKwZAbxgSMxtjPbYX6tKzk9P2FadvBfVnZnuEhv4Tra94B1UjhG8MeGEccrJdhUY",
  "key16": "2yuKvC4Q8MSPfoojC3sNXmMXRy9MmarVHFi3C3fsdmSF88ay6x5d3cqed8PnZP2t77yt1KGj13JfiU7NeFVTQFhs",
  "key17": "2bdeFs466MnRCyscGrXru4jKg9GmwQNR8iRNiBfYHsGviey5Rk1jhMuJdqgty1xowcLRZXMHFNkLizDHZn8Aa1We",
  "key18": "4taiY7E7G7px9CPADfvSknbwcjytLjhtVdmCXp4i1H1iQNYHvjbdMz3ALuzwhQwGTZy23NJtp8ZXGyhtsHSB6xGK",
  "key19": "5yFCRVEvqDvUE68hDCBAViMp2FNkNNt9EPnUiAMthS7DDzjxupSR2u3iYNhNSgXQ9tBSWqX3NKrCcvrhrRGW9p3d",
  "key20": "4jDv5TbRnV2qMDrsmCyNk8q59uC8sqhkqpJ2L1d1Znnzn82iXj5tYUkLymC7CNVFvwPmsdnjGEekfuZd444gZ1yy",
  "key21": "3Sp4nD8kf5JR2ZBFzLyXbXeW5Xy8fVNcX2Tc9ttMGz4UGkaiufmp7P9dqS9WJN3R3xEUJ6bkFQKFoowK6a7WWygW",
  "key22": "5SrtfLLRfV591bndaj4Daw1SCrCzsMqw6Jg4SbpLa22Q1Xt7U9azWnFFKTfy54wG973dwqAMHCBiM3cwrH7mf6Xf",
  "key23": "3CQNZhXSdw6y7WTE6sESztYn4BbyiQcivLjRxNLB4m1GMDAmCff6yiZ5SriryZvWZ9Mw5feqTvtrSeA7kvoefB5b",
  "key24": "2ZNkFiuiQYuk4vNbBHqgcbWUPjA1VFA7Pbm63hE1ryK8wSLezs3sfV7oXfbHwEyDSF8xQECUT6fKVUoHvUJMMACN",
  "key25": "231sb5YwFWmMzy3FsjgTx8vPh75T4d68krXsmvNKqBCfPy92DF8qufatX9Twy6PYiP4ZHg6TSAV6CkRb1Ucp1osL",
  "key26": "3AuEXTcaUtsVF3wKsidrNSzmYerRBkzvzY1o6t9GNeJpa82nxnzNp7pVtkG3PauxdrJsDtA273q2FZ5yjajhfzuZ",
  "key27": "5t7ZAPM4Lq8nB37fD1HhqgPbZ5ida2bqwKaPvpVpR72JMZrDSuRwEDEXRan6W2aWPJCVCRNgafed7gEUWUaNBE2t",
  "key28": "2U8rM8hqBnqkxtXJ54DSzSYHWnM3tKaYVYzpseathhfsPG26f9RcmTLRsDPXRWxnCttmJt1UtmHeG9BZs8sKmsJg",
  "key29": "4D8LHcZMFuyZ7GjtyftaCghLStRrLcbef7mycVfGQDjHjk2RzpmDWzgVpDs9pWcua93VcafNfQ2ZTt6XVGTX5iH1",
  "key30": "k5j4sZUW3XDVXwSdyo6c2wsyKbeU5VmgJSYbPXEVL5pZpBUCsmtSBEEgnpJ19KkQHA3rmqKvmjUu1XqbjN2rFpQ",
  "key31": "5hMmVFiBodfThLZwoWHXTCTxtcA5WCoFu182LJ49CY3S9St4gDiK71XUhYXKsvy3tPt2RLecdPTgb6469bCs564E",
  "key32": "92JLAAoDPtWTf1bqhaqC87NK2DNQd2sSo4KgHYVFFKgLvd4nX2fZcGcDeNt4pW4NMhSAjMXwgziKkApG1sFsw9A",
  "key33": "ZYZsfbrnfwWBNve3iFK5E6SJqS53uM3a8NgdASAtp1N9jtEnAM2VQdGxcrp9FrkG3u8B6Y9A3giEWTpY9jGQiUB"
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
