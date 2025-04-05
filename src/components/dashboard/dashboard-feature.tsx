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
    "5uSwKLtcxkGmRCJffXPg79ygj2uPQXio5a6rGKiSzPYKU4e7sX324CQdfJWbqRDVeEo24j7S1U6B7HhR2EW6Yczj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CdDVLyJwiHMnekjn83CuzMiYmTSskNMBdCXRVJq45gUFkDQnYSCkXgqHrSXyLLLZ7mDNbud75hw3M76JRN8GU9g",
  "key1": "4REMpkptRZqtrfHZy6TvYYoRSxfjXWvzC95tgzwhLKTF5KoYu8CMDzC4TzWumxuzkdgFt7YdRDuXZ8A6ATDdzLEX",
  "key2": "3g4VWH1s2d4jNLE3Ax3AeodTM5MKve5Zuie1EQdMwEzh1YByyAdByuA1DZs2RR415rRbBrSQjBh8EEUjgLLNm7Tt",
  "key3": "2HXxrha9gdUAxU8bt5rPB7Q8Tiiz96xxPKAsgdhboCf3mEVMMxGCj41ihfQZbH9vYKM9Pay42MfV7HNrwTBr9Mdp",
  "key4": "3yR2zddtVzgbaLx1yZp6mzJvbx2htint4GibTFz1pPTAG3KVEwzv33h8hkic4M5ys8RqbiLKCerQDRvwMJ5dvs72",
  "key5": "3JmNZDCijSQA1f7oNomUfzvnh3JjMcd8KGuuF3MMzYrpBBJMVbidKvQ4JP65X9gjvXpGwth14vWLjc27rKYv1Mj8",
  "key6": "pMnQEmiNNpYjzZAsBJAvy2ocQVacq1e2yLc1GfAz1AnbVV8fhBXhMwyyy8xanhvFARfSQPQDbP6wFYp7ES5wGGM",
  "key7": "49UhE94DDvStWXZPUZn888t1GJbLHLPMpEXvzNuESLBRFA9ULJMXnZQfvzYVBLcwfLFGPdLwzWsbwAFnf9YmU7BJ",
  "key8": "2aPHiSzn67xYPesnFBSWWntS9s7vbZNKAt8JUVPzNf6zGh7y98ywsXmLnTCBwiw1fm4XkhS1gndJH9Jgk5LFdmJH",
  "key9": "4qjQeHGFdgkSULUXism2TFsJ45EbaizizVc5dsqvifT6hJN3GxawDsaRSrLjw7BDv3APxKoSZjyjMfe1ccQJfkgr",
  "key10": "3gxhUXEZi9Wji4FfWsWsstktTbaoDkejdadn2W4oHHqD4eHsFPeeDwzqaKETqK45LPqJNXe9QW8jSnA6xVoZCyTn",
  "key11": "2Ep5jXfWCr5JUXBPwfak3vgLuiwBmukLBQ85z8wKRAn4YJ4Bbf4fDqrp5iD5RB8z9AYxH8MhoPT4HV8UA5Puc98u",
  "key12": "3GNaxVoPePuhHrnekEkXor9ZfrJyi4owcuHGPNSZq34BtodSNfGQudN89F2eNLNnoR1PcYn8tWZ37GjNPoqHPVCL",
  "key13": "3dzBsb27hzfzhRCPbCSvTrE3wC4pXzQWkieqzidP2RV5Gf4pgBAZF9g5PxXcT8n6WTRo3XJBpKN9CHTyEjRG8M4o",
  "key14": "3LHoddMNKGzboHdoczk58NvAFr2rVLYPwKuGXzBteRnXcs5xi7jF6NUJ1x4mCMFzndPVtEgwmWpmHW6sGNjGeQPE",
  "key15": "37yDctKPcit4ECzRAYbw5KL6at8Mg4nXeFxN6yiVEy1EdsAcq8R8aNbiz5R8xBALvbVMcLJVno4DERDZkaDSKf8r",
  "key16": "64m723JWCogdh3Bu69Fk6kC1UGg6rTFRhW5nuRZVgHJGKYJEeZ2FbDzkTBtMm6K8KybPJjaAsr2rN1TQnCk32Umd",
  "key17": "5aCM2oxnrZNRyhEkYHpK8XPfBZngtwC97jqxwALQJm1vn2EAxPaHCKiVw2PrHZnQe8PANBfPUuysDcJ2qRQPe3Gy",
  "key18": "3FpnBZ8c7ZqVhzTvUtrPyB2YMmEcVrKc7rcZfY5w4BJ9qFrNncJ4Cy9pJ5BF4CqhggCDmVdutYLS94XGYrQVyAfM",
  "key19": "4TsYLFHEa4YxjSJVGrz8SaPwHLkHcVGCZj1XGUYLxxgpQmJ8SmifNnT733qP6ffd2YuZu4AmysSLJeBKwRF8LXBh",
  "key20": "4rqcpuXJ5ZCVPr1nHy3vE7vXvUadCVYKjoff3NQUHDE1vZzDtZ4TxqD6HjSbM35y6ppxfM857fvCu93yCBgoRr1q",
  "key21": "5f72DkSBRRssN1Vcr2RVqxJeZw1HmmmLHiUafvB2kxwMWkL2U46uKVqUrE5doWetkcmw8hJJokGL9hiJuQs7S8Uh",
  "key22": "5moZRfvFASFtUSLXaYvScrrofPCVmbgYZHCvyhHMJQzk2JNXbmE2ozHZy6j4EWCWRcNaewhDzd5XsogKSf569zN5",
  "key23": "2hkkpfM8PUartQJiFpZPwMQfLrSJWPKmdUS9vu9RwToxuPbUWYMDikJPstj4DsgKj6ZTzD6esvLdDvihK86jfqJf",
  "key24": "YZcZRPDUgzVtHgBPPCz1QedM55LJNYpxd8H9JJWDgXWHTxXZcxT7QfV2bswzUZnFf8wieE5SgZViFBX7FwZ8ipB",
  "key25": "5TwEcxX9xn4mCX83AAHiuniHD6v3JkZu2gMi8iDMbMqd88Z4dgC5rNdsvmX4MpaHRpkqueyH1urs9mNnNJ8YYvWf",
  "key26": "4dy6aAq1TTrjJ6KL4Lov28uDxnHSmS3RtDdVZkjZdQpWQbZhAPSGfNhS1sxzzAhSPMzG3Wg8TwwZvACZXi9nW8jP",
  "key27": "3V2Re96Ffi9jQgUrTL6hrsNWVeBc8at9Zeweskb6oWAuLNn48EYAcJVbw5TzH1jTSEAd1agSmpPdfxQT6onixbz2",
  "key28": "3pAaqhUAe5Qcrdw5F2oF1uvfpNLihmXrriAkeaTHRKuGuxz5bhFbHpzpLK4DhbLTeCoiAee8FJLKbuh7JcmjXJbc",
  "key29": "4fmiHR5ge4kb3rgMA5713svMYPTCXXrnNShkCrF1yAYGdjdCTTRagS2jqokEBgnUfVQyfcfdd15ruVdD2tcEgqSL",
  "key30": "2F1isqnVTWLUShewSq2YepBvu6HtZPJxzBjiPsfFrTVaH18DNcpPoyRQhiwCqW8a75dsB2ViAGES2ZTK6wfN9YZb",
  "key31": "3eL2Rcu9XVGkxWzRxHikczmdMbc5ZpYYFssTMmEv4QhoFDz6itk9UhR8ZiMAiWDi86sFRruKin8MNEKFidyCEtvU",
  "key32": "5Ve1jwXX35JEvWn4psEiX4ecw8GuijQHP1iwzdYVynkXYFrxKvfoteDLbLrTbKaAyCRNZFUvncocLfuaoYRhMgrf",
  "key33": "2tF8tLUPLCp9pWGTDbgKVWqHhiYsurvbwNAjHf5mhRSP9xkMciuD574dXaDfrvnydgD2HHiXM7U91unHoxWTyqJK",
  "key34": "4VnZYWweL9bHNHP7gTLPoHWr9FkzkzDK3tXySKPGNj2Uj1PC2Tk5nTukhDbPTUd15kSs9ckhwiT6MURsR6ak7ua8",
  "key35": "VjKnmJGEuLs8TBEe4LMd1yLgokHfAHkrgZ4wLp6tZTuYGnYg4HamDoSfS1oMsQZbNVhkW4Xn9HsYwi9BBX1SZMM",
  "key36": "2WmbYqfuc38RfWM7PLA4WCoJiWkW9tHD5xhSMtmHFRSHurG1m1fiN26VSCRd6Cx1hWGwGDaR1nVovHZEKFhUF9FT",
  "key37": "2Hqp5JCHRZvGQXPCAiAoFDB1rR6JoyTi9gNmNwmsb5PccfBD1KnHpYxW73bZDrrBdAN11s6maFEmEFrZD5N4Gx9P",
  "key38": "2UqojC3W6y4M6b1HgwGF1JqMiTH3FjFAdE7YRpuutZp4o9qQbWMfik3kZF9X1AA2ZgWjctUzfYRt1L6VByC1LTyj"
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
