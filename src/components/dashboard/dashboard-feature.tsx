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
    "3EtAickeenHSzHw4rNooNnfZgkZgb2a1a4MDLLNZmVSxWGcdr1Ljfd2cQ9EpTZzcYcnhbKstouVdc2HhPqaNXMYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eDSgkLD82GDDLax63HQ6xwmbcHv1gKyi6NxwxYNfKBqJqRPrTyAinjiLjkD2XzvcHGXetmtWMt6ZbEMLmVxuRxC",
  "key1": "4XNQD1ZcmTiAWCFxmxWqDLDMGKAa5yMxaN2vN87RquLV5QNnbNXXfd5aRFyD9bSud3wPscqwSe6RVs5juRzKYzpp",
  "key2": "5SxcHWgsK9wYTA6BTcPrQM2YMVYPndxJ7QTqFhrt8qqdZJCVYjKUeF4yL5sqEdtQm9psC5jdXTZt527tDHq6eGiz",
  "key3": "5zZemg5WLGjB2vDHZozdZQdUVf5f6mTxz9N9eTXffLn6nPGZF769vsXe7ZQAEj6zRcraeAtmn1xuiMszU4EdDtb6",
  "key4": "4GWX1AMTpjJX4DdKUGVJsmivbtMA5DsR1isa7AvLC4v9pG5Wgnn22Nv7LdGuS7KT4QUpMGS5uGcGwksHiRPXFiBR",
  "key5": "cnwg8KyqKLPHLCiCKxVD2PVT4hr5n9X34bfH9cvfLGVHEgv6VZE1PqJDdwhvxDudxWAPJXPMZRGn6GnvLi8akBy",
  "key6": "4BGMLdiJRE22guKXUjrAbWFypTZJKM7F4ohWs3VQso87Dy4vHizoiovhzhYWfyEnA6BBL9AJjfU6NT6i9rYssJ6G",
  "key7": "354NEFupbKY2y6askrDNQ1PCBx8zZ5KDT8gnK3JJ3tp1yi9ucriKYYNhaP8KGGMt7aNtttZVZvqX35qkiWRwLUVW",
  "key8": "6RMVBdDYrZNMx69Yn3D21rSC1j3DD4hUuvo8YJrnkctQvUMot3sT7NgvZYViEMGxZv9PTjhziNWJTyTgavMQh9q",
  "key9": "5tmkq2gNUiKKXa4hBhbzEve3SCN8SdVwiYGi9DxPhvYY5XjYiZiBKAR7MYWQ1m8nTYBDzrkusU2VpsoEAuXNzBit",
  "key10": "2c1B54LUjsAZAZuZLZeofyki6K9M1Ud7MnQb2FVRbUUhUwq3sdWZrw7px6jBA4HLsvq3hSckRFzTyA4BqDXUtmLy",
  "key11": "2NP6GRzkgmbp4brJcE19Qx72be1gS7Rvp3PhfLejS7ri7jiBqQF14SmnfZAgdAsDjZLHAukBMYCyp1dJ6qBxQgY6",
  "key12": "25za4eta2XxHkLwsWtkKK44vvGh6gGUykrgRSkExiJpK8BivaY4uw5uYSd62WyMqgiepc8HSiwiphta9mFZsFDX3",
  "key13": "65mKTbsvRwTVbUFaKhqVGFyWVCVkv7RS5huQ25LDiTHJA9w9GzBqwxpAdJQbU6TVcofYe9jRVN3dKbxikFkx9kBR",
  "key14": "5bgiWkcdMGxWwqM374wyHm3v9DUmZkz2PhqdFGjA422QKkK24razsHLV98vz7etK1UWkCvN2jPgkcRTADy41BJDS",
  "key15": "554e3HwA3fNKq7FpW7xymxPVEeiqQ9RhZtypayzoEzzZCSEpEuZFyLPdundkcKojKPwbVD6MrzehrfK58vX7AXAB",
  "key16": "2cdzy4St3qf1G4b6RW4TCb22AcHQXKtrwWguzUPPyZQX4etgAfmS1Q4NAyxbY8Gx59ihzWWoQy3u49cAybBhNCAo",
  "key17": "3Df4sYsxx5i4b51tTZ9P6MdpDyNmrD2dR4Psq9ZFrj92ZqVZrCSk9KKdSHn6k1g7gPXeEztmRLneqYaHukQxfJFb",
  "key18": "5rcbc1tv9YYxE5CvVPwUcwSZv8vHBuxrFyerw7PRuhg129FnmtadHhQ1EsVyJ7H6WPaforFxGTbsmTZQb8UHKpJU",
  "key19": "5WzcMEtCyhkxWD6ky52jopNUwsVDWMvgiuiqRfXE563nemTv1JxA92asGCrT8ue6uD8XqKBHW2RTcfTKjyeyugDz",
  "key20": "56P3E7Mjwh66nrCkot9oSmhxmpo1eJ4MHmG7sgrvfgrvYssSkQdiETcSZSArczBX9tpykjSY5yXa7xy55vKbgAH6",
  "key21": "5NGwdmCscV1bxWP73DKW2EpcLw5FZsbWtxjPD9Xr4EWrtNexh8CD7fyqJuDJHmLWVyZ3b6YGG11fvrW3aEoCWgd5",
  "key22": "4hqjAveXdaeAczcEWwgQ5C6tdjRmG8Lrq4qus2NH7czK7LTLmwHptN43cHP16vBGfiP8FpiRtGEs2s7sWEfXodL6",
  "key23": "BQg3LKrxJ6tHjBnP7gGnaspqkK6swqxssC5Gq7eN2Y6vs7mjrNKuRkiCKxJK11drUckoHKAnF5iUdo8pZZG8Vxx",
  "key24": "3dysGj2JtfSeFdWpDwKawTHL7qvcEhXe4X39p3ajZKPjUYUE7fADCax6yGL72NJo72Dhtqn9QuFfBt1mX1pmEDBr",
  "key25": "2kDGW8igDgCkmoPHSg1LW8cdwG4mUredHtXAXNyJHy9jtBMTw3Sz9dfpJxgUgL2YGpjJVWNZu5T2hZ4KDWmmDuJe",
  "key26": "54fbh52pHDKAdfUzuq8Rgp47awvUyCYDMXthaEt9v9g8DqRmmWqNggyuEvsHDExfVVtm3anv3VXXgsECmfUNwnjq",
  "key27": "5MMytZxaU9iHUEpdxTWeTwS6PFTFqtVxSZMFa74j94EGPBCBWomQNVnoQNZpUFSAoByMzi94TnsGCBtGnHNWEA7N",
  "key28": "n5aQ1CJDYjcaBdUXVVVS8VUhA9hEAwbNFEuNut1CkFxRZJhQgYrCdWTacBSJMomjV23p46CrR6dZxYdcDunANvE",
  "key29": "3D4b5WF8XFdnxF1uXRwbJcjvegdUrupCMtGas1ajVXvgCawqSPs2AKzVkF7WvYrHw1f9HQ5YaTUencsDQ2BqGTtn",
  "key30": "3zrgm4z1Go7beB7GhYCVacvwR4U6VxDF3MMbosKpPqzd9Gs6Ek21nAswF8vNLhyDLQz6WjgohWcUT3pUGMyRrtZw",
  "key31": "5b55U8T94af1HFjYad76rA6PmJBK5WKpajLrXFWtikS5n4HeNcwmPxLT8ehMSxk2VCEXq9AjD9QHGrUArtLvFRb",
  "key32": "XagA8Bd2aTb2udea4WEpmDEHrS4DEGibCZmTUG5GcipvBxLVVPrtCtUaAmwbSrLZ7P7NjKCy2tctS5j5ybQveaa",
  "key33": "53gwaQan6sYSYqA3iRM4y95Xj4zfsB9FbUK8YXRUfEXPZUoDVRUZXFfspaBRu1ruScYVrF98Xo5ybwbQTvNAVzuS",
  "key34": "5w8eJBb9uHNqhZTdMeWXWcHdXcGYLgkA4egvzW81B2DKQCdGKGo6XSi29EJjsrrqisjrvrqruu7yBCLe8WURQE7M",
  "key35": "65UzgvXEFqXVvZFcNuCdswsPwbBT3AAZzx7AHRVbrCaTpCNQqfirxaGS6utAmuAo5y7E51PZbKuZYFznAUyp35KU",
  "key36": "5HHbcKqxRRXqarPo35ZAR4cqGUakVHz9qERnVjoBx62yG4YwbHG6syt2ELuxeFURAh48NHmgXZeWFtQxop7g3xiT",
  "key37": "5WqKdTG7FMTbiN1KiwrNu2mit5ShujZaqecjh3QPmowncmSxxLDsTdF7TC6GviYj2hqQh8TvVTBtCbguP7CHDVjn",
  "key38": "31FmyQgsSTS1XwmkYXJziPWBmoZ7MQCtJuTMMRD7vqg2jMdVTNy83wmgSS1CVF6gFfs2yPsMC2diMrqqpSWji39F",
  "key39": "4nqqKvFBe1eknEsFNj3Ewg2EVJuU2tGMyVe4BJSnJ7yDo6XcCPitKotdBxH2R63rmab2TWctan9tptaskrvWpezd",
  "key40": "4q2pwcgTWnuMC3krJyf5WpJEc2sfVCbs5bPV4NTWYsiqDCtinkV13pLKGTg2HKx71wJ4QC4UZaoYExiss7s8HK6s",
  "key41": "2seDAEA2DgQDuJFg8RLsxGPKmTXD4VLp2PjUMV59de6ZiNSxiPZK7Rri9FsSwaEKBqX4hQkP68N7KZzBNqRWezqz",
  "key42": "4Gz7ZtQityiaKH7RCSJqjAus9uwkS4nQ4CirebwLP2AtBkBbXxsEBr5uAQ2zZprQPdeztfr8Z47V7rLUu3hD8YTE",
  "key43": "2CeGG7JnFv9G2zaVs7jwW35yPZm4nwjo7M35YACBTUWcs5Ww39QuuAb5N7EhudBCiks7T8fbpuKjN3th2c4iNayq",
  "key44": "4kxHZnzbbeFFwM5apBKGa7omhWwuvj3DpJpS2mwxbi3FEkGn2UDREHCZLqdXEqofUCxMGj5qGvwjYUrNwBLH4UQe",
  "key45": "5okTvhcpzzeqGbhb7m9iRJgvZvEmLzh2kR7SqdLWBkudyP2CkjwF9DfrXhpotLMgtuvj9Qnmjonk4d4y6tZjo9Ez",
  "key46": "5PRjKEe8d7bVbK9nFDLGQD3VnwzyVmsavKjZzLBZbufhugBwK51f2WoCAmz5wBJP1XHy9AiRm1vFth9BffD7r6UU",
  "key47": "5jotmkvvDzgCFkjSH1X8MU6wezYaV5nyfTkva2P7Fzh1tj6aobKuBfGhUKkuuX9fKHGyxjL7Lc3mvzo6PnwmgD6L"
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
