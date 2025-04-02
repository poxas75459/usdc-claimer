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
    "3db1aQvXUbv5xQSjYNEUnky7y2xoMQhDQaDsxymuxh74mjLgFmmvs5gmUzoJizrtBm3di5rfGAEMxsJ8e9AReKZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lgy5cW22KNbb3EApRFH2W56DNBjR7c8XdfHYfbkEsdmr63WJ6dY9yZmxp6uy9eSrgn2FzpdgDmoKH3MafRStw4L",
  "key1": "frEfszcm8weNvK3ALgvGRCucWfMb84mr9YWku1tgRmidMYMBpFLCQCqSqonsmcjhhvPSyqtHJBzd7S4ugiHnWvF",
  "key2": "FXddVaPdxqsVsq7czRhJ4apFKiYSceWTeEPDhy8d3KgSpGCHAKq8NbuHV2ZnKMYDV6hvbHWhV2H13V12icGi6pE",
  "key3": "35nF67VCo5ZzjEociNSBTrLtJ3HmSrZMtRgNLyE3GMsC9GsJkJz5SctC6yeSJduEM1vBqr1dKHccdZLrVvQkrNVY",
  "key4": "3Z65CHxWJG4kY1ZsCJdGHRRXacHMw3FiK8niSKtxXNbHksS2i8jUUuRAivAGc8X6xqiwAhQZQ8jSL5rQjaUfdM2H",
  "key5": "4epEJkKBtUXvEaT9ZqAEe3FDy1C2brkhKC1HaBjonCgswndVYbkCDpgEfxa3e6yaenQr4AzERhoTMFcQsJVqMDmz",
  "key6": "2jhcd6qV7fLzhMyJAHbCte9BXYSiPqtfHCQHuYzBAUpkUMPm5sfXcW8uCcQwet2P2tkK8XsnBfvTgGq2GSH9iwrx",
  "key7": "v42atc8uwqcQi3K9VRzcvX94LkMVEUpUoPtPXzYE6SJJ73Yt4PDgZ5bNUHXrp3fmfVXJPmUv96mUSf6U4G6gcaS",
  "key8": "59RQSmG6RcCqAPRkEjH3qnDgLnxh3pfZmnJWmXhYyYPPqrTMg1QydmcvyHpnuwsBnATNESoN71SXYPAmShPeas43",
  "key9": "5zU7fonRXuaWAU6HqExtwREHmcmrkpnarMavT8iiCjCigYTpcsgYyE3cz7RXZkprCwo6sYgT7pDJsyBLQFiq2brd",
  "key10": "5GvDAVb5iyEX8vjnSC1zXsgg25sPJyraWwfBuFyemuV5pUHvJHMf2ALXJH1CHA3BC5XeaJFZ2Q46JrFURJZwZsGW",
  "key11": "61tfFbBeGVA5uPu31BrPh8W2T9oirBv8JVrAZbFEXo5zz8KH6TM7ao5hDmxoiZQSG3vj9VoqdjxWBpf87RFYZ55D",
  "key12": "39bVNQU6HDN74h4bvPrj2iy4QYxqEx3fRA1xgHZiF3nvNGTEQdcvZSN33pDRjru6EZ4rBUAPHxNgMsh6zrCiWpjs",
  "key13": "4SYxW1fm4CWPi8BFMv1uFyWTUvGaztGzq3dfcaLXdRatAdq2RcrGQNHU1kv1Z4vp5KkgCV3umgTNh2cP1X7AzGBo",
  "key14": "3qQWxvqQxuH6hjowYegiqGpiiwoSk3CQn6n4UFGnWKqcba1rPXmhS1iyLn2wP6tBUdqGJnyLAcoeq1UVhAWJsoZ5",
  "key15": "2nps2av5WQhTtc16UtFELAbQcMjG42r6qVcZn3X3iVQ6QPhnSj5LFK1CPrYXBVAwUC3jTX3abruRDR2LG35v4hJy",
  "key16": "3yCAakwCVUzEDBiyi1pWWZLaC8pLZF8axMqAvmnfTwS3Qk2YanY5uZKfYs25prGfx23ir7cHShLihfQJzD9ok8wE",
  "key17": "5X2yySGnGHcGRtU4tPtJV9njuA7ubh3EcGpE5dCJEhznnURkcbZ9JtX5shM5hAGEbjNP59WqjrWmH2d8mQu2PsNX",
  "key18": "UZx1bpk4F8dQZoA7d5dKQu74esaLqZd2oXqY6zC87YRU1RwLgvmv8obhZFbAFDVHDvFS42oDSwyRoRemNvruzkK",
  "key19": "4kUifdRmgUdAiEzBjgvoUpx78prJny1Bv4auaXQgmLjnS54vFZLfegkWxUPz4XUWcVrZfL7SJdsuYBSfiaYntY9o",
  "key20": "4wtFN8J7mDa1B6WLLRF2b1xdmUcXDjHBGBhzMNH77Z4rv8Yx9JkpybZC7pZyyJJYNkBP3WdpfGc1Pw9UP8ftoNX6",
  "key21": "R2k3gL4ynNCSyPPB6gdcK4q8F5nvhhmtUEKe7VgdpH8oTFoMDvqQWqPq7h1qiVWiMWXX8iuqaDsM5PgB1nRhAib",
  "key22": "58Gj6SLGd1aqiPF3BNF2KnPqAHh3ciVcR9V4WcQNDdZkEk3SBqpuvtnCwxLYz4FgFUFXHXSqyJVFGcDGoxgbXAi1",
  "key23": "3Egzd5Ynk8XTGCTYP73JxVnDQJBmjPgYsmNTm6wFAYpQ2Sb9B2FfVDchEhfJ7F2CUp6PepgMfUSx973XVRcDYEiw",
  "key24": "c3SV94LhuC55uFmUaEmsD6wzPhf3S6u3LXXdEeicTV7KQfbWxoQtXPgwqVwsH38sRtVUcpgtEu7ND3GQw3Zq9Pr",
  "key25": "2r9e6UkdR4JSKB9bfHFkfzrH8mAHbA3wFoxz3XDMkBmD8Qi9qrmFHcqpsUyYmssaqkHhAvDDPfQWe4d33yDyrasJ",
  "key26": "2Z8GsRmnNW42nzKe5ZX6jVtwtN4iKiGGDbwsuEKc3YcGdqJx255U8ozU6pwzM6b3RPH9nE8b1j2JRisgx2zawdnC",
  "key27": "qLkQ3cAeaLnviMgv5q1SbGa82Q3tgDEaX4NUo8au6LurySxVuuzeP2oCcRB6CtmBgLHA5FYJ5isepmmTaJT9M53",
  "key28": "2AxdZMDst8YEfbFXtiwNnxsjR5q1wLKfF3seFAE8hZBNtX5oCRigMzuRBJEhokXQS7WiSxDaZCKQsRSFuF8igkZo",
  "key29": "3hWpnBPx5NK3yX3AX8ManUuMjGQLgjkLcc4wj8myBgsbdFqH66phd1RooBZqTy63neXY11tZb8fLHHV1xJHXbSye",
  "key30": "HddA6pyafkoxk2QkT9YHFaKkqT2EqdVE61SUrg7Ri2EHA6EvthSxVDWPRcu3RSa2y8wB8S4hTSETMkq4cN5qbVd",
  "key31": "5SD5z2StR95rMejdmkLnST7Euqgjh4rcmJaJ49GXZrL6Lcb7TJhRFP25RX8KDv96PiCVnA87MF5jnqeN6MM9nc3E",
  "key32": "5hkUvzJ6vVdUR4kpjRm5fiQzmK3jr4CVo5NSeWCeF6Yc7s5ZjZ97GYYzh1wN8HLtgK1pEcXzaGLfRS8ZHt5QCbm2",
  "key33": "3g3yeRifTCuzy8AJpXjHrCPgsXkMHk5JQkr3ZyDrJzCWN9d811tcaUtR1To9EK9HwGSuYzKZ78UXtK4rmxvozz2W",
  "key34": "47LZ9QuSQ5orGcsJtPxiRrXu68xJVL3y4rTnNn7qvs2RD9E32PVwbChJEkZmYBw2Cychou5dBU7XNeLDpqafghVZ",
  "key35": "gC2jaxH2WGRGkSYws7LpPnMAN5twexD8kgo7Z2T77DZ4PwgSfmuYUCqZgaWepWSLYmojuh7r9jcbhXeBUvK6xNn",
  "key36": "LKBkT8FScYkyNgNuDMzYzersFPDD8h7DN6UFy3LBGDiH6CGkrxEdqKVzY6yXbh2h5ceZn5gPYjQcp3UACDD2Biu",
  "key37": "3DMuy7AMCCNorQvtp2opmZGPerWosotg8e1hPevrpzoBvzw5PXLi4uZHnD114MseehwLzGij56uJW1D3eukPAx94",
  "key38": "5yj7NeuWggnQEQXD9XSKTQRwvMQKpYEfFZf2HdWWsf7xfiBWYxdpQSGzdiviFgPx6GQwnAbqBQYS5nXt5JAzc9dE",
  "key39": "4gTrM5Ekh1YQELGr6LPkiATb3XPjW453pTcTLYcfE4WmUuryneGsp625mHb5ufdYU2MVRw8zAdP5ApsFdNbFxL8z",
  "key40": "66bTke3c72ZjW5hKhKoLVBem27EsLAwkKbjnPRm9Fjmb6gr3FGH3rUKoSCyccZbw9ak7YJhJGtK1BbhajjL1dZaV",
  "key41": "5dgumeZR7kSZ4GZtsvaduju3bLzHufC6PTJuETjKFKrsa46A78qmExGtdUgcksrNRL8YsCB7xfVmAuPAcynfo97x",
  "key42": "3eFpzyA1JKsijiHvbsENoH6jJh8ytqmkQEDKTYgr6fmXZAoC2ehADd9XASY1kL9bCi7ptVq93xk41Vocnxq8Ho9H",
  "key43": "hpbnrTZqZDube4thZorNeS8AQPV9XCvLhib6w8j29GcE5HqH38aLo5cPa53pMH5AXm1Msb4yxPd1jPtuwTJKhsH"
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
