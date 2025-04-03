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
    "5NU2r6uaypj7xVFnRG44B81k3AmtuBVqqh3ompEcp3ms16ccBJaLCb98531BiaTC2Yfh1jBbH96DjyUAEVQwtXi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wMxh27i1yUHPuArdkrTxk3jXJnYEvuuxR5he2eGKSiYpgsNErVr2caZk8YaUqV2U8WWfZHpNYtVQRDYcReccXA1",
  "key1": "51e9CJpSTCrCAZdXAwCPa6DrjwsAfy4SSjxknr8pq55GhWrYAT9rUppbJfXpAkveto58uAkoFBfVaVfrTBNDF9B1",
  "key2": "SGwR3vQNNpWbchGrJ8HuGxx47KtK8iAE7eJ4DKEcKCWeN9R2dMsdYpVFspT9AWia4s6cy8CrT9Ks4m7SKomYNif",
  "key3": "63vzr89DCouMRi1ZpDmqMuZKfJcBnHyfE7y99MpK6t5how7PKFhs3JD2kGRLCxMGAkb7NnRM3DPJYeUFa3FH67WX",
  "key4": "37iRoonTMt5LDRxAfBa5JUmkhXiSuUpRUCUopDVpx98KEJUc8z1PNu1u6eQo57ijjLYRAS78ECksTYB6WQyRDnWJ",
  "key5": "4KnzkGPrhXNaf6zzd2rrvnvjbJzXjD9TWFDGUNFSrYrRoR57tCLQfTmt1CPYRv34FGdPBKWSuqJdQGmXEryxy2xH",
  "key6": "4pDfoi6FFVoGeGhmcy72L5bPnjv7HbxYnGpX4S5qP1z1kutYJgJz2zdCS9LaJ7n9oy8sAhNAwequopgLXGd9NsAV",
  "key7": "DgyEJ37CsGUWCW3sscbekXd7yNB6SXxFZ3ZbDzSiMN7KV5k8PrJJJZdBDUpCzSGGXaBHhiypp1i5NfvbQpLTjbi",
  "key8": "3v6NmGwmx2Fyn16KcK7NoKeu1ZvTLU7DvKRYGPXp5dtR1yLJRiTrcVZjrbKwc2CVsJbnmjWhnBRatNzsikWgdH5h",
  "key9": "4fRW4JoPbFLVvGqK4jZBBLuNaT9sMGWdMWvmciPSUYiE6zMwK2nodRnsmX8uuPP21Ra6cwwWmfzTNjpnW1Wn8Dd2",
  "key10": "5yRLtWx6kxocViCEypqxcvg7mKkBnY6rTteXzxfT1swE4Bx4y3e9cpqfHFPHtnkKUwr82N6FJxgJzazkXdMVEopm",
  "key11": "26BA47PsCZwFH382UAAX9FQq4pnzEJ7zAngpgaSgtPVdrQ2YDwrdiMWqqkkzoucdcYX6soJm34YVbgrJiMD6jTbe",
  "key12": "5crx3wuvZSfGegv2sS5uy27NpYiw3cMEqin133E3NwZRPYXPxPsXJKqUGQnsF2hEuZfR825UKN7thPKY6SdrXnUN",
  "key13": "5qonhAv2KzwW6tnDtb4Hz3PN9fSjfA6UqHCeHV8qRDxoB77SZEfG1p4PtTXhe3MZNBX2YjSrR96xrLft777YuNV9",
  "key14": "5m6pgk2QC2vxzcVCvH37wj4x4UWft2wmxSdu28vDDHbQ8mHiifNdmrTuuPLzJMofcXoQJY9ebVgU7bgFX9usBe6",
  "key15": "2Y5SEgJ4nupKh3dyaCgBm4tQn7BzX8QKkDbVVdbzVh7DGGHGDr3WZF53WMUByRHDpqMHAmpDFjju7wu7tWYpHfJ1",
  "key16": "ZnZ9Na1q4ecEfkAHiviSk9opSCtDD3oGR2LJsnPmHZxvSkTPxAAN7LEYM1mTqhsJGBVRAYm1uZWfqBGcXcBFJQ7",
  "key17": "4qZNV5L8xMtRFC7j4CQyJFHzGNwq6YQUqZ4LwBwyWNWsQ1ichX5a4P9jgofsrZrRo3D5Z6YqfiDRMye6ifkqqWp1",
  "key18": "3Dbyk5JZvtJRPXKu1p9DF9KtX4Fmjr4Q5hNP4fgvsL7Rc3SvUz9m55dpWSrMH6B5qGmXtQqQApgdYKbhRAV92yr8",
  "key19": "2HEvJuEiKaFaV61uNxW1fxEUpdW5xNgBJoVApEZFef6WWttr7hHcvYtH3PhJLTwvvoJPnPzXrbVFfQoU7eMFe1Fx",
  "key20": "igL9xncyWVWGMvvaWs7FVGpTJyy4EFBXX2s9Snn4n5HiGwPkYBsmSMU9CMQ3LYwAvVYdFQ6RAJndqW1k7YHbVsu",
  "key21": "2v6y7H7gnxoGwVj4LpjgEjBmCG4qnFpQtGv5EsKThkU5NhayiGqZReEFByKEYvVZZMZySSTnHwKtSko6JEn416D2",
  "key22": "2XHstytuswP4viFKx7sxHojSrrsq3G8w7HceTR9uz6k9ByWj6M3cE6nCrmYVovT8LonM7emuFGg5jo2PgzatHAWc",
  "key23": "2QTr1kc4kNMiRmM4LhabdwmN64eRhQ4zx3sDQU7fyjKTvsRJFHQ27Rr4a6onYLdPyf3kJiFtCyN3GYQbiN5Hdua2",
  "key24": "xvxXkvM1EZXAUUhRge7CqHYCZ8SBPmyFiJEY4pXYKBCBMXhQsZmZVVNePoUksg6xDcuZPqWGwGTzEoAKoDbGy9e",
  "key25": "2HxCzXGgVUYBsMAyFp93VLLUJ5ysiw1ePZfbtsjki1ZFZk234xiV7EdPMCxjoXNwSC4cGnPeF8xGLcCZmka6pFAv",
  "key26": "4YVdAWXvYyUweUMm5qCQod8pWUdtvx2nzrc58iDLP4fAu2LUhFsMMJBMsD62KWo7vRcJaoPYj4T2puYz2zLo4NZR",
  "key27": "2bmAms7TqPDooDHKc7E7sQBatfLGtKoNRKcUWExZFuxtFysvUrtzJ3cKXFKjnmXsuwiuzDTkQ9ajvm1RP8jJdrmZ",
  "key28": "5U34wqsM1PNd1jSHT8mbEiXqKd2n1fz5zWG3VMAWDWuGMKztxakiK7N3kYCmn5JCCv8CdcDEQiDw6v8DvEv2jqPG",
  "key29": "3Y1ANh9X3Utmj1dDbgwkKpY91AJ4RofwJndSQUyjVjG6kGchqXXrqiMhZUTSKce4Wb72iXMp3YbUgWGgK1eTisfC",
  "key30": "3XM4Zes32QU3DZcMzWDAZC7ZBJ1sLGAeQZcK2m78FMhWzUasgLCxoHDUr2W1m1Bd5pwwjtMWFBLWLuhPU1yGFcoK",
  "key31": "3xhtoXJBC4yxsppz44wsx7fyFaQeP6aAXZGP3nLwmMhmh7JBDWGG521aCc77wBot3m6GSoADRqwCuQv6jgLXjnwc",
  "key32": "4C5mBNgJ1zpo14T6FmPTkfskD9tGib7RxPJY6jSW9zu911dH74JhDbtU1vrojh4cd6PmXS8RSeUru4PVoMmvEB8M",
  "key33": "3PkqofbFFniULS8dafYrogfqsxahECvnctGv1Vctr9YcxrHPzzBag3NnzCrQB4GPdTq7HzqvEFZ4rHjMYJxTPpMY",
  "key34": "34ub9oKm1mbbSgncwyrdHsnut1spBVx3gEeSYHxEQ3DFRDBEwzwTVjtjb3KbtMAXb1zWkM6AwCCnDuYfRYB1vfDj",
  "key35": "3XMDezpFcG52jPXqEXpVDFwzkJGdD34ghf3JQuUMoUR1h594TZ2aaEvA7kAsvA1J5ZyFU8fXtARPFaTbTNSGEWGQ",
  "key36": "4oEDxRpkUmSDkUbwwaeesRDY5jg2EDyf3AKpLwzWkX2ZWcrs961sh4pCbod7u3VVDxpCknZFeYqNCG3B6bcCqJu7",
  "key37": "5M7aGXneo746fisGQE9EB9boHqCRYMKzPSr3MEXzM72Z2G9VQyCqFYHEPmZRuuX4pTXsndKehGCWtPHXQzEXVLEf",
  "key38": "vcupTzGhw2jpL51qSqFmr4pQowh8dAAZQx45BarXRZwH6jxgifggAbxeaTdsVDmPhck5Gf7mEhT39Vmt2ctQ1iK",
  "key39": "5ETtQoFnrtDASuEmWv7ELF2K74BintBUuVjCRnCBNCqM91xv8eg4AFAR2uApJTrk5MCMo1RgmbFM6mBQpCmPtSZm",
  "key40": "2ViaKY8wGxFCnnTjo5rurSBUuJN3DpoYvM3pLcoJDW3DcpQVhRCrToj6wHWUBFWs5PsJ8yPgxbbLbwiveG2nRNbu"
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
