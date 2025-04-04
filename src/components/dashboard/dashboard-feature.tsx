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
    "3PWuHHaLca7FND4kNrquQddJr3LJzUD48BrnKh8P39JpZjremYs9ToQQobVY4ErdVPg7MtVY1h7PyJdpzHGT1W9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nFXHEXFXudsfzVv6gAxSizSt8jM5o8g16DBmWewxgeiZs6biTUnfLGPmS54T9h71ZC6hAke1VmDoWVatfzSU5pM",
  "key1": "34KqvYdNbg7KB3XnLajEzQn6sTWZ3zBeJc59gqSyjvrEALgpTcpJYHZgrBzDRc53WX1XuA8ZXcB4VeYsTfYna74L",
  "key2": "5x3B3iMyxzCZX1rYb8L8Uj8KdKNR3ssjtB3hoP45A7w5MkqRsDJ6jYx1CH3EL4MYL5s3TPUZDkcEdqebQ3aNUYgN",
  "key3": "2hUyQmmFgLfY5pDrLjbequFSKJtCyjfipyzifuh5qtEopjqCn9rhJYTxZuv2ZmsMXJhiMrBgbmcsoCVVqsfTZJ1M",
  "key4": "3ZTto2E6ojnLrZzG7doPoZcPXhb3wKDGbgyvdLn4yTa87hREEiBYt75YV1nGFm9vRLqK2H7Cwvoe5fi6rtBk23kK",
  "key5": "4whxs3pkGwxyxiarVSTEYqY8RHzqHvxKARXW9EUsWYmzM5D7aMFzEVFYkZds9uv6t91pijkLtoRcWBqETEjvk6jY",
  "key6": "5ubiWVjDwKU1yhpXnkiNrJGyXjnKutvdJKoraay9ufKP1ccbBYEH8MnGFia8zu1ESiguAhq2Mm5smPn9tC16bCqm",
  "key7": "2ZubMTgKKVPMKvFJQ3rejy1DDp9hinhjaUTeHEWbovEuwMmt331evyhtWWP84RPZZsccPjQVWhnU7CdcUt5rJzCL",
  "key8": "2fpWRC8jowRcpYCYSyd29hi2qvXTBYvxKFCQA4Bfv1Zyu42PWPpDZgaNKZTJrKT38aqWF2dS9pcyTmtEh1nrMCt1",
  "key9": "51v1mnfeU3RBgVCntMoEVVsGofm8GWrf1PCqy27DLaFZ1pPqR5FhdV2C93Lac9csczwoRH3xXcd5bisuNC1Vhi6S",
  "key10": "58DU26v5R3h4SPhiB5WeaCQj61eRQh7bE5aAm2HBDQT7hsVZPdUwdYACvF67BjeUPU2KuQuPXeUsnvQo9dpLpTE",
  "key11": "4PRMhaaiJHMDRHpXdtmHPGw7SZUUsun3csVqyNPok6xB35VQfgRFVpSdNnppBuK4Qj5uNqJgRLjxEcTBJft2RY54",
  "key12": "3iQWvHUEZP17pVyz5KhBq1k6tUAd1GfXT1ycRtnF6qpAeAeKxkSUo8Z2hUbLn39hL4sW5tbhT4ZPp7tb2PGHLAvr",
  "key13": "2r4u37ghbWBjEyvknj2Qjj5DY1EUP5HHb9F2dyTQcwY6gSPuxYPLHgN8ZFTTXZDEDBhpcLACUhWSN7iMQ6B83p9S",
  "key14": "5teCRUCnE2GJz8k9TSSAPkGcGN3SWNmdJdep3u2Da9Dk193fWfRquvfYvF5Jwn1Xytm7WVZewBi1RENw4zqa6fb9",
  "key15": "4Keio62rN7fW73fgSR7aQi6i6uAu4vYXT81dUVPBgd8dHUaT7fa88v2mLCpDDqraHmEfrDECVqfX3o1K9gJUp7bU",
  "key16": "Qj13HH8bq2hTaEyZtSuZq1U8Jn7CvcSiPY65hraWcZpYhmFeq8uvx1KchsjoeYKNjThZsSPdq6ronXD2Ju5YMnr",
  "key17": "2DW8d4z7gVLokN5UN8HhVLHPJJNW4sohpnEAtR8AL9njNC47AHopPtAu3p31iFtHWsb1f9qxRq9gKL41ywcUCFMb",
  "key18": "4QYXfgEfjfr8JKENzZ4b7FdTkvhKgutkeJjnFK5XHtREZ8ium2dqKHoKtezkFDcRUsxyrMULwoMPnJ9CJGbjC2tm",
  "key19": "iz8guxRkTzknZAVYZKQdUcLZ1CWR4sKQcUch64jn6dapY22GUEbNAH9dCsUazT4ZKpREEL9VYUSeUo22Fz14BZm",
  "key20": "2Krf9ansaNjHFh5hucGYWDiFm1Gc528bV6HLNE3k7Tu7zHV1taExoFG83YFZSPU7qRrsFSNXETDikCvxRENRnRer",
  "key21": "4ZUmbYqsPfY4ZCUXUtGqzkbbZmaYAGKcB12c9Yh5Lnqf8MR6yWnVdHkVK9tgSi5u9dEbNa5N3Fcyivh2AFJqrqjH",
  "key22": "2VNvTc3JvKuYjRrHFd4LBhjM15kZVNMyTZXSA3R7yViDFnuihi2a5zso5Jv1cUjqVgmEE3whFFAXKBGkuDeztYjz",
  "key23": "5Wha3pzEfvQUwaTnxLJUtmtfd4YjQ9LNxWotDJRuKySYFKofcHpkqAwfjjNc6kSRKETTEdGPyUFZENXe67xtvPCB",
  "key24": "5ZHfDs8mwJ4BX8DQMq8M1icRo519kzSQGFwGSy3TUChjFGyy1NTgS5WGYqBagcmF8NHo8qt4uuBB3f2o5sDcuYU2",
  "key25": "584kZpHKBoNwm4httRRPcgePC8fLgnZ6AgHLHCqLU39Bgjf8SPsGNM26ZSU9cpMFzB18bogFW1EjEj9YX8BPM2yG",
  "key26": "3dNyEp3iW54w9kiFDfSERbgMfZL5PW11YkTVxVcVdZzEnr8VHrHTMM81QU6wqfr9cYW3xpABCL1zUZESEsGuGDZh",
  "key27": "4GAGSC46KRDuxXVdc7gbjq4mSNYHaEgyBoN5ktATJ9oak6o6EN2bn1k2V1VNRskhV2CvMnj8oPRDkwpyiFkC4Q98",
  "key28": "4vHvf5BwqmfEzRVwxeDHhTbkD9mDQhnstVZTG1StMgLaNQiGHSoSV5Fe9q6xxQHyHP57aR2aTtxkdnnbK6qrjbjw",
  "key29": "66Kdodssufyoxv6kzbBkt2WHpfituArt8qeeQ8g91V3YNiEKfjksB4fz5djsm5M6xwCzzcyvqdnKXMyQ1gkA3E8y",
  "key30": "23gEsBwbeVRV1fGADVQhN3AiQxR1XudzmA3sEEanedp9VXYSgHCBAcda1dSF9a1qEGgyU2DsRhS9jJN4aSuaWiex",
  "key31": "5EnRgxtm4rW6qjSwJugtdqrJVP59J6KKBrPaHrSuxxr6DhqUsXMiY3HXy3BBBNmxunMLEtM3UozbcUqNUjY6bF7M",
  "key32": "3byAzbrYXLwX7pEzWqw2QyJej7HWt2g36i7r57QDzeysXmKVQ6NgAdZjpCRLw1JMB4weveXqCHmGEtotBkSCyL4D",
  "key33": "4dAxa66ZyWhRZKwEaRAYHcVX79YWLZAzehmRGYSdcchJGnHyT3r2KAC3UZrebGFa3ZTsDh4rwPTYdcFysat6NJa6",
  "key34": "5S96F1xg3JJA5fgCp3TwKPgsY2mNcS8aZVvjbDRn8bUcLSZqGQSSMw7sS7gc9fVh5oP4meNqaa7Tv6AGju3Vm1cn",
  "key35": "363Kvx9WBWnmp3sBy8jK6Bk6SpvMKFGqeGrQP4GshGVSJTiyA7srWytUCZMCnpfJF1s9mjzugJo9ZRQj7pxfkC5L",
  "key36": "24AgBFSKp621aLh66erWLSfJ1vpjyW6NLNxUXW3TUgA2Srexd7JCdL8LVMj6BmH9HkCN3RhWkMkRWLSzqwDPt3d7",
  "key37": "4kj8YYPzj12jQ2v6x7N9Ls47apn6mUfNasmx9HPNDUhBodMSDJNTYonRBce4iHqwsjqgXzrK1BxLB16A7mJJYxwh",
  "key38": "3ap5W4wPHgyWabfSJzFd7JXuqYyXGHhWxUVeP91wJ2u22ostnDdmNoVD6482n6Z6KPihourqK48vU8i6D6DHswVZ",
  "key39": "SLomVJoumECroPfDFYXJ67H3qXF13M4GHx1ZT2Q39YmzvDhXCcakwgzsM9iLEQzDNaMQEab3TcRwowDSes3axBX",
  "key40": "5T7LqQT7pRMArASGfNmmRUBDkR35BZstKsghoPq84jGuoyLBZTTMSJQ3xBtbJa7Gw6nC7uXQP6A2qfGVEQsM81ea",
  "key41": "5SVyBXBwQSqVtYDWUSQLhSoi8oyDqgZo319wDDpYLni7bg8SRJBtfbfoYj8zabxi7VgLaMvmpXDKWGgSoxHSgeS2",
  "key42": "4XinpGzPrAUsXTjxrMSsRK4S3FdJqNQj2RNmhauxEogT9BWkr9iaEz4cCdzfunMrAkqeuaF5DRDiNFwE652dUnpN",
  "key43": "3BzZBwz5H9azpwTyPQvpoqdhPNaYEwcXAoXpkMKu5dPj23GLi9z8DR8fW3AJsGRnmizEkZ7Std1431ijKXyd2Afg",
  "key44": "4jCcup4JoRhHaWUvq9xQjgogDvaTLfRaJ5n5YmEZd9EX4vUbNQzrFJQUoshYr9Tbd2JEtN9avpGW8Qy3Qwfp7GTT",
  "key45": "2V2Pvs3dFAW9fMffhcvUajDLYC2ze1shRxWRKRTNzMLXwrskiJzySt5of27V1yKG54rTzYYshbSiEgZaJYmxwgah",
  "key46": "R2QUWcnCgfJtEPiSQRk9yE8KkizsoBym4QyYomRGqpDFfs6sk9k4FC5cBCx4KnnVMmCks1yJGePbTC6imkzUfd5"
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
