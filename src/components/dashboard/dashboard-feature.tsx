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
    "43eWCphqpbBaRAZ81rBLMkJbLGRJaddAPWoL4d1p3kqw34aXAzhbhoHRgxqaBexaoDtuACy8H3iAYVqBwPWWNPLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DRTSzyJpUtToQieGNtnMCzAQi6Sja9ssDi4ZMx6ZPQVBvdzKKwKoH9Z3B3nU9MAk4CzWhVtUF9aYWJmnGVLgaKc",
  "key1": "uYf2q7z85K4TrRfkLPuw4jdnUWHRFB8NqLgtHi7axvoHnRU7LvkiusokQCFNrKAs75JFPVhE67Jjpxt391YRCaQ",
  "key2": "56GG8Uv65Cw7L6nRLCjqefGUQs1mbG2ki49fhg3iaFmEV2hhQjCdKPhCeW8sCYV13VcNef5bAdX3tiFtziN6m9Ue",
  "key3": "ZRc1DA7V5pCvHoRFkA5GL8apzQSVXDt9mQL8gWro4udTwb29AfvvFCFwnTHNcRkS2P3DWVoRxYjeX6HdKicg6Q3",
  "key4": "of2xV7qnz9PNKwBKa4uBC9fhGE9bmSVzNVdHckjH1BNkMmMzde9utrmgwk5qczB7j8PP7C4opeNeBhnLJhg1tG4",
  "key5": "3b1dchUDzdRhWwUZEGngS9YsxDiZKyiqBTmX6FRQF91HDq9dhYrLQo3CtCEvS2QtJx5ATrXXcT6F65F4HoZQfLrs",
  "key6": "VyVA9hPTs5S21GWGSkVC5uSyr2AJzvmzhsTmkxJRaEoSEXSYrKxhSqHhpL7HnyDxEXx48NaG3F6HDVAS4vF9cmL",
  "key7": "2oQD492ZyryXvWLmkV4Y4yhmAS2weATZR2LrXMEXBz5S8EyVJGzzoVkjz9ApsPGc3V9E72Y9CeR7K1z2QtHaqfE8",
  "key8": "2AZTKhXnHKiA5hUjh5nzRmGKz6mbz8kp3dGaQtiEP3Rv1cgHBbBi4JiCDWqFvmDhTdDMif36AwPtNtisrxLL7sAQ",
  "key9": "3b2WaHS1ku3CnC9XfekjKeMmaWmp3YjdnUdV1vckcsyKVX1zoBa9yMTQuCFNRKfq3Te7wBu2XRSW9JtuayhG783M",
  "key10": "sLMFCoEc7ibMvsFj8npuEgudHY7ewh6hoLnTCBncfYy3pq2fqoyVEQr5NzNxN9uCzCAna2JCya8k9tmyHtwiRUN",
  "key11": "3GVmqZXUgLfDqKYXBExo2Z9iRV7xDJWj8WDGF8Wf4CAjS7ZQZfcHa4xUWZym3Xtkx5uqzMDorm6Q5H8sSkTFyAeX",
  "key12": "2PUezfiaQNc9GTcZBm8VFx8qFqRg3NahR77eFQb6GBvJ4CDdphtUyLwHn8BoM3S6SzPAXZE4MHEwujeFXKG1YW7t",
  "key13": "3ERMibxpK6Br2y1F3HNwNhnCsoSURBRnpq54BC8EvHVA93QChshFuhhpsafPDJduy8fnYszEA9YaPee8HKxn4xp4",
  "key14": "5MtxnzcX5aD2wipf6QUoqJTmgLuvtxViEo5uomWwNSPnwL6NLyo8cMkm9eLifjXcHXQ6a4vZoecS7LH6JKFfSXXj",
  "key15": "3nxSUHhv6XziFpUJSDX1Ka2ue8yS1hJQeCdex7BTjYz55j2z1FyMWQxFSa1rRNMt3RHW5ocPvF9HyNBdFjMVk7L9",
  "key16": "3E9m3rzQHhF99Ra52oHtJCT33DfMDHBLy2XUa7oYa7rQn2hiD9wHV7HtAg4r8Vp2FBQsVs17XEqnFb7ySMcHMTxR",
  "key17": "2DtVrzhaE2aMxdty54KvwwLNJAhKqZkhPX2YUub2SkgnLvwyUh67FoaK8XqR6ymszGNsCuTDVrbdcip8WwkHaswa",
  "key18": "2Z6ftCsQEoJiQJcqfMNesYx2LqN9Pc72L8hRHYSsBjE5SWxvLRBh6cYqcLS4hwh8rJ3qg4v3dAY5yTbxdSAVFD8k",
  "key19": "25SYAaU7Mnu6fgbVSjFbsWJRpap3rHtDEQjpYU1BouxspMpRpbQxDDXW9hGfNRKEm2iqLW6NccuQdsgSrhUXN6nv",
  "key20": "2VHw2DW5RUeiVjAPbpopj6FtuWP1KN4WdBSmCxDdnEysdLRUifQhbNhRm2JEEs5fioAajhbJtu9ksu7tZm4KeKxT",
  "key21": "5L7sHHUsdM92pxa3wHGkbtnEUNRJ6y5jn7MsXEtt7AqVgW5a1JbTUF1KyYFdLJALBbr7F85B1rUmGFebAsoRZqtX",
  "key22": "3FkKse4oX2VgqK24KFH4NogqLbdRBZUDvAr6WYYqMWcAh6Hs8NwBv1VSSC1FzoKgYsAiPWRPwV1ndonRU35kLqiL",
  "key23": "3cv1TwWYmJxwm1Rqwpu3fpZ6um84VgzFi5QDDcGFxxzdveVqaApYWML8MD7Ya9s5XbcxCW1Mr3uNrpZn3CF3oXtm",
  "key24": "4FWx1PPwwpqWFwDzocBWpW5qLNpUGVvMTCkFMGpqPBKVekyarvPfj51fyTA1hYbKLkYjUYxxycHTu4kxmRupCjC3",
  "key25": "666L2WXMNUkZCJTLGbXe9uttoRT1wbemf4ntTN4nY8CxntNGqrAHct3n6wqLL1UvQrBnL2jsDAxmBf87SMwepA54",
  "key26": "3yhnvWkm2YneDkJhr8b6h8T8dNFZSQ2BYHvBCDhQPEaJ51TznWdv7u1P6CsxG51GneHMrKS7ArfRF7i5dJkToKV3",
  "key27": "5cw5dq1HT1JAabW4P6s7yWFcbnpDj4KP5ECXwEJLTfh16Hsu5E7uj8mkfjRDnyr8Kd3P1DQeuNzEQ2jCmnp5rWGk",
  "key28": "4T5ZPhPzMF5jCnVZDnxNrMNeVSrP3KvaknsUfJ1VHWizpzSYp4eCbzn4Ktv6HTAaZCw4D4fTdGqS56gB1GnCidxa",
  "key29": "3vEodTzk5K4fSc1FcdMLo6P2z7fWG3ftGgusYC32pfk7ZZQC3XZCWPFqa1qbQxWjgz2eJdN9UfHm1rFT11n8qNSr",
  "key30": "58RXmZ6YneQRxWBpev4Co2CZid4MKnH9tmnbbx7Bqg4h31imdY3vcCxCbgBore4EmKNLMhhoEpnqWWinbQVr1gXX",
  "key31": "gLWBmgMvN9mXJbLjLGQkCkfn7JRFcio6teps321t5xJMhxMQsCgrmMxwjnPPAtiDgNCyWbxj2aB55H78wZ9788f",
  "key32": "EFtj7N88edL6Qeb1JqeSKe6fMfvjjbCCaLXNZrSVtT9sg54RwLW6BpS2pSa3vBRHZBaoQRzSyfwRiMeuoPmytbr",
  "key33": "65yJfoft7o3XHkYE58w8Vixu4TnTkCZvpepxfUHGzKbifcSwrM4S6smVrVt1RdSNiwr6w8E3Y9uRurSa3Wkj9es4",
  "key34": "4myjopfU9cKyJpmUYCFrKdqh6eSggtaQH4jhnyTrVP3ya8NQMTQSSm4x7y8reJ6ARDayndfXbbKfyeFC9kdupHjA",
  "key35": "4jx1LiQdKT74fJEThrpDCiDsnpD3nUF4qBNb1EXfK15VxwhaZPgTjnAymFWMdD6poyjLWJiiYzgPcYLx5bYev9TW",
  "key36": "3tECbt97Q9PoqpMVujYEK35XdxuHUVM75Uzdqs4fHhJP2rrrvCGh6S7whzVw5zt1ZqFWeRddbYDJ4ABVkbXw5J8p",
  "key37": "5gifuEX7wgqjMd1qU8UQrL5xHEh5YWE2i2yRQgFG8B4U4aWajq4PZv42qRi9QQjxUpxdGoqHU9NEuoWPSpRt4xEt",
  "key38": "5ws4vwK4inUhszR8pFzGMS98WM32NeeTbf9JU8a2XXBiMnbuHi6avU3yPRTCpTyAN3d4K5jGwnAZ4zGWtgEWHc2M",
  "key39": "4dfUw8EsKdgKDmsD9SASk5KKmgYysV7NX11K6UaExz5NnRtsK1qqPm4zKDMfECeHSqUteAP4Gjr4sCg71twMVJGZ",
  "key40": "2cEbXPCMKajEik416thXzz1VdgAhRaMEg1XiQet4fQpkF5XsQUhEDziM3L25XjxFgXFsXRiSQUYfqaWshLqRjDhM",
  "key41": "4NAuzzgXoHkAoV5MYH3zimssLraYjCnT4FKDsz1bpvCmFaiiJxNehnhc1KswXc2ZJXZZQg6cYcA1F5PNGhM4NmsG",
  "key42": "5uQUgHiTfHkwA7zc1nyQMZGLT93cF4Pw7saqHJ16AxiRH7aVm9qGGMSP9tZsCEJNZ1haSd4t5nLpEYkWhEA84u2c",
  "key43": "5Dc5LJxp6w9CugQzrnSV9XYuPz1RvydyizpKbf6XoN21kipadongH5S57S4CVSTdmfRLcRfFScGy3BAxWmkkyYfw",
  "key44": "5m7cvfawQ3juyErASgQnbntC2g8Uavaowq5iNNLCT1KARTd8zSj5JH7zwyK3YLYtg3pdzLeuo7BWUifWKzijfuLN",
  "key45": "3kkDFv97KoD5tLrgCCqrZxg8bp9EJCXnMu2xXAqnG41Fapc4urrGC4DZ6k3mxWMonVDD8hJQHjYyjQUq5vh9zUrG"
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
