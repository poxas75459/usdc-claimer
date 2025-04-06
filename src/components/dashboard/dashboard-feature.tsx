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
    "rAhrATeAQinxyWBP6y39zUC6ys4zQLckCwFQbS6y4qZMoLd21b83pqkP3BdwQHRzADEgJpJbss2m5ENY15RxFiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bzYKC6P3BDvNddMr3s4oqCf7N3prfMmzijVM7517rK8sFqTrrrBbj7dEVbRk2udkhMgeyZY8JRkKN1pcHEK26mh",
  "key1": "sUNsw5tF47p7hh16pfEB2tPUQXpszDsWwut4i28Y9qTVpfkW9dzZVzjGQGV15Kch8M4ePLQDutioJKA9dTwDcE1",
  "key2": "iQE9bGPHWU33qFuVyKDnjCMTgywPdXRV1Ci5ggLoHURBEiSM9jr1bFDhD38RRwkFpVXWZptaxs1qs61jA4SjqAU",
  "key3": "4bczd5yCVMuJXwoytpbXcMAFBxCE8pdiXqq2R9xuxBnNhGrsb9KP7wivBrVf2WAbQX7CLUtBUUyYP1VXj17yKBEB",
  "key4": "Gj6Y2emYAhzFxgTM95dQeN295p4fucUp5eyYfVDAMWKKbFGvVe1uMgQHgDMxVHzEGDfvocN2TEUvtCmZwJne5wn",
  "key5": "4EeLK9RyUacajmHi5YDN9wr3wCVgMDmZVYsqVFyLBhJtrtBpYXFn1h2kHr83CF7EBttZ1Ro5pg7J81eFkVtKdntb",
  "key6": "5NQHDJ2RBsTHRPGMiNMF6RnogPfCoDPjHue8SZZCRRKZUHreBgQkfYroctPwbfnUWJXcatrzh9BNYGmy9iiXMncK",
  "key7": "2AmcwoaM8Hqja6CfdXFs89xNVHVVs3LUmdmbn6mMY2yLTcjDTR9kRbhd5kTSrLRw12zuM5JrCDSYSbDLHRj19Bi4",
  "key8": "47WRjizjMJ6u4qfS9YXXEwnk8NsH4omB3GhsF3QDDa2NL6wcW5UtZrfA96NDbSUR6ho9qT36neKfDSVdrQVukNZU",
  "key9": "3m79Zu7PLTw5uYEHHsvAhajCYg2RyQtBpbnEXhvBpzM1AJSVNEH6kPBSXweJYepbABxgArfDyM21ATbzuLgR1iZi",
  "key10": "4RVDoqyC5XdUqyGgb2qpQQDmRxYqfVBG3x3JrdMRUxz6nGU7DfiKhRVSgWgKoe3PdextTYQ9PejytkJzAnAkhrDC",
  "key11": "4QYRDMwrnDZB6za4ktNbuYurAcmkxfLS8zqSLs7ZuJ58vKoeXYK13iqTnik6x9tRgRUqjtHrJnfi7h8rzZSBcDtv",
  "key12": "2H5MP1UhcqGDjfvkGu24XkmNnwrmEZS4yfPLaGW968WtjtgDhTQmQoYzCuHfLdsKFwG2FF7EmsDuQuZnimn7XVmK",
  "key13": "3tx5CmGfktu7sQvLBCMKNc54YZUB1py7isozNkmjcMEHXQw2JWQoDNbFRnrwJbARg9Ghvtr7H5s7UrmW1PchQoCn",
  "key14": "3MYvd31ffuvS7ZSmstXDXPVvhxfcdsE89gHLbunFkyAz4c1udkrVqbUudy7rxfstxTEJPrH9fhhiTVnS5uEKEjAV",
  "key15": "44PKWSoRNnzHGpmybKg1yHFrjmoZ84qJ3nJnNvCEJgc6RPmeKPxidNZVCcwFMuQTJoSQkV1YL1bh871jfaC1x9z4",
  "key16": "2xiRUxwM5ZSqtFCSnqvwa9bACqUkjQh2cFNuV7S3Rz9rXZZp3CyjtS3MqxbtR91KKfRpTubbo2cr4Xvv5CBQYB6T",
  "key17": "3Y2vQG9rvG5KmgBz547Ftf7m7rBnmBXtPqyB7wFzp1UxF9Y7kTE71b2ez6SaYpbUuMU4jh5ioJVybEwW6pkq9XFm",
  "key18": "5zQP7D8KqqWyTAQbwycrA9JGFHQwydDrCPYwEfPuNy671YLgqBrNykALSMWEKvCK5n3E8TeZrcyRAaETDmFQz77h",
  "key19": "3qK25JwrU6rMuwfC5WsYdvtnqmYSnVQDYp9DhFoxYwcb5pVh8sdAn4LLbNa6g6p6QpYqQvYRkQCH1iHVMrY5BFaA",
  "key20": "8qMgNkZNDCcraEYUPdYpvrZwh7jJTaFuvEBd8vgCm1ewGUN7zcBYDtsAV2WJvxxwihCStnMwDoCEBFqSVgFxYnj",
  "key21": "4h187sGM4GuTPbW5Kf11Riy8i3GRpHkSsRwerHHyNyCBbbVyw5PDRtK4dxUrrP3ufmEAuEcYoe1eNu5npxUyPXS4",
  "key22": "4GxFyLp1SySpYMbriYMXuBY9g1bYTqhkDYBwv2toE4KSABgMowAWymhnmdd9RPJ2doa4o4SaQxVfkWcbv9tJQTfp",
  "key23": "3LQhj1J3qUVQinnxP53zh7hJA348QcaZvVRo1HoEVHxhdiAbRPkTZDVGmSWQ3GEzAuB7MdykbgF7XC7YPoTMpgNN",
  "key24": "3VwBZHUXU5tN3Wh4fjYJufdrNu2timHuv9PPUFf8nTLRx938rb9FqhFJsYnYbtdg9bhQdSStKKQz6PeQS9dgEjiG",
  "key25": "52WDa1Wd25rvZm9fKj2JvpLaXwQ5qCzuQqsXBTyHUCTE87L4hZ91hHrrukHbnKmwCbRXTzBwL65yYwHghenHZWAH",
  "key26": "DeaQZLCc2wCNQXD85aLnzbnQcJ2HtFR8sjEgRsaMNF4CvBf4QF31J2ctFRrJnJgA9b2R4GmiXfapmSHesGYxEyY",
  "key27": "vrE4LzDdXgjiYLp5RpEpApv5tkLk6bKQYAgGKmo9vbn6uDMngz78EqodXRFRG8PScMLD3FnN1h1He3DccNYoFCW",
  "key28": "47VhFMVtVWgCghRDKMYzQsprcLuAQVRukAuqyJQFhnXVbWMMNp9V24UsNhkNaVnVfkJ2nnM8Fxx4tFwLHF9Msyst",
  "key29": "24AjSj4VyxH6mNNgYuAvVGDHNpt34BsGf8hQ3wiVm7KSPq5bG6Wr8nSSY1UuN4DW5ww5qXNQiKcMysn5GjTU5PqB",
  "key30": "24RSBfjVmJqQHBwhK5dNHyAp93pRNsgu34UStSQm4jrSJofsRPHEop2q6uuVFdCo1YeivWupR948d3JHG5tQ1QNN",
  "key31": "35dT5wWNuSu9Xb9BnLBJJC3Y8zAGdikq27jykg3dUjEzwrBUJgHWHWDG6vZLG3i7731XNtNWp8H64cKnBThzJRUZ",
  "key32": "12iHpdMCV6jyrWYgDCrvhwwihNu8SwUarZ3znrdBfcPdsPDvzertHChV7pwMWR5mjLw927mgV7wQeYHg1t4ZbkB",
  "key33": "5Cj1FoE8wfvmtpRU59P4DT9unTizb5mDNqG1Es6K9vHQSj5aur2QPmAZQY1enw6vEo6PVPBxw4wquoR3u45Mfjdn",
  "key34": "3fuwBmgSuTodKzVHBjYd9kku7gbm7qYqHU3y9zRNKh3bayM7KdDSdNBK8Yv6TgqPfzDbURii6sSTqmAuSmq81uq",
  "key35": "X6443J6uxNVQQua7pempsXKNpRU4sDbav8rrM3YD3jsMRZEX1DR4XT6Znn4J9uRmaegiaPDj8yAdsWurBJhqaZ3",
  "key36": "2Z8jGemnEN58Z275ys5P6tmojQhXAvMegjYaE2hF1BWmjdsWMa9UNBQsLKpqdLMxkwf5EW5fxBYpNuHiEHbTWpvy",
  "key37": "3uqw8e3JDntg1impPbeUkskdnWKbRvcPDDDty3S63J3dyCs81CML2X7PMGEd9LLhfsysezgHtYUcArdZbEExku3s",
  "key38": "3t52th9bnxNthFkgbtUuZhPfVPgnTXKyTUaArbLRyaZ8BcFvfZaHNPAa5aQvE3pfZueE5zX3ta532ZxkbjUtpaAB"
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
