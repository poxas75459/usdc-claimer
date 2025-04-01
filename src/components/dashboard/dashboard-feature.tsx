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
    "3LQ2XZZWsNULMtUgkqtUcURFKXLbLRSdJrxML6unzgHo2m1ijbbN98VU6rGPZGBgURLJdy6ro5hX7tUqLuPYyXHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8pVkdreQxLWUk3vXNLPBSaxnMZqNBUm9LuGHLUwSLPyfKkzVN58cizXjMyLGec13ZFGAPnrYSScrqynwov3MSpE",
  "key1": "5La1XAefxxNyoXJwoNPniKWb9gVaiwvsgBEAGTRo6aniiWCssLbBfNMa8R22ru73sE3tZxgM2tz2WoQAZwuVfzSy",
  "key2": "5Wr65XCsC5SpBazPWchpoiUybCP7EVjxtetEEkZzoQdq1C1QWJox9dZRtN9AwbqqWcApCnLsrNQR6sExnxxUPHYT",
  "key3": "63tyhCfPj43dMTb6V5iWVUJqmPDtaJ1PLX7Fr9MYZDGvoZbbSQS5Q66Hi2J6Zyf4WaEi8mu4Q7z6ENgG9E8KAc14",
  "key4": "rK2uGiyNmW8cVfNyvD3z7gV8pMzosbhb5YPmYR5odrb16S19UiHtcR1Ug4LQBZH9A1LfjZpyjLK96rtpVhhLUHj",
  "key5": "2KvjTuNVA5zSKHS6QqU7tDeCJWX7n7d481mJpJwpmA8e93zZhQQiew2bJ2ZibRTvDs2K8yAFQcEk2zTWCeZ5956h",
  "key6": "2X7DaQLqtapHva7PYdvjRQVkAoqXES7MmBnQa8CHyQCZWajyVZ266wSCddQJxsig3yKo5c96wwCeAyCNomAY2b61",
  "key7": "2kFoVWEtqWxqZjEvGjBuQShd2qRvEdzSy5uaa3jds5vGU1m79w9ukhuv7BkHbG3wGfthekPM2RctfUKdKNzdtwiy",
  "key8": "3AvCpPBptwaDumWgMZxZ7aw4TWdNeiiZkC8LFsNLXCg4VizwAzGnKJNiZdS1ag9fGL97dZSmif4afes6zJQ3uBuU",
  "key9": "2U213iWRtwN4hfcognLaHMSgbqcwdruhrQUVNeKaoCUcnjmJkVNoyaM5YSPLF9bnvpxxqNwbFFRkhUf67vjsNoq7",
  "key10": "2oY7qrwyLrVBY8YWhxQBgMMC6ip3Gv2U6qB965px6ncgtPi1KhQQEoCJ8w6Mjh94MBaboEfFyvcER4aJVh9RkNCd",
  "key11": "2ENA4hZsHrNxfPunWE1eGKfHQVi9eZFDxfE8z3YSSqxpFBkUkmSNno8vfuzpHTczPmaRkGFxUbuYRfSnGoeq3Vev",
  "key12": "58a5K57EkiXkE9cgvfoSSXcyyjzuTYNpNSWQYb4guCFPfHQpdpoJWcbw4urye9tK1cuM2ywaSZ4PKXVvxUWkJCLN",
  "key13": "2V6pnLmMNqSGvYkytMxCK6F3cwfP93SCChEER9hUFCVDu6LYCKemSyFxohNiCRj86xaJFcXWiYPdNQTjpq6MjbjZ",
  "key14": "5QL2AGqVu2E7JSnVH2ZHgFPKABYnAcyPPP5i7WqSDaQAYh6CktiTKD1aZ8uxmEZQjtkU5wKanCMJVx59wTGcw3qi",
  "key15": "276w93iwveeJgqQorKC91C9aJCyLcmBiCkkBvqNLtqcB9ZXSJshDbuNiR6vfJZPRK2NVQSLsqAw34GWGjWsjjond",
  "key16": "ptsxWf3qpC5zbs3MfRW553h35jLwdAFteJvCaKphFEc1pppsYpwDqmtHMfw6Me6LDF89y5iQ5sThA2PZo9ZGjjj",
  "key17": "kvmbVwQhD3jj8cWpwx2fXRngsLeGaS8xVRQMwM3UoYr22zyU1nUPreGA5Yn3tmVnxKMjiub4Zun6BPnyhxfH2ZD",
  "key18": "2ogdTodbFz4qgza2nenKm3bcjL4HfqVYfSDswyjQN7iq46quEsTjqDvD32dVK8ipmENeuvC9KDZsUZDqJtQqFB12",
  "key19": "3MkFCt8cBQ449wFWPjxFKGqGdgGw4Ukx5C2471vBboAmtuEeAQtYKxoT7chUHs7RdiGjrAgq4k1Cxk6h9Hq19aUi",
  "key20": "2j7vpxcc8Tv33uT1Fr5VuaQJ1D8XF5D2mmKbqrMJQdNZDh5GXLfWci9cuj5dTfeDLiDhQQJ1CuAiks8m3VNpnRsi",
  "key21": "61CbHLYc6bygRDwZNrBG6KrZq2uDw27SQMc68J929CshTtZipHFCGejddGswoBE65BBbGWX25VEBVkFsaAGJ3Koz",
  "key22": "BfvqZhibWvHn1zfbAqscC7vrVVB7rJprEtLTiCMnfjaMNaiVz1yZgxw7miWMAuf8BR2qNNpgoewsgMNydHtXjiY",
  "key23": "3GbYSSej4vrpZwwwDw26orRRZ5XRQhTPPMrCWKc6VSKx5UxPzNjVdWgNctaCiQpRF1epXv8Z9LQ2RuTpi4MkgKMZ",
  "key24": "kGVJogcE1Sfmwe7ShQRAPSghf91B6ezAnyQLWXadgf5pkpWZeBT6iPVtEn6v8dUz5pdZuv8WUvUUzsMqDxqgrSs",
  "key25": "3X1CUd5eHqGJkj8ffnAWWmz2rpnhmUhNw6RLPkVySmS5rWHYhgBtLU1TwrHWiRyBy4gZgk5fer5745VUe4zo4yLT",
  "key26": "2KbibTKEc8vGuxju8jpzUwsd2mmQwtG6n1gc1UYzkNoStb9cRuGiKVx75hZNd3Hh2o3oUg1NT1CpAn3iHsMZNJLq",
  "key27": "3kVXpJfgzYTzc4kgPbwC5ZQBBhAoabvCC8WMCi85eCfDP31eWNvsxWyxheJ3E9v7tWzzqcFjPehNQHtekv6fxYHt",
  "key28": "4nGKdVS6Bwe3vDwvtfDdGFowF4T7EE9L5QCpCPyC4Mg31PPN7kdbddQGvw99rNuwq5JUJBr8sUyRvq15pqHoJzLU",
  "key29": "3SWURwJ4G1fhPqzo8XvWTK1DTvxNEaw9z4a4sup5v42i1QQnXiJuBEM9W2VfamWNYoLb5pc9qwXRKhqZXUpWdjUe",
  "key30": "4AgcMpWVagePRAmTK7XR9Gz6bZP7QZxZRzBToT5GorjgJnpTpmRtSxg2odwTvj6dMjtiHwCjL4MoF5zD2BjiHrNY",
  "key31": "3iCzdzeEZovY11CP1Y5gQrf74Vhz68ViCUmVVpDC1Bd1QZq11cADkBiZga2i4oDsLuYcDHgeRsB91ZMvhaSkdFDT",
  "key32": "CnC8Y1yLVYUusWqPKytNyH9ZTRvcvwB164RZbfqJrrzvy8CUNXnPGLwraYZpTch4qBZixasGppxpkfBYbzq6xVT",
  "key33": "56md2W9pgG8ZNp1yBVk9QyuNDiSq2CM17WwzEPeUpNzb5YExFcDMQiskQyjskKSeVWEJNPfYWp7dapN4xaeNk1aH",
  "key34": "51PPJPbgcxWSzPojFERzPyCu8JzkYKhULsD7ww8fpg5jozWBpAfBRSavGNcs69CK9uMYfuPFTLeBx2MnybSq2PJn",
  "key35": "5ZX6E81NtDxwU1dr1vz78hpbBBgK7jea44kVrhnxrofHBNKBx8LY95TttsBR16MZzzpY6bjueN6ZjHnaxe4r256n",
  "key36": "3Jyh5cJc2PnAKSvwoMbbXmKWnwXg8QyjGNbgF5aDPko3ktRs2UFi4U39v3bY4hgS8Rz7WEQvS63RKq9hdoeMiaff",
  "key37": "5RwKd4ifFLkEpxYWg2b4oyBwkEsehtydaSrNspmLUgP3qr2GMgG7jxUoGmc9YBez4brLkpkzPSGcZu76sJcz8f9g",
  "key38": "4v2SBJKMB3fRtv1MBjeP417ybXQp8coBwTULqsMxqPtjPMQPGtBoN7Mz15ghdGNjBcif7ktA3vJFDyA7c9m3h9fh",
  "key39": "37Ycmq1WWQ29sXmfF8rw9euRa5nPQ1fSUiXwUiX1cZ2kpL5mioVuprqrvtarR3MdzC6VFPpYdowqFE8we4pm2H7V",
  "key40": "5GJ1KN5gkgpcyrpmLc38KX4BJbzcEUWvPsMWfKrGd1dmEcMWLadMEgeULXSPrbnbfdeofLaFdrLapmKpDAtxh9Fq",
  "key41": "5aDJMke3j4tkf6ugh85jZds6Yoh3hMFnrjcsp2oS5aB5f1Du5ULZUBbjmoVfwm6KMGqju5A9EtaoEzDmZugrbcrh",
  "key42": "2QJfBnEJ6pzqJwcEFqU8cuV7cX5JLej1GN6SaRWnPKb24ws7QKcf8Lnpc6T1eUcKr3o1kjiyEHgLr5BcgsBZnAuV",
  "key43": "599yzNGXEif1AFjEaNhyY4mKUFFHsmekHNF6Fu2ZF39VckgN5LQfNeaYCEvKjiXNEu16sXodTRmMVb1GxA2tK2Ag",
  "key44": "31ZU2rexAz7RZABHSYYiBV45cqhS14f41YaYFompvvr7QhPFNVXwzwJkiWKHr31LhZrrXtxXNTBMx9pCiX23fNBz"
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
