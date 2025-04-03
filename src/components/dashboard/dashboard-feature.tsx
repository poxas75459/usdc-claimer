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
    "3a5JPH3Sbuo6mbr5kfkXT4uVpzSkMoYAm5WDXmPxJqAVxEnKMhzDcexaYdh82rNP2VUZ3hPXHTRWkjsxs9npea5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNFKqCoysPykaoDhnck4WqHuYMaV8JrnnhdA4sLa8NKmwSsParnMh4zfUUExmyNw6uSmjL8JFLHzZGNxubPmqs2",
  "key1": "4ACn3Nu6B56GtwWbTrMSW8uiGohVUERf7jpawrZXwX2LsQdgi1uXdBMyHhQKurM7u4EzQze4MLMRngsbM1zze8nx",
  "key2": "4VYNPgTSycNssTUGjoKeBDcdVvSLcHpwfnBZRrWzRdfP6pAe8t5fZ9aRbyk5B12czEY8LQvF4a2Q8Rz1mzBKBvZT",
  "key3": "3LhnD8a7kSJcM34vJX4nHWw4Mj9GyC79r57ZW3BEXNbcj98pMvgk1wydhM8ZQJPzEf56fjAQu8fWB4UEXoLE2FDV",
  "key4": "4Yn9z7e9yr1sMG99Cf7aQVL6GmBGeVy7vfN1pd9u7DC1qvK3Wn96VywYEKzKU5Xg97CsGTCjShoT2R1Uvxzu9Rtz",
  "key5": "5M4hwpbdBzsd5eFokuovMBaK5wotyBXr8cFGCHCyuaw4DNSudrc9khZMbTbg9TyJTE6JgonMnXboZsA45sPr4d3W",
  "key6": "5TgRWKmMPSWkNjufkk95LRbG7wWpzJjv7XUt39xZmzhqGxdNW7HbNs2AAX6dknkR249u1nLaJrvKLsXLiK1xPm3D",
  "key7": "ZiE4kkBpadaaaybKDb9EX5fRZw9YPFV5TTbBFfZcdaSugoJMb6DmN7fmrNpZLKwNY7iAsWWu5k585saRd3YXwvk",
  "key8": "4TV87HY3Egwsk4TxbagSKQwTJGvpCpjos79sBkW4osKXiKivmCs5AuUvgBytskofhMAuBJQAaE5QwncMX163iK3o",
  "key9": "93aQwDcVj2diXmjzr9kxokW3P6vkc6rTHMnpuDziGKCEVS5f4CRGTESdPx8NSt8vn7iXMdqCsJ7ncj3DxsuDd49",
  "key10": "549s5eC1HC1NucyVzHQhtHNhMo8XVHzsoqmHftwawBZxfHSGkyX1v5uaTaXijaPJfi5su1aqUZRA9qbSFkbX7igj",
  "key11": "5LWbDwGqCASSNPeuriWtXB8UMxC3MnQF64Kcj2Zd8wunMUAqY9sRs2xb8fgohvHKrsmMb7BwnHLm8Nj893Kx1yvT",
  "key12": "4cVDP9yuDfbuYEghHRANFFQu7EVo6cTu6bgsMnzUUGSzbmTZXT4TGN1knESEsUuuCVhBuk3Uc3TGmS41Meu2RrEb",
  "key13": "3pT6rmrgSQGMPiRzcdRtsAKmaRFmefvTeRorrxXoMvFnmXd3dQEy5E7uNx6gnurXQnvUvMPCgpnJb4koTjSVi4pL",
  "key14": "4qg6pc5n5CwaTWRjPjCD3E96FCxUMnkrQ5huojwpLpQEbkQjAU9RroaA6X9UadDtN8Hb5ZCVKTjWjL2L6GCMMkLe",
  "key15": "FN2ziwFzmLEHP7D1w5ZQHDdSbQBVkYsPzy9W6srNxivq4dGHtiavLGeDL2csvvWiHjtpRpiynNM9FUVcrVBLxk2",
  "key16": "42PKBQ4KPiby3SkS811JkRHsCrVHJjeubMLjHDwSC1cxyUrpCuEQirKhvLZY8EojFNyzB4wZLEysNs3Eo6chPmVc",
  "key17": "Az8Hbwwx6eEDg7PFowJxf5NjFiS6SVJQz83RmqdtZKCxnojQyCHpJ5KdnWkg9AkmyvMNLZ7NukhHAv1Qm6NYY3y",
  "key18": "5PGdkNfnqhcYgjzRxjbEq5CwQiz69763H6SYHMsLgRBbwUHosTT4WmFNnGZbKToyeUQ94M3eUjzvZnuAkojhEMhr",
  "key19": "zEWPXFfTHpecxxKoy9q8Eiwtj3QFAavB5ptA6bkjn3g2hYec5v3sANKnRJCquYSuJ9bdrNdsWouCixCN6aWJBd5",
  "key20": "2BEpbyZXFmvVqU4b9Z9WAi3ZUSJU87ThydYBffEdso6Sdb5BCmawosyMH75i2ZCSepd89fVQ1V1KyF6t1R9m6zPb",
  "key21": "4ak8dWar73PYHfja62TsWHGLsFVeqbieABxDNLfXBbzwLP1tHBHisZtat8rTdTH9smX1rUK4uFYwwjUQH5CcPfui",
  "key22": "KDeMxxZMmYnMAuRYD3G7W5kShkpoaaGymWP9rTMD2QrYfuBPjs6DAAmMH6n9x4Ayf2sGyZQaMmfXVxfgb7HAHDx",
  "key23": "en6fRjqKXTC4j6HuGCoNHy3qEmWK9d2exifzwz3jXJdUfiLmyywhXzVixnZb3DFe5CRDGkQLbsR32eZoAapAaSq",
  "key24": "UAw8s7xDS5bCD34znHKzPypXm5yMh2LPtfHHVoXKQMA81VZHou1mZUHbK94Fw7wkyE8uEZKjq6szQ9cH6sdhr8v",
  "key25": "5tgqJP5e5ktkzrL6YebBE5NWEVxLDiFwkUEgUQCagkm7Bdf8wDavdg98FNxMhvnMbGtnANSmVrN2DoioHcbapFaV",
  "key26": "4CyNzM7oC3NnUYg5eqYUdn3TB3PzzghmUH4bKdKkYZsDjorBY53mpec4vGmbHUR7twh4AHo6HVTPHX9ojjjiHovZ",
  "key27": "55vCfb2DVgzQs1yixa7NXxDYwyLDYSyguK6VGB9RNp3XdpUt976qSGno4JsgVe9wv8B9jPDSy7Jbpiz8dj4wqBie",
  "key28": "37KvxDkLYwVQ6tWnk42sZiGrvkhJMJ2f3PCRw34rdA5bierfp3yDP3mAxHecMyiAVf9qEUmnueS7nzaVn6SSod28",
  "key29": "2bUJqbMa2AJ2rAzUVECJ15fkyu6kfybV6gGjwoijvRRa1zY9LeszsDziPHCQMT7tyhf2tQhuCwXKuEZKQ64t7zPD",
  "key30": "2anhkBKZMf6ZDVGop3gZddTwNWj4aezmmV85jgRQ79bHaJ3WKzG2cM8PPJ55cEz7Eu76MW3D1WJzvQj8Y3rS88tq",
  "key31": "4bqCuf1zbDFJq3bi2varnfeVpvVCGYYWDHpA9ZvAZak5zme6jX5UUyQKqwkiTQw5TneAnx1jcULcjwAunZs1YmoQ",
  "key32": "3cQhsEPd8hkGsLWVz8DvaqojnEwG25V3DuLEq6j632Qak5ifVPSn9Gvwi2nf7r8REhzzKaoromcsDYcu9w25Xumo",
  "key33": "2DqGdnWCy9UMK122irRenX2YJXsmcrUVtertYrdKqTHf3R4G9UfmJ3SciJLuNmMse6VLu39L8HUqMkMrnpLixPqA",
  "key34": "5wEZqaQUEbRgmsJvngmgxGErAs18o8ZdGgfVt5q3QXjAzSxZKb2kJDHVnvbPGGEc6bJUric74pPaDYjxLPLvW6ft",
  "key35": "2Wh3Xxh1qFriA1qTwZEMEk4wruxV1xmmGsJomogpnxEzkGpGcDXjWd4VbLht1Nr71qdm3UMqa4uRFfZeGr8fMRSf",
  "key36": "MPrKqvopP8XA6BGWWzRTBJYx3gvEoukwJVotXZzv3xrWTYxNvxSfF6Pxh8zQ7QvEqUtahfbESYHW85CxxGwkQUQ",
  "key37": "2BVZhAJveWPYzUBXtY4bd2xHLjgRjgYQDEUNFLEtWZzhBa2Wfc9dTnfBZsjMo6T3ugg557Nvus1CdEG5ufZuAmgP",
  "key38": "64vubnxh3NCaJEf46UssmWeTjxoGLrh2JfjozGkmnJSEYsmnkmjRNeBM7iUpYvZU9WLguBwDyHiot4xjr3xeTced",
  "key39": "377N7cKrXyf2GUUeLgscpTXNL5MUxtenj3S6NgP9QY8K9hBUc3XkYnHKK8K3WWqBDDLKzo8MCo74HjwMhUz7arpy",
  "key40": "nZDGbP9v9uNjtomyD5XwqGya7KPWMBQyzxrA3E2DW3JKb3nv5p8yPEvZfrsyhqR1u7Gk7xkpfsy25PrUsH2rHmr",
  "key41": "bsdJW3FghMMX3WE8LrQ73H1ZG1KqhwSHGxRafGyPXbjG6DE9qT8QGeagRcGwRoQvhpR8Aovee9joWpoH3wKSfDx",
  "key42": "4YJH6eTq4vDWADT5Pdzr6F8UK3iJjPJkWCbPgXMxGxVcTfWWfT9yXApfLrmhAqNyoB4BkBXDBcRqVr3cMVA2bxzW",
  "key43": "3iC5vGakt2FtyfzpVowwF5H6Q8NJQiFqSi7gi6arYji4zwnvrGbFkQRMvApRoHwvd9AR4JoP8dUn3cKTq6h3PxsL",
  "key44": "3Urh2eWW7PH2ebTK2EkPF3yhPXZMPt9hsHLmDkAf98q3uMwcigxfmoEFwRDePpdLp86BZwTVjvYQWHNrKtHfbah6"
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
