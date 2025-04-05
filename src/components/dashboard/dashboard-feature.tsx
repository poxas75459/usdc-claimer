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
    "4sYa2KZdkFkp9z4TNN5znm1ce954DtWpVJU5eHoTDUg3TCsRtoFf436HwgBRzg4eNEaJrxqAtpPnGJoWtJi4vBMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EA28dbZKuRyf1Q24zVxAi1ttaHM1krk7SW4jqYgSZneZ2Lqh9UWZN7TxAFP2w2cqFQFeqhVP2gc2oth43oSDLFX",
  "key1": "5ikx26TBrmSiF5Yj7jK6Sqagi2cCzftVvcpFH3AeT7t1XFeQAojscufR9axEUrTH6CD3ABmRYPCjLcfwnFdcZf2p",
  "key2": "3BBXzR4Z8baSLxBZKZzY8Q5ps5WMbMVhXqMR23trqUuS9Y2FaqsFqgSNtMSzYfxtUin81HUm5yrxdX6TokdgN3vu",
  "key3": "poYjsJwLLzEYVtiVYjqfY5uAsbmfGxtm7VV5JoHUTiMywetEwTqN3RPbuErbWrF1sJpfQXyv11mBk8Se47s1EoU",
  "key4": "2ZRAJGKFhorgLjjEYU823pW1jGQ7xZdJa6rQnPgGpbnZctj1TDHW2jbh9nK8TA1H4NbKby6VHtP6jEvGHdfCyQha",
  "key5": "vDDvyqXVwrBQiKtgZuDFVYKj6zvfxmAnR6fws15hpAxnKziq6medgL6rR1MF6xVx7JaF9fXKQeo6kT2p631mc3h",
  "key6": "4Av1B4LiuQG9hYMrLWMAsMzezJeDNYsoiVSzbyPS1G3jsgTE6dxD2vXM2YXQJA23JkLs4qA7z2RqzXAxpCHuSfr6",
  "key7": "5VFwuuLUnyktAHi7aebxptpqcbnh84dZ3i5y9mVwXz9DA3BBxi2qLJhzxXLnrzpDLAGNe8m1KyRQkn3TgUZDUnhb",
  "key8": "4WjxhPKvqChM9bneEJ8dFLB6yQXQyMK9N2uahaYDT2Zji7ErxDVQwfwTL6LLTpGvdEfuipYekfeBUFAjyUE57v2v",
  "key9": "44iRyyVpoaiokMuw7rxb5RgyLV3drLfkXWoXqn71Y5DNsujdZm8t1iyyfdYs68meMyjS3m3JWsZuyeZ4upfKxANb",
  "key10": "4BgHbTNxJvhyTMioCfUc5qMAzXNpH3cQ7TpgcwmXrW4P1mv1zTP8fn2T2v8hFhvgYxGcGvUnnaYid9LG7bu3oFBW",
  "key11": "2b4BjSW4w1SobCwS6zHKqecfMbnhmsZH62FWKDQGcU33ivyMye5VyVCpUJQeyN5uMyp3phHjxdhydDMeqCatmp2i",
  "key12": "59V6psWRMSRF4Uy4JBtKAvbKaYNqsLPNYCJ63i4R39FXExiVazjVwJifE55BTQQfprwQNZ8aApKZ2YtxZk6to7hc",
  "key13": "64dVE4Z2FyeYbCj2Pdc2eSNfmfzNX9XWEsv4GiU83edNKi5Y4oREbethuseazPk8BgMmfX9UghKX2yjhK47RiMUi",
  "key14": "3s4mRksCnJW9Q4eLBWnn5y1ZRmuiQQMLcmPaFX8zMHjmM13MCsWsp9wTSBFYFiMmYRBxZDFRSdvuHaVVg1hFspD8",
  "key15": "5r8uBa2kG7Wh4jZ8idi1jZJb4a7rntN7cayAw55J1nJFAEzn7zf2QYdZpyX2rGKKqX2eiVx1vgb4FhbgkdTQTTdn",
  "key16": "46EghXECrC7pzMHK5PUTWr3z7vVA9Eot5GKKHJz43aqsRJj6GBj4vvVuVhzX127YNsS3gByhKyRYZPFbpm5UTcgs",
  "key17": "5MLop5gYSNQBVkefZa88e15rkdbWasQ8beT24XMiQoffszqVvZE2m6EWkzTepNjC6GZVxnXpYk5R8sRcZfv3CTD8",
  "key18": "jevapvMbrtNmJuP5uEJrnBpUzzLhGKkTsJN7SHNRR7xLTodp3xpeHeieHCrV7Skncr9szonAWJazFk4nKWmsSNy",
  "key19": "5rNm3SXC3ug4Uw1E52mYcNByg1bseP9XUndjJwLsfDVCwJppC3vtndtG8Pj67JpqkzRXbFJLqXRMvPmGBoZnUnSa",
  "key20": "3qrPLL4HBwExRj7fx2S7mzzgaRppkPthzY4wqHFcWw26C44zihN49k9pWjxfmxTT8Ms1pkh4vffMhR2UknMLSTAF",
  "key21": "2kxEcJXbWZKuuvERf2PFoDu6KDvajJA9nLFB2eeJqDjPdpjv8TkqhTseraJaD4BB9HN1MYpPjPzC9vY6EBHMbmhG",
  "key22": "5iizhMNyeo9zNvAvrEeLqqSFgMiTcs646kf7YoSjVfgNChXRnghb28qypatMLKFhdjTEmodf3RzCB6HNUe1x1F3X",
  "key23": "3bvrWsqUHwoJbMW3cnng44nwacpZjX3SRw296qs7DaKMZPBzs7AWeBpfiShZcwMRrPjbwNhS9m8Mxgay7X5kgcL4",
  "key24": "3EfKtbUabtUDWU4xZxMXTqVfGdebDZad2HjAsFq2g182CSy7eMxC4n2tCeCXXHTebyM19v7kGJEwmDEMr7uW2xao"
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
