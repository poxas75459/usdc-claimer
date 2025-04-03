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
    "5tPxUMd8qf6PQf545DbYuDe4n7TqaCBJMmfBUKhqDvRWjPYcRBSwfmMSUqiV1JXC6sJWRseM8muMoAqe9nurqDAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQa9gQtBvK5eR9SSda6Ju9nQ6vVzhYeFVeLrcPBMwjMDnee54oQo8yprvvijsaxwoAgNqzCKk8r2bbiRb2fQ1sk",
  "key1": "AZgZd1qqntC7PY9N41DEttw8Mi1iqpEKbXCwrmLhKLViZwoDWtYK2NGAPXypRjgyRdkf8dhDvaQBabe3rKpaSEH",
  "key2": "3hXWqYgLqAQpCRKJq2wzKXV9K1wphvn2tXLsQzq4GxnSoV6Tf7a2hdiCs6h1QdMr3J2RWoU2bP5RTZTU6yN4YPxL",
  "key3": "oru9LVF6Wm8Wfxh1CvRk6YiqwtoBCc8Kc8phYMx2obmUiX1QGDkd7zu6Wr4mMDytLyDtkCwpt9kbpWzXHYGXvhu",
  "key4": "5PzyTyhiXkw84i7DvGnkTrTa2mMjMXMiVru7meXEfBK1nzXbUdSAwFmESBJNf2GeFyz5b3VwnmyzwrDY5yH1GoDp",
  "key5": "4CeNJkb7EDhcDa8i3a2U87QwdYHiJCCtRthRsA5EkufUzdAPEAseD9nXkbQY7xeByNFn4fJLoBCqd7zqLUMZMcYy",
  "key6": "27AstRmjhV3xUUQSAj4UMEJNR4uVDkUJuENHckpkfRL7GXNNLAnDMJ8hiK6PcPSCt1B83WZiTTgkCFbjp8XVWuFu",
  "key7": "298G9LKoNNDsw22L88SvjuqEFrCcTLWikWFGJKZZGJQSk5ZQEihE2iBecMVNEpaphBs1TuQzVF5dstogi87Bt9Ev",
  "key8": "4zP9B5cLFFNCWRUBcgv6gkEt8r6tmbnHke6PveNW6f9tcKaJLhkuhN77mv34t2u7EZLYxcF63KNG6i6E9BymxTu9",
  "key9": "4X7aFku6qwZchoD6oa8n7XrtRa5yqWRt8RMaTh5F2yNdUwNA3pGGE6G1v6c7weog536JeEvDFdPJYC5JduQ7soSd",
  "key10": "4JVD5ZURFbrEJtkWjjsVujNi7wi1TzrRRz1ZCpGg2LnNRJ7BuFURjcpDR91nRqHazEf7V9hBDW6Kb3pY1JRP9jR1",
  "key11": "6eaeKuzF1VNx8VzTLgqFJkLueVRk2Fy7AKiij9MRMGK8To4jhjMnrYN9eGfD76AsqiijoaVXmvZdZNpREuZ7itE",
  "key12": "3KbbRJyVaFDb1kKoG7Wt7VhRf5RbbM18uLYgPiGhyfkKVzwJN2HvvbSKtgcPqp3NdwJowPpBE96QHZuzdHCNCiqu",
  "key13": "65cGVVTTWckjhpAzkrSLQ3MjmbkzLjJqJjddxU6wvRNnoLgSgcGsrEFvtMxsYbgeVSDU3siTCbN5FmKtXSUTkjRC",
  "key14": "4gaeaAVQMSPgtftz4arqVztvDHBgsDthXy1FSou5BmYocr9VkoZ1LDuvmiq7JGv2hK95QdbZ6BrcRpt5a1pjTQJs",
  "key15": "3fQusX8h3NJkmfNibRMJGSZoYb1Xb8i8GGawCMsTAazzmC6NHa6s2FXfJ9WRtfvEMgnsegZSbBimz5jggHp3pQka",
  "key16": "4ZKyyYz7bQ1hbaq99iovRV8GRo2xG2U9iiMW3trmNiCv1dVAimUYjuSs1QUxxX5juNHrDeut7ooyz8u7pXKZFvGf",
  "key17": "4LUdL7RQGP2PvM9Du25WpsEp65npUeLCKHRCaysWrA5EXZqyNZMSA6ryM5AfM88LY8mP7RSB93NKER9L56XMLgoC",
  "key18": "22v7iConUfFcT3xuTxwemH27dvXcQqEHj8DZx6zH1ZhZfmjMXsW1YAnzFUzsuN55JBZLBMnZHHVr4P8svJkL3nvt",
  "key19": "67PEsyajjsL58mr8GyjXbmjvfaPykBYhFYSjzCa5M9Bwm6xfayQbJCLSbEgs9JB1vGksmzhzsTi5RwUH3VYifQTa",
  "key20": "4CHU79Kd5CYvgF2V8TtPfrQLPPWZM5WUccXUaxpMzWK4GVa5Q9LUvtZbTzpPmdcTaXEsNr5a4D5La3Cct9jzroAq",
  "key21": "4gJMtC7x1eiYD2PAb7A6j6f4NYnkCbA2YHA4EEkU3xmjAEQ21f6vQz8Pqs89kdzv9xfSENdqzwPcgZwT59U6Dj5K",
  "key22": "4tn1tBiiXc76EsCYwbEoempeNPywmTt5GgGnqQyP6cJVwgZNVopbEHSaq8xrrxBmL2EAnnDLdY6DF7tKyPZYCnJU",
  "key23": "U4NH8jAUFcrz2GU1zuV8oHPj62QPSz1UcW6HZ21NwX1FSwruqnu588b7nvDJVsaEpmFE1dy7yfpX1J8EU3RChTA",
  "key24": "4ycdfxyQchDzFpZbYVvaUffcB5FftnGmEx187X3k9AMgrtNFhuzWrQgN6TYwFHC6EFaCH8pdj3cwsk9pDQhxzkch",
  "key25": "45thuiypRzksK3gJPWgqkyXZWyVsshgY6mkowpfkGdEUjPBBTGKTuCYGnNkWzWHRf7QgJfcsXNybanThPUJWEmtn",
  "key26": "5y9xwssiezRJWzhxorK7cLWKneMnv2NzTyxjf3pEJJrb7RejGWWBNJHWL66MPKr5HaWYkyJ51mWHGpLNwdR7SfvW",
  "key27": "57RWPxxeCkp91DmZdMZBoYvoHzwkRCAtYJzZpEuuVbeGJo6etEbMUCFuCiQCEE4s7k9ZSSWbayoXD8McntiJyFg5",
  "key28": "5AftSE1Z7DwTapZoasuvw3r7WiWvDh1BmpFPyuVDTX3LHQVvhy1Wb2tKt5i4b1uUtq2dzV1tddYpUvhpGxVFNq7K",
  "key29": "4VWKk9ycQj9DENZbWJWzKAdFwiYfg6UW9zh6LXY5MAxTaPR3vAJPR8ngkkFPYB7Au8BqgBQJ87KRUyXckqdqnWWm",
  "key30": "4hJ2yYCKKoDwERiqqMuvBzX4hP9ZDGeHyRaiyoxZafdUXxAeFyBgUSUsGKQueMvhtv3XLqeytEiff27PVeeHkepy",
  "key31": "3gKBfSw6LNPpkyBCpNAHWKMLcRKzhURJpD5dpdiH9CVCe6tKcxqCurAKiShXMjJGxeodKRDSqhs3NnXqX6Do4iAd",
  "key32": "wHvhMxGboE3FfdyEnJsd37oyh5swjXCktKDAMSxM4VDVyY2ECQzvP8NgXS2w4x72AQzxLzm8jEF4d3ASLQ4CQ13",
  "key33": "HsUZSamHXtj31t3FyEegf5ajpYM1qqzPDrAeeRDK9vhpYexWM3Q3EdoiBYgtsL72hYcUVVTt99MKtyu8cYMPahj",
  "key34": "4Fdmy9AVpEBnX6suaGj174xkWUPGNBmn1EBVhrjCxweqxiQE5wzrtLbcoj7ctJ5R3HGpdi31BXdr6i17yh53z1mT",
  "key35": "3gBXjvzybi7BjrMNiHjM7jjxpmzf7rfrbfACdRA11HxN1SMw7Mgx6TMb3JH4VC25nCQwH5vkiBuZAsCupABMpZaC",
  "key36": "3gA47sTbo2t6nE7VQMDS4GqHncW5MivR4KgLRunr37zfZeuNB964dViPUzMZbhGitf7K9ZMNoezUPwP8Fs9kEivr",
  "key37": "3KE8YRGPfkMdAP83MhuCLgzRRx7skqhMbF2WY9jBgP6BShwV8LeUViKRfQRe5sTDaFe96zoVCgHouotqKf2u5cQF",
  "key38": "4YvKX143jucBboqrkk3LxqDWUTLyNuEK5sgmKgZCWQY3R4mhHEnpR9yNRQMw8tCeofPRcgD2qZi25u3qNkEAwPh",
  "key39": "5PSgo9i7VHEj47MWYuzSP5PpuBZAjYLYsRkrw8jo7oJg8gkDbPdz4HpZ6Esers8sUUhguk53FdJRuHzuUaDnDTk2",
  "key40": "vS5RbT6TDZU1PstCJQXUdzDaGBqmvuBZdooJWC2LR5itZKfpe1PvVjTbr7VTAJeHVmNeHVznvBcoRKCrV26z5bi",
  "key41": "28AtRfkkYzBmRTsaYrb7tKhQggN58AdpbFZY9maahqFiQ6tqi33rqyjajFEo9FwUuM2ZNe8cycPmgnLhWdNFoyLB",
  "key42": "5tUiuxBrq2pXtCi1MkQJ8LWu6jc8XQdkM1aBCAm4CWze23mVsYJWiNxq9n6vGrqXkcddHzLhjJ6jjZYuGAYJvz5J",
  "key43": "2QHpCVPKQ6Nt4xbRU18NVUAFBdYLTbM3d3HhYV9RFwEZT432TKXY7j9DqRr9HVBRXEjdSsKfSeJ9RMJ8wq6uPfiP",
  "key44": "3AkxK62FutULxq5MqYdXasDziMuTFLFNtAfoJjbnNsCnyhRR6Az9318t2MACR9Z61aKKzzgpqsghbqGFwxFqiHf1",
  "key45": "ZyL4ruYVb9Us7U2DVEay53J4B7rA9uyTHiDpfcGj77Zny3i2xhWVDkzR4CwNdmrZMsFZizp6Bw4L4vY8sHiwPFH",
  "key46": "43dHhLfQDBXxeWeVas3fyeefNrX8PN5aqF1toFtKDy5yeHknGZKi1WPSwgMBu9arvW5BnUX1zBSw2iydY2Re2rqg",
  "key47": "3LnHFamDznkLx57Ew9pkbmQbf1iY5UDVqwDynag3vEzKEhZk5ge4uwHe4ZzXpiq8dq1uWs6uUs2Lu5nRPuVyC6FN",
  "key48": "3BXmxqLNesyNXw2zWWqnNRiXUDqFWaffA3CHygS2iHiGGak91vZtTjV5pSRRJmp8E5YmEtD48fpSrJFf426e6abC"
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
