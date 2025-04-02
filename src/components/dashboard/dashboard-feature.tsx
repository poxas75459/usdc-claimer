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
    "4MbM6yk8sQDPBQ47hEMXd9JouA7s1agerRsFDKGJA46BYyGp22jfHycxshFvXXx3J78YeYfotpoLdu7TS2nxDxuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23nRJmZHihWHwM8NVBtNukg6WJokE5aLXeGAopbowZw12uLCyrwru2BzXAPaWxUeH4ZGCsAmDeonmEcamTTQSJRf",
  "key1": "2kPeFCRERQNcPG4JSFVbsXKkzNi69KCjYAYPCxFCAtkggbyvbyzobnQMm2nSFQ6fePzW34QgUWRBWuTofRaLacps",
  "key2": "4T81mrujYBVVWxERseWJW2Kpz4HYMfKwLHNZrARY3Dqxa6pnsFK9ynRM9U8gdXEvsEK7MkrrNhXnWKgP5RqMbshf",
  "key3": "SduTrgcQ2kxPBENNPcra6G3c5MzcAVLX7MdhYmyidfdZAe1SdH4Wf5EgXbVPzSgEFeGeR1RVac8nSMSQhhCXneB",
  "key4": "5RngJXjER8C5Cx7PMTrP9NtiMfm64uVED2Wy3376vAxo625vgoSoMphc7H3E7bwULbAX7vSaC4T3o2c6XKNSGDiG",
  "key5": "YxsZNUpvnhmdQmKHnjVPBFMQwhPWtD5i6i1Ghk8xgrkgozBAwkwNoXJSrvk4o565R3fbtc6Z5brUfAN9Y32jRSA",
  "key6": "2EfqZe7uh1EY4YxHSu5YXYbPewx8vNQ1mJcCwakRM9LHG7bufXPTnqrfZzx6LiTHhfgpZjzGRjo4YyN4vb7Zid1G",
  "key7": "3iJ9m2f6yyFzwWJ8uQadEAT7DXL4pUvcj2c6in4f2qseTH6oQraaokWSkJyqUy6ogCjwk4FrkPCFpTYvjXYLouYC",
  "key8": "3ansmQEYZqhPzYDdcYwzje3eRVmNNPPUvHjEjfsJfyFEKk7roE5wLBQckXhEsP3r33NBaADLepgnpngF7KxycPm",
  "key9": "23Z4JBVveRKbNqSo5GEEWNKzpHfug9f8BWizSxQiRNuCKMNxYzPYKvGGvPVchwJ8AmHvrRkzpyuyvJ9Znb3tudTL",
  "key10": "32d9KagyoSvRVBMU3koB3W7DBKTMt8L9tiLzY3PzyYKUE2hbqKjdFJfwhgnKxPMbcnEwfyN4gWrbGQuFBhjX198G",
  "key11": "5HY1F6Tftb7KouZYcpwUJzHTcphnadsMuwXDUUatCy8kTHtjFsnudXKFzqJc7gf7xBt4FthU6iu8LeZezLJfon2C",
  "key12": "hc3oNsMM9JxmhNp7ffxHawaUA2UXf6uXX69bRewMozeZJMdw1hiNd7a8w7L8GkJbmHVe3W53nJLvywgMBtzuYiC",
  "key13": "3nxgiysTFWWXL4ab17CVk9ugRLPc1g7N8kK5YbL4R9gZfReVoP27CGDoqhKEURKv51HcEbRjr5ALFc3L3SSc8JiN",
  "key14": "2gYouWXG4zHAGMkfrpeCxJWJ4HBVpYW1CgUcBf8itiPy5X4Ljdb77jhVPQG5qeYazkEKJwyXaoN1Uv3YdXQEU72v",
  "key15": "2DpoShc88UqF2sbo33vpyMwvAFmbjxHXyn7VGB8mX7wvjVY4ZNPRKT7NR3EkHpXTuV2nn7tpQ8AMGym6ixMYufHM",
  "key16": "57vb5PZB9UWop5L5eWQxpMQMRiGqY3rGnwkLUsYpUb264Hf8hPXUV4TmFfcwSn7hm6oPSLQntKsmCFphNTENFx3Y",
  "key17": "5avXDn8rwfDq3tBmAYQEG9JiHaoQABbehUq4yQXQiLnYRen8Nk9QCwWKNShuufj6gdp4LVKz21CcAMNr4vqSVGzQ",
  "key18": "4ezzrAzDzRuMBjjesnDRdEzHEr9XXtSN5nk4ZhjonEC8AJi5E4357J4ZvWJGhXtWf1emnyzppkogquDcjyZqSPqM",
  "key19": "3CZNabK2TwR5GcpwdZmgYQjJs1Ye9cfkMoGS5kCBTLJ9a4GFa6g4uK3NHiPJLgtyQaXFFv8Q5ncgmbF5PKUfsKm",
  "key20": "d2jsjxN7HeHE9tRvT2Pekm8kJzrpe55TmyHkfMa422i4tp8kxmtQNExywTPb3RRjW2MKwLyZDwwwZiUdjzXRTUu",
  "key21": "5cmZk6eqjgrezTUYcP1ZZjZwK5h9iL6kUr4MVUYFBSzfCNke9H53pi2QRQ1raCBsxYL1asTf6XU2WhVH4TJBTpqS",
  "key22": "4UTZHHduU16kNqXPsQJgK5Y6Voc2o7wbdSc44XxzoNkfu4Qf83UZ4Qoi7cXEmK66UTKF98VdYB1arbsio8Wv5mgZ",
  "key23": "5vqK1uJL8ukuzVCCgpG4NpFapcNEL9cSq6s6f942FmEpMzJEaFM8JzBbMHH558ad771Tjciv9iVeKrJfh8xn6k78",
  "key24": "tS79LAXTnREFrrkhm3Gu8ppKUNRit9xsRx5aThj4bKTJczqSSobC5CMzWNEH5rUPdVExJgsG3yHK8UX2vzyZNGM",
  "key25": "3iutUDycnYg6DHqyMucf7CMsHxTYH2HKFL5bjda7sLDZnGSAvGKeibDRTpjb9N1hGLM3992kz29DN6529bxkaxmy",
  "key26": "3oajEeVYZYj1QQj6kpFQRuRwtYtpnAXF4sCMjehzDiv9fUFZLzTaqYqXqHuGk5Y15dhGGqTiTiXgY6toPTth6RCX",
  "key27": "5ucVUfGRjnn1PLsPpxKSHED5aCpJZsLL1degKMAtFUrQuWCKHt7neNxyQ9PGk8KeFDG7RPSLETnTYCsrT6FeQBd3",
  "key28": "2RqxN2FFf8MpXqQTnipbKvoZive4oSMRm2BmLGGAt3huwFZT8J35cYpbARKWpLyeGMr9psneiNqPcKDhNecxgSh4",
  "key29": "5yCTJTQ95Uc2k2f47mA9rreMbaiDQE6P5k8ZXBSbwRkVJVLXxmZm3wd2twGoE9JAowiCCc2fpeVuzCr6N6RnSRoD",
  "key30": "4ZdtZHpUNL8o1NgfocruEL5DGxtqc8sUPUDtSdfX5pa6aak1JSCRFsYzNubrF6BfKFXEcFcwBq8NCKZFtY11Kqej"
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
