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
    "3xMh9eZquUNGQpCd6u2uG999mt2bqFepUJXLF13B8bVBqqoB2Adxtf44thU7Nt27YgTKF411Cu8JLFJpPAZGji47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AvKRAGy2eAx6xYt7uJyrfeqAYuKuKS3M9GasWsgFKafrHL9ENnhhMphzicyViwsXLrVnEEhwVDpp3uD5KLqkdBN",
  "key1": "3BLjCYv7FqtaCXPt1SMm3fSWi56gTaiKWtgjY6ZJVm75ixfLidgzz1dmwU3P1MmNbPnJQJzqU3Grzb5twmWDxhJj",
  "key2": "roNZiqVWK8Gpg5CouEAQRjG3xNgfH8uZU77XCFUXadzbvZqxpyqzN57hiHL3QqHiFbWnPjwtf5aMfcpkGeEdtLE",
  "key3": "2FUBj12GqRuiFmPizAizVj5uNyqC5oVyHz6kdqQyWPPjSogZpu4HAz582abiELZndmBZoDQpJELRGKTzBKx4QdWP",
  "key4": "3RwZRrVZPVS9zYrMYSnWQqKnUXDJZ3uEacPFwoSoEk91xu3bTL29hVKbAqG4Vm9x1GsJ5xoGJh2PJ7mNsLzippgs",
  "key5": "v2wTgJySeSVeKNA8BhBK149xQUfBuoTfhtMBX5NxyrWvK5mzTspnXjHek2fByaogTq6wBdw2WVcrcaecUmbm2Xf",
  "key6": "44ciHn79pVKjWoMCGANWMAS2FjbPZoio1rzjwdQpYXSEmKEnCr8gAnaebzZKqXyJx1diVDt7zdjRFXxz5Cfz43Hm",
  "key7": "55ao6ND8uSPHnLYw1VTwiGHjAyzNiRs5MAo1ddVuoQfhaXN4S2GqjWjwJwdonBStir4E9LgNeMRQBP7huGUAp9Hk",
  "key8": "3vqsev68Q1JvDn6GNhUu7GSu7hNEjn5BLvHGpPPagaAwn9xsahLYk3yUJ446FqVXtgPUoqcDn69wnbvEhKw8NDMW",
  "key9": "37S7Y9C8jZGd2UWSyxg7LGAobbD4bzWBqqgcjTLXArRV2XQhUnLFRUPYVrcnzkh4yRztG4kdYmNMcJ3PYzNcWPdA",
  "key10": "46zoTCMhBhwD9x948v5wrs1iGk5C2VUDQN9zEJsGcvLovEhU228MwQLtSfK3RpxHQByHJ5Xd5SUkyQ7VmYPHVym4",
  "key11": "55zWj2xgALXLjfmAYPcPC8Z8TrT5ADxK6WZQaCBzRw7hWZtyJ31vhmk2UCUFviYex69YdNcfB6gw1CdJxuS942Tg",
  "key12": "4TiUo1mPYbgRVVaSpuDJd917vpG6RTUquL8u6ErqraHzqH8Q59dNVg2Szs7SAk3Fqz1AmNbpoQb89xLMmSEdfBqU",
  "key13": "2EDLtUaqFCg1pdzjnTNxerUmzxhxtN9mScz7SBURjPYs9sfCpimGr8ozXdCt5TmeNXMPncwvATVunhrHRtdWoeJN",
  "key14": "5SaYmUTHwSsK1VquT8HqUrAXSQHwJFyLj8zxaH7StD3PJ4wuPz4xkS6Nww6WCXmxpbZGJGLaHVsfXYa4GG4Y6oWM",
  "key15": "2mRfKB3tgS5W6q5T5gr2QaYmKbgBCHEFgxhcTQg5dTzZzv2XvZWcjpiKLmsMTiWBadfsBbNZaZ26DWUVfquAJqdJ",
  "key16": "2gbt2VToYo8cePy5A8k6uA4GtSEkKNZYUiU8MW9neEcfmLfxLfd6NucpDw5o9u5SuwrXLjnZuNjZfaF4nysQ7Mux",
  "key17": "4Hgp44vJtfcYQrDfzYPu7nfuGYgcGfy2fddfdJ3Bs83qncdKqX81k6FohgWwWNnG41jEZYMcxExsDDeig7bRfjJs",
  "key18": "5Df5eSbLnckXqwdYZxX397SrfrBTwKHvALNnh9BBoii13gXm71i8D34uX5bezK64HEosBifzwYLQ23jzCyWDXXwa",
  "key19": "4SCFKpnj4Y1HtMaHS3AppcRb2WxCKJmcCFSaFPet33stP7uX81jqTYA2L98cZKQ6c2CBXnPxWaViLTAjx59GDgHi",
  "key20": "36Cz3BQovY4BeLSiB3AjkNVaq8GQjiJAY7nFqxTfG2gvyHdbiZyJXfEcqYEYTmNqsF5tarzcczG49xHR3NC9K1A3",
  "key21": "2MX37rh8huvALTbH5dSiGq31efQnUiptwak75rQnZTaibC4MTUoUt6fkHbsBZTvZHVRhpMSQn8Tx3UnusMvjR3Dv",
  "key22": "2gFtkYFr6FCUwCGLehrxJR2HnUJ2DPF3zxn6NHTFH49Du9Nv4CeFvCZHiyG7CbDc3GhGauZdAyGAmgWxxBB1FARN",
  "key23": "2zu3W8qoaQNo6GHpzbtsTKQVbEfGbYVVnx6NQfH3WTqa7EtG2V4E9U6audtxdXWJ91mntb72KHWgjvahzLyS4DDh",
  "key24": "3o5FGkVfpuGQqvMSireQqcnfcSPBnbr3s4TjKBvue9gh5VHsJPKhvVnxKvoFp8gQ9BFHDjwZdk8UK8t3RPV5JT4p",
  "key25": "5b3ZA4cLf71YikBFhCrAgFHfsxU2q2kNpxZ41RRpqw9TLynYuiURdr5DAuaNumhyMSAGTLZGUSnXcHunTM83LKsS",
  "key26": "2k5b9Ua9VSp6E2ZTQiucvLK7eeQ2W18cNuvypbFUiRfxizvsXCHrZ9zaduiEyV8AbgUQGW6FTJvBdjTUGjdkXzZ3",
  "key27": "LtppGuD9bcUzLFhUL8AaRvZQBLS9z5c5S9e85SwPnC1DiG57FsJ6toSC1fA2XQvFfYcTDfi5VufrP3GNfqMZzoy",
  "key28": "2hFXuV8uGzSiSfLSTAc2ZYoysbRASRLHtGPtWTNosgKumtapNq6aCFos1jveusS494Y8hs9DP7Hr9rAFcXDHtvkm",
  "key29": "2DBEyaWkEockeiv3hR1riNXeaGHzQhhuRLXHaAuiJtUzMaYNpbtGGZiNgX6oSgdavDxRJYAQE9YurfyjKzBHQfZr",
  "key30": "3Ybyu8WXUrpLsPGgNyeFnirF4cUUv7A6o4dfSwzaXy6qouGXz9QLNtAXHL9Dc7pN8TcqiZXF9ZwEqTUZm2JEEDgR",
  "key31": "3kfZcFFWC8ZsHR7UdeR314m4xohJY8xgGWtrWq8ka4zA4XizRLtX9DyB6JeBZK7ChLoyeKtRN4WJGYbPRAQMj4Ab",
  "key32": "4zTgndEkx11BTpU2FM219S8EcQFWVZwZf5W4PSd8SdShYjMHuY58AnzzAtRSDEx5MR2FR4yH1NZgwNKgowhAAxQG",
  "key33": "Sw1fwwivxSunF95pedKt3gRrDzcaCHJz8uZ31dJreHC1W2aw1wDH52RkRBzwvHM19wHoAyJPZfLNDHePuqKA6xd",
  "key34": "Gut6fd4MPL9NJcnRJHYu5ffx15mqsGPJEmDCzUXvhsCeYF318UGe8ia3sPQ4uNSvJ3BwoN5mjXwgYQ6yA1daFh9",
  "key35": "bNVq4mYHC86eymDjmQSoxTn3xgJ3NdF8fFd8N489sbR3yK1MaUoy1BGmXytiwhiYrkA3KonbxXz2qVF7eaPgvox",
  "key36": "5RVSZ4uqrLcafJbNQ5RXfrx5xGAHqci6ezHkDZE7Z28gEXcbDme4rB4jNRYoBKuoEGfYShFxRB3tW36qhxn7dHFA",
  "key37": "5RyY876Svs7twCqepwsNyKuKFo8r2nYZhdxpUUVtWLBNQYBkyc4XEex73mECZJ6JDfjpehBQmb9uR3KaUrdWuYLX",
  "key38": "4TT3FURSB5R86x9AReCttg3KGp8LVju3wxa7AwwBxzvLuZsyrzaaEid6drTJeMzhN3HUvMdDbH41FcU7K2s263ZM",
  "key39": "4q5eAmzfFC5dEN5KtQ4NVCD7xLoBKRGSM8dUGhFZd8we6ZC5tQbLFct2Sv66zjR6vpBJ1v9zrG63XZGAijDXdZ6u",
  "key40": "5Bti76YqEvsQ362MU5nk9bRgVozGDMSvLaPk6cNBRDmFNACewJWJNQT5MR5nBGhXRg7BCMKssaWoqupacRrcNYb8",
  "key41": "2YfSn7S7xeMe76gcAg55ZqvorjwZAfhJ4AhMPJGFLEwUW5rF6LHu9rNjy2dvYXnqkEyHYn4zkiwNPA5RhtujBoeh",
  "key42": "4r5i9oVCdvcmZgt1MhBHCo73bMPZBQmWEjBCPi2tMVCv1scC2iHsENJiKwBz64ybZYzT24GMkwfQQu6eaTKJ6nRG",
  "key43": "3KsVHXRrYRHnrEzqG8NykHNQTMeMXtYNcKS2bwqCRZ7coqaYM9FcVTEkyxpV7M4J6fEHE3w1r47QqJSH1qZSjStM",
  "key44": "2aWKzTDorf81PdVwh27VPiaL5VkjECpmfHsGAAoRh9riCMwiNoyysCBgfdwq6VUJ2o448p8ER4ndhN5wnv4doRkH",
  "key45": "5iaXndPjAtm41i6NNcbHVJNNusHWxNgdPggbfFnXARoK1KeeExAqzsG9pivpT3R5PUmAppwD88X3kpacAP5zdPQ9",
  "key46": "5JHganh73jSyigBwojQPbREkbom9rjwj5cg5AEuscZMFm3WZ2DCGZ9QS4kngBrqsoh7mvXzJ7QfuhaygeSU84h4Y",
  "key47": "3J9CqJadCvvqs1rSt3xjUGEf3Bu9ztt2dy36r3UGXi9Xjj1chArU5pbL5roTZmtbaU147FighSUTv1UBHssp1vnz",
  "key48": "4wSMCT8fCovLKP3MCNqpWP7c8ytBRq9raAU24po9jzCd5PioKJgWUEAKPjG11MrUFLC6eTPwkt6gPSqBo5ZPsBKD",
  "key49": "2gH9gy26HPiDhZeYWtxtGrTTSmiWR7FTah5HoHGpaYma5rCcLgt5Cd1uSnwM3f8MPNRRs7jNyYHGbDdUKAZ7nwcY"
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
