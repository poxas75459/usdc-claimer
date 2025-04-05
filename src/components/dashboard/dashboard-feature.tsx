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
    "3kuVNQ6xFZbihLyvXLhA3dxfi69iTjp4SmVRviKdUuzGj6RCeBLQkWAwYWtj9PjGVH96imUMoYA7mFGkhMFhmAZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Luvh8xbENkNd9NQKeADGe9tA1ZQjWjqSKyHPtGR8X6XX1WGGdmUfHfb6gJioH7LKRizbvsTvNPXVMuUJCPYNqLT",
  "key1": "2gqGZZgMxDaKfHh6STqTWef72qLhq3AD1mhyeEbvGWQrqd7t8zcfr3C7HzauPhiwTFJdA4qsHEnJnLka3EVdqham",
  "key2": "Ye3LaFhqEdv3vrynomQQj98ADf58LLSE3c5rgq3wi27rQqoh2xbbDQBx2Xdwsk6apVoKCQox3qwtKiDzGBTzogY",
  "key3": "3tcpKKyXtkX6n9LJ3Vcc9EkLkN7np586TYRMASNwRFSWNRZfNWRfmaHmz9YfBueL3tMfJE4Swk3yVW4cBg9fvvyA",
  "key4": "fQJrBGBvzKXtzZt3LJYDzFGwELxbhjwbgat5tbBjFMvCbQ86dUG1pqJMjvMvBmPueQQZzzgfB5n4tJWiSRUjTUn",
  "key5": "5g7nYqhd19xpw6Dnzr1Y2CZb18TDm4tHc4ju8ikUBbWxGwEFgTsht6LG6j9458HJBNydKsPhLwsCyRZ6jiqas7m2",
  "key6": "3LaPLPux4GGjAqBXmabZi59JW1AAHSbpmmCMQ9nenTU2YbAejpwch2Y7HTYQDwAqryKYD3NFD6KF2evN5fHa7ULL",
  "key7": "QuzS4wge8mFupFs9HqJbTUVXCnEpA7tfFaJnrhHvpvgxdW687MfbDiWAhSmCQ7s29QiUPGTANSmFMZmhtjUeTjU",
  "key8": "3r7xhwYHgzCUvDgWBPMknKD9SdwUpYop1ECatpUfrdme3imGGgXUsnhDM9hzLNgmHqqjMrpei8YjP54pRU7GVRV4",
  "key9": "537AiCYxJyXbu2yLrK7A23Wci8LQNYmRVgDroRWpW5j3hG6pXm5BAs6ykhsaQ3ryEwxEqz3g6jeYbgu2w8XHcPaT",
  "key10": "2nWJj1wAPWsvvPorguGb8mhoduPLxsi3UVHyC2GqsAVE5XBGvA2yDAQQAw14okCv2J39kP661HN4YSUca6WDmCKJ",
  "key11": "5SxZrenLpcx2nA3RDAAYsKX87Meim8mjpBee46KJjnjByFszwczFXKJpiQxyxecTS84pWy31wgUUMnpVwBcZ3M63",
  "key12": "3a3RYsCJoyLT7ea8mqrYkUnchHuHnmtJEZuAwA5tyWmge3eWT9MTv9p6KDgvViWcEcaqQUmZmq6fC6g5uqHtY5fN",
  "key13": "5bMz2eCxVNF7EJQVDZBpuYnBBrEfCnFCx9R8sHajYxVkUGCUGDC3QC9sYD9w87RCUTzpr8n4LMx5L5wUqz5B8fqZ",
  "key14": "4JarKxbpZikq18WSZXY4Mmh7veCkcDUamnkb18hX6jJhJ9CgueLobYryJ1kWqqdmuEkhTDam24xzpu58Bc4qspj4",
  "key15": "2NoKx7u2rvRfS26dsV4QZJgythnRTzCZqydx17zqmY7aQJaSHaRNXVS23Nx2DQA6Mc4UXueiYUPiLfax5gXSshTc",
  "key16": "2P6x5ouCbHikhkeFpUMMKZbdaQEdBg5Z9Y9SSfnwgc4bktGHhUU6ozCuzEMpkjVaBxEe9tfzgQ86YE21pK6ibKor",
  "key17": "2CsBF36mXowzxBLd99K8kBzNC1p5rNLAohko1g4u1qfwGNwky93WScxkPfRf37GYZxzqi46q4WTZuTNa3CqP4H2i",
  "key18": "4y1FJgjwW7xSHXfTHpghKgx3CpnLQzgBPgXHQAWEPjqt5hyuwrYCZG4xW52mRw6HLtzHNHN6fWkdDvLvV5KTQ2of",
  "key19": "1idqU2zMzfRFTKPPJUM4vMbNWS757spRTZ4PKyLSHLcD6KZJSbaeAV6MAkU3du2serR5Vt3cvvjztjyPvSdXv9E",
  "key20": "C3jnTvvRwoXYbgmAULZyqUJwBqdayM45wdz8wNUEVeoYQEk5zbsJNEw1WWESE81V8xii461pJ4FxmD4TrpPg7GP",
  "key21": "23USDs2J5MzYHuFs9VyXvWBa51zYWSJtrUdpQni8GJLinD8oC9YRYcA2WUcAqduCcEiQvfqBrfjZBLPFW7KZVWYg",
  "key22": "47g84hC8WqiPiAE6D7YVGgoknS1GXQsf1ok4ZNMx9bhdZvF52X1GJVHk5uuYDxkzcB2coG51NoFLS5NpnFgtFX7d",
  "key23": "8CD7Eqvq83QMy7ePnmYgobapdXfsGsyCKE3ySR2ZtVcB5nKgTEobCHA5Lrd6iEbBA7yNyu8hXSfL7Pr4w6zhN4y",
  "key24": "KVwxWomMnh5SGo2W1fxPrXjM2Yf9eV1ofgK6iyvGXwXNRobpD7WuUAgz8Jdpdd7mG4AstTgEeBM7qh62t6wJPiP",
  "key25": "5KThD9KnnPTe7vAyhaZpHTqaHdw6s4GNEwvGkESo8uPm1T9BmPkYCCKU9BBCM6XqNafyFDBihFcdJZYh5sEkBD2g",
  "key26": "3UbKYEpEcnjcXc3FTvjgcRvAHXyn7CYN1ZVFvEaK7bkWkmmyHuCNiZ5wzSEDovE5cVYyuXiu49d7NUrwH2xopYYr",
  "key27": "619zu4nSFHfTxuXLt4gbmVX8uraUSjCqqhd2VHo5f3eVe9oiYtVR5A8Ww26FsGMo7mbtkRAcHmmx2kuff4PtYL46",
  "key28": "2wKPWbkwCMpAZ7WPwJByHVbuhe4MWByPRonRL3StEonLPq2eCMxQ9Tj6xBBfe6KPrcbT2ht3zV13iyALTRth4RAx",
  "key29": "2fiwcSk3Sfm6YAvioS5nG1QTy19eKiLqBDmbRQYwzc1w6fCmMA8kyjsrjhYSqGp93JiE6Y4rPfQbe6K22KFBE9mB",
  "key30": "4eC7hGPzUrSLESYeoQUvhfCL7nxtpRDKNHDRP1ngv2kQWC53Bg5eqhTeRycUfWGchuiGYcA3RfjuAZWFxjWZ7Qsm",
  "key31": "5UWokX9Z3BwsYJRJffBeUhCbTjrkbaBLCBmt49AofHmAtu6Si2hjUHt3x5nR3rpcPzw8uo5UQiZCnp2gqTkxJEwm",
  "key32": "2wtY7X4a5rUrGqF5N9dmGHfaW2kYWKqMa76xqmvhNE8DB6MH2SGT5Qubxh9cw9rCwTStc7LYdssrrQb7mwxGNRoW",
  "key33": "4v5EwJ5fYnGKAKYMsdZLBffjSv8wZv6iistZZJvWNq5scrKWysvk5HYhfh9Zh6dybM7YgCeZJPD3FeVKdqL9rfjp",
  "key34": "5zzRw4deMHSUUsMuKVdyV6zviwh1Zy5Vna9C31SstHEW66VkXEbYP1mAZcF7TiwBj2r7RwpnKAAVQRYzed3sbLyH"
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
