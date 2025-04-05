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
    "5orcfK1TGrsHjakWoibCG97akWRNdG4BjfHLWEVw8SwhjM5bhBF24PDXtDWyQrBXsXVgzby4hWbMx3CvXB47FSY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtq3nMmtghazpeRoRN5a1c2vo9tnyWPDLqVw1gUs4r2jrH4t6qBBhX71wJCwUg2ZdamfHEYPGMZsfzCoaQh8zzD",
  "key1": "23ewW8umrSYMZahy3FXR7RUvc5xhQKdBxYQZeBSiYK4T1qFbBU31FFgRtr1SBSGiVdMUPjoqS6d6AUrUb6UnoKf9",
  "key2": "2ddxXy7vsfRdb7dWYa1BbTefA7eQEbR13Ny7JDn5NE5VmjiiAdQ9D1XoXbKjGDVtcZ9H67NQWgpbUnABnX2u92o5",
  "key3": "2FuciwripKPHPq8oCg3VEZUjuhroBgfPEpeQ77DqC1L3Gh51fYYwvUVccEqNYdQiF31RpydUwYPKjehH5kuVpxGC",
  "key4": "3i96Quy4xGtMBifYk7WrBRRHmEscrZFP8h5aaGwf56TJKvaZEFHgsdj7PeTi73yBAMyVpKqjtxkdXJE6B4fSnckP",
  "key5": "8TNPq1vt9zoBiWMAn5oAkZiUyoUJYx5LpfzbuNcgBXBtsB5dM5UmZQZ7s8Z34nuH8WycSRhPVQCrp8c2UJ3BeNA",
  "key6": "2jKW8dNgDPVRLyZ5T7E9JFYvHMbWeDLnmunQoZFz3uodHPZkhgwszgmCJb5747RAzNfqAVn5pvphGtaDwfW9Q5BB",
  "key7": "5Jbx6Bsf19ZEPCMbak6z8zsiBChRGVpfGi33VFnn9i49ssibsqkd9U5bZfqGAAxsByVL2Bz4ETpbj2nYnyGAYeMa",
  "key8": "eAMuctAGQ7Jq2ubhMJUEr3bYyThiATyfoUiNQbwVb46gQ5CB8DmWE1dzxboRAAV8swRYiLar2TtyjXmYybJHva2",
  "key9": "2RRGQGWPK5dQbZLDLs5Xsy7fXowmr5gwCDLFXnXZwGMnV9JYUZMpaEYJyydqPVfrZX4AMhYUBFhhwkmiQzvyFztH",
  "key10": "2Y3p7whd6x96fTzTh4hT9MawyqwWWPxd83vKuaKepCyqNQ4urYV9Nnj3x7RT3MnS5YHmeQdu7xUq4CTnPyGTvpCo",
  "key11": "4hmZk5R7mHroBm3GCJh5nP4oug29gGnJdCPK5z1RnzqK932jcGvH9aBiQZktEZWhYDk2eFdRzcHD7rQcPkpKcbTW",
  "key12": "26LJ87j1Tfcob1DPdx2PYuFtPqxJrrhE4cPLmhTSSuYha5Gktjc7ggL1W5nztbFQe8yf1Q9FgGca4Jxsa1HviEay",
  "key13": "2GNk6txzEHS8h95Np61VVe4cXXZRSbEJD3NujMmJXzGAQnsdmLvKJhMSDbcFbUpKiXKCCEJaZPHEJLmmeKe9mtqp",
  "key14": "5BDhxUGJPq7zxL9Cgvsqu7eBcKeFbniq67HFCbFbHhaMzJ37boTKGqG12JfWSizmYMqWpwqZjRh1xRyTgpaHDBK5",
  "key15": "4itWSh27SXZFYxs4JQfB5JpeJJZK7PgYkFjGYWYqARLFb3MF8YNc2SzPem2vr1bBdQrfopS9uAWf7WVhjKuWBKak",
  "key16": "4Ns2XZivaZFNp2i7UdbnKQz6m9RtPSvRKFgqTARLkDF4o4DdCxpWvdsRd8d8hudXUWouBSNMfdnvpxNPkbMtggdM",
  "key17": "2Qj3hZ7ULAMEUcPqvV26G8dyc8atUxGHbpayR2ufP6efAHuqDwzkTCdLNofvKX1LJwgSePMXnxByTgT1GcDMatdP",
  "key18": "VnqjJGxUJ6HVeaDH9X6HnMsxTAXi1cEyfbv1hkTy6qcT1mUTjNZDa5dEUJngSgPXHx3aZmch7QLuGHWYgCXFNbR",
  "key19": "5WgJpqracquegqfpVkKCPdYRLmtyKhQSA2HHpedU7nxnKMkFgGTB86wKd9WP6exhgm1s5MqwNDH4jNW5RsFDVr4S",
  "key20": "3SWc27aTioQhPCLMb8He2NiM5xro2q5ZW5W7yvV62s1QDH9iTJ4yC4yV1hy8HTZa1odhvgxEssydUSzhfUzRTx3G",
  "key21": "Sh5obvkNitGLq2iAHtpDstgBLa538jCN3TWm2Q4F4qQLNrVAn425jR9EC2YQCWJmgogTjZBegP6UFrb6M1QCJ57",
  "key22": "2uw9bVZSF6bkZKYJqE68P8GpNh6PvD9fCGrEET5KG5gRi5eYqZpDgSszVVEuEDrrYmnaUbSqhYczEuVEfw6JVSGw",
  "key23": "2GX9fany7HAjNjBx5LrZVSPmxkBWCk97cPbYNhJW37TMxjt9hXktP92SoMNPiycGAvuv2D3vbnjb4C9GfGQj4xaP",
  "key24": "2p7gUz4h7i4EXEtPE5jQRm9dRNhMDrEN4mLJF1PcntozxC7u3ZXJoYPDSRAHwcLjJCTFGYEeTddeUAooSdTVUZuq",
  "key25": "4RM2eTVYGG5fXdtSVpTWboL5TtnN9g4kDqF4zjmaNKjmqFwo9PNs1CwsPwg8nsKYxp7gnzY9uHRfhr8WVCSNQdo5",
  "key26": "32doX71HVJsgc4ST3aEeCN6rUxWvUPdiaLwccSXSF6WFZDR3ornSqw36JWKJeKRbP4QLBD2hjemMQybkkj7efSPj",
  "key27": "WV1sKVb1xrAJrXkhuqbPkavWVW5GWSfBWukPwfaSEYoxutYTrrMHg2BqHQDhmPDG1JQwTcP6fyFu26kSBnUyDcX",
  "key28": "imBGD88EqbwBKFXpSTWGx789KWuepMGfDyjaZL59gs4Q4EKjEDniMPdY6WzDMjfqD2LqwNh2jdke3BmvLi6muFd",
  "key29": "3zESpDSajgx7PNNC94ePvxMeUzLRHNdge4zZ8HyzeusJbKKNSUv9ztUt8YVsgRLFN5E8VQuxhM4gsNJmfLvFQ1zE",
  "key30": "WxYncJtwzzHLTvVqbTPYr5qwLPR2GWufsCmT1w2d7tPvmXzAYe1QCo7eMm1QNNxGgoRq8rCdfKcW9SFWS8ikqnA",
  "key31": "XJ4PYj8rMBxbXayfGhq52HbHX52wQMqzutiDK1gK1Foijc7zrnGcmoq5naFAet6EftSUT3ESogPpxHMXs65TNHh",
  "key32": "2V9NoSAWmQZtpz3ixTfdFSFQPAKjiy27T1TKADsV4USRJdha1RkH93t9EDoHuQrE4NvGnspm1HQyYK4igPBVPSsZ",
  "key33": "2q9MAqJ8gk1QgGsJBGG82xwqNPyWQiULnqjHEhWRvK2pLgPnCVbHA5tK8f1t27AYunedoVv5KKjqpxtHnJBcEzcF",
  "key34": "DsJoaHxN82421BEhHb9xvGBFBwzh1MCg164FZqmmtsmWpffmAeDLrRHJnbE4gDbECCehCWXrA4PQEYXqkYv9ay1",
  "key35": "5rtBrjh2yMHkbKHE2gabUPMHXF4w1gsLMGTutMUoFVbsvtB48XXxDsqnz4zKKm118UcXNFEAs5PAvfcnqGWdZSXw",
  "key36": "3xiKuMzupJC5uT6ZbySPiPuXUHuoUDEc5yf5MfXkrnBUZktgkHUt1bNNFyREobp8BxU9pat1RZSx4RYHZ3zAvBRK",
  "key37": "5fowvrJwhXM1zFqsAYfKoNfL7Wj8GPxJc1D2kpv14JoThdo9rPviPDkGdM64RqWVydDAFdj2KsXv2smeFj2pUhdJ",
  "key38": "4FVm9X3G8vm53RPJdEeMPNtBgBHeRL51xYVpAQBU2V9W5V1KGaAoA1xxhP9cjPpvuwooMTAanxWvc6oeHkaAJk53",
  "key39": "9HrzvpA7suLT3CwSuxgHLGz3fCw7hTMjrFki1KA5ZAq5CYj3286aMYjD4CypRmu2SU3AtYtnioqxaeoW14134f8",
  "key40": "Sb3gNoCFUgGFanWGsqrKHiaZusgV5ZFqCy1Sc7SC9ktVr3AVHmL4qmSS6AHPWbspt4nQFXQEcUFv9kdYPWYA3sQ",
  "key41": "5cL3J8EFsAG6a9fwm3mqvfbsekCf1DCRkrQLGUP595UVKoeUGb2MG8Mjgyi3QXTSPuALjovF6bWQNu9bAoVp3eTR",
  "key42": "nP1GfmDcVZo5QVTTAAMUAZbDCoEoRbvzj5axUpiF65uRST3vRDoGL37HZ9PU8cXD4A7UrDPuD5TtHkvDcRXLjJJ",
  "key43": "4qUMbrEconwB37N1oN6r1SXkkGJfsjUGCdJdSUneyLnKnYNrNNe7nq97bURy9tQJHC4BWTEkkqgbVzPq6vToQPmi"
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
