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
    "514r85o7hGmY8sfwqg9sjdPv2Bx7ncV2j1WYhmXa8CsxXSaeDCXjrm4tbX5XAuSD7dr4JFE66aN3DBWsSfnBLj1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hzpY2HCfovCtWLoZPGn9msoQZXK4hbnpMDH612DARzGAFn9DFNe2SZ9yTm5U5CQPfeCTubaT8AW6d2x5mv9eEoP",
  "key1": "4W6Q8i8MrXM2rggj6MWp4Nuj5Eh4kVmvomundXqV9GXVWsbK3A6mjjvSrcLU65HGbZDCgzcvDccr3UST6c8d1Zo2",
  "key2": "4wJZoQidHjAmehTCwnecystz56V9zdBM1ZhMspNr4yQgERt44A1DGHrk1pupdzAeExhhJhM6tKqGRcYm9wSUigqT",
  "key3": "3hK77e4EAjyuaCMk4SDPEVqgqbEHK11adh93NMZSX65GtG4cL6GTVSRABBrQ11AEjU9eqfo9fZY2jJYkWjpzg5wo",
  "key4": "4ACmGa752FzAkZnJEsFddPMorUG2rtb7mXZVNGNYkqqYSHq5FkYozAsS31LMhpwwbWJQ9ZdGYtSBvcQiXnDK6pJv",
  "key5": "5QrqGLimEbMZXHEXXjaCs6BFyxAihEoqUZTh4F3Bv4PqGcMvc3gYD3LBBHU1C2pJBbDLCg19B12MdfUxpViGUzre",
  "key6": "2Y49nY581rkbd5UxXp4DmAozbiDwBSnSvA3HSZF1TwMvrGAwByJnrzgwzfTWzEtktjqhyaoNfU698MWdSpy2SPdP",
  "key7": "4vfArTn6myDFU8JQesEawosAC5fGn29S5d58dpChMTeSh5mbzs5giC8CSWNNHSdivdzwFT5QSyPwXPG1pRbAimZb",
  "key8": "5PWp17npY4gUm1onvDinTh3Wds64ffpxgjM8mQqLxHsCnbJhv84DvVHZhbr4wAU93GevLA2F7BVJQ4ynuKfJByoQ",
  "key9": "2MzcCEiFuXyKNf5dHGd4QU4KKfdmAp1tq1Bm23bF9DDRPwydUC8j1aqVrDts97eN1gqCW5QowD8L5jxYAQyuRmc5",
  "key10": "dT265jBwtH15U3jZqSxXHs2VyDUrCSEqx53fXSgBKQaNGH7k47kRX8LtRAZybmWf1BR3m4ZYSi7pb1w8n2BCr96",
  "key11": "2rNrcdCpT2bBFhCFCuu8vZCw2VXie1h13iyqtaeb1ru1szKm9SmQ5b6zCLYrJfXkp7zAoKT9QSGVLquGLNGNJNa5",
  "key12": "3vnM6zUwLM4QLPZ9DomDAruSbVGFXN6fnn21Bk3xQgBFjDgtxN5rTqSHYCSwm6VbPrfUpRDAer81VQ1Aw2WE5Z4w",
  "key13": "2fAoxhbAMrBg4nxmsg7qHZnhiWKBzjTzFzQnFKMbT9jEdc52rCU6J7iQLkQtk1MW1rByPhnzcuXXCzPdiquJ6uEh",
  "key14": "4bQnExgC5UHMSPi2zcSmcUMhjqEPqty9Yf6Ko1iKBG2WkcRJkVjrFKaC4GFDvgELJ2gxeyBdph9XjHd7L26fYPx3",
  "key15": "3LRQAH9i3sQNJvQEexeveeVUoJa17FPrmYqwBPTAtota6MNcyazumePiWqHk7HmqFW4yP6mibK9vbgAveK7iU2ZJ",
  "key16": "4uPHr2oybH7XgbC26b3gHT1tTkdBr4gbd7wmfMbrygbXkGFTpG9tY4BHZfyN6KR4FTLQU4MEWS4kHaT7EZUaJHrY",
  "key17": "61d6cWeEymTGaLLSMbG1f7dkdZaqDT9n9XBhD1Q73Nm4ed6KbyTUZSrrqH4twpUWb9HmdVTR1C1ePoHoXBwd3JaQ",
  "key18": "5CmjvtBv4ysbfFtoie7tXyqGDddwsXVCQdPzSjdykwZp66tEPhFNqqTdA1oaiuFRKQ5aaATmMp1L9P2HX9XJunwh",
  "key19": "BS3juEvNoS8ScwmAQt5cXBjhF8AAYfXFwtTap5YhPiE7BpNXHzYLrij1LExjbF5t6mY8d8yyT1F2ZYLkFauKMFE",
  "key20": "3Dbcw73qj2k4Y7XQ88fYniuGVrqmfEAeSYM1nAM8sxJo57V3PqjH5hpfx5QwzK3Ky9yZa9JTa8nd8JxnSpWwFLJX",
  "key21": "31WuP9NHnuDGEtckoxfwTZ53gR9dpaZhjpG2fRqMPgf6z96NSrageQ6A9L9FWA813xA7Nc8RhZm71tpvY2rGGewN",
  "key22": "4NMuDShXAySJZYj2TR9Q8oUFwVLt4qsMCqibEexiSY3iScCVPfwdM7KajtQzSxbUV1Pku6j6tKREgFAt254V4yCp",
  "key23": "45V8oXvnPrWAW5anbzn4zWTRMaFsPJLFDoZCfqdbxkoLizrZDcJvwDiKQHFuoTgGJ42PeZS7oj6GsDDXNoR54A5M",
  "key24": "43PfSH7Lx6trRpFWVgHYuUyr6mpSmUWsMbD9rJhCjz19rVyygy3cEjoex2Bwk3eyQntrhPfoqjTWbvaVzdDnJC8P",
  "key25": "4uW58mHtbxRXsUFEctxcyN46SN6YQWLrvogzt1t9UCQjiDvTSinm77yXWiUT1sqipB1m4wepeAMGigaVwKvFkDdm",
  "key26": "2HNxhHj3KUAysucPLvgUqitEfVSXRK3uF5kLd5aKsg6wwgexgQjNoXpWw7q6RpZWGpRRRX2FmhuTBB3uR5Mg2sPh",
  "key27": "nxG9P1R2ByLe3ZDqmpDg7nLEhoR3qujr598Uc8hGi6RAnv6pMiXVnoghk7F16aHwZPso9JKJg2UxaqTMdUKevES",
  "key28": "TWUYrikCghtopYjNsLoNLmAiF1khn4NEK7mjQPKYATWnkLeewB8LAKf5WzPwsVUT3Rk6fVBhgFTZ8ic8MTmAVn8",
  "key29": "5GnuBqufPndcGFXD8UFRAsqSMf8SHSXS5gdifkdjoWXcZssv7B8bBjzuuXNbojQph9RWPK4LtJcKmXyYAchDyvX",
  "key30": "3xdHLCvfY6GxXFhLfoTz9o8FHjKqm49bLGZkxyJT82EFRjSFa4khgeyB5vJiXgxosyYUtCntnZD6xbyH2RweNh3V",
  "key31": "MJ3qhf85bV1wgtVio73jsHcJWxeNjPMeRRBtLwjvJJTe67fQNJMPVQpLFPeq15new6ZSCdT5CLJ4TV8KBHenbSL",
  "key32": "8XoWGWDyC6gsh88sBeWyyp6qKynDWgbcME545tFxHkK9ySynSYgPBUVQpyhnEpFuHUu13jDnhhEJH4iSeKyGo7M",
  "key33": "4G1JWbi5AGKkeEz54zfRSe5u6FDU3B1TG5p8V6cJS1UrzZppXo9vYcJi4ng7nCATWm3m4YTKyYYeTGFghUfW5Q3h",
  "key34": "3RVSZko3mcT1EEHgsGoCxWveGdaadZ69MxXWzNBiiwKwzd4QeSfSNu7bPBACP7nUiFWtBRacsFS88Lfwv5BYCC1r",
  "key35": "4K46L2Yay9JnNBEwJiSKvZFVkDYN5cfje95QRZiGFSDPneABcDRU4NaoeMepscc1pdVLYShgtUeQz1VSpy2Sb8jG",
  "key36": "3q6po5n32VdXyQRZWYbtqtZ3oGuPffi1pvasNzHvotAkX8BsgRkCSXe6WPaXfAKLxaBspz3QfV2zr5vLXTeXWABy",
  "key37": "52ry6mAoWoMT3dXGp1jLJCBqcgktpbt7MNa8HnYzGeR2EqBKQ1bPSu2Fvozj1oCcwEHyhiJhQ9jMd3rbD1xz4sVZ",
  "key38": "4EvzmvM35JT5QSYhuLk3egDVA1dJXgPu8kinRpgHnB89TTYcC2tuoZW1GGKP9Aek3A3B6wNtoVhM6EvZN53N4yPF",
  "key39": "2CL58Z3g8n81fYPRbgLHrAQvmR5Yk1xVqKK75s1fEp2ENKor8LAUkUReG4HRKDSu3nrbEmLLSYem1C6uxNahzpgs",
  "key40": "4eCFULzmqnbPtPhKnZYBpag9EyAXMEvM5qjNkV9Whb2gn4QoM8AUeoC22msM9g1L9gA9kLjrueprJV7rhwbzb9LS",
  "key41": "4vyUPJ4pb7VQA4LmJaxv8Fh2RkpY7QKuyfTQHznoBZbqTaXN9b6LLrMwT5Y2zD6QWcwVMH1QAN1J8E7ubXFBi7tz",
  "key42": "2zK8MHgmbUeExmd8G55vtxZzhJL4L3JVY6uoHn9j1HjoKDiURFLjbjLsddLSntQrwB7RmfzWZD15SjF7bhnTNieb",
  "key43": "oxZLd7jrqvnhckTbYxWBRDeqsGN4hGVZgsjkFqKXhoe8V5ZKVrXJkQKEyrcqxVgBTGWaz4wt3wK4MiCthX54bnu",
  "key44": "5hKYxeNFbz2xmUqVo1FKpqRt3uwe9g7GvtdANzQ5WxCcrTrRzL1Hm5kpVwgcJt1CZYwdtYxNwg7xGiyBgBfXaeTw",
  "key45": "2o3FPWvx2JjzQ81d5QUemG2G5aHgLAFZ77CZciSdkzRvp6Tb5bFmZfusxUaX2Ggd1sFZocenN9o4RVzyXqKwCJXw",
  "key46": "4eibXaSr2QB3NiGLTRMW9HC4TwuhmPxhvLfXn7azPYBYwATjS4dEx14kszq7dWKcYpbF3H83Wn6HKV5pEBx8ANKc",
  "key47": "5gBUs1QzfmiT61zhGCHH6KNGae8LE2bvgh8LUmULAaBA7KbUgf6aMvj8kKVVwYbhpVHotorvCTjwdaKu1qHADFwB",
  "key48": "65fzYsuCsGvVJhWS8mWhCSXcpBMUUQVDkS68RReRUyFBPn5Daa26iXFEAEtZ2inxkga74zbjzRW3aLEA2CCKaZ7J",
  "key49": "5RDHpUbtLPhS3XgVTtwVZHYVwzfF7ieS5tEcmpLejN9GGCFuQVvJyDtopVBq9wnELf9TBC1zg5T1aa6Q8qKEeX4j"
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
