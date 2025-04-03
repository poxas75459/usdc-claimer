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
    "449i4cVsfR5iUJGn34SMtKPP935wJ9RqQWfdKuQrRhxnv5RgZ2oLxuGpwdbMbmRdGVvnA3VS9VhiNwULgDyNbHy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q3Kmmhz7rzxzbTvHUPvWdeJTsSx1WMxKsk1sXEUNnG2R1hkFWUeGWoqQMhX3Sm4vwbxjSYCii3GtNV3yQEaQ1Uk",
  "key1": "3KDhzVpr5thvmAKsJmdECmUCtfRzM6qGaenm9M3j5AgB1chBXrsSH76TTypPeUAUdyA4uDeLLxPezd8zLmH3h1sN",
  "key2": "oYVBq3C4RgSkrGEn7RqEPZvrBpdRAhAbvHCX3Tyr8n7fbbUNgd3A5o637gVrQYyzJgb1p98iud1S3PFyMqCAbdP",
  "key3": "2pDqWNajdFJXPLRwi1DfJb8mcSY5FUgfXAP5QZdYDm6SPCEBbbGVR4qJ1i2o6pLMxv9pTUJLrGS9aXDHw6YaYTqB",
  "key4": "5DAuhP7QCDK1WLbkQtND1rUggCz1NLrUjWspFBCk4UtMC5voo6pMfGxQNJvhB7sY5N3JZ6GSKHQfB31kuy4eD5B1",
  "key5": "5GrYMzpNpYSoSTnSz2BS9k3VaF6VTPUSstbAnGZRXbTusRYavwbqguU3EijmdXcbCbvEoyynzAxNeEeTn59YYkgE",
  "key6": "5aRkzp4Szv4WhUBowKn7qYtKUbFyoY8TWN9kGrFuWHVeUBSfX2dqe5o2VijGZxEtFY6sCbQw3URXyM2BMp66VJPu",
  "key7": "24KNkLNVjn5hx3hhiCtxNZxg6TEoLPm1X4zutfZ96XKEa5CCutUQwhnzt8fZ6Jd8BejQtNHiGJ97n6eqDpWCunDq",
  "key8": "2VwAnFaihFcbTfQbdbCvRitgxgmHoo4fwYvNLqDP9gs4QXUMXE3amskWmgQfSp4qZokGXUE8z3aMW3ZQBcdyfKgh",
  "key9": "AmR3DV82BGDiCADUFFL4Beju1fw7GaZuz3hPvqNx3yG3HguY4cQ1gqT6x9C5x4vFxT9eJn8fpZEE4kypBXHWscy",
  "key10": "3FFACN9zWLiic7VQjNKBPKnpnPrvVYJaoszeUyGjsdWbHFiVgK3WArPXrWR36pHFbUZ7t4VRfc5LUFSuydSrwvau",
  "key11": "7BRwugTK94cryuy8Vb5jQscQYpjFZe62YyFoXQoHUZzp5SmLvYXQouo2zRGgcgGKQj1LHckQjcrQCPxk8NU69Qp",
  "key12": "mzynnZ1kVhFKtj92XGfwYaYyV7w6fgUKK4SPRjtjTxgMZUBrKjgG3E8CyfF6NgKneEEn1WMWB8Ti25MJfVohGgq",
  "key13": "hJ83diMdaNEEc9UXB5U3AwvaxzvBquDmZeqzhymaqqdg8jsxjLbt12kjCcQV3BUz15cU1951AUPKXpFDWYiu5kg",
  "key14": "46ZzSYhFeB9ANWULdHzPMthi4QDNPTuM4ffUecQ6KPYz5pAFkLSua3aooMQbvF9Z3FwAWQz8ZUgi7hFHH1jL41uC",
  "key15": "53pQ4wYj8zyafCikgtyUJoGBzKiiZYXJmQMsLjWfhfHhUXzFrkN81uwYyAebd9A218RTQokyESrR9JpW3NXxbECA",
  "key16": "Hxmh48qyqiQv6kNvUK2sQVPmTRDKqbEcdZLRqddxnCvfQ1D4UTkcXXmZLYfwQbeD8PdddX8DfASNTVbm9hbWHjn",
  "key17": "ZWoUDz7YRynagELjZFUS41SKGfptZjTMxDRTFRYS7DvFvxfyFzoxEXeYbxuU8YKdMcK1q5yjEd81TSCFBMGX6HM",
  "key18": "2xWSiHPvVimEbPBwrJStVwPC1Xt9yiD53i2kZFi3PYm9voYgJDHVGqM6HeNziZZvg9HQ2hut3fEYq5qRNLJpfyp9",
  "key19": "3BDBFJ8Tujn1iRm4VzF1qzbQsmScACH86jYBpftEUzHXAZv1GJgXHRLF9dkvpiS7p5HdB5GqhXDzAMSSbhGmH1js",
  "key20": "2uYjoU6ba4UmcBJ9GMMjx4PyNeGiEP7kpdWZo8QthVrF4hTbjYCobvqo2nKgGh3d3kVz36pBvCBkMsbXuotmG5tP",
  "key21": "2SiH6ELDw78c4dK9hpQb7RXSi5cGyTbnx2RPnayCVYXjGGJMZ2UyRdLS3PUsmHpMkHyVvWDAZPTBJPTm1aUGw6UQ",
  "key22": "63goj3wcqePmUAPxkF2EL1TU7wNDQn6cS4hQhJbHcxV8LkCrbMEpvA8Nx6EuY3V9qboD9yDVXvu1vuMiWjt2NWWY",
  "key23": "21Ti2SGGh39TNUgcK8H95Aa6i7nghjPtJH4sAcmJiAmugKGHr546s8NgoYPmynF794jRTcupyFqLgQr4HPRcN2r4",
  "key24": "5iUswyhy44yDyBe4jrTM77uSv1mBSgeLR53uAdTJ8cdCpwdczjhfYLV3X8pAw5vQYmCPFgLmQRiP8rgpmWALkmrU",
  "key25": "4g7uVM8AkB3NgHS5xUg7ZHMUMi96rokzitzLeHZuaPRwH9AB6aRU9wFb2dFJrMzPrWnwe3rMzTUCPUp35ZW9Dvz8",
  "key26": "63tug2XvjK7p9G8bHoDf9wky1E8CexCE1MrHg4w5PbQsxikFLwRdg3pYkaBrsiFwrbcgbxMEF7G7dsc96ZiZw3hA",
  "key27": "V1HNgo9Mk4TUUETmMLFWqanihwADR97ikVjf66QhuBysaScJZftCB9Co1Lbr2wu9Qz9wBpZSC5ipSPiYTWMJwcF",
  "key28": "331WyRmSMwVfCxZrLMXRx4rE2GJMX9h3foZdaxBKP9BTrYSjUxPEewt7tnkrGt2KK1GqcbYauFSg2bBxfbXz7uGQ",
  "key29": "4dCaHaWGNJegLja9UdiYgDqk8S8vyRGHVejPP7ECsg7cfg8x9uvWD5yeGYeZcTA4Etekine1oMDR7yE2YpqFMuoA",
  "key30": "5e4VwyNHWj21Tsa9t6xZ1G5rQBGJbhM9MipawyNugRFNZh6f38xSi1MRDMqJZjiNpVKcn7e89TJbEhXKXLgccytA",
  "key31": "Prp2RhL94eFqcVjHmxNwzHYdPtYT2PXqDnvkUEHiESP6GCUL1AUwaRsTaqtg2h989wRmvzmaoewTDsewz1MB2bR",
  "key32": "4MjADA2s5LLphDFPeTKmhmq6NHTG4D5Y9deWC7M6buXKy8ALfBJ8d7KSevCr1D5Sb1zEKdjXXoNtCaZRNfQYfmb4",
  "key33": "2RmTbAzyXWAygWK7uPev4MT99dEvHy2JQPWvBEfwqjVAmGCbtPXkmNUddU6AZAjfaeYCZDGxP838XKDPC4Wxikxu",
  "key34": "5kxZbtTcris57W5aU229YSwsyahd4yzMwt3GKdk1jzdZv35VFmM9U3Snr6h1H8D4Z67XaNdS99oMcSww23E85qAB",
  "key35": "zNjcr4ocXQw8LEuPEPaHBH8vofdeX3JQGEdVa9RUcY869KGKwhrqENxyAjT5USfvVw7JxKZjtyzofnoya5aYhUp",
  "key36": "5dWKRHC7vFyjJrbM8z2nSD1Pjir6aqsaBuwTqe5wtxppXnoN4ieddgVZMc7Ye47uXoXZ2oiC6pkECGZYiDWueecj",
  "key37": "VV3KTcQoj4kxkM8JBxuwqVJ7qA2T2hrTyLHdQXCrxoRFfNy284AeknufutmRRkMUA8uzb2aNdAwS93TSMJnQbZS"
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
