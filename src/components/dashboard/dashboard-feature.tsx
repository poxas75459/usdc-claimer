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
    "2RS22tnJ8S1WXyT5bzkdozKhNpnydkr85C6Cnr3YpUKNsVyL6Kvx3h1RScAc1j1LGJUrMXycrKbS1SKW7aWxcfd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SjViB5unYXupRwJUQcXSTZKCCXfnY8DKEqom7W8ZaHPyTcz79pR3R7A1bakVnFz5MsKYAwm8frQEWUNhffxD2zh",
  "key1": "4p9tLBALfyghNBibDMnMBhCXMD4DtXAkL4S3vnNzVzfytoj26EsAHBJxcD6dMurGbyXHhjikghCj92RXVrve4vCU",
  "key2": "4ZgvCAPFakZwD38X14fzsqRHEWKLHrEqm1pVZP8qhk7CdUttQpU2jS93edvCs8oC2JzyUA3PKKkqiCDQGmSjA1RU",
  "key3": "2dNVJQFyiwxjNoSNPaq58YLvMxofCzoJzDJBkMLAPmdDRLkHbjdo7CT4NySsVatjcNbsDKkeQHp4ijSJViHM6P3y",
  "key4": "5VZZywY9RLHEnZanm9GJUy3UMbtuYANZnSBwcgXiZTp29ViVQ4hyn83ZsExoB9phExhrqqHEgN3i5ZjuG81xxSFa",
  "key5": "2qp7wVtbj58cYPBwZEFQhqqaqyjbxKMJvuM3R9bjz4KnaDAk5JXeC3u8wxtzeRBiWpY5gsCMUFgGcHuTa1Gw5cTm",
  "key6": "2rijSAU41NFx7hmzKKP4JMDwU18fd9AA7X2iFKzaTRaZZ9yUUqQV88hPG7m3uSfe8LmSdPhhnjm1Ae8T2aqc4E2j",
  "key7": "2R9jpGSrf2Q2APz7x4dxy5Bn4LoayLE3R65J9PtJTrNb5DmGq2dv8tmKmrW1TL7W1h1e6LYnFizDue2thkHMk8Lv",
  "key8": "4ezDSPiWieNHk7isy3LXP47G6VuU6c6Sc33RGRz9eieXtjHAsjt5EdZxXqcazbGsqXjvQcaPW3Vy77ZnajwXh9YP",
  "key9": "2Cb6pQAmTaMuWtmNiaqqvsktgt3z54ukCnf6TgGDZGnbAWuC6w21t4U6DFaKoCnYs1BEVk9NH5fQg86VoaJkKwKd",
  "key10": "4FJkEk5fDaLGLtgqDWiE7uYZFod3XkBoEzjbsieUPc6SQG8DDzqGbL1KTYLxYTDYWjCne4L5A5XFzdqd9rzpBzvL",
  "key11": "SakCBixq9vAYNrsCtV7gRDyZZxHkBhfLz342wMPrm6Xmj2Fpq6q8Ck44gZ1rtFgsLpYaywg1n7nUZtWpc2Ma1aF",
  "key12": "3mhn4MaWJL9kWchMgyCALhMzvYtxbcKVDKSCc5kwiXvhwNQzCxPTtGd34KVW9kRvgNaAtmuHkCHwYihrwkxJNbSr",
  "key13": "aSZQBnmyoj18TtYjrDDvDqmUFXfFXpADrfn5iMCRnRPhs9vmLvQ2uUNh5RHWXVuTapd6PKtimmEAWgrD7LwXwCM",
  "key14": "iMioe3EnFYTp1gTMfFbZo6mBr4VKpPMk4DSfgFsfSSc8b7CPgfYHtqtUNiF16EEXJeLH3yQFTfUWY5xach2yczP",
  "key15": "5PTB1BVjTeNpgwFzcyCBs43xcp8abKjniFN8bDuQYSBHGkgkfhJbtSappddUFatjVCxudkDFjoYEhX98TV7Xneh2",
  "key16": "2g6ifwWjHDUBnhkXi8akP23RjtdDWwbXFNVvXE7GS794t6RRuCvNNtcJ61Lfrp6JkHpNtewwuqWkibSAwrzzZLzR",
  "key17": "53uWj51twGaZApBTcU15A1mwMaMpwFZyAKGZcYq4K6wX2hdzZyUtnWnB38jx4uVUyWJFxNA5qnr2E1X5baFYACiJ",
  "key18": "hTyPG8dgzzDcWdi9DxKeU7zzHNG3aSr9GHDpMLe7gk1YGVzT1RxdM7gno2cwykBCXkWdUvsWRb2JKiTFwkmA7Mz",
  "key19": "3y3dkeycQL6fkseSS6tZ24PLE7wrLGnkN4XNxxAWz4ccE36sowKgT4nDQXv1sMqc16TPpbuo3FjrorSVermJvRSo",
  "key20": "2Xk2ggPFQFXRWbfuMLTUFFV5Vbe2WEnQVpcbnndHdMqMohvV3ryanS6VWFgHrhQrEUYNKWiUYV2ioAEo2JxQjow1",
  "key21": "4hAiRXX6kCptmiKWMCcpJGorpii5zCUeJMs6AjcskDFXs8FRpgbaAhcyGhkqAb3A67wvPEvvCWAsx3HkxZUgAu7d",
  "key22": "67i6Jq1tCo5dLbTCM6TUU7toAnnXcGC3E3A3mtqJWqWDKbmpF1EPTj6D6TLv6QgL1w92wv1ChJuzGU3J64dQzidt",
  "key23": "qk7FwWC9Yb8vAqiNPZoTrwbTfQQZee9jK8Jd8yX75kFBhwRG9d3x24meUgHQS5Xt1eo9gKTM7JRA8fu8q5xb7eU",
  "key24": "3PoA2P2yizSrncfjVvyySXcUwNavimzTN7NFCjyeCfgqSbQnkjykqqxviEdzG5Z96eTXRvVBZP6MgKfXFn4syjbp",
  "key25": "5wm4CqCNpJQ7XZ4RbXjicYLcQ1kAGVwrVnojwvNQFsg5voRv9dEggUuYcRjDFosd2pGHmVY5uhBGTztWamP6aoKW",
  "key26": "RE5JReL4FLYPUj9QobLcKz7vQi8bXq5Ndwm99H5EYj2TLV1QcsTV3cNAED98AwF6C3dbipxcQaX2X25GviLtL9x",
  "key27": "3XfLGYCSYEX9qptNQBNKX6PRC4cggqenenPDEd5725M7RChtXQVZmYSnGkrghj1zNT7nnGNuA8YjoZNTN8FpvkjW",
  "key28": "5NgJbr1bzmyoLPU7idSXbjV7RnEkUWXQWMaNAt7LsVomGuSMomiqtMJdsakssQMMRsRKf17WncjkGq5bTEeBX9Jn",
  "key29": "4i3d9vHdKYABdFGfYTNJKfCKLtub4TENmwq2kVFeH9bpZqe9obFbZPoT6RZRMAXZ1Wi6DL83azuwfwQuJjMhQJmC",
  "key30": "2jALZvwa5FxBhc6nZFR3JrqdHFtFHgAXh65SLEwyTcaiyLrq4N5bMDrndV7sKnX9pW2qMhpS3d4MBV2kcEPFqG23",
  "key31": "2UMGSsezknFtUfnmXFCyyXyRWXdp2U5LGSY1qweWXeU82AJXYxVmX7uTKgydRWYW1TY3rkvoYB8H41CJu7KbpDpR",
  "key32": "21hxjGMELxpRXGfRXXpJMQKuW3sQEcPUAGvmh1oYGGmPNDJFwckyMExYfEfRs4bK2HSzYU2SLMY8AnjCRHrt7Si6",
  "key33": "tdZbhoScN79o4N4oaGy7vNe3WpMFJqMgSPU58UzRousdQ6haBQ5PAv9m1dt93i5ZuY81cpJiGkUkGZ8YdnLRjWg",
  "key34": "3JRXkTKJYR58USVAx3KTTG3jXkdskmeaQbahPS2kfWJRGXsdpqEAVBj5WTmjukjbM57UM86PyaXuBstWuA5C8bMq",
  "key35": "3898naT8ke8qyvmCGgAmCPKLTkSa9VFTJetcYQDP78DsqGRBobkcoPG9ZXf7EcBscpZ5UTJpp4WgPRw4CRXcVCJN",
  "key36": "3zGUon11PNnAHdNsqznq4aVTCtF9F8su2ZpW8rLGr2eiyBjntFaNbeAX7J859RUEr2L1U9MbRbeRzCu5YG1qfpCQ",
  "key37": "4TWEcuDe7APrKCPmNJv6bKeCfFuas7jn7RNZ9JZUNaQZCBz8QkySc94XcmJtTcyeAk5c2ZKzfjoaSXqtVK6coBoa",
  "key38": "3x2fQCH3nEcWoTDsv2UGgUjCYgkpdUffE7LsprSPdSqJRcAxbh6xFmnFA1xbo9eYEw5Bn1e8AEKn8nCwuXWQcSGi",
  "key39": "633tTTVuBZajLHc3DXGoNKwvauf4xPR5VowgLm4zM38S3TPnyAqtaqCGaYDQxKepB3PoPaGvA7b7dkae279coLpV",
  "key40": "5HHJV3S56FQLj65NEvUGFjNjmvcNjyy7THS6Bi2F496VbCgAXcUGkmSyX6PNucpYWQQAhf6X2yGTt11hgFfNujXs",
  "key41": "L8BJAeWFEBBPrBApmH6EnMgXdZ22vBzRvqCcNvyoDKGxADsWTwnP4DpoRJ73qL7i2Xq9spF5rYqZpy4vaAvnN7P",
  "key42": "4bXyqACwVzVBvGPoT78EtXrVyUncFF41NRSWqRrYBLYLWi7pUSwcvaREnsSpD1m5H8hwPKevkQ7qYwyRcjpc6yKs",
  "key43": "yCdspF6zd4VQFJJpvkX1piuVkLXv79zRGznkfNL2ownCSoCGmy9MRM333TVvQjrA3xLxTEqiTMMjdS7TzC7DceR",
  "key44": "DzBaZaP3goZWDLnh7MaAUyF9SZ62XJ1L4vZf7TEnBKXymoGSfhVca1GN5MRW6vWyfHKcy52uj1UR7roeV8jDif1"
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
