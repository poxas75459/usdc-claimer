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
    "3FyPneCzj113aMYN5ffvt4QCHF6YV8ivbdkVAMQMmJHRxNJ84FPUJvaetCSGWDS1ntXsNw9ZbiXurdWRvMQb2X82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cdyPjPE4Gm8Kv1ngqvTQY97SG1D3RQqZYS2muBkXG4SQe8zkU3dT2GgRnQo6tu1nDJqQEFepYFyMuyxgQNXo3XQ",
  "key1": "2yBSk55MX6uNLTqUzmJJ4djm7Bb8gYKxAiWvManA3Bzcgo6dA1ACWPnhVpKwnuVN4BPBuPL6tT3qA71wyPT68kyD",
  "key2": "3ikKUijyMSzyvS1h64YYsxZ8wdKebWc6uLaRrdhSHerNTR3TPFsUveUk2wmefsFbXXyMoaxd3oNVCLs8qcDMFf2w",
  "key3": "2vLDstFPmJZ8KRsrdD2rigTCBX9KLxzoMsTvLdyFgVpDqXQPVfZUR7HcdX7EUnrcvkqKF66Kb8QJARSMxBchXGgY",
  "key4": "J9Z3GDxZ4PFXFj4tsGzBCGUAHpujBb4ystchv6FiU12J9nYeRndGYGu7QUPpiG6hGSn6LBEWCESwTNJjV6bVCqy",
  "key5": "2p2dmrxoSuUTZnWG8P6i7JfhQJ5hS6wCXHeu3Jx7aef5Z8XHY2S6romCXk6cKK5JXSQ27m5vU5D9YJ5Vg6saizj7",
  "key6": "5fZCgEP7FxdTvJF2EQtbHB836EXgsU6VJYLnpzVEABkD8rubEkXxboRjNZiGZS6s6EUPRtyfBZ3KS6yCxMP4GNNC",
  "key7": "yshxRuMhKRkL3UyMesCnU5fQ2Zso2GMVtxstcPtqhxVermUTZTcEyDrEsasprqDNrAfsbp8imanpFGJVy7DvttB",
  "key8": "4mvGqGEhBMvVbJRiRXtvfeLSeAFF1bQh23rVDAD77iCnZNpLumRGoWutv3WVmP1S4qBAnT71kUTc74tM23ed3nj7",
  "key9": "4CBBmLL4FcnTsiopWJxZEZnEuTZSX2edFrER9Tv22TD1JXxoqxxt2DaawHQdBh855jZEwgS5oNcBHKtBakNCasy6",
  "key10": "4UysPiKQmntusrW55Ptv3DTz6vPYDLTX214UueFyEqHnz96iiVhXAqhzduosR1Qzi6dnftqemh7HpP6LoLAbGSX9",
  "key11": "1SnCenVgNqc2bg5A7PWskeroNjm3K64UcgZXMh1EnUoNMiiwaPuCoenVsvtQQpdyt6JrRh6MoKdHcwqjWiGpBgC",
  "key12": "R7nhgkYFvwqe1z7V5fTB6ZAGG5xSN8fbTNUJH8qq6Uo9YWbjEfJdjdUQgv3uDWk542GREcvcSefWP7rQsXEUfzr",
  "key13": "2AJEcoYxXUo3h7CURFwHQHfANF5VwNLhGZkAz4QucKvBFQSnjBRNeV7ag9EzBzF6xLVM5oNVEqQTppCyGsLMDT6R",
  "key14": "4d7MciyKtRgFmUojgk1SrPZfskpK4oww9ZXhf1J1LyNQ7mkVPoMWUEdBLBAUbmgEjhEYpsRqd1hHu2PZWrV3TN63",
  "key15": "5aiRuCeVctwNRuCgqyvkBKhyYRKhB4sr7sQo1GWyqMS38cMaQJwScPsdDbemJQQTmAvo8ZheTyt9VsirLvKFtFxf",
  "key16": "3xjKyPojkErFXnQ7PoxiSJxrP8C8Vs1oXMeS5z41BvDSh4ia2BsLjy5zkmZngkAijdc3pe21NY7SHpPmdbFqvZth",
  "key17": "4mBQSRi2tWu5V2Pt7b7mTppNUnYdHoYtu2Ttw7dVoZ6eXfmegwngjUREn6QC8bbZKLgcmEMcrfaE9Nn84ypVDBgn",
  "key18": "zBqsxLosEPmKsjSzB1QMZdYuVFpfL9xdLcnENRzpD8oCeYCsvHLe4nezgnn34kn6nvHasRgkWHrSQAeApBLVR4Z",
  "key19": "5em9kzJbnivF1LNZU8bwbVvfJV43rqEme8u4masAL9UtBJSUhhJWwH6XmV4PYefu1D7oDTxSv47W9f24n7ChUHp1",
  "key20": "3Mco9JuEBMEKoQ9YqjY8PeHKSSiWxubVbCgwDA6XXWYgKyAJnoyKABcXatQ1pdBWA6Ctw9b6XWL4LDLK7SgW818T",
  "key21": "2tG6Gx7bcaEtqGQS5tSzbHfRbrBoM2LtKnrA53o7bEEs2Ly8YgdW4Yk4hkpEZQqskpSiF3awUsbopvub9CNU2huV",
  "key22": "65G7T4Gj5dA4h48MkZmumcFWdADcUKE7HFiWN6YuNoQDbYbiKd7FSRzTHyZMKd6CQJgbRPBEisivSnMmaZTzVxQV",
  "key23": "DBAWYLUKAZech7tjVNUSc8U9q9f4S8Reb3AZQmCmV6BnPVdaeYGZkpoSCaPyxAgCJEDiEM5rN6yZn3R4zSnzUU5",
  "key24": "4eEWSVApEAXhMVFRbGVS9v1Qw7J6txJShmQSXm99btUTkMBiFDbveFryBusuJZbVKJYV4ye3SMN2VGTHG9Qj7oz8",
  "key25": "29cECK1YNRSYCdBSSMbo2awCp7iDYrFFFBC62Rz2VLw6D4Bs9YD896ShaJ345NcTtKHeyFKbh1jwYxn4xPT9EXZv",
  "key26": "3PjQmKxifRgNKkmGLBdGyhVq9sELjUux4hmcVCU6YfdcXx446SLbyca18TGntBNhjy9nZyYDDXYxq1atqoDsaQD1",
  "key27": "59sgA83kZy2zYbciyrMHXrcHbtQTAzgvPUwTxX3vB8n9ZD8pbgbzouanYPdmu8NJBktrnjuRGBqfjtB6WfeZe3rP",
  "key28": "52bwH4dZGccePsBcAb18BaWWJJvyGydh13cQb5UNjvGThj4A8mvm7JE4BWVKN9bvQ7gzNi28uYCJTKg8geNt5mVH",
  "key29": "4yexuUWmFgH9344CdBCHwnjNUx57Gucg1miLoQBKMV4LoydGtZfbSmPZsRDspci5f5cNVnm9hC2hW9dcBLZaaxsp",
  "key30": "4iVbRk71hMDckPYcKwZoY2pG4havmQocivWyNxDUk9bRyXJLEFQ4R3KLBQWQuyZZ6h3F1B3QKLas9xodKCKhgk1u",
  "key31": "4oQ94onbpBif4N7dB75K6SbDe6mAx6BMHJ4AkWcSRwyPavsuXN11ATUABZSgnM2dAJk3c8E3GNhdGwGiSYc6mHtH",
  "key32": "FhP9WtBm93u6Pf7kmMkteNnUZWdasVF1Ur2ngmG4onpavpEK2syzhpbPuALxCWHBQUvosSxaJhQBQwzmnuhd4dL",
  "key33": "4ghLyYLf7iYcb25qiXeRXg6GspyKFbWzCxPzQi9GzYWAoisKZQ4G42sMmduukTfG7sMq2VKXF8Kb9vw5DTMZfoeW",
  "key34": "2K2urLaKrGkQeqy84aFZ6bcnBJNy7F5wDcj7o5VCFsc1gLWzEQbGEBG2GYmYdWug8BSGaqy9BguKR9hkUTWXGTQT"
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
