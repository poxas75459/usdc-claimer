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
    "3LJe2QFnXXtAW3jsD5W7TJvG6rdseHGNXQJ2HdRL6uAuoFS4bzgJguNtyrALFNLNA16W4oPvseJWVZFgbUpzeVSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s8n3r3FA3okEWquen6cWU4xS3iH13zTK8AaPdFTTx7sfiEhsywzx6Ct6ARD6v3byuNyVbBvcv8BgAYJkVDrNmz9",
  "key1": "53MxufPbt6rNeGQDD1mp9MuUTEQ7GyjpmUG3fS4YP6H1uuv3mt7ibPCe1pdJLomBe2kfRSMxKttZ5DBmNqiGNpak",
  "key2": "3WAbX9LpuvbZSg1Pct2HRM52treQYooLM56TFjpVAUuPC9sdY5KkTnFwM7cSL82PJXP68RA8Fm1gqBxbxmK1nqpU",
  "key3": "4vykAvzeFQnDAjoUrvE7AmJAt7XwWUBDDG9aNvUSzEyu4335ezMKZknFgHFe4vYoEkatanSrGRZpo1dYfxdWUEez",
  "key4": "2xmYSXskJmeqxexAcmBFYLpoG4UkMQGrSxQ67F2xAsy7RkYj1gBqq974F55iRMuFMYkQAo1ZML9Ya1jSNWd8QvVi",
  "key5": "tFL2u7qrFvuKfsQGJAq2JbMhpbiprpfqLU1vPBqAedSmqyetuFrM9a4M3V9ZCBTJJHVTSVeLMpD96qUZ3kHaciy",
  "key6": "2wAZYjUfJ64FDdygdNfyKkNnpMFgkaP3joXJ5iyriuMsN6p4LGHBibKniFRsgFjVmimk8cTW8LbVcU8MoLLDkX2K",
  "key7": "2tkJQ7XQMJ5AiJ4qzY2ae5oPVwnUsRno7zbjU4cEh1m8CsB1QF3LgaqC4tGdr1vDF42RBJitLd2Kwr8WVrvnp6yr",
  "key8": "2SYzy1hBQfkwbqUzSx47sUBoFirs5gMMM8SjJi3zbwfBsEZ6tVje9RsVkxPJG6DLhUFfa6RwiuPq6s929w1BC6H5",
  "key9": "4V72Q5BJpT7Fomh3R4EnZZgU3XVc28VHPr4TchS2LiatcUEJ2LopmJt1MSiLmzEjqfH56TMNaRmWTiSsSsFtuVGe",
  "key10": "3fddxywgwzRAcVRNw6UaiTVhdDR2UGBwnSVU43C5HhvwoHPypT1gfH9mP1yWwEfMmj6v1M99qwhSnwuf2tWM6oS1",
  "key11": "3r74fgyawNscmMNLwtSHh9P9xz8cimU1fk5pZtzDv6KDtpkkrWm5zq2GWJse7Np3j8y4K65YL6Wdp4oWUCBVfQfu",
  "key12": "5m8mhk4xQPJh1NRRVLSHQN8iSBz1KaHeBYvb5DvboBUJAofgEK9uDdrXYpbS9itKN27NwAGoji3uQdCKYMPam11v",
  "key13": "4KmNa29LgyhBzHYMX2crgdns34UJmCSTHNsUYTwoF5bVJWz2RvJWWEsvKuYWm9owykHZ6tj1vsY2hWRWE9Q9RSug",
  "key14": "4Zzuzq8MSxu1QvUc5uNrY8UBoeoHieJfcKJu7AyyDLSzUwv6VeEsu9TH7mZXEzwQDDrR9i42mSEeavkKP6V2JmY7",
  "key15": "5q3RavNBqezKuyAnpwGyNhpvZkxUqRwvWmiYmGBXjE5f8bD2ds8DE3Ahq5qDAgwgGX7MyGmDntpcNMVbihWrnSGL",
  "key16": "2BjCHwU4oHMe1KvEB7kHpW71C8PSDJuJAoKT8kQNiPJrziQKp44EWDiTHeLdAoTE7ndtW5XDUn7b4F2tmQZiuniK",
  "key17": "vrkML4YRTbTK4AaSnhANyQ915Lvzwe4cWTJz6ZoqhkPG9BL6Kuw5aFSKXHymEiUYAfe6wVXWf7w6T1vqfReHvuB",
  "key18": "3v3HcfnotmPG8Du286q6HcCwW1RkSam4zudn7LBgXbXNEVCiqZEvgNAQLqaw1NegiRXnqcXoH37aguwtcrZKSYeG",
  "key19": "53yVUCMVvaY5jUycnNyaQaG5P1oaHvcGUyfwtqvX9jRHfNvhDb6NpZzB4R5Xqu7BV1z2jXJT4XQpdsRRLDjJTTTG",
  "key20": "5avqjhLNYs8zVLuFg6TTpHCmSWFgczVFNLYEtGZniXQHVbPihwSchirA1rqttySpdUtqKQMH6k88z8FfyQwCYMPX",
  "key21": "5KKc6EypRKyJmauVBGBdh73R5sMLdHByguLKragsSR7marDaBzNGZZC99BmjHW3YkNtf873aCXFUWSR565rGWVBV",
  "key22": "2UFmepL3wUBRGAQ4opke4BZWRuAdSBxkkKoZ6nyxb1HqawTLBhRYeNpLfwk3HYQWT3JhMLxrG4x1BBsNUWDxknLZ",
  "key23": "63f5k7z2Qt6RKpP1tnAAio7PVqbuSuqjHEt4e62RCLU1FmX8GAG3yXjLnZtfQXrY6VjQ196kydoEi2HAo5GvrjZT",
  "key24": "3BgdqmsA4xFciqyRkUYha3sHrHPaDviTCjaY6c74nEkFpxJuMzN4xwmh5dvDxxRfBHtMXHU6MgXuypYKWCcZjUDh"
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
