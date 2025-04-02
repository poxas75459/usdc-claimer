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
    "4QX8dGYzzjfzRp7wbrmBqd73Mt792jWsAS4ARPtjsJU8xoJEgQYPShC2rHwfVowj9FDYuiCUt38y3LtpaSJt6A1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YUP6q1yrdjjC3qgGgxNFKtaxFq34cwPM2Cj3qqZKV8n4dQcULqYqjeh8tcRj9pR1FXgAWerYQtVcSGeUuGWwaoZ",
  "key1": "2Nzhodsp837aTfDeUkFynoR8BQYA9L53usSr88AxRY57sitfVpDBw8mdMjArhiNcN8QyuapN9iUJZVXpLTXUpz7a",
  "key2": "4ffvsRJwR6nUhPAP8su7fvv2FPfLmZgAYHpfx8JmVAbgUC5Ftu83CQGUQ3z4BSpVD9avnLhj3wz1JAmN9k4QPGeS",
  "key3": "4xgPvcc6JVbdcTqDHCiwvqeXqNRysRqdm8Hrt14KWTP2v1RfLYzNsTBf9AkzHSd4dQaAtfpr68mvWPpnmNX1oUJ9",
  "key4": "3uTiMWit98SRgrsAE1sszojzpfA8MQzAd2cAnQVEXqWuAMPKjJCa8z7WWBL6T4b3Z9PBsMFs6LXti8zWypiRXmLn",
  "key5": "3r8219GwqT9ojtvS955K7m1fJePERQGTTYL9bTg5FYcCQREhj1qqqBDST1jj61kNcjnXBi1djJCBbk3Qv84TtBDn",
  "key6": "2WrqMJzFRetbidH9JNtff1Bd7F5dLVcXCJWRLEzNmNhGk2SzGmBrPSJwXrYWCzJBY75hH2FvCD43EmggYpxdAQtT",
  "key7": "2LoStwusyJbYYu5pnhXNWzfjUJUSVoed4eCrTwcfJEEEsJwUyR1kdEDpeqFcxLC8E4in9PukzaQgXuaL99rXbsCY",
  "key8": "3F4o6t2fSnjAA3WZSK1u6Xpp1YPxaWhR6Ls6W5oCcBBKCZt8vEgitneeqfSZe5zSXuLoQq5H6MGSpUTPjWwqcWy2",
  "key9": "4MMkdJxpk8QDZocRV54tWbu7doxtnuRepnsAaJCmWdThPXqTidyeyXH6HwZChvvs3wrcyMDcDPimBgdMoKoBpW1n",
  "key10": "2aWt9sZek3MnVsGaSuDy2CHBgzTuWQqDsfVdspAXg24MdfyHDw2hctExkrGEwoWbmrdfvL2aR8cf4UtMaAQTtvj7",
  "key11": "4tXE7KHViGBLaTf5f3zjfjKHwfaXW1iywM7bCxjTgNniyL72kCbdiDNmXrpLtpMJW8TRCZkKuBVmVdBdZ5BCWvoe",
  "key12": "mxDjvwg4JYwNjjth8rDATqWoZEr96q7KPKsa9626naHt9wYeqJdtN1xpxxXKsm2tLnr9zFJDGGSs4x2LYJruBpc",
  "key13": "p3bc224qF2TsqHdw8raMTjmuCZj1K7hNcSNYHBMdviQa6XUJZWMxA9mQUdNKy2vQXC4uK68dZQYDvTrDRXyJuhs",
  "key14": "37AdoUsLP7WRQ2DrdCJv9EmoXYzopFkKgnMJcfqvbrqqMKKWyjRaRbgvksPW7eajEcDP2DBadAExKBVadM92xScu",
  "key15": "5NhimmSA3545m2yt4q2MVTUtdjkRA5mZwF45dZKuEjRhPxzu7NjEvVwg2GqzkxV8uTuPtdrP5CmUaUd5frVvcwmK",
  "key16": "z36mUzGT1daCvVeH5kYiv784dMJHZuMdyygqMBsQLVhkYXzoaCaCDSab12D7BsP6ZNmDXD8gdaSRTwtXSmox63c",
  "key17": "2SteyJFh2hze3GCtzPe1V8c3VjtTP69eiQobjUhZB4CahWwwWPQYj2UNv6Zr8CwszLjQW4c6W3yCFphpsEhQ2nHc",
  "key18": "5L5jb4BAN2iqjKPGGYRtvofShTcZprkjHgVEeXaVEDnDjiWhBpY2Y8YD3UJeWFHU15dUe3qahGv6srvjKusBYmSW",
  "key19": "22r2vdeyUqkZDFdqDFd6inG5Zn4Po19ZvM6cHwXyvbVdrmZsAnQ4cxAEm2BARSdS1S9mdR5MZyNhU14nUePL4emL",
  "key20": "5rA13vLNi97uap1Ac4YckBahoEGGUtFC1dwwVfuffqQCBPPms6ziWZoWyibHdydpZt4UYFed9JEF2VQn7cFKCcdm",
  "key21": "Jj4pmjSGS4pDyAFubTL4j9mZzH899y5PKtF3jzEo2cTMxnZH4kH7G6JGRpDsbAUctR9bdGURdragqiJB38Pqj1Y",
  "key22": "2umixBbvAkpaeea9zUXs848gY8gwHyeri2u9WCbbGdtR82dyc9ccUB5kQoVA1NYUdtVX9egot2u1Th4HtqCwDkZm",
  "key23": "YP13WyXpx9dNqJ1acK5s3E7fWPpDKeNHScMyuoJ4wdy6gPbHCYaS3ituTqCpFnPYJGn6iuXeaxDYNq6qyUKPiJT",
  "key24": "5ACWJYyDd2r71WjzxxHA1BVqrkaEUXymsAUSyraZLQyJr6ATUsFnNV3GEdz6Dxpb4NnN5hyC1Fy974XwiBB5vN4t",
  "key25": "5pZo5G8P4STVHBE4p1ypY3jp5Jfi3PyPqwPeRWS8ZTib6VGUoTbKtsmvAKht4EEMLqYUQQJVUwEAMhr57fb2tRMV",
  "key26": "3QHHcXfiik86S3p348X5Zj9DSR6GT2wm97325Ws8Ep7mH2oJFD5kvddSJT8k2es187Czg7nscQnhVczxf2SVdezR",
  "key27": "3NLW4aPaZmrEXdSQ1ufa6Gy7trvdKuBbL8DRtCr5y7HQyCvvWUVjH2h6D2CwcQeXKv8a8Btd6QewdAdozB3aTjjM",
  "key28": "4VC2RNRwqhvEPqSjF1GmDpoZqMUWKacwD9PTiE1iukduD8VZEHAsmupPe2mPmaa865X2fYuAitxbrXTFVRxcTKKV",
  "key29": "2UPPE92aRDfpM1G2u4YQoT5DsqSXYC91SxVgusrmtuD1FWG6xgJ1jZDHcxRw5AZemAvcvEMn4Y1RioE2f8ekbXCi",
  "key30": "3JTbVc73axNWUaS6T2A5fmnBzVKpd74m2gDu9zuMaWibe5LAxZu9qrkodP6srFjSuRV6iDuUb1QS7B3w8Ux9K9nH",
  "key31": "3e4kM3MfkcePhCTQ7JGPnwCKTADVkzmvyx5tnh6cwSK6wkR9yLs6CM8fgYJSWULQFBBspdcwzXfbWttQRQo9ayty",
  "key32": "vFXRDsAV1yHmcMcmgnDnC6WQUUHx8qHssKDKYB6Vt5nMjPX9H9EFy7WjxjneiuUST7mCgPNwpjW2uxTXb6mXxAf",
  "key33": "8NgfzDAa8BW9oJ1Mo86EKwa2P7BV9CKepuhgVYMky7U1MCU66C85e5btohy1HiE59xhwTE2LWBJg3KQa1dThE7X"
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
