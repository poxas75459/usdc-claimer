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
    "4TBH9Y56Sc9vLd2Gm5nT3MzfJGVuaDKUoD8paHgRvLXhpuFBoBVWX4trV376j2Xb2u4swa8sRtq4PUG2PE85er6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66B2j2hhJ5qFH8VFFybjnKLJEzfbrG2Ydt2xVpMyBmxzdC75wCWt1tHfyfJVb94yahikEhzYJE7JusjE4hEzefqA",
  "key1": "3ipbMMyLmBd8UXWdr7AeL17qfvtB2yxtEBpGXBrHaM6foL73rhCiLBhD2cPaBSmgtCFyYYvb75yAgaJKCkY4AABV",
  "key2": "ierrB6zrZcivq6ZQoTtpptdVqVH54pBivgZEkcBqKYh58y4AyPPrfFxKWkki9BX9fiVQcSsDaLQzKksxwCok2wS",
  "key3": "k3ZJks1KHEQzT7Tia54j3Jr5R7Me8Lkzb73e2oqPUospKonxhE7PRvhYeBAzSfTYC6N8931vYJTsH56kiHR1wJM",
  "key4": "HgRi5ZLcMBeA7Kc5q1EizuEHUnxXwmvMDtS9H4RC2aPpBaXqPoL6e19Cm1BctZPEaawLQNTeAkVgdZ77fjoRe8x",
  "key5": "7hCBnjZUYSRQuPCqE7eALNuDeuDkgcTrgPFuKyFgJpkuuSbWsGqmHzEKkUudjcuVVARVJhLjaip14QQybGa7Aun",
  "key6": "36XY87Wfs42vZ2ea3yyWi8s6RydpucLhh4ei78DhnbT5epB21m9efesNrtVCtoSKJHQTDDfAmotZMgNYkGreM1Gc",
  "key7": "5aWAgFnriY2vyozdHUTCyMWi3Nqfku5PajeSuoPoxWXzRbpTYMVUZueAryLUtfibirb17k6et9DUyvgN6vymbdFx",
  "key8": "2nuZrramaM32j7S6RqBweH5XpihBCYGZWnvhPbBVojNj3SzP16GDZr8AqTqzR7USMfokiEkamGE4qpwJxQDG1gN8",
  "key9": "29rm6DvUbojDERUsfCvjyc8kGCTLZABJzGKGi2zug9ncGR8HN2t3UgudpYtyMQcUEtKDLUDijeVjTwGFZWiGEda3",
  "key10": "3F724PAPxWSm2ZYHCdJ98uxLx5EpT5HneguG6Srg7siNEY9utXt6QAfDzwt5uVHgv3V19LGCB4z63dAcq8HQqRjD",
  "key11": "63bvXt6nxYYzaFLBHDGpMcnhfvEgupsDgKg281fRG453Ztt7om5aZbF8u6v5nruS8pfczTPHfrTdZVNRUJ75BRZu",
  "key12": "pwjbnmZsyDopNGoM8FntuSUwcxieLWhseBEKfwtRwbN21X41FW3sawtwVDqi3YLjwrtPr3VSvfLBRf2WyW1Efds",
  "key13": "qobycQEKqm1JQJ5oEKTvfZBcySFgMpcTg2DQ3XuWA6ME6z9iFoS6goJqbbhhuB5PWnyejd5nBq2JS1nmsTyBzdZ",
  "key14": "3J37Rbm8VfMEcpezcgCSZG3hw3wGPx3nFncwpDNRfsqKgw8CijJZKHvuShoh1wbE6yXAo5xPvo5wjH3cjZu2Sska",
  "key15": "21ujYfRGmvMscJZfgkRoRf8oAx8Fif5rsCNLCe5FcuunFRuAAQWDF45FF1GVcDmC8TaoAbDem5AM8ZDUb2LMmZpk",
  "key16": "2mCB38fjLLRxLopW7J9nsFnDtU3m6srhnASmRWK2xcZyRywXFAmGz31MfGqQAK6s4FQWRJ8gczptvETWVMUtFpBS",
  "key17": "4PdcXAocj73va718aZc8jvVg3zY4gmKofSV71QjwX3YAqSrcTwMj5BYQ4GcPeqNn5ZSyLGJMaPi55js2Xw6NQ9f",
  "key18": "3et9hJVRK1EJbBENPPxHfbKiGqn7fcEE1zhPRadWHzcooZYFwajrHMNdPZnCM3NLYUgker2aZswUqv2XokmpUvav",
  "key19": "2HMrPpFZUncMtdbYGSHy8mdd1evkfg4GaZBik8WQmQXiofougksmXs5HhCHv7eaheCE5MpAnZgAeFPLMSa7PrZS7",
  "key20": "2nAYddHEg1r2qQx5cYSBivYcskmyMHkcDPpRfeN5sZMc63VKUt3ykgHoY2j8YrqwmJkS9Wq9tNadhqQc8uLWD6Md",
  "key21": "VrUzRi3NM3gYRuPW9f65SoByKR58jNFfxK3HbZTLx1EY9BLXmNdptJaN1xsN7LLEpqQXw9frQzXMKwJq1ejDNQJ",
  "key22": "23f6hc48SppyddivgYnszfqwNGHZhFLHJagwaLhx6AnrYhjrNcitYnVUFrwuUDma4XAAXT4LDANivWu48hT1Jf7e",
  "key23": "5mvsBK2SFL9GhUYgk3k6ymcPFbeigVyC3mC63Myf1tJXKt8Aw6iwA4nBVrTuoZVjAohhkFfpdfDLth1wiCTtVQD9",
  "key24": "5PJXcAdPgw1BXLTGkRkVu7YYSzz7rwL4iPGBci8vFQS8RvxpHzdz1Z5hb1htdGwN4LiybkipSzs7gAf3UD3VPXkj",
  "key25": "3mecxXeyaovK7sktrcCvzTr384d8BtDSFQ4ek9xGbVL4NdaCouc2FYY1H5qq28bKZS7mwv6ZxwBxkCmbYRpaAEDS",
  "key26": "2LD92tXRNKgdebTkMaemZ424VdFjymYQSgfNe5AfnXkchv7DvfPXvhweS571uxRCvEkcEpzVcATr65sT9w8KH5v2",
  "key27": "5bQrrdwKsLdJgpgs6JufVZv12qNVjN3nrbeqw76qE2aJUV4ieGdFAtjUFFqnZRi2SqKretH8wckBVtGLVwpKjeUJ",
  "key28": "38taJ7hhye5BQzv8zHHa5Qv5jVNbCiYfBuf9ktssFhbag5iubNzwHBwVMyhvNKV1R8yiFPsdra74n1jS33FKDsaF",
  "key29": "5hHNT8bCvJ6YFDmP1R7EboRdWoop7CKKdkV5DtjUKaLLgJ4rzbfgR8nMNjG9huqa4JMnXs2Tg8pk4XWJQQDCddD9",
  "key30": "49mNguSj4jJFpjqskaDQKPBbn9erWQ47UxqydsNPtTERyF3zNoxAqe39gWXwAN4PbG7SgWvBYuF8Bnhne4t1LsgH",
  "key31": "2exxDrQxmkCU6a6J2QTcYo6F8vapkdTAwaouYCogUYCsXVJ1mtV26AFahs1tWLNsXxriooM4kMkdYWbutPashhvi",
  "key32": "W8YEB8PEivxrvP9svNTTxzwqvd5STd2xC2aMcQuNGYwdU769kzmRdP47jP89UCfigZadqfsNS9kWVcrLjTBasTL",
  "key33": "3M5MfT6LSJA7XWmvje5hwgrdVwubjtXLDCLF4xzjCTqnC3BF3Wpp9UepnxzWoFc3y5sLaFfVPkX7VvrecT2fJPRK",
  "key34": "63xRstEKEyCJgU25nP1ZvBc7jxShHBUZbawQHda7n2ctbbAxECiwtrC8gmNL4pAffdy6pZi4vnNDuoNNwVPL9G8X",
  "key35": "22ZzTohLzEPH7QsjNxTtJ3rAzFLvwJZeSWFG6hGH7xDvHUHe6d7or6j21UEf6asYiLV5ZMWBzTZucwZ1vpiDioEz",
  "key36": "4yLfZu9wEsQS6NouQgZpfcgVnsRLE96FpVbUWcUy6xGerZCLYxBLDwYgtcy6XPHN7katvSMFrnCF1wZgLJL2nLLs",
  "key37": "2kNqcWyzhftTK5qrzPNYFimrQE6LpDzBZe9Vv6Cvkd4zj5Ax1GuQALSzWV8Z2Wf3oqcDMZc11mJNCBshadgxHtoq",
  "key38": "3SpKoRmrjMC3nDwBHNS4gvuNs6AWFvz2SWigS7G7e7y32DZVqiEvSKQ9u85WFoX36EzNHjYfydt3n6sWKKcDo6J7",
  "key39": "4yhCRd15GeGPBWepkAUD8fZeixAJmQG3wuW1VHm9mmeboCrfeSvUAzYjH73fG9sQMZFBJEVJhhmi5gPVMbCQX6Vc",
  "key40": "41ZGYHxKnxgvguNZgdtwBub2mXon7GXZThG2a6V5eL3R6iSqDJv7efhAmuabhDToa5jjkDoM1KeFvx5GL4XPoz5g",
  "key41": "5eoLtRtiaWxcU7VJVHs5XUHnPEaqwhwvRBLz2mDzZNjb2cBSAqXSJfZazTU2QTckyg4pBH3cS4AFTMwqhfFBun1K",
  "key42": "3C9jkNw8mzPGJhAZ4VrXegvLGUhCFkCzA5ftbgPwdEk27yVpDDeGPaLvKUkifGeRXvyu2UcsGFB753Ya5bRHvqkm",
  "key43": "3MKm4hYgqPGUz8yPtiFZUbUzYWT5Fq3y1b8TS1nJCGWY9TvwdWZKXcBikS9v9M56bp8y1DDdzkba5FZyM7vugbEn",
  "key44": "49n8RxfazaN5quBaTjD32eSDJDaMtWdbdLr4n2kyMuj25VhDs9kG4pbnomFFgGhGmDEsCpo36Ud5T3ScqhgKRKN8",
  "key45": "3eZBxs2E83UzkdN5MwCbQBWuQvQgJA4y7DG38R7tTzz9vMLyJGcEAVfdrsnmqcnfshhchZy84occtTQJ1QgeYZYz"
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
