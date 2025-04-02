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
    "pFsdHRw7UzH1obSwR8EnUzucMBnsMURAHGwkjq5XdNP1XLtcKhndinYWEb2RcApF61rwchuGWnR7AjkDpKWHNTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "auJmQbGJRVuU6nzdSGkfHY1XL2N4sdq4WYFBtFqD1zFQ7egMKTYM4ioNuDdWvgvgoyrGLKoqAQ9KMdHYYifmBAV",
  "key1": "2K68Zw6s4BiwSEzPLEdKKmcdGNF5iLx2kYKtMiU6tehHTSzaZHQ9Q4pTo7NrrC9eZMiDQ7n7RyRo3bsa7RZK1D1a",
  "key2": "4d8n8axKMFr5zusmEa6Lzz7dpXkrHZnpwL6fKoDw4ZH1yNxTa147Rq4byvJtEb3Ky3fxfJP3K7tSkD9DF5ZqqJES",
  "key3": "2DFA2NonSN9AqxxobWTZ83Xua87vw9ycQB8upZBbfYWsnJe2DeY8L4UD7s2pAQNpaGsaJAtNrv6ZBN1jjNpR7G9M",
  "key4": "3gPgAmCCKshMTh51Xe4F8BP2Bf3WDTWc7ERuTB2C6k1Y1K4kNNZ9XQGzF93wJ5gY7wzHm8ATb4PfNAzv9TwonvKX",
  "key5": "5zUyGPtA3ukZQz9R1SRetgeoKV8aqWELRcuznm1KWedf86wg8YHLfdBCqR8JeGZfLFM5BShMRDS2d1gv21LhttMS",
  "key6": "22TbUvyPABAaJ9WBdSph3sGFmDxpwbPhzLMg5rqGKCkp8zfr2NonvNRkXUmAcU9idhfuwqyZvi9GyKERmZxhps5U",
  "key7": "5crapBMkhjs95n6aeaQLv3763uUp7R7qXJEhHWawxETVSBmzPpED9HfAqAXMUkENup4jobLuTNc74xSzwuS3GyZb",
  "key8": "5CLCw9PRy9JtwQN5Rn5htCRnYhDHrhWT9oLaZ1JEkgNEQek81AgdkujYBpSYcQRFzFDMqFP3HNaNZwacMuYZv3c9",
  "key9": "3ZmxqGaTzV6joGgauDhbXgdHMg3u3w2aPFWdjS4eg2cVftdyTEuACFJjyNfAknBviUUpsh9F4Tb6WwZ8jQfShZJR",
  "key10": "mYVZAJFYDbttr5k843H1abkqbit9mmoYv2i3Q79KBuiPxfarCGfWTCprgDWK34N2zijx7vVa8bJu91kf2g5EShc",
  "key11": "3RioGPdB1yyCEJ7skdJAKAzfFQHANjhcb9HPkHCzUxTqdKCqDi8ijJiJ9u1yBkFi6F9TtsQyjpxM35FA9rkctxc1",
  "key12": "3LZijj7b8b9hBY66ixxrRSWAJAEMNyjb62J9yhfcKVEng3QHmSA6bXcunpuW5MP5EgCnoVKYXLdLridZk2CbJ5hN",
  "key13": "2uwYrCnCyaByvqGiib5DNZACTUjNZPkCiC5cUusjapRkc2b9NwXxpvCiUF5SSxKxPpTaCndjF2i6dxZxzwgke1M",
  "key14": "5GA3SF57ZY24eSHEycVNv33Fcruh1r2Hh6kkUjvgXMT45a1jvBUorymDYyqy259qMfwQ4rpY9YjZcTnP3NdE4PQn",
  "key15": "4HhZSbibTH3kNcmUBJeNvKWE5TSAoFfa87rFDpprZyuY6tNeiLjbFkwxkMaK2cerz8hzWZVxz88coZCe2BoJnd5L",
  "key16": "trECggzHXJKnGhDjEdrbopNEoULYbrrDRJY2hptEwePwfhB3dPqNUv2hSDSuhYPj57GkgMvokkkm1Au9oJZ8CiM",
  "key17": "245rzfNyfGP6YtZ9h6328syqJa5woHbKqdZdxkSDsaHXgdoSzyyVpbVTZ7pMvouEVmuzRvCriKVwhEtt3YNgYVES",
  "key18": "5vwVT75rXEdU3i2RSZB2mzeAazys5DRMiMA5H8ZbQxQ3mRC8A6ThyWVsRksN9GAUQJu1dbJ6S7bJ5115tGBeJZwM",
  "key19": "tNS11bc9bqDeb3rR5s8MnEaJdeRUET9D8LhL9VeyXQnnfdqgJRszF6ZvcJGMXuYso2X9TYLwCPDKXUYfBMbPLa1",
  "key20": "4jBPoLALmvPa2Vi767KDeBwUJnc4DAhSwgMK41cALdbaw5GyCP12rdTrBAZmJo4VWi9zCNY1ikkeU1utMc5MeaGf",
  "key21": "4zWZBPXdqJvHe765xnSJHmA3gZzGYnAuK8SkM8StDbFPQtPVhLtjcGjHhm3J2axJvPwrJRMA7gUgnzCXuRExQd1a",
  "key22": "61dRBMR66CvwigS4shvDpMVL375kaVJBR43ERc8jdqJ9FDfhVhhZMzhxuG6zYNH5pYsqYCRyZieJ93QjNupkvmmS",
  "key23": "5PgYQeDz6o4PtYBsAYR9Mq2CXRK7roTNXG4obZb4ZiehedTCJQu7VfqbWUa6L7j7UKJB2Qk5vQCoct5qve1r2WX6",
  "key24": "Uf3tcDDjSRidhW5x12pS4NnxvA4iZXuNsAncSZP9TWke2aZ95gYqh5kBdZwUkLrmB4bvtyM7EVnx4bUAPocNdMC",
  "key25": "YzY4edG9SW4QBeso2UYCmfWRvCBEuMY5YFhLnsr75TCaGX9FtKoQ1GEyhn92RcmnwhLmMNaWJgwE3Yrx41dGg9Y",
  "key26": "4ngFazEUoLDkvo1PDLHwUriuQu9xzYy3dJQnMS39XtPT5ZNRsBNwuZKDJJMAPe2XsESt28mFZo125BawzQzsQ9aT",
  "key27": "fCYwGvZhuNQzr3kDc6dyUQLzigDdc7Ci6MGiWwjEBJAkfMbscfAY5u4MQ65etPTs1JKnTvEMCVAXmxoioveH14s",
  "key28": "5a7eXc2EhnbN2ZKoqp2v4gqa4MCG5zLRt6v5agxiGaBSnrbwpf6NcMw5k8oAuzWTtwMBRaoaUicxSz6Xiwhxtf6B",
  "key29": "KJqdMZofraRy1fJYsyj2pRFL3nkKv2tHUU7xfQ72pKfxDiidrBzpjMcSZy9WZN7TDPouQ2bu1uhDSeoE8bSCZNp",
  "key30": "2fpDV6VNfWsKyF9SxfPcd1MQmnwaAW35Emn9hT23M1fikwp7NYu5bCbMuZ6JhUjvrcDNMAgBZ1RziHt4Aqk5u6PL",
  "key31": "2X3xNnsrMW47zfJ4mTuuVubc9gjF5kyCofD9pkqUjgkW18JauTrpTdLtRgXA2nrQA1rRuo8vRMxqXMMMqwLFqgVK",
  "key32": "2YD2fj27uAKBDcH623iuwx2tCsNy2SzskytgT6xedxwQ8v3xGRzHTdjyWpd8oikPsCMdHBcwjVKcVb6i3ALftmsg",
  "key33": "ztxbFjpovvU4VzyRT2ZeUgRXsH9xnCrArWgRjh2o2jrx9c2GyYn7Mgz4ykccd6JBmbhRFN5yEe1K4BZQR4jLxAw",
  "key34": "65AXD5Zp8LEAinfRSVyypFEtotLtG4fkHLABcQwwTZgu7fk2S79sMebwMuj4Yqx9afVfhKn82nPhxvD1g8pihgNt",
  "key35": "5svwnrj21XHiF9zQjRcrmE6PYzEeEWcjzbXgFZCG6c1oqsv1Cdpyngt6X2VSXCLRt97vxfdbATQBNWM2ThxYWREW",
  "key36": "2GBmPETDq7GegNTPKNkGgdPXvdWvtdJdv33drtr88t4Ce9XhRKcFyNquisExae5KVtoipZHb4DBZNaADJAafbRJV",
  "key37": "2P47wpjWoae3JudS2kqa3D17iztmk8RkFowBwTDyJ7x9TFLmx64XntZhRfZCH2PT7B4zmDSjzaC7NQYaT3SdkWYL"
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
