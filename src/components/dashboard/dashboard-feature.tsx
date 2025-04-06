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
    "5vUn9TSQyDaNm4DyQCWZ17DpVHL5MxoGwkyafwFxcD7qxBtJpLSofzv4rAgv3FmUhzBQKYE1tqtMeA5ptrE7Mbww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "byEYbcKj8T8YNd7rw9PCTRfdwQccPVSR4uEdRCuEVTCd47nXzf32iggZ9oZscVEkpdrLRteg1UqnCGDLCXjhF5e",
  "key1": "2JNXTdEx9tA8UK6zH4F8nZ3dwdAuRPJLcn14MoR8e17hahY1rAq2NaEEERmnwY9QkZrTSFjRsncvTJXJb1t2GtBZ",
  "key2": "4erpdcwsnm3AuofBdD7PYgdYXjpxsZg8FbXJKC9fzZ3E7vedz1gqyCJWypDfWa9Uz8iDJMU1S9vG2pWpt1D4ztrF",
  "key3": "5aVWH5CgNzCLhHhsSJgbBTnRD5EhFPKosaVU4dfidcqH1T21MsuK8Gk62UkghuqAg3NVKUdtAxsuwcXmRxmR31kg",
  "key4": "r56yRbN5FWesKGyKsqu93LVynbDRh8y9sosH87WWTwSozqJioo4VzaQ82rmVcKQtBayDdyeDLCZz5V8oU1xV14Q",
  "key5": "4R1bQUbZ5o7m4W9tdirkCi5vUDT7SBJWjfbU7qHywKjvJEZkQCJyDbg3hmbxFAxU6fcwPKL4koAArYz7b5H2t13M",
  "key6": "2jSjqDsRu1Q54yHVmc7wZbeXd2ovkVU8WTFSHqQY7RAwyESQGEk7x2b9QBe8gj6JSe39CJvpdwf2rJ3kd2vJpMr1",
  "key7": "45V5YwHFKLWZ5mdSpYew4hYX2QBtSnB9gbX3qCq5SvFyRES2Z6UaLkqoYeLLbcyzzMkrrqqp1GL9cKiYM5aivQom",
  "key8": "4msMSjeWEKM7zitgQQcbDgKpWwWhvemLAeBx2xGZeokmduHCNyVXw7AnvDrY8YZgWMgVJHyKrGNYQwtokfNqsoXu",
  "key9": "5MEYypaBmxtHpQtDfzoR4No3E9BkntntmHKb6RT47vKHW4QQTqVkTX7gKv2GDeW15kgBouV2CcCTgfUfAtiB9cHR",
  "key10": "4wwxE8pcskhmnRRbh2Cuqjytb8u7Lxh4GmYw7tBHM29EgFbhS3irBuEPePPZJUy2vekuSbj6oZg7j7KP2TEmyux4",
  "key11": "2sYe3HEtRBmQ3Jb22YV34NKy9aSwvnRhpQHp1kwdhkWZzHmUAkWmQYPSbh3Ss1eVCy75QGjeNyE8f3pZruyo7TTf",
  "key12": "8Ae4nUhrfAJPQ33hsXAMrAD4h5F661jNxExdqs9f1NVYaE4sYFSud6zVqjb3XBjxy7V329GZHH4SXyqfdGUUsNA",
  "key13": "5moXKKvubeGAqrfUGdQnJnuBPuB2tqXFMdZJcdM6xMbuMMDjwTQzfsyyp67HWPLPYTQYARZ778tYu3mViwo1rwvo",
  "key14": "c1F4dezqat1RMo6N4ofucU8if4i1ejQhotFj6Qvqd1LAJQZuJGgdw3h189LEdZWtiUsov2K2wzWjmZcEhnW1uqT",
  "key15": "5xpgMZVLMG4CZUtVDHFaCHPz31KidfWfjb9wqEEfVTnYqhRhvLqT7LtgGU2NMsH8F9ibiSY1buiXGn2JmU7Ct8co",
  "key16": "36k4MignDVQdb4QMqsUNz9obBSwwavgEVZnUdnjXbBLYXiYV8mGonREbY5jyqxDhn7UbvYK2KRVnvPDhauvsNJwu",
  "key17": "3Y4DrDK7mi2sCsD8duE1kG1ieeKGVhjVRsFpJiMrZzV3yaN93mWQJWbcFAw68jzBdyoDSYcsdvToC1UuK9c91JUt",
  "key18": "H3hBsGBjaQQ1N7nGCTkDNdZThzq75kksZN5nTf1r5PeALDPxBBNKTQ1eEKU8P6xLXAXmXhTTg4t6JimDF7Rd4UB",
  "key19": "388xwrB98kvi8SBuomFkss6xFPGQByd2sQivpRPrgw6us9dF1UVWs685PYkJRardQSxuCEkQLBfXkPRdUuFLtwo3",
  "key20": "5pwYN1Bsd5HmtzYqJcZeRru6uvDYgAZf56SG8RqY1dS8vcDC2ofsGMEV7i4bsuAQrMfJBVMiyvPiwLtQ9YLa1TAY",
  "key21": "mHVeUAmuSxVCxqAKYT5ZEZuTWwcFd8VaQnsKEDQp13HuwF68yxCKSwYTB3Ek9Utr51rCV33tt25xP4HEQCz19Xz",
  "key22": "231tFSrivDGG4TtZdP7PDPnNVQpPiknLuiJzKnhiVVm21gCMk8qrMSUtW6nf2JmwoGbcWxf2JqtZvQXiXGSgAenf",
  "key23": "621PpXRmN2TH2nm77qTgTCXxv3RqFNT4s162DKk7azU22xQMroRz4YxviPrJ3KnBEFVb92yStPEy71potXe4q5s2",
  "key24": "35LZddhNWRMnFhxJ7y7QCtFA67un8FShpXRHnCD7wFYe8yABnnh4P6VpiYeYGgDKwwWCkPevzxdWXmYuwQ5uxjPZ",
  "key25": "2sgdNbGRmZ7za5EepsCkeEoB9qbS7TE7HsHnkQQ5xZoJoNVbf5DtU3xsxH6Zynb6VyhoqaZNFKpWi8Hu5Kug2viM",
  "key26": "5q6WShSWjk9ZiEEPJXXS9ARmGMUCjXGM9gFtQmDXz5cgf3UnwrHYEUpvjK81Ld9bpgh5uZRmoVoTFhpPLTDJmKT8",
  "key27": "mKkc2tiLNeWPimqEvPKQV22G3P4VcPzYCkTc29WM7SqBwDuhemnBeamqqhxavKXVGAknmojpRaU7V3ACdwUMQ1W",
  "key28": "3HME6NttmTbTauF7jcqQ281BAU3KqsYsAUz7hazMtbFADMwzt5C6fGLiNoUwoUTaLdxX69ruCzgSct2eKC5qdGr8",
  "key29": "4P6JVSR4AB4bCCA4P2souVSnZCAo82w68qEABYmZGNs2661FXfBbh3LY3y6qVXtzQ9QD1QRicPcmQbnf6Yz9QXDq",
  "key30": "2hUD8zJsKgTM6Dc9D9TH2WZeUua8DxeKeirDeqMaTdydNw8JqxScQ5AGevQD3388FbbCZMZ43S8coE5ePu3CJYpu",
  "key31": "3bPg4vAaoCpRkwqEAQeomCLPPRkS4esH1ZqfpTdya52wB4zjTxzBGdoeA2Jt6LBrPZwUMZjpwqwz6XbM192Y9rno",
  "key32": "48StP2y98y9YKnqKGRJK5LmYL1rQPxce9veuzWmzgKwJF4q45QTtKkHoJqVJtMaVo5ccCQMbtZfSrUuC4myhv3F3",
  "key33": "2q6KUJbhxmXijgXnXNNpKmWkjCrKVH6TCVtfEb5Pch9FDgsy51vTH1wQRc94q689ZEc8pnQcivj7XVdbH89QiGjS",
  "key34": "2Rk7D9WoAoExGESuiFR2Znnm4v8BvrzbaVhWhNMouDa3QiipAesfhY6BnQ6A2Wv6PYNibCqdfHdSCpcpQnQNCkBX",
  "key35": "3TM4hXeyDRQo8bTQw9ETkBnkwk8oe8RwcxGXY3muMkN2QhgVDFNVn7uWwcqp3FS54teewwcUWSkCH2eQAPBqsHp",
  "key36": "2CzT9cnGhgjMquZidxB1LXUhdjExQRu9z2D2H5ahJBQcUnypFq3P5uA4E6R1Sm6qeqsFpVXBaNJWVaxcK87er2d8",
  "key37": "9MD9C5TJdYbozyv9Wf4zSS8eWHyepM2C3VWAUi2Ry4FJkPhqGQd3E569ESagKVWUeExrShz2ZCzZDSWnPYCr4fE",
  "key38": "3teKKR5AKZp3v4HLjg4arE2vQyLsJkw2HAtFFrym9GMg4ULPf6dCwKCW5dR4rT6UU46VfWddy7zpghBvVcASXPGE",
  "key39": "X6vqhy6UT5yJQWHjJCp1rhXRYqREG8say2xFK7zgZsM4wV5SKkoHnCBzmmxFW4zCvSkVkT2GRFh3nspKbDKrWXy",
  "key40": "b4gs5Pmv1p6DVkNwJX2ZEdceLw7ysSPF76hLukTEZxjutKpp6ujSCDH1tnMp3huDU3JSFXgJVf7wHVuwXbwbizM",
  "key41": "fxBYhUFrh4oQTUHBwNvi3cHsPSHQLnJ66wHJLhTCtW1Kek5fTGbojDxULXzDKuMMSXXfTGyHhgxTERrzBfKekEc",
  "key42": "fvgMuQaGuAPpMwH3j5phktYjhaq77dFhgdXE1dpCsdrH32xyethjsxuMcSRWxsNaB9VSiiMTiBnzoieb7jnzBYN",
  "key43": "5uiSxnqA2WGuxceVW1aeQBVKTZrihqescVcqBanE8qPzX7UWiRGeJHWAAwTdSp76jchn9vaVDJd9wsUvVzZ3B7Se",
  "key44": "4237nATayJHZW24GfQPrxHZe2yqwNEGBcCCN1r6vt4LrqoAFTDtmT8b42GVqGjdZiF9bDeMTK57CES1xScUCG5BA"
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
