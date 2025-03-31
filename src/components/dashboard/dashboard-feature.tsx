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
    "4TcYweFHcW53za3wscRGMrt1xysoVvFuzDxrVUY34rUd8UnAaDmqMmA35K74hHWoWJNyQYFxsdbVemNqajyVWmR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZfTcVFL8Z4oRhrjYEewq2H43qxbpyiUyC7tj6KSRV3CQvNibU8pSSkqusNRS5dfLrNiEHMKFVwDDwZM3Dh8Ezfs",
  "key1": "EFpWu4rZXegxcWbyJMQRa2fk9DcMjHNfCCCd7ADKuHQe8rf2y2j317xgrbTcDCkCNhmNtP6EKFLEpjqNr7KaeLG",
  "key2": "58EdKsuX7DDzzgWnKzeyb1xk6d57sd2syiCkLyCNoJVSWpPrhzYUyDF8Cxqb1vZe5Hw3kcxhaf4m5oAH18eR3MMq",
  "key3": "ZHSp8nAHXmyfi3Ga8txZvryc5hfd1rs3vsX7eyYCtE3o9r8ivx88WFy7pM3NFGebffXwx5jesjW9nx3ucLSAHzi",
  "key4": "4muYuvo5FUEfDdu7XjiznmV1r4HNstNNBiLFEhSmo6BBNUG1DSzQbQHm5KNvAQCiZp7iMqnExmi1jssSXPgTa6L1",
  "key5": "Snx2n6iKWKeijrgDMnGPet5GtELhabWZhT2QaNE3pJy6jLuxdjtm6AbLwmjXUwP1fJRmL8r2xvndmUTbga6QsGm",
  "key6": "3e9pMhXki53Lx6xe9458gKsHBXZMRe6mH7ERVdG1K4YoBSxxN49HiUsJrTrb4krTKAqpEMzbMiPEQt8b1PCQy1p2",
  "key7": "3kv3a9uTQkzKnzaosaRidagwv8iaRjNUucmtjnWF4xLAx7EvvTEgSu7EicpC9ZGKvAicjoV7iwu4PtrQrMbieLxt",
  "key8": "ToyRX2T7FEcKetnLitLCVMtCSoKeRyioQocUpxzLSqrWgFpeXXXzrLkFnsRErKx5SxMup7PVZ2gwVQE8ZSG7VcW",
  "key9": "3Z6LGXA2LaC9hGPqMmUR4qV6bs3psTxvub21dTeitWhQ5T1RDeyDD8x4GimJhWch92DzGAK3CoBEyCLSp7NJPaHh",
  "key10": "2MPiRuWU9vyiWu61uQU6EXpHaX1BWKvCnpmLgs9h7Y8bkneTYrmS5LBst1ebhMtj8DofiaPneqBLeic3rsy54kLi",
  "key11": "44Pz7tkmY8wt7R5PEuSUGpQzzwc12Pdb5ZbSAJT4deZHSnT9thw3i6qwFFkRSN6Ddb6ovE5kDxy5s4DsHfbNdkuT",
  "key12": "5DikG5yQKVKE78W9gkcNgKNkAsXZWhk6xbMXtb97Bwj7vF1yxWr11Um2pjoB6n2TSc22UaeUDHkSbnzh78oXkUux",
  "key13": "67danzMCFfwJBvpqD4woTwHJ9swyW4TepinMTmf2Jsh1tpxa1wkjaq5y3tXxPTwsG34ZbPZmbJg9DmWyLhvgQz5n",
  "key14": "5NQ16NJAiMW1jAfVzHhtn2qjxuWUgs1wEx7zawXnk9dVZabpRXxzuZb1dey1jsQFuDmYiaD8YimVmEssRN4kLLDc",
  "key15": "XAwfcEaKrcA52joES2QNk9dKugcJ4HWnc7ZgzjWDvWV4gcdcMzyCqmmJrFXdEykLjvxFSLWUJHZku3RDdGnS46Z",
  "key16": "2A8c2v8xppFRAgukaevWLXKj1fQPn6UexNZBx8N2ww1AfPXFfpQ3Aq3PpW9RERMgswKtQzq712HrZFiRzMJoZ7Hp",
  "key17": "2yyKEqpQUGmRcoFRDNVL17pAmpafhG69DZPGF1Gztpnt82kJYdy2E6vUgs9D8Dzj8pC2NmQr3pFwxMSYgdK3K5BU",
  "key18": "2oswhTaDCnhRAnVT5DLJFLhVSX9bmfzZwypek7LMEK1aRqmGHwReTKXWntcAHRMA53nyfjukmYcbe15covCvhCz8",
  "key19": "32nZKK6q9xfjFwhnqWnjyD1qMHuWJgYbnWaX8q28Djz3XgNikZTZmtDMj4cTA9S1BqNTbhfZk5yefjZ7Dp18jMt6",
  "key20": "2v4VzJXqjpiQ2vYzF4eENwCqaNkmPgsNB4TgPRP5R1pS8ksNyj9zY8twQePgsNTs8nvdiYrnfQ4GEjggrv7jBvWb",
  "key21": "5iBvq2y6MxtFRtxMXjADtcD6jXY3ELiqYPcqN9xkBB2EPuUtvC1K2B9oABPbEzUV6LY8TtZ2n2K6K3hpdyDGxrn1",
  "key22": "2BzK93vgNrZrNftWVrFYpg4292eXudjxzpNSPF7DLop2fdF9vXzwyHu13yXgsRrhD9AQBWDgtC7fX2LFw7MZp2v4",
  "key23": "3fitNx1dNiXBh6YdVnQjz6sscrWnnbPc3EmEXcLJE4KUex3F4LWUdjhNMzmtZa7tq1oJ2N7AA7WwSGxBVZJhkU3n",
  "key24": "3xn6A1ick63TyVK9Lot3pSd2GiXneMx3DHLqH2U1SmidGsZTpLCctZ8kGWdTbjgFGPBje1BHhQp73z89KVChjJNv",
  "key25": "8XJuQdBWaR8UyjtdTR458x6fmBmGb3VLmz8HzazJfzf1seZDnyCSJkrGBuzqySAddSjVqaT3rfzuhzDh16fjtNL",
  "key26": "5GfZdd7aJefjxgmurKeUWxGhdMAK5CNanCQiWY53ocGJtYpmZBcaKZc91YHTN5MNLpdZkfAcHWD3Kh4CQhv2VzqM",
  "key27": "3eE1z4hJCDVxySuZHq87MCWR2b8Qd13QMN3ouK1pX9ZT16anvt7SDSap8AEyHydgWTfB3V9NBMQQdmXZv2vLoTQ6",
  "key28": "5ihVZabCGWWbto4hQhuuu8V89ZZSmJsMpegUE2meQv26hGzJwPTGP5XQztyGh7of8mTHBLP4ScbU2DcDVtERH8xB",
  "key29": "5Gs6Mm1bNKjnZDdBXNFVggEr75u7pt4rXtX9ktMEVvQLWcsgXRvcXcL2rJYwofmktt8sKbiWRDs9w6NXWv1CRWnc",
  "key30": "tU4prFr3ifP5xsVrs46YsA2T6NQhkvqHttnwCeKpkLDSxsjjd29RhuAJqaZyRzjoUbZKWaqdAwH1bR1kUj1d8QY",
  "key31": "53sMVh5wmRuotSXTMPqrNSxjUHHenq2oYUDGHy6SAghutxhyaxEEJpFGeWxYSQNtRoTsoDCVqsXibHx2Ca1TewV4",
  "key32": "5xTnaWkBY9YSyq43QUiNLEZjm7WbH4ajyRwQcgrnBZFMtqSxzvrzw1qKctgAAZEvc6x1KoBhB4Es1kMPticazv97",
  "key33": "3jM8dp8Lz696gDqi9ucBniJ9GzNemD5VTbS3fCqvRwKHSKqGeTa8K3YhSthYRprSaY1WfedeDHhdCYpWLKHpxiKn",
  "key34": "2y7Sgriq8r643wZbWceLsRopAjMHGStaGw84n5JDHe9nNMAzzMLZrXP6Puw6BxYyFJZg2VaEd4KKVS9dUJsE7ox4",
  "key35": "5VP4prpXpQxLFa3ERbRuyAdk3rBheF9Zx6hPkHzPyiV6q1TBfS2PYSdAFLk5isey1N6hCZuF252Uh949DHSHRQMA",
  "key36": "3siBkkZRcxkpKFzLsUD7jQwSKRV3wiKooLYAu8tuM7myMCuQQ2rC1Ww2KrtHzA4aZsW3fJyJFcbUhuPJvNgnsXdZ",
  "key37": "28rShRxjCK6CArE6gQDWoQ6uhZmnTtoGQb2sk3vus442npu9tbKBtRiERemQsivgreYX6dcG9na7niYqsvEBCNzA",
  "key38": "UnqVa861e1BYKtveEKzi2wwqM3rDjM1v1soexqVYVrieNZiiwH38amDpztjDGyjydEwuFyMExXuoKEyWoGaWc41",
  "key39": "BpKJ1vhcZf9JwSWutHH3niCrttgKetrkpQhWk8gfLQAojT4Nownymah3D1fxLpdrHgZ2SF2ZofEFx162S8sDcdF",
  "key40": "3CshjBhgExXat5ZDzbZKiKmhxp4KyAjmNNdMfenssW5zFizEiznWtCNL7QuZABnLkqyvwiK8cghT3vewg5wCsd8C",
  "key41": "2HMsDGpkcYHeNCDVSe7jSsWNuY6AhbhHmEyJowoANbf2M5FCjYvWKKegYMD2xChagnoadMydejt9oHr4wGU88WAZ",
  "key42": "3x8wnVLjQureh6yF7h8YVmXbkkAZoSfhHivs2CX524BTE57B6rxC3V1eAt53XsuWFJMijLeUprGizrtQr7EXDWcW",
  "key43": "5Z5um5jZnUN3DCADM66y8WfW8Sx2TuZLdBRQvAaTNngANivWigj3YsLx8ttuW1DKBDYdiBkHbi9vgARRH6VhaXcx",
  "key44": "51KEDpt96PCwoyieyzwQmKf7AyJF4M2fTpQvwCSvf7zNZAu4egQ9KuvCx6QjHUrLWNgYN4St4BtUuwCTDFWU3M8S"
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
