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
    "4SQP4DAKsBJ6wkdJUaQTFBjLQ6rRtna7uMfun6dw6j6wx1HP4XFioCc1pj3U2TdGARERP8f5zMW3u3VcDU7EquCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nvp61TPTk7GLQhpjtoWEdNmTSL3wTc6pTwckVKEnA9v1XezEZFQhfxCNqZ8NNFGxg84ScayX7gGZnsUpN66Y6EM",
  "key1": "2jPgJjnffTY3pGNGY9WcG3gRCAs9Ex49RN8K5ZaDjJEso1CWn62fQbFPrTn2N2TLGukDon6oXP1hJzYZjq373YUT",
  "key2": "4omCY68qdAa5xy44S3YtKLJBagwi33UjRFsMqkjNyhs5xT99HmXdyYu64skiET1T4wKLRdqNxW1EUXWQA8zkgwAh",
  "key3": "4B2cxAMRwe8se3HsQ3Yn5Kg5cBgvaDrusdXgFYQTYnhkXYRTq4euQHTrui4nx1W34JECcroiYiiEU8BZfEaKQ7cD",
  "key4": "nBrAomsborNFKpRBgiAj8pjfMva5yMSHDH4mURmsmNrdKk5rGgLAHFgRw1huKJLTWQ5WNLaCjkgft6XAPHrDPuZ",
  "key5": "2MsrQa8vjzTpQqbzTxK77SPfj6ucbveE8byZyeSXKok1fxTazFr5u1HzyWkYArpHmKcjqQJfDV4WzCTd8WMNBZEx",
  "key6": "5mb7zRHikrNmWnG8ZTQuKqivgD8fpisaf1CgnUZsRqNBtmBMyQoLwsqUhoN12GcH44kDmsmi3ULrEUXHcGAAMTSy",
  "key7": "5JfzBcJDh1PKGpAyVKymocrrL21bpBerJ6jMfi3itujZpbH89u4mvizGLCv4Gq9z1uJXHBtnZp8aGHwoft8SskMD",
  "key8": "5NAhZ8u7mvL3YQitmcpUQdKoqUy1f72beAoWDeMQvfFipXYo67fKEu8YzrtFk4EaUW6zgM3SgBHyhEZXrMMyN5Pi",
  "key9": "LKe4k17dJxnh2Deyek9JzzMkXRotZxrEUpMkkbECsJaVuhrFjwCvVUCxrnKpWJUa7M525dr8dhJ8marNiqckmAj",
  "key10": "2mQu9moyRVnpvxinZxN6shF3ySbSBYS7p2mRnQPu2rBEHb6yTznXWHRgT8gJ9XWKm7GzSgr9H9sunvydwoJGCq7N",
  "key11": "3SB3aY1jkzLdW5ExKXLLZq5RVocgnSUWrhnQNRWiXBTGPHt7tsSSaMxLvFa6n5utJfDUasxeGXq3XkfVUEds33i9",
  "key12": "5by7AXGF4m8zWnQXFW3GG68gWViXRGzVrUMhvXkdw6WDbtugrxrkuMX6Gy5BtWsLtyykcXn9tLHGhd6RkP2aSbry",
  "key13": "4HsKmztRXDFwhgEGJXo7iCWSH8HyuPr3oHJAfhW1WNKtnK8Rhv4KHWx6miUea2p6KfAwyvPPLzpY8i1B93q3bGyS",
  "key14": "LqBX9jwvgojcTVJSCG6yuMh3GiFNqCppjjzqDLdkCazG17GueR2ZZLwdKSQoqoiobfCPkj1pCMMzJqUuNHYJCrz",
  "key15": "25DeUMT79fD8j7VtrsP9qW7skhG3EuhxtReXcniKLPACa6bHLp8e4eeuQD9tHuNefdd1Grt4VHH6dspn9WFJn6ao",
  "key16": "44WRn3wd2W6YFcHUqtnNc1wFc6KnqQKk7S3Hdi7N2fiVHTDe5pn3y8jS8fJwaK4JfH756SdC4ZQfVTKeq3zcdvvm",
  "key17": "5yLypbWa6z7yyQd4KK67gxuESjVsuJ6AXX1X7tPb3buiFacWjb8D8mo2R3t72DCXgZrfjL4FghH7YesXY5yJ8mqh",
  "key18": "4qUDCvLhJy5Z51LDCvgEHhyri5vQvc7HsoKkRR8YXKSeUUK3rUFdcXvBGLXH4DcikmNPgQrnKz4HawpgD43V5qXC",
  "key19": "3kcX456WAtcPw5VobZuXiZFurrf7pi1FWJ12QtznYZEF18qrfBgyzEeoaJRFvqrm3TCL5TNJ3YzjYEChz945x6Nk",
  "key20": "2hZV9h7HWaXkHnZ1d566sTuCKagYUoKV5uynMyMusMFNvmgfzXMYvkkEudKb93aP7Tr3psJy58fKyfQaDN16kdFs",
  "key21": "3fT6fv9tVypMUsDr54Jw6n5nvgjzRFXLqdZeY5b3sArth6QrCvKmPoK5nSH6pca3Fo3FHfufdvabLyssj9xQySCH",
  "key22": "4KYSYMrJZ2ntUJYwArWTaZMMHzsHrAq53EtnnTi8FjqcFwqcNdFANLNcapqpZxygDs6vZHYmkrkTSBjhEJuDSZuj",
  "key23": "2yh1ozYEUTu7cmLMQnzFxpW1sDdMtSRvesFSgauK8pWqpvdRo9RMqxaddrtKa7hHhegy2UGbX3mYszEUqFvZE9og",
  "key24": "2SKj1bQn9bDC5nFamiButUPubnzq8NwGptmiDvYeAgYDkXkx3zK4pFPRWfCrrvW96j6qVVp9redj8wct6E2Ka9WV",
  "key25": "hCW88eAMQ6pwKJJYg2RfAtZw2ARnTr4tFPjDwiHuQLi4BQsse71EmfCnuLzHS3dXskJaVVrYsB7noDdcPdXBkA9",
  "key26": "5DeoZa6pPmiJrRLLb29EgGzKe9JTFZ9PDrFnpZacLE29W4vKQUVDvsFxgoXTXAcMBpsh44MiMDiY92LybpWrkqed",
  "key27": "4gtFmXBQRqtQNoxk4Xv7PfsjgkVQNUYz6gDAhmWYcbV4QwZqzkWTVREStBcz8EHB8wnDtuuj9oVDp5pS8iPPK4F9",
  "key28": "4y9HptnXP36AYJnZdFPNLDBoZezwEEYu4FuAzUtAhD12snmPMNmxcRp8KjAovgLDgGaHzEtkhrPev7ciCchV82iH",
  "key29": "3qM7a57EyvuEE32Sr48SHqpDV3FsswhB4TrgSasrRpZ8DYRd8Lxpe6u73nB1C4oiUzd8VZeuoTVsNnTkiMNex7r9",
  "key30": "3z1s2E7JrCVLcYtXVHbnzxAp1HajJCJ6A4HSAh8ayksiRZSF5CE7DwJHLtY2MFtTJYdLjDQE4okDRQu56vrQ9QFo",
  "key31": "23FZsXyrr18LviGnyKorsyKeiPbAkoYM9DxXyVip5guyeJff28HTPUi7EEdGQRfoNmfZ3idomUEyYEBEfCAH9zse",
  "key32": "2EB2KX9B5W8P3graD58QGvP3SHyZ5XhvnoTJWhWaXLKY3sKMtRgjfGkoedUdcFboAGdcAK7AUVuFLNajHqzvSike",
  "key33": "4DZfWhCePQ5mtRQ5BRW4AtgKbo3snuKSdDKYj3JF2QFP62LjJAS7wiy6kaAhpgquKTuYbZzEWFa8RPXYx51TQAB8",
  "key34": "2opUWMHD87sd35yfBoGBQ18hQA8Lvy43X598SbAEtty89J9FJxeEJayMhYmKtKYB2sKW7fX4jxP62Fiyf9o3kKnL",
  "key35": "4mctyo5MbSBZSLFijwJVgBUW86Dv8hrpo1bhReSamzJqhQaj7ncP7BNJhJ8y7f4h5wZ6wZHAtahSGjNxwHeEWvK3",
  "key36": "5SqLi4QbF1uX9FVNceyURwnbkqAMgrhKWdLPyQTFZmG6p2xgVnjma13qsHAkvHQoXKf8isgtqqpKutGjzkCsyvmj",
  "key37": "3xWtq7n8oPEAWFhcUMR2bSyVo5C96ECGbYWhr4nSasth8m6yQdQkMg8trZ6uRFjoUsLEtJVpmc2owbX5bUeiMSuQ",
  "key38": "3iDd22MZ9yjrkGRZgKAaLMznQd4smkZhubFCLQLpEdTgc8ohvk8GudH8N7rUGNaVb4wGynhB9mvTkuR6s9pQaeRL",
  "key39": "2wPX7sTmUDNwjErkK9MbPCbPZoeJ9AWQKnACZw14366mYTncXuxFqnsrPGsG9FazL5xrpXwSKdKuVFMnF8bq6DvQ",
  "key40": "5ZSxjTxnkRWe7D7CmtvEFyLDUxhJygnBF1AXBFmDMJrnbXz3bTA8dcwCwKwehkEQXnQ3PkLxgWxMuyNyo8wgKagK",
  "key41": "4kTjvvMsaxHgQuq8GA2CLz5xmvJRkJX3APgjrM5cdfKXMNzs1aaVLn4uSrTM8AtnJbixzmFfyVt9eW41zd8JBmvw",
  "key42": "5VgrnG1wiWDU8syikNqGUrBugg4nZFdkMmNDmM6dhpGtDv7mNAnXovhn6vxKnhUoQthZPy5DjCwPJhQ4QfNmZU2M",
  "key43": "4XGXbdnKSAe2QxrnUt6Vq3fememenUs67j62a7R5E4ZH9yNHA48ficC11ajVLSaFvAMCmaTDLWN7uwoL6yBCBYq1"
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
