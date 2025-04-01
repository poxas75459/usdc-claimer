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
    "2fufCPMj91WaeAZCVc2QdgpyzQ6uNT2MgrPRgtnkXf787GGdpHhu7nfrR55YQdTa6hu5fb6sRmEaJTNwzUHeV2Ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "396Aq3jdrae34SzCMrM5vHudAgBwSRhpdN6ttF7bNHz8hpjmwAwwyFhDZ3C2asRw3HfsWwdv3hEyrQ6TALTrm97Y",
  "key1": "fdSe3JzvD2f66o7Hvnc3frkzW72jSXn8VxPn6ZRtzHjWFubAJopaqvdbZ4Etfwq24PhJVn9MX6DqM5WbvHZsA1F",
  "key2": "28EEueoYuwRUhSD4v57R6QHcorPDJJ5YmsE2cv33NPk9rnsH8zuNDY63jxD85t86nVTtyFxaYxWpmPjNDVQ88QfB",
  "key3": "3mtYYUQtYYCkS18189LWzL76dc2Krjkpcp5XjMDz9DyfdCR18cstyyK43Nc2iUGvVjum8tDyunHDNgp3z9XMWBMy",
  "key4": "JQ7tTCiwDzofE3WFCedEctVnwJhSCFi5DuYSsVb45cTyQCu4kXwbSvjpkTghUtbyY5gnf4juHKKdsS8PtwPGzRm",
  "key5": "2qKqCpz8QcDDwoNiYgyzWQdpYoM1PEiftU1E82FLmWHgtoUYJSANtvpTPf4bMX2teeEq7r1ngCeu2xpGLRurH7hm",
  "key6": "37aUi63CJnJL8Vhoh7RDm3FZZyfe9q1ewe8gkcrz5ZcX5SqNqy7BeZQBLkGNv4pb4Vj4rrgFF94Crcd3arg95XKB",
  "key7": "3GwBCTUUyuFkjXxWioLfpaYM9hvDkuzmxvR9ZJksZEFyXrtKpaZMNdwPT9fVZFK88Z5XhNXiy3dGUCey2Jy8gWas",
  "key8": "5D3dDGjcnQo8UPoyFatVE5rQ4ysbURLhX5Xys8YSV6thG6YPo2LDTBrXwmwBezfefKq9a5v1N224D5fZXSNAxRMo",
  "key9": "39h4jS3NYEBfm1avokuJrBX46MSgCCS7AVR67GR9QyHEWxHR8dRpaXeYUokaHtD1MwJau4J8X54fqXzSZ6mzrKUQ",
  "key10": "3zpMxZGV42FjZ8VUbB8b16kWVu3MREvL3gakbauVtDCQSohnCAds3AVb6yMuvmHF5Sxuim6T2Gas2n5uAG2fZ9fE",
  "key11": "5ybg2WiAekp4Zi3peHVPnELdpXAhU1UGQhudjNurhYxVySwipykBdTmg1UzjhMN7KLJMfUSWu3e17M5JvuZqeAZL",
  "key12": "5zrxT6oXSUUx6Doz2LbyVhY2SFtjn4sjkwUd4ZvveNFF5vPZpfDb1Jobd6nHnpzsamRK67gDmc9MZxyAadtXsrjW",
  "key13": "eNkTRFiJKYNZco8p94CZrPTm6wZhD2QgPaH6onrdT7uzaSzRBJvHPMJxEoULT3xNRNnboCygtL2fNPKp7aSHZrf",
  "key14": "3dzsZTE6NdDsJmqSTSm55xuMbhwLSfdAjmfiCat9zTwAd8dKmH6gASRY5XDqsuVt9u6im4dfaFxRUmuGeXDswJ3e",
  "key15": "kFSit6HAV2EkqMpeSTmxYSCMuwg1qkbU3JDyHA4ZgTh1rf7UQJy1UyXsWC4LQTvYES8pJSNG8fffGcu3nhrT8ef",
  "key16": "VvF556cS2Fqh8TfmYFs9t8oafuQvWR6GZiqppKaLFErUYtNGCBxueGpzYUiats2ZdAu5GTGumbBe19oJYbobkLz",
  "key17": "4U6MUYT7GPN6W7GLjifLKKikqJvKMXwNRiRfyRGKCyTaViR2NVd86RQR2ZiGEP6Fi65RbvMfmxctpivAVhZsRynY",
  "key18": "cjzJZssrSnVSsnRgy5yK91ddimPKmyotYeX2WYD6gt7UocGDAsvhFWmMi7b9c3YReMAHYa5KWEkuDqW7YiYWVy3",
  "key19": "QtF4sSQBX7f6aUkjh8yWV43ipnLpLJ2hGuj3kUnofAxyhyQZT8MDZvd7BLzb4Q356Yxct9a3bcy5d8GA2E5Qaoy",
  "key20": "5fie6zYi4BiHppZPVPFjRiNLaRWyJm1iskUdnXm4gx8xWncd87kB95F3KqvUfWnm2L1VEoH5vkb6uAK5TXAqGLTj",
  "key21": "2tCycTAXVnw5d5aptXSv8WTxmggsR3cC7GG4sJX1omgd22EBQbRmkBvKZ9npbV8MaJUbQEedJy1E4WUdiBWcAKFW",
  "key22": "5dpFvXL2nXLEm5dkEf9n4JNjVsqnTwryhiQyYXi84QTCf9PJoDn5zHMPZaXzTFKqSC4TfspYmTg3xHLi1Xq2utVy",
  "key23": "3yJ9pRBmPaRtDUKuWUZ7GqeMBPB7d1Neya1eJtdkGWN1qj2TxVbJs9Q3JfsYLbKTf1ppB3eA9NhDCDzG6PwJqib2",
  "key24": "4pHEPb7k7uLN76vG9easZgW3JcQoASgHiTvXodvtb1EQze2FNVsJYZzBSpvxNcFLDwh6E8eftYm6LoZDuWFEDLNg",
  "key25": "3wbXuioqYkzxorfikvAED7M9F9ZQytKAzm8qrB2frb2PkNtciNcDiKHs39au9e8XpWbnNDxhEGkho8oob7hwwLZH",
  "key26": "3GPupgXhgmeEz9itGM8VNc4gaUcN73mmz5yJe5gWPeyX6Z7YzvjtUHHFFVmm5Wijxobwra5QzXdBFDkZes9EsE8L",
  "key27": "3KwviHz53rBep3E83vQUqEMk7bPAANUsXPu7jJ1adm2FWAmpTLEfgjREkW4QiMU1kTJntTUWozs5ByBgpAu2jXYS",
  "key28": "5BEVV16ThC3Sp4U83bNoS2dRZTVPraFHURmQjk982prvnEEUXACcU3R1WnmxWhbTCEmMZSRJtLGAJHDtLTNgp7io",
  "key29": "PMW45F2yQifsCkn2ujJSUoZbX62AvquRdoksPNPNqN7STkevNWeUcX1bgKbq3jCHchb5atbpCjEXUfNCBUPNVJj",
  "key30": "4vpRHWemBCHy8BnqtRhbdaRUsnr9nejWBMXcNT96u4UjUkYqZgSSWaAvcmZFyRknRgZoc3TU2HLCSpEbs1gN8RL3",
  "key31": "67HtBD67zKPUq5Xm1wezKRU6JN8vZ5fKfz2qKMp4odboFZniYzopDDnAPwmNYEV7dQaMeybDpSpBLbkneg2vvgg7",
  "key32": "5JDGoXaAzTGoedPG5VwZajcuuZkunUaMUucYSPmKVwuzrT5YQ9oehXv6r95KKX2wBo8EqAdi2YhD8rEQjxHb5M1V",
  "key33": "2nNL6DVW29R9YiHxsHdAvc6XgzYmaPreT5dDekKxbWa26d8j14w7PA5Juh9Ws7RRX3pqjpULQoK93jskR3Dp1L79",
  "key34": "3p3TcVXjYTEsbcorQas1H3oabDAs8DskwEgBFaDf1mgWmqP6DQgA1iKQsELZg5j3ZQVCHCd8KDD5vwMoxdJNpeA8",
  "key35": "42Qeb4oWsk3P9Gg9aZNbuUjRWHi6HQUQcTB8bwAwcPDXWRrEvYaSXbJyHATNBP5PNzMJf8h4pdKzwJKAENR2aDiJ",
  "key36": "GSnABcPhi7VEM6JAhF8ynyQzGuA8omBVACoQh7soeKaGBTNT9xFyUXGGFt5scJT8zpNukS39xgJZzhPjEEUC2Pm",
  "key37": "3cMMqshYhhd8TPUZFHYTdivY624sudhX8soR4FjrAMWVN9s4ctBJVTyDvgZ7kuv7VPevmrfWVFJNDhzZAAP4phSp",
  "key38": "6BCP3GK9C3cwtyb7yZBLYSp2h2FQA8Afi1TPEDRaK6TwFU5W9Th2kRUGCYK6CbsrdNS7QsDx52XvMXTsnh6SCNb",
  "key39": "2X45F9bfH9PATEUqyAcanymWdTo1GR2dUCyx7ok2ZmEJsaqSuQGxRWUpXBdK4GeY2sVungCzghwE1GoQXNCGyi5m",
  "key40": "3mcoHQ1iA9tXFaGyaet4Hnu9BHazt6M7kuSUmX1BrWY4SJcQt8gdX7F9BPcn9GegJNu9gHEhtUQ1Kfm7pFP8Cpks",
  "key41": "57Wr7m5wBpWfgQK4aBFqwayGPBp2n5uJmF5QcAZkoT3o55Y8sb7Zh3wHJaeb8tg37ih9R1nTY3qP1oYmEzMH6Rsp",
  "key42": "5Mv5CngDUgp1dNyw2Cg4x5gyfyBbEHSpNX1gx9rVMqERKMRM5SudjGUFG8AuUbVhnm1LNEDVMTuv4oqd7bFZdADN",
  "key43": "NaEL54zjgw4QiMZSkdmfdbvxg39BPDJBiWGb2U8CWFpjSZUqwoK4NGinnZHfe4LxDMeyzjD2Sv6w8Go2rEz7j9c",
  "key44": "5XohdZDRuwhPL3QLD1GqWDyAa6qvwB9fc1czL8o4T9YC8MaevypYRbsFo8caN1wQ3oxy6bWBBdvNsYf8Pq6WpkL9",
  "key45": "bsh5143McREjygKyA5MLfLue8JMKhWkLHabNgHUPHkL8J9FHcBk6aPm7X2dPN7pEBB6XpZ35LRgGQfk2WB6AARp"
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
