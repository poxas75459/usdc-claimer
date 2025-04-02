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
    "2EncbxFu6nXUxfVTkaKF4Cw9yLxcXaULw9Ye7mM1ERZZUj5tae5GPvGYtmbv7Y7mGuvjsaWH71B4cGnvbijNpjg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CiQYZAZaZqMCejg5QBgnhVdn4aNRdETqagnpEaKec7GiHGV4FUNBst5WcuY9PfbJnmo969TEyWTz4YRmrKJrMu9",
  "key1": "46Keee1oXFDb7u2CtnXHyFHz6xc3fjZRWQm5rtVwkra4kvFN4oE6brJy5gbzTVFfPWg1vMP5FS9cw7VHnrMJzu5D",
  "key2": "5Rzkq7QmGbKSYCXh7CGMb5cTST4jrM7C9cqUJD7SMC4FvGe4Fwp8GWEstHWDdJ18vGdFBgvx39rvB3prHGaYALRi",
  "key3": "4ufVGcJzW6MhUGkQ9AizGd7TB2VesW7REpZmdLZJLi3oDsYysm6YpqApTFMbL26NagfVyCXwRat3m8FznaaJr9Yh",
  "key4": "2pykgyT77Gff5Di8fY5PdBPuqfWhFV6BtBjYWQrGZLAjHC6bkU7oxurSRVUrfezE4E5NgtPckynpCWwJ9Apor3Mv",
  "key5": "1avDBFcwBLc8yrarAM8NFcQV4xzsv2rL6EamAMKb6Feag17q58HxnQeE2fUFfUKQ4CSGtSgsSfMuVhxESLNG5qc",
  "key6": "5AA3NyUEfGFFyb85xqqa8pVuJC1hHiqTXExc9wmgtLHtw3W8FRUHNhVi7i7iHArfNAaMWDZgRXnhzGz9S6pTs5jf",
  "key7": "5kMjnn4E92ws85EP454fYBiocuNBxr3o4r5xHe2xL6u1sV7WJabqYnL9Yvx2jia4Fsvut5y8sBBUcsEqHLTdsRBq",
  "key8": "P1yKurJCywB6SU8GkEef4LM9U7xdSHmBqzN6cAGRpxHJ5TFYakcp3XyNNJbAzdtsr4JU7z4cF3ANx2QSLmRxcQB",
  "key9": "hRs6ankt7iMjdwRFuGzmqbb1BeEPNxmtQ2AwJSdKBRYDQg3W9H7fjGGTAbb12GYJp39VDQdQn14QjqS7kvmScLc",
  "key10": "2rFeuwMe19FZfZUpvbYKnomgGmmx6q9bz4dcWTgZNBkEqXyBeQaxnpqPXcbrDjajWmRts4wLitBGzeDfsqm6LciX",
  "key11": "2D5g2GMo6Hb3MHMzv6GtKW5q3Jk98GCz6ebHn3MXQzygdbk5kgynVfAp9Nmr2gopvfcwkaYGqdFJdyybMwEZdVQt",
  "key12": "4ZSeo88fLWC4XkJ9fih5a8iMoHFaNg7VTbYKx9RS6Q9XJnobcyfSvni3WyeHZ2J38bFu9y3Dxq7jfDifSMtBwbDp",
  "key13": "9rnbimRRTGTZeirm1zEkrjFt11YrKXCXmw1tBEGtf8vJyK5HvMXW2T5VHqfi12Xm2pMdKoJ2SQcaNurhHd7DS6k",
  "key14": "4NLgtgdHFEEg6tmE7aGWoeCjSevBcmaD5ArGDuXxg3gArL186x4kUy5XGFZGnhtSQ36ijApLPsGcpD5gyMTrX1vj",
  "key15": "67NVYgnmzB7XJNXb8BQuihRhFy29runFzBYeMXPsHUMbeBcywJrQJCDmbpNMg2dq9kGn21vXMELuhmzDR24iFnHx",
  "key16": "5i1eejnJyAWbSpNNq2VbjqoXCK2z2MRPevwDuzBNoybWuk9AvhKPEdRk1xY3b7nX3L2JrynGcUacVxfC8PnAJhw1",
  "key17": "4yJS3wBfEi7oynCrpEbpmoJjH89V8RPyPvMG5J12Ks6kp5TkPZBdKFvuboDDBwNWb97sjDEeEsfAdxCYUmPTKzZb",
  "key18": "6Lu8Ly33BEA3tnJmAqs8dcGP513Pb6JfRZwqK3MRcQzGewTUGd2AohrNfsWVJLtv2iNeZpEVvvH3b4fpiQEXP1j",
  "key19": "9hpcUurtHTsqehPHzQcFRYTVayWmo8LAuxNitqS8N1doPPodeVU1jAJs4c9G2vPg5vvHK57JR5Ujdcum2UTvGH1",
  "key20": "www71vyPP2TMysu1fVmoPTFaWjTQdTGbcJG2TjA59MchJtZQC3fokxmaSuQzxdFXD3vaMNvQLXexP8Jvb1yDegy",
  "key21": "3rpuGAop57miP5EJwxc1L7TqAMowWvn5Y1hzmZ8U899fAEDqecpkG8nXKHi65a1Z1WSca4iX8mFSBceASa4CXxe9",
  "key22": "24uNVwMS9kYyRU6j2fLcnPsmBSRo4fLJyhRzUc13E2FKRqwc7qhTErS1nhNG93jGoi1K8RRmDzuut4229Mpb9DNq",
  "key23": "srGuacNcKyq3fmdnnjUxYcbvcTTpKKmMKNP3467UXKAdATYZQ8TY5v3j2CBiMMvDG5tiqZAasrhMm1Dhts6fXQq",
  "key24": "374V14zYnrdYw9ShG6q5EdYBSy2HXvoRqeQTEeUK88U6jsuRo97Lukb7WKyX7shstVACw4FmRPfhkhFbKdgEYk5N",
  "key25": "3MfzkPi8Fa9bmCrtqnbV78UG6sgnrTmgGaodgERcnBwyPqKSCe1xs7UtrKGKAZQLcP5hVjpnVYpfJLPsZ8YzAUSZ",
  "key26": "65uEo1ALTLStAExbSHWer1Hym53ub4fmUDqavJt9GTLsGSrW6GKbjjKayqGLD4THHh6dEjHsQyVAkZPsFW9UybYh",
  "key27": "4TcSRxtAFyP3Hgp2NEDR1C6peJAG5jWej29v8nvSdZYCZVEh5wJ2wySfBFdpWvNrsMQJWQ6A3aFMsdUNkcWRRhHR",
  "key28": "38owW6Wsgp2AncytNBCzXMfVXAS81nBSH1SK8dEBuCbkNeA41X4pD1oDG4LUSAXD1hmYZyVMqbzRZqtRYCRMKAZg",
  "key29": "5vzzcQXV3Ds9Sbeb4H6ZgQVBePtYrzxHbjA19xC9Q6BK1Y2PKUqtMWCkXU6GBiZZ8sNFPfGSuvnGcLL2E1zkZo5x",
  "key30": "4EderzqYs1mFM11zD4DtkTX1BkboqhXdEWeC9modWB4U6NCQrDQpWPPuv91P8Ca5ZcwsSn6Ter2Zh7ii1kxgRAgp",
  "key31": "3FnKWKvm2fGEy1AaHSufDNUvDShFK63RqVioFoszGN5jQYwqY69rFNmTNswjMsBcbwP7qZnUnCQZn2vyYpHQfGXa",
  "key32": "3Nha5hR5Ge2p13mSp1PswmngnPcgUmdS4jzoV2vCAiNFBeBfWm99HaVj9JhNh5scZi9YENR4Y7zfQ44waLeNmYQ8",
  "key33": "5r1ijAac7SceeeERt9Xb29PKbSWpv7yqAcacvawoX5Hp5vpVm86VNzNRu4riZhU8y7JT4VrJJkmRvhDSCRBqEYqW",
  "key34": "4NDVfxviaeP7NKiwdcCkeKUQiDV2jEVwHwnomydafBfGmnU1cVxBVJWRv5kjvQXMDoxdZXRaKKvibG64BvN4sGuE",
  "key35": "4DhurKb4jtR5cAKPK3yfny6X6wFWUhj6RBgFXVeah3ejjRNaLC8NVoHeUs21FdWHSX65JKNPAvCH3w5Zzhvy4WLm",
  "key36": "45auuEQCU58mNqEU9Amzbozg7XHQZ9NUMnXSE8NLcohRMTrEfgAnweFPuZhuAPz5K8pKZPodsaZW7mYXNDjXgKW9",
  "key37": "4c6jpk9UpCJownC1Zvb8HXB6MUKWXRaWvhwVqeUU9oCT5bYTd8Q1GU9FbqezoFxZeWHuXAJxFMuhxgJqp78nbV7X",
  "key38": "2k1bFfRgPMToFPKnA8B9rUbnRumh2MqMPZUmAFra46zZWbH8wPmz1RjbvBHhZXVHjf6oNNqqgWmZtoXrGuDpdkKS",
  "key39": "JwBqAZ5LaqxfAvkTTytCbvf4DG21bEDxXucNritCCRELeJdthFGrmSPjRTxjxnD7MxkZUFapxVANPeojrocFrDG",
  "key40": "5tW9vvKoT6c8iqqDFGZ9YHhfi754wyd8svduhpbJuoshmexs9Cez6CdWYLo8PVJbMbNb2QXcQGN75x6LXToyxbch",
  "key41": "X9TE9ybisF9z2UGGJ4pQhWb2R96PCodpbkdfVtL3Jw9eSrVRyp3bnfUZyXphBNYtf6WcW22uB9B9K8rs6mtGZRt",
  "key42": "6gzJBivgAW3zyuyYhC5QC5qY3NVJdUiQFAhwgSuPMARWoXDgb5RTHFvAi4XwhBHtuCfKTZwmd2SjbiUGRCf4ckf",
  "key43": "3kb9pqon2qxjMQf7NTY2XwtndTFcJk8tbyZjgdhGM3jjDudvTKqS56pR3JmyCdXTE9q8SVZ5xMrABvTVHFzDAnjV",
  "key44": "3XSx6HLyRsEvEuv9CREK8kSoY7yQzc2NfwBa9P6gzJZ1835NWAtcWnwmHP6dXdQB6uvzd7XsuyKKMjkBFj6LP4J7"
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
