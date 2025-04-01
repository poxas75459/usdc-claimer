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
    "2skJdbpzfCxPZonSmo8gz2h2sNouJjfveareQwVN9Twjtu6iZXicstRRMEeYfpe6jcf7pL1yzpZxJ3PEg1KYgzRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "463in8ALmvnTEq3oiHkr6xzFtP3ZWYmwKVxGyjwJmFrqouDqYK8KkWrsrUFTtvBi14QMzD6A9N1KYCrcYB31Dqu4",
  "key1": "5Uj7841U3vQ3UXgpva3WQ3XGV773RreqwmjjebKT1t7Ty54BDkeLRhHKWRRNXsMjFqTmVqBrK7rSUb2WoTPiPeMn",
  "key2": "4VoK9VAqPggipCpqCTv56K7n85GncS4Np3ZKMpQ2VupFNe8ouAyNPdm61TNQLyXMwtRK7iEUX6WdLEMfc9ASzVp3",
  "key3": "HSFPin4W6HVjnzYD2Gv8PSTP1pA2bSCyGtdHNWoK3z1w7EwihqTnnkk6aZ5V3nrc7rHuzdwQhCumW5jpRzkmG1Y",
  "key4": "5eXxTddjVHeFbcUdytmBBpCUEyoCwxq1nifhdtkgfCgZipkdk7WKC6eTMosjr9q17WZMC5mZV6v7vjoUdVSDYyxG",
  "key5": "5DhcwesNTofoXJzmqHCxoLCpwmN6xamoHt7zZt4aLSkwZ5rTr3RCWLxehSD2qA2C2D1WCZhEikq3jQ9fKbtrjYUS",
  "key6": "sjG9xGN4B9PcvdvZMGrQfdEnU5JjgA1y4j2mGnn4TrpVubmpG2F5QgrjnLvzEaTa25Nywww7GdvmaCfA2HrbDYM",
  "key7": "1SuitgkQtgUJEmznFAjnVk1i23zReUrnF2Re6rFC4okvtg9nH7vYSD5D6xTGniD5NzFbn2K2KUQTdnLF8wuUEKG",
  "key8": "VofBuQi5e7HbZVxTnjvoqnokJWahumddEvT3ji6LZ6cHEw6bSzv1jgisRBJeipspvgCgGKHjxCPQ9ZbMX57oQL8",
  "key9": "57mrzgDky1cRvzjet9sNFbP6yWHpfb2p1S3Mw3x1RrZ7HJbmN8RsxSXp6MwYPZ9yNnZxL9ktb9CYpQPFrR8ZBLMt",
  "key10": "25GxvKrHWuYp1yDabsvkcUB7g4dHU9xiRCHASmbeZwQDVZRMbonDNEm6u713xt3ExQwcZkfnFyVJKg8RgtZRbPUM",
  "key11": "2YStm3WVhB9RLvKLhu8nWysfuu9ytxVD6393tv9QYoaDzt9A2T73P72y2YZztzHW2enfJMT3tohTp2ZGxKDC9Qjb",
  "key12": "kk7CEhJrhPv9rJPGtkdyxseNnqvFrsVjNB5kW5vJesFjLnjsdfSAhMRxzZS4mNvd76cLk4n6ghnurQqioLmNESK",
  "key13": "MUo1vqiwsUAXRvFwpG4ZDC5ujWaPuJuqdPRsmBHesD6e2rsNBNQvzVnSenyKLvjcwX9rfscWqMWiVCkU61qJraY",
  "key14": "4S2TbDkrqptmo1R8gKXQL5mPD3qfP6SeehPnrVjnNaoi862wdVgLewZXVCrG6CU1GHTGTwe7kBRUPNbT5kVR2nc",
  "key15": "5MvPukTy2v4MMs1bmBTsbGPpb5pNfeuTGB3Qz37nwbSRVSYxzUUgUhJjYHF8E2GRsdtn549LVsk9g66GTQqpJKTB",
  "key16": "ESCorJnA7JVFNZiwbZBUqDFhYPJUiAJjW1aDGhuf3UwzyiQAu6APHvnJLCFPvyhv85hZrn29Jav1wkdzsJ3oXML",
  "key17": "4tnpAXti3EgxXh6FWL5tKoRE17fvcRwkatcDEL2ikdMsGC6nxfBwKfVnEtHwanUsrk7Wbqe8D2hDn5h1amb4oEM3",
  "key18": "4RhbwRwF8DgJsZE3zYKoHgko8sBu5j52dbgr6r5S7c8wANcpqbcwqNjv9faadWJA9exazpSLHwH3NdkmCGifaSN9",
  "key19": "4PHeFMLfUwUGFcwYXgYPSUByf5eU4LyUc57sGnjKmTitTfrXbxY5Ai3k5TF8ieNekYGuVE6eUmYYLPifERphR3ff",
  "key20": "2gLvjADTBgbPHpqjFk8sjDdYA7b5jXNHxAwSwndcPH2SQs1xAN527rMJgYQDvKkLgbmfir6kzm6Q5GdekNQQ8Fir",
  "key21": "422EyBorYCukKfDrhhoRd9Gc2Jg8QXBXdYmww4YbABP2RrCSrFbxALUvCPmcWzm8LMjgFM5SW2KcQfmT5A6RJQad",
  "key22": "k5C8zrmbabcYt4SJzLguV5nWe44cRcwUjGDwzuxDjgePDT8qzwAkLkpHitcz2jXMrUr1rEaNEA8TPWvVkKbjHcE",
  "key23": "3Za2YbF3u6TwtrFgv32ReJbKPbgbc1nzWcxgAMwtFTUjpn1QkAP9DPhM3aomMT7aiEL8GXeKYuv5NjEnMfF4942e",
  "key24": "5gseidBDZXbVp6Kbfuf3f4JPf149k7Whsg9sD8jPbwgJY7kvApKb6fq3xf6WnD9NMXbKUhAN9eWSKJffFx71km9o",
  "key25": "39MEDJadB9U1LKXSk4dU2e4horLCS6KcFAcf4qsbjeGvHtpn5RPfVroyEzabhC3n2ghXay1TinNMJzH6fKPThtP8",
  "key26": "2T5eA8fneZTiCWqXbdfsJ1x9vuGdg8cf8ANxosYZu2cp2idwnscMRjxB3QpqQQhMFkNZzFg19HKemEjhXmdvx7Uj",
  "key27": "3qyfkH1euamVZpxQUfkctty4bsT1nesbQnxcDfJXn9eCDrdZmLgFxvmfjL4Ajjkx1QKQ3d5MB9AJNbY3JSzr1KGH",
  "key28": "4TERDRgUra8uKi5pS5anZVU54e19xfXWo5G8vqfnqDjQptH6ZkCjZFmqy5sDGdFkqo1zmDhdHwBaMpPxASbMKJLS",
  "key29": "2uRJaHM8u7yqE6yszp2NhsyWkQjeZSPuXNMny4u2LhadiR4j6TphYfonZUmC6fhnafr7T7YS4ByfT8Y4BPaxRM4N",
  "key30": "2aLx9oiUQzK3AiWP9f6QbgvLMAyNEvpuXSWpSup7iiubsGAYz5qWg2pswdTHfbN9vqgTjMVGJDJc4qanccZYS8wt",
  "key31": "61wsZJobvKaE2yshdPqn1PfgjpUHkG96hh2up2DLcHw1dbkENh78Rim2UEXpKF4Aq92zhNLEbByJDcyG29MRZ7gJ",
  "key32": "2K7FgWib2KJXm94dcypFRa9TvDRKeBeVxTqhBbXtaPdbpdGyZoJMXngLYmJDLdtXD13DUzk286AzGkvjd7JaZLy4",
  "key33": "2fqjCsR69V6nZ19th9ybb2xP58KQwbPNLPSAkoQT6yLepRmES6jiLB2BGrN7cCegS7vmGmRZJ1mg7JSdCP8azXCw",
  "key34": "3PQv91TeFKnRnmrPxnvSc2NXmFGoF9bXQqbkqtVbsKWSLe2qK9opX3mQASRoNULRUpQqorDn1dmkQZFca19XWWw7",
  "key35": "4R9KM7VH5mz9mTP3RKqKmEJJHF4TrAFmPfy1QQnk6uTxz7GPqYiG5hEA1XBhY9oHQR2WSAcJZaaEUrQHhc6k2fWR",
  "key36": "2ThhQEZQDRYnYGqVaqK4Fa8Sa75TFgEDMKwqN2KYiNapr9UyikaNX7eWn2UgmBpXyqqsPzZrVMs8LUQJr35k48mB",
  "key37": "2DqT81eRxbYgYGM9Dcykyeo9BhHde3a1VdqoYGcxnAqqPQCAuNLKakjqwZP26HB5PKn5RaCaL2yG5PYK8fEKbFaH"
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
