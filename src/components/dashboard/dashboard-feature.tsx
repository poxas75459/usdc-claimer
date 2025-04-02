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
    "48arAjvgGzr7vPxiRC98u7Sn7feGHNYzNy6NHHwxvBCgeTq3V8sJHw1Db4jak8NGSUEj2Mzmyn1qw7sqBfy67tG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QsQ8a2x7GDXJmQmzopxBbmf3e6NYsKpgi8gSk7i7qn7ghbGxnmkNiteztoEKxLm8ypKMd3EMamvCbyb6NaUYZXy",
  "key1": "4RpWziCXrG5cZg3MTbdF6RNbgjWVjP9Ro6ncYPYpS8GJKm8nq4JdrbPDeqS6ofvRG4AMvrBYrAEw6pE6Gwt7JmW4",
  "key2": "2CsEWASEhRVCWXxoeTfmnpMTPA8xMBrfKCv81o74jGV9RsBtjWqiZpYuEBLj8UnAE4Coe9jW4LXkvPG334LnqFcM",
  "key3": "4LvkuAUYa8d8ANaKGssDiLG3XX45GtGzhbFu8KmbEFgDMgUvu2HTdYzGzLY5K9wjjcGZ3SMrHf6e9hGAspD5Ui8b",
  "key4": "28YzkaA7YQHs9Bs3mrJygNmzCGRBxG2p8XtczbosqhWGCjFDAQhFiLjfDEFtYbgSs4gwK4jzbzi1fKvvtKKtKpZA",
  "key5": "4EpfjMHvELGuenguxGvyHCvy76GqnCqmVvpWZj7SMPbMct75khyxTRqzgGvCnFaf4bL81srFwLvG6YgT7H1kXUJ8",
  "key6": "47thjnv6TEDRPK9z9Eo7W9u3mxPQ5UGEtLortfMZwQ7LMtiWCakR5YFjYztP63KGzKY3QMp9WWwpPy6PH3qJ3E6S",
  "key7": "5v5D9MXmGA5pn8H41PEBcSAeFUNbnvARZBGoGESN4yRbCeSkncTr7rSGnt3NcEhX7zputVAzuWikEXksNrfGGWuW",
  "key8": "34L5iB6AnCQ4RvHwCdYjZdoCxTG1ued8sVbxEZNJBqxjB4MZe7bDUn8Xjtt69eQsjmZ61B1fakJzL17fd7ifJuRo",
  "key9": "4QTRgNrmffwpyNivZ6w5UmrG8iMXni1C8riuZfrVMTenVowdbGXbU1gCzuYiEyrgA6pywZVY1ZcFeM63BUtQ1KEK",
  "key10": "5GGqtKvFAmy7KwTxajiQUomrHzwEq79xxo8sfSxekFz5RiRVBn2HvRwW5P5Kh2PUPnh5dQjFqNCqhXNGSQqmb6EC",
  "key11": "3cZLJgSbgEF5aM32DENsnvFN4RSXFtephNM4dKkUJCHL9aYLGn8GTgYyo3BSu4atAU1XyNXNaVrEh9xeNdZ69WYE",
  "key12": "61sU6VCwsShh25WeyVkigBjqTw9C3ChJwnc6aEKLf4YUa72wrnSHWCTvTMk3YYsQ6C8wvJYuoMbBNq43X8YSd71b",
  "key13": "eNdsUzMg3kJb3ihGHDF7vRx4LFBBcoFHnt2kAwUFMmG7gjkufMYDueQ1ZUfHzC3pLJaMMdU4fRhhnVff5X2HG1n",
  "key14": "2orGpMYbZKLv1thPdKt78io7696W21h4AXfcktHJZ2NM9zKADKh9ckAaJpppcEPJUDXczuBrxvnpcxrMyX24DnQJ",
  "key15": "8QgoP9H2BGwX1H37DTd4d3ddXdr21aCJ5UjPZZN4CsEf2J9hyJTVLX5JtLFimwUqNegYPwo2SE5hxxSPb9stRhW",
  "key16": "54KwDnX6H1yDgD7zxmj2anXe84uYKrQmHcpeLcMBWfKCn3cCy4gdq74zUSDww1X4vJJuR9zjG9Ghn3FwtmuvPUMY",
  "key17": "4cGWLTY9W7SkSZj3Zg52ToxZWkqgQGf4uEdjcqUDQ35ajS9CdFaPvDohn5VYjWwnyZRMR3Ukx7mU12vqizBz3wti",
  "key18": "3h4UZjy4tZ1aWCY7xzv6rESYqCYrZE4q7EiCt2zwyKWAXRGhqWCdEvuhX1w3i15ZChreW2Ai8oZcgpxh5CQREEid",
  "key19": "5fdmoppm3U5Xc3Uw7TYD81ssQFXpDs2TDQcrKnA9Wb8kJWD7u1S8eyZyHMS2gGq2J3TjWuz3TrA5hp4MGaifeYRT",
  "key20": "3YjioHgmCqtnX2h7UzxvwYNWyLPWyGmqR5Pt9Ej4Z9CBqHMcFN3gHReyQweNyRAuqgR21UhELV5n5iSjo2v7am2g",
  "key21": "2nVQtDd6rPbc7ucwH72Fumj1jgs7n48NyAjdxbBEYfsSrZei7dDnJUqoLcRQHWMH9e4JCsuH4U5h1wJ6se7nKCaL",
  "key22": "2NpyyGxgh2DvaGN3Lp28t1Z1GgqpF9RBZDXmeDAjeTVowFURD2kLX8BBWJEAbaWa3V2CCXbPbJumvVhqaHvM57ii",
  "key23": "5WE8Q6Tmi6emhg1b6B7UFckFF6qBPY8C6VgFJcjXokCCMzMC21ktvF3kja8iHmKESeNrHr8XB12CvdbPY97wCrsM",
  "key24": "2tSPniGRuKp29qnAMCPhXkf4rLiGfk38uyvEyAqrsk5JxKpJapCkJNY897SAWfZ8RqUgGDEGyTXULPt2GdoZLYPJ",
  "key25": "2DgBNSsv11eAiS916p8dNxvt1v1GyfpChdetAetrmah9V76d2ohnwytPt6Qnto8E2hNf34YiKegSf6ESNa1iLV79",
  "key26": "3wSYVzYaa2B6GYTLqqAQube9mU9aN8MRYTLpRwKXi3WuQuBUWBAqpffuAg62o1c6kuPExjDphCgSKST2AvVNGJGv",
  "key27": "49eFsLCG8q69oFGHCZkDoHadNjmUwh6g82oosGsyvGNED9WwBXjMEY9ehDZugBYSY2Dy2Kw1mevqiX68XwsefoXb",
  "key28": "5pZipzG8wGzAPQpKh5tQzDVJK9ctZHdzSG7nw364doCySy43Nb56pHuLe7AkXrpHE6DdeQg6hPZatYNePTrUR4Fn",
  "key29": "62L9y4f2Kn4K8J2Tpym2sAgMfy4TQN7x2vNLGAK42fZH3ie1kpvB7wH3iziH3oGJRPmN2egCw9GEiBx4TAXWWm25",
  "key30": "FFbRa1x3APrK2qRDD6FmcjcKx61BxpLV38t344iTbHXzpR6xNiVRTNPb3WdTQzDQmmVwkDr5Wd8A6A8Jzk8enHz",
  "key31": "Uojzkb2ohTFVU5qoQmiqf4UPT632L5BWLBgrzwVNaPF5TvHCpZNLVR64df8utpFYyvFpV4LPrNLCc2KnFvaVH84",
  "key32": "4uk2YLJNxLNg8WmMKh6daAXPKDisbgheXmRjunuPPNbvAGwWyKsz4DxhNZPsiZqMRx6e9MRxUPj53HB6iDgnqw9z",
  "key33": "GoUPqCX3bgyx7YyQFccdRdo9nXAvppBz5ALxb5FAMMkfx5nnHVmpj4Sinnjxf5KrZN7ESCP4rBodxSfR6gE5C4A",
  "key34": "4FeRFPKVbfNfMxgm9W6zM6NxU63Yy1PP1eJqsVTDShKuSsqnNU3Qphdv7UeJkEwsH4zELgJUysyzpCfq4aWCtRye",
  "key35": "2mEpVj578cfXwSzGJ81CJFQvm3RyNUh8anvvXv6skE3G1dkZo5oXBPyS73jabCE1L1iCjxhap6By7gnKmLxhDBQn",
  "key36": "5myetuoqcTKbYmiA9uUFMg9vrQZWznDofoqkB4dD3i6CC38tPsZmMMxdXdQidULTmSceHW3T48nhKdWiKHjy22cw",
  "key37": "49JPjVfLwXU2dALKjXJHmo7JBWewZ5LB5wzCN2BQypeKErb2n7fEzK4nLRvdsibpYUew2KiP8hbkX2xChvhuvzxJ",
  "key38": "5VPj1LsQeQVyH4b2h2fzGUbMy6GyafxbXmyTh4jqeT3YcAa7DFEHpCqFJW7jUY7Qq2p5buSvGSHnJnj4eZv9ufbo",
  "key39": "3AVyf6JFWTyfxrMvkSxM3VB93KSQHPisFhnKnUoZSXNYnEQHX8pa6iYoDpzrC8HBG3YasqQNBvhWkEgkacUwpXLE",
  "key40": "3Qa9rwSrfWjkfckyeECYW75onZDhsstT9cviBoxmEieDvRzLChYgTtTraswA7DVxXkNeDUxCzSUVubUsJdkWks2c",
  "key41": "2c3XpWHdyLDeEqL87CsLk5Y9tuuP9mhW8yXJv3pzVLtaEVBchiYjZcCed2uBToVMzvuNpyuYQdqkugEJ4He6DdLw",
  "key42": "41SryA3joSHzddbLTd1hU7wGGUaG8WMfUD8oz18e9ZJzxhMqZoPvSAvb4Jqo479LSbw44Je36ytKBayG63nnpz6B",
  "key43": "2Dh6fL9bYR2jQ88HCRKxH5j634Enj29TBWjNwWFhNHGQZKNsZuL8zJkd2i9nJUHNiqGbibzgNvjWa7c7uymwXfNG",
  "key44": "28fHNXUhG4dF9hBVn3TkHCj5yvywVRM8WHz1uj4RTNHQQAaWb67LoWuvKmS8WjeRkKVWp4sdfBdjv9MLoSvK3nzP",
  "key45": "4vZ3pzPwC8Hz7fGreziZ4YPVSFHSmwjNo137GJwuopuHVe5e2cv3XB96BvH9qrrHiaKs8jkbVXu1Q9mbey9udF6g",
  "key46": "24KExTFFDKwSpeLShhHrGcXZbQGcQeJMLpukbcs2bTVkRPmAAytUuraiP4XuC4cVh2k25hHNSHQ8oNGyzFWtRzww",
  "key47": "kSV5nXaKgSnu8Dhd5QCapP5tHYgPGVv55i9PknPVwdGP8MCgmcD2uePPUWt5nAVViRVWaNkDTPye6AwcxU46thn",
  "key48": "4tXX2fDLr8Ngcjnui2Ssgmuni8ecCQcUCq2D5n6PwYNj7XyKVXsvnHfjBxgjPtyEEDwjzfxjw2Jr5i7BkUog8TwE"
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
