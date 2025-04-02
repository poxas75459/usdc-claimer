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
    "2yvQgKHAZ42CySQocZn7cZUNCqdX15P8eFgcRXkmZKjCK7PBYFb4gtpSYnzAF62EDuoWivrciMyUvbaEpyPd7mH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ESNma3iGij9VSGQh47EJZc5xX9iuRbnGTtK6JeSMicCvzhKSGHrx2hBgYYaJ4D3hXRZ6svVC4mixQF5zsx2PTqW",
  "key1": "3sNPfwxAZB6JJauYQxKwBibjPYbueoSxRaY7BB1zQzEFR56Tj5pfW7bgB3o7vgys6CNYjPxGLUF1M2qot8P6oTU2",
  "key2": "5X41AxP2BsXQzc1DxqUCYCoVEzuQxhCtHNzffB3j6CokZvP8C7kT2jKXkgdbt5Pc7ksYVTqJWAwH5LABzaqi7s92",
  "key3": "uWTi5d1FBp5nySKzcoKFUsAcCeFiS9PsWns4V6jybzJ6xT6VYLXYsvQK4BDoKMg2zNH6yCa5oRRcJcWTmj2tFgo",
  "key4": "4WU9FJK1XB3UHWGB9t5HmLsJQJDXvk1Assno3HyVnqJwt8FWohVbnuftBPBY6SCTn6nVSUMCF3SBaZ8FdWr1Br9v",
  "key5": "4g2M7EsX2LpPbbWVXfo2pfNcBMeZGBUz6VFctM992WesQsn1B3yqNbVHkJDyGTwpfx1eTzzmGTFjVpbXwzvHDApb",
  "key6": "5zPG7KrpK3D69mRGwsaQRno2bi9V8uiaECwjVbhWGAkRii3qSjzh6HqWgDfUoGZTUEhxaayEcLqZs5JX119p45mF",
  "key7": "4pDsfJVa994JX6wYfD44qYAdCs7Tn1ReSXhHABkxAsUuhiR7RKFqoNZppd73ySmQ6sYSXsvMRLhbrsCuzUPxjdxy",
  "key8": "2pS1s3yeWtCuP1NvP1jKUGjy8vzzo56jNJ2BTRSGyEN274s7giE3qeeJLJcD5ovF635gk4AThGwFg7XYrJFPWbdF",
  "key9": "CAd9aYxnVMBaytW4USwcA8NorYKXUbs5ogyd6MotdqTwwUXMyAobrmeZgC3md119DbodY8VkudxsPQEmHH4fUn8",
  "key10": "4rhY9V6KfQLBLSVMPYyTsm3TXtDdKsUSGwwsb7AfzbfBHUa6hVyGq8VAqBf3HbQZfvPjJYHDKrdVKoZ6po1oDXr1",
  "key11": "3NaL5ihzXc78fCGCFoy8fxSKtR6mKAfcGmP2sddVuNjbSMBi3828FXGxDZev1Wnu2zMMgpeQvzNzqXHwnmAJkqgE",
  "key12": "5LJRFk25fLxqpaNTd81jwsrx44WeaBQme2cZWdP6S9MeAWD9JN497Nhm5f8sSa1L7HCiFX7q7V6HKzAnNbLYe7Gk",
  "key13": "3N7tZzLERnTMGEM8FbNdATz7uSDJjtcXFtMYt1PZzexGjJwEZgw5HpSqpb9TKkuGUeemJDAcdtkycNBnNE3A9tK8",
  "key14": "3kJeN3cg3e2U4XjMUJ4eb9WSqe4GcEDQotZk8E9F9Wi84vnbajzKg6gwYu7TvfXsuXRYsmZZADDCNDf7o9sHkeJW",
  "key15": "hrbpK6o3onAqEr93BwPmhWyTAjow6KvWQFastMBRNLGKWcFu1Re8pYppgPmHfF1F5q2ThpXj1PNthMTiMNRHu8r",
  "key16": "cVzeYKsWtS1hmLeKR8JSYd2i9EYdB3wyzYqrMtdDJfLm75navS1itRUv6W3Djh6TBGW9UCTfppzop5gyR4PRU63",
  "key17": "2Kw5pr57grLSCYr17HMPBe5nZA7iCEAbi36QnMowmTPcFkcyvXG9cuSwEyeV3VJQ6ETV1rnQumiAtx6WE9Mc1VrB",
  "key18": "VhmtsxorpaYv3XFL5gxegX7y3W7LQXnMKAJhN6FjPZtHytKgGtkDEu1qmW3DcKktKmqtExZYPtCeaNfzM1q7NKC",
  "key19": "2PfgyNgrfeez8DSxS3zGQxCS8QwdqJNqJumyTjgiaKoZnNFjeAADxbPh1kbbU2wt2nSDKrkgxxZAJbQW2BcRwf3D",
  "key20": "29785bXidWN7iYhjRMjZUxes5hks8KXDuNYmq1uzKdapzN1cpq6DFQtHbo5q19PLP62R7dKddFymDcXbGbLyJ2d7",
  "key21": "2pfe68madXgXP8XjWqyxZkiCHKVVTm9C1XwYiHgKo5MAVFVJBvxmQ1QYm4Htn78bocdvG82vVxn7jFvyEuNdGAAN",
  "key22": "5SuXupGR4rHJqc8c34ueYGjwbtwgjcgZCZZHMmjEDRUt1EjU6DXm6ihipRWbKzu9EGuEmgaRSjC7pCzvoNmC2DUt",
  "key23": "3eT8Et2R7WN5e6GtyeoQcuKQn9EaDKsbXBxhfZB53vS24LY3tU1gVXSBumgeLBUrmBNX99dVGu52WUnsxapwnKtU",
  "key24": "4gdpS1bieQLXRZmHS5T74PaSHQK8u199GffGFegtPaUAsMUTm8yzrGNXLU48Sx3uahbqyMN8bmsYLHtDfXeVspV",
  "key25": "UWBER8mTwdD34a8QSPByqwJtRH32NWFsn8TqPVJgVTDmRBnbLYChTGwqhjfyJJgkRpPGT5EUeQdgKcpT8z7a5xQ",
  "key26": "1S2y1qun22GG2BkecM1pp2NAJ5hBcUMMrGW3JkhF9zb8kSmFNtv5UuqGGRHMZ1dpijZX7ysfk6R8qetSv6SG1wp",
  "key27": "3S45mXCkvJnbj1fBSaERJxZWjUZyvgcX4sn5Md55UniC9bqYG8HzSbZh6uDAVnwmfzysFNSLPJ9rbJ5FzJL71nVb",
  "key28": "4UCneaazYUPTwFMVKeRoXhxn8ULTDAQQMfjgrFwLYjGKjMNV1cKaAGW2cfnMf9KqHSsVVtGedHX5GLMhdW73Hpdd",
  "key29": "bgHUdtCGziGFzynra5G6kmMf7QF7pkhYSa9zJNJgszKZAmJPQHC9TFA4wocfc6JYenAJTN52BM4YVWBSPydr2wE",
  "key30": "fe7rjNgiECTQ1ZL7jot3mDzTDJMBrEJGu6UpUXgv82sPCnc8PyrBUTBRWfnwF49BCmVjsKq64iHncRy6M4giR8b",
  "key31": "3KEiYZtA7mciMMEU5KyBkMGysMuqrcX1HPxUwWY3ZqexM8HEaM7yGJ6q4huK9W2MD2b4fAeRMcFo7s3AoJUAL9Kc",
  "key32": "wXPipyFy3s81uFw6pTc9WgvH5EcMvxj7zAP3uL3MXXf7dY2282PzaJagBBMiWeQrmNn2tg9CFpWFeRkvNCYQS1b",
  "key33": "5dZWzF66TfqnS3jhokz3Pw7AvZ81MrrHkRy2fVtwUBTP3ZxMcRk5NM3qx6aL7nf6a2HfQyZcSqh577yRU5AAgPGd",
  "key34": "vby9aXrB367tQyod2SNhFEzc4ENHLtSeY65tGUMYDNpS7qeZgdsj3M8HVuNLxEy6S36RNFFoKT9pYZEsQW9MscV",
  "key35": "4oHE94TNLDzP8V5b9meB83bfJEUXWfv6QVECKd1GrPBZjPbMjBAiaL3Cbi4TyWSr9jpvvN2sZgnrw4yHt33T2fGh",
  "key36": "4T3tA1MvMqk5iiyRcjqUrsbbjhtk3R6dmdrcSJeYq2Md2CTMqCyuW6HCZqY8WDsJJ1ZVMLQjeUBpyhJqmj8UU8Gk",
  "key37": "5W48ufUG4nkLxuCa9xPVk8pcKACPhw4yniRGD5cbXMH3p1HWisBQ6D2qo9EhduGHnRpHSsNHTkvQWzxYRZ2uzWwZ",
  "key38": "7QFGS4VrUAGB8f1MoxQvj4FfUNAd1Za8nczBbhDJz3PgWhr8CURB6rG72mf2tqcTvmU75ZV7hQrkGC1XBKpgkLm",
  "key39": "5ycTfFv8Gq5iApEU5VWDy3ZZMMD39QMhCE6qUwaXnGF31n4YieKUXvwJWygerZbP2D9LbXtP9CA9RbKT1JyGuwxA",
  "key40": "2bcMsZp4y9xSm1LkQYmHSS8axJwW7wujXYH6TE3L5WG4gbDP8DZHNFNM84T18qYM4rtnimdoQSMXQgvWdYwnmPy4",
  "key41": "3uHpMpoU2BzEQsYHkjKBt6JnJR6eJVQkKUinJR5He3jCCCB1bZ7s6EFzgPWKuD7McMY7jgwFyvK4oemwG2gqNTgv",
  "key42": "7VAmn3qVNJegyqc16bmsy7qkLHzyzK3qjf1eJa162myL845gKiL7jooMKTZapBE4QqiTQd7W2WuocC4AoqjtARF",
  "key43": "4hskZVRNV363ceJLnoshHDxMnzW7DwupvHdvCBdYKv7TFYQrPvv8jpNYCJ2Dz5fy8XNsc1UnnbJsDYj89X1Th8QK",
  "key44": "2CW9tmNwQrsrqkb73vnJ1g6k1xAAqBk8f47wgkjYSuzWdp8RPiWhwfmPnt6tJpFyuw36Z783hkpYfchC2J8ao4B5"
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
