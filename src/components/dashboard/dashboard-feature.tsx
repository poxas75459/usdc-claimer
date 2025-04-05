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
    "5jBLVjCbaaMvf9rFcJqDpwiLRKX29cPTWaRCvHehxc6LKU4s1HBFHepdyKLcDS1px6U7Wk3rCpQaWqDZKfkfADfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fcVo4yfLXTz5hvR5WKPa1FjaxLqHJUrVNnoxbaxsdEPnVv8cywJdKPrqTj7NLvKvVBEHh5Nut7tX6sxuyuFGVFR",
  "key1": "3qX2DEbqrkN7qzYBzhKzHUpBGuCJ2kPV1o5Gr2EQUCFqkwP8jJe7jipiDkkSUfd5CYsy4jmWFatY4avWVNZSyMo6",
  "key2": "5xaNKLuscYNQ3REUUDDo39HiVvVCdrn3XK4XKXd4cxrwBtkVfRG3qam9U6CMFypUo3yu8cjCvDudviVZYbw9hV79",
  "key3": "4yWhRLNva3iS824izUdEwgCFnbaCicJ2wjQoJrF3RBR6ydmjDcxuwn6G8DWR6mdkh9thJHCGf6P9uck5GPgXrsYm",
  "key4": "5fM1CWGjbh6rH6n4TVrRA5hS87qzGnwMvWi37N9noTsdgQLo8vQmbQ1c9ZiuDdexegPb6mUqK1ggT1zejP2dhrkY",
  "key5": "5bvn83ZQgNT2NNZNJzrV1xHtaiZHgueDRLWiemX5h1v2qP5nTtX6u3CD9qwJGpYTudDrci6HuhEJtzBPKp3mtRuP",
  "key6": "2R38fFEcJwYvpwYjk4yvatU7ZyHb2LAX25VbJQF5fbtv8e9kNBC6L5oFdzzsN83DUhtoz6eWPMiqW5LwioZHmP3",
  "key7": "2mpGDumVXqHCz14DgBQmgQqZf3EovjRqPDrbubttDLoQZbMKnC55zzfbUWbcoDSoqn4miiwwoSx7utVqXAnJsHkx",
  "key8": "6zjqvPPczeUDhSkG4RvQrB5BJ7NVy2DbBQfhMsCHqRX4yo7A11sHDdqcT1bnVvRVY9wzZ4ZFg62qhMa9WhSF6r7",
  "key9": "ZbzZ2K1mfHvqK1oejqXKNokwj6amHcLcMEMr2i9zCzYPDBoq4NyrNjcQ8S79v6LEhdyNGmp5jZ3ezLYbRwDrHT8",
  "key10": "3Fjf5VGnUggskUFKKBZ6hdJF6KkVkJC3KjQHjWzPZaiwVZFqiL3Bw89BPyRSLBAHVy7HxL8JcNJYmTFs1GbM1mkx",
  "key11": "MaBmnpK3367o6U5kw2nCXu16xLUuW9B3dyBNvXegYhXsWx2mFc1Fz7MikcZBxDswpqWjvJwVEL7EP9mWDnYnRX7",
  "key12": "3qyJF1T9Zax2LKjNmgQAm8mDqvosMTkqPCg243uvJnsJMTrnNuHAZcnxLwj31a44eYocZPhUjv3ov8p3suWUS96T",
  "key13": "4JchHzRAQGAPWwmCNR53SJRyN3pUNi1sh5LfXnGp2e6mtG8rcsg4aDNB4MdwmJSQxysfhT88L1NvSrFrbMnponAU",
  "key14": "5nmEG5SWL1BE8Mt1Rknyp3zgK6seUJv4B2JxCPR6dLwg5y4wcXv5uMwue3ippDYnpD5dtBEimRN5SHZx7iH3yQ3Z",
  "key15": "UZuWWss5THW83TobuTjSbxjkKQzUbnU1K6aXM4YixCxc2pCH56VNGEmQJFCEiHwL3F2k2mNQ8msuTiF93BXiUct",
  "key16": "2R5VkzAwJ97GK8uGbLSLpQXnGBbQRdQBh46UUjLGvPhEmUhY8LbuG2FjJsEncm9AU85SKs18h2cq4dCfWRDvHkBM",
  "key17": "q9iNiW6znfJitJVPA7g7WpfsbaqbQxiuFxXaqnYNAah2ChKMKqrT5ypW2BfqaoqBydFXBqPYiiruNAVnRhjhn2a",
  "key18": "4qmGuFUr1QT9g3otZErFnVD1TSMqF5qs9uQUygrHwx7J2xGsTs81gFYPMNJFHKkLfBCH9kSueMYdvA92FdBmXAEj",
  "key19": "55FX4hRw6FGpYu5XVC9JiXQrxoLztrLtoNMBPSWUMRnuCU8ECBLoMZTRcEqqAvdXAinzgMw13CphxZ1go1wKeaZU",
  "key20": "3Ax86PjLLtkuFQpirfnBbS3A4y3CBmmeFMM3CJSyFCmauD3QqLM4RiiAhYTfCHNae6SiercVDxtmGiJiqKq5nn6A",
  "key21": "62tmD1cxzruHXqVCDSMj7QUnyJFpGGVtEDq1tiTVwRqb4UfvBRdVhAuXvJej4S7andcZ6cudoRPZaV4WFxsN4KAk",
  "key22": "ckxknGBdmdi44JT95aogmeKeN6vAyCgVRNyqMF1NmEvigzP7smpMxesqwa6ykw2HqyMvJSsC1G7cY9pNzwXQCC5",
  "key23": "3FgSJsYj8J3436cA3MNadn8osLMzetkrvHdvGtusvxy5w18z4USknNaNUhgC2cigu8GLhWe3sny7yi5kkwwJQaX6",
  "key24": "23DWbc1Q6oU3GcP7htScwojSn4A2tcBktZSVMHy7Ss4DFVhQef4SLr6zpEM1kaP6CbcLKahySrCLa5L9tRqL2Ecu",
  "key25": "48j6Z2n6YK35nFcn3pwxKNJzGaic9U6v7M5MCmXoczQYN2wKCYCTWbTsDdApyg2NV6stRJevoet63DXhuj6g95N7",
  "key26": "5GCrvUtJRcxbkTTCiAEH2duHVuCfJbqTpf6pEkpsQk5EkLEGcAY1uUUogG5s7rT8za51u41sbPVn8PbDGZN3YkLh",
  "key27": "4CCVPoE6gfoor9S1eC6r5BUhtqZxN2MZVGcdLZMJxXcoc8U7jxhKfiPR6soFiUfrsPtQdgdNb5xFwkc95fgJu6LA",
  "key28": "2bRMmCwLYXkubRsoo6EGkLjnSn683zRWeJHjVt2NKSpVGAfe1XJ19MS5FttN18fhngBMfuzpTzNfFDAqnbJYEJ1V",
  "key29": "3PusGfRY1Q51NCEVrhAniCt7bFWftXAo6qsCKm3v5DcSsHEVDxqG8sKJhCe9rn5YzbhVmhmVETSKnXygh9MvbkV9",
  "key30": "5HcF7Rma2D1gbjTHXXGhdandXMHPwJKS8c1qeSai9YjgtZdknDpWRLCFvD5NPCMMT53Xtp2vfLWya4BoJcSysDk5",
  "key31": "axNeKws1811g6eAe9qXjRbxvSacjv19H21a9udK7BhGqRDXGAetVyBabXLLreKs4gCmnRHyZPxGnF7SRSBwkZ3W",
  "key32": "48ZzSuwipP3Va9kDF5EAtNRHdYvL12WPtZcU5rT4wFDR3kzrfNL5iQpaZ4GifTZdwJapXp3w2UK98oXUHv78aiLL",
  "key33": "RV4kGuQ5eyaMYk1EdXV7VS2Zam99kUwguTjYgeeKRrKnMb5o8AfpTHPdLcNY9uyPG3XZ7e3sLB9WYUXDAYsJP5r",
  "key34": "CMVhLwWS8ChvoV2kjgxFUjngz5JhpZXLg6o1PckozCfmJFzBMVf8kgU1w9E3JbRiehS7EmaxnHsHvJ43Mo8ExNC",
  "key35": "57tVRjyqnvWqyjC9VewxfanMhBDLCfHRToef5YvdWtXVzyGi5raXNMP9dRR2hie4mhqtvwavcufCMnwZ8aTTxGmh",
  "key36": "3FM1qYAzdYTwAm4GKcaftbB6PJm7oBPZ3sGSwAi7qEVsPtLoMZXE6neiCzCrHXDXGDsUem5WqreUcwTJVvioqdHb",
  "key37": "3Js2Z8MweocYpkFt5W7VnKb7FW62xuGZpFNWPaRx6Mcvh9QH6TUu5m6qTnKSasnjkBUaDhQTH8tfuKgM41Mt6yTR"
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
