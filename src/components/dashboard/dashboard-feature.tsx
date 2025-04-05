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
    "4PDzXxCtefsvjMDaLFmsqj9vDHXnQ2Y9uu8EjBq7AWSyqyjULPuWhauoTMtTSF5xkM5ZJeorLuE1xshLf3jriNSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnmi6sGQVztUCuErCkrxAG5SkMjRexMM9xrDN8oxrvyVCDFhHnbFLnjpc2VK8QFeo1AGwhTn8Z4j9zhWrnKf3Bw",
  "key1": "5wkn49gYy8dBY7ANPexvKHCXapdsmPYvqipvg7FocDBJtyhq8THEceQzshNoSjTULQgwRQVCKozmms8J6SQVgQtP",
  "key2": "4ChMziP88gr7VH88W3MoqM3qfYfsTVtYW6vBuj1mpjXNPN8prmDX5G21mzpV1dusTEtBjUcYLcrKK1H4hWc7L3cp",
  "key3": "3u9x4ruZzcm7G71AzswUvc3P1jBjmPCZhbmvnS6uBoa5XtX5oZxcuAZ8PQFxwur3RnT1iT98SMjtco2bX5FtAWG4",
  "key4": "Y3v1gDukzRQXhdGTP4nireAjNSuhooXEKEWaM3febUZe1m7d6qnCSK1HuLeL1yDrqTxYT43U26yP2vj6iATwfqc",
  "key5": "4iSkFkTbc8nFBMU6bqoczHs5jF6A6vyQL4YSRKNTpy4zctPZxqRqCi8shYCVJZ754vsJ94f45NGfKDnrQtT16gMc",
  "key6": "4TFLPzjcrMCj269zXgzo6ez7z9RYX7prrmnS2BYm6UZrAb92BPoQa3Kadff2pzMVjbxzRJvQz8sbEijECEtkNTSk",
  "key7": "2A6TU13vHEjnkihWrcZp4MKYUiL2eEMtxc8xWThJcc7MRKhbksnbp5Qr7WH2HKryV29Lp9UYsRTEZM3FWDdP6kgU",
  "key8": "3eii5VqxAoPvGffgT1GqCGmfcTBA3AkNnJBpjeVofX2fsfHBjg6d3TJZb8PovJvE4LH41j2pkqEe3HzRrgU37T8h",
  "key9": "4eAz83PjaxUNntGEBktuv4s9AK6sGt3DT9GZeVSZxnavPwJBSGbsAx8YtsnL9MsSadeu9xCbjAgdjnqbHoSU1BAj",
  "key10": "66X2Jewa1PJZ5x6ansVpAMfPo516SVHYAms1XJyYL77W2zohfBEnmvp5b2dLEEFqTdvwbG5gZRSCS4AcBZkdmioX",
  "key11": "2ejjuGA2Q8YYftAUEQanktXqwK3piC3xbvLJkdu3zk3NLzMcjZxy4W12rUeJk5Y6bydZsRCgB9JR5uCCX2YbZMgh",
  "key12": "ExoxqVMzoeB2zKbTkYpTjD2qa3wzaNsYXZnepSGZAtaExmogEfeAYG1htF8qqVpuPDiMZBKLD48ZoBrDej2vjWN",
  "key13": "47FSvGUPy9mmguDM5DtK94XSCPdtMVszKBEBzqxMfdsVSk75LdfTnx6TNn8GX7UjtZgGuQEbUwpfRYYAYbvkpu7L",
  "key14": "3tBfGioQbd7dyC5EWZ2Qk5XjLx4LQoEJoEtfChHHVjYFEmHtr67ULkwtb3jA85om1pqtfXuAN5wwPnZJHu1iSriL",
  "key15": "4yAz3xyEYLMXy7LctgVPuByPFv5oEbEG25vuSCzLKbaaJjTXZeBMxYJdCxeK6Njcnv2iu3jTz61mzxRWvK3NG8c7",
  "key16": "CDRg1XqgFfDE4CTvMGvsxgqKygPXhiN44UWwYMQ2rsiwAJYNQHT5kRFePyYLRAycpop9XoC4urca46hsnU3qLYE",
  "key17": "4SfMj852AWGMVEksbtb7Ti85fr4Yfsq35ezgv7sn3GtMZGPsvPPC1yWoQQnwdyfk2scDPofCbW76QvSE39ri8j8k",
  "key18": "b3eWZSLaPDmaX3BUQotgT67joD2FXMG6AAJEaziENgWAvJfQDgB3LCRtKeTKuzgR6H8ZDRydoYgwUYZBrLL4nvq",
  "key19": "3TvHGBjR5YXfZvCx2Xi54SJPS1FxrtyCd42r5DkocguaPcnp76N9LwLSMceznC7QXfUQ8NtGMbTWGYRTyyC8L9N8",
  "key20": "356KPDRxtdnKUq92vKkXiNmTaGPWppc89f4Y6KLZ2cc73aAiRPfAe4KmxypQoRQhuGACnrup1JC3YsE1t8HPw2hZ",
  "key21": "2zVmEfVvahAx76Szz1H4Sou3Gzc7HqM18kspDa22qEmDLTJKm6WA4PJQptoRJDZutC5nLajAQwJCofJymkGn9r2A",
  "key22": "4K4oNZpG7bzt5QgKUNJqAnP8e5ixgt7HuvRoXRmPJzeXeHni6WPQLNcyHkqB9bCttU3rNi2zTAbb5hszGtM2fgCC",
  "key23": "yeozs1zuJs68KxBLwBAdTbSdXbJ5eyFPKBnkwoZ49uzvK5t8AcA7fGmr9VRuB9UKRnE44yrabkrVRYKhm8FuQsd",
  "key24": "3VK82e92eMtdfGMpgaSEGmx1tcLcm1sib6JV1fTmM2avpQQPEgpJJstW8yXAH2LH6AGZ9p6Barvah6e3gSewsB2s",
  "key25": "2cSqA4q7QvsVQKhSc4nn2ozarNH7goytCbx3CyC7vmD4qXdTqenDCBfMtGKQEJmG81SZzTP56FKa2Yr4nUjxVy6r",
  "key26": "nP9cxpLFkkYAMQKVA9YDqkvP7pYxfedciiwnyqVQegePYAt7tLm7p2NTuGdoTotKY6BErTY85Va4mxjeGFx6cfA",
  "key27": "3B5ntWowB24WQVTxXT5nkvyAiLvoFKGFhVsnpewcHWCjoiaYuoFqrKdgnqLWs5SSuFYL6BoKPvhB6qPpmLWktuXK",
  "key28": "DfbsuhYZRdyfoRoLieR8EmmpdWe5JhNvTqCpayvMmv2xU5pcv1kGMeqJRiUvedr7RduByaH939WqTu6jTrmUwUN",
  "key29": "5GnXnh3W2Nybo8BnxyJ62PN1awNF44sVswaKqn291DuHQB5QKHXqauFLf3L7zwSjMsXjTHKrRv5pJCLRoghxFZpu",
  "key30": "248bg2Jfo3GrFAHGtS8rUne1gvE2ktoxe1z7aGWmBctWyeVpja4PdxG9u11UMRkqM28gDdBSgYVrJtNn6rbQyjmf",
  "key31": "64ipi88fwmhvdfKLkCWvykm8zSiB8nZPHaEdscYvMFr6PM6jJgbdrMEKtKLhpmMgwE2UdYyptdogFVo2zjsLbqYW",
  "key32": "EGfyKyogw2GFhE1bwdHwtwQQ2XTebkTnDr1RFQXeoFD2bVNC5dmc5ztdKN8yGMUom7gh3m8cZrKWcRxDq5N3jXF",
  "key33": "4aUK9uWChwfg99Gzyev7URNqLzJUQurQu76W9pxdtSB6MhH5FdLhmM63nL82K3hndASdn9Srm6SGqb78SerYQwV",
  "key34": "2sVD4sgSK4tNHeMXAsktRiFywH76DN6WXFm7JYKDLn1guRXiGVFhCKtMyNCGHnNu8CzfyTcM27sLFP3ffHAqr4qs",
  "key35": "4FXU5PbwtgWa4thZhC1Ld83pZG3WWcrhpKBF5DoW6wi6Yya53aAPWH1wC91aFryiFB3b9hhNqn8z8Y43onahk5yT",
  "key36": "ikePffYdmqdQoxa3r6NVaLPDk5CM3txUeC8RkcSGJoQSc8BHGvNymKihXmxfutFTkLALLA1yRf8YEkt3pcgD8qL",
  "key37": "2Ku1LXx5dzustXj3mew7Jrj59aWDYZ3XVPWyA7a53Cez8yJEP8X1SJASiWi2idrLVNjG4WnmUcbQkuZvGbmuuvn1",
  "key38": "5yb6244zTPfJvbMJo233Xeo8twfKgcotVGvtD3fsjpsCGTHXgAk37t3ioq4WEbxS3CDq53XcjiMti1b6LtfmhS1N",
  "key39": "3VBcuadUBXBi6ZsmDQEehd2aeDpZVQVgEuTDYWxftRUE8ZPVrfyXTGjn3k3JT1oVBvdthqi5KxDfZKwCWHN236rt",
  "key40": "47RFLHxyrPDiTfxLcgj4suom2AmJWFMTpbRDbxDgSt4JLLoUZ6Nzg79yVd77MbSRZHzbeMCPRVSiBVXVrUvBWWWr",
  "key41": "3SZ71waaynwAbBRSpFruSHSCxuq5MV7PjwnHzEBTgbgeEZvyp4PKbPrwezskY75sUcs5gqFFKfn9mt1BKpcs4THc",
  "key42": "4WK6oRgJJvBJswdMqFEtckBSrMADRNzV5qPWkQvMpho3j3CVJEiBcSP6iGuYLrs1hpzQFgPjEm42tZg1GmK1r4Gw",
  "key43": "2ZG8MHQusRiNAW5tikSmMiRpaCHx9krbcMj8g22RtBCYQCnbq7RfuRSUnSGB7kGZZjZoQa6G78o6t7uy96ffBXgc"
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
