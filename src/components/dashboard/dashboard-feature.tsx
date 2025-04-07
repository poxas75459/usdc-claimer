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
    "bWsdQacWfxcDUfhez2Fr39DuZ5zz9T1wcicViHwRCaZo7pR3MXWt4bcdTHZQfbVYHFiomMusfhC33NqiMyGy1YJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ohePF1L8CLVXVBYqvf3wNUGKNsPseTjfK3zPiwfbGjyBWsCWLXS73v9v7yVD2wXEJeyVhPfN3qJgMkBxQimjxbd",
  "key1": "44ybQ14Uf9Sf4RtEywmt7vDMdQpkfK5hW91eYGgwhqrUh98UzZHgv29rnvKidkwbMXxuNQ43eLxwyvu7BcXWAPce",
  "key2": "2gZ81wkmTAAU7WTy5cpyG3EcBoryCZLVfSGaG2NYGzv7heAYgx9QuoWTU3cpbyH9DZ7JKd3mJmxoQ6xCeMfPMyra",
  "key3": "GudK5321TmojoJccUBMiGsJYVnLxYPLH9hHXuHbq9ffrLTPpwtpp5jp3AoWx2zf614CXUHsZsfjE7KLGZXtqJKT",
  "key4": "5o18QmYHfzWKQmhD2uebDmGTn8Q1ZToxaaP5hmVZm3euW2F7eFsnbGzUoXaptCHs1zzNVCze1nU675e8u2ZWLqNx",
  "key5": "2YuJ5rafanuAL6U3jnFT9GoorMu8RDRV6xmLGCbU6cEpqTZVjukGsPBCjMWkMogQcpdyrNPRSwejs3zS2q9a9m3c",
  "key6": "22yTF9ixmNfTPu3yhkoVQSqiLGA39SJfj1PcEY7Y3jnM4Zm4SUYzgiNXH3FhvsfbitWs8VN55wH5AdpSWsFic4GR",
  "key7": "4c8GEEf2CZ5tXHJY57znEEpQnhBMEX4ns6a8Ntrr1pP5NByhJZtRKQZjEMsXKz4WQrkaVfg5VQpdkW8vhpCP1eE2",
  "key8": "gw4ZUStgzCsE9EjoZJQLNxsvfD31DhkfNdwRA6zbdwdTLydK8er7fv6W6CQ6B4JHcNFA141uqDVhkCS5kf4cAye",
  "key9": "5QX764eaR2MvZtNLuQkaQUXdLiRR53sybmUcPaWbNeygrdXghQiF3FAWk6HdgnL784YgRbCn9pc4RkWj1XLPUmPT",
  "key10": "25txAqbtVgp5diEurh3jYFVAJ9yWguADGmcDYKiwcUKceJMTovV4WT9bGRgTDQyMhqj4fhwe3PVyjgmmkzjJQBe5",
  "key11": "268hf8x5yC3ySYviWiHG8eGq7BhYJZ9XN95KZoHLtPvsdvVBm3ucb7B8YBR1WgN7RfUZTJXrkexxsC2AZuYTtHFj",
  "key12": "2SqYhdZgdjz4emyA5SBnF2SXh9hrEdB3WcHUkUeS4eV4kT76p6btRgkGVNM4QibftKjCTmsPSREDZp7ejiBX8stj",
  "key13": "3fxwzR2DU8cqgiqtbtsLyrUyUeqqgptN76CWeb6d2KisK3YaYNT49qgUg5rxJjSb5L78U5DDoYommeKoqHuKBCb6",
  "key14": "3m9YDqGs6tdNSyMDhKMEb8c3BoLUcjJx5gZnChwk78wPJ5mMdfZsLu8XPudDHMdfYgJXiCfB1jGSCXMGZDX8t1jk",
  "key15": "4XeKTADTaeNo5Kf3kByrCgp7726HJDrwXFUVZyTDtV8P53NJWH9uebDTJnmewvVdxhszRsexp5mAmPhgoSCx1uJg",
  "key16": "4wBFGWKAW8t2rW5teuP8zyGEnqvaXGbKH4RuAFQdfeAfZZz6pxfKQ4zG18J7uUL3B52mSo63qKkvJqyqGdRzNFAW",
  "key17": "3QNro3i3C61ST2i4bXtDGcw2hmhiJmqC4XkZ6oGf6oVZNYKsZ1wxoKvUep8oGc1v94evZHvfC9oCTXySP79LV76p",
  "key18": "5mVqBFsbc2YSqdxqwfo4oAdDM672CAxm5BnLKfJKwA129PvYXSi7W6SRn1ukcFscXFsFTavm1zRLpm6Juve6gYaR",
  "key19": "4nRZqwHtNZkqs3iE5yAyK4WBCSz9TYgQiCsCtf6o1kNJbuugAnusxe6hhFpivQ8VgUdBxMjZ6yHdGGvVYjZoUfWx",
  "key20": "3zY3Qw3Zb8i9U859ud6YStqfM4GHrb2Ac1n7xa2JsBAtbCn2C4g8uDYUjv8ALK1sSgsjXF8xqeFXBt5BTh2kEeeB",
  "key21": "kwWGrcDgCJdB2rMzhQvw8npdRLzjWsMKuWr5WTXkmF6Lj9YsVJBMzFrGCtzUBXL3B9qndzoGw4zmA7gpRXDShnR",
  "key22": "2cktJjQDkuQpFAqGYzGQHDfZVPDYusFxgkP4go1sGUy4AhJi3yPNBDVbDsnX3aEN4Jv4HgVqSrhZzr6udDgLfv55",
  "key23": "9PmD3KAMQHtPeZaSzHiTUn7ev6TC3oKoNBbTfnjENvSLRY2YZYvbZjyLax2Mwc4miKTBeG9PMXv1q9qTKhz6qGo",
  "key24": "3gVsWhpUCtUD9vW4yYsLeXq1FC8gK8vzc87zBcMgubF4rMFS94CzTzToStWarTHveJVUUwJfBuXyNNt61We9PaH1",
  "key25": "MXxKEUxdxFHd9ssyoxyCUqmdq5oP5Gpxcp99wvoR9MD2TpQeB96SFeB6sFMUdVfBHrYMxSguT8afKLNLZKLnQuw",
  "key26": "3PVh4eJMyM6Hz6Dfw7khGhJkVyoPCCKpKgXA8UPvRNYwFWmNxMym9VE8DY6C7GeAqFJ9TG13i4Fftx6LP5WbFfXM",
  "key27": "4AS7nf1Jsqb43wA4fyUwmK9M8bmDukNVrPSGC7zkzBDaGWB7TUXvPkGet76fouRaz1XL5iPaK5VhBhKHsdMhH8rt",
  "key28": "5Q6ECLUuqiEbTgyFWdcM83CPRh8HkDxvdsWeGBnLSiiboQSgD9eTJyyZqnU1xsqFn8WQS6tgoSL1LeGjJkY7w9ce",
  "key29": "4TUeBRTZMu2cd4vpqBVGo9n6fko6hoLcv9SgukKMp6hzL5SQj4vJSsi1L6HNas5jtobaZRKnTAeJJemdBNkfAzLB",
  "key30": "pQDJb8APgTDL2xXvPTBNmaHcTbSDmWxcd1kNpFWu2EP4YTyPasT5QoNvimk6GDiLWSYnHyUTtggimt43rpggEAX",
  "key31": "CBmsnCymTeGtfs7uvCheiKPkcZh6LxfquNNcRru6DhxqDJC6pVLMHmmDDwGA9VsxvegpFtAF4edjst8AZCg5JkJ",
  "key32": "2CdHZK98KjHJH1WwT1U9rD9GXfmeKtpdyMLb3jo81ygK4Pw65Fb19zmQCinPYA7v9GGzc62MS9ARuzJdDNfEb11k",
  "key33": "LibyuLR1xERKKQwpVpt4VE4PmFV2FutJK5dFJdZiTMJtooXc3MUBAQvFJZrXpFB5pQPTHvhHMEx1NWvYQyQknL5"
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
