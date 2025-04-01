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
    "2mAf1zkYbKw3eAoKaZWCuiNhMxaJVZXycpcSoHJq8NvdR5zfExUwFRN5qF6gdQRCeyv5ihDBuEBFgJkwE8sQfKWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wwDMyQMhZywu7L5Gy658py1CA59HizL3wVw2QUkUGsrZV1N2Swqge7ic1KgUVNLGXhoLfStTaoJ9CVfur2PsSet",
  "key1": "5AB5mpcHuESxpum1j5CaZEcza9chHi3n17hxF35o47qfCvzD27jkH9USgXTpR3UnL8H8JedHLmB1SGp7cDmu618T",
  "key2": "48aofwkpw7TgHAHo7xfD2rEbeCnJPiFiG61fW2CXtvyqtM6Po9LvRR13M8RUPSwQPVXwpuwu8aNsXAjJJY59mUwX",
  "key3": "5VcqTuKgZYhrUs4Cb26ZocNWa69emSBg9ZzsdYhP6BzyqixG1sGpF2gK91WjJKeqtY8w4iagcUP47Zro8LtTMzXo",
  "key4": "LV4JD2TaXA1kv1AUFAr5fKkf54uvhZ1ci12udJxtuRZLDtssRhxa6JMRE9WDj5RqKSk1zijYgCC2Y2GG9yCW2uW",
  "key5": "3VDJZ427B6VJmgJ6eQEYVBE96pgbFrJeg6ZUKP9s4r7yEKfqgqVdrBUtR9tJQS8Ui5Q4LBbriyiCfqRvZtgt9aU1",
  "key6": "4ktttrVJKMY5g9nye5Uk8TWaFfrdEHtGLfUMqtVjgQG1cwAC3yprUSt9zqvzfXbx2CyPkXh9WzAL24BfaLA9LcGD",
  "key7": "2mVXEKf9Awxf4zkpzbbguX9ZgVU2jeqFeCefvvW2ZtM6qsKMNsntHqgjsmNjgCSHYTeHzBGrQeneNLpGttBeiVxN",
  "key8": "GdSAaTCNJdBDaTt27EabDsP75MXTGLPgJhGoqe3jycNproTvUQsBQTMzy7T6LUE6cw6igF42atppNngxEbgM5rV",
  "key9": "56UmZYYxHPA2ofnXb8ekFi6styTbGJ3N8jbKWqj73o1JaTkWhPAoNZuKwb57wEXAMAJ9YMAuQXWy2dzzdxtGQznL",
  "key10": "5odA91UQPtUjLGAvDsGdR6L9kN6AdavLkUcBiLNVS6wKsfADBxV2zPeZbUgf4DJSHMxsEkyw3fBNvZuswey4ySu2",
  "key11": "45DNm61Xn6SHne1Ep71nm5A58ZRzoV8ZFfvvjQGMTThFomwKj5qPpbQvjyfh6y6JRpNg23ubU7qp1khKtGAiZ33i",
  "key12": "5gukcA2yN14Atbz4uFQZAsAZinDYuVn5Ek42NLL8yfSHiNwRakC2J2WLqE4JpRuktvasZA4rLFwUTMJYNq6UbSYK",
  "key13": "2uX97fFFgrgdLBtZBhE3YspA26x9CUsu4YbktqPPNuVeFnRdUwwAZLhqLaYeRCqfHeGc7ixDgmMUMbHMPmVs9Q68",
  "key14": "5D2wQBtcyrrXpCZSd1fXUKsJWbqPQT4Pu2T8B6Jtmj8QXm98K935UoZbgeyXUTsTDJ34xG1PYMquLTo2MoiWjWcB",
  "key15": "5hsQV1TyGAd6WvFyB1en5rcMyovHPL2w6HKPzrGagXd4HeiLPEKwWVY2gX2TGbhvSAMucVp6Uv5ghWrqdzFM6zVw",
  "key16": "4yNuzZoHCPYsBUXw8zRFsEPMt5TYxHNiGkiN6ruqCBKcwgT2oo2zQjaFYat3G8k3XnYCUa5WQN5R9Kukg5iZSbcm",
  "key17": "242H8QLnmaaL5kU1wcMXmEH16Qy2S1FXPMe4z1ssK65sUSHcxrHC2Ko75AjKkcUqQhxAxzzDrpx93jdnvgE6Zh6H",
  "key18": "273B7HUwLW6NHBTZVwQFDZCSehp1mP2tBvg47y6zt3Mny2DyNeEgz5ajWNKZeZQFiApQLKy7DV6BUhpaPpcp3jQ3",
  "key19": "4rSDoEnXH5Q6hc6i5ZNPn7GG7eWgvAhWCUFAzFDEKqpUB8njodzDBtBkusHZE7zRAUnUujpKLMbiJe6LEnBfmtxD",
  "key20": "44m9YB5TPKqpvDWw73mf6bo19naHTPy8hWKjonRxP842DqrGjVTYZvgpXqnsbEwei4XQK6ZoGTaqefb5ianPxc1L",
  "key21": "3KjDL1s2y41FCBK1sJHDkLk3wzat52TJR2qLbXErZWhEPgSnyM9heqLF2Kn3YZFuxAx2dKbnghzHmTNVPmbpWRKe",
  "key22": "3jrxfX4ayFAdH7cCSJ2j6wR5h4p3tFbqwwZdLtLQAdD88nKxuZQhNpBvwPB8U3CQLumtcFzuPCAtR1ZYQuqvjgnX",
  "key23": "34C6x95BfFkv9q3K6mFrMnK5kBRbMVjEHKqGta2YC7jVcwMto3quK4HcKqoTHisUX2eDCUiw4evaVbUcWAb52Pha",
  "key24": "52QrZJ6S4fuDKzPAKow2ujUPHxdUdo53cqDGC4f6VhsBqa1n8F8BbzT8n7firMvdKxuqYompJmpz7top3wVGsnNk",
  "key25": "2xJH1SupCmqN5qUfm9XyhGUjt45voP2UP2GYpvQSQLVxwbKQ2MRBNETGCTNBnJMZ6vQohjnAoThfBfy6GdWuvaA4",
  "key26": "3yUjezjTP1Sc4rNAa6WNCoBeffJP7ZWrFiMje6ptvAdH4VxfV84eSbKScZeF7iq4rBVvQ1rtYno1eDAA9HLQSjKd",
  "key27": "2DzGF5tFCyJ1YJ6eJTBZSJrFgPRaidvBp9bafQFnL3jtrEtYBTjUKpkMTxPf6EDL4KZkCsUq755K8Rrg1eZ2kZGB",
  "key28": "4iXQK7jXmCE99MM4Dz8cS3nTBavHRBiha4HgCDNG9XstrRD97rQZ1KhchwXQiY6AxdoG5EcjtZ8FG937RVm26hvQ",
  "key29": "8dd9FYLSnhajQbWx4bUsFjgJba8po65LWhRtCXwcPscTNMdBZx73h5pcfsdrQxN2F7xmpxEc9Ksj8L7GEaARqT9",
  "key30": "2RrbpQqjCJJhaNMSDmBwZ2ZjnuX1Br2mRcaV5jLrXBG9Pc9NHzpBsoczztpGpV3Ayo5WVPt3DRs9oRjJHcTSy1n6",
  "key31": "5xvghQxRdX7Wrp8EodfZ8ga1BteJhCM5VVSoZhbNmsHFKsoUVUkAtawGu3qLkMdaq1862JEw4cMyT3P31kkND7us",
  "key32": "4zzifjw9muYtif4P57SUvvXKmi15iBYauiwVuLYb7HZ99oLnyFHEXqJZUdC5Mo5HomvFeBMh5wXZkYft5yPm7abD",
  "key33": "3LjXbTro5xGvq3eGRuzGeLF1EgGWBsUxXvE4CKADuBZS8v8sKrR4m859PCtqv3ReuKPKtKrzyJy8bbykPi5ggctL",
  "key34": "YxxGn2n6HRGX53gDB9f7GoEtrJTU47HQZFjZa9htdMtT4qMArZANKCH6kFSbMQX7KaeJryyhv5fAKUPHJUi6Fue",
  "key35": "jqvYUXzC1faMcagyvjAVZB5jrAXz7THuqqyomct3RDR1DunGyqWxkvnnnKr4CM6FG17BH4eYmjXiZ7EpTKbUz2i",
  "key36": "3fMP3dtadGssL9Z56Sg26HFbmJurztadSE8hriVkXgwMc5Y8GuJaZpHYMpgNHsxP61ihjqrLVxLb6yx5GL4NjCJX",
  "key37": "55vw8qYT9qkh7d57ocTqmpZfabp1y75wsVUMugB27Ed9oWrKmriQRWNy2ghauiU9DdVXVzRBgWEKAoZqmWqQ5mP3",
  "key38": "AgB1xvxJYyu99zGJEwFAhyS9o3v9kqVq8tyuUWfx14dYwBgNp7cvdwCuLdjAkHmw5dhogaWazTH4fQXB8iS2QeS",
  "key39": "5HbQddBGaJZsmTqb4cv6HboxgVNbVL7yXPjwDy2KmP2F1ghLrTygi2CnGk4kPBGq9t5sKpytCYEesaShsf3FXv9u",
  "key40": "hnKcAyg211SstTDRz5uAphkUE2oKv9uD9aQDqcvsZAH5YvtSkeXvRzUZhtW8JqAKyFBUbLqNLCDMBZBweXrpHLX",
  "key41": "3Zwju5fSXA9jUxsphp5LD5drW2dXaDeh4xJVEnBueecwZgvb3m195EdK8pwCkrny56Qi64VexDRg5kefnt3HSWkV",
  "key42": "5GmiWAtrjKAms3mTFdRLPQHqEKUgjHGWQ9rXxP2U7ePAFi7SUJRs6iQu8LefrPn5iQMzRfnMS8fvK38u9MEUtNPw",
  "key43": "Ug22ZFyGJ7rQqjVPeN1k7itpLvweuZmV29KBartk6RuAp67CTSSQEpc8qiQsGPd4vXpr3pdFHhCqrFhFJ4xE5R8",
  "key44": "53FyRNwBRccxrRVv2MLaXu2hyXqySqguzRK84iKotuaCfYsP7QzaEwFro4Pn9UPiLaBsnmJfCHnAkerLax36bjsv",
  "key45": "WSvA8tFPvJ1o2kPYBwWj6zwyGSXRdBo4Lbd5YKWUofh8BDyGnuTSVMHLjgh2Wb5SccjvRoVgbCtJ1UDWuCXyLkS"
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
