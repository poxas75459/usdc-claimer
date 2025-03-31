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
    "63bXKQ9ocU1debedNoDQHrJRkiskBDRQyyyug5yTQUGM871JKDT2HrtsgbXjrpftW7M9mVHiwdhViQFaAJJWrcJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YdMxstPt6b96HZR6cXnmHGn531JpqyvRMfYNZDRmc3NX3r9JmRDKKEN8S9QZo3mEiEJx47g1D6HDWeQQ8saVAwu",
  "key1": "4VcWey83izTgYf4r3Qc8zSc1PsPY9cSfNQtLht6uaAGUFQ1KzeYnmNoJ2YZKt4S99YvgWHtXy6PwVJhURAs61hv4",
  "key2": "4aK4pcukCUEUFSnGiw1nhfrUc1xK2CHtnfnBz5W2Vxg5xdxKwj8cyRQywVjryV1rHxf6EFjw11J7MFJGRk8YJwsn",
  "key3": "4c5byn1U7pgXrRqb5hRf8GuVnFkvzs8ta6Abb1FuQ1ttBNFcgiiVQ8Z5yrvBq7JHf5rHYc788yGrGph4kPL7oa3Q",
  "key4": "5vgpdPVLTQpzD9tQLhNJ2qzHKqY2k2XwUEzNLiNTxJMvArKpPQU6XwnSSwArXdrZ23FyKLHBoS9ERwsqDk2eYwre",
  "key5": "5ehwudQUPXiEAfB2EEtRVTqBsdBHfBY6Rfch6NQawZrBxZZaq1wk6dwgjoNj4QuaNuv283KavyGEk41oP2WMAq1L",
  "key6": "5qTGHUKFYwakvCw7T9WbMhN9JsZj7ZrxwPMPhWWLZYFyVHatNrjjVPi9cCHAwYS3C6WrA7vnxRu6KafPzU1LE9F1",
  "key7": "2UnvvSE9MohFhkjpFEWUaDP7s6BfD5F3vp751HCUgyDhFCQmM7C3LePHh3NB2XPqSMSGhW9nMuHnbWiT6PETBAU4",
  "key8": "Z9V2c1zwVsr255FrF85eFUEhQXhZ6pZTzFZTpk1354J2XHHYHu1S6YF5ns8dh1UuCpMU3LqETZmTUr7LtDoPsQn",
  "key9": "4WjQ7DjVqFhJVcJM3p5Nk78W5uWUFgmgpGF4swkC2Ks2AfixSognmifAKJSYoyz1uaima4DMiK3uiM2U5eDfoNtY",
  "key10": "Aa9vwXFrHTbUTH7c8259oN5rTNn1Mzuoc3DjKphndNxC59RFGcMaT3dUaz8BWuwTe5fZSKT5JkFf22A1wNcxQFt",
  "key11": "2KHwe9qR1kHtRGi46uPnsFMH58gewhSRfdiMakUvb2BxD4w9UmEKhhyZAwBb8BDsUTL8kudAJ1KxJVTTSkNB9E82",
  "key12": "3wyyRCDa6VB6zyyUyQ1BF5kgJW45kWfLhgKQVp6vbvwRtddswK4R86fGNtRfu2JYJ3UMhmSA6yAVGRq4kDPJLCNB",
  "key13": "o7KfGdmUXGfqKnSuZAJwMeLcmZ18dudcsbjBMkvkdEBW54fUQDx4vdCM7HWxRfdjcMmbnoLhCjmb5HzfTjkWUKC",
  "key14": "TzX7ciY7Go3QvqspXdrGqkJxo3h1VwDN5KbPdsDHCT48kPZY67b4xmE4DJjT4vZh3MhnwhtZP3gq4krbPcYPHsA",
  "key15": "5zgEL2qT3YLLo5rC6rBgqeuQ5no5CpSaGMHuAkbcsDxPZH5VxY9cqmQLnR764qjxj2gRqmdo4Pgo9QPKW3s1P7fW",
  "key16": "3FFtCjQLPRBfbawMWv8DJfqB5FawRwN8omdTu7wTsFQmUNf2JoxjEfjNCt2dDFKMULQ81d1iQeKvSJE2UE6SUVEn",
  "key17": "4KjFUbyCFUTR3BwQgfgCPbG4qnBRXQ3XuHWLBTyiSd3ncsP7r3iawWtfuJ2YtXEz5rDDLPj8yZ7wGcKRdkQWb4Xo",
  "key18": "4QdCcrndkKSRmf33hVTFia5ZxGcfUDX8N6cqAz7hwhmVcwxQawg5a3b1CprrsPi8o9YzBUSYJsNhwk1iewZiStT2",
  "key19": "3HMMuLr8VqftVWBMNZ44ECQW5Tjd6vj9RWBJaGVe2ZgJH4Q5mS8233YKQJugVwYHZqvT3EGW7Kxe8629LLrAKpuC",
  "key20": "3bGF2vgqvuPNvnbSk8JD5XuXEMQqRANCcfBhCwcBioMMGfSSquTHjzoZ5Mysk6UA88X9n8cTKAMsCVLVBiNNhm89",
  "key21": "2q9HH7V7TsEb1eimcJ6nDeU7L9TUQN6t8wgUMohmXEUWyRpnf5L1pHkoSmTZ2eZf6X2WrMtEgA8ZrPpNdKrn24XA",
  "key22": "5vFBE6SznSgvpXDU8QvE1wL3kis89wWCb4UGcKmXQia4TSxEMqUPwrYyGznEzwTRqu8s3C2j8f9TztdGBNU67Myv",
  "key23": "3LQ6Wqt3rYJegefvbnrgUnevMsDnUjtdwREpSz4aCD3LAnXdWrUZWt8EMaDYpeqnJfwe97QXfrBHyBN8VP1dHkh1",
  "key24": "488Aj7M6C8UR4pMitts3tarQikqL7TNXEkXSix8QVNMaxopZ5p9ZBsKxC9RV6RP5khQWGiuEkvsnx9AwFbtmrdAc",
  "key25": "2YuggXJ6CB5Q6wJpMaw52QKRd3d9FfSPLwifprJtSGwcUanT4kQzX4pN6amVXvPBbpaQvT4TgCRLoHLwn1t2yF6h",
  "key26": "b5QcgypaYxutpqKeUcNhuQF1iJSgkB6rb35PTP7w2WCBG6pw7NYnh8e9oHgvvwH15GHZpw2BHsQR4XHKk4MHQYy",
  "key27": "5e1oXzvnjnGstpnyLT9Vgvhht83eNoUQasV2qK1zMezon9L5fiuegU4bKbsGpMUQpY1wNtL95pYMQx87dKPgtHwH",
  "key28": "EEZwnrhCnkjmp9AEyETK5r5JJ2FMKzTZtXeZvH2agFDtePVm5194kEyyyRhygW6NtZsv7sR7wjKZxxXdhbUhZKt",
  "key29": "9r4VxRpRPiCYdpzpsB4JLHN13oEweRq8njmocX6KkXbzkiVsQzQYohhsLFRjq28F59j2Tigbp4HJw9N7akYCrge",
  "key30": "ruuRD5GD4DPDy5BPfQH3hMJa8FTSe14tGzTBWDCV8UWJp6gXFSTq21PtAnKjEF1syCNSJSzzqFADArVfYoBKGWC",
  "key31": "4Q6h2Er8mNtiXUZkheQktVpR35gGvJXKrsdTBef6tXm3VjsEuSs5mLB8R6J9rLaP6qWCmj2PBKQf9RKqVLVj6MRe",
  "key32": "2m4uBJjR7UojVz99jT5HxjZJoChKbj9wpvLXtsQbvWhutgjDc8RtC4jF5BNhgPuFn9es7baxtt9dqXTNdKPgNz63",
  "key33": "3zovoihct1ykEw7iU1cpjk7jeJAqxKD7DgifF9VTpBfXzM1d3Z2yyKu7oQR5petEFKJzCxCwfLGj94BZsqNBNzuc",
  "key34": "3Xe41XLjMFWaFFQuMzXsWfcUrUYp3cZm1uwmqbkYqc1qX5xAuTqgiSVVZRuvstA3naoWCeTgpzkBPBm7wdmQrK6r",
  "key35": "5xxYjac5E4NCpQz9BEPgVF5cTr6Hfr5Q6P1UHKD39N79HpFeYwztuHDHA6cqnQLGCM9cBTKkwXZG6Wm6GSUutpTu",
  "key36": "2x1xwwGck9rh1CsyaRD5BZvqg3tbpFnVPZJeykBQHerKCzYXB5j5o6czadZwVSV1hQHncU8cPHJUfyFiDenAN8Wj",
  "key37": "4VTE4qFrZNY7fGuM2yUjTwJrocG8JLCdACfjLmu9sHhb6jKJD4odR5XkeDDm7mzSjh6S5ScteygWLaiN7TQNW55u",
  "key38": "5SCX1J6YBjmeMpASUN6TP3yj3VDMW5aCjoHw3FteAjGzBmA6u2E9Dbeve2VCsmmuTNo6KahNUt2vwYmki6rLFDbm",
  "key39": "4WPpb9HgRptALNrzx9t9vfAgA9Yh25xD5tvHpdxoAX4X7nhSR3Do5Jz3UNAWzjiBUWiPB6NdeU4FxpjpgcV9YS93",
  "key40": "5XPmm3huyJovFhRkGWyz8NutQG1mWj9DTDbUvu5X3TjkwT77yGxWcjDS3JN9hKrpDCnKRbYfgQehTzi5nsPD1ZQz",
  "key41": "28mKa5tv5X595fMVgeWz1JqNqSC7i3hEHMcx5DpofHmncn3HdQjxZFKG2z9P6zSqDxbGwmQyiTPqFEHSVkciGiq8",
  "key42": "2eoAPUX7YgN6sBkNKMCrkLawoAca1DDZMDjNNYuX7dUNEg4AQJ62CdKDDJaJAT2DeCdXf5VCJyGrmhVBLGARL4Wa",
  "key43": "5hCtdiedbDx3Cgrm3DPGv4sbFcs6wfp36MWcwYArsDoWkmHG8Yqe6cftAxPUc6xLdbh2CyVnZfnkgamfYfcmNSHz",
  "key44": "3WYrqXotWKU6c6TfsoE8vLamHqFHuxizeKWBwPt8WqP52DJMD4iF8edHthz9q11JFDZxcHwSbieDCf7knSKJ5XcQ",
  "key45": "Wvy1WhxHiWnE6VJa1EwC8ENCoVB8egvatcWJRQxTo4oNUfvTD7d3B2JkLwXG5kht8hgmHVPTERgvXrwar9hsAoq",
  "key46": "5iSW5MfYy3ksxnKnrdnQoXFjdGSG8hHbnsS4qVRKfnWVWKYoWcVyuyyzaFX7ct6pfF1JVy2fYWGy1wbaifCCJZeb",
  "key47": "4i1r4oXJBTews1wnD2ycm5XiGYBKfXMFGehkWggAZcHHSPzQh8uxiQsGvEnf68cN71MmzVNh7pomZGuYYao9hbsM",
  "key48": "56PbCPspkESDrKqn2yXmAbHHWT7h1CzXbwQQ6XHpVJwpU4VqmPwqjNsyG5J5HvLSbtGHJW4PRrGUz7AM8soXi4S2"
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
