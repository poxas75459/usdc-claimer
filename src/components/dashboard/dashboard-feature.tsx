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
    "5sKS16LDgCX5pzvmSNJkEEnhjo9BfYFLYMNMcvgp6je1SSE5gMNUmg5jEQV33i9a2TNzPmgApKLaFZp8Po2PYdSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UP5xXG5qBZ73r3E8Ncuo95714CJAAZAqyZ38hmDtRbU9wPrfTwCTk58NpucjRTFUH8siUfWtGxqvVt2wwGPkCAf",
  "key1": "5HGSzxxKaW4aLPd6o6hz5dMdHB4S6rmmKMgnJxraCJZ2FJqfsDvvtZ7Wkc1gqL1PB2AVBJNZdsXmVztrppHXguMn",
  "key2": "5nD11tY6GK4K78sUEAHQby8pbrZmijuaXbs6ukcqeu19pRAfu3UmY45dRjuvjoeEqaN3srjgfk7DpixYoe2oQmqY",
  "key3": "5ngfB6QzpkZZYpJCoAXWntWUigyMvzPALTihgntqeYeuzhkugFZVT4wdVyU6PJjmgs434h1PqmX7LNvAKYSkskoD",
  "key4": "2UHn7yX5RjtV9ULBFDsGAjeGyWvXuq6CxVBLuf6zmzteMu71UbpuK8CZBJi3Pvti2E28pyaank1yhyM4vCuRr3cu",
  "key5": "3EmBX7pqvMLVZJhB4nNYze2HGKotKywSa2imfk3s5CmHUviuNm4iWVUeBjcncWdhRCdPqwsPT4Gt1PgEbFwvZfM5",
  "key6": "3cb1S58ayPbXXXtPc3No5oknKWSHJ9hEJqiBCSzDAgVyC8mBXVAAeZGmdfvAz3YS77EU9KRRwLcdmHPjjJptmkqp",
  "key7": "5JCtNiANVRKopb5grUmeZG2PRoQojb9PLjBQ2Cpss7TRTDyDGEZKAKGULo7twuL8R5YKvDADR7Wc2z2fsyTBxk57",
  "key8": "2MCojT4nukzDn2qAmAU745EGNhZJXuBmwcdswxwX6egZvWyd9QKWjRwJfiwom9gv7Ugu68AfYBkxBxUmemRS82Ke",
  "key9": "3VQXLqtQqmg3XhTQ67RKwcLLfSfd5fmaBr8xFZKA21ax6xgnFSgRHgejfshNdmr4GQm71WjwRurUrLg4eZc4LgsK",
  "key10": "5sKYpuYiBaSL85xsMvfhZG9bWwzGMfiLVoHGNvwcU26URiDA7iG2Y6aPLDCs8xVGvaKL7AKJUWJrwDYJMg6enwT8",
  "key11": "3Mckj7F3aC9Ydidm3JRawozgoScF5BFuipJt5LyTddoVceawzmksbibq3AtqgyHtvur4zkTPTdZ6nkQEHJwZqnf8",
  "key12": "4FwNoDXMZtG2Vec5gH3ML2fnL7QSYBuruqtXWYK5NAUUzEnxMjMSfnvsMAXE9otj8bPa5awVPyAMUhisfSAm61Dt",
  "key13": "3gHJxw1rT6ikKMsGP1KvobYLFBdNy8R4cSUDjwKMgqAhtGiEstVdGCnhRVVAzBhGiF37hHScBXgkY5YAZKhpgW6q",
  "key14": "2uV4FqQC3T5RboiAeWwLH3mXAjiRBJevg5KRRSpB7kqNCZXas8XZa7L4NAHWKuL7qdF9qQy1bAeh83iJsPc29yTZ",
  "key15": "43NR88AUJ1KUxU7qkgMJHLgUpjBw7dvYhTRfpszxgauH26bVQTitcddXkZZ2gQaMSXuQG4vxQkCutbuA5Thnd3dd",
  "key16": "28oqWzSDGmGwNVgDPVzjnDC8PKXbTwDa8VuiPACB6FnTFWXMFFUZtAjfrv15D2UFUhhMWrXVTFLiy718Sn8iFjWf",
  "key17": "2vRDUTcB9m6Vy41ngDUj9s3vom5PoMkLqiVk77ox6uh8EyYtXTiRC4fRf9DLZy2Qvwe6QMJ1S3Txttfpe5zWoN7V",
  "key18": "SaqL996mUuVryksA1R45FgFum3mG4gjUVfrTS7yGjzZ4WUua2QWQiGTDXPAaHJB8CG3RjLD89xD7aFEgFD88G7h",
  "key19": "5cjM7KzBqWMkS6DbnMXTqZGbbvL3Ee4Z7kiDJtDdeBDL1QvZEPi2zurNr9yhRSAMvzca7AJhiu7cmUieJ4yc3vBW",
  "key20": "2Yo8Zj6bBbRnN6A55b2PtVZKABeZX7Xcs6sYPLeftQcN8SYNzDCT1o7nGyev8N94prNamNtpSHPDPXRVoyRYc8Du",
  "key21": "WUkxFuENKKoKXXzY53q1XJ1pKyo42HJuGNEmmUqLXMSrEEhj4Zr6jJUdPYS6FrqVoLpYR2ybCQPPDr96k5WnQ6Y",
  "key22": "z7hBaHmuEcdBHtZySwSv1RonoNCkkCpXTKeWHLFRYffgzLAW9LYfTG7iakzuZE68kTNSJuiSNAMiWpMNPCtTvPu",
  "key23": "MQev3AFV2sRAr7u3zsrW4zMYVBLN7urHUr1mWrkPXaqm8eRvpNZB2KZqAoADwhFCJ5UcitMB7r2hp9r3MWZoijw",
  "key24": "3MgyLVD7JeSXS52gud95Jnig2mnh7vCdrnBCwi3BrseziddSgrM3iCae76f65Xjzumer6aJpER2dZB7nMQ8gZiwu",
  "key25": "FxcL1KWTM9wSjnDxKRUbqAGcpposXpczvjsMkqksUGFHTmTuZwe9HsAU3E1dmAKTCe74ZoTiTpLPKmcv9uiQz4H",
  "key26": "xJCKNLz8LUn3RngV5Z4sxsibdTkQ4unqFc2UN1jmgi1KjCGhVqt6jAqKGnXzEc5sGTwJMWVxtFSiT6s7X1798MZ",
  "key27": "5CT4ikNjdEudxPXF2kKAGqXaugKjHwz3Njw9feWrNTTB47jxqWWVY4NMdUeCkScod2AqRL5FKuYbZDCSFBpTmRn5",
  "key28": "F5QD29EWvvsCzq6cKRtg36KvSeLKAhrF3ww4ks4E468CmRJ14xiUM7AP9eWgnTD4K7fjLvJ2P4tnSDPujTRbUQ5",
  "key29": "4C6tbqu8ekUAovw427Kr2h5b3VbRk9JaTzRVZmeGKRturcPsihcDGEQMRppDZmbRKL8mKpvxZWYWGUim8D8113K4",
  "key30": "5NWng3JLRHPN84NhDXrqWxWEE1X1DbYaFY88aQQDq6qYAFueMsRYND1K9gVkAwWNho7XqrkW8VdvrBWCovx7AnZA",
  "key31": "4M1FuPhXiwEo6kRL7oqSpFVzEjmc34ortQgtsh5EQkkMAxEMw2BMxHRFx8Af9DotRLhQTapL5kPpQNyi1fvbcxUv",
  "key32": "5tsSALJqEB2m4rnhXDsgqewmFQBNVwqq73RpcQNhMU5aryJJucrTeTcW5SB7FQyYQTkMpesuvzJXcTw2Lc1E8Lgm",
  "key33": "3gR4MhQ4bbDHvgGQmm2Hvbtu1ga74sZQPGgNSnv5hWfjTBAo6eqLwKYB6BbU8Lu3bLRXoypLitzzFEAANQUwVyAC",
  "key34": "2ydmVmJpKBbR7rv1YSWzoP5qPC56sMyXrs4MYeZAefLKMTFu5wyyU7JnLaBu9w5aJHBi6HSsuuSpRFXUHCHumaui",
  "key35": "3umDqB499M8XTVKkLtroXMRyScWEh9FeXe4PhoLoRgG5SLzy8bqRYKSYS5abizhvyHHL6tKx7WQYYFQoaE5dUQx4",
  "key36": "4vDczNYAPrjAmWeBb4t35Mcx3nUfvhy4wT6wC864Yj4siNp3GG9gbBgWuvrYSUzC2Fz6T95HHzqn6jzCTaAxgUwo",
  "key37": "3oPdEAfQYoyQMnQvu1dWyiq1n9sDcU8FeVP4HRPLZ5CzMP29CFEbC8AmTiTVs2Ps4rPog34RjbCHVRGf44VaHMUB",
  "key38": "rbZtjAWTCJ7dL3VUyjvGy5LjNgAFBpPz6DLasq8bkeBzyR2qbN6iwt4vsEbVxbVECU9ykCbzrs72aCNaoyq17jX",
  "key39": "1TYm1oqW9BwWNoP4njSjskqZE7QFzV5XKje9EeYTSjEhDYyF65QdapUsXAFKhQwzWzqe44NQ1t9ijZZKRfQG4Y2",
  "key40": "3RBes6AeHiUGutxTruFLQszmRH1sWEiZ6noA1hNEmDkEPrr1bbukPeEkiN5A1bLLtxNN2JhxvL8w8QTYjyFNLuFK",
  "key41": "27na6Z7xuXxc3TgSTyPVAPqh9eoR27G7ckP4nzoArjuHuZW3hgHYyQpkJB3sQZr7oNk17W8sbfisFMSi78Dhdhsz",
  "key42": "3KazkT5wk8RNiLDLH8GttgjtfjEz3kCfLnjfTD4RRzuMFeXttvNthQZtEivmPzZyi7EDpoUb6NymhKYpNaJ81YQ5",
  "key43": "4R6bWw32r2SHUyLFRJWXBRA2Zr1ApZJfF23zdx11EpfRmMDCepsL28Jrx1r7N46BHgLNPvatyxyCJuxM98R63Umk",
  "key44": "4xCjDHLWLQaaru6gHYsEEGfF2JAGbsHxguBWHdDCz2s1HN76jYR27vGLK6cd1R8nkyKDE1BKjMcPGAtGePrGgafA",
  "key45": "LWVynkaQyTox9KFNWHwqvhM3QHDmYbtU5A3fpcYq5kXFMQKepqDsU5PscseQDZTpYM7qW3YgHAQLJhnci9dXvXH",
  "key46": "5bMzeyxidodZxm79ypv81x7DqdUkG4y3gzGpgxXGEKutARx6byJRQuyyevUfrH2a7KVjMGFSBzGs6ZPxJm4zF5Dq",
  "key47": "56QCVwbiACx3Sbi72Y7KwcJyH4sHjFirRPJCsGJ8UYvkzyrYB1zJAQdVuWPP9yvdKqaeCpsbjAaU3ztuqUYQPQYG",
  "key48": "3LrGJc7gMqSxYrfvcQHbdUqyBD1jNse3nZZUkchaZ1oy17c6vE2fnzvY9SB7vpndeW9Kp6tx49gFsxzDJVZMerea"
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
