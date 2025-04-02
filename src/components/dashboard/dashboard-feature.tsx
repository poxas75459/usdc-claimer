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
    "3iTBttchJmXwZxEHgqrMdPLhNHYe2bWKPLJuxHNZuE95cuFiJiB7v3pPK2a6dsd1wVKfrXbqd7DkFs9U1jm5PNyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNyQSt9bwnzZKDNeNtEemscxSi2o1ekv8wAstM9kJBerYx3ddJamKPw7DtGy8QvEFeDiYfAK9skLSqxy2StPkKF",
  "key1": "4JNuSUQjihurndBhHRHR9U2dGyntbhftV4SKSeJsCFMn1UUZcsvfUNnatp7fnCXeGQYZtDLMPwRy1nKyvCChfUo4",
  "key2": "4uBSknt9PdvdSNpcXBPMdyLJu3GLNuAw2xBWUFwGhaQrkgeA5ejieM89P3DQdzxu5Bi7A848czreSNmJ41VVaNKv",
  "key3": "4foQ5dQgrrdzzE14z3urzkcinP4SSVb8DzbZEZHy6XWg2hpHDSsZLy8GGyembuwP5fx6icdBnaST3d6D2apAwK3S",
  "key4": "53itpc7FUht4G7ErVmCojV7m41mwoftSKW3Wz9o3vGra7TQFszuqRkDBcRYZPSXfwVvS6PhmywPa64ehARuUNbY2",
  "key5": "3RUCUFpg1fgjBY7Wh4o24opaxVShbFvenph7Um719SDZNT5f685tQ6QTN141MwL47JE8Qd2Qxa4ht1SYyQ5ruPBr",
  "key6": "cWeEsf1SBNh7Lz6XSibnejjZ1xcrNAnN2HPifiwDRMoW67BEnNAgoZG9Bv5d9WZtGCPvYKkh2D2vdLhGdvxaGMb",
  "key7": "28oLAUvhxrqo29szYRqyifWSRLEQ4ZYHuBG19yv8xiE98nkc9bxBg3t1EUaSeGYa9cVXkMtfjWjDL3W1QajenfuB",
  "key8": "4sKqWEggzZMkZi11mTbJzu3Lffu5xVWmx5YpTsvV57gCxLAobCv46oDeUiBN6cCgxBNP7etBtFyXd3TkzYNVe5hC",
  "key9": "5M8Jco3cHLybaavkMQspStVaaWDqoYgyxdiHu27z8nD5Cg7V5ox4XJNMWN3mdFZJdpusFtXsrisgQZQqMZwF9G2h",
  "key10": "4aEw4gUZyQF47N9poGyA8TYAkp8ynrm24TZ9BJx233Gr1pzR3mY6okA8mUjdMLDJMWd8vBnoA5LkNDEyr1WAZVhZ",
  "key11": "3yZMVZ3eTmhpBwgwHNFKwbaMoRUpqXwkBVdHi2MHoUr6E3ZV86B1P2xSJ5GDFnhAj9P9sngXooYJCmJNTPE2GzoU",
  "key12": "sSMkXjhKjNGbWtYA46HJSjxKRVaPA2edGgJ6usXSe39w7V3yef4iA4d5xJbEsnaJkuQuoRZKQUd55k1ttntnmLJ",
  "key13": "4q5Vdf4j2WSL64PhcrsfnkrNxHUuqD5wVw1DjPKiAYRrhoHb9QtNcgK5mRqChmhh94vhSF2Kgy41AxNrb12UM5gX",
  "key14": "5nKib2VPCUqAK9hWB2tBSfPxbkKTjiUkhR4dvEBdUNmFyQahq6uFzqCAZuXpZ9fnzY5gf5cQd3mTjmcvxi6c56WL",
  "key15": "4zgHQSLkJVsGkixRC2uP7tFcHM4ybsnn9jaG12z64xZGKA2zcpiK1Mjfc8d1pYe79GmUPEZuduzQDMTdFN1uY73p",
  "key16": "aJa9Z4GvY4QLA2aHSHeLBX4UinbTRroke1vgkyoy39BcQSfX1ntZiR3djdMVQ8KBWj5ZiUzFmZEwzcAKzvAAf8C",
  "key17": "3A5jGsMxGWdsx5eg3Fm47NqUT94uY2XAWnhJ4YUDRwvsVzMhPbCgJT7Esh2JvR7Yxk6itAJiKE7rnU5GNAEuFzpJ",
  "key18": "3tjMm9K7UoxC4ZQvY3tWNB7THpCXTxRnZv4QHwH5TUjmKqdth3wQ2FcRdNcPk4DcVjRDkWh2NddSd4XxYyauX3vP",
  "key19": "3UKWrZuWnSN62fntphwMWCUeqSWhJ9thvN5NXsiXpvgAMsbzj7CaXjiZRAvKnSLvk3AFLdcAr6LM11dy4rtZ7BhL",
  "key20": "2GmUyik1UUzZaX1s3s9aPh3v7PTXakmuqTAz1dhVhMXMeyAksNWGZtfkjLKmjEKeXcFbjXfT6uqnmW8MypNsBThz",
  "key21": "3H8hGdmLefu4akWXev5Pszm6C8SM6tKMnYKHmHZuVm6xpZTNJkjYopsuRbhrWXVUPEKagLZM4W3YGewKvxgRxDwj",
  "key22": "5SV5LmyEVqhRnpYfxzNGyHotexQZWJUEr55GT7seJnjBc7yVeghoUzT7JL8RVnYH3qxDDHpwCPXgAcS3EvKkpShz",
  "key23": "5XZi7LbrGnrvfk6oGKPWJuZG5tj2rLA6X7TfAT5irJtAXahuqA6hhfFFSRXHVsiVpNGW2cue4e2Ra5kVnQKsVNHW",
  "key24": "G6gVa617jQezvd52HsTLj1kQBJYyCoy3GHQD5aUqBBoaHqhvmGcoArgQmFxkhE8Le6pUtbSDTAHHvwuc3VQbMPP",
  "key25": "4SeVd46wY2et2jhtdxk3WA76ibMdiRe2gzoqveRo6JoEiRhomp7VjFQyqJLPqZXRRcdVtTBoVzqFS3W9KtcSyvVA",
  "key26": "5sPbCCRjRsAxfLhUrccWkpuDYhgm1dZs61E4DtGnKTTDEVEM9rTEiBvNjVpGp5JRxoMZpDnB3KnjgUQTmkGc1sfi",
  "key27": "35ujZyh8ABJw6gPrqwM6J8jVkGzqQLxQkADPszYBFcc1QM2Q1shLbA6kK7Uy1cBjQX5nV76eBaAjJz2X2rqDc19u",
  "key28": "5GtLPW1W145ZMrQDLGFHLLCu9votkqzvYRPhBuzMXVeRMXGMk2PGkRs6JENJT1uGKrmLRF9s4k33SoQdYzcgJEew",
  "key29": "w4SXha9TsK3XqwdLMHkL3cE7huQ1fWZuZKiC2UCisTLYA4upQxBJyCCtHZZdRbDEaeNxFA3NT8j845WCnCFupWj",
  "key30": "5jjd5J9xWESMFwttuJRSXEMWXWviT71chtCqkpcUoXAdPAZDJ4uSDCBTEq3sjWtg7WePqV6KxKtfrCdJbQrUnfbC",
  "key31": "3JXoDLqtNPtZUpBkQc7oF5BNkt5uPoci2b6W9CdeBWZ4Z43ehqee4gDogqsUvsv63Pi9gTss7p2fReYFNi8fsrHj",
  "key32": "4i1UrZHGHVqFb5GLycEXRmHhLTXYSzHp31cLD14GxMpN3uvVyZah9rb7LpxYzKmERpJcxyR74vEV9PoVcxhWETW6",
  "key33": "5uyYM6qfDPVp1K7G58x5P5pe4PgYQDh3y9uvACpvNdGH1wvD7Bam9LkBVTu22echvRqzWTBtLytCVqHBJDKctw1N",
  "key34": "2aw5p1QqhsMwRiKCckvTdCg6MY5cLAvH1kcKQQRiDQP7QKZkDUEG8autma7RmQbS1TSSTDBdM8yoCVGMRmPC7B9e",
  "key35": "3Qp8zL3qnkMbsetjB4wk4ZJQYnYS1KG8259Vv6wPBH2fnLdefZhiZxAgpSHHnpY5R8sfaayR8YYd46kvZDvi9oc9",
  "key36": "NxJXNZ17YvWmpH9XBJXPNR5Mj3KT67pxDCu4EB7XD2cSDoTB8XJvWHiVnKdWQNG7gNorhDwCzSb9jSASBojnrb2",
  "key37": "5diZ4Fw6uAwb8BBQVmonS9BMeHJjFKaiKp7r9xEjg64J5G9bohjdDTGCYxZyfY77Fze3vZboBrGgKWBu5ww9Exg4",
  "key38": "ap6rZzUbQawHRLoM8DtpDYMkTeNkic5WDZxfsRJx6BTmFkwDZ6YyXVqtCxEbDGP6vK9CjzXjSU5UpWgy8QuT53b",
  "key39": "XAFkyFkQJD73rjTwBgyovP3NdN4JGmVmwwP4VxBNRcmL2b25BvpEQa5xMp7iR1i7tWJEWH4NkZJoMB3T9eZCwre",
  "key40": "2A5anQcPiwbSiS6gTLLRAkWKuqwBa7FFCanTdTCG3UAhH4SLzhUXu2aHZJnNdyQWfsFk9Hv4yHENoTp8kPFgBzrp",
  "key41": "3gYcxa5e74AssnzjbAyjkxRvhNPLcvtBjdXT36KNfZcyF8Bsn4MTmhsMv2xfRQetkUBCv5ah9Nod3hR549Y9ycfm",
  "key42": "4TPfvDajxRjsm3hEFcipXdnFC1KBZsZT2YvvypB9TmHg2PXZDtAXenkWaqXRgkDBBg1XhyEMrpGiXAJqyp8kYeDK",
  "key43": "AhMxmNFcyA5ateWKSVZHZHLf9q1vTcQNqczFNf3qqXukeK6jZARhYPEeurqEgQY2BXH9r4aMvxrpCeFsm7din9q",
  "key44": "3aehs9GPbGaWhghTt9aaiJgsYHGxytHGcXzLjUiMi1yHExHDYY649VtwzMwGmKGt3hXDFz6nr2hdsqnmjzmQgQQA"
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
