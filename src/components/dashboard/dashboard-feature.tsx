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
    "29h6XC5PXmB4qn2AuDYxJ1NiABYGw9yNe1FwXfWVs64CuWVL4u5QzZp79YECKWQ9VkA1Puu2vG7rHQTy9pRYS63Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aegNnwRmq8pmxgaPjqyTHEdDqAD34hdQaKMLtGXvKQtuxfGJuxkpZoFS2r3tkK4CpZzX6U3MuFCB3J89LDsKU9D",
  "key1": "45ZfdhiCf2iXjN27TQLqvWVJUHM2nx6Wvr21a52zF1zyLaZjSiFdAc5rJCP6kqoAJ9me1ofSQf7FJqPLedqZAook",
  "key2": "L6sGYsmT2fyca8nsaSpnmbU65Qwz89Y1Gjf9S9pE9wCpkZML32UtLAAkBvjt53khab4dCGd7kJ1CmXGur9ZV2CQ",
  "key3": "2B7WWPeg9stSB1wHRsB9bi4jfxy678fGmjnrd9hjRhxihszXcGNSz2HBB1QSpP3LTMtjXWnENr2LphNECGHTKQX2",
  "key4": "txw4H9cu1cRwe5kLVFLGDJa6KuH6PP3YxozFuxuw2UQMRgRogULMQo3Ne1czpEyztmJmAt8Htv5PBrAbvbSZXWj",
  "key5": "4DJVXkdQsGDcEfCvGcePLjmj2NqqLzEoz2uHJCWC5c9BPwViFccuVXBigWAyewRAdECT5JmBaY55yF3sq3sMcLe9",
  "key6": "455JPGPxjtxerVCUVpzhbpPg7yD5FKGdxatbW2n1DAnG5og3DK3pedXs5XqQEZZmkUeCCkJdw4DEr8UpSVHcaRpZ",
  "key7": "5yKojHMTypSgME3xF5UKk5Bg2RnxG4ZmejLkCydkppXxPfBSJEDxRmEkPYuvAftSa7em1JATYU9y1zZ37taoPag2",
  "key8": "2xy5CLQ9ZXsthpxVyD6rRpWfor3U3EBfoRMzhHBaLsinxjecfwpcfFzL2jk7aNrDvp8dvZ3n4ss8UCfuZJtX9a8i",
  "key9": "3R6o94g7ztEvwYioHjazzte1AS8xJLHrNc4fZC8tqx3aVFncunGcndm4HcPCvd8TtVySxGDUweSuAoHseBhhfDGm",
  "key10": "2rVPSy4ADhfQQySabreRU1AkaRFRGNoAX7NaJFTdmNdD4ZyivTCryzpR1GVHn4M8B4eao6hB9Frgh8dhDtq8a7vU",
  "key11": "2dNQcNMZUKRGpoa3H7Wsgx7hd3A86Lcn6c4JWtYmN2drsTXxs79Rkp9WyMAm6ymHfL8uVPYGNg6zxAoD9nb76nN1",
  "key12": "4GwoLVQ8FaYJLy4ApF29TEPh3oYndbSAT4rqEKEaNtLARntsTzLSMfr9het82xsUR5MxG73BRroZsPMMjYfHGf8W",
  "key13": "4q2sQzsafYKuRSGXXG1uqXTSEeZLZMDUXK2ShQ8LyYqCpSPj4EnUqoHwEnG13SXufagLCPsP3mUrExcMsafKYa8q",
  "key14": "gPUDRovz4X77Uaf23ZUJ2JtU1dHzsfL4RQzC7Ud2CnBU1XahE1gabN4nxpNUNXJXgSHv6jcB1zDjuPzbuyNPXLj",
  "key15": "28SJAfcbjrScuGbNNRToJUHkBBXadeBf2r7ZWTUFEhwBPiCkubr48dwCBy8ug18f2Rtse22vJtnhw48oYNQNNvZH",
  "key16": "5eL9guCKFE2aQs7gZR6RfRjNULe83Pyimdpku85ejn4UjcormMHMyNQfHVnpYTdvcugn1jDBbZbFDVGTfPb1Qa2t",
  "key17": "AUjZo3tVGZmtcPTnoaJeT615A8viAxytNE4vhgboRvTGr694GjkepK8d46mCKwYMLva3Mz7Zo4itT6zzq81MMkf",
  "key18": "5g5nKe8vXTwhX749T8kLqGjgf9DyBN4vZHfkuBc6EosMRCBRDL71895bS2pvw6xzXYqUeU3DuVtgkSjefTUsQGon",
  "key19": "3apwx32RhS4MTJAcuGhHZhyry2eVQAhGNkLh1e1VzQBbxRhQFmA24pgkvCVcxQ8i2tSr7kVeJo1EiFtcx8FZcuDu",
  "key20": "4pLwYhrj1vqVZ3ZfDjVEGJJKkbht958Jr9wpfqpZdtEURj7CAJ8m9vpeETweoWnQ3pKRjV4aiL6WY1imS6GyVqcZ",
  "key21": "4qmwgt2ibrFwBT5UVnxkuU5UmGgMkcf4dyahNtfTv29Z9UEQ49xGBrahERzQqxLonRcDw3qmHrAQb7qsJUtwjV8P",
  "key22": "2XNCdjJ1SiYoieknZLtcEP7HzAi4wLCsUL8BhtgJBE4xcLNx3tNbuZuMSiUF1H77jDHDALxc5L7potFsUJK36aM6",
  "key23": "4uCaeziUWLS42VmDcB1E73u76FV3YG7fetdLNUYnY6xf4VJGZurNhX4RB5WR2wokeBMgQCrqr5g5TDRYsAK5ozWb",
  "key24": "PKUB4efijqRdJwFc7K3eQmo9BDR5xYw3WdQX4E8vYd2NzHQde6n9ThixaHwVeB64vx1hAajsaeSJCerHjw8izZD",
  "key25": "2zcUoTamcR7fE5dmfFRT13LjfME95VjYDqsMKf1qBHbfmPQNqquw4egipooozZHirXZ29mLrtXJL56UFhPJAfxSC",
  "key26": "2x4GD79FELbVBx8dHbCwxR4mJMeBmhgPY82xibdwsU6JqYA7muoufYYADWy3tZ69mjbHUMBjdZkxT7XTJm4bvaX6",
  "key27": "5ovbM9xwYsYbu69U9N4o1FpKKTZHZWwgWefpipBwHrqNnz39FjybKmChfHADLWe65M8YeLgPWiFWQsiHVpBLSqoa",
  "key28": "TdysB8bFtYf6z7z1SAkaQQYasGEXb1SKVjfDHGtSSb6ciqc5deqRGLMJfUg5hiXSorJJX3nhdyzyA7Rg1rLrBaH",
  "key29": "281dJquSGy8dbd2ARkZsfZBMfisV5rJ8fwUakJJKjL3yokgo2furgwrfVeCDuDCJEcszVSdFvFE6dtpiineKcFm8",
  "key30": "3oSWNZRuErzBvHmCNWErBNfwcwr2wheMeDzz2iBYLFAp4rsJuUCVQW7jqTV4DmFdAotse3FdAeuB6GmEi9mipYhB",
  "key31": "2WkHpfZ5rTYBMBR9mpEgQaKEsUP3VMntqnALMDCLyr6jTxjoJUrx5xVUybZmv4Hn23ZCXU92WmgLHSdSdMs2TgRU",
  "key32": "42TtPsPtS2dBwWiAzw8upcRhPCoctzSoyexxAhgAdUrcCinYSvb1UNWgQBVEL18wvqPqMbqEWeLee1os7faAhySX",
  "key33": "49VcgwBiQLGrAPNvCaPKA7qRucMRwzTqcWL9Znzs78Qj1ug7ufkrWRNf7NUJRVpfK8hdNqiUoQp1sTQjdhMxN3gt",
  "key34": "3Reo6W2SaLFuMRqDqCT9SgbMQ9xMW4tN7RpNVDFhS3mULYE6rMqLfpWJWrnSypDJqNS1YcKRhazYeeDbGMYktquX",
  "key35": "61eQENHojUHqha7MeYTcNfcfF8jG4pdfSABYcmhWUckehjBoVuwQusb5aFXdSndTMXXx9yuFDkGXy8FHBBHPvN7W",
  "key36": "3qNZFarzyz3LTd4zR6fupNGwhxrU5uUo4YG6ButRrHkc7Xjfmv5N9sfpPesXgYKwqytJEBh2wCNveXKQ7YmwmRzc",
  "key37": "4Ga4njpnAy2vUbbepk6rVV5BywiiW7UamVsrix5hDh4FRid3rhvMtA1SvMQFQie5Y8vDQNehS4tKCUHrKNHFWRnW",
  "key38": "3qygQcPp5PQ5imcar3WufWytXccLTkvxJJNF8u1bnBfCqi8hYqFvgdVQxMAmPxHP95UZR1f93yuBitSYMtNEJ7Mv",
  "key39": "4JFVdcdpnrnV2NKoK12P9SBDUbd86FVr51PovaRKFdGGRkCJFoxFNibNxHvwbngB9YfKzVX7twP2jko5DWi7QCw",
  "key40": "5kzebpKKpe7pxUq2uh4SR52fhsxTD5icidZcyfp8GxH841CHjkBUnysFt3Z5jSxGibF6XQLyW7pGzXo3qCZYiNL1",
  "key41": "wTpZp7WfiExBqjUtNKeQoPiJfJ1zhU6eytYQBBB1LNn8bgBvYbEe6XMdmrUXSmqaD3kT6mMHB2YcnSMhdQ18TzF",
  "key42": "2FPTvUEDXxXtZA22KHwTH7c9MJ37wAiRtCNKg3LYZiZJqU2JCQJqfFai2VsjqqZgapbNGvF6bdjzRZ7gJezZCkX7",
  "key43": "RWhaRVTmF3dEU3zT4gsftX7VYG1PUNGSvHJobHAdC1j3Sf9uaiTqRmnebXxe66n6KAXerDbyaztviGzKPASRa3V",
  "key44": "4ziAdt3jogsHisFMQd99QszDVKH1EU2cAGz2P5TotAiEpqP8gbWUYwPmGs5AxxrJnN8973JNgXcV1Nmjz1wBeWea"
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
