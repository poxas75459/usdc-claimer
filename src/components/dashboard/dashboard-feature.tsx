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
    "3JaJ4m9nF2hdD1tSjhZ1QFSUYJqD3WEXvg7tUBTX1U39jdfQxmFjfKzVJj4h6ZhNNd9UvGoQ41cuKgarJVpqMCdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rRK6qakZyHm1PSkBEQT1KjQGkS8zcGqTqSGDt6NSccRmn3d3FH6nb1ZkeMSzVyRc2j8jzKyfQyfSTW2qD6fQ22y",
  "key1": "63DsYyiKmbZLhqX56aUxBS8gTXKVkXTjV1AwfrV6PnogLvtdTkiQUUgvLjhwLzWF9qD5QphK3X4A2wHoTJp5LLr1",
  "key2": "2FuWdQ81mjArfg5DWVTjHYPSw82x8acGLg5tiifaAE6DFqXXNAabwqbwJ3HzL9PrwyNf2vKjo1U8GXBwjeXVdH84",
  "key3": "Te4vTnEYRFZgMif1LmMHUx9v8iFaW2Uzp8PQxm8UE1k8ytnakgcdEbS6cAeLxoB5TbcceCQCJgKzxTLQkrKRkY6",
  "key4": "rUq8RVuJ17hAjnuKwejeeVaeMkXvhhany1hxFVHPvXJ3K1qkMaeGjhCoayEbu2x4L4uTjMxEmfBk4mtjkPrpCL4",
  "key5": "5oxny2vb6hcWfjFKdNQvZukA5uySEH2zbUXCPaHXAhTF2AxaTNZZoAd1f6pxKUHYTF6xrcY9nuBWyWsJppcuaQF2",
  "key6": "27dPJBEyZqJuvZkaTmNH85wxEEdRu5RVesyM3kk8CokdTU2VbL9XxWxMvj8SB9M8DJZFtw7aEwyLSJudoAyf3ePU",
  "key7": "zuuhfopmCUnwpg8ZM4F7wAgN41bTkxCF4r6vUYkxdLsSBh2R87DTX6M7YYXJKmNC3fJSYK4jPANiLx6HdZ9puHt",
  "key8": "2ywD9ugWFJTDmU6mg2JQMeG64yXmSDeQH9mxkVKtaDpwguqqaU7GGBTG6x2L4HxhRsv8rdxD2ugM9u277P6uLCvc",
  "key9": "aPxS4VxbsJuD78t3mrUF8jNYqmGM4dyYoDUefbuu8p2YQLt8JFPAN7DYEqt5yZrZjGdid9e1gor2e2RJf52pktm",
  "key10": "25Lt1XQCmxwg5Ho6T2vYBxGP4RJzTAfzodu5j8WjWm2UZmcNexHRDdgtNR4a5b9P8xWy9dzVbcJhVUQsfWmV55Nj",
  "key11": "56AMByJpgwE7fRFUgCLvcanuorrVfZjneiXAqhxQqMU7qXTbLBYu4xdrHc3hMGSueyR2QwmqzdpdEKo4koZVfqbk",
  "key12": "2XqWm7qveER4ASgZ5GuCmGkBKoaJbG7JeMBCg2mhR7AJRoGcVpWoqtVzWutgK6uaXnWwQAzZ3nYq6ojSsiQf9rpa",
  "key13": "25EWTLht8wAWfQjadFWU9asJZzRyBQm8S1M3X5bZyALfsDa6DaVV7CDrMoGhUmW8BBiUumtoKU7cnJf5qtY1qd2k",
  "key14": "a3mWphfX9yrYChMZ7zrtWQ4ieiCoibZiWf2z1c6QF38vqm5k874CNJjshEcpruQdvazPzHca6sspSPcBftxtPD4",
  "key15": "2FrnxYxWPKkazJqQLpz9YRwjworaqFcvYTnerfEfYmEaG1jqAMBih7qvFCYuoZyWwPT5cerCbpMB34VbZQnKDHnf",
  "key16": "3SwTuSYNhHJPYzTc23UE4zq9s4V5e45TXaeNDbhLPANW6ioL3c53u7n9kEnJWJChiSjuiiCtw1wGL7rMjgyXQmSq",
  "key17": "5EJfLGdZFTFaR1KY6yF7nas7vfMe5jgPYMDXJT4vfTUwHumpiJKcn38tQLQ4EXNTZZcq1mG8XXu7e4KYJ5rVnQTn",
  "key18": "3HbSdEf8wUnSW84TJsvkH4KQxBSD7sw36xyvhan2wS1iGrDUyKJAbmnu9GTeJee6CYBXXG6Z7FSr2u255p2Scd7p",
  "key19": "pAreb79jPDhzectEivDdKt4X5Jn7UuW5vMwWmZRrAaxuiQVUFxUpoQoYF84RZaLVroooQW358NrsvLSmJoSs6RQ",
  "key20": "2BZG4bxnU3nv9iFUPgo4maWNNogboWQhJp5Yu1V4iaLnotQ1WuqpMJoqzLRz3hc6HcjWd5KuxhsxBmiT4bTodYT7",
  "key21": "5MtCvcsYkMXjdxxSEGbUhWAPZFfS3jiiNWVBJ4iLPZx4pf76scx2M2HPQ23UwVVwyjPS59cZw9R7XN1JjEFnP9Fj",
  "key22": "25CUmPz8a4KcFuSRjJpnx1XnaqHStc2DP8uUbRgRaTw7zTrRzi6o9iMkeFvXDWKzMDFJP4PzWX8FAtM1eqkRUR3P",
  "key23": "3KyCR2ZFCwTQApSCCEgYQy3FUX3BEbPceg85RydZLDSwiYYeH8G9akM1gsT5CzhNL1fJHUTJPRLUZDZrxh6v4qon",
  "key24": "3AX138RphXirGVVRUk5dgbg4kQ1vXkeekndfoh1pK7CacDyZNr5Fy9R9emUP88gk9kMDxg6dYxhJufpP6R8RkbZy",
  "key25": "44Tw4V4mNrWH3PL9uadTPHyUA3Pm3RPJVLNxk72ny98vRbnRkfCpasXAjAUtdZMGp3t2egXhTw8HRPEt6MPDKw89",
  "key26": "B2TP4M5xvAAZbn2iFYQfwYucjRvmUx6kRTdReJUo4aTNsmBkJE61La33gTVkLJfnRnNaRjyCruggLZpLbEUrMtW",
  "key27": "2kSEwAacsdiV5bQ21zksP9r7aRbXibotgeutTkLPz3GWtmyD5oc6ZahwzSiCeW9J3jibpF6ChaHb8ahBdD7AUeSk",
  "key28": "4udemYoPjJFo59sLzfn2fAUu2NAYwRXaeLXbyrXFnqBbdCsvLFtZboJ6wgRWnBFBZsKMdw5CednwX37AhRww3pDC",
  "key29": "4FCHQbDuUa5KtgSoQuTh57XnCkWyacFMCAvUYyAyouUhTPtMauBUn74ib2dCtfM2FuBfa2zDnYKFVUcGaAvscaA8",
  "key30": "3xX2D5D4Hx16B3rYLqghAGau4dawFXq1BwnDy2og9gacQRsoubXW8s1VXY72buB1rNeWUme79YEX4hjuBecNbTvN",
  "key31": "2k3NPFmkByiipYiZopB496mrxDVahUjpBad1Y9vm1QWs7sjwXUN7yHHJ431NNvCnHJFMT8tYXMf1myR1xZd7L88X",
  "key32": "3ZwCkpC6RqYtiSTdtL5VXg3ohuwbAG8hVGihh6PEFG6D8GoHkjpQUK7ThkPddpvEKrPPy6Y9imsiGbYGSMRAe7g1",
  "key33": "5gsohm3rHv3SfepdGMWP4J7r9TS1hYiEXg7Z1ZXwJVYMt2YBYJLtxbQ8iRvvBtoeQVYRjZpLR4H5d1D97txuRyCX",
  "key34": "25qFNJeKzjzfW5uV4Ce3YKpeehcPUyykzFSbifVgmEYTyNKiSrrxEBNjJkpLQ1QTJN7Nh9CscCefRdy42qdWUQS1",
  "key35": "21vSf4BtfamkxFAw4MDUMN3w7BvxieccunDQL4ZaW9Z2A1zMjyDmTf7iqZszL8kVaZftvv2DGmpmmjDrS53GB9rs",
  "key36": "4yhu1ydZwpS1DyxE7k2BCBVTxgpUiLfg8RKWyHf6qiFD8sv3YtkFYphXE45NzBLC5z3sCAbP5jogPh8jVsB6zLb9",
  "key37": "EJKiPsjiy1vaTWP1p1CvckXh5FsdmrBbSc1dhCD5U5y4mVBCQHq3ubXFM5APRUAhX2h8ffDGD4TaQ6uapfEBPd4",
  "key38": "FaQ36gDwodWMGvYxvU3SAuQCEWj4tpBR8kcwS3CwroB5ZahZmtpWhWf3RPxNX8ysPeHboMEpGMbA46hWuxTaB6w"
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
