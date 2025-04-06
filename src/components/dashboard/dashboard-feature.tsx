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
    "43RF9posDG6mD8AY6nTDpCHAu1FzPjRmcoYNC36AXDaDhgg2ZEQv1jQuSXPKB8P89baJunCUag8aT2Da3GsExhRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FBGyU78VEGmF9EwMvLrz3bGY8BBi1QodSrU2oDeoFGzVNdys9HCi9KPnmFd98A5VWuX6PhhLtwPXL4AUBab6QCN",
  "key1": "3UJpmUegfpzEzc5Skyj8M7FnYqfEUjQjGmD6WxYBDjfUqQbxkSQBYQSby58gwV1bMJ9LFe9YHzq7sBtoWprose7i",
  "key2": "5w3GWNwDwnaSX6RSX8DZmc2a6SLDWRt5KXR4w36Xtt1FTgWUfWaCHaMyAv6rGRPQ4QGmvkz7WTojrzCiHRi7vymL",
  "key3": "5rs2HQSp57AtZRDUQMRiMLRAc5M9JaMDTCXHmDuyedetuascCJ6b9ZfzvTN6xyFuZX3QrfGXBQp2Yrb7YBYqhyZc",
  "key4": "24FrP4T4nJDb492kTaNmzvfsKppJDMZEJd7GF3K6P5c9uN66hV35xZ3DjFTg9LXzjb4tkNgDsHq9oQ4XHMC344Dp",
  "key5": "3WUt4Ts6AujMAurGKRNMHkac8pYqPassq1kePm4r2PztGcEXCQySFVdd44u7m4g86e9ojduBMqMCtQdbT1ShNJVH",
  "key6": "nyPpKQkDnhcxQxyv3cQoAHBGsvFupruevcExcU6WrZXJfUckBntSewfXzFnoMHQyxE8BDfhZFBoxsgSBEFn5X65",
  "key7": "fdig3afXFsMzLiz9H98PnBAhjjwXANistTDA7CD9aPHCVRqJe6bwP82xrCUxrRbFGBUyyr6LSwFq6iA7z8qGvSF",
  "key8": "5r3k9MRSX2rrQPzsPpxBRtj2TMgocdTiGBwcKAjTPqm1si5R48p5eyymZpAHgchrTseZ2PAci1wAEva2eTs85b8r",
  "key9": "3yf7g4G2vkkvuRd4pdMNbSjDMkDkazXCktkNnKyzsk8GZ9Uu9PidL7S3gXabx5PhMNoU8TKaYUxN988yCPnen44s",
  "key10": "2ZM9Krbk3MYh9Sm6VSFPUTfya11ameMbm6VXR9VXeG5L8W3A5L6bmRX67WemJ5A9oMNaNJrb6jhBLcpxBpeDqWdz",
  "key11": "31yGQCYMGu74bXLfUpe3vGFNM6mskoJPdosFKABkM3Xw3J3okrGfFGzaEvoz1SrYRfmhm61SR8BDUivuTgzoPQsu",
  "key12": "4CwjdYSP88LUHVnozht6kiwjaCaKk5nCopLLSKyPrqVw4upfAk5LKC9FWd2uX74kXR7za6XjRB8VGtfPNMU1iQFz",
  "key13": "21THCghhdyWsHPscWuYaCp5MnfMZNFURJS73soRbswMJySzR71Jkyzbf1RVEyFxiDsqGGFvUpriuV7BVQYKzBLsz",
  "key14": "5Tw5Z7RKRU2sauxihMByg2k3SNURQdnpiv6QR1LvdT3d7JA38HqtbAmLZXiFMFgvJ3yssgWGy1qREzcMFnRhw8Zi",
  "key15": "2q9FfkJa9A6eCQSmsUdqZUM1Qm6WgcE2roCZCMRp8YsAEwL3jmaMHfcHkWrCAk2yFHhgciS9MpACETF1XQWBbyUH",
  "key16": "2ZKNNGAXPueK8ekViHzcHVJGYas7KkGqRVtBn57HB6mHJS8h4oSXwqBRia2UjE7a92LXt7xpRXZSwpdrvEQrEwgC",
  "key17": "5wASMUhh4fpChcyn9buteVFnghXJNsXupXVh3oAZsoLSjrjq3J2BvXYbu5zGk3uRaqM1tA4gj6JSnr6LgFSVPG6z",
  "key18": "46FoeqjsStcZ4uEtoXsPcTWk2UD4sjzUV7G3qdq6WsshzQumUPe5qHZrmNjAZjzEzowKNEnQboU8WoHCFYHPyAL4",
  "key19": "5QQAN8XLic8sRqFHtiQLaLreAjDCuMxLrp83Qoo8dozYQkZjXonZUFoUEyz1Ap1nRZzi4RVUYZpThvaqusa7Ja6x",
  "key20": "2x4d48DSbxRUGbMEt8zcVRvjtp9EH6LCrBPn5bTuXA8FxPk88AkTMk67JSSKtgENPqT7UGVafaSQsJv3334yUT3f",
  "key21": "3pMcW3u4WXpARt5vit9EsBkQJJTEVTfkJe5GtGALEW9T5ZexPGziuqzyqirMfx8zEJ5xVUQ4a1HhHuPdh2iSECcP",
  "key22": "5Sb3KphEF1Xu4wapAuhUR3Yv8qRZhQj9hfQWTXrbuSC6hBEB54nxnv9jyFwcbvLCmRkNVSBhq6T925gsj3d7wYSC",
  "key23": "4drFK8NBePH1XwPSWEGgVq216c6UMoXBoSNmXq3dpWCmsMcAedBtMELD8WjrnX4pgxxknknstK2JLm1Et2oRYa6B",
  "key24": "3FoJuCubs1RMFydgmRsuyyyefnrBtjzxQ3GyHt48Bosa3i5LZ2BuYgEsn9G6kwTnTBnnPisCn9JoRediC9TwwN4q",
  "key25": "3crWYFD7cZBwA8oiCTY84nZ5Vp7HE4m9pDcP78y96bFbTmz4XNRZ4qayDgUaF9hMs6sC2AjaemuRiG6n4wPFU8Va",
  "key26": "3PWuqmAJAJ68Kn2tZ815etutwvKvc6NVp9JtMuEUZCEtAckXpiY6QgPwtqq7kyc49ZieSqn4Jym3Ff8yJ8JKgZuL",
  "key27": "22mnHV2iftX1nwkdWfMMK1dNu652cYxKfG1EiXmWdtQpjJoXoiQdHc6M3m8Jy2S3ZPd7F2haVvpGEZuFKksG4Jok",
  "key28": "2rTPLm5Mds3r4sDx1M7xmugKtVEv9jfDPvLeL8WNmpDJd17FzNKVLZvZ7bxvpBCacCPfWpwkCnGCUaNDGwPTpSCQ",
  "key29": "PZnHNqMuednmvatvDGKHo9ax92TC2eXvUDYKdK2KrRBLDSwQNNMEyfLRWiA46fcBCSrdvuvJ5rK4MmpJXc3y7LV",
  "key30": "488QFyZ66UaNZePZFyEXJuvAR6tLC1U4CfhWCQ8RStGbV84hEySuosN9TdzE86jqtNqYoUFszPsbLD78JiGYW1rx",
  "key31": "4WfZVsQjmKKoUDZC9cw552P1AVrZHLDksRWu7R61JgnVbYXah1muhwXVgLMyqG8XBWcspPvvCZ3qmHrduhZyVMJ9",
  "key32": "61xoZJbrCvEkQ5rgGpiKKNcwF9KZN916Uc49Bma4jKMrZaZhMiZRqSd3ptV7eQXJXGLpzVtS7XcFPhtAKHja7y46"
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
