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
    "ktwRZm94np7UEufQKrRyjXdWBeADkCazN8zrjeYCdUkitdAEjxxFVCJ5r96Qwz5KVKR8Q8hy7zQw8dtgyPF7Vbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gjk3HA7MBMYWb4doDxG3ZyDAtXWmPR2cDRmULZbzcYc51grWUHqfB5W11FwtcdXjm2S8vmHJYHiwWd2uQa4wNUv",
  "key1": "2tmKsWdSRqE9cz7qq2wJqayn8H1AZA2VXTRiFMwRj6HdSpwmdKd3MhiD4REvaYwnfRhdE8yxRZBA2utdaLXXXF5h",
  "key2": "5E1xuYnmXZ8qey1mUpNc49wr3jtMKMKYC5dWw9fVQmp6SxVzXnGhSwf2wvDtZPiimbkaYAhzKM6pCgtxWXxded8y",
  "key3": "3geX1bgZDR3xuqRTJNrpQwBEBPxTWcdXrDBw3B46rFGz2ferPcxyZF7HEF8nrzHgbe8TkNYwJCu9qF8WCvtaems3",
  "key4": "5Uj113H93hFg2VGXSKCQxZygXuyxAPMFo8ZeoJGj1DAxRkXg4rCaamt9DDYuY72nuFZze3xy2spdgn3U9BVcexMu",
  "key5": "3BmrfeRt3PDrtjHgzBZWzXqV8NTnUh7GoyDs9R5Awh5oVyPU3EMyVdC1xgaNg7qNC7vXUKNCkp7a1VffAGPnZiEY",
  "key6": "2g9BZ6zvxbB6AtH4ACxFkAbE5zKn1buhKNJjVXxGm9DS4Gc6fE8483if9EFjaAGAYTqKCm9Vmh4PYd4KbiTAH6sJ",
  "key7": "3a5B76SMujvo7EmsMU6ZehkhiJ6A2299R15hMEN2fn1AQMySvB89Pv6KdNKnooJALzjo2GchPinGUUBpGHZPXF5i",
  "key8": "391kGNJPHdWF1kFRrcY4CEP3oFB1qgrpeZipqYSjZMyYSvBE779v7XbQxfCnUDxhLYVQugedxMff6wKCbYGBPxPM",
  "key9": "2mFwJhJJ4tRec3RGQq3tiDTYs13bpUxYK4fyoUaGddt8Ci69yuP3kByU8EucMCTfp4RCuUdBkr53NxuagNJ3RnS9",
  "key10": "3adMANEJkJ85TkPdkkZ2YoKoR1Y9nMZHHkDHGbPTkt1N9pDn99Tk3ZsfezdTSFa6Qj75Jc2jjxLGW9VyCMFo37jo",
  "key11": "61gEL4cZkepef99a67uNSqZNjsLPhA6Vvf7at4Jve6GRT4ZNAs37FAw5hxvDHxzLfLndaBNXa99R7sajBUWfkxUG",
  "key12": "4C96kMZLHpkzVn5Hyq5dEuFHnChASUToeFyeRvorVThSjmt7gW6aB7ZCHv84YawYymdhscQcvwqSEBwXhqxz1s5s",
  "key13": "EUjjLU28GpZdVkhnPphH84G89xixpL1A858pWu8rtMHuEwLkHwTBsuhtbcgu9q56QrXNTiCmH41YccjFF3eB8a3",
  "key14": "2uBdbcygfjER8NY2ffWRZnjDBnkebHTA6cYKEXdATj5vfoCMTdCotyn1y79xvxn2n2JRkRAM6mjQtJa78yitWUqa",
  "key15": "48QQ4BbUeK5aPvzUBm9LFshyBFB1ChZzJd3fP4dZBCfaGTJ1kL4mNmNrufegdF8eG8SutRxQSj4Sgm19e37a2frN",
  "key16": "5dRLfSp2Hq78U3u7xQqj9KP9j4pdaLSoS5akyq4HzwSmxUJ2F7S9emnMyWqiTJi2idYTczDJ4CQMjnJJnFDGgegJ",
  "key17": "3B5it7fA1neXMTKh31RUzPr6z61TSY3skKgi5utsk3E2UvsReMpcCUhsSQ2Mq4y7FHuaSmhprKKzQQc5EjanBntW",
  "key18": "64t8k29buQu8AsWiHFPe4kW5wBFnEZn5NwG6Cafi1au9Xk2keQGvnumJXmsedQRgm9kQ6tgbgqRqqejcp9dKAVdd",
  "key19": "61y9YNKFxtH2qXtaGjunWW6YH9gHn852LQjS6T2c5oBcnppZnU8gPvS31SEe63Rtq5VeCZ2mZgaZJxKR4DgYATxu",
  "key20": "4LpjtRRGspSsCS6L8v5yom7Q5cpSF6D1aa1NFoUkwWqtQwLizmW1X4esPPfo79nVWaNW4ZHYQ4y7DrX2os9gB8HL",
  "key21": "2okNzXKec885Qov91b2gbCuZm6MMEW5AkCRjszXsxi4Q3te5sHrj3xG79rdaSB6T8chVHtzdfsg9LWSefmnxV5UQ",
  "key22": "5peGx5pM7jy3WHy87H8aLqhceWwBdtxquNhQ3MpZTFzyGodQ5pkqqwd6kbgmgFjkMNw16uhTVkBQDgJWAofQjL6S",
  "key23": "53SxUtgKQCYkARtzXhkPFFdEZ6WStpgbHaGM3Ed2yz5Lvi2mfFQWDTevUbHdfHeZKFgZyvcro3uoLoMFbTL36mV8",
  "key24": "34eURu6Xag4ZwimSFs5u4PfidRZhq4QNLFV7QPzz11M6fjVMEVuyFwnohafLjmdiiHPiHzGXWCEAGhC7up4ikawW",
  "key25": "5az5WVKSxYJvcrVaiVWWw9fxb8Y8yDeAQ7YkFJZCNqNa7h2yZmGEf4msMPfYykCbjzCWtPSZGemDCzhKKdRnovE9"
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
