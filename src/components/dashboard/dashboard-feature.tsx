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
    "3YvMZMdEnmXFWfvpjPMuvZ4WeebhRvUeJnu3kmwZxpG7NdSLaHs7yPYRQrokURLcLtuWdctSXpa4aPho963UrXRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64xvy7e7NwTpx5qCib3BEg7ED61QDixaSQNFWbNTFBfY69uhjEpkApLYkw9xUboetUKPawGHhsTCbkMPWB3s9wED",
  "key1": "2SiXVKH5eAQpYUsr5YMtyq3ndPf3FeGk3EESXSVwjAs8wjge46iAxNurVu6d4akix92jec6JnNu8WtsQcU8TySU9",
  "key2": "2fgJ8tvBbhtAP5rStzWZFYLBr7zNygbLYvb8gpkcfxdJVeHccL41hSknbxfHW2Y47hSPRxQqfpurmyFg3eomhHZA",
  "key3": "4kSv6Cd3JZEQdTi5T1MY8fxKMC3GPyPtfx4G1DzzJuHv97z6YWf5jBEwFznfUpMsgcfQ5DRV8vaz9PKCRtcikfEq",
  "key4": "3Bjq9txU8SwEYAXJG3Csm8wKZHDp83aHq79J3mgvweqCLJbnuUMTFXqFt9Wei4t9fVAFFKQv2zHuLmCMJTwzMnne",
  "key5": "2bXNJ31MTqJtirVnWVob9Jtgvtbw6eEVKKAL7hzs2sSVdnw6tvLtcxLpkBSRBEdwVYBuVBPxV9HAVk1TGgs9A6SC",
  "key6": "53ry92sBPc4GaGKdHFzzwn4p2K1LTc6VNMERAHQE98mtLxXBxPGVqbSd7SoqxKk73iR4WBtPMBE4V28ehhSin1dd",
  "key7": "4PstRZXrh8uMTVie5poKypUBzd3QbR7yUmFjEZQ7vwNYKUD7n1k11zMSEW3mpx2yQFkfg5iQUQPLANRbY1yG5Qfb",
  "key8": "5gsfjT5Aepjv7PSoMhvgaM1kDjVDP9VHRXdpfL7pMYxVB8peFsuJVxtSqTG2UgCLPgHVWeSHPMRKEhkV8zpZT3Sx",
  "key9": "4WPsHDLBE4zMB68kWnmEUTc26u2Ftf6WmngwuDsbgm7PFTd742T4RNLQoT9v4HRoqJ6xRny7XYY2m6yhxZ5shGRw",
  "key10": "4L1Yr9zTgNkC3o88H5XUZJbGZtJ4HvkLbpkWprbmQzmxLPgWHjpMRAL7GQm1hJd3Prqu1hs7UfNhoP8ikh7mftiZ",
  "key11": "5yLVttWW5F5Vt9t8Sz8VoQdzSfXSrzpcPLTN2UgB4nxJuD5CRPCCihf5UZGDXDSfk8H8vpEo6qpgn9cA5hHi68kP",
  "key12": "2F1G1MhkKr21wvCuhCDzMZPu9SefzPjJpPqDQyfQwaVK2oXjW1BNH8jwCm96XysHQCDHn3bTHX7wcBzoefpsVTvA",
  "key13": "2mS63JiSUJi4kKftyWZD8SKF6hmL36RtoCsk3VT9EfH3G4hbGqwtqMpgMmGYDxoax6NSmCfmDXx2bDKoX6DCa9Zt",
  "key14": "2pzFwQsiUPfpisLw6dQUMK3FumyZnniofQh7j1Cub9vJ3cC1mwW7ezikYPgkmFn3hSFXNiwBpD1xrQRmpckzMigx",
  "key15": "4cLHRk7ECngDSXVHDodZ2Ui7QqsZGC6QWrjFfCPT7qgCftzNTjJaZGvGeWKyXQiRUE2FBSXwiamoo8uQk1yDAPP5",
  "key16": "5uHAY52toCXicToidHt9DzpDbvA9Fk9j6owzQx3FXGUKYKbyCaR9urjD49jjCNjKfwkXWFSzNe1jXVN3ZPUPvVTv",
  "key17": "Ax4swkcRUACEoqNjDS9gAxAW26gUivxvsgW1K2sjwzbP5RtsZCgYDjBhLezX54ENQEZQJ39m5nm8ataDWFUHhHR",
  "key18": "5pFZkwgoFMjbNA6uBZPnqXFZvmoLfZioEs2AT9x2bxZ6RCeaUGq4wUHe7tm5Ls9bXG38uytp9ZZpt342tDEcw36F",
  "key19": "3p5ZUxUvrwQCatjAy17egiaFPWDqGkJwB8GjxJgP2g8EpsHd3n3CxnfR7MFizL9wnQQAvpH4TEXCKtyi2knop5Po",
  "key20": "3r1bz6LbX4AaHRFXNhNu6mqCqWpATVnoWdUffnqDCnj59CByZpQn6xoSKBcnT1KudSozW2obJVPZrhFqrScZSECF",
  "key21": "3f9v7eGk6f9wQHAQYGy6E67EzoFQaAC2XNX68nbVu8aBzHMrzP1kKmrMCVUKA2ZwY4xDB3ddmRDUxytQTCgkq9KF",
  "key22": "57f6TjczQqBUdL6rdqm1XbHGhzo7vZJEdXbc58feQVyyeS1n3jchRo5miwgytPwwtjjQcJu9sop8Mrsazfy1nhA3",
  "key23": "3V8jFjsx5fQ6kN32JhAsZskER4vix1dke1XiTLahTqDC88wn4ReN3mTTq8AbqxySU8xRbGjpooCwpqR8bXnLp3tv",
  "key24": "4VRnYe96gMkGoH2L2jasezN35obk2BEP7enpdJhQtVXrDtfqmJY8KFnR4GvtkpSkwXVSZKpw2KzWWPn2M2Ys3Gnf",
  "key25": "2kKGhnjnsd4mDG36xbcQXk1bveibfD9gTDDeMh4Bk2nUVYgXcxZmqraMvRSvzHEvYyej88FXZESb33Gmq6KVkW7m",
  "key26": "3SqkeS2meC8f3kUwvpMw2osMJBxpLr8qhW4LZcm2jyLxLuHk3mJMfR1bKwHDadtL5vqJ7m7NNjaU6eTVTZdtXDX8",
  "key27": "3E3RP987c7z3UecJUCKQ5YdXFSZ1q1xrZiDaCqqMAKftH2QjEfKix1Jbic3CUUxGDNeCR1jJp5CEVDVB6P1Rkztz",
  "key28": "29sDws8zErr8W6Sp39kw5M58ThCUEmCpH5PMF6cXxoRG3woBxPDJjJwbghWQBb9GCDRt4a8nYQZvrPvwdNmGQuYh",
  "key29": "5MaqHDeYtrMviAD1cTqnfeY2KcDXKpTKjtFmU5D41qLMcm8qSt4nmuBe4FfvpCCZwANuVYChJbg9kmMGGWngojoC",
  "key30": "2FNnGwNNP6fonMHjQLzKq7buVNaqwV88VuarX6YjVxpUxt2TbXAS3Pps7BkyLkW1PxK9cY7ay49B4wKmf8fSttr",
  "key31": "4dsEqeqZzBZo42Wcrb7qhhihN7tDf3JTUzE5ykEjk2Bm72NMP1E6QShBwj4RQcHNE21UMs7WtyG5wRpYZvg5eqeN",
  "key32": "5ZFvxwoqV4imcugTog99PQWtQ4FqBrw54TLnKDdMkwHksmP9x5HbXotjuZTE3AAi4EwpoQCa8YaDhs128UisMogD",
  "key33": "4FzZPNnXhYs2qV2Z3SPoP1trRPvGbMRJ4jReC8tSxRRJavC9WjCwrPxhaEVMGbYQmwTPaArrMvEUEDUXpSvbwaP8",
  "key34": "2SuneZUGawBAk5NLxCP3FjEG49zNuXjoDPeHfAshsV4FahtfbFHKbBFYHmUwpZ2C1vZipyYgBswGA4ghaVqhPTcZ",
  "key35": "3GHgwTThMfeb7qXhaWVXVWdRz4jN3CQGUuxSxWocTt5cXvYfFDh7cRwU4Lss1KMUvSLadnZLBzuQtbcAGEW8uQKV",
  "key36": "4AnvqQKvMjbi7oHjG31nBNwi91L5qHfDMkJSv4rAB6vcUGWTNkA294E3XEzsXcS4sKDjdZz4KLuHznKjLGxb2qcv",
  "key37": "4azszb2SpNy3ugnSWNqrSd4sZjJMBHxAn6vaHnLcGvV7iCZGwJX4kPeFUQLvFQ9nB1XMUJgojScL5B3G2dkoZxYu",
  "key38": "3AP5P2ZctUqr38N8UZVgXbp1g7bcoJevM2MBWUj2MuBzMzdxkzUS5cTFVgdsKUTvRUsvoP7cT8xkn4VBb4BNXtXR",
  "key39": "2DcqpeB88Yi42Xb9RtjNuqBfTSHZtm6AZtdsZZkHTjz8G4kXcYwiRbm76qHmek4GUi6zCYfRtExqR3EAPXUWQt4H",
  "key40": "2isWDjhFkeVtgD1PQutswPWnExg2yL4xJ66EbubdGin3b9a4DuScL7g3fvGXsarKw8V5RdNZQTbTCKmcSUgPfhXj"
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
