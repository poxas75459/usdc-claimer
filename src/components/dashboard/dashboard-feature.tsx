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
    "42qfoZQwdJtGqrLwFnvfcnRG9FEmN9VatDTz3mkmhqevu3F5Jo8hKfRx6DHR8mCkesoqSGxpn1T55eXZkiNBx71Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCT26QX6tNYZhfCUhDX7gEG4eoe34p32cUcxCaa342zeuDsWunc1CdDGJF9RfoNGdD2QHh4LzbUEALwRUzRCCVP",
  "key1": "7qELGDBYuFGrCbKGbbQrWjU8DNcR1qLRWsYxSwKGNTbMHwWnqR4pNydaLqsr7E4BvTQQ4MhCRSsEzMkT5TLy7h9",
  "key2": "eiVQ7NA1oJGtg4z7LKnQdVLwwMzz5ebD32xsMtFsaZQLAfVehjxgpZWvSVt6v33oQrrTDkqiWvetdp41LvLcfis",
  "key3": "4NPk725szuH9fmMRMqGsCga11A2pJPh7HwnsjiXB5JpkxRMjD7NDWm4Q84VV3f6uYpLc6vzfD9rosH6amCL986i",
  "key4": "2PJDswDWZyEQdDjpoMSwEG8kPWeruSDhQQ6ju38JsqsC6ii1BuzRxXnWEpy2EmQnepJ6n7PWCbtVm4s7CbsvXKuE",
  "key5": "aggrcazPTeXRforQtJRN22F2mWAhuJcz5QY9CM5C1wnKUpA3zg46dAjUQfxaq8jixsv951zp5iMsLRSYd8TxLPY",
  "key6": "5REKcSZsWc1229JL5xA7gGU2sUPQ3NxMQfqZhNZcQH4h9yAcTsTEfsHoSy6wC1oummqRJiu5HkxSErLpXrHczRP6",
  "key7": "4hvpiRN8s22Sx9ZoGmRxKHGTDoojun7pjViwrfDqt2iRrrWtSn7eBLpUvHEbjKhN4RjxmZX5C6NpZ8hwNhrJM4ci",
  "key8": "3FbAbCs77Ban5myTDswhyYoipajHWBQ4Syu8t6Twk6MbCGXzn1Y58o8o5wSw6T4LmvjakNev9YuP7YpTCUNXjMx9",
  "key9": "2nffhrhewve7bt4vzBvdLEXkTEj9E2bUbuBumD9ric6kHC73SPAWvNttDcBsnLXkBfm2Z6C4ATgCNnVkpUjHRYbg",
  "key10": "X4qgUQpETfm6LSCD3b5v3EGSfixnDdsWS7xXRJWhEKmNAtZ9zVgShqUmo5baiwmZnndTCXJ8na6ZADWQMWD2h8s",
  "key11": "5eofNn3WQGyPbZo7Fv2R39MpPrE3Cx6VjPua5cedYLSppmRes4C1nWiFT2ERT48wZCk3aWXo9L1YD3Befm5ozE3N",
  "key12": "3kj3ennRbBN2Dc12GbXfJF1AKAf5D8HCs3m9zseFxoRAMY7wUr5aGLiaaREkfNsNPXKTHquhVcgxnCeybxu8DP5y",
  "key13": "2FRDbxVW3pBKJd9bg9Bvo1tznivTBatV5euEdsSRBGpvXeMz7f8qWaayzkSptopxXiWphLCZshARjhsC56t45pce",
  "key14": "2NHguV72aJ1Hjeom2AyzrzovnGqBSrJjUGjpDQSdVqtU7iybZs4ZDRpKNqZSdx1o1cdMZiU3iLV8TSLJc8oj6Ti6",
  "key15": "2w7CfBean4zaCh4S29C6E3w3H2LHh5MWazEmtHZsH5UMeWYvoKJJToqRc9Y8ysbnqq1MXSFYCzEniB3GPieWRJeL",
  "key16": "Qj5iNK7nhMLjtfGe5enee9woEZJMwzX3S9N61qgCZb5a97xWE5ax843UmRroP7mP7uMm9FSHp8VQrC62BztvRU9",
  "key17": "4dyxtD4NmsspTCTMdvnxGeky9KmFC6kWQSX75haKef4caueuGoxMJUKg2s8UTa9wsF9WcSf9HGaWWsTDB9yqrgiE",
  "key18": "4Syi8Y3VW93Vy5UPojMDx7q4Swx86wNxQvJtCuLS1dTmNBvTW6WWHKv2vX6y7z4ckzcF6jjBFrjpykwSjffMQDkH",
  "key19": "2LXnhGS2nhvjqCYgeRSsLrZVS8Z3qEmTQJBYymhxPm8cs5kJ9AzZS3DcaX1TRLVxijBymHmRbdTLvtRtdfudCt8F",
  "key20": "3P6DwaoJjx1vqBB5AsPUtH1a3af7fZD4ypfMHqyVyayMpejTd8nSijCL5ZRxFLpAPR5F4JSAZPKrm12BzHbgY1ps",
  "key21": "3xWnuFANBmYwCvyrcBHayNYyFvoZRjaQ2LpRKMqZzTLzwjDAH8AMCn4Kx3ntaXC5H3BmzP527JjgcdudzJnqtmYS",
  "key22": "3g332pB5auUifKjr8UMx2JBYvuosSZGuMATd3L5cg3Eszi1he5KyK7QyJgkHavmYGYsbpoYCDeZPTepPPo7FJZqa",
  "key23": "3txtj71cxvPeGmLHYyJSZKdinQgHtXCzh6HZieeifdkudFbfTG6179oQJvczgqP4EAnxjGzARSk4Q4pvWzKeJBjs",
  "key24": "3s9FXif56fzEUyJb8AgVC3ydFnb6pUpMgbTMY2MTcgi8HbWUe5Pa7Pvn8TM979VX9gDGTR6dDrMTGSyiSawUZBKt",
  "key25": "4bwWGKKKnhuhAAMLDFgAz9Ju3ioSges65RuLcWsHSNWc2wCpaJ1vU9qPwaUmdSyCv22oDibLQRym4NteH3RAcdWW",
  "key26": "QHFVWFUoZu7iVWZVuM1zDiYRHBXyY2VXvUbUevCn4QUUrJtXEGkL2yGiQZcG4usRqP23WNr6Ad6D2Eo9jDcYeYv",
  "key27": "67C25ru2xV88RvyE6mUEGiSs3zCBF75BRjQqXLY5qCBZxNcjQe3LG5emXkN4uQiw25ojtYzcroioVSPgbnC3WCA7",
  "key28": "4eRtZD7ZeNpaMXXbAiktwKqaSUARsJwr73sF5d9WJEeEcQ6AmqTB2BsCNdgcczTsi97pHsJ4MepUGhxtjied915N",
  "key29": "4mkhKHqAC5yYRU8ztURUZ6naEiaY5xXX4L1r7gE6avNLQizpgcppQLt4WHTXdrr11ax4Q5pAM9z3QqASMgvfT6z7",
  "key30": "5C9yA2RaYVXaw8JeS4rknnb73VuY7VSVJCwUtMUZgkt7q8EGLiP8ygMpqKDq7zJ1LNW9XZNGNCfuDjnkZUxxdHKR",
  "key31": "iBWgP9EYkQLkNNu141moUTpDwuXxFkLUj5zmUdPKWLwUxbretYZDWpixwwuYay6KgGz19rQhXJF1JgHaZikCf3X",
  "key32": "gBGUmuSavFCUVXSGbucrmjUqUsXPcaNMtkrEcFUN8QqzU9EaN9sdvCQFw5FiGLLcEMpG9yWJyy797JYVSWaK1SG",
  "key33": "5nPbdGYkafjadz3XN8kq9aWE2tiycnMmieJA56M37AtJQjZqEvjbGkevYeRTKAnfH86cBfaDWW7pVUm8tGZURCJ9",
  "key34": "4RgFYu1CoTqLvYFsbE9vy3Rsb2LwBQtXk5b8tMUHsqcyGdNqPWN8xYWj3ChahRNxeTVehf42gXjeqjpCHSNtuCAj",
  "key35": "5rxLMJ55CJDMgv4Ry2ES5weu1ShiMaxx6Kggcav6Fe73dTsg5b2a3nQzsuZMxZd7MMybaeUQ4EoKUBaNik2KYiYW",
  "key36": "4HaCxnBmYFRL6BV56Zz5x3AKwDSYyxyJMtsiRMBCuCLumteKmomGCnd2PaWBHHMG2DtALTUjwL5TSQ5ormU7ea8z",
  "key37": "3RBiHJ3X44e9nRi6kacY7srvzYyFgyUepUBuVMGqmi3QUrtG3bX7eTYE5AV6GadYJxDrVP7KiAZ5e2vPxAMMS9is",
  "key38": "5uBtE3poJdTjamfnK67icqp4Eu6Drsit3c3fq9fKazRKH2cSKpwt9h9U1qExxgTSmzNp8VdKdTwiuUwp6Vazp7fA",
  "key39": "57un2rvH8Jb7z5knhwU9ozBKhaFrP2r7VeXEHhG1dCS8GpVGg5ksAmfggdku6ragQ1BKbS5MnPQxupnSagwy9Yng"
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
