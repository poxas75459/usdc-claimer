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
    "Rfe7TNRFoVu12yZcQ68KCcsiVW24nMgp7kvHRD141EVFcUPpd3whbaYsjhPyJG73NrYykVXUDLc47M8ahvAZ21G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k6Stq3dtWPEZLe1MUT73ex4ZM3kiMjfp9K7ZeZXXYz7q5Z9Ft3sWZ6XsEHQyxhqDRRbMAsUgrZ3qGqX8Q12qe5P",
  "key1": "zYxe2oa7kgVbmRrkP5e3zxxb2LgaqTGQcmj8jriXumqYB7cYws1YF1e49H7smeMaZd8d8pFhs3bHsTws6CBYncw",
  "key2": "4jfGAFGqBtm4UqkkB5dZWYsuuj1AuJZZvBUCNRSwf2DcLtuS7weE3PtnTznZ9bMThub9iZCnz5oNkPDq3RDQF9kb",
  "key3": "4N3hYc7UQo6s2SocXYC4G6SX3XLzGazq2Bf2MAKesHiKYi7z88uVf7ca67k1RrNwcfAiXN6cyfcd2yLB61sdRyLY",
  "key4": "5sG9LLZe5LD5iqgCZjjDd4ddc4NNstUXCEpKfPrb6PXCSnNWTYA5fQpM2RwwN95jsSRMDEGceEdKvmKes84T5Ehc",
  "key5": "4An5AvCkiJhGMiugVbk1ncbwdmMpVdXN4KVFqNjcKVBnZpXaBdnJx1wDL4ZzxC8uPYTCdoSSJtAXc7UV2HVNPYgw",
  "key6": "5BmAougYUF5PSTWWBBHZrtF2tRqMkddd3ee8jThSpVBEWAHae4YRRfMsob3n8VEtYMwNh3jzHHL9b7HVfq28iquZ",
  "key7": "4wbh3cYhjqVver3s8pcaMA9wuLn9biCLwnpawXUczyE6gPu1c297sybSo4CGAMifCmVb7FcDX3hS56gVSA2JDgn",
  "key8": "3s663LqBYZSDhsqvb5PeTSChZUbEVwHSszZYajmv54fB7XVXpHujPuZG8UwRsvrhUt7ZDKCqAEQzsia4jgkoJQNn",
  "key9": "5F8qqcyTi3hBDsGWzHvf5wyHAHtwdVUhikaRypbGy4CyCsgRDiCjMLAGZwAfqPe81zboYAhEKQ9bddPwWLFfcEki",
  "key10": "5U37TCDCexwiyTKZEhxLNcdCTtpWz3vakGBbTCxt7cDvisfUGVqg3Y5L5mNsKFdT2njVoCU2EgbA3tK1kV6bBbnX",
  "key11": "xtJXg5Z7mKDy8brvMvQFvFP6SrUKaLYWorXGLiAptJtCNcpU15mPXxrxepbV9rGFfpwjJobWNeuyGYY7z7LCDJw",
  "key12": "2iNFj2KhpKQM7f9h4EpQJSZgoT3kvz9i9QwY8wQE8ai56tjfAMzPMmrx8JHWm9je6Bcefx4ec875wt3jcupppdcD",
  "key13": "2AMhQErfPfa4eNA3P7Z955DbUemP8fExBnrHhvpCbYURX6E77hHP2QZU5V1e34G6XBwLh3oLcWaMtCjmriErLLVn",
  "key14": "39ePT6bt1JJ38sjhjYtJeBkmpzY1Tk6oTkjXQ1jky8Uhkp2eVAhCXaPvhrqA8Zjg9h2jzqB6tQEYxJMmLV4N2JcS",
  "key15": "56KdozYpeooAumF2D3xB2Q99bLaPWMQUxwXfQsLZqAXf5gwHgtc32eBoTT3wKU7BR2mYJJ3HxRhoHBLNavqTzFor",
  "key16": "29GJB6Q5ircGcWmhFiqM1WhQcFX6U5nivp4nvQ5unKXzjspDjEHGbuRmEfFqUj5yG3HJnGdRMtMjebtUbkPeo1dY",
  "key17": "4yLjXppAGLefrFPZvZHPBPzASV2NXFAZJzMyrkXRwHKG7sLbhEzJXd7NeaTDp8ZvZZCpC3yrhovUwwo42qi3TLD9",
  "key18": "5Ls8PuF8oAqJGA6ZqBxtPZHTss3vKVk1JyFxXpDRjzvWyBnLrneZRiu8nTCNyPYJo957EXNbxCSPPHGs4CrTAuQ",
  "key19": "smhWdyTQfLmBp4EpdULHhMbboFvdBTCCTJyKjA2HA7PYmA6kXCcdDjJ21bFUgtdEKnAtSXhUqrsFdkfyZPwXRQW",
  "key20": "3KUyt36S3WFRaYUjDStyBD5nmNraAYiEge4QmyxHi1zwpgRsDqi92xbp8SKwadfhJHXvjmPxHYUCGjjGwB86wYZ9",
  "key21": "yTTNm5Ni4e3kWSyLbuSSezYz1KZ9nywQZLLHpbjFiGzgSUQjuvkLiC4Ns7yDTVQ8NngPtNJyPMDRVPaPpkGDhR3",
  "key22": "9WqxMLKNERFXrnvD5krReZXE52DDmmc62p9haY3BqiEACgR1VrdZjiLhCQPJUhLTeb7f7YiLCoDS9G6wLzpWhAk",
  "key23": "fZeVgoU7uKt74dBFUN5WyEtPSVPyY4eAoVZ3c5e5maYY7VmMqaMnJAEpMCvDAWmbNL3HL39dgvACyXY3oAFUhHJ",
  "key24": "2zNy3WzNj7Fx4B1JPvtxB1suKHU1nBC86Pk3QTVnffwzbGpF4fgGoUck53jfTTjY4BVeJuE1aYXAB6ax328fLGZb",
  "key25": "4SrxXz8F3UDRHM1E5axJVQrzB4HVPK8EFjfjrcByiaBfN3jrYc4Uu4PT2NFR9w4X4Jaq5HduEBw7x8BpUYRvDAM5",
  "key26": "6spAP2noQxmgtbyYPcVytdx6TPyw1cJ62ThKSeexNDRrnvENM9c447RFFsA3AGz84iyyRL67BnuGt18oAdpLQQ8",
  "key27": "SZbMpXwDXwMDkDqMYEm6f6X3y28QAtNqLrYHQwcau7D1LKcWVJcj8CDHC86RjDvL6jPMuo3HQV2H3PsPGV5zg31",
  "key28": "m7aoWLXLMjLcF3XxN9opkC1vvd42xHKrWV2F7qwqXabqqAbtAZTwsbUXtV7kVrDJXaj13SiXqNGG3EqqeSXce8U",
  "key29": "3be6kJVEpLJqDXmh1mH2NS4Yr7kZocnrRkeEs562eesDGhF4gdDdyFynFPZS1NLBaEXZ6hxaJAvG3BjtQ1bqU71e",
  "key30": "5fcxfsNU6dLJbhCdGPrKNcGMCQZXkFbMjJmmHHeUnWMDFe7fkvtTt4STTVKUeuoVxYVKtYfQkzmpNapC1akBNLzz",
  "key31": "64WFUdGCK5JTBHE7qVwjXjbJ4LNNqrZbH1jXA4PRRD5Lxk3grMmKcEhj5kSewgMpZ2kFS8dbuQBFTyQMd8cJbshU",
  "key32": "rqctkkLo4YZpNb9znwUUWA7TwVVZ3ASen5aLiwxRrTVtyiVJdtPv4w4hEQqkeKNy1cyyEG9JQy4RsiGB1bYo6aT",
  "key33": "5hLBt6dqB2GBZL3bFUUbrmmCW7BQ1U1u4FhS2rrd6hxwgcWaaDvAT48oSYibntksknLi7YLgzFRrsCNeRodUJAJ7",
  "key34": "2kb2yxtYehhXuczBRsLoRRZd4Ubb8FpRNbpwdDaJE5ZpmVRthKcV8Dgw2iY8eyghGUndnQ8ABFX7egsjZVFpxH5S",
  "key35": "2JVxdnrBpfu6BGBWFfpTJg1MVkCehHEJtJPaNhRzGToUoXuqDQ43kT4Jq25EKzTpbaojbqiLDdaDNoJQPgVZS2FH",
  "key36": "2QvbSMMofuNg1DaNJowLHR2BV24PguRLnjjeeCFwGvof9NiUnrngTHywYXeHusQeZtgvwXjHFV94oTfyQeRoTJG8",
  "key37": "4iiWxULvdXyVNhoA11L5WPaUy1tcauKhTKfz4YSrw5Lx9DuC6hmNWW62meTBM1EfxqZj7a27a4UoubdwN2eTktsH",
  "key38": "bGW14hiV9hBHMzHZjtVkPgkCVb8HM6u6YNwLheuB58oMKuYSFiwHRxvUsytg7owPCaAsJ4MB7WCpQsHk95qqM2e",
  "key39": "jo1P95X6oYsrhzNDbdbQCYBejfmK14LN4odVJs6qckZ31WsAGfzfCdN9BrZKzpgL7Y4iNBw7ZpK4dEVkBDDyewu",
  "key40": "3oe6xUmZv9ArL3WAhesJqa2dwGYiEoUkDQAahTRfKxnCHxehM2Qv6m58os5T7oF2Dw8ApRJFiZsgmed9AkQXGKdD",
  "key41": "2wiboNu3HZpRvG7WLWdcd2NbXNXajF395xARS8687wa1wcMQPo5xVZMNiyvDFkANWVDHETUiZkiYsRiuhicidHES",
  "key42": "5eN5jTMW3tFZ8jFjjrbsPbF38VMxnkkFzAHfr9NNjsUFtspTXDfbroqTaiDwwe7PYzcWYCDCx5CRBL82EA1zkdNo",
  "key43": "3LKW4oJRf8Xwpy3f4pQunbtgTtCixiLqkFRUHMeahEXmFeTMoC5Tuh4XnoGkjLoh6Ria413GtTJKnx8skgU1YVaA",
  "key44": "cvvBb3J1ZQXVj7E8hg7HKopEenvNUqxZEAZHeRGLH39HAmBCwa82KxoVTE9cWNnKzruRpBFWkEax5JqfPWN5fMB",
  "key45": "5ZDPruxUSH3jMuURb72jt6HmfHXE9Czz3rpUxMV6x1ago2Zb8LeJefQ12tnvbV6xqvEXN6g6GP8dYefn6EttbTG3",
  "key46": "rqAhRt58t2JtjiuDhfXfhKN8exTHtVr52ftD1DGEbj9h5tmHT3YiivuRGhMgwFjFZ1Y7R2fs6G6L3FHaS2DEQC1",
  "key47": "3Zh4kwvhbhkzkag33hkkz74bdi69bzJJwnT3uH2xPq7JqZWrvFZRqr6TATDkgTjCzksMU9W2bfXHBb1GTei5aaBz"
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
