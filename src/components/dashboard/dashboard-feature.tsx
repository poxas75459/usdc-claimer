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
    "57R2upkrc72pFXMgHMJYqSEsQ1pfhQNMnUSYCsEeQuz7Q6y3gbYKQvVjrzwz18cwP5kU2LqdLVGmoToRjBXdnh8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6bna39ZVy5DziXo5uCk1jdid4iEfkbbXdp6m9MezHbi9JPPJujwUf61vB4xeakRG4yTzy3SKW2HNGciW6KzNDD",
  "key1": "4QZ2HnK6ARinGjPUn2qybXZNt88FbUJEWQvSg8KfFHwPXYRoTCNYG4wb9dJBUAKqpJCteB3puEgMCDGsKyE8LpK5",
  "key2": "3CxwzLpA9onVbaAu4XCce3X9XLbvFmZ2ZL5WMAcu2krPCgVwRCgmBNV5XRe8aZUWMFEe48KGbfY9gh8XGzrnxaWQ",
  "key3": "2xD95pAf5igoAgj3Qng773qZwXQgBaX7y7gRQo6YoFrknEe1tovm4qsR87RHsTSPapJYxXMWcdTg7QuibpqXyEtp",
  "key4": "5KwECJqxHrdhX1aBn385MBNGy5vVqZrVE9zSALmwE21c6azxd6DC8yRjimjRBD5fkUC1jk9sr9c8nvwgMxHcoLxE",
  "key5": "38DtnRnjQWDuozTgxEnku4d4fgoWEoYCfLSoSJMCeLEgJXo414sowjr8QijSwaYLCBwn53UsNYnrRgfgrsepAnou",
  "key6": "2kJr3dymAjVHo85Cwh9AgMuqhjHLasXj54gyXcFTA3a8zFzv8dcH4XxE7JSrsGGVmqLN9ZgDyj3WKbmrXrJ7k3CX",
  "key7": "42dZsVDupzekXFcGeRbhKXDmqZEiAhqMiRWFAoveEoqdQ6phMSGgPxxRWBZpja1G1aK9XTaFcwovSX5nz7XVXFYe",
  "key8": "5gKp7pukkSKnDL2GEvPAAXYr7jda34ns447pZzvRpZU547Kp5tSCAzWE98BdRBmuA6AAh4PQ3iAuhLwgkJBaaWqP",
  "key9": "47hbpDWtCQnnJkyxY2eX4MrfrE7kt4CE1uU9UkyAnjZAfryu74NR43J3DHHUxBUu7kEtAehPqzGcAFFwVs4zsqMu",
  "key10": "3hwfst9MHoHcHMMRj3VwTHXTPmGbRdZQtymMwdcrQSx54vss4rXYSbQynHCZryTZhjKu9WzmZ6wsNb7fGBFUU5M7",
  "key11": "YcvpAMF2kCUEnqvXnRPpXLGW34K8iYXCMCpbepKi2cotpnH2w9zvSjun2wuz5ktdiCJEHTtxKqJcgRrvUtL72WG",
  "key12": "NsP8H2m6xMiUjNqnNfo6NeQZFpkTyRy3j2t1pumnzqj8NBkTF9fUnegwmPQ54H7LcCTfUw7Wep2jq1UUSqd9jTi",
  "key13": "67PtGioD3nvHcqyQdisVcTySiGoKs4Kzxvbz2dfdjmziHiE3JhsgmU4VzGpoN3rwSn9oXjBURbgsPL5LJ73bqkHU",
  "key14": "3UPGHYuk5KAPponX58NRkejSBa9TcTHS5e5vwDoztWkvTde37zvdEMR2yqY3AyNfPQGwHhX2Lw2SoBBuJDTMnzDZ",
  "key15": "2s86mzrYvq2JiiuqSsQd7AemXPA2DLrd97MH75DsYoPZDXK8P8ebSTtZRf8ACCy9RybpiR59EY1KpYH6jD5dnb9k",
  "key16": "opHhYSkxAzBpTNoPqtDzZX8NCv3HCuB8nB7MvoJpEDwkj62Deeempshn9F4Rt7HsWbNJ6y1rDS2fXWdrJ9tnVMw",
  "key17": "3iP5HC1RmvsEWiPF9Tx2c75NXTxkAvqS6qDMmat1amNAkEFuRYfi8ug5TfosshiRNQ1fM58wEiHCvUhPzRmKT4Vt",
  "key18": "5GjoAqzPL9bDwZnhZDAq741tzRXY6axUY2XNMxbmnaEPQxXsGkafNu4FpiFfZ7kveWtNRHzVo6dqzKKBjbayUZr5",
  "key19": "2Wth1eQ2tbfexrbBLQYNeQNBM13khpih25a1p3trQGWzPL8QtvTnS4idqu73dcST7mM5nMRSGaRWABuaeF2NVERk",
  "key20": "3LTK3BvzLkno2Rwstt6fagSPt9dxmSaFGkUwhgyaRMaCd1GUsQte9P95KJzwN8mfPsp3d7iM8XQ8kMUNAFyFmdWv",
  "key21": "3cwc4q42nmvER3STvx4oNJfw4rDrHsuKnWD1WG7tFbhDYMe7ckMGbNVMs6p5t8LA2KYAjBVJ96DEwjvo6CV5ZwVV",
  "key22": "1Drpt5EQ2eZPW82ayWZvtRZbbUT3xYSa7U72GJGBrN41zTCemQL7rVnqwQ9jBqPkkzvbYB9CvaQDLPG9NBk1qbr",
  "key23": "J2FY5RPQB5vVTYwfZWLZZcSf9G9YZ5zsY4K3hVTsHXRckTrm2TrRUgCTYRhnoGrsVmPwxBx1Yo9WcgdGy8LMbtQ",
  "key24": "4GzzyFKHD2V8KaVVG37FP6XnJNo6tXvrd5tKEkuX8XRffxU2sx9R2nAgQG21BCThYxdXhFNxhkcw1x2vFRsyK27U",
  "key25": "4iVsJK5KzfnznjCL85WR651PQoMeJSKTSN1hvfqJCKDN5Yk9VxLzYyfaCtK1XMdUooncYFBNnmAACRqJvkWMwEvf",
  "key26": "kEQfYU9j9DB2FzUfBp4yQYEMiEWocN9pDk2whi27vnhe6DuW2gfdrQtvHnQ4p5o4bdZBv8xCkdfSHeRHE9TWsRR",
  "key27": "3FD7jVQBWJGifcSdREj9c5cuzwP91KywRrS1YKXcujnJrRC6ERinMd5iZBYeow6ZAjB3xkp1j7CJwzUb5it1hsZc",
  "key28": "2GWaVazA9yDF7oKDckSN5N7y6tkBJYhFVUX39dmA2ajY6h6xeC97kHNFfJVQsE8RR6B61NTVQfFYQCkU3DUP5JZV",
  "key29": "5Ztc5TiF2NpvC4YsQbNjaHXn4UNxCo5bMa6GAxpWaiqKnptTzvtj4UMdpAUP5o1W5SYf8L7FEUebZHDFqKVFGvd9",
  "key30": "3LP152dUdsLZ5G2kN6GLqU9mJf26H6hQcBHJtgndWrNfvtkQCqXeRmJS9xy12Xi6wHdVeZQ2FvjJCm4cqpHqFzVb",
  "key31": "5B2vhzuLzPzVPbeXGwet4tdkvZK41MURcphpBQjfTRWa6hd1dU6m8LHELaEH9BQF2Zyn5VdKDKvb4dzZSvfQJ8dL",
  "key32": "SkVjDDivVDma5NYFxemoNfgAu8mfVdNGwBZPupRGZ7WGZ5naiz8AVbTmmbAzehtD4eZWyCzM9VKhHS4eMqzbZLh",
  "key33": "4bTgK79C82zh3gqNZRuWttVNwHm89VarzjD5ovLrtieQdwiodpj3nAdcrk6YqaGNhxB8ErUtL3fQm1X2ZepMatXD",
  "key34": "2aMjezbgtfd6vrNKQWaQe36aMKp2JjGeUgCKeZX2nrAAoNY7V4UwSVHDzbRUoULTobynyUbvwAt2t6pM4SLJQr1V",
  "key35": "3jwb9CM8MkzaGh9ajTDohzexvrDdXbPTT7BjR9ojBQRpz6iufTVf3ye5qYQZzBCdpHQX7tptzmNp8F2DfndgBhTr",
  "key36": "3Me39As8Ft34P6Pw864swYdTnskw7goAjW1XkgHMwziyCR3HKCBarSrwx6L19pczPyfXZMEBMVzMPphkrJDfBkXE",
  "key37": "5hbojGnoQ5AqoSPQ5rfgPnWr7LTP8D5q7UguaXgwq5dRwLXozWfPTJNA47xnJy3DMmwiadvi6rU2rMmDy7rAG7s5",
  "key38": "5v94DnNFyhvADj1cREfBxAsJW76ssN9jbiYRLXiFxypGgzs5P4jQzFutYrFY5jekFD4WWnKx2fnad8CM7mJ4cBbY",
  "key39": "5VvVNaNzEUwEZaCP7DYAftkmDfzCDTqyqLhm1Z35SMYtcyqHszDqZCew145cCbCHkJx9Z968ztjDT1hWxDyPQqrQ",
  "key40": "2FLPWtN7tLkUfjaHvCJtTqRuTiPrbLVJ6rWmBhMASeTUbPdzMoxbukRiWnPZS6iGWgQDpw3984Wz1N9kqhRkG9Bk",
  "key41": "5CPz2dytkMPD1er6h8nKTavtLov46AGgHeiiojseP4a1pJNpJJpNUmeJkcgevKFgT7DFmzFJNsM5xdJxQBrGRA4S",
  "key42": "zxR1nrHFKs71j99UWpqttCkmNYiTnxdjRXgy9TWn7L3rBT63MZ5QtDfqnypAZ8W94VDEZ3e1vdhL1Rk88FeXj5G",
  "key43": "3NEAQx3Zo7uHSTpvo1YtYN3uxDekaoaKoJA4bhczfYX62924LEm3zTtdQ8ZaW3yr8dg3Bt7ZNQnQamUSxHk2uXVM"
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
