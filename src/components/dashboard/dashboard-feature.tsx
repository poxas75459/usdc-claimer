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
    "5fzmpQEWJtzT2M3nhcwuwFipyHcQSYQJS6SLAcsiCXdv67sjCc4yjgs5L3pD7dDyPfdSUGcjxoWksimA4PWSm363"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66JqUJzjWiVuGPrRrixjKhPJVo4m5ebMd3hP6R9jRkfV3zDCpKBa4mUFVp8UxpGNZT3cqWkf5DJN2Xo2mPyffvLS",
  "key1": "261gJdWFk1cgMHzuEDMixbByohNvKbS45bqSXkhD1JFbv5SESn9dSvq59xwm8SaDAhJDzkzs5FhacaVZGb1PUASF",
  "key2": "4gJy39suvHpNxRacWVDmKanjFjpSMoZGRm5L83DRZS4kNyAPZCQsy8QfDC8doWYV43PBcwXmqyqpCUDx33wwFK1C",
  "key3": "7zP2P1VvRXbPt1ABaoDcAR8USNrgBYT62Xoy4XiSiNMB3ZRcB91VpRinTgVnBiXnUtD6cdcwfHHBuGFZVRia9Jm",
  "key4": "2xoJ5yPVL6PoAV4mnHRPRQEqmd5EytguWoainM5frxBHxBXgAztEKTj3Dzdprj6uhAbwFcnz7j3tZvb8vMDk2d92",
  "key5": "3XSM4etk7bDHmnpCTDvyW4Q1q9f16uupYQVbaRpvc4TP7ufaTWZ8Nd6x98i5goJ8kcZhwdyRFnrEN1kNsuERgJhp",
  "key6": "3AZJp6R2NStycpnZeW8kCLJiH92ZJFfcrEKWCQtWjqphZKBzjJCXr17GAQLHQe2C8cgrLE6pvd6zYM5myZdR2isU",
  "key7": "5s8rdYb6KATAK78bxKtJgizukqSH9tWAQy3xzCw6yr1ZZb42njj1sx9S9xtDYS1bH6JSHiyd7kBpA171nxLxYALv",
  "key8": "5bAHjNgzSofGC1xnADgtgZffHUYhcPVpa5ogBEP6EFAf6X2PzRBpHfTRCvBxed9K2PHY3eTeT4DRn3wqBHEFNhEa",
  "key9": "66JTM4Fcj3UJZNNHNkRCdEkFmokHFxLEWEV9ZDC9m9HWyyfF8wULmFyNn2Qco9QLpfJYmgakB1paL1scQ1XaPHKU",
  "key10": "3Spmi7s7bnd99CdktRWmNELG7LJf1JfbGhjGRZ3rArJBji79P5QvsrxSHMAmsvrAccNZJfPHEDX4irwrC3Pxex1A",
  "key11": "2qXx3we3W5aafBdcoxy1FAsemCvia1SXjrcwDBNEsPxuX6itdYFbuvVjtthHNRoGXHpYRZHv5SkU6rswmgWVvYrW",
  "key12": "dz638pctpUdqFU5LxmTk8oTJX4VJmXnSU5N4mZueekT364N5j8VVVRanTWa42yQ2Z39aSUxWHdJPodV8nuBsZcc",
  "key13": "2Uyp5HxZPecjrPr36KDadJt1tMPk1qWs18AotWj34y1CqT4ZbRG8Gd3vazfFqfs9nkczLjJ6c25G9LTPMb8jAUXD",
  "key14": "wAyW7RptPSFf3tKrgh2X4AYd69CjBfHECx3oLmndzg7c1bV6Xq79u5RPYGRWnnR83SWBDQ8StgTeWdw4kGiUeqY",
  "key15": "5Uc4huiEK6thSuWNMdxyXwAcWX1vuBWyX2wXgvyQwqQCu1mYJGKucTngJ774BaMHssvikz7Ye68Q6Joij3g6fHK2",
  "key16": "3zcNYw7XQmHsTDNxbAsQj4ehHTqcY7jvDZ2i6CxmfkWMaSr1yCrmtjqwZjgGDpaM5Hnf591LC2QjChMRehdDkaZd",
  "key17": "5o6FHqYfJEkyvQbj7K2x9zVZDMs6m4zXvi4DERzQpbJGvnefC9p9ZriFiZtGRL8p1G1UoeTaL963gEbmkK4kVGQN",
  "key18": "2qL2qS2veDNwiohzTCeFPho5Jb6TLcq9w2GBwdyWCzJMg1LLkyXQfU1wrA87HvQTkd2uJkjnbxtdGUyUX2PciTMN",
  "key19": "5vbXUp7tQ9E6mPFarSbyQXnU4TvjR1LhhvtCz6DXAgxXnR23jTf7J9QDtzbGtMduAAFhFLFrHAQfVaxeAUFwkSjB",
  "key20": "5LpcxkENAtSLYG9SakK5zV7nkjCRL3dPQmSDGRMWgdYjcHyQ2MFqY77mKTJgZDrmnjbpqqHfFhtYfGXd2M22wNno",
  "key21": "5VELwSoCELGTX6Mh9BpB8MP3tiziQmiJepexBRw8ZnvJAcnyijEHP9dQbuCJgSbxLepa3CGn2rYFjf1Z52sUaVi1",
  "key22": "5ju2hKrfkAMFJJDL7aCeznFxvZ8beKAuSUmq5Tcq1PeromgaAqU67ADESUVhrS4mmoWqhE8qM5TLiPhDKgn1waAV",
  "key23": "5TrJbCnggf8oR6aQXjA28VTpiYh9itdvrquFDkq3Mkxb5TpF63Mq8zuqZKWCUpcwr8Jo1LijNwKbk1vVppV5P51L",
  "key24": "KwUUbEwgJ5UHQVCJYCZhCPhvnJWX1j1F5yVCj2DU3uiKG5V1WtPFBBJChchrSWK1V8PrxmdqixUwJsDSw5G5PZ2",
  "key25": "5tQPyx9imrptFjwqNH7yBK91t8fAvj4URP4ixfShfRGQ5pp9SnHvMQ1mU5UQCDtNBoPTYTFEzy7utUjuP3pVtzdT",
  "key26": "EM2sFzr6SQbwzE1HfEkBc3MD6hbtoxpxfAnEX9ew3gdcx88xbU2Sw1FSJhwHyTywQ7b1rpUzJRv2f2e3na2haEM",
  "key27": "4ueRqbAV3Hu5K6a6cgxot2XPMnPnkNhA6Pb6L4CtRTfKTVt5o8HN6o8QtthxbhW7SAZE1vW4rUBHgZdraxs884Ca",
  "key28": "2ADEmDmRQdsqUv98gzMVhnuzDugE1dwpiJcwysHmmGLc2rLLCVUroXsSRQTQWKEX9UJaiSc4JirgxAHQsTYKRkiq",
  "key29": "4DjRWVT4YgqUvM6NXviELEgbQLgR7eANsg32h411c1QAw7BB7cbeym4SsLNhcZNTjjd1DpaVkr9NynEw6KBLRNNg",
  "key30": "629opP1ETxJvjARmmDkCnQZDasStWACx6gyZTNqg9AxsUzZJzAy8KrWbx9RGFty2NvJwwVDuyDueXAMqfD3EBZnN",
  "key31": "6kQpJvABHg7Sw1htbNXv91fqoUg2n69Yg7pc8j5Wwz9iv66nR9QLdQ24a9AZPQdYXmRzfJfqWpM1GtSPMunXxJm",
  "key32": "314MrsEZr1r5uZcu4fgKXLcmn1pthBmvpXRHB8vsbwzkVSFPDYJ2TCWxL33AhbskRonYnwpwXGAtrREPWoSB6YPn",
  "key33": "59bVDe4aPupzgES1k81K4kLvuSWiQSqeTHJ3DRWqsoCzwDYCLG1BQZHD88hhWrVA7AhyyJWmD1LtCd7gYjCXLQjw",
  "key34": "23ijH5HyfVdjzGYJDCih6i3Zy4F54RHEDJPRmocLTvKohRMiHrxCaefWFHoQ4gQmZAr4RpZyriRRYY8PuxKf3dup",
  "key35": "3w4NMoh2v5FrzzLPdCtMQ6etxLMUfb1eTDrTqDaheT8FXyzS6FEPVA5mfmqv6a6E1tY1iPyfyurfH8YC8WWNwhYL",
  "key36": "42ER8fzKYT6vGgmAdneWCZ2fbFCb8Cgk5ahAvrgpUHvoFTKnJvnigkWJqk3Sg8JQN9V6yMJkz5B97EAoGygF64iJ",
  "key37": "4s8JVUPUHECXvpReZnyoXNRWa3EhYW3eANFVuMm1HYNCahqg79JMr5ozRmdUXqRnXYHNTh7zXYcT7u4oSDPzRaMq",
  "key38": "3cvpYrP5NJaEnG9g9qNwTxcesLS8dmGwqZ5wdwH493LX9jDoMX6DivzBrs6JhG7vc7HwREN5GVXvcDnw4tFBtsAh",
  "key39": "5fai1Z8VRnHQV3KdTwnLGhwwAywCcbY2qKh6FhUCtWFLyu2VFbtz58v4T1sJGAvJGoEtwo3aKvJPZBNKpX17kw31",
  "key40": "2PH6PwyD47rUz2b1c6krEaTufuE7hWxYGKN4apZu2pyqFNWAEGBEqWAy7Yas5nJYGh36FzadNjnAyJT23r1PFFd3"
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
