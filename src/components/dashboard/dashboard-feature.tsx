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
    "4kLK2yU8i2kqKE5s8VovesvxZkLnRg6Kr6zE4Ri37FTGHKwn8iTDi2F28vkw8UiadeiGxpjWQ3ziaV1NfyL9ZNUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zERQFYqr6Thbsf4ujSgQF7nLiYAKbpnBYudQjThZ827CdWhHRicFdKmRVkjv5nFAN6yqUGgSmSeK8bJibmMjzMg",
  "key1": "2YSu4eVVGB9CTCsVcitaSQ3mz7HRqyCRCVQ7ovAFyRMBYVBYcLhxGLS9M4nxHC2HW35UxK65e2qyexUZ6prwyQ39",
  "key2": "2vYWs3NuDXhhzHhS3yM6a4Mh3LXbYJUhrR423sWF3LzHY5GC5YTWnw2TZoyHnrMSiwLGt1rSEN5uoRPntrK2dwJR",
  "key3": "4uXkhX7bkMJ4u1G4ZPbEesqH7xnUvsjXZBPUuV1b8sSiY2N6syZwYFX8VibWm5xayV4DGZ7MXCz2M9nEDMczqEER",
  "key4": "27QzWrkFdNvfprhkY5psqRtokGeoHGwRSf5SEz7UA7yZ7TqMvSDYbS7oAshYKDkJ45VDcu6CgnSJpN84zp7ztjfT",
  "key5": "4SA8RFSEBK8bgcXs1ZvwRHCcTz1YmLBAEVWREnTyBL67GVBwfEEwyFm7qSScFGa885axxmxv977TkUpenc58PBvs",
  "key6": "2N9YBKHGNTKK9q9BSxTnF3xmSnT6ag4weV14qSCLDN3c8b7VR8qiBWcgkReWQ82AGt8fav48rGRMYnLXDtiTTXAg",
  "key7": "4omAbj7aoKEpjbQxq198BRULa8h3UTfhRTvnq8vpqxHUwQna8sVZcA5v6WABdv3wyCMgMjWkXqfhrHLJnwGMvMV",
  "key8": "3dBeaGVLckvkKdLMoGuTyLMGFNuhZkm19g592YDHn6Xn8mjiCjrAdJ5w7vfXcX5eduHwniQAwfpXiVYQpnXu31Ke",
  "key9": "yQUEC9gzZW8Q8o9J8pQHuMUEYLCgzwYdzK8ygGWhxUxFZX1kECCgLJcwQwRz4iJSVZzNnCendQk2QqcTUTZgemN",
  "key10": "4i9Se6dpMwmkqmuU2XHkf2toRR5Wh76gX9rtmSaCVTVzEvNLSsQVZxVSVGMrMH4EgJt1oCzu6Ygz326tNbqQdbpX",
  "key11": "44GQzdsbTJCnDVwbqXUe4Z7iB4vE5ZNT2DF5LBGJU4KEo4uvSWLMVXZiVDkHZh9s6JLQhSy8iz8YmrvWoM3ojafT",
  "key12": "3GQpF3XLxTrTQRkb4U4uQkP9uA8xwDfQqAYEy5CCB9iYFDinERZJGkXuUsAMM8k99KNqacX66JeCVrL34oejEWXx",
  "key13": "2y7zA8ferpRZs1MBCytZMuMH7MHs7izJ89XGHQveqkLEJzYpppifdkyfhQDN1JtKyfVmv3hz5jYiUgCo8h7Xy2r3",
  "key14": "ZizxFRcGJ3XgA9APBea1dNbDHMCd6fH4TAhimm4RdN81rwb5ZvWqszE4kRSxEPdWjtVSH29QFVLgod4bVAeanZf",
  "key15": "56x1AYrUBuGtA2kamsFb42YFLMUoxF59Et1DQzbBbgxiQcYXqmvp3XwG3Tj5CJ1nr7fLPx1Hm1MigPqzT7MPK322",
  "key16": "3HxUa1osWHgT23XoVtffLMxsW3aRRDQShCGb3t83biDKEeFFvAmtfrrqKFQr8DhiiXXx42KZu3Xx1bcs3B38wqrA",
  "key17": "5a6pXD6CZmzYYTisYcjPQHHXnKMybnz4TRYK8bMpfWVsUJfTBEfzeDnVJpPHru8TG3o7pkDnp1hV4F1fn7PmuUHq",
  "key18": "5vMJ5WhmTeX6oLeWGVXg3FhJjqLQVsay7z8c5dn3UjnBB9sHPVL4t62VwRDF7sLNRh98RSByReW6jaNZHYm1LEcJ",
  "key19": "4X3UqNaxLHNFQYPWuqP83uz93YdvCLn337hiMmew2bNUvDkJK4DiZTmPwqHSijFANxXDaxxEQSJdQ8VU1bUdxCRW",
  "key20": "df7QUqRyWF4EiUxvkkehAtgb2oHERxDpPNrVRdWrrxFZdnGJGhin6HNVULbbe7z9HaQNhVLS4CD3p7MQgSGGR2u",
  "key21": "5eSiZUYNBVWS7SpFpwP3TYH3iVNQWSDcshoKrZqrwNJcpT7T6zeb5TU2J3w81EjkMXUSot4DrQEn2LpKQkAGxJ1y",
  "key22": "ht1zmSeLUXJwE8dc9ih7cjBJuGaH86uw6AtoBjwfKLBNm8xuRTihvp2B14EWRV9MiCrBaGxtnq1V1GMrNX5vLUJ",
  "key23": "39pGm3Qu9Cj7JwbJXtQLWJxAwoEV9UW6UBKca4rNTqVkGFRA9bDziSZ4iuhWMsj9hqFZHgUR97smVNetYnpLtZFM",
  "key24": "5VKBuggkhLiHyxVDvcsh3gNaUKKRumUvVT62ijF2FFHr6LXNhd5fCS75s9y9pHisWdKfuhDD2dhXTPMZrNL86bKx",
  "key25": "3XSAeFtkGKpHC6X3NrAF69uEbUGm6gVuYKtzc941ZnsR3RrKuqDczRV4usPBLABpbwXA7mntvJk8qCkD5SfyzNGT",
  "key26": "HLgnKd2BFkb6QLYAYud3SAQRjKiiqodcayqbPunesmBxJnSJ5qnS8rUW5F4pHGYrrZQeALVUtynWfK9giuxXJsz",
  "key27": "3NzJ2591UuqCqfWBcmS6WrQZDTJMkrVQZzxRnLSpFyQrpRxGe4f72jfZHq8rC2KoZEp9P6QVKz69bUuX1oMmAYrT",
  "key28": "XVjeoxmWgHFmWoYyhUpZxhWqWeJUsixTCHPaYciQrp1XrQSE1wfk2ja9vwXAyfJQCWem9Y1MJKGDqYH3myp41mF",
  "key29": "34ugb9oM47YitaNxQACwDMKUbJAterqqi6j9oDfwhdKaXJ3PdW6xiviD9RoMy73undPZBimg3UnysLc3GF1NRxeD",
  "key30": "4FujTNxtDKAbLomFm94gaEN3LcwEngAhwoVBuU3FebUvEc3cvRbk1XXEpwQjeNPjEEzqTwFVnP1nChvcQeUypg2i",
  "key31": "5zmyk3FFjDCaD4EWiVxivoqWFCnXn5GNN8WmUpuQU8uwKsGFnXJN8iLSaPgNSefbtUCnbMFNLeGHM4S9c4H1pGhX",
  "key32": "4VkrpNbo8cnUnu7ciB4N19K5L9zgYgWFnvBYGcv8sRqVHMJ7Z6j6wfEPmzT4JLYCuNd6iLEf9xbQRGSXpw61sYdG",
  "key33": "56F3kiitZQatsGvcRp2Bq792Qo8tZzNbaAXpnZcU8h7ZRh2nteLnzVwuDjPWsK84QWAypGdbTdXDH6XzhbaVCuSM",
  "key34": "5kEscVR4PU6zfFVDvNzAWAwoE9eu961x9kXvfLug42X7uzBmRJmQZaeYiGZSAGuVJs3Vmog7ocnufbCiScWp6E1y",
  "key35": "2wg7RX35QmRYgDB4eMr91cPrd9bSRQhknGvyC3RWcEZLHSvxuYQMKAda3feuHNpdv6xtYcMBbZEYdsqoANqsGqTU",
  "key36": "1YC9uw3tn5k8i84L6XYxiQ3vYMjdgD2Qm39f824PSSdom8tY4VVWbNFSEFwgQAjt16Q8wsuyPjtXrwuoVo4M2xa",
  "key37": "4N69VsK8bnUARTr7s1usWEStt5EkguPSwzJkgv9cJ2fenFxLLSnbfDaiuzZxbAMtreEY8hp1V9epP18Z12ZbWvQL",
  "key38": "5Xnh9uJMsxGkDAWVVEo6mPgo7gYkc57ntfoqQ1ZJGesCar2TwiH1HqNnA123EH42f6SAsqP565d3ZNSUvTVpiRs9",
  "key39": "7Vs1Had7c3K4dFsUoYFwY9aiLt7axpZ3DMeJFwwBq1pPSY6gQKivUXbEHNurzdE2juVwxKC4m4AEipy8pBdcLLx",
  "key40": "4scGE5azjLKwcJeGxDMZkEKwpwuigU69Wok4pXvtckw4DJssBdNB8M8nx3MTK9ozE45YQebNYYMEfxrWAf2JKr6d",
  "key41": "4sLGQ5S9Xgsok4gUbxoriEWZPArHxrb1aQVXJWTdhGFgdri8X7R5AGU4TM8iRjS5g3ntDh9N2P3BGD9Un4oCkvrv",
  "key42": "3DDvJBRNrtxdcwMwRBwNmg8ksXE22uxn7PQQGRNJUXwAFpcVoFiY4nFt4NpjmwrM9QDxJNx7HtMKK8bqZWeGLYQU",
  "key43": "2MZjdWxvx4BJiagVjayaMYBVEDXFqkuPBYCcEkqgLr247ixMQFnQD5E2GyEPj9PLwtsA5EDjBSeBdtyQnyisR1QY"
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
