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
    "BA45ryCQ15dWkmT8QMbDxjxcJSE4em5KXFk3dFCGvJLGeLHveepqd2JfBSViEDEGC5FQrWJiG5Y8wS3HAKsMyfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KWE567v6pG7AHLcpyRwdvtXqYVkt7MKqrNm3CUJzGntHqcLDwnFf3AhYdkPWkPuBy91s5NqwqXuwcGqnQS87PbJ",
  "key1": "44Bw3m9zHxHfGHLwH6QQoSJnqU9rMxv6Y63rJrYQCxs7uMNmkxm3Yu2mKkUA72s5oFNVaEKLY6ndVkUWEJY13iuL",
  "key2": "5ZwbWEiyowi4qFgbT8yi4RJ7WFnejTppnJa9A6ayXRbXUWN15vrjsMNgMw3f6YawZSijA969aG8ypGeKwibov3gs",
  "key3": "3TcWTP5kfLGs2puYqfMScFUe8DzuGRKu2PQ5grqauuqCgSuHeoxRkp1wAvqim6qQcZ8VvxL7nsQKweAosgu59xbx",
  "key4": "4Lq51Sv7b1aMNMN37hFcAEF4AobYF9nY66ZdYU22tYYeq57bQb57EjUn1rQdtGkr7oLJyKNuVw5hQcvzk4TSJ8Yn",
  "key5": "4QoYoFUwWo636jtqj3HkyAZkvdamijoPCqXB5GdNLQgz9gHZMZe1F3GoDj2wtYPJLASRcx81KdprYP6PGU4SZV2r",
  "key6": "4ndN4YZQraN59Tmp46owm6K5T6XUuqRrYZ5Yn7vbQCykQEQjbXp2k2RGZA2vHpneT1Q3MYWaSmUj6fLNDoGmo5uR",
  "key7": "3yGaMEVJtU4hmpg3Zro7m4UHHkkqBYF6yrQ3EdTbzucL2wBwBBxBBr7DM7XRhEJZ5xhU9JmTorQaUTDr82WP2zdF",
  "key8": "5QPAWBuW1XqcPbetaDh7g5DnAjomqdqQ4mN2Ac5yMUtyzSevRErvQF1Shi54tvUggXj6qnmmLLdH89XCKFh6dhwY",
  "key9": "3RyVkxeKFS4ToiMdBGaUo8RgHabStmY5PAhz71xgqydJxGjrw6G882E9QdRn6aRnziWSsQQWpSPZSKAVu9k4qSjo",
  "key10": "5U5AZ9xPdVgZnLKXTFQn66MPJ8tTpYDjpSA2Uv8vk5Y8TAEknMFXqof1BtjXKdaJc7QNfJ3Ai9REtviVbuudwxQ",
  "key11": "4pjxJwJck9YEymis1uzBHMbJCxuknCiJwzGoUEi6uDq15GkXXoAhRT7X6M7p79DMbkD2G2zUtkP3hyZusHdoZAXc",
  "key12": "26ZS1dDryxSKdpV5gNw9EkjvnUW9DhirLsD3BY7swW9dktqjG28xRbTrs4c9utY8pWsttpdxgDGQrSCSSyt2inxN",
  "key13": "vUDmETgm9Bw2mnJYhrPKkwtfjkJmYdLsrfrWb9gxHJ4pGDqLZY6Ayj6jRUNUHgQ2MX6Qh2DhE2rWHTiz5j31vTp",
  "key14": "5C6Ho2QcCjZPsq6JedYw5gdn11GZyNfrPeEWm1chrz8fhWqRBps9zfgqGBBvp8f7x3KHwso8TZsqr4c1A8qPwg2F",
  "key15": "45PX6tMDbQPXk7Aqv8KKQAiVJJqeBszpDoGDa7JsrrTRS3v2QLjeS2iXqj1n3cmFFZs5qJQp6qiaQUgphEs3ttoJ",
  "key16": "5yBzCRphhc4zMW9ojamZXrw3dR3vuTS8LPQ31RogcDxzLdDjV62mSm7ZyPYzAJDuSf7Waf8qtHUV5x8QFyevEVmV",
  "key17": "6oJg4nMM3tRT24tmYwwYJgTJWSADQaK8XWob1sEkwaqPKAE5wRicvBHob4EFPwZaGfmEyCnEvB1QbnmVKsZKo2Z",
  "key18": "fdYXiNZj4rKDrd1n4XtuY5sgYn8jdsppHnH9sC8QRFfXZ6A2MwomGR7NZD1qTuGXXbYEecc6jrYKsMu4VcZToPC",
  "key19": "55FbdxjsjC4qCZTzzWoA1cJF1TVSNvh3JdYjQFsH9f4u8KvUNyLNCS2GeQgzAyyULPHTdLaDJYTaqRRCka8jPTti",
  "key20": "4hY9zy23UAWKJ7ipEM7xbwGSDVuWwyE2qKWyTkwv3kLDEE3uDu4hwrNNB5aZH6sg5Avk8axp8VKahrBSdbgpY7tK",
  "key21": "4wDPnzacRE3W5NtQRceWLJePXdTys8pysfJsT2uPwK2198YjwbFm1wt3FFhZDxVeNN4G2FVAqYpVHy7tivUY7eCp",
  "key22": "coLumfwGGP5W9nJWjG8A1DkS45iELcvP4mMwpEvRbyHfssrg6dAVVsd8Gc7ZBfxSdiUPpzqaMnEz4jYP16n9ViW",
  "key23": "67SKC7AgkxQt6RTdMPEyUcDN1aFhPSGAzUMpkkHuiTJkAE5j88G8VUbFP65tnoUSTgHpjVAuH6JCsZihj4Ckb2Ka",
  "key24": "2coWUzSBTJnEnw9XwdLjMa5o89gy2gkkNV7erRPZLa9wuCbHLcNdvZK5rDX6BP4VWBAp7Ggpmbuz6SPiugMYMduL",
  "key25": "52mbTrBoBRXWBHir11bq6hiUWLjRxeMRE1475tbj5JcT4jSn1FYFeqLjB99EkbPhSdBqtnudusSvV1K9dyRCAVsN",
  "key26": "583nACh63RzS5wSayf9susYfWwZ4LvrVo9qfhNWe2r1RCoUtcS1U87hpPurp9vZL22khB2Rjj7UmRvvR6Ja9v8sJ",
  "key27": "roYWVgZqgYpem1a4CUB4QCP2tunj1L4gg2CECqhg5NXhQD3fwsG3T3Cb22ZQtPiMTqk6yAmW84wA19xj7bC3Qu9",
  "key28": "nM9ZuZz9kRYV8rUB4hMmsADqMKXXTcNSe3mfJAQpktybqAkrFWY6D5hNQb45EqE2i84Cyzo9Dzjuzd1Tpt2rafA",
  "key29": "3WuEQDyu1QCX4pTtTkod2cESaBM92vHvAsVR63RJwqHN6mix2zEg5GF2fyVfWYyvCAbrEQRf9G1BJUVESgdBc8iz"
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
