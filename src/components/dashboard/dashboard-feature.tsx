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
    "beHVP7Wxy5fM7qtrfEhzM5cf8ES5JwREfpxEPmA1RoYhs9pytJf9PRDc7LAMFfWHPfJzuJAvSJjqidFAjw5zf16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ct2SNMhrvUqP4T7pihoZyzQvS3u9beaiXtJAxeFo2vD5mXJzx74cBPhL4Pc5e8npQWKWytDgvwbzyZucAs8yHHL",
  "key1": "HVLhESWLrAEQBQn6zGnJW3MaBG3mQ8aUCfquurvtpFmHmKp1BaWvUZ628fYZBdN1NkNsti7FyGH8yY9318NxGaw",
  "key2": "2xkCv3sEN8TFtvoPXzohfSN1tSNVxCGm4rwNfKRMeJJaDWc3nhqavEo6vQKFGwBjviWSDXVUZKJDgvU7issGA6CL",
  "key3": "4ukjDZh3B8i5QtN5yaeQ9bSDTJoz3EJhS6J4Sq3Q2ryZUrA9B7W51YkUa1xDFjsdo4BZGK14LxmMJSS9bXYCTLBA",
  "key4": "2NKnYTRDuccrrN69wf9iAajenqWHSUNmDzZEoZrGGpY3fszBva5SrN551DgidPnEg2SyzeAMgLhQfMCGAjvC3Poi",
  "key5": "2xaF8BLFYvDm6fFWyDYbjqBy8zG5iAPqmSgW6yc1djy9bGa4JwzXMHiJvjAgujGETx9cGsVgBoSTUeAkSYhmuwAs",
  "key6": "4PV83qtdffLxEjoosR53xtbmxwS5wUGhmyRcW22q2ySKx3eVm1QfZ4mf6DCwdYhrc9EhCYMc9Lf8d6bfQvjyWNSg",
  "key7": "2DUG9rwTdaDYXVZLPR1vDPx7VN9VNCysVwr3qZfjP77L2zE2qQN7SoJ8YTfbrURVEkphSuMFCFZQ827aArNMefBA",
  "key8": "4WNs6JVMQpsANBx35aNAAa1gsk2asqvy1JBdGZ4yjw6mrohh859VGX2v5KJ1PfCSRFW7fYcaCDKWqKSqMfVWasop",
  "key9": "2zVH7vZfhTkU3WQNBNx3LghgcuM5GcQo3d3LJ2ViCDi2XZkXtCQKJbtu1ybamDvbJh4acmJjz8rihsRoM483g1ep",
  "key10": "4SjzV4jfB7oYpXa51eb9ogvRN99FawFUARHBeGfWFEZcvDYYm9Kxw3T84V9hgYGWiEhiJJU5cayfrVQApUewSAzR",
  "key11": "3Ncnfa9aKgzqHcuEfZccLFDwsbRhrtTaSxfL7oAfzSuTK6jUP6SmfmEwLy56vEK9KkXM1mXbN8EYgqfG12Pw7aRA",
  "key12": "1AZMbyTgezsBRyQqNE8wDMM8hbxmNfma5bu8xYF2ABajPPAubpMoE1q9PjGApU6HU5ZpFMCQupi5oLSxcG8fYYT",
  "key13": "krmcTEgjkeP38XvE9KZxAzgyiKf1vhF3HCd1UNMp8ewCUZhr3wGUahhb56RC41UtqgXcVYJ9WZQoZqcC1RmEFtC",
  "key14": "2XSP3seeeBquMsFHcuMC6h9QoUKRdCYm3r6ASEdHLmFiqmSVCeGy7qRJXuGBxNZRrYXRUNsJAzs639Md72LJER9r",
  "key15": "2Vxz6rEQGm1Njij8AcuTzEPSBAC9RMnMLRUBKpC7fpUmgczd73wmYuLqmwhKeBUbpEM1vXPc9Uj4yPaZyF2WoX4n",
  "key16": "59hNyTre4k5PErcUNwnJLgC5z26QGxyufwDQuSctqmx7XQF84n5QwFS2bgwUKSkVXm1UsEiCKy5ZrWRBPFxh7Bo9",
  "key17": "3CvMp2osWbGxnz3q19Z1AmvXUZtxgumzRyNRJW77vDaNDxZVASZtWuG3wkMxKKJ1M9QNF2SMEksFmBZFyfXKbziv",
  "key18": "4S272TU3Wy2wr1nuutvyKBUxhLWNgCX2hRfbpkK2bgXqMgFQJ3XBJ8cNMJeQ6gY1K7eTyrpBPyikYWHVuo6JH9KE",
  "key19": "5ZogXfqodETNsmG1JLDF4LcEb1vSXsL2NQ1RJkueB7uHRHDD4hbX15cPMKtA2BfSubuBXogHwMsCCg2unrbeBpPj",
  "key20": "3hE5fchQAKtxkoW2caMe3ccgJ1is1zS4w4j5rJmixcG3jYtHsgj7ViWCgEdcFDkTKH7WQteMbg55XyxrvAyB3pWZ",
  "key21": "7gSLAUjhG9DG2jwKW7nXge9md36sT6Ea9j5jfgui6Qrn82VCr4p8jVdZuVPm8DEXbenZE8ZhdKGtSCqrEERd13i",
  "key22": "4cSc9aoAqqQCzi6RZ7rw6TpJYRS4HwZYwz5KPpg9VTJbNVhxs9wMazTsK6prwMJD4USskqvsVvoJPmA5MJN87ktJ",
  "key23": "5aFfTe2LARFt3V9tYkoReAG4t8evAC8ztEEVQ4hsK3VGpGDdUXpPnZGsU8qy2aWeaPxHD9eGWotdSNBHYHksTRm",
  "key24": "32BXQ5cCgeX7kXzGq2n9uTnqG3ZMiyghYGucdrmgpUfgcJqfgJ1r6uUZPt8j3PAypsrhGK2cpTixFaWM1xYeg8MN",
  "key25": "2aZjXMG264dBnwHexU8sdcxfhWYWZbgD8D7XmCHfqyrcPskUKd4cVNATUgfdog3WMcKdecC4uJvCBp9Cdj9NSXLe",
  "key26": "3q1wmJZ3mgQet9aDTvY1R55C69jiBAi5oaXyyHR9KD1mBSgXgMMww4RVzhBuyg8HfqtmDkeQk2v5xsYPFQQ5ZAZ6",
  "key27": "2ieXUKiZL5oz2W34fBnUhgMtJpGyFo9YAsvfWYehgoi2DtiVvgMbk5B5fPwJQhd8p3kzyQZ4y2qvWgDnk5D7F8Dt",
  "key28": "2wp2jxqNr9NjPAgH9dgWGpC3GujwUfP58zZiWy6LhxJd4dfyongZwqKPZvjymhj6nRGCk2inGCj8GPvVxQWQdyJU",
  "key29": "5Yo3Re7ynVzqgnmm4pqPrH6PsCLLKvcUs8jXTKfAWtiVWKG7UKqQPcQb54VQ6YUoXRUMAbLjJV2CkwRYcDJw3ZYV",
  "key30": "5A2MkfTL7x5Ss6jz18sarhmagS55JLTtAgoaUAe7k9pd9TqsLLcR82LoTs1tnT9z1dqxybW5dbjvRgHYYN6dhLpZ",
  "key31": "43aiEcbkNK7s2FK2UhmpW5UTfMKARtACbpPpkseWsPedh3xmnjaPQi78G2i61n3wopi6GADDhLc3tD4PymS2f8ku",
  "key32": "2a7HK4kMU678tJmwu94U4UuBDSp4WUaLXaakUfziybGdFDVtfc2S1M4FSScQroghsvJ8aBqyz2fZGTURWGpFLHwG",
  "key33": "3ToEk1h8ioQAshgqZPyWxSSuCL3TY4Q1Jyqz2oHQPYyfg6A5nEHWJukwUvxLnXf5msehJhWcdZz5qoYH34PHVMZf",
  "key34": "2dXPFdxwe2LbfQtStVmDAYVXqNjj9YHPYVGTKdGocqEhhEhbxyhP1gyprYLnmLYeUeGhRtKjQLQSkbhxPDm48SQ8",
  "key35": "HW8N32rSSn2Vu48YPvZf1EQyDCudc9vHMB1VtD7sbjMvc14ZJKU4tfPMmGsM4kt6cePrneQAD9sUxSQnJsRBMjS",
  "key36": "37Ldwi9hryuL2BkkhGUcNVvwMPW5WHYj93Up8hJ8zjiksByW2QQ1vHfrsmieDKr5FjriYkJUvyVvC9gEUUzMstg3",
  "key37": "5Hi5kB291N5AjNykGhBmY4oEmqmwJ8Nhsbpn5Yi5SwJdckxm37HYQimTaWjek7akBbcg5zahDL4NBR52XRJZvvVr",
  "key38": "KYuDR3CK1uQHdDVYTZn667a2egfarTaHAQeCM2D6NMB4idxMMeX5pEgSsE9ETcb8n5yXbRG7mdMnCm8tSa8wB82",
  "key39": "4fEfKSKARmaPHxjHo58y4nxfmx1b4e9G1t1X1ibZGsMsrU34TQJNbAKR4vVvh6c4zzdT88qRV6wa438Nb2FiCzDD",
  "key40": "4TuPYdSUe4wPoRcmF3F9i5AXRQtmaewn7i4FCkxzUp6YaCk6aM2NxHVMNGRBWRAVbMMBmyUWcAzHvb9StdbQg8vX"
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
