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
    "1hdqL3vCMZNzSZbQzBvkCjjTtYfeYFR6e8AAG66XYk1mXayT4hzyXX4d1eFDVDaR5xWd8PJ8LUiiZd5tEGjc15Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tTqFuJfk3ieA2awMonk6ME1zrP8hbspWdrSqgFDdJDGBpWCZfJ9fnrQnx4xyPni3EWazQPy6LiKQ1wXEt5Qmdco",
  "key1": "4UTx6Wqnkadba9SVQpMZux3Z8sjLDoHEbpypbEJ8fHbt1rAsgWRemQxJqMsatwbtVicTnt1omfN1iA3L8c3ksDAW",
  "key2": "4K3xuoYW8aE5fPaT1QfFphtqSHy2DRHeELFFKXfsvXBumXrxUoEM5h49EbF395szNxCde3AxembE989enJYXDdEh",
  "key3": "4QHXuZGkEc6pA4cjMDd6GKUrnFzXHdojs2uyfW481LzHdnTRHr4zZvxS2q38QjZsMrN8aaCMqxEkdLk7Toin1Wdp",
  "key4": "4sJZFb8jt6kcTCxAb1g4CaFTX619BWHNkhhVETP1XZVuvzzzhbUT6dwpvyrxjDpc95kQViRxWuWvCD992oJNMgHU",
  "key5": "4NFzMMxQ7ytEw9at1WZV5JB9DgvK98Q77iE92VHCRb5Zuf4846hD2DMJX8Scu5sSt4DynXkdt632rDdtvze7CR4X",
  "key6": "4DqUccvPp7gFXxWbW3txMGfW5Z431bW1Dmyi15YQVGbd9ii7w7moArw4a46JdvDMqhUCnCenSLsTTawQp2QPvq9h",
  "key7": "5MFas3yp6HsnidDuFeBZwKt8pQ2knKQQVryn9yVoFRA5NEfK2wt7ft9HNcmgNpAuSaadCeijzzij2FMorJigqYb",
  "key8": "3hwLLVA5fyvZiaHfm5ieYDybN5e8yEXXBHSEJEgUfTZ338VcUp8TQEZte7sCv4ys9B1M7Eu2b3DTrAEp4QzY4rtf",
  "key9": "3bfCwyPpfPfgi1xHqJJ1Av7ZNgZuALEe19cpYmf8vS8PLWAkS3k84ZWFNSQdwCwUhcPNnGZ5R1Kz9LRG8vcjx1L3",
  "key10": "Z2Wv6gkCU3m1NRVjGQNG62ZvTxoQ2usB3QnpfsakJCvPaXL8PETcPNM7F7Jzfo4LqK6o7pfNrH2AbbpWd1Wcgbf",
  "key11": "5aYUrPqDygFAW1f5WQ7iJQGw7kXb5jqgiJfQPjdrQvR3j82NvmW4hweQfDv9HAMto4va4kyMRi9vBdkSVCfaLapc",
  "key12": "FXUE2up6vPwUx4HPUY1cHymFmY8m8WHZXH3ZJ4pRUtLXvqNbmDzNDzmqFJ6kZWAHfqYV3g6ZrbnJNDhFjcCFyaw",
  "key13": "2VHCqExeVReSowaVeAe42giHec7tnHJGYHdtoHX1PmPnDk7cmjhoM2kQMf9PqeaiSDsvrKrfs9jY3ayhaFRDBk2p",
  "key14": "4RrmieSsWzQPVqmCjvqSWo5MhseonBTDaWQ2VGf6gDy1o4RtaQkbDAM829KwZKcckzTBVfAiKEHaVeqJVTFduxa6",
  "key15": "6gx4VMT6WiC6MCwFPH4VhRvg4kyfytzxPP8DZTn1ir1cURfNWnmVwFVtHKw6edQDtmSQuLfjGEFtfTfCQk8ccmM",
  "key16": "PhJetWLZJgqLpWgerQLNXEdtoGjuDy6KCFMB3XLKY3zWmXTPqFQRFfCMqZQoqu8ZKfHenwMotLjx1fNEuwHpxzb",
  "key17": "hvDFF48CubM2NfYQRWCUi8wSas3HHR2drLb89ogFsihEXdhSbhvnSQEtgner3nq1K3HFrbXncQcJxoaFCV48iGc",
  "key18": "4XVP34tk7xR5sRWaKJsW5LAb3YQbR1fHnCxnmFqG2c1pbADLYjrBRqXiQ8ZFCyGDjTManyaSQ4btYyPR9hNe29H5",
  "key19": "2VNzRQVbLvu6eZL3MsJzLUjZjFTfcWxJxWw2Z8M6x3e8Bfd7Q6kKmX2DM4iFf5xaXAHfygCuMjjdoeAyxnDczQgd",
  "key20": "5zEQZxRSaW77rM1F3c3JKY4QUUmQAHk1eUWnzFz3mqcWUHex3wweCG7XRTjoC84peSaFvD2xpJo7R6vtSMysQ44s",
  "key21": "4akiR8cWzapTkUynKd59RV8qWQUSknKfG3KbZC1Wg7m6Tv2a9AnYF3M2oeXZTrEyXpRH746TNZET5FeayqCJ3cHB",
  "key22": "9jCd8wdoKcUUTvha8RgH4Pab17XCkMu2U3EYA7sM8oDgFqEpV69TCro29RuttLWx9u2REz4KoWjisXY9pRyGhTX",
  "key23": "56g72sbaGZPQxrwMoXrwfmRTSpeBj5Z4XScGNyoUqAyjiyoJBnEtV7PjMDugcBSFvbygXY25aPMVAJNzfp9sY3v5",
  "key24": "5v5GkVByVwvKEt31WZEk6jm531mGr1FsLcT9GZStyf4ZwbFFvWC4wMCtUszupAGtBdqjP8rmDFkaxKoUvSNv1spc",
  "key25": "5urdVuEa3GmgmwhAFcujYxCgrajekFHF7rnDZdDmDeko72mhADUJH3jySFDQEHxfYCsRWVonYyfQpSCC3tYFmdV2",
  "key26": "5Q7QEfFYK9CSot3pQ6jVAVVDDyejniYtTt75Jujug7bwNGPYwx3X35x1wQ4R4MG7uAQkFmUb25c3DK1y5EqNjHu3",
  "key27": "24ndjGvwrfnCiL3H4whWAthbz69Dzar4f5SbW8gBNGoSmwBWRAToCzqxh924dbEY7CAyNMLCNAE8fBA6oKVesZzX",
  "key28": "3RKhaT7hRbPkP6duosskSgwBc5NyJBP61Uqu8aK6BiZ7Xt8HxE3pXLsn8nmX7RqzyyhbcQ2xCd5aesQeBosAoeYE",
  "key29": "5Gt8HbxxVyc2wCvZzzCRQv9v6x8gooAvQrcAs4PyYSGXZddim9D61KfTXfX1E3dxxRgtVX361cVmLnqQB2naMVEE",
  "key30": "UnH7jcpggUriZ1WBJ47NQYfwr6hT192fdMqta6RTX5iXG6m833N3JT2bepUsFosYfPUTEYsQ8LcAx85R4ZuJHmp",
  "key31": "5Q9ckcWSkjauTb1HUp379Z8h9sp6o1UgEBM4xCR3cSGCfMS27ipfUJ7R6q4zmTNKHMZgffSBjbLt1zuJcaDhUtrV",
  "key32": "4Y5jEMCj61p8u1A8rb97J1dht8JfrpVpdz3Gjy2Ywb4gtiwATy7nX1wHkpQEHyGXek29H9SggCFK4bW3YDfnA6PR",
  "key33": "3vP1fHbyfom98W1RGyV3U4m5gWFDZxCuKck62uVYvDDLxtZLDDZiVtNEHf2NF3rKeM6jMYNL4u5eeymRQtRq1sFk",
  "key34": "2cd3hRRBvUZLfccSZJwNy8hm4qWcPvzgA23F3ZYX6mB5zvhHSjx4MPyGAYtbMVHy2UJxyqTdmNxqMb83YExWKxQo"
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
