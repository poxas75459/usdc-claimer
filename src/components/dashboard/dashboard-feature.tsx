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
    "4FKC99heogf8WFzEA9uKmbv1N4EofTNJnjdoi337unsP9X348HnvEkdXMKHjYeCQCRFooc6urqqSdRYbyyemWf9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p5jzRTt1kF6fEjob1iJijj12DD7xFTZUXwEarm2wMro6AtV7BhHWsx1osdCtM3LiSTdeGnBCBjFhrB2A9MvNGzw",
  "key1": "5RLYQvxBLNTVpqw6SqxN2J32Gs6f5Kbh5Fv8rUhyHitFwWzi6RQMY8QrZ2hx7uM6NRox2sscTXoVZTYVgqE8jqmT",
  "key2": "3AKdNYSj4Tz26LNWsAkSzWHe7KMyEr4cigzXWspxjcZC2VCjD19ReBaTtT775eLfDQkmtS7NkzjmoEzGvXzEQgBp",
  "key3": "2W2yzUfbMNeiDcz2rZXgBeECAcTfBWa91Zi9VFRCnKTdonKNvdVGvJGZKwpqo3uss4yxTAsiN8JdhB57BQGUDUia",
  "key4": "66chRC3wocahqJ4CRstEYbD4FYATX8Gsvgf76azBFv6rHaRdVZngtZfAguuUnvPBkkWbGJZPg1H7LSXmEvPbZfe6",
  "key5": "zQiuW16PHoN6Ax9nUZ7TMeHbXeEjBWfR3AiSswHmVYkmujHZEdZgs6ydVLMPEYmXDmfzjjRWaNMVDFGm7McyyHA",
  "key6": "37Bp2211NVG61iDxZ8hiAt3AodoPBeNZugG5qNY5SEj48kTAgydethhmgW5adREyB6U2Du1TgHYwteCuFvpC1417",
  "key7": "2e8ExSwzb6GrwVaF24PuhapyPyhJdtxL3k7RkakdtWVmjfnCAogU6j8GHJGo2H6Es189RD6amKhQ4fXobRwYWj2Y",
  "key8": "5txrApKhhdBSzMHph5M2qoUj7jofsugXiZnnh5ovQmmiVgGDH9E7qfEpdezy6wYTv2fsC3d9FYmZNHu4MTHq7exy",
  "key9": "5MN7ovCtozfnc11oBNGbESFwa8PnXZSkQfmScwBcTj9fmcX4Tjv13Lj53D2tm9yGcHTCv96vYzWRXbp6nG3c5EgK",
  "key10": "32uYe5xTJk2MHzhLcvqHPWZZUFqJQX5YeUz9zdKW3SGTdiZBny6LMzSSXCbUUnptCjsQT8sFLZnVKAtNsYg2D1rF",
  "key11": "55yQCFhSApJNzjBeKqoLuDPXonZreaRCx18o1LiTLuvhzrcKzQoSB7LhXhAjc1i6oY3L3MwNWFijgR6FUhpaGqPW",
  "key12": "4YGzvesZuMUBYom2UjLhaDB5zc6KLCY6kMz1g1eboYR75pbFmkZmJP6sGyp1DZiQvLNr1gh93nNnW1tidZHmGxCT",
  "key13": "2LDCn5x7J2gBdSwTpDsUaCukVzuiDUKsrSbNV7GGrqacB7K1v8ZefpScH47pqoYCyuasoMF1PDgymFZmTy8a8sez",
  "key14": "2EubXDh6eaaB7U9TL6rnqfgLupEdrgMCpMkXDT7GjN1u3Vv8ZcGy9rSKF75ZNAnRPZvHf5Hk9HtspWtqsS1wHpGr",
  "key15": "vZj55WPRAuDYf8rzgcTqhnNMXwxSiSsZPS5KXxEmvX5bLVsitoPX7uUuURXJmqwk6G4SNKWZ9YEBibKps2KvYFj",
  "key16": "3PdGo9S2PLdvG7fuM51gVLn5jTFgxfLD1TzbjHkwr97vDyZbQgQQ5EvkJ61R94tAqmXKyEiGSqAeeUBNS7PkELZp",
  "key17": "28HsR3TwmjtBQGy2Fqizit5XanGenZkuvvHBgZipMtFyvkrSv8x8qohxi4at1M5R7jJbJNeCEC4f5WPZwGAbwhc8",
  "key18": "adUwDMzCiEasQLa3RGLuUTU3ihwqycWAi15JGcMxujnhxNxC3CKBLxR7yyr9eRGNYZB62ozbF4LJsVXJQBwZR2z",
  "key19": "269eVHeecqXuFZW2UajqkGLTx4SUL9xJWn1r3s6brRmMLsJgd1PjAnkaD5QD3Pp3drPmXpkzaoK6ndXMJPmcUw1H",
  "key20": "2CLtRdYrHrqAmVkrMhfjZmjVJmLC8LybMMiYZ7wGrY8NSb1qF7MgstyGSLzR5gbC81MRD6BG4JJBpyB1y5fUYTum",
  "key21": "5hjSggcVZJCTNwK1JDFCbijURH57fRwTXZfUsnMVBYZ9HyxYgDxnmfxYGo1qDswgKUmSNza1mgZb7AYtAiSJmNoL",
  "key22": "26Rhvks9qmNZB1re2FV3Zs9M9NsB6hLXY5uq2wf6NwqgMAqAqeEdgXxiGUoVvQemKNTkF9S2S6JK9PodKSQk5tAE",
  "key23": "4geQV7p74XvZ1iXQqd7NKBaghrLMrSjzn5pS5xcVjEtPnD73yryPUpA8rRPjQbMdFBSe8vyU429kzGgxn8ee5bjv",
  "key24": "4Lqq2GRBwu5nqEUWpXsN5st4X6AZUMo7py3QtRrB8PG4KECL1K1BEyB1ZEXYfFFrM3zUCvAdnEaBXETajyX3jw6M",
  "key25": "Y1TuqceJfDHZGooof7ceCFTgoUY8sGz3HSwoc6Jmn59bD8bqWLWgVij55maQBwS9R44Bm9Ezb8rrKoKxF2xVTFD",
  "key26": "2Fdv59euVYCtjydkh1xWpfUsJuMkQPtNbVsy6BfvJcw75RqbNMLJsoaSU3zyvevsU46YZ1tq6noexe57Z1NjSjHs",
  "key27": "SYLBZFy3vkwoR3QMde2AZPbEr3FM4Z4VDxgicvbmd31aT75xnbKbBRygaHoC6oqQMkoutcTiFDsmsQ5rstKJS25",
  "key28": "5gKUvMjoQYqWEwr9QaBbDS4ncGJXzJ2X3vMvZDu8wePDy9gMyNMYr5HoqZEJKsNLQ5kehYLjtxkrohbU288rPobc",
  "key29": "4wvrDRbvfkQajw5MULM39WoL8t73LD2s3ZJ7ZiYkkSwf22oNdHGnDNN2dGrkMhPRfrEPcPwm3PVtzjPqWAwKmHnz",
  "key30": "4PHJGhqhvwPYDR8QJ98SVw7nYw3xa7jhKyVXrE1yoW57maSSCajR3om4veKCA1pYz5sqF4FQGaoHqjYD488wkfBq",
  "key31": "3DKoNrGHYJsCcgHaGrKPiVnyTzaHseULZMQREE99GywmhMJnXa8PJaAEEN9BLvnqmcwa4fTQoUm48BM45tb6b47u",
  "key32": "5pgjp27831BCZcD2c8WFfkCZY2TKKboWegmYcmhyoP9eviTCc2fCPed9itFfgteAR3HBrrijGTFuRtTobKLLAykb",
  "key33": "2btakHrMaQu1yF19Qbnxk7EHmGjDTvB23jdvZPozqCyUK5rzZPijSGVvbeYBkzsfEkoapQWNz5zV7ZvCAxZ9KRqx",
  "key34": "yo8DQxEhyQ3bQk19AomyzzJyBCt5kdc5UaJPGTNXsLhFMMAcE254SGUHD2R2WhsW9sep9t8EKnLB7MV4bZdoJzJ",
  "key35": "5kFAATBgLsvakbRB99tUEN1tmfZVEDA858BYoGqenCTT6aR1sddJr844SrVexUuxG896VBfM81nb2prYiXDQeHZc",
  "key36": "4dEhayPHrJt5mHP4xKGnEhnxYU3cZ2twUowsThmaTHFos8H5mz63qREmzGDyJg4zBVf5JhNQJVAZwsBKqMX854Ws",
  "key37": "H9xmaEUXGmZB5HN6XqmBuA71uVHvDdgky7invLDiEHh2VVKpjgFH1V5JgKBCeXtfKFRd9jiP1sRtebGx1ouuR2B",
  "key38": "33ttoCLFSyzB3MaRpYwKYDEhhsAEtwXokdMq2whu19mUj1uMbuc5uWviHNzk9z69TLfL9PM6BgRphN5KFQY84ZHv",
  "key39": "4c8VUVy8LddUerTLEHP1S7sJ1Cx97XN5NKNmmUQKRqRRXpSmh1zV7u5ejh96kNiS6hxvitT1xvGr2EUxCCEdUTvy"
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
