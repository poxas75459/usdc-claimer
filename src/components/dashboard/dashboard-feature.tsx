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
    "ybAkXapFWJMaVvknq8SQNTcqsgH6rRP5MTdv7ASrorgeuuN9SGBHJ6EVmx1p7YY6UyqRCT92LjjTR1P8b1HXRG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FjGECu6ypHggGGboW6R4wAB8ackocmpBMMSnpUoZQXYTZ7r79LpcFg4n33GQezVgkRW8xPz23Saw2fUQnhq2zJm",
  "key1": "2gKmpCmBAmDBDxmmVxoCx3fiXCXH1Q764zEHNpWutQrF8xfocQsxNSZj3vCmgRr99DX39PYyFwttqD3Fj7bAj3RC",
  "key2": "2WFUp4dtJcwnutku2DsFZtnwb9Pd39rj2E2tZrxeiNHQgej4JfK9w66ENmGqk6thDKTBQtVihibtXcnbfbKXJpGv",
  "key3": "1ryfLrgshWuMMVSJAxbDoa6vMfuwCmfanak3YvUtd86cUVmeUhETWyGSm78HvY7ZVdRnr1f6x4uUZ1ieut22u5C",
  "key4": "3VfV4u3VZebaC2RpN5TFm7Zf1XrwKvFfUTuTZk4fTUY2ZZcDSiWR992rN2zqbYhVZTg1BXJMUx6pzpiwVYimhC7Q",
  "key5": "4xHzWivZqPVxY1SKBL3cCDLMNjNKiZCemQEJz4Yi11sg2oekGd4nu4QUPKCG8nu852DgtSMjXqiVrgzFUehDxBpV",
  "key6": "3mNw3JhBB1Ud4bKENJ9eeik7uNdHazAaN6969x2qagN4PJ523c9WrKbDobLuqKEbZqRQQPgp8BLJD27wXXuhP7nU",
  "key7": "4Z44UrKcDd9dJedLMsY6fYSwDx8MHcJGWoijN4AxeBehRH47wuTKTNa9CEL1jqTkwtL7tintDi7apsWD6Fs65u6K",
  "key8": "4gghXfgicgXe2xxrmRgrBA8hdcbPzhDrDoZfdPQBrSVCcbT3KFfr1sahyc2yPhCSmKSyGwix5ReiYZpM597XYv43",
  "key9": "54pQHcJethxGXiz5emNPNLm2hXwrmxwMUGopJiX6ibW5kRYMXLZcg3KvMfNyBWyVrEGRiTkYCT9YFQxxwP9sqfFL",
  "key10": "1V3QUqGmVaRbeNyWpsueqA5LoQju9hrikFZdkqjE7hG34FXCzrNaaD6WRW6QpbkXB1mubdYMJSMZK7qRNhSezSf",
  "key11": "5YST5oRYKv6B7VdhbeoWo6QQvknLP5ZVGF8aRXNSki6Mm6r8uqDYNjjqtoLjRPs6nhSWJD3GFXnnzjRpxuaXfhUn",
  "key12": "4n8rVB6R41hy4CiuRUKkfBRQgHBvaDxAhJTjXLLUuc92aRVR1qZAP3P7Y81Njm1tLgLTU6KX43Vh6qKErG1h9NfW",
  "key13": "2NwuwiX4VXhsiBh214PUc7LpCPugnry27HCdGdioPozUDD3GdKY8PkhFap93xE7TEBMChgKMjxhYQmmoUc1Am5cX",
  "key14": "5dvypgv3BzsMWGW7hEvTTfP7DRuxiaoTfjDs1CbL2xZSEAVZVKnhSbzPcGR6kSgeEvy8UrZ6oq21NEj2vHTVLv21",
  "key15": "BoFVGbwEqWZQ7gUEw971EL9DL8rJH855uUSMtRZkLHtRGMMAdpLE2Fyez9BkamqWkcUN2SZfdFT4bWAqHS1xYbq",
  "key16": "ULBBn1A2t1Ud2NDsCz6NoHEBGymSWwanm5f9tx9PfwvJv7obisYtPv4PSQ7c1RqfEjXMiU4c4r8zNuNwd1ynyiY",
  "key17": "4y4bgxaqTKbC2B5spJei3jCVBagv6ZtzQgY9hNSUUNVKirxURvqX3dfpfWYv9AoAX21zuznwJWuxgdN7vW1XfFSa",
  "key18": "49ibaUP5878tsobHyntizyYZqSiSbwsPehNC9J9g9AKzE367TuaZ37ftGTCZ22rdmokF9x4RTRGBCKo3xfXX9Mo7",
  "key19": "4eU3CkdWHdqAAp9Sd1dmW6W4ivLnJPiiFdhzGa73nYBKiurKA6CEq9Qiaoj4YuzD9wCCZ9vb8Q14XJcNB6TGoppg",
  "key20": "6KDCjH57ghQirQrMG2D6LKBperzSPat461wDEbRUD5DJzJQen13WAG3suW9NimR4TRb3UFeQuHPbtVGhrMa3xGk",
  "key21": "2VxSyjJJbT1HzaLgXKY7Fog7Gv8MwUH3st12WBSm1X5HHgpUdzLHcLp6nSJ4to55CB2ZUtHiHENUgo83637ALEfp",
  "key22": "2vEaREG82qQi2oWeVFSvt58TZcdomi9bk9xAazFP65cConAYVWu5UzwHPUkTRyftCT87eDqK42dTayC3du29FeLH",
  "key23": "2vnb8AyXGGBhrKwJoAJLTdXAm1aUV79WvgNa7zq4bo6r4xym23z9etdyjE9MeU7MrkwX3Zadd5xqYWztVxZCSQ3U",
  "key24": "3xytcsofZhSEYgUiN7mCqt49YAtvykVSZrH7UZR47Xyor1yQJEeUjAN7wTY5o9uh1YLExAVjuZkiHQsorBD7QxCN"
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
