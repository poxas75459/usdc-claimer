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
    "B1jvbkLTMifHWcFhbAPpZeQXGrBG5JPULuKPMzZaHvPPzCFsKCgqM1uAkLKYk4hHQVHagNgkQeXv5T2PaGkC2xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yuUt7iQ2jBCLrScy5zspDjaL7LcbUeMXgd5jaSYnrNzxVzS6feokYn5GVg6Q2imG3xqvPaM3Ajk4uRUKNSqKvUA",
  "key1": "emFDXio2MNhFmwY5Yb87UdEDKkPsJsHqn3maP8Jm4G2ogBXe1nd7Eo7AwESPQfAod21Fqkm6in5sjkD8HBKuCpB",
  "key2": "2Q9d6i6iSyh1xe6fHgGemY3c1guh5o13zv6vde5ty3qeY4YMEi4CSDJTEc8uvuc1Qsj7izqka8dryMy4Y7xFchWE",
  "key3": "36m23DcYZcYtqwyUJ6riSBaiGBsd8PwjQis619sqdr4Ac1WmQ74sxy4DcYDnMfe4fYSSH6FawSTQLNbrecmnpUdm",
  "key4": "3nSpsdockLtgY8qgmSo2pyS4Lvjv2BSPbAe3SzP2WDuZt2NYYgEmevMVwCgZmUD7vwK7McXvsUfv2CJfckiQsHzD",
  "key5": "2LYo1bN7uBD9kJv1nMLb3vUEioh5CoBT3icXaYubDbXTgCp8VExCzTzUBJRSheDuq9AvApiVgi8MyvijHA6bv3Sh",
  "key6": "5PhDh5exA7RxkqaVhPDAuMQnaEh44g98X4P26JW27JMsZKRiY8Wy5LmvTN7TT2qp1CeiBG4X7CG1zDaGKK1N7LSS",
  "key7": "5bVJxmZekvY6Bm5QsDJWQ6hM3s7T9cFPcG1AUAGPMEHQ5RBZcrxZK7iUFPmLhxqBMoPL3RLnLyXDACNUtF9gHdbC",
  "key8": "64aWT9nam8kksrW4RsvEmsdkzJE5AyS3KXXept4qARD8KRn98NCXheohGgRJdQc8tez4Ke6mHz7jzSTwUB7GdKLZ",
  "key9": "5JjVQJgjdzG6tgL7CmYQQQTirDw9ffpEiW3W3FoVSpFjQU3vnyZiuBfYtYPGNMYSbTirUEBmwo7mAgcbnLsrQGeZ",
  "key10": "4KykqnsnJKtDggUQYVgvjSp1gz5p4Q4RcBcfBFQ4oXpaAy9jSoWJjcUbhX8WYHNMraAh8seQE2cHqWkSMvfNbyvk",
  "key11": "2jzurXNmtaqSnDXw9LhMnqwsdkZwpnQhD28P8cRDF3LrTqBwgHKqpQQiQho13vtjzxqsx6grTtYy2XXtjKEJJu7R",
  "key12": "3vKqrtw8iRbJMpbBzZX72ambTCdv3RURr462dFqD3mziJ3Ffq5xqJCJiK7YTM5nLWnyFj8v8NcmPWBtKCRihhgfD",
  "key13": "2Mwsb1uLjJz6a7BzEDp7UB4iGu7Lk4XnCDq1Ro9ssE84ornXm1J1n72E8jBvGxXp6th4TFQsnTyGrx61etgyFF7v",
  "key14": "4D5kH73nxHFxCBmwGuyvKDdD49ZWVmiXKA2DaxwJq8GPkNkx9de32ka2mTP3QRPv45hhpWRN4yMnzcAqs1i7NvW8",
  "key15": "fHZJyLCWUjms5kDT2apHD7PfU1GpFYuvfZTiVFJqRg2mgHKbpRojFyFxMjAYWsS5F8UQhsgVY8cMrNJYbA25UzT",
  "key16": "4daghEGdq6eL4EN3KyNDLoXpSPgwchuh214Ruq8vSf9MLLJEGpdoEsTRr2CB12Vvhzcnth5J4QTMfXmMZATTLvAg",
  "key17": "3KmSipjijoEsCPr2sqsnpRiGgMwYy9PWvuT1cf8Z7qvWbLz9SKgvdGk4Rz42bUif6x81S56m8U6GWFAtXe7pxRKx",
  "key18": "yJM3LTDYyFkuLKhifjidjZk23QznPRADMs7CWSZaPrg7QjCxvPuUcF1JFkoiKiVV9UNmfNXLt2a56J6yPf1HHZj",
  "key19": "5ZUijeQR45swLg5sHDphZDj7a6UNgrrBrK6mc7XNkghUs6RoxYDXC9AQSWEnwrXdw8K31S9j5g4bajZ3Aoha88T3",
  "key20": "3aWz8RXg8oqt58K64R6vAG41AuPBSnZNo7XkEr2CXhAGVxQwMfH6DeHXjPSoQY1vjyMqi9Lna7feTfNj1VSLeKQ5",
  "key21": "Vn9kpJUPMQsgNyyt1M52AMo8e6ebDQ1k4ckFAiqXjpweZaYUPS2CKj4tCYPP4FQMjiG45yJ3A7aEiBEiBDMd4uB",
  "key22": "66MRbtaK4oJRrLdvhdcUYBrcJVqArjQbdkYBcZB6izb2EEh5NGBuaxGXh5ENp1JrWMr9XEWbfRLcQhPpgFrUBjGR",
  "key23": "3r4KeneVzXXaJLyY8hjaj1fZea74TB6kuU8sVoAaX88ktvVTZFXeKYKTPgpwv6xbv13fWw3kcbdGsJRv94CS6HAV",
  "key24": "4Frj3pQCkF3e1KHQTPRooPXmoCGJXJwtFyhnh3tN18nNYqUpGRacbDmQzxfvUNFxG2bV4T5SkEQKJSonfvdPVXdx",
  "key25": "Ab9DYzJHMAy3AuZSzH6w1sjcBQowFFwRQFbm9E6V4C7rQWdGhLCZTa3ZvrUDHqaqCKp72KZNGoDt987W3tHgNAR",
  "key26": "67EjF3PQk7FtCewkK69judkmaEh9BSGVrh3CcPqqqfgQxBWV1GseTiN5G18jT68dmNCabYJxXnLimSnrAezCQYB5"
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
