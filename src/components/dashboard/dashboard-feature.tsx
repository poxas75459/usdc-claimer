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
    "4pYY57VtYEHvQQRTsHu8XGg8sedh8u56h2Vt4GCkLiWGkUMiApJwYyV7iqJgs9gcK9mwBSjrG7XCq9Rtj9ZugRZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uo56f6Uh28wzLzBiV5NVyPNTZT9d2kHskLunUbYfCv15xRPHu3wAPTG5AuUYik9qV2CsWBZWRZAzz916y7tR5Ay",
  "key1": "3Dsg7xy2HV1bxj9ZuW1eQ253EK2GBh5WgD6LW6vNibbMMJikYNCB1QnUUNifGCtsGZp7zBi8d3DK2Y9HKxUndvR5",
  "key2": "WPAURyB5i4t5wuA4pNjQMa4RTrbakwBz6cdA2LNz8EU55DXwphPCww6hiHYJcT4pgHZjSJkYgPzEev4Np47hrFD",
  "key3": "3mxVbYZV21zGTXXcHTwSVXsbM8hHbeyXPevEY7jdJH2n3gwQEfbPkdPmCHoGwMJuwhxdBebjoUv2GJUbgFAStM38",
  "key4": "tUQ6jhbr6WNqG67HhDNCFZTrgJNxyLef9BzTxB72neC7DkPJjf1AYWMAqSHCf3yTGP9Dt5uThuZxNdAGnQPppbC",
  "key5": "5AobQFQKH8bbwqr21qCqtR2eUdnrTMi1b9NkMbhF85ThFdcsQeox7UsSz874ESvdnpTg3Rr1h9YdNDbNVqfJMNT2",
  "key6": "67oJdgeh3pHdkmJ2Yw31dAaD97FtARBGanKg8fkMFSBEKjr9FWJMRQACqYi1VCGN5x8sWEmCMa1wSYumVqbpRZFC",
  "key7": "j7vaHVugtP11tcfa4kuxP9SYfqgVHtQ71qWf1x8FQtmxZyVeGp7bVU3rbvLuHYuWwLun5AG5y8qyeABzy5ExuyB",
  "key8": "3B23QCMgkD14zAH9Hf3tCNoWtqtM3MdQ92VnfzjTDJ3nX86zkJSs2frGjncmMVsHrXTKjjHhNhKLRhyBDc6HKMp7",
  "key9": "3nfc9gmCvuazK7NS7F1VGJxToXdd4NGTarNnGuQDyq68LHaEKGd5FWgzDUHaD66CCfDETCc4Ag6gda3ePZRVB7Ya",
  "key10": "4ZGhhtZUGTirkxPhGbM1BBHx7mCYWQufVoLWT7caVtt9KyfqtgND3DhreN2tnc7UWU9mFdw3HGp22j1VZZGnfC8H",
  "key11": "2EzUNseevjz8PyPuZe8TuTUHEem69ptLdDCKnVh4fSiau3p9Krr3EkmuTT1wsv2DUeHt8CUDFZp4mPkiMYDpwmy1",
  "key12": "5pY7BMgJyJiCnfMaNKJTJwp4rcc8wTWLzj6zuuyBtUtzbVEbLs8QegWJfyuNz3UtUBXP7CxMxwxb9eHPhVSr2DcA",
  "key13": "5sS579B8nS1vpLoT1A85UVFbG6WWfCLHVLntpbBedTfCWp9xNoM51jWHjm1MhFnMRHFixD5VQCei9QKAyqEDY1RX",
  "key14": "JbVAgcKTcGqoTQHFLjbFgMxMbfuC6U4StR8ZRCkPQKjL5ENr1UEAcGk9aDBvCXpiFn5Z9x4itYMkvuUsqek71gz",
  "key15": "2w3jCG5W7rgMp2pYm1cnSgyByE92E97bqKKWwiDwB5iwsn5f4Xk26Zog2fChDv3gcfcJexeDbBwCuL6sohkgEdSq",
  "key16": "sNxpsDhHgpD43DtcXgHuNDAPNvSQfsS9wSmfqaQC9KiHH8vUJn8F7zR8SaVRariRK6nzWy9dgiFyPBZsDGL5exM",
  "key17": "3EJgndTXEGCKkPdYAAdhEzzweLd5z6jmg2w5M92hBxjAmtRe9HPd5DiWp7LsCSjSWpfdED2xJ2utLLVyu9ij4nLR",
  "key18": "3oRhAHqJdUw34jLSMccumjbYrrH8QDujQfoxbmR8vEUCCd1QbHVY1Uxe2eySeioe7qBHxGUhT35Tj8NbZNxzF6j3",
  "key19": "3adBN5zjV5Nt5JPzHRQSM2KoNbSCXaGVJyJM9KQBo3akvmczWqgutbwD92ZSh7LmdXopiXVKd14k3FPMZVPF2YNc",
  "key20": "5cfx7gDDcdkdGc4azrqdaC9hof7dB8o5zkCmwhWtv8DSsVmz2dot8V1k7x6pQTPiMF9UKQdC7HvdHjyWSKjnqLR9",
  "key21": "4vMvGiqyFRDFZyf5wG63DYW26mCzkswcXGevbHUGmXRef17gzyT3QkxjoWv93jyqV1HTmiharbuVktB4Eo2qH34Y",
  "key22": "65esFfjKchDZjuyFCdQGGnApVzWvg74YFkJPkH55z2yH1rzc5q1zhdBwK2FeWBt4FegcRHqhgjEHdEzBUXf6Fq1o",
  "key23": "eWdFMECcthMTMYhnZ1C5Zf8hgdkAA3ThGjuQWugRzHdYxEED5pzdtybu6Anp33v1QSMDQfUBPh9Puz9AgyuUs4t",
  "key24": "3Tky7mKoMDLVF1pAdMMP2YJHtuJB8mQHKLPmNbU4RGQ85E8eeTaM9qk5BLKyTrVfMSHWtoEHBMTFsQ75Tsb9xGms",
  "key25": "5P8NwVNXJW3PorQuNXp9on9Vg1JCRe1JtZ1ECsFCHKSgAHPwGYBfFkSgA9kEWYBLehHG5tPuH3P2nyKqLDrr6g1y",
  "key26": "3AM28ybqoZsy18Z9XdY92GHZ9gJwCz1axr6T9KE4V3uF9cfNXhjyghWaSe1k11m32PNVV6gR9eKEVaxkxLDUGrqc",
  "key27": "5eqzQjY5w2HeKrCKRspmUg1cZh2HmQrGX2p9Eurn3KcojQbFPyud9GEjvvZ7XYjjUVFALLMzmNHy6Nszsm57HBqh",
  "key28": "3oPzBciHL47Yds1a182L63C5AHbACJLxNgjazwHqm9krsrLHrB7NAf8oqrpxQfXjjCFYy7yTY5MCFy3itf3mpRJz",
  "key29": "jttjCmcKmVPuZfV4YENFnwKPeAswYerdh41SrwesSHi6MFD9LUF3jfSYkbaSSZcj2nmN1ZNuD4ECJGq328EgeNc",
  "key30": "496yqvR7x6sr4Ven1cHs2X1cQYAWHnMADwfEWJW5fb1iarppM5WcWMtenqgDzZ292MM7MGr6nHe4q5cqvAn9foje",
  "key31": "4APD4zVWcGgXnPCYggDpdoVteAi5vKdtdLmhkhga2ePxeGpJbmV55kgmVDwekPF5ZHxyzgSPGRtyohZNWWo56aSR",
  "key32": "3Wekcqfga8drRN3SPTm1CWgx9CWSmwuqVztGR4bKeggTxemf3JvNZBpzNaQXapYN9jYv353vNFC9xP7oYTb3rFum",
  "key33": "Lh49Xn9ddT3fxxgrLUQu59qoRw2aKJpn5w4SbBMbYQNCYK9iasXq3U6Kyk9pnpwetvFp65Zi3ozBvhf6aivjbUk",
  "key34": "NiZLp7qJgs3iYBaEkxncfxYCqtReYN7cXJjhRX9nndW1XM1nGVGMoAwPRUCuwy4Gb2im2zN3qDpCe2fdZvnqWUV",
  "key35": "4qJFcTZtRF49v8tzZNZ3PW9VnSGb6fhEyvBkXctG1j5vv6E2aB22FGAPaiY71QyePr6MN61tFkt3inASvAFnmxQ",
  "key36": "2pc5oPSEeqVo2vYgQK1HKYTbx7M3zRyQkzg7vw9jGikPfyHs6gg7Mv6iftR7dP3KcXZK5Ci823FtStY5wFpFR7WH",
  "key37": "3yvqd6SQApdaVZUo21mRpZFqajjP2kkc74BNkGy3i6jsbiQoM5AQmYoz89qhLRwhqU8HA8mHGACbtEtLGiq2RzVq"
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
