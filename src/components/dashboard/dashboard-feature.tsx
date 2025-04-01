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
    "3KGbLwsqQsVM9mPfgobHZkXdZ4Lokp6vMXUnS58mDELHqh3hGx4Wq2MS9H6q93ggrhMhvVury9jfp6Tt6n8oSaZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j84YWrm4uWPNQHKt1Cr2K7G6ypucEB5nbwacMNe1LKwDNKd66dt7AwXYPyaDBiDXUf1LoGi3SYTwk1eE74byvRr",
  "key1": "2kTJmgEHrfngr21g2rXZsSj3JSmieP6u5egUWzq1ST923hxAWac7MQCivX56dhEWdaFiF6RjAbqSyjw28BcQtv12",
  "key2": "2tpzCfKwomVznPiic2XzhBm4SB2TPUaVeNy5zwhPzQW65BBpYRuVjJ9jy3pZUVs7HAqFzmofn4MNkr52zUQ76TPY",
  "key3": "gEmUGsJr83KgjEUUrCcg9VGygUf15H3WHUQjcP72rUxi22bm292ae6LyLuPZQiFM9vVndB3rK3YxafQjXijt8fK",
  "key4": "3YkSt9Xg8ENrMTXUrSnwNQvzcePMuRoh9JCBQaZCtBm4LaVVhjPTwLALQLvKNEGttaJ57ZCsJeKf4xz9UoKgyMy3",
  "key5": "3p2ReMUemFBbyXKY1y4KCoqmqhZbx9qFXLzrQvXsxrAnTFLy3TfR2oN2eZ9PKN42v5HuCGdBukFjFaJCUusAeQrA",
  "key6": "5j46rktoroDP7rs2h4b5UhVenhCCK8fiFDKFTqUtLgoWkaFfUK5oA3JwCbwMMzwQQH7kzNLjcAc6LNtWvyc85kr4",
  "key7": "5yRyexLg4AjXvg1TmyY6w2B4RTRRajovCCtQaX9APjBEtmG3mMGJ9Co2oyCY35rDFeSJUNzapSPac6APchQtLZRr",
  "key8": "5t4ruW81fHpMdbdnTRaCgGKBfxFEa6Rs3PhsV7pkEFoTQke4w4JwJgHs1Hr3M6K29Bh3gdcmLD93yomdyvW4E2xk",
  "key9": "46cnmkUfSQBq4dDkMSPBfBS8gbcnF2Mp9QmfxbZy1CJteJZFkDejEpdLvUuheQGhkBp1VBy7DLZGrqBaRJMcGmzw",
  "key10": "3m74afXs3CYD2FGTsFaEXVTLRhET9aPWsvZQ3GqzkfLK4VzQrrGwWUTJpwhiFVc95Tgkkt8kPg92bqfxBx87hvo",
  "key11": "3dhmd7y6zQqw9Pt5jxxFYPznrGRQZT4tCUnskUY9pLuKgbT2gXv5z3Z5LkHqkuBcnyBtwa4hTLgK2Je1QzhZZWcn",
  "key12": "5S9GHS1rasv4GXjiYG1cEomtC7txyioA7GtWUGGjU38LZKCzezx4U4NFnV55AZ3rPDH4Hfh3tWEQh7uRDpP2NA9i",
  "key13": "3EYr7PCFAL5bLgADfdcMxZoTLAGXFCWd565crz9TiuBpo5Yj475sxkbeAkfDgNwgHncYvxJV3vzrqKvWeYGpNhmD",
  "key14": "2ggcGhnFk6A1wZYfBXp7ECWsvqXeuMBVs2gVeakGDTXVxdb8TsKHwAxMg13dK1U5rTtG58hrEjamjFAM87fZUwXf",
  "key15": "3XW5C2snGru7cgRHKoV3vR7ej5KX67WP2Kz13XZ4P9rGJf87dK6QzpBFJAtgZiT53bSZtiwBGBYyNzx7gaxZ4a3",
  "key16": "249JFqoHH3JxVLC6qMbhE11q599ruN2sm7HheDDmLS6yLHHDTEpeoUJcqN5J2T69pKcCW2pitwSpfFu4hpAjTDzC",
  "key17": "5JVSDr16bnVhPug9LYqQCq7d6gvJhdPCZ6zXWZC6dHYdQJdJby9wSkdc8iwNttcnWrjS9WwaRgVNBrZozhFSQBqg",
  "key18": "2UFLHhFTF7QMH645Lxruo5cXBnSrkx4nZi6uD9qTtnJQ3S5zJ1XDkYqurNnXgndmseXGgmnxUgYqeLUnyUSGeLQx",
  "key19": "3bZ8iUwFaGfijTjJUjxgjjXhfqDkBXudBwcWEumfwf5GXZctHWUeB6XUxgCrYdKxkmjB3MgKMCZWK17dHRZZjem1",
  "key20": "J7hGYrk86xjrayUf5oaGJCwHHZEV6tryrQz4tRi37tF21ymvdNN5Gt7nsMPzTFo9q8i3nCMhq57ZpXKJ8kjNayR",
  "key21": "4kyv2kQnZzjvLZ8JqnpHDXuQVEGHfMBTDKrHi8SKkzq45GgvyGG6CwbWMbF4D4E45KnUztzGwu7rjU6gcM8rUsXV",
  "key22": "5FZiX5wYoyTHCc7PYAVQmWGUTJE3c2GgYdQhrLY9MzmUpJfUgtwVpFPRazYtGWvxRpmDUBmroskHu1yU3SZEmij7",
  "key23": "5qcsNB92xEKVXVgK9tBuEtM6aLUVPknt5NjrQvJ5NdyCftSMAfmhGeQbMfZaLefNqigHtQm2cqnbrDFQmccHgzZU",
  "key24": "67RVLjBSWzhvg4fYDrXvRu41pVsAuktZ4K5wQ1vb5y1gbb2sAchuh1HTYaWD4d9g3Wa2b49BQzi7TT1NKFg6HvgE",
  "key25": "45uu8pNAy58bSZfxxoDRrFX86KTuXUUy7Kqhi2GYSDpuprJjJmsxfHZMFMGWfjgAQkpy194JNd66FCPiJZvYK9WN",
  "key26": "5EjWwvsV7gbfk1iWgkvDPpVPTiBnXJkuzZSnhr5ZuVQcyrxmkj7vnJMaSz64utRDHRk1UW4DetM9XnfT8LaoqifX",
  "key27": "58RtnPBE34696nHFyyLWga7nFkpKfx22nXzusDKMF6FGq3LykNZqaK3uzHR1xbV68qT2SiEXHdtz7DgcJbh2aBuc",
  "key28": "4E1ZVTrhKS43XUQwqpPG4pGT8C8BDPcencUvHWjykZfqcku63hCuYn1LiJzD4LCHFBcehdq1io6xLhxrmuY3FgQB",
  "key29": "2BRa9oTN5XAcGU9SLSLHuVZQLSkGSJtAVtHhqDW2BM8D2vPS3q8ziHcKcp5dS4vnRtVjP1wLNF6tTDCiU4bVNNm5",
  "key30": "2XNTLy5TYw1CnzzKJ1wZXGA7Pvrj5Y4LrT8DQaWuwbgF1DCbbaMe3qMCAfew4p61Crzc5VHaZd3cie4mzkeRAUSb",
  "key31": "32r3NhdHy2Gz9DM99tfNjMdT2Rafd5wJrLHqiHyztSV3FMxUcRy3bJTp4P76Da2oKgW7advMbKzQyZBo9gCsMcWn",
  "key32": "4khAssY2Pfr2KN31cfuHqNGs57kh2X9UdHZmSHcJEcuEjgRQ2FXQLX4c2mS8TXRDLidJmPM9RXugWfWiynworzBn",
  "key33": "4bDTeF7wbiaYgE79uQuJDtSfTGuqE7ni7Cbns7B3NdVjv8iVqsUVa14jTw54fZFDZnPhQ86aMor7ExTXitfp1agG",
  "key34": "5i6CNSdzFHuU4gje5yDNGkVvchqB6ryDHey7hJHQiH5UGFuoKbZpA7pF8P8x69s6wxZLDxikK9oqSjCAXNV5Eb1X",
  "key35": "bLVqXGc1dd3ZvPSaYDDBgYBHh1xE7QpafpDpgTGYxYnkhzvtJpedNPP4gYPxS6Q7u7Bxw4xbQHEUf7D8euXVL6f",
  "key36": "4vyswwGkNpdV69wdi5MFHekQAyaCEz4gsCCeb47D6j7uytJmTA6q3K4nAaRhTcPeE6i2xRPD9TeCM4VHJXaJiHL4",
  "key37": "3ChPCf94gzxuP63nn57ap7E865246Xo7Vtr9DV4nLhJdzv3c9fBzyHNjn4doFJkRTT2vtDn63v8rL8b2GU4hVTUK",
  "key38": "uyzuBZTFKrcvPSoFEeJAKSoP4ENoEjHfCdbwZLwv3gJGB6MT52jLTy3UMtXwmciigiuobKCxnMY8713EJf2UEvW",
  "key39": "5LpRk5thSJKhQE9a5Euj3cyg15wR89Rwn9uxvgvKMseoYDPWu2iQ8PoymQQEf2HVCkMVw8zCdUYPG8R2bipxmQqH",
  "key40": "4WLpMyiLsm4YP2ezsEpBSdDmCrbbQPyn346Tw8tsD8dCmwpXR6uUCE74tRFfi7xgNnKmzuYwH8KLJYWDtrm5vEFa",
  "key41": "5RmPP1sp9RoMKFajP9ufNLTvgdWGcWyUASSN7Jt4NpQN4qH3Q9R4Yo8owVmwHQbthUpQb2h5sRqqqGtKPoGBexMg",
  "key42": "2DB7pD9pGnvro8LbTcqDAKQFkj91QmkxmBZ7d2yvZg34mGgrbL1a6DuWm5a27fDw5exYKbBVMZ1FSmxci9KRo12A",
  "key43": "3CcJNqhwAzmkVyzzRVXU5Xvyt2gWeP6wfS2uPbciDgdS83Fj2M4JsF63GmPSgKUaJkKXvxtuSCt8tws5RxokGBrs",
  "key44": "4L1zfUsKiEUieXz1Czhj2tt7n1n8TNfahLS4GK6ZcqSts21egPSTKDwxQ3wujDNHP5kCb3JvGzBxJvYPY8tsLFrn",
  "key45": "51aBH4Yh8xBvt2nvzCcW5kQQyPjkGTeYjs9nFLK1HvDeZc5dtcQHCwHntYDFy2KTh7GydcVXuaC2eV2UpaBDY1Xe",
  "key46": "2NoQ9WGMerK5hYkC3esVMxXBjRvVbviHArv8pcMtWVor8tpDVvweMhqS26KVCBfzVdcuMrDnoZ2TfLVpPkmgmdrk",
  "key47": "2iLe1gRV3DVuVHuw9Xv8bckmqfigyaLnXPvDsvCsH8gcHHLErzjZxmmgSqYQJ4FYtWv2kq6TDQ122awrSwAhkZDN",
  "key48": "2oqkCRxPkiiGhGQEbZi8GKcMpCWhSspgZbnKUKyBT1MHcuDXcqY8QQd2fY6kZhzi7T1VkzMjEHqX4rPSgYYoz6Sf"
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
