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
    "4hDM7CC2sdE9sxs5kmeyJuBGG2gYT5owUvaLtfkqfcsE8wMd8CuPtKGt61GJQMyAFsp9F1vq6hY7EhDoXzHk1V1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p7oQLWiuwHSosqv2cPJvWDHFRdidjYJRmVUk8D5JyQ8zCU4u2uNwSuXTjFVVGYPotpPoGU94SH9gaQgLPLT1wjG",
  "key1": "3yvsSCnXDxd8EGpyMHZs8daYpJ8XihAF9iLmmKqiPxgeGtTCdVn5hcuwyGvfELJanRpCoHDFDy38VXTt7iH4scsK",
  "key2": "3uZqUC1eXDQBic5tnHVh7JLYdQXnF6jF5K792vhiF9q4Ri93nR5aXQgGk9pyXEYzjR6hdz7htLn5kFEBT9AbNbhM",
  "key3": "RhhokBYxagQh7BMeSxgfAh8knfkuPT99JKc7HRgXLg2cFgrqzKorS1fgRYq6dRQLe7VjkRVZMicZirwrrBheNFc",
  "key4": "52hpvfnZvE2acW9cvHFhJDiKV6rJCPtPoBgqPe5VrYowuFx9hZWhyRnv3K88hyKWE24ytZtZBC7FLfV6g1vYKCbt",
  "key5": "5mYUeHfPisWL1VjvuzHkcbQtKuvAqjPqVaPM5tQaM1hfRM7dkokieNy6J5uFN3Vk7dBnSFcMZtdhXF2Z5YAb5t5L",
  "key6": "5M73fAY2Y1a4N9kDQEsKBFFNKKXT5wHSA2AQe9pk3G3S5t1aXcdKxR7rnWEzSxJ6pTrn6N2y6xeA3vdi6hzTdcUP",
  "key7": "2RisHLoZZSivJUnwyqtzk3bgiA4iR4XQcYLbMGYdTB4jsNLi3neeg4gUQmSTtGAMY3nN9briR4oicXCJA6SNvSdg",
  "key8": "2JZ5RnEwVbkzuQh7AeRsgLJPNPmXFC1srFik2QAfErApaudEHkE8e6NtiVQDKAthjuZ7BMiMZm53aKAcZGZNV3Mo",
  "key9": "3aBLRVxMRTniVkcDNSQcxqaYU976BKBeiFnYaaKwjdPBystNyTsRTNNucV4YzU3rJfemaZz89Ayv9YAe6qsmgJci",
  "key10": "5Yi8ZbDPrWKrSF3fZCiSqUPV8K7YoesLdL5eEA2a3cAkucTm2CwY6BUfVJG6PybBMcowzjVSYHbGpvzukmnKncw5",
  "key11": "5v1ALwRCjSHavqEGTBgRKUDRni6WqcpnJDoCvmtQVdGSwSFqoJkBjdqpjwkezou2wUnnofmkKBCZpt6ky7omTS5S",
  "key12": "3Y5NHVW8ArFCUbojjG6acZZ8ufbdJbRUj9KocPWvQy2wonf3oUFujXmAxWP7v9MUXTNEnsTxnFaYcUG4cR4cajqa",
  "key13": "4Y4vpU4o9N6BdhEjnSb2Nw3BJE6HE4rT9ft8rKC7L2Cxg5QjE56pPjiNkVGHdkFXD2yZ1vLv6aeh8n7j1aGSfMu",
  "key14": "2EX1MCGpNzn12fNdKdq21ThiK3GqRxsYEZa29wm5kTJ5FuuwaFtbxzG7R8aRvqXARnpK3QeXRGDfEnQQHBaBXLNJ",
  "key15": "2mrPQbi6ApnJ9yUFzpZX3AEwbqEaL5cN1vj5fP8RqLaWZ1CVREd7zoP5fwGihb6RkHspFMwjwoQ96B3aP5Hznz7b",
  "key16": "5KyPdnHvWgwEE4oMJ7zfrnSUMoKeYGBuWZhtGU6zc72McM1UXt3EqzRhky8UjAGYdpGCfkti4ynE3PojzfaiAegp",
  "key17": "2U83qKux4jSqE2XWPSXmUgwg45FCK8FThB7wjsFpDbuxVyRtFVrroykErQnY52fPKVRJBEYN8jy7goBuZyHoyC8f",
  "key18": "qwf8cBq4aP9zpssRDJgHD7PfNdKpGco1He1bqU3UEQoGf9o9RRTSFu39sS5oH9SsSC6DjSe5C2MMRS1x5tiDJk5",
  "key19": "WB2Zgu5oeoGvkMPL8aVy9yWD5pQ4vgaY9aq2CTDzJor9y4v5YJ8XphdrkE3M4cQPhRweoTUroqwAKXcDkW9fERn",
  "key20": "2gSKpK3TwxmSMCg74FBUjMS2FgzK8NSrcV1AkLJ5PgUwaApdJ3u4Va9pugcgp8zEq5QaKtuBA5dJWpUtimPs6U9L",
  "key21": "2osyqiiZGV26ySbAvnyJMZf2YoxGgVXEzi6B7N3ULMEkRjymcfCpKboJEBoAC3GX1x8ahzzmKEGveko3jCpQ9rTe",
  "key22": "4Uuj4xy5dTyAAQdF1SqAducyvLjixFtdMXKgcZgP93LY8qCwyQDTuXpL8JquakSpgJ4R3EsZryMZpijoQpiEHtwc",
  "key23": "3B9XaKZi6wU6V7wBxQrFP4Bw9tKjSadCDibQqrFYmRxWy4kFJLxc2S1jUepzZBZJWvSonUuhWMURtdSPUdEmmx5D",
  "key24": "22FniYmvLrVZhXuWTnHsmSw6w6cqui71gNirs2qjfGssbX7cPZji1gPhthXd87KxL7VP5jtdH8A12jRFwFHW4Cpq",
  "key25": "2xjaRudM6rhz5pKmttrjk4k38xoJwc7Eh6DbpiLFm3PraptjFz54wzuu2SWnpVu97FzFk5daiYrrDAWbJyu1UfCy",
  "key26": "3b4wxgDxCDiiJNC1gTATeTHxKputKv997Bg1yTAQUAPS9MGvg8kDbpB6q5omBQ6Wt6qYVVfW1191jX67vMQ6qkHX",
  "key27": "gcvGk7cz2X6NxmvyGzZ5zbJx8uXCHvkHfK6GK4DDhTbyBUpEqVkAp3f31zcje4FBkaLS5VcATkJnjzNKXavU9jQ",
  "key28": "427LeAdPRReJkBoA4LWVhC6hYqUf74nPuKXMKCuVQanstNPgnYmietzCjFKZKNyZ9ssgkRSmfzy9Rk5fSNdTyZjA"
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
