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
    "478sh3Q2Lz3jav5MxHsFHhNPpZ1so6T5a3pHkCgJwspTzb7DLmbaKc3ziE8yaG9s4Xf5XHC1DvLdyWkeuh8AbTTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DKG3z8c9F3stxq8GsPp1UbX1Z2v1YB8YDTs4zZMwTmUq6VS49ZXyDb2faYn5kYTTYZMgWtMFZk21QkxgyMH5iFb",
  "key1": "FYnYHvn3UW5HVMCcsVKNfnf8uBCwbhydWpTGUdkKc6kdBSLmNTbiy1iBECBAGvw9C7rk7Uzv5fZ5gCxv6LXcfMw",
  "key2": "3zvomMZ2r2yKAqetpwPBDcRn2eAaxrHhm62KQe5Vm4pYSEaBusiVo2gtFamn9t65u6HKzkfTqDr1yJhfnbPGqtf8",
  "key3": "VWZyJMfCPgEDJYvfLyvQxpxPBVBpJP8HY3viH7HrgpuUTFoMnjGRFtWTLG1NKGSfsKe3TETFmsgyaF8RJBC2iky",
  "key4": "5wTMTYuAn1qNBiVi831aDYkdqXBmq9FQsyub5WaTRWYevgZH6LzLQjja9cqUisyx4MkYumYWFrBXzew8ARh3AJE8",
  "key5": "24eDmbnjAXdcJevYASMLGkurxbHCJVH1QifVzuSbmkfPYbLVFQy3dUFdXUGHFr6Nu5d2QtdSUFmA9FxeYWbyHA2J",
  "key6": "tn8jcnBzjanzst8GnGrfDtUd7cJzESprsJQ5qKYV8uw47nXHMaurbH98rHiCQtwxcFD3PtoVrdz4DtgrTurUsLe",
  "key7": "LMBp7kabbdhqFdKpWzWDdiqimACyqsUYmewdtWtXgjQTEci5o65iqUWxXPrrH9jYX5tqfiKN4zLxXhZwU9G2AYp",
  "key8": "LG3n7sRHqqZcisENkTRHWK7DUHDW2KNoCVwgA74qrCDUbUxp1KHy6uRU7DZdxS92TxEjX2fNsnfovP1mCnQ9E2W",
  "key9": "4eM4pSbJCbtG9wP5ekDiNs9pf4WzxmuUP6Fw3iScd57w5aXddTuhUsLdzACBQhcGchyVUi65z8qjUa64V9rtFKov",
  "key10": "2aQZ8HpRh4wT82QAx1JHXRng8fczgKCzYUPoFYfKPubCcB3u12vL15ESLvYdFyoLsQ99k18CsrPKBvHV48p1acVV",
  "key11": "YN4WgTVuf2asdy4kvjz19zYyxc1bM3kksnwdEytjLDbf1PW6r9xcqRdE5Gk9ekGSqfsv7vZqtTsyoNKyhq2q8ow",
  "key12": "2hXWAjzGc9v5mZFA3aw6yDSKAtD5rVYgHYDbfBAh6hRSQx5621GnkqALzeLC43Lp3bGd5YS7v3V6S1fRpi9nEd5v",
  "key13": "yeWkkatN5SetKTzus6GY6C52HDVGSnLRfV6KLT888BuYtEWzcB6Rzoqv3nztPPWQqdgRScnEUYbznYE8iwe6UXE",
  "key14": "JoUr8ts3DsNWr43NaHUF8LrEbpDdEGVKuqkFxZFM1KvnyD1p3HM2bB7CRCADpqwU8rkHGJ143zk4WCuYuG7pbrQ",
  "key15": "3oy1q8QCX5QCySDS7XcvbSpWnpcxNFH6f2Pm9SXV7WWRqcbqZdH6NqvYSpLVfbbAoDWMJmypcFmJShF9SCH3yJ9r",
  "key16": "3TLJngB2zVrCXuxyWs8iTzSi2H5wJ8LE7iwdUAWxR13MSLzTg3wrxLCY3E2nqHZUafZz1EX81LyUBUxm1Cq4PdAm",
  "key17": "EgacgT8dgWmEPHY7p2WC7XkUFryUD6H9t4nqX9uLytyPxNtYw1bYxgu7ULTACjrNY54zNcTFfRScbGTM3mY3kyH",
  "key18": "4vr43HoPN9PWKrwcakwkS1SD97YLCcEXgpDK1hMujseaYXk91WdhtUAmWzq21rX92Hqe7UhhSknHkqyXyjA8ZCQ3",
  "key19": "57geZ2m7HyfkRmWugcT9XeNooNEEQxCjyDd14rwrajZttUKKcQouv51iRWadP2onUjtyStGbWKZqB9HvWKB2nNdN",
  "key20": "3ADK9LzdKVZPeU6LSbJTKTFzB4e6zGtBj637QNCXVv5T3BTCS9LAxisL7bQEeh7WjcZuL3EE5ERFAkCzt8TUFp5X",
  "key21": "5rSTHcKGbi3rvvuWoCbypiLvZJJyc1CM65BPBrd9fBgHoft98Gmv2hmLDwgiNzT9dKXpew15kTjomyEw1y9Ndk18",
  "key22": "2pT1hLZNhPhYE8WN6njWaFtBE3A79w8PxQtBb7m5k89zmGct47tLt8pvyqd9MLdUS4BJWpYitNXX5ZuqULqdQsyo",
  "key23": "5bXPWn3z49QphQ5vjyomfju5emoKwYdsmTktMCcgNxnXiHDCRAP93iXJxpbw9BJqwEsNva7tCaPuX8CPmCkSSi2c",
  "key24": "3vZ32nJQL1RNLz3brsMhCUcHYAJZD9697xCr7QXMFnpALd1MGjacwDeXRwj7xvTQLUzTzPqUcA5pTAoNCWfqWSyN",
  "key25": "4fozmrbRM94go9EvPX1bLzHMNc6RTJuc2kkd1a3835sdreRmET82QNTzVbL4XdgQaKzHUtZWH2MMM13WKwSikuqq",
  "key26": "5GgCKZJJYKJifumdrtFGAgp8wtKHCdarQ8mUwDoV5VsuAjtTGosobUQRgnVNCoyPqsfPMtuUodhNReBQdtaxkABq",
  "key27": "2C7K1jcq38FYgX39774P6JXG5nmDPswL9jooTKf5NuQf1xMBwpFxFc5pKVPwqUKg7Hs2m2JzgssYYXicrLmVc3TK",
  "key28": "5TDF6eocWU5K9QDPRSsLZPATFWs75MRWafybuxeyYQrcqs38VmeGtCM1XsRii78UG9vojAtXErn54rVKZmxMh7H8",
  "key29": "3VyxhG6LzJhM5TWtneoPbKUpJULP2JwxLztfJw6RfTwYALMHLSL6ro3gh59F36myVQuMvhCJo3S9iXYTcRcTgc8h",
  "key30": "95GUHjYK4q1n3mwcWHqf8a4vbKfz6UzM824HFHmpsSpw7Cx55c2bmLNPLn5tSYxKWR8Qp3uXpXBytcz5F5bN5ko",
  "key31": "4MiTaN9Bu8W2h8XN5CsDVQJhwo6b9ZpUEYKsWkbQZssp1c7KQeVozygD53A8NvfK56WdLQ7dNCzbE1fMVhtbkZcc",
  "key32": "5EppW7LbYcQCyCkx5Gxtr6FqMmjvoTFJ2CuEcrfq3yt4fDkkSzp5TPDV6D6LmRAQFSf7hUaicGTTukd4dPnRgVJD",
  "key33": "5j1QSSkAAErppsVf5MoJVcQAhYbaiBJaLhijropndaMrgTDrwph2wMD9HrMpMM2rghVTtpWHf3hoKBbTwxRyT8UW",
  "key34": "5wxjpLb1imDtED6qMszd9RN31vJstCSynqkFaqfEVvg5Gehy4BqsC9fNamd12hc5kSSCD2vv2H1yBx2pU99BZbGC",
  "key35": "BGbRthGHcBwDSM6WftAK6MYLa3VYoLqLP865KaUvAaSbE4aZhhoKGr2giizVAe1iy3HtgWS2Aao85fpJ5TemFFB",
  "key36": "5p95iZsYewukYa8CtJX7ZVSBSVr1MFD18Qy3oy7HgFxGoPapJi8SAUowrPDsvA9TcxBPxnjF7mTYdsHBkYQpP1dx",
  "key37": "P967uiMQybpq7NfMwrCWGuGHpFX8uK28sKK58n23EHVyUvYn6unqnwyXPyNzSSE8GxHQoymQw6FMAvMC33bxTTm",
  "key38": "YmriJPUKcb7VUdQ4m6StVWKfjojM5ZtaszvgEuaemqZyr1tJt2NVPrcxLVi6NGhCRoSpRDWQ9RnR6jXSWKoxbQ9",
  "key39": "5HYq4zzZpMBA8ejTdhSK3vhAp31hFEd1Twx3oTaQ6wmnCmSwfmnjGuJS2VNm7C9smui3KKUuz44nh6BbXQHT9ei5"
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
