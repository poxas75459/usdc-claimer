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
    "3jPomafc8zFoWgFmZZBWuy7kTKic8KywXJNxUkgV1hRszFU74z5x9pRou57z4qb4bENrt69u7LxAsPGVuZZgFYWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3DNqdgcokTAYJSiXTfwrUWtQKeWFPmsF1Wuw1zTP6YP8qZqY8bgErh3LK2YqHViNrtEZUQnkuAix5oyERxQ8wT",
  "key1": "5Pt1xf4xu7f93t5ZZRf5tskEbAsEKLnMPybuNVTgZZMUTbJrESb9JxkKm6B2Qvmn43pk9sF7fZjxnjpmwjuuGVwN",
  "key2": "4gh9TMNnfRmwQina13TnhvSLYenMN9NpWU9qcMmgZU1nUDTffRiMWhqtS2vfuLDbkdobXphebqZ5uGsVwbJ8jB41",
  "key3": "mqJn9SYUcnLGAqgn7J1ZLETeQYGXvb4KLBirfLN1jAHoqxyHr4WBi4irw3uC6xNCtxmWahx3iEbqQZUvjBeEbS7",
  "key4": "5dmhKEv2qLhtVF5Ce5c1sxy3QR67aXCv9AhH3Uwrq8P2frMC51vKpoYWH7CLsvvETVDraQA9FcteTP5kgfKXr4DJ",
  "key5": "5dXhRp747VqjaomZZDw3vcYiEY4ywd8Gpa5JgGYqVESJGNKXTnjJrtSqHvAyWb3QNLmtQerXxWjurSTJWnFa8tVp",
  "key6": "JLe4cvC2JehnaEP5eXmTiAtBEzPaJkvnNCXWrdQtbg7b157VyWoDUx6Q5CRwwaYxeyuV9HfN2f4C6raopAv5mSg",
  "key7": "3wZuL8ymKRB2hdpWkmsssNMMWwZjKek5H3kTsQfQdVNNkYmqkW9t8m9bPTZcSw6Un7RhX8qR5C54MZYG9WLUN8aJ",
  "key8": "3kgDYbXo89waVJWNVAyCYCNnSJPoqLW28ZJLtbJ3zghvQiCUvRioF1KETPSRcH4W2fMtuHZz6NpRQSgfqFTSTX6A",
  "key9": "2D7GB6kNJfEszt39HJPZAtUUcFmGdHBGzDWeQLPwwH9XRjZE11qoLZKTP5xmGVXYnCWgRqiuhp3DkWwzmsFK5cGe",
  "key10": "2bCgntnNeJ5FXq1nGWeF2hc2DTzUDB3woqsX9dUcbBCy8cwDKLwqnweeNwfCeAnjkWbZ8Ard3JDUmhvNUq2Smj2q",
  "key11": "3Tr3DpafebhSdLscf1h5vTKXMkw4Duj8oQ1ygagSvkpa2EhvH4VK8ifewcqTx8Z2VqvKpGz9hiDHSuXpHBmRnYAp",
  "key12": "51oEVD1rmP2FbGYA88gWMxnpvxH5sbRyFAqJc5s9gC5oTn4kfq87Zf3r2YkugyRRyo2dgoyb7SNhCMZsLPwfmbsS",
  "key13": "2dRqVszzGpbGJPYyHxrGmJmYBZyE6TpAQWyhQkNecMzaUx5m9ryHLsBuU2NLXzxTrM1By5S7aDPtFy28eTKu5kjs",
  "key14": "38iaPxiwkryBnZ5X6CtUVrpsTkTXz8QJXcHBD3o3GqNgFLV1FKDypKwYAqc3HhZ6AaFxmeN9aYpJTzGfsfCZ7Zfd",
  "key15": "4VBf1QCsKFG2Yn7Qf6ffapYUKzWZyGkq6k2czfrimBYTUiYcin7x8jdjf4x99F6vPpHVrwfUFyVbco2SNBweKmxc",
  "key16": "Xeq4PnXQTpqfnGXmXTssC8E65dWVNVCn7AiWM3kTDKPYfPYwv9aY5k98b65EschPLvQMkeGsQWPYczHqnBmfxA5",
  "key17": "2XPoPFoJQwTy6K5ny1jDZQ9WAGJwNZNvvrcfuKdis9dixHWGT9c9S8xWuZN7th8k6j8T8CjomqFaQ4HZsWS5yBgP",
  "key18": "4nR485WqDPrgy2v41LjLeRu6ZwPS3SjXestaje1qrQRqJ3SpNCHin44kqKTmqBfeWNb1geueChFfNrnbzM2WUKxW",
  "key19": "34p8JWtQFgyTJFD9y8NpVATCG4MBeAtvRFZnHzySoqbXepSGmwURiuMSj8rWfu5aoL3p4dGR9ZEKkzoCh9dMRqef",
  "key20": "4HJMhLyb15DnHgEfUXj1Mgt29SKG7age8xNVm99JJzLDbV26VCF9SXK7YN9YTJbGyZUKQtuuuWoGCtvuRxGP2G5B",
  "key21": "29Ex93msbehJXQF5bDs3XzB91RHyfpaC5UXaySteZyGd2m1LbywgqUXDRj9Kadd6YU9oKfXE18mdaSU1Amhcnxk4",
  "key22": "2ErToSBrsXUJhjAeKGanMj921wQzgVtQKd9YUUNFVXvPtpHizS6j3emjwjR1TTZupNzjHADHYRJBwrr9eigwFqKx",
  "key23": "23bAvUG3no4HxDioRfHUUmryz5UCwS5B3yuVzKrFumBWrUi5DaSuj1uQpJ3xrxY7XoFGS136dwBbbWh9fdbgnUj9",
  "key24": "2ADwEWpHmKFjyKhsEn71zqmiwe5mvczrRCxkLZxkm8wzE8zBGRv2UZM3pB3gfdLpE3UmNE6V52RmXfN5mFTHKFov",
  "key25": "B2N9pNGVoZWSagRXtxfxoa7Qj3iMnszCtEiF4yqBZ6E7ysAzKmxQrN6MEr7yPMHatbBKRY3QHA58q3pUCQooquU",
  "key26": "2Amys5RwgTe5rsaG4m5fokStcgmue3cgxJShnGHYipQydMr4cq74K5HFRgeUvbknN5ajrJUEtvS6PGoN5FZ2SgXG",
  "key27": "4MseMsa9PvC7HKvPwTLmNKwFKTQf8xJ6YeqdoW1uwhK3eC2qtEw74uH4xZXmmyva1NcSknKDaBhH2yuDTWggwf2s",
  "key28": "nSw1zsnCrmjdtcdiLreVGscHEpABo8uH5xMNArb3pmqbpaPGeCAZ9Lb9t3mziSxtY3gVaSeCCNR98fMx3D9q6Nu",
  "key29": "2gKNUDqw5JQLnEjommKYC6tzivu6qjq7U2wH3iChhDRnyYKrg7m4TLmE8edTpTyeuZJNQWnna6Pn7gzeKbdcv8kg",
  "key30": "2XVmv6ZtCh3CBrwNWNHu3uRrxTkDsE4AnpWSmrPn3HzuTnVw43PjurGt7H18n2Xb5ow3f71WXXAMBqeU26YhXYYe",
  "key31": "2JbMj7zPgpG3Xsm3zqSrDh12oEX4rKH96neSsDhTqpZjpU1bG8hmFyi2K5WBMeZM1djWUzfrsbGfsurMAnm948ZE",
  "key32": "3Yoq1zJvVLnySwr6z47cyLnCDEzEoWzvQibX8P8wWBi5ZKSNsxNqKX33FxSYZjjgYSDrvBFR6xPHncr2uN4Uaczt",
  "key33": "3fp7rMGviTpZDynCwN1sTNQJovtiJbZYdapvaDASPu84W1cGMu41ZY6FjQvdu5gW91CdMzjFQj75Nn7c9opUQqoc"
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
