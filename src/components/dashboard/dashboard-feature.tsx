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
    "5JpqoTScxQtkTm5HCbb3F6Ynp8Hajjjd4Pva6jwS6d1GAARmMBit6a4iDmXjudCsZfgUqRazwzgMKBw82KRpYJQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qv9iX89QuCWzyix1U5EP6WjRSPuPC88Lh49JELpL8aBPFdfX2uYzsFuykNHiNdjnaLeKeKVJcVexS7PwEqsmNdj",
  "key1": "2Af4moAV2RGyyvXD89MbA2iYazHbfLuSgp9PkEyWBTbTKxWrUYhwC6oEbWnX8bRqw5uikKkS9X7GnYnbmjmCD7xA",
  "key2": "FiRmX16YLFQojvhLSKJFkbHXEXSDKELpt8tWXDyfSrUjsrrjkvNHboqNirYSWPw6GCqgSVkbEdnLvd7fWXm6TLQ",
  "key3": "2NkR3FVoBLjfGWS73R9jvEt23D9nkPWUnKNByohi4KZjAaD3M4EdkHmmez5ur73nta6F974eXuNeFbEDUaE4BNr8",
  "key4": "5VSS3A13oWnDbMhXpT1UFrUXq5Eu2esetUm817qaX7QwxvvQfVAzpUiTeGPM9kSQx8aRtskKpReYCTPEN1ch5rag",
  "key5": "2ZHebKgyAPVidyitLTsd2tBVhk13crTM8spFUjGnEmZNFpSKrZfAUkpxPf2sJdGnU4vJiTVBQ7G5CuypSLwVKnKJ",
  "key6": "3du8Y39yare5PfervsXZ4pzDh1Byw6ZJUUpLwKuKd9voMaZsKiGbyQxHs6XBSN6DmZhLgFkHfpeeEEs4MaJGf2iy",
  "key7": "5UMRnMfxUhHHZ62KWFSjBtMu9Yf4GLvGvN5Z7XPGxeJ11p98yKSfcN6dxYmPmpEdGygQSEftq3yrLvyfiko8GFQd",
  "key8": "4FTzXS7e4CADLkPYiSuRhYxBmyCpvrH8tNs5RjhY8zzHPmPWPAy9ai79EGc6RYNeBVbfJnyPuMbTv4wXM9VGYWsK",
  "key9": "3gzXBrzZSdMiysX8f6XMgjjMj3tg7ufjgCyeJ4KYNTfwaeY9ELh4D5TdBwCuvgoQLLTVNP6soPqtv9c4wkuEzgGL",
  "key10": "2E69ZnSawzxFbyAWLuxCybbvnJretxnC8w6cq6Ce6mTZ6BShEB2aaUbLYDbSWubqok8uuVafcUqcDQSdBKCzNrvq",
  "key11": "2pi5fxdeg7sfjmMXjtfUUgHYsSMvF7E8hUzCVEb81pj38C4WGjFZ6YCRVp4T61QygkCpSe67dyEJYQq3621gTQzG",
  "key12": "sf99m8JkGUFSxR737NmQRzmoF83jrhysMww5QUZJKAyuTy3WAvfbYLPcWEXUUSAUJTQ11nicX6ry6p4YNJ7MBvY",
  "key13": "5Fn26kUdJDEghmCdyNSPf9N2rrE6BH3rbLQKLScAWR98kEQeexikhhv3cAgenMZtrDyDj7WK1DM3rpmv5PYx3itx",
  "key14": "5ZURiUR8eHKjNHxoz8Eobi7KoiuBrTJnWU56R8eWaX4CDuXxtadKfBPSFdRWVQfpwspkHKstJh3tgwZHtmYKNZe1",
  "key15": "4zF8cGCPwX8iczK4GURU1jQum6QKTvCSgwJK6AjkecpQk1pCZDqJSo9KDAyvQJkipphVCdACf33sSWtvtstLaxfZ",
  "key16": "5EdpLKzEKVWkoqnkncJ6cBwsjcxeHGd72w6Jj1F2iinTcLPyaqPRkd9MtqprEjKxGRgzw8ZtsHWXsDWfABvV9G2m",
  "key17": "3CapDi8M8nCiwuwgAaM1BDmjPkAHjfmJkm88RVhPpjU5P69mkvKKNp5qMTDxYfwdgzrHxipmrhuZnic7VqeRBM6P",
  "key18": "4Rsdw5BumvY6SwzVgC11Qe6C7ToidXmmFSEUzeeqsjGccTEyb44bYMamJPJfC1GrqLjqGGpiZrCEgsaGfNY4Lrhh",
  "key19": "2cMySCH49TBc3zjWy1eKty6aHeVtgtTWdgGYwWZasrxsqXHT7oruY2VsQTZDRqP4R5fZCM7FQbDyDkojWphfKEfN",
  "key20": "2rJRPSMr5uR19mxko1hZLgb2LLrS9quZW1APr7FJfCuXwGNtHxoNvF8JtpD9SwE8wr1h8PdB3dBi6b2oGvApfYME",
  "key21": "5P5qdkWTG8o3orbxEsbtM68zLdrikE2EcpNpSRQmBDb46JZgqksf2yyssHSqUBtKua8hSGbk3RHg7NgjA9W4VEnA",
  "key22": "5GQ4riMGCttzxvH7o48GVorRdtkGYKxNJg21nmtqCX1ratBGTPibYXqZYLbgMjd3jcJtMV9Fsk1oDj8o4sWk3cXB",
  "key23": "dR7fEjpW63Tfiz64jfdCiLcG2BPP2tQ1GHvPjLDP7UhxwWyTdHagqaCqsNNVfYE31W6Me4b9ix1ujThC6HGmxb2",
  "key24": "3mN2HjPxcHBd83D8ihH7T4NTvKSVyYuvSGkCY4kD7rUg7M8j26A7PjatnvrYADcMSKaTEDsBM3QoYjUByhejfa3h",
  "key25": "2G26WohS6FcBZ4z9BTWwChpYpEVXCTuZBbRBbhrGaXVdqbpRqPBi21esRcXwH4UNGrzAT6KJ3Mk8TTBfrwVnztXY",
  "key26": "5QAxrxu9pG7Ks4kKumkbP9HXaoqhCUQbLikhUdnUsbrccsfh56RDCowYWF6azgZjj8qQ8GbiRcfjmBSYZ591vsFd",
  "key27": "5LnXWmVmiFxQS8pcKQ6sgbkj9UxdhVLUhk4z6jdXshhpSQmhMdAQ7YTENfjLLgt5eLWYBM6fZKEEs9bpjcZVNTZH",
  "key28": "3rVBFpA7gBrXWnmnsCBhmLusyShE7RVuvrtiVdDCDKJpmFu9459a7TDTc3Wi9UyyVFWrrGd8zMbFReLxK11uCNHe",
  "key29": "4rGvP84GvqM6LcPCbXGoSNzynsQkcGtLqFk3JcrSxvxyzxhv8qifNoAKPyDVb52UtZjh6Gnbx3caVecS1PQBixBz",
  "key30": "uAKpmr4dJcWunM5wAanhrK6EB7zEXkV94DEanR73ucKLFqsaz9jdMpovToJSgDnPgoagMs6pGDak3PvTeMZQndG",
  "key31": "4fXjgfHT8t8VBcRA6aiazSVtesE7BNeggfb2B5NAALbUwtDzcnD2osCFzX6Q6mdtcGXmsEGtx5HneCtcViVW2M13"
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
