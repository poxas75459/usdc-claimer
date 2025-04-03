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
    "C7a8qKnaMYiCw2bVkS43ESQyMztPQmhY8MCYFSFDmc52e8txBgHof2kaz8GqiCCBuHdemBiueTj9gJyKyqifthQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D5N9PwbUosW6sQ8P4Dfi1VVid1BENGQmHFwkfUCZyYqAfrDoMChv8G8Ur9sUJXoxSYBBSjd8nkGH8uu7ygYEFc",
  "key1": "5UyMK9i9f3ddMhjDEx1HgEUxVs62A3UhK2P2LjDsVhHRS83uZL9nKxifgknYhcqPsKdhCMkEn3h1mRsvCBvJHoFw",
  "key2": "3ReM26BMFeryzZFSHbAiuYDqSUEEevxs9j6oqu6Q88d3emSpddDEyjydxMqz1cS523PxgXe25Un887B2AbyMxFkt",
  "key3": "dt5wCf9XJfKyH7qMbJMMNzCqu1AyzUdwgGsi2zHa1p7k5YQHWhoxJVdC8qycj3QdqGXHjAwA4hCuQLwKLetchDT",
  "key4": "SmiSrvc1oQHf5uM7CriAtM1oK9nd73TDeXYD2r5E6aeAhMawyf4J3r1Bifs9jgoJ7u8ZaGcJqgr82oyTQKtEt1P",
  "key5": "3nnb5BVceYzXUzCV5aVs6xtwY8A2vcd2Cc9CP1yyPJJk8iq8o8u6JMrHKBk5LGDuH36iycGYwoqYRjLbJrLqo3kq",
  "key6": "3QoSTYQDXjPW5sLNuiQZJwdFobYFJGgxpzBQv1yPRTjF2XoGLMJHzVpdCVzbfBzFYrWywALudgA1cXAQ5SvPsb5S",
  "key7": "BNC8Go4X1yyhdioJR95jZKwJ8cnsrBFJ7jvxwqfGKaFfN7RnSNeHSppNzNp4XkfhWzkPtSBzqiNG3wS1D72bQvS",
  "key8": "3cRJMKgxV5UyYNQGnpTtuZ4XkwzHtT5mn6eBTyMBQH3ogWrLsaxqL9yk1ketbNWxgBUZXsfth3Th1Waz8iiRdxeW",
  "key9": "4KBRoQ9e6MnCemv82BjEWVnTRypAbmpGG5yFR4hEZqqQeoSVFqoizdHbrzpMkepxx9GLccA9wL3deUu9ZAHxumfZ",
  "key10": "3bKaLBCd4RS5BH9msTwxR7PYtMEqy2tAMfmts5FJ8iKPS9uUe9yXkAzGEceiKhEJpgwef7qawfGZRBBa9YYGYs2o",
  "key11": "3PQoLbgfcKG3L74JEPWZmbh7ppANQiUuf9u5QjnJC5q7MpxW8zPh6RjbLLym8hrbYY3Ab7bqjsqKVfeuoQjizELH",
  "key12": "4k3E6f6t15Nw5o2PMJirk2HKP9c3MACZoj9neLPcNrnPTT1XwcDdSdNfU3YUgiZE2gShQvgxqbzDrDqH9met9JLK",
  "key13": "4m4U22f9Mm1npav8zdRVpsSE2NkGqwMwN2WdRBKkRfEsN3Z69vSZiFJ12aXjZ95DDn6rmwPDqhiJ86Emr9D5Wyuu",
  "key14": "gxfasMmuurEq9rCnmrQJT9GCmbTR3oqWRBPNsJeuYcNenLWcRHKHVZhsu4JVrsuJ7G3DTbjYqnUvFxbtgjrGCV2",
  "key15": "2ZzEPgfBCfmWGDr4e8JstwubVzReYursDVTZFoZqP2DniHxKEB8hgnbUu1GjeuSdhNdazdZPbGRSYpxnvfS2Kyko",
  "key16": "43fhs1jcqT3JQjSWv8frMCwYG2JFwVTxhcBkJE5c6JmDXpCZB7Bu1WpQ9hQQRQ4L6MGiCE6o63j2gZcnz59zDQat",
  "key17": "2q1MobQw8n2NnFvJMA6d5RTNdCDdfKdySpCY1bWgpeBntbsygXUyAMr7BMyNTxDNYigeiG8x16u7JqsUeGqqVt3V",
  "key18": "382bcXFxCY9Z1NmAEQ7gW2HSUhdwPw5oAVQxguRLrWTbfib1Q1V4wRuqUXF5aBzKXZjmoT2hWzdZXc9aDC39Bnxa",
  "key19": "5QMoqRnzmTRjyzLtE1xrkfMnxmiYGMwzyMp5BqT9w9dYPGdSxuAcCVHCTbkgZN18XaXYfifVmWxQBEM41pxAhXvp",
  "key20": "3zcdkipCczQyrYuWKNoybHoSbs8WKqdaAnR93jqQ6ZUk4httwoSG45T1mL6j7ZSGejDZ3sUotNkak3HwYs1mPCxL",
  "key21": "39Bm79CrCHzJeDxMqzwL4jfsj3KrkpAJ76Z4BSHc481KmP6DghKi6T7NqvupUUqKDPc1YpxovX4jY9fuwNvuuixn",
  "key22": "4Cm1TJafouwHVQwTL2X6G2mEWLEa3mu31vKBsPK3PWnnmV4tT9MugYRssPRkV91HeWtUpgHpsxTXBSC8fBTkHP2p",
  "key23": "52Cpqwpde29RYEfxnRYkrFaM7X964VbT2MJTufMY2tPi3iagWXQdaWue4BoMt2KdxVyCX6XwfyddQ7CMbvWfW46Z",
  "key24": "4haeu9NKH6o5zo49diJpX55hSpUL2SWfMTdKgPW5JpqJrCWsPBcNnE46bhBLaX1zuGpgH9Bw8uUiUnVNnnEn24oK",
  "key25": "3GWgALEHiZUo3N5H4hC7G4qzrmvm8tcDxChWLyZqnfiuFGknxTZQYUZJHN1aoPSTEsYErLnHep3bL4fEnXsYc3WD",
  "key26": "2gGvP1htr3Gj6Rt34tCxhBcbCMmBwJs7K8gmtry6dy3ku7HFL6ogVTTsWjqCmE6hvoHhvwpgruvVwNe9jmPdfmWd",
  "key27": "z27Gnp8AUgiKm2mSEF7vbfmVCaM1wiZCDUbBFQFR3SuNHaoM4VtVuLXche5s6kcLk2KWhLAgw8S68nHkZMeoU8t",
  "key28": "4y28W1s2URGrAsAKSpZHXRjiS9KUFMUT5D1A5L5djSgaZVVU7wVmaxz3Xy87GGDvJYmeaa374omuLLC6bjLQE8dm",
  "key29": "cihx37BW47qCnxiGMLsJM7tyHuk3yu2T51hB1Pefnu1pht4b5acpxYXqjsgRnv55KtT75CCjzgVfoGtmhYkND64",
  "key30": "4D37851xoeiCWi7vt5eVH6kPz55N9NuLiFCX4MdNKoHAGmjfQMG59Ragz7fP46QWkfmbhxZvP9uWrRU7mSt1HHsn",
  "key31": "2172ki6L4WJT61nx5TAxRCmvHcE7KTNeAnfng5esFDDznoGvpi3XYrWXfhT5AAK9YJHSxDbaq9x4zqmoBTXzRRyn",
  "key32": "2qThWUwRbcpeHZyjVuYc2MpFdSCHuhmoffAz6yBvCTxAFkSFTr3EUq1vsD4kWb5KJBqFFiXyEETHLnwnHpyMohAv",
  "key33": "5oCQybyPmPJX7Xt8FqHB63jwDvpz1hzthK6orBEwPLjYWtZQJPayHHFakumd1NkhWEWW6aRb7ANRxnXYLk8PC6cw",
  "key34": "pkr5djsiXsXKuCmY1NXVXmjVgDBdi4Satd4treDBZXTpEuy4SVT8f3QHuA46ABAZXhQqSWPobDNxPNpqpXtELBZ",
  "key35": "3bHrZofHakSXNDgEzGN818yV7rFxXVXoQ5Jt9RcCsGzuJVxz3buNDnwz775dcRRPa22s7fiWuksRtTTk2EH34WFj",
  "key36": "5UmXJwvYBdX222fN8x1R5dFGPq95k9gght2RX9FPqwbAPdDB2neECzyUVXiTgBSF6e3Uvm9sKF1vPa55kD3bjxZS",
  "key37": "4ePPqNMwiTzoQv167uUm5qE5kBxbZiGJUn6YtGixdocz1WatLfQWtQHzX37g2ThmNo6Mpu32fnntsnQSwLXkjpwJ",
  "key38": "BCYv4CRSbCAPtfR4LrzkJAw4mkCGYmtznsPk2nK7PCmju88qCLtkuq3poJf6cDLf8TePYws7rFap7UoTNQDAk2F",
  "key39": "2SaRtn2M4JDpB5vFFjDykBbEWfrHz2quzKpDNQV9PPVinLwK3ELWqxj9A5aHn2pMyakVMtgtXxDNZAGoUYKSaVac",
  "key40": "oCNP2UmsGM55J4RJvV66ob4VeDS9W5mv7vDvPtoJ296e26abi52XmwTtMsEyVUti2oXRtVMhqMb4puvzwMshDca",
  "key41": "2faQzgsU9ee8rvhCzFKhRjudgS2HZyAi6zQV9ZKe1n9AAsEBqLjHnSq2bUy4rKtCikYRpTYQAqcomyn1vzD7XiUQ",
  "key42": "3ApAS4kHbfZ5cpkjkCABAbyNs4PS4mAubuUXrhR8agm78yHTqXEyvDcWv6NMtr7yFBaFqRowQiH4Ycd4xc9E8Zik",
  "key43": "4FnmgPxMg2j13THtGaMx9n4nVAmj6F2L8Ha67dASACrkruUFVDhhSuUpXqvMXWfXyF5a7NpPQMSZimHpmLiaoFyG",
  "key44": "5hwgVaNHMUMmQvG2uHVgYEe4YhctHUCAEwXXF6w3Kav5LCidF2KBbAnh6tpzMgps7TMhiN2WVNoM4fLAiNC7gM3a",
  "key45": "M5d15XTPA5qzj4WdYKzebKoM1kdUWsp3SC9geYBvYZYdJNwvFPzbxikzCvomXr4hSWLX2oNqgpLRUYmD9bBLLry",
  "key46": "5zzVa9eyxbuygfy4frf9qXyG7Eb9rfov4haGQC1bPkSeSaWweedaSi2XDkjPRNWQ7Tq94z8aGhG7neSAz5HJdXjP",
  "key47": "4eRthigyraqCeBgq8QrZ9uyEGuFCvCPFTmGGA65yjYm6xz7NX72MivUDk7i1fzFu7G2dRNYc1FoN3mMGy8ibEEFG",
  "key48": "4fZSAMAMsrkmAVVDnM6wBG8659R3XZfD6ceLafSbe59Lvydt7kYSGtF2ZDZPkGSbCDfBVVSD1zGbmr8Ci4F1b8PP"
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
