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
    "3V2PgPzSDiE3SkXSiQ8uDJfZa6aK4yzT8wEY669J9QT1iP55s8pVMaZX1E9p3Skq1YW1EEhntiv5S4KdrpiDGnGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28sY7DX8ezVBFMsTo18iUwYkuvBAApQXqkWjANAkUcEHUwafu7zogxYCu6BA5Y8DF2finx64QPAxHf3E5YfLVsoo",
  "key1": "5PZ84eJ4J27WtET7WooEZetikmF3qpp3yS2QJbodpsER1ArR3C822xezZah9TdtRczeVz4U75QWMjULkMer5aD3V",
  "key2": "3XydUZ7JsqS5FU8W18eRoxmMktL7mFupRqVfiy2Q4wNwVLxXRuq7EMJX5wxaBHanW9pk1bjpQtJYguLgbirbr8UR",
  "key3": "4vGASUhnWmupJohKqdj1XP2oFQVYr5DRknVkcHnTcTy7L5fa1G2rxXKPiBe28GAfPJMiEev6FNDvxfHCRNudT3LA",
  "key4": "JNqPeb4haWsG24wG8da1jEdqQer9HFkaUzgWSHkCQTcpkEbP7ciyUHwV2Qsak6NR6Xh7oTWi1mruMDUwyfDNosC",
  "key5": "3jEc2g1ZsAYbguFbDePSmk8YbHBy83gKCuQXXA9qmnXopehXKG5mxHM824M8mHaoeVmCC1L8kSfBwmGM9eoV213k",
  "key6": "2Df3ZXzF1mF23iY7FXZAR1XjU6bvBCEgBhmVCGzVTP23hLBn15X1PgskQwCc5KmHJ9M5pUy8eA2Ftqh8nm5VjqYN",
  "key7": "3zwe5yCGpweJVdAS98H9iaNQ3412pQcxeTLF8efj1WFaYFcsvUyJ6THchJY8gVRMsqWBiv9QDrpK6yW1CST96ShA",
  "key8": "1BQyngYGVFUBJuF6j4C9FKGxJX8R26WwsdQW6aMZsvKBpLBV7BPnKbfahkMVujeTqmhJq2JwdmtX4KbqoQqj34g",
  "key9": "4tJ9k7SP1TJGnq8tY5iah9ve1k1vYhpqz9KXXuxeoT21zVjt17u4cMb9ZLxv5uuJPbAhXhUDHMTiDvJsqxMtZ4Vg",
  "key10": "3iCPvyaG4Fyr7nbKfNzUhCTjiT3qk8QdM642oQr8wQ6seiGmGrMEn2fm3WmTC5CFc1upr5C2sydpZAESLCnzAPki",
  "key11": "5ryJXVhR5gTw922aNULpEr8MGj6F2ibeqvwPt5zzSL8UsmfASuiraatHhkSbesBdYUsKMx5tQDhkM3Twykp94Abp",
  "key12": "3RRH33x3LVT9Ep3UvctUEBWMNuhAjemSDoQ2k2gu4c9o8k66ajMy2jwowxkCgXCHtJ9D2NcuysjTCFWBqbUPR1XQ",
  "key13": "3QUfX1KDeJus9pCSYtYYstd57BAiovit7WKXnahC7za1bAxWLXdVgTvHNATaCY6k1MhP1g8cPhRCQBBD72hjuqLQ",
  "key14": "3i232CbEWWzpEvZ7mXz9CmjCjvnrj2QsDNrVbUs5dMH2PMetZQ6nJfAXqf1Qcy8twVfrzcKRpS2pYzvHfihSvaeA",
  "key15": "4pzRktcTzRTAc2ggGUhRGW9P7tjJEZtY1U63TXfBuGsZYkGgqt77hfGibymmbCBcmCDiRH1YRpFMYo9M48YocZ98",
  "key16": "3jUvSw3vDb7V4V1PTgDhtWihTS1E2DV6BV7q9doY7ZKZRUZp5wfd4yHZqBQqMZeXm5Psv2XbrcwPzfjXPd1horKL",
  "key17": "44YQdWTzoH6yczCkgkFyo3aKqBGU8CPHmvmSgRsewAUYpB1fyNVgh76AMS29NYTu6MggY7bUD7hHU6yWaR37eDZQ",
  "key18": "eYrj5cKCMHGdWo64q7f9sjXbYBqbyxbDQfYyKfyy8D7TKSV2Qkh1Mkif5DDL2BYNoRFFQnkVaKgKxBFzyF6xPG3",
  "key19": "pCzQjR1R5awbbNm97LG6wbKuZttq5VHjjqZdqEJQSrruwpHPZEKtBqKW272Rckzt7njFTSJMEzbqfS3YN1bH5xs",
  "key20": "4AKh584PqgXNpE6SgZJ3hFNeX9TsXS1dCmHBFYWGHE7SpGV9WuuuKg58G9dshSgXSzDUmzqYH2QZmKssNppDJCxA",
  "key21": "2qhSJFPqMEpzWvNY34RgbdLbyFdhgQZUZ1om7LJpDLuUzQwWtP6PvRwvbJJK3CTzJLp54PH7R7a8xJW6ga7FB3At",
  "key22": "4g1UE28Xu283LtyMU4E7RTiPLFhYmSCQXxX9XCAfF2ZEnZ75vKHpdcq9PHpf3M32VoQtkq1qmUg17SQJvy96Gvps",
  "key23": "62TuRAohUYi3p4voKyVRes37bAJsxJ85X8xjkPc4yCHtSd3czdP7YgPVJSrvN4o5rwZeRc8dsSGSUTvfX6t8jmhr",
  "key24": "295jtP3GmBcWL3zf6eNietE3T84VUU6zz63BH5kULUUxXCHGdgSjbmi5qMRZy7pGKioAFcpyQRtp9AxkrLNqQAkx",
  "key25": "4u1fiMkFhWi31M1mPqdidL2NSJjGzxYrmwZGygoeZSdqaQ8ijC6NNYKLyHZEwk8BJpUCEUpdTDjFvcHqdvL4xgsa",
  "key26": "5D3VqqDsNShcmzEFix4ZXj6gPQDeuPNvfRvoxrsoFMYuBHjQhY4QfStTa6rjDdfevCNZCeo61PCy2Jb5bsYDNDy4",
  "key27": "N2nT3ZkotWregX5e1K79Jzto7NjEW6xU46s7QZNQYUj8MMNgNk6ToyNZH7RY2FwuNpL2y281axfTKvmdLxiGkE9",
  "key28": "4EcRWzvQhuWLJD6f28d1oUMTATGpS7ii8H35yJ5zoQHcnnkqaxKHnZfNYgX9Wsh4buk1bmPAuLbaBdRGLCzBZygL",
  "key29": "E55hoPTCz46eFFe6J39ZrftQsACwwdGxPVSWTVV5oXw9P4DqJR6WBJtiicsUf4RbigUpCNukEF7HsFaiKVhrHZE"
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
