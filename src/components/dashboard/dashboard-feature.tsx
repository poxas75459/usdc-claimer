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
    "4tTnJggMSyCiXXywF8qmrobtPahfZ7zu69DjvizbccPfjesWrCoPZmqB6QxN8tXv3NUGDA2wTmLTg1EScDArBeY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AVDGCAkMvKCNb3cmCzxmxfBDSKMKTyGr9oR3JjAzr2HEKebKhJ74nZxqi9NirexwvjdLNTZwE1w4RVupTV6FBWi",
  "key1": "4Z6X8qhtmMBXGsr4Be5iHNVDLsbijquNE1hAEXizj7ECd1e7k7NVimCprCYc1yvK337RfzoJbHH7sAggj4aJBKEh",
  "key2": "4Ln3dpA3TVky37YWtXUMR1RNqskhgKWbBqAdBj5wHGC45oGNcb7pfZSMUivQWmTBSLfpNiJKgxg1WzdmE7Xtjv3J",
  "key3": "3jdJbotpKxbCLboTBdbCdx8XBXX4Pxh1AQqHy7x9qYtcmqtDXECmbdeDZ6xVZwHhzQSpyJ43UqvKe39MPbFNj4jg",
  "key4": "5MNhY9oBT1iWW3krZZFSqMAME6ovAzcvduBZL2a9ja7oj6A8TscPBSMptdC1cmxq4PpTu4BKUajBaPqt94reMru9",
  "key5": "EBkSTAYBj7JDg4CsCb5aoSzHkqkeSLBVqddEePpBrWpXgqzQpHdfc9UcAy3RvmXyGzbjw3KpZzdhiPuvpM572V2",
  "key6": "hHiV4feCdwDRpJNuwceJfEWCHBPuT7JkpME1boF6qjU8MRveCDJdZjs9zvTBCwN8G7E65NBK3AdJfT2eMPk7PC2",
  "key7": "24dG1SF7uRDVgaTPprmdGhZfPvntWnJp4DdQmaPPrC9vwEY6crYz96a9hA3A7ATw4wHuYs3xYVhyfpzzqEkM2aME",
  "key8": "5ojxTjtxsk9QcywGgP8nmUMXa26nB1n7sCHroD6vota9RbZC6FeQ565enCdkoNXevcX6HMuh6ZY4RqdoYLHMVaVa",
  "key9": "46CMFCPtfacZaUFxUGApTwhD8stG9gZUsjmJdScK7KdqFF6YMFjPRcrjQRnwPC7o6EfMa98cBxpQZXVkeKvVWFfs",
  "key10": "3F47Xc91NFaRXd3zX9DGNoqqoUhgdE12fgNhC47L6st8v8PCF7YmhrKF4GXDKGfGnhE5KoebULgG6ouy3mXM6oBD",
  "key11": "2tn18u6rDLR83j39Sdpf3PTWCR6w9ecRWnpprS9rv627uVEZpAWXwZT1UbHXJAzuCCnoQS1iTVgXhpK9Kv8pbWLs",
  "key12": "5xehAYDWz7oSzsqVJVSMYX2Zb44FmR64PtxAsmYkrLK4Bxy6nW7H52d6aBVYv1AUZHAefxhrrtdkfnFBx9QrWqxo",
  "key13": "5dbm47v3ZeYaTEVZq4eDnPQauo5dRbyo6XiyFkbhKxwDajVKnJaWpaAGaZaje5Zqz1XsREjfCdXnWVCchcpHHbEW",
  "key14": "2Smb6wUzJkNhpBBvmg3Utoc6xKMyi82icftbfNmqj9TPsCHbj4VKNhfkDwWuApS9cJpJsH6CAXjNupiAkbmLxzVa",
  "key15": "5kU3ZhgEmjE8syM8he4YD7sBzS9ppEr8q5BcGKjWfmtdfdM1qnu5y7UqRgXGjDmS6UZo7jCC69feAoXpVxczDt8h",
  "key16": "242hhZoct8QVF3ujDSMto2KfMdHEVnQVoENeTQyJtQZKskRdaNoJidqYdhePeHM9fad7mkbhghyivfiDHnfKuhPx",
  "key17": "4yUXcpTSTTxokBtbtgvW5xZ7ezijX4VYw4PWghgkDQ4Ew1zecKTxVZ8gWjxYc1QjabdUJC5n4QWyLf9nK4gzmWTo",
  "key18": "n9mWcgF8g6ZenuCHb9WaZkyTdkLn2n7E1PuEduq6t1cfsqyb95aTdP71kgKTKFbccJUPhsjUtyfELf3b4uhjgXf",
  "key19": "5EattHjfHQ61fRVuTNMWEs1Lu9MHvZ7ZfRDKkLs1ojJNUTPKfEjKLQR8ZXa7oqnTi6Eb3uf2yw9j5Xvux6jiVjEG",
  "key20": "DVMwdwNypsr7TpcWFvTPEYW649y7hces7usimstdGhhyD7HycbMeutJbisyjS1hikH37X1XSS2GDpVimG25e4Q3",
  "key21": "4WHhdXp92mQ9AGQGGQCFJHU6QNtrbkHHwSp6tgQsLgk5BGivb7uxA5Vkbsc3VP2WqSvxKTkCZKho7tNEYnCqvZEA",
  "key22": "4Vviu96YM8FGFvMdoVw3Hj1z39NnUddXSt3j5Un2PLVfS9brvHivw4vXbo7udxoBbFbXfZJeiDg2Fo6gB4TYTTYf",
  "key23": "ehPCu2WVRTSGR5h6YzEbBjdUFhXRomKPN2j6cKz3tSg4N5HrkFPYCVTj7AtmdnTkRXTG3MtFrnJ1TuJCoJ9aFbx",
  "key24": "5M79pCKJ85ABErnD5An7aWFoAaYw15jAGRTzQwq2XmWfus2p7Q6HkCixDJiAeGRiEfTHZ4Wbov2gKszbyCsT1kCN",
  "key25": "3nqhaDzggQXheL1rpF3Nz7uWV1pyDP8VWvn5EZaSrNfY8ZoW3v2vwvqWmEqFpNm1ipZM3VVcYYPAsoC4eq55fuuU",
  "key26": "42AiuBPb8NJPEVyQW6MkkYgjp2YNYfnswDBV1Hq5dn1hJtm2hvm7BtryZ8eADAgBN1wygyAdNeegfUi7ooFnctzn",
  "key27": "5gwTQfBo22ngTw3KwqW2VmscEDAwZwH3hMzawNe4FXS78NsZ9fXhbkfABnqtLcbdkgiDwzfLVUZBX36LDrk9uFir",
  "key28": "48Jswia1R1rzHgqD1qzhJ3MbMnM3VbLmoo6kE53bSRRfput1aQ9WbWnvmBBz2mkgSpu9BqZ1mzweeXQB5EWRerHT",
  "key29": "TiQURMQd5iDRmDHasGePjNS4HxX73oGQBWigEkxUqk3RabjdzUHA6BNSyhtUW1ZVRiGnzq1AFYCPoTUYSs6ohm4",
  "key30": "Qq2DaK9MrM5ypHufZb8UvQ1Ny9ZKByq2UYBUNEnBXaF5PCcuFCj3ixCvcNXdw22htnWBXEmuER8TE4q6uwJrh9t",
  "key31": "2CTeiscfpEMmCLgHT7LmfvB5nPZjCKBC7dwCWVfFnH1rzaX2dzucy9B9oRXJT1MmzAYjVQZCcUHBeaFXaAwAHXeG",
  "key32": "2R6fRetUFuEEGHrgczXrNojVu9Q9jjQTPSVpR1SCzUpGKqTYqgY9RqivgzTrtstYt1nCeekgu3k7aEe6o3Vr7Bwy",
  "key33": "2v6fLwFphYNe2MYthK2ahrQ6GjXoqKjmhPtToKrNUGtcvwY4NksRoGCrJdoyb6MZAX1tLRQNDmXzCZxiVpRxogo4",
  "key34": "4grTEECmS8ZvSdk4nrUiQV8svtLeMhYiDnBXrjQ2VEmy3oLoPB4u6BGWdgXH5NTEdzisJHYnXW395xSkMCiBa1mB",
  "key35": "5N26Ft8HeS4Mgg1bcyi8fyX5QrGnGyV1KkVb2k5QdGqdeC6za41n3ZGNUAJiK8dbN1znJjVh4cJfB8WDjGL3pXSi",
  "key36": "8KpNZc2foLeyZknLk1e5xV8m5Gneur565r9RjSkTtUYHvRp1vU6rCad4XdBR1Wof5HKezGfombkc6fxJYNqeu8e",
  "key37": "3zo5q1toUj9xap9gNqpzxaFQhjCZe6A8nTxBnxJtDac4GugU8pvfZjvfuBVjRjQnPRocNaiMSbp55SAxLn1pYGY5",
  "key38": "2NHB7drZ5Vh8oUXyrgXTx3Wf7iayeCBAfk3mP8Bfr4mjt8HSP6YsJMGDmZkszhascXkPwkNzmaSeTqS2U1c3snGv",
  "key39": "RwHxAmV1CLGyEx5XUeXj9WvqhQ9EmgXxjzJRA2qkCLENe82yqvZeBbrwezS9hYEcbYrk4a1gH5XCY8zFn9hkqJV",
  "key40": "3rscPM8LDdwZMsAvw1VA1zuFkdQFjDwQ55yj2uRrAH9Dgo41DvQfavwrP9SXCLUAHRg5qeDnGVC8hnmEbfzDaJJz",
  "key41": "44DhffN1ZCv4bqrYcrD5q8em5Lcftc3RFTfbBZPDvNeW14CgcdEF3TF1YvgKGEoiQcX1pcq4XmuApXPhX1SbWbqS",
  "key42": "53Lekrtw94oQTzNhLPpKo9cLULeHkqhtfPGEvAFUEDWqyc7C45wPEaauqqwU9ap4CGMCAgCQihKu1grnAj554C8J",
  "key43": "5HZjaSp7E8w35RGac79t3Kfe6Sy9DMRotvx8KeCeKgudiPvZzA3gkFVkkm8283Mv6oTGh6Z6CEX9YNgoXZ4Y8Bbk",
  "key44": "ENKUjg8VrvrxxedNDriHyVg4xEjzhTJFrPwcVfbByytkCBz71un9bXPCH4pBzzEfmqGEAJKodfnrDex4kh1gasb",
  "key45": "2CkfK9NdSWT86YYYUXLcWDtWEmF4FTudb7AgMAq2afTpEXbAGmGWWUEsCtX3CVpKtN39fohQoAd6zKfFGZ25bvcC",
  "key46": "XCqmT4YpXyinzMpSiiETcQz1hPwyvqYopjQkgK5csgHkzxxkGfx7vmrTQj7e9RhSzVW7CG4we67yQ4Pe2SgQpDu"
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
