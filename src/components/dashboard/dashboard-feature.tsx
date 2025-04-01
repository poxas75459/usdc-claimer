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
    "4E9CeZpUgFoKjfKqnaTSP2xzP7Wg2tyRRoDNqKAVGw2ZydfuMUjwHDGSWahwCi5HGVPkbicEPs9Rer5Lq92G2rd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X3eP3B8ieEREW5MkA8oq8qF2z6QCj8tPeZnND5ENeGxYdht69tituPxKyivQcF5LQy1HPBEDKqCLz2fgBd1U5po",
  "key1": "5dNNcL8GX5L6hgr4DyXiah2qyjNjVPjEU2tnzD2NfgZubszYgvV1xT21MyX3WMGoLEM4CBFeZTK6TAbiePKo3Vhg",
  "key2": "3W2ddpZQzXsaQ2BxdFzLZmbmwgbhjQ1yraWFMYagUFBci1iDC7ToUhFbozhCsSecmUhx878AJVBkBQQjmbLyerE",
  "key3": "5huSSh9G9zvHsX6eynKBGqbGaovfDtHBoeTJXWh8BTNRrZh56zHpXF98ywjyqwYRXd6PU1M65THh2o6TiAzy5Z9Q",
  "key4": "5Kj7WKU77ojHoyamHy5SFyu92XKRUEgsnkZ2hdu8LJiqNRNyvAsEr3ADX8rQdKcpHAKPnfz8c5ToTWF1T44seL9",
  "key5": "44VgLveZuoVdFMRBbxing5Aj4xrswjKeGHAGoGxG31Wq3xCqpasHrA61ak4FwRRrm8SH9Db4Yzo2H65LGpuFdNj6",
  "key6": "43Pjx6dYFK4jfUL3gJeUfyQ8MYgmUyQerMrcdcoWPRoTWAtzr2DAMdDS1LTAWksRScCXiFyQCuXRW5aYDDv6VKSD",
  "key7": "KMESKzvF37ghKwkoySQRonZCkQJESqVFUkSDqAjB8vUmMSEJhC9tNGbJeWvea9ZCLCxoeGdZHcZYKNHsy8rN1eh",
  "key8": "5dEYPEHWtiPqeMkbmZ2r1K8JUPtErHShUYbyFuuGnik699yMRiFqT63GTjgtkSKSMFvBMo5NHFRf9pQK9bxNWRA6",
  "key9": "62ZHBgwNkKLUL4xmdZ6QwKQgNXoApbkN1ywAeLq7HWUAxdDqP2rWrxHsD4haQQJGuDEZzUzkSsrmhoCh4gkBtjy3",
  "key10": "3AZ6iGAz1pxKdUDx4d9FqezdxnsgwB9uKXeF1X1ZPkDZWbrKCqwCkRCHQCRM7f8NdNqERSnEMfR3NpyMJoHTUaz8",
  "key11": "3Gg1BmQ2rBhmKkSUBDj3nfNkNTGZc6USa8MgafjqZNYdGNKXZVX79SiZGarD5GEqvmYi9XLrNrVPtYhbaaU6VqPB",
  "key12": "3XrrKgaAnwvQdkCNhJ4XCW3uN7uZYuqRMsk1GjW8WcM2eLei83ka3MbvyqDaB6ZFGNLGUghv5YA8z6onn74db9JB",
  "key13": "4qz6YvD4wLQa1diVu1HWoJBVi6PX8vgDXBqNkjxTVbP2eFfa7jEX6XmmU47i6t8gvv7BwqfNbu5BknfMJVHnHbN7",
  "key14": "2izFNHgLRMLL3TFoAWAQgjwzYTYaukoNvdZoS1h3sv9urYiujfEWMhc8bdCYZcwmbLbirV6JNN6v9Ftfk94i7ZMm",
  "key15": "3A7FfboPMFXTCahK5PVZqJJA5JBgYHkiM77ukxkrSM2h4ZTPGcnpSGv9AEMR8tHdiwJDuXZEgURUvsF6GghzbKek",
  "key16": "5Jy1xWBdWu8j5a8GQfw3PX9ZeYJeCkmqAawD7eSwTqxzXQDUqHN6ahrQ9jXWAR6kDrMYR62H14jL2YTFf2s5tgsC",
  "key17": "28bC7vHfV7XACCSXMifDF3bvLgxpXNRqqVyA75vac6yEDvnU3JgjGoFA4nUQiLnpm9gE7oZvPqAZE5WEtGB5WdSr",
  "key18": "4XVZMGSaWWVMu4zvASmZKAnihmJWMLWvJm2kHH6wx3SkGKTmgF97rnJGEiKXki4Ay3LWDxc56qh4q2GKmH2KazU5",
  "key19": "5TgmvU1mkiZzra44sGYymn7Y8G7YavWaPpUxQmz3ga9fCxX1CGjjapUWLcfcBqpKVwj2pBs7jM3mkYWngM2ahZ7i",
  "key20": "3zMiMmQ6MHe9unjg7aC8wvwDVk3twjeyPGEHywCx6ZtnLqJ5SwLMGiW4VMbJj7WLv7DyoDECWUp1vtXwnDNTsEH7",
  "key21": "2z6EyBdbSMhnzdes9wt1wK3GidGeYgJsTgJW9EiDypPoqkn3rnRNbUhRkFiiycSDZC15XXq9oiE9K8Q5StkMRoDN",
  "key22": "3ceRBHnht6gVckQMutrPVXuKPTS9eurZj2Mnr9g1WChrh4wmtbudywcenmzZdrCvNzKFZ9XNw7LkvNWMJmRMCMMt",
  "key23": "4DVLdF4nx2Q8uCm6zABAGWeCGxZaF3rx3xFo8AfW86QHUzsG5Rrq2aYtzbz8jEY8VLLrsZiBmjKoWTjni1nVnduA",
  "key24": "33C8WgQwbHohBzyV6EzgxkxSCrCejGQRgMpniF1szYNoEPURkz2xha3wh8BKRSQF7BLVQsoQN8A3WtSf3CZTJN6m",
  "key25": "2yukd8PvASb1jhcTAKfbs9R7xVWkthS5yyb1C4TNDb7Vrtu7vTVAkWTUkBtVSupqXsXsNVNPehWRXwiQhNEpAMT5",
  "key26": "ujoBtn9Rge6BP97MYtRYm2P86oSHsWmVYfcGrzQwdUUjSzuN7rqKuwSkq6vDscHf1TgX7RPpx8kHWaRX2bt6KeA",
  "key27": "9ndzQd5vkiRP1RjVE9r9BotgGiFxSTe33aVAXzZmdGYwY1BP7ZtZYKGoR8s27c1Y3tujBj8uytUMS7FLPSK1WgH",
  "key28": "361DRvs1iShMUL24NMqLFWhhr9FJDQjBvhNVqq1GWrQ5cYQXuLNWaHZ9GPccSKxjojHQ8cUG8FAvtaMR8KxowEy",
  "key29": "2uxrpvKMiTUsaSZtBkHco3gAtpM1jwdffKcAs9cAMJ9ridcesSUsK96s2hxyHLLT7NCPnwLcxqmp6yXX3g9EEN5w",
  "key30": "4XcEv9hHHnEwttBSogFrjmxXEupY8vh1hsodFjD7mEL6KegaMP3Fh4BUFd3PdEsdNRHBm9wdKiU7pdx7Cnf45eyU"
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
