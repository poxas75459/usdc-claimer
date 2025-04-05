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
    "5UBpgwXtWJagpBrzVmLtq9ZL82jxoebt4TztvGvU9n5xe6wcyRGGRbV13FDY8WKZATSydMwprLCLJVLB8dqtBg9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BdJU7bAWRk1ES7HVSiUTTun9w4bPdjBHFrkqyhM6y363p86Rid7Z6S4inXDbuLGJEcxxt5e8RKnJk3NuP3QwhQr",
  "key1": "5xeYR3rxZ5LoXRbHfQLYBvF958ehtQ57bPzMjedLyYibbDR1935kzbAwuRTqMVVyG1Tx2HmHeLRssPhkWDjH11CW",
  "key2": "HNvRjESLstunirAPetKDRKxy6AkjjrmiYwfYp5JZb52q2gQ7z3MZweGJYEt9pf9EApbynnRU4Wav6mmjNAcZhQa",
  "key3": "3gEJn9VPRJpoR8qf4zHke3qiuFfiNNHDECqsfsy4MzGTfkpuH1HtivCojhrwEyDqL4R8Qy5EbS26AyiwCGamYRrB",
  "key4": "3NVQxN9LuxZuDi4yBanidKNaNig48FQaiffCptSbtyxrekTcqMGaS6QZLX2TwSo73hYaw3cNwou6TKHvzw3FS3Hq",
  "key5": "4wA8Zs3QUFxBmyHQpZtumkLXLxGyBvGuKKactoYPwS2FksKk1MRjm9J6gGyKWi3VaQvCaccmAS2FdnzWnT9G1qYh",
  "key6": "62Y8Xx8HHYv7SaEn3o4xhKg6s9hkWv1QU8enWhJJC4u9WEdMUBxGvPU9GtJGKc31QFpM4WuMYMmqMmMRGCeHWMRX",
  "key7": "jWhMYiPej5Ytw5dnDCQzfGKWsTWiYue7Z6dNANi7XpPGZ5LpowXBAx6gm5dH5B9coSc3SohAkUEMnZJVFdruTmT",
  "key8": "FKGa5Yvj1AjsfVaGdrMQA3gakBtgGBWWDF1djPXgi5EVqAnZ3n4D2nYUnHCsHwYszUETJTYVKBLX12G3E61Cvv5",
  "key9": "4igapKN2iypTgtshBU28ZbRqhiieBmyPY45zsTRSUbuVeqUQgXwNXBxqRtjhGwFNs3uHxySMQn5sa6syPd3Nhngu",
  "key10": "cTvDyKyi42A1AwWCxu6dz8G7ibTnK5vMQeFsN3j3ceQfh6YiNTbcaysap6GdcexjiM8P9ivRE9VD3jpFqYAzjYr",
  "key11": "35cXjGbM4sojfGDkSaR8ptHbaZtePe7QNSSG58HWM82eRjZcyXrXYP9UyUFprWfveJHxuck6DcCuCDAzUk9vJmJb",
  "key12": "3pFL5WqoJVAVgAfMBNBnSyCVExrbzQp7326oVE1gCEpijzAic6GowmRHKbUi1jMKnU14HNPDnoSZ4Uy3jyxopZNN",
  "key13": "1uy7WGhitsYUUvkmM6UqoVf9W1eaqVosC2Z5CduinbVAggQxBHtuomBFNeAiGhqVfEFoFot6GsEHTgjboyRZBPg",
  "key14": "45Ergq8RwYketgZ1QhadHN86bSo8tNmT5eQdDo9EcjH9tBMEX1LsJ1iWh6XsMiuhtb7FDJJZHaAECTpw4UAXag5w",
  "key15": "3VnZDwUPnZCorZz9g4owx9KdnJDReQ5Xe1gYF6EJkbSybxx8xH5GPXgHWo2AUQk23P4LDbpuVyhJS1zH1hMVHKzt",
  "key16": "4UcJdUfQ2DmtfVrCgJrT61nLW9qm6zgLSGW58zrzRxvfXPmHPmCLED4A7hp7dvteJAG8UdEMiZyvjNMagC1nHTxd",
  "key17": "AF4cnEs8nSAXNG11Uquad2aLsLiVtwvVMBpVvRLrJNzRkZeN9jtuWJdaDSTHArHyMECzjeUpsh4YZdeRFZLEAzv",
  "key18": "5x25vYDfiMnroFn1ZXw7XFXwsmXMWQWLYqxhUgm28ynoEXCBP2r4Wn3d7p72EiME6T2adxr8hfK9uyRbqxPV9gmW",
  "key19": "59cuJS3PN82sgcxhhQT55dPCBBWEwkuuL1V5hhvTbQWb2FzuxxzMiKXkkHXwt31Xs32emRbRXZ7zEJBvDrnUnuEr",
  "key20": "w6VhGgZArF2TsvSnHFAAuqPazBuKfvPTMccTQQkKhxrg95PS3oXhhGgV3qb1LeGVvi7tjYh6HNGEsLRhMUxmHEx",
  "key21": "2tpeaiYurhYN2jWi1t7khTyxhrjAQtGrS7BhHfs8yXa9WcszUcbvxCWnVV5xjWWVy48HGw2ZCsFa28YWR2u9ydZZ",
  "key22": "v7MBujryidsH6TNFex9gwSknY4LMhQjnGdn9sStQVXUSdvS5q53DYQt61KduNefqkuzCFwrCAa8L53q94HMMEKT",
  "key23": "4KDfUn59GM8kv5poir6Hgx7TvTV365tcvwAsmszzK1UBQ1Rc73GEExyUzXeL3Jz5yEyYfQ4zajVkBwihNGhsF5ix",
  "key24": "2eV3PAvMKtLzaZrvg6nFLaJAfwhKCpsdS11Fu2ULn9Xfjbwt1fhL5a8EdE5cGm6Ca3YGaYrbpRhLMxJMhd6kn9MR",
  "key25": "4XNHBtH55ZcgtT572DqWfuoQBGySg7nDELoAxfJmqBpyyoTtdPU17KfaUQdop6LjQrJ5o3LYM5d5fpakKk76AZ7b",
  "key26": "5RCyYnXymPSJCpHc8nxcspM1wgZxsZMYzVR1zVbrrHafgDJzcDENmctQozaVetT7bKmTz94YcvkBFWZuEwv82PMy",
  "key27": "dPxPYKZSrbNtyVnHu9ERKrDYFi7hzTzdkD3SzYTk5shWAorFuhmFCv6wFdpmMAjNDhi4uY8bg5pyMYi2off7fr7",
  "key28": "5tG2zq5tTnpBzcRVTHF685nMnufhzqiSLkDCMHEbX7giY7jLviZkrTGHeu58BAZ1r2o4Hk6vorq7U6MX5oKFZg6M",
  "key29": "3FqgXGA6RFuTuFTEZ3M9KRR44afrgdeGrbYxh3UhDu92VsjR62t7MEkZ2tJDr2B184YDhND3JCNK4PwXqnovKob9",
  "key30": "4q21Qgir238EoV1zkBz643sknDcAyrwrC3pdQoYfTfeqpScexZVXQJPdtALKh21TKjVSDSoaZ8he7mKbSiaDQnqJ",
  "key31": "4uEMVX765ckPSTJwosATMexSGbfoWuPkPTVNjbiwHSMwavmTAQTfkXJi5bJg3NMH4ZZmvyaQguKvL2eQuK1S8W6A",
  "key32": "4iekKGja6cHFPDiePvYaN2uiYgN1Cys3ujkqUDKJ4kfCRLvxSvrbix6tE2yczhefjsyj7PH93BampCfNMCGVxQQD",
  "key33": "41ZAAT95uKeJLN4EmGWiCVo8qcvr2jvCNkMwU2JpdRvAh9U88QEPdxFDfTVEroyCXKxJHu9wMtge51kbHtFVnX9s",
  "key34": "hoAST5KTcqYp4XA7YjUinXWPhnHX9stw4HGTUbsgKGRy15dhD8DirCbH7pP9vZhiUQ2pPBNWJtqD9pLEED9MjFD",
  "key35": "5scq9iJ6Y5XXLEDsdyawcvcBbQ7f8wQJ5WLEZWmNUQvf3L82Y71EjyXuorChsqMxE4CC4k2eSPYaF3ZQaqpgyqyS",
  "key36": "3rwDmDV6QfLd1faj2cD6pQFNQRv2osrJWumMM3eaJG9UWfnQudZNVvpetSDT7aePCbQ4roxy1TLRuEjD1RFrGSmZ",
  "key37": "4UpWqTxHua5R7NYgzjMjCUe3xi7FxZKp4dXxZg6pitHZW2U1mz9GoELuQAkgJgghBtBPvePjTfNopvMnqBh8b2xA",
  "key38": "v3fFsetWaoRhuWcLwNuU8jxDVedV1qG8fp9QR87Edn5JjRdHkiqz4RYbA3K4wYBA7CMs9rsMJm5ikzicpKhZWBE",
  "key39": "JXRf3W6yhV5jTbtpW7ET3BFNB5vYcXVjFYn1DefdPvr3o9jg1eRa9KgRmoxMSDt7D1AwdCGG1ZmGL8YXXbjr4KQ",
  "key40": "2fMvdwqJGpKcU4WyW6h7F7FQRmT5f2vUM1LhkLyxLt474CVukQpCxsY8E14BJm3EKQXxGbADkz6ysCME53Sg7gar",
  "key41": "bRTwoqkAtcRnQ3SKN4cR8kLd6gWEVFTk5688jyNZi1QiSEFRGpXJH1NuvcAdugVrHPYbE3nPgQ6L1QVgfCqDGN1",
  "key42": "5PBVgLebEztsS3cCWA6SB1X6kZEmgxyrn9DSjueJW3wNLQWa1k6NjEvD27PPCoPBeSAtTDRMe7XhTuU3TUWCXXN8",
  "key43": "24V33P53x3Bp1Ppz7ScZaWBjcEg2zB279eAhXd7ci476cJLYuR3J4ibKLrSJUrr6NaiZBCtwTgRFAZHcBQrD7r6Z",
  "key44": "34mm45x2wTMmBPtP9N2AnTRVYhCtHFUUNgYTJReHyViGVu2wwrDjAhEaZmAmHWsHqh9g164pQxcphpVXQafECiF4",
  "key45": "33C3puY3Nv2kF7zq2LWVXWpDX9ixxQpMLJB8rDTueMPewP2Zwf1Q79oaNoLHtNzvmRRBPwZYuMnsD3fcsYqhEeTh",
  "key46": "4XR4Hbjpv2zV3WwsGm83iKQ4XVBYhq2gqYJRR7QvAqmyumHyGRT4d94zdL5GkNwWy5LbKSieyuNVMBDAJxjCjTB5",
  "key47": "3xHJ2eWkxerHaWUBi7PML9RDzrzmf7mfqspwDKA5FkkoUHLrdaj3t1f1yHQHa5yGVo8FXf3dyNTSdJSUqxjgb3qH",
  "key48": "psEaAXneTK2NjwmgGztZD4zMVnPihm4qvVxc6m6CaidngHeceC2bPEwGkXqsnrPgU6o8MwF55g8YvggGxcB3vx7",
  "key49": "2FjsreXzm7mF5zufSS6UDWGACMvcUcGVsVB7QUyKf6GWEPNVHLb5f3svzsJLL5WRfo6bysE1iM3cmvwBe9w8fCe6"
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
