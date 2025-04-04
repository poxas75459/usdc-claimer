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
    "2DTQfDhpRxgTpwmjTRxRiDbhYWvpRJ4LeFeVVtQvY2jHHP53ieSG8SZRuH2ooPvjjWoFY5kzH3LLrAxFqBiwF9Ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43E27ycWcwgSMV5xapPyUrrnECLW24h5dvECCSJfLFGNKSg31EWCdSdGrBzhFYTn7Auyn2PjWhKnc4oTfdGq1tj9",
  "key1": "btcBWDgx3SgwXjZKrUYhB8fegzSSiKxQAo6UDHw1rycD48sQGYBY8b2Fvzj4YTyy5imvUUnRNdDv5ptqWSqoNLW",
  "key2": "3iotRk8rqDFRNJGYyuDbLKybAT1VXqbtnhkBJDrdnaKpZPbn6DGwmTupLahQ3jymy7AHLq9zvjndQQGjumaAYt13",
  "key3": "DRkJh6UhFMErEcts9n5kavdFQtiYCb4eEfWdEK3mNSpBytadNXNGzKd5Jdj6ECPMMgnL6kgUTWBMxwsNi4mGckJ",
  "key4": "5gAivCVnaQZxpSoHYdwAbmWruKu2nfcS8FEyQ3FQ4rTQ9WpkEeGTbULGqGxjwYH6RGekQenDeQNZrqcLrMM7gkmM",
  "key5": "3htAwFJz6gpAHDWnSyzXyRWrKt2e4QuamLJ7dXdYcqgxkLRSwTYre4KFKogNUQys28rYUgdbnJ3TXewLdJmwhA39",
  "key6": "J4f4RGCTJvA3CkMDARUAiQYGYo2EzSr1zs3MM7Cd9jZmkqcmejFMC3tbeQAJdyLZ8fkiVVxTob3DMpqGtrANUKL",
  "key7": "4kd9LiLMqZkqLT61ecgk2ke8tMcrs9kP4KUKP6B5rcQ1X6sSbUXKeSxnyo2BaZ3HRA2ESQXs8rPsmP5jNxw3Z1MJ",
  "key8": "3TDp8zM8FscagmsCbdWxTixc3jMXUUMoRjg7vqBrwZ2sbKMR7xgbfc5shzaiPJTdwVi9VJryeeGUGnAYUVgksaY8",
  "key9": "7H5HwtnTuyDwqGUAGjfBmrn4JrLJtaFkGFcjDMQtBtWkQsWp4a1h3VeMwdsEqhDLGEHVDTPFgwP5AvUdS7Ufwab",
  "key10": "4tNkEAGHT9G6uVqYHbcPnWnCgdocd7SvVJgUD3YDg9cWW5xSBmQ9LLSESYy8R7J48po6aEfLUZMajzUmYvdoNadV",
  "key11": "5Ey1NjRTw6rMQ3JioHgF6g2fDZ27jHYauo7LViupDy7E5ctZtQsTFQcT7czJAC2Rzw8aACWt7f7BspEF6zbFAL3M",
  "key12": "YEuYQRgxTGGTSXgpG6YH3XmMbRSJhhHS6hwoPqr4DWTmNwB89kJiQ1qfnvv8CFWSb5kT7BqBbHdFs6FuQ7trS1C",
  "key13": "3CwT3gpiUSaAWTkV8JXuBprQW7jXZivMbou4FsUMRznmbpzNrGtK4kboCnc3BbB2TtYYQsBsjjEAWpgDCnasDuL3",
  "key14": "3EU2TSfRXfSqmpBoAs8EcQEbrSa1xepfQUi1N2bSTtmjQVNnWfyMj8rHpCXgbmk9An3Hv7sf6XjxZDyHPoottg9d",
  "key15": "voLW1hqBTo6ZHGX5jo4qCGkFUTiEHPnPhvuopc9ZYWKKA3oeivTNcTQF14LAtH7q48DwiRi4NT95GCui3ebpaaa",
  "key16": "5K6ZQ1Gaf2bHjii2e6XNGeTBw5UncspyizBQdYLPvDAao974GwfTBv2ikD9fy1pvvEAei41DHMbjH2tSHaSdNxmL",
  "key17": "4yCKFtosMYRtLGQEtKPx6RY9mtkfxMhMrqmx8znvAwAb7oY2AZ4w6w8tnFNUvwsfB15kzjZMDpCtiuMcm9ZyH1WZ",
  "key18": "3Xvi4VQ99YgrQAcsgHsdtsHHk9tZ2vxisoLkzutTXSyBSU7Zf7WZR8aJNey2eMjVoZzcp7GpFbQFB56AtMPSrUjq",
  "key19": "46ssc9rEtdvMyLRoNeokRPKwaaHoYECEi6DSzotU5MkqKRYb2RKQKDfhaUigGYN1rKV9Ff9deaT9QMTBZQ8nAnVp",
  "key20": "3mBQZmVC2F6H6wtzcJ7gyEHzKFFZ4XheAJV7MD5GCoc5bkviMsSCPRfvRnkCqb3Uj9uC4LNHog972566TCnh4A89",
  "key21": "4snfsSkcBztM62YNSMYJDX6zyy6Mgaq1bCMiadcCfwpV6q2sDF3pHWh81iwrtvdft9CP6FkjXjQH867Aza3ACiQx",
  "key22": "3atR9qs5FSyBXe5Jh3FWk9HFDBSCGq1tJZpmLjonRyE8kvJ8MZnMiydiFAgE1DX9ZZjNaWcYWot5CU8w1WKCi9go",
  "key23": "91gJiPS3dsm9RNvmMaQ8rmrjcZbPSurJeMpYU3F1KBvz1ZUZP1CnrZbyfAyZQbikfJ76666ZwKmDFj8NJWPwKrp",
  "key24": "2UFw43tAC281p6sZaSxW5h7Do1jJNvARtqQnBoc8figfQ8PVLGydMRSNeyZKhvXGpiqbyLLRqEBghhc52DFND5Wg",
  "key25": "4cw1Yqc65GuVNQAHV2CV5PVQu2jQHsiG78HRm4cefbW7EWAucE3RentyoS4FT4FWQBC7zkcEKmar2J8kTXaTe27i",
  "key26": "3V8bfqDXsfFEM8Smti1LTxa9qrtxeDDvZ3dZrWt26swpxTDoFVJndZjQvb9CJVqwcFbarqbsRypPrCeyGntTDbM7",
  "key27": "4W4Y6hgcudvJGVnC6JB6KChFx7kWTqBjHZu9xcvZB3uY3L7pD33erNHQLnzqHLqRfdae8TXc34ADXKT5xsVKTX2y",
  "key28": "4mDepqDiDLAx8kDuBiF4iyAG4GMrTZohPagtuvARrJngJXsFMd9DzV4kHrUcf25p93vv6xWqCvF6yNZRtSJsFbcU",
  "key29": "2A9EERTLR9EH6Mv7qUC5qEmiDBMk9UhVVYvvQbEyC4Hg1hAvqzEzkC3KA61Xuoxcq76a8EPnns9MbbHuepoKdm2t",
  "key30": "3hjJGggYA5t5wcAdKZrQ5M9iWJWSwxWhb3mmSJVGymn1Ev9QMcsmfprtAEfV9tuYmvMnuvXoAodQoqoMF6cDH2bJ",
  "key31": "2jxzwH3WCDKpvJQaUkEyFihMRJp3cyF1uJ3LKFc2e5bqxNEfr7A5CSViV9AWrxiEHZbFdCwyW59mN1yXbhyPaUK",
  "key32": "4qfXgwGgow8bRCqaMTU4qpXLdW1GeojJwTfQdEih8J4PneKqoHZjC8FWtdcJ9d7mFX5nwaaHe2j1E6igb7EBDp8g",
  "key33": "3FgsUYwyMHuUTAgfrhMGz1HBjvooqLaWSnfej5EgQBjznaQw5Li3utBYAUXKAL12a5dgK877XCvYKumgHyrXMJLi",
  "key34": "4gvxtGUzz7xu29hoznSRYDwkxUe9asGSYD1ouxkvJrAeM9usNbrCBwHTcB2kTaAwZSNRkdryBzUW6KZiMWQjgGRp",
  "key35": "2FSygdS4jKQBvjBAFBhvYMedHQFMHomYvH7RR664REwYP1jVPDiB8ezDJkkFXpm8VVNyWozXrrM6ba7425ceTdjX",
  "key36": "237fkFuYMDh8x4fhcbc6hrsGKTn2qD8A7LqwxrRGXJnS3tpgTw9BoZbA4wNc3xpoBTQqSLxnEBUtMKXLMr5py4Bu",
  "key37": "4mRephMbU8o3bx9hKJb2KfSXtnShfZUFC1XuTBJxTCuZwEsHhkjs5wnVmcPzgmHFnZrJvtgAkrKPGQvgQURdAoJT",
  "key38": "49gSkNQrgNDBGC6QeQkiPmikTviLs9oxHG1SeQudPC2LgfKSnu6YqUzd4KF9Azq7gSQTq99p5KCqbjvon9nq6ZJA",
  "key39": "PZzujwMo1FcMczv1VKmcN7UHQZsaQNcxDs6yfyekKE4juTQrVQG9QwWE72bpmBEFg85szbDcrEJGGUeZ172aDny",
  "key40": "2w6RadRNtTSuDZLrYM5cdMvi7XVRdYHAb6tGoRLdGMMWLoCdE6JDq6JYNdASgVySgVcSsFy1XZ6qsG9eaJgCvj9T"
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
