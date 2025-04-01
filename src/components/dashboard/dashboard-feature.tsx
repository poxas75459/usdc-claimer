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
    "ZX4KZRghbwvqD1ogdpFQF4iEJkdJevcPAhjyVRdcj3Qfr42jJYh22miaG2riJUWvftVWkSDyuvML3arZCR76QMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jqy3RSCWedLZPPn1GFJHGesuWFnmz8NM6Yo8jwYcPEwGAv5gmZKo4ZehqNXdTCFJTGFHL6h7yn9mJvVcPqCRYBm",
  "key1": "24esyffxR6CuD6SPbjp34YMSHbo6ejSMz5uHQthEHKqFXqvq55Yse3KVt3ehirELWs7DcaTfwpxE4tDK8nrrG3m4",
  "key2": "4s7pW4u3UnXuEJBcfDBfhqSqxswnVRVc18R2pNEwvrBB6WG3D88j8o6Cjow3crX1n6GmjQVQdDzM5qaNyWJfTmvb",
  "key3": "25UF3jPoSkcj5Ero7Sm2BYrqMH16ZNX4onBKkz85xjwmjw1WnwanZReGq6MbvX7YajMS9kZCdUj7VjrS4sULDurK",
  "key4": "2yBGbbCQZBCx9KWtu7XTXvpHzTMyNj1sVCKxR3noE6Tu563PtD9xWuoUMTVWHUT6SyZaeLqsY57Gyy4MBsWo2cKz",
  "key5": "3FciZibFQAEryGbM4hf5PRRzHSPwceb957JDAMs6dNSLAkhL3SjT2um2hm1q3WTexv6Gq1Xr5ky21dAAPmck2qnE",
  "key6": "3ZwAwkq1JHxg6UwZr7QkYxnKqjiCX2WZpofuLXRoQVoqVPWMrtzDcZwLsEPNHAcpvURM6A1RF94NuT5sEemC8e3i",
  "key7": "M7nCTdmqQvsGYXTDgZbWniirkmjrwmX7aBKie7xZfoeevwDcfNHBrg6yr8aV8GGMoVrLUugcT9PH8Q8cfwY39zp",
  "key8": "3zcS3viK7uQjXSDSBXhgKWF2mysZp3N8cg9E3u1oSR58D9ibr5tNKCTK4Ha9G8j3Aej82dQ4rprnK8Jq5zR3MrkF",
  "key9": "4WjeZzJgdZUwQKemamL6efBeJsWWNrZbfRHDViFZsYUaeFmqdmyQ4aWDnkZ7PrSQA81sULe9gYsbEPodzhRsv2j9",
  "key10": "St5r49wXvP2wFb5JhVZD94HepQeYY1TzQQjgEgTEYfeWLiSq7Kjv9mWMi26vaYGF3vKo6KHXmoJ7hYYSeBoCG9G",
  "key11": "5RyAgkcguDVsyMALQ5Gm2Enr17peQ8tBgcBzwuYnmsPbwLxggwoxVHy2ktsbNPJK2vfT6eYvNMiWVNHCtQ8XKSWy",
  "key12": "62MAVJeBYJC87qRJRsVbBbwKGvASHQTBpqRtDxmrRCjmQTA8FjfUSAX2YL48t4M2MsSrS56ieEnPvKaqxg5oCkd3",
  "key13": "qccrj2Z7Gi8RSuhwmXZxFgt3MEaSrksi7m5HfMqayqV3kzqYndqF7jyD5huV3vqQfbH9zgSCHoJHdCyvTEF78J3",
  "key14": "4zgPQ6cfBzSGAoGo53b1NC9SQbYyjtRbKtX7TPAKfQ3qsXxtZGJLf7Qia4ENoh3gUDFopzaFqnFfsiVpjKncxcS8",
  "key15": "4XAAbMMhffJ9Cyk1JSNkCohxnaPMBiXvCviXjjk32m9ViybcYjYcrDZuAdNuaNCLv3CzU3QZnZxcnWymPYabyy2j",
  "key16": "3Shiaa3GRkpH1mAgYRh85WAycmkL8bJfqMKJ8U2gYzr4f1upwCL4DsxzzjuJgvmT2VaedPdbkgGeCGnuibrAKBeh",
  "key17": "XMkXAJ14PkK2XUZvpjpD3Q3WwkZuVhxnpNe3eGPPpED27FeNJ238haEmDQT86s3eJHtxSE17NcTkHLGExVtSWRo",
  "key18": "iwEX1o4wiCW8RigGCsB3A4qEtCHddogkkiSPexwkF9ErTMsyFbLL6oweBUXrscn3JHqDvXQJkTXcfuaKiCTDXp5",
  "key19": "oAxf2oKQ7jD4dfh14RZJvZysGazRspSzvcbqXTU887ou4RPfFvNcTS7ntRZWDmA1j8AoBvSv4p4azbB6pmauxdg",
  "key20": "2hBG8843ycAiiGNQBq7RSBeX1gzzxVXT8o5G7KkYEhYEaPC7LWtrYXFS5vsYKQDmubh6JYbxX9JG8V4LjssMWfFr",
  "key21": "5Wugg4EikcUSyobpQwLnFUZdQced7kndYgUaBtNS4ACN5AcJttQz1WqDeUNr9ThtVAb9wFdAH33nrFzQ2bXwr9RV",
  "key22": "3fxdo3Ywq61kMczXGfu6KLTap6m4unwH55uF6RSD9i4Wb1oj5WzDN4HVwkUrGZL2tS2oqbecZP56txonjJVPx7hF",
  "key23": "4khfvwb2mypUXoHvVfFjDq7e8YFLf7rxHDN3wtnERDJcq749oJv2FDUSqsyegiXQu6dEhs2kNTbGkdg85M2mDfmm",
  "key24": "R7E7Rs5SHRkvGiD3NHJYJgtcVps6d53wSJKSXHRignV8eW2t2yn8niHMTyWVMAYVSJKG3uSyEw5dszL2NyErLMh",
  "key25": "5TYokaVSBP166XBW7MDQzNKyfMMFcbvbKXQ96qDhptv8A5H73utJaNYpFhTsBZRgUvXmDmFb4oxKAA6JhUhNaUNp",
  "key26": "4VQFd32V2chmURkwAN4MV1PJvKPjQHQNoKvJiXkuZeHWoFtR52QBAEnSyESGUQb6yvJbSfn6dmKHg1UdGDhAPo38",
  "key27": "2Pm9ctXoz8zJxgkPqC2q3y1ZrQBqWKHp3HXjkvFZehSYpedK6wTmRNeaUwo43dH38uMVMx2eeuePXYqdqfCLqf1f",
  "key28": "4vMtn41Yb93DDyCh2L1H4uzjtgRZna4uJ4MXgpvCjh6XegejmrKahCbtzedBKzReX5m8cwhr7E4rC8jwQRFvohYB",
  "key29": "4rHfnpuhCuDM1gQdbRHjVKk2BhgLaFzwmCJNAWAjTXsgTRZ6irJWNXpYseaQ23iu259ugbxXG78vG5rj2enFXL7a",
  "key30": "5P2PnYxP8BRxDtuDSnix32WX1zLy7VyPdWsRhRsMsjDPDudCrhB4k8FBTmDxoSf3yEWPkzPhxYQbfgiCixaXmwHQ",
  "key31": "3Xb3MiQPuFbd2MgUiWoiAowoZq5PZxDg2agHPM111MB9FbtAw5heA2YT9oMFxHJMCnbekc3dCFJ8sDj78sgUUD9H",
  "key32": "4gsTMEYi4NcNpFP2hfio4KvKjbdfiujdiUZ1dw8NccfvMz9d7NUNqGkZ5EqUW6xrrc4v3M3ZAzZFYSvfygGKVH4G",
  "key33": "2akRLNeCLYh8yZdaKifs65nKwa8Be7ERHV6vCeNGpyGJkM5w7iGzSF12r8ywR1UK7SHPYjGXZTz6Pw25U4NJYB2i",
  "key34": "ehCXxxQRbDVp26VL9ta1W1x3Yb7rr68cqocNXvcHAAwnjPirdySirKPcV1ngKjotdAdhFgNo3x7HGyfPyLgwmrk",
  "key35": "3XcFmEzAB6VaoEG3r6cBsTDqBwELzMn7Dx5Ccynf8Xj5UahabzDQLzHbuGWBgmxnc9fzuLtG7gsoVqS7kHKaaWSb",
  "key36": "3HHV1pQTmCc4FTxNfZ6hZF1fnncqTsMZ1uhLBNqrybiMticTjZoYU8Jr83BL99qGSKpxVqTrjWriPMrsJBRN7tPH",
  "key37": "22MBwx5x2qkCDcVs4Uka97MbAbdwFKxWbxdAA3CpmC4kexPwLFXpBttK3ZPjFPYxppH1kJsYg8p2wpccDgiDMvny",
  "key38": "2ixsQ3yqWPbgUVC7oo76CK4EBJ3kqo2i99YDanZkaHryKsZfLboFzk9gk3TYvVqT6JvQ6QWvxb9Cig7vpXmL37Po",
  "key39": "42dhe2kfzxaTGNpcRdGM6PKS8SnTKXCqyep8eJK9PDTb17CaDjoXYroi9nLutF5PAHaNPXGwCEpwbVSx2hCcBfc5",
  "key40": "2fvKNGYKXnvWKoKycjaQ3JEpBNASijpzKCVgnyeyVUaaUES4WjhF159QHWvevbuEk1cHdmpLmciCLKhPqCjawmoB",
  "key41": "23bHXHLm8tZK8emc3wK4eAW9f3DMpogcqQ9xW7LYqBpZBwXJREKM8qdb38ZXxje5kGtXxFiGGki9o7tVMcu1BqA1",
  "key42": "nPNVbVNj4G6e7Qd7DtVKTwAWnTnYNJsd7YoEdcA5SirGFrispATMKxieCLUMPTUe842n9vHUg4gigRENVTcDEt4",
  "key43": "3MUSp38Q2PZrvznSAg2Jf4VrHwHUNTvDxbNCD7A8PMkwe4dtg5K6oj8CpFBBtoTAwfYLWebLD6JprbyKFNf8SPoP",
  "key44": "4SG9PtRrRaygguibuH5gTGehg9eAGKhMoSQrhAwNcbbv8WwMjXYWYQFmCnQsm39mEQJZx7aMAt8iH2LQCxkA49kD",
  "key45": "3WT8XY7SduLVbmc8yuxTfHzaucDVE4FwKR2Zx9jRxS7PL8AvmQNgDPg4jYHkfVxt7cUD7yhuo1UF6ZCkbCQp51wF",
  "key46": "4cR9Rxr2nWCjmihy8ewuc5SAaZSar1FMig7T3nB7XQQnjbv9azc2Z61RreKsij2oJ46vBHeF3FSuu8FSg4CjNYxB"
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
