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
    "mXRAYgjdU3UWwUwmewgU6WVoFBC78TYMZhW87Laic6iwoQbxbUZvUp5w6Q8ZvUu142qQYH9yuz82raPeL96Raxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31rQbPgTL8MtWd5ckurNUFyYVy7mS3yuXoLCKegLhqyxT8tKoAZvBgy3WG4Bq4ppFJUs8qQx55CTdFUbNjPbNHBE",
  "key1": "p2hP3i7yg4DYiBsXdEw9bX9TeEQsrbibCsuvWsKu4CT9SXMkzUsy5Q2dGK4txy8hEf6aQofxm1UfhsiByif1WjB",
  "key2": "5negiLnpH8XPqgC4ai4BYKav9RMzi6tCFDAEpB3FNZD4gaviPpiCcEHQjTtGauM9Mq4XZcQNG2o4TCheBJ1PNx7Y",
  "key3": "668mU42yPFA7QzUbNvC1nrLHovMNR1wFyvNhgj8Hy5uhJ3hMkDyqVjezs54qi6TCGcYvhAi9QRJiE9dgJcuGuuRq",
  "key4": "5kzCuXiz16SArXFGkGzmZhvJxSSp4dDEoMfmkgkfYTBBy6NXHzeTY1xuM5gdxssAUufJw5TvhNmCZX2f1XzS8F1R",
  "key5": "4DmVn6PB4wRH5Xi2YAyhFo5vNjEeoUKPZy3ufnedLZVUi4vSideEeTsoX1eYbaarNmKuursnNLPu7TubXuqDfGb1",
  "key6": "4bjRd8oyuaXcANULcX1NjsruQ2S24rAjaLtNiG2XcqFcHEHJuLJbxL4S1rPX9SNTktXtY2qSvqoRmNL5CVdxqYMG",
  "key7": "599NVXU5YAB4WnRTNssvhaDH7spDEtNhK9G3HFaMas1DG3W7zsNX3pWCVY9hbsqLkpypr6zHydNrvGmA6nYbViNR",
  "key8": "4KJFfS69ToUWiycKjJ7PFu6wSjZLeAe3nBiY2vuaSBpTAVNaRKxqMwVscKTBdBoDpVi4DM96RJm4BBN1pJt1owBj",
  "key9": "etodHULxTygWx15YU4fLYtxdFDyGDRudUm5Tnnu84MMgDy8FnmHpE7hBrqGYM8t6CYSZjtoQ2ywLLdSTnMcY6Wb",
  "key10": "285vkGSU6Xx2i25BDuZMpTHq8wdztJxUFNFdFid3tekT2kqWH13wdL7qH1gVmryjozPwxrPGLC7AKbnXaX5HnKbM",
  "key11": "2Hfpo6wL886yQBBWpGoSqoraqVtLpRdjWbnDWv2sF8j4odGHEdmoyNeGyFtwqrUUCHt1qLHeUQKEuj3tsUhXYxHQ",
  "key12": "AAtfCquz6uUggzVaTEK1wRGSFdCN6T8ULsFcxTvec8AKMagGviU8DHLrXsaeZ3WazzhvGh12JgrVU5eKQRKbxFY",
  "key13": "4BQe1WkGSV8iSohxD9FpP2D48XJQQii4Sbw4eqgVgD95WMKYXd1hrUUsZCJ5o5iNeWx9N5dTq8RLcZA7ArjFgcEi",
  "key14": "3amHo73BysktNyMVLaFY6gS2TsUAwVeRqWpumXAcoAkKEbW3PbmNF5wEC3MT7dJSciQA4y4Y1c55Z39q6NbgKNc4",
  "key15": "58tSF2R4aDVpHmjengVoYvXJMRKqHNrG8MuZYexopLkBKArKRAPVgUW47n1UjNEiHa6hmm61FqkAYSzWuBSnWRDF",
  "key16": "234KaPpiiAwU86tMKoxgqQft9FALrg2USimKnZHbif8kX4rkgdDoaMgUNvMAUzzif2EL4G5HoaFUfE79Xmpgg54D",
  "key17": "592kemuimjwj8EHFACzUHt529tztMoEbuX6vrrWBwXpVtvFr7spP3ppqaJoLe7TFDcX3adHDxTAR9E4MUPATP3Wd",
  "key18": "3Mytm6g1FnVCVU6qB34Ma1iL1G4oTp28HTbQyPSfLkhsoNaSvCeCTgsJPQHrpugFMvJ2JVSzSMTsz7jmN5E1F3j9",
  "key19": "JA7VrD1gj6M4MCAdEpeV1aN6CGcwcbSjycJawwYBVVhVxeRgdRCXZAwhyUZqf6q2odYEKyBVWCH2L62CUoGqvf4",
  "key20": "2h1ehTcozf39LuQ2XgzdNZTf7fLe4VJt7kPHLZ3j8Lpbt7tnCHrFubjWvsZt5EPe1Mr2e54uDr3rCwcFfkpkVhqw",
  "key21": "LqkcL4oUmuVn3dELJjuNjPabajEDGLtrgoo82UY3JipZHp29vHHsJC3qwEwmf9CJZYF1PnT328v8g2upXw2Yohk",
  "key22": "3aMc7MBe2kJh4B6LonSM2VxCnmwYwJLnWQ5sh3YrQQ5GdbNJPfS8XabUvccCyXAA8YRgtMXag6e8PDraUTxaaEGy",
  "key23": "ME6RwsTWTepCj5upK6z12vL91Ler3vBvmYnef2b5MbRhQsFejT6qwgydFdA2yLtGFJrZD6NnkqeRQiwMMgT6djX",
  "key24": "28sPhJeBpkpYiWLBo6Lebn7rkDofUcp4dpgPjuqhJ25mteryqRTtgaeXaRa7xL9vv7tNMHUdU1uPGWcqFZTzxCZi",
  "key25": "5b3MjkKoMwbXb9g2btZMEbZRS96upL9a8kmwSgPUsV1Yuq9H1Eo6fbSkK5MmKG2gRp6PoGm4BothjCA7fLExYPn",
  "key26": "5xoGoZ89RXjj4MEyeVGkVM1Eyy6HtgpqERkPHWBGb3vNroZHsaSZXGK8XkSVKAuGmLpN67qMkGFr4sML57vSDGt6",
  "key27": "3yKEXgJkZwJPY8zWUf9w2cvfpCp29m5GqdQw2dreasiQCW7yuMLQ4dJCHhu93f5BDvCchuJSaQ4cSKQvjJ5myatz",
  "key28": "4VBGo8rvMJUmsTVYoJhdRpBJkxW5P5s1LtdyGStxTFzyuD7jcuY6tcupKRsPHCnCDNb28TBZsXqK99XSTfhup23v",
  "key29": "3hz1LuiduyZbGcGd9g3JXH754HXmYpKY7o5j8P1kjfZ7qbRRVYkRY5V5genNxBFLM4LhdULmR6tQQbriQtBHM4r8",
  "key30": "DFpyVDRbDmkdCYzf4x4VBxBESzxBgtkEwAMZ4yLP1rShCaZ3TjX4dELNxcJzLG42xq1x7smtQeqwa2Uk6JHCnot",
  "key31": "5YsBja5nL1HDC37QjDSeL38DBVTHBQKVre7LmafoQJQ2iWGGQiFdhe4QCErNmRZineo4bJTUNEFcjiJCfSXASCRL",
  "key32": "2vWQTqjE1CTPKrwUtj61BbMJhM7Qp1YTw58MbPsDmcWqwTZTaGkD5de5Vn2KsMYBryEeWj7RLNiVvBy1hg3xg5YZ",
  "key33": "5JVnUozZEMvzdK9bWzgBoNrY18La4k62eqxLpuvbXo1UqVrDrEpqQ49gM6bUAQTjc8pC6pKLRfwLsLTmeqHVZp8z",
  "key34": "3o8vW5ev6GmtFcJwdMHcKbaek8FhzLWybGhViVRg3r6FwnARZfuqTyoxTWhUoDQhrHKDJeaBaWFTYBc59MXtx2rN",
  "key35": "4jEgvLN8QoSnkP7AcBcj8WHwPXzNdewndzbREQJE91mkdjgUX1RkFg2nimheWH9ij4CwzbkmxNKGRHGcBjmf9HAE",
  "key36": "n8XQy4gLyWKU4vQMhhg1MkrmWJCwc4PSZcEDkSbkLxiu6UpoUFCZQDfSRhZt9wdwJKD461Yfk4qkAwZRWdFWSr1"
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
