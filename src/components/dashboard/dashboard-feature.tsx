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
    "5EPFG5sFKsM9fTmkHmveP9DMAeG6RdhBrKZoAvCB8LgL8auXzy3nF3g8BkRuwQHkXEGv3JFnT1WoVEtH7mRdmbjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BBRDbE7i2245hPYrvxJ8Wj713moRgYxEq2qX9Zmw2pc6n6MoJE7uu3rSWVKVTB7zvjYGgZpirhnYnYwS5RTSisZ",
  "key1": "RPEXUPQqfq6LETUrHFn4ecW6keRJKkmMUpJtpUjFDyD4fe7a9TBpS2Z95RmpEdTkd1HHNjma2s5wVmmf11SNAA7",
  "key2": "3qW3CwKnbyjQd234cdhtxCWSqgW5RB13wqgi19vxqGEdcAZKTJX4jRS7huqdQHkFqvxbfTdZmwVq7drYTka8vBMS",
  "key3": "4Qa9vsxRJKCnSFtvkWvPLmmUZCwVzv8SnTxCDyYNPWmAgdww1NRQcycXnrTW9tJNRYpvZq1PfWXdGrJbSMHewFyn",
  "key4": "4cwFGV4HMuc6qPsuaMmr4BRYy5CzpaDzp2C3L9iy6xk9tuR3j7rWQe6vp9wdkVgNGTJgfhNu5ESwxtXmG73zUjLY",
  "key5": "ZnvpKPdz1CPMxBe5NNAvj988BzFRqiNoRiV2hKW66ytmUuhzNV6GKHWFHjp9z6JRy2Bq321fPSpC2YFssmmqXd3",
  "key6": "vHUTzFKd7rhEVonyszujU8XdZJzspZxAg9q9z3hdgQdFZogJKW3PgDBqQc1272H6fVCZXPYmCravJCJaYdWraLk",
  "key7": "CtSZNZTUWbN7RKJ8uFaLv8eP2zYAwz2pG4LH88bA6zD9hWVDx9ZhXWNx9jfUcAzh9bp45wwRPvWiMzehP9n9NdL",
  "key8": "5NSKX6dJgX2QmxBjpnafnznUvvkubN6M14nXR6NWR34jSTa9NzbPn4LMAu3ndgp4NHcBQcchaDsozer3TJ9ZD38P",
  "key9": "35tgYE8Cpbe26Nj69NfbAhcRt1GBoxX3q7FdzcLjZxvmDjbQ4xbzGry2u4BGc6VSeCaKkigAgeziGR9LpkGj78z",
  "key10": "mVdwL64YgqzZSk6DZurpBd4usk7dEaZr7Le5TZTcrN55eFt8fiJLcNZf9VEVdn7d6BvX8NpTkXJYtRT7ks8tTrv",
  "key11": "3gGp16ff2CX6rEFL3U7RQAs4k3WT2tdwL6oFXvW5ujAZoF68bB5FXHGGin5bxx8HoCgi1EA5Ecdu2dsn8jxG1dUB",
  "key12": "5g821gKafXiWqwF7xcSgrRZgDno1XHHMsA7w5veBfxwNWUcUL1XYUPyq2MQuz47upsAL9NHMbv3CRPE8hgJfEypx",
  "key13": "3SWSVofUTWpckiuxWsnRRHoTXSeKNEKysNFrdsP8Hebd4rvAnJS1EqnR81v34G1qNoMixSPhoPm24A1YUSQ2YawU",
  "key14": "2iaSfzKmdvqs5U5u6YzE34RbCtvt1Yep3f1gRV4RAypAvvSdmV51Btb2N6Q8wDAP1xQ9L9ErbLkJ4GDP4kL7qAMr",
  "key15": "351hvsFrKK9bUB9MuqWqCrgyNZ9L6RtTvVPnz4JnahqMwSW2AvYGQv1BF8zr85gPsctKvUAZdpPLvvYGeKQ1QGYP",
  "key16": "4vUmZuhkSq4VC7u5CHsneVQmBMUrk6BnoVYJErbL17UjUiTqPcsuM24NUHjCGiRgBQ7y61MAb7iYriXjeVENGYvQ",
  "key17": "aSV2H6C42yjvsvdBzCyQt4J6BhEQZw6KVdcAKF6KPfWWSBJMmb3tHDwAx1TXtffUnKWdeXXXerMpC4H3itgfzdC",
  "key18": "3Pu7McCyQpu2ipoZHFxE6WFuYXsHHbgZAjZFwfEZMrYqf6dD6N3Vr6DUaKaFwmw8EdL7KTNWiiaade8MfKTapYhL",
  "key19": "4mcuhG4r6bFHbPZNL9qbwJH4y8e6duWDd4pHdSZBtL4URixWsTPxANCrRrdfQEYeZGRDEMBFaZDXiKz8eLrWGAij",
  "key20": "2kMZZM69DWhBVVPM4944D3hUDBaDiU3VFi6E7jcBny7U9EHcLj7APZgnvg7VcdBQ4swwVPoEJyVBZJ8GK1Ts771Q",
  "key21": "2zPRHGPFKopwYZdfFBi1URtupBE7sdRUpEnEs9MTWnnv9BhJybtWSe5DQGppCiHSFEREyz5uDYXnLiwqHsvATENi",
  "key22": "25HACFPG68gwLtbQswEwmuACGuJTvwQqJi6xAn5uh3gUD6HRFqzrGDV6jjGDiDoZM2cXj8MYSdbAqLa47Wgd8PJP",
  "key23": "3nreZHeeULuf4AmVGjhjHUdKJ5rxpkPtbrYe7ArW5wjV9kGr8EBqEfLzBMcYN5MotpMfxR6j8UZoqxa33GvYrxMJ",
  "key24": "42vLjw4QFUCpFFw3yKmvvghpFZTWGN2FD4t16fBRg6g5zYp2UawghoVApbPGuJDZ4SXtWWA9RG58kUHJ8vAJ36bn",
  "key25": "3DWZmapPR6A3sGNmKNHPzGHPxeQRW9BaAQTAtUUNc5gmcj6pZK8dLDTkdvppaFn42j4NsASKs2E8TwxDJ7g16GA5",
  "key26": "28tNpzLskHt7kGDyY6tSoEsMPH3KdL4mCggauN8euffJ7ZcTyYadv8ZUH3aHhNoVkU6Yov9E8KtVmweKP4zvgr3a",
  "key27": "214GYwLWTGTn94Z73hRUTTZ4dXnApygJooWNaBA8s5aNrDy7a9wwXnSqfrWdrDM4evmuz9dcJ7pjTuXLSamv6Zua",
  "key28": "4wagHTJivckiA2YFBrWqBM2GHVnQLLhG7kZ9j1ycNUnxD6E96t9GqdEAB8mCS1tYYdTEqxqSZrVexD1H6Zo5wgRK"
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
