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
    "pkmE5HuLMkkpWUiTof6BAFfLvcmYVTZZadH5MSPzucTirZtE972fjUYUxeACZA6961uogBHAudPjbjmWNJPyYj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f7d6kFECLHWf9tUtf8RodqEF2N39VjUscqRefjTrHrUjecWc38EaRHBYAMxeVGxtmmHnC35zcBbZdXJ4yMgitRx",
  "key1": "2KWXvkwyYCfbQD1xeS3EuAinEBjyPNSZryhz8VGjJGVf2PE1T4GgG1nBZp5t92roPtZk8thwdZ7W7vkqr2n1LSst",
  "key2": "XC6JKgqJ72BL1DeosYZbWmwjHdnp87AeG3tz7ezq68tGdcxy9QemSLLJPacK4CtTCZtrKyCdRey344wny2GLZhQ",
  "key3": "5oCZ2chJP7wAZvjqX7HKn1s2MaJ4FX62THikPkwxuePH3rga23ciLLva4RUqp2rFMQy1xJyPWH8MsCRy51oSyN4Q",
  "key4": "2gEJkyH8iiqigkZitJmyx87zJ3octTVnraoRnCByexpromijv3FoSngRuj7QqkwdoTFCkAQKmNW3MP3GGV8NZ6kJ",
  "key5": "kvRhRCdaof7pEzDvNsQDXdjPVTypzhCRqQLSK8BbVnPs3xBnkTXJY6aSEBfXWXFifhxLRCyZ4i3PN9mxa97Er77",
  "key6": "5E6FrPboMi1So2PwvBTtTACBaeC1oaRJqhP3yMwsJFnwBLMC6XYuB8CvSVyEtEGCjwG5VvfwES7JfrssFY2EKEfw",
  "key7": "vcbzoyiojzZc8KaMUJ2H5NYzazkZTeYnAbwcPY3jC8ZB4YmFJkUj5srKz4x1ojbc8XKFfNzfVzJ6zUSf1f9cBwf",
  "key8": "3jfHHorfLYkbZgf4vUxdEFoD2jtJc9hBLNqortUEgx4rTmDubsPd12uhvHCojjgg6VznJtyXDSZKthrxocsaXkUa",
  "key9": "4CTMMAbhgdYgScLhXupFUqEK413JUGD9LhQG5fZBw3scTHAbb9q1Mn2zMZL6KjZMhYTjdQkUyvdx6h2oEJUNNShj",
  "key10": "5JyKDV2BMR2mKqcy8ABSrKK74kruojg9i2jtKD3R82bvoPtTxaVEvPpMgkphG9tkUGoXtSUFXahgUMpqvQWu4pj7",
  "key11": "54fCPKkFZeYw3z7ebvTLfkkKR96nJHnN8eVTWSaAX6xyf26iX5FGqKfrSCvs28eYhaQgM6wHULkM9MxkipVdUqQo",
  "key12": "5Cg2PCaPPD2CuTsznV6RXadQMoVB9cFwTbDWufgPuKiAB13uNN99UAjTtRQ57Hciw2FQ1rG5sVQsm5u5FLvozt1B",
  "key13": "4bT9DFtjNhGXJS9FonmygUGo151L28aZdCK7g6ARnhWMpyLEo9emzD67k2h5eYd2b3y3Go38cKsXfQZQ3uZR6r3f",
  "key14": "2o25SFdruh7iQqaTxt8DoYAgRgQTVGkc3xArXWNwrb6bhRVfvf19hvoxTkeMQN1sznftJSxa35JEGiBaef15RYrS",
  "key15": "5FHK6zwvPutnXHG5abd5koFnjKfabMxaEwVgGkzg9DqQEVFGcyN6PUVY3tyP5e9a2hn2NMtAvWx559RAsZVjjMiK",
  "key16": "5RSNmyQJT4AFy388LzrjS47tyJK59D1PSB36bvr5GA5rBkDgjX1qRupW7J4FFGxp3zNuCvbf3ianoRR2rmqVsPgx",
  "key17": "5B8eeAqADDKJ5gR5SoWBDqtebzhk5Pgkb812reTdDTpUFCxgrk2YezysAtbzssqLb3R1QLSqrwxcX778rHK9QG6f",
  "key18": "D2vMCzZaEdpYvkNSFoLqypyN7aMucE5RdozVNZd9LQk7CS8uUSPYzUoMTj41Xz7LiczhRy5MQcPaHjHsUthS29K",
  "key19": "4sm9Wo9Kd6a2qEAJ1yabERKHWvY8FhqdnhsgBJkyjnqudtGJtWWEiG5s5xVyVYBsBT3vgh3PVEipGZwjkQJ2apW7",
  "key20": "5G8XbiBUM56Jfcvy9TjxvrozJPCLaeoSXJ4TN9WEfTf23nLwf2XaiqNsXmEufR8itUP1cpsUFfTDMiPG48x6punU",
  "key21": "5hxMrfgELU2Hw93T1h34bzxQBsQVEpdoN25CdovQkNga1tf53Eh4PCZaem4HvosimZK5hnctP6reG9b6TWb9NxHK",
  "key22": "572XEEcUJDv9jh6HhCsTUBrLJUK4zQft5HF4KfKrKS9rXAsAReeZxjds7coWd3erTv7hDHibUHEaGFNZsCLps8qM",
  "key23": "2vy353HoqsXT9dAuX5Q4YCGn14j4VyJXDE2sptvtP3H2yrUyaKQWCqgn1q6LftmgCwcDQ9ovkjGKWpu9CVvQvCdF",
  "key24": "5VK6YY14u2XegVjwA2xzXX3uEVBd3k8ko9ErMA1Xg6m9XvyCpxAVkcGZJcp7uwthM9SE65etoWBXrSdNwaTvpLLR",
  "key25": "3hjd39zGXdRTUxvsCE4zdyxqiQqheKJaKJkiL4HSF4nCPJn5KhdyCa4jVc8nxLWYHKY6Jzeq7budj9Q3JKhnkgR8",
  "key26": "3d3uPBpzZ41fY7Xp62SALxNmrUKx5vrnacHF5Ky4Mva4RcytBB5yxdANaqUSJi6VNmnjnqyyGoZyCcWwX6rNgCps"
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
