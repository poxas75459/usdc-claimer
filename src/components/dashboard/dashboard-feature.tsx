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
    "4QDuBg6Kb4H1rNmLmK45wxVNrXpj5QBLgsX3NWxTT1hmj9z23KS3n2bTPTNyyfFb1BXWe3wdKuNDjLkhHPrXXwwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjB53Hk5PRiLrZqzA5bZPNw4t8UQwnv4qGGkoz5bjWXrwXkH7TThy5fnRyQGua43tJ2HDn13ij7q7mhhEEBmcEa",
  "key1": "51Azo3ZgSktMgGU9imvC5LQXPAtMgdkD5hTdhY2qbLW1JRfX26LETASKrK2FU9XXiX5MygWZaeVf5dEaNYQMgQjo",
  "key2": "4A6PUVKt9edoX73Xxgg1eAnpTzBedBSwiuweKUowxemcnyTKhbT2V53SoGe9pjGq9pifxQMn1ETod2zUBerqh7GY",
  "key3": "DhX8fQEnKfKiD4nsuN6CzZTcdCL2Pr7ewo9f5kdJxiPiUqiSYZF1Xh9PZW91mAd4o6bgWNyFX4Dz2VreN8dVcoP",
  "key4": "3HMAjKnQ73XQMzmNNqpJUCaARA2hcQaDejnQJ3s6a1e1bWc1V6Z7rAb5gBqx68sjKchLfzNiQnuriRAPfSWnMFbB",
  "key5": "2p9pAHE2CvabaAxumvS4iTTngERBHMAcWdpTSEhy4YByYLpTjs9svbzKtu5wg45m1WxJneU82Pggg4njwFMfSyUX",
  "key6": "2PfBCQoCpXDfntYXbtWn1uL29b9984FCWN3S7MZEkHuphWWJUf52c2hoCe6R2XtZijG3ovSnzzasSLgPWMfZyxMc",
  "key7": "qFAnvM76a3AoF1i18Jrki7Q9Gu39gZtcUD8sNxVcp8gkKSkLJvPuDjMFr3xzeLD4C5rBpYE8m5npJn1htfLnq1W",
  "key8": "XkwxNXjMLVgF8BKEnwGiJxj8Qfw9GFDC6NVkvbDRTGSVwaELpn5oArznz181atzcVBJma29oYeRooJCLcbg6Y41",
  "key9": "5BkhDAg1YuLKP5cgMXBU9dzZS5yXherpMfDLiqGv7iji6sXS57VDS766xHskTudBmwnFdKQEQvtEJiazZu45Egkj",
  "key10": "42wELzuCEHQaNLnmiY74Y4rhCfJXDQ7FPbmdAraT3VmpHEHP7UTnXDb4ob4rVjVAGiD7chtaEo1h5sKd8GtPGhHx",
  "key11": "4iWa7bk8QAVerWPyxDubet7vmm5GWzW7cnotMrzrGfnDbbUUSV9Vbh5zuz1Ye6Ed9Jz7qGjzX8cAtnsLbBfHHAg",
  "key12": "FBAXaQYjojcxug2NZ6MFdiMxMtWDCPqrnfxbrymDgRurpN8YKCFnXZm3ByLkKgUjTpSMjXmXaCQPktSNikaNM8g",
  "key13": "62i2hgpcSfjPhPe1bpWnY7DX8JwkVDTaemfZqSnizLJp1xbj5Z61Aak6nyVLQiU6hdT2EgkFmfwmytPLpXQnFsQw",
  "key14": "5tvNi3TSBVWzVKDdyCLHk7VU4PcmaWtCsS89P49Vjqm2QCLPtoqRNPWEJdaKzpHjtmBgNiJLVATaGV5HZqnVDd1J",
  "key15": "RvgN5WVtXsBjf8d7Jujxun3RJk7J3C7N3spGVYeF62EZG58TRfjmB3yifjVMiVLhG7yEa2HUxqTfzbSycfW5S3F",
  "key16": "2JdRgF3mxQRwLuFRF1pfS4oSBgLajrAPhYzhe2yKVRauWLvGNC3zyQ1TAduEesKG6kYodrPZwnyrPv4b8xHoCy4b",
  "key17": "3wdPJBc3cCuEo3PspdiVjpWzPRNGvuRN5JkCEQZbuRefaLm4kSPLsgCVVTN5PdNWtVvt1uHXLNEpLbXDFzJn3cib",
  "key18": "3tKMueDsjLBozJpUyMkrBGtZ6YhyVJA425GQo3XWNomkNXV8SNDgEtt25WrtbVD4WVrwS38UTZtC2ozLRb1w13AC",
  "key19": "2cVneZUstDRcKh1K7dhejBxNna5uddsqacQtZJaCKWCueRRwZ3ttrJSqkdtoJtzFVLUFeryycWzY7B93TJSzHk3z",
  "key20": "4APtZnyqaFEFFjTCeLcvqR81kjMf74aHDaNcDFZeLJi7AHtvJBSRWkRvQYzrsBZH5v9ENN8MxGVxoAdkFF1yjjFb",
  "key21": "51nksYpWaVb6ADJnWXFDf4vN5HKmRcxn6VqJ2ZvJkK5jWDaBsenMuvXTrkEMn2wdkSg7vuSPC48pxQNRq71pSEvy",
  "key22": "3omRuqkKcfMg5vEPcPX4d8q46AFMXS69vGu9pHEP4Zbv3tVNqQjqhDAtGKvZe5D4322uNEkboqC8RTYqUPgK69TG",
  "key23": "XKFxoRpaFaJ2Ho5q614xJDengMSHhGNvYfjpQwDRYwM2P7bzzK48YPVAfAMavBhjC39MRySMz3G3CneH97SqDn6",
  "key24": "5oyU9RAia5ZG9Cp9cjSAfqMVQkHDyuoJd426juKhcNUBVDLe9q6NDKcqX4JuMpjUcRURKrHEi4GmydLPRxxwRtWY",
  "key25": "Kd3ZT7T98gm7D5YD77GWoAqY31oEft7j18GkJkpBKp2fdGNziZFyk5K4b6EdjQsRgViGg4BaWJAQ4KwuuLWUB1m",
  "key26": "4W43s7i28uYRvgLGBrJvL2WoQgNv7qG4pAiDhbT3RR2NwJLFbuWADQwEbRskHn2KhYwKs3gVQu4swfDQdUZMmjrX",
  "key27": "39WL2PMvaXTJ8beWZP9pWsBtLy8uPUnmd9PrQw2j8BhxtbixtGLgxXFNh2gaTkG32o731BoDUXK5cb9RmZXmPaqm",
  "key28": "2M2hrNGjNgv1HuPieaG8gSuaKvRLyTrJdAzPvZHEwoDbvJwkkHCbhMnJrVCWKQmWzUbJVNe4GJy5Dhdvyzf8G546",
  "key29": "541Gi3NCGWvRtYMBYDhjTeonjCwGWZ5uTcQRSk9xt5mMRzSmU5dhumgzTnoq7YpY5eNruFaxJzZU7u2oqpxQS4Uv",
  "key30": "z9krxhLa8M2YdUum8aBySLV3d8Ztyjqx554SwQuhRJyQ3kPyY7y6Epump3kuow3KKDhMwm36Ept3L1LXGHemWsC",
  "key31": "4bF4SPDTV3TWBPMdBp4TsmusT9zXbYHM1LFA5nSVQS43ewkkJUQWX5CTxmjo5r8Hi1PC87qyZMw9KW1grEdeW6e3",
  "key32": "5JSLtv9UnXrSSZZhLpGfyMxwJmbGb8U7kY5UskqqpAsYYzNRRMvhR9uaNRz8rVkVQCQLsRHwLecir729DVwD3wQJ",
  "key33": "3TPArPbBGRLoNKPrEWcRDgMaKwYtpfPWrZasCBTMT5fjpv35vPuSiibaMtn5Lkq133PdQgv5WURfTJCkwfe4qpLs",
  "key34": "32Rpw7a2vTbXq2F3DjtZqJcoP9oGoARseRSGGGsFLDUKfJq5asJcxW5t7R2suWcgq1FDjShKeqq65LAfxLVAisND",
  "key35": "pvSxkvgrRjdynEKbNEkzat7adRXK9Ride2ipvhfXwaGyQVJCJQarVdqtAoKaeYWxwWi6KpRoDo9HWGSmz3sGHTh",
  "key36": "4Y1vVEtwCD4SkDV7hCYTSPBSDbfC1Q3c4jHKcJH8qLokzdgnP1eZsLXwDwkpJMPmAVZf4ErD32mPxzdZ5wkkBJTE",
  "key37": "46rxxPTwBNYFw2GrMbjp24hC1ti2jR6mFzgEDC4LDVxA122xuaUVg52dgjwkYfgy9zJvTNx7Aa2iY52JBJnyMs8A",
  "key38": "5X35NkzRsrwcuj1W64Z6VSvMB37gyHgikY9vyr8DZWUe7dTzVCvGnRQLSVxCSijjuHgMpxwcU3o5GwsAb9LH3cDy",
  "key39": "6ujzo48TLqMJ2rMN6SQ1FY4u3bmnnwTgcsV1SrrSpdpdtEJZFzavv17SfpjnUdM7U5Xfu4F1aX65yqdhnZbaxwc",
  "key40": "x81c9Bp7DgxgG926xFgwPnpQvN9BydZQuqCK3J4ngccPeJMXav1PoECqC5DejQFeymAsC2wjhGZ3VbKboUZ9nG5",
  "key41": "2tbwtWNDbHp7uYbS6sFLfspZ5HTRs8jFVu1kZfGeskvsnB9t2RjQVaPQrRsoadNwn2iYLpUfJsrG2giarG8ajHui",
  "key42": "4ardHa32EpnRK7qLd29itYcTkMUYcMLT9e7CafzqzE2CQAg3R2S5MntPC9vT48RddnifSwmV9ACgp7LYp93oEn4z",
  "key43": "47Jaa4NJZYMPANsgw4HnPwy9DbZjtVarQiDsFwviVFqnwo5JzqQbr4rC5R3U6A3zw2wGTjg9JpWXU7gn9tXgWDVt",
  "key44": "2HTpbSwT4m6Ty2ftUC92VC5raGzAFy5rUHLwk3HNsu234kvvckDu7bjrgc6C9seJUWDPk18EEtsUC5iT7nxisAxB",
  "key45": "2GJnssD69e6NX8CwqGoJHLQVzKoJEfMwqSbdYiWhwTJcUnmACGUMDGVaUUEp7g587jgzwiiqnPyskjNZzPhaQPQK"
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
