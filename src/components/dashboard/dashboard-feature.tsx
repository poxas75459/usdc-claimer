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
    "5teK7XpE2bXZUcwN6CDzMdWvYeUATeL4fxkQoTzJRv4WhkQAUyfrRnn6BvYj5e8sRgUeiYM1aGmFw9UeiyPYyjBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yP4maP1AuAwHZEbiYquScwmPNjY7C4V5qYf2574HAShQtJ1cgVoHYmzkbPpoFpLFrbxV8CEcXpEx4PfzkbfBFQ",
  "key1": "2hqumsKpzQWP4XHLxZBoPuQ9JDWpQKeHuGSRUDZz2suofVqD2AtZtS26EQfVT16uZeJm63kYYaUWUkbzM7CPNGs8",
  "key2": "4qYXtFEoGjpwk33A4bntgme6HpEHE5rxnTMbt6Dd8da2izyqNvPwHUJ9k17px4Zby9t3NEfnvWutFbBmpkLHpuYH",
  "key3": "3ZqMs5MgE329NHWZkmTSqBoo1NcX1wgYtJ18ihkj2pUDp9JRaqHbekXc2S1Rwmkod7HfjwGsTVptsDPCoktLHC8V",
  "key4": "eeUn7FhhbHCA1gny8ZzCy4LzZ9NmJbDtMMhfQmvcDXee72dSU5K2eAqgyDNjzqrDU781wVNcx6ScaHbXs1fhqT8",
  "key5": "3inFuLCDhvRgaS2yZ8kxUYk2F5iYupwdDDgqVvh9LYpg2Bww4Qpy9YiGrMxwxttw5dpjvLEENcUMqeLv9KwYXZFR",
  "key6": "4J1bfugLyXb36nGhDgsyYghycUp6kCH37uLxLUvW93c6cM3SkbaSK3T7YbYn2m85GWowdtZePug4vZUXDQk7Bq9Y",
  "key7": "CmT9qgKY3nsbSL5hHHVCTXJF4N3vKFGQWLPhGUHouqWf9HMktqQApaxKJGfmema8zc9Kg9D4ntDvSyUnfhYDoqP",
  "key8": "2PSZosTe1PwkcBP4aKivHNa5QKwxs37c1uHJfQB8Wk9gjxs5NV43vezgnWXjMj4GRdT1EU5eh4sWHM921vb6EibZ",
  "key9": "gUz8kNJztN7rsvhzAvcqv1pA9ZXLjcG9c2hkjHn2ozSARkRtXcjY4bkk8K368KQbPxopUV1AzBYLx5AwwHnxgZV",
  "key10": "5bmkSrweVKfyJzvecRXGrsK7E9zKCoUrhfjghVuECaK9LpkJvcLbYkxj8oP1NsFj9tjrXMfL4kE8ZSnsvpJmiWuv",
  "key11": "2uBDJajEq2EvjTo5KSRc1XDZWjSP1jdc97EtAN1FJ3VP8pEPBt74CqCXW9dWYqoRwWjddQS4u9JcFwowuhbqTHoP",
  "key12": "3anvY5V6jdzrY3kEDsZf9EWUUn2wFDdzqgGZsa3ZqgR3f9gCm6sBWpHcoQrJ2f4SXm4LRT6dufjBZvNrXRkF3cTD",
  "key13": "z2jC3Qz81edDoKUqcYquAFAvPvsY8TXTBof3deyocbB58ruL1AZ9GWmoVbjAUzjjxnccSt417StomQYw4xv3BLV",
  "key14": "jEV5yAXTv1o6pDNoD53JgADRBTkfewE5SaDYDAp9WKyg3ecYKKKK3aNDt4ZCi182L2deCLyCmtSiX3sf7NuZst5",
  "key15": "7pzc8fV9sHVujQP1LnD5UsNpnoXJF8QnP12fUnRveTnw5BU1Bu2GsyRyvZXK4N1A4euFYFTjFVUFjTecY5sRYUS",
  "key16": "5EEBfzXAUdKvC9eQT34a3nUQyJTUKH1d6d9twGrtVKyDXhVJqENULf53jMLxWPt32mjwpDvfT7vBsGt1HFTLjSWJ",
  "key17": "8dymHuhBrnYumwr1WbZHijELjfKFaoveDCpVaUsgGudQKDc7jR4rr6Ubt9RXr2TAPaiQjT7fxo9TiwmshpksfcS",
  "key18": "5bFpXsyVjkSQ43j8fpsmbBsBErCcttyDahsD7G72SWdCPnVpaZgemRtP8CKahzHuCUP49eGx958PKnRXeVp3Xsj7",
  "key19": "S9sq9rAEYf6Wck48BNJ4LgxPkQ9jUQrqmiT4VkJsPcnuKAMqiejgL4ifczJyaqQAugkmokVoC5SoQE85aVEN38s",
  "key20": "3WtR13eTjJJZtA5Hez2TL6MHos4UxjhGenFaDvYB1jQg2N54ALMW4QXcmZpStex8FcsZYx3EzVL7PKy7T8Gse1iU",
  "key21": "2g62hXaxcSY7kRFAa6ugZj3UXE6DMoZ25JKnkp86FUkccV1hGu7TqWoj18e8kgpULKPJi3Wy6qCv4r2arD5wUfe6",
  "key22": "233AXB77B6zFKiKzrMWAb1bU8W11wf6NC9aBsk2kriwMfoVTGBngsrfQaLaK23YFdw683Pk54hVuon64L1erxgeE",
  "key23": "2cZpeit8RqHAxgNt8wCWnMnFVkkAk5pVu5t3qNGBC1m8AfTgomuNL9h1CEAbf5JoZqFhxE8eBwuxFaod5eYP9Juf",
  "key24": "25tCZ4cd3vZwgPjTXLM5aDSpKvGLkmy5VvWcQ6U2v32tAhx9NgAdmnced47jGB4eJvgrzpzWfY3pQ5Woxx2jYQiZ",
  "key25": "3EwUpJz2Xq2ZuHxkqTV5hig1JjYDvCYChvs64ET56ZTuiBX36ao3BipwP46ntUPyujcpgMQNJyM4XZDjc4W9LxYC"
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
