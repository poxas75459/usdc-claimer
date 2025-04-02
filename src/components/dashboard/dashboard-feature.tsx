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
    "5WbAg1ztjbAbTq4fXUptKdSb4XJx54EJ3V6sEXsh1vuBWsSNBXtj4yYzjfAAn5KFwMYs4Umjrk4h5JJa14mEixHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B5JsB2fvW4mXMJGBhN26pXjDnqULj5fpRYw25HSv8cmBwjd8nFUn6FrSmpDr55Xn8uxsecNsFTUkUAwG4JsTye",
  "key1": "WbDmKXVNWiL9Lk43oT3sTa91BdXCmFNHW9D41kr977i31ayQpyvXXpsKYVYX2c5cHbNrfvnRNK44etgEhhVWPrX",
  "key2": "3uc473KiizXx2Zgkode9BjX7KzLgDan7y4T6MnnB5L66HWdkHtf5F4HHQjBocmbv7hGodKRVZj4n9Ax5gUS3PSfa",
  "key3": "24jEjXpSS7Z3MU47qUkw7XNxzwNDy9kNmS3L88JL5W4A2tUQsWXh9SLc7UrmcUdqsnpAeio7WUJyGgT8nEvm6gp7",
  "key4": "4LKDp7sLq4KjdpR4V1URMv2f71pQtV7CHkbnNx1Xu7G6pcSi2c5x7jCizHWvSchPXF5Do6dzsLQSbuDztr4SoDJV",
  "key5": "2ESkMxuL5i5pPrYcMXWRFJ1zGqDR6oh7TMtCcARV1ogVogg3CRenkZSRWtVJN5FXPgzyeHtFU7qZV3vc27YmZd4S",
  "key6": "5dHsfydNRghMtN8KRgRjFwtknAaCkzjqf8AnY6dYexyZ1grH29G7TyEKZffAq3i53uRVVDdETp37JEtdjz9Da6Hi",
  "key7": "67LZx4c8NrfqcENX9xiEM3p93SLsF8nkeg5hqt64KwqPHi6rZQrHZjtbgCzPcWXibAbGAqKccYm5BR8eDJMSU6s2",
  "key8": "52b2Mf7rXgiy4oaL4LL5Nhkc6xfWzrXhQmPtgXpgtrnEfaHsW7eVbY1Z451TndA3ANe5LSXWkfmdpeLXrSNuRXbX",
  "key9": "5JCz7YpYMrqfEhHjd6hRSXh88QpHM6AqCWqbp4YVtbqxENpQ4zvJDNQis944PGRbms93GkBtsPCQTWYuSkzHpe6x",
  "key10": "3Ppi5CUDx4iAoez2tgiWMkSVaKvmgt4VZXVBRGoZAtEoZtpco3tRExxk23TvNAgWEL5KDtpE9ZF2w15Wmj38qRJz",
  "key11": "2rFD5rsi78gQxnoPZRzbdz6AiFBRbvu5418Z93zBUK9znG2bKgBDeevh1iD3DBJGcQS4F23EibTkqmMCf6GDxCeE",
  "key12": "2mxWNCXJnY7jaDN4dVyex7W2GAhixH9n3Lg8sL4HXiWBbHgJZDjRg7KgAja5j8r2aFoX8D281RF3etfpe3YqEVDQ",
  "key13": "qbyJHecFSeU8mnZTpQBbHNdBRp8dh5oU5brXyL47XNY62GhMhJcdMpyu8wDiKMcTy68LXfumxwdHLZNgMKpxnFK",
  "key14": "2it9B7hRsrNrRitf3GeqsBj2zm1vcKJNMbVKbfffubQBwbBByAs4f7vWWaByLFsy2ZWiNGJJyKTtRgjAWfxJnCTR",
  "key15": "2qYu7sWtP1xuUk3ATPUtUyxqqbsV7nPqLvM3Jz2knrjzp59sMWkjE3zxgLRHf3r8tB4MorQ6dAqW4MdQZfRj7DPC",
  "key16": "4pXgM6qPzx2UjwGbJ5ERx6dgGsahPUeQMpWvNeUfqVZxtN3iDzJTcCPfd2NNfvpkLJRVChDL1HYCFRJUtqPHqiWB",
  "key17": "4R84XjWzFv7TyvV5W1ND4ojbE8CMLjrEtuXHW8m3SJJ8ixtxwhdZT4q3Z3tU7qNkxzrj7J63oW1CHJvpTMnFtTcv",
  "key18": "3WfosUXp7wFRGENb6CokhNSsHXBupwFBZGzY8rWMLQCrRsTvqephEPYSCtXraiRkHVkTcBR76PnWza7XcmgRF75s",
  "key19": "4gjTH5wgHruQvwQ5UnRx4YCq1ZMr9nA3zB636oxpWwMjBCTi2qXg2CvNGZQYbTfYbKZBUS6hntatcAhu8idio2nJ",
  "key20": "2zyM5W3DC6GyypDnHSFyr8xk1DsJvUFBwpb4EiJB837QF1KXAGfKQa8Z5pQ9izysQXH86uzj12yPQRW8kGgpenC",
  "key21": "ig2cYCNps6mB2L9zc1hJ2e11hjYx8TfMKbsJSe8CgoQJVKsngwq5es8T7yUcb5yXNri3ou5ShhiQECrxx1WUziJ",
  "key22": "5zjc7qwnqKmqAniJqW1Rsv5mwfqk82psSBvn3GCmYxcCCjkWhsjM8dgwAGW6WiT6wQFaLRge2huYDF66XdTKqnWQ",
  "key23": "38tBsM47Kg8MDLiNnupbZjRMdi1xoX6PFwV76AUv7YXsHg271dFgwyZQaZsKWHEecBBfuMjorrwsj1tkNC4FXYFD",
  "key24": "5A24aiwyycLjwTvuW3PGPHuydVhJq1LghtJNhn9mNn6ttpLf2qicjfJseHjrmnidHUtxYjmMzQExrET6BPmXe24h",
  "key25": "2bfHYr3ykb7GzkN5wJAd9Md2eQudLyEdPypQy6gN9yhYvJsL2Je1mBC6m5TURA5AgM9ZMHvQxTkGoroQ3VELN3GG",
  "key26": "jjXN3Kedcr8n3qE3GH8SMDMSGYt5XB4MxRivGY2AJDwjihu8tcRjWw9rUtYwbo938k9hLKznPfxTE7adLQEkU1W",
  "key27": "4Rei7ZpQWMRDWrMnnGLXkXSkqXVQ56t2jdMphwbeuYHBBXbCr2giybQ2cdyM8KgBCisGLeYB2KtTEhfbh1Wz4KdR",
  "key28": "3ixHWwTwwJhPVXuXnq6nZooA8uuPnFyBD2oBqoaoTUjt8D71rfBykyPh7TcqqccSPbicefvUkd1nagrhWzp7UtEV"
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
