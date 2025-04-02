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
    "45u8zwMKQCx5fy2p1AJNPLevzYC9bumaW895o53XiNYcvGssZ3UyVCuyyDiYWdeSDHaGsysTk6nR885eoxU8N2rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xv19GkGG4XX3fhEmc1N2rw4vuJjYTwWLtEzSozZRomdtZKJCJcxFPhBiwWQHLya4E714My5gLQEq8zPcH1EMgFF",
  "key1": "2vb9u2JcTtdLXWTyYYnMYz8sowCBsdgr7vd6PT27nawGRfMgxgJiCTivUWFPwPnw2nuvANBbCLqKPkoV2weM9aWo",
  "key2": "29V3Wuw2WYZvuSBR11GWDTsWK4AMTWS6ioLf81bPTqF2ETVAPecUhyuGj7LeSZksDf8Nuq8KdK2BGRhn2Ax1fwhH",
  "key3": "2nTg3h9X1ojXmXxPFcR4U61k7tT4MQhfcnWk1hVLKYRGSGRoLcXkrzfDFHoeS4iq3JqjujGEe9spJ7J5HLKNmsrN",
  "key4": "57i2Zci9wb4kukHSSrpGrV1Sa1VZUgiszgavWaaw1zi4WMJhGsy4Zxj5XwpvvhHUweSJJYebgtJ2aQ6WDNwW8fqL",
  "key5": "4CRCphV7JMRHZaLqW7r3SXcFmahBrS1pNE5AQtbipSmgncFYWANSkc1n5YHDDsBhq34SB75G7WsfgJgkNCVuwpDp",
  "key6": "mFqvH6bsBkA8i6kiqo9qz1g4NdzP1HVhgTMXsQ1dvj9o9NHH5gHChCNKPWfVkm8ceHmFgUXuqaMoegLTGsDfuGG",
  "key7": "LEpbue94Cc4QauLQteZcBwEfKC1MqogHpFHqcLXV4UNuiUDHQMoNoesp9RNwDAsRVuBkReLB7pJjAYPX2wADbDS",
  "key8": "4mqP6Gs8KfTXyx866wyiS92fwxnLgmWUY8Gjhvsi4MUR4j5srm4AntWnGJ2UQ9VbseiqTj5eMKQBA2uPpNPB1FJM",
  "key9": "iJ4rPntg5gRcdfqKJEnsBhLieTJoPXFUcwRyuBWudhdZ1T5vFiX6L6FE2o5RAzpqZvfTeB1EMzeHzYgugSuoPCo",
  "key10": "3rLNmKJgqfzpd8aNgQyjRcNka62VvRgkcGRnggpifVuTWFvBNaixBiVvv3KZieTMwG6jnE5K5ScHN6PH7TBAvvLD",
  "key11": "ZY3WyybCn2Aofp1gssvfPt8BzefnA1eBW8SsKAxnHEHrAogfXGzobgj6hnbHwYa9o53pqH4A9VuRcDcv9cPAiVW",
  "key12": "4cs4MXmCxRmUDAeu8KqBnWgf551zzw87JTe4MT45eR9hsj1SgDUnczmyNKdhF67HFZk8yatXFsdvhc4PQkqzkgms",
  "key13": "4n1xMR9nKQTKWvcXoRgEN2ib8vLjSg2VrJWFMRxb9fchgoZvn8KPuqt6q5VvbkWzuyzjtrGwWcAZ9yN6NKQ4e91",
  "key14": "2MabXKPAtfJkkDYspv7muviTqBskeW24PTT4RxPgNCg3v65KH9EBTJaDuHfZvaZdZDc54pf9auiD76Pnn3KxuqHS",
  "key15": "22UMadq3camoyR9CrYJQH3F82xxQfMdwqAfjhgmpME4bcatGpfJxJJLBJ8GSqNUTxRzC2KPGNdjUxrTHpXfuDpcx",
  "key16": "F7kNpaGRgj9nyHe6nhWkDcMprfmsSTHDLVDSNPq178LpVhzUurXB4ZFLF6i2fSR54ezAPHrgivfLh8V9conUFKX",
  "key17": "45d8RhfFxUUjU1HJJEHZJQKJAfutQekjXGrhcU73NZh4B3dX2VZWTPppfzYJPsNnkzSSnTYH7gCHDvyHbAyDbZ9A",
  "key18": "5HkcZGc3Xsu9EqLuqzV3e8CavN1E4LDimQKJQEpMry5R7GKVJLHqABuFgV6xUsQSR7csCMjD6jAputiNaSsdcYv8",
  "key19": "LDamvi5X6iaEpFNiF3ubB8XZiuEizJzfu7mzZNfFoA9nq323JV9jJbFv3KH5f5fivsupF8xQfMJTnJB5PYJGUZA",
  "key20": "4PWsVFpT47cTwbWHhJtYgezqGEvWzLHRykYxrhYfFvvyxnUfFNdyRM9fxgx8p4yFcu1iUrYWPTJxhftSyTgy8c3E",
  "key21": "2jhANi9cwNXQB46RA2cARw91CstsVQtmyRAhgSwD2iPnoqgpRTeFgWVAm5tfDPJKUk5WV9jUU5YoQ7jkXVuFixUP",
  "key22": "3joGH4ywpnkkGKpb84TPS3Bi6g97c3ecWkNBqFubvPXFCrpiHgVRpXof2VT81oYdBBykuwWuozEPq2uPvDtaS7ca",
  "key23": "ELYGEQsiT64mKgYAzQRMFtndQCvMa1gjcV32oHqG5fRA8MmZBDiMkeHaNRKTZVxYDzPyZ8TmvmwBCH3iDj4deoB",
  "key24": "2XQd8QVWbeLM7cEs5RhWBGyVjRq2Yr9eNLkYjBEfGx5okD6c55h1i6uTacbRiPFQmCAxRWaPtfVNMVwsHp2y7PKT",
  "key25": "3ZLXjzYqJXtS4DuBJZM1VyW9nyD8n9yHFhj3xevHk5xfxxCGXQ8PxynCpeWQeFCWuxou8hEkfnMbGXURRLSFLLLs",
  "key26": "5UXbhYUSNykP78Xr1NDoEQvWR3DttJMXb48gsAWn8h5ivjEXUkpW4Ux2UoChuuB4vtv62Uag5Z3ssc3yPQqaJoSh",
  "key27": "3L37SrNfs3bx3pTtE1HmTEGCD9tnt1KRFug8ghBzdZ6GPWrXYamjrvUp2rdWdJhRLSY4SGic1WTr2fgs1cbaDZNW",
  "key28": "57fEjzJcrYkJFMwJ1afedVNV9evqJmGAVCBBDNcUURvvkMetwDtKbfsZzsNURoY5NNNzbbT1kxGDvxoJdc7ryJcx",
  "key29": "4UivxZ3utmuxpGSGpy6FTWYbwx4N8wnmuSHvGiLk5BhJTz9EeMVSKGvN83w4DbsgvezoejntFMxAezpD7Uhv63gV",
  "key30": "2t6UTinSmHbwBVd4mVWd9xmQgmiN7pw171dUe71Me8pfDnKHPV69GrxxFMKk8xKkYWK5RxC6mUcyySaT69x8oFHq",
  "key31": "3PYC6diEzQS2hzPkRrgEEHnrbR2GCQ7pkeYAovTqpLvD7UDutP8nuJKZhLtTBfjxqqxgfWsGr9JGpfxJhQHCcEUP",
  "key32": "2pvX8cBHvHMAFgbjmefDWZb8A5RogQWMoUeFtbRK8kqBVgKixukZFzPSDBFexF4Wi6H5pkUc5chA3iTXNqY9AM9r",
  "key33": "3dTS2KMhwBn6PhaNLXKv21jQwRXVmTYUmYmdcswaF46LrwH5bQr8ZA7NQmaWcEqyX6sh3D2Fm5tMJ4taMExFG8rs",
  "key34": "43GdaHvenHkNfJso25mHhXz9APNwYxeF83nA2crmMdJsSbRkJwMML5ozmUiVEHRmcrxTbRj6fL95Hc6bNzGhqzAb",
  "key35": "3bAQHnVnjWZudM1aJGB9n9bnnM9Cus2s5jHyyRu2QSuEZBeQSzwUYtGAKognKo16NQh9U4SQAEDGNLtewRLXSRs8",
  "key36": "3t1L59jk8PeXFSw32nnQDhtPXajfbBLvzJ4WdKSmoGGgfCd7jgmV4UXvWSGBrbQyH7HQxwQEqcN1FwiA99Me3T2U",
  "key37": "39npWGF81JwVrsSrStmKANrZRMRwL9RNd1uxWVRv41SQhkoZ96xRpTWnfm17Rw8Qbh5uP44awgyuUqePS1VjGWEG",
  "key38": "5PpzDK1WJyavCriLPZ2gccrAuHDzveMSkRa16QvnXa3pSqZ4xk632VBtf7Cn8KNEQR9bi86L14dJvqLYzJgGSH1R",
  "key39": "3fTxjiPXW6gTv1NtffScyvyqFb9KvKWjM6C1VahrXjNiM7mwbZhHpi5h6M1nF6Rs9Tyu4udjFncctgPfALXjoZhn",
  "key40": "UmyspF3HqcSbqUdpzv4qcfDh6M83xSagSkQCMmZMAVD3YeQyHgzsbVhzqsDGCGV7YiCq4r18Wf8KvHrFrFJNBCN",
  "key41": "3QGQ9NakcNM6QcQr45MK5B2Y7V1EPjivRVdJjHN7deet1bWuy83icMdRK9ahB6au7FUJbv21N22Bk2U7yxsUicnK",
  "key42": "4445xPbSZKKn7y6LW2QMWCeFmyepZDEM4sRDnVjAq44HCkGHwxZbD51sqAZae7s3PthqRz1Sqoq6r7rPeuVEx5hn",
  "key43": "3uqLYAcAz8K7Lz3hxvyEqx2xDbheaLEVcEXtWeABfETjauAzBjjuGPdovGkbYFmje2Gj5NiTjQjFxa9xWDKc8izb",
  "key44": "3no2GwaYjHcTB7LUqGZoA1vS8D7r3Qs4385GDPsahxVQ7NeCx49dk5heAxSSbiSRW1T6D4fN8U2HGT2JngyLLdzM",
  "key45": "4pnL2MpC7i2EkKTNaXmgyNPrJktYC4URy6YxNY7VNUXAgqdBqYDDCTWDrH998K4BS2TxizL9SpjVgfJGn2GmpY2s",
  "key46": "4eMHPmPcYUvSEJ6Fx2t5BdLSuyKu1bC62a6MSGGyZtz15M73xUFiSnP8QfFnitfaaZL9y5kCwtawxVV7ZT92Kzmi",
  "key47": "3xPvRnhSdP4fXEQYsuJg7136PT4mWyycPa7E6zCzC8xTdbdVtQf77p2kJ1jUtvZro5aZppoNDxUGhdwCsEp19sFZ"
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
