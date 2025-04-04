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
    "283KF2byWQ3W8oixjZ4y4Sa1YotDjBNJf6EjL46N1kPaX2eoytDAT3E6imFiCEyuLGgBzhmkmBidBb52as2eCbyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZY7BavkDi3xqzaHKc3W7pbHbe51RQXii5kGUERSAfiaTrcFXqBP8WqgDcvqwhtXkYtjvfe5YKuGFXaP87ioLDW",
  "key1": "5shJRswgR4LminPuoQDiZLPKxxMZfFekyV4z1QQbChQDRWB71sFtM2Nua9YbgFDeWmG4FTzStHfs9NTUCaXFYt4v",
  "key2": "ze1eQ6QdYYdxaBAsYNUawVfK6F4CHqQtkp1HfBjKsMFcRtxcWK9uMEVJPUATzAdZ9fC9Bmimca5pzb7Lckzm3kj",
  "key3": "4gENKNeZ4wUVXtAReYzpQdwUucvwnWvxvc1kxKBqhpDQWbpBHJqCax877qHFgQrbsKj7tiT3nP7FJVhvELHbMuBk",
  "key4": "4xmvgGv3PtPLbThtHo5J7yQEWCqMxy9z1gZKigLD8wjoo97ZUwtfgz1GRuGtXSTrSE6GzA881CawGkESpseEYiRp",
  "key5": "39BgScWTzTrMNfQrbBVnRVM8cuF43RUuQQiUAYAxwFLQq7dgvWBkNd48Y4hbKgTpti9gGVDnTHacSvQpW7C8k27u",
  "key6": "4XoFqYYByxiC5sU6qDwZCzU9Z7nMXYYPRCaYRKf92Q5gepUcLStcVh3ZRBt9ofnMZyoG3XKsuYssxWtDtP2s1orW",
  "key7": "2Z4iDki5BdqSsquErrkGnpsnAU8Nqz2uAWe8bQ2PMGpN5iaS6EwDr9rn5vZtVADm3Cz1Wm1gEq1AiSTLqxQwyq7Q",
  "key8": "4VygzMVqsbQNziS7Jwn1ksFABVqJtH8PwJHwdmizv587F6LD729VP36epJU9GQuMMj5jiVhUaXMnn7UWCeVCPQYz",
  "key9": "4bxwiWxjQ819jZKFobyXPwECm6jeepzxxMZ5PDbVvRH86hty9nn1yvycvMJQvs4hQpv39x276e6RtSbrFdiwRiLg",
  "key10": "37MsWTgxsHDmm1WKhtsq7xpJ8kAbNxSehFrqHz6Dg7BFzUxexWUsxXE8crzAWiULo8fLyCrCeMhPhgrWdbMT9vsH",
  "key11": "4uq5WjQeWrM1jwn2JVDcRJkx8jGHdJBBxpW7Zz3SogzMmUTxiDM6T3FzFLVhbJELYiK6smfyqGhPepKTGtWwf4W5",
  "key12": "5ved12Kt6KATyztQ6oAt3F3VzhPA3kL8hmEaq2hD9zVuuAEhbgu3CXuKSSALJ85myTwTpMPLhWQ1SiWfkzNfuUuY",
  "key13": "oYhfvz1TVr4s64L2mgcPoNk4Bx5d1H7m9bPNXfTtRdBcyGmKsd1njpTsHppRay8GwG3X5NXkrgPvsxfodceQMAs",
  "key14": "2x8YF3X2JBtcgvP1nVJc87UdMKgG8NAK3W1Cix51SWt8wAXXDKnvpZh7usgQUxqnMWAPGnCmgg3mt49aLk8LbwhX",
  "key15": "3kb5HbmPQG51qdtuLhqhQ1WiUhKc8smpT1UBoLEWPRjQYNmAxx4feDryLxm4yS4ddewWJo1hhRnk22NUWrFcqVii",
  "key16": "41BW7BMYjBiPXRKvRE6KzUjHv2osh6PTjw8cCW3qPyGvJajAoPHBT8pijPaE4JM7sPzLDQxg3VZdsXMeZmK4maPz",
  "key17": "5ASqXnqz3hzH9iMDk2yNjKJCyeG198iVDBpya3UttuoDX848vex2wRbp4Dr9g3xvKVwzCnMhBvj3FRJPphS26sFU",
  "key18": "3J9VvrUKX1NpoXz7DPUaSbYtn7cYyAHvHcBWzdaWWKio9LZVzJtbxbir7debqgms38bwJ2f8pfWPzm2NepJF8xoa",
  "key19": "2D2BJvkeWkUAs3mj8jwGi8x3r7Zppv3GTNZf1GsBTcmLWWEApUqQYAUky4JTCyRkhXXcaaXaZcJ1mTU6qNhdi83t",
  "key20": "3UmVdk9vSCjjsMdaumPaL9HaSZwnxyRtth7fJAUvZ1fNh7X6Q65MNo4Ea7g14uZAF9y7zifDHGX3q4Cpz4Ph9dXR",
  "key21": "2VNQuvQFAzMscgr634oivfotTmpx3wV1DdEPWpa1nkkbiE2gMDYbpECPqsVV2gia9uFQbEEVq3tc52CCUBbQePsN",
  "key22": "2ebTLuUzsF9Li83wUSjLU8n6rsKjUFDsRXHrhDxCfqpaWLtwiD3o7ogsuKFKrvtbcyzRqUMHQwsrLyAd2M7wdY5R",
  "key23": "oQHatuRSohZ87CUo4JLD9bF18PkMc164CgguBPQUSBhbYceMYzMPAhFgA54KgwUYLtjJD1B1uonX47d3WtPdrgX",
  "key24": "2cQRWajvKHWfaBdFJaqvcaaAiN9cYdBs725P3tMWSsj768HcYQP79eR8xr98LDEexGz6DBxVVUA9Kw3hjwCNSRZS",
  "key25": "83GcZHJZuqPtmWpThLgMBMPG6BCtngyKQGJSNjq6zMSvcb7yqX88T87ZzfXgpvQuGTnTiAJfSLvFDaVioNDazpc",
  "key26": "4P5TPyGby7WHatFz9KytNqyzJHaQefaUMdMFq7g3hetytZGpc1BbZvGfQ5kXX1TTo5YT5qPBAHZqYikiTsVTq1FN",
  "key27": "HrqUacsu8espwH7ZNQHDEhPQ3zo23pyoVESEMf1SKaUWvqYsQXHMjsmKXH658c9NjYc6KkyrfVG6B5GZkMVb92A",
  "key28": "3pmZaMSRcehM7AUMvwVugJHSddnQahcP9vkrL5imN7UGgtG2MWNhKnU6M5WsfyPwG8Vi8JYAAywvbRCZanpZqkDo",
  "key29": "47bqDfeUqPgEQaGaqht6o3mkNRUm3KzFRH7ea9SFNBh4HjmmbsWxBvwCL2j6WcuMiif4EoZxJo2ikkMFJFmdpaKx",
  "key30": "3kuyrLucHuFSP13cc3LVN77j7isTAucpPpBrt6LYX9obmJH3vghwbSnewg7dqTBQKjjKgRmVzXLxrpVRcCcAJ6DE",
  "key31": "4Qi1Lsu4hh1zLsdPLT587aK1K7HsVB2qoKe9pXvC95UusSy51XkDbVcoAcM3Cc4phU3WL21JAciBWc9m8jP7g2LL",
  "key32": "3tKXaNT3j1tQEwbBytME9gesXWs6BmELW7qoaaAbpej3g2KXePa7yrB68v3mZCYPwFcgW8pR72acsXrv3kNMkVVd",
  "key33": "46sWCKNVLc7ScE4AvLhr8MNegAHAnb5rPy2vrwjGk2stHZARFRKFZ9XgJy6TPvC2t7GY7GeFXHc7FPGWSjKN5rQ",
  "key34": "4hHeyjG3FZhypRvLpjutWa29icr5HuiWev2kPEV4dhDTGiA2p49JrQmDpGB18K1yVYePMaz6z8ZsH4LrhLS2naeZ",
  "key35": "5nUrNErZDjEoBDuA4Cc2a3D4bGjUVYaywzdFt3zL6zms2AcHSHaBs1YCbU2LGYX3X2Nu4B1q6s8iQA62vawa3jD5",
  "key36": "2SooDpCWmwUEywf4WHA4HbHgEkkukuZcJyzU5nexbdGfjmfqLE17EPgrKoDhM8BVnrYWpjSveBiK42rSwWY4Ki1s",
  "key37": "4kxfv4jwjMHAjQCouBFV3Gj86eg4wpfhkxtxXxWGjFLPgMBuzMpfHxWn3JwPGUaPCxiTm6REAnCqboXnVdX8q72s",
  "key38": "2shumh93nxkCFL2EVnVPH5uWJbYDq1Rpbx26hY4Wh1GfwP3EmnLYEjnJRfo69rXzdCj4rDmqepNzSvUZAH5t8gWj"
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
