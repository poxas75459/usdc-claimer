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
    "2w74wjhJkb1HY5x6e3yS8qLfhoA776Mjnzrkt3Bk9mBy3Jgak3eFPo8X3JUBBQF3sTifg3MGkRyqKaJKvT7uyZEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gbqKph7bqZMYUti9PA6xn6ZqgvXRWtM65LAZFYBjXRQJCGtHQd8RPyKZ3M46knEEfn4p9Bg8fJjxS7hxY7B2vv9",
  "key1": "3zHTUFAeX6birBPXJPmhmdHiiSM26nHMM9Mo5o6ZthwXgqNC6JbGukct9V5qWq5KDVDaTGJaPY4W37fCogKJJSj2",
  "key2": "3x5JNrjhFxNN95AnhD1oVpmxnfegcCYMPijdkVyJmfREh7iLU97dxxEtGbkVuR2Jn9YgschZEMPg46ssp83KQjup",
  "key3": "ks2onr3Yp7zpsixkcnNyKaiZwsAYriCHEb7fk7ceP99xRJd6LQjHZ33DVnPn5Aa4nCnHU6Xi7kLbGeUpF7bpUp5",
  "key4": "CWzSPqSer5RVn9dukxqVpDcj14pC8eyvFC1rjdHoETZrM3ifNK9mX3GQHPNvZJfUidXhLYWYHE51mREMgaaipE2",
  "key5": "2kca9jZfcBD4JiuvjBD45uMaaFRM4LzSjWaBPzhkatSt83FhuocWHQ8HMFqAvceiPtgvbqAcMsMFUapu8iopEAdA",
  "key6": "3qdC3q5gHDRvMCzQ6cNY4JdNYxJsUaDvSz5NwWRFrt9zFDLr8vW86MYRPRJaN14KDYXGGBRSCbSonqRj4tHJuvcA",
  "key7": "4tg7YydaKT8wSkEU5syAmmQ2TR2sz5wJqVMW8Ku1rp9YC3goceSTSmu7pJdgRiFKqR1Hx7vDwPfh1ULJWDYC9tyk",
  "key8": "3AibzmZMMKT5cuxkaJ9xs2NGRD3kQHKhckFuLWzcdKjX2GC4bWxbi757NVzjiQWaxdAth38sronkbFeJoRtQURTZ",
  "key9": "3D8GT7ckPv5vzhq9fCUoVFhbVRku66i1PqaPGL9N7zmo4t4RkQuitEgxeTbwjq34qNFCgmGkXMbEJGJ6Zf6vL1vd",
  "key10": "5qknZSYQ3pGaivKZVhMNqnVhf5dhsQDfVnDBu6sgnGJB2PSvnqGh3jQuEXP2rWCwkt22iGgVioGtXoFrQM8F1ZSe",
  "key11": "36746147zhKnxs8U9mX4vFSMjSP7Q46ZS8t2dvgpPyV4jemiqU2cEvuz2sR6afNSP89R9BMibGvyw3cQd58C5XjP",
  "key12": "4QkAB9ycMT54AFbuWvSc7WmfshUBtuaCqtsAvVKm8UPtQuXixYgMM28VLwkmLj9jyoTvz9iGePVdpYLEi2w2u5r4",
  "key13": "2dpobemkYJHNxsqWsnJZAWY1LupSAKRF7mSvyjkrHHTeiji9uWPXfRrF5gwkasmzpeTpQA1qChhWPs9ehU9bc6s8",
  "key14": "638892rnaZXn8y2FAcKerC3SXTi2aCkYAnj6wGesBMk1teTYRKc3meVtu4WkDzcJuPw7EMA3pJQA7kSGcL6tp3Mg",
  "key15": "qsaZrRusR6UYAsBqm26j8pYGm6dTkNNzmbgti9dozZAtv4j8FhZUX51RdgJixcNaV7zuj5rRZinyVc5Qowzidkh",
  "key16": "2L4KWbqFFVtJmSpLWc9QTfnkrg3rLRerJvzs3w8iz4yWcayC1zxAghgAczmhqHTdH5kpLk8QwDv7rvYNdbv8ftJB",
  "key17": "5ZMwVGU96kVHoq9CQmdTHeKBfHzLYHyg9Q6J2MuPjLM5kmaPv8jYSNCRRyNXKB5Zaqwm5ybw2YUeJexHirUX4aAp",
  "key18": "2yK61o9m4KauxoTYGQ1xY5XeBWYz7go7poNfQcf2K3xER2ERAMREkCZ14whNEMseYPSgzXgUzMnbwUE4dBzqSy7Z",
  "key19": "56YDb7oiCyv8yrmMV8JEBAMFfngYf7rVZG3asDVxLbZpHQ6gr7FehoYK9ZhGukfAsW2p36QdEioKtpEkqpY6ywtd",
  "key20": "5jXDDUxuriD7i32fZnADsbSP64yQViRojAb9s377Ue7PrMbf6NB1LJaMZ5sekVW2m9m6zWUd9EpYhXyc8vsS8NJR",
  "key21": "2uKervSBGydRWNqbybzFweVTEgLnWDwv4GDcFYhqbAwGgWRMN3b65x6H1FTPazx3y9ZgrzK1p9rmwuSo2xACFoYK",
  "key22": "2KhdFCVeUrPazMaEtjkwCwLHy3s4F3JcZi9vrZVTJCbe6N34eBfP6nJqdaKFrqHmgQwuHTRXEsXdaUkj84DBijPx",
  "key23": "4uxaoQtaz2PzgeegBivAg2HxYEzGW3UY7kKauqSwsJ9qJQQdJmfzWapRKiBb8x4jXRqMsDsH8Ac4Z2D892rAUe71",
  "key24": "2dVyZ15MhJ3c49so8y2GNwUxb8eB3APNUm8oKfr6gDG3WarmM7wLjUq5V5sZcRdtkQmMftKGv1whTY7ewjEN6kok",
  "key25": "2qYB43pmt4rjfNsWmvsWNxUop17kHs6Dj8cvwxUCt2vfx5HecuKiGk3DTQzDVdqQoFoDXfYGmxYfUTcNKTqm45M7",
  "key26": "3afktdFkVxCx5fY9qJZoJph1zkX5w7jqPWR1aaMiUzYwaNPMfpyqUotSEbgQaTBpQnvohsSBctS6bsAAWfrtBq17",
  "key27": "3kTwhqBBMbP7JzMw6y8ZEVEiPAZuQ9TGncy8H6jTc6MLoh94FDQKuAo1jnopvLPouVUZX6KEhnnoW9RLqtfGZC8k",
  "key28": "M3NuyJLHejHnZ754rvkkf3wDQ3MmuK2s6KdAoFypyEtcETdqwhdb36WZmVDa6SWCWtgoYDsfWTaKXkHebwftD8D",
  "key29": "mAf1Gjuvk34fBQaSai3ASv6J8rmgXnLtTjQP89oXWUnbLsWgKM8HZx9Wv2WZE5t45gvHP8Zt63ExMAzemFwAzwS",
  "key30": "8C1kGGNW7BPNXBq7TMjoax7yhz8wpLwSnWuaeUEuEQfTB2a7G3VMLbwWug7r5LyyvhYjGtXebGo2uoegdPQoPWB",
  "key31": "64bwLV6MZSSex76ASFYKnW8TUVvdX75Q7BDF3DPmq9aeTZTGW7WYsp9XeYiF94sK9hzqkVbRUBxidgjicd9hbNJy",
  "key32": "2dvSkH3SuW67XH2Eidu1W3rFwtHT2Ng3X23mbFwcYCYvSidsERUCu3eS78Rbx72xUXvRphymM8VabJypABkibwJq"
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
