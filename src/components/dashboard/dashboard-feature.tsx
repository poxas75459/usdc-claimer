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
    "4tJuCMBYxU8hk8JLuubDoHLkcy6kMP8ZmzcSP8yg8zqm6YvkPVeB81Qn4Q1isveF2d1LiQDw4qTTWmXDeV2JzMUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ACthfXitzdYEUBC7uDfEK3Z53ScpsnyHyMfgcHR1qd1mPBr287NimSKuUmzpesSvWg1yQvTwaCzikx8Uy3vtgUm",
  "key1": "5Dn9p6k4fQ7DNEk9kop98LzShfAbC5KrdHKTUheBXtFY3Xc4zCHfCqRidDq3nD1LxcHhrjcrKMWRU9TvznxMYQ26",
  "key2": "56CdAbE4j8cYwz3SC4tWGhkNMfzSe1N3vbHNYXGebmmHAKm9TKZedHTrtiM3PCx9Bid2jWp6JDatFZZz47YbqKrm",
  "key3": "3DMRhWyt2sA9DJvLg3ariHncY7hF9jeH4Ju4Y9CT4LXPJuifVy31aQ7UZFvsxsZriiB5yy9VEk5Z91CpfiR7sMU9",
  "key4": "31xGiPiP1JwTtdAnUgDR79hUFxFtLSbpdf7DHuu3pQA8oNKjW9EcCgoxUXiRu7qajDMyQDL8vPtWiXTAGSxQHoYE",
  "key5": "3kXrRcAZLa9D6KXRWWAGDoPE4DLBJCFcrvkwDVFsKmMbfmdCLdoBczrtAqLSYvQvduCijQKgey4DpwEC5FS4wAPQ",
  "key6": "4n5EfGtN99BheicoCeZjJ9CbFj9HGrFGyweR6KwPSfjDuTnL3mWH9GAe3sZauK6etWWGvn9YnkN5dEjyiVHrN689",
  "key7": "6jiQvsEYZ3HrGuNqk9LKEVZxwnhM29dVre8fE51aYwnZs3D1eBs3KfKPJ8XRnLFDpc53hWAsFwYKvtMF4crN4Lg",
  "key8": "3hmW6LNqhKBpM2xRhJnR68W6kPgYdBd7FHoBU5L3SqpUvRc13sj989x1EQ9d5jsXxwFYAM1JqZ3RJ4S1MATWmCXQ",
  "key9": "5NoCHfRa8pEhgcwfQRyTvw7jqWiAtbjg1VkG7DJmPPr87HVAY6WSd23g2fHYSuw33KgJBXHMJceNBDyjTzhsd93N",
  "key10": "3eeH6bRBcAsvYiMGTJidrWw3BfuWajwtafbmFY8px3BnS8WeJLut63yp5x8UUECjkRhF4ZBRTwsa5qrSmPETFvR9",
  "key11": "3MTNEiocRsQRLs6fzGvdwNDje2BEaweZhWKGBMakAr5X3sCGPKET5ZcBifegcJheg1PfrFbyocRThhEhSVvvMeTL",
  "key12": "P5UTmj7UzbbWYAr7eQbqNHpT33Lfta63QLQq8m25A2FPDKHDxLirMUe135BgPiamnjWsZQY8qH6GuGCjdbdcLvU",
  "key13": "4v6xbgm9wNVydZsoXgT4U5P9bgL69J7qWvvS3RcLoFLZ7EWYxEEY5gEKUvG3qdXn2rPKqH7a6cGHuKwhDYsXGPwS",
  "key14": "dtaFeFVUGWCZ3dXLLVhnQ7vkcLiAmkaajZXHURmv6oihrLVXyVxPyiUAdunc1uhRksAeu2icdcNQcWEK7CihZCo",
  "key15": "4j6gXRbPBGR5jQdk2B2uTBbuH6xKyGQoWZ5V1QBxquE6jjymeG2i8gx8d2nThLLP6Py4ZhCQowSiKdrRifHoJUqm",
  "key16": "SWWrWteYPKBKHXK3NqT22d7mtoKpidoNioSsQsWinGciWWwt6DmBHbKNr7Tyqbqi5fNu3wn6vXquza7Fjh19PGp",
  "key17": "4q1L61Krpc3GJQK3TGsvdP1xrhnAf6VwP2X4eKPvDWvVKMiUjZbzJeoECYBqv5yxDuF1BPJEeqrnFzHAG5YVaTGx",
  "key18": "3k9iy5iJ6bcnQWmbTYP9Df5qjsxhDafmuDFbnFEhN6KtukFrB8X1DZG2ffcQUJqwDzJ9ctPD5PQpV5vZNeULEn3c",
  "key19": "5GrjWTGBNopssiC17jwFRovv98URADCikHtE8T8g2gSddd8hYRVFktAKvsj2DLiNVSnYTJnCbZrzRnLSK8P1ve7K",
  "key20": "4fKLr4rwf61hdL5kUWjpswbgKCocG9wVcY3b4tpbkiKuB4shv72Y3LWC5qfMuxKsTishPDk35LPxFNZx1AFcqSV5",
  "key21": "59rmwsAR5cF9FJrA2Aiqjv3UWyruL6gdKfmkhzHTjkPkvWc4zfERhngZvE7wsUiRD2paDpvuTVQqVS8eoWkYH19H",
  "key22": "yPk8JKbKCsKe3RpuhksTWiWHEcLgJVWX1D2zNLJC34FnVEpP7Pd8YzxaqQC7LG2yqs1uGEn8taQis7VuPDtq8qa",
  "key23": "J8VUbJ3bAbm7wc9VAyfCg7NqVB1sXJJRbLZSatnrgyP1J5XDupwoE2eCdUMgrTdK9Zz1DGw8FgHF5ccTygv6stg",
  "key24": "24Y5mJUDqMHq4jFS42Z7B3gnqzwWVPjRwWDXr3fQGAMyEQfCc4FrCL1KJjCarhaozbq32cXVpxVQkzpBeiUceEBt",
  "key25": "3nWYM2rGG78e9VazyZAVjdZq8cZviRHb15Bv87Yw1Fu86XgjhHeJzzHPPmKe93aEhxRU2qZ7g15QZF1kDvJTxPVZ",
  "key26": "44kPxkMbACwLunWFVRDHieDvikz74KcQvxZVrUGPWBrV9qKtSc17j6RECb7gmhc25wSuRds2ZaZHNLKExVu7kwZJ",
  "key27": "5PXK2qzfpA8Uf3HfLkRWVE1wyMwiZPJ5pYQxK1zBUxdPp83gXogPz3VakV9QTGnWBDTdWNTxAxWKMTMp3e2ENRAG",
  "key28": "t1KCY9ndLxXat7wu3rRyXA4d6LJVZxBc8P4zFK9DGq84UXRKEFEyUT6U2xC4fvRucqkvcm5hhk5uoa6rmYQfmV4",
  "key29": "2S7YZwsLzECZdJj65ZfTiw5MEA3xn5nYVawKgR5RsF9AdmRSZHpY8ksMHkDsNgDKGzos2EaRVtG4G5i9pgTSKdLw",
  "key30": "5JaeQVJKg3tFfp5mbVHd5fPEcom5vfuzBSbe8LCsbnXQwhmHDR3sLea98GbGvuu8ZGHAdgWbRJoKdrNRpev8qCwd",
  "key31": "56bhCztne3dN7ifJqDWNFxRDSKucYdS6jmURrmRuNnNRKKB15czauxW6dUi3xDzunb6z1DtjVtHuhTwCmVmnMAZs",
  "key32": "3htRSNysYDKBNKnpFP1RAJxixjWvFcVkVSzo9HniLvA1BXKo9D3tKwojM5iQwaqGsDWq11BPKPoU2zjXGdZzzLnr",
  "key33": "3kJq6zErnyGpNnx3q8NxhWdZKiJZFLp8HFYUhcH4W53Foah2uuzLqXL8NDjXYwtUFUnPXfUNxghZYXfJRmCD4vmn",
  "key34": "M174KPs2r1gc64DtfGejGuPi4wfRgP67otd3YWpTvc37M9h15ermzhAYp7bm9wGavpzZiQmNcRfcfWsx4J7SQH6",
  "key35": "66h6fQt2xqvpbKATRQp8E9A7niCNP3E6jubGutgRDctXCSyJkXBnoX2VDnc4rTivnZYZYxiaaubjKpvad41n5KsJ",
  "key36": "5Ykq4Eids9wubBxXZdeZD2wVWzAcdUVSWqk14tkZ1dxhw1brQmDw77wm2TaZwNMSjy6ZiWjvQp34xx1oq7GzPosn",
  "key37": "4YqnBWUKdgSzubK3QN3WtLxudQLarbZ8b9zyyRY9Bi5ncAh7EgBKaNjDf9qHgbZ2Z32qtKcG9GUaZ48CrQHki2vK",
  "key38": "4fRo1RQtp7wg1JjMifx2BEf6Uw3N1Pe5TfWHuP4BWMbGAHaJT1c1h14b4wfgrpE94T5XxBCs8o1y6aLHoV7Y5tky",
  "key39": "4Bb7WTLghjBfXkiY3WoyQ4oW34tvWuJdgFJqPUkYEnyj45U6TB5k37fBJsHrin9nVRA5KBauwQMXodkxQ4xUZ4vv",
  "key40": "fSfgTNCj2pqXSdxGT5DCLzz9T9e1tLwGtkM4nY1Mu6NxwWJEWy545G3GRzduHZH6irCricdrnpxG4Wivm5ym3HT",
  "key41": "5ANZuXHGGyQvn8uGhLxacfN2YXDQT8ArGbq3wYfyJJ1o2hEJJxxSh3jiLJc4DzsndUiuPffCLS22AfM3RrGR8vXc",
  "key42": "3k51hoRZBnyHsm44tsZX8KcpizQ3jPvYd87Jeb6fjqYq9C84ykyLnGeiKjZidhh1HJkmGqq55XnoPkhaDJKDzJsB",
  "key43": "5Nv16hcPyeMoVJ9hsbdovedekiCz6NZXiqvAXJub3cw7UNzbu4TXvVPqdHNNbczGX6wRT8LuQ8J9zgT6x4vJFLqa",
  "key44": "3YPowBadLkcDx3z1NcZP1JBnd1AXSdTUjnmik4h6GZTPDWtagYvjwgsfmToW1oqqNRNCxAiiLQ5muUffgmfp16ja",
  "key45": "21616y3tg5VzpvuoHpky5BunHanMQyfLipz5pR5aCPHGutKRaKAoYQ4HGGjUuPpZBaiRJPtPEjLWLnNgGJH2hrC6",
  "key46": "2XrKgxPLMxFr4jt9SDjBFdWApXYLxh6LjUXcdFq9nR93VLFqW6eTRJq8LfKhKfCdZReDGqqd7d3vQ8B4qFXgCZjc"
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
