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
    "494UmjfSzwqHj8mckfneCSVq75RC7taDMt6RX4Bp9FkekZjMMBFgZzf1Qfgtkcn5uPQpYfzJScMTEzeeo72neRV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A2q8K15rAfShsMbMuvTGd7C8yxa5eSZmbCpJdNdRy3xFSiavCkS6teti8XuZTzvvgnjVRagmiuHrZCRdBYjRmtX",
  "key1": "44GnK8af7BXJJfgMrypnfV8nR6WeFzSXVYFgb7muLG1p7eU9dCFSASL88TpTZb3B6QLKbgnWq3xXdZPKQwCDSqJu",
  "key2": "48pNcdtV6ETmy4NTyeX69QDEQbsJUadHUA3V5m9WGMpjPvEQw9CfNrEc5JQs5ARyMutmV7ohg2y7fHKwPFoTyi5w",
  "key3": "2UVDt6GDRPnQ4siWun7Yu9M9ApmzW4m15DpncPsP1TkV6GdDS8VDnd8XzJHex82kPkNFLp8dxC1yEhMmhaB5NFM4",
  "key4": "1NY7UxVhz2rG3RkUKsa13obJpCenqQh6c69cj4gsRoDYSkxuaZgWu6XCVftJKioQspUA49xDHTLUg8TBS8GfMMg",
  "key5": "2nL7XKUGsT7LEDs8urKLgQszyVyswkGGLrhbebdeuAeHqnv7sRe362cuNg6n2m7iV5Jvg8AvVpv2EyrMVae5gEg6",
  "key6": "5YCCDdnfVUPRyMWGkfLXq8vYj5hEVtkrgATBtY1denKcpPoqdp3a8pm7qenZv5p8tr56ahS3SARWhMGyL3wfUdLq",
  "key7": "3S5QtT5KJh5ZcjX1Qpzm2Z7aoGJTFewu33t3AKGv2Pbt5YVbdyc5AgvAZFy4nYsWWcNXpW1jzQCXUe98tZq4U8bz",
  "key8": "5NWhHHH6N4cbbK6LimckanRFN5MBxj6Pga2sDFnAr7kFb8B5cE9ycSeanrPSGvdyPqvwzdPHE4NQir9ntjmeFsbb",
  "key9": "37qxoZ68PLKBiE2Te4v4ZAPYyF6G6SqESHDsW2cS2F8FLSJJCpSdRXcy6RrKk3V1pi4H2i745riLh6swD3vakP7Y",
  "key10": "4gzRL1YD4rAv1sLP51TyxbjizbAkcFS3enAKAmtxBDxgnEYpKZwSxE54jd1nzFJAecYHU9tEbndQyZm2bQamass9",
  "key11": "2sCMnY6qkVAHrKJTgod6zHBodupJ3et8NbBiLahvZpVxEmGvzkioDMiXSsyF5oRARX5UmwGJGYVhzUxnDdjhPVdF",
  "key12": "3h42ta8jRmHGxrsDwfffEq2oL9Ld7ofZDiSbL7dfKQxk88SSCWk5FH65DsNrRDdkDw9Aj4QzSEq937VHPEBbd17J",
  "key13": "DihLwBYRgAnnBkSZLukmMSmjAJmuqxUF6SMDG7UenMnWh8jvUkXpnw3EZNuULG86HXxB8DNUCmK6TzDPUqs6UDa",
  "key14": "3W9V7AVpBzQvLZ13j7Jm8dbPSpBiAW9RqPNi28TxVUpPfubP5Q5WtaWt31pSee7f37gWVfdeJbXSgjeqS3tpfmxE",
  "key15": "4TbaHgvb3yqqhtv76sEomuPQYKgyb4eaGit8B9RSQb4QuZzi6u5JH9MWCRRXQ8cAtUcQS7PQw39KBuW6UGDzduWM",
  "key16": "2s3sePYYu6e6WFaw2tSm5nV5KCFocrTReZu5Z5yEGYpSfFsXZEXyv8HEbMCXP7j8ZTvLBthCXV7tPs2FVSXCm2VB",
  "key17": "4Xhi1e7GsrmeFmXHufpLVFbvgitmM3NPdJwnx9urMdi3RJM2a2LYdadzSFJo66LJJf1dinY2jKMZeofrME5AiG1q",
  "key18": "cNUumVPVdp3ofuoBhmCUHNuwetUZH98ipAEjVhscMDcvDn9tFsR2o1ErCMe75eMyRECUjE1FwUEAThQgF8NciCV",
  "key19": "5r6D51rpB22qZ9oFnG2NyKbXWGS28aAMzibXRu3nH7tU7bdUgZB69mNJKYDWeG7NS9LXLVabZPoMwG7Hf3RRj8Aa",
  "key20": "2yZWoNmaT35PNXdJWUjtY93azzYuRHZB8GPfHgn916zAwXiDiCf1hd2NbRvSxSauvzSeHETAwwUmqsFURkNQQFkQ",
  "key21": "514rLMHKi1Dd1AveXxi3FBUL8P5s3q2PV8wQaHPogWjxZvr7TqPzrRPWfj8xFF4DziV22VEc8AHcF2qDXS8o9yVx",
  "key22": "4ihXXdPi2jMcBcewiygSrXK1PJSx7WYLnEWapdTgi8kuA88gCUWKoUufhKhtteBSzP8W2zjfPkMJgrKahGNeyvUD",
  "key23": "26wLNNm6Ep9cjmsoGa8pnTHfXUcyrSsMEoQnca54qzCVDEZ4kh5ZAuFTViQM8nGpCNRsR9iaAMEppG2XoacphoK6",
  "key24": "4hg7R7jWLKyYsyPxkx2TjqvjLAYfHeLLdfABmaBp3PCzhK7VrEQhbLWyaNfeZFYVPszaeX8UJKXbgs5cWiXHggkK",
  "key25": "dnwJVRsCKSaR1GBUUMp85kaoptdw579DMk1dCh5xB8nPX1Njwo13EPAT7DF2jFXCUWD3RKw64QprTdK5YX2FPf1",
  "key26": "wxsng97vPCiuyjJVZygVVpH1iqF4VsckNWpn45dxfEnaEb82YiXYwrww4dwd8puGq37fTWnx7oqNXn6PcpAerVC",
  "key27": "3gNv5MXbgMGKttFvKjAYQnDsBj7fedSfJoXiz6eNHG27rArvpSXT88ZYuyYags1G7G3P3VJ83GLsvRYoK62Xnz2Z",
  "key28": "61hZJhNJURusC9BWsvbjSRVCdop1o2T7ha4PPUjYRHNHheqSX2wBhgx2fVJQHPehNo6mFMx9oqFmSqkoTX4ui7rq",
  "key29": "4d25jdpNwMMRz9ChvSHzsAv8T4Vki6g3fMHiz93nZYerMM49Bha9WnCgwmeh8w4n18agTmxPsVC5NnujXAeF6AqS",
  "key30": "5YmyQuRK32SB15597q5GxgFqHCsTHdv9fm4cxJyMokbtZ1kfW6btTq3ZtHHd46KV5hsmaVRuyXzt6YDgSpdV8uxy",
  "key31": "4EAqGfo3wdwHhgsrZVpyfqYssaSGHTj8vSsmAs62pzHRZ6dhqD9LwzFvZRnnjZ9wF1YdBSr2cUaey3sQdDpY83n1",
  "key32": "4V3Q22fcxKwAy2DN142F88vUtwUx745rr6NLvFnb9oKKFRdEQe6VEkSStuGesGqBhiFKnWPrmGtHBmmP1GPDTbks",
  "key33": "2YXpnRbs5Z5ovcrzH2Qs6KDr4pk6z8SgmUwSj1rYSfoLJsj3CWceSXDCwqBZmYCBZaYa3SnpXCJ41TKBhyYgwB1z",
  "key34": "2PD2Khejo2U9m2E6WcBA9CAU7rEv6EUkP2oxQDzX6uwpoTVTeYzvsnNwrqcKSTFdFNUCm68Na7UDR3Wc7asPyGiR",
  "key35": "3Qha9UjARQnpaSNTvhKL9zwsGrXpJtTTrBA2x33j6fHvRTxjtzdbN7HAFSkcqaRvGMkTgb691xTCKVQ3oRbhyqu6",
  "key36": "uJVbaifm4U3NZT1bKHawsqboSStg6BanJCX4CyfmuiHaDLU7bunUqFjydVF3jJdjCwYuBuhsQGinkTYgGDZrqQc",
  "key37": "2MpWRnXSB9KSE1R8Lt4DqUTQiUBCBmj61X7DRY2pPgBT6aCczXSMssKxGF1QvqYwkaJoi1fP6Hj9iKKx9sRp3ivt",
  "key38": "2YNaAokiuCjaWSK6ecg9XFq1YrAFNnxwRWACP5LiByT61ZVbzUbzHo6MQhTz66R9S7RsWUoe2gsrLudGba4nEgMt",
  "key39": "3vpK9ZDqAKmnFrqQjRgCnRtZ7gaJvSKifm4MSmud6WEz64JEAZf2YR2E39zfNB55pdqMzBNqkZS55dY2ZqzdeXXN"
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
