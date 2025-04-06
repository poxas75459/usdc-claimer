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
    "5kH61YeE4vmG85mzPKanQZuegR9MxU3HnwSXwZG9JQW87ek8NQdggyCuMGJAAY7kywwUVXL15ENwuio7iqjsuF79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rR4rLKmKbAoWWAxxB9qgTsVN85R7AjugpRSpi3UAUeGpCydmum6bHqXh4Gfpx7aTH6Hgznw48kDCYF7RsDQuPYG",
  "key1": "2fPYuWfThBKrKwJVEquWzNwet1ZPURFhWEctJSct4KXrnpZdaYQd4mUDnwkpNJqacrrvY68kvgYzYa1S6BFnuNwD",
  "key2": "r6QWYaieVcwdmcY9b2owqAZx2ko68hVuq5WsZxwWagVVcFrmyL6k3WiMEAqkhCuEFCMe9vEZDCnaFgNWEPkqmEX",
  "key3": "4QMxo79dmgssjLTGcH4wJzybWVcbQbDgFDA5niducW6pG7AbHmGGYY19Kdwe4Styo8s649VP1fkh9uC8FHUVjHbY",
  "key4": "o49zfrnEqHLDH74U4SDed8eC6mRHY28M2dmxzsAe617kzcSx4C7zzCbAjcLmC7ronkBdGqZK7gDaK9wVRXP1JpN",
  "key5": "4i5eRG7biop1mkTpDba8eT45ZLfepP8BgG3LqGxH9Tzzyzh5FJWr4WSasH1eX7iPjdsCJCzfPF6fwbc1WU6oXjGQ",
  "key6": "2PA5URDiDQJCcAB2euVgfDNKdMJpucENRpMhoBn7bdx9qaAS1ixdbicVaRPrxb49UohvFxvPd9QPfSw7quGLzxwR",
  "key7": "65GbjtPMYqDEiCjffCkXVs3Q9BtXQR8ptshfVijVnbaPW5DBvmj4doLJPKcEPxgT2oTfhx6SZPiqtC1MzH83Rg4m",
  "key8": "3uhdfSWwTmRdFx7TaJ54do51henNmZ1VG93s8BQLF1WKN1iS2j9R5v5RFZUv2yqNgVUMfBafqgeoJhr5uCaRsWGm",
  "key9": "2FatiHJLr51nHrzcdn7mvL5BhQh9q5QYYJnTDCfmxEqSshqj9AzTEzLMKfUbMdYMFBZgXjjv2wi9QgZVA7CUgwxA",
  "key10": "4Lyz3ecv8ccnPAEmM8f8f6XZ6L7VwRy8DL4pgpsjNDh71AXPVS5XkzUxVwDs1NjJtQc8jXhcZpKL5gtFcFFDigb9",
  "key11": "giJ6t9umkcRw4FdVwiCDV7NugGKBkTXtsB9TkgCX5yeGuniaLEHrowswhaoXS93c5P7XKwJK7qSnp74wZe1PWTu",
  "key12": "3VThsLF8xBGUgBaz1ktTjVE2nuXDVWhR7BX3gLjmE7yrQMgh8pmAvCYKeJyD1Pn7gfZitgmxE1RrTjhYr1ZcMuY2",
  "key13": "33GVHgpNtyWrqzV1CKrwfXVSV8dqG3A7zERDUKDNKEAs8KdY5Fq3Lf4g3JzM9xwT6Dc49DMQMgHNUJ7DSnnfjV4",
  "key14": "4enYMM1NEytcbz297LaWnwxYH3onh1YUtubenhP7QxK56XYze9XrpbgQAaLxzMRpGVD7quiBFwbiSEzRun8bjGuZ",
  "key15": "5A1n37hRYM3KphTHY7MZ9jmvhf8TzJmZXUEKcPd6wLg6yCjmt7STKfveq5rAQ3UhSw8YdDb7RorySxqeokMnW1gG",
  "key16": "5NM9cqibhqJmJSk1UffkME6D7c1zytbT97jiJnJ9rW1f7G4pnXTFsu1DqqVMnQX2dCpP9pxy4YhZ82tXNTgbX6ZT",
  "key17": "4n72frWmB9muSLkzfDZFBvVQQnMHQEiGWjaUY6aGtePxtfcznEAy17Z8tcbkYeRHHNLvwh1Cy3xbQUpcsAQNh3fJ",
  "key18": "xRhukp7kqMcYUEkwyukmN8Y6wVKE1T5GvM1W8SPCaWQXJzoMrxZWP8Y6kAMtrHpX9yC9qw6nAfrkBZvt8G2BCfP",
  "key19": "3oC8KFUTaxwX8iKvNM9Sd5UvcMSQdhn9pHGX4Godh4bNX8wDEZyF7VrJhtartdVfJWfrAJLQyfF7m1Fy9RynKCtv",
  "key20": "3Wi5qLCqJz5wo3aR7e7nPQKsT5u9NYgPsi8dXnVf7MTA4v7X5njUrnxSKQhVgKtezdXK1BVPXuQewxz3oKkZjsHD",
  "key21": "oLEfu6SwyxDuDwm7ec6tAamXu8g2eGQ1mBopKjva6tEAyBqfFyjSt3KJpRVGoaobfv1suhgEGA7RS44Asx1sRH6",
  "key22": "64xjPdt2weTx1nQggV3CWZPnApLijxgAbbrDnGpZdHp9CHZaBKqPdgDZ7bL6fJafe6jz4Uqp1yg8VrmMgqwkNfD8",
  "key23": "5sArCKHmzD2Z1DwzGFV1orQukRDKTWyvcmfkzFwaEBeayQ1CTETU81zvSoKQNgNvW3uyBcizEfjbV1Ke8p2HDg3U",
  "key24": "3Mkzi4Y4iRPoMKKBsqZ8ZjaGeyeYSKXnphejvAjErvYke9zJPHjZ6dxJVPSGXk46d2vXmzt5zFs1NmtYEPFRspi6",
  "key25": "4mgp928oJC5XCDsNFNG3YkjkcZ97qNHcZPcgLKKEVp9n5FNk9Mk7jMdkMp7zdtRwoYWRe7bAVANFd4miUTdqs37C",
  "key26": "ptWNbqivYmAFYREcTa8s7SyKwS7husGkPcqB19qADzYwoMpbKdGKenQuabiTpuucnarSUJaHXSCKJKoA813tXW9",
  "key27": "2c5cXt5U5qhQarmGgzVP91VXLaxnate3T2LAJ53czfZq9wEDwCcEPVYTV2ZXwENNw5MeQuMpaUeEcv2942wEK1DD",
  "key28": "3ND31Kzu1qYirLybQFNd8N5PGWiijqWxcK6mNh6VBfPBLWstnU8n624ma75JD6DZxYLciK5iWQ1EmJxUBDqskGPR",
  "key29": "T4Una3YLF9mdTGeA1zrw2P5UkLy9xwg8YXRRLzJaR9XzL1BCQQ4z94Dy1J8SokqpPE6gbusKA4JfeFQE6bKip7K",
  "key30": "3TUmLhcYovbisNkeagBmr2HR7mV3BViJgQZqvwNKc7ZSKxy9nW89SpjiebULQ31ziJK9c8HmfVjGAFDAQiuuXTpU",
  "key31": "4n9r8sY6bYMi5BUqKBXB41UJrzt3nP7tdoTDzWs7q1pHpdMz8AD3w8bvcPCJxUmLCcVSXVWnW2D18BNqAcFD8CUc",
  "key32": "66uE78cbcTwKLuQiyhgsyh36TG9Kw4w7bktzcttKuCT9ZEGmT9NAWtGMgrtJ7UqvbZXCu1iamuauhM4tfDBkpHtG",
  "key33": "3EMUczVLLeQCaVEw14gvdiSkUHmmmq1w4uzGsMzp1VGzXPts9mG9ACn5WzP1d8veKQVhuAcgCAz7CkbdM6WSKHgD",
  "key34": "QyC3nUyvARWVoN9XnhyDR89Ban9z5fh7EcQB7cGs2bTnFLFK9PNtWyXb4MaUQp494P1r94LsNsN3TNgezqfS3R8",
  "key35": "22S6f4oJqM3EeDzUv5odEFFhhPkGjyuLxQsc4j8nsizS2owAw2CpMM48tpXEX1DZCQmeHN1hmHAD5B34vm9P8UUc",
  "key36": "5PTk5x5rEyo2QVUUrDhF44zAodRQiTx5Aa1z479UeAdtX64NpMGuWhANLjAH8iAv9wdTcW2tPYAUiAffYpioskeU",
  "key37": "5N6hcrCJBeLw2Uvicv5xbFFzrczUEDU6YPHCheGkn4SdDaFDsS3RukUaUmzhZfJxr4gmakUrizjwdizgT1YoGoMn",
  "key38": "5V6FnhwqRoDrxfy8z3RsyDvukuiH3EsfgTqm54YzKzKrDhZr7gLMh2FGRFwKrni7c6UpSEpkkFMR3qFMCyYzTGfy",
  "key39": "2GxMPPdQ85MyffZMe5jb2RwNVhybkCGd3hCSsBy9mXgmmm2GbG2NL3Bxf4kWgAsBbAGK7k58zwhwuXVRLcjF7eG3",
  "key40": "2XUooXSC77X6hAaeHD73BNLVnGbCZzL2ECvYtcwchJpvZkmrUs3QV4gqRkfi7wCF6osyHSiEjKLGy1F5BsLEKCS2",
  "key41": "52G4v3RWH3ftCZFU8feV6csdMteFLMRJpvcW2w1B9dBujiekX1U6vENFpZd4sFTedrJYqv8mpwAKskopcKxArR8T",
  "key42": "5LdRH7Dgwwc3CLdMojHV4GS9tDFCXqu6jhaZHKTy9g2Te6BxuuynR5ckpQdXRT5uECmMutqYXJDyjtFbJSCZARwA",
  "key43": "52qWg9pBkENozRqj7Wf9sHcjZ7Bjahvf4MLPGzamux812s89VWC15XcbN5Lmchukpw3464gfTaC3Rztu3umEfUud",
  "key44": "5N4CMmj4FiwXRJPX7MzisZ1G58ZSMRc2WrfJg4HhLt3Li5SNa9o5QYHpPV9uCWhmKgqVY5cYwiJULrJqHVhqj8Vn"
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
