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
    "2LjSzS9DfywtqeZvaU8zvAtPbHWc5snpsn6twK5kgp3ZqGpYUb9UbDZcgXUJYoyXwpRt1EHJnrGA7aunis8CQTc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZWpEWQEhe38PWp3KcXXVPvLcRExJE8uLBHxUsFd2pS21kPok4pPz6yHMyaJT9fTi8fRpZwA8Ru3j2WQGKEwJqK",
  "key1": "3ANbN45tSKwAFkAYd5iiDf1fJLXDtWv6HxpxMEb85qccW5Ndstnc8hgd8veTq5WyyaoQWfP8JuicGR5KHWAXLjsr",
  "key2": "3Xdah2KS5bt7YWRFUD3oRvNHP4tPeHrdmiLyLTvXJJmFZEvhDaunbzAh47ZQw1sy22pWjfYyr8sX6br5DcQyb5ZK",
  "key3": "4Du2VRmi5pBjVeHKwKDfz1waUV1yYjc88TpF3W8a4SWBQxktwrJFQGCJBEAdwRhuApt6DieX8qmxxDZnyrff21Fb",
  "key4": "2daEm7DZCNJEWAGVmMsve5Q7X3Z2G3ezCNyA5TKeT7WckTRjEM5V9HUieG4s7Jg3uyFUaDSM3xhMqBCRLK92auRh",
  "key5": "Sv9yjch6JzHmztBtXkP9ztiAbX7rihnazGRxhs7W2a4qsXzrfssrmP2YJtThFQeXdeYHxP57sRFeYBBbVvDTcWU",
  "key6": "66aM6TqY8be2vk6QwvXdLUE35rs5ns7GahH1Q7NERkc7dt4bYtLv46SjqSN4ZGM3JNfDKze5WWUJ779g1NNMV8PB",
  "key7": "37R7yXiTqcug8CV5R69ksFjJ1e5DdaMfyGiT2gCvSPaVU4QpFysxAWY4HGknakoFf4qtUYoLHMahqyU3hMvepQeW",
  "key8": "4txGbMKpyR6q2XCJsd38cQ8J5MuFYRsySQt6RY9a9zToEbtku5y3kYhexmMRVjMo1zTkX2gEWRduCWe5MwEeFNg5",
  "key9": "3z4RpWecCNYJELAkhvyvAkqDQ9oUqy7oNLjusMo6sfAcJf3CB89LResVn2ufRqWY6MQLnE4d728xaYa2S9ETAcaJ",
  "key10": "3VXhiiXjrSNUEDh7v4aitj2RQVV7obFExnX5EDUR3eDhc6rw5KQnHimB5QBWfU2eyopL4ZPi5zmQXrdinaW9guSq",
  "key11": "4QbJaNQsbcnHHT6ZC4EiqwqtPTcH2NqoPFQFzBT2QMpZ81KexboLu7mP2hV5vXdydUNGNzHFcDqN4HuwYxxAqDzW",
  "key12": "gG2dobKKujbjWknS9QyhFt3Nyo9s7mEfaKHALCSTsK4Ccds7W7yQHdCUXqic7JkXgRqPo3fiFMKMZYTHjmsTr3r",
  "key13": "gytnfRTC9jcuUWZXs94QEXgaaZGQPRvUYtnxh7W1k3MUDjQq18vPWXh4LyV3ReCejsbiDdutiuQUnPtkPx3roKy",
  "key14": "5RAFCksqts29pzbgqnsxjk5bzsu52pbhWPtx5gC8UEFft6cJzhRcs63wZeL1GsLz8hjkr1pBCQUGMS5TFgyqaSJR",
  "key15": "2k91u86BeJwAMEbMAfQBLRuUW5bBFBWFzeW1E64VJvDrwVrK8kSQin5H9A1pGCWfMfoZUcX7hVLZPF8bLoVxSrNK",
  "key16": "5CDArHHL3cZ7KawGPjRnXrY5iWhk6muXLm8mBVwRJJzg5BJPgJwM3q5rscg23usYG6CNHeMu6hS4PfJxbHcaRhrd",
  "key17": "324s51LRzGBEdHXZ4T2v9PErpWdwPgyy46XW96eHffmVy7pQ1oN5EzD8cT3ELj4si7AAyB2VTf8SPbA5y4eFWNnQ",
  "key18": "3Dc62DEFq5FKEchwiqndhMFhunXNNW2TXQVAsqpLWJHhWuEDpxKxN1E6jgWeV8ePbjdJUpFrpMgsfjNpv76Ek8oK",
  "key19": "5Mh9eV97V1vF4zZnjYT3KMcQcixyxq6ehPkxSymrM9RAK6NprSyuHzFPY5xG27AVRS4G6f3MfgfNzvpN8RjpAESZ",
  "key20": "2USJCWWUGEaTJEPb13ARzVLpb4KsAxGsd5MR67A8i3hTcsQAYoUxmYSsANwrFuL6cCoRfoC6Lab7ZvG7P4MsSVYw",
  "key21": "36ex6rGKR3KKVdkGfky6oUe7As5qfjiHQo8cBAKnuZt1o9uT4zUSzHt7b9QTp6z3N3CQnP8i6hoJeBnA3EFUHBa",
  "key22": "46dg7iuzPrRHgfdUCgVuWeNkCzGm7UFazjju2FntHZ5bGVrzpbzJ426tMfmYo7sbYyy4T4X8CqYCWFy1zHbJXK7p",
  "key23": "3wJzUN3hGockt3cijTUrtqqB4tbmZNDT5MPseFPAxm1oDRTBiQ5N5wMXjJizsfmnkJX7Rwh3oERxfbxrQejq7tAs",
  "key24": "3fUaVXBoFSuuV2m2TUAQwdVsME5zasemBme8o92UmohMAezAsurKJfpbS2eSEmgSUprvBwHvQfcss4ewMrX9T7RZ",
  "key25": "2tkRXjNDqTcfcVmtAck9KNq5seVKmW1eoBT2MJGTSp5pXBU294DwWgeHzehxnz3ymxKRQ3QvZEcJm7RXu2LL8xBm",
  "key26": "5MSZdMkLYpoJptqcRLM5sLXHs3BNAsp5hxXjC4mhf7TnuYvKTcRAf4yByJmUKvuC49dNt4jqu7Q2Kqko4Y2W3yCy",
  "key27": "2P5gEz741gQrmZidvHgHeXuTpmk6H3cNQN4rceMNZwsXwJeY1UrXs7h84XE5gPSfZZMTfqNa33qEHktvhnDPyP9M",
  "key28": "4MwWbd2PwpWonvBGobvxWMXNbeTvRAMLZ96GcJ1jZ3ufwPAi9N7waXNsqeucUG2bKinHpevZXph8EVBfyc2XXpoE",
  "key29": "37uwsHyPrakBEZb9zYmqhuCQPyizSFRzJGDpaeePTcVZt9gDhwE4BM3eBWY6mYH8wUZ7FfQAeQq1wL7sAzdqbko1",
  "key30": "4o4e7zLoN2hJBScvfRRZY8DokR2GReSerpVQtWwmgEqNNAns59L2Ki7AWq8av9txY4fEco4BebbTUrCd6TXuvSjE",
  "key31": "624qF5hSSEB3EMBuSfw86A3zhTeUXB8H4waPX8mN2yX7zV7UuuvAc5wTqngSaRP1ignnnR3MPjeRs5qLGWW4REVC",
  "key32": "2J5feViXe68YF88pJrJR5HpbWdB8aoKjFCu7bLfCbdq3ckFRXJQCGLy5D5y6QoQspv9u82f6p4W8jiPDYuVTPvcq",
  "key33": "2gvJBaXkLSegMA2CREHz1WjNmDsbZnRmk8bTWK7oxN4MTbVB4V7xrn4wmbYXL2HgGvzu5YMiK3a46WDEzJSKseYt",
  "key34": "4ehUxGH1esNhAuHCTmn4ZkRd4hPFNe34aw1UTvBH66X89ZdqTNBsw1xn89TKRtWrQbV9dFQNMni8jRbKGMED1SzE",
  "key35": "5jmmvMRgPh1kaxrhN3ePWEn1RaYMHPH7TeC8U33uVE4ocrPLc9LzMePBuXty7HKb1apmMEgxtYWqLH9B9rLgBUJE",
  "key36": "2jPisZfvtDjFy83owPfByjzPeU3uwTfYZRfVNdQUE2aAUBajrRS6AVPZyFuw42GRzjPNRHDNJyRQwZJNTKbVYiLv",
  "key37": "333M5jECGCKT3MTWSLsWSQPpg9QcdeF2g2dM5rZquDSDs3ZUVrzSCU7JXJFqXQEACJHUBbAVq6gtfpNFQfEVf8H9",
  "key38": "5iJddimxNspxRttKw9wW7eYPcbvN8MDv3kUGhMepsq2S4wKRirbuBmCYbJTekzTUawTtF8iSj1iepmhNGijosM1d",
  "key39": "3bWFws2e1wWXRSrrZXVotxsPewC7K3Fz5BcqH2BGgUaqTAU8DXT9os5X1VHG2cJZRS5R6guEsW7W5S3xieYFXUQG",
  "key40": "2JMuw2Krmtk6k4B1VNVCxPnu6a6w3kEYYJYFwrfLHd2Pm7Bd8AXiU2s5LiuwdtUpvzJHs7cvXyFD5GSZv2EhEdvS",
  "key41": "3ASX7tCHfQNUKD1ky6mTbmKrN1Mgo9t2ZVKZGoDYAzUbY3fTqyMYy1XNdaaFBbz3P9JVD8V6UZdWzehHKAtR6kYy",
  "key42": "5BeD9av4mmV4UYSqMwutcDSNSfwgWznpW2Mi3gaSUB2FTzydAWZQLoscxW9sRTFLxj8MovudtHfH8b5z46GABhd",
  "key43": "5VaWSrRtxNP5uZR1MkSAaLrzrEsjy2muqoUXDFyE5BNeQKrKbYJ7CNRVUFiWj74txoR7egvB7Lf5DnnNqui7R32Y",
  "key44": "4TYdQ8Dnwqcpk7CSbZVwoZMxVZ7k3UpG8or7PEZ7aYVrqk6bPYivCscnuRZQ278h4prMeGw2k9n5zrD2HchADmY8",
  "key45": "2HnnEWvJbQtmCLpYQTHurfNmcnwfv2vT8qtdZjGZGeeebcPJcvwYebJXtxjv7FnoJJ9SNj41NPaVfhQiFBMaoFX5",
  "key46": "gW2XbVwzL4V69eBRPx7GXYoJbmintSTSuKjDpHeq3krg773Cd8sA3yhgVJokeRwPR3UM8M4roKjC6tLxaYpWRmN",
  "key47": "2j9SNkH6tPCthtBnCvfcUi6kroL9CxEzFv2Cc5Hz187veJXA9v547Crv38igT9sWvreomK32mHnJADJEuEsYL6qB"
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
