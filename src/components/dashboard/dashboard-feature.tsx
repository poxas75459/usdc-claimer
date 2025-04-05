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
    "3yvxTvrX5SiRDcSecSgSLnfbcFfa63A1ypXfFb5BVfRNGNCZi5LkvF5dHoVjhYJqapU3gzQwYHzoakysZpHbURVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27dDnKXDGE1hH2ZPCbeHUMfwT2N63F1CpK8HHXq1bVVERbcVDSgAKpzLxFVKRNK3MBPj1p6EqE8S5qxWyPW4CuFY",
  "key1": "4L87T8aLxD7yVeZUNLbRzpnCSNnhrTXutowQXqgTpGy4voMvNm5VjU5VUyP3K3M1tZtNoyfHZ1qxaYP4ShscmEWq",
  "key2": "upDnAo8E153a4sYj8FgeqcmCuxFr2VnxftmAgvDmsA39xjJ5a757EbgP1RgTc5R47qjZTFWGVeCr3cFTVZywjhY",
  "key3": "1Fjau6Jc1uWtDeL62wd5JciFPs66biEGj9F49Qhrn2DYsopnEHUx34R9U44D3N3nCKKcdGuUMwU1miKRyLNq77J",
  "key4": "29s7RqqYwYYtopicRJ7TmGBBCWEpLZEAoLDk77u4RvVkQPQGnFgcXnKrgiigVj2c2eanr1dBrcchsJPMBrDFRfSh",
  "key5": "5nKs2eUYvrwAyoaAFETazeh9ucg9gWR4uMmj8g9tkP467UPkHBc8ZJA57fWUeHZMRkf5jBfLKKNt1e9KGhtFA3Tm",
  "key6": "4v199X6kkLRtDkBEsM1mWLsMq6v8H6MRLvvvkzjbjN1iGr6WHcKYvXteAcMVxgqfnrtZhXc1j1fTDkXKTshdHmvY",
  "key7": "2Kz26Q4ZD3ydt2rNZoaf8pAW778FMX9D3vFpbekNg3XpYue3TXtfw7vcr7ZzdwGyFwMKz8LbMVPqqGdN53B7aGBV",
  "key8": "QCxz6pmJip1vUGfRqsSJ9iAkSqWes7Ev4QMc4nXoTrzVkX2UrHDerAsDBDjvSg5k8MDxY3BqbXyQAZRukRGvUko",
  "key9": "4xqF5Kvt75YhFPvZNefhJvtdu2mf28uEPqsbP6qAS5p5uPvWDR8bYMw2tQn7BV14GK4S6piNCHdqVossvP2GUNCT",
  "key10": "48T5g6172goRmx8Ykdusdwer5o8XYC1Z7idDXv3TnE7tVuaeKE1SkMJQKgFMBA4i8EirC6Lbcv8YU879PB2ZwJbF",
  "key11": "4KEZbPMvXCcuPuTF9V97YiSHA4eNpv4ugU5baQLeFwpG4GoVyYFqhS4e1LtGAcvJqgfNN5v8x6phaFHhD2SkAauH",
  "key12": "2iHpZdDQJaNkKTaKbtrFAuzwZZwvb6XcK7EgYLV6iukApFsE4AwGcsZS7ZEagrQdZ2uK6wwFDYuFvZTzFDp8xAEv",
  "key13": "5ggAVgKR9vP9WjFE4cMBFb2Fy6R84bs3gD4kPDVEWgQAEz3tC2aYyC8w2G7fsTpNuv8Daua9U43qAJtDn6yToYXe",
  "key14": "2p83U4Xa7PL5i4uXkgDG2qq2j9kZ2oDnidCSAvuPBSwr571RPP7NXQh9ZHDpaVtEqnvgBRV3fPCf6cqj9KgQYuYq",
  "key15": "5FJt6PP35DEZSVVvuBTbCnVQcXM9P34EZzTQ5FYGMBNvVFN3pboWwmSZ5Ltmsx4CR7Y8HGV2GUTSFhDNdbsJRuC9",
  "key16": "5KZC7Fqt38tF8qip2y4fhgZzpHh6zYfzArREogxYE2Ncn7LycKhKEiZUgywD2s45iN4iFeCb2NNz2Wk6Kcq91W3w",
  "key17": "5bucWxTWZR2YRLTHSbbVRfJbEBqNJKrL2CK2defthUFnV9hWM2p2U3Ate3vrGFdfgWBDEoouDRAZNkNW2LnmqBDz",
  "key18": "34XuagG4u26jjY1UsqSK7nCvLwt5MLtT9G8HDFC3bwDnsRBiaZKAcLcsr4DyszMYKC1FYqBqDrRAvxyNdRiffE3P",
  "key19": "2uQ5Dz8FRJyunateLSjP8Mur7opRLfk6SgoQFKqoMGG4qVEinLfBHtkJiH7vdJvpuR6GLP1XcWzcjd2v9aeBvFTg",
  "key20": "2T638s6SsHsmGxEGZUaHnRvpnpxejoZK4imaVwkdffgjtRE2HDFva3bDp1nGa11Z5EALvbjp7Rb5FhHLQH7wtojr",
  "key21": "2hhA7BkbCG9jVMvXH1vqWkGDDiqEbobnzDyfU4zngSPzSj7Hs8exXjf1KJXUezGx8NGFjKBUJn8U1QW86n9T7FTQ",
  "key22": "5P48R2hyzLHxwVzzTpSiy9Q7XroSJSotdeddAorQVRKCK9WxKdHf4NqRSPY4jrTHn7qgfvHK2sQVkEhPS736ZE4o",
  "key23": "2WF3TfEPpvLtvGKqC5fS2KnCtoT9Hbjh3fopMea1rouaTnuJ2TwGSXvGynDaDiTi8QHNK2aKv9MdzgayQqE96fxv",
  "key24": "39cT94rrDaqsMZ6Rtbp6n73XWj5x7EstjJ64VsAgsNttt1Ebk4EbSrerrQU9D9Q3KeAsYzUeKJNMWXJURnRb31VW",
  "key25": "42vUizjgpHEJLLenUwwTCNxxZFiKyw137AJadhSkwXguQZ4Fxh1hvpkxHDHGQarmqg6keuE9KWWFQu4Sez3iCdZf",
  "key26": "2XEgVo8FxGHLzFp11YtrW7gyezKoZ3euTtKZM9edDJC8WQzkszRQsdu98GFwvR5ovNyinFQLnvhgGfpLBSiYdCCM",
  "key27": "5FMxefT3dyixRW6gGdram1gP8i6Wbew8zB4goWZBnRJbhQVwKzaqNHWhHpEXUomC8Emb4ysPcSfBvnFJdR4DTjZ2",
  "key28": "4goYyPWAbaoMiPQyofb4jgaQo5CXkZMWp48VyFG2ac1HVDnFJK5JreMb8qV9HvC8QbtUSVAdgYXbgREjJ4arj2Mz",
  "key29": "3f37CD9NyksPUgu41C8q27gmnNfFL44p3Pje3vM4RmJ16gUpDVtwnSSFQnqTqT4ZMiCUk3U6jCsBTyR2URfMQUnP",
  "key30": "4744vrocSWhT258GPj43ucWMkoT5yhkMSX75gZLEUS545d1F9KkJ9eRkZJgnnopHsVsXGyFiXJgfosYb3jP1mKZ7",
  "key31": "4N4MtKwe8XvZSKk6egwHr5u71cHma1KV7yrYSAD5xmp5qLaCU5dsUh5RvXx7gntxip4CFVQiD9cJjjET3MdxDJW",
  "key32": "27D77mYcFxAixTYbXWATNL4y8e3iYU4wkeK8s2gW5AQMeN1sfEd3wxPibW6joQvo565UcjYVqNVFxkKCcJutXikn",
  "key33": "5X5U34uubLMxB7uuSmSkKARUCMeRuDBnXBGHGpPLXUejZBQAEJLYEeehkJW9SS1ftH5JYqRXZ2dWWPd8Z14H5AZf",
  "key34": "4aqFaBaZCpyyCVJpPKb6rXa7qNsr5Zukq53veMnFdMU5H5PftC6jPSbLm3XtRCgNpnNiUuHdyPZjDbvoKrbrQF87",
  "key35": "rnFD6uRAxmV8Y5AK2L21cQHQi7FAr5ZvjB1Zqb9RKn7Qh7Mu7LpLHGQb8qNPSccunYpxeohWNgNtMjXHmXXYwod",
  "key36": "4gzaFh2c2PDuZeK9LuyoZo6ApXrqqT5ng2f3FSXiuin27RtxtDF8nFadFk2UApofP43wTn2eydgz83WbWbt7Xbv9",
  "key37": "2DpT9ARNkYrmyum2grSKpiDjAHuF24xh7pKE2gAoyPTRvQyLJhAQKcTp8SeGVR4REnuXBMBhDgpHibq62c34hm2W",
  "key38": "5Dp4rXaPKjo8v3o8e1coG6V8iJjWzRwY5RCRGJsTPHN3nVyDG8HwdZsxgHV4gvZZakSH6niCabzfiZXcXAXkBDSC",
  "key39": "3ZeetgqsHvqreee2pf8azGntSviUEp3qKEfmhD7r3nJ3TLxdVuzF1JtC2ApPHUs8S1NvEb1SqZMe2M7kuYvahmwP",
  "key40": "4pij8idWhdko7X9z1gNTTMCA7m4PazYzAns1m54euCqWMsa3YrH6SQdBpTUGjR98gmazArWtS58ipTAGZGRbriFa"
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
