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
    "5K8qBY4XrXWMGcMtBjKVPuQRWr8rSUW4yQp66VnaWvvaGNxtuperTi5xq485WniqFXTKfFAgaUXsfr6i8EjrwCLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvH49mGgUbDjkv72jyYLJNgxq6EQ3Cp3tn45K3wVNLJvK9mGDFtyB529xNGsmekMgfgiBhgnBcYEMBcTGDLBWF8",
  "key1": "4yQJcGpsPrs4mgWjYaASXPhjT1RbhdikfuAytNG2EkjzAMVrpxxEfbkoBXfMqABtP6iQYPaCoZsSZtbGXySp166c",
  "key2": "4Cini3MiByFv4Nj1pqWw9gSLbSw6zEyzMTi8hgrZESkiszqoBpkAWKSpML83yVpfDS6Xg4YsKu44QjKdL2YaBtmJ",
  "key3": "o4Qrg4hbJZjsmzqh4i5HZKqFnFvh3iitn9CPoKJ2A6fzNCnAQfQrsQorYD4xUAiewyqUXQe97ubuCCQMCv6gHq1",
  "key4": "3HdvndiS1eoAucse8UWULkDQfrgembPHRsnLtbYjR885U4HeVeV18Gjp7xSSZY6HPeywcLYdvY8vN3sRAdg7wUsL",
  "key5": "5i9QqqzLqCMXupNmS2VL6erMAGREdUgXa1WLP84FxbLj1aJfcXxPQeCU5moFWXa2NvWHytaxg4J6LsibFzn4zy6a",
  "key6": "5euK7i6d9jW5tFghqomqNwF9ozeX228dAZ1rmzruGx8f9XuMKg22C81N2kU4QwVY1taiqX9sEJ7avRyv4pXvGt2T",
  "key7": "4mg2Z1Cg1iuoCjGVKvQirbNYyrJ8KUXKiVhiV1kLEdHbdZW9d4bEXE3o2mog9hG1XfGYPgagXcybPAtrmgHbHtwL",
  "key8": "4xeq88fufwByXziFXazWRyiNQaTNJkphEfKbe1iXpxCg1aw1S85moaF6yuRV3zDVy9hnS9yboZ5rfoNVgR4hdiyf",
  "key9": "3SH4qoH321QH8SxBCxhaq6aEiudNHfCKsQpLb7LPNw1HScFRsMHYWMQk7aUxoJpHqK2YG6RBi5dgCWPzCLSKqMrL",
  "key10": "5Kd4WM7ifogAdDX8DWLwpTNviM8ifhJKs6rUNKoCyL3gNdVKnyViQwgGds74ByzVRZuB2kjvTEGXPGQoWo7aJBU1",
  "key11": "TW34xqU6YSottzT1BFBjhzwzyKCwr77zuWs6UXFQJbLFutD4pSt7gjQJJs8vFyNJf5Ju9yxYzYyGqemXRQ8hziG",
  "key12": "4va2CQcinQyyQdnjCZTMKLxBS3ZGJjY329joXHnXpNeBYGuVhZJTjppyui9n1VuvwVv3VK7heXM67zr96BxesWdA",
  "key13": "m5Dvv7FER22isaFa979u6B3L4AT2Cyd9MjpCYaDhd73HXGWEHpUk62sLgobuQyau7Ut2sKpNdsDAEtFdwB6GGrP",
  "key14": "5vvzX2Nzb8PcDcXR32Wyx92btFpRURfvmwxfPRPoyVXoXoydjnySRDrR92p2JYaSPWqwiSYYrEPsTjSEjMYRb3pf",
  "key15": "PFP75M3hJoA1ZoGfZfdnBZuoAJeZgQSmSzq9dd69ihk5PZcixYVyHbTGDEFBMTsRbcdyTy4SrzC6WEtQWbmKbgF",
  "key16": "ZcPvXkj7rt4WSf5yw5Db6aKcdLFMfqfqFUzdXX7nttGLqHnLu1qmeAabhHmdHXnAL1ya6KeFrGF13GYMJdxBHY8",
  "key17": "28bUQ9Fa9Z86cun4DL6BkboXopNevW5pxtzHDidxx1yhS6JAsQVEPkcKnTa7KwUXeQWgBhhVVEWTmYRQsdixWnsC",
  "key18": "5EbAgxqoA6LU9W6fYwXRQ4BsGG9SgHT2VV5XhohFt82VbSQ5AfrRTWeWHpwFia9bEnPGNv2ZqkjSuLRWTrEBRez1",
  "key19": "51efSMByiSds2mJpGeELEpRQqEYuM762XZC1vCMaz5xKzFPpGB6RrLfRSgPH9ow1xTLsWmPB7ZaKsairJvZzPmfb",
  "key20": "5TkLuAHbf2WgPTxoDcefnE2VGghRJ5XqYbf5mMJMvEQryYFNtzvZ6NSiYUsCXMYp3dqU58JxB3h2ZTJuarDtbySs",
  "key21": "25icAjwoWLJoDnwEqQto295KjXzsDxEd84MUZCCCptw2NfndQe9YrNLJxNixr9YP8jqF6itgjfCcWJhga8xNaNNo",
  "key22": "4x3YcFfXCSXJJG2hcWcpVk9X5C1zbCH3NNuMm7HJtobqNeDLUQ3feboiAQ82KTDQXrQQMxw8wnLiBhoCFEQm6AEV",
  "key23": "3ZHfBJgU3pJ2FfiY3KemAm4jLDqiKW71wczrdYV8bhi3C9Jn8pJnN3QemTrvGAQru7njikwRThJ93BVD2dddpH4b",
  "key24": "4gDUixN4mc6ozY5kTiZdwrhMuCdncUkc2sLrt7DvHSwjYhm4TxoShqyDqBKFpjXLehuTtkpzQAoyDTgL6yFBU9hY"
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
