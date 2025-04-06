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
    "5EZoqzz9WAULSGeNi4wpr4GgFFXvy9ce3sVFYPyD5bYrrpFJgUygFPNqgTd2PoYzHs7vvKFbTCmRzsAh6qanCxVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d49uobBSfQUCSjUTfyhC9QqdEUPgZEgksKeXRNdyi2p7bGS1dLPVusD1bqpmocsWAwkzc5mfTXtSaqqUSumXDUi",
  "key1": "2UPy2PhUYZFCzTVNpNV6u1oSBt3Ev1s28GgFTbxGTFQ4U7Nt9AnGCaZqVgbdknKaZqnPdMpe9qB9QJ7bShk6hQUe",
  "key2": "uANacwzmMWEVypcPrLa1LKns6cNMCsxEuh4DxhVTEddrqZyMDEnAWPigJrHgPeRfcySZYCiPGej4eqtYM3EVbri",
  "key3": "3UNq3jUDhkCzqadSHkCTccpgqoy18B6fJRA1cd2xthrsPunHQfxRNncuiA7kPkc1v8SNVk5DKubPWgWFSzXLzQb9",
  "key4": "JZjaUr1ErK3patRNGBbAUTC3F3hrxfyqDaNxTHDijYgkreanFZGKfdAd5hcMQkS8XGcpZ766tv6zAUUqjQbb7UQ",
  "key5": "5G2AwbNZCXaQAEe7bdWAcSzYUoxAvKUXkAzxEd4dPgnZtvWHbjx5KkHZJEHtCB5wYfMYyhUyy4NZDPgFC8U3RR2S",
  "key6": "5z8nRWCU8vMeUJkC6pzBW9Vi2bNwfKc7nH6Cgv9ycSbxxeV6u649zV4ivtGTELLRFEzH37eyReUhuPUH7VbrU8rp",
  "key7": "4hNBx49XpXHDh2DbGrCxVq44W2agdNEbk6kgCxWYKKSCNm2DqxpqkcMsRUCo92yXyP8hf4naU2JooqrPNY6yFndd",
  "key8": "4EHMojxjuW58oi9diFuBYgQo8wNGzPRbYJ1twCjhFvv3d1mmxJUNvZoJ9PaUMNZfU8qxRhq3mLGx82mtfxXdZQH4",
  "key9": "3kDNKsHDs2A6geo5NUh3pkGs1Z19qS9NEmU9oh2q9DC3E8TD6zMrpQQwZQvGarMFzvd6Ytpvc36bGeEfkk394Cho",
  "key10": "kRDPvwVMK6TvfUViRtxACo2UgMaTzZFg9UyPeAcFncdsK9kLcQ7Qow9YatvkT8bZDjcBJmLfBzYUvYE7X49LXfb",
  "key11": "5Ww5G63W8cAQw5Xf9sHNmi62rcTTiDaUkAngoyF5pRNMPzxgzLpZR3iUfCToG47LTiUM7p7v3XJcTx8X8fj2mReK",
  "key12": "HMbnQZRrBvneZKU1cdm1WWieAGaEsYUvzrz3J7pN5cC3Vci23jjZrDNQhL4CKzhT7W8pvzcTeCfVH53Yb9gSqWo",
  "key13": "4rXhYECJtrZ3skRmXibfdiwJq3ejY171vxDwCERXJUdee7FaVKmWFtj3Niq8vN4LfMZenDJGuXqQjyEBdFcREdfC",
  "key14": "5eoHqtfUi1trNFDDpQKYc1Ji6pRyD1ySUNtzVbkBwck3b6MV7jYgLSNGxGWyhLwwPo17KrZ1SEKVCacTN5ETeYXB",
  "key15": "3B6FbzjFH1RFXVxUrfqxwKLFw1KEHmRKLbKZsMMCX924iYp3xnjRyjch6kYGHoR19QYqsQasGajTJydq52bcTKF6",
  "key16": "4j4QorkKdDTowJGAQ1pUGaX384gXaEBAHP29duxrupu36KMyuqZWRGxfTDLZEtTS2Jd45fK272BnvUcTm1V7LeZg",
  "key17": "4DUxpXUQVGJhS3Ko2nWyd3gJ6ACRG9RF9L4WunREXNN58RP1oAQ8GgDibXym18UgPRNeSpickeqSdkGjDCZmR55k",
  "key18": "3whYEQ7rLah8qaBDd8hZHCynMPry8cSxLiYm3CncgF9DDDhc2xNBFKK4Q1jGbdAur3zJSaxkaNmZzxbcfdA9vKsF",
  "key19": "4TYCoLkeKxgLTftDDKyLSdn2o7zDQPe71u3jM4Coao5Q7ZKnvBL7u3vor95xHsd8CYMZPBRArNqbnzZakXxcakMo",
  "key20": "nKZxPh4SC1BFsytGH4D1sPY6zURFjNszWtmjPQXFWWn4TBGoJPQCEccQ6aeoPxNGR7iho9kzSckXCMf6SVpxSrm",
  "key21": "3NvSFCTmcXFdNB5VfDNPfn4gWEkRhoWbJFGgCrXiJzvaG4L6bcsCHfzzg1CQgzgWdSBEhBxHaKMZGt6ARA7fZQUu",
  "key22": "2pw637hkjygdSNwB1789aooQNwaCdfTzK6r3pRKcLbhjBFGUBww9xC6CaKjv5GaiN4SAyhNYALuWDuUJ7aHLpsV5",
  "key23": "5C3JA9xXu7YZHLb4rADGaig6PK6WdnNrjnhGk9TCt2A8mvH5USYTusbH7dKRH2mjiAxDtwZdQQTSwXyfSyHQALqc",
  "key24": "2nJ9XeBgCGm58NngUe3gpjizNawsNp4hM1P3wum6pJxYwALee7yggF17dK5ToFSJrSyMnoPQx4wSDERmFVUySmfi",
  "key25": "3CeskByb9UBxwqkNEGbxLBeryTf3Jk3kmWRBaABTHrWqqcXcpuA5nPcsqKhfhXaDZcMt7a1fUTSEkb6FgxAefLRe",
  "key26": "wAqWK9cDXkzK7Pz4f4M9MHLmKeuxHWaV2Dy6S4imSJ2NMBDyDQRvK11saAVypoL8HawCaqZeaMHvNLcHpoDYHvF",
  "key27": "2SSktqfNMRziqJdgZKCjbY2Jh1FG4hsYbcG9g59Bbszz8ciJ7PESJFGBRkNpjyJzbRCkGW1WUGHeTwyrUaAHjw2S",
  "key28": "59Vs711NZ5KXnGdqJuDs8EsysfxDMG4QwLNxkjDY7NjoJWSTVTrzoD3pVaySFgSH5t6f1GbUVqhKisL4v3pVwJpZ",
  "key29": "2yXnTtqAzQxABY4q9VrVttxeyFeVudmQZUxSoEkQiLoNa3dm5CqSMHMqhYJwNtzrbs6GDYNjPDwMRBxnGMiVx4gk",
  "key30": "27tCxbTkW5UqLZ3n9vdTX4r8PMSDTvAR3iy3UhpZBzo5C7JNdztvx6v4nQTjRuZTsSu4KtoAwRQZoxeBQkVN5pbG",
  "key31": "5eHJ9wKuA2YpmmAjZLw4jdQKUZx3jTa7nLTFLLogbmAbqMDUdUTNLKW5JyH49ehx94Ep7CLYFAwJN2dJqJoRqxW1",
  "key32": "38Q4SVoExoHhvWr1qCtsSsWmAnxzApExCZqFgiasR8vi8FXumtDQJV96iz6R55rTQ3xMwHC5hGMtLK6AvNwn4R96",
  "key33": "9ANKUia7vwhXv9xed2tHRXPDztYkdqcd2rF5ZWZNDzb1WaW173XLHV1U9PWbUYBCf71izctibrBymZzbZDHTrHP",
  "key34": "JgKAwNiGoQJQ7mJHCJJagoQGQ3Mz6E6xnvajYd1hnrJ5FWBhr3Tw2VssijLVkoJzkaJLJiry6R8oUvYXuXS3d9T",
  "key35": "31Yc8fpUkGaq7rHP1K9zqq8r64pd7ihtfqVTRNbxPdrdrG4sYfaLPNJyojr3YdveySmopzvhBJfyRpghbP1ovXdx",
  "key36": "2g6dMUM9ePFLobUNtWNAjNDQ96Lrq7FS579YkTzqsqUJVrm7Je5CDLKKTGsrKGV3T8Wddy5i64Jjsh82r1Y1wtKL",
  "key37": "zFsScTTtFM7HxvrVCtjHCCWAvBh7SYWWbzvJQepangKd12zCL7ebYoMtvZbwWWLPBffKnSxVwXQRXtXTQLtoSei",
  "key38": "24mLkZPoePQdeumvDbAimYACQFxdXP2UntAcqM2JETGXT5y6CS2dEJvizsaCGMTSap2BnxjJsHsnY9Bw1ZodZruY",
  "key39": "1a3T6gqRGvS5goUBPoFhNx9Rw8r3qspAxd1WxCp4aj487ngesqbqh1dsPoFV2D6wVYkJagHx6ythNqDYifBKvKe",
  "key40": "43iqvGczmzKVwu5by38jNvwEoQx7436RAhPpYr71vomXRGAikFchpcFT8Bv3vHYudPTbVvyXQiBDdyHWYFF6L5ir",
  "key41": "3CJnnaX38ux3JMzZtR7ZqKokq1nz9jVnUrJ6UCMkB3WPzy4W5QBLsW5daJRNyhzqxqrABDy3bP2z7R8fzPyLFcbZ",
  "key42": "5iqZv8eqd9EXZgVYUbdwf4D8GkJQq4UhdgsMhw64HFT9WBNLwFzzpTDd3h2NUQXzmf9yaBjQKdcdCsYKGN645dkB",
  "key43": "s924y6FaXtKHDuBHcGJECvSrNwU1jAMDnJmiMPoV8T5ivbWUDux4WcD1SQzE4J5q55WTSK3JerrBb58VSJCHns9",
  "key44": "2ftKZs6Hz3ETwyqr47C3nNpXCgYWdXMncvmXSok4tFhgtcLQWihyZCXWPd49Td81F34g3eG863Qp3Bvwsmg1kA1g"
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
