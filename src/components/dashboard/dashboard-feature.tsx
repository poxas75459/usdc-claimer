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
    "2bQmBG3pVk86bfKAGSsd8KNSCPBqL9i9P6xdHBXyshQWBDZZLzJLgq7pBEZGX4xLsYvgNdzLyAR4mTMTH89Dy8cv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48M3NyCNA1bq826PLah7cSpt85g2KCeWhQSpenDKKQXH5BWFxm69hxpG3yg4D37AVkYseojAnHriPychxs47jDYJ",
  "key1": "2Ghzqm2ernTkAgvyXfRs4bSi5L2QCYTXF2oEH9nuJ9DNCnbT8UMeJjAGA1YkxqpQ1DEQYH5bXAwAjNuNFMw1PgME",
  "key2": "SjHcxaabmEWdoSmXDLGVCcNNqnbkA6PXRW5ViHqXqtmsqzrj6XV6aeRRuUdn2zJ2o4MVGFBDh8u8jpgQacwzj1Q",
  "key3": "25t6LuN5in1K2AWqvghJi2eb6WxdSkA8wPfuXuFv91E7bvfzBGHxgxvMBABu6f3CdW6krMJ4Bv3dC2MhJdNyz4V6",
  "key4": "2s9GJ2HkshPjiczhM71vbJFyBNDKNhHrCTiiKRGLyUEpTH5petB7Nsn6dDqMEbxGBrBm8KRs5BUvvyLddWdbUKXc",
  "key5": "4HXRTAZNT8yJSQzGKiZk1Yom3u3yT3Cn3RgC5RkrDNM6DK7M13uiC3oqPadPuTxcuHJ6eS3DRVnZtyyh5VHoWA7E",
  "key6": "dnm7jrtakVQeNg9acZxfEexgUJUKTaDW7SmX7rFwHUsv12F7yXSE5gZbCBMjtD32qtzjT7RKFR6xmcCq1moU6zf",
  "key7": "5xUqxJiMdhTWiJzmuQ9G7YqWP5fE6gY6c2RKo2x9vWz58JECMZqR1Q81SYMcSKiJHahuMhr2KrJZ6pc8P2gBrWZq",
  "key8": "5FgvhT5H8ztoeLQFmoc4W7MKk2KGcuyf9fC7f9588wg5MyJQPRC9ZqWcVH2MLuEkAJbj2bV88LJPCoK38X7it7PE",
  "key9": "3i965tFe5T1bA5Ht6NabF5UAMqSucDm6jQDNUzbPSCRuEeRb7P6tXBDJehUyCYnxHeSiTHj6hoC6BodvwcmGP4Wp",
  "key10": "aiXXh4VvVvh1bg56foitDh3nDYrSMJSbDxLh9PX9aBdRWEcnUzdXdcN7pb5aBfySzcVZAGuMKPA1UWzbBrwR8GK",
  "key11": "2VSicTNDSv7RE9WGECtoBfyBH16fiByBRMmL2jJfvKL6xLNi9pnnHuC6iKpFxHUiPuThzF5TTsWKSuRpkM4dWkQv",
  "key12": "3PUkmpMqMntG32WUBcBszDi26YbmgPB59BXrp3nZ35exmRd2mooEqrBtXgkEhktoaXYvWnRsJb4vtDSsQSAVPUk7",
  "key13": "33wu5FX3hkhhyZ5uK56EuPVUEiYVLKRnZ5CLngpCfi7qQTQooLMAFNMLfKt4ouvXdNGF8rvMuJMQ9FTevumRRDbf",
  "key14": "AcprnffXGTYJ3mV44T4nAWDLW9AZadJc9tQEjMMLsbuWR4gtCn8eWfq8xMKkppstXjdComf19CXUyd4rWCMoY82",
  "key15": "2PagWxJvqJURYfCHhQq5Tk7yamWpEV2XPjTXKNBAVDcaymdNnorXSfWyhU7rH1Uo2ee7uMtZ6F9KWDQKjusvsJLo",
  "key16": "3jSPhHkwLsQcTfGEpBfx5xet3ifsqxsW29NoptCwYvAGiwadqGFK9oi5wV6CjM4p2ANoC7BdnDaewkUwg2ApKVPR",
  "key17": "VH65pZGt4JFyetK5GNii4h2ntD8jn6kE36hPFJBB4a9YNVRyHqrgDjX9Eh2qQ8tfWYN9SCLYQAybQJMjcGy2HDC",
  "key18": "4TvnGxNkZgFeca2MewrLdvGMPvm3TWF23oFAMkZsq3YZVEHiArDoVEg6eugP85XfPZ57t8yQaAWDykAna3UFh6e8",
  "key19": "4iuFaGFSsfWVKZoUJHsmY4hLtEV1YPLmjH9CGPS3E1CQMrcHmo1DMVZ7qW8HWakWJ8DgEy4TsWZcnFm47V5XoYPe",
  "key20": "5iQ5cHaGq1pnekybqNftGKDZHhEAHMd93tQfycE3w5UuXNbqReBfdhDxKZRwBe37cV5DyCYicb1YuMc1xreWsGui",
  "key21": "55HY77XNGCtrw6qvTX573ccBXCuXcXtiuo3FnYPtudbW5683fuWSaWcjUEGEFHEokA5NVhVZ1JkFMVPLnoeTa1tY",
  "key22": "5FmDDSi5zcn17A4YaAxHQatAqiHLmps1uMeDBs41Ut6dBcWJvBH3kxupo9vPkTNx4NMyGp4LHVi8QQmZKeZArtac",
  "key23": "4dh84GATmhZy7dqom7838AbbWVAmsDnD5s4BbYRxpp7UzwFCPresA7U4gCnZNH9nRBJdTBHMSgLwpj3MLHbo8bQu",
  "key24": "4GDzj7UWFzCm7yksTJxeZg7Ni1UtLaLVXzJAHhuVoZAyZ8J3S51o1paPpeTDD6tbgmJ6qoDfS9FrcnFvYSDs1msK",
  "key25": "64ScuR6b9spTVtui8bhJKJQC8kWEpdiU5X7idUqFNafZHnApwcCbnPZUg2tfdCSPhjGUbUGnNUVMV88CsbuatNr3",
  "key26": "4u6Jj2VgmHYWw62ygnGmaWXm2trNaXkUhZK7ckK6qUGi53PQ86JSf1X4WeyvWDxp2imn3Unza8kkJAAVqt13AzhM",
  "key27": "5coQ1URfpUncq5NCAGTwHJGRJPP2mx3nvux9uV5SuN2FydWPrc97FcfYYqmhGHcebTEVkTwnk8BTZ3PT44bmYe9R",
  "key28": "2Ti9NtuTvuxFwVfe5NVaFJTmt5DTtLwW3HAYm3taJ4PWhjdkgRxMoJiCq4szsKxVNyW2jCz8dQr733pAiYSjs4D8",
  "key29": "2ZWfGdKNY63J4ZCBadoMGBc7rt7zSHMwCkRYVjmGMuweRxgrQfTgZJSnJ1BnqKi1nQEPyncuF3mEEc3Ug7wA5tYC",
  "key30": "38XSpooRH1UTadgVy5D3c3XVq1NbEUSWpXY547iEpYJqiMA65TAv6RXEfEoVGTW3qwigPUtLs3nZV8JohRBoztzH",
  "key31": "2zt3F3ve4GRQK4Cra45eLbTmFLwMLVJ1GFyXtaTuEQfApC3zQipccE8KhNRtEtVzhZRSS7TmxSGARkHfVieVVW3F",
  "key32": "3WE62txBL8jvgk49njRAwNMyQneziQg7A395wGCXiqf7h4xv2H19KzRPJdiGj6VCTdL8E9AGqJsvWKJsaevJaQYy",
  "key33": "n2KUD2xYTmpofAmk16xfD6oZTwd8XVCPwt187sCkTRJqK6dz2QCDA6LWFJxfmRkahPHYNLtjFDVJx6WyRbvoMAg",
  "key34": "4mMNitVx783ekjv95AJyfmWJzjK3NBc67r4Wm6iNM2XzatWg3gbdhPup7qPPQuFYjYzjzMtfgBY2Ca6MqXSvyvwB",
  "key35": "3vL1UNhEjcpsuVj2VRBSgBbBhKzGvtSE3QGxCFjUtwsYFbBsrFQyuuJW488a4969f4XaXHRZoUMPyo9EaAbLi1H9",
  "key36": "3EFdXY5Tt8K4SMM6dwqNzLQir8z66XrZTpYgoKsXn8yUMC2CbQuHNBrMjTU63GnBJ8HUndTdFS2RpXbYCwPLMsHj",
  "key37": "3W8NHKBg1reAGbuX2syxQaV17iGvVTKbNcH7hU1mEGsMFj6UVqWAPdo3eiGTmW6a7B1hNKwxgni7yfTebfMcSQEm",
  "key38": "kXaVhFpYVYGbaSSuEp6MCNUmMm3bFsHeZPzjZyYXnRJRL1b1qTJ4zAn4uHcp6koq6dGeSdMYNDGTNDdrzeEQuXp",
  "key39": "65bThPYR9nhkqPE7kDXgs4wSHvBzUkuU7nepm6ZtK5uaTD4dtN9pLrWL7JnygriUTTmtke3U4aJQAXXX7cZs9QhH",
  "key40": "ifbvvCeSNRkLMQsFmfP8eLC4GdPz257AoTyB8fVoY3vzKXzUE9BjT5J67jBhW7t42qFFyyMTGh81F98KcixmyUU",
  "key41": "2u14jLgaYEfG8AQJQKK7jbCPJdf2K6Gn7a574kACaTGVzDbgsh7zVjQXLZYCsHXnoVaz3st6NTTNuEpBGXgJ49KB",
  "key42": "oWTovbtRTvqXLmMgDzgQyCKoVs2KiRQq4Do7Hc9qU9Wfypy47p8Qb2oSd2SrdjNtvw4NYXZFRSePu9yQDaqk9WQ",
  "key43": "3YVHpbDdx1yvGoAV71X977XK21dJ51jB39hqzTjem2aVBMhqDd55UnwyuCV4oVq57eDpQsdcDyY7EXD2c5QBJTWP"
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
