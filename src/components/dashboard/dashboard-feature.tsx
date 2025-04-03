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
    "4bPGekDaS4KoKCgt6pPHHJUxPCg5bf5KY5auWx8pQQeA38JBSyENchfD1mjMj6pGVZQ9vz6N3g1DXUuA7u6DJM9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gqagy33Kb6nE5WGuJFVAoE7KDY8cXBwAksRVKU3uHBnUTKtYQCUSM3k3L1dnBJyLh7wPvVBf2xs9Hc2Fh1YiSTr",
  "key1": "39uVz111trPUDqYRT4jA4SWX5pL25AQ3PZ2t9vP4GpKvXZgmSzfw53b96DurwpBZm5QG6Wz31WvA6ExSAnQrXVbQ",
  "key2": "53jFT4pC8g4gCP8zt3SD7pJNMTd43fC47nWdDUesb5MnozD3aCZ5BL6xz3srwV2nrJfavbptpG5Pf8CRa9wZcbAi",
  "key3": "3VrwLjm6CASbX9kVnjnFx5qG1PHy7z5RxdfKLPyPQLsqync9jsENGZLt4vGUgg3Kssp6TVfp2keiWbaFDASqSjhi",
  "key4": "3tGfyFUtdvL7TXpMGzGEBGnkJYcQt8fiK8U3xQ4zJoXmMMkpTtpFt5Aks1mDDBaxaji1bPjo3GDpWEWzwJACak9v",
  "key5": "5csBMojbWZnBYXkRKAr5EgXvbAZL1ct6Upfx8ETJQaE8tbTNW47aaGaWvMShYHK6WG7T4YhTebTJaQbzuWpnqeiN",
  "key6": "39XtwZVaespY9qHUThxqx7tSyamHSj4AXbDtkUqVYuABb7b4PxZQpPZkuv8fdaetLxKgKdvgaQrwrKQMGiMjBHV7",
  "key7": "5gvRdubSYc7NXGctPx669KhdDvAoafizUJnDfLFQt6jKqwoiL2N67FjUcHnEGp8VQf9hXxXtd1rLexHeAr51t54F",
  "key8": "MSNttdS7JZzsokowm89Y2QMcwSxa4pBNkHx812YvWkmQAYF2XSaSeR6TR9pKVgLnBXn77NfQkkiFnrJcCJqfPhb",
  "key9": "58KJFfX1eq3ThWaFoJ5z3tg8apJPVAZKsBp1afHQUiXMwxMVpZLk6pXn8dvWyKYnckF9bKYUiuuiBq4UNVY7D1tM",
  "key10": "48CxkXoePcsyMT836N1KfXAF5uocDhpdTmGpW6BE8eDU5vkEjzRScttTQ2YWihaR8cezgXSSv67Jb81vDdU9pvVG",
  "key11": "5uoy29i77TEuTzuJMo3sQdp3n4EyBrPi8WChD4poS3AqAidevWB6o1QrnaUjQ9ANUWymaBGkHJDHvhot4JRN8WMU",
  "key12": "5Q8LA7bSrSz3PSBTdycS9m4rM8XSxzzGUZA1W3sejSVkdZNMUtgyFzJnh5LqzZ7Wfg78dByPZqTGPGPG7sd66bmT",
  "key13": "3SJ9W8mvAWu2q9WJDko84RiLgLLNkzK9ixVmPbQi7Szy3YwNtqtCksTEsMhkiDXreJ2kA9nnSpPzfMP5RXoGksNm",
  "key14": "4EV4EFjgfECBCRX8MYNNzdFnbGxKpbvGCi9TSQozLhsqPvRjtDeNwEpsgvev8ZY44bcAK2xt6zKqmYRE6PVpADDa",
  "key15": "31Ta4cksi6D39FFnVi3ZssCe5V9YvmERwyz2zi3eaC195u5yqaHEjn2oDQjcGT9DCfhVBuPYnbUT1pbomxhRg1Sy",
  "key16": "3UqWbb9eqtKy6BmSg5aEAwFTegE1wGqK3uHdVH1DdSaxnM72FD49FtAoW97STggKcskEuoo112MJP4CY4GXHR3qb",
  "key17": "51sVaebWrDMyaXtzynVT54rNTw4Vww5bcw1nxxHDQEb7dswgAjZPQFZT1oDNxqZ7BPir7m3gcRf4CBvz2maUnWNd",
  "key18": "4uJNpdoCpJMyPw2XTX8ZZPgEA9hLsPmMRu8KXGDSKdAcfxcdLgwubVBWzAAZdMtpDR3Z1LD6bA1iY8dHeAuLjH5S",
  "key19": "5m66LPxpZYEbt7Q5vzF6bTyngVHg4t4zQ5K6pebwMMxJnsKjKPMF2YpD2tBworPSVJLThznpiqNFw8XkcEvADHjo",
  "key20": "33oWyDY3FMqNa3VMmbLTcSe8CAan4yKfr9XjXMVCW5D5m1K2LtiUkxXQCgXkncp5LiaBFCMqbtWJz4gpfCz7v6S3",
  "key21": "4nyiZCzzuCYeKWB33iPc55x7pViFqC9n9rCc2vSophatkH3L5v64kjf7B27VTaP4tSD2pWKfKHjsYr5GcnT7zz6Q",
  "key22": "54UupPxdMckLMM12vZp94SgSB2wzHmCwFB39NRUGMbu7xw5oeYmMN5QQRKXNev4gLrsDxxMdkbAQY893aQLiaHJx",
  "key23": "51ChbixX1x8WH4ighYXDivrrEKbRCDRJZK53zF8qko6naWfRUE5d8E9ZzJXSzFjWV4cULnwoqYSfTXqDN9tnQg2w",
  "key24": "2uM7f4jRQbcVRRhicDh9tnyqHgvhEoXgkXWihn1CtsptFXsUTHtfnnM9boB5UmjQNNHBbmmrKtMwA2dACyxwQUnj",
  "key25": "4JNiRfgrNW4kJhGKy4Pw3vfUAc7WFkuKx7BogQgLS12h64a8AQMNVfq9Y64N84qj3HLrSDgDg5sGrU79rdEe7ZwY",
  "key26": "3MbHeUbjcUrEzPWg8wiFLTnxf4K1Xs81YKN7uYwqX6BJkpK957RGEGG5hEugeVW1NepR2wWG15pi1SYHhqZSKy9o",
  "key27": "4WLSEZ8vyM8oFs4sDwhyMt5D2P2VyxGSmrDJjdzXX1weTzriqay8jLtBiZDUm3UEzgCB7TMQVdscpnpQ79rYs7ZY",
  "key28": "ur371gFvtCqMDZdLhsHvfcDFwnx5GqHNe7oku2vpugZi9dAHJcf4pBrorJka4jZ9KkzRrjLNfCTjthkEa2ejn8T",
  "key29": "4tpfofYxRGSKUGrFaxFDVZudaojVEApc1ErhRYSddqNByrhiy1e35riJXWUs6PgeaK6GzoWvZSYg4HKHTDKkw7s4",
  "key30": "3sQc9rspep73Et4mHGfxfZfMo7m6WaqCPP5jHx3VZJkQa9VbGByW3fKeKXSzwJC4xuaxK8utHwKWWkUPiWmLPfxS",
  "key31": "3BiQGTPVmfTNGuQCQsSxRYKh2rxSjgkVAWQKPQ7SEve479suavJXrGByKzh61ojZae1DQvRduu8Dqxme9ruTZoZb",
  "key32": "4RAvDjWd3svN1UXLoP3rhWrsePR3R86XXsraqbvunwBYSLUgLyvME6jo4gNBRiXsC31zbkoQ6krDVzPihfmSBKwF",
  "key33": "3WZF2zVcPXpG7UFb2jhhJ2rLbVBq28J9n7R26xbqRHHRyZtN86cbbC3rBqiNCmMW6qVnrz5SQ3xxnLfGPFsQAm9D",
  "key34": "5Vo7gQX8NGiJrRHrWn3D82MuYyXKLoVYC5NvcbZw1k9pjY3jFXjnpqeWt7tqBZyjLr4ovBSx8rtjjH1GHXa2uLgV",
  "key35": "2X5n4gWFCztaKqkef4RsbhzkxJ68nVmfrgTG9U9r6wzk92Zq7uLkyF1ZWzUBLnpnQkUMAQt5CPyejQgMbL5nGVGS",
  "key36": "4pscUFqyWm3fSisxajuMsBfKvH9EzggFm7ycvugsn5CwwytjZxEJp6GURQrtnS8srVpCjKZBicXH4MfUS3gfokvx",
  "key37": "4BCxPygSw9M2oD9pRqy8uBcoRqWoJBmomLpMbVXhav9jqMBtuS2tGrpMx7asaNNUb78ZEQbVuwKXtuHzRMvqRR9N",
  "key38": "3akHVA26ageUuTcBAMuEBdouXRvFfAZrZAoc68ckHDaoYNfrNENh8zThHY7HGKvovqaj4UqQcaDMgaEtnPejiARS",
  "key39": "4YaA8EapQB7zVVYvbmxWCjbCQXwgtwi4XSUtwXaLDmTyEh42Gk2mVSQNTtaJMZXYVUFq3MtjRwZLC6K3LMpi9Ldr",
  "key40": "2AaLd4w4Da6TbyMjm565KSHLApbHnqQp8NxckrNorV1JsJYmJCVgrK3pNTqN53EcwBeJn6x8GKjPDkP3UDc4jMRe",
  "key41": "5RbGUUnM2kCg13zDkd2Jn5ZSvABGgCgCoqK33SKQBs19tFPFwWHfgrQL3FEiZhW1kLVUTrhhyCHjgKe9VYWX6FnW",
  "key42": "4oLgMVTzqnHmF3vrfYX64k7knPP9oZGhugRHNeVr5UnktE8to3R5WJUQURfmnpPmg1cazGZ1egbcTZG8idyJY4UK",
  "key43": "5kXRmTWaRgsiTG49NdZyDDbWFQwfSeqCovRVd4521oicy7UspjwCzUjkc3ahFpGzqcTVpYF67qfcxqH8fJy4s7Lh",
  "key44": "2PSrY6Bs5MLj4v5nWGwVENK3fUsx9Y3eE5vQ4gYPApV4zHqaUQoiQRTZfuJV8tVor2MBnZqGm8gVUrbxStVzZocN"
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
