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
    "2412YKxsWw1adeQRR9jewa4QbMPzBCXY1zpQJv8G4xpN26iV9WrJgxqiSvhiDmz3KAfzaKZ5dsqQc7gQ6SxzgbBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSjSZ4Scf6yrn9PUq2DLz3R7xXbYvnRHJs4wXAyh3hEWQJmXTJ7aKnp9fFpnhVxtS82ou2jyD9ADDzeY519w1o6",
  "key1": "2wFEjMTum79D4bEySiMZwMHvm3ZRGjTguURXZwXLeN5g3b36isYNZXBkVL6vf4oCUzRLhCrzGVqRceYysW8GoGdi",
  "key2": "3RPnMtFQjSGToCpWezAVhEyn3j1wk8uxhE16Y1aJK9LA7f6xLeBBwHgdyz9QPD6PmsoMQhcBDZxPX3dUEQq829NR",
  "key3": "5dFJ8qx6Hd1weuWkENMAvFCLXfr6b3SAihyzWvTkaYH5upHDsYiq7ZarPurQUNKVTcYR2jfg8vQSNJNNwFS3QVEL",
  "key4": "5eNNzBfWn8yzmZZeQfcyXRzR8mu8RLQMekXSGe24GgSuLbSLVoAZ5RGJi8njPRB3HDweHUE4hgAPMCUHz72ixzWf",
  "key5": "i5xjMQ2TFjFH2kCUaNmfjdPPx1TFTrVWHBxx59HPosGnGUKeSM7q25gZhvNnVRJmFVttuSDFXV1Hxo861GdLJtm",
  "key6": "4E3qhymvJDkJkRxWUoHKn9PwE9zRsp7oQEwaBctZrvofcFH7kcXLenLMcNhfA4irz3pESbJFtRry7PF2fjzRwCvt",
  "key7": "5X4nodXkxLZfVqY2QqLHyCjY1wZGvmbzy5Jme5m1oHAWHpt6vT4qQY2RdZatr54Bw7TBQ2CHfLBrWW6eUhETTboF",
  "key8": "4TfbDFMMnCfRvjENB75jAufyg6mQBVGFj46YuPF9EmUvWUoxAPCgHcFazfyud8ujzijagoo4L424PgwNzcsnDra6",
  "key9": "FSYHhQeqkwHxPFcjhGUsq9ynncY3zdKqDLAKw8fWpS4jtSe8TjhFj5ytibK2CjyWcThTuNEQLUGETfmx94bftZT",
  "key10": "2dkfSzAJy1cEkCuTNtjSMHDAucCqaqsvrSEqBCWdv89RhfUpsPEsvK4sz38kn7RJ7H2hU7AtMwnbkWPAezYB7d6q",
  "key11": "4EDUU3hCN8ZvNinnyLDAoZcPYTPBMzPtpkF5ZtnB6P9aABgJEiaJvuuySNw8cUmje7yNsti2VY1gYGoshjJ6gek1",
  "key12": "4982BvCSZ6UX15NmfZafb6B89XdnKyURkNweyxaFv4QwRdqQE7J42MiM9VZWvKUEgXGmvVWXPVshr6mRiLP4zXJH",
  "key13": "2pyQ3BNYkpouAbiinjuKVzCu7SciUHWkBHxPAbQPuafHJvWtnDCotSyabHTqNLWooUqYfwhJmfQFMLTU3TpyyKVU",
  "key14": "5dqLcaU7SHUovSNsfsLTSTdgeifaJ2cGQajCr5QDaq5rQY8nZBwEJtBXhQmFEpdKWn6YvbMfJAmLJzBr6xJN8FNo",
  "key15": "1gxvx6Xn76yeRULsSqx5LPCWvAiRTUwtf8cFEZXpVs4jqeRehiLMVyMob3fXSWsWDtXzNV9gGoJvezQD6fmdiTL",
  "key16": "r69xK98FUmV2dS52VXay8AVEZdAcXSbyzkn9SDPy2R5w76AWKtcbi2GDHZrME8gGYVCGiqaMMvLGvnUBGka8LMo",
  "key17": "oj55q1KVACS6AFdoQqoxGNebsCd2KWg1jyNV7uNNMXWiLwUixvUCmg8kkQTjm9RGwpW6x6zyQCnwMfCtFA7Mcjw",
  "key18": "3N1UiiySSy3JpbbDejwEw25v5A32SyCrxgZqTZiRUZHK2ti6yfHNxXGLjiVx1DNo1bcUesKSWiqKQf1TWvKg7t1U",
  "key19": "5Gksv1qwGqcTvDkj7Kx81pcZ2uo5DR5UsTfYuFW8ahS6Uy3uaRRZLkwBp6iDPpvgCRM1hRTK1bQCZF98VogttqEm",
  "key20": "44CN4bLP7cvkHvc2Nq1ywyrDrAjNj5bYYGZRrgG2qyBkcJZVgzrfsE95zUCfHqkYHuYCAXPwQY4bX5vZ6myMaYJz",
  "key21": "4kNyTzadS6nDPkFrvA4HnVbfgoXh2aTVj3Wea6FHpzD5P96MWUdmq3q1XRFznibMtTP64jY2g3G3mPXvY63cSstg",
  "key22": "5pK1yYdsjTTNrhw8SxZhF2PQNSqtDwJNqJEaG66pmTM1uGsSYphfbd3bjNXEuaDGrcTnDbgCACNros4y7gY6GcLc",
  "key23": "5EMDCy1UEJTso15ozq7ZcVqQSp9SvNzkmJ41y5pmwR5PiXHVEJ2pH1URXi5BgPp4Zxg5i3msQWqKpaz8hpDmxEw",
  "key24": "36NAsUweUhqKb2auRdFF6mw66rGTzstRMya39FQ113m1vXQTrR265uuWC6wcGdNgfvrPGiZxVLnV5oDxXLi8XN3Q",
  "key25": "tRQF2mWPtxXaFqqgkezj62YJSWDPKzUyy6LVGWJak2CJyZu4rzJopcUQLXhG8cAC46xVwLdAKK7DXBbiAux8Yxf",
  "key26": "5Qe3APhYXCfdFkLrg2JgxTstwJivHPGd8KCfhpJg9mwVD4UCMCYzH9Ar9tmjs5FuSjeURfpx2trM4f5KcySoxHDG",
  "key27": "J4txSx8M6hdFzozFwobnSwUKQLTB5f2AG6MNVQKvWb4fwvzMgEHPRDp4hYgZUYL5CgSaWPZ8ZB6aTNr6W4FugxH",
  "key28": "25Y9g5jMuLw6e7ghkA1MeUoVWdvDndPGbbVAYmWQtZ1N3jCk5AVdXKEWyHiRJJLLL6BjkygwGoVxP4uDKRJBza3G",
  "key29": "fQhpaKzJWqzR69QfBsxU5xizWHAvEWZxLV1EB4RMN5t9pYAbocAWLV36GN53vqYYn2QJRyc2G9Z6bhcFP9xR5jz",
  "key30": "dTrypDcXSKHK3p9xw9YKRnRCpE8nZ6q1YpFBWrk47HBCPtjGQCPZLfx1fEEBLLNBQ8HABGs7gpsAHowhWphzx6j",
  "key31": "LJixxUHBuDhQBuLzKTgN5WpePeKU9EuUAymD2YPQkNapHMhFswDeFPPHMC1hf5XQCorxEssv8qpqUR9a5i3SzRg",
  "key32": "YqMNw59Ygibz4pZSfjZ2NUqTqUYe3ZBn5HR2aPjwZm6SgVC7GxxspJAAjXGGzL24tQReC3vbhut61QXsBkTz5fj",
  "key33": "65SpSxAF7xZT6Divm5ksTFDnyxWdSw2sCHiWtgguQAc2Zzxvb2gYFZAfbeympBjYycGiNyBjkzayDLxP3BYEZDTp",
  "key34": "5zkTP6XP7GkugVwAp4czLwv6eHy7LwViYamkY76AYQrpypPhBWnasUPNvCoBRDDnro6VqsJsv3Jh3qXpP5TpxqDg",
  "key35": "2AHZ2dZxWnaZ2z1jFCarhuUAgHmNR4K6STkBEivqJzKxc1cGGSKaBkVAWbB93jqRUHgxrmsksSX6kwFrKnTxuKDF",
  "key36": "4vGXhh2zYz948MiX5yKn71QncofH7epQiaaqmd7Z7p9gr7LyhDECbsA7miQpGGXmUGefDaUe2RYhDcBgXU3EwRrF",
  "key37": "fp9o2ndxpQLtYeLUpWjJfaheq5c54bANq483GwxYj7aPdW8kraT16rCYyK6bGzzmsLaL2wEUksUcZzbbzRxLZvE",
  "key38": "E6LXA4GxhCFcDHkEhDockCPrsJxuj5a6piKFx4buCVC8AvnYPtj76PbvvNQtHiWmT4YTEDN4Hs4UPTsuCXH2fk6",
  "key39": "3TsR3ze38WkHNjSuYTAcaurBdRU7BW4vwUD7EWKxeGfJrANtgVEEzDnpCu7wt7BL6KoBg5Gwfmdi539pngwDyfRo",
  "key40": "as6raM18cFHCzwa3wVHTW1yiozcknLSMfZJv3tKW9zPRSkNu2dXAGqvsEmTMcVe89kUAdqmpGNgMKYfuVUugq54",
  "key41": "3tKeha8mDoCMmN9kHmcnHHtPtbn9xjRruYSkRvfuVD4RPZF3AYFbaH2hmVyLayhw7vwJr9LWoHYBYJBAgBTiQEbn",
  "key42": "28ozsLsbMDrhRgkFtchm1aU9jkCsC6YGq1dfJyChNcgaDXxWdKgdVGb1ykmLV94E1SK8WJcQSxkygVahUFAZbANz"
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
