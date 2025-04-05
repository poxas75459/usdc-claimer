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
    "5dBZHb27UYnyHvQFoRJ6EniwAntu6BURvcGfgQdcVRCNWendchH9Jn76uVaXaRyLSmRp8ohKikbDx7BL6nnaDzCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jY4aJ9v9Gf3UtNvRAMbX6KPvNU167bQtD51F6LDkkm1vMg5anz6xvsHuyrm6v5Aq5UTZ2TmgwAdxUf9csVS2UE1",
  "key1": "4hVte5DF8PA3PHpXFHmZvwcSQwesk8ZctkAfMD3EEmP7rQpicgXCZL2fNDEXNkMrUZuyMLdrkgWDVYnteZBntjiN",
  "key2": "2yqWkucAY1kgChoe33DCBi71YFY55JWwp5mbQuZsUd9RrLFURi52xohdb1i6yXxbSpQLhCrwEYfro2wV96yvd7r",
  "key3": "2XCpDegDygtKPLTc6ygdberBcbjfG6dDqQUMT7Z3jcghLXDMo2ApE2Azbc7D3GgErmFuPG7zGVzygAXtac8cpxkA",
  "key4": "3LhSYT4e5gTxn4GhnNN4our4wvkn7XmXXQ6inVKuPjiYzApzSmDsuudJUHUJZ2ufiL8UYzea961ehdaSrvUa9fBr",
  "key5": "4wvB2j9TagXZ9vFCwBhyC4Ea1exiwuAoy74TJbWkZCRcy4LxTiGdnfQ6idvn627dnvbXdkyYGJ8yHR4JC2tw14HL",
  "key6": "4HUmoaHEzu6jQ2s5AnwYepRLvCN6pVX5dJTvCSTLTi49RfuGMNjcENz9HyVRFwSuCERjb4tSv964YqASJ3oNq4Lw",
  "key7": "4cKkXQAYD7bBXtSnUrGWrNKXsFWa8R2wray9EqFRjSddXrngm7BKPkGTJgmU8h13krnchA9a1PFt93qB6M43BgKV",
  "key8": "52P8hbZMvt2ofhTWPLCFn1ma4JB63PQVLpckoaZmcA1EmUC562PkWZfcna6pstRZUgGjgAfCDN4XZpxJHoiUxpN3",
  "key9": "5N7s7ij7jyo7HQJ1THXKu4aZn7fY8PpFmQP4vQceZknKH5TkzbyWFGy5zBD52PViuUnEjNCa6w3ZgP5qwG9CJo6c",
  "key10": "4WXfXAKJbnmfekpFawxJTi79DVzAgTQSYjkqxmEWqA3qAiYrENH4LBB5UV6URPW3PkbusCvExEXuqTH25oc4NQTY",
  "key11": "qznSwc1yrHBDTG3gidwM5d65RtuW19c5nvJZQWSeUkkraeV6yiZ8hzeWC13jN9MvjTUpzF9iPFGmzWQy6QvCze7",
  "key12": "2K52Xq21TEFgADEPKR7FaAUTxbQqorQFeNseZ8qNB5UUudP3Nc4QKehsy1NFyoSz7YeEwsBumfjU1bJDnnjWpS7w",
  "key13": "2aBhiqfVDfjqspFumg79TjzJt4kZEP8ps9zqsHgKDji3KAzxzV951acPDoT5inVXWvrozxUFbdSytpM8qZEp6RLz",
  "key14": "5dVL4tiqWJjvPDo4tZ1hJe6oLrCPm26tf6AQmaWd6BBBsdSoCr175CB5Hek81TLymfavtLPz2sAn9JBxtwCdYxMw",
  "key15": "wVXbPPKsE2qq9MzPBrTYnNFvkFfAHk2ky21TJXjaeHGMjoYGSoGcNuA9FE4GCA6ax3Za5wfa5WnqRdYbwUwBE7g",
  "key16": "2Gn8F9FPoPYKg23po3u5HMhQmWyidwgJZ3PuX5RzzvvT77AJR1ujHxepzcTSmXhsNhpsPbXzwvySX5jNNV2ooMeG",
  "key17": "HX1agkeJ2MNckygkP8Dy279u9YuNX93F3wXvGeaoZQn3VoLEn1g6srKHehHB3GKyhTPCmgWwTdJQxyN7EfKqHBf",
  "key18": "5BHuABkxJsg3xRAN6jBGfudMGoAithhFB79BC1d88Ph6c23Xmju6Tb1VGMsQF4NxWo3fdbu3St5qNRoAMJzQzvw5",
  "key19": "63RDNqVqXfnjJinH8yNbHAvTNH4aH2huomnCV3dwXhEKNjnT3ZTf6v94BrLBsA4FbRSohQmn3EMz7n92xTNhHfh1",
  "key20": "3jvuYkywxE1EVJKdj1Qf7F9K252pi1jwbYm6sJ4kNxjhQJkXvg5DqDumSZDFFFDdBDeBV23FxEo8vyB4i42a8hAs",
  "key21": "2V44BvMREt7Eew2yQUuLUUCdR1pUacCGL1poLB2D8eSgPBofstmZAKSZLWpJQiqor88gTXNmeVwVYQn24mfgHNCH",
  "key22": "4XwEuJCpD3jNpio99i2ZZjW6dJPvpEQciTk9VdUTh7z1S3ZqNx7aBteVymtVR1ejqfY8NpzoLTCydApXJ6WJxNRx",
  "key23": "65hCJpZ4y48f21jmAkxzBRkZhRSY6vUnE9xrP3JZ9gxvhSdJ67iTD1KT347eEroR5vJ98xqktgn6a6dtKzuJepKj",
  "key24": "5RzM1UvSquPKiGFJHztkUk7KtZgivNx9ipvuBRFTmjpgMiJWbmZ6E47mCGcTaYzf5PuAyDwRpeRZNqYHjmGz4Tiw",
  "key25": "58MpxGw718oQnVLkJBBY3kkyEbRnJVKZz9qnfjLaJyenH2yzb4FuQ6cZMsBHk5vMb182Deh8yeKceDPyFzkrEZvN",
  "key26": "2MyEgGFASVMDyBe47HebUqUBqRTabRj2JSi7NKiWjCc2PHGprf8SBTzHdmTShhapdNJ5qQ3J8sYk7W8wziBgSGyZ",
  "key27": "ZK6YG1U3VeLzDsWpzat7ca9fsqUAGwFFd5m1vCoH2j9RGpFsgjtrGvTLqeqT9wCDqLGN53UftHBug5Z6AeqTmZw",
  "key28": "3uEfKCNxsDTYs9bpj3PY9QJNJ5Abx29s4t1zEF1fneADbTMjZoAwVP4pgYwoJ9GSD5ym4oWQAQwVtL4VmgKFA6iV",
  "key29": "3vmkp9d1nNu5Q99yem2Wzd2NQnYiLiMKCmAcbA9bv7Bogg7hPiuGFLPpMotATd8Hrf6uYNnrvH5hQCJP6jDtyoJc"
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
