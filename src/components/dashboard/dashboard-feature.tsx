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
    "4obxon1LEoKvgrYvXEouy77HVLhpxGhh7VZuaq23tiRQusUH82ZZku2X97EFJHLsNaQyNi76NRbg7KQYVX71uea9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66HrysGKQWEd4ef1smTgBzEvp86u7wwTNVAyF8s5NCz27fF5pwCj7AntFZTH7wyimpJrstRHH81Kce4NUU3iyBp",
  "key1": "5uaxceUqvuMrrqa2xwenEnsS1ayTonJdRnkEp89oeCAHxtS9xfmPDumkX4SihUF1BvGkQBQuDMhzyS7fxu5SJhtn",
  "key2": "5FJ6apYk8iaeGaJVYCeV2J9DfVJ9UheZeKiyHHort8NmtV3jFKZzPcHtYxTrsh8J1228uxcnHQsS9EisdyZTs7Ko",
  "key3": "ernwXfZp96ahf6FVbh8SLokEh2gRzhEta5aiQSUYCd5B7URi5TvfEDHhmNYMwZYFc5JY5LvfoggTiQfxUn6HNQN",
  "key4": "5yc4GkvpMHgWfmhfFJvWdFy1trXFkS4xnAKicSdQiESxfUPy568Xe8a3DtFn9iLP9mDqsXGVgWs68toqyasvBFi3",
  "key5": "3VDZkukfeSSRuHHxkp6FNKqJnjWnAmGimC3fQqAYQ9ojTe1MqwYEV6N24SSfnJNKULyWeBNaaabFDRyWaJbJXnpp",
  "key6": "36gVf9pbswcMJxHxxz4g6wPjoBRgW6eTQZBr17EouSL7RxuvXGyre9oF3PqNrvDhogrefsR4nSN1bYADhLsBTS3n",
  "key7": "3Az8in3f8za8J46AEWBjL8YyEtotR7hW42xZXrZh6jdyR4PHjrYfmNjcWnZvycupDeC4CKfabLcahYJoWvJ2hz5N",
  "key8": "51kAVj9DGgFjcZ1HYRcSJkHT3CtD5Q3SiYavu5CsmkXsuG4Cby5UstyULLcsc1byZ5dtWhFRgc9d48LkDZgtWfg7",
  "key9": "3qGkvMc8PajttSw93nCtermCaUSAgLoyby1q9vK2cX7CRuMNUS9gEGjvadEQKZ2sNyY7MVNqDSp69wqqpnYJHAMJ",
  "key10": "5M6DuX66CW17jv6yyFF3YkTPDn1J3TLrHBc8X2wnLpAQ1iRob84syogiTAjGv8C15QbpbHqyLAMdibK55j8BAYJT",
  "key11": "48RtEsfhU9a9cpfTXNY8tfcgKvNh8mHXj8gZBbQoxKNQXpXfbxo2SMBQdA8mY2h8hZf25xikaunUYoZyNk9fqt4g",
  "key12": "4tBgqo4qWmBGDCzShydefGo7RxGfZG2uizUULqCKisW3sHfjgD8JeMTkfdkRsBwMTNMAKJPNpCPTv7Xg3w7SECt8",
  "key13": "DWTBS6wpsUteUUW7FQdVimJkDARhqTdnyNBbATvmLDHTYKhEy68MXNRSWqszMSAd6CUfUhH8BSmvE4aV8aGsxcu",
  "key14": "2eU25Cq9ikrhA3njxKknkGqJyWW1GXoRTxQUrM7wKTmwkLhSxWcMGBJzPsj2dQ83eoPRgoHm1mV1E7SeAxJCDe4",
  "key15": "3hu2GwuZh7JrNUePj5Ngs9duYcXQ6tRxDysqCBRkWHmMmMyBURrBbFfdMMhni73X3sCDUTz4HUGSUReZw2ehoRvk",
  "key16": "5CUH6kc7c72Sxcd9RKAoabpkWdwpyJ7Jefsr6M15PzWU4P166nhTwiWdXhmVLK97gf4pFEiz7LCMZprmdau27ywL",
  "key17": "3vfG78wxyKnGf97mS6X7fzWYtBV3Sh9EoLDnk3wSvxHUVKxVt1AkkXVzKbZQKTs6qfvghyp1AprQyEHTeY475292",
  "key18": "4ToWg5pwfKBTcGxLXaMGj7pxJ6BBXuGLfGdhQUHm9SbgmDDxneKFsdKzNo5TBGks8xSyCBnCBjtSZ5HBTiii592a",
  "key19": "2eEbGZhrr6KKC35Xdb4UDap4WkDLozHQcbJ2a33487i2DinKaD9azcLgvoYQJfhUTvvfjMyUnFnWHxYozLFGvqK9",
  "key20": "4o2okiBFNda7d3NFGF2pUjmQUMB3ymt17kYyGCJ7n6h7jmcoXYiePB8vMVjEfk78ZYuB5qMiW9HeBfirTTP7V5nJ",
  "key21": "oFyE5pkCsY5xtACH2LRRpVa9UY8QTE78ggC1MGhutrPLXiYyArgYyKi7fv3TEzyWq8ZEqT65S8RijXnUCeRNE5s",
  "key22": "4S6zKURAS3Rcanvgh5iWLqrmN9dAH3AGnYMnfhmjgsbi1HF29WGwC6o14Di4tHmYnWbmAVRXs1RQi2fji7YdaDuR",
  "key23": "22UyePiK5fMRCGL1yjWuvzipS2uraG4jomyhGksCU9fWpdtcYDfzDWnH8ogjNtMnQzpMuJgkyQzAFoYRWB8NvrKM",
  "key24": "4mFTqYngU3bChGmua2TvJUmP9Xm8Nq6McWqf1P5aLf222y2u5sdtDf3Xodqq73xApdAtWeP2xg3qb48NvfsvYzEi",
  "key25": "3LnLntFVsaHpmHg1hSg1iPa1DaHUSACF2h5PgCtQ4PP4ThhS3mz3Wp84cZL11Ji3TaFQvJYzyqPPn7H6kf9P8YSS",
  "key26": "4KeJ2pxsEGbKPSpvkR1tRMsmpfJFU7W7oBNCqYWKHst5mmxnH6t9s3XR2fv5trDJ1QjgqyU7ioNfDAePAcokdopq",
  "key27": "4aFgp1onnnWkomSBkUUNcAYHf6y8bqFh7pvEoQwh26uidD6KYQitrLxw8wqvb5S2zmw79Apqm4nqkHy5SHPruRVq",
  "key28": "3QYthGYjRNqvdh9rsPfW9BeH5ysFERDGaQNNkmRZ8qHJeg9Xr3x1R1Xi7waYGMi4x66nzAQrhqYMbuBxNkt6brfg",
  "key29": "2d5rDpnsMV6JCPodtbZxckT1RrU5zJ6HWEogX3Wq7xeWoh9TddfJjM4nLsQEhYQm8C4bzbuypP2eUpWpcCCd9EVV"
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
