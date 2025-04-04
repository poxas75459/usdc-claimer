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
    "mRZ1yzNgWt2F5moid7LJU68X8BdM2YyBwvwQW9Yj5Xjj3gmT74kUz6a8qzmMLGY46i1tZtFoRdBfXB4xKnqiwZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFuASSSS99wQQzrG7oCkChTC95Ak7qTTKK6L7jV7x2bZREtMvo6VuatVLZkz9WJGFkG1cPzQqhLMSW686xBa32K",
  "key1": "251EKpniqR5nF22CpQkx79cBP5He7dnQTZxDNKeogLtzrirobreNUX1aWypvaYKYhCz3XCRR8GcfzE3K9wJuVtYk",
  "key2": "2WVHM2ZSPTFZhtogQKvTgbxeEK7hrCXeQ9o81MmhUwwgjf7VThC9powNDKWxspQAtM4TFRxhCnucgsv5G6mfkiWz",
  "key3": "3EVYnEkPEZATmZehfy7Kk3UJHZR2CKrTKJWUVmb1BqywEbtnVZsnLFMm4GfDmkQbAssD2mTkc7baR14dUeviBGzL",
  "key4": "tTPAKVxLgV1DbNttyNwsibKTeqts4iZE3MrTN9QpKAeZ81ykRpSYy3RBmwQp3KWb5R9zKRsxq2SF4YzqZLE5XCg",
  "key5": "okJj5eNcPhzW6W79MCjvaKCkKtJA8xoSGxMvKXxBTQgP2WGLBBCoQgNtTRacvGdN3Dot3Brpw3KGR7fMPWrwyGp",
  "key6": "94uv6EpqtLmxw4Mtuu76ZM55BNgdk535gcbvSzVGWF7zJ91vRkZujJpFeRYuTc3mh1Ax9Uhz6BuZjuK2Gt3V1mL",
  "key7": "P4642Q4guM3TS1y2XZSTNqk6Ff6j5SUNquU4gNS8kkcTgwfELm7tiZfYLnUZiNg2UKV1pibystrSHbcv38v6y9B",
  "key8": "5GCc3APBA9CHRZJ7AWr5ZdV53q35DfzJTSe81LVu95hKwBWeuxrfzjqYXWa1mSUhNJpruSkRGv72Wz2gKXKqzcYY",
  "key9": "4nyDtd6eXVin4YRtoudURRLG7vTPvXVtdyTYiFne5exSRN26fJzA9JNTPgC21MFiZHsUacQkYkSWLXmj1F3a7pTb",
  "key10": "5p8Wv4Sj2upHa55eGYGXz5uxZpWNyYBppePX3AEVCugy9RqjVUiNNRp7utSFKjZzLCiHffN9JfM5h9ttsvfjQ6cE",
  "key11": "5KEvgB4GT4X5H6sxZiCYAvYpmEnJoX5qktpEumsmGMMqNSp6P8vY8TFg3NzCnzYumNVcuK531AWtPxYdyaoEWSBY",
  "key12": "uDvUNL2bFMhRRripbgvGb3C3b75zzw5Kubrk7kGZR2hfLHNm5y8PDGaoW54b9en8jqZyHEJospp1XA9do4DyNo1",
  "key13": "5Uk77AifrXdG8EEc5d4P1HZtw8wGPWRbM9REn4A6xy54H3HAdjRcXxE6e9FzYSPwa4eWVBb29uZztBMqReQ7ME4Q",
  "key14": "4GMWF6K9vye7X5yWw6dLmC95G62avNmMFkRgG4suatH1K1bmugwFJHJqUTpaZHQ6peWD2rKnBCZMeRRordWpUsUY",
  "key15": "4mPiq9YV4jQ5mWDstD2qkEnuQeYFtoLnJ8QBdkmMRMSyycy6RtBsYvPfNsWEWEWd5GVFXR5L8NnuH7TUeYYn2hc7",
  "key16": "2nxjaWeskTtpcRCisaikYo5FmaX3xtvCSEseneCj67Sm44xYAcUsVyW3EwC7J2RAN2ScrDAok3Auem7nHBtMqVbz",
  "key17": "2Ma3WRiZeJi1a3cTe8ejz9JyuE8tYAkYDzZ2pFLDkZYTGWVKzMrwbzeE9mpxKHhJvJ9s1BdArWxyKYoyAF3v2J1i",
  "key18": "3fcLJt26EutqbJCp3V1ThP7Ep4SP4J4nsAtdMQTVxjZdHpaaRX9kY1MDk4A8BYGfAJrjLP6JWJ9n2LL9z5VXytUL",
  "key19": "4ZDeg2AbBZmWbQeydwfgXwdYJW5ztiz3fgHgEfytC2KbDiYwggqr4B3ZmFkdK7Jh7c1FRyzKcFsm2VTF7iwPrHER",
  "key20": "32hymJx7ZPdEqDgxabaY4534qszVCqK48srAwESTvywFm3y1kHLW5tpLn2XJaSgC2Yyxs6XHNGq7snD1qfzcUV6H",
  "key21": "5UJgeRhYqYGTWkCDU5YzXjMR4DUmci2t2aPzHDhBg3tj61Az96Jr99TxvAuNepCJqe7aoXYbxzqkrji9vNjrxudh",
  "key22": "4ne4dChxAdh1enh48cQtJmEvcq3kNQj4dnprkyq2oA2e6PraHLYQxN6NUXeyz6EEMJ4hbVZmpVWSDy2ZyS3wMre",
  "key23": "3pxAwbhmzG2nunjRvMqivRJKjy7VjA8VAATW68cZH3vsWpZGXCxSQn9hsbBAefoCh5rkoivSZCTA1i11rYUcSRJb",
  "key24": "3RULqzYb6MwfxiMzoCWdKbNFpqcGj83MvnG7yyj6ChX5KudnsfZRg1uFh9yePoBHPoqjbB3zHi5znLzBYuUni2pk",
  "key25": "3axG4K3zXPVCNmPkaNVCqPWmgs9scCgn659qko2gMiCk5twab1dUd88UEhda7oLUPMyxBdFAQN7isrCJZnedj1xg",
  "key26": "4nHe4NnxuADonAQaecWmrmzHx7qFsAHcoxzsgQ1nBLp5yccJNzaZdYHGpr1hK5q6fBE9gXTHJDJPy2Y1or2ZaDFK",
  "key27": "4FVkSYSH5SoVgb6UP5mZHA78zBjWVjvcqojQF2XJ22Bq6R2ujYEN5xfvu9sjC744FjkYwwkv5qCWv8qyGquMK1og",
  "key28": "5gXh5ev5YAHULMYMosv1mBNYdbkUeung9LCAVug7oYZan28bj5UuwuCzfPccQm2Ff7X6BdRTVzQzz3tVVBjUg3V5",
  "key29": "4NE7p8Rk28BSnrAhtLFM1fR9QhthfSZktwBZzs7PmaX9zuGfoPkg6PtuXRnHKZEKEzGeUx8z5r5vhcHK5XjGLgqi",
  "key30": "536ZaQSiKvkE5jDpLBYm28gKgxVytFHs8Jy8gZvCuqrjf66NdwrWx89EzpwLF71KjZjGVAJMhY8BZynPqoSEDRkJ",
  "key31": "3FW7V2qiWiqnSvv3fsz4xhWMhjMTC3B2PvtRPq8mMe3ZuTnnjhTzAR4mzSh7yryKXi17ACAunkiFBnzVyDpG2DnV",
  "key32": "4WRcPbZfXicb6zZfP1HQoNRycvtut2sUKHa5dC4uisFbzeqe9qdXRLpq5CMQYRAfEQ6SwbE4dZV1x3MoKwBvCP5R",
  "key33": "gNven4DEJpcq3FdWW9e5fgEBqwUKFh7BQrZzFtpssSS42K7YmeUZ5yn5SF4Unjs6AS9CWPbRXMZ5c99vCTcWMSw"
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
