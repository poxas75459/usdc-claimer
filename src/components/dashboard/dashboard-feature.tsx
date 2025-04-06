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
    "9RH5Ct3ZorMvAUFRCSdLbQP4ZMLN11eRFJwczwTaExuRdRZNWLgtqx5eoP7JNjWaTgDigNJBnkhzSz9Sz2ycYPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vCfB3nnsPk4SyYTK2LNB1QE4zDJz69P4NXxDVsxUxPBvwYPfK4uSEuRhXhQpsHhrXUnW5rxsoJsJGNVAK13SHLc",
  "key1": "csRYfKcpv6nxERT7JnWks3UheHVMk7kHHh1ouraxB6NrT2WMETfxW6sxf9Bxg8nXHLH3Fd4PmADspf2jPEo7Q8Y",
  "key2": "58girgcfDdB8w14vmsGKLTrfSjeLY7bendQCeNdLEJtD4C72iWNG9QcUS8A4NWWXpdCjiVPRrFACadGiAUKAJF2X",
  "key3": "3EwKXSL6UohKLsx5aaQ2EBAmnNuMVDafWusUY41KZibWV4354pJJRmM62ztBANncujf9WzTWD6iprAFy2Najpr3a",
  "key4": "3npHaLkCPz5JQ33NG4y3L3EtDRqWDMYWFGH2CirrhohTuQcCbA6Nu46ULXRpnnRC3pUJvaikeefaNhZvNziobeHq",
  "key5": "4m89thdVs6k9T1N6eP5uoYcj3iHFBHXav5gyseJ8nZsFandizDxvZaA8L29KfS35dTwuSQc1XidRfERdFz9WDSJt",
  "key6": "SAfyYZqiJkimGthmoG3ARkXdDGgHH7FwpY2otRJQtLvnKxkWDyYopFsoqoohZbYz8hp1PML5yuS7YicBfmVP2HS",
  "key7": "4Hbhu8pa87xJACDgtQA4CuXW819pSMcmF9vGNqK61ZVXne1LmG18qFZw3aKap5oUMQ93px72UxrtsK63pSUwz9nA",
  "key8": "3e1FpEoQcWjBfMUApEZw74ZZ3RVkn3yU2qEuexcqEs6SFVm3oXUtAfbSxUGmkNojzvFdKSM9Gb663QSetPT9KKaW",
  "key9": "3cb4Dhyj7zirqGGmDdSyN7P6WRQPGLh4r4mCKgX1eentesEiqK19L4oXjBKKuPPiV6DpvnyJbntGbZmZmHuzTL2F",
  "key10": "ExJn3FeHY6TkNYYYrWQfr7spK3i9jivAh5U6j8A6whYC95FkoiG71XkFcW1fukq7cpLzBPr2QWfMTQJ8P3GsCgJ",
  "key11": "5YoxZcS4fBvSw7isTYUG8facw64GZorFv9AkD53jxuXtknLSgm4HmtuWwtXEa3sx8WzQ4Cithd3t5NTJ3iWnEQsC",
  "key12": "2S1rewkbeVaShUWm9tLXA5UMJcQfTvnTdDLVsAoTFhcUc9PHtxT66dEHD5LW1Nqm4upZD8maNZqTrDJHTvrnbm7k",
  "key13": "WXsbQciPb94LssueTH8DZTuKxDqCGN7pQbtNtgc2CWhVaVJaBhGizMCfykE6muMLLNpDMz9hb8cKsFevt2yLWp3",
  "key14": "3N283TkQxPiPFwEEqDphiQscz6NEFQAwhk6813ih8MbS1jAksmRmBMGQKq4xHvdvt6LdpHweWd4qJrMtx3mFmNzk",
  "key15": "596TModkuT8U2gqvEnvJFmY66jQtQ6ZQVpxPpGmcc9ci2zR7iigvSAu9sK63E95mPw8V9WAP1kUqVfmEHnGFttNV",
  "key16": "4moNwioJfUv4o6wTbR3XDWdFSAfGqSrQ2nweX64dGTSxs2paCXnaMVqL3qMxaWaw2Vc8G1DPZ7EEcDvUGsvx18SA",
  "key17": "2c7gBatKNjqopxWRteH9ZjorpsY3LAPNHGjpYG4crAZ4ooSdvtST1RcVkT4aurMR89zpwaVaU7HXEQPjdyQvPoiv",
  "key18": "4tbvBF5tGg4m8VUzXo9sD26YjvZNCgM7grm4nN3sp1hqc1p3ygGtuRED73a3H8PyJ78Py4JKBTQCPUL2Hg12ky1n",
  "key19": "34Gr2omS19ueerjEXif3NGS1upRBeSH3fBD6QM2oAu6XWKkXLg4JkLBBmisGFLJL4m8FAnPxshHJJHKkp4ZtayJi",
  "key20": "XhyiwjU3oaC9YSsRSkhFguczBJg6fGKQTCWU2xvaEDp2XchcuiPLSUtMBc57Eej5gYQMKCoGZCRW2J2qBhFPp3v",
  "key21": "vfrTnQmDNh2oYGZ68p6f6tVAR4yfgfe2MrHC1S3yCTP18JYuPLUm8goEqvCBjyJQjETrgyYKnZWzcvYraMbmrEK",
  "key22": "4ZTeS9KFHTjMaRSTXu9g9qDQKbgM9NCVEEoYGq1ztatAZnLufWmkRamERXEqXmPVpah26twRZA1wtopgpAMuYjpN",
  "key23": "42eJ8xhsUgbS6p4oQfHyiXJ5gBEMaoiykgwSzMawmsTycWNmniHak3miUc2PCbABWth1RZnwqGAjyGSFo7uR9LTg",
  "key24": "2FbcACvZuC24Y7r2E3VtMZ8jFjEVuR5MAWW384XTAAgYJdt7vXc7HhLLczgFs2TBLL3LDt9m3eXWjweJdLTiUm8J",
  "key25": "435G897cFRhowyPFV87xoHBmrwPz1zQW5ToETNGXt94p4Tc1Lo2Czy8JW6McMN95ajAxA48k9FpDZ1pQJwUARtke",
  "key26": "2DQzuughUA3oQhTtAbbLjiNHQFTjv3QwLahJyHhnUS5VzkokP5zTGc3e1omm35qtMAM8R3miKyrcK6o25UbQzSEJ",
  "key27": "5K2BZivRr8v3ikQgGjFZwi1BU3eo8JAi4ukKU9dB6LKyZM3sFxhNs24Pu2mVCV5QZheEBHuQBX1j6SmUE614WUjc",
  "key28": "5WzcwxMGpjmnm6onbNAcSgZu3H4spKUXB6kgPPCLvG2gV8v3vb69pYj9Y9MutYnXXEKRjnNvf9SXhmHBjzrqGW8d",
  "key29": "5CqeCSpXavQimBoTjsW2976qFkshJHDiCHsSHgjzppPpjEQsRYDcT4MKDjgsqnjDCQZA55siWQf67HLqXprR1WMb",
  "key30": "4CPguNQ7UCV3cfHTfv8cH9ANGkVxrfdo6XnKHRvoq93tis1bZsKpH9rvbbXx9zG2JccDdJ9jZikezVc2fib1CKJn",
  "key31": "3bY7vpNRsr4jUY6MzmQt88HfnkS1HRJPedXxH1tw32SSYUoMMn6fsSDo96GE1fcn1bbczFLkS4uZYB5bLAmf4Nm3",
  "key32": "56mdiF8SzFLyd7eR4g4ZJ6vSbvoVVAjj4hRPC2hsZ7ArwbiJuqrnYLKayeDey4AQTNEsEafkV8gzh5QiuD7KLBfq",
  "key33": "jSqQvqmaKBV8JobgHKaMaU7w8cku1YcrWQXsHzV3fSbKxiwwR1wjFGm7nLT7hBuDe7fEqfw5wW9fwSbsHn6p67F",
  "key34": "4JhSaE4sWfdjvXzCvi163bvApx8p3wCetjfXRy3rouKbidyE8DTvAg7MdX6YjHTcV7XUshvTVKoPByveu6iuPYjK",
  "key35": "24dWgvokGrWKYM3GZPVn3NWN2Rmv63kMMs1oRcFoEDMmzcXy44jj4Ym33kfupuUu9c5d9qdGrAG1X5d1HoEmCNXs",
  "key36": "3JZ1cDx36ebufpCSrBWogcWV2Y7VcRB1ntTkfQWJ82pnMeopoSyhWq2bVUSnGkGo7bXcPVbPdowaNURufAjhUZDd",
  "key37": "bKWrtczDWcY7u9nnjdikUhjL5pDMzWpcWp2YbivJ7V59uUaQ2cMAeDff95B6HhbHLaJwbF6BLG46Mu2pZ3eisqv",
  "key38": "3pKo44632nrwUR6i4CdsvPLxw1mDXna2AGXLhgM4RqUjT44y234EmZLrHwpUowVD59hsbU2tBvTzegyRsyfHEXwD",
  "key39": "3REGL5ytmpw1vTUBvEdYxLy9BE6vHttQakyBkQYZ5uBuWzv23Ys7GpzBieGzY6BBSy6GKQVccCh7WpsgXccLW9mE",
  "key40": "3Tzd9MKGLgqEEQggCTgfBDqDDB6Fcp8yBfw4SsjJnThLirsHUK74om3CCGaWxQDYx2v2HjgpVc3dBRTxsFDw57Km"
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
