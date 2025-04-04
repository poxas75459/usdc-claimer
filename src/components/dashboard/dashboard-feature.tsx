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
    "3GEA2nLndEcgZdMPhEFbJL4HzP2pAtAmHUP2fkBtfHsrBYpJDeLB4isaSCqmSEUyTY6zb1YFivafrhgRBxpWQByc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4viQWe4VFBtYSkukjMFEfwmHD3CHfGQkht3R8j9iUydfYbGnvHSsbQGBWxx77u5oFvpoYpyf44XSNBai7NEpY2WL",
  "key1": "2gcwuTaruZQDuCdZhuA2mfm7f4uhJdLtVgScQghvcvc5JDQ6ah82DPAwFfLUpM8wgcYmtZ52wUb4677vPcigqVPR",
  "key2": "2KWYLuLxCGDJsXSDinTXmrvoe1fPDieqWPZRntQpJ5PRj49vLe3Z1izwoJ7vjdsVydXLzB7Va1fJ79TpCSaxzCU8",
  "key3": "3Q5ttE4Lx2uLqXBTHjbCDxf2mpNgCopRzxPydCKtigNCaskSY3BkxpcaEeGS1sEZ6vsJWpu3xCR4W8gU7i35vyyQ",
  "key4": "ovFa14ftNqEmmw7rzCHvwotb1knWfHdrxrn3S2tXzaANoNgCo7ZZa28f6MMyZiqJnRo6yvayazDhbptUypJGGEz",
  "key5": "4bBBLjiqsZUEsYYSQugw5VLCtoCkPCmJgDDK7efknshwwhATHiyh34qSG272D64vKrKWt1tVNH519KdFcHbV7iep",
  "key6": "yb2FLbdLutyGmGYNK2ir8dNtHiqgipbtoi4z1BuorbpnQoQaiAuzNXrJJixz7VE6XQJuFcE1CDtUVt3ErTpFGLY",
  "key7": "42Xs3pNEAyuW46QyR8Zg1YawRddVFgsFeM2dKUJR4JosFYfEDTLdhRF8bvCkjuoJvhBUAvEWczFpGxHMUacCHXCa",
  "key8": "4unEZUazp4b3afARwwXK4UaVDfF2So4UwgnADG6hju3ckmeBfqd9YYxLxxppXvUVKxcvfJWksC8rauuuc9rM8ZU4",
  "key9": "RQAyGEztEHnd11WMjBpc2a2D4jRqbxEaVFcB6ks7RWGNZCPhmmZ3tQRvbrsezgNKxq6rKPjmnfyTms7ocqdhd9q",
  "key10": "2adbEYJLDRgBpCWcqRqfQGcrQUH8uERX3SJjRQqamXTgSNMstiDFHwYEAJ8QaZAqPPVf12hHRL75jKSs1hrX2UDF",
  "key11": "mfg4w2Yq5pXB2TjrVo6cPXTNjWaSSZ3t1bGfoE7dWZMdoAaAdw9Qi3fr9GMRJBQwiMRvQZFK8VKcYcs78cdsWz2",
  "key12": "5EhQiVhoFq5pHJsra6dcZ6JPXWH2RVhGbsyrjmc3N5zWsCPbShdYWCBdfFquq3iXSQ3Mye9dmQSFEHhmLyd9Lkah",
  "key13": "naV52LmkN6uuVmPxgZg2xB8zme5D4hE1jGi6BFk5ZHHeFZRxJ3DvoSfcPN6Txm8Df8E9FPe2LP35kqfpQyv5ByF",
  "key14": "544DhcamfkK5cdcdEGkPkduKFZL79yvPWYJyeA5EsjnM9zs3E3BU1y79RvZQpxX9EJEj8jckBGhNJWLuXemkYixa",
  "key15": "4rR5pK6YM47hvTbZQ4TUNpDCMLZZBCAt3oGrZEQRB9yggTRrTcu97AiRt9ayGShkDJQY8zTh3ELrHyCKdAggnrzx",
  "key16": "1pJ7NGotdeXQRm8bq5sWGsWNspzzvNbTQKhh7razinh8bnL9DFtWfinDvnEJhbZguVbgsfFb2gkqa6cF9yPuMQG",
  "key17": "2xmSdnS9hBLyahxZ8Z3jZNm4NF9Y6zpRzuF1UaVi49xTBFgVpuGia8232DD3bWfSoPjW4LeDD54aSfQpFJXePnGh",
  "key18": "CVwz2hoQ6NHS95M3V698iWF3RfXDFkHLi5CR2RB3XsAa41v4RegVJAhQT2TQJwpmMFWPpAt2HAYPfGYM2kLS9JF",
  "key19": "nQqnxukRiVzBfFv9PPC62rzXox8ACtGhnEAQepCxKymdT8r6KakbYvthJ2ZxsFssJH7Rw7ER4SCXQueB9HgisiF",
  "key20": "337gkEePJ6iNAxKpBTHQMqZVcUHYqmHFyBBCvda5LPP4a61BcDHbbHP91yeePBLsBPsKkw9S1dYn16cQT1WJVS1Q",
  "key21": "5D1mCRVdG4rVWYj4s8b8ZTNY68c4WFtWv3B18sThLueXQJkMcG5r43A6uSCH4oFHjBgtrTjgZRpKNETwaezZohGG",
  "key22": "AQ2K5rdUohCHcUQMZrxvieTEg4s2neqQpCGn8ndru3xuSvpTKZCfzPuCdWHBCiqmqVdcwdWuXDSriJuxgthAD7A",
  "key23": "5jipbAijNzbXq9kcT9FAEy3qodaL6kWFYecPQHTUqHYrfpL4hAf8UtDJk8ycCgtd4GAagj5KfjZsjceKQyMHan4j",
  "key24": "42tB3GFCi8dqHYELGrHeEDzAK3CS79KKAmqaynLqekJxfjvCiGVjkseRTBdrgBz4wYiXGpCjyxHW42V6u6xjQD45",
  "key25": "3V4B3Yhuxjb6qXv8ckQbKzXb37nSfuKakLc7b9HZU1dChWPLLUHVeM5wYM3Uw2vxMzqkCzjxMvjeDf4RT5Awc7nX",
  "key26": "4GGvQ1P1w2rLmTpW6rkjURLJ3GRkkds9Mo8gH7cgFHyGKJD9ry3tYuiUhkkpAKcsnnEfeT3dWhfLJpyqZER3UFuS",
  "key27": "4LEKCk6a6zU7USTARny7RufYTf6Zp93FNfxRi4JLJUrBogRMsVdnKk9croWhd3XvZ9qQzAMZNMMXYsK6QTvYuALD",
  "key28": "2U8jWNf9i8UB4xtAiBgVs8dqKBDXPk9RUx8P4wbeV5iJvgF7KCbHRXwQRQRmPwSXbvU6yGRqNxQR9tKRLZ6no2ZL",
  "key29": "55o6SwKF3sze5jMimpdcPbgfAscgUhWfn9xYbL3aVMS9PykX4Kwv2iTyZu1XDaThYFj6egThawjAJjtiUnYHUwUh",
  "key30": "3GS8a8TuNXvMxL7aBkn9BfBhe8rGSnTiVCtUw7UJuUNqo9jSSQmquK5bnD7UT8ZJaSumo9rin4qYqxkPM1gBdSZU",
  "key31": "U7rNNYprWUtoypK5FVjwrUuhazhsz85UrousRMxVr7U3ZeZu5uSjD5yLwbTeg6TZguCWkh9qJJr1BPAJsjXsYK8",
  "key32": "2AbH4WPSXoXEL3DAbUNJ76PgRSw7h3mNDn1y8scJm3svwNJ8v8GkdtCpQVUinQdrUGwwsWqBUJSZyko3zuXZDNjG",
  "key33": "53kLpMfM8L9GQpPi5gDh4V6aQ78UPoCSdU5UQKqjc2t2AF3vTqte7spYFh9s678nSxHpCGZoNYT46bRYcy7pYiDx",
  "key34": "46cBueaE5c2i7YoeBnzCTEWv6owTLFe5w3XwhngVhDRSi2RwmHMcpCYpDCVUkK9Bzu48vNXxQDtu7NLEHVraSk1j",
  "key35": "5soguGHjCwHpJor6EwDGLxjfbAPqqktWypRf9ppDzys8c2KB9Pryu6SZzzqCkxskyRdZhFau5aqJWdd3WvEr4pES",
  "key36": "5mXoZYvrsnPeu4EgMua8XkPf8XZTCZbfKEa5E1WSvyhNQsKzbQsjyqKMYcX9PTDWgvuQx1xc5cb6E68mVGSJZq6W",
  "key37": "3pBqSPgvHq5qsFWgzY1PXosV13sLxKymJMS2y8oDUTzVLqpApAuSW4yQBdpFrKCAuFJWKwS1ApwEW5sMonYEd9r7",
  "key38": "1HniSSoBc1VKCnNHcv2ANSJP2XNo5Sv97LUZMtbopdE9savY6VdGn2FPRdGzgLfKaAQhvqCMMPeGn9ZtgnDim96",
  "key39": "7Amkfx6vN9R8r16HSxQQ8SirydsAeJzpeehymm6CpDNrsvjWah26JGuCqC2wdAZzxi3VWZkRADNJf7HR4iMfvTG",
  "key40": "3ZZY4JMiYWQwh95gYPFj5YuNrhRFRhBTUQUBaupL7ye4PUmTrwgDPBd2zXxVqCvQp9vhQdXNZVhAca7nkcTdLwun",
  "key41": "5GoeCPg7FCthiQt5EkfPHEmKiyodLn7mepu81PuKtN3LCifhEbvPTAygbgNo1UaEscVu1kA2pRUgaWv3DEppNJpr",
  "key42": "36aEAhNzA8ETBC2DfzRGJ4FZA9Jrac3vVRvcBgWEownDM9QEkRPfepBStChEQdGaNHkPUxCBDer6avzy481d21rT",
  "key43": "2En5YAtSKRDwMYKy4Xwu8ca84g4UQpwxiVwU9sVF9cgBYQ5VpSsmFP1ppdJc1VoqnEKovTUj2sWXDiv132EeJBp1",
  "key44": "4t6sonBFPD6VyeYMsrfFsRmXRQLukUr77bCqtMT3sR65mbkHTXwZw8WZU73vmAmuDkJexqW7mcLqh4mtpP9PV63Q",
  "key45": "2hgzwFUpuFc3B7MC9WQcVsv1CLy8Z2DuLbdxkmxnSVN4aMsCzdp1vtDB69C5GH7bJL53LS2uePqiG3zGeNE12GAF",
  "key46": "5QkHLqsAyW3Y38knpCAZUA1kEaNwSdgdXQoRV9MbGmGJp8WHcpLABQzRwXfJc3aTG9EvZwizeN2XSVDqxiJUzfTV",
  "key47": "pZA459ivvJqKpTRpfUKGsmRVQwwZSXajuJE4KaEoH6W7xX9yzkeDUwvmRzPU6dTwshTrqUJLdbLhHjVHj19LXmb",
  "key48": "4mvViiLuzhTwHWA5oSsoVZzrM7KPEZJRxsHrnLiB5gDSHgA1awiRBZSZzTqRFaVkVZLWBV46PWJoBTuW1Zz4Xxdd",
  "key49": "33TvxrnNACAyR1dSkmWFMLkGhRjWMZ2EuZxbA9whichkBkgZPYDj6GjxubJ5gcFTAjxP25L1q3fihkaxrcwjUtPt"
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
