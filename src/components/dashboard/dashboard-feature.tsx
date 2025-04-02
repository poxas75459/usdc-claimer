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
    "5rJi7d6VsVj5KjGeBMtTTT5jU1L6JXAHR23Vxjg8bE3puwRC9g36MKkDD43VC2hhyV5kUNhtRmCWTWxBiXmXrXSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QmtUXMQ6q2znSAEyGY6GS7ur3go5kvyUJVDXTrLYSr3kTh4VjVwva58WxMnYxpBFmuFo2NWLazXkKoKoTvBWnSa",
  "key1": "2PdaZZneJngcvR9bZ1ZMHqAaxM4PwR6z9YJVGvs57zMg1nq5b9hxweG4hT4ZVcy3QXjBVRMMN3yLKqjMwqwvZJYR",
  "key2": "1XgK9J2mBy5hh2qrPg2otwnKwwiXjcSSoRKSw7aSv7WPFqosatb4jkbSuzZLDtbnZJryAxnoJu9V8hKoAiymwKZ",
  "key3": "4wibwmp8E3NYNHErFVRDkhVzZAd5Ym4LWUqcwNNwFyczG9cySQ4dHsaPQgNwACoJ6Zfz48ZMnoK2EdHvZzepTsHw",
  "key4": "5RBAQQWbyQFPV5AFXMrNYKXkbz3jRN4CoBpmWe84qqkig3ApmMQE9ZX9SboUuF1ZXZySxCYzLRZDdVLkR7X7Cbgw",
  "key5": "2FErCEdMnqKDFdtacM2Edj8Eu9DJxwEyi69qj9kJcgzRx5s45ddLQU1Vcp8ip3z5fLXv5wMHW4q2uZLz7gqX3BtR",
  "key6": "4hcg7qEBx9tPU8M2tW6tuGEt3YxRaGw2tSSYEoBUqAkW9TKzyEnWXHNoEXn3PQGHN7dKkuL21CRVqZjJwjXSu48K",
  "key7": "22S9PPzh16axEs13PfgEEp8X1cpxKz66FFx9gFoQsem9qLst2bS6qC67Ja3whFUTaCq5sZ85xGrdScArMBisWw9f",
  "key8": "5gwj6E1peCbMPJWtDCJsKb9VoXzo331kWctHUHb4R7jeKf3od3jdf5wTXP2D5mSjTWLLbeRTkHj3qEtgD789VP7h",
  "key9": "5WoLY8vPpGom9kVJSQUBQAQuCo4wdWKuGrmtmoEZEwggvj9LTtK1X6EKeKseNLBEMUZD7mTmkZV7u5gFbuZ8xMWy",
  "key10": "53m5rduGavVp2tciPjNx8JSZYHSjsrhKWpGks95ZzAFYif6xSy1Aii1VYv8UW9DpJWE5sxpxQpMLVXkkksAxFvcz",
  "key11": "3c9WxyYKn3S7hweDS93gHmxFGdge25HGGT5mgAoHFP8t92vY4ePDnJX8LWsAssDzrTXT1QNABU9ika4H5aS4SRN2",
  "key12": "eXZ9pxbeW97fTgSnJhJDiFG15WZpXfswLX623EGAVK1BDphXdF4rGMue18m62q7faVFMsWtzU7NXPPwPe48LsfT",
  "key13": "4tSfZkCVmy68Y4AvfTcavwxXmT16nABQsVNvMGNazV3WuU7zVnLNB8CAGTYWnBTuFKkgA14ZFoetU9KDBau5iTgw",
  "key14": "2quhHGh6zt7Jx9tkp4i3haUWtw8Eq8uSWpEy1qv4ffMAnvxsUxMxSSfMkEJ4CkMKGxKvGcoEVNQYfN7FDZXTgHWz",
  "key15": "4eztQneSBqE5bbhctdK9TwB2kDjyQ3Bm8LA8wh5KwUPjSxRSzTkQEz1dyQMYqC3ymAHx4unmDbtb1hckZcdScML",
  "key16": "4pjFV71CmjK4oWGQeSjgdJGk852G3EsL5cfCn31PVQKAyHzesvFwEp32mqhvm7i5Tku8LYgtGgeDe2fs7K6h8aSL",
  "key17": "3eMrwpe1bXztkJiwUwDnTG3uEVenDEj5f1kPcckbZQwrjZdN5gC2NbquP7YF6apBBD2dMGJA2NGBckpzBoip3T7j",
  "key18": "4P28RM4HdjJQgHqU5XH8CB23Eb5fFRkEzFeW2yBf2m4duwRxqc2zf85yJMSWdzF14QyiSr5gT5VDJi8phf1jw5hL",
  "key19": "5ZUkb15mVrGRDPZz6ZjvcbtSyHgnhDV4wpeEtSHfdHKdXY6fD44ovK7S7mR5uSincyczeDZAZ1DA73kDJ7uyLgaJ",
  "key20": "4qiWfPpaG9jmx6yG6ohCshtMg5MHHcK6b9yQc1REayRx8cbcu22MY82FrLbjhsa7DpSmMDTDajr1UAijK8AZuH96",
  "key21": "45sYG6JwqEwELPnriS2hEXzNS8fgMyeDiLfEz4KxCzmgDoQ5xQpZkb9DiaCNSxEHEoEYjYhETSVeW1rLih9s7Wpx",
  "key22": "58btztkaQcHyWAx2ecta9PTxYVDvmBV5PL9SkmzfFAmwkUCoNQGnenxBmK6YhPQEjAeEPmna2gWkD7WH1j7CbbtG",
  "key23": "gukmPgVh4kUhcKt3JBhcFP9r7hk5BkAPDV1z1pvuoaMQwuXYS6dkvyqhjKJaERNhge1UtUoziWvgW4XzR7Fwd1s",
  "key24": "47K41dN5UbMJJGsoAMcUFjsmcDpJvXaqi9S4Q8sU5Donvdd7qdKKF6B57E9Mfjc8PRSG4ktCXD1foQqFyEAbkvtc",
  "key25": "2jMtmcRMeCJnDDc9G72k1T3Yti3ip6kH3nqNZ8wTx8z2rFVy2QBwR3oDTZCUL1gEZ26D7PcVjSzGELuMEAJXSCHk",
  "key26": "3Jd8df4sEuqKeNfAnsFantKg9L92UKuZFbpqC4DaopZxkVSoR2Vgm4vKnJPGB2xHjhXfmx71pjLKJ9hYoi4tqchb",
  "key27": "5ecktttqEak3T5aGDKJ8z5oH8ecwswsQGzRkPVDWbHiF7mBRAHNsx5cW3Xu4QMvhKd4V66Wc5meDYV5Uz39KJ8m9",
  "key28": "5RNV9xby1dGFNBAU9wDjq9x9MNuGX85ZP9BkyWHUi45PUYFfjg83FzT5E48zishYZuLSQ9ok2APnugipUfXhzpy2",
  "key29": "omhbGusvvBwM1kDbyvvgZChzbeRk17h7LWorMpbXgFXGahhBKQ6CaUnh5UaqJabhM96PQNhriPUTxVK7AKdsL7t",
  "key30": "3TThTKSxofh2giS6ucuMBX8Czq7M7NHTDgHprQhHnPdR7PYAfWm3rJestqW28cfydV8K4WSNCJiVaKps8jaCH1kq",
  "key31": "2rkpbm9fRX52zxfGjzYgrxnbBSUYy2641k8f8n9ySigGzKrQyzPS4eQpYHXxnLD8Jg34eZx1p3miyXwanGA4aQ1x",
  "key32": "4DkEpFvzT49d5B8zzoVxk7koBoUBsRnDR2yxVhzNX2C7dEHuXLznHtgVCxXBc7M9K77Ctz9Spd32gxHMeZKSdeR",
  "key33": "66wjLysxhypF6Se8zLYVaBVfTC6mKjmscpFxv7q2bpEDERmDZ5js7bG1WbwppQbNuki4Atw6FYzL3nrh4pT2wUca",
  "key34": "3AeDD8VwhDvQroNnu2yuCpmkgUuauz69DdwuCB4Rp7Rbctupc119rekxSrPvh1UoLcWCbBpFNqPXtgKCKR3Dtxd",
  "key35": "63VAkXSzMwEbLXs2kzyECddbyEaRdqrcPV653MAAn87KT5LuN8AxNfdQrBNLfqgJUBboMiM6rCxmQEK4nA57aJGw",
  "key36": "3ng7Ab2PoL8N6hi5WzNmGSHmT5jth2dLrdoJ11sCSAUTuxBcxYKCbLdpniNRzzHTCCCtYwutHuXXCokcVAyHe95m",
  "key37": "wubjrXJNRAeAXszPpzVxtv24y7DiGUaXLm6Y8mP33j16CZvfa5a6Py7MWGHx6LeqJEAeJg7DTGkFJRgdgQwnVYH",
  "key38": "5KzLe89BLDyQ6STmBiMuuLUzqfnKi6q2oqW8fvxWNtgMi8dw6wsXHk2xdPEKw46ZyQuCKUZZRhqf6sjCQDxZSoHN",
  "key39": "3aDLzdiovUmpKzyZxt2cT6bQBRAAHKDjJaTYJ6aDcNFhm1xVKc49uEVXSfU4Wqq38awiQidnkTeE54oJStmkRsMq",
  "key40": "5zE1AKRBkge4VGD94RR5rFG3SP9EHTW8xscEU1ueaMM65za5TBtNfqPDu5fMFimf6QyYhw4U1DyDyettMmDYUme4",
  "key41": "4oiJdAZhdRG5K5mdBcDD2rhybDZekpYmV3LvGiK3yJiPASUoAPJEbmLpvmrKQX4GMTGQeBg7iGgJPF82WnXQGMsQ",
  "key42": "5W4jDMXDRKL22R62uyTm8GgRDRryWM7EMtC9pPVeiRqqkGa56YasVRwX7GBhHx4FcC3vji1TbomRom2NCj7P7i46",
  "key43": "3phpKm39AYxpuQqnNcZUzqR9SPf7AgW1uB6Y14zdd5hFH4hpmW9KwxuQLzxUtzVKMZ2DTKf8jUUwLfSfcpTmUU4K"
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
