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
    "3kjLVsFEp4Tv8Dbcxx5NH8wXkiJeaxJ7n8W9K39TP2YdV25fEm4zVk4Z3bYHBVFc47iHeEZyZD3aYiYf5hysd9qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D4XPhJzzPnor4TqvoWgRo7uhhZ5xDs76JmHH83z94BFeL7WVTA4U47wxBZ6M37LJZcWxJzPjdMDyRL5eGujUZbF",
  "key1": "5GHHXyZwv5bbqjiwyLdKHSnSVyQ9mBbdD7RQcv8XXEZBC5uT8PjvDVMExN9oumSUBBLrBAZW1hCkBqGtu7ncvM52",
  "key2": "4LwjpxNbwQgxwQJHXG83pj2qurGkUaNr5SULoWGy1pUmQjBXeoVFxekYJ8nxKrp7JRV3Bg5JwadCHgPkakHeKSDQ",
  "key3": "GVycDubf3xVyqXxm8wM8ew7BDCzdQSvhKxKxC7RVHsJLkdFZy6oTt4ei3DiidgyYS1yg77a6aqdREBJEZ9mB7Lo",
  "key4": "3ESa78bERsP3jpseimcSDBAE2MvXUKnG4Bq2wLjwgTUtynHsKYLU7ZHuserjFWvnZGXRbDygbfwmNvrWixSvdGG9",
  "key5": "38QR6MEQpTgG8ypUK85Pn6Y41GNAmmVaqc6DnYCt72YPF28Bd3pSUR2o5NbLT9wsX3LZgSCKDX6rXMhTvNb8H4B1",
  "key6": "5Jb5BgtQ4gMRjeFdUketHUi1sLNTy9df1t793PBdFawpB46Z5kJhhKPtKvzWsMR46q4icpVvtCX8Qb2jV49uiEs3",
  "key7": "62Wn3WQEe1jhtDDT3Q9NcAyEqykaj9hJuC58tycoj8aj3RuZaY53ocNntCwF6wMFsfLYxbFvUrrjqpBsxVNTmXBY",
  "key8": "4quB1zbXCSNxqpaxmFtgod3BDy1MTFZaYunnkdzZXfaGcsDpSysP6yKjsNeSgq4NXQu89HhVNKo1zivmdC2eAjBX",
  "key9": "WXQEzNP85weSxjjdAYhKXYg2qxcnYzS6jd3RMa8GExU6ouKbVgjpHobNWVeSxbko3CS2jfrKVXkKwoVfYTxAsMM",
  "key10": "TLvAJtHGSZRjhNGC9KLzTCdrVuAptfqye711atnqEFzBKKjRoAbg3foLSP82Wg2mSWfRDp369GxDA9H7NCHtfhF",
  "key11": "3doWisf4nrrdhNUeBQMqgGCvbbwPM1oMuXXa98w53HabjindiVvaNqDtpjvKZMPdJC49V8XA7gyTK6AhYTza6CGG",
  "key12": "4Afe9CuMHKkvjR8kPGNvdpDUuG5BdZ4RcU5so5KipivZVEwt1hw7bss12VDFVF3ZKqCAEGCaMkxuD6EoARTVUooQ",
  "key13": "3tksVkQ3bqs7EXhMXzf8z68TAjirp5XeTaaWnSU5YxRnhohsgmGnb9chvEuQoDrZjGfkJXXVKCLibAe5NgvMSFEW",
  "key14": "3NfKpXYxS6dpirQFkiaW38YWt9R5tXABDxJ9YXTinePqGYKpHwYKQQkJfKHuHq986c4yDWbaJiC9KjaGdr7LhhY4",
  "key15": "2BTTifhf7gHkhkhaZu4pj9jKwsEfYcSKhX3S8q9N8UqUF2ENohRgDDQ7e1RiBh8dotcJKNVKy5wELJey9FT9rcyn",
  "key16": "2tNNiVA6CENXg98mitLGgQDFYbbY6PxLQVNryr3uHinc29X9cDr8tkCCNeRS4uuy3ej38kEJQo9yq4j5ZC7x26DM",
  "key17": "gRnNNytDpXVU4iE5xZSdB2a2HNgWN2sDoAS8GCfxhFMC4wcDzX78wXRUKzKN1C7jnFtY83ee98beG4Q1oihWWrM",
  "key18": "22N2SgvBSwMeJ7D4mSBBMN3vnMGvA27zHAf1PafbVaWFFSAnw7mKpZioH6N1hrHPYFaUZwtaZfptJ1puuavfc99A",
  "key19": "3wcaCYfxEaebQnTKsbz7cFqW7STuLHzXAwRAh6cPGYTMduqypS5t3Z6SAcugN3M7H7zSinwziHEmBjMZ7YP7Fq7M",
  "key20": "3pwWCTUyj9amsmeSt8ShLsG41JRkZd2pcKNFWVHSvrAuVgaMn6TF5cVtE9tExiur8opvMnrVhY1XxWNKQQr7U6L1",
  "key21": "4ioAmeAFNov3gFfB3jdPuNa2MFgvNQy7qRZkHf2fk33fjLLpoRBShaqucGtkDRbUNepWCz17WDtkSThmhQ7ksjhX",
  "key22": "2WmpErkryJ5i6HsasuQj22U5ybCUADq85Cr9LpRLBNBf4W6kZoGpRDf1MdyFA9sQX7Q9rKs5D7Xb4AFtpWcaVZkz",
  "key23": "2FGHfFhPqPij27TDQ3szUaVQQe2yTyn9zUvUyP9fyDMAq47V6ZpZGXrrAgtoX2yYAYBVTMF1A48z8y7YF6kaDWB2",
  "key24": "41FPRDvegY1bU4CGC4fV6K76mduh6CW9Tg4EDfXCqKmNj2NXBYcNCc4wjNxAovD2x3Ze2LdXFyhpsJMBLL3JmUvM",
  "key25": "55u83THVCQn7DWwKT8vSJBcbjXVdBqu3FQeF4a4MfV9fXuo8khSCVv97mCB4xjvaRreJu63k1cq3LvRaDmToMdBy",
  "key26": "5Sb2W879caSA4UbAKxz3ku4ym9BAN3MonddfHbYiXCr2tHLKFKP6wFeyPkEqPc5tLBvrRzXU8CC9hKTv1SEUh9jA",
  "key27": "2ckgUfXWiNqfyH26h1wbcNmkAuaMeL38jafjVFptnYbwLUZr8bb92ps5i5KrusY24KYgAVGUiC8w5R7LMhRRsYeN",
  "key28": "5jmunYeogCn1TxvQaxR3yGTqt81yHtFHZbZr7QFAMz1yzJ2RTCwyPLQnqe6AF4ZGcgYzb4DYKbiN2a31ppT4LZac",
  "key29": "KgKXFM7X7HZweQMvfjDEibfuAbjAtYM1TMvfst8pWdb9EHpKdSPG7ToR6ckFRYrtT5xrjr8gBtJuJMUZHqaNyGx",
  "key30": "Vsz214YdqazBh6VqaYy6v6SXWcAXXpqCuHwxxDSH8jLXupZPSJafYf3cEyFnCoPisn68RqxrHaxVSXqE9v3zZrW",
  "key31": "8GvikJSvUWnwmfLmFyR9s1X6UN8dAuwHA5QR5MBRei9GAMLgi5kYEnR31BDwbYG9Lc49d6U2zWraB2MctaKpg8d",
  "key32": "3o5i1yLHkBQmfRd8EbCKiHorpvY7D66VPdD96z6XdZ6dAArScXUN9bURRbVEuoGfi4Gso2eBMSYUB1fdkZg67G28"
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
