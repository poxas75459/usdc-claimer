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
    "VnMNE39VeZ4xjPuPVpGiysVCxXBeVEJUesB1mvpxtU1C3o2yK51yoGvgMtGrqaMohAfZFbbiq6Eaq3dPfeM5gyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gS3mHHLvs8o1hCt7H5PprsyAvoTktHfnkEvw4KZGA7v48huzbxMQAVHEkPc4fgPbTRaZh3ogTyx25MzXHtjzhUJ",
  "key1": "2GaBt4zR41uED7Lj5AnxtEGa8eamVdGLtV8aTspLMH7sLUFLUYrHsHxvSi6zTzzPNu2nFSfGsSGNsizo3rbAQMie",
  "key2": "4SZuL3VZaXvpNxUsYAtvuypHdgSLy4RJNMRTg1bAjMmin5CPRBtZGjsqMddQ2TUqgn4oW2siGyUXco3LAxLRUbHj",
  "key3": "3wcno59A6WYD9pvqEmL5rQPHubY8zzb9H491BftuqaxSVb5ygnUFwus4ycXxaLffbxumBQQap8KtNLTLZyjRm7Ao",
  "key4": "21vkAmQed1UMooznTBcZeFkJtZyoEqAmpJzVesRthaVHg2k6A81XvHUpgzkDRZwfeGX4ocL75yLB7KXVi3n3wb3z",
  "key5": "5p2disinSyjsyz8ECFjhcEmU6BWmZSyrGNLusNT16C8gWq9ovjo9psPFYjYhcHk45bQRBH5EKDsT92sAeV5yWFYu",
  "key6": "3Fe46rwqcyK3WmKt3yNHxgVLwotd2BqAFyWt4q3Dg7MraPWAQukBpEy51MB3oLR4Z53AtsZdffQCWwb4FyxBPha5",
  "key7": "4zBUQR1vm6wjZVVCovh3oaD2zfGVCrbvPWuvrvErKSMNbKQRe3UjND3dicxs2r6bKeQKha2ZX6BrqFZ3ubknfByZ",
  "key8": "5K9LxcHfH2wWT2fqiqCfTBv29d52YoVYuRQ4A7U43WmVJcpXxysvkSfgByonJzjJBVW4bUAmjaiZHVNaiNsvSXCJ",
  "key9": "5XPTuiFfHgzfQEiFMMk6HU7N2Q73VcbCh6aAKDpq8iTSuqJKasRShRtrjH9EdwfciLxH4fPxSoSXT3KHy1mWSqw3",
  "key10": "5JZq6Np8gnEEoJnrZewNZFJ2wJnyUrqxGHA81pP1Nu5nLb1NZt5m6aYbG45DPEyUnc4EonTyqFT55DUDB88j5UKD",
  "key11": "xb57H7Yj7BBjLec66VzrYRfyTfTNfQZ4HiFhcxWC5ytXeNkkbqQgb717qnpkXeJ5MK41Kin9QPZHvu5kDF39HXP",
  "key12": "2KyTm4mF54D9Qt6tFvCXe6zGzjdQRk5DkmzNP8vWwRZRehZLYRoBoiGVixPVaP6hzMPk3GMBNeUrpHNV92T67xUx",
  "key13": "464HHtBJdjUgJ1WzYLm6ANATVEuzE96AGLZeTw8kkVZ147Lmtp9JAcEqLHdutA79V59AVF5D9Q9weCpffgiksLFu",
  "key14": "5SowgoUQU5C3ZYPiTGnc4CA3pjwjTTZVgZG5Ac8wxTmcPxcv121v1oMfkMYaTM4DMKPT6ja7GEjBiGrWeFnaGqNJ",
  "key15": "4Q5b3FCY7dJeAJrkx8AxHwAk2dAN8txJ4uu4pjRvDD7WBLD6Q3WwYq9NcuMkEjYJRhF4bNZiDQEnGsR8G2mRWRzq",
  "key16": "2WwxcqALAqnaDZrsis1DBGocPohg41x65MBuEmfbEW1GB9mgfrdnhqu5AymRVDrTLHYWtMfkkx22rrQtXNvPVeAG",
  "key17": "2FSGe8G36F7H7wX1qJQQQ1fvA2LA7cD6wQAQpkPJL3WY2t4JpSW79y6oc3oMXDcmUehSAneD6smk7YNZeE9k67fr",
  "key18": "3veFc4EGp2QkFvpmV3AopY1MKUT3uDnMLTzUkBDHFDspswAQCW46jsmwVgbSjmJv7TpCjDrcSwqMF5pK9PUrYz2",
  "key19": "533XQT9onCatf4g1UoKamXZ8xNzqDMbozTqLcwb7mUUyoVaFir4PsLJUPeMctFtkWZ4t7StBDj6ZVp7Wme7XtwYL",
  "key20": "3hNAeFKTrxu8KZZhyYEGSSAcmKGZxkdqz8MBSK7rwzVem4QmV566V54PAVRmqwpyqj8ibDSxPVsuW1d3ktgYegc4",
  "key21": "JE9XDf5GfCs6m92HJ2tvgC9FVxyMqeSnqdRvyot6gBxbkFs1Tk6pbj7QEpA7vJNt8JSnHVBj3pmm96d9BsUUjDh",
  "key22": "5QYbk5AU1ri8BwVieddCoCKcA88w8QNsEyLnYXK4RP9XdKy7YEsscdyrgBeG8TSNyVi5gZZE39o37kP1JoDpdktX",
  "key23": "BovkwEmVZXJvR3XiAh26gc9QZQBtwSdCh6XJPouYCmzuLvBDVAsNDFuggKPVBmi6j862rZc3BNPjWKGqoc39DM9",
  "key24": "2Y4WXQEdrFpQzm4i7ZCWYeiBfKts9zsNaYZvyFnWDRNsRJZAN2WxAUre7LsFqEETUagnMwAKKfUDFpwg3hz9wptH",
  "key25": "2vvuBiSABtT2mMVJ62JqogVVg1EKYnFhB2ZRSXQwDuK5pmkXNRgcitCuCsndgsKWaD6uLBvkM9WbTJvLGna1nNcP",
  "key26": "5gtyd3HzjtZMzu5mJV2ZekrWSrdtpaTaZwuWnSSf7vAFzKLd59SfmEV3FMso2TtoCRQB8UgH74HFy1D6odsErNbB",
  "key27": "3861CYLwUThti9fbrYCuTwHpAnJLxEhGQS8SrGr8K5VNQ3tFR3t4iimCFpTUKU77RkPtqpNWM63yeaM9uNK5EPuo",
  "key28": "5tyP9oKH17GgVr1eru1jzukX1J6E8Ts1p22xjcZcJq4SXZwfgNNqz4AVHUoeWcYm3epoA9UFCWkLL8vhT8CGySHa",
  "key29": "3mGPoWCYqG2m58TV58BndSyiGLZFinSPj2p4YUHG4FaHuUxucKkeKZHDzvp4hKoKxcUEF85L5jP4v3BF1wiNGope",
  "key30": "46mCgbapEBNhHDrYKXpDNWhZaTCv9NkPzNUass1hC2oKPSxfAautpLknvthgdcqf7ix6Xq1jdmgRpigrqzG4jtGL"
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
