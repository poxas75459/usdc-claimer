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
    "KbiQGE6icU4Aogw4EccMejXr2T5L5h2PqjpyJNuwnYjqrUuth5ZEL7SgFbKrQ1853ubtU8V5MVc9A3UifpXzsK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QjjZUuGN9nw37QC7YCXEGvjHFdQeKGrhzTSvFPPYdMcJyfrpyRKgafJSE9jf5auzV4db6fc8eKQCcQ1TnuhzsMz",
  "key1": "2ZczoG5iT9pkuXdS7GqHQcjTzWWFzjAggApJvSSLt8hJQ63KoKVjynCm2c2CN5RxVKEHhgTneW591PUbFLKxxJNr",
  "key2": "5tZFgg6qQJDj5FPbXfrog5L46Qu1fJgEfnagdi6eZR768oLD7JBJKeBBqHDd24vgEc5qZbtpspK48LnuAnF47j1u",
  "key3": "Dd5NjQQL7oWwa5uRfKW7jcdhjxuT5PvWkmsJH7fjGDQ4dAMnYTDUaceykGimC7yJaj5imTxwmQZAFEfvx1Vp87c",
  "key4": "3E579EhTs78dV88JmQGAJ8sZQmCbWdRvq8D7gjpk2A1yaxCd5QFekKjgxL8aC1QaKb5umwBwM6y3xgfUiU7xgtKX",
  "key5": "5K6qj1MrnvA3qyRmMd228uWqiCcQcvCVcaeihoS9JQY2URd1Q1aVnSiHoojHKzkGLVYxjpMy3Ar2zs3CMjVbjrLM",
  "key6": "5K7cZ9bG6AgwMSbQ6qJTqAVwo8u17Quyr2aSSMLznkfvkWGNgHiKyguiBGaWQvaVGyxdJhLxqXnp4tE9jp6cJUQa",
  "key7": "v14d6AgxFD3kxJnYEEaVqCWQVS2JE5YFKQKtvA93YQgFrLbpevrAqEvtjTEjGRsrTzHJp3oN1NY67eLqwXQHs4w",
  "key8": "fkVYQYnb5psxLH7F5fFmSLEcy1izuh397YnpmSXXzHdhLyEv4CA5jtmR4BxsTAdej9YnLSNnwrK5hxCkaSX8dVR",
  "key9": "5dXhCLY84hnFmCW2vs2h2WRPm8WpFNixuqVaeNaLh4AKmQbo4qskkYZ9LgvDkSJu8BmXUJsYD7KKohW5XzefwYSJ",
  "key10": "5zd2pLbRbsXBEEpmFHzmkVtkJM5NKdSDnzgdeU5ZL42Y2foLKei39VdBN8KdUYTpoHe9QX4GSzKH3fZbmTjTb19L",
  "key11": "5W5tCW7h8JbweuoCCVQYGNfennrCeZGDAq4FrkcP5sqpbJioo1FgohbayC22h9cGekcnZvYyh1LhxXRLuJo3NBDc",
  "key12": "356qLf5PayiLbbmb6BsmQsRT8AtDQqzvFZdoTvUNmLJdWZzLT7PyVjUwiR9owkM78eJw2UZwnarz65V2PD2FNn6Z",
  "key13": "3VPhZMM9fQKBFccTYv7T38JvTRCTDfuMUBkR7KuFF6AhPbDbKbzms7izHCKAxA3JYR4EGgqBm7KMkvN1qqSFYnh7",
  "key14": "4kL3NusRe2oTM3g5E7RHccuWNLYGbDLpb7HutJkNRD9xRbKKEDzCFwNXriKjeJ3G77bTFmJJf74ceMpFA3Vo9igF",
  "key15": "2rPgErFpap9gR5QA73f5f5QLFGm1EdnAcccTX1PM3yAV4gHp7yyfUr9rF7Vo1SfWmBQsuz4GFSRdDNb2WptoiwH8",
  "key16": "5SwCwMz4fGaUtA52F6oqoPHuzi59EwPDqmEvHc6hHdrz84Hi59HrjVe9hKNm9v3w2E6azEHhi3GyRtAznbUCChXa",
  "key17": "cQA7pMeRwwUwAwjqG9d6XfCmwR76rA8V8Z6ansjgQnnKDD5MUii7QExAFR1XUT6rhnsAL36ytfBx84LZi8mgkWc",
  "key18": "988pj8NwwqHy3b1Kjjnqz2fuW9cG2PT48MEBgzavMiBNCRDMzZkKosywMP7EYt36SzKjgtnZbTSiVMviMVGsVMc",
  "key19": "57qr1n35ngz1qwTnukHUiD18qDwq7WiGKgn7YfEVzgWQx65zw38F41pAQogbqvJFVD6HYWhcZMa1FRHNJECbSLHD",
  "key20": "41uD9P4bo8qMPajQbz6MGc7HQyQ7fmWG9MqYBxAaqa6SuNMCJV7TLThUGf6CbatuA6XE4exTZYHeQETisydng6GN",
  "key21": "5EuiZ9ww6f2pZW7hWux5c4EtLKUCH1N3UnXRi4QjTwGpFWdy8b2LMpWVeNK8i6qga8RuupzrCzfQEYjX9i8cgftd",
  "key22": "M8SU1ZxTHkdbjKhZQLEJcRXbKXAmFesVGPBJtiL2C5iq7ad9EJhk8aDKRe16eWQBXaHtrSGAbAyGQZ4gzD5PsGZ",
  "key23": "5f7BNUoL4R8uskQ4hdYZt5uFRAMpUuiE7BhCWQHnutgEjRM9CsetoqHmu6STV7k4fnhirA2n6cMc2Tx1Wwx9bY1S",
  "key24": "cQV2PBZvEjSQ5XvJyThEKDzUGYbkoGB89ky1acBUhX1D8Ay1CQC67XAxAmq9j9rbNbwnigDTJb9j1oykLbnCuqp",
  "key25": "cAoJVaCbAXaK1rJoWzP8YWtF6JQYqXfxkaeymErqU78QCRwZYRrXVNf4y4F4jJq5PoT2zPA6jD47u5QwbkqLWUK",
  "key26": "5Gte77D6pLSAxqLvB5P44PG4EocbREXLv1jedTkztoak2GSxoQH6C5yGp5gKA73HD75bLvt8ZJPqTxH64iHpekjX",
  "key27": "277DWzJEAJkVV1e1ZYT5GFRAt3mw1ax9cM2BdPCiY1U4MoWSykd3bsLCahgZrq8TQxdoFCikJVSN5eWNvFF81eYA",
  "key28": "45K2UpB33qXVim8a1hNL51jsjpC48Q245xeui3WusLBnv7LoKiHZjoYSvTdN1kF2Xb3Cgnv67iBgYGDbTHEoLj28",
  "key29": "xyPgkNPEV2pj2zo8A2t8hLL7YTuQBHhAu4UnMPdJutKqsh968LBbeXfxBQ2G1qRUk6jdysTxMJJQDKMvMPQbccg",
  "key30": "3jFUnDq9frFYApZzBSwqjEX2aaH4RyS7m9EZc9YCyZtGYuTYHFZ14xq2DLkh3S7UPDF7VHHo28ZHSJSeNrX2kByg",
  "key31": "4hNUJs3YYYnnnj3u5hmyj4AHB244QoNjzNP7XwZneu9jUhRHqdRKgZGLUG6vPzYTL3Hp3RUkhWMVDURrUJh989fj",
  "key32": "4u6gWF2Qh7eg9uLbL3t6U7c9mUSutfoejaBg19gbB3TLTkEzTVAUG5ABe1frSRqiwzuQbucjAqpVJy1czbPQZXpe",
  "key33": "5XuX1a7ZXyyKKq3ohY3JXWZTYrmtNV7cyG6kDmjjW7b8JWamFt9HgTCLcvaRVr9Wz32aC4HWoLxarCKX7ikD9DWG",
  "key34": "349FkxsSRuqtjH7T8oWLjknJLKYuUFNNUCH3zsg3xQovnuxND5VF4efGtLRbvGFHFuuBCF4wss61vGNbPdYiv3DT",
  "key35": "3DyKarkwJ1mQ6u9y53YUi94xA4E5wbbuw9wZi4x5wBHsWDHCUKkWacJ1JHKWBHA6UzP2mchxboH9qfuCgzz7esPh",
  "key36": "3ot5aSaX9pGpE6VyjoHmcTYMRSvjib3Cre6CBX7bAs2uGD3PrALcLnQ73QQ473jEvgUN1pdcGeiXoYrajS3Ldigk",
  "key37": "3W9ygeH9Gckbpb1Ny615bJA6pvjrRbYAomYAvc18cACaga1zbQZ9HAuBTdVNSg4uaZotF8C1EzVqPx6fbYf27Ywy",
  "key38": "33fFerb3Rz3mvsmNRqdEyAgGqNjHsnW8FjBGGnXi6AySXuUo7woGcM6qncFwc8T3uY1JouhajJcn88LoFQt6F9Ea",
  "key39": "23Tg3eQrv92LAwYNn4P8mhVi7PRSTWYWMZSGo8NK2fqK5TubNGpaYEuBCHqVJPNc9dwVVG7cvrJD6i9ZGquFK2NU",
  "key40": "2BpHxxGrjqztk8319iryf1xkXkAxVGpj86c5sUvS7sEmC1bG5LWaScjdyJvpDgChmRXYiZn32vrZ4izQUJm93gy4",
  "key41": "4ZqPCNxum4igLGTaondwtX2eum9rNbuac5HKeF2nhDKmfZtaRkESABV8rJLoHAq3jPQZM37WtTqcuPDUSkcPe7bV",
  "key42": "2hPmohhoj6hvxxHgMmdKCLPk5yoxMv88dMe6QA7fCqQXve52LWB3UA4nQqEAhz3V1Mg3eadtypz1xf7Wh1Q1Nv7C"
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
