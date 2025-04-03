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
    "3bYz3v1DpJrnsuu7Br2Rmfe1YpxABn9jpsFAKNV7HoXo9AfUftJA8x6waqYRXDUGDvwoWpVaedcCpEsoAdJPP5k1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SbquZdDamtHq2kTWgEu7bFAqUzyBhduhC7kUTqRfzBmbRY9Ag1beqtDt61uKJMFxVo9DkgyDostZDhzk4YRJjAt",
  "key1": "smvc48gizU75HNfMM78ZKRhvEEYjimVKChaNooY3E7ECzB9JmavQTuFLrCEKAJ9BjBNfTrSBdDDFvUN1wZruLSw",
  "key2": "nsPy2xS1idPxhGjzmvkMX2L9XEACSJdfqG5ZnUGvBwNw16x5uEhF4kfdtQwqdp7ZFLtj9E1cTgxUTBKtKwwvn27",
  "key3": "31Ft7Awiks648BAKPbxDF1BTMd9QNwpnBWEbfKj23yqp7pwzVRS7LPQa7inKYTvPkdUdg4b7Z82kUkyCWUtcyn1f",
  "key4": "3dFayVkYj9zt4zf3KN2jdYcNDW5UKQKNq18bp78Hu1cQLSdX9EWxxQPWtuMj1ECSGyAfcXuQKZoJAo9zp16URugc",
  "key5": "3XL8zXQTw5kzJ1T13f6BLgbo5JZ84cq3UJzrSfPofxvTjXTEBLoMDcA4ykopVEY2fnJudgXvah9PpxPCVF2tVmw8",
  "key6": "2mfYEtu7eYtPKeCu7kdu1ZRZvGyeZ2uoWvKziXgybAouCzFpUfoKKVfM1MMdgp5B98SdM46qpBZsvHJTFnGsiqC3",
  "key7": "4Yf4KCFttEZjvwjXgTuabtMoGQayzBA4zRH68XdB7QRSe7SGt1Tt2sW8QC1g7RzEkZDJti1QdoeSAms48RUQAHPm",
  "key8": "31JjuCeXEyhACWNG17x7rfkda5pYiRAMA7UvKkLwEeReka8vpnKt1gGpszdiKZNpgTpYcpPor93pLh8nvvA6Mxyz",
  "key9": "25MbnLuPySvbvGMWcRsJVUXKz5ZPsPE1i17wFomrt3WDCxxscrvtk2iomNcxWHoM5U4dG2wVvzz61jmd6U8zq2jF",
  "key10": "2YBWq4EJQtWQFU2gYoQhu1bNpNncp39rNs7BmAXjxhiyJVKtGPUqcBNwKhY4spqsJXS5yyvVw1Xm7PZE7ejdp8Ag",
  "key11": "5qM2xNhQFSF3qk1sxRBAbhAfZAaiVUpquyVBkfeDXZRUwEABo7KF7utugBG3inL8mR2CvhgLPW6f7LTepQEbvhJ9",
  "key12": "3xb1D1cEgD74ohujzNLjLDNywCe5Se5bYwie3NNcDc3FRLYJAdRKNMmApqtDtW1k8GbPLJKbUrEwpTtGWdycj39n",
  "key13": "3vSEuTdRWxQ1Fk29YPkBB4tCzTzfVfrTuGTtHkTnASsPY7zd4u9uvdS1nCGk36r9cDBvgqiPE5jSQ7Sk5M9GYfZv",
  "key14": "5C3rate1QB5JVrBcwFXQkuaLEUkwMMeMc3HXduVHhBfCfLgenoEbb1C5MNuuoZnUQMvFFqYZmMhQhUuCzyPGx9Uw",
  "key15": "2oRkuZGRnQixxXkbusLng9jafY6qbn6RW2cTn8K3J3jSYGnut3NGxxzds4E5pyhYtvqk3nLkcQh8NuNuatTbUjEc",
  "key16": "2sipJ6yZJKfbf2Lqmz3eqF9uXY5VtJnf9h8A64UrMtjRHKedc8bSx9EUpYsoL3VgaDcR663EkjNY7N16PvpR7D4p",
  "key17": "5arYQKgkrfWEj9fu5g4f9buWKxrpZrJ4NhuRskJq6UVUCJYW53GPS7zo1AcxrrvnHwjLyor7fUtksLDjPirwpsmE",
  "key18": "4Sg9ZUtjxve159By9iPe9HgQaZVxJauQaia9DAtXpUtruo1r78Sa5aBnPgQUEZ1xQxUs5X9mfBqYXaMrqnjY9Fma",
  "key19": "4ZsutVouqnzvnnFPkLHT52DvcQ3aiYgiThLfmZ4iP1ffKQWLbCTw1FjRNnV12oMYc62gwbMHMS2ctgzR8mZULLf2",
  "key20": "22vN4oULGaAkbBso8E4mE5s2g2VbqAqCQSmzpRCT16EeP5HVNBywW8uMRH6mPaHVz52idfLEtezWLxfeiw9p3jHY",
  "key21": "4PAFHucRZpYnATHbz3aNoNhjzmBMf2YWtSxHYxmE1CskeF9y1XBehqBX8EuZ4msLCuVDLoyG1D61ft17VkR11CvD",
  "key22": "36MSDcZ9kQxWuMh8gdofP3gzRG9GKeBysQ9AHdoufFimSzMNQNDESbpb1Fk2RYiPbqkd2aXbEocYJFdPMLj2DVua",
  "key23": "41aQhRv8HU1yM5KG9JYFNYzdvt5fPYx3JxTkaypWDaCrgaAEGzoCfoznFP8dVNotKhaD4BbcD2MG2a8pLhziZY8Q",
  "key24": "4p7yoWwdxvNJdJHinkyFQtfYjiTj8c6WTVgeWf74f1DQCYCw4cjbNTPoUgrNpJcagzb3GUJ5mrfC1cRLTX2pQ8sV",
  "key25": "4CnTc9GSfHd47aSXYPN3mARUETDLcPa3Yy2umhzpG8XV3XAXFuUjJiWZRFnJEbQqifq8VyomK5jCoLHgkJDdFan2",
  "key26": "398qVwnrYzsogzp91V6xBDqcvTztTN7pJACx7PB8R7SpY8vQJqVx98xor7on3hMgfQmCBy6PchSu68exEWc7RWPb",
  "key27": "5GUFm3qGLQmH4ouuV7U91W43iByEY912JvJvtTeowHhVqfJkDkdyPYkRnqqfz5Lt2TeGBksZMxjX9wyCZWuo7Di7",
  "key28": "4tKEtWyLEG8fr9sMAZVEX2ob95MZrxXRn41QPj82LL62BRfbBpT4y9XJx82tBCeK51KVwmvoCMU8vKc1J1FwxBPe",
  "key29": "3wztGZG55KCADivFCfT33CEJe5UKTxW1YKZnJXsJ7gsBXGqRjcbbFqhWBSVHMMEX4oJ2bdBN1732eV4iXc3A13vk",
  "key30": "2ywKRMztenZu6BS4UXjh1HJwvGzfNsLsmpHC1E4wGswsgiY2EegYCdrDGhqfM1LUxcQtyWy4gmU6RzueBtZPKgYW",
  "key31": "5Ea1X8visyLjhyfjr2CUo5XTEk6EqaWxnRiQWPqpsGdSZEqzgVPzuRejLhtEFKaanEc1WjJaAPFKvFoMtfr2Xupc",
  "key32": "5oVwMXRTb5RrX9tgF7hASqzioPmFnAisgPnp1EJK3sxAEYm8NoiuCbdGQ13nWyQkfxeGwxtgjT4o3c1mWAnXyL75",
  "key33": "2TMyPXbwyJac2H9H9b1P7Qcw3Mvz7zQULoVBDA75NyAzpwLYfBy7RxxYTzeNdMTMyFYgbyYS8z6Jd5bBBBQn8uBW",
  "key34": "5fQNqK4c6G4YYc433fd6v4JGHWeSP1zqrN2z8xVSZVR5qV8YwdDywHT8yVBhegPvt6FoZ5CYn7uzjxA4CHoRxB8W",
  "key35": "2BDu1z6zs7TC11pWSrmBGZdTvMWmhGaoE4yUQwjPsNTtc3kgtSzuXR1ipyAZhWq2kcbjH55MzhDc12nAQteDoP5U",
  "key36": "XZ1WUEfi3uDDqXjRrFUajoQqKh1VV6KJtTkpFWVQAxAaEoSJZ3FRSj7cbPDgrf9FU87zUUrcE8JeQbPFWYKCf4t",
  "key37": "3E9XrDGbD1eQrNKhLarubyXnPNFSrXKG82UCNrt5NLV9WWNxeRvh9WJvqMyKmDZvQ3HovGfhh8Dh9M5xi6cLTtWP",
  "key38": "sdrsuzgrSM3E7z8ndXJhNJhcsKBLV4ko18A9NgaZUFUQxEgGVY2Bdbv5M26R9uZM9p2FcMvziJ1Q51SyuK6jGTK",
  "key39": "43n1ZBnFB3286g9RtqBGELdnegXEeZ4UjhJQv1LLHZbgw7bbMF8MkECCwsz7LegmfWgSKG4E48sffnqdvjWs9hWi",
  "key40": "4Ld4y1r3xrcndLASMgFJqe81TDQ27Yk1R1ZqdmNf6RgxWikhkfRYjFvzfJV7pjotreG9f5ic5R7zyLPcboaDQeHC",
  "key41": "5z7T9NCxsSSfZJ7GwkJJeEyVZdnESwyEWeazPhVGY2LxG32yuzSkyYRxRkb9mDWgMxWdSc6uVjoH2rgWcDZnUjCE",
  "key42": "3rgnWyCD1g7qWPTEWseHxpbsmU1cs1LdY7UVzVwGSFb6TXsTJVL49YzCsUY6VVhmKDr72teKKRMpufaSnwvxLWUJ"
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
