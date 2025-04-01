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
    "66HXUr2YDx87XtVgyrLKaEa99SqTYrqdCWiSpDy4yzrWyKVUb8p1i5oFkdYt1zEXVpszu7wPXqGNFtG1EAu8hzKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FtESTpzaF14T2istd7R33D8Z1w88Zj2J6JSMimN5Pe9ZQgUTG8BYihPMUo3bfY5tXTzz5LPkRCb7yTNQZ6JNc6Q",
  "key1": "42vhvaW4xBVdwZbwP9kAoAWRc13oZLgS21kU6CsUUTzGvMpfzXWfMRtmAug2GvZYfK7nZKsRfJDCdNMQmsmxBbEG",
  "key2": "2kv9aoR4W28YMtzycAywqBpCyL8iybihBw9iE6oZ1DB7ChCbdnotwguuBX6rdypw7PtV4Gj8Yp23xte9qqpF38sd",
  "key3": "5RSZwNhcmHN556tGTxb7VfCNB6KMi6vdBbEUbwEYX71VfVysnQq8ZgVjm8hpexS9kpb2cfxxaHnBfYXmDS4ZVpbr",
  "key4": "2AZhnYH6cUBU5YwketMH75UeXtwHAKmWFp9vWwnPCUg38wdYKbRMswnE3Nm1V29Z49yQ9TkbV1256wVLXi1ApMqF",
  "key5": "5QT4bFCQpZDDDrm7jhaWtAYKKhatpmGYMPWTusZZuS1jeA7NxTEBD9A29S4FHiPVHpeL5AWJqFbyQFUmAhutNLJM",
  "key6": "2GivHnzkrw2CMpQ5gvX7aAC6mFwH7epQiV5HtuchveD5mwi624Dcbuo8J4MXissC4GK4d4tkyQro7La9NoDDNRZk",
  "key7": "3MupsVGAUM9xUuuHKYAYbS38a7m6eH6Wy7znZfyJRXutB2RgdFNGQmToFPArecqSqvNZgdzLTcdJrGtufXABJQZ8",
  "key8": "H8vbvK6hX3Q1T6rwFEo4Vo41iKNFFfWkm7yCaPzWS4AQTAPoXMiGyG98QmgppVUW7vccRkj9KwjGbHHX8z93QrX",
  "key9": "3R7LiEhCJXiYx9ANejr128c7eTLvRWNi7YKmBeVYV2PboVoMfnqgR6JrCeuQoSWH7K7vmBumarvAK9iBaDVJCGRd",
  "key10": "3nD7ieXZdXHJPwBnNuqRnxz6DvHjRk9Rj71ZoXoGbswEzEFvenydtw4Gi8qCnnfin8gZETNisu2G4GtJVmPcRp9E",
  "key11": "2ynjqRSs7wqPkxFWVYVLDG1Au8zEvRgF9HaP6LBzm71k92vvBpkpy4f7YADBUWDtq5YDyyPZpYvmtkpSr7qK2BQ8",
  "key12": "3fFFfDAmnykek3FvN35C5G5JXr15sxFqqKV9qxfHZzwvvneyYG4RUEwKe7myJpJLgU7m9qkwHEcr3SVfGcNom97G",
  "key13": "3SeyTsgxmciEcht5vVLFDjECgKTY9Z85j1qQsmjcH67Scc8qF2BbP1asQVEmg7QKhtGgcFZ9Wbxf68A6pnBjgUWt",
  "key14": "5LVHPnBQ28mJ2BpxKjx67E9uF75WxV6DbjzgVVUA2uXQFmMDty6tYnwSMyLA1pfR67wndU2rcmkkVB3YoqqGSSj4",
  "key15": "2GtyhunmGsyfpgEC78aKxgt3X5dsYe8E1cyG8j6JpzhQ7RhyebwnuBpdCuo9MgefQLjHPjC3Gh8SshBUJpSs6jHr",
  "key16": "64LGdk7S1y84TfxjAQY231BquKDVWxRXj52KuFz3kLXt5sVwbhPfkTUwuqfwXrXaGKSpXuntaoGDJv5sSUV3S8xG",
  "key17": "5YCrAshbbVRumT1EbafVyYvH6szgYoQ7jvTA7QW5xGBnygEgNBn4zfhdC8VoLeA2tjQiQTviku8ZY72aYwNvUsGd",
  "key18": "3wK3Tq6SGtg1oP41phrjCxG2XcZXSgGRLL5hVk3ssU5XfJSyp1viTieXApY22GVDBDSWWnY4841nZwWTXV5tZs6p",
  "key19": "5oDzEFDC2GjS3EjKh5VdKWsAbYbwHNvFgWALF193Mye7N1UeqqTrpWAYRGoJk4R9MaHqHSoG1LMhiPwcgkJLrag7",
  "key20": "26JqQL9t3y6pHnXh4yX3Yc4EsQTnQGCpZH5pkdkQnTiohhCH5sdNnw92ACzgS7ZEuD2zKnELMBjCKH5TDAYf89XW",
  "key21": "3CiUAYm16q4xtT5DhLmkP4r5jUZvVph7NLhYTwkZKBXJFeCunbYZR5VcWSdQkDJvss5qLeGe4Yty7pJWVBzkxvHp",
  "key22": "5kWZcJJsW4BDT663Cxbe2sf3QLGpMNkwc4PAvH25D4C8pyommpEkWWZLqvFXxbrWHLJat2eimMj634UnHtc1yVop",
  "key23": "4FdQQ3itKGJDoiLxtr9DSnznVGyMRhbej7otKFfPU2QW2Baan4AcxVxGXAzbS752p9d1wgT9674UrdZV48SVLGte",
  "key24": "5ii2pyNJDFe7VDX9xjbtQvv6Hvs4p42uv12ovK4xhwmHPQAj5SFQLLQAVknmRU9JuM6dWi6hAfx4MxApa7UWPvQT",
  "key25": "4xsePUDGWHMTtGPnJhha2YJiH1bzzQ9LEf4psn27MUBEdNkzAL1LYmJj8Hg9XW5nj9Rfw7C9Z2nq8Dd6Fj4zopfc",
  "key26": "jC1Y82H5QmFsxz6RViM6gKB262S2qRiGdYQLbfmbKg5qrom7Sk6qBteAGWyps2V7S1zCjp6QczDSyNbmmk3DQgw",
  "key27": "62iKKpErmkyA3c5Wxx2K2N15X1eM4nB4BTfigCiaG4ZU21K6hBtgBueTGgh8V5NajvemsaA2LbWvLe4TMW5YfBMt",
  "key28": "jcgsWKpxNYfAMuyKCJuv6aqEPTrB4oragSuDH2mV5mNaz6DaGPn2RfooCMzd4LVQ8KgKnqyjuxs7u52k2iCWi3c",
  "key29": "5rdNxjQUfHAnVYmMWQojpZDAaTCy7JNiEjmsA9a3asEY1Ag8t7j4Q5kensNQ7znChG5ztxmReQkGRPcLRVFeyBC8",
  "key30": "3ofe7WefCr4H9TRDegnwBAejjfaZ5zFBQvcJ38fuHVQFtbifEPYyVM8QKgPb48hDFjJxwKMVKZYQQg59heAiHRqs",
  "key31": "4i6hJFAJUES3gzBMFJDwt2aFySwJ4aZtNcDHveBbxChL26jzvJou2oKPCVGbgF37wqCERep1Z8rZqAjERe89zbhk",
  "key32": "45JHf8Y5MfPEyZQvE85TJ8G475jCGdQJHMuVj18wt1dzo1biDHHUzUwR7GV6bcytyMdQasgL31xj8EKfuQKxm2wY",
  "key33": "8WZfJnRqzdpNF31N2jYYfSWpe2MqjS6yHJEN5JgmfVySQeyYunSChhVkSexSkhM7zKmB24su7mnusTVoaU64kjG",
  "key34": "kfngRJY9z8ssT4uUEoSt1rnvjNPbWCvAJXSjfdrGcv2nNrnP4w5UwXsMy57VqnriYbmgndSsBZyBL1SYKtGYaKL",
  "key35": "2kw4Pktsekwg6d8HxGknXtvNjLz3ftAQyfUcQdk1trZxN23ct7BKLJTFa6Q7K54PUjLz89t51G9x8tvQiG8Fsow4",
  "key36": "5WswrK6Usmi8iTQymeAaZP23JscQthwxaJuAi7BopgTHi6bVUA3s973jW7VfJvgMMaJ732pU6nQyi1W142ixwqzd",
  "key37": "w182ipmoaV6oR9369W8HgpdzqTQdDaGjVspmi18kYDHsT1MXW1u9Y8HLEcMB7xFFwb1WKJMhMgi1GTP2FudyR8U"
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
