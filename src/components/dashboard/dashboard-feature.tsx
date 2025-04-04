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
    "jPzBaT6EokGqV9vnnZUDooqDFG5WGxXz9CF4aGQExPQPHYnEse6M8qL8avNqx5XcTxw36PqPVaFFeEHJ7aB5rDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h1Yoz6guyCyhSSd5bCMvKfAypN198NnPt3Uc5RkWne9P5sDBu2DW4hJV8k8587w7BcRcg1aduEEZRDP2b6YkpHQ",
  "key1": "2PaTm1fuR3kvXvnbFgtGnVaxDhyDyJF8XiX29u3dT3Zfexb7jxg8T2dVN4ARQmRFDg6DdSq5cTQcnCYt2xoQsMHJ",
  "key2": "63sRiAThTYEUWGatTwEPQ6aUSfY32GSnX8dKurjf2S7AY4rDJs5Dsd4iTVAp9vATcv8PuVtk5NALr2aRGMcXpxFV",
  "key3": "3fbkkismybAztH2VvKUcjd7YX2wBmnQPCv5cd9vsrR4M7vGMUQFGX7FJoboJ3kV1ZayD35ozZTgDSt7MP3aott8G",
  "key4": "5P55h8SsogdJtZRRXzq4StWGMdorFy8CLtTUa6jRCLWKSFPR47uceemmQceP4Xr2dVbb5exrLqfaJ1cB9TbWMDrH",
  "key5": "2D8QKnF25Fujk5oa61rqYoVv9ASrYGSUEEgRD8N3qJirkoQATXMBG4QvoPVoqBEycDvv5CntdqfaF22CZd8YjBgq",
  "key6": "3B22y1MqxEG6io9vpEkQnwbJQDtCvimQpcMVe65DBMDCqyxDTEF8Vy3HBLTwVChSFaxfMgmb9YPUn8uFAZrqcVQf",
  "key7": "3cmZBbbQmYs9HaWdqSD1YG6tuejnS5aeSxhcs8UoouPqRu9cW639UtXEJG3VoZZtmZRzHBc7CjoQKdZHL7ugq7mS",
  "key8": "5KautkCFD4TJ6AFT2zLKzAzWa7MnjafhepTfR1jL78YvLa98eaEr7r8mCnC6DAg3dARR7Jdzunhhp5h8EtfYUhAF",
  "key9": "2hKLaSRWFf8aj8oDXzJggGiRkAHzvHonfMbeLv67YHDJrSaAG3F7hNxUSJC1VzhZis4yN6AWgPVKpm2zqmLYBMmj",
  "key10": "4UHeSs5CEHQALzGkMsCJ3cvP5wiUym4uwmFokZawzhVybbQuXsVWb2QZhCJ36pb9FQXjYpMEF7z8qkMFvcTAR2tB",
  "key11": "4Q1gmHiTpi5RXsi4Sffe5ZYEv1QA5mquQ7ZEY7ik2BxAByAbara2G82kGe2sUewev9P6UFFAPN2Ln8JqvqFKCTCU",
  "key12": "2CkG1sUemJJGL5P5qgaY8VRJ8WqzUsZQ9PTkDitk4zmW6C7jdfZjegMQisPtksapDPt4sjXNrhRp7uDNPtjKaWq3",
  "key13": "47BojpEcxy2tQpGYbKzecASYrGTL26Ci6CvyfEHeNxzFUobLF7qeHhVY965WZWAdW8jvobpfYNb1Fh2VBEXFnskz",
  "key14": "4Em79Uhz1gxU19gSnFkFYnFhVF3HrERwFgFQpmPP52vJjestFj6zXqs484FqUxquFyCMrttypTCAKn4KRLeWme1q",
  "key15": "2F3Gf7Vp6RtQseEyNDA99SppvzjdUL157RtgytTh3BwEoTceQ1YVoTz9FKbvBerY1A95FAPqKAbXSz5MbvqueNxn",
  "key16": "JaQG8cyDRWuxMvkxKGjC87ZSesoR6XxegMkvTQfgnv8PK8caX5rzkYkmjjNLJDdSTHJWTAAGA9DKNcps5ptyCub",
  "key17": "2QKKbuDhXzRip2yuekUaiK93hKb3aWiBkq7KjS5ZykPXfDRFj8ASvKywUUhdny28zx9urHDWE8zoCkSAvLtrZ3V1",
  "key18": "29dQ9iAQiiaRtUinHViZcP8nDb3SASTB53Kxx8zkMcKtvu8ENqyLyjTv2BHNQfr7B3seJWTb94GPBvEB4uoe7n55",
  "key19": "3JRNuxzJTGedK6HAWJ4xS1a7HoMMNAv1ezaideHgxXhgzC6CqyMBdG9SuNDUf6KYaE3e9vDsUcTxHPVQkho5PZ6q",
  "key20": "592A5ZsRD4DwQpCQEdVdpUcnaQdxjd3skoQPgWkA4VaAycn6wPKxjC5jVszP38hnTFSoHY4PAJi7q54uBKVTy5YZ",
  "key21": "zAurRKwZgCxeF9fXJXiFbmTkPMatMV63L9HvF6sEcvNGiX54vWqaiCqqx8qostHPoccgZbsKQjwhhz2CjPhbM3Y",
  "key22": "zbLBJ4qbREtXCd17gukPn3Sqk22aiEEHDf181AAweKfjU2VZtxrciHFSgA2ApeJvg8jaQtogRvBaQRm3Jjkv5eh",
  "key23": "35cn41xj9TaGyRyyokauNfdUTEMyCubcYcusVGPqco4p3U9n1EVs6Tv9mPz6NwUiC8ZgB5rpkQnWMPtHZo6PrDsf",
  "key24": "2VeGPXw21B94NZQ8rJEoTSuTcatHaBx4dp1EPDQXzAffQ54mkrSs1t5Ndg5ZmqbaJHK4vYwktGmiQnoDGrdCSmjv",
  "key25": "A3taotQBuqGoSBsATBmMDur2kcH7wUSQm1yzSyx4hgjbiZhNBZ5uzUC5qi6ifeNUZA4bEadfSfbFUGg6iiot13T",
  "key26": "4PiD52hksGrMB3ZFiLYt6kRzj6qvNmF3WZuqhrtE79WWtroKYLUH7SLhBzrwDcVYVRweCBmp1GMBwRYaY1PSn5VV",
  "key27": "5Nvq866bvZvKtW6eH7PeYF3ag9U8hbQxeTkoxH4DLrFh1o4nRqLZkYSnmQMxCeod97LUQo7fZT9aX93SZyCsBPHA",
  "key28": "4fAvSNLwbG7zHcanxec3xTmdQHLe2otNLyWD7NHNg6jx6nRip6E7RpxxJzhoPoq1BCFrwZGvENEPzPan1SD9tgrr",
  "key29": "dG64yBzp1eniduBjSupZMbSt7b53NF2YtPnXym9ZaKN3cVaxjv42e1icKXR1guicvG3Kr3kBvLtHL2c2A8N4ynH",
  "key30": "5jjTphNZBGqfegK7P8RzeUHEZ3TxAJRYUu8mD7Bq5NhgvqXMbjsrbmzJRxaQwgki54qrGKcppNeBuVtjSB19JSib",
  "key31": "dTn61MGaEsWcekKT9CirZxeP2dL8kGFYWrcTpnQEhJbaS91NQf7GXHFDcvMQCFqH2KSLdVZo7FmnXRsTDhh35fr",
  "key32": "L6bkVeUyUWj5YZM8SxTAwJgjrp9uFKBJ6Lau89CmLMwwSr1sooar1sX7zYTXHYvenZ417jEb963uoeR1nwii1zn",
  "key33": "z2KoumNNaLZupZ5GuS1rEdkBqYP6pDC83sBcjEjctN2qmWgzAwQgijVqBioCeZL2xJyk8RBU2duYJ8fXaB6hwsC",
  "key34": "5B6CSjn7vao89JjxfG9tRPLMN8BsCumL6P7kXeC3Bp3hSY8HyWNUvYYjQpPzNue3anig55UcMnQW6xUa6hcPD6gH",
  "key35": "BHd2zoZqaoPWguLrsCspoW3tEuCLar4bG6FmiwR3fvcYGZ9ECq9jJper7qQkH85KWkVNUwkXWFMAszs4iFC6AMB",
  "key36": "42StN9hY94s4mW1fQo3aS7wFp94Jg14iyLeSKRXnwahfEqpdbex9bdmUGMx5eHdTb1Tx8pd8UDef6ZfeuQBaUNht",
  "key37": "3qjW5Xf3qNrqjYm1ybWZwjy65fGhR5ZzWSMB6oPHtzGt9UWuTeNqcujwSi6XVzMvo63e9rMLaSoPa4mFGhc8gmzv",
  "key38": "aWgUVqcMzRebTmroVkvjpx9gFXSwy2mpk6XvPCRYMXQtHRnSMBiFY8Lx1W84YEGT8TufvtkJTk9Ysfv7Ld2DCsx",
  "key39": "4VXMtvQWke4xyUcMmEv6B7k5QBBznx2rvt8D29TRDXcrNEhFZ1qpEck9S3BEesYnBzLqWaWALnsYr5RXeqt5NXrj",
  "key40": "5DVkZ9epMG8uFvwWXYitkfjWrKL2DqSGMxDtbMwrLLGu4M6QpHS3qXFHVxYewzJMB12gvixcwVVJk1kjL41Whuyj",
  "key41": "4yBqyVKqMAThw6gkaVfj8pU4nwVPsRNh2KudXwRh2fPDVAsPFW1yePThcFrXjFWBze4LzCbhtLC3cCLLB4UREmRN",
  "key42": "617DQoAGboLyspVEfG1VynWvwWV1qmDWtkRYtJ5oE9LzVv5315zWcufc6jmzkhjbRieYGTARCmLwdp6ZDmrejtki",
  "key43": "45RXoZv9obEomPw8wsm197wet2inkSKyZTz2UWT8pHbtjah7ium4MTSxXdZcwbrxtHf4q1oR4xg9GwZ1M172ZJ5A",
  "key44": "3WJQh4BeJzkcraoh4kiFFa5k5Kw9ZdXYWfCEorgUY3vY3uPfWwB56zo2N25ekxF8oMkuWfeUov65GSSn3kFCCsWZ"
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
