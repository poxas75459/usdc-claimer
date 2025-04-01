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
    "5LGgSh1G8T9b2o2rnok8z2LAMECQi141M4NB68pzyk9jFeKhRv9mYGzwFUnmuVxYVAfgfpvaWEtB6gZJtQAtswJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sT71k67DLapUf3fZZEpo74SiYLgYtwQ5aTRwg2fHrz3Efkm8srMTZe8CjN52wApEj3ut72JXWxC8yYt4LLH4gcd",
  "key1": "3VFFQXZtiGF86g12SPAQUvScQ35Eg4YRVfKPbzWyNQuMWqJXQXG2g5xk8jH8mBdojArBAFJS4ofZSJhG3uzNW9Lx",
  "key2": "2tHdmnMxnakEFHDeCVnjVcEWFoWHVoWC5LyU9uMheeqd458mQaYk95Sg3EzUK7PzQC5DNzm4BNUt5Mp7ipqsooyE",
  "key3": "62K4BhftpYj2DzuJgyFRPTUfn8GjJTZ4Uezfkti7t4QRWTQRRxvSZr5B34EAojHQbAm2LsDpDU4bBBNYwnoB4ESa",
  "key4": "2N6shHmrrD9BufHxDa9fYUWePaNWHXQZVp5W8KiCVq7veifaTXNuqWULQNSB84pimpUJTcHQR13JaUVHNdqMmHQz",
  "key5": "67FGm1WscQ8896RfRoBNEhPRbQQ4kNLAicUUbf4XW7V5QCdu1V1aZPZByQ4BKCGYp4vS6872twodHf4yb8JN9zni",
  "key6": "4dsNhEkxV7fpm35rR3teChaTRRgKej6j85X2LYCEDeGtGfrtumwDBzwvf2GTRvjdR79UgqqgVVvNpxu2fBL3FMct",
  "key7": "qmDb6LGFs6XdbNQQZBG2AKsYtdW6PYKr9Sojt42yZbx3qfwG9GoFczUidvNL193H9XzK7Lu9fTa4y21mMg3iDRe",
  "key8": "4dzdUkSGLyU8soB5rG464hMnSMGSGCf78kGABPWC6M2iMVnwKJuDe8xtnjkSfsqHiugPuiPk5NUQBmqvZ7UmsoMq",
  "key9": "uxXJ2LRTobuPvvAnzaegm37iHP6bLE59dqzsvKS1J8Kr7nxpL79WKdipX9i1dW7MkPMJxWxHTiZjjciVpodPiRQ",
  "key10": "2LQg3x9dyK4tx7ckKPqH614teoE4jvj1JdP2r1KscAxSDXekgYFk9WYKs59MGDxuhHmzyF8dWuoKqGLfQrbV11Kt",
  "key11": "3jNbo3oEYFRpKSWnVJsPNQw6L8MRhAz7xg82qTJd9SSn1FcoyKc8p2Qw3npKJVtnjNucug3n7JZmgb5RAuUVa6r7",
  "key12": "3iN6NrpENMTAEDXmoC9SW7EV71A2XigSLLS1NB5APyzHKJjVTvc5vXqfa2qeNcdZtubxiVzhzYgNrAArqkG7aaTT",
  "key13": "4UKQmLL85LRhzy2UuLmXeopENBW6T6WqD1vubuim3foiCewmyCywmLF5wKWW8qWKiYS6phqTx2NkgWotZ2HRtpgF",
  "key14": "5TnZp6ss75oN5MiGeTogx6Ko8is7jsneYzwCGQzZKo8pBtsCcsNS94jZWL2uV4hwAFk2A16VDiDBGw4sTdws6HUv",
  "key15": "346XVRCQkEr2nx67yYU5Eq8GyzhGUCM7atKtgWK2KmYLyoZeu7pNvQ2F5QNgHPvmCp98xTSrcdMc1zvA2Pjfptbf",
  "key16": "5pBfnMu6wdovmoRXjTdmHnvg8NQjfnaPJQUo79hgtA5vDuhN4u4f8bKkzw55RsgwHgHvMZTSZAvAiWFfcAfUh3dx",
  "key17": "5J1ctN8T5zcA82sZQEyxzYCsFKYgq3AQrMtQU5tLkQRFJHWVzvMZUqaHPGsistx4zLWRpUrAGi4z5qZQcc8Uj6P3",
  "key18": "uSqqnb6jKjWyBNV13FV3QZdksFhsfY8kMtk2rA6ayL4v53YiZ6fjFxR6MDD7VavbAgngHjWvqni6hcz6qiUqFBy",
  "key19": "56TgmRL9mqyLexUEbpaQpTaf2S9HZFTYKWtSKqhHo3rFHNy4tfkdNbt7kKGFS5vUMS5FgBKjqS59vUYRL3ryNcn5",
  "key20": "2G2WVExTXKDCYwngacRMwyrUPzwNMpfy5Q6td5Na6Eb53skACfEJUgYZZkRq7ocNc3bH35RxRDpVh5s1T1kPubaR",
  "key21": "3H1Dvx4ZiSLHVUK1CqRvdfqHSTDqWnp9LTqKZQmAVZFc1WUyZj29jG5ybJN16qxZev4NcHFAk24ZpLdVv3Xh4MY8",
  "key22": "3SzQRHSebGksZMzvAZf3cUYZwLbZLrvP7FD5sY3BG32WLVuhKe87UqsyvUTeSKHR3meTaFoZKdRmdvUeQjd56DsS",
  "key23": "5jBmaGtMVRKkbnt1XMas9pDgqrEzSJRP2eznZc7BeYUa5s8FRpNQhddqz5BoGqJK1CBT3QfANPkEZqJcoztCZ3LG",
  "key24": "67RXkuNHPhsjeRgYAbLekSHdtjzMgCYf7v6mwZnuAmqXxSUF4H74xoXKvMczi6xe2d7QKCAVhvAJu6aM67beb2wW",
  "key25": "55tpzUR54FZHHFGuqNkwzXAR7Uau7GxsJ8zL3D7tYEdx6zSBLSvHMBz8u1vEX8Hq28SiaR27VoeWtPhQ2PH55rqZ",
  "key26": "37EpCppNVDn3eRgKYWjzsbKkQxrUyEzvfzujyRZyZQuPFFDwLEgcqmM3ecqrBnNAY33eYRGgwHrTX5yoNr9mE6v9",
  "key27": "5FpSedamjW4y7CrDEPW68Bbatpyjsvt87w4rpDDy477YbdmwZh59PE7LVtfcywn86StRhYnXwXjgfD1ZdA1988k2",
  "key28": "3p5Xq4r35mJETS1XtCMEjNHLgiPk7U2STdRWfkGZ1QbKZdE4yWPr9ywJijMkVadU9jt6LEtvo8aQDxyDrakVzp1h",
  "key29": "3NqBkjihnMwvwL8ydobUbbLxC4uzzbgXGLQApVo65Bqd15Aea6sKvKWdBDPc3zDy6jjqQh3sEbHDQFmJjv8BzjuP",
  "key30": "1mjCEDdyWNtKjPzXhPTyjfUG5Nxu5S4b5nDCMBhntfzd9xVHUkDaRCV5bgc39aUDx5VT5jvHi9kwvynguG2iXyG",
  "key31": "hYhsGakiMWwvP9EfTUdV9iFnzdYz1ec98nzMuAoZx6bsTX6HtNw9H4VTk932QvabHkmJKiWQJVD6QMS2Znm2qwx",
  "key32": "33AHF5dmB7dHJWHACFmRF456JcWneuhEENw24npNBrjM3Rx6eP9E2iLYEyB4Rudio9ZvafSWAbsMjPFsQebVHpGJ",
  "key33": "tY1M6SUXaLx8iURfC4XqUVLWbY8QAXt5rtUEeKnxSgFaetgxUGF7HhrMWWym7t5zb6BrpRQ9F73sti7mcJAQEZf",
  "key34": "2zrch6yivkrSJbRjyLXWK1eYMAjiG514amYQ2qnZTfCzUiMoMXQGtMkQuwFcTyH7cecmQdcxgMKfLa64umCQNoa9",
  "key35": "biLGuzJfNQKJ13otQxt33E5mB1GsPtkzCW2WxmWKgBahae6gjET6ihxyH329pE5CchQsdDexhJfABcvP83osKUu",
  "key36": "2gBak3PXuB1NCpt34sKboobwHwLShn6F5vhdxwqR3ETKisuEvSyJuBgMS3pNVQPwXqRB8T29n7tpocz71PUAYQyd",
  "key37": "5oWypWWEoDiVs2dMBgjSUGos4LbvWA6apCddLYkej7Jqnpjgqt2JNfufEjrAKzrWoBTqFPdbyPJ11JZPAwZtnG86",
  "key38": "29My5aGa4uPMfzDh3xtjo3EuSZ3VwkZampMznkG1dnGYeQDwmAFLRcBL8K97BxzGgviqe3ypyu8xvb4YQsFE2Fh8",
  "key39": "3BbeN3otmVQugThJabjJhfwF12v81wn6Cps1fjbx7zVKcmpePkNGFL919JTzC8Egf8UQXJy3u6xPoSJzRri51urM",
  "key40": "3sVDMbi1W1Fc2GDXNA8Gq8q8JJTXx9uLKdrAqhZ7o3BgAqv3xrRTcfjSz3EteLkKN4wuxj9RY3FVruUcLLRKUndY",
  "key41": "fSzCAw6RwfqYiidgRZ4RDhMQ49wJk5jrEBzmy7R1fL2CkConRn9R6cEyXrSDVp3CdNNjuWUPciK5yatycswPgNE",
  "key42": "5Evbi98SumxBAfGj2XAPEG8oymTeuHMAzFf58j52BsNcyHfEgudgSSNWjoepFgnWEngVqZZDiMto18iF5dGXeZHz"
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
