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
    "LPRGuAFhgFM9NTe9NJ3mxKBehJGEWZh6PWAm1tRsQ6hmJ4F8PrE8r5r6YsnYGt6WU3ttpAtb3piiikQx8GXWoov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yp8Hntay1cG5FUiAuUaBFwzg59j8bWLVKK5Z8J5rM4QY8B1316Z2jHxwTAEHDbksAeFGtTxbCFy1C6J4WZsgtny",
  "key1": "2KB8ztC6i49gntkHTd6DzePzhGU7XJr8cmRyhRmnUtQMqQopNYUYcVrEny6Nf9NEEMGrAT9mfz83FihUuKmZSDmR",
  "key2": "3uwiA7J3EAW3amF34g1R3fkNVkgGJDmauvedLCt3gFn6yhCknRN5YtfTMmZBiFA4qc4PyMB4bT5ya82JdfHbdKjM",
  "key3": "YPBr3iHTeCS2m3gVB1W1FZ69RLMcMn8ECoPDVYfY9NTZFVrgBEbWST158tyWAUkQLAZ3G5ziU1br1ffUDnoYdxv",
  "key4": "61xZMV3jzQnCENZ3baVxpzXdgEzNf9GZ7dzzwWg9J9otmp6FH5npfvbQ9XDempzcZhygVbb192pQxXcCiwuug3Rq",
  "key5": "FDFkNFtogofWCWJyuR8SVVDAmxe7V3jxXcmMZDzqz8hP1nCL45xjbWQjz7m6BXJkidUGoh8GgrwUiu99s9bJ1fe",
  "key6": "4nKbzrcCcEQ47TSvmxYvUfhF66658J3XV5dxHbPSB978m6uXvWWstQ9XgmX1aTc3CoP2qHH6DMGo53wvmxhzc7Qc",
  "key7": "4z1pp9xxn3tMUL3swiJDnfLN7jR7EpWrXSV8vKMjqjFrPRBVZk6UzEfQ1GJKTEdoEURFHHWBFTmgEZNwVF4JXgwq",
  "key8": "2EqmbduLuTUen2tqzqH5aU2Uf3Fw7EcqdVssxX13uRkspQmMMB6AmyLbdhWN2kAF1wmCMs6uFqYifgRjnVDT3Dxa",
  "key9": "4QYdY2Fv8nmF9zfk88tMdtpmS4cUTTgh1g1wT1UbTcpKMsiXKnPspywadjBDKt4TNfJGtgnHcXcv98tqX5opce4h",
  "key10": "5fE5teAiGHFFkCecaWayQW4w5xQP12xsMeAeBzE3vapZZnAMWNwQGVKTzx8zH1VuZJiK58p8ysPpxmBHeCArCBGq",
  "key11": "4VuqcsnfnLqBLBaSHUeHPqxWFApwkuL3g5tpimAh3tqi4H2hQCXkNzsAQfNz1ZvPQfEead8itP6buXcrbioavpKk",
  "key12": "2u1UwWjo1FKiuZgVM9rbKgyzkfxADKwBEBSZjFj5i36romqqMHkhRa4mJcoAbSsQtQwgdfbXsxc49xe7gN4PjTHC",
  "key13": "xJRshkM4uiRgiGCQyS1SuvdF3xAY7MEPxES9pBuQQPuHZZbx4oQxqErzk8UmML6wv4WUPcp19DDpFVkn22BPcNg",
  "key14": "5XwY69TfAjY695jTsdmvCJAR25zetUMyv4XfEjjXu7MqpVfoJct4XhZR2KJ6ouYVD1E7VTYH4gknjbwtAAnA1r6U",
  "key15": "33p1NaGf5zfKvZJg5XUaoBi2T58r5Ap3PY3h5oWFsmiGij6G6mnUfbbXTjDXzwmpAMGtRHE5sYE6gkte6e3oqjGZ",
  "key16": "5cNdJwtxsQJwbWAxbTs12ztr8HpSkqb7TTDHQ98mkUoQC5XjPNb9oCN5e4nKm4ycQuzKcA83Dbkm5UkWDjQajk1s",
  "key17": "2PbJ7pmw81dgA4ut6HJgvzi99TWp7qjJ9mVdUFBCB6fPcsTbHrirWZP99caeNHa5JCqcPFfgTF1WoL6xaryUtMBH",
  "key18": "5DP4Za4CCXG7PtiqU6TzWkBmwkyJZ61b96aMT4JbcYvikqyQPHHYHiLLDLhDr92uGDVbyPa4pt6eNy3y66JBgJ9y",
  "key19": "5T71xH17KSNyDH781BdAQvCWUwFJinMErpVKYyEXynZwY1sJHzEYEGvL8aWUw84RFzZqtkzbMPqji9wPZiBZnGRv",
  "key20": "4FJe8nsr4aB1pGZC3xHJs5uvDiNDdeuFasfwKVuwt94rjPfDMg2G3QyyTds8UKxWTr67bFij7LdDHRKaoJL7Lghi",
  "key21": "rDn2LJ1otgce2BcU6JiLefm2qrdQTHvS5qkRduFjHKjfd47tQCL9wuS6tEDNzqtxM9a643NUyXJ1cqxfLsaiFZ2",
  "key22": "282DBT2j4Q2zaRx1EVxN6aVYzqfujBGtu5WqSzFxGMgJzZfD4mQFVsnLEyHFbPmiGjTsz1bH8oRuJujURaUG38LE",
  "key23": "4aLaWcv883kisKJ8F1wrfpVgqbi9wJKbX1Wr6FNhaTxY2BjQEbY1uci9r4UwCcB2YVetYQyScoVSoDn53oPdbtTo",
  "key24": "jvLfm5mScing8zY8mAJtGbP16dQ9pfftmWwizPhZQWTqjxy5ryYdKXnZEKXXjqyefG9uPZ5uR9TGoqVd7SgZucT",
  "key25": "2fSADkYo4B74gEhCaC4ugicvBMV4C5PX8JteW7apGzMBVivfTFpoGHqDEiqVh6yi28uwg1t7G79ohaTb2X4igsEM",
  "key26": "4jx9gikaHF3mdoFsqeDbpEu2ke8KL8WRXFKF4WCYLFd7ynHWtyCBDYCmQwLLuusV1k3UddExnzkzFcKPXN3NaBr3",
  "key27": "4Hf3tZC61PbanhxFbfpcBAp1fhkyeg7szufV1Pgcdevj5yMud5DrwzHDxEisWSZuBwHZjk1GGvphPb9DsN9YT7aD",
  "key28": "34Zb4SMqN25enc3mK3aTid3QzWjTcQoiD6p1Ao6jZ2PEPgcw6ABgj11WJQPKKgfUwumGNyjWbqYrYxfjKNEDWsAd",
  "key29": "3rnXEpVHWKEfPjZyREBuAHKeMtV6i7j6v7q8cr8vKEAYGTiZzRDNjqgNVgWtT87aD2uUL9aSgcsjx7PioP53rEr5",
  "key30": "47hrtARobP4tPufimMf7tHd3K6irNiotXXBzkExfZtd5RXSA95VEjJGWnxhhbBoBqqMqtSBNUqqZ7P3BYNzqPKtc",
  "key31": "25huhXtcuPSv3ZX41jstyp3eMAuNNXJaGm1HtC8QbiWupK8ShdmjszEi3inbd1KX9zpd7HG3LRLJKWNCC8ZFYoez",
  "key32": "2MvYgkVqZamDQW9sAJ5QBtLK8yL1aJpVQazH29HvTwACY2XGcJfP3GXHcN2H1ULKLgSyRT9TZSc4yLXxYKboud5B",
  "key33": "2nwPHWudDY5sxrjxLz5DPRXkrmNJaDnrminjtMFfDfyk6N1tfaWvSjLD721KpVzHkQ2GiWjwRFLzQiv8m3kZuADv",
  "key34": "2c7Up1WWw5UcYGMMzJatBBRijB9GFMmN1JMBr9ZtK8CycTj5aFutdxAg9QzUWARdWXA6d38qrLjZey1zCLFhvVcG",
  "key35": "2wnU8p4kkXcKUd7b6PPbdL43eXjip9fqCssieAc6ioDvEf8FxJ3AfU3z1RhCwpdpqj4na87pv78mG1rsbSByfUYD",
  "key36": "4g9j9EgimNywQFwEgdq1PsDMCLPjmiv7beYV4WYy44jR1d8Nyn62LFqk4JGnAx8NoDKQUEjC4Qf4hHcFeKkFHd8c",
  "key37": "26FpYLsQhZParxf5Sgck4Bme6ertUWStpDFr9pz3SGVu9ERc5vgj5HZqD1YgPqvMZ9iPS4gJPZFD2s2qYiyoq5vm",
  "key38": "2gNA3AVFyeUjeYTSzLtCdboeAAMKHbDcynTqCXGuUUv9LaSKke2bAhzkM6YkK9RWwGJxYejKMcRjbYH9NoCii5fm",
  "key39": "5utEhrReDEXP6Lh9uspX2eCYjXFZ1VFepCfKeZmVbQRzneacp4ZPqsbiEHQGauDTvGa6hZaa5K1qzhnRFF8ePqtj",
  "key40": "2TPjuJYbjMGgiw1otFBjei9Cy7P37wPCWvKMbrNMrCnUSu8fg1GZjY1wjyks7kRNSzPuyTsy1n9hk9tfbKwbVU7u",
  "key41": "4Z5TsSSxRBETPV1c4EDyzNoLBq61rbzy9oU3K5kKzrdjdou8qicH3r1rCRE6nLutCTNdbavMm1nyhB1KGajMBRfm",
  "key42": "dfNtxsS5oAioDgrrcm5z5S4odiXu5hsoUHXoX4hLvnTHbSLm1CRexm7BoWkJthy75CLdAMvRQDGTUTUDyV7ZLaZ",
  "key43": "2n1ANKYM5z8v5Wj1pTkLsLzVLeVN2T5U33ojhAwdyW3CGkqzWg5NhKbETw2Ygy24t2c4kzr3LxHX6H7kk2ehKQNP",
  "key44": "252aBdznnm4euXCxk3jmVHZnFofjk2F1gS84quiMSpUrWzDPGWxMjR1fWSxpJmAudbeG5u5UQpfgLBTcFLXcsryF"
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
