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
    "49sumCpQZ7gFgWfXGQzA5fZgxpyy4jiEF6FjACTURxQeZBQEwzSbXiACAJEp9nPpoaMLYxeo51LeVRkhvjPqXzjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nY8BLhW7SrGt82syKv3Wrp6ThB4o1RpA43ptvYYHMkiGB7FWmZvEPRe9iPsogMhjhuUBUhUpizGBJQJqpJhSWKo",
  "key1": "66ZGcVbZ6SEZg6rr8UfymtfqxKuErW7DUHaqacwYmkAm3GTxbx9KSqdbJo5EJwBw9BJJnoBEHJY7TEadsfKwDXBv",
  "key2": "2VNWouAEovqjgzkq8nMEi9b7Mqzp6bFnKEkzU1KiLfzyjRHtFQ9Ft8g4HTxFejNTMxqkyZfkEFBQq55zgTLL7mPF",
  "key3": "e4k11sGm5UpYxbjVMDgAEG21RoWSbHvGShRDuEr7PTTdPY7zeqQWoKnoY6z3yfBdrJkddmtVZx43pkwveyrHvyV",
  "key4": "5i8b8EZzJsGFfpWUbQ3ot7fiFLqU3yRpzoPMu8SCivEhnVY1v2kDoEBzqqimXdHb8ShWRXAuFgvbHRDfj9LHgRrV",
  "key5": "3qNWoSxwBReyLMi7oQ7HT6ovxxm4fz6JkyXgapsrXz1EaZi6ykDt5WRmNwoXgVjdp8Jo6SrU9H8JMJ7QmuMWyuZv",
  "key6": "51Ra2RDWWWjH4zSEznbHX37p62JWTFz93vNoxVgJFpGWvzst8NVBuiZj2e5VQQALo1MAcgmqbF4M6t44TZLZYeuC",
  "key7": "5hbKScRyyRNhCNyGXKj78BkpBgUd2r2Gao14RGS1w1PVzbLAjxGc9dpiaceRr13My2dpUzGfR71gNwZToW1HtCm7",
  "key8": "4KRZLAgZXNYDEohzKfTgaeSchwHdXd5LsXUfQkrstW7Fqfta23ni4Ue1pszDs6AkSFJVE312paiC57QFC9gZxoqc",
  "key9": "4HZcpWGz9URgfwirpWFruoQVuRwiDvakg14itVtGoq5qDhnyfKXkA2cL4dV4HywLKJhFgCy7FvBNMy4TJff6Ua8a",
  "key10": "4gxyUEhzMKeo4fiPacq9XrsQiHhDoRjfdzDuJTviTbZRj1UKAkYnrsutm3X8aaTrBrnScY9oUL8hSewDTPn3Cnzs",
  "key11": "3uievKxVW2iDf4xLvcL4Lu81ETmV5W7tC6AxD1tcUHfveR6rAFKtm7RUe79x6QVPdNwWJWZ1cVJyVtwz2384sg27",
  "key12": "3pAJbwS7sQP5BjirmdjpY6j9bcMb8KozdCmRy7hN3pDPidpFzxoicSS2RSHa9GJAtnca4FsMnakr392g4rLEuaZo",
  "key13": "54b6PS56tzXukmbmMJuTT87JCzHek4Z72rwKLuhjtGdDFPA9bHCHUn3Uawo442Ke7vkC9WHMPJ7hdAxryEviZcAo",
  "key14": "hSVbhNuF1jn5YuQ1yKjPRg3UNAMsXZV4BMRDd6nNvxkkfR3hVc15Drw7AGHDkxF351btGN6EFkk4ZjeNeTfSmzj",
  "key15": "5oTaakZRxRgFJvcqZhcct8o74A62AXRbK6okH5mzeAp3GphsoZXM1gmLPHYq2BgviPvsU3pKcu79vtqfVoHn9xPz",
  "key16": "3Mq7oPs5qwsfnjiBZwuGm7DwzbiuBj6PhZQf2hA75ZpkotPHqfTjj8zGVj9Rv6ivVSzKKR5PHjuA6vA2qG1L16Yx",
  "key17": "55jjbpiFxXn9VtMrxvYVSRjcLVHouJNUrhfkQiZNLBYJSF3z6ZHAL3jmra6u9vzHfsQXCP9Cqv5U97viG5WDYhn7",
  "key18": "vbgV3dXXXoERZ43jcPD5ZJugSuTLXYYAAW75jmZBbdbhmX9N1MLjkH5DqyDPxPCXp4yr8pzgoKndfS6eEUzJRnz",
  "key19": "3wFJyorLkjSpA1dfXNXzmweqHgvSDddTGizpBesMHD198vSkeLKcKhYuLz6V8N9gPUVY1Veho1podFkRHj5QNGLz",
  "key20": "5Ei3eFtVEz5LGAAkKfoF8GzbjExtwZpVx16sYH2uiSXxHi5Jgw9guPgh29kpDrsQ8BGFrBcmnuXeZeX6pc49QtxJ",
  "key21": "4G4AtGWnGFjNJkamqxnrmh5P7PyCr38VdNSAsLbLFHBArU6FnTAvih62WbB3et8uK2DzDHkmP8Pe2fh5p1pWnoYZ",
  "key22": "4BjMLntRinommfSJ2Sw4XxtJEcirWBnwqSF8vcRh5iFecf6Nw3orER3jereP7ENK9TuJWPjYp5yirqpVDodrfiRw",
  "key23": "59BpyQrNNh5Faus16hiTd7G7WxZvoA6tRhrGjirP4s56avXpEUmKeAgcCH7JRiGGVg3t8gxybprge7oCFG6RmPfY",
  "key24": "2855N3xEbA6AbwZLMFpNtuhgzQjv1va8YicKnZF7xev3gTnWfNaqyprzShrf6sMP8UpHfgmmQD1qSV9ewknAEWNa",
  "key25": "3AcDnsknisjK6ZPdDd2CBi81YJg2mBqjLm9SCc68a12LNz4CzGcV4HsbMzkHyZ5XF7T7MdHPsrNGFRfg2Bre7qqy",
  "key26": "3zMhmvRF6AXFvvFTXHuQcg8c9d2GipxGhpCEfpYPu9aoBchfE3AHU1469vBBqzQZDFthXHfYU5KT6k9G8xDTHFjs",
  "key27": "593Kdo5SrsvVe7ZXsn7VTCwNDQfkYjDzRWvzAs263PEghfiUMjdkGTuDDQFo1kxLn8U74LEzQVhq38qURfNir2iW",
  "key28": "55UpZThDEPoqRFnXz7mqdtfXbAVwburqhzbZTtsy276fqSKzZ5tCsuCJ5bh9VJ4m8bVPEcQshurF3cWX3MYZFUrV",
  "key29": "GXcpwB1j9Sew4EkYU5bnix78wcJd6o1qor5MYYroXQZHyKSN1HUoSzBADmyPMp3SuiRVY4Da33fAtuwxs3YqHH8",
  "key30": "5bktaSVHaWFqggpwJfnYx16ugEg1JvfpUJSfGy6vKvtw1PzG1wbvXRKYUVFE4Qar14MMbSwLzfVzH8GMW3izGC3L",
  "key31": "5EMh8vt7rwq51xnc4HZVvyNtcRxVNi4sPeoNpApFMzTaJP9rrt123VowYxXqSNCpvPd8CEAGr4kvrk4LZ4NGZWG3",
  "key32": "655EqjGw4wqJqdwQqzMSBeL6oWxbCga8wEyDmsBBmZas4wstuJ2cB5KTftBk9rSLCuAHvccV4P8eNShPWrSMzsj9",
  "key33": "3uHGB1F8FgFzuRt2tYasUuR5cW3YYSUhYVaCwhCUc1U24CpTTTDUehGohD7LPyK6Tkkkz2drgZWGTNJuyt8Pu7Ro",
  "key34": "5mZdPoGrxPnXF7Cx2vgoV6bm7SM1WgKA5wxvp6HJr6Ujud34pPRN8MeLexLwoY27CmSx46L4VQtkcVTwSVUm5PuA",
  "key35": "5ZHduLRMR16HZctB5QTQxPVxhcWbucKwbWjsxrXZBk1rpMRCyPS44GSwo1QoGa3WMzq4wsJs5u1ehYeDYymdH1JD"
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
