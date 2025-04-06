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
    "51cRwmSBTGTDabotzaDSrZErCg979NnWzwzNiq2DYgkNRfcAwbUEixnVRE8VGeLWhy2viwKAVGErUkV1NQ42caLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63i4incb2DMYuXqPdhBxtRuMtpH7yRySaL1MgvBVFYRAYSa9SAY4bRotBVSRuwMFm6bdFkPca7pcBsYXeJcXp3SQ",
  "key1": "53bP2gAbfrGuH7Fv1UWQFMyFopmRd3pFGfGsGx4eNShtNR5Vhvf72vX2Xd9E9S21WY38MpnYvkNtSdznXz98x1o2",
  "key2": "hsA6sjpZ7JBJa5DBA6oBW4aQo4Gghpo4EMk3Jbif5degm98CDJ2uF9XjjZxxRNYZ9MFMNfQaN8SxKSoeLxsikve",
  "key3": "tE14nmS9gNCzDfpVCaEzmxQTcF5J1XZVeWzpq7e1CZ5xVmfM47sD5XeKtzPpXpjdgEnCSHbGnCJ1UgEE2vdSo9X",
  "key4": "87utJCJX1uvkPdZBQkxFt3VEowEtHPGECk4B8Kag9uuTY4EgdV9Ei8JtvrMYmiz8f9CNuVzTTrUHbzhBdM8eykt",
  "key5": "24b5dvqVh7DfozhJBx9VmAuDTKTHcd24ekYJahd8eyxPBsnuHa67j677ZK3ZpbqcE82wgUXMVpPhVzdxe3XfWAQL",
  "key6": "4QRCQxGCqRMcoa1HfeYLDs4s9z5esFp381NHXtPz3CpsmL5LURQBHUXHiJCcTz19hLM5oSYPUwYrNdTt62bJkjTS",
  "key7": "2ZVRYhCk57P54Qmtr1kJfP7tTez82s5q7biwpX75d1CPZ2dCzvR4FZFYNErRd2BDCeADq7dWd43JHLTXt4zXrMav",
  "key8": "2ahEFRGSxqt4picxyh5sj7RfSQRN2rn1UzRZobeeRtLsTEtNyWFw97uQPdML2dHpRiBRttpDdoN9gtcKxGm5g4S7",
  "key9": "yh5ZpnU83EFw5oR3VKKDxtMnJh3bYqacKwMx5bneZFU9odEHvnFsXribGZRqK2PmR5qGW9TBrHXbWkTC8ZpEgXc",
  "key10": "26GZ6syEDwPvYLgFGR1jnnBQGKRHDKG8YrVcYx4P7z4fGrHvUT2yuYhPQg8LHLmD6qp8LNND3g2aPMdozQbjJjZ1",
  "key11": "5BUyrqNHVBNoFo5DrJGuvzBpPhGbHBiRFfN4hj4Qzs2oEpSXHTSJNrPnVyybReKcU9EXD5L7KDt2fCuUzY88aD4H",
  "key12": "5NWBTDuA1wdSWeSP2hJ27DEzwyXvvtVn144o4QLgZ5WzSM5vnBGU8P3iHe2yFQ5CiBMKz69dny8LMQADfs8X4yWt",
  "key13": "nWBHmdMkt9M4YXCXTEZX8LgS2D6mUBKpfLDcJ5QR3athjFA2xsXKeKWJrsko3ptWwWTz5sBKtMizxpNDVZM8dUn",
  "key14": "5ZdVWWeS8xZLy5d6QeCRKS4ZTA1wbKEgTtGz7rjFT69CRRatbkebtN5j657pFHb4jYDSWhZhQ4wUqxnZPmnE6bma",
  "key15": "yWEV1gxy72LkdJFXY6m5rKA3S8mwmtKjRCUQHnRpZNaaGCdn6TKttr7U6XqWHJQBTBPyMgvBW4qiHFfGSb3ygRZ",
  "key16": "5zpCZhykdoe4RBN1vFFB1F9NgotcDxwXdF8SdLtpVXbCV1oT2q1bSeHMQZjZssU8KQUaa5s9BCbxPKubzKmaQMA9",
  "key17": "3NU93d62Fi83AUVgtYwEUxDqxmRK3z8sgjrogSGRDJq1PAATnNPcQXjHAMAx3CDMiu9hXpsVXRCqkxRJRHryqvJV",
  "key18": "MGQV47NCdXypZfeDjsTyxW9pU6MX24Deb4Q4jRMpMrjPaHEmy4AXgsaVqqTEZm19jZKnnB6EUxcHQG2K6rS5xmF",
  "key19": "2NsTHvoWVds2tUTXC2YzY18fHzYDCfo5s42AKecVKq5hXNQPuLJg7MzsXnPQ2Q9KJi741m3LcyX8PdARpiaf9nrS",
  "key20": "mDh5kfCTrEJ63DgFdawK2A9hyq577CcGFuDNNQgPq7RkcjCXRy3VpksYVZ6yvEsSXUUtfzZLk85t63cudrrkwcW",
  "key21": "9fHwkFk1R8SNKnjSYX1QM2FDjPMeidbaoDbGPCP4ywcsojGCHKeKmPC1Sf7Hdj3fTZayCfVQLoG6n5xNrq4UuWY",
  "key22": "2ecv6hZU3S5he6zdxoeGexVntU9WDbAY453YyCx8oA1geWrtxFvDsoWrJgZNmYZuwvd2AGFs8cshZcuVhyF69Sw6",
  "key23": "5puncqjQjoXAi2GuYRcppP8pUCJt78S12bmram6ZtzbeuvtZQ8jr9H6E5EXHyp3SAWw7Nmv8iPB1FD3s9HCeoYAc",
  "key24": "3977M7NHR1a6GpkZZ8JWkSARNh6mA25T8ijGbN93d5R4hyCFiSL57hwauF39PSBEbnqogMJYq8A4YhAfrEvd4D9H",
  "key25": "43gpDzA7h2UpPb4w9HYjZ4aSz4iHy6RiXxJjGJeKYjDhRRPbR3CdnKCpYNHd5n92rWgxvxaJj8kww44YWzdFbzXE",
  "key26": "4WXJb3XETqSaDK3cEHuPxBLbyHpwTnK7wyBfWH59SjgVxy97MXMhe5qq8ueLmHouguBB22MfNVBm4d9A4r4TrP1k",
  "key27": "4Jaa4ETLe7R6KKinkExBs7HbFH48q6J9DoNQcBzK2yzwYnq8iDQ3B1szJYiLHMj7QMmYni1RDgWi3r5V3Wz7xj1n",
  "key28": "7UTxQHCf8hznzhh9oWBv4htahCdkmMcSJgEc898NovaAmd63GEmc784Pi2FpBUWmgHwZ972SrAmeojMhi5ppsvy",
  "key29": "64sPXUybVWs7aC5U9m12DRw65ZWox9TNdnqWsjQD8j51WgEzEyM1d8Hqka5HGLBApxJApxTfprYFdXd5m6eHQSxU",
  "key30": "4VNMPY3QyypycFxQatfNnNph3RkSyKc5LVh4jJ4rdns27UyQqgTHpQQyN4rKnfWssc1VHRvY96jiCVJDStPeqTtc",
  "key31": "5T12K5Wn8tenywmMyMhsxRQSjstQAujAkiQhMSunbFVm5EVhJkHMj9F5ZMUwZ74BuUCVe9Sqo71KD18K4cho6TEk",
  "key32": "4CThcdFNQq3FRB91EpXsbsZSPsjGs12fJhDX8Zrzp3c2Qbi5qrFF4fMsECUyJvfBvjQz6AGMqjHijfEGXsvUL5PR",
  "key33": "4QZztMosgscQByhtmtccQ6NXKMg882tkoLykGKKnUjG13yEB1CTFfSS9Up9WBjsUAbHX7YtUqY9yKRP3r7aBjg6u",
  "key34": "4r7nk5yEaoFVbiQMsVBHiQrBcSv8VDuQzGKuNyC3TV7hQoB2HXFuGGPE5dk67Nm14m4NSqtVTu3Xwso6gd9RZVbD",
  "key35": "5DyyUN5qYVbytbn9XAqWV19LVm8bKvvs6VZ98iLGMATEDy9f3yMDgXE5B2mVt8fxHemgdzBLJqFDKKcGU84Tggbe",
  "key36": "4AcHrbK9ctkgjmxZRhSah8tNujT1ZWsjcjSaUFictm3veEgvigcEcU9Navgvwet8tDtwUvhDnnFG3dcH7T4tV1fn",
  "key37": "4vdhA8QjNvrQJCGfGdtdAWSC8ZH2qL2XqX3MWstvr3RQ5pVRxy1sQsLDynZDo9EMLtPVHNvSjPztNjthcAWREhSh",
  "key38": "5ToyPqGaV1bvE1PNfhiJfgeepmJPGp4ucKddRsyKwN9QsNgkWaPk8A1S5nnFJeY2Ww9FKqZuKgDDngngq8DJgYze",
  "key39": "5DeVTd4Xc8zUsgQ4dHdv9MFiikbnYwP5HgTdUAikFDCeQyGdPNd1T9E4695Rm5H73PC2cXLNmspXi8XDfoXN8Ajq",
  "key40": "4XPBrVN5SWBvTrYcxyfwS4zutJ6881XGFo1xqhoebXcGnJa2vyNPmfsDLn4hp2UB7Gc2SmMHfye9pC5Z9fthGSnK",
  "key41": "28T33QGm6po1VW3gSbaVMeY8f2LaqbdVcsKEeYJr6wWoTtwdUpy4m2EGGNdZgYMxFbK5atJWML3uvRKkqqdAQatN",
  "key42": "5Hsrv2RkmKkMZB1tgwVDyVFG8yuEdiDjujrDycMzT8wTi7oeJJhNSqcMxmU7U1DWvSbGr94qTwWJK11m7U8LZSST",
  "key43": "3Mnwa5TihKuRVr77kRXLDV9hcXMpmjBcEQFSuTF5WaVCuRftiobqX7augwyjScJeSJ3vQ4ib5dHAZkxH9Xh8urq9",
  "key44": "6ZVxqorsRMSVLzgsyVYXjU58DoW754TP5N3MRoBRhxv6xyMkuSKzu37vWeB6j6BByUXGEebpDzcAKxQ9QtZ8QTL",
  "key45": "2Deu8XaVfTS4Jf4qYpzC7WXywyFxXGjxn2yuSwFTxGqJPnBSah7oQK15QayJpeyUrYADjQzWNE51Aqog9Kawvhj7"
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
