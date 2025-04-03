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
    "3aFRmyfMjwyRspyyfhdovkxHK6eLe2D11S3deSKbaHPJeU1a3aSTL7VpeXWK11P3Z9QmLQix4vV7i1tHFND2uhsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ySPCBXLjzvQMMiJc6qdB7AMFCyoEK5jpgV7RdBqzgyse5vPFJBCtCUmhyzDbzDg1RjLQmLWsTJPYPVktDbVwdZj",
  "key1": "38rYyh6DFh3HTt7uG7jZhKTePRASHrUJkGpVeFwRmCNyEwodS9Ue6nbKV1q31TumxL5zDtGxjAZz99yJg96Coniz",
  "key2": "34kdTab3BzAyHaMWFp1QWU7U4fS5JZx91HADmqqc2Q4bmQXX7nmwb1oyfPVHKWbyMe56PVXUXQ7qBVZSXiagxH4R",
  "key3": "51qWZ57515An3W5W6XZqiiuKh5vFjUBBCocKyRP5NwTQoogXZJt5Xr4fptTpsHmc26CpoF8dhcuWCnyaGT3F6WQM",
  "key4": "51mGvsyjAp1H6QpFSfT3xrJN9UqQVRHc1927HZbvVBF82oxjeDn8QqGefAew6BAzZPvQoj5Pqamhr6ywp8Potv1i",
  "key5": "4jX8F8c1J5L3LUMKdvYge3d4Hx2ciMMGdBscSbsHWUE2rhY4q7Nc5pvyR8u6PhYxd72agM4MNHr6wrxGWoAY1aPV",
  "key6": "5c75STkCa99ESukQcR1phEJUskxdb2uzPz9rXuuzbWQVb2T7vL5Sk7uezrsmhXyUpCsK12fZ3EKwK2Gu18MBUT8K",
  "key7": "42J3Ru24SN3UNCHgYKt3pkx5vSrcueHuPqNqPGY8ZqNAeP2hH6E7C4hLkMytk2xjTkpSCYd9KNBrZQ1aVj9wxzin",
  "key8": "52Ru4EvwkQkpXej1uJJgDDHdmDcBExk3yTgzFsBLTpaKc5RXy9EnUYKdWcbiUPmX448zueC88PYKY4Td51ueLtsc",
  "key9": "5QuDE8cRbSdQxo1PWZ9ka83nzfcqPe7v6JZB4DYPqnEZPkt2yEQ8H3wdf2kCntgJ23zQSXkM1n6raFgQS88gUFtY",
  "key10": "J6HzTvKFms2V31M4buPaTUx27f7zr5CmQoCfJcDuUriUf9hcMiKxAxtf1z1jMgtjuACnonUZzVq1wh365y8nLc6",
  "key11": "42mqUF8tMvqTRkyHThfcdH8NZcgUqyGRCL3i1tAH7SLtpJyMYMXcLURJB2nMp8N8Gq99EWEH4R8GLJjgniRP1hxc",
  "key12": "439AFemJxC29WFUfpXQhuv46VM6BawYfmVY8E6ZrpCHWoseDai4iVgGe4fgQwEpeQxPG8cW1o1eEbhaJnhdzJgEP",
  "key13": "t2n8nNVKbKfv2BJL7L1duruYyQykk21gr9feeNQyxYkWzWsWo2GHj1H2SJHrn1rUnCGBx8an548wWrrYHq5pUcW",
  "key14": "2RfWAQHpbWjXTS1QVp8CoQytNiQRTaHyUf3dpk6GiaLwMi6TYKFHJeSkaUr8PSvTDVmuHVK5D2FCFJmb8x95Sn3C",
  "key15": "2e613hDVUj7A6xsXSFWUguHnXdnQ5VnS1inu9JM9NgV36XVhNBWnBpgJYiU7rdvrNDq6nK6UDa2F2QR7o8PJWNUr",
  "key16": "5WPx38V5JxAE4TiFD8b49NdWWsV3jQN7NiXZsf95cykv2L2Kac4o8ECqvspGV2mzNuUpL8TJWXD7Y1WE2oRHNTe5",
  "key17": "36vS8tbRCE1tZAjLhyPRCNYWVpF4Myw4sKg5wKdK6a9CDa3Qf4t6zNeEipNEY1VaeRzq5CdsA2ogUH4DxFByGxZJ",
  "key18": "4tyjj4k1HWcLav2vUmroSrSqVqjNCgysk8XiNjCGhCBXMwxVwZudga9g9VStv5N8bXpLaEk6R8LhDfKZeQpTBoW5",
  "key19": "4NnkcD2Hxs7L4w3XAYq6wJKuZMnW44ECewyC6wKEnLKYqJh9SpgdcKEFCB1G2xftB9AHD1dus6irYcKAmXHhZt6k",
  "key20": "3m2WhBGVZuDUNPS2Mngx5rWcYTHPG81Bb7zzqgMJfD1huS4j7mRkG3uQukwShV8UHK2qsLSHXzZvD6cpTkZ2VKiM",
  "key21": "4wNnnF7zoBP719bE1js6y8bNxaSgiGcGFq9J9MXnFbX9r5XvkoaySHNMvkJRX6TAE9D7rL6Yr4ZrdygxxpCpGQSp",
  "key22": "4dz87bvb9o4RGZE9t5oqfF87JmNDZd7sjoPqa4fgqFeUxcPYaTjKj7XxgSpoadNoM1CwnxszxLofxH5yQevkPnfe",
  "key23": "5SEvNgmjvvHojDacnaqAibtm6uc6bBPBD1VYocJS3gdaqwtS3MiAQGhihB8oguJ5rVLiKGPW8ZeXoXSSPz2Mf6LS",
  "key24": "4iWrS2hB6NZY365BCBQuk69Ry14Sos7b21GqVbJRkPEVZXAgbSGzkfj3ZF745gYq6CdZCC3MQnc5XynizK6uFGJi",
  "key25": "4BaewUZEGpzGqNAJ8dWAcwUAKLpv39qP3eSHBqLcKrA3wT1uFMn47Wc2pkbmMM1hCgACwFJnHS6fTXhKRtsU7k6Y",
  "key26": "4HRM66KQafXkvWwGSRkhB6kPzkoxBsNxepnj4PqwGpqzrFBspYPHDnu84SGkYqF68LFTTrSn2uekrW2gCqWEHqGZ",
  "key27": "4M9qxt5nkjTKQJdGdCsiMJ9eXgXQ6oLWnC39NWnpapNnrt7NMoh7LLFkUXQNAL42sexAYqRnUQWHa6sxySwvk99M",
  "key28": "5U7nvBWNBtHgmeAxCkMRTZRMecybWW4n273j3Nq7a2wjBqWLfvjBhLPDXJvtu95gBS6UYqeT9asCFPhyQtW3RHFi",
  "key29": "3qbWrZ1f6DV9GbGBeFB6LS5UQcwya6vY7qKfYrbngQNF9fg6UQAQjFC2omipZ2DhMAZTFkubarpgoJHDF4hV5bT4",
  "key30": "3kkxgjy8rTxxovRmacHD4UBiJFsd3wApHVzAzLRRFuGzNSCTmzoGZ5XK5Cb5nDF7Z97uwyWkAjBVZ5TgWJSb6hMH",
  "key31": "UgqDgWTPhSmXrkuU8pF4wuQdKKJKBpxdaqYrARPnMNAkJczrEtMHR8dqpSopNiQa35K2B3nfYUEcFVPBdbzpkTv",
  "key32": "57SdSDRoTf3mXFMV6pXG4mQKByWFFV8fbVe2Uf96JKEXoSN5XyLmVrXGUuirKccR2x8orwUYoqkrJyydzphDGjCX",
  "key33": "4t6pMLdeLJufJRZ5Pe3Jfw8yqDEbZE4M7cLtuyzveoRnbKLSxHDqZ8oxMJ8XW8BvU9Y5BitUPzt53KHdG95yBJ4b",
  "key34": "SwyJ32Do3ApQqs4gKiMUhcxTN4cyZPq99ffjKZcgFAwpV64oZ94Kh1C8r8KmfLGYgk8AgTihnDFRq6mTcy7BN8x",
  "key35": "4iob9j9qqh4HJXtToAQ3nQnwBoEDmDEZa6Eo1uvY2cbNm8xA5WMNRGHmLB553dWLiPsVTPeb9Q7KRPjMFrTM9qSV",
  "key36": "3e3QZK7Wb8kCa6SwymDLuFSuMY9EDS26p1BdDDV8zCEASjGw7N5SvigzZtu9MWWgB2VuUg5dLCqLJqwi9xLKqrrc",
  "key37": "EgcXvQnq7MTRKYovytj85RUd8sk66RD5SHYuzJGRtjMQheMLaCNfLsRPf6gM1WiGzRjFLGXbgoBP1gNEt7aq6N5",
  "key38": "29Rer2z2baH5bDh9h9sPXxbKPycsEdCridkmXfZTvajS6mnT2Qok62hYcqdvG1cubZ2L2suhFFkC6XXHhcV7a18x",
  "key39": "2Ld1hHEPAP2tm9ZF4QzhKt8gDYfz3Khbu5R3fecSBkQQz6SatV6pDiWxjdwG964M44yjxJxqaWeYdsWaWkbQt4jY",
  "key40": "2HNKeN37jTPpsLTFZN4n86VrYb3CbJxLsajB8VmKnS2gQtnaFiVdKG4F71pZYS13QPQQRkfYiJcf1R28mbV9zjdq",
  "key41": "fXPgGvv8LHemTqVHxSnm5J6zBwiAEuuBVHN9vwW2EpBoFcWyzUn851dniRrMqaAJ87sedLJVBiheuNHkUb8a8qt",
  "key42": "2oZnmkAiwXZdGAtNARWSQcoh8E79hJHQ9zrELLvjmHydQuAeiAKXWAtumjSbsZe8FAGVSndFsSBPX9xfU3WCTDDG",
  "key43": "5A9zwRjM2gvyKWETJj74EsDdZF4W3hrpLMTEvqyYU3oP7EnumdRcUZZSPxJonExSzK9kQNqoY3mfdsqr1iCr2YwR"
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
