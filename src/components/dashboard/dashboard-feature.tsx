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
    "4eU3xu5QYUjwzxy13bQzA3mXCNLdpZuVnybmFdsGreeipvza5kyBM6vGLAmNb77AQTmG7hzEbkS1R4vRPr12e2d3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dcJU9X3SiFw4qvvscaqDXaZJvapXXE2mqdtRjWKVJbgoyKu3VqPPCpfyWMrDD41rJVmuxyPeDqmeDnQWt1FzBSy",
  "key1": "uYfmwamphDjPcMyqqzkXCwEZdG7tt1aWXiQu9PEUKFH1AuKHi4Z5Aihh6i2Py5qsQMAfrY1UboNEAtJi4bnwuqo",
  "key2": "2vNLZRCSw6JwWC8kM8DUVvUxHHoYJHWJ1tUKVkKMZBfgUX1wHyQ7zqytFxiofzRU3ZWPq7SWiVGPH2AosrJjFjzL",
  "key3": "QaDjcWmGi8tr9YTVrZ2JQ3xjS9pPsC4FuFjGj78A4qiQmnsppjSMQHvnw8PcDWtAci1Yu6eYYtwQ6aMfoobQkuc",
  "key4": "5MT4XPb8wJWg7gKZDn1pE238JQq8bY1Lpho42mqVHUrHz1mJzeVWJap9Pkn6TuQ2tSV4srKgowfwnBboRQ5WiLKv",
  "key5": "3av9vMAibpzZYi4ZEbn8SsMtF59WYEvV7yyh6Y74ve1EjgMSnDaYtU7ffhzzAiKttHhDKCtB6m8yfX95XF2xRMCW",
  "key6": "5xtkZoestn4dXfYkxc16hFmYmdbjAiwB66fuMVGRZrYXKJwkgR2w3sj6xNc1U4z8TaWana5ZqAnHqtCaHYBzGQZH",
  "key7": "4hC714VjDxyKuxrEa1QxdtRZzPsvENaH9j7ZKZHRMMEiteHKQYXGDRAW53Ru7eMLScjD75jRucZs5cuk4TBSg98E",
  "key8": "37s9VAovHNBSNGAeNSXHoiTySNRmoxJeygJz1yCsnhZM41vEkXSstCn9YNb9f1zM9aedhYeHmf2zrjqJpisgq7xu",
  "key9": "yW5E6jWqroE1d1FQMqK8ezLEQvzCnAaqsFcy4XLtoc1bEVKuoEdBV249FzRbdJX4CXAZB1tcCz3Z4rdCsP3D8Na",
  "key10": "2M2H8xA6T1iapAco15UnRDDZMrQhCNrf1avLTfnHDo6rAfSRob2TFXoF8HMkP8nAU4EdT2ebyauTvrqR1DBVGhcc",
  "key11": "2gCEEYjDYeA886y4RGKdkFqBVbvSsNH26TJsbB4ZoJL6uhaMTaUrZPJ8aeqdfKRfKkwfAxmAKYnTNtiDDEju5P8b",
  "key12": "2yRPxWhguQywKH2zakzZXLYDH9MQ583m8cH7StQC2UtBWC6p9NucNvPF6eVcwVkRY2q1p97hWUGvmwAbsrUKAxqS",
  "key13": "4C1vgQiqEYoJoLRXPTmbSVpqrZeYyJMjB4j5JQJ7FrDFdqhdUa4SahqGzyhs33tcLZaMmw3vNgewPCuMiWcrKeYJ",
  "key14": "4QhfXKVxAJywDae2XGdMWxhdt1DcaaLV5Nem52aQShjk4wmuLBrErFm9hKXXdB7WYJpWJWcQX2dwLY1EAomqjVT1",
  "key15": "4VWKWkmq5AptuPEWjhoPHxcMW8q8azJzdxmDoqzK49syw3rQ6xr5vrRvQf5i3Z38iQo1PrHuKvuAA1LNKy4TF7bh",
  "key16": "34jjpvZPvSNohcxZkbiB7GyyiM8uQGjBQwvmSjmzxixTd1Uamm9GprQ8jGv6QEZudp92WLMpqLgPo4ahDscJnFmx",
  "key17": "5RwtKSh9nKZJEoNBSC2U4KtoiV34pYBTyaMjfU1VUNi1gupstXAkQiYZPRptZyRrRRHiFpqM4trUHsNEysVm28H1",
  "key18": "5EK49ZsGD9woEHS1iGAi5uKi9D1HuiqZnFwNabr8b6mqeYMSH87rwdKUGH9Nd9p9wjfUD6qbb4ZqE5zK9Yx7UU1f",
  "key19": "21ZHewo85pTDkhCwiyK6oQfDtaaNfhXrkA47JXYJFGHRR57tUAcEq6oAnQKhkTqtWjktccb2e3aVFyDXGfXR8RYj",
  "key20": "36Puy44EbLGKiLDhBHxhiNpYUVEvwT5Et6c5H3tpdViHfgV1nTxcb7RujRVTdAm5nWEMYmxdib6oh8hd6EgaH27Y",
  "key21": "97toyDUX6rXQd4WxfdRsKMGFJkcsGtCQrWhZ5voH4PZdcVDs2a5m5CqMMaCXvY1dTdkHTYVbgvR3DD1CG9bx9vG",
  "key22": "2BWQqyJBRsS2k3vGwD85fVFX8WuPE1tncuVf8s99gVAGTRNhevmz6vz8LsXYUmVxHacTUdK29gW4xobsegQHzYKm",
  "key23": "5TYr5eGBF7opmzQomcJiguC5U1aax16YpU7NPkaeY2ab1fRXwBVvGtcB8rT7ee6Zb6ho1B8PEtf8V8Cpn99fsqit",
  "key24": "47gdTThozGoYA1XYsYjE3jdmMzFY6MoPVnKKA5mPzeR9Ys1ptNf5s4ffWJcpXJLpCWDyaKBJoerEZTTbRiTSxtw4",
  "key25": "5mLM7fm7VuZComRE6TJ4KaCgThQFtyxQKUJE6foFtrnAgJvEUvUzC3CyTs6ofemifCvdux8NcPSVPwT6LZLYne2p",
  "key26": "3epY9ZXJneguJ9vJJ2jT2Rz558MKsucwyQmcEjDm1LCXq7UxjsKpw17pcravT8XTSvNRL5xfrgx2jrrvvPLBEHjD",
  "key27": "2ZutVBzH7UDo9YxcWbxvv7Ea14xCsxQ7sehY1npKbXUQcS1vvmjV4WK5YG8xowSGH1pBqEQgDxBiBwujsx7Bz8JK",
  "key28": "WVxtrda6C9rfzaaRQG3Vf7P3UBcnNjFK9kQMq5jtfg7vhzDFUYkGReFpB8fGbZZS4za8173TFLbtZvfGoUWz7aj",
  "key29": "3T6MgTjERQ5o8KshkWdszwcJ9xoaMkejC7NEzCSqArVKXKFxK3RwmmuLpJfAvF2uGyTVVSSbUZ3Wrx9J9jqRbXPH",
  "key30": "34tTKNHNqD7q2v6FUzjfPyqcFZXkHDELudM7W6cgJVETJd3YAsrech7c53Dd1nnjjoXYBXxgZNQJkasiyrfAX16p",
  "key31": "27yT9HVf4ux1rBm3nbTvpeACRBwjL9Z3ZnziuinyNZo11YhngM8xyg33pyLURobaa2PQrBU9CoJCu6K2Fu4KVbrF",
  "key32": "5L52YXF7PTi6PgVhSon9EXbQvHXGtBfvSY7ppc1NMCEdv9PRy8AfswWYqGwSf2JbzvfgSeHBUzqCdya9gowWZNDM",
  "key33": "5iVuLTmoyps9dJyZeFbpTG8YvUdWs7UJHh6ePxUZ6rXWs255ZWMc53t7ChCJi9RTjxQBgsV9ZYgXuUhruepEotde",
  "key34": "3MWZrZpYdupmaFehxs9ERJ3ZPMus32mycDeFLpgoPfC4ArrwRQ4xLASg7xaJAPMZgRnr7s5ZWgA9mhdYy8AFQM3n",
  "key35": "4CD8E7TtomF2onKaTNC1eCr7RpxZVVWtdGNC9rfvS3hrZFioXxsKrEHpmj9p9QJDVX8Z4DUA7YXBexrsNWk41m4W",
  "key36": "4EpuTMT5fh2cDP5QgDFjMguQYcKwBfGMAxkmx8SntYJR6jV8eAyuyxvMccfUzipgBFFhCKyVDrncKzNxmTWwmtYk",
  "key37": "3VLQD4L4895MqGfiNYFLx8mjGPMhHCjHkoNSSYXCVsWeihC7ymWgqLz7MMJ6WgztojkYnnqz2MH7JhskEs6Zw8S7",
  "key38": "3X9ViaNB1N25j1914PfoswJtcewdiQyrAxpTMijmHqEGb7owDjCLCbVmqG4hJGsHT3qozc65GLBV6DcGTvHgBRdm",
  "key39": "4kNSYZKWy7MyoCbkuiPtaxxjHePrrkuYWE8BzeDgYhbAzoinqS3SSkTXvKUbBKQdLj8pgCGfHN7nkUXuKafmCsD8",
  "key40": "2Wu33FxCH9RVVME5kjaUAs9DwFJppccdwRLFjAMpUxvBDCxZuz9MVSwuCJyNWS3Qx3TNMeSjUgau1NVgHq5Qpxys",
  "key41": "37Z9VTRowCKsM1eMCjCyDPkU3d7Sm6F9CaHNNhk1e7eNY93hmddnGxNGDP1azwbFVXyKJb9YzNo3a6AhyHkppXPf",
  "key42": "62CuNJFcaEbooKevKRG3h7bkmLLV8mGag1YwNnHJAmApgFrRZAL1qKQZrqVdDjM7qbm5oUpNwY43EZizmNNfVBjK"
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
