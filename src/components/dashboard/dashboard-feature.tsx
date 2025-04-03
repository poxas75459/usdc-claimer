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
    "38UX3HHy4WjTXJ1EnEdJEqk1qK2UQaJnuLntGhRLUH4stdiDWgtnBVMBhX39b5MqPpgsGywfTiGbzVYYqjCTG9Rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47L3Kpbst6m88kWjoLK5ZbkwzMRqGU6zwNdSpstjcPSux9CVN6seiVv7v3v2LabVBwpFePGRAFgYy6BSmHK85pct",
  "key1": "PfxLAtvW1DXGT1KBUszPLY8vaVFYmUfzT49RaU5VtaMd5Sd3PzEnbRXdZmxdLqd1Wc2kfXDp4huKLshWAsMsJi8",
  "key2": "2PpWaBaBUpe6zbqyUEvvQCw83QSCMEVuNaeRe5yF1PMYuTRYwxq45xCnG7bA1oJbWfezn9cgoJWKKDkwC1KQ4UWH",
  "key3": "2rEddG5ii4poSrSihHCQ73kQib3v2EFGXHU2XTKaFPhRcHo2Jm8Wkr3FfHaxjJAnMGZe8RWoRbcrbNMoQ3s9djFc",
  "key4": "41vR6F5JvfJcQrkc7awnRcaxvePcmKGUetH4q5EbinKNHmQKK5F6AtjmAkZKgt5jNd1oUJRqDnXxpAgebWwrpFpe",
  "key5": "5hNzAQhByn5oP5rqFKPmSNk8bTphdVHjZCFGYkUmo9ak6jscXqobUeve6hxY3QPN9HUeb6aWESv3YdG86sEZZrQL",
  "key6": "3siV3uCqGiSmFRU7iXVrS1WkvDjCs3xEreouEvnZHG5dnNFbpwHMHmKqxAgb1DUjfgMbu1qZNCXbDtPEpaYjT3qw",
  "key7": "ijvEyechRNonNsgTqGeHoVxjncDu141TJMg9xh679GU9XZ9C4kA4YWT4LNcfin7Lhyi1zEp1TYte2sXPgy5q3x2",
  "key8": "2hEqVPuqqHRuUem8poDpaRuEB3W9vRWYN4swa4V97gbVJdrePSDcVJvDhXhuwWp9bVHXsh7P1hP8JHEAsrLiVQxV",
  "key9": "VYKWfNzkrTMfK5MM7Z17RuvkaBFtR8EFtAb7rd6dk5jbAHVnB5m37Pjt4eZutS4HszS1v22Vr7iQjcB7uF7dUji",
  "key10": "2RSCS4m7uNGwyy5xeEJAaWAvy5gUzzEYqV49aFrG1w93kbTNkguGynZfWiTAwnic4yczPbwn3nCSTJtYE9UytUCM",
  "key11": "44Lj2ttApVhdqWc4h1NGfMTfqi9TUw4wXMrmszNixt93pNAEDNxMAduwQfRxsCfXXHueeqGHvsMTvQCd5YK8FHpU",
  "key12": "3EezWyvZohJSudagnPGSMNu38mGKJryAoGoh98oTXbGh83s4BxqqPt2yXR8WnKWCGrLH3xoMTJPLggzG5KUPqnr2",
  "key13": "41Fw1vigep7D5T5kFeTrtKXb9sX7HW1GQRvmuUsqKZNKb8fXbW4UGajzqj7MJFV7otCrA3ZF7CTzJVEUMjfDw1Dp",
  "key14": "AudrUS2JsmwyZmP5BguS3sjQEJNR9iCpq6odzNJrUnbonWNW5Kz21h5wxYaMgmEibwK7Y8J1Y66RnZtYjY3Wd7y",
  "key15": "3MS6uxybEU4qR3JoZiR23phvZbJJb34RhACm9wW2t66KUroQ5zorhffrbqYjiorjFdCHkJpDRFBKE4GE2vaT6kdw",
  "key16": "3zVg3nW38TH5WUMYH5gP5sufsGATTQbx7HDsbA9DPLZtSoFrZYBwrPcYeCZpUmCd3pKsJYbQ2sorht31Vuv7gdb4",
  "key17": "3NXz3SCyqfs8GQ7gKofQpqrbBBSysKVMCBXaNCpSJF5zfpuPWZP9Yv3Yv7vgBMuKB5upAPQqi27Mof6MXx5XFUwX",
  "key18": "YFGiA3CqiDq3UpzR7qgAXbV6RFVnoAiHMBvtDUDNrn2Q7VbadmU1FrUKp1xRBzga9mXdCs87ezCmn38fkVj23Ga",
  "key19": "4JMZgq5Cb4qyy8dFaG3iQ1DAVcXx8R8s7ALeZMnXTfHdgMmSyjuUcFkGfxEgDTLpTAqNQRKz2X3RrYwNofgkqVM2",
  "key20": "5xWWYz67Bv1cTvjdmVBEe2Y8iQMChvN1pc6ommU52ifvci3UGu7tpQJ35YUNHo3NsagRQCZzgTtHcXQLoZr7n5J4",
  "key21": "x4RMbvsPnaY9f9PyJWDADwtVrfAA6gzRFS5yK3PC6Hf764CqeHDyxenqjNWV1xZgP2Y5wjAn5g7w1aRYrs6beKy",
  "key22": "9nEnZSwLyYsgYhrBEr47YkFxwKWntBJR8CcbXdXzHE3gQucHwKqLUZspmNcbu1QAYZ7sJtZGnhDvPj2oRDAz5AU",
  "key23": "5QSbMLTDuYhjdd1enRnffbZ56HyFZEB4mMe5GeQxHnuGDWCVSA2C6xAeCePDmz7Tri4Zvg88GcUe4BTMSKpRSteP",
  "key24": "d6SMzHBJcUMPM7ENR5Uu47JjFj8wnqREf2mWU6NJZmNF5J5L5NoeQ2Smmr1auMDMwz4qiNPzttXwv5ZUQu5VMyX",
  "key25": "5Jn3z9tA6s4hDJGCa26VDnqHBCP9nLQ7YszMbYnhZN1sDArR5GoZRA4HNbS9jfAT72j9xFoGqr1usSdfsvagcHwc",
  "key26": "23aBnLrBpRtobrPXKTWoWDJFyCG7XwbbjN6z8hm2HPEwBke1gZdaY1jcHvLytDeD83VdTke4tR9mfEyGaTKSRZq7",
  "key27": "2aDMwgQdC7fkZMJd4BPHqovwzN7eDq5ovY74H9uaGLJqykEVfsVSqiSgUJV93qqMD86NyyC4L5N9ioyijT8v84Si",
  "key28": "4mz5YRTE1zWAt5vuo9wmu1nsAVvSM3bbCZmkpYVVxRw9ZiwM4SHdgqNRJkftzFcL4U9cmD4eDusLZrVJppmWCooo",
  "key29": "VuwQiLSzYscqyVey9YrY1Wka16UbwusatHLgFXcNnqwP48A9v35q8GsbsKLgYwjmaMSCe6SGv7BHxq5JXbLFxYV",
  "key30": "hK8Kg8hqRtCnN397kcF5XEUkrohkRSa11fjayBMC8BM3V9Tkc8gAH4Kgk2hFvMXVMkL7rdtTyvkJed6MCiSfDy7",
  "key31": "2NTY7sWr3ifsbd92sGtEZQx7f5DsFNMPumFYcCzf18U5uN6uJ1W6gdueLwrYQaPGnkEnMJoQ13aPhUrkWogC3drt",
  "key32": "4ywzbCmMf2nwLXsrRzcnBkG2BGdt2rmNtE5gyr7hpaLSYHu4kpAp4kJGKDFviyV1i7GXXHpeJgurTP3qoXBeg6sU",
  "key33": "YVX5LPTmDAcbQFYNgfkNfntcATT3ouQJwZzgRbmvebeJBPPgY3Gyc5VLUk2FHoiJSNgyUyvwaDEBN6DcbcyASsz",
  "key34": "4Lx2RaTKQdbdjwvQg2m9dL32zAvAMxa1yADDer7PNNF6NuCg8um6yUzDn5dynMhJgmNSokLg1gbGRYgp8759fK4z",
  "key35": "5F9iBazenbDszxTdkWasyMMKAh73P3nKRq5YCUVF6rhorFVtmPppCky15VejBZmrBTJoRpDY9JcUFpMnoaNhWVM9",
  "key36": "RapHhtEJwdqKgy8T74hkWNgjwW1KMWXVVUDahmoQGzTL69qyG9TAttq3hn8x2QFKnKHqPo2fMcTPWQcCd6gpuZp",
  "key37": "3tuknLhhVtnGUcmwuUKDBTZ67TiUfEG3ucrqNUcHffgQ5ZBAKs1TFnSWpDFQHTcwZLCsnqT55kXsuJuUkoEgVcVT",
  "key38": "31WZAynZrZmYGZfG7NjKGmxyJa6nAPBKR4HjqxSFtsU5MxoVaXnAi2RHnSh6c1F2iKU47RZGBGeWK1wFR4tXV2t3"
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
