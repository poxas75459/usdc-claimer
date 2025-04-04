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
    "29E7QXTVSqk9syhnwLS6R9Rvt9Xgu85AmQFbyi6343bCLC1GYLErPGABDNMBSqJFSEwMwMBBtr7C8KkYDBjA15nL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RC1UzuWYqLB4dbw4AV9FJBDmwZ4DqgDFjZZoKtsbHHSA4tn99je9pSHWVYkYZ7aWuELhzXiLPAGh287P2nXH2X7",
  "key1": "FcuvtGVbE8yTaV7sR1eNGwott7TcySeyHKxewCpzC9tyFXB9oRSHmjCJozJjqv3WaATiY1xdnndobt8RTtxvxcV",
  "key2": "ayjn6DG9QT5tv6YFWkkCFAQm7jrZbURGTsLTpSnWpHm3CSPxf9ooWx7Hu4vw4oivSsgetiVrVfi8bjrauzqxRnh",
  "key3": "5wvktwuiuVhxmeRNY7zT5NAkyhZDfjykP63X2isKvS7LVviS2aEQCmTuVPtTTNXDrrBkrorHfVPkrX5ZEpvRA3xH",
  "key4": "mVsZYYGVgg5LbLxFjAAvFQzCDPHAzZ9NBq9ZMsySfJLjmymVYWtZdNbfuWy2hhGBDmqsEXKJwPfFmRBSYqZvazr",
  "key5": "4AgFCEds3AXthLcT7fpGiCRkQMLWxUgRZ6xjAwShta2pmDEvLcf1owJ432rbjnMe3sgiJVLG4rzfGo7bg5JZ9ykM",
  "key6": "4YWPsxYJskaNP2AsXTRPDMjQEp12eAzU3dQZXhGr26GaNzwdL8EH1kMnNfWGmQp4i41sfeRXj3DzA2PaA5dWTum3",
  "key7": "2CSBCMro8akqmgV3CipVMjAgTpc2qeud7MfAxoH2vxpZrTnMSKppzyd6Y6KKT3BX7giHhx3VfagJN4xyK5EeGAri",
  "key8": "4fv4TXFtNKPmCfLHj762AnFK8adhiwrC6dPgcb9fHTcqZhD9wmWF4wSrnVgMgaj3VbhsX6ZfvGJaaLVAMLRuSTih",
  "key9": "ZCRb5CZXRYeqyMjppCcxTxNUVwhmnVB6Rs29Fpa7Z1hov5tK81NN2mUj4EmPDw4uyPWF29sQKU8HqkkJvFUo283",
  "key10": "3RJ8BmvcJAVqRZpMmhQaHmHEaZsG6ms1WsVz73rrrmTmyze8ggL2VmyfSPgMLbqNsFrLhta8QcSwAKmaLiGTosWF",
  "key11": "4F6rcQVSJE5Vc5QYp8Jd7rkH8t4ZZwuSJbDLk9jZ7y1SmSVNfySPvyeiv4NTg9J55ZGbFQrXVVNWNNbTgU3d73W3",
  "key12": "3rsSgGQpegTaA1canR8ie8Adqz47vrR1aajVFiAEkRNBfPoYxV489SK4wpkS6oEvvL4L1QqsAMuiwvquGAnBkGXX",
  "key13": "4sY3Hm2AmMoFWZ7aETdu2GH2d1JK9SykgXsQPZDqvAuZJX2Etp18pPwoYhNBxXvEwzCUCgfPbKpZ7ikJeL5vZbvh",
  "key14": "3TXaE2QQsqo2AfhJPekkUdhmxZDs51eBtnA4CBdZJLUBdHPMyojDuHHkMaxv2QLFgWD4DP2YBGrkUZTEdUnW2Yem",
  "key15": "5m99iEacWxotG9VcZx8nQsrHLkt4kY9mzULF22Q1isFY9nAans6apZ3V2iAPm3DvSYKur9hTVNzY8MLJCccHS5tL",
  "key16": "5eR2992vUSihSEqNyky8RTcon2vuKSwZYamJdxfr5H6ZRDRLEzuYQRpeUMz7nYFxTzUfZJ8Q2bxSpCFXomgX2CAf",
  "key17": "4xm6dzHAGxmvyM6syZq4wGXh5qnH8HzHx5ZXJ6StQrjoP7at3G4K5e9ZMMLJc5xtpipjXP7HtZ5ynp8wEfJtZPzW",
  "key18": "4GgrJykz6MB2PP7arN2VGrSBUGZzYsogWfZ18RJ5RGc6zCfGGKt5coT3XL42mpuqJsTxuYJJs5NtgYXRZcAfcc6k",
  "key19": "2wMpku9QkNG8FaDMJ4cyK6hCRywEYfEAxRkS3BuCSkYsbFh2UdLkbxGqkRfdzj9QGEWiWpw4HMcMVgJfvqwivW49",
  "key20": "2FPt3m2XtptkeK7pWwKoURhoYHwjeHsywn84QXJGX2VgMFnKxfejSMF7CDRMvBDrYMoFoeAVqLtvNxjJkPKdYZgn",
  "key21": "G9kgm9KmiDdwAeuBADvQXS5UoX5EjSETeARQ4LnsB9ujy3S9Gmfcnmbc76VxYcD7GDDjfqTMtxUKQfXLZ9rDD5P",
  "key22": "e6KQvdEF1wrFWG4o6XP9AiarFp2kDYR1Y771pmjfspHfj3Hf19gsjsD5E6SURDJfrYbvNQVsZUKfPAgfsRCVdhg",
  "key23": "3MpRTghrknCe4aeFDSekUXRN1FQqrWJC3m33tb2SQZ7fCa9x57XWKgzmkVtZxBiwnAKJpTaB3b7W3vN3AmZgZfkZ",
  "key24": "35AQsCzz7T2o9zDo9eEGHzZZBMuME6H6nvYQdXtreYdAy8XzDvMqrRvC5cdYaNbxr5TgkXZfkoCPZa1kmGobwyUc",
  "key25": "5Vvd1yT2SuLkRJuPZg61BMCS4t7V1ajErG951LPQP5CtZsfygnDMYCUPhU9WEpGJbChoPMNwbszupeFzfGmoxLUL",
  "key26": "5JHi97Bxww3JcxQHVr2qKFrtb1efcj7hmdD5Kh3b4uDm8g8m3sAzb67BfVaMFgUp9FRiJoHkTH8LUxnJwdpG19Ex",
  "key27": "4FmMXKCjLkF1MLBbCi6zoRywosKzDixcRUTm8YoAjX4j8pJq1wenFaKzKckDzkcTnaVwsDg31V2hu99rUo3bPpc8",
  "key28": "38eaGaidVhkwVpSYsdChrnKYVpn6GoxbSy569kg8kWvZuC3JwRU59kYxktWtXFwTS2Es4HLvyteZ7L6kNTH6ms5C",
  "key29": "n5BUY5mRKQPY85mL7o1biFoXpATjitRUUjBndPM17VgH9zYP8CzUf2g7BRww9Q3KaKA2AkHats1SE7hJbYWFhng",
  "key30": "3a1XtS7gsEmzzofAguXBdLKaJVUwURhgGvoVQmhFkhXZ6XHhcySk2BkJ5aa3d2em4oGyBo6B5US7U6AYpMTqzGDz",
  "key31": "4w5NBxn2JskLPDTNqeqtHCAfh9Kt4tmp9fU2ag3o7BHASpdSXp2MXjbwcXLLRqDS7JNLZRrUfJHrNwYfBcpUx7Vr",
  "key32": "HKSsgmyceaB3CsA9NAkmZA374W9rzkaPM1dfnNuBcmarNNmy2XEfurDrhvyTuQZKFbMHsXBzZLVE1YzCi4Re73B",
  "key33": "XFjXgQPG1QcmZxVrxbJhcViQbxdGWpyHoL9ZTev3RD37TNWTeSSSdz217xsJJWkG1uNZpGMeEtBsAYcqifRs8KX",
  "key34": "4P2EKqFMjGnKbRjpKotWxSrnpoWtBxvq5aWNGxyNGVriZMfRyZe8Fx774N9ksAU1gZpTBJceN7hBf47hjA26sRtD",
  "key35": "r2xMcrVpKYAxUkF7N7a4V2bSiQDk9yHWQngK9zfoaXhiccq1cLhHSmoQeh1KVNxbCX1WDQKbBcFzy6ehfuCq3tc",
  "key36": "66d7kvD448BD1xqvMbdMQHdXqX9vEzyqe9ry5zX4w1o5yQcCdvnvjQfnsTeP8Nbw6HRpyJHRwFz1U6KWm7vJ8dVV",
  "key37": "5QJzLXdFJ7RzzQXNmNZdnkkRjvz9HEc4cPbAEZwXBRzxMrBGNo5aVHnQErW8cN1a8pCpQ4i5b2tLVoghyHeT9hCs",
  "key38": "5iS4nX3eXsFa7wu4MDtKkgGDk8MUAR9SbQA2sedW161L9ddDPxYXrm5yNW5GHWbg1m6H4x9frGG3Pro2FNJjpEur",
  "key39": "2ZZjcYjYV6esBGkw4bHHKxidFk2k41bhccnydQ7KpVPaSD9PTjtfm7sKfcozPyppfdwNyx74FaV2PXqXCrTkJZ4g",
  "key40": "5oVecE5XfxznRT3gExczmEKjDQjChtsKax5QQEB2zhTckAFn4tQLvuigq5YuwKRNh8TegiemVsTNjDoQTT3QHaAz",
  "key41": "38vPjdx4CQEKKk3w9xf7vavWwTfwDRPXUAGPHUcpS5KNz9pZitSoq5gZcaY8gubWtiNCrF3FCJuYfqU23PEpbUdq",
  "key42": "4zk1q6u62Wbqbtso3PQ3oKjGgS6N5NB9cP3M3r4Px2DEUr1cDp9Hro2gnfypJPCyoKzcrh2KNG2SmxqA1jGZ5ovS",
  "key43": "2iLcX5ash5zd8XPjqDk6ARfCrHhx8Y4K7995bmqnMk1q7xm5zXZJ9WhAiyhXpWottUfLxq6eLnNLhDtXeUHhFcFm"
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
