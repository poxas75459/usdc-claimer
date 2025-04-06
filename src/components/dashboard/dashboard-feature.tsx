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
    "5tizbh4q9gjcwz2JpHY5vGtuP7pAz5WPDdQFEp9q3i4JsKR7Fqa82X8UksVJnc5g1hCeY4JxDes7BoBdJhKepZb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bm5PubRfxrFagnbfsCTgQgGrbFGjaFeRPbdhuMB4hJerTjWWhJqVXS741RvGtZ99Zrg44t6h8jjiRSePHaadTYH",
  "key1": "4zPVj1FxWbqJZjjGqa3YBkSdz6JvKqDcgey1LWbTjaK6VzEfJPW2Dvk89KjfJwFfNAofh66tRCRMCy4synSYE87D",
  "key2": "5TvvBwViCiFBsS3hCL3yepChCQckirF1u9dw6QUJe3SwJJHycdWnAc5cXkpsc46mkR8qCRDEfRj5mva1eUkiqvNh",
  "key3": "5T3EMGbFJuowuhXvGrVKUmfCrUSuwGLUA9e1ouJoes9hwGnctctifhWbU5xNCGCfqadQerGnq4niSVVZrUgoXmyW",
  "key4": "5S1VVcVdtywMez89HpdZJsfwCNS7yKbyYnLn3ziEgsdLSyS49Jt4A6Ggo4UeBNAPTjA99hDSdzQ9pqgvNeapytz8",
  "key5": "3PZmhgjvQcVcx2wm4LBa21xKVmQVs2UWpZhEmMGSFgFKBzXrgZYKicutJAzr7YbMquS2jcXH8k2iEVuHJML3gAXR",
  "key6": "5RbtGtqLFpGLe1rjxAqHFX49gjWgYG21c1xyuVkPeBH9vSo58brr1bkEGM1mJW1mgEKrksmoUrG6v2ddn6f7HN87",
  "key7": "rccSdVh9Y2zeufeyPTfruh1kFYkmXkRKyvKByAHLXgC4BSmMKuDBHRrnfiUyNsnxpP5AnLaBMVfy7eYnbYMwLbZ",
  "key8": "2JR13t3if7JPDn9QkWxcpMEeekztu3RSMB49Ur74JXzQDk3wqx9UJzaiKTNQSip2dANb1Qxn8WNi28CPTd1zYxY9",
  "key9": "3Foc8nAuXDT2Dv5M52jHddJAT112AyDnihxSLgeAivX8HCUxZTGUhVgXAtrca3wSH8ewgS4eyjbWFmoqBZiq7UWB",
  "key10": "3M6yCembRJ8uu4VcLKQhjhWuKkar7CaNSRXQo7fnQzynpSckFE2vW3cLqAM9nVPggcBVQhq1NtZgR7czRiJh7w1t",
  "key11": "7GRSTYrWQaLzYcS4gk3RhW7c4Kq8tvExagSXrurVMxNcudCDchFep3h62TkhcqaZJwukQry6ftNkFmUKGbpBWLn",
  "key12": "p4PiEs1NCTjzHZxGYfSwB7zNLc1fSzVva17TkB7y338YVyVDtXhDse7JvViCcgyqP26hx3VL25HW8kFfnkRdac5",
  "key13": "DUABD94xGe3oEDgpgMtA3TU2UUD3BySu3AtHF4ZdWBKdoJL9dGjhygh6oPqKPXvEnSYBRUJ6GRNeQvhgbJrEDwc",
  "key14": "3kZ8HqfWfDdWkh3PCQFAWgrnKDU1JAJHDqXADynxfRHmfsBkDFZZqufYnSB6xjSwCPeCQqWDDXGodKEpWnpcJhQW",
  "key15": "5JFHsG1rxJJQkjiPbs5GzmifYLJE8JFzgX7okjwida5w64KZWLkg1ssB7Cpo2gVHJscPEtE2qnZG5iQF2RPSUzjS",
  "key16": "5YVTsemUMBUEnudRPJh99i4KsNWgQK3maWFx7woBtTdVAfko3QjrfYrNPVoiqP1wF6ecXhWtZwuAxRmqKwF8WwBS",
  "key17": "5QUzy73qPBaT5h47ocJBpFsm6oNLafMkG16trWHDZWk8CjTtxSrdt3s2jug3dTCAtfMTQTodWby6pQnZXrbyAuTr",
  "key18": "eY7GxvFDuhsGfRHabYCmMSYneSokB8iAShRAuMoEBt2bFUSfHSkvmi4gu7CHytuQwiaPSyf7itJBZjJv2Sq5qF4",
  "key19": "TKFadTgVFSjciTXpfa8hsRkfTuLx9YPFeAhPjL19SGamgVTG6g4Gsdad3WMmn89icrbiHNZUAP2QTNBzX3BKed9",
  "key20": "2K5aqMHZBfnswtiaru9QKTWCmABC7JEUNDUo1ct8j8Z557MZTYiJRiZx6KqKhSJeC6G2AJTmUaV9VHc5Hey5cpy2",
  "key21": "ha8rN8tFQj9YxHNDYkjkRMK1XprH3WpHTXBHJpxanfGhYW5UxwZhuqCfRWaKUpwcrpgjjeidXCRz7DUQ7rHcqCx",
  "key22": "5FTzT9PVCjQWdArforWQCryH4yzh2vigkSVfTKksNdXJbtNjrYhWU3NNH7QQe68BjNBgkDUzK435EwaBebRhUL1x",
  "key23": "4izSjiv2YSzpZsdLBxx3iTa6tKWDEXVY7HY6kVyZME7LWyk5v6UuJ53JFwFdiH7ZZBScLAnibyqUiksYSspi1yw7",
  "key24": "3QiUqTULELFXEVqHZMyE3gBPupXsYpd4tzTccKFUziP2bkF4rTs66cMjNgV1iBbjZqwkBsJgd2nvoULKc9uG6wmr",
  "key25": "54aMwTEBv7uF4aZLkSpraNRv1NzyguumSBwrNeKCDqLhySKeovAt44Q1wNpWtz11QerFKzDmF5YWX1kDSr4ecYZQ",
  "key26": "48vnYXgS54yCsWp2ykXLFmcp1StvUpFETrKqEmfzDToMLk9QK59mGqk4jYRTXh4sLpk24zWTBCMq6x55Mft5MoxM",
  "key27": "4rJ1GdQjggrupDzzzJERSd3eASmhNctaioJzJgHP1oqiFCXKL1noPDUZvu9dcE2f9fwbkodsmfPg5sGNYG2okmjh",
  "key28": "4vqFqnxzyVj8gk54bN1uAn21X2Nc49br3tJotvv1z79wmYjpqWM6j7zrvNxyhxp4rFYXEy8dJivtau4bVuXXDyrj",
  "key29": "4RD7qamX9qNZ86NDHwWuuco4uEXcwSTvCYDXxczBH5AN4eTdsx8J4HjLz9bSySXEALUE6RpUJ1gFLVYA9fCCj8FB",
  "key30": "47NKEg4W2NDXmwKj4hb8NfYmGJKUJjZmY2JmCSJUKv5SAaN2fhct29hzib56WN8bvHSUyT7481S7dJrbrG68WH2",
  "key31": "wmwAat3Hbt4wHgcN6rrpJLaTnH4wjCFtsXcm4x8bLiqWpiw3C9Nxs1PZWu3DBaTDadfEL2JKm5qCuNPR3wqfhMj",
  "key32": "5UUrajBcGhoCWbSnPdisEX9iL99QTvyADFShk4jsYzCvT1jMDTqah2j65USD2F26nwPFn21iKNXuC8QpU5AxhGpC"
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
