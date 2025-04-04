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
    "5vYSnzGsw2M64rKK87obwzRqQcMuRJLzskt3CiXMc9JmtXMk8rs5zwfuDywpSJNHE1keeejRtarJuEzDeWEewQf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65DNnAEK3yL7hNAdvcnTZ8HoQPVzYy3MvLDWbndYkKAcqzj1Esrun2Cs8SqVAHRZbghbt9eBTwHX629ovqCV825Y",
  "key1": "3zrtAdi4m1s3VzVj33PWtvnJGn5Hv8agtABwPVM64xbZPZTwqthraYnAZC8TSMjK4ayGGEeAcpHXgoYDAhJqnNW8",
  "key2": "9mWUL6Hgexb6EoaXsuK8nHvYd4E2iUX9CQhy4RMSx2zVbijhSSMn9UVKKoZW2YcoFcS6KQUgUJjsrMPMjjYfXQj",
  "key3": "5c8ihAErdtGYwKTWF4VrjXy3SfjXrYBah7B7rfJqZzT4kzDXG2niBEGuUYRqrKg25DdL7iaHwZ5xwMMDExE7opHY",
  "key4": "3NNZikbdjB1XhMkuoBMy8KAE6VLK1NhV58avuwdsFwdvtTc2asm5k8Rywed2vW7QY8wzGDKDN5LjsgkEDxAA63fJ",
  "key5": "5J4qwrh6TKWPgPkTXFDTnriejpZsAh8MUVsPeRcXg32nRLFKR5YeWAzpZwv7KJqwYEwE9doTfjTorJuR9taapwGN",
  "key6": "4S8D8PrLPoDm6KRumRynAGFghiSbeJY3utWEU3UbRBm669P3ui3JxCwJV4qgMZxYAcLT9cFimhKPFMJdmrFchUtV",
  "key7": "a8aX81SwVfzatyg9x6DP3fscms7ET4oR7QFbQJTDHKTNFtXsVexVe1SrFh3yoTUaedMf5mmX3jnNs1BH3muYYSH",
  "key8": "4B9U4ZeymybTaDVWYNTtEPeoRduJA9jtfcDk11J4bZ85xaWHbXVc3qCzC9hXsV9fLZQHVcJYiVXMC8v9FogJjMZG",
  "key9": "5px7pRFnrFGRF81QmYpwa6Buf5jvH8XDU4ys2QAhbAVMbeCMjM4wwGbu38Fyf88Fb9aM6uS1cXEPZx1fENywENvL",
  "key10": "3je7ze9Jvz4mTbndQNFdLAL3fUurj8RWecPTS5mVE3NTPo8WCZR4xqWriTh5CPz4ZqQC79opCiepVdcWGgSknuWc",
  "key11": "2hRXqw2HKYEV7hnsYH5TNdinsmsaSi7T5PzPve6j7upLKXqJhBk4rcKd8vqrctWoYzt4T9edGkV1Vbt6ktBV4F1p",
  "key12": "4pHV88wAT8bXK7ZdDP3nDo6S89cofX3C1rsA3t24X3cmmfrg59zxan1RaMa53gY2FvNNjsc59VR6bdLNVf5yEUue",
  "key13": "5xg6tm87GFfT2Fcrsd2igW8Er2QgfSD4xYthg8X7tXTQstJM7tyfY9TCAk8re423fFzL4NguWG2RVtJnBkSrbWod",
  "key14": "5J8T32jE5W14ScTH6S1Ab9gmMnygLDQ2zi3GK2DDHL2XCFXYGpEedyEpqn1qqtjQu957F53NrYvCKzfHY7rGhQfG",
  "key15": "33fZHjd9tDvzhnic6ArXeYdKtH3QJ39sfDKCf5wLcV9G4i7XpdaviFg6rWgTek3tNW2PTefGGvJ3ZfXjybVdzDK2",
  "key16": "8nSvuQbocy1mCbK78e2hVbAkGaMP3BnyedykPYnGxcMeSKVKLsA63xUbsGW7vtBaUVsMsZaTr3Qa1rH9LwMkniv",
  "key17": "2BEjD8MB3wwEnP7a2r42xeRFuV3Cq77VeB2vGsJ6o2ogAVbu1SUM1cXJB2FaMCGipvUfKSeNuzQeXeCLUGuyt8Pu",
  "key18": "PL5nQbMjNmG4es1TkgvbiJWY47uUNbUyHttzr6CEZsVGWL1qtYzNLM9qi6hFczeeMjoyQnKWWqfpKNLqUS3i1kn",
  "key19": "4mFDXJBr3QYFSeVKVEa27KjiwW7qh85tyMosVguKiohwUdViyB3tHtXLHkhSx4CmFvucKL7CtmaWTGLrkXH2jW4q",
  "key20": "4kzZ62X4hjCpDxz1xjkKDkkzwTna1GAMb3SdeB56hHaQ2TDfakmAvdhYDDraYzHmYXNottgmjGoHnh4ywhYwLgCu",
  "key21": "2YRWLXTj1FK488Zs7ZDKvUbKftwvfYF6UZSS42Ne74Mx7x9ujCYxMhX9Wgwune4hyrTSxiRGSuj3jk5y4WqPQdW3",
  "key22": "22xm1jyYQsfk2svv5A5eagJqJqnTY1sJBNUomZNS4tW6vouxixLoysmSey542z8WDwt3gs79zbbgMqxrkuVgkR55",
  "key23": "3gwqnXz686a3KmzKBQ3LqsnjNZRee2Wr6QDucmCSuE4usQT8CDQQkDd6E9PEnTxdeuESeLKrUe3CZiWVWVmTyFtp",
  "key24": "4TvbQDvwwuMn1rweyPiSguDAha3ECTJsNxNDYCjuPoc3WfpYYBGKVMVCBgaptE8tViJmoXyoEasBpyb9b19Zh8bw",
  "key25": "3u4vnPA4uFVDyg3wY2du73Axeos91yEUu7xc4qCVW4GYku5hDjRE3EZ8GCDx8RwT1GaV75Y8pDpQdrYXrfQCyPKd",
  "key26": "37EaaJfyWv9uBVWNQUNozrqt4S8UpY5QqvQMxRcidW8FYgyQEYDgz3WL5SnieyBoPJMtHnSRpbhRMWEi4t6NdxkB",
  "key27": "3XLs8PZ4YcuYvcaGZt9iwwvxwuxN5kBVrFau51qoPjt427H5gYGp8KkYLJizLcC5FeHZqZJTQXBZ6LQQr4393Q4u",
  "key28": "3HL7kYGkcuhJMjUKvcMX9Kp89F7aLHq1ySryAxUWk6TDhRfLhwnLRnoV3SN7nayZHvCTqFCzMc9U8xKWgFoeDf7Z",
  "key29": "5mJ9RLthKNK3TmdLmQDHFRbwyS4YqnLd5P7Y4iRvJ9vNKZmHxDxCpWdjbXaWUCJ2WStCYAQ5WvoQ4UXq7yznw37S",
  "key30": "2UDzgKmiJjSaY4NZjuKDcjcAi3azBJyWfi68eFkwaioVGjzpjdaEw9FDsrMem5sKB3jAwkrjkpuVhnPNe4PnQduo",
  "key31": "3zw3MnuhnipPKUb2yqExHQ7R8gCv3vgEnkWmPyF72S2GPgVwmc3DGoKhZtuTiXhfZWHYo3vjCHT2cEzL3fMfUhiF",
  "key32": "3QNVDkAHydSuNZy1caFDbErd7m83ddSxpR1CiYGmfCxwZQ756ZqVSwqoNR5SRfUsFEvQcA47Cmbsk6hXj3phWp6R",
  "key33": "64BLM1yMuNpoJ6sg2gCmppPiYp3hqD7u8yJHEe5GP7DrM7J3uijSVdYbjzeytKx63hwkt7vgC21Bog26ucgwTCg9",
  "key34": "516quzrqtYsGvYt4TVd5cMGS6F8bvphujeF4CTaMNaWjnEiWf8g6L6Ca5J2XcToWfZgSE4JBSkJUuY8sK8ib8wtb",
  "key35": "36Vj7bNPqXJ2UekvXXxdrSNGNdt15C8wfZi8zzdjnyDgaiWhZ1WyMWGS1WDKqPpPY51EyJRf9ExQVzPdi2s8YVdj",
  "key36": "5KLryN1R1cxumZ3jYcxKNB5JkLp5dyMEVxyPcAZg4dU7sBK33Ki8i2b31oNtbK6NWdNtjcm33K7Z2ZABEPR5ekhe",
  "key37": "2hUdqXEj8DUMwjfUodYnpt4AoRMFwNtjDYG1u9iKjATK81atun3HpNsX86iATyNKkwKyQtCKZC5XfNJLorubbaNH",
  "key38": "4ioXDUa1d7faRK36yduhkZT1iX9a6omxYFgkT2pFvHgbg1cSsVLvVo5q4W67UoXW6NyGoxy9AE9acupH2pBSwfzm",
  "key39": "5331d8vrUpHw1stQMUd9ek1pT1jPrgsqg6YuoM4XKdTFC1yLwiriDwrRmBqv1MpqztE5ESLh5YyCkZ6kin434iLS",
  "key40": "5BUeQFC2aUgmxMAsBUASnrSJiN8emdtrSVVHL5VvmZjKWZUQKxgYTtTZDAwY5MHm6EyqdnCPMHyFzd8E7YMPBUBR",
  "key41": "4JEZbM7k9LcpHADGaXXTiZcJnskQVvree6g4qBdhnNbtjv48D2raLEQfSTBurPZMxYy3di86bcCUKG3fuAE8UWzP",
  "key42": "3yAS3uZX3YUiYk5RjZT7GG6vW3pvHvJPejjxvEXDNVCLa5FAr1f1srzvSGB5BY4doeKRQVGXMVGrSfqnTrJXQzE6",
  "key43": "4JpxtibjJHRNj9hv7rSFLa7RbZDRWNk4HAjvveB1JGgANnATYPQAzEm4X1iNbkbhNVdjY7Qrk21uWd2fpytsx2YE",
  "key44": "rY3pzQKvJRjvQW7q8s3JRQ68PSZan1q4789kMvpYrUeBCVE4hBTT9ykYhP28zoahjDjtmkgvrfsEoRGurBoxg2u",
  "key45": "58u22cgmAyvkEhbQeMpS7Xsc4QThMui3MvzTtAzrcaGcvdJiPzSaC1aVY8ryhzNVCYQxVo94GMJvuqgmkTsdhoRG",
  "key46": "4kEBdkRbFJniBX8B6FSLpgnFfuFdX1m7kogYThrAEHu4QWTiLuf3i5shcLpnz8myoYoS5H5L7BFuh9vSZYNLNUEv",
  "key47": "2En7ZExqm1n2E8vgZFMXYEbMDMEyRDCzPvcg3bQAjiR3UPzbZXzwLXEhpUiTxrov2cKLr2e2DTUkUddQWKytyxzT"
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
