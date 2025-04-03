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
    "3tb4UNCFZh7AzDS5HAaSvE9wQEVQZNquhMFA8YhAJEUrtWZNM6khffCZ1ZVqHLhmrjaUc5qhrLpc4FVH3YabFXqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "86b8mmgHS4ppkj4WKSHtaEd9nLavBwJjZcGzS7uysEeQ88jiE5GQaM6ksEe2sHrcJHGae57y5jv4ivReSL5raPu",
  "key1": "26br6vHqgVhNTWkdumBtgH7Ep8fh5gpzLGpEz8xPjDgWY3gYiF7Qf29PpGNMiuiCDLo1xUPtbJAz2YsYP4bPTCuk",
  "key2": "4GfQqMrS682k2sLVTS8sKCf9X3vCTh3UY7kxrVPfSfjL7FSg3epLGe5FxDvKQhGeLrYkkLqKkxtkVmEhQRsrxH5E",
  "key3": "5GCZtZeD5tnubw62U97ogWyWgPveMTrmYKSvcJFJg4fC5HfuxnL1LevmQgHbZygazr3SKzzNWwfTbbyZsZWtQyzc",
  "key4": "4Ef8ALjKft4fb2newB8BX4bHgxKt9dj6snHg7E6Cgah1mxfDPm9z7cn8TdJhtkQf4cstvQihbfvPxKvTBn1es4c",
  "key5": "2K3w6EpLLZhwgCZnxkMWoW5eiv7du93Jfm3Bq5sF4CWG2EKSePcrUFexrF56xxnreRe118TsCyMNXTip3XSkiDXn",
  "key6": "dCTavmNBHCVG5ErzsSfJPB9TjCytWoXQLDHpHJxJxa1sEb8HPgahFAkULUnYbnhurfz1adZewbqhg8yzUVuNrB2",
  "key7": "3Rq9D9NTAzRB9kGnYSiTHEFAeQQJ5WopcvWhAG7TwrfU8SpMMVcebto9gAMGh1Ainzys147zsGRmrLiY7p6JgsjX",
  "key8": "2TTviRh9WZkgewntJjPMq2MJoS1kkXfzbD1kVLBKVQ24kcDjv8VgcmQWjsQKSgKqak7KF1FTNiDBAMw1Efse7soA",
  "key9": "34QCBdFRrGK1S5zDfijqy9zFQBxEHAAtmFctyZx6N5tGZ3hkmvDA436psuXYFt1hAnh9kgAHvPwxWkH6SAroiqk",
  "key10": "4sMG7XviakgzfcFy9pJFGyCTss4ikQjY9ZWGNMJHEYrQ6jYVnSXivxPorxcKcqTDFPszgHbKTHUH2ErEn785tkN6",
  "key11": "5nvHg3d8KzJ7L8VcT44w7NfCCBPMnGJTrQoiSYcfZshz94B3dvVuu1jyscHohKcj8ZLXS7toZAjetU8f94RZDxPh",
  "key12": "3bTdFBtsKxgbKFR2eiCqV1HsKKeoUAXfckQS2QFSCfDHdkhfo8jXDD5hKtvSNePbTZWifjKfvD3dqKUBWzRSEQB6",
  "key13": "Yj86dYuJZa976KMTwHzGFF8yoG5p99jLnFmEoXHoN8SuyC9L8dVdA19GHNk8r7P1zKEiagwEhTiCZuas2DoNLvF",
  "key14": "5ta4K4aVEpYH5znx31iA3atPh3x6Gp5fVDTWr8iQLQHRF6qD19y9nvECQtxPyS8j1vmGxG6E3ny4a4Wf9TmeJoPF",
  "key15": "286FsaWMxJHrEAVdFsZdb4cn3Sfc85yhZ5u8tTk5xL1wPJ3Ey1nFuhaF2GvyFPRiHGPmzWCFPmXWWQGq8ZvEtJxk",
  "key16": "4FRViG6vLm8CSDcWp1z8DNGMaMpQofKH5myAKWXYf7fWU8GFGxkp9ZikQ8jtuWEZzm5oz6HgiHYCszENvRRHj8BN",
  "key17": "2fiNhZDeK4vEXCU4gX9FKu15xBh1aicvpVFkZFAg5RzLCMcjQAPcYYLpE1i5rMKHkJoZkzoeejqveZKV7TpoCnaB",
  "key18": "5ibgvDRtFHpJjfHYCALfk3FUm2YanSPBofhQ4TXM1gJRpfBu4mgpr6U2aguT4hokjGEnpoas1RpfUVYDf16szLk7",
  "key19": "1UErhH1XxLRYBYCseRAdqhGXo5F1nN6XW8Q8FmREgJ2EvoNgw1xzobcLWHWRYwaU2u8JzTU3bPEJsop6bpb1kYH",
  "key20": "M4MjTTxefL5L9ZtvCm3phDbtDhfbEanBfEryYGBX6xFEmZQmyEQq6nNTyxyGRv4j2Q7MiRYxU3D3t9rjNRMJ2Pa",
  "key21": "58hQdMsPKfnqtnn9y4qvyoGktjNXXbmjoooMctGr1N6Wf9vGG1bqTbDvXt2vbXjSFo8SABZh6W9zqwEZVeaNwTi9",
  "key22": "7wVfjbw1cnqyx1Ypzp2F931yc6B1QUXMPM7eQqUVYEkSv5vnzYonzQos9HcM6qL7v2R1V1AsejtpnvWjJkfkwq8",
  "key23": "43CZ8Wt7otez22Jigy5f48tUrayiA8ogBHj9UhaooTenQG1MbRPt9FtKXDWAA2gc2FBqVtbspP4TMTY2MgFXFxGU",
  "key24": "3kSWpVNQmBFxTZbdt7qBF34fagCccnmE553dVfouWeCyUNpTvYEGDTEiWEw78dSGjnYgsc8ECKdMNHB3FbAwAprq",
  "key25": "5Y5ymAFK6KV2z4QbTCBNBEpNcLTSZVi8Y4jpqzPK6LnHuLabYCUQCDEPPYCiTpZzU355cXZKzCddus2svyygjAeE",
  "key26": "2xHVVneyFMA8KkrDMcuXT6ZbMRtMdRhjBM3djsFThwFcB3FrnMacQHcuKr8cHEgLhPLGzyev9XLA7v6EpCtGpimy",
  "key27": "3cdvugoF65aoeTZ6rpUhfYyBAyu63ZFmpt3kEE4F8mPmNZUd1gwFDWaSfokifFrZGFNoad91weNf2ecMP2w5sdK4",
  "key28": "5FbR3hwSMrG8QHBQea2xGZ5nicyjPxUzV5yUZqAZ3SyRdKzchjBNPU2Cuy3Hh3nLQ2eg3xcxpb4xgQmstAPfEDaD",
  "key29": "3aoYJLcXZxAZWNPxnfV1R9WFLgap4jAx8N8h1hJPSDZVJFG3DVjVVPup5exEkq6NJEZwXYQNj1WYFdgcGr381cpP",
  "key30": "51zGrbgi74ttqx5dBXSFHHJSGc8T2tRY79wg8hMYiNRS3TJCbQSQKwMWyNaiwqQTwubHsD69YoBEk3b1pNDgL3CU",
  "key31": "3ZziKtMJGHf3CDoy1diUQGga5K1NoURvjkjGV4ejTcUQJspmqmfFKp4Cowcpg6qAEWFs1xo1rSfh7z9ufvztzfF5",
  "key32": "5S6xp9q9aiH9i5DNKaSH8X7j6LYassp64HDLzdDAsf4Vnr5VHnvMyQScvpf6JTVkzthHAnSkZVS6BN2jUkPbmqX5",
  "key33": "32DXHzD2Dhj6nLe9w4HoRsHk1wtVyvPcypi4CWZbb1s6WH86BPANXtKF7hx7VoVLK6v2kf32JmTX5zwJdVyJHn7",
  "key34": "3j7iJHkv4GdBHEANSGsm4gQBKpmbeRHmWeUp3ExUuM1RjXCPgHRZQq8FwdYWg7VqsbYaGQJtWXMi2U74zs6K9xvv",
  "key35": "3zBzrELgpew54Ft5FzqjjN8P32Q6s27oFBuctCLmNg7gDpSKnbXHgaCwV851fMG6a8mscQhqhc3JJUEthowhtvVV",
  "key36": "4Psrwz3yopaeJeY6eBJgW6LAFrPyferdtSYtESZhESPp7mAKMP2Wr94dwSv3KJSkUYeEtVSTgYRKbwVwztCtUvbt",
  "key37": "5nVzBVVvKwdKt5nRwyKGXiVs9svRG8tFfkz3a7jMczALxpYpVz6p8m1f13VbC7QirbDzwqMKy1my2sr7a7MF7Fkk",
  "key38": "4Z9rwACvKnBYFkUsgdqiWYHf4QSbb7my3xRv5qYP3KZSrd3tVmqNfDxKraR33egBrNYH2A7LPcUGiGYg83wQ9Hyp",
  "key39": "LeMgbaxT6VKGTystQNW4PzHs4AcSpS5mjSg4LWuYUsFf3C857VeCk4StQEdMwVGee3fy1ppit7WkLNYsffaG3a3",
  "key40": "LGYF5z2UCsiui1dKem2RAbBWEUB1gE9BBbg3STtmtazBp8EzL4p4DinQ9jVAcWwRq4GvRwshYydU49d5hfcC8t7",
  "key41": "63XA1ZM2wY7fFRMtL8XEi3sELeKyHUqXViyBnQgjUQ2SndYsQ2zciBVxmMDfn9PqGxPMTA2UchbRthfyNynbBeYV",
  "key42": "3bdX8UahU84U9GWS5sMLJvbYnxZ3nh3N8tMwn1HcYQVJSzJDJnUAfD4pPuqHhxsgn8TRCMyhB8J4ASqWMWURJeDi"
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
