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
    "3CpxURsQMDkr4zcoy6HCB1NgdnwziPhLD7f7nCiR5bSad8KKbyaA5jzhNz9DCuiZyufkMCpDbZ8kWhiS6zneVo7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vvZZgbfYv1HWoVmsq6VUEM7uuBRJZEd5A3vwx1QsYr6ZbUqmY9zLkJZYF6jZeidksJhPBKZv5cFv7e3V9aPMNhF",
  "key1": "3PMqpWmddgkfUSSvHvZpJdDT4qPaMTK3YAtDACQ9HvXSbSh5q7uqGEaeY9f1YWgDjqDPVdSdYeNNSm7RGJmmBSmz",
  "key2": "2t6d1gSLD9MmnpFzP6r9FQxfSnnzvUAUXSVW4xYMnvD43evLwVsdZkhxqFWk2VewddWbV75R8rhXFvGcfLZUKKep",
  "key3": "tuksubCxtSkxJmYgF6AXevsxYPAvNs3HC2zoWCpu7LzPJYdQE337QXuhoSbdCkTXfBRPdmDVZCBuZGBViBHm2AX",
  "key4": "2PS2qNuXZJuPQMdkrN96DQQS17dFvY7Wu2EKotDsjjtTMcBNfy4yRMgHVyxo1D24bf6ePRYNnAeu9wJLSfmsc4MK",
  "key5": "4aFAjvn8odpdfLy3ACPBZmvh1UuNK8JhKVMXbGhuRrzFsZGH3TGamCueLqLs8PjaddbkPtENMw7qChNb93zdYdic",
  "key6": "XB6RybSaqWcMxR4WDNbL4rBZMRsN8UL9SvQeVccJi8s6N7WJHVNT1v6zuCz3dW6LYteJ5k4sKxttPCsZ2RntfMA",
  "key7": "qcUgmqh2zT6rfHjZbKvnEkh8R3qMxhQsXE8jxRxtjR6DHT4mV9VgGZwpTEP8hQmPnbXVt6eMZsodoE1iZ2HCDbr",
  "key8": "5RvJjH7t5co9wM26MPxXKeuycPNTPwG1rqrc5gdiivE2uDpR1qimYwa7Fk7VqPor67dLQLzHQ9zHR8NvWJzpr9aR",
  "key9": "3TvWRBwSH6XNmFpc7WvhsddffMuUjpez9TWfqq6Q8waKpK6XL8fjCCZiDDhM5RigVBnWfpopQw3EGJBv6ChGpWmd",
  "key10": "K6pgEnx8JwbkPPvjyHfA2rdbvVA86S9JTw8UZuUEqZt3ZT8S23mA6EwEvxEbNwhuLYu3zjKk2Ui7S2gWY2ugCw3",
  "key11": "2KH3rDuL1hbjT7MPqiUX4D5UgbPJ7fVPEhjCDAWJ5zyuHVuchgH9z3Zrm4rxwFbWYVFZoPSLUWmDYyVjGvhdZJyf",
  "key12": "2y9R1mPq4bxhLtQaZP8AuPU8XRaEBaaPdpUuiiWkaHHZu21c4FWdvjTQkbb2ey3Bv8GTsBDA6WoXS7EhivyTJeMK",
  "key13": "4dCppp28SJMMgYgYTh7CK8d2amzH1eTi8t2LGSsNtpwYnqUCWX2XHiPKWGLe8UJ6JTzick2baFZY7U8Mh8ohhWV2",
  "key14": "cjn9MCpRUkRy5WoCzQaVU7sFEqXKz8zR2h9zQfn7fwgQwuyWBuKsAY5H4jvZftrYdxZvPHqbTd72fiVLuBU8Kop",
  "key15": "9cayD9QaEQPgy7Un37Gi5MSJBhxaFDVZkE1JCTAiQmUoxbeGyxJrgCzJxMnY1U8f5fvudsMMbWfUozJAJRqauCL",
  "key16": "3FfENRwEgyBMjYH2A9BxPAitisTYuoZ4eAA5BYzR9exP7Y6e3Y1gezQPGDred985LyWLaDeNJiM4WCCN46x2gGL2",
  "key17": "2BYDBASBQpQP3kJWAiA992aJrcsKX1bAANJTAmgPd6gBPVuB5NvVBmsCyQWyhYgLZuN4cDofYHEM7rTsdSRuLYF5",
  "key18": "29gULgSdY7tSmSM6Ry4Xzm54QTt5ickiZ5vsw4Jmi3hxGWcSyoEEYUeLGZ6tLPnCdxqhXPybq3vY8vUvJ9PRnY6j",
  "key19": "48VjNRsYWn8the14JsPATEh8xLdejW7HDKcJhtLhJVr3YbCskWaga7hXkBEcD5233wnFCaWDxihq4dwmW1UyZLAP",
  "key20": "4Sz1gc1M5jqqNdofN9x48ZiuZYj3Sgf57TeWFsiXFgYYmMhsf3Hwh5DmDYP8xXmHand9dUPytnw3Cv7LrVNcd3VM",
  "key21": "599uq4raxuiLxppySSCgu1yRGQVVUDMkwuf313AafjvvhP9svKRLmnTX5DzZEmWpeAW3YUk58qrVkfvC2hAGKsxi",
  "key22": "3TM4375Gq6o4QFaGKHEf7gufyscyYs3HqZxMR9ndCqzGqbfGeNo8KVYzp8uk5pikuJVYX4vt2G4asSoL88rb14Q8",
  "key23": "3rqRUkwba25PaUMFH9qTcsrgEqk7rPYAAfR7f9kVDPAbzMeDRnrhRzov24ffdW2uVJmhoXttaz2YHetG63i8UhWS",
  "key24": "r6TYABMaYG6jXKkQZwhZaPPHsgMNs25DcbKrrN4q6q3jWhpb5A3f6z8aqCfW43mqSiKzegApnkuq9Ge278JWMZP",
  "key25": "4Cv4xy3Mo6WXbqCmoVo4gFptt5S6Sy6wmZjeeDhEFHh6duKACCmJNPQxyrAj9CQpAdmUHjMv6Nb4LD9zJZ1dFbyi",
  "key26": "9M2aM1ZvCA1mnMFokpiT9jut5SLaypLqu9U9GTohcPyQvvXAVJ2qx2dmcWEk2hTdX6Nr4bFsUC9P8kjSWEwcdWR",
  "key27": "4op2Zqa6YPSBBKPrQCBNZM7iqyV9Q97RhYpmgcZNo1e1rBXLGpdzBbn2eNmNMNF3GtmGpA2HQB61fanaUAnDy925",
  "key28": "4fCok4JQzc6tMRvk1RMMUC3Mv4p1XncMEhmB2JK9r38dTy9VKkD8XvgWDQsESUVS5UcxYsBaMwUBymqSM9N3yWi6",
  "key29": "SpURFD2TGdXUanjzGxPDR6LZ9BhpBmeAraQyS391maAJknkY8e2Kp5cM8rvNHPkb36RChKMHQ6aehQisKaMZWTs",
  "key30": "4RxLVUBTmWFhigWUkxYXUE4jfTSQYmvxzRjAdvsnExs284BriZLN3cSNJPRLyjJQBJkujL9LL4hL8MgZn6uBmuia",
  "key31": "5KPA1E3iHMxgPVc9eXPTuzuye4xaWaYr2w8yoHvGMo3iNLe381aoWMqqfArKrfwfGm2j1giGnzieoMmvEZhKY8x3",
  "key32": "4RTRjvBQ6QAFjdjbPp2ckMyHA4KmFnJRtH7svNvgj8GLNY4WtpX82zMxazFwFbY6q4GohxbKpkutrzd8Jt8vzwEh",
  "key33": "5d1wcvVKtnXNbNGx6x79ZShAuDznqpPEQUZheXzyzpzm6Lj8cMYsZREZJBtt3UkKxJrF3qzxi8toj7eESx7pGSKL",
  "key34": "4pbi38USyUta8F8ZLxCSZr9voEnPEbwpVQD3wL5TGDqsxV7EJb2tpQvgGybSenMftJQpjSFkxkBMVQofg3nhpTbe",
  "key35": "3mgH7cZQV5KEFdtxAX7P9uhK9XevKbi4ZkG7gVWZqMuhxm4fXzG4vtSvAVDdHosEcS1vYANaqn6wBzp82BmoAD7i",
  "key36": "3v7zSepgS4aXkGmPqcpUDEURPt7SC2UDdgkV1TYUYcRzZQL3ppVpgnsA2NqhT2eCA6LnZSD9oJqhHK4N9mvSF1rJ",
  "key37": "3KruE6c1N3PqWeyypBT8EnFMPg63BCBqu5D8JBY9XVRmsTyyGmTfn1g6wqbVJu8daWN55PSzpPPWpMHDDFbxqWeQ",
  "key38": "4d9kVCyeG72ULSAVcKFUEDCwNyK72CBMVhws6GoQ3hykhfcP2E8xV4W8mbWr7jgWK3qQKrskuj16pkzYpReARj2y",
  "key39": "N5CfMAXv69xs1PzFAYTxEMLWHVKue6EeqEZ94sNMRLnQ3D1qjzNrob8bdrzcc68p58TttMLaSerqFb2hFdKaxYf",
  "key40": "3x6WrCKKjjjYmCA5oP6cDAx7X8Fd96n88tdZZ8ZjAwKAovy2pDfeHjbknJoByKWE4wHfMR46QjG3Yt9xdUnUZHZF",
  "key41": "42rFLB8rgWBsddpcntR99XtAXyGmscuNLbweYnT1DpDZTAaUf87iccoRECqCanKa4UDL2RCmKZ9vS6axretYKNrw",
  "key42": "4fgMRZfmGuEPVzjvVoBzJ23GnRQbX4fuhFHTDef2DTr4oxjCpYZ83muvYZk1RAaWTptcxpndqjVnv4y2AeuChtcs",
  "key43": "3fiq7NxRPz9z4jkJoNyu8k9jfcgSrn5SaUSD5PHXp2HsgyrQnTYPrap2FJSbfSfZq88nBPWBDtg3Xt1ytPe5hMK8",
  "key44": "2ibgnANPtdsbyKuoRFWJrBRNNxP6zoV69pfdks3uRiRTwYYM8WH54kLNNau98nGyQ8vkGBNV4qQdKiSi8Mcokjkv",
  "key45": "maWgdztvJuZNM5GWeRLESoFhackBv16S3xLY2BV5UhjKvH6eVtGiP9DWZudbCEdrv6pMrgSQC2GS4H2Zr8FMzEX"
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
