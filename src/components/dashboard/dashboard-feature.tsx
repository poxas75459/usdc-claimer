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
    "9QkoRR3jZ2vBuB24qJj3m6pB4vv355SiMaSgmATmgje5ac6SaKoaFm1BBbEY2frGnR5pGbj4AbNGpgiVKhiKzpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56xnK1YmjKFXsW2EatcF356UBJXiWfbV31BcXHrY5pkfbtT4hgkfS1JiK47W2xXxaiWpqKU9siQ8QMYNHuPK3Abw",
  "key1": "4848Bydi1PBjVsRiCp8dADvr96JV8zTzUmuRmuGLTrkJ75XTJBQBVxF74YmkTmHnfPUkqa6S3myipVYDm22GWCAF",
  "key2": "2gBePEKCmy2Secx7DLTuXiM65jJXuPU7wyCYBzdpZpCCBGVjaLkrMjS9B4hgG7ktPfJapsnZjjoq1GsjqiYHhQyp",
  "key3": "va5VWkB45uvb6hdo7ss13HPQ3CTCAnHf3oxDrZZwUMSHiJ6gkwwfRGPh3wvVzw2JxsN8X7v1C3a4av5ksJVPvwC",
  "key4": "2ddfDNeHpMuQbC4NkPSD5ighLwbhDyU9zuRUQKpFNTm36WsQZYLkJpu3ZF2Em9X3KeZqz6PRQFBNu7p1isr5vraS",
  "key5": "5Eyy1ZnHm2U8Mz1JfaYMu1powC49pvdJ1crNPDHsy5Sk9WCgvwG6uEy27XeFqc2h47914TfcfovDUxzBLd27ajzM",
  "key6": "4NmKw2dnzUnwab5oNb1uoWS8LdCvdzohdoDGEptU9Sp6zk6nWGDonxh5xdgQp77qjiTosSV3UoDFr1zb48xhUCMm",
  "key7": "48fmAdf8nTVYQGi28cRAR1e5MDSZhh5KrE3j6seRXTHDNQAHFVUuEfG6hMC72Sza1nZFLvp2T2LPjairyevrNKzG",
  "key8": "27eHW3ARj9rxYyP1BfKgGhZx1nmGmqHv2Mo526S6uKRyQB19LidDouCxetzvPnW9fqVVHq7qB28jFJSrGw2ebMdS",
  "key9": "61dR9mZz9WSHb81rZ2zRuLvsTPh8gwSwA7mtXXpYQ4qUpmnzp9WC7hZeywzkuUFfxdzb5Qen42yZHxSyjcrUAsiY",
  "key10": "4qF5pRyqvCPsQjNQeUFriUPdh35bzPWwYmjxiHtsprvq7L3QVRYbucdrF5ETXeMGt2HtmcMViG8213huEHcbqZRS",
  "key11": "5d2Kt2vbVVxVjVHQo1XVgdhdT5rkAH4iYERP3hk4PNRfbVUqfUK76e5ib5zbSDWqS4WBaZX8x7gttC3HEg32gG8M",
  "key12": "4TRdsCj57QpkYjXqWTBHFHrP9Anis2QKe8cix7LJJ84kHu49oQkcSNhHnqmyjTkvdyhkcqLDvmZLxn9rtKu8ToTE",
  "key13": "48EDRP4kEJdBxUB85fWnPMP74Pth5RtN6QKmmHgsEx52GsWZhoEbnvJpQHKEH9dsfQPeE9JVszzFee1RNAhMPAXY",
  "key14": "4bZfDQ7UK8h1bCtCXjauAAgqxTkbSnsooB8uvPKEf1GqJL9zCFhmY259yJo9hRQo7H8fSb8QfbdegacdjyqhiJPS",
  "key15": "KfYo99cRiDHW8Xak5NiGFdochh4v11Thn6GSbSWBk9kS6pWDmydNqYcyod18ibrNj21SyAfTcy5Tuu456ofK3AT",
  "key16": "2c1wp3hJwJG8zXcVqXZpZiheUUTpwM1eAkUw59Hf32pTeAgBRstPeyP9RdCuEy3Lhc3T4gMiwHCsUL7BkkQDLZwt",
  "key17": "4Z6GDADv4YuDCQJxset1txUGwh8ERhhhyc2QYApfZQERS9BL8NBJ6aGbZsWR1MBPkcxuS89GFWqHeEUNHoTQ4JcD",
  "key18": "3W24hi7GUcqHTgY5SmwJtbey5NsKCsnXz4GGjKBXAep1993QcgGfFAdkZpETUCbytTUbbMKxJ3uz21A54MMT1NV6",
  "key19": "QxRxtB1q1UY7xSz7u7K7FAYMfTpuF2GpXAxKKJNxdXJPsM159qAg46sb5oBqWoLWoGBp1dBYg66rfUweTDaVz5R",
  "key20": "55XPGvfMYxzbEEmoByywftE9qe7QYmXqcmt6QK3o1cFwa41eLJ3aBAuNVkC1sk8RnEQTUna4h7nLRdWQ6qXdzmTV",
  "key21": "4A3diqMjLRKy4JLMcJZqqcUZQsQ8DnnDknjCqA2iiDXDEUZ6tgjLWJeJTAZDcktDHgv8p2tX9GHr91atAXxQF3p9",
  "key22": "5xZEp8g8bHYVpegHbKbXYK9R88kEd2LyZ2hZitwfnLCjK6f3PQ8cBoPFDED5d4zamG8H6QuV3f15DW61792VG6DF",
  "key23": "wag7hYuQkLdc217rUaiCqAJWnrvDrRfArkvbiWzNj74JoTgQmLjjFLSfPBSUBUBVXCubrf5KUkoZmWQhhVw1YSb",
  "key24": "4498WGjajwoJNK5vVGvgFT3eD56tJm2UShW8P4Cjr2UpNmFhh57tdsiAJsJjjhtPjmQy7qhCcByoRtYF3S9Uwak8",
  "key25": "28tUzkb39XH5sTeLXjDQiaTQbENa8gpr57Fca4qDMG7CeBBWHof4G8gS8MRnoLf8z8qLNy3kGPDjs8TCiqwMnCEs",
  "key26": "885K3jvKz5ZYhw6pzzBQ66DNj5eG4Ug2KafzZZDCgBs1H3H6zFbN4Nkhes4v6R1LskAZUpMwUDZsKXCB71ZaJWb",
  "key27": "AQextDeUnmAoEr1scchKhgBNaApZHvDgRMSuZcLB8cPyV8LsHnayuMALFmDHR4osFsPiiUD92Nhhsm2sVYGxzKi",
  "key28": "32xJuhmx66p8Fy5tyLedJ2ZDC3QWwN15Edw4DtLubPdNtNpvxJ3zNWzcm3Aeg3pZrGrWLRL6ooNfcB4E7naWyDgf",
  "key29": "3BtFi8c7eRN55b9WUZ4pmcESQG82ivarX3wV2ocPhFmvqYxN5nUx2QutRvfDXQUbHQznZg5AKwz7HNZqBGWw6fkA",
  "key30": "2zUEhCL3GftMDici5dcZU7aM6g3gxBEtQKUUqs5zcVA1KnUwJwrfP8WSP4TqGHnyF1VLnWXuQemwhpwUz2VjfecL",
  "key31": "4PnJYYtNkNwyczxX6789GWc64mwBFpWYCJPHaEY9VuidVdoZdRFf6BtMDJtptXYXFEuEH9jtNadQB3pjBzskzUwH",
  "key32": "BPNd5863M9zb5re26GKCMyF1hicMwBbsanecNYKed2hbqw9uzePHfmXZRKfgCd9uWoz9xJE6Pngt71g1YxHE27F",
  "key33": "5huu1LYxwEiBmpqC2YjaA1jHYgiJCqg9BAKLiR65hmXeSJgxTjbqLMuwEiguZ2jYVvRNh1bGMC8jXqopBU4rydgZ",
  "key34": "wGSHi1gTWzenzJgASvNhbakpjzeJFeGGxrebTg75gkrgjzktGAwGQwScj2tmrQSvcbaEdJ9Kej9bxCt3bx5LsY2",
  "key35": "3zyH5J9h7G4oEExSP9YaYKMH3Xw4iipzP1YrAnoVJrbkkPmidYqHbtM8W6TR8ShNPcFDoZQ6HS97mYXMEWwfYc2",
  "key36": "3UuYPo8eLsFs5wzBk8oxDGtGoUPrZzWiGqVgB2eF8n2JkoM4iH8YFNKZ8nDsmmnoBag8j6nbXFzsdee7QobgCSpj",
  "key37": "3xesLaGJX9pKrto3ykucMCe4LbZDfaQQFF5XVFwTfTEV97AB7Qekce4165mVHvPbnvBaxdMSU4C6x1TfjVjrMgfa",
  "key38": "G4HHVpzEhuyb8fhd7c99QjcGCGdEayEJdoiyPohNBaXVaxsLiHTnqpEW4NBqa6t78WkRfLwMg8t9RJ5BN2YG6AN",
  "key39": "2JdqUAskgyH7gbTbsQSnJD8J2JoVaaUrreEZm947id7YMUkadMT1n3yFxkedbLnEQBvGsAQLMGzDYHaRCEnLFpxK",
  "key40": "3CoiBzNEwvVy8u5C4Uham1U8T2m2a4jFQnaykrQZQc2FDGBjMxUXT75gdsv5fnm9fMd4MsLVrX5Vwz6kvFAhLYyE",
  "key41": "3a6RFrrR4adZWhUPnB4xELCcyY2iwkXwDvvPwgeHH2XqbdmkER51cnA2Yt9n9vsgSmrdGA3e8BWkAPf2YSenPBrf",
  "key42": "39QiARUqGHutKohn1jU96naBuQroz3iTFCFkTASnmVEB6uo61UD3QUyMhFsBeESmsgAQxyXXsiouCwYFYPhvkz1T"
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
