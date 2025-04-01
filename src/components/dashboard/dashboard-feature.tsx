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
    "5wqtBp3Ckh1v6vtNRcYVsBgi5ZSYMhEhqEgmT4ScUFVFuZASArukcJUHv1QB7LdJsiRbY6bvdDWi7UESppgn7fy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xL9a3VhrKUkbpsrUnfXHieEv9pp8p1saK5gZtqRerK4Q94di4tETwL6TU8ESX7WpKEUmZ5269zNw6SC73rgm9Fg",
  "key1": "SkmXuguB4f6GczoR9SeiagRsGr5x4UJCP2jmV7DjMu8xVC6FrqqgFAXCBqo6GQAdsxEiQNPgg2G9ktvuehuHHj2",
  "key2": "g38nbu1cxE3CPK8GBMdyoXLRfDLSi96Deh1hPaHLKWjyEPzDagnyJ5ENDZxHEL65duF78jGpLe4wzT3LzHY8rA4",
  "key3": "3s2Y6nFrZAdTHwex1DomCsVvvJJgwwEmCq1FLaMtCbvPSENHtytmyzm74w3K1e1Wf8Ch97Bwp6svDCbRAZTuKMVJ",
  "key4": "42n27T2TeSpL3zz8Q6HPHeoAquHfWHD5TpdpdCnXPskvvj6wSbZbnCM8EL6cfTSS1ETb84bP3Z1yMrNXQZ1EbkAS",
  "key5": "3PagkdpcTiR5aDUmuEnjXHSQfQFfKAhR5eHyhGKUdk2E3WchdFhp7Fch3s5V5JUpnt8Lio5RgigjC7PACYzACybN",
  "key6": "52RnEodAEQy1qZ2visQ7HBMp395qFpaB4tbB9tNxwxo61P1p3zGAK7L176GPaurU7cLF2g1cj4GZaVtS44UGM9oV",
  "key7": "4NwzkANSgJjKzLmmJQnXsUvCaSVBxpjdR9V8pYAgBFkbv7mzWXbZgoXvbgQudQLtmax9qaSN9XbrAV27PQq1sbd7",
  "key8": "33bgJjz1MSJjfD4zh86J4wgx8LXuJWMEA7mY1e5bQgWNAxsW3xkuWWVwUDZ8ojUfBw248XZviBUhxPtq7zawetai",
  "key9": "2nHqPNwU93G66Y2bcAR7bT1wuf39uyU8er1dLCujdHdNDxLPqK63kRyALQRRSnqp3prTkCDZbM4hoWL6XaHPN7yZ",
  "key10": "mhFEL4ZXHE9pKMJtcjADrNPaTGFE4vbSxAPPEQHk6eesnWm7wXbPKevoJNWsPuXsFuTRAxbkAAd5CtmwJ4HDL6i",
  "key11": "3gScoiEhaAtvR4kjwwgMruqqRQU4GjkKFoxoNFcWK4BBfYUU286dZhEUvocTizVbpnvGfmC8ARsrHjD3HRQynYax",
  "key12": "5KXgtS1VErj6DMfkUCG8meS8Ybd2icwfzAoTVjmonXbUZRpFD7FggeNA6JW4CrjjgHYRDa45E4K6wCsaguBPcKrM",
  "key13": "YwXqdf8CdjfyQCBw4XFjbb8KzJXHTqL4hDW6ChRTDShfeg5vAQV29ShNjzBsq9AqVwoW34hnCTNvMyeM6WYedwm",
  "key14": "562Swa5yCfkdvBe3UVrxKNmZnAEMb47eqQhXPVkUEMpPJkMzsacrxMpneH9DD9ynMXB8rVN6KjLtCQqm36U4bnvJ",
  "key15": "5s5CMGbxTJyYLrNYY1kTwkKNDEVHYxRkRyr3ibABXxsYToZbUG3LQpANfWnHHvRBNpdxSNwxhJHHgJ2rBD4GbWYQ",
  "key16": "m29oxwgC7j8zbFoxjWJbyJ8R9Xdhfp6hUpqPczssgfDVoCsHB4tRSW96T2QZRzif2m9i2bg4jyhhAJcqM7pZ57u",
  "key17": "5xB14Rn9shP5UqGNtCDywQZL3Vt7uD9HBPRSLRsu2Qbi7mPi8VkUiHDZmEEekVTjfNLyDyhAMQG39AbZtA4DYpQP",
  "key18": "2KyNdGog46i6qaWSJhBTf8WRo3B5uSfqqV1jYTnpPwLmWiCb1NTFbEYXj4V5yXYPYRmbBpYL5FLFZBT7DZv7R8VV",
  "key19": "674S7DWDyHW7vAJ1cLU24GJXjNDw6ydrRSNSihYKDdk3fswV9e2Tb5M6aBzYhxQqXn6b9EtAP5GTvunnFFzNQTgv",
  "key20": "4YnysjUi9wXmW6xEErRJYx71geM9KTJn8mcK1P2XZNVEi5euAzKKFP8eEE18LQPrYirdqgPtLw3WvAVg93hv2h8j",
  "key21": "67NwMiTvKCqWjLmV9S8m1WQf6urZgmbTRmG7NRBqBnuUFDPmQREna3jjfoRTNSVvZoDMDqVTJ9oYHCmjvZYX9t4p",
  "key22": "4sn5TSCiS2LY5TKLe687treBTtVGivmTyz5cbdYco847JfiyEnejP8D21vbgG6e2zy2TGNQ3mAAn1MpPNqbnCAZs",
  "key23": "4eNX1m1sjx48TQrcML6M3DVe6dwHxpQpr3zWBz18tpo2ZptqAQt7NMs4cTzhsPKqQBq1kg6BcHDki5SGWmiJHixk",
  "key24": "3nW4Sdwza3L6FdNTf84RmJmKPV6XejkdULyqPCcZ3emPQPqmDTMnj6XaCnqZzeKRiYskTxEyHT88c6KNE6dBuQmi",
  "key25": "52eHv54f9oDFtpMDNbZjhDDGu19P7CZimsctNE6PjsETEJegAMeuyxmAH27vvPycmjRgJiH6jGhJrXDDCxr6x5iZ",
  "key26": "2yqo1CiJakc94J1YswAy4uDzmWJReCVnwRupVwMb9R4Cep1o1wCk1jjGvpRobwoZpkcEA6cYbV5pcPff4SEWfvJ8",
  "key27": "4eC9jYDXwUUkRVxEv5djXu9LVU6q2T9LJSG2z9sB5XsT3DbhGq49os115L1WKa6qEycWPdzU1d8EcnJBh72Zz7LQ",
  "key28": "3nNxvYYTxtYGGQH8GbUPt9H7oKaGqcSFtYa6Gqk4tC5h1aPevCbqr9XstujekGxqqy56Jkq5JhPeTwyFhSsvyWDQ",
  "key29": "5tNQksT9UUsiMiVuUuWnDzyZoFEBZDw86i8ubpySDRrJLDKwKmLgzGXKWbkWu2apF4Mj6CiMNii2E9Ai8NXMbHqT",
  "key30": "44JN2K3enSphQeHVu6mssstZreCy2sTCTfpxLta65tYXgidE45KeMCt3MtwnqftbWkac9z6XpZDKSYARHLt6WWKB",
  "key31": "whz5zy1hBW69fs2kZX3r3C3b1fX7jMk472CcsWaN7d4EnhbRSbEw39XZ7BP6ZmZY6VFGYp2aThn9rpf7TNXEvwQ",
  "key32": "hXJsYZk4dmcAddRR1DEb3pMJd4v1Qnwifx3vtkGavLZXJxw3YL3i7WS91n2233EfsvsFL3mhXXa9PM4XVXg2ens",
  "key33": "58wwBnDX6jjYZFRsMzLifZzwGWthkZc2iEnGWWyJZ8Jnc6kgWTPJCn6jE5NpTH4bcVSHynuLbwcjPcqYaj8cFtbi",
  "key34": "2wrmBH2gbEyJmGgt2D7F2Sr2iBSHD7xg6c9toiJ4hVzit7hDFWxf5WVzG6TqBUsZMGbWv8om1Um1bbi3BKEfBN6S",
  "key35": "8ny9QfLDWsUxdy8C7bHYmeS2kAfCZ2fWdc7nQ61BASmCer9hGgsM4a8AXZnATy6qYMTFELziFs4cXNdKgePc5Pq",
  "key36": "2vsYEzrZqPznqGvPF4pkByNfGXNbxahjdYiehpbdMKhGi4p4N4g2tbbGwjfgG4sQNN8A4P1fyVoc9tcDFW4SBwXy",
  "key37": "4UwfpAxy6aSZwSBxU16jrYDGYnSV5w93kR3RThsGyRy3A3rTnH6QdsuZDvrXrpQRBBThSsf2QeuQVQDsSxZUK7PQ",
  "key38": "376Tqf1Y48GLMnrdM1p27gTesbTGNGPJKr7WGWtnUntzTBokSmxkshKnv1DrxRvRiYYmM7ZXxQcviJP7V9JAXdcF",
  "key39": "3XV1m2yP4CZdmpLmas3jqJPWZExGDdErkJJ6Mv9vLXfe8EET3HPEU3SGvVBhtVDnNHdB25hes3HrAfRfWXg4nAdu",
  "key40": "65jUPB3xnGVyAvFUYtsriUGZkQXngDX1m5bGrA4w4iKtyVUq2BLJK1bnKD8Yhp5WiVsitHEzttNvAdgc7UHLehKg",
  "key41": "5cs2nX3sbzq5ULWzLinrbxJN2gmK5oqy9F62ipYBc9ZF1EQNjk5v6FR5jE4aFTVTPQzEokhZtzzKpiZs4i8CKt7w",
  "key42": "KG2fpQP4MMZAue6fjZ2pDWa7432Kbe2HG9SKecifEHsnnZA9bzCWdqY5zVR8RmVbR9msGXe7aoifAYyRWC3d15Y",
  "key43": "5DBNqkz5T47G8FkPiTXyBUh5CFa1PvTtd93X3UKc1Q5VLx1gnABJSUj8Ci7N55773X7HvVdCMcdmSd3cAxQvvKUQ",
  "key44": "3UqBw2nDvLvWAgTroLVx8ZHZne2yWLUw2K3RY37Y9nuRzZ6gu4satUMu8wbZE3P43gNXcGXSGVsTRQZNzR1FgcEg",
  "key45": "2K5SLqtFF6GCvHEG2aaXFtk6Y4AxmZKTgcs3EyuwasgwNtS4o3XGdfMnqDp8XkzHCcyVNqZEND4dN6C5HTjW1Rii",
  "key46": "4nxttWDvoFsPYevLwn9nX6PCQaRMhvzFu6cBVpStPMxsDrk45vmtCqg7H2GtCQfZ5TciJWGRtWWVgvKKCdX2R6ra",
  "key47": "9oy9FgVyJwJuLyUgLKH9ApMkw8YayGXPrqoEnGW2jEKzEt7ENrW9iyoMr2LYTo1FPL57472JEeQnZb1JYhCkJ5B"
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
