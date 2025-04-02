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
    "5XZo45SjUgGbp6YLtkwNUt17x6JD2N9BWSajtmhNnAuv7ncucKYWj1cf6k2d3AzCKsK2GNvgiXHigdiHaLo9TFiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "449oLMnmcyGz3ZhVgwiwv5tM7T4h2TCMxaikNGGq3yRRMdSMtSihB6HJYscxJRePGRvGcQNvKX6pyiibJTPCe2Gd",
  "key1": "LhC3ASbUYkFdkEKQgPqYR4QkSLZNi6YaQmb6GP2ZFXKe6fmqc3JzR1KQfRoH9MftZjx6Ag3x46StuqDwKg4dsuM",
  "key2": "4gSdLbuqEFtz9wxuk5hWWdyuTyBwogxmbkKCk9B8jvYhNhwbm1oGra9xQrUYaArcx1KxVJMoytKAjhSbWRSQ7dzA",
  "key3": "4H4xhNAjy4jjvWUtuTzP4cvZm36kvgk5Z4XaqZdm5YDhGWhzMAEfDtzwqM1LijtiV9vnBVWkP8DBtyZWSPv6S5JH",
  "key4": "5jNzv7kv4TVnBDEULaVrCbcp3CV81HKDtLqkQhqsck83dDKn6qMxdtrdau5E6SWam5HQduiGG6exavDiDiy6iWDV",
  "key5": "3VEUFXzixmpgVvVgnxCBhgF4y8dXhnBW3hehnmhYYzUU8G4A2wXRwyXgojTevFrj3XQHNQGrSzXGfMeCht1G8pwS",
  "key6": "27Y2ghUqYg4rdqX6bqj6t8fwy8HEsU5xC1LjAhBjfANMWNxKbNrJGEz4KHt9Xan8R3LdrQFxvAz67LxuRX55vkGe",
  "key7": "4suYp5SosFvYJVGt4TJtqhPCAtCxttgACbziny2LgWAfq9j2WkYdDGBBommW27tZf415eSB8SsEvRs4QuHWdQafS",
  "key8": "aiGw8he2djsdiQBSjkjafei8Lu1oLp9CLArQdXRX7xpcdAve9ThmtomZhJTYtPoszZNqcdkFrJzV7Tw7qiNyBqB",
  "key9": "4Zdc7DCcYjszZ2pCHkJ5gW5a4JXa1t13tGq1wHPuWuuUkSLN1bC1TruKrY7ybtfHZjE8H6BnvoBEvpCokJ5TyMvV",
  "key10": "3khBambaMB2jVBkfRu6LD7CJiajaBCY5at8Ku9AWL4fyG3dc3csFLUtUmFnPXBJh3o7bgtbmeaxKvQxpew4Hgbqi",
  "key11": "ixm2hqhAee33gMPCJigjaYKEgMZbKKXuggUULwXaKvDYdZPfFtgac1hXQxkmtFzesb6pX3kRVppQungGTY5vmZz",
  "key12": "5Nq62UpNk1GxUixXRYTTK3oWk8cWV3n8MQ7ttj5K6Dta3LRpSM8viBrJZP3atTuz6qiKbwUgWFTWpZfHKa1Si7jM",
  "key13": "5VFz3J1QQbLDwFp4hN11TC3hFeNkCjRo75egexF7oGDN3Mz2o8jjr2oAvqqouenfpXUkG3HDnB3xuyeLGQuvPX2C",
  "key14": "4WhQ93hbMeVHw2x2J9CyGdRbLNHX22amPFe8cBxFEb2xXwmnouZCNDJrUVjwuiKduY3rQt3semLvFadwLsKRkZaL",
  "key15": "3KycAKGszvpMGFJub8aKbX3XKsm2GeXuQSR4CuL7uPX6r5d9ti7eZyDkEQUD8imRZEzuZfL2t26HSVt2gXW2kWDK",
  "key16": "61uAVRNqqFFTwCJAmo9jj7Ms9Kz4kBvW8AoWjerPbSmz2vmeyzBwxiLeCCv7CVDpHRtDDyMf9aXPLtGVLLcJfyhm",
  "key17": "5bkk81xpAzajFXZocisXr9DkpQF78KhJAwkqBkUzZQ82cw7aTDRt2KmmtzFULD1h6WJFuZgQLQLGSGXVevaFNuJh",
  "key18": "3Ravx2ciBBzd4SQm8dgsLfmA3a8YfzJw3RtjTCiMvsiPkCeNUdvGXR933Qh3Y4JQHib8iiC5bCjPgkwqfgWKGRLK",
  "key19": "3aSG4uNiHLss7u7RRRW3mjxYu9JxVbLekNMSmxs7fThL4acJzThtvVZxvjH9yh2572EFy4z6W7bNwUYi2sbxu95S",
  "key20": "3XU6tDUuNef4zsgSmaxitJg9gcsXqJJyae3komAFiuLRd3RTrYx1aRcXY9wBEY7yoyryKg3RyAPvEWkRztiNYPKS",
  "key21": "2Z2dbWGxDqcCNk1zbcMVDzkQMpFBpwx2KMPjXPKrEDc6vMk2MyHSKt9Yp6PYFQ4dcXdrZA35qzcLqaZJGRmfSit1",
  "key22": "2WAjpWNZHqECNeJGnXkhvEKf2q2YixrSaqjE1pKd11gRorJztsWshE84rzoJjYd9gRzNLzqRqnXXbYo4y7deu7cd",
  "key23": "4oe8JMARBozPJW8HHzgASVRFTvbePm8LmXR8SpQ17mA4xhikHVU51EPgU1U3So3Ht7WEXYARsPwBWB3UQuei8EUU",
  "key24": "h9AWoRWnSkKzvj4pNm43DDGCaiG16WvhpceZdTrZ6J9b9ARVNvNGn6UGSTdQGKyQWuhYsp2V5eQnGV7BWsepA3P",
  "key25": "5vSUgsc1R7aVkb2NZRf5wHt9EW6P4BeJngdjfi1DsCXXBYbefSxZrdAh71dyXAggfvUMeWUqQckXiHTNbWNqLkS9",
  "key26": "Kg2Ne418fr73FrtFSvWWAUCoa9gfAnVxr2E7hR4XJCfUYwwB2V8V8Q1i4fDc2ocrqmf5Z295H4ej3rCwocPQ5Wq",
  "key27": "GcfxQDeUU5TW1QS1juR9C2YcwENjPSn7qc8v19MXJhi3QZLHS9hHzCp8CwgNMptxjSNod5C3F66iz48XHnqXFGZ",
  "key28": "2Z6qR3tY6nXRWmoms5tMAbjmjbyjgkNXyT1r11bTLqT3meAK7p6TNTWQBEq2qbvnnE64KrGMuVEvXwKRBu7nUsgv",
  "key29": "5Dzv2ZPp4jJjKXMXf1MhbYgio6qMp6dYZtzbZVJ98Cz3khCmbahqA6GEyM714PccnZsbGjffHAPpgjC8uh5mAscm",
  "key30": "47kxa7UCo589fHDYnUwBbvUq43UwrEL1WV6ZTQF96qzdfPeUJzamUbmV9Dxwm6PS7PhDid95usTjacgMsSkerscv",
  "key31": "634VfY7QGV6bDdE26WBJenk2mUmGeXxwg5EkuVNTk5AVDvRQ1DJXKN3Bz5EF181MZPk8XzLFyLJvxM71gDAdJqLE",
  "key32": "2m8oLriXwb1z5qULWwxbvhofzQbaFZHnigbvYefyZebDpi1BZwkaN32LmSePDB96fXJUThsyY7refVjsGcDgx7qH",
  "key33": "Qnm7gWcP5vYkDXXoxCHrVeovBvKCrmfi82oKYikTEKnRnVtFgNDwbM6Bshh7z8uBn1CRuAh7mkwSQg4fnRnnygK",
  "key34": "QMrd74mkzUgoFNryHCj1emVi2bH6ovyFtU3mcLWzwqbvWur9JGhwTpSmtvigXkYA2FimQEnFk9egPuM6nvm6ZZL",
  "key35": "nuHQpL6jDF5oPBPhBcHnQsxm1oH4ANeMGmB9u4rTirumAwRzE182VpzDdFp3rCDoUwfcKz5GcVLTL5cofxswCad",
  "key36": "2RVr7AoUXG19svYLvFBaEcCvFnaQxLTB2dbSaEkpA8PDj6M1JfRg857BXTRGby9DYfDCNCEdyd2XQmatQCDet9qz",
  "key37": "w9gTX1PFnj9arXD2Vz5xeyYpSiinrzsnneeGUxNuEgsj5iPa6vCwbUdxrSX6uFDavbwB3Kq9MmNYmVxask9n9ZL",
  "key38": "44SoDkXJ16vzF3wNsfKUvSZEXems5BNTpfb1emCpUQp1ymLhqAAA2CnePKfPxCgZg3hjQyoasHq4R6WEYtChGyiG",
  "key39": "2VhvDRbJtf6K4gQXhFgvhKCMw8Uak285xcyEj8f1GpZyTtwfEuWdG8LmZNXUeBN1WK6SpMfsAdPDh3RpvNSrEUNL",
  "key40": "43AaVcBxzrKzzxCHToy5MDuwiDsobAMzx3TTuSy4frqAf3QeYZEMxeJWRbsvEvWLXxyFrzZAmiSEL91TNeQjk3TM",
  "key41": "uANSC8cDwkhGEwLAPHUdyPFWU3LySewMnpBTjTbZcYLmkqJhoKSNUvg1CxheaYzWPaBwa72X3HvdHPyQNP55Xp1",
  "key42": "43UmTDr4euDm6xXd9D8a4Zrf4x72DdKNRjAkT1FQCJjU1PWf4p1fug1juoxoM5JLbXhfKgiCKjsBVhRZiPoxRnj6",
  "key43": "246MNrJym226878Ldk8cX1wTLupdobj9PV9C1Q3vcWn6HKSaXmBa2uLEtAjpMekHdRL5dxXxPoZE2iSiXx9DS186"
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
