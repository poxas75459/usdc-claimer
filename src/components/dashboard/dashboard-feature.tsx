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
    "1JjKEUnx8tSVs36AAitNrMN5MoXmiupVTBUXTx18QJcWvos8mANtm62x4F86suAcrDpC9wdMbNcK1Xra9p8TNU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m83uierH4Vca3difD1xmHHG2JoM6TsSQvzr4h2sGmXVnWURYeovsnNqeqEqkVZSkoPWKXPUFT22kTuxBNjTxFzh",
  "key1": "36sDNrehA8xVGViyxGqwLM8sFENwVuKNE3E7dygRFqnvLuRCWrUMT7QFAvc8sTACtDbgeYDSEdyohW2CvF1P4HbD",
  "key2": "LzMcJxM5qGtRv3nrtb7nnmC2g4JW9Kf6Pe2jLZCZMbSRcjmoYVtb9CmLo9HfogN8967V7pJvX5ArjkRhnkBLfmJ",
  "key3": "3aCPBVQqGDoWwWjUACmayFXgRRbtKh1QLpjSegDuxoxDZcHUp8tQ47ZWRRpKrmii7SNq7wd4VEA5PsWCNMxw7J3f",
  "key4": "3hfK7MhEWsR8HVA7Kr8UA6cNdJwHXJyp8HhVCRM3V1NvMG8XBzfi8PXnZJeYQdwZkeHbyce3ui8MikbXmEq28ywN",
  "key5": "5xefZKxHK1vgAFhntBxhAajcUszTYd3AZZMgeMjb5f8h1vk231SBgnxyD78XPfxbNoTeYbrNYAgfmkj2qUV2CTz6",
  "key6": "3CWXAFbep1pcf9zMz3WAaG2z2PN1aHab6dd7BVp3gLUM8nhqyXyZTXGxfmNGjdmpMQyLqzwdbCFWaVkFhtC9Zoku",
  "key7": "3g9KyYmAaPgzWYbac3xved6JQSnjyQCWQJqK9CX5x5fTKCPRC4zpbkpEpuLDEv7CSYfaRTo3meveVu7F7TRZ5G3T",
  "key8": "4ehcE2UTQ3mHuV4GVE2vx2N4gvy79GisT9ihXcpvfqy9jqF4sXimf41D6hpHqrFTHfAyuubEKEtCZ1ZpQUiLWtWc",
  "key9": "43Dzg5VrEjrL1KzWhy74rZ1swMwjfX4ciSJbxAMCjxKwocmbbG1AWe4PEiF3MrM1ET8CSGgJfVH7U2enCw7TWZeD",
  "key10": "ovdhLe1v7ytaTSKBsAb2XP4g5nY2PK3uEi5gK3UEWHsscEe4oeF7PHrigrwuGJMsECBzgFuw2usnrp4CQ8tf2p9",
  "key11": "2iobS4SBd3vjmGeqeMuT7o3dp4RpxMRLc8bayanoTJhVa3cGviTvdsnGw87uVgSfdokKHBe43UWZAs83fvWk1c51",
  "key12": "4CSeAZ3vB1emRNCCtPMGAv5XjFrjTU6CSz18o58sbRJdTQoFYER15FCmbPrWfzjTjNnJeJwxLNkHjyw4Fn9ymds5",
  "key13": "aMjLvVEJWfYTwXuxZxoarY9jtr6N9aF6bNsS3MHhqEBZ7Xq4QR2YVDBvA2F7KNktjR6KZgaKvDsneRBK1hgr7NE",
  "key14": "2KcH76qTEWb6W7EKv6Qpg3YJiJYjvPfiR6YQtXLfHHnJg9cXWB3cavmGNL32FadeTTJtmWv5diwaVdT86XBwWZa8",
  "key15": "2vmuV48LZjz6oueUSSwmVtc8dkvuoU6WMVo8MaPFv5GAajyfCLACMXjQoz7buqBmNivihhaxNd3bRPGRQW1Myr7R",
  "key16": "38fbfAiFkbdmkdLz7jcFJzaUXYu6mgBJNWnCcieQBPqDEKFdJMnMAN7icGcV24npWS8GY9wFkSbXaZn91RGAezGb",
  "key17": "4qLekD16gYhybYQrVGUfGK5c4drgJr8hMAakH6xDfveBdpQgDxU5q2BupatZnxcqbjV8Y7ozKUzxxjprKeDSyUjL",
  "key18": "iTuJMYPCCKezRTuA5h8HgJp6Ek4pVrpAMU2mZBjysRCrKyAbwLpYNCujaeUcaUcMJVrzze47CL9kbE1UQMeVy7q",
  "key19": "3jMCCq3ABwmKX24z9bXquX2ARb5RR67RWNsLSKf5JSE5SmzNH9foehZnoHFVNZaeoSmZ7fWb1v4bhrMv8HojiSd3",
  "key20": "3AUSAq7pTtjHUkVYteTBerpwYZdDdcpM7Gd5ywyQqD3YQCcv4qsecTKyxEGAFuL7Vza7Cqyptdy7uZeMra365dv8",
  "key21": "4z9mjzkdnVpUwHcYeEAsjqgJXtMNKhoZruP5GWxRJMVN6N9ciWKUzwhCegLEHjKYNjxvuSGZEj8rdxrVf3jtbqKG",
  "key22": "5otiXEGYLcFePc3YonAB79zfzfsGnaqmAtFNN97bW2AcRevcjrEq2uxbbtBdiCNCZRnP1XtS5ZrNuB5rwViQKKTY",
  "key23": "537CLwmMfmHDmzT5ZJ5GYvayYExVXwvVjwZpeNjADv7SZW25hefJ8495Ei6vtMoMQ6artdQ3UW56ePnPBckNsZyA",
  "key24": "t9fErDTXRvnZH41MeANi7iBtgxQvWpjHLv2MPpVZfNkex7xDR6U4MzoEpZcP1TjexCMBcLChsd5Qhp4WNeM55ZU",
  "key25": "s8SvedVmf36JNmJK57cBrNyySgoYJSht3F8QVP35jceCp5VMeAg7jdEBBXZa5N3bJPxhs8b4XQobQUgqbJ9RMAz",
  "key26": "2mZ1YAXtZUHZJWjk4PzLiTnFZzkXNpFTQYvDGwXpeiScmvQ4sN6TB8QGtnCxZBzvtjhJvUCBDk6QN5Dsjj3u1RJ9",
  "key27": "jEckuCeJafXk5dfcjxJhRZMCTQFboaEBYS5FWDGVu9uwfG39UgD5erWoYLLL89G8WzHoLyMGLCBL1dPXirTpa7s",
  "key28": "4cAhjrCtmgDf9CysRJ9Jox48rZBCvxBH8tKCWq9hYBSpzBVLBdMb68bcnbG4kpi7yKaeQhXHXKuu6xxEwcAMjmeS",
  "key29": "3CyzaGfg5eCAsWYgLCQz96LyAGLZ9RKYzt9mSExgaGDj7Gazd7QrTrBaKyMYumHMDnGvzQjcE5EnkEpHPuWhUBna",
  "key30": "hsVN8kXZCYp5GKdzeEAFP26hPS381tgaGpRitjwura1gKs91CDz52TZnpLBCtRzh8Hoxiqt9aiNqE7zmiteXjXM",
  "key31": "3okabERdp3Z3gxyKXzMiPvVszcw98F82FzCkKW4RQ5MaYe82VriKYHK8W6xXxXQd9v2UyjaPfA3rQggKkqYHVGLz",
  "key32": "4n6seUukYFkfbE434Q16JGzcAAjWd9CCNJQFWJnJTX2CEfF4fS1eUEU3YNLY3zKRhwmRr92tm9NErY6hwK9CTwvb",
  "key33": "4mtNkg7W4RU4VeSvvwsRJxuKn8GaVvBXYtF8ZGzXmvj7pVwQYKvtYfm9LHzKRLnxn4HCHNHJACsu98SixvsohJYg",
  "key34": "DS8V8huCjhFvsJwLPiWjy5pgoXUdGdvy2a56pqAvP1bPhqk4WuuXL3MXiZnHnen6bLJ4Eh85MyHvSG9Jcr6wFNQ",
  "key35": "4tkBPd5YgWWtZYCQ2occMi9pPwLVJsfYSNq2ebx54w1TUpH2hCHxsNenmdgvyEiLK7rdZYyyrko2NByZcM1riJNA",
  "key36": "2xUuc822Ew4Ab66MqLVTVTciZ3u8NNgY5EgokaDW83wNkXeEHPt9JKB2WbNQ2hnuLaYgR8sLmCEmsEsRKhLtBfMk"
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
