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
    "5ZC8usTMwUYqwxhCDNLXCPgrSjvByNcCXMZLqaUoFFd7KMD8HqNoR6RyMR3v8EspFhAHBu7DyV3yK6G6G1iizB4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31dQh2c4e14pCD3HS1i64xdPi5f8H7y1gdoiVYEssoGSX4RM5hAgTa6MhanxwoZtzmnK1cWTMWwPLeEd4QoX79Fz",
  "key1": "2XD4eSQKLxmYbQNUQi1G7fEi6KorS5oZg3HjJWfY49mwGNom6CkCZdiDAhb7KQJw7Pz3AP9TkWcKDnpfR4uDeRNr",
  "key2": "3L7B6rbNzVFBrbGuttMk467Vy2ANYftTFwRuQmzMMq6yNkgAJEjSeMqQFgkGtkp17LS2bCHZfmD2gdiWZpU9eKhB",
  "key3": "53VUuaS4iqx5iy1eAhmfrBUaNHzGkmTFtN9oeYRXw3prm8Duzqwrg8ycdT85FpR3SCEn9CPm3eT6qnbfBXvS5kPz",
  "key4": "59T6PZgUJjwr7H69VziyhBp3Wq5NS4fsewYsk5daBnRtEJjppK4iG74qj5H8RQ6nrTvgrALN3z2pqJmb1CGWKcqu",
  "key5": "QBp6zKPX3eq8AsyMZ7b1ZEaN8QQWpxxsN4iw93Nna6VR737GTQXnDjBMvZMuN5xf3nMb2yXtRwX7t6ZczUcPxqk",
  "key6": "4HVJuziDr5dheEiVt7Sc4dYRehCAxSjsqBmSi3f4DacEnrmhv3enXLHKA3JHbAE4Z6CNwPSNbLRkGcaH4NSE27kJ",
  "key7": "63KojMJGddidhU8uwE11eZteX6sDZBnRQc5y4S6DqjYHNfN8fWfGLjb3XmZatjMTHtQNagERRCmvJh2is9fLzf11",
  "key8": "M1bcB1sXwEjaTxfK3FRFh5rfWjH2KzEZfd4RL6ZU6Xww1rJuj1884P1nsJDTiwiDRcfHYMZ2bShef5tr8zqZUj2",
  "key9": "4RbkbVfkFt9tzwpR2bkrTBh5TTovmb2PAsHRs4i6B6sHk2Dmdhv39q9PeQXDyHsUdPEYV2u5JNbzxJSkrdf3ssSM",
  "key10": "47EsXfznMhb1vfRpCLPGC2X6ukPBQuDij62rqTKhjBTBcLCosEwSxTxYZ5Ymkxw8mrhTPXs78rTT9MHLgwdH1neh",
  "key11": "3NG6SzzYs7bpcbSvAeg7WTSArM6NFh4zAcaVgPGAipoeQWiUWTGr7TCcZnV2tpT6ntFBhSJxACzwuf8ZLPS2wVDF",
  "key12": "26hQ9sFh9EFsTaHe71423KYprHmx2941eUrcHJv5RtgkGZP19XdcxG6Bq1tmyb8N2xuMHjHH7YGA4U9LxVWDRqX7",
  "key13": "4ELaDzqrbTcJ6wU5LvEuZJqHAgCt6SwPgsXMj6pHw5jdaow9bwrMMukLWn64i74ZGB93Kh26xZCeknqUtyUs5ZZL",
  "key14": "4p8Tdu1P4MXH6ryZzxTuyqGoGXEBMJJ2cjb1HkL92KfD3JmFweCcktiSZU6WZ9qRyp4B3t5jx5dcE6bNVpdQQjuw",
  "key15": "32zU4d6UzAzCSHN9cSAZDJahD3Y1teHJvmLuotfrtRjq8NRAo3cSu86dpyyANdzLsLoFqT6dNrt5nEEjsH4FMZkQ",
  "key16": "2kKnM6yZa3PDHEVBPP6BvK5e7R2nRUdT2UNpq6Pj7P66puLDsEgqhs4zaLb6Yu14HmxkuBjmtVXdrThYAG4zMAwz",
  "key17": "zPjQTiPAeWk4vgkZZid2PHJuKeXYS8fczWGTW3TpJRBW1Dtc9jZ1W6rbVRT55vT4ovjnhkKZZqfGqBViYK9mk1a",
  "key18": "2VJJQZJxs5TtR6WytHdppmMFVrsh3v12TH9xBLXWsurpSqvkyK57dsM3RkhtfFNarUdvRSh2dHupjytzaAnkhY2v",
  "key19": "5MoLkRkZysxfcZLiwkj6cHYtvxi69XbAZ77AFswFQJVrpcWPb2i6fRQmx89qf86wJ2QVjESF3Li45ppW3Y8NdYeR",
  "key20": "5fXS3pSW96X2h8nwMa85VyYLTEsVas4xcK6E7mxt5n51kkmeC6pi3dVAg1EuvN1UHrsaPZSAmfJRPqWQwgu6Un4q",
  "key21": "4Cbfh23WajgoCoFHLyQgiAXDZqFK2DubjgPnENbFiFzrhDfFXM6KDfLJaBF1k5Jegy26rcYb88SC5G3ciAaEo5GF",
  "key22": "2KXtRgnPUCjDbJaPVjXVohWNBbskbcjfcBmd4CKfiK46FdgLtKEeNaoaCeExnzEDH87WUBGA5SvmqurP8fuEn8PR",
  "key23": "4hb8Jz6bH7FoAUVGg6Vcdp8ed7iCFnwy7jRyFcKEWXrVtodtPpyoPZwrNf1utQhCmDZgUWxZ7ww2ycMdoU1zLze2",
  "key24": "EYHwop1odMxaYpmkfcVSCKC6U2ABH1s9AGkXT1fJjtkw3ckXhzFRY6pkhUHJh9EHkW5rNgkcV9LJQqVwNwreKsq",
  "key25": "3fWWDZKhsus1sicgwB3x9MoqydKYMQG1yj6PfF9aKUU2kYssQBx24k3EjMo6F48hFWHqYoEHMRwU5TR69vGQVKqG",
  "key26": "4fXpD6s9KxSTKZwDTN5ckLSFswAmYynjDVpppAMLVDjKdkMjTYavgmEeJ25xZXtmyM2UXbdx3GdGNkZ9F5T8Mdf6",
  "key27": "4X6wFjrRiUjBWq22Fd5DR5kfLuGgLB63yuQi66enPgKWaD7nt2bMsDqfpMW6rbCcpARekK7FSkjy8J1evFg1j63s",
  "key28": "51fJeMZmqL2wDtS8io5upNaqtz6xsn8PDmJwJxfG9asF4XmvyUyftcYibCCmyWLgVFM53scgyoJFUQ5AmepJREaZ",
  "key29": "RTKzMF5eE3kzSuzbrnyR2AM6E9nhcbFwYrW5PC85jH4CU3LgbJtEHdGz8W7Pyn34QkvAuTXxcGBVLEVpVHk6EJF",
  "key30": "5w22WEH4beh8Veo7fqRSdfH1ACo47q1Tb7iRGmodGmDJvjpssCmjYssS9HDBs5XWF11ttYWQAtEv7RkXH9UoDWgQ",
  "key31": "5VyPG117hiqxwtCD3RSXvQTbZXqcTX3hyLMu4Gkz2XRGwWS29gEiRsEh5CvnDcdXuEPfrFJsH14FaBK5uNDwxuuF",
  "key32": "3JeSUQwtcGTGeUgmxd7gyKUSxwMJtVELT9AC7pH8JH32E49nhWmrv7xUmFDZMMFogvaMWwQ8uVxiqmr6HAZ4RJfK",
  "key33": "2wXBKN49BhZgTWgeBf9GBKrEgQjMH5KhVccUfkLKAPmZssrLTFuF5DmxBgo65pCkjdird1fsYUWbC4uYCqSsDfdu",
  "key34": "4ad6ihXbFS9A8KSupZpXiX2bjkdmB5VXrpG81Q6yfF4SgkVwJPDVC15f1HyfTDvMHh2pv9zX1kPJ8XtjFk21avCP",
  "key35": "65PwV2dWi4nuFT81shUxPuaWeseKJ7UJFXfXzmDFiJUa3mf3yTCSdECBGVt1ugsYwcnP7UdnUiitY3KaWqaz8MTu",
  "key36": "2x8bPbzT1j5bzWmEZXG5D9uJi6tfzmn1Px7bcxu1R9WS45a7Nef4VwZpVQHBvKGfBoUYiT3A9eb8UAXGJGhL3KB4",
  "key37": "4itEgV8pbT6Km4bCQjEM8yZaNdCu9Vua8DuYVbRCav7rbajoXo3eK3anGjpEzk8ak7j7n3LgaP8Jnx2qTEDjSyPZ",
  "key38": "C7bsmUdbaoPVJzctjjqMN4HGvyMwvoUATg9pqZjsDSqXPZHX8ktMJdbYaDAeYPMNEQXpWSwFQ3dWRRuZVTXZLZV",
  "key39": "2yG6SvQx72CuGC1tRKzvYdjFWTZn6sDzoVEFyG8igiok7AcSp4tRAiEUK5ijxU5otYcPvdWChvHCn6SvdcbQoous",
  "key40": "2znnM1xZ7bBEeGRhxfHaNZpoXGBDiuHQGks6xFtdavZqbVkxdkeveE8rKZTQYK5hUsbV4uznbuxksuGZ59TRvG2V",
  "key41": "4medsbKYKHXAW2tgEC3XsYn5JrA58LrHjvLuJh6cWWxXFxm42JAjYzy22LghwRSDWX5DQ77seJJwuzk98tJAMtMP",
  "key42": "3VfDwvxnpdfiRqpJokL9nApEFpbUF1UBQEB1UdCaJmHo9GwsbtiRQBdE2YEafjKFMH4mPYot2hG6hs4MiTukzwYc",
  "key43": "4ZroJsHCGz7TNmJxSyxKZhoHvaAZF7fCCLcWPkpGGPW7FMXMC7Avggw6keGh15FSTDzvoSTqwV1LU1jM54PoiobD",
  "key44": "2sQvysWRAVibxwCtsbNjZvBYL82F9cb1z34GKjwzaF6bYJXJQW3vkexvPcWPbUAK9cEvS3Z74KXPHUxVt8uVV6jS",
  "key45": "5eDaaMQKFRiMSfKjtZLtn1Aa76Ujj3bSa319BpHdLsETnPGCiwWQY8ed4kgWb7iH2heCMwKNyJZUjvYeSJV7w5J5",
  "key46": "3tiNXGJ5as4fDxv2VSUbY25qVzypqkvunTRArvJzF7UntLt6FEtF9yCKkpLK4qbfosiyYoteeWmfqZHPwM7ShLib",
  "key47": "PnPJixNAmt1etNjGLCHYfuo3nJbvHoQvZ1vnJ372q6BDmAUYHqnQFFeczCb9crVT7fAwEu2vbWmiRRvjACKQvjw"
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
