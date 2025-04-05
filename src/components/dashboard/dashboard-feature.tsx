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
    "3t29LcAQrCdKv74pAVGUnb1AZ89ejqcUtRbJahuGsd2Vyw6mwq8XZ5gsU6WVR815tN2BBs8K2NCTYPnDiH6mXsbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49hM86WeaZujggFo8Jqmo7Prrvm1d1UADnRBJsDKrU3BLe5iiHPcoK38wafr537N9o4GMQMwh8fRBaZywEzV18Bq",
  "key1": "2q74Q34YNhMB31vXcHeixL1MvosXR8P6MANbbAkKD7ZEkvdjHRGyrNYD7YjPesJSctfG3CaAJHp572LoMSCzr931",
  "key2": "3189nRrSC3cJdXggtd2qYL1uQVjLyuxeZeVCcYwkDDvA4Bx1F9zgQVPjPCev1raY2ybsK6wcxpn5LhP1Dz4NjsAz",
  "key3": "6m6jrZP9oUm7bYLX8sCGcxYLDTn5xYvCwUUzMyAH7DeSrC8tFB7DEABcsg72PfpDjBND5hT7saqQjnAZJtbqTcE",
  "key4": "2y2DS4H4rsSwyBSoSDVJjscCqqx6SZ114Hg7gsLDwHeyQwawvKPYtFUxb6prrPzy9krZw8PMS1bgSo45PoHGFSoG",
  "key5": "rGfDNqZdqqJ1TiGLDeCB6fMKGYCP44sb2PXRfzMxFDTndvqCfbRW6jQVpS9THhdzu8BrgSdFNLQfs9R5jwrZEMR",
  "key6": "2AU99Vnw1hNmYoYaim8zFSMyMVKJGnt7RK9U9PmJcnpeGAts2yp3X4BqFfr7PDrP4NBQ9P2D2hvHeB6zy4nAwk3S",
  "key7": "2jMsrFW4wLgT954Y2Y64rwonzZPF6tcq8HubD89NEREF1E6nD6LLX8Hhr8QCeHK1U369BSDASZm2NLYosibbnvbQ",
  "key8": "5S5Qm2d6HWQFfke6AiBWjfo4ADig5x8Uk8ZWTgjFipn9PBStpxy5KEkScXKXgzMj8pEnB3peBE4tevDCs5zdpucE",
  "key9": "4t5QWsQ9jg2QXv9MsSTd2W1qV4Dur4qo6R7tMtEL8H1uEGJkoowKqXMeD3pKoqWB8YJKVhPcS5BvrduFbkUDuBVQ",
  "key10": "3xoxd1b7GD8E1mYuHAPGH7Fse88tukrKccAjRwnDBqjfGrWFRUqyaUNZHc91UVVF7UzXMAgVUTMpUBRWtcrCHZYh",
  "key11": "45Z55XDcN4vTEAQ62G5zq96tdUSQGr2EhnnkUxMvrvvGeswFy6GhNy6f84NF3W18AwpsYj2Yu6Uz3PgjoB7hmPVU",
  "key12": "5q6vNDxzshQdGGT1V1AzoFAhbAMLuHzkg2a6REYRazpek4rLMxWcAL4yUmP4orWeuCfxrKCvkcoKG3BkziiiTAB2",
  "key13": "3VnHtvP2ApioF8CVEsETWdNdxUrQaHLuWzWT7rtmGDUaKBtpY2nDirbAYtd3rb3WYQ7GxviiMqGsDkAJ5uytPW8N",
  "key14": "2dpiNkTP33aTLeAR8ymCWF4VUfoKVWw2jvKaqvfZ3ajznJN1q6Lk37435o6p5U9CZSVQcZXgNUMp7oVKx7zZcEQi",
  "key15": "26YZqg2LxWBsKMG3p6NYqCFwKgEkwbmZztEHCTUqeuiGWVzTuRwdJRofdDAhCuZJr1DjXeGzjco4e4Qedr7jgdUb",
  "key16": "mHKcbxd9C8rzFLeCttUkxPbT97FLv3P6s3uyRcMx3EJfFTrLdC4HBwdzKgyUCYXYqyRpSonYpoU8Gxnr5JwrH68",
  "key17": "3iKVpsctcDS9BNjP5nA5RgFeyFST6Tz4ThEM2jDKXtz88b7YNrSwYuPhCKUvwQcLgCKajvAiZnQwwLL5UDXSdz32",
  "key18": "Fs4JQuBG4qUCaPWznzduRQGzcTAn6jszY7EyonGuZA2T5BG9bwC2VcHiEqg1rUNAxWWHVTC1msSS582D5rkh7Hh",
  "key19": "4zqZbS4A1twBsJ6hrisRcKvpsiNHvHk3ZmUnrSnjovUMDgbyQbZHoRZYKCTgzbRdbABPqvEvKe6mxXZtDWC9bcxc",
  "key20": "5Q8SYYPewx5ttdcTuSyos4dUxRP3v8kjU1hwUZgWPN46Xr6rhHaNUDq64PRVBrRdv8mkNYN11PyKWuDEXhNnieJU",
  "key21": "4sifWrEmwsmzXodWNGJyBsiKCZieQ8WH9biJQgYCD2wx3wTsiLzPzfLWQsea9r8fDeRqB8bCCvZDpWgaSQgRnBKg",
  "key22": "3nqwuAjWxmGbVT9tnQMA6iBiVarUFjkJA7tUJQCUNhCZHtbERUJKjpKjMVDM78ARGtjdavq2XoQMn2f94kFnqf3t",
  "key23": "3nfxqPtQMdtJ3RYtXUNGK6oaatjjEwsr6piT96RkSyDjaDozURLi8vz8uVTNdooKWdcpnc4JiZXEMmc2c3JzAVi6",
  "key24": "4FqpRrc37ArxAv53XyyWuKAuemCQfEyrh8EnVXLBJMxm8JRUyASBfScErBpBzYVF8TqqeXqQgk91UWTeNejUNhL4",
  "key25": "DzhAVuRbLsWoxUfkThubHJga5eQpX3JkrgfdbDCDPfttFXN513wd9HHjBAb3iCkgCUSPmLiYg6nx1DJPMHxBAjy",
  "key26": "5coYBZqY51Wtt6t9HG5Whi4wf1QzEmv5HuQxikV2qjRL7rdy8d8LGqa7DtgFACs913Vc7oVULjk8RGUa23nFg99E"
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
