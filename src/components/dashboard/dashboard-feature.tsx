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
    "cHBhn8HtqayjP6Mb5ej7zNB43bd7PPE5w8DbjTUaSRmfoLQ9o9ZmLFiZahyMeML7cHhnhfSYiiAiuvo8xndHyyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kx1h7nPjEGXw39VM1k9YRQ5gG2cJPDvfTmFN5PHoAaRaEb2kHu1skppsj2SNQGdUBfeATijicKgsxvXozbMuJkG",
  "key1": "5UqZW9ZqQY5yH1QAa4rh3EDEQtyPzHm1cxRcxtLXw26fK2gKcmW1rvfM5vL6KouCyX2t2N8j5R4hGZVbBfjT5SP5",
  "key2": "5DLmBGx3ZX5pAeSYwGsvRk1oWtXfYzcxo8ZsBV4BxPDqToSXjwEqXfeJUbRa73cosYvnrsA21X6ANwG245teaKtR",
  "key3": "5ggchQCiVGSJfADtSv3deF9J8aq9iUCreHt46YVXmL57XjZT2SdjNF6PxqA9zD2cas82SpEvnwqfBj3CCXQoozqB",
  "key4": "38Zvt7NkmP4xnPAee4YjYeQ7Lq4ZP8thMeW3MzFSWJePEmNA5MfWj78Qk595oS6MgsXKFtMEVfFTfR8rzGEwevwB",
  "key5": "2bX8x5nhZ6MByA3vrhxYBC2auypUv1bNzBtZ4Sz2MZkuSTcsHSqzxhho3uohkW1Mbt3MPLrP6vGqbyAqCwBtWWmj",
  "key6": "59YHeFPThwdf19NaqNRmFxZfC61EWQZhTifeZtt1LVM33LrmV9NqYQgQjWd2DJEeB5UopamXn2TRQ7o1e5nkWuER",
  "key7": "2rKDPox5K5isQhDSXuiiUR8JwisWNVnPGnhQuAEx2jH8v6BzWdoUhiMGrCigXMi8d5P8m3zppKvqa1CABJ94B1zS",
  "key8": "4Wsn7c5B84WbD8NCkjBRBJwWyUA3pBehfd4H54zAyibn5iYBMftwPrdKm5dgXZVpMmjn9TzAvLUARKMSDsCXQJN6",
  "key9": "274csJqH2KJj9Xvf77uCU8mDGmbpwgyccgkNJDHTbxAuuWB7NNJrCmULzCRXbMazEczgNM9fWwaYpKT71tjGrqbQ",
  "key10": "2JaRvxgohu5CVoi17h9XYTSQ3rmU9RN1idqH6NKwi72LrqAyhYVsYVvC9XPVWT6zevsTBNeZr4jKeDT3UQaLoZNW",
  "key11": "2E4ySCPAWDZx2ru21MN2aTwytSfqwiaYNJdFRwa4pjVhwKSLMf5mq8NBtNEK2oDujpe6M1FcnhQ5vEaieQomFMyL",
  "key12": "3eLFaBM3ewKP3e6Dm5cKWVxjQXQwESt1ar17zfwCHFymbZrJT7LT1fCnKka1HUbsAVKszh4RnKngqQykdioFq2Wv",
  "key13": "4Q4wrqQJD6HksdwXkxxGFPET6a538DAeNF5QfExAuUr63piXAZunnrKZ1tVD3V9hB578XJ11uq1ZXbs5vcvitaVE",
  "key14": "2x69vTxm9uGUnJzTTGxJrRpjkgpmb86iKtKLvXghjR9xSiA6u8ANnUH4i8TiTcjBV9UHexd3tCnLEohjUxoNetoY",
  "key15": "5c1984KidHbrno4B21WKE6VycKg2q2S3VUqwAs9ubMBhqXfMM63q3AMcBoatWEnyZwija398tb7snBo3bYEK4TvH",
  "key16": "fBKoEGDizyGbZjxxL7jPM5LQbFbwrJ4GnRpgP7VUMGf89f8DKNLae24kv1q3c2LcDB4HgxQz2VyCzhgzcrhzDPz",
  "key17": "2a7MWTcr4LDLhz7QdqTYEovH16KKvshsvLs3TTNH4mpokaXU7G1NGSfwZNv2u97GXNvoWp8EDXVtY9kug1XCoykC",
  "key18": "4kcanYEptTZ4b5YK3VBeLpq5QHQ3SKLDhh1FPHttBoMqYhn4VzPXP3Whu5Qp6Y4ucVWvc1HVAeeoicj51Tn3fiKr",
  "key19": "Jcp3eDcxCWkXcVARPPNThEq12P9g1mzBaLoHGBzuQKmCrxkRE87g8wGtgtJmeoNEodiAyEfpd7269LK6T8k9tkx",
  "key20": "2kJayFhH1BQUS1bCFy45oYcLDdthLLvyvc9KXKQ1hBmLMEj78jYCs2cbxhYrzd7trsU8Wtzba8uJjLvf7o2kPM6Y",
  "key21": "2Xnrz7ZwtBkBX6M4EFxZSp6yYhPH9ALcVXnRxMu8NyFdHrW3Tyv5kyiYF97yyRuevMjvPErhX6dmb8eYApEFLsw2",
  "key22": "2yW6iQ9p1J1coNzWHBYX1vD1D42Gp7rznLjh8aDZ4iAmx6whHV8gz6moYKFPyajCyWhVw7HE8m67zTY6koYnwKaV",
  "key23": "5Co6VxzWD7e3zsqhYarCNqoCvHkhsfyMqD2yJcD4L42TvRzraw6uikP2dPahFkRBTfwyTVztaxVR7UQvZZUbk9Ep",
  "key24": "3yXiW2dwdsTdfaGQPxibx3vP84B18h9zrxZFPGmQNNUQUwNqrhvYAsSX8di5my5PuEv3tyyq8EGWQov7D2XHkGYr",
  "key25": "4MqdhLzfXVjjL5bN3GFzwtmMy1SBtPd8FfEDW4F56rPEnZcHy1Scrm5i83JG5LYvA5W8i4R2iP1Rz4ghsaH6e678",
  "key26": "4NSjmvneGJYwUYue3Cyx9ZFdvFqbEhi27RCPSN8m3B9kkYsy6WgaQwJDj1FP4taRkoryonVfPgvvzM5Usiiz4KVk",
  "key27": "4LSijet96RcDkP8aHgAJkG3PUnDvmmnQtfNhLEsosnQnRAQjLyKzPwM1b6jpnagAFYpqSjuARGHpg17YW2nwtZhH",
  "key28": "3wXfAR17jwhGfYeWhtXbi1A8jfNmDZGBVqFJp4x2S2CKx2Pt6voi7JH2L1RWz9pzgvSb6J4t8wJAXqc8B7EcVa7v",
  "key29": "qawr5DUVUQPYQ4hLfy7K7cPVPLL6iSbCQm7YfgxWKYGuux6cKxWXHNgwsb4sHFJH3Pc5ra16FRPeCnXLTtkLDJh",
  "key30": "3x2e49KEFQQEteY8FTzeXw2LiLQceWEo5MynPemaM7QKMAjrJvfXTSEs4xTbk7GePZs9WcC3PbEBiv5FPe2mmzmW",
  "key31": "3ySE1oAxgFbmXgqbMnWfGBoRvANkaM1D8FcTstp1R8SAN4wGVYEfDBt3Y25nw91etTB9mQfE5TA6pnC1oom72ApE",
  "key32": "4V62qPmWFz5fKMuYFAUB7T5mZ2qRBUwsx12sMpUqHQozoBjdGx3XNKBoW5GudDvEY8Qv8rtBuojdDkZwE5pSzpFE",
  "key33": "35NhpdUuUJ4T6qJ2C4BiPuzEdAE6g7DAnzVTuv3ouinSGunzzCYL8h556HC7QBk2rQHLL1BQwVzbMkqvKV59bs1g",
  "key34": "616AhCLRuJGv4ttmKfXVfJUwiL2JyqXNmed8AToKLDN3petsF5VbGuLirtB8KAK878zN5ri4yhxeUfqzufcHx5uN",
  "key35": "5rqsCMUc476WCRSYbYRJZfaSAfJAUtnx5kabhLztFQxH1SCJWoak1E5gt62DZ1UdSWNxjer2EUUnqL6bRijTdGZB"
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
