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
    "euKBGL7cRGsq6P4CsgwboMszX7fXyTf5b4ZbRMj2aH3Sw8QaC79fiJxC5iLBsUCuPrvuKcTW8jRcs9WLtRCeZa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XrXFjhY2shDcMg5P9h7GCfr1jHMNbXH6LZb3j3nvwY2V6cnFMWutAvrateKvXUhDHg7WTGKudvGBaHYVRgBgxR5",
  "key1": "2RfspW2wCz1mZCgYMh7Ssp3LE6HyGw8g31mYSTEVjHXrBmqefseB6pskpeC6smmc5bXzRVCXWsY1DxBBR1dJ8dtW",
  "key2": "4jC18DvmrCagXKwXPXTH5xYmhwG2DW5RE8cnhrpMvvZvnA36SaCMDuVE38Q2EUvJ87dBBC6rJ6k5UDsWCMsFQU9Q",
  "key3": "5ca33TPTexCTBvyx48H7LgyydSVAu5UQxV8LeSuG2cRmcQfhyXiCU8R4DHPryGdqRPiRfg8ybNH8p4tDqJeLHs9J",
  "key4": "35LRsCpjc3wVeafmcnWNBr6KeAnQoaubFYLiF66uwJpBc1ecb7nLDeR9nYyARqUyVBQk25vsCfb7iqpaYgCJUQ2R",
  "key5": "4Vh9L88mYLPbHMuULV5dmgadRQA7YpuKGPhBAsmvtcE6PwAchmeg18GYgXY5eGNyRpEP2bdwtFAxCiGntgXuPJ1F",
  "key6": "3JnoGfRv9YNgw3dhV1SdHuYMk3UgV9sTLhw1kUUT5Pzs1zpK1hdNZLpJdxSEvPFXEQ5dp3Nao9yqXbuku5HXq4BQ",
  "key7": "EaafrmdAfEHRKwyxpZdc5baR1m6gKYnFJH1VBvtDuUx82gZd7rBjENHZE1ZXQAh9ttUQjnZbDsSCw6W1TNDdYBA",
  "key8": "YDkaRL4dCJCLFSvwZy8HdWv1MiSzXHn4ff7fYUkJ4qTbh5KnQFbjGRnR3Ci6aEL6VBT4ykbkJx5A2kS7smHNJcu",
  "key9": "jN3oKkLRuV1McVDkyzLqT73ihwFrjxADqRQpuhkZrKD517UHtHXis8TiQFLKvAM36rm717JgoThX6GuVHW1ccpz",
  "key10": "2Y66xDG8XP6QuCksXBUsaFui7y65mZLqrCzgAA7xkMRS4jN4J4AgSNqAhfAB4mKtJHi7ZY9QxRiy14weTATjRZq5",
  "key11": "2W6uwoc9cgPHRy8maxRPLuoy42PceDQebiBEgMtvkaHBSSkk5GdPFDqhjfTrkdds2RNMLawG4pH79srw4QytjiEu",
  "key12": "4mikeoMfW1isfaXEQvhCFhBSp515sjZYq7Vs5sk4zJXosaAkankzGCQtvZAN7w844grkUUGrtrKh3hoc5NzDDAk9",
  "key13": "2EaPN13jYTa8aSx5KbbHx3TLCC5N4apqLtLC4CHYD6SwUeEqjyvxmQ9tuibRDTgqajamnA4EwTC49Cr3vn9ocrwF",
  "key14": "66HPRnTdpiToE1bJQGk2HyLxwnVCRBKaveZ4wsCCuWshtwCnY3SN4iH4BjcUZDWmfUZdrCJs6yjSGrgmqLbvg9v7",
  "key15": "4Tcgz4w4DFVujyw6Hm8KogzuMeq8K8jG7GXmFCp4jS3rmdrqvWDiterUxesSXBaaQuxrZFHRfbDJ41WBHaYU4CU7",
  "key16": "59k1UrShycu7sCeDB49GryS5q9jfudvMSYsWg9yMTN55abhHPJQatrsdBS9rQ4ysHiwyT6mg75oD4oSL4NdMoCt7",
  "key17": "4cN73g8erxw6aWxY9vJpaVVmxpw7uaE2nwGz63cNUh2J4BYsD13nfNjuk6xgDqH8dpSjttBrYGaog4YvXdvzE1gF",
  "key18": "3irU17sTfnP8EKoe4NgJKiPGdfcedRZXp2LS2DZ3sFGWJdNVvykV2LdYrKzk9gffQuiCLpTrTnETtM1WZgZRKoU9",
  "key19": "4nVeeeyE1ENJcLYfFqnn4mFwtvw8fj6qkncH99URVsKBPGLQbkoCLWcKeczPQkLRxmuGpFfUsfVQjry6D3th1xTC",
  "key20": "5u5FE1ruvzd7EoAmUjJu6fDtX2JjWuvSutSYQQYZztQQG1AfuPcUkcvykE74Gax2JJqhxmTRvJrh1tsfZrLV2N9Y",
  "key21": "3CPUZ37xb4W7p1iXegYC76XHTEe5KH35yH95C66NCRk1q8wtagxDAhVaP67dmb1sxxR2ZWyJEFo6JqmQcpVFBexD",
  "key22": "3VBdG39b8q6Rvm5TK2AT2gcxzjL3mKH14cRiBYESxug1WbE9gQTvNrdmHef74wP8ENxcEvxiV8CQGpLcbpiFdcwy",
  "key23": "2dexFC3PdeHBrwB3nWPP4gYVZMH1J8djcA278WD6hrf8dhdBqxTMwxbmAVsuXtvAnP7pqsfeKHYoPZApEjFXm7mj",
  "key24": "66gDHZtRCt8gVHeo7iZsjfqitCo722VrMCovHQP8baoHM9ZgSoQitFLmN5hKXxG2wLiG1ZXC7K8DxV8qmJwqfTY2",
  "key25": "UipEtviZjF3dLvPrLktTCJ6tXSzt6YTEUT69MwJYqna7KJn8XytYG5z547tukU8buemqvVdArF6GSoBZpiUmFp4",
  "key26": "2A4SfUwvoF1iA82d4moVGAB36TMrwF5DhxA3ZWnBZRKUwQ2cpjaLBXrxgYPKMAVReDrVkUYhSUxSbU81Xnm5UuiS"
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
