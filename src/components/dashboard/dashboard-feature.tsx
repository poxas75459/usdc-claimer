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
    "3MxHMXcmakBTafAwEz7ibwBXeyP7FgR7sgQjgGyDbLfTsUuRC7meNywaaCeuyYPZpVdLBn6iTk8PQwr3U1VVV2vd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67cT7z3obXcD3KRX1WoX6vyk5gLnPVqbB19MDbfx1fN3vGm2xRCYCCBcAAgNFF5EprFAcGJthxgTusD7gkML78NL",
  "key1": "4fBztsiAAP7KibEhbPb4GZzjfBzYwMYkqirUU3fdNWGYA7tswo3JtLYmZEzdsxGBELQbMDADeKfM5qW3ch3WVwhX",
  "key2": "51QKC81zejw8N7YHRY8Pi1X2ijbt7p9mqm6kAqvTZMBQXufm1LMbwTfQsbP5hyNCu1TYGU3LLqH1uVz2SpgC5teE",
  "key3": "3yzHSyX5N9wNbo2YdVKBUne2rgCwQ5ztEneJQtLdVqMAip3uLqhGQPmCdGso78ZWgJeQ5cMnYyWPDacLkgDutpg7",
  "key4": "3YKxo3CK8zbKjv4zb4fZJJUgnVr96U9goq81Z1bnrt4VyhxoDDDkUovkMYixCSuNTRkBLXm3HNQrUABML7CvH42m",
  "key5": "8r2Mypd27DYq6CkhD8jEcdJ3MWduzQBvkMJV58SxRzSfAZdWCYwR8GiQeStz5pNVdKSmKXPKgNfXULg4hPtLiBp",
  "key6": "3VjUCEENQfPGWsGyCcxStvhvdz6WMnnGSNf5JmG2MT7rmNy1uvFcZghi7pdnt6Sw4KWs17eqVGmAd9YhozTWSijv",
  "key7": "5co2Zd813HaMHuT8r6gSBtVTvNRBM5LZXvs7HonS8PWJKmDGFabqbDL96VbD7xQfmGtDWfEgZuwPbmfdySkxnmHg",
  "key8": "4objnCynSzXqj45EmPe3KTzqSw13f3uvMzVRqVBt7XgREimwMeQLPa5N4EhzeNpsv3M2L5UmoPrcr3uHYwsoQSnE",
  "key9": "24ukUpDbAK9k4xtPubx8KBCyCC61NCJ2tU7uWX1duN1bCAHwza2hJ5dwV4zpmzEmFH4QG5HWSpVQxJD71kZtY1jP",
  "key10": "2K6CrDwe2bp8h6rrf4itnzWx1oe4X4T3fr11wNWPm4mgAQoJ9Mf33ERUNRsRnZBxxPnUztneyHLiECj4KQVDsA18",
  "key11": "2qXj9x3dX6HRC8WZnFK4UEEPHHRFrKh6vnvGa41oShBRAMqxYwZpTd8NQuomafa4Yt9sVNJQRv1486Tb5PQPWRLL",
  "key12": "2pQ1CFMbTiW1pwjdPKWBTkqT9zSrn2ck49nPJ6ktF1CURmQrCcPRVqAFQEAmTSwJzy67kfxabnaXu1u8y7sqQTSh",
  "key13": "3ypqb4PUSjPmLQqpeNYEBjBoGDmgLJECqfKScs2EytaEhXmaj4GHkXoqAUPF5XsSDncTtosZvK1SoBF7Am31R5uX",
  "key14": "4V3Hs5bCkZFqUcV3dtnG8vjws4Nem66itPds78mmVbHsdYUk47EVD5i7aCn7v4ShADzGaP44vGQdB1cwhVTRrod4",
  "key15": "2rWR5GP57wtDaDg7kxNRrYQJ2kdjjtgdhAcCfQa7gCAyjciuboBmch7SW95zX8DPhh7T14WtTf8moL7fScLZFLAd",
  "key16": "4d5WwU3q7a9zFL7Y8k47AUd5dNruxVuNJe6XT6Dz9of2Uo5y8sQYYe1FBkRHUZ7R6rNZK2rN29vUNh5TPWVsWqmL",
  "key17": "6PRD19pexGLawY8xr2d47cmmLWxCAuiuVfBpgLtfMornQTeviVPAmgCW3tY2keWbqSkhVvwEAD2r5DtXYbbuZrh",
  "key18": "4bLZHXhP4Br94VbHYoVyiPjeC3a9Gps4DRyJkR9qaagLTqnryQrkyFAZ4eqdBAiJuKGTTUDVnjernKFYhWtEu7Xw",
  "key19": "5rKFi3WPpJ7it14FZFTMuxj6p9bUUavWV22JukzTrf1kadMqkBu92HKezeSo1CPcnm1RXcRNhwtuEYH6mbLV8fFd",
  "key20": "3HemwjCAbrVWhZ5FNkFQ1wj74s6xMjgDq8Mc6qVGmqumHAGBD6334kEj5GYzC7WDTHum2dFe6y5zmZVhdTKrmaa",
  "key21": "4drVaMNe8Mp2tzWDbeu8HJRTx4fZLCX6fHrYh96ft6vp3q3tC45ivKrzEsfgaBnY4ZY8GYmbqvC7h3oEVH7FMpMS",
  "key22": "5JNUpxLPikdrRxhbLz12aTMp6EbHFpaW8gGtBHxnSospTEJSL2Wrss4u7bFGtCV6GWwT9Ew2xRC7AYdBfjqX2SCS",
  "key23": "4iTkFe86wiq6uegkJ6ByNEX2EtPvpz43nQWbLDaC8eKqjePJ6MwGrquMLDEnH4gA83ZWo8V2VneYefgDC9K6Z7S9",
  "key24": "4JiDSd4ZF4QdKJMwSMWbcTNZTq8SfcwL33bDevdshBwAocVACYnZZzHxnrqDx1KhD61yAZGRXbjQyVwJmtSawPzK",
  "key25": "3g9q1iCcRZa5DBQpSHMa5U3BQUH2g3rbyQCrLv2Yqsb8gSVYY6oU5r8q2giiyJkiAYk5xdCnrMoZGiGyDKTPqH8G",
  "key26": "4Z3uPtGiUoYyhheN7TujdzTQuKGMC54GEAhvjJy2sL1cpKPczjBKdd9F8ezbK8UjBK2XAjfWVuN26bBEqCpep4kA",
  "key27": "4jaJcKk3dvAdeRH6KpJmGMKiuVErLYMVw7B2aztq27VXRFvdCCGF6QYeUgG9G4vN6UJsBjJrmVjHA8SGHw3xFPiS",
  "key28": "FoeviP92RbfY6pPmDqRhsrMq4wLMGmgWT9NBT5S2MRySYUZ1GWh1D8GypoBK3unyygyFeGuDbT7V4PYPTaxZXc8",
  "key29": "5Ksr1NsiGthLWyFZY2jnLu71oS1hNAPW388SfzCuXqieELmgq5APRaDmdYA9jo4ADpwRhGbDAHdPXwNu7TeFZPxm",
  "key30": "JLz5KBMjWBzPF7Z3mbzq4YRHq2JHuMnTQBKwMdzGkYJ6GRdZitfM3S7q8QDnW36NUSfiDUL1rNbMXuiz4gxcCBt",
  "key31": "4MYQezjUoj6z6cUsX6HDsrFeKJzKm53AFtVteSp2mqMm6AVvW3eAeb6F6tJVB2i3vbJykELLrh6d3KAw7Yi9yog6",
  "key32": "3KPJM48Rzw6LwTKVHUrbfoeXFfyQZ6FNtU9hp5C4qqbfnYpFQjay25UN2N5WgBQT8yGKFFDNxh3R5R4tzx4SUpva",
  "key33": "2ovjbxivUdb4VQEW4pXhHEAPzB85x8Gx48JfmPLtR5KHqYFu9jh6Eh31CNKvmenfZfQKtRGrgWu3qpmxh2sPAnew",
  "key34": "24tELBc45AYYt5i9to9ddwGC4gsVHnXbQBhZCDYRWrfq97bznbJLEvatqv1wzK8o9v9TZCNRtWWV1wuejhs8b5Wi",
  "key35": "4a5YU9GBsstKvxmrkwGPxihqApMX4Xe7NQDDdzH5EjbCSJZHDGXeK9mbMguhWWCepPYpmULw4gEvvGiiVPDgM8K5",
  "key36": "27P5FQexZjDgY4Auru45pU8vyYV1BEaL7gV5ZzdypnH4Xq3HLnp8ZU3bzSwg8aUUbKaSKDSAwsVrqKR3Evc2o3pc",
  "key37": "53SrxQ8VhKyr2PZ2jxAfNH9Vpet8K7TYjmLALffwxv9yCnfAJAcG1Kp7xPRQjLpQbVVQGZYra7ZEBBRoLQBhomFL",
  "key38": "5o8rH4T2RwinweT3rsrkBjuj1Q5iHQ2xUM1YRsCvYyw5ZNTB2eHP1Tp97fHiaHrNmDQCB5sh5vi16ZCWPUNFLRUB",
  "key39": "3Hntt4Q9Mdc8xiAdtwR3e3QQT3g5GW2e4sUs6ntmy8nUPocAfCW6B5EbvPnK5SJE8WQSigk3Nu5bPFUEs2jRWimF",
  "key40": "5DKSraUk3SfVdcpd63uQgcenhUxZDqoFm6ZDXuqM7kXFRd4LviG2QQbtgR6fgcMPkMUh4n7ZSUCbJySb4dFx2c2t",
  "key41": "4Z8BYGCcwKdrjxMDRbt68CwgvHy8qHdR9XhjJiGXZSvmxzbJosqA9oJuTsAqsXpSyGX2NNf1JHMsDyYqu1Ld9nf",
  "key42": "3QAzeGYfuYZFN1V2ztMCspYGTNVfw2b9qWVgtKbYCDQpwv92WxcXznKR6Kdvnj3Apkk6nGyFHjdTz98inxBFqg53",
  "key43": "2YzbWK3iDTSRXyywERBQ4U55oyHVfPqTaBWaowgNVNrEAWbnC7KPippG31Dn4dsJkJw6Y3Bc6GCdb49sJWYtQdoj",
  "key44": "3BQkAGfuAgNzchBK5XL1bugbWSz9bkBikQQU14NPJzZoLuALL4vJq2PBx5e1Wc1cSyhCd3naTMhXG9KMjx8Kuyt5",
  "key45": "4UUCg7wPYsyoPamPoFADM3uFZBSowRnf448kg6x7UkDmXkUefJPGVEQkZt4xjG6ML9gRYj6VKztXTvD4JceJhdo6",
  "key46": "4CWNKtGAoSafvkaeLvRLhb9aJdL77ZtZaVaC8Rfb6nxyYrpTkczqtoS1xHBeN1H6wDzeYZfvCecxv38Kf39s8QuN",
  "key47": "55wrhMQ2169XCDESQnT6uzLMcw5Hh85JVPYfxMoQapL1D39mdHhs5i7yY78AdfTVdzAz44wGUVFeEZQkDFKMrrJv"
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
