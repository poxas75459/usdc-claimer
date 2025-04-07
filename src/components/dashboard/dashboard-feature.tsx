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
    "3Fp1JKxVL3riSChPhQntY8fVHZKAYYsa7R6AnEUhZTyhvNRXtW9fRKCib5vhjre9u2VuvYUPcadL9NXKAFvCRqv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qtm5wtjVN6myTEKgqSUULKFF99W6sofzqKV7E3AgvYfZ37RLTjW8NMfKqUiBJUWv1yKDm3rgYUb91YWJ2kWYdD9",
  "key1": "4JNibhQ9vdTksZ5vJ5Su6677A4szd8QPHpdm8F9mwZ1caahf7UaUaBwnweMcN5taUVpq42R2fU1WX9b17Gr5q2bX",
  "key2": "4V2skb3nTzFfJqhtxp3nQagYBXBxdHCqkDx3zddQzQYZe8De8fnrDzAF7CKmXY3BkaieyqqB5CX59oiLYNCvKwcc",
  "key3": "2e8CX11Uq1YShSZqrBtNfPyRm4WUggs6xgsQxheBmHxbP6H4KfZDv1DadHYp1ZGALCh2Lq63BdMgFE5gZiakzaEz",
  "key4": "4wBcCDU8sX2MMWQK4jDsV1pNwgwAKSMYxmr3L2vZYHJtPy2v2tVrhC2VogqvSGczRyz7aDxPrSmV6iMNw6KF9JJo",
  "key5": "WVCBDLhKaNU1BpR3jDzLQTFdHTbb4psNGWXMDMi6Poe7pqCR961vdKMGwX447aKnAgKwrYXv2WwZQ9VzsXwKL1B",
  "key6": "2ETHhnQSduT9k87KLKMfrbWuLg6GopyUAT5kxk1irappuYFYctQXn3PzNRdCc6kWtpZCi7GoJo8HB8gscTaKAuwh",
  "key7": "3AVs3nNNv1WRszBLfaDpc15sM8Jxg1e7AXoMcQoEM6Ypv9bWpqjXuctB2ZMUKHVoaW45buJ2kLmJk8TWD52XA1Dj",
  "key8": "4wkGtacQUqN9zDvXWG2e3xLuo4ZeBbk57YPddpXnLzahmUeY73tdAGHFgmazEaCJcCsDVN9Z6vD9WayQnRZtYhsi",
  "key9": "2wwMi2s1naBccRL5HNuxASbNLuX35LCtHjMcCggFA9JDo88gESV6NoqzzbYDk9BN45rxSGByweThKmy6E2KsmUnH",
  "key10": "47ThhmYNmoubGsis46UoFCaBp7dAmxDbF7hkQ7mgkAdphfNcgmu3rbLEevVbV59tZ2HQjjXf8FDjZMLJm2Rexsa4",
  "key11": "43L9KaWJLjZzkBguZQiUpkPimx7jumzmTiA4N3a18wMbyRvwmtKRACZnUwGv8up7RpfWxfKqybaforAYMHjXAPVM",
  "key12": "3iGzMqvjiWXcB2c5WKdWYSVoA5QiZhEEC1ftPt7mBzUns5dbM6i5FdsUvoDEQFBBRrzqsxb5NbcxbTmUNgzD9Lrb",
  "key13": "mbxLSQXhx5SqqkqpVjc1M5bqwzDKiV5eUHvLveuDqhstjjgmjX71keGhT8mHkXeUkFuGH9AsVssgvuL7mopyECC",
  "key14": "3GT5BD4NfjenDh3VRKUTDCPjTman12ZTHQ4kL6bqz9kL7XzTmVKREAGHXgXLLyCRY5MwozjcrSf3zAe6Qmntmu2P",
  "key15": "4rQGakZigxiSibpUnAezqm9DE3juwPgukPLp5iQmc67b6rfPDyptktTUvxYLRevzbTnvoT6JPtmZZYBceySskMN4",
  "key16": "EAUKCAScQQesMrseEMiRr22kb9qawQB3DPaZSQCYVB7YAJqoV4znhjuhLC7MvprwMZUhkvpsaJBFuAF9vN9M2hu",
  "key17": "3cRNhLahZKNqbWtdC8trni9AjAk6NTu1mz3zshDtJWyXbuTTq3uCr3QnNpcv1wkPkPaMKugba6XPswn1wA7JXbZV",
  "key18": "t4ypNWt8ueCgLCJKKJZcqUFuF6DSFUQBcsSaZhjfMw8eup4PKap5qvtmyLWGDg9vs6DzL26wHDBn8BEWGSic1sf",
  "key19": "3Ng4EjyKjQ9JV2QpGYDLqb9mFhXUM9SX1cSQsjznMsdZUneak8PRdVXu8xhkiLw4oacvJCZrkKXWQPPdua23B8ks",
  "key20": "4HgFMMPQSDXtnMB4E7m8wYmZmBrL5MkaK8TziK7WK1AojNzQNpvjotJzg4wVTa4oNFsrHAC2GimWa95jT6E64z2r",
  "key21": "5LZwbHxMEcUkwWjG37vr9nhRaSPfx45h7EMiwfojZLo8y3bm6yHtWP4QpPN9e5oGh47RbMZyXHuNt63E8j84jAqX",
  "key22": "3X7NPzokCm5F52MWeMSJYCk3sLQj1CvA9ag2Yt2nDbw3Exrb4jCn2E7goieuh6nTmqksk6LNnL1bibMkZDW67CSg",
  "key23": "4zhKCZA57g2RQ4fvScd5HgN3CdxhDmMnLVJFLrnRQ8r7YYWCGS3EJu4HpAxZTgri4TV2yzfy65obB7dYGBwXuFwt",
  "key24": "xsS6jcnjiSxXdgGikHv3fioR17shopTEoUpnMz2163UqJs42WRnYfHe4g4s7GS4rdJgyibnbkMJ7STmn5qUYVty",
  "key25": "2QAr3p8edAp1qErks4XaQpYNHgrVb69FbvS6a6GuHpZHm7FTVS5i5xv4tSxwZUSnYE9sNHgMoEeWCVnqsqBmuV3p",
  "key26": "3rAbXfjK8AVU3EEvNFqS4UP11DCFyoDL4J5zPJjBBPjqtSj4NGL1W7qUXqHwkKoX3pPFWTHuTSXrE3c9Ydc8H8GU",
  "key27": "2zdp6GbLBiUkUYjVzko8eccFjTwDHnhekQmjZBswpVGAFsWBEEoADmHwscFQH2iu49M7HYf3WVz1hP3sgU9gGaBS",
  "key28": "3kJbhdUJPpxzn8Pkg3RiZgi9v5YTtWF3utB5bDK9BhrNtBBZgFjQuzmPZEND1P2s5wUUcqC55RJv8iG1QrGfJecn",
  "key29": "4tmrkzjVitC4HHpJSG6bK43PVpTZeuVXYjXkK3jctDgi9gQ1DbrxmeX5AuM1bvCeQmxkTTHgD8zjeeQHBtw9447r",
  "key30": "5qWmbWwV9H8ri4AyZuYSzFcbwB1cGMAGHC9BTYnoqs5KLhHKRtg4KBi5LF7xhmwQ4jh47NpBYe1jSkt7rVeN1EpW",
  "key31": "5SJd9n7AsjJZ469pRkivEpjetfGRTsXRfTjcQSNoS8WtwwQY8VM2CtDQZkzgziSnzLngbLxVkSpenkSuErV93QiZ",
  "key32": "3aZCTwscCvpqiTLB34yydv7GU2FWZyfUCjZKndwV9PWxzRWawx5kmriXWm9MxRiqArSpEQzV1YRE5VBGrBbXEyL4",
  "key33": "3u6yvs1XuENfFb32TA2haWYE22iHtfmjtpiemyBYwMPT3acb7nwGCUwoDFHfX7Kh2wAGSMgyU6fqHDFHqgXJE66E",
  "key34": "31EmXMt6yZShJnM4BhM7vecFtULY31Cmo5gepgzr2547DA56Vobzvmk86nFd3Uf1Yc4mFExeaCHFnKPy2CfYfd8b",
  "key35": "41gmU8rNt5smiWWMUBTUus3CJwkvNoyYAKpcYpXAukgPb4bMofN6em2qeAkjzG67XhNom6Q2yfmgapvUPPhGWgF1",
  "key36": "4dDvKYP6xGqy1qy6j5ibsBTLbTjNGumDcuwY6hhpjCMffCHirnm18s2hV1CpK8hHWpqE7dhSwSzU9gNkCzCX9CAu",
  "key37": "SZuhhkv8iVhZTL6J6RjHivdVEvphWKULTrx2xv4Aytgsee5sy82tWfNTcRm9TPQCX9vQrq3RSXqRBiFZtSJJu1g",
  "key38": "5nFiNCABcTUUFy6bFeRf2gNKkp6jMVgZZkZHvX95jrtDeMBwuSuzJiKCpSAJy4YrPNYGfPdMmKpazLVXa7LGGaTU",
  "key39": "3XsCZxJTtvNdFVyDzGuYRya8dXPCVZPqafPeeLGzHQXJkNAjSduTZnBPPcNKsw72hd93dxPM5aDAQHA9CpaeXrAr",
  "key40": "42FN6GccSoy9aVS8Aues185eTU76zfGQoW3atj32t7CCgC4LXPr9MciYHGQ4fGPG8Xhdx1UmQySJ6RowreE7DQWq",
  "key41": "3Rg3NVbwzj2nDmQpj7RLSJM9B2PHeMmidx8hvCuxmQjE2bGjaLKE5369Dab8AEnCHQMaLTF4NeuAi5ishsrghv7a",
  "key42": "2HFP8wJMAoS6UVHfRfrVQCYrJH9usRpMrYks5FoVzg9czz6YtXF4C3M6rM8g7DT5CSLDs7JmzTGkhz6oiHffqz2R",
  "key43": "CqehSfpx4zd8Ucq73r45VRGLHMeqHa54icC2hCGM3frDJy77bqoP2WXRt1Dr1cAgRgxe2EPsXA2DqZTrWdJ6NLW"
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
