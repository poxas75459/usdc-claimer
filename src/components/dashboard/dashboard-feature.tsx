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
    "4gJATSbCWct4g3YcQ7XjWe71o61s5wYyUEauRUy7SeA4aankAwbbqP1KP3txDRB5CoGcvu9kPS5hWveRtYCBjrZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jyYc696htxtLx1qUpRzRXy9w3ZH91tNhCYUvWv7PGHS4L3JP9NKYJ5nd3KPncdhd4BAkDpPurLZAAYaLZs86L4H",
  "key1": "3KKpKpQw4QGWcgwTnF8gazvsLDLpxr4Vjq45tQgQ6DtyPhhM3LfWLHjSeou528ewYGyN8Jmn6yhFiRaL9HneiB77",
  "key2": "2xAvVPRGeHLjJk88uikCXS4F2dguPW2LJxVYCmdLZst8z9VJSe8WTuRzj3Kc6dQrrTuoVZL3Cg1i4ujwkZQLNJxP",
  "key3": "4JCnMUoqVxVhGPk8JGCTJ2TfmkvzkPx6cmsuA5tsJ37e2UVhhjX2F7kd8zQJeD5u9tDcBxBCgSyeyT761xBEaZnJ",
  "key4": "edBJMZw14CZGPy1jr5iqiAJbocLYpbbGLFEmhx4GsiuQWBLZgK9zffLR6c9EK8mu7YpCS4wvCPiXPUXoMFECxWW",
  "key5": "5WfBFb8uzP3MeXYpSvZY4LcSUdfgYPMKPnK2xNnh7qNrwsAM58wpD4FeD7dY84P1zBR9iRjj2MMfKjiTJNqQAqac",
  "key6": "4mbjF6k1EWrTh2ekKyS4Eu1BaJn19te4FFBHjYiQkMASQFmg5cEmfGChFus4js7MGzZbFzigBAaffjFNgtJECU1w",
  "key7": "5pWHanPo4CN12bHpDTrqzBEd3FxXLevir3NJBgH2s9zxVm5SqM2eDZPyqxqyDSFTnNuA92thRiNh62FaPYRNKPST",
  "key8": "54EWv9r8ftPykjcxEcY974NbBGMt1PQvcs2G7w4La5V7PsgKuzCc8DFpWm6AnDyVfeCRmh6iNFTfLUkS1xK3eFLe",
  "key9": "2c1SZiQPXvHdRyCuZQckSNg1wW6Sn3qeNj4Xfix62pdQ6AgwG5ycoC279Xk3uYZpiBw8Bn2pgx2WhP5kDKCKq5s6",
  "key10": "4YSsCk9jDSbrFokzRgercd4mr4QvDUzZ7zZDCLJ1xGzy9C3cMSEaT4CbdHq456xwem7nJyeRuKKgahrFkz9RiEgc",
  "key11": "4PnejK9qn3Gju5CoydxExWSUPTXnUYJpxTz7S53b6b4a2xZoa5VRXmvQMnMNc8oVtkbRwphHC9tzQeMCgYDPkLjB",
  "key12": "2akXfBPY9iwHTRKn9cfXA8KotCH8iQfrZFFpWR4bALwbQGFDfB6dLMr6yx4jV16T8rp8ghfpQ862eWxz3soWnF7u",
  "key13": "5B1D1VKhFghaCNB3Wertxw8JM6YqQmfj6sy8gzEiYXK9kAypetAzV1dGQcoyLHwfh8di5nF17tDVEAi1K7hycui5",
  "key14": "49bVmv5bLCghXZCBYH2xqqqmTxUUFajuwUoaDDe5FFueyH7f5qE471pPLtHpJ6MJZFArfkb7BoXpGp5zjBFutE4t",
  "key15": "38TpTnfWBXUGiNAvwd6DX3nPkP794fmeFJCceBJ3hnMU5fq64awtpQr5vzHmhGRLaTS3TCPRJye67LLohbhWEc23",
  "key16": "3GMQm45ZKp8emp1KY4MiJoPLAeuxPVCF4oQ59KQz3diPzQFYUqDrgRmjDTFQG65YFF8cGFMePGkcsSJgzEoZo9SN",
  "key17": "24oEQ666kM5DE2FQEukHFQGfR3HCnZDPDEh6DTvLQKbTrHyxfPariTrFRGVLzwS64E1H8cMyTMB5hdp9yV9VnoBn",
  "key18": "23b2USGAtV34taVERTVe5XyMCDNjQYLhLVZVX2enfv4L7pP7ZxHrSNEf7He2wRfaweSvhznLdWUetbpw48FWyL6s",
  "key19": "37j34ogRkRagZ3nxESXPdfKhszX7DJZ6eXp7p6t9yX4LCcyLvwMsLHRAMeBmM6cyv5JuCNRa3fci2pMh9qkPGBr7",
  "key20": "61YhKtCY9jXeTFypjvBixNHoJ8GMkXwjTgittH2HBmEbvH8t2f9SBLkniPAvQc1k6SNjaJnSs9VTNvBefPYfc742",
  "key21": "4sum7poBRZvFT4gAqsmvdSyJfMzJ9xw6zhKxJj7j3XXRnubouY38Ra8rrqsFvQXv5Fvkpw44SNsAPffiC2QRHb2B",
  "key22": "4YMTcQcydQyjCgEhecrqXDNt1PjgXab3ep1oy148uGr7TTch9nrD4u42ZQU54n4jvxduNr3ZYinkS2DdKNrR2hjX",
  "key23": "2bvDsx5uvn7ffeGswhcD1bqmt2iWFcWp6asqxQ7SqkvyoA7HAoJxqmqv4y5R3sdquLP5t1VnPcsfnMtS5xDFrULj",
  "key24": "5puxgfvpsbbgBxMVfymLdkZ3KdgXfN1GX71MKENKtFNvyQyB7eU2t2aavZqaFZgGZYm4NjUCMcNkWqX3JGpQECzN",
  "key25": "3iLFM8fSJjnpVNMp7T1EMur8nmpE7yaHiRrk9VSoARRT6BFyoQSS2ts3S2xLkr5UWp7vDd5RnF1dCV39f4zGd9Z",
  "key26": "256AJYqu8gNjbAdwgUBfsVgnBxsv5vXPfZZJ2yxRPhb47Fq8KdiggL8vQ542ZQHUgHcdhyb7H8JgSwh9aLAMgZdC",
  "key27": "7x8X3FwcjEVjjPkbj8JLbL87xkpcvV8okjt3AhDj7K56JoXXLQyviknHc7WSWrA8K8HcExpbnSAphzxNS89CRxR",
  "key28": "55TJRpQjmoAMMR9SAfb8A6Qa1bGgDYvNFB7tnJs4jRjtFf46JcQErLNTQsJHtSB5F1tcYyGaZmkBCJcGJumLqg6o",
  "key29": "4zF76zG6vaBnGQKMeZ3YULRFcDMC6eVw4wQiFefN2D7eodjVifWKuA5qVSMff3BaLRyUkdWjW1khBujHZuiJNgJk",
  "key30": "3FCW1vremHfeSpWt4BgumVAQfPLz4N3CVRRpiVpLXySoHyscuCuEnrwDRtY6gdLT7efEGTGAexz85rBpcPaeeceZ",
  "key31": "4K3gNBtVFB6kuMXF2ZH7aE4nedbrRYUFxqGjH3N2tZEguPApv29bZMK1jR95zbmexzF3RPRoc8kTcZM8wgbmZLw",
  "key32": "2echGvpVVNKWmTcgwp8XcvWA4mMMV1NMmxBHb8ABiiNjCw9nHAH8mQVE9Nf5odTjztGVFbb2J91E1R1JVQqX5gtc",
  "key33": "9JEnZGNRLvLWJ8dtCEg9acBgCDjDxzh9HmhwjPHrMru7g2KS2BzsFSHB9TcEqkY1VhzZ5xJDPwzUSMghWzvGJy7",
  "key34": "3ffy82BATWJi3TxaZ2NNDNrndhaahQNvUSAkAjPRU9hBJoRVjTMs1EGNuZwAUZVT9XgVosoDVQFRQFS2KHLQJ8KD",
  "key35": "vWGu4TkAXtUXiHVYnrUQRD3EnkFnGsi1SXr5erRnaZh4wPfpLBWF78U7zV1YN4M6RDjoMR35EXvsuRtGNpVWgA7",
  "key36": "FExiAXmLiCfw6S8qu7VnR2acRHxzWFninQuMmyoB43WAb2RQAwgK1hhgFRRuEwtYp88fbwweumKxnFYUH1eSndu",
  "key37": "328DfV1eungpJuCHkhi24pmbGdrJ2tyAjkydjcL2tTczdPCsz24yAZzZ8vb7JJg3jVK5cR6j8c4is9TfxDhgTRAt",
  "key38": "4RbYzxC3KtN1eTYodLwJMF2dk7p287onSWXLv3832hHgHfCdthBGgQF6QvpMxre4dDjNF7HYFMZFAqBS4APue5Zc",
  "key39": "49f4tXusxgidVmC6Z98VXt6wsAWkeYMiYnp3MPE2UES2ffUSGMaBRVEZvGQ7i11mtncQY6Xbgq8h3q3nkooNGkYo",
  "key40": "4muqnDmmsNLx8Q39kUjAVH3y2BNN3SPJ7sSXktBt7V6c8AzBCYRbTxneodgBjcY5EevuZNPspTUSP3ND716U4t9e",
  "key41": "52P5BAKHMyPbEi7n42g4twWEACkNFUeGTxwMQ85AsTpH3ucWvQR1pQbSwchSQ3tR77BwbmW2zjcrkAf9RDT4Fwwm",
  "key42": "5w4xjqBPMXNaDBtkx75w4ZF1fKWo3tyPZhD8HXdgCrM7fFQoHFrr99g82etrJxE6bgxT83SvwEkcsxAtkA8WNdcZ",
  "key43": "5AwWMxuB8erp8Gt1jMh9v45jNGTKMKavYRHRnmbesZ1sLF44VDEZ11WLxKpCSsQAcxbz6rKdiaiute28Mwet6ytU",
  "key44": "jShSp35C212TST6aR3BemmCzuXQwrawf3ERmwLxMyac2bbVHSWfprqvqiqAyCe6oG4vydg9iuskyXbuUbEMK6Y6",
  "key45": "374yHuxNuzcdw37STYbKcoAcsQrSxFWDp71TiaxWs9qQy5r2Z1LmnR3WVEH4sd2Soi7ZTz9e6BwVp9zBu2peDsKN",
  "key46": "3qKxmkEQJVtYyoQBVyKNg2R3GmzT4wJMZkcGpNmZGvpW6KTceu76W5iNLAPJn23rLBQMgEc9RdcSQsQMPgNYsbTs",
  "key47": "5PD3m6pSVA8dypQnww8kq2QUdmh7xdFpvuTPcZZoz51Adf9xamnbSm2D2p1x9DEBkAHY41vQUVZRcsT4f1KXKieR",
  "key48": "3czro6qkyAMz3cXBCWmuNijVG3QfV4yQnB8EFjtLMnbpBRu9VXdhVpgfNBgXAozoa3jkobsqLyARhCGrmLgpv89W",
  "key49": "5QbwYKDxZwjxhxa3fHvGGc3UhCxu23UrkUqB1E5g6V4bysykyUkxwkt3EGpJSTbP4bLh6XMAN3KZ8aqU3Yanehri"
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
