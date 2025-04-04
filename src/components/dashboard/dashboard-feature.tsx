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
    "JHUmLLWuWM1BXJHkAa9gu7BNzhsHpq1JqLwhvMa8Kwvi7DDrvBWHkWtcaEcvaen6FfUG5G6iMZNLGBPX3fQMqbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ZT2J3QyaJCz8PsFUg2MeH41QE6VhDcNgViGCvYgAoPbYV7XPcgkBZEDmUMQxGwjuGDkMsY9R6QRrG5nSqqGwB1",
  "key1": "4D1bYvyu7udMEg3zVV9JedR9rdXVZW4FXeKgi5DizZ3KrFhsRsepDuiaTRvn8q1d4bcz6pSoiUBzwmhpY1QH7XrV",
  "key2": "4QK4xxvqkWE2et7PhXUw7AvLBWn2fBsnXT59rXev9EGKQccx4tWtsvAjBN3xhE2V5UNcD2hrjJraBW2KRdYh1iWv",
  "key3": "4o171wU76kWpGYKJjJYjzz37Jf3TZoUmAfz4SW26cmm2tCiEXi1uSVvrunek2Yk9i3PKDJEFPZi6UZtQPJB4ibZP",
  "key4": "122iSvriDgn3aTwft3mbdJV93uEPVNcxfkBbJGG4dhYLXYJTozaEUECKnKNM8c3PSWk8JEfDV3YgZW18a8Ct8gGN",
  "key5": "wACmUGi9G82XASwErZrJ3pnMHns6pjSmPMrVKezVEpk6RwQ8NwhgrAVQPUXkRao4HFync31hFRE9FvpsEL6bnvH",
  "key6": "UFjS3PQV9yV4XJvNtY5FCkmHCHf9LKmtV9dQ79Majfo7sT5w9efinD2xXhasJEKnNfqMY4Uci9v5BApJDPrKK8N",
  "key7": "DWFMEgCSPELP8fBAZQRS3pFwmftnbaFNzjCkeKKJDf7FW758K915MgRjv22p3LFeAawtJy3YNSqGsK54tBSW7qC",
  "key8": "D6VnzNiUMwu8Ccc4XJ53LUELUgGVLAfQ1kYc2Z76WNqpFu4DMLcp6fQbx9Fajww7HCaazL6G5n7e3RiTQqAMchN",
  "key9": "5wK9MNG8Bbpi8okKH1CrcSHvdzdskU66SKqtrBnNpaTpn6S1SGKsWim6dAoYZtvG2njAMgrFtRptpqv4iEbEkMyb",
  "key10": "4LryLpxBSW14xdpu1S1WU5Tq9ocpfJfE7EzhPxfxjvmoB1JbPk9JuhQiAQ4r4pL9WiaxecCRMnv21zbS4Psy6fMa",
  "key11": "4huR4zwewXopSbv4fgcRsb6W5r3MjbZL62BPMtDpiHrHXmrd2TJbRyeSof9bFZSgCnw6AtodDxhJrkHUbtLqdB6c",
  "key12": "SEFbZXQcfNMpkt7wM8ERhQijbsCkfbj95dxnV9igMRpQx34P8TEdJDnDeqjUwuXGk1zf4t8QvjUHXmo3CxBc1MR",
  "key13": "4yZYpNJnVTwe8pRPE3BfWov4tCmHscWxSTf4ARQhbyvHu8unBGvKUJpij9CaoTjihwFmKSjZauoqfosU524Y5fd2",
  "key14": "4Z38nR3YKGgtq5DvnmdB6sRq8Vvr15yoJzwuC3pQyTnpKDvURBC1XiprDGBJmVV9wRppTJ3pW5F9yvcz6SSVx3vD",
  "key15": "3bbRtGyoEsk52F6GjN8stS78qYDHKepqrkU1VCGFLExVnYBZ5PoGdJ9EbmSj6PHXMg25HMZ4YzogPaCodrnv9PDm",
  "key16": "2tN8cVPQUkoHqTfFwv61J6Qsh6QSJpjRszXbQfpxYARXUDvKQwbGJMQ6N2WjV7gi8N2RQSfV7zWfAx2bbv152WNV",
  "key17": "3XR5mJLjx1Z1ofHrzctRtHhVPRDP6YPSHHHehs5ZEtxHw4ZPUeFnRNUez59ToUe77YV7BQDRDYpCJ5nZNUcBeVN9",
  "key18": "5u6cJWP3A5RxZCkt11QuzXPgUqKfDQCS2eCqU7xNGNAmShjVndZzkuaBE9PMsZ3hpkPZs2MYvmMDQk7hyVcWPGL4",
  "key19": "B87Juf9eKaDwWxb2u4q9BS5qFYzm1p4TH5o96C73EWEvMZy2gUNg3UCXaF5rrsXTSyX1HVtcj2CVVWcjsFWYHaw",
  "key20": "2JDJyodQijfdoaqXBkkJTFY8yFkYGQX8nsDEADxC2HkX7m56CvS7uLHBdQ4HUwxikT1M2fY3gfLKPK1nqmTMyvJ8",
  "key21": "49dXRs9gBRM1YUm9VastsbUebB4bDqrwStxJeP6sH3mq7XugPFw5StC7uRoqA5uheQTMiF5ZkTMwwRZreztJ3BUV",
  "key22": "4WacitpRt9tGXqBeT9rXEziUhue1qQAUZbqQQ15M7XSuGSovZtpnDhNUZPxqD2SWRKgveqshUNJoAovNd9FRA99p",
  "key23": "GpehybWhXYCGm8fgZCaDhVeLyuWwdebZsb49ms4Vd7UajmWeVXj5eJUzE4UQB8qD2iTRqjHcVSvfijLt7V3mNnF",
  "key24": "2yvNESSzk1tMdYRnm74QtFBEmqYSzSzpzaYrD2XC1frGVwh4uunQ2hiQYUWVzEW7SqGjZ4mDcUsWH8RUxzYuueqV",
  "key25": "5fy9gBvkhbyJLzEo6xdHjAVyh89KXSCx8CYHEciFQsSxejb7nEMAuVWCRE1TurQ2essmNfQC4J3cdRA8TPxDzf2k",
  "key26": "5pzk3CGzsjXdRyCjAnQu3a1ndkJ1wa4UvcBKLNrszhCQW9sM28zXtqSN8bzyxyPVpE3BPPctS9uELZ5QueRGCzGk",
  "key27": "27CwAxfaoiFfboJ2GtzuCJ9L6jFuZAr1zrbbGP1GZrLrb3Y1DPnPk88NUVD1u4NmsLvgiuKSyFPB2mF174Jh3hS5",
  "key28": "5Ehfz7G2ubTZU9LfY94UxC8YfHJrvoSTkYuUjF8cwKW6fbjPj9tYmyQgnBgVjAB7dJPuFuxtH3wZ6SGug6Qft2y6",
  "key29": "UvALdXu5bZ96dzrT6K3SoriFGCmV22uWBVc32wc4BW6e8X4vayvjvVifDHBNSTdEA4KXnXL8prCges58w2N1cCF",
  "key30": "5GQQtnJZnWponAeEzUooGpbpqmeKz5sEG6fFcJg4Dynj8CAo18cLiRV83FVfvLaKgUobqwwZxec1sXVLmZ1ojDZ9",
  "key31": "38ZQFowre5fpd3aWaZobPhUfsf7pDxkvUx7y8odcQxQVSuhDLkCT5Dg5T4UNYDhnirj7jdyNLELsh4JaDuFfF1ye",
  "key32": "5g45s4uJS86GFT3zLUGcv233XLB9gxdCwZf4JnWhyAWcdNWiSeasfxXFiss3CBC4Kb7DCFujuSrea9zp679FMyCP",
  "key33": "3e6EyvwSKvyJTQpfxDASfq5KcDsCn9aQA8wVxro18caX1qRQ541vhxCj7sRrBp9HBFGAModCoyCrNMFSE64nBxzU",
  "key34": "5Tv1j3s3SzcFxfuniykN8idLmaro2mK2GJZs4oJJKKshiZQJXuHznbaiUdZdNx7DtdSfEToJ6GeeeAwYqFRp1Tcc",
  "key35": "9yHBQ7EdSZc1QDWQcN2dwEX5nbGkzmKobQtUf473AUmmTdamPV1u4wG677NLsC3rp1EaVQjUT4uh283hQP91s5J",
  "key36": "6SpKGndFA5AUZGGLDhCwu7mVYNyPbF9Nje9K4giDuztemnSK88jMZeEfTubhhshjQC6L9ft89ssira2FS2JbCRX",
  "key37": "2V98LsqHPwvv98wiEVqvN8VJHd8ymfXrzMFMSCKuzF6Uzg9aYSgmpnq2Su8LbfSPwQPfV3xSWCSguHhPgacLkxim",
  "key38": "4WnuCAgFEtub5vc7rQWrnek6VwrsFVcD1XYMngwGHTbTXbNZ9GdNK1VqcfmAPzdydj7gxuBdy2VjAYmTCi9FsEH2",
  "key39": "Q71pKZ5oKNt8V3PNWN188WPbUpPAw3n8FgNyUQb8mHHWm75AW5YN6V6AhokfEPhFURopWicdFWAvVsaqoDjGmC6",
  "key40": "8fFPr3RxxijJ7pHCKRxZLnNVz4faAfj5pBXunERbePhWSTJTT7tSeYXCswZ6nHNUHDG6CvfhrHMhWT2rSKvhAex",
  "key41": "3mJhWKcpgNSr92vqw73AcVMgDdZ247NNxweT3ixxn4MQVK8sURVgrSdpDXxRLMpNZLmJR1RUy1ro5jpynpiZBkEf",
  "key42": "44VvojofHGy6CTQwG2bQaykDSpQhWYBXjCzWhkhLJGTj7CSMGVXdRDjJJ7nCYobZH4MPhJ9VNRGbnkvubF5qcuWE",
  "key43": "2vShpkvkD48XvKpb3cVK8QZ4NMB4pPjCnSAaTb5R9nF1ZrRY7qEbEGNomRKjZFPPQJCEXuMYzBvNpZfxbRgL9ahU",
  "key44": "GozCqBr2vdf3cmZwVUxtqyFonfQdXieRUKo6NZq1uWEQFHzmjggMyxidHGoPNgUMZZ4JjimLD6bVrfNnujiARFm"
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
