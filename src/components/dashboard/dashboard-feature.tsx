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
    "5d8wT2fusUUaKAiBTKASfbLN6kb6W9UKkHPs1pw6sFdaXiUD5pRP9MSMKrgGg5YDGUPjCZZXtvQPtRKkNaA8Gtti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jym7b7UvxHYL1mm1kkXaQQGeqqWwGQ29z2Q4CLLySgFF7t6cueu9bRTt8RMc1bg8kKughPbTptSDtGicx4AubpD",
  "key1": "3xSz42Gw2NmGmQxJxpNjQkK8wKNMA6ECa43NDcsLGC6YDiTvHZska9iu7nnpeaJv5nx6bLWA7jDVjp4g5uVuMa4H",
  "key2": "39LRA84NsKyXtfyG3q8HmMfk5jHXbT28mbLtvxysfrmaicr8FJxwRYYGME37jKzARLNwAEayqx6Rk6ruwGNx61ZX",
  "key3": "456wexdBgGZq6W9xEsF42w4ykPRtqLJNmnmF6FB7scPsXTuuKwiM2Hf9XD3AP791Fi5tMw1tVdhdPBq2Ufgjb1jE",
  "key4": "458g2mj7ijy8mrhPPokjERxTjvfxQBchaiBwtkFTkEqozNLF8B6V6nXdNkepZ3D5quPXrFneX8YCEjeQYf7RRu87",
  "key5": "2hBtqgsrd9fowJGgKdoSqyFKSeckgxqPnmwvhkcLc1fiVNQ3FqeKzBeKFR4tzSHaBkFmycpsR3zQxM9MARtPrUEn",
  "key6": "4wuSFbN1EsWf89W55WLnb3hDvmv4XLUyAhcDLECMxzoNTFGGbttEf2rtcfqThgb5vg19Z7UXwjy5FFF1wGtt26bG",
  "key7": "2q5uSWzpq9kT2iue75HMSTd2iCZEgKPR5gVSpv6avhxbWxJyCu9gCwjavaVfyr9QBXnm4sgyADEQsdyNmmbwHkVA",
  "key8": "ZBfteSwqUdXPPSKa52wyQyBryZuxDAgRKDTteww1jVDCALq1G51L4NPAEbabrkDDFHtuHLnN7X9orXchqamcid4",
  "key9": "ALP5Uk1StZodA3bVQc3hyvsPGbFUDWycrtzZN18tMfbztnDzhSaf6BfnyacVfkbBnvGSPgaXYgnfzCuoczyJfX4",
  "key10": "4hix7HD3pu4JSupG77Mo5swnnDXQUKQiJesrZBZmtB1z3m4YRMH68SkS28chdr4cAhfRwrE87TYWBTuCC7BHvvR8",
  "key11": "63Kwsgb7WKRzWJd5Yng6DnWJVqS9xzowt5A5Ph36dCgXvA1f8qjcWykCStbFN9BGsWye8ZirCPJVeapRzJLS5HEE",
  "key12": "4x6sLbDNypyRXZyp4vkLD27ETmsuvF5fvgxkXp7Mh3PfaXNTP3N53CHuiJMRUEpYsxraMYCemLVeEUgxt2UivhVm",
  "key13": "2M9C21FXyUkjf9eLwiPvCz2XUnndAcE2DemhTDvj2H6LZBNZBDNVWWYZhA1o1MiFRMp4dVCFcTwgzfngf6m1imRk",
  "key14": "32HqAQGKKZ5ofJPR6XcZCY7JXoN8kkY7THSbVaz3jEKCFntHxpknrpNv6xBgVPD9octzSZTAVZgNvDu7o7FVL5Wj",
  "key15": "4E3ZWEyJTsQxDYWBdVyyjgycLRx11cVetDNU2rC5odS5mCVL1EH8JK8rwNyH1LvjWHqR9S6fkmt3wBTYt5sthawz",
  "key16": "3QfXmqN1hVnREjmVmhV452KefmZWqyQccr6nLcEww5QfLrFt63XFzNP86LB2tCFb4SamEPnaJgbDtQT4cruXyF7w",
  "key17": "35UtjH8ovBWH8rXJ8h97o41u84NhoqG98Lj2yMxdijTgNr93eeubzSGsUTcXYFwJu3pW9DhazFy1gPE45XwPdMzC",
  "key18": "T2vKn7JMedkkvwv6q8dTCCozTzFAFqcNtwNBkgZscCJLq8emRi56SYveAW8ZVenwMDVB9Rj99vuPcTTS5RJuE4W",
  "key19": "4T5AU6fGH5u9Y8LLrw6iFe31uYHLoczFzw8CrViHNKUpc9itSsQGACb1jCdQQFigG6waGQiTXJFN6uktXyieBoDT",
  "key20": "4pBwfgkWhkdrhmqSCYowk7PC98qUZWaFizkZKDafQgaTTTgPGmj7s4QKFJp1rTumZA3gqJP2uuerkbjMiV6AP4ke",
  "key21": "4FrEoXvxL3dJkUGot8E1oV4XsArPRXHWQcmrS4f9boSkhAW2hQ8f1aPprXADyMH6aafmYJB71P9svq1M3vMRnTz5",
  "key22": "5KejSke3p7BdYiMKCKpmeGVFqYH7TNtnLQRnZo8PNbfeMMaC9Jc9aNTs1qTgH4chNgnMr4B32ZwwTcSMgfM7esNT",
  "key23": "2BVNMNjvRN43JyXqJb4HPAPJxpEqDGE83zh7iH3efnHJ63xWKamWJDJVrCCSjjXk7E84AfcwrirhWK4sgdi4ocoQ",
  "key24": "55kHva93cdJY5Q8fvENt3i6h4qPxCpuLSxrAkgNQ96RAoKopwcdk1nmcao4uQSLMZ5Dj7rG6BWfrjSWc2eNr7iom",
  "key25": "2MwGGFZEVmp1BjqRau1YATamoFnunK7DMsj6DMHq9eukC11jZAdsmtVYVNJcLfM3GuZiNeGvwBmEgyjxnD8rtJWG",
  "key26": "2UHr75QiyM1Ui3LdXT6BgcczcEdXUk5JZ32vC3cwhgdCQJs1i1bhB8GXWaXZywt5FzNk4M8MwxGyX6LsSF97m1ZJ",
  "key27": "3yadcHqW9UHGsRFEoTHkBchAdNRqstEXycoN1moW8tAEWtTbgZaFL2HgJVKSEQnGuQMwAubE8zYnrCkTyzGG1osR",
  "key28": "5C2bHibekSnAuc1MecWoRd7EMGkezV5iqqjmZenZsZysYHym5QqNV8BPJM6kRU4hooTLNDxCo1QCBP83W7GUarH7",
  "key29": "5s8r2ZJg4XspM9nt5frgsDKkigMdW6NvYmZ1sfGCVkM42s7ZbZnTNghpFSKdoQfJu4YRYXVTYum51dkLQdEfUAqn",
  "key30": "41CvkeRE3sPTsxDhchc6tSYy6jzd7PSzvAPD9VHXP4F8QHRe1dwRo6whqQseBCt54zSZszbhafrV59pLJseQA6RR",
  "key31": "42h1J9Ggx3csHrNtBpNgk8qBpYWXmNJnVbmGA3Qx5pxAgj6cgHYHSpMfuWaJ32sGoBRx8atM2DiRXS3jfSCcw1S1"
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
